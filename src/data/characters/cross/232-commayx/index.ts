import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 232,
  nom: `Commayx`,
  element: 'Eau',
  element2: 'Normal',
  classe: 'Plongeur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maîtrise pratique de l'eau — pas de spectacle, juste de l'efficacité. Utilise l'eau comme outil tactique : bloquer, canaliser, inonder. Aucun gaspillage d'énergie élémentaire.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses sorts Eau consomment 30% moins de ressources. Canal d'eau peut être créé en forme libre (pas seulement en ligne droite).`,
};

export default character;
