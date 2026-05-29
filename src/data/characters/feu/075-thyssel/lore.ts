import type { PersonnageLoreComplet } from '../../../lore-types';

const thyssel: PersonnageLoreComplet = {
  id: 75,
  nom: 'Thyssel',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Pyrien de 30 ans, mince avec la vitesse du courrier impérial. Ses jambes sont longues et ses mouvements économiques — il optimise chaque déplacement. La forme d\'un messager professionnel.',
    peau: 'Brune Pyrien avec une luminescence rouge aux jambes — l\'élément Feu qui accélère ses courses. Il ne la contrôle pas entièrement, mais elle l\'aide dans son travail.',
    yeux: 'Rouges avec une qualité d\'attention aux détails pratiques — routes, portes, horaires. Il mémorise sans y penser.',
    vetements: 'Tenue de courrier impérial sans insignes visibles en déplacement — la règle standard est la discrétion. Son sac de courrier est marqué de sceaux qu\'il ne lit pas.',
    signes_particuliers: 'Il transporte des ordres qu\'il ne lit pas. Cette règle professionnelle protège sa neutralité — et l\'Empire. Certains de ces ordres visent les Dissidentes.',
  },

  psychologie: {
    dominante: 'Courrier impérial à Varkhôl depuis 8 ans. Son travail est la livraison, pas le contenu. Cette distinction lui permet de fonctionner sans examiner ce qu\'il fait.',
    mecanisme_de_defense: 'La règle professionnelle comme protection morale. Il ne lit pas les messages. Il ne sait donc pas ce qu\'il transporte. Ce qu\'il ne sait pas ne le concerne pas.',
    contradiction_interne: 'Les routes qu\'il connaît et les contacts qu\'il a croisés lui donnent une image partielle de ce que les messages organisent. Certains détails ont des implications que même un courrier qui ne lit pas peut deviner.',
    rapport_aux_autres: 'Cendrix (2) — il a livré des messages à des contacts de ce réseau sans savoir ce que c\'était. Brasia (1) — une des destinataires indirectes de certains ordres, potentiellement. Ces liens existent sans qu\'il les ait construits.',
    vision_du_monde: 'L\'Empire a des procédures. Les procédures ont un sens. Un courrier efficace ne questionne pas les procédures.',
  },

  histoire: {
    enfance: {
      titre: 'Le service',
      contenu: 'À 18 ans, il avait rejoint le service de courrier impérial à Varkhôl — une des rares positions stables disponibles. Son élément Feu l\'avait naturellement orienté vers les missions rapides.',
    },
    arrivee: {
      titre: 'Les routes',
      contenu: 'En 8 ans, il avait mémorisé toutes les routes de Varkhôl et leurs variations selon l\'état des rues post-Rupture. Sa réputation de fiabilité lui avait valu des missions de plus en plus sensibles.',
    },
    premier_conflit: {
      titre: 'Le doute',
      contenu: 'Il avait livré un message et vu, deux jours après, une arrestation dans le quartier du destinataire. Il avait fait le lien. Il avait décidé de ne pas faire le lien. La règle disait qu\'il ne lisait pas les messages.',
    },
    revelation: {
      titre: 'Les habitudes',
      contenu: 'Certains détails s\'accumulaient malgré sa règle de non-lecture : des horaires, des réactions à sa livraison, des quartiers ciblés. Il savait plus qu\'un courrier neutre ne devrait savoir.',
    },
    etat_actuel: {
      titre: 'La livraison continue',
      contenu: 'Il continue à livrer. Sa neutralité professionnelle est intacte dans sa définition. Elle est moins intacte dans les faits.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyssel_ordres',
      titre: 'Ce que le courrier sait',
      description: 'Thyssel a transporté des ordres visant les Dissidentes. Il a fait des connexions involontaires entre les messages et leurs effets. Sa neutralité professionnelle est une décision, pas une ignorance. Si quelqu\'un le force à articuler ce qu\'il sait, sa neutralité s\'effondre.',
      personnages_impliques: [2, 1],
      declencheur: 'Thyssel confronté aux conséquences d\'un message qu\'il a livré',
      consequence: 'Décision de maintenir la neutralité professionnelle ou d\'agir sur ce qu\'il sait',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Courrier impérial. Transporte des ordres sans les lire. Sait plus que sa règle professionnelle ne devrait permettre.',

  relations: [
    { id: 2, nom: 'Cendrix', type: 'contact', note: 'A livré des messages à ses contacts sans savoir ce que c\'était.' },
    { id: 1, nom: 'Brasia', type: 'adversaire', note: 'Destinataire indirecte de certains ordres. Adversaire sans contact direct.' },
  ],

  combat: {
    sorts: [
      'Sprint de Feu (Feu) — accélération rapide — fuite ou poursuite d\'urgence',
      'Frappe thermique (Feu) — attaque basique — usage défensif uniquement',
    ],
  },

  image_prompts: [
    {
      id: 'thyssel_livraison',
      description: 'Thyssel livrant un message dans les rues de Varkhôl — un Pyrien mince se déplaçant vite, sac de courrier impérial sur l\'épaule. Son expression est professionnellement neutre. Il ne sait pas ce qu\'il transporte. Il le décide.',
      style: 'réaliste Pyrien courrier impérial, Varkhôl, neutralité professionnelle, messages aux conséquences inconnues',
    },
  ],

  lore_long: `Thyssel est courrier impérial à Varkhôl depuis 8 ans. Il transporte des ordres sans les lire — règle professionnelle standard.

Certains de ces ordres visent les Dissidentes. Il a fait des connexions involontaires entre ses livraisons et leurs effets.

Sa neutralité professionnelle est une décision, pas une ignorance. Il choisit de ne pas articuler ce qu'il sait.`,
};

export default thyssel;
