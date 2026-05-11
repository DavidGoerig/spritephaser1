import Grid from "./engine/grid";

import Mouse from "./utils/mouse";
import Camera from "./utils/camera";
import { Direction, StairDirection, type OptionalTileSetter } from "./engine/types";
import { UI, ANIMATION } from "./engine/constants";

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
  private tacticalMode: boolean = false;
  private tacticalMode2: boolean = false;  // Second tactical mode: show all cubes including hidden ones
  
  // Cursor position for keyboard navigation
  private cursorX: number = 5;  // Start at center of grid
  private cursorY: number = 5;
  private cursorZ: number = 0;  // Current Z level
  private useKeyboardCursor: boolean = false;  // Track if keyboard was used recently

  constructor() {
    super("Game");
  }

  preload() {
    this.input.mouse?.disableContextMenu();

    // ------------------------------------------------
    // LOAD TILES & OBJECTS
    // ------------------------------------------------
    // Add error handling for asset loading
    this.load.on("filecomplete", (key: string, type: string) => {
      console.log(`Loaded asset: ${key} (${type})`);
    });

    this.load.on("loaderror", (file: Phaser.Loader.File) => {
      console.error(`Failed to load asset: ${file.key} from ${file.src}`);
      // Continue execution - missing assets will show as missing texture
    });

    // Use 64x64 block tiles from public/blocks instead
    for (let i = 1; i <= 5; i++) {
      this.grid.loadTile(`/blocks/blocks_${i}.png`, 64, 64);
    }
    
    // Load mushroom with 16 frames (64x64 each)
    this.grid.loadTile(`/blocks/mushroom.png`, 64, 64);

    // Selector sprite (highlight under hovered cube)
    this.load.image("selector", "/blocks/selector.png");
    this.load.image("selector3", "/blocks/selector3.png");
  
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
    this.infoBg = this.add.rectangle(
      UI.INFO_MARGIN + UI.INFO_BG_WIDTH / 2,
      this.scale.height - UI.INFO_MARGIN - UI.INFO_BG_HEIGHT / 2,
      UI.INFO_BG_WIDTH,
      UI.INFO_BG_HEIGHT,
      UI.INFO_BG_COLOR,
      UI.INFO_BG_ALPHA
    ).setOrigin(0.5).setScrollFactor(0).setVisible(false);

    this.infoText = this.add.text(
      UI.INFO_MARGIN + UI.INFO_TEXT_PADDING,
      this.scale.height - UI.INFO_MARGIN - UI.INFO_BG_HEIGHT + UI.INFO_TEXT_PADDING,
      "",
      {
        fontSize: UI.INFO_TEXT_FONT_SIZE,
        color: UI.INFO_TEXT_COLOR,
      }
    ).setScrollFactor(0).setVisible(false);

    // Selector image used to highlight hovered cube (drawn on top, semi‑transparent)
    this.hoverSelector = this.add.image(0, 0, "selector")
      .setVisible(false)
      .setDepth(UI.SELECTOR_DEPTH)
      .setAlpha(UI.SELECTOR_ALPHA);

    // ------------------------------------------------
    // CREATE TILES & OBJECTS ANIMATIONS
    // ------------------------------------------------
    // Mushroom animation: 16 frames, 8 fps, loop forever
    // Tile ID 6 is mushroom (after blocks_1 to blocks_5)
    this.grid.createTileAnim(6, ANIMATION.DEFAULT_FRAME_RATE, ANIMATION.DEFAULT_REPEAT, ANIMATION.DEFAULT_REPEAT_DELAY);
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

    // Add mushroom on Platform 1 (center platform at z=1)
    // Mushroom at (4, 4) at z=2 (on top of the platform)
    this.grid.setTile(4, 4, 2, { id: 6 }); // Mushroom (tile ID 6) on top of platform

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
    // TACTICAL MODE TOGGLES
    // ------------------------------------------------
    // T key toggles tactical mode (z-level visualization with colors and labels)
    this.input.keyboard!.on("keydown-T", () => {
      this.tacticalMode = !this.tacticalMode;
      this.grid.setTacticalMode(this.tacticalMode);
    });

    // Y key toggles tactical mode 2 (show all cubes including hidden ones)
    this.input.keyboard!.on("keydown-Y", () => {
      this.tacticalMode2 = !this.tacticalMode2;
      this.grid.setTacticalMode2(this.tacticalMode2);
    });

    // ------------------------------------------------
    // CURSOR MOVEMENT WITH ARROW KEYS
    // ------------------------------------------------
    const arrowKeys = this.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.UP,
      down: Phaser.Input.Keyboard.KeyCodes.DOWN,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,  
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    }) as {
      up: Phaser.Input.Keyboard.Key;
      down: Phaser.Input.Keyboard.Key;
      left: Phaser.Input.Keyboard.Key;
      right: Phaser.Input.Keyboard.Key;
    };

    arrowKeys.up.on("down", () => {
      this.useKeyboardCursor = true;
      if (this.cursorY > 0) {
        this.cursorY--;
      }
    });

    arrowKeys.down.on("down", () => {
      this.useKeyboardCursor = true;
      if (this.cursorY < Grid.ROW - 1) {
        this.cursorY++;
      }
    });

    arrowKeys.left.on("down", () => {
      this.useKeyboardCursor = true;
      if (this.cursorX > 0) {
        this.cursorX--;
      }
    });

    arrowKeys.right.on("down", () => {
      this.useKeyboardCursor = true;
      if (this.cursorX < Grid.COLUMN - 1) {
        this.cursorX++;
      }
    });

    // ------------------------------------------------
    // CURSOR VERTICAL MOVEMENT (UP/DOWN Z LEVELS)
    // ------------------------------------------------
    // Use W/S keys for up/down movement (most intuitive)
    const verticalKeys = this.input.keyboard!.addKeys({
      upZ: Phaser.Input.Keyboard.KeyCodes.W,
      downZ: Phaser.Input.Keyboard.KeyCodes.S,
      pageUp: Phaser.Input.Keyboard.KeyCodes.PAGE_UP,
      pageDown: Phaser.Input.Keyboard.KeyCodes.PAGE_DOWN,
      plus: Phaser.Input.Keyboard.KeyCodes.PLUS,
      minus: Phaser.Input.Keyboard.KeyCodes.MINUS,
    }) as {
      upZ: Phaser.Input.Keyboard.Key;
      downZ: Phaser.Input.Keyboard.Key;
      pageUp: Phaser.Input.Keyboard.Key;
      pageDown: Phaser.Input.Keyboard.Key;
      plus: Phaser.Input.Keyboard.Key;
      minus: Phaser.Input.Keyboard.Key;
    };

    const moveUp = () => {
      this.useKeyboardCursor = true;
      if (this.cursorZ < Grid.MAX_Z) {
        this.cursorZ++;
      }
    };

    const moveDown = () => {
      this.useKeyboardCursor = true;
      if (this.cursorZ > 0) {
        this.cursorZ--;
      }
    };

    // W key: move up (increase Z)
    verticalKeys.upZ.on("down", moveUp);
    
    // S key: move down (decrease Z)
    verticalKeys.downZ.on("down", moveDown);
    
    // Page Up: move up (increase Z)
    verticalKeys.pageUp.on("down", moveUp);
    
    // Page Down: move down (decrease Z)
    verticalKeys.pageDown.on("down", moveDown);
    
    // + key: move up (increase Z)
    verticalKeys.plus.on("down", moveUp);
    
    // - key: move down (decrease Z)
    verticalKeys.minus.on("down", moveDown);

    // Reset to mouse cursor when mouse moves
    this.input.on("pointermove", () => {
      this.useKeyboardCursor = false;
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
    let tile: import("./engine/tile").default | null = null;

    // Use keyboard cursor if keyboard was used, otherwise use mouse position
    if (this.useKeyboardCursor) {
      // Try to get tile at cursor Z level, if not found, get top tile
      tile = this.grid.getTile(this.cursorX, this.cursorY, this.cursorZ);
      if (!tile) {
        // If no tile at cursor Z, get top tile and adjust cursor Z
        tile = this.grid.getTile(this.cursorX, this.cursorY);
        if (tile) {
          this.cursorZ = tile.z;
        }
      }
    } else {
      const pointer = this.input.mousePointer;
      tile = this.grid.getTileByIsoPos(pointer.worldX, pointer.worldY);
      
      // Update cursor position to match mouse position if we have a valid tile
      if (tile) {
        this.cursorX = tile.x;
        this.cursorY = tile.y;
        this.cursorZ = tile.z;
      }
    }

    // Clear previous hover tint if tile changed
    if (this.hoverTile && this.hoverTile !== tile) {
      this.hoverTile.setHighlighted(false);
    }

    this.hoverTile = tile ?? null;

    if (tile) {
      const sx = tile.worldX;
      const sy = tile.worldY;

      // Position selector sprite on top of the hovered tile
      this.hoverSelector
        .setPosition(sx, sy)
        .setVisible(true);

      // Update info panel text
      const id = tile.id ?? "?";
      const z = tile.z;
      const obj = tile.object ?? "none";

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
