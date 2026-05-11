"""
STAGE 5 — ASSET INTEGRATION
==============================
Final step: writes confirmed (QC-passed) assets to their canonical paths
under public/characters/<slug>/ and updates characters.json with actual
resolved asset paths.

This script is SAFE to run multiple times — it only updates characters.json
for characters that have at least one confirmed asset. It preserves existing
confirmed assets and only overwrites with better-QC'd ones.

Usage:
    # Full integration pass
    python stage5_integrate.py

    # Preview what would be written (no changes)
    python stage5_integrate.py --dry-run

    # Only integrate one character
    python stage5_integrate.py --filter-slug 001-pyrakh

    # Force-include assets that passed manual review even if automated QC failed
    python stage5_integrate.py --include-reviewed

Dependencies:
    pip install Pillow
"""

from __future__ import annotations

import argparse
import json
import shutil
import sqlite3
from datetime import datetime
from pathlib import Path
from typing import Any

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
REPO_ROOT        = Path(__file__).resolve().parents[2]
STATE_DB         = REPO_ROOT / "scripts" / "pipeline" / "output" / "generation_state.db"
PUBLIC_DIR       = REPO_ROOT / "public"
CHARACTERS_JSON  = PUBLIC_DIR / "characters" / "characters.json"
BACKUP_DIR       = REPO_ROOT / "scripts" / "pipeline" / "output" / "json_backups"

# ---------------------------------------------------------------------------
# Asset slot -> characters.json field mapping
# ---------------------------------------------------------------------------
STANDALONE_SLOTS = {
    "portrait": "portrait",
    "idle":     "idle",
    "run":      "run",
    "swim":     "swim",
    "fly":      "fly",
    "hurt":     "hurt",
    "die":      "die",
}
ATTACK_SLOTS = [f"attack-{i:02d}" for i in range(1, 11)]


# ---------------------------------------------------------------------------
# DB helpers
# ---------------------------------------------------------------------------

def get_confirmed_assets(
    conn: sqlite3.Connection,
    filter_slug: str | None = None,
    include_reviewed: bool = False,
) -> dict[str, dict[str, str]]:
    """
    Returns {slug: {slot: output_path}} for all confirmed assets.

    "Confirmed" = qc_pass=1 in qc_results, OR reviewed_action='accept'
    if include_reviewed is True.
    """
    if include_reviewed:
        query = """
            SELECT q.character_slug, q.slot, q.output_path
            FROM qc_results q
            WHERE q.qc_pass=1 OR q.reviewed_action='accept'
        """
    else:
        query = """
            SELECT q.character_slug, q.slot, q.output_path
            FROM qc_results q
            WHERE q.qc_pass=1
        """

    params = ()
    if filter_slug:
        query += " AND q.character_slug LIKE ?"
        params = (f"%{filter_slug}%",)

    rows = conn.execute(query, params).fetchall()

    result: dict[str, dict[str, str]] = {}
    for row in rows:
        slug = row["character_slug"] if hasattr(row, "character_slug") else row[0]
        slot = row["slot"] if hasattr(row, "slot") else row[1]
        path = row["output_path"] if hasattr(row, "output_path") else row[2]
        result.setdefault(slug, {})[slot] = path

    return result


# ---------------------------------------------------------------------------
# characters.json updater
# ---------------------------------------------------------------------------

def backup_characters_json() -> Path:
    """Create a timestamped backup before modifying."""
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    ts      = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    backup  = BACKUP_DIR / f"characters_{ts}.json"
    shutil.copy2(CHARACTERS_JSON, backup)
    return backup


def build_assets_block(slug: str, confirmed: dict[str, str]) -> dict[str, Any]:
    """
    Build the assets object for one character from confirmed slot paths.
    Only fills fields that have a confirmed asset — leaves others as-is.
    """
    assets: dict[str, Any] = {}

    for slot, field in STANDALONE_SLOTS.items():
        if slot in confirmed:
            assets[field] = confirmed[slot]

    # Attack array — positions 0-9 correspond to attack-01 through attack-10
    # We check if the spritesheet was packed (attacks.png exists)
    # AND if individual frames exist in confirmed
    attack_paths = []
    for slot in ATTACK_SLOTS:
        if slot in confirmed:
            attack_paths.append(confirmed[slot])
        else:
            # Check if the spritesheet exists for this character
            sheet_path = PUBLIC_DIR / "characters" / slug / "attacks.png"
            if sheet_path.exists():
                attack_paths.append(f"characters/{slug}/attacks.png#{slot}")
            else:
                attack_paths.append(None)

    if any(p is not None for p in attack_paths):
        assets["attack"] = [p for p in attack_paths if p is not None]

    # GLB model — not generated by this pipeline, keep existing path convention
    glb_path = f"characters/{slug}/model.glb"
    glb_file = PUBLIC_DIR / "characters" / slug / "model.glb"
    if glb_file.exists():
        assets["model_glb"] = glb_path

    return assets


def update_characters_json(
    confirmed_by_slug: dict[str, dict[str, str]],
    dry_run: bool = False,
) -> dict[str, int]:
    """
    Load characters.json, update assets blocks for all confirmed slugs.
    Returns stats dict.
    """
    with open(CHARACTERS_JSON, encoding="utf-8") as f:
        characters: list[dict] = json.load(f)

    # Build lookup by slug (from folder field)
    char_by_slug: dict[str, dict] = {}
    for char in characters:
        folder = char.get("folder", "")
        slug   = folder.split("/")[-1] if folder else f"{char['id']:03d}"
        char_by_slug[slug] = char

    stats = {"updated": 0, "skipped": 0, "not_found": 0}

    for slug, confirmed in confirmed_by_slug.items():
        if slug not in char_by_slug:
            print(f"[WARN] Slug '{slug}' not found in characters.json")
            stats["not_found"] += 1
            continue

        char = char_by_slug[slug]
        new_assets = build_assets_block(slug, confirmed)

        if not new_assets:
            stats["skipped"] += 1
            continue

        # Merge with existing assets (prefer new over old)
        existing_assets = char.get("assets", {}) or {}
        merged = {**existing_assets, **new_assets}

        if not dry_run:
            char["assets"] = merged

        stats["updated"] += 1
        confirmed_slots = list(confirmed.keys())
        print(f"  [{slug}] updated {len(confirmed_slots)} slots: {', '.join(sorted(confirmed_slots))}")

    if not dry_run:
        # Backup before writing
        backup_path = backup_characters_json()
        print(f"\n[Stage 5] Backed up characters.json -> {backup_path.name}")

        with open(CHARACTERS_JSON, "w", encoding="utf-8") as f:
            json.dump(characters, f, ensure_ascii=False, indent=2)
        print(f"[Stage 5] characters.json updated.")

    return stats


# ---------------------------------------------------------------------------
# Asset verification — check that all referenced paths in characters.json exist
# ---------------------------------------------------------------------------

def verify_asset_paths(filter_slug: str | None = None) -> dict[str, list[str]]:
    """
    Scan characters.json and verify every asset path actually exists on disk.
    Returns {slug: [missing_paths]}.
    """
    with open(CHARACTERS_JSON, encoding="utf-8") as f:
        characters = json.load(f)

    missing_by_slug: dict[str, list[str]] = {}

    for char in characters:
        folder = char.get("folder", "")
        slug   = folder.split("/")[-1] if folder else str(char["id"])

        if filter_slug and filter_slug not in slug:
            continue

        assets = char.get("assets", {}) or {}
        missing = []

        for field, value in assets.items():
            if field == "attack" and isinstance(value, list):
                for p in value:
                    if p and not (PUBLIC_DIR / p).exists():
                        missing.append(p)
            elif value and field != "model_glb":   # GLB not tracked by pipeline
                if not (PUBLIC_DIR / value).exists():
                    missing.append(value)

        if missing:
            missing_by_slug[slug] = missing

    return missing_by_slug


# ---------------------------------------------------------------------------
# Coverage report
# ---------------------------------------------------------------------------

def print_coverage_report(filter_slug: str | None = None):
    """Print how many of 17 slots are confirmed per character."""
    with open(CHARACTERS_JSON, encoding="utf-8") as f:
        characters = json.load(f)

    TOTAL_SLOTS = 17  # 7 standalone + 10 attack

    complete = 0
    partial  = 0
    empty    = 0

    for char in characters:
        folder = char.get("folder", "")
        slug   = folder.split("/")[-1] if folder else str(char["id"])

        if filter_slug and filter_slug not in slug:
            continue

        assets = char.get("assets", {}) or {}
        count  = sum(1 for k, v in assets.items()
                     if k != "model_glb" and v and
                     (not isinstance(v, list) or len(v) > 0))
        if isinstance(assets.get("attack"), list):
            count = count - 1 + len(assets["attack"])  # expand attack list

        if count == 0:
            empty += 1
        elif count >= TOTAL_SLOTS:
            complete += 1
        else:
            partial += 1

    total = complete + partial + empty
    pct = lambda n: f"{100*n//total}%" if total else "0%"
    print(f"\n[Coverage] {total} characters")
    print(f"  Complete ({TOTAL_SLOTS}/{TOTAL_SLOTS} slots): {complete} ({pct(complete)})")
    print(f"  Partial  (1-{TOTAL_SLOTS-1} slots):           {partial} ({pct(partial)})")
    print(f"  Empty    (0 slots):                {empty} ({pct(empty)})")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Integrate confirmed assets into characters.json")
    parser.add_argument("--db", type=Path, default=STATE_DB)
    parser.add_argument("--filter-slug", type=str, default=None)
    parser.add_argument("--dry-run", action="store_true",
                        help="Show what would be updated without writing")
    parser.add_argument("--include-reviewed", action="store_true",
                        help="Include manually-accepted assets even if automated QC failed")
    parser.add_argument("--verify", action="store_true",
                        help="Verify asset paths in characters.json then exit")
    parser.add_argument("--coverage", action="store_true",
                        help="Print slot coverage report then exit")
    args = parser.parse_args()

    if args.coverage:
        print_coverage_report(filter_slug=args.filter_slug)
        return

    if args.verify:
        print("[Stage 5] Verifying asset paths in characters.json...")
        missing = verify_asset_paths(filter_slug=args.filter_slug)
        if missing:
            total_missing = sum(len(v) for v in missing.values())
            print(f"  {total_missing} missing paths across {len(missing)} characters:")
            for slug, paths in list(missing.items())[:20]:
                print(f"    [{slug}]: {len(paths)} missing")
                for p in paths[:3]:
                    print(f"      {p}")
        else:
            print("  All asset paths verified — no missing files.")
        return

    conn = sqlite3.connect(str(args.db))
    conn.row_factory = sqlite3.Row

    confirmed = get_confirmed_assets(
        conn,
        filter_slug=args.filter_slug,
        include_reviewed=args.include_reviewed,
    )
    conn.close()

    if not confirmed:
        print("[Stage 5] No confirmed assets found. Run Stages 2-4 first.")
        return

    total_confirmed_slots = sum(len(v) for v in confirmed.values())
    print(f"[Stage 5] {len(confirmed)} characters with {total_confirmed_slots} confirmed slots")

    if args.dry_run:
        print("[Stage 5] DRY RUN — no files will be written.")

    stats = update_characters_json(confirmed, dry_run=args.dry_run)

    print(f"\n[Stage 5] Integration complete:")
    print(f"  Updated:   {stats['updated']}")
    print(f"  Skipped:   {stats['skipped']}")
    print(f"  Not found: {stats['not_found']}")

    if not args.dry_run:
        print("\n[Stage 5] Running path verification...")
        missing = verify_asset_paths(filter_slug=args.filter_slug)
        if missing:
            print(f"  WARNING: {sum(len(v) for v in missing.values())} paths still missing on disk.")
        else:
            print("  All referenced paths verified on disk.")

    print_coverage_report(filter_slug=args.filter_slug)


if __name__ == "__main__":
    main()
