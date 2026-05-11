import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Specialiste'];

export const personnage: Personnage = {
  id: 193,
  nom: 'Le Monolithe',
  element: 'roche',
  classe: 'Specialiste',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Independant',
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
    physique: `Chthonien dont la forme est desormais un monolithe ambulant — impossible de distinguer l'etre vivant de la structure geologique. Des strates de millions d'annees visibles dans sa peau.`,
    personnalite: `Entite geologique ancienne. Pense en eres geologiques. Les evenements humains sont des poussieres.`,
    lore: `Le Monolithe est peut-etre ne avant Kar-Dum — certaines strates de sa peau preexistent a la fondation de la ville. Il n'a pas de date dans le Calendrier. L'Empire a cesse d'essayer de le classer.`,
    combat: `Manipulation des masses rocheuses dans une large zone. Soulevements de formations geologiques entieres. Puissance geologique sans limite connue.`,
  },
};
