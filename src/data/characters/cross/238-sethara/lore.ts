// ============================================================
//  SETHARA — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 238 | Feu/Psy | Hommes-Liens | Convergence | Capteur-Analyste
//  Arc : L'Avatar — Identifie les "purs" par lecture des tensions élémentaires
//  Rôle : Antagoniste lucide et froide — fascination intellectuelle > éthique
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 238,
  nom: 'Sethara',
  element: 'Feu',
  element2: 'Psy',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-six, de constitution moyenne, avec une posture qui suggère moins l'athlétisme que la précision — elle est allongée dans ses mouvements, économe, sans geste superflu. À trente-huit ans elle a l'apparence d'une personne qui consacre son énergie à ce qui la intéresse et pas au reste.`,
    peau: `Brun clair, soignée sans effort apparent. Des lunettes de lecture qu'elle porte en permanence — non par mauvaise vue, mais parce que les lentilles sont légèrement teintées, ce qui atténue la luminosité Feu de ses yeux dans les interactions sociales. Elle a appris que l'intensité de son regard met les gens mal à l'aise dans les premières rencontres.`,
    yeux: `Rouge-orangé — la signature optique des Élus Feu à haut niveau de maîtrise Psy, une combinaison qui produit une teinte particulièrement intense. Derrière ses lunettes, ils ont l'air simplement sombres. Sans les lunettes, ils ont l'air de brûler.`,
    vetements: `Tenue de travail analytique — propre, efficace, sans intérêt particulier pour l'esthétique. Elle choisit ses vêtements selon les critères de confort et de non-distraction. La seule exception : elle porte systématiquement un carnet en cuir rouge sombre dans sa poche extérieure. Ce n'est pas un carnet ordinaire — c'est son journal d'observations analytiques, qu'elle tient depuis quinze ans.`,
    signes_particuliers: `Elle prend des notes pendant les conversations. Pas sur les conversations — sur les profils élémentaires des personnes avec qui elle parle. Elle ne peut pas éteindre sa lecture des tensions élémentaires, alors elle l'utilise. Les gens qu'elle connaît depuis longtemps ont cessé de lui demander ce qu'elle écrit. Elle le dirait si on lui demandait, mais la réponse est rarement ce que les gens espèrent.`,
  },

  psychologie: {
    dominante: `Sethara est fascinée par la puissance élémentaire pure. Pas par la puissance en général — par la pureté. Les Élus qui portent un seul élément à saturation maximale, sans contamination d'un second élément, sans les compromis d'une double affinité — ça lui semble quelque chose d'extraordinaire, une configuration qui devrait être quasi-impossible et qui existe pourtant.

    Elle en étudie depuis huit ans. Elle en a identifié sept dans ses opérations pour la Convergence. Elle sait ce que la Convergence fait ensuite. Elle a choisi de rester parce que le travail est intellectuellement fascinant. Elle se dit que sa contribution est à la recherche, pas à ce qui suit.`,
    mecanisme_de_defense: `La séparation entre l'analyse et l'application. Elle est analyste. Elle produit des données. Ce que Razhal fait des données n'est pas son département. Cette séparation est similaire à celle de Sykavel et Taluya — mais avec une différence : Sethara sait exactement ce que Razhal fait des données. Elle a demandé, une fois, par curiosité intellectuelle. On lui a expliqué avec un niveau de détail qu'elle n'aurait peut-être pas demandé si elle avait anticipé ce que ça impliquerait de savoir.

    Elle a ensuite intégré cette information dans son cadre analytique et a continué à travailler.`,
    contradiction_interne: `Sa fascination pour la pureté élémentaire contient une envie qu'elle ne nomme pas directement. Elle porte deux éléments — Feu et Psy — ce qui est fonctionnellement puissant mais "impur" selon ses propres critères d'analyse. Elle mesure de l'extérieur quelque chose qu'elle ne peut pas être de l'intérieur.

    Elle ne fait pas le lien entre cette envie et ses choix. Ou elle le fait, et ça lui semble une donnée intéressante plutôt qu'un problème.`,
    rapport_aux_autres: `Fonctionnel dans les deux sens — elle traite les gens comme des sujets d'observation ou comme des sources d'information. Pas de malveillance dans ça. Pas d'intérêt particulier non plus. Vrash (226) est la personne dont elle s'est le plus approchée d'un rapport professionnel respectueux — ils lisent les tensions élémentaires d'une façon similaire, mais Vrash a choisi un usage différent. Elle trouve ça intéressant.

    Shiveth lui a failli la recruter à l'époque où Shiveth travaillait encore pour la Convergence. Elle pense parfois à la façon dont Shiveth posait les questions — comme quelqu'un qui cherchait quelque chose de différent d'elle. Shiveth est partie. Sethara a continué.`,
    vision_du_monde: `Elle pense que certains phénomènes méritent d'être compris, indépendamment des implications. La pureté élémentaire maximale est un de ces phénomènes. Ce qu'on en fait ensuite est une décision politique dont elle n'est pas responsable. Elle est responsable de la compréhension. C'est sa position. Elle ne la défend pas activement — elle ne pense pas en avoir besoin.`,
  },

  histoire: {
    enfance: {
      titre: 'La lecture comme don inné',
      contenu: `Sethara n'a pas cherché son don analytique — il était là. À douze ans, avant même de comprendre que son élément Feu s'accompagnait d'une composante Psy qui lui donnait une sensibilité aux flux cognitifs et élémentaires, elle pouvait décrire avec précision ce qu'une personne ressentait en termes de pression interne. Pas d'empathie ordinaire — une lecture de signature, comme une cartographie thermique de l'état intérieur.

      Elle avait passé son adolescence à affiner ça. Pas pour des raisons thérapeutiques — parce que c'était intéressant. Les gens étaient des systèmes complexes, et les systèmes complexes avaient des logiques. La logique des tensions élémentaires était particulièrement propre — plus honnête que le langage, moins sujette à l'interprétation.

      Elle avait quinze ans quand elle avait identifié pour la première fois une signature qu'elle ne savait pas encore nommer : quelqu'un portant un seul élément à une intensité inhabituelle, sans déflexion vers un second élément. Elle avait passé une heure à cartographier cette signature dans son carnet rouge. C'était la première entrée.`,
    },
    arrivee: {
      titre: 'La Convergence et le matériel de recherche',
      contenu: `Elle avait été recrutée à vingt-six ans — directement par Razhal, qui cherchait quelqu'un capable de lire les tensions élémentaires avec la précision dont il avait besoin. Il lui avait présenté les choses clairement : elle identifierait des profils spécifiques selon des critères qu'il lui fournirait. La compensation était bonne. Le matériel d'observation serait d'une qualité qu'elle ne trouverait nulle part ailleurs.

      Elle avait posé une question sur les critères. Il avait expliqué — "saturation élémentaire maximale, signature unique, absence de dual-affinité visible." Des critères qu'elle comprenait mieux que n'importe qui d'autre.

      Elle avait posé une question sur ce qu'on faisait avec ses analyses ensuite. Il avait répondu avec un niveau de détail qu'elle n'aurait peut-être pas demandé si elle avait su à l'avance. Elle avait intégré l'information. Elle avait accepté le poste.`,
    },
    premier_conflit: {
      titre: 'Sept profils en huit ans',
      contenu: `En huit ans elle en avait identifié sept. Sept profils de saturation maximale, des individus dont la signature élémentaire avait une pureté qu'elle n'observait nulle part ailleurs dans ses lectures ordinaires. Elle avait documenté chacun avec le même soin — cartographie de la signature, paramètres de saturation, estimation de la stabilité du champ.

      Elle avait aussi observé ce qui s'était passé après ses rapports, dans les cas où elle avait eu un accès indirect à l'information. Les sujets avaient été préparés, extraits, et avaient cessé d'apparaître dans les données.

      Ce qu'elle ressentait face à ça : une légère perte. Sept signatures exceptionnelles qui n'existaient plus comme configurations complètes. Elle comprenait la nécessité opérationnelle. Elle comprenait aussi que quelque chose d'irremplaçable avait été défait. Ces deux choses coexistaient sans se résoudre.

      Elle n'a pas cessé de produire ses analyses pour autant.`,
    },
    revelation: {
      titre: 'Vrash et la même capacité différemment utilisée',
      contenu: `Elle avait rencontré Vrash (226) dans un contexte de conférence interne il y a deux ans. Une Givrins Glace/Eau, capacités de lecture des tensions élémentaires développées dans une direction similaire aux siennes. Elles avaient parlé de méthode pendant deux heures — la façon dont chacune cartographiait les signatures, les paramètres qu'elles privilégiaient.

      Ce qui l'avait frappée : Vrash utilisait la même capacité pour identifier des Élus en danger, pour les protéger, pour cartographier des zones de risque. L'exacte même compétence dans une direction exactement opposée.

      Elle avait demandé à Vrash comment elle avait choisi ce travail plutôt que l'autre. Vrash avait dit quelque chose sur la façon dont on choisit les problèmes qu'on veut résoudre.

      Sethara n'avait pas répondu. Elle avait noté la conversation dans son carnet rouge sous "données sur les choix d'application".`,
    },
    etat_actuel: {
      titre: 'Le huitième profil et ce qu\'elle ressent',
      contenu: `Elle est en train d'analyser des données qui pourraient être le huitième profil. Les paramètres sont remarquables — une signature Sol d'une pureté qu'elle n'a pas vue dans les sept précédents. Si ses estimations sont correctes, c'est le profil le plus complet qu'elle ait jamais documenté.

      Elle a envoyé une note préliminaire à Razhal avec les paramètres de base. Elle attend sa réponse avant de finaliser le rapport complet.

      Ce qu'elle ressent : l'anticipation intellectuelle d'une observation exceptionnelle. Et, en dessous, quelque chose qu'elle n'a pas encore nommé précisément — une qualité différente des sept fois précédentes, pas de l'hésitation exactement, mais quelque chose qui ressemble à une attention à l'espace qui va bientôt exister là où le profil est maintenant.

      Elle continue de travailler. Le rapport sera complet dans deux jours.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Analyste qui identifie les purs élémentaires par lecture des tensions. A fourni sept rapports en huit ans. En train de finaliser le huitième — le profil Sol de Drethven. Son péché est la luxure intellectuelle : la fascination du problème efface l'éthique.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Sethara est la technicienne de précision du Protocole — celle qui rend l'identification des cibles possible avec la qualité requise. Elle est l'inverse de Sykavel : là où Sykavel commence à voir, Sethara a vu et a choisi de classer l'information dans une catégorie qui ne demande pas de réponse. Son rapport sur Drethven est le déclencheur potentiel de la phase finale du Protocole.`,

  relations: [
    {
      personnage_id: 226,
      nom: 'Vrash',
      type: 'rival',
      description: `Même compétence de lecture des tensions élémentaires, utilisée dans une direction opposée. Vrash protège. Sethara identifie pour le Protocole. La rencontre a été intellectuellement stimulante. Elle n'a pas modifié ses choix.`,
    },
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'mentor',
      description: `Celui qui a défini ses critères de travail et qui reçoit ses analyses. Relation fonctionnelle et respectueuse dans les deux sens — Razhal apprécie sa précision, elle apprécie sa clarté opérationnelle. Ils ne discutent pas de l'éthique parce qu'il n'y a rien à discuter pour l'un comme pour l'autre.`,
    },
    {
      personnage_id: 232,
      nom: 'Shiveth',
      type: 'fantôme',
      description: `L'avait presque recrutée. Avait des questions différentes des siennes. Est partie. Sethara a noté son départ comme une donnée — quelqu'un qui a fait un autre choix d'application. Elle ne juge pas. Elle observe.`,
    },
  ],

  combat: {
    role_combat: `Analyste et perturbatrice Psy. Elle lit les signatures élémentaires adverses en temps réel pour anticiper les sorts et les mouvements, et utilise le Psy pour désorienter et le Feu pour des attaques précises. Elle n'est pas une combattante de première ligne mais elle est difficile à surprendre.`,
    sorts: [
      {
        nom: 'Cartographie Temps Réel',
        element: 'Psy',
        type: 'passif',
        description: `Passif permanent. Elle lit les signatures élémentaires de tous les combattants dans son rayon. Ses alliés bénéficient d'un bonus contre les sorts surprise — elle anticipe les signatures de chargement.`,
      },
      {
        nom: 'Point Chaud',
        element: 'Feu',
        type: 'base',
        description: `Attaque ciblée sur un point de vulnérabilité qu'elle a identifié dans la signature élémentaire adverse — elle trouve l'interface entre l'élément du sujet et son état physiologique et y concentre de la chaleur. Précision chirurgicale, dégâts localisés.`,
      },
      {
        nom: 'Interférence Cognitive',
        element: 'Psy',
        type: 'situationnel',
        description: `Elle génère une interférence dans le flux Psy d'un ennemi — confusion temporaire, sorts ratés, décisions incorrectes pendant deux tours. Elle le fait avec la même neutralité qu'elle analyse les signatures.`,
      },
      {
        nom: 'Lecture de Saturation',
        element: 'Feu',
        type: 'signature',
        description: `Elle identifie le niveau de saturation élémentaire actuel d'un ennemi et exploite sa vulnérabilité à ce stade — un adversaire à pleine charge est différemment vulnérable qu'un adversaire épuisé. Ses attaques Feu ont des effets adaptés à l'état élémentaire de la cible.`,
      },
      {
        nom: 'Décharge d\'Archive',
        element: 'Psy',
        type: 'ultime',
        description: `Elle libère toutes ses observations analytiques accumulées en une vague d'information Psy — chaque ennemi dans le rayon reçoit une surcharge sensorielle de ses propres données de signature, comme un miroir trop précis de lui-même. Désorientation profonde pendant trois tours.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_analytique',
      description: `Femme de 38 ans, peau brun clair, lunettes légèrement teintées qui cachent des yeux rouge-orangé. Elle est dans un espace de travail analytique — documents, carnet rouge sombre ouvert dans sa main. Elle regarde hors-cadre avec l'expression de quelqu'un qui est en train d'analyser quelque chose d'invisible. L'expression est concentrée, froide dans le sens de précise, sans affect visible. Son stylo est posé contre sa joue.`,
    },
  ],

  lore_long: `La première entrée dans son carnet rouge date de ses quinze ans. Une signature qu'elle ne savait pas encore nommer — un seul élément, une saturation inhabituelle, une pureté de configuration qui était différente de tout ce qu'elle avait lu jusqu'ici.

Elle avait passé une heure à la cartographier. Elle n'était pas sûre alors que ça avait de l'importance. Elle était sûre que c'était intéressant.

En vingt-trois ans de carnets rouges, elle en avait identifié quinze de ce type — avant la Convergence et pendant. Les sept qu'elle avait identifiés pour la Convergence en huit ans étaient les mieux documentés. Elle avait eu accès à des instruments de mesure qu'elle n'aurait pas pu se procurer seule, à des sujets dans des conditions de proximité prolongée, à un temps d'observation qui n'était pas limité par d'autres obligations.

Le travail était bon. Elle en était satisfaite.

*

Vrash l'avait regardée d'une façon particulière pendant leur conversation — pas avec jugement, ce qui aurait été plus simple à traiter. Avec quelque chose qui ressemblait à de la reconnaissance et à de la tristesse simultanément. La reconnaissance de quelqu'un qui voit exactement ce qu'elle voyait parce qu'il le voyait lui-même depuis les mêmes fondements. La tristesse de quelqu'un qui comprenait comment elle était arrivée là.

Sethara avait noté : "reconnaissance + tristesse, Vrash, lecture similaire, application différente."

Elle n'avait pas noté ce qu'elle avait ressenti face à la tristesse de Vrash. Elle avait ressenti quelque chose — pas de la culpabilité, mais quelque chose dans le registre de la conscience d'une limite dans son propre système analytique. La tristesse de Vrash était une donnée qu'elle ne savait pas où classer.

Elle ne l'avait pas encore classée.

*

Le huitième profil. Sol, pureté qu'elle n'avait pas vue dans les sept précédents.

Elle avait les paramètres de base depuis cinq jours. Elle les avait vérifiés deux fois, ce qu'elle ne faisait pas d'habitude — elle avait confiance dans sa lecture initiale. Cette fois elle avait vérifié deux fois parce que les paramètres étaient trop propres. Elle voulait s'assurer que ce n'était pas une erreur de calibration.

Ce n'était pas une erreur.

Elle avait envoyé la note préliminaire à Razhal. Dans deux jours elle enverrait le rapport complet.

Ce qu'elle ressentait — elle notait ses propres réactions analytiquement depuis vingt-trois ans — était différent des sept fois précédentes. Pas de l'hésitation. Quelque chose dans le registre de ce que la physique appelle une conscience avant la mesure : la certitude qu'en mesurant, on affecte ce qu'on mesure. Elle ne pensait pas que son rapport allait changer quoi que ce soit à la situation de ce sujet Sol. Le rapport allait simplement rendre visible ce qui existait déjà.

Ce n'était pas de l'hésitation.

Elle finaliserait dans deux jours.`,
};

export default lore;
