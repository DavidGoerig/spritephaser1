import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 294,
  nom: `Rocys`,
  element: 'Roche',
  element2: 'Spectre',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pierre hantée — ses formations rocheuses abritent des spectres. Ses Colonnes sont des portails emprisonnés. Le Labyrinthe de Pierre cache une Dimension Spectrale complète.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses cases Roche permettent l'émergence de Spectres alliés. Son Labyrinthe est simultanément une Dimension Spectrale.`,
};

export default character;
