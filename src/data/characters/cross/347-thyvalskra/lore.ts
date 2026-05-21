import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvalskra: PersonnageLoreComplet = {
  id: 347,
  nom: 'Thyvalskra',
  element: 'Glace',
  element2: 'Spectre',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Grand, avec une présence physique qui communique l\'autorité dans le Champ Gelé — quelqu\'un dont la présence signifie quelque chose dans cet espace spécifique.',
    peau: 'Blanc-gris Givrin avec des zones légèrement opaques aux épaules et aux avant-bras — une résistance physique développée par exposition prolongée aux zones spectrales du Champ.',
    yeux: 'Bleu-gris qui changent légèrement dans les zones de forte densité spectrale — ils s\'éclaircissent. C\'est involontaire. Il l\'a noté mais ne peut pas le contrôler.',
    vetements: 'Tenue de gardien royale — marqueur visible de la Monarchie, adaptée aux conditions extrêmes du Champ Gelé. Il ne retire pas les marqueurs royaux même dans des espaces où ils pourraient le signaler.',
    signes_particuliers: 'Il garde une distance précise de 3 à 5 mètres avec les zones de haute densité spectrale — une limite qu\'il a définie lui-même après 12 ans d\'observation. Il ne s\'y est jamais habitué.',
  },

  psychologie: {
    dominante: 'Protection du Champ Gelé contre les incursions médiumiques non autorisées. Le Champ contient des milliers de présences spectrales — des soldats gelés depuis un conflit ancien. Ces présences sont sensibles aux manipulations. Les incursions non contrôlées peuvent les perturber de façon imprévisible.',
    mecanisme_de_defense: 'La définition étroite de son mandat. Il protège le Champ contre les incursions qui perturbent les présences. Quelqu\'un qui entre sans perturber n\'est pas dans son mandat. Cette définition lui permet de tolérer des présences qu\'il ne peut pas techniquement empêcher.',
    contradiction_interne: 'Il sait que Velthkra (345) entre dans le Champ régulièrement et affirme entendre les présences. Il sait qu\'Iskravel (346) utilise le Champ comme relais de transmission. Ces deux présences perturbent peut-être le Champ — il ne sait pas. Il ne les a pas confrontés. Sa tolérance est-elle du pragmatisme ou de l\'évitement ?',
    rapport_aux_autres: 'Keldris (57) lui envoie des demandes périodiques d\'accès impérial au Champ — des demandes qu\'il refuse systématiquement en invoquant son mandat royal. Velskra (169) est un chercheur qui travaille sur les présences du Champ — le seul accès qu\'il a accordé formellement.',
    vision_du_monde: 'Le Champ Gelé est un lieu de morts en suspension. Ces morts appartiennent à Crysalme. Leur gestion appartient à la Monarchie. Ni l\'Empire ni les individus indépendants ne décident de ce qui se passe dans le Champ.',
  },

  histoire: {
    enfance: {
      titre: 'La première entrée dans le Champ',
      contenu: 'À 20 ans, il avait accompagné un gardien senior dans le Champ pour la première fois. Les présences étaient perceptibles même sans capacité Spectre importante. La pression des milliers de présences en suspension était physique — pas douloureuse, mais présente. Il avait compris que ce lieu nécessitait une attention particulière.',
    },
    arrivee: {
      titre: 'La nomination royale',
      contenu: 'À 31 ans, Thyval (55) l\'avait nommé gardien du Champ après le départ du gardien précédent. Sa combinaison Glace primaire et Spectre secondaire était adaptée à la navigation dans les deux couches du Champ — la couche physique glacée et la couche spectrale des présences.',
    },
    premier_conflit: {
      titre: 'La demande impériale',
      contenu: 'À 35 ans, Keldris (57) avait fait une première demande d\'accès impérial au Champ — pour une "étude des présences spectrales". Il avait refusé en invoquant son mandat royal. Keldris avait escaladé vers Thyval. Thyval avait soutenu le refus. Il avait noté que Thyval avait soutenu le refus sans hésiter.',
    },
    revelation: {
      titre: 'Les présences qui s\'organisent',
      contenu: 'À 43 ans, il avait observé pour la première fois que certaines présences spectrales du Champ semblaient se déplacer de façon coordonnée — pas au hasard. Cette coordination était faible et irrégulière. Il n\'avait pas de cadre pour l\'interpréter. Il en avait informé Velsa (58). Velsa avait dit que c\'était cohérent avec des processus spectraux anciens qu\'elle avait observés dans d\'autres contextes.',
    },
    etat_actuel: {
      titre: 'La surveillance actuelle',
      contenu: 'Il surveille le Champ 4 jours par semaine. Les présences de Velthkra (345) et Iskravel (346) sont connues de lui. Il n\'est pas intervenu. Velskra (169) a accès formel et documente les présences. Keldris (57) a fait une nouvelle demande d\'accès ce mois — sa huitième. Il a refusé comme les sept précédentes.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvalskra_presences_coord',
      titre: 'Les présences qui se déplacent',
      description: 'Il a observé des présences spectrales du Champ se déplacer de façon coordonnée. Velsa (58) a dit que c\'est cohérent avec des processus spectraux anciens. Velskra (169) documente. Velthkra (345) affirme entendre les présences. Si la coordination des présences est réelle et croissante, le Champ change d\'état — et son mandat de protection doit s\'adapter.',
      personnages_impliques: [58, 169],
      declencheur: 'Observation d\'une coordination partielle des présences spectrales',
      consequence: 'Changement d\'état possible du Champ — mandat de protection à adapter si confirmé',
    },
    {
      id: 'thyvalskra_tolerance_ambigue',
      titre: 'La tolérance non officialisée',
      description: 'Il tolère Velthkra et Iskravel dans le Champ sans autorisation formelle ni intervention. Cette tolérance repose sur sa définition étroite de son mandat — ils ne perturbent pas les présences visiblement. Si les présences se coordonnent et que cette coordination est liée à leurs présences, sa tolérance devient une erreur de jugement.',
      personnages_impliques: [345, 346],
      declencheur: 'Présences régulières tolérées sans confrontation',
      consequence: 'Tolérance à risque si les présences spectrales évoluent en lien avec les incursions',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Gardien royal du Champ Gelé à Crysalme. Protège les présences spectrales des soldats gelés contre les incursions. Il tolère Velthkra et Iskravel sans les avoir formellement autorisés. Les présences du Champ montrent des signes de coordination.',

  relations: [
    { id: 57, nom: 'Keldris', type: 'adversaire', note: 'Fait des demandes d\'accès impérial au Champ — toutes refusées. Huitième demande ce mois.' },
    { id: 169, nom: 'Velskra', type: 'allié', note: 'Seul chercheur avec accès formel au Champ. Documente les présences spectrales.' },
  ],

  combat: {
    sorts: [
      'Mur de glace (Glace) — création d\'une barrière physique épaisse — protection du Champ contre les entrées physiques',
      'Répulsion spectrale (Spectre) — repoussement d\'une présence spectrale non ancrée — expulsion d\'une incursion médiumique',
      'Ancrage au Champ (Glace + Spectre) — stabilisation des présences spectrales perturbées — restauration de l\'état du Champ',
    ],
  },

  image_prompts: [
    {
      id: 'thyvalskra_garde',
      description: 'Thyvalskra à l\'entrée du Champ Gelé — une zone délimitée où la glace est plus épaisse et d\'une couleur légèrement différente. Il est debout, à sa distance habituelle des zones de haute densité spectrale. Son expression est vigilante. Derrière lui, les formes floues des présences sont à peine visibles dans la glace.',
      style: 'réaliste gardien givrin, entrée du Champ Gelé, présences spectrales en arrière-plan, posture de garde',
    },
  ],

  lore_long: `Thyvalskra garde le Champ Gelé de Crysalme — une zone contenant des milliers de présences spectrales de soldats gelés lors d'un conflit ancien.

Il a refusé 8 demandes d'accès de Keldris (57). Velskra (169) a un accès formel. Velthkra (345) et Iskravel (346) entrent régulièrement — il le sait, il ne les a pas confrontés.

Les présences du Champ montrent des signes de déplacement coordonné. Velsa (58) dit que c'est cohérent avec des processus spectraux anciens. Si cette coordination augmente, son mandat doit s'adapter.

Sa tolérance silencieuse repose sur une définition étroite de son mandat. Elle pourrait être une erreur.`,
};

export default thyvalskra;
