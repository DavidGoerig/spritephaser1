import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Plongeur'];

export const personnage: Personnage = {
  id: 154,
  nom: 'Sismur',
  element: 'sol',
  classe: 'Plongeur',
  espece: 'Chthonien',
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
    physique: `Chthonien agile specialise dans le deplacement rapide en galerie. Marques de pression sur les cotes — traces d'infiltrations dans des tunnels trop etroits.`,
    personnalite: `Rapide et precis dans les souterrains. Croit que les Elus nes en profondeur appartiennent aux profondeurs, pas au Calendrier des Fees.`,
    lore: `Sismur extrait des Elus Sol que le Calendrier a localises avant les agents de la Citadelle. Il exploite les reseaux de galeries de Kar-Dum — et les zones chaotiques de la Fosse Interdite que meme les agents imperiaux refusent d'approcher — comme routes d'infiltration et de fuite.`,
    combat: `Deplacement rapide en galerie, attaque sismique de precision. Disparait dans le sol apres chaque frappe. Cree des tunnels d'acces et d'evasion en combat.`,
  },
};
