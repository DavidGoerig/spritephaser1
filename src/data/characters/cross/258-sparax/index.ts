import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 258,
  nom: `Sparax`,
  element: 'Electrique',
  element2: 'Spectre',
  classe: 'Plongeur',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Éclairs spectraux — son électricité traverse les corps physiques pour frapper l'énergie vitale directement. Les morts ne résistent pas à l'électricité spectrale.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Ses sorts Electrique ignorent 40% de l'armure physique (composante spectrale). Ses zombies de l'Armée des Morts reçoivent des buffs électriques et dégâts +50%.`,
};

export default character;
