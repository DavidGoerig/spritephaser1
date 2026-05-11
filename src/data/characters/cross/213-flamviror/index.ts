import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 213,
  nom: `Flamviror`,
  element: 'Feu',
  element2: 'Poison',
  classe: 'Vanguard',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Convergence',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Combat alliant Feu et Poison en synergie.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Peut emprunter 3 sorts de Poison.`,
};

export default character;
