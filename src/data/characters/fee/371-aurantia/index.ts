import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Vanguard'];

export const personnage: Personnage = {
  id: 371,
  nom: 'Aurantia',
  element: 'fee',
  classe: 'Vanguard',
  espece: 'Sylvane',
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
    physique: `Sylvane aux yeux devenus dorés après un Drain féerique partiel. Armure de la Convergence décorée de symboles d'équité. Sa présence crée un champ de redistribution visible.`,
    personnalite: `Pense que l'énergie féerique est précisément celle qui doit être redistribuée en priorité — car c'est celle que l'Empire monopolise le plus.`,
    lore: `Aurantia est l'avant-garde doctrinale de la Convergence à Sylvera. Elle argue que l'élément Fée appartient à tous — que la Citadelle l'a confisqué comme elle a confisqué les Élus. Sa présence à Leth'Var est perçue comme une menace par les agents impériaux.`,
    combat: `Avant-garde féerique, redistribue l'énergie des attaques reçues à ses alliés. Sa présence frontale crée un champ de redistribution lumineuse qui renforce la formation.`,
  },
};
