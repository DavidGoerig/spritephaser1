import Phaser from 'phaser';

// Element color palette (RGB 0–1)
const ELEMENT_COLORS: Record<string, [number, number, number]> = {
  Feu:        [1.0, 0.35, 0.05],
  Eau:        [0.1, 0.5,  1.0 ],
  Glace:      [0.6, 0.9,  1.0 ],
  Electrique: [1.0, 0.95, 0.1 ],
  Vent:       [0.8, 1.0,  0.8 ],
  Plante:     [0.2, 0.9,  0.2 ],
  Sol:        [0.7, 0.5,  0.2 ],
  Roche:      [0.5, 0.45, 0.4 ],
  Insecte:    [0.6, 0.85, 0.1 ],
  Nuee:       [0.7, 0.6,  0.3 ],
  Psy:        [0.8, 0.2,  1.0 ],
  Tenebres:   [0.3, 0.0,  0.5 ],
  Poison:     [0.3, 0.9,  0.1 ],
  Spectre:    [0.7, 0.8,  1.0 ],
  Gravite:    [0.5, 0.3,  0.8 ],
  Fee:        [1.0, 0.7,  0.9 ],
  Combat:     [0.9, 0.2,  0.1 ],
  Normal:     [0.9, 0.9,  0.9 ],
};

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform float     uTime;
uniform vec3      uAuraColor;
uniform float     uAuraStrength;

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Sample 8 neighbours to detect sprite edge
  float step = 1.0 / 512.0;
  float alpha = 0.0;
  alpha += texture2D(uMainSampler, outTexCoord + vec2(-step,  0.0 )).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2( step,  0.0 )).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2( 0.0, -step)).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2( 0.0,  step)).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2(-step, -step)).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2( step, -step)).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2(-step,  step)).a;
  alpha += texture2D(uMainSampler, outTexCoord + vec2( step,  step)).a;

  // Pulse: 0.6–1.0 oscillation
  float pulse = 0.6 + 0.4 * sin(uTime * 2.0);

  // Aura glow only on transparent pixels adjacent to opaque ones
  float isEdge = step(0.01, alpha) * (1.0 - texColor.a);
  vec4 aura = vec4(uAuraColor, isEdge * uAuraStrength * pulse);

  gl_FragColor = texColor + aura * (1.0 - texColor.a);
}
`;

export class ElementAuraPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _time = 0;
  private _color: [number, number, number] = [1, 1, 1];
  private _strength = 1.0;

  constructor(game: Phaser.Game) {
    super({
      game,
      fragShader: FRAG_SRC,
    });
  }

  onPreRender(): void {
    this._time += 0.016;
    this.set1f('uTime', this._time);
    this.set3f('uAuraColor', ...this._color);
    this.set1f('uAuraStrength', this._strength);
  }

  setElement(element: string, strength = 1.0): this {
    this._color    = ELEMENT_COLORS[element] ?? ELEMENT_COLORS['Normal'];
    this._strength = strength;
    return this;
  }
}

export { ELEMENT_COLORS };
