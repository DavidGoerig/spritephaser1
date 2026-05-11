import type { ElementLore, EspeceLore, RegionLore, FactionLore } from './lore';
import type { ElementKit } from './character-kits';

export type Classe =
  | 'Enchanteur-Soutien'
  | 'Enchanteur-Capteur'
  | 'Juggernaut'
  | 'Plongeur'
  | 'Mage-Burst'
  | 'Battlemage'
  | 'Artillerie'
  | 'Tireur'
  | 'Assassin'
  | 'Escrimeur'
  | 'Vanguard'
  | 'Gardien'
  | 'Spécialiste';

export const CLASSE_DESCRIPTIONS: Record<Classe, string> = {
  'Enchanteur-Soutien':  "Amplifient l'efficacité des alliés en les augmentant directement et en les défendant contre les menaces.",
  'Enchanteur-Capteur':  "Spécialisés dans le verrouillage des adversaires, créant des zones de menace intense ou immobilisant le champ de bataille entier.",
  'Juggernaut':          "Les seuls capables d'infliger ET d'encaisser d'importants dégâts, mais limités par leur faible mobilité et leur portée.",
  'Plongeur':            "Excellents pour cibler les priorités et foncer vers elles, forçant leurs cibles à gérer leur présence immédiate.",
  'Mage-Burst':          "Ciblent les vulnérables en les verrouillant et en enchaînant avec une rafale dévastatrice à distance.",
  'Battlemage':          "Se jettent dans la mêlée pour dévaster les équipes ennemies avec des dégâts soutenus en zone.",
  'Artillerie':          "Maîtres de la portée, grignotent les adversaires à distance extrême. Très fragiles au corps à corps.",
  'Tireur':              "Dégâts continus basiques à distance. Capables d'abattre même les cibles les plus résistantes si bien positionnés.",
  'Assassin':            "Infiltration de lignes ennemies et élimination rapide des priorités. Mobiles mais exposés.",
  'Escrimeur':           "Dégâts soutenus en mêlée, outils défensifs puissants pour survivre dans la mêlée. Pas de burst mais indestructibles dans le temps.",
  'Vanguard':            "Tanks offensifs. Déclenchent les fights en isolant et en capturant les ennemis, permettant aux alliés de suivre.",
  'Gardien':             "Tanks défensifs. Tiennent la ligne, verrouillent les approchants et maintiennent les alliés hors de danger.",
  'Spécialiste':         "Autres — hybrides, utilitaires ou catégories uniques qui ne correspondent pas aux archétypes standard.",
};

export interface Personnage {
  id: number;
  nom: string;
  element: ElementLore;
  element2?: ElementLore;
  classe: Classe;
  espece: EspeceLore;
  region: RegionLore;
  faction: FactionLore;
  description_physique: string;
  description_personnalite: string;
  position_lore: string;
  style_combat: string;
  kit: ElementKit;
  modifications_classe: string;
  assets?: CharacterAssets;
}

export interface CharacterAssets {
  portrait?: string;
  idle?: string;
  run?: string;
  swim?: string;
  fly?: string;
  attack?: string[];
  hurt?: string;
  die?: string;
  model_glb?: string;
}

export const ANIMATION_SLOTS = [
  'idle',
  'run',
  'swim',
  'fly',
  'attack-01', 'attack-02', 'attack-03', 'attack-04', 'attack-05',
  'attack-06', 'attack-07', 'attack-08', 'attack-09', 'attack-10',
  'hurt',
  'die',
  'portrait',
] as const;

export type AnimationSlot = typeof ANIMATION_SLOTS[number];
