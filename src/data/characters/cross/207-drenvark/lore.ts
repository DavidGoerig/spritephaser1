import type { PersonnageLoreComplet } from '../../../lore-types';

const drenvark: PersonnageLoreComplet = {
  id: 207,
  nom: 'Drenvark',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Pyrien de 44 ans, forgeron militaire — corpulence massive adaptée au travail lourd. Les cicatrices de forge sont honorifiques dans son milieu.',
    peau: 'Rouge-ardente avec des marques d\'acier fondu permanentes — son double élément intègre les métaux à sa peau.',
    yeux: 'Orangés avec des éclats métalliques argentés.',
    vetements: 'Tenue de forgeron militaire impérial — identification claire, rang visible.',
    signes_particuliers: 'Il produit les armes des Régulateurs impériaux à Varkhôl. Son double élément Feu/Acier lui permet de travailler l\'acier à des températures et avec une précision que les forgerons standards ne peuvent pas atteindre.',
  },

  psychologie: {
    dominante: 'Forgeron militaire impérial à Varkhôl. Son double élément Feu/Acier fait de lui le meilleur forgeron d\'armes de la région — il peut travailler l\'acier depuis l\'intérieur, le shaper à des températures impossibles pour des forgerons standards. L\'Empire lui fournit des ressources et des protections en échange de cette production exclusive.',
    mecanisme_de_defense: 'L\'indispensabilité. Il produit des armes que personne d\'autre à Varkhôl ne peut produire. Cette indispensabilité est sa protection contre les pressions qui pourraient être exercées sur lui.',
    contradiction_interne: 'Il produit des armes pour l\'Empire — des armes utilisées par des Régulateurs qui contrôlent des populations Élus. Son travail contribue directement à la structure qu\'il n\'a jamais questionnée. Il ne l\'a jamais questionnée.',
    rapport_aux_autres: 'Skarith (9) est dans son réseau — le chef des Régulateurs qui utilise ses armes en priorité. Thyss (42) est dans son réseau Chthonien — un administrateur qui commande parfois des équipements miniers spéciaux.',
    vision_du_monde: 'Les armes sont des outils. Les outils sont ce qu\'il fait. Qui les utilise et à quelle fin est la responsabilité de l\'utilisateur. Il forge.',
  },

  histoire: {
    enfance: {
      titre: 'La forge Pyrien',
      contenu: 'Apprenti forgeron à Varkhôl dès 16 ans. Son double élément s\'était manifesté à 19 ans et avait transformé ses capacités de forge — il pouvait travailler l\'acier d\'une façon que ses maîtres ne pouvaient pas lui enseigner.',
    },
    arrivee: {
      titre: 'L\'Empire',
      contenu: 'L\'Empire l\'avait recruté à 26 ans pour sa forge militaire. Les conditions de travail, les ressources, la protection — tout était supérieur à ce qu\'il aurait eu comme forgeron indépendant. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'La commande spéciale',
      contenu: 'Skarith (9) avait commandé un type d\'arme spéciale pour des opérations qui n\'étaient pas décrites. Il avait forgé ce qui était demandé. L\'arme avait été utilisée. Il n\'avait pas demandé à quoi elle avait servi.',
    },
    revelation: {
      titre: 'Le forgeron sans questions',
      contenu: 'Il avait compris qu\'il avait adopté une politique de ne pas poser de questions sur les usages de ses armes. Cette politique lui permettait de forger efficacement. Elle avait aussi des implications qu\'il préférait ne pas examiner.',
    },
    etat_actuel: {
      titre: 'Le forgeron militaire',
      contenu: 'Il forge. L\'Empire est satisfait. Il ne demande pas les usages.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drenvark_forge',
      titre: 'L\'arme et son usage',
      description: 'Drenvark forge des armes pour les Régulateurs impériaux. Si les Dissidentes parviennent à lui transmettre une description précise d\'un usage de ses armes — une opération contre des Élus, une extraction forcée — et lui demandent s\'il continuerait à forger sachant ça, il sera confronté à la question qu\'il a évitée.',
      personnages_impliques: [9, 42],
      declencheur: 'Drenvark informé de l\'usage précis d\'une de ses armes contre des Élus civils',
      consequence: 'Drenvark confronté à sa politique de ne pas poser de questions — et à une décision sur sa continuation',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Forgeron militaire impérial à Varkhôl avec double élément Feu/Acier. Produit les armes des Régulateurs. Ne demande pas les usages.',

  relations: [
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Chef des Régulateurs utilisant ses armes en priorité.' },
    { id: 42, nom: 'Thyss', type: 'contact', note: 'Administrateur commandant parfois des équipements spéciaux.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'acier fondu (Feu/Acier) — projectile d\'acier chauffé — attaque à distance',
      'Armure d\'acier vivant (Acier) — couche protectrice métallique — défense renforcée',
    ],
  },

  image_prompts: [
    {
      id: 'drenvark_forge',
      description: 'Drenvark dans sa forge militaire à Varkhôl — un Pyrien de 44 ans tenant une arme achevée. L\'acier est encore chaud de sa propre chaleur élémentaire. L\'arme est précise et puissante. Il la passe à un Régulateur sans demander à quelle opération elle est destinée.',
      style: 'réaliste Pyrien forgeron militaire impérial, Varkhôl, double élément Feu/Acier, armes pour Régulateurs, indifférence à l\'usage',
    },
  ],

  lore_long: `Drenvark est forgeron militaire impérial à Varkhôl. Son double élément Feu/Acier lui permet de travailler l'acier d'une façon que les forgerons standards ne peuvent pas atteindre.

Il produit les armes des Régulateurs. Il ne demande pas les usages. Cette politique lui permet de forger efficacement.

Elle a aussi des implications qu'il a choisi de ne pas examiner.`,
};

export default drenvark;
