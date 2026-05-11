import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 267,
  nom: `Floria`,
  element: 'Plante',
  element2: 'Psy',
  classe: 'Spécialiste',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Neurologie végétale — ses plantes sont conscientes et répondent à ses intentions mentales. Il les guide télékinétiquement. Ses lianes attaquent avec l'intelligence d'un combattant.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Peut contrôler ses Plantes télékinétiquement à distance. Domination peut s'appliquer aux adversaires dans ses zones végétales (terreur sylvestre).`,
};

export default character;
