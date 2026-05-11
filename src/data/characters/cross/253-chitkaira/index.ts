import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 253,
  nom: `Chitkaira`,
  element: 'Electrique',
  element2: 'Insecte',
  classe: 'Gardien',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Insecte se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Insecte. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Insecte — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Ses insectes transportent des charges électrostatiques. Chaque piqûre décharge. Essaim Électrique : les insectes forment un nuage conducteur qui électrocute tout ce qu'il touche.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Chaque piqûre de son Essaim inflige des dégâts Electrique supplémentaires. Infestation dans les zones Electrique propage les décharges entre cibles infectées.`,
};

export default character;
