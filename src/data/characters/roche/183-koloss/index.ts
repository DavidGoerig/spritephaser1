import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Juggernaut'];

export const personnage: Personnage = {
  id: 183,
  nom: 'Koloss',
  element: 'roche',
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
    physique: `Chthonien de taille anormale — deux metres dix. Corps partiellement integre a une armure de roche naturelle nee de Drains de signature minerale. Ses pas laissent des empreintes dans la roche solide.`,
    personnalite: `Pense que sa masse est une ressource collective. Il la met a disposition sans hesiter.`,
    lore: `Koloss a subi cinq Drains de signature Roche pour la Convergence. Son energie extraite stabilise des structures architecturales a Ash'Rael et Kar-Dum. La technocratie de Kar-Dum voit dans cette double contribution un modele.`,
    combat: `Masse corporelle absolue — les attaques physiques rebondissent. Charge qui brise toute formation. Absorbe l'energie de roche adverse.`,
  },
};
