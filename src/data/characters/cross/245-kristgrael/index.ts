import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 245,
  nom: `Kristgrael`,
  element: 'Glace',
  element2: 'Gravité',
  classe: 'Plongeur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des astéroïdes de glace et les fait tomber via gravité. Collapse Gravitationnel dans une zone gelée crée une compression de glace explosive.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses Singularités créent des sphères de glace orbitales. Collapse Gravitationnel dans ses zones de glace inflige des dégâts Glace×2.`,
};

export default character;
