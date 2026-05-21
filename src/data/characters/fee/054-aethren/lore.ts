// ============================================================
//  AETHREN — Lore complet (Fée · Arc Les Archives Gelées)
//  id: 54 | Fée | Givrins | Dissidentes | Plongeur
//  Arc : Les Archives Gelées
//  Événements : Gel Éternel [V→H] — arrière-grand-père dans le Champ, veut le dégeler
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 54,
  nom: 'Aethren',
  element: 'Fée',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt-dix — grand, mais au bas de la fourchette Givrine, ce qui lui donne une silhouette plus mobile que la plupart de son espèce. La physiologie Givrine tend vers la statuaire ; Aethren s'est battu contre ça pendant toute son adolescence, forçant un métabolisme légèrement plus rapide que celui de sa famille. Ça se voit : il est plus agile qu'un Givrin typique, plus brusque dans ses mouvements.`,
    peau: `Blanc-bleuté Givrin standard, avec les micro-cristaux aux tempes et aux articulations des doigts qui caractérisent une exposition prolongée à l'élément Glace dans le milieu naturel. Paradoxalement, sa signature élémentaire est Fée, pas Glace — ces cristaux sont d'origine environnementale, pas élémentaire. Dans des conditions chaudes, ils fondent. En dehors d'Iskral, il a l'air légèrement différent de lui-même, comme si une partie de lui restait là-bas.`,
    yeux: `Bleu pâle, presque incolores — la teinte Givrine standard. Mais la qualité du regard est différente. Les Givrins regardent lentement, avec une intensité qui prend du temps à se mettre en place. Aethren regarde vite, parcourant, évaluant, calculant. La combinaison est déconcertante : des yeux Givrins avec un mouvement qui n'est pas Givrin du tout.`,
    cheveux: `Blanc-argent, taillés courts pour sa classe (les Plongeurs ne peuvent pas avoir les cheveux dans les yeux). Sa famille portait les cheveux longs — marqueur de statut Givrin. Couper les siens était un geste que son père n'a jamais commenté et n'a pas oublié.`,
    vetements: `Tenue fonctionnelle de Plongeur : couches légères mais isolantes, tissu traité pour réduire la friction. Aucun insigne de faction visible — une nécessité pour quelqu'un qui travaille dans les marges d'Iskral. En dessous, une chaîne au cou avec un fragment de glace du Champ qu'il a récupéré illégalement à seize ans. Le fragment ne fond pas — quelque chose dans la glace du Champ la rend stable en dehors de son contexte.`,
    signes_particuliers: `Son élément Fée dans un corps Givrin crée une dissonance perceptible pour ceux qui savent la lire. Le Fée donne une lecture des probabilités ; le Glace donne une mémoire millénaire. Dans son cas, ces deux capacités se superposent de façon étrange : il anticipe des événements avec une précision qui dépasse sa courte expérience, comme s'il héritait d'une mémoire qu'il n'a pas vécue.`,
  },

  psychologie: {
    dominante: `Aethren veut sortir son arrière-grand-père du Champ. Pas métaphoriquement — physiquement. Dégeler le Champ Gelé, libérer les cent quatre-vingt-sept Élus figés, trouver Karath parmi eux et lui rendre une vie. C'est son objectif depuis l'âge de douze ans quand son grand-père lui a raconté ce que son père lui avait raconté, chaîne de transmission orale d'une histoire que les registres officiels réduisaient à une ligne.`,
    contradictions: `Il est Givrin — toute la physiologie, toute la culture, toute la formation lui disent que certaines choses méritent d'être lentes. Mais son but demande de l'urgence, de la vitesse, de la clandestinité. Il a choisi la classe Plongeur précisément pour ce conflit : forcer son héritage à être rapide. Ce n'est pas naturel pour lui. Il l'a rendu naturel par l'entraînement.`,
    peur: `Que le Champ dégèle sans qu'il y soit pour intervenir. Que les Élus libérés soient capturés ou tués avant de pouvoir parler. Que l'Empire gère le dégel et réécrive ce que les témoins disent avoir vu.`,
    desir: `Entendre la voix de son arrière-grand-père. Il connaît le visage depuis les portraits de famille — un homme plus petit que lui, cheveux longs bien sûr, regard Givrin lent. Il veut savoir si ce regard lui ressemblera.`,
    rapport_au_pouvoir: `Il n'est pas hostile à la Monarchie Givrine par principe. Il est hostile à la décision de Keldris de réduire Sylkra au silence — une décision qui protège une institution au détriment d'une gardienne qui faisait son travail. Cette décision spécifique a cristallisé pour lui la différence entre une institution qui se protège et une institution qui protège.`,
  },

  histoire: {
    origine: {
      titre: 'La Chaîne de Transmission',
      texte: `Son arrière-grand-père s'appelait Karev. Pas Karath — Karev était un soldat ordinaire dans la coalition qui avait affronté l'armée du -312, pas le héros éponyme qui avait figé tout le monde. Karev était là parce qu'il y avait une guerre et qu'il était un Élu. Il avait été figé dans le Champ avec les autres.

Son grand-père avait grandi avec cette absence. Son père avait grandi avec cette histoire. Aethren avait grandi avec les deux — l'absence de l'absence, le souvenir d'une personne que personne dans sa famille vivante n'avait rencontré, uniquement transmise par des portraits et des récits de second main.

À douze ans, il avait accompagné son père au Champ pour la première fois. Le Champ était interdit aux civils depuis une décision de la Monarchie, mais son père avait des contacts. Ils s'étaient approchés à quinze mètres. Les silhouettes à l'intérieur étaient visibles. Karev devait être là quelque part — son grand-père avait dit qu'il était vers le bord est.

Aethren avait regardé la glace pendant une heure. Il avait décidé qu'il serait Plongeur.`,
    },
    eveil: {
      titre: 'L'Élément Inattendu',
      texte: `Son élément Fée s'était manifesté à seize ans, lors d'une visite clandestine au Champ — sa deuxième, seul cette fois. Il avait réussi à approcher à cinq mètres et avait touché la surface. La signature élémentaire de la glace avait été clairement Glace, pas Fée, comme il s'y attendait. Mais quelque chose dans le contact avait déclenché sa propre réponse élémentaire — pas de la Glace mais du Fée, une lecture de probabilités soudaine et intense.

Ce qu'il avait perçu : le Champ n'était pas stable. Il y avait dans la glace un potentiel de dégel — pas imminent, mais présent. Les probabilités convergeaient vers un point dans le temps où quelque chose se produirait.

Il avait compris plus tard ce que son élément lui avait dit. Pas "le Champ va dégeler". "Le Champ est conçu pour dégeler."

Il avait cherché des archives sur les instructions du Gel Éternel. Les archives officielles ne contenaient rien. Il avait rejoint les Dissidentes à dix-neuf ans précisément pour accéder à des archives non officielles.`,
    },
    rupture: {
      titre: 'Sylkra et Keldris',
      texte: `Il avait appris l'affaire Sylkra par un contact Dissident dans la Monarchie. Sylkra avait signalé des micro-fractures. Keldris l'avait réduite au silence. Les micro-fractures existaient — il les avait vues lui-même lors de sa dernière approche clandestine du Champ.

Ce que ça signifiait : quelque chose avait changé. Il y avait cinq ans, les probabilités qu'il lisait depuis sa première visite étaient stables — un potentiel de dégel présent mais lointain. Depuis un an, les probabilités s'étaient déplacées. Le potentiel n'était plus lointain. Il était proche.

Il avait besoin de savoir ce qui avait changé. Il n'avait pas les compétences pour lire les lignes secondaires du Calendrier — il était Plongeur, pas archiviste. Mais il avait remarqué la Fée à Iskral. Une présence qui lisait les lignes secondaires tous les matins depuis son bureau aux Archives. Une présence qui n'était pas dans les registres de la Citadelle comme active à Iskral avant neuf ans.

Quelqu'un avait été envoyé surveiller quelque chose. Et cette personne était encore là.`,
    },
    maintenant: {
      titre: 'La Fenêtre',
      texte: `Il sait, à travers les lectures de probabilités de son élément, qu'il a une fenêtre. Pas vague — précise. Dans les dix-huit prochains mois, quelque chose va se passer avec le Champ. Soit il y est, soit quelqu'un d'autre gère ça à sa place.

Ce qu'il ne sait pas : les mécanismes. Pourquoi maintenant, qu'est-ce qui a changé, comment le dégel va-t-il se produire. Et surtout : ce que Thyval (id:55) a trouvé dans les serments. Il sait qu'un archiviste a trouvé quelque chose il y a deux semaines. Il ne sait pas quoi.

Il attend dans les marchés du nord d'Iskral, faisant ce qu'il fait — des contacts, des informations, une présence clandestine dans une ville qui n'est pas entièrement sûre pour les Dissidentes. Il attend et il observe la Fée des archives.`,
    },
    objectif: {
      titre: 'Karev, côté est',
      texte: `À la fin, son objectif est simple. Dégeler le Champ. Trouver Karev dans le côté est. Si Karev est vivant, lui parler. Si Karev n'est pas vivant, s'assurer que ce qu'il savait ne reste pas enfoui avec lui.

L'objectif est simple. Les obstacles sont institutionnels, élémentaires et logistiques, dans cet ordre.

Il travaille par ordre d'obstacle.`,
    },
    evenements_narratifs: ['Gel_Eternel'],
    arcs: ['Les_Archives_Gelees'],
    position_dans_arc: `Dissident Givrin à Iskral. Élément Fée non-déclaré. Perçoit depuis un an que les probabilités de dégel du Champ se sont accélérées. A connaissance des micro-fractures. Surveille l'archiviste impériale Isvara depuis deux semaines. Recherche les instructions de dégel dans les archives non officielles. Objectif personnel : libérer son arrière-grand-père Karev, figé dans le Champ depuis 312 ans.`,
  },

  relations: [
    {
      personnage_id: 56,
      nom: 'Isvara',
      type: 'contact_potentiel',
      depuis_ici: `Il l'a vue dans les marchés deux fois. Sa signature Fée est faible mais il la perçoit. Elle travaille aux Archives et lit les lignes secondaires chaque matin. Elle sait quelque chose — son comportement dit quelqu'un qui garde un secret, pas quelqu'un qui fait simplement son travail. Il n'a pas encore décidé comment l'approcher. Les Fées impériales ne sont pas des alliées naturelles des Dissidentes.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'latent',
    },
    {
      personnage_id: 55,
      nom: 'Thyval',
      type: 'détenteur_d_information',
      depuis_ici: `Thyval a trouvé quelque chose dans les serments il y a deux semaines — ses contacts Dissidents à la Monarchie ont été vagues, mais le mot "instruction de dégel" a été mentionné. Si ce qu'il a trouvé est ce qu'Aethren cherche depuis cinq ans dans les archives non officielles, alors Thyval est la clé. Le problème : Thyval est de la Monarchie. La Monarchie a silencé Sylkra. La confiance n'est pas acquise.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'latent',
    },
    {
      personnage_id: 53,
      nom: 'Sylkra',
      type: 'alliée_silenciée',
      depuis_ici: `Sylkra a vu ce qu'il voit depuis son propre angle. Elle a été réduite au silence par une institution qui préfère le silence au problème. Ce schéma lui est familier. Il a pris contact avec elle via un canal Dissident — une rencontre discrète dans le quartier ouest. Elle est méfiante, blessée par ce qui s'est passé, et elle a peur de Keldris. Il lui a dit qu'elle avait raison sur les micro-fractures. Elle n'a rien dit d'autre ce soir-là, mais elle a ses coordonnées.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Aethren combat comme un Plongeur : rapide, en avant, sans hésitation. Son élément Fée lui donne une lecture des probabilités qui lui permet d'anticiper là où personne ne le prévoit, ce qui donne l'impression d'une vitesse irréelle. Ce n'est pas de la vitesse — c'est de l'anticipation précise.`,
    sorts: [
      {
        nom: 'Plongée Probable',
        type: 'sort_de_base',
        elements: ['Fée'],
        description_gameplay: `Aethren se propulse vers une cible en lisant sa trajectoire probable. Il peut effectuer ce déplacement après que la cible a bougé — il arrive où elle va être, pas où elle était. Dégâts moyens à l'impact. Si la lecture est correcte (la cible n'a pas dévié), dégâts critiques.`,
        description_lore: `Il a développé ça à l'entraînement en regardant ses partenaires de combat se déplacer. La probabilité de déplacement d'un adversaire est lisible avant qu'il ne l'exécute. Il suffit de partir avant qu'il arrive.`,
      },
      {
        nom: 'Fenêtre de Dégel',
        type: 'sort_situationnel',
        elements: ['Fée', 'Glace'],
        description_gameplay: `Aethren crée une zone de 2×2 cases où les probabilités favorisent le changement. Les effets de gel et de stase ennemis dans cette zone ont 50% de chances d'être annulés à chaque tour. Les alliés dans la zone peuvent se déplacer d'une case supplémentaire sans déclencher d'attaque d'opportunité. Durée : 3 tours.`,
        description_lore: `Une version tactique de ce qu'il cherche à faire au Champ Gelé — créer les conditions où quelque chose de figé peut se libérer.`,
      },
      {
        nom: 'Mémoire du Champ',
        type: 'sort_situationnel',
        elements: ['Fée'],
        description_gameplay: `Aethren rappelle un schéma de combat mémorisé. Pour 2 tours, il ignore les penalties de flanc et de terrain — il s'est entraîné pour naviguer des espaces non contrôlés depuis dix ans. Ses esquives augmentent de 25%.`,
        description_lore: `Dix ans à s'approcher clandestinement du Champ, à naviguer des gardes, à lire des terrains non balisés. Chaque approche est mémorisée.`,
      },
      {
        nom: 'Percée',
        type: 'ultimate',
        elements: ['Fée'],
        description_gameplay: `Aethren plonge à travers toute ligne ennemie sur 6 cases en ligne droite, touchant toutes les unités sur son passage (dégâts réduits) avant d'atteindre sa cible principale avec dégâts pleins. Pendant ce déplacement, il est insensible aux attaques d'opportunité. Temps de recharge : 4 tours.`,
        description_lore: `Le mouvement qu'il s'est imaginé faire depuis l'âge de douze ans : traverser tout ce qui sépare du Champ, arriver à Karev, côté est.`,
      },
      {
        nom: 'Givre Probable',
        type: 'passif',
        elements: ['Fée', 'Glace'],
        description_gameplay: `Passif. Chaque fois qu'Aethren anticipe correctement le mouvement d'un ennemi (attaque Plongée Probable réussie en critique), il gagne une charge de Givre Probable (max 3). Chaque charge réduit son prochain temps de recharge de 1 tour.`,
        description_lore: `L'élément Fée amplifié par l'environnement de glace. Plus il anticipe correctement, plus le prochain coup vient vite.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Aethren',
      description: `Givrin masculin, 29 ans, 1m90, silhouette plus mobile que la moyenne Givrine. Peau blanc-bleuté avec micro-cristaux aux tempes. Yeux bleu pâle presque incolores, regard rapide et évaluateur — inhabituel pour un Givrin. Cheveux blanc-argent courts. Tenue de Plongeur fonctionnelle, sans insigne de faction. Chaîne au cou avec fragment de glace. Expression tendue, concentrée, quelqu'un qui attend le bon moment. Fond : abords du Champ Gelé d'Iskral en hiver, silhouettes visibles dans la glace à distance. Style concept art Riot Games, tons bleu-blanc-argent.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1300,

  lore_long: `KAREV, CÔTÉ EST
Un chapitre de la vie d'Aethren, Plongeur Dissident à Iskral

—

I.

Il avait mémorisé le visage depuis les portraits de famille.

L'arrière-grand-père s'appelait Karev. Cheveux longs — bien sûr, tous les hommes de la famille avaient les cheveux longs, Aethren était l'exception. Un mètre quatre-vingt, pas plus, ce qui pour un Givrin était la taille d'un homme ordinaire. Regard lent, intense. Les portraits le montraient toujours de trois quarts, jamais de face — une convention esthétique de l'époque. Son grand-père avait dit que Karev regardait rarement directement quelqu'un qu'il ne connaissait pas. La confiance se gagnait.

Il y avait trois cent douze ans que Karev était dans le côté est du Champ Gelé. Trois cent douze ans que la famille transmettait son portrait et l'histoire de ce qui s'était passé. La guerre, la coalition, l'Élu Karath qui avait figé tout le monde pour sauver Iskral — ou pour autre chose selon les versions. Et Karev qui était là parce que c'était sa génération et qu'il y avait une guerre.

Aethren avait grandi avec ça. Son père ne l'avait pas rendu triste — il l'avait rendu précis. On ne pleure pas un arrière-grand-père qu'on n'a pas connu. On cherche comment le libérer.

—

II.

À seize ans, il avait touché la glace du Champ pour la première fois.

Il avait du se glisser entre deux rondes de garde pendant une nuit de tempête — la tempête couvrait les flux Glace qui auraient détecté sa présence. Cinq mètres de la surface. Sa main sur la glace.

Ce qu'il avait senti : quelque chose de vivant à l'intérieur. Pas de la chaleur — de la potentialité. Comme un système en pause plutôt qu'un système arrêté. Et dans ses propres perceptions élémentaires — la Fée, qui venait de se manifester deux jours avant et qu'il ne maîtrisait pas encore — une lecture claire : les probabilités dans cette glace convergeaient vers quelque chose.

Le Champ était prévu pour dégeler. Pas accidentellement. Par conception.

Il avait pris un fragment de glace en partant. Le fragment n'avait pas fondu depuis. Il le portait au cou depuis treize ans.

—

III.

Les micro-fractures avaient commencé à être visibles il y a dix-huit mois.

Il les suivait depuis un an et demi, approchant le Champ à intervalles variables pour ne pas créer un schéma identifiable pour les gardes. Ce qu'il observait : une progression. Pas rapide — Givrine — mais constante. Les probabilités qu'il lisait avaient changé de nature. Ce n'était plus "le Champ est conçu pour dégeler". C'était "le Champ va dégeler dans les prochains mois ou années".

Quelque chose avait accéléré le processus. Il ne savait pas quoi.

Sylkra l'avait signalé. Keldris l'avait réduite au silence. Il avait appris ça par ses contacts Dissidents et avait senti quelque chose se contracter dans sa poitrine — pas de la surprise, de la confirmation. Les institutions protègent les institutions. La Monarchie savait quelque chose et ne voulait pas de questions.

Il avait contacté Sylkra. Elle avait accepté une rencontre dans le quartier ouest, méfiante. Il lui avait dit qu'elle avait raison sur les micro-fractures. Elle lui avait demandé comment il le savait. Il lui avait dit qu'il les mesurait depuis un an et demi. Elle avait regardé ses instruments artisanaux et ses notes griffonnées sur un carnet non-réglementaire et n'avait rien dit pendant une longue minute.

Puis elle avait dit : — Je croyais être la seule.

—

IV.

La Fée des archives était arrivée neuf ans plus tôt.

Il l'avait remarquée dès le début — une signature Fée dans une ville de Givrins, ça ne passait pas inaperçu pour quelqu'un qui avait le même élément. Impériale, archiviste, accès à tout dans les Archives Gelées. Il avait décidé qu'elle n'était pas utile à ses plans : une employée de l'Empire qui cataloguait des choses pour le compte de la Citadelle.

Il avait changé d'avis deux semaines plus tôt.

Il ne savait pas exactement ce qu'il avait perçu — son élément n'était pas assez formé pour les lectures précises. Mais dans les probabilités autour de la Fée des archives, il y avait quelque chose qui ressemblait à une décision en cours. Quelqu'un qui pesait quelque chose d'important.

Les gens qui pèsent des décisions importantes ont généralement une information qu'ils n'ont pas encore partagée.

Il l'avait suivie dans les marchés du nord. Deux fois. Il n'était pas sûr de la prochaine étape.

—

V.

Ce soir, dans l'appartement qu'il louait sous une identité de travailleur des mines, il avait étalé ses notes.

Côté est du Champ. Fragment de glace au cou. Treize ans de préparation.

Il avait un élément Fée non-déclaré qui lui donnait des lectures de probabilité. Il avait des mesures des micro-fractures sur dix-huit mois. Il avait un contact dans Sylkra. Il avait une Fée impériale qui gardait un secret.

Et Thyval, l'archiviste de la Monarchie, avait trouvé quelque chose dans les serments.

Les probabilités pointaient vers les prochains mois. Convergence de plusieurs fils vers le même point.

Il avait appris à faire confiance à ses lectures depuis seize ans. Ce qu'elles lui disaient maintenant : la fenêtre s'ouvre. Il devait être dedans avant qu'elle se referme.

Il avait pris le fragment de glace du Champ dans ses mains. Toujours froid. Toujours stable. Toujours vivant.

Karev, côté est. Il serait là.`.trim(),
};

export default lore;
