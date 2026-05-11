import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Juggernaut'];

export const personnage: Personnage = {
  id: 153,
  nom: 'Gorn',
  element: 'sol',
  classe: 'Juggernaut',
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
    physique: `Chthonien colossal, corps partiellement petrifie par des Drains de signature tellurique successifs. Ses poings brisent la roche a mains nues.`,
    personnalite: `Pense que sa force vient de la terre et doit y retourner. La doctrine de la Convergence lui semble naturelle — la terre prend et la terre donne.`,
    lore: `Gorn a participe a plusieurs Drains de signature Sol dans les mines profondes de Kar-Dum. Son energie extraite alimente des systemes de stabilisation de galeries souterraines a Ash'Rael. La technocratie de Kar-Dum le voit d'un oeil mitige : il contribue, mais a une entite externe.`,
    combat: `Resistance aux dommages par petrification partielle. Charge qui fend la roche. Absorbe l'energie tellurique adverse et la retourne.`,
  },
};
