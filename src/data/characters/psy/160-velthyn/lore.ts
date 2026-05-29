import type { PersonnageLoreComplet } from '../../../lore-types';

const velthyn: PersonnageLoreComplet = {
  id: 160,
  nom: 'Velthyn',
  element: 'Psy',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire avec la posture de quelqu\'un qui travaille à distance — pas sur le terrain, mais dans l\'analyse.',
    peau: 'Gris-bleu Umbrien avec des pulsations psychiques régulières — il utilise son élément en permanence pour analyser à distance.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui voit des données là où les autres voient des personnes.',
    vetements: 'Tenue de travail sobre — il ne reçoit pas de clients, il analyse depuis un espace isolé.',
    signes_particuliers: 'Il n\'opère pas à Vel\'Nox — il l\'analyse à distance. Son travail est de contre-analyser les données que Shael (48) collecte pour la Convergence.',
  },

  psychologie: {
    dominante: 'Analyste Dissident qui contre-analyse les données que Shael (48) de la Convergence collecte sur les Élus de Vel\'Nox. Il ne travaille pas sur le terrain — il opère à distance, depuis un espace sécurisé. Son travail est de comprendre ce que la Convergence cherche à partir de ce qu\'elle collecte.',
    mecanisme_de_defense: 'La distance physique comme protection. Il n\'est pas à Vel\'Nox — il l\'analyse. Cette séparation est sa principale protection.',
    contradiction_interne: 'Il contre-analyse des données sans avoir accès direct à leur source. Sa compréhension de ce que Shael cherche est inférentielle — il peut se tromper. Et une erreur d\'analyse peut orienter les Dissidentes dans la mauvaise direction.',
    rapport_aux_autres: 'Shael (48) est son adversaire indirect — la source des données qu\'il analyse. Thariel (18) est dans son réseau — une figure dont les archives lui fournissent du contexte.',
    vision_du_monde: 'La Convergence a un projet sur les Élus. Ce projet peut être compris par l\'analyse de ses méthodes de collecte. Comprendre le projet avant qu\'il se réalise est la façon de le contrecarrer.',
  },

  histoire: {
    enfance: {
      titre: 'L\'analyse',
      contenu: 'Né dans les régions Dissidentes, pas à Vel\'Nox. Formation en analyse psychique et en cryptographie élémentaire. Il avait été orienté vers le contre-renseignement Convergence à 28 ans.',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'Il avait commencé à analyser les patterns de collecte de la Convergence à partir de données fragmentaires. Ses inférences sur les objectifs de la Convergence s\'étaient avérées suffisamment précises pour que les Dissidentes lui fassent confiance.',
    },
    premier_conflit: {
      titre: 'L\'erreur d\'inférence',
      contenu: 'Il avait produit une analyse qui orientait les Dissidentes vers une fausse piste — la Convergence avait changé sa méthode de collecte d\'une façon qu\'il n\'avait pas anticipée. Les conséquences avaient été limitées mais réelles.',
    },
    revelation: {
      titre: 'La limite de la distance',
      contenu: 'Il avait compris que son analyse à distance avait des limites structurelles — il manquait des nuances contextuelles que seul le terrain pouvait fournir. Il maintenait la distance pour sa sécurité, mais cette sécurité avait un coût analytique.',
    },
    etat_actuel: {
      titre: 'L\'analyse à distance',
      contenu: 'Il contre-analyse. Ses inférences nourrissent les Dissidentes. La marge d\'erreur existe.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthyn_contre_analyse',
      titre: 'L\'analyse qui se trompe',
      description: 'Velthyn contre-analyse les données de collecte de Shael à distance. Si la Convergence change significativement sa méthode — une adaptation qui invalide les inférences de Velthyn — ses analyses orienteront les Dissidentes dans une mauvaise direction. La correction nécessitera soit un accès terrain, soit de trouver quelqu\'un à Vel\'Nox qui peut fournir du contexte direct.',
      personnages_impliques: [48, 18],
      declencheur: 'Changement de méthode de la Convergence invalidant les analyses de Velthyn',
      consequence: 'Velthyn ayant besoin d\'un contact terrain à Vel\'Nox pour corriger ses inférences',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Analyste Dissident opérant à distance. Contre-analyse les collectes de Shael (48). Pas physiquement à Vel\'Nox.',

  relations: [
    { id: 48, nom: 'Shael', type: 'adversaire', note: 'Source des données analysées. Adversaire indirect.' },
    { id: 18, nom: 'Thariel', type: 'contact', note: 'Fournit du contexte archivistique pour les analyses.' },
  ],

  combat: {
    sorts: [
      'Analyse psychique à distance (Psy) — lecture de champ élémentaire sans contact — inférence de position',
      'Blocage mental (Psy) — interférence de champ — protection de pensées',
    ],
  },

  image_prompts: [
    {
      id: 'velthyn_analyse',
      description: 'Velthyn dans son espace de travail isolé — un Umbrien loin de Vel\'Nox, entouré de données sur la Convergence. Il analyse des patterns de collecte. Sa carte de Vel\'Nox est sur le mur. Il n\'y a jamais été. Son expression est concentrée et légèrement anxieuse — il sait que l\'analyse à distance a ses limites.',
      style: 'réaliste Umbrien analyste Dissident, distance de Vel\'Nox, contre-analyse Convergence, inférence sans terrain',
    },
  ],

  lore_long: `Velthyn contre-analyse les données que Shael (48) de la Convergence collecte sur les Élus de Vel'Nox. Il opère à distance — jamais sur le terrain.

Ses inférences nourrissent les Dissidentes. Mais l'analyse à distance a des limites structurelles.

Si la Convergence change de méthode, ses analyses peuvent orienter les Dissidentes dans la mauvaise direction.`,
};

export default velthyn;
