import type { PersonnageLoreComplet } from '../../../lore-types';

const vethyskel: PersonnageLoreComplet = {
  id: 274,
  nom: 'Vethyskel',
  element: 'Spectre',
  element2: 'Vent',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Grand, sec — physique de quelqu\'un qui parcourt les terrains qu\'il cartographie.',
    peau: 'Pâle, légèrement translucide aux mains et au cou — marque Spectre. Hâlée aux avant-bras, contredisant la pâleur.',
    yeux: 'Gris clair, avec une habitude de regarder loin plutôt que près — réflexe de cartographe.',
    vetements: 'Tenue de terrain pratique, poches multiples pour les instruments. Il porte toujours 3 copies de ses cartes — une sur lui, une dans son sac, une cachée dans un endroit qu\'il change régulièrement.',
    signes_particuliers: 'Il cartographie en marchant — le mouvement et la pensée sont liés chez lui. Ses meilleures décisions viennent de marches longues.',
  },

  psychologie: {
    dominante: 'Précision technique au service de la protection. Il trace des routes pour que des gens qui n\'ont pas d\'autre option aient un chemin.',
    mecanisme_de_defense: 'Les chiffres et les distances. Une route peut être évaluée objectivement — longueur, sécurité, couverture, points d\'eau. Cette objectivité l\'ancre dans le concret.',
    contradiction_interne: 'Il a tracé 7 corridors depuis Virex de façon indépendante. Velath (49) travaille sur le même corridor sud de façon indépendante. Ils ont failli se croiser deux fois. La compartimentation les protège — et les empêche de produire quelque chose de plus complet.',
    rapport_aux_autres: 'Aelthys (268) utilise ses cartes sans le savoir — elles circulent dans le réseau sous forme de copies anonymisées. Il ne sait pas qui les utilise. C\'est délibéré.',
    vision_du_monde: 'Une route bien tracée est une forme de liberté physique. C\'est quelque chose que l\'Empire ne peut pas entièrement contrôler — le terrain existe indépendamment des registres.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Isthme comme terrain',
      contenu: 'Né à l\'Isthme dans une famille de géomètres. Il avait appris à lire le terrain avant d\'apprendre à lire les mots. Son élément Spectre — perception des résidus de présence dans les espaces — lui donnait une façon de "lire" les routes utilisées et non-utilisées par leurs traces mémorielles.',
    },
    arrivee: {
      titre: 'Les Dissidentes et les corridors',
      contenu: 'Rejoint les Dissidentes à 34 ans après avoir été sollicité pour un projet de cartographie "alternatif". Il avait compris ce que ça signifiait. Il avait accepté parce qu\'il avait une compétence qui pouvait faire quelque chose de concret.',
    },
    premier_conflit: {
      titre: 'Le premier corridor',
      contenu: 'Le premier corridor depuis Virex avait pris 4 mois à établir — terrain, couvertures, points de relais, alternatives en cas de blocage. Quand la première personne l\'avait utilisé avec succès, il avait eu le sentiment que quelque chose d\'utile existait là où il n\'y avait pas eu de chemin.',
    },
    revelation: {
      titre: 'La presque-rencontre avec Velath',
      contenu: 'Il y a 3 semaines, il avait reçu un message du réseau lui signalant qu\'un "autre acteur travaillait sur le corridor sud" et qu\'il y avait eu un doublonnement d\'informations dans deux transmissions consécutives. Il avait reconstitué que c\'était Velath (49) depuis les patterns de la transmission. Ils avaient failli se croiser physiquement deux fois sans se reconnaître. La compartimentation avait fait son travail — et l\'avait peut-être rendu moins efficace.',
    },
    etat_actuel: {
      titre: 'Le contact à établir',
      contenu: 'Il cherche à établir un contact avec Velath sans compromettre la sécurité des deux — la coordination directe entre deux nœuds du réseau demande un protocole soigneux. Il prépare une approche qui lui permettrait de vérifier que c\'est bien Velath avant d\'envoyer quelque chose d\'identifiable. Il a un plan pour ça. Il ne l\'a pas encore exécuté.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vethyskel_7_corridors',
      titre: 'Les sept corridors',
      description: 'Sept corridors depuis Virex, tracés sur 17 ans. Chacun a été utilisé au moins une fois. Certains ont été compromis et abandonnés — il tient un registre de ce qui a fonctionné et de ce qui n\'a pas fonctionné, avec les raisons de chaque échec. C\'est sa base de connaissance la plus précieuse. Il ne la partage pas entièrement avec qui que ce soit — une précaution.',
      personnages_impliques: [],
      declencheur: 'Travail de cartographie sur 17 ans',
      consequence: 'Base de connaissance unique sur les routes de fuite depuis Virex',
    },
    {
      id: 'vethyskel_velath_parallele',
      titre: 'La coordination non établie',
      description: 'Velath (49) et lui travaillent sur le même corridor depuis une durée inconnue. La qualité du travail de Velath — qu\'il a déduite des transmissions — est comparable à la sienne. Si ils se coordonnaient, le corridor serait plus robuste. S\'ils se coordonnent maladroitement, ils créent un risque pour les deux. Il travaille à trouver la façon non-maladroite.',
      personnages_impliques: [49],
      declencheur: 'Détection de travail parallèle via des signaux dans les transmissions',
      consequence: 'Opportunité de coordination non encore réalisée — potentiel non exploité',
    },
    {
      id: 'vethyskel_second_avatar_route',
      titre: 'Le Second Avatar sur la carte',
      description: 'Le Second Avatar a utilisé une de ses routes une fois — il sait ça parce qu\'il voit les flux sur les corridors et qu\'un flux d\'un "sujet particulier" avait été signalé il y a 8 mois. Il ne sait pas que c\'était le Second Avatar. Il sait que c\'était quelqu\'un dont la présence sur un corridor avait légèrement modifié les traces élémentaires de la route de façon notable.',
      personnages_impliques: [59],
      declencheur: 'Suivi des flux sur les corridors',
      consequence: 'Connaissance indirecte du passage du Second Avatar — non identifié, mais documenté',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Infrastructure silencieuse. Il construit les routes que les autres utilisent. Il ne connaît pas la plupart des gens qui marchent dessus.',

  relations: [
    { id: 49, nom: 'Velath', type: 'allié', note: 'Travail parallèle sur le même corridor — non coordinné, contact à établir via protocole soigneux.' },
    { id: 59, nom: 'Second Avatar', type: 'contact_nécessaire', note: 'A utilisé une de ses routes il y a 8 mois — non identifié, présence documentée dans les traces de corridor.' },
    { id: 268, nom: 'Aelthys', type: 'allié', note: 'Utilise ses cartes via le réseau sans le savoir — anonymisées par conception.' },
  ],

  combat: {
    sorts: [
      'Lecture de mémoire de lieu (Spectre) — perception des présences passées dans un espace — identifie les routes utilisées et la fréquence',
      'Vent de couverture (Vent) — création d\'un flux aérien qui couvre les traces de déplacement derrière soi',
      'Navigation Spectre (combiné) — suivi d\'une trace élémentaire résiduelle sur plusieurs jours — pistage inversé',
    ],
  },

  image_prompts: [
    {
      id: 'vethyskel_terrain',
      description: 'Vethyskel sur une crête de l\'Isthme, carte dans les mains, regardant le terrain en dessous. Il n\'est pas en train de mémoriser — il est en train de voir si la carte correspond. Son expression est celle d\'un homme qui aime son travail et qui le fait bien.',
      style: 'réaliste humain, lumière de terrain extérieur, crête et paysage, tons gris et vert de l\'Isthme',
    },
  ],

  lore_long: `7 corridors. 17 ans. Vethyskel a tracé des routes pour des gens qui n'en avaient pas d'autres.

Il ne connaît pas la plupart des gens qui les utilisent — par conception. Aelthys transporte des cartes anonymisées issues de son travail sans savoir qu'elles viennent de lui. Le Second Avatar a marché sur un de ses corridors il y a 8 mois, laissant une résonance élémentaire suffisamment notable pour être documentée, sans que Vethyskel sache qui c'était.

C'est la nature de l'infrastructure : elle existe pour permettre des choses, pas pour savoir lesquelles.

Velath travaille sur le même corridor sud. La qualité de son travail — déduite des patterns dans les transmissions, jamais vue directement — ressemble à la sienne. Ils ont failli se croiser deux fois physiquement. La compartimentation du réseau les avait gardés séparés, ce qui les protégeait et réduisait l'efficacité de leurs corridors parallèles.

Il prépare un protocole de contact. Vérifier l'identité sans s'identifier, établir un canal sûr, puis seulement coordonner. C'est méthodique. C'est la seule façon qui lui semble ne pas créer plus de risque que de valeur.

Son registre des corridors compromis : 3 sur les 7. Les raisons varient — un contact retourné, une vérification impériale trop approfondie sur un nœud de route, une erreur de jugement sur un relais. Il a analysé chaque échec. Les corridors actuels bénéficient de ces analyses.

Une route bien tracée est une forme de liberté que les registres impériaux ne peuvent pas voir. Ça ne rend pas les routes invulnérables — mais ça signifie qu'elles existent dans l'espace entre ce que les registres décrivent et ce que le terrain contient.

Il marche ce terrain. Il le connaît.`,
};

export default vethyskel;
