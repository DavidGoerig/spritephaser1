import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 220,
  nom: `Algflys`,
  element: 'Eau',
  element2: 'Sol',
  classe: 'Mage-Burst',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Sol se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Sol. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Sol — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée de la boue comme terrain de contrôle. Les cases boueux ralentissent et piègent. Ses Fossés se remplissent d'eau. La carte devient un marécage dont lui seul profite.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses cases Sol inondées créent des zones de boue (ralentissement 50%). Ses sorts Eau dans les zones Sol ont des effets de zone doublés.`,
};

export default character;
