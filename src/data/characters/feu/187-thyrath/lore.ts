import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrath: PersonnageLoreComplet = {
  id: 187,
  nom: 'Thyrath',
  element: 'Feu',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Parti du Feu (Isthme)',

  apparence: {
    taille_corpulence: 'Homme-Lien de 36 ans, agitateur politique — corpulence expressive, présence de quelqu\'un qui parle pour être entendu.',
    peau: 'Ton chaud avec une luminosité élémentaire Feu légèrement visible quand il parle avec conviction.',
    yeux: 'Orangés avec une qualité d\'intensité idéologique. Il croit profondément ce qu\'il dit.',
    vetements: 'Tenue du Parti du Feu — identification visible, choix délibéré. Il ne cherche pas à se cacher.',
    signes_particuliers: 'Il utilise la Rupture Thermique de Varkhôl comme argument pour une société dominée par l\'élément Feu — l\'élément qui a survécu et rebâti, selon sa lecture.',
  },

  psychologie: {
    dominante: 'Agitateur politique du Parti du Feu dans l\'Isthme. Il argue que la Rupture Thermique de Varkhôl démontre la supériorité de l\'élément Feu — l\'élément qui a permis la survie, la reconstruction, la résistance. Sa lecture de la Rupture est sélective. Elle est efficace.',
    mecanisme_de_defense: 'La conviction comme légitimité. Il croit en ce qu\'il dit. Ce n\'est pas de la manipulation — c\'est de la persuasion. La différence est dans l\'intention.',
    contradiction_interne: 'Sa lecture de la Rupture Thermique ignore les pertes causées par l\'élément Feu lui-même pendant la Rupture — les destructions Feu qui ont contribué aux dommages. Il sélectionne les éléments de la Rupture qui confirment sa thèse.',
    rapport_aux_autres: 'Orkhael (11) est dans son réseau — un leader Feu dont les positions renforcent son discours. Gravel (3) est dans son réseau — une figure dont la réputation de survie illustre son argument.',
    vision_du_monde: 'L\'élément Feu est l\'élément de la vie dans l\'adversité. La Rupture Thermique l\'a prouvé. L\'Isthme doit comprendre que sa future stabilité dépend de la reconnaissance de cette vérité.',
  },

  histoire: {
    enfance: {
      titre: 'L\'Isthme et le Feu',
      contenu: 'Né dans l\'Isthme dans une famille Homme-Lien avec un élément Feu. Il avait grandi en entendant les récits de la Rupture Thermique — une catastrophe qui avait remis en question les équilibres entre éléments.',
    },
    arrivee: {
      titre: 'Le Parti du Feu',
      contenu: 'Il avait rejoint le Parti du Feu de l\'Isthme à 25 ans — une branche locale d\'un mouvement qui prenait racine dans plusieurs régions post-Rupture. Sa capacité à parler en public l\'avait propulsé rapidement vers un rôle d\'agitateur.',
    },
    premier_conflit: {
      titre: 'L\'opposition',
      contenu: 'Un contre-argumentateur avait cité les destructions Feu pendant la Rupture Thermique. Thyrath avait répondu que le feu qui détruit est la même force que le feu qui chauffe — la question est qui le contrôle. La réponse était rhétoriquement efficace.',
    },
    revelation: {
      titre: 'L\'isthme comme terrain',
      contenu: 'Il avait compris que l\'Isthme — un carrefour entre des régions d\'éléments différents — était un terrain idéal pour son message. Si une saturation élémentaire se développait dans l\'Isthme, ça confirmerait son argument sur la nécessité d\'un élément dominant.',
    },
    etat_actuel: {
      titre: 'L\'agitateur',
      contenu: 'Il parle. L\'Isthme écoute. La saturation lui donne des arguments.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrath_rupture',
      titre: 'L\'argument de la Rupture',
      description: 'Thyrath utilise la Rupture Thermique comme argument pour une société dominée par le Feu. Si la saturation élémentaire de l\'Isthme produit un incident majeur impliquant un autre élément, son interprétation — "le Feu aurait géré ça" — pourrait convaincre des Hommes-Lien qui doutaient.',
      personnages_impliques: [11, 3],
      declencheur: 'Incident de saturation élémentaire non-Feu dans l\'Isthme utilisé comme argument par Thyrath',
      consequence: 'Recrutement de sympathisants au Parti du Feu dans l\'Isthme — et tension accrue entre éléments',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Agitateur politique du Parti du Feu dans l\'Isthme. Utilise la Rupture Thermique comme argument pour un élément Feu dominant. Lecture sélective de la Rupture.',

  relations: [
    { id: 11, nom: 'Orkhael', type: 'contact', note: 'Leader Feu dont les positions renforcent le discours de Thyrath.' },
    { id: 3, nom: 'Gravel', type: 'contact', note: 'Figure de survie illustrant l\'argument de Thyrath.' },
  ],

  combat: {
    sorts: [
      'Harangue de feu (Feu) — projection de chaleur concentrée — attaque directe',
      'Mur d\'argument (Feu) — barrière thermique — contrôle de foule',
    ],
  },

  image_prompts: [
    {
      id: 'thyrath_discours',
      description: 'Thyrath sur une place de l\'Isthme — un Homme-Lien de 36 ans parlant à un groupe de personnes, son élément Feu légèrement visible dans ses gestes. Derrière lui, une bannière du Parti du Feu. Il parle de la Rupture Thermique avec une conviction réelle. Certains membres du groupe acquiescent. D\'autres ont l\'air moins convaincus.',
      style: 'réaliste Homme-Lien agitateur politique, Isthme, Parti du Feu, Rupture Thermique comme argument, conviction idéologique',
    },
  ],

  lore_long: `Thyrath est agitateur pour le Parti du Feu dans l'Isthme. Il utilise la Rupture Thermique de Varkhôl comme preuve que l'élément Feu est celui de la survie et de la reconstruction.

Sa lecture de la Rupture est sélective — elle ignore les destructions causées par le Feu pendant la crise. Elle est efficace.

La saturation élémentaire de l'Isthme lui donne de nouveaux arguments. Chaque incident lui permet de demander "le Feu aurait-il géré ça?"`,
};

export default thyrath;
