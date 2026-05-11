import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 224,
  nom: `Maracryx`,
  element: 'Eau',
  element2: 'Insecte',
  classe: 'Assassin',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dirige des colonies de scarabées aquatiques. Son Essaim nage dans ses canaux et attaque depuis sous l'eau. L'infestation de ses zones est aussi sous-marine.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Son Essaim peut se déplacer dans les cases Eau à vitesse doublée. Infestation dans les zones d'eau se propage automatiquement.`,
};

export default character;
