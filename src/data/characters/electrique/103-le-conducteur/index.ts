import { ELEMENT_KITS } from '../../../character-kits';
import { Personnage } from '../../../types';

const modifs = ELEMENT_KITS['electrique']['Spécialiste'];

export const personnage: Personnage = {
  id: 103,
  nom: 'Le Conducteur',
  element: 'electrique',
  classe: 'Spécialiste',
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
    physique: `Aéride dont la forme est instable — les champs électriques extrêmes qu'il génère déforment légèrement sa silhouette. Ses cheveux sont devenus de la lumière.`,
    personnalite: `Entité de connexion. Pense en réseaux, pas en individus. Les doctrines lui semblent des courts-circuits dans des systèmes plus larges.`,
    lore: `Le Conducteur est né dans le sillage immédiat de la Chute des Nuages — peut-être une conséquence directe de la surcharge électrique qui a causé l'événement, peut-être une réponse du monde à un besoin de reconstruction. Il comprend le réseau électrique d'Heliora comme un organisme vivant dont il est une partie. L'Empire ne peut l'enregistrer dans le Calendrier : sa naissance n'a pas de date.`,
    combat: `Connexion et déconnexion de tous les réseaux électriques dans une large zone. Redirection des courants adverses. Surcharge de systèmes entiers. Sa puissance dépend de la densité électrique du terrain.`,
  },
};
