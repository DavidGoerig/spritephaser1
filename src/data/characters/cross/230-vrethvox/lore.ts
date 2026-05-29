import type { PersonnageLoreComplet } from '../../../lore-types';

const vrethvox: PersonnageLoreComplet = {
  id: 230,
  nom: 'Vrethvox',
  element: 'Feu',
  element2: 'Spectre',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Pyrien de 44 ans, collecteur — corpulence de quelqu\'un dont le travail est précis et solitaire. Le corps est entretenu pour la fonctionnalité, pas pour la présence.',
    peau: 'Rouge-ardente avec des zones grises autour des tempes — l\'exposition prolongée aux signatures spectrales laisse des marques chez un Pyrien.',
    yeux: 'Orangés avec une qualité de perception décalée — il voit les couches spectrales sur les couches visibles.',
    vetements: 'Tenue neutre adaptée à Varkhôl — il se fond dans la population Pyrien locale. Aucune identification Convergence visible.',
    signes_particuliers: 'Il collecte des signatures spectrales élémentaires liées à l\'élément Feu — des empreintes que les défunts Pyriens laissent dans des lieux chargés thermiquement. La Convergence utilise ces données pour le Protocole d\'Identification des Élus purs.',
  },

  psychologie: {
    dominante: 'Collecteur de signatures spectrales de la Convergence opérant à Varkhôl. Son double élément Feu/Spectre lui permet d\'accéder à des empreintes laissées par des Pyriens défunts dans les zones thermiquement chargées de la Rupture. Ces signatures alimentent le Protocole d\'Identification — un système visant à localiser des Élus de pureté élémentaire maximale.',
    mecanisme_de_defense: 'L\'invisibilité opérationnelle. Il ressemble à n\'importe quel Pyrien de Varkhôl. Son travail ne requiert pas d\'équipement visible. Il collecte sans être identifiable comme collecteur.',
    contradiction_interne: 'Il travaille avec des signatures de défunts — des empreintes que des personnes ont laissées en mourant dans la Rupture. La Convergence utilise ces données pour localiser et potentiellement drainer des Élus vivants. La connexion entre les morts qu\'il lit et les vivants que le Protocole cible n\'est pas une coïncidence — c\'est une méthode.',
    rapport_aux_autres: 'Sethara (238) est dans son réseau — la coordinatrice du Protocole qui reçoit ses collectes et les intègre dans la base de données d\'identification. Shael (48) est dans son réseau — un Umbrien dont les capacités spectrales complètent les siennes pour des signatures mixtes.',
    vision_du_monde: 'Les signatures spectrales sont de l\'information. Collecter de l\'information est un travail neutre. La Convergence a ses raisons pour vouloir cette information. Il fournit le travail pour lequel il est compétent.',
  },

  histoire: {
    enfance: {
      titre: 'Le Pyrien aux bords froids',
      contenu: 'Né à Varkhôl avec un double élément Feu/Spectre — une anomalie dans une région presque exclusivement thermique. Il avait grandi en apprenant à masquer l\'aspect Spectre de son élément. La Convergence l\'avait trouvé à 26 ans précisément parce qu\'ils cherchaient cette combinaison rare.',
    },
    arrivee: {
      titre: 'Le Protocole',
      contenu: 'La Convergence lui avait expliqué le Protocole progressivement — le Drain de l\'An 0, la nécessité d\'identifier des Élus purs, l\'utilisation des signatures spectrales comme méthode d\'identification. Il avait accepté. La précision du travail l\'avait intéressé plus que les implications.',
    },
    premier_conflit: {
      titre: 'La signature d\'un enfant',
      contenu: 'Il avait collecté une signature spectrale dans une zone de la Rupture — une signature de petite taille, thermiquement intense, récente. Un enfant Pyrien mort dans la Rupture. La pureté de la signature indiquait une concentration élémentaire exceptionnelle. Il avait transmis les données.',
    },
    revelation: {
      titre: 'Ce que les données signifient',
      contenu: 'Il avait compris que les signatures d\'enfants défunts étaient utilisées pour identifier des profils d\'Élus vivants similaires — que le Protocole cherchait des personnes vivantes avec des signatures identiques à celles qu\'il collectait chez des défunts. La connexion entre ses collectes et les cibles du Protocole était directe.',
    },
    etat_actuel: {
      titre: 'Le collecteur',
      contenu: 'Il collecte des signatures. Sethara (238) les utilise. Ce que le Protocole fait ensuite est hors de son périmètre opérationnel.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vrethvox_collecte',
      titre: 'La signature qui mène à une cible vivante',
      description: 'Vrethvox collecte des signatures spectrales de défunts Pyriens pour le Protocole. Si une de ses collectes mène directement à l\'identification et à la capture d\'un Élu vivant — quelqu\'un dont il peut tracer la connexion directe entre sa collecte et la capture — il ne pourra plus maintenir la neutralité opérationnelle entre son travail et ses conséquences.',
      personnages_impliques: [238, 48],
      declencheur: 'Vrethvox informé du lien direct entre une de ses collectes et la capture d\'un Élu vivant',
      consequence: 'Vrethvox confronté à la mécanique complète du Protocole — et à sa position dans la chaîne causale qui mène au Drain',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Collecteur de signatures spectrales de la Convergence à Varkhôl. Double élément Feu/Spectre. Alimente le Protocole d\'Identification en données sur les Élus Pyriens purs.',

  relations: [
    { id: 238, nom: 'Sethara', type: 'hierarchie', note: 'Coordinatrice du Protocole recevant les collectes spectrales.' },
    { id: 48, nom: 'Shael', type: 'contact', note: 'Umbrien dont les capacités spectrales complètent les siennes pour des signatures mixtes.' },
  ],

  combat: {
    sorts: [
      'Flamme spectrale concentrée (Feu/Spectre) — projection thermique à signature fantomatique — attaque hybride difficile à bloquer',
      'Absorption de résidu (Spectre/Feu) — extraction passive d\'énergie élémentaire d\'un lieu chargé — collecte opérationnelle',
    ],
  },

  image_prompts: [
    {
      id: 'vrethvox_collecte',
      description: 'Vrethvox dans les décombres thermiques de la Rupture à Varkhôl — un Pyrien de 44 ans aux tempes grises dont les mains sont posées sur une surface de pierre encore chaude. Il collecte une signature spectrale — une empreinte laissée par quelqu\'un qui est mort là. Son expression est professionnelle, précise, sans émotion visible.',
      style: 'réaliste Pyrien collecteur Convergence, Varkhôl Rupture Thermique, double élément Feu/Spectre, collecte de signature spectrale, travail solitaire et précis',
    },
  ],

  lore_long: `Vrethvox collecte des signatures spectrales élémentaires dans les zones thermiquement chargées de la Rupture à Varkhôl. Son double élément Feu/Spectre lui donne accès à des empreintes que ni l'un ni l'autre élément seul ne pourrait percevoir.

La Convergence utilise ces signatures pour son Protocole d'Identification — localiser des Élus de pureté élémentaire maximale.

La connexion entre les défunts qu'il lit et les vivants que le Protocole cible, il la comprend. Il continue de collecter.`,
};

export default vrethvox;
