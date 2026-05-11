import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Artillerie'];

export const personnage: Personnage = {
  id: 367,
  nom: 'Chrysolea',
  element: 'fee',
  classe: 'Artillerie',
  espece: 'Sylvane',
  region: 'Sylvera',
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
    physique: `Sylvane aux cheveux lumineux comme de l'or filé, lance des éclats de lumière féerique concentrée. Sa colère rend ses tirs plus brillants.`,
    personnalite: `En colère contre la Citadelle. L'élément Fée est né bien avant l'Empire — que les Fées le traitent comme leur propriété est l'usurpation fondatrice.`,
    lore: `Chrysolea cible les relais de la Citadelle dans Sylvera — des cristaux féeriques installés pour capter et diriger les naissances d'Élus Fée vers des familles contrôlées. Chaque cristal détruit prive la Citadelle d'un outil de manipulation générationnelle. Elle en a détruit six.`,
    combat: `Éclats de lumière féerique à longue portée qui traversent la plupart des boucliers. Destruction de cristaux de focalisation. Zone de lumière explosive.`,
  },
};
