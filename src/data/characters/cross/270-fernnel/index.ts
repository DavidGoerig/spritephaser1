import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 270,
  nom: `Fernnel`,
  element: 'Plante',
  element2: 'Poison',
  classe: 'Juggernaut',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Convergence',
  description_physique: `Sylvans dont la nature Plante s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Plante/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Plante et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Végétaux vénéneux — chaque plante qu'il crée est naturellement toxique. Ses ronces empoisonnent au contact. La Jungle Primordiale est une zone de mort biologique totale.`,
  kit: ELEMENT_KITS['Plante'],
  modifications_classe: `Toutes ses cases Plante infligent Venin Paralytique aux ennemis qui s'y arrêtent. Forêt Instantanée déclenche Épidémie automatiquement à la pousse.`,
};

export default character;
