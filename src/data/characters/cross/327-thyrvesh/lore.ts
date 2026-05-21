import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvesh: PersonnageLoreComplet = {
  id: 327,
  nom: 'Thyrvesh',
  element: 'Ténèbres',
  element2: 'Spectre',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Grand, avec des mouvements lents et mesurés — quelqu\'un qui a appris à ne pas perturber les environnements spectraux par des actions brusques.',
    peau: 'Gris-ardoise Umbrien avec des zones légèrement plus froides aux mains — contact prolongé avec des signatures spectrales. Les zones froides sont permanentes.',
    yeux: 'Gris très sombre avec une qualité d\'observation qui porte sur l\'absent plutôt que le présent. Il regarde ce qui était là, pas ce qui y est.',
    vetements: 'Tenue de terrain sans marqueur de faction — les zones des défunts ne demandent pas de hiérarchie visible. Des instruments de collecte de signatures dans des étuis intégrés à la ceinture.',
    signes_particuliers: 'Il ne parle pas dans les zones spectrales actives — les vibrations sonores perturbent certaines signatures. Il communique par gestes dans ces zones. Ses gestes sont précis et économes.',
  },

  psychologie: {
    dominante: 'Collecte méthodique de signatures spectrales pour un Protocole dont il connaît les bases mais pas l\'intégralité des usages. Il fait sa partie du travail. D\'autres font d\'autres parties.',
    mecanisme_de_defense: 'La compartimentation. Il ne sait que ce dont il a besoin pour faire son travail. Cette ignorance délibérée est une protection — ce qu\'on ne sait pas, on ne peut pas le révéler sous pression.',
    contradiction_interne: 'Les signatures spectrales qu\'il collecte sont celles de personnes mortes. Ces personnes n\'ont pas consenti à être cataloguées. Elles ne peuvent pas consentir. Il a décidé que les morts n\'ont pas de droits sur leurs signatures parce que l\'alternative — arrêter de collecter — n\'est pas une option qu\'il se permet.',
    rapport_aux_autres: 'Zyress (240) lui fournit des informations sur les zones spectrales actives à Vel\'Nox — les endroits où des signatures récentes sont présentes. Shael (48) reçoit ses collections et les intègre au Protocole sans lui expliquer leur usage.',
    vision_du_monde: 'Les morts laissent des traces. Ces traces existent indépendamment de ce qu\'on en fait. Les collecter est une forme de documentation. La documentation est neutre.',
  },

  histoire: {
    enfance: {
      titre: 'Le contact précoce avec les défunts',
      contenu: 'À 16 ans, il avait commencé à percevoir les résidus spectraux laissés par les morts dans les zones de Vel\'Nox — les plus vieilles couches de la ville, où les morts anciens s\'étaient accumulés. Les résidus étaient différents des présences vivantes. Plus calmes. Plus fixes.',
    },
    arrivee: {
      titre: 'Le recrutement de la Convergence',
      contenu: 'À 25 ans, Shael (48) l\'avait approché. La Convergence avait besoin de quelqu\'un capable de naviguer les zones spectrales actives et d\'en extraire des signatures. Il avait demandé à quoi ça servait. La réponse avait été suffisamment incomplète pour qu\'il comprenne qu\'il ne saurait pas tout. Il avait accepté quand même.',
    },
    premier_conflit: {
      titre: 'La zone des morts récents',
      contenu: 'À 31 ans, il avait été envoyé dans une zone de Vel\'Nox avec des morts récents — des personnes décédées dans les 6 mois. Collecter les signatures de morts anciens lui posait peu de questions. Les morts récents avaient des signatures plus fortes, plus présentes. Plus reconnaissables. Il avait collecté. Il avait mis plus de temps que d\'habitude.',
    },
    revelation: {
      titre: 'La question des usages',
      contenu: 'Zyress (240) lui avait dit, dans une conversation en passant, que certaines des signatures collectées avaient été utilisées pour des reconstructions psychiques — des reconstitutions de la mémoire de personnes mortes à partir de leurs résidus spectraux. Cette application n\'était pas ce qu\'il avait imaginé. Il n\'avait pas demandé de détails supplémentaires à Shael (48).',
    },
    etat_actuel: {
      titre: 'Les zones en cours',
      contenu: 'Deux zones spectrales actives en cours de collecte. La première est une zone de morts anciens — collection de routine. La deuxième est une zone désignée par Shael (48) avec des morts plus récents. Il prend plus de temps sur la deuxième. Il n\'a pas expliqué pourquoi à Shael.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvesh_reconstitutions',
      titre: 'Les reconstructions psychiques',
      description: 'Les signatures spectrales collectées ont été utilisées pour des reconstructions de la mémoire des défunts. Thyrvesh ne savait pas que c\'était une application possible. Zyress (240) le lui a dit en passant. Il n\'a pas posé de questions supplémentaires à Shael (48). Cette information est dans sa tête. Il ne sait pas encore ce qu\'il en fait.',
      personnages_impliques: [240, 48],
      declencheur: 'Information de Zyress sur les usages des signatures collectées',
      consequence: 'Connaissance d\'un usage des données non anticipé — non encore traité',
    },
    {
      id: 'thyrvesh_zone_recente',
      titre: 'Le temps supplémentaire',
      description: 'Il prend plus de temps sur la deuxième zone — celle des morts récents désignée par Shael. Ce délai n\'est pas technique. Il n\'est pas sûr de ce que c\'est. Il n\'a pas expliqué le délai à Shael. Shael ne lui a pas demandé d\'explication pour le moment.',
      personnages_impliques: [48],
      declencheur: 'Zone de morts récents avec signatures plus fortes et reconnaissables',
      consequence: 'Délai non expliqué — tension possible avec Shael si le délai continue',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Collecteur de signatures spectrales pour le Protocole de la Convergence dans Vel\'Nox. Ses données permettent des reconstructions psychiques post-mortem dont il commence seulement à comprendre l\'usage.',

  relations: [
    { id: 240, nom: 'Zyress', type: 'allié', note: 'Fournit des informations sur les zones spectrales actives. A mentionné les reconstitutions psychiques en passant.' },
    { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit les collections pour le Protocole. N\'explique pas les usages. Thyrvesh ne demande pas formellement.' },
  ],

  combat: {
    sorts: [
      'Extraction spectrale (Spectre) — isolation et extraction d\'une signature résiduelle — collecte en combat',
      'Ombre de mort (Ténèbres) — projection d\'un résidu spectral dense sur une zone — zone de désolation',
      'Ancrage aux défunts (Spectre) — invocation d\'un résidu spectral comme présence temporaire — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvesh_collecte',
      description: 'Thyrvesh dans une zone spectrale de Vel\'Nox, debout au-dessus d\'une concentration de résidus — de légères luminescences grises à hauteur du sol. Il extrait une signature avec un instrument de collecte. Il est entièrement immobile. Il ne parle pas.',
      style: 'réaliste collecteur spectral, zones de résidus visibles, immobilité totale, instruments de collecte discrets',
    },
  ],

  lore_long: `Thyrvesh collecte des signatures spectrales de défunts pour le Protocole de la Convergence.

Il a demandé à quoi ça servait quand il a accepté. La réponse était incomplète. Il a accepté quand même.

Zyress (240) lui a dit que les signatures ont été utilisées pour des reconstructions psychiques des mémoires des défunts. Ce n'est pas ce qu'il avait imaginé. Il n'a pas posé de questions supplémentaires à Shael (48).

La deuxième zone en cours — des morts récents — lui prend plus de temps. Ce n'est pas technique. Il n'a pas expliqué le délai à Shael.

Les morts n'ont pas pu consentir. Il a décidé que ça n'avait pas de sens de s'arrêter là-dessus. Il n'est pas entièrement convaincu par sa propre décision.`,
};

export default thyrvesh;
