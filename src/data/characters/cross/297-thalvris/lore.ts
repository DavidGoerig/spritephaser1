import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvris: PersonnageLoreComplet = {
  id: 297,
  nom: 'Thalvris',
  element: 'Plante',
  element2: 'Eau',
  espece: 'Sylvans',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyen, avec des mouvements économes de passeur — rien de superflu, tout est fonctionnel.',
    peau: 'Brun Sylvan avec des reflets bleutés aux poignets — l\'Eau qui monte depuis ses routes maritimes.',
    yeux: 'Vert-gris, habitués à évaluer les risques sans les montrer.',
    vetements: 'Tenue de voyage simple avec beaucoup de poches intérieures. Ses semences sont réparties en plusieurs caches sur lui — si une est trouvée, les autres restent.',
    signes_particuliers: 'Il ne dort jamais sans avoir une sortie de secours préparée mentalement. Même dans un endroit qu\'il connaît, il localise les sorties avant de poser son sac.',
  },

  psychologie: {
    dominante: 'Transport précis de ce qui ne peut pas disparaître. Les semences interdites représentent des siècles d\'évolution. Les perdre, c\'est une perte permanente.',
    mecanisme_de_defense: 'La procédure. Chaque transport a un plan, un plan alternatif, et une procédure d\'urgence. Ce n\'est pas de la paranoïa — c\'est de la préparation.',
    contradiction_interne: 'Il transporte des semences que l\'Empire veut effacer — avec la conviction que c\'est juste. Il transporte aussi parfois des documents ou des personnes pour les Dissidentes — avec une conviction moins claire sur chaque cas individuel. Le double rôle lui pose des questions qu\'il préfère ne pas examiner quand il est en route.',
    rapport_aux_autres: 'Sylketh (116) est son contact pour les espèces à transporter — quelqu\'un qui sait quelles chants (et quelles semences) sont en danger. Narevael (84) est son contact maritime quand ses routes passent par mer.',
    vision_du_monde: 'Une espèce végétale effacée, c\'est effacée pour toujours. Un réseau Dissident compromis peut se reconstruire. Il hiérarchise en conséquence.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière comme école',
      contenu: 'Né à la frontière entre Sylvera et Thalassyr, il avait appris les routes entre les deux depuis l\'enfance — par les marchés, par la famille, par les occasions. Quand les Dissidentes l\'avaient approché, il avait déjà 12 ans de connaissance des routes informelles.',
    },
    arrivee: {
      titre: 'La première semence transportée',
      contenu: 'À 29 ans, Sylketh lui avait confié un paquet de semences d\'une espèce sylvane rare dont l\'habitat naturel était proche d\'une zone d\'extraction impériale. La livraison avait été simple. Il avait compris l\'enjeu en touchant le paquet — des graines minuscules, des siècles d\'évolution dedans.',
    },
    premier_conflit: {
      titre: 'Le contrôle de route',
      contenu: 'Il y a 2 ans, un contrôle impérial l\'avait intercepté sur une route côtière. Ses caches avaient fonctionné — les semences dans des compartiments que le contrôle standard ne cherche pas. Il avait continué. Mais le contrôle avait utilisé un pattern qu\'il ne connaissait pas. Il avait mis 3 semaines à rerouter avant de reprendre ses transports.',
    },
    revelation: {
      titre: 'Les documents de Narevael',
      contenu: 'Narevael l\'avait contacté pour un transport non-semencier — des documents Dissidents qui devaient passer une frontière maritime. Il avait accepté sans examiner le contenu. Plus tard, il avait réalisé que les documents concernaient des opérations qu\'il n\'aurait peut-être pas voulu faciliter. Il n\'avait rien dit à Narevael. Il avait décidé d\'examiner les prochains documents avant d\'accepter.',
    },
    etat_actuel: {
      titre: 'Les deux types de transport',
      contenu: 'Il sépare maintenant ses deux rôles aussi nettement que possible — semences pour les Dissidentes (conviction claire) et autres transports (examen au cas par cas). Cette séparation n\'est pas toujours possible dans la pratique. Il continue de naviguer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvris_examen_prealable',
      titre: 'L\'examen au cas par cas',
      description: 'Depuis l\'incident avec les documents de Narevael, il examine les transports non-semenciers avant d\'accepter. Ça crée des frictions dans le réseau — les Dissidentes ne sont pas habituées à ce qu\'un passeur pose des questions. Il maintient sa position : les semences, il transporte sans conditions. Le reste, il évalue.',
      personnages_impliques: [84],
      declencheur: 'Transport de documents aux implications non examinées',
      consequence: 'Friction avec les Dissidentes sur les conditions de transport non-semencier',
    },
    {
      id: 'thalvris_sylketh_semences',
      titre: 'L\'inventaire des espèces en danger',
      description: 'Sylketh lui transmet les espèces à transporter par ordre de priorité — les plus urgentes d\'abord. Leur collaboration lui a permis de comprendre que l\'effacement des espèces par l\'Empire suit une logique : en priorité celles qui ont des propriétés médicinales ou symboliques importantes pour les régions qu\'ils veulent contrôler. Il transporte en conséquence.',
      personnages_impliques: [116],
      declencheur: 'Collaboration sur les espèces en danger',
      consequence: 'Compréhension de la logique impériale d\'effacement — priorisation des transports',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Passeur de continuité végétale. Sans lui, certaines espèces disparaîtraient avant que quelqu\'un puisse les protéger autrement.',

  relations: [
    { id: 116, nom: 'Sylketh', type: 'allié', note: 'Source des espèces à transporter et de leur priorité. Collaboration centrale.' },
    { id: 84, nom: 'Narevael', type: 'allié', note: 'Contact maritime. Transport non-semencier qui a créé une tension sur les conditions d\'acceptation.' },
  ],

  combat: {
    sorts: [
      'Semences de barrière (Plante) — projection de semences à germination rapide — obstacles organiques immédiats',
      'Désengagement aquatique (Eau) — dissolution dans un courant d\'eau pour disparaître rapidement',
      'Camouflage végétal (Plante) — intégration dans une zone de végétation dense — discrétion en terrain naturel',
    ],
  },

  image_prompts: [
    {
      id: 'thalvris_caches',
      description: 'Thalvris en route entre deux régions, vérifiant mentalement ses caches de semences — pas en fouillant ses poches, juste en les localisant par habitude. Il est seul. Il connaît la route. Il a ses sorties de secours mémorisées.',
      style: 'réaliste de passeur, lumière de route entre deux biomes, vigilance calme, professionnalisme discret',
    },
  ],

  lore_long: `Thalvris transporte des semences dans des caches réparties sur lui — si une est trouvée, les autres restent.

Il a subi un contrôle impérial il y a 2 ans. Ses caches ont fonctionné. Il a mis 3 semaines à rerouter avant de reprendre.

Il sépare deux types de transports : semences (conviction claire, pas de conditions) et autres transports Dissidents (examen au cas par cas). Cette séparation crée des frictions dans le réseau. Il maintient sa position.

L'incident avec les documents de Narevael lui a appris quelque chose : les Dissidentes ne vérifient pas que leurs passeurs partagent chaque objectif qu'elles servent. Il vérifie maintenant.

Sylketh lui transmet les espèces par ordre de priorité. Ils ont compris ensemble que l'Empire efface les espèces dans un ordre logique — d'abord celles qui ont des propriétés importantes pour les régions qu'ils veulent contrôler. Le transport suit cette logique inverse.

Une espèce végétale effacée, c'est effacée pour toujours.`,
};

export default thalvris;
