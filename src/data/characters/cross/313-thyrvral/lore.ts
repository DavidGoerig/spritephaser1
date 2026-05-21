import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvral: PersonnageLoreComplet = {
  id: 313,
  nom: 'Thyrvral',
  element: 'Roche',
  element2: 'Acier',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Grand et anguleux, avec des articulations qui semblent plus rigides que la moyenne — une adaptation à travailler dans des espaces où les mouvements fluides sont dangereux.',
    peau: 'Gris-métal Chthonien avec des reflets argentés aux jointures — l\'Acier secondaire qui s\'exprime dans les zones de stress mécanique répété. Les reflets sont plus prononcés aux mains.',
    yeux: 'Gris acier, avec une précision d\'évaluation des contraintes structurelles. Il voit les lignes de force dans les structures.',
    vetements: 'Tenue d\'ingénieur Technocratie avec des renforts métalliques aux genoux et aux coudes — il travaille souvent en contact direct avec les parois des tunnels. Les renforts sont fonctionnels, pas décoratifs.',
    signes_particuliers: 'Il frappe les structures avec ses articulations pour écouter le son — roche creuse, acier sous tension, joint mal assemblé. Chaque surface a un son qu\'il reconnaît.',
  },

  psychologie: {
    dominante: 'Résolution des problèmes structuraux que les méthodes séparées ne peuvent pas résoudre. La roche seule fissure sous la pression profonde. L\'acier seul corode dans les environnements fongiques. La combinaison tient.',
    mecanisme_de_defense: 'Le test avant validation. Il ne signe pas une structure sans l\'avoir testée à 150% de la charge maximale prévue.',
    contradiction_interne: 'Ses structures mixtes roche/acier pour les tunnels profonds sont la solution technique optimale. Elles sont aussi ce que la Fosse Interdite a besoin pour s\'étendre. Il construit pour la Technocratie. Si la Technocratie décide d\'étendre l\'accès à la Fosse, ses structures facilitent ça.',
    rapport_aux_autres: 'Vorath (134) lui confie les projets de tunnels profonds critiques — ceux où une défaillance serait catastrophique. Thyss (42) lui commande parfois des structures pour des emplacements qu\'il ne lui précise pas entièrement.',
    vision_du_monde: 'Un tunnel qui tient est un tunnel utile. Un tunnel qui s\'effondre tue des gens. Sa responsabilité est que ses structures tiennent. Ce qu\'on met dedans ensuite n\'est pas sa responsabilité technique.',
  },

  histoire: {
    enfance: {
      titre: 'L\'ingénierie comme vocation',
      contenu: 'Fils d\'un ingénieur structural de la Technocratie. Formé dès l\'adolescence aux méthodes de construction souterraine standard. À 20 ans, il avait identifié les limites des méthodes standards pour les profondeurs extrêmes. À 25 ans, il avait développé ses premiers prototypes de joints roche/acier.',
    },
    arrivee: {
      titre: 'Le premier tunnel profond',
      contenu: 'À 30 ans, premier tunnel profond avec ses structures mixtes — une descente vers le niveau 7 d\'un secteur minier que les ingénieurs standards refusaient de couvrir. La structure avait tenu. La Technocratie lui avait donné accès aux projets que les autres ingénieurs ne pouvaient pas couvrir.',
    },
    premier_conflit: {
      titre: 'La commande de Thyss',
      contenu: 'À 38 ans, Thyss (42) lui avait commandé des structures pour une zone qu\'il lui avait décrite comme un secteur de maintenance avancée. Les dimensions et les spécifications correspondaient à un accès à la Fosse profonde — pas la zone de travail standard, mais les niveaux inférieurs. Il avait posé des questions sur la finalité. La réponse avait été suffisamment vague pour qu\'il continue. Il avait construit.',
    },
    revelation: {
      titre: 'Les structures qu\'il reconnaît',
      contenu: 'Sur un plan de la Fosse qu\'il avait eu accès pour un projet de maintenance, il avait reconnu des structures qui correspondaient à ses propres travaux des 3 dernières années — dans des zones qu\'il ne savait pas être dans la Fosse. Ses structures mixtes avaient servi à étendre l\'accès à des zones qu\'on lui avait décrites autrement.',
    },
    etat_actuel: {
      titre: 'La demande en cours',
      contenu: 'Une nouvelle commande de Thyss (42) est sur son bureau — des structures pour un emplacement décrit comme un nouveau secteur de gestion de la pression fongique. Il reconnaît les spécifications. C\'est un accès aux niveaux les plus profonds de la Fosse. Il n\'a pas encore répondu à la commande.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvral_structures_fosse',
      titre: 'Les structures reconnues',
      description: 'Il a vu ses propres structures dans des zones de la Fosse qu\'on lui avait décrites autrement lors des commandes. Ses tunnels mixtes ont étendu l\'accès à des parties de la Fosse qu\'il n\'avait pas l\'intention de rendre accessibles. La commande en cours de Thyss (42) suit le même pattern.',
      personnages_impliques: [42, 134],
      declencheur: 'Reconnaissance de ses propres structures dans un plan de la Fosse',
      consequence: 'Connaissance que son travail étend l\'accès à la Fosse — commande en cours non encore acceptée',
    },
    {
      id: 'thyrvral_commande_en_attente',
      titre: 'La commande non répondue',
      description: 'La commande de Thyss pour les niveaux profonds de la Fosse est sur son bureau depuis 5 jours. Il n\'a pas encore répondu. Pour la première fois depuis 15 ans de travail pour la Technocratie, il a une réserve sur une commande. Il ne sait pas encore ce qu\'il va faire de cette réserve.',
      personnages_impliques: [42],
      declencheur: 'Accumulation des reconnaissances de ses structures dans des zones non déclarées',
      consequence: 'Première pause dans l\'exécution automatique des commandes — décision en suspens',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Ingénieur qui a involontairement étendu l\'accès à la Fosse en construisant pour une Technocratie qui ne lui précisait pas les usages. La commande en cours est la première où il a une réserve.',

  relations: [
    { id: 134, nom: 'Vorath', type: 'allié', note: 'Mandataire pour les tunnels profonds critiques. Relation de confiance technique longue durée.' },
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Commanditaire de structures pour des emplacements partiellement déclarés. Commande en cours non encore acceptée.' },
  ],

  combat: {
    sorts: [
      'Tunnel instantané (Roche) — percement d\'une voie dans la roche — passage ou évasion',
      'Armure d\'acier (Acier) — solidification de l\'acier environnant autour de lui — protection rapprochée',
      'Effritement contrôlé (Roche) — affaiblissement structurel d\'une zone de roche — effondrement de précision',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvral_test',
      description: 'Thyrvral frappant une paroi de tunnel avec ses articulations, écoutant. La paroi est un joint roche/acier — les deux matériaux visibles à la jonction. Il a une expression de concentration. Il évalue ce qu\'il entend, pas ce qu\'il voit.',
      style: 'réaliste ingénieur technique, joint roche/acier visible, geste de test acoustique, concentration professionnelle',
    },
  ],

  lore_long: `Thyrvral construit des tunnels profonds avec des joints roche/acier — la seule méthode qui tient aux niveaux les plus difficiles d'Ormn-Dur.

Thyss (42) lui commande des structures pour des emplacements qu'il décrit partiellement. Sur un plan de la Fosse vu lors d'un projet de maintenance, il a reconnu ses propres structures dans des zones qu'on lui avait décrites autrement.

Ses tunnels ont étendu l'accès à des parties de la Fosse qu'il ne savait pas être sa destination.

Une nouvelle commande de Thyss est sur son bureau — des structures pour les niveaux profonds de la Fosse. Il reconnaît les spécifications. Il n'a pas encore répondu. C'est la première fois depuis 15 ans.`,
};

export default thyrvral;
