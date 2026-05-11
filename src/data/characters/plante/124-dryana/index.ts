import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Plongeur'];

export const personnage: Personnage = {
  id: 124,
  nom: 'Dryana',
  element: 'plante',
  classe: 'Plongeur',
  espece: 'Sylvane',
  region: 'Sylvera',
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
    physique: `Sylvane fine, capable de se fondre dans la végétation dense de Sylvera jusqu'à l'invisibilité. Marques de lianes sur les chevilles — traces de missions d'extraction.`,
    personnalite: `Silencieuse et efficace. Chaque Élu extrait d'une capture impériale est un fragment du droit du monde à choisir ses propres réponses.`,
    lore: `Dryana extrait des Élus Plante que les agents du Calendrier ont localisés dans les zones de Leth'Var. Elle exploite les réseaux racinaires souterrains de Sylvera comme routes d'infiltration — depuis la Faim des Racines, certains de ces réseaux sont devenus des labyrinthes biologiques que personne ne cartographie complètement.`,
    combat: `Déplacement par les réseaux racinaires souterrains. Combat de précision végétal — lianes qui immobilisent, épines qui percent. Disparaît dans la forêt dense.`,
  },
};
