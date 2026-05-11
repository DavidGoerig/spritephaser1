import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 230,
  nom: `Undhmasel`,
  element: 'Eau',
  element2: 'Gravité',
  classe: 'Enchanteur-Capteur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maîtrise la pression aquatique. Ses zones d'eau sous haute pression gravitationnelle écrasent les ennemis au fond. Singularité en zone d'eau crée un tourbillon centrifuge.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Haute Gravité dans ses zones d'eau crée une pression d'écrasement doublée. Attraction et Répulsion opèrent avec une portée doublée dans ses zones aquatiques.`,
};

export default character;
