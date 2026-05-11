import Phaser from 'phaser';

// ── HitFlashPipeline ──────────────────────────────────────────────────────────
// Damage-feedback flash effect. Lerps the sprite toward a solid flash color.
//
// Usage (direct):
//   const p = sprite.getPostPipeline('HitFlashPipeline') as HitFlashPipeline;
//   p.flash(1.0, [1, 0, 0], 8);   // red flash, decays over ~125 ms
//
// Usage (static helper – recommended):
//   HitFlashPipeline.flash(sprite);                     // white, 200 ms
//   HitFlashPipeline.flash(sprite, 0xff3333, 150);      // red, 150 ms

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform float     uFlash;       // 0.0 = original, 1.0 = full flash color
uniform vec3      uFlashColor;  // flash tint (default white)

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);
  if (texColor.a < 0.01) discard;

  // Lerp toward flashColor by uFlash, preserve alpha
  vec3 blended = mix(texColor.rgb, uFlashColor, uFlash);
  gl_FragColor  = vec4(blended, texColor.a);
}
`;

export class HitFlashPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _flash      = 0.0;
  private _flashColor: [number, number, number] = [1, 1, 1];
  private _decaySpeed = 5.0;   // units per second (1/decaySpeed = fade duration in seconds)
  private _active     = false;

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    if (this._active) {
      // Frame-rate-independent decay using the game loop's actual delta
      const dt = (this.game.loop.delta / 1000);
      this._flash -= dt * this._decaySpeed;
      if (this._flash <= 0) {
        this._flash  = 0;
        this._active = false;
      }
    }
    this.set1f('uFlash',      this._flash);
    this.set3f('uFlashColor', ...this._flashColor);
  }

  // ── Instance API ─────────────────────────────────────────────────────────────

  /**
   * Trigger a flash immediately (no tween — decays via onPreRender).
   * @param intensity  0–1, how strongly the flash color overwrites the sprite
   * @param color      RGB 0–1 tuple (default white)
   * @param decaySpeed Units/second for fade-out (default 5 → ~200 ms)
   */
  flash(
    intensity   = 1.0,
    color: [number, number, number] = [1, 1, 1],
    decaySpeed  = 5.0,
  ): void {
    this._flash      = Math.min(1, Math.max(0, intensity));
    this._flashColor = color;
    this._decaySpeed = decaySpeed;
    this._active     = true;
  }

  /** Red hit flash (damage received). */
  hitRed(): void    { this.flash(1.0, [1.0, 0.2, 0.2]); }
  /** White/blue shield-block flash. */
  hitShield(): void { this.flash(0.8, [0.8, 0.9, 1.0]); }
  /** Gold critical-hit flash. */
  hitCrit(): void   { this.flash(1.0, [1.0, 0.9, 0.2]); }
  /** Green heal flash. */
  hitHeal(): void   { this.flash(0.7, [0.2, 1.0, 0.4]); }

  get isFlashing(): boolean { return this._active; }

  // ── Static helper ─────────────────────────────────────────────────────────────

  /**
   * Convenience: apply a tween-driven flash to any game object.
   * Registers the post-pipeline if not already present, then tweens
   * the `uFlash` uniform from 1 → 0 over `duration` milliseconds.
   *
   * @param gameObject  A Phaser GameObject that supports post-pipelines
   * @param color       Hex color (e.g. 0xffffff). Default white.
   * @param duration    Duration in milliseconds. Default 200.
   */
  static flash(
    gameObject: Phaser.GameObjects.Components.PostPipeline &
                Phaser.GameObjects.GameObject,
    color    = 0xffffff,
    duration = 200,
  ): void {
    // Ensure pipeline is attached
    const key = 'HitFlashPipeline';
    let pipeline = (gameObject as Phaser.GameObjects.Sprite)
      .getPostPipeline(key) as HitFlashPipeline | null;

    if (!pipeline) {
      (gameObject as Phaser.GameObjects.Sprite).setPostPipeline(key);
      pipeline = (gameObject as Phaser.GameObjects.Sprite)
        .getPostPipeline(key) as HitFlashPipeline;
    }

    // Convert hex to normalized RGB
    const r = ((color >> 16) & 0xff) / 255;
    const g = ((color >> 8)  & 0xff) / 255;
    const b = ( color        & 0xff) / 255;

    // Set uniform immediately to 1, then tween to 0 via the scene's tween manager
    pipeline._flash      = 1.0;
    pipeline._flashColor = [r, g, b];
    pipeline._active     = false; // tween handles decay, not onPreRender

    const scene = gameObject.scene;
    scene.tweens.add({
      targets:    pipeline,
      _flash:     0,
      duration,
      ease:       'Linear',
      onComplete: () => { pipeline!._flash = 0; },
    });
  }
}
