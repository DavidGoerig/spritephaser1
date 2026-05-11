import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 303,
  nom: `Galus`,
  element: 'Vent',
  element2: 'Poison',
  classe: 'Escrimeur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Vent toxique — disperse le Brouillard Corrosif sur toute la carte via ses courants d'air. Son Cyclone de poison envahit toutes les zones adjacentes. Le vent lui-même empoisonne.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Brouillard Corrosif se propage automatiquement dans ses zones de Vent. Son Cyclone distribue le Venin Paralytique à portée maximale.`,
};

export default character;
