import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 348,
  nom: `Laron`,
  element: 'Spectre',
  element2: 'Combat',
  classe: 'Juggernaut',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Convergence',
  description_physique: `Givrins dont la nature Spectre s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Spectre/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Spectre et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantôme combattant — frappe avec des poings incorporels qui traversent les parades. Impossible de parer un coup spectral. Ses arts martiaux opèrent sur un plan différent de la réalité.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: `Ses attaques physiques ignorent la Parade et le Bouclier (composante spectrale). Tempête de Coups spectrale frappe l'énergie vitale directement.`,
};

export default character;
