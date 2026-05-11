import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 231,
  nom: `Salara`,
  element: 'Eau',
  element2: 'Combat',
  classe: 'Juggernaut',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Arts martiaux aquatiques — nage et frappe en un seul mouvement fluide. Ses Charges traversent ses propres zones d'eau sans ralentissement. Submission depuis l'eau est inescapable.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses techniques de Combat peuvent être lancées depuis les zones d'eau sans pénalité. Course dans l'eau est aussi rapide que sur terre.`,
};

export default character;
