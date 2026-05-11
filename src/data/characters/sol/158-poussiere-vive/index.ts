import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Tireur'];

export const personnage: Personnage = {
  id: 158,
  nom: 'Poussiere-Vive',
  element: 'sol',
  classe: 'Tireur',
  espece: 'Chthonienne',
  region: 'Ormn-Dur',
  faction: 'Independant',
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
    physique: `Chthonienne fine aux mouvements silencieux, lance des projectiles de sable et roche fine a vitesse extreme. Toujours entouree d'un nuage de poussiere.`,
    personnalite: `Mercenaire precise loyale a Ormn-Dur en tant que region, sans allegiance ideologique.`,
    lore: `Poussiere-Vive loue ses services dans Kar-Dum depuis la Fosse Interdite, qui a cree des zones de territoire conteste dans Ormn-Dur. Elle a travaille pour la technocratie et des proprietaires de galeries, jamais pour l'Empire.`,
    combat: `Projectiles de sable et roche fine de precision extreme. Nuage de poussiere abrasive pour reduire la visibilite adverse. Repositionnement silencieux.`,
  },
};
