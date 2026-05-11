import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Soutien'];

export const personnage: Personnage = {
  id: 91,
  nom: 'Volta',
  element: 'electrique',
  classe: 'Soutien',
  espece: 'Aéride',
  region: 'Asterciel',
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
    physique: `Aéride de taille moyenne, peau légèrement phosphorescente sous l'effet de ses propres décharges. Cheveux dressés en permanence par le champ électrique interne. Yeux bleu électrique.`,
    personnalite: `Soigneuse qui refuse que ses soins servent à remettre en état des soldats impériaux envoyés réprimer les Aérides des quartiers bas d'Heliora. Sa limite est claire et elle la tient.`,
    lore: `Volta soignait dans les quartiers inférieurs d'Heliora — l'altitude basse qui correspond au rang bas dans l'aristocratie verticale d'Asterciel. Depuis la Chute des Nuages, où plusieurs quartiers ont décroché et que seul un Élu Stellar rare a pu sauver, les inégalités de reconstruction ont été criantes. L'Empire a priorisé les quartiers hauts. Volta soigne les quartiers bas, hors-registre.`,
    combat: `Décharges de soin ciblées qui stabilisent sans laisser de signature traçable. Boucliers ionisés qui absorbent les attaques électriques adverses. Si poussée à l'offensive, des arcs électriques de défense.`,
  },
};
