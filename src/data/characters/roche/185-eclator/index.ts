import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Mage-Burst'];

export const personnage: Personnage = {
  id: 185,
  nom: 'Eclator',
  element: 'roche',
  classe: 'Mage-Burst',
  espece: 'Chthonien',
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
    physique: `Chthonien dont les bras generent une pression interne extreme — ses poings creent des explosions rocheuses a l'impact. Peau fissuree de chaleur interne.`,
    personnalite: `Fascine par la physique des ruptures rocheuses. Les doctrines lui semblent molles comparees a la geologie.`,
    lore: `Eclator a reproduit en experimentation privee les conditions de la Fosse Interdite — la pression et le type de forage qui ont cree l'explosion. Il comprend le mecanisme et cherche d'autres applications.`,
    combat: `Explosion rocheuse en zone large depuis les poings. Pression interne concentree en onde de choc. Puissance brute geologique.`,
  },
};
