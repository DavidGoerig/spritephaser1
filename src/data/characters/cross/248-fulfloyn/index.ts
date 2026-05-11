import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 248,
  nom: `Fulfloyn`,
  element: 'Electrique',
  element2: 'Plante',
  classe: 'Artillerie',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Plante se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Plante. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Plante — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Végétaux bioélectriques. Ses plantes conduisent l'électricité naturellement. Mur de Ronces électrifié. Ses lianes servent de câbles conducteurs entre ses générateurs naturels.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses cases Plante conduisent ses sorts Electrique. Jungle Primordiale génère de l'électricité statique — cases Electrique gratuites autour des plantes.`,
};

export default character;
