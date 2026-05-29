/**
 * PostFX pipeline that adds an elemental color glow to the unit sprite.
 * Pulsing sine wave driven by game time. Set glowAmount = 0 to disable.
 */
export class ElementGlowPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  glowAmount = 0.28;   // base intensity (always-on subtle glow)
  glowR = 1;
  glowG = 1;
  glowB = 1;

  constructor(game: Phaser.Game) {
    super({
      game,
      name: 'ElementGlowPipeline',
      fragShader: `
        precision mediump float;
        uniform sampler2D uMainSampler;
        uniform float uTime;
        uniform float uGlow;
        uniform float uGlowR;
        uniform float uGlowG;
        uniform float uGlowB;
        varying vec2 outTexCoord;
        void main() {
          vec4 c = texture2D(uMainSampler, outTexCoord);
          if (c.a < 0.01) { gl_FragColor = c; return; }
          float pulse = 0.6 + 0.4 * sin(uTime * 3.14159);
          vec3 glow = vec3(uGlowR, uGlowG, uGlowB) * uGlow * pulse * 0.5;
          gl_FragColor = vec4(clamp(c.rgb + glow, 0.0, 1.0), c.a);
        }
      `,
    });
  }

  onDraw(renderTarget: Phaser.Renderer.WebGL.RenderTarget): void {
    // game.loop.time is ms since start — scale to ~2 cycles/sec
    this.set1f('uTime', this.game.loop.time * 0.002);
    this.set1f('uGlow', this.glowAmount);
    this.set1f('uGlowR', this.glowR);
    this.set1f('uGlowG', this.glowG);
    this.set1f('uGlowB', this.glowB);
    this.bindAndDraw(renderTarget);
  }

  /** Set element color from a hex integer (e.g. 0xFF4400). */
  setElementColor(hex: number): void {
    this.glowR = ((hex >> 16) & 0xFF) / 255;
    this.glowG = ((hex >>  8) & 0xFF) / 255;
    this.glowB = ( hex        & 0xFF) / 255;
  }
}
