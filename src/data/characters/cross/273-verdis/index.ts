import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 273,
  nom: `Verdis`,
  element: 'Plante',
  element2: 'Combat',
  classe: 'Battlemage',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Empire',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Karaté de la forêt — ses bras sont des ronces, ses coups sont des fouets de lianes. Corps-à-corps avec lui dans sa jungle est un suicide assisté par la végétation.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses attaques physiques utilisent ses lianes comme extensions — portée de mêlée +2 cases. Tempête de Coups dans ses zones Plante déclenche Mur de Ronces autour des cibles.`,
};

export default character;
