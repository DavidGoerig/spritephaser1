import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Artillerie'];

export const personnage: Personnage = {
  id: 157,
  nom: 'Cratere',
  element: 'sol',
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
    physique: `Chthonien massif, lance des projectiles de roche a haute velocite. Bras renforces par des annees de manipulation minerale. Toujours couvert de poussiere.`,
    personnalite: `Pense que les infrastructures de controle imperiales peuvent etre litteralement enterrees. Il le fait.`,
    lore: `Cratere cible les postes de surveillance imperiaux installes aux entrees des galeries de Kar-Dum depuis la Fosse Interdite. Il les enterre sous des eboulis controles. L'Empire les reconstruit. Il les enterre a nouveau. Il compte ses cycles d'usure avec satisfaction.`,
    combat: `Projectiles de roche massive a longue portee. Eboulements controles sur des zones ciblees. Destruction d'infrastructures souterraines.`,
  },
};
