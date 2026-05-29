import type { PersonnageLoreComplet } from '../../../lore-types';

const caeryn: PersonnageLoreComplet = {
  id: 101,
  nom: 'Caeryn',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Aéride de 29 ans, légère avec les jambes d\'une messagère qui connaît les strates inférieures par leurs passages secrets. Elle se déplace vite et silencieusement.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent aux bras — l\'élément Vent d\'une messagère qui court dans les courants.',
    yeux: 'Gris-bleu avec une qualité d\'orientation précise. Elle sait toujours où elle est.',
    vetements: 'Tenue légère de messagère — aérodynamique, rien de superflu. Elle porte ses messages dans des compartiments cousus à même la tenue.',
    signes_particuliers: 'Elle connaît des passages dans les strates basses qu\'aucun aristocrate ne connaît. Cette connaissance est sa valeur et sa protection.',
  },

  psychologie: {
    dominante: 'Messagère des strates basses d\'Asterciel. Elle connaît des routes non-cartographiées dans les passages entre strates. Son réseau n\'est pas un réseau formel — c\'est une accumulation de connaissances pratiques qui ont de la valeur pour ceux qui n\'ont pas accès aux voies officielles.',
    mecanisme_de_defense: 'La connaissance des passages comme capital. Tant qu\'elle est la seule à connaître ces routes, elle est indispensable.',
    contradiction_interne: 'Elle transporte des messages dont elle ne connaît pas le contenu. Cette situation est analogue à celle de Thrael (72) dans les ruines de Varkhôl — elle court sans comprendre entièrement pourquoi.',
    rapport_aux_autres: 'Talvyn (23) est un contact — quelqu\'un dont le réseau utilise ses routes. Caerra (28) est également dans son réseau de messagerie.',
    vision_du_monde: 'Les strates basses ont leurs propres règles. Les routes que les aristocrates ne connaissent pas appartiennent à ceux qui les ont trouvées.',
  },

  histoire: {
    enfance: {
      titre: 'Les strates basses',
      contenu: 'Née dans les strates basses d\'Asterciel. Elle avait exploré les passages entre strates depuis l\'enfance — des espaces que les habitants des strates supérieures ne visitaient pas.',
    },
    arrivee: {
      titre: 'La messagerie',
      contenu: 'À 20 ans, elle avait commencé à transporter des messages pour des gens qui avaient besoin de discrétion. Ses routes la rendaient plus rapide et plus sûre que les voies officielles.',
    },
    premier_conflit: {
      titre: 'La Chute',
      contenu: 'La Chute des Nuages avait détruit plusieurs routes officielles. Ses routes alternatives avaient pris une valeur encore plus grande. Elle était devenue une ressource dans une ville partiellement fracturée.',
    },
    revelation: {
      titre: 'Les réseaux',
      contenu: 'Progressivement, ses clients réguliers s\'étaient révélés connectés à des réseaux plus larges. Elle transportait des informations pour des personnes qui appartenaient à des structures dont elle ne comprenait pas la totalité.',
    },
    etat_actuel: {
      titre: 'Les messages',
      contenu: 'Elle court. Les messages circulent. Les strates basses d\'Asterciel ont des routes que personne d\'autre ne connaît.',
    },
  },

  evenements_narratifs: [
    {
      id: 'caeryn_passages',
      titre: 'Les routes comme ressource critique',
      description: 'Les passages que Caeryn connaît dans les strates basses d\'Asterciel sont uniques. En cas de crise — une opération de surveillance des strates, une fermeture des voies officielles — ses routes deviennent la seule façon de circuler pour les réseaux non-officiels.',
      personnages_impliques: [23, 28],
      declencheur: 'Fermeture des voies officielles ou intensification de la surveillance',
      consequence: 'Caeryn devenant une ressource critique pour plusieurs réseaux simultanément',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Messagère des strates basses d\'Asterciel. Connaît des passages non-cartographiés. Réseau avec Talvyn (23) et Caerra (28).',

  relations: [
    { id: 23, nom: 'Talvyn', type: 'contact', note: 'Son réseau utilise ses routes.' },
    { id: 28, nom: 'Caerra', type: 'contact', note: 'Dans son réseau de messagerie.' },
  ],

  combat: {
    sorts: [
      'Courant de vent (Vent) — accélération par les courants — vitesse maximale dans les passages',
      'Rafale de déviation (Vent) — poussée d\'air — déstabilisation d\'un poursuivant',
    ],
  },

  image_prompts: [
    {
      id: 'caeryn_passage',
      description: 'Caeryn dans un passage entre strates d\'Asterciel — une Aéride de 29 ans courant dans un couloir étroit que personne d\'autre ne connaît. Ses bras luisent de vent. Elle est chez elle ici.',
      style: 'réaliste Aéride messagère, passages secrets des strates basses, Asterciel, vitesse et connaissance du terrain',
    },
  ],

  lore_long: `Caeryn court des messages dans les strates basses d'Asterciel. Elle connaît des passages non-cartographiés que les aristocrates des strates supérieures ignorent.

Sa connaissance des routes est sa valeur et sa protection.

La Chute des Nuages a rendu ses routes alternatives encore plus précieuses.`,
};

export default caeryn;
