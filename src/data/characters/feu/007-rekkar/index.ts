import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 7,
  nom: `Volcanis`,
  element: 'feu',
  classe: 'Artillerie',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Large de carrure, plus âgé, mains de forge calleuses travaillant encore avec précision parfaite. Son canon impérial modifié porte des marques Dissidentes gravées par-dessus le logo de l'Empire. Son ouïie gauche est partiellement détruite. Il porte une loupe optique soudée à l'orbite droite qu'il n'enlève pas à l'intérieur.`,
    personnalite: `Gruff, expérimenté, profondément méfiant de quiconque n'a pas été sur le terrain. Compte les installations impériales détruites comme d'autres comptent leurs victoires : quarante-sept. Ce qui l'anime n'est pas la haine mais un sens de la justice comptable.`,
    lore: `Ancien ingénieur d'artillerie de Khar-Vurn. Il était présent lors de la Rupture Thermique — ordonné en position avancée par un commandant qui battait en retraite avec ses officiers. Quand il a compris que c'était une position de sacrifice, il a tué l'officier, récupéré le canon, et marché jusqu'au premier contact Dissident qu'il a pu trouver. Il y est depuis.`,
    combat: `Bombes Laviques (arc, explosion de zone retardée), Pluie de Fragments (zone de déni continue), Obus de la Caldera (tir unique dévastateur laissant un champ de feu 3 tours). Passif Calcul Balistique : précision croissante par tour stationnaire.`,
  },
  stats: ELEMENT_KITS['feu']['Artillerie'],
  modificateurs: [],
};

export default character;
