import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 271,
  nom: `Nexlyyn`,
  element: 'Plante',
  element2: 'Spectre',
  classe: 'Plongeur',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Arbres hantés — ses plantes sont habitées par des esprits. Ses lianes sont des bras de fantômes. La Jungle Primordiale est une forêt de spectres végétaux.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses cases Plante abritent des spectres qui attaquent les ennemis. Passe-Muraille opère uniquement à travers ses cases Plante (racines comme portails).`,
};

export default character;
