import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 222,
  nom: `Undhel`,
  element: 'Eau',
  element2: 'Vent',
  classe: 'Artillerie',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Tempête marine. Ses Rafales propulsent de l'eau à haute vélocité. Le terrain devient une zone de vent et de marée impossible à traverser en ligne droite.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses sorts Vent dans les zones d'eau créent des vagues de knockback. Vortex combiné Eau/Vent a une portée de zone doublée.`,
};

export default character;
