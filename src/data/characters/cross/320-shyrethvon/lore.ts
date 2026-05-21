import type { PersonnageLoreComplet } from '../../../lore-types';

const shyrethvon: PersonnageLoreComplet = {
  id: 320,
  nom: 'Shyrethvon',
  element: 'Ténèbres',
  element2: 'Psy',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Mince et posé, avec une façon d\'occuper l\'espace qui laisse une marge de distance. Il ne cherche pas le contact physique.',
    peau: 'Gris-bleu Umbrien avec une légère translucidité aux tempes — le Psy secondaire qui s\'exprime dans les zones d\'activité cérébrale intense. Visible quand il travaille.',
    yeux: 'Noirs profonds avec un reflet violacé. Ils ne clignotent pas au rythme normal — une habitude d\'observation prolongée.',
    vetements: 'Tenue neutre de Vel\'Nox, rien qui indique la Convergence. Les seuls marqueurs sont des instruments de calibration psychique portés dans une poche intérieure.',
    signes_particuliers: 'Il peut lire une pièce avant d\'y entrer — les résidus psychiques Ténèbres laissés par les présences récentes. Il le fait systématiquement.',
  },

  psychologie: {
    dominante: 'Classification et catalogage de ce que les signatures Ténèbres révèlent sur leurs porteurs. Le Protocole a besoin de données. Il produit des données précises.',
    mecanisme_de_defense: 'La séparation stricte entre l\'observation et le jugement. Il note. Il ne conclut pas sur les personnes — il conclut sur les signatures.',
    contradiction_interne: 'Ses données alimentent le Protocole de la Convergence. Il sait ce que le Protocole fait de certaines de ces données. Il a décidé que la qualité de ses données est sa responsabilité. L\'usage des données ne l\'est pas.',
    rapport_aux_autres: 'Shael (48) reçoit ses rapports et les intègre au Protocole — sans lui dire comment ils sont utilisés. Velthyr (148) est son seul collègue qui travaille sur des signatures similaires et avec qui il compare ses méthodes.',
    vision_du_monde: 'Les signatures Ténèbres sont des empreintes — chaque Umbrien laisse une trace unique dans l\'ombre. Cette unicité est cartographiable. La cartographie existe indépendamment de l\'usage qu\'on en fait.',
  },

  histoire: {
    enfance: {
      titre: 'La lecture des résidus',
      contenu: 'Né à Vel\'Nox dans une famille d\'Umbriens ordinaires. À 12 ans, il avait commencé à percevoir les résidus psychiques Ténèbres dans les espaces — des traces de qui était passé là, dans quel état. Les autres de sa famille n\'avaient pas cette perception. À 16 ans, il avait compris que c\'était rare.',
    },
    arrivee: {
      titre: 'Le recrutement de la Convergence',
      contenu: 'À 24 ans, la Convergence l\'avait approché via Shael (48) — pas comme un ennemi, comme quelqu\'un avec une compétence rare. L\'offre était claire : cataloguer des signatures Ténèbres pour un projet de recherche sur la population Umbrien de Vel\'Nox. Il avait demandé si les personnes cataloguées seraient informées. La réponse avait été non. Il avait accepté quand même.',
    },
    premier_conflit: {
      titre: 'La signature de résistance',
      contenu: 'À 31 ans, il avait catalogué une signature Ténèbres qui correspondait à une personne qu\'il connaissait — une connaissance de quartier. Deux semaines plus tard, cette personne avait disparu. Il n\'avait pas fait de lien public. Il avait revu ses données pour voir si sa méthode avait contribué à l\'identification. Elle avait pu contribuer.',
    },
    revelation: {
      titre: 'La comparaison avec Velthyr',
      contenu: 'Velthyr (148) utilisait des méthodes différentes pour cataloguer des signatures — moins précises sur l\'individu, plus précises sur les groupes. En comparant leurs approches, Shyrethvon avait réalisé que sa méthode individualisante était utilisable pour des identifications que la méthode de Velthyr ne permettait pas. Il n\'avait pas changé de méthode. Il avait noté la différence.',
    },
    etat_actuel: {
      titre: 'Le Protocole en cours',
      contenu: 'Il alimente régulièrement le Protocole avec des analyses de signatures. Il s\'est imposé une règle personnelle : il ne cataloguera pas une signature s\'il connaît personnellement la personne. Cette règle a deux exceptions déjà.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyrethvon_deux_exceptions',
      titre: 'Les deux exceptions à la règle',
      description: 'Sa règle de ne pas cataloguer les personnes qu\'il connaît a deux exceptions — deux cas où il avait fourni des données avant de réaliser l\'identité. Les deux personnes concernées sont toujours vivantes. Il ne sait pas si ses données ont été utilisées dans leur cas. Il n\'a pas posé la question à Shael (48).',
      personnages_impliques: [48, 148],
      declencheur: 'Règle personnelle avec deux exceptions déjà réalisées',
      consequence: 'Données potentiellement utilisées sur des connaissances — non confirmé, non questionné',
    },
    {
      id: 'shyrethvon_disparu',
      titre: 'La signature qui a disparu',
      description: 'La connaissance de quartier qui avait disparu après son catalogage — il ne sait pas si ses données ont contribué. La causalité n\'est pas prouvée. Il n\'a pas investigué. Il continue de travailler. Cette absence de vérification est une décision, même s\'il ne la formule pas ainsi.',
      personnages_impliques: [],
      declencheur: 'Disparition d\'une connaissance après catalogage de sa signature',
      consequence: 'Incertitude non résolue sur sa contribution — décision de ne pas vérifier',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Producteur de données pour le Protocole de la Convergence dans Vel\'Nox. Sa méthode individualisante est l\'outil le plus précis d\'identification que la Convergence a dans la ville.',

  relations: [
    { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit ses rapports pour le Protocole. Ne précise pas les usages. Shyrethvon ne pose pas la question.' },
    { id: 148, nom: 'Velthyr', type: 'allié', note: 'Collègue aux méthodes différentes. Comparaison qui a révélé la spécificité individualisante de sa méthode.' },
  ],

  combat: {
    sorts: [
      'Lecture de résidu (Ténèbres) — analyse des traces psychiques laissées dans un espace — information de terrain',
      'Projection psy (Psy) — envoi d\'une impulsion psychique qui révèle les présences cachées — détection',
      'Signature isolée (Ténèbres) — identification et isolation d\'une signature Ténèbres spécifique — ciblage de précision',
    ],
  },

  image_prompts: [
    {
      id: 'shyrethvon_lecture',
      description: 'Shyrethvon debout dans une pièce vide de Vel\'Nox, les yeux fermés, les mains légèrement ouvertes. Il lit les résidus. Sa translucidité aux tempes est visible. Rien dans l\'espace ne suggère qu\'il fait quelque chose — sauf cette immobilité totale.',
      style: 'réaliste umbrien psychique, espace urbain de Vel\'Nox, immobilité active, translucidité subtile',
    },
  ],

  lore_long: `Shyrethvon lit les signatures Ténèbres que les Umbriens laissent dans les espaces. Il les cataloguea pour la Convergence.

Il s'est imposé une règle : ne pas cataloguer les personnes qu'il connaît. La règle a deux exceptions déjà.

Une connaissance de quartier a disparu deux semaines après son catalogage. Il ne sait pas si ses données ont contribué. Il n'a pas investigué. Il continue de travailler.

Velthyr (148) a des méthodes différentes — moins précises sur l'individu, plus précises sur les groupes. Sa méthode à lui est la seule qui permette des identifications individuelles. Il n'a pas changé de méthode quand il l'a réalisé.

Il a décidé que l'usage des données n'est pas sa responsabilité. Cette décision lui résiste parfois.`,
};

export default shyrethvon;
