import type { PersonnageLoreComplet } from '../../../lore-types';

const talvyn: PersonnageLoreComplet = {
  id: 23,
  nom: 'Talvyn',
  element: 'Electrique',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 52 ans — ingénieur des strates basses, ses ailes portent les marques d\'un travail physique quotidien sur les plateformes. Ni l\'élégance des strates hautes ni l\'abandon des ruines. Une forme utilitaire.',
    peau: 'Pâle Aéride avec des marques d\'induction électrique permanentes aux mains et aux avant-bras — 30 ans de travail sur les champs électriques des strates. Les marques nouvelles sont rares : il travaille maintenant avec des instruments plus que ses mains.',
    yeux: 'Gris-électrique avec une qualité de détection des champs — il "voit" les flux électriques dans les structures sans instrument. Une adaptation développée au fil des années.',
    vetements: 'Combinaison de travail avec des poches pour les instruments et des renforts aux coudes et aux genoux. Des traces de graisse et de résine électrique que le lavage n\'efface jamais complètement.',
    signes_particuliers: 'Il sait toujours l\'heure exacte — son corps s\'est synchronisé avec les cycles des champs électriques des strates, qui oscillent selon des intervalles réguliers. Il ne porte pas de montre. Il n\'en a pas besoin.',
  },

  psychologie: {
    dominante: 'Mainteneur invisible des champs électriques qui permettent à Asterciel de fonctionner depuis 30 ans — il maintient ce que l\'aristocratie stellaire utilise sans le voir. Sa compétence est le fondement de leur mode de vie. Il n\'est pas amer de ça. Il l\'est de l\'indifférence.',
    mecanisme_de_defense: 'L\'excellence technique comme réponse à l\'invisibilité. Si son travail est parfait, la structure tient. Si la structure tient, les personnes qu\'il maintient peuvent continuer. Ce n\'est pas de la fierté — c\'est une conviction sur ce qui compte.',
    contradiction_interne: 'Il voit les défaillances avant qu\'elles arrivent — des patterns dans les champs qui annoncent des problèmes dans 3 à 6 semaines. Il les signale systématiquement. Il n\'a pas toujours le budget pour les corriger. Parfois une défaillance qu\'il avait prévue se produit et des personnes en pâtissent. Il continue à signaler.',
    rapport_aux_autres: 'Caerra (28) est l\'ingénieure qui partage sa vision d\'une reconstruction de la plateforme Ouest — différemment positionnée socialement, mais la même compréhension de la structure. Gavryn (102) est son collègue technicien qui voit les mêmes défaillances que lui. Seravyn (110) représente les strates basses dans les institutions mais ses demandes arrivent après lui.',
    vision_du_monde: 'Les strates hautes fonctionnent parce que des personnes comme lui maintiennent les champs en bas. Cette réalité n\'est pas reconnue. Il n\'a pas besoin qu\'elle le soit pour continuer son travail. Il a besoin qu\'elle le soit pour continuer à signaler sans qu\'on l\'ignore.',
  },

  histoire: {
    enfance: {
      titre: 'Les champs des strates basses',
      contenu: 'À 14 ans, dans les strates basses d\'Asterciel, il avait découvert que les champs électriques qui maintenaient les plateformes en suspension avaient des patterns — des oscillations prévisibles, des points de pression, des signatures qui permettaient de prévoir leur comportement. À 18 ans, il était devenu technicien de maintenance.',
    },
    arrivee: {
      titre: 'La Chute des Nuages',
      contenu: 'À 22 ans, pendant la Chute des Nuages, il avait vu les champs se déstabiliser en temps réel — une défaillance en cascade qu\'il avait tenté de contenir depuis son poste de maintenance. Il n\'avait pas pu arrêter la Chute, mais il avait stabilisé 3 plateformes secondaires qui auraient dû tomber. Ces stabilisations n\'avaient été notées dans aucun rapport officiel.',
    },
    premier_conflit: {
      titre: 'Le rapport ignoré',
      contenu: 'À 35 ans, il avait prévu une défaillance majeure dans les connexions de la plateforme Ouest avec 4 semaines d\'avance. Son rapport avait reçu la réponse habituelle : "en traitement, budget insuffisant". La défaillance s\'était produite. La plateforme Ouest était devenue les ruines qu\'Yrith (25) habitait maintenant.',
    },
    revelation: {
      titre: 'La compréhension de Caerra',
      contenu: 'À 45 ans, Caerra (28) l\'avait contacté pour son projet de reconstruction de la plateforme Ouest. Elle avait les mêmes connaissances techniques que lui sur les champs, mais une position différente — elle agissait là où il signalait. Il travaillait avec elle depuis 7 ans.',
    },
    etat_actuel: {
      titre: 'La défaillance en cours',
      contenu: 'Il a identifié une nouvelle défaillance dans les connexions centrales d\'Asterciel — dans 8 à 12 semaines si non corrigée. Son rapport est déposé. Gavryn (102) a les mêmes données. Caerra a demandé à intégrer ces données dans son projet de reconstruction. La réponse officielle est "en attente d\'évaluation".',
    },
  },

  evenements_narratifs: [
    {
      id: 'talvyn_defaillance',
      titre: 'La défaillance prévue',
      description: 'La défaillance dans les connexions centrales qu\'il a identifiée est dans 8 à 12 semaines. Si elle se produit comme il la prédit, les strates moyennes perdront 30% de leur sustentation — des plateformes partielles tomberont. Il a les données. Il ne peut pas agir sans budget. Caerra (28) a un plan alternatif mais nécessite son soutien technique.',
      personnages_impliques: [28, 102],
      declencheur: 'Défaillance prévisible sans intervention — décision entre attendre le budget officiel ou agir avec Caerra',
      consequence: 'Si attente : la défaillance se produit et des personnes en pâtissent. Si action avec Caerra : intervention non officielle avec des ressources non budgétées.',
    },
    {
      id: 'talvyn_aristocratie',
      titre: 'La visibilité forcée',
      description: 'Telos (29) a demandé à rencontrer l\'ingénieur responsable de la maintenance des champs dans les strates basses — dans le cadre de sa recherche sur les archives de Veralith. Talvyn ne sait pas pourquoi Telos s\'intéresse à lui. Serathis (24) a été informé de cette rencontre et s\'en inquiète.',
      personnages_impliques: [29, 24],
      declencheur: 'Intérêt inhabituel de Telos pour l\'ingénieur de maintenance des strates basses',
      consequence: 'Visibilité soudaine d\'un personnage qui a fonctionné dans l\'invisibilité pendant 30 ans',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Ingénieur de maintenance des champs électriques des strates basses d\'Asterciel depuis 30 ans. A prévu et signalé la défaillance de la plateforme Ouest avant la Chute sans être entendu. Travaille avec Caerra (28) sur la reconstruction.',

  relations: [
    { id: 28, nom: 'Caerra', type: 'allié', note: 'Partage la vision de la reconstruction. Agit là où Talvyn signale.' },
    { id: 102, nom: 'Gavryn', type: 'allié', note: 'Collègue technicien avec les mêmes données sur les défaillances.' },
    { id: 29, nom: 'Telos', type: 'contact', note: 'A demandé à le rencontrer dans un contexte inhabituel.' },
  ],

  combat: {
    sorts: [
      'Décharge de champ (Electrique) — libération d\'énergie accumulée dans les champs de maintenance — impact de zone',
      'Court-circuit structurel (Electrique) — surcharge ciblée d\'un système électrique — désactivation d\'équipements',
      'Stabilisation d\'urgence (Electrique) — renforcement temporaire d\'un champ défaillant — maintien d\'une structure en crise',
    ],
  },

  image_prompts: [
    {
      id: 'talvyn_maintenance',
      description: 'Talvyn sur une plateforme des strates basses d\'Asterciel — un Aéride de 52 ans travaillant sur un système de connexion électrique, ses outils dans les mains, des données sur un panneau devant lui. En arrière-plan, les strates hautes visibles en haut. Il ne les regarde pas.',
      style: 'réaliste ingénieur Aéride strates basses, maintenance de champs électriques, Asterciel, invisibilité volontaire',
    },
  ],

  lore_long: `Talvyn maintient les champs électriques qui permettent à Asterciel de fonctionner depuis 30 ans. Il voit les défaillances avant qu'elles arrivent. Il les signale. Il n'a pas toujours le budget pour les corriger.

Il avait prévu la défaillance de la plateforme Ouest 4 semaines avant la Chute des Nuages. Son rapport était "en traitement". La plateforme est tombée.

Il travaille avec Caerra (28) sur la reconstruction depuis 7 ans. Il a identifié une nouvelle défaillance majeure dans 8 à 12 semaines.`,
};

export default talvyn;
