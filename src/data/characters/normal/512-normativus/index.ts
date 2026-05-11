import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 512,
  nom: `Normativus`,
  element: 'Normal',
  classe: 'Enchanteur-Capteur',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Empire',
  description_physique: `Homme-Lien dont l'apparence est tellement dans la norme qu'on l'oublie immediatement apres l'avoir vu. C'est un avantage operationnel qu'il exploite : il passe dans n'importe quel contexte social sans declencher de reaction. Ses instruments de detection sont aussi ordinaires en apparence que lui.`,
  description_personnalite: `Croit sincereement que la normalisation que l'Empire impose via le Calendrier est une forme de soin collectif. Sans le Voile d'Equite, Virex serait uninhabitable : les anomalies de la Saturation en sont la preuve. L'Empire maintient le cadre qui permet a tout le reste d'exister.`,
  position_lore: `Agent de la surveillance ordinaire de Virex, specialise dans la detection des Elus dont la signature elementaire est masquee par les anomalies de la Saturation. Son element Normal lui permet de percevoir par soustraction : il detecte les Elus en identifiant ce qui ne se normalise pas, ce qui reste anormal meme dans les zones d'anomalie. Un paradoxe operationnel que peu d'agents imperiaux maitrisent.`,
  style_combat: `Detecte les Elus en identifiant les anomalies dans les anomalies : ce qui reste elementairement actif dans les zones ou tout devrait etre normalise. Sa detection est la plus efficace precisement dans les zones de Saturation que les autres Capteurs trouvent illisibles.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
