import type { PersonnageLoreComplet } from '../../../lore-types';

const thareven: PersonnageLoreComplet = {
  id: 265,
  nom: 'Thareven',
  element: 'Sol',
  element2: 'Roche',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Massif, solidement planté — physique de quelqu\'un dont l\'élément Sol se manifeste dans la façon même d\'occuper l\'espace.',
    peau: 'Ocre rougeâtre, reflets de Roche aux pommettes et aux épaules. Des rides profondes — 55 ans de soleil de Virex.',
    yeux: 'Brun chaud, avec une constance qu\'on pourrait confondre avec de la lenteur et qui est en réalité de la délibération.',
    vetements: 'Costume d\'administrateur de zone, propre mais pratique. Jamais le grade complet — il porte ce qui est requis, pas plus.',
    signes_particuliers: 'Ses mains sont toujours légèrement terreuses malgré le lavage — caractéristique Sol. Il n\'en est pas gêné. Il garde une petite pierre lisse dans la poche droite depuis 30 ans — même pierre.',
  },

  psychologie: {
    dominante: 'Courage par obstination. Il n\'a pas décidé d\'être courageux — il a décidé de ne pas faire quelque chose, et l\'a redécidé chaque mois pendant 7 ans.',
    mecanisme_de_defense: 'L\'oubli délibéré comme catégorie administrative. Ce qu\'il "oublie" d\'inscrire n\'existe pas dans les registres. Ce qui n\'existe pas dans les registres ne peut pas être trouvé.',
    contradiction_interne: 'Il est administrateur d\'une zone impériale. Il a protégé 39 enfants en désobéissant aux procédures impériales pendant 7 ans. Ces deux vérités coexistent. Il ne cherche pas à les réconcilier.',
    rapport_aux_autres: 'Thyven (62) applique la même stratégie d\'oubli délibéré — ils ont eu une conversation il y a 4 ans qui ressemblait à un échange sur les procédures de mise à jour des registres et qui était quelque chose d\'entièrement différent. Ils ne se sont pas revus depuis.',
    vision_du_monde: 'Il y a ce que les registres disent et ce qui existe. Son travail est de maintenir la distance entre les deux aussi longtemps que possible.',
  },

  histoire: {
    enfance: {
      titre: 'Virex, les roches et les registres',
      contenu: 'Né à Virex, fils d\'un mineur et d\'une bibliothécaire municipale. Il avait hérité du rapport physique au terrain de l\'un et de la rigueur documentaire de l\'autre. À 18 ans il était déjà assistant à la mairie — pas par ambition, par utilité naturelle.',
    },
    arrivee: {
      titre: 'Administrateur de zone',
      contenu: 'Nommé administrateur de zone à 39 ans — après 16 ans de travail municipal progressif. Sa zone couvrait plusieurs quartiers de Virex, dont les districts résidentiels où vivaient de nombreuses familles d\'Élus. C\'était un fait de géographie, pas un choix.',
    },
    premier_conflit: {
      titre: 'Le premier enfant oublié',
      contenu: 'Il y a 7 ans, le premier ordre de transfert était arrivé pour un enfant Élu de sa zone — 8 ans, élément Eau, désigné pour un "programme de développement intensif". Thareven avait mis le formulaire dans son tiroir. Il avait dit à son assistant que l\'enfant était "momentanément absent — famille déplacée". L\'enfant était là. Il avait simplement décidé de ne pas le voir dans les registres.',
    },
    revelation: {
      titre: 'Les 38 suivants',
      contenu: 'Pendant 7 ans, 38 autres formulaires étaient arrivés. Il en avait traité chacun de la même façon. La technique s\'était affinée — les catégories de non-existence administratives avaient plusieurs couches maintenant, assez pour résister à un audit superficiel. Il avait aussi appris à ne pas faire ça systématiquement : certains transferts passaient, pour les enfants dont les profils ne lui semblaient pas en danger immédiat. Il avait fait des choix. Il ne sait pas si ces choix étaient justes.',
    },
    etat_actuel: {
      titre: 'Les vérificateurs qui approchent',
      contenu: 'Il y a 3 semaines, il a appris via un contact municipal que des vérificateurs impériaux avaient été envoyés à Virex pour un audit de cohérence des registres d\'Élus — réponse aux demandes répétées de Carevorn (258). Ils arriveraient dans 4 à 6 semaines. Ses failles documentaires résisteraient à un audit standard. Un audit approfondi trouvera les coutures. Il a 4 à 6 semaines pour décider quoi faire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thareven_thyven_conversation',
      titre: 'L\'échange sur les procédures',
      description: 'Il y a 4 ans, Thyven (62) — fonctionnaire d\'un autre secteur de Virex — lui avait demandé un avis sur les "procédures de mise à jour des registres de transferts non-confirmés". La question était techniquement correcte. Ce qu\'elle demandait réellement : est-ce que tu fais la même chose que moi ? Thareven avait répondu en détail technique. La réponse réelle : oui. Ils ne se sont pas revus.',
      personnages_impliques: [62],
      declencheur: 'Question indirecte sur les méthodes d\'oubli délibéré',
      consequence: 'Reconnaissance mutuelle sans coordination — deux administrateurs qui font la même chose indépendamment',
    },
    {
      id: 'thareven_carevorn_adversaire',
      titre: 'L\'adversaire direct',
      description: 'Carevorn (258) cherche exactement ce que Thareven a caché — les 39 enfants qui ont disparu des registres. Ses vérifications répétées ont déclenché l\'audit qui arrive. Ils ne savent pas que l\'autre existe dans ce contexte. Thareven n\'a aucune raison de connaître le nom du capteur impérial qui a commandé les vérifications. Carevorn ne connaît pas le nom de l\'administrateur qui a protégé les enfants.',
      personnages_impliques: [258],
      declencheur: 'Vérifications répétées de Carevorn déclenchant l\'audit',
      consequence: 'Adversaires sans visage — chacun n\'est qu\'une pression dans la structure de l\'autre',
    },
    {
      id: 'thareven_lysael_familles',
      titre: 'Les familles approchées',
      description: 'Lysael (63) approche les familles des 39 enfants que Thareven a protégés — pour des raisons que Thareven ne connaît pas. Il a remarqué que certaines familles qu\'il "surveillait" discrètement semblaient avoir eu des contacts avec quelqu\'un d\'extérieur. Il n\'a pas cherché à identifier qui. Si Lysael est Convergence, ces contacts sont un danger pour les enfants. Si elle est autre chose, c\'est peut-être de l\'aide.',
      personnages_impliques: [63],
      declencheur: 'Contacts non identifiés avec les familles des 39',
      consequence: 'Variable inconnue — Lysael est une question sans réponse pour lui',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Gardien en danger. Il a protégé les 39 pendant 7 ans par obstination mensuelle. Il a 4 à 6 semaines avant que la protection cède.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'allié', note: 'Même stratégie d\'oubli délibéré — reconnus mutuellement via une conversation indirecte, sans coordination depuis.' },
    { id: 258, nom: 'Carevorn', type: 'ennemi', note: 'Son adversaire direct sans visage — cherche les 39 qu\'il a cachés. L\'audit qu\'il a déclenché arrive dans 4-6 semaines.' },
    { id: 63, nom: 'Lysael', type: 'inconnue_qui_change_tout', note: 'Approche les familles des 39 — intention non identifiée. Aide ou danger, Thareven ne sait pas.' },
  ],

  combat: {
    sorts: [
      'Ancrage de Sol (Sol) — stabilisation d\'un terrain instable, résistance au déplacement forcé',
      'Mur de Roche (Roche) — érection d\'une barrière temporaire de roche compactée',
      'Lecture géologique (Sol) — perception des vibrations souterraines — détection de mouvement dans un rayon de 50m',
    ],
  },

  image_prompts: [
    {
      id: 'thareven_bureau',
      description: 'Thareven à son bureau municipal, un formulaire de transfert devant lui, sa main sur la pierre lisse dans sa poche. Il regarde le formulaire avec l\'expression de quelqu\'un qui a pris cette décision 38 fois et qui sait exactement ce qu\'il va faire, mais qui prend quand même un moment.',
      style: 'réaliste humain, lumière de bureau municipal, registres empilés, tons ocre et pierre',
    },
  ],

  lore_long: `Thareven n'a pas décidé d'être courageux.

Il a décidé de ne pas faire quelque chose. Puis il a redécidé le mois suivant, parce que les circonstances sont différentes au deuxième mois, et les risques méritent d'être recalculés. Puis au troisième mois. Puis au septième. 84 redécisions sur 7 ans. Ce n'est pas du courage héroïque — c'est de l'obstination.

La technique s'est affinée. Le premier formulaire qu'il avait mis dans le tiroir était maladroit — une absence dans une colonne qui aurait attiré l'œil d'un auditeur attentif. Maintenant les absences ont des architectures : l'enfant est "temporairement absent — statut de résidence en cours de régularisation", puis "déplacé vers une zone non couverte par ce registre", puis "transfert documentaire en attente de confirmation administrative de la zone d'accueil". Chaque couche est techniquement plausible. Ensemble elles forment un labyrinthe.

Un audit standard ne le trouve pas. Un audit approfondi, oui.

Les vérificateurs arrivent dans 4 à 6 semaines.

Il a la pierre lisse dans la poche. Il la touche quand il réfléchit — un réflexe de 30 ans. Cette nuit il l'a touchée pendant 2 heures.

Il y a 39 enfants dont les registres disent qu'ils n'existent pas de la façon dont l'Empire voudrait les faire exister. Certains ont maintenant entre 15 et 20 ans. Certains ont quitté Virex — il ne sait pas où ils sont. D'autres sont encore là, dans des familles qui ont appris à ne pas poser de questions.

4 à 6 semaines. Il doit décider.`,
};

export default thareven;
