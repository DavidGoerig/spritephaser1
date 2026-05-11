import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 244,
  nom: `Skelniin`,
  element: 'Glace',
  element2: 'Spectre',
  classe: 'Juggernaut',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Convergence',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantômes du Grand Hiver. Ses spectres sont liés à ses cases de glace et surgissent du sol gelé. La glace spectrale est permanente et traversable uniquement par lui.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Son Armée des Morts surgit depuis ses cases de glace. Passe-Muraille ne peut traverser que les cases de glace — vitesse de traversée instantanée.`,
};

export default character;
