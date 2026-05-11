import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 272,
  nom: `Sylvdenys`,
  element: 'Plante',
  element2: 'Gravité',
  classe: 'Mage-Burst',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Racines gravitationnelles — ses plantes poussent vers le bas, vers le haut, partout où la gravité le dirige. Ses lianes servent d'Attraction gravitationnelle. Jungle en apesanteur.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Ses Vrilles peuvent Attirer les ennemis. Ses plantes poussent dans n'importe quelle direction gravitationnelle — y compris au plafond.`,
};

export default character;
