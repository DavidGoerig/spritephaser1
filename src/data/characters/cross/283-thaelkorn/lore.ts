import type { PersonnageLoreComplet } from '../../../lore-types';

const thaelkorn: PersonnageLoreComplet = {
  id: 283,
  nom: 'Thaelkorn',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Moyen, avec des mains disproportionnément grandes pour son corps — mains de soigneur, capables de sentir ce qu\'elles touchent.',
    peau: 'Ocre clair Sylvan avec des marques végétales aux paumes — là où il touche les arbres le plus souvent. Ses mains ont toujours de la sève.',
    yeux: 'Brun chaud avec une qualité attentive. Quand il examine un arbre, ses yeux changent légèrement de texture — l\'élément Fée qui se synchronise.',
    vetements: 'Tenue pratique de soin forestier avec des genouillères renforcées — il passe beaucoup de temps à genoux près des racines. Toujours des outils de jardiniers dans les poches.',
    signes_particuliers: 'Il dit que certains arbres "sonnent creux" — ce n\'est pas métaphorique. Quand il frappe légèrement l\'écorce, il entend quelque chose que les autres n\'entendent pas. Les arbres "vides" font un son différent pour lui.',
  },

  psychologie: {
    dominante: 'Soin précis des choses qui peuvent encore être sauvées. Il est réaliste sur ce qui est perdu et attentif à ce qui ne l\'est pas encore.',
    mecanisme_de_defense: 'La tâche immédiate. Quand la situation globale est accablante, il y a toujours un arbre spécifique devant lui qui a besoin d\'une attention spécifique.',
    contradiction_interne: 'Il peut sentir quand un arbre est "vide" — quand la mémoire qu\'il portait a disparu. Cette absence est aussi une information. Il ne sait pas si cette information a une utilité ou si elle documente juste une perte.',
    rapport_aux_autres: 'Thalorn (33) lui a appris ce que "vide" signifiait vraiment — pas juste un arbre mort, mais un arbre dont la mémoire s\'est effacée avant l\'arbre lui-même. C\'est différent d\'un arbre tué par la Faim. Sylketh (116) lui amène des arbres malades qu\'il a trouvés en route.',
    vision_du_monde: 'On peut soigner un arbre blessé. On ne peut pas restaurer un arbre vide. La distinction entre les deux est ce qu\'il a passé 15 ans à apprendre à faire fiablement.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui entendait creux',
      contenu: 'La capacité à sentir le "vide" des arbres était apparue à 12 ans — pendant la Faim des Racines, quand les premiers arbres commençaient à mourir. Il frappait les troncs et certains sonnaient différemment. Il ne savait pas ce que ça signifiait. Il avait demandé à sa mère, qui était morte sans avoir répondu.',
    },
    arrivee: {
      titre: 'La question à Thalorn',
      contenu: 'À 19 ans, il avait rejoint les Conservateurs et posé la question à Thalorn. Thalorn lui avait répondu : ce qu\'il entendait était la différence entre un arbre qui portait sa mémoire et un arbre dont la mémoire s\'était effacée. L\'effacement pouvait précéder la mort physique de plusieurs années. C\'était une information que personne d\'autre ne pouvait détecter aussi tôt.',
    },
    premier_conflit: {
      titre: 'L\'arbre qu\'il n\'a pas pu soigner',
      contenu: 'Son premier arbre "vide" qu\'il avait essayé de soigner — 8 mois de traitement avant d\'admettre que la mémoire était partie avant qu\'il arrive. L\'arbre avait survécu physiquement encore 3 ans. C\'était un succès de survie et un échec de restauration. Il avait documenté les deux séparément.',
    },
    revelation: {
      titre: 'Le pattern du vide',
      contenu: 'Après 10 ans, il avait commencé à cartographier les arbres vides — leur position dans la forêt, le moment de leur effacement, les patterns de propagation. Ce n\'était pas simplement une répartition aléatoire. L\'effacement suivait des lignes qu\'il avait tracées sur une carte. Ces lignes ressemblaient aux anciens réseaux racinaires de Thalindre (Sylindra, 37) — mais en négatif.',
    },
    etat_actuel: {
      titre: 'La carte du vide',
      contenu: 'Sa carte des arbres vides couvre maintenant 12 ans d\'observations. Il n\'est pas certain de ce qu\'elle signifie. Il l\'a montrée à Thalorn qui avait eu l\'air surpris. Il ne l\'a montrée à personne d\'autre. Sylindra (37) est la personne qui pourrait peut-être interpréter les lignes — mais il ne la connaît pas directement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thaelkorn_carte_du_vide',
      titre: 'Les lignes en négatif',
      description: 'Sa carte des arbres vides sur 12 ans dessine des lignes qui ressemblent aux anciens réseaux racinaires de Thalindre — mais en négatif. L\'effacement des mémoires suit les mêmes routes que le réseau perdu, dans l\'ordre inverse. Il ne sait pas si c\'est une coïncidence, un mécanisme, ou une trace de quelque chose d\'actif. Sylindra pourrait peut-être interpréter.',
      personnages_impliques: [37, 33],
      declencheur: 'Cartographie de 12 ans d\'observations',
      consequence: 'Données uniques potentiellement interprétables par Sylindra — connexion non établie',
    },
    {
      id: 'thaelkorn_sylketh_route',
      titre: 'Les arbres de passage',
      description: 'Sylketh (116) lui amène des signalements d\'arbres malades trouvés sur ses routes de chanteur. Ces arbres sont souvent dans des zones que Thaelkorn ne couvrirait pas seul — ils élargissent sa carte sans se concerter explicitement. Sylketh transporte des informations sans savoir que les informations qu\'il transporte sont cartographiques.',
      personnages_impliques: [116],
      declencheur: 'Collaboration informelle via les routes de Sylketh',
      consequence: 'Extension involontaire de la carte grâce aux signalements de Sylketh',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Diagnostic précoce de la perte mémorielle des arbres. Sa carte est peut-être la clé pour comprendre le mécanisme de la Faim des Racines.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'mentor', note: 'A nommé ce qu\'il entendait. Lui a montré la carte. A eu l\'air surpris.' },
    { id: 116, nom: 'Sylketh', type: 'allié', note: 'Source de signalements d\'arbres malades sur ses routes. Collaboration non explicite.' },
    { id: 37, nom: 'Sylindra', type: 'contact_nécessaire', note: 'La personne qui pourrait interpréter les lignes de sa carte. Ne se connaissent pas.' },
  ],

  combat: {
    sorts: [
      'Diagnostic végétal (Plante) — lecture immédiate de l\'état de santé d\'un organisme végétal — identification des vulnérabilités',
      'Résonance Fée (Fée) — synchronisation avec l\'état émotionnel d\'un lieu végétal — désorientation des intrus',
      'Soin racinaire (Plante) — traitement en profondeur des systèmes racinaires abîmés — efficace sur blessures non mortelles',
    ],
  },

  image_prompts: [
    {
      id: 'thaelkorn_arbre',
      description: 'Thaelkorn les mains posées à plat sur l\'écorce d\'un arbre, les yeux légèrement modifiés par l\'élément Fée. Il est concentré. Il écoute ce que l\'arbre lui dit. À ses pieds, sa carte roulée dans son sac.',
      style: 'réaliste sylvan, lumière de forêt filtrée, concentration silencieuse, connexion physique avec le végétal',
    },
  ],

  lore_long: `Thaelkorn entend le vide.

Quand un arbre perd sa mémoire — quand l'effacement précède la mort physique — l'écorce sonne différemment à ses mains. Ce n'est pas une métaphore. C'est une capacité qui lui est apparue à 12 ans, pendant les premiers mois de la Faim des Racines, et que Thalorn lui a appris à nommer 7 ans plus tard.

Il a cartographié les arbres vides pendant 12 ans. Les lignes que sa carte dessine ressemblent aux anciens réseaux racinaires de Thalindre — en négatif. L'effacement suit les mêmes routes que le réseau perdu, dans l'ordre inverse.

Il ne sait pas ce que ça signifie. Thalorn avait l'air surpris. Il n'a montré la carte à personne d'autre.

Sylindra travaille sur un fragment de réseau racinaire actif. Si quelqu'un pouvait interpréter les lignes de sa carte, ce serait elle. Ils ne se connaissent pas.

Sylketh lui signale des arbres malades sur ses routes de chanteur sans savoir que ces signalements étendent une cartographie. La carte grandit. Les lignes se précisent. La question de ce qu'elles signifient reste ouverte.`,
};

export default thaelkorn;
