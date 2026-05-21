import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkrael: PersonnageLoreComplet = {
  id: 364,
  nom: 'Thyrkrael',
  element: 'Combat',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Officier de sécurité — une corpulence d\'autorité sans ostentation. Il n\'a pas besoin de paraître intimidant. Sa position l\'est suffisamment.',
    peau: 'Brun Homme-Lien avec une posture stable — quelqu\'un habituée à occuper un espace sans s\'imposer. Peu de marques visibles.',
    yeux: 'Brun avec une qualité d\'observation institutionnelle — il surveille les comportements et les protocoles, pas les personnes individuelles.',
    vetements: 'Tenue d\'officier de sécurité Confédération — identifiable, pas militaire au sens impérial. Une autorité civile dans un espace disputé.',
    signes_particuliers: 'Il formule ses observations en termes de protocoles — "cela ne correspond pas à l\'accord du..." plutôt que "c\'est inacceptable". Cette formulation est une posture professionnelle. Elle est aussi un outil — les protocoles ont des textes, et les textes peuvent être cités.',
  },

  psychologie: {
    dominante: 'Surveillance des accords entre Empire et Confédération dans les zones de saturation de l\'Isthme — vérification que les opérations impériales respectent les termes des accords, identification des écarts, transmission aux négociateurs.',
    mecanisme_de_defense: 'Les accords comme cadre d\'action. Tant que les violations sont documentées dans le cadre des accords existants, il a des leviers. Les violations hors cadre — celles que les accords n\'ont pas anticipées — sont plus difficiles à traiter.',
    contradiction_interne: 'Les checkpoints de Thyrkael (351) sont au bord du territoire couvert par les accords existants — pas clairement dans la zone Confédération, pas clairement hors. Il documente les écarts. Vashkael (352) négocie. Mais les accords n\'évoluent pas assez vite par rapport aux opérations impériales sur le terrain.',
    rapport_aux_autres: 'Thyven (62) est son supérieur dans la hiérarchie Confédération — il reçoit ses rapports et définit les priorités de surveillance. Thalven (193) est son contact pour les informations sur les opérations impériales dans les zones où il n\'a pas accès direct.',
    vision_du_monde: 'Les accords entre factions sont des instruments imparfaits mais réels. Documenter les violations est utile même si elles ne sont pas toutes corrigées — elles créent un dossier. Les dossiers ont une valeur à long terme.',
  },

  histoire: {
    enfance: {
      titre: 'Les zones disputées',
      contenu: 'À 16 ans, il avait grandi dans une zone de l\'Isthme disputée entre autorités locales — pas entre factions majeures, entre administrations civiles. Il avait observé comment les différences de juridiction créaient des espaces où rien ne s\'appliquait vraiment. C\'était problématique. Il avait compris que les accords clairs valaient mieux que les zones grises.',
    },
    arrivee: {
      titre: 'L\'intégration à la sécurité Confédération',
      contenu: 'À 27 ans, Thyven (62) l\'avait recruté pour le service de sécurité Confédération dans l\'Isthme. Sa connaissance des dynamiques locales et sa capacité à lire les textes d\'accord en termes pratiques étaient utiles. Il avait accepté une position de surveillance.',
    },
    premier_conflit: {
      titre: 'Le premier écart documenté',
      contenu: 'À 31 ans, il avait documenté un écart entre les opérations d\'une unité impériale et les termes d\'un accord de coopération sur les zones de saturation. Il avait transmis à Thyven. L\'écart avait été soulevé dans une réunion de coordination. L\'Empire avait fourni une interprétation alternative du texte. L\'écart était resté non résolu.',
    },
    revelation: {
      titre: 'Les checkpoints de Thyrkael',
      contenu: 'Thyrkael (351) avait installé 4 checkpoints autour de Virex dans une zone ambiguë des accords existants. L\'installation avait précédé toute notification à la Confédération. Vashkael (352) avait ouvert des négociations sur la juridiction. Thyrkrael documentait les opérations de ces checkpoints en attendant — nombre de passages contrôlés, incidents, correspondance avec les termes des accords.',
    },
    etat_actuel: {
      titre: 'Le dossier des checkpoints',
      contenu: 'Il a constitué un dossier de 47 écarts documentés dans les opérations des checkpoints de Thyrkael — des contrôles dans des zones couvertes par les accords, des délais d\'inspection non conformes, une interprétation extensive de la zone d\'opération. Ces 47 écarts sont transmis à Thyven. Les négociations de Vashkael ont 3 semaines devant elles.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkrael_dossier_checkpoints',
      titre: 'Les 47 écarts',
      description: '47 écarts documentés dans les opérations des checkpoints de Thyrkael (351). Ces données alimentent les négociations de Vashkael (352). Thyven (62) les utilise pour soutenir sa position dans les discussions avec l\'Empire. La valeur du dossier dépend de ce que les négociations peuvent en faire — et les négociations ont une limite de 3 semaines.',
      personnages_impliques: [62, 352],
      declencheur: 'Accumulation d\'écarts documentés dans les opérations des checkpoints',
      consequence: 'Dossier utilisé dans les négociations — valeur dépendante de l\'issue de ces négociations',
    },
    {
      id: 'thyrkrael_demonstration_kasevolt',
      titre: 'La démonstration hors accord',
      description: 'La démonstration terrain du prototype de Kasevolt (360) à Virex n\'est couverte par aucun accord existant — c\'est une opération Convergence, pas impériale, dans une zone ambiguë. Thyrkrael n\'a pas de mandat clair pour la surveiller ou la contester. Il en a informé Thyven. Thyven réfléchit à la réponse appropriée.',
      personnages_impliques: [62, 352],
      declencheur: 'Annonce de démonstration terrain de Kasevolt dans zone non explicitement couverte',
      consequence: 'Zone grise protocolaire — Confédération sans leviers clairs pour intervenir',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Officier de sécurité Confédération documentant les écarts des checkpoints impériaux de Thyrkael à Virex. 47 écarts transmis à Thyven. La démonstration de Kasevolt est hors accord — zone grise sans leviers clairs.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'supérieur', note: 'Reçoit les rapports d\'écarts et définit les priorités de surveillance. Utilise le dossier dans les négociations.' },
    { id: 193, nom: 'Thalven', type: 'allié', note: 'Contact pour les informations sur les opérations impériales dans les zones sans accès direct.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'autorité (Combat) — impact physique avec poids institutionnel — déstabilisation d\'un opposant',
      'Résistance de position (Normal) — maintien d\'une position physique ou tactique sous pression — stabilité défensive',
      'Intervention encadrée (Combat + Normal) — action physique dans les limites du mandat — neutralisation sans escalade',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkrael_documentation',
      description: 'Thyrkrael à proximité d\'un checkpoint impérial à Virex — il prend des notes sur une tablette de documentation, observant les opérations depuis une distance protocolaire. Son expression est neutre et professionnelle. Il ne confronte pas. Il documente.',
      style: 'réaliste officier de sécurité Homme-Lien Confédération, documentation de terrain, checkpoint impérial, neutralité professionnelle',
    },
  ],

  lore_long: `Thyrkrael surveille les accords entre Empire et Confédération dans l'Isthme. Il documente les écarts, les transmet à Thyven (62), et les fournit aux négociations de Vashkael (352).

47 écarts documentés dans les opérations des checkpoints de Thyrkael (351). Les négociations ont 3 semaines.

La démonstration terrain de Kasevolt (360) est hors accord — ni impériale, ni dans une zone clairement Confédération. Il n'a pas de mandat pour l'intervenir. Il a informé Thyven. La réponse n'est pas encore définie.`,
};

export default thyrkrael;
