import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 398,
  nom: `Sylvacide`,
  element: 'Poison',
  classe: 'Tireur',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Independent',
  description_physique: `Peau couverte de motifs vegetaux naturels rappelant les plantes carnivores de la foret devastee de Sylvera. Ses fleches sont stockees dans un carquois fabrique d'un bois vivant qui continue de secreter des toxines, qu'il renouvelle regulierement depuis les reserves de Leth'Var.`,
  description_personnalite: `Mercenaire cynique avec une sensibilite secrete aux questions de memoire forestiere. Tire pour qui le paie, mais refuse certains contrats : ceux qui impliquent de detruire ce qui reste de la foret ancienne de Sylvera, ou d'extraire des Elus pour les rituels de drain.`,
  position_lore: `Ne a la lisiere de Sylvera dans une zone mi-intacte mi-devastee par la Faim des Racines. Son element s'est manifeste sous forme de Poison plutot que de Plante, une divergence dans la lignee qui l'a rendu inclassable pour les Fees et donc utile comme freelance. Vend ses services dans toute la region.`,
  style_combat: `Tire des fleches empoisonnees depuis des positions dissimulees, changeant de position apres chaque tir. Ses poisons ralentissent progressivement les mouvements adverses, transformant chaque engagement en course d'usure qu'il est positionne pour gagner.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
