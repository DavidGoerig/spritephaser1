import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvethyn: PersonnageLoreComplet = {
  id: 130,
  nom: 'Sylvethyn',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: 'Sylvan de 41 ans, forestier de terrain — corpulence de quelqu\'un qui travaille en forêt quotidiennement.',
    peau: 'Écorce verte-sombre avec des marques d\'observation nocturne — les traces d\'un Sylvan qui passe beaucoup de temps dehors la nuit.',
    yeux: 'Verts avec une qualité de quelqu\'un qui se souvient de quelque chose qu\'il n\'a pas encore compris.',
    vetements: 'Tenue standard de forestier Gardien. Rien de particulier.',
    signes_particuliers: 'Il a vu un fragment du réseau de Thalindre briller une nuit. Il n\'en a parlé à personne. Il ne sait pas ce que c\'était.',
  },

  psychologie: {
    dominante: 'Forestier Gardien ordinaire. Une nuit, lors d\'une patrouille de routine, il a vu quelque chose briller dans la zone du réseau de Thalindre — un fragment actif. Il n\'a pas compris ce que c\'était. Il n\'en a parlé à personne. Cette observation dormante a une valeur qu\'il ignore.',
    mecanisme_de_defense: 'Le silence comme protection contre l\'absurde. Il n\'a pas de cadre pour interpréter ce qu\'il a vu. En en parlant, il risque de paraître fou.',
    contradiction_interne: 'Il a vu quelque chose d\'important — le fragment du réseau que Aelvyn (119) cherche et que Sylindra (37) a aussi découvert. Mais sans cadre pour l\'interpréter, il le garde pour lui.',
    rapport_aux_autres: 'Sylindra (37) est un contact indirect — il ne la connaît pas, mais elle a fait une observation similaire à la sienne. La Faim des Racines est le contexte de ce qu\'il a vu.',
    vision_du_monde: 'Les forêts de Sylvera ont des phénomènes que les Gardiens gèrent sans toujours comprendre. Ce qu\'il a vu s\'inscrit peut-être dans ce registre. Peut-être que c\'est autre chose.',
  },

  histoire: {
    enfance: {
      titre: 'Les Gardiens',
      contenu: 'Né dans une famille de Gardiens. Formation forestière standard. Patrouilles, gestion, brûlages dirigés. Un travail ordinaire dans un contexte politique complexe.',
    },
    arrivee: {
      titre: 'La patrouille',
      contenu: 'Une nuit il y a 8 mois, lors d\'une patrouille dans une zone périphérique de Sylvera, il avait vu quelque chose briller dans la végétation. Un éclat vert-doré, pulsé, dans une zone où le réseau de Thalindre était supposé mort.',
    },
    premier_conflit: {
      titre: 'Le silence',
      contenu: 'Il était rentré et n\'en avait rien dit. Il n\'avait pas de cadre pour rapporter l\'observation. "J\'ai vu un fragment mort du réseau briller" semblait absurde dans un rapport de patrouille Gardien.',
    },
    revelation: {
      titre: 'L\'importance possible',
      contenu: 'Il avait entendu des conversations sur la recherche d\'Aelvyn (119) — un botaniste Conservateur qui cherchait un fragment actif du réseau racinaire. Il avait compris que ce qu\'il avait vu correspondait peut-être à ce qu\'Aelvyn cherchait. Il n\'avait toujours rien dit — Aelvyn était Conservateur.',
    },
    etat_actuel: {
      titre: 'L\'observation dormante',
      contenu: 'Il patrouille. Il se souvient. Il ne sait pas quoi faire de ce souvenir.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvethyn_fragment',
      titre: 'Le témoin qui ne sait pas',
      description: 'Sylvethyn a vu un fragment actif du réseau de Thalindre briller. Il ne sait pas que Sylindra (37) en a trouvé un de son côté. Il ne sait pas qu\'Aelvyn (119) cherche exactement ça. Si quelqu\'un lui pose la bonne question — ou s\'il trouve le courage de rapporter son observation — ces trois connaissances séparées pourront se rejoindre.',
      personnages_impliques: [37],
      declencheur: 'Quelqu\'un lui posant une question sur ses observations nocturnes dans la zone de Thalindre',
      consequence: 'Sylvethyn révélant son observation — et permettant une triangulation avec Sylindra et Aelvyn',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Forestier Gardien ordinaire. A vu un fragment du réseau de Thalindre briller il y a 8 mois. N\'en a parlé à personne.',

  relations: [
    { id: 37, nom: 'Sylindra', type: 'contact', note: 'Contact indirect — a fait une observation similaire. Ignorance mutuelle.' },
  ],

  combat: {
    sorts: [
      'Patrouille végétale (Plante) — surveillance par réseau racinaire — détection de présence',
      'Frappe forestière (Plante) — projection végétale — attaque de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'sylvethyn_patrouille',
      description: 'Sylvethyn en patrouille nocturne dans une forêt de Sylvera — un Sylvan de 41 ans s\'arrêtant devant quelque chose dans la végétation. Un éclat vert-doré pulse dans les racines. Il ne comprend pas ce qu\'il voit. Il n\'en parlera pas.',
      style: 'réaliste Sylvan forestier Gardien, Sylvera nocturne, fragment du réseau de Thalindre, observation dormante',
    },
  ],

  lore_long: `Sylvethyn est un forestier Gardien ordinaire. Il y a 8 mois, lors d'une patrouille, il a vu un fragment du réseau de Thalindre briller dans la nuit.

Il n'a pas de cadre pour interpréter ce qu'il a vu. Il n'en a parlé à personne.

Aelvyn (119) cherche exactement ça. Sylindra (37) en a trouvé un. Sylvethyn a été témoin d'un troisième fragment.`,
};

export default sylvethyn;
