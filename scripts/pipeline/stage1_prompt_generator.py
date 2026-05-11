"""
STAGE 1 — PROMPT GENERATOR
============================
Builds Stability AI / Replicate generation prompts from characters.json data.

Usage:
    python stage1_prompt_generator.py --out prompts.json
    python stage1_prompt_generator.py --id 001-pyrakh --slot idle
"""

from __future__ import annotations
import argparse
import json
import hashlib
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Literal

# ---------------------------------------------------------------------------
# Paths (resolve relative to repo root)
# ---------------------------------------------------------------------------
REPO_ROOT = Path(__file__).resolve().parents[2]
CHARACTERS_JSON = REPO_ROOT / "public" / "characters" / "characters.json"
OUTPUT_DEFAULT  = REPO_ROOT / "scripts" / "pipeline" / "output" / "prompts.json"

# ---------------------------------------------------------------------------
# Slot types
# ---------------------------------------------------------------------------
AnimationSlot = Literal[
    "portrait", "idle", "run", "swim", "fly",
    "attack-01", "attack-02", "attack-03", "attack-04", "attack-05",
    "attack-06", "attack-07", "attack-08", "attack-09", "attack-10",
    "hurt", "die",
]

ALL_SLOTS: list[AnimationSlot] = [
    "portrait", "idle", "run", "swim", "fly",
    "attack-01", "attack-02", "attack-03", "attack-04", "attack-05",
    "attack-06", "attack-07", "attack-08", "attack-09", "attack-10",
    "hurt", "die",
]

# ---------------------------------------------------------------------------
# Element visual tokens
# Each entry: (palette description, atmospheric suffix, particle fx)
# ---------------------------------------------------------------------------
ELEMENT_TOKENS: dict[str, dict] = {
    "Feu": {
        "palette": "volcanic basalt skin with glowing orange lava veins, ember hair, fiery amber eyes",
        "atmosphere": "surrounded by rising heat shimmer and floating cinder sparks",
        "aura": "flame aura, fire particles",
        "bg_color": "deep crimson with orange glow",
    },
    "Eau": {
        "palette": "iridescent aquamarine skin, flowing translucent hair with water droplets, silver-blue eyes",
        "atmosphere": "surrounded by swirling water currents and floating droplets",
        "aura": "water veil aura, aquatic shimmer",
        "bg_color": "deep ocean teal",
    },
    "Glace": {
        "palette": "pale crystalline skin, frost-white hair, ice-blue eyes with shard-like pupils",
        "atmosphere": "surrounded by frozen mist and floating ice crystals",
        "aura": "frost aura, snowflake particles",
        "bg_color": "arctic blue-white",
    },
    "Electrique": {
        "palette": "pale silver-grey skin crackling with electric arcs, lightning-white hair, electric yellow eyes",
        "atmosphere": "surrounded by crackling electrical discharge and plasma sparks",
        "aura": "electric aura, lightning bolt particles",
        "bg_color": "storm grey with yellow electric highlights",
    },
    "Plante": {
        "palette": "pale green-ivory skin with leaf-vein patterns, bark-brown hair with embedded leaves, forest-green eyes",
        "atmosphere": "surrounded by floating seeds, pollen motes and curling vines",
        "aura": "nature aura, leaf particles",
        "bg_color": "deep emerald forest green",
    },
    "Sol": {
        "palette": "terracotta brown skin with stone-grey patches, earth-dark hair, amber-brown eyes",
        "atmosphere": "surrounded by floating soil particles and small stone shards",
        "aura": "earth aura, dust particles",
        "bg_color": "warm sienna brown",
    },
    "Roche": {
        "palette": "granite-grey skin with mineral flecks, stone-white hair, slate-grey eyes",
        "atmosphere": "surrounded by orbiting stone fragments and mineral dust",
        "aura": "stone aura, rock shard particles",
        "bg_color": "dark stone grey",
    },
    "Vent": {
        "palette": "translucent pale skin with barely visible wind currents beneath, cloud-white hair, sky-blue eyes",
        "atmosphere": "surrounded by visible air currents, feathers and carried leaves",
        "aura": "wind aura, air current streaks",
        "bg_color": "open sky cyan",
    },
    "Dragon": {
        "palette": "scaled dark skin with iridescent dragon-scale shimmer, crest-horns, draconic gold slit-pupil eyes",
        "atmosphere": "surrounded by ancient energy wisps and draconic flame breath trails",
        "aura": "draconic aura, ancient energy particles",
        "bg_color": "deep purple-gold",
    },
    "Nuee": {
        "palette": "mist-grey translucent skin, cloud-mass hair, storm-silver eyes",
        "atmosphere": "surrounded by roiling clouds and lightning micro-storms",
        "aura": "storm cloud aura, lightning particles",
        "bg_color": "stormy grey-purple",
    },
    "Psy": {
        "palette": "pale lavender-white skin with glowing mind-crystal implants, silver-purple hair, luminous violet eyes",
        "atmosphere": "surrounded by floating geometric thought-shards and psionic energy rings",
        "aura": "psionic aura, mind-crystal particles",
        "bg_color": "deep indigo",
    },
    "Ténèbres": {
        "palette": "dark grey-blue skin absorbing ambient light, void-black hair, reflective mirror-like eyes",
        "atmosphere": "surrounded by swirling shadow tendrils and darkness that devours light",
        "aura": "shadow aura, void particle absorption",
        "bg_color": "near-black with purple edge glow",
    },
    "Fée": {
        "palette": "porcelain-fair skin with iridescent shimmer, gossamer hair that shifts color, prismatic eyes",
        "atmosphere": "surrounded by enchanted sparkles, magical runes and floating flower petals",
        "aura": "fairy aura, prismatic sparkle particles",
        "bg_color": "soft pink-gold gradient",
    },
    "Poison": {
        "palette": "sickly pale-green skin with toxic purple veins visible, dull yellow eyes with slit pupils",
        "atmosphere": "surrounded by toxic miasma wisps and corrosive drip particles",
        "aura": "toxic aura, poison droplet particles",
        "bg_color": "murky toxic green",
    },
    "Spectre": {
        "palette": "translucent ghost-grey skin, ethereal flowing form partially phased, pale white unseeing eyes",
        "atmosphere": "surrounded by spectral echoes, soul mist and eerie afterimage trails",
        "aura": "spectral aura, ectoplasm particle streams",
        "bg_color": "cold blue-grey desaturated",
    },
    "Gravité": {
        "palette": "dark metallic skin with gravitational lensing distortions at edges, void-dark hair, silver gravity-lens eyes",
        "atmosphere": "surrounded by distorted space, floating debris in trapped orbits",
        "aura": "gravity aura, orbital debris particles",
        "bg_color": "deep space black with lens-flare accents",
    },
    "Combat": {
        "palette": "battle-scarred tan skin, short practical hair, intense iron-grey eyes burning with martial focus",
        "atmosphere": "surrounded by fighting spirit energy, chi aura and impact force lines",
        "aura": "martial chi aura, force impact particles",
        "bg_color": "burnt orange-gold",
    },
    "Normal": {
        "palette": "varied human-range skin tone, practical appearance without elemental transformation, clear sharp eyes",
        "atmosphere": "surrounded by subtle energy equilibrium, soft adaptability shimmer",
        "aura": "balanced aura, neutral white light particles",
        "bg_color": "warm neutral beige",
    },
}

# ---------------------------------------------------------------------------
# Species visual tokens
# ---------------------------------------------------------------------------
ESPECE_TOKENS: dict[str, str] = {
    "Pyriens":       "stocky powerful build, volcanic skin markings, forge-worker physique",
    "Néréides":      "fluid graceful build, iridescent scale-hints on skin, maritime elegance",
    "Aérides":       "lean agile build, feather-light bone structure, wind-rider posture",
    "Chthoniens":    "dense compact build, mineral skin texture, subterranean endurance physique",
    "Umbriens":      "medium wiry build, shadow-adapted features, nocturnal agility",
    "Sylvans":       "tall willowy build, bark-tinged skin, organic flowing movements",
    "Givrins":       "tall regal build, pale frost-kissed features, deliberate measured posture",
    "Hommes-Liens":  "diverse adaptable human build, no fixed species markers",
    "Fées":          "small delicate build, impossibly graceful, ethereal proportions",
}

# ---------------------------------------------------------------------------
# Classe visual tokens
# ---------------------------------------------------------------------------
CLASSE_TOKENS: dict[str, str] = {
    "Enchanteur-Soutien":  "supportive magical stance, open palms radiating healing energy, protective posture",
    "Enchanteur-Capteur":  "controlling magical stance, outstretched hands weaving binding energy, predatory posture",
    "Juggernaut":          "massive armored build, immovable stance, heavy weapon at rest",
    "Plongeur":            "coiled strike-ready stance, dual weapons drawn, mobile aggressive posture",
    "Mage-Burst":          "burst-cast stance, one hand drawn back charged with destructive energy",
    "Battlemage":          "hybrid stance, weapon in one hand and spell in the other, close-combat ready",
    "Artillerie":          "ranged artillery stance, large weapon aimed, patient sniper posture",
    "Tireur":              "ranged combat stance, bow or firearm raised, precise marksman posture",
    "Assassin":            "crouched infiltration stance, blades concealed, shadow-hugging posture",
    "Escrimeur":           "duelist stance, single elegant weapon raised, defensive composure",
    "Vanguard":            "front-line charge stance, shield forward, vanguard offensive posture",
    "Gardien":             "defensive wall stance, shield raised, immovable guardian posture",
    "Spécialiste":         "unique utility stance, specialized equipment ready, unconventional posture",
}

# ---------------------------------------------------------------------------
# Faction visual tokens (for portrait / lore-weight)
# ---------------------------------------------------------------------------
FACTION_TOKENS: dict[str, str] = {
    "Empire":        "imperial regalia accents, controlled composed expression, authority in bearing",
    "Convergence":   "sacrifice-cult iconography hints, zealous expression, doctrinal severity",
    "Dissidentes":   "weathered fugitive look, hidden weapon or sigil, fierce determined expression",
    "Indépendant":   "no faction colors, self-determined bearing, watchful neutral expression",
}

# ---------------------------------------------------------------------------
# Slot-specific prompt suffixes
# ---------------------------------------------------------------------------
SLOT_ACTION_TOKENS: dict[str, str] = {
    "portrait":    "bust portrait, facing slightly left, neutral heroic expression, dramatic lighting",
    "idle":        "standing idle pose, weight shifted slightly, relaxed readiness, full body",
    "run":         "mid-run pose, one foot off ground, forward lean, dynamic motion blur, full body",
    "swim":        "underwater swimming pose, horizontal body, arms extended, flowing movement",
    "fly":         "airborne pose, hovering or gliding, full body, wind effect on clothing",
    "attack-01":   "combat attack pose frame 1: wind-up preparation, weapon or spell drawn back",
    "attack-02":   "combat attack pose frame 2: beginning of strike motion, energy charging",
    "attack-03":   "combat attack pose frame 3: mid-strike, peak effort expression",
    "attack-04":   "combat attack pose frame 4: strike contact moment, impact energy burst",
    "attack-05":   "combat attack pose frame 5: follow-through, energy release explosion",
    "attack-06":   "combat attack pose frame 6: secondary attack initiation, chain motion",
    "attack-07":   "combat attack pose frame 7: secondary strike peak",
    "attack-08":   "combat attack pose frame 8: powerful finishing blow wind-up",
    "attack-09":   "combat attack pose frame 9: ultimate strike impact moment",
    "attack-10":   "combat attack pose frame 10: final follow-through, victory posture",
    "hurt":        "recoiling from damage, pained expression, backward stagger, defensive shield",
    "die":         "collapse pose, final moment, energy dissipating, falling to knees",
}

# ---------------------------------------------------------------------------
# Negative prompt — universal
# ---------------------------------------------------------------------------
NEGATIVE_PROMPT_UNIVERSAL = (
    "blurry, low quality, out of focus, watermark, signature, text, "
    "extra limbs, extra fingers, malformed hands, deformed anatomy, "
    "bad proportions, mutation, ugly face, multiple faces, duplicate, "
    "western cartoon style, anime flat style, chibi, super deformed, "
    "3D render artifact, JPEG compression artifact, moiré, chromatic aberration, "
    "background clutter, multiple characters in single frame"
)

# Slot-specific negative additions
SLOT_NEGATIVE_ADDITIONS: dict[str, str] = {
    "portrait":  "full body shot, action pose, weapon drawn",
    "idle":      "extreme action, dramatic effect",
    "swim":      "fire effects, on ground",
    "fly":       "swimming, on ground",
    "hurt":      "smiling, casual pose",
    "die":       "standing upright, combat ready",
}

# ---------------------------------------------------------------------------
# Seed management
# ---------------------------------------------------------------------------

def stable_seed(character_id: int, slot: str) -> int:
    """
    Deterministic per-character per-slot seed.
    Same character always gets the same base appearance seed (from id alone),
    slots get offsets so poses vary but the face/palette stays coherent when
    using img2img or ControlNet workflows.
    """
    base = int(hashlib.sha256(f"char_{character_id:04d}".encode()).hexdigest(), 16) % (2**32)
    slot_offset = ALL_SLOTS.index(slot) * 7919  # prime multiplier per slot
    return (base + slot_offset) % (2**32)


# ---------------------------------------------------------------------------
# Prompt builder
# ---------------------------------------------------------------------------

@dataclass
class PromptRecord:
    character_id: int
    character_slug: str          # e.g. "001-pyrakh"
    nom: str
    slot: AnimationSlot
    positive: str
    negative: str
    seed: int
    output_path: str             # relative to repo root public/
    width: int
    height: int


def build_slot_dimensions(slot: str) -> tuple[int, int]:
    """Return (width, height) in pixels for each slot type."""
    if slot == "portrait":
        return 512, 512
    if slot in ("idle", "run", "hurt", "die"):
        return 512, 768
    if slot == "swim":
        return 768, 512   # landscape for horizontal pose
    if slot == "fly":
        return 512, 768
    if slot.startswith("attack"):
        return 512, 768
    return 512, 768


def build_prompt(char: dict, slot: AnimationSlot) -> PromptRecord:
    element   = char.get("element", "Normal")
    element2  = char.get("element2")           # optional dual element
    espece    = char.get("espece", "Hommes-Liens")
    classe    = char.get("classe", "Spécialiste")
    faction   = char.get("faction", "Indépendant")
    nom       = char.get("nom", "Unknown")
    desc_phys = char.get("description_physique", "").strip()

    # --- Element visual block ---
    el_tok = ELEMENT_TOKENS.get(element, ELEMENT_TOKENS["Normal"])
    el2_tok = None
    if element2 and element2 in ELEMENT_TOKENS:
        el2_tok = ELEMENT_TOKENS[element2]

    # --- Species, class, faction ---
    esp_tok     = ESPECE_TOKENS.get(espece, "")
    classe_tok  = CLASSE_TOKENS.get(classe, "")
    faction_tok = FACTION_TOKENS.get(faction, "")

    # --- Slot action ---
    action_tok = SLOT_ACTION_TOKENS.get(slot, "")

    # --- Truncate description_physique to most visual 200 chars ---
    phys_summary = desc_phys[:200].strip()
    if len(desc_phys) > 200:
        # cut at last space to avoid mid-word
        phys_summary = phys_summary.rsplit(" ", 1)[0]

    # --- Dual-element blend ---
    element_block = el_tok["palette"]
    atmosphere    = el_tok["atmosphere"]
    aura          = el_tok["aura"]
    bg_color      = el_tok["bg_color"]
    if el2_tok:
        element_block = (
            f"{el_tok['palette']}, "
            f"with secondary {el2_tok['palette'].split(',')[0]} traces"
        )
        atmosphere = f"{el_tok['atmosphere']}, with hints of {el2_tok['atmosphere'].split(' ')[2]} energy"

    # --- Style anchor ---
    style_anchor = (
        "isometric tactical game character, 2D sprite art style, "
        "painterly illustration, dynamic fantasy art, "
        "clear silhouette readable at small size, "
        "isolated character on plain background, transparent-ready"
    )

    # --- Assemble positive prompt ---
    positive_parts = [
        style_anchor,
        action_tok,
        nom,
        phys_summary,
        element_block,
        atmosphere,
        aura,
        esp_tok,
        classe_tok,
        faction_tok,
        f"background: {bg_color} gradient",
        "masterpiece, best quality, highly detailed",
    ]
    positive = ", ".join(p for p in positive_parts if p)

    # --- Assemble negative prompt ---
    slot_neg_extra = SLOT_NEGATIVE_ADDITIONS.get(slot, "")
    negative_parts = [NEGATIVE_PROMPT_UNIVERSAL]
    if slot_neg_extra:
        negative_parts.append(slot_neg_extra)
    negative = ", ".join(negative_parts)

    # --- Seed ---
    seed = stable_seed(char["id"], slot)

    # --- Output path ---
    # e.g. characters/001-pyrakh/idle.png
    slug = char.get("folder", f"feu/{char['id']:03d}-{nom.lower().replace(' ', '-')}").split("/")[-1]
    if slot.startswith("attack"):
        filename = f"{slot}.png"
    else:
        filename = f"{slot}.png"
    output_path = f"characters/{slug}/{filename}"

    width, height = build_slot_dimensions(slot)

    return PromptRecord(
        character_id=char["id"],
        character_slug=slug,
        nom=nom,
        slot=slot,
        positive=positive,
        negative=negative,
        seed=seed,
        output_path=output_path,
        width=width,
        height=height,
    )


# ---------------------------------------------------------------------------
# Main — generate all prompts
# ---------------------------------------------------------------------------

def generate_all_prompts(
    characters_json_path: Path = CHARACTERS_JSON,
    filter_id_slug: str | None = None,
    filter_slot: str | None = None,
) -> list[dict]:
    with open(characters_json_path, encoding="utf-8") as f:
        characters = json.load(f)

    records = []
    for char in characters:
        slug = char.get("folder", "").split("/")[-1] or f"{char['id']:03d}"

        if filter_id_slug and filter_id_slug not in slug:
            continue

        slots_to_generate = ALL_SLOTS if not filter_slot else [filter_slot]

        for slot in slots_to_generate:
            rec = build_prompt(char, slot)
            records.append(asdict(rec))

    return records


def main():
    parser = argparse.ArgumentParser(description="Generate image prompts for all characters")
    parser.add_argument("--out", type=Path, default=OUTPUT_DEFAULT,
                        help="Output JSON file path")
    parser.add_argument("--id", type=str, default=None,
                        help="Filter by character slug (e.g. 001-pyrakh)")
    parser.add_argument("--slot", type=str, default=None,
                        help="Filter by animation slot (e.g. idle)")
    parser.add_argument("--characters-json", type=Path, default=CHARACTERS_JSON)
    args = parser.parse_args()

    args.out.parent.mkdir(parents=True, exist_ok=True)

    records = generate_all_prompts(
        characters_json_path=args.characters_json,
        filter_id_slug=args.id,
        filter_slot=args.slot,
    )

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

    print(f"[Stage 1] Generated {len(records)} prompt records -> {args.out}")

    # Preview first record
    if records:
        r = records[0]
        print(f"\n--- Sample record [{r['character_slug']} / {r['slot']}] ---")
        print(f"POSITIVE: {r['positive'][:200]}...")
        print(f"NEGATIVE: {r['negative'][:120]}...")
        print(f"SEED:     {r['seed']}")
        print(f"OUTPUT:   {r['output_path']}")
        print(f"SIZE:     {r['width']}x{r['height']}")


if __name__ == "__main__":
    main()
