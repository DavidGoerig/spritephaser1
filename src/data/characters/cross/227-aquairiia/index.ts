import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 227,
  nom: `Aquairiia`,
  element: 'Eau',
  element2: 'Fée',
  classe: 'Gardien',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Eau bénite aux propriétés de guérison amplifiées. Ses zones d'eau soignent passivement les alliés qui les traversent. Vague Sacrée lancée depuis ses canaux a une portée doublée.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Les alliés dans ses zones d'eau reçoivent un Aura de Soin passif. Ses sorts Eau alliés ont des effets de régénération supplémentaires.`,
};

export default character;
