import type { PersonnageLoreComplet } from '../../../lore-types';

const velkrael: PersonnageLoreComplet = {
  id: 358,
  nom: 'Velkrael',
  element: 'Normal',
  element2: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Compacte, avec des mouvements rapides et économes — quelqu\'un habituée à travailler dans des délais courts sur des systèmes qui ne tolèrent pas les erreurs.',
    peau: 'Brun Homme-Lien avec des marques d\'induction électrique aux mains et aux poignets — les zones de contact lors des intrusions dans des systèmes électriques protégés.',
    yeux: 'Noirs avec un focus d\'attention qui peut sembler fixe. Quand elle regarde un système, elle le lit comme un texte — rapidement et avec précision.',
    vetements: 'Tenue discrète sans marqueur. Des gants fins isolants qu\'elle retire quand elle travaille sur un système — le contact direct améliore sa lecture électrique.',
    signes_particuliers: 'Elle marmonne pendant qu\'elle travaille sur un système — pas des mots, des patterns. C\'est la façon dont elle traite les structures électriques qu\'elle lit. Les personnes qui l\'observent travai ller ne comprennent généralement pas ce qu\'elles entendent.',
  },

  psychologie: {
    dominante: 'Intrusion et modification des systèmes d\'enregistrement impériaux dans l\'Isthme — suppression de données sur des Élus, modification de registres, effacement de trajectoires dans les archives de surveillance.',
    mecanisme_de_defense: 'Le résultat concret. Chaque intrusion réussie est un Élu dont la trace a été effacée. Ce résultat est mesurable et immédiat.',
    contradiction_interne: 'Ses intrusions dans les systèmes impériaux sont détectées parfois — pas toujours la source, mais la modification. L\'Empire renforce ses systèmes en réaction à chaque intrusion. Elle améliore ses méthodes en réaction à chaque renforcement. La course ne s\'arrête pas.',
    rapport_aux_autres: 'Tharvyn (190) est son contact Dissident pour les priorités d\'intrusion — il identifie quels systèmes contiennent des données urgentes à effacer. Sylkavel (264) est un contact technique qui développe des outils que Velkrael utilise pour les intrusions les plus protégées.',
    vision_du_monde: 'Les systèmes d\'enregistrement impériaux sont la mémoire de la surveillance. Effacer des données dans cette mémoire est effacer une partie de la capacité de surveillance. Elle efface.',
  },

  histoire: {
    enfance: {
      titre: 'Les systèmes de quartier',
      contenu: 'À 16 ans, le quartier où elle habitait avait installé un système de surveillance électrique impérial. Elle avait passé 6 mois à l\'étudier — comment il fonctionnait, ce qu\'il enregistrait, comment ses données circulaient. À 17 ans, elle l\'avait modifié pour la première fois sans en avoir compris toutes les implications.',
    },
    arrivee: {
      titre: 'L\'intégration Dissidente',
      contenu: 'À 23 ans, Tharvyn (190) l\'avait contactée après avoir entendu parler de ses modifications locales. Les Dissidents avaient besoin de quelqu\'un qui comprenait les systèmes d\'enregistrement impériaux de l\'intérieur. Elle avait demandé quels systèmes. La réponse avait été : tous ceux qui contenaient des données sur des Élus.',
    },
    premier_conflit: {
      titre: 'La détection',
      contenu: 'À 27 ans, une de ses intrusions avait été détectée comme modification suspecte — pas elle, la modification. L\'Empire avait renforcé le système en question. Elle avait dû développer une nouvelle méthode pour ce type de système. Sylkavel (264) lui avait fourni un outil spécialisé. Elle avait utilisé l\'outil et perfectionné la technique.',
    },
    revelation: {
      titre: 'Les données de Karesyl',
      contenu: 'Tharvyn (190) lui avait signalé que des données de la Confédération sur les anomalies électriques de l\'Isthme circulaient dans des systèmes impériaux — des données qui croisées avec les signatures d\'Élus amélioraient la précision de leur localisation. Ces données n\'étaient pas dans les systèmes d\'enregistrement standard qu\'elle ciblait habituellement. Elle avait besoin d\'une nouvelle cible.',
    },
    etat_actuel: {
      titre: 'Les systèmes de signature',
      contenu: 'Elle a ciblé les systèmes analytiques de Thyvsaevyn (357) — les bases de données de signatures d\'Élus qu\'il maintient. Ses premières tentatives d\'intrusion ont été bloquées par des protections qu\'elle n\'avait pas rencontrées dans les systèmes standard. Elle attend un outil de Sylkavel (264) adapté à cette protection.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkrael_systemes_thyvsaevyn',
      titre: 'La nouvelle cible',
      description: 'Elle cible les systèmes analytiques de Thyvsaevyn (357) — les bases de données de signatures d\'Élus. Les protections sont nouvelles pour elle. Elle attend un outil de Sylkavel (264). Ce délai est un risque — Thyvsaevyn continue d\'analyser pendant qu\'elle attend.',
      personnages_impliques: [190, 264],
      declencheur: 'Identification des systèmes analytiques de Thyvsaevyn comme cible prioritaire',
      consequence: 'Intrusion bloquée en attente d\'outil — délai pendant lequel les analyses continuent',
    },
    {
      id: 'velkrael_course_systems',
      titre: 'La course aux renforcements',
      description: 'Chaque intrusion réussie est détectée comme modification. L\'Empire renforce. Elle améliore. Sylkavel (264) développe de nouveaux outils. Le rythme de cette course détermine le rapport de force. Si Sylkavel développe plus vite que l\'Empire ne renforce, elle garde l\'avantage. Si l\'Empire renforce plus vite, elle perd progressivement l\'accès.',
      personnages_impliques: [264, 190],
      declencheur: 'Pattern de renforcement impérial après chaque intrusion détectée',
      consequence: 'Course technologique — rapport de force déterminé par le rythme comparé de développement',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Hackeuse Dissidente des systèmes d\'enregistrement impériaux dans l\'Isthme. Cible actuellement les bases de données de signatures de Thyvsaevyn (357). Bloquée en attente d\'un outil de Sylkavel.',

  relations: [
    { id: 190, nom: 'Tharvyn', type: 'allié', note: 'Identifie les systèmes prioritaires à cibler. Source des priorités d\'intrusion.' },
    { id: 264, nom: 'Sylkavel', type: 'allié', note: 'Développe des outils d\'intrusion spécialisés. Outil en attente pour les protections de Thyvsaevyn.' },
  ],

  combat: {
    sorts: [
      'Surge d\'intrusion (Electrique) — surcharge électrique ciblée sur un système de protection — neutralisation de barrière',
      'Effacement de trace (Normal) — suppression méthodique des traces d\'une intrusion — invisibilité post-intrusion',
      'Lecture de système (Electrique + Normal) — contact direct pour analyser la structure d\'un système électrique — cartographie rapide',
    ],
  },

  image_prompts: [
    {
      id: 'velkrael_intrusion',
      description: 'Velkrael en contact direct avec un panneau de système impérial — ses mains nues sur des surfaces métalliques, les yeux mi-clos. Elle marmonne. Son expression est concentrée et rapide. Le panneau montre des fluctuations électriques légères au niveau de ses points de contact.',
      style: 'réaliste hackeuse Homme-Lien, contact direct avec système électrique, marmonnement de travail, intrusion en cours',
    },
  ],

  lore_long: `Velkrael efface les traces d'Élus dans les systèmes d'enregistrement impériaux de l'Isthme. Chaque intrusion réussie est détectée comme modification — l'Empire renforce, elle améliore. Course continue.

Elle cible maintenant les systèmes analytiques de Thyvsaevyn (357) — ses bases de données de signatures d'Élus. Les protections sont nouvelles. Elle attend un outil de Sylkavel (264).

Pendant qu'elle attend, Thyvsaevyn continue d'analyser.`,
};

export default velkrael;
