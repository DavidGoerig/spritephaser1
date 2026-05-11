import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 345,
  nom: `Venax`,
  element: 'Poison',
  element2: 'Combat',
  classe: 'Spécialiste',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Poison s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Poison/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Poison et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Empoisonneur martial — arme chaque technique de combat d'une toxine différente. La Tempête de Coups est une Tempête d'Injections. Chaque garde est brisé puis empoisonné.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: `Chaque technique Combat applique une toxine différente (rotation). Brise-Bouclier dépose du Venin Paralytique directement dans le système circulatoire.`,
};

export default character;
