import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Plongeur'];

export const personnage: Personnage = {
  id: 94,
  nom: 'Spark',
  element: 'electrique',
  classe: 'Plongeur',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Dissidentes',
  niveau: 1,
  xp: 0,
  stats: {
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  },
  description: {
    physique: `Aéride agile aux réflexes sur-développés, cheveux courts brûlés par ses propres surcharges. Marques d'arc électrique sur les avant-bras — traces d'infiltrations serrées.`,
    personnalite: `Impulsif mais précis. Son moteur est la colère contre la Chute des Nuages mal gérée et les inégalités de reconstruction qui ont suivi. Il agit vite et juste.`,
    lore: `Spark extrait des Élus Electric que le Calendrier a identifiés dans les quartiers bas d'Heliora avant que les agents impériaux n'arrivent. Depuis la Chute des Nuages, la caste sacerdotale a renforcé la surveillance des naissances — les Élus Electric sont considérés comme stratégiques pour la stabilité d'Asterciel. Spark en a sauvé neuf cette saison.`,
    combat: `Vitesse d'infiltration maximale, déplacement par bonds électriques. Neutralisation des systèmes de détection par court-circuit. Combat de précision électrique — frappe et disparaît.`,
  },
};
