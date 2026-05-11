import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 318,
  nom: `Myriel`,
  element: 'Insecte',
  element2: 'Ténèbres',
  classe: 'Gardien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Ténèbres se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Ténèbres. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Ténèbres — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Colonie de la nuit — ses insectes vivent dans les ténèbres et surgissent de l'obscurité. Ses zones de ténèbres grouillent d'insectes invisibles. L'obscurité bouge et mord.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Son Essaim est invisible dans les zones Ténèbres. Ses insectes dans les zones Ténèbres ont des dégâts doublés (surprise garantie).`,
};

export default character;
