import type { PersonnageLoreComplet } from '../../../lore-types';

const kessyn: PersonnageLoreComplet = {
  id: 32,
  nom: 'Kessyn',
  element: 'Feu',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 39 ans — une silhouette qui trahit l\'élément. Il est trop sec pour un Sylvan de forêt, comme si le feu avait brûlé une partie de ce qui fait les Sylvans. Son élément Feu n\'est pas naturel dans une espèce de végétaux — et ça se voit.',
    peau: 'Verte avec des marques de brûlure à l\'avant-bras droit — des cicatrices anciennes d\'un incident à 22 ans où il avait brûlé un arbre corrompu plus vite que prévu. Il les garde visibles. C\'est une preuve que le feu fonctionne.',
    yeux: 'Verts mais avec une teinte ambrée — héritage de sa lignée de feu dans une espèce végétale. Il voit les arbres corrompus différemment des autres Sylvans : là où ils voient un arbre malade, il voit un vecteur de contamination.',
    vetements: 'Tenue des Gardiens — verts et noirs avec des protections ignifuges. Il transporte un kit de brûlage contrôlé : accélérateurs, soufflets, extincteurs de précision. Le kit dit qu\'il fait ça proprement.',
    signes_particuliers: 'Il ne touche pas les arbres comme Sylvae (31) — il les évalue. Il calcule mentalement le temps de combustion, la direction du vent, le périmètre de sécurité. Cette évaluation est automatique. Il la fait même dans des forêts saines.',
  },

  psychologie: {
    dominante: 'Descendant de Kessaer, le Sylvan qui a brûlé les premiers arbres corrompus lors de la Faim des Racines — un acte que la mémoire collective de Sylvera n\'a pas pardonné mais que lui considère comme l\'acte qui a empêché la contamination totale. Il porte la honte de Kessaer et la conviction que Kessaer avait raison.',
    mecanisme_de_defense: 'L\'argument technique comme protection émotionnelle. Quand on lui parle de Kessaer, il répond avec des données : surfaces contaminées stoppées, arbres sauvés par les brûlages contrôlés. La technique rend le jugement moins personnel.',
    contradiction_interne: 'Il croit que Kessaer avait raison, mais Kessaer a aussi brûlé des arbres-mémoire qui n\'étaient pas corrompus — des erreurs dans la précipitation. Cette partie de l\'héritage, il ne la mentionne pas. Il a développé des méthodes plus précises exactement parce que cette partie de l\'héritage existe.',
    rapport_aux_autres: 'Sylvae (31) est son antagoniste structurel — elle conserve ce qu\'il voudrait brûler, et il brûle ce qu\'elle voudrait étudier. Le désaccord est réel et profond depuis 11 ans. Thalorn (33) est la ligne qu\'il ne franchira pas : un arbre-mémoire vivant mérite une évaluation différente. Aeris (35) l\'a contacté pour une expertise — il a fourni des données sans comprendre son rôle réel.',
    vision_du_monde: 'La Faim des Racines a montré ce qui arrive quand on attend trop longtemps pour brûler ce qui est corrompu. Sylvera ne peut pas se permettre une deuxième Faim par sentiment. La forêt entière vaut plus qu\'un arbre particulier.',
  },

  histoire: {
    enfance: {
      titre: 'Le nom de Kessaer',
      contenu: 'À 7 ans, il avait compris que son arrière-arrière-grand-père Kessaer était maudit dans la mémoire de Sylvera. Les autres enfants Sylvans l\'appelaient "le fils du brûleur". Il avait demandé à sa mère si Kessaer avait tort. Elle avait répondu que c\'était compliqué. À 7 ans, il avait décidé que si c\'était compliqué, ça méritait d\'être compris.',
    },
    arrivee: {
      titre: 'La formation aux Gardiens',
      contenu: 'À 18 ans, il avait rejoint les Gardiens de Sylvera — l\'organisation qui gérait les brûlages contrôlés depuis la Faim des Racines. Ses supérieurs avaient hésité à l\'accepter à cause de son nom. Il avait dit qu\'il ferait les brûlages mieux que n\'importe qui d\'autre. Ils l\'avaient accepté pour voir.',
    },
    premier_conflit: {
      titre: 'Le désaccord avec Sylvae',
      contenu: 'À 28 ans, lors d\'une exploration conjointe avec Sylvae (31), il avait voulu brûler un arbre qu\'il jugeait corrompu — porteur potentiel de la contamination de la Faim. Sylvae avait refusé. La dispute avait duré 3 jours. L\'arbre avait été préservé. Il n\'avait pas changé de position — il avait changé de méthode. Il opérait maintenant sans coordination avec les Conservateurs.',
    },
    revelation: {
      titre: 'Les archives de Kessaer',
      contenu: 'À 32 ans, il avait accédé aux archives privées de Kessaer, conservées dans sa lignée. Il y avait trouvé les calculs de son ancêtre — les arbres brûlés, les surfaces contaminées stoppées, et les erreurs : les arbres brûlés par précaution qui n\'étaient pas corrompus. Kessaer le savait. Il avait continué parce qu\'il pensait que les erreurs valaient moins que les surfaces sauvées. Kessyn avait compris pourquoi sa méthode devait être plus précise.',
    },
    etat_actuel: {
      titre: 'La zone du pressentiment',
      contenu: 'Il a identifié plusieurs arbres dans la zone d\'exploration de Sylvae (31) qu\'il juge corrompus. Il a préparé les plans de brûlage. Il sait que Sylvae pressentait quelque chose dans cette zone depuis 4 ans. Il considère que son pressentiment n\'est pas une raison suffisante pour retarder. Il va commencer les évaluations finales cette semaine.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kessyn_sylvae',
      titre: 'Les arbres de la zone',
      description: 'Il a identifié plusieurs arbres corrompus dans la zone où Sylvae (31) pressent un fragment actif depuis 4 ans. Il a les plans de brûlage. Sylvae n\'a pas encore trouvé ce qu\'elle cherche — si Kessyn brûle avant qu\'elle explore, la piste de 4 ans disparaît. Si elle a raison sur le fragment actif et qu\'il brûle, c\'est une destruction irréparable.',
      personnages_impliques: [31, 33],
      declencheur: 'Décision de procéder aux brûlages dans la zone du pressentiment de Sylvae',
      consequence: 'Conflit direct avec Sylvae — et risque de destruction d\'un fragment actif si son pressentiment était fondé',
    },
    {
      id: 'kessyn_aeris',
      titre: 'La demande d\'expertise',
      description: 'Aeris (35) l\'a contacté pour des données sur les brûlages contrôlés — officiellement pour un rapport de l\'Empire sur les méthodes de gestion des arbres corrompus. Il a fourni des données. Il n\'a pas compris pourquoi l\'Empire s\'intéressait à ses méthodes spécifiquement. Il le comprendra peut-être trop tard.',
      personnages_impliques: [35, 31],
      declencheur: 'Demande d\'expertise d\'Aeris qui exploite ses données sans qu\'il comprenne l\'usage réel',
      consequence: 'Ses méthodes utilisées pour justifier une politique impériale sur Sylvera qu\'il n\'a pas approuvée',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Descendant de Kessaer, le brûleur de la Faim des Racines. Gardien de Sylvera qui brûle les arbres corrompus avec une précision que son ancêtre n\'avait pas. A identifié des arbres dans la zone du pressentiment de Sylvae (31). Conflict en cours avec les Conservateurs depuis 11 ans.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'adversaire', note: 'Conserve ce qu\'il voudrait brûler. Désaccord fondamental depuis 11 ans. Leurs zones d\'action convergent.' },
    { id: 33, nom: 'Thalorn', type: 'contact', note: 'Arbre-mémoire vivant — la ligne qu\'il ne franchira pas dans ses brûlages.' },
    { id: 35, nom: 'Aeris', type: 'contact', note: 'Lui a demandé des données sur les brûlages contrôlés. Il n\'a pas encore compris son rôle réel.' },
  ],

  combat: {
    sorts: [
      'Brûlage contrôlé (Feu) — flamme précise à périmètre défini — élimination ciblée sans propagation',
      'Barrière de feu (Feu) — mur de flammes directionnelles — obstacle ou confinement d\'une zone',
      'Détection de corruption (Feu) — chaleur qui révèle la contamination dans l\'écorce — diagnostic à distance',
    ],
  },

  image_prompts: [
    {
      id: 'kessyn_foret',
      description: 'Kessyn dans la forêt de Sylvera — un Sylvan de 39 ans debout devant un arbre, son kit de brûlage à la main, évaluant l\'écorce. Ses cicatrices d\'avant-bras sont visibles. Il ne regarde pas l\'arbre comme quelque chose de vivant — il le regarde comme un problème à résoudre. Derrière lui : d\'autres arbres qu\'il a évalués.',
      style: 'réaliste Sylvan Gardien, forêt de Sylvera, évaluation d\'arbre, kit de brûlage, précision clinique, héritage de Kessaer',
    },
  ],

  lore_long: `Kessyn est le descendant de Kessaer, le Sylvan qui a brûlé les premiers arbres corrompus lors de la Faim des Racines. Kessaer est maudit dans la mémoire de Sylvera. Kessyn pense qu\'il avait raison.

Il a accès aux archives privées de Kessaer. Il sait que son ancêtre a fait des erreurs — des arbres brûlés par précaution qui n\'étaient pas corrompus. Il a développé des méthodes plus précises exactement pour ça.

Il a identifié des arbres corrompus dans la zone où Sylvae (31) pressent un fragment actif depuis 4 ans. Il va commencer les évaluations finales cette semaine.`,
};

export default kessyn;
