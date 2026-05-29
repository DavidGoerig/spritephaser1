import type { PersonnageLoreComplet } from '../../../lore-types';

const threvel: PersonnageLoreComplet = {
  id: 115,
  nom: 'Threvel',
  element: 'Vent',
  espece: 'Aéride',
  region: 'Asterciel',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Aéride de 38 ans, posture de garde-côte — droite, sans raideur inutile. Il applique les règles comme il respire : naturellement.',
    peau: 'Pâle bleutée Aéride avec une luminescence de vent contrôlée — son élément est discipliné, comme lui.',
    yeux: 'Gris-bleu avec une qualité de quelqu\'un qui évalue les situations sans les juger.',
    vetements: 'Uniforme de garde des strates supérieures — soigné, complet, porté avec cohérence.',
    signes_particuliers: 'Il applique les règles d\'accès aux strates supérieures avec rigidité, sans cruauté. Cette distinction est réelle pour lui. Elle ne l\'est pas pour ceux qu\'il bloque.',
  },

  psychologie: {
    dominante: 'Garde-côte des strates supérieures d\'Asterciel. Son rôle est de contrôler l\'accès. Il l\'exerce avec précision et sans excès. Il ne cherche pas à blesser — il cherche à maintenir l\'ordre établi. Ces deux choses ne sont pas contradictoires dans son cadre.',
    mecanisme_de_defense: 'L\'application des règles comme protection contre la responsabilité personnelle. Si les règles disent non, il dit non. La règle porte la décision.',
    contradiction_interne: 'Il maintient un système d\'accès qui défavorise les strates basses sans malveillance personnelle. L\'absence de malveillance ne change pas l\'effet. Il ne pense pas souvent à cet effet.',
    rapport_aux_autres: 'Serathis (24) est son supérieur hiérarchique — il applique les directives de Serathis. Seravyn (110) est l\'adversaire indirect — un représentant des strates basses dont les demandes d\'accès arrivent parfois à son poste.',
    vision_du_monde: 'Asterciel fonctionne par strates. Les strates supérieures ont des règles d\'accès. Ces règles existent pour des raisons. Son rôle est de les appliquer, pas de les évaluer.',
  },

  histoire: {
    enfance: {
      titre: 'Le service',
      contenu: 'Né dans les strates moyennes supérieures d\'Asterciel. Entrée dans les gardes à 20 ans — un choix de stabilité professionnelle. Il avait progressé régulièrement.',
    },
    arrivee: {
      titre: 'Les strates supérieures',
      contenu: 'Affecté aux strates supérieures à 30 ans — une position qui représentait une promotion. Il avait accepté sans questionner le sens de ce qu\'il allait garder.',
    },
    premier_conflit: {
      titre: 'La demande de Seravyn',
      contenu: 'Une demande d\'accès pour un représentant confédéral des strates basses — Seravyn (110) — était arrivée à son poste. Les règles disaient non. Il avait dit non. Seravyn avait contesté administrativement. Threvel avait maintenu sa position.',
    },
    revelation: {
      titre: 'La rigidité',
      contenu: 'Il avait commencé à voir que sa rigidité n\'était pas un défaut de caractère — c\'était une compétence attendue. Les strates supérieures voulaient des gardes qui n\'interprétaient pas les règles. Il était ce qu\'on lui avait demandé d\'être.',
    },
    etat_actuel: {
      titre: 'Le poste',
      contenu: 'Il garde. Les règles sont claires. Il les applique. La question de leur justesse n\'est pas son poste.',
    },
  },

  evenements_narratifs: [
    {
      id: 'threvel_crise',
      titre: 'Le garde et la crise',
      description: 'Threvel applique les règles d\'accès aux strates supérieures. Si une crise des strates basses nécessite un accès urgent — et que Seravyn (110) ou un autre représentant demande à passer — Threvel sera confronté à la limite de son cadre : les règles disent non, la crise dit oui. Il devra soit appliquer les règles, soit les interpréter.',
      personnages_impliques: [24, 110],
      declencheur: 'Crise des strates basses nécessitant un accès urgent aux strates supérieures',
      consequence: 'Threvel appliquant ou interprétant les règles — et les conséquences de l\'un ou l\'autre choix',
    },
  ],

  arcs: ['arc_chute_des_nuages'],
  position_dans_arc: 'Garde-côte des strates supérieures. Applique les règles avec rigidité, sans cruauté. Adversaire indirect de Seravyn (110).',

  relations: [
    { id: 24, nom: 'Serathis', type: 'contact', note: 'Supérieur hiérarchique. Applique ses directives.' },
    { id: 110, nom: 'Seravyn', type: 'adversaire', note: 'Adversaire indirect. Représentant des strates basses dont les demandes arrivent à son poste.' },
  ],

  combat: {
    sorts: [
      'Barrière de vent (Vent) — mur d\'air comprimé — contrôle de position et d\'accès',
      'Rafale de dispersion (Vent) — souffle de répulsion — maintien de périmètre',
    ],
  },

  image_prompts: [
    {
      id: 'threvel_poste',
      description: 'Threvel à son poste de garde des strates supérieures d\'Asterciel — un Aéride de 38 ans en uniforme complet. Il fait face à une demande d\'accès. Son expression est de quelqu\'un qui applique les règles sans plaisir particulier, mais sans hésitation.',
      style: 'réaliste Aéride garde des strates supérieures, poste d\'accès d\'Asterciel, rigidité sans cruauté, application des règles',
    },
  ],

  lore_long: `Threvel garde les accès des strates supérieures d'Asterciel. Il applique les règles avec rigidité — pas avec cruauté. Cette distinction est réelle pour lui.

Son supérieur est Serathis (24). Son adversaire indirect est Seravyn (110), représentant des strates basses.

Quand une crise demandera un accès que les règles interdisent, il devra choisir.`,
};

export default threvel;
