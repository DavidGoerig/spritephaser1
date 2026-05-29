import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkren: PersonnageLoreComplet = {
  id: 167,
  nom: 'Sylkren',
  element: 'Glace',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 67 ans, juge — la posture de quelqu\'un dont les décisions ont du poids.',
    peau: 'Blanche-cristalline dense avec des marques d\'ancienneté — l\'élément Glace d\'un juge Givrin est froid d\'une façon différente de celle d\'un guerrier.',
    yeux: 'Bleus froids avec une qualité d\'impartialité calculée. Il applique les serments, pas les émotions.',
    vetements: 'Tenue de juge de la Monarchie Givrine — formelle, symbolique, impeccable.',
    signes_particuliers: 'Il applique les serments du Gel — les obligations légales que les familles des soldats gelés ont contractées lors du Gel Éternel. Sa jurisprudence maintient un système d\'obligations qui dure depuis des siècles.',
  },

  psychologie: {
    dominante: 'Juge Givrin qui applique les serments du Gel Éternel — des obligations contractées par les familles des soldats gelés au moment du gel. Ces serments ont des implications légales qui persistent depuis des siècles. Il les applique avec précision, sans les questionner.',
    mecanisme_de_defense: 'La loi comme protection contre le jugement moral. Il applique les serments tels qu\'ils ont été écrits. La question de leur justesse appartient à ceux qui les ont rédigés.',
    contradiction_interne: 'Les serments du Gel ont été rédigés dans un contexte qui n\'existe plus. Leur application actuelle produit des conséquences que leurs rédacteurs n\'anticipaient pas nécessairement. Il applique sans adapter.',
    rapport_aux_autres: 'Thyval (55) est dans son réseau — une figure dont les questions sur le Gel Éternel touchent parfois à sa jurisprudence. Le Gel Éternel est son cadre légal complet.',
    vision_du_monde: 'Les serments sont des contrats. Les contrats ont des termes. Les termes s\'appliquent. La société Givrine tient grâce à cette rigueur.',
  },

  histoire: {
    enfance: {
      titre: 'Le droit Givrin',
      contenu: 'Formation juridique à Crysalme. Spécialisation dans les serments du Gel Éternel — un corpus légal unique qui n\'existe nulle part ailleurs.',
    },
    arrivee: {
      titre: 'Les serments',
      contenu: 'Il avait commencé à appliquer les serments du Gel à 35 ans. La complexité du corpus l\'avait absorbé entièrement — des siècles de jurisprudence, des précédents qui remontaient au moment du gel.',
    },
    premier_conflit: {
      titre: 'La famille anormale',
      contenu: 'Une famille avait contesté une obligation du serment — ses termes avaient évolué différemment de ce que la famille anticipait. Il avait appliqué les termes littéraux. La famille avait perdu. Il avait su que l\'application était techniquement correcte et pragmatiquement dure.',
    },
    revelation: {
      titre: 'L\'application sans adaptation',
      contenu: 'Il avait compris que son travail était l\'application, pas l\'adaptation. Mais l\'adaptation était peut-être nécessaire — les conditions du gel avaient changé en 300 ans. Il n\'avait pas cherché l\'adaptation.',
    },
    etat_actuel: {
      titre: 'La jurisprudence',
      contenu: 'Il juge. Les serments s\'appliquent. La société tient.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkren_serment',
      titre: 'Le serment impossible',
      description: 'Sylkren applique les serments du Gel Éternel. Si les conditions du Gel changent — si des soldats commencent à dégeler avant la fin des serments, ou si une révélation sur le Gel remet en question les bases légales des serments — sa jurisprudence sera confrontée à une situation pour laquelle elle n\'a pas de précédent.',
      personnages_impliques: [55],
      declencheur: 'Changement des conditions du Gel remettant en question les bases légales des serments',
      consequence: 'Sylkren confronté à une situation sans précédent dans sa jurisprudence',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Juge des serments du Gel Éternel. Applique les obligations des familles des soldats gelés. Rigueur d\'application sans adaptation.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Questions sur le Gel qui touchent parfois à sa jurisprudence.' },
  ],

  combat: {
    sorts: [
      'Condamnation de glace (Glace) — gel localisé — immobilisation judiciaire',
      'Barrière de serment (Glace) — formation défensive — protection de position',
    ],
  },

  image_prompts: [
    {
      id: 'sylkren_tribunal',
      description: 'Sylkren dans un tribunal de Crysalme — un Givrin de 67 ans qui applique un serment du Gel Éternel à une famille dont les ancêtres ont contracté cette obligation 200 ans avant leur naissance. Son expression est de quelqu\'un qui applique la loi avec la conscience que la loi n\'a pas été conçue pour cette situation précise.',
      style: 'réaliste Givrin juge, Crysalme, serments du Gel Éternel, application sans adaptation, jurisprudence historique',
    },
  ],

  lore_long: `Sylkren est juge des serments du Gel Éternel à Crysalme. Il applique les obligations légales que les familles des soldats gelés ont contractées lors du gel.

Ces serments ont des siècles. Il les applique tels qu'ils ont été écrits, sans adapter au contexte actuel.

Si les conditions du Gel changent, sa jurisprudence sera confrontée à une situation sans précédent.`,
};

export default sylkren;
