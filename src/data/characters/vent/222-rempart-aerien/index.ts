import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Gardien'];

export const personnage: Personnage = {
  id: 222,
  nom: 'Rempart Aérien',
  element: 'vent',
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
    physique: `Aéride massif qui génère un mur de vent stable à sa périphérie. Sa présence calme les turbulences locales — effet paradoxal pour quelqu'un de cette taille.`,
    personnalite: `Protecteur sans mandat. Il a décidé de ce qu'il défendait et ne l'explique pas.`,
    lore: `Rempart Aérien garde les routes d'accès aux quartiers de reconstruction après la Chute des Nuages. Il n'appartient à aucune faction et en a refusé trois. Les habitants des quartiers bas le respectent. L'Empire le tolère car il maintient un ordre local que les agents impériaux ne peuvent pas assurer seuls.`,
    combat: `Mur de vent stable qui bloque tout projectile et toute charge. Contre-attaque de rafale proportionnelle. Sa résistance est quasi-totale dans son zone d'ancrage.`,
  },
};
