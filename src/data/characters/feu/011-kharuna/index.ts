import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 11,
  nom: `Kharak`,
  element: 'feu',
  classe: 'Vanguard',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Convergence',
  description: {
    physique: `Dépôts calcifiés en plaques sur le dos et les épaules. Brulüures sur la gauche de son visage — absorbées délibérément lors d'une bataille pour protéger une unité en retraite. La marque de la Convergence est appliquée rituellement dans sa chair — pas une simple marque, un acte de foi.`,
    personnalite: `Conviction absolue dans la Convergence. Pas fanatique — lucide. Croit que les Élus accumulent de la puissance que le monde a besoin, et que la garder pour soi est égoïste. Ne se sacrifie pas par désespoir mais par logique de restitution.`,
    lore: `Né dans un village désertique qui n'avait jamais reçu d'Élu de la Citadelle jusqu'à ce qu'un accord avec la Convergence — et non avec les Fées — leur apporte leur premier Élu Ground en quarante ans. Kharak a vu la différence entre recevoir un Élu parce qu'une puissance centrale le décide et en avoir un parce qu'on a accepté un contrat de restitution. Il a choisi le contrat comme modèle de société.`,
    combat: `Mur de Lave (barrière brulante temporaire), Avancée Incandescente (poussée frontale forçant les ennemis en positions défavorables), Percée du Noyau (explosion frontale dégeant des passages à travers les formations défensives).`,
  },
  stats: ELEMENT_KITS['feu']['Vanguard'],
  modificateurs: [],
};

export default character;
