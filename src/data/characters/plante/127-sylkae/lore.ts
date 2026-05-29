import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkae: PersonnageLoreComplet = {
  id: 127,
  nom: 'Sylkae',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de 49 ans, posture d\'archiviste — précise, ordonnée. Elle range les choses à des endroits précis et elle s\'en souvient.',
    peau: 'Écorce verte-dorée avec des marques symboliques végétales — les signes de notation des chants-mémoire Sylvan, appris pendant des décennies.',
    yeux: 'Verts avec une qualité de catalogue vivant. Elle classe ce qu\'elle voit.',
    vetements: 'Tenue sobre d\'archiviste Conservatrice — aucune ostentation, beaucoup de poches pour ses tablettes de notation.',
    signes_particuliers: 'Elle archive les chants-mémoire de Sylvera sans savoir que Sylketh (116) transporte les mêmes chants oralement. Deux préservations parallèles qui s\'ignorent.',
  },

  psychologie: {
    dominante: 'Archiviste Conservatrice qui transcrit les chants-mémoire Sylvan sur des supports durables. Elle travaille en parallèle avec Sylketh (116) — un chanteur itinérant qui transporte les mêmes chants oralement — sans le savoir. Leurs méthodes sont complémentaires et ignorées l\'une de l\'autre.',
    mecanisme_de_defense: 'L\'archive comme protection contre la disparition. Si les chants sont transcrits, ils survivent même si les chanteurs ne sont plus là.',
    contradiction_interne: 'Elle transcrit des chants qui sont aussi portés oralement. L\'une des préservations est secrète (Sylketh) et l\'autre est officielle (elle). Une coordination renforcerait les deux — mais elle ne la cherche pas parce qu\'elle ne sait pas que Sylketh existe.',
    rapport_aux_autres: 'Sylvae (31) est dans son réseau — elle soutient ses archives. Sylketh (116) est un parallèle ignoré — elle ne sait pas qu\'il existe.',
    vision_du_monde: 'Les chants-mémoire sont fragiles. Les porteurs meurent. Les archives durent. Son travail est de faire durer ce qui est fragile.',
  },

  histoire: {
    enfance: {
      titre: 'L\'archive',
      contenu: 'Formation en archivistique Sylvan. Elle avait commencé à travailler sur les chants-mémoire à 25 ans, quand une vieille chante était morte sans transmettre ses variantes uniques. Cette perte l\'avait orientée vers la transcription systématique.',
    },
    arrivee: {
      titre: 'La méthode',
      contenu: 'Elle avait développé un système de notation des chants-mémoire adapté à leur structure spécifique — rythme végétal, tonalités saisonnières, mémoires enchâssées. Ce système avait pris 5 ans à stabiliser.',
    },
    premier_conflit: {
      titre: 'Les chants interdits',
      contenu: 'Les Gardiens avaient déclaré certains chants interdits. Elle les avait quand même archivés — une archive n\'est pas une diffusion. Elle avait débattu de cette distinction avec Sylvae (31). L\'archive restait secrète.',
    },
    revelation: {
      titre: 'L\'archive secrète',
      contenu: 'Elle avait compris que son archive des chants interdits était maintenant la seule trace officielle de certains d\'entre eux — les chanteurs qui les portaient avaient cessé de les diffuser. Elle détenait quelque chose de plus important qu\'elle ne pensait.',
    },
    etat_actuel: {
      titre: 'L\'archivage',
      contenu: 'Elle archive. Sylketh (116) transporte oralement. Ils ne savent pas l\'un de l\'autre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkae_sylketh',
      titre: 'Les deux préservations',
      description: 'Sylkae archive les chants-mémoire par écrit. Sylketh (116) les transporte oralement. Si Sylketh est arrêté, l\'archive de Sylkae devient la seule copie de certains chants interdits. Si les archives de Sylkae sont découvertes et détruites, la mémoire orale de Sylketh devient la seule copie. Leur ignorance mutuelle est une vulnérabilité pour les deux.',
      personnages_impliques: [31, 116],
      declencheur: 'Sylketh arrêté ou archives de Sylkae découvertes',
      consequence: 'La préservation des chants dépend soudainement d\'une seule source — qui peut elle aussi être perdue',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Archiviste Conservatrice des chants-mémoire. Archive en parallèle avec Sylketh (116) sans le savoir. Détient les seules copies écrites de chants interdits.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Soutient ses archives.' },
    { id: 116, nom: 'Sylketh', type: 'contact', note: 'Transporte les mêmes chants oralement — ignorance mutuelle.' },
  ],

  combat: {
    sorts: [
      'Lecture végétale (Plante) — interprétation des signaux forestiers — information de terrain',
      'Barrière d\'archives (Plante) — protection de zone par végétation dense — défense',
    ],
  },

  image_prompts: [
    {
      id: 'sylkae_archive',
      description: 'Sylkae dans son espace d\'archives à Sylvera — une Sylvan de 49 ans transcrivant un chant-mémoire sur une tablette végétale. Autour d\'elle, des rayonnages de tablettes classées. Elle archive quelque chose qu\'elle ne sait pas être aussi transporté oralement par quelqu\'un d\'autre.',
      style: 'réaliste Sylvan archiviste, Sylvera, chants-mémoire transcrits, archive secrète, parallèle ignoré',
    },
  ],

  lore_long: `Sylkae transcrit les chants-mémoire de Sylvera depuis 20 ans. Son archive contient des chants interdits par les Gardiens.

Sylketh (116) transporte les mêmes chants oralement. Ils ne savent pas l'un de l'autre.

Leur ignorance mutuelle est une vulnérabilité : si l'un des deux est arrêté ou détruit, l'autre devient la seule copie.`,
};

export default sylkae;
