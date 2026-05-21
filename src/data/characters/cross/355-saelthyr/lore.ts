import type { PersonnageLoreComplet } from '../../../lore-types';

const saelthyr: PersonnageLoreComplet = {
  id: 355,
  nom: 'Saelthyr',
  element: 'Combat',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Mercenaire — une corpulence fonctionnelle, ni excessive ni insuffisante. Des muscles de terrain, pas d\'entraînement.',
    peau: 'Brun Homme-Lien avec des cicatrices nombreuses et géographiquement variées — les marques de quelqu\'un qui a travaillé dans beaucoup d\'endroits différents.',
    yeux: 'Gris-brun avec une qualité d\'évaluation directe. Il regarde les menaces avant les opportunités — un ordre de priorité qui vient de l\'expérience.',
    vetements: 'Tenue de mercenaire sans marqueur — adaptée à différents contextes. Il a de l\'équipement de qualité mais pas d\'équipement distinctif.',
    signes_particuliers: 'Il précise toujours le contexte de ses refus. Il ne dit pas "non". Il dit pourquoi non — une habitude prise pour éviter les malentendus sur des mandats qui auraient pu mal tourner.',
  },

  psychologie: {
    dominante: 'Sélection des mandats selon des critères éthiques construits depuis une extraction forcée observée dans l\'Isthme. Il travaille pour des clients dont les opérations correspondent à ses critères — critères que les clients ne voient pas toujours explicitement.',
    mecanisme_de_defense: 'La limite comme identité. Il est quelqu\'un qui refuse de travailler pour l\'Empire depuis l\'extraction forcée. Cette limite est connue. Elle structure sa réputation et ses relations.',
    contradiction_interne: 'Il a refusé des mandats impériaux depuis 4 ans. Ses mandats actuels incluent des opérations Dissidentes et de protection — des opérations qui entrent en conflit direct avec des opérations impériales. Il n\'est plus neutre. Il a une affiliation de fait sans affiliation formelle.',
    rapport_aux_autres: 'Thyrkael (351) est un adversaire passé — il avait travaillé avec lui avant l\'extraction forcée, il a refusé de travailler avec lui après. Thyrkorn (354) est un contact de son réseau actuel — des mandats de protection et d\'extraction qui correspondent à ses critères.',
    vision_du_monde: 'Il a choisi de ne pas travailler pour des clients dont les opérations impliquent des extractions forcées. Cette limite est précise. Tout ce qui ne tombe pas dedans est négociable.',
  },

  histoire: {
    enfance: {
      titre: 'Le mercenaire sans limite initiale',
      contenu: 'À 22 ans, il avait commencé comme mercenaire dans l\'Isthme sans limite particulière — il travaillait pour ceux qui payaient le prix. Les mandats étaient variés. Il ne posait pas de questions sur les objectifs finaux.',
    },
    arrivee: {
      titre: 'L\'extraction forcée',
      contenu: 'À 31 ans, il avait été sur un mandat impérial de sécurisation de périmètre. Le mandat n\'avait pas précisé le contenu. Le contenu était une extraction forcée d\'une famille d\'Élus — deux adultes et un enfant de 4 ans. Il avait complété le périmètre. Il avait vu l\'extraction. Il avait refusé le paiement final et quitté le mandat.',
    },
    premier_conflit: {
      titre: 'Le refus de Thyrkael',
      contenu: 'À 33 ans, Thyrkael (351) l\'avait contacté pour un mandat de sécurisation autour de Virex. Il avait refusé. Thyrkael avait dit que ce n\'était pas une extraction — juste des checkpoints. Il avait refusé quand même. Il ne savait pas exactement ce que les checkpoints allaient produire. Il ne voulait pas contribuer à la chaîne.',
    },
    revelation: {
      titre: 'La connexion avec Thyrkorn',
      contenu: 'Thyrkorn (354) l\'avait contacté via un intermédiaire pour des mandats de protection — des escortes et des sécurisations de déplacements dans l\'Isthme. Les mandats correspondaient à ses critères. Il avait accepté. Il n\'avait pas demandé explicitement si les personnes protégées étaient des Élus. Il savait que c\'était probable.',
    },
    etat_actuel: {
      titre: 'Le mandat actif',
      contenu: 'Il est sur un mandat de protection pour un déplacement coordonné par Thyrkorn (354). Le déplacement implique 3 personnes et passe à proximité des checkpoints de Thyrkael (351). Il a choisi une route qui évite les checkpoints — une route que Thyrkorn lui a indiquée. Il ne sait pas si Thyrkael a identifié cette route comme alternative.',
    },
  },

  evenements_narratifs: [
    {
      id: 'saelthyr_route_alternative',
      titre: 'Le mandat à proximité des checkpoints',
      description: 'Le mandat actif passe à proximité des checkpoints de Thyrkael (351). Il utilise une route alternative indiquée par Thyrkorn (354). Il ne sait pas si Thyrkael surveille cette route. Si Thyrkael la surveille, le mandat implique un risque de contact direct entre Saelthyr et son ancien employeur. Ce serait une confrontation qu\'il préférerait éviter.',
      personnages_impliques: [354, 351],
      declencheur: 'Mandat actif à proximité des checkpoints de Thyrkael',
      consequence: 'Risque de contact avec Thyrkael sur route alternative — confrontation possible à éviter',
    },
    {
      id: 'saelthyr_affiliation_defacto',
      titre: 'L\'affiliation sans déclaration',
      description: 'Ses mandats des 4 derniers mois sont tous des opérations Dissidentes ou de protection d\'Élus. Il n\'a pas d\'affiliation formelle. Il n\'a pas de carte Dissidente. Mais ses opérations entrent en conflit direct avec les opérations impériales. Si l\'Empire cartographie ses mandats récents, il sera traité comme Dissident de fait.',
      personnages_impliques: [354],
      declencheur: 'Accumulation de mandats Dissidents sans affiliation formelle',
      consequence: 'Affiliation de fait sans protection formelle — statut ambigu avec risques impériaux',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Mercenaire indépendant travaillant de fait pour les Dissidentes dans l\'Isthme depuis l\'extraction forcée qui a défini sa limite. Son mandat actif passe à proximité des checkpoints de Thyrkael.',

  relations: [
    { id: 351, nom: 'Thyrkael', type: 'adversaire passé', note: 'A refusé ses mandats depuis l\'extraction forcée. Contact possible non désiré sur le mandat actuel.' },
    { id: 354, nom: 'Thyrkorn', type: 'allié', note: 'Source de mandats correspondant à ses critères. A indiqué la route alternative du mandat actif.' },
  ],

  combat: {
    sorts: [
      'Frappe de mercenaire (Combat) — technique de combat efficace optimisée pour des situations variables — polyvalence de terrain',
      'Résistance physique (Normal) — maintien des capacités de combat sous blessure légère à modérée — continuité opérationnelle',
      'Désengagement (Combat + Normal) — rupture d\'un engagement avec évacuation simultanée d\'un tiers — extraction en combat',
    ],
  },

  image_prompts: [
    {
      id: 'saelthyr_protection',
      description: 'Saelthyr en position de protection sur un chemin de l\'Isthme — il est à l\'arrière d\'un groupe de 3 personnes qu\'il escorte, en train d\'observer les zones latérales. Son regard est calme mais actif. Il n\'est pas en tension — il est en vigilance. La route contourne visible ment une zone de checkpoint.',
      style: 'réaliste mercenaire Homme-Lien, protection d\'escorte, Isthme terrain, route contournant un checkpoint',
    },
  ],

  lore_long: `Saelthyr a refusé de travailler pour l'Empire depuis qu'il a vu une extraction forcée d'une famille d'Élus lors d'un mandat impérial à 31 ans. Il travaille depuis pour des mandats de protection et d'extraction.

Ses 4 derniers mois de mandats sont tous de fait Dissidents. Il n'a pas d'affiliation formelle. L'Empire le traiterait comme Dissident si il cartographiait ses opérations.

Mandat actif en cours à proximité des checkpoints de Thyrkael (351) — son ancien employeur. Route alternative utilisée. Risque de contact non désiré.`,
};

export default saelthyr;
