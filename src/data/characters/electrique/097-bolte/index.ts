import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Artillerie'];

export const personnage: Personnage = {
  id: 97,
  nom: 'Bolte',
  element: 'electrique',
  classe: 'Artillerie',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride trapue, canon électromagnétique improvisé vissé à l'épaule, cheveux roussis de façon permanente. Des étincelles crépitent sur sa peau quand elle se concentre.`,
    personnalite: `Directe et brutale dans ses opinions : les infrastructures de contrôle sont des ennemis physiques, pas des abstractions. Elle les traite en conséquence.`,
    lore: `Bolte a cartographié les relais de surveillance de la caste sacerdotale d'Heliora — des tours de lecture de destin qui servent aussi à capter les signatures élémentaires pour le Calendrier. Elle en détruit systématiquement depuis la Chute des Nuages. Chaque destruction est une perte de données pour l'Empire et un gain de liberté pour les Élus des quartiers bas.`,
    combat: `Canon électromagnétique à longue portée — ses tirs traversent la plupart des boucliers. Bombardement de zone qui crée des champs d'arc persistants. Détruit les équipements de surveillance de loin.`,
  },
};
