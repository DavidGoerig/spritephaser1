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

  // UI / hover state
  private hoverTile: import("./engine/tile").default | null = null;
  private infoBg!: Phaser.GameObjects.Rectangle;
  private infoText!: Phaser.GameObjects.Text;
  private hoverSelector!: Phaser.GameObjects.Image;

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

    // Selector sprite (highlight under hovered cube)
    this.load.image("selector", "/blocks/selector.png");
  
    this.grid.loadObject(`/objects/1.png`, 5);
    this.grid.loadObject(`/objects/2.png`, 6);
    this.grid.loadObject(`/objects/3.png`, 12, 16, 16);
    // ------------------------------------------------
  }

  create() {
    this.grid.create();
    this.camera.create();

    // ------------------------------------------------
    // INFO PANEL (bottom-left, fixed to screen)
    // ------------------------------------------------
    const margin = 10;
    const bgWidth = 220;
    const bgHeight = 70;

    this.infoBg = this.add.rectangle(
      margin + bgWidth / 2,
      this.scale.height - margin - bgHeight / 2,
      bgWidth,
      bgHeight,
      0x000000,
      0.6
    ).setOrigin(0.5).setScrollFactor(0).setVisible(false);

    this.infoText = this.add.text(
      margin + 8,
      this.scale.height - margin - bgHeight + 8,
      "",
      {
        fontSize: "12px",
        color: "#ffffff",
      }
    ).setScrollFactor(0).setVisible(false);

    // Selector image used to highlight hovered cube (drawn on top, semi‑transparent)
    this.hoverSelector = this.add.image(0, 0, "selector")
      .setVisible(false)
      .setDepth(9999)
      .setAlpha(0.5);

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

    // Convention: E = rotate clockwise, Q = rotate counter‑clockwise.
    keys.rotateLeft.on("down", () => {
      const cur = this.grid.direction;
      const next = (cur + 1) % 4; // clockwise
      this.grid.updateDirection(next as Direction);
    });

    keys.rotateRight.on("down", () => {
      const cur = this.grid.direction;
      const next = (cur + 3) % 4; // counter‑clockwise
      this.grid.updateDirection(next as Direction);
    });
  }

  update() {
    const pointer = this.input.mousePointer;
    const tile = this.grid.getTileByIsoPos(pointer.worldX, pointer.worldY);

    // Clear previous hover tint if tile changed
    if (this.hoverTile && this.hoverTile !== tile) {
      (this.hoverTile as any).setHighlighted?.(false);
    }

    this.hoverTile = tile ?? null;

    if (tile) {
      const sx = (tile as any).worldX ?? (tile as any).sprite?.x;
      const sy = (tile as any).worldY ?? (tile as any).sprite?.y;

      if (typeof sx === "number" && typeof sy === "number") {
        // Position selector sprite on top of the hovered tile
        this.hoverSelector
          .setPosition(sx, sy)
          .setVisible(true);
      }

      // Update info panel text
      const id = (tile as any).id ?? "?";
      const z = (tile as any).z ?? 0;
      const obj = (tile as any).object ?? "none";

      this.infoText.setText(
        `Cube\nx: ${tile.x}, y: ${tile.y}, z: ${z}\n` +
        `id: ${id}, object: ${obj}`
      );
      this.infoBg.setVisible(true);
      this.infoText.setVisible(true);
    } else {
      this.infoBg.setVisible(false);
      this.infoText.setVisible(false);
      this.hoverSelector.setVisible(false);
    }
  }
}
