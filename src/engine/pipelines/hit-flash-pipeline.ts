/**
 * PostFX pipeline that flashes a unit white (or element color) on hit.
 * Each game object gets its own instance — set flashAmount externally via tween.
 */
export class HitFlashPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  flashAmount = 0;           // 0.0 = normal, 1.0 = full flash
  flashR = 1;
  flashG = 1;
  flashB = 1;

  constructor(game: Phaser.Game) {
    super({
      game,
      name: 'HitFlashPipeline',
      fragShader: `
        precision mediump float;
        uniform sampler2D uMainSampler;
        uniform float uFlash;
        uniform float uFlashR;
        uniform float uFlashG;
        uniform float uFlashB;
        varying vec2 outTexCoord;
        void main() {
          vec4 c = texture2D(uMainSampler, outTexCoord);
          if (c.a < 0.01) { gl_FragColor = c; return; }
          vec3 fc = vec3(uFlashR, uFlashG, uFlashB);
          gl_FragColor = vec4(mix(c.rgb, fc, uFlash), c.a);
        }
      `,
    });
  }

  onDraw(renderTarget: Phaser.Renderer.WebGL.RenderTarget): void {
    this.set1f('uFlash', this.flashAmount);
    this.set1f('uFlashR', this.flashR);
    this.set1f('uFlashG', this.flashG);
    this.set1f('uFlashB', this.flashB);
    this.bindAndDraw(renderTarget);
  }
}
