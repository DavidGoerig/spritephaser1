import type { PersonnageLoreComplet } from '../../../lore-types';

const gyralth: PersonnageLoreComplet = {
  id: 113,
  nom: 'Gyralth',
  element: 'Electrique',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 41 ans, corpulence ordinaire avec les mains d\'un réparateur — callosités aux bons endroits, outils toujours à portée.',
    peau: 'Pâle bleutée Aéride avec des éclairs électriques aux doigts en permanence — son élément est fonctionnel, utilitaire, pas décoratif.',
    yeux: 'Gris électrique avec une qualité pragmatique. Il voit les systèmes, pas les personnes.',
    vetements: 'Tenue de réparateur des strates moyennes — fonctionnelle, usée aux genoux. Plusieurs poches d\'outils.',
    signes_particuliers: 'Il répare les systèmes de navigation des strates moyennes — ni assez haut pour compter dans les budgets, ni assez bas pour être officiellement ignoré. Il existe dans un angle mort administratif.',
  },

  psychologie: {
    dominante: 'Réparateur des systèmes de navigation des strates moyennes d\'Asterciel. Ni assez haut pour avoir des ressources, ni assez bas pour que ses pannes créent une crise institutionnelle. Il opère dans un espace où son travail existe mais où personne ne le voit comme stratégique.',
    mecanisme_de_defense: 'La compétence technique comme identité. Il répare. C\'est son rôle. La question de ce que valent les strates moyennes n\'est pas la sienne.',
    contradiction_interne: 'Il voit les défaillances systémiques mieux que les administrateurs qui gèrent les budgets au-dessus de lui. Il n\'a pas les canaux pour remonter cette information — et n\'est pas sûr que ça changerait quelque chose.',
    rapport_aux_autres: 'Talvyn (23) est dans son réseau — quelqu\'un dont les analyses correspondent aux défaillances qu\'il observe. Gavryn (102) travaille sur les systèmes inter-strates, un niveau au-dessus du sien.',
    vision_du_monde: 'Les strates moyennes fonctionnent parce que des gens comme lui les réparent. Si ces gens partaient, les strates moyennes s\'arrêteraient. Cette dépendance n\'est jamais nommée.',
  },

  histoire: {
    enfance: {
      titre: 'La réparation',
      contenu: 'Formation technique dans les strates moyennes. Réparateur depuis 18 ans — le même type de travail, le même espace institutionnel. Ni promotion ni dégradation.',
    },
    arrivee: {
      titre: 'L\'angle mort',
      contenu: 'Il avait compris sa position administrative à 30 ans : les strates moyennes recevaient les ressources résiduelles après les strates supérieures, et les urgences des strates basses. Son budget était structurellement insuffisant.',
    },
    premier_conflit: {
      titre: 'La défaillance prévisible',
      contenu: 'Il y a 2 ans, un nœud de navigation des strates moyennes avait montré des signes de défaillance. Il avait rempli une demande de remplacement. Elle avait été reclassée "non-prioritaire". Il avait réparé avec ce qu\'il avait.',
    },
    revelation: {
      titre: 'Talvyn',
      contenu: 'Talvyn (23) lui avait demandé des données sur les défaillances des strates moyennes pour ses analyses. Gyralth avait réalisé que quelqu\'un documentait ce qu\'il observait — mais à l\'extérieur de tout canal officiel.',
    },
    etat_actuel: {
      titre: 'La réparation continue',
      contenu: 'Il répare. Les défaillances s\'accumulent plus vite que ses réparations. Il le sait. Il continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'gyralth_defaillance',
      titre: 'La panne qui ne peut plus être réparée',
      description: 'Gyralth répare les systèmes de navigation des strates moyennes avec des ressources insuffisantes depuis des années. Si une défaillance majeure arrive — un nœud central qui lâche — il aura des données précises sur pourquoi : manque de budget, demandes ignorées, pièces de remplacement refusées. Sa documentation sera la seule trace administrative de la cause réelle.',
      personnages_impliques: [23, 102],
      declencheur: 'Défaillance majeure d\'un système de navigation des strates moyennes',
      consequence: 'Gyralth comme seul détenteur des données sur la cause réelle — ressource ou cible',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Réparateur des strates moyennes. Angle mort administratif. Observe les défaillances systémiques sans canal pour les signaler.',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Ses analyses correspondent aux défaillances observées.' },
    { id: 102, nom: 'Gavryn', type: 'contact', note: 'Travaille sur les systèmes inter-strates, niveau supérieur.' },
  ],

  combat: {
    sorts: [
      'Décharge de réparation (Electrique) — stimulation électrique d\'urgence — réactivation de systèmes',
      'Arc électrique (Electrique) — projection défensive — usage en dernier recours',
    ],
  },

  image_prompts: [
    {
      id: 'gyralth_reparation',
      description: 'Gyralth réparant un nœud de navigation dans les strates moyennes d\'Asterciel — un Aéride de 41 ans avec des outils aux mains et une expression de quelqu\'un qui fait ce qu\'il peut avec ce qu\'il a. Les signes de défaillance systémique sont visibles autour de lui.',
      style: 'réaliste Aéride réparateur, strates moyennes d\'Asterciel, angle mort administratif, compétence technique sans ressources',
    },
  ],

  lore_long: `Gyralth répare les systèmes de navigation des strates moyennes d'Asterciel depuis 18 ans. Ni assez haut pour compter dans les budgets, ni assez bas pour créer une crise.

Il voit les défaillances systémiques venir. Il n'a pas les canaux pour les signaler efficacement.

Quand la panne majeure arrivera, il aura les données sur pourquoi.`,
};

export default gyralth;
