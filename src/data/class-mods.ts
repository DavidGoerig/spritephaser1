import type { ClassModifications } from './character-types';

/**
 * Per-character sort reordering, indexed by character ID.
 * Values are 0-based indices into kit.sorts[]. Slot i (key i+1) shows
 * kit.sorts[sortOrder[i]], letting each class archetype lead with their
 * signature spell.
 *
 * FEU kit layout (0-indexed):
 *   0=Boule de Feu  1=Embrasement Forcé  2=Traînée Ignée  3=Mur de Flammes
 *   4=Combustion    5=Aspiration          6=Forja Volcanique 7=Inferno
 *   8=Météore       9=Apocalypse de Feu
 *
 * Design rules per class archetype:
 *   Enchanteur-Soutien → heal/utility first (Aspiration, Canal, Transmutation…)
 *   Tireur / Artillerie → long-range projectile first
 *   Mage-Burst → highest-damage nuke first
 *   Juggernaut / Battlemage → AoE first
 *   Assassin / Plongeur → gap-closer or high-burst first
 *   Vanguard / Gardien → CC / wall / terrain control first
 *   Escrimeur → sustained damage first
 */
export const CLASS_MODS: Map<number, ClassModifications> = new Map([

  // ─── FEU ──────────────────────────────────────────────────────────────────
  // 001 Pyrakh — Enchanteur-Soutien: Aspiration (pull+heat) > Boule de Feu
  [1,  { sortOrder: [5, 0, 4, 3, 1, 6, 7, 8, 2, 9] }],
  // 002 Kaelsa-la-Braise — Tireur: Boule de Feu > Embrasement > Traînée
  [2,  { sortOrder: [0, 1, 2, 7, 4, 3, 5, 6, 8, 9] }],
  // 003 Durhn — Juggernaut: Combustion (AoE) > Mur > Inferno
  [3,  { sortOrder: [4, 3, 7, 0, 1, 2, 5, 6, 8, 9] }],
  // 004 Sira — Mage-Burst: Météore > Inferno > Boule de Feu
  [4,  { sortOrder: [8, 7, 0, 1, 4, 3, 2, 5, 6, 9] }],
  // 005 Auren — Battlemage: Embrasement > Combustion > Boule de Feu
  [5,  { sortOrder: [1, 4, 0, 3, 7, 2, 5, 6, 8, 9] }],
  // 006 Vaela — Gardien: Mur de Flammes > Aspiration > Combustion
  [6,  { sortOrder: [3, 5, 4, 0, 1, 2, 6, 7, 8, 9] }],
  // 012 Tarakh — Vanguard: Aspiration > Traînée Ignée > Combustion
  [12, { sortOrder: [5, 2, 4, 0, 3, 1, 6, 7, 8, 9] }],

  // ─── EAU ──────────────────────────────────────────────────────────────────
  // EAU kit: 0=Jet d'Eau  1=Inondation  2=Brume  3=Vague  4=Canal
  //          5=Maelstrom  6=Transmutation  7=Prison d'Eau  8=Déluge  9=Raz-de-Marée
  //
  // Enchanteur-Soutien Eau: Transmutation (heal) > Brume > Canal
  // 034 (placeholder Enchanteur-Soutien Eau)
  [34, { sortOrder: [6, 2, 4, 3, 0, 1, 5, 7, 8, 9] }],
  // Tireur Eau: Jet d'Eau first (default order fine)
  // Mage-Burst Eau: Déluge > Raz-de-Marée > Maelstrom
  [39, { sortOrder: [8, 9, 5, 7, 3, 0, 1, 2, 4, 6] }],

  // ─── GLACE ────────────────────────────────────────────────────────────────
  // GLACE kit: 0=Souffle Glacial  1=Congélation  2=Patinoire  3=Éclat de Glace
  //            4=Pont Glacé  5=Avalanche  6=Tempête de Grêle  7=Mur de Glace
  //            8=Fracturation  9=Âge de Glace
  //
  // Mage-Burst Glace: Âge de Glace > Fracturation > Souffle
  [64, { sortOrder: [9, 8, 0, 5, 1, 3, 6, 7, 2, 4] }],
  // Enchanteur-Capteur Glace: Congélation > Patinoire > Pont Glacé
  [72, { sortOrder: [1, 2, 4, 7, 0, 3, 5, 6, 8, 9] }],

  // ─── ELECTRIQUE ───────────────────────────────────────────────────────────
  // ELECTRIQUE kit: 0=Arc Électrique  1=Champ Magnétique  2=Foudre  3=Overcharge
  //                  4=Grille Conductrice  5=Tempête Électrique  6=Surcharge
  //                  7=Amplification  8=Tonnerre Absolu  9=Apocalypse Électrique
  //
  // Artillerie Electrique: Foudre > Tempête > Arc
  [95,  { sortOrder: [2, 5, 0, 8, 3, 1, 4, 6, 7, 9] }],
  // Mage-Burst Electrique: Apocalypse > Tonnerre > Foudre
  [100, { sortOrder: [9, 8, 2, 5, 0, 1, 3, 4, 6, 7] }],

]);
