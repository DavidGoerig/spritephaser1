import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Capteur'];

export const personnage: Personnage = {
  id: 152,
  nom: 'Crevass',
  element: 'sol',
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
    physique: `Chthonien mince aux mouvements souterrains, capable de se deplacer a travers le sol meuble. Peau qui change de texture selon le substrat traverse.`,
    personnalite: `Traqueur technique qui utilise les vibrations sismiques pour detecter les signatures elementaires. Croit que la Fosse Interdite justifie la supervision imperiale.`,
    lore: `Crevass traque les Elus Sol non-enregistres dans Ormn-Dur par vibration sismique — chaque Elu deplace le sol d'une facon unique, lisible pour lui. Depuis la Fosse Interdite, la technocratie de Kar-Dum collabore partiellement avec l'Empire car la surveillance des zones profondes depasse leurs capacites locales.`,
    combat: `Deplacement a travers le sol, attaque depuis le dessous. Detection sismique dans un rayon de cinquante metres. Capture par engloutissement partiel du sol.`,
  },
};
