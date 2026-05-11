import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Assassin'];

export const personnage: Personnage = {
  id: 369,
  nom: 'Lumicide',
  element: 'fee',
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
    physique: `Givrin à l'aura féerique inversée — absorbe la lumière plutôt que de l'émettre. Quasi-invisible dans un environnement lumineux.`,
    personnalite: `Paradoxal dans sa nature d'Élu Fée qui combat l'Empire féerique. Il voit cette ironie comme sa raison d'être.`,
    lore: `Lumicide élimine les agents de la Citadelle opérant à Iskral — ceux qui cherchent à accéder aux archives que la monarchie rituelle garde. Il est un Élu Fée qui retourne l'élément de l'Empire contre l'Empire. La Citadelle le classe comme prioritaire à capturer.`,
    combat: `Absorption de lumière féerique adverse — ses cibles se retrouvent dans le noir absolu. Frappe mortelle dans l'obscurité qu'il crée. Sans trace lumineuse.`,
  },
};
