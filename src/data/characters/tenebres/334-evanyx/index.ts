import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 334,
  nom: `Evanyx`,
  element: 'Tenebres',
  classe: 'Plongeur',
  espece: 'Umbrien',
  region: 'Noctea',
  faction: 'Dissidentes',
  description_physique: `Svelte et rapide, capable de se fondre dans une ombre portee de quelques centimetres. Ses vetements absorbent la lumiere a un niveau presque pathologique. Des cicatrices en spirale marquent ses avant-bras, souvenir d'une extraction sous garde imperiale dans les couloirs de Vel'Nox.`,
  description_personnalite: `Pragmatique et tenace, allergique aux ideologies. Se mefie des grandes causes, y compris celle des Dissidentes, mais reste fidele aux individus qu'il a choisi de proteger. Il n'extrait pas des symboles : il extrait des personnes.`,
  position_lore: `Ancienne recrue des guildes marchandes de Vel'Nox devenu extracteur pour les Dissidentes apres avoir vu sa famille dispersee par une operation de capture imperiale. Specialiste des zones d'ombre totale, il guide les Elus non enregistres hors des couloirs surveilles en utilisant le reseau de passages souterrains creuses avant le Vol de la Lumiere, quand Vel'Nox etait encore une ville a ciel ouvert.`,
  style_combat: `Plonge dans les angles morts et en ressort avec une vitesse desorientante. Ses attaques surgissent toujours depuis une zone que l'adversaire ne peut pas surveiller, exploitant l'obscurite de Vel'Nox comme terrain nativement hostile a l'ennemi.`,
  kit: ELEMENT_KITS['Tenebres'],
  modifications_classe: ``,
};

export default character;
