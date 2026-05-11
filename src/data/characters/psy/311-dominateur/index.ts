import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 311,
  nom: `Volhex`,
  element: 'Psy',
  classe: 'Vanguard',
  espece: 'Nereide',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Nereide dont la Pression Mentale projective pousse litteralement devant lui — il penche naturellement vers l'avant quand il avance, comme contre un fort vent de sa propre creation. Yeux bleu electrique, tempes qui pulsent a chaque decharge. Armure de premiere ligne avec amplificateurs aux epaules.`,
  description_personnalite: `Avance. C'est sa philosophie, sa strategie, sa methode. La Convergence lui offre exactement ce contexte — une structure ou avancer a un sens collectif.`,
  position_lore: `Volhex est ne a Thalassyr dans la generation qui a reconstruit les courants apres le Silence des Vents. Il a vu comment la reconstruction artificielle des flux de la Confederation marchande — utile mais controlee par l'Empire — a transforme la neutralite affichee de Thalassyr en dependance informelle. La Convergence lui offre l'alternative : redistribuer la puissance des Elus pluto que de la concentrer. Il a rejoint quand un agent de la Convergence lui a montre les archives du Premier Drain a Ash'Rael.`,
  style_combat: `Pression Mentale continue en avant — poussee de la ligne adverse a chaque pas. Swap pour placer ses allies dans les breches creees. Cage Psychique sur les flancs.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Pression Mentale s'applique a toutes les unites dans un cone de 3 cases devant lui, les poussant d'1 case par tour sans cout PM. Son deplacement de Vanguard peut passer a travers les unites ennemies.`,
};

export default character;
