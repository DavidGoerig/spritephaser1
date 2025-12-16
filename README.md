# 🥧 phaser-isometric-engine
![image](https://github.com/FelipeIzolan/phaser-isometric-engine/assets/80170121/39ff340d-14e1-4523-a55f-d64be22134b2)

A Phaser 3-based isometric engine for creating 3D-like tile-based games with support for stacked tiles, view rotation, tactical mode visualization, and more.

## 🚀 Getting Started

```
git clone https://github.com/FelipeIzolan/phaser-isometric-engine.git
cd phaser-isometric-engine
npm i && npm start
```
- Configure the canvas in **main.ts**.
- Configure grid dimensions in **grid.ts** or use the configuration system.
- Add **tiles** and **objects** sprites in **public/blocks** and **public/objects**.
- Load and create **tiles** and **objects** in **game.ts**.

## 📐 Architecture Overview

The engine is organized into several key components:

### Core Classes

- **Grid** (`src/engine/grid.ts`): Main grid manager that coordinates all subsystems
- **Tile** (`src/engine/tile.ts`): Represents a single tile/cube in the isometric grid
- **Game** (`src/game.ts`): Phaser scene that sets up and manages the game

### Manager Classes

- **CoordinateTransformer** (`src/engine/coordinate-transformer.ts`): Handles coordinate transformations between grid, cartesian, and isometric space
- **AnimationManager** (`src/engine/animation-manager.ts`): Manages sprite animations and object offsets
- **TacticalModeManager** (`src/engine/tactical-mode-manager.ts`): Handles tactical mode visualization and ghost cube rendering

### Coordinate System

The engine uses a three-coordinate system:
- **X, Y**: Grid coordinates (logical position on the 2D grid)
- **Z**: Height/stack level (0 = ground, higher = stacked cubes)

Coordinate transformations:
1. Grid (X, Y) → Cartesian (based on view direction)
2. Cartesian → Isometric screen coordinates
3. Z-level affects vertical screen position

### View Rotation

The engine supports 4-directional view rotation (North, East, South, West). When rotating:
- Grid coordinates are transformed based on the current direction
- Tiles update their screen positions automatically
- Sprite frames rotate to match the view direction

## ⚙️ Configuration

The engine now supports runtime configuration through the `GridConfig` interface:

```typescript
import { GridConfig } from "./engine/config";

const customConfig: Partial<GridConfig> = {
  width: 64,      // Tile width before isometric projection
  height: 64,     // Tile height before isometric projection
  column: 20,      // Grid width (X dimension)
  row: 20,        // Grid height (Y dimension)
  offsetX: 512,   // Screen X offset for centering
  offsetY: 288,   // Screen Y offset for centering
  offsetZ: 32,    // Vertical step per Z level
  maxZ: 8,        // Maximum stack height
};

const grid = new Grid(scene, customConfig);
```

## 📄 API Documentation

### Grid Class
```typescript
tile_id: number //<- Tile id counter.
object_id: number //<- Object id counter.

anims: Set<string> //<- Set of sprites that has animation.
offsets: Map<string, number> //<- Y-offset Map of objects-sprite.

loadTile(src: string, fw?: number, fh?: number) //<- Load the entire sprite or a frame of the sprite. (Tile)
loadObject(src: string, fw?: number, fh?: number) //<- Load the entire sprite or a frame of the sprite. (Object)

create() //<- Create the tiles on the grid.
createTileAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) //<- Create an animation. (Tile)
createObjectAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) //<- Create an animation. (Object)

getTile(x: number, y: number) //<- Get tile by x and y.
getTileByCartPos(x: number, y: number): Tile | null //<- Get tile by cartesian position.
getTileByIsoPos(x: number, y: number): Tile | null //<- Get tile by isometric position.

// Look engine/types.ts
setTile(x: number, y: number, tile: OptionalTileSetter) //<- Set tile.
setGrid(tiles: OptionalTileSetter[][]) //<- Set grid.
```

**Tile**
```typescript
x: number //<- Grid tile x.
y: number //<- Grid tile y.
z: number //<- Grid tile z.
object: number | null //<- Grid tile object.

worldX: number //<- Tile world position x.
worldY: number //<- Tile world position y.
depth: number //<- Tile depth.

setTile(id: number) //<- Set tile by id.
setObject(id: number) //<- Set object by id.
set(setter: OptionalTileSetter) //<- Set (or not) a tile and object.
```

## 🎮 Features

- **3D Stacking**: Stack tiles vertically (Z-levels) for height variation
- **View Rotation**: Rotate the isometric view in 4 directions (Q/E keys)
- **Tactical Modes**: 
  - Mode 1 (T key): Z-level visualization with color tints and labels
  - Mode 2 (Y key): X-ray mode showing all cubes including hidden ones
- **Interactive Editing**: Left-click to add cubes, right-click to remove
- **Sprite Animations**: Support for animated tiles and objects
- **Directional Sprites**: Automatic frame selection based on view direction
- **Performance Optimizations**: 
  - Sprite pooling for ghost cubes
  - Early exit optimization in tile picking
  - Efficient coordinate transformations

## 🔧 Recent Improvements

This codebase has been refactored to improve:
- **Type Safety**: Proper TypeScript interfaces, no `any` types
- **Architecture**: Separation of concerns with manager classes
- **Performance**: Optimized algorithms and sprite pooling
- **Maintainability**: Extracted constants, utility functions, and better organization
- **Error Handling**: Comprehensive error handling for asset loading
- **Configuration**: Runtime configuration system for grid dimensions

## 📜 License

- [phaser-isometric-engine](https://github.com/FelipeIzolan/phaser-isometric-engine) - MIT
- [phaser](https://github.com/phaserjs/phaser) - MIT
- [vite](https://github.com/vitejs/vite) - MIT
- [tiny-blocks](https://dani-maccari.itch.io/tiny-blocks-isometric-pixel-assets)
