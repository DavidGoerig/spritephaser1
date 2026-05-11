import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 242,
  nom: `Khossaëre`,
  element: 'dragon',
  classe: 'Enchanteur-Capteur',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',
  description: {
    physique: `Écailles d'un vert-acier sombre qui réfléchissent la lumière comme du métal poli — un Dragon Élu qui a accepté les modifications de liaison impériales, ce qui a légèrement altré la coloration naturelle de sa mutation. Sa pupille verticale est encadrée par un dispositif optique impérial qui lit les signatures élémentaires. Il porte le sceau de la Citadelle gravé dans l'écaille sur sa gorge.`,
    personnalite: `Croit que seule la Citadelle a les ressources pour étudier et contenir les anomalies Dragon de manière sûre. Voit son travail comme une protection autant qu'un contrôle — les Élus Dragon laissés libres sont vulnérables à la Convergence, qui cherche activement à les drainer. Autres Élus Dragon le considèrent comme une trahison absolue.`,
    lore: `Unique Capteur impérial qui est lui-même un Élu Dragon — ce qui lui donne un avantage considérable pour suivre les autres anomalies pré-calendrier. La Citadelle du Voile a investi massivement dans sa formation parce qu'il peut lire les sites draconiques de Varkhôl d'une façon qu'aucun Capteur humain ne peut reproduire. Il est conscient d'être utilisé comme outil et choisit de l'être, estimant que c'est le prix de la sécurité collective.`,
    combat: `Marquage Draconique (révèle la position des Élus Dragon cachés dans la zone), Filet d'Écailles (capture à distance, immobilise temporairement), Extraction Ancestrale (lit la signature élémentaire complète d'un Dragon Élu, debuffant ses capacités). Passif Instinct du Prédateur Dragon : révèle automatiquement les Élus Dragon furtifs dans un rayon étendu.`,
  },
  stats: ELEMENT_KITS['dragon']['Enchanteur-Capteur'],
  modificateurs: [],
};

export default character;
