import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 491,
  nom: `Avant-Poste`,
  element: 'Combat',
  classe: 'Vanguard',
  espece: 'Pyrien',
  region: 'Varkhol',
  faction: 'Convergence',
  description_physique: `Pyrien de la frontiere entre Varkhol et Isthme, corps forme par le double heritage martial des forges pyriens et des ecoles de Virex. Porte les marques des rituels de la Convergence superposes aux tatouages traditionnels de Khar-Vurn, comme deux langues ecrites sur la meme peau.`,
  description_personnalite: `Avant-garde doctrinale de la Convergence dans les zones ou Varkhol rencontre Isthme. Le combat, dit-il, est la forme la plus honnete de contribution collective : chaque coup donne est une ressource offerte au systeme. La Convergence a simplement formalise ce que les forges de Khar-Vurn faisaient deja.`,
  position_lore: `Ne a la frontiere de Varkhol et d'Isthme, dans une lignee qui a participe au mouvement de radicalisation de la doctrine feerique en theologie sacrificielle, ce que les Peuples des Sables ont appele le Premier Drain. Pour lui, les forges de Khar-Vurn et les rituels de drain de la Convergence sont deux expressions du meme principe : transformer ce qu'on a en quelque chose d'utile pour le collectif. Precede les equipes de drain dans les zones de la Saturation des Elus.`,
  style_combat: `Ouvre la voie dans les zones denses d'anomalie elementaire de Virex et de Varkhol, absorbant les premiers chocs et convertissant l'energie des impacts en impulsions redistributives pour ses allies de la Convergence.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
