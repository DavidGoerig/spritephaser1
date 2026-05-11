import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 350,
  nom: `Baricpugyx`,
  element: 'Gravité',
  element2: 'Combat',
  classe: 'Mage-Burst',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',
  description_physique: `Néréides dont la nature Gravité s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Gravité/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Gravité et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Poing gravitationnel — concentre toute la force de la gravité dans ses frappes martiales. Sa Tempête de Coups sous Haute Gravité crée des ondes de choc sismiques. Tout ce qu'il touche est aplati.`,
  kit: ELEMENT_KITS['Gravité'],
  modifications_classe: `Ses attaques physiques sous Haute Gravité infligent Écrasement en plus. Tempête de Coups crée des zones de Haute Gravité sur chaque point d'impact.`,
};

export default character;
