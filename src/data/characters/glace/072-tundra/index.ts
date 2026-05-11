import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Gardien'];

export const personnage: Personnage = {
  id: 72,
  nom: 'Tundra',
  element: 'glace',
  classe: 'Gardien',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin colossal, corps qui irradie un froid absolument stable. Regard vide et patient comme un glacier. Sa peau est devenue indiscernable de la pierre gelée.`,
    personnalite: `Entité de permanence. Garde le champ du Gel Éternel depuis si longtemps qu'il en est devenu presque une partie. Le temps politique des factions lui paraît anecdotique.`,
    lore: `Tundra garde le champ du Gel Éternel à l'extérieur d'Iskral. Personne ne lui a assigné ce rôle — il y est simplement depuis que le champ existe. Toutes les factions ont tenté de le recruter : l'Empire pour ses capacités, la Convergence pour son énergie, les Dissidentes pour le symbole. Il les observe et ne répond pas.`,
    combat: `Imperturbabilité totale face aux attaques. Le froid absolu de sa zone d'action ralentit tout agresseur. Sa résistance aux dommages élémentaires est totale — il a absorbé trop de froid pour que quoi que ce soit lui fasse froid.`,
  },
};
