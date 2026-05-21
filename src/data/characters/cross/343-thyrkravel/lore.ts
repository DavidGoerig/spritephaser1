import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkravel: PersonnageLoreComplet = {
  id: 343,
  nom: 'Thyrkravel',
  element: 'Stellaire',
  element2: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Légèrement en dessous de la moyenne Givrin, avec une façon de se tenir qui minimise la présence — quelqu\'un qui a appris à être dans les espaces sans être remarqué.',
    peau: 'Blanc-gris Givrin avec des éclats stellaires très discrets aux tempes — moins visibles que chez la plupart des Stellaire, une caractéristique qu\'il a accentuée par des techniques de contrôle élémentaire.',
    yeux: 'Gris-or. Dans des conditions normales, presque indistincts des yeux Givrins standard. Dans l\'obscurité, un éclat doré qui trahit l\'élément Stellaire.',
    vetements: 'Tenue Givrin standard sans marqueur impérial visible. Il opère comme astronome indépendant — l\'affiliation impériale n\'est pas connue de ses contacts locaux.',
    signes_particuliers: 'Il mémorise les positions stellaires sans notes — sa capacité Stellaire lui donne un sens de la position céleste en permanence. Il n\'a jamais besoin de vérifier l\'heure ou la direction.',
  },

  psychologie: {
    dominante: 'Surveillance des calculs astronomiques Givrins pour anticiper le dégel et en informer l\'Empire avant que les factions locales puissent agir en premier sur cette information. L\'Empire veut être le premier à savoir si le dégel est imminent.',
    mecanisme_de_defense: 'L\'identité d\'astronome indépendant. Il est perçu comme un chercheur curieux, pas un agent. Cette identité est partiellement vraie — il est réellement intéressé par l\'astronomie. La partie agent est réelle aussi.',
    contradiction_interne: 'Il a accès aux calculs de Velskrevyn (342) sur la fenêtre de 18 mois. Il les a transmis à Keldris (57). Il sait que Thyval (55) est son adversaire dans ce contexte — la Monarchie veut agir en premier sur la fenêtre, l\'Empire aussi. Il est à l\'intersection de ces intérêts sans que ni l\'un ni l\'autre ne le sache complètement.',
    rapport_aux_autres: 'Keldris (57) est son supérieur impérial — il reçoit les rapports et décide des actions impériales à Crysalme. Thyval (55) est la cible principale de sa surveillance — les décisions royales sur la fenêtre de dégel sont ce que l\'Empire veut connaître à l\'avance.',
    vision_du_monde: 'Le dégel de Crysalme est une opportunité économique et politique pour l\'Empire — des ressources gelées depuis des décennies deviendront accessibles. L\'Empire qui arrive en premier définit les termes de l\'accès.',
  },

  histoire: {
    enfance: {
      titre: 'Le Givrin impérial',
      contenu: 'À 15 ans, il avait été recruté comme informateur pour un réseau impérial par un agent qui avait identifié sa capacité Stellaire et ses aptitudes d\'observation. Il était Givrin — ça lui donnait un accès naturel à des espaces que les agents non-Givrins ne pouvaient pas atteindre facilement. Il avait accepté sans comprendre entièrement dans quoi il entrait.',
    },
    arrivee: {
      titre: 'L\'affectation à Crysalme',
      contenu: 'À 29 ans, Keldris (57) l\'avait affecté spécifiquement à la surveillance des activités astronomiques de Crysalme — les calculs sur le dégel potentiel étaient devenus une priorité impériale. Il avait construit son identité d\'astronome indépendant sur 2 ans avant d\'approcher les milieux scientifiques locaux.',
    },
    premier_conflit: {
      titre: 'Les calculs de Velskrevyn',
      contenu: 'À 35 ans, il avait accès aux travaux de Velskrevyn (342) avant leur présentation à la cour — il fréquentait les mêmes espaces de travail. Il avait transmis les calculs à Keldris avant la présentation officielle. L\'Empire avait eu l\'information en avance. Il n\'avait pas su ce que l\'Empire en avait fait de spécifique.',
    },
    revelation: {
      titre: 'La concurrence avec la Monarchie',
      contenu: 'Keldris lui avait précisé que la Monarchie cherchait à établir des accords préférentiels avec d\'autres régions avant le dégel — pour sécuriser des positions économiques avant que l\'Empire puisse réagir. Sa surveillance des plans de Thyval (55) était liée à ces accords. Le contexte était plus large que de l\'astronomie.',
    },
    etat_actuel: {
      titre: 'La surveillance de Thyval',
      contenu: 'Il surveille actuellement les décisions de Thyval (55) concernant la fenêtre de 18 mois. Thyval a demandé à Velkraeth (338) d\'ouvrir des archives à Keldris — une demande qui était peut-être un test de la position impériale. Thyrkravel attend des instructions de Keldris sur la signification de ce mouvement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkravel_acces_archives',
      titre: 'Les archives ouvertes par Thyval',
      description: 'Thyval (55) a demandé que des archives de Velkraeth (338) soient ouvertes à Keldris (57). Thyrkravel ne sait pas si c\'est une concession diplomatique, un test de la surveillance impériale, ou une façon de donner à l\'Empire des informations que la Monarchie contrôle. Il attend l\'analyse de Keldris.',
      personnages_impliques: [57, 55],
      declencheur: 'Ouverture d\'archives de Velkraeth à Keldris par demande de Thyval',
      consequence: 'Information circulant vers l\'Empire via la Monarchie — raison et implications non claires',
    },
    {
      id: 'thyrkravel_identite_risque',
      titre: 'La couverture d\'astronome',
      description: 'Son identité d\'astronome indépendant tient depuis 8 ans. Velskrevyn (342) et Thyvalskren (340) travaillent dans les mêmes espaces — l\'une est Dissidente, l\'autre royale. Si l\'une des deux compare des notes sur ses contacts et identifie un pattern, sa couverture pourrait être compromise.',
      personnages_impliques: [342, 340],
      declencheur: 'Proximité prolongée avec des astronomes des deux camps',
      consequence: 'Risque de compromission de couverture — pas encore matérialisé',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Agent impérial infiltré dans les milieux astronomiques de Crysalme. Il surveille les calculs sur le dégel pour l\'Empire. Sa couverture d\'astronome indépendant lui donne accès aux deux camps.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'supérieur', note: 'Reçoit les rapports sur les calculs astronomiques et les plans de la Monarchie. Décide des actions impériales.' },
    { id: 55, nom: 'Thyval', type: 'adversaire', note: 'Cible principale de surveillance. Ses décisions sur la fenêtre de dégel sont l\'information prioritaire pour l\'Empire.' },
  ],

  combat: {
    sorts: [
      'Éclat stellaire (Stellaire) — concentration d\'énergie céleste en un point — impact à distance',
      'Gel tactique (Glace) — création d\'une zone de gel soudain — immobilisation d\'urgence',
      'Camouflage stellaire (Stellaire + Glace) — absorption de la lumière réfléchie — réduction de visibilité personnelle',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkravel_observation',
      description: 'Thyrkravel dans un espace partagé de travail astronomique à Crysalme — il est assis à un poste d\'observation ordinaire, avec des relevés qui semblent standard. Il observe Velskrevyn (342) travailler de l\'autre côté de la salle. Son expression est neutre. Il est en train de mémoriser.',
      style: 'réaliste agent infiltré, espace de travail partagé, observation discrète, Crysalme intérieur',
    },
  ],

  lore_long: `Thyrkravel est un agent impérial infiltré dans les milieux astronomiques de Crysalme sous couverture d'astronome indépendant.

Il surveille les calculs sur le dégel — notamment les travaux de Velskrevyn (342) sur la fenêtre de 18 mois, transmis à Keldris (57) avant la présentation officielle.

Thyval (55) a demandé l'ouverture d'archives à Keldris. Thyrkravel ne sait pas si c'est une concession, un test, ou une manœuvre. Il attend l'analyse de Keldris.

Sa couverture tient depuis 8 ans. Elle est à risque si Velskrevyn et Thyvalskren (340) comparent leurs contacts.`,
};

export default thyrkravel;
