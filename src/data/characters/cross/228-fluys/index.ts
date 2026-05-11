import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 228,
  nom: `Fluys`,
  element: 'Eau',
  element2: 'Poison',
  classe: 'Spécialiste',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Empoisonne les nappes phréatiques. Son eau est toxique pour les ennemis, thérapeutique pour lui. La zone inondée devient un marécage pestilentiel ingérable.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses cases Eau infligent passivement Venin Paralytique aux ennemis stationnaires. Nécrose se propage automatiquement dans ses zones d'eau.`,
};

export default character;
