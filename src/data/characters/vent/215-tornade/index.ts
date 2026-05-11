import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Mage-Burst'];

export const personnage: Personnage = {
  id: 215,
  nom: 'Tornade',
  element: 'vent',
  classe: 'Mage-Burst',
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
    physique: `Aéride dont la présence crée des bourrasques spontanées à plusieurs mètres. Ses yeux sont le gris-vert des nuages d'avant la tempête.`,
    personnalite: `Fasciné par les systèmes climatiques comme phénomènes complexes. Les humains lui semblent petits face aux forces qu'il comprend.`,
    lore: `Tornade a reproduit en puissance réduite les conditions qui avaient causé la Chute des Nuages d'Heliora. Il comprend le désastre comme un événement naturellement prévisible que personne n'a voulu voir. L'Empire ne peut pas l'enregistrer : sa signature change selon les conditions météorologiques.`,
    combat: `Tornade dévastatrice en zone large. Imprévisible dans sa direction — épouse les systèmes climatiques réels. Puissance brute qui n'a pas de plafond connu.`,
  },
};
