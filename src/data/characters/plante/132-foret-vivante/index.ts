import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Gardien'];

export const personnage: Personnage = {
  id: 132,
  nom: 'Forêt-Vivante',
  element: 'plante',
  classe: 'Gardien',
  espece: 'Sylvan',
  region: 'Sylvera',
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
    physique: `Sylvan dont le corps a partiellement fusionné avec la végétation de Leth'Var — racines dans les pieds, branches aux épaules. Immobile au repos, inébranlable au combat.`,
    personnalite: `Gardien sans mandat. Il a décidé de protéger un territoire de la forêt et ne l'abandonnera pas.`,
    lore: `Forêt-Vivante garde une zone de Leth'Var que la Faim des Racines a préservée par miracle — un fragment de forêt ancienne intacte qui contient peut-être des fragments de la mémoire perdue. Toutes les factions veulent y accéder. Il les bloque toutes.`,
    combat: `Défense totale de son territoire. Peut étendre ses racines sur une large zone pour immobiliser tout intrus. Sa résistance dans son territoire est absolue.`,
  },
};
