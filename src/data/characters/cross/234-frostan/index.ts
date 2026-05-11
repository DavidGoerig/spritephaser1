import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 234,
  nom: `Frostan`,
  element: 'Glace',
  element2: 'Plante',
  classe: 'Battlemage',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Plante se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Plante. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Plante — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fige les plantes comme des sculptures de cristal. Ses ronces gelées sont plus tranchantes que l'acier. Le terrain qu'il crée est une tundra de lames de glace végétale.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses cases Plante peuvent être gelées instantanément (ronces de glace — dégâts Glace+Plante). Les ronces gelées sont permanentes.`,
};

export default character;
