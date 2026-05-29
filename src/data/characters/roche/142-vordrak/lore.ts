import type { PersonnageLoreComplet } from '../../../lore-types';

const vordrak: PersonnageLoreComplet = {
  id: 142,
  nom: 'Vordrak',
  element: 'Roche',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Chthonien de 46 ans, ingénieur qui a changé de camp — la posture d\'un spécialiste qui a conservé ses compétences mais changé son allégeance.',
    peau: 'Pierre grise avec des marques de différents types de construction souterraine — il a travaillé sur beaucoup de structures.',
    yeux: 'Gris-roux avec une qualité de quelqu\'un qui a choisi de façon réfléchie et qui vit avec ce choix.',
    vetements: 'Tenue qui ne signale pas les Dissidentes — il maintient une apparence d\'ingénieur indépendant.',
    signes_particuliers: 'Il a rejoint les Dissidentes après l\'incursion de l\'Empire dans la Fosse Interdite. L\'incursion l\'a convaincu que la Technocratie ne pouvait pas défendre Ormn-Dur seule.',
  },

  psychologie: {
    dominante: 'Ingénieur de tunnels qui a rejoint les Dissidentes après avoir vu l\'incursion impériale dans la Fosse Interdite. L\'incursion lui avait montré que la Technocratie ne défendait pas la Fosse efficacement — l\'Empire était entré, avait prélevé ce qu\'il voulait, et était reparti sans confrontation majeure. Il avait conclu qu\'une résistance externe était nécessaire.',
    mecanisme_de_defense: 'La conviction du choix. Il a fait un choix réfléchi. Il le maintient parce qu\'il ne voit pas d\'alternative crédible.',
    contradiction_interne: 'Il est ingénieur — ses compétences sont structurelles. Les Dissidentes ont besoin de ses compétences pour des opérations qui ne sont pas uniquement structurelles. L\'écart entre sa formation et son usage peut créer des situations difficiles.',
    rapport_aux_autres: 'Ossira (44) est dans son réseau Dissident — son contact principal. La Fosse Interdite est l\'événement déclencheur de son engagement.',
    vision_du_monde: 'L\'Empire entre dans des zones qu\'il ne devrait pas contrôler. La Technocratie ne résiste pas assez. Une résistance externe organisée est la seule réponse réaliste.',
  },

  histoire: {
    enfance: {
      titre: 'L\'ingénierie',
      contenu: 'Formation d\'ingénieur à la Technocratie d\'Ormn-Dur. Spécialisation dans les tunnels et les structures souterraines. 15 ans de travaux dans la Technocratie.',
    },
    arrivee: {
      titre: 'L\'incursion impériale',
      contenu: 'L\'incursion de l\'Empire dans la Fosse Interdite avait utilisé des tunnels dont il avait vérifié la structure. Il avait vu comment l\'Empire était entré — et comment la Technocratie n\'avait pas répondu. Cette double vision l\'avait changé.',
    },
    premier_conflit: {
      titre: 'Le contact d\'Ossira',
      contenu: 'Ossira (44) l\'avait contacté quelques semaines après l\'incursion. La proposition était claire : ses compétences souterraines pour des opérations Dissidentes contre l\'Empire à Ormn-Dur. Il avait accepté.',
    },
    revelation: {
      titre: 'La différence entre ingénierie et résistance',
      contenu: 'Il avait compris que rejoindre les Dissidentes ne signifiait pas seulement utiliser ses compétences — c\'était aussi accepter des opérations qui dépassaient l\'ingénierie. Il avait géré cet écart au cas par cas.',
    },
    etat_actuel: {
      titre: 'Les Dissidentes',
      contenu: 'Il travaille avec Ossira (44). Ses compétences souterraines sont utiles dans plusieurs directions.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vordrak_incursion',
      titre: 'Les tunnels de l\'incursion',
      description: 'Vordrak connaît les tunnels que l\'Empire a utilisés lors de son incursion dans la Fosse Interdite — il en a vérifié la structure. Si l\'Empire planifie une deuxième incursion, ou si quelqu\'un a besoin de savoir comment l\'Empire entre et sort de la Fosse, Vordrak a l\'information. Cette information a une valeur double : pour résister et pour imiter.',
      personnages_impliques: [44],
      declencheur: 'Deuxième incursion impériale planifiée dans la Fosse Interdite',
      consequence: 'Vordrak utilisant sa connaissance pour préparer une résistance — ou quelqu\'un d\'autre utilisant cette information pour imiter l\'Empire',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Ingénieur reconverti Dissident après l\'incursion impériale dans la Fosse. Connaît les tunnels de l\'incursion. Contact : Ossira (44).',

  relations: [
    { id: 44, nom: 'Ossira', type: 'contact', note: 'Contact Dissident principal. L\'a recruté après l\'incursion.' },
  ],

  combat: {
    sorts: [
      'Tunnel d\'assaut (Roche) — création rapide de passage — manœuvre tactique souterraine',
      'Effondrement ciblé (Roche) — déstabilisation de structure — blocage de passage',
    ],
  },

  image_prompts: [
    {
      id: 'vordrak_tunnel',
      description: 'Vordrak dans un tunnel proche de la Fosse Interdite — un Chthonien de 46 ans qui cartographie les points d\'entrée d\'une incursion impériale passée. Son expression est de quelqu\'un qui comprend ce qui s\'est passé et ce que ça signifie pour ce qu\'il fait maintenant.',
      style: 'réaliste Chthonien ingénieur Dissident, Fosse Interdite d\'Ormn-Dur, tunnels d\'incursion impériale, reconversion politique',
    },
  ],

  lore_long: `Vordrak a rejoint les Dissidentes après avoir vu l'incursion impériale dans la Fosse Interdite. La Technocratie n'avait pas résisté.

Il connaît les tunnels que l'Empire a utilisés — il en avait vérifié la structure.

Cette connaissance peut servir à résister ou à imiter l'Empire. Vordrak travaille sur la résistance.`,
};

export default vordrak;
