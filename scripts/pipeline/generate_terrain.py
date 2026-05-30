"""
generate_terrain.py — Generate all terrain tiles and props via Meshy AI.

Usage:
    python generate_terrain.py --tiles            # generate all tiles
    python generate_terrain.py --props            # generate all props
    python generate_terrain.py --all              # both
    python generate_terrain.py --slug feu-lava    # single asset
    python generate_terrain.py --dry-run --all    # print prompts, no API
    python generate_terrain.py --status           # show DB status

Output structure:
    public/blocks/gen/{slug}/model.glb          ← tile 3D model
    public/blocks/gen/{slug}/{slug}-{dir}.png   ← rendered tile (4 rotations)
    public/objects/gen/{slug}/model.glb         ← prop 3D model
    public/objects/gen/{slug}/{slug}-{dir}.png  ← rendered prop
"""

from __future__ import annotations

import argparse
import asyncio
import json
import sqlite3
import sys
import time
from pathlib import Path

import aiohttp
import aiofiles
from dotenv import load_dotenv
import os

# ── Paths ──────────────────────────────────────────────────────────────────────
PIPELINE_DIR = Path(__file__).resolve().parent
REPO_ROOT    = PIPELINE_DIR.parents[1]
BLOCKS_DIR   = REPO_ROOT / 'public' / 'blocks' / 'gen'
OBJECTS_DIR  = REPO_ROOT / 'public' / 'objects' / 'gen'
DB_PATH      = PIPELINE_DIR / 'terrain.db'
RENDER_TILE  = PIPELINE_DIR / 'render_terrain.js'

load_dotenv(PIPELINE_DIR / '.env')
MESHY_API_KEY = os.getenv('MESHY_API_KEY', '')
MESHY_BASE    = 'https://api.meshy.ai/openapi/v2'
POLL_INTERVAL = int(os.getenv('MESHY_POLL_INTERVAL', '15'))
MAX_WAIT      = int(os.getenv('MESHY_MAX_WAIT', '1800'))

from terrain_defs import TILES, PROPS, NEGATIVE_PROMPT

# ── DB ─────────────────────────────────────────────────────────────────────────
SCHEMA = '''
CREATE TABLE IF NOT EXISTS terrain_jobs (
    slug        TEXT PRIMARY KEY,
    asset_type  TEXT NOT NULL,   -- "tile" | "prop"
    label       TEXT,
    status      TEXT NOT NULL DEFAULT 'pending',
    preview_id  TEXT,
    refine_id   TEXT,
    glb_path    TEXT,
    error       TEXT,
    prompt      TEXT,
    created_at  REAL DEFAULT (unixepoch()),
    updated_at  REAL DEFAULT (unixepoch())
);
'''

def open_db() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    conn.executescript(SCHEMA)
    conn.commit()
    return conn

def upsert(conn, slug, asset_type, label, prompt):
    conn.execute('''INSERT OR IGNORE INTO terrain_jobs (slug, asset_type, label, prompt)
                    VALUES (?, ?, ?, ?)''', (slug, asset_type, label, prompt))
    conn.commit()

def update(conn, slug, **kw):
    kw['updated_at'] = time.time()
    sets = ', '.join(f'{k}=?' for k in kw)
    conn.execute(f'UPDATE terrain_jobs SET {sets} WHERE slug=?', (*kw.values(), slug))
    conn.commit()

def get_job(conn, slug):
    return conn.execute('SELECT * FROM terrain_jobs WHERE slug=?', (slug,)).fetchone()

# ── Meshy API ──────────────────────────────────────────────────────────────────

async def create_preview(session, prompt):
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}', 'Content-Type': 'application/json'}
    payload = {
        'mode': 'preview',
        'prompt': prompt,
        'negative_prompt': NEGATIVE_PROMPT,
        'art_style': 'realistic',
        'should_remesh': True,
    }
    async with session.post(f'{MESHY_BASE}/text-to-3d', headers=headers, json=payload) as r:
        r.raise_for_status()
        return (await r.json())['result']

async def create_refine(session, preview_id):
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}', 'Content-Type': 'application/json'}
    async with session.post(f'{MESHY_BASE}/text-to-3d', headers=headers,
                            json={'mode': 'refine', 'preview_task_id': preview_id}) as r:
        r.raise_for_status()
        return (await r.json())['result']

async def poll(session, task_id, label=''):
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}'}
    deadline = time.time() + MAX_WAIT
    while time.time() < deadline:
        async with session.get(f'{MESHY_BASE}/text-to-3d/{task_id}', headers=headers) as r:
            r.raise_for_status()
            data = await r.json()
            status = data.get('status', '')
            pct    = data.get('progress', 0)
            print(f'  [{label or task_id[:8]}] {status} ({pct}%)')
            if status == 'SUCCEEDED':
                return data
            if status in ('FAILED', 'EXPIRED'):
                raise RuntimeError(f'{task_id}: {data.get("task_error")}')
        await asyncio.sleep(POLL_INTERVAL)
    raise TimeoutError(task_id)

async def download(session, url, dest: Path):
    dest.parent.mkdir(parents=True, exist_ok=True)
    async with session.get(url) as r:
        r.raise_for_status()
        async with aiofiles.open(dest, 'wb') as f:
            await f.write(await r.read())

# ── Render ─────────────────────────────────────────────────────────────────────

import subprocess

def render_asset(slug, asset_type, glb_path, dry_run=False):
    cmd = ['node', str(RENDER_TILE),
           f'--slug={slug}',
           f'--type={asset_type}',
           f'--glb={glb_path}']
    if dry_run:
        print(f'  [DRY-RUN] {" ".join(cmd)}')
        return 0
    print(f'  Rendering: {" ".join(cmd)}')
    return subprocess.run(cmd).returncode

# ── Main generation ────────────────────────────────────────────────────────────

async def process(session, conn, slug, defn, asset_type, dry_run=False):
    print(f'\n{"="*60}')
    print(f'[{slug}] {defn["label"]} ({asset_type})')
    print(f'{"="*60}')

    prompt = defn['prompt']
    output_dir = (BLOCKS_DIR if asset_type == 'tile' else OBJECTS_DIR) / slug
    glb_dest   = output_dir / 'model.glb'

    upsert(conn, slug, asset_type, defn['label'], prompt)
    job = get_job(conn, slug)

    # Skip if already done
    if job['status'] == 'done' and glb_dest.exists():
        print('  Already done — skip.')
        return

    if dry_run:
        print(f'  Prompt ({len(prompt)}): {prompt[:160]}…')
        update(conn, slug, status='skipped')
        return

    if not MESHY_API_KEY:
        print('  [ERROR] MESHY_API_KEY not set')
        return

    try:
        update(conn, slug, status='generating')

        # Step 1: preview
        preview_id = await create_preview(session, prompt)
        update(conn, slug, preview_id=preview_id)
        print(f'  Preview: {preview_id}')
        await poll(session, preview_id, label=slug)

        # Step 2: refine
        refine_id = await create_refine(session, preview_id)
        update(conn, slug, refine_id=refine_id)
        print(f'  Refine:  {refine_id}')
        refine_data = await poll(session, refine_id, label=slug)

        # Download GLB
        glb_url = refine_data['model_urls']['glb']
        await download(session, glb_url, glb_dest)
        print(f'  Downloaded: {glb_dest} ({glb_dest.stat().st_size // 1024} KB)')
        update(conn, slug, glb_path=str(glb_dest), status='rendering')

        # Render
        rc = render_asset(slug, asset_type, str(glb_dest))
        if rc != 0:
            raise RuntimeError(f'render_terrain.js exited {rc}')

        update(conn, slug, status='done')
        print(f'  [OK] {slug}')

    except Exception as e:
        print(f'  [ERROR] {e}')
        update(conn, slug, status='error', error=str(e))

# ── Status ─────────────────────────────────────────────────────────────────────

def show_status(conn):
    rows = conn.execute('SELECT * FROM terrain_jobs ORDER BY asset_type, slug').fetchall()
    if not rows:
        print('No terrain jobs in DB yet.')
        return
    print(f'{"Slug":<28}  {"Type":<6}  {"Status":<12}  Error')
    print('-' * 70)
    for r in rows:
        print(f'{r["slug"]:<28}  {r["asset_type"]:<6}  {r["status"]:<12}  {r["error"] or ""}')
    done  = sum(1 for r in rows if r['status'] == 'done')
    total = len(rows)
    print(f'\nTotal: {total}  Done: {done}  Remaining: {total - done}')
    print(f'Estimated cost if all pending: ~${(total - done) * 2.50:.2f}')

# ── CLI ────────────────────────────────────────────────────────────────────────

async def main():
    ap = argparse.ArgumentParser(description='Terrain tile + prop generation pipeline')
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument('--tiles',    action='store_true')
    mode.add_argument('--props',    action='store_true')
    mode.add_argument('--all',      action='store_true')
    mode.add_argument('--slug',     metavar='SLUG')
    mode.add_argument('--status',   action='store_true')
    ap.add_argument('--dry-run',    action='store_true')
    args = ap.parse_args()

    conn = open_db()

    if args.status:
        show_status(conn)
        conn.close()
        return

    # Build work queue
    queue: list[tuple[str, dict, str]] = []  # (slug, defn, asset_type)
    if args.slug:
        if args.slug in TILES:
            queue.append((args.slug, TILES[args.slug], 'tile'))
        elif args.slug in PROPS:
            queue.append((args.slug, PROPS[args.slug], 'prop'))
        else:
            print(f'[ERROR] Unknown slug: {args.slug}'); sys.exit(1)
    else:
        if args.tiles or args.all:
            for slug, defn in TILES.items():
                queue.append((slug, defn, 'tile'))
        if args.props or args.all:
            for slug, defn in PROPS.items():
                queue.append((slug, defn, 'prop'))

    if not queue:
        print('Nothing to do. Use --tiles, --props, --all, or --slug SLUG')
        conn.close()
        return

    def _is_done(slug):
        job = get_job(conn, slug)
        return job is not None and job['status'] == 'done'
    total_cost = len([q for q in queue if not _is_done(q[0])]) * 2.50
    print(f'Processing {len(queue)} assets.  Est. cost: ~${total_cost:.2f}')
    if args.dry_run:
        print('[DRY-RUN] No API calls will be made.')

    timeout = aiohttp.ClientTimeout(total=1800)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        for slug, defn, asset_type in queue:
            await process(session, conn, slug, defn, asset_type, dry_run=args.dry_run)

    conn.close()
    print('\nAll done.')

if __name__ == '__main__':
    asyncio.run(main())
