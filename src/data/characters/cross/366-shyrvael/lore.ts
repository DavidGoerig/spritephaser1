import type { PersonnageLoreComplet } from '../../../lore-types';

const shyrvael: PersonnageLoreComplet = {
  id: 366,
  nom: 'Shyrvael',
  element: 'Stellaire',
  element2: 'Psy',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Néréide de stature moyenne, avec la fluidité de mouvement caractéristique de l\'espèce. Sa présence dans des environnements terrestres est deliberée — il peut fonctionner hors de l\'eau, ce n\'est pas son milieu naturel.',
    peau: 'Nacré avec des reflets bleutés — Néréide non dissimulé. Dans les cours impériales, son apparence d\'espèce non-Homme-Lien est une distinction, pas un désavantage.',
    yeux: 'Bleu profond avec une luminosité stellaire visible dans les pupilles — l\'élément Stellaire dominant.',
    vetements: 'Tenue de conseiller impérial — formelle, adaptée aux environnements terrestres. Il a appris les codes vestimentaires humains et les applique avec précision.',
    signes_particuliers: 'Il parle de personnes en termes de trajectoires — "son pattern stellaire indique une convergence vers..." Cette façon de parler crée une distance qui lui est utile et inconfortable pour son interlocuteur.',
  },

  psychologie: {
    dominante: 'Prédiction des comportements des Élus pour le compte impérial via la lecture de leur signature psycho-stellaire — la signature psychique d\'un Élu croisée avec sa trajectoire stellaire permet de prédire ses décisions dans des situations de stress ou de choix.',
    mecanisme_de_defense: 'La méthode comme objectivité. Il prédit des comportements — il ne prend pas de décisions sur les personnes. Les décisions appartiennent à Serathis (24) et Telos (29). Sa méthode est rigoureuse. Sa responsabilité s\'arrête à la prédiction.',
    contradiction_interne: 'Ses prédictions comportementales permettent à l\'Empire d\'anticiper les mouvements des Élus et de les neutraliser avant qu\'ils agissent. Il sait que ses prédictions contribuent directement à des captures. Sa méthode d\'objectivité ne change pas cet effet.',
    rapport_aux_autres: 'Telos (29) est un contact qui lui a transmis des fondements théoriques sur la lecture stellaire — il ne sait pas encore si Telos connaît l\'usage qu\'il en fait. Serathis (24) est son contact impérial direct pour la transmission des prédictions opérationnelles.',
    vision_du_monde: 'Les signatures psycho-stellaires sont des données objectives. L\'analyse de ces données produit des prédictions comportementales. Les prédictions comportementales sont des outils. L\'outil ne choisit pas son usage.',
  },

  histoire: {
    enfance: {
      titre: 'Les trajectoires de Thalassyr',
      contenu: 'À 16 ans, dans les eaux de Thalassyr, il avait commencé à percevoir les signatures stellaires des Néréides autour de lui — des patterns dans leurs mouvements qui correspondaient à des configurations célestes visibles depuis la surface. Il avait émergé pour cartographier ces correspondances.',
    },
    arrivee: {
      titre: 'Le recrutement impérial',
      contenu: 'À 27 ans, Serathis (24) l\'avait contacté avec une proposition : l\'Empire avait besoin de prédicteurs comportementaux pour les zones à haute concentration d\'Élus. Ses compétences psycho-stellaires étaient adaptées. Il avait demandé les détails. La réponse avait été suffisamment technique pour être satisfaisante.',
    },
    premier_conflit: {
      titre: 'La première capture',
      contenu: 'À 31 ans, une de ses prédictions comportementales avait permis d\'anticiper le mouvement d\'un Élu — l\'Élu avait été capturé à l\'endroit prédit au moment prédit. Il avait reçu un compte-rendu de l\'opération comme validation de sa méthode. Il avait lu le compte-rendu. Il n\'avait pas demandé ce qui était arrivé à l\'Élu ensuite.',
    },
    revelation: {
      titre: 'Le contact avec Telos',
      contenu: 'Telos (29) lui avait partagé des travaux théoriques sur la lecture stellaire — des recherches fondamentales sur les trajectoires des purs élémentaires. Ces travaux amélioraient sa précision prédictive. Il se demandait si Telos savait comment ces travaux étaient utilisés. Il n\'avait pas posé la question.',
    },
    etat_actuel: {
      titre: 'Les prédictions actives',
      contenu: 'Il a 5 prédictions comportementales actives pour des Élus de l\'Isthme — des trajectoires psycho-stellaires que Serathis (24) utilise pour les opérations impériales dans la région. L\'une de ces prédictions concerne une convergence que Thyvsael (365) a également identifiée. Il ne sait pas que Thyvsael existe.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyrvael_convergence_isthme',
      titre: 'La même convergence',
      description: 'Ses 5 prédictions actives sur l\'Isthme et la lecture indépendante de Thyvsael (365) portent sur la même convergence — les deux analyses, l\'une au service de l\'Empire, l\'autre indépendante, ont identifié le même événement par des méthodes différentes. La convergence est réelle.',
      personnages_impliques: [24, 29],
      declencheur: 'Convergence psycho-stellaire dans l\'Isthme identifiée par plusieurs observateurs indépendants',
      consequence: 'Confirmation de la convergence — opérations impériales basées sur ses prédictions activées',
    },
    {
      id: 'shyrvael_telos_usage',
      titre: 'Les travaux de Telos',
      description: 'Les recherches de Telos (29) sur les trajectoires des purs élémentaires améliorent sa précision prédictive opérationnelle. Si Telos découvre que ses travaux théoriques alimentent des prédictions impériales conduisant à des captures, la source de données serait compromise.',
      personnages_impliques: [29, 24],
      declencheur: 'Utilisation des travaux théoriques de Telos dans un contexte opérationnel impérial',
      consequence: 'Source de données potentiellement compromise si Telos découvre l\'usage',
    },
  ],

  arcs: ['arc_confluence_psy_stellaire'],
  position_dans_arc: 'Conseiller impérial Néréide prédisant les comportements des Élus via signatures psycho-stellaires. 5 prédictions actives sur l\'Isthme. Ses travaux croisent avec les recherches de Telos (29) sans que celui-ci en sache l\'usage.',

  relations: [
    { id: 29, nom: 'Telos', type: 'allié', note: 'Source de travaux théoriques sur la lecture stellaire. Potentiellement non informé de l\'usage opérationnel.' },
    { id: 24, nom: 'Serathis', type: 'supérieur', note: 'Contact impérial direct pour les prédictions opérationnelles.' },
  ],

  combat: {
    sorts: [
      'Trajectoire stellaire (Stellaire) — analyse de la signature stellaire d\'une cible — prédiction de mouvement',
      'Influence psychique (Psy) — projection d\'une intention émotionnelle sur une cible — modification comportementale temporaire',
      'Verrouillage de trajectoire (Stellaire + Psy) — fixation de la signature psycho-stellaire d\'une cible — anticipation de ses décisions dans une fenêtre courte',
    ],
  },

  image_prompts: [
    {
      id: 'shyrvael_consultation',
      description: 'Shyrvael dans une salle de consultation impériale — Néréide aux reflets nacré dans un environnement terrestre formel. Des projections stellaires flottent autour de lui. Il examine un pattern qui correspond à un individu. Son expression est analytique et distante.',
      style: 'réaliste conseiller Néréide impérial, projections stellaires, salle formelle, analyse comportementale',
    },
  ],

  lore_long: `Shyrvael prédit les comportements des Élus pour l'Empire via la lecture de leur signature psycho-stellaire. Sa méthode est rigoureuse — il prédit, Serathis (24) décide, l'Empire agit.

5 prédictions actives sur l'Isthme. L'une converge avec une lecture indépendante de Thyvsael (365) qu'il ne connaît pas.

Les travaux théoriques de Telos (29) améliorent sa précision. Telos ne sait peut-être pas comment ses recherches sont utilisées.`,
};

export default shyrvael;
