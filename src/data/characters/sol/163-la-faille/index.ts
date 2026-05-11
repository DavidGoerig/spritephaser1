import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['sol']['Specialiste'];

export const personnage: Personnage = {
  id: 163,
  nom: 'La Faille',
  element: 'sol',
  classe: 'Specialiste',
  espece: 'Chthonienne',
  region: 'Ormn-Dur',
  faction: 'Independant',
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
    physique: `Chthonienne dont la forme physique est traversee de fissures lumineuses — le sol se fracture dans son sillage. Signature elementaire instable.`,
    personnalite: `Entite de fracture geologique. Pense en temps geologique. Les factions humaines lui semblent instantanees.`,
    lore: `La Faille est nee dans les profondeurs de la Fosse Interdite — une consequence directe de l'ouverture de la zone hyperfongique. Elle represente la conscience de la rupture geologique elle-meme. L'Empire ne peut l'enregistrer : sa naissance n'est pas datee.`,
    combat: `Manipulation des lignes de fracture dans une large zone. Failles instantanees sous les cibles. Puissance dependant de la fragilite structurelle du terrain.`,
  },
};
