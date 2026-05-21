import type { PersonnageLoreComplet } from '../../../lore-types';

const ormavel: PersonnageLoreComplet = {
  id: 256,
  nom: 'Ormavel',
  element: 'Normal',
  element2: 'Roche',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Moyen, légèrement enrobé — physique de bureau depuis 20 ans. Carré d\'épaules, mains larges.',
    peau: 'Mate, sans marque élémentaire notable. L\'élément Roche secondaire se manifeste parfois par une rigidité légère des traits quand il est concentré.',
    yeux: 'Gris, secs. Regard de comptable — il évalue des volumes et des lignes, pas des personnes.',
    vetements: 'Costume administratif standard de la Citadelle, brun-gris de grade moyen-supérieur. Propre, sans ornement. Un stylet d\'argent à la poche — cadeau de promotion reçu il y a 12 ans, devenu talisman sans signification.',
    signes_particuliers: 'Ses budgets sont toujours équilibrés. Pas approximativement — exactement. Il a la réputation d\'un administrateur d\'une précision rare. Cette précision inclut l\'art d\'ajuster les catégories jusqu\'à ce que les chiffres coïncident.',
  },

  psychologie: {
    dominante: 'Intégrité comptable. Pour lui, l\'équilibre budgétaire est une forme de vérité — un compte qui colle dit que tout s\'est bien passé. Il a transféré cette conviction dans des domaines où elle ne s\'applique pas.',
    mecanisme_de_defense: 'La catégorie budgétaire comme ontologie. Ce qui a une ligne budgétaire existe dans un cadre légitime. Ce qui n\'en a pas n\'existe pas. Il a appris à créer des lignes budgétaires pour les choses qui existent mais ne devraient pas.',
    contradiction_interne: 'Il est devenu expert en dissimulation comptable sans jamais avoir décidé de l\'être — chaque ajustement était une extension technique d\'une compétence légitime. Il n\'y a pas eu de moment où il a choisi.',
    rapport_aux_autres: 'Ses collègues le respectent pour son efficacité. Il ne cherche pas à être aimé — l\'approbation qui compte pour lui est l\'approbation des chiffres, pas des personnes.',
    vision_du_monde: 'L\'Empire fonctionne parce que ses finances fonctionnent. Les gens qui gèrent les finances correctement permettent à tout le reste d\'exister. Cette conviction est honnête et lui sert de justification pour des choses qu\'elle ne justifie pas.',
  },

  histoire: {
    enfance: {
      titre: 'Le fils qui équilibrait les livres',
      contenu: 'Fils d\'un commerçant de province, il tenait les livres de compte de la famille depuis l\'âge de 9 ans. À 15 ans il avait identifié 3 erreurs dans les audits de son père et les avait corrigées sans en parler. Ce talent pour trouver ce qui ne colle pas et le faire coller était son identité avant d\'avoir un métier.',
    },
    arrivee: {
      titre: 'L\'ascension par les chiffres',
      contenu: 'Recruté à la Citadelle à 27 ans comme administrateur junior. Promu 4 fois en 10 ans — chaque promotion fondée sur la même compétence. À 38 ans il gérait les budgets de plusieurs sections, dont la logistique des transferts d\'Élus. La section s\'appelait "Ressources Élémentaires — Mobilité". Les lignes budgétaires étaient claires.',
    },
    premier_conflit: {
      titre: 'La première anomalie',
      contenu: 'Il y a 3 ans, les chiffres ne collaient pas. Les coûts de "relocalisation d\'Élus" dépassaient les catégories standards de transfert logistique de 340% sans explication documentée. Il a demandé une clarification. On lui a répondu que certains transferts requéraient des "préparations spécialisées" non détaillables. Il a créé une sous-catégorie "préparations spécialisées" et équilibré le budget.',
    },
    revelation: {
      titre: 'La technique des dépenses de représentation',
      contenu: 'Les sous-catégories se sont multipliées. Il a utilisé exactement la même technique qu\'il avait apprise pour les dépenses de représentation des officiels — des frais légitimes mais impossibles à détailler publiquement, qu\'on classe dans des catégories suffisamment vagues pour être inauditables sans être fausses. La technique était connue, acceptable pour les dépenses de représentation. Il l\'a appliquée à des lignes qui concernaient des personnes sans noter la différence.',
    },
    etat_actuel: {
      titre: 'Les comptes qui coïncident',
      contenu: 'Ses budgets sont équilibrés. Chaque relocalisation a une ligne. Les lignes ne décrivent pas ce qu\'elles financent. Il n\'a pas demandé ce qu\'elles financent depuis la première clarification refusée — les chiffres équilibrés lui signalent que tout s\'est bien passé. Telvara (249) est la source de certaines anomalies qui créent des écarts dans ses lignes. Il ne sait pas ce que Telvara perçoit. Il sait seulement que ses classifications créent des irrégularités budgétaires qu\'il doit compenser.',
    },
  },

  evenements_narratifs: [
    {
      id: 'ormavel_telvara_anomalies',
      titre: 'Les irrégularités de Telvara',
      description: 'Quand Telvara (249) classe des Élus en "attente d\'interprétation" au lieu de les transmettre immédiatement, cela crée des retards dans les flux logistiques — et donc des irrégularités dans les budgets d\'Ormavel. Il a contacté son intermédiaire 3 fois pour signaler les décalages. L\'intermédiaire a répondu que c\'était temporaire. Ormavel a créé une ligne "ajustements de transition" pour absorber les écarts.',
      personnages_impliques: [249],
      declencheur: 'Classements retardés de Telvara qui perturbent les flux budgétaires',
      consequence: 'Compensation budgétaire automatique — Ormavel obscurcit involontairement les traces de la résistance de Telvara',
    },
    {
      id: 'ormavel_rhavel_logistique',
      titre: 'Le transport et l\'argent',
      description: 'Rhavel (241) coordonne les routes de transport — Ormavel finance les lignes que Rhavel opère. Ils ne communiquent pas directement. Leurs noms apparaissent dans les mêmes documents de validation mais dans des colonnes différentes. Si quelqu\'un recoupait les deux colonnes, le lien entre le financement et l\'opération deviendrait visible. Les deux colonnes sont dans des archives différentes.',
      personnages_impliques: [241],
      declencheur: 'Structure administrative de séparation financement/opération',
      consequence: 'Traçabilité fragmentée par conception — visible seulement en recoupant des archives séparées',
    },
    {
      id: 'ormavel_audit_impossible',
      titre: 'L\'inauditable',
      description: 'Un auditeur externe a demandé l\'accès aux budgets de "Ressources Élémentaires — Mobilité" il y a 8 mois. Sa demande a été redirigée vers la supervision sécurisée. Ormavel a été informé de la redirection, a noté "accès restreint — audit externe non autorisé" dans le registre, et a continué. Si la demande avait abouti, ses catégories auraient résisté à l\'examen formel — elles sont techniquement correctes. Ce qu\'elles financent n\'apparaît nulle part.',
      personnages_impliques: [],
      declencheur: 'Tentative d\'audit externe',
      consequence: 'Système résistant à l\'audit formel par opacité de catégorie, pas par falsification',
    },
  ],

  arcs: ['arc_convergence_drain', 'arc_citadelle_empire'],
  position_dans_arc: 'Rouage financier. Il rend les opérations possibles sans les voir. Son expertise est ce qui maintient les chiffres inauditables.',

  relations: [
    { id: 241, nom: 'Rhavel', type: 'contact_nécessaire', note: 'Finance les flux logistiques qu\'il coordonne. Noms dans les mêmes documents, colonnes différentes.' },
    { id: 249, nom: 'Telvara', type: 'contact_nécessaire', note: 'Ses classifications retardées créent des irrégularités budgétaires qu\'Ormavel compense automatiquement.' },
  ],

  combat: {
    sorts: [
      'Stabilisation rocheuse (Roche) — renforcement temporaire d\'une structure ou d\'une position',
      'Résistance normale (Normal) — réduction des effets élémentaires entrants pendant une durée limitée',
    ],
  },

  image_prompts: [
    {
      id: 'ormavel_bureau',
      description: 'Ormavel à son bureau, entouré de colonnes de chiffres et de registres. Ses mains tiennent un stylet. L\'expression est celle de quelqu\'un en train de résoudre un problème technique — concentration, satisfaction légère à mesure que les colonnes s\'équilibrent. Ce qu\'elles représentent n\'est pas dans le cadre.',
      style: 'réaliste humain, lumière de bureau impérial, papiers et registres, tons brun et gris',
    },
  ],

  lore_long: `Ormavel n'a jamais décidé de dissimuler quoi que ce soit.

La première fois que les chiffres ne collaient pas, il a demandé une clarification. C'était légitime. La clarification a été refusée. Il a créé une catégorie. C'était technique. La deuxième fois, il avait déjà la catégorie — il a juste ajusté les chiffres. La cinquième fois, il ne se souvient plus de la première.

La technique des dépenses de représentation est une technique honnête dans son contexte d'origine. Les officiels de haut rang ont des dépenses légitimes mais non détaillables — repas de travail, déplacements diplomatiques, cadeaux protocolaires. On crée des catégories vagues, on les rend inauditables sans les rendre fausses. Il a appris ça à 34 ans et l'a considéré comme un outil neutre.

Maintenant il l'utilise sur des lignes qui financent des personnes.

Il ne sait pas ce que ces personnes deviennent. Il n'a pas cherché à savoir depuis la première clarification refusée — l'absence de clarification lui a signalé que c'était une information à laquelle il n'avait pas accès, et les informations à accès restreint ne sont pas de sa responsabilité.

Ses budgets sont équilibrés. Chaque centime est comptabilisé. C'est son identité professionnelle depuis 22 ans.

Telvara crée des irrégularités dans ses lignes quand elle retarde ses classifications. Il la compense automatiquement. Il obscurcit sans le savoir les traces de ce qu'elle fait. Ce serait une ironie que lui-même ne trouverait pas drôle s'il la comprenait — il pense que la rigueur comptable est une forme de vérité, et là où il équilibre, il efface.`,
};

export default ormavel;
