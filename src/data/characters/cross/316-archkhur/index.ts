import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 316,
  nom: `Archkhur`,
  element: 'Dragon',
  element2: 'Normal',
  classe: 'Escrimeur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon pratique — utilise ses capacités draconiennes avec une économie remarquable. Pas de pyrotechnie superflue. Son Souffle est chirurgical. Son Vol est fonctionnel. Dévastateur.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Ses sorts Dragon consomment 25% moins de ressources. Éveil du Prédateur dure 2 tours supplémentaires grâce à une gestion normale des ressources.`,
};

export default character;
