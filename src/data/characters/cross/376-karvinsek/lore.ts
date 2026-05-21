import type { PersonnageLoreComplet } from '../../../lore-types';

const karvinsek: PersonnageLoreComplet = {
  id: 376,
  nom: 'Karvinsek',
  element: 'Poison',
  element2: 'Insecte',
  espece: 'Chthoniens',
  region: 'Noctéa',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Chthonien de terrain — robuste avec des équipements de transport sur lui en permanence. Des récipients sécurisés pour les spécimens biologiques attachés au dos et à la ceinture.',
    peau: 'Gris-brun Chthonien avec des marques de toxines partiellement neutralisées — il a été exposé à des venins qui ont laissé des traces sans être létaux grâce à son élément Poison.',
    yeux: 'Ocre avec une qualité d\'évaluation biologique — il regarde les organismes en termes de propriétés et d\'applications.',
    vetements: 'Tenue de collecte biologique avec protection aux zones de contact. Des gants épais pour les manipulations d\'espèces dangereuses — il les retire pour les espèces qu\'il connaît.',
    signes_particuliers: 'Il catalogue tout ce qu\'il touche — un réflexe de collecteur. Les personnes qu\'il rencontre sont mentalement évaluées comme sources potentielles d\'informations ou de spécimens.',
  },

  psychologie: {
    dominante: 'Collecte de spécimens biologiques dans les zones de transition Ormn-Dur/Noctéa pour la recherche Convergence — insectes résistants aux toxines, champignons aux propriétés particulières, organismes hybrides des zones frontières.',
    mecanisme_de_defense: 'La neutralité du collecteur. Il collecte des spécimens. La recherche les utilise. Il n\'est pas le chercheur — il est l\'approvisionnement. Les applications ne sont pas sa responsabilité.',
    contradiction_interne: 'Il sait que les spécimens qu\'il collecte sont utilisés dans le cadre du projet Avatar Total — des extractions biologiques d\'énergie pure. Kharven (140) lui a décrit les usages avec une précision suffisante pour qu\'il ne puisse pas prétendre l\'ignorance. Il continue de collecter.',
    rapport_aux_autres: 'Kharven (140) est son contact Convergence pour les commandes et les spécifications — il définit ce que la recherche Convergence cherche et valide les livraisons. Drekphal (308) est un Umbrien de Noctéa qui lui signale des specimens dans des zones qu\'il ne peut pas atteindre seul.',
    vision_du_monde: 'Les zones de transition biologiques sont des ressources extraordinaires. La Convergence a les moyens de valoriser ces ressources. Le monde après l\'Avatar Total sera différent — ce que ce monde sera ne lui appartient pas de décider.',
  },

  histoire: {
    enfance: {
      titre: 'Les champignons de Noctéa',
      contenu: 'À 15 ans, dans les zones fongiques de Noctéa, il avait développé une résistance naturelle aux toxines fongiques — son élément Poison lui permettait de neutraliser les effets des champignons sans les subir. Il avait commencé à utiliser cette résistance pour explorer des zones inaccessibles aux autres.',
    },
    arrivee: {
      titre: 'Le recrutement Convergence',
      contenu: 'À 25 ans, Kharven (140) l\'avait contacté avec une commande spécifique — des insectes de la zone de transition Ormn-Dur/Noctéa avec des propriétés de résistance particulières. Kharven avait payé le prix qu\'il avait demandé sans négocier. Il avait commencé à travailler pour la Convergence.',
    },
    premier_conflit: {
      titre: 'La description de Kharven',
      contenu: 'À 29 ans, Kharven lui avait décrit en détail l\'application prévue pour une livraison — des insectes modifiés génétiquement pour améliorer l\'extraction d\'énergie pure de leurs hôtes biologiques. La description était précise. Il avait posé des questions sur les hôtes. Kharven avait répondu de façon générale. Il avait livré.',
    },
    revelation: {
      titre: 'Les spécimens de Thyrvinsek',
      contenu: 'Thyrvinsek (375) lui avait fourni des spécimens d\'insectes résistants aux toxines — des spécimens qu\'il avait présentés comme des données de recherche naturelle. Thyrvinsek ne savait pas l\'usage prévu. Il avait utilisé les spécimens pour une commande de Kharven. Les insectes modifiés avaient été relâchés dans les zones de transition.',
    },
    etat_actuel: {
      titre: 'La commande en cours',
      contenu: 'Sa commande actuelle de Kharven spécifie des spécimens de champignons fongiques de Noctéa avec des propriétés spécifiques de pénétration organique. Les champignons qu\'il cherche existent dans les zones les plus profondes de Noctéa — zones auxquelles Drekphal (308) a accès mais lui non. Il attend une livraison de Drekphal.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karvinsek_champignons_noctea',
      titre: 'Les champignons de Drekphal',
      description: 'La commande de Kharven (140) spécifie des champignons de pénétration organique des profondeurs de Noctéa. Drekphal (308) peut les collecter. Les propriétés de pénétration que Kharven spécifie ont des applications dans l\'extraction d\'énergie pure de sujets vivants — une amélioration des méthodes actuelles.',
      personnages_impliques: [140, 308],
      declencheur: 'Commande de Kharven sur des champignons à pénétration organique spécifique',
      consequence: 'Livraison de Drekphal attendue — application dans les méthodes d\'extraction de la Convergence',
    },
    {
      id: 'karvinsek_thyrvinsek_colonies',
      titre: 'Les insectes relâchés',
      description: 'Les spécimens qu\'il a fournis à Kharven ont été modifiés et relâchés dans les zones de transition — Thyrvinsek (375) observe ces colonies modifiées sans savoir d\'où elles viennent. Si Thyrvinsek fait le lien, la source de spécimens se tarit. Thyrvinsek a posé à Drekkel (145) des questions sur les comportements anormaux.',
      personnages_impliques: [375, 140],
      declencheur: 'Observation par Thyrvinsek des colonies modifiées issues de ses spécimens',
      consequence: 'Risque de perte de source de spécimens si Thyrvinsek identifie l\'origine des modifications',
    },
  ],

  arcs: ['arc_zones_de_transition'],
  position_dans_arc: 'Collecteur biologique Convergence dans les zones de transition Ormn-Dur/Noctéa. Commande en cours de champignons à pénétration organique pour Kharven (140). Thyrvinsek (375) approche de l\'identification de l\'origine des colonies modifiées.',

  relations: [
    { id: 140, nom: 'Kharven', type: 'supérieur', note: 'Contact Convergence pour les commandes et spécifications. A décrit les usages des spécimens avec une précision qui exclut l\'ignorance.' },
    { id: 308, nom: 'Drekphal', type: 'allié', note: 'Collecteur Umbrien dans les profondeurs de Noctéa. Accès aux zones inaccessibles. Livraison en attente.' },
  ],

  combat: {
    sorts: [
      'Toxine de contact (Poison) — injection d\'une toxine via contact physique — neutralisation progressive',
      'Nuée de spécimens (Insecte) — libération d\'insectes stockés avec effets variables selon l\'espèce relâchée — perturbation de zone',
      'Résistance organique (Poison + Insecte) — utilisation de sa résistance naturelle aux toxines combinée à une carapace chitineuse — protection biologique',
    ],
  },

  image_prompts: [
    {
      id: 'karvinsek_collecte',
      description: 'Karvinsek dans une zone de transition Ormn-Dur/Noctéa — des récipients de spécimens attachés à son équipement, il capture un insecte dans un contenant sécurisé. Des champignons fongiques luminescents en arrière-plan. Son expression est professionnelle et focalisée sur la qualité du spécimen.',
      style: 'réaliste collecteur Chthonien Convergence, zone de transition fongique, spécimens biologiques, lumière de champignons',
    },
  ],

  lore_long: `Karvinsek collecte des spécimens biologiques dans les zones de transition Ormn-Dur/Noctéa pour la Convergence. Il sait que ces spécimens servent au projet Avatar Total — Kharven (140) lui a décrit les usages avec suffisamment de précision.

Les insectes fournis à la Convergence ont été modifiés et relâchés — Thyrvinsek (375) les observe sans en connaître l'origine.

Commande en cours : champignons à pénétration organique des profondeurs de Noctéa. Drekphal (308) doit livrer.`,
};

export default karvinsek;
