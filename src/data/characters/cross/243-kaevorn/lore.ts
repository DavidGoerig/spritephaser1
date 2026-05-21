// ============================================================
//  KAEVORN — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 243 | Roche/Sol | Peuple des Sables | Convergence | Spécialiste
//  Arc : L'Avatar — Géologue qui identifie les sites de Drain
//  Rôle : Complice par habitude — a appris à ne pas questionner
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 243,
  nom: 'Kaevorn',
  element: 'Roche',
  element2: 'Sol',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-treize, massif et dense — la constitution d'un géologue qui passe du temps à creuser, soulever, déplacer. À quarante-sept ans Kaevorn a les mains d'un homme qui travaille avec des roches depuis vingt ans : larges, calleuses, avec une précision paradoxale dans les doigts pour quelqu'un d'aussi massif. Il est le genre de personne physiquement imposante qui occupe peu de place psychologiquement.`,
    peau: `Brun cuivré foncé, hâlé uniformément, couvert d'une fine couche de poussière de roche permanente qui s'installe dans les plis. Ses ongles sont courts et propres — une habitude de terrain pour éviter les contaminations dans les échantillons. Il a des rides profondes autour des yeux, d'un homme qui passe du temps dans des conditions de lumière difficiles.`,
    yeux: `Brun-ocre, la teinte caractéristique des Élus Roche à expérience avancée — une solidité dans le regard, comme si ses yeux étaient plus denses que la normale. Il regarde les terrains plus que les personnes.`,
    vetements: `Tenue de terrain géologique — résistante, nombreuses poches pour les instruments et les échantillons, bottes renforcées aux pointes pour le travail en roche difficile. Il porte sur lui en permanence un marteau géologique, plusieurs loupes de différents grossissements, et deux carnets d'échantillon. Ce sont ses seules possessions auxquelles il tient.`,
    signes_particuliers: `Il parle des roches comme d'autres parlent de gens — avec une familiarité qui suppose de l'intérêt de la part de son interlocuteur. Un granite de Keth-Sarven est différent d'un granite de Vyr-Khel, et il peut expliquer pourquoi pendant vingt minutes sans perdre le fil. Les gens qui l'ont dans leur équipe savent que c'est une qualité professionnelle exceptionnelle et une qualité sociale qui nécessite de l'indulgence.`,
  },

  psychologie: {
    dominante: `Kaevorn aime les roches. C'est simple, central, et il n'en a pas honte. La géologie des déserts est un monde suffisamment vaste pour occuper une vie entière, et il y a mis la sienne. La Convergence lui donne les moyens de faire ça à une échelle qu'il n'aurait jamais pu atteindre seul — équipement, équipes, accès à des zones difficiles, temps pour l'analyse.

    En échange, il sélectionne les sites. Il identifie les localisations géologiques qui correspondent à des critères que la Convergence lui fournit. Il transmet les coordonnées. Ce qu'on fait ensuite avec ces coordonnées n'est pas son département.`,
    mecanisme_de_defense: `Il a appris à ne pas reposer la question. Il l'a posée une fois, il y a sept ans. On lui a répondu "redistribution" avec suffisamment de détail pour que ça soit plausible. Il a accepté ça. Il n'a pas reposé la question parce que la réponse était cohérente avec ce qu'il voulait croire, et parce que reposer la question signifiait risquer de recevoir une réponse différente.

    Ce mécanisme est différent d'Orveth (qui choisit activement de ne pas assembler les morceaux). Kaevorn n'a pas les morceaux — il a décidé de ne pas les chercher. Ce n'est pas de l'ignorance volontaire sur ce qu'il voit. C'est une décision de ne pas regarder au-delà de son périmètre.`,
    contradiction_interne: `Il est scrupuleux dans son travail géologique au point d'être difficile à satisfaire — ses standards pour la précision des données de site sont élevés, et il retravaille souvent ses propres analyses si quelque chose lui semble insuffisamment certain. Cette rigueur professionnelle coexiste avec une absence totale de rigueur sur la finalité de ce qu'il produit.

    Le même homme qui refait une analyse parce que ses marges d'erreur ne sont pas satisfaisantes ne pose pas de question sur ce qu'on fait avec ses résultats.`,
    rapport_aux_autres: `Il s'entend bien avec les gens qui s'intéressent à son travail ou qui le laissent travailler. Khorath est dans la première catégorie — il a posé des questions sur les conditions géologiques des sites de façon réelle, pas protocolaire. Kaevorn a apprécié ça. Sykavel est dans la seconde — elle reçoit ses données, envoie des paramètres, et ne remplit pas l'air de questions superflues.

    Razhal est dans une troisième catégorie : quelqu'un qui comprend ce dont il a besoin pour travailler et le lui fournit sans friction. C'est suffisant pour une relation de travail fonctionnelle.`,
    vision_du_monde: `Les roches ne mentent pas. C'est sa conviction fondamentale — la géologie est un système honnête, où les strates racontent ce qui s'est passé et les formations répondent à des lois précises. Il fait confiance aux systèmes honnêtes. Les systèmes humains sont différents, plus difficiles à lire, avec des couches qu'il n'a jamais développé les outils pour analyser.

    La Convergence est un système humain. Il a décidé, à un moment qui n'est plus précisément localisable dans sa mémoire, de lui faire confiance de la même façon qu'il fait confiance à une formation géologique bien cartographiée. Il ne le questionne plus.`,
  },

  histoire: {
    enfance: {
      titre: 'La roche comme premier langage',
      contenu: `Kaevorn venait d'une zone des Déserts à haute concentration minérale — pas une mine, une région naturellement riche qui avait attiré plusieurs générations de géologues indépendants. Son grand-père avait été l'un d'eux. Son père aussi. Il avait passé son enfance à apprendre les noms des formations avant les noms des familles du village.

      Son élément Roche était venu à onze ans sans surprise — il avait pratiquement commencé à communiquer avec les roches avant que son élément soit identifiable, et la manifestation élémentaire n'avait été qu'une formalisation de quelque chose qui existait déjà. L'élément Sol à seize ans, plus conscient, lui avait donné la dimension systémique — comprendre non seulement les roches individuelles mais les systèmes de pression et de force qui les avaient créées.

      Il avait rejoint la Convergence à trente ans après dix ans de travail indépendant. Ils lui avaient offert l'accès à des terrains qu'un géologue indépendant ne pouvait pas atteindre.`,
    },
    arrivee: {
      titre: 'Le bon terrain et la question posée une fois',
      contenu: `Ses premières années à la Convergence avaient été consacrées à cartographier des formations géologiques dans les régions inaccessibles des Déserts — des zones de haute concentration élémentaire que personne n't avait documentées de façon complète. C'était le meilleur travail géologique de sa vie. Il avait produit des données que les géologues utiliseraient pendant des décennies.

      Puis les critères avaient changé légèrement. On lui demandait maintenant de chercher des sites spécifiques — des localisations avec des caractéristiques particulières qu'on lui avait fournies sous forme de paramètres techniques. Ces paramètres correspondaient à des zones à haute concentration élémentaire d'un certain type, avec des caractéristiques d'accessibilité et d'isolement particulières.

      Il avait identifié son premier site selon ces critères et avait demandé à Razhal ce qui allait s'y passer. "Redistribution des flux élémentaires locaux — réactivation des terres mortes dans un rayon de vingt kilomètres." C'était plausible. C'était exactement ce qu'on lui avait dit que la Convergence faisait.

      Il n't avait pas reposé la question. Sept ans plus tard, il envoyait les données de site à Sykavel de façon routinière, et elle lui renvoyait des paramètres d'opération. Il ne demandait pas à quoi servaient les paramètres.`,
    },
    premier_conflit: {
      titre: 'Le suivi qui n\'existait pas',
      contenu: `Il y a cinq ans, il était repassé par un site qu'il avait identifié trois ans plus tôt — un passage géologique pour une opération différente. Il avait regardé le terrain autour du site.

      Pas de redistribution visible. Pas de réactivation des terres. Le terrain était exactement comme avant. La formation géologique était intacte mais il y avait quelque chose de différent dans la signature élémentaire de la zone — une absence là où il y avait eu une présence.

      Il avait classé ça comme une variation naturelle. Les flux élémentaires dans les déserts pouvaient se déplacer sur des périodes de quelques années. Ce qu'il avait senti pouvait être ça.

      Il n'avait pas envoyé de rapport sur cette observation. Ce n'était pas dans son périmètre de mission.`,
    },
    revelation: {
      titre: 'Sykavel et la question technique',
      contenu: `Il y a quelques mois, il avait reçu de Sykavel une question inhabituellement précise sur les paramètres d'un site — des détails sur la structure de la formation en profondeur qu'elle demandait rarement. Il avait répondu en détail, parce que c'était son travail.

      Quelque chose dans la formulation de ses questions suggérait qu'elle cherchait à vérifier quelque chose plutôt qu'à compléter des données opérationnelles. C'était une différence subtile mais Kaevorn passait sa vie à identifier des différences subtiles dans des formations qui ressemblaient à d'autres.

      Il n'avait pas demandé ce qu'elle cherchait à vérifier. Ce n'était pas son département.

      Mais la façon dont elle posait les questions avait laissé quelque chose — comme quand on analyse une roche et qu'on trouve une inclusion qu'on ne sait pas encore identifier. Elle était là. Il ne savait pas ce qu'elle signifiait.`,
    },
    etat_actuel: {
      titre: 'Les données de Khorath et la routine',
      contenu: `Il travaille avec Khorath sur les opérations de terrain depuis quatre ans. Khorath lui explique les contraintes opérationnelles des sites — accessibilité, sécurité, timing — et Kaevorn optimise ses sélections géologiques en conséquence. C'est une collaboration efficace.

      Une fois, il y a six mois, Khorath lui avait posé une question sur la signature géologique d'un site après une opération. La façon dont la question était formulée suggérait que Khorath n'était pas satisfait de l'état du terrain post-opération. Kaevorn avait répondu techniquement.

      Khorath avait dit "merci" et n'avait pas posé de question de suivi.

      Kaevorn n'avait pas cherché à comprendre ce que Khorath cherchait à vérifier. Ce n'était pas son département. Il avait trois nouveaux sites à évaluer la semaine suivante, et les analyses prenaient du temps.

      La roche ne ment pas. Les systèmes humains sont plus difficiles. Il a décidé, à un moment qui n'est plus localisable, de ne pas essayer de les lire.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Identifie les sites géologiques pour les Drains depuis 7 ans. A posé la question sur la finalité une fois et accepté "redistribution" comme réponse. Représente la complicité par habitude : le périmètre professionnel comme excuse permanente.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Kaevorn est la première étape technique du Protocole — il fournit les sites. Sans sa sélection géologique, les opérations ne pourraient pas avoir lieu. Sa complicité est la plus passive du groupe : pas de fascination, pas de calcul, juste l'habitude d'un homme qui a défini son périmètre et s'y tient.`,

  relations: [
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'mentor',
      description: `Lui fournit les critères et reçoit ses analyses. Razhal comprend que la question sur la redistribution a été posée et répondue il y a sept ans, et que Kaevorn ne la reposera pas. Cette compréhension mutuelle non-dite est le fondement de leur collaboration.`,
    },
    {
      personnage_id: 235,
      nom: 'Khorath',
      type: 'allié',
      description: `Partenaire de terrain. Khorath a posé des questions réelles sur les conditions géologiques — une rareté. Kaevorn l'apprécie pour ça. Il n'a pas cherché à comprendre pourquoi Khorath posait ces questions avec une précision qui dépassait le besoin opérationnel apparent.`,
    },
    {
      personnage_id: 242,
      nom: 'Sykavel',
      type: 'contact_nécessaire',
      description: `Reçoit ses données de site, renvoie des paramètres d'opération. Communication technique, efficace, minimale. Depuis quelques mois, ses questions ont une qualité différente — de vérification plutôt que de complétion. Kaevorn l'a noté. Il n't a pas demandé ce qu'elle cherchait.`,
    },
  ],

  combat: {
    role_combat: `Combattant de terrain lourd — Roche pour la résistance et les projectiles, Sol pour la maîtrise de l'environnement géologique. Il est difficile à blesser et difficile à déplacer, mais lent. Son avantage est dans les terrains rocheux où il peut modifier l'environnement à son avantage.`,
    sorts: [
      {
        nom: 'Lecture Géologique',
        element: 'Sol',
        type: 'passif',
        description: `Passif permanent. Il lit la structure du terrain sous lui — fissures, zones de faiblesse, potentiel de modification. En combat, il anticipe les effondrements et les instabilités de terrain, et peut utiliser des zones que les autres éviteraient.`,
      },
      {
        nom: 'Projection de Roche',
        element: 'Roche',
        type: 'base',
        description: `Il extrait des fragments de roche du sol ou des murs et les projette avec précision. Plus le terrain est rocheux, plus les fragments sont nombreux et denses. Sa précision de géologue lui permet de viser les jointures d'armure et les points de vulnérabilité physique.`,
      },
      {
        nom: 'Carapace Minérale',
        element: 'Roche',
        type: 'situationnel',
        description: `Il durcit sa peau et ses vêtements avec une couche de cristaux minéraux — réduction des dégâts physiques pendant deux tours. L'effet est visible : il ressemble à une formation géologique en mouvement. La couche se brise à la fin de l'effet et les fragments peuvent blesser les ennemis adjacents.`,
      },
      {
        nom: 'Extraction de Formation',
        element: 'Sol',
        type: 'signature',
        description: `Sa technique professionnelle appliquée au combat : il identifie une structure géologique dans le terrain et l'extrait en entier — pilier de roche, plaque, formation cristalline. L'extraction crée un projectile massif ou un obstacle imprévu. Impossible dans un terrain plat sans roche ; décisif dans un terrain géologiquement riche.`,
      },
      {
        nom: 'Effondrement Contrôlé',
        element: 'Roche',
        type: 'ultime',
        description: `Il déclenche l'effondrement d'une zone de terrain dans un rayon large — pas une explosion, mais une réorganisation brutale de la géologie sur place. Les ennemis dans la zone sont enterrés partiellement, leurs mouvements bloqués, leurs sorts interrompus par l'instabilité soudaine. Lui-même est immunisé. Épuisant.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_terrain',
      description: `Homme de 47 ans, massif et dense, peau brun cuivré couverte de poussière de roche. Il est accroupi dans un terrain géologique — carnet d'échantillon ouvert, loupe dans la main, regard concentré sur une formation rocheuse. Ses mains larges manipulent un fragment de roche avec une précision paradoxale. Expression de concentration absolue sur le sujet immédiat — pas d'attention pour ce qui n'est pas la roche devant lui.`,
    },
  ],

  lore_long: `Il y avait des granites, et il y avait les autres roches. Cette distinction était la première chose qu'il avait apprise de son grand-père, et elle avait structuré sa façon de voir le monde depuis lors.

Ce n'était pas une métaphore. Le granite était une catégorie précise — sa composition, sa structure cristalline, les conditions de pression et de température qui avaient créé ses grains caractéristiques. Un granite de Keth-Sarven était différent d'un granite de Vyr-Khel à trente-sept paramètres mesurables, et ces paramètres racontaient des histoires différentes sur deux régions, deux histoires géologiques, deux héritages de forces accumulées.

La roche ne mentait pas. C'était sa conviction fondamentale, celle qui rendait le travail géologique satisfaisant d'une façon que rien d'autre ne l'était pour lui.

*

Il avait posé la question une fois. Il y a sept ans, après son premier site identifié selon les nouveaux critères.

Razhal lui avait répondu avec une précision qui avait l'air géologique — redistribution des flux, réactivation des terres, rayon de vingt kilomètres. C'était plausible. C'était exactement le type d'application que les géologues élémentaires avaient toujours rêvé de faire dans les Déserts.

Il n'avait pas reposé la question parce que la réponse correspondait à ce qu'il voulait que la réponse soit. Et parce que reposer la question risquait de produire une réponse différente.

Cette distinction — entre ne pas reposer parce qu'on est satisfait et ne pas reposer parce qu'on a peur d'une autre réponse — était quelque chose qu'il n'analysait pas. Il était géologue. Il analysait les roches.

*

Il était repassé par un site trois ans après l'avoir identifié. Il avait regardé le terrain. Pas de redistribution visible. Pas de réactivation. La signature élémentaire de la zone avait changé — une absence là où il y avait eu une présence.

Il avait classé ça comme une variation naturelle des flux. C'était possible. Les flux élémentaires dans les déserts se déplaçaient sur des périodes de quelques années.

Il n'avait pas envoyé de rapport. Ce n'était pas dans son périmètre.

Ce n'était peut-être pas une variation naturelle. Il ne l'avait pas vérifié. La roche ne mentait pas — mais il fallait poser les bonnes questions à la roche. Et poser les bonnes questions à ce site aurait nécessité de l'examiner avec des instruments calibrés pour détecter des signatures d'extraction élémentaire concentrée.

Il n'avait pas apporté ces instruments. Ce n'était pas son périmètre de mission du jour.

Il avait ses trois nouveaux sites à évaluer la semaine suivante.`,
};

export default lore;
