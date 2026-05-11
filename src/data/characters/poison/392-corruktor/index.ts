import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 392,
  nom: `Corruktor`,
  element: 'Poison',
  classe: 'Enchanteur-Capteur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Corps sec et efficace, regard analytique. Porte des gants hermetiques et un masque filtrant de conception imperiale. Une serie de capteurs chimiques fixes a sa ceinture analysent en permanence l'air ambiant, cartographiant les signatures elementaires Poison dans un rayon de cent metres.`,
  description_personnalite: `Scientifique applique au service de l'Empire, convaincu que la toxicologie est une science exacte qui ne devrait pas etre laissee aux bricoleurs des guildes clandestines. Trouve les Dissidentes imprudentes dans leur usage des toxines. Des gens innocents meurent quand on empoisonne sans protocole.`,
  position_lore: `Chimiste de Kar-Dum forme par l'Institut d'Application Elementaire de l'Empire. Specialise dans la detection et la neutralisation des Elus Poison non enregistres, ainsi que dans leur localisation par leur signature chimique distinctive. Collabore avec la technocratie de contribution de Kar-Dum, qui trouve cet arrangement pragmatiquement acceptable.`,
  style_combat: `Libere des nuages traceurs qui revelent les signatures elementaires cachees dans les zones de la Fosse Interdite. Ses capteurs localisent les Elus a travers les ecrans standards, rendant les refuges chimiques des Dissidentes vulnerables a ses analyses.`,
  kit: ELEMENT_KITS['Poison'],
  modifications_classe: ``,
};

export default character;
