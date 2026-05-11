import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 204,
  nom: `Ignax`,
  element: 'Feu',
  element2: 'Glace',
  classe: 'Enchanteur-Capteur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Glace se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Glace. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Glace — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maîtrise le choc thermique — alterne Feu et Glace pour fracturer les armures. Ses cases de choc thermique infligent des dégâts continus aux deux types de résistance.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Peut créer des cases Choc Thermique hybrides. Les ennemis en choc thermique reçoivent +30% de dégâts de tout type.`,
};

export default character;
