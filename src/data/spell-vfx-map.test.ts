import { describe, it, expect } from 'vitest';
import { getVFXId, getAllVFXIds } from './spell-vfx-map';

describe('spell-vfx-map', () => {
  describe('getVFXId', () => {
    it('returns specific ID for Feu|1 (Boule de Feu → fireball #20)', () => {
      expect(getVFXId('Feu', 1)).toBe(20);
    });

    it('returns specific ID for Electrique|1 (Arc → ball of lightning #23)', () => {
      expect(getVFXId('Electrique', 1)).toBe(23);
    });

    it('returns element default for unmapped sort number', () => {
      // Feu default is 20
      expect(getVFXId('Feu', 99)).toBe(20);
    });

    it('returns fallback (20) for completely unknown element', () => {
      expect(getVFXId('Unknown', 1)).toBe(20);
    });

    it('returns default for Gravité (1075 = gravity shift)', () => {
      expect(getVFXId('Gravité', 1)).toBe(1075);
      expect(getVFXId('Gravité', 99)).toBe(1075); // default
    });

    it('Ténèbres|1 maps to shadebind (56)', () => {
      expect(getVFXId('Ténèbres', 1)).toBe(56);
    });

    it('Fée|3 maps to mend wounds (87)', () => {
      expect(getVFXId('Fée', 3)).toBe(87);
    });

    it('Plante|3 (Régénération) maps to mend wounds (87)', () => {
      expect(getVFXId('Plante', 3)).toBe(87);
    });

    it('Dragon|1 maps to mark of the dragon (24)', () => {
      expect(getVFXId('Dragon', 1)).toBe(24);
    });

    it('all 18 elements return a positive integer', () => {
      const elements = [
        'Feu', 'Eau', 'Glace', 'Electrique', 'Plante', 'Sol', 'Roche',
        'Vent', 'Dragon', 'Insecte', 'Psy', 'Ténèbres', 'Fée', 'Spectre',
        'Gravité', 'Combat', 'Poison', 'Normal',
      ];
      for (const el of elements) {
        const id = getVFXId(el, 1);
        expect(id, `${el}|1`).toBeGreaterThan(0);
        expect(Number.isInteger(id), `${el}|1 is integer`).toBe(true);
      }
    });
  });

  describe('getAllVFXIds', () => {
    it('returns an array of positive integers', () => {
      const ids = getAllVFXIds();
      expect(ids.length).toBeGreaterThan(0);
      for (const id of ids) {
        expect(id).toBeGreaterThan(0);
        expect(Number.isInteger(id)).toBe(true);
      }
    });

    it('returns sorted array', () => {
      const ids = getAllVFXIds();
      for (let i = 1; i < ids.length; i++) {
        expect(ids[i]).toBeGreaterThanOrEqual(ids[i - 1]);
      }
    });

    it('returns unique IDs only', () => {
      const ids = getAllVFXIds();
      expect(new Set(ids).size).toBe(ids.length);
    });

    it('includes key IDs (fireball=20, frostfang=39, lightning=23)', () => {
      const ids = new Set(getAllVFXIds());
      expect(ids.has(20)).toBe(true);  // fireball
      expect(ids.has(39)).toBe(true);  // frostfang
      expect(ids.has(23)).toBe(true);  // ball of lightning
    });

    it('returns at least 20 unique IDs', () => {
      expect(getAllVFXIds().length).toBeGreaterThanOrEqual(20);
    });
  });
});
