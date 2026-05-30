/**
 * Smoke tests for sound-engine.
 * Audio context is not available in Node — we verify the functions don't throw
 * and handle missing AudioContext gracefully.
 */
import { describe, it, expect, vi } from 'vitest';

// Suppress AudioContext warning — not available in Node
vi.stubGlobal('AudioContext', undefined);

import {
  sfxDamage, sfxBlock, sfxHeal, sfxDeath,
  sfxSpell, sfxTurnStart, sfxVictory,
} from './sound-engine';

describe('sound-engine', () => {
  it('sfxDamage does not throw (no AudioContext)', () => {
    expect(() => sfxDamage(30)).not.toThrow();
    expect(() => sfxDamage(0)).not.toThrow();
    expect(() => sfxDamage(200)).not.toThrow();
  });

  it('sfxBlock does not throw', () => {
    expect(() => sfxBlock()).not.toThrow();
  });

  it('sfxHeal does not throw', () => {
    expect(() => sfxHeal()).not.toThrow();
  });

  it('sfxDeath does not throw', () => {
    expect(() => sfxDeath()).not.toThrow();
  });

  it('sfxTurnStart does not throw', () => {
    expect(() => sfxTurnStart()).not.toThrow();
  });

  it('sfxVictory does not throw', () => {
    expect(() => sfxVictory()).not.toThrow();
  });

  it('sfxSpell does not throw for all 18 elements', () => {
    const elements = [
      'Feu', 'Eau', 'Glace', 'Electrique', 'Plante', 'Sol', 'Roche',
      'Vent', 'Dragon', 'Insecte', 'Psy', 'Ténèbres', 'Fée', 'Spectre',
      'Gravité', 'Combat', 'Poison', 'Normal',
    ];
    for (const el of elements) {
      expect(() => sfxSpell(el), `sfxSpell(${el})`).not.toThrow();
    }
  });

  it('sfxSpell does not throw for unknown element (fallback)', () => {
    expect(() => sfxSpell('Unknown')).not.toThrow();
  });
});
