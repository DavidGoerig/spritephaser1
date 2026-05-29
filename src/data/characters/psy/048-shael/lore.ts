import type { PersonnageLoreComplet } from '../../../lore-types';

const shael: PersonnageLoreComplet = {
  id: 48,
  nom: 'Shael',
  element: 'Psy',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Umbrien de 38 ans — une présence calibrée. Il n\'est pas le plus grand ni le plus imposant dans une pièce. Il est celui dont on se souvient. Une qualité physique qu\'il a travaillée plutôt qu\'héritée : il sait comment occuper un espace pour en contrôler la perception.',
    peau: 'Gris moyen Umbrien avec une luminescence violette aux tempes quand il utilise son élément Psy activement. En repos, cette luminescence est invisible. Il sait la contrôler et choisit de la garder éteinte dans les marchés nocturnes.',
    yeux: 'Violets avec une qualité d\'écoute — ses yeux regardent les gens d\'une façon qui leur donne l\'impression d\'être entendus. Cette qualité est naturelle et cultivée à la fois. Elle lui ouvre des portes.',
    vetements: 'Tenue des marchés de Vel\'Nox — ni riche, ni pauvre. Le bon niveau de neutralité pour passer dans tous les secteurs. Il change de tenue selon le secteur des Trois Couches dans lequel il travaille.',
    signes_particuliers: 'Il paie toujours en avance — jamais de dette, jamais de retard. Dans les marchés nocturnes de Vel\'Nox, cette régularité lui vaut une réputation de fiabilité. Il utilise cette réputation.',
  },

  psychologie: {
    dominante: 'Acheteur de données de l\'ombre qui opère sous couverture pour la Convergence — il achète des informations sur des Élus cachés à Vel\'Nox pour les identifier et potentiellement les approcher. Il croit qu\'il fait de la justice redistributive : identifier des Élus cachés pour les connecter à la doctrine de la Convergence et leur offrir un choix. Il se trompe sur la nature de ses commanditaires.',
    mecanisme_de_defense: 'La doctrine comme justification. Il croit sincèrement que la redistribution de la puissance élémentaire est juste. Cette conviction lui permet de faire des choses qu\'il ne ferait pas s\'il acceptait d\'examiner qui utilise réellement les données qu\'il collecte.',
    contradiction_interne: 'Il pense acheter des données pour offrir des choix. En réalité, les données qu\'il collecte servent à identifier des cibles potentielles pour des opérations dont il n\'est pas informé. Il ne sait pas — et ne cherche pas à savoir — ce que la Convergence fait avec ses données après.',
    rapport_aux_autres: 'Nyrreth (47) a refusé sa proposition il y a 2 mois. C\'est la première fois que quelqu\'un refuse dans ce contexte. Ça l\'intrigue. Il ne sait pas encore ce que Nyrreth cherche dans les archives censurées, mais il cherche à le trouver. Tharyn (50) est un marchand des marchés nocturnes qui sait beaucoup sur les nouvelles marchandises qui circulent — Shael achète régulièrement des informations à Tharyn sans lui dire l\'usage qu\'il en fait. Vethis (46) surveille les flux du réseau — Shael sait que Vethis sent quelque chose qui a changé. Il surveille Vethis sans que Vethis le sache.',
    vision_du_monde: 'La puissance élémentaire est distribuée injustement. Ceux qui la possèdent ne l\'ont pas méritée — ils l\'ont héritée ou reçue par accident de naissance. La Convergence redistribue. Son travail rend la redistribution possible. Il ne remet pas en question ce que "redistribuer" veut dire en pratique.',
  },

  histoire: {
    enfance: {
      titre: 'L\'injustice de l\'élément',
      contenu: 'À 12 ans, son frère avait été recruté par l\'Empire parce qu\'il avait un élément Stellaire. Lui avait un élément Psy. Son frère avait eu accès à des ressources, une formation, une position. Lui avait eu des restrictions et une surveillance accrue. À 12 ans, il avait compris que l\'élément n\'était pas un mérite — c\'était une loterie. Il avait commencé à trouver ça injuste.',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'À 22 ans, un recruteur de la Convergence l\'avait approché avec une doctrine qui correspondait exactement à ce qu\'il pensait depuis 10 ans. Il avait rejoint sans hésiter. On lui avait confié un rôle de collecte d\'informations à Vel\'Nox — identifier des Élus cachés, établir des contacts, faciliter des rencontres. Il avait trouvé ça légitime.',
    },
    premier_conflit: {
      titre: 'Les données qui disparaissent',
      contenu: 'À 30 ans, il avait commencé à remarquer que certaines des personnes dont il avait collecté des données ne réapparaissaient plus dans les marchés nocturnes de Vel\'Nox. Il avait posé la question à son contact à la Convergence. On lui avait répondu que ces personnes avaient choisi de rejoindre des communautés Convergence plus fermées. Il avait accepté cette réponse.',
    },
    revelation: {
      titre: 'Nyrreth',
      contenu: 'Il y a 2 mois, Nyrreth (47) avait refusé sa proposition sans explication. Ce refus ne ressemblait pas à la méfiance habituelle des habitants de Vel\'Nox — il ressemblait à quelqu\'un qui savait exactement ce qu\'il faisait et pourquoi c\'était dangereux. Cette lecture l\'avait troublé. Il cherche maintenant à comprendre ce que Nyrreth sait qu\'il ne sait pas.',
    },
    etat_actuel: {
      titre: 'Ce qu\'il commence à voir',
      contenu: 'Tharyn (50) lui a vendu une information il y a 3 semaines : de nouvelles marchandises circulent dans les marchés nocturnes que Tharyn ne reconnaît pas. Shael a transmis l\'information à son contact à la Convergence et n\'a pas eu de réponse. C\'est la première fois depuis 16 ans que son contact ne répond pas. Il commence à se poser des questions qu\'il avait évitées jusque-là.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shael_nyrreth',
      titre: 'Le refus incompréhensible',
      description: 'Nyrreth (47) a refusé la proposition de Shael. Shael cherche à comprendre pourquoi. Si Shael comprend ce que Nyrreth cherche dans les archives censurées, il a deux options : vendre l\'information sur Nyrreth à la Convergence, ou commencer à se demander pourquoi quelqu\'un se cacherait de lui spécifiquement.',
      personnages_impliques: [47, 50],
      declencheur: 'Shael trouvant ce que Nyrreth cherche dans les archives censurées',
      consequence: 'Soit Shael devient une menace directe pour Nyrreth, soit il commence à questionner ce qu\'il fait',
    },
    {
      id: 'shael_silence',
      titre: 'Le silence de la Convergence',
      description: 'Son contact à la Convergence n\'a pas répondu depuis 3 semaines. C\'est la première fois. Les nouvelles marchandises que Tharyn (50) a mentionnées pourraient être liées à ce silence — si la Convergence opère directement à Vel\'Nox sans passer par Shael, c\'est qu\'elle ne lui fait plus confiance ou qu\'elle n\'a plus besoin de lui.',
      personnages_impliques: [50, 46],
      declencheur: 'Shael comprenant pourquoi son contact ne répond plus',
      consequence: 'Shael découvrant ce que ses données ont réellement servi à faire — et quel rôle il a joué dans quelque chose qu\'il n\'approuverait pas',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Agent de la Convergence qui achète des données sur des Élus cachés à Vel\'Nox. Croit faire de la justice redistributive. Se trompe sur la nature de ses commanditaires. Nyrreth (47) a refusé sa proposition — premier refus en 16 ans. Son contact à la Convergence ne répond plus depuis 3 semaines.',

  relations: [
    { id: 47, nom: 'Nyrreth', type: 'contact', note: 'A refusé sa proposition. Shael cherche à comprendre pourquoi. Potentiellement dangereux pour Nyrreth.' },
    { id: 50, nom: 'Tharyn', type: 'allié', note: 'Source d\'informations sur les marchés nocturnes. Lui vend régulièrement des données.' },
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Surveille Vethis sans qu\'il le sache. Vethis sent que quelque chose a changé dans les flux.' },
  ],

  combat: {
    sorts: [
      'Lecture de surface (Psy) — accès aux pensées superficielles d\'une cible — informations immédiates sur les intentions',
      'Brouillage d\'intention (Psy) — masquage de ses propres pensées — protection contre la lecture Psy adverse',
      'Persuasion émotionnelle (Psy) — amplification d\'une émotion présente chez la cible — orientation de décision',
    ],
  },

  image_prompts: [
    {
      id: 'shael_marche',
      description: 'Shael dans un marché nocturne de Vel\'Nox — un Umbrien de 38 ans debout dans une conversation avec un vendeur, de l\'argent dans une main et un réceptacle de données dans l\'autre. Son expression est d\'attention genuïne. Il écoute vraiment. Ce qu\'il fait avec ce qu\'il entend est ailleurs.',
      style: 'réaliste Umbrien Convergence, marché nocturne Vel\'Nox, transaction de données, écoute calculée, conviction sincère, double nature',
    },
  ],

  lore_long: `Shael achète des données sur des Élus cachés à Vel'Nox pour la Convergence depuis 16 ans. Il croit sincèrement qu'il fait de la justice redistributive. Il ne sait pas ce que la Convergence fait avec ses données après.

Nyrreth (47) a refusé sa proposition il y a 2 mois. Premier refus en 16 ans. Shael cherche à comprendre pourquoi.

Son contact à la Convergence ne répond plus depuis 3 semaines. Les nouvelles marchandises que Tharyn (50) a mentionnées sont peut-être liées à ce silence.`,
};

export default shael;
