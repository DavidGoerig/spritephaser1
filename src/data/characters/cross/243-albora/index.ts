import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 243,
  nom: `Albora`,
  element: 'Glace',
  element2: 'Poison',
  classe: 'Enchanteur-Capteur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Conserve ses toxines dans la glace pour les libérer à température contrôlée. Ses zones gelées empoisonnées libèrent les toxines quand elles fondent sous l'effet de la chaleur ennemie.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses cases Glace contiennent du Venin en réserve — libéré si la glace fond. Brouillard Corrosif peut être gelé pour créer des nuages de glace toxique.`,
};

export default character;
