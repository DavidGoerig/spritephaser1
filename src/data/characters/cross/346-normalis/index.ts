import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 346,
  nom: `Normalis`,
  element: 'Poison',
  element2: 'Normal',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Poison s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Poison/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Poison et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Empoisonneur professionnel — calibre chaque toxine à la dose minimale efficace. Pas de gaspillage. Sa Pandémie ciblée n'affecte que sa cible désignée. Science, pas chaos.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: `Ses toxines consomment 25% moins. Pandémie peut être ciblée sur un individu (ne se propage pas aux non-ciblés).`,
};

export default character;
