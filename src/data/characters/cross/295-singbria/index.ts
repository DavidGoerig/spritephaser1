import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 295,
  nom: `Singbria`,
  element: 'Roche',
  element2: 'Gravité',
  classe: 'Enchanteur-Capteur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Gravité se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Gravité. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Gravité — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Géologie gravitationnelle — ses rochers obéissent à sa maîtrise de la masse. Ses Colonnes s'effondrent sur commande en Écrasements. Ses Formations Rocheuses créent des anomalies de gravité.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Ses Colonnes peuvent être activées en Écrasement gravitationnel. Formation Rocheuse crée une zone de Haute Gravité permanente.`,
};

export default character;
