import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 492,
  nom: `Bouclier Vivant`,
  element: 'Combat',
  classe: 'Gardien',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien dont le corps entier est une surface de protection : large, dense, capable d'interposer sa masse entre n'importe quelle force et ce qu'il protege. Ses bras sont des paravents naturels. Ses cicatrices sont la carte de toutes les choses qu'il a protegees.`,
  description_personnalite: `Protecteur pur sans agenda politique. Son element Combat lui permet de reagir a toutes les forces physiques en presence, qu'elles soient elementaires ou purement physiques. Protege pour qui il choisit, avec les memes conditions : pas de capture d'Elus, pas de collaboration avec les drains de la Convergence.`,
  position_lore: `Veteran de plusieurs conflits dans les zones d'anomalie de Virex, ou les lois physiques changeantes l'ont force a developper une protection adaptative. Son element Combat lui permet d'interposer sa masse dans les trajectoires les plus improbables, reagissant aux forces physiques avant meme de les avoir consciemment percues. Travaille pour des clients independants qui ont besoin d'une protection sans allogance.`,
  style_combat: `Interpose son corps entre la source d'attaque et ses allies avec une anticipation qui semble surnaturelle. Son element Combat lui permet de traiter toute force physique comme une trajectoire lisible : aucune attaque ne passe sans que son corps ait eu l'option de l'intercepter.`,
  kit: ELEMENT_KITS['Combat'],
  modifications_classe: ``,
};

export default character;
