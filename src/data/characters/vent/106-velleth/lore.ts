import type { PersonnageLoreComplet } from '../../../lore-types';

const velleth: PersonnageLoreComplet = {
  id: 106,
  nom: 'Velleth',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Parti local (strates basses)',

  apparence: {
    taille_corpulence: 'Aéride de 39 ans, de taille ordinaire avec une présence de quelqu\'un qui est habitué à parler en public. Sa voix porte plus que son gabarit ne le suggère.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent légère — son élément est discret. Ce n\'est pas lui qui porte, c\'est sa voix.',
    yeux: 'Gris-bleu avec une qualité de conviction organisée.',
    vetements: 'Tenue des strates basses — ordinaire avec quelques marqueurs de son rôle d\'activiste. Rien d\'ostensible.',
    signes_particuliers: 'Co-organisateur des pétitions pour la reconstruction de la Plateforme Ouest. Il travaille avec Caerra (28). Sa politique est locale et précise — il ne veut pas renverser l\'ordre des strates, il veut que la Plateforme Ouest soit reconstruite.',
  },

  psychologie: {
    dominante: 'Activiste pour la reconstruction de la Plateforme Ouest d\'Asterciel. Son objectif est précis et limité. Il n\'est pas un révolutionnaire — il veut un résultat spécifique que la politique ordinaire ne lui donne pas.',
    mecanisme_de_defense: 'La demande précise comme légitimité. Il ne demande pas à changer le système. Il demande une chose spécifique. Cette précision lui donne une légitimité morale.',
    contradiction_interne: 'Sa demande précise s\'insère dans un système qui ne répond pas aux demandes des strates basses. Il fait des pétitions dans un cadre qui ignore les pétitions.',
    rapport_aux_autres: 'Caerra (28) est son partenaire dans les pétitions — quelqu\'un qui comprend la politique des strates basses. Yrith (25) est une figure de référence dans son argumentation.',
    vision_du_monde: 'La Plateforme Ouest doit être reconstruite. C\'est une nécessité pour les strates basses. La reconstruction est possible. Elle ne se fait pas parce que personne en position de décision ne considère que les strates basses méritent l\'attention.',
  },

  histoire: {
    enfance: {
      titre: 'Les strates basses',
      contenu: 'Né et grandi dans les strates basses d\'Asterciel. La Chute des Nuages avait endommagé la Plateforme Ouest — une infrastructure essentielle pour les strates basses. Il avait commencé à organiser les demandes de reconstruction à 32 ans.',
    },
    arrivee: {
      titre: 'Les pétitions',
      contenu: 'Sa première pétition avait réuni 800 signatures. Elle avait été "prise en considération". Rien ne s\'était passé. Sa deuxième pétition avait réuni 1200 signatures. Même résultat. Il continuait.',
    },
    premier_conflit: {
      titre: 'Le mépris institutionnel',
      contenu: 'Il avait réalisé que les pétitions ne fonctionnaient pas parce que le cadre institutionnel ne considérait pas les strates basses comme une priorité. Sa demande précise et légitime se heurtait à une structure indifférente.',
    },
    revelation: {
      titre: 'Caerra',
      contenu: 'Caerra (28) lui avait montré une façon de connecter sa demande précise à des enjeux plus larges. Il avait décidé que sa demande précise restait sa priorité mais qu\'elle pouvait être articulée dans un cadre plus large.',
    },
    etat_actuel: {
      titre: 'La pétition suivante',
      contenu: 'La pétition suivante est en préparation. Le cadre a changé. La Plateforme Ouest n\'est toujours pas reconstruite.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velleth_plateforme',
      titre: 'La pétition qui change de nature',
      description: 'Velleth organise des pétitions pour la reconstruction de la Plateforme Ouest. Si sa demande s\'insère dans un mouvement plus large — une crise politique à Asterciel, un conflit entre strates — sa demande précise devient un symbole. Ce glissement changera sa relation avec ce qu\'il demande.',
      personnages_impliques: [28, 25],
      declencheur: 'Crise politique à Asterciel donnant une résonance symbolique à la demande de Velleth',
      consequence: 'La demande de reconstruction de la Plateforme Ouest devenant un enjeu dans un conflit plus large',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Activiste pour la reconstruction de la Plateforme Ouest. Pétitions systématiquement ignorées. Partenaire de Caerra (28).',

  relations: [
    { id: 28, nom: 'Caerra', type: 'allié', note: 'Partenaire dans les pétitions. L\'a aidé à cadrer la demande plus largement.' },
    { id: 25, nom: 'Yrith', type: 'contact', note: 'Figure de référence dans son argumentation.' },
  ],

  combat: {
    sorts: [
      'Rafale de vent (Vent) — poussée d\'air — défense basique',
      'Courant porteur (Vent) — déplacement assisté — mobilité',
    ],
  },

  image_prompts: [
    {
      id: 'velleth_petition',
      description: 'Velleth dans les strates basses d\'Asterciel — un Aéride de 39 ans avec une pétition dans les mains, face à un bâtiment administratif. Son expression est de quelqu\'un qui fait ce qu\'il faut faire en sachant que ça ne suffira peut-être pas.',
      style: 'réaliste Aéride activiste, strates basses d\'Asterciel, pétition pour Plateforme Ouest, mépris institutionnel',
    },
  ],

  lore_long: `Velleth organise des pétitions pour la reconstruction de la Plateforme Ouest dans les strates basses d'Asterciel depuis 7 ans.

Ses demandes sont précises et légitimes. Elles sont systématiquement ignorées.

Il continue. La Plateforme Ouest n'est toujours pas reconstruite.`,
};

export default velleth;
