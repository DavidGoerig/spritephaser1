import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Vanguard'];

export const personnage: Personnage = {
  id: 161,
  nom: 'Seis',
  element: 'sol',
  classe: 'Vanguard',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Convergence',
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
    physique: `Chthonien aux yeux devenus obsidienne apres un Drain profond. Armure de la Convergence renforcee de couches de roche. Tremblements mineurs a chaque pas.`,
    personnalite: `Evangeliste souterrain. Pense que la Fosse Interdite prouve que la terre elle-meme redistribue quand les humains n'osent pas.`,
    lore: `Seis recrute dans les galeries de Kar-Dum parmi les ouvriers qui ont perdu leurs zones d'extraction a la Fosse Interdite. Sa these : la doctrine sacrificielle de la Convergence est simplement la technocratie de contribution poussee a sa logique complete.`,
    combat: `Avant-garde sismique, genere des tremblements qui destabilisent les formations adverses. Absorbe l'energie tellurique adverse pour la redistribuer.`,
  },
};
