import type { PersonnageLoreComplet } from '../../../lore-types';

const aelkorn: PersonnageLoreComplet = {
  id: 126,
  nom: 'Aelkorn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Empire (involontaire)',

  apparence: {
    taille_corpulence: 'Sylvan de 61 ans, posture d\'un scientifique de terrain — habituée aux relevés, aux mesures, à la documentation.',
    peau: 'Écorce verte avec des marques d\'encre végétale — elle prend des notes sur sa propre peau quand elle n\'a pas de parchemin.',
    yeux: 'Verts avec une qualité de quelqu\'un qui observe et documente sans toujours penser aux implications.',
    vetements: 'Tenue de botaniste de terrain — pratique, avec des carnets attachés à la ceinture.',
    signes_particuliers: 'Ses recherches botaniques ont été réquisitionnées par l\'Empire pour cartographier les forêts de Sylvera. Elle n\'a jamais explicitement consenti à ça.',
  },

  psychologie: {
    dominante: 'Botaniste Sylvan dont les recherches ont été réquisitionnées par l\'Empire. Elle étudie la structure des forêts de Sylvera depuis 20 ans — cartographies, analyse écologique, structure racinaire. L\'Empire utilise ces données pour ses propres fins. Elle n\'est pas une collaboratrice active — elle est une source réquisitionnée.',
    mecanisme_de_defense: 'La distinction entre recherche scientifique et usage politique. Elle produit des données. Ce que l\'Empire en fait n\'est pas sa responsabilité. Cette distinction l\'arrange — et ne la satisfait pas entièrement.',
    contradiction_interne: 'Ses recherches alimentent les cartographies impériales de Sylvera. Ces cartographies permettent à l\'Empire de contrôler les forêts qu\'elle étudie. Elle contribue à ce qu\'elle voudrait préserver.',
    rapport_aux_autres: 'Aeris (35) est son intermédiaire impérial indirect — elle n\'a jamais rencontré les agents qui utilisent ses données, mais Aeris est dans la chaîne. Ses données touchent aussi aux enjeux de la Faim des Racines.',
    vision_du_monde: 'La science forestière est utile indépendamment de la politique. Les forêts de Sylvera méritent d\'être comprises. Ce que l\'Empire fait de cette compréhension est une question séparée.',
  },

  histoire: {
    enfance: {
      titre: 'La botanique',
      contenu: 'Formation en botanique Sylvan. Elle avait commencé ses cartographies à 35 ans — des relevés de la structure racinaire actuelle de Sylvera, comparés aux descriptions des vieilles archives de la Faim.',
    },
    arrivee: {
      titre: 'La réquisition',
      contenu: 'À 50 ans, un agent impérial s\'était présenté avec une ordonnance de réquisition de ses recherches. Elle avait eu 48 heures pour répondre. Elle avait cédé ses données — il n\'y avait pas vraiment d\'alternative légale.',
    },
    premier_conflit: {
      titre: 'La continuation',
      contenu: 'Elle avait continué ses recherches. Ses nouvelles données allaient régulièrement à l\'Empire — la réquisition était permanente. Elle avait appris à ne pas trop penser à cet usage.',
    },
    revelation: {
      titre: 'La cartographie impériale',
      contenu: 'Elle avait vu une cartographie impériale de Sylvera — elle reconnaissait ses données. Les forêts qu\'elle avait mesurées pour les comprendre étaient maintenant cartographiées pour être contrôlées. La distinction entre recherche et usage s\'était effondrée.',
    },
    etat_actuel: {
      titre: 'La recherche réquisitionnée',
      contenu: 'Elle continue ses recherches. L\'Empire reçoit ses données. Elle documente quelque chose qu\'elle contribue à perdre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aelkorn_cartographie',
      titre: 'La cartographie et ses conséquences',
      description: 'Les données d\'Aelkorn alimentent les cartographies impériales de Sylvera. Si l\'Empire utilise ces cartographies pour une action concrète dans les forêts — occupation, exploitation, suppression d\'un groupe — Aelkorn sera confrontée à ce que sa recherche a rendu possible. Sa distinction entre science et politique ne tiendra plus.',
      personnages_impliques: [35],
      declencheur: 'L\'Empire utilisant ses cartographies pour une action directe dans les forêts de Sylvera',
      consequence: 'Aelkorn confrontée à sa contribution involontaire — et devant choisir si elle continue à fournir des données',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Botaniste dont les recherches ont été réquisitionnées par l\'Empire. Contribution involontaire aux cartographies impériales de Sylvera.',

  relations: [
    { id: 35, nom: 'Aeris', type: 'contact', note: 'Intermédiaire impérial indirect dans la chaîne de réquisition.' },
  ],

  combat: {
    sorts: [
      'Analyse végétale (Plante) — compréhension immédiate de la structure écologique — avantage de terrain',
      'Défense racinaire (Plante) — activation de racines défensives — protection',
    ],
  },

  image_prompts: [
    {
      id: 'aelkorn_terrain',
      description: 'Aelkorn prenant des relevés dans une forêt de Sylvera — une Sylvan de 61 ans avec ses carnets, mesurant les racines. Au loin, une silhouette impériale attend ses résultats. Son expression est de quelqu\'un qui fait son travail en sachant ce que ça implique et en choisissant de ne pas s\'y arrêter.',
      style: 'réaliste Sylvan botaniste, Sylvera, recherche réquisitionnée, contribution involontaire à l\'Empire',
    },
  ],

  lore_long: `Aelkorn étudie les forêts de Sylvera depuis 20 ans. Ses recherches ont été réquisitionnées par l'Empire.

Elle n'est pas une collaboratrice active — ses données lui ont été prises. Mais elle continue à produire des données que l'Empire reçoit.

La distinction entre recherche et usage s'est effondrée le jour où elle a vu ses cartographies dans un document impérial.`,
};

export default aelkorn;
