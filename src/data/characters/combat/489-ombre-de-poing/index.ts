import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 489,
  nom: `Ombre de Poing`,
  element: 'Combat',
  classe: 'Assassin',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Homme-Lien dont la signature physique au combat est presque imperceptible jusqu'a l'impact : il se deplace comme une non-presence jusqu'au moment ou le coup arrive. Ses mains portent des cicatrices de discipline de plusieurs arts martiaux de Virex, etudes aupres de maitres de differentes ecoles que la Saturation des Elus a concentrees dans la ville.`,
  description_personnalite: `Operationnel et non-ideologique. Elimine les agents de controle du Calendrier qui operent dans les reseaux clandestins de Virex, ceux qui se font passer pour des marchands ou des fonctionnaires. Ne croit pas au grand recit des Dissidentes mais fait confiance aux individus qui le dirigent. Sa loyaute est personnelle, pas doctrinale.`,
  position_lore: `Forme dans les quartiers les plus denses de Virex, ou la Saturation des Elus a cree des zones ou la detection elementaire standard ne fonctionne pas. Son element Combat lui permet de se deplacer de facon a minimiser sa signature physique, rendant sa presence imperceptible jusqu'au contact. Les Dissidentes l'utilisent pour des operations de precision contre le reseau d'information imperial de Virex.`,
  style_combat: `S'approche de sa cible sans signature perceptible, frappe depuis une distance de contact avec une puissance concentree qui ne laisse pas de survivant non intentionnel. Dans les zones d'anomalie de Virex, son absence de signature elementaire le rend invisible a tous les systemes de detection standards.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
