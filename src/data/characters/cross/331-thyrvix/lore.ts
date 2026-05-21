import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvix: PersonnageLoreComplet = {
  id: 331,
  nom: 'Thyrvix',
  element: 'Insecte',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Compact, avec des réflexes rapides qui contrastent avec une façon de se tenir généralement calme. Il peut passer de l\'immobilité totale au mouvement en une fraction de seconde.',
    peau: 'Gris moyen Umbrien. Quelques égratignures fines aux doigts — manipulation régulière d\'essaims qui ne sont pas toujours coopératifs.',
    yeux: 'Brun foncé avec un angle d\'observation large. Il a l\'habitude de voir des surfaces entières d\'un seul coup d\'œil — une adaptation à la surveillance d\'essaims.',
    vetements: 'Tenue fonctionnelle avec des zones imperméables aux sécrétions d\'insectes. Des compartiments pour les capsules de signalement — petits conteneurs qui permettent de rappeler un essaim déployé.',
    signes_particuliers: 'Il écoute parfois quelque chose que les autres n\'entendent pas — les signaux de vibration de ses essaims actifs. Il peut savoir où en est un essaim déployé depuis 200 mètres.',
  },

  psychologie: {
    dominante: 'Observation via essaims d\'insectes placés dans des espaces ciblés. Les insectes nocturnes Umbriens peuvent rester immobiles dans un espace pendant des jours. Ils perçoivent les changements de chaleur, de vibrations, de lumière. Ils rapportent via signaux chimiques.',
    mecanisme_de_defense: 'La distance entre l\'observateur et l\'observé. Ses essaims voient. Il interprète ce que les essaims rapportent. Il n\'est jamais dans l\'espace où la surveillance se passe. Cette distance lui permet de ne pas traiter ce qu\'il fait comme une intrusion.',
    contradiction_interne: 'Les Élus qu\'il surveille ne savent pas qu\'ils sont surveillés. Certains d\'entre eux ont été signalés à la Convergence via ses observations. Il ne sait pas ce qui leur est arrivé après. Il n\'a pas demandé à Shael (48).',
    rapport_aux_autres: 'Tharyn (50) lui achète des informations — des observations collectées qui n\'ont pas valeur de rapport pour la Convergence mais qui ont valeur de marché pour un réseau commercial. Shael (48) reçoit les rapports formels et décide de leur usage.',
    vision_du_monde: 'Les insectes observent sans juger. Il observé sans juger. Ce que les Convergence fait des observations n\'est pas sa responsabilité.',
  },

  histoire: {
    enfance: {
      titre: 'L\'essaim du couloir',
      contenu: 'À 12 ans, il avait observé un essaim de noctèmes — insectes Umbriens de surveillance passive — qui occupait un couloir de son quartier. Il avait compris qu\'ils ne bougeaient pas au hasard — ils réagissaient à chaque passage dans le couloir. Il avait passé 2 semaines à apprendre à lire leurs réactions.',
    },
    arrivee: {
      titre: 'Le recrutement par Shael',
      contenu: 'À 22 ans, Shael (48) l\'avait approché avec une proposition simple : la Convergence avait besoin d\'observer des espaces sans envoyer d\'agents physiques. Ses essaims pouvaient faire ça. L\'accord était direct — il plaçait les essaims aux endroits désignés, récupérait leurs données, transmettait à Shael.',
    },
    premier_conflit: {
      titre: 'Le sujet reconnaissable',
      contenu: 'À 27 ans, il avait observé un Élu via essaim — un homme qu\'il connaissait de vue dans son quartier. Les observations avaient été transmises à Shael. Deux semaines plus tard, l\'homme avait disparu de son quartier. Thyrvix avait continué ses opérations. Il n\'avait pas posé de question.',
    },
    revelation: {
      titre: 'Les ventes parallèles',
      contenu: 'Tharyn (50) lui avait proposé d\'acheter des observations qui n\'entraient pas dans ses rapports Convergence — des informations sur des mouvements commerciaux, des présences dans des zones neutres. Ces informations avaient une valeur marchande. Il avait commencé à les vendre en parallèle de ses rapports officiels.',
    },
    etat_actuel: {
      titre: 'Les essaims actifs',
      contenu: 'Il a 8 essaims actifs en ce moment — 6 sur des cibles désignées par Shael (48), 2 sur des zones de valeur commerciale pour Tharyn (50). La limite entre les deux catégories est devenue moins nette. Il lui arrive d\'observer une cible Convergence qui a aussi une valeur commerciale.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvix_double_marche',
      titre: 'Les deux marchés',
      description: 'Thyrvix vend des observations à la Convergence via Shael (48) et des informations commerciales à Tharyn (50). Ces deux flux se chevauchent parfois — une cible Convergence peut avoir une valeur commerciale. Il n\'a pas de règle pour gérer les chevauchements. La ligne entre rapport officiel et vente parallèle dépend de son jugement du moment.',
      personnages_impliques: [48, 50],
      declencheur: 'Proposition de Tharyn d\'acheter des observations parallèles',
      consequence: 'Double flux d\'informations — tension potentielle si les intérêts Convergence et commerciaux divergent sur la même cible',
    },
    {
      id: 'thyrvix_disparitions',
      titre: 'Les suites inconnues',
      description: 'Plusieurs Élus observés par ses essaims ont ensuite disparu de leur contexte visible. Il ne sait pas ce qui leur est arrivé. Il n\'a pas demandé à Shael (48). La question existe. Il ne l\'a pas posée.',
      personnages_impliques: [48],
      declencheur: 'Disparition d\'un Élu reconnaissable après observation',
      consequence: 'Non-question maintenue — la réponse serait une information que Shael ne lui donnerait peut-être pas',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Observateur Convergence via essaims d\'insectes dans Vel\'Nox. Ses observations alimentent les rapports Shael et, en parallèle, le réseau commercial de Tharyn.',

  relations: [
    { id: 50, nom: 'Tharyn', type: 'client', note: 'Achète des observations commerciales parallèles. Première source de revenus non-Convergence.' },
    { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit les rapports formels. Ne donne pas les suites. Thyrvix ne demande pas.' },
  ],

  combat: {
    sorts: [
      'Essaim observateur (Insecte) — déploiement d\'un essaim de noctèmes sur une zone — surveillance passive prolongée',
      'Nuage de nuit (Ténèbres + Insecte) — fusion d\'un essaim avec une zone d\'ombre — présence indétectable',
      'Signal de rappel (Insecte) — rappel immédiat de tous les essaims déployés — extraction d\'urgence des données',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvix_essaim',
      description: 'Thyrvix dans un espace sombre de Vel\'Nox, en train de placer une capsule d\'essaim dans un angle de mur. L\'essaim — des dizaines de petits insectes sombres — se disperse silencieusement dans l\'espace. Il recule. Il observe. Il est satisfait de la couverture.',
      style: 'réaliste umbrien, insectes nocturnes se dispersant, pose discrète, Vel\'Nox intérieur',
    },
  ],

  lore_long: `Thyrvix place des essaims d'insectes nocturnes dans des espaces désignés pour surveiller les Élus de Vel'Nox. Les essaims restent immobiles pendant des jours et rapportent via signaux chimiques.

Shael (48) reçoit les rapports. Thyrvix ne sait pas ce qui arrive aux Élus après.

Tharyn (50) lui achète des observations à valeur commerciale — informations sur des mouvements, des présences. Ces deux flux se chevauchent parfois.

Il a 8 essaims actifs. 6 pour la Convergence. 2 pour Tharyn. La ligne entre les deux catégories dépend de son jugement du moment.

Il n'a pas demandé à Shael ce qui arrive aux Élus. La question existe. Il ne l'a pas posée.`,
};

export default thyrvix;
