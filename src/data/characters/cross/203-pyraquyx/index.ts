import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 203,
  nom: `Pyraquyx`,
  element: 'Feu',
  element2: 'Eau',
  classe: 'Enchanteur-Soutien',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Eau se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Eau. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Eau — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Génère des geysers de vapeur brûlante — les cases Eau chauffées infligent des dégâts élémentaires mixtes. Pression de vapeur pour projeter les ennemis hors des zones sécurisées.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Peut surchauffer les cases Eau alliées pour créer des zones de vapeur. Ses sorts Feu dans les cases Eau ont une portée doublée.`,
};

export default character;
