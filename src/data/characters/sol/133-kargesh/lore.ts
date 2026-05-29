import type { PersonnageLoreComplet } from '../../../lore-types';

const kargesh: PersonnageLoreComplet = {
  id: 133,
  nom: 'Kargesh',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 47 ans, technicien de précision — mouvements mesurés, habituée aux dosages exacts.',
    peau: 'Pierre grise avec des filaments de minéraux organiques — les marques d\'un Chthonien qui travaille régulièrement avec des matières fongiques.',
    yeux: 'Gris-brun avec une qualité de quelqu\'un qui fait ce qu\'il croit être juste face à des pressions contraires.',
    vetements: 'Tenue de technicien fongique avec équipement de protection partielle — il maintient les anciens protocoles de sécurité même quand les nouveaux les ont supprimés.',
    signes_particuliers: 'Il maintient les apports à la zone fongique selon les anciens chiffres — les chiffres d\'avant la réduction de Thyss. Il le fait seul, sans autorisation.',
  },

  psychologie: {
    dominante: 'Technicien de contribution fongique à Ormn-Dur. Thyss (42) a réduit les apports officiels à la zone fongique. Kargesh continue à appliquer les anciens chiffres — il pense que les nouveaux sont insuffisants pour maintenir l\'équilibre de la zone. Cette désobéissance discrète est un risque professionnel constant.',
    mecanisme_de_defense: 'La conviction technique comme protection. Il maintient les anciens chiffres parce que c\'est techniquement correct — pas pour des raisons politiques. Cette distinction est défendable.',
    contradiction_interne: 'Il désobéit à Thyss (42) en maintenant les anciens apports. Mais si la zone fongique se stabilise avec ses apports secrets, Thyss croira que les chiffres réduits fonctionnent. Sa désobéissance maintient l\'illusion que la politique de Thyss est correcte.',
    rapport_aux_autres: 'Thyss (42) est son adversaire interne — la pression qu\'il contourne. Drevaya (39) est dans son réseau — quelqu\'un qui comprend pourquoi les anciens chiffres sont nécessaires.',
    vision_du_monde: 'La zone fongique de la Fosse Interdite a un équilibre délicat. Réduire les apports en dessous d\'un seuil critique déstabilise cet équilibre. Il maintient ce seuil parce que personne d\'autre ne le fait.',
  },

  histoire: {
    enfance: {
      titre: 'La technique fongique',
      contenu: 'Formation en gestion des zones fongiques souterraines — une spécialité rare et précise. Il avait travaillé sur la zone de la Fosse Interdite depuis 20 ans.',
    },
    arrivee: {
      titre: 'La réduction de Thyss',
      contenu: 'Thyss (42) avait imposé une réduction des apports fongiques pour des raisons budgétaires. Kargesh avait calculé que les nouveaux chiffres étaient insuffisants. Il avait présenté ses calculs. Thyss les avait ignorés.',
    },
    premier_conflit: {
      titre: 'La désobéissance',
      contenu: 'Il avait continué à appliquer les anciens chiffres en falsifiant ses rapports — signalant les chiffres réduits tout en maintenant les apports réels. Cette double comptabilité était risquée mais techniquement justifiée à ses yeux.',
    },
    revelation: {
      titre: 'Le paradoxe',
      contenu: 'Il avait compris que sa désobéissance cachée maintenait l\'illusion que la politique de Thyss fonctionnait. En maintenant l\'équilibre secrètement, il validait la décision qui avait tort. Il n\'avait pas de solution à ce paradoxe.',
    },
    etat_actuel: {
      titre: 'La double comptabilité',
      contenu: 'Il maintient les anciens apports. Il signale les nouveaux chiffres. Il attend que quelqu\'un remarque la discordance — ou que la zone se déstabilise malgré lui.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kargesh_chiffres',
      titre: 'La double comptabilité révélée',
      description: 'Kargesh maintient secrètement les anciens apports fongiques tout en signalant les chiffres réduits. Si quelqu\'un audite ses rapports — Drevaya (39), un agent de la Fosse — la discordance sera visible. Il devra expliquer sa double comptabilité. Thyss (42) découvrira que sa politique n\'a jamais été appliquée.',
      personnages_impliques: [42, 39],
      declencheur: 'Audit des rapports de contribution fongique',
      consequence: 'Double comptabilité révélée — Kargesh exposé, Thyss confronté à sa politique jamais appliquée',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Technicien fongique maintenant secrètement les anciens apports contre la politique de Thyss. Double comptabilité. Paradoxe de la désobéissance cachée.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'adversaire', note: 'Adversaire interne. Sa politique de réduction est celle que Kargesh contourne.' },
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Comprend pourquoi les anciens chiffres sont nécessaires.' },
  ],

  combat: {
    sorts: [
      'Contrôle souterrain (Sol) — manipulation des couches de sol — modification de terrain',
      'Stabilisation fongique (Sol) — maintien d\'équilibre — défense de zone',
    ],
  },

  image_prompts: [
    {
      id: 'kargesh_contribution',
      description: 'Kargesh dans la zone de contribution fongique d\'Ormn-Dur — un Chthonien de 47 ans ajustant des apports avec précision. Ses gestes sont exacts. Ses rapports falsifiés sont à côté de lui. Il maintient quelque chose que personne ne sait qu\'il maintient.',
      style: 'réaliste Chthonien technicien fongique, Ormn-Dur, double comptabilité, désobéissance technique, Fosse Interdite',
    },
  ],

  lore_long: `Kargesh maintient les anciens apports à la zone fongique d'Ormn-Dur. Thyss (42) a imposé des chiffres réduits — insuffisants selon ses calculs.

Il signale les chiffres réduits dans ses rapports et maintient les anciens dans la réalité. Double comptabilité depuis 2 ans.

Si quelqu'un audite ses rapports, sa désobéissance sera révélée — et la politique de Thyss exposée comme jamais appliquée.`,
};

export default kargesh;
