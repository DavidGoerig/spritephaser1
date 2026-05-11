import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 205,
  nom: `Kadbris`,
  element: 'Feu',
  element2: 'Electrique',
  classe: 'Juggernaut',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Convergence',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Electrique se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Electrique. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Electrique — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Génère des arcs électriques à travers les zones de feu. Le plasma qu'il crée est le terrain le plus hostile du jeu — brûlure et électrocution simultanées.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Les cases Feu qu'il crée propagent l'électricité. Ses sorts Electrique dans les zones de Feu infligent Brûlure en plus.`,
};

export default character;
