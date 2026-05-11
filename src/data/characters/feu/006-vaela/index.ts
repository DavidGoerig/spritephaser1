import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 6,
  nom: `Vaelith`,
  element: 'feu',
  classe: 'Battlemage',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Armure en alliage volcanique ajusté à sa forme, gravée de la liturgie du Feu de l'Empire. Cheveux auburn courts, mâchoire précise, port militairement parfait. Son gantelet droit contient un cristal de focalisation intégré par la forge de la Citadelle, amplifiant la puissance à portée de mélée. Ses cicatrices sont toutes sur le bras gauche — parades, jamais coups reçus.`,
    personnalite: `Croit au Voile d'Équité sans ironie — a vu des villages entiers survivre à des famines grâce aux Élus Water envoyés par la Citadelle. C'est pour ça qu'elle combat. Précise, composée, incapable de désobéir à un ordre — mais réfléchit profondément à comment l'exécuter.`,
    lore: `Première de sa promotion à l'Académie Battlemage de Khar-Vurn, sélectionnée pour la garde impériale avant de demander du terrain. Elle a travaillé sur la Forge Silencieuse — le quartier figé de Khar-Vurn après la Rupture Thermique — pour y traquer des Dissidentes utilisant les tunnels thermiques sous le désastre pétrifié. Les Dissidentes qui ont survécu disent qu'elle a montré de la clémence. Elle dénie.`,
    combat: `Lame de Feu (frappe de mélée amplifiée thermiquement), Tempête d'Acier-Flamme (dash-slash hybride), Détonation Liée (explosion qui monte en puissance avec la chaleur absorbée). Passif Synergie Lame-Flamme : bonus de dégâts en alternant attaques physiques et sorts de feu.`,
  },
  stats: ELEMENT_KITS['feu']['Battlemage'],
  modificateurs: [],
};

export default character;
