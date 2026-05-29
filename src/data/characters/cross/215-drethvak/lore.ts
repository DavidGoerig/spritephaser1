import type { PersonnageLoreComplet } from '../../../lore-types';

const drethvak: PersonnageLoreComplet = {
  id: 215,
  nom: 'Drethvak',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 43 ans, forgeron de précision — corpulence de quelqu\'un dont le travail exige une précision que la force brute ne peut pas remplacer.',
    peau: 'Rouge-ardente avec des intégrations acier fines dans les doigts — ses outils les plus précis sont intégrés à ses mains.',
    yeux: 'Orangés avec des éclats argentés très fins. Il voit les détails que les autres manquent.',
    vetements: 'Tenue d\'atelier médicale — propre, précise, adaptée au travail fin.',
    signes_particuliers: 'Il construit des outils médicaux de précision pour ses clients des deux factions. Ses pinces, ses aiguilles, ses instruments permettent des interventions élémentaires que les outils génériques ne permettent pas.',
  },

  psychologie: {
    dominante: 'Forgeron de précision indépendant à Varkhôl. Il fabrique des outils médicaux — des instruments qui permettent des interventions sur les Élus dont l\'élément crée des complications médicales. Ses clients sont dans les deux camps parce que les complications élémentaires ne choisissent pas de camp.',
    mecanisme_de_defense: 'La médecine comme neutralité absolue. Il soigne et équipe ceux qui soignent. La médecine ne prend pas de position politique. Ses outils non plus.',
    contradiction_interne: 'Ses outils médicaux permettent des interventions élémentaires — mais les interventions élémentaires ne sont pas toutes médicales. Certains de ses clients utilisent ses instruments pour des usages qui sont à la limite de la médecine.',
    rapport_aux_autres: 'Thessandra (10) est dans son réseau — une praticienne médicale Pyrien qui utilise ses outils et lui donne des retours sur les améliorations nécessaires. Karveth (144) est dans son réseau d\'Ormn-Dur — un forgeron Chthonien avec qui il échange des techniques pour les alliages spécifiques aux galeries.',
    vision_du_monde: 'Les complications élémentaires sont des problèmes médicaux. Les problèmes médicaux nécessitent des outils précis. Il fait les outils précis. Ce qui se passe entre l\'outil et le patient appartient au praticien, pas au forgeron.',
  },

  histoire: {
    enfance: {
      titre: 'La forge de précision',
      contenu: 'Né à Varkhôl dans une famille de forgerons. Son double élément Feu/Acier lui avait permis de travailler des pièces d\'une finesse que ses pairs ne pouvaient pas atteindre. Il avait naturellement dérivé vers les commandes les plus précises.',
    },
    arrivee: {
      titre: 'Le médical',
      contenu: 'Thessandra (10) l\'avait contacté à 28 ans pour des instruments médicaux d\'une précision qu\'elle ne trouvait pas chez les forgerons généraux. Il avait développé des solutions. Sa clientèle médicale avait grandi.',
    },
    premier_conflit: {
      titre: 'L\'usage douteux',
      contenu: 'Un client avait commandé un instrument qu\'il avait d\'abord présenté comme médical. En le livrant, il avait compris que l\'usage prévu n\'était pas entièrement médical — l\'instrument permettait aussi une extraction élémentaire forcée. Il avait livré. Il avait refusé ce client ensuite.',
    },
    revelation: {
      titre: 'La précision et la responsabilité',
      contenu: 'Il avait compris que des outils très précis avaient des usages très précis — et que la précision de son travail signifiait que les mauvais usages étaient aussi précis. La responsabilité était dans la livraison, pas dans la fabrication. Il avait décidé qu\'il ne pouvait pas décider ça de façon absolue.',
    },
    etat_actuel: {
      titre: 'Le forgeron médical',
      contenu: 'Il fabrique. Les praticiens utilisent. Il sélectionne ses clients.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drethvak_instrument',
      titre: 'L\'instrument et son usage',
      description: 'Drethvak fabrique des outils médicaux précis. Si un client lui commande un instrument dont il reconnaît le potentiel d\'usage non-médical — une extraction élémentaire forcée, un Drain — il devra décider si sa politique de sélection des clients est suffisamment précise pour empêcher des usages qu\'il n\'approuverait pas.',
      personnages_impliques: [10, 144],
      declencheur: 'Une commande d\'instrument avec un usage potentiellement non-médical reconnaissable',
      consequence: 'Drethvak refusant ou acceptant — et les conséquences de sa décision sur sa clientèle et sa neutralité',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Forgeron de précision indépendant à Varkhôl fabricant des outils médicaux pour des praticiens des deux factions. Neutralité médicale. Sélectionne ses clients après un incident.',

  relations: [
    { id: 10, nom: 'Thessandra', type: 'contact', note: 'Praticienne médicale Pyrien utilisant ses outils et donnant des retours.' },
    { id: 144, nom: 'Karveth', type: 'contact', note: 'Forgeron Chthonien d\'Ormn-Dur avec qui il échange des techniques d\'alliage.' },
  ],

  combat: {
    sorts: [
      'Frappe chirurgicale (Feu/Acier) — attaque précise sur point de faiblesse — dommage maximal minimal',
      'Scalpel d\'acier (Acier) — coupe précise — neutralisation ciblée',
    ],
  },

  image_prompts: [
    {
      id: 'drethvak_atelier',
      description: 'Drethvak dans son atelier à Varkhôl — un Pyrien de 43 ans finissant un instrument médical de précision sous une loupe élémentaire. Ses doigts avec leurs intégrations acier fines manipulent des pièces de la taille d\'un ongle avec une précision absolue. L\'instrument est à la fois magnifique et légèrement inquiétant.',
      style: 'réaliste Pyrien forgeron de précision, Varkhôl, outils médicaux élémentaires, double élément Feu/Acier, neutralité médicale',
    },
  ],

  lore_long: `Drethvak fabrique des outils médicaux de précision pour des praticiens des deux factions à Varkhôl. Son double élément Feu/Acier lui permet de travailler des pièces d'une finesse que ses pairs ne peuvent pas atteindre.

La médecine ne prend pas de position politique. Ses outils non plus — en principe.

Un incident l'a amené à sélectionner ses clients. La précision de ses outils et la précision de leurs usages sont liées.`,
};

export default drethvak;
