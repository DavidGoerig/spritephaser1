import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Tireur'];

export const personnage: Personnage = {
  id: 128,
  nom: 'Sève-Vive',
  element: 'plante',
  classe: 'Tireur',
  espece: 'Sylvane',
  region: 'Sylvera',
  faction: 'Indépendant',
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
    physique: `Sylvane fine aux yeux couleur ambre de résine, lance des épines de précision par les pores de sa peau. Toujours en mouvement dans la canopée.`,
    personnalite: `Mercenaire forestière, prend les contrats qui servent Sylvera sans se soucier de la faction. Ses tarifs sont proportionnels à la dangerosité du terrain.`,
    lore: `Sève-Vive loge ses services dans Leth'Var depuis la Faim des Racines, qui a créé une demande pour des agents capables de naviguer les zones racinaires chaotiques. Elle a travaillé pour toutes les factions sans distinction de cause.`,
    combat: `Tirs d'épines de précision à longue portée. Repositionnement rapide dans la canopée. Peut cibler des signatures élémentaires à travers la végétation dense.`,
  },
};
