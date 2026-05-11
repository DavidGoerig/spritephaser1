import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Tireur'];

export const personnage: Personnage = {
  id: 98,
  nom: 'Zelyne',
  element: 'electrique',
  classe: 'Tireur',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride fine aux yeux qui luisent légèrement dans l'obscurité, équipement de tir électrique modulaire récupéré de plusieurs sources. Jamais identifiable à une faction.`,
    personnalite: `Mercenaire honnête : elle dit exactement ce qu'elle fait pour de l'argent et ce qu'elle ne fera pas pour aucune somme. Sa ligne est nette.`,
    lore: `Zelyne loue ses services dans Asterciel depuis la Chute des Nuages, qui a créé un marché de l'action militaire privée — reconstruction, protection, extraction. Elle n'a jamais travaillé deux fois pour le même camp. La caste sacerdotale la surveille comme une anomalie non-classée.`,
    combat: `Tirs électriques de précision à longue portée qui ciblisent les signatures élémentaires adverses. Repositionnement par bond électrique. Sniper capable d'opérer dans les courants électriques d'Heliora.`,
  },
};
