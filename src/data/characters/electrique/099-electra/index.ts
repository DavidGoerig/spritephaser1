import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Assassin'];

export const personnage: Personnage = {
  id: 99,
  nom: 'Electra',
  element: 'electrique',
  classe: 'Assassin',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride à la peau bleutée de décharge chronique, quasi-invisible dans les zones d'arc électrique. Laisse une marque d'ozone sur ses cibles — odeur caractéristique de foudre.`,
    personnalite: `Idéaliste mais froide dans l'exécution. Voit les agents de la caste sacerdotale corrompus par l'Empire comme des nœuds à neutraliser dans un réseau de contrôle.`,
    lore: `Electra élimine les agents qui servent à la fois la caste sacerdotale d'Heliora et l'Empire féerique — les intermédiaires qui rendent le système de surveillance double possible. Depuis la Chute des Nuages, ces agents sont présentés comme des 'stabilisateurs d'Asterciel'. Electra sait ce qu'ils stabilisent réellement.`,
    combat: `Invisibilité dans les champs électriques ambiants. Frappe mortelle par décharge ciblée — arrêt cardiaque contrôlé. Sans bruit, sans flamme, sans signature traçable.`,
  },
};
