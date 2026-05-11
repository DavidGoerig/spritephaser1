import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 260,
  nom: `Zerstris`,
  element: 'Electrique',
  element2: 'Combat',
  classe: 'Battlemage',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Poings d'éclairs. Chaque frappe martiale libère une décharge. Tempête de Coups électrisée frappe 2× — une fois physiquement, une fois électriquement. Berserker Électrique est cataclysmique.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses attaques physiques libèrent des arcs électriques sur les cibles adjacentes. En mode Berserker, ses décharges touchent toutes les cibles dans un rayon de 2.`,
};

export default character;
