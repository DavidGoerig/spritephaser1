import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 208,
  nom: `Petciiel`,
  element: 'Feu',
  element2: 'Roche',
  classe: 'Battlemage',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Forge du basalte en combat — ses Cases Roche prennent feu et deviennent des briques de lave. La chaleur de ses sorts fait fondre les défenses de pierre adverses.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses cases Roche peuvent être activées comme pièges de lave. Ses sorts Feu ignorent 30% de la résistance des Juggernauts Roche.`,
};

export default character;
