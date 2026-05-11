import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 336,
  nom: `Umbran`,
  element: 'Ténèbres',
  element2: 'Combat',
  classe: 'Plongeur',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',
  description_physique: `Umbriens dont la nature Ténèbres s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Ténèbres/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Ténèbres et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Combattant de l'ombre — ses arts martiaux sont exécutés dans une invisibilité totale. Les ennemis reçoivent des coups de nulle part. Berserker Ombre = chaos total.`,
  kit: ELEMENT_KITS['Ténèbres'],
  modifications_classe: `Ses attaques physiques sont invisibles jusqu'à l'impact (0 anticipation possible). Berserker dans les zones Ténèbres rend ses mouvements intraçables.`,
};

export default character;
