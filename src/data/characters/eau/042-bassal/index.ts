import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Gardien'];

export const personnage: Personnage = {
  id: 42,
  nom: 'Bassal',
  element: 'eau',
  classe: 'Gardien',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',
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
    physique: `Néréide massive des abysses, corps adapté à la pression extrême. Peau de pierre-corail, regard d'une patience géologique. Quasi-impassible en toutes circonstances.`,
    personnalite: `Philosophe de la profondeur. Parle peu — les abysses enseignent l'économie de mots. Agit quand nécessaire, autrement il observe.`,
    lore: `Depuis le Silence des Vents, un réseau de cavernes abyssales de Thalassyr sert de refuge aux Élus hors-Voile. Bassal en garde l'entrée. Il n'appartient à aucune faction et a refusé les trois. Il protège un espace où ni l'Empire ni la Convergence ne peuvent descendre — la pression les écrase avant.`,
    combat: `Résistance absolue aux dommages par adaptation abyssale. Pression extrême concentrée en onde de choc défensive. Mur de chair et d'eau dense qui ne recule pas.`,
  },
};
