import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvael: PersonnageLoreComplet = {
  id: 295,
  nom: 'Thalvael',
  element: 'Plante',
  element2: 'Eau',
  espece: 'Sylvans',
  region: 'Thalassyr',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand pour un Sylvan, avec une présence physique qu\'il utilise délibérément dans les interactions officielles.',
    peau: 'Brun Sylvan avec peu de reflets aquatiques — il évite l\'eau autant que possible malgré son élément.',
    yeux: 'Vert foncé avec un regard d\'évaluateur des ressources. Il regarde la végétation comme un inventaire.',
    vetements: 'Uniforme de botaniste impérial soigné. L\'insigne de sa fonction est toujours visible. Il a compris tôt que l\'insigne est un outil de sécurité autant qu\'une obligation.',
    signes_particuliers: 'Il prend des échantillons de tout ce qu\'il rencontre — une habitude de botaniste qui le rend prévisible dans ses routes mais efficace dans ses relevés.',
  },

  psychologie: {
    dominante: 'Carrière impériale construite sur une compétence réelle. Il est un bon botaniste. Le fait que ses compétences servent l\'Empire est une conséquence, pas une aspiration.',
    mecanisme_de_defense: 'La qualité du travail. Des données impeccables le rendent difficile à critiquer sur des bases professionnelles.',
    contradiction_interne: 'Ses cartographies des ressources végétales de Thalassyr sont utilisées pour planifier des extractions qui épuiseront des zones en quelques décennies. Il le sait. Il produit des données précises parce que si ce n\'est pas lui, ce sera quelqu\'un de moins compétent et les dommages seront pires à court terme.',
    rapport_aux_autres: 'Aeris (35) est sa supérieure indirecte — elle reçoit ses rapports via une chaîne administrative. Solvara (91) est l\'avocate qui défend les droits des Élus non-enregistrés à Thalassyr et qui s\'est trouvée en opposition à l\'exploitation des ressources qu\'il cartographie.',
    vision_du_monde: 'Les ressources végétales existent. Elles seront exploitées d\'une façon ou d\'une autre. Ses données permettent peut-être d\'orienter l\'exploitation vers les zones les moins fragiles. Il se le dit.',
  },

  histoire: {
    enfance: {
      titre: 'Sylvera et son opposé',
      contenu: 'Né à Sylvera dans une famille non-affiliée — ni Conservateurs ni Gardiens. Il avait rejoint l\'Empire à 25 ans pour des raisons pratiques : financement, équipement, protection. Son élément Plante était sa ressource principale ; l\'Empire avait les moyens de le développer.',
    },
    arrivee: {
      titre: 'La première cartographie',
      contenu: 'Sa première mission impériale : cartographier les ressources végétales côtières de Thalassyr — espèces, densités, zones de production. Il avait pris 6 mois, produit un rapport de 340 pages. L\'Empire en avait utilisé les conclusions pour planifier 3 sites d\'extraction. Il avait vu les sites. Il avait repris ses cartographies.',
    },
    premier_conflit: {
      titre: 'Solvara et les zones protégées',
      contenu: 'Solvara avait cité ses données dans une procédure légale contre l\'exploitation d\'une zone côtière — en utilisant ses propres chiffres pour démontrer que l\'extraction projetée dépasait les seuils de renouvellement. Il avait été appelé comme témoignage d\'expert. Il avait confirmé ses chiffres. La procédure avait été perdue par Solvara malgré ses données. L\'extraction avait eu lieu.',
    },
    revelation: {
      titre: 'Les projections à 50 ans',
      contenu: 'Il avait calculé les projections d\'épuisement pour les zones actuellement exploitées : 23 ans pour les plus fragiles, 45 ans pour les plus résistantes. Il avait inclus ces projections dans un rapport interne. Le rapport avait été classifié. Les extractions continuaient selon les calendriers.',
    },
    etat_actuel: {
      titre: 'Les données et leur usage',
      contenu: 'Il cartographie, il rapporte, les extractions ont lieu. Ses projections d\'épuisement sont correctes et ignorées. Il continue à les inclure dans ses rapports internes parce que leur absence rendrait ses données incomplètes. C\'est sa limite actuelle de résistance : des données incomplètes lui sont insupportables professionnellement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvael_projections_classifiees',
      titre: 'Les 23 ans',
      description: 'Ses projections d\'épuisement pour les zones les plus fragiles indiquent 23 ans. Ces projections sont dans ses rapports internes classifiés. Si elles étaient publiques, elles changeraient le contexte légal des extractions en cours — Solvara pourrait les utiliser. Elles ne sont pas publiques.',
      personnages_impliques: [91, 35],
      declencheur: 'Calculs de durabilité inclus dans les rapports internes',
      consequence: 'Données cruciales inaccessibles aux acteurs qui pourraient les utiliser contre l\'exploitation',
    },
    {
      id: 'thalvael_solvara_temoignage',
      titre: 'L\'expert et l\'avocate',
      description: 'Solvara a utilisé ses chiffres dans une procédure légale. Il a confirmé ses données. La procédure a été perdue. L\'extraction a eu lieu. Solvara sait que ses données sont correctes. Il sait que Solvara les a utilisées honnêtement. Cette interaction a eu lieu une fois. Il n\'a pas cherché à la répéter.',
      personnages_impliques: [91],
      declencheur: 'Utilisation de ses données dans une procédure légale',
      consequence: 'Conscience qu\'une collaboration non officielle est techniquement possible — et non poursuivie',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Cartographe de l\'exploitation. Ses données rendent les extractions plus efficaces et ses projections pourraient les arrêter — les deux à la fois.',

  relations: [
    { id: 35, nom: 'Aeris', type: 'mentor', note: 'Supérieure indirecte. Ses rapports remontent vers elle. Contact hiérarchique sans relation personnelle.' },
    { id: 91, nom: 'Solvara', type: 'rival', note: 'A utilisé ses données pour une procédure légale. Il a témoigné. Elle a perdu. Ils se savent mutuellement.' },
  ],

  combat: {
    sorts: [
      'Croissance défensive (Plante) — activation végétale rapide pour créer des obstacles ou une couverture',
      'Flux évasif (Eau) — utilisation de l\'eau comme glissière pour se déplacer rapidement',
      'Analyse de zone (Plante) — lecture immédiate de la composition végétale d\'un terrain — avantage tactique en terrain naturel',
    ],
  },

  image_prompts: [
    {
      id: 'thalvael_echantillon',
      description: 'Thalvael en terrain côtier de Thalassyr, prélevant un échantillon végétal avec précision. Son uniforme impérial est visible. Ses mains sont celles d\'un botaniste compétent. Derrière lui, une zone côtière dont il connaît le nombre d\'années avant épuisement.',
      style: 'réaliste botanique impérial, lumière côtière, compétence visible, tension entre le travail et ses implications',
    },
  ],

  lore_long: `Thalvael sait que les zones qu'il cartographie seront épuisées dans 23 à 45 ans.

Il a calculé ces projections. Il les a incluses dans ses rapports internes. Ces rapports ont été classifiés.

Il continue à les inclure parce que des données sans projections seraient incomplètes. C'est sa limite de résistance : il peut produire des données professionnellement déficientes par omission, mais ça lui est insupportable.

Solvara a utilisé ses chiffres dans une procédure légale contre une extraction. Il a été appelé comme témoignage d'expert. Il a confirmé ses données. La procédure a été perdue. L'extraction a eu lieu. Il sait que ses projections classifiées, si elles étaient publiques, changeraient le contexte légal.

Ses projections ne sont pas publiques.

Il se dit que si ce n'était pas lui qui cartographiait, ce serait quelqu'un de moins compétent et les dommages seraient pires à court terme. Il se le dit régulièrement.`,
};

export default thalvael;
