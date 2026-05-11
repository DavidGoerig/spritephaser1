import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 242,
  nom: `Frostchaan`,
  element: 'Glace',
  element2: 'Fée',
  classe: 'Enchanteur-Soutien',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lumière arctique — ses sorts de lumière Fée refractent la glace en prismes d'énergie. Ses Barrières de Lumière sont des murs de cristal translucide indestructibles.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses Barrières de Lumière sont en cristal de glace (résistance doublée). Rayon de Lumière dans les zones de glace se réfracte en plusieurs angles.`,
};

export default character;
