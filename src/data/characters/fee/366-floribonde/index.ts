import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Battlemage'];

export const personnage: Personnage = {
  id: 366,
  nom: 'Floribonde',
  element: 'fee',
  classe: 'Battlemage',
  espece: 'Sylvane',
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
    physique: `Sylvane en armure légère féerique impériale, aura de combat permanente, sceau du Voile d'Équité brodé dans sa robe de combat.`,
    personnalite: `Agent direct de la Citadelle à Sylvera. Pense que l'élément Fée appartient à l'Empire par nature — c'est l'élément fondateur.`,
    lore: `Floribonde applique la loi du Calendrier à Leth'Var pour les Élus Fée spécifiquement. Elle a la priorité sur les autres agents impériaux pour toute capture d'Élu Fée à Sylvera — ordre direct de la Citadelle. Les Gardiens de la Clairière la tolèrent ; les Conservateurs de la Sève la rejettent.`,
    combat: `Magie féerique offensive et défensive combinées. Contraintes de lumière qui immobilisent. Armure féerique active qui répond aux frappes.`,
  },
};
