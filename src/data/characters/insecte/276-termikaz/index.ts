import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: 276,
  nom: `Termikaz`,
  element: 'Nuee',
  classe: 'Battlemage',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Empire',
  description_physique: `Chthonien dont la symbiose avec des termites de la Fosse Interdite lui permet de decomposer et reconstruire les materiaux en temps reel. Ses bras sont couverts de termites actifs en permanence. Porte un equipement imperial renforce — sa colonie decompose ses affaires si non-entretenu.`,
  description_personnalite: `A rejoint l'Empire parce qu'ils lui ont offert des cibles legitimees. Sa colonie a besoin de matiere a decomposer — l'Empire en fournit en abondance dans des contextes autorises. Ne se pose pas de questions morales complexes.`,
  position_lore: `Termikaz a ete identifie par les agents imperiaux lors d'une inspection des zones adjacentes a la Fosse Interdite. Sa capacite a decomposer les fortifications en temps reel en fait un outil de siege unique. L'Empire le deploie contre les Nids des Dissidentes — il detruit l'infrastructure biologique de la Nuee en meme temps que les combattants. La technocratie de Kar-Dum le tolere a contrecoeur : il contribue a l'Empire, pas a Ormn-Dur.`,
  style_combat: `Engage au corps a corps, termites actifs sur tout ce qu'il frappe. Infestation destructrice des structures biologiques adverses. Decomposition acceleree des fortifications.`,
  kit: ELEMENT_KITS['Nuee'],
  modifications_classe: `Ses attaques au corps a corps infligent automatiquement Acide. Infestation de Termikaz detruit les Nids ennemis dans la zone.`,
};

export default character;
