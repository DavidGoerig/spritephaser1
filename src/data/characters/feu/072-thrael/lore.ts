import type { PersonnageLoreComplet } from '../../../lore-types';

const thrael: PersonnageLoreComplet = {
  id: 72,
  nom: 'Thrael',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrien de 20 ans, grand et fin avec la vitesse de quelqu\'un qui a grandi à courir. Ses jambes sont longues, ses poumons sont bons, et il sait lire une carte de mémoire. Il n\'a pas l\'air d\'un Dissident parce qu\'il ne sait pas encore entièrement ce qu\'il est.',
    peau: 'Brune Pyrien avec une luminescence orange aux chevilles — l\'élément Feu d\'un coureur. La chaleur descend vers ses pieds quand il court vite.',
    yeux: 'Rouges avec une qualité jeune — ils absorbent tout mais comprennent la moitié. Il apprend.',
    vetements: 'Tenue légère de coureur — rien qui appartienne à une faction, assez discret pour ne pas être remarqué, assez rapide pour être difficile à attraper.',
    signes_particuliers: 'Il court des messages sans comprendre entièrement leur contenu. Cette ignorance est sa protection. Il le sait parce qu\'on le lui a dit, pas parce qu\'il l\'a compris lui-même.',
  },

  psychologie: {
    dominante: 'Jeune coursier de 20 ans dans le réseau de Brasia (1). Il court parce qu\'on lui a demandé, parce que c\'est urgent, et parce que dans les ruines post-Rupture de Varkhôl il n\'y avait pas beaucoup d\'autres options pour quelqu\'un de son âge. Il est loyal sans avoir encore testé les limites de cette loyauté.',
    mecanisme_de_defense: 'Le mouvement comme protection. Tant qu\'il court, il n\'a pas à rester immobile face à des questions auxquelles il n\'a pas de réponses.',
    contradiction_interne: 'Il a 20 ans et il transporte des informations dont les conséquences peuvent être sérieuses. Il n\'a pas le contexte pour mesurer ce qu\'il fait. Il fait confiance à ceux qui lui donnent les messages.',
    rapport_aux_autres: 'Brasia (1) est une présence distante — il ne la voit presque jamais, mais c\'est d\'elle que vient le réseau qui lui donne ses missions. Thessandra (10) — il l\'a rencontrée une fois lors d\'une livraison. Elle lui avait semblé quelqu\'un d\'important.',
    vision_du_monde: 'Varkhôl a des gens qui ont besoin d\'aide et des gens qui aident. Les coursiers font partie de ceux qui aident. C\'est suffisant pour l\'instant.',
  },

  histoire: {
    enfance: {
      titre: 'Post-Rupture',
      contenu: 'Né juste avant la Rupture. A grandi dans les quartiers périphériques de Varkhôl pendant la reconstruction — entre les décombres et les marchés improvisés. À 16 ans, il courait déjà des messages informels pour des marchands.',
    },
    arrivee: {
      titre: 'Le réseau',
      contenu: 'À 18 ans, un contact du réseau de Brasia l\'avait approché. Il avait dit oui parce que la paie était meilleure et les missions plus claires que le travail informel. L\'idéologie était venue après — ou pas encore entièrement.',
    },
    premier_conflit: {
      titre: 'Le premier message important',
      contenu: 'Il avait transporté un message qui avait déclenché quelque chose — il ne savait pas quoi, exactement. Il avait vu des conséquences sans comprendre la chaîne. Il avait continué à courir.',
    },
    revelation: {
      titre: 'Thessandra',
      contenu: 'Une rencontre avec Thessandra (10) lors d\'une livraison lui avait donné un contexte qu\'il n\'avait pas cherché. Elle lui avait dit que ce qu\'il faisait comptait. Il l\'avait cru. Il n\'avait pas demandé pourquoi.',
    },
    etat_actuel: {
      titre: 'En course',
      contenu: 'Il court encore. Il comprend un peu plus à chaque mission. Ce qu\'il comprend change lentement sa façon de voir ce qu\'il fait.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thrael_message',
      titre: 'Le message qui a des conséquences',
      description: 'Thrael transporte des informations dont il ne connaît pas toujours le contenu. Un message particulièrement important — ou dangereux — le placera devant la réalité de ce que son rôle signifie. Il devra décider s\'il continue à courir sans comprendre.',
      personnages_impliques: [1, 10],
      declencheur: 'Thrael découvrant le contenu ou les conséquences d\'un message qu\'il a transporté',
      consequence: 'Choix entre continuer dans l\'ignorance protectrice ou chercher à comprendre',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Jeune coursier de 20 ans dans le réseau de Brasia (1). Court sans comprendre entièrement pourquoi. Sa loyauté est réelle. Sa compréhension est partielle.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'allié', note: 'Source des missions. Vue de loin. Loyauté réelle sans relation directe.' },
    { id: 10, nom: 'Thessandra', type: 'contact', note: 'Rencontrée une fois. A donné un contexte partiel. Lui semble importante.' },
  ],

  combat: {
    sorts: [
      'Accélération thermique (Feu) — bouffée de chaleur aux jambes — sprint court de survie',
      'Résistance à la chaleur (Feu) — immunité aux surfaces brûlantes — passage dans des zones endommagées',
    ],
  },

  image_prompts: [
    {
      id: 'thrael_course',
      description: 'Thrael en train de courir dans les ruelles de Varkhôl — un Pyrien de 20 ans, les chevilles lumineuses, un message dans sa poche. Il court vite. Il ne regarde pas ce qu\'il transporte.',
      style: 'réaliste Pyrien coursier, ruelles de Varkhôl post-Rupture, vitesse, loyauté sans compréhension complète',
    },
  ],

  lore_long: `Thrael court des messages pour le réseau de Brasia (1) à Varkhôl. Il a 20 ans.

Il court sans comprendre entièrement pourquoi. Cette ignorance est sa protection — et une limite.

Sa loyauté est réelle. Sa compréhension de ce à quoi il participe grandit lentement.`,
};

export default thrael;
