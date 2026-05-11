"""
STAGE 2 — ASYNC IMAGE GENERATION ORCHESTRATOR
===============================================
Reads prompts.json from Stage 1, calls Stability AI (primary) or Replicate
(fallback), tracks state in SQLite, handles rate limiting and cost tracking.

Usage:
    # Full run
    python stage2_generator.py

    # Resume interrupted run (skips completed entries automatically)
    python stage2_generator.py

    # Dry run — print what would be sent without calling API
    python stage2_generator.py --dry-run

    # Only generate missing slots for one character
    python stage2_generator.py --filter-slug 001-pyrakh

Environment variables (set in .env or shell):
    STABILITY_API_KEY   — Stability AI key (primary)
    REPLICATE_API_TOKEN — Replicate token (fallback)
    USE_REPLICATE       — set to "1" to force Replicate
    MAX_CONCURRENT      — parallel requests (default 4)
    RATE_LIMIT_RPM      — requests per minute cap (default 60)

Dependencies:
    pip install aiohttp aiofiles python-dotenv tqdm
"""

from __future__ import annotations

import argparse
import asyncio
import base64
import json
import os
import sqlite3
import time
import traceback
from datetime import datetime
from pathlib import Path
from typing import Any

import aiohttp
import aiofiles
from dotenv import load_dotenv
from tqdm import tqdm

load_dotenv()

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
REPO_ROOT      = Path(__file__).resolve().parents[2]
PROMPTS_JSON   = REPO_ROOT / "scripts" / "pipeline" / "output" / "prompts.json"
STATE_DB       = REPO_ROOT / "scripts" / "pipeline" / "output" / "generation_state.db"
OUTPUT_DIR     = REPO_ROOT / "public"   # assets land in public/characters/<slug>/

# ---------------------------------------------------------------------------
# API config
# ---------------------------------------------------------------------------
STABILITY_BASE_URL = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"
REPLICATE_BASE_URL = "https://api.replicate.com/v1/predictions"

STABILITY_MODEL = "stable-diffusion-xl-1024-v1-0"
REPLICATE_MODEL = "stability-ai/sdxl:39ed52f2319f9bf4d9f80c9e0426dc07"

STABILITY_API_KEY   = os.getenv("STABILITY_API_KEY", "")
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN", "")
USE_REPLICATE       = os.getenv("USE_REPLICATE", "0") == "1"
MAX_CONCURRENT      = int(os.getenv("MAX_CONCURRENT", "4"))
RATE_LIMIT_RPM      = int(os.getenv("RATE_LIMIT_RPM", "60"))

# Cost tracking (USD per image, approximate)
COST_PER_IMAGE_STABILITY = 0.002   # ~$0.002 per SDXL image @ Stability AI
COST_PER_IMAGE_REPLICATE  = 0.004  # ~$0.004 per SDXL run @ Replicate

# ---------------------------------------------------------------------------
# SQLite state DB schema
# ---------------------------------------------------------------------------
SCHEMA = """
CREATE TABLE IF NOT EXISTS generation_jobs (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id     INTEGER NOT NULL,
    character_slug   TEXT NOT NULL,
    slot             TEXT NOT NULL,
    output_path      TEXT NOT NULL,
    status           TEXT NOT NULL DEFAULT 'pending',
      -- pending | in_progress | success | failed | rejected
    attempts         INTEGER NOT NULL DEFAULT 0,
    last_attempt_ts  TEXT,
    error_msg        TEXT,
    api_used         TEXT,
    cost_usd         REAL DEFAULT 0.0,
    seed_used        INTEGER,
    width            INTEGER,
    height           INTEGER,
    positive_prompt  TEXT,
    negative_prompt  TEXT,
    UNIQUE(character_slug, slot)
);

CREATE TABLE IF NOT EXISTS cost_ledger (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    ts          TEXT NOT NULL,
    api         TEXT NOT NULL,
    images      INTEGER NOT NULL,
    cost_usd    REAL NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_status ON generation_jobs(status);
CREATE INDEX IF NOT EXISTS idx_slug   ON generation_jobs(character_slug);
"""

MAX_RETRIES = 3
RETRY_DELAYS = [5, 30, 120]   # seconds between retries (exponential-ish)


# ---------------------------------------------------------------------------
# DB helpers
# ---------------------------------------------------------------------------

def init_db(db_path: Path) -> sqlite3.Connection:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(db_path), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.executescript(SCHEMA)
    conn.commit()
    return conn


def load_prompts_into_db(conn: sqlite3.Connection, prompts: list[dict]) -> int:
    """Insert prompt records as 'pending' jobs, skip if already exists."""
    inserted = 0
    for p in prompts:
        try:
            conn.execute(
                """
                INSERT OR IGNORE INTO generation_jobs
                    (character_id, character_slug, slot, output_path,
                     seed_used, width, height, positive_prompt, negative_prompt)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    p["character_id"],
                    p["character_slug"],
                    p["slot"],
                    p["output_path"],
                    p["seed"],
                    p["width"],
                    p["height"],
                    p["positive"],
                    p["negative"],
                ),
            )
            inserted += conn.execute("SELECT changes()").fetchone()[0]
        except sqlite3.Error as e:
            print(f"[DB] Insert error for {p['character_slug']}/{p['slot']}: {e}")
    conn.commit()
    return inserted


def get_pending_jobs(conn: sqlite3.Connection, filter_slug: str | None = None) -> list[sqlite3.Row]:
    if filter_slug:
        return conn.execute(
            "SELECT * FROM generation_jobs WHERE status IN ('pending','failed') AND character_slug LIKE ? ORDER BY character_id, slot",
            (f"%{filter_slug}%",),
        ).fetchall()
    return conn.execute(
        "SELECT * FROM generation_jobs WHERE status IN ('pending','failed') ORDER BY character_id, slot"
    ).fetchall()


def mark_job(conn: sqlite3.Connection, job_id: int, status: str,
             error: str | None = None, api: str | None = None, cost: float = 0.0):
    conn.execute(
        """
        UPDATE generation_jobs
        SET status=?, last_attempt_ts=?, error_msg=?, api_used=?, cost_usd=cost_usd+?,
            attempts=attempts+1
        WHERE id=?
        """,
        (status, datetime.utcnow().isoformat(), error, api, cost, job_id),
    )
    conn.commit()


def record_cost(conn: sqlite3.Connection, api: str, images: int, cost: float):
    conn.execute(
        "INSERT INTO cost_ledger (ts, api, images, cost_usd) VALUES (?, ?, ?, ?)",
        (datetime.utcnow().isoformat(), api, images, cost),
    )
    conn.commit()


def get_total_cost(conn: sqlite3.Connection) -> float:
    row = conn.execute("SELECT COALESCE(SUM(cost_usd), 0) FROM cost_ledger").fetchone()
    return row[0]


def get_stats(conn: sqlite3.Connection) -> dict:
    rows = conn.execute(
        "SELECT status, COUNT(*) as cnt FROM generation_jobs GROUP BY status"
    ).fetchall()
    return {r["status"]: r["cnt"] for r in rows}


# ---------------------------------------------------------------------------
# Rate limiter
# ---------------------------------------------------------------------------

class RateLimiter:
    """Token-bucket rate limiter for requests per minute."""

    def __init__(self, rpm: int):
        self.rpm = rpm
        self.min_interval = 60.0 / rpm   # seconds between requests
        self._last_request = 0.0
        self._lock = asyncio.Lock()

    async def acquire(self):
        async with self._lock:
            now = time.monotonic()
            wait = self.min_interval - (now - self._last_request)
            if wait > 0:
                await asyncio.sleep(wait)
            self._last_request = time.monotonic()


# ---------------------------------------------------------------------------
# Stability AI API
# ---------------------------------------------------------------------------

async def call_stability(
    session: aiohttp.ClientSession,
    prompt: str,
    negative_prompt: str,
    seed: int,
    width: int,
    height: int,
) -> bytes:
    """
    Call Stability AI SDXL text-to-image.
    Returns raw PNG bytes.
    Raises aiohttp.ClientResponseError on API error.
    """
    headers = {
        "Authorization": f"Bearer {STABILITY_API_KEY}",
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
    payload = {
        "text_prompts": [
            {"text": prompt, "weight": 1.0},
            {"text": negative_prompt, "weight": -1.0},
        ],
        "cfg_scale": 7.5,
        "height": height,
        "width": width,
        "samples": 1,
        "steps": 30,
        "seed": seed,
        "style_preset": "fantasy-art",
    }

    async with session.post(STABILITY_BASE_URL, headers=headers, json=payload) as resp:
        resp.raise_for_status()
        data = await resp.json()

    # Response: {"artifacts": [{"base64": "...", "seed": ..., "finishReason": "SUCCESS"}]}
    artifact = data["artifacts"][0]
    if artifact.get("finishReason") not in ("SUCCESS", "CONTENT_FILTERED"):
        raise ValueError(f"Stability returned finishReason={artifact.get('finishReason')}")
    return base64.b64decode(artifact["base64"])


# ---------------------------------------------------------------------------
# Replicate API (async polling)
# ---------------------------------------------------------------------------

async def call_replicate(
    session: aiohttp.ClientSession,
    prompt: str,
    negative_prompt: str,
    seed: int,
    width: int,
    height: int,
) -> bytes:
    """
    Call Replicate SDXL, poll until complete, return PNG bytes.
    """
    headers = {
        "Authorization": f"Token {REPLICATE_API_TOKEN}",
        "Content-Type": "application/json",
    }
    payload = {
        "version": REPLICATE_MODEL.split(":")[1],
        "input": {
            "prompt": prompt,
            "negative_prompt": negative_prompt,
            "seed": seed,
            "width": width,
            "height": height,
            "num_inference_steps": 30,
            "guidance_scale": 7.5,
            "num_outputs": 1,
        },
    }

    # Create prediction
    async with session.post(REPLICATE_BASE_URL, headers=headers, json=payload) as resp:
        resp.raise_for_status()
        prediction = await resp.json()

    prediction_id = prediction["id"]
    poll_url = f"{REPLICATE_BASE_URL}/{prediction_id}"

    # Poll until done (max 120 seconds)
    for _ in range(60):
        await asyncio.sleep(2)
        async with session.get(poll_url, headers=headers) as resp:
            resp.raise_for_status()
            result = await resp.json()
        if result["status"] == "succeeded":
            image_url = result["output"][0]
            async with session.get(image_url) as img_resp:
                img_resp.raise_for_status()
                return await img_resp.read()
        elif result["status"] in ("failed", "canceled"):
            raise ValueError(f"Replicate prediction {prediction_id} {result['status']}: {result.get('error')}")

    raise TimeoutError(f"Replicate prediction {prediction_id} timed out after 120s")


# ---------------------------------------------------------------------------
# Single job runner
# ---------------------------------------------------------------------------

async def run_job(
    job: sqlite3.Row,
    conn: sqlite3.Connection,
    session: aiohttp.ClientSession,
    rate_limiter: RateLimiter,
    dry_run: bool = False,
) -> bool:
    """Process one generation job. Returns True on success."""
    job_id   = job["id"]
    slug     = job["character_slug"]
    slot     = job["slot"]
    out_path = OUTPUT_DIR / job["output_path"]
    prompt   = job["positive_prompt"]
    negative = job["negative_prompt"]
    seed     = job["seed_used"]
    width    = job["width"]
    height   = job["height"]
    attempts = job["attempts"]

    if dry_run:
        print(f"[DRY-RUN] Would generate: {slug}/{slot} -> {job['output_path']}")
        mark_job(conn, job_id, "success", api="dry-run")
        return True

    # Skip if file already exists on disk (manual override possible)
    if out_path.exists():
        mark_job(conn, job_id, "success", api="preexisting")
        return True

    api_name = "replicate" if USE_REPLICATE else "stability"
    cost     = COST_PER_IMAGE_REPLICATE if USE_REPLICATE else COST_PER_IMAGE_STABILITY

    for attempt in range(MAX_RETRIES):
        try:
            await rate_limiter.acquire()

            if USE_REPLICATE:
                img_bytes = await call_replicate(session, prompt, negative, seed, width, height)
            else:
                img_bytes = await call_stability(session, prompt, negative, seed, width, height)

            # Write image
            out_path.parent.mkdir(parents=True, exist_ok=True)
            async with aiofiles.open(out_path, "wb") as f:
                await f.write(img_bytes)

            mark_job(conn, job_id, "success", api=api_name, cost=cost)
            record_cost(conn, api_name, 1, cost)
            return True

        except aiohttp.ClientResponseError as e:
            if e.status == 429:
                # Rate limited by server — wait longer
                wait = RETRY_DELAYS[min(attempt, len(RETRY_DELAYS) - 1)]
                print(f"[RATE-LIMIT] {slug}/{slot}: server 429, waiting {wait}s...")
                await asyncio.sleep(wait)
            elif e.status in (500, 502, 503, 504):
                wait = RETRY_DELAYS[min(attempt, len(RETRY_DELAYS) - 1)]
                print(f"[SERVER-ERROR] {slug}/{slot}: HTTP {e.status}, retry in {wait}s...")
                await asyncio.sleep(wait)
            else:
                error_msg = f"HTTP {e.status}: {e.message}"
                mark_job(conn, job_id, "failed", error=error_msg, api=api_name)
                print(f"[FAIL] {slug}/{slot}: {error_msg}")
                return False

        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                wait = RETRY_DELAYS[min(attempt, len(RETRY_DELAYS) - 1)]
                print(f"[RETRY {attempt+1}] {slug}/{slot}: {e}, retrying in {wait}s...")
                await asyncio.sleep(wait)
            else:
                error_msg = f"{type(e).__name__}: {e}"
                mark_job(conn, job_id, "failed", error=error_msg, api=api_name)
                print(f"[FAIL] {slug}/{slot}: {error_msg}")
                return False

    return False


# ---------------------------------------------------------------------------
# Async batch orchestrator
# ---------------------------------------------------------------------------

async def run_batch(
    jobs: list[sqlite3.Row],
    conn: sqlite3.Connection,
    dry_run: bool = False,
) -> dict:
    rate_limiter = RateLimiter(RATE_LIMIT_RPM)
    semaphore    = asyncio.Semaphore(MAX_CONCURRENT)
    results      = {"success": 0, "failed": 0}

    connector = aiohttp.TCPConnector(limit=MAX_CONCURRENT * 2)
    timeout   = aiohttp.ClientTimeout(total=180)

    async with aiohttp.ClientSession(connector=connector, timeout=timeout) as session:
        progress = tqdm(total=len(jobs), desc="Generating assets", unit="img")

        async def worker(job):
            async with semaphore:
                ok = await run_job(job, conn, session, rate_limiter, dry_run=dry_run)
                if ok:
                    results["success"] += 1
                else:
                    results["failed"] += 1
                progress.update(1)
                # Live cost display
                total_cost = get_total_cost(conn)
                progress.set_postfix(cost=f"${total_cost:.2f}", fail=results["failed"])

        tasks = [asyncio.create_task(worker(job)) for job in jobs]
        await asyncio.gather(*tasks)
        progress.close()

    return results


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Async batch image generator")
    parser.add_argument("--dry-run", action="store_true",
                        help="Print jobs without calling API")
    parser.add_argument("--filter-slug", type=str, default=None,
                        help="Only process jobs matching this slug substring")
    parser.add_argument("--prompts-json", type=Path, default=PROMPTS_JSON)
    parser.add_argument("--db", type=Path, default=STATE_DB)
    parser.add_argument("--stats", action="store_true",
                        help="Print DB stats and exit")
    args = parser.parse_args()

    conn = init_db(args.db)

    if args.stats:
        stats = get_stats(conn)
        total_cost = get_total_cost(conn)
        print("=== Generation Stats ===")
        for status, cnt in sorted(stats.items()):
            print(f"  {status:15s}: {cnt:5d}")
        print(f"  Total cost (USD): ${total_cost:.4f}")
        conn.close()
        return

    # Load prompts into DB
    if not args.prompts_json.exists():
        print(f"[ERROR] prompts.json not found at {args.prompts_json}")
        print("  Run stage1_prompt_generator.py first.")
        conn.close()
        return

    with open(args.prompts_json, encoding="utf-8") as f:
        prompts = json.load(f)

    inserted = load_prompts_into_db(conn, prompts)
    print(f"[Stage 2] Loaded {len(prompts)} prompts ({inserted} new entries in DB)")

    # Check API keys
    if not args.dry_run:
        if USE_REPLICATE and not REPLICATE_API_TOKEN:
            print("[ERROR] REPLICATE_API_TOKEN not set. Use --dry-run or set the env var.")
            conn.close()
            return
        if not USE_REPLICATE and not STABILITY_API_KEY:
            print("[ERROR] STABILITY_API_KEY not set. Use --dry-run or set the env var.")
            conn.close()
            return

    jobs = get_pending_jobs(conn, filter_slug=args.filter_slug)
    print(f"[Stage 2] {len(jobs)} jobs to process")

    if not jobs:
        print("[Stage 2] Nothing pending. All done or no matching filter.")
        stats = get_stats(conn)
        for k, v in stats.items():
            print(f"  {k}: {v}")
        conn.close()
        return

    results = asyncio.run(run_batch(list(jobs), conn, dry_run=args.dry_run))

    print(f"\n[Stage 2] Complete — success={results['success']}, failed={results['failed']}")
    print(f"[Stage 2] Total cost so far: ${get_total_cost(conn):.4f}")
    conn.close()


if __name__ == "__main__":
    main()
