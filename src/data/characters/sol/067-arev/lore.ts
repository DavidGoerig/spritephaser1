// ============================================================
//  AREV — Lore complet (étalon de qualité C3)
//  id: 67 | Sol | Peuples des Sables | Convergence | Spécialiste
//  Arc : L'Avatar (Convergence) + connexion Arc 5 (La Fosse)
//  Événements : Premier Drain (héritage), Saturation des Élus (témoin)
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 67,
  nom: 'Arev',
  element: 'Sol',
  espece: 'Peuples des Sables',
  region: "Ash'Rael",
  faction: 'Convergence',

  // ── APPARENCE ─────────────────────────────────────────────
  apparence: {
    taille_corpulence: `Mince et nerveuse — un mètre soixante-cinq de résistance apprise. Les Peuples des Sables ne sont pas construits pour la force brute mais pour l'endurance : petites surfaces exposées, peu de masse à maintenir en vie sous la chaleur, capacités thermorégulatrices exceptionnelles. Arev a les mains d'une femme qui marche depuis vingt ans entre les camps et les zones de Drain — calleuses aux paumes, mais les doigts précis de quelqu'un qui passe la moitié de sa vie à écrire dans des registres.`,

    peau: `Brun-ocre profond, presque terracotta dans la lumière du soir, avec une qualité légèrement mate qui absorbe la chaleur le jour et la restitue la nuit — caractéristique des familles du plateau Makhet qui n'ont jamais migré vers les cités côtières. Ses avant-bras ont une teinte légèrement plus sombre que le reste : elle a passé l'essentiel de son enfance dehors, bras nus, à aider dans les cultures. Sur son poignet gauche, une cicatrice linéaire d'un centimètre et demi — la première Cession qu'elle s'est accordée à elle-même, à vingt-six ans, lors d'une zone de crise particulièrement sévère. Elle n'en parle pas. C'est dans ses registres.`,

    yeux: `Brun-doré profond, presque ambre dans certaines lumières. Les cils sont très fournis — adaptation des Peuples des Sables à la poussière en suspension permanente dans l'air du désert. Son regard a la qualité spécifique de ceux qui ont appris à voir loin dans un paysage sans relief : un horizon intérieur, une habitude d'évaluer ce qui est là et ce qui manque simultanément. Les gens qui la regardent dans les yeux ont parfois l'impression qu'elle comptabilise quelque chose pendant la conversation.`,

    cheveux: `Noir corbeau, épais, tressés serré et maintenus sous un voile de tissu blanc cassé qui couvre la nuque et les épaules. Le blanc n'est pas une coquetterie — c'est de la thermodynamique. Le voile est noué de façon à dégager le visage entièrement sans jamais laisser de peau exposée inutilement. Quelques mèches grises aux tempes — pas de vieillesse à trente-huit ans, mais d'une longue habitude de Sol canalisé en zone de chaleur intense, qui décolore comme une forge mais différemment : en filaments pâles plutôt qu'en teinte uniforme.`,

    vetements: `Blanc et beige — les couleurs d'Ash'Rael, qui réfléchissent la chaleur. Tissu léger triple couche, imperméable à la poussière, respirant à l'humidité. Sur la veste, des ornements géométriques en argile cuite cousus aux coutures : triangles entrelacés qui sont les marques de contribution de la Convergence, un triangle par zone stabilisée par des Élus du réseau dont elle coordonne les missions. Elle en a dix-sept. Les coordinatrices plus anciennes qu'elle en ont parfois trente ou quarante. Elle ne se compare pas — chaque triangle est une zone qui n'est plus en déficit.`,

    signes_particuliers: `Un registre de terrain — carnet épais en cuir brun, format paume, fermé par une lanière en tissu. Elle l'a toujours sur elle. Il contient les données de toutes les sessions de Drain qu'elle a coordonnées depuis onze ans : dates, lieux, éléments, durées, rendements, état déclaré des Élus avant et après. La colonne "observations comportementales" est celle qu'elle remplit le plus soigneusement et qu'elle consulte le moins devant les autres.`,
  },

  // ── PSYCHOLOGIE ───────────────────────────────────────────
  psychologie: {
    dominante: `Pour Arev, le monde est un système de flux. L'énergie élémentaire existe en quantité définie. Elle se concentre dans certains corps (les Élus) et manque dans certains territoires (les zones en déficit). Le Drain est la correction de cette inégalité. Ce n'est pas de l'idéologie — c'est de l'arithmétique. Elle a grandi dans un déficit. Elle a vu ce que ça produit. L'arithmétique est la réponse.`,

    contradictions: `Elle tient des registres scrupuleux de chaque session "pour garantir le volontariat" — c'est ce qu'elle dit à ses supérieurs, et c'est vrai. Ce qu'elle ne dit pas : ses registres ne peuvent pas capturer la pression sociale sur un Élu de vingt-quatre ans dont la famille est prise en charge par la Convergence dans une zone de crise et qui sait que son refus aura des conséquences indirectes sur des gens qu'il aime. La colonne "volontaire : oui/non" n'a pas de case pour ça.`,

    peur: `Que l'arithmétique soit juste et que les volontaires ne suffisent pas. Elle a fait les calculs — pas officiellement, dans un registre qu'elle garde à part, chez elle, pas à la Convergence. Si toutes les zones en déficit identifiées devaient recevoir le nombre de sessions recommandé par les protocoles médicaux, les Élus volontaires actuels du réseau devraient donner environ deux fois plus que ce que les protocoles médicaux considèrent comme sûr. Elle n'a pas soumis ce calcul. Elle continue à faire ses calculs.`,

    desir: `Un monde où aucun enfant ne meurt parce que son plateau n'a pas d'Élu Sol. Elle l'a vu arriver. Elle a vu le sol devenir gris, les cultures devenir maigres, les gens devenir fatigués d'une façon que la fatigue ordinaire n'explique pas. Elle a vu sa sœur mourir d'une maladie que deux heures d'un Élu Sol auraient neutralisée. Elle veut que ça ne se reproduise jamais. Et si ça implique des choix qu'elle ne peut pas entièrement justifier dans une colonne de registre, alors elle les fera quand même et elle les notera quand même et elle continuera à chercher un meilleur système jusqu'à ce qu'elle en trouve un.`,

    rapport_au_pouvoir: `Son Sol n'est pas puissant dans le sens qui impressionne. Elle ne déplace pas des masses de roche, elle ne crée pas de séismes. Ce qu'elle fait : stabiliser. Elle sent les tensions dans le sol — là où l'énergie minérale manque, là où une fondation va céder, là où un terrain va s'effondrer sous la pression. C'est le même don que pour ses registres : voir les déséquilibres avant qu'ils deviennent des catastrophes. Son rôle à la Convergence n'est pas militaire. C'est logistique. Elle coordonne. Elle identifie les zones critiques, planifie les rotations, organise les transports. Et parfois, quand une zone en crise n'a pas d'Élu Sol disponible, elle y va elle-même.`,
  },

  // ── HISTOIRE ──────────────────────────────────────────────
  histoire: {
    origine: {
      titre: `Le plateau Makhet`,
      texte: `Arev est née sur le plateau Makhet — une étendue de sable et de roche calcaire à deux jours de marche au sud des premières villes d'Ash'Rael, là où la Convergence avait depuis longtemps cessé d'envoyer des représentants réguliers parce que le plateau ne produisait plus suffisamment pour justifier le coût logistique. Personne n'avait posé la question dans l'autre sens.

Sa famille cultivait du sorgho et des légumineuses résistantes dans un sol qui devenait chaque année un peu plus gris, un peu moins profond, un peu moins capable de tenir ses promesses. Son père avait des théories sur pourquoi — les saisons, les vents, la qualité des semences. Sa mère savait la vraie raison mais n'en parlait pas devant les enfants : le plateau n'avait pas eu d'Élu Sol depuis soixante-trois ans, et les sols sans Élu Sol meurent d'une façon que personne ne voit venir parce que ça prend des décennies.

Sa sœur Shael était l'aînée de quatre ans. Intelligente, rapide, elle organisait les semailles, réparait les outils, tenait les comptes des échanges avec les caravanes. À dix-sept ans, elle a commencé à tousser d'une façon qui ne guérissait pas. Les soigneurs du plateau ont dit que c'était une infection pulmonaire liée aux particules de sol en suspension dans l'air — des spores minérales d'un type particulier, qui s'accumulent dans les poumons des personnes exposées longtemps à des sols dégradés. Un Élu Sol aurait pu restructurer le sol du plateau en deux sessions. La dégradation minérale n'aurait pas produit ces spores.

Shael est morte neuf mois après les premières toux. Arev avait quatorze ans.

Ce qu'elle a compris ce jour-là et qu'elle n'a jamais formulé autrement depuis : il y a des morts qui ont une adresse. L'adresse de la mort de Shael, c'était le registre de redistribution des Élus Sol, dans la colonne où le plateau Makhet n'apparaissait pas depuis soixante-trois ans.`,
    },

    eveil: {
      titre: `Les six semaines`,
      texte: `La Convergence est arrivée au plateau Makhet quand Arev avait dix-neuf ans — cinq ans après Shael, deux ans après que son père avait finalement compris pourquoi le sol mourait. Deux Élus Sol, un homme et une femme, accompagnés d'une coordinatrice régionale et de trois assistants de terrain. Ils avaient du matériel de mesure, des registres de terrain, et une autorisation de la Convergence pour une intervention de stabilisation de six semaines.

Arev les a suivis partout pendant ces six semaines. Pas officiellement — personne ne le lui avait demandé. Elle le faisait parce qu'elle avait besoin de comprendre. Elle avait besoin de voir comment deux personnes pouvaient faire ce qu'un plateau entier avait été incapable de se fournir par lui-même.

Ce qu'elle avait vu : un travail lent, systématique, épuisant. Les deux Élus n'étaient pas spectaculaires. Ils s'agenouillaient dans la terre, les mains dans le sol, et ils faisaient quelque chose qu'on ne pouvait pas voir de l'extérieur — une restructuration lente des couches minérales, une réactivation des processus chimiques qui font qu'une terre est vivante. Le sol changeait de couleur après leur passage. Plus sombre. Plus riche. La différence était visible à l'œil, si on savait regarder.

À la fin de la quatrième semaine, les deux Élus étaient épuisés d'une façon qui ne ressemblait pas à de la fatigue ordinaire — une lenteur dans leurs gestes, une qualité particulière du silence dans lequel ils mangeaient le soir. Ils avaient donné quelque chose qu'ils ne pourraient pas récupérer entièrement avant des mois. La coordinatrice régionale l'avait noté dans ses registres. "Rendement optimal maintenu. État des Élus : acceptable. Récupération prévue : dix à quatorze semaines."

À la fin des six semaines, ils sont repartis. "D'autres zones ont aussi besoin d'eux."

Arev avait regardé leur caravane disparaître dans la chaleur du désert. Elle avait regardé le sol que ses pieds touchaient, plus sombre, plus vivant. Elle avait compris deux choses simultanément et sans contradiction : que ce qu'ils avaient fait était nécessaire, et que ce qu'ils avaient donné avait un coût réel. Elle voulait travailler à rendre le système meilleur. Elle avait rejoint la Convergence à vingt ans.`,
    },

    rupture: {
      titre: `Sa propre manifestation`,
      texte: `Le Sol d'Arev s'était manifesté à vingt-trois ans, lors d'une tempête de sable qui avait englouti le camp de transit où elle travaillait comme assistante de coordination. Elle était en train d'évacuer des familles quand la dune de tête — une masse de sable de dix mètres de haut en déplacement rapide — avait commencé à engloutir l'entrée du camp.

Elle ne savait pas ce qu'elle faisait. Elle savait ce qu'elle voulait : que la dune s'arrête. Elle avait posé la main sur le sol, et le sol avait répondu.

Ce n'était pas une explosion, pas une force. C'était une structure — la dune s'était compactée en quelques secondes, solidifiée, cristallisée depuis sa base, formant une barrière de sable durci qui avait dévié l'élan de la masse en mouvement. Treize personnes avaient eu le temps de passer. La barrière avait tenu quatre minutes avant de s'effriter.

Elle était restée à genoux dans le sable après ça, hébétée, les mains toujours contre la roche. Elle avait senti quelque chose quitter son corps — pas de la douleur, mais une diminution. Comme si quelqu'un lui avait retiré vingt pour cent d'elle-même pendant quelques secondes.

Le Calendrier des Fées l'avait identifiée dans les jours suivants. La Convergence avait répondu avant l'Empire.

Ce qu'elle avait conclu : la Sélection du Besoin l'avait choisie là où elle était parce que les déserts avaient besoin de leurs propres Élus, pas d'Élus empruntés à d'autres régions et épuisés par le trajet avant même de commencer. Elle avait refusé la redistribution impériale. Elle était restée à la Convergence. Elle avait demandé à travailler sur l'amélioration des protocoles de volontariat, pas sur les extractions de terrain.

Ils lui avaient dit que c'était une excellente idée et l'avaient mise à la coordination logistique. Ça faisait quinze ans. Elle était toujours à la coordination logistique. Ses propositions de réforme étaient toujours "en cours d'examen".`,
    },

    maintenant: {
      titre: `Coordinatrice de zone`,
      texte: `Arev gère la logistique de redistribution pour trois zones désertiques d'Ash'Rael — une centaine de kilomètres carrés chacune, niveaux de déficit minéral différents, populations différentes, urgences différentes. Elle organise les rotations d'Élus, tient les registres de chaque session, coordonne les transports, évalue les états de récupération.

Ce matin, elle doit conduire une session préparatoire avec un jeune Élu Sol nommé Tarev — vingt-quatre ans, manifestation tardive à vingt-deux ans, deux sessions de Drain déjà au compteur selon son dossier. Il s'est inscrit comme "donateur volontaire longue durée" il y a deux mois.

Elle avait relu son dossier hier soir. Il vivait dans le camp de Dharet, zone en déficit sévère, sa famille dans le programme d'aide alimentaire de la Convergence depuis six mois. Le formulaire de "volontariat" avait été signé trois jours après l'acceptation de sa famille dans le programme.

Elle n'avait pas encore décidé ce que ça signifiait. Elle avait ouvert son registre à part — celui qu'elle ne soumet pas — et elle avait noté la coïncidence des dates. Puis elle avait refermé le registre et l'avait mis dans sa poche.

Tarev allait arriver dans deux heures. Elle avait du pain à faire, des comptes à vérifier, un rapport de zone à rédiger. Elle avait tout ça à faire et la question des dates de Tarev qui revenait entre deux gestes, comme un calcul qui ne boucle pas.`,
    },

    objectif: {
      titre: `L'équation qui résiste`,
      texte: `Arev veut construire un système de redistribution qui n'exige pas de coercition implicite. Elle a des propositions concrètes — contrats à durée limitée avec clause de retrait sans justification, compensations matérielles indexées sur le déficit énergétique post-session, périodes de récupération obligatoires et non négociables, séparation des décisions d'aide sociale des décisions de volontariat pour que personne ne puisse établir de connexion entre les deux.

Elle les a présentées huit fois au coordinateur régional. Il lui a dit à chaque fois que c'était intéressant et qu'il allait en parler aux instances supérieures. Elle n'a pas de réponse. Ça fait deux ans pour la dernière proposition.

Ce qu'elle ne dit pas à voix haute : elle sait pourquoi ses propositions n'avancent pas. Un système de volontariat sans pression implicite produirait peut-être suffisamment d'Élus volontaires pour couvrir soixante-dix pour cent des besoins identifiés. Pour les trente pour cent restants, il n'y aurait pas de solution dans le cadre de la doctrine actuelle. Et la Convergence ne peut pas admettre qu'il y a des besoins pour lesquels elle n'a pas de solution sans coercition, parce que l'admettre reviendrait à admettre que la doctrine a une limite que la doctrine elle-même ne peut pas résoudre.

Elle continue à présenter ses propositions. Elle continue à tenir ses registres. Et dans le registre à part, qu'elle n'a montré à personne, elle continue à noter les coïncidences de dates, les mains qui tremblaient à la fin d'une session, les yeux qui ne regardaient pas exactement dans la bonne direction quand ils disaient "oui, je veux bien."`,
    },

    evenements_narratifs: ['Premier_Drain', 'Saturation_des_Elus'],
    arcs: ["L_Avatar"],
    position_dans_arc: `Coordinatrice de zone Convergence à Ash'Rael. Témoin de la mort de sa sœur par déficit élémentaire. Bénéficiaire et maintenant agent de la redistribution. Croit sincèrement à la justice redistributive — et tient en parallèle un registre privé de tout ce que le système officiel ne peut pas noter. Actuellement : au bord d'une décision sur la session de Tarev qu'elle ne pourra pas prendre sans en assumer les conséquences.`,
  },

  // ── RELATIONS ─────────────────────────────────────────────
  relations: [
    {
      personnage_id: 43,
      nom: 'Graveth',
      type: 'collegue',
      depuis_ici: `Graveth est Convergence et croit dans la redistribution avec une conviction qui n'a pas les nuances d'Arev. Il pense que la Fosse Interdite pourrait être drainée pour redistribuer une énergie organique non-élémentaire à des zones qui n'ont pas d'Élus disponibles — une idée qu'Arev trouve fascinante sur le papier et qui lui donne des nuits difficiles quand elle y réfléchit vraiment. Elle lui fait confiance sur le terrain. Elle ne lui a jamais montré son registre à part.`,
      arc_commun: "L_Avatar",
      statut: 'actif',
    },
    {
      personnage_id: 65,
      nom: 'Saeved',
      type: 'fantôme',
      depuis_ici: `Le Premier Drain était volontaire. C'est le fondement de tout. Saeved a choisi de donner son énergie pour stabiliser une zone qui mourrait sans lui — et il est mort dans le processus. La Convergence en a fait un saint. Arev lui allume une bougie les soirs de bilan. Ce qu'elle pense à ces moments-là et ne formule pas : que Saeved a choisi pour lui-même, et que "choisir pour soi-même" est exactement ce qu'elle essaie de garantir pour Tarev et les autres, et que le système qu'elle coordonne ne garantit pas toujours ça.`,
      arc_commun: "L_Avatar",
      statut: 'latent',
    },
    {
      personnage_id: 72,
      nom: 'Tarev',
      type: 'contact_nécessaire',
      depuis_ici: `Un Élu Sol de vingt-quatre ans dont le dossier de volontariat a été signé trois jours après l'acceptation de sa famille dans le programme d'aide de la Convergence. Elle ne lui a pas encore parlé. La session est dans deux heures. Elle a plusieurs façons de conduire cette session et une seule d'entre elles ressemble à la conversation qu'elle voudrait avoir.`,
      statut: 'actif',
    },
  ],

  // ── COMBAT ────────────────────────────────────────────────
  combat: {
    philosophie: `Arev ne combat pas souvent. Son rôle est logistique, pas militaire. Quand elle combat, c'est parce qu'une zone de Drain est attaquée — par des agents impériaux, par des indépendants qui pensent que la Convergence vole les Élus, ou par des dissidents internes. Dans ces situations, elle ne cherche pas à détruire. Elle cherche à stabiliser — le terrain, la situation, les gens. Ce qui marche en coordination fonctionne aussi en combat, si on accepte que "protéger les alliés" et "neutraliser les menaces" ne sont pas deux objectifs séparés.`,

    sorts: [
      {
        nom: 'Fondation Stabilisée',
        type: 'sort_situationnel',
        elements: ['Sol'],
        description_gameplay: `Crée une zone de sol compacté et stabilisé sur 3×3 cases. Les alliés dans la zone ne peuvent pas être déplacés de force. Les terrains instables (lave, eau, illusions de sol) sont neutralisés pendant 3 tours. Les ennemis qui entrent dans la zone se déplacent à demi-vitesse.`,
        description_lore: `Elle l'utilise presque par réflexe — quarante ans de vie dans un désert où le sol peut céder sous les pieds lui ont donné un rapport instinctif à la stabilité du terrain. Ce n'est pas un sort offensif. C'est une habitude de praticienne de terrain qui a appris à toujours trouver d'abord où se poser solidement.`,
      },
      {
        nom: 'Extraction du Terreau',
        type: 'sort_de_base',
        elements: ['Sol'],
        description_gameplay: `Extrait l'énergie minérale d'une case adjacente et la convertit en soin pour tous les alliés dans un rayon de 2. La case devient "épuisée" : ses bonus défensifs sont réduits pendant 2 tours. Si la case est déjà en terrain stabilisé (Fondation Stabilisée), le soin est augmenté de 50%.`,
        description_lore: `La métaphore directe du Drain, appliquée au terrain plutôt qu'aux personnes. Elle a développé ça en observant comment les Élus Sol du plateau Makhet redistribuaient — en prélevant ce qui existait en excès dans un endroit pour le transférer là où c'était déficient. La même logique. Une direction différente.`,
      },
      {
        nom: 'Registre de Zone',
        type: 'sort_situationnel',
        elements: ['Sol'],
        description_gameplay: `Scan tactique complet pendant 2 tours : Arev voit les PV exacts, éléments et statuts de tous les combattants. Elle peut identifier le combattant le plus vulnérable. Si un allié est à moins de 30% PV, il reçoit automatiquement une régénération légère chaque début de tour pendant la durée du scan.`,
        description_lore: `Issue de onze ans de coordination — elle a appris à lire une salle, un camp, une situation, et à identifier instantanément les déficits les plus critiques. Elle fait ça en combat comme elle fait ça dans ses registres, avec la même précision clinique et la même attention aux cas qui ne rentrent pas dans les cases.`,
      },
      {
        nom: 'Redistribution Géologique',
        type: 'ultimate',
        elements: ['Sol'],
        description_gameplay: `Arev transfère 40% de ses PV actuels vers tous les alliés en dessous de 50% PV, proportionnellement selon leur déficit. Elle ne peut pas recevoir de soins externes pendant 2 tours après activation. Si elle tombe en dessous de 20% PV suite à l'activation, un bouclier de sol temporaire absorbe le prochain coup fatal.`,
        description_lore: `Elle l'a utilisé sept fois en quinze ans, toujours en situations extrêmes. Chaque fois, elle a noté dans son registre interne que la Convergence demande exactement ça aux Élus qu'elle "convoque" — et que la différence entre son acte volontaire et le leur est que personne ne l'a forcée. Elle n'est pas certaine que les deux situations soient aussi différentes qu'elles le semblent.`,
      },
      {
        nom: 'Calcul de Zone',
        type: 'passif',
        elements: ['Sol'],
        description_gameplay: `Aura permanente. Quand un allié passe sous 50% PV, Arev le détecte instantanément, quelle que soit sa position sur la grille. Si elle n'a pris aucune action ciblant cet allié depuis 2 tours, sa prochaine action sur lui a ses effets doublés. Ne s'accumule que sur un allié à la fois — elle priorise automatiquement le déficit le plus critique.`,
        description_lore: `Elle ne peut pas voir quelqu'un en déficit et ne pas répondre. Ce n'est pas de la compassion au sens émotionnel — c'est une contrainte. Elle a grandi dans un déficit. Elle a vu ce que ça produit quand personne ne répond. Le Calcul de Zone est la formalisation de quelque chose qui existait en elle bien avant qu'elle devienne Élue.`,
        image_prompt: `Arev, femme des Peuples des Sables, 38 ans, mince et nerveuse, voile blanc autour de la tête, peau brun-ocre, vêtements blancs avec ornements géométriques en argile cuite. Elle se tient debout dans un camp de coordination au désert, carte géologique dans les mains, son regard balayant la zone. Depuis ses pieds, de fines lignes de sol stabilisé s'étendent dans plusieurs directions, comme un réseau de mesure invisible. Dans sa main gauche visible la cicatrice du poignet. Dusk light, sable rouge-orangé, architecture géométrique d'Ash'Rael en arrière-plan. Style concept art Riot Games, palette de sable chaud avec accents de blanc et d'argile.`,
      },
    ],
  },

  // ── PROMPTS IMAGES ─────────────────────────────────────────
  image_prompts: [
    {
      type: 'portrait',
      titre: "Portrait canonique — Arev",
      description: `Arev, femme des Peuples des Sables, 38 ans, mince, peau brun-ocre profond, yeux brun-doré avec des cils fournis, cheveux noirs tressés sous un voile de tissu blanc cassé. Expression sérieuse, concentrée, avec une qualité d'attention qui semble mesurer quelque chose. Main gauche visible, la cicatrice linéaire au poignet. Vêtements blancs avec ornements géométriques en argile. Dans la main droite, son registre de terrain en cuir brun. Fond flou : architecture géométrique d'Ash'Rael, sable rouge en arrière-plan. Style Riot Games concept art, éclairage de fin de journée du désert (lumière dorée rasante), rendu semi-réaliste.`,
      generated_path: undefined,
    },
    {
      type: 'lore_scene',
      titre: 'Les six semaines — stabilisation du plateau Makhet',
      description: `Arev, adolescente de dix-neuf ans, debout à distance respectueuse dans un champ de sorgho, observant deux Élus Sol agenouillés dans la terre. Les Élus ont les mains enfoncées dans le sol, expression de concentration intense. Autour de leurs mains, le sol change de couleur — du gris pâle au brun riche, la transformation visible en temps réel. La lumière est celle d'une fin d'après-midi de désert. Arev regarde avec une expression qui mélange la gratitude et une question qu'elle ne formule pas encore. Au loin, les premières cultures du plateau, maigres. Style concept art Riot Games, palette désertique chaude, accent sur le contraste entre le sol gris-mort et le sol brun-vivant.`,
      generated_path: undefined,
    },
    {
      type: 'action_signature',
      titre: 'Redistribution Géologique — le coût du don',
      description: `Arev à genoux dans le sable, les deux paumes à plat sur le sol. Un réseau de lignes de lumière ambre rayonne de ses mains dans toutes les directions, chacune se terminant vers un allié au sol. Son corps émet cette lumière — une diminution visible, quelque chose qui quitte. Son expression est déterminée, pas héroïque — c'est la même expression qu'elle a quand elle remplit ses registres. Autour d'elle, les alliés vers qui l'énergie va commencent à se relever. Style concept art Riot Games, palette de sable doré avec filaments de lumière ambre, nuit de désert étoilée, architecture géométrique de la Convergence en arrière-fond.`,
      generated_path: undefined,
    },
  ],

  // ── LORE LONG — CHAPITRE DE ROMAN ─────────────────────────
  // ~2600 mots
  mot_count_cible: 2500,

  lore_long: `L'ÉQUATION QUI RÉSISTE
Un chapitre de la vie d'Arev, coordinatrice de zone (Convergence, Ash'Rael)

—

I.

Le dossier de Tarev tenait en douze pages.

Arev les avait relues trois fois depuis hier soir, pas parce qu'elle n'avait pas compris à la première lecture, mais parce qu'elle cherchait quelque chose qui justifierait de ne pas noter ce qu'elle avait noté. Elle n'avait pas trouvé.

Page sept : date de signature du formulaire de volontariat longue durée. Première semaine de Marchèche, vingtième jour.

Page neuf : date d'admission de la famille Tarev dans le programme d'aide alimentaire de la Convergence, zone Dharet. Première semaine de Marchèche, dix-septième jour.

Trois jours.

Elle avait ouvert son registre à part — le carnet en cuir épais, le même format que son registre officiel mais avec un fermoir en os de dromadaire que le régulier n'avait pas — et elle avait noté les deux dates côte à côte sans commenter. Elle avait refermé le registre. Elle l'avait mis dans sa poche gauche, contre sa hanche.

Dehors, le camp de coordination commençait à s'animer. Les premières lumières du désert — pas l'aube, l'aube viendrait dans deux heures — mais les feux de cuisine, les lampes des équipes de nuit qui finissaient leur quart, le bruit spécifique d'un camp qui ne dort pas entièrement mais ralentit. Elle aimait cette heure. C'était la seule heure où les colonnes de son registre officiel restaient fermées et où elle pouvait penser à quelque chose sans que quelqu'un lui demande d'en rendre compte.

Elle mangea du pain sec et bu du thé amer. Tarev arriverait dans deux heures.

—

II.

Elle avait quatorze ans quand Shael était morte.

La maladie avait eu un nom compliqué — quelque chose qui signifiait en substance "minéraux du sol cristallisés dans les voies respiratoires" — mais le nom n'avait pas d'importance. Ce qui avait de l'importance : les spores de la maladie de Shael se formaient dans des sols dégradés, des sols sans Élu Sol depuis trop longtemps, des sols qui mouraient d'un déficit qu'on ne voyait pas parce que la mort des sols prend soixante ans et que soixante ans c'est plus que la durée d'une vie humaine si on n'a pas de chance.

Sa mère avait su. Elle ne l'avait pas dit devant les enfants, mais à l'enterrement de Shael, quand il n'y avait plus d'enfants présents, elle l'avait dit à voix haute pour la première fois à la famille rassemblée : "Ce sol nous a tués. Le sol qui n'a pas d'Élu pour le maintenir finit toujours par tuer quelqu'un."

Arev s'était souvenue de cette phrase chaque jour depuis.

Elle s'en souvenait maintenant, dans la lumière des lampes du camp, avec son thé et son dossier de douze pages. Elle se rappelait le sol gris du plateau Makhet, la façon dont les cultures diminuaient chaque année d'une façon si régulière que les familles finissaient par trouver ça normal. Elle se rappelait Shael qui organisait les semailles, rapide et compétente, riant facilement, et puis Shael qui toussait, et puis Shael qui ne riait plus aussi facilement, et puis Shael qui ne respirait plus du tout.

Elle n'était pas entrée à la Convergence par idéologie. Elle y était entrée parce qu'elle avait vu ce qui arrive quand personne ne vient.

—

III.

Tarev était arrivé légèrement en avance, ce qu'Arev avait noté — pas dans son registre officiel, mais dans la façon dont elle l'avait regardé entrer dans la tente de coordination.

Il était petit pour un Sol — les Élus Sol avaient tendance à être denses, bien ancrés au sol au sens physique, mais Tarev avait quelque chose d'aérien dans sa façon de se tenir, comme s'il n'était pas tout à fait sûr d'occuper l'espace où il était. Vingt-quatre ans. Des yeux qui regardaient les coins de la tente plutôt que les gens directement.

"Tarev," dit-elle.

"Coordinatrice Arev." Il avait une voix ferme qui contredisait la façon dont il se tenait. Peut-être qu'il avait appris à mettre quelque chose de solide dans sa voix précisément parce que le reste ne l'était pas.

"Tu peux m'appeler Arev. Tu veux du thé ?"

"Non, merci. Je suis bien."

Elle avait noté ça aussi. Pas dans le registre — juste dans la façon dont elle l'avait regardé. "Tu veux du thé" était une question d'accueil qui ne demandait pas vraiment si on voulait du thé, elle demandait comment on allait, et "je suis bien" était une réponse à la deuxième question, pas à la première.

Elle lui avait quand même versé une tasse et posé devant lui. Il l'avait regardée, puis l'avait prise.

"J'ai relu ton dossier ce matin," dit-elle. Ce n'était pas habituel — elle ne disait pas ça aux donateurs. Mais elle avait décidé quelque chose ce matin, dans les deux heures qui avaient précédé son arrivée, et ça commençait là. "Est-ce que tu as des questions sur le processus ?"

"Non. J'ai déjà fait deux sessions."

"Je sais. Je voulais te demander si tu avais des questions."

Il avait regardé sa tasse. "Ça aide les gens."

"Oui."

"Alors c'est bien."

—

IV.

Les six semaines sur le plateau Makhet, elle ne les avait jamais oubliées.

Ce qu'elle avait observé à dix-neuf ans, qu'elle n'avait compris que plus tard : les deux Élus Sol qui étaient venus stabiliser le plateau ne se parlaient presque pas entre eux. Ils travaillaient côte à côte dans les champs depuis l'aube, mains dans la terre, en silence. Le soir, ils mangeaient avec les familles du plateau, répondaient aux questions, dormaient tôt.

À la fin de la troisième semaine, l'homme — il s'appelait Drevakh, Arev avait cherché son nom des années plus tard dans des archives — avait eu une conversation avec elle. Pas une grande conversation. Ils ramassaient des pierres dans un champ qu'ils allaient remettre en culture le lendemain, et elle lui avait demandé comment ça se passait quand on donnait de l'énergie — si ça faisait mal.

"Non," avait-il dit. "Pas pendant. Après."

"Comment après ?"

"Comme si tu avais couru très loin. Mais pas dans les jambes. Dans quelque chose d'autre."

Elle avait pensé à Shael. À la façon dont Shael toussait à la fin — non pas douloureusement mais avec la fatigue spécifique de quelqu'un dont le corps consomme plus qu'il ne reçoit. "Ça dure combien de temps ?"

"Quelques semaines. Ça dépend de combien on donne."

"Et vous avez choisi de venir."

"Oui."

"Personne ne vous a forcés."

Il l'avait regardée avec une attention particulière alors. Pas méfiante — juste précise. "Non. Personne ne nous a forcés."

Elle avait ramassé une dernière pierre et l'avait mise dans le sac. Elle avait vingt ans quand elle avait rejoint la Convergence. Elle avait demandé à travailler sur les protocoles de volontariat. Ils l'avaient mise à la coordination logistique. Elle tenait des registres depuis onze ans.

—

V.

La session avait duré quarante minutes.

Arev avait conduit le processus comme elle conduisait toujours — calmement, avec les interruptions régulières, en demandant à chaque étape si Tarev voulait continuer. Il avait dit oui à chaque fois. Il ne regardait pas exactement dans sa direction quand il disait oui, mais il disait oui.

À la fin de la session, Tarev avait les mains qui tremblaient légèrement. Ce n'était pas inhabituel — les Drains partiels produisaient une réponse neuromusculaire fréquente, bien documentée, généralement brève. Arev lui avait donné de l'eau et un sachet de minéraux concentrés que la Convergence fournissait systématiquement après les sessions.

"Comment tu te sens ?"

"Bien."

"Tu as mangé ce matin ?"

"Oui."

"Est-ce que tu veux qu'on discute de la prochaine session maintenant ou tu préfères qu'on se revoit dans quelques jours ?"

Il avait réfléchi. "Quelques jours."

"D'accord. Je t'enverrai un message."

Il était reparti. Elle avait regardé la tente se stabiliser après son départ — le tissu qui arrête de bouger, le silence qui reprend ses droits.

—

VI.

Elle avait rempli le registre officiel après son départ.

Session 3-Tarev-Dharet. Date. Durée : 40 minutes. Rendement : 78% (légèrement en dessous de la moyenne de 83% pour un Sol de son niveau — cohérent avec une troisième session à six semaines d'intervalle, récupération incomplète possible). État du donateur : bon. Mains tremblantes post-session, normal. A accepté les minéraux. Prochaine session : à déterminer.

Colonne "observations comportementales" : contact visuel limité pendant la session. A répondu oui à toutes les propositions de continuation. Attitude coopérative.

Elle avait relu la colonne. "Coopérative" était un mot de coordinatrice. Ce qu'elle voulait écrire était plus long et moins propre et elle ne pouvait pas le mettre dans un registre officiel.

Elle avait sorti le registre à part. Elle avait noté : "Mains tremblantes 8-10 minutes post-session. Contact visuel : 40% du temps standard. Réponses oui : systématiques, délai légèrement inférieur à la moyenne. Note sur le volontariat : impossible à établir formellement. Les conditions d'entrée dans le programme familial et la signature du formulaire créent un contexte dans lequel je ne peux pas affirmer avec certitude que le non était une option réelle. Je n'ai pas posé la question directement. J'aurais dû poser la question directement."

Elle avait posé le stylo.

À l'extérieur, le camp s'était complètement réveillé. Des voix, du mouvement, le bruit d'une réunion de coordination qui commençait dans la grande tente. Elle devrait y assister dans vingt minutes.

Elle avait regardé ses deux registres côte à côte sur la table — l'officiel et le privé, même format, couvertures différentes.

Sa sœur Shael avait dix-sept ans quand elle avait commencé à tousser. Les minéraux du sol gris du plateau Makhet cristallisés dans ses poumons. Un Élu Sol, deux heures, deux fois par mois — c'était les chiffres que les archivistes médicaux avaient calculés après coup, dans un rapport que personne n'avait demandé à l'époque et que personne n'avait lu assez tôt. Deux heures deux fois par mois aurait suffi. Pas de sacrifice héroïque. Pas de Drain total. Juste deux heures.

Arev avait grandi dans un déficit. Elle avait vu ce que ça produisait. Elle avait rejoint le système qui venait combler ces déficits. Et maintenant elle était assise avec ses deux registres et la question de savoir si le système qu'elle coordonnait créait les conditions dans lesquelles une autre Shael était quelque part en train de penser qu'elle n'avait pas le choix.

Elle n'avait pas de réponse. Elle avait des colonnes qui ne bouclaient pas.

Elle avait fermé les deux registres, l'officiel dans sa sacoche, le privé dans sa poche gauche, et elle était allée à la réunion de coordination.

—

VII.

Ce soir, en rentrant dans sa tente, elle avait rallumé sa lampe et sorti le registre à part pour écrire une dernière ligne.

Pas une conclusion. Elle ne formulait pas de conclusions dans ce registre — les conclusions nécessitaient une certitude qu'elle n'avait pas. Elle formulait des observations.

"Question à poser à la prochaine session de Tarev : est-ce que les conditions de volontariat me permettent d'accepter une réponse non sans qu'il sache que je l'accepterai sans conséquence sur le statut de sa famille ? Si la réponse est non, est-ce que j'ai la capacité de créer ces conditions à mon niveau, ou est-ce que ça nécessite une décision hiérarchique que je n'ai pas obtenue depuis deux ans de propositions ?"

Elle avait regardé la ligne. Elle avait ajouté :

"Saeved a choisi. Je veux que Tarev puisse choisir. Ce n'est pas la même chose que ce que je coordonne en ce moment."

Elle avait fermé le registre et éteint la lampe.

Le désert, la nuit, produisait ce silence particulier qui n'était pas l'absence de bruit mais la présence de quelque chose d'autre — le vent dans le sable, la chaleur qui rayonnait encore de la roche après une journée de soleil, les étoiles qui à Ash'Rael semblaient plus proches qu'ailleurs comme si le désert les rendait accessibles à qui se donnait la peine de lever les yeux.

Elle avait levé les yeux un moment, par habitude. Puis elle avait fermé les siens.

Demain, il y aurait trois autres sessions à coordonner, un rapport de zone à finaliser, et la réponse probable que son coordinateur régional n'avait toujours pas eu le temps d'examiner ses propositions de réforme. Elle ferait tout ça. Elle noterait tout ça. Et dans le registre à part, elle continuerait à noter les choses qui ne rentraient pas dans les colonnes officielles.

C'était insuffisant. Elle le savait.

C'était ce qu'elle pouvait faire, dans le système où elle était, avec les outils qu'elle avait. Et elle continuait à chercher comment faire plus, parce qu'en face de "insuffisant" elle avait toujours le sol gris du plateau Makhet et les poumons de Shael, et cette équation-là, elle ne pouvait pas la laisser résister indéfiniment.
`.trim(),
};

export default lore;
