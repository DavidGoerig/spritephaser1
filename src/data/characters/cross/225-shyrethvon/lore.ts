import type { PersonnageLoreComplet } from '../../../lore-types';

const shyrethvon: PersonnageLoreComplet = {
  id: 225,
  nom: 'Shyrethvon',
  element: 'Feu',
  element2: 'Psy',
  espece: 'Pyrien',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Pyrien de 38 ans, analyste — corpulence de quelqu\'un dont le travail est mental, mais dont le corps porte les marques d\'un élément thermique actif.',
    peau: 'Rouge-ardente avec des nuances qui fluctuent légèrement lors de lectures psychiques — l\'élément Psy interagit avec le Feu à la surface.',
    yeux: 'Orangés avec une qualité de concentration profonde — il lit les signatures, pas les visages.',
    vetements: 'Tenue neutre sans marquage de faction — il opère dans des environnements mixtes où afficher la Convergence serait contre-productif.',
    signes_particuliers: 'Son double élément Feu/Psy lui permet de lire des signatures psychiques amplifiées par la chaleur élémentaire. Il identifie des Élus purs — des personnes dont l\'élément est non-dilué — pour le Protocole de la Convergence.',
  },

  psychologie: {
    dominante: 'Analyste de la Convergence spécialisé dans l\'identification de signatures psychiques élémentaires. Son double élément Feu/Psy lui permet de détecter des Élus dont la pureté élémentaire en fait des candidats au Protocole. Il opère dans l\'Isthme où la Saturation produit des concentrations d\'Élus inhabituelles.',
    mecanisme_de_defense: 'La précision analytique. Il ne décide pas du destin des Élus qu\'il identifie — il fournit des données. Cette distinction entre identification et utilisation le maintient dans une position professionnelle.',
    contradiction_interne: 'Son identification de signatures "pures" est la première étape d\'un processus dont il connaît les étapes suivantes. La précision de son travail rend le Protocole plus efficace. Sa distance professionnelle avec les conséquences est maintenue par un effort actif.',
    rapport_aux_autres: 'Sethara (238) est dans son réseau — la coordinatrice principale du Protocole qui utilise ses identifications. Razhal (231) est dans son réseau — un autre analyste de la Convergence dont les méthodes différent des siennes.',
    vision_du_monde: 'Les signatures élémentaires pures sont rares. Les identifier est un travail qui requiert des compétences spécifiques. Ce qu\'on fait de l\'information après identification est une décision séparée.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Né dans l\'Isthme avec un double élément Feu/Psy — une combinaison qui l\'avait rendu visible à la Convergence dès l\'adolescence. Ils l\'avaient approché à 19 ans. Il avait accepté une formation analytique.',
    },
    arrivee: {
      titre: 'Le Protocole',
      contenu: 'Il avait compris la finalité du Protocole à 27 ans — pas immédiatement, progressivement. À chaque étape de sa formation, le cadre s\'était précisé. Il avait continué. La précision de l\'identification était un travail qui lui correspondait.',
    },
    premier_conflit: {
      titre: 'La signature familière',
      contenu: 'Il avait identifié une signature pure dans un groupe — et reconnu la personne. Quelqu\'un de sa région d\'origine. Il avait fait le rapport. Il n\'avait pas demandé ce qui était arrivé ensuite.',
    },
    revelation: {
      titre: 'La distance professionnelle',
      contenu: 'Il avait compris que maintenir la distance entre identification et conséquence nécessitait un effort. La distance n\'était pas naturelle — elle était construite. Il continuait à la construire.',
    },
    etat_actuel: {
      titre: 'L\'analyste',
      contenu: 'Il identifie des signatures. Les données vont à Sethara (238). Ce qui suit n\'est pas son département.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyrethvon_identification',
      titre: 'L\'identification et ses suites',
      description: 'Shyrethvon identifie des Élus purs pour la Convergence. Si une de ses identifications mène à une conséquence qu\'il ne peut pas ignorer — quelqu\'un dont il connaît le réseau ou dont la disparition crée des effets visibles dans sa région — la distance professionnelle qu\'il maintient entre identification et conséquence sera testée.',
      personnages_impliques: [238, 231],
      declencheur: 'Une identification de Shyrethvon dont les conséquences lui deviennent directement visibles',
      consequence: 'Shyrethvon confronté à la chaîne causale complète de son travail analytique — et à la décision de continuer ou non',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Analyste de la Convergence identifiant des signatures psychiques élémentaires pures dans l\'Isthme. Double élément Feu/Psy. Fournit les données du Protocole sans être impliqué dans leur utilisation.',

  relations: [
    { id: 238, nom: 'Sethara', type: 'hierarchie', note: 'Coordinatrice du Protocole recevant les identifications.' },
    { id: 231, nom: 'Razhal', type: 'contact', note: 'Autre analyste de la Convergence aux méthodes différentes.' },
  ],

  combat: {
    sorts: [
      'Lecture thermique (Feu/Psy) — détection de signatures élémentaires à travers leur empreinte thermique — identification analytique',
      'Frappe psychique amplifiée (Psy/Feu) — attaque mentale renforcée par chaleur élémentaire — défense de dernier recours',
    ],
  },

  image_prompts: [
    {
      id: 'shyrethvon_analyse',
      description: 'Shyrethvon dans un espace neutre de l\'Isthme — un Pyrien de 38 ans dont les yeux sont légèrement fermés pendant une lecture de signature. Sa peau fluctue légèrement. Il note quelque chose. L\'expression est concentrée, professionnelle, distante.',
      style: 'réaliste Pyrien analyste Convergence, Isthme, lecture de signature psychique élémentaire, double élément Feu/Psy, distance professionnelle',
    },
  ],

  lore_long: `Shyrethvon identifie des signatures élémentaires pures pour la Convergence dans l'Isthme. Son double élément Feu/Psy lui permet de lire des empreintes psychiques que la chaleur élémentaire amplifie.

Il sait ce que le Protocole fait de ses identifications. Il maintient une distance professionnelle entre les données qu'il fournit et les conséquences qui suivent.

Cette distance est construite. Elle nécessite un effort continu.`,
};

export default shyrethvon;
