import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 522,
  nom: `Fondation`,
  element: 'Normal',
  classe: 'Gardien',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Independent',
  description_physique: `Homme-Lien dont la presence physique est une architecture de protection : il ne s'interpose pas entre la force et la cible, il redefinie l'espace autour de lui pour que la force n'arrive pas a destination. Son element Normal lui permet de traiter toutes les forces elementaires comme equivalentes et de les redistribuer de facon inoffensive.`,
  description_personnalite: `Gardien des structures qui permettent aux gens de vivre ensemble dans les zones d'anomalie de Virex : les reseaux d'eau, les passerelles au-dessus des zones de temps ralenti, les refuges pour les Elus nés hors du Calendrier. Travaille pour qui protege ces structures, independamment de leur faction.`,
  position_lore: `Ingenieur des infrastructures de Virex specialise dans les zones d'anomalie elementaire de la Saturation des Elus. Son element Normal lui permet de maintenir la coherence structurelle des batiments et des reseaux dans des zones ou les elements interferent avec les materiaux de construction normaux. Travaille en independant, refusant toute allegiance qui l'obligerait a abandonner les infrastructures qu'il considere comme des biens communs.`,
  style_combat: `Genere un champ de normalisation autour de lui et de ses allies qui neutralise les forces elementaires hostiles en les redistribuant de facon inoffensive. Sa protection fonctionne contre tous les elements sans distinction, rendant ses allies temporairement immunises aux dommages elementaires directs.`,
  kit: ELEMENT_KITS['Normal'],
  modifications_classe: ``,
};

export default character;
