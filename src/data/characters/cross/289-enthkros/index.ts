import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 289,
  nom: `Enthkros`,
  element: 'Roche',
  element2: 'Insecte',
  classe: 'Assassin',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Roche s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Roche/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Roche et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Insectes lithophages — ses scarabées mangent la roche et la remodèlent. Ses formations rocheuses sont percées de tunnels d'insectes. Le rocher vivant est sa forteresse bio-minérale.`,
  kit: ELEMENT_KITS['Roche'],
  modifications_classe: `Son Essaim peut détruire des cases Roche ennemies. Ses insectes construisent ses Colonnes Rocheuses en 1 tour (sans coût de sort).`,
};

export default character;
