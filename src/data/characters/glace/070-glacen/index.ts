import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Escrimeur'];

export const personnage: Personnage = {
  id: 70,
  nom: 'Glacen',
  element: 'glace',
  classe: 'Escrimeur',
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
    physique: `Givrin élégant, lame de glace impériale forgée à Heliora. Mouvements de duel ritualisé, économiques et mortels.`,
    personnalite: `Formaliste. Représente le Voile à Iskral dans ses aspects les plus civilisés — le duel comme résolution de conflit, la force comme argument de dernier recours.`,
    lore: `Glacen gère les duels de juridiction entre la monarchie rituelle d'Iskral et les représentants féeriques — conflits sur l'accès aux archives, la propriété des Élus non-enregistrés, les droits de surveillance. Il a gagné 31 duels consécutifs. L'Empire le tient précieux. La monarchie le surveille et l'admire à contrecœur.`,
    combat: `Escrime de glace cristalline à vitesse extrême. Parades et contreparades élaborées qui exploitent l'inertie adverse. Sa lame peut briser la concentration d'un Élu en un seul échange bien placé.`,
  },
};
