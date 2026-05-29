import type { PersonnageLoreComplet } from '../../../lore-types';

const torryn: PersonnageLoreComplet = {
  id: 107,
  nom: 'Torryn',
  element: 'Stellaire',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 27 ans, encore dans la définition de son corps d\'adulte. Héritier mineur — la posture de quelqu\'un qui a appris à se tenir dans les salons de l\'aristocratie mais n\'a pas encore décidé ce qu\'il en pense.',
    peau: 'Pâle bleutée Aéride avec une luminescence stellaire légère — l\'élément Stellaire d\'un jeune aristocrate dont la puissance élémentaire est ordinaire pour son rang.',
    yeux: 'Dorés-gris, avec une qualité de quelqu\'un qui sait quelque chose qu\'il a choisi de ne pas dire.',
    vetements: 'Tenue aristocratique mineure — correcte sans être ostentatoire. Il appartient à la cour sans en être le centre.',
    signes_particuliers: 'Il sait que Veralith n\'est pas ce qu\'on dit. Il a choisi l\'inaction. Cette décision a des conséquences sur ce qu\'il est.',
  },

  psychologie: {
    dominante: 'Héritier mineur de l\'aristocratie stellaire. Il a appris la vérité sur Veralith (ou en a eu une version partielle). Il a choisi de ne rien faire de cette information. Cette inaction est une décision active qu\'il habite mal.',
    mecanisme_de_defense: 'L\'héritier mineur comme protection. Il n\'a pas assez de pouvoir pour que ce qu\'il sait ait des conséquences. Cette position le protège aussi de devoir décider.',
    contradiction_interne: 'Il sait quelque chose d\'important. Il a choisi l\'inaction. Cette inaction est confortable mais elle ne résout rien — elle reporte une décision.',
    rapport_aux_autres: 'Serathis (24) est dans son monde de cour — une figure qui maintient l\'ordre des strates. Telos (29) est une figure adverse dans sa compréhension du monde d\'Asterciel.',
    vision_du_monde: 'Ce qu\'il sait ne changera probablement rien s\'il le dit. L\'aristocratie a des mécanismes d\'absorption des révélations. Sa révélation serait absorbée. Il préfère l\'inaction à l\'absorption.',
  },

  histoire: {
    enfance: {
      titre: 'L\'aristocratie stellaire',
      contenu: 'Né dans une branche mineure de l\'aristocratie stellaire. Son rang lui donnait accès à des cercles sans lui donner de pouvoir dans ces cercles.',
    },
    arrivee: {
      titre: 'La révélation',
      contenu: 'À 24 ans, il avait appris quelque chose sur Veralith — une figure mystique centrale dans l\'aristocratie d\'Asterciel — qui contredisait la version officielle. La source était fiable. L\'information était perturbante.',
    },
    premier_conflit: {
      titre: 'Le choix',
      contenu: 'Il avait réfléchi pendant plusieurs mois à ce qu\'il pouvait faire de cette information. Les options qu\'il avait identifiées avaient toutes des conséquences importantes. Il avait choisi l\'inaction.',
    },
    revelation: {
      titre: 'L\'inaction habitée',
      contenu: 'Avec le temps, l\'inaction était devenue son état par défaut. Il continuait à savoir. Il continuait à ne rien faire. Cette cohérence le préservait d\'une décision qu\'il ne voulait pas prendre.',
    },
    etat_actuel: {
      titre: 'La cour',
      contenu: 'Il continue à naviguer dans les salons de la cour avec sa connaissance silencieuse. Personne ne sait qu\'il sait.',
    },
  },

  evenements_narratifs: [
    {
      id: 'torryn_veralith',
      titre: 'Ce que l\'héritier sait',
      description: 'Torryn sait que Veralith n\'est pas ce qu\'on dit. Si quelqu\'un cherche cette information et comprend qu\'il l\'a, il devient une ressource — ou une cible. Son inaction ne le protège que tant que personne ne sait qu\'il sait.',
      personnages_impliques: [24, 29],
      declencheur: 'Quelqu\'un apprenant que Torryn a une information sur Veralith',
      consequence: 'Torryn forcé de décider entre garder l\'information et la partager',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Héritier mineur de l\'aristocratie stellaire. Sait que Veralith n\'est pas ce qu\'on dit. A choisi l\'inaction.',

  relations: [
    { id: 24, nom: 'Serathis', type: 'contact', note: 'Figure de cour dans son monde.' },
    { id: 29, nom: 'Telos', type: 'adversaire', note: 'Adversaire indirect dans sa compréhension d\'Asterciel.' },
  ],

  combat: {
    sorts: [
      'Projection stellaire légère (Stellaire) — faisceau de lumière — usage défensif basique',
      'Illusion stellaire (Stellaire) — projection lumineuse — diversion',
    ],
  },

  image_prompts: [
    {
      id: 'torryn_cour',
      description: 'Torryn dans un salon de l\'aristocratie d\'Asterciel — un jeune Aéride de 27 ans en conversation de cour. Son expression est de quelqu\'un qui écoute avec une information silencieuse. Il sait quelque chose que personne dans la salle ne sait.',
      style: 'réaliste Aéride héritier mineur, aristocratie d\'Asterciel, connaissance silencieuse, inaction choisie',
    },
  ],

  lore_long: `Torryn sait que Veralith n'est pas ce qu'on dit dans l'aristocratie d'Asterciel. Il a 27 ans.

Il a choisi l'inaction. Cette décision est active — il maintient son silence chaque jour.

Personne ne sait qu'il sait. Sa protection dépend de ce silence.`,
};

export default torryn;
