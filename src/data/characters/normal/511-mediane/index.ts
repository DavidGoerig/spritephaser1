import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 511,
  nom: `Mediane`,
  element: 'Normal',
  classe: 'Enchanteur-Soutien',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',
  description_physique: `Femme aux traits exactement ordinaires en surface, mais dont la presence stabilise les zones d'anomalie elementaire autour d'elle : les plantes qui poussaient sans sol se posent quand elle s'approche, le temps qui ralentissait reprend son rythme normal. Son element Normal est une sorte d'ancrage physique du monde.`,
  description_personnalite: `Soigneuse qui utilise sa capacite de normalisation elementaire pour proteger les Elus dans les zones de Saturation de Virex, ou les anomalies peuvent etre dangereuses pour les Elus jeunes. Croit que le monde n'a pas besoin d'etre plus element que necessaire : un espace normal permet a tout le monde de respirer.`,
  position_lore: `Nee dans une zone d'anomalie de la Saturation des Elus de Virex, dans un quartier ou le feu et l'eau coexistaient et ou des naissances anormales etaient regulieres. Son element Normal s'est manifeste comme une capacite de normalisation qui a calme les anomalies autour d'elle depuis l'enfance. Les Fees ont decide de ne pas l'enregistrer, considerant son element comme trop peu strategique. Les Dissidentes l'ont recrutee precisement pour cette raison : elle protege les zones de refuge en les rendant elementairement invisibles.`,
  style_combat: `Cree des zones de stabilite elementaire autour de ses allies qui neutralisent les effets d'anomalie ambiante. Dans les zones de Saturation, sa presence est un refuge : les elements perturbateurs se calment, les signatures elementaires se normalisent, rendant ses proteges invisibles aux capteurs qui cherchent des anomalies.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
