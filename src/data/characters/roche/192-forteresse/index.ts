import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Gardien'];

export const personnage: Personnage = {
  id: 192,
  nom: 'Forteresse',
  element: 'roche',
  classe: 'Gardien',
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
    physique: `Chthonien dont la peau est devenue de la roche compressee pure. Immobile au repos. Sa presence stabilise geologiquement la zone autour de lui.`,
    personnalite: `Garde sans mandat. Sa decision est ancienne et definitive.`,
    lore: `Forteresse garde l'entree nord de Kar-Dum depuis avant la Fosse Interdite. Il existait deja quand l'Elu Rock ambitieux a creuse trop profond. Il a regarde la catastrophe sans bouger. Il regarde maintenant les factions se disputer avec la meme absence de reaction.`,
    combat: `Defense absolue dans sa zone. Aucune attaque ne le deplace. Attaquer Forteresse epuise l'attaquant sans resultat.`,
  },
};
