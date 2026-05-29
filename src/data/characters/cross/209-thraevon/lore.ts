import type { PersonnageLoreComplet } from '../../../lore-types';

const thraevon: PersonnageLoreComplet = {
  id: 209,
  nom: 'Thraevon',
  element: 'Acier',
  element2: 'Feu',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 52 ans, ingénieur — corpulence de quelqu\'un qui passe plus de temps à concevoir qu\'à construire physiquement, mais dont les mains portent les marques du terrain.',
    peau: 'Grise rocheuse avec des intégrations d\'acier — son double élément l\'a modifié structurellement.',
    yeux: 'Gris-métalliques avec des éclats orangés thermiques.',
    vetements: 'Tenue d\'ingénieur de la Technocratie — formelle mais adaptée au terrain de tunnel.',
    signes_particuliers: 'Il conçoit des structures anti-chaleur pour les tunnels d\'Ormn-Dur — des matériaux et des architectures qui permettent aux galeries de résister à des températures élevées si des sources de chaleur pénètraient dans le réseau souterrain.',
  },

  psychologie: {
    dominante: 'Ingénieur de la Technocratie d\'Ormn-Dur spécialisé dans les structures anti-chaleur pour tunnels. Son double élément Acier/Feu lui donne une compréhension unique de la thermodynamique dans des espaces confinés. Il conçoit des solutions pour des problèmes qui n\'ont pas encore eu lieu — des infrastructures de protection contre des scenarios de chaleur extrême.',
    mecanisme_de_defense: 'La préparation comme légitimité. Il conçoit pour des scenarios qui n\'ont pas encore eu lieu. Si ces scenarios se produisent, ses structures seront utiles. Si ils ne se produisent pas, ses structures sont un investissement de sécurité.',
    contradiction_interne: 'Ses structures anti-chaleur préparent Ormn-Dur à des intrusions de chaleur — mais leur existence implique qu\'il anticipe une telle intrusion. Les raisons pour lesquelles une source de chaleur extrême entrerait dans les galeries sont politiquement sensibles.',
    rapport_aux_autres: 'Vorath (134) est dans son réseau — un autre ingénieur d\'Ormn-Dur avec qui il partage des spécifications. La Fosse Interdite est son contexte — les structures qu\'il conçoit sont particulièrement importantes pour les galeries proches de la Fosse.',
    vision_du_monde: 'Les tunnels sont vulnérables à la chaleur. La chaleur vient de sources multiples. Un ingénieur prévoyant conçoit pour les scenarios les plus extrêmes. Son travail est la prévoyance.',
  },

  histoire: {
    enfance: {
      titre: 'L\'ingénierie de tunnel',
      contenu: 'Formation d\'ingénieur à Ormn-Dur depuis l\'adolescence. Son double élément Acier/Feu lui avait permis de développer des insights sur la thermodynamique des structures souterraines que ses collègues mono-élémentaires ne pouvaient pas avoir.',
    },
    arrivee: {
      titre: 'Les structures anti-chaleur',
      contenu: 'Il avait commencé à concevoir des structures anti-chaleur à 35 ans — après un incident dans une galerie où une source thermique accidentelle avait compromis une structure existante. Il avait compris que les tunnels n\'étaient pas conçus pour la chaleur.',
    },
    premier_conflit: {
      titre: 'Le financement refusé',
      contenu: 'La Technocratie avait d\'abord refusé de financer ses structures — des scenarios hypothétiques ne justifiaient pas les coûts. Après la rupture Thermique de Varkhôl, son financement avait été accordé. Les scenarios étaient moins hypothétiques.',
    },
    revelation: {
      titre: 'La Fosse',
      contenu: 'En analysant les besoins thermiques de l\'ensemble d\'Ormn-Dur, il avait identifié que les galeries proches de la Fosse Interdite seraient les premières à être compromises si une source de chaleur extrême entrait dans le réseau. Il avait priorisé ces galeries dans ses conceptions.',
    },
    etat_actuel: {
      titre: 'L\'ingénieur prévoyant',
      contenu: 'Il conçoit. Les structures anti-chaleur se déploient progressivement. La Fosse reste le point de priorité.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thraevon_structures',
      titre: 'Les structures mises à l\'épreuve',
      description: 'Thraevon a conçu des structures anti-chaleur pour les tunnels d\'Ormn-Dur, en priorité près de la Fosse Interdite. Si une source de chaleur extrême entre effectivement dans les galeries — un accident de la Fosse, une intrusion de Pyriens — ses structures seront testées en conditions réelles pour la première fois.',
      personnages_impliques: [134],
      declencheur: 'Source de chaleur extrême entrant dans les galeries d\'Ormn-Dur',
      consequence: 'Les structures anti-chaleur de Thraevon testées en conditions réelles — et leur efficacité déterminant la survie de sections de tunnels',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Ingénieur Technocratie concevant des structures anti-chaleur pour les tunnels d\'Ormn-Dur. Double élément Acier/Feu. Priorité aux galeries proches de la Fosse Interdite.',

  relations: [
    { id: 134, nom: 'Vorath', type: 'contact', note: 'Autre ingénieur d\'Ormn-Dur partageant des spécifications.' },
  ],

  combat: {
    sorts: [
      'Armure d\'acier thermique (Acier/Feu) — couche protectrice métallique chauffée — défense avancée',
      'Frappe structurelle (Acier) — impact sur point faible de structure — destruction ciblée',
    ],
  },

  image_prompts: [
    {
      id: 'thraevon_conception',
      description: 'Thraevon dans son bureau d\'ingénierie à Ormn-Dur — un Chthonien de 52 ans devant des plans de structure anti-chaleur pour tunnel. Les zones proches de la Fosse Interdite sont marquées en rouge sur sa carte — les priorités. Son double élément est visible dans ses mains — métal et chaleur simultanément.',
      style: 'réaliste Chthonien ingénieur Technocratie, Ormn-Dur, structures anti-chaleur, Fosse Interdite, double élément Acier/Feu',
    },
  ],

  lore_long: `Thraevon conçoit des structures anti-chaleur pour les tunnels d'Ormn-Dur. Son double élément Acier/Feu lui donne une compréhension unique de la thermodynamique dans les espaces souterrains.

Il a priorisé les galeries proches de la Fosse Interdite — les premières à être compromises si une source de chaleur extrême entre dans le réseau.

Ses structures n'ont pas encore été testées en conditions réelles. La question n'est pas si ce jour viendra.`,
};

export default thraevon;
