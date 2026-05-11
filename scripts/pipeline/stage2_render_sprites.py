"""
Stage 2 — Headless 3D rendering → 4-direction spritesheets
Uses Blender's Python API (bpy) in headless mode to render each animation
from 4 isometric azimuths, outputs 512×256 PNG strips.

Run via: blender --background --python stage2_render_sprites.py -- --char-id 001-pyrakh

Requirements: Blender 3.6+ with Python API
"""

import sys
import os
import math
import json
import sqlite3
import argparse
import time
from pathlib import Path

# ── When run under Blender, bpy is available ─────────────────────────────────
try:
    import bpy
    import bmesh
    HAS_BPY = True
except ImportError:
    HAS_BPY = False
    print('WARNING: bpy not available — rendering will be skipped (dry run)')

DB_PATH    = Path(__file__).parent / 'pipeline.db'
OUTPUT_DIR = Path(__file__).parent.parent.parent / 'public' / 'characters'

FRAME_SIZE    = 64
FRAME_COUNT   = 8
RENDER_SCALE  = 4   # render at 4× then downscale for pixel art
RENDER_FRAMES = FRAME_SIZE * RENDER_SCALE  # 256px internal render

AZIMUTHS = [
    math.pi / 4,        # 45°  SE
    3 * math.pi / 4,    # 135° SW
    5 * math.pi / 4,    # 225° NW
    7 * math.pi / 4,    # 315° NE
]
ELEVATION = math.atan(1 / math.sqrt(2))  # ~35.26°
CAM_DIST  = 5.0

ANIMATION_SLOTS = [
    'idle', 'run', 'swim', 'fly',
    'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
    'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
    'hurt', 'die',
]

PORTRAIT_SLOT = 'portrait'


# ── Blender render helpers ────────────────────────────────────────────────────

def setup_scene():
    """Configure Blender scene for isometric pixel-art rendering."""
    if not HAS_BPY:
        return

    scene = bpy.context.scene
    scene.render.engine = 'CYCLES'
    scene.render.resolution_x = RENDER_FRAMES
    scene.render.resolution_y = RENDER_FRAMES
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = 'PNG'
    scene.render.image_settings.color_mode = 'RGBA'
    scene.render.film_transparent = True  # transparent background

    # Cycles settings for speed
    scene.cycles.samples = 64
    scene.cycles.use_denoising = True

    # Remove default objects
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()


def load_glb(glb_path: Path):
    """Import a GLB file into the current scene."""
    if not HAS_BPY:
        return None
    bpy.ops.import_scene.gltf(filepath=str(glb_path))
    # Return the imported armature or mesh
    for obj in bpy.context.selected_objects:
        if obj.type in ('ARMATURE', 'MESH'):
            return obj
    return None


def setup_camera(azimuth: float) -> 'bpy.types.Object':
    """Create/update orthographic camera for isometric view at given azimuth."""
    if not HAS_BPY:
        return None

    cam_data = bpy.data.cameras.new('IsoCamera')
    cam_data.type = 'ORTHO'
    cam_data.ortho_scale = 2.5

    cam_obj = bpy.data.objects.new('IsoCamera', cam_data)
    bpy.context.collection.objects.link(cam_obj)
    bpy.context.scene.camera = cam_obj

    x = CAM_DIST * math.cos(ELEVATION) * math.cos(azimuth)
    y = CAM_DIST * math.sin(ELEVATION)
    z = CAM_DIST * math.cos(ELEVATION) * math.sin(azimuth)
    cam_obj.location = (x, y, z)

    # Point camera at origin+1 (character center of mass)
    direction = cam_obj.location - __import__('mathutils').Vector((0, 1, 0))
    cam_obj.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()

    return cam_obj


def setup_lights():
    """Three-point isometric lighting setup."""
    if not HAS_BPY:
        return

    # Key light
    key = bpy.data.lights.new('Key', 'SUN')
    key.energy = 3.0
    key_obj = bpy.data.objects.new('Key', key)
    key_obj.location = (5, 8, 5)
    bpy.context.collection.objects.link(key_obj)

    # Fill light
    fill = bpy.data.lights.new('Fill', 'SUN')
    fill.energy = 1.0
    fill.color = (0.5, 0.5, 1.0)
    fill_obj = bpy.data.objects.new('Fill', fill)
    fill_obj.location = (-5, 3, -5)
    bpy.context.collection.objects.link(fill_obj)

    # Rim light
    rim = bpy.data.lights.new('Rim', 'SUN')
    rim.energy = 0.8
    rim_obj = bpy.data.objects.new('Rim', rim)
    rim_obj.location = (0, -5, 8)
    bpy.context.collection.objects.link(rim_obj)


def render_frame(output_path: Path, frame_number: int = 1):
    """Render current scene to file."""
    if not HAS_BPY:
        return
    bpy.context.scene.frame_set(frame_number)
    bpy.context.scene.render.filepath = str(output_path)
    bpy.ops.render.render(write_still=True)


def composite_spritesheet(frame_paths: list[Path], output_path: Path):
    """
    Composite 32 frame PNGs (4 dirs × 8 frames) into 512×256 spritesheet.
    Uses only stdlib PIL (Pillow) for image compositing.
    frame_paths: [dir0_f0, dir0_f1, …dir0_f7, dir1_f0, … dir3_f7]
    """
    try:
        from PIL import Image
    except ImportError:
        print('ERROR: Pillow not installed. Run: pip install Pillow')
        return

    out = Image.new('RGBA', (FRAME_SIZE * FRAME_COUNT, FRAME_SIZE * len(AZIMUTHS)), (0, 0, 0, 0))

    for idx, path in enumerate(frame_paths):
        if not path.exists():
            print(f'  Missing frame: {path}')
            continue
        dir_idx   = idx // FRAME_COUNT
        frame_idx = idx % FRAME_COUNT

        img = Image.open(path).convert('RGBA')
        img = img.resize((FRAME_SIZE, FRAME_SIZE), Image.NEAREST)
        out.paste(img, (frame_idx * FRAME_SIZE, dir_idx * FRAME_SIZE))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    out.save(str(output_path), 'PNG')
    print(f'  Saved: {output_path}')


# ── Per-character rendering ───────────────────────────────────────────────────

def render_character(char_id: str, glb_path: Path, anim_name: str, output_path: Path,
                     tmp_dir: Path, frame_count: int = FRAME_COUNT):
    """Render one animation slot for one character — all 4 directions."""
    tmp_dir.mkdir(parents=True, exist_ok=True)
    frame_paths = []

    for dir_idx, azimuth in enumerate(AZIMUTHS):
        # Clear previous camera
        if HAS_BPY:
            for obj in bpy.data.objects:
                if 'IsoCamera' in obj.name:
                    bpy.data.objects.remove(obj)

        cam = setup_camera(azimuth)

        for frame_idx in range(frame_count):
            frame_path = tmp_dir / f'{anim_name}_d{dir_idx}_f{frame_idx:02d}.png'
            frame_paths.append(frame_path)

            # Compute Blender frame number from animation clip
            # (Assumes 24fps Blender timeline, 8-frame anim at positions 0-7)
            bl_frame = int(frame_idx * (24 / frame_count))
            render_frame(frame_path, bl_frame)

    composite_spritesheet(frame_paths, output_path)

    # Cleanup temp frames
    for fp in frame_paths:
        if fp.exists():
            fp.unlink()


# ── Main entry point ──────────────────────────────────────────────────────────

def main():
    # Parse args after '--' separator (Blender passes its own args before --)
    if '--' in sys.argv:
        argv = sys.argv[sys.argv.index('--') + 1:]
    else:
        argv = sys.argv[1:]

    parser = argparse.ArgumentParser()
    parser.add_argument('--char-id', required=True)
    parser.add_argument('--slots',   nargs='+', default=ANIMATION_SLOTS)
    args = parser.parse_args(argv)

    char_id  = args.char_id
    char_dir = OUTPUT_DIR / char_id
    glb_path = char_dir / 'model.glb'

    if not glb_path.exists():
        print(f'ERROR: GLB not found: {glb_path}')
        sys.exit(1)

    conn = sqlite3.connect(DB_PATH)

    print(f'\n=== Rendering {char_id} ===')
    setup_scene()

    if HAS_BPY:
        load_glb(glb_path)
        setup_lights()

    tmp_dir = char_dir / '_tmp_frames'

    for slot in args.slots:
        output_path = char_dir / f'{slot}.png'
        if output_path.exists():
            print(f'  Skip (exists): {slot}.png')
            continue

        print(f'  Rendering slot: {slot}')
        render_character(char_id, glb_path, slot, output_path, tmp_dir)

    # Portrait (single frame, 512×512, higher quality)
    portrait_path = char_dir / 'portrait.png'
    if not portrait_path.exists():
        print('  Rendering portrait…')
        if HAS_BPY:
            bpy.context.scene.render.resolution_x = 512
            bpy.context.scene.render.resolution_y = 512
        cam = setup_camera(math.pi / 4)  # SE view
        render_frame(portrait_path, 1)
        print(f'  Portrait: {portrait_path}')

    # Update DB
    conn.execute('''UPDATE generation_jobs SET status='render_done', current_stage='qc',
                    updated_at=? WHERE char_id=?''', (time.time(), char_id))
    conn.commit()
    conn.close()

    print(f'[OK] {char_id}')


if __name__ == '__main__':
    main()
