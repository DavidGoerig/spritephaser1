"""
STAGE 4 — QUALITY CONTROL
===========================
Two components:

A) Automated failure detection
   - Checks each processed image for: blank/white output, wrong dimensions,
     near-zero alpha coverage, identical images (possible API hallucination),
     file size anomalies
   - Writes failed QC records back to SQLite with status='rejected'
   - Adds rejected jobs to a regeneration queue

B) Flask web review UI
   - Serves a simple gallery at http://localhost:5050
   - Shows image grid per character with Accept / Reject / Regenerate buttons
   - POST /review  -> updates DB and adds to regen queue
   - POST /regen   -> moves rejected back to 'pending' for Stage 2 to retry
   - GET  /stats   -> JSON summary

Usage:
    # Run automated QC only (no UI)
    python stage4_qc.py --auto-only

    # Run automated QC then start review UI
    python stage4_qc.py

    # Just start the UI (QC already done)
    python stage4_qc.py --ui-only

    # Flush all rejected items back to pending (for bulk regen)
    python stage4_qc.py --flush-rejected

Dependencies:
    pip install Pillow Flask imagehash numpy
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
import sqlite3
from pathlib import Path
from typing import Any

import imagehash
import numpy as np
from PIL import Image

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
REPO_ROOT  = Path(__file__).resolve().parents[2]
STATE_DB   = REPO_ROOT / "scripts" / "pipeline" / "output" / "generation_state.db"
PUBLIC_DIR = REPO_ROOT / "public"

# ---------------------------------------------------------------------------
# QC thresholds
# ---------------------------------------------------------------------------
MIN_FILE_SIZE_BYTES   = 5_000    # < 5KB = likely error / blank image
MAX_FILE_SIZE_BYTES   = 5_000_000  # > 5MB = abnormal
MIN_ALPHA_COVERAGE    = 0.05     # at least 5% of canvas must have alpha > 10
MAX_ALPHA_COVERAGE    = 0.99     # nearly full coverage = background not removed
DUPLICATE_HASH_THRESH = 5        # perceptual hash distance below this = duplicate
MIN_UNIQUE_COLORS     = 50       # fewer than 50 unique colors = likely solid/blank

# ---------------------------------------------------------------------------
# QC result schema (stored in the jobs table via error_msg + status)
# ---------------------------------------------------------------------------

QC_SCHEMA_EXTENSION = """
CREATE TABLE IF NOT EXISTS qc_results (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id          INTEGER NOT NULL,
    character_slug  TEXT NOT NULL,
    slot            TEXT NOT NULL,
    output_path     TEXT NOT NULL,
    qc_pass         INTEGER NOT NULL DEFAULT 0,
    fail_reasons    TEXT,
    file_size_bytes INTEGER,
    alpha_coverage  REAL,
    unique_colors   INTEGER,
    perceptual_hash TEXT,
    reviewed        INTEGER NOT NULL DEFAULT 0,
    reviewed_action TEXT,
    ts              TEXT DEFAULT (datetime('now')),
    UNIQUE(job_id)
);

CREATE TABLE IF NOT EXISTS regen_queue (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id          INTEGER NOT NULL,
    character_slug  TEXT NOT NULL,
    slot            TEXT NOT NULL,
    reason          TEXT,
    queued_ts       TEXT DEFAULT (datetime('now')),
    processed       INTEGER NOT NULL DEFAULT 0,
    UNIQUE(job_id)
);
"""


def ensure_qc_tables(conn: sqlite3.Connection):
    conn.executescript(QC_SCHEMA_EXTENSION)
    conn.commit()


# ---------------------------------------------------------------------------
# Automated failure detectors
# ---------------------------------------------------------------------------

def check_file_size(path: Path) -> list[str]:
    issues = []
    size = path.stat().st_size
    if size < MIN_FILE_SIZE_BYTES:
        issues.append(f"file_too_small:{size}B")
    if size > MAX_FILE_SIZE_BYTES:
        issues.append(f"file_too_large:{size}B")
    return issues, size


def check_image_content(path: Path) -> tuple[list[str], float, int, str]:
    """
    Returns (issues, alpha_coverage, unique_colors, perceptual_hash_str)
    """
    issues = []
    try:
        with Image.open(path) as img:
            img.load()

            # Dimension check
            w, h = img.size
            if w < 64 or h < 64:
                issues.append(f"too_small_dims:{w}x{h}")

            rgba = img.convert("RGBA")
            arr  = np.array(rgba)

            # Alpha coverage
            alpha_chan   = arr[:, :, 3]
            total_pixels = alpha_chan.size
            opaque       = np.sum(alpha_chan > 10)
            alpha_cov    = opaque / total_pixels

            if alpha_cov < MIN_ALPHA_COVERAGE:
                issues.append(f"too_transparent:{alpha_cov:.3f}")
            if alpha_cov > MAX_ALPHA_COVERAGE:
                issues.append(f"background_not_removed:{alpha_cov:.3f}")

            # Unique color check (on RGB only where alpha > 10)
            mask   = alpha_chan > 10
            pixels = arr[mask][:, :3]  # RGB of visible pixels
            if len(pixels) == 0:
                unique_colors = 0
                issues.append("no_visible_pixels")
            else:
                # Sample max 10000 pixels for speed
                sample = pixels[::max(1, len(pixels) // 10000)]
                unique_colors = len(np.unique(sample.reshape(-1, 3), axis=0))
                if unique_colors < MIN_UNIQUE_COLORS:
                    issues.append(f"low_color_variety:{unique_colors}")

            # Perceptual hash (for duplicate detection)
            rgb_img  = Image.fromarray(arr[:, :, :3])
            phash    = str(imagehash.phash(rgb_img))

    except Exception as e:
        issues.append(f"load_error:{e}")
        return issues, 0.0, 0, ""

    return issues, alpha_cov, unique_colors, phash


def detect_duplicates(
    qc_rows: list[dict],
    threshold: int = DUPLICATE_HASH_THRESH
) -> list[tuple[str, str]]:
    """
    Compare perceptual hashes across all QC rows.
    Returns list of (slug/slot_A, slug/slot_B) duplicate pairs.
    """
    entries = [(r, imagehash.hex_to_hash(r["perceptual_hash"]))
               for r in qc_rows if r.get("perceptual_hash")]
    dupes = []
    for i, (r_a, h_a) in enumerate(entries):
        for r_b, h_b in entries[i+1:]:
            if r_a["character_slug"] == r_b["character_slug"]:
                continue  # same character, skip
            dist = h_a - h_b
            if dist <= threshold:
                dupes.append((
                    f"{r_a['character_slug']}/{r_a['slot']}",
                    f"{r_b['character_slug']}/{r_b['slot']}",
                    dist,
                ))
    return dupes


# ---------------------------------------------------------------------------
# Run automated QC
# ---------------------------------------------------------------------------

def run_auto_qc(
    conn: sqlite3.Connection,
    filter_slug: str | None = None,
) -> dict[str, int]:
    ensure_qc_tables(conn)

    query = "SELECT * FROM generation_jobs WHERE status='success'"
    params = ()
    if filter_slug:
        query += " AND character_slug LIKE ?"
        params = (f"%{filter_slug}%",)

    jobs = conn.execute(query, params).fetchall()
    stats = {"pass": 0, "fail": 0, "skip": 0}

    qc_rows_for_dupe_check = []

    for job in jobs:
        job_id    = job["id"]
        slug      = job["character_slug"]
        slot      = job["slot"]
        out_path  = PUBLIC_DIR / job["output_path"]

        # Skip if already QC'd
        existing = conn.execute("SELECT id FROM qc_results WHERE job_id=?", (job_id,)).fetchone()
        if existing:
            stats["skip"] += 1
            continue

        if not out_path.exists():
            conn.execute(
                "INSERT OR REPLACE INTO qc_results (job_id, character_slug, slot, output_path, qc_pass, fail_reasons) VALUES (?,?,?,?,0,'file_missing')",
                (job_id, slug, slot, str(out_path.relative_to(REPO_ROOT))),
            )
            conn.execute("INSERT OR REPLACE INTO regen_queue (job_id, character_slug, slot, reason) VALUES (?,?,?,?)",
                         (job_id, slug, slot, "file_missing"))
            conn.commit()
            stats["fail"] += 1
            continue

        # File size
        size_issues, file_size = check_file_size(out_path)

        # Image content
        content_issues, alpha_cov, unique_colors, phash = check_image_content(out_path)

        all_issues = size_issues + content_issues
        qc_pass    = 1 if not all_issues else 0

        conn.execute(
            """
            INSERT OR REPLACE INTO qc_results
                (job_id, character_slug, slot, output_path, qc_pass,
                 fail_reasons, file_size_bytes, alpha_coverage,
                 unique_colors, perceptual_hash)
            VALUES (?,?,?,?,?,?,?,?,?,?)
            """,
            (
                job_id, slug, slot,
                str(out_path.relative_to(REPO_ROOT)),
                qc_pass,
                json.dumps(all_issues) if all_issues else None,
                file_size, alpha_cov, unique_colors, phash,
            ),
        )

        if not qc_pass:
            conn.execute(
                "INSERT OR REPLACE INTO regen_queue (job_id, character_slug, slot, reason) VALUES (?,?,?,?)",
                (job_id, slug, slot, json.dumps(all_issues)),
            )
            # Mark job as rejected in generation_jobs
            conn.execute("UPDATE generation_jobs SET status='rejected', error_msg=? WHERE id=?",
                         (json.dumps(all_issues), job_id))
            stats["fail"] += 1
            print(f"  [QC FAIL] {slug}/{slot}: {all_issues}")
        else:
            stats["pass"] += 1
            qc_rows_for_dupe_check.append({
                "character_slug": slug, "slot": slot, "perceptual_hash": phash
            })

        conn.commit()

    # Duplicate detection across all QC'd rows
    if qc_rows_for_dupe_check:
        all_qc = conn.execute("SELECT character_slug, slot, perceptual_hash FROM qc_results WHERE qc_pass=1").fetchall()
        all_qc_dicts = [dict(r) for r in all_qc]
        dupes = detect_duplicates(all_qc_dicts)
        if dupes:
            print(f"\n[QC] Found {len(dupes)} potential duplicate pairs:")
            for a, b, dist in dupes:
                print(f"  dist={dist}: {a}  <->  {b}")

    return stats


# ---------------------------------------------------------------------------
# Flask Review UI
# ---------------------------------------------------------------------------

def build_review_app(db_path: Path, public_dir: Path):
    """
    Returns a configured Flask app.
    Kept as a factory so it can be imported or run inline.
    """
    try:
        from flask import Flask, jsonify, render_template_string, request, send_from_directory
    except ImportError:
        raise ImportError("Flask is required: pip install Flask")

    app = Flask(__name__)

    # --- HTML template (self-contained, no external deps) ---
    REVIEW_HTML = """
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>QC Review — Asset Pipeline</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: monospace; background: #111; color: #eee; padding: 16px; }
  h1 { color: #f90; margin-bottom: 12px; }
  .stats { background: #222; padding: 8px 16px; border-radius: 4px; margin-bottom: 16px; display: flex; gap: 24px; }
  .stat-block { display: flex; flex-direction: column; }
  .stat-label { font-size: 10px; color: #888; }
  .stat-val { font-size: 20px; font-weight: bold; }
  .stat-pass { color: #0f0; }
  .stat-fail { color: #f00; }
  .stat-pend { color: #fa0; }
  .filters { margin-bottom: 12px; display: flex; gap: 12px; align-items: center; }
  input, select { background: #333; border: 1px solid #555; color: #eee; padding: 4px 8px; border-radius: 4px; }
  .char-section { margin-bottom: 32px; }
  .char-title { color: #fa0; font-size: 14px; font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 4px; }
  .slots-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .slot-card { background: #1a1a1a; border: 1px solid #333; border-radius: 6px; overflow: hidden; width: 160px; }
  .slot-card.qc-pass { border-color: #0a0; }
  .slot-card.qc-fail { border-color: #a00; }
  .slot-card.reviewed-accepted { border-color: #0f0; }
  .slot-card.reviewed-rejected { border-color: #f44; opacity: 0.6; }
  .slot-img { width: 160px; height: 120px; object-fit: contain; background: #0a0a14; }
  .slot-label { padding: 4px 6px; font-size: 10px; }
  .slot-name { color: #aaa; }
  .slot-issues { color: #f66; font-size: 9px; margin-top: 2px; word-break: break-all; }
  .slot-actions { display: flex; gap: 4px; padding: 4px 6px; }
  button { cursor: pointer; border: none; border-radius: 3px; padding: 3px 8px; font-size: 10px; font-family: monospace; }
  .btn-accept { background: #0a4; color: #fff; }
  .btn-reject { background: #a00; color: #fff; }
  .btn-regen  { background: #555; color: #eee; }
  .btn-accept:hover { background: #0f6; }
  .btn-reject:hover { background: #f44; }
  .btn-regen:hover  { background: #888; }
  .regen-banner { background: #300; border: 1px solid #f00; border-radius: 4px; padding: 8px 16px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
  .regen-count { color: #f66; font-weight: bold; }
  .btn-flush { background: #f60; color: #fff; padding: 6px 16px; font-size: 12px; }
  .btn-flush:hover { background: #fa0; }
</style>
</head>
<body>
<h1>Asset QC Review</h1>

<div class="stats" id="stats-bar">Loading stats...</div>

<div class="regen-banner" id="regen-banner" style="display:none">
  <span>Regen queue: <span class="regen-count" id="regen-count">0</span> items</span>
  <button class="btn-flush" onclick="flushRegen()">Flush regen queue -> Stage 2</button>
</div>

<div class="filters">
  <input id="search" placeholder="Filter by slug..." oninput="filterChars()" />
  <select id="status-filter" onchange="filterChars()">
    <option value="all">All</option>
    <option value="fail">QC Fail only</option>
    <option value="unreviewed">Unreviewed only</option>
  </select>
</div>

<div id="gallery">Loading...</div>

<script>
let allData = [];

async function loadStats() {
  const r = await fetch('/api/stats');
  const s = await r.json();
  document.getElementById('stats-bar').innerHTML = `
    <div class="stat-block"><span class="stat-label">PASS</span><span class="stat-val stat-pass">${s.pass||0}</span></div>
    <div class="stat-block"><span class="stat-label">FAIL</span><span class="stat-val stat-fail">${s.fail||0}</span></div>
    <div class="stat-block"><span class="stat-label">REGEN QUEUE</span><span class="stat-val stat-pend">${s.regen_queue||0}</span></div>
    <div class="stat-block"><span class="stat-label">REVIEWED</span><span class="stat-val">${s.reviewed||0}</span></div>
    <div class="stat-block"><span class="stat-label">TOTAL</span><span class="stat-val">${s.total||0}</span></div>
  `;
  if (s.regen_queue > 0) {
    document.getElementById('regen-banner').style.display = 'flex';
    document.getElementById('regen-count').textContent = s.regen_queue;
  }
}

async function loadGallery() {
  const r = await fetch('/api/characters');
  allData = await r.json();
  renderGallery(allData);
}

function filterChars() {
  const search = document.getElementById('search').value.toLowerCase();
  const status = document.getElementById('status-filter').value;
  let filtered = allData;
  if (search) filtered = filtered.filter(c => c.slug.toLowerCase().includes(search));
  if (status === 'fail') filtered = filtered.filter(c => c.slots.some(s => !s.qc_pass));
  if (status === 'unreviewed') filtered = filtered.filter(c => c.slots.some(s => !s.reviewed));
  renderGallery(filtered);
}

function renderGallery(data) {
  const el = document.getElementById('gallery');
  if (!data.length) { el.innerHTML = '<p style="color:#888">No results.</p>'; return; }
  el.innerHTML = data.map(char => `
    <div class="char-section">
      <div class="char-title">${char.slug} — ${char.nom} (${char.element})</div>
      <div class="slots-grid">
        ${char.slots.map(slot => {
          let cardClass = slot.qc_pass ? 'qc-pass' : 'qc-fail';
          if (slot.reviewed_action === 'accept') cardClass = 'reviewed-accepted';
          if (slot.reviewed_action === 'reject') cardClass = 'reviewed-rejected';
          return `
          <div class="slot-card ${cardClass}" id="card-${slot.job_id}">
            <img class="slot-img" src="/asset/${encodeURIComponent(slot.output_path)}"
                 onerror="this.style.background='#400';this.alt='MISSING'"
                 loading="lazy" />
            <div class="slot-label">
              <span class="slot-name">${slot.slot}</span>
              ${slot.fail_reasons ? `<div class="slot-issues">${JSON.parse(slot.fail_reasons||'[]').join(' | ')}</div>` : ''}
            </div>
            <div class="slot-actions">
              <button class="btn-accept" onclick="review(${slot.job_id},'accept')">OK</button>
              <button class="btn-reject" onclick="review(${slot.job_id},'reject')">Reject</button>
              <button class="btn-regen"  onclick="review(${slot.job_id},'regen')">Regen</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

async function review(jobId, action) {
  await fetch('/api/review', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({job_id: jobId, action})
  });
  await loadStats();
  await loadGallery();
}

async function flushRegen() {
  if (!confirm('Move all regen-queue items back to pending for Stage 2?')) return;
  await fetch('/api/flush-regen', {method: 'POST'});
  await loadStats();
  alert('Regen queue flushed. Run stage2_generator.py to regenerate.');
}

loadStats();
loadGallery();
</script>
</body>
</html>
"""

    def get_conn():
        c = sqlite3.connect(str(db_path))
        c.row_factory = sqlite3.Row
        ensure_qc_tables(c)
        return c

    @app.route("/")
    def index():
        return render_template_string(REVIEW_HTML)

    @app.route("/api/stats")
    def api_stats():
        conn = get_conn()
        pass_cnt  = conn.execute("SELECT COUNT(*) FROM qc_results WHERE qc_pass=1").fetchone()[0]
        fail_cnt  = conn.execute("SELECT COUNT(*) FROM qc_results WHERE qc_pass=0").fetchone()[0]
        regen_cnt = conn.execute("SELECT COUNT(*) FROM regen_queue WHERE processed=0").fetchone()[0]
        rev_cnt   = conn.execute("SELECT COUNT(*) FROM qc_results WHERE reviewed=1").fetchone()[0]
        total_cnt = conn.execute("SELECT COUNT(*) FROM qc_results").fetchone()[0]
        conn.close()
        return jsonify({"pass": pass_cnt, "fail": fail_cnt, "regen_queue": regen_cnt,
                        "reviewed": rev_cnt, "total": total_cnt})

    @app.route("/api/characters")
    def api_characters():
        conn = get_conn()
        # Get unique slugs from qc_results
        slugs = conn.execute(
            "SELECT DISTINCT character_slug FROM qc_results ORDER BY character_slug"
        ).fetchall()

        result = []
        for slug_row in slugs:
            slug = slug_row[0]
            # Get nom/element from generation_jobs
            job_info = conn.execute(
                "SELECT character_id FROM generation_jobs WHERE character_slug=? LIMIT 1",
                (slug,)
            ).fetchone()
            nom = slug
            element = ""

            slots = conn.execute(
                "SELECT q.*, gj.positive_prompt FROM qc_results q "
                "JOIN generation_jobs gj ON q.job_id=gj.id "
                "WHERE q.character_slug=? ORDER BY q.slot",
                (slug,)
            ).fetchall()

            result.append({
                "slug": slug,
                "nom": nom,
                "element": element,
                "slots": [dict(s) for s in slots],
            })

        conn.close()
        return jsonify(result)

    @app.route("/asset/<path:asset_path>")
    def serve_asset(asset_path):
        return send_from_directory(str(public_dir), asset_path)

    @app.route("/api/review", methods=["POST"])
    def api_review():
        data    = request.get_json()
        job_id  = data["job_id"]
        action  = data["action"]  # accept | reject | regen

        conn = get_conn()
        conn.execute(
            "UPDATE qc_results SET reviewed=1, reviewed_action=? WHERE job_id=?",
            (action, job_id)
        )
        if action in ("reject", "regen"):
            conn.execute(
                "INSERT OR REPLACE INTO regen_queue (job_id, character_slug, slot, reason) "
                "SELECT job_id, character_slug, slot, 'manual_review' FROM qc_results WHERE job_id=?",
                (job_id,)
            )
            conn.execute("UPDATE generation_jobs SET status='rejected' WHERE id=?", (job_id,))
        elif action == "accept":
            conn.execute(
                "DELETE FROM regen_queue WHERE job_id=?", (job_id,)
            )
            conn.execute("UPDATE generation_jobs SET status='success' WHERE id=?", (job_id,))
        conn.commit()
        conn.close()
        return jsonify({"ok": True})

    @app.route("/api/flush-regen", methods=["POST"])
    def api_flush_regen():
        """Move all non-processed regen queue items back to 'pending' in generation_jobs."""
        conn = get_conn()
        queue = conn.execute(
            "SELECT job_id FROM regen_queue WHERE processed=0"
        ).fetchall()
        for row in queue:
            conn.execute(
                "UPDATE generation_jobs SET status='pending', attempts=0, error_msg=NULL WHERE id=?",
                (row["job_id"],)
            )
            conn.execute("UPDATE regen_queue SET processed=1 WHERE job_id=?", (row["job_id"],))
        conn.commit()
        flushed = len(queue)
        conn.close()
        return jsonify({"flushed": flushed})

    return app


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Quality control for generated assets")
    parser.add_argument("--db", type=Path, default=STATE_DB)
    parser.add_argument("--filter-slug", type=str, default=None)
    parser.add_argument("--auto-only", action="store_true",
                        help="Run automated QC only, no web UI")
    parser.add_argument("--ui-only", action="store_true",
                        help="Start web UI without running automated QC")
    parser.add_argument("--flush-rejected", action="store_true",
                        help="Flush all rejected jobs back to pending for regen")
    parser.add_argument("--port", type=int, default=5050)
    args = parser.parse_args()

    conn = sqlite3.connect(str(args.db))
    conn.row_factory = sqlite3.Row
    ensure_qc_tables(conn)

    if args.flush_rejected:
        queue = conn.execute("SELECT job_id FROM regen_queue WHERE processed=0").fetchall()
        for row in queue:
            conn.execute("UPDATE generation_jobs SET status='pending', attempts=0, error_msg=NULL WHERE id=?",
                         (row["job_id"],))
            conn.execute("UPDATE regen_queue SET processed=1 WHERE job_id=?", (row["job_id"],))
        conn.commit()
        print(f"[Stage 4] Flushed {len(queue)} rejected jobs back to pending.")
        conn.close()
        return

    if not args.ui_only:
        print("[Stage 4] Running automated QC...")
        stats = run_auto_qc(conn, filter_slug=args.filter_slug)
        print(f"[Stage 4] QC complete — pass={stats['pass']}, fail={stats['fail']}, skip={stats['skip']}")

        regen_count = conn.execute("SELECT COUNT(*) FROM regen_queue WHERE processed=0").fetchone()[0]
        if regen_count:
            print(f"[Stage 4] {regen_count} items in regen queue.")
            print("          Run with --flush-rejected to push back to Stage 2.")

    conn.close()

    if not args.auto_only:
        print(f"\n[Stage 4] Starting review UI at http://localhost:{args.port}")
        app = build_review_app(args.db, PUBLIC_DIR)
        app.run(host="0.0.0.0", port=args.port, debug=False)


if __name__ == "__main__":
    main()
