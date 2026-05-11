import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Vanguard'];

export const personnage: Personnage = {
  id: 191,
  nom: 'Bloc-Percutant',
  element: 'roche',
  classe: 'Vanguard',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
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
    physique: `Chthonien dont le corps ressemble a un bloc de roche en mouvement. Cicatrices de Drain en couches geologiques visibles sur le torse.`,
    personnalite: `Evangeliste de la redistribution geologique. Sa these : la roche qu'on extrait appartient a la terre, comme l'energie des Elus Roche appartient au collectif.`,
    lore: `Bloc-Percutant opere a Kar-Dum comme avant-garde doctrinale de la Convergence. Il recrute parmi les ouvriers de galerie qui ont vu la Fosse Interdite de pres — la catastrophe comme preuve que l'accumulation individuelle detruit.`,
    combat: `Avant-garde de choc — sa presence frontale brise les formations avant meme le contact. Absorbe les degats rocheux et les redistribue.`,
  },
};
