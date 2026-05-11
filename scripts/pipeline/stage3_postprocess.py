"""
STAGE 3 — POST-PROCESSING
===========================
For each generated image:
  1. Background removal (rembg)
  2. Normalize canvas size per slot type
  3. For attack frames 01-10: pack into a single horizontal spritesheet PNG
     and write a Phaser-compatible JSON atlas
  4. For all other slots: save as standalone PNG with transparent background

Usage:
    # Process all completed images in the state DB
    python stage3_postprocess.py

    # Process only one character
    python stage3_postprocess.py --filter-slug 001-pyrakh

    # Skip background removal (use existing alpha)
    python stage3_postprocess.py --skip-rembg

Dependencies:
    pip install rembg Pillow onnxruntime
"""

from __future__ import annotations

import argparse
import json
import sqlite3
import traceback
from pathlib import Path
from typing import Any

from PIL import Image, ImageOps
from rembg import remove as rembg_remove
from rembg import new_session

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
REPO_ROOT  = Path(__file__).resolve().parents[2]
STATE_DB   = REPO_ROOT / "scripts" / "pipeline" / "output" / "generation_state.db"
PUBLIC_DIR = REPO_ROOT / "public"

# Processed images land next to generated images, with suffix _proc
# Attack spritesheets land at: characters/<slug>/attacks.png + attacks.json

# ---------------------------------------------------------------------------
# Canvas sizes (must match Stage 1 generation sizes)
# ---------------------------------------------------------------------------
SLOT_CANVAS: dict[str, tuple[int, int]] = {
    "portrait":  (512, 512),
    "idle":      (512, 768),
    "run":       (512, 768),
    "swim":      (768, 512),
    "fly":       (512, 768),
    "attack-01": (512, 768),
    "attack-02": (512, 768),
    "attack-03": (512, 768),
    "attack-04": (512, 768),
    "attack-05": (512, 768),
    "attack-06": (512, 768),
    "attack-07": (512, 768),
    "attack-08": (512, 768),
    "attack-09": (512, 768),
    "attack-10": (512, 768),
    "hurt":      (512, 768),
    "die":       (512, 768),
}

ATTACK_SLOTS = [f"attack-{i:02d}" for i in range(1, 11)]

# ---------------------------------------------------------------------------
# rembg model session (u2net is best for characters)
# ---------------------------------------------------------------------------
_REMBG_SESSION = None

def get_rembg_session():
    global _REMBG_SESSION
    if _REMBG_SESSION is None:
        _REMBG_SESSION = new_session("u2net")
    return _REMBG_SESSION


# ---------------------------------------------------------------------------
# Image processing helpers
# ---------------------------------------------------------------------------

def remove_background(img: Image.Image, skip: bool = False) -> Image.Image:
    """Remove background using rembg u2net. Returns RGBA image."""
    if skip or img.mode == "RGBA":
        if img.mode != "RGBA":
            img = img.convert("RGBA")
        return img
    session = get_rembg_session()
    result = rembg_remove(img, session=session)
    if result.mode != "RGBA":
        result = result.convert("RGBA")
    return result


def normalize_canvas(img: Image.Image, slot: str) -> Image.Image:
    """
    Fit character into canonical canvas for its slot type.
    - Preserves aspect ratio
    - Centers the character
    - Fills with transparent background
    """
    target_w, target_h = SLOT_CANVAS.get(slot, (512, 768))

    if img.mode != "RGBA":
        img = img.convert("RGBA")

    # Crop to alpha bounding box to remove dead transparent space
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    # Fit into target canvas with padding
    img.thumbnail((target_w - 20, target_h - 20), Image.LANCZOS)

    canvas = Image.new("RGBA", (target_w, target_h), (0, 0, 0, 0))
    paste_x = (target_w - img.width) // 2
    paste_y = target_h - img.height - 10   # align to bottom with 10px gap
    canvas.paste(img, (paste_x, paste_y), img)
    return canvas


def post_process_image(
    input_path: Path,
    output_path: Path,
    slot: str,
    skip_rembg: bool = False,
) -> Image.Image | None:
    """Load, remove background, normalize. Returns final RGBA image or None on error."""
    try:
        with Image.open(input_path) as raw:
            raw.load()
            img = raw.convert("RGB") if not skip_rembg else raw

        rgba = remove_background(img, skip=skip_rembg)
        normalized = normalize_canvas(rgba, slot)

        output_path.parent.mkdir(parents=True, exist_ok=True)
        normalized.save(output_path, "PNG", optimize=True)
        return normalized

    except Exception as e:
        print(f"[ERROR] post_process_image {input_path}: {e}")
        traceback.print_exc()
        return None


# ---------------------------------------------------------------------------
# Spritesheet packer for attack frames
# ---------------------------------------------------------------------------

def pack_attack_spritesheet(
    slug: str,
    frame_images: dict[str, Image.Image],   # slot -> RGBA image
    output_dir: Path,
) -> tuple[Path, Path] | None:
    """
    Pack attack-01 through attack-10 into a horizontal spritesheet.
    Returns (png_path, json_path) or None on error.

    Spritesheet layout:
        [attack-01][attack-02]...[attack-10]
        All frames same width/height (512x768)
    """
    ordered_frames = []
    for slot in ATTACK_SLOTS:
        if slot in frame_images:
            ordered_frames.append((slot, frame_images[slot]))

    if not ordered_frames:
        return None

    frame_w, frame_h = SLOT_CANVAS["attack-01"]
    sheet_w = frame_w * len(ordered_frames)
    sheet_h = frame_h

    sheet = Image.new("RGBA", (sheet_w, sheet_h), (0, 0, 0, 0))
    frames_meta = {}

    for i, (slot, frame_img) in enumerate(ordered_frames):
        x = i * frame_w
        # Ensure correct size
        if frame_img.size != (frame_w, frame_h):
            frame_img = frame_img.resize((frame_w, frame_h), Image.LANCZOS)
        sheet.paste(frame_img, (x, 0), frame_img)

        # Phaser atlas frame entry
        frame_name = slot  # e.g. "attack-01"
        frames_meta[frame_name] = {
            "frame": {"x": x, "y": 0, "w": frame_w, "h": frame_h},
            "rotated": False,
            "trimmed": False,
            "spriteSourceSize": {"x": 0, "y": 0, "w": frame_w, "h": frame_h},
            "sourceSize": {"w": frame_w, "h": frame_h},
        }

    png_path  = output_dir / "attacks.png"
    json_path = output_dir / "attacks.json"

    sheet.save(png_path, "PNG", optimize=True)

    # Phaser-compatible atlas JSON
    atlas = {
        "frames": frames_meta,
        "meta": {
            "app": "phaser-isometric-pipeline",
            "version": "1.0",
            "image": "attacks.png",
            "format": "RGBA8888",
            "size": {"w": sheet_w, "h": sheet_h},
            "scale": "1",
            "related_multi_packs": [],
        },
    }
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(atlas, f, indent=2)

    print(f"[Pack] {slug}: {len(ordered_frames)} attack frames -> attacks.png ({sheet_w}x{sheet_h})")
    return png_path, json_path


# ---------------------------------------------------------------------------
# Per-character post-processing
# ---------------------------------------------------------------------------

def process_character(
    slug: str,
    completed_jobs: list[dict],
    skip_rembg: bool = False,
) -> dict[str, Any]:
    """
    Process all completed jobs for one character.
    Returns summary dict.
    """
    result = {
        "slug": slug,
        "processed": [],
        "failed": [],
        "spritesheet": None,
    }

    attack_images: dict[str, Image.Image] = {}
    char_dir = PUBLIC_DIR / "characters" / slug

    for job in completed_jobs:
        slot      = job["slot"]
        raw_path  = PUBLIC_DIR / job["output_path"]

        if not raw_path.exists():
            result["failed"].append(slot)
            continue

        # Output path: same filename, overwrite in place after processing
        proc_path = raw_path  # process in-place

        if slot.startswith("attack"):
            # Don't write individual attack files — collect for spritesheet
            try:
                with Image.open(raw_path) as img:
                    img.load()
                    rgba = remove_background(img.convert("RGB"), skip=skip_rembg)
                    normalized = normalize_canvas(rgba, slot)
                    attack_images[slot] = normalized.copy()
                result["processed"].append(slot)
            except Exception as e:
                print(f"[ERROR] {slug}/{slot}: {e}")
                result["failed"].append(slot)
        else:
            img = post_process_image(raw_path, proc_path, slot, skip_rembg=skip_rembg)
            if img:
                result["processed"].append(slot)
            else:
                result["failed"].append(slot)

    # Pack attack spritesheet
    if attack_images:
        char_dir.mkdir(parents=True, exist_ok=True)
        sheet_result = pack_attack_spritesheet(slug, attack_images, char_dir)
        if sheet_result:
            result["spritesheet"] = str(sheet_result[0].relative_to(REPO_ROOT))

    return result


# ---------------------------------------------------------------------------
# Phaser multi-atlas (single atlas covering all non-attack slots)
# ---------------------------------------------------------------------------

def build_character_atlas(slug: str, char_dir: Path) -> Path | None:
    """
    Build a Phaser-compatible JSON atlas for all standalone PNG files in the
    character directory (portrait, idle, run, swim, fly, hurt, die).
    No actual spritesheet packing — each file is its own "frame" at (0,0).
    Phaser can load individual textures, but this atlas acts as a manifest.
    """
    standalone_slots = ["portrait", "idle", "run", "swim", "fly", "hurt", "die"]
    frames_meta = {}

    for slot in standalone_slots:
        png = char_dir / f"{slot}.png"
        if not png.exists():
            continue
        w, h = SLOT_CANVAS.get(slot, (512, 768))
        frames_meta[slot] = {
            "filename": f"{slot}.png",
            "frame": {"x": 0, "y": 0, "w": w, "h": h},
            "rotated": False,
            "trimmed": False,
            "spriteSourceSize": {"x": 0, "y": 0, "w": w, "h": h},
            "sourceSize": {"w": w, "h": h},
        }

    if not frames_meta:
        return None

    atlas = {
        "frames": frames_meta,
        "meta": {
            "app": "phaser-isometric-pipeline",
            "version": "1.0",
            "character": slug,
            "format": "RGBA8888",
            "scale": "1",
        },
    }
    atlas_path = char_dir / "character_atlas.json"
    with open(atlas_path, "w", encoding="utf-8") as f:
        json.dump(atlas, f, indent=2)
    return atlas_path


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Post-process generated images")
    parser.add_argument("--db", type=Path, default=STATE_DB)
    parser.add_argument("--filter-slug", type=str, default=None)
    parser.add_argument("--skip-rembg", action="store_true",
                        help="Skip background removal (use existing PNG as-is)")
    args = parser.parse_args()

    conn = sqlite3.connect(str(args.db))
    conn.row_factory = sqlite3.Row

    query = "SELECT * FROM generation_jobs WHERE status='success'"
    params = ()
    if args.filter_slug:
        query += " AND character_slug LIKE ?"
        params = (f"%{args.filter_slug}%",)
    query += " ORDER BY character_slug, slot"

    jobs = conn.execute(query, params).fetchall()
    conn.close()

    if not jobs:
        print("[Stage 3] No successful jobs found in DB. Run Stage 2 first.")
        return

    # Group by character slug
    by_slug: dict[str, list[dict]] = {}
    for job in jobs:
        slug = job["character_slug"]
        by_slug.setdefault(slug, []).append(dict(job))

    print(f"[Stage 3] Processing {len(by_slug)} characters, {len(jobs)} images")

    total_ok = 0
    total_fail = 0

    for slug, char_jobs in by_slug.items():
        print(f"  [{slug}] {len(char_jobs)} slots...")
        result = process_character(slug, char_jobs, skip_rembg=args.skip_rembg)
        total_ok   += len(result["processed"])
        total_fail += len(result["failed"])

        # Build standalone atlas manifest
        char_dir = PUBLIC_DIR / "characters" / slug
        atlas_path = build_character_atlas(slug, char_dir)
        if atlas_path:
            print(f"    -> atlas manifest: {atlas_path.name}")

        if result["failed"]:
            print(f"    [WARN] Failed slots: {result['failed']}")
        if result["spritesheet"]:
            print(f"    -> spritesheet: {result['spritesheet']}")

    print(f"\n[Stage 3] Done — processed={total_ok}, failed={total_fail}")


if __name__ == "__main__":
    main()
