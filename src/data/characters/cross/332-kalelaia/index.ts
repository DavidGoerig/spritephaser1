import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 332,
  nom: `Kalélaia`,
  element: 'Ténèbres',
  element2: 'Fée',
  classe: 'Spécialiste',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dualité absolue — lumière et ombre simultanées. Ses sorts Fée éclairent ses propres ténèbres créant des effets paradoxaux. Les ennemis dans ses zones ne savent pas s'ils voient ou sont aveugles.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Peut alterner lumière et ténèbres chaque tour dans la même zone. Les ennemis dans ses zones paradoxales ont leurs capacités aléatoirement actives ou désactivées.`,
};

export default character;
