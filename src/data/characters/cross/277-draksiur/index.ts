import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 277,
  nom: `Draksiur`,
  element: 'Sol',
  element2: 'Dragon',
  classe: 'Escrimeur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon des profondeurs — vit sous terre. Son Souffle creuse des tunnels. Sur ses cases Sol, il peut surgir de n'importe où comme du sol lui-même. Le sol est son ocean.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Tunnel peut être activé instantanément depuis n'importe quelle case Sol. Vol Draconique peut être remplacé par Plongée Souterraine à la même vitesse.`,
};

export default character;
