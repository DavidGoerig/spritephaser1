import type { PersonnageLoreComplet } from '../../../lore-types';

const tarynel: PersonnageLoreComplet = {
  id: 95,
  nom: 'Tarynel',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 44 ans, trapue avec les mains d\'une marchande de marché — fortes, habituées à déplacer des caisses. Elle n\'a rien d\'un agent. C\'est pour ça qu\'elle en est un sans le savoir.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse ordinaire — pas particulièrement forte, pas particulièrement remarquable.',
    yeux: 'Bleus pratiques. Elle voit les poissons, les clients, les caisses. Elle ne voit pas ce que ses caisses transportent d\'autre.',
    vetements: 'Tablier de marchande, tenue pratique. Elle sent le poisson. Ce n\'est pas un déguisement.',
    signes_particuliers: 'Des messages sont glissés dans ses caisses à son insu. Elle les transporte sans le savoir. Elle est une route d\'information sans en avoir connaissance.',
  },

  psychologie: {
    dominante: 'Marchande de poissons ordinaire à Thalassyr. Des messages sont cachés dans ses caisses par Narevael (84) et transmis via son réseau commercial naturel. Elle ne sait pas. Cette ignorance est son utilité.',
    mecanisme_de_defense: 'Pas applicable — elle n\'a pas de défense parce qu\'elle n\'est pas consciente du risque.',
    contradiction_interne: 'Elle est utile à un réseau qu\'elle n\'a pas rejoint. Sa participation n\'est pas consentie. Ce n\'est pas sa contradiction — c\'est celle de ceux qui l\'utilisent.',
    rapport_aux_autres: 'Narevael (84) glisse des messages dans ses caisses. Vel (17) en est le destinataire final. Elle ne connaît ni l\'un ni l\'autre dans cette capacité.',
    vision_du_monde: 'Elle vend des poissons. C\'est son travail. Les gens qui achètent ses poissons font ce qu\'ils font avec.',
  },

  histoire: {
    enfance: {
      titre: 'Le marché',
      contenu: 'Née dans une famille de marchands de Thalassyr. Le marché aux poissons est son territoire depuis l\'enfance. Elle y a passé sa vie.',
    },
    arrivee: {
      titre: 'Les caisses',
      contenu: 'À un moment — elle ne saurait pas dire exactement quand — des clients réguliers avaient commencé à laisser des pourboires en glissant quelque chose dans ses caisses. Elle avait supposé des notes de remerciement ou des billets supplémentaires. Elle n\'avait pas vérifié.',
    },
    premier_conflit: {
      titre: 'L\'ignorance maintenue',
      contenu: 'Elle était passée proche de voir ce que les caisses contenaient une fois — une caisse avait versé. Elle avait ramassé les poissons sans regarder ce qui était tombé à l\'intérieur. Ce n\'était pas de la discrétion. C\'était de l\'inattention.',
    },
    revelation: {
      titre: 'La routine',
      contenu: 'La routine s\'était établie sans qu\'elle en ait pris conscience. Certains clients, certaines caisses, certaines routes de livraison. Tout ça faisait partie de son travail ordinaire.',
    },
    etat_actuel: {
      titre: 'Le marché',
      contenu: 'Elle vend des poissons. Elle livre dans les marchés. Ses caisses transportent des messages qu\'elle ne connaît pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tarynel_caisses',
      titre: 'La route involontaire révélée',
      description: 'Si les agents impériaux fouillent les caisses de Tarynel et trouvent des messages, elle est arrêtée pour une activité à laquelle elle n\'a pas consenti. Sa défense — l\'ignorance — est vraie. Elle peut aussi être perçue comme mensongère. Narevael (84) et Vel (17) ont utilisé une personne non-consentante comme route.',
      personnages_impliques: [84, 17],
      declencheur: 'Fouille des caisses de Tarynel par des agents impériaux',
      consequence: 'Arrestation d\'une personne innocente — ou révélation que le réseau utilise des innocents',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Marchande de poissons inconsciente d\'être une route d\'information. Ses caisses transportent des messages de Narevael (84) vers Vel (17).',

  relations: [
    { id: 84, nom: 'Narevael', type: 'contact', note: 'Glisse des messages dans ses caisses. Elle ne le sait pas.' },
    { id: 17, nom: 'Vel', type: 'contact', note: 'Destinataire final. Elle ne le connaît pas dans cette capacité.' },
  ],

  combat: {
    sorts: [
      'Jet d\'eau (Eau) — usage basique de l\'élément — défense instinctive sans entraînement',
    ],
  },

  image_prompts: [
    {
      id: 'tarynel_marche',
      description: 'Tarynel à son stand de poissons à Thalassyr — une Néréide de 44 ans arrangeant ses caisses. Dans une caisse, entre les poissons, quelque chose de plus. Elle ne sait pas. Son expression est de concentration ordinaire de marchande.',
      style: 'réaliste Néréide marchande de poissons, marché de Thalassyr, route d\'information inconsciente, quotidien ordinaire',
    },
  ],

  lore_long: `Tarynel vend des poissons à Thalassyr. Elle transporte des messages dans ses caisses sans le savoir.

Narevael (84) glisse les messages, Vel (17) en est le destinataire. Elle est une route d'information non-consentante.

Son ignorance est sa protection et son risque. Si les caisses sont fouillées, elle ne peut pas défendre ce qu'elle ne sait pas.`,
};

export default tarynel;
