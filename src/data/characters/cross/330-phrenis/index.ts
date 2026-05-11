import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 330,
  nom: `Phrenis`,
  element: 'Psy',
  element2: 'Combat',
  classe: 'Vanguard',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Convergence',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Combat se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Combat. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Combat — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Convergence) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Anticipe chaque coup avant qu'il parte. Ses arts martiaux sont guidés par la précognition. Il frappe où la cible sera dans 0.3 secondes. Impossible à toucher sans qu'il le permette.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Parade est automatique (précognition — ne coûte pas d'action). Ses attaques physiques sont guidées psychiquement — ne ratent jamais.`,
};

export default character;
