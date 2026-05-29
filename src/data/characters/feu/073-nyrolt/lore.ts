import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrolt: PersonnageLoreComplet = {
  id: 73,
  nom: 'Nyrolt',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: 'Pyrien de 48 ans, corpulent avec les épaules du négociant qui a traversé des routes difficiles. Son corps dit à la fois la richesse et le voyage — il a gagné ses marges sur des routes entre deux régions.',
    peau: 'Brune Pyrien avec une luminescence rouge-orange aux mains. Ses paumes sont épaisses — des années de poignées de main commerciales dans des conditions variables.',
    yeux: 'Rouges avec la qualité de quelqu\'un qui calcule constamment. Il évalue les situations en termes de marges et de risques.',
    vetements: 'Tenue de voyage de qualité — ni trop modeste ni trop ostentatoire. Il voyage entre Varkhôl et Ormn-Dur régulièrement. Sa tenue est conçue pour être présentable dans les deux villes.',
    signes_particuliers: 'Il profite de la tension politique entre Varkhôl et Ormn-Dur. La tension crée des inefficacités — les inefficacités créent des marges. Il ne crée pas la tension. Il la monétise.',
  },

  psychologie: {
    dominante: 'Négociant entre Varkhôl et Ormn-Dur depuis 20 ans. Il a compris tôt que les conflits politiques créent des marchés privés. La Rupture et les tensions post-Rupture ont amplifié ces marchés. Il appartient au Parti de l\'Acier parce que l\'alliance Varkhôl-Ormn-Dur lui est commercialement favorable.',
    mecanisme_de_defense: 'L\'intérêt commercial comme neutralité apparente. Il est de tous les côtés parce que tous les côtés ont besoin de ce qu\'il transporte.',
    contradiction_interne: 'Il prend des marges sur une tension politique qui a des victimes réelles. Ce n\'est pas une contradiction qu\'il examine.',
    rapport_aux_autres: 'Thryss (4) est un client important — les connexions Ormn-Dur passent souvent par ses commandes. La Rupture est un contexte commercial dans ses calculs.',
    vision_du_monde: 'Les tensions politiques sont permanentes. Ce qui varie, c\'est l\'accès aux routes. Lui a les routes. C\'est suffisant.',
  },

  histoire: {
    enfance: {
      titre: 'Le commerce entre régions',
      contenu: 'Né dans une famille de petits commerçants à Varkhôl. À 18 ans, il avait fait son premier trajet Varkhôl-Ormn-Dur en tant qu\'assistant de chargement. À 25 ans, il avait son propre stock et ses propres routes.',
    },
    arrivee: {
      titre: 'La tension politique',
      contenu: 'Les tensions politiques entre les deux villes avaient compliqué les routes officielles. Nyrolt avait développé des routes alternatives moins contrôlées. Ses marges avaient augmenté avec le risque.',
    },
    premier_conflit: {
      titre: 'Le Parti de l\'Acier',
      contenu: 'Il avait rejoint le Parti de l\'Acier parce qu\'une alliance formelle entre Varkhôl et Ormn-Dur lui aurait simplifié la vie commercialement. L\'idéologie était secondaire. Les membres du Parti avaient de bons réseaux.',
    },
    revelation: {
      titre: 'La Rupture comme opportunité',
      contenu: 'La Rupture Thermique avait perturbé les routes officielles. Nyrolt avait les routes alternatives. Il avait triplé son chiffre d\'affaires en 18 mois. Il n\'avait pas formulé ça comme "profiter de la catastrophe". Il l\'avait formulé comme "rester actif quand d\'autres s\'arrêtent".',
    },
    etat_actuel: {
      titre: 'Les routes',
      contenu: 'Il continue à négocier entre les deux villes. Ses routes sont discrètes. Son chiffre d\'affaires est stable. La tension politique continue à générer des marges.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrolt_routes',
      titre: 'Ce qui passe par ses routes',
      description: 'Nyrolt connaît les routes discrètes entre Varkhôl et Ormn-Dur mieux que n\'importe qui. Ces routes peuvent servir à des échanges commerciaux — ou à autre chose. Si une faction comprend leur valeur stratégique, Nyrolt devient une ressource ou une cible.',
      personnages_impliques: [4],
      declencheur: 'Une faction réalisant la valeur stratégique des routes de Nyrolt',
      consequence: 'Nyrolt forcé de choisir entre profitabilité commerciale et sécurité politique',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Négociant entre Varkhôl et Ormn-Dur. Profite de la tension politique. Parti de l\'Acier par intérêt commercial.',

  relations: [
    { id: 4, nom: 'Thryss', type: 'contact', note: 'Client important. Connexions Ormn-Dur.' },
  ],

  combat: {
    sorts: [
      'Frappe commerciale (Feu) — pas un combattant — utilise l\'élément Feu uniquement en dernier recours',
      'Résistance thermique (Feu) — protection contre les conditions climatiques extrêmes des routes',
    ],
  },

  image_prompts: [
    {
      id: 'nyrolt_route',
      description: 'Nyrolt sur une route entre Varkhôl et Ormn-Dur — un Pyrien corpulent de 48 ans avec un chargement, calculant mentalement ses marges. Son expression est de quelqu\'un qui voit les tensions politiques comme des colonnes de chiffres.',
      style: 'réaliste Pyrien négociant, route Varkhôl-Ormn-Dur, marges commerciales, tension politique monétisée',
    },
  ],

  lore_long: `Nyrolt négocie entre Varkhôl et Ormn-Dur depuis 20 ans. La tension politique entre les deux villes crée des marges commerciales qu'il monétise.

Parti de l'Acier par intérêt commercial. La Rupture a triplé son chiffre d'affaires.

Ses routes discrètes sont une ressource stratégique qu'il n'a pas encore été forcé de défendre.`,
};

export default nyrolt;
