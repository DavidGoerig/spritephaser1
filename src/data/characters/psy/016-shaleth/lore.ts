import type { PersonnageLoreComplet } from '../../../lore-types';

const shaleth: PersonnageLoreComplet = {
  id: 16,
  nom: 'Shaleth',
  element: 'Psy',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 52 ans — la silhouette d\'une diplomate expérimentée. Droite sans raideur, présente sans ostentation. Ses gestes sont économiques et précis, comme ses informations.',
    peau: 'Bleutée Néréide avec une luminescence discrète — plus visible quand elle utilise ses capacités Psy, ce qu\'elle fait rarement en public. Ses mains sont parfaitement soignées.',
    yeux: 'Bleu-violet Psy avec une qualité d\'évaluation qui dépasse le registre ordinaire — elle voit les états émotionnels, les hésitations, les contradictions entre ce qui est dit et ce qui est ressenti. En réunion, elle regarde les personnes qui ne parlent pas.',
    vetements: 'Tenue de Confédération de haut rang — bleu marine avec des détails argent. Ni trop formelle ni trop décontractée. Elle gère son apparence avec la même précision qu\'elle gère l\'information.',
    signes_particuliers: 'Elle acquiesce légèrement quand elle lit quelque chose de vrai — une micro-expression que les personnes qui la connaissent reconnaissent. Elle ne sait pas qu\'elle le fait.',
  },

  psychologie: {
    dominante: 'Filtrage illégal de l\'information pour la Confédération depuis 12 ans — elle décide quelle information circule dans les réseaux de Thalassyr et laquelle est retenue ou retardée. Elle se dit que c\'est pour la stabilité. C\'est aussi pour son pouvoir.',
    mecanisme_de_defense: 'La neutralité comme narration personnelle. Elle se convainc qu\'elle ne penche pour personne — elle gère l\'information pour maintenir l\'équilibre. Le problème est que maintenir l\'équilibre requiert des choix, et ses choix ne sont pas neutres.',
    contradiction_interne: 'Elle lit les états émotionnels des personnes — elle sait mieux que quiconque quand quelqu\'un souffre d\'une décision. Elle a vu l\'impact de ses filtres sur des personnes concrètes. Elle continue parce que l\'alternative (l\'information non filtrée) lui semble pire.',
    rapport_aux_autres: 'Velara (81) travaille sous elle et filtre les communications en bas de la chaîne sans savoir que Shaleth fait la même chose plus haut — une duplication involontaire. Lyseth (88) a trouvé ses journaux privés dans ses caches — c\'est l\'élément le plus dangereux pour elle actuellement.',
    vision_du_monde: 'L\'information non filtrée dans un système aussi interdépendant que Thalassyr créerait du chaos. Quelqu\'un doit faire les choix sur ce qui circule. Mieux vaut quelqu\'un qui comprend les conséquences que quelqu\'un qui ne les comprend pas.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élève Psy',
      contenu: 'À 14 ans, ses capacités Psy avaient été reconnues et développées dans l\'École des Flux de Néris. Elle avait appris à lire les états émotionnels, les tensions collectives, les dynamiques de groupe. Ses instructeurs l\'avaient notée comme "exceptionnellement adaptée à la gestion des situations de tension".',
    },
    arrivee: {
      titre: 'La montée dans la Confédération',
      contenu: 'À 28 ans, elle était entré dans l\'administration de la Confédération comme analyste de liaison. Ses capacités Psy lui avaient permis de résoudre des situations de négociation que les autres diplomates échouaient. En 10 ans, elle était devenue l\'une des personnes les plus influentes dans les flux d\'information de Thalassyr.',
    },
    premier_conflit: {
      titre: 'Le premier filtre',
      contenu: 'À 40 ans, lors d\'une crise diplomatique entre l\'Empire et les Dissidentes passant par les canaux de Thalassyr, elle avait retenu une information pendant 48 heures pour "évaluer son impact". Ces 48 heures avaient changé l\'issue de la crise. Elle avait mesuré l\'ampleur de ce que "gérer l\'information" voulait dire.',
    },
    revelation: {
      titre: 'Les journaux de Lyseth',
      contenu: 'Elle avait caché ses journaux personnels dans plusieurs caches à Néris — des analyses de ses propres décisions de filtrage, des doutes qu\'elle ne montrait à personne. Lyseth (88) avait trouvé un de ces journaux dans une de ses caches. Elle sait que Lyseth a trouvé quelque chose. Elle ne sait pas exactement quoi.',
    },
    etat_actuel: {
      titre: 'La surveillance de Lyseth',
      contenu: 'Elle fait surveiller Lyseth (88) depuis 3 semaines par un contact indirect. Lyseth a rejoint le réseau Dissident de Vel (17) — ce qui signifie que ce que Lyseth a trouvé pourrait avoir voyagé. Elle prépare une réponse. Elle ne sait pas encore laquelle.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shaleth_lyseth',
      titre: 'Le journal trouvé',
      description: 'Lyseth (88) a trouvé un journal de Shaleth dans une de ses caches. Ce journal documente des décisions de filtrage sur 5 ans — des informations retenues, des informations accélérées, les raisons invoquées et parfois les vraies raisons. Si ce journal atteint Vel (17) ou Thariel (18), l\'infrastructure de contrôle de Shaleth est exposée.',
      personnages_impliques: [88, 17],
      declencheur: 'Découverte d\'un journal compromettant par Lyseth et son intégration au réseau Dissident',
      consequence: 'Risque d\'exposition du système de filtrage — réponse de Shaleth en préparation',
    },
    {
      id: 'shaleth_velara',
      titre: 'Le doublon involontaire',
      description: 'Velara (81) filtre les communications en bas de la chaîne selon des protocoles que Shaleth a établis — mais Velara croit agir selon des règles neutres, pas selon la volonté personnelle de Shaleth. Si Velara comprenait que ses filtres sont une extension des choix de Shaleth, leur relation changerait.',
      personnages_impliques: [81, 83],
      declencheur: 'Proximité croissante de Velara avec les décisions de filtrage de haut niveau',
      consequence: 'Risque que Velara comprenne la structure réelle — ou soit utilisée comme bouclier si l\'exposition arrive',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Filtreuse d\'information de la Confédération à Thalassyr depuis 12 ans. Ses journaux privés ont été trouvés par Lyseth (88) qui a rejoint le réseau Dissident. Prépare une réponse à cette menace d\'exposition.',

  relations: [
    { id: 88, nom: 'Lyseth', type: 'adversaire', note: 'A trouvé un de ses journaux dans ses caches. A rejoint les Dissidentes. Menace principale actuelle.' },
    { id: 81, nom: 'Velara', type: 'allié', note: 'Filtre les communications en bas de la chaîne sans savoir qu\'elle est l\'extension de Shaleth.' },
    { id: 17, nom: 'Vel', type: 'adversaire', note: 'Chef du réseau Dissident à Thalassyr. Destinataire probable du journal de Lyseth.' },
  ],

  combat: {
    sorts: [
      'Lecture d\'intention (Psy) — scan des états émotionnels dans un rayon — identification des intentions avant l\'action',
      'Brouillage Psy (Psy) — perturbation des capacités Psy dans une zone — contre-mesure contre les capteurs',
      'Projection de stress (Psy) — amplification de l\'état émotionnel d\'une cible — déstabilisation sans contact physique',
    ],
  },

  image_prompts: [
    {
      id: 'shaleth_bureau',
      description: 'Shaleth dans son bureau de la Confédération à Néris — une Néréide de 52 ans debout devant une fenêtre donnant sur les flux du réseau artificiel, ses mains jointes dans le dos. Sur son bureau derrière elle : des rapports, des correspondances. Son expression est de concentration totale sur quelque chose qu\'elle ne regarde pas directement.',
      style: 'réaliste diplomate Néréide, bureau de la Confédération, réseau artificiel visible par la fenêtre, maîtrise de soi',
    },
  ],

  lore_long: `Shaleth filtre l'information de Thalassyr depuis 12 ans. Elle décide ce qui circule et ce qui ne circule pas dans les réseaux de communication de Néris. Elle se dit que c'est pour la stabilité.

Ses journaux privés documentent ses vraies raisons — pas toujours aussi neutres que la version officielle. Lyseth (88) a trouvé un de ces journaux dans une de ses caches.

Lyseth a rejoint les Dissidentes de Vel (17). La réponse de Shaleth est en préparation.`,
};

export default shaleth;
