import type { PersonnageLoreComplet } from '../../../lore-types';

const ishal: PersonnageLoreComplet = {
  id: 22,
  nom: 'Ishal',
  element: 'Eau',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 41 ans — la silhouette d\'un plongeur, long et efficace dans l\'eau, légèrement gauche en dehors. Il n\'est pas dans son élément dans les salles de réunion. Il l\'est dans les profondeurs.',
    peau: 'Bleutée Néréide avec des reflets légèrement argentés — l\'effet des pressions aquatiques profondes répétées sur les tissus. Ses mains et ses avant-bras sont légèrement plus pâles que le reste — des heures quotidiennes dans l\'eau.',
    yeux: 'Bleu transparent avec une qualité de vision dans les basses lumières — ses yeux sont adaptés aux profondeurs. Dans les espaces éclairés, ils lui donnent une apparence légèrement absente. Il voit mieux dans le noir.',
    vetements: 'Combinaison de plongée ou tenue légère séchant vite selon le contexte. Aucun ornement. Rien qui s\'accroche ou qui ralentit dans l\'eau.',
    signes_particuliers: 'Il parle de son père avec une fierté non questionnée — Orven a créé les vents artificiels, a sauvé Thalassyr, est un ingénieur de génie. Cette fierté est sincère et ne s\'appuie sur aucune question sur ce que ça a coûté.',
  },

  psychologie: {
    dominante: 'Plongeur et maintien du réseau artificiel de Thalassyr dans les nœuds secondaires — il fait le travail de maintenance que son père Orven (15) a conçu mais ne peut plus effectuer directement. Il est le bras technique de son père sans en avoir le titre.',
    mecanisme_de_defense: 'La confiance dans la technique. Si quelque chose ne fonctionne pas, il y a une raison technique et une solution technique. Les problèmes humains se résolvent de la même façon dans son modèle mental — trouver le nœud défaillant et le réparer.',
    contradiction_interne: 'Il maintient des nœuds du réseau dont certains sont liés à l\'arrangement que son père a accepté avec l\'Empire. Il n\'a pas accès aux nœuds de contrôle centraux. Il ne sait pas exactement pourquoi il n\'y a pas accès. Il suppose que c\'est une question de hiérarchie technique.',
    rapport_aux_autres: 'Orven (15) est son père et son modèle — il ne questionne pas ce que son père a construit parce qu\'il respecte profondément ce que ça représente. Kaeleth (86) est son collègue avec qui il partage des évaluations techniques régulières. Lysara (14) était une figure connue de son enfance — il sait qu\'elle garde quelque chose à propos du vent naturel.',
    vision_du_monde: 'Le réseau artificiel de Thalassyr est une prouesse technique qui mérite d\'être maintenu et amélioré. Ce qu\'on fait avec ce qu\'il permet est une question séparée — et pas vraiment son domaine.',
  },

  histoire: {
    enfance: {
      titre: 'Grandir avec le réseau',
      contenu: 'Il avait grandi avec le réseau artificiel de Thalassyr comme toile de fond — son père en était le créateur, et les vents artificiels faisaient partie de sa réalité dès sa naissance. Il n\'avait jamais connu le vent naturel. Les récits de Lysara (14) sur ce que ça avait été lui semblaient distants, presque mythologiques.',
    },
    arrivee: {
      titre: 'La formation technique',
      contenu: 'À 18 ans, il avait commencé sa formation formelle en maintenance du réseau artificiel avec les techniciens de son père. À 25 ans, il était devenu l\'un des meilleurs plongeurs de maintenance des nœuds secondaires immergés. Son père l\'avait recommandé pour les accès avancés. Certains accès avaient été accordés. Pas tous.',
    },
    premier_conflit: {
      titre: 'Le nœud de contrôle refusé',
      contenu: 'À 32 ans, il avait demandé l\'accès au nœud de contrôle central immergé pour une évaluation de maintenance complète. La demande avait été refusée par la Confédération — "accès réservé aux niveaux supérieurs d\'autorisation". Son père lui avait dit de ne pas insister. Il n\'avait pas insisté. Il avait noté que son père semblait soulagé.',
    },
    revelation: {
      titre: 'Les spécifications inhabituelles',
      contenu: 'À 38 ans, lors d\'une maintenance de routine sur un nœud secondaire, il avait trouvé des connexions vers des systèmes qui n\'apparaissaient dans aucune de ses spécifications techniques officielles. Il avait demandé une clarification à son père. Orven lui avait dit que c\'était des "connexions historiques" qui dataient de la construction originale. Il n\'avait pas questionné davantage.',
    },
    etat_actuel: {
      titre: 'La maintenance qui continue',
      contenu: 'Il maintient les nœuds secondaires du réseau selon les spécifications de son père. La défaillance prévue par Orven dans un nœud secondaire est dans sa zone de responsabilité. Il a lui aussi identifié le problème et fait une demande d\'intervention à la Confédération. Sa demande est aussi "en traitement" depuis 3 semaines.',
    },
  },

  evenements_narratifs: [
    {
      id: 'ishal_connexions',
      titre: 'Les connexions inexpliquées',
      description: 'Les connexions vers des systèmes non documentés qu\'il a trouvées à 38 ans sont dans un nœud qu\'il doit maintenant intervenir pour réparer la défaillance prévue. Cette réparation va l\'amener au cœur du nœud — et peut-être aux connexions inexpliquées. Il devra décider s\'il documente ce qu\'il trouve et à qui il le transmet.',
      personnages_impliques: [15, 86],
      declencheur: 'Réparation de la défaillance prévue nécessitant accès au cœur du nœud',
      consequence: 'Découverte possible de la nature réelle des connexions — et obligation de décision sur la transmission',
    },
    {
      id: 'ishal_orven',
      titre: 'La conversation qui n\'a pas eu lieu',
      description: 'Orven (15) réfléchit à lui parler de l\'arrangement avec l\'Empire. Il n\'a pas encore trouvé le moment. Si Ishal trouve les connexions inexpliquées pendant la réparation, la conversation n\'aurait plus à être initiée — elle serait forcée. Orven sait ça et le temps s\'amenuise.',
      personnages_impliques: [15, 86],
      declencheur: 'Convergence entre la réparation imminente et la décision de transmission d\'Orven',
      consequence: 'Soit Orven parle avant la réparation, soit Ishal découvre par lui-même',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Fils d\'Orven (15) et plongeur de maintenance du réseau artificiel de Thalassyr. Pivot entre l\'arc 2 et l\'arc 3 — ses découvertes dans les nœuds secondaires pourraient connecter les deux fils narratifs. Ne sait pas ce que son père a accepté.',

  relations: [
    { id: 15, nom: 'Orven', type: 'famille', note: 'Son père. Créateur du réseau artificiel. Lui cache l\'arrangement avec l\'Empire. La conversation approche.' },
    { id: 86, nom: 'Kaeleth', type: 'allié', note: 'Collègue de maintenance. Partage des évaluations techniques régulières.' },
    { id: 14, nom: 'Lysara', type: 'contact', note: 'Figure de son enfance. Il sait qu\'elle garde quelque chose sur le vent naturel.' },
  ],

  combat: {
    sorts: [
      'Plongée de combat (Eau) — déplacement ultrarapide dans un milieu aquatique vers une cible — attaque sous-marine',
      'Pression de profondeur (Eau) — application d\'une pression aquatique concentrée sur une zone — écrasement ou confinement',
      'Flux de navigation (Eau) — création d\'un courant directif dans l\'eau — guidage ou redirection de flux',
    ],
  },

  image_prompts: [
    {
      id: 'ishal_maintenance',
      description: 'Ishal en plongée de maintenance dans les profondeurs proches des nœuds immergés du réseau artificiel de Thalassyr — un Néréide de 41 ans travaillant sur une connexion, ses outils dans les mains, l\'eau sombre autour de lui. Sur le nœud qu\'il maintient : une connexion vers quelque chose qu\'il ne comprend pas encore.',
      style: 'réaliste plongeur Néréide, maintenance sous-marine, réseau artificiel, nœuds immergés, découverte imminente',
    },
  ],

  lore_long: `Ishal maintient les nœuds secondaires du réseau artificiel de son père Orven (15). Il n'a jamais eu accès aux nœuds de contrôle centraux. Il n'a jamais insisté, parce que son père avait semblé soulagé qu'il n'insiste pas.

Il a trouvé des connexions vers des systèmes non documentés dans un nœud à 38 ans. Son père a dit que c'était "des connexions historiques". Il n'a pas questionné davantage.

La réparation de la défaillance prévue va l'amener au cœur du nœud. Il va trouver ce que son père lui cache.`,
};

export default ishal;
