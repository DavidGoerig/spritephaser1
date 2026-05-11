import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Escrimeur'];

export const personnage: Personnage = {
  id: 130,
  nom: 'Lianen',
  element: 'plante',
  classe: 'Escrimeur',
  espece: 'Sylvane',
  region: 'Sylvera',
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
    physique: `Sylvane élégante, épée tressée de lianes vivantes qui s'étendent en combat. Mouvements fluides comme la croissance végétale.`,
    personnalite: `Duelliste de l'ordre féerique à Leth'Var. Pense que le Voile d'Équité protège Sylvera d'une deuxième Faim des Racines.`,
    lore: `Lianen règle les contentieux de propriété sur les Élus Plante à Leth'Var par duel codifié. Elle navigue habilement entre Conservateurs de la Sève et Gardiens de la Clairière — les deux factions la respectent pour son habileté au combat, même si elles rejettent son allégeance impériale.`,
    combat: `Escrime végétale, ses lianes s'étendent pour piéger et désarmer l'adversaire. Vitesse et fluidité. Sa lame peut enraciner temporairement une cible.`,
  },
};
