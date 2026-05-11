import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 308,
  nom: `Khaelacaur`,
  element: 'Dragon',
  element2: 'Insecte',
  classe: 'Enchanteur-Capteur',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',
  description_physique: `Pyriens dont la nature Dragon s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Dragon/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Dragon et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Dragon des Fourmilières — commande des légions d'insectes géants. Son Essaim est constitué d'insectes draconiques. Son Rugissement lance une charge d'insectes géants.`,
  kit: ELEMENT_KITS['Dragon'],
  modifications_classe: `Son Essaim est constitué d'insectes draconiques (résistants et puissants). Rugissement libère une Reine des Essaims draconique supplémentaire.`,
};

export default character;
