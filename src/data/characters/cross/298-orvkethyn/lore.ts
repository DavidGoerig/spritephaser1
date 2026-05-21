import type { PersonnageLoreComplet } from '../../../lore-types';

const orvkethyn: PersonnageLoreComplet = {
  id: 298,
  nom: 'Orvkethyn',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Fées',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: '80 ans chez les Fées. Apparence d\'un adolescent humain de 14 ans environ. Cette dissonance entre apparence et âge est constante dans ses interactions.',
    peau: 'Légèrement irisée, bioluminescente de façon non contrôlée — il n\'a pas appris à atténuer ça. Les couleurs changent selon ses émotions ou les souvenirs de l\'arbre qui remontent.',
    yeux: 'Vert clair avec des profondeurs inattendues. Les gens qui le regardent attentivement sentent que quelque chose de plus vieux les regarde en retour.',
    vetements: 'Tenue simple adaptée à la forêt, toujours un peu trop grande — il n\'a pas encore stabilisé sa façon d\'habiter son corps à cause des souvenirs superposés.',
    signes_particuliers: 'Il dit parfois des choses en utilisant "je" pour des événements qui se sont passés il y a 300 ans. Il les corrige immédiatement, mais la première formulation sort naturellement.',
  },

  psychologie: {
    dominante: 'Deux consciences qui coexistent. La sienne — 80 ans, curious, encore en formation. Celle de l\'arbre — 300 ans de mémoire émotionnelle d\'un arbre-mémoire maintenant mort.',
    mecanisme_de_defense: 'La distinction volontaire. Il s\'entraîne à distinguer ses souvenirs des souvenirs de l\'arbre. C\'est un effort conscient et permanent.',
    contradiction_interne: 'Les souvenirs de l\'arbre qu\'il porte sont des données sur l\'histoire émotionnelle de Sylvera que personne d\'autre ne peut accéder. Mais ils ne lui appartiennent pas — ils appartiendraient à l\'arbre si l\'arbre existait encore. À qui appartient la mémoire d\'un mort ?',
    rapport_aux_autres: 'Thalorn (33) est venu l\'examiner deux fois. La première fois avec de la curiosité scientifique ; la deuxième avec ce qui ressemblait à de l\'émotion, parce que les souvenirs de l\'arbre qu\'il porte contiennent des interactions avec Thalorn lui-même, 60 ans avant. Orvketh (129) — une Fée ancienne — lui a appris à distinguer ses propres expériences des expériences héritées.',
    vision_du_monde: 'Il ne cherche pas à utiliser les souvenirs de l\'arbre. Il cherche à apprendre à les porter sans se perdre dedans. C\'est différent.',
  },

  histoire: {
    enfance: {
      titre: 'L\'absorption accidentelle',
      contenu: 'À 30 ans — jeune pour une Fée, adolescent fonctionnel — il avait touché un arbre-mémoire mourant pendant la Faim des Racines. L\'arbre avait absorbé des émotions pendant 300 ans. En mourant, il avait cherché quelqu\'un pour les porter. La Fée en contact avec lui avait reçu 300 ans de mémoire émotionnelle en quelques secondes. Il était resté inconscient 3 jours.',
    },
    arrivee: {
      titre: 'L\'apprentissage avec Orvketh',
      contenu: 'Orvketh (129) — une Fée ancienne habituée à porter des mémoires d\'une façon différente — l\'avait aidé à comprendre ce qui lui était arrivé. Elle lui avait appris une technique de séparation — comment identifier si un souvenir lui appartient ou vient de l\'arbre. Il y travaille depuis 50 ans.',
    },
    premier_conflit: {
      titre: 'La première visite de Thalorn',
      contenu: 'Thalorn était venu avec de la curiosité scientifique — un Fée portant la mémoire d\'un arbre était théoriquement intéressant. Il avait posé des questions. Orvkethyn avait répondu. À un moment, il avait dit quelque chose que Thalorn avait reconnu — une interaction qu\'il avait eue avec cet arbre spécifique il y a 60 ans, décrite de l\'intérieur de l\'arbre. Thalorn s\'était arrêté.',
    },
    revelation: {
      titre: 'La deuxième visite de Thalorn',
      contenu: 'La deuxième visite était différente. Thalorn voulait savoir ce que l\'arbre avait enregistré sur des événements spécifiques. Orvkethyn avait répondu selon ses capacités à l\'époque — une partie de l\'accès aux souvenirs de l\'arbre était encore incontrôlée. Thalorn avait pris des notes. La conversation avait duré 4 heures.',
    },
    etat_actuel: {
      titre: 'Les 50 ans de pratique',
      contenu: 'À 80 ans, il peut accéder aux souvenirs de l\'arbre de façon plus contrôlée. Il ne les utilise pas activement — il les laisse disponibles si quelqu\'un pose la bonne question. Thalorn sait qu\'ils existent. Thalvelyn (280) lui a demandé si certains souvenirs de l\'arbre correspondaient à ce que ses propres jardins enregistraient. La question était bonne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orvkethyn_souvenirs_thalorn',
      titre: 'Thalorn vu par l\'arbre',
      description: 'Les souvenirs de l\'arbre incluent des interactions avec Thalorn il y a 60 ans. Orvkethyn peut les décrire de l\'intérieur — pas depuis la perspective de Thalorn, depuis celle de l\'arbre qui observait. Ces souvenirs contiennent des choses que Thalorn a peut-être oubliées ou reformulées dans sa mémoire. Thalorn sait qu\'ils existent.',
      personnages_impliques: [33, 129],
      declencheur: 'Mémoire de l\'arbre incluant Thalorn il y a 60 ans',
      consequence: 'Thalorn a accès à une perspective sur lui-même qu\'il ne peut pas obtenir autrement',
    },
    {
      id: 'orvkethyn_thalvelyn_question',
      titre: 'La correspondance des jardins',
      description: 'Thalvelyn (280) lui a demandé si les souvenirs de l\'arbre correspondaient aux enregistrements émotionnels de ses jardins-mémoire actuels. La question était bonne — c\'est une façon de vérifier si les jardins enregistrent correctement ou avec des biais. Il vérifie. C\'est la première collaboration concrète sur les mémoires de l\'arbre.',
      personnages_impliques: [280],
      declencheur: 'Question de Thalvelyn sur la correspondance',
      consequence: 'Vérification croisée des méthodes de mémoire végétale — utilité concrète des souvenirs de l\'arbre',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Archive vivante accidentelle. Il porte 300 ans de mémoire émotionnelle d\'un arbre. La question de qui peut y accéder et pour quoi est ouverte.',

  relations: [
    { id: 33, nom: 'Thalorn', type: 'allié', note: 'Deux visites. La première scientifique, la deuxième personnelle — l\'arbre avait des souvenirs de lui. Prend des notes.' },
    { id: 129, nom: 'Orvketh', type: 'mentor', note: 'L\'a aidé à comprendre l\'absorption et à pratiquer la séparation. Référence ancienne.' },
    { id: 280, nom: 'Thalvelyn', type: 'allié', note: 'A posé la bonne question sur la correspondance des jardins. Première collaboration concrète.' },
  ],

  combat: {
    sorts: [
      'Mémoire émotionnelle (Fée) — projection d\'une émotion de l\'arbre vers une cible — désorientation non physique',
      'Croissance ancienne (Plante) — activation de végétaux selon les patterns de croissance mémorisés de l\'arbre — plus dense que standard',
      'Absorption mémorielle (Fée) — stockage temporaire d\'informations émotionnelles de l\'environnement — extension de perception',
    ],
  },

  image_prompts: [
    {
      id: 'orvkethyn_memoire',
      description: 'Orvkethyn assis au pied d\'un arbre, les yeux mi-clos, sa bioluminescence changeant de couleur lentement. Il est en train d\'accéder à un souvenir de l\'arbre mort. Il a l\'air d\'un adolescent en train de rêver — jusqu\'à ce qu\'on regarde ses yeux.',
      style: 'réaliste fée-sylvan, lumière de forêt douce, bioluminescence changeante, dissonance âge/apparence',
    },
  ],

  lore_long: `Orvkethyn a absorbé 300 ans de mémoire émotionnelle d'un arbre-mémoire mourant. Il avait 30 ans. Il en a maintenant 80.

Il utilise encore parfois "je" pour des événements qui se sont passés il y a 300 ans. Il se corrige. La première formulation sort naturellement.

Orvketh lui a appris une technique de séparation — comment distinguer ses souvenirs des souvenirs de l'arbre. Il y travaille depuis 50 ans. Il est meilleur qu'il y a 50 ans.

Thalorn est venu deux fois. La première fois avec de la curiosité scientifique. La deuxième fois après avoir réalisé que les souvenirs de l'arbre incluent des interactions avec lui il y a 60 ans — décrites de l'intérieur de l'arbre. Cette perspective sur lui-même, il ne peut l'obtenir nulle part ailleurs.

Thalvelyn lui a posé une question utile : est-ce que les souvenirs de l'arbre correspondent à ce que ses jardins enregistrent actuellement ? Il vérifie. C'est la première utilisation concrète de ce qu'il porte.

À qui appartient la mémoire d'un mort ? Il n'a pas la réponse. Il porte les souvenirs quand même.`,
};

export default orvkethyn;
