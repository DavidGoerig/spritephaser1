import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 240,
  nom: `Cryoon`,
  element: 'Glace',
  element2: 'Psy',
  classe: 'Gardien',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Gèle les pensées. Ses Cages Psychiques sont des cristaux de glace mentale. Les ennemis gelés psychiquement ne peuvent pas lancer de sorts. La confusion devient un froid intérieur.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Cage Psychique gèle également physiquement la cible pendant 1 tour. Confusion Massive génère un froid psychique — cibles immobiles pendant 2 tours.`,
};

export default character;
