import type { PersonnageLoreComplet } from '../../../lore-types';

const thaerys: PersonnageLoreComplet = {
  id: 103,
  nom: 'Thaerys',
  element: 'Stellaire',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 52 ans, grand avec la posture d\'un aristocrate de cour. Il porte son appartenance aux strates supérieures dans chaque geste.',
    peau: 'Pâle bleutée Aéride avec une luminescence stellaire dorée — les étoiles dans la peau d\'un homme qui les cartographie depuis 30 ans.',
    yeux: 'Dorés-gris, avec une qualité de détachement contemplatif. Il regarde les étoiles comme des objets d\'étude, pas des présences.',
    vetements: 'Tenue aristocratique d\'astronome de cour — élaborée, avec des broderies qui représentent des constellations. Ostentatoire dans sa précision.',
    signes_particuliers: 'Il cartographie les trajectoires stellaires pour l\'aristocratie d\'Asterciel. Ses données alimentent Syvara (30) et Telos (29) sans qu\'il soit pleinement conscient de leur usage dans les conflits politiques de la cour.',
  },

  psychologie: {
    dominante: 'Astronome noble qui cartographie les trajectoires des étoiles pour l\'aristocratie d\'Asterciel. Ses données ont des implications politiques qu\'il ne gère pas lui-même — elles passent à des figures comme Serathis (24), Syvara (30) et Telos (29).',
    mecanisme_de_defense: 'La science pure comme détachement. Il étudie les étoiles. Les implications politiques de ses données ne sont pas son domaine.',
    contradiction_interne: 'Ses cartes stellaires sont utilisées pour valider des positions politiques contradictoires. Serathis (24) et Syvara (30) utilisent ses mêmes données pour des arguments opposés. Il ne voit pas la contradiction.',
    rapport_aux_autres: 'Serathis (24) est dans son camp politique. Syvara (30) est son adversaire fonctionnel — ils utilisent les mêmes données pour des conclusions différentes.',
    vision_du_monde: 'Les étoiles ont des trajectoires calculables. Ces trajectoires disent des choses sur l\'ordre du monde. Ce que les personnes politiques font de ces choses n\'est pas sa responsabilité scientifique.',
  },

  histoire: {
    enfance: {
      titre: 'L\'aristocratie stellaire',
      contenu: 'Né dans une famille de l\'aristocratie stellaire d\'Asterciel — l\'élite dont l\'élément Stellaire justifie le rang. Sa formation avait été entièrement orientée vers l\'astronomie.',
    },
    arrivee: {
      titre: 'La cour',
      contenu: 'Astronome de cour depuis l\'âge de 25 ans. Sa position était héréditaire autant que méritocratique. Il avait pris l\'habitude d\'être consulté sans être remis en question.',
    },
    premier_conflit: {
      titre: 'Syvara',
      contenu: 'Syvara (30) avait utilisé ses propres cartes stellaires pour des arguments qu\'il désapprouvait politiquement. Il avait essayé de démonter les arguments de Syvara en montrant que ses données ne disaient pas ce qu\'elle prétendait. Les deux avaient des données valides — elles pointaient dans des directions différentes.',
    },
    revelation: {
      titre: 'L\'usage des étoiles',
      contenu: 'Il avait compris que les trajectoires stellaires étaient suffisamment complexes pour valider des positions contradictoires. Cette ambiguïté était inconfortable pour lui.',
    },
    etat_actuel: {
      titre: 'La cartographie',
      contenu: 'Il continue à cartographier. Ses données continuent à alimenter des arguments politiques qu\'il ne contrôle pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thaerys_donnees',
      titre: 'Des données pour deux arguments',
      description: 'Les cartes stellaires de Thaerys sont utilisées par Serathis (24) ET Syvara (30) pour des arguments politiques opposés. Si quelqu\'un lui fait prendre conscience de cette dualité, il devrait décider si ses données sont ambiguës ou si l\'une des interprétations est fausse.',
      personnages_impliques: [24, 30],
      declencheur: 'Thaerys confronté aux deux usages opposés de ses données',
      consequence: 'Thaerys choisissant de valider une interprétation — ou reconnaissant l\'ambiguïté de ses données',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Astronome noble d\'Asterciel. Cartographie les trajectoires stellaires. Ses données alimentent l\'aristocratie sans qu\'il contrôle leur usage.',

  relations: [
    { id: 24, nom: 'Serathis', type: 'contact', note: 'Camp politique allié. Utilise ses données.' },
    { id: 30, nom: 'Syvara', type: 'adversaire', note: 'Utilise ses mêmes données pour des arguments opposés.' },
  ],

  combat: {
    sorts: [
      'Projection stellaire (Stellaire) — faisceau de lumière concentrée — attaque à distance',
      'Cartographie de trajectoire (Stellaire) — prédiction de mouvement — avantage tactique en combat',
    ],
  },

  image_prompts: [
    {
      id: 'thaerys_observatoire',
      description: 'Thaerys dans son observatoire d\'Asterciel — un Aéride de 52 ans devant ses cartes stellaires. Sa peau luit dorée. Ses données alimentent plusieurs factions qu\'il n\'examine pas.',
      style: 'réaliste Aéride astronome noble, observatoire d\'Asterciel, cartes stellaires, science politique non-examinée',
    },
  ],

  lore_long: `Thaerys cartographie les trajectoires stellaires pour l'aristocratie d'Asterciel depuis 30 ans.

Ses données sont utilisées par Serathis (24) et Syvara (30) pour des arguments politiques opposés. Il ne voit pas la contradiction.

La science pure comme détachement : les implications politiques de ses données ne sont pas son domaine.`,
};

export default thaerys;
