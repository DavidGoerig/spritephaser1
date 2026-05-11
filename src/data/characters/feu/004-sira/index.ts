import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 4,
  nom: `Sirayx`,
  element: 'feu',
  classe: 'Plongeur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Corps compact à twitch rapide sous une peau d'obsidienne fissurée sombre. Maintient sa température corporelle artificiellement élevée via des stimulants alchimiques de la Scorie, laissant une distorsion de chaleur permanente autour de sa silhouette. Foulard Dissident teint rouge-flamme toujours sur le visage. Ses pieds ne restent jamais immobiles.`,
    personnalite: `Imprudent par philosophie — l'hésitation est le premier outil des Fées pour contrôler les gens. Parle trop en combat, silencieux dehors. Humour noir à contretemps. Engagé dans la protection des Élus nés hors du Calendrier parce qu'il en est un.`,
    lore: `Né dans la Scorie de Khar-Vurn, hors des dates prévues par le Calendrier des Fées — invisible à l'Empire pendant son enfance, très visible quand sa puissance a émergé. Les Dissidentes du Voile l'ont extrait de Khar-Vurn une semaine avant que les Capteurs ne l'identifient. Il court depuis, très vite, dans la même direction.`,
    combat: `Lame de Braise (dash laissant un sillage de feu), Bombes Thermiques (grenades à retardement), Surchauffe Totale (état où toutes ses capacités se déclenchent deux fois pendant 1 tour).`,
  },
  stats: ELEMENT_KITS['feu']['Plongeur'],
  modificateurs: [],
};

export default character;
