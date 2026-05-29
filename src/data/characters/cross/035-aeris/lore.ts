import type { PersonnageLoreComplet } from '../../../lore-types';

const aeris: PersonnageLoreComplet = {
  id: 35,
  nom: 'Aeris',
  element: 'Plante',
  element2: 'Eau',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Sylvan de 52 ans — une présence qui ne trahit pas son rôle. Elle est végétale dans ses mouvements, calme dans ses expressions, attentive dans ses silences. Rien dans son apparence ne dit qu\'elle travaille pour l\'Empire depuis 18 ans.',
    peau: 'Verte avec des reflets bleutés aux jointures — le mélange Plante-Eau visible dans sa peau. Ce double élément est rare parmi les Sylvans de Sylvera et la rend identifiable à ceux qui savent lire les éléments. Elle l\'utilise rarement en public.',
    yeux: 'Verts avec une liquidité — ses yeux semblent bouger comme de l\'eau sous une surface végétale. Cette qualité la rend difficile à lire : on ne sait pas exactement où elle regarde.',
    vetements: 'Tenue de botaniste indépendante — verts, bruns, équipée pour le terrain. Elle ne porte pas d\'insignes de faction. Elle se présente toujours comme une chercheuse indépendante étudiant les systèmes racinaires de Sylvera.',
    signes_particuliers: 'Elle pose toujours des questions avant de répondre à quoi que ce soit — une habitude de collecte d\'information. Elle écoute plus qu\'elle ne parle, et ce qu\'elle dit est toujours formulé pour obtenir quelque chose en retour.',
  },

  psychologie: {
    dominante: 'Infiltrée par l\'Empire dans Sylvera depuis 18 ans — son rôle est de maintenir la fracture entre Conservateurs et Gardiens en fournissant à chaque camp des informations qui les confirment dans leur position sans jamais les réconcilier. Une Sylvera divisée est une Sylvera plus facile à contrôler.',
    mecanisme_de_defense: 'L\'identité de botaniste indépendante comme couverture totale. Elle croit à sa propre couverture — ses observations botaniques sont réelles, ses données sont précises, ses compétences sont authentiques. L\'Empire a utilisé ce qui était déjà vrai en elle.',
    contradiction_interne: 'Elle maintient une fracture qu\'elle pourrait refermer — elle a des informations qui, partagées avec les deux camps, pourraient les réconcilier autour du fragment actif trouvé par Sylindra (37). Elle ne les partage pas. Elle ne s\'est pas encore demandé si cette retenue était un choix ou une habitude.',
    rapport_aux_autres: 'Sylvae (31) lui fait confiance comme botaniste — Aeris lui a fourni des données sur les zones racinaires qui ont orienté ses explorations. Kessyn (32) lui a fourni des données sur ses méthodes de brûlage — données qu\'elle a transmises à l\'Empire. Sylindra (37) ne la connaît pas encore, ce qui est un problème : si Sylindra découvre ce qu\'Aeris sait, la fracture se referme malgré elle.',
    vision_du_monde: 'Les systèmes biologiques et politiques fonctionnent de façon similaire — une pression dans un nœud se répartit dans tout le réseau. Elle maintient des pressions spécifiques pour garder le réseau dans une configuration souhaitée. C\'est de la gestion systémique, pas de la trahison.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'À 14 ans, son double élément Plante-Eau s\'était manifesté — une rareté dans les Sylvans, où l\'élément était presque toujours unique. Les Conservateurs avaient voulu la recruter immédiatement : un double élément était une ressource rare. Elle avait attendu avant de répondre. Cette habitude d\'attendre était déjà en elle.',
    },
    arrivee: {
      titre: 'Le recrutement de l\'Empire',
      contenu: 'À 34 ans, un contact impérial l\'avait approchée — pas avec une proposition directe, mais avec des questions. Ils voulaient comprendre la fracture entre Conservateurs et Gardiens. Elle avait répondu. Ils avaient continué à la consulter. À 34 ans, elle n\'avait pas réalisé quand la consultation était devenue un mandat.',
    },
    premier_conflit: {
      titre: 'La première rétention',
      contenu: 'À 38 ans, elle avait découvert des données sur les zones racinaires de Sylvera qui auraient pu permettre une réconciliation entre Conservateurs et Gardiens. Elle avait retenu ces données — les avait divisées, avait donné à chaque camp la partie qui confirmait sa position. C\'était la première fois qu\'elle avait fait ça consciemment. Elle n\'avait pas eu de scrupule particulier.',
    },
    revelation: {
      titre: 'Les données de Kessyn',
      contenu: 'À 48 ans, elle avait obtenu de Kessyn (32) les données sur ses méthodes de brûlage contrôlé. Elle les avait transmises à l\'Empire sous forme d\'un rapport sur les capacités militaires des Gardiens. Kessyn pensait qu\'il fournissait des données à un rapport botanique. Elle n\'avait pas corrigé cette impression.',
    },
    etat_actuel: {
      titre: 'Le fragment de Sylindra',
      contenu: 'Sylindra (37) a trouvé quelque chose dans une zone adjacente à celle de Sylvae. Aeris pressent que ce fragment — si actif — change l\'équilibre qu\'elle maintient depuis 18 ans. Un fragment actif donnerait aux Conservateurs une victoire narrative qui fermerait la fracture. Elle cherche à contacter Sylindra avant que Sylvae ne le fasse.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aeris_sylindra',
      titre: 'L\'interception',
      description: 'Aeris cherche à contacter Sylindra (37) avant que Sylvae (31) ne le fasse — si elle arrive en premier, elle peut orienter ce que Sylindra comprend de sa découverte et retarder la connexion entre les deux Sylvans. Si Sylvae arrive en premier, la fracture se referme et 18 ans de maintenance de la division s\'effondrent.',
      personnages_impliques: [37, 31],
      declencheur: 'Course entre Aeris et Sylvae pour atteindre Sylindra en premier',
      consequence: 'Soit Aeris retarde la connexion, soit la fracture se referme malgré elle — et son rôle devient visible',
    },
    {
      id: 'aeris_empire',
      titre: 'Le rapport sur les Gardiens',
      description: 'Les données de Kessyn (32) sur ses méthodes de brûlage ont été transmises à l\'Empire. L\'Empire les utilise pour évaluer les capacités militaires des Gardiens dans une perspective d\'intégration forcée. Si Kessyn apprend que ses données ont servi à ça, il comprendra ce qu\'Aeris est réellement.',
      personnages_impliques: [32, 33],
      declencheur: 'Utilisation par l\'Empire des données de Kessyn dans un rapport militaire qui circule',
      consequence: 'Risque de démasquage d\'Aeris si le rapport atteint Sylvera',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Infiltrée impériale dans Sylvera depuis 18 ans. Maintient la fracture Conservateurs vs Gardiens en distribuant des informations fragmentées. Cherche à intercepter Sylindra (37) avant Sylvae (31). La découverte du fragment actif menace l\'équilibre qu\'elle entretient.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Lui fait confiance comme botaniste indépendante. Aeris a orienté ses explorations avec des données tronquées.' },
    { id: 37, nom: 'Sylindra', type: 'contact', note: 'Ne la connaît pas encore. Aeris veut la contacter avant Sylvae.' },
    { id: 32, nom: 'Kessyn', type: 'contact', note: 'Lui a fourni des données sur ses méthodes. Transmises à l\'Empire sans qu\'il le sache.' },
  ],

  combat: {
    sorts: [
      'Entrelacement racinaire (Plante) — réseau de racines qui piège et ralentit — immobilisation progressive',
      'Flux d\'eau végétale (Eau+Plante) — liquide conducteur dans les fibres végétales — soin ou paralysie selon la cible',
      'Camouflage botanique (Plante) — fusion avec la végétation environnante — disparition totale dans une forêt',
    ],
  },

  image_prompts: [
    {
      id: 'aeris_terrain',
      description: 'Aeris dans la forêt de Sylvera — une Sylvan de 52 ans agenouillée près de racines, prenant des notes dans un carnet. Son équipement est celui d\'une botaniste. Ses yeux verts-liquides regardent quelque chose hors champ. Son expression est de concentration — mais elle écoute aussi quelque chose derrière elle. Elle fait toujours les deux en même temps.',
      style: 'réaliste Sylvan double-élément, botaniste de terrain, Sylvera, double attention, calme qui cache quelque chose, infiltrée',
    },
  ],

  lore_long: `Aeris est infiltrée par l'Empire dans Sylvera depuis 18 ans. Son rôle : maintenir la fracture entre Conservateurs et Gardiens en donnant à chaque camp des informations qui les confirment sans les réconcilier.

Sa couverture de botaniste indépendante est authentique — ses données sont réelles, ses compétences sont vraies. L'Empire a utilisé ce qui était déjà en elle.

Sylindra (37) a trouvé un fragment actif dans une zone adjacente à celle de Sylvae (31). Si les deux Sylvans se connectent, la fracture se referme. Aeris veut atteindre Sylindra en premier.`,
};

export default aeris;
