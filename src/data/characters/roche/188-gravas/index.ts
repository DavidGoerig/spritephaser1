import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Tireur'];

export const personnage: Personnage = {
  id: 188,
  nom: 'Gravas',
  element: 'roche',
  classe: 'Tireur',
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
    physique: `Chthonien mince qui propulse du gravier et des eclats de roche a vitesse de balle. Yeux proteges par une membrane rocheuse naturelle.`,
    personnalite: `Mercenaire loyal a Ormn-Dur comme territoire, pas a une faction.`,
    lore: `Gravas a travaille pour la technocratie, des proprietaires de galeries, et une fois pour les Dissidentes lors d'une extraction dans la zone de la Fosse Interdite. Il refuse systematiquement les contrats imperiaux — ils paient en retard.`,
    combat: `Tirs d'eclats de roche de precision extreme. Nuage d'impact de gravier en zone. Repositionnement rapide et silencieux.`,
  },
};
