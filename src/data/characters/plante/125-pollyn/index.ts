import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['plante']['Mage-Burst'];

export const personnage: Personnage = {
  id: 125,
  nom: 'Pollyn',
  element: 'plante',
  classe: 'Mage-Burst',
  espece: 'Sylvane',
  region: 'Sylvera',
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
    physique: `Sylvane dont la peau émet du pollen lumineux en permanence, yeux verts intenses, nuage de spores visibles à plusieurs mètres.`,
    personnalite: `Fascinée par les systèmes biologiques comme mécanismes complexes. Les factions lui semblent des sous-systèmes dans une écologie plus grande.`,
    lore: `Pollyn a reproduit en laboratoire sauvage certaines conditions de la Faim des Racines — elle comprend comment le réseau racinaire a pu développer une conscience et pourquoi il a dévoré son substrat. Elle cherche à éviter une deuxième Faim. Aucune faction ne peut la recruter car sa recherche les concerne toutes également.`,
    combat: `Explosion pollinique en zone large — spores hallucinogènes, toxiques ou paralysants selon la souche. Puissance brute biologique sans plafond mesuré.`,
  },
};
