import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Assassin'];

export const personnage: Personnage = {
  id: 159,
  nom: 'Tunnelax',
  element: 'sol',
  classe: 'Assassin',
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
    physique: `Chthonien mince capable de traverser la roche meuble sans laisser de trace. Laisse une marque de main en argile sur ses cibles.`,
    personnalite: `Froid et methodique. Voit les agents de l'Empire dans les mines de Kar-Dum comme des corps etrangers dans un systeme vivant.`,
    lore: `Tunnelax elimine les agents imperiaux qui cataloguent les Elus Sol dans les zones profondes de Kar-Dum. Il utilise les tunnels instables de la Fosse Interdite comme routes d'acces et d'evasion que personne d'autre n'ose emprunter.`,
    combat: `Deplacement a travers le sol, attaque depuis le dessous sans avertissement. Engloutissement de la cible pour l'isoler. Disparait instantanement dans la roche.`,
  },
};
