import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 493,
  nom: `Supreme`,
  element: 'Combat',
  classe: 'Specialiste',
  espece: 'Inconnu',
  region: 'Multi-region',
  faction: 'Independent',
  description_physique: `Corps qui semble avoir integre les techniques de combat de toutes les regions du monde : posture de Khar-Vurn, agilite de Virex, solidite de Kar-Dum, fluidite de Neris. Son element Combat est d'une purete et d'une polyvalence que les theoriciens des academies de Virex utilisent comme reference theorique.`,
  description_personnalite: `Ancien combattant devenu theorie vivante du combat. Ne cherche plus a gagner des batailles mais a comprendre ce que le combat revele du monde. A combattu pour l'Empire, contre l'Empire, avec la Convergence, contre la Convergence. L'unique conclusion qu'il en a tiree : personne n'a raison pour les bonnes raisons.`,
  position_lore: `Anomalie du Calendrier que les Fees classent comme 'entite de puissance Combat indeterminee, allégeance inconnue'. A ete recrute par toutes les factions et a servi chacune le temps de comprendre ses failles. Vit maintenant dans les zones d'anomalie de Virex, que la Saturation des Elus a rendu impraticables pour la surveillance standard, enseignant discretement les combattants qui ne savent pas encore quelle faction ils vont rejoindre.`,
  style_combat: `Maitrise toutes les techniques de combat elementaire et physique avec une aisance qui desorganise les adversaires formes dans un seul style. Ses interventions reconfigurent le terrain tactique de facon que personne n'avait anticipee.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
