import Phaser from 'phaser';

// Fog of war: desaturate + darken tiles outside vision range
// Apply to tile sprites; visibility is controlled via uVisibility uniform

const FRAG_SRC = `
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uMainSampler;
uniform float     uVisibility;   // 0.0=fully hidden, 0.5=explored, 1.0=visible
uniform float     uFogColor;     // fog gray level (0=black, 1=white)

varying vec2 outTexCoord;

void main() {
  vec4 texColor = texture2D(uMainSampler, outTexCoord);

  // Luminance for desaturation
  float luma = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));

  // Blend between desaturated-dark and original based on visibility
  // uVisibility=0.5 → explored (dark desaturated)
  // uVisibility=1.0 → fully visible (normal)
  float fogBlend = clamp(1.0 - uVisibility * 2.0, 0.0, 1.0); // 1=hidden, 0=visible
  vec3 foggedRgb = mix(texColor.rgb, vec3(luma * uFogColor), fogBlend);

  // Explored but not visible: keep 50% brightness
  float brightness = mix(uVisibility * 0.5 + 0.5, 1.0, clamp((uVisibility - 0.5) * 2.0, 0.0, 1.0));
  foggedRgb *= brightness;

  // Fully hidden: fully transparent
  float alpha = texColor.a * step(0.01, uVisibility);

  gl_FragColor = vec4(foggedRgb, alpha);
}
`;

export class FogOfWarPipeline extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
  private _visibility = 1.0;
  private _fogColor   = 0.1; // near-black fog

  constructor(game: Phaser.Game) {
    super({ game, fragShader: FRAG_SRC });
  }

  onPreRender(): void {
    this.set1f('uVisibility', this._visibility);
    this.set1f('uFogColor',   this._fogColor);
  }

  /** 0=hidden, 0.5=explored, 1=visible */
  setVisibility(v: number): this {
    this._visibility = Math.max(0, Math.min(1, v));
    return this;
  }

  setFogColor(gray: number): this {
    this._fogColor = gray;
    return this;
  }
}
