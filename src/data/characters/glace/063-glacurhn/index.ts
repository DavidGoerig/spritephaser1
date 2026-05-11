import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Juggernaut'];

export const personnage: Personnage = {
  id: 63,
  nom: 'Glacurhn',
  element: 'glace',
  classe: 'Juggernaut',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin massif, corps partiellement cristallisé par des Drains successifs — ses jointures sont devenues de l'ambre gelé. Yeux opaques, chaleur interne quasi nulle.`,
    personnalite: `Endurant et silencieux. Voit son propre gel progressif comme un don naturel au collectif — ce qu'il perd, d'autres le gagnent.`,
    lore: `Glacurhn s'est soumis à trois Drains partiels pour la Convergence. Sa signature glaciale est partiellement extraite et stockée dans les infrastructures thermiques de Kar-Dum — une ville chthonienne qui utilise le froid des Givrins pour ses systèmes de refroidissement industriel. La monarchie d'Iskral le considère comme un traitre à la stase.`,
    combat: `Résistance aux dégâts par cristallisation corporelle — les coups physiques s'y brisent. Charge dévastatrice qui libère du froid concentré. Absorbe la chaleur adverse et l'annule.`,
  },
};
