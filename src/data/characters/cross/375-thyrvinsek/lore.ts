import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvinsek: PersonnageLoreComplet = {
  id: 375,
  nom: 'Thyrvinsek',
  element: 'Insecte',
  element2: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Naturaliste de terrain — mince avec des mouvements lents et délibérés. Il ne fait pas de gestes brusques dans les zones d\'insectes — une habitude qui s\'étend à tous les environnements.',
    peau: 'Gris Chthonien avec des marques de piqûres et de morsures aux avant-bras et aux mains — une exposition répétée aux insectes qu\'il étudie. Certaines marques sont accompagnées d\'une légère décoloration — traces de toxines dont il a développé une résistance partielle.',
    yeux: 'Marron avec une qualité d\'observation minutieuse — il voit les détails que d\'autres manquent. Habitué à suivre des sujets d\'étude de quelques millimètres.',
    vetements: 'Tenue de terrain avec des compartiments pour les récipients d\'échantillons. Pas de protection particulière contre les insectes — il travaille avec eux depuis assez longtemps pour ne pas en avoir besoin.',
    signes_particuliers: 'Il s\'arrête régulièrement pour observer — pas toujours quelque chose que son interlocuteur voit. Il peut rester immobile 20 minutes sans paraître inconfortable.',
  },

  psychologie: {
    dominante: 'Étude des insectes vivant dans les zones de transition entre Ormn-Dur et Noctéa — en particulier ceux qui ont développé une résistance aux toxines fongiques de la frontière. Ces insectes résistants sont des indicateurs de la santé des zones de transition et des vecteurs potentiels de toxines modifiées.',
    mecanisme_de_defense: 'L\'observation pure. Il observe, il documente, il ne conclut pas au-delà des données. Les implications de ce qu\'il trouve sont une autre question.',
    contradiction_interne: 'Les insectes résistants aux toxines qu\'il étudie sont utilisés par Karvinsek (376) — collecteur Convergence — pour des applications dont il n\'est pas informé. Il lui a fourni des spécimens sans demander l\'usage prévu. La demande de Karvinsek était formulée comme de la recherche.',
    rapport_aux_autres: 'Drekkel (145) est un Chthonien des zones frontalières qui lui signale des anomalies inhabituelles dans les colonies d\'insectes — des changements qui précèdent souvent des modifications dans les zones de transition. Nyrsh (159) est un spécialiste des toxines fongiques de Noctéa dont les données complètent les siennes sur les mécanismes de résistance.',
    vision_du_monde: 'Les zones de transition entre régions sont des espaces d\'adaptation évolutive unique. Ce qu\'elles produisent biologiquement est ailleurs impossible. L\'étudier est étudier la vie dans ses formes les plus créatives.',
  },

  histoire: {
    enfance: {
      titre: 'La colonie des tunnels',
      contenu: 'À 13 ans, dans un tunnel frontalier d\'Ormn-Dur, il avait trouvé une colonie d\'insectes dans une zone de toxines fongiques qui aurait dû être létale pour eux. Il avait passé 6 mois à comprendre leur mécanisme de résistance. C\'était sa première découverte.',
    },
    arrivee: {
      titre: 'La zone de transition',
      contenu: 'À 23 ans, il avait suivi les colonies résistantes vers les zones de transition avec Noctéa — des zones où les toxines fongiques de Noctéa et les minéraux d\'Ormn-Dur créaient des environnements hybrides. Il avait trouvé des formes de vie qu\'il n\'avait vues nulle part ailleurs.',
    },
    premier_conflit: {
      titre: 'Les spécimens de Karvinsek',
      contenu: 'À 29 ans, Karvinsek (376) l\'avait contacté pour des spécimens d\'insectes résistants — formulant la demande comme une collecte pour la recherche biologique. Il avait fourni les spécimens. Drekkel (145) lui avait signalé plus tard que Karvinsek travaillait pour la Convergence. Il n\'avait pas demandé à Karvinsek l\'usage prévu.',
    },
    revelation: {
      titre: 'Les colonies modifiées',
      contenu: 'Drekkel (145) lui avait signalé une anomalie dans une colonie frontalière — des comportements non naturels, des patterns de mouvement qui ne correspondaient pas aux espèces observées. Les insectes montraient des caractéristiques des spécimens qu\'il avait fournis à Karvinsek mais avec des modifications. La Convergence avait modifié des spécimens et les avait relâchés.',
    },
    etat_actuel: {
      titre: 'Le suivi des colonies',
      contenu: 'Il suit 3 colonies potentiellement modifiées dans les zones de transition. Il documente les différences comportementales par rapport aux colonies naturelles. Il n\'a pas encore contacté Karvinsek pour expliquer ce qu\'il trouve. Il ne sait pas encore ce qu\'il va faire de ces données.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvinsek_colonies_modifiees',
      titre: 'Les insectes de la Convergence',
      description: 'Les 3 colonies qu\'il suit montrent des caractéristiques des spécimens fournis à Karvinsek (376) avec des modifications comportementales. La Convergence a utilisé ses spécimens, les a modifiés et les a relâchés dans les zones de transition. Ce qu\'elle a modifié et pourquoi est inconnu. Les insectes modifiés interagissent avec les colonies naturelles.',
      personnages_impliques: [376, 145],
      declencheur: 'Observation de colonies potentiellement modifiées dans les zones de transition',
      consequence: 'Données sur la modification en cours de documentation — usage final des modifications inconnu',
    },
    {
      id: 'thyrvinsek_partage_nyrsh',
      titre: 'Les mécanismes de résistance',
      description: 'Nyrsh (159) analyse les toxines fongiques du côté Noctéa. Ses données sur les mécanismes de résistance des insectes dans les zones de transition sont complémentaires aux siennes. Si les modifications Convergence altèrent la résistance aux toxines, Nyrsh pourra le confirmer du côté Noctéa. Il lui prépare un partage de données.',
      personnages_impliques: [159, 145],
      declencheur: 'Préparation d\'un partage de données avec Nyrsh pour confirmer les modifications observées',
      consequence: 'Collaboration croisée Ormn-Dur/Noctéa pour documenter les effets des modifications Convergence',
    },
  ],

  arcs: ['arc_zones_de_transition'],
  position_dans_arc: 'Naturaliste Chthonien indépendant étudiant les insectes résistants aux toxines dans les zones de transition Ormn-Dur/Noctéa. Des spécimens fournis à Karvinsek (376) ont été modifiés et relâchés. 3 colonies potentiellement modifiées en suivi.',

  relations: [
    { id: 145, nom: 'Drekkel', type: 'allié', note: 'Signale les anomalies dans les colonies frontalières. A révélé l\'affiliation Convergence de Karvinsek.' },
    { id: 159, nom: 'Nyrsh', type: 'allié', note: 'Spécialiste des toxines fongiques de Noctéa. Données complémentaires sur les mécanismes de résistance.' },
  ],

  combat: {
    sorts: [
      'Essaim de terrain (Insecte) — direction d\'un essaim vers une zone ou une cible — saturation et désorientation',
      'Toxine de résistance (Poison) — injection d\'une toxine dérivée des insectes résistants — effets adaptés à l\'espèce cible',
      'Colonie défensive (Insecte + Poison) — déploiement d\'une colonie avec toxines actives — zone de protection par saturation',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvinsek_observation',
      description: 'Thyrvinsek dans une zone de transition Ormn-Dur/Noctéa — accroupi, immobile, observant une colonie d\'insectes aux comportements légèrement anormaux. Ses mains tiennent un récipient d\'échantillon. Des champignons luminescents de Noctéa en arrière-plan. Son expression est d\'analyse calme avec une légère inquiétude.',
      style: 'réaliste naturaliste Chthonien, zone de transition Ormn-Dur/Noctéa, colonie d\'insectes anormaux, champignons luminescents',
    },
  ],

  lore_long: `Thyrvinsek étudie les insectes résistants aux toxines fongiques dans les zones de transition Ormn-Dur/Noctéa. Il a fourni des spécimens à Karvinsek (376) sans connaître l'usage prévu.

Ces spécimens ont été modifiés et relâchés dans les zones de transition — 3 colonies montrent des comportements anormaux. La Convergence a utilisé ses spécimens. Ce qu'elle a modifié reste à documenter.

Nyrsh (159) peut confirmer du côté Noctéa. Il lui prépare un partage de données.`,
};

export default thyrvinsek;
