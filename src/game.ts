import Grid from "./engine/grid";

import Mouse from "./utils/mouse";
import Camera from "./utils/camera";
import { Direction } from "./engine/types";

export default class Game extends Phaser.Scene {
  grid = new Grid(this);

  // ------------------------------------------------
  // MOUSE & CAMERA
  // optional, but recommended.
  // ------------------------------------------------
  mouse = new Mouse(this);
  camera = new Camera(this);

  constructor() {
    super("Game");
  }

  preload() {
    this.input.mouse?.disableContextMenu();

    // ------------------------------------------------
    // LOAD TILES & OBJECTS
    // ------------------------------------------------
    // Use 64x64 block tiles from public/blocks instead
    for (let i = 1; i <= 5; i++) {
      this.grid.loadTile(`/blocks/blocks_${i}.png`, 64, 64);
    }
  
    this.grid.loadObject(`/objects/1.png`, 5);
    this.grid.loadObject(`/objects/2.png`, 6);
    this.grid.loadObject(`/objects/3.png`, 12, 16, 16);
    // ------------------------------------------------
  }

  create() {
    this.grid.create();
    this.camera.create();

    // ------------------------------------------------
    // CREATE TILES & OBJECTS ANIMATIONS
    // ------------------------------------------------
    // If you add multi-frame spritesheets later, you
    // can enable animations here again.
    // this.grid.createTileAnim(4, 6);
    // this.grid.createObjectAnim(3, 6);
    // ------------------------------------------------

    // Simple demo map using the new 64x64 blocks.
    // IDs 1..5 correspond to blocks_1..blocks_5.png
    this.grid.setGrid([
      [1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 3, 3, 2, 1],
      [1, 2, 3, 4, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1],
    ]);

    // ------------------------------------------------
    // VIEW ROTATION CONTROLS
    // ------------------------------------------------
    // Q / E keys rotate the isometric view left / right.
    const keys = this.input.keyboard!.addKeys({
      rotateLeft: Phaser.Input.Keyboard.KeyCodes.Q,
      rotateRight: Phaser.Input.Keyboard.KeyCodes.E,
    }) as {
      rotateLeft: Phaser.Input.Keyboard.Key;
      rotateRight: Phaser.Input.Keyboard.Key;
    };

    keys.rotateLeft.on("down", () => {
      const cur = this.grid.direction;
      const next = (cur + 3) % 4; // -1 mod 4
      this.grid.updateDirection(next as Direction);
    });

    keys.rotateRight.on("down", () => {
      const cur = this.grid.direction;
      const next = (cur + 1) % 4;
      this.grid.updateDirection(next as Direction);
    });
  }

  update() {
    // ------------------------------------------------
    // DELETE-ME
    // Tile selection test!
    // ------------------------------------------------
    let tile = this.grid.getTileByIsoPos(this.input.mousePointer.worldX, this.input.mousePointer.worldY);

    if (tile) 
      tile.set();
    // ------------------------------------------------
  }
}
