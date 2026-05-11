import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Tireur'];

export const personnage: Personnage = {
  id: 218,
  nom: 'Zéphyr',
  element: 'vent',
  classe: 'Tireur',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride fine aux cheveux soulevés en permanence, arbalète chargée de flèches guidées par les courants. Se positionne toujours en hauteur, jamais là où on l'attend.`,
    personnalite: `Mercenaire discret qui travaille pour la précision, pas pour l'idéologie. Ses tarifs sont proportionnels à l'altitude de la cible — ironie délibérée dans Heliora.`,
    lore: `Zéphyr loue ses services dans Asterciel depuis la Chute des Nuages. Ses clients incluent la caste sacerdotale, des factions commerciales de Néris, et occasionnellement les Dissidentes. Elle n'a jamais pris deux contrats contre le même camp consécutivement.`,
    combat: `Tirs guidés par les courants d'air — ses flèches font des courbes impossibles. Repositionnement aérien entre chaque tir. Précision à très longue portée en altitude.`,
  },
};
