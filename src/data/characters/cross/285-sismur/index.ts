import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 285,
  nom: `Sismur`,
  element: 'Sol',
  element2: 'Combat',
  classe: 'Mage-Burst',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Boxeur de la terre — frappe depuis le sol, envoie des uppercuts géologiques. Ses Charges passent sous terre et surgissent sous les pieds de la cible. Combat en deux dimensions.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Charge peut passer sous terre (non-stoppable par les obstacles). Ses frappes depuis le sous-sol infligent des dégâts de Soulèvement en plus.`,
};

export default character;
