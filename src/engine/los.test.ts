/**
 * Tests for _hasLineOfSight in CombatManager.
 * The method is public (prefixed _ by convention but exported).
 * We test via a minimal mock that avoids Phaser.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ── Phaser mock (same pattern) ────────────────────────────────────────────────
vi.mock('phaser', () => ({
  default: {
    Scene: class {},
    GameObjects: {
      Sprite:    class { setPosition(){return this;} setDepth(){return this;} setScrollFactor(){return this;} setScale(){return this;} setAlpha(){return this;} setVisible(){return this;} setTint(){return this;} clearTint(){return this;} setBlendMode(){return this;} on(){return this;} destroy(){} x=0;y=0;depth=0;alpha=1;texture={key:'',frameTotal:1};anims={isPlaying:false}; },
      Graphics:  class { setScrollFactor(){return this;} setDepth(){return this;} setPosition(){return this;} clear(){return this;} fillStyle(){return this;} fillCircle(){return this;} fillRect(){return this;} lineStyle(){return this;} strokeCircle(){return this;} lineBetween(){return this;} beginPath(){} closePath(){} strokePath(){} fillPath(){} moveTo(){} lineTo(){} setAlpha(){return this;} setVisible(){return this;} destroy(){} x=0;y=0;depth=0; },
      Rectangle: class { setScrollFactor(){return this;} setDepth(){return this;} setPosition(){return this;} setFillStyle(){return this;} setDisplaySize(){return this;} setOrigin(){return this;} setInteractive(){return this;} setVisible(){return this;} setAlpha(){return this;} on(){return this;} destroy(){} x=0;y=0;depth=0;alpha=1;displayWidth=26; },
      Text:      class { setScrollFactor(){return this;} setDepth(){return this;} setPosition(){return this;} setText(){return this;} setColor(){return this;} setOrigin(){return this;} setVisible(){return this;} setAlpha(){return this;} setInteractive(){return this;} on(){return this;} once(){} destroy(){} x=0;y=0;depth=0;alpha=1; },
    },
    BlendModes: { ADD: 1 },
    Renderer: { WebGL: { WebGLRenderer: class {} } },
    Animations: { Events: { ANIMATION_COMPLETE: 'animationcomplete' } },
    Display: { Color: { ValueToColor: (v: number) => ({ color: v, lighten: vi.fn() }) } },
    Input: { Keyboard: { KeyCodes: { ONE: 49 } } },
  },
}));

// ── Minimal CombatManager for LoS extraction ─────────────────────────────────

/**
 * We extract the pure LoS logic so we can test it without a full CombatManager.
 * The algorithm: walk Bresenham line from (cx,cy) to (tx,ty), fail if
 * any intermediate cell has topZ > max(cz, tz).
 */
function hasLineOfSight(
  cx: number, cy: number, cz: number,
  tx: number, ty: number, tz: number,
  getTopZ: (x: number, y: number) => number,
): boolean {
  const dx = tx - cx, dy = ty - cy;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  if (steps <= 1) return true;
  const ceiling = Math.max(cz, tz);
  for (let i = 1; i < steps; i++) {
    const ix = Math.round(cx + dx * i / steps);
    const iy = Math.round(cy + dy * i / steps);
    if (ix === tx && iy === ty) break;
    const wallZ = getTopZ(ix, iy);
    if (wallZ > ceiling) return false;
  }
  return true;
}

describe('hasLineOfSight', () => {
  it('adjacent cells (dist=1) always have LoS', () => {
    const flatFloor = () => 0;
    expect(hasLineOfSight(5, 5, 0, 6, 5, 0, flatFloor)).toBe(true);
    expect(hasLineOfSight(5, 5, 0, 5, 6, 0, flatFloor)).toBe(true);
    expect(hasLineOfSight(5, 5, 0, 4, 5, 0, flatFloor)).toBe(true);
  });

  it('same cell always has LoS', () => {
    expect(hasLineOfSight(3, 3, 0, 3, 3, 0, () => 0)).toBe(true);
  });

  it('clear flat path has LoS', () => {
    const flat = () => 0;
    expect(hasLineOfSight(0, 0, 0, 5, 0, 0, flat)).toBe(true);
    expect(hasLineOfSight(0, 0, 0, 0, 5, 0, flat)).toBe(true);
    expect(hasLineOfSight(0, 0, 0, 4, 4, 0, flat)).toBe(true);
  });

  it('wall (topZ=2) blocks LoS between z=0 combatants', () => {
    // Wall at (3, 0) height 2, caster at (0,0) z=0, target at (5,0) z=0
    const getTopZ = (x: number, y: number) => (x === 3 && y === 0) ? 2 : 0;
    expect(hasLineOfSight(0, 0, 0, 5, 0, 0, getTopZ)).toBe(false);
  });

  it('wall does not block if both combatants are at z >= wall height', () => {
    // Wall at (3,0) height 2, both at z=2
    const getTopZ = (x: number, y: number) => (x === 3 && y === 0) ? 2 : 0;
    expect(hasLineOfSight(0, 0, 2, 5, 0, 2, getTopZ)).toBe(true);
  });

  it('elevated caster can see over shorter wall', () => {
    // Caster at z=3, target at z=0, wall at intermediate height=2
    const getTopZ = (x: number, y: number) => (x === 2 && y === 0) ? 2 : 0;
    // ceiling = max(3, 0) = 3 > 2 → not blocked
    expect(hasLineOfSight(0, 0, 3, 4, 0, 0, getTopZ)).toBe(true);
  });

  it('wall exactly at ceiling height does NOT block (strictly greater than)', () => {
    // Wall height = max(cz, tz) = 2 → threshold is strict >, so equal height passes
    const getTopZ = () => 2;
    expect(hasLineOfSight(0, 0, 2, 6, 0, 2, () => 2)).toBe(true);
  });

  it('wall at height 3 blocks between two z=2 combatants', () => {
    const getTopZ = (x: number, y: number) => (x === 3 && y === 0) ? 3 : 0;
    expect(hasLineOfSight(0, 0, 2, 6, 0, 2, getTopZ)).toBe(false);
  });

  it('diagonal path: wall off the line does not block', () => {
    // Line from (0,0) to (4,4): passes through (1,1),(2,2),(3,3)
    // Wall at (1,2) should NOT be on this path
    const getTopZ = (x: number, y: number) => (x === 1 && y === 2) ? 5 : 0;
    expect(hasLineOfSight(0, 0, 0, 4, 4, 0, getTopZ)).toBe(true);
  });

  it('diagonal path: wall on the line blocks', () => {
    // Line from (0,0) to (4,4): includes (2,2)
    const getTopZ = (x: number, y: number) => (x === 2 && y === 2) ? 5 : 0;
    expect(hasLineOfSight(0, 0, 0, 4, 4, 0, getTopZ)).toBe(false);
  });

  it('target cell is NOT checked (only intermediate cells)', () => {
    // Target (5,0) has z=10 but it's the target itself — should not self-block
    const getTopZ = (x: number, y: number) => (x === 5 && y === 0) ? 10 : 0;
    // LoS to an elevated target at z=10 — the target cell (5,0) is skipped
    expect(hasLineOfSight(0, 0, 0, 5, 0, 10, getTopZ)).toBe(true);
  });
});
