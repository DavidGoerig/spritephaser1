import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 315,
  nom: `Gornon`,
  element: 'Dragon',
  element2: 'Combat',
  classe: 'Assassin',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon guerrier — maîtrise le combat à mains nues à l'échelle draconique. Ses Frappes des Griffes sont des techniques martiales codifiées. La Tempête de Coups et la Tempête de Griffes se confondent.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Ses techniques martiales Combat s'appliquent avec la puissance draconique (dégâts ×2). Frappe des Griffes est traitée comme Tempête de Coups.`,
};

export default character;
