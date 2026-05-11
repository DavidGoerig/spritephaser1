import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Juggernaut'];

export const personnage: Personnage = {
  id: 363,
  nom: 'Auroch-Givré',
  element: 'fee',
  classe: 'Juggernaut',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin massif, aura féerique partiellement extraite — la lumière autour de lui est fragmentée, par morceaux manquants. Corps durci par les Drains.`,
    personnalite: `Croit que l'énergie féerique est la plus précieuse et donc la plus nécessaire à redistribuer. Sa conviction est proportionnelle à ce qu'il a sacrifié.`,
    lore: `Auroch-Givré a subi un Drain partiel de signature féerique — un rituel que même la Convergence hésite à répéter car l'élément Fée est instable à l'extraction. Il a survécu. Son énergie partiellement extraite alimente la doctrine de la Convergence comme preuve que même l'élément impérial peut être redistributif.`,
    combat: `Résistance aux dégâts féeriques. Charge qui libère de l'énergie féerique instable en zone. Sa présence perturbe les auras des autres Élus Fée proches.`,
  },
};
