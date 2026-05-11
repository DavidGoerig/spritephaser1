import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Assassin'];

export const personnage: Personnage = {
  id: 129,
  nom: 'Grimpant',
  element: 'plante',
  classe: 'Assassin',
  espece: 'Sylvan',
  region: 'Sylvera',
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
    physique: `Sylvan mince aux doigts capables d'adhérer à toute surface végétale, quasi-invisible dans la canopée de Leth'Var. Laisse une marque de liane nouée sur ses cibles.`,
    personnalite: `Froid et précis. Il voit les agents du Calendrier dans Sylvera comme des invasions d'espèces étrangères dans un écosystème.`,
    lore: `Grimpant élimine les agents qui maintiennent la surveillance féerique dans les zones de Leth'Var. Depuis la Faim des Racines, ces agents sont nombreux — la Citadelle surveille Sylvera de près car c'est là que les archives sur les origines féeriques ont été perdues. La Citadelle craint que des fragments survivent.`,
    combat: `Escalade sur toute surface, invisibilité dans la végétation. Étranglement par liane de précision. Frappe depuis la canopée, retour dans les arbres instantané.`,
  },
};
