import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 523,
  nom: `Synthese`,
  element: 'Normal',
  classe: 'Specialiste',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien dont le corps semble avoir integre des traces de tous les elements au fil d'une vie passee dans les zones de Saturation de Virex. Pas de signature elementaire dominante, pas de caracteristique physique specifique a une region. Il est la somme de tous les passages par Virex, la ville qui integre tout.`,
  description_personnalite: `Philosophe du monde qui a tire de la Saturation des Elus une conclusion que les trois factions evitent toutes : le monde n'a pas besoin d'un element dominant, il a besoin d'une synthese. L'Empire veut contoler. La Convergence veut redistribuer. Les Dissidentes veulent liberer. Lui veut integrer.`,
  position_lore: `Anomalie du Calendrier des Fees que la bureaucratie de Virex classe comme 'Homme-Lien sans element dominant, non-strategique'. Ce classement l'a protege de la capture pendant des decades. Il a utilise ce temps pour etudier les zones d'anomalie de la Saturation, les systemes de toutes les factions, et les conclusions que chacun tire du monde. Son element Normal est en realite une synthese : il peut temporairement manifester n'importe quel element a un niveau modere, ce que le Calendrier a classe comme 'absence d'element' faute de categorie adequate.`,
  style_combat: `Peut temporairement manifester l'element le plus adapte a la situation pendant de courtes periodes, rendant ses strategies impredictibles. Son element Normal est la seule reponse que le monde ait produite a la question que personne ne pose : et si on n'avait pas a choisir?`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
