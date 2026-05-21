import type { PersonnageLoreComplet } from '../../../lore-types';

const sarevolt: PersonnageLoreComplet = {
  id: 350,
  nom: 'Sarevolt',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Solide, avec la posture d\'un commandant qui ne peut pas se permettre de paraître incertain. Les gens qui le suivent ont besoin de voir quelqu\'un qui sait ce qu\'il fait — même quand il ne le sait pas entièrement.',
    peau: 'Brun foncé Homme-Lien avec des cicatrices de terrain aux mains et au menton — des marques de 15 ans d\'opérations dans des zones contestées.',
    yeux: 'Brun très foncé. Ils calculent les sorties d\'une pièce avant les entrées. Ce réflexe est permanent.',
    vetements: 'Tenue opérationnelle sans marqueur de faction — dans l\'Isthme, les marqueurs visibles sont des cibles. Fonctionnelle, discrète, avec des poches suffisantes pour les ressources minimales d\'une extraction.',
    signes_particuliers: 'Il compte. Toujours. Les personnes présentes dans un espace, les sorties disponibles, les ressources disponibles. Ce comptage est visible pour ceux qui le connaissent.',
  },

  psychologie: {
    dominante: 'Protection des 39 enfants Élus de Virex avec des ressources structurellement insuffisantes. Ces enfants sont nés avec des capacités élémentaires dans une ville où l\'Empire installe des checkpoints. Chaque enfant identifié est un risque. Chaque checkpoint supplémentaire réduit les options d\'extraction.',
    mecanisme_de_defense: 'La priorité des 39 comme cadre de toutes les décisions. Quand il ne sait pas quoi choisir, il choisit ce qui protège les 39. Cette règle simplifie des décisions impossibles.',
    contradiction_interne: 'Il protège des enfants en leur donnant un refuge — mais ce refuge les concentre. Si l\'Empire localise le refuge, 39 cibles sont en un seul endroit. La dispersion protège mieux individuellement. La concentration permet une protection collective. Il a choisi la concentration. Il n\'est pas sûr que c\'est le bon choix.',
    rapport_aux_autres: 'Sarevorn (261) est son contact réseau Dissident — il coordonne les ressources au-delà de Virex. Kareth (179) est un contact local avec une connaissance du terrain de l\'Isthme que Sarevolt n\'a pas.',
    vision_du_monde: 'L\'Empire identifie et extrait les Élus. Cette extraction n\'est pas documentée comme ce qu\'elle est. Il la documente. La documentation ne suffit pas — il faut aussi empêcher.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier enfant',
      contenu: 'À 28 ans, il avait trouvé une fillette de 7 ans cachée dans un bâtiment abandonné de Virex — un Élu dont les parents avaient été extraits la semaine précédente. Elle n\'avait nulle part où aller. Il l\'avait amenée dans ce qui était devenu le premier refuge. Il ne savait pas que ce serait 39.',
    },
    arrivee: {
      titre: 'La construction du réseau',
      contenu: 'Sur 4 ans, le refuge avait grandi de 1 à 39 enfants — des Élus dont les parents avaient disparu, des Élus dont les familles avaient demandé protection, des Élus trouvés avant l\'Empire. Chaque arrivée avait posé la question des ressources. Sarevorn (261) avait fourni des ressources Dissidentes. Elles n\'étaient jamais suffisantes.',
    },
    premier_conflit: {
      titre: 'Le premier checkpoint',
      contenu: 'À 33 ans, Thyrkael (351) avait établi le premier checkpoint à l\'entrée de Virex. Les mouvements des 39 enfants avaient dû être entièrement reconsidérés. Les extractions régulières de ravitaillement étaient devenues risquées. Il avait reconfiguré les routes en 72 heures.',
    },
    revelation: {
      titre: 'Le problème de la concentration',
      contenu: 'Kareth (179) lui avait posé la question directement : si l\'Empire localisait le refuge, 39 enfants étaient en un endroit. La dispersion serait plus sûre individuellement. Il n\'avait pas eu de réponse satisfaisante. Il avait maintenu la concentration en ajoutant des plans d\'extraction d\'urgence pour chaque enfant.',
    },
    etat_actuel: {
      titre: 'Le quatrième checkpoint',
      contenu: 'Thyrkael (351) a installé un quatrième checkpoint cette semaine. Les routes de ravitaillement sont maintenant toutes sous surveillance potentielle. Sarevolt a 3 routes alternatives non encore utilisées. Il espère qu\'elles sont suffisantes. Il ne peut pas les tester sans les exposer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sarevolt_quatrieme_checkpoint',
      titre: 'Le siège progressif',
      description: 'Quatre checkpoints autour de Virex. Les routes de ravitaillement standard sont sous surveillance. Sarevolt a 3 routes alternatives non exposées — il les réserve. Si Thyrkael (351) installe un 5ème checkpoint, les routes alternatives pourraient ne pas suffire. Il n\'a pas encore demandé à Sarevorn (261) d\'escalader.',
      personnages_impliques: [261, 179],
      declencheur: 'Quatrième checkpoint de Thyrkael réduisant les routes de ravitaillement',
      consequence: 'Accès au refuge progressivement compromis — ressources en tension, escalade à Sarevorn non encore demandée',
    },
    {
      id: 'sarevolt_plan_extraction',
      titre: 'Les plans d\'extraction individuels',
      description: 'Il a un plan d\'extraction individuel pour chacun des 39 enfants — des routes et des contacts différents pour chaque enfant si le refuge est compromis. Ces plans supposent que l\'extraction peut se faire de façon organisée. Une extraction d\'urgence chaotique ne suivrait pas ces plans. Il n\'a pas de plan pour l\'urgence chaotique.',
      personnages_impliques: [179],
      declencheur: 'Réalisation du problème de la concentration',
      consequence: 'Plans d\'extraction individuels prêts mais dépendants d\'un ordre suffisant — lacune sur le scénario chaotique',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Commandant Dissident protégeant 39 enfants Élus à Virex. Les checkpoints de Thyrkael (351) réduisent progressivement ses options. Il maintient la concentration des enfants malgré les risques que ça implique.',

  relations: [
    { id: 261, nom: 'Sarevorn', type: 'allié', note: 'Coordonne les ressources Dissidentes au-delà de Virex. Source principale de ravitaillement.' },
    { id: 179, nom: 'Kareth', type: 'allié', note: 'Connaissance locale du terrain de l\'Isthme. A posé la question de la concentration vs dispersion.' },
  ],

  combat: {
    sorts: [
      'Frappe de commandant (Combat) — coup concentré qui désorganise la formation adverse — rupture de ligne',
      'Résistance normale (Normal) — absorption d\'un impact supérieur à ce que sa taille devrait permettre — défense',
      'Extraction de terrain (Combat + Normal) — déplacement rapide d\'une zone de danger en portant un tiers — évacuation',
    ],
  },

  image_prompts: [
    {
      id: 'sarevolt_refuge',
      description: 'Sarevolt dans le refuge des 39 enfants à Virex — un espace intérieur fonctionnel, dense. Des enfants d\'âges variés en arrière-plan. Il est debout, en train de regarder une carte de Virex avec les checkpoints marqués. Son expression est concentrée — il calcule.',
      style: 'réaliste commandant Homme-Lien, refuge avec enfants en arrière-plan, carte des checkpoints, Virex intérieur',
    },
  ],

  lore_long: `Sarevolt protège 39 enfants Élus à Virex avec des ressources structurellement insuffisantes.

Thyrkael (351) a installé 4 checkpoints autour de Virex. Les routes de ravitaillement standard sont sous surveillance. Il lui reste 3 routes alternatives non exposées — il les réserve.

Il maintient les 39 dans un refuge concentré. Kareth (179) lui a posé la question : si l'Empire localise le refuge, 39 cibles en un endroit. Il a des plans d'extraction individuels. Il n'a pas de plan pour une urgence chaotique.

Il n'a pas encore escaladé à Sarevorn (261). Il cherche d'abord à résoudre avec ce qu'il a.`,
};

export default sarevolt;
