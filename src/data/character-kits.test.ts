import { describe, it, expect } from 'vitest';
import { ELEMENT_KITS } from './character-kits';

const ELEMENTS = [
  'Feu', 'Eau', 'Glace', 'Electrique', 'Plante', 'Sol', 'Roche',
  'Vent', 'Dragon', 'Insecte', 'Psy', 'Ténèbres', 'Fée', 'Spectre',
  'Gravité', 'Combat', 'Poison', 'Normal',
];

describe('ELEMENT_KITS', () => {
  it('defines a kit for every element', () => {
    for (const el of ELEMENTS) {
      expect(ELEMENT_KITS[el as keyof typeof ELEMENT_KITS], `Missing kit for ${el}`).toBeDefined();
    }
  });

  it('every kit has a non-empty sorts array', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      expect(kit.sorts.length, `${el} sorts`).toBeGreaterThan(0);
    }
  });

  it('every sort has required fields', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        expect(sort.nom,         `${el} sort.nom`).toBeTruthy();
        expect(sort.coutPM,      `${el} sort.coutPM`).toBeGreaterThanOrEqual(0);
        expect(sort.portee,      `${el} sort.portee`).toBeGreaterThanOrEqual(-1); // -1 = self/melee
        expect(sort.type,        `${el} sort.type`).toBeTruthy();
        expect(sort.description, `${el} sort.description`).toBeTruthy();
        expect(typeof sort.num,  `${el} sort.num type`).toBe('number');
        expect(sort.cooldown,    `${el} sort.cooldown`).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('sort PM costs are between 0 and 20', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        expect(sort.coutPM, `${el}:${sort.nom} coutPM`).toBeGreaterThanOrEqual(0);
        expect(sort.coutPM, `${el}:${sort.nom} coutPM <= 20`).toBeLessThanOrEqual(20);
      }
    }
  });

  it('sort portee values are between -1 and 10 (-1 = self/melee)', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        // portee -1 means the spell targets self or adjacent cell (valid)
        expect(sort.portee, `${el}:${sort.nom} portee >= -1`).toBeGreaterThanOrEqual(-1);
        expect(sort.portee, `${el}:${sort.nom} portee <= 10`).toBeLessThanOrEqual(10);
      }
    }
  });

  it('sort cooldowns are between 0 and 12 (ultimates can have high cooldowns)', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        expect(sort.cooldown, `${el}:${sort.nom} cooldown >= 0`).toBeGreaterThanOrEqual(0);
        expect(sort.cooldown, `${el}:${sort.nom} cooldown <= 12`).toBeLessThanOrEqual(12);
      }
    }
  });

  it('Feu kit has at least 5 sorts', () => {
    expect(ELEMENT_KITS['Feu'].sorts.length).toBeGreaterThanOrEqual(5);
  });

  it('sort nums are positive integers', () => {
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        expect(Number.isInteger(sort.num), `${el}:${sort.nom} num`).toBe(true);
        expect(sort.num, `${el}:${sort.nom} num > 0`).toBeGreaterThan(0);
      }
    }
  });

  it('sort types contain at least one of the known type keywords', () => {
    const TYPE_KEYWORDS = [
      'Dégâts', 'Soin', 'Terrain', 'Contrôle', 'Buff',
      'Déplacement', 'Invocation', 'Utilitaire', 'Passif',
    ];
    for (const el of ELEMENTS) {
      const kit = ELEMENT_KITS[el as keyof typeof ELEMENT_KITS];
      for (const sort of kit.sorts) {
        const hasKeyword = TYPE_KEYWORDS.some(kw => sort.type.includes(kw));
        expect(hasKeyword, `${el}:${sort.nom} type="${sort.type}"`).toBe(true);
      }
    }
  });
});
