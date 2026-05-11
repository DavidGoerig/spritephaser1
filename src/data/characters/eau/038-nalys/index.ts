import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Tireur'];

export const personnage: Personnage = {
  id: 38,
  nom: 'Nalys',
  element: 'eau',
  classe: 'Tireur',
  espece: 'Néréide',
  region: 'Thalassyr',
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
    physique: `Néréide aux yeux d'argent, équipement de précision récupéré sur plusieurs camps différents — jamais totalement dans une esthétique. Pragmatiquement assemblée.`,
    personnalite: `Mercenaire sans illusions sur sa nature. Ne ment jamais sur ce qu'elle fait pour de l'argent. Ne prend pas non plus de contrats qui heurteraient certaines lignes. Lesquelles ? Elle ne le dit pas.`,
    lore: `Nalys a travaillé pour l'Empire, la Convergence, les Dissidentes — jamais deux fois de suite pour le même camp, jamais deux contrats qui se recoupent. Depuis le Silence des Vents, l'information a une valeur marchande à Néris. Nalys archive discrètement ce qu'elle observe entre deux missions.`,
    combat: `Précision à longue portée avec des projectiles aquatiques pénétrants. Repositionnement rapide entre chaque tir. Peut cibler les signatures élémentaires à travers les obstacles aquatiques.`,
  },
};
