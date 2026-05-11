import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 218,
  nom: `Niphthis`,
  element: 'Eau',
  element2: 'Glace',
  classe: 'Juggernaut',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Glace se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Glace. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Glace — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maître de l'eau sous toutes ses formes. Crée des ponts de glace sur ses canaux d'eau, piège les ennemis entre état liquide et solide. La température de son terrain est une arme.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Peut geler instantanément ses propres cases Eau en cases Glace. Ses sorts Eau dans les zones Glace ont des effets de ralentissement doublés.`,
};

export default character;
