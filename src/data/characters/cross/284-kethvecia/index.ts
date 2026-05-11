import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 284,
  nom: `Kethvecia`,
  element: 'Sol',
  element2: 'Gravité',
  classe: 'Plongeur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Augmente la gravité du sol pour créer des zones d'effondrement. Ses Soulèvements profitent de la gravité augmentée pour des impacts dévastateurs. Le sol s'effondre sous les ennemis.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Haute Gravité dans ses zones Sol crée des Affaissements automatiques. Ses Soulèvements sous haute gravité ont des dégâts doublés.`,
};

export default character;
