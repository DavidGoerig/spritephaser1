import Phaser from 'phaser';

// Selection highlight: pulsing colored glow rendered under the sprite feet
// Used for selected units in tactical mode

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform float     uTime;
uniform vec3      uSelectColor;
uniform float     uRadius;   // selection circle radius in UV space

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Selection circle at sprite bottom-center
  vec2 center = vec2(0.5, 0.85);
  float dist  = length((outTexCoord - center) * vec2(1.0, 0.5)); // ellipse

  float ring  = smoothstep(uRadius + 0.02, uRadius, dist)
              * smoothstep(uRadius - 0.06, uRadius, dist);

  float pulse = 0.5 + 0.5 * sin(uTime * 3.0);
  vec4 glow   = vec4(uSelectColor, ring * (0.6 + 0.4 * pulse));

  // Composite: glow under sprite
  gl_FragColor = texColor + glow * (1.0 - texColor.a);
}
`;

export class SelectionPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _time   = 0;
  private _color: [number, number, number] = [0.2, 0.9, 1.0]; // cyan default
  private _radius = 0.25;

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    this._time += 0.016;
    this.set1f('uTime', this._time);
    this.set3f('uSelectColor', ...this._color);
    this.set1f('uRadius', this._radius);
  }

  /** Ally: cyan, Enemy: red, Neutral: yellow */
  setMode(mode: 'ally' | 'enemy' | 'neutral' | 'self'): this {
    switch (mode) {
      case 'self':    this._color = [0.2, 1.0, 0.3]; break;
      case 'ally':    this._color = [0.2, 0.8, 1.0]; break;
      case 'enemy':   this._color = [1.0, 0.2, 0.2]; break;
      case 'neutral': this._color = [1.0, 0.9, 0.2]; break;
    }
    return this;
  }

  setRadius(r: number): this {
    this._radius = r;
    return this;
  }
}
