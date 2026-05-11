import Phaser from 'phaser';

// ── OutlinePipeline ───────────────────────────────────────────────────────────
// Draws a colored outline around a sprite by sampling 8 surrounding pixels.
// A pixel is drawn as outline if it is transparent but at least one of its
// 8-connected neighbours is opaque.
//
// Usage (PostFX API):
//   sprite.setPostPipeline('OutlinePipeline');
//   const p = sprite.getPostPipeline('OutlinePipeline') as OutlinePipeline;
//   p.setOutline(1, 0, 0);          // red outline
//   p.setThickness(2);              // 2-px width
//
// The legacy SinglePipeline uniform API is also forwarded for compatibility:
//   sprite.getPostPipeline('OutlinePipeline').set1f('uThickness', 2);

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform vec3      uOutlineColor;
uniform float     uOutlineAlpha;
uniform float     uThickness;      // outline width in pixels (UV-space scale)
uniform vec2      uResolution;     // sprite/texture dimensions in pixels

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // One texel size
  vec2 px = uThickness / uResolution;

  // Sample all 8 surrounding pixels
  float neighbourAlpha =
      texture2D(uMainSampler, outTexCoord + vec2(-px.x, -px.y)).a
    + texture2D(uMainSampler, outTexCoord + vec2( 0.0,  -px.y)).a
    + texture2D(uMainSampler, outTexCoord + vec2( px.x, -px.y)).a
    + texture2D(uMainSampler, outTexCoord + vec2(-px.x,  0.0 )).a
    + texture2D(uMainSampler, outTexCoord + vec2( px.x,  0.0 )).a
    + texture2D(uMainSampler, outTexCoord + vec2(-px.x,  px.y)).a
    + texture2D(uMainSampler, outTexCoord + vec2( 0.0,   px.y)).a
    + texture2D(uMainSampler, outTexCoord + vec2( px.x,  px.y)).a;

  // Outline pixel: this texel is transparent but touches an opaque neighbour
  bool isOutline = (texColor.a < 0.01) && (neighbourAlpha > 0.0);

  if (isOutline) {
    gl_FragColor = vec4(uOutlineColor, uOutlineAlpha);
  } else {
    gl_FragColor = texColor;
  }
}
`;

export class OutlinePipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _color: [number, number, number] = [1, 1, 1];
  private _alpha     = 1.0;
  private _thickness = 2.0;    // default 2 px
  private _resX      = 512.0;  // texture width  (update via setResolution)
  private _resY      = 256.0;  // texture height

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    this.set3f('uOutlineColor', ...this._color);
    this.set1f('uOutlineAlpha', this._alpha);
    this.set1f('uThickness',    this._thickness);
    this.set2f('uResolution',   this._resX, this._resY);
  }

  // ── Public API ──────────────────────────────────────────────────────────────

  /** Set outline RGBA (r,g,b in 0–1 range). */
  setOutline(r: number, g: number, b: number, a = 1.0): this {
    this._color = [r, g, b];
    this._alpha = a;
    return this;
  }

  /** Outline width in pixels. Default 2. */
  setThickness(px: number): this {
    this._thickness = px;
    return this;
  }

  /** Override texture dimensions when the source texture is not 512×256. */
  setResolution(width: number, height: number): this {
    this._resX = width;
    this._resY = height;
    return this;
  }

  // ── Presets ─────────────────────────────────────────────────────────────────

  /** White selection outline */
  setWhite(): this  { return this.setOutline(1.0, 1.0, 1.0); }
  /** Red enemy targeting outline */
  setRed(): this    { return this.setOutline(1.0, 0.2, 0.2); }
  /** Green ally outline */
  setGreen(): this  { return this.setOutline(0.2, 1.0, 0.2); }
  /** Yellow hover-state outline */
  setYellow(): this { return this.setOutline(1.0, 0.9, 0.1); }
  /** Cyan self-selection outline */
  setCyan(): this   { return this.setOutline(0.1, 0.9, 1.0); }
}
