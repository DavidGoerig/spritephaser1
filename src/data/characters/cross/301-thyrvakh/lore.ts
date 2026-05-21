import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvakh: PersonnageLoreComplet = {
  id: 301,
  nom: 'Thyrvakh',
  element: 'Roche',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Grand pour un Chthonien, avec une posture qui occupe de la place consciemment — quelqu\'un qui est habitué à évaluer les espaces avant d\'y travailler.',
    peau: 'Gris foncé Chthonien avec des reflets ocre aux épaules — la couche de sol stabilisé qu\'il travaille lui a laissé des marques permanentes dans la peau supérieure.',
    yeux: 'Gris-brun, habituellement en train d\'évaluer les angles et les contraintes d\'une structure.',
    vetements: 'Tenue de travail de mineur-architecte avec des outils de précision pour les deux disciplines — des sondes de roche et des stabilisateurs de couche. Il n\'en porte jamais qu\'un seul ensemble.',
    signes_particuliers: 'Il construit des maquettes de joints roche/sol avec les matériaux qu\'il a sous la main — des cailloux, des poignées de terre — pendant les réunions. Pas pour expliquer. Pour réfléchir.',
  },

  psychologie: {
    dominante: 'Hybridation structurelle comme réponse aux limites des solutions pures. La roche seule est rigide. Le sol seul est instable. La combinaison est ce que les deux ne peuvent pas être séparément.',
    mecanisme_de_defense: 'La démonstration pratique. Si quelqu\'un conteste sa méthode, il construit. Les résultats parlent.',
    contradiction_interne: 'La Confédération le mandate pour construire des structures qui résistent. Il sait que certaines de ces structures sont construites sur des zones géologiquement compromises depuis la Fosse Interdite. Construire mieux sur un sol qui se dégrade est une solution temporaire qu\'il ne dit pas explicitement être temporaire.',
    rapport_aux_autres: 'Vorath (134) lui confie les projets que la Confédération considère prioritaires. Draven II (40) lui a demandé une expertise sur des tunnels dans une zone qu\'il n\'aurait pas dû connaître.',
    vision_du_monde: 'Ormn-Dur s\'est construite sur de la roche. La roche a des limites. Le sol peut compenser certaines de ces limites si on combine correctement. C\'est une ville qui doit apprendre à construire autrement.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage double',
      contenu: 'Né dans une famille de mineurs, il avait appris le travail de la roche avant de parler. À 15 ans, il avait commencé un second apprentissage — l\'architecture de sol, avec un maître qui avait des méthodes que personne d\'autre dans Ormn-Dur ne pratiquait. La combinaison était sa propre idée.',
    },
    arrivee: {
      titre: 'Le premier tunnel mixte',
      contenu: 'À 32 ans, il avait proposé à la Confédération un tunnel utilisant des joints roche/sol stabilisé pour traverser une zone géologiquement mouvante que les architectes standard refusaient d\'aborder. La Confédération avait accepté faute d\'alternative. Le tunnel tenait 8 ans plus tard.',
    },
    premier_conflit: {
      titre: 'La demande de Draven II',
      contenu: 'Draven II (40) l\'avait contacté pour une expertise sur des tunnels dans une zone au nord de la Fosse — une zone que la Technocratie classifit comme inaccessible. Draven II connaissait l\'accès. Thyrvakh avait fourni l\'expertise sans poser de questions sur comment Draven II avait accès à cette zone.',
    },
    revelation: {
      titre: 'Les fondations qui bougent',
      contenu: 'Sur 3 projets récents dans la zone est d\'Ormn-Dur, ses joints roche/sol avaient montré des micro-déformations que ses calculs n\'auraient pas dû produire. Il avait revu ses données. Le sol sous cette zone se compressait lentement — une pression venant du bas. Probablement la Fosse. Il avait fait les calculs de compensation. Il n\'avait pas encore décidé à qui les transmettre.',
    },
    etat_actuel: {
      titre: 'Les trois projets en cours',
      contenu: 'Trois projets de tunnels mixtes simultanément — un pour la Confédération, un pour Vorath (134) personnellement, un dont le commanditaire lui a demandé de ne pas mentionner le nom. Il travaille sur les trois. Il sait que le troisième est probablement pour les Dissidentes. Il n\'a pas posé la question.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvakh_sol_fosse',
      titre: 'La compression du bas',
      description: 'Ses données récentes montrent une compression du sol dans la zone est venant d\'en bas. Les calculs indiquent une pression compatible avec l\'expansion de la zone fongique de la Fosse Interdite. Si cette compression continue, ses joints roche/sol dans la zone est ne tiendront pas leurs projections. Il n\'a pas encore formalisé ce constat.',
      personnages_impliques: [134, 40],
      declencheur: 'Micro-déformations sur 3 projets récents',
      consequence: 'Infrastructure est d\'Ormn-Dur potentiellement sur un horizon plus court que prévu',
    },
    {
      id: 'thyrvakh_troisieme_projet',
      titre: 'Le commanditaire sans nom',
      description: 'Un des trois projets en cours a un commanditaire qui n\'a pas donné son nom. Le brief était précis — un tunnel de passage rapide dans une zone résidentielle peu surveillée. Thyrvakh a construit selon les spécifications sans poser de questions. Il sait que c\'est probablement pour les Dissidentes. Son travail ne dépend pas de la politique du commanditaire.',
      personnages_impliques: [],
      declencheur: 'Commande anonyme via intermédiaire',
      consequence: 'Infrastructure de passage existante dans une zone peu surveillée',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Constructeur des structures qui maintiennent Ormn-Dur habitée. Sa méthode hybride est la seule qui fonctionne sur certains sols. Ses données commencent à montrer les limites de ce qu\'il peut compenser.',

  relations: [
    { id: 134, nom: 'Vorath', type: 'allié', note: 'Mandataire principal. Confie les projets prioritaires. Confiance établie sur 12 ans.' },
    { id: 40, nom: 'Draven II', type: 'allié', note: 'Demandes d\'expertise dans des zones que Draven II connaît mieux qu\'il ne devrait. Thyrvakh répond sans poser de questions.' },
  ],

  combat: {
    sorts: [
      'Joint de roche (Roche) — création d\'un ancrage structural immédiat — barrage ou soutien d\'urgence',
      'Compression du sol (Sol) — densification du terrain sous une zone — fondation improvisée ou obstacle',
      'Fracture contrôlée (Roche) — rupture d\'une roche selon des lignes de faiblesse calculées — démolition de précision',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvakh_maquette',
      description: 'Thyrvakh assis dans un tunnel en construction, en train de construire une maquette de joint roche/sol avec des matériaux trouvés sur place. Autour de lui, des plans partiellement déroulés. Il ne regarde pas les plans — il construit avec ses mains pour comprendre ce que les plans ne montrent pas.',
      style: 'réaliste chthonien pratique, lumière souterraine de chantier, maquette de construction en cours, concentration manuelle',
    },
  ],

  lore_long: `Thyrvakh combine roche et sol stabilisé dans des structures que les architectes purs ne savent pas construire.

La Confédération lui confie les projets que personne d'autre n'accepte. Il construit. Les tunnels tiennent.

Draven II (40) lui a demandé une expertise sur des zones que la Technocratie classe comme inaccessibles. Draven II avait l'accès. Thyrvakh a répondu sur la structure. Il n'a pas posé la question sur comment.

Ses données récentes montrent une compression du sol venant du bas dans la zone est. Compatible avec une expansion de la Fosse Interdite. Si c'est ça, ses joints ne tiendront pas leurs projections. Il n'a pas encore formalisé ce constat.

Un de ses projets en cours a un commanditaire sans nom. Il a construit selon les spécifications. Son travail ne dépend pas de la politique du commanditaire.`,
};

export default thyrvakh;
