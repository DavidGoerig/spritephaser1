import type { PersonnageLoreComplet } from '../../../lore-types';

const isarath: PersonnageLoreComplet = {
  id: 85,
  nom: 'Isarath',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 38 ans, de taille ordinaire avec une posture d\'attente — les épaules légèrement baissées, les yeux qui scrutent les nouvelles personnes pour voir si elles portent des informations. Elle attend depuis 2 ans.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse pâle — l\'élément Eau d\'une femme dont l\'énergie s\'est organisée autour de l\'attente.',
    yeux: 'Bleus avec une qualité d\'espoir maintenu contre l\'évidence.',
    vetements: 'Tenue ordinaire de Néréide civile. Elle n\'appartient à aucune faction. Elle n\'a nulle part à aller qui aide son fils.',
    signes_particuliers: 'Son fils est un des 39 enfants de Virex. Elle n\'a pas de nouvelles depuis 2 ans. Elle est à Thalassyr, son fils est dans l\'Isthme, et les canaux officiels ont cessé de répondre.',
  },

  psychologie: {
    dominante: 'Mère d\'un des 39 enfants double-puissance de Virex. Elle n\'a pas de nouvelles depuis 2 ans. Elle est dans la position d\'une personne sans ressources institutionnelles face à une situation institutionnelle — son fils est dans un espace que ni la Confédération ni l\'Empire ne gèrent de façon transparente.',
    mecanisme_de_defense: 'L\'espoir maintenu comme fonctionnement. Si elle s\'arrête d\'attendre, elle doit décider quoi faire de l\'absence de réponse.',
    contradiction_interne: 'Elle a fait confiance aux structures officielles pour protéger son fils. Ces structures ne lui donnent plus de nouvelles. La confiance et l\'absence de réponse coexistent sans qu\'elle puisse les réconcilier.',
    rapport_aux_autres: 'Thyven (62) est l\'administrateur de Virex — elle lui a écrit deux fois sans réponse directe. Lysael (63) — elle ne sait pas que Lysael opère à Virex pour la Convergence, mais si elle le savait, elle ne saurait pas si c\'est bon ou mauvais.',
    vision_du_monde: 'Les institutions protègent les enfants. C\'est ce qu\'elles sont censées faire. L\'absence de nouvelles est une anomalie, pas une confirmation que les institutions ont échoué.',
  },

  histoire: {
    enfance: {
      titre: 'La famille',
      contenu: 'Née à Thalassyr dans une famille de pêcheurs. Son fils avait manifesté deux éléments distincts à l\'âge de 8 ans — une anomalie qu\'elle avait signalée aux autorités comme demandé. Elles l\'avaient enregistré et informée que Virex avait des structures d\'accueil adaptées.',
    },
    arrivee: {
      titre: 'Le départ',
      contenu: 'Son fils avait été orienté vers Virex à 10 ans. Elle avait accepté parce que les alternatives disponibles à Thalassyr étaient inexistantes pour un enfant double-puissance. Les 2 premières années, il avait écrit.',
    },
    premier_conflit: {
      titre: 'Le silence',
      contenu: 'Il y a 2 ans, les lettres avaient cessé. Elle avait contacté les structures officielles. Elle avait reçu une réponse générique la première fois. Plus rien après.',
    },
    revelation: {
      titre: 'L\'absence de réponse',
      contenu: 'Elle avait compris que l\'absence de réponse était une réponse — mais pas une réponse qu\'elle pouvait interpréter. Mort ? Transfert ? Changement de statut ? Les structures officielles ne lui disaient rien de précis.',
    },
    etat_actuel: {
      titre: 'L\'attente',
      contenu: 'Elle continue à attendre à Thalassyr. Elle n\'a pas les ressources pour se rendre à Virex. Elle n\'appartient à aucun réseau qui pourrait l\'aider.',
    },
  },

  evenements_narratifs: [
    {
      id: 'isarath_fils',
      titre: 'La mère sans nouvelles',
      description: 'Isarath n\'a pas de nouvelles de son fils depuis 2 ans. Son fils est un des 39 enfants de Virex — dans la zone où Thyven (62), Lysael (63) et bientôt Avel (64) vont converger. Si quelqu\'un lui donnait des nouvelles réelles — bonnes ou mauvaises — ça changerait quelque chose.',
      personnages_impliques: [62, 63],
      declencheur: 'Quelqu\'un croisant Isarath à Thalassyr et sachant quelque chose sur les enfants de Virex',
      consequence: 'Isarath recevant une information sur son fils — et devant décider quoi en faire',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Mère d\'un des 39 enfants de Virex. Aucune nouvelle depuis 2 ans. À Thalassyr, sans ressources pour agir.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administrateur de Virex. A écrit deux fois sans réponse directe.' },
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Ne sait pas que Lysael opère à Virex.' },
  ],

  combat: {
    sorts: [
      'Courant de protection (Eau) — barrière aqueuse — défense instinctive',
      'Flux d\'eau (Eau) — manipulation d\'eau ambiante — usage utilitaire',
    ],
  },

  image_prompts: [
    {
      id: 'isarath_attente',
      description: 'Isarath à Thalassyr — une Néréide de 38 ans regardant vers la mer, dans la direction de l\'Isthme. Son expression est d\'espoir maintenu. Elle attend des nouvelles de son fils depuis 2 ans. Les nouvelles ne viennent pas.',
      style: 'réaliste Néréide mère en attente, Thalassyr, regard vers l\'Isthme, espoir maintenu, Silence des Vents contexte',
    },
  ],

  lore_long: `Isarath est mère d'un des 39 enfants double-puissance de Virex. Elle n'a pas de nouvelles depuis 2 ans.

Elle a fait confiance aux structures officielles. Les structures ne répondent plus.

Elle est à Thalassyr, sans ressources pour agir, dans une situation que personne dans son entourage ne peut résoudre.`,
};

export default isarath;
