import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Capteur'];

export const personnage: Personnage = {
  id: 62,
  nom: 'Verglass',
  element: 'glace',
  classe: 'Capteur',
  espece: 'Givrin',
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
    physique: `Givrin grand et mince en armure de glace impériale, yeux de cristal parfaitement transparents — on ne sait jamais exactement ce qu'il regarde. Présence froide et précise.`,
    personnalite: `Loyal, froid au sens propre et figuré. Pense que la stase d'Iskral est naturellement compatible avec l'ordre féerique : les deux conservent.`,
    lore: `Verglass exploite les reflets du champ du Gel Éternel comme un miroir de détection — les surfaces gelées du champ reflètent les signatures élémentaires à distance, lui permettant d'identifier des Élus non-enregistrés sans les approcher. Il en a identifié huit cette saison, tous livrés à la Citadelle. La monarchie rituelle d'Iskral proteste discrètement.`,
    combat: `Miroirs de glace qui révèlent les signatures cachées et dévient les attaques. Capture par congélation progressive — lente mais totale. Localisation élémentaire à distance.`,
  },
};
