import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 343,
  nom: `Nexviel`,
  element: 'Poison',
  element2: 'Spectre',
  classe: 'Vanguard',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Poison s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Poison/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Poison et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantômes empoisonneurs — ses spectres transportent des toxines spectrales impossibles à purger. Toucher Spectral empoisonné ronge l'âme et le corps. On ne soigne pas ce qu'il inflige.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: `Toucher Spectral inflige également Nécrose (poison spectral). Ses Armées des Morts sont des zombies empoisonnés — piqûres à chaque contact.`,
};

export default character;
