import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Soutien'];

export const personnage: Personnage = {
  id: 151,
  nom: 'Sedivyne',
  element: 'sol',
  classe: 'Soutien',
  espece: 'Chthonienne',
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
    physique: `Chthonienne compacte a la peau gris-ocre des strates sedimentaires, mains qui canalisent la guerison par remise en place minerale. Yeux couleur argile.`,
    personnalite: `Guerisseuse de fond qui soigne sans poser de questions sur la faction. La technocratie de contribution de Kar-Dum lui semble juste jusqu'a ce que l'Empire en prenne le controle.`,
    lore: `Sedivyne soignait les ouvriers des mines de Kar-Dum jusqu'a ce que l'Empire exige l'enregistrement des Elus Sol soignants. Elle a refuse et rejoint les Dissidentes. Elle soigne maintenant dans les zones profondes d'Ormn-Dur, parfois a proximite de la Fosse Interdite — la catastrophe nee quand un Elu Rock a creuse trop profond et libere une zone hyperfongique saturee d'emanations toxiques.`,
    combat: `Guerison minerale — regeneration des os et structures profondes. Barricade de sol leve pour proteger ses allies. Tremblements localises si poussee a l'offensive.`,
  },
};
