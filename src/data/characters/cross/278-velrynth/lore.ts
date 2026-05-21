import type { PersonnageLoreComplet } from '../../../lore-types';

const velrynth: PersonnageLoreComplet = {
  id: 278,
  nom: 'Velrynth',
  element: 'Electrique',
  element2: 'Acier',
  espece: 'Aérides',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand, carré — corps d\'ingénieur militaire qui manipule des matériaux lourds. Des mains larges avec des callus des deux côtés.',
    peau: 'Gris pâle Aéride, avec des stries métalliques aux avant-bras — marques de l\'élément Acier exprimé dans la peau quand il travaille à saturation.',
    yeux: 'Gris métallique, regard d\'évaluateur. Il regarde les gens comme il regarde les prototypes : est-ce que ça tient ?',
    vetements: 'Combinaison de laboratoire renforcée avec des plaques d\'acier aux articulations — conçue par lui, portée par lui, pas standard. Il a refusé d\'adopter l\'uniforme militaire standard depuis 3 ans.',
    signes_particuliers: 'Il frappe les surfaces avant d\'y toucher — habitude de tester la conductivité. Le son de la surface lui dit ce qu\'il a besoin de savoir avant d\'engager son élément.',
  },

  psychologie: {
    dominante: 'Efficacité de protection. L\'armure qu\'il conçoit sauve des vies — des vies de régulateurs impériaux, certes, mais des vies.',
    mecanisme_de_defense: 'Le problème technique comme écran. Quand quelqu\'un parle des implications de ce qu\'il fabrique, il répond avec des spécifications matériaux.',
    contradiction_interne: 'Ses armures conductrices protègent les régulateurs qui traquent les Élus non-enregistrés. Il sait ce que font les régulateurs. Il a décidé que son travail s\'arrête à la protection — pas à l\'usage que ses clients font de cette protection.',
    rapport_aux_autres: 'Skarith (9) lui a passé ses premières commandes — pas directement, via le réseau de logistique. Il ne connaît pas Skarith personnellement. Thyss (42) lui a demandé une variante pour les conditions souterraines d\'Ormn-Dur. C\'est sa commande la plus techniquement intéressante.',
    vision_du_monde: 'Il existe des matériaux qui devraient fonctionner ensemble et qui ne le font pas encore. Son travail est de résoudre ça. Ce que les gens font ensuite n\'est pas son problème.',
  },

  histoire: {
    enfance: {
      titre: 'Asterciel et les métaux',
      contenu: 'Né dans les strates moyennes d\'Asterciel d\'un père forgeron Aéride spécialisé dans les alliages pour les structures des plateformes. L\'élément Acier était naturel dans ce contexte. L\'Electrique était apparu à 16 ans — une décharge accidentelle en travaillant sur une jonction de structure. Il avait compris ce que ça signifiait pour les alliages conducteurs.',
    },
    arrivee: {
      titre: 'Le recrutement militaire',
      contenu: 'L\'Empire l\'avait recruté à 30 ans après avoir vu ses prototypes d\'alliages légers pour les plates-formes d\'Asterciel. Pas pour les plates-formes — pour les armures. La transition lui avait pris un an à accepter. Ce qu\'il avait accepté n\'était pas l\'Empire mais le problème technique : comment faire une armure qui conduise l\'élément du porteur sans bloquer ses capacités ?',
    },
    premier_conflit: {
      titre: 'La première armure testée',
      contenu: 'Son premier prototype testé en condition réelle : un régulateur l\'avait portée dans une intervention à Varkhôl. Le régulateur était rentré. L\'armure avait absorbé une attaque électrique qui aurait tué l\'homme. Velrynth avait lu le rapport et avait noté que l\'armure avait fonctionné. Il n\'avait pas demandé ce que le régulateur faisait à Varkhôl.',
    },
    revelation: {
      titre: 'La variante souterraine',
      contenu: 'La commande de Thyss pour Ormn-Dur : des armures pour opérations souterraines dans des environnements à vapeurs fongiques et pression variable. Le problème était techniquement différent de tout ce qu\'il avait résolu. Il avait passé 4 mois dessus. La solution impliquait un alliage dont il n\'était pas certain que les propriétés étaient entièrement comprises. Il avait documenté les incertitudes. Il avait livré.',
    },
    etat_actuel: {
      titre: 'Le catalogue grandissant',
      contenu: 'Il a maintenant 7 variantes opérationnelles d\'armures conductrices. Chacune est optimisée pour un type d\'environnement. Elles protègent les régulateurs. Les régulateurs font ce qu\'ils font. Velrynth continue de résoudre les problèmes suivants — actuellement, une armure qui s\'adapte automatiquement à l\'élément de l\'attaque entrante.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velrynth_armure_opmn_dur',
      titre: 'Les incertitudes documentées',
      description: 'La variante souterraine pour Thyss inclut un alliage dont les propriétés à long terme dans les vapeurs fongiques ne sont pas entièrement comprises. Il a documenté ces incertitudes dans ses notes techniques. Ces notes ne font pas partie du rapport de livraison officiel. Si quelqu\'un lisait ses notes, il saurait que Velrynth sait que l\'armure a des limites non publiées.',
      personnages_impliques: [42],
      declencheur: 'Commande technique pour conditions souterraines',
      consequence: 'Armure opérationnelle avec des limitations non divulguées',
    },
    {
      id: 'velrynth_adaptation_automatique',
      titre: 'Le projet suivant',
      description: 'Il travaille sur une armure qui lit l\'élément d\'une attaque entrante et ajuste sa conductivité en temps réel. Si ça fonctionne, ce sera la protection la plus complète jamais conçue pour un régulateur impérial. C\'est aussi techniquement élégant d\'une façon qui lui donne envie de résoudre le problème indépendamment de l\'usage.',
      personnages_impliques: [],
      declencheur: 'Intérêt technique propre',
      consequence: 'Avancée de protection militaire si réussie',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Infrastructure de protection impériale. Ses armures permettent aux régulateurs d\'opérer dans des environnements qui les auraient autrement tués.',

  relations: [
    { id: 9, nom: 'Skarith', type: 'contact_nécessaire', note: 'Client indirect via logistique. Ne le connaît pas personnellement. Source de premières commandes.' },
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Commande la plus techniquement intéressante — conditions souterraines. Collaboration technique sans contexte politique.' },
  ],

  combat: {
    sorts: [
      'Armure conductrice (Acier) — activation de son propre équipement pour absorber les attaques élémentaires entrantes',
      'Arc de renvoi (Electrique) — redirection d\'une charge électrique absorbée vers une cible — renvoi instantané',
      'Frappe structurelle (Acier) — frappe ciblée sur les points faibles d\'une armure ou d\'une structure — connaissance de forge appliquée',
    ],
  },

  image_prompts: [
    {
      id: 'velrynth_atelier',
      description: 'Velrynth dans son atelier de la Citadelle, examinant une plaque d\'alliage contre la lumière. Ses avant-bras ont les stries métalliques de l\'élément exprimé. Il n\'est pas en train de forger — il est en train de comprendre ce qu\'il a fabriqué.',
      style: 'réaliste métallique, lumière d\'atelier froide, tons gris et acier, concentration technique',
    },
  ],

  lore_long: `Velrynth fabrique des armures pour les régulateurs impériaux. Elles fonctionnent.

Son premier prototype a absorbé une attaque électrique qui aurait tué le régulateur qui le portait. Il a lu le rapport. Il a noté que l'armure avait fonctionné. Il n'a pas demandé ce que le régulateur faisait à Varkhôl.

Ce n'est pas de l'aveuglement. C'est une ligne qu'il a tracée délibérément : son travail s'arrête à la protection. L'usage que ses clients font de cette protection n'est pas son domaine.

La variante souterraine pour Thyss est sa commande la plus intéressante. L'alliage requis pour résister aux vapeurs fongiques d'Ormn-Dur dans une armure conductrice n'existe pas encore. Il l'a créé. Il y a des incertitudes sur ses propriétés à long terme dans ces conditions — il les a documentées dans ses notes techniques, pas dans le rapport de livraison.

Il travaille maintenant sur une armure qui lit l'élément d'une attaque en temps réel et ajuste sa conductivité avant l'impact. Si ça fonctionne, c'est le projet le plus élégant qu'il ait réalisé.

Ce sera aussi la protection la plus complète jamais conçue pour un régulateur. Il résoudra le problème parce que le problème mérite d'être résolu.`,
};

export default velrynth;
