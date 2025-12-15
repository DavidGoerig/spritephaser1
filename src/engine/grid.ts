import Game from "../game";
import Tile from "./tile";

import { Direction, type OptionalTileSetter } from "./types";

export default class Grid {
  // Base cartesian size of one tile before isometric
  // projection. We switch to 64x64 to match the
  // blocks in public/blocks.
  static WIDTH = 64;
  static HEIGHT = 64;

  static COLUMN = 6;
  static ROW = 6;

  // Screen offsets to keep the map roughly centered.
  static OFFSET_X = 512;
  static OFFSET_Y = 288;
  // Vertical step per "z" level. Increased a bit so
  // higher blocks are visually separated.
  static OFFSET_Z = 16;

  static MAX_Z = 2; 

  tile_id: number = 0;
  object_id: number = 0;
  
  // Current view direction (used for map rotation and
  // for selecting directional sprite frames).
  direction: Direction = Direction.North;

  anims: Set<string> = new Set();
  offsets: Map<string, number> = new Map();
  
  protected scene: Game;
  protected tiles: Tile[][] = Array.from({ length: Grid.ROW }, () => []);

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

    for (let y = 0; y < Grid.ROW; y++) {
      for (let x = 0; x < Grid.COLUMN; x++) {
        const tile = this.tiles[y][x];
        if (tile) {
          tile.updateView();
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
     for (let y = 0; y < Grid.ROW; y++)
      for (let x = 0; x < Grid.COLUMN; x++)
        this.tiles[y][x] = new Tile(this.scene, 1, x, y);
   }
 
  createTileAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.createAnim('t' + id, framerate, repeat, repeat_delay);
  }

  createObjectAnim(id: number, framerate?: number, repeat?: number, repeat_delay?: number) {
    this.createAnim('o' + id, framerate, repeat, repeat_delay);
  }
  // ------------------------------------------------

  getTile(x: number, y: number) {
    return (x > -1 && x < Grid.COLUMN && y > -1 && y < Grid.ROW) ? this.tiles[y][x] : null;
  }
  
  getTileByCartPos(x: number, y: number): Tile | null {
    return this.getTile(Math.floor((x / Grid.WIDTH) + 1.2), Math.floor((y / Grid.HEIGHT) + 1.2)); 
  }

  getTileByIsoPos(x: number, y: number): Tile | null {
    let best: Tile | null = null;

    for (let gy = 0; gy < Grid.ROW; gy++) {
      for (let gx = 0; gx < Grid.COLUMN; gx++) {
        const tile = this.tiles[gy][gx];
        if (!tile) continue;

        if (tile.containsPoint(x, y)) {
          if (!best || tile.depth > best.depth) {
            best = tile;
          }
        }
      }
    }

    return best;
  }

  setTile(x: number, y: number, tile: OptionalTileSetter) {
    this.tiles[y][x].set(tile);
  }

  setGrid(tiles: OptionalTileSetter[][]) {
     for (let y = 0; y < Grid.ROW; y++)
      for (let x = 0; x < Grid.COLUMN; x++)
        this.tiles[y][x].set(tiles[y][x]);
  }
}
