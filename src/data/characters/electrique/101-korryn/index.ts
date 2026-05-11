import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Vanguard'];

export const personnage: Personnage = {
  id: 101,
  nom: 'Korryn',
  element: 'electrique',
  classe: 'Vanguard',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Convergence',
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
    physique: `Aéride aux yeux brûlés par plusieurs Drains partiels. Armure de la Convergence chargée d'accumulateurs de signature électrique. Mouvements mécaniques, calibrés.`,
    personnalite: `Évangéliste de la redistribution dans un milieu où l'aristocratie verticale d'Asterciel est l'argument de légitimité. Son contre-argument : la hauteur ne justifie pas l'accumulation.`,
    lore: `Korryn opère dans les quartiers bas d'Heliora, recrutant des Aérides résidus de la Chute des Nuages — ceux dont les quartiers n'ont pas été reconstruits. Il leur propose la doctrine de la Convergence comme alternative à l'attente d'une aide impériale qui ne vient pas. Ses résultats sont mitigés mais réels.`,
    combat: `Avant-garde doctrinale, absorbe les décharges électriques adverses pour les redistribuer à ses alliés. Sa présence frontale crée un champ de redistribution d'énergie qui renforce toute la formation.`,
  },
};
