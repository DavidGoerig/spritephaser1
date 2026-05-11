import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 3,
  nom: `Cindrak`,
  element: 'feu',
  classe: 'Juggernaut',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Convergence',
  description: {
    physique: `Presque trois mètres de pierre volcanique et de muscle. Son bras gauche est enkysté dans de la lave durcie — blessure qu'il a refusé de faire soigner parce que, dit-il, restituer sa douleur au collectif commence par sa propre chair. La marque de la Convergence est brulée profond dans son torse calcifié. Il transpire de la vapeur en permanence.`,
    personnalite: `Sincèrement converti à la doctrine de la Convergence — croit que sa puissance lui a été donnée par le monde et doit lui être rendue. Sa philosophie n'est pas la violence pour la violence mais une logique sacrificielle profonde. Joie authentique dans le combat parce que le combat est l'acte de restitution le plus pur qu'il connaisse.`,
    lore: `Né dans les champs de magma de la caldeira extérieure de Varkhôl, enfant de la Scorie — le district de déchets où naissent ceux que l'Empire juge non-prioritaires pour le Calendrier des Fées. Quand les Fées ont enfin envoyé des Élus stabilisateurs dans la région, Cindrak avait déjà développé sa puissance seul, en survivant à trois éruptions en une nuit. La Convergence l'a recruté avec un argument qu'il a trouvé juste : son énergie n'appartient ni à lui ni à l'Empire, mais au flux.`,
    combat: `Peau de Lave (absorbe une fraction des dégâts de feu comme armure), Charge Volcanique (rush renversant en ligne), Éruption Localisée (zone de lave temporaire), Noyau Incandescent (mode survie qui pulse de la chaleur à tout ce qui est adjacent).`,
  },
  stats: ELEMENT_KITS['feu']['Juggernaut'],
  modificateurs: [],
};

export default character;
