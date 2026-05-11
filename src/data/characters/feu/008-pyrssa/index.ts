import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 8,
  nom: `Pyrossa`,
  element: 'feu',
  classe: 'Tireur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Taille moyenne, yeux perçants, peau forge-trempe qui ressemble à un hâle mais est une trempe de forge. Deux canons à mains tirant des balles de magma cristallisé. Holsters en peau de drake achetés à un artisan de la Scorie payé au juste prix alors que l'Empire sous-payait les mêmes pour son armement.`,
    personnalite: `Exécute exactement ce pour quoi elle est payée, ni plus ni moins. Son code professionnel est rigide : pas d'enfants, pas de soigneurs, pas de destruction de mémoire collective. Refuse systématiquement la Convergence depuis qu'elle a compris ce qu'ils font aux Élus qu'ils 'convertissent'.`,
    lore: `Opère de part et d'autre des lignes impériales et dissidentes. Enregistre ses contrats auprès des Guildes de Virex (Isthme) — environ la moitié d'entre eux. Cette position lui a valu d'être sur la liste des cibles de la Convergence, ce qu'elle juge raisonnable. Elle charge le double pour tout contrat venant de l'Empire (majoration de principe) et travaille pour les Dissidentes au prix coûtant.`,
    combat: `Salves Ignifuges (volée rapide à 2 coups), Mines Thermoactives (déclenchées au passage), Tir Croisé (deux coups synchronisés des deux canons garantissant un critique sur la même cible au même tour).`,
  },
  stats: ELEMENT_KITS['feu']['Tireur'],
  modificateurs: [],
};

export default character;
