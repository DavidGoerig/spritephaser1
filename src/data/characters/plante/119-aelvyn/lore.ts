import type { PersonnageLoreComplet } from '../../../lore-types';

const aelvyn: PersonnageLoreComplet = {
  id: 119,
  nom: 'Aelvyn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de 67 ans, mains constamment dans la terre. La posture d\'un botaniste — penché en avant, attentif au sol plus qu\'au ciel.',
    peau: 'Écorce verte-brun avec des filaments racinaires visibles aux poignets — son travail laisse des traces permanentes sur son corps.',
    yeux: 'Verts avec une qualité de quelqu\'un qui cherche quelque chose qu\'il n\'a pas encore trouvé.',
    vetements: 'Tenue de botaniste de terrain — terre sur les genoux en permanence, outils de jardinage à la ceinture.',
    signes_particuliers: 'Il tente de reconstruire le réseau racinaire de Sylvera détruit par la Faim des Racines. Il ne sait pas que Sylindra (37) a trouvé un fragment actif — ce qu\'il cherche existe.',
  },

  psychologie: {
    dominante: 'Botaniste Sylvan qui tente de reconstruire le réseau racinaire de Sylvera — le système qui permettait aux forêts de communiquer. Ce réseau a été fragmenté par la Faim des Racines. Il cherche à le reconstituer à partir de fragments. Il ne sait pas que Sylindra (37) a trouvé un fragment actif.',
    mecanisme_de_defense: 'La méthode scientifique comme protection contre le désespoir. Il avance par hypothèses vérifiables. Le fait que le réseau soit détruit n\'est pas une impasse — c\'est une contrainte de recherche.',
    contradiction_interne: 'Il cherche depuis 20 ans quelque chose qui existe — un fragment actif. Cette ignorance n\'est pas sa faute, mais elle a orienté son travail vers la reconstruction quand il aurait pu travailler à partir de l\'existant.',
    rapport_aux_autres: 'Sylvae (31) est dans son réseau — elle soutient ses recherches. Sylindra (37) est un contact indirect — il ne sait pas qu\'elle a ce qu\'il cherche.',
    vision_du_monde: 'Le réseau racinaire de Sylvera était plus qu\'un système écologique — c\'était la façon dont la forêt pensait. Reconstruire ce réseau est reconstruire la forêt comme sujet, pas comme objet.',
  },

  histoire: {
    enfance: {
      titre: 'Les racines',
      contenu: 'Formation en botanique sylvan. Il avait commencé à s\'intéresser au réseau racinaire à 30 ans, quand un vieux Conservateur lui avait décrit ce que le réseau permettait avant la Faim. Ce témoignage avait orienté toute sa carrière.',
    },
    arrivee: {
      titre: 'La recherche',
      contenu: 'Il avait commencé à cartographier les vestiges du réseau racinaire à 40 ans. La plupart étaient morts. Certains montraient des signes d\'activité résiduelle. Il avait commencé à tenter des reconstitutions partielles.',
    },
    premier_conflit: {
      titre: 'L\'échec méthodique',
      contenu: 'Ses reconstitutions partielles fonctionnaient à petite échelle — entre deux arbres, parfois trois. À plus grande échelle, elles mouraient. Il ne savait pas pourquoi. Sa méthode était correcte. Quelque chose lui manquait.',
    },
    revelation: {
      titre: 'L\'absence de fragment actif',
      contenu: 'Il avait compris que ses reconstitutions mouraient parce qu\'il n\'avait pas de fragment actif comme point de départ. Un réseau construit de zéro ne prenait pas. Il cherchait un fragment. Il n\'en avait pas trouvé.',
    },
    etat_actuel: {
      titre: 'La recherche continue',
      contenu: 'Il cherche toujours un fragment actif. Sylindra (37) en a un. Il ne le sait pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aelvyn_sylindra',
      titre: 'Le fragment qu\'il cherche',
      description: 'Aelvyn cherche depuis 20 ans un fragment actif du réseau racinaire. Sylindra (37) en a trouvé un. Si quelqu\'un — Sylvae (31), un événement narratif — les met en contact sur ce sujet, Aelvyn aura enfin ce dont il a besoin. Mais Sylindra n\'est pas Conservatrice — et partager ce fragment a des implications politiques.',
      personnages_impliques: [31, 37],
      declencheur: 'Aelvyn apprenant que Sylindra a trouvé un fragment actif',
      consequence: 'Collaboration possible — ou conflit sur l\'usage du fragment',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Botaniste Conservateur cherchant à reconstruire le réseau racinaire. Ne sait pas que Sylindra (37) a trouvé un fragment actif.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Soutient ses recherches.' },
    { id: 37, nom: 'Sylindra', type: 'contact', note: 'A trouvé ce qu\'il cherche — ignorance mutuelle.' },
  ],

  combat: {
    sorts: [
      'Réseau racinaire (Plante) — activation de racines souterraines — contrôle de terrain',
      'Croissance forcée (Plante) — accélération végétale — barrière ou entrave',
    ],
  },

  image_prompts: [
    {
      id: 'aelvyn_recherche',
      description: 'Aelvyn dans une forêt de Sylvera — un Sylvan de 67 ans à genoux près d\'une racine, instruments de mesure en main. Il cherche un fragment actif du réseau racinaire. Son expression est de quelqu\'un proche de quelque chose sans le savoir.',
      style: 'réaliste Sylvan botaniste, Sylvera, recherche du réseau racinaire, fragment actif inconnu',
    },
  ],

  lore_long: `Aelvyn tente de reconstruire le réseau racinaire de Sylvera depuis 20 ans. Ce réseau permettait aux forêts de communiquer avant la Faim des Racines.

Il cherche un fragment actif comme point de départ. Sylindra (37) en a trouvé un.

Il ne le sait pas.`,
};

export default aelvyn;
