import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 327,
  nom: `Eidyr`,
  element: 'Psy',
  element2: 'Poison',
  classe: 'Tireur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Empoisonnement psychosomatique — convainc les ennemis qu'ils sont empoisonnés. Ses illusions toxiques ont des effets réels. La Pandémie psychique est pire que la Pandémie biologique.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Ses illusions Psy génèrent les effets physiques correspondants. Hallucination de Venin = vrai venin pendant la durée de l'illusion.`,
};

export default character;
