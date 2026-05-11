"""
run_pipeline.py — Single entrypoint for the full asset generation pipeline
===========================================================================
Orchestrates every stage from Meshy AI 3D generation through to final
characters.json integration.  Thin wrapper that delegates to the stage
scripts; all heavy logic lives in meshy_pipeline.py and stage*.py.

Usage:
    # Full pipeline for one character (Meshy + render + rembg + QC + integrate)
    python run_pipeline.py --char 001-pyrakh

    # Skip Meshy — GLB already at public/characters/001-pyrakh/model.glb
    python run_pipeline.py --char 001-pyrakh --skip-meshy

    # Use an externally-supplied GLB, skip Meshy generation
    python run_pipeline.py --char 001-pyrakh --glb path/to/model.glb

    # Dry run — print what would happen, no API calls
    python run_pipeline.py --char 001-pyrakh --dry-run

    # Batch: all characters
    python run_pipeline.py --all

    # Batch: resume from character id 50 onwards
    python run_pipeline.py --all --from-id 50

    # Batch dry-run
    python run_pipeline.py --all --dry-run

    # Show rich progress table of all characters
    python run_pipeline.py --status

    # Run only specific pipeline stages (1=Meshy, 2=Blender, 3=rembg, 4=QC, 5=integrate)
    python run_pipeline.py --char 001-pyrakh --from-stage 3
    python run_pipeline.py --all --stage 4

Pipeline stages:
    1  meshy_pipeline.py  — Meshy AI text-to-3D, GLB download, Node.js sprite render
    2  stage2_generator.py — 2D sprite generation (Stability AI / Replicate fallback)
    3  stage3_rembg.py    — Background removal via rembg, pixel-art edge cleanup
    4  stage4_qc.py       — Automated QC: alpha coverage, file size, duplicate detection
    5  stage5_integrate.py — Write confirmed assets + update characters.json

Cost reference (Meshy AI):
    Preview  ~$0.50/model  |  Refine  ~$2.00/model
    234 chars × $2.50 ≈ $585 total
"""

from __future__ import annotations

import argparse
import json
import os
import sqlite3
import subprocess
import sys
from pathlib import Path

# ── Paths ──────────────────────────────────────────────────────────────────────

PIPELINE_DIR    = Path(__file__).resolve().parent
REPO_ROOT       = PIPELINE_DIR.parents[1]
CHARACTERS_JSON = REPO_ROOT / "public" / "characters" / "characters.json"
OUTPUT_DIR      = REPO_ROOT / "public" / "characters"
DB_PATH         = PIPELINE_DIR / "pipeline.db"

# Stage scripts
MESHY_PIPELINE  = PIPELINE_DIR / "meshy_pipeline.py"
STAGE2          = PIPELINE_DIR / "stage2_generator.py"
STAGE3          = PIPELINE_DIR / "stage3_rembg.py"
STAGE4          = PIPELINE_DIR / "stage4_qc.py"
STAGE5          = PIPELINE_DIR / "stage5_integrate.py"


# ── Helpers ────────────────────────────────────────────────────────────────────

def run_python(script: Path, extra: list[str] = ()) -> int:
    cmd = [sys.executable, str(script)] + list(extra)
    print(f"\n{'='*60}")
    print(f"  {' '.join(cmd)}")
    print(f"{'='*60}")
    return subprocess.run(cmd).returncode


def abort_on_failure(rc: int, stage: str):
    if rc != 0:
        print(f"\n[Pipeline] Stage '{stage}' exited with code {rc}. Stopping.")
        sys.exit(rc)


def slug_from_char(char: dict) -> str:
    folder = char.get("folder", "")
    if folder:
        return folder.split("/")[-1]
    nom = char.get("nom", "unknown").lower().replace(" ", "-")
    return f"{char['id']:03d}-{nom}"


def load_characters() -> list[dict]:
    with open(CHARACTERS_JSON, encoding="utf-8") as f:
        return json.load(f)


# ── Status display ─────────────────────────────────────────────────────────────

def show_status():
    """Print a rich (or plain) progress table."""

    # Ensure DB exists and has data
    if not DB_PATH.exists():
        print("[INFO] No pipeline.db found — no characters have been processed yet.")
        print(f"       Run: python run_pipeline.py --char SLUG  to start.")
        return

    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row

    # Meshy jobs table (from meshy_pipeline.py)
    meshy_exists = conn.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='meshy_jobs'"
    ).fetchone()

    # Generation jobs table (from stage2_generator.py)
    gen_exists = conn.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='generation_jobs'"
    ).fetchone()

    chars = load_characters()
    total = len(chars)

    # Count assets on disk per character
    def asset_count(slug: str) -> int:
        d = OUTPUT_DIR / slug
        if not d.exists():
            return 0
        return sum(1 for f in d.iterdir() if f.suffix == ".png")

    try:
        from rich.console import Console
        from rich.table import Table
        from rich import box

        console = Console()
        table   = Table(
            title=f"Asset Pipeline Status  ({total} characters)",
            box=box.ROUNDED,
            show_header=True,
            header_style="bold magenta",
        )
        table.add_column("#",         justify="right", style="dim",     width=4)
        table.add_column("Slug",      style="cyan",    no_wrap=True,    min_width=24)
        table.add_column("Name",      style="white",                    min_width=18)
        table.add_column("Element",   style="yellow",                   min_width=10)
        table.add_column("GLB",       justify="center",                 width=5)
        table.add_column("Sprites",   justify="center",                 width=8)
        table.add_column("Meshy",     style="green",   no_wrap=True,    min_width=10)
        table.add_column("Cost",      justify="right", style="blue",    width=7)
        table.add_column("Error",     style="red",     no_wrap=False,   max_width=34)

        STATUS_STYLE = {
            "done":       "[bold green]done[/bold green]",
            "glb_ready":  "[green]glb_ready[/green]",
            "rendering":  "[yellow]rendering[/yellow]",
            "generating": "[cyan]generating[/cyan]",
            "pending":    "[dim]pending[/dim]",
            "error":      "[bold red]error[/bold red]",
            "skipped":    "[dim]skipped[/dim]",
        }

        # Build meshy lookup
        meshy_lookup: dict[str, sqlite3.Row] = {}
        if meshy_exists:
            for row in conn.execute("SELECT * FROM meshy_jobs"):
                meshy_lookup[row["char_id"]] = row

        counts: dict[str, int] = {}
        total_cost = 0.0

        for i, char in enumerate(chars, 1):
            slug    = slug_from_char(char)
            job     = meshy_lookup.get(slug)
            glb_ok  = (OUTPUT_DIR / slug / "model.glb").exists()
            sprites = asset_count(slug)

            status   = job["status"] if job else "—"
            cost     = float(job["cost_usd"] or 0) if job else 0.0
            error    = (job["error"] or "")[:50] if job else ""
            total_cost += cost

            counts[status] = counts.get(status, 0) + 1

            table.add_row(
                str(i),
                slug,
                char.get("nom", ""),
                char.get("element", ""),
                "[green]Y[/green]" if glb_ok else "[red]—[/red]",
                f"[green]{sprites}[/green]" if sprites else "[dim]0[/dim]",
                STATUS_STYLE.get(status, status),
                f"${cost:.2f}" if cost else "—",
                error,
            )

        console.print(table)

        # Summary footer
        done_pct   = counts.get("done", 0) * 100 // total if total else 0
        error_cnt  = counts.get("error", 0)
        pending    = total - sum(v for k, v in counts.items() if k not in ("—",))
        console.print(
            f"  [bold]Total: {total}[/bold]  |  "
            f"[green]done: {counts.get('done', 0)} ({done_pct}%)[/green]  |  "
            f"[red]errors: {error_cnt}[/red]  |  "
            f"[dim]pending: {pending}[/dim]  |  "
            f"[blue]${total_cost:.2f} spent[/blue]"
        )

    except ImportError:
        # Plain-text fallback
        print(f"\n{'='*80}")
        print(f"  Pipeline Status — {total} characters")
        print(f"{'='*80}")
        print(f"{'#':>4}  {'Slug':<28}  {'Name':<20}  {'GLB':^5}  {'Sprites':^7}  {'Status':<12}  {'Cost':>7}  Error")
        print("-" * 110)

        meshy_lookup: dict[str, sqlite3.Row] = {}
        if meshy_exists:
            for row in conn.execute("SELECT * FROM meshy_jobs"):
                meshy_lookup[row["char_id"]] = row

        total_cost = 0.0
        counts: dict[str, int] = {}

        for i, char in enumerate(chars, 1):
            slug    = slug_from_char(char)
            job     = meshy_lookup.get(slug)
            glb_ok  = "Y" if (OUTPUT_DIR / slug / "model.glb").exists() else "-"
            sprites = asset_count(slug)
            status  = job["status"] if job else "—"
            cost    = float(job["cost_usd"] or 0) if job else 0.0
            error   = (job["error"] or "")[:40] if job else ""
            total_cost += cost
            counts[status] = counts.get(status, 0) + 1
            print(
                f"{i:>4}  {slug:<28}  {char.get('nom',''):<20}  {glb_ok:^5}  "
                f"{sprites:^7}  {status:<12}  ${cost:>6.2f}  {error}"
            )

        print("-" * 110)
        print(f"Total: {total}  |  done: {counts.get('done',0)}  |  errors: {counts.get('error',0)}  |  ${total_cost:.2f} spent")

    conn.close()


# ── Stage runner helpers ───────────────────────────────────────────────────────

def run_stage1_meshy(
    char_slug: str | None,
    *,
    all_chars: bool = False,
    glb: Path | None = None,
    skip_meshy: bool = False,
    dry_run: bool = False,
    from_id: int = 1,
) -> int:
    extra: list[str] = []
    if char_slug:
        extra += ["--char", char_slug]
    elif all_chars:
        extra += ["--all", "--from-id", str(from_id)]
    if glb:
        extra += ["--glb", str(glb)]
    if skip_meshy:
        extra.append("--skip-meshy")
    if dry_run:
        extra.append("--dry-run")
    return run_python(MESHY_PIPELINE, extra)


def run_stage3(char_slug: str | None, *, dry_run: bool = False) -> int:
    extra: list[str] = []
    if char_slug:
        extra += ["--char-id", char_slug]
    else:
        extra.append("--all")
    # stage3_rembg has no --dry-run but it's fast enough to be OK
    return run_python(STAGE3, extra)


def run_stage4(char_slug: str | None) -> int:
    extra = ["--auto-only"]
    if char_slug:
        extra += ["--filter-slug", char_slug]
    return run_python(STAGE4, extra)


def run_stage5(char_slug: str | None, *, dry_run: bool = False) -> int:
    extra: list[str] = []
    if char_slug:
        extra += ["--filter-slug", char_slug]
    if dry_run:
        extra.append("--dry-run")
    return run_python(STAGE5, extra)


# ── Main ───────────────────────────────────────────────────────────────────────

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Full asset pipeline orchestrator",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )

    # Mode
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--char",   metavar="SLUG",
                      help="Process a single character (e.g. 001-pyrakh)")
    mode.add_argument("--all",    action="store_true",
                      help="Process all characters")
    mode.add_argument("--status", action="store_true",
                      help="Show progress table and exit")

    # GLB / Meshy options
    parser.add_argument("--glb",        metavar="PATH", type=Path,
                        help="Use this GLB file instead of generating via Meshy")
    parser.add_argument("--skip-meshy", action="store_true",
                        help="Skip Meshy entirely; GLB must already exist on disk")
    parser.add_argument("--dry-run",    action="store_true",
                        help="Print actions without making API calls")
    parser.add_argument("--from-id",    metavar="N", type=int, default=1,
                        help="Batch: start from character id N (default: 1)")

    # Stage control
    parser.add_argument("--stage",      metavar="N", type=int, choices=[1, 2, 3, 4, 5],
                        help="Run only this stage (1-5)")
    parser.add_argument("--from-stage", metavar="N", type=int, default=1,
                        choices=[1, 2, 3, 4, 5],
                        help="Start pipeline from this stage (default: 1)")

    return parser.parse_args()


def main():
    args = parse_args()

    # ── Status mode ────────────────────────────────────────────────────────────
    if args.status:
        show_status()
        return

    # ── Validate: need a mode ──────────────────────────────────────────────────
    if not args.char and not args.all:
        print("[ERROR] Specify --char SLUG, --all, or --status")
        print("        Run with -h for help.")
        sys.exit(1)

    # ── Determine which stages to run ──────────────────────────────────────────
    if args.stage:
        stages = [args.stage]
    else:
        stages = list(range(args.from_stage, 6))

    char_slug = args.char  # None when --all

    print(f"[Pipeline] Stages to run: {stages}")
    if char_slug:
        print(f"[Pipeline] Character: {char_slug}")
    else:
        print(f"[Pipeline] All characters (from id {args.from_id})")
    if args.dry_run:
        print("[Pipeline] DRY RUN — no API calls")

    # ── Run stages ─────────────────────────────────────────────────────────────

    for stage in stages:

        if stage == 1:
            # Stage 1: Meshy AI → GLB → Node.js renderer
            rc = run_stage1_meshy(
                char_slug,
                all_chars=args.all,
                glb=args.glb,
                skip_meshy=args.skip_meshy,
                dry_run=args.dry_run,
                from_id=args.from_id,
            )
            abort_on_failure(rc, "Meshy/render (stage 1)")

        elif stage == 2:
            # Stage 2: 2D sprite generation (Stability AI fallback path)
            extra: list[str] = []
            if char_slug:
                extra += ["--filter-slug", char_slug]
            if args.dry_run:
                extra.append("--dry-run")
            rc = run_python(STAGE2, extra)
            abort_on_failure(rc, "2D generation (stage 2)")

        elif stage == 3:
            # Stage 3: Background removal via rembg
            rc = run_stage3(char_slug)
            abort_on_failure(rc, "rembg (stage 3)")

        elif stage == 4:
            # Stage 4: Automated QC
            rc = run_stage4(char_slug)
            abort_on_failure(rc, "QC (stage 4)")

        elif stage == 5:
            # Stage 5: Integrate into characters.json
            rc = run_stage5(char_slug, dry_run=args.dry_run)
            abort_on_failure(rc, "integration (stage 5)")

    print(f"\n[Pipeline] All stages complete.")

    # Print a quick status summary after a full run
    if not args.dry_run and (args.char or args.all):
        print()
        show_status()


if __name__ == "__main__":
    main()
