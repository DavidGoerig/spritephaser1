import type { PersonnageLoreComplet } from '../../../lore-types';

const sylkavel: PersonnageLoreComplet = {
  id: 264,
  nom: 'Sylkavel',
  element: 'Plante',
  element2: 'Fée',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyenne, mains particulièrement précises — habitude de travail documentaire fin.',
    peau: 'Légèrement verdâtre aux avant-bras, reflets de Plante. La Fée secondaire ajoute une luminescence froide autour des doigts quand elle travaille à la lumière artificielle.',
    yeux: 'Vert mousse, patients. Elle regarde les documents avec la même attention qu\'elle donne aux personnes.',
    vetements: 'Tenue de travail sans ornement. Encre de plusieurs couleurs séchée sur les doigts — elle n\'enlève pas entièrement entre les sessions.',
    signes_particuliers: 'Garde les versions successives de chaque document — elle ne détruit jamais un brouillon, au cas où elle aurait besoin de retracer une décision. Elle a 4 ans de versions dans 3 boîtes numérotées.',
  },

  psychologie: {
    dominante: 'Précision préventive. Elle anticipe les failles avant qu\'elles existent — c\'est ce qui fait qu\'elle les voit maintenant, 4 ans plus tard.',
    mecanisme_de_defense: 'La course silencieuse. Tant qu\'elle corrige plus vite que les vérificateurs ne détectent, le système tient. Elle vit dans cet intervalle.',
    contradiction_interne: 'Elle a donné au Second Avatar une identité documentaire — une façon d\'exister officiellement. Les documents commencent à vieillir mal. Elle répare à distance ce qui devrait avoir vieilli naturellement. C\'est une tension technique qui contient une tension existentielle : elle maintient en vie une identité artificielle pour quelqu\'un dont elle ne sait pas si l\'identité artificielle est ce dont il a besoin.',
    rapport_aux_autres: 'Nyreth (13) opère dans le même réseau de fausses identités — elle a appris les bases de sa méthode de ses documents sans l\'avoir jamais rencontré. C\'est une transmission sans contact.',
    vision_du_monde: 'Une identité documentaire correcte est une forme de liberté que l\'État ne peut pas nier si elle est assez bien faite. Elle travaille à "assez bien faite".',
  },

  histoire: {
    enfance: {
      titre: 'Les documents qui mentent',
      contenu: 'Née dans une famille de l\'Isthme, son père était marchand qui traversait régulièrement les frontières impériales avec des documents "arrangés". À 10 ans elle avait compris comment les arrangements fonctionnaient. À 14 ans elle avait identifié 3 erreurs dans les documents paternels sans lui demander de les montrer. Il les avait fait corriger sans commentaire.',
    },
    arrivee: {
      titre: 'Le réseau et les identités',
      contenu: 'Recrutée à 27 ans par les Dissidentes précisément pour ce talent. Sa capacité à créer des identités documentaires suffisamment étayées pour résister aux vérifications impériales standard avait été recommandée par un contact de l\'Isthme. Elle n\'avait pas hésité.',
    },
    premier_conflit: {
      titre: 'L\'identité du Second Avatar',
      contenu: 'Il y a 4 ans, Sarath (61) lui avait demandé une identité pour "un sujet dont la sécurité dépassait tout ce qu\'elle avait fait jusqu\'ici". Elle avait travaillé 3 semaines. L\'identité était parfaite à l\'époque — corroborée par 4 registres distincts, cohérente sur 12 ans de fausse histoire. Elle en était fière.',
    },
    revelation: {
      titre: 'Le vieillissement mal',
      contenu: 'Il y a 18 mois, en auditant ses créations passées, elle avait identifié les premières failles. Le format de signature d\'un document avait été mis à jour par l\'Empire — l\'identité du Second Avatar utilisait l\'ancien format, ce qui était techniquement anachronique mais non détectable sans comparaison directe. Elle avait commencé à corriger à distance. Depuis, elle en trouve une nouvelle par mois en moyenne.',
    },
    etat_actuel: {
      titre: 'La course',
      contenu: 'Elle surveille l\'identité depuis Isthme via des contacts dans 3 cités-relais qui peuvent vérifier si les documents ont été consultés par des systèmes impériaux. Dernière alerte : il y a 11 jours, une vérification de routine dans un port de l\'Isthme. Le document avait résisté. Elle avait passé 2 heures à vérifier qu\'il n\'y avait pas eu de signalement suivant. Il n\'y en avait pas. Elle avait dormi 4 heures cette nuit-là.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylkavel_nyreth_methode',
      titre: 'La transmission sans contact',
      description: 'Nyreth (13) — identité changeante, Dissident dont les méthodes documentaires sont devenues une référence dans le réseau — a produit des documents que Sylkavel a étudiés sans jamais le rencontrer. Elle a appris sa technique par analyse comparative de ses créations. Si elle le rencontrait, elle reconnaîtrait immédiatement son style.',
      personnages_impliques: [13],
      declencheur: 'Étude des documents Nyreth dans le réseau',
      consequence: 'Filiation technique sans contact — elle a appris d\'un maître qu\'elle n\'a pas connu',
    },
    {
      id: 'sylkavel_eiravel_papiers',
      titre: 'Les rapports qui ont alimenté les faux papiers',
      description: 'Les rapports d\'Eiravel (248) sur les patterns de modification documentaire à la Citadelle avaient, indirectement, aidé Sylkavel à comprendre quelles techniques de falsification étaient détectables et lesquelles ne l\'étaient pas. Elle ne sait pas qu\'Eiravel est la source — le réseau l\'avait anonymisée dans la transmission.',
      personnages_impliques: [248],
      declencheur: 'Diffusion des analyses d\'Eiravel dans le réseau Dissident',
      consequence: 'Connaissance indirecte utilisée pour améliorer les faux documents',
    },
    {
      id: 'sylkavel_verification_port',
      titre: 'La vérification au port',
      description: 'Il y a 11 jours. Un fonctionnaire de port avait consulté l\'identité du Second Avatar. Vérification de routine — entrée dans un registre standard. Le document avait résisté. Sylkavel l\'avait appris 4 heures plus tard via son réseau de surveillance. Elle avait passé 2 heures à chercher si un signalement avait suivi. Pas de signalement. Elle avait dormi 4 heures.',
      personnages_impliques: [59],
      declencheur: 'Vérification de document en conditions réelles',
      consequence: 'Test passé — mais alerte de proximité. L\'identité est utilisée activement, donc exposée régulièrement.',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Gardienne invisible. Elle maintient l\'existence documentaire du Second Avatar sans jamais le voir ni communiquer directement avec lui. Sa compétence est la condition de sa liberté de mouvement.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'Lui a donné une identité il y a 4 ans. La surveille à distance. Ne communique pas directement avec lui.' },
    { id: 13, nom: 'Nyreth', type: 'mentor', note: 'Transmission sans contact — a appris sa technique par analyse de ses œuvres.' },
    { id: 248, nom: 'Eiravel', type: 'allié', note: 'Source indirecte — ses rapports ont amélioré les méthodes de Sylkavel sans que ni l\'une ni l\'autre le sache.' },
    { id: 61, nom: 'Sarath', type: 'fantôme', note: 'L\'a mandatée il y a 4 ans. Mort depuis. Elle continue pour honorer la commande.' },
  ],

  combat: {
    sorts: [
      'Croissance documentaire (Plante) — accélération du vieillissement naturel du papier et de l\'encre pour rendre des documents artificiellement anciens',
      'Enchantement fée (Fée) — renforcement de la "mémoire" d\'un document — résistance accrue à la vérification magique',
      'Trace végétale (Plante) — marquage biologique invisible sur les documents — signature personnelle détectable seulement par elle',
    ],
  },

  image_prompts: [
    {
      id: 'sylkavel_bureau',
      description: 'Sylkavel à son bureau, plusieurs documents étalés, une loupe dans la main droite et un instrument d\'écriture dans la gauche. Elle compare deux versions d\'un même document. Son expression est celle de quelqu\'un qui cherche une erreur qu\'elle espère ne pas trouver. Elle trouvera.',
      style: 'réaliste humain-végétal, lumière de lampe de travail, bureau de falsificatrice, tons verts et brun-papier',
    },
  ],

  lore_long: `Sylkavel a créé une identité parfaite il y a 4 ans.

Elle ne l'est plus.

Pas parce qu'elle avait mal travaillé — parce que les standards changent. L'Empire met à jour ses formats de signature tous les 3 ans. Elle le savait. Elle avait prévu un système de surveillance. Ce qu'elle n'avait pas prévu, c'est que le Second Avatar utiliserait l'identité aussi activement — des ports, des marchés, des auberges. Chaque utilisation est une exposition. Chaque exposition est une vérification potentielle. Chaque vérification est un test de quelque chose qu'elle n'a pas pu contrôler.

La nuit de la vérification au port, elle avait passé 2 heures à chercher un signalement. Pas de signalement. Elle avait dormi 4 heures. Elle n'est plus capable de dormir 8 heures depuis 18 mois.

Nyreth fait ça aussi, quelque part — elle reconnaît son style dans les documents qui circulent dans le réseau. Elle ne l'a jamais rencontré. Sa méthode est plus économe que la sienne — moins de corroboration, plus de profondeur dans les documents eux-mêmes. Elle a adopté son approche sur les créations récentes.

Elle travaille seule. Sarath était le seul contact qui savait exactement ce qu'elle faisait et pourquoi. Il est mort depuis un an. Elle continue parce que la commande n'a pas été annulée, parce que l'identité existe et qu'une identité abandonnée devient une identité vulnérable, et parce qu'elle a passé 3 semaines à construire quelque chose qu'elle refuse de laisser mourir par négligence.

La prochaine faille : elle l'a identifiée ce matin. Un registre militaire de l'Isthme utilisé dans les corroborations a été réindexé — les numéros de référence ont changé. Elle a 2 jours pour corriger avant que le registre soit accessible au public et qu'un vérificateur attentif remarque le décalage.

2 jours. Elle a commencé ce matin.`,
};

export default sylkavel;
