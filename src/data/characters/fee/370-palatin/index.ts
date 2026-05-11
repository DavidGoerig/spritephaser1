import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Escrimeur'];

export const personnage: Personnage = {
  id: 370,
  nom: 'Palatin',
  element: 'fee',
  classe: 'Escrimeur',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin en tenue de duel féerique officielle de la Citadelle, lame de cristal féerique forgée en altitude, aura de légitimité impériale.`,
    personnalite: `Le représentant le plus élégant de la Citadelle à Iskral. Pense que le duel féerique est la forme la plus civilisée de résolution de conflits.`,
    lore: `Palatin gère les duels de juridiction entre la monarchie rituelle d'Iskral et les agents de la Citadelle — les conflits les plus fréquents et les plus politiquement chargés. Il a gagné vingt-deux duels consécutifs. La monarchie le méprise et l'admire simultanément.`,
    combat: `Escrime féerique de haute précision, sa lame peut dissoudre les protections élémentaires adverses. Vitesse et grâce. L'aura de sa lame déstabilise psychologiquement les adversaires.`,
  },
};
