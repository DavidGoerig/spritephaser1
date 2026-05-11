import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Soutien'];

export const personnage: Personnage = {
  id: 361,
  nom: 'Lumielle',
  element: 'fee',
  classe: 'Soutien',
  espece: 'Givrine',
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
    physique: `Givrine de petite taille à l'aura féerique permanente — un halo ténu de lumière colorée qui change selon son état émotionnel. Yeux violets, peau argentée.`,
    personnalite: `Soigneuse qui a compris très tôt que son élément était convoité par la Citadelle précisément. Elle refuse d'être un outil d'Empire, même un outil de soin.`,
    lore: `Lumielle est née à Iskral avec une signature féerique — une rareté dans une ville de glace. La Citadelle s'y est immédiatement intéressée, car la Fée est l'élément central de l'Empire. Les Dissidentes l'ont protégée avant que les agents arrivent. Elle soigne les Élus hors-Calendrier dans les marges de Crysalme, loin des archives d'Iskral que les Fées voudraient effacer.`,
    combat: `Soins par canalisation féerique — régénération accélérée, purge des états négatifs. Boucliers de lumière qui repoussent les attaques élémentaires. Sa présence stabilise les Élus paniqués.`,
  },
};
