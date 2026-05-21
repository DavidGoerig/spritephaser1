import type { PersonnageLoreComplet } from '../../../lore-types';

const vordrekh: PersonnageLoreComplet = {
  id: 303,
  nom: 'Vordrekh',
  element: 'Roche',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Massif, avec la silhouette d\'un carrier — épaules larges, bras habitués à travailler dans la roche. Une présence physique qui occupe de la place sans effort.',
    peau: 'Gris clair Chthonien avec des zones de roche compactée sur les phalanges et les avant-bras — des décennies d\'extraction directe. L\'élément Roche a littéralement durci sa peau extérieure.',
    yeux: 'Gris-brun, avec une habitude d\'évaluer les volumes. Il regarde les masses, pas les détails.',
    vetements: 'Tenue de carrier sans marqueur de faction. Il ne porte ni l\'insigne Technocratie ni rien qui pourrait l\'identifier comme Dissident. La neutralité est visible.',
    signes_particuliers: 'Il peut évaluer la qualité d\'une roche en la touchant — composition, résistance, âge. Il le fait sur des roches aléatoires dans des conversations, pas pour démontrer quelque chose. C\'est réflexe.',
  },

  psychologie: {
    dominante: 'La neutralité comme position commerciale. Il vend à toutes les factions parce que la roche n\'a pas de politique. Les factions ont une politique. La roche n\'en a pas.',
    mecanisme_de_defense: 'L\'équilibre des ventes. Si l\'Empire achète autant que les Dissidentes, ni l\'un ni l\'autre ne peut l\'accuser de prendre parti. Il maintient les chiffres équilibrés.',
    contradiction_interne: 'Ses carrières sont sur des zones géologiquement contestées — des zones que la Technocratie revendique et que les Dissidentes utilisent comme routes. Il a choisi d\'ignorer les deux revendications et de travailler. Cette position tient tant que personne ne force la décision.',
    rapport_aux_autres: 'Dravel (74) lui achète de la roche pour des projets dont il ne précise pas la nature. Vordrekh ne pose pas de questions. La Fosse Interdite est techniquement dans sa zone d\'extraction — il n\'y extrait pas, mais il est le seul carrier à avoir accès à la zone périphérique.',
    vision_du_monde: 'Les factions passent. La roche reste. Il a vu trois changements de direction à la Technocratie. Ses carrières existent depuis avant sa naissance. Elles existeront après.',
  },

  histoire: {
    enfance: {
      titre: 'Les carrières de la famille',
      contenu: 'Né dans une famille de carriers qui travaillait les mêmes zones depuis quatre générations. À 10 ans, il distinguait les types de roche par leur son sous le pic. À 20 ans, il gérait une des carrières. À 30 ans, il avait agrandi à trois.',
    },
    arrivee: {
      titre: 'La première vente à l\'Empire',
      contenu: 'À 34 ans, un agent impérial lui avait proposé un contrat pour la roche de ses carrières — construction d\'infrastructure à Ormn-Dur. Il avait accepté. Six mois plus tard, un contact Dissident lui avait demandé la même chose pour un projet différent. Il avait accepté aussi. Il avait décidé à ce moment que la politique n\'était pas son problème.',
    },
    premier_conflit: {
      titre: 'La zone contestée',
      contenu: 'La Technocratie lui avait signifié que ses carrières nord empiétaient sur une zone d\'extraction réservée. Les Dissidentes lui avaient signifié que les mêmes carrières nord étaient dans une zone qu\'elles considéraient comme voie de passage protégée. Il avait continué d\'extraire. Il avait doublé sa sécurité. Il n\'avait répondu à aucune des deux injonctions.',
    },
    revelation: {
      titre: 'L\'accès à la périphérie de la Fosse',
      contenu: 'Ses carrières les plus profondes atteignaient la zone périphérique de la Fosse Interdite — pas la zone active, mais assez proche pour que les techniciens de la Fosse aient commencé à venir vérifier ses travaux. Il avait négocié un accès conditionnel : il n\'extrait pas dans la zone à moins de 200 mètres de la frontière Fosse. En échange, les techniciens lui signalent les zones d\'instabilité avant qu\'elles deviennent des problèmes.',
    },
    etat_actuel: {
      titre: 'L\'équilibre des ventes',
      contenu: 'Il vend en volume presque égal à l\'Empire, à la Technocratie et via des intermédiaires à des parties non identifiées (probablement Dissidentes et indépendants). Son comptable maintient l\'équilibre. La roche n\'a pas de conscience politique. Dravel (74) est son client le plus régulier parmi les non-officiels. Il ne lui a jamais demandé pour quoi.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vordrekh_zone_contestee',
      titre: 'La double injonction',
      description: 'La Technocratie et les Dissidentes ont toutes les deux signifié des injonctions sur ses carrières nord pour des raisons opposées. Il n\'a répondu à aucune des deux. Il a doublé sa sécurité. Cette position est stable tant que ni l\'une ni l\'autre ne force la décision — mais si l\'une agit, l\'autre réagira. Ses carrières sont au centre d\'une tension non résolue.',
      personnages_impliques: [74],
      declencheur: 'Carrières situées sur zones géologiquement et politiquement contestées',
      consequence: 'Position de neutralité conditionnelle — stable jusqu\'à ce qu\'elle ne le soit plus',
    },
    {
      id: 'vordrekh_acces_fosse',
      titre: 'L\'accord avec les techniciens de la Fosse',
      description: 'Son accord avec les techniciens de la Fosse lui donne accès à des données de stabilité géologique que personne d\'autre dans la région n\'a. Il sait quelles zones sont en train de se dégrader avant que les architectes standard soient prévenus. Il utilise ces données pour éviter les zones. Il les a aussi vendues une fois à un acheteur anonyme.',
      personnages_impliques: [],
      declencheur: 'Carrières atteignant la zone périphérique de la Fosse',
      consequence: 'Accès unique à données de stabilité géologique — utilisé et potentiellement vendu',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Fournisseur de matériaux qui ignore officiellement la politique mais qui a un accès à des informations géologiques uniques. Sa neutralité est une position commerciale, pas une conviction.',

  relations: [
    { id: 74, nom: 'Dravel', type: 'allié', note: 'Client régulier non-officiel. Ne précise pas l\'usage. Vordrekh ne pose pas de questions. Volume d\'achat suffisant pour maintenir la relation.' },
  ],

  combat: {
    sorts: [
      'Projection de roche (Roche) — lancement de fragments rocheux à haute vitesse — attaque directe',
      'Stabilisation de terrain (Sol) — ancrage du sol sous ses pieds en combat — position défensive',
      'Avalanche contrôlée (Roche) — déclenchement de chute de roche sur un secteur — dégâts de zone',
    ],
  },

  image_prompts: [
    {
      id: 'vordrekh_carriere',
      description: 'Vordrekh au bord d\'une de ses carrières, en train d\'évaluer une roche prélevée — la touche, l\'examine, la repose. Autour de lui, des travailleurs extractent. Au fond, les niveaux inférieurs d\'Ormn-Dur. Il a l\'air de quelqu\'un qui n\'a pas besoin de regarder loin pour comprendre ce qu\'il a.',
      style: 'réaliste chthonien commercial, lumière de roche souterraine, posture d\'évaluation, environnement d\'extraction',
    },
  ],

  lore_long: `Vordrekh vend de la roche à l'Empire, à la Technocratie et aux Dissidentes. Il maintient les chiffres équilibrés.

Ses carrières sont sur des zones contestées. La Technocratie revendique. Les Dissidentes utilisent comme routes. Il a répondu à aucune des deux injonctions. Il a doublé sa sécurité.

Ses carrières les plus profondes touchent la zone périphérique de la Fosse Interdite. Il a négocié un accès conditionnel aux données de stabilité géologique. Il sait ce qui se dégrade avant les autres.

Dravel (74) est son client non-officiel le plus régulier. Vordrekh ne lui a jamais demandé pour quoi.

La roche n'a pas de politique. Les factions en ont. Ses carrières existent depuis quatre générations. Elles existeront après les factions actuelles.`,
};

export default vordrekh;
