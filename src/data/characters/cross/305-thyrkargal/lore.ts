import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkargal: PersonnageLoreComplet = {
  id: 305,
  nom: 'Thyrkargal',
  element: 'Roche',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Imposant, avec la posture d\'un superviseur qui ne descend pas lui-même dans les mines mais qui sait exactement ce qui s\'y passe. Habitude de dominer les espaces par la position plutôt que la taille.',
    peau: 'Gris foncé Chthonien avec des reflets métalliques aux tempes — marque de rang dans la hiérarchie impériale qui a été intégrée à l\'apparence via un traitement esthétique Technocratie.',
    yeux: 'Gris acier, qui évaluent les personnes comme des ressources — rendement, risque, remplacement potentiel.',
    vetements: 'Uniforme de superviseur impérial avec des insigne d\'extraction minière. Propre, fonctionnel, sans fioritures — il veut être identifiable comme autorité, pas comme personnage.',
    signes_particuliers: 'Il prend des notes pendant toutes les conversations. Pas pour se souvenir — pour que son interlocuteur sache qu\'il prend des notes.',
  },

  psychologie: {
    dominante: 'Extraction maximale comme objectif mesurable. Chaque tonne de ressource extraite est une donnée. Les données que l\'Empire reçoit justifient son poste. Son poste justifie les ressources qu\'il contrôle.',
    mecanisme_de_defense: 'La documentation. Tout ce qu\'il fait est documenté. Si quelque chose va mal, le document montre qu\'il a suivi les directives.',
    contradiction_interne: 'Draven II (40) est techniquement son adversaire — les intérêts de la Confédération locale et de l\'Empire s\'opposent sur les quotas d\'extraction. Mais Draven II lui fournit parfois des informations sur des Dissidentes qui permettent à Thyrkargal d\'anticiper des perturbations. La relation est fonctionnelle dans les deux sens.',
    rapport_aux_autres: 'Thyss (42) est son contact impérial pour les ressources rares — il passe les commandes, Thyss les achemine. Draven II (40) est l\'adversaire officiel avec qui il maintient une communication non officielle.',
    vision_du_monde: 'Ormn-Dur a des ressources que l\'Empire utilise. Son rôle est d\'optimiser l\'extraction. La politique locale est un paramètre à gérer, pas un obstacle à résoudre.',
  },

  histoire: {
    enfance: {
      titre: 'La formation impériale',
      contenu: 'Né à Ormn-Dur dans une famille dont le père travaillait pour les structures impériales locales. À 18 ans, intégré dans le programme de formation des superviseurs impériaux — une sélection basée sur les résultats scolaires et la loyauté familiale documentée. Il avait eu les deux.',
    },
    arrivee: {
      titre: 'La première supervision',
      contenu: 'À 33 ans, nommé superviseur d\'un district minier secondaire à Ormn-Dur. À 40 ans, superviseur en chef des mines impériales. Il avait augmenté les quotas de 23% sur cette période. L\'Empire avait noté l\'augmentation.',
    },
    premier_conflit: {
      titre: 'La confrontation avec Draven II',
      contenu: 'Draven II (40) avait déposé une objection formelle aux nouveaux quotas auprès de la Confédération. Objection transmise à l\'Empire. L\'Empire avait maintenu les quotas. Thyrkargal avait rencontré Draven II pour lui expliquer la position impériale. La réunion avait duré 4 heures. À la sortie, Draven II avait retiré son objection et Thyrkargal avait discrètement réduit un quota secondaire de 8%.',
    },
    revelation: {
      titre: 'L\'accord non écrit',
      contenu: 'Sur 5 ans, Draven II lui avait fourni plusieurs informations sur des perturbations planifiées dans ses zones d\'extraction — des sabotages Dissidents évités grâce à ces informations. En échange, Thyrkargal avait maintenu des conditions d\'extraction moins agressives dans certaines zones que Draven II considérait comme sensibles. Aucun de ces deux échanges n\'était documenté.',
    },
    etat_actuel: {
      titre: 'La supervision stable',
      contenu: 'Ses quotas sont atteints. Ses mines fonctionnent sans perturbations majeures depuis 3 ans. Son rapport avec Draven II est la raison principale de cette stabilité. Il ne peut pas mentionner cette raison dans ses rapports impériaux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkargal_accord_draven',
      titre: 'L\'accord qui ne peut pas être écrit',
      description: 'Son accord non documenté avec Draven II (40) maintient la stabilité de ses extractions. L\'Empire ne sait pas que cette stabilité dépend d\'un compromis avec la Confédération locale. Draven II ne sait pas que Thyrkargal documente chaque information reçue même si l\'accord lui-même n\'est pas écrit. Si l\'Empire découvre l\'accord, Thyrkargal a un problème. Si Draven II découvre la documentation, l\'accord disparaît.',
      personnages_impliques: [40, 42],
      declencheur: 'Intérêts opposés qui se rejoignent sur la stabilité opérationnelle',
      consequence: 'Stabilité des extractions maintenue par un accord que les deux parties ne peuvent pas reconnaître',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Représentant de l\'extraction impériale à Ormn-Dur. Sa stabilité opérationnelle cache un accord non officiel avec son adversaire déclaré. Si l\'un des deux pivote, l\'équilibre s\'effondre.',

  relations: [
    { id: 40, nom: 'Draven II', type: 'rival', note: 'Adversaire officiel, partenaire non officiel. Deux échanges mutuellement utiles qui ne peuvent pas être documentés.' },
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Contact impérial pour ressources rares. Relation hiérarchique fonctionnelle.' },
  ],

  combat: {
    sorts: [
      'Autorité de roche (Roche) — projection de masse rocheuse qui impose un recul physique — contrôle de terrain',
      'Sol d\'autorité (Sol) — stabilisation du terrain sous ses pieds pour maintenir sa position — ancrage défensif',
      'Extraction forcée (Roche) — arrachement de matériaux d\'une structure — démolition ou désarmement',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkargal_supervision',
      description: 'Thyrkargal debout sur une plateforme dominant une mine active, en train de prendre des notes en observant le travail en dessous. Son uniforme impérial est propre malgré l\'environnement. Il regarde les travailleurs comme des données.',
      style: 'réaliste impérial autoritaire, surplomb sur environnement minier, posture de supervision, contraste uniforme/mine',
    },
  ],

  lore_long: `Thyrkargal supervise les mines impériales d'Ormn-Dur. Ses quotas sont atteints depuis 3 ans sans perturbation majeure.

La raison principale de cette stabilité est un accord non documenté avec Draven II (40) — son adversaire officiel. Draven II lui fournit des informations sur des sabotages planifiés. Thyrkargal maintient des conditions moins agressives dans certaines zones. Aucun de ces échanges n'est écrit.

Il documente chaque information reçue de Draven II même si l'accord lui-même ne peut pas être écrit. Si Draven II le découvrait, l'accord disparaîtrait.

L'Empire voit des quotas atteints. L'Empire ne sait pas comment.`,
};

export default thyrkargal;
