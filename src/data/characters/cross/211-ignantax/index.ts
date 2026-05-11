import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 211,
  nom: `Ignantax`,
  element: 'Feu',
  element2: 'Psy',
  classe: 'Assassin',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description_physique: `Pyriens dont la nature Feu s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Feu/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Feu et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Brûle les pensées directement. Ses Pressions Mentales sont accompagnées d'une chaleur psychique qui provoque des hallucinations thermiques. Les cibles voient tout s'enflammer.`,
  kit: ELEMENT_KITS['Feu'],
  modifications_classe: `Pression Mentale inflige également des dégâts Feu. Ses illusions se manifestent physiquement comme des flammes pendant 1 tour.`,
};

export default character;
