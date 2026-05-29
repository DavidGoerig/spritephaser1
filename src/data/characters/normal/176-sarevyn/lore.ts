import type { PersonnageLoreComplet } from '../../../lore-types';

const sarevyn: PersonnageLoreComplet = {
  id: 176,
  nom: 'Sarevyn',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 43 ans, coordinateur — corpulence discrète, habituée aux contacts sans laisser de traces.',
    peau: 'Ton neutre — rien qui distingue, rien qui attire l\'attention. C\'est intentionnel.',
    yeux: 'Bruns avec une qualité de quelqu\'un qui évalue instantanément si une personne est fiable.',
    vetements: 'Tenue ordinaire de l\'Isthme — il ressemble à n\'importe qui.',
    signes_particuliers: 'Il met en contact des personnes qui ne se connaissent pas — sans jamais expliquer pourquoi elles ont besoin de se connaître. Son réseau fonctionne par contacts successifs, pas par organisation centrale.',
  },

  psychologie: {
    dominante: 'Coordinateur Dissident dans l\'Isthme. Il crée des connexions entre des personnes qui ont des besoins complémentaires — sans que l\'une sache nécessairement l\'identité complète de l\'autre. Son réseau est horizontal et compartimenté. Il en est le seul point de convergence.',
    mecanisme_de_defense: 'La compartimentalisation comme sécurité. Si une connexion est compromise, elle ne révèle pas le réseau complet. Il est le seul à voir la carte entière.',
    contradiction_interne: 'Il est le seul point de convergence d\'un réseau compartimenté — ce qui signifie qu\'il est aussi le seul point de défaillance. Sa sécurité personnelle détermine la sécurité du réseau entier.',
    rapport_aux_autres: 'Brasia (1) est dans son réseau — une connexion extérieure à l\'Isthme qui lui permet d\'accéder à des ressources qui n\'existent pas localement. Velath (49) est dans son réseau — des routes de passage dans l\'obscurité.',
    vision_du_monde: 'Les personnes qui ont les bons contacts survivent. Les personnes qui n\'en ont pas se retrouvent isolées au moment où l\'Isthme changera. Son travail est de s\'assurer que les bonnes personnes se connaissent avant que ce moment arrive.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Isthme',
      contenu: 'Né à Virex dans une famille de commerçants de l\'Isthme. Il avait appris très tôt que dans un carrefour entre des régions en conflit, la valeur la plus précieuse était de connaître les bonnes personnes.',
    },
    arrivee: {
      titre: 'Le réseau',
      contenu: 'Il avait commencé à construire des connexions informelles à 25 ans — d\'abord pour faciliter son propre commerce, puis parce qu\'il avait compris que les Dissidentes avaient besoin de quelqu\'un qui connaissait tout le monde sans appartenir à personne.',
    },
    premier_conflit: {
      titre: 'La connexion qui a failli',
      contenu: 'Une connexion qu\'il avait créée avait été interceptée — pas les deux personnes, mais l\'intermédiaire. Il avait reconstruit sa procédure pour que les intermédiaires ne sachent pas pourquoi ils transmettaient un message.',
    },
    revelation: {
      titre: 'La carte entière',
      contenu: 'Il avait compris que son réseau fonctionnait parce qu\'il était le seul à voir la carte complète. Cette compréhension l\'avait rendu indispensable — et vulnérable d\'une façon que personne d\'autre ne comprenait.',
    },
    etat_actuel: {
      titre: 'Le coordinateur',
      contenu: 'Il crée des connexions. L\'Isthme se sature. Il prépare les personnes à ce qui vient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sarevyn_connexion',
      titre: 'Le seul point de convergence',
      description: 'Sarevyn est le seul à voir la carte complète de son réseau compartimenté. Si quelque chose lui arrive — arrestation, blessure, disparition — les connexions qu\'il a créées se coupent. Les personnes qu\'il a mises en contact ne sauront pas à qui s\'adresser pour la prochaine connexion nécessaire.',
      personnages_impliques: [1, 49],
      declencheur: 'Sarevyn compromis ou temporairement inaccessible',
      consequence: 'Réseau Dissident dans l\'Isthme fragmenté — des personnes isolées qui ne peuvent plus se reconnecter',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Coordinateur de réseau Dissident dans l\'Isthme. Met en contact des personnes sans que l\'une connaisse l\'identité de l\'autre. Seul point de convergence du réseau compartimenté.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'contact', note: 'Connexion extérieure à l\'Isthme pour des ressources non-disponibles localement.' },
    { id: 49, nom: 'Velath', type: 'contact', note: 'Routes de passage dans l\'obscurité pour des extractions.' },
  ],

  combat: {
    sorts: [
      'Frappe neutre (Normal) — attaque directe sans signature élémentaire — invisible aux détecteurs',
      'Esquive de contact (Normal) — déplacement réactif — survie',
    ],
  },

  image_prompts: [
    {
      id: 'sarevyn_isthme',
      description: 'Sarevyn dans un marché de Virex dans l\'Isthme — un Homme-Lien de 43 ans qui passe d\'une personne à l\'autre en échangeant des salutations ordinaires. Chaque échange transmet quelque chose. Son visage ne change pas entre les contacts. Il ressemble à n\'importe qui.',
      style: 'réaliste Homme-Lien coordinateur, Isthme, réseau compartimenté, contacts discrets, Virex',
    },
  ],

  lore_long: `Sarevyn est coordinateur de réseau dans l'Isthme. Il met en contact des personnes qui ont des besoins complémentaires — sans que l'une sache l'identité complète de l'autre.

Il est le seul point de convergence. Son réseau fonctionne parce qu'il voit la carte entière.

Si quelque chose lui arrive, les connexions se coupent.`,
};

export default sarevyn;
