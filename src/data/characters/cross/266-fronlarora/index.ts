import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 266,
  nom: `Fronlarora`,
  element: 'Plante',
  element2: 'Insecte',
  classe: 'Gardien',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Dissidentes',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Jardinier de la mort — plantes et insectes cohabitent en symbiose mortelle. Ses plantes sont infestées de ses insectes. L'infestation de terrain est quasi-impossible à nettoyer.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Chaque case Plante est automatiquement infestée par son Essaim. Ses insectes fertilisent ses plantes — les Forêts Instantanées poussent en 1 tour.`,
};

export default character;
