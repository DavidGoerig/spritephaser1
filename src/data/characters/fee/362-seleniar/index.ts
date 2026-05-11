import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['fee']['Capteur'];

export const personnage: Personnage = {
  id: 362,
  nom: 'Séléniar',
  element: 'fee',
  classe: 'Capteur',
  espece: 'Givrine',
  region: 'Crysalme',
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
    physique: `Givrine en tenue féerique officielle de la Citadelle, aura de détection permanente, yeux qui luisent d'or quand elle trace une signature.`,
    personnalite: `Agent de la Citadelle sincèrement convaincue que les Élus Fée non-enregistrés risquent d'être exploités par la Convergence ou perdus. La Citadelle les protège.`,
    lore: `Séléniar est l'une des rares Givrines qui a volontairement rejoint la Citadelle. Elle traque les Élus Fée nés à Crysalme et Sylvera hors du Calendrier. Elle opère en tension avec la monarchie rituelle d'Iskral — qui veut protéger ses propres Élus mais pas forcément les livrer à la Citadelle.`,
    combat: `Détection des signatures féeriques à grande distance. Filets de lumière qui paralysent. Capture douce — elle préfère ne pas endommager ce qu'elle livre.`,
  },
};
