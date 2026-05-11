import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 219,
  nom: `Aquaia`,
  element: 'Eau',
  element2: 'Plante',
  classe: 'Plongeur',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Eau s'exprime par [à définir] et dont la double affinité Plante se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Eau/Plante. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Eau et Plante — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Fait pousser des créatures aquatiques-végétales. Ses Murs de Ronces poussent depuis le fond des canaux. La zone qu'il contrôle devient une jungle aquatique impénétrable.`,
  kit: ELEMENT_KITS['Eau'],
  modifications_classe: `Ses cases Eau font pousser des Ronces gratuitement. Ses sorts Plante ont des effets doublés dans les zones inondées.`,
};

export default character;
