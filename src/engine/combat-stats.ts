import type { Classe } from '../data/character-types';

export interface ClassStats {
  pv: number;
  pm: number;
  initiative: number;
  baseDamage: number;
  moveRange: number;
}

export const CLASS_STATS: Record<Classe, ClassStats> = {
  'Juggernaut':         { pv: 200, pm: 40,  initiative: 2, baseDamage: 35, moveRange: 3 },
  'Gardien':            { pv: 180, pm: 50,  initiative: 3, baseDamage: 28, moveRange: 2 },
  'Vanguard':           { pv: 160, pm: 55,  initiative: 4, baseDamage: 30, moveRange: 4 },
  'Battlemage':         { pv: 140, pm: 65,  initiative: 5, baseDamage: 32, moveRange: 4 },
  'Escrimeur':          { pv: 140, pm: 60,  initiative: 6, baseDamage: 28, moveRange: 5 },
  'Enchanteur-Soutien': { pv: 100, pm: 90,  initiative: 7, baseDamage: 20, moveRange: 3 },
  'Enchanteur-Capteur': { pv: 100, pm: 85,  initiative: 7, baseDamage: 22, moveRange: 3 },
  'Plongeur':           { pv: 120, pm: 70,  initiative: 8, baseDamage: 30, moveRange: 5 },
  'Assassin':           { pv: 110, pm: 75,  initiative: 9, baseDamage: 36, moveRange: 6 },
  'Mage-Burst':         { pv: 90,  pm: 100, initiative: 8, baseDamage: 38, moveRange: 3 },
  'Tireur':             { pv: 100, pm: 80,  initiative: 6, baseDamage: 28, moveRange: 3 },
  'Artillerie':         { pv: 80,  pm: 110, initiative: 5, baseDamage: 40, moveRange: 3 },
  'Spécialiste':        { pv: 120, pm: 75,  initiative: 6, baseDamage: 26, moveRange: 4 },
};

export const PM_REGEN_PER_TURN = 10;
