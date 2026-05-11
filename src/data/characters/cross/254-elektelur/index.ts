import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 254,
  nom: `Elektelur`,
  element: 'Electrique',
  element2: 'Psy',
  classe: 'Spécialiste',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aérides dont la nature Electrique s'exprime par [à définir] et dont la double affinité Psy se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Electrique/Psy. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Electrique et Psy — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Indépendant) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Hacking mental via les synapses. Ses décharges psycho-électriques court-circuitent littéralement les cerveaux. Domination via l'électricité neuronale — inarrêtable et précise.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Court-Circuit peut s'appliquer aux capacités mentales (neutralise les sorts Psy). Domination via impulsion électroneurale dure 1 tour supplémentaire.`,
};

export default character;
