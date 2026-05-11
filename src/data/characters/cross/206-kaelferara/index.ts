import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 206,
  nom: `Kaelferara`,
  element: 'Feu',
  element2: 'Plante',
  classe: 'Plongeur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Plante se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Plante. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Plante — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Incendie contrôlé — brûle ses propres ronces pour créer des explosions de bois enflammé. Ses lianes se transforment en fouets de feu au combat rapproché.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses ronces peuvent s'enflammer sur commande (zone de feu instantanée). Les cases Plante qu'il traverse s'embrasent derrière lui.`,
};

export default character;
