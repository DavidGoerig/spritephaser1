import type { PersonnageLoreComplet } from '../../../lore-types';

const velshyr: PersonnageLoreComplet = {
  id: 156,
  nom: 'Velshyr',
  element: 'Poison',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Umbrienne de taille ordinaire avec une économie de mouvement — rien de superflu, tout est fonctionnel.',
    peau: 'Gris Umbrien avec des traces verdâtres de son élément Poison — visible pour ceux qui savent lire les éléments.',
    yeux: 'Noirs avec une qualité de quelqu\'un qui a pris des décisions difficiles et vit avec.',
    vetements: 'Tenue fonctionnelle et discrète — rien qui la distingue dans les marchés nocturnes.',
    signes_particuliers: 'Ses cibles sont exclusivement impériales. Cette exclusivité est une règle absolue qu\'elle s\'est donnée — pas une règle imposée par les Dissidentes.',
  },

  psychologie: {
    dominante: 'Empoisonneuse Dissidente dont les cibles sont exclusivement des agents ou officiers impériaux. Cette exclusivité n\'est pas seulement tactique — c\'est sa limite éthique personnelle. Les Dissidentes n\'imposent pas cette restriction ; elle se la donne.',
    mecanisme_de_defense: 'La ligne éthique comme protection psychologique. Tant qu\'elle ne cible que l\'Empire, elle peut se définir comme une résistante, pas une tueuse généraliste.',
    contradiction_interne: 'L\'Empire est représenté par des personnes. Certains agents impériaux sont plus ou moins coupables selon la définition. Où commence un "agent impérial" ? Cette question reste floue et elle la maintient floue.',
    rapport_aux_autres: 'Ossira (44) est dans son réseau — un contact partagé avec le réseau Dissident d\'Ormn-Dur. Vethis (46) est son contact Dissident à Vel\'Nox.',
    vision_du_monde: 'L\'Empire a une présence à Vel\'Nox qui nuit à la cité. Réduire cette présence est un acte de protection. Cette conviction est sincère.',
  },

  histoire: {
    enfance: {
      titre: 'Vel\'Nox',
      contenu: 'Née à Vel\'Nox. La raison de son engagement contre l\'Empire est personnelle — elle n\'en parle pas. Elle est arrivée aux Dissidentes à 30 ans avec des compétences déjà formées.',
    },
    arrivee: {
      titre: 'La règle',
      contenu: 'Elle avait posé sa condition dès le début : cibles exclusivement impériales. Les Dissidentes avaient accepté — ses compétences valaient cette restriction.',
    },
    premier_conflit: {
      titre: 'La demande ambiguë',
      contenu: 'Une demande avait été faite pour une cible qui avait des liens impériaux mais n\'était pas officiellement un agent impérial — un marchand qui travaillait avec l\'Empire. Elle avait refusé. La frontière était là.',
    },
    revelation: {
      titre: 'La frontière floue',
      contenu: 'Elle avait commencé à voir que la frontière "impérial/non-impérial" était plus floue qu\'elle ne pensait. Des collaborateurs, des informateurs, des fournisseurs. Elle avait maintenu sa définition la plus restrictive.',
    },
    etat_actuel: {
      titre: 'Les cibles',
      contenu: 'Elle opère. Ses cibles sont impériales. Sa ligne tient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velshyr_ligne',
      titre: 'La cible qui teste la règle',
      description: 'Velshyr se limite aux cibles impériales. Si les Dissidentes lui demandent de cibler quelqu\'un d\'ambigu — un collaborateur de l\'Empire non-officiel, un informateur — elle devra soit élargir sa définition, soit refuser une mission importante. Ce refus créerait une friction avec les Dissidentes.',
      personnages_impliques: [44, 46],
      declencheur: 'Demande des Dissidentes pour une cible dont le statut impérial est ambigu',
      consequence: 'Velshyr maintenant sa ligne ou la compromettant — et les conséquences sur sa relation avec les Dissidentes',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Empoisonneuse Dissidente à Vel\'Nox. Cibles exclusivement impériales. Ligne éthique personnelle.',

  relations: [
    { id: 44, nom: 'Ossira', type: 'contact', note: 'Contact réseau Dissident d\'Ormn-Dur.' },
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Contact Dissident à Vel\'Nox.' },
  ],

  combat: {
    sorts: [
      'Poison nocturne (Poison) — toxine adaptée à l\'obscurité — administration discrète',
      'Nuage toxique (Poison) — diffusion de poison — zone d\'effet',
    ],
  },

  image_prompts: [
    {
      id: 'velshyr_cible',
      description: 'Velshyr observant une cible impériale dans un marché nocturne de Vel\'Nox — une Umbrienne qui évalue son approche. Son expression est concentrée et décidée. La cible est un officier impérial. Elle ne dépasse pas cette ligne.',
      style: 'réaliste Umbrienne empoisonneuse Dissidente, Vel\'Nox, exclusivité des cibles impériales, ligne éthique personnelle',
    },
  ],

  lore_long: `Velshyr est empoisonneuse pour les Dissidentes à Vel'Nox. Ses cibles sont exclusivement impériales — une règle qu'elle s'est donnée, pas imposée.

Cette exclusivité est sa limite éthique personnelle. Elle la maintient même quand les demandes sont ambiguës.

La frontière "impérial/non-impérial" est plus floue qu'elle ne paraît. Elle maintient la définition la plus restrictive.`,
};

export default velshyr;
