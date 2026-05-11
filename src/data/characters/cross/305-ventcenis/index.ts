import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 305,
  nom: `Ventcenis`,
  element: 'Vent',
  element2: 'Gravité',
  classe: 'Gardien',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Contra-gravité — son Vent et sa Gravité s'opposent pour créer des zones de lévitation. Les ennemis dans ses zones sont désaxés — ni le sol ni l'air ne les supportent normalement.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Peut créer des zones de lévitation forcée (ennemis en apesanteur = faciles à cibler). Ses sorts Vent et Gravité se combinent en effets hybrides imprévisibles.`,
};

export default character;
