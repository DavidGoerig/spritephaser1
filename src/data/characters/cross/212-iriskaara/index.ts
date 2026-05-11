import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 212,
  nom: `Iriskaara`,
  element: 'Feu',
  element2: 'Fée',
  classe: 'Escrimeur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lumière solaire incarnée — ses sorts Fée brûlent d'une intensité divine. Le Rayon de Lumière devient un Rayon Solaire qui carbonise. Ses Bénédictions réchauffent et renforcent.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Rayon de Lumière devient Rayon Solaire (dégâts Feu + Fée). Ses zones Fée émettent une chaleur qui dissuade l'approche ennemie.`,
};

export default character;
