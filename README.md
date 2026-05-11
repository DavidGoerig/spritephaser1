# Projet Élémentaire — MOBA/RPG Tactique Isométrique

Un jeu tactique sur grille isométrique avec 22 espèces, 387 personnages, 18 éléments et un pipeline de production d'assets 3D intégré.

---

## Vision du jeu

Un MOBA/RPG tactique au tour par tour qui fusionne la lisibilité d'un échiquier isométrique avec la profondeur d'un univers de rôle. La grille de blocs est sculptable en 3D (Z-levels, escaliers, reliefs). Chaque personnage appartient à une **espèce**, une **classe**, une **faction** et un ou deux **éléments** parmi 18.

**4 factions** :

| Faction | Région | Idéologie |
|---|---|---|
| Empire du Voile d'Équité | Varkhôl | Contrôle centralisé des Élus |
| Néréides | Thalassyr | Autonomie par les profondeurs |
| Dissidentes | Underground | Résistance, entraide, survie |
| Hommes-Liens | Isthme | Neutralité mercantile |

**18 éléments** : Feu · Dragon · Eau · Gravité · Glace · Fée · Spectre · Électrique · Vent · Plante · Poison · Sol · Insecte · Ténèbres · Psy · Combat · Normal · Roche

**13 classes** : Tank · Assassin · Guerrier · Mage-DPS · Mage-AoE · Enchanteur-Soutien · Enchanteur-Capteur · Rôdeur · Berserk · Paladin · Invocateur · Métamorphe · Artilleur

---

## Architecture

Le projet est composé de trois couches indépendantes qui forment le pipeline complet : moteur de jeu → outil de production d'assets → pipeline de génération 3D.

### 1. Moteur Phaser 3 (`src/`)

Moteur TypeScript/Phaser 3 avec rendu isométrique temps-réel.

- Grille 3D `tiles[z][y][x]` avec stacking, escaliers et rotation 4 directions (N/E/S/W)
- `CoordinateTransformer` — math isométrique : grille ↔ écran, depth sort, hit-test souris
- `AnimationManager` — animations de tuiles via spritesheets Phaser
- `TacticalModeManager` — overlay tactique : tints par Z-level (mode 1), ghost cubes X-ray (mode 2)
- Sculpt interactif : clic gauche ajoute, clic droit supprime, Q/E pivote, W/S monte/descend

### 2. Character Bank (`public/characters/`)

Outil de production interne accessible via navigateur sur `/characters/`. Pas de bundler — ES modules purs avec importmap Three.js.

**Viewer 3D (`viewer.js`)**
- Caméra orthographique isométrique, 4 directions (SE/SW/NW/NE — convention pixel art)
- Chargement GLB/FBX/BVH avec retargeting cross-squelette (Mixamo, RPG Mecanim, BVH Bandai, BVH CMU)
- 19 slots d'animation : `idle, walk, run, jump, swim, fly, attack-01→10, hurt, die, portrait`
- Export spritesheet PNG 512×256 (8 frames × 4 directions), pixel art nearest-neighbour
- Attachement d'armes sur bone `RightHand`/`LeftHand` avec éditeur de grip (position/rotation/scale) et auto-détection du manche par analyse de section transversale des vertices

**Interface UI (`app.js`)**
- Liste de 387 personnages avec filtres (élément, classe, faction, espèce, texte)
- Fiche personnage : assets (19 slots avec statut ✓/○), lore, viewer intégré
- Picker d'animation en 4 onglets (Modèle / Banque Meshy / Sauvegardées / FBX-BVH)
- Drag & drop de fichiers directement sur le viewer ou les slots
- Banque de 40 animations Meshy + bibliothèque ~150 fichiers FBX/BVH
- Persistance JSON via middleware Vite `/api/save-file` (écriture dans `public/` sans redémarrage)

### 3. Pipeline Python (`scripts/pipeline/`)

Génération automatisée de modèles 3D et de spritesheets.

- **Meshy AI v2** — génération GLB (preview ~$0.50 + refine ~$2.00 = ~$2.50/personnage)
- SQLite `pipeline.db` pour l'état par personnage (`pending → generating → glb_ready → done`)
- Rendu headless optionnel via **Blender 3.6+** (Cycles, 64 samples, éclairage 3 points)
- Coût estimé total : ~$585 pour 234 personnages

---

## Démarrage rapide

```bash
npm install
npm run start          # Vite dev server → http://localhost:5173
                       # Character Bank → http://localhost:5173/characters/
```

```bash
npm run build          # Build production (tsc + Vite + terser)
npm run test           # Tests vitest (watch mode)
npm run test:coverage  # Couverture v8
npx vitest run src/engine/coordinate-transformer.test.ts  # Un seul fichier
```

---

## Structure

```
src/
  game.ts                     — Scene Phaser (inputs clavier/souris, update loop)
  engine/
    grid.ts                   — Grille 3D, orchestrateur principal
    tile.ts                   — Sprite de tuile individuelle
    coordinate-transformer.ts — Math isométrique (grille ↔ écran, depth sort)
    animation-manager.ts      — Animations Phaser (spritesheets)
    tactical-mode-manager.ts  — Overlay tactique (tints + ghost cubes)
    config.ts                 — Config grille par défaut (10×10, maxZ=8)
    types.ts                  — Direction, StairDirection, enums
    constants.ts              — Constantes UI et animation

public/characters/
  app.js                      — UI Character Bank (~1600 lignes)
  viewer.js                   — GLBViewer Three.js (retargeting, capture, armes)
  characters.json             — Registre source de vérité (387 personnages)
  meshy-anims/                — 40 GLBs d'animations Meshy natives
  anim-bank/                  — AnimationClips sauvegardés (JSON Three.js)
  anim-library/               — Bibliothèque FBX/BVH par slot (~150 fichiers)

public/weapons/
  weapons.json                — Registre des armes (id, name, grip)

src/data/characters/          — 387 fichiers JSON (assets + animSlots)

scripts/pipeline/
  meshy_pipeline.py           — Génération GLB via Meshy AI v2
  stage2_render_sprites.py    — Rendu Blender headless
  run_pipeline.py             — Orchestrateur complet
```

---

## Données

| | Quantité |
|---|---|
| Personnages définis | 387 |
| Espèces | 22 |
| Classes | 13 |
| Factions | 4 |
| Éléments | 18 |
| Animations Meshy | 40 GLBs |
| Animations FBX/BVH | ~150 fichiers |

---

## Documentation

- [`SPEC.md`](SPEC.md) — Analyse fonctionnelle complète du Character Bank (v2.0, avril 2026)
- [`SPRITESHEET_SPEC.md`](SPRITESHEET_SPEC.md) — Format des spritesheets pour le moteur Phaser
- [`LORE.md`](LORE.md) — Lore et backgrounds des 387 personnages
- [`LORE_CANON.md`](LORE_CANON.md) — Canon narratif de l'univers
- [`CLAUDE.md`](CLAUDE.md) — Guide pour Claude Code (commandes, architecture interne)

---

## Roadmap

1. Export auto des spritesheets vers `public/` sans intervention manuelle
2. Persistance de `characters.json` via `/api/save-file` à chaque édition
3. Connexion `characters.json` → `AnimationManager` Phaser (loader dédié)
4. Lazy loading de la banque Meshy (40 GLBs chargés à la demande)
5. Validation automatique des animations (détection de déformations)

---

## Licences

- Moteur isométrique basé sur [phaser-isometric-engine](https://github.com/FelipeIzolan/phaser-isometric-engine) — MIT
- [Phaser 3](https://github.com/phaserjs/phaser) — MIT
- [Three.js](https://github.com/mrdoob/three.js) — MIT
- [Vite](https://github.com/vitejs/vite) — MIT
