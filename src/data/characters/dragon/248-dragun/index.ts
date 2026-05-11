import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 248,
  nom: `Dragun`,
  element: 'dragon',
  classe: 'Tireur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Independant',
  description: {
    physique: `Silhouette secè pour un Dragon Élu, avec des écailles fines d'un brun-doré qui captent la chaleur ambiante plutôt que de la produire. Ses projectiles sont des concentrations de feu draconique formées entre ses paumes — pas d'arme conventionnelle. Il porte des gants thermoactifs de régulation pour contrôler la décharge.`,
    personnalite: `Métier clair et éthique personnel simple : fonctionne pour quiconque paye le juste prix, jamais pour la Convergence (qu'il considère moralement répugnante depuis qu'il a vu ce qui reste de Gorrath après douze extractions), et à tarif symboli que pour les Dissidentes. Travaille pour l'Empire au double du tarif standard. Ils paient.`,
    lore: `Opère dans la zone grise entre les trois factions, enregistrant ses contrats à Virex (Isthme) comme la loi l'exige — théoriquement. La Citadelle le suit mais ne le confronte pas directement : il leur a été utile plusieurs fois dans des situations où un Élu Dragon indépendant était plus discret qu'un agent officiel.`,
    combat: `Tir Draconique (projectile ciblé à haute vélocité perçant les boucliers), Double Charge (deux tirs simultanés sur deux cibles différentes), Exécution Ancestrale (tir chargé à délai garanti critique si la cible est sous 50% PV). Passif Sang de Dragon : ses tirs ignorent un pourcentage de la résistance élémentaire de la cible.`,
  },
  stats: ELEMENT_KITS['dragon']['Tireur'],
  modificateurs: [],
};

export default character;
