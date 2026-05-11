import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['roche']['Soutien'];

export const personnage: Personnage = {
  id: 181,
  nom: 'Geolithe',
  element: 'roche',
  classe: 'Soutien',
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
    physique: `Pyrien montagnard aux epaules larges comme un affleurement rocheux, mains qui creent des cristaux de guerison minerale. Peau striee de couches sedimentaires visibles.`,
    personnalite: `Soignant des hauteurs qui refuse que ses cristaux soient enregistres comme ressource imperiale. Les montagnes de Varkhol soignent sans permis.`,
    lore: `Geolithe soignait dans les zones montagneuses de Varkhol jusqu'a la Rupture Thermique — l'explosion qui a fige la Forge Silencieuse de Khar-Vurn. Il soigne maintenant les Pyriens des hauteurs qui refusent le Voile d'Equite et les Elus Roche nes en dehors des enregistrements feeriques.`,
    combat: `Cristaux de guerison minerale deposes sur les allies blesses. Barricade de roche pour proteger les positions. Eclats de pierre defensifs si necessaire.`,
  },
};
