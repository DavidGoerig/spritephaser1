import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Tireur'];

export const personnage: Personnage = {
  id: 68,
  nom: 'Shiryn',
  element: 'glace',
  classe: 'Tireur',
  espece: 'Givrine',
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
    physique: `Givrine élancée aux reflets irisés bleus, arbalète chargée de cristaux de glace forgés sur place. Toujours positionnée à distance, rarement visible.`,
    personnalite: `Solitaire, précise. Les Élus Glace aux abords du Gel Éternel la comprennent sans mots — elle leur parle peu et n'en a pas besoin.`,
    lore: `Shiryn chasse les anomalies élémentaires nées du champ du Gel Éternel — des entités partiellement figées qui se réveillent parfois et menacent les routes d'Iskral. Elle ne prend pas de mission politique et refuse les trois factions. Elle protège les abords de Crysalme parce que c'est nécessaire, pas par loyauté.`,
    combat: `Tirs de cristaux de glace à précision extrême, même dans un blizzard. Création de pièges glacés à distance. Ralentissement ciblé sans mise hors de combat — elle choisit ses cibles avec chirurgie.`,
  },
};
