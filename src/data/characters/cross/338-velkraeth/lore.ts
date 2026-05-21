import type { PersonnageLoreComplet } from '../../../lore-types';

const velkraeth: PersonnageLoreComplet = {
  id: 338,
  nom: 'Velkraeth',
  element: 'Glace',
  element2: 'Fée',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Moyenne, avec une posture d\'archiviste — légèrement voûtée vers l\'avant, comme quelqu\'un habitué à se pencher sur des surfaces de travail.',
    peau: 'Blanc-bleu Givrin avec une iridescence fine aux mains — l\'effet de la magie Fée sur la glace. Ses mains ont une légère texture cristalline au bout des doigts.',
    yeux: 'Bleu-violet inhabituels. La combinaison Glace primaire et Fée secondaire produit parfois des teintes mixtes dans les yeux Givrins. Les siens ont une qualité de lecture — ils évaluent les surfaces.',
    vetements: 'Tenue d\'archiviste avec des zones renforcées aux coudes — les surfaces de travail sur lesquelles elle s\'appuie. Des instruments fins portés à la ceinture — outils de gravure dans la glace.',
    signes_particuliers: 'Elle touche les surfaces de glace de la paume avant de commencer à graver. Ce geste teste la qualité de la glace et identifie les zones de stress où la gravure pourrait provoquer des fissures.',
  },

  psychologie: {
    dominante: 'Préservation de souvenirs dans la glace via une combinaison de techniques Givrins et de magie Fée. Les archives de glace standard durent des décennies. Ses archives durent des siècles — la magie Fée stabilise la structure cristalline et ralentit la dégradation.',
    mecanisme_de_defense: 'L\'objectivité de l\'archiviste. Elle préserve ce qui lui est confié, pas ce qu\'elle évalue comme important. Cette neutralité revendiquée lui permet de traiter des souvenirs contradictoires sans se positionner.',
    contradiction_interne: 'Thyval (55) lui confie des souvenirs royaux à préserver — y compris des souvenirs de décisions politiques qui ont causé des dommages documentés. Elle les grave dans la glace avec la même précision que les souvenirs bienveillants. Elle n\'ajoute pas de contexte. Elle ne sait pas si cette neutralité est une vertu ou une forme de complicité.',
    rapport_aux_autres: 'Thyval (55) est la source principale de souvenirs royaux à archiver. Velkren (162) est un archiviste indépendant avec qui elle partage parfois des techniques — et qui lui pose des questions sur les limites de l\'archivage neutre.',
    vision_du_monde: 'Les souvenirs disparaissent. La glace les préserve. Ce qui a existé mérite de ne pas être perdu. Elle accepte de débattre de la suite de cette affirmation.',
  },

  histoire: {
    enfance: {
      titre: 'La première gravure',
      contenu: 'À 14 ans, elle avait gravé un souvenir dans un bloc de glace pour la première fois — pas un souvenir personnel, celui d\'une voisine âgée qui avait peur de perdre la mémoire de son mari mort. La gravure avait duré 20 ans avant de se dégrader. L\'apprentissage de la technique avait commencé ce jour-là.',
    },
    arrivee: {
      titre: 'L\'intégration royale',
      contenu: 'À 30 ans, Thyval (55) l\'avait approchée pour archiver des souvenirs dynastiques de la Monarchie Givrin. La technique qu\'elle avait développée — la combinaison Glace/Fée — permettait des archives de qualité supérieure à ce qui existait. Elle avait accepté sans comprendre entièrement ce que ça impliquait de travailler pour une institution.',
    },
    premier_conflit: {
      titre: 'Le souvenir compromettant',
      contenu: 'À 45 ans, Thyval lui avait confié un souvenir d\'une décision royale sur une révolte Givrin — une décision qui avait causé des morts. Elle avait gravé le souvenir comme les autres. Velkren (162) lui avait posé une question plus tard : est-ce qu\'un archiviste est responsable de ce qu\'il préserve ? Elle n\'avait pas eu de réponse simple.',
    },
    revelation: {
      titre: 'Les souvenirs sélectifs',
      contenu: 'Elle avait commencé à réaliser que Thyval (55) lui confiait des souvenirs sélectionnés — pas tous les souvenirs importants de la Monarchie, seulement ceux que la Monarchie voulait voir préservés. Il y avait des événements dont elle savait l\'existence et dont aucun souvenir ne lui avait été confié. Les archives étaient complètes sur les souvenirs reçus. Elles étaient incomplètes sur l\'histoire.',
    },
    etat_actuel: {
      titre: 'Les archives actuelles',
      contenu: 'Elle conserve 340 souvenirs gravés dans des blocs de glace de sa chambre d\'archives. Thyval a demandé que 12 blocs récents soient rendus accessibles à Keldris (57) — un agent impérial. Elle a exécuté la demande. Elle a demandé pourquoi. Thyval a dit "par nécessité politique". Elle n\'a pas obtenu plus de détails.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velkraeth_acces_keldris',
      titre: 'Les 12 blocs pour l\'Empire',
      description: 'Thyval (55) a demandé que 12 blocs d\'archives récents soient rendus accessibles à Keldris (57), agent impérial. Velkraeth a exécuté. Ces 12 blocs contiennent des souvenirs sur des personnes et des événements de Crysalme des 3 dernières années. Elle ne sait pas pourquoi l\'Empire y accède via la Monarchie plutôt que directement. "Nécessité politique" est une réponse insuffisante.',
      personnages_impliques: [55, 162],
      declencheur: 'Demande d\'accès de Thyval pour Keldris sur des archives récentes',
      consequence: 'Archives accessibles à l\'Empire via Monarchie — raison non communiquée, question ouverte',
    },
    {
      id: 'velkraeth_archives_incompletes',
      titre: 'Ce qui n\'a pas été confié',
      description: 'Elle sait l\'existence d\'événements dont aucun souvenir ne lui a été confié pour archivage. Les archives royales sont complètes sur les souvenirs reçus. Elles sont incomplètes sur l\'histoire de la Monarchie. Velkren (162) a posé la question de la responsabilité de l\'archiviste. Elle n\'a toujours pas de réponse simple.',
      personnages_impliques: [162, 55],
      declencheur: 'Réalisation de la sélectivité des souvenirs confiés par Thyval',
      consequence: 'Archives institutionnellement biaisées — question de responsabilité non résolue',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Archiviste royale qui préserve des souvenirs dans la glace à Crysalme. Ses archives durent des siècles. Leur contenu est défini par Thyval — avec des sélections et des omissions dont elle prend conscience progressivement.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'supérieur', note: 'Source principale des souvenirs royaux. Sélectionne ce qui est archivé. A demandé l\'accès de Keldris sans explication suffisante.' },
    { id: 162, nom: 'Velkren', type: 'allié', note: 'Archiviste indépendant. Partage des techniques. Pose des questions sur les limites de la neutralité archivistique.' },
  ],

  combat: {
    sorts: [
      'Gravure de gel (Glace) — inscription d\'une signature glacée permanente sur une surface — marquage ou dommage structural',
      'Mémoire féerique (Fée) — projection d\'un souvenir gravé dans l\'espace — perturbation psychique par souvenir imposé',
      'Bloc de glace stable (Glace + Fée) — création d\'un bloc de glace à haute résistance — bouclier ou projectile lourd',
    ],
  },

  image_prompts: [
    {
      id: 'velkraeth_gravure',
      description: 'Velkraeth dans sa chambre d\'archives — des rangées de blocs de glace iridescents de hauteur variable. Elle grave dans un bloc récent avec un instrument fin. La lumière réfléchie par les blocs crée des patterns sur les murs. Elle travaille avec une précision absolue.',
      style: 'réaliste archive de glace, blocs iridescents en rangées, gravure précise, Crysalme intérieur',
    },
  ],

  lore_long: `Velkraeth grave des souvenirs dans la glace via une combinaison Glace/Fée. Ses archives durent des siècles — bien au-delà des techniques standard.

340 blocs actuellement. Les souvenirs sont choisis par Thyval (55), pas par elle. Il y a des événements dont aucun souvenir ne lui a été confié. Ses archives sont complètes sur les souvenirs reçus. Elles sont incomplètes sur l'histoire.

Thyval a demandé que 12 blocs récents soient accessibles à Keldris (57), agent impérial. "Nécessité politique." Elle a exécuté. Elle n'a pas obtenu d'explication suffisante.

Velkren (162) lui pose la question de la responsabilité de l'archiviste. Elle n'a pas de réponse simple.`,
};

export default velkraeth;
