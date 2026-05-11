import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 210,
  nom: `Acrpyyx`,
  element: 'Feu',
  element2: 'Insecte',
  classe: 'Tireur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Essaim de scarabées de feu — ses insectes sont ignifugés et portent des charges de feu sur les cibles. L'infestation de feu est impossible à éteindre normalement.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Son Essaim transporte l'état Brûlure sur chaque cible touchée. Les cases Insecte qu'il contrôle émettent une chaleur passive.`,
};

export default character;
