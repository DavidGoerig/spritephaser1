import type { PersonnageLoreComplet } from '../../../lore-types';

const solvara: PersonnageLoreComplet = {
  id: 91,
  nom: 'Solvara',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 42 ans, grande avec la posture d\'une avocate — droite, précise dans ses gestes, habituée aux salles d\'audience. Sa corpulence dit l\'endurance plutôt que la force.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse aux mains — les gestes d\'une juriste qui argumentent avec le corps autant que la voix.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui cherche les angles légaux dans chaque situation.',
    vetements: 'Tenue d\'avocate confédérale — formelle, correcte. Elle représente des clients sans ressources dans des procès qu\'elle perd systématiquement. Sa tenue ne reflète pas les résultats.',
    signes_particuliers: 'Ses procès pour les droits des Élus non-enregistrés sont systématiquement perdus. Elle les continue. Cette persistance est soit de l\'espoir soit du calcul.',
  },

  psychologie: {
    dominante: 'Avocate confédérale qui défend les droits des Élus non-enregistrés à Thalassyr. Ses procès sont perdus systématiquement — le cadre légal ne reconnaît pas les droits qu\'elle argumente. Elle continue quand même.',
    mecanisme_de_defense: 'Le droit comme espace de résistance. Même des procès perdus créent des précédents — des arguments qui existent dans les archives et peuvent être cités plus tard.',
    contradiction_interne: 'Elle défend des droits que le système légal ne reconnaît pas encore. Sa persistance peut être vue comme de l\'espoir — ou comme un refus de voir que le cadre ne changera pas sans une pression hors du cadre légal.',
    rapport_aux_autres: 'Shaleth (16) est dans son champ de vision — une figure institutionnelle dont elle connaît certaines activités. Elle ne les approuve pas, mais ses outils sont légaux.',
    vision_du_monde: 'Le droit peut changer. Les arguments doivent exister pour que le droit puisse les utiliser plus tard. Elle construit des arguments pour un futur tribunal qui n\'existe pas encore.',
  },

  histoire: {
    enfance: {
      titre: 'Le droit',
      contenu: 'Formation juridique confédérale. Spécialisée dans les droits élémentaires à 28 ans — une niche peu attractive, peu payée, avec des résultats difficiles.',
    },
    arrivee: {
      titre: 'Les Élus non-enregistrés',
      contenu: 'Son premier client non-enregistré avait été une erreur d\'aiguillage — elle avait été assignée par défaut. Elle avait perdu le procès. Mais l\'argument avait tenu plus longtemps qu\'elle ne l\'avait prévu. Elle avait continué.',
    },
    premier_conflit: {
      titre: 'La systématicité',
      contenu: 'Après 10 procès perdus, elle avait compris que la perte était systémique — pas une question de qualité d\'argument, mais de cadre légal. Elle avait décidé que changer le cadre prenait du temps, et que ses pertes étaient du travail préparatoire.',
    },
    revelation: {
      titre: 'Les archives',
      contenu: 'Ses argumentaires étaient archivés dans les registres confédéraux. Quelqu\'un qui cherchait les arguments pour les droits élémentaires trouverait 12 ans de son travail. C\'était sa contribution — pas les victoires.',
    },
    etat_actuel: {
      titre: 'Le prochain procès',
      contenu: 'Elle prépare le prochain dossier. Elle va le perdre. Les arguments seront dans les archives.',
    },
  },

  evenements_narratifs: [
    {
      id: 'solvara_precedents',
      titre: 'Les archives légales comme ressource',
      description: 'Solvara a 12 ans d\'argumentaires sur les droits des Élus non-enregistrés dans les archives confédérales. Si le cadre légal change — sous pression politique, après une crise, après un changement d\'administration — son travail devient une base. Si quelqu\'un cherche à formaliser ces droits, c\'est elle qui a la bibliothèque.',
      personnages_impliques: [16],
      declencheur: 'Changement de cadre légal autour des droits des Élus non-enregistrés',
      consequence: 'Le travail de Solvara devenant une ressource — ou une cible si les droits qu\'elle a argumentés sont explicitement bannis',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Avocate confédérale défendant les Élus non-enregistrés. Procès systématiquement perdus. Construit des arguments pour un futur cadre légal.',

  relations: [
    { id: 16, nom: 'Shaleth', type: 'adversaire', note: 'Figure institutionnelle dans son champ de vision. Opposition légale.' },
  ],

  combat: {
    sorts: [
      'Barrière aqueuse (Eau) — protection défensive — outil de survie pas de combat',
      'Flux persuasif (Eau) — courant d\'eau dirigé — utilisation utilitaire',
    ],
  },

  image_prompts: [
    {
      id: 'solvara_tribunal',
      description: 'Solvara dans une salle d\'audience confédérale à Thalassyr — une Néréide de 42 ans argumentant devant un tribunal. Son expression est de conviction professionnelle. Elle va perdre ce procès. Ses arguments sont dans les archives.',
      style: 'réaliste Néréide avocate, salle d\'audience confédérale, Thalassyr, procès perdu systémiquement, travail pour le futur',
    },
  ],

  lore_long: `Solvara défend les droits des Élus non-enregistrés à Thalassyr depuis 12 ans. Ses procès sont systématiquement perdus.

Elle continue. Ses argumentaires dans les archives confédérales sont son vrai travail — des arguments pour un futur cadre légal.

La perte systémique n'est pas un échec pour elle. C'est du travail préparatoire.`,
};

export default solvara;
