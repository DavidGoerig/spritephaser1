import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 274,
  nom: `Normfrora`,
  element: 'Plante',
  element2: 'Normal',
  classe: 'Artillerie',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Agriculture de combat — utilise les plantes avec la rationalité d'un fermier et l'efficacité d'un soldat. Chaque plante créée a une fonction défensive ou offensive précise.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses cases Plante persistent sans coût de maintenance. Ses sorts Plante consomment 20% moins de ressources.`,
};

export default character;
