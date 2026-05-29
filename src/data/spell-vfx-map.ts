// ── Spell VFX sprite mapping ────────────────────────────────────────────────
// Maps "Element|sortNum" to a sprite sheet ID from public/spells/spritesheets/.
// Each sheet is 192×192 (4×4 grid of 48×48 frames, played at 16 fps).

// Per-sort overrides
const SPECIFIC: Record<string, number> = {
  // Feu
  'Feu|1':  20,   // Boule de Feu → fireball
  'Feu|2':  38,   // Embrasement  → emberstorm
  'Feu|3':  32,   // Traînée      → fire lash
  'Feu|4':  378,  // Mur          → inferno breath
  'Feu|5':  429,  // Combustion   → inferno blast
  'Feu|7':  563,  // Forja        → inferno whip
  'Feu|9':  378,  // Météore      → inferno breath
  'Feu|10': 429,  // Apocalypse   → inferno blast

  // Eau
  'Eau|1': 14,    // Hydro Blast  → water burst
  'Eau|2': 48,    // Inondation   → tidalfang
  'Eau|4': 48,    // Vague        → tidalfang
  'Eau|6': 48,    // Maelstrom    → tidalfang

  // Glace
  'Glace|1': 39,  // Souffle Glacial → frostfang
  'Glace|2': 185, // Pointe de Givre → ice spike wall
  'Glace|4': 30,  // Blizzard        → hailstorm
  'Glace|5': 30,  // Tempête         → hailstorm
  'Glace|6': 524, // Givre           → chill presence

  // Electrique
  'Electrique|1': 23,  // Arc         → ball of lightning
  'Electrique|2': 43,  // Champ       → thunderbrand
  'Electrique|3': 52,  // Orage       → storm call
  'Electrique|5': 43,  // Grille      → thunderbrand

  // Plante
  'Plante|1': 45,  // Lianes        → stonevine grasp
  'Plante|2': 76,  // Épines        → blessing of thorns
  'Plante|3': 87,  // Régénération  → mend wounds
  'Plante|4': 45,  // Forêt         → stonevine grasp
  'Plante|5': 49,  // Racines       → scorchroot

  // Sol
  'Sol|1': 47,     // Séisme        → earthsurge
  'Sol|3': 17,     // Tempête pouss.→ dust storm

  // Roche
  'Roche|1': 414,  // Éboulement    → rockslide bash
  'Roche|2': 502,  // Mur de Pierre → stonewall
  'Roche|3': 424,  // Garde         → stoneward call

  // Vent
  'Vent|1': 46,    // Rafale        → windsheer
  'Vent|2': 50,    // Tornade       → gale spiral

  // Dragon
  'Dragon|1': 24,  // Souffle       → mark of the dragon
  'Dragon|2': 378, // Inferno       → inferno breath

  // Insecte
  'Insecte|1': 319, // Essaim → swarm creatures

  // Psy
  'Psy|1': 79,     // Lien Mental   → mindlace
  'Psy|2': 82,     // Fil Arcanique → arcane thread
  'Psy|3': 15,     // Malédiction   → arcane curse

  // Ténèbres
  'Ténèbres|1': 56,  // Lien d'Ombre  → shadebind
  'Ténèbres|2': 63,  // Mâchoire Noire→ night maw
  'Ténèbres|3': 66,  // Marque        → dreadmark
  'Ténèbres|4': 27,  // Ombre Rayonn. → Umbral Radiance

  // Fée
  'Fée|1': 67,    // Impulsion → radiant pulse
  'Fée|2': 69,    // Bouclier  → aether ward
  'Fée|3': 87,    // Soin      → mend wounds
  'Fée|4': 95,    // Surge     → healing surge

  // Spectre
  'Spectre|1': 36,  // Déchirement → soulrend
  'Spectre|2': 74,  // Balise      → spirit beacon

  // Gravité
  'Gravité|1': 1075, // Décalage       → gravity shift
  'Gravité|2': 1075, // Champ lourd    → gravity shift

  // Combat
  'Combat|1': 365,   // Taille      → crimson slash
  'Combat|2': 370,   // Frappe      → moonlit strike

  // Poison
  'Poison|1': 34,    // Lance       → venom lance
  'Poison|2': 35,    // Explosion   → blightburst

  // Normal
  'Normal|1': 370,   // Frappe      → moonlit strike
  'Normal|2': 365,   // Taille      → crimson slash
};

// Default sprite ID per element (fallback for unmapped sort numbers)
const DEFAULTS: Record<string, number> = {
  'Feu':        20,
  'Eau':        14,
  'Glace':      39,
  'Electrique': 23,
  'Plante':     45,
  'Sol':        47,
  'Roche':      414,
  'Vent':       46,
  'Dragon':     24,
  'Insecte':    319,
  'Psy':        82,
  'Ténèbres':   56,
  'Fée':        67,
  'Spectre':    36,
  'Gravité':    1075,
  'Combat':     365,
  'Poison':     34,
  'Normal':     370,
};

/** Returns the sprite sheet ID for a given element + sort number. */
export function getVFXId(element: string, sortNum: number): number {
  return SPECIFIC[`${element}|${sortNum}`] ?? DEFAULTS[element] ?? 20;
}

/** All unique sprite sheet IDs used by the VFX map (for preloading). */
export function getAllVFXIds(): number[] {
  const ids = new Set<number>([
    ...Object.values(SPECIFIC),
    ...Object.values(DEFAULTS),
  ]);
  return [...ids].sort((a, b) => a - b);
}
