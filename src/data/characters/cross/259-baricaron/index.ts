import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 259,
  nom: `Baricaron`,
  element: 'Electrique',
  element2: 'Gravité',
  classe: 'Mage-Burst',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée un champ électromagnétique gravitationnel. Ses Singularités génèrent des éclairs centripètes. Les ennemis attirés sont électrocutés à l'impact.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Singularité déclenche un arc électrique sur chaque ennemi attiré. Ses champs gravitationnels et électriques s'amplifient mutuellement — dégâts exponentiels.`,
};

export default character;
