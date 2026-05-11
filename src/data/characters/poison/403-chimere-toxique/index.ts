import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 403,
  nom: `La Chimere Toxique`,
  element: 'Poison',
  classe: 'Specialiste',
  espece: 'Inconnu',
  region: 'Multi-region',
  faction: 'Independent',
  description_physique: `Corps qui semble avoir absorbe des proprietes biologiques de plusieurs especes : peau sylvane, pigmentation chthonienne, resistance ombrienne. Personne ne sait avec certitude son espece d'origine. Ses formes varient legerement selon les temoins, comme si elle s'adaptait a l'observateur.`,
  description_personnalite: `Entite qui a transcende les allegances regionales au profit d'une comprehension systemique du poison comme force de transformation. N'est pas un danger, dit-elle. Est un processus. Le poison transforme. C'est sa nature.`,
  position_lore: `Anomalie du Calendrier des Fees sans region d'origine identifiable. Les archives imperiales la classent comme 'entite multi-elementaire Poison, origine inconnue, allegeance inconnue, dangerosite extreme'. Les Dissidentes pensent qu'elle s'est formee spontanement dans la Fosse Interdite lors de l'apprivoisement par l'Elu Poison fondateur : une conscience nee de la catastrophe elle-meme, temoignant que le monde peut encore produire des Elus que le Calendrier ne prevoit pas.`,
  style_combat: `Manipule les toxines avec une sophistication que les analyseurs standards ne peuvent pas predire. Ses strategies toxiques semblent s'adapter en temps reel a mesure qu'elles rencontrent des resistances, rendant toute contre-mesure obsolete au moment ou elle est deployee.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
