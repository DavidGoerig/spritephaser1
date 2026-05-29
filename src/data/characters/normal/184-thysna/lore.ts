import type { PersonnageLoreComplet } from '../../../lore-types';

const thysna: PersonnageLoreComplet = {
  id: 184,
  nom: 'Thysna',
  element: 'Normal',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 38 ans, mère — corpulence de quelqu\'un dont les priorités ont changé de façon irréversible. Elle n\'a pas l\'apparence d\'une combattante.',
    peau: 'Ton méditerranéen avec une qualité d\'épuisement qui n\'est pas du manque de sommeil.',
    yeux: 'Verts avec une qualité de quelqu\'un qui surveille constamment les sorties d\'une pièce.',
    vetements: 'Tenue ordinaire — rien qui distingue. Elle ne veut pas se faire remarquer.',
    signes_particuliers: 'Son enfant est un des 39 enfants de Virex. Elle a rejoint les Dissidentes pour protéger son enfant, pas par conviction politique. La différence est importante pour elle.',
  },

  psychologie: {
    dominante: 'Mère d\'un des 39 enfants de Virex — les enfants Élus issus d\'une lignée ciblée par l\'Empire et la Convergence. Elle a rejoint les Dissidentes quand elle a compris que rester hors des factions ne protégerait pas son enfant. Sa participation au mouvement est fonctionnelle, pas idéologique.',
    mecanisme_de_defense: 'La séparation entre protection et conviction. Elle fait ce qu\'elle fait pour son enfant. Elle ne croit pas en toutes les positions Dissidentes. Cette distinction lui permet de rester dans le réseau sans y perdre son propre jugement.',
    contradiction_interne: 'Sa présence dans les Dissidentes pour des raisons personnelles signifie qu\'elle ferait des compromis que les Dissidentes ne feraient pas, et vice-versa. Sa loyauté va à son enfant, pas au mouvement. Ce désalignement partiel crée des tensions potentielles.',
    rapport_aux_autres: 'Lysael (63) est une connexion — quelqu\'un qui cherche à identifier et protéger les enfants de Virex, ce que Thysna veut aussi mais pour des raisons différentes. Le Second Avatar (59) est dans son réseau indirect — des décisions politiques qui affectent la sécurité de son enfant.',
    vision_du_monde: 'Son enfant est en danger parce qu\'il est Élu. Elle n\'a pas choisi cette situation. Elle gère ce qui existe avec les moyens disponibles.',
  },

  histoire: {
    enfance: {
      titre: 'Virex',
      contenu: 'Née à Virex dans l\'Isthme dans une famille ordinaire. Elle n\'avait pas de connexion avec les Élus avant la naissance de son enfant.',
    },
    arrivee: {
      titre: 'L\'enfant Élu',
      contenu: 'Son enfant avait développé un élément Élu à 8 ans. Elle avait d\'abord essayé de le dissimuler. L\'Empire avait commencé à identifier les enfants de Virex. Elle avait compris qu\'elle ne pouvait pas protéger son enfant seule.',
    },
    premier_conflit: {
      titre: 'Les Dissidentes',
      contenu: 'Elle avait approché les Dissidentes à 35 ans. Ils avaient accepté son aide en échange d\'une protection pour son enfant. Elle avait accepté. Ce n\'était pas une conversion — c\'était un accord.',
    },
    revelation: {
      titre: 'La différence',
      contenu: 'Elle avait compris que d\'autres membres des Dissidentes avaient des motivations différentes — des convictions sur la liberté des Élus, sur l\'opposition à l\'Empire. Elle croyait en certaines de ces convictions. Pas en toutes. Elle avait décidé que la distinction importait.',
    },
    etat_actuel: {
      titre: 'La mère Dissidente',
      contenu: 'Elle participe. Son enfant est protégé pour l\'instant. Elle surveille les sorties.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thysna_enfant',
      titre: 'La protection d\'un enfant',
      description: 'Thysna est Dissidente pour protéger son enfant, un des 39 de Virex. Si les Dissidentes lui demandent de prendre un risque qui menace sa sécurité — ou celle de son enfant — elle refusera ou compromettra une opération. Sa loyauté va à l\'enfant, pas au mouvement.',
      personnages_impliques: [63, 59],
      declencheur: 'Les Dissidentes lui demandant un sacrifice personnel qui compromet la protection de son enfant',
      consequence: 'Thysna refusant ou choisissant son enfant — et les Dissidentes confrontés à la réalité de ses motivations',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Mère d\'un des 39 enfants de Virex, Dissidente par nécessité. Sa loyauté va à son enfant, pas au mouvement. Distinction qu\'elle maintient consciemment.',

  relations: [
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Cherche à protéger les enfants de Virex — objectif partagé, motivations différentes.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions politiques affectant la sécurité de son enfant.' },
  ],

  combat: {
    sorts: [
      'Frappe de protection (Normal) — attaque défensive — protection d\'une cible',
      'Esquive instinctive (Normal) — déplacement réactif — survie en terrain hostile',
    ],
  },

  image_prompts: [
    {
      id: 'thysna_protection',
      description: 'Thysna dans une réunion Dissident dans l\'Isthme — une Homme-Lien de 38 ans qui écoute les discussions politiques avec une attention sélective. Elle note mentalement ce qui concerne la sécurité des enfants de Virex. Le reste passe en arrière-plan. Son regard vérifie périodiquement les sorties.',
      style: 'réaliste Homme-Lien mère dissidente, Isthme, enfants de Virex, protection vs conviction, attention sélective',
    },
  ],

  lore_long: `Thysna est Dissidente parce que son enfant est un des 39 enfants de Virex. Elle ne l'est pas par conviction idéologique.

Elle a rejoint le mouvement quand elle a compris qu'elle ne pouvait pas protéger son enfant seule. C'est un accord, pas une conversion.

Elle croit en certaines positions Dissidentes. Pas en toutes. Sa loyauté va à son enfant d'abord.`,
};

export default thysna;
