import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 309,
  nom: `Syrryx`,
  element: 'Dragon',
  element2: 'Psy',
  classe: 'Juggernaut',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Convergence',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon omniscient — sa conscience draconique et sa télékinésie couvrent tout le champ de bataille. Ses Rugissements sont des attaques psychiques autant que physiques.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Rugissement applique Confusion Massive en plus des dégâts. Sa Fureur Ancienne a une composante psychique — tous les ennemis en vue sont affectés.`,
};

export default character;
