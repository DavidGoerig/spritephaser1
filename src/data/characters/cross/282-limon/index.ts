import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 282,
  nom: `Limon`,
  element: 'Sol',
  element2: 'Poison',
  classe: 'Enchanteur-Capteur',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Poison se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Poison. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Poison — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Empire) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Contamination du sous-sol. Ses tunnels transportent des gaz toxiques. Ses cases Sol libèrent du Brouillard Corrosif à chaque Soulèvement. Le terrain lui-même empoisonne.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses cases Sol libèrent Brouillard Corrosif quand piétinées par des ennemis. Tunnel dépose un Terrain Contaminé à chaque extrémité.`,
};

export default character;
