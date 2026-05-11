import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Capteur'];

export const personnage: Personnage = {
  id: 182,
  nom: 'Piege-Roche',
  element: 'roche',
  classe: 'Capteur',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
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
    physique: `Chthonien trapu aux doigts qui creent des pieges de roche qui se referment sur les cibles. Yeux gris adaptes a voir dans les galeries sombres.`,
    personnalite: `Traqueur pragmatique. Pense que les Elus Roche non-enregistres representent un risque structurel — voir la Fosse Interdite.`,
    lore: `Piege-Roche traque les Elus Roche dans les zones intermediaires entre Ormn-Dur et Varkhol — region disputee depuis la Rupture Thermique et la Fosse Interdite. Il collabore avec la technocratie de Kar-Dum quand leurs interets coincident.`,
    combat: `Pieges de roche declenches a distance. Detection sismique des signatures rocheuses. Cage de roche pour capturer sans blesser.`,
  },
};
