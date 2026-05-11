import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 216,
  nom: `Embrmarus`,
  element: 'Feu',
  element2: 'Combat',
  classe: 'Enchanteur-Soutien',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Arts martiaux enflammés — chaque coup de poing libère une onde de choc thermique. Sa Tempête de Coups est une tempête de feu littérale. Le corps-à-corps avec lui est suicidaire.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses attaques physiques infligent des dégâts Feu supplémentaires. Berserker en mode Feu double ses dégâts élémentaires au lieu de ses dégâts physiques.`,
};

export default character;
