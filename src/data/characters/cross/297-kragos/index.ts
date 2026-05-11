import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 297,
  nom: `Kragos`,
  element: 'Roche',
  element2: 'Normal',
  classe: 'Plongeur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Construction militaire — édifie des fortifications précises et durables. Ses Murs de Pierre sont des constructions architecturales réelles. Le terrain qu'il crée dure au-delà du combat.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses formations rocheuses sont permanentes (ne disparaissent pas en fin de combat). Fortification peut être posée en dehors du combat pour préparer un champ de bataille.`,
};

export default character;
