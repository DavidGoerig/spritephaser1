import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 329,
  nom: `Telcenos`,
  element: 'Psy',
  element2: 'Gravité',
  classe: 'Escrimeur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Masse de la pensée — ses idées ont un poids gravitationnel. Ses Pressions Mentales créent de vraies Pressions physiques. Ses concepts télékinétiques sont des forces gravitationnelles.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Pression Mentale génère une vraie Pression Gravitationnelle sur la cible. Ses sorts Psy et Gravité sont interchangeables dans leur effet.`,
};

export default character;
