import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Capteur'];

export const personnage: Personnage = {
  id: 212,
  nom: 'Tempestine',
  element: 'vent',
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
    physique: `Aéride élancée en tenue de la caste sacerdotale haute d'Heliora, voile de soie qui ondule à contre-sens du vent ambiant — signe d'un champ de détection actif.`,
    personnalite: `Convaincue que les Élus Vent non-enregistrés sont une menace structurelle — l'Élu Flying assassiné qui avait causé le Silence des Vents à Thalassyr en est la preuve. Elle prévient.`,
    lore: `Tempestine traque les Élus Vent qui ont quitté le registre du Calendrier depuis la Chute des Nuages. Elle opère à la fois à Heliora et parfois dans les couloirs commerciaux de Néris, car les flux de vent et les flux d'information se recoupent. Son réseau couvre les deux régions.`,
    combat: `Détection par lecture des courants d'air perturbés par les signatures élémentaires. Filets de vent paralysants. Extraction rapide par capsule aérienne.`,
  },
};
