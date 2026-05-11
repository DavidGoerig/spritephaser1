"""
Stage 1 — Meshy AI text-to-3D generation
Reads pending characters from SQLite, generates GLB models via Meshy API.
"""

import os
import time
import json
import sqlite3
import asyncio
import aiohttp
import aiofiles
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent / '.env')

MESHY_API_KEY = os.environ['MESHY_API_KEY']
MESHY_BASE    = 'https://api.meshy.ai/openapi/v2'
DB_PATH       = Path(__file__).parent / 'pipeline.db'
CHARS_DIR     = Path(__file__).parent.parent.parent / 'src' / 'data' / 'characters'
OUTPUT_DIR    = Path(__file__).parent.parent.parent / 'public' / 'characters'
POLL_INTERVAL = 15   # seconds between status polls
MAX_WAIT      = 1800 # 30 min timeout per job

# ── Prompt dictionaries ───────────────────────────────────────────────────────

ELEMENT_3D_TOKENS = {
    'Feu':      'fire elemental, body made of flames, ember particles, glowing red-orange cracks',
    'Eau':      'water elemental, translucent liquid body, flowing shapes, deep blue',
    'Glace':    'ice elemental, crystalline frozen armor, frost particles, pale blue-white',
    'Electrique': 'lightning elemental, crackling electricity, glowing arc lines, electric blue',
    'Vent':     'wind elemental, ethereal swirling air, barely visible form, translucent white',
    'Plante':   'nature elemental, body of bark and leaves, vines, lush green',
    'Sol':      'earth elemental, rocky stone body, dust particles, brown-grey',
    'Roche':    'rock elemental, heavy granite armor, crystalline spines, dark grey',
    'Insecte':  'insect hybrid, chitinous exoskeleton, multiple limbs, antennae, iridescent',
    'Nuee':     'swarm entity, thousands of insects forming humanoid shape, shifting mass',
    'Psy':      'psychic entity, translucent humanoid, glowing third eye, mind-fracture aura',
    'Tenebres': 'shadow elemental, darkness given form, void black with purple edges, void tendrils',
    'Poison':   'toxic elemental, acid green ichor, dripping venom, corrupted flesh',
    'Spectre':  'spectral ghost, semi-transparent, glowing outline, ethereal wisps',
    'Gravite':  'gravity elemental, distorted space around body, orbiting rocks, warped light',
    'Fee':      'fae creature, delicate wings, luminous skin, nature magic, otherworldly',
    'Combat':   'battle-hardened warrior, heavy scars, worn armor, intense battle aura',
    'Normal':   'ordinary human appearance, subtle elemental glow, unremarkable but focused',
}

CLASS_3D_TOKENS = {
    'Mage-Burst':  'mage robes, staff, arcane sigils, focused spellcaster pose',
    'Capteur':     'light armor, capture tools, binding energy, utility belt',
    'Tireur':      'ranged weapon specialist, bow or gun, alert stance, quiver',
    'Artillerie':  'heavy siege weapons, massive cannon or launcher, sturdy frame',
    'Assassin':    'dark leather, dual blades, crouched ready stance, hood',
    'Battlemage':  'hybrid armor and robes, sword in one hand, glowing orb in other',
    'Soutien':     'healer vestments, glowing staff, gentle aura, support stance',
    'Juggernaut':  'massive heavy plate armor, enormous weapon, unstoppable charge pose',
    'Vanguard':    'medium plate armor, shield and sword, defensive ready stance',
    'Escrimeur':   'light fencer armor, thin blade, elegant dueling stance',
    'Plongeur':    'mobile diver kit, grappling hooks, sleek fast-movement suit',
    'Specialiste': 'unique gadget-bearer, specialized tools, experimental equipment',
    'Gardien':     'defensive armor, large shield, protection aura, stalwart pose',
}

FACTION_3D_TOKENS = {
    'Empire':       'imperial insignia, structured uniform, authoritative bearing',
    'Convergence':  'heavy militaristic gear, war-machine aesthetic',
    'Dissidentes':  'worn rebel gear, improvised equipment, defiant stance',
    'Independant':  'eclectic mixed equipment, wanderer aesthetic',
}


def build_meshy_prompt(char: dict) -> str:
    element = char.get('element', 'Normal')
    cls     = char.get('classe', 'Specialiste')
    faction = char.get('faction', 'Independant')

    elem_tok    = ELEMENT_3D_TOKENS.get(element, '')
    class_tok   = CLASS_3D_TOKENS.get(cls, '')
    faction_tok = FACTION_3D_TOKENS.get(faction, '')

    name = char.get('nom', 'Character')
    phys = char.get('description_physique', '')[:200]

    prompt = (
        f"3D game character: {name}. "
        f"{phys} "
        f"{elem_tok}. {class_tok}. {faction_tok}. "
        "T-pose, centered, game-ready low-poly, clean topology, PBR textures, "
        "isometric game art style, solid base, no background."
    )
    return prompt[:1000]


# ── SQLite helpers ────────────────────────────────────────────────────────────

def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute('''CREATE TABLE IF NOT EXISTS meshy_jobs (
        char_id       TEXT PRIMARY KEY,
        char_name     TEXT,
        element       TEXT,
        classe        TEXT,
        preview_id    TEXT,
        refine_id     TEXT,
        status        TEXT DEFAULT 'pending',
        glb_path      TEXT,
        error         TEXT,
        created_at    REAL DEFAULT (unixepoch()),
        updated_at    REAL DEFAULT (unixepoch())
    )''')
    conn.execute('''CREATE TABLE IF NOT EXISTS generation_jobs (
        char_id       TEXT PRIMARY KEY,
        char_name     TEXT,
        element       TEXT,
        status        TEXT DEFAULT 'pending',
        current_stage TEXT DEFAULT 'meshy',
        error         TEXT,
        created_at    REAL DEFAULT (unixepoch()),
        updated_at    REAL DEFAULT (unixepoch())
    )''')
    conn.commit()
    conn.close()


def get_pending_chars(conn: sqlite3.Connection, limit: int = 10) -> list[dict]:
    rows = conn.execute('''
        SELECT char_id, char_name, element, classe, faction
        FROM generation_jobs
        WHERE status = 'pending' AND current_stage = 'meshy'
        ORDER BY created_at
        LIMIT ?
    ''', (limit,)).fetchall()
    return [{'char_id': r[0], 'nom': r[1], 'element': r[2], 'classe': r[3], 'faction': r[4]} for r in rows]


def update_job(conn: sqlite3.Connection, char_id: str, **kwargs):
    kwargs['updated_at'] = time.time()
    sets = ', '.join(f'{k} = ?' for k in kwargs)
    conn.execute(f'UPDATE meshy_jobs SET {sets} WHERE char_id = ?',
                 (*kwargs.values(), char_id))
    conn.commit()


# ── Meshy API calls ───────────────────────────────────────────────────────────

async def create_preview(session: aiohttp.ClientSession, prompt: str) -> str:
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}', 'Content-Type': 'application/json'}
    payload = {
        'mode': 'preview',
        'prompt': prompt,
        'art_style': 'realistic',
        'should_remesh': True,
    }
    async with session.post(f'{MESHY_BASE}/text-to-3d', headers=headers, json=payload) as resp:
        resp.raise_for_status()
        data = await resp.json()
        return data['result']


async def create_refine(session: aiohttp.ClientSession, preview_id: str) -> str:
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}', 'Content-Type': 'application/json'}
    payload = {'mode': 'refine', 'preview_task_id': preview_id}
    async with session.post(f'{MESHY_BASE}/text-to-3d', headers=headers, json=payload) as resp:
        resp.raise_for_status()
        data = await resp.json()
        return data['result']


async def poll_task(session: aiohttp.ClientSession, task_id: str) -> dict:
    headers = {'Authorization': f'Bearer {MESHY_API_KEY}'}
    deadline = time.time() + MAX_WAIT
    while time.time() < deadline:
        async with session.get(f'{MESHY_BASE}/text-to-3d/{task_id}', headers=headers) as resp:
            resp.raise_for_status()
            data = await resp.json()
            status = data.get('status', '')
            print(f'  [{task_id[:8]}] {status} ({data.get("progress", 0)}%)')
            if status == 'SUCCEEDED':
                return data
            if status in ('FAILED', 'EXPIRED'):
                raise RuntimeError(f'Task {task_id} {status}: {data.get("task_error", {})}')
        await asyncio.sleep(POLL_INTERVAL)
    raise TimeoutError(f'Task {task_id} exceeded {MAX_WAIT}s')


async def download_glb(session: aiohttp.ClientSession, url: str, dest: Path):
    dest.parent.mkdir(parents=True, exist_ok=True)
    async with session.get(url) as resp:
        resp.raise_for_status()
        async with aiofiles.open(dest, 'wb') as f:
            await f.write(await resp.read())


# ── Main generation flow ──────────────────────────────────────────────────────

async def process_character(session: aiohttp.ClientSession, conn: sqlite3.Connection, char: dict):
    char_id = char['char_id']
    name    = char['nom']
    print(f'\n[{char_id}] Generating: {name}')

    try:
        prompt = build_meshy_prompt(char)
        print(f'  Prompt: {prompt[:80]}…')

        # Insert / reset meshy_jobs row
        conn.execute('''INSERT OR REPLACE INTO meshy_jobs
            (char_id, char_name, element, classe, status)
            VALUES (?, ?, ?, ?, 'generating')''',
            (char_id, name, char.get('element'), char.get('classe')))
        conn.commit()

        # Step 1: preview
        preview_id = await create_preview(session, prompt)
        update_job(conn, char_id, preview_id=preview_id)
        print(f'  Preview task: {preview_id}')

        preview_data = await poll_task(session, preview_id)

        # Step 2: refine
        refine_id = await create_refine(session, preview_id)
        update_job(conn, char_id, refine_id=refine_id)
        print(f'  Refine task: {refine_id}')

        refine_data = await poll_task(session, refine_id)

        # Download GLB
        glb_url  = refine_data['model_urls']['glb']
        char_dir = OUTPUT_DIR / char_id
        glb_path = char_dir / 'model.glb'
        await download_glb(session, glb_url, glb_path)
        print(f'  Downloaded: {glb_path}')

        update_job(conn, char_id, status='done', glb_path=str(glb_path))
        conn.execute('''UPDATE generation_jobs SET status='meshy_done', current_stage='render',
                        updated_at=? WHERE char_id=?''', (time.time(), char_id))
        conn.commit()
        print(f'  [OK] {name}')

    except Exception as e:
        print(f'  [ERROR] {name}: {e}')
        update_job(conn, char_id, status='error', error=str(e))
        conn.execute('''UPDATE generation_jobs SET status='error', error=?, updated_at=?
                        WHERE char_id=?''', (str(e), time.time(), char_id))
        conn.commit()


async def main():
    init_db()
    conn = sqlite3.connect(DB_PATH)

    pending = get_pending_chars(conn, limit=5)
    if not pending:
        print('No pending characters.')
        conn.close()
        return

    print(f'Processing {len(pending)} characters…')
    async with aiohttp.ClientSession() as session:
        # Process sequentially to avoid API rate limits
        for char in pending:
            await process_character(session, conn, char)

    conn.close()


if __name__ == '__main__':
    asyncio.run(main())
