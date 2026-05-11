import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Plongeur'];

export const personnage: Personnage = {
  id: 184,
  nom: 'Granyte',
  element: 'roche',
  classe: 'Plongeur',
  espece: 'Pyrien',
  region: 'Varkhol',
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
    physique: `Pyrien montagnard agile malgre sa densite — ses os sont partiellement granitiques. Capable de se glisser dans des fissures rocheuses imperceptibles.`,
    personnalite: `Silencieux et efficace dans les zones de roche. Extrait les Elus avant que les agents arrivent.`,
    lore: `Granyte extrait des Elus Roche des zones montagneuses de Varkhol — nes dans les hauteurs, loin de Khar-Vurn et de ses enregistrements. Depuis la Rupture Thermique, la Forge Silencieuse attire beaucoup d'attention feerique. Granyte y opere malgre le danger.`,
    combat: `Deplacement dans les fissures rocheuses, attaque sismique de precision. Cree des acces et des sorties dans la roche. Combat d'infiltration minerale.`,
  },
};
