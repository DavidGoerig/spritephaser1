import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Soutien'];

export const personnage: Personnage = {
  id: 61,
  nom: 'Crystyne',
  element: 'glace',
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
    physique: `Givrine petite et fine, mains qui luisent d'un blanc bleuté quand elle canalise le gel cicatrisant. Yeux argentés, peau légèrement translucide aux poignets.`,
    personnalite: `Pragmatique et résolue. Elle a soigné sans discrimination jusqu'au jour où l'Empire a commencé à enregistrer ses patients pour le Calendrier. Elle a tiré sa conclusion sans état d'âme.`,
    lore: `Crystyne soignait les blessés du champ du Gel Éternel à l'extérieur d'Iskral — ce champ de bataille figé par un Élu Ice ancestral, argument politique permanent de la monarchie rituelle. L'Empire a envoyé des agents recenser ses patients. Elle a rejoint les Dissidentes du Voile le lendemain. Elle soigne maintenant les Élus hors-Calendrier dans les marges de Crysalme.`,
    combat: `Gel cicatrisant qui régénère sans laisser de trace de signature élémentaire — invisible aux traqueurs impériaux. Barricades de glace protectrices. Ralentissement des agresseurs par gel des articulations.`,
  },
};
