import type { PersonnageLoreComplet } from '../../../lore-types';

const yrith: PersonnageLoreComplet = {
  id: 25,
  nom: 'Yrith',
  element: 'Vent',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 49 ans — une silhouette de survivant. Il a vécu dans des plateformes en ruines pendant 27 ans, et ça se voit dans la façon dont il occupe un espace : il ne présuppose pas que le sol sera là demain. Ses mouvements sont précis et économiques.',
    peau: 'Pâle Aéride avec des cicatrices de la Chute des Nuages — des marques de chute sur les bras et les épaules. Sa peau est plus exposée aux intempéries que la normale : il vit à ciel ouvert.',
    yeux: 'Gris-vert avec une qualité d\'évaluation des structures — il regarde les bâtiments pour leurs points de faiblesse, les plateformes pour leurs angles de chute potentiels. Une adaptation post-Chute.',
    vetements: 'Tenue de survie pratique — couches résistantes aux vents des strates moyennes. Des poches qui ferment hermétiquement. Rien qui se prend dans les ruines.',
    signes_particuliers: 'Il sait exactement comment tomber sans mourir. Ce n\'est pas de la bravade — c\'est une compétence acquise à force de vivre dans des structures instables. Les personnes qui le voient grimper sur des ruines s\'arrêtent de respirer. Il ne comprend pas pourquoi.',
  },

  psychologie: {
    dominante: 'Survie dans les ruines de la plateforme Ouest depuis 27 ans — il a choisi de rester là où il a tout perdu. Ce n\'est pas de la dépression : c\'est une affirmation que ce qui est là mérite d\'être habité même dans son état détruit.',
    mecanisme_de_defense: 'La compétence technique du survivant. Il a appris tout ce qu\'il fallait apprendre pour survivre dans les ruines — structure, vent, chutes, eau récupérée de la pluie. Sa vie est une réponse pratique à une situation pratique.',
    contradiction_interne: 'Il habite les ruines de ce que Talvyn (23) avait averti allait tomber, dans la région gouvernée par Serathis (24) qui n\'avait pas agi sur l\'avertissement. Il n\'est pas en colère contre Serathis — ou il l\'est, mais pas de la façon qu\'on pourrait attendre. Il l\'est contre l\'indifférence, pas contre la personne.',
    rapport_aux_autres: 'Caerra (28) vient le voir régulièrement — elle veut reconstruire la plateforme Ouest et a besoin de ce qu\'il sait sur les structures en ruines. Il collabore avec elle pas par espoir mais parce que son expertise est utile. Gelveth (108) vit sur une plateforme partielle adjacente — ils ne se parlent pas souvent mais se reconnaissent.',
    vision_du_monde: 'Les structures tombent. Les personnes survivent dans ce qui reste. Ce qui reste peut être habité si on sait comment. Demander que les structures ne tombent pas est une illusion — apprendre à vivre avec ce qui tombe est réel.',
  },

  histoire: {
    enfance: {
      titre: 'La plateforme Ouest',
      contenu: 'Il avait grandi sur la plateforme Ouest — une des plateformes des strates moyennes d\'Asterciel. Sa famille y vivait depuis deux générations. La plateforme avait 3 000 habitants quand il avait 22 ans.',
    },
    arrivee: {
      titre: 'La Chute des Nuages',
      contenu: 'À 22 ans, pendant la Chute des Nuages, la plateforme Ouest avait cédé. Il avait survécu en s\'accrochant à une section partielle qui n\'avait pas complètement chuté. La section partielle était toujours là. Il y vivait toujours.',
    },
    premier_conflit: {
      titre: 'Le refus d\'évacuation',
      contenu: 'À 25 ans, la Confédération avait proposé de l\'évacuer vers une plateforme sûre. Il avait refusé. On lui avait expliqué que les ruines étaient dangereuses. Il avait dit qu\'il savait comment vivre avec ce qui était dangereux. On lui avait offert une aide financière. Il avait refusé ça aussi.',
    },
    revelation: {
      titre: 'La rencontre avec Caerra',
      contenu: 'À 35 ans, Caerra (28) l\'avait contacté pour son projet de reconstruction. Elle voulait connaître les caractéristiques des structures de la plateforme Ouest depuis l\'intérieur — pas depuis les plans d\'avant la Chute, mais depuis ce qui restait. Il lui avait montré. Ils travaillaient ensemble depuis 14 ans.',
    },
    etat_actuel: {
      titre: 'Le cartographe des ruines',
      contenu: 'Il a cartographié chaque section de la plateforme Ouest — ce qui tient, ce qui cède, les points de tension, les zones récupérables. Ces cartes sont plus précises que n\'importe quel document officiel sur la plateforme. Caerra les utilise pour son projet. Talvyn (23) les a consultées pour comprendre pourquoi certaines sections ont tenu.',
    },
  },

  evenements_narratifs: [
    {
      id: 'yrith_reconstruction',
      titre: 'Le projet de Caerra',
      description: 'Caerra (28) a avancé son projet de reconstruction de la plateforme Ouest au point où elle a besoin de l\'expertise de Yrith pour identifier les sections récupérables. Cette collaboration l\'implique dans un projet de reconstruction d\'un lieu qu\'il a choisi de ne pas quitter — une convergence entre la survie solitaire et le retour potentiel d\'une communauté.',
      personnages_impliques: [28, 23],
      declencheur: 'Phase de reconstruction de Caerra nécessitant l\'expertise de terrain de Yrith',
      consequence: 'Implication dans un projet de communauté — conflit entre l\'identité du survivant solitaire et la reconstruction collective',
    },
    {
      id: 'yrith_defaillance',
      titre: 'La défaillance prévue par Talvyn',
      description: 'Talvyn (23) a prévu une défaillance dans les connexions centrales dans 8 à 12 semaines. Yrith est dans les zones qui seraient affectées si des plateformes des strates moyennes tombent. Talvyn lui a transmis l\'information directement. Yrith prépare ses positions de sécurité — pas d\'évacuation, des positions de sécurité.',
      personnages_impliques: [23, 108],
      declencheur: 'Avertissement de Talvyn sur la défaillance à venir',
      consequence: 'Préparation à une possible nouvelle chute — sans quitter les ruines',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Survivant de la plateforme Ouest habitant ses ruines depuis 27 ans. Expert de terrain pour le projet de reconstruction de Caerra (28). A reçu l\'avertissement de Talvyn sur la défaillance prévue.',

  relations: [
    { id: 28, nom: 'Caerra', type: 'allié', note: 'Travaille avec elle sur le projet de reconstruction depuis 14 ans. Sa carte des ruines est son expertise principale.' },
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'L\'a averti de la défaillance prévue. Ils se sont rencontrés via Caerra.' },
    { id: 108, nom: 'Gelveth', type: 'contact', note: 'Vit sur une plateforme partielle adjacente. Reconnaissance mutuelle de survivants.' },
  ],

  combat: {
    sorts: [
      'Rafale de survie (Vent) — déplacement rapide le long de structures instables — mobilité dans des environnements dangereux',
      'Coup de vent ciblé (Vent) — projection directionnelle — déviation de projectile ou déséquilibre d\'adversaire',
      'Tempête de section (Vent) — création d\'une zone de turbulence localisée — obstacle entre sa position et une menace',
    ],
  },

  image_prompts: [
    {
      id: 'yrith_ruines',
      description: 'Yrith sur une section partielle de la plateforme Ouest d\'Asterciel — un Aéride de 49 ans debout sur le bord d\'une structure qui ne tient que parce qu\'il sait exactement où poser ses pieds. En dessous : les strates inférieures d\'Asterciel. Son expression est de quelqu\'un qui est chez lui dans un endroit où personne d\'autre ne le serait.',
      style: 'réaliste survivant Aéride, ruines de la plateforme Ouest, Asterciel, aisance dans l\'instabilité, vertige maîtrisé',
    },
  ],

  lore_long: `Yrith a survécu à la Chute des Nuages à 22 ans et habite les ruines de la plateforme Ouest depuis 27 ans. Il a refusé toutes les évacuations.

Il a cartographié chaque section des ruines — ce qui tient, ce qui cède, les zones récupérables. Caerra (28) utilise ces cartes pour son projet de reconstruction depuis 14 ans.

Talvyn (23) l'a averti d'une nouvelle défaillance dans 8 à 12 semaines. Il prépare des positions de sécurité. Il ne quitte pas les ruines.`,
};

export default yrith;
