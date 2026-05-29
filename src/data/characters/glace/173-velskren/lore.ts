import type { PersonnageLoreComplet } from '../../../lore-types';

const velskren: PersonnageLoreComplet = {
  id: 173,
  nom: 'Velskren',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Givrin de 38 ans, fonctionnaire Dissident — corpulence neutre, tenue qui ne se distingue pas dans les archives officielles.',
    peau: 'Blanche-cristalline sans marques particulières — exactement l\'apparence d\'un archiviste ordinaire de la Monarchie.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui surveille les entrées et sorties sans en avoir l\'air.',
    vetements: 'Tenue d\'archiviste de la Monarchie Givrine — il porte l\'uniforme qu\'on attend de lui.',
    signes_particuliers: 'Il ralentit les ordres de silence de Keldris en faisant "disparaître" des documents dans le système administratif. Les documents ne sont pas détruits — ils sont déplacés dans des sous-registres que personne ne consulte.',
  },

  psychologie: {
    dominante: 'Archiviste Dissident infiltré dans l\'administration de la Monarchie. Il ne sabote pas les ordres de Keldris (57) — il les ralentit. Des documents disparaissent dans le labyrinthe administratif, réapparaissent dans des sous-registres, nécessitent des vérifications qui prennent du temps. Le temps est ce que les Dissidentes ont besoin.',
    mecanisme_de_defense: 'Le dysfonctionnement bureaucratique plausible. Ses "erreurs" sont indiscernables des inefficacités normales d\'un grand système administratif. Il n\'y a rien à prouver.',
    contradiction_interne: 'Il travaille dans le système qu\'il sabote. Il utilise sa compréhension des procédures de la Monarchie pour les retourner contre elle. Cette position lui donne accès à des informations qu\'aucun autre Dissident n\'a. Elle l\'expose aussi à des risques qu\'aucun autre Dissident ne comprend.',
    rapport_aux_autres: 'Keldris (57) est son adversaire — celui dont les ordres il ralentit. Sylkra (53) est son contact Dissident — l\'analyste qui lui dit quels documents doivent le plus ralentir.',
    vision_du_monde: 'La résistance n\'est pas toujours directe. Parfois, elle ressemble à de l\'inefficacité administrative. Il fait son travail. Son travail inclut de petits dysfonctionnements stratégiques.',
  },

  histoire: {
    enfance: {
      titre: 'Les archives',
      contenu: 'Formation d\'archiviste à Crysalme. Il avait été recruté par la Monarchie à 25 ans pour sa précision. Il avait accepté avec une intention différente.',
    },
    arrivee: {
      titre: 'Les Dissidentes',
      contenu: 'Il avait été approché par les Dissidentes à 30 ans — ils avaient besoin de quelqu\'un dans les archives officielles. Son recrutement par la Monarchie avait été leur opportunité. Il avait commencé à ralentir les procédures discrètement.',
    },
    premier_conflit: {
      titre: 'L\'ordre de silence',
      contenu: 'Keldris avait émis un ordre de silence sur les recherches de Sylkra (53) — les observations de micro-fractures devaient être classifiées. Velskren avait fait passer l\'ordre à travers 4 sous-registres différents. Il avait pris 6 semaines à atteindre le bon bureau. Sylkra avait eu le temps de partager ses données.',
    },
    revelation: {
      titre: 'La limite',
      contenu: 'Il avait compris que son méthode avait une limite — il pouvait ralentir, pas bloquer. Un ordre suffisamment urgent passerait malgré ses délais. Sa valeur était dans les marges de temps, pas dans les blocages complets.',
    },
    etat_actuel: {
      titre: 'L\'archiviste discret',
      contenu: 'Il archive. Il ralentit. Personne ne sait encore.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velskren_silence',
      titre: 'Le document qui disparaît',
      description: 'Velskren fait disparaître les ordres de silence de Keldris (57) dans le système administratif. Si Keldris découvrait le pattern — des délais systématiques sur des documents spécifiques — il pourrait identifier Velskren. Ou une urgence pourrait nécessiter un ordre qui passe instantanément, révélant que les délais habituels étaient anormaux.',
      personnages_impliques: [57, 53],
      declencheur: 'Keldris notant un pattern dans les délais administratifs sur des documents sensibles',
      consequence: 'Velskren identifié comme source de sabotage — ou contraint d\'utiliser une méthode plus risquée pour un ordre urgent',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Saboteur administratif Dissident infiltré dans les archives de la Monarchie. Ralentit les ordres de silence de Keldris en faisant disparaître des documents dans les sous-registres.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'adversaire', note: 'Dont les ordres il ralentit via dysfonctionnements administratifs plausibles.' },
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'Contact Dissident lui indiquant quels documents doivent être prioritairement ralentis.' },
  ],

  combat: {
    sorts: [
      'Frappe de glace (Glace) — impact direct — attaque de terrain',
      'Bouclier givré (Glace) — protection défensive — survie',
    ],
  },

  image_prompts: [
    {
      id: 'velskren_archives',
      description: 'Velskren dans les archives officielles de Crysalme — un Givrin de 38 ans déplaçant un document d\'un registre à un sous-registre rarement consulté. Son expression est concentrée et ordinaire. Il ressemble exactement à un archiviste faisant son travail. Il fait son travail.',
      style: 'réaliste Givrin archiviste infiltré, Crysalme, sabotage administratif discret, archives officielles, résistance invisible',
    },
  ],

  lore_long: `Velskren est archiviste dans l'administration de la Monarchie Givrine. Il est aussi Dissident.

Il ralentit les ordres de silence de Keldris (57) en faisant "disparaître" des documents dans des sous-registres. Les documents ne sont pas détruits — ils sont retardés. Le temps gagné permet aux Dissidentes d'agir.

Personne ne sait encore. Les délais ressemblent à des inefficacités ordinaires.`,
};

export default velskren;
