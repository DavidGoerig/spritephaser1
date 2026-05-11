import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 298,
  nom: `Syrrzeax`,
  element: 'Vent',
  element2: 'Dragon',
  classe: 'Mage-Burst',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon du Ciel — vole en permanence. Son Souffle est une tornade d'énergie draconique. Dans ses zones de Vent, il est inarrêtable et inaccessible depuis le sol.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Vol Draconique est permanent — ne coûte pas d'action. Son Souffle déclenche un Cyclone sur le trajet.`,
};

export default character;
