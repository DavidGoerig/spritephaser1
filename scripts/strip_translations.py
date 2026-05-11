#!/usr/bin/env python3
"""
strip_translations.py
---------------------
Removes bone-translation animation channels from GLB/GLTF files.

WHY:  Meshy bakes translation (position) data with the proportions of the
      original character.  Applied to a different character, those absolute
      bone positions place joints in the wrong locations → mesh collapse / shrink.
      Keeping only rotation channels makes the animation portable: each target
      character's own bone lengths are respected.

WHAT IS KEPT:
  - All rotation channels (quaternion)
  - All scale channels
  - Translation channel for the root bone (Hips / Root / etc.)  ← optional flag

USAGE:
  # Process a single file (overwrites in-place):
  python strip_translations.py character.glb

  # Write to a new file:
  python strip_translations.py input.glb output.glb

  # Process all GLBs in a folder:
  python strip_translations.py *.glb

  # Also strip root translation (pure rotation-only):
  python strip_translations.py --no-root-translation character.glb

REQUIRES:  pip install pygltflib
"""

import sys
import json
import struct
import argparse
from pathlib import Path


def find_root_bone(gltf) -> int | None:
    """Return the node index of the root bone (has no parent, or is named Hips/Root)."""
    if not gltf.get("nodes"):
        return None

    # Collect all nodes that ARE children of another node
    has_parent = set()
    for node in gltf["nodes"]:
        for child in node.get("children", []):
            has_parent.add(child)

    skins = gltf.get("skins", [])
    if not skins:
        return None

    joints = skins[0].get("joints", [])
    if not joints:
        return None

    # Prefer a joint that is NOT a child of another joint
    joint_set = set(joints)
    root_candidates = [j for j in joints if j not in has_parent or
                       gltf["nodes"][j].get("name", "").lower() in ("hips", "root", "pelvis", "joint_root")]

    if root_candidates:
        return root_candidates[0]
    return joints[0]  # fallback: first joint


def strip_translation_channels(gltf: dict, keep_root_translation: bool = True) -> tuple[int, int]:
    """
    Mutate gltf dict in-place:
      - Remove all translation channels (except root bone if keep_root_translation)
      - Remove orphaned samplers

    Returns (channels_removed, samplers_removed).
    """
    root_node = find_root_bone(gltf) if keep_root_translation else None
    channels_removed = 0
    samplers_removed = 0

    for anim in gltf.get("animations", []):
        channels = anim.get("channels", [])
        samplers = anim.get("samplers", [])

        kept_channels = []
        used_samplers = set()

        for ch in channels:
            target = ch.get("target", {})
            path   = target.get("path", "")
            node   = target.get("node")

            if path == "translation" and node != root_node:
                channels_removed += 1
                continue  # drop

            kept_channels.append(ch)
            used_samplers.add(ch.get("sampler"))

        # Remap sampler indices
        old_to_new = {}
        new_samplers = []
        for old_idx, samp in enumerate(samplers):
            if old_idx in used_samplers:
                old_to_new[old_idx] = len(new_samplers)
                new_samplers.append(samp)
            else:
                samplers_removed += 1

        for ch in kept_channels:
            if ch["sampler"] in old_to_new:
                ch["sampler"] = old_to_new[ch["sampler"]]

        anim["channels"] = kept_channels
        anim["samplers"] = new_samplers

    return channels_removed, samplers_removed


# ── GLB binary I/O ────────────────────────────────────────────────────────────

GLB_MAGIC   = 0x46546C67  # "glTF"
JSON_CHUNK  = 0x4E4F534A  # "JSON"
BIN_CHUNK   = 0x004E4942  # "BIN\0"


def read_glb(path: Path) -> tuple[dict, bytes | None]:
    data = path.read_bytes()
    magic, version, length = struct.unpack_from("<III", data, 0)
    assert magic == GLB_MAGIC, f"Not a GLB file: {path}"
    assert version == 2, f"Only GLB v2 supported, got v{version}"

    offset = 12
    json_data = None
    bin_data  = None

    while offset < length:
        chunk_len, chunk_type = struct.unpack_from("<II", data, offset)
        offset += 8
        chunk_body = data[offset: offset + chunk_len]
        offset += chunk_len

        if chunk_type == JSON_CHUNK:
            json_data = json.loads(chunk_body.decode("utf-8"))
        elif chunk_type == BIN_CHUNK:
            bin_data = chunk_body

    return json_data, bin_data


def write_glb(path: Path, gltf: dict, bin_data: bytes | None):
    json_bytes = json.dumps(gltf, separators=(",", ":")).encode("utf-8")
    # Pad to 4-byte alignment
    json_pad = (4 - len(json_bytes) % 4) % 4
    json_bytes += b" " * json_pad

    chunks = struct.pack("<II", len(json_bytes), JSON_CHUNK) + json_bytes

    if bin_data is not None:
        bin_pad = (4 - len(bin_data) % 4) % 4
        bin_bytes = bin_data + b"\x00" * bin_pad
        chunks += struct.pack("<II", len(bin_bytes), BIN_CHUNK) + bin_bytes

    total = 12 + len(chunks)
    header = struct.pack("<III", GLB_MAGIC, 2, total)
    path.write_bytes(header + chunks)


# ── Main ──────────────────────────────────────────────────────────────────────

def process_file(src: Path, dst: Path, keep_root: bool):
    gltf, bin_data = read_glb(src)
    cr, sr = strip_translation_channels(gltf, keep_root_translation=keep_root)
    write_glb(dst, gltf, bin_data)
    tag = f"→ {dst}" if dst != src else "(in-place)"
    print(f"  {src.name} {tag}: -{cr} translation channels, -{sr} samplers")


def main():
    ap = argparse.ArgumentParser(description="Strip bone-translation channels from GLB animations.")
    ap.add_argument("files", nargs="+", help="GLB file(s) to process")
    ap.add_argument("--no-root-translation", action="store_true",
                    help="Also strip translation from the root bone (fully rotation-only)")
    ap.add_argument("--output", "-o", help="Output file (only valid with a single input)")
    args = ap.parse_args()

    keep_root = not args.no_root_translation
    inputs = [Path(f) for f in args.files]

    if args.output and len(inputs) != 1:
        print("ERROR: --output can only be used with a single input file.", file=sys.stderr)
        sys.exit(1)

    print(f"strip_translations.py — keep_root_translation={keep_root}")
    for src in inputs:
        dst = Path(args.output) if args.output else src
        try:
            process_file(src, dst, keep_root)
        except Exception as e:
            print(f"  ERROR {src}: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
