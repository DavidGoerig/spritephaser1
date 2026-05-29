import type { PersonnageLoreComplet } from '../../../lore-types';

const sorthel: PersonnageLoreComplet = {
  id: 82,
  nom: 'Sorthel',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 55 ans, large et durci par des décennies en mer. Ses mains sont les mains d\'un navigateur — calleuses, précises sur une carte. Il connaît la mer par le corps, pas par les documents.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse vive aux avant-bras — l\'élément Eau d\'un marin de fond qui a passé plus de temps sur l\'eau que sur la terre.',
    yeux: 'Bleus profonds, avec la qualité de quelqu\'un qui lit l\'eau et le vent comme d\'autres lisent des textes.',
    vetements: 'Tenue de navigation pratique — imperméable, couches multiples, rien de superflu. Ses cartes sont dans sa veste, pas dans un sac.',
    signes_particuliers: 'Ses cartes des routes pré-Silence des Vents sont illégales. Il les garde quand même. Il considère les routes naturelles comme des faits, pas comme des propriétés de l\'Empire.',
  },

  psychologie: {
    dominante: 'Vieux marin qui connaît les routes maritimes de Thalassyr telles qu\'elles étaient avant le Silence des Vents. Ces routes — les routes naturelles du vent — sont maintenant illégales ou inutilisables. Ses cartes le sont aussi. Il les garde.',
    mecanisme_de_defense: 'La mer comme territoire propre. Ce qu\'il sait de la mer n\'appartient pas à l\'Empire.',
    contradiction_interne: 'Il connaît des routes que les Dissidents pourraient utiliser. Il ne les a pas offerts. Vel (17) est dans son réseau — il sait ce que Vel fait, partiellement. Il n\'a pas dit non non plus.',
    rapport_aux_autres: 'Vel (17) est un contact de réseau — Sorthel l\'approvisionne en informations maritimes sans savoir entièrement à quoi elles servent.',
    vision_du_monde: 'La mer a des routes depuis toujours. Le Silence des Vents les a rendues moins pratiques. L\'Empire les a rendues illégales. Les deux changements sont réels. Aucun n\'efface les routes.',
  },

  histoire: {
    enfance: {
      titre: 'La mer',
      contenu: 'En mer depuis l\'âge de 12 ans. Ses premières routes avaient été apprises de son père, qui les avait apprises du sien. Un savoir navigateur entièrement oral et pratique.',
    },
    arrivee: {
      titre: 'Le Silence des Vents',
      contenu: 'Le Silence des Vents avait changé la navigation à Thalassyr radicalement. Les routes naturelles — celles qu\'il avait apprises — ne fonctionnaient plus de la même façon. Il avait mis 2 ans à développer les routes alternatives adaptées.',
    },
    premier_conflit: {
      titre: 'L\'illégalité',
      contenu: 'L\'Empire avait déclaré certaines routes maritimes hors des routes officielles illégales. Ses cartes — avec les routes naturelles d\'avant — correspondaient à des zones maintenant interdites. Il avait continué à les utiliser.',
    },
    revelation: {
      titre: 'Vel',
      contenu: 'Vel (17) l\'avait contacté pour des informations sur des routes spécifiques. Sorthel avait fourni sans demander le pourquoi. Le réseau avait des utilisateurs qu\'il ne connaissait pas directement.',
    },
    etat_actuel: {
      titre: 'Les routes persistent',
      contenu: 'Il navigue encore. Ses cartes illégales restent dans sa veste. La mer ne change pas selon les décrets impériaux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sorthel_cartes',
      titre: 'Les routes de l\'avant',
      description: 'Les cartes de Sorthel montrent les routes maritimes naturelles de Thalassyr avant le Silence des Vents. Ces routes sont illégales mais réelles. Elles pourraient servir à extraire des personnes recherchées ou à transporter des informations hors des routes impériales. Si quelqu\'un les récupère de force, Sorthel perd plus qu\'un document.',
      personnages_impliques: [17],
      declencheur: 'Quelqu\'un ayant besoin des routes pré-Silence pour une opération urgente',
      consequence: 'Sorthel devant décider de l\'usage de ses cartes — ou les voir utilisées sans son accord',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Marin avec les cartes des routes pré-Silence des Vents. Illégales. Il les garde. Contact de Vel (17).',

  relations: [
    { id: 17, nom: 'Vel', type: 'contact', note: 'Contact réseau. Lui fournit des informations maritimes.' },
  ],

  combat: {
    sorts: [
      'Maîtrise des courants (Eau) — navigation précise dans des conditions difficiles — avantage tactique en mer',
      'Vague de pression (Eau) — onde de choc aquatique — défense à distance sur l\'eau',
    ],
  },

  image_prompts: [
    {
      id: 'sorthel_cartes',
      description: 'Sorthel sur son bateau dans la mer de Thalassyr — un Néréide de 55 ans consultant ses cartes illégales. Les routes y tracées correspondent aux vents naturels d\'avant. Ses yeux bleus lisent la mer et les lignes avec le même regard.',
      style: 'réaliste Néréide marin vétéran, cartes illégales pré-Silence, mer de Thalassyr, routes naturelles persistantes',
    },
  ],

  lore_long: `Sorthel navigue à Thalassyr avec des cartes des routes pré-Silence des Vents. Ces routes sont maintenant illégales.

Il les garde. La mer a des routes depuis toujours — les décrets impériaux ne les effacent pas.

Il est dans le réseau de Vel (17), fournissant des informations maritimes sans en connaître l'usage complet.`,
};

export default sorthel;
