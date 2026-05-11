import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Escrimeur'];

export const personnage: Personnage = {
  id: 100,
  nom: 'Chayn',
  element: 'electrique',
  classe: 'Escrimeur',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride élégant en tenue de duel de la caste haute d'Heliora, lame électromagnétique forgée en altitude, mouvements qui combinent tradition du duel asterciel et discipline impériale.`,
    personnalite: `Représente le Voile à Heliora avec une grâce qui masque la dureté de sa fonction. Croit que la force légitime est celle qui respecte les formes.`,
    lore: `Chayn est le duelliste officiel de l'Empire à Heliora — il règle les contentieux entre la caste sacerdotale et les représentants féeriques par duel codifié. Depuis la Chute des Nuages et la re-sacralisation d'Asterciel, ces contentieux sont fréquents et politiquement chargés. Sa réputation de victoire est sa valeur politique.`,
    combat: `Escrime électromagnétique à grande vitesse. Sa lame peut court-circuiter les protections élémentaires d'un seul échange bien placé. L'altitude d'Heliora amplifie ses capacités.`,
  },
};
