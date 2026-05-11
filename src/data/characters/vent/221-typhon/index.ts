import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Vanguard'];

export const personnage: Personnage = {
  id: 221,
  nom: 'Typhon',
  element: 'vent',
  classe: 'Vanguard',
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
    physique: `Aéride aux yeux brûlés d'un Drain de vortex, armure de la Convergence adaptée aux conditions aériennes extrêmes. Sa présence crée des mini-tempêtes.`,
    personnalite: `Argumentateur en colère. Sa thèse : l'aristocratie verticale d'Heliora est l'accumulation d'altitude transformée en accumulation de pouvoir — exactement ce que la Convergence combat.`,
    lore: `Typhon recrute dans les quartiers bas d'Heliora — ceux qui ne se sont pas reconstruits après la Chute des Nuages. Son discours sur la redistribution de l'énergie des Élus trouve audience chez ceux qui attendent encore l'aide impériale. La caste sacerdotale le surveille comme menace.`,
    combat: `Avant-garde de vortex — sa présence frontale génère une turbulence qui désorganise les formations adverses. Absorbe l'énergie de vent adverse et la redistribue à ses alliés.`,
  },
};
