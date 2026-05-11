import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Capteur'];

export const personnage: Personnage = {
  id: 92,
  nom: 'Arkyn',
  element: 'electrique',
  classe: 'Capteur',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride élancé en uniforme de la caste sacerdotale d'Heliora, anneaux de cuivre conducteur aux doigts, yeux qui détectent les champs électriques ambiants.`,
    personnalite: `Croit sincèrement que les Élus Electric non-enregistrés représentent un risque : une autre Chute des Nuages est possible si les flux sont mal gérés. Sa vigilance est réelle, pas idéologique.`,
    lore: `Arkyn utilise sa capacité à lire les champs électriques ambiants pour détecter les signatures d'Élus non-enregistrés. Après la Chute des Nuages et la reconstruction par l'Élu Stellar, Heliora a été re-sacralisée — la caste des lecteurs de destin a pris le pouvoir politique. Arkyn opère dans ce nouveau cadre : traquer les Élus Electric qui pourraient déstabiliser les flux reconstruits.`,
    combat: `Filets de courant qui paralysent sans brûler. Localisation par triangulation électromagnétique. Cage électrique portable pour capturer les cibles sans les abîmer.`,
  },
};
