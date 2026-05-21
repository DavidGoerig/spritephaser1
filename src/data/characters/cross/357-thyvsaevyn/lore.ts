import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvsaevyn: PersonnageLoreComplet = {
  id: 357,
  nom: 'Thyvsaevyn',
  element: 'Electrique',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Analyste — une corpulence adaptée au travail de bureau et d\'instrument, avec des mains précises pour la manipulation de capteurs.',
    peau: 'Brun Homme-Lien avec des marques d\'induction légères aux doigts — une exposition aux capteurs électriques qui laisse des traces sur le long terme.',
    yeux: 'Brun avec une qualité analytique — ils lisent les patterns dans des données, pas les personnes dans des espaces.',
    vetements: 'Tenue d\'analyste impérial — fonctionnelle, identifiable comme technique plutôt que militaire. Les analystes impériaux ne portent pas d\'uniforme de combat.',
    signes_particuliers: 'Il parle de personnes en termes de signatures — "ce Élu a une signature Electrique à 4,2 hertz d\'amplitude". Cette façon de parler est professionnelle. Elle est parfois perçue comme déshumanisante par ceux qui ne partagent pas son cadre.',
  },

  psychologie: {
    dominante: 'Analyse des signatures électriques des Élus de Virex pour le compte impérial — identification, cartographie, suivi. Les Élus avec des capacités Electrique ou de types qui produisent des signatures électriques mesurables peuvent être suivis sans contact physique.',
    mecanisme_de_defense: 'La donnée comme distance. Il analyse des signatures, pas des personnes. Cette distance professionnelle lui permet de traiter des informations sur des individus sans traiter les individus comme des individus.',
    contradiction_interne: 'Ses analyses permettent l\'identification et le suivi d\'Élus. Il sait ce qui arrive à certains Élus après identification — des extractions. Il n\'a pas la certitude sur toutes les suites. Il a une probabilité suffisante pour savoir que ses analyses contribuent à quelque chose dont il ne voit pas toujours la fin.',
    rapport_aux_autres: 'Lysael (63) est son supérieur pour les opérations analytiques impériales dans l\'Isthme. Karesyl (180) est un contact Confédération avec qui il partage certaines données dans le cadre d\'accords de coopération sur les zones de saturation.',
    vision_du_monde: 'Les signatures électriques des Élus sont des données mesurables. Ces données permettent de cartographier une situation que l\'Empire doit gérer. Il gère la donnée. La gestion de la situation appartient à d\'autres.',
  },

  histoire: {
    enfance: {
      titre: 'Les signatures comme langage',
      contenu: 'À 17 ans, sa capacité Electrique lui avait donné une perception naturelle des champs électriques ambiants — il pouvait "entendre" des signatures électriques que les autres ne percevaient pas. Cette perception lui avait semblé naturelle jusqu\'à ce qu\'il réalise que les autres ne l\'avaient pas.',
    },
    arrivee: {
      titre: 'L\'intégration impériale',
      contenu: 'À 25 ans, Lysael (63) l\'avait recruté pour le service analytique impérial. Sa capacité naturelle de perception électrique, combinée à des instruments de mesure, produisait une précision d\'identification des signatures que les instruments seuls ne pouvaient pas atteindre.',
    },
    premier_conflit: {
      titre: 'La signature de l\'enfant',
      contenu: 'À 29 ans, ses analyses avaient identifié une signature Electrique dans une zone de Virex — une signature plus petite et moins développée que les adultes Élus. Il avait rapporté la signature à Lysael. Lysael avait transmis à l\'unité opérationnelle. Il n\'avait pas su ce qui s\'était passé ensuite. Il n\'avait pas demandé.',
    },
    revelation: {
      titre: 'Les données de Karesyl',
      contenu: 'Karesyl (180) lui avait partagé des données de la Confédération sur les anomalies électriques dans l\'Isthme — des données qu\'il recoupait avec ses propres analyses. Les données combinées donnaient une image plus précise des zones de présence d\'Élus que ses analyses seules. Il avait remercié Karesyl. Il n\'avait pas précisé l\'usage.',
    },
    etat_actuel: {
      titre: 'Le suivi actuel',
      contenu: 'Il suit 8 signatures actives dans la zone de Virex. 3 de ces signatures montrent des patterns de déplacement qui évitent ses zones de détection connues — elles réagissent à sa présence ou à ses capteurs. Un Élu qui adapte ses déplacements est un Élu qui sait qu\'il est suivi. Il a rapporté ce comportement à Lysael.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvsaevyn_signatures_adaptees',
      titre: 'Les signatures qui évitent',
      description: '3 des 8 signatures qu\'il suit montrent des patterns d\'évitement actif de ses zones de détection. Elles savent qu\'il y a des capteurs — soit elles ont été informées, soit elles perçoivent les capteurs directement. Cette adaptation rend son suivi moins efficace et signifie qu\'un canal d\'information entre les Élus est actif.',
      personnages_impliques: [63, 180],
      declencheur: 'Patterns d\'évitement actif dans 3 des 8 signatures suivies',
      consequence: 'Suivi moins efficace — canal d\'information entre Élus confirmé et actif',
    },
    {
      id: 'thyvsaevyn_donnees_croisees',
      titre: 'Le croisement avec Karesyl',
      description: 'Les données de Karesyl (180) et les siennes créent une image combinée plus précise des zones de présence d\'Élus. Ce croisement n\'a pas été explicitement autorisé dans les accords de coopération. Il s\'est fait naturellement. Karesyl ne sait peut-être pas que ses données sont utilisées pour le suivi d\'Élus spécifiques.',
      personnages_impliques: [180, 63],
      declencheur: 'Utilisation des données Confédération pour affiner le suivi d\'Élus',
      consequence: 'Croisement de données non explicitement autorisé — Karesyl potentiellement non informée',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Analyste impérial des signatures électriques d\'Élus à Virex. 3 des 8 signatures qu\'il suit évitent activement ses capteurs. Il croise ses données avec celles de Karesyl sans que celle-ci sache l\'usage.',

  relations: [
    { id: 63, nom: 'Lysael', type: 'supérieur', note: 'Reçoit les analyses et décide des transmissions aux unités opérationnelles.' },
    { id: 180, nom: 'Karesyl', type: 'allié', note: 'Contact Confédération. Ses données sur les anomalies électriques sont croisées avec les analyses sans précision de l\'usage.' },
  ],

  combat: {
    sorts: [
      'Signature électrique (Electrique) — émission d\'une signature électrique spécifique — leurre de détection',
      'Décharge d\'analyse (Electrique) — concentration d\'énergie électrique sur une cible identifiée par signature — impact ciblé',
      'Résistance de champ (Normal) — isolation contre les décharges électriques de l\'environnement — protection en zone de saturation',
    ],
  },

  image_prompts: [
    {
      id: 'thyvsaevyn_analyse',
      description: 'Thyvsaevyn dans un espace analytique de terrain — des instruments de mesure disposés dans une zone de Virex, lui au centre en train de lire les données. Des lignes représentant des signatures électriques sont visualisées sur ses instruments. 3 de ces lignes montrent des patterns d\'évitement visible.',
      style: 'réaliste analyste Homme-Lien, instruments de mesure de signature électrique, Virex terrain, données de suivi',
    },
  ],

  lore_long: `Thyvsaevyn analyse les signatures électriques des Élus de Virex pour le compte impérial. Sa capacité naturelle de perception électrique lui donne une précision que les instruments seuls ne donnent pas.

8 signatures actives en suivi. 3 évitent ses capteurs — elles savent qu'elles sont suivies. Un canal d'information entre Élus est actif.

Il croise ses données avec celles de Karesyl (180) sans que celle-ci sache l'usage précis. Ce croisement donne une image plus précise des zones de présence d'Élus.

Il sait ce qui arrive à certains Élus après identification. Il a une probabilité suffisante pour les autres.`,
};

export default thyvsaevyn;
