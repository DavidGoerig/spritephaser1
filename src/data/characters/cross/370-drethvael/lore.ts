import type { PersonnageLoreComplet } from '../../../lore-types';

const drethvael: PersonnageLoreComplet = {
  id: 370,
  nom: 'Drethvael',
  element: 'Gravité',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Déserts',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien massif avec des bras adaptés à la manipulation de charges lourdes — il soulève des instruments de mesure géologiques que d\'autres personnes ne pourraient pas transporter seules dans les zones d\'accès difficile de la Fosse.',
    peau: 'Gris terreux Chthonien avec des marques de compression gravitationnelle aux épaules et aux avant-bras — des zones où la pression de ses propres capacités laisse des traces sur le long terme.',
    yeux: 'Ocre avec une qualité de lecture des strates — il voit la composition des sols et des roches comme un texte.',
    vetements: 'Tenue de terrain géologique — renforcée aux zones de contact avec les roches, avec des compartiments pour les instruments de mesure. Fonctionnelle et abîmée.',
    signes_particuliers: 'Il teste la gravité de chaque zone où il entre — un léger champ gravitationnel pour sentir les anomalies ambiantes. Une habitude des zones d\'anomalie qui l\'a sauvé plusieurs fois.',
  },

  psychologie: {
    dominante: 'Mesure des anomalies gravitationnelles dans les zones proches de la Fosse Interdite — cartographie des zones où la gravité dévie de la norme, identification de ce que ces déviations révèlent sur ce qu\'il y a sous la surface.',
    mecanisme_de_defense: 'Les données comme réponse. Il mesure. Ce qu\'il mesure est réel. Les implications de ce qu\'il mesure sont une autre question — une question pour d\'autres.',
    contradiction_interne: 'Ses mesures indiquent quelque chose d\'actif sous la Fosse — pas des formations géologiques statiques mais des anomalies qui évoluent dans le temps. Il ne sait pas ce que c\'est. Narev (21) lui a posé des questions sur ces évolutions qui suggèrent que Narev en sait plus que lui.',
    rapport_aux_autres: 'Narev (21) est son contact pour l\'accès aux zones proches de la Fosse — Narev facilite certains passages dans des zones théoriquement fermées. Kareol (183) est un géologue impérial dont les données complémentent les siennes sur les strates.',
    vision_du_monde: 'La Fosse Interdite est un phénomène géologique d\'une magnitude qui dépasse les modèles connus. Ce qu\'il mesure n\'entre pas dans les catégories disponibles. C\'est fascinant et inconfortable.',
  },

  histoire: {
    enfance: {
      titre: 'Les tunnels d\'Ormn-Dur',
      contenu: 'À 14 ans, dans les zones frontalières entre les Déserts et Ormn-Dur, il avait perçu pour la première fois une anomalie gravitationnelle dans un tunnel — une zone où ses capacités Gravité rencontraient une résistance anormale. Il avait passé 3 jours à cartographier cette zone.',
    },
    arrivee: {
      titre: 'La première mission Fosse',
      contenu: 'À 26 ans, Narev (21) lui avait proposé un accès à des zones proches de la Fosse contre des données de mesure gravitationnelle. L\'accord était simple. Narev recevait les données. Drethvael accédait aux zones. Il avait accepté sans demander pourquoi Narev voulait ces données.',
    },
    premier_conflit: {
      titre: 'L\'évolution des anomalies',
      contenu: 'À 30 ans, il avait comparé ses mesures sur 4 ans et réalisé que les anomalies gravitationnelles évoluaient — des patterns cycliques, pas des formations statiques. Quelque chose sous la Fosse avait un cycle. Il avait rapporté à Narev. Narev avait demandé des précisions sur le cycle sans paraître surpris.',
    },
    revelation: {
      titre: 'La question de Narev',
      contenu: 'Narev lui avait posé une question spécifique : les anomalies gravitationnelles suivaient-elles le même cycle dans toutes les zones proches de la Fosse ou y avait-il des variations locales ? La question était trop précise pour quelqu\'un qui ne savait pas déjà. Narev savait quelque chose qu\'il ne lui avait pas dit.',
    },
    etat_actuel: {
      titre: 'Les mesures du cycle',
      contenu: 'Il a documenté 3 cycles complets d\'anomalies gravitationnelles — chaque cycle dure environ 18 mois. L\'anomalie actuelle est au pic du 4ème cycle. Les mesures indiquent une amplitude plus forte que les cycles précédents. Il n\'a pas encore compris ce que ça signifie.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drethvael_4eme_cycle',
      titre: 'L\'amplitude du 4ème cycle',
      description: 'Le 4ème cycle d\'anomalies gravitationnelles sous la Fosse a une amplitude plus forte que les trois précédents. C\'est une progression — chaque cycle est plus intense. Narev (21) a demandé à être informé en priorité des variations. L\'amplitude actuelle dépasse les mesures précédentes de 23%.',
      personnages_impliques: [21, 183],
      declencheur: 'Observation de la progression d\'amplitude des cycles gravitationnels',
      consequence: 'Alerte à Narev sur le dépassement de l\'amplitude précédente — implications inconnues',
    },
    {
      id: 'drethvael_narev_secret',
      titre: 'Ce que Narev sait',
      description: 'La précision des questions de Narev (21) indique une connaissance préalable des cycles. Narev lui donne l\'accès mais ne lui donne pas l\'interprétation. Il mesure quelque chose dont Narev comprend peut-être la nature. Ce déséquilibre d\'information est inconfortable mais pas actionnable — sans accès aux zones, ses mesures s\'arrêtent.',
      personnages_impliques: [21, 183],
      declencheur: 'Questions trop précises de Narev sur les cycles gravitationnels',
      consequence: 'Déséquilibre d\'information non résolu — dépendance à l\'accès fourni par Narev',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Géologue Chthonien mesurant les cycles gravitationnels sous la Fosse Interdite. 4ème cycle en cours avec amplitude 23% supérieure aux précédents. Narev (21) sait plus qu\'il ne dit — les questions posées le confirment.',

  relations: [
    { id: 21, nom: 'Narev', type: 'allié', note: 'Fournit l\'accès aux zones proches de la Fosse contre les données de mesure. Sait plus que ce qu\'il partage.' },
    { id: 183, nom: 'Kareol', type: 'allié', note: 'Géologue impérial. Données complémentaires sur les strates.' },
  ],

  combat: {
    sorts: [
      'Compression gravitationnelle (Gravité) — compression d\'une zone ou d\'une cible — immobilisation physique',
      'Sonde de strate (Sol) — envoi d\'une vibration à travers le sol — cartographie des structures souterraines',
      'Anomalie de champ (Gravité + Sol) — création d\'une zone de gravité déviante — désorientation des adversaires dans une zone définie',
    ],
  },

  image_prompts: [
    {
      id: 'drethvael_mesure',
      description: 'Drethvael dans une zone rocheuse proche de la Fosse Interdite — ses instruments de mesure gravitationnelle disposés autour de lui, ses mains posées sur le sol percevant les anomalies directement. Une expression de concentration et d\'inquiétude mêlées — les données qu\'il lit ne correspondent pas à ses modèles.',
      style: 'réaliste géologue Chthonien, zone de la Fosse Interdite, instruments gravitationnels, lecture directe',
    },
  ],

  lore_long: `Drethvael mesure les anomalies gravitationnelles dans les zones proches de la Fosse Interdite. 4 cycles documentés — chaque cycle d'environ 18 mois est plus intense que le précédent. Le 4ème cycle actuel dépasse les précédents de 23%.

Narev (21) lui fournit l'accès aux zones et lui pose des questions trop précises pour quelqu'un qui ne saurait pas déjà. Ce que Narev sait de ces cycles reste non partagé.`,
};

export default drethvael;
