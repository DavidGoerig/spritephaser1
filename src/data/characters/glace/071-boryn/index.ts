import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Vanguard'];

export const personnage: Personnage = {
  id: 71,
  nom: 'Boryn',
  element: 'glace',
  classe: 'Vanguard',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin aux yeux dorés-ambre brûlés par un premier Drain. Armure de la Convergence adaptée au froid extrême de Crysalme. Mâchoire serrée, conviction permanente.`,
    personnalite: `Évangéliste du sacrifice dans un milieu hostile. Son argument central : la monarchie rituelle d'Iskral conserve tout dans un gel stérile qui exclut la redistribution — une forme d'accumulation déguisée en tradition.`,
    lore: `Boryn tente de convertir les Givrins d'Iskral à la doctrine sacrificielle de la Convergence. Sa thèse : le Gel Éternel est la preuve que la puissance accumulée sans redistribution finit par figer le monde. Il a recruté trois Givrins cette saison. La monarchie l'a officiellement interdit d'Iskral. Il opère depuis les marges.`,
    combat: `Avant-garde de choc en milieu froid, utilise le froid environnant comme ressource doctrinale — son corps en absorbe et en redistribue aux alliés. Sa présence frontale désorganise les formations adverses.`,
  },
};
