import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Mage-Burst'];

export const personnage: Personnage = {
  id: 365,
  nom: 'Théophane',
  element: 'fee',
  classe: 'Mage-Burst',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',
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
    physique: `Givrin dont l'aura féerique est devenue trop puissante pour être contenue — il irradie constamment. Les appareils de mesure du Calendrier grillent à sa proximité.`,
    personnalite: `Fasciné par la nature de l'élément Fée lui-même — pourquoi l'Empire le valorise-t-il autant ? Cherche la réponse dans sa propre puissance.`,
    lore: `Théophane a atteint un niveau de puissance féerique que la Citadelle ne peut plus cataloguer dans ses tables standard du Calendrier. L'Empire veut le capturer mais craint sa puissance non-contrôlée. Les Dissidentes ont essayé de le recruter — il a décliné poliment et continué ses recherches.`,
    combat: `Décharge féerique en zone large — transforme temporairement le terrain en zone magique pure. Puissance brute sans plafond mesuré. Dangereux pour les alliés proches également.`,
  },
};
