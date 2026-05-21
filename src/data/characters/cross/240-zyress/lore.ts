// ============================================================
//  ZYRESS — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 240 | Spectre/Combat | Hommes-Liens | Convergence | Assassin
//  Arc : L'Avatar — Maintien de la sécurité interne Convergence
//  Rôle : Élimine les membres qui "savent trop" — 7 éliminations en 5 ans
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 240,
  nom: 'Zyress',
  element: 'Spectre',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-cinq, légère — le genre de stature qu'on ne remarque pas avant qu'elle soit dans l'espace personnel. Zyress a la corpulence des combattants qui s'entraînent pour se déplacer vite plutôt que pour frapper fort. Pas de masse musculaire visible, mais une densité de mouvement qui suggère que chaque geste a été répété jusqu'à l'automatisme. À quarante et un ans, elle n'a pas de raideurs visibles.`,
    peau: `Brun pâle, la teinte des Hommes-Liens du désert qui vivent en intérieur — elle passe peu de temps dehors en comparaison des équipes de terrain. Une peau nette, sans cicatrices, ce qui est inhabituel pour quelqu'un de son profil. Elle prend soin d'elle avec une méticulosité qui n'est pas de la coquetterie : les marques visibles créent des mémorisations visuelles, et elle travaille dans des environnements où être mémorisée est un problème opérationnel.`,
    yeux: `Brun-gris, légèrement lumineux dans l'obscurité — manifestation passive de son élément Spectre, qui donne aux Élus expérimentés de cet élément une légère phosphorescence oculaire en basse lumière. Elle ne peut pas l'éteindre. Elle travaille donc dans des conditions où ce détail n'est pas visible, ou avec des lentilles de terrain qui l'atténuent.`,
    vetements: `En mission : tenue de civil adaptée à l'environnement cible. En base : tenue administrative Convergence standard, sans les marques de contribution habituelles. Elle ne porte pas les triangles de contribution — son rôle n'est pas enregistré dans les registres ordinaires. Ce qu'elle porte toujours : un bracelet en cuir simple au poignet gauche, trois nœuds. Un par année de service dans son rôle actuel. Il en a sept.`,
    signes_particuliers: `Elle est parfaitement silencieuse en mouvement — pas de bruit de semelle, pas de froissement de tissu, pas de respiration audible à moins d'un mètre. Ce n'est pas une technique Spectre à proprement parler. C'est une habitude acquise sur quinze ans de pratique, et elle ne peut plus l'éteindre. Elle marche silencieusement même quand il n'y a aucune raison de le faire — dans les couloirs vides de la base, dans sa propre chambre. Les autres agents qui la croisent sans la voir d'abord ont tendance à sursauter. Elle le remarque chaque fois. Ça l'amuse un peu.`,
  },

  psychologie: {
    dominante: `Zyress croit dans la nécessité de ce qu'elle fait avec la clarté tranquille de quelqu'un qui a eu le temps de réfléchir à la question. La Convergence a des secrets. Les secrets ont une durée de vie utile. Quand cette durée expire — quand quelqu'un sait trop et commence à poser des problèmes — il y a un coût à gérer. Elle gère ce coût. Ce n'est pas plus mystérieux que ça.

    Ce qui la distingue : elle n'a pas besoin de se convaincre. Elle ne passe pas ses nuits à rationaliser. La conviction est structurelle, pas performative.`,
    contradictions: `Elle apprécie son travail. Pas le meurtre — elle tient à cette distinction avec une précision qu'elle n'a jamais exprimée à voix haute. Elle apprécie la résolution propre d'un problème logistique complexe. La façon dont une situation dont les paramètres semblent impossibles à concilier peut, avec les bonnes informations et la bonne méthode, se clore sans résidu. C'est de la satisfaction professionnelle. Elle est convaincue que cette distinction entre "apprécier son travail" et "apprécier tuer" est réelle et importante.

    Elle a tué sept personnes. Elle ne sait pas si la distinction tient encore pour les sept. Elle ne se pose pas la question activement. Elle la met de côté.`,
    peur: `Pas la peur d'être prise, pas la peur de mourir. Une peur plus spécifique : que quelqu'un lui pose les bonnes questions dans le bon ordre et qu'elle réalise en temps réel que sa distinction n'est plus tenable. Elle a lu les quarante pages du 7e sujet avant l'élimination. Le texte était cohérent. Elle l'a éliminé quand même. Elle n'a pas ouvert le compartiment qui contient la question "et alors ?"`,
    desir: `Du travail propre. Un résultat où rien ne traîne — ni preuve, ni témoin, ni perturbation systémique. Une résolution qui passe inaperçue parce qu'elle a été faite avec assez de précision pour s'intégrer dans le bruit normal du monde. Pour Zyress, la beauté d'une élimination réussie est dans son invisibilité totale.`,
    rapport_au_pouvoir: `Son élément Spectre lui donne un avantage que peu d'Élus ont dans son domaine : elle peut lire les résidus d'une personne dans les espaces qu'elle a traversés. Pas ses pensées — une signature de passage, une tonalité émotionnelle récente. Elle se sert de ça pour évaluer l'état psychologique d'une cible avant l'approche finale. Elle traite son élément comme un outil, avec le même rapport pragmatique qu'elle entretient à tout le reste. Elle ne lui a pas donné de signification symbolique.`,
  },

  histoire: {
    origine: {
      titre: 'Ce qu\'Elle Était Bonne à Faire',
      texte: `Zyress a grandi à Virex, dans l'Isthme — la ville des anomalies élémentaires, des doubles naissances, des Élus instables. Ses deux éléments Spectre et Combat s'étaient manifestés à trois ans d'intervalle, avec la discrétion caractéristique des Hommes-Liens qui n'ont pas de tradition élémentaire : une légère phosphorescence oculaire dans le noir à seize ans, une capacité de contrôle de l'espace immédiat et de prédiction des mouvements adverses à dix-neuf.

      Elle n'avait pas rejoint la Convergence tout de suite. Elle avait d'abord travaillé pour un cabinet de sécurité privé qui gérait des extractions — personnes en danger, récupération de patrimoine, situations où une présence discrète et compétente était nécessaire. Elle était bonne dans ce travail. Elle était particulièrement bonne dans les situations où les autres agents disaient que ça ne pourrait pas se faire proprement.

      La Convergence l'avait recrutée à vingt-sept ans après avoir observé trois de ses missions. Ils ne lui avaient pas dit exactement pour quoi. Ils lui avaient dit : il y a un rôle dans notre organisation pour quelqu'un qui résout des problèmes sans laisser de résidu. Elle avait demandé de quel type de problèmes.

      Ils le lui avaient dit clairement. C'était une qualité qu'elle avait appréciée.

      Elle avait accepté.`,
    },
    eveil: {
      titre: 'La Première Résolution',
      texte: `Son premier sujet était un ancien membre de la section logistique qui vendait des données de transit à un intermédiaire extérieur. Pas à l'Empire — à un commerce privé, un réseau d'information qui revendait à plusieurs clients. Le problème : les données de transit incluaient des informations sur les sujets de Drain, les dates et les routes.

      Elle avait mis douze jours à le trouver. Trois jours supplémentaires à comprendre ses habitudes avec assez de précision pour identifier la fenêtre. Un demi-jour de préparation. Une heure d'exécution.

      Ce qui s'était passé dans cette heure, elle ne le consignait jamais par écrit. Mais elle avait produit un rapport d'analyse de ce qui avait fonctionné et de ce qu'elle aurait fait différemment. Elle l'avait remis à son commanditaire avec la même rigueur qu'elle remettait les rapports de terrain dans son ancien travail.

      Le commanditaire avait lu le rapport. Il lui avait dit que personne n'avait jamais remis un rapport d'amélioration après une première mission. Elle avait répondu que c'était étrange — comment s'améliorait-on sinon ?

      C'était le genre de question qui avait fait sa réputation interne.`,
    },
    rupture: {
      titre: 'Les Quarante Pages',
      texte: `Le 7e sujet était différent des six précédents.

      Les six précédents avaient tous eu en commun une transgression active : vente d'information, révélation délibérée, contact avec des réseaux externes. Des choses qu'ils avaient faites.

      Le 7e n'avait rien fait de tel. Il avait écrit quarante pages d'analyse critique interne — philosophique, théologique, logistique — et les avait montrées à trois collègues dans le cadre d'une conversation privée. Les trois collègues avaient signalé la conversation, comme ils en avaient l'obligation. Le 7e avait été classifié comme "risque d'intégrité active."

      Zyress avait reçu la mission avec les quarante pages jointes en pièce annexe. Elle les avait lues avant de travailler — son protocole standard, parce que comprendre le contexte psychologique du sujet améliorait l'approche.

      Les quarante pages étaient cohérentes. Bien documentées. Le raisonnement était solide. Les questions qu'il posait sur le consentement des sujets de Drain, sur la transparence interne, sur les conditions dans lesquelles une organisation peut demander à ses membres de garder des secrets dont ils ne connaissent pas encore les implications — ces questions n'étaient pas rhétoriques. Il y avait des réponses esquissées. Certaines étaient pertinentes.

      Elle avait exécuté la mission. Proprement — sa meilleure exécution à ce jour, techniquement parlant.

      Elle n'avait pas ouvert le compartiment. Elle ne savait pas encore ce qu'elle trouverait si elle le faisait.`,
    },
    maintenant: {
      titre: 'Le Protocole de Surveillance Khorath',
      texte: `Khorath est sur sa liste depuis quatre mois — pas en surveillance passive, en surveillance active. Il y a des niveaux dans son système d'évaluation : observation de routine, surveillance préventive, surveillance active, préparation de dossier. Khorath est en surveillance active depuis le moment où elle l'a vu refuser d'entrer dans une tente où se tenait une réunion de débriefing, s'asseoir dehors, et regarder les étoiles pendant deux heures en silence.

      Ce n'est pas ce geste en lui-même. C'est la qualité de ce geste — la façon dont quelqu'un qui a décidé quelque chose intérieurement occupe l'espace. Elle connaît cette qualité. Elle l'a vue six fois avant les missions 2 à 7.

      Khorath n'a rien fait de problématique. Il n'a parlé à personne, n'a rien écrit, n'a rien vendu. Mais il sait ce qu'il sait — et le fait de le savoir commence à peser sur lui d'une façon visible. Elle lui donne trois mois. Peut-être quatre, si quelqu'un lui donne un travail de terrain suffisamment absorbant.

      Elle n'a pas encore ouvert de dossier. Elle est encore en observation active.

      Amhavel, elle le protège. Pas par affection — il n'est pas sur aucune liste. Amhavel est paralysé par ce qu'il sait depuis vingt ans. Un archivist paralysé est infiniment moins problématique qu'un archiviste actif. Elle s'assure que rien ne le force à bouger. C'est de la gestion préventive, pas de la protection.`,
    },
    objectif: {
      titre: 'La Prochaine Mission',
      texte: `Elle a une demande dans sa file depuis deux semaines. Un ancien coordinateur logistique dans les zones de transit Nord qui a pris sa retraite il y a deux ans et reçoit depuis quelques semaines des visites inhabituelles. La demande vient avec un niveau d'urgence moyen — pas immédiat, mais avant la fin du cycle.

      Elle travaille le dossier depuis hier. La cible vit seule, dans un village de retraités du désert. Deux voies d'accès. Peu de témoins potentiels. Une fenêtre évidente dans la troisième semaine du mois quand le village est partiellement vide pour les marchés régionaux.

      Ce n'est pas complexe. Les missions non-complexes sont les plus faciles à rater par inattention.

      Elle travaillera le dossier avec la même rigueur qu'un problème difficile. Elle produira un rapport d'analyse après. Elle l'enverra à son commanditaire avec ses notes d'amélioration.

      Le bracelet au poignet gauche aura un 8e nœud.

      Ce chiffre ne lui fait rien.

      Elle pense parfois aux quarante pages. Elle les pense comme on pense à quelque chose qu'on a mis dans un compartiment fermé — pas oublié, mais rangé. Elle ne sait pas ce qu'elle fera le jour où le compartiment s'ouvrira de lui-même. Elle pense que ce jour est possible. Elle ne pense pas qu'il est imminent.`,
    },
    evenements_narratifs: ['Saturation_des_Elus', 'Premier_Drain'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Responsable de la sécurité interne Convergence — élimine les membres devenus risques d'intégrité. 7 éliminations en 5 ans. Surveille Khorath (235) en surveillance active (3-4 mois avant décision). Protège Amhavel (239) par gestion préventive. A lu les 40 pages du 7e sujet avant son élimination. N'a pas ouvert le compartiment.`,
  },

  relations: [
    {
      personnage_id: 235,
      nom: 'Khorath',
      type: 'contact_nécessaire',
      depuis_ici: `En surveillance active depuis quatre mois. Elle ne le lui dit pas — les sujets en surveillance ne savent pas qu'ils sont en surveillance. Khorath ne fait rien d'actif. Mais il porte le poids de ce qu'il sait d'une façon de plus en plus visible. Elle lui donne encore du temps. Elle espère sincèrement qu'il va trouver comment porter ça sans franchir la ligne. Ce n'est pas de la compassion — un agent qui reste fonctionnel sans intervention est plus utile. C'est de la gestion de ressource.`,
      depuis_la: `Khorath n'a pas conscience de la surveillance. Il perçoit Zyress comme une collègue de rang équivalent — efficace, peu bavarde, compétente. Il lui fait un peu confiance, ce qui lui fait du bien parce que sa liste des personnes en qui il a confiance est devenue très courte.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 239,
      nom: 'Amhavel',
      type: 'allié',
      depuis_ici: `Elle le protège. Pas par affection — parce qu'un archiviste paralysé est un problème contenu. Amhavel sait des choses qui pourraient être catastrophiques si elles sortaient. Son incapacité chronique à agir est, dans le lexique de Zyress, la solution. Elle s'assure que rien ne le pousse à changer d'état. Elle intervient discrètement quand une pression extérieure commence à s'accumuler sur lui. Il ne sait pas qu'elle fait ça.`,
      depuis_la: `Amhavel perçoit Zyress comme quelqu'un de calme et fiable dans une organisation qu'il trouve de plus en plus difficile à naviguer. Il l'apprécie sans comprendre pourquoi elle semble toujours là au bon moment. Il ne lui a jamais demandé.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 49,
      nom: 'Velath',
      type: 'inconnue_qui_change_tout',
      depuis_ici: `Elle a traversé les Trois Couches de Vel'Nox deux fois pour des contacts opérationnels — une zone que la Convergence utilise comme point de transit neutre. Elle a croisé un guide dans les passages — silencieux, compétent, capable de se déplacer dans l'ombre avec une économie qu'elle a remarquée. Elle ne sait pas son nom. Elle ne sait pas qu'il est Dissident. Elle se souvient de sa façon d'occuper l'obscurité parce qu'elle est une qualité rare et qu'elle la catalogue automatiquement.`,
      depuis_la: `Velath a croisé une femme dans les Trois Couches deux fois. Elle était silencieuse d'une façon qui n'était pas des Trois Couches — pas la discrétion des habitués, quelque chose de différent, de plus calculé. Il ne sait pas son nom. Il ne l'a pas cherché.`,
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Le combat est le dernier recours d'un travail mal préparé. Zyress ne combat pas — elle résout. La distinction est fondamentale dans sa pratique : un combat produit des témoins, des résidus, des bruits. Une résolution n'en produit pas. Tout son entraînement Combat va dans le sens de la non-confrontation : être dans la bonne position avant que l'autre ait compris qu'il y avait une position à prendre.

    Son élément Spectre lui donne la lecture des signatures résiduelles. Son élément Combat lui donne l'économie de mouvement nécessaire pour agir dans la fenêtre avant que le résidu se régénère. L'équation est simple : lire, agir, partir.`,
    sorts: [
      {
        nom: 'Lecture de Résidu',
        type: 'passif',
        elements: ['Spectre'],
        description_gameplay: `Zyress perçoit les signatures émotionnelles et physiques récentes de toute personne dans un rayon de 6 mètres — état psychologique actuel, tension physique, direction d'attention. L'effet est passif et permanent quand elle est concentrée sur un contexte spécifique.`,
        description_lore: `Son outil de travail principal. Elle lit les résidus comme d'autres lisent les visages — non pas ce que la personne montre, mais ce que son passage laisse dans l'air pendant les minutes qui suivent. Dans un couloir, elle peut distinguer entre quelqu'un qui est passé normalement et quelqu'un qui était en état de vigilance. Dans une pièce, elle sait si quelqu'un y a attendu longtemps ou s'y est installé rapidement. C'est une précision d'information qu'elle n'échangerait contre aucun autre avantage tactique.`,
      },
      {
        nom: 'Estompe',
        type: 'sort_de_base',
        elements: ['Spectre', 'Combat'],
        description_gameplay: `Zyress réduit sa signature spectrale pendant 6 secondes — elle devient difficile à percevoir intuitivement pour les Élus sensibles, et quasi-indétectable pour les appareils de mesure standard. Ses mouvements dans cet état sont également silencieux et discrets.`,
        description_lore: `Sa technique de déplacement au travail. L'Estompe ne la rend pas invisible — elle réduit le signal qu'elle émet dans le registre spectral, qui est la couche de perception que la plupart des gens et des appareils utilisent instinctivement pour détecter une présence. Ce qui reste : son ombre physique, son souffle, le déplacement d'air de son passage. Des détails que la plupart des gens ne lisent pas sans raison de le faire.`,
      },
      {
        nom: 'Point de Rupture',
        type: 'sort_signature',
        elements: ['Combat', 'Spectre'],
        description_gameplay: `Zyress identifie le point de vulnérabilité physique d'une cible via la lecture de résidu (tension musculaire, axe de déséquilibre). Sa prochaine frappe ou prise provoque un immobilisation ou une neutralisation en une action.`,
        description_lore: `La synthèse de ses deux éléments dans leur application la plus efficace. La lecture Spectre identifie où la tension est maximale dans le corps d'une cible — l'endroit où une pression précise produit un résultat disproportionné. Le Combat fournit la précision d'exécution. Zyress n'utilise pas le Point de Rupture comme attaque — elle l'utilise comme terminaison, après que toutes les étapes de préparation sont complètes.`,
      },
      {
        nom: 'Corridor Mort',
        type: 'sort_situationnel',
        elements: ['Spectre'],
        description_gameplay: `Zyress efface les résidus spectraux de son passage dans une zone délimitée — elle et les éléments qu'elle a touchés n'ont "pas été là" pour une lecture spectrale suivante. Durée de l'effet : 20 minutes. Zone : jusqu'à 50 mètres linéaires.`,
        description_lore: `Son outil de sortie de situation. Après une résolution, elle utilise le Corridor Mort pour effacer sa signature de passage. Un Élu Spectre qui analyserait la zone ensuite trouverait les résidus de la cible mais pas les siens. Elle ne peut pas effacer ce que des témoins oculaires ont vu — mais il n'y a pas de témoins dans ses missions réussies.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Zyress — silhouette calme',
      description: `Portrait 3/4 d'une femme de 41 ans, Homme-Lien des déserts, peau brun pâle nette, yeux brun-gris avec une très légère luminosité dans les iris. Aucune cicatrice visible. Expression neutre, attentive — regard qui enregistre sans montrer qu'il enregistre. Bracelet de cuir au poignet gauche visible, trois nœuds. Tenue administrative Convergence sans les marqueurs de contribution habituels. Fond sombre, éclairage minimal, demi-ombre. Style : réaliste, minimaliste, tension dans l'absence d'expression.`,
    },
    {
      type: 'lore_scene',
      titre: 'Les quarante pages',
      description: `Zyress assise à une table basse, dans une pièce sobrement éclairée, tenant un cahier de pages manuscrites. Elle lit. La page qu'elle tient est dense de texte. Son expression est celle de quelqu'un qui lit quelque chose d'intellectuellement sérieux — légère concentration, pas de réaction émotionnelle visible. Sur la table à côté : un dossier de mission fermé. La lumière vient d'une source unique, latérale, qui éclaire le texte et laisse son visage dans l'ombre. Style : narratif, intérieur, tension dans ce qu'on ne voit pas.`,
    },
    {
      type: 'action_signature',
      titre: 'Estompe',
      description: `Zyress debout dans un couloir semi-obscur, légèrement translucide — son corps en état d'Estompe produit un flou doux de sa silhouette, comme si la lumière hésite à définir ses contours. Les détails sont encore visibles mais imprécis. Elle regarde dans une direction hors-cadre. Ses mains sont à ses côtés, décontractées. Style : effets de lumière sur la translucence, réalisme altéré, ombre utilisée activement.`,
    },
  ],

  lore_long: `Il y a une erreur courante que les gens font en pensant aux gens comme Zyress : ils supposent que la paix qu'elle porte vient de l'absence de doute.

Ce n'est pas ça.

La paix qu'elle porte vient du fait qu'elle a posé les questions, qu'elle y a trouvé des réponses qu'elle trouve adéquates, et qu'elle a ensuite rangé les questions dans des compartiments distincts de ses journées. Elle n'est pas sans doute. Elle est avec des doutes soigneusement stockés.

Ce n'est pas la même chose. Mais de l'extérieur, ça ressemble à la même chose.

---

Elle a grandi à Virex dans les années où les anomalies commençaient — une ville qui cartographiait ses propres impossibilités avec la philosophie pragmatique des Hommes-Liens, fondamentalement indifférents à l'idée qu'une chose soit possible ou impossible dès lors qu'elle existait. Le feu coexistait avec l'eau dans un parc de deux cents mètres carrés. On avait mis des panneaux explicatifs.

Elle aimait les panneaux explicatifs. Quelque chose existait, quelque chose de compliqué existait, et au lieu d'en faire une métaphore ou une catastrophe, on écrivait ce qui existait sur un panneau et on le plantait dans le sol pour que les gens puissent le lire et continuer.

Elle avait grandi avec un élément Spectre qui lui donnait accès à des couches d'information que la plupart des gens ne percevaient pas, et un élément Combat qui lui donnait accès à des capacités d'action que la plupart des gens n'avaient pas. Elle avait identifié très tôt que cette combinaison était utile dans un contexte spécifique : les situations où quelqu'un devait faire quelque chose que personne d'autre ne pouvait faire sans être vu.

Elle était bonne dans ce travail. Elle avait commencé à l'âge de vingt-deux ans.

---

Sa mère s'était inquiétée. Pas du travail — de son absence de réaction au travail. Les gens normaux rentrent à la maison et ils ont besoin de quelque chose : de parler, de boire, de silence, d'être touchés, de regarder quelque chose de léger pour contrebalancer ce qu'ils ont vu. Zyress rentrait à la maison et mangeait ce qu'elle avait préparé à l'avance, lisait un rapport, dormait ses heures.

Elle avait essayé d'expliquer à sa mère : elle n'avait pas de contrebalance à faire parce qu'il n'y avait pas de poids. Ce n'était pas de l'insensibilité. C'était de la précision. Elle faisait un travail, le travail était fait, et la journée suivante était une journée différente.

Sa mère n'avait pas été convaincue. Zyress avait admis que sa formulation n'était peut-être pas exacte. Ce qu'elle voulait dire — sans le mot qu'elle n'avait pas encore à l'époque — c'est qu'elle avait des compartiments. Et que les compartiments tenaient.

Ce mot : compartiments. Elle ne l'avait pas encore.

Elle l'avait maintenant. Elle s'en servait pour désigner les endroits mentaux où elle rangeait les choses qui nécessitaient une gestion séparée du reste de sa vie fonctionnelle. Les compartiments tenaient. C'est ce qu'elle estimait essentiel.

---

La Convergence l'avait recrutée avec honnêteté, ce qu'elle avait apprécié.

Ils lui avaient dit exactement ce qu'ils voulaient. Un rôle qui n'existait pas officiellement, dans une organisation dont la survie dépendait de secrets dont certains membres finissaient par savoir trop. Une personne capable de résoudre ces situations proprement. Proprement avait un sens précis dans ce contexte, et ils n'avaient pas utilisé de métaphore pour l'éviter.

Elle avait posé deux questions. La première : comment définissaient-ils "trop" — quel était le seuil. La deuxième : y avait-il une procédure d'appel interne avant décision.

Ils avaient répondu aux deux. Pas parfaitement — les critères étaient partiellement subjectifs, la procédure d'appel avait des limites. Mais ils avaient répondu.

Elle avait accepté.

---

Les six premières résolutions avaient toutes eu en commun une transgression active. Des gens qui avaient fait quelque chose — vendu, révélé, contacté, divulgué. Elle n'avait aucun problème avec ces missions. La logique était claire : l'organisation existait avec un degré de confidentialité nécessaire à son fonctionnement, des membres avaient violé cette confidentialité de façon active, les conséquences s'en suivaient.

Le 7e avait été différent.

Pas une transgression active. Des pensées, mises sur papier, montrées à des collègues dans un contexte privé.

Elle avait reçu les quarante pages en pièce annexe. Elle les avait lues, comme toujours — comprendre la psychologie du sujet améliorait l'approche. Elle avait pris deux heures pour les lire avec attention.

Ce qu'elle avait trouvé : un raisonnement cohérent. Des questions sur le consentement des sujets de Drain qui n'étaient pas rhétoriques. Des questions sur ce que "redistribution" signifiait réellement selon les bénéficiaires versus les pourvoyeurs. Des questions sur ce que les membres étaient en droit de ne pas savoir sur ce à quoi ils contribuaient.

Ces questions avaient des réponses. Certaines réponses dans le texte étaient pertinentes. Il avait mal évalué certaines contraintes opérationnelles — manque d'information sur certains aspects. Mais sur les principes, il avait posé des questions raisonnables d'une manière raisonnable.

Elle avait exécuté la mission.

La résolution avait été sa meilleure techniquement — elle l'avait constaté dans son rapport d'analyse. Une qualité d'exécution inversement proportionnelle à la difficulté du contexte, comme si la difficulté du contexte avait produit une précision supplémentaire.

Elle avait mis ça dans un compartiment.

Le compartiment s'appelait : *la question de ce qui justifie l'application du seuil*.

Elle ne l'avait pas encore ouvert.

---

Khorath était différent. Khorath était quelqu'un qu'elle connaissait. Pas un ami — la Convergence ne favorisait pas les amitiés de travail dans son département, pour des raisons évidentes — mais quelqu'un qu'elle avait vu travailler sur le terrain, dont elle avait lu les rapports, qui lui semblait être précisément le type d'agent que la Convergence produisait à son meilleur quand les conditions étaient bonnes.

Les conditions pour Khorath s'étaient dégradées.

Elle l'avait vu s'asseoir dehors pendant la réunion de débriefing et regarder les étoiles pendant deux heures. Elle avait lu dans ce geste quelque chose qu'elle connaissait : une personne qui avait déjà décidé quelque chose intérieurement sans encore savoir quoi en faire.

Elle lui avait donné trois mois. C'était son évaluation professionnelle.

Elle espérait sincèrement qu'il trouverait comment continuer à fonctionner sans franchir quoi que ce soit. Pas par compassion — elle était honnête avec elle-même sur ça. Parce qu'un Khorath qui continuait à travailler était préférable à un Khorath dans son dossier.

Et parce que si Khorath finissait dans son dossier, le compartiment *la question de ce qui justifie l'application du seuil* allait peut-être s'ouvrir.

Elle n'était pas certaine que les compartiments tiendraient toujours.

Elle n'avait jamais dit ça à voix haute. Elle ne savait pas encore si ça méritait d'être dit.`,
};

export default lore;
