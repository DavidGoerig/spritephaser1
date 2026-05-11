import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 207,
  nom: `Flamor`,
  element: 'Feu',
  element2: 'Sol',
  classe: 'Mage-Burst',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Sol se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Sol. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Sol — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des geysers de magma depuis les cases Sol. Ses Soulèvements lancent des roches en fusion. Le terrain sous lui devient instable et dangereux après son passage.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Soulèvement de sol projecte des cubes enflammés. Ses zones Sol chauffées infligent des dégâts Feu passifs aux ennemis statiques.`,
};

export default character;
