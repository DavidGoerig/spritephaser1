import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Mage-Burst'];

export const personnage: Personnage = {
  id: 155,
  nom: 'Loessa',
  element: 'sol',
  classe: 'Mage-Burst',
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
    physique: `Chthonienne aux bras capables de lever des masses de roche enormes. Peau qui irradie une chaleur geothermique lors de ses decharges.`,
    personnalite: `Fascinee par la mecanique profonde de la terre — plaques, pressions, tensions. Les factions lui semblent des epiphenomenes de surface.`,
    lore: `Loessa a cartographie les structures tectoniques sous Ormn-Dur et comprend la Fosse Interdite comme un evenement geologique previsible — une consequence de l'extraction excessive. Elle cherche d'autres zones de risque similaire. Personne ne peut la recruter car ses priorites sont geologiques.`,
    combat: `Soulevements de masse tellurique a grande echelle. Seisme controle en zone. Puissance brute geologique sans plafond connu.`,
  },
};
