import type { PersonnageLoreComplet } from '../../../lore-types';

const sylborn: PersonnageLoreComplet = {
  id: 121,
  nom: 'Sylborn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 73 ans, corpulence de forestier actif — pas la corpulence du commandement, mais celle de l\'exécution physique.',
    peau: 'Écorce sombre avec des marques de brûlures — il travaille près du feu plus que sa nature Plante ne le recommande. Il a adapté son corps à sa méthode.',
    yeux: 'Verts-ambre avec une conviction calme. Il brûle parce qu\'il croit que c\'est juste.',
    vetements: 'Tenue de forestier Gardien avec les équipements de brûlage contrôlé — résistant au feu, pratique.',
    signes_particuliers: 'Il brûle ce qu\'il pense malade, avec la conviction de Kessaer et la témérité de Krath (36). Cette combinaison est plus efficace et plus dangereuse que l\'un ou l\'autre seul.',
  },

  psychologie: {
    dominante: 'Forestier Gardien qui brûle les zones qu\'il juge malades — bois contaminé, zones déséquilibrées, végétation dont la croissance est devenue pathologique. Il agit avec la conviction de Kessaer (la méthode est correcte) et la témérité de Krath (36) (l\'action immédiate est préférable à l\'attente).',
    mecanisme_de_defense: 'La conviction de la justesse de l\'acte. Il ne brûle pas pour brûler — il brûle pour soigner. Cette distinction est réelle pour lui.',
    contradiction_interne: 'Il brûle ce qu\'il pense malade. Kessyn (32) — dans la faction adverse — a souvent des évaluations différentes sur ce qui est malade. Ces désaccords ne sont pas des désaccords de méthode. Ils sont des désaccords sur ce que signifie "malade".',
    rapport_aux_autres: 'Krath (36) est dans son réseau — la référence de sa méthode. Kessyn (32) est l\'adversaire — il doit souvent réparer ce que Sylborn a brûlé, ou protéger ce que Sylborn veut brûler.',
    vision_du_monde: 'Une forêt malade ne guérit pas seule — elle s\'étend. Brûler les zones malades contrôle la propagation. Les Conservateurs appellent ça de la destruction. Il appelle ça de la chirurgie.',
  },

  histoire: {
    enfance: {
      titre: 'Les Gardiens',
      contenu: 'Né dans une famille de Gardiens. La méthode du brûlage contrôlé était une évidence culturelle — pas une idéologie qu\'il avait choisie, mais une pratique qu\'il avait héritée.',
    },
    arrivee: {
      titre: 'La conviction',
      contenu: 'À 40 ans, il avait travaillé directement avec Krath (36). Cette collaboration avait transformé son héritage culturel en conviction personnelle. Il brûlait maintenant parce qu\'il croyait, pas seulement parce qu\'il avait été formé.',
    },
    premier_conflit: {
      titre: 'Kraethyn',
      contenu: 'Il avait rencontré Kraethyn (122) — une guérisseuse Conservatrice qui réparait ce qu\'il brûlait. Leurs zones de travail se chevauchaient. Leurs méthodes s\'annulaient mutuellement. Ils n\'avaient jamais eu de confrontation directe.',
    },
    revelation: {
      titre: 'Le désaccord sur "malade"',
      contenu: 'Il avait compris que son désaccord avec les Conservateurs n\'était pas sur la méthode — sur ce que signifiait "malade". Lui voyait une contamination à éliminer. Eux voyaient un déséquilibre à rééquilibrer. Ces deux cadres ne se réconciliaient pas.',
    },
    etat_actuel: {
      titre: 'Le brûlage',
      contenu: 'Il brûle. Kraethyn (122) répare ce qu\'il brûle. Cette tension structure leur territoire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylborn_kraethyn',
      titre: 'Le forestier et la guérisseuse',
      description: 'Sylborn brûle. Kraethyn (122) répare ce qu\'il brûle. Si leurs zones de travail convergent sur la même zone critique — un arbre-mémoire, un fragment racinaire, une zone où les deux approches sont incompatibles — leur tension structurelle deviendra un conflit direct.',
      personnages_impliques: [36, 32],
      declencheur: 'Convergence de leurs zones de travail sur une zone écologiquement critique',
      consequence: 'Confrontation directe entre brûlage et guérison — avec des conséquences irréversibles dans un sens ou l\'autre',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Forestier Gardien qui brûle avec conviction. Tension avec Kraethyn (122) qui répare. Méthode héritée de Kessaer et Krath.',

  relations: [
    { id: 36, nom: 'Krath', type: 'contact', note: 'Référence de sa méthode. A renforcé sa conviction.' },
    { id: 32, nom: 'Kessyn', type: 'adversaire', note: 'Désaccords sur ce qui est "malade" dans la forêt.' },
  ],

  combat: {
    sorts: [
      'Brûlage ciblé (Plante/Feu) — maîtrise de la végétation pour contrôler le feu — précision chirurgicale',
      'Contrôle de croissance (Plante) — ralentissement ou arrêt de végétation pathologique — défense préventive',
    ],
  },

  image_prompts: [
    {
      id: 'sylborn_brulage',
      description: 'Sylborn dans une zone forestière de Sylvera qu\'il juge malade — un Sylvan de 73 ans préparant un brûlage contrôlé. Sa posture exprime une conviction calme. Derrière lui, les traces de ce qu\'il a déjà brûlé. Devant lui, ce qu\'il va brûler.',
      style: 'réaliste Sylvan forestier Gardien, Sylvera, brûlage contrôlé, conviction de la méthode, Kessaer et Krath',
    },
  ],

  lore_long: `Sylborn brûle ce qu'il pense malade dans les forêts de Sylvera. Sa conviction vient de Kessaer et de Krath (36).

Kraethyn (122) répare ce qu'il brûle. Ils ne se sont jamais confrontés directement.

Leur désaccord n'est pas sur la méthode — sur ce que signifie "malade". Ces deux définitions ne se réconcilieront pas.`,
};

export default sylborn;
