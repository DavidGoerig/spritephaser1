import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 307,
  nom: `Platauor`,
  element: 'Vent',
  element2: 'Normal',
  classe: 'Enchanteur-Soutien',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Vent fonctionnel — utilise les courants aériens pour des effets pratiques. Course assistée par le vent. Ses Rafales sont précises et chirurgicales, jamais catastrophiques.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Course dans ses zones de Vent est gratuite (porté par les courants). Ses sorts Vent consomment 30% moins d'énergie.`,
};

export default character;
