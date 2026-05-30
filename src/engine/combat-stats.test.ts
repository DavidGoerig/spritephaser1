import { describe, it, expect } from 'vitest';
import { CLASS_STATS, PM_REGEN_PER_TURN } from './combat-stats';

const CLASSES = [
  'Juggernaut', 'Gardien', 'Vanguard', 'Battlemage', 'Escrimeur',
  'Enchanteur-Soutien', 'Enchanteur-Capteur', 'Plongeur', 'Assassin',
  'Mage-Burst', 'Tireur', 'Artillerie', 'Spécialiste',
] as const;

describe('CLASS_STATS', () => {
  it('defines stats for every playable class', () => {
    for (const cls of CLASSES) {
      expect(CLASS_STATS[cls], `Missing stats for ${cls}`).toBeDefined();
    }
  });

  it('all pv values are positive integers', () => {
    for (const cls of CLASSES) {
      const { pv } = CLASS_STATS[cls];
      expect(pv, `${cls}.pv`).toBeGreaterThan(0);
      expect(Number.isInteger(pv), `${cls}.pv is integer`).toBe(true);
    }
  });

  it('all pm values are positive integers', () => {
    for (const cls of CLASSES) {
      const { pm } = CLASS_STATS[cls];
      expect(pm, `${cls}.pm`).toBeGreaterThan(0);
      expect(Number.isInteger(pm), `${cls}.pm is integer`).toBe(true);
    }
  });

  it('all moveRange values are between 1 and 8', () => {
    for (const cls of CLASSES) {
      const { moveRange } = CLASS_STATS[cls];
      expect(moveRange, `${cls}.moveRange`).toBeGreaterThanOrEqual(1);
      expect(moveRange, `${cls}.moveRange`).toBeLessThanOrEqual(8);
    }
  });

  it('all initiative values are positive', () => {
    for (const cls of CLASSES) {
      const { initiative } = CLASS_STATS[cls];
      expect(initiative, `${cls}.initiative`).toBeGreaterThan(0);
    }
  });

  it('all baseDamage values are positive', () => {
    for (const cls of CLASSES) {
      const { baseDamage } = CLASS_STATS[cls];
      expect(baseDamage, `${cls}.baseDamage`).toBeGreaterThan(0);
    }
  });

  it('Assassin has higher initiative than Juggernaut (agile > tank)', () => {
    expect(CLASS_STATS['Assassin'].initiative).toBeGreaterThan(
      CLASS_STATS['Juggernaut'].initiative
    );
  });

  it('Juggernaut has higher pv than Mage-Burst (tank > caster)', () => {
    expect(CLASS_STATS['Juggernaut'].pv).toBeGreaterThan(
      CLASS_STATS['Mage-Burst'].pv
    );
  });

  it('Artillerie has higher baseDamage than Juggernaut (glass cannon)', () => {
    expect(CLASS_STATS['Artillerie'].baseDamage).toBeGreaterThan(
      CLASS_STATS['Juggernaut'].baseDamage
    );
  });

  it('Artillerie has more pm than Juggernaut', () => {
    expect(CLASS_STATS['Artillerie'].pm).toBeGreaterThan(
      CLASS_STATS['Juggernaut'].pm
    );
  });

  it('Assassin and Plongeur have higher moveRange than Gardien', () => {
    expect(CLASS_STATS['Assassin'].moveRange).toBeGreaterThan(
      CLASS_STATS['Gardien'].moveRange
    );
    expect(CLASS_STATS['Plongeur'].moveRange).toBeGreaterThan(
      CLASS_STATS['Gardien'].moveRange
    );
  });
});

describe('PM_REGEN_PER_TURN', () => {
  it('is a positive integer', () => {
    expect(PM_REGEN_PER_TURN).toBeGreaterThan(0);
    expect(Number.isInteger(PM_REGEN_PER_TURN)).toBe(true);
  });

  it('is less than the minimum class PM (40 for Juggernaut)', () => {
    // Regen per turn shouldn't exceed min PM pool — that would be degenerate
    const minPM = Math.min(...CLASSES.map(c => CLASS_STATS[c].pm));
    expect(PM_REGEN_PER_TURN).toBeLessThan(minPM);
  });
});
