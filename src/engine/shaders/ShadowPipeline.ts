import Phaser from 'phaser';

// ── ShadowPipeline ────────────────────────────────────────────────────────────
// Isometric drop shadow rendered as a PostFX pass.
//
// Because PostFX pipelines operate on the sprite's own render texture, the
// "shadow" is computed by sampling the sprite's alpha channel at a coordinate
// that is reverse-projected from the shadow offset and isometric shear.
// The result is a darkened, slightly blurred blob offset to the bottom-right
// of the sprite, composited beneath the original pixels.
//
// Parameters:
//   uShadowColor  – RGB tint of the shadow (default black [0,0,0])
//   uShadowAlpha  – shadow opacity       (default 0.4)
//   uOffsetX      – horizontal shift in UV units (positive → right)
//   uOffsetY      – vertical   shift in UV units (positive → down)
//   uShearX       – isometric skew factor (default 0.3)
//
// Usage:
//   sprite.setPostPipeline('ShadowPipeline');
//   const p = sprite.getPostPipeline('ShadowPipeline') as ShadowPipeline;
//   p.setShadow(0, 0, 0, 0.4, 0.12, 0.18);

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform vec3      uShadowColor;   // shadow tint (default black)
uniform float     uShadowAlpha;   // overall shadow opacity 0–1
uniform float     uOffsetX;       // UV horizontal offset for shadow placement
uniform float     uOffsetY;       // UV vertical   offset for shadow placement
uniform float     uShearX;        // isometric horizontal shear

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // ── First pass: compute shadow contribution at this pixel ────────────────
  // Reverse-map: find which source pixel casts shadow here.
  // Shadow UV = source UV + offset + shear*(1-sourceUV.y)
  // → source UV = (current UV - offset) / (1 + shearX effect)
  vec2 shadowUV = outTexCoord - vec2(uOffsetX, uOffsetY);
  // Apply inverse of horizontal shear: src.x = shadow.x - shearX*(1-shadow.y)
  shadowUV.x -= uShearX * (1.0 - shadowUV.y);

  float shadowAlpha = 0.0;
  if (shadowUV.x >= 0.0 && shadowUV.x <= 1.0 &&
      shadowUV.y >= 0.0 && shadowUV.y <= 1.0) {
    shadowAlpha = texture2D(uMainSampler, shadowUV).a;
  }

  // Shadow color with soft edge
  vec4 shadow = vec4(uShadowColor, shadowAlpha * uShadowAlpha);

  // ── Composite: shadow beneath sprite ─────────────────────────────────────
  // Where the sprite is opaque, show sprite. Where transparent, show shadow.
  vec4 result = texColor + shadow * (1.0 - texColor.a);

  gl_FragColor = result;
}
`;

export class ShadowPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  // Isometric drop-shadow defaults
  private _shadowColor: [number, number, number] = [0.0, 0.0, 0.0];
  private _shadowAlpha = 0.4;
  private _offsetX     = 0.12;   // UV rightward shift
  private _offsetY     = 0.18;   // UV downward  shift
  private _shearX      = 0.3;    // isometric skew

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    this.set3f('uShadowColor', ...this._shadowColor);
    this.set1f('uShadowAlpha', this._shadowAlpha);
    this.set1f('uOffsetX',     this._offsetX);
    this.set1f('uOffsetY',     this._offsetY);
    this.set1f('uShearX',      this._shearX);
  }

  // ── Configuration API ─────────────────────────────────────────────────────

  /**
   * Configure the shadow appearance.
   * @param r,g,b       Shadow color in 0–1 range (default black)
   * @param alpha       Shadow opacity 0–1
   * @param offsetX     Horizontal UV offset (positive = rightward)
   * @param offsetY     Vertical   UV offset (positive = downward)
   * @param shearX      Isometric skew factor (0 = no skew, 0.3 typical)
   */
  setShadow(
    r       = 0.0,
    g       = 0.0,
    b       = 0.0,
    alpha   = 0.4,
    offsetX = 0.12,
    offsetY = 0.18,
    shearX  = 0.3,
  ): this {
    this._shadowColor = [r, g, b];
    this._shadowAlpha = Math.min(1, Math.max(0, alpha));
    this._offsetX     = offsetX;
    this._offsetY     = offsetY;
    this._shearX      = shearX;
    return this;
  }

  setShadowColor(r: number, g: number, b: number): this {
    this._shadowColor = [r, g, b];
    return this;
  }

  setShadowAlpha(alpha: number): this {
    this._shadowAlpha = Math.min(1, Math.max(0, alpha));
    return this;
  }

  setShadowOffset(x: number, y: number): this {
    this._offsetX = x;
    this._offsetY = y;
    return this;
  }

  setShadowShear(shearX: number): this {
    this._shearX = shearX;
    return this;
  }

  /** Preset: standard isometric drop shadow */
  setDefault(): this {
    return this.setShadow(0, 0, 0, 0.4, 0.12, 0.18, 0.3);
  }

  /** Preset: subtle soft shadow */
  setSoft(): this {
    return this.setShadow(0.1, 0.05, 0.15, 0.25, 0.08, 0.12, 0.2);
  }
}
