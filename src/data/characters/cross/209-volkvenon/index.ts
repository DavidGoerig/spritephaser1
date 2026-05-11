import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 209,
  nom: `Volkvenon`,
  element: 'Feu',
  element2: 'Vent',
  classe: 'Artillerie',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des tempêtes de feu — le Vent amplifie ses flammes en tornades élémentaires. Ses Cyclones de feu traversent plusieurs cases en infligeant des dégâts massifs.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses sorts Feu lancés avec le Vent comme vecteur ont portée doublée. Ses vortex de flammes persistent 2 tours.`,
};

export default character;
