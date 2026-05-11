import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 322,
  nom: `Pesantscis`,
  element: 'Insecte',
  element2: 'Gravité',
  classe: 'Juggernaut',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Insecte s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Insecte/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Insecte et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Essaim gravitationnel — ses insectes manipulent leur masse pour des impacts cataclysmiques. Mille insectes à masse doublée forment une frappe aussi lourde qu'un Juggernaut.`,
  kit: ELEMENT_KITS['Insecte'],
  modifications_classe: `Son Essaim peut augmenter ou diminuer sa masse (impacts variables). Haute Gravité sur l'Essaim crée un projectile de densité létale.`,
};

export default character;
