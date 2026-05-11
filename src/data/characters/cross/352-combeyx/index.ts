import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 352,
  nom: `Combeyx`,
  element: 'Combat',
  element2: 'Normal',
  classe: 'Artillerie',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Hommes-Liens dont la nature Combat s'exprime par [à définir] et dont la double affinité Normal se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`,
  description_personnalite: `Personnalité façonnée par la dualité Combat/Normal. La tension entre ces deux éléments définit son rapport au monde et au combat.`,
  position_lore: `Élu né à la convergence de deux flux élémentaires — Combat et Normal — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (Dissidentes) l'a recruté pour exploiter cette dualité.`,
  style_combat: `Combattant fondamental — arts martiaux purs sans apport élémentaire externe. Maîtrise absolue de la forme physique. Sa Suprématie Tactique est basée sur la technique, pas la magie.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: `Toutes ses techniques consomment 20% moins. Suprématie Tactique activée double la durée de toutes ses techniques actives simultanément.`,
};

export default character;
