import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['vent']['Artillerie'];

export const personnage: Personnage = {
  id: 217,
  nom: 'Ouragan',
  element: 'vent',
  classe: 'Artillerie',
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
    physique: `Aéride massif, canon à vent improvisé sur l'épaule, permanentement entouré d'une mini-tornade qui soulève tout ce qui l'approche.`,
    personnalite: `Bruyant et enthousiaste. Pense que les structures de surveillance peuvent être littéralement soufflées si on y met assez de vent.`,
    lore: `Ouragan cible les tours de surveillance de la caste sacerdotale d'Heliora — les mêmes structures qui servent à lire les destins et à alimenter le Calendrier. Chaque tour détruite prive l'Empire d'une antenne de prédiction. Il en a abattu sept depuis la Chute des Nuages.`,
    combat: `Canon à vent à longue portée — ses rafales traversent les fortifications légères. Tempête de débris dans une zone. Destruction d'infrastructures par pression d'air concentrée.`,
  },
};
