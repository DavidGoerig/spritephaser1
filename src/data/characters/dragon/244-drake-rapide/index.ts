import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 244,
  nom: `Skarath`,
  element: 'dragon',
  classe: 'Plongeur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',
  description: {
    physique: `Élancé pour un Dragon Élu, avec des écailles légères d'un rouge-ambré qui absorbent la lumière plutôt qu'elles ne la réfléchissent. Sa mutation draconique a produit des écailles pectorales qui fonctionnent comme des ailerons — en position de sprint, il plane sur de courtes distances. Né au bord de la Forge Silencieuse, dans une formation de pierre-dragon que personne n'avait identifiée comme site de naissance potentiel.`,
    personnalite: `Rapide, instinctif, dépend de ses réflexes plutôt que de la planification. Parle peu. A une loyauté absolue envers les Dissidentes parce qu'ils l'ont trouvé une semaine avant les Capteurs impériaux. Cette semaine représente, pour lui, ce que valent les Dissidentes.`,
    lore: `Né sur une 'date perdue' du Calendrier des Fées — la Citadelle savait qu'une naissance devait se produire dans la zone de Khar-Vurn mais ne pouvait pas prédire laquelle. Les Capteurs ont été déployés avec une semaine de retard sur la naissance effective. Dragoryn a amené Skarath aux Dissidentes avant l'arrivée des Capteurs. Il court depuis, dans l'espace entre les lignes de surveillance impériales.`,
    combat: `Aile Draconique (court sprint aérien traversant les cases occupées), Coup de Queue (écaille-whip qui déséquilibre), Plongeon de Pierre (frappe de descente avec knockback en zone). Passif Vélocité Ancestrale : chaque mouvement augmente les dégâts du prochain sort.`,
  },
  stats: ELEMENT_KITS['dragon']['Plongeur'],
  modificateurs: [],
};

export default character;
