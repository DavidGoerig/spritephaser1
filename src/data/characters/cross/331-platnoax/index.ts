import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 331,
  nom: `Platnoax`,
  element: 'Psy',
  element2: 'Normal',
  classe: 'Gardien',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',
  description_physique: `Néréides dont la nature Psy s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Psy/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Psy et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Maîtrise mentale sans drama — utilise sa télékinésie pour une efficacité maximale, sans spectacle. Ses influences psychiques sont subtiles et inarrêtables.`,
  kit: ELEMENT_KITS['Psy'],
  modifications_classe: `Ses sorts Psy consomment 30% moins de ressources. Analyse est permanente — il connaît en permanence les intentions de tous les ennemis visibles.`,
};

export default character;
