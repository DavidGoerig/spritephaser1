import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 283,
  nom: `Eidoerax`,
  element: 'Sol',
  element2: 'Spectre',
  classe: 'Juggernaut',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',
  description_physique: `Chthoniens dont la nature Sol s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Sol/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Sol et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fantômes souterrains — ses spectres habitent le sous-sol et surgissent depuis ses cases Sol. Passe-Muraille opère via le sol plutôt que les murs. Il hante la géologie.`,
  kit: ELEMENT_KITS['Sol'],
  modifications_classe: `Passe-Muraille peut traverser les cases Sol (sous terre). Ses Spectres surgissent depuis ses Tunnels — positionnement parfait garanti.`,
};

export default character;
