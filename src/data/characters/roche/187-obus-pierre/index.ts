import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Artillerie'];

export const personnage: Personnage = {
  id: 187,
  nom: 'Obus-Pierre',
  element: 'roche',
  classe: 'Artillerie',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
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
    physique: `Chthonien trapu, bras capables de lancer des blocs de roche de quarante kilos avec precision. Toujours couvert de debris de pierres eclatees.`,
    personnalite: `Direct et concret. La politique se compte en blocs de roche deplaces. Il en deplace.`,
    lore: `Obus-Pierre cible les postes de surveillance imperiaux aux entrees de Kar-Dum et les equipements de forage que la Convergence installe dans les zones de la Fosse Interdite pour en extraire les Elus Nuee. Il ne fait pas de distinction doctrinale : les deux nuisent a Ormn-Dur.`,
    combat: `Projectiles de roche massive a longue portee. Destruction d'infrastructures par impact direct. Zone de debris persistante qui entrave le mouvement adverse.`,
  },
};
