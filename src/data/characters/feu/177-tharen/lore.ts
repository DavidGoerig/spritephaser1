import type { PersonnageLoreComplet } from '../../../lore-types';

const tharen: PersonnageLoreComplet = {
  id: 177,
  nom: 'Tharen',
  element: 'Feu',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 51 ans, forgeron — corpulence de quelqu\'un qui travaille le métal depuis 30 ans. Mains larges, posture stable.',
    peau: 'Ton chaud avec des marques de forge — des brûlures légères cicatrisées sur les avant-bras.',
    yeux: 'Orangés avec une qualité de quelqu\'un qui a fait un choix et qui vit avec ses conséquences.',
    vetements: 'Tablier de forge, vêtements de travail. Pas de tenue officielle depuis qu\'il a refusé les contrats impériaux.',
    signes_particuliers: 'Il a refusé de produire les "conteneurs de puissance" impériaux — des dispositifs pour extraire et stocker les éléments Feu des Élus. Ce refus lui a valu une surveillance permanente.',
  },

  psychologie: {
    dominante: 'Forgeron Homme-Lien de l\'Isthme qui a refusé de produire les conteneurs de puissance élémentaire pour l\'Empire. Il vit sous surveillance depuis ce refus. Il continue à forger — des outils, pas des armes, pas des dispositifs d\'extraction. Son indépendance est une posture qu\'il maintient sous pression.',
    mecanisme_de_defense: 'La spécialisation comme protection. Il forge des outils courants que personne ne peut lui reprocher de produire. Il n\'est plus dans le domaine des dispositifs spécialisés. Le refus est derrière lui.',
    contradiction_interne: 'Il a refusé pour des raisons éthiques — les conteneurs de puissance servaient à extraire les éléments d\'Élus. Mais sa forge continue à fonctionner grâce à des clients qui incluent des personnes qui travaillent pour l\'Empire. Il a tracé une ligne mais il vit dans la grisaille de l\'autre côté.',
    rapport_aux_autres: 'Keshavel (267) est un adversaire indirect — un officier impérial qui continue à approcher des forgerons pour des dispositifs que Tharen refuserait de produire. La Rupture Thermique est une menace lointaine qui a changé la nature de ce qu\'on lui demande de fabriquer.',
    vision_du_monde: 'Un forgeron fait des outils. Pas des armes d\'extraction. La ligne est claire dans sa tête. Moins claire dans l\'application quotidienne.',
  },

  histoire: {
    enfance: {
      titre: 'La forge',
      contenu: 'Apprenti forgeron à l\'Isthme depuis 15 ans. L\'Isthme était un carrefour — des commandes variées, des matériaux de plusieurs régions. Il avait développé une expertise dans les alliages mixtes.',
    },
    arrivee: {
      titre: 'Les conteneurs',
      contenu: 'À 44 ans, l\'Empire lui avait commandé des "conteneurs de puissance" — des dispositifs techniques pour stocker l\'énergie élémentaire extraite d\'Élus Feu. Il avait compris ce à quoi ils servaient. Il avait refusé.',
    },
    premier_conflit: {
      titre: 'La surveillance',
      contenu: 'Deux officiers impériaux s\'étaient installés dans le quartier après son refus. Ils ne l\'avaient pas arrêté — il était utile vivant. Mais son activité était suivie. Ses clients étaient notés.',
    },
    revelation: {
      titre: 'Le compromis impossible',
      contenu: 'Il avait compris que vivre sous surveillance tout en maintenant son refus signifiait que chaque client devenait un risque — pour lui et pour eux. Son indépendance avait des coûts que ses clients payaient parfois sans le savoir.',
    },
    etat_actuel: {
      titre: 'La forge sous surveillance',
      contenu: 'Il forge. Les officiers notent. Il n\'a pas refait de conteneurs.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tharen_refus',
      titre: 'Le forgeron sous surveillance',
      description: 'Tharen vit sous surveillance depuis son refus de produire des conteneurs de puissance impériaux. Si quelqu\'un — un Dissident, un Élu en fuite — lui demande de l\'aide, il devra choisir entre son refus éthique et le risque que ses clients soient identifiés par ses surveillants.',
      personnages_impliques: [267],
      declencheur: 'Un Élu ou un Dissident approchant Tharen pour une aide qui risque d\'attirer l\'attention',
      consequence: 'Tharen exposé à une décision entre sa sécurité et celle de quelqu\'un dans le besoin',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Forgeron ayant refusé de produire les conteneurs de puissance impériaux. Vit sous surveillance. Maintient son indépendance à un coût croissant.',

  relations: [
    { id: 267, nom: 'Keshavel', type: 'adversaire', note: 'Officier impérial continuant à approcher des forgerons pour des dispositifs que Tharen refuserait.' },
  ],

  combat: {
    sorts: [
      'Frappe de forge (Feu) — coup de marteau élémentaire — attaque directe',
      'Mur de chaleur (Feu) — barrière thermique — défense de position',
    ],
  },

  image_prompts: [
    {
      id: 'tharen_forge',
      description: 'Tharen dans sa forge à l\'Isthme — un Homme-Lien de 51 ans qui travaille le métal avec précision. Dehors, visible par la fenêtre, un officier impérial note quelque chose. Tharen forge un outil ordinaire — une bêche, ou un couteau de cuisine. Rien qui ressemble à un conteneur de puissance.',
      style: 'réaliste Homme-Lien forgeron, Isthme, surveillance impériale, refus éthique, forge ordinaire sous tension',
    },
  ],

  lore_long: `Tharen a refusé de produire les conteneurs de puissance élémentaire commandés par l'Empire. Ces dispositifs extraient l'énergie des Élus Feu.

Il vit sous surveillance depuis ce refus. Sa forge continue — des outils, pas des dispositifs d'extraction.

Il a tracé une ligne. La maintenir sous surveillance quotidienne a un coût.`,
};

export default tharen;
