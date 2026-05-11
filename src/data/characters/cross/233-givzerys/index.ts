import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 233,
  nom: `Givzerys`,
  element: 'Glace',
  element2: 'Electrique',
  classe: 'Mage-Burst',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Electrique se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Electrique. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Electrique — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée des supraconducteurs de glace. La glace à -270°C conduit l'électricité à l'infini. Une seule décharge dans ses zones gelées touche tout ce qui est sur la glace simultanément.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses cases Glace conduisent automatiquement ses sorts Electrique sans perte. Arc Électrique dans les zones Glace frappe tous les ennemis sur la glace.`,
};

export default character;
