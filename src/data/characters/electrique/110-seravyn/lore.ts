import type { PersonnageLoreComplet } from '../../../lore-types';

const seravyn: PersonnageLoreComplet = {
  id: 110,
  nom: 'Seravyn',
  element: 'Electrique',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Aéride de 43 ans, de taille ordinaire avec une posture de quelqu\'un qui a appris à maintenir sa dignité dans des situations qui la nient.',
    peau: 'Pâle bleutée Aéride avec des éclairs électriques aux mains — son élément visible quand il est en tension.',
    yeux: 'Gris électrique avec une qualité de persévérance calculée.',
    vetements: 'Tenue de représentant confédéral des strates basses — formelle, moins bien financée que la tenue des strates supérieures.',
    signes_particuliers: 'Ses demandes pour les strates basses sont systématiquement reclassées "non-urgence". Il continue à les formuler. Cette persévérance est soit de l\'espoir soit de la discipline professionnelle.',
  },

  psychologie: {
    dominante: 'Représentant confédéral des strates basses d\'Asterciel. Il porte les demandes de ses constituants dans un système qui ne les traite pas comme prioritaires. Il continue quand même — c\'est son rôle.',
    mecanisme_de_defense: 'Le mandat formel comme raison de continuer. Il est élu pour représenter. Tant qu\'il est élu, il représente.',
    contradiction_interne: 'Il représente dans un système qui ne répond pas. Sa légitimité représentative est réelle. Son efficacité est quasiment nulle. Ces deux faits coexistent.',
    rapport_aux_autres: 'Talvyn (23) est dans son réseau — quelqu\'un dont les calculs touchent aux mêmes enjeux que ses demandes. Serathis (24) est une figure institutionnelle dans l\'opposition fonctionnelle à ses demandes.',
    vision_du_monde: 'La Confédération a des mécanismes de représentation. Ces mécanismes sont réels — ils fonctionnent. Ce qu\'ils permettent de faire avec une représentation des strates basses est une autre question.',
  },

  histoire: {
    enfance: {
      titre: 'Les strates basses',
      contenu: 'Né dans les strates basses d\'Asterciel. Élu représentant confédéral à 36 ans — une position disponible parce que personne d\'autre ne voulait le travail ingrat.',
    },
    arrivee: {
      titre: 'Les demandes',
      contenu: 'Sa première série de demandes concernait la reconstruction de la Plateforme Ouest. Reclassée "non-urgence". Il avait continué avec 12 autres demandes. Résultats similaires.',
    },
    premier_conflit: {
      titre: 'Le classement',
      contenu: 'Il avait appris le mécanisme précis par lequel ses demandes étaient reclassées — un processus administratif conçu pour absorber les demandes non-prioritaires. Il l\'avait documenté. Sa documentation avait été classée "informative".',
    },
    revelation: {
      titre: 'Talvyn',
      contenu: 'Talvyn (23) lui avait montré que ses demandes correspondaient à des enjeux structurels calculables. Cette validation technique donnait un cadre différent à son travail.',
    },
    etat_actuel: {
      titre: 'La représentation',
      contenu: 'Il continue à représenter. Ses demandes continuent à être reclassées. Son mandat continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'seravyn_demandes',
      titre: 'La demande qui passe',
      description: 'Seravyn a 7 ans de demandes reclassées "non-urgence". Si un événement — une crise aux strates basses, une pression politique extérieure — rend ses demandes urgentes par le contexte, sa documentation préalable devient une ressource. Il a déjà les arguments préparés.',
      personnages_impliques: [23, 24],
      declencheur: 'Crise rendant urgentes les demandes des strates basses',
      consequence: 'Les demandes de Seravyn soudainement prioritaires — avec 7 ans de dossiers préparés',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Représentant confédéral des strates basses. Demandes systématiquement reclassées. Continue.',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Ses calculs valident les enjeux structurels des demandes.' },
    { id: 24, nom: 'Serathis', type: 'adversaire', note: 'Opposition fonctionnelle institutionnelle.' },
  ],

  combat: {
    sorts: [
      'Frappe électrique (Electrique) — décharge défensive — usage en dernier recours',
      'Réseau conducteur (Electrique) — utilisation des structures électriques — avantage de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'seravyn_institution',
      description: 'Seravyn devant une assemblée confédérale d\'Asterciel — un Aéride de 43 ans présentant une demande des strates basses. Son expression est de quelqu\'un qui maintient sa dignité dans un contexte qui la nie.',
      style: 'réaliste Aéride représentant confédéral, assemblée d\'Asterciel, demandes des strates basses, persévérance institutionnelle',
    },
  ],

  lore_long: `Seravyn représente les strates basses d'Asterciel à la Confédération depuis 7 ans. Ses demandes sont systématiquement reclassées "non-urgence".

Il continue. Son mandat est réel. Son efficacité est quasiment nulle.

Il a 7 ans de dossiers préparés — prêts pour la crise qui rendra ses demandes urgentes.`,
};

export default seravyn;
