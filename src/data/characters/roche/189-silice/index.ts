import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Assassin'];

export const personnage: Personnage = {
  id: 189,
  nom: 'Silice',
  element: 'roche',
  classe: 'Assassin',
  espece: 'Pyrien',
  region: 'Varkhol',
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
    physique: `Pyrienne montagnarde a la peau presque translucide par finesse siliceuse. Quasi-invisible sur fond de roche claire. Laisse un eclat de quartz sur ses cibles.`,
    personnalite: `Precise et sans illusions. Les agents imperiaux dans les montagnes de Varkhol sont des corps etrangers dans un ecosysteme geologique qu'elle connait intimement.`,
    lore: `Silice elimine les agents du Calendrier qui operent dans les zones montagneuses de Varkhol — notamment ceux qui cherchent les Elus Dragon nes sur des 'dates perdues' dans les formations de pierre-dragon de la Forge Silencieuse.`,
    combat: `Invisibilite sur fond rocheux. Frappe silencieuse par tranchant de silice. Laisse ses cibles sans trace visible de la cause.`,
  },
};
