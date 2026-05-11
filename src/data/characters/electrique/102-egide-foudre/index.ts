import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Gardien'];

export const personnage: Personnage = {
  id: 102,
  nom: 'Egide-Foudre',
  element: 'electrique',
  classe: 'Gardien',
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
    physique: `Aéride colossal, armure composite de matériaux conducteurs et isolants en alternance. Génère un champ électrique stable à deux mètres de lui — les projectiles dévient.`,
    personnalite: `Protège ce qu'il a décidé de protéger, sans mandat ni doctrine. Sa décision est claire et il n'en change pas.`,
    lore: `Egide-Foudre garde les entrées des quartiers bas d'Heliora depuis la Chute des Nuages — zone de reconstruction lente, régulièrement visitée par des agents de toutes factions. Il ne travaille pour personne. Il a décidé que ces quartiers méritaient une protection. Les trois factions ont toutes essayé de le retourner. Il leur a répondu non.`,
    combat: `Bouclier électromagnétique actif qui dévie projectiles et décharges. Contre-attaque électrique proportionnelle aux attaques reçues. Sa défense est presque impénétrable dans un rayon de deux mètres.`,
  },
};
