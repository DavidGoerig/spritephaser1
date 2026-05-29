import type { PersonnageLoreComplet } from '../../../lore-types';

const narevael: PersonnageLoreComplet = {
  id: 84,
  nom: 'Narevael',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Néréide de 40 ans, athlétique avec les épaules d\'un pêcheur converti. Il a gardé la musculature du travail halieutique mais ses mains font maintenant autre chose. Ce changement est visible si on sait le lire.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse aux avant-bras — l\'élément Eau d\'un homme qui connaît la mer et ses courants.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui calcule les risques en permanence.',
    vetements: 'Tenue de pêcheur ordinaire — suffisamment crédible pour ses déplacements en mer. Ce qu\'il transporte est dans des compartiments imperceptibles.',
    signes_particuliers: 'Il transporte les données de Thariel (18) vers le réseau Dissident. Il est la courroie de transmission entre deux mondes. Il ne les comprend pas entièrement tous les deux.',
  },

  psychologie: {
    dominante: 'Pêcheur converti en espion pour les Dissidentes. Il transporte les données de Thariel (18) — des informations sur les courants artificiels et les archives de Thalassyr — vers le réseau Dissident via Velath (49). Il ne lit pas les données. Il les livre.',
    mecanisme_de_defense: 'La couverture professionnelle comme identité réelle. Il est pêcheur. Il pêche. Ce qu\'il transporte avec ses filets est une autre question.',
    contradiction_interne: 'Il croit aux Dissidentes mais n\'a pas eu à décider entièrement ce qu\'elles représentent — il fait une fonction spécifique. La question de ce que ses données alimentent reste ouverte.',
    rapport_aux_autres: 'Thariel (18) est sa source — il ne la voit pas souvent, leurs échanges sont brefs et codés. Velath (49) est sa destination — un contact de l\'autre bout de la chaîne.',
    vision_du_monde: 'L\'information dans les bonnes mains change les choses. Les Dissidentes ont les bonnes mains pour certaines choses. Il fait sa part.',
  },

  histoire: {
    enfance: {
      titre: 'La pêche',
      contenu: 'Né dans une famille de pêcheurs Néréides à Thalassyr. La mer était son travail et son territoire depuis l\'enfance. Le Silence des Vents avait compliqué la pêche traditionnelle.',
    },
    arrivee: {
      titre: 'La conversion',
      contenu: 'À 35 ans, un contact Dissident lui avait proposé une activité parallèle à la pêche — transporter des contenants étanches le long de routes maritimes spécifiques. La paie était convenable. Les risques étaient clairs. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'Thariel',
      contenu: 'La nature des contenants avait évolué — d\'objets à des données encodées. Il avait rencontré Thariel (18) une fois pour comprendre la nouvelle procédure. Il avait réalisé que ce qu\'il transportait avait une valeur différente.',
    },
    revelation: {
      titre: 'La chaîne',
      contenu: 'Il ne sait pas entièrement ce que les données de Thariel contiennent ni ce que le réseau Dissident en fait. Cette ignorance est choisie — il ne veut pas savoir plus que nécessaire.',
    },
    etat_actuel: {
      titre: 'La livraison',
      contenu: 'Il pêche. Il livre. Les deux activités coexistent dans ses journées sans conflit apparent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'narevael_transport',
      titre: 'La courroie de transmission',
      description: 'Narevael transporte les données entre Thariel (18) et Velath (49) sans en comprendre le contenu. Si une de ces transmissions est interceptée, il est le lien physique entre deux réseaux — la capture de Narevael expose les deux extrémités.',
      personnages_impliques: [18, 49],
      declencheur: 'Une transmission interceptée ou Narevael suivi lors d\'une livraison',
      consequence: 'Narevael devenant le lien exposé entre Thariel et Velath',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Pêcheur-espion qui transporte les données de Thariel (18) vers le réseau Dissident de Velath (49). Courroie de transmission entre deux mondes.',

  relations: [
    { id: 18, nom: 'Thariel', type: 'allié', note: 'Source des données. Contact rare et codé.' },
    { id: 49, nom: 'Velath', type: 'allié', note: 'Destination du réseau Dissident.' },
  ],

  combat: {
    sorts: [
      'Courant défensif (Eau) — manipulation d\'un courant marin — déstabilisation d\'un poursuivant',
      'Plongée furtive (Eau) — immersion rapide et silencieuse — disparition en mer',
    ],
  },

  image_prompts: [
    {
      id: 'narevael_peche',
      description: 'Narevael sur son bateau de pêche à Thalassyr — un Néréide de 40 ans remontant ses filets avec quelque chose de plus dans un compartiment du bateau. Son expression est de quelqu\'un qui fait son travail ordinaire et son autre travail en même temps.',
      style: 'réaliste Néréide pêcheur-espion, bateau de pêche, Thalassyr, double activité, couverture ordinaire',
    },
  ],

  lore_long: `Narevael est pêcheur à Thalassyr et transporte les données de Thariel (18) vers Velath (49) pour les Dissidentes.

Il ne lit pas les données. Il les livre. Cette ignorance est choisie.

Il est la courroie de transmission physique entre deux réseaux — la seule vulnérabilité de la chaîne.`,
};

export default narevael;
