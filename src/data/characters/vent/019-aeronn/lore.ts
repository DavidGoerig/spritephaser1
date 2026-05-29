import type { PersonnageLoreComplet } from '../../../lore-types';

const aeronn: PersonnageLoreComplet = {
  id: 19,
  nom: 'Aeronn',
  element: 'Vent',
  espece: 'Aérides',
  region: 'Thalassyr',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 48 ans — la silhouette d\'un officier qui maintient sa forme par discipline plutôt que par nécessité. Ses ailes sont repliées avec une précision militaire quand il n\'en a pas besoin. Il occupe l\'espace exactement autant qu\'il le faut.',
    peau: 'Pâle Aéride avec une teinte légèrement saline — des années passées dans les courants aériens au-dessus de Thalassyr, dont l\'air marin laisse des traces. Ses insignes impériaux sont propres et bien placés.',
    yeux: 'Gris clair avec une qualité d\'évaluation de distance — il voit les routes, pas les destinations. Ce qui compte pour lui c\'est le trajet, pas l\'endroit.',
    vetements: 'Uniforme impérial adapté au vol Aéride — fonctionnel, avec les insignes discrets qui signalent son niveau de service sans les annoncer. Pas militaire ostensiblement. Il passe pour un fonctionnaire.',
    signes_particuliers: 'Il répond aux questions sur ses activités avec une précision excessive — donne trop de détails sur ce qui est sans importance pour détourner de ce qui l\'est. Un interrogateur expérimenté reconnaîtrait la technique.',
  },

  psychologie: {
    dominante: 'Agent impérial discret à Thalassyr dont l\'accès aux routes aériennes dépend entièrement du réseau artificiel d\'Orven (15). Son utilité pour l\'Empire tient à sa mobilité. Sa mobilité tient à l\'accord entre la Confédération et l\'Empire sur ce réseau.',
    mecanisme_de_defense: 'La complaisance calculée. Il donne aux différentes factions ce qu\'elles veulent entendre — assez pour être utile à chacune, jamais assez pour être irremplaçable par une seule. Son équilibre entre l\'Empire, la Confédération et ses contacts indépendants est son seul vrai actif.',
    contradiction_interne: 'Sa vie à Thalassyr depuis 12 ans lui a créé des attachements qu\'un agent impérial ne devrait pas avoir — des contacts, des habitudes, une préférence pour certaines routes aériennes. Si l\'Empire lui demandait de quitter Thalassyr pour une mission ailleurs, il hésiterait. Il ne sait pas s\'il partirait.',
    rapport_aux_autres: 'Shaleth (16) lui fournit des informations sur les flux de communications en échange d\'informations sur les routes aériennes. Crysta (20) sait qui il est — elle travaille pour la Convergence et ils ont un accord de non-interférence mutuellement avantageuse. Yrith (25) d\'Asterciel utilise parfois ses routes pour ses propres déplacements.',
    vision_du_monde: 'Thalassyr est fonctionnelle. Son réseau artificiel fonctionne. Les factions s\'équilibrent. Son travail est de maintenir cet équilibre au profit de l\'Empire — ce qui coïncide généralement avec le maintien de l\'équilibre tout court. Il se dit que les deux choses sont les mêmes.',
  },

  histoire: {
    enfance: {
      titre: 'La formation impériale',
      contenu: 'À 17 ans, il avait été recruté par l\'Empire à Asterciel pour ses capacités de vol exceptionnelles et sa capacité à naviguer dans des conditions météorologiques difficiles. Sa formation avait combiné techniques de vol et collecte d\'information discrète. Il avait compris rapidement que l\'Empire ne cherchait pas des soldats dans les zones neutres, mais des personnes capables de paraître ne pas travailler pour l\'Empire.',
    },
    arrivee: {
      titre: 'L\'affectation à Thalassyr',
      contenu: 'À 36 ans, il avait été affecté à Thalassyr — une région officiellement neutre où l\'Empire n\'avait pas de présence officielle mais où ses intérêts étaient nombreux. Sa couverture : transporteur indépendant de messageries entre les régions côtières. Sa vraie mission : surveillance des flux d\'information et cartographie des routes non officielles.',
    },
    premier_conflit: {
      titre: 'La découverte de Crysta',
      contenu: 'À 40 ans, Crysta (20) l\'avait approché directement lors d\'une escale à Néris et lui avait dit qu\'elle savait qu\'il travaillait pour l\'Empire. Puis elle lui avait proposé un accord : ni elle ni lui ne chercheraient à compromettre l\'autre, et ils s\'échangeraient des informations utiles à leurs objectifs respectifs. Il avait accepté. Il n\'avait jamais dit à l\'Empire qu\'il avait ce contact.',
    },
    revelation: {
      titre: 'La dépendance au réseau',
      contenu: 'À 44 ans, une panne temporaire du réseau artificiel d\'Orven avait bloqué ses routes pendant 3 jours. Sans les vents artificiels, certains corridors aériens qu\'il utilisait régulièrement devenaient impraticables. Il avait réalisé pour la première fois que son utilité pour l\'Empire dépendait d\'un système qu\'il ne contrôlait pas.',
    },
    etat_actuel: {
      titre: 'L\'équilibre qui tient',
      contenu: 'Il maintient ses contacts avec Shaleth (16), Crysta (20), et plusieurs contacts indépendants depuis 12 ans. L\'Empire reçoit ses rapports réguliers — des informations utiles mais jamais complètes. Crysta reçoit ses observations sur les routes aériennes et les mouvements de troupes impériaux dans la région. L\'équilibre tient. Il ne sait pas jusqu\'à quand.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aeronn_crysta',
      titre: 'L\'accord non rapporté',
      description: 'Son accord avec Crysta (20) n\'a jamais été rapporté à l\'Empire. Si l\'Empire découvrait qu\'il partage des informations avec la Convergence — même dans le cadre d\'un accord de non-interférence — sa position à Thalassyr deviendrait insoutenable. Crysta sait cela et garde l\'accord comme garantie.',
      personnages_impliques: [20, 16],
      declencheur: 'Existence d\'un accord non rapporté entre un agent impérial et une agent de la Convergence',
      consequence: 'Vulnérabilité mutuelle qui maintient l\'accord — mais tout événement impliquant l\'un ou l\'autre pourrait l\'exposer',
    },
    {
      id: 'aeronn_routes',
      titre: 'La cartographie des routes non officielles',
      description: 'Sa mission originale incluait la cartographie des routes aériennes non officielles au-dessus de Thalassyr — routes utilisées par les Dissidentes et les indépendants. Après 12 ans, il a cartographié la plupart de ces routes. Il ne les a pas toutes transmises à l\'Empire. Certaines sont utilisées par des personnes dont la disparition ne l\'intéresse pas.',
      personnages_impliques: [82, 25],
      declencheur: 'Tension entre la mission de cartographie complète et les attachements de 12 ans à Thalassyr',
      consequence: 'Information retenue dont l\'Empire pourrait éventuellement prendre conscience',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Agent impérial discret à Thalassyr depuis 12 ans. Son accès aux routes aériennes dépend du réseau artificiel d\'Orven (15). Accord non rapporté avec Crysta (20) de la Convergence. A retenu une partie de sa cartographie des routes non officielles.',

  relations: [
    { id: 20, nom: 'Crysta', type: 'allié', note: 'Accord de non-interférence depuis 8 ans. Non rapporté à l\'Empire. Vulnérabilité mutuelle.' },
    { id: 16, nom: 'Shaleth', type: 'allié', note: 'Échange d\'informations — routes aériennes contre flux de communications.' },
    { id: 25, nom: 'Yrith', type: 'contact', note: 'Utilise parfois ses routes pour des déplacements entre Asterciel et Thalassyr.' },
  ],

  combat: {
    sorts: [
      'Rafale d\'interférence (Vent) — perturbation des courants aériens dans une zone — désorientation des vols',
      'Courant de fuite (Vent) — accélération maximale en ligne directe — extraction d\'une position compromise',
      'Turbulence ciblée (Vent) — création d\'une zone de turbulence localisée — entrave au vol d\'une cible',
    ],
  },

  image_prompts: [
    {
      id: 'aeronn_vol',
      description: 'Aeronn en vol au-dessus de Thalassyr — un Aéride de 48 ans dans un courant artificiel, ses ailes légèrement déployées pour maintenir l\'altitude sans effort. En dessous : les routes côtières de Néris. Il observe avec ses yeux gris — pas ce qu\'il voit, mais comment il pourrait l\'utiliser.',
      style: 'réaliste Aéride agent impérial, vol de surveillance, Thalassyr, courants artificiels, observation discrète',
    },
  ],

  lore_long: `Aeronn est agent impérial à Thalassyr depuis 12 ans sous couverture de transporteur indépendant. Son accès aux routes aériennes dépend entièrement du réseau artificiel d'Orven (15) — un système qu'il ne contrôle pas.

Son accord non rapporté avec Crysta (20) de la Convergence dure depuis 8 ans. Ni lui ni elle ne cherche à compromettre l'autre. L'Empire ne sait pas.

Après 12 ans à Thalassyr, il a des attachements qu'un agent ne devrait pas avoir. Si l'Empire lui demandait de partir, il hésiterait.`,
};

export default aeronn;
