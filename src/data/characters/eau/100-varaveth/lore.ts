import type { PersonnageLoreComplet } from '../../../lore-types';

const varaveth: PersonnageLoreComplet = {
  id: 100,
  nom: 'Varaveth',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 83 ans, vieux avec la solidité d\'un homme qui a passé sa vie en mer. Ses mains sont très épaisses. Ses yeux sont encore vifs.',
    peau: 'Bleutée Néréide profonde avec une luminescence aqueuse tenue — l\'élément Eau d\'un homme qui a navigué toute sa vie sur des eaux qui ont changé.',
    yeux: 'Bleus profonds avec une qualité de quelqu\'un qui a vu une chose précise se produire et n\'a jamais été invité à en parler.',
    vetements: 'Tenue de pêcheur vieil, réparée de nombreuses fois. Il ne sort plus en mer mais il reste habillé pour la mer.',
    signes_particuliers: 'Il a vu le Silence des Vents en temps réel — il était en mer ce jour-là. Personne ne lui demande son témoignage. Cette absence de demande le préoccupe.',
  },

  psychologie: {
    dominante: 'Vieux pêcheur de 83 ans qui a vu le Silence des Vents se produire depuis son bateau. Il a un témoignage direct de l\'événement fondateur de la réalité de Thalassyr. Personne ne le lui a jamais demandé.',
    mecanisme_de_defense: 'La résignation pratique. Il a essayé de raconter. Les gens étaient occupés par les conséquences plutôt que par l\'événement lui-même.',
    contradiction_interne: 'Il a une information précieuse et n\'a pas les outils pour la rendre accessible. Sa version de l\'événement — celle du marin qui était là — diffère peut-être des versions officielles. Il ne sait pas.',
    rapport_aux_autres: 'Lysara (14) est une figure de son monde — il l\'avait vue avant le Silence. Le Silence des Vents est son expérience centrale depuis 48 ans.',
    vision_du_monde: 'Les événements importants ont des témoins directs. Ces témoins ont quelque chose à dire. Le fait que personne ne leur demande dit quelque chose sur comment l\'histoire s\'écrit.',
  },

  histoire: {
    enfance: {
      titre: 'La pêche',
      contenu: 'Pêcheur depuis l\'âge de 12 ans. À 35 ans, il était en mer quand le Silence des Vents s\'était produit. Il avait vu la transition — les vents qui s\'arrêtaient, puis la tempête brève, puis le silence.',
    },
    arrivee: {
      titre: 'Le retour au port',
      contenu: 'Il était rentré au port dans les jours suivant l\'événement. La ville était dans la confusion de l\'immédiat. Il avait essayé de raconter ce qu\'il avait vu. On lui avait dit que les gens étaient occupés.',
    },
    premier_conflit: {
      titre: 'Les versions officielles',
      contenu: 'Les versions officielles du Silence des Vents s\'étaient développées sans son témoignage. Ce qu\'elles disaient correspondait à certaines choses qu\'il avait vues — pas à d\'autres. Il n\'avait pas trouvé comment corriger la différence.',
    },
    revelation: {
      titre: 'L\'attente',
      contenu: 'Il avait attendu que quelqu\'un lui demande. À 83 ans, personne n\'avait demandé directement.',
    },
    etat_actuel: {
      titre: 'Le témoin',
      contenu: 'Il vit à Thalassyr. Il a encore sa mémoire. Il attend encore. Il n\'a pas beaucoup de temps.',
    },
  },

  evenements_narratifs: [
    {
      id: 'varaveth_temoignage',
      titre: 'Le dernier témoin direct',
      description: 'Varaveth est peut-être le dernier témoin direct du Silence des Vents encore vivant. Sa version — celle du marin en mer ce jour-là — peut différer des versions officielles. À 83 ans, sa mémoire est encore vive. Si quelqu\'un lui demande avant sa mort, son témoignage peut changer quelque chose dans la compréhension de l\'événement.',
      personnages_impliques: [14],
      declencheur: 'Quelqu\'un cherchant des témoignages directs sur le Silence des Vents',
      consequence: 'Témoignage qui complète ou contredit les versions officielles — ou mort du dernier témoin sans qu\'il ait été entendu',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Dernier témoin direct du Silence des Vents. Pêcheur de 83 ans. Personne ne lui a jamais demandé son témoignage. Il attend.',

  relations: [
    { id: 14, nom: 'Lysara', type: 'contact', note: 'Figure de son monde d\'avant le Silence.' },
  ],

  combat: {
    sorts: [
      'Pas de combat (Eau) — Varaveth est vieux. Il n\'utilise plus son élément activement.',
    ],
  },

  image_prompts: [
    {
      id: 'varaveth_port',
      description: 'Varaveth assis sur le quai de Thalassyr — un vieux Néréide de 83 ans regardant la mer. Son expression est de quelqu\'un qui attend qu\'on lui pose une question qui n\'est jamais venue. Il a été là quand le Silence s\'est produit.',
      style: 'réaliste Néréide vieux témoin, quai de Thalassyr, Silence des Vents témoin direct, attente d\'une question jamais posée',
    },
  ],

  lore_long: `Varaveth a 83 ans. Il était en mer quand le Silence des Vents s'est produit il y a 48 ans.

Il a un témoignage direct de l'événement fondateur de la réalité de Thalassyr. Personne ne lui a jamais demandé.

Sa mémoire est encore vive. Il n'a pas beaucoup de temps.`,
};

export default varaveth;
