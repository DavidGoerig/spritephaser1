import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Escrimeur'];

export const personnage: Personnage = {
  id: 190,
  nom: 'Roc-Vif',
  element: 'roche',
  classe: 'Escrimeur',
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
    physique: `Chthonien elegant, lame de roche poli-miroir forgee dans les couches les plus dures de Kar-Dum. Mouvements lents et inexorables.`,
    personnalite: `Duelliste imperial dans une ville qui respecte la contribution — il contribue par ses victoires en duel.`,
    lore: `Roc-Vif regle les contentieux de propriete sur les Elus Roche a Kar-Dum et dans les zones montagneuses intermediaires. Depuis la Fosse Interdite, les conflits sur les zones d'extraction se sont multiplies.`,
    combat: `Escrime geologique a vitesse moderee mais totalement imparable. Sa lame de roche concentre la puissance geologique. Un seul coup bien place suffit.`,
  },
};
