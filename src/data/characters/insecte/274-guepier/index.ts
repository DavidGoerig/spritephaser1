import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 274,
  nom: `Guepier`,
  element: 'Nuee',
  classe: 'Plongeur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',
  description_physique: `Chthonien dont la symbiose avec le reseau de la Fosse Interdite a produit deux aiguillons retractables dans ses avant-bras, venin paralysant a action rapide. Taille fine, ailes vestigiales non-fonctionnelles pour la stabilisation. Peau rayee de noir et jaune — avertissement biologique impose par la colonie interne.`,
  description_personnalite: `Opere sur une logique d'intervention chirurgicale. N'a pas de philosophie elaboree : il protege sa communaute d'Ormn-Dur et les Dissidentes aussi. Sa communication passe par les pheromones autant que par les mots.`,
  position_lore: `Guepier est ne dans les zones adjacentes a la Fosse Interdite — une naissance progressive, sur plusieurs mois, alors que sa symbiose avec le reseau hyperfongique se consolidait. Le Calendrier n'a pas pu l'enregistrer avec precision. Les Dissidentes l'ont contacte avant que les agents imperiaux ne comprennent qu'il existait. Son venin paralysant est plus efficace contre les unites non-Nuee — les Chthoniens ont une resistance naturelle partielle aux produits de la Fosse.`,
  style_combat: `Bonds courts et imprecis pour l'approche. Aiguillon double sur la cible prioritaire. Retraite couverte par un essaim de distraction. Jamais en ligne droite.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Mue de Guepier le teleporte directement sur la case de la cible. Piqure depuis une Mue inflige Venin Paralytique immediat sans delai.`,
};

export default character;
