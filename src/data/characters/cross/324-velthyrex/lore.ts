import type { PersonnageLoreComplet } from '../../../lore-types';

const velthyrex: PersonnageLoreComplet = {
  id: 324,
  nom: 'Velthyrex',
  element: 'Ténèbres',
  element2: 'Psy',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyen, avec une façon de se déplacer dans Vel\'Nox qui suggère qu\'il connaît chaque ombre par son nom. Économe, efficace, visible uniquement quand il le choisit.',
    peau: 'Gris Umbrien standard avec des marques de tension aux articulations — le résultat d\'un travail qui implique des positions prolongées dans des espaces difficiles.',
    yeux: 'Violets avec une acuité d\'observation que les gens remarquent trop tard. Il a déjà évalué une personne avant qu\'elle ait fini d\'entrer dans la pièce.',
    vetements: 'Tenue de rue de Vel\'Nox, adaptée selon le niveau de la ville où il travaille. Il a au moins trois ensembles différents pour les différentes Couches.',
    signes_particuliers: 'Il prend des notes écrites — pas mentalement, pas sur tablette, sur papier. Dans un monde où beaucoup d\'informations peuvent être interceptées psychiquement, le papier reste privé.',
  },

  psychologie: {
    dominante: 'Résolution de problèmes factuels pour des clients qui paient. Vel\'Nox est une ville sans éclairage officiel et avec une multiplicité de factions et d\'intérêts. Il navigue tout ça sans prendre parti.',
    mecanisme_de_defense: 'La règle du paiement. Il travaille pour qui paie. Si quelqu\'un paie plus, il ne change pas de camp — il finit le travail en cours et refuse les mandats futurs. Sa réputation repose sur cette constance.',
    contradiction_interne: 'Ses méthodes sont discutables — il lit des résidus psychiques sans consentement, il suit des personnes, il accède à des informations que ses sujets pensent privées. Il se distingue de la Convergence parce qu\'il vend ses données à un seul client et ne les conserve pas. Cette distinction est réelle. Elle est aussi fine.',
    rapport_aux_autres: 'Tharyn (50) est son client le plus régulier — des enquêtes sur les mouvements de biens et de personnes dans Vel\'Nox. Nyrath (147) lui a fourni une fois des informations sur un dossier en échange d\'autres informations. Il travaille avec elle quand les intérêts convergent.',
    vision_du_monde: 'Vel\'Nox est une ville où personne ne voit tout. Lui voit plus que la plupart. Cette visibilité supplémentaire se vend.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfance dans les Trois Couches',
      contenu: 'Né dans la Couche intermédiaire de Vel\'Nox — ni la surface accessible aux étrangers, ni les niveaux les plus profonds réservés aux Umbriens anciens. À 14 ans, il avait des informations sur les trois couches et savait les vendre. À 18 ans, il avait une clientèle.',
    },
    arrivee: {
      titre: 'Le premier mandat formel',
      contenu: 'À 23 ans, Tharyn (50) lui avait confié un premier mandat formel — retrouver la trace d\'un envoi de biens dans Vel\'Nox qui avait disparu dans les niveaux inférieurs. Il avait retrouvé l\'envoi en 5 jours. Tharyn avait payé le montant convenu et lui avait confié un second mandat immédiatement.',
    },
    premier_conflit: {
      titre: 'Les méthodes discutées',
      contenu: 'À 28 ans, un client avait contesté ses méthodes — il avait accédé à des résidus psychiques d\'une tierce personne sans qu\'on le lui ait demandé, parce que cette tierce personne avait des informations pertinentes pour le mandat. Le client avait payé mais avait posé la question de la légitimité de cet accès. Velthyrex avait répondu que le résultat justifiait la méthode. Le client n\'avait pas reposé la question. Il avait quand même réfléchi à la réponse.',
    },
    revelation: {
      titre: 'L\'échange avec Nyrath',
      contenu: 'Nyrath (147) l\'avait approché pour un échange d\'informations — elle avait des données sur un dossier qu\'il avait en cours, il avait des données sur quelque chose qu\'elle cherchait. L\'échange avait fonctionné. Il n\'avait pas demandé pourquoi Nyrath avait ces données. Elle n\'avait pas demandé pourquoi il avait les siennes.',
    },
    etat_actuel: {
      titre: 'Les mandats en cours',
      contenu: 'Trois mandats actifs : un pour Tharyn (50) sur les mouvements de personnes dans la Couche basse, un pour un client anonyme sur les routines d\'un marchand de la Couche haute, un pour Nyrath (147) sur quelque chose qu\'elle n\'a pas voulu préciser entièrement. Ce troisième mandat est le seul qu\'il aurait pu refuser mais n\'a pas refusé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthyrex_mandat_nyrath',
      titre: 'Le mandat non entièrement précisé',
      description: 'Le mandat de Nyrath (147) n\'est pas entièrement précisé. Elle lui a donné un profil et un espace à surveiller. Elle ne lui a pas dit pourquoi. Il a accepté parce que Nyrath est quelqu\'un dont les mandats ont toujours eu une logique, même quand cette logique n\'était pas immédiatement visible. Il réserve le droit de refuser l\'étape suivante si ce qu\'il découvre ne correspond pas à ce qu\'il est prêt à faire.',
      personnages_impliques: [147, 50],
      declencheur: 'Mandat accepté sur la base de la confiance dans le mandataire',
      consequence: 'Surveillance en cours sur objectif non entièrement défini — clause de refus maintenue',
    },
    {
      id: 'velthyrex_distinction_convergence',
      titre: 'La distinction fine',
      description: 'Il se distingue de la Convergence en ne conservant pas les données après la livraison au client. Cette distinction est réelle dans ses pratiques. Elle est aussi fine — ses méthodes d\'accès aux résidus psychiques sont similaires à celles des analystes de la Convergence. La différence est dans l\'usage post-collecte, pas dans la collecte elle-même. Il l\'a formulé à voix haute une fois. Il ne l\'a pas répété.',
      personnages_impliques: [],
      declencheur: 'Question d\'un client sur la légitimité des méthodes',
      consequence: 'Position éthique maintenue mais reconnue comme fine — non formalisée',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Détective privé qui voit plus que la plupart dans Vel\'Nox. Ses informations circulent entre des clients de factions différentes. Sa neutralité commerciale maintient un accès à toutes les couches de la ville.',

  relations: [
    { id: 50, nom: 'Tharyn', type: 'allié', note: 'Client le plus régulier. Mandats sur mouvements dans Vel\'Nox. Relation commerciale longue durée.' },
    { id: 147, nom: 'Nyrath', type: 'allié', note: 'Échange d\'informations quand les intérêts convergent. Mandat en cours partiellement précisé.' },
  ],

  combat: {
    sorts: [
      'Surveillance d\'ombre (Ténèbres) — suivi d\'une cible via ses résidus Ténèbres dans l\'espace — pistage à distance',
      'Lecture psy non invasive (Psy) — accès aux couches superficielles d\'une présence psychique — information sans contact',
      'Disparition dans l\'ombre (Ténèbres) — dissimulation complète dans les zones sans lumière — invisibilité en milieu urbain',
    ],
  },

  image_prompts: [
    {
      id: 'velthyrex_surveillance',
      description: 'Velthyrex dans une position d\'observation dans une Couche de Vel\'Nox — en hauteur, dans l\'ombre, regardant un espace en contrebas. Il prend des notes sur du papier. Son carnet est ouvert sur ses genoux. L\'espace en bas est actif et personne ne le regarde.',
      style: 'réaliste détective umbrien, Vel\'Nox en ombre, observation en surplomb, notes manuscrites',
    },
  ],

  lore_long: `Velthyrex est détective privé dans Vel'Nox. Il lit des résidus psychiques, suit des personnes, accède à des informations que ses sujets pensent privées.

Il ne conserve pas les données après livraison au client. C'est ce qui le distingue de la Convergence. Cette distinction est réelle. Elle est aussi fine.

Tharyn (50) est son client principal. Nyrath (147) lui confie parfois des mandats dont elle ne précise pas entièrement la raison. Il a accepté le dernier sur la base de la confiance dans la logique de Nyrath.

Il prend ses notes sur papier. Dans Vel'Nox, c'est la seule chose qui reste vraiment privée.`,
};

export default velthyrex;
