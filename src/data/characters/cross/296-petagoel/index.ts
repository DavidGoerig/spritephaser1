import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 296,
  nom: `Petagoel`,
  element: 'Roche',
  element2: 'Combat',
  classe: 'Juggernaut',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Pugilat de granit — ses coups intègrent des impacts rocheux. La Tempête de Coups avec ses poings de pierre fracture armures et os. Brise-Bouclier brise littéralement le bouclier.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses attaques physiques génèrent des fragments rocheux (dégâts de zone). Brise-Bouclier détruit définitivement l'armure de la cible.`,
};

export default character;
