import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 223,
  nom: `Vrethsaara`,
  element: 'Eau',
  element2: 'Dragon',
  classe: 'Tireur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Dragon se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Dragon. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Dragon — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon aquatique primordial. Son Souffle Élémentaire est un jet d'eau à pression létale. Dans ses zones d'eau, ses capacités draconiennes sont augmentées d'un tier.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Souffle Élémentaire dans les zones Eau a portée et dégâts doublés. Ses Écailles absorbent les dégâts Eau et Feu simultanément.`,
};

export default character;
