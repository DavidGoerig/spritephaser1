import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 286,
  nom: `Standguan`,
  element: 'Sol',
  element2: 'Normal',
  classe: 'Battlemage',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Ingénieur du terrain. Modifie le sol avec une précision architecturale — fossés défensifs, murs, élévations stratégiques. Pas de magie superflue, juste du génie civil de combat.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses modifications de terrain durent 50% plus longtemps. Ses cases Sol peuvent être configurées en avance et activées à distance.`,
};

export default character;
