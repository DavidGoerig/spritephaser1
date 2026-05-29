import type { PersonnageLoreComplet } from '../../../lore-types';

const krath: PersonnageLoreComplet = {
  id: 36,
  nom: 'Krath',
  element: 'Feu',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 58 ans — une silhouette de Gardien vétéran. Plus large que Kessyn (32), plus calciné aussi : ses bras ont des zones où la peau végétale est devenue presque ligneuse, une adaptation à l\'usage répété du feu sur de longues années.',
    peau: 'Verte noircie par endroits — des zones de peau qui ont été exposées à assez de chaleur pour brunir de façon permanente. Ce n\'est pas des brûlures — c\'est de l\'adaptation. Un Sylvan qui travaille avec le feu depuis 30 ans finit par ressembler à du bois brûlé de l\'extérieur.',
    yeux: 'Verts avec des points ambrés — plus intenses que ceux de Kessyn, moins calculateurs. Ses yeux ne font pas de calculs de superficie : ils cherchent ce qui doit brûler.',
    vetements: 'Tenue de Gardien de terrain — usée, réparée plusieurs fois, avec des traces de fumée sur les manches que le lavage n\'efface plus. Il ne porte pas de kit de brûlage propre comme Kessyn. Il porte des marques.',
    signes_particuliers: 'Il brûle parfois ses propres notes de terrain — des cartes, des journaux de routes, des observations. Il dit que les données qui restent créent des dépendances. Ce qu\'on ne peut pas retrouver sans être là, on y va. Ce n\'est pas de la négligence : c\'est une philosophie. Elle le mène trop loin.',
  },

  psychologie: {
    dominante: 'Gardien vétéran qui a développé une conviction : la liberté d\'action nécessite de ne pas laisser de traces. Ses archives brûlées sont une affirmation que le savoir brûlé ne peut pas être utilisé contre lui, contre les Gardiens, contre Sylvera. Il va trop loin — il brûle des informations qui ne le menacent pas, par habitude.',
    mecanisme_de_defense: 'Le contrôle du feu comme illusion de contrôle total. Il brûle ce qu\'il a peur de ne pas contrôler. Cette peur ne lui est pas entièrement consciente.',
    contradiction_interne: 'Il a brûlé des données qui auraient pu aider à identifier des arbres corrompus — des données qu\'il avait lui-même collectées. Il ne l\'admet pas parce qu\'il ne s\'en souvient pas entièrement : il a brûlé les notes qui lui auraient permis de retrouver ce qu\'il a perdu.',
    rapport_aux_autres: 'Kessyn (32) est son collègue mais ils travaillent différemment — Kessyn calcule, Krath agit. Ils se respectent sans toujours s\'accorder. Sylvae (31) le considère comme plus dangereux que Kessyn parce qu\'il est moins prévisible. Aelvyn (119) lui a demandé des données sur les zones racinaires — Krath lui a donné des données incomplètes parce qu\'il avait brûlé le reste.',
    vision_du_monde: 'Les arbres corrompus doivent brûler. Les données sur les arbres corrompus ne doivent pas rester dans des archives où quelqu\'un d\'autre peut les utiliser à la place des Gardiens. Le feu est une souveraineté.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier brûlage',
      contenu: 'À 18 ans, son premier brûlage contrôlé — un arbre clairement corrompu dans une zone reculée de Sylvera. Ça avait fonctionné. Il avait écrit un rapport. À 22 ans, il avait commencé à trouver les rapports contraignants — ils créaient des attentes sur ce qu\'il ferait ensuite. Il avait commencé à écrire des rapports plus courts.',
    },
    arrivee: {
      titre: 'Les premières archives brûlées',
      contenu: 'À 35 ans, il avait brûlé pour la première fois ses propres notes de terrain — une décision prise après une réunion des Gardiens où ses données avaient été utilisées pour justifier une décision avec laquelle il n\'était pas d\'accord. Si ses données pouvaient être utilisées contre son jugement, la solution était de ne pas laisser de données.',
    },
    premier_conflit: {
      titre: 'Le désaccord avec Kessyn',
      contenu: 'À 44 ans, Kessyn (32) avait essayé de lui faire refaire des relevés de terrain qu\'il avait brûlés. Krath avait refusé. Kessyn lui avait dit que les données perdues empêchaient une évaluation précise d\'une zone contaminée. Krath avait dit que s\'il voulait des données, il n\'avait qu\'à aller les collecter lui-même. Ils n\'avaient pas résolu ce désaccord.',
    },
    revelation: {
      titre: 'Les données d\'Aelvyn',
      contenu: 'À 52 ans, Aelvyn (119) lui avait demandé des données sur les zones racinaires d\'une section de Sylvera. Krath avait cherché dans ses archives et réalisé qu\'il avait brûlé exactement les données dont Aelvyn avait besoin. Il avait donné ce qui restait — incomplet. Il n\'avait pas dit qu\'il avait brûlé le reste. Il ne s\'en souvenait pas entièrement.',
    },
    etat_actuel: {
      titre: 'Les plans de Kessyn',
      contenu: 'Kessyn (32) prépare des brûlages dans une zone où Sylvae (31) pressent un fragment actif. Il sait que Kessyn a identifié des arbres corrompus dans cette zone. Il a ses propres évaluations de la zone — et il a brûlé une partie de ses notes. Ce qu\'il a perdu pourrait être exactement ce qui permettrait de savoir si Sylvae a raison sur le fragment actif.',
    },
  },

  evenements_narratifs: [
    {
      id: 'krath_archives',
      titre: 'Les données manquantes',
      description: 'Krath a brûlé des données sur une section de Sylvera qui correspond à la zone du pressentiment de Sylvae (31). Ces données — si elles existaient encore — permettraient de confirmer ou infirmer le pressentiment. Sans elles, Kessyn (32) ne peut pas faire une évaluation complète avant ses brûlages. Krath sait qu\'il a brûlé quelque chose d\'utile. Il ne sait pas exactement quoi.',
      personnages_impliques: [32, 31],
      declencheur: 'Réalisation que les données brûlées manquent dans l\'évaluation de Kessyn',
      consequence: 'Kessyn procède avec une évaluation incomplète — risque de brûler sans savoir ce qui est là',
    },
    {
      id: 'krath_sylvae',
      titre: 'La confrontation',
      description: 'Sylvae (31) considère Krath plus dangereux que Kessyn parce qu\'il est moins prévisible. Si elle comprend qu\'il a brûlé des données sur sa zone de pressentiment, le désaccord entre les Conservateurs et les Gardiens s\'intensifie au-delà du désaccord habituel.',
      personnages_impliques: [31, 32],
      declencheur: 'Sylvae découvrant que Krath a brûlé des données sur sa zone d\'exploration',
      consequence: 'Escalade du conflit Conservateurs-Gardiens dans un moment critique',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Gardien vétéran de Sylvera qui brûle ses propres archives par conviction que le savoir laissé crée des dépendances. A brûlé des données sur la zone du pressentiment de Sylvae (31). Travaille en parallèle de Kessyn (32) avec moins de méthode.',

  relations: [
    { id: 32, nom: 'Kessyn', type: 'allié', note: 'Collègue Gardien. Travaillent différemment — Kessyn calcule, Krath agit. Désaccord non résolu sur les archives brûlées.' },
    { id: 31, nom: 'Sylvae', type: 'adversaire', note: 'Le considère plus dangereux que Kessyn. Son imprévisibilité la préoccupe plus que la méthode de Kessyn.' },
    { id: 119, nom: 'Aelvyn', type: 'contact', note: 'Lui a demandé des données. Krath lui a donné des données incomplètes sans dire qu\'il avait brûlé le reste.' },
  ],

  combat: {
    sorts: [
      'Brûlage de zone (Feu) — flammes couvrant une large surface — destruction de zone sans précision chirurgicale',
      'Mur de fumée (Feu) — écran de fumée dense — couverture ou désorientation',
      'Incendie ciblé (Feu) — flamme unique à haute température — destruction d\'un point précis',
    ],
  },

  image_prompts: [
    {
      id: 'krath_archives',
      description: 'Krath dans un camp de terrain de Sylvera — un Sylvan de 58 ans debout devant un feu de camp, tenant des notes dans une main. Son autre main est proche du feu. Il décide. Sa peau noircie par endroits, ses ailes de feu en repos. Son expression est de quelqu\'un qui est certain mais pas serein.',
      style: 'réaliste Sylvan Gardien vétéran, feu de camp, notes à brûler, Sylvera, peau adaptée au feu, conviction sombre',
    },
  ],

  lore_long: `Krath brûle ses propres archives depuis 23 ans. Sa conviction : le savoir laissé crée des dépendances, et les données qui restent peuvent être utilisées contre son jugement.

Il va trop loin. Il a brûlé des données qu'il avait collectées lui-même sur des zones de Sylvera — des données qui manquent maintenant à Kessyn (32) pour évaluer les brûlages prévus.

Ce qu'il a perdu pourrait être ce qui permettrait de confirmer ou infirmer le pressentiment de Sylvae (31) sur le fragment actif.`,
};

export default krath;
