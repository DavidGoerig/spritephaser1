import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Assassin'];

export const personnage: Personnage = {
  id: 219,
  nom: 'Vent-Fantôme',
  element: 'vent',
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
    physique: `Aéride presque invisible en mouvement — son corps se fond dans les courants d'air. Laisse une marque de souffle froid sur les surfaces après son passage.`,
    personnalite: `Silencieux et précis. Il perçoit les agents du Calendrier comme des parasites dans les courants d'air naturels d'Asterciel.`,
    lore: `Vent-Fantôme élimine les agents qui servent à la fois la caste sacerdotale et l'Empire à Heliora. Depuis la Chute des Nuages, ces agents sont présentés comme des 'gardiens de la stabilité aérienne'. Vent-Fantôme sait qu'ils stabilisent surtout le flux d'information vers le Calendrier.`,
    combat: `Invisibilité dans les courants d'air. Frappe mortelle de vent concentré — hémorragie interne par pression. Sans bruit, sans trace physique.`,
  },
};
