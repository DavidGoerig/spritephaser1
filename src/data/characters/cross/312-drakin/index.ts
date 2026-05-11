import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 312,
  nom: `Drakin`,
  element: 'Dragon',
  element2: 'Poison',
  classe: 'Battlemage',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon vénéneux — ses griffes sont baignées de venin draconique. Son Souffle empoisonne les cases touchées. La morsure draconique empoisonnée est létale en deux tours.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Morsure applique Venin Paralytique draconique (résistance à l'antidote). Souffle Élémentaire dépose Terrain Contaminé sur son trajet.`,
};

export default character;
