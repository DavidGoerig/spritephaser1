import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Mage-Burst'];

export const personnage: Personnage = {
  id: 95,
  nom: 'Fulgur',
  element: 'electrique',
  classe: 'Mage-Burst',
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
    physique: `Aéride dont la peau émet des éclairs en continu au repos. Ses yeux sont devenus blancs de surcharge chronique. Autour de lui, les équipements électroniques surchauffent.`,
    personnalite: `Cherche à comprendre les limites de la puissance électrique — pas comme arme, comme phénomène. Désintéressé des conflits de faction. Fasciné par la Chute des Nuages comme événement physique.`,
    lore: `Fulgur a reproduit en laboratoire privé les conditions de la Chute des Nuages — la surcharge électrique qui a fait décrocher les quartiers d'Heliora. Il a compris le mécanisme avant la caste sacerdotale. Ni l'Empire ni les Dissidentes n'ont pu le recruter : sa puissance est trop instable pour être utilisée de façon prévisible.`,
    combat: `Décharge totale en zone — dangereuse pour les alliés autant que les ennemis. Supernova électrique centrée sur lui. Puissance brute sans contrôle tactique apparent, mais d'une densité que rien n'arrête.`,
  },
};
