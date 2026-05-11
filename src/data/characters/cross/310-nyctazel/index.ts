import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 310,
  nom: `Nyctazel`,
  element: 'Dragon',
  element2: 'Ténèbres',
  classe: 'Plongeur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon des abysses — vit dans les ténèbres les plus profondes. Son Souffle éteint la lumière au lieu d'en créer. Sur ses cases Ténèbres, il est invisible même à taille draconique.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Ses cases Ténèbres amplifient ses sorts Dragon. Vol Draconique dans les zones Ténèbres est silencieux et invisible.`,
};

export default character;
