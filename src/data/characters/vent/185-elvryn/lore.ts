import type { PersonnageLoreComplet } from '../../../lore-types';

const elvryn: PersonnageLoreComplet = {
  id: 185,
  nom: 'Elvryn',
  element: 'Vent',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 41 ans, pilote — corpulence légère et adaptée aux voyages. Il ressemble à quelqu\'un qui est toujours entre deux destinations.',
    peau: 'Ton bronzé par les voyages extérieurs — il n\'est presque jamais au même endroit plus de deux semaines.',
    yeux: 'Gris-vert avec une qualité de quelqu\'un qui regarde vers la prochaine destination.',
    vetements: 'Tenue de voyage pratique — adaptée à des conditions variées. Rien qui identifie une origine ou une faction.',
    signes_particuliers: 'Il transporte des personnes sans demander leurs noms depuis 10 ans. Son code : destination, pas identité. Il ne sait pas qui il a transporté. Il ne veut pas savoir.',
  },

  psychologie: {
    dominante: 'Pilote itinérant dans l\'Isthme et les régions adjacentes. Son service : transporter des personnes sans poser de questions sur leur identité. Il connaît les destinations. Il ne connaît pas les passagers. Sa neutralité est structurelle — elle n\'est pas seulement déclarée.',
    mecanisme_de_defense: 'L\'ignorance structurelle. Il ne demande pas les noms parce qu\'il ne veut pas les savoir. S\'il ne sait pas qui il a transporté, il ne peut pas révéler quoi que ce soit sous pression. Son service est plus sûr parce que sa connaissance est délibérément limitée.',
    contradiction_interne: 'Il transporte des personnes dont il ne connaît pas l\'identité — ce qui signifie qu\'il a peut-être transporté des personnes qui allaient faire des choses qu\'il n\'aurait pas approuvées. Son service est neutre. Ses conséquences ne le sont pas.',
    rapport_aux_autres: 'Sylvael (104) est dans son réseau — un contact aéride qui lui fournit des informations sur les vents de haute altitude pour ses routes. Velath (49) est dans son réseau — des personnes qui utilisent ses services pour des extractions dans l\'obscurité.',
    vision_du_monde: 'Les personnes doivent pouvoir se déplacer. Il y a des gens qui ne peuvent pas le faire par les routes officielles. Son service répond à ce besoin. Il ne juge pas les besoins.',
  },

  histoire: {
    enfance: {
      titre: 'Le vol',
      contenu: 'Son élément Vent s\'était manifesté comme une aptitude naturelle pour la navigation aérienne. Il avait commencé à piloter à 20 ans — d\'abord des liaisons commerciales régulières, puis des routes plus discrètes.',
    },
    arrivee: {
      titre: 'Le service discret',
      contenu: 'À 31 ans, un contact lui avait demandé de transporter une personne sans poser de questions. Il avait accepté. La personne était arrivée à destination. Il n\'avait jamais su qui c\'était. Il avait compris que ce service avait une valeur.',
    },
    premier_conflit: {
      titre: 'La question posée',
      contenu: 'Un officier impérial l\'avait interrogé sur un passager qu\'il avait transporté un an plus tôt. Il avait répondu honnêtement qu\'il ne se souvenait pas du nom — parce qu\'il n\'avait jamais demandé. L\'officier avait noté quelque chose. Il n\'avait jamais été rappelé.',
    },
    revelation: {
      titre: 'L\'ignorance comme protection',
      contenu: 'Il avait compris que ne pas demander les noms n\'était pas seulement sa préférence — c\'était sa protection légale. Il ne pouvait pas révéler ce qu\'il ne savait pas.',
    },
    etat_actuel: {
      titre: 'Le pilote',
      contenu: 'Il transporte. Il ne demande pas les noms. Son service continue.',
    },
  },

  evenements_narratifs: [
    {
      id: 'elvryn_transport',
      titre: 'Le passager qu\'il n\'a pas reconnu',
      description: 'Elvryn transporte des personnes sans demander leurs noms depuis 10 ans. Si l\'une des personnes qu\'il a transportées est impliquée dans un événement majeur — positif ou négatif — sa participation indirecte sera difficile à évaluer. Il ne sait pas ce qu\'il a contribué.',
      personnages_impliques: [104, 49],
      declencheur: 'Un de ses anciens passagers impliqué dans un événement majeur',
      consequence: 'Elvryn confronté à une contribution indirecte qu\'il ne peut ni confirmer ni nier',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Pilote itinérant transportant des personnes sans demander leurs noms. Neutralité structurelle. Réseau utilisant ses services pour des extractions et des transports discrets.',

  relations: [
    { id: 104, nom: 'Sylvael', type: 'contact', note: 'Fournit des informations sur les vents de haute altitude pour ses routes.' },
    { id: 49, nom: 'Velath', type: 'contact', note: 'Personnes utilisant ses services pour des extractions dans l\'obscurité.' },
  ],

  combat: {
    sorts: [
      'Rafale de vent (Vent) — projection de vent concentré — repoussement',
      'Vol d\'urgence (Vent) — déplacement aérien rapide — fuite ou repositionnement',
    ],
  },

  image_prompts: [
    {
      id: 'elvryn_vol',
      description: 'Elvryn dans son appareil de vol dans l\'Isthme — un Homme-Lien de 41 ans aux commandes, un passager assis derrière lui dont il ne connaît pas le nom. Il regarde la destination. Son passager regarde en arrière. Elvryn ne se retourne pas.',
      style: 'réaliste Homme-Lien pilote, Isthme, transport discret, neutralité structurelle, ignorance délibérée',
    },
  ],

  lore_long: `Elvryn transporte des personnes sans demander leurs noms depuis 10 ans. Son code : destination, pas identité.

Il ne sait pas qui il a transporté. C'est une protection délibérée — il ne peut pas révéler ce qu'il ne sait pas.

Il a peut-être transporté des personnes qui allaient faire des choses qu'il n'aurait pas approuvées. Son service est neutre. Ses conséquences ne le sont pas.`,
};

export default elvryn;
