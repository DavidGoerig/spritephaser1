import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Plongeur'];

export const personnage: Personnage = {
  id: 364,
  nom: 'Ailevif',
  element: 'fee',
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
    physique: `Sylvane légère aux épaules ailées d'un faible pouvoir de vol féerique, aura colorée selon l'urgence. Rapide et presque silencieuse en déplacement.`,
    personnalite: `Urgente et précise. Elle sait que les Élus Fée sont les cibles prioritaires de la Citadelle — elle les extrait en priorité.`,
    lore: `Ailevif extrait les Élus Fée de Sylvera et Crysalme — les deux régions où l'élément se manifeste naturellement. Depuis la Faim des Racines, les agents de la Citadelle sont très présents à Leth'Var. Ailevif connaît des routes d'extraction par les forêts de Sylvera que même les agents impériaux ne cartographient pas.`,
    combat: `Vol féerique de courte durée pour franchir les obstacles. Extraction rapide, combat de précision légère. Sa vitesse dans les forêts de Leth'Var est imbattable.`,
  },
};
