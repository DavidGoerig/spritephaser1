import type { PersonnageLoreComplet } from '../../../lore-types';

const sylindra: PersonnageLoreComplet = {
  id: 37,
  nom: 'Sylindra',
  element: 'Plante',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Sylvan de 33 ans — une exploratrice de terrain. Elle est mince avec des muscles adaptés aux explorations souterraines — elle passe plus de temps à ramper dans des tunnels racinaires qu\'à marcher en forêt. Elle a une légèreté dans ses mouvements qui dit qu\'elle n\'a pas peur de tomber.',
    peau: 'Verte avec de la terre dans les plis — elle ne se lave pas les mains avant d\'avoir fini ce qu\'elle fait. Sa peau a des zones plus rugueuses aux genoux et aux coudes des explorations souterraines.',
    yeux: 'Verts avec une attention aux détails fins — elle voit des choses que les autres ne voient pas dans les structures racinaires. Ce n\'est pas de l\'élément : c\'est de l\'entraînement et de la patience.',
    vetements: 'Tenue d\'exploration — des couches pratiques, des protections aux articulations, une lampe racinaire à la ceinture. Elle ne porte pas d\'emblèmes de faction parce qu\'elle n\'en a pas.',
    signes_particuliers: 'Elle parle à voix basse même en surface — une habitude des explorations souterraines où le bruit perturbe les structures racinaires. Les gens autour d\'elle se penchent pour entendre ce qu\'elle dit.',
  },

  psychologie: {
    dominante: 'Chercheuse indépendante qui a trouvé quelque chose qu\'elle ne comprend pas encore entièrement — un fragment de réseau racinaire qui réagit différemment de ce qu\'elle attend d\'une structure morte. Elle est dans l\'espace entre la découverte et la compréhension, et elle ne voulait pas le quitter avant de comprendre.',
    mecanisme_de_defense: 'La méthode d\'abord. Avant d\'appeler quelque chose extraordinaire, elle documente jusqu\'à ce que la documentation dise elle-même ce que c\'est. Elle a encore des semaines de documentation devant elle.',
    contradiction_interne: 'Elle a trouvé quelque chose d\'actif — mais elle ne sait pas encore que c\'est actif. Elle l\'interprète comme une anomalie de terrain qui nécessite plus d\'observations. Ceux qui ont des référentiels théoriques sur les arbres-mémoire comprendraient immédiatement ce qu\'elle a. Elle n\'a pas ces référentiels.',
    rapport_aux_autres: 'Sylvae (31) explore une zone adjacente depuis 24 ans — Sylindra ne la connaît pas encore directement. Si elles se rencontraient, Sylvae aurait le contexte pour comprendre ce que Sylindra a trouvé. Thalorn (33) a des informations sur le réseau racinaire original qui expliqueraient exactement ce qu\'est le fragment. Aeris (35) cherche à la contacter — Sylindra ne sait pas pourquoi.',
    vision_du_monde: 'Les systèmes biologiques ne font pas de miracle — ils font ce que leur architecture leur permet de faire. Si quelque chose dans un réseau racinaire se comporte différemment, c\'est que l\'architecture est différente là. Il faut comprendre l\'architecture.',
  },

  histoire: {
    enfance: {
      titre: 'Les tunnels racinaires',
      contenu: 'À 11 ans, elle avait découvert qu\'elle pouvait ramper dans les tunnels racinaires sous la forêt de Sylvera sans paniquer — une compétence que la plupart des Sylvans ne développaient pas. Elle avait commencé à cartographier les tunnels de son village. À 14 ans, elle avait une carte plus précise que celle des Conservateurs officiels.',
    },
    arrivee: {
      titre: 'L\'exploration formelle',
      contenu: 'À 22 ans, elle avait commencé ses explorations formelles des zones périphériques de Sylvera — des zones que les Conservateurs ne cartographiaient pas parce qu\'elles étaient considérées comme des zones mortes depuis la Faim des Racines. Elle avait trouvé que les zones mortes n\'étaient pas entièrement mortes.',
    },
    premier_conflit: {
      titre: 'Le refus de rejoindre les Conservateurs',
      contenu: 'À 27 ans, les Conservateurs l\'avaient contactée pour l\'intégrer formellement. Elle avait refusé. Pas par désaccord avec leurs objectifs, mais parce que leurs méthodes d\'exploration étaient trop lentes et trop documentées pour elle. Elle explorait mieux seule, plus vite, avec moins de bureaucratie.',
    },
    revelation: {
      titre: 'Le fragment',
      contenu: 'À 33 ans, dans une zone adjacente à celle de Sylvae (31), elle avait trouvé quelque chose — une section de réseau racinaire qui répondait différemment des structures mortes. Pas de la même façon qu\'un arbre-mémoire actif, mais pas de la même façon qu\'un réseau mort non plus. Quelque chose entre les deux qu\'elle ne savait pas encore nommer.',
    },
    etat_actuel: {
      titre: 'La documentation',
      contenu: 'Depuis 6 mois, elle documente le fragment. Elle a des observations sur sa réactivité à la température, à l\'humidité, à la présence d\'autres réseaux racinaires. Elle n\'a pas encore conclu. Elle ne conclurait pas avant d\'avoir suffisamment de données — mais les données qu\'elle accumule disent déjà quelque chose qu\'elle ne sait pas encore lire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylindra_sylvae',
      titre: 'La connexion',
      description: 'Sylvae (31) pressent un fragment actif dans une zone adjacente depuis 4 ans — la zone exacte où Sylindra explore depuis 6 mois. Si elles se rencontrent, Sylvae a le contexte théorique pour comprendre ce que Sylindra a trouvé. Sylindra a les données de terrain. La connexion entre les deux crée la première découverte d\'un fragment actif depuis la Faim des Racines.',
      personnages_impliques: [31, 33],
      declencheur: 'Rencontre entre Sylindra et Sylvae dans une zone adjacente',
      consequence: 'Confirmation du fragment actif — la découverte la plus significative pour Sylvera depuis 84 ans',
    },
    {
      id: 'sylindra_aeris',
      titre: 'Le contact d\'Aeris',
      description: 'Aeris (35) cherche à contacter Sylindra avant Sylvae. Si Aeris arrive en premier, elle peut orienter ce que Sylindra comprend de sa découverte — la présenter comme une anomalie mineure plutôt que comme un fragment actif, retardant la connexion avec Sylvae. Sylindra ne sait pas qu\'Aeris travaille pour l\'Empire.',
      personnages_impliques: [35, 31],
      declencheur: 'Contact d\'Aeris avec Sylindra avant que Sylvae n\'arrive',
      consequence: 'Soit Aeris retarde la compréhension de Sylindra, soit Sylvae arrive en premier et la connexion se fait',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Exploratrice indépendante de Sylvera. A trouvé un fragment du réseau racinaire de Thalindre dans une zone adjacente à celle de Sylvae (31). Documente depuis 6 mois sans savoir encore que le fragment est actif. Aeris (35) cherche à la contacter.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Explore une zone adjacente. Ne la connaît pas encore directement. Sylvae pressent ce qu\'elle a trouvé depuis 4 ans.' },
    { id: 33, nom: 'Thalorn', type: 'contact', note: 'Possède l\'architecture du réseau original. Ses informations expliqueraient ce que Sylindra a trouvé.' },
    { id: 35, nom: 'Aeris', type: 'contact', note: 'Cherche à la contacter. Sylindra ne sait pas pourquoi et ne connaît pas son rôle.' },
  ],

  combat: {
    sorts: [
      'Extension racinaire (Plante) — projection de racines rapides sous terre — piège ou exploration souterraine',
      'Réseau de liaison (Plante) — connexion temporaire entre deux systèmes racinaires — communication ou transfert d\'énergie végétale',
      'Bouclier de sève (Plante) — condensation de sève en surface — protection partielle contre les impacts',
    ],
  },

  image_prompts: [
    {
      id: 'sylindra_fragment',
      description: 'Sylindra dans un tunnel racinaire sous la forêt de Sylvera — une Sylvan de 33 ans agenouillée devant une section de réseau racinaire avec une lampe racinaire dans une main et un carnet de notes dans l\'autre. Elle regarde quelque chose dans les fibres devant elle avec une concentration totale. Ce qu\'elle voit ne correspond pas à ce qu\'elle attendait. Elle est en train de comprendre que c\'est important.',
      style: 'réaliste Sylvan exploratrice, tunnel racinaire, fragment actif non identifié, Sylvera, lumière de lampe racinaire, moment de découverte',
    },
  ],

  lore_long: `Sylindra a trouvé quelque chose dans une zone adjacente à celle de Sylvae (31). Elle ne sait pas encore que c'est actif — elle l'interprète comme une anomalie de terrain et continue à documenter.

Elle documente depuis 6 mois. Ses données disent quelque chose qu'elle ne sait pas encore lire — il lui manque le contexte théorique des arbres-mémoire que Sylvae et Thalorn (33) ont.

Aeris (35) cherche à la contacter avant Sylvae. Sylindra ne sait pas pourquoi.`,
};

export default sylindra;
