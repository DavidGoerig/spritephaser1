import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Juggernaut'];

export const personnage: Personnage = {
  id: 123,
  nom: 'Thornax',
  element: 'plante',
  classe: 'Juggernaut',
  espece: 'Sylvan',
  region: 'Sylvera',
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
    physique: `Sylvan colossal, peau partiellement écorcée, cicatrices de Drain végétal en motifs d'écorce brûlée. Ses poings font pousser des épines à l'impact.`,
    personnalite: `Convaincu que la Faim des Racines a démontré que les Élus Plante ne doivent pas accumuler de puissance — le réseau racinaire dévorant est la métaphore exacte de ce que la Convergence combat.`,
    lore: `Thornax a participé à un Drain de signature végétale dans les zones de Sylvera les plus touchées par la Faim des Racines. Son énergie extraite alimente des systèmes biologiques à Ash'Rael. Les Conservateurs de la Sève le considèrent comme un sacrilège ; les Gardiens de la Clairière trouvent sa logique de destruction-redistribution familière.`,
    combat: `Résistance aux dégâts par écorce durcie. Charge qui fait jaillir des épines massives sur tout ce qu'il frappe. Absorbe l'énergie végétale adverse et la retourne.`,
  },
};
