import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 349,
  nom: `Médumia`,
  element: 'Spectre',
  element2: 'Normal',
  classe: 'Plongeur',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',
  description_physique: `Givrins dont la nature Spectre s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Spectre/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Spectre et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantôme ordinaire — utilise ses capacités spectrales avec une retenue remarquable. Ses hantises sont mesurées. Ses Portails sont précis. La terreur qu'il inspire est proportionnelle.`,
  kit: ELEMENT_KITS['Spectre'],
  modifications_classe: `Ses sorts Spectre consomment 30% moins. Passe-Muraille peut être utilisé sans limite de distance (efficacité naturelle des spectres).`,
};

export default character;
