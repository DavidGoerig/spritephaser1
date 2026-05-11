import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Vanguard'];

export const personnage: Personnage = {
  id: 131,
  nom: 'Barrière-Verte',
  element: 'plante',
  classe: 'Vanguard',
  espece: 'Sylvan',
  region: 'Sylvera',
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
    physique: `Sylvan massif, corps recouvert d'une couche d'écorce secondaire née d'un Drain de signature végétale. Ses yeux ont viré au vert profond des forêts de Leth'Var.`,
    personnalite: `Évangéliste végétal. Pense que la Faim des Racines prouve que l'accumulation biologique individuelle détruit — la Convergence redistribue pour prévenir.`,
    lore: `Barrière-Verte opère à Leth'Var comme avant-garde doctrinale de la Convergence. Il recrute parmi les Gardiens de la Clairière — ceux qui croient en la destruction cyclique trouvent dans la doctrine sacrificielle une résonance. Les Conservateurs de la Sève le rejettent violemment.`,
    combat: `Avant-garde défensive, absorbe les dégâts végétaux adverses pour les redistribuer à ses alliés. Mur de végétation vivante en première ligne.`,
  },
};
