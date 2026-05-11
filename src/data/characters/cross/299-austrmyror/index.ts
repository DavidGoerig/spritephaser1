import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 299,
  nom: `Austrmyror`,
  element: 'Vent',
  element2: 'Insecte',
  classe: 'Battlemage',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Aérides dont la nature Vent s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Vent/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Vent et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Nuage de vent et d'insectes — son Essaim est porté par ses Rafales sur toute la carte. Les insectes en vol sont aussi rapides que son Vent. Impossible à localiser.`,
  kit: ELEMENT_KITS['Vent'],
  modifications_classe: `Son Essaim se déplace via ses cases Vent sans coût de mouvement. Rafale propulse les insectes vers la cible (portée doublée).`,
};

export default character;
