import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Escrimeur'];

export const personnage: Personnage = {
  id: 40,
  nom: 'Aquen',
  element: 'eau',
  classe: 'Escrimeur',
  espece: 'Néréide',
  region: 'Thalassyr',
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
    physique: `Néréide élégante, lame de cristal aqueux forgée dans les ateliers impériaux de Néris, mouvements qui ressemblent à une danse de fond marin. Économe de chaque geste.`,
    personnalite: `Défend l'honneur du code de duel féerique avec une conviction sincère. Pense que la force doit être belle et légitime pour être juste. Les combats sales lui répugnent moralement.`,
    lore: `Aquen est l'escrimeure officielle du droit féerique maritime à Néris — elle règle les contentieux de propriété sur les Élus par duel codifié, reconnu par la Confédération comme juridiction parallèle. Depuis le Silence des Vents, les contentieux ont triplé. Elle travaille sans interruption.`,
    combat: `Escrime aquatique de haute précision — sa lame de cristal peut trancher les courants élémentaires adverses, neutralisant les pouvoirs à mi-trajectoire. Vitesse extrême, économie absolue de mouvement.`,
  },
};
