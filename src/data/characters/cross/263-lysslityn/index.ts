import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 263,
  nom: `Lysslityn`,
  element: 'Plante',
  element2: 'Roche',
  classe: 'Assassin',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des formations lithophytes — plantes qui poussent dans la roche et la disloquent. Ses Colonnes Rocheuses sont recouvertes de ronces. La défense végétale-minérale est impénétrable.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses Murs de Ronces sont en ronces-roche (résistance doublée). Ses cases Plante sur Roche sont permanentes et indestructibles sauf par le Feu.`,
};

export default character;
