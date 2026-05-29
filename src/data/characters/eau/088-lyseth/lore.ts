import type { PersonnageLoreComplet } from '../../../lore-types';

const lyseth: PersonnageLoreComplet = {
  id: 88,
  nom: 'Lyseth',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Néréide de 26 ans, mince avec une énergie de quelqu\'un qui vient de trouver quelque chose d\'important. Ses mouvements sont plus rapides depuis 3 semaines — depuis qu\'il a trouvé les journaux.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse vive aux mains — l\'élément Eau d\'un jeune agent qui n\'a pas encore appris à contrôler sa charge émotionnelle.',
    yeux: 'Bleus clairs avec une qualité d\'excitation contenue — il sait ce qu\'il a trouvé. Il ne sait pas encore quoi en faire.',
    vetements: 'Tenue Dissidente discrète — assez ordinaire pour ne pas attirer l\'attention. Les journaux sont dans une poche intérieure.',
    signes_particuliers: 'Il a trouvé les journaux privés de Shaleth dans ses caches. Ces journaux contiennent des informations que Shaleth n\'a jamais transmises officiellement. Lyseth ne sait pas encore ce que ça implique.',
  },

  psychologie: {
    dominante: 'Jeune agent Dissident qui a trouvé par hasard les journaux privés de Shaleth (16) dans des caches. Il a commencé à les lire. Ce qu\'il y a trouvé dépasse sa compréhension actuelle des enjeux.',
    mecanisme_de_defense: 'L\'action comme réponse à l\'incertitude. Il a trouvé quelque chose d\'important. Il doit décider quoi faire. Cette décision le tient occupé.',
    contradiction_interne: 'Il est dans le réseau de Vel (17) — il a une loyauté Dissidente. Mais les journaux de Shaleth ne correspondent pas entièrement à la version simple de "Shaleth est l\'ennemi". Ce qu\'il a lu est plus compliqué.',
    rapport_aux_autres: 'Shaleth (16) est la personne dont il a les journaux — une figure qui est devenue plus complexe depuis 3 semaines. Vel (17) est son contact de réseau — il ne lui a pas encore dit ce qu\'il a trouvé.',
    vision_du_monde: 'Les informations cachées ont de l\'importance. Ce que les gens cachent dit quelque chose sur eux. Ce que Shaleth cache est surprenant.',
  },

  histoire: {
    enfance: {
      titre: 'Les Dissidentes',
      contenu: 'Rejoint les Dissidentes à 22 ans. Activité de bas niveau jusqu\'à cette année. Il est agent depuis 4 ans, junior en termes de responsabilités.',
    },
    arrivee: {
      titre: 'Les caches',
      contenu: 'Sa mission avait été de surveiller certaines caches dans Thalassyr — des points de dépôt pour des échanges d\'informations. Trois semaines avant, il avait trouvé quelque chose dans une cache qui n\'aurait pas dû être là : des journaux privés.',
    },
    premier_conflit: {
      titre: 'La lecture',
      contenu: 'Il avait commencé à lire. Les journaux de Shaleth décrivaient des situations que la version officielle de Shaleth — agent double à la solde de l\'Empire — ne couvrait pas entièrement. Des doutes, des hésitations, des informations qu\'il avait retenues pour des raisons qui n\'étaient pas uniquement la trahison.',
    },
    revelation: {
      titre: 'La complexité',
      contenu: 'Shaleth n\'était pas un traître simple. Les journaux montraient quelqu\'un qui naviguait des contraintes que Lyseth ne comprenait pas encore. Cette complexité ne l\'excusait pas — mais elle changeait la façon dont Lyseth devait traiter l\'information.',
    },
    etat_actuel: {
      titre: 'La décision',
      contenu: 'Il a les journaux. Il ne sait pas encore à qui les donner ni comment. Vel (17) ? Thariel (18) ? Quelqu\'un d\'autre ? La décision change le cours de quelque chose.',
    },
  },

  evenements_narratifs: [
    {
      id: 'lyseth_journaux',
      titre: 'Les journaux de Shaleth',
      description: 'Lyseth a les journaux privés de Shaleth (16). Ces journaux contiennent plus que la trahison attendue — des doutes, des informations retenues pour des raisons complexes. Si ces journaux arrivent aux bonnes mains, ils changent la façon dont la situation de Shaleth est comprise. Si ils arrivent aux mauvaises mains, ils peuvent être utilisés autrement.',
      personnages_impliques: [16, 17],
      declencheur: 'Lyseth décidant à qui transmettre les journaux',
      consequence: 'Révélation d\'une version de Shaleth plus complexe — avec des conséquences sur la façon dont les Dissidentes le traitent',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Jeune agent Dissident qui a trouvé les journaux privés de Shaleth (16). Ne sait pas encore quoi en faire. Sa décision change quelque chose.',

  relations: [
    { id: 16, nom: 'Shaleth', type: 'adversaire', note: 'La personne dont il a les journaux. Plus complexe que prévu.' },
    { id: 17, nom: 'Vel', type: 'allié', note: 'Contact de réseau. Pas encore informé de la découverte.' },
  ],

  combat: {
    sorts: [
      'Vague défensive (Eau) — bouclier d\'eau — protection à courte portée',
      'Courant de fuite (Eau) — accélération dans l\'eau — disparition rapide',
    ],
  },

  image_prompts: [
    {
      id: 'lyseth_journaux',
      description: 'Lyseth dans une cache Dissidente de Thalassyr — un jeune Néréide de 26 ans lisant des journaux privés. Son expression est de quelqu\'un qui a trouvé quelque chose de plus compliqué que prévu.',
      style: 'réaliste Néréide jeune agent Dissident, journaux privés de Shaleth, Thalassyr, découverte complexe',
    },
  ],

  lore_long: `Lyseth a trouvé les journaux privés de Shaleth (16) dans des caches à Thalassyr il y a 3 semaines.

Ce qu'il y a lu est plus compliqué que la trahison attendue. Shaleth y apparaît comme quelqu'un naviguant des contraintes, pas uniquement comme un traître simple.

Lyseth ne sait pas encore à qui transmettre les journaux. Cette décision change quelque chose.`,
};

export default lyseth;
