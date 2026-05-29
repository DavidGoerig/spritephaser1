import type { PersonnageLoreComplet } from '../../../lore-types';

const kraethyn: PersonnageLoreComplet = {
  id: 122,
  nom: 'Kraethyn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de 58 ans, posture d\'une guérisseuse — légèrement penchée, habituée à travailler à genoux près des racines blessées.',
    peau: 'Écorce verte avec des traces de cicatrices végétales — les marques de racines qu\'elle a tenues entre ses mains pour les réparer.',
    yeux: 'Verts profonds avec une qualité de quelqu\'un qui est toujours en retard sur quelque chose.',
    vetements: 'Tenue de Conservatrice de terrain — simple, avec des compartiments pour ses remèdes végétaux.',
    signes_particuliers: 'Elle répare ce que Krath (36) brûle — toujours en retard sur lui. Cette asymétrie structure son travail comme une course qu\'elle ne peut pas gagner.',
  },

  psychologie: {
    dominante: 'Guérisseuse Conservatrice spécialisée dans la réparation des arbres blessés. Son adversaire fonctionnel est Krath (36) — le forestier Gardien dont les brûlages créent les blessures qu\'elle répare. Elle est structurellement en retard : il brûle plus vite qu\'elle ne répare.',
    mecanisme_de_defense: 'La guérison comme acte éthique indépendant de son efficacité. Elle répare parce que c\'est juste, pas parce qu\'elle peut rattraper Krath.',
    contradiction_interne: 'Elle répare ce que Krath brûle. Si Krath arrêtait de brûler, elle n\'aurait pas besoin de réparer autant. Mais son travail n\'inclut pas d\'arrêter Krath — seulement de soigner après lui.',
    rapport_aux_autres: 'Krath (36) est son adversaire fonctionnel — elle le suit dans ses destructions. Sylvae (31) est son soutien de réseau.',
    vision_du_monde: 'Un arbre blessé par le feu peut être sauvé — s\'il est soigné assez vite. La Faim des Racines avait détruit la forêt parce que personne ne soignait assez vite. Elle essaie de combler ce retard, séquence par séquence.',
  },

  histoire: {
    enfance: {
      titre: 'La guérison',
      contenu: 'Formation en botanique médicale Sylvan. Elle s\'était spécialisée dans les blessures de feu — une spécialité difficile pour une Sylvan, mais nécessaire dans un contexte où le feu est une méthode de gestion forestière.',
    },
    arrivee: {
      titre: 'Krath',
      contenu: 'Elle avait commencé à travailler après les brûlages de Krath (36) par hasard — elle était dans la zone, elle avait vu le résultat, elle avait soigné. Ce hasard était devenu une routine.',
    },
    premier_conflit: {
      titre: 'Le retard',
      contenu: 'Elle avait calculé qu\'elle réparait environ 60% des arbres que Krath brûlait avant que leurs blessures soient irréversibles. 40% mouraient avant qu\'elle arrive. Ce ratio ne s\'améliorait pas.',
    },
    revelation: {
      titre: 'L\'asymétrie',
      contenu: 'Elle avait compris que cette asymétrie était structurelle — pas une question d\'effort. Krath brûlerait toujours plus vite qu\'elle ne pourrait réparer. Son travail n\'était pas de rattraper Krath. C\'était de sauver ce qu\'elle pouvait.',
    },
    etat_actuel: {
      titre: 'La course',
      contenu: 'Elle répare. Krath brûle. Elle est en retard. Elle continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kraethyn_convergence',
      titre: 'L\'arbre qu\'il faut choisir',
      description: 'Kraethyn répare ce que Krath brûle. Si Krath décide de brûler une zone qui contient un arbre-mémoire ou un fragment du réseau racinaire que Aelvyn (119) cherche, Kraethyn devra choisir : arriver avant lui, le confronter directement, ou accepter que ce soit perdu. Son retard structurel rend les deux premières options difficiles.',
      personnages_impliques: [36, 31],
      declencheur: 'Krath décidant de brûler une zone écologiquement critique irremplaçable',
      consequence: 'Kraethyn forcée de confronter directement Krath — ou de laisser quelque chose d\'irréparable partir',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Guérisseuse Conservatrice qui répare ce que Krath brûle. Structurellement en retard. Adversaire fonctionnelle de Krath (36).',

  relations: [
    { id: 36, nom: 'Krath', type: 'adversaire', note: 'Elle répare ce qu\'il brûle. Toujours en retard sur lui.' },
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Soutien de réseau Conservateur.' },
  ],

  combat: {
    sorts: [
      'Régénération forcée (Plante) — accélération de guérison végétale — restauration rapide',
      'Réseau de soins (Plante) — connexion entre arbres blessés — stabilisation collective',
    ],
  },

  image_prompts: [
    {
      id: 'kraethyn_guerison',
      description: 'Kraethyn soignant un arbre brûlé dans une forêt de Sylvera — une Sylvan de 58 ans agenouillée près de racines carbonisées, mains posées sur l\'écorce. Derrière elle, les traces du passage de Krath. Son expression est de quelqu\'un qui fait ce qu\'elle peut sans croire qu\'elle suffira.',
      style: 'réaliste Sylvan guérisseuse Conservatrice, Sylvera, arbres brûlés par Krath, retard structurel, soins végétaux',
    },
  ],

  lore_long: `Kraethyn répare ce que Krath (36) brûle dans les forêts de Sylvera. Elle est toujours en retard — il brûle plus vite qu'elle ne répare.

Elle répare 60% des arbres avant que leurs blessures soient irréversibles. 40% meurent avant qu'elle arrive.

Cette asymétrie est structurelle. Elle continue quand même.`,
};

export default kraethyn;
