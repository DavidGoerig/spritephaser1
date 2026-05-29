import type { PersonnageLoreComplet } from '../../../lore-types';

const karm: PersonnageLoreComplet = {
  id: 41,
  nom: 'Karm',
  element: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 61 ans — un archiviste dont le corps dit les années passées dans des archives souterraines plutôt que dans les tunnels de la Fosse. Il est moins massif que les gardiens de zone, plus courbé, avec des mains de lecteur plutôt que de grimpeur.',
    peau: 'Gris pâle — moins foncé que la moyenne chthonienne, comme si les années passées loin de la lumière des tunnels inférieurs avaient affecté sa pigmentation. Ses mains ont des taches d\'encre permanentes.',
    yeux: 'Bruns clairs avec une qualité de catalogue — il regarde les choses comme s\'il les classifiait. Cette habitude rend les personnes à l\'aise avec lui : elles ont l\'impression qu\'il les traite avec la même rigueur qu\'un document.',
    vetements: 'Tenue d\'archiviste — sombre, pratique, avec des poches pour les lentilles et les lampes de lecture. Un tablier de protection pour les documents anciens qu\'il ne retire pas même en réunion.',
    signes_particuliers: 'Il ne conclut jamais une phrase par "je pense" ou "je crois" — il dit "les données indiquent" ou "les fragments concordent". C\'est une discipline. Depuis qu\'il a reconstitué les termes de l\'accord de Valyx, il a du mal à maintenir cette discipline.',
  },

  psychologie: {
    dominante: 'Archiviste souterrain qui a passé 28 ans à reconstituer les termes de l\'accord de Valyx (38) depuis des fragments de journaux. Ce qu\'il a trouvé le terrified. Il ne l\'a pas encore dit à quiconque — pas parce qu\'il veut garder le secret, mais parce qu\'il cherche encore comment formuler quelque chose qui n\'a pas de précédent dans les archives.',
    mecanisme_de_defense: 'La vérification comme retard. Avant de dire quoi que ce soit, il vérifie une dernière fois. Puis encore une fois. Il est conscient que cette vérification est un mécanisme de défense face à quelque chose qu\'il ne sait pas comment communiquer.',
    contradiction_interne: 'Il a trouvé quelque chose qui nécessite une action immédiate. Sa discipline d\'archiviste lui dit de ne pas agir avant que la documentation soit complète. Ces deux impératifs sont en conflit direct depuis 3 semaines.',
    rapport_aux_autres: 'Draven II (40) lui a donné accès aux archives privées de la famille — il a trouvé là la pièce manquante de la reconstitution. Il doit dire à Draven II ce qu\'il a trouvé. Il ne sait pas comment. Drevaya (39) est la personne qui a les observations directes sur la Fosse qui confirmeraient ou infirmeraient ce qu\'il a reconstitué. Il ne l\'a pas encore contactée. Thyss (42) est celui qui a décidé la réduction de contribution — si ce que Karm a trouvé est correct, cette réduction a des implications graves.',
    vision_du_monde: 'Les archives existent parce que ce qui n\'est pas documenté est perdu. Ce qu\'il a reconstitué prouve que Valyx savait des choses qu\'elle a choisi de ne pas documenter entièrement. C\'est la première fois qu\'il comprend pourquoi quelqu\'un ferait ça.',
  },

  histoire: {
    enfance: {
      titre: 'Les archives de Kar-Dum',
      contenu: 'À 18 ans, il avait rejoint les archives souterraines de Kar-Dum — des tunnels construits pour stocker des documents dans des conditions de température et d\'humidité stables. Il y avait trouvé des documents vieux de 80 ans qui n\'avaient jamais été indexés. Il avait passé sa première année à les indexer. C\'était le travail de toute une vie qui l\'attendait.',
    },
    arrivee: {
      titre: 'La découverte des journaux de Valyx',
      contenu: 'À 33 ans, lors d\'un inventaire de routine, il avait trouvé 7 fragments des journaux de Valyx (38) dans une caisse marquée "archives de routine". Il avait compris immédiatement que ce n\'était pas des archives de routine. Il avait commencé la reconstitution le soir même.',
    },
    premier_conflit: {
      titre: 'Les archives privées de Draven',
      contenu: 'À 55 ans, en demandant accès aux archives privées de la famille Draven pour compléter la reconstitution, il avait trouvé la pièce manquante — un document qui décrivait en termes précis ce que l\'accord de Valyx impliquait comme contribution de Kar-Dum, avec une note sur ce qui arriverait si la contribution était modifiée de façon significative. Il avait relu ce document 14 fois en 3 semaines. Il était toujours aussi terrifying.',
    },
    revelation: {
      titre: 'La nature de la contribution',
      contenu: 'Ce qu\'il a trouvé dans les archives de Draven : l\'accord de Valyx n\'était pas une contribution économique de Kar-Dum à la zone fongique. C\'était une contribution biologique — une extraction d\'Élus Poison à des intervalles précis, livrée à un niveau spécifique de la Fosse. La zone fongique ne prenait pas des ressources. Elle prenait des personnes. La "technocratie de contribution" de Kar-Dum est construite sur quelque chose que ses fondateurs ont choisi de ne pas rendre explicite.',
    },
    etat_actuel: {
      titre: 'La décision',
      contenu: 'Il a la documentation complète. Il sait ce que l\'accord implique réellement. Il sait que la réduction de contribution de Thyss (42) a probablement perturbé quelque chose dans ce mécanisme. Il sait que Drevaya (39) voit des micro-fractures qui correspondent à ce qu\'une perturbation de l\'accord provoquerait. Il n\'a pas encore décidé à qui parler en premier.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karm_revelation',
      titre: 'La vérité de l\'accord',
      description: 'Karm a documenté que l\'accord de Valyx (38) impliquait une contribution biologique — des Élus Poison livrés à intervalles précis. La technocratie de contribution de Kar-Dum est construite sur cette réalité cachée. Thyss (42) a réduit la contribution de 12%. Si la contribution biologique était liée à la contribution économique, la réduction a perturbé l\'accord — et les micro-fractures de Drevaya (39) en sont le signe.',
      personnages_impliques: [40, 42],
      declencheur: 'Karm décidant de révéler à Draven II (40) la vraie nature de l\'accord',
      consequence: 'Draven II comprenant la culpabilité réelle de sa lignée — et la perturbation de l\'accord par la réforme de Thyss',
    },
    {
      id: 'karm_drevaya',
      titre: 'Réunion des preuves',
      description: 'Karm a la reconstitution théorique. Drevaya (39) a les observations directes. Leurs deux ensembles d\'informations confirmeraient mutuellement la situation réelle de la Fosse. Ni l\'un ni l\'autre n\'a encore contacté l\'autre. Ils sont à Kar-Dum en même temps. Le temps presse.',
      personnages_impliques: [39, 43],
      declencheur: 'Contact entre Karm et Drevaya',
      consequence: 'Image complète de la situation — et obligation d\'agir avant que Graveth (43) accède au niveau 9',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Archiviste souterrain qui a reconstitué les termes réels de l\'accord de Valyx en 28 ans. Ce qu\'il a trouvé le terrified — la contribution est biologique, pas économique. N\'a pas encore dit à quiconque ce qu\'il a trouvé. Drevaya (39) a les observations directes qui confirmeraient tout.',

  relations: [
    { id: 38, nom: 'Valyx', type: 'contact', note: 'Morte il y a 40 ans. A reconstruit ses journaux. A trouvé ce qu\'elle n\'a pas dit officiellement.' },
    { id: 40, nom: 'Draven II', type: 'contact', note: 'Lui a donné accès aux archives privées. La pièce manquante était là. Doit lui dire ce qu\'il a trouvé.' },
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'A les observations directes sur la Fosse. Leurs informations combinées créent la preuve complète.' },
  ],

  combat: {
    sorts: [
      'Archives vivantes (Sol) — connexion à des strates de sol pour retrouver des traces d\'événements passés — récupération d\'informations souterraines',
      'Enracinement (Sol) — ancrage au sol — résistance aux déplacements forcés',
      'Frappe de sédiment (Sol) — projection de débris souterrains — impact modéré à moyenne distance',
    ],
  },

  image_prompts: [
    {
      id: 'karm_archives',
      description: 'Karm dans les archives souterraines de Kar-Dum — un Chthonien de 61 ans entouré de documents, tenant un fragment de journal dans une main et une lampe de lecture dans l\'autre. Son expression est de quelqu\'un qui a compris quelque chose qu\'il n\'aurait pas voulu comprendre. Il relit pour la 14e fois.',
      style: 'réaliste Chthonien archiviste, archives souterraines de Kar-Dum, documents reconstitués, découverte terrifiante, lumière de lecture, expression de compréhension réticente',
    },
  ],

  lore_long: `Karm a passé 28 ans à reconstituer les termes de l'accord de Valyx (38). Ce qu'il a trouvé le terrified.

L'accord de Valyx n'était pas économique. C'était biologique — des Élus Poison livrés à intervalles précis à la zone fongique. La technocratie de contribution de Kar-Dum est construite sur cette réalité que ses fondateurs ont choisi de ne pas rendre explicite.

La réduction de contribution de Thyss (42) a peut-être perturbé ce mécanisme. Les micro-fractures de Drevaya (39) en sont peut-être le signe. Il n'a encore dit à personne ce qu'il sait.`,
};

export default karm;
