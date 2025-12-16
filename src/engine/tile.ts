import Game from "../game";
import Grid from "./grid";
import Phaser from "phaser";

import { calculateIsoScreenPosition } from "../utils/math";
import { Direction, StairDirection, type OptionalTileSetter, type ITile } from "./types";
import { TACTICAL_MODE, TACTICAL_MODE_2, HIGHLIGHT } from "./constants";

export default class Tile implements ITile {
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
  isTopCube: boolean = true;  // Track if this is the top cube at its position (public for interface)
  object: number | null;
  
  // Expose tileId as public property for interface compliance
  get id(): number | null {
    return this.tileId;
  }

  constructor(scene: Game, id: number, x: number, y: number, z?: number) {
    this.x = x;
    this.y = y;
    this.z = z ?? 0;
    this.object = null;
    this.grid = scene.grid;

    // Initial screen position is computed based on the
    // grid's current view direction.
    const [cx, cy] = this.grid.getRenderCartCoords(x, y);
    const [sx, sy] = calculateIsoScreenPosition(cx, cy, 0, Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z);
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
        highlightTint.lighten(HIGHLIGHT.BRIGHTNESS_INCREASE);
        this.sprite.setTint(highlightTint.color);
        this.ssprite.setTint(highlightTint.color);
      } else {
        // Normal mode: use yellow highlight
        this.sprite.setTintFill(HIGHLIGHT.COLOR);
        this.ssprite.setTintFill(HIGHLIGHT.COLOR);
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
      const tint = TACTICAL_MODE.TINT_COLORS[Math.min(this.z, TACTICAL_MODE.TINT_COLORS.length - 1)];
      this.tacticalTint = tint;
      this.sprite.setTint(tint);
      this.ssprite.setTint(tint);

      // Show z-level text label
      if (!this.zLevelText) {
        const [cx, cy] = this.grid.getRenderCartCoords(this.x, this.y);
        const [sx, sy] = calculateIsoScreenPosition(cx, cy, this.z, Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z);

        this.zLevelText = this.grid.sceneInstance.add.text(sx, sy - TACTICAL_MODE.TEXT_OFFSET_Y, `z${this.z}`, {
          fontSize: TACTICAL_MODE.TEXT_FONT_SIZE,
          color: TACTICAL_MODE.TEXT_COLOR,
          stroke: TACTICAL_MODE.TEXT_STROKE,
          strokeThickness: TACTICAL_MODE.TEXT_STROKE_THICKNESS,
        }).setOrigin(0.5).setDepth(this.sprite.depth + TACTICAL_MODE.TEXT_DEPTH_OFFSET);
      }
      if (this.zLevelText) {
        this.zLevelText.setVisible(true);
        this.zLevelText.setPosition(this.sprite.x, this.sprite.y - TACTICAL_MODE.TEXT_OFFSET_Y);
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
        const alpha = Math.min(
          TACTICAL_MODE_2.MIN_ALPHA + (this.z * TACTICAL_MODE_2.ALPHA_INCREMENT),
          TACTICAL_MODE_2.MAX_ALPHA
        );
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
    const [sx, sy] = calculateIsoScreenPosition(cx, cy, 0, Grid.OFFSET_X, Grid.OFFSET_Y, Grid.OFFSET_Z);
    this.by = sy;

    const y = this.by - Grid.OFFSET_Z * this.z;

    this.sprite
      .setX(sx)
      .setY(y)
      .setDepth(cx + cy + (Grid.OFFSET_Z * this.z));

    const offset = this.grid.animationManager.getOffset(this.ssprite.texture.key);
    this.ssprite
      .setX(sx)
      .setY(y - offset)
      .setDepth(this.sprite.depth + offset);

    // Update z-level text position if tactical mode is active
    if (this.zLevelText) {
      this.zLevelText.setPosition(sx, y - TACTICAL_MODE.TEXT_OFFSET_Y);
      this.zLevelText.setDepth(this.sprite.depth + TACTICAL_MODE.TEXT_DEPTH_OFFSET);
    }

    // If your tiles/objects are 4-frame spritesheets
    // ordered [North, East, South, West], this will
    // select the correct frame for the current view.
    this.applyDirectionFrame();
  }

  protected applyDirectionFrame() {
    // Skip frame selection if this tile has an active animation
    // (animations handle their own frame progression)
    const tkey = this.tileId !== null ? 't' + this.tileId : '';
    if (tkey && this.grid.anims.has(tkey) && this.sprite.anims.isPlaying) {
      return; // Let the animation handle frames
    }

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

  setTile(id: number) {
    this.tileId = id;
    const tkey = 't' + id;
    const y = this.by - Grid.OFFSET_Z * this.z;

    // Check if texture exists before setting
    if (!this.grid.sceneInstance.textures.exists(tkey)) {
      console.warn(`Texture '${tkey}' does not exist. Tile may not render correctly.`);
    }

    try {
      this.sprite.setTexture(tkey)
                 .setY(y)
                 .setDepth((Grid.WIDTH * this.x) + (Grid.HEIGHT * this.y) + (Grid.OFFSET_Z * this.z))
                 .setVisible(true);

      this.applyDirectionFrame();

      if (this.grid.animationManager.hasAnimation(tkey)) {
        this.sprite.play(tkey);
      } else {
        this.sprite.stop();
      }
    } catch (error) {
      console.error(`Error setting tile texture '${tkey}':`, error);
    }
  }

  setObject(id: number) {
    const okey = 'o' + id;
    const offset = this.grid.offsets.get(okey) ?? 0;
    const y = this.by - (Grid.OFFSET_Z * this.z) - offset;

    // Check if texture exists before setting
    if (!this.grid.sceneInstance.textures.exists(okey)) {
      console.warn(`Texture '${okey}' does not exist. Object may not render correctly.`);
    }

    try {
      this.ssprite.setTexture(okey)
                  .setY(y)
                  .setDepth(this.sprite.depth + offset)
                  .setVisible(true);

      this.applyDirectionFrame();
        
      if (this.grid.animationManager.hasAnimation(okey)) {
        this.ssprite.play(okey);
      } else {
        this.ssprite.stop();
      }
    } catch (error) {
      console.error(`Error setting object texture '${okey}':`, error);
    }
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
