import type { PersonnageLoreComplet } from '../../../lore-types';

const vrassyn: PersonnageLoreComplet = {
  id: 70,
  nom: 'Vrassyn',
  element: 'Feu',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Pyrien de 45 ans, mince avec la posture de l\'administrateur — droit, mais d\'une droiture qui évite le contact plutôt que de l\'assumer. Ses mains bougent en gérant des documents, pas des personnes.',
    peau: 'Brune Pyrien avec une luminescence rouge très faible, presque éteinte. Soit son élément est naturellement discret, soit il le contrôle par habitude professionnelle.',
    yeux: 'Rouges, mais avec une qualité d\'évitement. Il regarde les dossiers quand il parle aux gens.',
    vetements: 'Tenue administrative impériale de la zone de deuil — officielle, avec les insignes de sa fonction. Propre même dans les décombres.',
    signes_particuliers: 'Ses rapports minimisent les chiffres de victimes et de déplacés post-Rupture. Ce n\'est pas une erreur. C\'est une décision.',
  },

  psychologie: {
    dominante: 'Administrateur impérial de la zone de deuil post-Rupture. Sa mission est de gérer la transition — logistiquement et narrativement. "Gérer narrativement" signifie des rapports dont les chiffres sont gérables. Il fait ce qu\'on lui a demandé de faire.',
    mecanisme_de_defense: 'L\'administration comme distance. Les chiffres ne sont pas des personnes. Il gère des chiffres.',
    contradiction_interne: 'Il a vu les décombres. Il sait que ses chiffres sont faux. Il les écrit quand même. Cette décision est quelque chose qu\'il a appris à ne pas regarder.',
    rapport_aux_autres: 'Pyrion (6) — il connaît son réseau sans le rejoindre. Le réseau est utile pour savoir ce qui circule. Vrassyn l\'observe sans y participer.',
    vision_du_monde: 'L\'Empire gère les crises. Gérer une crise, c\'est la rendre gérable. Des chiffres gérables sont une partie de ça. Ce raisonnement est complet si on ne pense pas trop à ce qu\'il efface.',
  },

  histoire: {
    enfance: {
      titre: 'L\'administration',
      contenu: 'Formé dans les services administratifs de l\'Empire depuis l\'âge de 18 ans. Il n\'avait pas demandé à être affecté à Varkhôl — c\'était une promotion de facto après la Rupture.',
    },
    arrivee: {
      titre: 'La zone de deuil',
      contenu: 'Arrivé à Varkhôl 3 mois après la Rupture pour administrer la "zone de reconstruction et de deuil". Ses premières semaines avaient été un choc qu\'il avait géré en se concentrant sur les procédures.',
    },
    premier_conflit: {
      titre: 'Les premiers rapports',
      contenu: 'Son premier rapport contenait des chiffres précis. Son supérieur l\'avait renvoyé avec une note : "chiffres à réviser". Il avait compris ce que "réviser" signifiait. Il avait révisé.',
    },
    revelation: {
      titre: 'La routine',
      contenu: 'Après 6 mois, minimiser les chiffres était devenu une procédure standard. Il ne pensait plus à ce que ça effaçait. Il pensait aux délais de soumission.',
    },
    etat_actuel: {
      titre: 'Les dossiers',
      contenu: 'Ses rapports circulent dans l\'Empire. Ils sont cités dans des documents officiels. Les chiffres réels — ceux qu\'il n\'a jamais écrits — existent seulement dans sa mémoire.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vrassyn_chiffres',
      titre: 'Les chiffres réels',
      description: 'Vrassyn est la seule personne dans le système administratif impérial qui connaît les vrais chiffres de la Rupture. Ces chiffres sont dans sa mémoire, pas dans ses rapports. Si quelqu\'un les lui demandait directement, il devrait décider quoi répondre.',
      personnages_impliques: [6],
      declencheur: 'Quelqu\'un demandant à Vrassyn les chiffres réels plutôt que les officiels',
      consequence: 'Vrassyn choisissant entre la loyauté impériale et la vérité qu\'il porte seul',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Administrateur impérial de la zone de deuil post-Rupture. Ses rapports minimisent les chiffres. Il sait que ses chiffres sont faux.',

  relations: [
    { id: 6, nom: 'Pyrion', type: 'contact', note: 'Connaît son réseau. L\'observe sans y participer.' },
  ],

  combat: {
    sorts: [
      'Contrôle de flamme (Feu) — manipulation précise des sources de chaleur — étouffement discret sans traces',
      'Résistance thermique (Feu) — protection passive contre les éléments ambiants',
    ],
  },

  image_prompts: [
    {
      id: 'vrassyn_rapport',
      description: 'Vrassyn dans son bureau administratif des zones de deuil — un Pyrien mince sur ses documents, écrivant des chiffres. Les décombres sont visibles par sa fenêtre. Ses chiffres ne correspondent pas à ce qu\'il voit. Son expression est de quelqu\'un qui a appris à ne pas regarder cette différence.',
      style: 'réaliste Pyrien administrateur impérial, bureau avec vue sur décombres, chiffres falsifiés, distance administrative, post-Rupture',
    },
  ],

  lore_long: `Vrassyn administre la zone de deuil post-Rupture de Varkhôl pour l'Empire. Ses rapports minimisent les chiffres de victimes.

Il sait que ses chiffres sont faux. Il les écrit quand même. Cette décision est quelque chose qu'il a appris à ne pas regarder.

Les vrais chiffres existent seulement dans sa mémoire.`,
};

export default vrassyn;
