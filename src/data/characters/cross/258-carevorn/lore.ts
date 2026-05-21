import type { PersonnageLoreComplet } from '../../../lore-types';

const carevorn: PersonnageLoreComplet = {
  id: 258,
  nom: 'Carevorn',
  element: 'Feu',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand, solide, physique d\'officier qui n\'a pas décliné — il entretient son corps comme un outil professionnel.',
    peau: 'Mate, légèrement rougeâtre aux joues et aux avant-bras — marque de l\'élément Feu modéré. Cicatrice ancienne au-dessus du sourcil gauche.',
    yeux: 'Brun-or, avec des éclats Stellaires intermittents quand il analyse une situation — caractéristique qui lui vaut une réputation de "penseur rapide" parmi ses collègues.',
    vetements: 'Uniforme d\'officier de sécurité Virex, rouge sombre et noir. Il le porte avec la rigueur de quelqu\'un qui sait que l\'uniforme est un signal.',
    signes_particuliers: 'Il a commandé deux vérifications refusées en 6 mois. Il prépare la troisième. Ce n\'est pas de l\'entêtement — c\'est une méthode.',
  },

  psychologie: {
    dominante: 'Persistance méthodique. Il ne hausse pas le ton, ne se met pas en colère, ne cherche pas les confrontations directes. Il commande des vérifications, note les refus, commande d\'autres vérifications par d\'autres canaux.',
    mecanisme_de_defense: 'La procédure comme armure. Tant qu\'il opère dans les canaux officiels, il est protégé par la légitimité de sa démarche. Le jour où il sort des canaux officiels, il perd cette protection. Il n\'est pas encore sorti.',
    contradiction_interne: 'Il est officier de sécurité de Virex — son rôle est de protéger les opérations de Virex. Ce qu\'il cherche à documenter est peut-être une opération de Virex. Il ne s\'est pas encore posé la question de ce qu\'il fait si la réponse est oui.',
    rapport_aux_autres: 'A transmis ses observations à Avel (64) — collègue envoyé enquêter en parallèle sur un aspect différent. Ils ne coordonnent pas directement pour éviter la contamination croisée. Thyven (62) lui oppose une résistance passive qu\'il note sans la qualifier.',
    vision_du_monde: 'Les registres sont une forme de vérité. Quand les registres ne coïncident pas avec la réalité observable, il y a soit une erreur soit une falsification. Les deux méritent d\'être corrigées.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant des chiffres et du feu',
      contenu: 'Né dans une famille d\'artisans de Virex, région marquée par des installations industrielles à forte composante élémentaire. Son élément Feu était un avantage dans ce milieu. Son élément Stellaire — rare chez les Hommes-Liens — était perçu comme une excentricité légèrement déconcertante par ses proches.',
    },
    arrivee: {
      titre: 'Virex, la sécurité, les registres',
      contenu: 'Recruté à 26 ans comme officier de sécurité pour les installations de Virex — une ville de traitement élémentaire à fort enjeu industriel. Sa carrière était centrée sur la protection physique et documentaire des installations. Les registres d\'effectifs et de mouvement de personnel étaient sa compétence secondaire.',
    },
    premier_conflit: {
      titre: 'Les 39 enfants',
      contenu: 'Il y a 6 mois, en croisant plusieurs registres dans le cadre d\'une vérification de routine, il a identifié 39 noms d\'enfants Élus qui avaient été enregistrés dans le système de Virex puis disparaissaient un par un des registres courants. Pas supprimés — déplacés dans des catégories de plus en plus profondes, jusqu\'à devenir introuvables sans connaître le chemin exact. Il avait le chemin exact parce qu\'il avait trouvé le premier par accident et reconstitué les autres.',
    },
    revelation: {
      titre: 'La vérification classée',
      contenu: 'Il a commandé une vérification officielle. Classée en 4 jours — "données sensibles, accès restreint, transmission interdite". Il a noté le classement, attendu 3 semaines, commandé une deuxième vérification par un canal différent. Classée en 6 jours. Il a noté les deux refus et le délai entre eux. Il commence à penser que la vitesse du classement est proportionnelle à la proximité de la demande du vrai problème.',
    },
    etat_actuel: {
      titre: 'La troisième vérification',
      contenu: 'Il prépare la troisième. Canal différent encore une fois — cette fois via les archives militaires régionales, en recoupant les registres de mobilité des enfants Élus avec les journaux de transport logistique de la section. Avel travaille sur un aspect parallèle — Carevorn ne lui a pas dit exactement ce qu\'il cherche pour éviter que les deux demandes soient associées et classées ensemble. Lysael (63) est quelque part dans les chaînes logistiques qu\'il trace — il ne l\'a pas identifiée.',
    },
  },

  evenements_narratifs: [
    {
      id: 'carevorn_39_enfants',
      titre: 'Le décompte',
      description: 'Il y a exactement 39 noms. Il les a mémorisés — pas comme un geste symbolique, comme une précaution pratique si ses notes étaient saisies. Les enfants avaient entre 4 et 14 ans au moment de leur enregistrement dans le système de Virex. Leurs éléments sont variés. Ce qu\'ils ont en commun : leur dossier initial les identifie comme "haute cohérence élémentaire" — le terme que Vethara utilise pour ses profils de purs.',
      personnages_impliques: [252],
      declencheur: 'Croisement de registres lors d\'une vérification de routine',
      consequence: 'Documentation d\'un pattern qui n\'existait pas dans un seul registre mais devenait visible en croisant plusieurs',
    },
    {
      id: 'carevorn_avel_parallele',
      titre: 'L\'enquête en parallèle',
      description: 'Avel (64) a été envoyé sur le même terrain par un autre supérieur, sans que Carevorn en soit informé initialement. Quand ils se sont croisés, ils ont reconnu leurs questionnements convergents. Ils ont décidé de ne pas se coordonner explicitement — deux enquêtes séparées sont moins vulnérables à un classement unique. Mais ils savent que l\'autre cherche.',
      personnages_impliques: [64],
      declencheur: 'Observations convergentes sur des aspects différents du même problème',
      consequence: 'Enquêtes parallèles non coordonnées — résilience accrue contre le classement, mais information fragmentée',
    },
    {
      id: 'carevorn_thyven_resistance',
      titre: 'La résistance passive de Thyven',
      description: 'Thyven (62) n\'oppose pas de refus direct aux demandes de Carevorn — il les ralentit. Les réponses arrivent après le délai standard, les documents demandés manquent un élément qui oblige à une deuxième demande, les confirmations de transmission prennent 2 fois plus de temps que nécessaire. Carevorn a noté le pattern. Il n\'a pas encore décidé si c\'est de la protection active du système ou de l\'inconfort personnel.',
      personnages_impliques: [62],
      declencheur: 'Demandes de documentation répétées auprès de Thyven',
      consequence: 'Friction administrative comme indicateur — quelqu\'un ne veut pas que les documents arrivent',
    },
  ],

  arcs: ['arc_citadelle_empire', 'arc_convergence_drain'],
  position_dans_arc: 'Tenace officiel. Il fait exactement ce qu\'il est supposé faire — vérifier, documenter, commander des audits. Le système résiste parce que ce qu\'il cherche est exactement ce que le système protège.',

  relations: [
    { id: 64, nom: 'Avel', type: 'allié', note: 'Enquête parallèle non coordonnée. Cherchent la même chose par des chemins différents.' },
    { id: 62, nom: 'Thyven', type: 'rival', note: 'Résistance passive aux demandes documentaires. Carevorn ne sait pas si c\'est une protection active ou de l\'inconfort.' },
    { id: 63, nom: 'Lysael', type: 'inconnue_qui_change_tout', note: 'Convergence qu\'il cherche sans l\'avoir identifiée — quelque part dans les chaînes logistiques qu\'il trace.' },
  ],

  combat: {
    sorts: [
      'Analyse Stellaire (Stellaire) — lecture rapide des patterns dans des ensembles de données complexes, intuition accélérée',
      'Frappe de feu contrôlée (Feu) — attaque ciblée à dégâts précis, calibrée pour ne pas détruire l\'environnement',
      'Marquage thermique (Feu) — traçage de heat-signatures sur des surfaces ou des personnes — persistant 48h',
    ],
  },

  image_prompts: [
    {
      id: 'carevorn_registres',
      description: 'Carevorn à son bureau, 3 registres ouverts simultanément, ses yeux brun-or avec des éclats Stellaires qui parcourent les colonnes de noms. L\'expression est celle de quelqu\'un en train de trouver quelque chose qu\'il cherchait sans savoir ce que c\'était. 39 noms. Il en est au 37e.',
      style: 'réaliste humain, lumière froide de bureau, documents officiels et uniformes, tons rouge sombre et noir',
    },
  ],

  lore_long: `Carevorn a 39 noms mémorisés. Ce n'est pas symbolique — c'est une précaution.

Si ses notes sont saisies, il a encore les noms. Si les noms sont les seules preuves disponibles, ils existent dans un endroit que personne ne peut classer.

La première vérification a été classée en 4 jours. Il a trouvé ça rapide — pas alarmant en soi, mais rapide. Un classement en 4 jours sur une demande de vérification administrative signifie que la demande a atteint quelqu'un qui savait immédiatement ce qu'il regardait et a réagi immédiatement. Ce n'est pas le comportement d'un système confronté à une demande anodine.

La deuxième vérification a été classée en 6 jours. 2 jours de plus — peut-être parce qu'elle était passée par un canal différent et avait mis plus de temps à remonter à la même personne, ou à une personne différente qui a consulté avant de classifier. Il a noté la différence.

Il prépare la troisième par un canal qu'il espère suffisamment indirect pour ne pas être immédiatement associé aux deux premières. Si elle est classée plus rapidement que la deuxième, le système est plus alerte qu'il ne le pensait. Si elle est classée dans le même délai, le canal n'est pas suffisamment indirect. Il ajustera.

Avel travaille en parallèle. Carevorn ne lui dit pas exactement ce qu'il cherche. Deux enquêtes qui ne se connaissent pas précisément sont plus difficiles à classer en une seule opération.

Thyven ralentit les transmissions. Carevorn a noté le pattern sur 8 semaines. Ce n'est pas encore une preuve — c'est un indicateur qui s'accumule.

Les 39 enfants avaient entre 4 et 14 ans. Haute cohérence élémentaire dans leurs dossiers initiaux. Puis disparus des registres courants, un par un, sur 3 ans.

Il cherche où ils sont allés.`,
};

export default carevorn;
