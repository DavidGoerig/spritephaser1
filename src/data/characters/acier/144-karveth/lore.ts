import type { PersonnageLoreComplet } from '../../../lore-types';

const karveth: PersonnageLoreComplet = {
  id: 144,
  nom: 'Karveth',
  element: 'Acier',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 49 ans, fabricant — la corpulence d\'un artisan qui manipule des matériaux difficiles quotidiennement.',
    peau: 'Pierre grise avec des inclusions métalliques distinctives — son élément Acier est intégré à son corps d\'une façon qui affecte sa résistance aux contaminants.',
    yeux: 'Gris-argent avec une qualité pragmatique et un peu perplexe. Il voit que ses outils fonctionnent sans en comprendre la raison.',
    vetements: 'Tenue de fabricant avec équipement de protection minimale — ses outils résistent à l\'air fongique mieux que son équipement de protection.',
    signes_particuliers: 'Ses outils d\'extraction résistent à l\'air fongique de la Fosse Interdite. Il ne comprend pas pourquoi. Ses clients viennent de loin pour cette propriété.',
  },

  psychologie: {
    dominante: 'Fabricant d\'outils d\'extraction à Ormn-Dur. Ses outils ont une propriété particulière : ils résistent à l\'air fongique de la Fosse Interdite mieux que les outils standard. Cette propriété est probablement liée à son élément Acier et à sa méthode de forge spécifique. Il ne l\'a jamais analysée — il fabrique ce qui fonctionne.',
    mecanisme_de_defense: 'Le pragmatisme artisanal. Il fabrique ce qui marche. Analyser pourquoi ça marche n\'est pas son rôle.',
    contradiction_interne: 'Ses outils sont recherchés pour une propriété qu\'il ne comprend pas. Si cette propriété est liée à une technique qu\'il applique intuitivement, quelqu\'un pourrait l\'analyser et la reproduire sans lui. Sa valeur unique repose sur une ignorance.',
    rapport_aux_autres: 'Vorath (134) est dans son réseau — il a fabriqué des éléments pour les grilles de la Fosse. La Fosse Interdite est son principal marché.',
    vision_du_monde: 'Un outil qui fonctionne est un bon outil. La raison pour laquelle il fonctionne est secondaire. Cette philosophie pragmatique l\'a bien servi — jusqu\'à maintenant.',
  },

  histoire: {
    enfance: {
      titre: 'La forge',
      contenu: 'Formation de forgeron à Ormn-Dur. Spécialisation dans les outils d\'extraction souterraine — une niche précise dans un marché très spécialisé.',
    },
    arrivee: {
      titre: 'La propriété',
      contenu: 'Il y a 10 ans, un client avait remarqué que ses outils maintenaient leur tranchant dans la zone fongique de la Fosse Interdite là où les autres outils se dégradaient. Il avait regardé ses matériaux et sa méthode sans trouver d\'explication évidente. Il avait continué à fabriquer de la même façon.',
    },
    premier_conflit: {
      titre: 'La demande d\'analyse',
      contenu: 'Un chercheur de la Technocratie avait demandé à analyser sa méthode de forge. Il avait accepté. L\'analyse n\'avait rien trouvé d\'évident. Le chercheur était reparti perplexe. Karveth avait continué à fabriquer.',
    },
    revelation: {
      titre: 'La valeur non-comprise',
      contenu: 'Il avait compris que sa propriété inconnue était maintenant sa réputation. Des clients venaient spécifiquement pour ça. Sa valeur reposait sur quelque chose qu\'il ne comprenait pas.',
    },
    etat_actuel: {
      titre: 'La fabrication',
      contenu: 'Il fabrique. Ses outils résistent à l\'air fongique. Il ne sait toujours pas pourquoi.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karveth_propriete',
      titre: 'La propriété que personne ne comprend',
      description: 'Les outils de Karveth résistent à l\'air fongique de la Fosse Interdite. Si quelqu\'un — un chercheur, Dravek (135), Graveth (43) — analyse sérieusement cette propriété et la comprend, ses outils pourraient être reproduits sans lui. Ou la compréhension de cette propriété pourrait révéler quelque chose sur la Fosse elle-même.',
      personnages_impliques: [134],
      declencheur: 'Quelqu\'un analysant sérieusement la propriété de ses outils',
      consequence: 'Propriété comprise — implications sur la Fosse et sur la valeur unique de Karveth',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Fabricant d\'outils résistant à l\'air fongique. Ne comprend pas pourquoi. Sa valeur repose sur cette incompréhension.',

  relations: [
    { id: 134, nom: 'Vorath', type: 'contact', note: 'A fabriqué des éléments pour les grilles de la Fosse.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'acier (Acier) — impact métallique — attaque directe',
      'Outil de combat (Acier) — arme improvisée — polyvalence',
    ],
  },

  image_prompts: [
    {
      id: 'karveth_forge',
      description: 'Karveth dans sa forge à Ormn-Dur — un Chthonien de 49 ans fabriquant un outil d\'extraction. L\'outil est robuste, précis. À côté, un outil usagé qui a servi dans la Fosse Interdite — il a maintenu son tranchant là où d\'autres auraient cédé. Son expression est de quelqu\'un qui voit un résultat sans comprendre entièrement sa cause.',
      style: 'réaliste Chthonien forgeron, Ormn-Dur, outils résistant à l\'air fongique, Fosse Interdite, pragmatisme artisanal',
    },
  ],

  lore_long: `Les outils de Karveth résistent à l'air fongique de la Fosse Interdite. Il ne comprend pas pourquoi. Cette propriété est sa réputation.

Sa méthode a été analysée par la Technocratie — sans résultat. Il fabrique de la même façon depuis 10 ans.

Si quelqu'un comprend cette propriété, ses outils pourraient être reproduits sans lui.`,
};

export default karveth;
