import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Battlemage'];

export const personnage: Personnage = {
  id: 66,
  nom: 'Kryss',
  element: 'glace',
  classe: 'Battlemage',
  espece: 'Givrine',
  region: 'Crysalme',
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
    physique: `Givrine en armure de glace forgée impérialement, sceau du Voile d'Équité en cristal incrusté à l'épaule gauche. Mouvements disciplinés, posture toujours en garde.`,
    personnalite: `Disciplinée, intransigeante. Pense que le Calendrier préserve Iskral autant que la monarchie rituelle — peut-être davantage. Ne comprend pas la résistance d'une culture qui valorise la conservation.`,
    lore: `Kryss applique la loi du Calendrier à Iskral, terrain difficile : la monarchie rituelle maintient des archives non-autorisées contenant des informations que les Fées veulent effacer. Elle a confisqué plusieurs registres anciens et exige l'accès aux archives gelées. La monarchie a protesté formellement. La Citadelle a soutenu Kryss. La tension monte.`,
    combat: `Armure de glace active qui répond aux frappes en se renforçant. Épée de cristal pur qui tranche les protections élémentaires. Immobilisation progressive des cibles par gel des membres.`,
  },
};
