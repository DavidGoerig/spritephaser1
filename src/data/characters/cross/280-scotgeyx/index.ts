import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 280,
  nom: `Scotgeyx`,
  element: 'Sol',
  element2: 'Ténèbres',
  classe: 'Spécialiste',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Terrain souterrain obscur. Ses tunnels sont dans des ténèbres totales. Il combat depuis sous terre en attaquant vers le haut. Ses zones Sol sont des zones de ténèbres naturelles.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses Tunnels créent des zones Ténèbres permanentes. Peut attaquer depuis le sous-sol vers le haut (portée +1 case vers le haut).`,
};

export default character;
