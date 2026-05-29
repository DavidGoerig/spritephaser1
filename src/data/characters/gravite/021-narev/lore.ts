import type { PersonnageLoreComplet } from '../../../lore-types';

const narev: PersonnageLoreComplet = {
  id: 21,
  nom: 'Narev',
  element: 'Gravité',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 58 ans — une solidité qui n\'est pas physique seulement. Son élément Gravité se manifeste dans sa façon d\'être présent : il a du poids, au sens littéral et au sens figuré. Il se déplace lentement dans les conversations comme dans l\'espace.',
    peau: 'Bleutée profonde Néréide avec des micro-variations de luminescence qui reflètent son état interne — quand il est en tension, sa peau perd légèrement sa luminescence. Quand il est calme, elle est plus prononcée. Ceux qui le connaissent lisent son état dans sa peau.',
    yeux: 'Gris-bleu avec une qualité de réflexion lente — il pense avant de répondre, toujours. Les conversations avec lui ont des silences qui ne sont pas inconfortables. Il les utilise.',
    vetements: 'Tenue de la Confédération de niveau intermédiaire — ni le haut rang ni la base. Il a refusé des promotions. Il préfère être là où il peut observer sans être observé.',
    signes_particuliers: 'Quand quelque chose le choque, il ne réagit pas immédiatement — il le retient, le traite, le sort plusieurs heures plus tard dans une conversation différente. Les personnes qui ne le connaissent pas pensent qu\'il n\'a pas entendu. Il a toujours entendu.',
  },

  psychologie: {
    dominante: 'Témoin de la corruption progressive de la structure commerciale de Néris depuis 30 ans — il maintient sa propre intégrité dans un système qui s\'en est progressivement éloigné. La question qu\'il se pose : à quel prix, et pendant combien de temps encore.',
    mecanisme_de_defense: 'L\'intégrité comme refuge. Tant qu\'il ne participe pas à ce qu\'il voit se corrompre, il reste intact. Mais l\'intégrité passive est aussi une forme de complicité — il le sait. Il n\'a pas encore trouvé la réponse à cette équation.',
    contradiction_interne: 'Il a vu la structure commerciale de Néris se corrompre sur 30 ans. Il a des preuves que certaines transactions commerciales "neutres" ont financé des opérations impériales. Il n\'a rien dit officiellement parce qu\'il n\'avait pas assez de preuves pour que le rapport change quelque chose. Il attend d\'en avoir assez. Il attend depuis longtemps.',
    rapport_aux_autres: 'Narevael (84) est une source d\'information indirecte sur les réseaux Dissidents à Thalassyr — il ne cherche pas à les compromettres, mais leurs opérations l\'informent sur ce que la structure officielle ne voit pas. Shyrael (90) plonge dans les mêmes zones qu\'il surveille — leurs observations se complètent parfois involontairement.',
    vision_du_monde: 'Les structures commerciales sont des systèmes vivants — elles changent, se dégradent, se régénèrent. Ce qu\'il voit à Néris est une dégradation progressive. Il croit encore qu\'une régénération est possible. De moins en moins facilement.',
  },

  histoire: {
    enfance: {
      titre: 'Le Thalassyr commercial',
      contenu: 'À 18 ans, il avait rejoint la Confédération comme analyste commercial — les flux d\'échange entre Thalassyr et les autres régions, les équilibres, les interdépendances. Le Thalassyr qu\'il avait rejoint était fonctionnel et approximativement honnête. Cette approximation s\'était progressivement dégradée.',
    },
    arrivee: {
      titre: 'La première anomalie',
      contenu: 'À 28 ans, il avait identifié sa première anomalie commerciale — une transaction entre une maison de négoce de Néris et une entité impériale passant par un intermédiaire qui n\'existait pas. Il avait signalé. Le rapport avait été "noté" et rien n\'avait changé. C\'était la première fois que signaler ne produisait pas de résultat.',
    },
    premier_conflit: {
      titre: 'Le réseau de transactions',
      contenu: 'À 38 ans, il avait reconstitué un réseau de 12 transactions sur 5 ans — toutes passant par des intermédiaires fictifs, toutes finançant in fine des opérations impériales dans des régions en tension. Il avait une preuve solide. Il avait rédigé un rapport complet. Son supérieur de l\'époque lui avait dit que "le moment était mal choisi pour perturber les relations avec l\'Empire". Le rapport n\'avait pas circulé.',
    },
    revelation: {
      titre: 'La résignation partielle',
      contenu: 'À 50 ans, il avait accepté qu\'il ne pourrait pas changer le système par des rapports. Il avait commencé à fonctionner différemment : maintenir son propre secteur d\'activité intègre, documenter sans signaler, attendre un contexte où la documentation aurait de l\'impact. C\'était une résignation partielle. Il la vivait comme de la stratégie.',
    },
    etat_actuel: {
      titre: 'La documentation de 30 ans',
      contenu: 'Il possède 30 ans de documentation sur les anomalies commerciales de Néris. Des noms, des montants, des flux. Si cette documentation atteignait Thariel (18) ou Vel (17), elle rejoindrait les archives non filtrées. Il n\'a pas encore fait ce pas. Il attend encore de savoir si c\'est de la stratégie ou de la lâcheté.',
    },
  },

  evenements_narratifs: [
    {
      id: 'narev_documentation',
      titre: 'Les 30 ans d\'anomalies',
      description: 'Sa documentation des anomalies commerciales de Néris est complète. Elle implique des noms dans la Confédération, des intermédiaires impériaux, et des transactions qui ont financé des opérations ayant fait des morts. Thariel (18) accepterait cette documentation dans ses archives. Vel (17) la transformerait en action. Narev n\'a pas encore décidé lequel il veut.',
      personnages_impliques: [18, 17],
      declencheur: 'Ébranlement de 30 ans d\'attente d\'un "bon moment" — la crise de Shaleth change le contexte',
      consequence: 'Décision sur la transmission de 30 ans de documentation — et sur ce que ça signifie pour son propre avenir dans la Confédération',
    },
    {
      id: 'narev_drethvael',
      titre: 'L\'anomalie gravitationnelle',
      description: 'Narev a identifié dans les flux commerciaux de Thalassyr des transactions liées à des zones de la Fosse Interdite — des achats de matériaux d\'extraction inhabituel. Ces transactions correspondent aux dates des cycles gravitationnels que Drethvael (370) a documentés. Il ne sait pas ce que ça signifie. Il documente.',
      personnages_impliques: [90, 84],
      declencheur: 'Connexion entre les anomalies commerciales et les cycles de la Fosse Interdite',
      consequence: 'Possibilité d\'une connexion entre les arcs commerciaux de Thalassyr et les événements de la Fosse — à explorer',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Analyste commercial de la Confédération de Thalassyr avec 30 ans de documentation des anomalies commerciales. Possède des preuves de transactions finançant des opérations impériales. N\'a pas encore transmis cette documentation à Thariel (18) ou Vel (17).',

  relations: [
    { id: 18, nom: 'Thariel', type: 'contact', note: 'Archiviste non filtrée. Destinataire potentiel de sa documentation.' },
    { id: 84, nom: 'Narevael', type: 'contact', note: 'Source indirecte d\'information sur les réseaux Dissidents à Thalassyr.' },
    { id: 90, nom: 'Shyrael', type: 'contact', note: 'Plongeuse dont les observations complètent involontairement les siennes.' },
  ],

  combat: {
    sorts: [
      'Champ gravitationnel (Gravité) — zone de gravité augmentée — ralentissement ou immobilisation de zone',
      'Ancre de masse (Gravité) — fixation d\'un objet ou d\'une cible à une position — blocage de mouvement',
      'Vague de pesanteur (Gravité) — pulse gravitationnel directionnel — déstabilisation par surcharge de poids',
    ],
  },

  image_prompts: [
    {
      id: 'narev_archives',
      description: 'Narev dans une salle d\'archives de la Confédération à Néris — un Néréide de 58 ans assis devant une fenêtre, tenant un dossier épais dans ses mains. Il ne le lit pas — il regarde par la fenêtre. Son expression est de quelqu\'un qui a pris une décision longtemps différée et qui n\'est pas encore sûr d\'elle.',
      style: 'réaliste Néréide analyste commercial, archives de la Confédération, décision en suspens, poids du choix',
    },
  ],

  lore_long: `Narev a vu la structure commerciale de Néris se corrompre sur 30 ans. Il a documenté les anomalies, signalé, vu ses rapports ignorés, et attendu un meilleur moment.

Il possède 30 ans de preuves des connections entre les transactions commerciales de Thalassyr et les opérations impériales. Il ne les a pas transmises à Thariel (18) ou Vel (17).

Il attend encore. Il ne sait plus si c'est de la stratégie ou autre chose.`,
};

export default narev;
