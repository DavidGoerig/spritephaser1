import type { PersonnageLoreComplet } from '../../../lore-types';

const tharaevorn: PersonnageLoreComplet = {
  id: 271,
  nom: 'Tharaevorn',
  element: 'Normal',
  element2: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Grand, légèrement voûté par les années — pas cassé, mais porté.',
    peau: 'Mate, ridée aux coins des yeux et aux mains. Des éclairs Électrique minuscules et involontaires au niveau des tempes quand il est émotionnellement affecté.',
    yeux: 'Brun chaud, avec une tristesse qui n\'est pas dépressive — c\'est de la déception stabilisée.',
    vetements: 'Tenue simple, sans insigne. Il a rendu son insigne impérial le jour de son départ. Ce n\'était pas un geste symbolique — c\'était juste la procédure.',
    signes_particuliers: 'Parle du Premier Avatar en utilisant son prénom. Personne d\'autre dans les Dissidentes ne le fait. Ça les met légèrement mal à l\'aise.',
  },

  psychologie: {
    dominante: 'Blessure de trahison personnelle, intégrée mais pas résolue. Il ne se définit plus par rapport au Premier Avatar — mais l\'ombre de ce qu\'il croyait y est encore.',
    mecanisme_de_defense: 'Le travail comme substitut. Il fait des choses concrètes pour les Dissidentes. Les choses concrètes n\'exigent pas qu\'il réexamine ce qui s\'est passé.',
    contradiction_interne: 'Il croit au Second Avatar comme représentant de ce que le Premier aurait pu être — ce qui est à la fois une continuité du respect et une façon de tourner le dos au Premier. Il sait que c\'est les deux.',
    rapport_aux_autres: 'Sarath était devenu son point d\'ancrage dans les Dissidentes — quelqu\'un qui comprenait ce que signifiait avoir connu le Premier Avatar avant. Sa mort a laissé un trou différent de celui que laisse la mort d\'un inconnu.',
    vision_du_monde: 'Les gens qui disent une chose et font l\'inverse ne le font pas toujours par malice. Parfois la pression est plus forte que la conviction. Il l\'a compris. Il ne l\'a pas pardonné non plus. Les deux sont vrais.',
  },

  histoire: {
    enfance: {
      titre: 'Avant la loi',
      contenu: 'Né dans une famille de fonctionnaires impériaux de second rang. Il avait grandi avec l\'Empire comme évidence de la même façon qu\'on grandit avec le ciel — pas aimé, pas questionné. Son élément Électrique faible le plaçait dans la catégorie des Élus ordinaires, suffisamment pour être enregistré, pas assez pour être convoqué.',
    },
    arrivee: {
      titre: 'L\'amitié avant le trône',
      contenu: 'Il avait rencontré le Premier Avatar à 22 ans — avant que l\'Empire soit une idée sérieuse, quand le Premier était encore quelqu\'un qui cherchait à comprendre le monde. Ils avaient eu 15 ans d\'amitié. Ce qu\'il connaissait du Premier était réel — une personne avec des doutes, une aversion sincère pour les systèmes coercitifs, une conviction qu\'on lui avait entendue plusieurs fois.',
    },
    premier_conflit: {
      titre: 'La conversation de trois mois avant',
      contenu: 'Trois mois avant la signature de la loi d\'enregistrement obligatoire, ils avaient discuté de l\'enregistrement. Le Premier avait dit : "je ne signerai jamais une loi qui traite les gens comme des ressources à cataloguer." Tharaevorn avait cru ça. Il avait des raisons de croire ça — 15 ans de raisons.',
    },
    revelation: {
      titre: 'La signature',
      contenu: 'Le Premier a signé. Tharaevorn a lu la loi le lendemain dans les annonces officielles. Il n\'a pas écrit au Premier. Il n\'a pas demandé d\'explication. Il a rendu son insigne cet après-midi, a quitté son poste par les procédures normales, et est parti rejoindre les Dissidentes via Sarath (61) — qu\'il connaissait depuis 3 ans comme quelqu\'un qui avait quitté l\'Empire pour des raisons similaires.',
    },
    etat_actuel: {
      titre: 'Pour le Second',
      contenu: 'Il travaille pour les Dissidentes depuis 20 ans. Il a vu le Second Avatar une fois — il ne lui a pas parlé, mais il était là quand Sarath l\'avait présenté comme "quelqu\'un d\'important". Il avait su immédiatement. Le Second Avatar est ce que le Premier aurait pu être. Cette conviction l\'aide à travailler. Elle ne résout rien sur le Premier, mais elle lui donne une direction.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tharaevorn_premier_avatar_signature',
      titre: 'La phrase et la loi',
      description: '"Je ne signerai jamais une loi qui traite les gens comme des ressources à cataloguer." Il l\'avait entendue, il l\'avait crue, il avait eu tort. 20 ans plus tard, il ne peut pas reconstruire la trajectoire du Premier de la conviction à la signature. Pas parce que la trajectoire est incompréhensible — parce que comprendre la trajectoire impliquerait de plaindre le Premier, et la pitié ne coexiste pas bien avec la trahison.',
      personnages_impliques: [60],
      declencheur: 'Signature de la loi d\'enregistrement obligatoire après une conversation contraire',
      consequence: 'Blessure personnelle — pas une rupture idéologique abstraite, une promesse entendue et non tenue',
    },
    {
      id: 'tharaevorn_sarath_ancrage',
      titre: 'Sarath comme pont',
      description: 'Sarath était le seul dans les Dissidentes qui avait connu assez de l\'histoire pour que Tharaevorn puisse parler du Premier sans avoir à contextualiser longuement. Sa mort a laissé une absence de compréhension contextuelle — maintenant quand il parle du Premier par son prénom, les gens dans les Dissidentes le regardent avec un léger malaise. Ils ne savent pas ce qu\'il a connu.',
      personnages_impliques: [61],
      declencheur: 'Mort de Sarath',
      consequence: 'Perte du seul témoin partageant le contexte — isolement mémoriel',
    },
    {
      id: 'tharaevorn_second_avatar_espoir',
      titre: 'Ce que le Second représente',
      description: 'Le Second Avatar est ce que le Premier aurait pu rester. Tharaevorn sait que c\'est une projection — le Second Avatar est sa propre personne, pas la continuation d\'une trajectoire corrompue. Mais la projection a une utilité : elle lui permet de travailler avec quelque chose qui ressemble à de l\'espoir plutôt qu\'à de la déception.',
      personnages_impliques: [59],
      declencheur: 'Rencontre brève lors d\'une présentation par Sarath',
      consequence: 'Investissement émotionnel dans la protection du Second — pour des raisons qui ne lui appartiennent pas entièrement',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Mémoire vivante du Premier Avatar. Il porte ce que le Premier était avant de signer — et investit le Second de cet héritage. C\'est à la fois un atout et un poids.',

  relations: [
    { id: 60, nom: 'Premier Avatar', type: 'fantôme', note: '15 ans d\'amitié. "Je ne signerai jamais." Il a signé. Tharaevorn est parti le lendemain.' },
    { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'Vu une fois brièvement. Représente ce que le Premier aurait pu être. Tharaevorn en est conscient comme projection — utile quand même.' },
    { id: 61, nom: 'Sarath', type: 'fantôme', note: 'Son ancrage dans les Dissidentes. Mort. Le seul qui comprenait le contexte sans explication.' },
  ],

  combat: {
    sorts: [
      'Arc Électrique (Electrique) — décharge de précision moyenne — suffisant pour incapaciter, pas pour tuer',
      'Résistance normale (Normal) — capacité à opérer sans signature élémentaire notable — discret par nature',
      'Intuition de terrain (Normal) — 20 ans de travail clandestin : lecture des situations avant qu\'elles deviennent des crises',
    ],
  },

  image_prompts: [
    {
      id: 'tharaevorn_memoire',
      description: 'Tharaevorn assis, regard dans le vide — pas le vide de l\'absence, le vide de quelqu\'un qui revoit quelque chose. Un insigne imaginaire qu\'il aurait rendu. La blessure est intégrée, pas guérie. 60 ans, 20 ans après la signature.',
      style: 'réaliste humain, lumière douce de fin de journée, espace simple, tons chauds et légèrement mélancoliques',
    },
  ],

  lore_long: `Il utilise le prénom du Premier Avatar.

Dans les Dissidentes, personne d'autre ne fait ça. Ils disent "le Premier Avatar", "l'ancien régime", "le fondateur de l'Empire". Lui dit son prénom. Ça met les gens légèrement mal à l'aise parce qu'ils ne savent pas comment répondre à quelqu'un qui parle d'une figure historique avec la familiarité d'un ami.

C'est parce qu'il était son ami. Pendant 15 ans.

La conversation de 3 mois avant la signature — elle était longue, ils avaient bu, ils avaient parlé de la loi en débat dans les conseils impériaux. Le Premier avait dit : "je ne signerai jamais une loi qui traite les gens comme des ressources à cataloguer." Tharaevorn l'avait entendu dire des versions de cette phrase pendant 15 ans. Il avait des raisons de le croire.

Le lendemain de la signature, il n'avait pas écrit. Il n'avait pas demandé d'explication. Il s'était dit qu'il y en avait une — pression, contrainte, quelque chose — et que cette explication ne changerait pas ce qui était signé. Il avait rendu son insigne par les procédures normales et était parti.

20 ans plus tard, il a toujours la phrase en tête. Il n'a jamais compris la trajectoire entre la phrase et la signature. Il n'a pas cherché à la comprendre — comprendre impliquerait de plaindre, et plaindre quelqu'un qui t'a menti ressemble à lui offrir une sortie qu'il n'a pas demandée.

Le Second Avatar est différent. Il ne l'a vu qu'une fois, brièvement. Mais dans la façon dont Sarath en parlait avant de mourir — avec une attention qui ressemblait à de la protection — Tharaevorn avait reconnu quelque chose. Ce que le Premier aurait pu rester.

Cette projection n'est pas juste. Le Second Avatar n'est pas une correction du Premier. Tharaevorn le sait. Ça ne change pas l'utilité de la projection.`,
};

export default tharaevorn;
