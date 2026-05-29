import type { PersonnageLoreComplet } from '../../../lore-types';

const serathis: PersonnageLoreComplet = {
  id: 24,
  nom: 'Serathis',
  element: 'Stellaire',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 67 ans — la silhouette d\'un descendant de lignée noble qui gouverne depuis 40 ans. Ses ailes sont grandes et parfaitement entretenues — symbole de statut autant qu\'outil de déplacement. Il n\'a pas besoin de voler pour imposer. Il le fait quand même.',
    peau: 'Pâle Aéride avec une luminescence stellaire qui le distingue au premier regard — les descendants de Veralith ont une qualité lumineuse héritée qui n\'est pas qu\'une légende. La sienne est réelle et prononcée.',
    yeux: 'Or avec des éclats stellaires — ses yeux reflètent les corps célestes avec une précision qui fascine et qui intimidates à la fois. Quand il est en colère, les éclats s\'intensifient.',
    vetements: 'Robes de gouvernance de la lignée de Veralith — blanc et or, broderies de trajectoires stellaires. Lourd et cérémoniel. Il les porte sans effort apparent.',
    signes_particuliers: 'Il cite Veralith dans ses discours — des phrases qui ont été transmises dans sa famille depuis 300 ans. Il les croit sincèrement. Certaines sont authentiques. D\'autres ont été subtilement modifiées au fil des générations.',
  },

  psychologie: {
    dominante: 'Gouvernant d\'Asterciel au nom du sacrifice de Veralith depuis 40 ans — il croit sincèrement que sa lignée est le gardien légitime de l\'héritage de Veralith. Ce qu\'il gouverne est fondé sur cette croyance. Si la croyance était fissurée, tout ce qu\'il a construit le serait aussi.',
    mecanisme_de_defense: 'L\'autorité héréditaire comme vérité. Ce qui est vrai depuis 300 ans n\'a pas besoin d\'être prouvé de nouveau. Les questions sur Veralith ne sont pas des questions — elles sont des provocations. Il les traite comme telles.',
    contradiction_interne: 'Telos (29) cherche la vraie Veralith dans les archives. Serathis sait que Telos cherche et ne l\'arrête pas directement — parce qu\'arrêter la recherche reconnaîtrait qu\'il y a quelque chose à cacher. L\'attente que Telos ne trouve pas est moins coûteuse que l\'interdiction.',
    rapport_aux_autres: 'Telos (29) est son héritier qui cherche ce qu\'il préférerait qu\'il ne trouve pas. Syvara (30) est une Élue Stellaire qui refuse l\'aristocratie malgré son élément — une anomalie irritante. Thaerys (103) est un astronome qui alimente l\'aristocratie sans questionner.',
    vision_du_monde: 'L\'ordre d\'Asterciel existe parce que Veralith a payé le prix ultime pour le créer. Cette dette se paie par la gouvernance de sa lignée. Remettre en question cet ordre reviendrait à trahir ce que Veralith a sacrifié. Il ne peut pas permettre ça.',
  },

  histoire: {
    enfance: {
      titre: 'L\'héritage de Veralith',
      contenu: 'Il avait grandi avec le poids de la lignée — 11 générations entre lui et Veralith, chacune ayant gouverné Asterciel au nom du sacrifice original. Son enfance était une formation : la langue de Veralith, les citations, les protocoles, la légitimité héritée. À 12 ans, il savait déjà qu\'il gouvernerait.',
    },
    arrivee: {
      titre: 'La prise de pouvoir',
      contenu: 'À 27 ans, à la mort de son père, il avait pris la gouvernance d\'Asterciel. La transition avait été aussi fluide que 300 ans de préparation institutionnelle pouvaient la rendre. Personne n\'avait contesté. Il avait continué ce que son père avait commencé, ce que son père avait continué de ce que son grand-père avait commencé.',
    },
    premier_conflit: {
      titre: 'La Chute des Nuages révisée',
      contenu: 'À 42 ans, lors d\'une revue des archives de la Chute des Nuages, ses archivistes avaient trouvé des documents qui ne correspondaient pas entièrement à la version officielle de la mort de Garev et du rôle de Veralith. Il avait ordonné que ces documents soient "mis en contexte" — une formulation qui signifiait les reclasser hors d\'accès.',
    },
    revelation: {
      titre: 'La recherche de Telos',
      contenu: 'À 62 ans, Telos (29) avait commencé à chercher la vraie Veralith dans les archives. Serathis savait que Telos était dans les archives. Il avait demandé à ses archivistes de lui faire un rapport hebdomadaire sur ce que Telos consultait. Il lisait ces rapports avec attention. Jusqu\'ici, Telos n\'avait pas trouvé les documents reclassés.',
    },
    etat_actuel: {
      titre: 'L\'héritage à protéger',
      contenu: 'Il gouverne Asterciel depuis 40 ans. Sa légitimité tient à la version officielle de Veralith. Telos se rapproche des archives reclassées. Talvyn (23) a identifié une défaillance structurelle majeure dans les champs d\'Asterciel. Les deux menaces — l\'archive et la structure — convergent dans les 3 mois qui viennent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'serathis_telos',
      titre: 'Ce que Telos cherche',
      description: 'Telos (29) est dans les archives depuis 5 ans. Il consulte des documents sur la Chute des Nuages et sur la mort de Garev. Il s\'approche progressivement des zones reclassées. Serathis reçoit les rapports hebdomadaires. Il ne peut pas arrêter Telos sans révéler qu\'il surveille — et révéler qu\'il surveille révèle qu\'il y a quelque chose à surveiller.',
      personnages_impliques: [29, 103],
      declencheur: 'Rapprochement de Telos des archives reclassées',
      consequence: 'Dilemme : intervenir et révéler la surveillance, ou ne pas intervenir et risquer que Telos trouve',
    },
    {
      id: 'serathis_defaillance',
      titre: 'La structure qui cède',
      description: 'La défaillance identifiée par Talvyn (23) dans les connexions centrales est dans les 8 à 12 semaines. Si elle se produit, des plateformes des strates moyennes tomberont. La Chute des Nuages avait déjà fissuré la légitimité de sa lignée — une nouvelle Chute partielle serait catastrophique pour la gouvernance héréditaire.',
      personnages_impliques: [23, 28],
      declencheur: 'Défaillance structurelle prévue coïncidant avec la recherche de Telos',
      consequence: 'Deux crises simultanées dont chacune fragilise la légitimité de sa gouvernance',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Gouvernant d\'Asterciel, descendant de la lignée de Veralith. A reclassé des archives sur la Chute des Nuages qui ne correspondaient pas à la version officielle. Surveille la recherche de Telos (29). Deux crises convergent dans les 3 mois qui viennent.',

  relations: [
    { id: 29, nom: 'Telos', type: 'famille', note: 'Héritier qui cherche la vraie Veralith. Surveillé sans le savoir. Sa découverte potentielle est la menace principale.' },
    { id: 30, nom: 'Syvara', type: 'adversaire', note: 'Élue Stellaire qui refuse l\'aristocratie. Anomalie irritante mais pas encore une menace directe.' },
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Ingénieur de maintenance qui a identifié la défaillance structurelle. Invisible — jusqu\'à ce que Telos le contacte.' },
  ],

  combat: {
    sorts: [
      'Éclat stellaire (Stellaire) — frappe de lumière concentrée — impact à longue portée',
      'Aura de lignée (Stellaire) — champ lumineux de dissuasion — effet de peur sur les adversaires non stellaires',
      'Trajectoire de Veralith (Stellaire) — reproduction d\'une frappe légendaire — impact dévastateur mais épuisant',
    ],
  },

  image_prompts: [
    {
      id: 'serathis_throne',
      description: 'Serathis dans la salle de gouvernance d\'Asterciel — un Aéride de 67 ans assis sur le siège de Veralith, ses ailes légèrement déployées derrière lui, sa luminescence stellaire visible dans le demi-jour. Devant lui : un rapport. Son expression est de concentration totale sur quelque chose que le rapport ne dit pas directement.',
      style: 'réaliste gouvernant Aéride, salle de gouvernance stellaire, lignée de Veralith, autorité et inquiétude simultanées',
    },
  ],

  lore_long: `Serathis gouverne Asterciel depuis 40 ans au nom de la lignée de Veralith. Il croit sincèrement à la légitimité héréditaire qu'il incarne.

À 42 ans, il a reclassé des archives sur la Chute des Nuages qui ne correspondaient pas à la version officielle. À 62 ans, Telos (29) a commencé à chercher la vraie Veralith dans les archives.

Il ne peut pas arrêter Telos sans révéler qu'il surveille. Et révéler qu'il surveille révèle qu'il y a quelque chose à surveiller.`,
};

export default serathis;
