import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Plongeur'];

export const personnage: Personnage = {
  id: 214,
  nom: 'Rafale',
  element: 'vent',
  classe: 'Plongeur',
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
    physique: `Aéride fine et agile, équipement minimal, se déplace par bonds de vent. Marques de turbulence sur les bras — traces d'infiltrations dans les zones de surveillance.`,
    personnalite: `Rapide dans l'action et la réflexion. Croit que la vitesse est une forme de justice — être plus rapide que le Calendrier.`,
    lore: `Rafale extrait des Élus Vent de Heliora avant les agents impériaux. Depuis la Chute des Nuages, la caste sacerdotale et l'Empire ont accéléré les enregistrements préventifs — Rafale contre-accélère. Elle connaît chaque courant d'air d'Heliora comme ses propres veines.`,
    combat: `Vitesse maximale par propulsion de vent. Extraction sous couverture de turbulence. Combat de précision aérienne — frappe et disparaît dans les courants.`,
  },
};
