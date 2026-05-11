import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 238,
  nom: `Ryukhear`,
  element: 'Glace',
  element2: 'Dragon',
  classe: 'Escrimeur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon des glaces ancestral. Son Souffle est une tornade givrante qui cristallise instantanément. Sur ses cases de glace, ses griffes se transforment en lames de cristal.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Souffle Élémentaire gèle les cases touchées. Ses Écailles de glace réfléchissent 20% des sorts de projectile.`,
};

export default character;
