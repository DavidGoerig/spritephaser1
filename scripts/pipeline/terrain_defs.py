"""
terrain_defs.py — Definitions of all terrain tiles and props to generate via Meshy AI.

TILES: isometric cube blocks, rendered as 256×64 horizontal spritesheet
       (4 frames × 64×64, each a 90° Y-rotation = N/E/S/W views).
       Loaded by the game as a spritesheet — applyDirectionFrame() picks the frame.

PROPS: objects placed on top of tiles or spawned by spells.
       Rendered as 64×128 images × 4 isometric camera angles.
"""

NEGATIVE_PROMPT = (
    "blurry, text, watermark, extra limbs, floating parts, disconnected geometry, "
    "NSFW, background, floor plane outside of the block itself, transparent base"
)

# ── Terrain tiles ─────────────────────────────────────────────────────────────

TILE_BASE = (
    "isometric game tile block, exactly 1×1 cube proportions, "
    "centered on origin, solid base, game-ready low-poly 3D asset, "
    "PBR textures, isometric strategy game art style"
)

TILES: dict[str, dict] = {

    # ── Neutral / construction ────────────────────────────────────────────────
    "neutral-stone": {
        "slug": "neutral-stone",
        "label": "Pierre lisse",
        "prompt": f"{TILE_BASE}, smooth grey stone brick top face, flat polished stone sides, clean masonry",
        "symmetric": True,   # looks same from all 4 sides → 1 render
    },
    "neutral-grass": {
        "slug": "neutral-grass",
        "label": "Herbe",
        "prompt": f"{TILE_BASE}, lush green grass on top face, dark earthy soil sides, small wildflowers",
        "symmetric": True,
    },
    "neutral-wood": {
        "slug": "neutral-wood",
        "label": "Planches de bois",
        "prompt": f"{TILE_BASE}, oak wood plank top face with visible grain, rough-cut timber sides",
        "symmetric": False,  # plank grain direction matters
    },
    "neutral-sand": {
        "slug": "neutral-sand",
        "label": "Sable",
        "prompt": f"{TILE_BASE}, warm desert sand top face with subtle ripple texture, sandy stone sides",
        "symmetric": True,
    },
    "neutral-snow": {
        "slug": "neutral-snow",
        "label": "Neige",
        "prompt": f"{TILE_BASE}, thick snow cover on top face, icy pale blue sides with frost cracks",
        "symmetric": True,
    },
    "neutral-obsidian": {
        "slug": "neutral-obsidian",
        "label": "Obsidienne",
        "prompt": f"{TILE_BASE}, polished obsidian top face, deep black glossy glass-like stone sides",
        "symmetric": True,
    },
    "neutral-marble": {
        "slug": "neutral-marble",
        "label": "Marbre",
        "prompt": f"{TILE_BASE}, white and grey veined marble top, polished marble sides with gold veins",
        "symmetric": True,
    },

    # ── Elemental ─────────────────────────────────────────────────────────────
    "feu-lava": {
        "slug": "feu-lava",
        "label": "Lave",
        "element": "Feu",
        "prompt": f"{TILE_BASE}, bubbling lava surface top with orange glow, dark obsidian sides with glowing magma cracks, fire element",
        "symmetric": True,
    },
    "eau-water": {
        "slug": "eau-water",
        "label": "Eau",
        "element": "Eau",
        "prompt": f"{TILE_BASE}, calm water surface top with subtle ripples, dark wet stone sides with moss, water element",
        "symmetric": True,
    },
    "glace-ice": {
        "slug": "glace-ice",
        "label": "Glace",
        "element": "Glace",
        "prompt": f"{TILE_BASE}, smooth crystal-clear ice top face with snowflake patterns, translucent icy blue sides, ice element",
        "symmetric": True,
    },
    "electrique-tech": {
        "slug": "electrique-tech",
        "label": "Électrique",
        "element": "Electrique",
        "prompt": f"{TILE_BASE}, electric energy panel top with crackling arcs, metal sides with tesla coil lines and yellow glow, electric element",
        "symmetric": True,
    },
    "plante-moss": {
        "slug": "plante-moss",
        "label": "Végétation",
        "element": "Plante",
        "prompt": f"{TILE_BASE}, dense moss and small leaves on top, earthy bark-textured sides with small roots, nature element",
        "symmetric": True,
    },
    "sol-dirt": {
        "slug": "sol-dirt",
        "label": "Terre",
        "element": "Sol",
        "prompt": f"{TILE_BASE}, packed earth top with pebbles and cracks, clay-brown soil sides, earth element",
        "symmetric": True,
    },
    "roche-granite": {
        "slug": "roche-granite",
        "label": "Roche",
        "element": "Roche",
        "prompt": f"{TILE_BASE}, rough granite boulder top, jagged dark grey stone sides with mineral crystals, rock element",
        "symmetric": True,
    },
    "vent-cloud": {
        "slug": "vent-cloud",
        "label": "Nuage",
        "element": "Vent",
        "prompt": f"{TILE_BASE}, wispy white cloud surface top, translucent pale sides with swirling air currents, wind element",
        "symmetric": True,
    },
    "psy-crystal": {
        "slug": "psy-crystal",
        "label": "Cristal Psy",
        "element": "Psy",
        "prompt": f"{TILE_BASE}, pulsing purple psychic crystal top with glowing veins, deep violet sides with geometric thought-shards, psy element",
        "symmetric": True,
    },
    "tenebres-void": {
        "slug": "tenebres-void",
        "label": "Ténèbres",
        "element": "Ténèbres",
        "prompt": f"{TILE_BASE}, dark void surface top with swirling shadow wisps, pitch black sides with purple tear cracks, darkness element",
        "symmetric": True,
    },
    "fee-light": {
        "slug": "fee-light",
        "label": "Lumière Fée",
        "element": "Fée",
        "prompt": f"{TILE_BASE}, shimmering fairy-light top face with pink sparkles and small flowers, soft glowing sides, fairy element",
        "symmetric": True,
    },
    "poison-toxic": {
        "slug": "poison-toxic",
        "label": "Toxique",
        "element": "Poison",
        "prompt": f"{TILE_BASE}, toxic acid-green ooze surface top, corroded dark sides with dripping poison veins, poison element",
        "symmetric": True,
    },
    "dragon-scales": {
        "slug": "dragon-scales",
        "label": "Écailles Dragon",
        "element": "Dragon",
        "prompt": f"{TILE_BASE}, iridescent dragon scale pattern top, dark ancient stone sides with draconic rune carvings, dragon element",
        "symmetric": True,
    },
    "combat-arena": {
        "slug": "combat-arena",
        "label": "Arène",
        "element": "Combat",
        "prompt": f"{TILE_BASE}, worn battle-scarred stone top with blood-red runes, rough combat stone sides with sword scratches, combat element",
        "symmetric": False,
    },
    "spectre-ghost": {
        "slug": "spectre-ghost",
        "label": "Spectre",
        "element": "Spectre",
        "prompt": f"{TILE_BASE}, ghostly translucent surface top with ectoplasm wisps, semi-transparent glowing sides, spirit element",
        "symmetric": True,
    },
    "gravite-astral": {
        "slug": "gravite-astral",
        "label": "Gravité",
        "element": "Gravité",
        "prompt": f"{TILE_BASE}, warped space-distorted surface top, sides with floating stone fragments and gravitational lens effect, gravity element",
        "symmetric": True,
    },
    "insecte-chitin": {
        "slug": "insecte-chitin",
        "label": "Chitine",
        "element": "Insecte",
        "prompt": f"{TILE_BASE}, organic insect chitin carapace top with hexagonal cells, dark exoskeleton sides with compound-eye patterns, insect element",
        "symmetric": True,
    },
    "spectre-magma": {
        "slug": "neutral-magma",
        "label": "Magma",
        "prompt": f"{TILE_BASE}, superheated magma surface top with white-hot center, dark volcanic rock sides cracking with orange glow",
        "symmetric": True,
    },
    "vapeur-steam": {
        "slug": "neutral-vapeur",
        "label": "Vapeur",
        "prompt": f"{TILE_BASE}, steaming water surface top with white steam wisps, wet dark stone sides, steam element",
        "symmetric": True,
    },
}

# ── Props ─────────────────────────────────────────────────────────────────────

PROP_BASE = (
    "isometric game prop, small 3D asset, centered on origin, "
    "game-ready low-poly, PBR textures, solid base, no background, "
    "isometric strategy RPG art style"
)

PROPS: dict[str, dict] = {

    # ── Walls / barriers ──────────────────────────────────────────────────────
    "wall-stone": {
        "slug": "wall-stone",
        "label": "Mur de Pierre",
        "type": "wall",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, short stone wall segment 1.5 units tall, hewn grey stone blocks, medieval dungeon wall",
    },
    "wall-ice": {
        "slug": "wall-ice",
        "label": "Mur de Glace",
        "type": "wall",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, solid ice wall segment 1.5 units tall, crystal clear blue ice, frozen cracks, Glace element",
    },
    "wall-fire": {
        "slug": "wall-fire",
        "label": "Mur de Feu",
        "type": "wall",
        "rotations": 2,
        "prompt": f"{PROP_BASE}, magical fire wall barrier 1.5 units tall, solid wall of roaring flames, Feu element",
    },
    "barrier-energy": {
        "slug": "barrier-energy",
        "label": "Barrière d'Énergie",
        "type": "barrier",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, hexagonal energy dome shield 1 unit tall, glowing blue-white magical forcefield, Fée element",
    },
    "barrier-void": {
        "slug": "barrier-void",
        "label": "Barrière de Ténèbres",
        "type": "barrier",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, dark void wall barrier 1.5 units tall, solid shadow with purple tear cracks, Ténèbres element",
    },
    "wall-vine": {
        "slug": "wall-vine",
        "label": "Mur de Lianes",
        "type": "wall",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, thick vine and thorn wall segment 1.5 units tall, dense entangled vegetation, Plante element",
    },
    "barrier-rune": {
        "slug": "barrier-rune",
        "label": "Bouclier Runique",
        "type": "barrier",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, circular rune shield platform 0.4 units tall, glowing blue protective circle with ancient runes",
    },
    "wall-obsidian": {
        "slug": "wall-obsidian",
        "label": "Mur d'Obsidienne",
        "type": "wall",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, sharp obsidian spike wall 1.8 units tall, black volcanic glass spikes, Dragon element",
    },

    # ── Invocations ───────────────────────────────────────────────────────────
    "invoc-fire-sprite": {
        "slug": "invoc-fire-sprite",
        "label": "Lutin de Feu",
        "type": "invocation",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, small fire sprite creature 0.7 units tall, tiny flame body with eyes, fire elemental summon, Feu element",
    },
    "invoc-water-spirit": {
        "slug": "invoc-water-spirit",
        "label": "Esprit d'Eau",
        "type": "invocation",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, water spirit orb 0.6 units tall, translucent liquid sphere with watery tendrils, Eau element",
    },
    "invoc-vine-golem": {
        "slug": "invoc-vine-golem",
        "label": "Golem de Lianes",
        "type": "invocation",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, small vine and root golem 0.8 units tall, chunky plant creature, Plante element",
    },
    "invoc-stone-golem": {
        "slug": "invoc-stone-golem",
        "label": "Golem de Pierre",
        "type": "invocation",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, tiny stone golem 0.9 units tall, chunky rock body with glowing crystal eyes, Roche element",
    },
    "invoc-shadow": {
        "slug": "invoc-shadow",
        "label": "Ombre Invoquée",
        "type": "invocation",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, shadow phantom 0.8 units tall, dark silhouette with purple void eyes, Ténèbres element",
    },
    "invoc-ice-shard": {
        "slug": "invoc-ice-shard",
        "label": "Éclat de Glace",
        "type": "invocation",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, sharp ice shard pillar 1 unit tall, crystal clear spike formation rising from ground, Glace element",
    },
    "invoc-lightning-rod": {
        "slug": "invoc-lightning-rod",
        "label": "Conducteur d'Éclair",
        "type": "invocation",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, lightning rod totem 1 unit tall, metal spike with crackling electric arcs, Electrique element",
    },
    "invoc-poison-pool": {
        "slug": "invoc-poison-pool",
        "label": "Flaque Toxique",
        "type": "invocation",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, toxic poison puddle 0.1 units tall flat disc, bubbling acid-green ooze on ground, Poison element",
    },
    "invoc-fairy-ring": {
        "slug": "invoc-fairy-ring",
        "label": "Cercle Fée",
        "type": "invocation",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, fairy circle ring 0.1 units tall flat, glowing mushrooms in circle with sparkles, Fée element",
    },
    "invoc-psy-pillar": {
        "slug": "invoc-psy-pillar",
        "label": "Pilier Psy",
        "type": "invocation",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, psychic crystal pillar 1 unit tall, floating psy gem on magical pedestal, Psy element",
    },

    # ── Traps ─────────────────────────────────────────────────────────────────
    "trap-spikes": {
        "slug": "trap-spikes",
        "label": "Piège à Piques",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, spike trap flat on ground, iron spikes emerging from stone plate, mechanical trap",
    },
    "trap-fire-geyser": {
        "slug": "trap-fire-geyser",
        "label": "Geyser de Feu",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, fire geyser trap 0.3 units tall, steam vent hole with flame burst, Feu element trap",
    },
    "trap-web": {
        "slug": "trap-web",
        "label": "Piège Toile",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, sticky web trap flat, circular spider web on ground with small spiders, Insecte element trap",
    },
    "trap-rune": {
        "slug": "trap-rune",
        "label": "Rune Piège",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, glowing runic trap circle on ground, magical sigil ready to trigger, Psy element trap",
    },
    "trap-void": {
        "slug": "trap-void",
        "label": "Puits de Ténèbres",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, dark void pit trap, swirling darkness hole in ground, Ténèbres element trap",
    },
    "trap-electric": {
        "slug": "trap-electric",
        "label": "Mine Électrique",
        "type": "trap",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, electric mine on ground, small metal sphere with lightning coil, Electrique element trap",
    },

    # ── Usable objects ────────────────────────────────────────────────────────
    "obj-chest": {
        "slug": "obj-chest",
        "label": "Coffre",
        "type": "object",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, treasure chest 0.5 units tall, wooden iron-banded chest, medieval fantasy game prop",
    },
    "obj-crystal-health": {
        "slug": "obj-crystal-health",
        "label": "Cristal de Vie",
        "type": "object",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, health crystal 0.5 units tall, glowing green gem on small pedestal, healing item game prop",
    },
    "obj-crystal-mana": {
        "slug": "obj-crystal-mana",
        "label": "Cristal de Mana",
        "type": "object",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, mana crystal 0.5 units tall, glowing blue sapphire gem on small pedestal, mana item game prop",
    },
    "obj-portal": {
        "slug": "obj-portal",
        "label": "Portail",
        "type": "object",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, magic portal ring 1 unit tall, swirling purple void in stone ring arch, teleport game prop",
    },
    "obj-altar": {
        "slug": "obj-altar",
        "label": "Autel",
        "type": "object",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, stone altar 0.6 units tall, ancient carved stone pedestal with glowing runes, ritual game prop",
    },
    "obj-totem-feu": {
        "slug": "obj-totem-feu",
        "label": "Totem de Feu",
        "type": "object",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, fire totem pole 0.9 units tall, wooden carved totem with flames on top, Feu element",
    },
    "obj-statue": {
        "slug": "obj-statue",
        "label": "Statue",
        "type": "object",
        "rotations": 4,
        "prompt": f"{PROP_BASE}, ancient warrior statue 0.9 units tall, weathered stone knight statue, dungeon game prop",
    },
    "obj-barrel": {
        "slug": "obj-barrel",
        "label": "Baril",
        "type": "object",
        "rotations": 1,
        "prompt": f"{PROP_BASE}, wooden barrel 0.4 units tall, oak barrel with metal bands, destructible game prop",
    },
}
