import Game from "../game";
import Tile from "./tile";

import { Direction, type OptionalTileSetter } from "./types";
import { CoordinateTransformer } from "./coordinate-transformer";
import { AnimationManager } from "./animation-manager";
import { TacticalModeManager } from "./tactical-mode-manager";
import { type GridConfig, validateConfig } from "./config";

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

  protected scene: Game;
  
  // Instance configuration (allows per-instance customization)
  protected config: GridConfig;

  // Manager classes for separation of concerns
  protected coordinateTransformer: CoordinateTransformer;
  public animationManager: AnimationManager;
  protected tacticalModeManager: TacticalModeManager;
  
  // Public getter for scene (needed by Tile for creating text objects)
  get sceneInstance(): Game {
    return this.scene;
  }
  
  // Expose animation manager properties for backward compatibility
  get anims(): Set<string> {
    return this.animationManager.anims;
  }
  
  get offsets(): Map<string, number> {
    return this.animationManager.offsets;
  }
  
  // 3D array: tiles[z][y][x] - allows multiple cubes stacked at same (x,y)
  protected tiles: (Tile | null)[][][];

  constructor(scene: Game, config?: Partial<GridConfig>) {
    this.scene = scene;
    this.config = validateConfig(config || {});
    
    this.coordinateTransformer = new CoordinateTransformer(
      this.config.width,
      this.config.height,
      this.config.column,
      this.config.row
    );
    this.animationManager = new AnimationManager(scene);
    this.tacticalModeManager = new TacticalModeManager(
      scene,
      this.config.maxZ,
      this.config.row,
      this.config.column,
      this.config.offsetX,
      this.config.offsetY,
      this.config.offsetZ,
      this.coordinateTransformer
    );
    
    // Initialize tiles array with configured dimensions
    this.tiles = Array.from({ length: this.config.maxZ + 1 }, () =>
      Array.from({ length: this.config.row }, () => [])
    );
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
    return this.coordinateTransformer.getRenderCartCoords(x, y, this.direction);
  }

  /**
   * Called when the view direction changes.
   * Recomputes position/depth for every tile.
   */
  updateDirection(dir: Direction) {
    if (this.direction === dir) return;
    this.direction = dir;

    for (let z = 0; z <= this.config.maxZ; z++) {
      for (let y = 0; y < this.config.row; y++) {
        for (let x = 0; x < this.config.column; x++) {
          const tile = this.tiles[z][y][x];
          if (tile) {
            tile.updateView();
          }
        }
      }
    }

    // Update ghost cubes positions if tactical mode 2 is active
    if (this.tacticalModeManager.getIsMode2Active()) {
      this.tacticalModeManager.updateGhostCubesPositions(this.direction);
    }
  }

  /**
   * Enable/disable tactical mode for all tiles.
   * Shows z-level visualization (tints and labels).
   */
  setTacticalMode(enabled: boolean) {
    this.tacticalModeManager.setTacticalMode(enabled, this.tiles);
  }

  /**
   * Enable/disable tactical mode 2 for all tiles.
   * Shows ALL cubes from z=0 to MAX_Z, even hidden ones, with transparency.
   * Also creates ghost/sketch cubes for empty positions to show complete XYZ grid.
   */
  setTacticalMode2(enabled: boolean) {
    this.tacticalModeManager.setTacticalMode2(enabled, this.tiles, this.direction);
  }

  protected createAnim(key: string, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.animationManager.createAnimation(key, framerate, repeat, repeat_delay);
  }

  // ------------------------------------------------
  // PRELOAD
  // Only execute these functions on scene.preload.
  // ------------------------------------------------
  loadTile(src: string, fw?: number, fh?: number) {
    if (!src) {
      console.warn("loadTile called with empty src");
      return;
    }

    this.tile_id++;

    try {
      if (!fw && !fh) {
        this.scene.load.image('t' + this.tile_id, src);
      } else {
        if (!fw || !fh) {
          console.warn(`loadTile: frameWidth and frameHeight must both be provided for spritesheet. Using image instead.`);
          this.scene.load.image('t' + this.tile_id, src);
        } else {
          this.scene.load.spritesheet('t' + this.tile_id, src, { frameWidth: fw, frameHeight: fh });
        }
      }
    } catch (error) {
      console.error(`Error loading tile ${src}:`, error);
    }
  }

  loadObject(src: string, offset?: number, fw?: number, fh?: number) {
    if (!src) {
      console.warn("loadObject called with empty src");
      return;
    }

    this.object_id++;

    try {
      if (!fw && !fh) {
        this.scene.load.image('o' + this.object_id, src);
      } else {
        if (!fw || !fh) {
          console.warn(`loadObject: frameWidth and frameHeight must both be provided for spritesheet. Using image instead.`);
          this.scene.load.image('o' + this.object_id, src);
        } else {
          this.scene.load.spritesheet('o' + this.object_id, src, { frameWidth: fw, frameHeight: fh });
        }
      }

      if (offset !== undefined && offset !== null) {
        this.animationManager.setOffset('o' + this.object_id, offset);
      }
    } catch (error) {
      console.error(`Error loading object ${src}:`, error);
    }
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
    if (x < 0 || x >= this.config.column || y < 0 || y >= this.config.row) return null;
    if (z !== undefined) {
      if (z < 0 || z > this.config.maxZ) return null;
      return this.tiles[z][y][x] || null;
    }
    // If no z specified, return topmost cube at this (x,y)
    for (let zz = this.config.maxZ; zz >= 0; zz--) {
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
    const gx = Math.floor((x / this.config.width) + 1.2);
    const gy = Math.floor((y / this.config.height) + 1.2);
    return this.getTile(gx, gy);
  }

  /**
   * Get tile at isometric screen position.
   * Optimized with early exit - checks tiles from top to bottom,
   * returns the first (topmost) tile that contains the point.
   */
  getTileByIsoPos(x: number, y: number): Tile | null {
    // Check all z-levels from top to bottom, find topmost cube under cursor
    // Early exit optimization: once we find a tile at a z-level, we can skip lower z-levels
    // at the same (x,y) position since they would be hidden
    for (let z = this.config.maxZ; z >= 0; z--) {
      // Iterate through grid positions
      for (let gy = 0; gy < this.config.row; gy++) {
        for (let gx = 0; gx < this.config.column; gx++) {
          const tile = this.tiles[z][gy][gx];
          if (!tile) continue;

          // Check if point is within tile bounds
          if (tile.containsPoint(x, y)) {
            // Found a tile at this z-level containing the point
            // Since we iterate top-to-bottom, this is the topmost visible tile
            return tile;
          }
        }
      }
    }

    return null;
  }

  /**
   * Create or update a cube at (x, y, z).
   * If z > 0, also creates cubes at all lower z-levels up to z.
   */
  setTile(x: number, y: number, z: number, tile: OptionalTileSetter) {
    if (x < 0 || x >= this.config.column || y < 0 || y >= this.config.row || z < 0 || z > this.config.maxZ) return;

    if (!tile || tile === 0 || tile === null) {
      // Remove cube at this z-level and all above
      for (let zz = z; zz <= this.config.maxZ; zz++) {
        const tile = this.tiles[zz][y][x];
        if (tile) {
          tile.set(null);
          this.tiles[zz][y][x] = null;
        }
      }
      return;
    }

    const tileId = typeof tile === "object" ? (tile.id ?? 1) : tile;
    if (!tileId || tileId === 0) return;

    // Create cubes from z=0 up to the specified z
    // But only update the cube at the target z-level, preserve existing cubes below
    for (let zz = 0; zz < z; zz++) {
      // Only create missing cubes below, don't update existing ones
      if (!this.tiles[zz][y][x]) {
        const newTile = new Tile(this.scene, tileId, x, y, zz);
        this.tiles[zz][y][x] = newTile;
        const setter: OptionalTileSetter = typeof tile === "object" 
          ? { id: tileId, z: zz, object: tile.object, direction: tile.direction } 
          : tileId;
        newTile.set(setter);
      }
    }
    
    // Update/create the cube at the target z-level
    let targetTile = this.tiles[z][y][x];
    if (!targetTile) {
      targetTile = new Tile(this.scene, tileId, x, y, z);
      this.tiles[z][y][x] = targetTile;
    }
    const setter: OptionalTileSetter = typeof tile === "object" 
      ? { id: tileId, z: z, object: tile.object, direction: tile.direction } 
      : tileId;
    targetTile.set(setter);

    // Remove any cubes above this z-level
    for (let zz = z + 1; zz <= this.config.maxZ; zz++) {
      const tile = this.tiles[zz][y][x];
      if (tile) {
        tile.set(null);
        this.tiles[zz][y][x] = null;
      }
    }
  }

  setGrid(tiles: OptionalTileSetter[][]) {
    // Clear all existing tiles
    for (let z = 0; z <= this.config.maxZ; z++) {
      for (let y = 0; y < this.config.row; y++) {
        for (let x = 0; x < this.config.column; x++) {
          const tile = this.tiles[z][y][x];
          if (tile) {
            tile.set(null);
            this.tiles[z][y][x] = null;
          }
        }
      }
    }

    // Set new tiles (with stacking)
    for (let y = 0; y < this.config.row; y++) {
      for (let x = 0; x < this.config.column; x++) {
        const tileData = tiles[y][x];
        if (!tileData) continue;

        const z = typeof tileData === "object" ? (tileData.z ?? 0) : 0;
        this.setTile(x, y, z, tileData);
      }
    }
  }
}
