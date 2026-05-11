import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 235,
  nom: `Gundalora`,
  element: 'Glace',
  element2: 'Sol',
  classe: 'Artillerie',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Glace s'exprime par [à définir] et dont la double affinité Sol se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Glace/Sol. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Glace et Sol — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Crée du permafrost — gèle le sol à des profondeurs impossibles. Ses cases Sol gelées empêchent tout creusement ou tunnel. Séisme dans ses zones gelées crée une fracture de glace.`,
  kit: ELEMENT_KITS['Glace'],
  modifications_classe: `Ses cases Sol sont automatiquement gelées en surface (ralentissement +30%). Soulèvement propulse des stalagmites de glace.`,
};

export default character;
