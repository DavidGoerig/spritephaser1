import type { PersonnageLoreComplet } from '../../../lore-types';

const vorethyn: PersonnageLoreComplet = {
  id: 199,
  nom: 'Vorethyn',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 71 ans, retraité — corpulence de quelqu\'un qui a eu une carrière longue et s\'est arrêté. Le corps garde la posture de l\'administration même dans le repos.',
    peau: 'Ton pâle de l\'âge avec une qualité de mémoire — son visage porte les traces de beaucoup de situations auxquelles il a survécu.',
    yeux: 'Gris avec une qualité de quelqu\'un dont la mémoire est plus vive que l\'environnement présent.',
    vetements: 'Tenue de retraité ordinaire — confortable, sans affiliation visible.',
    signes_particuliers: 'Il a connu l\'Isthme avant la Saturation élémentaire. Il garde des lettres de cette époque — des correspondances, des documents, des descriptions d\'un Isthme qui n\'existe plus de la même façon.',
  },

  psychologie: {
    dominante: 'Vieux bureaucrate à la retraite qui a travaillé dans l\'administration de l\'Isthme pendant 40 ans. Il a connu l\'Isthme avant la Saturation élémentaire — avant que les anomalies commencent à se manifester. Ses lettres documentent l\'état de l\'Isthme d\'avant, ce qui permet de mesurer ce qui a changé.',
    mecanisme_de_defense: 'La mémoire comme valeur en soi. Il ne cherche pas à agir. Il conserve ce qu\'il a vécu. Si quelqu\'un en a besoin, il est là.',
    contradiction_interne: 'Ses lettres sont une mémoire de l\'avant — mais ses souvenirs sont subjectifs et partiels. Ce qu\'il décrit comme "avant" est une version filtrée par sa position et ses biais d\'époque. Cette mémoire imparfaite est quand même plus précise que l\'absence de mémoire.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est ce contre quoi il compare ses souvenirs — un avant et un après. Le Second Avatar (59) est dans son réseau indirect — des décisions politiques qui ont des équivalents dans sa mémoire de précédents historiques.',
    vision_du_monde: 'Les situations se répètent différemment. Il a vu assez de cycles pour savoir que ce qui paraît nouveau a presque toujours des précédents. Ses lettres sont ses notes de précédents.',
  },

  histoire: {
    enfance: {
      titre: 'L\'administration de l\'Isthme',
      contenu: 'Carrière administrative dans l\'Isthme débutée à 22 ans. Il avait traversé plusieurs changements politiques — l\'influence de l\'Empire qui s\'étendait, la Confédération qui réorganisait ses structures, les factions Élus qui se structuraient.',
    },
    arrivee: {
      titre: 'Les lettres',
      contenu: 'Il avait pris l\'habitude de garder des copies de sa correspondance depuis ses 30 ans — pas par anticipation que ça aurait une valeur, mais parce qu\'il avait l\'impression que les détails étaient importants. 40 ans de lettres.',
    },
    premier_conflit: {
      titre: 'La retraite',
      contenu: 'Il avait pris sa retraite à 68 ans. Ses collègues avaient dit qu\'ils n\'avaient plus besoin de ses connaissances — il y avait des systèmes informatiques qui gardaient les données mieux que lui. Il savait que les systèmes informatiques ne gardaient pas ce que ses lettres gardaient.',
    },
    revelation: {
      titre: 'L\'avant et l\'après',
      contenu: 'En relisant ses lettres de 40 ans plus tôt, il avait compris que l\'Isthme qu\'il décrivait était fondamentalement différent de l\'Isthme actuel — pas seulement politiquement, mais dans sa nature élémentaire. Les descriptions qu\'il faisait d\'avant correspondaient à moins de saturation, moins d\'anomalies. L\'avant était documenté dans ses lettres.',
    },
    etat_actuel: {
      titre: 'Le gardien de lettres',
      contenu: 'Il vit dans ses souvenirs et ses lettres. Il attend que quelqu\'un lui demande ce qu\'il sait.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vorethyn_lettres',
      titre: 'L\'avant documenté',
      description: 'Vorethyn possède 40 ans de correspondance administrative sur l\'Isthme d\'avant la Saturation. Si quelqu\'un — Sorvael (188), Kareol (183), un chercheur — consulte ses lettres et les compare aux données actuelles, la progression de la saturation sur 40 ans deviendra mesurable d\'une façon que les données officielles ne permettent pas.',
      personnages_impliques: [59],
      declencheur: 'Quelqu\'un demandant à Vorethyn de consulter ses lettres pour comprendre l\'état de l\'Isthme avant la saturation',
      consequence: 'Mesure de la progression de la saturation sur 40 ans — et compréhension que la saturation de l\'Isthme est un phénomène long-terme, pas récent',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Vieux bureaucrate retraité gardant des lettres de l\'Isthme avant la Saturation élémentaire. Témoin de l\'avant. Ses lettres permettraient de mesurer la progression sur 40 ans.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions politiques ayant des équivalents dans les précédents historiques de sa mémoire.' },
  ],

  combat: {
    sorts: [
      'Frappe administrative (Normal) — coup sec et précis — défense minimale',
      'Résistance du vieux (Normal) — endurance physique acquise par la vie — survie prolongée',
    ],
  },

  image_prompts: [
    {
      id: 'vorethyn_lettres',
      description: 'Vorethyn dans son appartement de retraite dans l\'Isthme — un Homme-Lien de 71 ans entouré de boîtes de lettres classées par décennie. Il en tient une de 40 ans auparavant et relit une description de l\'Isthme qu\'il connaissait. La fenêtre montre l\'Isthme actuel — les mêmes rues, une atmosphère légèrement différente. Il voit la différence parce qu\'il a les deux.',
      style: 'réaliste Homme-Lien bureaucrate retraité, Isthme, lettres historiques, avant la Saturation, mémoire d\'époque, comparaison avant/après',
    },
  ],

  lore_long: `Vorethyn a travaillé dans l'administration de l'Isthme pendant 40 ans. Il garde des lettres de toute cette période.

Il a connu l'Isthme avant la Saturation élémentaire. Ses lettres documentent ce qu'il était — un état de comparaison que les données officielles ne permettent pas.

Il attend que quelqu'un lui demande ce qu'il sait. Personne n'est encore venu lui poser les bonnes questions.`,
};

export default vorethyn;
