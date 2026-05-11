"""
Génère LORE.md depuis tous les fichiers src/data/characters/**/index.ts
Usage : python scripts/generate-lore.py
"""
import os
import re

BASE = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main/src/data/characters"
OUT  = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main/LORE.md"

# Ordre d'affichage des éléments (groupés par région/espèce)
ELEMENT_ORDER = [
    "feu", "dragon",          # Pyriens · Varkhôl
    "eau", "gravite",         # Néréides · Thalassyr
    "glace", "fee", "spectre",# Givrins · Crysalme
    "electrique", "vent",     # Aérides · Asterciel
    "plante", "poison",       # Sylvans · Sylvera
    "sol", "insecte",         # Chthoniens · Ormn-Dur
    "tenebres",               # Umbriens · Noctéa
    "psy",                    # Fées · Citadelle / Néréides
    "combat", "normal",       # Hommes-Liens · Isthme
    "roche",                  # Pyriens montagnards
    "cross",                  # Divers
]

REGION_LABELS = {
    "feu":        "Pyriens · Varkhôl",
    "dragon":     "Pyriens · Varkhôl",
    "eau":        "Néréides · Thalassyr",
    "gravite":    "Néréides · Thalassyr",
    "glace":      "Givrins · Crysalme",
    "fee":        "Givrins · Crysalme",
    "spectre":    "Givrins · Crysalme",
    "electrique": "Aérides · Asterciel",
    "vent":       "Aérides · Asterciel",
    "plante":     "Sylvans · Sylvera",
    "poison":     "Sylvans · Sylvera / Umbriens · Noctéa",
    "sol":        "Chthoniens · Ormn-Dur",
    "insecte":    "Chthoniens · Ormn-Dur",
    "tenebres":   "Umbriens · Noctéa",
    "psy":        "Fées · Citadelle / Néréides · Thalassyr",
    "combat":     "Hommes-Liens · Isthme",
    "normal":     "Hommes-Liens · Isthme",
    "roche":      "Pyriens montagnards · Varkhôl",
    "cross":      "Multi-régions",
}

FACTION_EMOJI = {
    "Empire":      "⚔️",
    "Convergence": "🛡️",
    "Dissidentes": "🔥",
    "Independant": "🌀",
    "Indépendant": "🌀",
}

def extract_field(content, field):
    """Extrait un champ string simple ou template literal."""
    # Template literal: field: `...`
    m = re.search(rf"{re.escape(field)}:\s*`([\s\S]*?)`", content)
    if m:
        return m.group(1).strip()
    # Single-quoted string
    m = re.search(rf"{re.escape(field)}:\s*'([^']*)'", content)
    if m:
        return m.group(1).strip()
    # Double-quoted string
    m = re.search(rf'{re.escape(field)}:\s*"([^"]*)"', content)
    if m:
        return m.group(1).strip()
    return None

def extract_number(content, field):
    m = re.search(rf"{re.escape(field)}:\s*(\d+)", content)
    return int(m.group(1)) if m else 0

def read_character(path):
    with open(path, encoding='utf-8') as f:
        content = f.read()

    char = {
        "id":      extract_number(content, "id"),
        "nom":     extract_field(content, "nom") or "?",
        "element": extract_field(content, "element") or "?",
        "classe":  extract_field(content, "classe") or "?",
        "espece":  extract_field(content, "espece") or "?",
        "region":  extract_field(content, "region") or "?",
        "faction": extract_field(content, "faction") or "?",
    }

    # Support ancien et nouveau format
    char["physique"]  = (extract_field(content, "physique")
                         or extract_field(content, "description_physique") or "")
    char["perso"]     = (extract_field(content, "personnalite")
                         or extract_field(content, "description_personnalite") or "")
    char["lore"]      = (extract_field(content, "lore")
                         or extract_field(content, "position_lore") or "")
    char["combat"]    = (extract_field(content, "combat")
                         or extract_field(content, "style_combat") or "")

    return char

def collect_all():
    data = {}  # element -> list of chars
    for element in os.listdir(BASE):
        elem_path = os.path.join(BASE, element)
        if not os.path.isdir(elem_path) or element == "__pycache__":
            continue
        chars = []
        for folder in os.listdir(elem_path):
            idx = os.path.join(elem_path, folder, "index.ts")
            if os.path.isfile(idx):
                try:
                    chars.append(read_character(idx))
                except Exception as e:
                    print(f"WARN {idx}: {e}")
        chars.sort(key=lambda c: c["id"])
        data[element.lower()] = chars
    return data

def build_lore(data):
    lines = []
    lines.append("# LORE — Univers Élémentaire Tactique")
    lines.append(f"> Généré automatiquement depuis `src/data/characters/` · {len(sum(data.values(), []))} personnages")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## Table des matières")

    # Grouper par région pour la TOC
    seen_regions = {}
    ordered = [e for e in ELEMENT_ORDER if e in data] + [e for e in data if e not in ELEMENT_ORDER]
    for elem in ordered:
        region = REGION_LABELS.get(elem, elem)
        if region not in seen_regions:
            seen_regions[region] = []
            lines.append(f"- **{region}**")
        seen_regions[region].append(elem)
        elem_label = elem.capitalize()
        lines.append(f"  - [{elem_label}](#{elem})")

    lines.append("")
    lines.append("---")

    # Contenu
    last_region = None
    for elem in ordered:
        if elem not in data:
            continue
        chars = data[elem]
        if not chars:
            continue

        region = REGION_LABELS.get(elem, elem)
        if region != last_region:
            lines.append("")
            lines.append(f"## {region}")
            last_region = region

        lines.append("")
        lines.append(f"### {elem.capitalize()} <a id='{elem}'></a>")
        lines.append("")

        for c in chars:
            faction_icon = FACTION_EMOJI.get(c["faction"], "·")
            lines.append(f"#### {c['nom']} — {c['classe']} {faction_icon} {c['faction']}")
            lines.append(f"*{c['espece']} · {c['region']} · ID {c['id']}*")
            lines.append("")

            if c["physique"]:
                lines.append(f"**Apparence** — {c['physique']}")
                lines.append("")
            if c["perso"]:
                lines.append(f"**Personnalité** — {c['perso']}")
                lines.append("")
            if c["lore"]:
                lines.append(f"**Lore** — {c['lore']}")
                lines.append("")
            if c["combat"]:
                lines.append(f"**Combat** — {c['combat']}")
                lines.append("")

            lines.append("---")

    return "\n".join(lines)

if __name__ == "__main__":
    print("Collecte des personnages...")
    data = collect_all()
    total = sum(len(v) for v in data.values())
    print(f"  {total} personnages trouvés dans {len(data)} éléments")

    print("Génération du LORE.md...")
    content = build_lore(data)
    with open(OUT, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  OK: {OUT}")
    print(f"  Taille: {len(content):,} caractères")
