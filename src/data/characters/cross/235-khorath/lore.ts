// ============================================================
//  KHORATH — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 235 | Combat/Sol | Peuple des Sables | Convergence | Vanguard
//  Arc : L'Avatar — Exécuteur des opérations d'extraction
//  Rôle : Complice lucide — sait depuis longtemps, continue quand même
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 235,
  nom: 'Khorath',
  element: 'Combat',
  element2: 'Sol',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt-un, lourd — le genre de corps qui a absorbé des chocs pendant trente ans et s'en souvient. À cinquante et un ans Khorath a des épaules larges de combattant, des avant-bras couverts de cicatrices propres (des cicatrices de travail, pas de combat désordonné), une démarche qui occupe l'espace sans en avoir besoin. Il n'est pas intimidant de façon agressive. Il est simplement là, solidement, et ça prend de la place.`,
    peau: `Brun foncé, cuir durci par le soleil et les années. Trois cicatrices visibles sur le côté gauche du cou — éclats de roche lors d'une opération il y a quinze ans. Il ne les cache pas et n'y fait pas référence. Ce sont des marques de travail. Il en a beaucoup.`,
    yeux: `Brun-noir, profonds, peu expressifs à première vue. Il regarde les situations plus que les personnes — son regard se pose sur les sorties, les couverts, les angles, avant de revenir sur l'interlocuteur. Pas de la méfiance à proprement parler. Une habitude de vingt ans de terrain.`,
    vetements: `Équipement de terrain robuste, sans sophistication : tissu épais, protections aux articulations, chaussures de marche renforcées. Rien qui brille, rien qui accroche la lumière. Il porte une ceinture d'outils Sol — des instruments de forage, de sondage géologique — qui ne servent pas qu'à ça.`,
    signes_particuliers: `Il est presque silencieux au repos. Pas de mouvement superflu, pas de commentaire gratuit, pas d'occupation visible. En mission, il parle dans la mesure du nécessaire et pas davantage. Les gens qui le côtoient depuis longtemps ont appris à lire ses silences, qui sont nombreux et signifiants. Il y a un silence de concentration. Un silence d'évaluation. Un silence de quelqu'un qui a décidé de ne pas répondre. Ces trois-là se ressemblent à l'extérieur et sont entièrement différents.`,
  },

  psychologie: {
    dominante: `Khorath sait ce que la Convergence fait aux purs élémentaires. Il l'a compris il y a sept ans, progressivement, sans révélation brutale — une accumulation de détails techniques lors des opérations, des ordres dont il avait fini par comprendre la finalité, un rapport qui avait traîné sur une table et qu'il n'aurait pas dû lire.

    Il n'est pas parti. Il n'a pas alerté. Il a continué. Pas parce qu'il approuve — il n'approuve pas. Parce que partir à cinquante et un ans, avec ce qu'il sait, dans une situation où ce savoir le rend dangereux pour l'organisation qu'il quitte, lui semble une opération dont le calcul de survie est défavorable. Et parce que reconstruire quelque chose depuis zéro à cet âge, avec ce qu'il porte, lui paraît une tâche dont il n'a plus l'énergie.`,
    mecanisme_de_defense: `La compartimentalisation fonctionnelle : il exécute ce qu'on lui demande d'exécuter avec la précision d'un technicien. Ce n'est pas du détachement émotionnel au sens clinique — c'est une décision active de ne pas laisser l'évaluation morale interférer avec l'exécution technique. Pendant l'opération, il ne pense pas à ce que l'opération signifie. Après, il ne pense pas à ce qu'il vient de faire. Il mange. Il dort. Il recommence.

    Ce mécanisme a tenu sept ans. Ces derniers mois, il tient moins bien.`,
    contradiction_interne: `Il protège Vashmael. C'est une décision qu'il a prise sans l'analyser et qu'il n'a jamais remise en question — Vashmael ne sait pas, et Khorath fait en sorte que Vashmael ne sache pas. Pas par compassion au sens sentimental. Parce que Vashmael est sincère, et que sa sincérité fait quelque chose de différent au travail de terrain — les gens lui font confiance d'une façon différente, les familles restent moins défensives. Et peut-être — Khorath ne se le dit pas clairement — parce que regarder Vashmael recruter en bonne foi est la seule chose qui ressemble encore à quelque chose de propre dans son environnement direct.`,
    rapport_aux_autres: `Rare. Il a des relations fonctionnelles avec les équipes de terrain — il donne des ordres clairs, il les exécute lui-même en premier, il ne demande pas ce qu'il ne ferait pas. Ça crée une forme de respect professionnel. Pas de la camaraderie. Les gens qui travaillent avec lui depuis des années ne connaissent pas grand-chose de lui en dehors du travail.

    Drevorn — il ne l'a vu qu'une fois, lors d'une opération conjointe il y a deux ans. Ils n'ont pas parlé de ce qu'ils savaient. Ils n'avaient pas besoin. Quelque chose dans la façon dont Drevorn s'était comporté lors de cette opération avait communiqué ce que les mots n'avaient pas dit. Khorath avait compris que Drevorn savait. Il pense que Drevorn avait compris la même chose de son côté. Ils ne se sont pas reparlé depuis.`,
    vision_du_monde: `Il ne croit plus dans rien d'abstrait depuis plusieurs années. Il croit dans le terrain, dans la faisabilité technique des opérations, dans la capacité à planifier et exécuter sans erreur. Au-delà de ça — rien. Il avait cru dans la redistribution un moment, dans les premières années. Ce n'est plus une question pertinente.`,
  },

  histoire: {
    enfance: {
      titre: 'Le désert et le corps comme outil',
      contenu: `Khorath a grandi dans une famille des Déserts sans particularité visible — pas d'Élus enregistrés parmi ses proches, pas de traditions particulières, une économie de subsistance dans une zone difficile. Il avait développé son élément Combat à quinze ans sans surprise ni révélation — son corps avait simplement commencé à répondre d'une certaine façon, à s'optimiser, à trouver les angles et les positions avant que sa tête les calcule.

      L'élément Sol était venu plus tard, vers dix-neuf ans — une affinité secondaire qui lui donnait une lecture du terrain physique plus précise que la vision. Ensemble, Combat et Sol faisaient de lui quelqu'un qui comprenait l'espace dans ses deux dimensions : la structure physique et ce qui se passe dedans.

      Il n'avait pas cherché la Convergence. La Convergence était une option qui s'était présentée à vingt-deux ans — un recruteur avait entendu parler de lui via des contacts de terrain, avait proposé un travail de sécurité sur des opérations dans les Déserts. Il avait accepté parce que ça payait régulièrement et que la régularité était quelque chose qu'il n'avait pas eu.`,
    },
    arrivee: {
      titre: 'Vingt-neuf ans de missions',
      contenu: `Les premières années avaient été propres — au sens de ce qu'il avait vu et ce qu'il avait fait. Sécurité de convois, protection des équipes de terrain de la Convergence, gestion des incidents de zone dans les régions difficiles. Rien qui l'avait fait hésiter.

      Le travail avait évolué progressivement. Les opérations étaient devenues plus complexes, les équipes plus petites, les directives plus vagues sur les finalités. Il avait posé des questions dans les premières années — des questions techniques, sur les protocoles, sur ce qu'on attendait de lui. Les réponses étaient suffisantes pour travailler. Il avait arrêté de poser des questions au moment où les réponses avaient commencé à demander trop d'interprétation favorable.

      Il avait compris, à quarante-quatre ans, ce que "extraction" signifiait dans le contexte spécifique des opérations de Razhal. Il avait pris une semaine à y réfléchir. Puis il avait continué.`,
    },
    premier_conflit: {
      titre: 'La semaine à quarante-quatre ans',
      contenu: `Cette semaine était la seule période de sa carrière où il avait vraiment pesé ses options. Il avait tout listé mentalement — ce qu'il savait, ce qu'on pouvait faire avec ce qu'il savait, les conséquences probables de chaque scénario.

      Partir : il savait des choses qui rendaient son départ risqué. La Convergence ne laissait pas partir facilement quelqu'un avec son niveau d'information. Il avait vu deux personnes essayer. Il n'avait pas besoin d'en voir davantage.

      Alerter : alerter qui ? L'Empire utilisait les mêmes méthodes sous d'autres noms. Les Dissidentes n'avaient pas les moyens d'agir sur ce qu'il savait sans risques pour lui. Et il n'avait pas de réseau de confiance — il n'avait jamais cherché à en construire un.

      Continuer : c'était l'option par défaut. Pas parce qu'il était convaincu que c'était juste. Parce que c'était l'option qui ne demandait pas de reconstruire quelque chose à quarante-quatre ans, avec ce qu'il savait, dans un environnement qui devenait hostile dès qu'on sortait de la bonne ligne.

      Il avait continué. Il continuait depuis sept ans.`,
    },
    revelation: {
      titre: 'Drevorn et la reconnaissance mutuelle',
      contenu: `Il y a deux ans, une opération conjointe avec un autre agent de la Convergence — Drevorn, coordinateur de terrain dans une zone adjacente. Ils avaient travaillé ensemble pendant quatre jours.

      Khorath avait lu Drevorn en moins d'une journée : quelqu'un qui savait, ou qui était en train de comprendre, et qui gérait cette connaissance avec une méthode différente de la sienne. Drevorn posait des questions sur des protocoles qui ne nécessitaient pas ces questions si on acceptait la version officielle. Il observait certaines choses d'une certaine façon.

      Khorath n'avait rien dit. Il ne dit jamais rien à ce sujet. Mais il avait modifié légèrement ce qu'il montrait pendant ces quatre jours — assez pour que Drevorn comprenne que Khorath comprenait, sans que rien ne soit dit qui puisse être rapporté.

      Il pense que Drevorn a fait la même chose de son côté. Ils ne se sont pas reparlé depuis. Il y a une valeur dans cette non-conversation — une forme de solidarité qui ne demande rien à personne.`,
    },
    etat_actuel: {
      titre: 'La surveillance de Zyress et ce qui commence à lâcher',
      contenu: `Il sait qu'il est sur une liste de surveillance. Il ne sait pas qui le surveille mais il reconnaît les signes — des rapports demandés sur des détails de procédure inhabituels, des collègues qui posent des questions sur ses méthodes de façon légèrement trop casuelle. Il y a quelqu'un qui évalue s'il pose des problèmes.

      Pendant sept ans, le mécanisme de compartimentalisation avait tenu. Ces derniers mois, il tient moins bien. Pas d'incident visible. Pas de décision irrationnelle. Mais quelque chose change dans les silences d'après-opération — ils durent plus longtemps, et il commence à penser pendant ces silences à des choses qu'il ne pensait pas avant.

      Drevorn lui a posé une question, il y a quelques mois, dans un message indirect et technique — sur les protocoles de consentement dans les opérations d'extraction. Ce n'était pas vraiment une question sur les protocoles. Khorath a répondu techniquement. Il a ensuite relu cette réponse et s'est demandé si techniquement était encore la seule façon de répondre.

      Il n'a pas encore décidé. Il fait son travail. Il protège Vashmael. Il observe ce qui se passe autour de lui avec la précision d'un homme qui a vingt-neuf ans de terrain. Et il attend de voir ce qui change.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Exécuteur des opérations d'extraction depuis sept ans. Sait ce que le Protocole fait réellement. A choisi de continuer par calcul de survie et épuisement. Représente la complicité lucide comme forme de lâcheté non-triviale.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Khorath est le miroir de Amhavel — deux complices lucides avec des profils inverses. Amhavel sait et attend en inaction apparente ; Khorath sait et agit activement. Tous deux sont paralysés par des mécanismes différents. La surveillance de Zyress crée une pression externe qui peut forcer une décision avant qu'il soit prêt à la prendre.`,

  relations: [
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'mentor',
      description: `Chef d'opération — le seul à qui il rend des comptes directement. Relation fonctionnelle et hiérarchique. Razhal sait que Khorath sait. Khorath sait que Razhal sait qu'il sait. Ils ont un accord implicite de ne pas nommer ça. C'est suffisant pour travailler ensemble.`,
    },
    {
      personnage_id: 234,
      nom: 'Vashmael',
      type: 'allié',
      description: `Il le protège de la vérité — consciemment, depuis plusieurs années. Un mélange de respect pour la sincérité de Vashmael et d'impossibilité de trouver une façon de lui dire qui ne détruise pas quelque chose d'irremplaçable. La protection est active : il filtre ce que Vashmael voit des opérations d'extraction.`,
    },
    {
      personnage_id: 233,
      nom: 'Drevorn',
      type: 'contact_nécessaire',
      description: `Une opération conjointe, deux ans. Reconnaissance mutuelle sans mots. Drevorn lui a posé une question indirecte sur le consentement. Khorath a répondu techniquement. Il n'est pas sûr que ça suffit encore.`,
    },
    {
      personnage_id: 240,
      nom: 'Zyress',
      type: 'ennemi',
      description: `Il ne sait pas qui le surveille. Il sait qu'il est surveillé. La surveillance vient de quelqu'un de compétent — les signes sont subtils, exactement au niveau de la subtilité de quelqu'un qui fait ce travail sérieusement. Zyress l'évalue pour savoir si les questions qu'il commence à poser vont devenir un problème.`,
    },
  ],

  combat: {
    role_combat: `Combattant de contact et de terrain. Combat lui donne l'optimisation physique instantanée ; Sol lui donne la maîtrise de l'environnement au sol. Il ne fait pas de spectacle. Il évalue, positionne, agit avec l'économie de quelqu'un qui a réalisé depuis longtemps que la victoire ne revient pas à celui qui frappe le plus fort mais à celui qui frappe juste.`,
    sorts: [
      {
        nom: 'Analyse de Position',
        element: 'Combat',
        type: 'passif',
        description: `Passif permanent. Il évalue instantanément les angles d'attaque et de défense de n'importe quelle position. En pratique : ses actions de déplacement et de repositionnement coûtent moins d'énergie et ont moins de risques d'attaque d'opportunité.`,
      },
      {
        nom: 'Frappe de Terrain',
        element: 'Combat',
        type: 'base',
        description: `Attaque directe qui exploite la géographie immédiate — il utilise le sol, les obstacles, les angles pour amplifier l'impact. Dégâts accrus dans les terrains complexes ou inégaux.`,
      },
      {
        nom: 'Ancrage Tactique',
        element: 'Sol',
        type: 'situationnel',
        description: `Il s'ancre dans le sol et devient extrêmement difficile à déplacer — résistance maximale aux poussées, aux sorts de déplacement, aux renversements. Peut maintenir cet ancrage tout en continuant à frapper. Utile pour tenir une position sous pression.`,
      },
      {
        nom: 'Économie de Force',
        element: 'Combat',
        type: 'signature',
        description: `Sa technique personnelle de vingt-neuf ans : il absorbe et redirige la force d'une attaque entrante. Quand il réussit une parade, l'énergie de l'attaque ennemi est convertie en bonus de dégâts sur sa prochaine frappe. Nécessite de laisser l'ennemi frapper en premier — une patience que la plupart n'ont pas.`,
      },
      {
        nom: 'Zone Contrôlée',
        element: 'Sol',
        type: 'ultime',
        description: `Il modifie le sol dans un rayon de plusieurs mètres — affaissements sélectifs, durcissements, canaux de force. Les ennemis dans la zone se déplacent comme dans un terrain qu'ils ne contrôlent pas. Lui, il connaît chaque centimètre. Il l'a conçu.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_terrain',
      description: `Homme de 51 ans, grand et lourd, peau brun foncé durcie par le soleil, trois cicatrices nettes sur le côté gauche du cou. Il se tient debout dans un terrain désertique ouvert, équipement de terrain robuste, regard posé sur le sol devant lui plutôt que sur l'objectif — quelqu'un qui évalue le terrain de façon automatique. Posture fermée, épaules légèrement rentrées. L'expression d'un homme qui pense à quelque chose qu'il ne dit pas.`,
    },
  ],

  lore_long: `Khorath avait compris à quarante-quatre ans. Pas d'un coup — c'était une accumulation, comme la plupart des compréhensions qui coûtent. Des détails techniques lors des opérations, des ordres dont il avait fini par déduire la finalité, un rapport mal rangé sur une table lors d'une mission à Keth-Sarven.

Il avait pris une semaine.

Cette semaine était la seule période de sa carrière où il avait vraiment listé ses options. Il l'avait fait avec la même méthode qu'il utilisait pour planifier une opération de terrain — sans affect, avec les données disponibles, en évaluant les probabilités.

Partir : les deux personnes qu'il avait vues partir avant lui avaient disparu. Pas de façon spectaculaire. Elles avaient cessé d'exister dans les réseaux où il les avait connues. Il n'avait pas besoin de davantage de données.

Alerter : il n'avait pas de réseau de confiance. Vingt-neuf ans à travailler seul, sans construire de liens en dehors du fonctionnel. C'était une décision qui avait semblé sage pendant longtemps. Elle l'avait laissé sans options au moment où les options comptaient.

Continuer : c'était l'option par défaut. Il avait quarante-quatre ans, une expertise technique qui n'avait de valeur que dans ce contexte, et rien à reconstruire vers. Continuer signifiait survivre. Pas vivre — survivre.

Il avait continué. Il avait fait son travail avec la précision technique d'un homme qui a décidé que la compétence était la seule chose qu'il pouvait encore contrôler.

*

Vashmael était arrivé dans sa zone opérationnelle cinq ans après cette semaine. Khorath l'avait observé pendant les trois premières semaines sans interagir directement — c'est sa méthode pour tout ce qui est nouveau.

Ce qu'il avait vu : quelqu'un de sincère. Genuinement. Vashmael croyait dans la redistribution d'une façon qui n'était pas performative, qui n't était pas construite pour convaincre des supérieurs — c'était constitutif, central, la raison pour laquelle il faisait ce travail.

Khorath avait pris la décision de le protéger sans analyser longtemps. Il filtrait les informations opérationnelles que Vashmael voyait. Il gérait les côtés des opérations d'extraction qui se passaient hors de sa présence. Si Vashmael voyait quelque chose de problématique, il y avait toujours une explication technique à portée.

Il ne s'était jamais demandé pourquoi il faisait ça. La seule réponse qu'il aurait eue, si on lui avait posé la question directement, c'est que Vashmael était la seule chose dans son environnement immédiat qui n'était pas compromise, et que cette chose méritait de rester ainsi.

*

Drevorn. Une opération, quatre jours, deux ans avant l'état actuel.

Khorath avait lu Drevorn le premier jour : quelqu'un en train de comprendre, qui gérait cette compréhension avec méthode. Les questions qu'il posait sur les protocoles avaient une qualité particulière — elles ne demandaient pas d'information, elles cherchaient à voir comment la réponse serait formulée.

Khorath avait ajusté ce qu'il montrait. Pas une communication explicite — une série de décisions sur ce qu'il laissait visible. Drevorn avait fait la même chose, probablement. Ils s'étaient séparés sans avoir échangé un seul mot sur ce qu'ils savaient tous les deux.

C'était suffisant. Dans certains contextes, suffisant est beaucoup.

*

Il y a quelqu'un qui le surveille maintenant. Il reconnaît les signes — vingt-neuf ans de terrain calibrent ce genre de perception. Des questions trop précises sur des détails trop mineurs. Une attention à ses méthodes qui ne vient pas d'une évaluation standard.

Pendant sept ans, le mécanisme avait tenu. Ces derniers mois, quelque chose change dans les silences d'après-opération. Il pense. Il pense à des choses qu'il ne pensait pas avant.

Il n'a pas encore décidé si c'est de la sagesse tardive ou de la décompensation. Il n'est pas sûr que la distinction soit importante. Ce qui est important : il y a quelqu'un qui surveille, et si ce quelqu'un trouve ce qu'il cherche, les options de Khorath deviennent encore plus limitées qu'elles ne le sont.

Il fait son travail. Il protège Vashmael. Et il attend de voir ce qui change.`,
};

export default lore;
