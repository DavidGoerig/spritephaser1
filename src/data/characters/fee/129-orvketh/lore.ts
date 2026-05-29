import type { PersonnageLoreComplet } from '../../../lore-types';

const orvketh: PersonnageLoreComplet = {
  id: 129,
  nom: 'Orvketh',
  element: 'Fée',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan-Fée de 150 ans à apparence enfantine — petit, léger, avec des traits de jeunesse que son âge réel contredit entièrement.',
    peau: 'Écorce argentée, claire, avec des luminescences Fée qui pulsent doucement. L\'apparence enfantine est naturelle chez certains Sylvan-Fées — pas une tromperie délibérée.',
    yeux: 'Verts-or avec une profondeur qui ne correspond pas à l\'apparence. Quiconque regarde longtemps dans ces yeux comprend qu\'il n\'a pas affaire à un enfant.',
    vetements: 'Tenue simple qui accentue l\'apparence enfantine — pas intentionnellement, c\'est juste ce qui lui convient.',
    signes_particuliers: 'Il joue le rôle de l\'enfant dans les interactions sociales. Ce n\'est pas de la tromperie — c\'est de l\'adaptation. Les gens lui disent des choses qu\'ils ne diraient pas à quelqu\'un qu\'ils percevraient comme une autorité.',
  },

  psychologie: {
    dominante: 'Sylvan-Fée de 150 ans dont l\'apparence enfantine est une ressource sociale. Il ne simule pas l\'enfance — il l\'habite dans ses interactions parce que ça fonctionne. En réalité, il est une mémoire vivante de Sylvera antérieure à la plupart des acteurs actuels.',
    mecanisme_de_defense: 'L\'apparence enfantine comme désarmement social. Les gens ne perçoivent pas un enfant comme une menace. Ils parlent librement.',
    contradiction_interne: 'Il accumule une mémoire de 150 ans. Mais sa position d\'observateur dépend de ne pas être reconnu comme ce qu\'il est. S\'il est pris au sérieux comme mémoire vivante, il perd son angle d\'observation.',
    rapport_aux_autres: 'Leth (34) est dans son réseau — une autre Fée qui comprend sa position. Thalorn (33) est aussi dans son réseau — quelqu\'un qui sait qui il est réellement.',
    vision_du_monde: 'Les adultes disent la vérité à ceux qu\'ils ne considèrent pas comme rivaux. Un enfant apparent n\'est jamais un rival. En 150 ans, il a entendu plus de vérités que la plupart des conseillers officiels.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apparence',
      contenu: 'Né avec l\'apparence enfantine caractéristique de certains Sylvan-Fées. Il n\'avait pas choisi cette apparence — il avait appris à vivre avec, puis à l\'utiliser.',
    },
    arrivee: {
      titre: 'La mémoire',
      contenu: 'À 50 ans (apparence d\'un enfant de 10 ans), il avait compris que son angle d\'observation était unique. Il avait commencé à documenter ce qu\'il entendait — les conversations que les adultes avaient devant lui parce qu\'ils ne voyaient pas une menace.',
    },
    premier_conflit: {
      titre: 'Leth',
      contenu: 'Leth (34) l\'avait rencontré et reconnu immédiatement pour ce qu\'il était — une Fée de 150 ans, pas un enfant. Cette reconnaissance avait été à la fois un soulagement et une perte de sa couverture partielle.',
    },
    revelation: {
      titre: 'La valeur de la mémoire',
      contenu: 'Il avait réalisé que ses 150 ans de mémoire étaient une ressource rare dans un conflit qui tournait autour d\'une histoire contestée. Il avait vu des choses que personne d\'autre ne pouvait attester.',
    },
    etat_actuel: {
      titre: 'L\'observateur',
      contenu: 'Il observe. Il mémorise. Il partage avec prudence — seulement avec ceux qui peuvent entendre la complexité.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orvketh_memoire',
      titre: 'Ce que l\'enfant ancien a vu',
      description: 'Orvketh a 150 ans de mémoire directe de Sylvera. Si quelqu\'un comprend qui il est réellement — pas un enfant, mais une archive vivante — sa mémoire devient une ressource précieuse dans le débat sur la Faim des Racines. Mais l\'utiliser comme témoin officiel détruit son angle d\'observation unique.',
      personnages_impliques: [34, 33],
      declencheur: 'Quelqu\'un ayant besoin de son témoignage sur des événements de sa mémoire directe',
      consequence: 'Orvketh révélant sa mémoire — et perdant son couverture d\'apparence enfantine comme angle d\'observation',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Sylvan-Fée de 150 ans à apparence enfantine. Mémoire vivante de Sylvera. Observe ce que les adultes disent devant "un enfant".',

  relations: [
    { id: 34, nom: 'Leth', type: 'contact', note: 'L\'a reconnu pour ce qu\'il est. Compréhension mutuelle.' },
    { id: 33, nom: 'Thalorn', type: 'contact', note: 'Sait qui il est réellement.' },
  ],

  combat: {
    sorts: [
      'Enchantement de la mémoire (Fée) — rappel de souvenirs chez l\'adversaire — désorientation émotionnelle',
      'Voile féerique (Fée) — confusion perceptive — fuite ou déstabilisation',
    ],
  },

  image_prompts: [
    {
      id: 'orvketh_observation',
      description: 'Orvketh dans une réunion de Sylvera — une apparence d\'enfant Sylvan-Fée assis en marge d\'une conversation d\'adultes. Ils ne font pas attention à lui. Dans ses yeux, 150 ans d\'observation. Leth (34) dans un coin de la salle sait exactement qui il est.',
      style: 'réaliste Sylvan-Fée apparence enfantine, Sylvera, 150 ans de mémoire vivante, observation discrète, rôle de l\'enfant',
    },
  ],

  lore_long: `Orvketh a 150 ans et l'apparence d'un enfant. Il observe les conversations que les adultes ont devant "un enfant".

En 150 ans, il a accumulé une mémoire directe de Sylvera que très peu peuvent égaler. Il ne la partage qu'avec précaution.

Si son âge réel est reconnu, il perd son angle d'observation unique.`,
};

export default orvketh;
