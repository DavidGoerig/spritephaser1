import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 215,
  nom: `Massvoon`,
  element: 'Feu',
  element2: 'Gravité',
  classe: 'Spécialiste',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des étoiles miniatures — concentre le feu sous pression gravitationnelle jusqu'à la fusion nucléaire. Son Collapse Gravitationnel libère une explosion thermique dévastatrice.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Ses Singularités attirent et concentrent le feu en leur centre. Collapse Gravitationnel déclenche une explosion thermique en plus des dégâts gravitationnels.`,
};

export default character;
