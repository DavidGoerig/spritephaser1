import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 341,
  nom: `Chalbelis`,
  element: 'Fée',
  element2: 'Combat',
  classe: 'Assassin',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Dissidentes',
  description_physique: `Fées dont la nature Fée s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Fée/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Fée et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Paladin de lumière — frappe avec une lumière bénie qui purge. Ses coups de poing libèrent des éclairs de Fée. Tempête de Coups bénite purge les altérations de statut des cibles amies frappées.`,
  kit: ELEMENT_KITS['Fée'],
  modifications_classe: `Ses attaques physiques purifient les alliés adjacents (effet Purification). Brise-Bouclier brisé par lumière bénie — la cible perd également ses buffs.`,
};

export default character;
