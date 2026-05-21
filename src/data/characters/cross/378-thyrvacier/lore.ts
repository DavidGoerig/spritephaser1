import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvacier: PersonnageLoreComplet = {
  id: 378,
  nom: 'Thyrvacier',
  element: 'Combat',
  element2: 'Acier',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: 'Guerrier Pyrien — imposant avec des bras que l\'entraînement et l\'élément Acier ont progressivement renforcés. Des plaques d\'acier élémentaire cristallisé aux avant-bras et aux épaules — pas de l\'équipement, des excroissances naturelles de ses capacités.',
    peau: 'Rouge foncé Pyrien avec des veinures métalliques argentées aux avant-bras — l\'interpénétration de l\'élément Acier dans la structure physique sur la durée.',
    yeux: 'Orangé avec une intensité de combat — il évalue les capacités physiques d\'un individu avant toute autre chose.',
    vetements: 'Le minimum nécessaire — les plaques d\'acier élémentaire le protègent mieux que n\'importe quel équipement externe. Ce qu\'il porte est fonctionnel.',
    signes_particuliers: 'Il teste les matériaux qu\'il touche — une habitude de ses capacités Acier qui lui permet de connaître la composition et la résistance de ce qu\'il touche.',
  },

  psychologie: {
    dominante: 'Combat physique dans les zones frontalières entre Varkhôl et Ormn-Dur — le Parti de l\'Acier utilise sa maîtrise unique Combat/Acier pour des opérations dans les deux régions, là où les guerriers d\'une seule région ne seraient pas efficaces.',
    mecanisme_de_defense: 'La force comme argument. Il n\'a pas besoin de convaincre — sa présence suffit dans la plupart des contextes. Quand elle ne suffit pas, il combat.',
    contradiction_interne: 'Sa maîtrise est respectée dans les deux régions — Pyriens de Varkhôl et Chthoniens d\'Ormn-Dur. Mais le Parti de l\'Acier l\'utilise dans des conflits entre ces régions. Il a été mis contre des Chthoniens qu\'il respectait. Il l\'a fait.',
    rapport_aux_autres: 'Thryss (4) est un Pyrien Feu de Varkhôl avec qui il a un passé de compétition et de respect mutuel — Thryss l\'a recommandé au Parti de l\'Acier. Skarith (9) est un guerrier Combat de Varkhôl avec qui il s\'est mesuré plusieurs fois — résultat toujours disputé.',
    vision_du_monde: 'La force physique est un langage universel. La maîtrise de ce langage dans ses deux formes — Combat et Acier — lui donne une éloquence rare. Le Parti de l\'Acier comprend cette éloquence et l\'utilise.',
  },

  histoire: {
    enfance: {
      titre: 'L\'acier des volcans',
      contenu: 'À 16 ans, dans les zones volcaniques de Varkhôl où les minerais métalliques affleurent sous la chaleur, il avait découvert qu\'il pouvait sentir et manipuler les structures métalliques — une capacité Acier qui s\'associait naturellement à son entraînement Combat Pyrien.',
    },
    arrivee: {
      titre: 'La recommandation de Thryss',
      contenu: 'À 24 ans, Thryss (4) l\'avait recommandé au Parti de l\'Acier — une faction qui valorisait précisément les combinaisons élémentaires rares. Le Parti avait testé ses capacités pendant 3 mois avant de lui confier les premières missions.',
    },
    premier_conflit: {
      titre: 'Le Chthonien de la frontière',
      contenu: 'À 28 ans, une mission du Parti l\'avait mis contre un guerrier Chthonien des zones frontalières d\'Ormn-Dur — un guerrier dont il avait croisé le chemin lors d\'entraînements communs. Il avait exécuté la mission. Le Chthonien avait survécu. Ils ne s\'étaient pas reparler.',
    },
    revelation: {
      titre: 'Les deux régions',
      contenu: 'Le Parti l\'utilisait spécifiquement dans des zones frontalières où sa maîtrise des deux environnements — chaleur volcanique Pyrien et structures minérales Chthonien — lui donnait un avantage sur des guerriers de l\'une ou l\'autre région. Il était utile parce qu\'il transcendait la frontière. Il opérait contre des personnes des deux côtés de cette frontière.',
    },
    etat_actuel: {
      titre: 'La mission de la frontière',
      contenu: 'Sa mission actuelle le place dans une zone frontalière contestée entre Varkhôl et Ormn-Dur — un territoire que le Parti de l\'Acier cherche à contrôler pour ses ressources minérales. Skarith (9) opère dans la même zone pour une faction différente. Ils vont se retrouver.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvacier_skarith',
      titre: 'La rencontre avec Skarith',
      description: 'Skarith (9) opère dans la même zone frontalière pour une autre faction. Les deux guerriers se sont mesurés plusieurs fois sans résultat définitif. Leur rencontre dans cette zone sera un combat dont l\'issue définira le contrôle du territoire. Le Parti de l\'Acier a des instructions pour les deux scénarios — victoire ou statu quo.',
      personnages_impliques: [9, 4],
      declencheur: 'Présence simultanée de Thyrvacier et Skarith dans la zone frontalière contestée',
      consequence: 'Combat probable entre les deux guerriers — résultat déterminant pour le contrôle de la zone',
    },
    {
      id: 'thyrvacier_frontier',
      titre: 'Le coût de la transcendance',
      description: 'Son utilité pour le Parti vient de sa capacité à opérer dans les deux régions. Mais cette utilité le place contre des personnes des deux côtés. Il a commencé à tenir un compte informel — qui il a mis contre qui. Il n\'en fait rien. Il tient le compte.',
      personnages_impliques: [4, 9],
      declencheur: 'Accumulation des opérations contre des personnes des deux régions',
      consequence: 'Compte informel tenu — implications pour sa loyauté au Parti non encore actionnées',
    },
  ],

  arcs: ['arc_parti_de_lacier'],
  position_dans_arc: 'Guerrier Pyrien du Parti de l\'Acier opérant dans les zones frontalières Varkhôl/Ormn-Dur. Maîtrise unique Combat/Acier. Mission actuelle dans une zone contestée où Skarith (9) opère pour une faction concurrente.',

  relations: [
    { id: 4, nom: 'Thryss', type: 'allié', note: 'L\'a recommandé au Parti de l\'Acier. Respect mutuel ancien.' },
    { id: 9, nom: 'Skarith', type: 'adversaire', note: 'Guerrier aux capacités similaires. Plusieurs mesures sans résultat définitif. Opère actuellement dans la même zone.' },
  ],

  combat: {
    sorts: [
      'Armure d\'acier (Acier) — cristallisation d\'acier élémentaire sur le corps — protection et masse de frappe augmentées',
      'Frappe de percée (Combat) — impact concentré sur un point précis — pénétration des protections adverses',
      'Lame de terrain (Acier + Combat) — projection de lames d\'acier élémentaire avec précision de combat — attaque à distance contrôlée',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvacier_combat',
      description: 'Thyrvacier dans une zone frontalière volcanique entre Varkhôl et Ormn-Dur — les plaques d\'acier élémentaire aux avant-bras et épaules visibles, une posture de combat prête. Le sol sous lui est à la fois rocheux et métallique. Son expression est de concentration pure — il attend.',
      style: 'réaliste guerrier Pyrien Parti de l\'Acier, zone frontalière volcanique, plaques d\'acier élémentaire, posture de combat',
    },
  ],

  lore_long: `Thyrvacier est redouté dans les deux régions — Varkhôl et Ormn-Dur — pour sa maîtrise unique Combat/Acier. Le Parti de l'Acier l'utilise précisément dans les zones frontalières où cette dualité est un avantage.

Il a opéré contre des personnes des deux côtés de la frontière. Il tient un compte informel. Il n'en fait rien pour l'instant.

Skarith (9) opère dans la même zone frontalière contestée. Une rencontre est probable. Le Parti a des instructions pour les deux scénarios.`,
};

export default thyrvacier;
