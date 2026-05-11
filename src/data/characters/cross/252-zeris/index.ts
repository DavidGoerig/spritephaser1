import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 252,
  nom: `Zeris`,
  element: 'Electrique',
  element2: 'Dragon',
  classe: 'Vanguard',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Convergence',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon foudre — l'élément du Dieu Dragon du Tonnerre. Son Souffle est une tempête d'éclairs. Sur ses cases Electrique, ses capacités draconiennes s'électrifient entièrement.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Souffle Élémentaire déclenche une Tempête Statique sur les cases touchées. Ses Écailles conduisent l'électricité — immunisé aux sorts Electrique, décharge à l'impact.`,
};

export default character;
