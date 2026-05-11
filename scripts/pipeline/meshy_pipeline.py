"""
meshy_pipeline.py — Meshy AI text-to-3D generation + Node.js sprite rendering
===============================================================================
Generates GLB character models via Meshy AI v2, downloads them, then hands off
to the Node.js renderer to produce 4-direction isometric spritesheets.

Usage examples:
    # Single character — full Meshy + render
    python meshy_pipeline.py --char 001-pyrakh

    # Single character — skip Meshy, use existing GLB
    python meshy_pipeline.py --char 001-pyrakh --glb path/to/model.glb

    # Single character — skip Meshy entirely (GLB already in output dir)
    python meshy_pipeline.py --char 001-pyrakh --skip-meshy

    # Batch — all 234 characters
    python meshy_pipeline.py --all

    # Batch — start from character id 50
    python meshy_pipeline.py --all --from-id 50

    # Dry run — print prompts without any API calls
    python meshy_pipeline.py --all --dry-run
    python meshy_pipeline.py --char 001-pyrakh --dry-run

Cost reference:
    Meshy preview  ~$0.50 / model
    Meshy refine   ~$2.00 / model
    Total per char ~$2.50
    234 characters ~$585 total
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import sqlite3
import subprocess
import sys
import time
from pathlib import Path
from typing import Optional

import aiohttp
import aiofiles
from dotenv import load_dotenv

# ── Resolve paths relative to project root ───────────────────────────────────

PIPELINE_DIR   = Path(__file__).resolve().parent
REPO_ROOT      = PIPELINE_DIR.parents[1]
CHARACTERS_JSON = REPO_ROOT / "public" / "characters" / "characters.json"
OUTPUT_DIR     = REPO_ROOT / "public" / "characters"
DB_PATH        = PIPELINE_DIR / "pipeline.db"

load_dotenv(PIPELINE_DIR / ".env")

# ── Config from environment ───────────────────────────────────────────────────

MESHY_API_KEY    = os.getenv("MESHY_API_KEY", "")
MESHY_BASE       = "https://api.meshy.ai/openapi/v2"
NODE_BIN         = os.getenv("NODE_BIN", "node")
RENDER_SCRIPT    = PIPELINE_DIR / "render_sprites.js"

POLL_INTERVAL    = int(os.getenv("MESHY_POLL_INTERVAL", "15"))
MAX_WAIT         = int(os.getenv("MESHY_MAX_WAIT", "1800"))  # 30 min

# Cost constants (USD)
COST_PREVIEW     = 0.50
COST_REFINE      = 2.00
COST_PER_CHAR    = COST_PREVIEW + COST_REFINE

# ── Prompt dictionaries ───────────────────────────────────────────────────────

ELEMENT_3D_TOKENS: dict[str, str] = {
    "Feu":        "fire elemental, body infused with living flame, glowing lava veins, ember-bright cracks in volcanic skin",
    "Eau":        "water elemental, translucent liquid body, flowing aquamarine shapes, droplet-jeweled surface",
    "Glace":      "ice elemental, crystalline frozen armor, frost particle halo, pale blue-white translucency",
    "Electrique": "lightning elemental, crackling electrical arcs across skin, plasma-glow outline, electric-blue charge lines",
    "Vent":       "wind elemental, barely-visible swirling air form, cloud-white translucency, leaves and feathers orbiting",
    "Plante":     "nature elemental, body of living bark and interwoven leaves, vine tendrils, lush deep green",
    "Sol":        "earth elemental, dense rocky stone body, soil-dust particles, brown-grey mineral surface",
    "Roche":      "rock elemental, heavy granite-slab armor, crystalline mineral spines, dark basalt grey",
    "Insecte":    "insect hybrid warrior, chitinous exoskeleton armor, compound eyes, multiple limb joints, iridescent carapace",
    "Nuee":       "swarm entity, thousands of insects forming a humanoid silhouette, shifting insect mass body",
    "Psy":        "psychic entity, translucent humanoid with glowing mind-crystal implants, floating geometric thought-shards",
    "Tenebres":   "shadow elemental, darkness given humanoid form, void-black with deep-purple void-tear edges",
    "Ténèbres":   "shadow elemental, darkness given humanoid form, void-black with deep-purple void-tear edges",
    "Poison":     "toxic elemental, acid-green ichor beneath pale skin, dripping venom, corrupted purple-veined flesh",
    "Spectre":    "spectral ghost warrior, semi-transparent glowing outline, ectoplasm wisps, ethereal form",
    "Gravite":    "gravity elemental, distorted space surrounding body, orbiting stone debris, gravitational lens effect",
    "Gravité":    "gravity elemental, distorted space surrounding body, orbiting stone debris, gravitational lens effect",
    "Fee":        "fae creature, luminous gossamer skin, delicate insect wings, nature-magic shimmer, otherworldly grace",
    "Fée":        "fae creature, luminous gossamer skin, delicate insect wings, nature-magic shimmer, otherworldly grace",
    "Dragon":     "dragon-blooded warrior, iridescent scales, draconic horned crest, ancient-energy breath trails",
    "Combat":     "battle-hardened fighter, deep combat scars, worn layered armor, fierce martial chi aura",
    "Normal":     "ordinary humanoid appearance, subtle elemental glow, practical attire, clear focused eyes",
}

CLASS_3D_TOKENS: dict[str, str] = {
    "Enchanteur-Soutien":  "support mage robes, open hands radiating healing energy, protective stance",
    "Enchanteur-Capteur":  "control mage light armor, hands weaving binding energy, predatory ready posture",
    "Juggernaut":          "massive heavy plate armor, enormous melee weapon, unstoppable charge stance",
    "Plongeur":            "coiled strike-ready stance, dual blades drawn, mobile aggressive posture",
    "Mage-Burst":          "burst-caster robes, one hand charged with destructive arcane energy, staff",
    "Battlemage":          "hybrid plate-and-robe armor, melee sword in one hand, glowing arcane orb in other",
    "Artillerie":          "artillery specialist, massive siege launcher or heavy cannon, sturdy wide stance",
    "Tireur":              "ranged marksman, bow raised or firearm aimed, precise alert posture",
    "Assassin":            "dark leather infiltration gear, dual hidden blades, crouched shadow-hugging stance",
    "Escrimeur":           "light fencer armor, single elegant rapier raised, refined duelist composure",
    "Vanguard":            "medium plate armor, large shield forward, vanguard front-line offensive stance",
    "Gardien":             "heavy defensive armor, tower shield raised high, immovable guardian stance",
    "Spécialiste":         "unique gadget-bearer, specialized experimental equipment, unconventional posture",
    "Specialiste":         "unique gadget-bearer, specialized experimental equipment, unconventional posture",
}

FACTION_3D_TOKENS: dict[str, str] = {
    "Empire":       "imperial insignia and structured uniform elements, authoritative commanding bearing",
    "Convergence":  "sacrifice-cult iconography, zealous expression, heavy militaristic war-machine aesthetic",
    "Dissidentes":  "weathered rebel gear, improvised equipment mix, defiant fierce stance",
    "Indépendant":  "eclectic self-assembled equipment, wanderer aesthetic, watchful neutral expression",
    "Independant":  "eclectic self-assembled equipment, wanderer aesthetic, watchful neutral expression",
}

ESPECE_3D_TOKENS: dict[str, str] = {
    "Pyriens":      "stocky powerful build, volcanic heat-marking scars on skin",
    "Néréides":     "fluid graceful build, faint iridescent scale-hints on skin",
    "Aérides":      "lean agile build, feather-light bone structure, wind-adapted posture",
    "Chthoniens":   "dense compact build, mineral-textured skin, subterranean-adapted physique",
    "Umbriens":     "medium wiry build, shadow-adapted nocturnal features",
    "Sylvans":      "tall willowy build, bark-tinged organic skin, fluid natural movements",
    "Givrins":      "tall regal build, frost-kissed pale features, deliberate aristocratic posture",
    "Hommes-Liens": "diverse adaptable human build, no dominant species markers",
    "Fées":         "small impossibly delicate build, ethereal graceful proportions",
}

NEGATIVE_PROMPT = (
    "blurry, low poly, incomplete mesh, floating disconnected parts, broken topology, "
    "bad anatomy, extra limbs, deformed hands, missing limbs, multiple heads, "
    "NSFW, nude, watermark, logo, text overlay, flat 2D illustration, cartoon, anime"
)


# ── Prompt builder ────────────────────────────────────────────────────────────

def build_meshy_prompt(char: dict) -> str:
    """
    Build a Meshy text-to-3D prompt from character data.

    Format:
        [species] fantasy character, [element] elemental warrior, [class archetype],
        [physique_description_first_80_chars],
        game-ready 3D model, isometric game asset, ...
    """
    nom     = char.get("nom", "Unknown Character")
    element = char.get("element", "Normal")
    element2 = char.get("element2")
    espece  = char.get("espece", "Hommes-Liens")
    classe  = char.get("classe", "Specialiste")
    faction = char.get("faction", "Independant")
    phys    = char.get("description_physique", "").strip()

    # Truncate physical description to first 80 chars at a word boundary
    if len(phys) > 80:
        phys = phys[:80].rsplit(" ", 1)[0]

    # Gather tokens — fall back to empty string if not found
    espece_tok   = ESPECE_3D_TOKENS.get(espece, "")
    elem_tok     = ELEMENT_3D_TOKENS.get(element, ELEMENT_3D_TOKENS["Normal"])
    elem2_tok    = ELEMENT_3D_TOKENS.get(element2, "") if element2 else ""
    class_tok    = CLASS_3D_TOKENS.get(classe, "specialized warrior")
    faction_tok  = FACTION_3D_TOKENS.get(faction, "")

    # Dual-element blend
    if elem2_tok:
        elem_block = f"{elem_tok}, with secondary {elem2_tok.split(',')[0]} traces"
    else:
        elem_block = elem_tok

    parts = [
        f"{espece_tok} fantasy character" if espece_tok else "fantasy character",
        f"{elem_block}",
        class_tok,
        faction_tok,
        phys,
        "game-ready 3D character model, isometric game asset, detailed PBR textures",
        "T-pose or neutral idle stance, centered on origin, clean topology",
        "solid ground contact, no floating parts, full character visible",
    ]

    prompt = ", ".join(p for p in parts if p)
    return prompt[:1000]  # Meshy prompt limit


# ── SQLite helpers ────────────────────────────────────────────────────────────

SCHEMA = """
CREATE TABLE IF NOT EXISTS meshy_jobs (
    char_id        TEXT PRIMARY KEY,
    slug           TEXT NOT NULL,
    char_name      TEXT,
    element        TEXT,
    classe         TEXT,
    status         TEXT NOT NULL DEFAULT 'pending',
      -- pending | generating | glb_ready | rendering | done | error | skipped
    meshy_task_id  TEXT,
    preview_id     TEXT,
    refine_id      TEXT,
    glb_path       TEXT,
    cost_usd       REAL DEFAULT 0.0,
    error          TEXT,
    prompt         TEXT,
    created_at     REAL DEFAULT (unixepoch()),
    updated_at     REAL DEFAULT (unixepoch())
);

CREATE TABLE IF NOT EXISTS cost_ledger (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    ts         REAL NOT NULL,
    char_id    TEXT NOT NULL,
    stage      TEXT NOT NULL,
    cost_usd   REAL NOT NULL
);
"""


def open_db() -> sqlite3.Connection:
    """Open (or create) the pipeline SQLite DB and return a connection."""
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.executescript(SCHEMA)
    conn.commit()
    return conn


def upsert_char(conn: sqlite3.Connection, char: dict, slug: str):
    """Insert a character row if it doesn't exist yet."""
    conn.execute(
        """
        INSERT OR IGNORE INTO meshy_jobs (char_id, slug, char_name, element, classe, status)
        VALUES (?, ?, ?, ?, ?, 'pending')
        """,
        (slug, slug, char.get("nom"), char.get("element"), char.get("classe")),
    )
    conn.commit()


def update_job(conn: sqlite3.Connection, char_id: str, **kwargs):
    """Update arbitrary columns on a meshy_jobs row."""
    kwargs["updated_at"] = time.time()
    sets   = ", ".join(f"{k} = ?" for k in kwargs)
    values = list(kwargs.values()) + [char_id]
    conn.execute(f"UPDATE meshy_jobs SET {sets} WHERE char_id = ?", values)
    conn.commit()


def record_cost(conn: sqlite3.Connection, char_id: str, stage: str, amount: float):
    conn.execute(
        "INSERT INTO cost_ledger (ts, char_id, stage, cost_usd) VALUES (?, ?, ?, ?)",
        (time.time(), char_id, stage, amount),
    )
    conn.commit()


def get_total_cost(conn: sqlite3.Connection) -> float:
    row = conn.execute("SELECT COALESCE(SUM(cost_usd), 0) FROM cost_ledger").fetchone()
    return float(row[0])


def get_job(conn: sqlite3.Connection, char_id: str) -> Optional[sqlite3.Row]:
    return conn.execute(
        "SELECT * FROM meshy_jobs WHERE char_id = ?", (char_id,)
    ).fetchone()


def get_all_jobs(conn: sqlite3.Connection) -> list[sqlite3.Row]:
    return conn.execute(
        "SELECT * FROM meshy_jobs ORDER BY char_id"
    ).fetchall()


# ── Character loading ─────────────────────────────────────────────────────────

def load_characters() -> list[dict]:
    """Load all characters from characters.json."""
    with open(CHARACTERS_JSON, encoding="utf-8") as f:
        return json.load(f)


def slug_from_char(char: dict) -> str:
    """Extract the slug (e.g. '001-pyrakh') from a character dict."""
    folder = char.get("folder", "")
    if folder:
        return folder.split("/")[-1]
    nom = char.get("nom", "unknown").lower().replace(" ", "-")
    return f"{char['id']:03d}-{nom}"


def find_char_by_slug(chars: list[dict], slug: str) -> Optional[dict]:
    for char in chars:
        if slug_from_char(char) == slug:
            return char
    return None


# ── Meshy API ─────────────────────────────────────────────────────────────────

def _meshy_headers() -> dict:
    return {
        "Authorization": f"Bearer {MESHY_API_KEY}",
        "Content-Type": "application/json",
    }


async def create_preview_task(session: aiohttp.ClientSession, prompt: str) -> str:
    """
    POST to Meshy v2 text-to-3d in preview mode.
    Returns the task ID string.
    """
    payload = {
        "mode": "preview",
        "prompt": prompt,
        "negative_prompt": NEGATIVE_PROMPT,
        "art_style": "realistic",
        "should_remesh": True,
    }
    async with session.post(
        f"{MESHY_BASE}/text-to-3d",
        headers=_meshy_headers(),
        json=payload,
    ) as resp:
        if resp.status not in (200, 201, 202):
            body = await resp.text()
            raise RuntimeError(f"Meshy preview POST failed {resp.status}: {body}")
        data = await resp.json()
        task_id = data.get("result") or data.get("id")
        if not task_id:
            raise RuntimeError(f"Meshy returned no task id: {data}")
        return task_id


async def create_refine_task(session: aiohttp.ClientSession, preview_id: str) -> str:
    """
    POST to Meshy v2 text-to-3d in refine mode using an existing preview task.
    Returns the refine task ID string.
    """
    payload = {
        "mode": "refine",
        "preview_task_id": preview_id,
    }
    async with session.post(
        f"{MESHY_BASE}/text-to-3d",
        headers=_meshy_headers(),
        json=payload,
    ) as resp:
        if resp.status not in (200, 201, 202):
            body = await resp.text()
            raise RuntimeError(f"Meshy refine POST failed {resp.status}: {body}")
        data = await resp.json()
        task_id = data.get("result") or data.get("id")
        if not task_id:
            raise RuntimeError(f"Meshy refine returned no task id: {data}")
        return task_id


async def poll_until_done(
    session: aiohttp.ClientSession,
    task_id: str,
    label: str = "",
) -> dict:
    """
    Poll GET /v2/text-to-3d/{task_id} until status is SUCCEEDED.
    Raises RuntimeError on FAILED/EXPIRED, TimeoutError if MAX_WAIT exceeded.

    Returns the full task dict on success.
    """
    deadline = time.time() + MAX_WAIT
    url      = f"{MESHY_BASE}/text-to-3d/{task_id}"
    headers  = {"Authorization": f"Bearer {MESHY_API_KEY}"}

    while time.time() < deadline:
        async with session.get(url, headers=headers) as resp:
            if resp.status == 429:
                # Rate limited — back off
                await asyncio.sleep(60)
                continue
            resp.raise_for_status()
            data   = await resp.json()
            status = data.get("status", "UNKNOWN")
            pct    = data.get("progress", 0)
            prefix = f"[{label}] " if label else ""
            print(f"  {prefix}{task_id[:12]}… {status} ({pct}%)")

            if status == "SUCCEEDED":
                return data
            if status in ("FAILED", "EXPIRED"):
                err = data.get("task_error", {})
                raise RuntimeError(f"Task {task_id} {status}: {err}")

        await asyncio.sleep(POLL_INTERVAL)

    raise TimeoutError(
        f"Task {task_id} did not complete within {MAX_WAIT}s"
    )


async def download_glb(session: aiohttp.ClientSession, url: str, dest: Path):
    """Stream-download a GLB file to dest."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    async with session.get(url) as resp:
        resp.raise_for_status()
        content = await resp.read()
    async with aiofiles.open(dest, "wb") as f:
        await f.write(content)


# ── Render step (calls Node.js) ───────────────────────────────────────────────

def run_node_renderer(slug: str, glb_path: Optional[Path] = None, dry_run: bool = False) -> int:
    """
    Invoke: node scripts/pipeline/render_sprites.js --char=<slug>
    Optionally pass --glb=<path>.
    Returns process exit code.
    """
    if not RENDER_SCRIPT.exists():
        print(
            f"  [WARN] render_sprites.js not found at {RENDER_SCRIPT}\n"
            "         Skipping render step. Create the renderer to enable full pipeline."
        )
        return 0

    cmd = [NODE_BIN, str(RENDER_SCRIPT), f"--char={slug}"]
    if glb_path:
        cmd.append(f"--glb={glb_path}")

    if dry_run:
        print(f"  [DRY-RUN] Would run: {' '.join(cmd)}")
        return 0

    print(f"  Rendering sprites: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=False)
    return result.returncode


# ── Per-character pipeline ────────────────────────────────────────────────────

async def process_one(
    char: dict,
    conn: sqlite3.Connection,
    session: aiohttp.ClientSession,
    *,
    provided_glb: Optional[Path] = None,
    skip_meshy: bool = False,
    dry_run: bool = False,
) -> bool:
    """
    Full pipeline for a single character:
      1. Build prompt
      2. [Optional] Generate GLB via Meshy (preview → refine)
      3. Download GLB
      4. Run Node.js renderer

    Returns True on success.
    """
    slug     = slug_from_char(char)
    char_dir = OUTPUT_DIR / slug
    glb_dest = char_dir / "model.glb"

    # Ensure DB row exists
    upsert_char(conn, char, slug)

    print(f"\n{'='*60}")
    print(f"[{slug}] {char.get('nom')} ({char.get('element')} / {char.get('classe')})")
    print(f"{'='*60}")

    # ── Build prompt ───────────────────────────────────────────────────────
    prompt = build_meshy_prompt(char)
    update_job(conn, slug, prompt=prompt)

    if dry_run:
        print(f"  [DRY-RUN] Meshy prompt ({len(prompt)} chars):")
        print(f"    {prompt[:200]}{'...' if len(prompt) > 200 else ''}")
        print(f"  [DRY-RUN] Negative: {NEGATIVE_PROMPT[:100]}...")
        print(f"  [DRY-RUN] GLB dest: {glb_dest}")
        print(f"  [DRY-RUN] Cost: ${COST_PER_CHAR:.2f}")
        update_job(conn, slug, status="skipped")
        return True

    try:
        # ── Determine GLB source ───────────────────────────────────────────

        # Case 1: caller supplied an explicit GLB path
        if provided_glb:
            if not provided_glb.exists():
                raise FileNotFoundError(f"Provided GLB not found: {provided_glb}")
            if provided_glb != glb_dest:
                char_dir.mkdir(parents=True, exist_ok=True)
                import shutil
                shutil.copy2(provided_glb, glb_dest)
                print(f"  Copied GLB: {provided_glb} -> {glb_dest}")
            else:
                print(f"  Using existing GLB: {glb_dest}")
            update_job(conn, slug, status="glb_ready", glb_path=str(glb_dest))

        # Case 2: skip Meshy — GLB must already be at canonical path
        elif skip_meshy:
            if not glb_dest.exists():
                raise FileNotFoundError(
                    f"--skip-meshy requested but GLB not found at {glb_dest}"
                )
            print(f"  Using existing GLB (skip-meshy): {glb_dest}")
            update_job(conn, slug, status="glb_ready", glb_path=str(glb_dest))

        # Case 3: GLB already downloaded from a previous run
        elif glb_dest.exists():
            print(f"  GLB already downloaded: {glb_dest}")
            update_job(conn, slug, status="glb_ready", glb_path=str(glb_dest))

        # Case 4: Full Meshy generation
        else:
            if not MESHY_API_KEY:
                raise ValueError(
                    "MESHY_API_KEY not set. Add it to scripts/pipeline/.env "
                    "or pass --glb / --skip-meshy to bypass generation."
                )

            update_job(conn, slug, status="generating")

            # ── Preview ────────────────────────────────────────────────────
            print(f"  Submitting preview task…")
            preview_id = await create_preview_task(session, prompt)
            update_job(conn, slug, preview_id=preview_id, meshy_task_id=preview_id)
            record_cost(conn, slug, "preview", COST_PREVIEW)
            print(f"  Preview task: {preview_id}")

            await poll_until_done(session, preview_id, label="preview")

            # ── Refine ─────────────────────────────────────────────────────
            print(f"  Submitting refine task…")
            refine_id = await create_refine_task(session, preview_id)
            update_job(conn, slug, refine_id=refine_id, meshy_task_id=refine_id)
            record_cost(conn, slug, "refine", COST_REFINE)
            print(f"  Refine task: {refine_id}")

            refine_data = await poll_until_done(session, refine_id, label="refine")

            # ── Download GLB ───────────────────────────────────────────────
            model_urls = refine_data.get("model_urls", {})
            glb_url    = model_urls.get("glb") or model_urls.get("obj")
            if not glb_url:
                raise RuntimeError(
                    f"No GLB URL in Meshy response. Available: {list(model_urls.keys())}"
                )

            print(f"  Downloading GLB: {glb_url[:80]}…")
            await download_glb(session, glb_url, glb_dest)
            size_kb = glb_dest.stat().st_size // 1024
            print(f"  Downloaded: {glb_dest} ({size_kb} KB)")

            update_job(
                conn, slug,
                status="glb_ready",
                glb_path=str(glb_dest),
                cost_usd=COST_PER_CHAR,
            )

        # ── Render sprites ─────────────────────────────────────────────────
        update_job(conn, slug, status="rendering")
        rc = run_node_renderer(slug, glb_dest, dry_run=dry_run)

        if rc != 0:
            raise RuntimeError(f"Node renderer exited with code {rc}")

        update_job(conn, slug, status="done")
        total = get_total_cost(conn)
        print(f"  [OK] {slug} — cumulative cost: ${total:.2f}")
        return True

    except Exception as exc:
        error_msg = f"{type(exc).__name__}: {exc}"
        print(f"  [ERROR] {slug}: {error_msg}")
        update_job(conn, slug, status="error", error=error_msg)
        return False


# ── Batch runner ──────────────────────────────────────────────────────────────

async def run_batch(
    chars: list[dict],
    conn: sqlite3.Connection,
    *,
    skip_meshy: bool = False,
    dry_run: bool = False,
) -> dict[str, int]:
    """Process characters sequentially (Meshy has aggressive rate limits)."""
    results = {"ok": 0, "error": 0, "skip": 0}

    # Timeout generous: preview(30min) + refine(30min) + download + render
    timeout = aiohttp.ClientTimeout(total=7200)

    async with aiohttp.ClientSession(timeout=timeout) as session:
        for i, char in enumerate(chars, 1):
            slug = slug_from_char(char)
            job  = get_job(conn, slug)

            # Skip already-done chars in resumable mode
            if job and job["status"] == "done" and not dry_run:
                print(f"[{i}/{len(chars)}] Skip (done): {slug}")
                results["skip"] += 1
                continue

            ok = await process_one(
                char, conn, session,
                skip_meshy=skip_meshy,
                dry_run=dry_run,
            )
            results["ok" if ok else "error"] += 1

    return results


# ── Status table (rich) ───────────────────────────────────────────────────────

def print_status_table(conn: sqlite3.Connection):
    """Print a rich progress table of all characters."""
    try:
        from rich.console import Console
        from rich.table import Table
        from rich import box

        console = Console()
        table   = Table(
            title="Meshy Pipeline Status",
            box=box.ROUNDED,
            show_header=True,
            header_style="bold magenta",
        )
        table.add_column("Slug",          style="cyan",    no_wrap=True)
        table.add_column("Name",          style="white")
        table.add_column("Element",       style="yellow")
        table.add_column("Status",        style="green")
        table.add_column("Meshy Task",    style="dim")
        table.add_column("Cost USD",      justify="right", style="blue")
        table.add_column("Error",         style="red",     no_wrap=False, max_width=40)

        STATUS_COLORS = {
            "done":      "[bold green]done[/bold green]",
            "glb_ready": "[green]glb_ready[/green]",
            "rendering": "[yellow]rendering[/yellow]",
            "generating":"[cyan]generating[/cyan]",
            "pending":   "[dim]pending[/dim]",
            "error":     "[bold red]error[/bold red]",
            "skipped":   "[dim]skipped[/dim]",
        }

        jobs = get_all_jobs(conn)

        # Summary counts
        counts: dict[str, int] = {}
        total_cost = 0.0

        for job in jobs:
            status  = job["status"]
            counts[status] = counts.get(status, 0) + 1
            cost    = float(job["cost_usd"] or 0)
            total_cost += cost

            status_str  = STATUS_COLORS.get(status, status)
            task_id_str = (job["meshy_task_id"] or "")[:12]
            error_str   = (job["error"] or "")[:60]
            cost_str    = f"${cost:.2f}" if cost else "—"

            table.add_row(
                job["slug"] or job["char_id"],
                job["char_name"] or "",
                job["element"] or "",
                status_str,
                task_id_str,
                cost_str,
                error_str,
            )

        console.print(table)

        # Summary footer
        summary_parts = [f"[bold]Total: {len(jobs)} chars[/bold]"]
        for s, n in sorted(counts.items()):
            summary_parts.append(f"{s}: {n}")
        summary_parts.append(f"[blue]${total_cost:.2f} spent[/blue]")
        console.print("  " + "  |  ".join(summary_parts))

    except ImportError:
        # Fallback: plain text table
        print("\n=== Pipeline Status ===")
        print(f"{'Slug':<30} {'Status':<12} {'Cost':>8}  Error")
        print("-" * 80)
        jobs = get_all_jobs(conn)
        total_cost = 0.0
        for job in jobs:
            cost = float(job["cost_usd"] or 0)
            total_cost += cost
            err  = (job["error"] or "")[:40]
            print(
                f"{job['char_id']:<30} "
                f"{job['status']:<12} "
                f"${cost:>7.2f}  "
                f"{err}"
            )
        print("-" * 80)
        total_cost_db = get_total_cost(conn)
        print(f"Total ledger cost: ${total_cost_db:.2f}")


# ── CLI entry point ───────────────────────────────────────────────────────────

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Meshy AI → GLB → spritesheet pipeline",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )

    mode_group = parser.add_mutually_exclusive_group()
    mode_group.add_argument(
        "--char", metavar="SLUG",
        help="Process a single character by slug (e.g. 001-pyrakh)",
    )
    mode_group.add_argument(
        "--all", action="store_true",
        help="Process all characters from characters.json",
    )
    mode_group.add_argument(
        "--status", action="store_true",
        help="Show per-character progress table and exit",
    )

    parser.add_argument(
        "--glb", metavar="PATH", type=Path,
        help="Provide an existing GLB file (skips Meshy generation)",
    )
    parser.add_argument(
        "--skip-meshy", action="store_true",
        help="Skip Meshy entirely; GLB must already be at public/characters/{slug}/model.glb",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Print prompts and actions without making any API calls",
    )
    parser.add_argument(
        "--from-id", metavar="N", type=int, default=1,
        help="Batch mode: start from character id N (default: 1)",
    )

    return parser.parse_args()


def main():
    args  = parse_args()
    conn  = open_db()
    chars = load_characters()

    # ── Status mode ────────────────────────────────────────────────────────────
    if args.status:
        # Pre-populate DB with all chars for a complete status view
        for char in chars:
            slug = slug_from_char(char)
            upsert_char(conn, char, slug)
        print_status_table(conn)
        conn.close()
        return

    # ── Single character mode ─────────────────────────────────────────────────
    if args.char:
        char = find_char_by_slug(chars, args.char)
        if not char:
            print(f"[ERROR] Character '{args.char}' not found in characters.json")
            print("        Available slugs start with:")
            for c in chars[:5]:
                print(f"          {slug_from_char(c)}")
            conn.close()
            sys.exit(1)

        async def run_single():
            timeout = aiohttp.ClientTimeout(total=7200)
            async with aiohttp.ClientSession(timeout=timeout) as session:
                ok = await process_one(
                    char, conn, session,
                    provided_glb=args.glb,
                    skip_meshy=args.skip_meshy,
                    dry_run=args.dry_run,
                )
            return ok

        ok = asyncio.run(run_single())
        conn.close()
        sys.exit(0 if ok else 1)

    # ── Batch mode ────────────────────────────────────────────────────────────
    if args.all:
        # Filter from --from-id
        filtered = [c for c in chars if c.get("id", 0) >= args.from_id]
        if not filtered:
            print(f"[WARN] No characters with id >= {args.from_id}")
            conn.close()
            return

        print(f"[Batch] Processing {len(filtered)} characters (from id {args.from_id})")
        if args.dry_run:
            print("[Batch] DRY RUN — no API calls will be made")

        cost_before = get_total_cost(conn)

        results = asyncio.run(
            run_batch(
                filtered, conn,
                skip_meshy=args.skip_meshy,
                dry_run=args.dry_run,
            )
        )

        cost_after = get_total_cost(conn)
        spent      = cost_after - cost_before

        print(f"\n{'='*60}")
        print(f"[Batch] Complete")
        print(f"  OK:    {results['ok']}")
        print(f"  Error: {results['error']}")
        print(f"  Skip:  {results['skip']}")
        print(f"  Cost this run: ${spent:.2f}  (total: ${cost_after:.2f})")
        print(f"{'='*60}")
        conn.close()
        return

    # No mode selected
    print("[ERROR] Specify --char SLUG, --all, or --status")
    print("        Run with -h for help.")
    conn.close()
    sys.exit(1)


if __name__ == "__main__":
    main()
