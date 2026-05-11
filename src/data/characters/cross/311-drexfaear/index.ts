import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 311,
  nom: `Drexfaear`,
  element: 'Dragon',
  element2: 'Fée',
  classe: 'Mage-Burst',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon de lumière — son Souffle Élémentaire est un rayon de lumière pure. Ses Écailles réfléchissent les sorts. La lumière de sa présence guérit ses alliés alentour.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Souffle Élémentaire inflige des dégâts Fée (lumière). Ses Écailles Partagées transmettent également l'Aura de Soin de ses alliés Fée.`,
};

export default character;
