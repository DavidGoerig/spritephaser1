import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 264,
  nom: `Sylvys`,
  element: 'Plante',
  element2: 'Vent',
  classe: 'Escrimeur',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Empire',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pollen de combat — son Vent disperse des spores paralysantes dans toute la carte. Le vent dans ses zones de plantes devient un vecteur de contamination biologique.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses Spores sont dispersées à portée doublée par son Vent. Ses sorts Vent dans les zones Plante génèrent automatiquement un nuage de Spores.`,
};

export default character;
