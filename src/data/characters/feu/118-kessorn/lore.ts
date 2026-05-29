import type { PersonnageLoreComplet } from '../../../lore-types';

const kessorn: PersonnageLoreComplet = {
  id: 118,
  nom: 'Kessorn',
  element: 'Feu',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 89 ans, robuste avec des marques de travail forestier — pas le feu du commandement, mais le feu de l\'exécution.',
    peau: 'Écorce rougeâtre avec des traces de brûlures anciennes — les siennes et celles qu\'il a données. L\'élément Feu chez un Sylvan est rare et ambigu.',
    yeux: 'Ambre sombre avec une qualité de quelqu\'un qui porte quelque chose sans le montrer.',
    vetements: 'Tenue de forestier Gardien — fonctionnelle, avec les marques de son rang de collatéral de Kessaer.',
    signes_particuliers: 'Descendant de la branche cadette de Kessaer. Il porte la honte de son ancêtre en travaillant deux fois plus que les autres. Cette honte n\'est pas exprimée — elle est compulsive.',
  },

  psychologie: {
    dominante: 'Descendant de la branche cadette de Kessaer — le forestier qui avait brûlé trop lors de la Faim des Racines. Kessorn porte cette honte ancestrale différemment : par l\'excès de travail. Chaque arbre qu\'il sauve est une expiation indirecte d\'un ancêtre qu\'il n\'a pas connu.',
    mecanisme_de_defense: 'Le travail comme expiation. Si il travaille suffisamment bien, la honte de Kessaer disparaît. Cette logique ne fonctionne pas, mais il n\'a pas d\'autre cadre.',
    contradiction_interne: 'Il porte la honte d\'une action qu\'il n\'a pas commise. Cette honte est réelle — elle structure son comportement. Mais elle n\'est pas la sienne.',
    rapport_aux_autres: 'Kessyn (32) est son collatéral — une branche différente de la même lignée. Ils partagent la honte sans la partager de la même façon.',
    vision_du_monde: 'Kessaer avait brûlé parce qu\'il avait cru sauver la forêt. Kessorn croit que brûler correctement — avec méthode — est la différence. Il applique Kessaer avec les corrections que l\'histoire a apportées.',
  },

  histoire: {
    enfance: {
      titre: 'La honte héritée',
      contenu: 'Né dans la branche cadette de la lignée de Kessaer. La honte de son ancêtre était présente dans sa famille sans être expliquée — une atmosphère, pas une histoire. Il avait appris les détails plus tard.',
    },
    arrivee: {
      titre: 'Les Gardiens',
      contenu: 'Il avait rejoint les Gardiens à 40 ans — la même faction que Kessaer. Pas par conviction aveugle, mais parce que la méthode des Gardiens lui paraissait la bonne correction des erreurs de Kessaer.',
    },
    premier_conflit: {
      titre: 'Kessyn',
      contenu: 'Il avait rencontré Kessyn (32) — un autre collatéral de Kessaer, dans une faction différente. Leur façon de porter la même honte était incompatible. Ils ne s\'étaient pas confrontés ouvertement. Ils l\'évitaient.',
    },
    revelation: {
      titre: 'L\'excès',
      contenu: 'Il avait réalisé qu\'il travaillait systématiquement deux fois plus que ses collègues. Ce n\'était pas de la dévotion — c\'était de la compulsion. La honte de Kessaer le poussait sans qu\'il y pense.',
    },
    etat_actuel: {
      titre: 'Le travail',
      contenu: 'Il travaille. Chaque action est correcte, méthique, précise. Il ne sait pas si ça suffit pour ce qu\'il expie.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kessorn_kessaer',
      titre: 'L\'héritier de la honte',
      description: 'Kessorn porte la honte de Kessaer par excès de travail. Si quelqu\'un — Kessyn (32), un historien, ou un Conservateur — confronte directement Kessorn à l\'héritage de Kessaer, il devra articuler sa position. La honte compulsive n\'est pas une position défendable — c\'est un mécanisme. Cette confrontation pourrait le libérer ou le briser.',
      personnages_impliques: [32],
      declencheur: 'Quelqu\'un confrontant Kessorn directement à l\'héritage de Kessaer',
      consequence: 'Kessorn articulant sa honte — ou incapable de le faire',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Descendant de la branche cadette de Kessaer. Porte la honte ancestrale par excès de travail. Collatéral de Kessyn (32).',

  relations: [
    { id: 32, nom: 'Kessyn', type: 'contact', note: 'Collatéral de la même lignée. Porte la honte différemment — évitement mutuel.' },
  ],

  combat: {
    sorts: [
      'Brûlage contrôlé (Feu) — feu méthodique qui préserve ce qu\'il faut préserver — précision',
      'Mur de flammes (Feu) — barrière défensive — protection de zone forestière',
    ],
  },

  image_prompts: [
    {
      id: 'kessorn_forestier',
      description: 'Kessorn travaillant dans une forêt de Sylvera — un Sylvan Feu de 89 ans, méthodique, en plein travail de forestier. Ses gestes sont précis et compulsifs. La honte ancestrale de Kessaer est visible dans l\'intensité de son travail, pas dans son expression.',
      style: 'réaliste Sylvan Feu forestier, Sylvera, honte ancestrale compulsive, descendant de Kessaer',
    },
  ],

  lore_long: `Kessorn est descendant de la branche cadette de Kessaer — le forestier de la Faim des Racines. Il porte cette honte ancestrale par excès de travail.

Chaque arbre qu'il sauve est une expiation qu'il ne nomme pas.

Son collatéral Kessyn (32) porte la même honte différemment. Ils s'évitent.`,
};

export default kessorn;
