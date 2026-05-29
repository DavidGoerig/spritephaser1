import type { PersonnageLoreComplet } from '../../../lore-types';

const velryn: PersonnageLoreComplet = {
  id: 114,
  nom: 'Velryn',
  element: 'Stellaire',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 52 ans, posture d\'un enseignant — habituée à être écoutée, habituée à choisir ses mots.',
    peau: 'Pâle bleutée Aéride avec une luminescence stellaire calme et constante — son élément est intégré, pas performatif.',
    yeux: 'Dorés avec une qualité de quelqu\'un qui a pensé longuement à ce qu\'elle dit et à ce que ça implique.',
    vetements: 'Tenue simple des strates basses — elle n\'est pas de l\'aristocratie et ne le simule pas.',
    signes_particuliers: 'Elle enseigne Veralith comme mythe humain, pas comme figure divine. Dans les strates basses d\'Asterciel, c\'est illégal.',
  },

  psychologie: {
    dominante: 'Philosophe des strates basses qui enseigne Veralith comme construction humaine — un mythe fondateur, pas une vérité transcendante. Cette interprétation est illégale à Asterciel. Elle continue d\'enseigner.',
    mecanisme_de_defense: 'La distinction entre philosophie et sédition. Elle n\'attaque pas Veralith — elle l\'analyse. Cette distinction existe dans sa tête. Elle n\'est pas certaine qu\'elle résisterait à un tribunal.',
    contradiction_interne: 'Elle croit que sa position est défendable intellectuellement. Elle sait qu\'Asterciel ne l\'entendra pas comme une position intellectuelle.',
    rapport_aux_autres: 'Syvara (30) est dans son réseau — quelqu\'un qui travaille avec des données qui correspondent à ses analyses. Serathis (24) est l\'adversaire institutionnel — celui qui applique les lois sur Veralith.',
    vision_du_monde: 'Les mythes fondateurs de sociétés sont des constructions humaines. Comprendre leur construction permet de comprendre la société. Veralith n\'est pas différent. Cette compréhension est subversive précisément parce qu\'elle est exacte.',
  },

  histoire: {
    enfance: {
      titre: 'Les strates basses',
      contenu: 'Née dans les strates basses d\'Asterciel. Formation autodidacte — les strates basses n\'ont pas d\'institutions philosophiques financées. Elle avait construit son cadre de pensée à partir de textes accessibles et de conversations.',
    },
    arrivee: {
      titre: 'L\'enseignement',
      contenu: 'À 40 ans, elle avait commencé à enseigner dans des espaces informels des strates basses — ateliers, regroupements, espaces de travail. Ses auditeurs cherchaient quelque chose qu\'elle ne nommait pas encore clairement.',
    },
    premier_conflit: {
      titre: 'Veralith',
      contenu: 'Elle avait commencé à intégrer Veralith dans ses analyses — non pas comme figure mystique mais comme personnage historique dont le récit avait été construit pour servir l\'aristocratie stellaire. Un auditeur avait signalé la session. Elle avait eu un avertissement.',
    },
    revelation: {
      titre: 'L\'illégalité',
      contenu: 'Elle avait compris que l\'illégalité de sa position n\'était pas dans l\'argumentation — c\'était dans le fait que l\'argumentation était convaincante. Un mythe indémontable est protégé. Un mythe démontable est dangereux.',
    },
    etat_actuel: {
      titre: 'L\'enseignement illégal',
      contenu: 'Elle continue d\'enseigner dans des espaces plus petits, plus discrets. Serathis (24) sait qu\'elle existe. Il n\'a pas encore décidé d\'agir.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velryn_arrestation',
      titre: 'La philosophe et la loi',
      description: 'Velryn enseigne Veralith comme mythe humain dans les strates basses — illégalement. Serathis (24) sait qu\'elle existe. Si une de ses sessions est documentée ou que la pression politique sur Veralith augmente, Serathis aura une raison d\'agir. Velryn sera soit arrêtée, soit obligée de cesser — ou de fuir.',
      personnages_impliques: [30, 24],
      declencheur: 'Pression politique sur Veralith ou documentation d\'une de ses sessions',
      consequence: 'Velryn arrêtée, forcée à fuir, ou choisissant de rendre sa position publique',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Philosophe des strates basses. Enseigne Veralith comme mythe humain — illégal. Serathis sait qu\'elle existe.',

  relations: [
    { id: 30, nom: 'Syvara', type: 'contact', note: 'Données qui correspondent à ses analyses.' },
    { id: 24, nom: 'Serathis', type: 'adversaire', note: 'Adversaire institutionnel. Sait qu\'elle existe. N\'a pas encore agi.' },
  ],

  combat: {
    sorts: [
      'Lumière d\'analyse (Stellaire) — projection lumineuse révélant les structures cachées — usage philosophique et défensif',
      'Éclat de vérité (Stellaire) — faisceau de clarté — désorientation d\'adversaire',
    ],
  },

  image_prompts: [
    {
      id: 'velryn_enseignement',
      description: 'Velryn dans un espace informel des strates basses d\'Asterciel — une Aéride de 52 ans enseignant à un petit groupe. Elle parle de Veralith comme d\'un personnage historique. Son expression est de quelqu\'un qui dit ce qu\'elle pense et sait ce que ça risque.',
      style: 'réaliste Aéride philosophe, strates basses d\'Asterciel, enseignement illégal, Veralith comme mythe humain',
    },
  ],

  lore_long: `Velryn enseigne dans les strates basses d'Asterciel que Veralith est un mythe humain, pas une figure divine. C'est illégal.

Serathis (24) sait qu'elle existe. Il n'a pas encore agi.

Sa protection repose sur la distinction entre philosophie et sédition — une distinction qu'Asterciel ne reconnaît pas.`,
};

export default velryn;
