import type { PersonnageLoreComplet } from '../../../lore-types';

const velthinsek: PersonnageLoreComplet = {
  id: 377,
  nom: 'Velthinsek',
  element: 'Insecte',
  element2: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Umbrien de sabotage — agile avec des mouvements économes. Il opère dans des espaces étroits et des zones à faible visibilité — une silhouette qui s\'adapte aux contraintes de terrain.',
    peau: 'Gris-violet Umbrien avec des reflets luminescents discrets aux avant-bras — les zones de contact avec ses essaims de noctèmes. Dans le noir, il est légèrement visible à cause de cette luminescence résiduelle.',
    yeux: 'Violet sombre avec une vision nocturne développée — il voit dans des environnements où d\'autres seraient aveugles.',
    vetements: 'Tenue sombre sans réflexion — tissu mat traité contre la luminescence ambiante de Noctéa. Des compartiments dissimulés pour les contenants d\'essaims.',
    signes_particuliers: 'Ses essaims de noctèmes sont avec lui en permanence — dans les contenants, invisibles. Il les libère en quelques secondes.',
  },

  psychologie: {
    dominante: 'Sabotage d\'installations et de réseaux impériaux dans Noctéa et les zones de transition via des essaims d\'insectes luminescents utilisés comme diversion — une lumière intense soudaine qui aveugle et désorganise, permettant des actions dans la confusion.',
    mecanisme_de_defense: 'La diversion comme protection. Tant que les autres regardent la lumière, ils ne le voient pas. Il travaille dans l\'angle mort de chaque diversion qu\'il crée.',
    contradiction_interne: 'Ses essaims de noctèmes sont des insectes naturels de Noctéa — des créatures vivantes utilisées comme outils. Il a une relation avec eux qui n\'est pas exactement instrumentale. Il ne les envoie pas dans des situations où leur mortalité serait trop élevée. Cette limite a coûté 2 opérations.',
    rapport_aux_autres: 'Nyrshyx (332) est un contact Dissident qui utilise des insectes dans des contextes différents — ils partagent des informations sur les zones et les espèces de Noctéa. Thyrkra (168) est son contact Dissident pour les priorités d\'opération — il reçoit les cibles et les délais.',
    vision_du_monde: 'Noctéa est un espace que l\'Empire régule par la peur de l\'obscurité et des créatures nocturnes. Utiliser la lumière — pas l\'obscurité — pour les désorganiser est une ironie qu\'il apprécie.',
  },

  histoire: {
    enfance: {
      titre: 'Les noctèmes du quartier',
      contenu: 'À 11 ans, il avait commencé à s\'intéresser aux noctèmes — des insectes Umbrien dont la bioluminescence servait à la communication dans les zones sans lumière ambiante. Il avait appris à communiquer avec eux par des patterns de lumière et de mouvement. Il était le seul de son quartier à les approcher sans peur.',
    },
    arrivee: {
      titre: 'La première diversion',
      contenu: 'À 21 ans, une opération impériale dans son quartier menaçait de localiser un réseau Dissident. Il avait libéré un essaim de noctèmes dans la zone d\'opération — la lumière intense avait désorganisé l\'unité pendant 4 minutes. 4 minutes suffisantes pour évacuer ce qu\'il fallait évacuer. Thyrkra (168) l\'avait contacté 3 jours plus tard.',
    },
    premier_conflit: {
      titre: 'L\'essaim de trop',
      contenu: 'À 26 ans, Thyrkra avait demandé une diversion dans une installation impériale protégée par des écrans lumineux — des dispositifs qui neutralisaient les noctèmes avant qu\'ils puissent atteindre leurs positions. Il avait perdu 70% d\'un essaim dans l\'approche. Il avait refusé les missions avec des écrans similaires sans reconnaissance préalable.',
    },
    revelation: {
      titre: 'L\'information de Nyrshyx',
      contenu: 'Nyrshyx (332) lui avait signalé que des essaims modifiés — dont certains spécimens provenaient de Thyrvinsek (375) via la Convergence — avaient été identifiés dans des zones de transition. Ces essaims modifiés avaient une luminescence d\'une fréquence différente des noctèmes naturels. Il ne savait pas si cette modification affecterait ses propres essaims.',
    },
    etat_actuel: {
      titre: 'La commande prioritaire de Thyrkra',
      contenu: 'Thyrkra (168) lui a demandé une diversion prioritaire dans 5 jours — une installation impériale dans les zones de transition qui collecte des données sur les routes Dissidentes de Noctéa. Cette installation a des écrans anti-luminescence. Il doit reconnaître les écrans avant d\'engager l\'opération.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthinsek_installation_prioritaire',
      titre: 'La diversion des 5 jours',
      description: 'L\'installation de collecte de données que Thyrkra (168) veut neutraliser a des écrans anti-luminescence — le type qui lui a coûté 70% d\'un essaim. Il a 5 jours. 2 jours de reconnaissance, 3 jours de préparation. Si la reconnaissance révèle des écrans inscontournables, la mission ne peut pas être exécutée dans les délais.',
      personnages_impliques: [168, 332],
      declencheur: 'Demande de diversion prioritaire en 5 jours sur installation à écrans anti-luminescence',
      consequence: 'Reconnaissance critique dans les 2 premiers jours — mission conditionnelle à l\'évaluation des écrans',
    },
    {
      id: 'velthinsek_essaims_modifies',
      titre: 'La luminescence des essaims modifiés',
      description: 'Les essaims modifiés signalés par Nyrshyx (332) ont une luminescence à fréquence différente. Si ces essaims se répandent dans les zones de Noctéa, la distinction entre noctèmes naturels et essaims modifiés dans ses opérations devient floue. Une installation qui identifierait sa signature lumineuse spécifique pourrait le cibler.',
      personnages_impliques: [332, 168],
      declencheur: 'Présence d\'essaims à luminescence modifiée dans les zones d\'opération',
      consequence: 'Risque de signature identifiable si les fréquences d\'essaim deviennent distincts des noctèmes naturels',
    },
  ],

  arcs: ['arc_zones_de_transition'],
  position_dans_arc: 'Saboteur Dissident Umbrien utilisant des essaims de noctèmes luminescents dans Noctéa et les zones de transition. Opération prioritaire dans 5 jours sur une installation à écrans anti-luminescence. Essaims modifiés de la Convergence risquent de compromettre sa signature naturelle.',

  relations: [
    { id: 332, nom: 'Nyrshyx', type: 'allié', note: 'Contact Dissident sur les espèces et zones de Noctéa. A signalé les essaims modifiés à luminescence différente.' },
    { id: 168, nom: 'Thyrkra', type: 'supérieur', note: 'Contact Dissident pour les priorités d\'opération. Demande la diversion prioritaire dans 5 jours.' },
  ],

  combat: {
    sorts: [
      'Nuée lumineuse (Insecte) — libération d\'un essaim de noctèmes — flash lumineux aveuglant et désorganisation de zone',
      'Manteau d\'ombre (Ténèbres) — absorption de la lumière ambiante — dissimulation dans une zone éclairée',
      'Invasion bioluminescente (Insecte + Ténèbres) — libération d\'essaim coordonnée avec une zone d\'ombre — flash dirigé avec cécité de zone précise',
    ],
  },

  image_prompts: [
    {
      id: 'velthinsek_diversion',
      description: 'Velthinsek dans une zone sombre de Noctéa — il vient de libérer un essaim de noctèmes, la zone est soudainement illuminée d\'une lumière blanche intense. Dans l\'angle mort de la lumière, il se déplace sans être vu. Des contours d\'unités impériales aveuglées en arrière-plan.',
      style: 'réaliste saboteur Umbrien, essaim de noctèmes luminescents, flash de lumière intense, angle mort de diversion',
    },
  ],

  lore_long: `Velthinsek sabote les installations impériales de Noctéa via des essaims de noctèmes luminescents — une lumière intense soudaine qui aveugle et désorganise. Il travaille dans l'angle mort.

Opération prioritaire dans 5 jours sur une installation à écrans anti-luminescence. La reconnaissance est critique — sans elle, l'opération coûtera trop d'essaim.

Les essaims modifiés de la Convergence signalés par Nyrshyx (332) ont une luminescence à fréquence différente. Si cette fréquence se répand, sa signature naturelle est compromise.`,
};

export default velthinsek;
