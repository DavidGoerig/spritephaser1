import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 281,
  nom: `Terrsélos`,
  element: 'Sol',
  element2: 'Fée',
  classe: 'Enchanteur-Soutien',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Fée se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Fée. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Fée — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Cristaux de lumière souterrains — ses cases Sol cachent des gemmes qui illuminent. Ses Soulèvements propulsent des cristaux de Fée. Le sol est une mine de lumière enchantée.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Ses cases Sol libèrent des éclats de Lumière Fée quand creusées. Soulèvement propulse un Rayon de Lumière en plus des rochers.`,
};

export default character;
