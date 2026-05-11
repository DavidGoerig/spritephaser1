import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 300,
  nom: `Nimia`,
  element: 'Vent',
  element2: 'Psy',
  classe: 'Artillerie',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Voix dans le vent — ses Pressions Mentales arrivent de toutes les directions via le vent. Les ennemis ne savent pas d'où vient la confusion. Les sons dans ses zones de vent sont ses armes.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Ses sorts Psy s'appliquent à toutes les cibles dans ses zones de Vent. Hantise Mentale : la confusion se propage d'une cible à l'autre via le vent.`,
};

export default character;
