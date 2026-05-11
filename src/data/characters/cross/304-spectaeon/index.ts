import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 304,
  nom: `Spectaeon`,
  element: 'Vent',
  element2: 'Spectre',
  classe: 'Vanguard',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Convergence',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantômes du vent — ses spectres voyagent dans ses courants aériens. Passe-Muraille via le vent à la vitesse du vent. Les zones Vent abritent des spectres invisibles.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Passe-Muraille dans ses zones de Vent coûte 0 action. Ses Spectres se déplacent à vitesse de vent (double les déplacements normaux).`,
};

export default character;
