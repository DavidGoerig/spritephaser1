import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Battlemage'];

export const personnage: Personnage = {
  id: 156,
  nom: 'Terrak',
  element: 'sol',
  classe: 'Battlemage',
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
    physique: `Chthonien en armure de roche compressee imperiale, sceau du Voile d'Equite taille dans la pierre. Chaque pas fait vibrer le sol.`,
    personnalite: `Pense que sans l'Empire pour reguler les Elus Sol, une nouvelle Fosse Interdite est inevitable. La supervision protege.`,
    lore: `Terrak applique la loi du Calendrier a Kar-Dum en collaboration pragmatique avec la technocratie de contribution. La Fosse Interdite est son argument permanent : voila ce qui arrive sans supervision.`,
    combat: `Combat de melee tellurique, armure de roche active. Tremblements de combat qui destabilisent les formations adverses. Combo attaque-defense geologique.`,
  },
};
