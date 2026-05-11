import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Juggernaut'];

export const personnage: Personnage = {
  id: 213,
  nom: 'Vortex Massif',
  element: 'vent',
  classe: 'Juggernaut',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Convergence',
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
    physique: `Aéride colossal dont le corps génère un vortex permanent d'un mètre de rayon — les objets légers orbitent autour de lui. Cicatrices de Drain en spirale sur le torse.`,
    personnalite: `Pense que son pouvoir de vent concentré est une ressource collective — un moulin de guerre qui doit tourner pour tous, pas pour lui seul.`,
    lore: `Vortex Massif est le Juggernaut de la Convergence à Asterciel. Son énergie de vortex partiellement extraite alimente des systèmes de ventilation dans les mines de Kar-Dum. La caste sacerdotale d'Heliora l'a banni des quartiers supérieurs — ce qu'il ressent comme une validation.`,
    combat: `Vortex de corps qui absorbe et redistribue l'énergie des coups reçus. Charge frontale qui emporte tout dans son souffle. Résistance aux attaques de vent adverse.`,
  },
};
