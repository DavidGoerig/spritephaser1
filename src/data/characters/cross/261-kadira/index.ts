import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 261,
  nom: `Kadira`,
  element: 'Electrique',
  element2: 'Normal',
  classe: 'Artillerie',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Utilise l'électricité avec une précision chirurgicale. Chaque joule a un but. Sa Frappe Brute est suivie d'une décharge calibrée. Jamais de gaspillage d'énergie.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique consomment 25% moins de ressources. Neutralisation peut court-circuiter temporairement les capacités élémentaires d'une cible.`,
};

export default character;
