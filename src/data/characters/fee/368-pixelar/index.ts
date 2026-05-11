import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Tireur'];

export const personnage: Personnage = {
  id: 368,
  nom: 'Pixelar',
  element: 'fee',
  classe: 'Tireur',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin de petite taille aux mouvements très rapides, tirs de lumière féerique de précision. Aura colorée instable qui change selon l'humeur.`,
    personnalite: `Mercenaire sans prétention idéologique. Loue sa précision féerique au plus offrant, en évitant soigneusement les contrats qui l'impliqueraient avec la Citadelle.`,
    lore: `Pixelar opère à Iskral depuis l'alliance historique entre Givrins et Fées — une relation qu'il observe sans y participer. La monarchie rituelle le tolère. L'Empire le surveille. Les Dissidentes lui ont proposé un contrat plusieurs fois. Il a toujours demandé un tarif légèrement supérieur à ce qu'elles peuvent payer.`,
    combat: `Tirs de lumière féerique de précision extrême à longue portée. Repositionnement rapide. Sa petite taille le rend difficile à cibler en retour.`,
  },
};
