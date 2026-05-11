import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Escrimeur'];

export const personnage: Personnage = {
  id: 220,
  nom: 'Tourbillon',
  element: 'vent',
  classe: 'Escrimeur',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride élégant, lame forgée à partir d'un cristal de vortex d'altitude, mouvements de duel qui épousent les courants naturels d'Heliora.`,
    personnalite: `Duelliste de la légitimité impériale à Heliora. Pense que la force bien exercée est une grâce, pas une violence.`,
    lore: `Tourbillon règle les conflits de juridiction entre la caste sacerdotale d'Heliora et les représentants impériaux par duel codifié — une forme de résolution politique que les deux parties respectent. Il est l'interface humaine entre deux systèmes de légitimité qui se superposent.`,
    combat: `Escrime de vent, sa lame amplifie et redirige les courants adverses. Vitesse extraordinaire par propulsion de vent. Sa garde est quasi-impénétrable dans un environnement aérien.`,
  },
};
