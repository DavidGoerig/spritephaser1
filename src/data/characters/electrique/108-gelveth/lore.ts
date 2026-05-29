import type { PersonnageLoreComplet } from '../../../lore-types';

const gelveth: PersonnageLoreComplet = {
  id: 108,
  nom: 'Gelveth',
  element: 'Electrique',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 55 ans, ancien ingénieur avec la corpulence d\'un homme qui n\'a plus de structure professionnelle. Pas négligé — simplifié. Il vit sur ce qu\'il lui reste.',
    peau: 'Pâle bleutée Aéride avec des éclairs électriques irréguliers — son élément est moins contrôlé depuis la Chute. Il n\'a plus les conditions pour l\'entraîner.',
    yeux: 'Gris électrique avec une qualité de quelqu\'un qui regarde les ruines de ce qu\'il a construit.',
    vetements: 'Tenue usée, réparée avec ce qu\'il trouve. Fonctionnelle sur une plateforme partielle.',
    signes_particuliers: 'Il vit sur une plateforme partiellement détruite par la Chute des Nuages depuis 15 ans. Il n\'a jamais essayé de partir.',
  },

  psychologie: {
    dominante: 'Ancien ingénieur reconverti en vagabond sur une plateforme partielle depuis la Chute des Nuages. Il a participé à la construction des liens inter-strates dans sa carrière. La Chute a détruit ce qu\'il avait construit. Il vit dans les ruines.',
    mecanisme_de_defense: 'La présence sur les ruines comme forme de responsabilité. Si ce qu\'il avait construit s\'est effondré, il peut au moins rester là.',
    contradiction_interne: 'Rester sur la plateforme détruite ne répare pas la Chute. Sa présence n\'a pas de fonction réparatrice — c\'est une façon d\'éviter de partir.',
    rapport_aux_autres: 'Yrith (25) est une figure de référence — quelqu\'un dont il connaît les travaux sur les strates basses. Gelveth l\'a observé de loin.',
    vision_du_monde: 'Il a construit des choses qui ont tenu 20 ans. La Chute les a brisées. Cette rupture entre construction et destruction est quelque chose qu\'il n\'a pas entièrement résolu.',
  },

  histoire: {
    enfance: {
      titre: 'L\'ingénierie',
      contenu: 'Formation d\'ingénieur à Asterciel. Carrière dans les liens inter-strates. 20 ans de travaux qui tenaient.',
    },
    arrivee: {
      titre: 'La Chute',
      contenu: 'La Chute des Nuages avait détruit plusieurs structures qu\'il avait conçues. Sa plateforme de travail était partiellement effondrée. Il avait décidé de rester dessus.',
    },
    premier_conflit: {
      titre: 'Le refus de partir',
      contenu: 'On lui avait proposé de se reloger dans les strates basses. Il avait refusé. On lui avait proposé une position technique dans une autre zone. Il avait refusé. Il n\'avait pas expliqué clairement pourquoi.',
    },
    revelation: {
      titre: 'La vie sur la plateforme',
      contenu: '15 ans plus tard, il avait développé une façon de vivre sur la plateforme partielle. Ce n\'était pas confortable — c\'était son espace.',
    },
    etat_actuel: {
      titre: 'La plateforme',
      contenu: 'Il vit sur la plateforme détruite. Il connaît les courants électriques dans les débris mieux que quiconque.',
    },
  },

  evenements_narratifs: [
    {
      id: 'gelveth_expertise',
      titre: 'L\'expert des ruines',
      description: 'Gelveth a une connaissance technique des structures de la Chute des Nuages que personne d\'autre n\'a — il y vit depuis 15 ans. Si quelqu\'un veut comprendre la Chute, comprendre les structures qui ont tenu et celles qui ont cédé, ou tenter une reconstruction partielle, c\'est Gelveth qui a les informations.',
      personnages_impliques: [25],
      declencheur: 'Quelqu\'un cherchant à comprendre les structures de la Chute pour la reconstruction ou autre',
      consequence: 'Gelveth devenant une ressource technique malgré sa position marginale',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Ancien ingénieur vivant sur une plateforme détruite depuis 15 ans. Expertise des ruines de la Chute. Refus de partir.',

  relations: [
    { id: 25, nom: 'Yrith', type: 'contact', note: 'Figure observée de loin. Travaux sur les strates basses.' },
  ],

  combat: {
    sorts: [
      'Décharge de ruines (Electrique) — utilisation des fils électriques des débris — danger de terrain',
      'Frappe électrique (Electrique) — attaque directe — usage défensif sur sa plateforme',
    ],
  },

  image_prompts: [
    {
      id: 'gelveth_plateforme',
      description: 'Gelveth sur sa plateforme partiellement détruite d\'Asterciel — un Aéride de 55 ans entouré de structures endommagées qu\'il a contribué à construire. Son expression est de quelqu\'un qui est resté là où d\'autres seraient partis.',
      style: 'réaliste Aéride ancien ingénieur, plateforme détruite d\'Asterciel, ruines de la Chute, présence dans les débris',
    },
  ],

  lore_long: `Gelveth est ancien ingénieur des liens inter-strates d'Asterciel. La Chute des Nuages a détruit ses structures.

Il vit sur une plateforme partiellement détruite depuis 15 ans. Il a refusé de partir.

Sa connaissance technique des ruines est unique — il y habite.`,
};

export default gelveth;
