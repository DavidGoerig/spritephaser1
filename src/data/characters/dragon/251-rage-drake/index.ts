import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 251,
  nom: `Kharrath`,
  element: 'dragon',
  classe: 'Vanguard',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Convergence',
  description: {
    physique: `Écailles massives et partiellement creusées — chaque extraction rituelle de la Convergence a laissé une marque visible. Ses écailles ont des fr actures aux jointures. Sa stature est impressionnante mais ses mouvements ont un léger tremblement que ceux qui le connaissent reconnaissent comme le coût cumulé des extractions. Il ne le mentionne pas.`,
    personnalite: `Volontaire pour les extractions depuis le début. Croit que la puissance d'un Dragon Élu est une dette cosmique. Marge doctrine de la Convergence avec une profondeur religieuse que même les ritualistes trouvent parfois déstabilisante — il croit plus profondément en leurs textes qu'eux.`,
    lore: `La Convergence le présente comme leur argument le plus puissant : un Dragon Élu qui choisit librement la restitution. Douze extractions, toujours en vie, toujours fonctionnel. Ce qu'ils ne présentent pas, c'est qu'il n'a pas demandé de médecin lors des trois dernières. Pour la Convergence, il est un investissement. Pour lui, il est la preuve vivante que leur théologie est viable.`,
    combat: `Front Draconique (charge avant qui crée une zone de pression élémentaire), Aura de Restitution (aura qui convertit les dégâts reçus en énergie de zone pour les alliés), Sacrifice Contrôlé (se vide de son énergie draconique pour un burst massif sur toute la ligne). Passif Vase du Flux : absorbe les dégâts subis par les alliés adjacents.`,
  },
  stats: ELEMENT_KITS['dragon']['Vanguard'],
  modificateurs: [],
};

export default character;
