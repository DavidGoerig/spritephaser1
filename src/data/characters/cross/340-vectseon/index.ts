import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 340,
  nom: `Vectséon`,
  element: 'Fée',
  element2: 'Gravité',
  classe: 'Tireur',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Indépendant',
  description_physique: `Fées dont la nature Fée s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Fée/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Fée et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lévitation sacrée — ses alliés dans ses zones de lumière et faible gravité flottent. Ses Rayons de Lumière créent des faisceaux antigravité. Les ennemis sont écrasés par la gravité dans ses zones obscures.`,
  kit: ELEMENT_KITS['Fée'],
  modifications_classe: `Ses zones Fée génèrent Basse Gravité pour les alliés. Ses zones non-Fée génèrent Haute Gravité pour les ennemis. Différentiel permanent.`,
};

export default character;
