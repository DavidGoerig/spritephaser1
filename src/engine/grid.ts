import Game from "../game";
import Tile from "./tile";

import { Direction, type OptionalTileSetter } from "./types";

export default class Grid {
  // Base cartesian size of one tile before isometric
  // projection. We switch to 64x64 to match the
  // blocks in public/blocks.
  static WIDTH = 64;
  static HEIGHT = 64;

  // Grid size (x = COLUMN, y = ROW)
  static COLUMN = 10;
  static ROW = 10;

  // Screen offsets to keep the map roughly centered.
  static OFFSET_X = 512;
  static OFFSET_Y = 288;
  // Vertical step per "z" level. Larger value so
  // stacked cubes are clearly visible.
  static OFFSET_Z = 32;

  // Maximum height (number of stacked levels)
  static MAX_Z = 8; 

  tile_id: number = 0;
  object_id: number = 0;
  
  // Current view direction (used for map rotation and
  // for selecting directional sprite frames).
  direction: Direction = Direction.North;

  anims: Set<string> = new Set();
  offsets: Map<string, number> = new Map();
  
  protected scene: Game;
  // 3D array: tiles[z][y][x] - allows multiple cubes stacked at same (x,y)
  protected tiles: Tile[][][] = Array.from({ length: Grid.MAX_Z + 1 }, () =>
    Array.from({ length: Grid.ROW }, () => [])
  );

  constructor(scene: Game) {
    this.scene = scene;
  }

  // ------------------------------------------------
  // COORDINATE TRANSFORM HELPERS
  // ------------------------------------------------
  /**
   * Convert logical grid coordinates (x, y) into
   * cartesian coordinates depending on current view
   * direction. These cartesian coordinates are then
   * mapped to isometric space.
   */
  getRenderCartCoords(x: number, y: number): [number, number] {
    switch (this.direction) {
      case Direction.North:
        return [x * Grid.WIDTH, y * Grid.HEIGHT];
      case Direction.East:
        // Rotate 90° clockwise
        return [y * Grid.WIDTH, (Grid.COLUMN - 1 - x) * Grid.HEIGHT];
      case Direction.South:
        // Rotate 180°
        return [(Grid.COLUMN - 1 - x) * Grid.WIDTH, (Grid.ROW - 1 - y) * Grid.HEIGHT];
      case Direction.West:
        // Rotate 270° clockwise (or 90° CCW)
        return [(Grid.ROW - 1 - y) * Grid.WIDTH, x * Grid.HEIGHT];
      default:
        return [x * Grid.WIDTH, y * Grid.HEIGHT];
    }
  }

  /**
   * Called when the view direction changes.
   * Recomputes position/depth for every tile.
   */
  updateDirection(dir: Direction) {
    if (this.direction === dir) return;
    this.direction = dir;

    for (let z = 0; z <= Grid.MAX_Z; z++) {
      for (let y = 0; y < Grid.ROW; y++) {
        for (let x = 0; x < Grid.COLUMN; x++) {
          const tile = this.tiles[z][y][x];
          if (tile) {
            tile.updateView();
          }
        }
      }
    }
  }

  protected createAnim(key: string, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.scene.anims.create({ 
      key: key, 
      frames: this.scene.anims.generateFrameNumbers(key), 
      frameRate: framerate ?? 8, 
      repeat: repeat ?? -1,
      repeatDelay: repeat_delay ?? 0
    });

    this.anims.add(key);
  }

  // ------------------------------------------------
  // PRELOAD
  // Only execute these functions on scene.preload.
  // ------------------------------------------------
  loadTile(src: string, fw?: number, fh?: number) {
    this.tile_id++;

    if (!fw && !fh) this.scene.load.image('t' + this.tile_id, src);
    else this.scene.load.spritesheet('t' + this.tile_id, src, { frameWidth: fw!, frameHeight: fh! });
  }

  loadObject(src: string, offset?: number, fw?: number, fh?: number) {
    this.object_id++;

    if (!fw && !fh) this.scene.load.image('o' + this.object_id, src);
    else this.scene.load.spritesheet('o' + this.object_id, src, { frameWidth: fw!, frameHeight: fh! });

    if (offset) this.offsets.set('o' + this.object_id, offset);
  }
  // ------------------------------------------------

  // ------------------------------------------------
  // CREATE
  // Only execute these functions on scene.create.
  // ------------------------------------------------
   create() {
     // Initialize empty 3D grid (cubes will be added via setGrid)
     // No need to pre-create tiles here anymore
   }
 
  createTileAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.createAnim('t' + id, framerate, repeat, repeat_delay);
  }

  createObjectAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.createAnim('o' + id, framerate, repeat, repeat_delay);
  }
  // ------------------------------------------------

  getTile(x: number, y: number, z?: number): Tile | null {
    if (x < 0 || x >= Grid.COLUMN || y < 0 || y >= Grid.ROW) return null;
    if (z !== undefined) {
      if (z < 0 || z > Grid.MAX_Z) return null;
      return this.tiles[z][y][x] || null;
    }
    // If no z specified, return topmost cube at this (x,y)
    for (let zz = Grid.MAX_Z; zz >= 0; zz--) {
      if (this.tiles[zz][y][x]) {
        return this.tiles[zz][y][x];
      }
    }
    return null;
  }

  getTopTile(x: number, y: number): Tile | null {
    return this.getTile(x, y);
  }

  getTileByCartPos(x: number, y: number): Tile | null {
    const gx = Math.floor((x / Grid.WIDTH) + 1.2);
    const gy = Math.floor((y / Grid.HEIGHT) + 1.2);
    return this.getTile(gx, gy);
  }

  getTileByIsoPos(x: number, y: number): Tile | null {
    let best: Tile | null = null;

    // Check all z-levels, find topmost cube under cursor
    for (let z = Grid.MAX_Z; z >= 0; z--) {
      for (let gy = 0; gy < Grid.ROW; gy++) {
        for (let gx = 0; gx < Grid.COLUMN; gx++) {
          const tile = this.tiles[z][gy][gx];
          if (!tile) continue;

          if (tile.containsPoint(x, y)) {
            if (!best || tile.depth > best.depth) {
              best = tile;
            }
          }
        }
      }
    }

    return best;
  }

  /**
   * Create or update a cube at (x, y, z).
   * If z > 0, also creates cubes at all lower z-levels up to z.
   */
  setTile(x: number, y: number, z: number, tile: OptionalTileSetter) {
    if (x < 0 || x >= Grid.COLUMN || y < 0 || y >= Grid.ROW || z < 0 || z > Grid.MAX_Z) return;

    if (!tile || tile === 0 || tile === null) {
      // Remove cube at this z-level and all above
      for (let zz = z; zz <= Grid.MAX_Z; zz++) {
        if (this.tiles[zz][y][x]) {
          this.tiles[zz][y][x].set(null);
          this.tiles[zz][y][x] = null as any;
        }
      }
      return;
    }

    const tileId = typeof tile === "object" ? (tile.id ?? 1) : tile;
    if (!tileId || tileId === 0) return;

    // Create cubes from z=0 up to the specified z
    for (let zz = 0; zz <= z; zz++) {
      if (!this.tiles[zz][y][x]) {
        this.tiles[zz][y][x] = new Tile(this.scene, tileId, x, y, zz);
      }
      // Update the cube at this z-level
      // Preserve direction field (important for stairs with StairDirection)
      const setter: OptionalTileSetter = typeof tile === "object" 
        ? { id: tileId, z: zz, object: tile.object, direction: tile.direction } 
        : tileId;
      if (this.tiles[zz][y][x]) {
        this.tiles[zz][y][x].set(setter);
      }
    }

    // Remove any cubes above this z-level
    for (let zz = z + 1; zz <= Grid.MAX_Z; zz++) {
      if (this.tiles[zz][y][x]) {
        this.tiles[zz][y][x].set(null);
        this.tiles[zz][y][x] = null as any;
      }
    }
  }

  setGrid(tiles: OptionalTileSetter[][]) {
    // Clear all existing tiles
    for (let z = 0; z <= Grid.MAX_Z; z++) {
      for (let y = 0; y < Grid.ROW; y++) {
        for (let x = 0; x < Grid.COLUMN; x++) {
          if (this.tiles[z][y][x]) {
            this.tiles[z][y][x].set(null);
            this.tiles[z][y][x] = null as any;
          }
        }
      }
    }

    // Set new tiles (with stacking)
    for (let y = 0; y < Grid.ROW; y++) {
      for (let x = 0; x < Grid.COLUMN; x++) {
        const tileData = tiles[y][x];
        if (!tileData) continue;

        const z = typeof tileData === "object" ? (tileData.z ?? 0) : 0;
        this.setTile(x, y, z, tileData);
      }
    }
  }
}
