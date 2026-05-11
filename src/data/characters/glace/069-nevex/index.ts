import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Assassin'];

export const personnage: Personnage = {
  id: 69,
  nom: 'Nevex',
  element: 'glace',
  classe: 'Assassin',
  espece: 'Givrin',
  region: 'Crysalme',
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
    physique: `Givrin à la peau translucide, quasi-invisible dans les milieux enneigés. Laisse toujours une fleur de gel cristallisée sur ses cibles après l'élimination.`,
    personnalite: `Idéaliste malgré lui. Il voit les agents de la Citadelle qui fouillent les archives d'Iskral comme une violation de la stase qu'il respecte — ce n'est pas de la politique, c'est du sacrilège.`,
    lore: `Nevex ne travaille pas pour les Dissidentes au sens doctrinal. Il travaille pour la monarchie rituelle d'Iskral, qui protège les archives. Les Dissidentes et la monarchie partagent le même ennemi : les agents féeriques qui confisquent la mémoire. Cette convergence d'intérêts suffit à Nevex.`,
    combat: `Invisibilité totale en milieu glacé. Frappe silencieuse depuis l'angle mort. Gel instantané localisé sur la cible — mort propre, sans signal élémentaire détectable.`,
  },
};
