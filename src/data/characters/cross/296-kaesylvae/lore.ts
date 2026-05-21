import type { PersonnageLoreComplet } from '../../../lore-types';

const kaesylvae: PersonnageLoreComplet = {
  id: 296,
  nom: 'Kaesylvae',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: '220 ans. Elle n\'est pas vieille comme on voit la vieillesse — elle est ancienne comme un arbre est ancien. Le corps ne trahit pas 220 ans mais la façon d\'occuper l\'espace les révèle.',
    peau: 'Brun très foncé avec des stries argentées — l\'âge d\'un Sylvan long-vivant qui a absorbé des siècles de soleil et de sève. La Fée secondaire donne une légère luminosité aux yeux et aux mains.',
    yeux: 'Vert très clair avec une qualité de regard qui traverse le présent pour voir quelque chose derrière.',
    vetements: 'Robe sylvane simple, inchangée de style depuis des décennies. Elle ne s\'adapte pas aux modes — les modes s\'adaptent autour d\'elle ou ne s\'adaptent pas.',
    signes_particuliers: 'Elle parle parfois à un arbre absent — elle continue une conversation entamée il y a des années dans un endroit différent. Le réseau invisible dont elle parle, elle l\'utilise comme si c\'était réel.',
  },

  psychologie: {
    dominante: 'Connaissance ancienne d\'un phénomène que les jeunes Sylvans ne perçoivent plus. Elle sait que les arbres forment un réseau entre les régions. Elle sait parce qu\'elle l\'a senti.',
    mecanisme_de_defense: 'L\'attente de la bonne oreille. Si personne ne comprend ce qu\'elle dit, elle ne dit pas plus fort — elle attend quelqu\'un qui a les références pour entendre.',
    contradiction_interne: 'Elle a 220 ans de connaissance sur quelque chose d\'important. Les gens qui pourraient l\'utiliser sont soit trop jeunes pour avoir les références, soit dans des factions dont les objectifs ne correspondent pas à ce qu\'elle veut que cette connaissance serve.',
    rapport_aux_autres: 'Thalorn (33) est venu la voir une fois, il y a 40 ans. Il avait pris des notes. Il n\'avait pas entièrement compris, mais avait pris des notes. Sylindra (37) travaille sur un fragment actif du réseau — c\'est la première personne depuis 40 ans qui pourrait vraiment comprendre ce qu\'elle dit.',
    vision_du_monde: 'Le réseau que les arbres forment entre les régions n\'est pas une métaphore. Les arbres communiquent via des canaux que les non-Sylvans ne perçoivent pas et que les Sylvans ont oublié de percevoir. Elle le sait parce qu\'à 80 ans, elle avait encore cette perception. À 220 ans, elle la perçoit toujours. Les autres ne l\'ont plus.',
  },

  histoire: {
    enfance: {
      titre: 'L\'écoute des arbres',
      contenu: 'Née à Sylvera il y a 220 ans, avant que les deux destructions forestières principales n\'aient eu lieu. À 50 ans, elle percevait clairement le réseau que les arbres formaient entre eux — pas juste les réseaux racinaires locaux, mais des connexions longue distance entre des arbres séparés par des centaines de kilomètres. Elle avait supposé que tous les Sylvans l\'entendaient.',
    },
    arrivee: {
      titre: 'La découverte de l\'exception',
      contenu: 'À 80 ans, lors d\'un échange avec un autre Sylvan, elle avait réalisé que sa perception du réseau longue distance était exceptionnelle. Les autres percevaient les réseaux locaux. Elle percevait quelque chose de plus vaste. Elle ne savait pas si c\'était son élément Fée secondaire, son âge, ou une capacité individuelle.',
    },
    premier_conflit: {
      titre: 'La première destruction',
      contenu: 'Elle avait 120 ans quand la première destruction avait frappé Sylvera. Elle avait senti le réseau se fracturer — comme si des fils dans une toile se rompaient successivement. Après la destruction, le réseau qu\'elle percevait était différent : des zones de silence, des connexions manquantes, mais aussi des connexions nouvelles qui s\'adaptaient.',
    },
    revelation: {
      titre: 'L\'exil',
      contenu: 'Elle s\'est exilée il y a 30 ans — pas par contrainte, par choix. Les deux factions Sylvanes voulaient utiliser ce qu\'elle savait pour leurs objectifs opposés. Elle avait choisi de n\'appartenir à aucune pour que sa connaissance ne soit pas réduite à un outil.',
    },
    etat_actuel: {
      titre: 'Le réseau et Sylindra',
      contenu: 'Elle a entendu parler de Sylindra (37) qui travaille sur un fragment de réseau racinaire actif. Ce fragment est dans une zone que le réseau qu\'elle perçoit montre comme un nœud important — une jonction entre plusieurs lignes. Si Sylindra comprend ce qu\'elle perçoit, c\'est la première conversation pertinente qu\'elle aura depuis des décennies.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaesylvae_reseau_sylindra',
      titre: 'Le nœud que Sylindra étudie',
      description: 'Le fragment de réseau racinaire actif que Sylindra étudie est dans une zone que le réseau longue distance montre comme un nœud — une jonction entre plusieurs lignes régionales. Si Sylindra comprend ce que ce fragment signifie dans le contexte du réseau global, la connaissance de Kaesylvae deviendrait utile. C\'est la première fois en 40 ans qu\'elle voit une opportunité de transmettre quelque chose de complet.',
      personnages_impliques: [37, 33],
      declencheur: 'Nouvelles de Sylindra travaillant sur un fragment actif',
      consequence: 'Opportunité de transmission de connaissance si le contact est établi',
    },
    {
      id: 'kaesylvae_silence_zones',
      titre: 'Les zones silencieuses',
      description: 'Après chaque destruction forestière, des zones du réseau deviennent silencieuses — les arbres morts coupent les connexions. Ces zones silencieuses ont des patterns. Elle les a cartographiés dans sa mémoire. Ces patterns indiquent où le réseau est le plus vulnérable et où il est le plus resilient.',
      personnages_impliques: [],
      declencheur: 'Observation sur 200 ans du réseau longue distance',
      consequence: 'Carte mémorielle des vulnérabilités et résiliences du réseau — non transmise',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Mémoire vivante du réseau longue distance. Elle perçoit quelque chose que les autres ne perçoivent plus. La question est si elle trouvera quelqu\'un à qui le transmettre complètement.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'allié', note: 'Venu la voir il y a 40 ans. A pris des notes. N\'a pas entièrement compris. Premier contact sérieux.' },
    { id: 37, nom: 'Sylindra', type: 'contact_nécessaire', note: 'Travaille sur un fragment du réseau. Première personne depuis 40 ans qui pourrait entendre ce qu\'elle dit.' },
  ],

  combat: {
    sorts: [
      'Connexion réseau (Plante) — activation d\'une connexion entre des arbres distants — transmission d\'information ou de perturbation via le réseau',
      'Perception fée étendue (Fée) — lecture de l\'état du réseau végétal dans une large zone — information de terrain à distance',
      'Appel de forêt (Plante) — mobilisation de la végétation dans une zone via le réseau longue distance — réponse différée selon la distance',
    ],
  },

  image_prompts: [
    {
      id: 'kaesylvae_ecoute',
      description: 'Kaesylvae debout contre un arbre ancien, les mains posées sur l\'écorce, les yeux mi-clos. Elle est en train d\'écouter quelque chose qui vient de loin. Son âge — 220 ans — se lit dans la façon dont elle est absolument immobile.',
      style: 'réaliste sylvan ancien, lumière de forêt profonde, immobilité contemplative, âge comme présence',
    },
  ],

  lore_long: `Kaesylvae a 220 ans. Elle perçoit le réseau longue distance que les arbres forment entre les régions.

Ce n'est pas une métaphore. À 50 ans, elle entendait des connexions entre des arbres séparés par des centaines de kilomètres. Elle avait supposé que tous les Sylvans les entendaient. À 80 ans, elle avait réalisé que non.

Elle s'est exilée il y a 30 ans parce que les deux factions voulaient utiliser sa connaissance pour leurs objectifs opposés. Elle n'appartient à aucune des deux.

Thalorn est venu il y a 40 ans. Il avait pris des notes. Il n'avait pas entièrement compris.

Elle a entendu parler de Sylindra qui travaille sur un fragment de réseau racinaire actif. Ce fragment est dans une zone que le réseau longue distance montre comme un nœud — une jonction entre plusieurs lignes régionales. Si Sylindra comprend ce qu'elle perçoit, c'est la première conversation pertinente qu'elle aura depuis des décennies.

Ses zones silencieuses — les parties du réseau coupées par les destructions forestières — ont des patterns. Elle les porte dans sa mémoire depuis 200 ans. Personne ne lui a posé la question dans les bons termes.`,
};

export default kaesylvae;
