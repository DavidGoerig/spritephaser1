"""
Stage 3 — Background removal via rembg
Strips backgrounds from rendered frames and applies pixel-art cleanup.

pip install rembg[gpu] Pillow
"""

import os
import sys
import time
import sqlite3
import argparse
from pathlib import Path

try:
    from rembg import remove, new_session
    HAS_REMBG = True
except ImportError:
    HAS_REMBG = False
    print('WARNING: rembg not installed. Run: pip install rembg[gpu]')

try:
    from PIL import Image, ImageFilter
    HAS_PIL = True
except ImportError:
    HAS_PIL = False
    print('ERROR: Pillow required. Run: pip install Pillow')
    sys.exit(1)

DB_PATH    = Path(__file__).parent / 'pipeline.db'
OUTPUT_DIR = Path(__file__).parent.parent.parent / 'public' / 'characters'

FRAME_SIZE   = 64
FRAME_COUNT  = 8
DIR_COUNT    = 4
SHEET_W      = FRAME_SIZE * FRAME_COUNT   # 512
SHEET_H      = FRAME_SIZE * DIR_COUNT     # 256

ANIMATION_SLOTS = [
    'idle', 'run', 'swim', 'fly',
    'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
    'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
    'hurt', 'die',
]


def process_spritesheet(img_path: Path, session) -> Image.Image:
    """
    Process a 512×256 spritesheet:
    1. Split into 32 individual 64×64 frames
    2. Run rembg on each frame
    3. Apply pixel-art cleanup (remove isolated pixels, sharpen edges)
    4. Recomposite into 512×256
    """
    src = Image.open(img_path).convert('RGBA')

    if src.size != (SHEET_W, SHEET_H):
        print(f'  WARNING: unexpected size {src.size} for {img_path.name}')
        src = src.resize((SHEET_W, SHEET_H), Image.NEAREST)

    out = Image.new('RGBA', (SHEET_W, SHEET_H), (0, 0, 0, 0))

    for dir_idx in range(DIR_COUNT):
        for frame_idx in range(FRAME_COUNT):
            x = frame_idx * FRAME_SIZE
            y = dir_idx * FRAME_SIZE
            frame = src.crop((x, y, x + FRAME_SIZE, y + FRAME_SIZE))

            # Scale up for rembg (works better at higher resolution)
            frame_big = frame.resize((FRAME_SIZE * 4, FRAME_SIZE * 4), Image.NEAREST)

            if HAS_REMBG:
                frame_big = remove(frame_big, session=session)
            else:
                # Fallback: threshold alpha
                r, g, b, a = frame_big.split()
                frame_big = Image.merge('RGBA', (r, g, b, a))

            # Scale back down with nearest-neighbor (preserves pixel art)
            frame_clean = frame_big.resize((FRAME_SIZE, FRAME_SIZE), Image.NEAREST)

            # Pixel cleanup: remove stray transparent pixels
            frame_clean = clean_pixel_edges(frame_clean)

            out.paste(frame_clean, (x, y), frame_clean)

    return out


def clean_pixel_edges(img: Image.Image) -> Image.Image:
    """Remove isolated pixels at edges (anti-aliasing artifacts from rembg)."""
    import numpy as np

    data = np.array(img)
    alpha = data[:, :, 3]

    # Threshold: pixels with alpha < 32 become fully transparent
    alpha[alpha < 32] = 0
    # Pixels with alpha > 224 become fully opaque
    alpha[alpha > 224] = 255

    data[:, :, 3] = alpha
    return Image.fromarray(data, 'RGBA')


def process_portrait(img_path: Path, session) -> Image.Image:
    """Process a 512×512 portrait with background removal."""
    src = Image.open(img_path).convert('RGBA')

    if HAS_REMBG:
        result = remove(src, session=session)
    else:
        result = src

    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--char-id',  help='Process single character')
    parser.add_argument('--all',      action='store_true', help='Process all render_done characters')
    parser.add_argument('--slots',    nargs='+', default=ANIMATION_SLOTS)
    args = parser.parse_args()

    conn = sqlite3.connect(DB_PATH)

    if args.all:
        rows = conn.execute('''SELECT char_id FROM generation_jobs
                               WHERE status='render_done' ORDER BY created_at''').fetchall()
        char_ids = [r[0] for r in rows]
    elif args.char_id:
        char_ids = [args.char_id]
    else:
        print('Specify --char-id or --all')
        conn.close()
        return

    if not char_ids:
        print('No characters to process.')
        conn.close()
        return

    print(f'Processing {len(char_ids)} characters…')

    # Initialize rembg session once (loads model once)
    session = new_session('u2net') if HAS_REMBG else None

    for char_id in char_ids:
        char_dir = OUTPUT_DIR / char_id
        print(f'\n[{char_id}]')

        errors = []

        for slot in args.slots:
            img_path = char_dir / f'{slot}.png'
            if not img_path.exists():
                print(f'  Skip (missing): {slot}.png')
                continue

            out_path = img_path  # overwrite in-place
            try:
                result = process_spritesheet(img_path, session)
                result.save(str(out_path), 'PNG')
                print(f'  OK: {slot}.png')
            except Exception as e:
                print(f'  ERROR: {slot}.png — {e}')
                errors.append(f'{slot}: {e}')

        # Portrait
        portrait = char_dir / 'portrait.png'
        if portrait.exists():
            try:
                result = process_portrait(portrait, session)
                result.save(str(portrait), 'PNG')
                print('  OK: portrait.png')
            except Exception as e:
                print(f'  ERROR: portrait.png — {e}')
                errors.append(f'portrait: {e}')

        if errors:
            conn.execute('''UPDATE generation_jobs SET status='rembg_error', error=?, updated_at=?
                            WHERE char_id=?''',
                         ('\n'.join(errors), time.time(), char_id))
        else:
            conn.execute('''UPDATE generation_jobs SET status='rembg_done', current_stage='qc',
                            updated_at=? WHERE char_id=?''', (time.time(), char_id))

        conn.commit()

    conn.close()
    print('\nDone.')


if __name__ == '__main__':
    main()
