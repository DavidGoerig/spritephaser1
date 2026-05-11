import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 333,
  nom: `Mrakyx`,
  element: 'Ténèbres',
  element2: 'Poison',
  classe: 'Enchanteur-Soutien',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `La Corruption — l'alliance la plus sombre du lore. Ses ténèbres transportent un poison qui ronge l'âme autant que le corps. L'empoisonnement dans ses zones ne se soigne pas normalement.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Ses toxines dans les zones Ténèbres sont résistantes à tous les antidotes. Nuit Absolue + Pandémie = combo apocalyptique impossible à contrer.`,
};

export default character;
