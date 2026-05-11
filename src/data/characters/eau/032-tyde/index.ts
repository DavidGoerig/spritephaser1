import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['eau']['Capteur'];

export const personnage: Personnage = {
  id: 32,
  nom: 'Tyde',
  element: 'eau',
  classe: 'Capteur',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Empire',
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
    physique: `Néréide élancée en tenue de soie maritime impériale, perle-traqueur vissée à l'oreille droite qui vibre à proximité des signatures élémentaires. Regard froid comme les grands fonds.`,
    personnalite: `Sincèrement convaincue que le Voile d'Équité protège les Élus d'une exploitation pire. Elle traite ses cibles avec courtoisie avant de les livrer à la Citadelle. Ce n'est pas du cynisme — c'est de la foi.`,
    lore: `Tyde utilise la mémoire des courants de Thalassyr — les chants-courants néréides et les perles-mémoire échangées entre familles — pour retracer les Élus nés hors-Calendrier. Depuis le Silence des Vents, elle sait que les flux d'information ont été manipulés. Sa conclusion : sans l'Empire pour maintenir l'ordre, la manipulation serait pire.`,
    combat: `Filets d'eau qui paralysent les cibles sans les blesser. Sonar de localisation élémentaire sur un rayon de cent mètres. Extraction rapide par capsule liquide pressurisée.`,
  },
};
