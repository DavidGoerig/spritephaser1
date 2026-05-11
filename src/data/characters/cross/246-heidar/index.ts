import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 246,
  nom: `Heidar`,
  element: 'Glace',
  element2: 'Combat',
  classe: 'Mage-Burst',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Frappe avec des poings de glace. Ses techniques martiales refroidissent les points d'impact. La Tempête de Coups avec ses gants de glace fige progressivement la cible.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses attaques physiques infligent Ralentissement progressif. Après 3 frappes consécutives, la cible est gelée 1 tour.`,
};

export default character;
