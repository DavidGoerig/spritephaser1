import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 236,
  nom: `Niphbrein`,
  element: 'Glace',
  element2: 'Roche',
  classe: 'Tireur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée de la glace rocheuse — des formations cristallines à mi-chemin entre la pierre et la glace. Ses Colonnes Rocheuses sont des stalactites de glace indestructibles.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses Boucliers de Pierre sont faits de glace renforcée (résistance doublée). Ses cases Roche gelées ne peuvent pas être détruites par les sorts de chaleur.`,
};

export default character;
