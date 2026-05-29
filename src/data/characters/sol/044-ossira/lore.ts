import type { PersonnageLoreComplet } from '../../../lore-types';

const ossira: PersonnageLoreComplet = {
  id: 44,
  nom: 'Ossira',
  element: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Chthonienne de 37 ans — une silhouette construite par la survie plutôt que par l\'entraînement formel. Elle est asymétrique : son côté gauche a des marques d\'un incident dans la Fosse qui a affecté sa mobilité. Elle compense avec une force de bras droite qui dépasse la normale.',
    peau: 'Gris foncé avec des zones de décoloration sur le côté gauche — des brûlures chimiques de l\'incident dans la Fosse, 8 ans plus tôt. Les brûlures sont cicatrisées mais n\'ont pas repris leur couleur normale. Elle ne les couvre pas.',
    yeux: 'Noirs avec une intensité d\'observation — elle regarde les sorties de chaque pièce où elle entre. Ce n\'est pas de la paranoïa : c\'est une habitude survécue à l\'incident.',
    vetements: 'Tenue des Dissidentes modifiée pour Ormn-Dur — noire avec des renforts aux articulations, adaptée aux tunnels souterrains. Elle porte un équipement minimal mais choisi avec une précision qui dit l\'expérience de terrain.',
    signes_particuliers: 'Elle ne mentionne pas l\'incident dans la Fosse à moins qu\'on lui pose la question directement. Quand elle en parle, elle est factuelle — pas d\'émotion dans la voix, pas de détail superflu. Les Dissidentes qui l\'ont entendue raconter ça ont noté que ça rend l\'histoire plus difficile à entendre, pas plus facile.',
  },

  psychologie: {
    dominante: 'Chthonienne qui a failli mourir dans une incursion impériale dans la Fosse — l\'Empire avait envoyé des Élus Poison pour accéder aux niveaux 7-9. Elle était dans la zone. Elle a survécu. Les trois agents impériaux qui étaient entrés au niveau 9 n\'en sont pas revenus. Elle a rejoint les Dissidentes deux semaines après.',
    mecanisme_de_defense: 'L\'action comme thérapie. Elle ne s\'arrête pas pour analyser. Elle agit, elle débrief, elle s\'adapte. Le temps passé à ne pas bouger est du temps passé à se souvenir de la Fosse.',
    contradiction_interne: 'Elle est les Dissidentes à Ormn-Dur pour empêcher une nouvelle incursion impériale dans la Fosse — elle croit que l\'Empire essaiera encore. Mais elle ne sait pas ce qu\'elle ferait si ce n\'était pas l\'Empire qui forçait l\'accès. Graveth (43) cherche à entrer au niveau 9 pour la Convergence. Est-ce que c\'est différent ? Elle n\'a pas encore décidé.',
    rapport_aux_autres: 'Drevaya (39) est la gardienne de zone qui était dans la zone lors de l\'incident. Elles se connaissent depuis 8 ans. Drevaya ne lui a pas encore dit qu\'elle voit des micro-fractures. Karm (41) est l\'archiviste — elle ne l\'a pas approché parce qu\'elle ne pense pas qu\'un archiviste comprend ce qu\'elle a vu dans la Fosse. Graveth (43) l\'inquiète pour des raisons différentes de l\'Empire — pas parce qu\'il est mauvais, mais parce qu\'il ne comprend pas non plus ce qu\'il cherche à accéder.',
    vision_du_monde: 'La Fosse Interdite est interdite pour une raison. Elle a vu ce qui arrive à ceux qui y entrent sans comprendre cette raison. Elle ne sait pas entièrement pourquoi elle est interdite — mais elle sait que "interdite" n\'est pas un mot utilisé à la légère dans les tunnels de Kar-Dum.',
  },

  histoire: {
    enfance: {
      titre: 'Les tunnels',
      contenu: 'Née et élevée dans les tunnels de Kar-Dum, elle avait appris dès l\'enfance que certains tunnels menaient vers des endroits où les règles changeaient. Sa mère lui avait dit de ne jamais descendre en dessous du niveau 4 sans une raison certifiée. Elle avait demandé ce qu\'il y avait en dessous. Sa mère avait répondu : "ce dont Kar-Dum a besoin pour exister".',
    },
    arrivee: {
      titre: 'Le travail de surface',
      contenu: 'À 27 ans, elle travaillait comme technicienne de maintenance des systèmes de ventilation des niveaux 3-5 — une zone de travail légale pour les non-Élus Poison. Elle connaissait bien les niveaux supérieurs de la Fosse sans jamais être descendue en dessous du niveau 5.',
    },
    premier_conflit: {
      titre: 'L\'incursion impériale',
      contenu: 'À 29 ans, lors d\'une maintenance de routine au niveau 5, elle avait rencontré des agents impériaux — des Élus Poison avec des autorisations forcées, en route pour les niveaux 7-9. Elle avait tenté de les arrêter et n\'avait pas pu. Elle avait été projetée contre une paroi par un impact de l\'un d\'eux. Elle était restée consciente suffisamment longtemps pour voir les agents descendre au niveau 6. Ils n\'étaient pas remontés.',
    },
    revelation: {
      titre: 'La décision',
      contenu: 'Deux semaines après l\'incident, depuis son lit de récupération, elle avait envoyé un message aux Dissidentes via un contact qu\'elle avait rencontré un an plus tôt sans penser l\'utiliser. Le message était : "l\'Empire a essayé d\'entrer dans la Fosse. Ce n\'était pas la première fois. Il y aura une prochaine fois. Je veux être là pour la prochaine fois." Les Dissidentes avaient répondu.',
    },
    etat_actuel: {
      titre: 'La surveillance',
      contenu: 'Depuis 8 ans, elle surveille Kar-Dum pour des signes d\'une nouvelle incursion impériale dans la Fosse. Elle n\'en a pas vu — l\'Empire semble avoir compris la leçon. Mais Graveth (43) de la Convergence cherche un accès similaire. Et Drevaya (39) a quelque chose qu\'elle ne lui dit pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'ossira_fosse',
      titre: 'Nouvelle menace d\'accès',
      description: 'Ossira surveille depuis 8 ans une nouvelle incursion impériale dans la Fosse. La menace vient de là où elle ne l\'attendait pas : Graveth (43) de la Convergence cherche un accès au niveau 9. Ce n\'est pas l\'Empire — mais c\'est quelqu\'un qui cherche à entrer là où les trois agents impériaux ne sont pas remontés. Elle n\'a pas encore décidé si ça compte comme la même menace.',
      personnages_impliques: [43, 39],
      declencheur: 'Ossira réalisant que Graveth cherche le même accès que les agents impériaux',
      consequence: 'Décision de bloquer Graveth — ou de laisser passer quelqu\'un qui ne vient pas de l\'Empire',
    },
    {
      id: 'ossira_drevaya',
      titre: 'Ce que Drevaya ne dit pas',
      description: 'Drevaya (39) et Ossira se connaissent depuis l\'incident. Drevaya voit des micro-fractures depuis 6 mois et ne lui en a pas parlé. Si Drevaya lui disait, les informations des deux se combineraient — Ossira a une perspective opérationnelle, Drevaya a les observations directes. Ensemble, elles pourraient décider quoi faire avant que Graveth accède au niveau 9.',
      personnages_impliques: [39, 43],
      declencheur: 'Drevaya choisissant de parler à Ossira de ses observations',
      consequence: 'Action coordonnée avant que Graveth accède à la Fosse',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Dissidente à Ormn-Dur, survivante d\'une incursion impériale dans la Fosse Interdite il y a 8 ans. Surveille Kar-Dum pour une nouvelle incursion. Graveth (43) représente une menace qu\'elle n\'avait pas anticipée. Drevaya (39) a quelque chose qu\'elle ne lui dit pas.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'allié', note: 'Se connaissent depuis l\'incident. Drevaya ne lui dit pas ce qu\'elle observe. Ossira attend.' },
    { id: 43, nom: 'Graveth', type: 'adversaire', note: 'Convergence qui cherche un accès à la Fosse. Elle n\'a pas encore décidé si c\'est la même menace que l\'Empire.' },
    { id: 41, nom: 'Karm', type: 'contact', note: 'Archiviste qu\'elle n\'a pas approché. Pense qu\'il ne comprend pas la réalité de terrain.' },
  ],

  combat: {
    sorts: [
      'Bouclier de sol (Sol) — soulèvement de terre compact — protection directionnelle',
      'Frappe sismique (Sol) — onde de choc dans le sol — déstabilisation d\'une zone',
      'Tunnel rapide (Sol) — excavation instantanée d\'un passage — évasion ou infiltration souterraine',
    ],
  },

  image_prompts: [
    {
      id: 'ossira_tunnel',
      description: 'Ossira dans un tunnel de Kar-Dum, niveau 5 — une Chthonienne de 37 ans debout à la limite de la zone autorisée, regardant vers le bas. Son côté gauche porte les marques de l\'incident. Elle regarde vers les niveaux inférieurs avec l\'expression de quelqu\'un qui sait ce qui se passe en dessous et qui a survécu à une fois.',
      style: 'réaliste Chthonienne Dissidente, tunnel de Kar-Dum, limite de zone autorisée, marques de l\'incident, surveillance, connaissance du danger',
    },
  ],

  lore_long: `Ossira a failli mourir à 29 ans dans une incursion impériale dans la Fosse Interdite. Les trois agents impériaux qui sont descendus au niveau 9 ne sont pas remontés. Elle a rejoint les Dissidentes deux semaines après.

Depuis 8 ans, elle surveille une nouvelle incursion impériale. Graveth (43) de la Convergence cherche le même accès. Elle n'a pas encore décidé si c'est la même menace.

Drevaya (39) a quelque chose qu'elle ne lui dit pas depuis 6 mois.`,
};

export default ossira;
