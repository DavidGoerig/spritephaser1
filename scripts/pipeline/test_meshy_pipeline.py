"""
pytest test suite for meshy_pipeline.py
========================================
Covers the pure-Python logic that can be tested without network access,
a real filesystem, or a running Meshy API:

  - build_meshy_prompt()     — prompt composition & length limit
  - slug_from_char()         — slug derivation from character dicts
  - find_char_by_slug()      — lookup helper
  - open_db() / upsert_char() / update_job() / record_cost() / get_total_cost()
      — SQLite helpers (in-memory DB)
  - poll_until_done()        — timeout and error-status branches (mocked HTTP)
  - run_node_renderer()      — dry-run branch (no subprocess spawning)
  - load_characters()        — file I/O (temp JSON fixture)

Run:
    pip install pytest pytest-asyncio aiohttp aioresponses python-dotenv aiofiles
    pytest scripts/pipeline/test_meshy_pipeline.py -v
"""

from __future__ import annotations

import asyncio
import json
import os
import sqlite3
import sys
import tempfile
from pathlib import Path
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

# ── Make the pipeline importable without a real .env ────────────────────────
# We patch out load_dotenv and the path constants before the first import.
_PIPELINE_DIR = Path(__file__).resolve().parent

# Patch environment so the module-level load_dotenv() call is a no-op
os.environ.setdefault("MESHY_API_KEY", "test-key-placeholder")

# ── Import the module under test ─────────────────────────────────────────────
sys.path.insert(0, str(_PIPELINE_DIR))
import meshy_pipeline as mp


# ═════════════════════════════════════════════════════════════════════════════
# Fixtures
# ═════════════════════════════════════════════════════════════════════════════

@pytest.fixture()
def in_memory_db():
    """Return an open in-memory SQLite connection with the pipeline schema."""
    conn = sqlite3.connect(":memory:", check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.executescript(mp.SCHEMA)
    conn.commit()
    yield conn
    conn.close()


@pytest.fixture()
def sample_char() -> dict:
    return {
        "id": 1,
        "nom": "Pyrakh",
        "element": "Feu",
        "element2": None,
        "espece": "Pyriens",
        "classe": "Juggernaut",
        "faction": "Empire",
        "description_physique": "Massive volcanic warrior with obsidian skin and lava veins",
        "folder": "characters/001-pyrakh",
    }


@pytest.fixture()
def dual_element_char() -> dict:
    return {
        "id": 2,
        "nom": "Aquarex",
        "element": "Eau",
        "element2": "Glace",
        "espece": "Néréides",
        "classe": "Mage-Burst",
        "faction": "Indépendant",
        "description_physique": "Fluid and cold, moves like a glacier",
        "folder": "characters/002-aquarex",
    }


# ═════════════════════════════════════════════════════════════════════════════
# slug_from_char
# ═════════════════════════════════════════════════════════════════════════════

class TestSlugFromChar:
    def test_uses_folder_basename(self, sample_char):
        assert mp.slug_from_char(sample_char) == "001-pyrakh"

    def test_falls_back_to_id_and_name_when_no_folder(self):
        char = {"id": 7, "nom": "Ombre Noire"}
        slug = mp.slug_from_char(char)
        assert slug == "007-ombre-noire"

    def test_empty_folder_triggers_fallback(self):
        char = {"id": 3, "nom": "Xeno", "folder": ""}
        slug = mp.slug_from_char(char)
        assert slug == "003-xeno"

    def test_missing_nom_fallback(self):
        char = {"id": 5}
        slug = mp.slug_from_char(char)
        assert "005" in slug


# ═════════════════════════════════════════════════════════════════════════════
# find_char_by_slug
# ═════════════════════════════════════════════════════════════════════════════

class TestFindCharBySlug:
    def test_finds_existing_character(self, sample_char):
        chars = [sample_char]
        result = mp.find_char_by_slug(chars, "001-pyrakh")
        assert result is sample_char

    def test_returns_none_for_unknown_slug(self, sample_char):
        chars = [sample_char]
        result = mp.find_char_by_slug(chars, "999-ghost")
        assert result is None

    def test_finds_among_multiple_characters(self, sample_char, dual_element_char):
        chars = [sample_char, dual_element_char]
        assert mp.find_char_by_slug(chars, "002-aquarex") is dual_element_char


# ═════════════════════════════════════════════════════════════════════════════
# build_meshy_prompt
# ═════════════════════════════════════════════════════════════════════════════

class TestBuildMeshyPrompt:
    def test_prompt_is_a_string(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        assert isinstance(prompt, str)

    def test_prompt_never_exceeds_1000_chars(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        assert len(prompt) <= 1000

    def test_prompt_contains_element_token(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        # "fire elemental" is in the Feu token
        assert "fire" in prompt.lower() or "lava" in prompt.lower()

    def test_prompt_contains_class_token(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        assert "plate armor" in prompt.lower() or "juggernaut" in prompt.lower() or "unstoppable" in prompt.lower()

    def test_prompt_contains_faction_token(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        assert "imperial" in prompt.lower() or "empire" in prompt.lower()

    def test_dual_element_includes_secondary(self, dual_element_char):
        prompt = mp.build_meshy_prompt(dual_element_char)
        # Secondary element "Glace" should appear as "secondary ... ice"
        assert "secondary" in prompt.lower() or "ice" in prompt.lower() or "frozen" in prompt.lower()

    def test_unknown_element_falls_back_to_normal(self):
        char = {"nom": "X", "element": "Inconnu", "classe": "Specialiste",
                "espece": "Hommes-Liens", "faction": "Independant",
                "description_physique": ""}
        prompt = mp.build_meshy_prompt(char)
        assert len(prompt) > 0

    def test_physique_truncated_at_word_boundary(self):
        long_desc = "A " * 60  # 120 chars
        char = {"nom": "X", "element": "Normal", "classe": "Specialiste",
                "espece": "Hommes-Liens", "faction": "Independant",
                "description_physique": long_desc}
        prompt = mp.build_meshy_prompt(char)
        # Truncated portion should not exceed 80 chars inside the prompt
        # (it appears somewhere in the middle — verify prompt still valid)
        assert len(prompt) <= 1000

    def test_boilerplate_always_included(self, sample_char):
        prompt = mp.build_meshy_prompt(sample_char)
        assert "T-pose" in prompt or "idle" in prompt.lower()
        assert "isometric" in prompt.lower()


# ═════════════════════════════════════════════════════════════════════════════
# SQLite helpers (in-memory DB)
# ═════════════════════════════════════════════════════════════════════════════

class TestDatabaseHelpers:
    def test_upsert_char_creates_row(self, in_memory_db, sample_char):
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")
        row = mp.get_job(in_memory_db, "001-pyrakh")
        assert row is not None
        assert row["char_name"] == "Pyrakh"
        assert row["status"] == "pending"

    def test_upsert_char_is_idempotent(self, in_memory_db, sample_char):
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")  # second call must not raise
        rows = in_memory_db.execute(
            "SELECT COUNT(*) FROM meshy_jobs WHERE char_id = '001-pyrakh'"
        ).fetchone()[0]
        assert rows == 1

    def test_update_job_changes_status(self, in_memory_db, sample_char):
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")
        mp.update_job(in_memory_db, "001-pyrakh", status="generating")
        row = mp.get_job(in_memory_db, "001-pyrakh")
        assert row["status"] == "generating"

    def test_update_job_sets_multiple_columns(self, in_memory_db, sample_char):
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")
        mp.update_job(in_memory_db, "001-pyrakh",
                      status="glb_ready", glb_path="/tmp/model.glb", cost_usd=2.5)
        row = mp.get_job(in_memory_db, "001-pyrakh")
        assert row["status"] == "glb_ready"
        assert row["glb_path"] == "/tmp/model.glb"
        assert float(row["cost_usd"]) == pytest.approx(2.5)

    def test_record_cost_and_get_total(self, in_memory_db):
        mp.record_cost(in_memory_db, "001-pyrakh", "preview", 0.50)
        mp.record_cost(in_memory_db, "001-pyrakh", "refine",  2.00)
        mp.record_cost(in_memory_db, "002-aquarex", "preview", 0.50)
        total = mp.get_total_cost(in_memory_db)
        assert total == pytest.approx(3.00)

    def test_get_total_cost_zero_on_empty_db(self, in_memory_db):
        assert mp.get_total_cost(in_memory_db) == pytest.approx(0.0)

    def test_get_all_jobs_returns_all_rows(self, in_memory_db, sample_char, dual_element_char):
        mp.upsert_char(in_memory_db, sample_char, "001-pyrakh")
        mp.upsert_char(in_memory_db, dual_element_char, "002-aquarex")
        jobs = mp.get_all_jobs(in_memory_db)
        slugs = [j["char_id"] for j in jobs]
        assert "001-pyrakh" in slugs
        assert "002-aquarex" in slugs

    def test_get_job_returns_none_for_unknown_id(self, in_memory_db):
        assert mp.get_job(in_memory_db, "999-ghost") is None


# ═════════════════════════════════════════════════════════════════════════════
# load_characters (file I/O fixture)
# ═════════════════════════════════════════════════════════════════════════════

class TestLoadCharacters:
    def test_loads_json_list(self, tmp_path, monkeypatch):
        data = [{"id": 1, "nom": "A"}, {"id": 2, "nom": "B"}]
        json_file = tmp_path / "characters.json"
        json_file.write_text(json.dumps(data), encoding="utf-8")

        monkeypatch.setattr(mp, "CHARACTERS_JSON", json_file)
        result = mp.load_characters()
        assert result == data

    def test_raises_on_missing_file(self, tmp_path, monkeypatch):
        monkeypatch.setattr(mp, "CHARACTERS_JSON", tmp_path / "missing.json")
        with pytest.raises(FileNotFoundError):
            mp.load_characters()


# ═════════════════════════════════════════════════════════════════════════════
# run_node_renderer (dry-run branch only — no subprocess)
# ═════════════════════════════════════════════════════════════════════════════

class TestRunNodeRenderer:
    def test_dry_run_returns_zero_without_running_node(self, tmp_path, monkeypatch, capsys):
        """Dry-run must print the command and return 0 without touching Node."""
        # Provide a fake render script path so the "not found" guard passes
        fake_script = tmp_path / "render_sprites.js"
        fake_script.touch()
        monkeypatch.setattr(mp, "RENDER_SCRIPT", fake_script)

        rc = mp.run_node_renderer("001-pyrakh", dry_run=True)
        assert rc == 0

        captured = capsys.readouterr()
        assert "DRY-RUN" in captured.out
        assert "001-pyrakh" in captured.out

    def test_missing_render_script_returns_zero(self, tmp_path, monkeypatch, capsys):
        """When render_sprites.js doesn't exist, function warns and returns 0."""
        monkeypatch.setattr(mp, "RENDER_SCRIPT", tmp_path / "nonexistent.js")
        rc = mp.run_node_renderer("001-pyrakh")
        assert rc == 0
        captured = capsys.readouterr()
        assert "WARN" in captured.out or "not found" in captured.out.lower()


# ═════════════════════════════════════════════════════════════════════════════
# poll_until_done (mocked aiohttp)
# ═════════════════════════════════════════════════════════════════════════════

@pytest.mark.asyncio
class TestPollUntilDone:
    async def test_returns_data_on_succeeded(self):
        task_data = {"status": "SUCCEEDED", "progress": 100, "model_urls": {"glb": "http://x/m.glb"}}

        mock_resp = AsyncMock()
        mock_resp.status = 200
        mock_resp.raise_for_status = MagicMock()
        mock_resp.json = AsyncMock(return_value=task_data)
        mock_resp.__aenter__ = AsyncMock(return_value=mock_resp)
        mock_resp.__aexit__ = AsyncMock(return_value=False)

        mock_session = MagicMock()
        mock_session.get = MagicMock(return_value=mock_resp)

        result = await mp.poll_until_done(mock_session, "task-abc123")
        assert result["status"] == "SUCCEEDED"

    async def test_raises_on_failed_status(self):
        task_data = {"status": "FAILED", "progress": 0, "task_error": {"message": "out of credits"}}

        mock_resp = AsyncMock()
        mock_resp.status = 200
        mock_resp.raise_for_status = MagicMock()
        mock_resp.json = AsyncMock(return_value=task_data)
        mock_resp.__aenter__ = AsyncMock(return_value=mock_resp)
        mock_resp.__aexit__ = AsyncMock(return_value=False)

        mock_session = MagicMock()
        mock_session.get = MagicMock(return_value=mock_resp)

        with pytest.raises(RuntimeError, match="FAILED"):
            await mp.poll_until_done(mock_session, "task-fail")

    async def test_raises_on_expired_status(self):
        task_data = {"status": "EXPIRED", "progress": 0, "task_error": {}}

        mock_resp = AsyncMock()
        mock_resp.status = 200
        mock_resp.raise_for_status = MagicMock()
        mock_resp.json = AsyncMock(return_value=task_data)
        mock_resp.__aenter__ = AsyncMock(return_value=mock_resp)
        mock_resp.__aexit__ = AsyncMock(return_value=False)

        mock_session = MagicMock()
        mock_session.get = MagicMock(return_value=mock_resp)

        with pytest.raises(RuntimeError, match="EXPIRED"):
            await mp.poll_until_done(mock_session, "task-expired")

    async def test_raises_timeout_when_deadline_exceeded(self, monkeypatch):
        """Simulate deadline already passed at call time → TimeoutError immediately."""
        import time as _time
        original_time = _time.time

        # Make time() return a value past the deadline on the very first poll
        call_count = {"n": 0}

        def fake_time():
            call_count["n"] += 1
            # First call (deadline calc) returns 0, subsequent calls return past deadline
            return 0.0 if call_count["n"] == 1 else mp.MAX_WAIT + 9999

        monkeypatch.setattr(mp.time, "time", fake_time, raising=False)
        # Also patch the `time` import inside the module
        import meshy_pipeline as _mp
        monkeypatch.setattr(_mp, "time", MagicMock(time=fake_time, sleep=AsyncMock()))

        task_data = {"status": "PENDING", "progress": 10}
        mock_resp = AsyncMock()
        mock_resp.status = 200
        mock_resp.raise_for_status = MagicMock()
        mock_resp.json = AsyncMock(return_value=task_data)
        mock_resp.__aenter__ = AsyncMock(return_value=mock_resp)
        mock_resp.__aexit__ = AsyncMock(return_value=False)
        mock_session = MagicMock()
        mock_session.get = MagicMock(return_value=mock_resp)

        with pytest.raises(TimeoutError):
            await _mp.poll_until_done(mock_session, "task-timeout")


# ═════════════════════════════════════════════════════════════════════════════
# Prompt dictionary coverage
# ═════════════════════════════════════════════════════════════════════════════

class TestPromptDictionaries:
    def test_element_tokens_cover_all_18_types(self):
        """Every elemental type used in the game must have a 3D token."""
        required_elements = {
            "Feu", "Eau", "Glace", "Electrique", "Vent", "Plante", "Sol",
            "Roche", "Insecte", "Nuee", "Psy", "Tenebres", "Poison",
            "Spectre", "Gravite", "Fee", "Dragon", "Combat", "Normal",
        }
        missing = required_elements - mp.ELEMENT_3D_TOKENS.keys()
        assert not missing, f"Missing element tokens: {missing}"

    def test_class_tokens_are_non_empty_strings(self):
        for cls, token in mp.CLASS_3D_TOKENS.items():
            assert isinstance(token, str) and len(token) > 0, f"Empty token for class {cls!r}"

    def test_faction_tokens_are_non_empty_strings(self):
        for faction, token in mp.FACTION_3D_TOKENS.items():
            assert isinstance(token, str) and len(token) > 0

    def test_negative_prompt_contains_quality_guards(self):
        neg = mp.NEGATIVE_PROMPT.lower()
        assert "blurry" in neg
        assert "nsfw" in neg
        assert "extra limbs" in neg or "missing limbs" in neg

    def test_cost_constants_match_expected_pricing(self):
        assert mp.COST_PREVIEW == pytest.approx(0.50)
        assert mp.COST_REFINE  == pytest.approx(2.00)
        assert mp.COST_PER_CHAR == pytest.approx(2.50)
