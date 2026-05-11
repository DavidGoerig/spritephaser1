import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Battlemage'];

export const personnage: Personnage = {
  id: 96,
  nom: 'Elexyn',
  element: 'electrique',
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
    physique: `Aéride en armure conductrice impériale, anneaux supraconducteurs aux poignets, sceau du Voile d'Équité incrusté en platine sur le casque.`,
    personnalite: `Discipline militaire pure. Pense que la caste sacerdotale d'Heliora et l'Empire sont des alliés naturels — tous deux croient en l'ordre hiérarchique. La légitimité céleste et le Calendrier se renforcent.`,
    lore: `Elexyn applique la loi du Calendrier à Asterciel, opérant dans la tension entre la caste sacerdotale d'Heliora et l'Empire féerique. Les deux veulent contrôler les Élus Electric — pour des raisons différentes. Elexyn navigue entre les deux, loyal à l'Empire mais respectueux de la hiérarchie verticale d'Asterciel.`,
    combat: `Combat de mêlée électrique, boucliers de champ magnétique actifs. Frappe combinée électrique-physique qui court-circuite les défenses élémentaires. Utilise l'architecture conductrice d'Heliora comme extension de son champ.`,
  },
};
