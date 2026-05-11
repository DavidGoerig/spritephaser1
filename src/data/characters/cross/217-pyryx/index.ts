import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 217,
  nom: `Pyryx`,
  element: 'Feu',
  element2: 'Normal',
  classe: 'Enchanteur-Capteur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `La braise ordinaire — utilise le feu de manière parfaitement calibrée, sans excès. Sa Frappe Brute enflammée est précise là où les autres brûlent aveuglément. Jamais de collatéral.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Frappe Brute inflige des dégâts Feu calibrés (ni trop, ni pas assez). Ses sorts Feu ne créent pas de zones persistantes — efficacité pure, pas de décor.`,
};

export default character;
