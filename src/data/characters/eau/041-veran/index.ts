import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Vanguard'];

export const personnage: Personnage = {
  id: 41,
  nom: 'Veran',
  element: 'eau',
  classe: 'Vanguard',
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
    physique: `Néréide aux yeux dorés brûlés par un Drain partiel — la couleur originelle a fondu. Mouvements mécaniquement précis, comme si chaque geste avait été calibré par doctrine.`,
    personnalite: `Prêcheur convaincu, cite le Premier Drain d'Ash'Rael comme révélation fondatrice. Ne cherche plus à convaincre — il démontre. Sa certitude est calme, sans fanatisme apparent.`,
    lore: `Veran est l'avant-garde doctrinal de la Convergence dans la Confédération marchande de Néris. Il argue depuis le Silence des Vents que la privatisation de l'information commerciale — ce que l'Élu Électrique fait techniquement pour l'Empire — est exactement la forme de propriété individuelle que le Premier Drain visait à détruire. Certains marchands l'écoutent.`,
    combat: `Avant-garde de choc, absorbe une partie de l'énergie adverse pour la redistribuer à ses alliés en doctrine vivante. Sa présence en première ligne inspire ses partisans et démoralise les ennemis qui savent ce qu'il fait de son propre corps.`,
  },
};
