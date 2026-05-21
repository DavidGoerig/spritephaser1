import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrsaevyn: PersonnageLoreComplet = {
  id: 359,
  nom: 'Thyrsaevyn',
  element: 'Electrique',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Ingénieur — des mains larges qui manipulent des équipements physiques autant que des systèmes électriques. Une façon de se tenir qui indique quelqu\'un habituée à résoudre des problèmes concrets.',
    peau: 'Brun clair Homme-Lien avec des marques d\'induction électrique caractéristiques aux avant-bras et aux mains — les zones de contact lors de travaux sur des systèmes sous tension.',
    yeux: 'Brun avec une qualité d\'observation des systèmes — il voit les flux et les points de défaillance avant les surfaces.',
    vetements: 'Tenue d\'ingénieur de terrain — outils intégrés, zones de protection aux points de contact électrique, fonctionnelle.',
    signes_particuliers: 'Il explique ce qu\'il fait en temps réel — une habitude de sécurité. Si quelque chose tourne mal pendant un travail sur un système sous tension, la personne à côté de lui sait où il en était.',
  },

  psychologie: {
    dominante: 'Aide aux Élus de Virex pour masquer leurs signatures électriques — modification de l\'environnement électrique autour d\'eux pour rendre leurs signatures indiscernables du bruit de fond de la zone de saturation.',
    mecanisme_de_defense: 'La solution technique. Chaque problème de signature est un problème d\'ingénierie. Les problèmes d\'ingénierie ont des solutions. Il cherche les solutions.',
    contradiction_interne: 'Les masquages qu\'il développe sont temporaires — la signature d\'un Élu s\'adapte à l\'environnement et finit par se distinguer à nouveau du masquage. Il doit intervenir régulièrement. Il ne peut pas être partout. Les Élus qui ne sont pas près de lui sont progressivement plus exposés.',
    rapport_aux_autres: 'Velkrael (358) est un contact Dissident qui utilise ses masquages dans ses opérations d\'effacement — les Élus dont les traces sont effacées par Velkrael ont souvent besoin de masquages actifs pour éviter d\'être ré-identifiés. Thyrekavel (275) est un ingénieur d\'une autre région avec qui il partage des méthodes de masquage.',
    vision_du_monde: 'Les Élus ont des signatures électriques détectables. Ces signatures les mettent en danger. Il peut rendre ces signatures moins détectables. C\'est concret. Il le fait.',
  },

  histoire: {
    enfance: {
      titre: 'Les champs de saturation',
      contenu: 'À 14 ans, il avait appris que les zones de saturation électrique de l\'Isthme créaient un bruit de fond électrique qui masquait naturellement certaines signatures élémentaires. Il avait commencé à étudier comment amplifier et contrôler ce masquage naturel.',
    },
    arrivee: {
      titre: 'Le premier Élu aidé',
      contenu: 'À 24 ans, un Élu de son quartier lui avait demandé de l\'aide — ses déplacements étaient devenus dangereux depuis que l\'analyse des signatures s\'était intensifiée dans la zone. Il avait installé un masquage autour de l\'appartement de l\'Élu. Le masquage avait tenu 3 semaines. Il avait commencé à travailler sur une version plus durable.',
    },
    premier_conflit: {
      titre: 'L\'adaptation de la signature',
      contenu: 'À 29 ans, il avait réalisé que les signatures électriques des Élus s\'adaptaient progressivement au masquage — elles se distinguaient à nouveau après quelques semaines. Ce n\'était pas un défaut de sa technique. C\'était la nature des signatures élémentaires. Il avait dû accepter que ses masquages nécessitaient une maintenance régulière.',
    },
    revelation: {
      titre: 'La connexion avec Velkrael',
      contenu: 'Velkrael (358) l\'avait contacté via un intermédiaire Dissident. Elle effaçait les traces dans les systèmes d\'enregistrement. Ses masquages empêchaient les nouvelles traces de se former. Les deux méthodes se complétaient. Il avait accepté de coordonner leurs interventions.',
    },
    etat_actuel: {
      titre: 'Les 7 masquages actifs',
      contenu: 'Il maintient 7 masquages actifs pour des Élus de la zone de Virex. 3 de ces masquages arrivent à expiration — ils nécessitent une recalibration dans les prochains jours. 2 autres sont en demande de la part d\'Élus dont les signatures ont été identifiées par l\'analyse de Thyvsaevyn (357). Il n\'a pas encore eu le temps d\'intervenir sur ces 2 nouvelles demandes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrsaevyn_capacite_limite',
      titre: 'La limite de capacité',
      description: '7 masquages actifs. 3 en expiration. 2 nouvelles demandes. Sa capacité d\'intervention est physiquement limitée — il ne peut pas être partout. Les 2 nouvelles demandes viennent d\'Élus identifiés par Thyvsaevyn (357). Chaque jour de retard est un jour où ils restent exposés.',
      personnages_impliques: [358, 275],
      declencheur: 'Accumulation de demandes dépassant la capacité d\'intervention',
      consequence: '2 Élus identifiés par Thyvsaevyn sans masquage actif — exposition temporaire',
    },
    {
      id: 'thyrsaevyn_temporalite',
      titre: 'Le masquage comme maintenance',
      description: 'Ses masquages durent 2 à 4 semaines avant de nécessiter une recalibration. 7 masquages actifs signifient une recalibration continue. Si le nombre de demandes augmente — ce qu\'il anticipe avec l\'intensification des analyses impériales — sa méthode individuelle ne sera plus suffisante. Il commence à envisager d\'enseigner sa méthode à d\'autres.',
      personnages_impliques: [275, 358],
      declencheur: 'Rythme de recalibration devenant structurellement insuffisant',
      consequence: 'Transmission de méthode envisagée — solution à la limite de capacité individuelle',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Ingénieur indépendant aidant les Élus de Virex à masquer leurs signatures électriques. 7 masquages actifs dont 3 en expiration et 2 nouvelles demandes d\'Élus identifiés par Thyvsaevyn. Sa capacité individuelle est atteinte.',

  relations: [
    { id: 358, nom: 'Velkrael', type: 'allié', note: 'Contact Dissident. Leurs méthodes se complètent — elle efface, il masque les nouvelles signatures. Coordination des interventions.' },
    { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Ingénieur d\'une autre région. Partage de méthodes de masquage. Envisagé comme candidat à la transmission.' },
  ],

  combat: {
    sorts: [
      'Brouillage de signature (Electrique) — émission d\'un champ électrique qui masque la signature de la cible — protection contre la détection',
      'Surcharge localisée (Electrique) — surcharge d\'un système de détection par excès de signal — neutralisation de capteur',
      'Résistance d\'induction (Normal) — protection physique contre les décharges électriques d\'un système protégé — maintien de l\'intervention',
    ],
  },

  image_prompts: [
    {
      id: 'thyrsaevyn_calibration',
      description: 'Thyrsaevyn en train de calibrer un masquage de signature dans l\'appartement d\'un Élu à Virex. Il a des instruments de mesure disposés dans l\'espace et ajuste un système d\'émission électrique intégré à la structure de la pièce. Il explique ce qu\'il fait à voix haute. La personne qu\'il aide l\'observe.',
      style: 'réaliste ingénieur Homme-Lien, calibration de masquage, appartement de Virex, explication en temps réel',
    },
  ],

  lore_long: `Thyrsaevyn masque les signatures électriques des Élus de Virex pour les rendre indiscernables du bruit de fond des zones de saturation.

7 masquages actifs. 3 en expiration. 2 nouvelles demandes d'Élus identifiés par Thyvsaevyn (357). Sa capacité individuelle est atteinte.

Les masquages durent 2 à 4 semaines — maintenance continue. Si les demandes augmentent avec l'intensification des analyses impériales, il ne pourra plus gérer seul. Il envisage d'enseigner sa méthode à Thyrekavel (275).`,
};

export default thyrsaevyn;
