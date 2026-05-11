import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['glace']['Spécialiste'];

export const personnage: Personnage = {
  id: 73,
  nom: 'La Tempête Blanche',
  element: 'glace',
  classe: 'Spécialiste',
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
    physique: `Givrine dont les cheveux sont un blizzard perpétuel en miniature. Son corps est partiellement éthéré par un froid extrême — elle laisse une traînée de givre là où elle passe.`,
    personnalite: `Phénomène météorologique autant qu'être vivant. Incompréhensible pour les factions. Les cycles du temps la concernent davantage que les doctrines des vivants.`,
    lore: `La Tempête Blanche s'est formée lors d'un hiver exceptionnel consécutif au Gel Éternel — certains à Iskral pensent qu'elle est une émanation vivante du champ lui-même, une conscience née de la collision entre la puissance de l'Élu ancestral et le temps. L'Empire ne peut pas l'enregistrer dans le Calendrier : sa signature ne correspond à aucun profil standardisé.`,
    combat: `Manipulation météorologique à grande échelle — blizzards, tempêtes de neige, vents de glace. État de tempête persistant dans sa zone d'action. Ses pouvoirs n'ont pas de plafond mesurable.`,
  },
};
