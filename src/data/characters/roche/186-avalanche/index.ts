import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Battlemage'];

export const personnage: Personnage = {
  id: 186,
  nom: 'Avalanche',
  element: 'roche',
  classe: 'Battlemage',
  espece: 'Pyrien',
  region: 'Varkhol',
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
    physique: `Pyrienne montagneuse en armure de roche imperiale renforcee, sceau du Voile d'Equite taille dans du granit. Ses mouvements font tomber de la poussiere des murs.`,
    personnalite: `Croit que sans regulation, une nouvelle Rupture Thermique ou une nouvelle Fosse Interdite est inevitable. L'Empire regule pour prevenir.`,
    lore: `Avalanche applique la loi du Calendrier dans les zones montagneuses de Varkhol — territoire difficile car les Pyriens montagnards rejettent traditionnellement la supervision feerique. Elle opere depuis la Rupture Thermique qui a fragile la confiance en l'independance locale.`,
    combat: `Melee de roche, armure active qui absorbe les coups et les retourne. Avalanche de blocs controlee en combat. Combo attaque-defense geologique.`,
  },
};
