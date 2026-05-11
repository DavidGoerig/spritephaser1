import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 239,
  nom: `Glacscaia`,
  element: 'Glace',
  element2: 'Insecte',
  classe: 'Vanguard',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Convergence',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Réserve ses insectes dans la glace entre les assauts — libérés, ils surgissent déjà en position. Ses colonies hibernantes peuvent être lancées comme projectiles de glace biologique.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Peut geler son Essaim pour le stocker (invulnérable) et le libérer au moment optimal. Les insectes gelés-libérés ont des dégâts doublés au premier tour.`,
};

export default character;
