import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 278,
  nom: `Gundhexan`,
  element: 'Sol',
  element2: 'Insecte',
  classe: 'Vanguard',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maître des fourmilières de combat. Ses insectes creusent et surgissent de ses cases Sol. Chaque case Sol est une entrée potentielle de colonie. Le sol bouge sous les pieds ennemis.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses insectes peuvent Tunneler gratuitement. Ses cases Sol cachent des colonies — une fois par tour, surgissent des insectes d'une case Sol aléatoire.`,
};

export default character;
