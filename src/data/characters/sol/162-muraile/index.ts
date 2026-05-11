import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Gardien'];

export const personnage: Personnage = {
  id: 162,
  nom: 'Muraille',
  element: 'sol',
  classe: 'Gardien',
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
    physique: `Chthonien colossal dont la peau est devenue indiscernable de la roche compressee. Immobile au repos — on le prend parfois pour une formation naturelle.`,
    personnalite: `Protege un territoire souterrain qu'il a decide de garder. Personne ne l'a mandate. Sa decision est definitive.`,
    lore: `Muraille garde l'entree d'une galerie profonde de Kar-Dum donnant sur les zones les moins instables de la Fosse Interdite. Des Elus hors-Voile s'y sont refugies. Il bloque toutes les factions sans distinction.`,
    combat: `Resistance absolue dans sa zone d'ancrage. Mur de roche leve instantanement. Defense structurelle — impossible a penetrer de front.`,
  },
};
