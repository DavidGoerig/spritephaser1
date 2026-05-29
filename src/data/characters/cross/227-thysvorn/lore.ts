import type { PersonnageLoreComplet } from '../../../lore-types';

const thysvorn: PersonnageLoreComplet = {
  id: 227,
  nom: 'Thysvorn',
  element: 'Feu',
  element2: 'Spectre',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 52 ans, médium — corpulence de quelqu\'un dont l\'activité principale est intérieure. Le corps porte peu de marques de combat, mais beaucoup d\'années.',
    peau: 'Rouge-ardente avec des teintes grises aux articulations — l\'élément Spectre laisse des traces froides sur un corps thermique.',
    yeux: 'Orangés avec une qualité de quelqu\'un qui regarde souvent à travers les personnes, pas vers elles.',
    vetements: 'Tenue simple sans affiliation — il ne représente rien d\'autre que lui-même.',
    signes_particuliers: 'Il lit les résidus thermiques laissés par les défunts dans les lieux où ils ont vécu ou sont morts. Son double élément Feu/Spectre lui permet de percevoir des empreintes que les éléments séparés ne pourraient pas détecter.',
  },

  psychologie: {
    dominante: 'Médium Pyrien indépendant à Varkhôl. Son double élément Feu/Spectre lui permet de lire les résidus thermiques laissés par des défunts — des empreintes élémentaires persistantes dans les lieux chargés d\'énergie. Il pratique pour des familles qui cherchent à comprendre ce qui est arrivé à des proches disparus dans la Rupture Thermique.',
    mecanisme_de_defense: 'La neutralité du médium. Il lit ce qui est là — il ne construit pas, ne modifie pas, ne juge pas. Cette neutralité lui permet de fonctionner dans des situations émotionnellement chargées sans être submergé.',
    contradiction_interne: 'Il lit des résidus thermiques de personnes mortes dans la Rupture. Les circonstances de certaines de ces morts pointent vers des responsabilités spécifiques — l\'Empire, le Parti du Feu, des décisions prises par des personnes encore vivantes. Il témoigne de traces sans agir sur leurs implications.',
    rapport_aux_autres: 'Osara (51) est dans son réseau — une Umbrien dont les contacts lui amènent parfois des demandes particulières de lecture. Velsa (58) est dans son réseau — une personne ayant perdu un proche dans la Rupture dont il a lu l\'empreinte thermique.',
    vision_du_monde: 'Les défunts laissent des traces. Ces traces peuvent être lues. Lire n\'est pas juger — c\'est témoigner de ce qui a existé.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément froid-chaud',
      contenu: 'Né à Varkhôl avec un double élément Feu/Spectre — une combinaison qui l\'avait isolé dans l\'enfance. Les Pyriens trouvaient l\'aspect Spectre perturbant. Les Umbriens n\'existaient pas à Varkhôl. Il avait développé ses capacités seul.',
    },
    arrivee: {
      titre: 'La Rupture Thermique',
      contenu: 'La Rupture Thermique avait laissé Varkhôl chargée de résidus thermiques de défunts. Sa capacité à les lire était devenue utile — des familles cherchaient à comprendre ce qui était arrivé à des proches dans les zones de la Rupture. Il avait commencé à pratiquer.',
    },
    premier_conflit: {
      titre: 'Le résidu qui accusait',
      contenu: 'Il avait lu un résidu thermique dont l\'empreinte indiquait clairement les circonstances d\'une mort — une mort qui impliquait une négligence d\'une structure impériale. La famille avait demandé s\'il pouvait témoigner. Il avait refusé — pas parce qu\'il ne croyait pas au résidu, mais parce que témoigner de traces thermiques dans un contexte légal impérial n\'était pas une position viable.',
    },
    revelation: {
      titre: 'La limite du témoignage',
      contenu: 'Il avait compris que sa capacité à lire n\'était pas couplée à une capacité à agir sur ce qu\'il lisait. Témoigner de la vérité d\'un résidu et agir sur ses implications étaient deux choses différentes. Il avait choisi de continuer à lire.',
    },
    etat_actuel: {
      titre: 'Le médium',
      contenu: 'Il lit des résidus thermiques. Les familles comprennent un peu mieux. Les implications restent non-résolues.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thysvorn_residus',
      titre: 'Le résidu qui mène à une décision',
      description: 'Thysvorn lit des résidus thermiques pour des familles à Varkhôl. Si un résidu qu\'il lit contient des informations qui pourraient changer le cours d\'une situation en cours — une information sur une cache, une personne, une responsabilité — il devra décider si la neutralité du médium s\'applique aussi quand l\'information est d\'utilité immédiate.',
      personnages_impliques: [51, 58],
      declencheur: 'Thysvorn lisant un résidu thermique contenant une information opérationnellement utile',
      consequence: 'Thysvorn confronté à la limite entre témoignage et participation — et à ce que la neutralité du médium couvre réellement',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Médium Pyrien indépendant lisant les résidus thermiques des défunts de la Rupture Thermique à Varkhôl. Double élément Feu/Spectre. Neutre par définition de son rôle.',

  relations: [
    { id: 51, nom: 'Osara', type: 'contact', note: 'Umbrien dont les contacts amènent parfois des demandes de lecture particulières.' },
    { id: 58, nom: 'Velsa', type: 'contact', note: 'Personne ayant perdu un proche dans la Rupture dont il a lu l\'empreinte thermique.' },
  ],

  combat: {
    sorts: [
      'Flamme spectrale (Feu/Spectre) — projection thermique à signature fantomatique — attaque hybride perturbant les deux registres élémentaires',
      'Lecture de résidu (Spectre/Feu) — perception passive des empreintes thermiques résiduelles — capacité non-combat principale',
    ],
  },

  image_prompts: [
    {
      id: 'thysvorn_lecture',
      description: 'Thysvorn dans un espace de la Rupture Thermique à Varkhôl — un Pyrien de 52 ans dont les mains sont posées sur une surface encore chaude. Ses yeux sont ouverts mais ne regardent rien de présent. Il lit. Une famille l\'observe à distance. Son expression est concentrée, neutre, absente de jugement.',
      style: 'réaliste Pyrien médium, Varkhôl Rupture Thermique, double élément Feu/Spectre, lecture de résidu thermique, neutralité du témoignage',
    },
  ],

  lore_long: `Thysvorn lit les résidus thermiques laissés par les défunts de la Rupture Thermique à Varkhôl. Son double élément Feu/Spectre lui permet de percevoir des empreintes que ni l'un ni l'autre élément seul ne pourrait détecter.

Des familles viennent pour comprendre ce qui est arrivé à des proches dans les zones de la Rupture. Il leur dit ce que les résidus montrent.

Ce que les résidus impliquent sur les responsabilités — il ne témoigne pas de ça.`,
};

export default thysvorn;
