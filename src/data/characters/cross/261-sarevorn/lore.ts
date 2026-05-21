import type { PersonnageLoreComplet } from '../../../lore-types';

const sarevorn: PersonnageLoreComplet = {
  id: 261,
  nom: 'Sarevorn',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyen, endurant — corps de quelqu\'un qui a passé des années à se déplacer sur des terrains difficiles.',
    peau: 'Mate, hâlée inégalement — les parties exposées sont plus foncées, traces d\'années de routes et de caches.',
    yeux: 'Brun foncé, calmes. Il a le regard de quelqu\'un qui a appris à ne pas exprimer ce qu\'il sait dans des endroits où ça pourrait coûter quelque chose.',
    vetements: 'Tenue de voyageur neutre, sans faction. Plusieurs couches, pratique. Il change d\'apparence régulièrement par habitude même quand ce n\'est plus nécessaire.',
    signes_particuliers: 'A une façon de s\'orienter dans un espace inconnu en quelques secondes — réflexe développé pendant les 2 années de cache. Il repère toujours les sorties en premier.',
  },

  psychologie: {
    dominante: 'Loyauté durée. Il a gardé un secret pendant 2 ans, a vu Sarath mourir, ne sait pas où est l\'Avatar maintenant — et continues de considérer cette période comme la plus significative de sa vie.',
    mecanisme_de_defense: 'Le présent suffisant. Tant qu\'il ne sait pas où est l\'Avatar, il ne peut pas faire de geste vers lui. Cette ignorance est une forme de protection — pour l\'Avatar et pour lui.',
    contradiction_interne: 'Il a participé à quelque chose d\'historique et ne peut le dire à personne. La signification de ce qu\'il a fait est réelle mais inexprimable. Il vit avec une grandeur silencieuse.',
    rapport_aux_autres: 'Ses contacts Dissidentes se réduisent à ce qui est nécessaire. Il maintient le contact avec Brasia (1) — réseau de confiance ancien. Ne parle pas de ce qu\'il a fait pendant les 2 ans.',
    vision_du_monde: 'Certaines choses méritent d\'être protégées sans garantie de résultat. Il a fait ça. Il ne sait pas si ça a servi. Il referait.',
  },

  histoire: {
    enfance: {
      titre: 'L\'isthme et le passage',
      contenu: 'Né à l\'Isthme — la région de transit entre l\'Empire et les territoires libres. Sa famille tenait une auberge sur une route marchande. Depuis l\'enfance il avait une connaissance pratique des gens qui ne voulaient pas être vus et des routes qui permettaient ça.',
    },
    arrivee: {
      titre: 'Le recrutement Dissident',
      contenu: 'Rejoint les Dissidentes à 27 ans — naturellement, via le réseau de l\'auberge familiale. Il n\'avait pas une idéologie précise, il avait une compétence : des itinéraires sûrs, des maisons de confiance, un sens de la logistique clandestine. Le réseau avait eu besoin exactement de ça.',
    },
    premier_conflit: {
      titre: 'Sarath et la proposition',
      contenu: 'À 39 ans, Sarath (61) lui avait fait une proposition sans détail — une cache longue durée pour "un sujet dont la sécurité était absolument prioritaire". Sarath n\'avait pas dit qui. Sarevorn avait dit oui parce qu\'il connaissait Sarath depuis 12 ans et que 12 ans de confiance suffisaient.',
    },
    revelation: {
      titre: 'Le Second Avatar',
      contenu: 'Il avait su au bout d\'une semaine. Pas parce qu\'on lui avait dit — parce qu\'il avait vu la façon dont l\'Empire cherchait, l\'intensité de la recherche, les ressources déployées. Il avait recalculé le risque à la hausse et avait continué quand même. Les deux ans qui avaient suivi étaient les deux ans les plus importants de sa vie.',
    },
    etat_actuel: {
      titre: 'La fin sans fin',
      contenu: 'Sarath est mort il y a un an. L\'Avatar est parti — Sarevorn ne sait pas où. Il n\'a pas cherché à savoir, parce que ne pas savoir est une protection. Il vit à l\'Isthme, travaille du côté logistique du réseau Dissident, et porte ce qu\'il a fait comme quelque chose qui ne nécessite pas de confirmation extérieure.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sarevorn_sarath_mort',
      titre: 'La mort de Sarath',
      description: 'Sarath est mort dans des circonstances que Sarevorn connaît partiellement — capture et détention, puis extraction manquée. Il n\'était pas là quand c\'est arrivé. Il n\'a appris que le résultat. Cette absence le pèse d\'une façon qu\'il ne nomme pas — pas de culpabilité précisément, mais quelque chose de proche du deuil non résolu.',
      personnages_impliques: [61],
      declencheur: 'Mort de Sarath pendant les opérations',
      consequence: 'Perte de son seul partenaire qui savait ce qu\'ils avaient fait ensemble',
    },
    {
      id: 'sarevorn_brasia_contact',
      titre: 'Le contact avec Brasia',
      description: 'Brasia (1) est un contact réseau — il lui transmet des informations logistiques, elle l\'intègre dans les circuits de redistribution des ressources. Elle ne sait pas ce qu\'il a fait pendant les 2 ans. Il ne lui a pas dit. C\'est un choix délibéré — moins de gens savent, plus l\'Avatar est sûr.',
      personnages_impliques: [1],
      declencheur: 'Appartenance commune au réseau Dissident',
      consequence: 'Relation de confiance fonctionnelle — complète sur l\'opérationnel, vide sur l\'essentiel',
    },
    {
      id: 'sarevorn_avatar_inconnu',
      titre: 'L\'endroit inconnu',
      description: 'Il sait que l\'Avatar existe. Il sait qu\'il est vivant — à la date de sa dernière information, il y a 8 mois. Il ne sait pas où il est maintenant. Cette ignorance est délibérée de son côté : il n\'a pas demandé à savoir. Un réseau où trop de gens savent où est l\'Avatar est un réseau vulnérable.',
      personnages_impliques: [59],
      declencheur: 'Transfert de l\'Avatar après la cache de 2 ans',
      consequence: 'Protection par ignorance — Sarevorn n\'est pas un vecteur de compromission',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Gardien du passé. Il est l\'une des rares personnes à savoir avec certitude que le Second Avatar existe et à l\'avoir côtoyé. Ce qu\'il porte n\'est pas une information — c\'est une histoire.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'L\'a caché pendant 2 ans. Ne sait pas où il est maintenant. Ne cherche pas à savoir.' },
    { id: 61, nom: 'Sarath', type: 'fantôme', note: 'Partenaire mort — seul autre à savoir ce qu\'ils ont fait ensemble.' },
    { id: 1, nom: 'Brasia', type: 'allié', note: 'Contact réseau de longue date — ne sait pas ce qu\'il a fait pendant les 2 ans.' },
  ],

  combat: {
    sorts: [
      'Frappe de terrain (Combat) — utilisation de l\'environnement immédiat comme avantage tactique',
      'Camouflage itinérant (Normal) — maîtrise de la discrétion en déplacement — réduction de la trace laissée',
      'Orientation tactique (Combat) — analyse instantanée des lignes de fuite dans un espace inconnu',
    ],
  },

  image_prompts: [
    {
      id: 'sarevorn_route',
      description: 'Sarevorn sur une route de l\'Isthme, seul, équipement de voyage neutre. Il marche avec la précision de quelqu\'un qui sait exactement où il va même quand la destination est ambiguë. Son regard ne traîne pas.',
      style: 'réaliste humain, lumière de route de passage, tons neutres et poussiéreux, Isthme de transition',
    },
  ],

  lore_long: `Sarevorn a caché le Second Avatar pendant 2 ans.

Il ne peut pas le dire. Il ne peut pas expliquer la texture de ces 2 ans — les 14 maisons différentes, les 9 fausses identités, la façon dont l'Avatar dormait toujours avec une main sur son sac comme si partir en 30 secondes était son état naturel. Il ne peut pas parler de ce qu'ils avaient discuté pendant les nuits de surveillance, de la façon dont l'Avatar posait des questions sur le monde ordinaire — comment les gens achetaient leur pain, comment les familles s'organisaient, les choses petites que sa nature lui avait rendues invisibles.

Sarath est mort. Sarevorn n'était pas là. Il a appris le résultat, pas le processus. Cette asymétrie lui pèse — il ne peut pas reconstruire les dernières heures de quelqu'un dont il n'a appris la fin que par l'absence.

Il ne sait pas où est l'Avatar maintenant. Cette ignorance est un choix. Un réseau Dissident où trop de gens savent où est la cible la plus recherchée de l'Empire est un réseau vulnérable. Il applique à lui-même la règle qu'il a apprise : ne sais que ce que tu as besoin de savoir.

Ce qu'il a besoin de savoir maintenant : les routes logistiques, les maisons sûres, les contacts actifs. Pas où est l'Avatar.

Ce qu'il sait sans en avoir besoin : que les 2 ans ont compté. Que l'Avatar était quelque chose que l'Empire cherchait à détruire et que lui avait choisi de protéger. Que Sarath avait fait confiance à 12 ans de connaissance mutuelle sans donner d'explication, et que c'était suffisant.

Il vit avec ça. Il n'a pas besoin que ça soit confirmé.`,
};

export default sarevorn;
