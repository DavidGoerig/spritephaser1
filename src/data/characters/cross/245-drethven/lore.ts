// ============================================================
//  DRETHVEN — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 245 | Sol/Combat | Hommes-Liens | Convergence | Vanguard
//  Arc : L'Avatar — Protocole d'Identification (18e pur élémentaire)
//  Événements : Premier Drain [T enfant] — Saturation des Élus [T]
//  PIVOT CRITIQUE : pur élémentaire Sol sans le savoir
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 245,
  nom: 'Drethven',
  element: 'Sol',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-dix-huit, la stature standard des Hommes-Liens des zones arides — calibrée par des générations de travail physique dans la chaleur. Drethven est dense sans être massif. Son élément Combat lui a donné avec le temps un alignement du centre de gravité qui le rend immédiatement perçu comme stable — pas menaçant, stable — par ceux qui le croisent pour la première fois. Des mains larges, des doigts calleux, la posture de quelqu'un qui a passé des années à creuser, mesurer et stabiliser des zones de sol.`,
    peau: `Brun-ocre chaud, la teinte des Hommes-Liens du désert central. Sans cicatrices visibles sur le visage. Les avant-bras portent les marques résiduelles d'anciens travaux de stabilisation Sol — des lignes brunâtres là où l'élément a traversé la peau pendant de longues sessions. Il ne les voit plus depuis longtemps. Les autres membres du terrain les remarquent en revanche : ces traces-là ne viennent qu'avec une très longue pratique, ou une très haute puissance.`,
    yeux: `Brun-doré, d'une clarté inhabituelle pour quelqu'un qui passe autant de temps à travailler dans la poussière. Ce que les gens remarquent sans le formuler : ses yeux sont très calmes, d'un calme non acquis mais structurel. Il ne regarde pas les personnes comme il chercherait quelque chose. Il les regarde comme il regarde le sol — en enregistrant ce qui est, sans décider d'avance ce que ça signifie.`,
    vetements: `Tenue de terrain Convergence, blanc et sable, avec les marques de contribution au col — douze triangles en argile cuite, huit ans de service actif. Il porte son équipement de cartographie Sol en sac de travail, pas en bandoulière : vieux réflexe du terrain qui préfère garder les mains libres. Un bâton de mesure géologique piqué dans le dos du sac, tellement usé que la graduation ne se lit plus qu'à la tactile.`,
    signes_particuliers: `Aucune marque distinctive qu'il connaisse. Ce que Razhal a noté dans un rapport de champ il y a sept ans, d'une seule étoile dans la marge : dans les zones où Drethven travaille, le sol atteint l'état cible en 60 à 70% du temps prévu. Razhal avait attribué ça à l'expérience et oublié. Le rapport est dans les archives de la Convergence. Drethven ne l'a jamais lu.`,
  },

  psychologie: {
    dominante: `Drethven est ce que la Convergence appelle un "contributeur de base" — quelqu'un dont la valeur n'est pas dans les idées ou les discours, mais dans le fait que le travail se fait quand il est là. Il ne cherche pas à être indispensable. Il cherche à ce que les zones de déficit Sol redeviennent fertiles avant que les gens qui en dépendent meurent. C'est un objectif concret. Il y travaille depuis huit ans avec une constance qui n'est ni du stoïcisme ni de la résignation — juste de la conviction pratique.`,
    contradictions: `Il croit sincèrement dans la redistribution. Il a aussi, depuis deux ans, une sensation persistante qu'il appelle "la marge d'erreur" — un écart entre ce que la Convergence dit faire et ce qu'il voit sur le terrain. Les familles relocalisées vers des zones "stabilisées" qu'il sait être instables. Les rapports validés qui contiennent des données qu'il ne reconnaît pas de ses propres missions. Il ne sait pas si c'est une erreur administrative, un problème de communication, ou quelque chose d'autre. Il continue à travailler parce que les zones en déficit ont besoin de lui maintenant, et l'enquête peut attendre.`,
    peur: `Que la marge d'erreur soit intentionnelle. Pas la peur d'un danger personnel — il a fait du terrain dans des zones hostiles depuis huit ans, il ne s'inquiète pas pour lui. La peur que ce à quoi il a consacré sa vie serve à quelque chose qu'il n'a pas approuvé et n'approuverait pas.`,
    desir: `Du sol qui pousse quelque chose. C'est aussi simple que ça. Il a grandi dans des sables où les femmes de son village ramassaient les racines une à une parce qu'une récolte normale était de la chance. Il ne s'est jamais compliqué ses motivations au-delà de ce souvenir.`,
    rapport_au_pouvoir: `Tranquille. Il respecte les hiérarchies qui produisent des résultats sur le terrain. Il a refusé deux fois des instructions qui lui semblaient contre-productives et il avait raison les deux fois — ce qui lui a valu une réputation de "terrain qui juge bien" plutôt que de difficile. Il n'utilise pas ses éléments Sol/Combat pour imposer des positions. Le sol, dans son expérience, ne cède pas aux ordres — il cède aux méthodes correctes.`,
  },

  histoire: {
    origine: {
      titre: 'Le Bord de la Zone Morte',
      texte: `Drethven a grandi à la frontière d'une zone de déficit Sol — pas à l'intérieur, pas loin non plus, dans la zone tampon où les résultats des mauvaises saisons sont visibles mais pas encore létaux. Son village gérait une ligne de puits artisanaux qui alimentaient deux cents familles. La ligne avait besoin d'entretien constant : les strates de sol sous les puits se compactaient, les capillarités se fermaient, les eaux remontaient de moins en moins bien.

      Son père lui avait appris à lire le sol avant de lui apprendre à lire les mots — toucher la terre et distinguer entre la terre morte, la terre dormante et la terre qui peut revenir. Cette distinction n'était pas poétique. C'était la différence entre creuser un nouveau puits ou approfondir l'existant.

      Il avait treize ans quand une sécheresse avait asséché deux des cinq puits principaux. Les familles du côté est avaient commencé à partir. La Convergence avait envoyé une équipe Sol trois mois après le début de la crise. Drethven les avait observés travailler depuis la lisière — quatre jours, deux Élus, deux puits restaurés. La troisième sécheresse de ce type n'avait pas attendu.

      Il avait retenu deux choses de cet épisode. La première : que ça marchait. La deuxième : que trois mois de délai, pour des puits, c'était trop long.`,
    },
    eveil: {
      titre: 'La Signature Dans le Sol',
      texte: `Son élément Sol s'était manifesté à quinze ans dans les circonstances banales et concrètes que vivent la plupart des Élus ruraux — pas une explosion de puissance, pas une situation de crise. Il aidait son oncle à préparer un champ de sorgho après la mauvaise saison. Il avait posé les mains dans le sillon en cours d'ouverture pour mesurer l'humidité résiduelle, comme il l'avait fait des centaines de fois.

      Cette fois, le sol avait répondu.

      Pas dramatiquement. Juste : le sol sous ses mains avait semblé se détendre, comme si une tension accumulée se relâchait. La couche de compaction en surface avait perdu deux centimètres de résistance. Son oncle avait regardé l'outil glisser différemment dans le sillon et demandé ce qu'il avait fait.

      Il ne le savait pas encore. Mais il avait senti quelque chose qu'il pouvait décrire : sous ses mains, le sol avait des couches, des textures, des états — et il pouvait lire ces états comme son père lui avait appris à lire la terre par le toucher, mais depuis l'intérieur.

      Son élément Combat était apparu à vingt-deux ans, lors d'une confrontation avec des agents impériaux dans une zone de transit — il avait protégé un groupe de familles qui se déplaçaient sans documents. Combat, dans son cas, ne s'était pas manifesté comme agression. C'était une capacité à occuper un espace de manière à rendre une confrontation non productive pour l'agresseur. Il était parti sans blesser personne. Les agents non plus.

      La Convergence l'avait recruté à vingt-trois ans. Il avait dit oui immédiatement.`,
    },
    rupture: {
      titre: 'Le Document avec Son Code',
      texte: `Il y a trois semaines, dans le camp de terrain à l'est d'Ash'Rael, un classeur avait glissé d'une des cantines pendant le chargement du matin. Il avait ramassé les feuilles éparpillées sans les lire — réflexe de terrain, ranger d'abord, lire après. Mais une feuille avait atterri face visible dans ses mains, et avant qu'il la retourne pour la replacer dans l'ordre, il avait vu son code de contributeur.

      Son code, dans un document qu'il n'avait pas vu, daté d'il y a quatre mois, avec en en-tête "Protocole d'Identification — État des profils."

      Il avait la feuille dans sa main depuis peut-être quatre secondes. Il l'avait rangée dans le classeur, avait rendu le classeur à l'agent logistique qui courait pour le récupérer, et avait continué sa matinée.

      Il n'avait pas lu ce qui était écrit à côté de son code. La feuille était passée trop vite et il l'avait rangée avant que son cerveau traite le contexte. Ce qu'il avait vu : son code. Sous un en-tête qui contenait les mots "profils" et "identification."

      Depuis trois semaines, il n'a pas posé de question. Il a soumis une correction administrative — il pensait que son code avait peut-être été mal attribué à un dossier, erreur courante dans les grosses opérations de terrain. Pas de réponse.

      Il attend la réponse. Il continue à travailler.`,
    },
    maintenant: {
      titre: 'Ce Que Razhal Remarque',
      texte: `Razhal est dans le même camp depuis dix jours. Ils mangent ensemble certains soirs — Drethven apprécie sa rigueur, sa façon de ne pas faire de discours autour des résultats de terrain. Razhal pose des questions précises sur les méthodes. Comment il calibre les sessions. Comment il sait quand une zone est stable et non simplement "améliorée." Combien de temps tient une zone stabilisée après son départ.

      Ce sont de bonnes questions de terrain. Drethven y répond avec précision.

      Ce soir, Razhal a demandé quelque chose de légèrement différent : si Drethven avait déjà travaillé dans les zones Nord-Est, et si oui, depuis combien de temps les stabilisations tiendraient — selon lui. Drethven a répondu. Il a dit qu'une zone stabilisée par lui tenait en général deux à trois fois plus longtemps que les moyennes de référence de la Convergence.

      Il a dit ça naturellement, parce que c'est ce que ses résultats montrent depuis huit ans.

      Razhal n'a rien répondu pendant deux secondes. Puis il avait demandé comment Drethven expliquait ça.

      Drethven avait haussé les épaules. Expérience. Méthode. Il ne savait pas vraiment.

      Ce n'est pas l'explication correcte. Mais il ne dispose pas d'une meilleure.`,
    },
    objectif: {
      titre: 'Finir la Carte',
      texte: `Il lui reste quatre zones à cartographier dans ce secteur. Selon le calendrier de la mission, il finit dans douze jours. Ensuite, il retournera à Ash'Rael pour le rapport d'étape.

      Il va suivre la correction administrative à son retour. Il va reposer la question si la réponse n'est toujours pas venue. Si son code a été mal attribué, il veut le savoir.

      Il ne pense pas à ce que ça signifierait s'il avait correctement lu l'en-tête du document. Il n'a pas lu ce qui était écrit à côté de son code. La feuille est passée trop vite.

      Ce n'est pas du déni. C'est de la méthode : il ne tire pas de conclusion depuis une donnée incomplète. Ce qu'il sait : son code était sur un document qu'il n'avait pas vu. Ce qu'il ne sait pas : pourquoi, dans quel contexte, et si c'est une erreur.

      Il finira la carte. Il fera le rapport. Il posera la question.

      Razhal a dormi dans la tente voisine ce soir pour la huitième fois depuis dix jours. Drethven n'a pas remarqué le pattern.`,
    },
    evenements_narratifs: ['Premier_Drain', 'Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Vanguard Convergence, terrain déserts. A consacré 8 ans à la redistribution Sol. Est le 18e profil pur élémentaire — Sol à pleine puissance — sans le savoir. Razhal l'a identifié mais n'a pas encore reçu l'ordre de le déclarer. A intercepté un document avec son code il y a 3 semaines ; n'a pas tiré la conclusion.`,
  },

  relations: [
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'contact_nécessaire',
      depuis_ici: `Un chef d'opération qu'il respecte. Sa rigueur de terrain correspond à ce que Drethven attend d'un supérieur : des questions précises, pas de discours. Ils mangent ensemble certains soirs depuis dix jours. Drethven pense que Razhal évalue sa méthode pour un futur contrat d'équipe. C'est une évaluation habituelle. Il n'y voit rien d'autre.`,
      depuis_la: `Razhal le regarde travailler depuis dix jours. Le Sol de Drethven n'est pas puissant de la façon dont les Élus entraînés sont puissants — c'est quelque chose de plus fondamental, de plus direct. Les zones qu'il touche ne se stabilisent pas par effort : elles semblent reconnaître quelque chose. Razhal a le 18e profil en suspens depuis six semaines. Il ne sait toujours pas ce que ça deviendra.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 67,
      nom: 'Arev',
      type: 'allié',
      depuis_ici: `Une coordinatrice qu'il a croisée deux fois sur des missions de terrain différentes. Ce qu'il retient d'elle : elle sait exactement ce qui se passe dans sa zone. Ses registres sont fiables. Un jour sur le terrain, il avait travaillé à côté d'elle sur une zone de stabilisation — elle lui avait passé des données de cartographie qui l'avaient aidé à cibler sa session. Il lui avait dit merci. Ils avaient continué chacun leur travail.`,
      depuis_la: `Arev l'a rencontré une fois lors d'une mission commune. Dans la zone de stabilisation, debout à côté de lui pendant qu'il travaillait, elle avait ressenti quelque chose d'anormalement stable — comme si l'air autour de lui n'était pas sujet aux variations que le Sol ordinaire produit. Elle avait attribué ça au terrain. Ce souvenir est revenu récemment, depuis que le Protocole d'Identification a commencé à prendre sa forme.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 65,
      nom: 'Saeved',
      type: 'fantôme',
      depuis_ici: `Le saint de la Convergence — le premier Drain volontaire, mort il y a quarante et un ans. Drethven connaît l'histoire. Tout le monde la connaît dans les zones de Drain. Ce qu'il pense de Saeved : respect pour le choix, interrogation sur les conditions. Drethven a vu des volontaires. Il sait ce que "volontaire" veut dire dans la pratique, et il sait aussi que le contexte de Saeved — la zone de sol stérile, les familles qui mouraient, la Convergence encore jeune et peu structurée — n'était pas un contexte de plein choix.

      Il ne dit pas ça à voix haute. C'est une réflexion privée qu'il n'a jamais partagée, parce qu'il ne sait pas si c'est vrai ou si c'est lui qui se fait des idées depuis sa propre expérience de terrain.`,
      statut: 'mort',
    },
  ],

  combat: {
    philosophie: `Le Sol stabilise. Le Combat protège. Dans l'esprit de Drethven, les deux éléments servent la même fonction : maintenir ce qui tient. Son combat n'est pas offensif — c'est une infrastructure. Il crée des zones où ses alliés peuvent opérer, bloque les lignes d'approche des agresseurs, stabilise des terrains instables pour changer les conditions d'un engagement. Il ne cherche pas à blesser. Il cherche à rendre la confrontation improductive pour l'agresseur jusqu'à ce que celui-ci y renonce.

    Ce n'est pas de la passivité. C'est une philosophie de terrain : la meilleure résolution d'un conflit est celle où le conflit n'a pas eu lieu.`,
    sorts: [
      {
        nom: 'Ancrage de Strate',
        type: 'sort_de_base',
        elements: ['Sol'],
        description_gameplay: `Stabilise le terrain sous Drethven et ses alliés proches pendant 8 secondes. Éléments enracinés dans la zone gagnent une résistance aux déplacements forcés.`,
        description_lore: `Le premier sort que Drethven a appris à contrôler, développé instinctivement pendant ses années de cartographie. Ses mains touchent le sol, il lit les couches, et il y injecte une stabilité qui persiste quelques secondes après qu'il a retiré les mains. Dans les zones de déficit Sol actif, cet ancrage peut durer beaucoup plus longtemps — jusqu'à plusieurs heures. Drethven ne sait pas encore pourquoi.`,
      },
      {
        nom: 'Lecture de Zone',
        type: 'passif',
        elements: ['Sol', 'Combat'],
        description_gameplay: `Drethven perçoit l'état des surfaces autour de lui (instabilité, tension, axes de mouvement) dans un rayon de 8 mètres. Cela se traduit par une perception améliorée des positions ennemies et des lignes d'approche.`,
        description_lore: `La combinaison naturelle de ses deux éléments — Sol lit le terrain, Combat lit les corps dans ce terrain. Le résultat est une cartographie instantanée de qui est où, comment ils se déplacent et où ils peuvent aller. Dans les zones de Sol fort, la lecture s'étend et se précise. Drethven n'y pense plus consciemment depuis des années — c'est simplement comment il perçoit l'espace.`,
      },
      {
        nom: 'Prise de Sol',
        type: 'sort_situationnel',
        elements: ['Sol'],
        description_gameplay: `Immobilise une cible au sol en saisissant ses pieds via des strictions de terre pendant 2-3 secondes. Consomme de l'énergie Sol de la zone — moins efficace sur terrain dur ou artificiel.`,
        description_lore: `Une technique de contrôle non-léthal qu'il a développée pour ses missions de protection des familles en transit. Immobiliser sans blesser, temporairement, pour créer une fenêtre de sortie. Il l'a utilisée une fois contre trois agents impériaux. Aucun n'a été blessé. Il était parti avant qu'ils se libèrent.`,
      },
      {
        nom: 'Muraille Basse',
        type: 'sort_signature',
        elements: ['Sol', 'Combat'],
        description_gameplay: `Soulève une barrière de terre compactée de 60-80 cm de hauteur sur 5 mètres. Bloque les trajectoires basses et redirige les déplacements adverses. Dure 15 secondes, effondrement progressif ensuite.`,
        description_lore: `Pas une muraille défensive spectaculaire — une ligne de sol compacté à hauteur de jambe, précisément calibrée pour gêner, pas pour bloquer totalement. Drethven préfère les obstacles qui dévient plutôt que ceux qui arrêtent : un adversaire dévié prend une autre route, un adversaire arrêté devient confrontationnel. La Muraille Basse est conçue pour changer les options d'un engagement sans forcer sa conclusion.`,
      },
      {
        nom: 'Stabilisation d\'Urgence',
        type: 'ultimate',
        elements: ['Sol'],
        description_gameplay: `Drethven canale une quantité massive d'énergie Sol dans une zone de 15 mètres de rayon. Tout terrain instable se solidifie instantanément. Alliés dans la zone récupèrent leur stabilité. Ennemis sur terrain précédemment instable (boue, débris, ruines) sont bloqués. Canule pendant 3 secondes, effets pendant 20 secondes.`,
        description_lore: `Drethven a utilisé cette technique trois fois en huit ans, chaque fois en situation de crise de terrain — une galerie qui s'effondrait, un tremblement dans une zone de mission, une zone de déficit Sol en rupture aiguë. Il n'y pense pas comme à un sort. Il y pense comme à la fois où il a mis tout ce qu'il avait dans le sol pour que ça tienne. Le sol a toujours tenu. Après, il s'est assis et n'a plus bougé pendant une heure. Le coût de cette technique est que Drethven lui-même est immobile pendant toute sa durée — les deux mains au sol, concentré.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Drethven — terrain désert',
      description: `Portrait 3/4 d'un homme de 44 ans, Homme-Lien des déserts, peau brun-ocre profonde, yeux brun-doré calmes. Tenue de terrain blanche et sable de la Convergence, usée. Bâton de mesure géologique dans le sac derrière lui. Mains larges, calleux, marquées de lignes brunes résiduelles aux avant-bras. Expression de quelqu'un qui écoute plutôt qu'il ne parle. Fond : dunes ocre en fin d'après-midi, lumière dorée basse. Style : réaliste narratif, détails texturés sur les mains et le sol.`,
    },
    {
      type: 'lore_scene',
      titre: 'Le Document dans les mains',
      description: `Drethven accroupi dans la poussière d'un camp de terrain, tenant une feuille de papier administrative dans ses mains larges. La feuille est en gros plan — on voit un en-tête partiellement lisible "Protocole d'Identification" et un code numérique. Son expression n'est pas alarmée — juste le léger plissement d'yeux de quelqu'un qui vient de lire quelque chose d'inattendu. Derrière lui, des cantines de terrain et d'autres agents Convergence qui s'affairent sans le regarder. Lumière de matin désert, ombre courte. Style : réaliste, tension dans les détails du document.`,
    },
    {
      type: 'action_signature',
      titre: 'Muraille Basse',
      description: `Drethven agenouillé, les deux mains posées à plat sur une surface de sol sec. Une ligne de terre compactée s'élève en avant de lui à hauteur de genou — pas spectaculaire, précise, géométrique. Les gens derrière lui continuent leurs activités. Lumière de fin de journée, ombres longues sur le sol. Style : sobre, focalisation sur le sol et la forme de la barrière.`,
    },
  ],

  lore_long: `La première chose que Drethven avait apprise sur le Sol, c'est que la terre ne ment pas.

Les personnes mentent. Les rapports mentent. Les chiffres des zones de contribution peuvent être arrondis ou interpolés selon l'auteur. Mais la terre sous les mains — la texture réelle de la strate, la résistance, la capillarité — ça, ça dit ce qui est. Pas ce qu'on voudrait que ce soit. Pas ce que le rapport d'avant avait dit.

Il avait appris ça de son père à neuf ans, debout dans un sillon ouvert, les mains dans la terre noire d'un bon jour. Son père lui avait dit : touche. Il avait touché. Son père avait dit : maintenant dis-moi ce que tu sens. Il avait dit : humide, mais pas autant qu'on croirait depuis la pluie d'avant-hier. Son père avait hoché la tête. Les pluies passent mais la terre garde ses propres horaires, avait-il dit. Apprends les siens.

C'est la leçon la plus importante que Drethven ait reçue de sa vie entière, et elle n'avait rien à voir avec les éléments. Elle était antérieure aux éléments.

---

Son enfance avait été celle du bord de la zone morte — pas assez loin pour l'oublier, pas assez dedans pour en mourir. Le village de ses parents gérait une ligne de puits artisanaux qui alimentaient deux cents familles. Les puits étaient sa responsabilité depuis qu'il avait douze ans : non pas une décision parentale, mais une nécessité pratique. Drethven avait les petites mains qui passaient dans les conduits de nettoyage. Puis il avait eu les grandes mains qui comprenaient la géologie des strates. Il avait été le garçon des puits pendant six ans.

La première grande sécheresse — celle de ses treize ans — lui avait pris deux puits en huit semaines. Il avait regardé les familles du côté Est partir une à une avec leurs affaires dans des toiles. Il avait regardé sa mère reconfigurer leurs propres rations trois fois en trois mois. Il avait regardé son père écrire une demande d'aide à la Convergence et attendre une réponse pendant trois mois, puis en écrire une deuxième, puis attendre encore.

L'équipe Convergence était arrivée au bout de sept mois.

Deux Élus Sol. Quatre jours. Deux puits restaurés.

Drethven les avait regardés travailler depuis la lisière du chantier comme on regarde quelqu'un faire une chose qu'on n'a pas les moyens de faire — avec une attention totale, une économie d'expression, et la conscience très claire que ce qu'on voit est une possibilité, pas une promesse.

Deux ans plus tard, une deuxième sécheresse.

Cette fois, l'équipe Convergence était arrivée en quatre mois.

La troisième sécheresse, il avait dix-neuf ans et son élément Sol venait de se manifester. Il avait envoyé la demande lui-même, avec ses données géologiques jointes. L'équipe était arrivée en six semaines.

Il avait rejoint la Convergence à vingt-trois ans, après son élément Combat, après l'incident des agents impériaux, après avoir compris que la question n'était pas si la redistribution était possible mais pourquoi elle arrivait toujours trop tard.

---

Il était bon dans ce travail. Il ne se l'était pas dit consciemment pendant longtemps — il faisait le travail, il regardait les résultats, il ajustait sa méthode. Mais au bout de quatre ans, il avait des données suffisantes pour comparer : ses zones tenaient deux à trois fois plus longtemps que les moyennes de référence de la Convergence. Ses sessions de stabilisation demandaient 60 à 70% du temps prévu.

Il avait attribué ça à sa formation de terrain avant la Convergence. Les puits lui avaient appris la géologie de l'intérieur. Les autres Élus Sol venaient à la technique en passant par l'élément — ils apprenaient à contrôler leur énergie et à l'appliquer à des sols. Lui avait appris les sols d'abord. L'élément venait en second, comme un outil pour faire ce qu'il savait déjà lire.

C'était une explication raisonnable.

Razhal, qui travaillait sur le terrain depuis vingt-cinq ans et avait vu des centaines d'Élus Sol en opération, avait noté une étoile dans la marge d'un rapport de champ sept ans plus tôt et n'y avait pas repensé jusqu'à ce que le Protocole d'Identification lui donne le profil du 18e pur élémentaire à trouver.

---

Les trois semaines depuis le document n'avaient pas changé son travail. Les zones à cartographier existaient encore, les familles qui en dépendaient attendaient encore, et l'erreur administrative — quelle qu'elle soit — n'avait aucune incidence sur le fait que le secteur Est avait besoin d'une stabilisation avant la saison chaude.

Il avait soumis la correction. Il attendait la réponse.

Ce qui l'occupait davantage, en vérité, c'était Razhal. Pas d'une façon inquiète — Drethven n'était pas du genre à s'inquiéter de ce qu'il ne comprenait pas encore. Mais Razhal posait des questions depuis dix jours que les supérieurs hiérarchiques ordinaires ne posaient pas. Des questions de méthode, pas de résultats. Comment il calibrait. Comment il lisait le sol à travers la couche de compaction. Combien de temps ses zones tenaient selon les types de terrain.

Ce soir, pendant le repas, Razhal lui avait demandé comment il expliquait ses performances au-dessus des moyennes.

Drethven avait répondu honnêtement : expérience, méthode, formation de terrain précoce. Il ne savait pas vraiment.

Razhal n'avait rien dit pendant deux secondes.

Deux secondes de silence, pour Razhal, c'était rare. C'était un homme habitué à traiter les données en temps réel.

Drethven avait continué à manger. Les deux secondes ne l'avaient pas frappé sur le moment. Il y pensait maintenant, dans la tente, dans le noir.

---

Demain matin : la zone 7 du secteur, à huit kilomètres au nord-est. Strates argilo-sableuses, profondeur estimée de la capillarité utile à trois mètres soixante-dix. Session prévue : six heures selon les moyennes de référence. Il finira probablement en quatre.

Razhal dormait dans la tente voisine. Il y dormait depuis huit soirs.

Drethven avait noté le pattern maintenant qu'il y pensait. Il ne savait pas quoi en faire. Peut-être rien. Peut-être que le camp était simplement organisé comme ça et qu'il ne l'avait pas remarqué avant.

Il s'endormirait avec la méthode de demain dans la tête — la séquence de lecture des strates, l'ordre dans lequel il injecterait l'énergie Sol, le point d'ancrage qu'il chercherait en premier.

C'est ce qu'il faisait avant chaque mission. Ça l'avait toujours aidé.

Dans ce travail, la préparation comptait. La surprise était ce qu'on évitait.`,
};

export default lore;
