import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Spécialiste'];

export const personnage: Personnage = {
  id: 43,
  nom: 'La Marée',
  element: 'eau',
  classe: 'Spécialiste',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',
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
    physique: `Néréide dont la forme physique oscille avec les cycles lunaires — certains jours presque entièrement humanoïde, d'autres à peine distincte de l'eau environnante. Aucune morphologie fixe.`,
    personnalite: `Entité plus qu'individu. Pense à l'échelle des cycles de marée, pas des saisons politiques. Les factions lui paraissent de courte durée.`,
    lore: `La Marée est née lors de la reconstruction des courants après le Silence des Vents — une conséquence possible de l'intervention de l'Élu Électrique sur la trame aquatique de Néris. Elle comprend la structure artificielle des courants actuels comme un mécanisme, pas comme un fait naturel : elle peut le lire, le modifier, le renverser. L'Empire ne sait pas l'enregistrer dans le Calendrier.`,
    combat: `Manipulation de tous les courants aquatiques dans une zone large. Transformation partielle en eau — rend les attaques physiques inopérantes. Ses cycles de puissance épousent les marées réelles : imprévisible pour qui ne connaît pas les tables lunaires.`,
  },
};
