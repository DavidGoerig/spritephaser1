import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Spécialiste'];

export const personnage: Personnage = {
  id: 133,
  nom: 'L'Entrelacé',
  element: 'plante',
  classe: 'Spécialiste',
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
    physique: `Sylvan dont la forme est un entrelacement perpétuel de végétation et de chair — impossible de dire où finit l'un et où commence l'autre.`,
    personnalite: `Entité de réseau biologique. Pense en systèmes racinaires, pas en individus. Incompréhensible pour quiconque pense en politique.`,
    lore: `L'Entrelacé est né dans les profondeurs du réseau racinaire créé lors de la Faim des Racines — une conscience émergente du réseau survivant qui n'a jamais pris forme entièrement humaine. Il comprend la mémoire perdue de Sylvera non comme des textes mais comme des structures organiques. L'Empire ne peut l'enregistrer : il n'a pas de date de naissance.`,
    combat: `Manipulation de tous les réseaux racinaires dans une large zone. Croissance instantanée de végétation massive. Sa puissance dépend de la densité végétale du terrain — dans Leth'Var, elle est illimitée.`,
  },
};
