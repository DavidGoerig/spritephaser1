import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Spécialiste'];

export const personnage: Personnage = {
  id: 223,
  nom: 'L'Inconstant',
  element: 'vent',
  classe: 'Spécialiste',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride dont la forme change selon les vents locaux — parfois dense et solide, parfois presque éthéré. Ses traits varient selon les conditions météorologiques.`,
    personnalite: `Entité climatique autant qu'être vivant. Pense en systèmes, pas en individus. Imprévisible par nature.`,
    lore: `L'Inconstant est né dans les turbulences de la Chute des Nuages — une conscience émergente des vents déstabilisés d'Heliora qui n'a jamais pris forme stable depuis. Il comprend tous les courants d'Asterciel comme un seul système respiratoire. L'Empire ne peut l'enregistrer : sa signature change à chaque souffle.`,
    combat: `Manipulation de tous les courants de vent dans une région. Tempêtes localisées ou calmes stricts selon sa volonté. Sa puissance dépend des conditions météorologiques réelles — imprévisible par définition.`,
  },
};
