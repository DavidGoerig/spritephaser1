import Game from "../game";
import Grid from "./grid";
import Phaser from "phaser";

import { cart2iso } from "../utils/math";
import { Direction, StairDirection, type OptionalTileSetter } from "./types";

export default class Tile {
  protected grid: Grid;
  protected sprite = {} as Phaser.GameObjects.Sprite;
  protected ssprite = {} as Phaser.GameObjects.Sprite;
  protected by: number;

  readonly x: number;
  readonly y: number;
  z: number;

  protected tileId: number | null = null;
  protected tileDirection: Direction | StairDirection | null = null;  // Direction of this tile (Direction for regular, StairDirection for stairs)
  protected zLevelText: Phaser.GameObjects.Text | null = null;  // Text label showing z-level in tactical mode
  protected tacticalModeActive: boolean = false;  // Track if tactical mode is enabled
  protected tacticalMode2Active: boolean = false;  // Track if tactical mode 2 is enabled (show all cubes)
  protected tacticalTint: number | null = null;  // Store tactical mode tint color
  protected originalAlpha: number = 1.0;  // Store original alpha for mode 2
  protected isTopCube: boolean = true;  // Track if this is the top cube at its position
  object: number | null;

  constructor(scene: Game, id: number, x: number, y: number, z?: number) {
    this.x = x;
    this.y = y;
    this.z = z ?? 0;
    this.object = null;
    this.grid = scene.grid;

    // Initial screen position is computed based on the
    // grid's current view direction.
    const [cx, cy] = this.grid.getRenderCartCoords(x, y);
    let [sx, sy] = cart2iso(cx, cy);

    sx = (sx / 2) + Grid.OFFSET_X;
    sy = (sy / 2) + Grid.OFFSET_Y;
    this.by = sy;

    this.sprite = scene.add.sprite(sx, sy, 't' + id);
    this.ssprite = scene.add.sprite(sx, sy, '').setVisible(false);
  }

   
  // ------------------------------------------------
  // TILE SETTER & GETTER
  // ------------------------------------------------
  get depth() {
    return this.sprite.depth;
  }

  get worldX() {
    return this.sprite.x;
  }

  set worldX(v: number) {
    this.sprite.x = v;
    this.ssprite.x = v;
  }

  get worldY() {
    return this.sprite.y;
  }

  set worldY(v: number) {
    this.sprite.y = v;
    this.ssprite.y = v - (this.grid.offsets.get(this.ssprite.texture.key) ?? 0);
  }
  // ------------------------------------------------

  /**
   * Returns true if the given screen point is inside
   * this tile's main sprite bounds. Used for picking.
   */
  containsPoint(screenX: number, screenY: number): boolean {
    const bounds = this.sprite.getBounds();
    return Phaser.Geom.Rectangle.Contains(bounds, screenX, screenY);
  }

  /**
   * Visual highlight for hover / selection.
   * Preserves tactical mode color if active.
   */
  setHighlighted(on: boolean) {
    if (on) {
      if (this.tacticalModeActive && this.tacticalTint !== null) {
        // In tactical mode: keep the z-level tint, just make it brighter
        const highlightTint = Phaser.Display.Color.ValueToColor(this.tacticalTint);
        highlightTint.lighten(30); // Make it 30% brighter
        this.sprite.setTint(highlightTint.color);
        this.ssprite.setTint(highlightTint.color);
      } else {
        // Normal mode: use yellow highlight
        this.sprite.setTintFill(0xffff00);
        this.ssprite.setTintFill(0xffff00);
      }
    } else {
      // Restore tactical tint if active, otherwise clear
      if (this.tacticalModeActive && this.tacticalTint !== null) {
        this.sprite.setTint(this.tacticalTint);
        this.ssprite.setTint(this.tacticalTint);
      } else {
        this.sprite.clearTint();
        this.ssprite.clearTint();
      }
    }
  }

  /**
   * Enable/disable tactical mode visualization.
   * Shows z-level with tint colors and text labels.
   */
  setTacticalMode(enabled: boolean) {
    if (!this.sprite.visible) return;

    this.tacticalModeActive = enabled;

    if (enabled) {
      // Tint based on z-level: darker = higher
      // z=0: no tint, z=1: light blue, z=2: blue, z=3: dark blue, etc.
      const tintColors = [0xffffff, 0xaaccff, 0x6699ff, 0x3366ff, 0x0033ff, 0x0000cc];
      const tint = tintColors[Math.min(this.z, tintColors.length - 1)];
      this.tacticalTint = tint;
      this.sprite.setTint(tint);
      this.ssprite.setTint(tint);

      // Show z-level text label
      if (!this.zLevelText) {
        const [cx, cy] = this.grid.getRenderCartCoords(this.x, this.y);
        let [sx, sy] = cart2iso(cx, cy);
        sx = (sx / 2) + Grid.OFFSET_X;
        sy = (sy / 2) + Grid.OFFSET_Y - Grid.OFFSET_Z * this.z;

        this.zLevelText = (this.grid as any).scene.add.text(sx, sy - 20, `z${this.z}`, {
          fontSize: "10px",
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 2,
        }).setOrigin(0.5).setDepth(this.sprite.depth + 1000);
      }
      if (this.zLevelText) {
        this.zLevelText.setVisible(true);
        this.zLevelText.setPosition(this.sprite.x, this.sprite.y - 20);
        this.zLevelText.setText(`z${this.z}`);
      }
    } else {
      // Clear tint
      this.tacticalTint = null;
      this.sprite.clearTint();
      this.ssprite.clearTint();

      // Hide z-level text
      if (this.zLevelText) {
        this.zLevelText.setVisible(false);
      }
    }
  }

  /**
   * Enable/disable tactical mode 2 visualization.
   * Shows ALL cubes from z=0 to MAX_Z, even hidden ones, with transparency.
   */
  setTacticalMode2(enabled: boolean) {
    this.tacticalMode2Active = enabled;

    if (enabled) {
      // Store original alpha if not already stored
      if (this.originalAlpha === 1.0) {
        this.originalAlpha = this.sprite.alpha;
      }

      // Make all cubes visible (even hidden ones)
      this.sprite.setVisible(true);
      this.ssprite.setVisible(true);

      if (this.isTopCube) {
        // Top cube: full opacity
        this.sprite.setAlpha(1.0);
        this.ssprite.setAlpha(1.0);
      } else {
        // Hidden cubes: semi-transparent based on z-level
        // Lower z = more transparent (0.3 for z=0, 0.5 for z=1, etc.)
        const alpha = Math.min(0.3 + (this.z * 0.15), 0.7);
        this.sprite.setAlpha(alpha);
        this.ssprite.setAlpha(alpha);
      }

      // Also apply tactical mode 1 colors if active
      if (this.tacticalModeActive) {
        if (this.tacticalTint !== null) {
          this.sprite.setTint(this.tacticalTint);
          this.ssprite.setTint(this.tacticalTint);
        }
      }
    } else {
      // Restore original visibility: only top cubes visible
      if (!this.isTopCube) {
        this.sprite.setVisible(false);
        this.ssprite.setVisible(false);
      } else {
        this.sprite.setAlpha(this.originalAlpha);
        this.ssprite.setAlpha(this.originalAlpha);
        this.sprite.setVisible(true);
        this.ssprite.setVisible(true);
      }
    }
  }

  /**
   * Recalculate world position and depth when the
   * grid view direction or tile height changes.
   * Also updates directional sprite frames when
   * using multi-direction spritesheets.
   */
  updateView() {
    const [cx, cy] = this.grid.getRenderCartCoords(this.x, this.y);
    let [sx, sy] = cart2iso(cx, cy);

    sx = (sx / 2) + Grid.OFFSET_X;
    sy = (sy / 2) + Grid.OFFSET_Y;
    this.by = sy;

    const y = this.by - Grid.OFFSET_Z * this.z;

    this.sprite
      .setX(sx)
      .setY(y)
      .setDepth(cx + cy + (Grid.OFFSET_Z * this.z));

    const offset = this.grid.offsets.get(this.ssprite.texture.key) ?? 0;
    this.ssprite
      .setX(sx)
      .setY(y - offset)
      .setDepth(this.sprite.depth + offset);

    // Update z-level text position if tactical mode is active
    if (this.zLevelText) {
      this.zLevelText.setPosition(sx, y - 20);
      this.zLevelText.setDepth(this.sprite.depth + 1000);
    }

    // If your tiles/objects are 4-frame spritesheets
    // ordered [North, East, South, West], this will
    // select the correct frame for the current view.
    this.applyDirectionFrame();
  }

  protected applyDirectionFrame() {
    let frameIndex: number;
    
    // For stairs (block id 2), combine the world-facing diagonal direction with view rotation
    // StairDirection enum values (0-3) map to sprite frames:
    //   0: SouthEastToNorthWest
    //   1: SouthWestToNorthEast
    //   2: NorthWestToSouthEast
    //   3: NorthEastToSouthWest
    if (this.tileId === 2 && this.tileDirection !== null) {
      // Stairs: for diagonal directions, we need to subtract view rotation
      // This correctly maps diagonal directions when rotating East/West
      const stairDir = this.tileDirection as number;
      const viewDir = this.grid.direction as number;
      frameIndex = ((stairDir - viewDir + 4) % 4);
    } else if (this.tileDirection !== null) {
      // Other directional tiles: combine tile's facing direction with current view rotation
      frameIndex = ((this.tileDirection as number) + this.grid.direction) % 4;
    } else {
      // Regular tiles: just rotate with view
      frameIndex = this.grid.direction as number;
    }

    // setFrame is safe even for single-frame textures;
    // it will just keep frame 0 in that case.
    if (this.sprite.texture.key) {
      this.sprite.setFrame(frameIndex);
    }

    if (this.ssprite.texture.key) {
      this.ssprite.setFrame(frameIndex);
    }
  }

  get id(): number | null {
    return this.tileId;
  }

  setTile(id: number) {
    this.tileId = id;
    let tkey = 't' + id;
    let y = this.by - Grid.OFFSET_Z * this.z;

    this.sprite.setTexture(tkey)
               .setY(y)
               .setDepth((Grid.WIDTH * this.x) + (Grid.HEIGHT * this.y) + (Grid.OFFSET_Z * this.z))
               .setVisible(true);

    this.applyDirectionFrame();

    if (this.grid.anims.has(tkey)) this.sprite.play(tkey);
    else this.sprite.stop();
  }

  setObject(id: number) {
    let okey = 'o' + id;
    let offset = this.grid.offsets.get(okey) ?? 0;
    let y = this.by - (Grid.OFFSET_Z * this.z) - offset;

    this.ssprite.setTexture(okey)
                .setY(y)
                .setDepth(this.sprite.depth + offset)
                .setVisible(true);

    this.applyDirectionFrame();
      
    if (this.grid.anims.has(okey)) this.ssprite.play(okey);
    else this.ssprite.stop();
  }

  set(setter?: OptionalTileSetter) {
    if (!setter) {
      this.sprite.setVisible(false);
      this.ssprite.setVisible(false);
      this.tileId = null;
      this.tileDirection = null;
      this.object = null;
      return;
    }

    if (typeof setter == "object") {
      this.z = setter.z ?? 0;
      this.tileDirection = setter.direction ?? null;
      this.setTile(setter.id);

      this.object = setter.object ?? null;
      setter.object ? this.setObject(setter.object):
                      this.ssprite.setVisible(false);
    } else {
      this.tileDirection = null;
      this.setTile(setter)
    }
  }

}
