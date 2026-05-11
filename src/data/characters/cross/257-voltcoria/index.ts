import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 257,
  nom: `Voltcoria`,
  element: 'Electrique',
  element2: 'Poison',
  classe: 'Juggernaut',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Convergence',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Électrophorèse toxique — l'électricité accélère la propagation du poison dans l'organisme. Une seule décharge charge le système nerveux de toxines. Épidémie électrisée est instoppable.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique infligent également Venin. EMP dans les zones empoisonnées accélère la progression de toutes les toxines actives.`,
};

export default character;
