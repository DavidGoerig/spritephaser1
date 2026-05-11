import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Juggernaut'];

export const personnage: Personnage = {
  id: 33,
  nom: 'Drunas',
  element: 'eau',
  classe: 'Juggernaut',
  espece: 'Néréide',
  region: 'Thalassyr',
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
    physique: `Néréide colossale, peau marquée de cicatrices bleutées de Drain partiel, yeux qui ont brûlé de l'intérieur et gardé une lueur ambrée. Ses mains laissent une trace de sel sur tout ce qu'il touche.`,
    personnalite: `Convaincu que sa force n'est pas à lui — que l'Élu est une dette du monde envers lui-même, et qu'un Juggernaut qui garde sa puissance est un voleur. Serein dans cette conviction.`,
    lore: `Drunas a participé au premier Drain local dans les cavernes profondes de Thalassyr — une version régionale du rituel fondateur du Premier Drain d'Ash'Rael. Il a survécu en cédant la moitié de sa signature élémentaire. Ce qu'il a perdu coule maintenant dans l'eau de Néris, dit-il : la Confédération marchande boit sans le savoir le sacrifice de ceux qui ont compris.`,
    combat: `Masse corporelle brute, résistance aux drains adverses par accoutumance. Charge qui libère l'énergie accumulée en vague déferlante. Ses défenses absorbent les dégâts élémentaires pour les redistribuer.`,
  },
};
