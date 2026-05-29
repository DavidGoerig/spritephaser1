import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvae: PersonnageLoreComplet = {
  id: 31,
  nom: 'Sylvae',
  element: 'Plante',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de 44 ans — une forme qui rappelle les arbres-mémoire qu\'elle cherche à préserver. Grande, avec des mouvements lents et délibérés. Ses mains sont constamment en contact avec la végétation autour d\'elle — une habitude de connexion permanente.',
    peau: 'Verte profonde Sylvan avec des veines de sève visibles aux avant-bras sous un éclairage direct. Ses paumes sont plus rugueuses que la normale — des années à toucher les écorces des arbres-mémoire.',
    yeux: 'Verts avec une luminescence végétale subtile — elle voit les réseaux racinaires là où d\'autres voient de la terre. Cette perception fonctionne aussi sur les arbres-mémoire : elle ressent leur état comme une extension de sa propre conscience.',
    vetements: 'Tenue de forêt — verts et bruns qui se fondent dans la végétation. Des poches pour ses outils botaniques. Des protections aux genoux et aux coudes pour les explorations souterraines des réseaux racinaires.',
    signes_particuliers: 'Elle s\'arrête parfois au milieu d\'une conversation et pose une main sur l\'arbre le plus proche — elle "vérifie". Ce n\'est pas de l\'inattention : elle monitore en permanence l\'état des arbres-mémoire de la zone.',
  },

  psychologie: {
    dominante: 'Chercher les fragments survivants du réseau racinaire de Thalindre détruit lors de la Faim des Racines — son arrière-grand-mère est morte dans un arbre-mémoire dévoré. Sa vie entière est une réponse à cette perte, 3 générations plus tard.',
    mecanisme_de_defense: 'La continuité comme identité. Elle s\'inscrit dans une lignée de Sylvans qui ont choisi de ne pas accepter la Faim des Racines comme définitive. Tant qu\'elle cherche, la Faim n\'a pas gagné.',
    contradiction_interne: 'Elle cherche les fragments survivants mais Sylindra (37) en a trouvé un — et ne sait pas encore qu\'il est actif. Sylvae pressent qu\'il existe un fragment actif quelque part. Si elle trouvait Sylindra, la découverte serait réelle. Elle n\'a pas encore trouvé le lien entre ce qu\'elle pressent et ce que Sylindra a trouvé.',
    rapport_aux_autres: 'Kessyn (32) est son antagoniste structurel — il croit que certains arbres corrompus doivent brûler, ce qui entre en conflit direct avec la conservation. Aelvyn (119) cherche à reconstruire le réseau racinaire en parallèle sans savoir que Sylindra a trouvé quelque chose. Sylindra (37) elle-même est la connexion qu\'elle n\'a pas encore faite.',
    vision_du_monde: 'La Faim des Racines a détruit quelque chose d\'irremplaçable mais n\'a pas tout détruit. Ce qui survit après une catastrophe est réel et mérite d\'être cherché avec autant de rigueur que ce qui a été perdu.',
  },

  histoire: {
    enfance: {
      titre: 'L\'arrière-grand-mère dans l\'arbre',
      contenu: 'À 8 ans, elle avait entendu l\'histoire pour la première fois : son arrière-grand-mère Sylveth avait été absorbée dans un arbre-mémoire pendant la Faim des Racines — pas tuée, absorbée. L\'arbre avait été dévoré après. Sylveth était dans l\'arbre quand il avait disparu. À 8 ans, elle avait demandé si l\'arbre pouvait être retrouvé. On lui avait dit que non.',
    },
    arrivee: {
      titre: 'La première exploration',
      contenu: 'À 20 ans, elle avait commencé ses explorations formelles des zones de l\'ancienne Faim des Racines. Elle avait cartographié des réseaux racinaires mort sur des dizaines de kilomètres — des traces de ce qui avait existé avant. En 24 ans d\'exploration, elle avait trouvé 3 fragments de réseaux racinaires survivants, aucun actif.',
    },
    premier_conflit: {
      titre: 'Le désaccord avec Kessyn',
      contenu: 'À 28 ans, lors d\'une exploration conjointe avec Kessyn (32), il avait voulu brûler un arbre qu\'elle cherchait à étudier — il le jugeait corrompu, potentiellement porteur de la contamination de la Faim. Elle avait refusé. La dispute avait duré 3 jours. L\'arbre avait finalement été préservé. Kessyn et elle ne s\'accordaient plus sur ce principe depuis.',
    },
    revelation: {
      titre: 'Le pressentiment d\'un fragment actif',
      contenu: 'À 40 ans, lors d\'une exploration dans une zone reculée de Sylvera, elle avait senti quelque chose dans les réseaux racinaires — une activité qui n\'était pas là les fois précédentes. Elle avait cherché la source pendant 2 semaines sans la trouver. Le pressentiment persistait. Quelque chose était actif quelque part dans la zone.',
    },
    etat_actuel: {
      titre: 'La zone de Sylindra',
      contenu: 'Sylindra (37) explore une zone adjacente à la sienne depuis 6 mois. Elle ne sait pas encore ce que Sylindra a trouvé — elles ne se sont pas coordonnées. Mais les zones qu\'elles explorent toutes les deux correspondent à la zone où elle avait senti l\'activité racinaire 4 ans plus tôt.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvae_sylindra',
      titre: 'Le fragment actif',
      description: 'Sylindra (37) a trouvé quelque chose — et ne sait pas encore que c\'est actif. Sylvae pressent un fragment actif dans la zone adjacente. Si elles se rencontraient, la connexion entre ce que Sylindra a trouvé et ce que Sylvae cherche depuis 4 ans se ferait. Mais leurs explorations sont indépendantes et elles ne se connaissent pas encore directement.',
      personnages_impliques: [37, 119],
      declencheur: 'Convergence entre le pressentiment de Sylvae et la découverte de Sylindra dans une zone adjacente',
      consequence: 'Si elles se trouvent, la première découverte d\'un fragment actif depuis la Faim des Racines devient réelle',
    },
    {
      id: 'sylvae_kessyn',
      titre: 'Le désaccord sur les arbres corrompus',
      description: 'Kessyn (32) a identifié plusieurs arbres dans la zone d\'exploration de Sylvae qu\'il juge corrompus et qu\'il veut brûler. Ces arbres sont dans la zone où elle a pressenti l\'activité racinaire. Si Kessyn brûle avant qu\'elle n\'ait pu explorer, la piste de 4 ans disparaît.',
      personnages_impliques: [32, 37],
      declencheur: 'Plan de Kessyn d\'éliminer des arbres dans la zone du pressentiment de Sylvae',
      consequence: 'Urgence d\'exploration avant l\'intervention de Kessyn — et rencontre forcée avec Sylindra si la zone est atteinte à temps',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Chercheure des fragments survivants du réseau racinaire de Thalindre depuis 24 ans. Pressent un fragment actif dans une zone adjacente à celle de Sylindra (37). Kessyn (32) veut brûler des arbres dans cette zone.',

  relations: [
    { id: 37, nom: 'Sylindra', type: 'contact', note: 'Explore une zone adjacente. A trouvé quelque chose qu\'elle pressent depuis 4 ans. Pas encore connectées.' },
    { id: 32, nom: 'Kessyn', type: 'adversaire', note: 'Veut brûler des arbres qu\'elle cherche à étudier. Désaccord fondamental depuis 16 ans.' },
    { id: 119, nom: 'Aelvyn', type: 'allié', note: 'Cherche à reconstruire le réseau racinaire en parallèle sans savoir que Sylindra a trouvé quelque chose.' },
  ],

  combat: {
    sorts: [
      'Réseau racinaire (Plante) — extension de racines dans le sol — immobilisation d\'une cible ou cartographie souterraine',
      'Barrière de croissance (Plante) — mur de végétation dense — obstacle ou protection',
      'Mémoire végétale (Plante) — connexion à un arbre-mémoire — accès aux informations stockées dans ses fibres',
    ],
  },

  image_prompts: [
    {
      id: 'sylvae_foret',
      description: 'Sylvae dans la forêt de Sylvera — une Sylvan de 44 ans agenouillée près des racines d\'un vieil arbre, une main à plat sur l\'écorce, les yeux fermés. Ses veines de sève sont visibles sous sa peau. L\'expression sur son visage est de concentration et de quelque chose qui ressemble à de l\'espoir retenu.',
      style: 'réaliste Sylvan chercheure de fragments, forêt de Sylvera, connexion racinaire, arbres-mémoire, pressentiment',
    },
  ],

  lore_long: `Sylvae cherche les fragments survivants du réseau racinaire de Thalindre depuis 24 ans. Son arrière-grand-mère est morte dans un arbre-mémoire dévoré lors de la Faim des Racines.

À 40 ans, elle a pressenti quelque chose d'actif dans une zone reculée de Sylvera. Elle n'a pas trouvé la source.

Sylindra (37) explore une zone adjacente depuis 6 mois et a trouvé quelque chose qu'elle ne sait pas encore être actif. Leurs explorations convergent. Elles ne se connaissent pas encore.`,
};

export default sylvae;
