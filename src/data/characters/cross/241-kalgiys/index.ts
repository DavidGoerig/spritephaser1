import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 241,
  nom: `Kalgiys`,
  element: 'Glace',
  element2: 'Ténèbres',
  classe: 'Spécialiste',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Froid des ombres. Ses ténèbres ont une température en dessous du zéro absolu. Les ennemis dans ses zones obscures se refroidissent progressivement jusqu'à la paralysie.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses zones Ténèbres infligent des dégâts Glace passifs. Nuit Absolue avec composante Glace gèle tous les ennemis visibles 1 tour.`,
};

export default character;
