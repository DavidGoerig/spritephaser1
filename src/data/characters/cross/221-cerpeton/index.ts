import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 221,
  nom: `Cérpeton`,
  element: 'Eau',
  element2: 'Roche',
  classe: 'Battlemage',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Érosion accélérée — son eau dissout la roche ennemie. Ses Colonnes Rocheuses s'effondrent quand il les inonde. Crée des formations sous-marines comme positions défensives.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Peut inonder les cases Roche pour les fragiliser (résistance -30%). Ses sorts Eau ignorent les Fortifications ennemies.`,
};

export default character;
