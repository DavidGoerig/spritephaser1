/**
 * Unit tests for CombatUnit.
 * Uses a lightweight Phaser mock — only the Phaser APIs called during
 * status-effect logic and pure calculations are stubbed.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Hoist mock objects so they're ready before any module loads ───────────────
const MockPipeline = vi.hoisted(() => class {});
const makeGO = vi.hoisted(() => () => {
  const self: Record<string, unknown> = {
    x: 0, y: 0, depth: 0, alpha: 1, displayWidth: 26,
    texture: { key: '', frameTotal: 1 },
    anims: { isPlaying: false },
  };
  const chain = () => self;
  for (const m of [
    'setPosition','setDepth','setScale','setAlpha','setVisible','setFlipX',
    'setScrollFactor','setBlendMode','setTexture','setFrame','setTint','clearTint',
    'setTintFill','setFillStyle','setDisplaySize','setOrigin','setInteractive',
    'setPostPipeline','play','stop','on','clear','fillStyle','fillCircle','fillRect',
    'lineStyle','strokeCircle','lineBetween','strokePath','fillPath','beginPath',
    'closePath','moveTo','lineTo','setBounds','setColor','setText',
  ]) { self[m] = chain; }
  self['getPostPipeline'] = () => null;
  self['destroy'] = () => {};
  self['once']    = () => {};
  self['getBounds'] = () => ({ x: 0, y: 0, width: 64, height: 64 });
  return self;
});

// Mock Phaser pipelines so they don't try to extend a real PostFXPipeline
vi.mock('./pipelines/hit-flash-pipeline',   () => ({ HitFlashPipeline: MockPipeline }));
vi.mock('./pipelines/element-glow-pipeline', () => ({ ElementGlowPipeline: MockPipeline }));

// Phaser namespace global (accessed directly by CharSprite as Phaser.xxx)
vi.stubGlobal('Phaser', {
  Scene: class {},
  GameObjects: {
    Sprite:    class extends Object { constructor() { super(); Object.assign(this, makeGO()); } },
    Graphics:  class extends Object { constructor() { super(); Object.assign(this, makeGO()); } },
    Rectangle: class extends Object { constructor() { super(); Object.assign(this, makeGO()); } },
    Text:      class extends Object { constructor() { super(); Object.assign(this, makeGO()); } },
  },
  BlendModes: { ADD: 1 },
  Renderer: { WebGL: { WebGLRenderer: class {}, Pipelines: { PostFXPipeline: class {} } } },
  Animations: { Events: { ANIMATION_COMPLETE: 'animationcomplete' } },
  Display: { Color: { ValueToColor: (v: number) => ({ color: v, lighten: () => {} }) } },
  Input: { Keyboard: { KeyCodes: { ONE: 49 } } },
});

// Also mock the 'phaser' npm package
vi.mock('phaser', () => ({
  default: {
    Scene: class {},
    BlendModes: { ADD: 1 },
    Renderer: { WebGL: { WebGLRenderer: class {}, Pipelines: { PostFXPipeline: class {} } } },
    Animations: { Events: { ANIMATION_COMPLETE: 'animationcomplete' } },
    Display: { Color: { ValueToColor: (v: number) => ({ color: v, lighten: () => {} }) } },
  },
}));

// ── Scene mock ────────────────────────────────────────────────────────────────
function makeMockScene() {
  return {
    add: {
      sprite:    () => createGOMock(),
      graphics:  () => createGOMock(),
      rectangle: () => createGOMock(),
      text:      () => createGOMock(),
    },
    tweens:  { add: vi.fn(), killTweensOf: vi.fn() },
    time:    { delayedCall: vi.fn() },
    anims:   { create: vi.fn(), exists: vi.fn(() => false), generateFrameNumbers: vi.fn(() => []) },
    textures:{ exists: vi.fn(() => false) },
    cameras: { main: { shake: vi.fn() } },
    renderer: null,
    grid: {
      getRenderCartCoords: vi.fn((x: number, y: number) => [x * 64, y * 64]),
      direction: 0,
      offsets: new Map(),
      anims: new Set(),
      animationManager: { getOffset: vi.fn(() => 0), hasAnimation: vi.fn(() => false) },
    },
  } as unknown as import('../game').default;
}

function createGOMock() {
  const obj: Record<string, unknown> = {
    x: 0, y: 0, depth: 0, alpha: 1, displayWidth: 26,
    texture: { key: 'stub', frameTotal: 1 },
    anims: { isPlaying: false },
  };
  const chain = () => obj;
  // All methods any Phaser game-object subtype might call — all chain back to obj
  for (const m of [
    'setPosition','setDepth','setScale','setAlpha','setVisible','setFlipX',
    'setScrollFactor','setBlendMode','setTint','clearTint','setTintFill',
    'setFillStyle','setDisplaySize','setOrigin','setInteractive',
    'setPostPipeline','setTexture','setFrame','setColor','setBounds',
    // Graphics-specific
    'clear','fillStyle','fillCircle','fillRect','lineStyle','strokeCircle',
    'lineBetween','strokePath','fillPath','beginPath','closePath','moveTo','lineTo',
    // Sprite/Text
    'play','stop','setText',
    // Generic
    'on',
  ]) {
    obj[m] = vi.fn(chain);
  }
  obj['destroy']          = vi.fn();
  obj['once']             = vi.fn();
  obj['getPostPipeline']  = vi.fn(() => null);
  obj['getBounds']        = vi.fn(() => ({ x: 0, y: 0, width: 64, height: 64 }));
  return obj;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
import type { Personnage } from '../data/character-types';
import { ELEMENT_KITS } from '../data/character-kits';

function makePersonnage(overrides: Partial<Personnage> = {}): Personnage {
  return {
    id: 1,
    nom: 'Test',
    element: 'Feu',
    classe: 'Mage-Burst',
    espece: 'Pyriens',
    region: 'Test',
    faction: 'Independant',
    description_physique: '',
    description_personnalite: '',
    position_lore: '',
    style_combat: '',
    modifications_classe: '',
    kit: ELEMENT_KITS['Feu'],
    ...overrides,
  };
}

// Deferred import so mock is applied first
let CombatUnit: typeof import('./combat-unit').CombatUnit;
beforeEach(async () => {
  ({ CombatUnit } = await import('./combat-unit'));
});

function makeUnit(overrides: Partial<Personnage> = {}, team: 0 | 1 = 0) {
  const scene = makeMockScene();
  return new CombatUnit(scene, makePersonnage(overrides), 0, 0, 0, team);
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('CombatUnit — status effects', () => {
  it('starts with no status effects', () => {
    const u = makeUnit();
    expect(u.statusEffects).toHaveLength(0);
  });

  it('addStatus: adds a new effect', () => {
    const u = makeUnit();
    u.addStatus({ type: 'burn', turns: 2, dmgPerTurn: 5 });
    expect(u.hasStatus('burn')).toBe(true);
  });

  it('addStatus: replaces existing effect of the same type', () => {
    const u = makeUnit();
    u.addStatus({ type: 'burn', turns: 1, dmgPerTurn: 5 });
    u.addStatus({ type: 'burn', turns: 3, dmgPerTurn: 10 });
    const effects = u.statusEffects.filter(e => e.type === 'burn');
    expect(effects).toHaveLength(1);
    expect((effects[0] as { dmgPerTurn: number }).dmgPerTurn).toBe(10);
  });

  it('hasStatus: returns false for absent effect', () => {
    const u = makeUnit();
    expect(u.hasStatus('freeze')).toBe(false);
  });

  it('hasStatus: returns true for present effect', () => {
    const u = makeUnit();
    u.addStatus({ type: 'freeze', turns: 1 });
    expect(u.hasStatus('freeze')).toBe(true);
  });

  it('removeStatus: removes the effect', () => {
    const u = makeUnit();
    u.addStatus({ type: 'poison', turns: 3, dmgPerTurn: 8 });
    u.removeStatus('poison');
    expect(u.hasStatus('poison')).toBe(false);
  });

  it('removeStatus: is a no-op when effect absent', () => {
    const u = makeUnit();
    expect(() => u.removeStatus('stun')).not.toThrow();
  });

  it('multiple distinct effects coexist', () => {
    const u = makeUnit();
    u.addStatus({ type: 'burn', turns: 2, dmgPerTurn: 5 });
    u.addStatus({ type: 'wet',  turns: 1 });
    expect(u.hasStatus('burn')).toBe(true);
    expect(u.hasStatus('wet')).toBe(true);
    expect(u.statusEffects).toHaveLength(2);
  });

  it('removing one effect leaves others intact', () => {
    const u = makeUnit();
    u.addStatus({ type: 'burn',  turns: 2, dmgPerTurn: 5 });
    u.addStatus({ type: 'slow',  turns: 2 });
    u.removeStatus('burn');
    expect(u.hasStatus('burn')).toBe(false);
    expect(u.hasStatus('slow')).toBe(true);
  });

  it('shield effect can absorb partial damage', () => {
    const u = makeUnit();
    u.addStatus({ type: 'shield', turns: 3, amount: 20 });
    u.takeDamage(10);
    // Shield had 20, absorbed 10 → shield amount = 10, no HP loss
    const shield = u.statusEffects.find(e => e.type === 'shield') as { amount: number } | undefined;
    expect(shield).toBeDefined();
    expect(shield!.amount).toBe(10);
    expect(u.currentPV).toBe(u.maxPV); // no HP lost
  });

  it('shield is removed when fully depleted', () => {
    const u = makeUnit();
    u.addStatus({ type: 'shield', turns: 3, amount: 5 });
    u.takeDamage(10);
    expect(u.hasStatus('shield')).toBe(false);
    // Remaining 5 damage should hit HP
    expect(u.currentPV).toBe(u.maxPV - 5);
  });
});

describe('CombatUnit — PM management', () => {
  it('starts with full PM', () => {
    const u = makeUnit();
    expect(u.currentPM).toBe(u.maxPM);
  });

  it('spendPM returns true and deducts when sufficient', () => {
    const u = makeUnit();
    const before = u.currentPM;
    const ok = u.spendPM(5);
    expect(ok).toBe(true);
    expect(u.currentPM).toBe(before - 5);
  });

  it('spendPM returns false and does NOT deduct when insufficient', () => {
    const u = makeUnit();
    u.currentPM = 3;
    const ok = u.spendPM(5);
    expect(ok).toBe(false);
    expect(u.currentPM).toBe(3);
  });

  it('spendPM(0) always succeeds', () => {
    const u = makeUnit();
    u.currentPM = 0;
    expect(u.spendPM(0)).toBe(true);
  });
});

describe('CombatUnit — HP management', () => {
  it('takeDamage reduces HP', () => {
    const u = makeUnit();
    const before = u.currentPV;
    u.takeDamage(30);
    expect(u.currentPV).toBe(before - 30);
  });

  it('takeDamage does not drop HP below 0', () => {
    const u = makeUnit();
    u.takeDamage(u.maxPV + 1000);
    expect(u.currentPV).toBe(0);
  });

  it('isAlive becomes false at 0 HP', () => {
    const u = makeUnit();
    u.takeDamage(u.maxPV);
    expect(u.isAlive).toBe(false);
  });

  it('heal increases HP', () => {
    const u = makeUnit();
    u.takeDamage(50);
    const before = u.currentPV;
    u.heal(20);
    expect(u.currentPV).toBe(before + 20);
  });

  it('heal does not exceed maxPV', () => {
    const u = makeUnit();
    u.heal(1000);
    expect(u.currentPV).toBe(u.maxPV);
  });
});

describe('CombatUnit — move range', () => {
  it('getEffectiveMoveRange returns base when no slow/weighted', () => {
    const u = makeUnit();
    expect(u.getEffectiveMoveRange(4)).toBe(4);
  });

  it('getEffectiveMoveRange halves range when slowed', () => {
    const u = makeUnit();
    u.addStatus({ type: 'slow', turns: 2 });
    expect(u.getEffectiveMoveRange(4)).toBe(2);
  });

  it('getEffectiveMoveRange halves range when weighted', () => {
    const u = makeUnit();
    u.addStatus({ type: 'weighted', turns: 2 });
    expect(u.getEffectiveMoveRange(4)).toBe(2);
  });

  it('halved range is at least 1', () => {
    const u = makeUnit();
    u.addStatus({ type: 'slow', turns: 2 });
    expect(u.getEffectiveMoveRange(1)).toBe(1);
  });
});

describe('CombatUnit — getSort', () => {
  it('returns a sort for slot 0', () => {
    const u = makeUnit();
    const sort = u.getSort(0);
    expect(sort).toBeDefined();
    expect(sort.nom).toBeTruthy();
  });

  it('slot out of range returns the last sort (clamp)', () => {
    const u = makeUnit();
    const lastIdx = u.personnage.kit.sorts.length - 1;
    const last = u.getSort(lastIdx);
    const over = u.getSort(999);
    expect(over.nom).toBe(last.nom);
  });
});

describe('CombatUnit — beginTurn cooldown decay', () => {
  it('cooldowns decrease by 1 each turn', () => {
    const u = makeUnit();
    u.cooldowns[0] = 3;
    u.cooldowns[1] = 1;
    u.beginTurn();
    expect(u.cooldowns[0]).toBe(2);
    expect(u.cooldowns[1]).toBe(0);
  });

  it('cooldowns do not go negative', () => {
    const u = makeUnit();
    u.cooldowns[0] = 0;
    u.beginTurn();
    expect(u.cooldowns[0]).toBe(0);
  });

  it('hasMoved and hasActed reset on beginTurn', () => {
    const u = makeUnit();
    u.hasMoved = true;
    u.hasActed = true;
    u.beginTurn();
    expect(u.hasMoved).toBe(false);
    expect(u.hasActed).toBe(false);
  });
});
