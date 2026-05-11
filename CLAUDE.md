# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start          # Vite dev server (http://localhost:5173)
npm run build          # tsc + Vite build (minified via terser)
npm run test           # vitest (watch mode)
npm run test:coverage  # vitest with v8 coverage
```

Run a single test file:
```bash
npx vitest run src/engine/coordinate-transformer.test.ts
```

The character bank tool runs at `/characters/` — the Vite dev server serves it via the `mpa-characters` plugin in [vite.config.ts](vite.config.ts).

## Architecture

### Phaser 3 Isometric Engine (`src/`)

Entry: `index.html` → Phaser boots with `Game` scene.

**`src/game.ts`** — The single Phaser scene. Sets up Grid, Mouse, Camera, all keyboard bindings (Q/E rotate, T tactical, Y tactical-mode-2, arrows cursor, W/S Z-level, left/right click sculpt), and the update loop (hover selector, info panel).

**`src/engine/grid.ts`** — Core grid class. Owns the 3D tile array `tiles[z][y][x]` and delegates to three managers. Static dimensions come from `DEFAULT_CONFIG` in `config.ts` (10×10 columns/rows, maxZ=8). Key methods: `setGrid`, `setTile`, `getTile`, `getTopTile`, `getTileByIsoPos`, `loadTile`, `loadObject`, `createTileAnim`, `updateDirection`, `setTacticalMode`, `setTacticalMode2`.

**Managers** (each owns a single concern):
- `CoordinateTransformer` — isometric math: grid (x,y,z) ↔ screen (worldX,worldY), 4-direction rotation, depth sorting, hit-testing
- `AnimationManager` — Phaser spritesheet animations for tiles/objects (frame rate, repeat, per-key offsets)
- `TacticalModeManager` — z-level tints/labels (mode 1) and ghost cube overlay for the full XYZ grid (mode 2)

**`src/engine/tile.ts`** — Individual tile sprite. Knows its grid (x,y,z), tile ID, stair direction, attached object. Calls `CoordinateTransformer` to compute worldX/worldY and render depth. `setHighlighted` applies hover tint.

**`src/engine/types.ts`** — `Direction` enum (North=0, East=1, South=2, West=3), `StairDirection` enum, `OptionalTileSetter` union type.

**`src/engine/constants.ts`** — `UI.*` constants (info panel sizing, selector depth/alpha) and `ANIMATION.*` defaults (8 fps, loop -1).

### Character Bank Tool (`public/characters/`)

Standalone Three.js app (no bundler — plain ES modules via importmap in `index.html`). Serves at `/characters/`.

**`viewer.js`** — `GLBViewer` class wrapping Three.js `OrthographicCamera`, `AnimationMixer`, `OrbitControls`, `GLTFLoader`. Key details:
- `_loadGen` counter prevents stale GLTFLoader callbacks when rapidly switching characters
- `clearAnimState()` increments `_loadGen` to discard in-flight loads
- `_loadModel` auto-plays the first clip after model setup
- `injectClip(clip)` adds external clips into the mixer's clip pool
- `_retargetClips` / `_remapBvhClip` / `_remapFbxClip` — cross-skeleton animation retargeting by bone name
- `stripTranslations` — removes root-motion tracks that cause drift on looping idles

**`app.js`** — UI layer (~1300 lines). Manages character list, slot panel, pickers, drag-drop, export. Key details:
- All Meshy-generated models share the same 24-bone skeleton — bank animations work on every character
- `MESHY_TO_SLOT` maps Meshy clip names (e.g. `"walking"`) to engine slot names (e.g. `"walk"`)
- Load order: `applyCharAnimSlots` (saved explicit assignments) runs first, then `autoAssignMeshyToViewer` fills remaining slots from the Meshy bank (idempotent)
- `saveCharSlots(char)` persists `char.animSlots` back to `characters.json` via `POST /api/save-file`

**`/api/save-file`** — Vite dev-only middleware (in `vite.config.ts`) that writes arbitrary files under `public/`. Header `x-file-path` specifies the relative path. Used by the character bank to persist JSON changes.

### Character Data (`src/data/`)

300+ character JSON files organized by element type (fire, water, earth, etc.). Each file contains:
```json
{
  "assets": {
    "model_glb": "characters/001-pyrakh/model.glb",
    "portrait": "characters/001-pyrakh/portrait.png"
  },
  "animSlots": {
    "idle": "idle",
    "walk": "walking"
  }
}
```
`animSlots` is optional and user-editable via the character bank UI.

### Tests (`src/engine/*.test.ts`)

Tests use vitest + jsdom. `coordinate-transformer.test.ts` and `math.test.ts` are the primary test files. Tests import engine classes directly — no Phaser instance needed for pure math modules.
