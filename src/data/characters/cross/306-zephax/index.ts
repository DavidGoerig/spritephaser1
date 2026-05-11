import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 306,
  nom: `Zephax`,
  element: 'Vent',
  element2: 'Combat',
  classe: 'Spécialiste',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Arts martiaux aériens — frappe depuis les airs, toujours en mouvement. Ses Charges sont des plongées depuis les airs. Tempête de Coups en vol frappe en cercle complet.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Peut attaquer depuis les zones aériennes (cases Vent de niveau supérieur). Charge depuis les airs inflige des dégâts doublés (vélocité).`,
};

export default character;
