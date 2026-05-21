import type { PersonnageLoreComplet } from '../../../lore-types';

const kaelorveth: PersonnageLoreComplet = {
  id: 273,
  nom: 'Kaelorveth',
  element: 'Combat',
  element2: 'Sol',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Compact, efficace — pas imposant, mais personne ne le sous-estime deux fois.',
    peau: 'Ocre clair, sans marque élémentaire très visible. L\'élément Sol secondaire se manifeste comme une stabilité posturale inhabituelle — il ne trébuche jamais.',
    yeux: 'Noisette, avec un regard qui observe les détails plutôt que l\'ensemble. Regard d\'enquêteur.',
    vetements: 'Tenue d\'agent de terrain impérial, sobre et pratique. Il a arrêté de porter l\'insigne de grade au col depuis 3 semaines — pas par idéologie, parce qu\'il est moins visible sans.',
    signes_particuliers: 'Il a un rapport dans sa poche depuis 3 semaines. Il le touche parfois sans le sortir — pour vérifier qu\'il est toujours là, ou pour se rappeler qu\'il ne l\'a pas encore remis.',
  },

  psychologie: {
    dominante: 'Compétence en attente de décision. Il sait faire son travail. Son travail maintenant, c\'est de remettre le rapport. Il ne l\'a pas fait. Il n\'examine pas directement pourquoi.',
    mecanisme_de_defense: 'L\'absence de bonne destination. Il n\'a pas encore remis le rapport parce qu\'il cherche encore à qui le remettre — c\'est techniquement vrai. C\'est aussi peut-être une façon de ne pas décider.',
    contradiction_interne: 'Il a trouvé les traces. Les traces sont claires. Le rapport est dans sa poche. Il est agent impérial, son travail est de transmettre ce qu\'il trouve. Il ne l\'a pas transmis. Si on lui demandait pourquoi, il n\'aurait pas encore la réponse.',
    rapport_aux_autres: 'Avel (64) est son supérieur indirect — quelqu\'un dont il respecte la compétence. Il n\'a pas transmis le rapport à Avel non plus. Il ne sait pas si c\'est parce qu\'il fait confiance à Avel ou parce qu\'il a besoin de comprendre pourquoi il attend avant de décider à qui faire confiance.',
    vision_du_monde: 'Il croyait que son travail était de trouver et de transmettre. Il a trouvé. Il n\'a pas transmis. Il commence à se demander si trouver et transmettre sont toujours la même chose.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant qui cherchait',
      contenu: 'Né à l\'Isthme dans une famille de marchands. À 10 ans il résolvait les litiges commerciaux de son père en trouvant les incohérences dans les témoignages — un talent qu\'il n\'avait pas cherché et qui l\'avait simplement toujours été là.',
    },
    arrivee: {
      titre: 'L\'Empire comme structure',
      contenu: 'Recruté à 22 ans par les services d\'investigation impériaux pour sa capacité à lire les scènes et à reconstruire des événements depuis les traces physiques. Il n\'avait pas d\'idéologie impériale particulière — l\'Empire avait une structure, la structure avait des procédures, les procédures lui convenaient.',
    },
    premier_conflit: {
      titre: 'La mission post-Sarath',
      contenu: 'Envoyé il y a 3 semaines pour examiner un abri abandonné dans les Déserts de l\'Isthme — signalé par un contact local comme un lieu de cache récent. Il avait trouvé les traces de Sarath (61), mort il y a un an — un nom dans les archives des Dissidentes, un mode opératoire reconnaissable. Et les traces d\'une deuxième présence — quelqu\'un dont Sarath prenait un soin particulier.',
    },
    revelation: {
      titre: 'Le rapport dans la poche',
      contenu: 'Il avait rédigé le rapport le soir même. Il avait la procédure standard : transmetttre à son supérieur indirect Avel (64), qui transmettrait à la Citadelle, qui transmettrait aux capteurs impériaux. Il l\'avait mis dans sa poche pour le transmettre le lendemain. Trois semaines plus tard, il est encore dans sa poche.',
    },
    etat_actuel: {
      titre: 'La question sans réponse',
      contenu: 'Il a passé 3 semaines à trouver des raisons de ne pas encore transmettre — vérifier une dernière fois, confirmer l\'identité, attendre un meilleur moment pour approcher Avel. Ce sont des raisons valides et insuffisantes. La vraie question — ce qu\'il n\'a pas encore formulé clairement — c\'est : si je transmets ça, qu\'est-ce que ça fait à la personne qui était dans cet abri ?',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaelorveth_abri_traces',
      titre: 'Ce que les traces disaient',
      description: 'L\'abri avait hébergé deux personnes pendant une période prolongée. Les traces de Sarath : méthodiques, organisées, toujours vigilantes. Les traces de l\'autre : une façon de se déplacer qui combinait la prudence apprise et quelque chose d\'autre — une résonance élémentaire résiduelle dans les surfaces de l\'abri que Kaelorveth avait perçue via son élément Sol. Quelque chose de dense, de chaud, d\'inhabituellement fort. Ces traces n\'appartenaient pas à quelqu\'un d\'ordinaire.',
      personnages_impliques: [61, 59],
      declencheur: 'Investigation de l\'abri post-Sarath',
      consequence: 'Portrait indirect du Second Avatar via les traces élémentaires — Kaelorveth a plus d\'informations qu\'il ne le réalise',
    },
    {
      id: 'kaelorveth_avel_non_contact',
      titre: 'Le rapport non transmis à Avel',
      description: 'Avel (64) est son supérieur indirect. Kaelorveth lui a envoyé un message il y a 3 semaines disant qu\'il avait des informations sur le site et qu\'il viendrait les lui présenter "dans les prochains jours". Avel a répondu "compris". Kaelorveth n\'est pas venu. Avel ne l\'a pas relancé. Cet intervalle de silence est l\'espace dans lequel la décision se joue.',
      personnages_impliques: [64],
      declencheur: 'Message d\'annonce non suivi de présentation',
      consequence: 'Délai non expliqué — Avel sait que Kaelorveth attend, ne sait pas pourquoi',
    },
    {
      id: 'kaelorveth_decision_en_cours',
      titre: 'La formulation progressive',
      description: 'Il n\'a pas encore formulé clairement la question : si je transmets ça, qu\'est-ce que ça fait à la personne qui était dans cet abri ? Mais il s\'en approche. Chaque jour où il relit le rapport est un jour où il pèse quelque chose qu\'il n\'avait pas pesé les 10 premières années de sa carrière. La compétence sans la question avait suffi jusqu\'ici.',
      personnages_impliques: [59],
      declencheur: 'Trois semaines de délai non justifié',
      consequence: 'Transformation en cours — de l\'agent technique à quelqu\'un qui évalue les conséquences de ses transmissions',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'En hésitation active. Il a les traces, il a le rapport, il n\'a pas transmis. La décision qu\'il ne prend pas est aussi une décision.',

  relations: [
    { id: 61, nom: 'Sarath', type: 'fantôme', note: 'A lu ses traces dans l\'abri après sa mort. Reconstitué son mode opératoire. Sarath est une information, pas une personne pour lui — mais une information qui lui a donné du respect pour quelqu\'un qu\'il n\'a pas connu.' },
    { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'A lu ses traces résiduelles. Le rapport dans sa poche le concerne. Kaelorveth ne sait pas encore ce qu\'il lui veut.' },
    { id: 64, nom: 'Avel', type: 'mentor', note: 'Supérieur indirect — annoncé l\'information, pas transmis. L\'intervalle de silence est la décision en cours.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'investigation (Combat) — technique d\'interception sans dommages — neutraliser sans blesser',
      'Ancrage de Sol (Sol) — stabilisation de position — résistance accrue au déplacement forcé',
      'Lecture de trace (Sol) — perception des perturbations physiques laissées par une présence dans les surfaces — utile en enquête',
    ],
  },

  image_prompts: [
    {
      id: 'kaelorveth_rapport',
      description: 'Kaelorveth dans un couloir vide, sa main dans la poche qui touche le rapport sans le sortir. Il ne regarde rien de particulier. Il pèse quelque chose. L\'expression n\'est pas de l\'hésitation dramatique — c\'est la face d\'un homme en train de comprendre une question qu\'il ne s\'était jamais posée avant.',
      style: 'réaliste humain, lumière neutre de couloir, tons ocre et gris, tension intérieure calme',
    },
  ],

  lore_long: `Il a le rapport dans la poche depuis 3 semaines.

Les traces étaient claires. Ce n'est pas une question de qualité d'investigation — il a 11 ans d'expérience, il sait lire un abri, il sait distinguer ce qui est intentionnel de ce qui est accidentel dans les traces laissées par quelqu'un en clandestinité. Sarath était méthodique, prudent, organisé. L'autre personne était quelqu'un dont il prenait un soin particulier.

La résonance élémentaire résiduelle dans les surfaces de l'abri : son élément Sol lui avait permis de la percevoir à travers les planchers de terre battue. Dense, chaud, fort d'une façon qui dépassait ce qu'il avait l'habitude de trouver sur les scènes. Ce n'était pas quelqu'un d'ordinaire.

Il avait rédigé le rapport le soir même. Transmetttre à Avel, Avel transmettrait à la Citadelle, la Citadelle transmettrait aux capteurs. Procédure standard.

Il a dit à Avel qu'il viendrait dans les prochains jours. Il n'est pas venu. Avel ne l'a pas relancé.

3 semaines.

La question qu'il s'approche de formuler : si je transmets ça, qu'est-ce que ça fait à la personne qui était dans cet abri ?

C'est une question qu'il ne s'était pas posée pendant 11 ans. Il trouvait des choses. Il les transmettait. Les conséquences de la transmission n'étaient pas son problème — son problème était la précision de la trouvaille.

Il a trouvé quelque chose de précis. Et la précision de sa trouvaille lui pose une question à laquelle il n'a pas encore répondu.

Le rapport est dans la poche.`,
};

export default kaelorveth;
