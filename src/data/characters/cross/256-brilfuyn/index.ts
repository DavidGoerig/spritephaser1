import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 256,
  nom: `Brilfuyn`,
  element: 'Electrique',
  element2: 'Fée',
  classe: 'Enchanteur-Capteur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Lumière-éclair — ses sorts de lumière Fée sont des éclairs concentrés de photons. Rayon de Lumière à la vitesse de l'éclair, avec les dégâts d'un éclair.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Rayon de Lumière inflige également des dégâts Electrique. Ses Bénédictions transmettent une immunité temporaire aux dégâts Electrique.`,
};

export default character;
