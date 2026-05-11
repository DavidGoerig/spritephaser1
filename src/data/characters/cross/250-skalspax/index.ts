import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 250,
  nom: `Skalspax`,
  element: 'Electrique',
  element2: 'Roche',
  classe: 'Assassin',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Roche se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Roche. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Roche — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des cristaux de quartz piézoélectriques. Ses Colonnes Rocheuses génèrent de l'électricité sous pression. Plus ses rochers sont frappés, plus ils déchargent.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses cases Roche stockent de l'énergie électrique — libérée quand détruites. Ses sorts Electrique renforcent ses structures rocheuses au lieu de les endommager.`,
};

export default character;
