import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 249,
  nom: `Voltia`,
  element: 'Electrique',
  element2: 'Sol',
  classe: 'Tireur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Sol se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Sol. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Sol — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Injecte de l'électricité dans le sol. Ses décharges se propagent dans la terre et surgissent sous les pieds des ennemis dans un rayon de 3 cases. Le sol conducteur devient un piège.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique lancés dans les cases Sol se propagent à toutes les cases Sol adjacentes. Secousse génère une décharge électrique simultanée.`,
};

export default character;
