import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Escrimeur'];

export const personnage: Personnage = {
  id: 160,
  nom: 'Fondation',
  element: 'sol',
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
    physique: `Chthonien elegant, lame de roche polie taillee dans les strates les plus dures d'Ormn-Dur. Mouvements lents mais totalement irreversibles.`,
    personnalite: `Duelliste imperial qui pense que la force geologique est la plus fondamentale — et donc la plus legitime. Sa patience est infinie.`,
    lore: `Fondation regle les contentieux de propriete sur les Elus Sol a Kar-Dum — conflits nombreux depuis la Fosse Interdite qui a redistribue les zones d'extraction. Il gere aussi les tensions entre la technocratie locale et les representants feeriques.`,
    combat: `Escrime geologique lente mais imparable — chaque coup brise les defenses les plus solides. Sa lame peut couper l'energie elementaire adverse.`,
  },
};
