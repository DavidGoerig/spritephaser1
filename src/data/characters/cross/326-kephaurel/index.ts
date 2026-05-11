import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 326,
  nom: `Kephaurel`,
  element: 'Psy',
  element2: 'Fée',
  classe: 'Artillerie',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lumière mentale — ses sorts Fée guérissent les traumas psychiques. Ses sorts Psy peuvent être bienveillants ou malveillants. La frontière entre soin et manipulation est floue dans ses mains.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Peut utiliser ses sorts Psy pour soigner les effets de statut mentaux. Bénédiction Fée double la durée de ses buffs psychiques.`,
};

export default character;
