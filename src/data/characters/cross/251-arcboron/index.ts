import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 251,
  nom: `Arcboron`,
  element: 'Electrique',
  element2: 'Vent',
  classe: 'Escrimeur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Tempête d'éclairs. Ses Vortex aspirent les éclairs. Le Cyclone électrique qu'il crée est le sort de zone le plus dévastateur du game. Courant Dirigé amplifié devient inarrêtable.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique lancés dans ses zones Vent ont portée doublée. Cyclone Électrique : Vortex+Tempête de Foudre combinés.`,
};

export default character;
