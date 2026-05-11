import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 314,
  nom: `Vrethpesis`,
  element: 'Dragon',
  element2: 'Gravité',
  classe: 'Tireur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon gravitationnel — son Vol courbe la réalité. Ses Rugissements créent des ondes gravitationnelles. Éveil du Prédateur dans une zone de Haute Gravité est inévitable.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Vol Draconique crée des zones de Haute Gravité dans son sillage. Rugissement génère une onde de choc gravitationnelle.`,
};

export default character;
