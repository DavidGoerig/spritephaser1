import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 328,
  nom: `Spectmean`,
  element: 'Psy',
  element2: 'Spectre',
  classe: 'Assassin',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Spectre se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Spectre. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Spectre — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Frontière dissolution — entre le monde des vivants et des morts. Ses Portails sont mentaux. Ses Possessions sont psychiques — totales et permanentes. La mort est une perspective.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Possession dure indéfiniment (jusqu'à sa mort). Peut ouvrir des Portails mentaux sans ligne de vue directe (perception psychique).`,
};

export default character;
