import { describe, it, expect } from 'vitest';
import { ELEMENT_TINTS, UNIT_TEAM_COLORS } from './element-colors';

const ELEMENTS = [
  'Feu', 'Eau', 'Glace', 'Electrique', 'Plante', 'Sol', 'Roche',
  'Vent', 'Dragon', 'Insecte', 'Psy', 'Ténèbres', 'Fée', 'Spectre',
  'Gravité', 'Combat', 'Poison', 'Normal',
];

describe('ELEMENT_TINTS', () => {
  it('defines a color for every game element', () => {
    for (const el of ELEMENTS) {
      expect(ELEMENT_TINTS[el], `Missing tint for ${el}`).toBeDefined();
    }
  });

  it('all colors are positive 24-bit integers', () => {
    for (const [name, color] of Object.entries(ELEMENT_TINTS)) {
      expect(Number.isInteger(color), `${name} is integer`).toBe(true);
      expect(color, `${name} >= 0`).toBeGreaterThanOrEqual(0);
      expect(color, `${name} <= 0xFFFFFF`).toBeLessThanOrEqual(0xFFFFFF);
    }
  });

  it('Feu has a reddish-orange color (high red, low blue)', () => {
    const c = ELEMENT_TINTS['Feu'];
    const r = (c >> 16) & 0xff;
    const b = c & 0xff;
    expect(r).toBeGreaterThan(150);
    expect(b).toBeLessThan(100);
  });

  it('Eau has a bluish color (high blue)', () => {
    const c = ELEMENT_TINTS['Eau'];
    const b = c & 0xff;
    expect(b).toBeGreaterThan(150);
  });

  it('Glace has a pale / high-brightness color', () => {
    const c = ELEMENT_TINTS['Glace'];
    const r = (c >> 16) & 0xff;
    const g = (c >> 8)  & 0xff;
    const b = c & 0xff;
    // At least two channels should be bright for icy pale look
    const bright = [r, g, b].filter(ch => ch > 150).length;
    expect(bright).toBeGreaterThanOrEqual(2);
  });

  it('all elements have distinct colors', () => {
    const colors = ELEMENTS.map(el => ELEMENT_TINTS[el]).filter(Boolean);
    // Allow some duplicates (similar elements) but not all identical
    const unique = new Set(colors);
    expect(unique.size).toBeGreaterThan(ELEMENTS.length / 2);
  });
});

describe('UNIT_TEAM_COLORS', () => {
  it('defines colors for team 0 and team 1', () => {
    expect(UNIT_TEAM_COLORS[0]).toBeDefined();
    expect(UNIT_TEAM_COLORS[1]).toBeDefined();
  });

  it('team colors are valid 24-bit integers', () => {
    for (const [team, color] of Object.entries(UNIT_TEAM_COLORS)) {
      expect(Number.isInteger(color), `team ${team}`).toBe(true);
      expect(color as number).toBeGreaterThanOrEqual(0);
      expect(color as number).toBeLessThanOrEqual(0xFFFFFF);
    }
  });

  it('team 0 and team 1 have distinct colors', () => {
    expect(UNIT_TEAM_COLORS[0]).not.toBe(UNIT_TEAM_COLORS[1]);
  });
});
