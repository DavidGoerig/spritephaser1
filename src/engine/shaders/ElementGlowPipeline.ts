import Phaser from 'phaser';

// ── Element color palette ─────────────────────────────────────────────────────
// Normalized RGB (0–1) for all 18 elemental types.
// Mirrors ELEMENT_GLOW_COLORS in index.ts (kept as hex there for external use).

const ELEMENT_COLORS: Record<string, [number, number, number]> = {
  Feu:        [1.000, 0.271, 0.000],  // 0xFF4500
  Eau:        [0.118, 0.565, 1.000],  // 0x1E90FF
  Glace:      [0.000, 1.000, 1.000],  // 0x00FFFF
  Electrique: [1.000, 1.000, 0.000],  // 0xFFFF00
  Plante:     [0.133, 0.545, 0.133],  // 0x228B22
  Sol:        [0.545, 0.271, 0.075],  // 0x8B4513
  Roche:      [0.502, 0.502, 0.502],  // 0x808080
  Vent:       [0.690, 0.769, 0.871],  // 0xB0C4DE
  Dragon:     [0.863, 0.078, 0.235],  // 0xDC143C
  Nuee:       [1.000, 0.392, 0.278],  // 0xFF6347
  Psy:        [0.576, 0.439, 0.859],  // 0x9370DB
  Tenebres:   [0.102, 0.102, 0.102],  // 0x1A1A1A
  Fee:        [1.000, 0.714, 0.757],  // 0xFFB6C1
  Poison:     [0.000, 1.000, 0.000],  // 0x00FF00
  Spectre:    [0.902, 0.902, 0.980],  // 0xE6E6FA
  Gravite:    [0.545, 0.451, 0.333],  // 0x8B7355
  Combat:     [0.545, 0.000, 0.000],  // 0x8B0000
  Normal:     [0.663, 0.663, 0.663],  // 0xA9A9A9
};

// ── ElementGlowPipeline ───────────────────────────────────────────────────────
// Renders an additive elemental aura that pulses outside the sprite silhouette.
//
// Algorithm:
//  1. Sample a ring of 8 neighbours at `uBlurRadius` distance.
//  2. If the current pixel is transparent but a neighbour is opaque → it lies
//     on the glow fringe. Output glow color at intensity modulated by a sin wave.
//  3. Opaque pixels (inside the sprite) are rendered normally with no glow.
//
// Usage:
//   ElementGlowPipeline.applyToSprite(sprite, 'Feu');
//   // In game update loop:
//   ElementGlowPipeline.updateTime(delta);

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform vec3      uGlowColor;       // elemental tint
uniform float     uGlowIntensity;   // master intensity 0–1
uniform float     uPulseSpeed;      // oscillation frequency (rad/s)
uniform float     uTime;            // elapsed seconds
uniform float     uBlurRadius;      // glow fringe width in UV fraction

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // ── Sample 8-connected neighbourhood at blur radius ──────────────────────
  float neighbourAlpha =
      texture2D(uMainSampler, outTexCoord + vec2(-uBlurRadius, -uBlurRadius)).a
    + texture2D(uMainSampler, outTexCoord + vec2( 0.0,         -uBlurRadius)).a
    + texture2D(uMainSampler, outTexCoord + vec2( uBlurRadius, -uBlurRadius)).a
    + texture2D(uMainSampler, outTexCoord + vec2(-uBlurRadius,  0.0        )).a
    + texture2D(uMainSampler, outTexCoord + vec2( uBlurRadius,  0.0        )).a
    + texture2D(uMainSampler, outTexCoord + vec2(-uBlurRadius,  uBlurRadius)).a
    + texture2D(uMainSampler, outTexCoord + vec2( 0.0,          uBlurRadius)).a
    + texture2D(uMainSampler, outTexCoord + vec2( uBlurRadius,  uBlurRadius)).a;

  // ── Pulsing intensity (sin mapped to 0.5–1.0 range) ─────────────────────
  float pulse = 0.5 + 0.5 * sin(uTime * uPulseSpeed);

  // ── Edge mask: transparent pixels adjacent to the sprite silhouette ──────
  float edgeMask = step(0.01, neighbourAlpha) * (1.0 - step(0.01, texColor.a));

  // ── Additive glow layer ───────────────────────────────────────────────────
  vec4 glow = vec4(uGlowColor, edgeMask * uGlowIntensity * pulse);

  // Composite: glow underneath sprite (additive blend on transparent pixels)
  gl_FragColor = texColor + glow * (1.0 - texColor.a);
}
`;

export class ElementGlowPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _glowColor: [number, number, number] = [1, 1, 1];
  private _glowIntensity = 1.0;
  private _pulseSpeed    = 2.0;   // ~one full pulse per π seconds
  private _blurRadius    = 1.5 / 512.0; // ~1.5 px on a 512-wide sheet

  // Shared time counter — advanced by ElementGlowPipeline.updateTime()
  private static _sharedTime = 0;

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    this.set3f('uGlowColor',     ...this._glowColor);
    this.set1f('uGlowIntensity', this._glowIntensity);
    this.set1f('uPulseSpeed',    this._pulseSpeed);
    this.set1f('uTime',          ElementGlowPipeline._sharedTime);
    this.set1f('uBlurRadius',    this._blurRadius);
  }

  // ── Instance configuration ────────────────────────────────────────────────

  /**
   * Set the elemental tint by name.
   * @param element  Key from ELEMENT_COLORS, e.g. 'Feu'
   * @param strength Master intensity multiplier 0–1 (default 1)
   */
  setElement(element: string, strength = 1.0): this {
    this._glowColor     = ELEMENT_COLORS[element] ?? ELEMENT_COLORS['Normal'];
    this._glowIntensity = Math.min(1, Math.max(0, strength));
    return this;
  }

  setGlowColor(r: number, g: number, b: number): this {
    this._glowColor = [r, g, b];
    return this;
  }

  setGlowIntensity(v: number): this {
    this._glowIntensity = Math.min(1, Math.max(0, v));
    return this;
  }

  setPulseSpeed(speed: number): this {
    this._pulseSpeed = speed;
    return this;
  }

  /** Glow fringe width in pixels (assumes 512-px wide source texture). */
  setBlurRadius(px: number, textureWidth = 512): this {
    this._blurRadius = px / textureWidth;
    return this;
  }

  // ── Static helpers ────────────────────────────────────────────────────────

  /**
   * Apply the elemental glow to a sprite and return the pipeline instance.
   * Registers the post-pipeline if not already attached.
   *
   * @param sprite   Target sprite
   * @param element  Elemental name (e.g. 'Feu', 'Eau', …)
   * @param strength Glow intensity 0–1 (default 1)
   */
  static applyToSprite(
    sprite: Phaser.GameObjects.Sprite,
    element: string,
    strength = 1.0,
  ): ElementGlowPipeline {
    const key = 'ElementGlowPipeline';
    sprite.setPostPipeline(key);
    const pipeline = sprite.getPostPipeline(key) as ElementGlowPipeline | null;
    if (!pipeline) throw new Error('ElementGlowPipeline not registered. Call registerAllPipelines() first.');
    pipeline.setElement(element, strength);
    return pipeline;
  }

  /**
   * Advance the shared time counter.
   * Call once per frame from the main scene's update():
   *   ElementGlowPipeline.updateTime(delta);
   *
   * @param delta  Time since last frame in milliseconds (Phaser's `time.delta`)
   */
  static updateTime(delta: number): void {
    ElementGlowPipeline._sharedTime = (ElementGlowPipeline._sharedTime + delta / 1000) % 1000;
  }

  /** Current time value (seconds) shared across all glow pipeline instances. */
  static get time(): number {
    return ElementGlowPipeline._sharedTime;
  }
}

export { ELEMENT_COLORS };
