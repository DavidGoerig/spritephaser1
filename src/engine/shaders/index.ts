import Phaser from 'phaser';
import { OutlinePipeline }      from './OutlinePipeline';
import { HitFlashPipeline }     from './HitFlashPipeline';
import { ElementGlowPipeline }  from './ElementGlowPipeline';
import { ShadowPipeline }       from './ShadowPipeline';

// ── Re-exports ────────────────────────────────────────────────────────────────
export { OutlinePipeline }      from './OutlinePipeline';
export { HitFlashPipeline }     from './HitFlashPipeline';
export { ElementGlowPipeline }  from './ElementGlowPipeline';
export { ShadowPipeline }       from './ShadowPipeline';

// ── Pipeline registration keys ────────────────────────────────────────────────
export const PIPELINE_KEYS = {
  OUTLINE:       'OutlinePipeline',
  HIT_FLASH:     'HitFlashPipeline',
  ELEMENT_GLOW:  'ElementGlowPipeline',
  SHADOW:        'ShadowPipeline',
} as const;

export type PipelineKey = (typeof PIPELINE_KEYS)[keyof typeof PIPELINE_KEYS];

// ── Elemental glow color palette (hex) ───────────────────────────────────────
// These are the canonical hex values used by ElementGlowPipeline.
// The pipeline itself normalizes them to vec3 (0–1) internally.
export const ELEMENT_GLOW_COLORS: Record<string, number> = {
  Feu:        0xFF4500,
  Eau:        0x1E90FF,
  Glace:      0x00FFFF,
  Electrique: 0xFFFF00,
  Plante:     0x228B22,
  Sol:        0x8B4513,
  Roche:      0x808080,
  Vent:       0xB0C4DE,
  Dragon:     0xDC143C,
  Nuee:       0xFF6347,
  Psy:        0x9370DB,
  Tenebres:   0x1A1A1A,
  Fee:        0xFFB6C1,
  Poison:     0x00FF00,
  Spectre:    0xE6E6FA,
  Gravite:    0x8B7355,
  Combat:     0x8B0000,
  Normal:     0xA9A9A9,
} as const;

// ── Pipeline registration ─────────────────────────────────────────────────────

/**
 * Register all custom WebGL post-processing pipelines with Phaser's renderer.
 *
 * Call this once before any game objects try to use a pipeline, for example
 * inside your Scene's `create()` or a boot callback:
 *
 * ```ts
 * import { registerAllPipelines } from './engine/shaders';
 *
 * class GameScene extends Phaser.Scene {
 *   create() {
 *     registerAllPipelines(this);
 *     // ... rest of create
 *   }
 * }
 * ```
 *
 * @param scene  Any live Phaser.Scene (provides access to renderer + game)
 */
export function registerAllPipelines(scene: Phaser.Scene): void {
  const renderer = scene.renderer;
  if (!(renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer)) {
    console.warn('[ShaderIndex] WebGL renderer is not active — pipelines not registered.');
    return;
  }

  const add = (key: string, cls: any) => {
    if (!renderer.pipelines.has(key)) renderer.pipelines.addPostPipeline(key, cls);
  };
  add(PIPELINE_KEYS.OUTLINE,       OutlinePipeline);
  add(PIPELINE_KEYS.HIT_FLASH,     HitFlashPipeline);
  add(PIPELINE_KEYS.ELEMENT_GLOW,  ElementGlowPipeline);
  add(PIPELINE_KEYS.SHADOW,        ShadowPipeline);
}

// ── Convenience helpers ───────────────────────────────────────────────────────

/**
 * Apply an outline preset to a sprite.
 * @param sprite  Target sprite (must have OutlinePipeline registered)
 * @param preset  Color preset name or null to remove
 * @param thickness  Outline width in pixels (default 2)
 */
export function applyOutline(
  sprite: Phaser.GameObjects.Sprite,
  preset: 'white' | 'red' | 'green' | 'yellow' | 'cyan' | null,
  thickness = 2,
): OutlinePipeline | null {
  if (preset === null) {
    sprite.removePostPipeline(PIPELINE_KEYS.OUTLINE);
    return null;
  }
  sprite.setPostPipeline(PIPELINE_KEYS.OUTLINE);
  const p = sprite.getPostPipeline(PIPELINE_KEYS.OUTLINE) as OutlinePipeline;
  p.setThickness(thickness);
  switch (preset) {
    case 'white':  p.setWhite();  break;
    case 'red':    p.setRed();    break;
    case 'green':  p.setGreen();  break;
    case 'yellow': p.setYellow(); break;
    case 'cyan':   p.setCyan();   break;
  }
  return p;
}

/**
 * Apply the elemental glow post-effect to a sprite.
 * @param sprite   Target sprite
 * @param element  Elemental name key (e.g. 'Feu', 'Eau', …)
 * @param strength Glow intensity 0–1 (default 1)
 */
export function applyElementGlow(
  sprite: Phaser.GameObjects.Sprite,
  element: string,
  strength = 1.0,
): ElementGlowPipeline {
  return ElementGlowPipeline.applyToSprite(sprite, element, strength);
}

/**
 * Apply a drop shadow to a sprite.
 * @param sprite  Target sprite
 */
export function applyShadow(sprite: Phaser.GameObjects.Sprite): ShadowPipeline {
  sprite.setPostPipeline(PIPELINE_KEYS.SHADOW);
  const p = sprite.getPostPipeline(PIPELINE_KEYS.SHADOW) as ShadowPipeline;
  p.setDefault();
  return p;
}

/**
 * Trigger a hit-flash on a sprite.
 * Uses the static tween-based helper for a clean, fire-and-forget API.
 *
 * @param sprite    Target sprite
 * @param type      'normal' | 'crit' | 'shield' | 'heal'
 * @param duration  Flash duration in ms (default 200)
 */
export function triggerHitFlash(
  sprite: Phaser.GameObjects.Sprite,
  type: 'normal' | 'crit' | 'shield' | 'heal' = 'normal',
  duration = 200,
): void {
  const colorMap: Record<string, number> = {
    normal: 0xff3333,
    crit:   0xffe633,
    shield: 0xccddff,
    heal:   0x33ff66,
  };
  HitFlashPipeline.flash(sprite, colorMap[type] ?? 0xffffff, duration);
}
