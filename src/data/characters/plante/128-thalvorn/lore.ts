import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvorn: PersonnageLoreComplet = {
  id: 128,
  nom: 'Thalvorn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Sylvan de 68 ans, avec la corpulence de quelqu\'un qui vit seul depuis longtemps — ni entretenu pour les autres, ni négligé. Fonctionnel pour lui-même.',
    peau: 'Écorce sombre, épaissie par 20 ans d\'exposition à une forêt "neutre" — un bois non-géré par les factions, plus sauvage.',
    yeux: 'Verts avec une qualité de quelqu\'un qui a décidé de ne plus regarder dans certaines directions.',
    vetements: 'Tenue de survie autonome — réparée avec ce qu\'il trouve, sans esthétique.',
    signes_particuliers: 'Il vit dans une forêt "neutre" à la périphérie de Sylvera depuis 20 ans. Il refuse tout contact politique. Ce refus est une position politique.',
  },

  psychologie: {
    dominante: 'Sylvan exilé dans une forêt "neutre" depuis 20 ans. Il a quitté Sylvera lors d\'un événement lié à la Faim des Racines — quelque chose qu\'il n\'a jamais raconté. Il refuse tout contact politique depuis. Cette absence de contact est elle-même une position.',
    mecanisme_de_defense: 'L\'isolement physique comme protection contre un engagement qu\'il ne peut plus faire. Il ne refuse pas par inertie — il refuse activement.',
    contradiction_interne: 'Il vit dans une forêt neutre. Cette forêt lui appartient dans le sens où il l\'habite. Mais les deux factions la revendiquent aussi. Son isolement dépend d\'une situation politique qu\'il refuse d\'influencer.',
    rapport_aux_autres: 'Aelvyn (119) a cherché à le contacter à propos de la reconstruction du réseau racinaire. Thalvorn a refusé de le recevoir — mais il avait des informations sur la Faim que Aelvyn cherchait.',
    vision_du_monde: 'Ce qu\'il a vu pendant la Faim des Racines lui a appris quelque chose sur Sylvera qu\'il n\'a pas voulu partager. Il a préféré partir plutôt que de vivre avec cette connaissance dans le conflit actuel.',
  },

  histoire: {
    enfance: {
      titre: 'Sylvera',
      contenu: 'Né à Sylvera dans une famille sans affiliation factionnelle forte. Il avait vécu la période de la Faim des Racines comme adolescent — vieux assez pour comprendre, trop jeune pour agir.',
    },
    arrivee: {
      titre: 'L\'événement',
      contenu: 'À 48 ans, quelque chose s\'était passé pendant une crise liée aux séquelles de la Faim des Racines. Il n\'en parle pas. Il est parti dans la forêt neutre quelques semaines après.',
    },
    premier_conflit: {
      titre: 'Le refus',
      contenu: 'Les deux factions avaient envoyé des émissaires dans sa forêt les premières années. Il avait refusé de les recevoir. À un moment, elles avaient cessé d\'essayer.',
    },
    revelation: {
      titre: 'Ce qu\'il sait',
      contenu: 'Il sait quelque chose sur la Faim des Racines — une information que ni Conservateurs ni Gardiens n\'ont. Il l\'a gardée pour lui. Il ne sait pas si la partager aiderait ou aggraverait.',
    },
    etat_actuel: {
      titre: 'La forêt neutre',
      contenu: 'Il vit seul dans sa forêt. Il a refusé Aelvyn (119) quand il est venu chercher des informations. Il continue de refuser.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvorn_savoir',
      titre: 'Ce que l\'exilé sait',
      description: 'Thalvorn a quitté Sylvera après un événement lié à la Faim des Racines et refuse tout contact depuis 20 ans. Il détient une information sur la Faim que personne d\'autre n\'a. Si quelqu\'un lui donne une raison assez forte pour rompre son isolement — une crise qui nécessite sa connaissance ou une personne en qui il a confiance — il devra décider si partager est pire que garder.',
      personnages_impliques: [119],
      declencheur: 'Quelqu\'un suffisamment digne de confiance lui donnant une raison de parler',
      consequence: 'Thalvorn révélant ce qu\'il sait sur la Faim des Racines — ou refusant jusqu\'à ce que ce soit trop tard',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Sylvan exilé refusant tout contact politique depuis 20 ans. Sait quelque chose sur la Faim des Racines qu\'il n\'a jamais partagé.',

  relations: [
    { id: 119, nom: 'Aelvyn', type: 'contact', note: 'A cherché à le contacter pour ses recherches. Thalvorn a refusé.' },
  ],

  combat: {
    sorts: [
      'Forêt sauvage (Plante) — activation de végétation non-gérée — terrain hostile pour les intrus',
      'Croissance défensive (Plante) — barrière végétale rapide — protection d\'isolement',
    ],
  },

  image_prompts: [
    {
      id: 'thalvorn_exil',
      description: 'Thalvorn dans sa forêt neutre à la périphérie de Sylvera — un Sylvan de 68 ans seul dans une végétation dense et non-gérée. Son expression est de quelqu\'un qui a choisi de ne plus regarder vers Sylvera. Quelque part dans ses yeux, quelque chose qu\'il n\'a jamais raconté.',
      style: 'réaliste Sylvan exilé, forêt neutre de Sylvera, isolement volontaire, connaissance silencieuse de la Faim',
    },
  ],

  lore_long: `Thalvorn a quitté Sylvera il y a 20 ans après un événement qu'il n'a jamais raconté. Il vit seul dans une forêt neutre et refuse tout contact politique.

Il sait quelque chose sur la Faim des Racines que personne d'autre n'a.

Il a refusé Aelvyn (119) quand il est venu chercher cette information.`,
};

export default thalvorn;
