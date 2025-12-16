import Game from "../game";
import Tile from "./tile";
import { calculateIsoScreenPosition } from "../utils/math";
import { TACTICAL_MODE_2 } from "./constants";
import { CoordinateTransformer } from "./coordinate-transformer";
import { Direction } from "./types";

/**
 * Manages tactical mode visualization for the grid.
 * Separated from Grid to improve maintainability.
 */
export class TacticalModeManager {
  private ghostCubes: Phaser.GameObjects.Sprite[][][] = [];
  private isMode2Active: boolean = false;
  private spritePool: Phaser.GameObjects.Sprite[] = []; // Pool of reusable sprites
  private maxPoolSize: number = 100; // Maximum sprites to keep in pool

  constructor(
    private scene: Game,
    private maxZ: number,
    private row: number,
    private column: number,
    private offsetX: number,
    private offsetY: number,
    private offsetZ: number,
    private coordinateTransformer: CoordinateTransformer
  ) {}

  /**
   * Enable/disable tactical mode for all tiles.
   * Shows z-level visualization (tints and labels).
   */
  setTacticalMode(enabled: boolean, tiles: (Tile | null)[][][]): void {
    for (let z = 0; z <= this.maxZ; z++) {
      for (let y = 0; y < this.row; y++) {
        for (let x = 0; x < this.column; x++) {
          const tile = tiles[z][y][x];
          if (tile) {
            tile.setTacticalMode(enabled);
          }
        }
      }
    }
  }

  /**
   * Enable/disable tactical mode 2 for all tiles.
   * Shows ALL cubes from z=0 to MAX_Z, even hidden ones, with transparency.
   * Also creates ghost/sketch cubes for empty positions to show complete XYZ grid.
   */
  setTacticalMode2(
    enabled: boolean,
    tiles: (Tile | null)[][][],
    direction: Direction
  ): void {
    this.isMode2Active = enabled;

    if (enabled) {
      // First, determine which cubes are top cubes
      this.markTopCubes(tiles);

      // Create ghost cubes for empty positions (air)
      this.createGhostCubes(tiles, direction);

      // Apply tactical mode 2 to all existing tiles
      for (let z = 0; z <= this.maxZ; z++) {
        for (let y = 0; y < this.row; y++) {
          for (let x = 0; x < this.column; x++) {
            const tile = tiles[z][y][x];
            if (tile) {
              tile.setTacticalMode2(true);
            }
          }
        }
      }
    } else {
      // Remove ghost cubes
      this.removeGhostCubes();

      // Restore normal visibility for all tiles
      for (let z = 0; z <= this.maxZ; z++) {
        for (let y = 0; y < this.row; y++) {
          for (let x = 0; x < this.column; x++) {
            const tile = tiles[z][y][x];
            if (tile) {
              tile.setTacticalMode2(false);
            }
          }
        }
      }
    }
  }

  /**
   * Update ghost cubes positions when view rotates.
   */
  updateGhostCubesPositions(direction: Direction): void {
    for (let z = 0; z < this.ghostCubes.length; z++) {
      if (!this.ghostCubes[z]) continue;
      for (let y = 0; y < this.ghostCubes[z].length; y++) {
        if (!this.ghostCubes[z][y]) continue;
        for (let x = 0; x < this.ghostCubes[z][y].length; x++) {
          const ghost = this.ghostCubes[z][y][x];
          if (ghost) {
            const [cx, cy] = this.coordinateTransformer.getRenderCartCoords(
              x,
              y,
              direction
            );
            const [sx, sy] = calculateIsoScreenPosition(
              cx,
              cy,
              z,
              this.offsetX,
              this.offsetY,
              this.offsetZ
            );

            ghost.setPosition(sx, sy);
            ghost.setDepth(
              cx + cy + this.offsetZ * z + TACTICAL_MODE_2.GHOST_DEPTH_OFFSET
            );
          }
        }
      }
    }
  }

  /**
   * Mark which cubes are top cubes at each position.
   */
  private markTopCubes(tiles: (Tile | null)[][][]): void {
    for (let y = 0; y < this.row; y++) {
      for (let x = 0; x < this.column; x++) {
        let topZ = -1;
        // Find the top cube at this (x,y) that has a tileId (is actually placed)
        for (let z = this.maxZ; z >= 0; z--) {
          const tile = tiles[z]?.[y]?.[x];
          if (tile && tile.id !== null) {
            topZ = z;
            break;
          }
        }
        // Mark all cubes at this position
        for (let z = 0; z <= this.maxZ; z++) {
          const tile = tiles[z]?.[y]?.[x];
          if (tile) {
            tile.isTopCube = z === topZ;
          }
        }
      }
    }
  }

  /**
   * Create ghost/sketch cubes for all empty positions to show complete XYZ grid.
   */
  private createGhostCubes(tiles: (Tile | null)[][][], direction: Direction): void {
    this.removeGhostCubes(); // Clear any existing ghost cubes

    // Initialize 3D array
    this.ghostCubes = Array.from({ length: this.maxZ + 1 }, () =>
      Array.from({ length: this.row }, () => [])
    );

    for (let z = 0; z <= this.maxZ; z++) {
      for (let y = 0; y < this.row; y++) {
        for (let x = 0; x < this.column; x++) {
          // Check if this position is empty (no tile or tile has no tileId)
          const tile = tiles[z]?.[y]?.[x];
          const isEmpty = !tile || tile.id === null;

          if (isEmpty) {
            // Get sprite from pool or create new one
            const ghost = this.getPooledSprite();
            
            const [cx, cy] = this.coordinateTransformer.getRenderCartCoords(
              x,
              y,
              direction
            );
            const [sx, sy] = calculateIsoScreenPosition(
              cx,
              cy,
              z,
              this.offsetX,
              this.offsetY,
              this.offsetZ
            );

            ghost
              .setPosition(sx, sy)
              .setTexture("selector3")
              .setAlpha(TACTICAL_MODE_2.GHOST_ALPHA)
              .setTint(TACTICAL_MODE_2.GHOST_TINT)
              .setDepth(
                cx + cy + this.offsetZ * z + TACTICAL_MODE_2.GHOST_DEPTH_OFFSET
              )
              .setVisible(true);

            this.ghostCubes[z][y][x] = ghost;
          }
        }
      }
    }
  }

  /**
   * Remove all ghost cubes and return them to the pool.
   */
  private removeGhostCubes(): void {
    for (let z = 0; z < this.ghostCubes.length; z++) {
      if (!this.ghostCubes[z]) continue;
      for (let y = 0; y < this.ghostCubes[z].length; y++) {
        if (!this.ghostCubes[z][y]) continue;
        for (let x = 0; x < this.ghostCubes[z][y].length; x++) {
          const ghost = this.ghostCubes[z][y][x];
          if (ghost) {
            this.returnToPool(ghost);
          }
        }
      }
    }
    this.ghostCubes = [];
  }

  /**
   * Get a sprite from the pool, or create a new one if pool is empty.
   */
  private getPooledSprite(): Phaser.GameObjects.Sprite {
    if (this.spritePool.length > 0) {
      const sprite = this.spritePool.pop()!;
      sprite.setVisible(true);
      return sprite;
    }
    // Create new sprite if pool is empty
    return this.scene.add.sprite(0, 0, "selector3");
  }

  /**
   * Return a sprite to the pool for reuse.
   */
  private returnToPool(sprite: Phaser.GameObjects.Sprite): void {
    sprite.setVisible(false);
    // Only keep a limited number of sprites in the pool
    if (this.spritePool.length < this.maxPoolSize) {
      this.spritePool.push(sprite);
    } else {
      // Destroy excess sprites
      sprite.destroy();
    }
  }

  /**
   * Check if tactical mode 2 is currently active.
   */
  getIsMode2Active(): boolean {
    return this.isMode2Active;
  }
}

