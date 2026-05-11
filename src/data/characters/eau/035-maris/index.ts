import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Mage-Burst'];

export const personnage: Personnage = {
  id: 35,
  nom: 'Maris',
  element: 'eau',
  classe: 'Mage-Burst',
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
    physique: `Néréide aux cheveux d'algues dorées, irisation nacrée sur la peau lors de ses décharges. Ses yeux changent de couleur selon la puissance qu'elle canalise — bleu calme, vert instable, blanc aveuglant.`,
    personnalite: `Fascinée par les structures invisibles du monde : courants magiques, réseaux de surveillance, architectures du Calendrier. Déteste les contraintes idéologiques qui l'empêchent de chercher.`,
    lore: `Maris a cartographié les courants magiques reconstruits après le Silence des Vents. Elle a découvert que l'Élu Électrique qui a reconstruit les flux a inséré des nœuds de surveillance dans la trame aquatique de Néris. La Confédération marchande neutre ne sait pas que son neutralité est lue en temps réel par la Citadelle. Maris n'a informé personne. Elle archive d'abord.`,
    combat: `Vagues d'énergie aqueuse à grande échelle. Manipulation des courants magiques sous-jacents. Imprévisible — ses décharges s'adaptent à la structure du terrain, exploitant chaque flux existant.`,
  },
};
