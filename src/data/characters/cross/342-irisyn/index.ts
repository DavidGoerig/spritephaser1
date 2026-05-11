import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 342,
  nom: `Irisyn`,
  element: 'Fée',
  element2: 'Normal',
  classe: 'Escrimeur',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',
  description_physique: `Fées dont la nature Fée s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Fée/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Fée et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lumière pratique — utilise la magie Fée avec une économie parfaite. Pas de miracles superflus. Chaque Rayon de Lumière a une cible précise. Chaque Bénédiction une durée calculée.`,
  kit: ELEMENT_KITS['Fée'],
  modifications_classe: `Ses sorts Fée consomment 30% moins. Miracle peut être utilisé deux fois par combat (gestion normale des ressources divines).`,
};

export default character;
