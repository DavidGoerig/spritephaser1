import type { PersonnageLoreComplet } from '../../../lore-types';

const sorythel: PersonnageLoreComplet = {
  id: 99,
  nom: 'Sorythel',
  element: 'Psy',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Néréide de 40 ans, de taille ordinaire avec une façon d\'être présent sans être remarqué. Il n\'attire pas l\'attention — c\'est une compétence cultivée.',
    peau: 'Bleutée Néréide avec une luminescence violette discrète — il la contrôle activement pour ne pas se signaler.',
    yeux: 'Bleu-violet pâle, avec une qualité d\'observation silencieuse. Il enregistre.',
    vetements: 'Tenue civile ordinaire. Rien d\'impérial visible. L\'art de l\'invisibilité administrative.',
    signes_particuliers: 'Il surveille les archives officielles de Thalassyr — pas celles de Thariel (18), les officielles. Cette distinction est précisément le problème : Thariel cache ce qu\'il cherche en dehors des archives officielles.',
  },

  psychologie: {
    dominante: 'Agent impérial qui surveille les archives officielles de Thalassyr pour identifier des informations sensibles. Le problème : Thariel (18) a justement construit ses archives en dehors du système officiel. Sorythel surveille les mauvais endroits.',
    mecanisme_de_defense: 'Le mandat formel comme boussole. Il fait ce pour quoi il est mandaté. Si l\'information n\'est pas là où son mandat dit de chercher, c\'est la limite de son mandat.',
    contradiction_interne: 'Il a compris que quelque chose d\'important n\'est pas dans les archives officielles. Il a accès aux archives officielles. Ces deux informations ensemble suggèrent qu\'il devrait chercher ailleurs — ce qui n\'est pas son mandat.',
    rapport_aux_autres: 'Thariel (18) est son adversaire fonctionnel — il cherche ce que Thariel cache. Oraveth (89) est dans son réseau impérial.',
    vision_du_monde: 'Les archives officielles contiennent les informations officielles. Ce qui n\'est pas dans les archives officielles est non-officiel et donc de moindre importance. Ce raisonnement a des failles qu\'il ne reconnaît pas.',
  },

  histoire: {
    enfance: {
      titre: 'Le service impérial',
      contenu: 'Formation impériale standard. Son élément Psy avait été orienté vers la surveillance des archives — une application moins directe que l\'interrogatoire, mais utile pour détecter des falsifications ou des anomalies.',
    },
    arrivee: {
      titre: 'Thalassyr',
      contenu: 'Affecté à Thalassyr pour identifier si les archives officielles avaient été manipulées post-Silence des Vents. Sa mission avait évolué vers la surveillance continue.',
    },
    premier_conflit: {
      titre: 'Les anomalies',
      contenu: 'Il avait détecté des anomalies — des informations manquantes, des références sans archives correspondantes. Ce qu\'il cherchait existait quelque part. Pas dans les archives officielles.',
    },
    revelation: {
      titre: 'Thariel',
      contenu: 'Il avait inféré l\'existence d\'archives parallèles mais n\'avait pas pu les localiser. Sa compétence s\'arrêtait aux archives officielles. Thariel avait construit ses archives précisément à cet arrêt.',
    },
    etat_actuel: {
      titre: 'La surveillance',
      contenu: 'Il surveille les archives officielles. Les anomalies persistent. Il attend une piste.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sorythel_thariel',
      titre: 'La piste vers les archives parallèles',
      description: 'Sorythel cherche ce que Thariel (18) a retiré des archives officielles. Il n\'a pas la piste vers les archives parallèles. Si quelqu\'un — volontairement ou non — lui donne cette piste, il peut accéder à ce que Thariel a caché.',
      personnages_impliques: [18, 89],
      declencheur: 'Sorythel obtenant une piste vers les archives de Thariel',
      consequence: 'Accès impérial aux archives de Thariel — ou Thariel averti d\'une surveillance imminente',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Agent impérial surveillant les archives officielles de Thalassyr. Cherche les archives de Thariel (18). Surveille les mauvais endroits.',

  relations: [
    { id: 18, nom: 'Thariel', type: 'adversaire', note: 'Cherche ce qu\'elle a caché. Ne sait pas où chercher.' },
    { id: 89, nom: 'Oraveth', type: 'contact', note: 'Réseau impérial.' },
  ],

  combat: {
    sorts: [
      'Lecture d\'archives (Psy) — détection d\'anomalies dans les documents — identification des falsifications',
      'Brouillage de présence (Psy) — invisibilité psychique — surveillance discrète',
    ],
  },

  image_prompts: [
    {
      id: 'sorythel_archives',
      description: 'Sorythel dans les archives officielles de Thalassyr — un Néréide de 40 ans consultant des registres, ses tempes violettes. Il cherche quelque chose qui n\'est pas là. Son expression est de concentration persistante face à une absence.',
      style: 'réaliste Néréide agent impérial, archives officielles, Thalassyr, surveillance d\'archives, cherche ce qui manque',
    },
  ],

  lore_long: `Sorythel surveille les archives officielles de Thalassyr pour l'Empire. Il cherche les informations que Thariel (18) a retirées.

Le problème : Thariel a construit ses archives parallèles précisément là où son mandat ne couvre pas.

Il surveille les mauvais endroits. Il le sait. Il attend une piste.`,
};

export default sorythel;
