import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Battlemage'];

export const personnage: Personnage = {
  id: 216,
  nom: 'Cyclonyx',
  element: 'vent',
  classe: 'Battlemage',
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
    physique: `Aéride grand en armure de la caste militaire haute d'Heliora, sceau du Voile gravé dans l'épaule d'une armure qui intègre les courants de vent dans sa protection.`,
    personnalite: `Militariste convaincu. Pense que le vent sans discipline crée des catastrophes — la Chute des Nuages en est la preuve. L'ordre est protecteur.`,
    lore: `Cyclonyx applique la loi du Calendrier à Heliora et aux routes aériennes d'Asterciel. Il a arrêté plusieurs Élus Vent depuis la Chute des Nuages. Il collabore avec Tempestine pour couvrir les routes entre Heliora et Néris.`,
    combat: `Mêlée aérienne, armure activée par les courants de vent. Bourrasques de combat qui créent l'instabilité chez l'adversaire. Utilise l'architecture de Heliora — ses couloirs de vent — comme extension de son champ.`,
  },
};
