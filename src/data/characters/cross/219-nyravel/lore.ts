import type { PersonnageLoreComplet } from '../../../lore-types';

const nyravel: PersonnageLoreComplet = {
  id: 219,
  nom: 'Nyravel',
  element: 'Combat',
  element2: 'Feu',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Homme-Lien de 43 ans, représentant militaire — corpulence de combattant devenu diplomate. La posture reste militaire; les gestes sont devenus plus mesurés.',
    peau: 'Ton méditerranéen avec des marques de service actif avant sa transition vers la représentation.',
    yeux: 'Gris avec une qualité de quelqu\'un qui négocie en estimant les forces en présence.',
    vetements: 'Tenue de représentant militaire de la Confédération — formelle avec des éléments de distinction militaire.',
    signes_particuliers: 'Il représente la Confédération dans les négociations avec Varkhôl sur des questions militaires et élémentaires. Son double élément lui donne une crédibilité de terrain que les diplomates civils n\'ont pas.',
  },

  psychologie: {
    dominante: 'Représentant militaire de la Confédération dans les négociations avec Varkhôl. Son double élément Combat/Feu lui donne une compréhension des réalités Pyriens que ses collègues Homme-Lien purs n\'ont pas. Il utilise cette compréhension pour formuler des propositions qui résonnent avec les interlocuteurs Pyriens.',
    mecanisme_de_defense: 'La légitimité de terrain. Il parle la langue élémentaire de ses interlocuteurs — pas métaphoriquement. Sa compréhension pratique du Feu dans un contexte de combat lui donne une crédibilité que les négociateurs civils n\'ont pas.',
    contradiction_interne: 'Sa compréhension des réalités Pyriens lui permet de formuler des propositions qui fonctionnent — mais aussi de comprendre quand ses interlocuteurs lui disent quelque chose qui semble vrai et ne l\'est pas. Il utilise cette compréhension dans les deux directions.',
    rapport_aux_autres: 'Thyven (62) est dans son réseau — l\'administration impériale locale dont les positions affectent les négociations. La Rupture Thermique de Varkhôl est son contexte de négociation — les séquelles de la Rupture sont une des matières de ses discussions.',
    vision_du_monde: 'Les négociations militaires sont plus honnêtes quand les deux parties comprennent les réalités de terrain. Il représente une position. Il écoute aussi l\'autre.',
  },

  histoire: {
    enfance: {
      titre: 'Le service militaire',
      contenu: 'Service actif dans la Confédération depuis 20 ans. Son double élément lui avait permis d\'opérer dans des zones Pyrien avec une efficacité que ses collègues ne pouvaient pas atteindre. Il avait été transféré vers la représentation à 38 ans.',
    },
    arrivee: {
      titre: 'Les négociations',
      contenu: 'Sa première mission de représentation avait été les négociations post-Rupture Thermique avec des représentants de Varkhôl. Son double élément lui avait donné une compréhension intuitive des positions Pyrien — une compréhension qu\'il avait mise au service de la Confédération.',
    },
    premier_conflit: {
      titre: 'La position impossible',
      contenu: 'Il avait été contraint de défendre une position de la Confédération qu\'il savait irréaliste — une demande qui ne correspondait pas à ce que Varkhôl pouvait offrir. Il avait négocié le meilleur accord possible dans les limites de sa mission. L\'accord était sous-optimal pour tous.',
    },
    revelation: {
      titre: 'La représentation et ses limites',
      contenu: 'Il avait compris que représenter la Confédération signifiait parfois défendre des positions qu\'il ne formulerait pas lui-même. Sa marge de manœuvre était dans le comment, pas dans le quoi.',
    },
    etat_actuel: {
      titre: 'Le représentant',
      contenu: 'Il négocie. Les discussions post-Rupture continuent. Les positions évoluent lentement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyravel_negociation',
      titre: 'La négociation au bord de la rupture',
      description: 'Nyravel représente la Confédération dans des négociations avec Varkhôl. Si la Rupture Thermique produit une nouvelle crise — un incident qui rend les positions actuelles insoutenables — sa capacité à comprendre les deux côtés de la table pourrait être la différence entre une rupture des négociations et un accord d\'urgence.',
      personnages_impliques: [62],
      declencheur: 'Nouvelle crise liée à la Rupture rendant les positions actuelles des négociations insoutenables',
      consequence: 'Nyravel naviguant entre les positions officielles et sa compréhension des réalités de terrain pour trouver un accord sous pression',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Représentant militaire de la Confédération dans les négociations avec Varkhôl sur les séquelles de la Rupture Thermique. Double élément Combat/Feu lui donnant une crédibilité de terrain.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administration impériale locale dont les positions affectent les négociations.' },
  ],

  combat: {
    sorts: [
      'Frappe diplomatique (Combat/Feu) — démonstration physique de capacité dans un contexte de négociation — argument de force',
      'Défense de représentation (Combat) — protection de position sans escalade — survie diplomatique',
    ],
  },

  image_prompts: [
    {
      id: 'nyravel_negociation',
      description: 'Nyravel à une table de négociation entre représentants de la Confédération et de Varkhôl dans l\'Isthme — un Homme-Lien de 43 ans dont la posture est militaire et les mots sont diplomatiques. Il comprend ce que l\'interlocuteur Pyrien en face de lui ressent parce qu\'il a son propre élément Feu. Il utilise cette compréhension.',
      style: 'réaliste Homme-Lien représentant militaire, Isthme, négociations Confédération-Varkhôl, double élément Combat/Feu, compréhension de terrain',
    },
  ],

  lore_long: `Nyravel représente la Confédération dans les négociations avec Varkhôl sur les séquelles de la Rupture Thermique. Son double élément Combat/Feu lui donne une crédibilité de terrain que les négociateurs civils n'ont pas.

Il comprend les positions Pyrien parce qu'il en a un élément. Cette compréhension fonctionne dans les deux directions.

Il défend les positions de la Confédération. Sa marge de manœuvre est dans le comment, pas dans le quoi.`,
};

export default nyravel;
