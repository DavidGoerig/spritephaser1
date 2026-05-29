import type { PersonnageLoreComplet } from '../../../lore-types';

const syvara: PersonnageLoreComplet = {
  id: 30,
  nom: 'Syvara',
  element: 'Stellaire',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 41 ans — une présence qui contraste avec sa réputation. Elle est plus ordinaire physiquement que les descendants de lignées stellaires. Ses ailes sont simples. Sa luminescence est modeste. La puissance de son élément n\'est pas visible jusqu\'à ce qu\'elle décide de l\'utiliser.',
    peau: 'Pâle Aéride avec une luminescence stellaire discrète en repos — beaucoup plus prononcée quand elle utilise son élément, ce qu\'elle fait rarement en public. Elle ne cherche pas à paraître.',
    yeux: 'Or profond avec une qualité d\'observation des corps célestes — elle voit les positions des astres même en plein jour, une adaptation de son élément. En conversation, elle regarde les gens plus que le ciel.',
    vetements: 'Tenue simple des strates basses — pas de symboles de lignée, pas d\'insignes stellaires. Elle est une Élue Stellaire qui refuse d\'apparaître comme telle. Ceux qui savent lire les yeux Stellaires la reconnaissent immédiatement.',
    signes_particuliers: 'Elle répond aux questions sur Veralith par des questions — pas par évasion, mais parce qu\'elle pense que la vraie réponse nécessite que l\'interlocuteur comprenne d\'abord ce qu\'il cherche réellement.',
  },

  psychologie: {
    dominante: 'Rare Élue Stellaire qui refuse l\'aristocratie malgré son élément — dans une société où l\'élément Stellaire est la marque de la légitimité héréditaire, son refus n\'est pas de la modestie. C\'est une affirmation politique : l\'élément ne crée pas le droit de gouverner.',
    mecanisme_de_defense: 'L\'observation distante comme protection. Elle voit ce qui se passe dans l\'aristocratie depuis les strates basses sans en faire partie. Cette distance lui donne une perspective que ni les aristocrates ni les non-Stellaires ne peuvent avoir.',
    contradiction_interne: 'Elle refuse l\'aristocratie mais utilise son élément Stellaire pour maintenir son réseau d\'information — des contacts qui lui parlent parce qu\'elle est Stellaire, même si elle refuse ce que ça devrait signifier. Elle accepte un privilège qu\'elle dénonce.',
    rapport_aux_autres: 'Telos (29) la consulte parce qu\'elle a une perspective sur Veralith que les archives n\'ont pas. Elle lui a donné des informations — pas tout, parce qu\'elle n\'est pas sûre de ce que Telos fera de ce qu\'il trouve. Velryn (114) enseigne Veralith comme mythe humain plutôt que divin — une position qu\'elle soutient discrètement.',
    vision_du_monde: 'Veralith était une personne qui a fait un choix extraordinaire dans une situation extraordinaire. Ce que l\'aristocratie a fait de ce choix — une lignée héréditaire, un droit de gouverner — trahit Veralith plus que la mémoire qu\'elle prétend honorer.',
  },

  histoire: {
    enfance: {
      titre: 'La découverte de l\'élément',
      contenu: 'À 14 ans, dans les strates basses d\'Asterciel, son élément Stellaire s\'était manifesté — une rareté dans les strates basses, où l\'élément était presque exclusivement une caractéristique de l\'aristocratie. Les représentants de l\'aristocratie stellaire étaient venus la voir presque immédiatement. Elle avait compris dès ce moment que son élément la définissait pour les autres d\'une façon qu\'elle n\'avait pas choisie.',
    },
    arrivee: {
      titre: 'Le refus de l\'intégration',
      contenu: 'À 18 ans, elle avait officiellement refusé l\'intégration dans les structures de l\'aristocratie stellaire. Le refus avait été incompréhensible pour presque tout le monde — refuser l\'accès aux strates hautes, le rang, la légitimité. Elle avait dit qu\'elle ne voulait pas d\'une légitimité héritée. On lui avait dit qu\'elle n\'en avait pas le choix. Elle avait prouvé le contraire.',
    },
    premier_conflit: {
      titre: 'La surveillance de Serathis',
      contenu: 'À 25 ans, Serathis (24) avait commencé à la surveiller — non pas à la persécuter, mais à la regarder. Une Élue Stellaire qui refuse son rang est une anomalie dans le système de légitimité. Si elle réussissait à vivre bien hors du système, ça posait des questions sur le système.',
    },
    revelation: {
      titre: 'Ce qu\'elle sait de Veralith',
      contenu: 'Au fil de 25 ans de contacts dans les strates basses et les strates moyennes, elle avait collecté des témoignages sur Veralith qui ne correspondaient pas à la version officielle — des traditions orales, des récits de familles qui avaient connu Veralith avant qu\'elle devienne une icône. Ce qu\'elle avait n\'était pas des preuves documentaires. C\'était une texture différente.',
    },
    etat_actuel: {
      titre: 'La demande de Telos',
      contenu: 'Telos (29) lui a demandé de partager ce qu\'elle sait. Elle a accepté de le rencontrer — mais elle ne lui donnera pas tout immédiatement. Elle doit d\'abord comprendre ce qu\'il cherche réellement : confirmer une théorie, ou vraiment comprendre Veralith. La réponse à cette question déterminera ce qu\'elle lui donne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syvara_telos',
      titre: 'Ce qu\'elle donnera à Telos',
      description: 'Elle va rencontrer Telos (29) cette semaine. Elle possède des informations sur Veralith que ses archives ne contiennent pas — des traditions orales, une texture différente de la personne derrière le mythe. Elle doit décider ce qu\'elle partage, en fonction de ce que Telos cherche vraiment. Si ce qu\'elle donne l\'aide à trouver le fonds reclassé de Serathis, les conséquences iront au-delà de la recherche.',
      personnages_impliques: [29, 24],
      declencheur: 'Rencontre imminente avec Telos et décision sur ce qu\'elle transmet',
      consequence: 'Ce qu\'elle donne pourrait compléter la triangulation de Telos — et déclencher la crise de légitimité de Serathis',
    },
    {
      id: 'syvara_velryn',
      titre: 'L\'enseignement interdit',
      description: 'Velryn (114) enseigne Veralith comme mythe humain dans les strates basses — une position illégale à Asterciel. Elle le soutient discrètement en lui fournissant des informations de ses traditions orales. Si Serathis (24) identifiait son soutien à Velryn, ça lui fournirait un prétexte d\'action directe contre elle.',
      personnages_impliques: [114, 24],
      declencheur: 'Soutien à un enseignement illégal dans un contexte où elle est déjà surveillée',
      consequence: 'Risque de prétexte d\'action directe de Serathis si le lien avec Velryn est identifié',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Élue Stellaire refusant l\'aristocratie depuis 27 ans. Possède des informations sur Veralith des traditions orales — une texture différente de la version officielle. Va rencontrer Telos (29) cette semaine pour décider ce qu\'elle lui transmet.',

  relations: [
    { id: 29, nom: 'Telos', type: 'allié', note: 'Source complémentaire pour sa recherche. Elle doit décider ce qu\'elle lui donne.' },
    { id: 24, nom: 'Serathis', type: 'adversaire', note: 'La surveille depuis 16 ans. Son existence est une anomalie dans son système de légitimité.' },
    { id: 114, nom: 'Velryn', type: 'allié', note: 'Enseigne Veralith comme mythe humain. Elle le soutient discrètement.' },
  ],

  combat: {
    sorts: [
      'Alignement stellaire (Stellaire) — projection de lumière stellaire concentrée — impact précis à longue distance',
      'Voile de nuit (Stellaire) — obscurcissement de zone par absorption de lumière stellaire — couverture tactique',
      'Éclat de vérité (Stellaire) — lumière qui révèle les illusions et les camouflages — contre-mesure contre les dissimulations',
    ],
  },

  image_prompts: [
    {
      id: 'syvara_strates',
      description: 'Syvara sur un toit des strates basses d\'Asterciel la nuit — une Aéride de 41 ans regardant le ciel, ses yeux or brillants dans le noir. Les étoiles sont visibles derrière les plateformes supérieures. Sa luminescence stellaire est légère mais réelle. En dessous d\'elle : les lumières ordinaires des strates basses.',
      style: 'réaliste Aéride Stellaire des strates basses, nuit, luminescence discrète, regard vers les astres, entre deux mondes',
    },
  ],

  lore_long: `Syvara est une Élue Stellaire qui refuse l'aristocratie depuis 27 ans. Dans un système où l'élément Stellaire marque la légitimité héréditaire, son refus est une affirmation politique.

Elle possède des informations sur Veralith des traditions orales des strates basses — une texture différente du mythe officiel. Telos (29) va la rencontrer cette semaine pour obtenir ce qu'elle sait.

Elle doit décider ce qu'elle lui donne. Ce qu'elle donne pourrait compléter la triangulation de Telos et déclencher la crise de légitimité de Serathis (24).`,
};

export default syvara;
