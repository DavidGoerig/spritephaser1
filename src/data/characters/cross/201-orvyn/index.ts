import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 201,
  nom: `Orvyn`,
  element: 'Electrique',
  element2: 'Eau',
  classe: 'Battlemage',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',
  description_physique: `Aéride aux ailes d'un bleu électrisé. Cheveux blancs dressés en permanence par l'électricité statique. Peau bleutée. Yeux dorés qui clignotent lors des décharges importantes. Porte des fils conducteurs intégrés dans ses vêtements — son réseau de batteries personnelles.`,
  description_personnalite: `Ingénieur électrisé par nature. Voit tout comme un circuit. Relations humaines incluses. Fascination pour les interactions Electrique/Eau — les plus dangereuses et les plus puissantes du système.`,
  position_lore: `Né dans Heliora lors de la crise de reconstruction post-Chute des Nuages, Orvyn est l'Élu qui a repensé le réseau électrique d'Asterciel après la catastrophe. N'appartient à aucune faction — il appartient à son projet : créer le réseau électrique le plus efficace du monde.`,
  style_combat: `Orvyn crée d'abord des Canaux d'Eau (kit Eau emprunté), puis les électrifie avec ses sorts Electrique. Toute la zone connectée devient mortelle pour les non-Electrique. Il peut nager dans son propre réseau grâce à ses adaptations.`,
  kit: ELEMENT_KITS['Electrique'],
  modifications_classe: `Peut utiliser Canal et Inondation du kit Eau. Ses sorts Electrique dans des zones Eau infligent des dégâts x2 et se propagent à toute l'eau connectée. Court-Circuit fonctionne sur les cases Eau sans avoir besoin de cases Electrique préexistantes.`,
};

export default character;
