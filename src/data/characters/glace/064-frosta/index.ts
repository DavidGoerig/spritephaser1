import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Plongeur'];

export const personnage: Personnage = {
  id: 64,
  nom: 'Frosta',
  element: 'glace',
  classe: 'Plongeur',
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
    physique: `Givrine agile aux marques de gel sur les tempes — signe de contrôle du froid interne extrême. Équipement de survie minimal, conçu pour la vitesse dans les milieux glacés.`,
    personnalite: `Rapide, pragmatique, jamais de sentiment pour les missions d'extraction. La sentimentalité ralentit, et dans la glace, ralentir tue.`,
    lore: `Frosta infiltre les archives d'Iskral pour en extraire des documents que les Fées cherchent à effacer : les origines de l'alliance fée-givrin, les compromis passés entre la monarchie rituelle et la Citadelle, et surtout — ce que le Gel Éternel a réellement figé et pourquoi l'Empire y tient si peu de monde depuis dix ans.`,
    combat: `Vitesse maximale sur glace, gel instantané localisé pour bloquer les poursuivants. Combat d'infiltration en milieu froid — exploite les surfaces gelées comme voies d'accès.`,
  },
};
