import type { PersonnageLoreComplet } from '../../../lore-types';

const orathyn: PersonnageLoreComplet = {
  id: 181,
  nom: 'Orathyn',
  element: 'Psy',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 46 ans, thérapeute — corpulence calme, présence apaisante. Il donne l\'impression qu\'il a du temps.',
    peau: 'Ton méditerranéen avec une qualité de quelqu\'un qui reste calme dans des situations qui ne le sont pas.',
    yeux: 'Violets avec une qualité d\'écoute. Il ne juge pas.',
    vetements: 'Tenue simple et neutre — rien qui identifie une faction. Il reçoit des Élus de toutes affiliations.',
    signes_particuliers: 'Il traite les Élus en saturation élémentaire — des personnes dont l\'élément est en train de les dépasser. Son travail se situe dans l\'intersection de la médecine et du contrôle élémentaire. Il opère indépendamment de toutes les factions.',
  },

  psychologie: {
    dominante: 'Thérapeute Psy des Élus en saturation élémentaire dans l\'Isthme. La saturation est un état où un élément prend une place excessive dans l\'équilibre psychique d\'un Élu — des conséquences cognitives, émotionnelles, parfois physiques. Il aide à rétablir l\'équilibre. Il ne demande pas d\'allégeance en échange.',
    mecanisme_de_defense: 'La neutralité thérapeutique. Un thérapeute qui choisit ses patients par affiliation politique est un outil politique, pas un thérapeute. Il ne peut pas aider efficacement des personnes s\'il les juge d\'abord.',
    contradiction_interne: 'Sa neutralité est réelle — mais elle est aussi une protection. En ne choisissant pas de faction, il maintient un accès à tous. Si une faction décide que sa neutralité est une couverture pour l\'autre faction, il perd cet accès.',
    rapport_aux_autres: 'Vashera (266) est dans son réseau — une autre praticienne médicale qui opère dans des zones similaires. Shiveth (232) est dans son réseau médical — un professionnel de santé avec qui il partage des observations sur les effets de la saturation.',
    vision_du_monde: 'La saturation élémentaire est un phénomène médical. Les Élus qui en souffrent ont besoin de soins, pas de politique. Le contexte peut attendre la guérison.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Psy',
      contenu: 'Son élément Psy s\'était manifesté comme une empathie sensorielle — il percevait les états émotionnels des autres. À 18 ans, il avait compris que ce n\'était pas utile sans entraînement. Il avait cherché un mentor.',
    },
    arrivee: {
      titre: 'La saturation',
      contenu: 'Il avait commencé à rencontrer des Élus en saturation à 30 ans — des personnes dont les éléments avaient commencé à dépasser leur capacité de contrôle. Il avait développé des techniques adaptées. Aucune faction ne lui avait enseigné — il avait appris en traitant.',
    },
    premier_conflit: {
      titre: 'Le patient empire',
      contenu: 'Un Élu impérial en saturation l\'avait consulté. Orathyn l\'avait traité. L\'Empire avait demandé un rapport sur l\'état de l\'Élu. Orathyn avait refusé — secret professionnel. L\'Empire avait noté son refus.',
    },
    revelation: {
      titre: 'La saturation systémique',
      contenu: 'Il avait commencé à voir des patterns — la saturation augmentait dans l\'Isthme. Ce n\'était pas des cas isolés. L\'Isthme lui-même affectait les Élus qui y vivaient. La saturation n\'était pas seulement individuelle.',
    },
    etat_actuel: {
      titre: 'Le thérapeute',
      contenu: 'Il traite. La saturation augmente. Sa liste d\'attente s\'allonge.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orathyn_saturation',
      titre: 'La saturation systémique',
      description: 'Orathyn voit la saturation élémentaire de l\'Isthme augmenter dans sa pratique. Si ses observations cliniques correspondent à une accélération réelle — si la saturation systémique de l\'Isthme dépasse un seuil — ses patients arriveront en état de crise avant qu\'il puisse les traiter en prévention.',
      personnages_impliques: [266, 232],
      declencheur: 'Augmentation de la saturation systémique de l\'Isthme au-delà d\'un seuil traitable',
      consequence: 'Orathyn submergé de cas en crise — et données cliniques sur la saturation systémique transmises à des contacts médicaux',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Thérapeute des Élus en saturation élémentaire dans l\'Isthme. Neutralité entre factions. Observe une saturation systémique croissante dans ses patients.',

  relations: [
    { id: 266, nom: 'Vashera', type: 'contact', note: 'Praticienne médicale opérant dans des zones similaires.' },
    { id: 232, nom: 'Shiveth', type: 'contact', note: 'Professionnel de santé avec qui il partage des observations sur les effets de la saturation.' },
  ],

  combat: {
    sorts: [
      'Stabilisation psychique (Psy) — rétablissement d\'équilibre élémentaire — soutien',
      'Bouclier mental (Psy) — protection contre intrusion psychique — défense',
    ],
  },

  image_prompts: [
    {
      id: 'orathyn_therapie',
      description: 'Orathyn dans sa salle de consultation dans l\'Isthme — un Homme-Lien de 46 ans assis face à un Élu dont l\'élément crée des interférences visibles dans l\'air autour de lui. Orathyn écoute sans l\'interrompre. Son propre élément Psy est légèrement visible — une lueur violette qui aide l\'autre à se stabiliser.',
      style: 'réaliste Homme-Lien thérapeute Psy, Isthme, saturation élémentaire, équilibre, neutralité entre factions',
    },
  ],

  lore_long: `Orathyn traite les Élus en saturation élémentaire dans l'Isthme. Il opère indépendamment de toutes les factions — il ne demande pas d'allégeance en échange de soins.

Il observe une saturation systémique croissante dans ses patients. Ce n'est plus seulement des cas individuels — l'Isthme lui-même affecte les Élus qui y vivent.

Sa liste d'attente s'allonge. La saturation continue.`,
};

export default orathyn;
