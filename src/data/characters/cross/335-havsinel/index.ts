import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 335,
  nom: `Havsinel`,
  element: 'Ténèbres',
  element2: 'Gravité',
  classe: 'Juggernaut',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Convergence',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Trou noir de ténèbres. Ses Singularités sont obscures — aspirent lumière et matière. Collapse Gravitationnel dans ses zones de ténèbres est une mort certaine pour qui y est pris.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Ses Singularités dans les zones Ténèbres sont invisibles jusqu'au déclenchement. Collapse Gravitationnel dans ses zones Ténèbres double les dégâts.`,
};

export default character;
