import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 276,
  nom: `Kethia`,
  element: 'Sol',
  element2: 'Vent',
  classe: 'Assassin',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Vent se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Vent. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Vent — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Tempête de sable. Son Vent dans les zones Sol crée des nuées abrasives. Le visibility est nulle dans sa tempête de terre. Ses ennemis combattent à l'aveugle dans sa tornage.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses sorts Vent dans les zones Sol créent des tempêtes de sable (vision ennemie -50%). Ses cases Sol sont mobiles — portées par son Vent.`,
};

export default character;
