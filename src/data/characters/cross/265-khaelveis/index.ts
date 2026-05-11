import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 265,
  nom: `Khaelveis`,
  element: 'Plante',
  element2: 'Dragon',
  classe: 'Vanguard',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Convergence',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon de la Jungle — les forêts primordiales l'obéissent. Son Vol Draconique au-dessus de ses zones végétales réveille les plantes dormantes. La Jungle Primordiale abrite son dragon.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Vol Draconique fait pousser instantanément des Plantes sous son passage. Rugissement fait pousser une Forêt Instantanée dans la zone d'effet.`,
};

export default character;
