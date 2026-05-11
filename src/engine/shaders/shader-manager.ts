import Phaser from 'phaser';
import { ElementAuraPipeline }  from './ElementAuraPipeline';
import { ElementGlowPipeline }  from './ElementGlowPipeline';
import { HitFlashPipeline }     from './HitFlashPipeline';
import { OutlinePipeline }      from './OutlinePipeline';
import { ShadowPipeline }       from './ShadowPipeline';
import { SelectionPipeline }    from './SelectionPipeline';
import { FogOfWarPipeline }     from './FogOfWarPipeline';

export { ElementGlowPipeline }  from './ElementGlowPipeline';

export const PIPELINE_KEYS = {
  ELEMENT_AURA:  'ElementAura',
  ELEMENT_GLOW:  'ElementGlow',
  HIT_FLASH:     'HitFlash',
  OUTLINE:       'Outline',
  SHADOW:        'Shadow',
  SELECTION:     'Selection',
  FOG_OF_WAR:    'FogOfWar',
} as const;

export type PipelineKey = (typeof PIPELINE_KEYS)[keyof typeof PIPELINE_KEYS];

/**
 * Register all custom WebGL pipelines with the Phaser renderer.
 * Call once from your Scene's create() or the Game's boot callback.
 */
export function registerShaderPipelines(game: Phaser.Game): void {
  const renderer = game.renderer;
  if (!(renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer)) {
    console.warn('[ShaderManager] WebGL renderer not active — shaders disabled');
    return;
  }

  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.ELEMENT_AURA,  ElementAuraPipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.ELEMENT_GLOW,  ElementGlowPipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.HIT_FLASH,     HitFlashPipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.OUTLINE,       OutlinePipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.SHADOW,        ShadowPipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.SELECTION,     SelectionPipeline);
  renderer.pipelines.addPostPipeline(PIPELINE_KEYS.FOG_OF_WAR,    FogOfWarPipeline);
}

// ── Per-sprite helper functions ───────────────────────────────────────────────

/**
 * Apply the element aura glow to a sprite.
 * element: 'Feu' | 'Eau' | 'Glace' | … (matches ELEMENT_COLORS keys)
 */
export function applyAura(
  sprite: Phaser.GameObjects.Sprite,
  element: string,
  strength = 1.0
): ElementAuraPipeline {
  sprite.setPostPipeline(PIPELINE_KEYS.ELEMENT_AURA);
  const pipeline = sprite.getPostPipeline(PIPELINE_KEYS.ELEMENT_AURA) as ElementAuraPipeline;
  pipeline.setElement(element, strength);
  return pipeline;
}

/** Trigger a hit flash on a sprite. Call on damage received. */
export function triggerHitFlash(
  sprite: Phaser.GameObjects.Sprite,
  type: 'normal' | 'crit' | 'shield' = 'normal'
): void {
  let pipeline = sprite.getPostPipeline(PIPELINE_KEYS.HIT_FLASH) as HitFlashPipeline | null;
  if (!pipeline) {
    sprite.setPostPipeline(PIPELINE_KEYS.HIT_FLASH);
    pipeline = sprite.getPostPipeline(PIPELINE_KEYS.HIT_FLASH) as HitFlashPipeline;
  }
  switch (type) {
    case 'crit':   pipeline.hitCrit();   break;
    case 'shield': pipeline.hitShield(); break;
    default:       pipeline.hitRed();    break;
  }
}

/** Apply pixel outline to a sprite. Pass null to remove. */
export function setOutline(
  sprite: Phaser.GameObjects.Sprite,
  preset: 'white' | 'red' | 'green' | 'yellow' | null
): void {
  if (preset === null) {
    sprite.resetPostPipeline();
    return;
  }
  sprite.setPostPipeline(PIPELINE_KEYS.OUTLINE);
  const p = sprite.getPostPipeline(PIPELINE_KEYS.OUTLINE) as OutlinePipeline;
  switch (preset) {
    case 'white':  p.setWhite();  break;
    case 'red':    p.setRed();    break;
    case 'green':  p.setGreen();  break;
    case 'yellow': p.setYellow(); break;
  }
}

/** Apply selection ring beneath a unit. */
export function setSelection(
  sprite: Phaser.GameObjects.Sprite,
  mode: 'ally' | 'enemy' | 'neutral' | 'self' | null
): void {
  if (mode === null) {
    sprite.resetPostPipeline();
    return;
  }
  sprite.setPostPipeline(PIPELINE_KEYS.SELECTION);
  const p = sprite.getPostPipeline(PIPELINE_KEYS.SELECTION) as SelectionPipeline;
  p.setMode(mode);
}

/** Set fog of war visibility on a tile sprite. 0=hidden, 0.5=explored, 1=visible */
export function setFogVisibility(sprite: Phaser.GameObjects.Sprite, visibility: number): void {
  if (visibility >= 1.0) {
    sprite.resetPostPipeline();
    return;
  }
  sprite.setPostPipeline(PIPELINE_KEYS.FOG_OF_WAR);
  const p = sprite.getPostPipeline(PIPELINE_KEYS.FOG_OF_WAR) as FogOfWarPipeline;
  p.setVisibility(visibility);
}
