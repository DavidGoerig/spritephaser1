import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 225,
  nom: `Thalis`,
  element: 'Eau',
  element2: 'Psy',
  classe: 'Escrimeur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maîtrise les courants de pensée comme des courants d'eau. Ses illusions semblent noyées, flottantes. Ses Swaps télékinétiques s'effectuent via des jets d'eau dirigés mentalement.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Swap peut s'effectuer à travers les cases Eau sans ligne de vue directe. Ses illusions durent plus longtemps dans les zones d'eau.`,
};

export default character;
