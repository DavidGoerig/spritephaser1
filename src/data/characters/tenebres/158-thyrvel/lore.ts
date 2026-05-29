import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvel: PersonnageLoreComplet = {
  id: 158,
  nom: 'Thyrvel',
  element: 'Ténèbres',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Umbrien de 44 ans, marchand apparent — trop bien habillé pour un marchand ordinaire des Trois Couches, pas assez ostentatoire pour signaler sa vraie fonction.',
    peau: 'Gris Umbrien avec une luminescence nocturne correctement calibrée — ni trop forte (aristocratique) ni trop faible (suspecte).',
    yeux: 'Noirs avec une qualité de quelqu\'un qui surveille tout en paraissant ne regarder que ce qui est devant lui.',
    vetements: 'Tenue de marchand aisé — fonctionnelle et discrète. La couverture est bien construite.',
    signes_particuliers: 'Marchand officiel servant de couverture à un réseau de collecte impérial. Ses activités commerciales sont réelles — elles financent et justifient sa présence.',
  },

  psychologie: {
    dominante: 'Agent impérial à Vel\'Nox dont la couverture est un commerce de marchandises nocturnes. Ses activités commerciales sont réelles et rentables — elles ne sont pas une façade, elles sont une couverture fonctionnelle. Le réseau de collecte opère en dessous.',
    mecanisme_de_defense: 'La couverture commerciale réelle comme première ligne. Un marchand qui fait vraiment du commerce est plus difficile à démontrer comme agent qu\'un marchand dont le commerce est factice.',
    contradiction_interne: 'Son commerce est réellement profitable. Il s\'est attaché à certains aspects de son activité commerciale d\'une façon qui n\'était pas prévue. Cette attachement peut le pousser à des décisions qui protègent ses affaires plutôt que ses missions.',
    rapport_aux_autres: 'Syreth (153) est dans son réseau impérial — ils partagent des informations sans se rencontrer directement. Shael (48) est un adversaire indirect — leurs activités de collecte se chevauchent.',
    vision_du_monde: 'Vel\'Nox est une ressource pour l\'Empire. Son travail est de la transformer en valeur extractable — informations, accès, contacts. Son commerce est un véhicule pour ça.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Empire',
      contenu: 'Formation impériale en commerce et infiltration. La spécialisation dans les milieux Umbriens était une nécessité — les autres agents impériaux ne se fondaient pas bien.',
    },
    arrivee: {
      titre: 'Le commerce',
      contenu: 'Il avait établi son commerce à Vel\'Nox il y a 5 ans — des marchandises nocturnes adaptées aux marchés umbrien. Le commerce avait marché mieux que prévu. Cette réussite avait renforcé sa couverture et créé une situation qu\'il n\'avait pas entièrement anticipée.',
    },
    premier_conflit: {
      titre: 'L\'attachement',
      contenu: 'Il avait pris des décisions commerciales qui n\'étaient pas dictées par sa mission impériale — de bons choix d\'affaires qui protégeaient ses relations commerciales. Ces décisions avaient parfois retardé des actions de collecte.',
    },
    revelation: {
      titre: 'La double loyauté',
      contenu: 'Il avait compris qu\'il avait développé une loyauté partielle envers ses clients commerciaux — des Umbriens avec qui il faisait des affaires depuis 5 ans. Cette loyauté n\'était pas planifiée.',
    },
    etat_actuel: {
      titre: 'Le commerce et la collecte',
      contenu: 'Il commerce. Il collecte. Les deux fonctions continuent en parallèle — avec une tension croissante entre elles.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvel_conflit',
      titre: 'Le commerce contre la collecte',
      description: 'Thyrvel a développé une loyauté partielle envers ses clients commerciaux à Vel\'Nox. Si l\'Empire lui demande une action qui nuirait directement à ses relations commerciales — ou si ses clients font confiance à une information que sa mission lui demande de trahir — il devra choisir entre sa couverture et sa mission.',
      personnages_impliques: [153, 48],
      declencheur: 'Instruction impériale entrant en conflit direct avec ses relations commerciales',
      consequence: 'Thyrvel choisissant entre mission et commerce — et les conséquences sur sa couverture',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Agent impérial à couverture commerciale réelle à Vel\'Nox. Collecte d\'information pour l\'Empire. Attachement non-planifié à ses relations commerciales.',

  relations: [
    { id: 153, nom: 'Syreth', type: 'contact', note: 'Réseau impérial partagé. Contact sans rencontre directe.' },
    { id: 48, nom: 'Shael', type: 'adversaire', note: 'Activités de collecte qui se chevauchent.' },
  ],

  combat: {
    sorts: [
      'Manteau de commerce (Ténèbres) — obscurcissement de présence — couverture renforcée',
      'Choc de ténèbres (Ténèbres) — attaque directe — usage d\'urgence',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvel_marche',
      description: 'Thyrvel dans son espace commercial de Vel\'Nox — un Umbrien bien habillé qui reçoit un client de commerce tout en observant un autre client que son réseau impérial lui a signalé. Les deux fonctions existent simultanément. Son expression maintient la distinction entre les deux.',
      style: 'réaliste Umbrien agent impérial, couverture commerciale réelle, Vel\'Nox, double activité, tension croissante',
    },
  ],

  lore_long: `Thyrvel est un marchand de Vel'Nox dont le commerce sert de couverture à un réseau de collecte impérial. Ses activités commerciales sont réelles et rentables.

En 5 ans, il a développé une loyauté partielle envers ses clients commerciaux. Ce n'était pas planifié.

Si l'Empire lui demande de trahir ces relations, il devra choisir entre mission et couverture.`,
};

export default thyrvel;
