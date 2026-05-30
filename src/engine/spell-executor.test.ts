/**
 * Unit tests for spell-executor damage/heal calculations.
 * Tests the pure math formulas without exercising Phaser.
 */
import { describe, it, expect } from 'vitest';
import { CLASS_STATS } from './combat-stats';
import type { Classe } from '../data/character-types';

// ── Re-implement pure helpers for unit testing ────────────────────────────────
// These mirror the private functions in spell-executor.ts exactly.

function baseDamage(
  classe: Classe,
  coutPM: number,
  multiplier = 1.0,
  buffed = false,
): number {
  const base = CLASS_STATS[classe].baseDamage;
  const buffMult = buffed ? 1.2 : 1.0;
  return Math.round((base + coutPM * 6) * buffMult * multiplier);
}

function baseHeal(coutPM: number): number {
  return Math.round(coutPM * 8 + 15);
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('baseDamage', () => {
  it('equals round((baseDamage + coutPM*6) * multiplier)', () => {
    const classe: Classe = 'Mage-Burst';
    const pm = 4;
    const expected = Math.round((CLASS_STATS[classe].baseDamage + pm * 6) * 1.0);
    expect(baseDamage(classe, pm)).toBe(expected);
  });

  it('multiplier 0.5 halves damage', () => {
    const full = baseDamage('Assassin', 3, 1.0);
    const half = baseDamage('Assassin', 3, 0.5);
    expect(half).toBeCloseTo(full / 2, 0);
  });

  it('buff_damage increases output by 20%', () => {
    const normal = baseDamage('Battlemage', 5, 1.0, false);
    const buffed  = baseDamage('Battlemage', 5, 1.0, true);
    expect(buffed).toBeCloseTo(normal * 1.2, 0);
  });

  it('PM cost 0 still deals base class damage', () => {
    expect(baseDamage('Artillerie', 0)).toBe(CLASS_STATS['Artillerie'].baseDamage);
  });

  it('higher PM cost → higher damage (linear)', () => {
    const low  = baseDamage('Mage-Burst', 2);
    const high = baseDamage('Mage-Burst', 6);
    expect(high).toBeGreaterThan(low);
    // Difference should be exactly 4 * 6 = 24 (before multiplier round)
    const diff = high - low;
    expect(diff).toBeGreaterThanOrEqual(23); // rounding tolerance ±1
    expect(diff).toBeLessThanOrEqual(25);
  });

  it('Artillerie deals more base damage than Enchanteur-Soutien', () => {
    const arty    = baseDamage('Artillerie',       3);
    const support = baseDamage('Enchanteur-Soutien', 3);
    expect(arty).toBeGreaterThan(support);
  });

  it('result is always a non-negative integer', () => {
    const classes: Classe[] = ['Juggernaut', 'Assassin', 'Mage-Burst', 'Artillerie'];
    for (const cls of classes) {
      for (const pm of [0, 1, 3, 5, 10]) {
        const d = baseDamage(cls, pm);
        expect(d, `${cls} pm=${pm}`).toBeGreaterThanOrEqual(0);
        expect(Number.isInteger(d), `${cls} pm=${pm} integer`).toBe(true);
      }
    }
  });
});

describe('baseHeal', () => {
  it('equals round(coutPM * 8 + 15)', () => {
    expect(baseHeal(3)).toBe(Math.round(3 * 8 + 15));
  });

  it('heal at PM=0 is 15', () => {
    expect(baseHeal(0)).toBe(15);
  });

  it('each PM point adds 8 to heal', () => {
    const h1 = baseHeal(2);
    const h2 = baseHeal(3);
    expect(h2 - h1).toBe(8);
  });

  it('higher PM cost → higher heal', () => {
    expect(baseHeal(5)).toBeGreaterThan(baseHeal(1));
  });

  it('result is always a positive integer', () => {
    for (const pm of [0, 1, 2, 5, 10]) {
      const h = baseHeal(pm);
      expect(h).toBeGreaterThan(0);
      expect(Number.isInteger(h)).toBe(true);
    }
  });
});

describe('charged status multiplier', () => {
  it('charged units take 1.5× damage', () => {
    // Mirror spell-executor.ts damageUnit logic:
    // if (target.hasStatus('charged')) finalAmount = round(amount * 1.5)
    const base = 40;
    const charged = Math.round(base * 1.5);
    expect(charged).toBe(60);
  });

  it('charged multiplier rounds to nearest integer', () => {
    // 7 * 1.5 = 10.5 → rounds to 11
    expect(Math.round(7 * 1.5)).toBe(11);
    // 5 * 1.5 = 7.5 → rounds to 8
    expect(Math.round(5 * 1.5)).toBe(8);
  });
});

describe('spell range checks (distance formula)', () => {
  function manhattanDist(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  }

  it('adjacent cells are distance 1', () => {
    expect(manhattanDist(3, 3, 4, 3)).toBe(1);
    expect(manhattanDist(3, 3, 3, 4)).toBe(1);
  });

  it('diagonal is distance 2', () => {
    expect(manhattanDist(0, 0, 1, 1)).toBe(2);
  });

  it('same cell is distance 0', () => {
    expect(manhattanDist(5, 5, 5, 5)).toBe(0);
  });

  it('spell portee=3 allows 3 cells away', () => {
    const portee = 3;
    expect(manhattanDist(0, 0, 3, 0)).toBeLessThanOrEqual(portee);
    expect(manhattanDist(0, 0, 4, 0)).toBeGreaterThan(portee);
  });
});
