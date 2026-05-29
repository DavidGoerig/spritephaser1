import type { PersonnageLoreComplet } from '../../../lore-types';

const calrys: PersonnageLoreComplet = {
  id: 111,
  nom: 'Calrys',
  element: 'Stellaire',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 38 ans, de taille ordinaire avec la posture d\'un astronome de second rang — compétent, non-influent. Il existe dans l\'ombre de Thaerys (103).',
    peau: 'Pâle bleutée Aéride avec une luminescence stellaire argentée — moins intense que l\'aristocratie, plus forte que la moyenne.',
    yeux: 'Argentés-gris avec une qualité de quelqu\'un qui a vu quelque chose qu\'il n\'a pas encore su comment interpréter.',
    vetements: 'Tenue d\'astronome secondaire de cour — correcte sans être la tenue principale.',
    signes_particuliers: 'Il a vu une anomalie dans les trajectoires stellaires il y a 6 mois. Il ne l\'a pas interprétée. Il l\'a notée et attendu.',
  },

  psychologie: {
    dominante: 'Astronome secondaire de la cour d\'Asterciel. Il y a 6 mois, il a observé une anomalie dans les trajectoires stellaires. Il ne sait pas ce qu\'elle signifie — mais il sait que c\'est une anomalie. Il attend de mieux comprendre avant de la signaler.',
    mecanisme_de_defense: 'La patience scientifique comme protection contre l\'erreur. Il ne signale que ce qu\'il comprend. Cette protection l\'empêche aussi de signaler quelque chose d\'important.',
    contradiction_interne: 'Il attend de comprendre avant de parler. Mais une anomalie non-signalée depuis 6 mois commence à ressembler à une information retenue.',
    rapport_aux_autres: 'Syvara (30) est dans son réseau — elle a une perspective différente sur les trajectoires stellaires. Telos (29) est dans le réseau de cour.',
    vision_du_monde: 'Observer correctement nécessite d\'observer longtemps. L\'anomalie qu\'il a vue peut s\'expliquer avec plus de données. Il attend les données.',
  },

  histoire: {
    enfance: {
      titre: 'L\'astronomie',
      contenu: 'Formation en astronomie à la cour d\'Asterciel. Astronome secondaire depuis 12 ans — position stable, non-influente. Son travail est de vérifier les calculs de Thaerys.',
    },
    arrivee: {
      titre: 'L\'anomalie',
      contenu: 'Il y a 6 mois, lors d\'une observation de routine, une trajectoire n\'était pas là où elle devrait être. L\'écart était dans les marges d\'erreur — mais il y était. Il l\'avait noté.',
    },
    premier_conflit: {
      titre: 'L\'attente',
      contenu: 'Il avait attendu une confirmation dans les observations suivantes. L\'anomalie persistait — légèrement différente à chaque fois, mais présente. Ses instruments étaient fiables. Ses calculs étaient vérifiés.',
    },
    revelation: {
      titre: '6 mois',
      contenu: 'Il y avait maintenant 6 mois d\'observations avec l\'anomalie. Il n\'avait pas de modèle pour l\'expliquer. Il ne l\'avait pas signalée. Ce silence commençait à être difficile à justifier.',
    },
    etat_actuel: {
      titre: 'L\'attente prolongée',
      contenu: 'Il observe encore. L\'anomalie persiste. La fenêtre pour signaler sans explication commence à se fermer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'calrys_anomalie',
      titre: 'L\'anomalie stellaire',
      description: 'Calrys a observé une anomalie dans les trajectoires stellaires depuis 6 mois. Sans explication, il ne l\'a pas signalée. Si quelqu\'un — Syvara (30), Telos (29), ou un astronome plus senior — fait la même observation, Calrys devra expliquer pourquoi il ne l\'a pas signalée plus tôt.',
      personnages_impliques: [30, 29],
      declencheur: 'Quelqu\'un d\'autre observant la même anomalie et la signalant',
      consequence: 'Calrys confronté à sa rétention d\'information — ou devenant la référence sur l\'anomalie',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Astronome secondaire d\'Asterciel. A observé une anomalie stellaire il y a 6 mois. N\'a pas signalé. Attend de comprendre.',

  relations: [
    { id: 30, nom: 'Syvara', type: 'contact', note: 'Perspective différente sur les trajectoires stellaires.' },
    { id: 29, nom: 'Telos', type: 'contact', note: 'Dans le réseau de cour.' },
  ],

  combat: {
    sorts: [
      'Faisceau stellaire (Stellaire) — projection lumineuse — attaque à distance',
      'Cartographie de position (Stellaire) — détermination précise de la localisation — avantage tactique',
    ],
  },

  image_prompts: [
    {
      id: 'calrys_observation',
      description: 'Calrys dans son poste d\'observation à Asterciel — un Aéride de 38 ans regardant à travers un instrument astronomique, ses notes ouvertes. L\'anomalie est visible dans ses relevés. Son expression est de quelqu\'un qui attend de comprendre avant de parler.',
      style: 'réaliste Aéride astronome secondaire, observatoire d\'Asterciel, anomalie non-signalée, patience scientifique prolongée',
    },
  ],

  lore_long: `Calrys a observé une anomalie dans les trajectoires stellaires d'Asterciel il y a 6 mois. Il ne l'a pas signalée.

Il attend de mieux comprendre. Cette attente dure depuis 6 mois.

Si quelqu'un d'autre fait la même observation, il devra expliquer son silence.`,
};

export default calrys;
