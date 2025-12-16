import Grid from "./engine/grid";

import Mouse from "./utils/mouse";
import Camera from "./utils/camera";
import { Direction, StairDirection, type OptionalTileSetter } from "./engine/types";

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

    // ------------------------------------------------
    // SIMPLE TEST MAP: 10x10 with platforms and adjacent stairs
    // Stairs are placed right next to platforms, pointing toward them
    // ------------------------------------------------
    const map: OptionalTileSetter[][] = Array.from({ length: Grid.ROW }, () =>
      Array.from({ length: Grid.COLUMN }, () => 1 as OptionalTileSetter)
    );

    // Helper to set a rectangular platform of cubes at height z
    const platform = (x0: number, y0: number, w: number, h: number, z: number) => {
      for (let y = y0; y < y0 + h; y++) {
        for (let x = x0; x < x0 + w; x++) {
          if (x >= 0 && x < Grid.COLUMN && y >= 0 && y < Grid.ROW)
            map[y][x] = { id: 1, z };
        }
      }
    };

    // Helper to place a stair adjacent to platform, pointing toward it
    const stair = (x: number, y: number, z: number, dir: StairDirection) => {
      if (x >= 0 && x < Grid.COLUMN && y >= 0 && y < Grid.ROW)
        map[y][x] = { id: 2, z, direction: dir };
    };

    // Base floor already z=0 everywhere from initialization.

    // Platform 1: 2x2 at z=1 (center)
    // Platform at (4,4) to (5,5)
    platform(4, 4, 2, 2, 1);
    // Stair 1: adjacent to platform at same level (z=1), pointing toward platform
    // Need block below at z=0 to reach the stair
    platform(4, 6, 1, 1, 0); // Block foundation below stair
    stair(4, 6, 1, StairDirection.SouthWestToNorthEast); // Stair at z=1, same level as platform

    // Platform 2: 2x2 at z=2 (top-left)
    // Platform at (1,1) to (2,2)
    platform(1, 1, 2, 2, 2);
    // Stair 2: adjacent to platform at same level (z=2), pointing toward platform
    // Need blocks below at z=0 and z=1 to reach the stair
    platform(1, 3, 1, 1, 0); // Block at z=0
    platform(1, 3, 1, 1, 1); // Block at z=1
    stair(1, 3, 2, StairDirection.SouthWestToNorthEast); // Stair at z=2, same level as platform

    // Platform 3: 2x2 at z=1 (bottom-right)
    // Platform at (7,7) to (8,8)
    platform(7, 7, 2, 2, 1);
    // Stair 3: adjacent to platform at same level (z=1), pointing toward platform
    // Need block below at z=0 to reach the stair
    platform(7, 6, 1, 1, 0); // Block foundation below stair
    stair(7, 6, 1, StairDirection.SouthEastToNorthWest); // Stair at z=1, same level as platform

    this.grid.setGrid(map);

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

    // ------------------------------------------------
    // SCULPTING CONTROLS (height edit on click)
    // ------------------------------------------------
    // Left click: add cube on top of stack
    // Right click: remove top cube from stack
    this.input.on("pointerup", (pointer: Phaser.Input.Pointer) => {
      const tile = this.grid.getTileByIsoPos(pointer.worldX, pointer.worldY);
      if (!tile) return;

      const topTile = this.grid.getTopTile(tile.x, tile.y);
      const currentHeight = topTile ? topTile.z : -1;

      // 0 = left, 2 = right mouse button
      if (pointer.button === 0) {
        // Add cube on top
        if (currentHeight < Grid.MAX_Z) {
          const newZ = currentHeight + 1;
          const tileId = tile.id ?? 1;
          this.grid.setTile(tile.x, tile.y, newZ, tileId);
        }
      } else if (pointer.button === 2) {
        // Remove top cube
        if (currentHeight >= 0) {
          this.grid.setTile(tile.x, tile.y, currentHeight, null);
        }
      }
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
