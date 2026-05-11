import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 321,
  nom: `Hexax`,
  element: 'Insecte',
  element2: 'Spectre',
  classe: 'Enchanteur-Capteur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Insectes morts — ses colonies sont spectrale, mortes mais actives. Ses insectes fantômes traversent les armures physiques. On ne peut pas écraser un insecte qui n'est plus vivant.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Son Essaim spectral ignore toutes les armures physiques. Ses insectes peuvent traverser les murs (Passe-Muraille d'insecte).`,
};

export default character;
