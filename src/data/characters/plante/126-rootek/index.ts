import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Battlemage'];

export const personnage: Personnage = {
  id: 126,
  nom: 'Rootek',
  element: 'plante',
  classe: 'Battlemage',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Empire',
  niveau: 1,
  xp: 0,
  stats: {
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  },
  description: {
    physique: `Sylvan en armure d'écorce renforcée impériale, racines de combat intégrées dans les bras, sceau du Voile d'Équité en résine dorée sur le plastron.`,
    personnalite: `Croit que la Faim des Racines est la preuve que sans supervision, les Élus Plante détruisent Sylvera. L'Empire prévient la prochaine catastrophe.`,
    lore: `Rootek applique la loi du Calendrier à Leth'Var, naviguant la tension entre les deux factions locales. Il collabore avec les Conservateurs de la Sève quand leurs intérêts coïncident — les deux veulent contrôler les Élus Plante, pour des raisons différentes. Les Gardiens de la Clairière le détestent uniformément.`,
    combat: `Mêlée végétale, racines de combat qui prolongent sa portée. Bouclier d'écorce actif. Combo attaque-défense végétale qui exploite le terrain de Sylvera.`,
  },
};
