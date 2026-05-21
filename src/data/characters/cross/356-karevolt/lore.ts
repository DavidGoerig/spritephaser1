import type { PersonnageLoreComplet } from '../../../lore-types';

const karevolt: PersonnageLoreComplet = {
  id: 356,
  nom: 'Karevolt',
  element: 'Normal',
  element2: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Technicienne — fine avec des mains actives qui manipulent des instruments en permanence. Elle est rarement sans quelque chose entre les doigts.',
    peau: 'Brun clair Homme-Lien avec de légères marques d\'induction électrique aux mains — des traces bleutées permanentes des zones de saturation électrique.',
    yeux: 'Brun avec une luminosité légèrement accrue — l\'élément Electrique secondaire qui donne à ses yeux une qualité de lecture des champs électriques dans certaines conditions.',
    vetements: 'Tenue de technicienne de terrain — isolée électriquement aux zones de contact, avec des instruments de mesure intégrés. Pratique avant tout.',
    signes_particuliers: 'Elle teste les surfaces avant de les toucher — un réflexe des zones de saturation électrique où les surfaces peuvent conduire du courant de façon inattendue.',
  },

  psychologie: {
    dominante: 'Surveillance des anomalies électriques dans l\'Isthme pour la Confédération — des zones où la saturation élémentaire produit des champs électriques instables qui affectent les infrastructures et les personnes.',
    mecanisme_de_defense: 'Les données comme position neutre. Elle mesure et rapporte. Les décisions politiques sur ce qu\'on fait des données ne lui appartiennent pas. Cette séparation lui permet de travailler avec des factions différentes sans choisir.',
    contradiction_interne: 'Kasevolt (360), technicien de la Convergence, développe des détecteurs d\'éléments purs. Ces détecteurs utilisent les mêmes principes de mesure électrique qu\'elle développe pour la Confédération. Les deux travaux se recoupent. Si la Convergence a accès à ses données, ses mesures aident à localiser des Élus. Ce n\'est pas l\'intention de son travail.',
    rapport_aux_autres: 'Karesyl (180) est son supérieur technique Confédération — il reçoit ses rapports et définit les zones prioritaires. Kasevolt (360) de la Convergence est son adversaire fonctionnel — leurs données se recoupent et leurs usages divergent.',
    vision_du_monde: 'Les anomalies électriques de l\'Isthme sont un phénomène réel avec des effets réels sur les infrastructures et les populations. Les mesurer est utile indépendamment des usages politiques qu\'on en fait.',
  },

  histoire: {
    enfance: {
      titre: 'Le courant du quartier',
      contenu: 'À 15 ans, le quartier où elle habitait avait développé des anomalies électriques — des lumières qui fluctuaient, des équipements qui tombaient en panne selon des patterns. Elle avait commencé à cartographier ces anomalies avec des instruments bricolés. Elle avait identifié une zone de saturation sous-jacente avant que les techniciens officiels ne l\'identifient.',
    },
    arrivee: {
      titre: 'L\'intégration à la Confédération',
      contenu: 'À 24 ans, Karesyl (180) l\'avait recrutée pour le réseau technique de la Confédération. Sa cartographie amateur des anomalies électriques avait montré une méthode plus efficace que les méthodes standard. Il lui avait fourni des instruments de qualité. Elle avait amélioré sa méthode.',
    },
    premier_conflit: {
      titre: 'La donnée partagée',
      contenu: 'À 30 ans, une de ses mesures avait été transmise à la Convergence dans le cadre d\'un accord de partage de données sur les zones de saturation. La Convergence avait utilisé cette mesure pour localiser un Élu dans la zone. Elle n\'avait pas su que cette utilisation était prévue. Elle avait demandé à Karesyl comment les données étaient partagées. La réponse avait été incomplète.',
    },
    revelation: {
      titre: 'Les détecteurs de Kasevolt',
      contenu: 'Kasevolt (360) travaillait sur des détecteurs d\'éléments purs basés sur des signatures électriques. Elle avait vu une description de sa méthode dans un rapport de partage. Les principes étaient les mêmes que les siens. Elle avait compris que ses mesures, croisées avec les détecteurs de Kasevolt, créaient un système de localisation d\'Élus qu\'elle n\'avait pas conçu pour ça.',
    },
    etat_actuel: {
      titre: 'Les zones en cours',
      contenu: 'Elle surveille 12 zones de saturation électrique dans l\'Isthme. Ses données vont à Karesyl (180). Elle ne sait plus exactement où elles vont ensuite. Elle a demandé une clarification du protocole de partage. Karesyl lui a dit qu\'elle avait une réunion avec elle la semaine prochaine.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karevolt_protocole_partage',
      titre: 'La réunion sur le partage',
      description: 'Karesyl (180) a accepté une réunion sur le protocole de partage des données. Karevolt veut comprendre où ses mesures vont après Karesyl — notamment si elles atteignent la Convergence et si des mesures de protection existent contre les usages de localisation d\'Élus. La réunion est dans 7 jours.',
      personnages_impliques: [180, 360],
      declencheur: 'Demande de clarification du protocole de partage après découverte des détecteurs de Kasevolt',
      consequence: 'Réunion avec Karesyl dans 7 jours — possibilité de protocole révisé ou de confirmation d\'usage actuel',
    },
    {
      id: 'karevolt_recoupement_kasevolt',
      titre: 'Les données qui localisent',
      description: 'Ses mesures des anomalies électriques dans les zones de saturation, croisées avec les détecteurs de Kasevolt (360), créent un système de localisation de signatures élémentaires pures — c\'est-à-dire d\'Élus. Elle n\'a pas conçu ce système. Il existe parce que les données circulent entre des oeuvres indépendantes. Ce n\'est pas une intention. C\'est un résultat.',
      personnages_impliques: [360, 180],
      declencheur: 'Découverte du recoupement entre ses mesures et les détecteurs de Kasevolt',
      consequence: 'Système de localisation d\'Élus non intentionnel existant via partage de données',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Technicienne Confédération qui surveille les anomalies électriques dans l\'Isthme. Ses données, croisées avec les détecteurs de Kasevolt (360), créent involontairement un système de localisation d\'Élus. Elle demande une clarification du protocole de partage.',

  relations: [
    { id: 180, nom: 'Karesyl', type: 'supérieur', note: 'Reçoit ses rapports et définit les zones prioritaires. A accepté une réunion sur le protocole de partage.' },
    { id: 360, nom: 'Kasevolt', type: 'adversaire', note: 'Technicien Convergence dont les détecteurs se recoupent avec ses mesures de façon non intentionnelle.' },
  ],

  combat: {
    sorts: [
      'Décharge de terrain (Electrique) — libération d\'une charge électrique accumulée dans une zone de saturation — décharge sur cible',
      'Résistance d\'induction (Normal) — isolation corporelle contre les champs électriques ambiants — protection en zone de saturation',
      'Cartographie électrique (Electrique + Normal) — projection d\'un champ de lecture des anomalies — détection de présences dans une zone',
    ],
  },

  image_prompts: [
    {
      id: 'karevolt_mesure',
      description: 'Karevolt dans une zone de saturation électrique de l\'Isthme — une zone où l\'air est légèrement lumineux et les surfaces produisent des micro-décharges. Elle tient un instrument de mesure et teste une surface avant de la toucher. Ses mains ont les marques bleutées caractéristiques. Elle note des données.',
      style: 'réaliste technicienne Homme-Lien, zone de saturation électrique, instruments de mesure, marques d\'induction',
    },
  ],

  lore_long: `Karevolt surveille les anomalies électriques dans les zones de saturation de l'Isthme pour la Confédération. Ses mesures vont à Karesyl (180).

Elle a découvert que ses données, croisées avec les détecteurs de Kasevolt (360) de la Convergence, créent un système de localisation d'Élus qu'elle n'a pas conçu. Ce n'est pas son intention. C'est le résultat du partage de données.

Elle a demandé une clarification du protocole de partage. Réunion avec Karesyl dans 7 jours.`,
};

export default karevolt;
