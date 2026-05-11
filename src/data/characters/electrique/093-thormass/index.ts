import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Juggernaut'];

export const personnage: Personnage = {
  id: 93,
  nom: 'Thormass',
  element: 'electrique',
  classe: 'Juggernaut',
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
    physique: `Aéride colossal, musculature surdéveloppée traversée de cicatrices de Drain électrique — lignes bleues brûlées dans la peau. Ses mains font disjoncter les équipements électroniques au contact.`,
    personnalite: `Pense que sa capacité à encaisser des Drains à répétition fait de lui un actif collectif, pas un individu. La douleur des Drains, dit-il, est la sensation d'être utile.`,
    lore: `Thormass est devenu le Juggernaut de référence de la Convergence à Asterciel après avoir survécu à un Drain de signature électrique qui aurait tué trois Aérides ordinaires. Son énergie partiellement extraite alimente des infrastructures à Ash'Rael. La caste sacerdotale d'Heliora le considère comme un hérétique qui donne la légitimité céleste à des étrangers.`,
    combat: `Résistance aux décharges électriques par accoutumance — absorbe et retourne partiellement. Charge dévastatrice qui libère une surcharge électrique de contact. Ses frappes court-circuitent les équipements adverses.`,
  },
};
