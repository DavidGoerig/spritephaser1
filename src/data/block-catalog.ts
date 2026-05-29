/**
 * Block catalog — maps tile IDs (1-101, matching blocks_N.png loading order)
 * to descriptive metadata. IDs are sequential in the order blocks were loaded
 * in preload(), so block 1 = first loadTile call, etc.
 *
 * The approximate mapping below is based on alphabetical order of the source
 * 2D Tiles_256 directory. Verify visually and update names as needed.
 */

import type { BlockType } from './block-interactions';

export interface BlockDef {
  id: number;
  name: string;
  element: BlockType;
  /** Can units walk/stand on this tile? */
  passable: boolean;
  /** Is this a liquid surface? */
  liquid: boolean;
}

export type BlockCategory =
  | 'Terrain' | 'Nature' | 'Eau' | 'Feu' | 'Glace'
  | 'Roche' | 'Acier' | 'Poison' | 'Ténèbres' | 'Psy'
  | 'Spectre' | 'Fée' | 'Stellaire' | 'Spécial';

export const CATEGORY_LABELS: Record<BlockCategory, string> = {
  'Terrain':   'Sol',
  'Nature':    'Plante',
  'Eau':       'Eau',
  'Feu':       'Feu',
  'Glace':     'Glace',
  'Roche':     'Roche',
  'Acier':     'Acier',
  'Poison':    'Poison',
  'Ténèbres':  'Ténèbres',
  'Psy':       'Psy',
  'Spectre':   'Spectre',
  'Fée':       'Fée',
  'Stellaire': 'Stellaire',
  'Spécial':   'Spécial',
};

export const CATEGORY_COLORS: Record<BlockCategory, number> = {
  'Terrain':   0xB8860B,
  'Nature':    0x228B22,
  'Eau':       0x1E90FF,
  'Feu':       0xFF4500,
  'Glace':     0x87CEEB,
  'Roche':     0x808080,
  'Acier':     0xC0C0C0,
  'Poison':    0x9400D3,
  'Ténèbres':  0x2F0F2F,
  'Psy':       0xFF69B4,
  'Spectre':   0x9370DB,
  'Fée':       0xFFB6C1,
  'Stellaire': 0xFFD700,
  'Spécial':   0x808080,
};

// Approximate mapping — verify visually by looking at blocks in the palette.
// Source order is alphabetical from 2D Tiles_256/ directory.
export const BLOCK_CATALOG: BlockDef[] = [
  // ── Terrain / Sol ──────────────────────────────────────────
  { id:  1, name: 'Herbe',          element: 'Sol',      passable: true,  liquid: false },
  { id:  2, name: 'Herbe courte',   element: 'Sol',      passable: true,  liquid: false },
  { id:  3, name: 'Terre 01',       element: 'Sol',      passable: true,  liquid: false },
  { id:  4, name: 'Terre 02',       element: 'Sol',      passable: true,  liquid: false },
  { id:  5, name: 'Terre 03',       element: 'Sol',      passable: true,  liquid: false },
  { id:  6, name: 'Terre + Herbe',  element: 'Sol',      passable: true,  liquid: false },
  { id:  7, name: 'Sable 01',       element: 'Sol',      passable: true,  liquid: false },
  { id:  8, name: 'Sable 02',       element: 'Sol',      passable: true,  liquid: false },
  { id:  9, name: 'Sable 03',       element: 'Sol',      passable: true,  liquid: false },
  { id: 10, name: 'Sable désert',   element: 'Sol',      passable: true,  liquid: false },

  // ── Roche / Mineral ────────────────────────────────────────
  { id: 11, name: 'Pierre 01',       element: 'Roche',   passable: true,  liquid: false },
  { id: 12, name: 'Pierre 02',       element: 'Roche',   passable: true,  liquid: false },
  { id: 13, name: 'Rochers',         element: 'Roche',   passable: true,  liquid: false },
  { id: 14, name: 'Rochers désert',  element: 'Roche',   passable: true,  liquid: false },
  { id: 15, name: 'Rochers 2 tons',  element: 'Roche',   passable: true,  liquid: false },
  { id: 16, name: 'Rochers 2t var',  element: 'Roche',   passable: true,  liquid: false },
  { id: 17, name: 'Pierres désert',  element: 'Roche',   passable: true,  liquid: false },
  { id: 18, name: 'Os',              element: 'Normal',  passable: true,  liquid: false },
  { id: 19, name: 'Neige',           element: 'Glace',   passable: true,  liquid: false },
  { id: 20, name: 'Neige + Glace',   element: 'Glace',   passable: true,  liquid: false },

  // ── Acier / Métaux ─────────────────────────────────────────
  { id: 21, name: 'Bronze',         element: 'Acier',   passable: true,  liquid: false },
  { id: 22, name: 'Métal chaud',    element: 'Acier',   passable: true,  liquid: false },
  { id: 23, name: 'Or',             element: 'Normal',  passable: true,  liquid: false },
  { id: 24, name: 'Ambre',          element: 'Normal',  passable: true,  liquid: false },
  { id: 25, name: 'Ambre + insecte',element: 'Insecte', passable: false, liquid: false },
  { id: 26, name: 'Briques',        element: 'Normal',  passable: true,  liquid: false },
  { id: 27, name: 'Brique 01',      element: 'Normal',  passable: true,  liquid: false },
  { id: 28, name: 'Brique désert',  element: 'Sol',     passable: true,  liquid: false },
  { id: 29, name: 'Brique glace',   element: 'Glace',   passable: true,  liquid: false },
  { id: 30, name: 'Brique lave',    element: 'Feu',     passable: false, liquid: false },

  // ── Feu / Lave ─────────────────────────────────────────────
  { id: 31, name: 'Brique orange',  element: 'Feu',     passable: true,  liquid: false },
  { id: 32, name: 'Brique blanche', element: 'Normal',  passable: true,  liquid: false },
  { id: 33, name: 'Lave',           element: 'Feu',     passable: false, liquid: true  },
  { id: 34, name: 'Lave + pierres', element: 'Feu',     passable: false, liquid: true  },
  { id: 35, name: 'Lave + roche',   element: 'Feu',     passable: false, liquid: true  },
  { id: 36, name: 'Magma',          element: 'Feu',     passable: false, liquid: true  },
  { id: 37, name: 'Magma sombre',   element: 'Ténèbres',passable: false, liquid: true  },
  { id: 38, name: 'Magma + roches', element: 'Feu',     passable: false, liquid: true  },
  { id: 39, name: 'Lave séparée',   element: 'Feu',     passable: false, liquid: true  },
  { id: 40, name: 'Pierre + lave',  element: 'Feu',     passable: false, liquid: false },

  // ── Eau ────────────────────────────────────────────────────
  { id: 41, name: 'Eau',            element: 'Eau',     passable: false, liquid: true  },
  { id: 42, name: 'Eau surf.',      element: 'Eau',     passable: false, liquid: true  },
  { id: 43, name: 'Eau 80%',        element: 'Eau',     passable: false, liquid: true  },
  { id: 44, name: 'Eau surf. 80%',  element: 'Eau',     passable: false, liquid: true  },
  { id: 45, name: 'Eau toxique',    element: 'Poison',  passable: false, liquid: true  },
  { id: 46, name: 'Eau tox. surf.', element: 'Poison',  passable: false, liquid: true  },
  { id: 47, name: 'Eau tox. 80%',   element: 'Poison',  passable: false, liquid: true  },
  { id: 48, name: 'Eau tox. s.80%', element: 'Poison',  passable: false, liquid: true  },
  { id: 49, name: 'Lait',           element: 'Normal',  passable: false, liquid: true  },
  { id: 50, name: 'Lait surf.',     element: 'Normal',  passable: false, liquid: true  },

  // ── Glace ──────────────────────────────────────────────────
  { id: 51, name: 'Briques glace',  element: 'Glace',   passable: true,  liquid: false },
  { id: 52, name: 'Cube glace 80%', element: 'Glace',   passable: true,  liquid: false },
  { id: 53, name: 'Pierres glace',  element: 'Glace',   passable: true,  liquid: false },
  { id: 54, name: 'Glace crème 01', element: 'Glace',   passable: false, liquid: false },
  { id: 55, name: 'Glace crème 03', element: 'Glace',   passable: false, liquid: false },

  // ── Nature / Plante ────────────────────────────────────────
  { id: 56, name: 'Bois 01',        element: 'Plante',  passable: true,  liquid: false },
  { id: 57, name: 'Bois 02',        element: 'Plante',  passable: true,  liquid: false },
  { id: 58, name: 'Bois 03',        element: 'Plante',  passable: true,  liquid: false },
  { id: 59, name: 'Bois 04',        element: 'Plante',  passable: true,  liquid: false },
  { id: 60, name: 'Bois 05',        element: 'Plante',  passable: true,  liquid: false },
  { id: 61, name: 'Tronc',          element: 'Plante',  passable: true,  liquid: false },
  { id: 62, name: 'Tronc désert',   element: 'Sol',     passable: true,  liquid: false },
  { id: 63, name: 'Tronc citron',   element: 'Plante',  passable: true,  liquid: false },
  { id: 64, name: 'Tronc bouleau',  element: 'Plante',  passable: true,  liquid: false },
  { id: 65, name: 'Pont bois 01',   element: 'Normal',  passable: true,  liquid: false },
  { id: 66, name: 'Pont bois 02',   element: 'Normal',  passable: true,  liquid: false },
  { id: 67, name: 'Pont bois 03',   element: 'Normal',  passable: true,  liquid: false },
  { id: 68, name: 'Pont bois 04',   element: 'Normal',  passable: true,  liquid: false },
  { id: 69, name: 'Pont bois 05',   element: 'Normal',  passable: true,  liquid: false },

  // ── Psy / Verre ────────────────────────────────────────────
  { id: 70, name: 'Verre bleu',     element: 'Psy',     passable: true,  liquid: false },
  { id: 71, name: 'Verre bleu 80%', element: 'Psy',     passable: true,  liquid: false },
  { id: 72, name: 'Verre désert',   element: 'Psy',     passable: true,  liquid: false },
  { id: 73, name: 'Verre gris',     element: 'Psy',     passable: true,  liquid: false },
  { id: 74, name: 'Œil rouge',      element: 'Feu',     passable: false, liquid: false },
  { id: 75, name: 'Œil jaune',      element: 'Electrique',passable: false,liquid: false },
  { id: 76, name: 'Œil vert',       element: 'Plante',  passable: false, liquid: false },
  { id: 77, name: 'Cerveau',        element: 'Psy',     passable: false, liquid: false },

  // ── Ténèbres / Biologique ──────────────────────────────────
  { id: 78, name: 'Sang',           element: 'Ténèbres',passable: true,  liquid: true  },
  { id: 79, name: 'Sang 80%',       element: 'Ténèbres',passable: true,  liquid: true  },
  { id: 80, name: 'Sang surf.',     element: 'Ténèbres',passable: true,  liquid: true  },
  { id: 81, name: 'Sang surf. 80%', element: 'Ténèbres',passable: true,  liquid: true  },
  { id: 82, name: 'Taches sang',    element: 'Ténèbres',passable: true,  liquid: false },
  { id: 83, name: 'Chair 01',       element: 'Combat',  passable: true,  liquid: false },
  { id: 84, name: 'Chair 02',       element: 'Combat',  passable: true,  liquid: false },
  { id: 85, name: 'Chair 03',       element: 'Combat',  passable: true,  liquid: false },
  { id: 86, name: 'Chair 04',       element: 'Combat',  passable: true,  liquid: false },

  // ── Fée / Spécial ──────────────────────────────────────────
  { id: 87, name: 'Gelée 01',       element: 'Fée',     passable: true,  liquid: false },
  { id: 88, name: 'Gelée 02',       element: 'Eau',     passable: true,  liquid: false },
  { id: 89, name: 'Gelée 03',       element: 'Plante',  passable: true,  liquid: false },
  { id: 90, name: 'Gelée 05',       element: 'Normal',  passable: true,  liquid: false },
  { id: 91, name: 'Gelée 06',       element: 'Vent',    passable: true,  liquid: false },
  { id: 92, name: 'Chocolat 01',    element: 'Normal',  passable: true,  liquid: false },
  { id: 93, name: 'Chocolat 03',    element: 'Normal',  passable: true,  liquid: false },
  { id: 94, name: 'Pelage rayé',    element: 'Fée',     passable: true,  liquid: false },
  { id: 95, name: 'Pelage tigre',   element: 'Combat',  passable: true,  liquid: false },
  { id: 96, name: 'Pelage blanc',   element: 'Fée',     passable: true,  liquid: false },

  // ── Spectre / Trous ────────────────────────────────────────
  { id: 97, name: 'Trou',           element: 'Spectre', passable: false, liquid: false },
  { id: 98, name: 'Cube troué',     element: 'Spectre', passable: false, liquid: false },
  { id: 99, name: 'Cœur',           element: 'Fée',     passable: false, liquid: false },
  { id:100, name: 'Escalier 01',    element: 'Normal',  passable: true,  liquid: false },
  { id:101, name: 'Escalier 02',    element: 'Normal',  passable: true,  liquid: false },
];

// Build a fast lookup map
export const BLOCK_BY_ID = new Map<number, BlockDef>(
  BLOCK_CATALOG.map(b => [b.id, b]),
);

/** Map element → category tab */
export const ELEMENT_TO_CATEGORY: Record<string, BlockCategory> = {
  Sol: 'Terrain', Normal: 'Terrain',
  Plante: 'Nature',
  Eau: 'Eau',
  Feu: 'Feu',
  Glace: 'Glace',
  Roche: 'Roche',
  Acier: 'Acier',
  Poison: 'Poison',
  Ténèbres: 'Ténèbres',
  Psy: 'Psy',
  Spectre: 'Spectre',
  Fée: 'Fée',
  Stellaire: 'Stellaire',
  Electrique: 'Acier',
  Combat: 'Spécial',
  Dragon: 'Spécial',
  Vent: 'Spécial',
  Insecte: 'Spécial',
  Gravité: 'Spécial',
};

/** Return all blocks in a given category */
export function getBlocksForCategory(cat: BlockCategory): BlockDef[] {
  return BLOCK_CATALOG.filter(
    b => ELEMENT_TO_CATEGORY[b.element] === cat || (cat === 'Spécial' && !ELEMENT_TO_CATEGORY[b.element]),
  );
}
