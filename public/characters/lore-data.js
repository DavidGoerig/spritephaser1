// ============================================================
//  lore-data.js — Données narratives complètes par personnage
//  Source de vérité : les fichiers src/data/characters/*/lore.ts
//  Ce fichier est mis à jour après chaque session de rédaction.
//  Clé = id numérique du personnage.
// ============================================================

export const LORE = {

  // ── 1 · BRASIA ────────────────────────────────────────────
  1: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Les deux partis et la troisième option',
        texte: `Brasia est née à Khar-Vurn, dans le Dixième District de Forge — ni le quartier ouvrier bruyant du Parti du Feu, ni le district régulé du Parti de l'Acier, mais la zone tampon entre les deux, là où les ingénieurs de maintenance vivaient sans appartenir entièrement à aucun camp.

Son père, Harrak, était calibreur thermique au service des deux factions simultanément. Sa mère était morte en couches, d'une complication que les Soigneurs des Ordres auraient pu traiter si les délais d'enregistrement impérial n'avaient pas retardé leur accès. Harrak ne l'avait jamais dit directement à Brasia, mais elle avait lu les documents à quinze ans.

Ce qu'elle avait appris des deux partis, enfant : le Feu valorisait l'innovation. L'Acier valorisait la structure. Ce qu'aucun des deux ne lui avait appris, et qu'elle avait découvert seule : que les corps blessés ont besoin des deux simultanément.`,
      },
      {
        titre: 'La chaleur qui répare',
        texte: `Le Feu de Brasia s'est manifesté à douze ans. Son voisin Thrash s'était brûlé la main sur un conduit mal isolé. Brasia avait posé sa paume sur la blessure — réflexe de la fille du calibreur thermique. La chaleur qui en était sortie était différente de tous les flux qu'elle connaissait : propre, directe, précise.

La brûlure n'avait pas complètement disparu. Mais elle avait réduit. La peau avait récupéré une qualité que les brûlures de second degré n'ont normalement pas.

L'Ordre des Soigneurs avait été contacté le lendemain. Ce qu'elle avait retenu de cette journée : la chaleur pouvait réparer si elle était exactement à la bonne intensité, au bon endroit, pendant le bon temps. C'est une description de la médecine en général. C'est aussi une description de la politique.`,
      },
      {
        titre: 'Le décret et les treize',
        texte: `Le décret est arrivé lors d'une réunion ordinaire de l'Ordre des Soigneurs, un mardi, par courrier officiel de la Citadelle du Voile. Brasia avait trente-cinq ans et était praticienne senior depuis sept ans.

Le décret était clair : les Élus non enregistrés ne pouvaient plus recevoir de soins prioritaires. Les urgences étaient incluses. Elle avait trois Élus non enregistrés en soins actifs ce jour-là — dont un enfant de onze ans en choc élémentaire, avec quarante-trois pour cent de mortalité en douze heures sans intervention.

Elle avait dit non. Pas théoriquement. En acte, ce soir-là, en terminant de soigner les trois patients. Puis elle avait identifié les treize non-enregistrés en danger dans son réseau. Elle les a sortis en huit jours, via les corridors thermiques de Khar-Vurn, avec la complicité d'une heure de Velindra qui avait détourné les détecteurs thermiques.

Les Capteurs avaient commencé à la chercher quarante-huit heures après. Les Dissidentes l'avaient contactée avant eux.`,
      },
      {
        titre: 'Infrastructure',
        texte: `Brasia n'est pas une fugitive au sens romantique. Elle se déplace selon un calendrier précis. Elle n'a pas de base fixe — sept caches dans différents districts de Varkhôl, quatre points de contact hors région.

Thessandra maintient le réseau de soigneurs clandestins que Brasia a construit. Brasia forme. Thessandra gère. Ce qu'elle ne dit pas aux Dissidentes : elle ne travaille pas pour les Dissidentes. Elle travaille pour les blessés. Si l'Empire proposait une restauration des Ordres Soigneurs indépendants comme condition de paix, elle considèrerait la proposition sérieusement.

Ce matin, elle a reçu un message : Cendrix est à Khar-Vurn avec une unité de Capteurs. Elle demande des dossiers médicaux des années où Brasia était praticienne senior.`,
      },
      {
        titre: 'La question du guichet',
        texte: `Brasia ne veut pas renverser l'Empire. Elle veut quelque chose de plus petit et de plus difficile : qu'il existe, quelque part dans le monde, des structures de soin qui ne répondent à aucune autorité de redistribution.

Des Ordres Soigneurs dont la seule doctrine est de soigner ceux qui arrivent, dans l'ordre où ils arrivent, sans vérifier leur enregistrement. Elle sait exactement ce que l'Empire dirait en réponse — et elle sait que c'est partiellement vrai. Elle sait aussi que le système qu'il a substitué a produit le décret qu'elle a refusé.

Elle a quarante-six ans. Elle a peut-être vingt ans devant elle si elle fait attention. Ce qu'elle peut faire dans ce temps dépend de si Cendrix la trouve avant qu'elle trouve Cendrix.`,
      },
    ],

    sorts: [
      {
        nom: 'Flux Thermique',
        description_lore: `Ce que les Ordres Soigneurs appelaient la "technique Brasia" avant qu'elle soit officiellement classifiée. Une chaleur précise, jamais excessive, qui accélère la régénération naturelle des tissus sans brûler. Elle l'a développée en quinze ans de pratique médicale. Le document de classification impérial s'intitule "Méthode thermique de consolidation tissulaire, protocole BRS-7". Elle a trouvé ça à la fois ironique et satisfaisant.`,
      },
      {
        nom: 'Cage Braisée',
        description_lore: `Mise au point lors des huit jours de la sortie des treize Élus — une façon de créer une zone temporairement défendable dans un couloir thermique sans attirer l'attention visuelle. La chaleur rayonnante suffisait à dissuader sans flamme visible. Elle ne l'avait jamais utilisé en combat direct avant de rejoindre les Dissidentes. Elle avait sous-estimé l'efficacité défensive.`,
      },
      {
        nom: 'Résurrection Incandescente',
        description_lore: `Elle ne l'a utilisé que deux fois en onze ans de résistance. La première pour un Dissident qu'elle ne connaissait pas, père de trois enfants, qui avait pris un sort de glace dans le thorax. La deuxième pour Thessandra, dans une cache de Khar-Vurn, après une embuscade. Dans les deux cas, elle a passé les deux tours d'incapacité à regarder si ça avait fonctionné. Dans les deux cas, ça avait fonctionné.`,
      },
      {
        nom: 'Cautérisation de Terrain',
        description_lore: `Dérivée de la technique de traitement des gelures — chaleur modérée appliquée progressivement pour recirculer le sang. En inversion : la même chaleur appliquée à un adversaire ralentit les systèmes locomoteurs. Elle ne théorise pas le combat. Elle applique la biologie dans les deux sens.`,
      },
      {
        nom: 'Chaleur Cicatrisante',
        description_lore: `Elle ne s'en rend pas compte la plupart du temps. La chaleur qu'elle dégage naturellement est légèrement supérieure à la normale — effet secondaire d'une vie entière de canalisation continue. Les Dissidentes qui ont passé des nuits en cache avec elle rapportent que dormir à côté de Brasia est plus chaud qu'à côté d'un feu de camp ordinaire. Elle trouve ça anecdotique.`,
      },
    ],

    relations: [
      { personnage_id: 2, nom: 'Cendrix', type: 'Ennemi', texte: `Brasia ne déteste pas Cendrix. C'est la chose la plus compliquée de sa vie. Cendrix croit sincèrement au Voile d'Équité — Brasia l'a vue construire cette conviction pas à pas, avec une rigueur analytique qui forçait le respect. Ce n'est pas une fanatique aveugle. C'est quelqu'un qui a regardé les preuves disponibles et tiré des conclusions différentes. Le problème est que ces conclusions mènent à des actions que Brasia ne peut pas laisser se réaliser.` },
      { personnage_id: 10, nom: 'Thessandra', type: 'Disciple', texte: `La meilleure recrue que Brasia ait formée — précise, rapide, capable de prendre des décisions sous pression. Ce que Brasia ne lui a jamais dit : elle avait hésité à la former autant, précisément parce qu'elle était trop bonne. Thessandra a résolu ce problème seule en devenant invisible d'une façon que Brasia n'aurait pas conçue.` },
      { personnage_id: 8, nom: 'Velindra', type: 'Contact nécessaire', texte: `Velindra lui a accordé une heure de couverture thermique il y a onze ans, au prix de sa propre sécurité. Brasia ne sait pas si c'était de la conviction ou de la dette médicale. Elle n'a pas cherché à savoir. Velindra est encore en poste comme Régulateur — ce qui signifie qu'elle vit sous la peur de disparaître comme Veldris.` },
      { personnage_id: 7, nom: 'Kael', type: 'Contact nécessaire', texte: `Un des survivants du Quatrième District. Il n'a plus de faction — après la Rupture, il a vu suffisamment des deux camps pour refuser les deux. Il connaît les corridors thermiques de Khar-Vurn mieux que quiconque. Il lui a donné des informations trois fois depuis sa fuite. Il ne lui a jamais demandé ce qu'elle allait en faire.` },
    ],

    lore_long: `DE LA FORGE AU SILENCE
Un chapitre de la vie de Brasia, praticienne senior des Ordres Soigneurs (en retraite forcée)

—

I.

Le forgeron s'appelait Drehn et il niait avoir mal depuis le moment où Brasia avait franchi la porte de la cache. C'était ce que faisaient les gens du Parti du Feu — ils traitaient la douleur comme une information stratégique à ne pas divulguer aux parties adverses. Brasia n'était pas une partie adverse, mais elle comprenait le réflexe.

"La fracture est ouverte," dit-elle. Ce n'était pas une question.

Drehn regarda son radius avec le détachement de quelqu'un qui avait déjà accepté l'information et cherchait maintenant à savoir ce qu'elle impliquait. "Depuis hier soir."

"Et l'infection ?"

"J'ai nettoyé avec de l'alcool de forge."

"L'alcool de forge est à soixante-douze degrés. Tu l'as dilué ?"

Silence.

"Non," dit Brasia, répondant à sa propre question. Elle posa sa trousse sur la surface plane la plus proche — une section de tuyauterie en métal froid — et commença à déballer. Le sous-sol sentait le métal chaud et la sueur. Des tuyaux de chaleur géothermique couraient le long du mur, insuffisamment isolés. À Khar-Vurn, même les caches souterraines avaient de la chaleur.

"Tu m'as contactée il y a vingt-deux heures," dit-elle sans lever les yeux. "Pourquoi tu as attendu ?"

"J'espérais que ça passerait."

"Les fractures ouvertes ne passent pas."

"Je sais. J'espérais quand même."

Elle nettoya la plaie, évalua l'étendue de l'infection, calcula mentalement le temps de traitement, la quantité de ressources, la durée de convalescence minimale pour que Drehn puisse reprendre une fonction dans les réseaux du Parti du Feu. Ce n'était pas de la froideur. C'était du respect pour sa réalité — il avait besoin de savoir combien de temps il serait hors de combat.

Quand elle posa la main sur la fracture et commença à canaliser la chaleur, Drehn retint son souffle.

"Ça fait pas mal," dit Drehn, avec le ton de quelqu'un qui venait de trouver une erreur de calcul dans un document officiel.

"Non."

"Pourquoi ?"

"Parce que la douleur thermique nécessite un gradient rapide. Tu la brûles ou tu la glaces. Je fais ni l'un ni l'autre."

Drehn digéra ça. "C'est dans les manuels ?"

"C'était dans mes manuels. Le Voile d'Équité les a classifiés il y a neuf ans." Elle sentit quelque chose changer dans la pièce. "Continue à respirer normalement."

—

II.

Brasia avait connu l'Académie des Ordres Soigneurs à vingt ans. Elle était arrivée avec un dossier impeccable et une façon de poser des questions qui mettait certains professeurs mal à l'aise — pas parce qu'elle était arrogante, mais parce qu'elle cherchait la logique précise derrière chaque procédure.

Cendrix était là la même année. Pas dans la même formation — Cendrix rejoignait l'Académie d'Intelligence. Mais les deux institutions partageaient une aile résidentielle, une bibliothèque et une cantine.

Elle se souvenait précisément de la première conversation politique. Elle était à une table avec un rapport sur les taux de guérison comparés. Cendrix s'était assise en face avec un dossier de cartographie des signatures élémentaires.

"Les taux sont faussés," avait dit Cendrix.

"Je sais. Pour quelle raison, selon toi ?"

"Les districts à forte présence impériale ont de meilleurs taux parce qu'ils reçoivent plus d'Élus Soigneurs enregistrés."

"Et ta solution est ?"

"Meilleure cartographie des besoins réels. Algorithmes d'affectation corrigés."

"Et si la cartographie révèle que certains besoins ne sont pas stratégiquement rentables à satisfaire ?"

Le silence avait duré trois secondes. "Alors la politique doit décider si elle accepte cette conséquence."

"Et si elle l'accepte ?"

"Alors les Ordres Soigneurs documentent le coût et maintiennent la pression pour une révision."

"C'est une réponse d'analyste."

"Je suis une analyste."

"Je sais. Moi je suis une praticienne. La différence est que toi tu identifies les problèmes au niveau du système, et moi je les gère au niveau de la personne en face de moi. Nos métiers ne sont pas en désaccord. Sauf le jour où le système décide que la personne en face de moi n'a pas droit aux soins."

Cendrix n'avait pas répondu à ça ce soir-là. La conversation avait duré en réalité trois ans.

—

III.

Le décret était arrivé un mardi. Brasia avait lu le texte deux fois.

Elle avait les trois patients non-enregistrés dans les salles de l'Ordre ce jour-là. L'enfant de onze ans en choc élémentaire. Quarante-trois pour cent de mortalité en douze heures sans intervention. Elle avait vérifié le chiffre parce qu'elle le connaissait mais le voulait confirmé.

"Non," dit-elle.

La réunion avait continué un moment après ça. Les autres praticiens avaient regardé dans des directions différentes. Le directeur de l'Ordre avait noté sa déclaration avec le soin particulier de quelqu'un qui veut que la trace soit précise.

Elle était retournée aux salles.

Les huit jours qui avaient suivi avaient la texture des choses faites sans avoir décidé de les faire. Identifier les treize non-enregistrés à risque. Cartographier les corridors thermiques que son père lui avait appris. Contacter Velindra avec une précision calculée.

Velindra avait regardé les treize partir dans l'obscurité du corridor. Elle avait dit : "Je n'ai rien vu." Brasia avait répondu : "Je sais."

Les Capteurs avaient commencé à chercher Brasia quarante-huit heures après la sortie des treize. Les Dissidentes du Voile l'avaient contactée en vingt-quatre heures.

—

IV.

Elle n'avait pas immédiatement accepté. Elle avait pris cinq jours — cachée chez Kael, le forgeron du Quatrième District qui n'appartenait à plus rien depuis la Rupture Thermique.

Ce qu'elle avait dit aux Dissidentes lors du premier contact : "Je soigne. Si ce que vous faites crée des blessés que vous voulez que je traite, je peux faire ça. Si vous attendez que je croie que votre cause est juste, vous attendez une chose que je ne suis pas en position de vous accorder — je ne sais pas encore si vous avez raison."

La réponse avait été : "Nous ne demandons pas votre conviction. Nous demandons vos mains."

C'était une réponse honnête. Elle avait accepté.

Onze ans plus tard, elle était toujours là. Sa conviction n'avait pas fondamentalement évolué : elle ne savait pas encore si les Dissidentes avaient raison au sens absolu. Elle savait qu'elles avaient besoin de soins et qu'elle pouvait les fournir.

—

V.

Drehn respira régulièrement pendant les vingt minutes que dura le traitement. Quand elle retira les mains, la fracture était stabilisée — pas guérie, mais alignée.

"Tu peux bouger les doigts," dit-elle.

"Oui."

"Immobiliser le bras pendant six jours. Pas de charge."

Elle prit sa trousse. À la porte du sous-sol, elle s'arrêta — vieille habitude. Le couloir était vide. Khar-Vurn, à trente mètres au-dessus, continuait de fonctionner comme elle avait toujours fonctionné.

Elle pensa à Cendrix. Depuis le message du matin, la question revenait entre deux gestes. Cendrix était venue à Khar-Vurn avec une unité. Elle demandait des dossiers médicaux des années 47 à 52. Elle était efficace, précise, analytique — les mêmes qualités qu'à vingt ans dans la cantine de l'Académie. Elle croyait encore au Voile d'Équité. Brasia ne doutait pas de ça.

Ce qu'elle ne pouvait pas résoudre proprement : elle comprenait pourquoi Cendrix y croyait.

—

VI.

Elle rangea les derniers instruments.

"Tu pars quand ?" demanda Drehn.

"Ce soir."

"La ville est plus surveillée que d'habitude."

"Je sais."

Le fragment de la Forge Silencieuse était froid contre sa poitrine, comme toujours. Les gens qui ne venaient pas de Khar-Vurn s'attendaient à ce qu'il soit chaud. Mais la Forge Silencieuse n'était pas un souvenir de chaleur. C'était un souvenir d'arrêt. Le moment où quelqu'un avait décidé que certaines personnes pouvaient mourir dans l'équilibre qu'on leur imposait.

Elle souffla doucement — pas un soupir, juste une régulation de la pression dans les poumons. Puis elle entra dans le couloir.

Elle monta les marches vers la rue et sentit la chaleur de Khar-Vurn l'envelopper. Personne à Khar-Vurn ne savait jamais vraiment ce qui allait se passer. On apprenait à fonctionner avec ça. C'était peut-être, pensa-t-elle en traversant la rue sans se presser, la seule vraie leçon que Khar-Vurn avait à donner.`,
  },

  // ── 67 · AREV ─────────────────────────────────────────────
  67: {
    timeline_position: { an: -1, lieu: "Ash'Rael", arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Le plateau Makhet',
        texte: `Arev est née sur le plateau Makhet — une étendue de sable et de roche calcaire à deux jours de marche au sud des premières villes d'Ash'Rael, là où la Convergence avait depuis longtemps cessé d'envoyer des représentants réguliers parce que le plateau ne produisait plus suffisamment pour justifier le coût logistique.

Sa famille cultivait du sorgho et des légumineuses résistantes dans un sol qui devenait chaque année un peu plus gris. Le plateau n'avait pas eu d'Élu Sol depuis soixante-trois ans, et les sols sans Élu Sol meurent d'une façon que personne ne voit venir parce que ça prend des décennies.

Sa sœur Shael est morte à dix-sept ans d'une infection pulmonaire liée aux spores de sol dégradé — une maladie qu'un Élu Sol aurait pu prévenir en deux heures de travail mensuel. Arev avait quatorze ans. Ce qu'elle a compris ce jour-là : il y a des morts qui ont une adresse.`,
      },
      {
        titre: 'Les six semaines',
        texte: `La Convergence est arrivée au plateau Makhet quand Arev avait dix-neuf ans. Deux Élus Sol, une coordinatrice, six semaines d'intervention. Arev les a suivis partout — pas officiellement, parce qu'elle avait besoin de comprendre.

Ce qu'elle a vu : un travail lent, systématique, épuisant. À la fin de la quatrième semaine, les deux Élus étaient épuisés d'une façon qui ne ressemblait pas à de la fatigue ordinaire. La coordinatrice avait noté dans ses registres : "État des Élus : acceptable."

Ils sont repartis en disant que d'autres zones avaient aussi besoin d'eux. Arev a regardé leur caravane disparaître dans la chaleur du désert. Elle a compris deux choses simultanément : que ce qu'ils avaient fait était nécessaire, et que ce qu'ils avaient donné avait un coût réel. Elle a rejoint la Convergence à vingt ans.`,
      },
      {
        titre: 'Sa propre manifestation',
        texte: `Le Sol d'Arev s'est manifesté à vingt-trois ans, lors d'une tempête de sable qui englobissait un camp de transit. Elle évacuait des familles quand la dune de tête a commencé à engloutir l'entrée. Elle a posé la main sur le sol, et le sol a répondu.

Ce n'était pas une explosion. C'était une structure — la dune s'est compactée en quelques secondes, solidifiée depuis sa base, formant une barrière de sable durci. Treize personnes ont eu le temps de passer.

Elle est restée à genoux après ça, les mains contre la roche. Elle a senti quelque chose quitter son corps — une diminution. La Convergence a répondu avant l'Empire. Elle a refusé la redistribution impériale. Elle est restée à Ash'Rael.`,
      },
      {
        titre: 'Coordinatrice de zone',
        texte: `Arev gère la logistique de redistribution pour trois zones désertiques d'Ash'Rael depuis quinze ans. Elle organise les rotations d'Élus, tient les registres de chaque session, coordonne les transports, évalue les états de récupération.

Elle a présenté des propositions de réforme du système de volontariat huit fois au coordinateur régional. Contrats à durée limitée avec clause de retrait, séparation des décisions d'aide sociale et de volontariat. Chaque fois : "intéressant, sera examiné par les instances supérieures." Ça fait deux ans pour la dernière.

Ce matin, elle doit rencontrer Tarev — un Élu Sol de vingt-quatre ans dont le formulaire de volontariat a été signé trois jours après l'acceptation de sa famille dans le programme d'aide alimentaire de la Convergence.`,
      },
      {
        titre: "L'équation qui résiste",
        texte: `Arev veut construire un système de redistribution qui n'exige pas de coercition implicite. Elle sait pourquoi ses propositions n'avancent pas : un système de volontariat sans pression implicite couvrirait peut-être soixante-dix pour cent des besoins. Les trente pour cent restants n'auraient pas de solution dans le cadre de la doctrine actuelle. Et la Convergence ne peut pas admettre cette limite.

Elle continue à tenir ses registres. L'officiel et le privé, même format, couvertures différentes. Dans le registre à part : les coïncidences de dates, les mains qui tremblaient, les yeux qui ne regardaient pas exactement dans la bonne direction quand ils disaient oui.

Ce soir, dans le registre à part : "Saeved a choisi. Je veux que Tarev puisse choisir. Ce n'est pas la même chose que ce que je coordonne en ce moment."`,
      },
    ],

    sorts: [
      {
        nom: 'Fondation Stabilisée',
        description_lore: `Elle l'utilise presque par réflexe — quarante ans de vie dans un désert où le sol peut céder sous les pieds lui ont donné un rapport instinctif à la stabilité du terrain. Ce n'est pas un sort offensif. C'est une habitude de praticienne de terrain qui a appris à toujours trouver d'abord où se poser solidement.`,
      },
      {
        nom: 'Extraction du Terreau',
        description_lore: `La métaphore directe du Drain, appliquée au terrain plutôt qu'aux personnes. Elle a développé ça en observant comment les Élus Sol du plateau Makhet redistribuaient — en prélevant ce qui existait en excès dans un endroit pour le transférer là où c'était déficient. La même logique. Une direction différente.`,
      },
      {
        nom: 'Registre de Zone',
        description_lore: `Issue de onze ans de coordination — elle a appris à lire une salle, un camp, une situation, et à identifier instantanément les déficits les plus critiques. Elle fait ça en combat comme elle fait ça dans ses registres, avec la même précision clinique et la même attention aux cas qui ne rentrent pas dans les cases.`,
      },
      {
        nom: 'Redistribution Géologique',
        description_lore: `Elle l'a utilisé sept fois en quinze ans, toujours en situations extrêmes. Chaque fois, elle a noté dans son registre interne que la Convergence demande exactement ça aux Élus qu'elle "convoque" — et que la différence entre son acte volontaire et le leur est que personne ne l'a forcée. Elle n'est pas certaine que les deux situations soient aussi différentes qu'elles le semblent.`,
      },
      {
        nom: 'Calcul de Zone',
        description_lore: `Elle ne peut pas voir quelqu'un en déficit et ne pas répondre. Ce n'est pas de la compassion au sens émotionnel — c'est une contrainte. Elle a grandi dans un déficit. Elle a vu ce que ça produit quand personne ne répond. Le Calcul de Zone est la formalisation de quelque chose qui existait en elle bien avant qu'elle devienne Élue.`,
      },
    ],

    relations: [
      {
        personnage_id: 43,
        nom: 'Graveth',
        type: 'Collègue Convergence',
        texte: `Convergence, croit dans la redistribution avec une conviction qui n'a pas les nuances d'Arev. Il pense que la Fosse Interdite pourrait être drainée pour redistribuer une énergie organique non-élémentaire. Arev trouve l'idée fascinante sur le papier et lui donne des nuits difficiles quand elle y réfléchit vraiment. Elle lui fait confiance sur le terrain. Elle ne lui a jamais montré son registre à part.`,
      },
      {
        personnage_id: 65,
        nom: 'Saeved',
        type: 'Fantôme / Saint fondateur',
        texte: `Le Premier Drain était volontaire. C'est le fondement de tout. Saeved a choisi de donner son énergie pour stabiliser une zone qui mourrait sans lui — et il est mort dans le processus. La Convergence en a fait un saint. Arev lui allume une bougie les soirs de bilan. Ce qu'elle pense à ces moments-là : que Saeved a choisi pour lui-même, et que le système qu'elle coordonne ne garantit pas toujours ça.`,
      },
      {
        personnage_id: 72,
        nom: 'Tarev',
        type: 'Contact nécessaire',
        texte: `Un Élu Sol de vingt-quatre ans dont le dossier de volontariat a été signé trois jours après l'acceptation de sa famille dans le programme d'aide de la Convergence. Elle ne lui a pas encore parlé. La session est dans deux heures. Elle a plusieurs façons de conduire cette session et une seule d'entre elles ressemble à la conversation qu'elle voudrait avoir.`,
      },
    ],

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

—

II.

Elle avait quatorze ans quand Shael était morte.

La maladie avait eu un nom compliqué — quelque chose qui signifiait en substance "minéraux du sol cristallisés dans les voies respiratoires" — mais le nom n'avait pas d'importance. Ce qui avait de l'importance : les spores de la maladie de Shael se formaient dans des sols dégradés, des sols sans Élu Sol depuis trop longtemps.

Sa mère avait dit à l'enterrement, devant la famille rassemblée : "Ce sol nous a tués. Le sol qui n'a pas d'Élu pour le maintenir finit toujours par tuer quelqu'un."

Arev s'était souvenue de cette phrase chaque jour depuis.

—

III.

Tarev était arrivé légèrement en avance.

Il était petit pour un Sol — quelque chose d'aérien dans sa façon de se tenir, comme s'il n'était pas tout à fait sûr d'occuper l'espace où il était. Vingt-quatre ans. Des yeux qui regardaient les coins de la tente plutôt que les gens directement.

"Tu veux du thé ?" dit-elle.

"Non, merci. Je suis bien."

Elle lui avait quand même versé une tasse et posé devant lui. Il l'avait regardée, puis l'avait prise.

"J'ai relu ton dossier ce matin. Est-ce que tu as des questions sur le processus ?"

"Non. J'ai déjà fait deux sessions."

"Je sais. Je voulais te demander si tu avais des questions."

Il avait regardé sa tasse. "Ça aide les gens."

"Oui."

"Alors c'est bien."

—

IV.

La session avait duré quarante minutes.

Arev avait conduit le processus comme elle conduisait toujours — calmement, avec les interruptions régulières, en demandant à chaque étape si Tarev voulait continuer. Il avait dit oui à chaque fois. Il ne regardait pas exactement dans sa direction quand il disait oui, mais il disait oui.

À la fin de la session, Tarev avait les mains qui tremblaient légèrement.

—

V.

Elle avait rempli le registre officiel après son départ.

Session 3-Tarev-Dharet. Durée : 40 minutes. État du donateur : bon. Mains tremblantes post-session, normal. Colonne "observations comportementales" : contact visuel limité. A répondu oui à toutes les propositions de continuation. Attitude coopérative.

Elle avait relu la colonne. "Coopérative" était un mot de coordinatrice.

Elle avait sorti le registre à part. Elle avait noté : "Mains tremblantes 8-10 minutes post-session. Contact visuel : 40% du temps standard. Réponses oui : systématiques, délai légèrement inférieur à la moyenne. Note sur le volontariat : impossible à établir formellement. J'aurais dû poser la question directement."

Elle avait posé le stylo.

—

VI.

Elle avait regardé ses deux registres côte à côte sur la table — l'officiel et le privé, même format, couvertures différentes.

Sa sœur Shael avait dix-sept ans quand elle avait commencé à tousser. Un Élu Sol, deux heures, deux fois par mois — c'était les chiffres que les archivistes médicaux avaient calculés après coup. Pas de sacrifice héroïque. Juste deux heures.

Arev avait grandi dans un déficit. Elle avait vu ce que ça produisait. Elle avait rejoint le système qui venait combler ces déficits. Et maintenant elle était assise avec ses deux registres et la question de savoir si le système qu'elle coordonnait créait les conditions dans lesquelles une autre Shael était quelque part en train de penser qu'elle n'avait pas le choix.

—

VII.

Ce soir, dans le registre à part, une dernière ligne.

"Question à poser à la prochaine session de Tarev : est-ce que les conditions de volontariat me permettent d'accepter une réponse non sans qu'il sache que je l'accepterai sans conséquence sur le statut de sa famille ?"

Elle avait regardé la ligne. Elle avait ajouté :

"Saeved a choisi. Je veux que Tarev puisse choisir. Ce n'est pas la même chose que ce que je coordonne en ce moment."

Elle avait fermé le registre et éteint la lampe.

C'était insuffisant. Elle le savait.

C'était ce qu'elle pouvait faire, dans le système où elle était, avec les outils qu'elle avait. Et elle continuait à chercher comment faire plus, parce qu'en face de "insuffisant" elle avait toujours le sol gris du plateau Makhet et les poumons de Shael, et cette équation-là, elle ne pouvait pas la laisser résister indéfiniment.`,
  },

  // ── 2 · CENDRIX ───────────────────────────────────────────
  2: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Ce que le conduit a protégé',
        texte: `Cendrix avait huit ans le jour de la Rupture Thermique. Elle vivait avec sa mère dans le Septième District de Forge — la zone des artisans de précision. Sa mère fabriquait des membranes de détection pour les forges, des feuilles de métal si minces qu'elles changent de couleur selon la température exacte.

Le bruit avait précédé la chaleur. Sa mère avait regardé les membranes, vu la couleur impossible qu'elles prenaient, et avait dit : "Sous le conduit d'acier. Maintenant."

Sa mère était allée chercher d'autres personnes dans le couloir. Cendrix était restée sous le conduit. Elle avait entendu tout ce qui s'était passé ensuite sans en voir la couleur. Le silence qui avait suivi durait encore dans certaines parties d'elle, vingt-neuf ans plus tard.

Ce qu'elle avait appris de ce jour : la structure protège ceux qui la comprennent. L'absence de structure tue ceux qui ne comprennent pas qu'elle leur manque.`,
      },
      {
        titre: "L'anomalie du Calendrier",
        texte: `L'aptitude s'était manifestée avant qu'elle comprenne ce qu'elle avait. À treize ans, elle savait déjà où se trouvaient les autres Élus dans un rayon de sa rue — pas visuellement, mais avec la certitude du corps qui reconnaît une température familière. Elle avait cru d'abord que tout le monde avait ça.

À quinze ans, elle avait suivi une sensation jusqu'à un entrepôt secondaire. À l'intérieur : une femme d'une quarantaine d'années, Élue Eau, non enregistrée, qui soignait deux Pyriens blessés. Elle n'avait rien dit. Elle était repartie. Pendant trois jours, elle avait essayé de décider ce que ça signifiait.

Le quatrième jour, elle s'était rendue à l'administration du Calendrier pour signaler une signature non enregistrée. L'officier avait pris des notes sur sa propre aptitude — pas juste sur le signalement. Le Calendrier des Fées avait envoyé une évaluatrice six semaines plus tard.

"Vous sentez les Élus. C'est rare. L'Empire peut l'utiliser."`,
      },
      {
        titre: 'La Citadelle et ce qu\'elle enseigne',
        texte: `La formation des Capteurs à la Citadelle du Voile prenait cinq ans. Cendrix en avait fait sept. Elle y était arrivée à seize ans. Elle en était repartie à vingt-trois avec une conviction qu'elle avait construite pièce par pièce.

Ce n'était pas une conviction imposée. Ce qui l'avait convaincue, c'étaient les données. Le Commandant Varak lui avait montré les cartes de mortalité régionale sur cent ans. Avant le Voile : des zones entières sans Élus Soigneurs pendant des décennies. Après : baisse effective de la mortalité évitable dans soixante-douze pour cent des zones concernées.

"L'Empire n'est pas juste. Il est moins mauvais que l'alternative non organisée. C'est différent, mais c'est suffisant pour justifier de travailler dedans."

L'endroit où ça avait craqué, pour la première fois : une mission à Thalassyr, un rapport sur des zones avec Élus non enregistrés qui avaient des taux de mortalité comparables aux zones impériales. Requalifié "données incomplètes, sources non validées." Elle avait gardé une copie dans son carnet.`,
      },
      {
        titre: 'District Quatorze, archives de l\'Ordre',
        texte: `Les archives des Ordres Soigneurs de Khar-Vurn avaient été indexées par patient — ce qui rendait la recherche par praticien presque impossible. Quelqu'un avait fait ça délibérément.

Elle avait trouvé quand même. Elle cherchait un schéma : des techniques documentées d'une façon trop précise pour être anonymes. "Chaleur précise non brûlante, application directe par contact palmaire, résultats disproportionnés au protocole standard." Quarante-trois dossiers sur les années concernées. Sept d'entre eux dataient d'après l'entrée en vigueur du décret de la Purge.

Ce soir, un contact lui avait transmis une description : une femme avec des perles de pierre cendrée dans les cheveux, vue dans les sous-sols du Dix-Septième Bloc, District Quatorze, il y a trois jours. Elle avait décidé de vérifier l'adresse elle-même. Seule, en civil, la nuit suivante.`,
      },
      {
        titre: 'La conversation qu\'elle n\'a pas encore eue',
        texte: `Ce que Cendrix veut de Brasia n'est pas une arrestation. Elle veut que Brasia lui montre son erreur ou confirme la sienne.

Elle a les données qui valident le Voile d'Équité dans soixante-douze pour cent des zones. Elle a les données de Thalassyr qui posent une question sur les vingt-huit pour cent restants. Brasia a travaillé onze ans dans les zones sans couverture impériale. Elle a des données que Cendrix n'a pas.

Ce n'est pas une pensée qu'elle peut formuler dans un rapport. Elle le formule dans son carnet, en code, puis referme le carnet. Dans son journal ce soir : "Si Brasia a tort, je peux lui montrer les données. Si Brasia a raison—" Elle n'a pas fini la phrase. Elle ne finit jamais ces phrases-là.`,
      },
    ],

    sorts: [
      {
        nom: 'Tison Traceur',
        description_lore: `La formalisation tactique de l'aptitude qu'elle a depuis l'enfance — sentir les signatures élémentaires. La technique oblige l'aptitude passive à devenir active et précise, en ciblant une signature spécifique pour en extraire les détails. Elle l'a développée pendant sa formation à la Citadelle.`,
      },
      {
        nom: 'Réseau de Cendres',
        description_lore: `Conçue pour des opérations en milieu urbain dense — les couloirs thermiques de Khar-Vurn, les marchés couverts. Le réseau de cendres est imperceptible parce qu'il est calibré exactement à la température ambiante. Elle a mis dix-huit mois à trouver ce calibrage précis. Elle recommence à chaque cité où elle opère.`,
      },
      {
        nom: 'Marque du Voile',
        description_lore: `Le geste que la Citadelle considère comme son outil principal — identifier et marquer les non-enregistrés pour le Registre du Calendrier. Pour Cendrix, c'est plus complexe : marquer quelqu'un avec la signature du Voile, c'est le rendre visible au système qui décide de son sort. Elle le fait. Elle fait attention à qui elle marque en premier.`,
      },
      {
        nom: "Éclat d'Interrogatoire",
        description_lore: `Elle ne l'utilise pas souvent. La chaleur déstabilisante est moins précise que la conversation pour extraire de l'information, et moins permanente. Elle préfère que les gens parlent parce qu'ils ont conclu que parler était leur meilleure option. Ce n'est pas toujours possible.`,
      },
      {
        nom: 'Instinct du Calendrier',
        description_lore: `L'aptitude qu'elle a depuis l'enfance, formalisée par la Citadelle. Elle ne peut pas la désactiver. Dans une ville comme Khar-Vurn, où les Élus Feu non enregistrés se cachent dans la chaleur ambiante, l'aptitude devient un bruit constant. Elle a appris à gérer ça comme on apprend à dormir à côté d'un fleuve.`,
      },
    ],

    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'Ennemi / Cible', texte: `Elle ne veut pas juste arrêter Brasia. Depuis que les dossiers des Ordres Soigneurs ont commencé à dessiner le contour de qui Brasia est vraiment — pas juste une fugitive, mais quelqu'un qui a construit quelque chose de fonctionnel dans les marges — une question s'est posée. Brasia a des données. Des données sur les zones sans couverture impériale. Si ces données contredisent ce que Cendrix a dans ses propres rapports, elle veut savoir.` },
      { personnage_id: 66, nom: 'Varak', type: 'Mentor / Commandant', texte: `Son superviseur à la Citadelle et maintenant son commandant sur la mission Khar-Vurn. Il a été le premier adulte de la Citadelle à lui parler honnêtement. Elle lui fait confiance précisément parce qu'il n'a jamais prétendu que l'Empire était plus que "moins mauvais que l'alternative". Ce qu'elle ne lui dit pas : les données de Thalassyr. Le rapport requalifié.` },
      { personnage_id: 70, nom: 'Nessyr', type: 'Informateur', texte: `Un informateur dans les réseaux du Parti du Feu qui vend des informations pour de l'argent, sans idéologie. Cendrix le paye correctement et ne lui pose pas de questions sur ses autres clients. Il ne sait pas qu'elle est une Capteur — elle s'est présentée comme une administratrice impériale intéressée par les ressources humaines non déclarées.` },
    ],

    lore_long: `CE QUE LE CONDUIT A PROTÉGÉ
Un chapitre de la vie de Cendrix, Capteur impérial (en mission à Khar-Vurn)

—

I.

Les dossiers des Ordres Soigneurs de Khar-Vurn avaient été indexés par patient.

Cendrix avait mis deux heures à comprendre pourquoi ça rendait la recherche difficile — non par accident, mais parce que quelqu'un avait décidé que ce serait l'ordre logique. Elle avait noté ça dans son carnet, pas encore en code, juste comme observation : indexation par patient. Empêche la reconstitution d'un profil de praticien. Décision délibérée ou standard administratif ?

La salle d'archives était froide pour Khar-Vurn — les dossiers papier se dégradaient à chaleur trop élevée. Un silence insolite, dans une cité dont les murs ronflaient en permanence avec le géothermique. Elle avait posé sa veste sur le dossier de la chaise et travaillé en manches longues.

Elle cherchait un schéma. Pas un nom. Elle cherchait une empreinte clinique : des formulations répétées, des techniques documentées d'une façon trop précise pour être anonymes. Elle avait trouvé le premier dossier correspondant après quarante minutes. "Chaleur précise non brûlante, application directe par contact palmaire, durée brève, résultats disproportionnés au protocole standard." Elle avait posé le dossier et n'y avait pas immédiatement repensé — elle l'avait laissé de côté pour continuer le tri.

La formulation était répétée. Quarante-trois fois sur les années concernées.

Le protocole BRS-7. Elle connaissait le titre — la classification impériale l'avait rendu accessible à son niveau. Maintenant elle avait le praticien. Maintenant elle avait aussi l'étendue. Sept des dossiers d'urgence sur non-enregistrés dataient d'après l'entrée en vigueur du décret de la Purge.

Elle avait fermé le dossier.

—

II.

Elle avait huit ans le jour de la Rupture Thermique.

Le bruit avait précédé la chaleur. Elle se souvenait de ça avec une précision qui l'avait surprise des années plus tard — un métal qui cède de l'intérieur, amplifié par les conduits, répercuté dans tous les bâtiments simultanément.

Sa mère avait regardé les membranes de détection accrochées aux murs de l'atelier. Elle en fabriquait depuis vingt ans — des feuilles de métal si fines qu'elles changeaient de couleur à chaque variation de un degré. Cendrix la regardait les fabriquer depuis qu'elle était assez grande pour rester debout sans aide. Elle comprenait ce qu'elles disaient, les couleurs. Elle avait vu la couleur impossible qu'elles prenaient ce matin-là.

"Sous le conduit d'acier. Maintenant."

Elle n'avait pas demandé pourquoi. La façon dont sa mère avait dit ça ne laissait pas de place pour une question. Elle était allée sous le conduit d'acier et elle avait attendu.

Sa mère était sortie dans le couloir pour trouver d'autres personnes.

Cendrix ne savait ce qui s'était passé ensuite que par reconstruction. La surtension avait duré environ quarante secondes. Le Septième District avait reçu un choc secondaire — moins fort qu'au Quatrième, mais suffisant pour détruire tout ce qui n'était pas protégé par une masse thermique importante.

Le conduit d'acier était une masse thermique importante. Sa mère l'avait su parce qu'elle avait passé sa vie à mesurer la conductivité des métaux.

Elle avait mis trois jours pour retrouver sa mère — vivante, avec des brûlures sur les avant-bras. Quelqu'un avait survécu à cause d'elle. Sa mère avait survécu aussi.

Ce qu'elle avait compris ce jour-là : si tu comprends la structure, tu peux trouver ce qu'elle protège. Si tu ne la comprends pas, tu ne peux pas savoir ce qui te manque.

—

III.

Elle avait rencontré Brasia à l'Académie, lors de sa deuxième année de formation. Pas à la formation des Capteurs — à la cantine, un soir.

Elle se souvenait bien de cette conversation. Plus précisément qu'elle ne se souvenait de la plupart des conversations de cette période. Brasia était la première personne à qui elle avait parlé de politique comme si les deux s'intéressaient aux mêmes faits et arrivaient à des conclusions différentes.

"Et si la cartographie révèle que certains besoins ne sont pas stratégiquement rentables à satisfaire ?"

Elle avait répondu que la politique devait alors décider si elle acceptait cette conséquence. Brasia avait dit que c'était une réponse d'analyste. "La différence : toi tu identifies les problèmes au niveau du système, moi je les gère au niveau de la personne en face de moi. Nos métiers ne sont pas en désaccord. Sauf le jour où le système décide que la personne en face de moi n'a pas droit aux soins."

Elle n'avait pas eu de réponse à ça ce soir-là. Elle n'avait toujours pas de réponse complète. Elle avait des arguments — les soixante-douze pour cent, la mortalité réduite. Ce n'étaient pas des mensonges. Mais une fois qu'on posait la question de Brasia, les données agrégées devenaient une réponse à une autre question.

Elle avait gardé ça dans son carnet.

—

IV.

Le contact était arrivé en fin de journée. Brève. "Femme, perles de pierre cendrée, cheveux gris-fumée, petite, porte une trousse de soin. Vue dans les sous-sols du Dix-Septième Bloc, District Quatorze. Il y a trois jours."

Trois jours. C'était récent.

Elle avait dit à l'unité qu'elle avait une autre source à contacter dans le District Onze. Elle irait seule, en civil, la nuit suivante. Ce n'était pas entièrement faux.

Pourquoi seule. Elle l'avait noté dans son carnet ce soir, en code. Elle avait des hypothèses valables : évaluer la situation elle-même avant d'engager l'unité, réduire le risque d'escalade inutile. Toutes des raisons valables.

Elle avait refermé le carnet. La nuit de Khar-Vurn ronflait dans les conduits.

—

V.

Ce qu'elle avait écrit dans le carnet ensuite :

"BRS-7. 43 cas. 7 après le décret. Elle savait ce qu'elle faisait."

Pause.

"Si Brasia a tort, je peux lui montrer les données. Elle est assez rigoureuse pour changer d'avis si les données sont meilleures que les siennes. C'est ce que j'aurais fait à sa place."

Nouvelle pause.

"Si Brasia a raison—"

Elle n'avait pas fini la phrase.

Elle ne finissait jamais ces phrases-là dans son carnet. Pas par peur de les écrire — par quelque chose de plus proche de l'exactitude. Une phrase non terminée représentait honnêtement l'état de sa réflexion sur le sujet.

Elle avait refermé le carnet. Posé la main dessus une seconde.

Demain, le District Onze. Après-demain, la nuit, le District Quatorze. Elle saurait, à l'entrée du bâtiment, si quelqu'un correspondant à Brasia était présent dans les étages inférieurs.

C'était professionnel. C'était aussi vrai que la plupart des choses qu'elle se disait.`,
  },

  // ── 3 · GRAVEL ────────────────────────────────────────────
  3: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Le Quatrième District',
        texte: `Gravel a grandi dans le Quatrième District de Forge — le plus chaud, le plus bas, le plus oublié des districts de Khar-Vurn. Les conduits géothermiques y passaient à découvert, les maisons s'appuyaient contre eux pour se chauffer gratuitement, et tout le monde savait que c'était dangereux et continuait pareil parce que la chaleur gratuite ça ne se refuse pas dans un district où le charbon coûte.

Son père Drevahn était calibreur thermal de maintenance — un de ceux qui vérifient les pressions dans les conduits, ferment les vannes, signalent les anomalies. Un travail essentiel et invisible, payé au minimum du Parti de l'Acier, jamais mentionné dans les rapports annuels.

Gravel aidait son père les week-ends depuis ses dix ans. Il connaissait le sous-sol du Quatrième District comme d'autres connaissent leur propre cuisine.`,
      },
      {
        titre: 'La Rupture',
        texte: `Il avait dix-neuf ans le jour de la Rupture Thermique. Il était dans les étages hauts du bâtiment familial en train de réparer une gouttière. Son père était en bas, dans les conduits, avec un ordre de vérification d'urgence envoyé trente minutes avant l'incident — une anomalie de pression qui, rétrospectivement, était le début de la surtension.

Il a entendu le bruit. Il a vu la couleur que prenait le ciel au-dessus du Quatrième District — une teinte orange qui n'était pas normale même pour Khar-Vurn. Il est descendu.

Son père était dans la zone de rupture. Gravel n'a pas retrouvé le corps pendant trois jours. Il a retrouvé le marteau le premier jour.`,
      },
      {
        titre: 'Le Parti du Feu',
        texte: `Le Parti du Feu est arrivé dans le Quatrième District huit jours après la Rupture, avec des vivres, des équipes de nettoyage, et des orateurs. Les orateurs étaient bons. Ils parlaient de négligence impériale, de travailleurs sacrifiés, de systèmes maintenus par des hommes comme Drevahn dont les signalements d'anomalie avaient été classés "non-prioritaires" pendant trois mois avant la Rupture.

Ce dernier point était vrai. Gravel l'avait appris deux semaines après. Les rapports de son père, conservés dans ses propres archives parce que le système officiel ne les gardait pas, montraient quatre signalements entre mars et juin. Quatre réponses "en attente d'examen". La surtension avait eu lieu en juillet.

Il a rejoint le Parti du Feu ce soir-là.`,
      },
      {
        titre: 'Orateur et battlemage',
        texte: `Gravel est depuis quatre ans l'un des représentants du Quatrième District dans les assemblées du Parti du Feu. Il parle bien — pas avec éloquence, avec poids. Les gens l'écoutent parce qu'il n'invente rien, qu'il cite des faits précis et qu'il porte littéralement le marteau de son père à la ceinture.

En combat, il est le premier dans la brèche et le dernier à sortir. Son Feu n'est pas tactique — c'est de la force brute calibrée pour tenir une ligne.

Ce qu'il ne dit pas aux assemblées : il a rencontré Kael, le forgeron du Quatrième qui a survécu à la Rupture dans la même zone que son père. Kael lui a dit des choses sur la nuit de la Rupture que Gravel n'a pas encore décidé quoi faire. Des choses qui compliquent le récit propre que le Parti du Feu lui avait donné.`,
      },
      {
        titre: 'Justice ou compte rendu',
        texte: `Gravel veut que quelqu'un dise que la mort de son père était évitable et qu'on aurait dû l'empêcher. Il n'a pas de plan plus précis que ça. Le Parti du Feu lui en a donné un — des réformes de maintenance, des inspections indépendantes, une révision des systèmes de signalement. Ce sont de bonnes politiques. Gravel les soutient.

Ce qu'il ne formule pas : aucune politique ne rend Drevahn à son marteau.`,
      },
    ],
    sorts: [
      { nom: 'Frappe du Forgeron', description_lore: `Il a développé ça en regardant son père travailler — la façon dont le coup de marteau sur une enclume chaude libère une onde de chaleur dans toutes les directions. Pas un geste appris. Un geste hérité.` },
      { nom: 'Mur Thermique', description_lore: `Sa tactique de base dans les manifestations devenues violentes — créer une ligne que les Capteurs hésitent à franchir. Il ne l'utilise pas pour bloquer. Il l'utilise pour forcer une décision.` },
      { nom: 'Braise Persistante', description_lore: `La chaleur de forge ne disparaît pas. Elle s'accumule dans le métal, dans la pierre, dans la peau. Gravel a appris ça à dix ans dans les conduits du Quatrième District.` },
      { nom: 'Souffle du Creuset', description_lore: `Il l'a utilisé pour la première fois lors d'une action du Parti du Feu qui avait dégénéré. Il n'était pas prêt à ce que ça fasse autant de dégâts. Il l'utilise maintenant avec la même conscience — pas légèrement.` },
      { nom: 'Résistance du Quatrième', description_lore: `Il a grandi dans les conduits géothermiques du Quatrième District. La chaleur, pour lui, n'est pas une menace. C'est un rappel de là où il vient.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'soignée_par_elle', texte: `Brasia l'a soigné une fois, deux ans après la Rupture, lors d'une manifestation qui avait mal tourné. Il ne sait pas qu'elle est Dissidente — il ne sait que ses mains. Elle l'a soigné sans demander sa faction. Il s'en souvient parce que c'est la première fois depuis la mort de son père que quelqu'un l'a touché sans attendre quelque chose en retour.` },
      { personnage_id: 7, nom: 'Kael', type: 'témoin_de_son_père', texte: `Kael était dans le Quatrième District la nuit de la Rupture. Il connaissait Drevahn — ils travaillaient dans la même zone, pas ensemble mais proches. Ce que Kael lui a dit : son père avait demandé une évacuation du secteur D-7 deux heures avant la surtension. La demande avait été refusée par un superviseur du Parti de l'Acier, pas par l'Empire. Gravel tient cette information et ne sait pas encore si elle change tout ou rien.` },
      { personnage_id: 4, nom: 'Thryss', type: 'adversaire_politique', texte: `Thryss représente le Parti de l'Acier dans les mêmes assemblées. Ils ne se détestent pas — ils comprennent que l'autre a des raisons. Mais Gravel pense que la structure que Thryss défend est exactement la structure qui a tué son père, et Thryss pense que la colère de Gravel est une arme politique, pas une analyse.` },
    ],
    lore_long: `LE MARTEAU DE DREVAHN
Un chapitre de la vie de Gravel, représentant du Quatrième District (Parti du Feu)

—

I.

Kael avait dit : "Ton père a demandé l'évacuation du secteur D-7. Deux heures avant. Le superviseur de zone a refusé."

Gravel avait entendu ça il y a trois semaines. Il l'entendait encore maintenant, à table dans la salle d'assemblée du Parti du Feu, pendant que Orkhael parlait de négligence impériale et que les autres hochaient la tête.

Le superviseur de zone n'était pas de l'Empire. C'était Herrath, du Parti de l'Acier. Herrath était mort dans la Rupture aussi, ce qui rendait la chose compliquée sur le plan politique. Mais Herrath avait refusé l'évacuation de D-7 et son père était mort dans D-7 deux heures plus tard.

Gravel posa sa main sur le marteau à sa ceinture. Bois brûlé, métal déformé par la chaleur extrême. Retrouvé dans les décombres le premier jour, à trente mètres de là où son père aurait dû être si l'évacuation avait eu lieu.

"— les responsables impériaux qui ont sous-équipé les systèmes de maintenance—"

Il écouta Orkhael. Il connaissait le discours par cœur. Il l'avait lui-même prononcé, en des versions légèrement différentes, dans sept assemblées de district depuis quatre ans.

Ce que le discours ne disait pas : que l'Empire avait effectivement sous-équipé les systèmes. Et que Herrath, du Parti de l'Acier, avait refusé d'évacuer le secteur quand un calibreur thermal lui avait dit que la pression était anormale. Les deux choses étaient vraies simultanément. L'assemblée n'était pas faite pour les simultanément.

—

II.

Après l'assemblée, il avait marché jusqu'au Quatrième District.

Ce n'était pas officiel, cette visite. Il ne venait pas en représentant. Il venait comme quelqu'un qui avait grandi ici et qui revenait parfois chercher quelque chose qu'il ne trouvait jamais.

Le secteur D-7 avait été reconstruit — maisons neuves sur la même implantation, conduits géothermiques réencaissés cette fois, deux mètres de béton entre eux et les habitations. Le Parti de l'Acier avait supervisé la reconstruction. Techniquement, c'était mieux qu'avant. Techniquement, ça aurait dû exister vingt ans plus tôt.

Il s'arrêta devant l'espace vide où était le bâtiment familial. Rien n'avait été reconstruit exactement à l'identique — les nouvelles constructions respectaient un nouveau plan de masse. L'espace vide était maintenant une rue secondaire avec des bacs à plantes que quelqu'un arrosait.

Il avait sortit le marteau de sa ceinture. Le regarda.

Son père n'était pas mort parce que l'Empire était cruel. Son père était mort parce que plusieurs systèmes avaient failli simultanément — la sous-maintenance, l'organisation de signal du Parti de l'Acier, la réponse tardive. Aucune de ces défaillances n'était simple. Aucune n'avait un seul responsable.

Ce que Gravel ne savait pas faire, c'était être en colère contre un système. La colère a besoin d'un visage, d'une adresse, d'un moment précis. La colère contre un système c'est de la fumée — ça monte, ça chauffe, ça ne touche rien.

—

III.

Il resta vingt minutes dans la rue D-7. Personne ne le reconnut ou ne fit semblant de ne pas le reconnaître — dans le Quatrième District, les représentants n'étaient pas des célébrités. Ils étaient des gens qui avaient survécu et avaient trouvé un endroit où mettre ça.

Quand il repartit, il avait pris une décision qui n'était pas une décision — plutôt une acceptation. Il continuerait à parler de négligence impériale parce que la négligence impériale était réelle. Il continuerait à ne pas parler de Herrath parce que Herrath était mort et que sa mémoire n'aidait personne. Et il garderait ce que Kael lui avait dit dans l'endroit où il gardait les choses pour lesquelles il n'avait pas encore de mot.

Le marteau de son père était lourd à la ceinture. Il l'avait toujours été.

Ce soir, il avait une deuxième assemblée dans le District Deux. Il parlerait de systèmes de signalement thermal et de responsabilité de maintenance. Les gens l'écouteraient parce qu'il était crédible et parce qu'il portait le marteau de son père à la ceinture et que ça se voyait.

Ce n'était pas faux. Ce n'était pas toute la vérité. Pour l'instant, il n'avait pas de meilleur outil que ça.`,
  },

  // ── 4 · THRYSS ────────────────────────────────────────────
  4: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: "L'abri de son père",
        texte: `Thryss est né dans le Sixième District de Khar-Vurn, dans une famille d'ingénieurs du Parti de l'Acier depuis trois générations. Son père Erkhal était spécialisé en thermodynamique structurelle — la science de comment construire des bâtiments qui survivent à la chaleur géothermique au lieu de la subir.

Erkhal avait conçu l'abri familial quand Thryss avait deux ans. Pas parce qu'il prévoyait une catastrophe — parce qu'il ne construisait jamais rien sans prévoir les pires cas. Le sous-sol était en acier renforcé, isolation thermique triple couche, réserves d'air pour douze heures, porte étanche manuelle.

À l'époque, ses collègues avaient trouvé ça excessif.`,
      },
      {
        titre: 'Sept heures dans le sous-sol',
        texte: `Thryss avait quinze ans le jour de la Rupture. Il était dans le sous-sol avec sa mère et deux voisins que son père avait fait entrer avant de repartir vérifier les systèmes de son bâtiment d'ingénierie à trois cents mètres de là.

Sept heures à entendre ce qui se passait dehors. Sa mère n'avait pas crié. Elle avait regardé la porte étanche et attendu.

Erkhal était revenu après la fin de la surtension. Il avait des brûlures sur les avant-bras mais il marchait. Le bâtiment d'ingénierie avait tenu parce qu'il l'avait construit aussi.

Thryss ne lui a jamais demandé pourquoi il n'était pas resté dans l'abri avec eux. Il connaît la réponse.`,
      },
      {
        titre: "Ce que les autres districts n'avaient pas",
        texte: `Après la Rupture, Thryss avait passé deux semaines à parcourir les quartiers touchés avec les équipes de son père. Il était venu pour aider au déblayage. Ce qu'il avait vu l'avait arrêté.

Les bâtiments qui avaient tenu et ceux qui n'avaient pas tenu n'étaient pas séparés par la chance. Ils étaient séparés par les spécifications de construction. Les bâtiments aux normes standard du Parti de l'Acier avaient résisté à soixante-dix pour cent de la surtension. Les constructions hors-norme ou vieillissantes — principalement dans le Quatrième District — avaient cédé.

L'abri de son père avait tenu à cent pour cent parce que son père avait construit à trois fois les normes standard. Les gens du Quatrième District n'avaient pas eu de Erkhal.

Il s'était inscrit au programme d'ingénierie du Parti de l'Acier le lendemain.`,
      },
      {
        titre: 'Ingénieur et représentant',
        texte: `Thryss est ingénieur certifié de niveau 3 et représentant technique du Parti de l'Acier dans les négociations inter-districts sur les normes de construction. Il a soumis six propositions de révision des standards thermiques depuis sa certification. Deux ont été adoptées, partiellement. Quatre sont "en cours d'examen".

Il rencontre Gravel dans les mêmes assemblées depuis deux ans. Ils ne sont pas amis. Ils ne sont pas ennemis. Gravel porte la colère, Thryss porte les plans. Parfois ils pointent dans la même direction.

Ce qui inquiète Thryss en ce moment : Skarith lui a dit que les nouvelles constructions du Septième District ont été approuvées avec les anciens standards. Quelqu'un dans l'administration a contourné les nouvelles normes. Il cherche lequel.`,
      },
      {
        titre: 'Les normes obligatoires',
        texte: `Thryss veut que les normes de construction thermique deviennent obligatoires pour tous les districts, financées par une taxe sur les surplus industriels. Pas une faveur accordée aux pauvres. Un standard universel qui s'applique à tout le monde de la même façon.

Il sait que ça prend du temps. Il continue de soumettre des propositions. C'est la seule chose qu'il sait faire qui change réellement quelque chose, même lentement.`,
      },
    ],
    sorts: [
      { nom: 'Barricade Thermique', description_lore: `L'application directe de ce que son père lui a appris — une chaleur qui retient plutôt qu'une chaleur qui brûle. La différence est dans la calibration.` },
      { nom: 'Zone Tempérée', description_lore: `Développé après avoir étudié comment les abris Acier régulent la chaleur — créer une bulle de normalité thermique dans le chaos.` },
      { nom: 'Scellement Thermique', description_lore: `Une application de la thermodynamique structurelle au corps — un être élémentaire qui essaie de se déplacer vite crée des gradients thermiques. Thryss peut bloquer ces gradients.` },
      { nom: 'Bouclier du Sous-sol', description_lore: `Sept heures dans le sous-sol de son père. La forme ultime de son Feu est protectrice, pas offensive. Il le sait depuis qu'il a quinze ans.` },
      { nom: 'Calcul Structural', description_lore: `Il regarde les structures, les angles, les points de tension. En combat, c'est la même chose — des flux thermiques qui ont des trajectoires prévisibles si on sait les lire.` },
    ],
    relations: [
      { personnage_id: 9, nom: 'Skarith', type: 'allié_Acier', texte: `Skarith était commandant de la garde civile pendant la Rupture. Ils ne se connaissaient pas à l'époque — ils se sont rencontrés dans les assemblées post-Rupture. Skarith respecte la rigueur de Thryss. Thryss apprécie que Skarith ne prenne pas de décisions irréfléchies. C'est une relation de travail productive sans chaleur particulière.` },
      { personnage_id: 3, nom: 'Gravel', type: 'adversaire_politique', texte: `Gravel croit que la colère est motrice. Thryss croit que la colère sans plan ne bâtit rien. Ils ont raison tous les deux et ne peuvent pas se le dire facilement dans des assemblées politiques. Ce qui les rapproche le plus : ils ont tous les deux passé du temps dans les décombres du Quatrième District juste après la Rupture. Ce souvenir commun ne suffit pas pour tout le reste.` },
      { personnage_id: 2, nom: 'Cendrix', type: 'contact_impérial', texte: `Cendrix est passée par les assemblées techniques en mission d'audit il y a un an. Elle avait posé des questions précises sur les normes de maintenance — trop précises pour un audit ordinaire. Thryss avait noté ça sans savoir quoi en faire. Elle était polie, efficace, et portait l'uniforme impérial d'une façon qui indiquait qu'elle avait autre chose dans les poches.` },
    ],
    lore_long: `CE QUE LA STRUCTURE PROTÈGE
Un chapitre de la vie de Thryss, ingénieur et représentant du Parti de l'Acier

—

I.

Les plans du Septième District étaient approuvés avec les anciens standards.

Thryss les avait reçus ce matin par courrier interne, avec une mention "validation finale accordée" et le tampon de l'administration de district. Il les avait dépliés sur sa table de travail et avait cherché la section thermique pendant dix minutes avant de trouver la ligne qu'il cherchait : Isolation thermique — Standard type B, conformément au règlement de 34.

Le règlement de 34. Celui d'avant la révision. Celui que lui avait fait passer, partiellement, il y a deux ans.

Quelqu'un dans l'administration avait approuvé des plans avec des normes caduques. Délibérément ou par erreur — la différence était importante, mais le résultat était identique : des constructions au Septième District qui résisteraient à soixante-dix pour cent d'une surtension thermique au lieu de quatre-vingt-cinq.

Quinze pour cent. Il avait passé six ans à obtenir ces quinze pour cent.

—

II.

Il n'appela pas immédiatement. Il prit sa calculatrice dans la poche intérieure — reflex de vingt ans — et la fit tourner dans ses doigts pendant quelques minutes.

Son père Erkhal ne s'était jamais énervé contre les systèmes administratifs. Il disait que s'énerver contre un système c'était comme s'énerver contre la gravité : une dépense d'énergie qui ne change rien à la trajectoire de l'objet en chute. Ce qu'on pouvait faire, c'était construire des amortisseurs.

Thryss avait compris ce que son père voulait dire à dix-neuf ans, dans les décombres du Quatrième District, en regardant quels bâtiments avaient tenu et lesquels n'avaient pas tenu. La différence n'était pas dans les intentions. Elle était dans les spécifications.

Le Septième District avait des bâtiments approuvés avec des spécifications insuffisantes. Ça, il pouvait le corriger. Lentement. Par les voies officielles, par les recours techniques, par la démonstration que les nouvelles normes existaient et avaient été adoptées et que leur non-application était une erreur administrative corrigible.

Ce n'était pas satisfaisant. C'était le seul outil qu'il avait qui fonctionnait réellement.

—

III.

Il appela Skarith en premier — pas parce que Skarith pourrait l'aider directement, mais parce que Skarith connaissait les circuits administratifs de la garde civile qui supervisait les inspections de construction. Skarith écouta, posa trois questions précises, dit qu'il verrait ce qu'il pouvait trouver.

Puis il appela le bureau des normes de district. Il fut mis en attente pendant vingt minutes.

Pendant ces vingt minutes, il regarda par la fenêtre le profil de Khar-Vurn — les conduits géothermiques qui couraient le long des bâtiments, les nuages de vapeur permanents au-dessus des zones de forge, la silhouette lointaine des districts hauts où les constructions étaient solides parce que les gens qui y vivaient pouvaient se payer du solide.

Le Septième District était entre les deux. Pas le Quatrième, pas les hauteurs. Des gens ordinaires dans des bâtiments qui devraient être suffisamment solides pour les protéger si quelque chose de semblable à la Rupture se reproduisait un jour.

Ce serait le cas, si les normes s'appliquaient.

—

IV.

"— Bureau des normes, Service technique, district sept, en quoi puis-je vous—"

"Thryss, ingénieur niveau trois, Parti de l'Acier. J'ai les plans du Septième District approuvés ce matin, référence construction 7-D-441. Section thermique, article 12 : isolation standard type B, conformément au règlement de 34. Ce règlement a été révisé il y a dix-huit mois. Les nouvelles normes sont le standard type C. Je veux savoir qui a approuvé ces plans et pourquoi le règlement de 34 est encore utilisé."

Silence bref.

"Je vais devoir vous transférer au responsable de section."

"Je sais. Faites-le."

Il fut transféré deux fois. La troisième personne avait les informations. Un erreur d'archivage, apparemment — le bureau avait utilisé un modèle de validation avec l'ancienne référence réglementaire. Corrigeable. Un nouveau tampon serait émis cette semaine.

"Cette semaine ou aujourd'hui ?" demanda Thryss.

"Cette semaine."

"La construction démarre lundi. J'ai besoin du tampon avant lundi."

Pause.

"Je vais voir ce qu'on peut faire."

"Le règlement l'exige."

Il avait raccroché. Sorti sa calculatrice et l'avait fait tourner encore quelques tours.

Son père aurait dit qu'il avait construit un amortisseur aujourd'hui. Ce n'était pas incorrect. C'était simplement très lent et très peu satisfaisant comme façon de construire quelque chose.

Il avait rappelé le bureau deux heures plus tard pour confirmer. Le tampon serait émis vendredi.

Ce n'était pas une victoire. C'était un ajustement de trajectoire. La trajectoire était correcte. L'amortisseur avait fonctionné.`,
  },

  // ── 5 · YSSARA ────────────────────────────────────────────
  5: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Sept ans dans le Quatrième District',
        texte: `Yssara est née dans le Quatrième District de Khar-Vurn, dans une famille de forgerons sans certification Parti de l'Acier. Ses parents fabriquaient des pièces mécaniques secondaires — des composants qui entraient dans les assemblages plus grands sans que leurs noms n'apparaissent jamais sur les contrats.

Enfant, elle aimait regarder les forges. Pas par fascination du danger — par affinité. Elle mettait sa main près des flammes plus longtemps que les autres enfants avant de la retirer. Ce n'était pas de la bravade. C'était une curiosité qui ne fonctionnait pas tout à fait normalement.

Sa mère avait remarqué. Elle n'avait rien dit.`,
      },
      {
        titre: 'Quarante pour cent',
        texte: `Elle avait sept ans le jour de la Rupture. Elle jouait dans l'escalier de service entre les conduits du Quatrième District quand la surtension a commencé. Ce qu'elle se rappelle : une chaleur différente de toutes les chaleurs qu'elle connaissait. Pas la chaleur des forges qui chauffe progressivement. Une chaleur instantanée, totale, sans direction.

Elle s'est réveillée trois jours plus tard dans un poste de soin provisoire. Elle avait les brûlures sur quarante pour cent du corps. Brasia était l'une des praticiennes qui l'ont soignée. Yssara ne s'en souvient pas — elle avait sept ans et elle était sous analgésiques — mais elle sait maintenant que c'était elle.

Le Feu de sa propre nature n'avait pas protégé sa peau. Mais il avait survécu à tout le reste. Il était peut-être plus fort après.`,
      },
      {
        titre: 'La liste',
        texte: `Yssara avait dix-neuf ans quand elle a commencé à travailler pour les Dissidentes. Elle n'était pas venue avec une idéologie — elle était venue avec un rapport de mission. Elle avait observé pendant deux mois comment les Capteurs impériaux opéraient dans le Sixième District, cartographié leurs routes, identifié leurs cycles, et proposé une mission de neutralisation.

Les Dissidentes avaient accepté parce que le travail de reconnaissance était professionnel. Elles l'avaient formée ensuite au reste.

La liste dont elle parle maintenant : des Capteurs actifs qui opèrent dans des quartiers où elle a identifié des Élus non enregistrés vulnérables. Elle met à jour cette liste chaque semaine. Quand une opportunité se présente, elle agit.`,
      },
      {
        titre: 'Traqueuse',
        texte: `Yssara opère seule la plupart du temps. Les Dissidentes lui fournissent information et exfiltration ; elle fournit des résultats. Elle n'est pas connue dans les réseaux Dissidents comme quelqu'un à qui on parle — elle est connue comme quelqu'un qui règle des problèmes précis.

Elle connaît Thessandra, avec qui elle partage parfois des informations sur les zones de transit — Thessandra a besoin de savoir quels secteurs sont surveillés pour déplacer ses patients, Yssara a besoin de savoir quels secteurs ont des Élus non enregistrés récents pour anticiper les mouvements de Capteurs.

Ce matin, elle a reçu une information sur un Capteur qui opère dans le District Quatorze. Elle a trois jours.`,
      },
      {
        titre: 'La liste, réduite',
        texte: `Elle ne veut pas renverser l'Empire. Elle veut que les gens sur sa liste n'aient plus les moyens de chasser des Élus non enregistrés dans les quartiers de Khar-Vurn. Elle procède méthodiquement. La liste se réduit.`,
      },
    ],
    sorts: [
      { nom: 'Braise Ciblée', description_lore: `Le Feu d'Yssara ne cherche pas à impressionner. Il cherche le point précis où la chaleur fait le plus de dégâts en le moins de temps. Elle a développé ça seule, en regardant comment la Rupture l'avait elle-même atteinte.` },
      { nom: 'Signature Effacée', description_lore: `Elle a appris à contrôler la chaleur permanente qu'elle dégage. Pas à l'éteindre — à la rendre identique à l'ambiance thermique alentour. Disparaître non pas en devenant froide, mais en devenant indiscernable du mur.` },
      { nom: 'Traçage Thermique', description_lore: `Deux mois d'observation des Capteurs impériaux lui ont appris quelque chose : chaque Élu a une signature thermique unique, comme une empreinte. Elle a développé la capacité de lire ces signatures et de les suivre.` },
      { nom: 'Embrasement Final', description_lore: `Elle l'a utilisé sept fois. Chaque fois, la cible était sur sa liste. Elle ne l'a jamais raté.` },
      { nom: 'Feu Central', description_lore: `Elle brûle légèrement, constamment, depuis l'âge de sept ans. Ce n'est pas quelque chose qu'elle contrôle — c'est quelque chose qu'elle est. Les médecins Dissidents qui l'ont examinée n'ont pas de terme pour ça. Elle en a un : elle est Feu, simplement.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'soignée_par_elle', texte: `Brasia l'a soignée à sept ans pendant la Rupture. Yssara ne s'en souvient pas directement — elle était sous traitement. Elle l'a appris plus tard par les archives d'un des postes de soin provisoires. Elle n'a jamais cherché à rencontrer Brasia pour ça. Ce n'est pas de l'indifférence — c'est qu'elle ne sait pas quoi faire de la gratitude envers quelqu'un qu'on ne se rappelle pas.` },
      { personnage_id: 10, nom: 'Thessandra', type: 'réseau_commun', texte: `Elles se voient deux ou trois fois par mois pour des transferts d'information. Yssara ne dit pas où elle va après ces rencontres. Thessandra ne demande pas. Leur accord fonctionne parce qu'elles ont des besoins complémentaires et un niveau de confiance opérationnelle qui n'exige pas de se connaître autrement.` },
      { personnage_id: 2, nom: 'Cendrix', type: 'cible_potentielle', texte: `Elle sait que Cendrix est à Khar-Vurn. Elle sait ce qu'est une Capteur de ce niveau. Elle a observé ses patterns de déplacement depuis trois semaines. Elle n'a pas encore décidé si Cendrix entre dans sa liste — une Capteur de haut niveau en mission active est une décision qui exige une certitude qu'elle n'a pas encore.` },
    ],
    lore_long: `LISTE
Un chapitre de la vie d'Yssara, Dissidente (Khar-Vurn)

—

I.

Elle attendit dans la vapeur du conduit d'évacuation depuis dix-neuf heures du soir.

Ce n'était pas inconfortable. Elle avait appris à attendre — un apprentissage qui ressemblait à une désactivation partielle du corps, où la chaleur et le temps cessaient d'être des problèmes et devenaient du bruit de fond. La vapeur du conduit masquait sa signature thermique dans les capteurs de distance standards. Elle savait cela depuis le premier mois où elle avait appris les procédures de surveillance des Capteurs.

L'homme qu'elle attendait s'appelait Fereth. Il était Capteur adjoint, spécialisé dans les signatures de jeunes Élus. Il opérait dans le District Quatorze depuis huit mois. Sa liste à lui comportait vingt-trois noms — des Élus non enregistrés repérés par les systèmes impériaux. Il en avait traité seize.

Traité. C'était le terme dans les rapports.

La liste d'Yssara était plus courte que celle de Fereth. Elle n'y mettait que des noms précis, avec des critères précis. Fereth y était depuis trois semaines.

—

II.

Elle avait sept ans quand la Rupture Thermique avait traversé le Quatrième District.

Elle ne pensait pas souvent à ça en ces termes — "la Rupture l'avait traversée". C'était pourtant précis. La surtension thermique avait traversé les murs du bâtiment de service où elle jouait et elle avait traversé son corps, quarante pour cent de la surface.

Ce qu'elle se rappelait : la chaleur différente. Pas la chaleur des forges qu'elle connaissait — une chaleur sans bord, sans direction, sans intention. Juste de la puissance libérée dans un espace trop petit pour la contenir.

Elle s'était réveillée dans un poste de soin provisoire. Quelqu'un avait soigné ses brûlures. Elle ne savait pas qui — elle avait eu accès aux archives du poste dix ans plus tard. Une praticienne nommée Brasia, présente dans le district pendant les huit jours d'urgence. Elle avait soigné dix-sept blessés graves dans ce poste. Yssara était le treizième.

Ce n'était pas une dette qu'Yssara portait. C'était une information qu'elle avait gardée parce que les informations utiles se gardaient.

—

III.

Fereth sortit du bâtiment de stockage à vingt-deux heures quarante.

Il était seul — ce n'était pas toujours le cas mais elle avait noté que ses déplacements nocturnes en civil étaient systématiquement solitaires. Il avait confiance dans l'anonymat des quartiers industriels. C'était une erreur de protocole qu'Yssara avait attendu trois semaines qu'il confirme.

Elle ne bougea pas pendant qu'il traversait la rue.

Elle avait choisi ce soir-là précisément : il rentrait d'une reconnaissance de terrain, il n'avait pas encore rédigé son rapport, aucune des informations qu'il portait n'était encore transmise à la structure de commandement. Ce qu'il avait dans sa tête et dans ses notes s'arrêtait là.

Il prit la rue perpendiculaire vers les transports de nuit.

Elle descendit du conduit.

—

IV.

Ce fut rapide.

Yssara n'aimait pas les confrontations longues — non par impatience, par économie. Chaque seconde supplémentaire est un risque supplémentaire. Son Feu est précis ou il ne sert à rien.

Après, elle resta immobile trente secondes pour vérifier que personne n'avait été témoin. Rien. Les quartiers industriels de nuit avaient cette qualité — ils étaient actifs mais bruyants, et le bruit masquait ce qu'on voulait ne pas voir.

Elle récupéra les notes de terrain de Fereth. Vingt-trois noms. Les seize qu'il avait "traités" ne pouvaient pas être non-traités. Les sept restants, elle les connaissait déjà — elle les avait identifiés elle-même dans le cadre de sa propre surveillance. Elle les transférerait à Thessandra demain matin pour les inclure dans les protocoles d'exfiltration.

Sa liste comportait maintenant un nom de moins.

—

V.

Elle rentra par les conduits souterrains — le même réseau que son père avait utilisé quand elle était enfant pour rentrer des forges. Elle l'avait réappris à dix-neuf ans, systématiquement, district par district.

Sa chaleur permanente réchauffait l'air immobile des tunnels. Elle l'avait toujours — depuis la Rupture, depuis ses sept ans, cette légère surchauffe interne qui ne s'éteignait jamais. Les médecins Dissidents qui l'avaient examinée l'avaient noté dans des termes qui signifiaient en substance qu'ils ne comprenaient pas ce que c'était.

Elle ne cherchait pas à comprendre non plus. C'était ce qu'elle était. Quelque chose de trop dense pour être contenu ordinairement — un Feu qui ne cherchait pas à brûler mais qui brûlait quand même parce que c'était sa nature.

La liste avait un nom de moins. Il en restait deux.

Elle avait le temps.`,
  },

  // ── 6 · PYRION ────────────────────────────────────────────
  6: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Fonctionnaire impérial',
        texte: `Pyrion est né à Néris dans une famille de fonctionnaires impériaux de troisième génération. Il n'a pas choisi l'Empire — il a grandi dedans, ses parents y étaient, le système lui semblait aussi naturel que la gravité. Il a suivi la formation standard, intégré l'administration régionale à vingt-deux ans, gravit les échelons avec régularité sans éclat particulier.

À trente-deux ans, il était administrateur de zone intermédiaire à la Citadelle du Voile quand la Rupture Thermique a eu lieu à Khar-Vurn. Khar-Vurn avait besoin d'administrateurs de crise. On l'y avait envoyé trois semaines après.`,
      },
      {
        titre: 'Seize ans dans la zone de deuil',
        texte: `Il était arrivé à Khar-Vurn pour une mission de trois mois. Il y était encore seize ans plus tard.

Les premiers mois, il avait géré les urgences : recenser les morts, coordonner les indemnités, superviser les premières reconstructions. Travail administratif de crise, intense mais défini. Après la crise, il avait été nommé administrateur de zone permanente — Khar-Vurn continuait à avoir besoin de coordination, et il était déjà en place.

Au fil des années, quelque chose s'était passé qu'il n'avait pas prévu : il était devenu la mémoire institutionnelle de la Rupture. Le seul fonctionnaire impérial qui avait les données de l'époque et les données actuelles et qui savait comment les deux se reliaient.`,
      },
      {
        titre: 'Les rapports de maintenance',
        texte: `Six ans après son arrivée à Khar-Vurn, Pyrion avait reconstitué un fait que les archives impériales avaient mal classé : les quatre rapports d'anomalie de pression dans les conduits du Quatrième District, envoyés par des calibreurs thermiques dans les trois mois précédant la Rupture. Classés "en attente" par le superviseur de maintenance de l'époque — un poste financé par le Parti de l'Acier en sous-traitance impériale.

Le superviseur était mort dans la Rupture. La chaîne de responsabilité s'était arrêtée là.

Pyrion avait noté cette reconstitution dans son registre personnel. Pas dans les rapports officiels. Pas parce qu'on le lui avait demandé de ne pas le faire — simplement parce qu'il savait exactement à quel niveau de l'administration cette information aurait atterri et ce qu'on en aurait fait.`,
      },
      {
        titre: 'Administrateur en suspens',
        texte: `Pyrion administre la zone de Khar-Vurn avec une efficacité que ses supérieurs trouvent satisfaisante. Il coordonne les inspections de maintenance post-reconstruction, il traite les demandes d'indemnité des familles encore en attente, il rédige les rapports de zone mensuels.

Ce qu'il ne dit pas dans ses rapports : les nouvelles constructions du Septième District ont été approuvées avec d'anciens standards. Il a vu les plans. Il a noté la discordance. Il n'a pas encore décidé ce qu'il allait faire de cette information.

Il a aussi noté que Cendrix était en mission active à Khar-Vurn. Il la connaît de réputation — une Capteur sérieuse. Il se demande pourquoi la Citadelle envoie une Capteur dans une ville déjà sous sa propre administration.`,
      },
      {
        titre: "Le compte qu'il ne rend pas",
        texte: `Pyrion veut finir de reconstituer la chaîne de commandement précédant la Rupture. Il a quatre-vingt-sept pour cent de l'image. Les treize pour cent manquants sont dans des archives impériales qu'il n'a pas l'autorisation de consulter à son niveau. Il cherche un moyen d'y accéder légitimement — une demande de révision historique, peut-être, ou une connexion avec quelqu'un qui a accès. Il ne sait pas encore ce qu'il ferait de l'image complète.`,
      },
    ],
    sorts: [
      { nom: 'Trait Thermique', description_lore: `Formation standard des Tireurs impériaux — précis, sans signature thermique visible à distance standard. Discret par design.` },
      { nom: 'Calibrage de Zone', description_lore: `Seize ans à analyser les systèmes de maintenance thermique lui ont donné un œil pour les structures — il voit les faiblesses avant de viser.` },
      { nom: 'Suppression Thermique', description_lore: `Développé pour les missions de maintien de l'ordre — neutraliser sans détruire.` },
      { nom: 'Tir de Dossier', description_lore: `Il l'a utilisé trois fois en seize ans de service. Chaque fois, il avait rédigé un rapport complet avant et après. Les rapports sont dans ses archives personnelles, pas dans les systèmes officiels.` },
      { nom: 'Mémoire Institutionnelle', description_lore: `Seize ans de registres. Il ne perd pas les informations qu'il accumule.` },
    ],
    relations: [
      { personnage_id: 2, nom: 'Cendrix', type: 'collègue_méfiant', texte: `Elle est venue dans ses locaux une fois pour un "accès aux archives de zone" — demande standard, traitement standard. Elle posait des questions légèrement au-delà du standard. Il a noté ça. Il ne sait pas si elle sait qu'il a noté ça. Il pense qu'elle le sait probablement.` },
      { personnage_id: 7, nom: 'Kael', type: 'source_indirecte', texte: `Kael est dans ses registres depuis seize ans — un forgeron du Quatrième District, survivant, témoin direct. Pyrion n'a jamais eu besoin de lui parler officiellement. Il sait où il est. Il garde ça comme information disponible si nécessaire.` },
      { personnage_id: 3, nom: 'Gravel', type: 'administré', texte: `Le fils de Drevahn, calibreur thermal du Quatrième District. Il est dans les archives — Drevahn est dans les archives, avec ses quatre rapports d'anomalie. Pyrion a vu Gravel parler dans des assemblées. Il comprend la colère de Gravel mieux que Gravel ne pense.` },
    ],
    lore_long: `LE REGISTRE PERSONNEL
Un chapitre de la vie de Pyrion, administrateur impérial de zone (Khar-Vurn)

—

I.

Le rapport mensuel de zone était sur son bureau depuis ce matin.

Pyrion le relut une fois, nota deux corrections mineures dans les marges, puis l'écarta. Il sortit son registre personnel — le vingt-et-unième depuis son arrivée à Khar-Vurn — et l'ouvrit à la page de la semaine.

Il y avait une entrée qu'il devait faire et qu'il reportait depuis deux jours : la demande d'accès aux archives de Cendrix. Il l'avait traitée de façon standard — accès accordé aux sections pertinentes de son niveau de clearance, refus poli pour les sections supérieures. Standard.

Ce qui n'était pas standard : elle avait posé une question sur les rapports de maintenance de 34, les trois mois précédant la Rupture. Elle voulait les originaux, pas les résumés.

Pyrion avait les originaux. Pas dans les systèmes officiels — dans ses propres archives, reconstitués patiemment depuis des sources partielles au fil des années. Les systèmes officiels avaient les résumés administratifs, qui manquaient quatre signalements.

Il avait dit à Cendrix que les originaux n'étaient pas en sa possession.

Ce n'était pas faux — ils n'étaient pas dans les systèmes auxquels elle demandait l'accès. C'était une réponse précise à une question légèrement différente de celle qu'elle avait posée.

—

II.

Il nota dans son registre : "Demande d'accès archives pré-Rupture par Capteur impérial Cendrix. Accordé niveau standard. Signalements manquants non mentionnés. Raison : non-demandé."

Il s'arrêta.

La vraie raison : il ne savait pas encore ce que Cendrix ferait avec l'information complète. Une Capteur impériale à Khar-Vurn cherchait Brasia — c'était connu dans les milieux administratifs locaux, même si personne ne le disait officiellement. Est-ce qu'elle cherchait aussi autre chose ? Est-ce que les signalements manquants étaient pertinents pour sa mission ou pour une autre ?

Il avait passé seize ans à construire une image de ce qui s'était passé en 34. Il ne voulait pas la lâcher dans des mains dont il ne connaissait pas l'usage.

Ce n'était pas de la désobéissance impériale. C'était de la prudence administrative.

—

III.

À dix-sept heures, il rangea son registre et alla chercher le dossier Drevahn dans ses archives physiques — un classeur beige ordinaire parmi vingt autres, pas d'étiquette particulière.

Le rapport de Drevahn du 14 juin 34. "Anomalie de pression secteur D-7. Demande d'inspection immédiate. Urgence estimée : haute." Tampon du superviseur de maintenance : "En attente d'examen — priorité B."

Le rapport du 29 juin. Même anomalie, chiffres plus élevés. Même tampon.

Le 18 juillet, la Rupture.

Il referma le classeur. Le remit à sa place. La chaîne de causalité était là, dans ce classeur, claire comme une colonne de chiffres. La responsabilité du superviseur était là aussi — mais le superviseur était mort dans la Rupture, et les morts n'avaient pas de suite administrative.

Ce qu'il ne savait pas encore : qui avait donné instruction au superviseur de classer ces rapports en priorité B. Là était le treize pour cent manquant.

Il rentra chez lui. Il avait un rapport mensuel à signer ce soir. Demain, peut-être, il trouverait une façon de demander accès au niveau d'archives supérieur sans alerter qui ne devait pas l'être.

Peut-être.`,
  },

  // ── 7 · KAEL ────────────────────────────────────────────
  7: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Forgeron de naissance',
        texte: `Kael est né dans le Quatrième District de Khar-Vurn, fils de forgeron, petit-fils de forgeron. Il n'a jamais eu l'ambition d'être autre chose. À vingt-deux ans il avait sa propre forge, au même endroit que celle de son père. Il fabriquait des pièces mécaniques — des composants d'engrenage, des joints d'étanchéité, des pièces de maintenance pour les conduits géothermiques. Un travail technique et anonyme qu'il aimait.`,
      },
      {
        titre: 'La nuit de la Rupture',
        texte: `Il avait quarante ans le soir de la Rupture Thermique. Il travaillait dans sa forge quand les premières anomalies de pression ont rendu ses instruments fous. Il a compris ce qui allait se passer — il connaissait les conduits de maintenance du Quatrième District mieux que n'importe quel superviseur officiel. Il a eu le temps d'évacuer sa forge et d'aller chercher trois voisins.

Il a aussi vu Drevahn dans les conduits ce soir-là. Il l'a vu entrer dans le secteur D-7 avec son kit de maintenance. Il n'a pas pu le rejoindre — la surtension avait déjà commencé dans cette section.

Ce qu'il n'a dit à personne pendant vingt-deux ans : il avait entendu Drevahn appeler à l'évacuation par radio. Il avait entendu la réponse de supervision. "En attente." "Non-prioritaire." Le superviseur parlait avec l'accent du Parti de l'Acier.`,
      },
      {
        titre: 'Reconstruction',
        texte: `Après la Rupture, Kael avait consacré un an à reconstruire sa forge. Exactement au même endroit. Exactement avec les mêmes dimensions. Il avait aidé aux reconstructions du district pendant la même période, à ses heures.

Il n'avait rejoint aucun parti politique. Le Parti du Feu était venu le recruter avec son histoire de survivant. Le Parti de l'Acier lui avait offert une certification qui lui aurait donné accès aux gros contrats. Il avait refusé les deux avec la même politesse laconique.

Vingt-deux ans plus tard, il forgait toujours. Sa forge avait de bons clients. Il n'avait pas besoin d'autre chose.`,
      },
      {
        titre: "Ce qu'il a dit à Gravel",
        texte: `Gravel était venu à sa forge il y a trois mois. Il cherchait des témoins de la nuit de la Rupture dans le secteur D-7 — des gens qui avaient été là, qui avaient peut-être connu son père.

Kael l'avait regardé et avait décidé de lui dire une partie de ce qu'il savait. Pas tout — la totalité aurait été une bombe dans les mains d'un homme aussi en colère que Gravel. Mais assez pour que Gravel sache que la vérité était plus compliquée que le récit du Parti du Feu.

Il avait dit : "Ton père a demandé l'évacuation du secteur D-7. Deux heures avant. Le superviseur a refusé." Il n'avait pas dit le nom du superviseur ni l'appartenance de sa voix. Gravel avait ces informations maintenant. Ce qu'il en ferait, Kael l'ignorait et préférait l'ignorer.

Brasia lui avait rendu visite la semaine suivante. Elle n'avait pas mentionné Gravel.`,
      },
      {
        titre: 'Continuer',
        texte: `Kael veut continuer à forger. C'est sa réponse à tout — pas par désintérêt ou lâcheté, mais parce que sa forge est au Quatrième District et que le Quatrième District a besoin de gens qui restent et qui travaillent. La reconstruction n'est pas que politique. Elle est aussi dans les pièces mécaniques que des gens fabriquent chaque matin dans des ateliers qui sentent le métal chaud.`,
      },
    ],
    sorts: [
      { nom: 'Lame du Forgeron', description_lore: `Quarante ans à forger avec son Feu. La lame thermique, c'est ce que sa forge ressemble quand il en a besoin.` },
      { nom: 'Trempe', description_lore: `La trempe du métal — chauffer pour renforcer. Il fait la même chose avec son propre corps.` },
      { nom: 'Chaleur de Forge', description_lore: `Sa forge rayonne. Il fait la même chose.` },
      { nom: 'Coulée', description_lore: `Il l'a utilisé une fois en vingt-deux ans. Lors d'une nuit où des agents impériaux sont venus récupérer quelqu'un qui était dans sa forge. Il n'en parle pas.` },
      { nom: 'Vieux Feu', description_lore: `Soixante-deux ans. Il en a vu d'autres. Son Feu ne panique pas.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'hébergé_chez_lui', texte: `Elle lui avait demandé un endroit pour cinq jours. Il avait dit oui sans poser de questions. Elle était médecin. Il ne posait pas de questions sur les médecins qui avaient besoin de cinq jours. Elle était repartie sans explication et sans dette explicite entre eux. Ce genre de relation, il connaît — des gens qui se tiennent par l'absence de demandes.` },
      { personnage_id: 3, nom: 'Gravel', type: 'lui_a_dit_la_vérité_partielle', texte: `Il lui a dit ce qu'il savait, partiellement. Il ne regrette pas. Il surveille de loin ce que Gravel fait avec cette information — pas pour intervenir, pour savoir si sa décision était bonne ou mauvaise.` },
      { personnage_id: 6, nom: 'Pyrion', type: 'connu_des_archives', texte: `L'administrateur impérial. Il est passé à la forge deux fois en seize ans pour des questions de zone — recenser les survivants, vérifier les reconstructions. Kael l'a trouvé compétent et froid. Ce n'est pas une insulte. Compétent et froid en administration, dans une zone de deuil, c'est une qualité.` },
    ],
    lore_long: `LE QUATRIÈME DISTRICT
Un chapitre de la vie de Kael, forgeron (Indépendant)

—

I.

Gravel était revenu.

Pas pour la forge — Kael le vit dans la façon dont il était entré, sans regarder les métaux en attente, sans le saluer comme un client. Pour une conversation. La deuxième en trois mois.

"J'ai besoin de savoir son nom. Le superviseur."

Kael posa son marteau. Il s'essuya les mains sur son tablier.

"Pourquoi ?"

"Parce que je veux savoir qui."

"Et après tu sais qui, tu fais quoi ?"

Gravel ne répondit pas immédiatement. C'était une bonne chose — ça signifiait qu'il n'avait pas de réponse préfabriquée. Kael lui accordait ça.

—

II.

Le superviseur s'appelait Herrath. Du Parti de l'Acier, division maintenance. Mort dans la Rupture, secteur D-4, deux heures après avoir refusé l'évacuation de D-7.

Kael connaissait ce nom depuis vingt-deux ans. Il l'avait gardé parce que les informations utiles se gardaient et qu'on ne savait jamais quand elles devenaient nécessaires.

Il regarda Gravel. Un homme de quarante-et-un ans avec le marteau de son père à la ceinture et vingt-deux ans de deuil dans les yeux. Quelqu'un qui portait cette colère dans des assemblées du Parti du Feu et qui en faisait quelque chose de politiquement utilisable, ce qui n'était pas la même chose que quelque chose de vrai.

Le nom de Herrath dans la bouche de Gravel allait finir dans un discours du Parti du Feu. Kael le savait avant que Gravel le sache.

"Herrath," dit-il.

Il vit quelque chose changer dans le visage de Gravel.

"Du Parti de l'Acier," continua Kael. "Mort dans la Rupture. Dans le secteur D-4."

Silence.

"Il était sous les ordres de qui ?"

"Je sais pas."

Ce n'était pas entièrement vrai. Il avait des hypothèses. Mais les hypothèses n'étaient pas des faits, et donner des hypothèses à quelqu'un d'aussi en colère que Gravel c'était lui donner du bois pour un feu qui brûlait déjà sans contrôle.

—

III.

Gravel repartit sans dire autre chose.

Kael reprit son marteau. Le métal dans la forge attendait — un joint d'étanchéité pour un conduit du Huitième District, commande standard, délai d'une semaine.

Il frappa. La cadence du travail.

Herrath était mort. Ses supérieurs étaient peut-être encore vivants quelque part dans les structures du Parti de l'Acier ou de l'administration impériale. La chaîne de commandement de 34 était enfouie dans des archives que Pyrion essayait de reconstituer — Kael avait noté que l'administrateur posait des questions discrètes depuis plusieurs années.

Ce n'était pas à lui de démêler ça. Il avait sa forge. Le Quatrième District avait besoin de gens qui restaient et qui travaillaient. Il avait fait les deux depuis vingt-deux ans.

Ce qu'il avait donné à Gravel était ce qu'il pouvait donner sans mentir et sans tout dire. C'était l'équilibre qu'il cherchait depuis vingt-deux ans. Il n'était pas sûr d'avoir bien choisi. Il n'était pas sûr d'avoir mal choisi non plus.

La forge chauffait. Le métal attendait.`,
  },

  // ── 8 · VELINDRA ────────────────────────────────────────────
  8: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Givrin à Khar-Vurn',
        texte: `Les Givrins de Khar-Vurn sont une minorité fonctionnelle — quelques dizaines de Régulateurs thermiques impériaux qui assurent l'équilibre entre la chaleur géothermique de la ville et les besoins de refroidissement des forges de précision. Velindra est née à Crysalme et affectée à Khar-Vurn à vingt-six ans, sur recommandation de son formateur. Elle n'avait pas demandé Khar-Vurn. Elle y avait été envoyée parce que le poste de Régulateur thermique était vacant depuis la "suppression" de Veldris et que quelqu'un de compétent était nécessaire rapidement.`,
      },
      {
        titre: 'Le poste de Veldris',
        texte: `Les premiers mois, elle avait essayé de comprendre ce qui s'était passé avec Veldris. Les archives de son prédécesseur étaient partielles — ce qui restait suggérait un Givrin compétent, respecté, avec une longévité de service au-dessus de la moyenne. Les circonstances de sa "suppression" n'étaient pas dans les archives accessibles à son niveau.

Elle avait arrêté de chercher quand un superviseur de rang supérieur lui avait fait une remarque sur "la qualité de concentration nécessaire dans un poste sensible". C'était une remarque de supervision ordinaire. Elle l'avait entendue comme un avertissement.`,
      },
      {
        titre: 'Une heure de couverture',
        texte: `Il y a deux ans, une femme avait frappé à sa porte de service à deux heures du matin. Petite, capuche relevée, perles de pierre cendrée dans les cheveux qu'on voyait à peine. Elle avait dit un seul mot : un code de protocole d'urgence médical que Velindra connaissait théoriquement mais n'avait jamais entendu en dehors des formations.

La femme avait besoin d'une heure de couverture thermique dans le corridor C-7. Un groupe de personnes devait passer. Elle ne lui avait pas demandé de regarder, juste de ne pas signaler l'anomalie thermique que ses capteurs allaient détecter pendant cette heure.

Velindra avait dit oui. Elle ne sait toujours pas pourquoi.

Elle a su plus tard que c'était Brasia.`,
      },
      {
        titre: "L'équilibre fragile",
        texte: `Velindra fait son travail avec la précision qui lui a valu sa nomination. Les forges de précision de Khar-Vurn ont besoin de températures stables. Elle les maintient. Les rapports de régulation thermique qu'elle soumet sont corrects et complets.

Elle sait que Cendrix est en mission active à Khar-Vurn. Elle sait que Cendrix cherche Brasia. Elle ne sait pas si Cendrix sait ce qu'elle a fait il y a deux ans. Elle procède comme si Cendrix ne savait pas, en espérant que c'est vrai.

Ce qui la préoccupe en ce moment : son rapport mensuel doit inclure une anomalie thermique mineure dans le corridor C-7. Une résiduelle de l'heure de couverture d'il y a deux ans, détectée par les nouveaux capteurs installés en janvier. Elle a reformulé la note d'anomalie six fois depuis hier.`,
      },
      {
        titre: 'Continuer',
        texte: `Continuer à être Régulateur thermique à Khar-Vurn. Maintenir l'équilibre entre ce qu'elle sait et ce qu'elle peut supporter de faire. Ne pas disparaître comme Veldris.`,
      },
    ],
    sorts: [
      { nom: 'Gel de Régulation', description_lore: `C'est son travail : ralentir les flux thermiques incontrôlés. Elle applique ça aux adversaires avec la même précision qu'aux conduits de forge.` },
      { nom: 'Zone Tampon', description_lore: `La même technique qu'elle utilise pour équilibrer les températures des forges de précision. Un équilibre forcé.` },
      { nom: 'Couverture Thermique', description_lore: `Ce qu'elle a accordé à Brasia. Elle s'en souvient exactement à chaque fois qu'elle l'utilise.` },
      { nom: 'Neutralisation', description_lore: `Elle n'a jamais déclenché ça contre un être humain. Elle l'a déclenchée sur un conduit de forge en surtension il y a sept ans. Ça avait fonctionné.` },
      { nom: 'Peur du Poste', description_lore: `Onze ans à surveiller ses propres rapports avant de les soumettre. Elle a développé un instinct pour ce qui observe.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'a_aidée', texte: `Elle lui a accordé une heure de couverture thermique sans savoir exactement pourquoi. Elle a su après que c'était pour treize Élus non enregistrés. Elle ne sait pas comment elle se sentait à ce sujet et elle ne veut pas s'interroger là-dessus parce que les conclusions ne seraient pas utiles à sa situation actuelle.` },
      { personnage_id: 2, nom: 'Cendrix', type: 'menace_potentielle', texte: `Une Capteur impériale en mission active dans sa ville. Elle ne peut pas l'éviter — leurs fonctions se croisent sur les systèmes de surveillance thermique. Elle est professionnelle dans leurs échanges. Elle vérifie chaque soir si ses rapports contiennent quelque chose que Cendrix pourrait utiliser.` },
      { personnage_id: 4, nom: 'Thryss', type: 'collègue_technique', texte: `Le représentant du Parti de l'Acier qui travaille sur les normes thermiques. Ils ont des réunions techniques régulières — leurs domaines se chevauchent. Elle apprécie sa rigueur et lui fournit des données de régulation qui ne sont pas toujours dans les rapports officiels. Une relation de travail qui lui rappelle que des gens compétents essaient de construire quelque chose de mieux, même lentement.` },
    ],
    lore_long: `L'ANOMALIE DU CORRIDOR C-7
Un chapitre de la vie de Velindra, Régulateur thermique impérial (Khar-Vurn)

—

I.

Le rapport mensuel attendait depuis trois jours sur son bureau.

Elle l'avait rédigé en vingt minutes — les données de régulation étaient propres, les températures stables, les forges de précision avaient fonctionné sans incident notable. Un rapport sans problème.

Sauf la note en bas de page, section 4.b, anomalies résiduelles : une fluctuation thermique détectée dans le corridor C-7, quatorzième du mois, 02h17. Durée : 58 minutes. Amplitude : inférieure aux seuils d'alerte standard. Source probable : condensation sur les capteurs suite à variations climatiques nocturnes.

Elle avait relu cette note six fois depuis hier.

—

II.

Il y a deux ans, elle avait accordé une heure à une femme qui avait frappé à sa porte de service à deux heures du matin. La femme avait dit un code de protocole d'urgence médicale. Velindra ne savait pas d'où elle connaissait ce code. Elle ne posait pas de questions sur les codes qu'elle reconnaissait.

Elle avait masqué les capteurs du corridor C-7 pendant une heure. Elle avait regardé ses instruments sans rien noter. Elle avait attendu. Une heure plus tard, tout était revenu à la normale.

Elle avait su plus tard que la femme s'appelait Brasia. Que treize Élus non enregistrés avaient passé le corridor C-7 cette nuit-là. Que cette heure avait fait partie d'un réseau d'exfiltration qui avait sorti ces personnes des registres impériaux.

Elle n'avait pas su quoi faire de ces informations alors. Elle ne savait toujours pas.

—

III.

Les nouveaux capteurs avaient une sensibilité supérieure aux anciens. La résiduelle thermique du passage de deux ans plus tôt — infime, imperceptible aux standards de l'époque — était suffisamment visible pour les nouvelles unités pour générer une note d'anomalie.

Condensation sur les capteurs suite à variations climatiques nocturnes.

Ce n'était pas faux. C'était une explication plausible. Les anciens capteurs auraient produit la même lecture. Si quelqu'un avait des raisons de creuser — une Capteur impériale en mission active dans sa ville, par exemple — la plausibilité ne serait pas suffisante.

Velindra pensa à Veldris. Elle l'avait fait six fois cette semaine.

Veldris avait fait quelque chose. Elle ne savait pas quoi exactement. Son poste avait été "supprimé" et les archives de la suppression n'étaient pas à son niveau de clearance.

Elle prit la note d'anomalie. La relu une septième fois.

—

IV.

Elle avait deux options.

Option A : conserver la note comme rédigée, condensation sur les capteurs, aucune suite. Probabilité qu'on la creuse : faible si Cendrix cherchait Brasia pour d'autres raisons, élevée si Cendrix était précisément là pour les corridors thermiques de deux ans plus tôt.

Option B : supprimer la note. Réel risque si les nouveaux capteurs généraient des rapports automatiques en parallèle — elle n'était pas sûre de leur architecture de sauvegarde.

Option C : modifier la note pour éliminer la référence temporelle précise tout en conservant l'anomalie. Plus difficile à détecter qu'une suppression, moins risqué qu'une conservation intégrale.

Elle opta pour C. Elle reformula la note pendant vingt minutes.

"Fluctuation thermique résiduelle mineure dans le corridor C-7, quatorzième trimestre, indéterminée. Source probable : condensation nocturne sur capteurs récemment installés. Aucune suite requise."

Elle relut. Signa. Soumit le rapport.

—

V.

Elle resta assise devant son bureau après ça, sans rien faire pendant quelques minutes.

Veldris avait fait quelque chose. Son poste avait été supprimé. Elle avait fait quelque chose de similaire à ce que Veldris avait fait — elle n'en était pas sûre, elle ne connaissait pas les détails du cas Veldris, mais la similitude était là.

Ce qui la distinguait de Veldris, si quelque chose la distinguait : elle avait modifié un rapport. Elle ne l'avait jamais fait avant. Elle n'était pas sûre de comment elle se sentait à ce sujet.

Elle se leva. Il y avait des relevés de température à vérifier dans les forges du nord. Son travail était là, régulier, précis. Elle continuerait à faire son travail.

C'était la seule chose qui la gardait à sa place. Et sa place était la seule chose qui la gardait existante.`,
  },

  // ── 9 · SKARITH ────────────────────────────────────────────
  9: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'La garde civile',
        texte: `Skarith est entré dans la garde civile de Khar-Vurn à dix-huit ans, formé par le Parti de l'Acier dans les protocoles de maintien de l'ordre. Il y était depuis quarante-cinq ans. Commandant depuis vingt-huit ans. Il avait vu quatre directeurs se succéder au Parti de l'Acier, trois crises de zone, un incendie majeur dans les forges du Deuxième District, et la Rupture Thermique.`,
      },
      {
        titre: 'La nuit de la Rupture',
        texte: `Il avait quarante et un ans le soir de la Rupture. Il commandait deux cent quarante hommes répartis sur huit postes de zone. Quand les premiers signaux d'anomalie sont apparus, il avait activé le protocole de crise de niveau 3 — le plus élevé — et déployé ses unités aux points de contrôle des districts à risque.

Pendant six heures, ses hommes avaient tenu leurs positions. Ils avaient évacué des rues, guidé des populations vers des zones de sécurité, empêché les paniques qui auraient ajouté des morts aux morts. Ils avaient aussi bloqué les accès aux zones de surtension active.

Il avait donné cet ordre à 23h12. Il l'avait noté dans son carnet de protocoles à 23h14.`,
      },
      {
        titre: "Ce que l'ordre a coûté",
        texte: `Dans les jours suivant la Rupture, treize familles avaient déposé des plaintes contre la garde civile pour obstruction pendant l'évacuation. Treize membres de familles qui avaient voulu entrer dans les zones de surtension et que ses hommes avaient empêchés d'y aller. Sept des treize personnes qu'ils voulaient rejoindre avaient été retrouvées mortes dans les décombres.

Six avaient été retrouvées vivantes.

Skarith avait lu chaque plainte. Il avait rédigé des réponses personnelles à chacune — pas des réponses standardisées, des réponses précises qui expliquaient la logique de l'ordre, les risques calculés, pourquoi ses hommes avaient maintenu la position.

Ces réponses étaient dans ses archives. Il ne sait pas si elles ont aidé qui que ce soit.`,
      },
      {
        titre: 'Commandant en service',
        texte: `Skarith commande encore la garde civile de Khar-Vurn. Il est passé commandant de rang 2 il y a six ans — la promotion aurait dû l'éloigner du terrain. Il a négocié pour garder la responsabilité opérationnelle directe. Le Parti de l'Acier avait accepté parce que Khar-Vurn était complexe et qu'il était le meilleur.

Il a noté à Thryss que les nouvelles constructions du Septième District avaient des normes insuffisantes. Il dit ce qu'il observe. Ce que les autres en font n'est pas son département.

Il sait que Cendrix est en mission active dans sa ville. Il sait ce que font les Capteurs. Il a une unité en surveillance passive — rien d'officiel, juste des yeux qui savent ce qu'ils regardent. Si Cendrix opère dans sa ville, il veut savoir ce qu'elle fait.`,
      },
      {
        titre: 'Les protocoles de la prochaine',
        texte: `Skarith prépare les protocoles de la prochaine crise. Il ne sait pas ce que ce sera — une Rupture, quelque chose de différent, une escalade politique. Mais les crises arrivent et il vaut mieux avoir des procédures claires avant. Il travaille sur un nouveau manuel de gestion de crise depuis dix-huit mois. Il est sur le dixième draf.`,
      },
    ],
    sorts: [
      { nom: 'Posture de Commandement', description_lore: `La première technique enseignée à la garde civile. Il la fait depuis quarante-cinq ans. Elle est devenue un réflexe avant d'être un sort.` },
      { nom: 'Ordre de Dispersion', description_lore: `Le protocole de maintien de l'ordre — créer un périmètre sans confrontation directe. Ses hommes savent ce que ce geste signifie.` },
      { nom: 'Frappe Disciplinée', description_lore: `Quarante-cinq ans de formation. Il frappe où ça fait le plus d'effet au bon moment.` },
      { nom: "Protocole d'Urgence", description_lore: `Le protocole de niveau 3, activé le soir de la Rupture. Il l'a déclenché une deuxième fois depuis — lors d'une émeute au Troisième District il y a huit ans. Les deux fois, les pertes dans ses rangs ont été nulles.` },
      { nom: 'Expérience du Commandant', description_lore: `Quarante-cinq ans à lire des situations d'urgence. Il sait ce qui va exploser avant que ça explose.` },
    ],
    relations: [
      { personnage_id: 4, nom: 'Thryss', type: 'allié_Acier', texte: `Ils se respectent mutuellement parce qu'ils appliquent la même rigueur à des domaines différents. Skarith lui signale les problèmes opérationnels qu'il observe. Thryss lui transmet les implications techniques. Ni l'un ni l'autre n'exagère ni ne minimise.` },
      { personnage_id: 2, nom: 'Cendrix', type: 'surveillance_passive', texte: `Une Capteur impériale dans sa ville est dans sa zone de responsabilité. Il ne lui a rien dit de sa surveillance. Elle est compétente et il respecte ça. Il ne lui fait pas confiance parce qu'il ne fait confiance à personne dont il ne connaît pas les objectifs précis.` },
      { personnage_id: 3, nom: 'Gravel', type: 'administré_politique', texte: `Gravel représente des gens que Skarith a bloqués pendant la Rupture. Skarith ne le sait pas précisément — la connexion n'est pas documentée. Mais il connaît Gravel des assemblées et il reconnaît le type de colère. Ce n'est pas de la méfiance. C'est de la compréhension.` },
    ],
    lore_long: `PROTOCOLE DE NIVEAU 3
Un chapitre de la vie de Skarith, commandant de la garde civile (Khar-Vurn)

—

I.

Le rapport de surveillance était sur son bureau depuis ce matin.

Deux de ses hommes en civil avaient suivi Cendrix pendant soixante-douze heures. Résultat : elle visitait les archives administratives de zone, elle avait eu un échange avec l'administrateur Pyrion, elle se déplaçait dans le District Quatorze le soir. Elle était seule dans ses déplacements nocturnes.

Skarith nota dans son carnet de protocoles : "Capteur impérial Cendrix. Mission active non déclarée à la garde civile. Déplacements nocturnes solo. Zone d'intérêt : District 14."

Il ne nota pas ses conclusions sur ce que ça signifiait. Les conclusions allaient dans sa tête, pas sur le papier. Le papier était pour les faits.

—

II.

Il avait quarante et un ans le soir de la Rupture.

Le souvenir qu'il avait de cette nuit était singulièrement propre — pas fragmenté comme les souvenirs de crise l'étaient pour la plupart des gens. Il se rappelait chaque décision, dans l'ordre, avec les raisons. Il les avait notées dans son carnet le lendemain matin, pendant que le Quatrième District fumait encore.

"23h12 — Activation protocole crise niveau 3. Fermeture des accès aux zones de surtension. Raison : risque d'extension des dégâts thermiques à personnel non équipé. Décision confirmée par estimation des pertes probables si entrée non contrôlée."

Treize familles avaient déposé des plaintes. Treize membres de familles bloqués. Sept morts. Six vivants.

La logique de sa décision restait la même vingt-deux ans après. Et les nuits difficiles restaient les nuits difficiles.

Il n'avait jamais prétendu que ces deux choses se résolvaient l'une l'autre.

—

III.

Ce matin, il avait reçu un billet de Thryss sur les constructions du Septième District.

Il était allé vérifier sur les plans disponibles en mairie. Normes type B, règlement de 34. Thryss avait raison — une erreur d'archivage, apparemment. Il avait appelé le bureau des normes pour signaler la discordance. On lui avait dit que Thryss avait déjà appelé et que le dossier était traité.

Bien. C'était la façon dont les systèmes devaient fonctionner — plusieurs nœuds qui détectent la même anomalie de façon indépendante. Le Parti de l'Acier avait des ingénieurs compétents.

Il espérait que les archives d'anomalie de maintenance du Quatrième District, celles de 34, avaient été traitées avec la même rigueur. Il savait qu'elles ne l'avaient pas été.

—

IV.

Il referma le rapport de surveillance sur Cendrix.

Elle n'avait rien fait d'illégal sous sa juridiction. Elle était à Khar-Vurn en mission impériale autorisée. Il n'avait pas le droit de l'interpeller, de restreindre ses mouvements, de lui demander ses objectifs. Il avait le droit de surveiller et de noter.

Ce qu'il notait : une Capteur impériale cherchait quelqu'un dans sa ville. Sa ville avait des gens dont il ne connaissait pas précisément les activités mais dont il suspectait qu'elles n'étaient pas toutes dans les registres officiels. L'intersection de ces deux faits était potentiellement une situation de crise.

Il ouvrit le dossier de protocoles de gestion de crise sur lequel il travaillait depuis dix-huit mois. Section 7 : interventions en présence d'agents impériaux dans la zone de responsabilité.

Il en était au dixième draf.

Il continua à écrire.`,
  },

  // ── 10 · THESSANDRA ────────────────────────────────────────────
  10: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Étudiante des Ordres Soigneurs',
        texte: `Thessandra avait rejoint les Ordres Soigneurs à dix-huit ans — sa mère était soignante, sa grand-mère aussi, la famille avait une tradition de soin qui n'était pas idéologique. Elle apprenait vite, travaillait bien, posait des questions précises. À vingt-deux ans, elle était en formation avancée avec Brasia comme pratiquante senior référente.

Elle avait compris immédiatement ce que Brasia était : quelqu'un qui soignait d'abord et posait les questions politiques après. Ce n'était pas naïf — c'était une façon de fonctionner que Thessandra reconnaissait parce qu'elle y aspirait elle-même.`,
      },
      {
        titre: 'Le décret',
        texte: `Le décret impérial interdisant les soins prioritaires aux Élus non enregistrés était arrivé lors d'une réunion d'ordre ordinaire. Thessandra l'avait lu une fois et compris qu'il signifiait que certaines personnes allaient mourir de façon administrative — pas de leur blessure, mais de la décision de quelqu'un que leur blessure ne méritait pas d'être soignée.

Brasia avait dit non dans la réunion. Thessandra avait dit rien — pas par lâcheté, par calcul. Si Brasia disait non et qu'elle disait non aussi, les deux seraient inutilisables. Elle avait gardé sa tête baissée pendant que Brasia gérait les conséquences directes.

Huit jours plus tard, elle avait aidé à évacuer les treize non-enregistrés. Pas en première ligne — en logistique. Elle avait fait les routes, noté les chemins, mémorisé ce qui était sûr.`,
      },
      {
        titre: 'La formation parallèle',
        texte: `Brasia lui avait appris tout ce qu'elle savait en cinq mois. Les techniques médicales d'abord — Thessandra les connaissait déjà, Brasia les avait perfectionnées. Puis les techniques de survie : disparaître, changer d'itinéraire, ne jamais utiliser le même point de contact deux fois, ne pas laisser de traces.

Brasia lui avait dit à la fin des cinq mois : "Tu es meilleure que moi sur les deux. Ça te met en danger différemment."

Thessandra avait demandé pourquoi. Brasia avait dit : "Parce que les gens qui sont bons pour disparaître finissent par croire qu'ils peuvent tout faire seuls."

Elle y pensait encore. Brasia avait raison sur ça.`,
      },
      {
        titre: 'Le réseau de Khar-Vurn',
        texte: `Thessandra gère le réseau de soin clandestin de Khar-Vurn — sept points de contact dans sept districts, une rotation d'équipements médicaux tous les quinze jours, une liste de patients prioritaires que les Capteurs n'ont pas encore repérés et qu'elle essaie de soigner avant qu'ils les repèrent.

Brasia l'a formée et elle gère maintenant seule. Brasia est encore là mais pas à Khar-Vurn en permanence — elle circule. Ce que Thessandra ne dit pas aux autres Dissidentes : elle gère mieux quand Brasia n'est pas là. Pas parce que Brasia est un poids — parce que Brasia est meilleure qu'elle sur certaines choses et que savoir ça la rend moins précise.

Yssara lui a transmis ce matin une liste de sept Élus non enregistrés dans le District Quatorze. Elle les a ajoutés à sa liste prioritaire. Sept de plus. Elle a l'équipement pour quatre.`,
      },
      {
        titre: 'Les trois patients manquants',
        texte: `Trouver de l'équipement médical pour les trois patients prioritaires qu'elle ne peut pas encore soigner. Elle a un contact dans le Sixième District qui peut peut-être obtenir des fournitures. Elle a rendez-vous demain.`,
      },
    ],
    sorts: [
      { nom: 'Flux de Chaleur', description_lore: `La technique de base de Brasia, affinée par cinq ans de pratique clandestine. Elle peut le faire dans n'importe quelles conditions — obscurité totale, bruit, stress — parce qu'elle l'a fait dans ces conditions.` },
      { nom: 'Cautérisation Rapide', description_lore: `Pour les situations qui n'attendent pas. Elle a développé la rapidité d'exécution après sa deuxième nuit où un patient avait failli mourir parce qu'elle avait mis trois secondes de trop.` },
      { nom: 'Chaleur Partagée', description_lore: `Développée pour soigner deux patients simultanément quand elle était seule dans sa cache. Elle l'a utilisée en combat pour la première fois à vingt-cinq ans lors d'un incident qui ne s'était pas passé comme prévu.` },
      { nom: 'Disparition Thermique', description_lore: `Ce que Brasia lui avait dit de maîtriser en priorité. "Si tu ne peux pas disparaître, tu ne peux pas soigner longtemps."` },
      { nom: 'Instinct du Soignant', description_lore: `Elle lit les corps avant de lire les mots. Ce réflexe s'est traduit dans son Feu — elle sait qui a besoin d'elle avant qu'ils le demandent.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'mentor', texte: `Brasia lui a tout appris. Elle ne peut pas ne pas penser à ce que Brasia aurait fait dans chaque situation difficile — ce n'est pas de la déférence, c'est une référence calibrante. La différence : Brasia soigne en traçant des lignes politiques. Thessandra soigne et trace les lignes après. Elle pense que c'est une amélioration. Elle pense aussi que Brasia pense que c'est un risque.` },
      { personnage_id: 5, nom: 'Yssara', type: 'réseau_commun', texte: `Elles se voient deux ou trois fois par mois. Yssara lui apporte des informations sur les mouvements de Capteurs. Thessandra lui donne les zones à éviter et les points de contact sûrs. Leur accord est fonctionnel et sans chaleur particulière — Yssara n'est pas quelqu'un qu'on approche facilement. Thessandra respecte ça.` },
      { personnage_id: 8, nom: 'Velindra', type: 'contact_inconnu', texte: `Elle sait que quelqu'un a accordé une couverture thermique lors de l'exfiltration des treize. Elle ne sait pas qui. Elle ne cherche pas à savoir — les informations non nécessaires sont des risques non nécessaires. Mais si elle avait besoin d'une exfiltration similaire, elle saurait vers qui se tourner pour trouver qui chercher.` },
    ],
    lore_long: `SEPT DE PLUS
Un chapitre de la vie de Thessandra, soignante clandestine (Dissidentes, Khar-Vurn)

—

I.

Sept noms. Yssara lui avait transmis la liste ce matin, par un canal qui changeait chaque semaine.

Thessandra l'avait lue deux fois, mémorisée, brûlé le papier.

Elle avait l'équipement médical pour quatre patients. Elle avait les points de contact sûrs pour cinq des sept districts concernés. Elle avait un rendez-vous demain avec un contact dans le Sixième qui pouvait peut-être lui obtenir des fournitures. Peut-être.

Les trois patients pour lesquels elle n'avait pas encore l'équipement : deux avec des conditions chroniques qui nécessitaient des produits spécifiques, un avec une blessure qui ne pouvait pas attendre longtemps. Elle mit le troisième en tête de liste et planifie une visite ce soir.

—

II.

Brasia lui avait dit une fois : "Tu gères mieux seule parce que tu ne te compares pas à quelqu'un devant toi."

Thessandra n'avait pas répondu à ça sur le moment. Elle y pensait encore.

Ce n'était pas entièrement vrai — elle se comparait à Brasia en permanence, comme référence. Mais Brasia avait raison que la comparaison ne la paralysait pas. Elle l'utilisait comme calibration.

Ce que Brasia faisait mieux qu'elle : tracer des lignes. Brasia savait dire "jusqu'ici et pas plus loin" et tenir ce tracé. Thessandra était moins bonne là-dessus. Elle avait tendance à accepter le patient suivant et le suivant et le suivant jusqu'à ce que la liste soit trop longue pour ses ressources.

Sept de plus. Quatre couverts. Trois en attente.

Elle se demanda si Brasia aurait dit non à certains des sept. Elle décida que la question ne l'aidait pas.

—

III.

Le patient du soir s'appelait Marev — vingt-six ans, Élu Vent non enregistré, blessure à l'épaule suite à une confrontation avec des agents impériaux il y a dix jours. Il avait attendu avant de contacter le réseau parce qu'il avait peur que le réseau le signale.

Elle l'avait rassuré par relais de contact. Ce soir, elle venait.

Sa cache du District Onze était dans une cave de bâtiment de service — propre, sécurisée, trois sorties. Elle y avait de l'équipement pour deux patients.

Elle prit son matériel, vérifia ses routes, changea son itinéraire habituel pour un de secours. Couronne dans les cheveux — état mission.

—

IV.

L'épaule de Marev était dans un état pire qu'elle l'avait prévu.

Elle travailla pendant quarante-cinq minutes. Son Feu à la peau de Marev — chaleur précise, progressive, le flux thermique qui accélère la régénération sans brûler. Elle avait fait ça des centaines de fois. Chaque fois était la première fois pour la personne devant elle.

À un moment, Marev avait fermé les yeux. Thessandra avait vu ses épaules se détendre légèrement.

C'était toujours ce moment-là qui la convainquait que c'était la bonne chose. Pas les raisonnements politiques, pas les arguments doctrinaux. Ce moment-là.

—

V.

Elle était rentrée par la route longue.

Dans sa tête : demain matin, le rendez-vous pour les fournitures. Si son contact livrait, quatre des sept patients pourraient être couverts d'ici la fin de la semaine. Si la livraison échouait, elle devrait prioriser et deux patients attendraient encore.

Elle se demanda comment Brasia gérait ça — la liste qui ne se vide jamais, les ressources qui ne suffisent jamais. Peut-être que c'était ça, tracer des lignes. Pas de la dureté — une façon de rester en état de soigner le prochain.

Elle n'y était pas encore. Elle continuerait à accepter les sept. Et le huit et le neuf.

Elle espérait avoir les fournitures demain.`,
  },

  // ── 34 · LETH ────────────────────────────────────────────
  34: {
    timeline_position: { an: -1, lieu: "Leth'Var", arc: "L'Héritage Brûlé" },
    histoire: [
      {
        titre: 'Avant le Calendrier',
        texte: `Leth est né dans une forêt qui n'existe plus telle qu'elle était. La Sylvera d'il y a quatre cents ans avait un réseau de racines conscientes si dense qu'on pouvait, avec un peu de sensibilité élémentaire, entendre la forêt entière respirer. Pas métaphoriquement — les Élus Plante de l'époque percevaient les transmissions racinaires comme des sons bas, des vibrations continues, un chant sans début ni fin.

Son père était du groupe des Gardiens — à l'époque le terme n'existait pas, mais le rôle oui : des Sylvans qui géraient les espaces de renouvellement, les clairières brûlées pour permettre la repousse des espèces lumineuses. Son élément Fée s'est manifesté à vingt ans, dans une clairière après un brûlis contrôlé. Où la Plante sent les racines, la Fée sent les probabilités.`,
      },
      {
        titre: 'La Faim',
        texte: `Il avait quarante ans quand la Faim des Racines a commencé. Il l'a vu arriver — c'est ce qui lui a pris le plus longtemps à accepter. Son élément Fée lui montrait les déséquilibres dans les flux, les endroits où la croissance s'emballait sans régulation naturelle.

Il avait parlé. Les Conservateurs l'avaient ignoré. Personne ne coupe des arbres vivants par précaution. Quand la Faim a commencé à détruire les arbres-mémoire, il était dans la zone nord-est. Il a mémorisé ce qu'il pouvait des chants qui s'y trouvaient, les absorbant directement dans sa structure féerique.`,
      },
      {
        titre: 'Les cents premières années',
        texte: `Les cent ans après la Faim ont été les plus difficiles. Pas à cause du deuil — à cause de la reconstruction narrative. Les Conservateurs ont conclu que c'était le résultat de trop de brûlis. Les Gardiens que pas assez. L'Empire a conclu que la forêt ne pouvait pas se gérer seule et que le Calendrier des Fées était nécessaire.

Leth savait que les trois versions contenaient quelque chose de vrai et qu'aucune n'était complète. Il a commencé à garder ses propres archives — pas dans des arbres, dans lui-même.`,
      },
      {
        titre: "Ce que Leth'Var ne sait pas",
        texte: `Quatre cents ans plus tard, il supervise les brûlis contrôlés dans le secteur est de Leth'Var. L'Agente impériale Aeris vient le voir tous les trois mois. Il lui donne assez pour qu'elle revienne. Pas assez pour qu'elle n'ait plus besoin de lui.

Ce qu'il n'a dit à personne : il sait, depuis cinquante ans, que quelque chose dans la Citadelle du Voile est instable. Une dissonance dans les lignes du Calendrier — petite mais persistante. Il continue à observer.`,
      },
      {
        titre: 'Transmettre sans trahir',
        texte: `Leth cherche à transmettre ce qu'il sait à quelqu'un qui saura quoi en faire. Le problème est qu'il n'a pas encore trouvé cette personne. Les Gardiens veulent ses connaissances pour justifier leur doctrine. Les Conservateurs veulent ses souvenirs. L'Empire veut son accès aux lignes pré-Calendrier. Personne ne lui a demandé ce qu'il pense que ça veut dire.

Il attend. Quatre cents ans lui ont appris que les bonnes personnes arrivent.`,
      },
    ],
    sorts: [
      { nom: 'Ligne de Probabilité', description_lore: `Pendant la Faim des Racines, il avait utilisé ça pour guider les équipes de sauvetage vers les arbres-mémoire encore récupérables. Pas en cherchant — en regardant où les probabilités de trouver quelque chose de vivant étaient les moins mauvaises.` },
      { nom: 'Brûlis Contrôlé', description_lore: `La métaphore du brûlis contrôlé traduite en élément. Détruire les connexions qui étouffent pour permettre aux bonnes de croître. Il l'utilise rarement — seulement quand la situation est vraiment bloquée.` },
      { nom: 'Mémoire Racinaire', description_lore: `Il a stocké des milliers de schémas de combat dans sa mémoire féerique au fil des siècles. Un incident de 200 ans correspond souvent à quelque chose qui se passe maintenant. La forêt répète ses motifs.` },
      { nom: 'Le Témoin', description_lore: `Ce n'est pas une technique apprise. C'est quatre siècles d'observation compressés dans deux tours de combat. Il ne l'utilise que quand il juge que la situation en vaut le coût de son immobilité.` },
      { nom: 'Longévité', description_lore: `Quatre cents ans. On ne panique plus après quatre cents ans. Ce n'est pas de la sagesse — c'est juste que les menaces ont une taille relative que l'âge calibre correctement.` },
    ],
    relations: [
      { personnage_id: 31, nom: 'Sylvae', type: 'adversaire_respectée', texte: `Sylvae préserve des arbres-mémoire que Leth a regardé pousser. Il comprend pourquoi elle préserve — il a regardé d'autres être détruits. Ce qu'il ne lui a pas dit : certaines archives qu'elle protège contiennent des informations que la Citadelle cherche depuis des décennies.` },
      { personnage_id: 36, nom: 'Krath', type: 'membre_difficile', texte: `Krath brûle ses propres archives pour "rester libre". Ce qui préoccupe Leth : Krath ne comprend pas encore que certaines choses ne se retrouvent pas une fois perdues. Il n'a pas vu la Faim.` },
      { personnage_id: 35, nom: 'Aeris', type: 'interlocutrice_régulière', texte: `L'agente que l'Empire envoie à Leth'Var depuis vingt ans. Leurs réunions sont presque cordiales. Elle lui pose des questions précises. Il répond à côté — assez pour qu'elle ait quelque chose à rapporter, pas assez pour qu'elle ait ce qu'elle cherche vraiment.` },
    ],
    lore_long: `L'ŒIL DU BRÛLIS
Un chapitre de la vie de Leth, Gardien de Leth'Var (400 ans)

—

I.

Le feu avait pris trop à l'est.

Leth le vit dans les probabilités avant de le voir dans la fumée — une tension dans les flux, comme un fil tiré trop fort. Krath avait déclenché le brûlis du secteur sept en même temps que celui du secteur cinq, contrairement au protocole. Krath avait trente ans.

Il s'appuya sur son bâton et observa les deux colonnes de fumée qui montaient vers un ciel sans vent. Il dit aux Gardiens du secteur sept : — Ouvrez le couloir nord entre les deux feux.

— Si vous n'ouvrez pas le couloir, dit-il, le vent du sud-est se lèvera dans deux heures et les deux feux fusionneront. Alors ce ne sera plus un brûlis contrôlé.

Ils ouvrirent le couloir.

—

II.

Krath arriva en fin d'après-midi. — Tu as sabordé mon calendrier de brûlis.

— J'ai évité une fusion de feux.

Le vent du sud-est s'était levé à la deuxième heure, comme prévu. Krath demanda : — Comment tu savais ?

Leth réfléchit à comment répondre. Il y avait des dizaines de façons vraies. La plupart n'apprenaient rien à Krath.

— J'ai vu ce schéma, dit-il finalement. Pas ce mois-ci.

—

III.

Il avait vu ce schéma la première fois pendant la Faim des Racines. Des processus lancés trop proches les uns des autres, dont la combinaison créait une dynamique que personne n'avait anticipée.

Il avait alors quarante ans. Il avait dit à son supérieur : les zones nord-est et sud-ouest consomment leurs propres nutriments racinaires plus vite qu'ils ne les régénèrent. Si on ne crée pas des coupes de régulation dans les six mois, le réseau va s'emballer.

Son supérieur avait dit : les Conservateurs s'y opposeront.

Les coupes n'avaient pas été faites. Six mois plus tard, la Faim avait commencé. Elle avait duré dix-sept ans.

—

IV.

Le soir, Aeris passa comme elle passait tous les trois mois.

— Les archives du secteur dix-neuf mentionnent des interventions Fée pendant la Faim. Des interventions que les archives officielles ne tracent pas.

— Je peux te dire que j'étais présent pendant une de ces interventions, dit Leth. Et que ce que j'ai observé ne correspond pas à la version que la Citadelle archiverait.

— Tu ne me le diras pas ce soir.

— Non.

— Pourquoi ?

— Parce que la prochaine fois que tu viendras, la situation aura changé. Et ce que je te dirai sera plus utile dans ce contexte-là que dans celui-ci.

Il resta assis devant son feu et sentit, dans les lignes du Calendrier, la dissonance qu'il observait depuis cinquante ans. Elle s'était légèrement intensifiée ce mois-ci. Quelque chose dans le nord gelé avait bougé.

Il nota mentalement de surveiller les rapports d'Iskral. La forêt répétait ses motifs. Et les motifs qu'il reconnaissait dans ce nord-là, il les avait déjà vus commencer trois ans avant la Faim des Racines.`,
  },

  // ── 46 · VETHIS ────────────────────────────────────────────
  46: {
    timeline_position: { an: -1, lieu: "Vel'Nox", arc: "Vel'Nox Double Jeu" },
    histoire: [
      {
        titre: 'Le Vol de la Lumière',
        texte: `Vethis est né à Vel'Nox l'année du Vol de la Lumière. Il ne s'en souvient pas — il avait deux ans. Ce dont il se souvient, c'est d'une ville qui grandissait dans l'obscurité avec une certaine fierté pour cette obscurité.

Sa famille était marchande de la Couche Grise — des intermédiaires. À vingt-deux ans, un vieux Dissident mourant lui avait expliqué la structure des Trois Couches comme un système à maintenir plutôt qu'un marché à exploiter. Il lui avait proposé sa place.`,
      },
      {
        titre: 'Vingt Ans d\'Équilibre',
        texte: `Maintenir les Trois Couches signifiait garantir que la Couche Blanche restait fonctionnelle et visible. Que la Couche Grise restait utile pour que les acteurs qui en avaient besoin — dont les Fées — ne cherchent pas à créer leur propre réseau parallèle. Que la Couche Noire restait discrète.

En pratique : des dizaines de conversations dans des endroits sans témoins, des tensions résolues avant de devenir publiques. Un travail que personne ne voyait parce que le succès de ce travail était l'absence d'événement.`,
      },
      {
        titre: 'La Modification dans les Flux',
        texte: `Il y avait huit mois, quelque chose avait changé dans les flux de Ténèbres de Vel'Nox. Comme si un canal qui coulait à vitesse normale avait légèrement accéléré — et semblait attiré vers quelque chose en dehors de la ville.

Les flux qui avaient changé correspondaient à des zones spécifiques de la Couche Noire. Des dossiers sur des événements de la période du Premier Drain, quand la Convergence circulait encore dans des cercles fermés. Quelque chose d'extérieur à Vel'Nox tirait sur ces archives.`,
      },
      {
        titre: 'Le Marchand Tharyn',
        texte: `Tharyn avait remarqué quelque chose : de nouvelles marchandises circulaient dans Vel'Nox. Des informations sur des Élus spécifiques, leurs puissances exactes, leurs localisations. La Convergence achetait ces données.

Les profils d'Élus qui circulaient correspondaient à un profil spécifique — les Élus dont les éléments correspondaient aux dix-huit élémentaires requis par la doctrine du Premier Drain.`,
      },
      {
        titre: 'Garder les Couches Intactes',
        texte: `Son objectif immédiat : comprendre ce qui attire les flux vers les archives de la Couche Noire sans déstabiliser l'équilibre des Trois Couches.

Son objectif réel : si ce qu'il voit est la préparation du Premier Drain, Vel'Nox va devenir un nœud d'information critique. Les Trois Couches vont être sollicitées d'une façon qu'il n'a pas prévue. Il a besoin de savoir avant que ça arrive. Il va demander à Velath de chercher.`,
      },
    ],
    sorts: [
      { nom: 'Couche Grise', description_lore: `La manipulation Umbrienne de la réflectivité cutanée, amplifiée par l'élément Ténèbres. Pas l'invisibilité — la présence réduite. La différence importe.` },
      { nom: "Réseau de Vel'Nox", description_lore: `Vingt ans de contacts à Vel'Nox. L'information circule vite dans les Trois Couches. Quelqu'un est toujours en train de voir quelque chose d'utile.` },
      { nom: 'Équilibre des Couches', description_lore: `Ce qu'il fait dans les Couches de Vel'Nox depuis vingt ans — empêcher qu'un acteur prenne trop de place. Appliqué à un champ de bataille, c'est la même logique.` },
      { nom: 'Couche Noire', description_lore: `L'accès aux routes que personne ne cartographie. Vingt ans à Vel'Nox, et il en connaît des passages que les cartes officielles de la ville ne montrent pas.` },
      { nom: 'Présence Stable', description_lore: `Vingt ans à sentir quand les Couches de Vel'Nox changeaient. Ça développe une perception qui ressemble parfois à de la précognition.` },
    ],
    relations: [
      { personnage_id: 49, nom: 'Velath', type: 'associée_de_confiance', texte: `Velath connaît les routes que Vethis ne connaît pas. Leurs fonctions sont différentes mais complémentaires. Il lui fait confiance autant qu'on peut faire confiance à quelqu'un à Vel'Nox. Ce qu'il lui a dit sur les flux et la Convergence l'a prise au sérieux. Elle a commencé à préparer des routes.` },
      { personnage_id: 50, nom: 'Tharyn', type: 'source_marchande', texte: `Leur relation dure depuis quinze ans — Tharyn fournit des observations, Vethis les contextualise. L'information sur les nouvelles marchandises venait de lui. C'était la première fois en quinze ans que Tharyn avait eu l'air inquiet.` },
      { personnage_id: 48, nom: 'Shael', type: 'acteur_problématique', texte: `Shael achète des données dans la Couche Grise et dit faire de la justice redistributive. Vethis le surveille depuis six ans. Shael est probablement Convergence — les données qu'il achète correspondent au profil de collecte que Vethis observe dans les flux.` },
    ],
    lore_long: `LES TROIS COUCHES
Un chapitre de la vie de Vethis, Gardien des flux de Vel'Nox

—

I.

La Couche Blanche de Vel'Nox fonctionnait normalement.

Vethis traversait les marchés du soir, observant les échanges habituels — produits de transit, marchandises de luxe d'Asterciel, épices d'Ash'Rael sans manifeste douanier. Normal. Vel'Nox était une ville de transit et les transits non-déclarés étaient une fonction normale.

Ce qui n'était pas normal était dans les flux. Des Ténèbres légèrement déplacées dans la zone est, là où les archives de la Couche Noire étaient physiquement stockées. Cela durait depuis huit mois.

—

II.

Tharyn était à sa table habituelle.

— Les nouvelles marchandises, dit Vethis sans s'asseoir.

— Informations sur des Élus. Profils détaillés. Puissances spécifiques, localisations, stabilité élémentaire.

— Acheteurs ?

— Un seul acheteur régulier. Discret. Couche Grise. Mais l'argent vient de plus loin.

— La Convergence.

Tharyn ne répondit pas. Ce qui était une réponse.

— Quels Élus ?

— Tous les éléments. Mais seulement les purs.

Dix-huit éléments. Dix-huit purs. La doctrine du Drain.

—

III.

Ce qu'il avait trouvé dans les archives de la Couche Noire : les données sur les Élus qui circulaient correspondaient au profil du Premier Drain. La doctrine qui culminerait à An 0.

Quelqu'un préparait quelque chose. Et les archives de Vel'Nox, dans la Couche Noire, contenaient les préparatifs.

Velath lui avait dit de ne pas s'inquiéter de la Convergence. Il lui avait dit que les profils correspondaient aux dix-huit. Silence.

— Tu crois que ça va arriver ? demanda-t-elle.

— Je crois que ça a déjà commencé.

Velath avait regardé le plafond. — Les Trois Couches vont prendre du plomb.

— Elles tiendront.

Ce n'était pas une question. Il n'y avait pas répondu.`,
  },

  // ── 49 · VELATH ────────────────────────────────────────────
  49: {
    timeline_position: { an: -1, lieu: "Vel'Nox", arc: "Vel'Nox Double Jeu" },
    histoire: [
      {
        titre: 'Née dans le Noir',
        texte: `Velath est née dans Vel'Nox dix-neuf ans après le Vol de la Lumière, dans un quartier qui n'avait jamais vu la lumière directe du soleil depuis l'événement. Sa famille fabriquait des miroirs — les surfaces réfléchissantes de Vel'Nox. Elle avait grandi en comprenant la lumière comme quelque chose qu'on redirige, pas quelque chose qu'on crée.

À quatorze ans, elle avait découvert que la ville avait des passages qui ne dépendaient pas des surfaces réfléchissantes. Des routes dans l'obscurité complète où même les miroirs ne servaient à rien. Navigables seulement pour quelqu'un dont l'élément Ténèbres était suffisamment développé.`,
      },
      {
        titre: 'La Première Traversée',
        texte: `À dix-sept ans, elle avait guidé quelqu'un pour la première fois. Par accident, presque — un Élu non-enregistré qui se cachait dans un sous-sol qu'elle traversait. Elle l'avait guidé de Vel'Nox jusqu'à un point de transfert Dissident à quatre kilomètres.

Deux semaines plus tard, un contact Dissident l'avait trouvée. Ils voulaient savoir si elle pouvait en faire d'autres. Elle avait dit : ça dépend de la route et du passager. Ce qui était une façon de dire oui.`,
      },
      {
        titre: 'La Route du Nord-Est',
        texte: `Il y avait six ans, la route du nord-est avait failli être découverte. Un capitaine impérial avait détecté une signature récurrente dans les flux de Ténèbres. Elle avait su en deux jours que l'enquête existait. En quatre jours, elle avait arrêté d'utiliser cette route.

Ce qu'elle avait compris : le système de détection fonctionnait sur les signatures récurrentes. Un seul passage ne déclenchait rien. Un schéma régulier déclenchait quelque chose. Depuis, plus jamais deux passages identiques consécutifs.`,
      },
      {
        titre: 'Ce que Vethis lui a dit',
        texte: `Vethis lui avait parlé des flux, de la Convergence qui achetait des profils d'Élus purs. Ce que ça impliquait pour ses routes : rien, immédiatement. La Convergence cherchait de l'information, pas des routes.

À plus long terme : si An 0 approchait, il y aurait des Élus en fuite — ceux qui correspondaient aux dix-huit profils et qui l'auraient appris. Ces Élus auraient besoin de routes. Elle préparait déjà les extensions vers le sud — vers les frontières des déserts.`,
      },
      {
        titre: 'Les Routes Qui N\'Existent Pas',
        texte: `Son objectif est de maintenir des routes qui n'existent pas vers des endroits non cartographiés, pour des gens que personne ne cherche encore.

Elle a traversé le couloir naturel de soixante-dix kilomètres entre Vel'Nox et la frontière d'Ash'Rael deux fois. Elle connaît ses angles morts, ses points d'eau cachés, ses zones où la chaleur crée des mirages utilisables comme couverture visuelle.

Mieux vaut avoir des routes qu'on n'utilise pas que d'avoir besoin de routes qui n'existent pas.`,
      },
    ],
    sorts: [
      { nom: 'Route Secondaire', description_lore: `Ce qu'elle fait dans Vel'Nox. Chaque terrain a des angles morts, des zones que les gardes ne regardent pas, des passages qu'on ne voit pas parce qu'on ne les cherche pas.` },
      { nom: 'Lame Discrète', description_lore: `Elle n'utilise ses lames que quand c'est la seule option. Quand c'est la seule option, elle s'assure d'être dans la bonne position.` },
      { nom: 'Disparaître', description_lore: `La compétence Umbrienne que dix ans d'entraînement ont rendue automatique. Quand le danger augmente, la présence visuelle diminue.` },
      { nom: "Les Routes Qui N'Existent Pas", description_lore: `Ce qu'elle fait pour les passagers Dissidents — les sortir d'endroits où ils ne peuvent pas rester, les amener à des endroits que personne ne surveille.` },
      { nom: 'Présence Réduite', description_lore: `Une vie entière à être difficile à retranscrire et à cibler. Son corps a intégré l'effacement comme posture par défaut.` },
    ],
    relations: [
      { personnage_id: 46, nom: 'Vethis', type: 'associé_de_longue_date', texte: `La seule personne à Vel'Nox à qui elle a dit combien de routes elle connaît réellement. Une confiance partielle : suffisante pour travailler ensemble, insuffisante pour être vulnérable. Ce qu'il lui a dit sur les flux l'a prise au sérieux. Elle a commencé à préparer des routes par précaution.` },
      { personnage_id: 47, nom: 'Nyrreth', type: 'passager_récent', texte: `Arrivé à Vel'Nox il y a quatre mois. Il a utilisé une de ses routes pour entrer dans la ville par un point non officiel. Il connaît certains des espaces qu'elle utilise — plus habile que quelqu'un qui y est pour la première fois.` },
      { personnage_id: 45, nom: 'Ael', type: 'mission_inconnue', texte: `L'Élu dont l'énergie a été volée pendant le Vol de la Lumière. Mort selon les archives officielles. Version récente : peut-être encore vivant dans les ruines de sa tour à la frontière ouest de Vel'Nox. Elle n'est pas allée vérifier. Elle ne sait pas pourquoi.` },
    ],
    lore_long: `LA ROUTE DU SUD
Un chapitre de la vie de Velath, guide des Trois Couches de Vel'Nox

—

I.

Elle reconnaissait une route à sa stabilité.

Une route stable était une route que personne n'avait remarquée depuis longtemps — les gardes ne la regardaient pas, les systèmes de détection avaient ignoré ses traversées précédentes. La route du nord-est avait été stable pendant trois ans avant que le capitaine impérial commence son enquête. Depuis cette erreur, elle ne faisait plus rien deux fois de la même façon consécutive.

Ce soir, elle reconnaissait quelque chose d'inhabituel dans la zone sud de Vel'Nox.

—

II.

Elle avait commencé à explorer la zone sud il y a trois semaines. Il existait un couloir naturel de soixante-dix kilomètres entre Vel'Nox et la frontière des déserts d'Ash'Rael qui n'était cartographié par personne. Trop sec, trop difficile d'accès. Pour quelqu'un avec l'élément Ténèbres et une bonne mémoire de terrain, c'était une route.

Elle l'avait traversée deux fois. Elle connaissait maintenant ses angles morts, ses points d'eau cachés, ses zones où la chaleur du désert créait des mirages utilisables comme couverture visuelle.

—

III.

Ce soir, en traversant la zone sud, elle avait vu quelque chose dans les flux de Ténèbres.

Une signature en dehors de Vel'Nox qui utilisait les Ténèbres sur les distances. La Convergence, probablement. Lisant les archives de la Couche Noire depuis Ash'Rael.

Elle était restée immobile deux minutes, son propre élément effacé, et avait observé. Elle cherchait si la signature cherchait des routes ou de l'information.

Elle cherchait de l'information. Pour l'instant.

Elle avait noté mentalement d'observer à nouveau dans quatre semaines et avait continué vers son point de rencontre — guider un Élu Spectre hors de Vel'Nox par une route qui n'existait pas, vers un endroit que personne ne savait cartographier.

Son travail ordinaire. Pour l'instant, encore ordinaire.`,
  },

  // ── 54 · AETHREN ────────────────────────────────────────────
  54: {
    timeline_position: { an: -1, lieu: 'Iskral', arc: 'Les Archives Gelées' },
    histoire: [
      {
        titre: 'La Chaîne de Transmission',
        texte: `Son arrière-grand-père s'appelait Karev. Un soldat ordinaire dans la coalition de -312. Il avait été figé dans le Champ avec les autres.

Son grand-père avait grandi avec cette absence. Son père avait grandi avec cette histoire. Aethren avait grandi avec les deux — le souvenir d'une personne que personne dans sa famille vivante n'avait rencontrée, uniquement transmise par des portraits et des récits de second main.

À douze ans, il avait accompagné son père au Champ pour la première fois. Il avait regardé la glace pendant une heure. Il avait décidé qu'il serait Plongeur.`,
      },
      {
        titre: "L'Élément Inattendu",
        texte: `Son élément Fée s'était manifesté à seize ans, lors d'une visite clandestine au Champ. Il avait touché la surface. Ce qu'il avait perçu : le Champ n'était pas stable. Il y avait dans la glace un potentiel de dégel. Les probabilités convergeaient vers un point dans le temps où quelque chose se produirait.

Pas "le Champ va dégeler". "Le Champ est conçu pour dégeler."

Il avait rejoint les Dissidentes à dix-neuf ans pour accéder à des archives non officielles.`,
      },
      {
        titre: 'Sylkra et Keldris',
        texte: `Il avait appris l'affaire Sylkra par un contact Dissident. Sylkra avait signalé des micro-fractures. Keldris l'avait réduite au silence.

Les micro-fractures existaient — il les avait vues lors de sa dernière approche clandestine. Et les probabilités qu'il lisait depuis un an avaient changé de nature : le potentiel de dégel n'était plus lointain. Il était proche. Quelque chose avait accéléré le processus.

Il avait remarqué la Fée aux Archives. Une présence qui lisait les lignes secondaires chaque matin depuis neuf ans. Quelqu'un avait été envoyé surveiller quelque chose. Et cette personne était encore là.`,
      },
      {
        titre: 'La Fenêtre',
        texte: `Il sait, à travers les lectures de probabilités de son élément, qu'il a une fenêtre de dix-huit mois au plus. Soit il y est quand ça se passe, soit quelqu'un d'autre gère ça à sa place.

Ce qu'il ne sait pas : les mécanismes. Pourquoi maintenant. Comment le dégel va se produire. Et ce que Thyval a trouvé dans les serments il y a deux semaines.

Il attend dans les marchés du nord d'Iskral et observe la Fée des archives.`,
      },
      {
        titre: 'Karev, côté est',
        texte: `À la fin, son objectif est simple. Dégeler le Champ. Trouver Karev dans le côté est. Si Karev est vivant, lui parler. Si Karev n'est pas vivant, s'assurer que ce qu'il savait ne reste pas enfoui avec lui.

L'objectif est simple. Les obstacles sont institutionnels, élémentaires et logistiques, dans cet ordre. Il travaille par ordre d'obstacle.`,
      },
    ],
    sorts: [
      { nom: 'Plongée Probable', description_lore: `Il a développé ça à l'entraînement en regardant ses partenaires de combat se déplacer. La probabilité de déplacement d'un adversaire est lisible avant qu'il ne l'exécute. Il suffit de partir avant qu'il arrive.` },
      { nom: 'Fenêtre de Dégel', description_lore: `Une version tactique de ce qu'il cherche à faire au Champ Gelé — créer les conditions où quelque chose de figé peut se libérer.` },
      { nom: 'Mémoire du Champ', description_lore: `Dix ans à s'approcher clandestinement du Champ, à naviguer des gardes, à lire des terrains non balisés. Chaque approche est mémorisée.` },
      { nom: 'Percée', description_lore: `Le mouvement qu'il s'est imaginé faire depuis l'âge de douze ans : traverser tout ce qui sépare du Champ, arriver à Karev, côté est.` },
      { nom: 'Givre Probable', description_lore: `L'élément Fée amplifié par l'environnement de glace. Plus il anticipe correctement, plus le prochain coup vient vite.` },
    ],
    relations: [
      { personnage_id: 56, nom: 'Isvara', type: 'contact_potentiel', texte: `Il l'a vue dans les marchés deux fois. Sa signature Fée est faible mais il la perçoit. Elle travaille aux Archives et lit les lignes secondaires chaque matin. Elle sait quelque chose. Il n'a pas encore décidé comment l'approcher.` },
      { personnage_id: 55, nom: 'Thyval', type: "détenteur_d_information", texte: `Thyval a trouvé quelque chose dans les serments il y a deux semaines — les mots "instruction de dégel" ont été mentionnés. Si ce qu'il a trouvé est ce qu'Aethren cherche depuis cinq ans, Thyval est la clé. Le problème : Thyval est de la Monarchie qui a silencé Sylkra.` },
      { personnage_id: 53, nom: 'Sylkra', type: 'alliée_silenciée', texte: `Sylkra a vu ce qu'il voit depuis son propre angle. Il l'a contactée via un canal Dissident. Elle est méfiante et a peur de Keldris. Il lui a dit qu'elle avait raison sur les micro-fractures. Elle a ses coordonnées.` },
    ],
    lore_long: `KAREV, CÔTÉ EST
Un chapitre de la vie d'Aethren, Plongeur Dissident à Iskral

—

I.

Il avait mémorisé le visage depuis les portraits de famille.

L'arrière-grand-père s'appelait Karev. Un mètre quatre-vingt, pas plus. Regard lent, intense. Les portraits le montraient toujours de trois quarts — une convention esthétique de l'époque. Son grand-père avait dit que Karev regardait rarement directement quelqu'un qu'il ne connaissait pas. La confiance se gagnait.

Trois cent douze ans que Karev était dans le côté est du Champ Gelé. Trois cent douze ans que la famille transmettait son portrait et l'histoire de ce qui s'était passé.

—

II.

À seize ans, il avait touché la glace du Champ pour la première fois.

Cinq mètres de la surface. Sa main sur la glace. Ce qu'il avait senti : quelque chose de vivant à l'intérieur. Pas de la chaleur — de la potentialité. Et dans ses propres perceptions élémentaires — la Fée, qui venait de se manifester deux jours avant — une lecture claire : les probabilités dans cette glace convergeaient vers quelque chose.

Le Champ était prévu pour dégeler. Pas accidentellement. Par conception.

Il avait pris un fragment de glace en partant. Le fragment n'avait pas fondu depuis. Il le portait au cou depuis treize ans.

—

III.

Les micro-fractures avaient commencé à être visibles il y a dix-huit mois.

Il les suivait depuis un an et demi. Les probabilités qu'il lisait avaient changé de nature. Ce n'était plus "le Champ est conçu pour dégeler". C'était "le Champ va dégeler dans les prochains mois ou années".

Sylkra l'avait signalé. Keldris l'avait réduite au silence. Il l'avait contactée. Elle lui avait demandé comment il savait pour les micro-fractures. Il lui avait montré ses notes sur un carnet non-réglementaire. Elle avait regardé pendant une longue minute, puis : — Je croyais être la seule.

—

IV.

Ce soir, dans l'appartement loué sous une identité de travailleur des mines, il avait étalé ses notes.

Les probabilités pointaient vers les prochains mois. Convergence de plusieurs fils. La fenêtre s'ouvre. Il devait être dedans avant qu'elle se referme.

Il avait pris le fragment de glace du Champ dans ses mains. Toujours froid. Toujours stable. Toujours vivant.

Karev, côté est. Il serait là.`,
  },

  // ── 56 · ISVARA ────────────────────────────────────────────
  56: {
    timeline_position: { an: -1, lieu: 'Iskral', arc: 'Les Archives Gelées' },
    histoire: [
      {
        titre: 'Formation à la Citadelle',
        texte: `Isvara a grandi à la Citadelle du Voile. Née dans une famille d'archivistes — des Fées dont la fonction génération après génération est de lire le Calendrier. Elle excellait en lecture de lignes secondaires — les flux du Calendrier qui ne sont pas publiés dans les registres officiels mais qui soutiennent les flux principaux.

À vingt-huit ans, on lui avait proposé un poste à Iskral pour surveiller les Archives Gelées. Le Gel Éternel montrait des anomalies instrumentales depuis six mois. Elle avait accepté pour trois ans. Elle en est à neuf.`,
      },
      {
        titre: 'Les Lignes du Champ',
        texte: `Le troisième hiver, elle avait identifié la source d'une perturbation dans les lignes secondaires autour du Champ Gelé. Elle l'avait remontée dans les données archivées de la Citadelle. Le flux provenait des ajustements récents du Calendrier Principal — des modifications dont les signatures correspondaient à ce qu'on appelait Drain Préparatoire.

Le Drain Préparatoire était supposé n'exister que dans des textes de doctrine. Or les lignes montraient quelque chose en cours.`,
      },
      {
        titre: "Ce qu'elle n'a pas rapporté",
        texte: `Elle avait rédigé le rapport. Il était dans ses archives personnelles chiffrées, en troisième version maintenant.

Ce que le rapport disait : les modifications du Calendrier Principal ont créé une désynchronisation progressive des lignes secondaires qui dégrade le système de maintien thermique du Champ Gelé. D'ici dix à quinze ans au rythme actuel, le Champ commencera à dégeler de façon visible.

Ce qu'elle n'avait pas mis dans le rapport : si le Champ dégèle, les soldats gelés pourraient survivre. Cent quatre-vingt-sept témoins d'événements que les Givrins et l'Empire préféraient garder gelés.`,
      },
      {
        titre: 'Les Micro-fractures',
        texte: `La gardienne Sylkra avait signalé des micro-fractures il y a huit mois. Elle avait été réduite au silence par Keldris. Isvara était au courant des deux faits. Elle n'était pas intervenue.

L'archiviste Thyval avait trouvé dans les archives une instruction du défunt Élu Karath sur le dégel. Isvara l'avait lue. L'instruction entrait exactement en contradiction avec ce que la Monarchie soutenait publiquement.`,
      },
      {
        titre: 'La Décision qui approche',
        texte: `Dans deux hivers au plus, les micro-fractures seront visibles à l'œil nu. L'Empire enverra une équipe d'inspection qui trouvera ce qu'elle a trouvé. Et découvrira qu'elle le savait depuis six ans.

Elle cherche une troisième option. Ce qu'elle ne s'est pas encore dit clairement : cette troisième option ressemblerait à contacter Aethren — le Givrin Dissident avec une signature Fée — et lui dire que le Champ va dégeler de toute façon. Les deux informations ensemble changeraient quelque chose.

Elle n'a pas encore franchi cette ligne. Elle y pense.`,
      },
    ],
    sorts: [
      { nom: 'Lecture de Lignes', description_lore: `Elle fait ça sur les lignes secondaires depuis neuf ans. Lire un sort ennemi n'est pas fondamentalement différent de lire une anomalie dans les archives — c'est une désynchronisation dans un flux qui devrait être stable.` },
      { nom: 'Désynchronisation', description_lore: `Le même mécanisme que ce qu'elle observe se produire dans le Champ Gelé — des lignes secondaires qui se désynchronisent jusqu'à ne plus soutenir correctement les flux principaux.` },
      { nom: 'Archive Vivante', description_lore: `Neuf ans d'archives donnent des réponses à des situations qu'on n'a jamais vécues personnellement. Elle n'a pas appris à combattre — elle a appris à reconnaître des patterns.` },
      { nom: 'Ligne Secondaire', description_lore: `C'est ce qu'elle fait dans les archives. Voir ce que les registres officiels ne montrent pas. Voir le flux sous le flux.` },
      { nom: 'Froid du Nord', description_lore: `Elle n'avait pas prévu de rester neuf ans. Le corps s'adapte à ce que la volonté n'a pas planifié.` },
    ],
    relations: [
      { personnage_id: 53, nom: 'Sylkra', type: 'non_protégée', texte: `Sylkra avait raison. Isvara le sait. Elle n'a pas défendu Sylkra quand Keldris l'a réduite au silence. Le calcul était rationnel. Elle ne sait pas si rationnel et juste sont la même chose ici.` },
      { personnage_id: 55, nom: 'Thyval', type: "porteur_d_information", texte: `Thyval a trouvé l'instruction de dégel de Karath mais ne peut pas en saisir les implications techniques sans lecture de lignes secondaires. Isvara est la seule personne à Iskral qui peut comprendre ce document en totalité. Elle ne lui a pas dit qu'elle l'avait lu.` },
      { personnage_id: 54, nom: 'Aethren', type: 'contact_potentiel', texte: `Elle l'a croisé deux fois dans les marchés. Un Givrin avec une signature Fée non-déclarée. Elle sait qu'il a un ancêtre dans le Champ. Il a besoin d'elle sans le savoir. Elle n'a pas encore décidé si elle a besoin de lui.` },
    ],
    lore_long: `LES MICRO-FRACTURES
Un chapitre de la vie d'Isvara, archiviste impériale à Iskral

—

I.

Isvara avait regardé les micro-fractures toute la matinée.

Elles étaient à soixante mètres du bord du Champ, là où la glace montrait ses premières lignes de tension. Pas visibles à l'œil non formé. Sylkra l'avait signalé il y a huit mois. Keldris l'avait réduite au silence. Isvara avait ses propres instruments.

Les lignes secondaires montraient une désynchronisation qui avait progressé de trois pour cent en huit mois. Dans dix-huit mois, les fractures seraient visibles sans instruments.

—

II.

Il y avait cent quatre-vingt-sept personnes dans le Champ Gelé. Elle les avait comptées depuis les archives.

Cent quatre-vingt-sept Élus. Figés il y a trois cent douze ans. Les instructions de Karath pour le dégel — que Thyval avait trouvées dans les serments — semblaient indiquer qu'il avait prévu qu'ils survivraient.

Cent quatre-vingt-sept témoins de la guerre de -312. Cent quatre-vingt-sept personnes qui avaient vu des choses que personne d'autre en vie n'avait vues. Si le Champ dégelait et qu'ils survivaient, les récits se répandraient avant que l'Empire puisse les cadrer.

—

III.

La réponse la plus probable à pourquoi la Citadelle avait modifié les lignes secondaires : Drain Préparatoire. Un protocole théorique. Les ajustements effectués à la Citadelle correspondaient aux signatures théoriques. Soit quelqu'un l'avait activé sans le déclarer, soit les ajustements avaient des effets secondaires que personne n'avait anticipés.

Les deux explications étaient mauvaises. Pour des raisons différentes.

—

IV.

Ce matin, après deux heures devant les micro-fractures, elle avait rouvert le dossier sur Aethren.

Elle avait des données que personne d'autre ne possédait en totalité. Il avait une motivation que personne d'autre ne possédait aussi clairement. Si elle lui disait que le Champ allait dégeler de toute façon — pas dans cent ans, mais dans dix-huit mois au plus — il pourrait décider ce qu'il ferait de cette information. Et ses décisions auraient des conséquences qui se produiraient indépendamment de son rapport à elle.

Elle savait que c'était le genre de raisonnement qu'elle avait évité pendant six ans.

Pour l'instant, elle allait rédiger la version cinq du rapport.`,
  },

  // ── 206 · KETHVAL ────────────────────────────────────────────
  206: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Forgeron du Parti',
        texte: `Kethval est né dans le quartier du Parti de l'Acier, fils d'un forgeron dont le père était forgeron. Sa double nature Feu/Acier s'est révélée à seize ans quand il a commencé à travailler l'acier à haute température — son élément Feu contrôlait la chaleur, son élément Acier percevait la structure du métal en temps réel. À vingt ans, il était leur forgeron principal.`,
      },
      {
        titre: 'Ce Qui a Tenu',
        texte: `Pendant la Rupture, il était dans son atelier en train de travailler sur des armatures pour les abris du secteur B. Son atelier était dans le quartier Acier. Il avait survécu sans blessure.

Les armatures qu'il avait forgées pour les abris du secteur B avaient tenu. Celles du secteur D-7 n'étaient pas de lui — un contrat qu'il avait refusé deux ans plus tôt parce que les spécifications thermiques lui avaient semblé insuffisantes. Il avait soumis un contre-devis. Il avait été ignoré.`,
      },
      {
        titre: 'La Liste',
        texte: `Après la Rupture, il avait aidé à déblayer les décombres du D-7 avec son élément Acier pour détecter les structures encore stables. Il avait trouvé vingt-trois survivants.

Ensuite, il avait dressé une liste de tout ce qu'il avait construit ou refusé de construire dans les six ans précédant la Rupture. Il l'avait transmise au Parti de l'Acier. La réponse : ces informations n'étaient pas pertinentes pour la reconstruction. Il avait gardé la liste.`,
      },
      {
        titre: "Le Problème d'Ingénierie",
        texte: `Il travaille sur le problème d'armatures anti-Rupture sur son propre temps, dans son propre atelier. Il a développé une théorie : une armature combinant des alliages classiques avec des structures élémentaires Acier permanentes résisterait à des intensités thermiques de classe Rupture.

Ses prototypes tiennent à soixante-dix pour cent de l'intensité maximale théorique. Il cherche les trente pour cent restants.`,
      },
      {
        titre: 'La Structure Qui Tient',
        texte: `Il veut que ce qui s'est passé au D-7 ne puisse plus se passer. Pas "moins probable" — impossible. Pour ça, il a besoin de résoudre le problème d'ingénierie. Le Parti de l'Acier ne lui donnera pas les matériaux nécessaires tant qu'il n'aura pas une preuve conceptuelle.

Ce cercle continuera jusqu'à ce qu'il trouve une façon de le briser.`,
      },
    ],
    sorts: [
      { nom: 'Armature Thermique', description_lore: `La combinaison de ses deux éléments — la chaleur qui durcit, la structure qui tient. En combat, ça ressemble à une résistance qui ne fléchit pas.` },
      { nom: 'Frappe Structurelle', description_lore: `Son élément Acier lui permet de percevoir les points de rupture dans n'importe quelle structure. En combat, ça s'applique aux défenses ennemies.` },
      { nom: 'Forge de Combat', description_lore: `Ce qu'il fait dans son atelier, appliqué au temps réel d'un combat. Les armatures qu'il construit en secondes ne durent pas des siècles, mais elles durent assez.` },
      { nom: 'Structure Maximale', description_lore: `La structure maximale ne se déplace pas. Elle tient. C'est son principe de forge, appliqué à son propre corps.` },
      { nom: 'Perception de Rupture', description_lore: `Vingt ans à évaluer les points de fatigue structurelle dans les métaux. Les défenses d'un ennemi épuisé se lisent de la même façon.` },
    ],
    relations: [
      { personnage_id: 9, nom: 'Skarith', type: 'collègue_du_Parti', texte: `Skarith et lui représentent deux visions du Parti de l'Acier — la discipline militaire et l'ingénierie structurelle. Skarith lui a dit une fois : "Ce que tu construis dure après que les ordres changent."` },
      { personnage_id: 4, nom: 'Thryss', type: 'supérieur_politique', texte: `Thryss approuve ses travaux d'armature sans comprendre ses travaux d'armature. Kethval accepte ce compromis.` },
      { personnage_id: 3, nom: 'Gravel', type: 'adversaire_raisonnable', texte: `Gravel attribue la mort de Drevahn à la négligence systémique. Kethval sait que certaines armatures insuffisantes du D-7 étaient d'entreprises du Parti de l'Acier. Il n'a pas encore décidé s'il devrait le dire à Gravel.` },
    ],
    lore_long: `LA LISTE
Un chapitre de la vie de Kethval, forgeron du Parti de l'Acier

—

I.

La liste faisait trois pages.

Vingt-trois contrats acceptés, dont les armatures avaient survécu à la Rupture. Quatre contrats refusés, dont les spécifications thermiques étaient insuffisantes. Dont deux dans le secteur D-7.

Il avait transmis la liste au Parti de l'Acier dix jours après la Rupture. La réponse était arrivée avec trois semaines de retard : ces informations n'étaient pas pertinentes pour la reconstruction.

Il avait gardé la liste. Elle était maintenant encadrée dans son atelier.

—

II.

Il travaillait sur le problème depuis dix-sept mois.

Le problème : une armature anti-Rupture maximale. Son hypothèse : une armature avec une structure Acier élémentaire permanente résisterait en distribuant la chaleur dans le réseau métallique plutôt qu'en la bloquant. Le métal absorberait, redistribuerait, survivrait.

Ses prototypes tenaient à soixante-dix pour cent. Il cherchait les trente pour cent restants.

—

III.

Gravel avait dit à l'assemblée de la semaine passée que la mort de son père était le résultat de la négligence systémique de l'Empire.

Kethval était dans la salle. Gravel n'avait pas tort — l'Empire avait sous-financé la maintenance. Mais les armatures du secteur D-7 avaient été produites par des entreprises du Parti de l'Acier selon des spécifications que lui avait refusé de signer. Ces entreprises avaient pris le contrat après son refus.

Il avait gardé le silence pendant l'assemblée. Ce n'était pas de la complicité. C'était de la complexité. Il avait voté pour les nouvelles normes de spécification thermique à la fin de l'assemblée. Unanimement.

Ce soir, il retournait à son atelier. Les trente pour cent restants ne se résoudraient pas seuls.`,
  },

  // ── 226 · VRASH ────────────────────────────────────────────
  226: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Le Lecteur de Tensions',
        texte: `Vrash a grandi dans la zone neutre de Khar-Vurn, là où habitaient ceux qui appartenaient aux deux partis ou à aucun. Son double élément Feu/Psy s'était révélé à dix-huit ans, dans une assemblée politique qui avait dégénéré. Il avait senti la dégénération deux heures avant qu'elle ne se produise — une combinaison de chaleur émotionnelle et de signaux psychiques qui convergeait vers une pointe. Il était sorti avant que ça arrive.`,
      },
      {
        titre: 'La Rupture Annoncée',
        texte: `Deux ans avant la Rupture Thermique, Vrash avait commencé à percevoir une saturation dans le Quatrième District. Des travailleurs qui ne signalaient plus les problèmes parce qu'ils avaient appris que les signalements ne servaient à rien. Un fatalisme cumulé, une résignation collective.

Il en avait parlé à deux contacts dans les partis. Il avait dit : le Quatrième District va exploser. Les deux contacts avaient dit merci. Aucun n'avait agi.`,
      },
      {
        titre: 'Après',
        texte: `Il avait regardé les colonnes de fumée du Quatrième District depuis sa fenêtre en sachant exactement ce que c'était. Ce sentiment-là n'avait pas de nom satisfaisant.

Ce qu'il avait trouvé en reconstituant la chronologie : il avait perçu correctement. Il s'était exprimé de façon trop abstraite. "Pression sociale" n'avait pas le même poids que "le conduit va lâcher". Les gens répondent aux menaces concrètes, pas aux saturations émotionnelles.`,
      },
      {
        titre: 'Le Problème de Traduction',
        texte: `Il travaille maintenant avec Brasia ponctuellement — pas comme allié idéologique, mais parce qu'elle est la seule personne qui écoute ses lectures sans les reformuler dans le cadre de sa propre agenda. Il lui fournit des lectures de tensions dans des zones qu'elle ne peut pas accéder directement.

En parallèle, il travaille sur sa propre méthode. Comment dire "ce quartier est à saturation" de façon que quelqu'un agisse.`,
      },
      {
        titre: 'La Saturation Suivante',
        texte: `Il y a une saturation qui se construit en ce moment dans le quartier impérial de Khar-Vurn. Des agents qui reçoivent des ordres contradictoires depuis six mois et qui commencent à résoudre la contradiction d'une façon qui n'a pas été autorisée.

Il a dit ça à Brasia il y a deux semaines. Elle a dit qu'elle prenait note. Il surveille.`,
      },
    ],
    sorts: [
      { nom: "Lecture d'Intention", description_lore: `Ce qu'il fait dans les assemblées politiques. Savoir ce qui va venir avant que ça arrive.` },
      { nom: 'Chaleur Prémonitoire', description_lore: `La canalisation élémentaire crée une signature thermique et psychique avant de se produire. Il la lit et frappe à ce moment précis.` },
      { nom: 'Saturation', description_lore: `Ce qu'il a observé dans le Quatrième District avant la Rupture. Trop de pression, trop de signaux contradictoires — les gens cessent d'agir de façon cohérente.` },
      { nom: 'Moment de Rupture', description_lore: `Il y a un moment dans chaque situation de tension où tout peut basculer. Il le voit. Il donne à ses alliés ce moment.` },
      { nom: 'Pas de Surprise', description_lore: `Après avoir prédit la Rupture sans être entendu, il a appris à surveiller aussi ce qui le menace directement.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'partenaire_fonctionnelle', texte: `La seule personne qui utilise ses lectures sans les reformuler dans son propre cadre. Leur collaboration est strictement fonctionnelle et c'est pourquoi elle dure.` },
      { personnage_id: 2, nom: 'Cendrix', type: "sujet_d_observation", texte: `Il l'a lue deux fois lors d'assemblées. Ce qu'il a perçu : une conviction sincère et une sélection rigoureuse de ce qu'elle exprime versus ce qu'elle ressent. Ce n'est pas de la duplicité — c'est de la discipline.` },
      { personnage_id: 11, nom: 'Orkhael', type: 'exemple_négatif', texte: `Orkhael utilise la blessure du Quatrième District comme outil politique. Vrash peut percevoir la différence entre quelqu'un qui souffre et quelqu'un qui utilise la souffrance des autres. Il n'a rien dit de cela publiquement.` },
    ],
    lore_long: `LA TRADUCTION
Un chapitre de la vie de Vrash, lecteur de tensions indépendant

—

I.

Il avait dit "pression sociale".

C'était le problème. Deux ans avant la Rupture, il avait dit à son contact du Parti du Feu que le Quatrième District avait une pression sociale qui cherchait une sortie. Son contact avait hoché la tête. Il n'y avait pas eu d'action.

Depuis la Rupture, il travaillait sur la traduction. La question n'était pas "qu'avais-je perçu". C'était "comment l'exprimer pour que quelqu'un agisse".

—

II.

Brasia avait demandé à le voir il y a trois jours.

— Tu as mentionné une saturation dans le quartier impérial.

— Oui.

— Précise.

— Des agents qui reçoivent des ordres contradictoires depuis six mois. La contradiction porte sur les limites d'autorisation en matière de détention d'Élus non-enregistrés. Les agents du terrain résolvent l'ambiguïté. L'interprétation la moins coûteuse ici est "détenir d'abord, clarifier ensuite".

Brasia avait dit : — C'est actionnable.

Ce mot. C'était le mot qu'il cherchait depuis dix-sept mois.

—

III.

Ce soir, il observait une assemblée du Parti du Feu depuis le fond de la salle.

Orkhael parlait de la négligence impériale. Vrash percevait la saturation émotionnelle dans la salle comme une chaleur homogène. Ce qu'il percevait chez Orkhael lui-même : pas de la même texture. De la concentration, de l'intention, de la satisfaction de contrôle. Ce n'était pas la colère de Gravel.

Il sortit avant la fin. La saturation dans le quartier impérial avait progressé depuis la semaine dernière. Il avait une rencontre avec Brasia dans deux jours. Cette fois, il avait une traduction.`,
  },

  // ── 229 · HARRYN ────────────────────────────────────────────
  229: {
    timeline_position: { an: -1, lieu: 'Khar-Vurn', arc: 'La Forge Confisquée' },
    histoire: [
      {
        titre: 'Charpentier de la Forge Silencieuse',
        texte: `Harryn travaillait comme charpentier de chantier dans le quartier nord-est de Khar-Vurn — la zone qui est devenue la Forge Silencieuse. Il y était le matin de la Rupture Thermique. Il avait vingt-sept ans.

Il avait survécu parce qu'il était dans une cage d'escalier intérieure quand la surtension thermique avait atteint son quartier. La chaleur avait vitrifié l'extérieur du bâtiment mais la structure interne avait absorbé le choc. Il était sorti dans un quartier qui n'existait plus.`,
      },
      {
        titre: "L'Émergence",
        texte: `Trois mois après la Rupture, il avait commencé à entendre des choses. Des sons qui ne correspondaient à rien de visible. Des fragments de voix, des fois juste une présence thermique vide.

Les Soigneurs avaient dit : trauma élémentaire. L'exposition à la mort de masse avait déclenché une émergence élémentaire secondaire de Spectre. L'Ordre des Soigneurs avait voulu le transférer à la Citadelle pour études. Il avait refusé.`,
      },
      {
        titre: "Ce Qu'Il Entend",
        texte: `Il avait mis deux ans à comprendre ce qu'il entendait. Les Élus vitrifiés dans la Forge Silencieuse laissaient une empreinte dans les flux spectraux de Khar-Vurn. Une empreinte diffuse, dégradée, sans personnalité identifiable. Mais là.

Ce qu'il savait, de façon viscérale et irréfutable : ces gens y étaient encore d'une certaine façon. La Forge Silencieuse n'était pas un monument à des morts — c'était un espace où des morts étaient encore présents sous une forme dégradée.`,
      },
      {
        titre: 'Le Travail de Terrain',
        texte: `Il fait du travail de terrain pour les Dissidentes depuis trois ans. Pas du combat — de la reconnaissance, des transmissions. Brasia lui fait confiance dans les zones où d'autres seraient reconnus.

En parallèle, il documente. Il tient un carnet de ce qu'il perçoit depuis la Forge Silencieuse. Ce qu'il a noté : la présence n'est pas statique. Lors de manifestations politiques, lors de votes sur la reconstruction, lors de discours qui mentionnent le quartier nord-est — la présence augmente légèrement.`,
      },
      {
        titre: 'La Reconnaissance',
        texte: `Son objectif : que la Forge Silencieuse soit reconnue publiquement pour ce qu'elle est — le résultat du retrait délibéré d'un Élu Ice par l'Empire, pas un accident de maintenance.

Si ce fait était public, les archives que les Dissidentes ont, les gens vitrifiés dans le verre auraient une vérité attachée à leur mort. Il ne sait pas si c'est de la superstition. Il sait que ça change quelque chose pour lui.`,
      },
    ],
    sorts: [
      { nom: 'Tir Thermique', description_lore: `Son élément Feu de base, direct et efficace. Pas de finesse — de la précision.` },
      { nom: 'Empreinte Spectrale', description_lore: `Une version projetée de ce qu'il perçoit dans la Forge Silencieuse — une présence persistante qui affecte ceux qui y pénètrent.` },
      { nom: 'Feu des Absents', description_lore: `La combinaison des deux éléments, celle qu'il n'a pas choisie mais qu'il a appris à utiliser. Le feu qui détruit ; le spectre qui persiste.` },
      { nom: 'Forge Silencieuse', description_lore: `Il n'aime pas utiliser ça. Il l'utilise quand rien d'autre ne suffit.` },
      { nom: 'Présence Persistante', description_lore: `Ce qu'il a appris à faire avec son élément : la présence persiste après la fin. Même la sienne, s'il le faut.` },
    ],
    relations: [
      { personnage_id: 1, nom: 'Brasia', type: 'chef_de_terrain', texte: `Elle lui fait confiance pour le terrain. Elle n'a pas posé de questions sur ce qu'il perçoit dans la Forge Silencieuse. Il n'a pas offert les détails. C'est un accord non formulé.` },
      { personnage_id: 10, nom: 'Thessandra', type: 'collègue_Dissident', texte: `Thessandra soigne dans des espaces clandestins. Harryn lui a servi de convoyeur de patients à deux reprises. Elle ne lui a pas demandé comment il trouvait les endroits sûrs. Il trouve une partie d'entre eux en suivant des flux spectraux qui indiquent les zones sans présence impériale active.` },
      { personnage_id: 5, nom: 'Yssara', type: 'rencontre_récente', texte: `Yssara est traqueuse de Capteurs impériaux. Il a facilité une de ses échappées il y a quatre mois. Elle était efficace, indépendante, et n'avait pas demandé comment il savait que le passage était sûr.` },
    ],
    lore_long: `CE QUI RESTE
Un chapitre de la vie de Harryn, survivant de la Forge Silencieuse

—

I.

Il avait noté dans son carnet : "Fluctuation haute, troisième semaine de suite."

La présence dans la Forge Silencieuse avait augmenté pendant les trois semaines de débat public sur la reconstruction du quartier nord-est. Chaque événement politique qui touchait au souvenir du quartier créait une fluctuation. Pas de façon intelligente ou dirigée. Juste... plus présente.

—

II.

Il avait survécu dans une cage d'escalier.

Ce que les trois autres survivants n'avaient pas : un élément Spectre. Les Soigneurs avaient dit "terrain élémentaire préexistant" — quelque chose dans sa physiologie avait été prêt à recevoir cet élément et l'exposition à la mort de masse avait fourni le déclencheur.

Il était, dans un sens précis, unique.

—

III.

Ce soir, il avait livré des documents à Thessandra dans le sous-sol du quartier ouest. Elle soignait deux Élus non-enregistrés. Elle ne lui avait pas demandé comment il trouvait les zones sûres de Khar-Vurn.

La vérité simple : il les trouvait en partie en suivant les zones de présence spectrale basse. Les agents impériaux actifs laissaient une trace dans les flux spectraux. Là où cette trace était absente, la zone était généralement sûre.

—

IV.

En rentrant, il était passé à une rue de la Forge Silencieuse.

Pas intentionnellement. Il avait senti la présence augmenter dans les trois cents derniers mètres, puis atteindre quelque chose qui ressemblait à un mur invisible.

Ce qu'il ne dirait jamais à personne : certains soirs, ce qu'il perçoit dans la Forge Silencieuse ressemble à de l'attente. Pas intelligente. Juste persistante.

Il avait changé de route et était rentré chez lui. Son carnet l'attendait. Il avait encore deux points à noter avant de dormir. S'il dormait cette nuit.`,
  },


  // ── 231 · RAZHAL ─────────────────────────────────────────────
  231: {
    timeline_position: { an: -1, lieu: "Ash'Rael", arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Le Troisième Fils',
        texte: `Razhal est né dans un campement nomade à deux jours au nord des zones de Drain permanentes d'Ash'Rael, troisième fils d'une famille qui gérait les routes caravanières. Quand il avait sept ans, une zone de déficit Sol avait progressivement englouti les pâturages de leur route habituelle. Sa famille avait mis trois ans à trouver une alternative. La Convergence avait envoyé des Élus Sol deux fois — trop peu, trop tard.

Il n'avait pas rejoint la Convergence par gratitude. Il l'avait rejointe parce qu'il voulait que la prochaine famille qui perdait ses pâturages n'attende pas trois ans.`,
      },
      {
        titre: 'Ce Que Coûte le Don',
        texte: `Son élément Sol s'était révélé à dix-neuf ans, son élément Combat à vingt-et-un lors d'une confrontation avec des agents impériaux dans une zone de transit. La Convergence l'avait contacté avant l'Empire.

Il avait demandé à donner au Drain à vingt-trois ans. Pas sous pression — il avait voulu comprendre ce qu'il demandait aux autres de faire. Trois sessions sur six semaines. Récupération : trois mois. Ce qu'il avait retenu : ce n'est pas douloureux. C'est une diminution. Une réduction de quelque chose qu'on ne peut pas nommer mais dont on connaît la valeur quand elle manque. Et ça revient, si on attend assez longtemps.`,
      },
      {
        titre: "Le Protocole d'Identification",
        texte: `Le mandat lui avait été présenté dix-huit mois plus tôt comme une optimisation logistique : identifier les Élus "purs élémentaires" pour calibrer plus précisément les besoins de redistribution par région.

Six mois plus tard, il avait transmis un premier lot de profils. On lui avait répondu en lui demandant d'étendre la recherche à dix-sept éléments différents — tous les éléments principaux, un profil pur par élément. La demande était arrivée formulée comme une "couverture maximale."

Il avait commencé à compter. Dix-sept éléments. Dix-sept profils. La liste avait une forme. Et Razhal lisait les formes depuis toujours.`,
      },
      {
        titre: 'Le Dix-Huitième Profil',
        texte: `Ce matin, il avait reçu une nouvelle demande : un dix-huitième profil. Élément Normal. Rare — les Élus Normal manifestent principalement à Isthme/Virex. Délai : six semaines.

Il n'avait pas répondu immédiatement. Il avait posé la demande sur la table et regardé sa liste des dix-sept profils déjà soumis.

Dix-huit éléments. Dix-huit Élus purs. Un de chaque élément du monde.

Il ne savait pas encore ce que c'était. Mais les données avaient une forme. Et la forme de cette liste ne ressemblait pas à de la logistique de redistribution.`,
      },
      {
        titre: "La Question Qui N'a Pas Encore de Réponse",
        texte: `Il va continuer à travailler. Pas par aveuglement — par méthode. Avant de tirer une conclusion, il vérifie. Avant de refuser, il comprend. C'est comme ça qu'il fonctionne depuis vingt-cinq ans.

La question qu'il n'a pas encore posée à voix haute : à quoi sert exactement un pur élémentaire de chacun des dix-huit éléments du monde, localisé et profilé ?

Il va poser cette question à Drevorn. Et selon la réponse — il décidera.`,
      },
    ],
    sorts: [
      { nom: 'Position Défensive', description_lore: `Vingt-cinq ans à sécuriser des zones de crise dans le désert. La position défensive n'est pas une tactique — c'est un réflexe. Il trouve toujours le point d'appui avant de penser à frapper.` },
      { nom: 'Détection Élémentaire', description_lore: `Le même sens qu'il utilise pour identifier les purs élémentaires dans le désert. En combat, ça lui montre les concentrations d'énergie brute — les points de fragilité des adversaires surentraînés dans un seul élément.` },
      { nom: 'Frappe Fondatrice', description_lore: `Combat et Sol combinés — l'impact crée une zone stable, comme si le sol répondait à sa prise et consolidait autour d'elle.` },
      { nom: 'Zone de Sécurité', description_lore: `Ce qu'il a appris à construire dans les zones de crise du désert : un périmètre où les gens peuvent souffler. Il construit ça en combat comme il le construisait dans les camps de coordination.` },
      { nom: 'Lecture du Terrain', description_lore: `Vingt-cinq ans à lire le désert. La façon dont le sol se compresse sous un poids avant qu'il arrive. Il n'a jamais été surpris sur son propre terrain.` },
    ],
    relations: [
      { personnage_id: 67, nom: 'Arev', type: 'collègue_de_réseau', texte: `Arev coordonne les zones pendant que lui identifie les profils. Ils travaillent dans des branches différentes du même réseau. Il lui fait confiance — ses registres sont les meilleurs qu'il ait vus. Il ne lui a pas parlé du Protocole d'Identification. Si quelqu'un devait regarder sa liste de dix-huit et lui dire ce qu'elle voit, ce serait elle.` },
      { personnage_id: 232, nom: 'Shiveth', type: 'partenaire_de_terrain', texte: `Shiveth l'accompagne sur les missions d'identification depuis neuf mois. Elle est efficace, discrète. Ses éléments Feu/Poison lui permettent de vérifier des signatures élémentaires que son propre Sol/Combat ne lit pas. Il lui fait confiance sur le terrain. Il ne lui a pas dit ce qui le trouble depuis six mois.` },
      { personnage_id: 233, nom: 'Drevorn', type: 'supérieur_doctrinal', texte: `Drevorn est celui qui lui a transmis la demande des dix-huit profils, formulée comme une "logistique de couverture maximale." Razhal respecte Drevorn — son histoire avec Saeved, sa constance sur quarante ans. Si quelqu'un dans la structure a les réponses à ses questions, c'est lui. Il n'est pas sûr de vouloir les réponses.` },
    ],
    lore_long: `LA LISTE DES DIX-HUIT
Un moment de la vie de Razhal, agent de terrain Convergence

—

I.

La demande était arrivée au matin, avant que Razhal ait eu le temps de faire du thé.

Profil 18. Élément : Normal. Région prioritaire : Isthme / Virex. Délai de transmission : six semaines.

Il l'avait lue deux fois. Puis il avait fait son thé.

—

II.

Le camp de coordination du plateau Sûk était debout depuis deux semaines — tentes blanches disposées en grille, lignes de communication tendues, réserves d'eau calculées pour quarante personnes sur trente jours. C'était le quatrième camp de ce type qu'il montait en dix-huit mois de mission d'Identification.

Ce matin, il avait dix-sept profils transmis. Dix-sept éléments différents, un pur chacun.

Il avait sorti la liste de son registre et l'avait étalée sur la table.

Sol. Roche. Feu. Glace. Eau. Plante. Ténèbres. Électrique. Vent. Psy. Poison. Spectre. Combat. Gravité. Nuée. Dragon. Stellaire.

Et maintenant Normal, pour compléter.

Il n'avait pas besoin de compter. Dix-sept éléments principaux dans le monde, plus Normal pour les Hommes-Liens capables de le manifester. Dix-huit au total.

—

III.

Il avait donné au Drain à vingt-trois ans. Trois sessions, six semaines, récupération complète.

Ce dont il se souvenait le mieux : pas la diminution elle-même, mais le fait d'avoir choisi. Il avait marché jusqu'au centre de coordination avec ses propres jambes, il avait signé le formulaire sans pression identifiable. Aucun membre de sa famille dans un programme d'aide alimentaire. Aucune dette sociale. Juste une décision qu'il avait prise.

Il avait trouvé ça important. Il l'avait ensuite cherché chez les autres — cette qualité spécifique de choix libre qui transforme un Drain en quelque chose d'autre qu'une extraction.

—

IV.

"La demande de ce matin," dit-il à Shiveth quand elle arriva dans la tente de coordination, "c'est le dix-huitième profil."

Shiveth s'était assise en face de lui et avait regardé la liste étalée sur la table.

"Dix-huit," dit-elle. Ce n'était pas une question.

"Dix-huit éléments. Un pur chacun. Tous localisés."

Elle avait regardé la liste plus longtemps. Razhal la connaissait depuis neuf mois — assez pour savoir qu'elle lisait aussi les formes.

"Est-ce qu'on nous a expliqué pourquoi dix-huit ?" dit-elle finalement.

"Couverture maximale. C'est le terme utilisé."

"Couverture maximale de quoi ?"

Razhal avait regardé son thé. "Je vais poser la question."

"À qui ?"

"À Drevorn."

Shiveth avait hoché la tête une fois. Quelque chose dans ce hochement n'était pas entièrement rassuré. Razhal l'avait noté. Il avait replié la liste.

—

V.

Saeved était mort depuis quarante ans. Razhal avait sept ans à l'époque — trop jeune pour comprendre, trop vieux pour oublier.

La doctrine de la Convergence était construite sur ce choix. Le volontariat comme fondement, comme condition, comme limite. Razhal avait construit sa carrière sur cette doctrine. Il avait refusé trois demandes de Drain qu'il estimait ne pas avoir été formulées dans des conditions de choix réel. Trois fois en vingt-cinq ans.

Dix-huit profils d'Élus purs.

Il allait poser la question à Drevorn. Et selon la réponse, il déciderait.

—

VI.

Le soir, il avait ajouté une ligne à son registre de terrain.

"Demande #18 reçue. Profil Normal, Isthme/Virex. Liste complète : 18 éléments, 18 purs. Signification opérationnelle : non confirmée. Question posée à D : en attente."

Il avait regardé la ligne. Il avait ajouté :

"Note personnelle : une liste de dix-huit n'est pas de la logistique de redistribution ordinaire. Je ne sais pas encore ce que c'est. Je vais le savoir avant de continuer."

Il avait fermé le registre. Dehors, le désert produisait son silence de nuit — le vent dans le sable, quelque part une dune qui se déplace de quelques centimètres.

Razhal avait appris à lire les formes depuis l'enfance. La forme de la liste des dix-huit était claire.

Il avait juste besoin de savoir si ce qu'il pensait qu'elle signifiait était vrai.`,
  },

  // ── 232 · SHIVETH ─────────────────────────────────────────────
  232: {
    timeline_position: { an: -1, lieu: "Ash'Rael", arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Les Zones de Transit',
        texte: `Shiveth a grandi dans les zones de transit qui bordent Noctéa — ces espaces entre les cités où les règles officielles s'appliquent de façon intermittente. Sa famille gérait un poste d'échange de marchandises. Son élément Feu s'était révélé à seize ans, son élément Poison à dix-neuf lors d'un travail de terrain médical. Elle avait rejoint une cellule médicale des Dissidentes à vingt-et-un ans parce qu'ils avaient besoin d'un médecin de terrain.`,
      },
      {
        titre: 'Onze Ans',
        texte: `Elle avait travaillé avec les Dissidentes pendant sept ans quand une opération dans une zone frontière entre Varkhôl et Ash'Rael avait mal tourné. Le contact qui l'avait extraite n'était pas un contact Dissident. C'était quelqu'un de la Convergence, via un réseau de transit qui passait par Vel'Nox.

Elle avait passé trois mois dans les camps de crise d'Ash'Rael pendant sa sortie de zone. Trois mois à voir ce que les déficits élémentaires faisaient dans des zones que les Dissidentes n'atteignaient pas. Quand elle avait choisi de ne pas revenir dans la cellule, c'était moins un choix idéologique qu'une décision logistique : les gens qu'elle soignait ici mouraient d'une façon qu'elle pouvait prévenir avec les bons outils.`,
      },
      {
        titre: "Ce Qu'Elle Ne Regarde Pas",
        texte: `Elle avait compris très vite que la Convergence n'était pas ce qu'elle présentait. La doctrine de redistribution était réelle — elle avait vu le travail de terrain, les zones stabilisées, les Élus qui donnaient volontairement. Elle avait aussi vu des dossiers administratifs qui ne correspondaient pas à ce qu'on lui avait dit que la Convergence faisait.

Elle avait choisi de rester dans sa partie. Sa partie était réelle. Les enfants qu'elle soignait étaient réels. Elle continuait.

Depuis neuf mois, elle accompagnait Razhal sur des missions d'identification d'Élus. Elle avait remarqué la précision des profils demandés — pas des Élus quelconques, des Élus "purs élémentaires" spécifiques. Elle n'avait pas posé de question.`,
      },
      {
        titre: 'Le Travail Réel',
        texte: `Ce matin, Razhal lui avait montré la liste. Dix-huit éléments. Un pur chacun. Il avait dit qu'il allait poser la question à Drevorn.

Elle avait hoché la tête d'une façon qui signifiait "bonne idée" et qui signifiait aussi "je ne suis pas sûre de vouloir être là quand la réponse arrive."

Cet après-midi, elle avait trois consultations dans le camp médical. Un Élu Sol en post-Drain, récupération lente. Une famille en déficit nutritionnel depuis la saison sèche. Un enfant avec une infection que son élément Poison lui avait permis d'identifier avant les symptômes visibles. Elle avait commencé par l'enfant.`,
      },
      {
        titre: "La Ligne Qu'Elle N'A Pas Encore Définie",
        texte: `Shiveth n'a pas de plan. Elle a des principes — soigner, ne pas nuire, ne pas participer à quelque chose qu'elle ne peut pas approuver — et elle navigue entre eux au quotidien.

Ce qu'elle n'a pas encore fait : définir précisément ce qui l'amènerait à partir. La réponse abstraite est "quelque chose que je ne peux pas approuver." La réponse pratique, elle ne l'a pas. Parce que définir la ligne, c'est commencer à regarder si elle est déjà franchie.`,
      },
    ],
    sorts: [
      { nom: 'Cauterisation de Zone', description_lore: `La première utilisation médicale qu'elle a trouvée à son élément Feu. La précision nécessaire pour cautériser sans brûler le tissu sain a pris deux ans à apprendre.` },
      { nom: 'Analyse Toxique', description_lore: `Son élément Poison détecte les composants chimiques en temps réel. Ce qui lui permet de soigner les intoxications lui permet aussi, dans les situations qui l'imposent, de les aggraver.` },
      { nom: 'Triage de Combat', description_lore: `Onze ans de médecine de terrain. Le triage n'est pas une décision — c'est une perception. Elle voit l'état de tout le monde avant d'avoir eu le temps de le formuler.` },
      { nom: 'Zone Médicale', description_lore: `Ce qu'elle construit dans chaque camp de crise — un espace où les blessés sont protégés. Elle l'a appris à faire en quinze minutes avec des matériaux de fortune. En combat, ça prend une seconde.` },
      { nom: 'Diagnostic Permanent', description_lore: `Son élément Poison détecte la défaillance biologique avant les symptômes visibles. En combat, ça se traduit par une connaissance précise de l'état de ceux qu'elle protège.` },
    ],
    relations: [
      { personnage_id: 231, nom: 'Razhal', type: 'partenaire_de_terrain', texte: `Razhal est méthodique, honnête sur ce qu'il sait et ce qu'il ne sait pas. Elle lui fait confiance d'une façon qu'elle n'a pas accordée facilement depuis onze ans. Il vient de lui montrer la liste des dix-huit. Il va poser la question à Drevorn. Elle attend la réponse avec une anxiété qu'elle n'a pas encore nommée.` },
      { personnage_id: 67, nom: 'Arev', type: 'pair_de_réseau', texte: `Elles se sont rencontrées deux fois lors de réunions de coordination régionale. Arev tient des registres impeccables sur le volontariat — une rigueur que Shiveth reconnaît. Elles n'ont pas parlé des zones grises. Elles n'ont pas eu besoin de le faire pour se comprendre.` },
      { personnage_id: 49, nom: 'Velath', type: 'contact_sans_nom', texte: `Elle ne connaît pas le nom de la personne dont le réseau l'a extraite il y a onze ans. Elle sait seulement que la route passait par Vel'Nox et qu'elle était parfaitement préparée. Si elle savait que cette personne existe encore, qu'elle opère encore des routes d'évacuation — elle ne sait pas ce qu'elle en penserait.` },
    ],
    lore_long: `LE TRAVAIL RÉEL
Un moment de la vie de Shiveth, médecin de terrain Convergence

—

I.

L'enfant avait neuf ans et une infection que sa mère n'avait pas encore vue parce qu'elle ne se montrait pas encore sur la peau.

Shiveth l'avait senti en s'approchant du lit de camp — une qualité particulière dans l'air autour du garçon, une signature chimique que son élément Poison reconnaissait avant que son cerveau ait le temps de formuler le diagnostic. Bactérie des sols chauds, variante résistante, traitement disponible mais spécifique.

"Il toussera demain," dit-elle à la mère. "Je vais lui donner quelque chose ce soir pour que demain se passe mieux."

La mère avait regardé son fils, puis elle. "Est-ce qu'il va bien ?"

"Il va aller bien."

C'était vrai. Grâce aux stocks de la Convergence, aux routes de ravitaillement, aux Élus qui avaient contribué à des Drains pour financer ces stocks. La chaîne de causalité était longue et pas entièrement propre. Le garçon allait être soigné.

—

II.

Elle travaillait dans les camps médicaux depuis onze ans.

Onze ans plus tôt, elle avait été extraite d'une zone frontière par un réseau qu'elle n'avait pas connu avant — des routes de transit qui passaient par Vel'Nox, propres, rapides, préparées pour quelqu'un qui avait besoin de passer sans laisser de trace. Elle n'avait jamais su qui l'avait organisé.

Elle avait accepté ça parce qu'elle était épuisée et que trois mois de camps de crise dans le désert lui avaient montré des choses que sept ans avec les Dissidentes ne lui avaient pas montrées. Les Dissidentes combattaient l'Empire. C'était juste. Mais les enfants des zones de déficit mouraient d'infections traitables pendant que le combat continuait.

Elle avait choisi les enfants traitables.

—

III.

Le deuxième patient était un Élu Sol en récupération post-Drain — troisième session, quarante-deux ans, retour lent. Il s'appelait Shan et il travaillait pour Razhal sur les missions d'identification.

Elle avait mesuré sa saturation élémentaire, noté les paramètres dans son registre, et lui avait donné la dose habituelle de soutien minéral.

"Comment tu vas ?" avait-elle demandé. Pas en tant que médecin — en tant que personne.

"Bien," dit-il. Puis, après un moment : "Ce qu'on fait. Les profils qu'on identifie. Tu sais à quoi ça sert ?"

Shiveth avait regardé son registre. "Cartographie de redistribution. Planification de couverture."

"Razhal dit pareil." Il avait regardé le plafond de la tente. "Je me demande juste."

"Tu devrais lui poser la question."

"Il dit qu'il la pose à Drevorn."

Elle avait hoché la tête et était passée à ses paramètres de récupération. La liste des dix-huit que Razhal lui avait montrée ce matin avait une forme qu'elle reconnaissait — des données trop précises pour un usage ordinaire. Elle n'avait pas posé la question.

—

IV.

Le soir, elle avait préparé les fiches des trois consultations du jour.

Enfant, neuf ans, infection bactérienne, traitement commencé, pronostic bon.
Élu Sol, quarante-deux ans, post-Drain session 3, récupération lente, surveillance deux semaines.
Famille, quatre personnes, déficit nutritionnel chronique, programme de soutien enclenché.

Elle avait posé le stylo.

Il y avait onze ans, dans un camp Dissident, elle avait rédigé des fiches similaires. Les patients étaient les mêmes — des gens qui avaient besoin de soins, qui les recevaient ou ne les recevaient pas selon la disponibilité des ressources. Les ressources avaient changé de provenance. Le reste était pareil.

Elle croyait ça. La plupart du temps, elle croyait ça.

—

V.

La nuit avait commencé à tomber quand elle était sortie de la tente médicale.

Razhal était assis à l'extérieur de la tente de coordination, son registre ouvert.

"Drevorn répond demain," dit-il.

"D'accord."

"Si la réponse est ce que je pense — je vais avoir une décision à prendre."

Shiveth s'était assise à côté de lui. Le désert prenait ses couleurs de soir — le sable qui devenait rouge, le ciel qui bleuissait vite. Les étoiles commençaient.

"Je sais," dit-elle.

"Toi aussi."

Elle avait regardé les étoiles un moment. "Je sais."

Elle n'avait pas dit autre chose. Razhal n'avait pas dit autre chose. Ils étaient restés assis ensemble jusqu'à ce que le désert soit entièrement noir, chacun avec ses calculs, dans le silence commun des gens qui vont devoir décider quelque chose qu'ils auraient préféré ne pas avoir à décider.`,
  },

  // ── 233 · DREVORN ─────────────────────────────────────────────
  233: {
    timeline_position: { an: -1, lieu: "Ash'Rael", arc: "L'Avatar" },
    histoire: [
      {
        titre: "L'An -41",
        texte: `Drevorn avait vingt ans quand Saeved est mort.

Il était dans la zone — pas au premier rang, mais il voyait. Ce qu'il avait vu : un homme de trente-deux ans, Élu Sol d'une puissance ordinaire, qui avait posé les deux mains sur le sol d'un plateau en train de mourir et qui avait donné tout ce qu'il avait. La zone avait répondu. Deux cents familles avaient eu de la terre vivante. Saeved n'était plus là quand c'était fini.

Il avait commencé à écrire la nuit suivante.`,
      },
      {
        titre: 'Le Témoignage',
        texte: `Son premier texte — "Le Témoignage de Saeved", version finale rédigée à vingt-trois ans — est devenu le document fondateur de la Convergence. Il décrivait l'acte, les conditions, la décision de Saeved, et posait la question centrale : si une seule personne avec l'énergie nécessaire peut sauver une zone entière, quelle est la responsabilité de cette personne envers la zone ?

Il n'avait pas répondu à la question dans ce texte. Il avait dit que la réponse devrait être trouvée ensemble.

La Convergence avait construit une institution sur la question. Drevorn avait passé trente-huit ans à construire les réponses.`,
      },
      {
        titre: 'Le Grand Rééquilibrage',
        texte: `Il y avait trois ans, le cercle intérieur de la Convergence lui avait présenté la théorie de l'Avatar Total — un être qui contiendrait tous les éléments simultanément, capable de redistribuer l'énergie élémentaire à une échelle que les Drains individuels ne pourraient jamais atteindre. Pour le créer : dix-huit Drains de purs élémentaires simultanés.

Il avait posé la question du consentement immédiatement. La réponse avait été : "Nous développons les protocoles de sélection et de préparation. C'est pour ça que nous avons besoin de ta théologie."

Il écrivait ce texte depuis trois ans. Il en était à sa douzième version.`,
      },
      {
        titre: 'La Douzième Version',
        texte: `Ce soir, il avait ouvert la douzième version du chapitre sur le consentement.

Il avait lu le passage où il écrivait que "l'acte cosmique transcende le consentement individuel parce qu'il représente la volonté collective de corriger une injustice fondamentale."

Il avait posé le stylo.

Razhal lui avait envoyé un message ce soir : il avait des questions sur le Protocole d'Identification. Il voulait comprendre la finalité des dix-huit profils.

Drevorn allait répondre demain. Il cherchait encore comment formuler la réponse.`,
      },
      {
        titre: 'La Réponse À Razhal',
        texte: `Il va répondre à Razhal. La réponse vraie est : les dix-huit profils servent à identifier les Élus qui seront les donateurs du Grand Rééquilibrage. Ils ne le savent pas encore. Ils le sauront au moment où la nécessité sera suffisamment établie pour que leur refus ne soit plus une option réelle.

La réponse qu'il va donner est peut-être différente. Il cherche encore quelle version de la vérité il est capable de prononcer à voix haute.`,
      },
    ],
    sorts: [
      { nom: "Zone d'Ombre", description_lore: `Quarante ans à travailler dans les couches non-dites des conversations et des textes. L'ombre n'est pas l'absence de lumière — c'est l'espace où ce qu'on ne voit pas devient aussi réel que ce qu'on voit.` },
      { nom: 'Ancrage Doctrinal', description_lore: `Le Sol comme fondation — il l'a appris dans le désert, enfant, avant de comprendre que c'était un élément. Donner quelque chose de stable à s'accrocher.` },
      { nom: 'Lecture des Non-Dits', description_lore: `Quarante ans à entendre ce que les gens ne disent pas. En combat, ça se traduit par une lecture des intentions avant l'acte.` },
      { nom: 'Le Témoignage', description_lore: `Le Témoignage de Saeved, dit à voix haute. Ce n'est pas de la magie — c'est quarante ans de mots construits avec précision pour toucher ce qui est profond dans ceux qui entendent.` },
      { nom: "Poids de l'Acte", description_lore: `Ce qu'il a vu à vingt ans : l'acte de don total a une ampleur que les actes ordinaires n'ont pas. Il a passé quarante ans à théoriser ça. En combat, il le reconnaît quand il le voit.` },
    ],
    relations: [
      { personnage_id: 65, nom: 'Saeved', type: 'fondateur_fantôme', texte: `Il était là. Il avait vingt ans. Il a construit toute sa vie intellectuelle autour de ce qu'il a vu ce jour-là. Ce qu'il a vu exactement — pas ce qu'il a écrit — c'est quelque chose qu'il garde pour lui. Les deux ne sont pas identiques. Ça l'occupe, certaines nuits.` },
      { personnage_id: 231, nom: 'Razhal', type: 'agent_de_confiance', texte: `Razhal est le meilleur opérateur de terrain de la Convergence. Méthodique, honnête, fidèle à la doctrine. C'est aussi pour ça que sa demande de questions est difficile — Razhal pose des questions quand il a une raison de les poser. Si Razhal voit la forme de ce qu'il construit, la réponse qu'il exige sera la réponse vraie.` },
      { personnage_id: 67, nom: 'Arev', type: 'voix_inconfortable', texte: `Il a lu les propositions de réforme d'Arev — les protocoles de volontariat plus rigoureux, la séparation des décisions d'aide sociale des décisions de Drain. Elles ont été rejetées. C'est lui qui les a rejetées, en recommandant qu'elles n'étaient "pas compatibles avec les besoins opérationnels actuels." Il l'a fait parce que ses protocoles rendraient le Grand Rééquilibrage impossible. Il pense à Arev certains soirs.` },
    ],
    lore_long: `LA DOUZIÈME VERSION
Un soir de la vie de Drevorn, théologien de la Convergence

—

I.

Il avait ouvert le manuscrit à la page du consentement.

La douzième version de ce chapitre. Il avait compté — pas par obsession, mais parce que compter les versions l'aidait à mesurer la distance entre ce qu'il voulait dire et ce qu'il pouvait formuler sans que la formulation s'effondre à l'examen.

Le paragraphe central de la version actuelle disait : "L'acte cosmique transcende le consentement individuel en ce qu'il représente la volonté collective de corriger une injustice fondamentale dans la distribution de l'énergie élémentaire. Le don des dix-huit n'est pas une extraction — c'est une participation à un rééquilibrage d'une échelle que le consentement individuel seul ne peut pas appréhender."

Il avait lu le passage deux fois.

Puis il avait posé le stylo.

—

II.

Il avait vingt ans quand Saeved était mort.

Ce qu'il avait écrit dans le Témoignage, trente-huit ans plus tôt : "Saeved s'est tourné vers les anciens du plateau Makhet et il a dit : 'Je choisis ça. Personne ne me le demande.' Puis il a posé les mains sur le sol."

Ce qu'il se rappelait vraiment : une zone qui mourait depuis trois ans. Deux cents familles. Des récoltes qui diminuaient. Et Saeved, le seul Élu Sol présent dans un rayon de deux jours de marche, qui avait regardé la situation et dit quelque chose.

Les mots exacts, il n'était pas certain de les avoir entendus correctement. Il était à vingt mètres. Il y avait du vent. Ce qu'il avait écrit dans le Témoignage était ce qu'il avait cru entendre, filtré par ce qu'il espérait que ça voulait dire.

Il avait construit la doctrine de la Convergence sur sa meilleure approximation de ce qu'un homme avait dit à voix basse dans un désert, à vingt mètres, par vent modéré, il y avait quarante et un ans.

—

III.

Le message de Razhal était arrivé à la fin de la journée.

"Drevorn. La liste des dix-huit profils est complète — le dix-huitième est demandé ce soir. Je comprends la logistique de couverture. Ce que je ne comprends pas : à quoi sert exactement un pur élémentaire de chacun des dix-huit éléments du monde ? Je pose la question parce que la forme de la liste ne ressemble pas à ce que je sais de la redistribution ordinaire. Je serai là demain matin."

Drevorn avait relu le message trois fois.

Razhal était le meilleur opérateur de terrain de la Convergence. Il avait refusé trois Drains qu'il estimait insuffisamment volontaires — et écrit des rapports sur chacun. Il posait des questions quand il avait des raisons de les poser. Et quand Razhal posait une question, il attendait une réponse vraie.

—

IV.

Il avait relu le Témoignage ce soir. Pas les versions longues — la version courte, la première, celle qu'il avait rédigée à vingt-trois ans.

Elle était étrange à lire maintenant. Elle avait une clarté qu'il n'avait plus — la clarté de quelqu'un qui n'avait pas encore passé trente-huit ans à regarder les implications de ce qu'il avait écrit.

Dans cette version : Saeved choisissait librement. Il n'y avait personne pour le forcer. La situation créait une opportunité, pas une contrainte.

Il avait écrit ça à vingt-trois ans en croyant que c'était vrai.

À soixante et un ans, assis dans son bureau avec la douzième version du chapitre sur le consentement ouverte devant lui et le message de Razhal sur la table — il cherchait la différence entre ce qu'il avait cru à vingt-trois ans et ce qu'il savait maintenant.

—

V.

Il y avait une façon de répondre à Razhal qui était vraie sans être complète.

Il pouvait dire : "Les dix-huit profils correspondent à une initiative de redistribution à grande échelle que la Convergence prépare depuis plusieurs années. Les détails opérationnels seront partagés avec les équipes concernées au moment approprié."

C'était vrai. Ce n'était pas complet.

Il pouvait dire la vérité entière.

—

VI.

Il avait regardé la douzième version du chapitre sur le consentement.

Il avait pris le stylo. Il avait écrit, à la suite du dernier paragraphe :

"Note personnelle pour la treizième version : la formulation actuelle contourne la question de l'information préalable. Il est possible que la question ne puisse pas être contournée. Il est possible que la doctrine telle qu'elle est construite actuellement ne puisse pas justifier l'absence d'information préalable sans se contredire dans ses fondements."

Il avait regardé ce qu'il venait d'écrire.

Puis il avait fermé le manuscrit et sorti une feuille vierge.

Il allait répondre à Razhal. Pas ce soir. Demain, après une nuit à chercher comment formuler quelque chose qu'il n'avait pas encore trouvé comment dire.

Dehors, le désert d'Ash'Rael était noir et étoilé. Quelque part dans ce désert, deux cents familles vivaient sur une terre vivante que Saeved avait reconstituée.

Il avait choisi. Drevorn en était presque sûr.

Presque.`,
  },

  // ── 246 · SYLVIEL ─────────────────────────────────────────────
  246: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'La Spécialiste du Calendrier',
        texte: `Sylviel est entrée à la Citadelle du Voile à dix-huit ans, après que ses éléments combinés Fée/Psy avaient été identifiés comme particulièrement utiles pour le travail de lecture des lignes. La combinaison était rare — le Fée pour lire les flux élémentaires probabilistes, le Psy pour lire les états émotionnels. Ensemble : une capacité à évaluer si ce qu'une personne dit de son état élémentaire correspond à ce que son corps et son état émotionnel confirment.

La Citadelle en avait besoin pour les sessions d'arbitrage du Calendrier. Sylviel était douée. Elle l'est restée pendant vingt-six ans.`,
      },
      {
        titre: "La Valeur de Ce Qu'Elle Perçoit",
        texte: `À vingt-quatre ans, elle avait compris la valeur réelle de son travail lors d'une session d'arbitrage concernant un Élu Feu de Varkhôl. Sa lecture avait montré que l'Élu disait vrai — la peur réelle sous-jacente ne correspondait pas à ce qu'un simulateur aurait produit. Elle avait recommandé un ajournement pour évaluation médicale indépendante. L'évaluation avait confirmé sa lecture.

L'Élu avait pu rester. Elle avait compris ce que ça voulait dire — que sa précision avait un impact réel sur des vies réelles.`,
      },
      {
        titre: "L'Anomalie de Trois Mois",
        texte: `Il y avait trois mois, elle se trouvait dans un couloir annexe de l'aile administrative quand elle avait croisé, sans le prévoir, la session de travail du comité de modification du Calendrier.

Ce qu'elle avait capté en passant : une administratrice Fée de haut rang en état de sélection active. Pas de mensonge — quelque chose de plus précis et de moins simple : une personne qui choisissait délibérément quelles vérités présenter et dans quel ordre, de façon à créer une conclusion dans l'esprit des auditeurs qu'une présentation complète n'aurait pas produite.

Ce n'était pas illégal. C'était de la gestion de l'information. Elle avait classifié ça comme "anomalie administrative en cours d'interprétation" et avait continué à marcher.`,
      },
      {
        titre: "Ce Qu'Elle Ne Lit Pas",
        texte: `Elle côtoie Varek tous les jours — le garde à l'entrée de l'aile où elle travaille. Elle côtoie Eiravel — une administratrice Calendrier dans son département. Elle ne les lit pas. Elle s'est imposé cette règle depuis le début.

Certains jours, son Psy capte quelque chose dans les périphéries de sa perception — une tension dans la posture d'Eiravel, une qualité d'attention dans le regard de Varek — et elle doit activement détourner sa perception.

L'anomalie de trois mois est toujours classifiée comme "en cours d'interprétation."`,
      },
      {
        titre: 'La Session De Demain',
        texte: `Demain, elle a une session d'arbitrage avec un Élu Eau de Thalassyr qui conteste sa redistribution vers les zones intérieures d'Ash'Rael. Elle a lu son dossier. L'Élu semble avoir des raisons médicales légitimes.

Elle se prépare à cette session avec la même rigueur qu'elle prépare toutes les autres. L'anomalie du couloir est dans un compartiment mental à part. Elle l'y a mise il y a trois mois et elle n'a pas encore trouvé de raison de l'en sortir.`,
      },
    ],
    sorts: [
      { nom: "Lecture d'État", description_lore: `Ce qu'elle fait dans les sessions d'arbitrage, appliqué à un contexte de combat. Elle lit ce qui est là avant de décider quoi faire.` },
      { nom: 'Probabilité Fée', description_lore: `L'élément Fée ne change pas les règles — il incline légèrement les probabilités dans une direction. C'est subtil. C'est exactement assez.` },
      { nom: 'Dissonance Cognitive', description_lore: `Créer un écart entre ce que quelqu'un veut faire et ce que sa perception lui permet de formuler. Elle ne l'utilise pas souvent. L'idée lui est inconfortable même quand c'est nécessaire.` },
      { nom: 'Vérité Totale', description_lore: `Tout ce qu'elle perçoit en permanence, rendu visible à tous en même temps. Elle n'aime pas utiliser ça — ça expose des choses que les gens n'ont pas décidé de partager.` },
      { nom: 'Perception Périphérique', description_lore: `Vingt-six ans à lire les états émotionnels sans que les gens le sachent. Elle a développé une perception des environs qui lui manquerait si elle disparaissait.` },
    ],
    relations: [
      { personnage_id: 247, nom: 'Varek', type: 'collègue_quotidien', texte: `Le garde qu'elle voit chaque matin à l'entrée de l'aile. Professionnel, discret, efficace. Elle ne l'a jamais lu délibérément. Quelquefois, dans ses périphéries de perception, elle capte une qualité d'attention chez lui qui est différente de l'habituel. Elle ne suit pas cette perception. Elle ne sait pas ce qu'elle trouverait.` },
      { personnage_id: 248, nom: 'Eiravel', type: 'collègue_administrative', texte: `Une administratrice Calendrier dans son aile. Précise, soigneuse, agréable à travailler avec. Elle ne l'a jamais lue délibérément. Elle a remarqué que quand leur travail se croise, Eiravel a une qualité d'attention similaire à ce qu'elle-même ressent devant les dossiers difficiles. Probablement de la rigueur professionnelle.` },
      { personnage_id: 55, nom: 'Thyval', type: 'contact_externe_respecté', texte: `L'archiviste Givrin d'Iskral avec qui elle correspond sur des questions d'archives Calendrier. Elle aime ses formulations — précises, honnêtes sur les limites de ce qu'il sait. C'est rare. Elle lui fait confiance dans ses correspondances d'une façon qu'elle n'accorde pas facilement.` },
    ],
    lore_long: `LA VÉRITÉ PARTIELLE
Un après-midi de la vie de Sylviel, spécialiste du Calendrier

—

I.

L'Élu Eau s'appelait Merven. Quarante et un ans, Néréide, Thalassyr d'origine, maintenant redistribué dans une zone de travail intérieure depuis huit mois.

Sa pétition demandait un retour partiel vers les côtes — raisons médicales, adaptation difficile aux zones arides intérieures, impact sur la régulation élémentaire. Il avait des certificats médicaux. Il avait une formulation soignée qui ne disait ni trop ni pas assez.

Sylviel avait posé ses mains à plat sur la table — pas en contact avec lui, juste dans l'espace partagé — et elle avait écouté.

Ce qu'elle avait entendu sous les mots : une vraie souffrance d'adaptation. Pas de la simulation. Pas de l'amplification stratégique. La vraie chose — un Néréide qui manquait de l'eau avec une acuité physique que les zones arides rendaient chronique.

"Votre dossier sera examiné avec la priorité médicale," avait-elle dit. "Je vais recommander une évaluation indépendante."

—

II.

Trois mois plus tôt, le couloir de l'aile B était en rénovation.

Elle avait pris le passage par l'annexe administrative — un couloir qu'elle empruntait rarement, qui longeait la salle de réunion du comité de modification du Calendrier. Les portes étaient entrouvertes de quelques centimètres.

Elle n'avait pas voulu lire. Elle s'était imposé cette règle depuis le début : ne pas lire les personnes qu'elle côtoie régulièrement. Mais son Psy n'avait pas attendu qu'elle décide.

Ce qu'elle avait capté en passant : une administratrice Fée de haut rang en état de sélection active. Pas de mensonge — elle aurait reconnu ça facilement. Quelque chose de plus précis et de moins simple : une personne qui choisissait l'ordre de présentation de vérités exactes de façon à produire une conclusion dans l'esprit de ses auditeurs qu'une présentation différente n'aurait pas produite.

Ce n'était pas illégal. C'était de la gestion de l'information.

Elle avait continué à marcher.

—

III.

La session avec Merven avait duré quarante minutes.

En le raccompagnant à la sortie, elle avait croisé Varek dans le couloir — le garde de l'entrée, régulier depuis quatre ans. Il lui avait hoché la tête. Elle lui avait hoché la tête.

Dans ses périphéries de perception, il y avait quelque chose dans sa qualité d'attention ce soir qui n'était pas habituel. Une vigilance qui regardait vers l'intérieur plutôt que vers l'extérieur.

Elle avait détourné sa perception avant d'aller plus loin.

—

IV.

L'anomalie du couloir était dans un compartiment mental à part.

Elle l'y avait mise parce qu'elle n'avait pas de cadre pour l'interpréter. Ce qu'elle avait perçu était réel — elle ne doutait pas de ses perceptions. Mais "une Fée choisit l'ordre de présentation de ses informations en comité" n'était pas une violation. C'était de la politique administrative ordinaire. Elle en était presque certaine.

Ce qui la gênait : elle avait passé vingt-six ans à aider le comité du Calendrier à prendre des décisions. Si les informations présentées au comité étaient organisées de façon à orienter des conclusions — ça posait une question sur la qualité de la décision finale.

Elle n'avait pas signalé l'anomalie. Il n'y avait rien à signaler.

—

V.

Ce soir, en finissant son rapport sur la pétition de Merven, elle avait pensé à la session du comité de modification du Calendrier qui avait lieu la semaine suivante.

Elle n'y participait pas. Elle n'avait aucune raison d'être présente.

Elle avait pensé, brièvement, qu'elle pourrait demander à assister en tant qu'observatrice. C'était dans les procédures.

Elle avait refermé son dossier sans écrire la demande.

L'anomalie de trois mois attendrait encore. Peut-être qu'elle trouverait une explication qui la rende non-pertinente. Peut-être que la treizième semaine, ou la vingtième, elle comprendrait ce qu'elle avait perçu dans ce couloir sans avoir à aller chercher plus loin.

Elle espérait que ce soit la bonne décision.`,
  },

  // ── 247 · VAREK ───────────────────────────────────────────────
  247: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Quinze Ans de Faction',
        texte: `Varek est entré à la garde de la Citadelle à vingt-quatre ans, après quatre ans dans la garde régionale d'Isthme. Son élément Combat le prédisposait à un rôle militaire. Son élément Stellaire — détecté tard, à vingt-deux ans — avait été noté dans son dossier de recrutement comme "aptitude perceptive non-standard potentiellement utile."

En quinze ans : deux promotions, un commandement de la garde d'accès de l'aile administrative, trois sessions de formation avancée. Une réputation de fiabilité et de discrétion. Aucune question hors mandat.`,
      },
      {
        titre: 'La Chambre Restreinte',
        texte: `L'aile administrative de la Citadelle a plusieurs zones d'accès restreint. La chambre de modification du Calendrier est la plus restreinte — accès limité à cinq administratrices Fée, rotation fixe, aucune présence de garde à l'intérieur.

Il avait accédé au couloir d'accès de cette chambre pendant une maintenance de sécurité il y avait sept ans. Il avait vu l'intérieur depuis la porte — des équipements qu'il ne pouvait pas nommer, une architecture qui semblait conçue pour canaliser des flux élémentaires dans une direction précise.

On lui avait dit que c'était une "chambre de régulation saisonnière des équilibres élémentaires." Il avait accepté cette explication.`,
      },
      {
        titre: 'Les Trois Transferts',
        texte: `Sorkan, dix-huit mois plus tôt : avait demandé pourquoi la chambre restreinte n'apparaissait pas dans les registres de planification externe de l'aile. Transfert annoncé trois jours plus tard. Zone nord de Varkhôl. Varek lui avait envoyé trois messages. Pas de réponse.

Melen, onze mois plus tôt : avait demandé à un technicien de maintenance les spécifications de consommation énergétique de l'aile restreinte. Le lendemain, Melen n'était plus là. Thalassyr. Deux messages. Pas de réponse.

Praxa, huit mois plus tôt : n'avait pas posé de question. Avait simplement prolongé sa pause dans le couloir adjacent lors d'un changement de garde. Une semaine plus tard, Asterciel. Varek n'avait pas envoyé de message. Il avait décidé de ne pas poser de questions.`,
      },
      {
        titre: "Ce Qu'Il Ne Dit Pas",
        texte: `Ce soir, en finissant son quart, il avait regardé la porte de l'aile restreinte.

Il l'avait gardée pendant sept ans. Il avait vu Sorkan, Melen et Praxa disparaître en dix mois. Il avait une question — la même question que Sorkan avait posée, reformulée différemment dans sa tête pour qu'elle ressemble moins à une question : pourquoi les activités d'une chambre "de régulation saisonnière" nécessitent-elles qu'aucun de ses voisins administratifs ne sache ce qui s'y passe ?

Il n'allait pas poser la question. Pas aujourd'hui.`,
      },
      {
        titre: 'La Discipline Qui Coûte',
        texte: `Il va continuer à faire son travail. La discipline qui l'a amené là — ne pas questionner hors de son mandat, faire confiance à la structure — est la discipline qui a construit sa carrière.

Ce qu'il ne formule pas encore clairement : la discipline qui l'a protégé jusqu'ici est peut-être la même discipline qui a protégé Sorkan, Melen et Praxa jusqu'à ce qu'ils s'arrêtent de l'appliquer. Et ils n'étaient plus là pour confirmer si c'était le cas.`,
      },
    ],
    sorts: [
      { nom: 'Position de Garde', description_lore: `Ce qu'on lui a appris pendant quinze ans à la Citadelle. La garde n'est pas spectaculaire. Elle est efficace.` },
      { nom: 'Pressentiment', description_lore: `Les trois fois où son élément Stellaire s'est révélé exact en quinze ans, c'était dans ces moments — un sens de la direction que prend une attaque avant qu'elle commence.` },
      { nom: 'Maîtrise de Zone', description_lore: `Quinze ans à contrôler des espaces — couloirs, salles d'accès, périmètres. Il sait ce que ça signifie de posséder une zone.` },
      { nom: "Interdiction de Zone", description_lore: `La synthèse de son Combat et de son Stellaire — contrôler le terrain en anticipant les mouvements. Ce qu'il fait instinctivement dans un couloir, amplifié à son maximum.` },
      { nom: 'Vigilance Permanente', description_lore: `Quinze ans à être responsable de zones qu'il ne pouvait pas voir entièrement. Son Stellaire lui a appris à sentir ce qu'il ne voit pas. Son Combat lui a appris à répondre avant d'avoir le temps d'y penser.` },
    ],
    relations: [
      { personnage_id: 246, nom: 'Sylviel', type: 'collègue_quotidienne', texte: `La spécialiste Fée/Psy qu'il voit tous les matins à l'entrée de l'aile. Elle est précise, professionnelle, et ne le regarde jamais de la façon dont il sait qu'elle pourrait le regarder si elle le voulait. Il apprécie cette discrétion. Ce soir, il a remarqué qu'elle avait capté quelque chose dans son état avant de détourner son regard. Il ne sait pas ce qu'elle a vu.` },
      { personnage_id: 248, nom: 'Eiravel', type: 'collègue_administrative', texte: `Une administratrice Calendrier dans l'aile. Discrète, régulière, rien d'inhabituel. Il l'a vue entrer dans la chambre restreinte une fois — comme administratrice autorisée, pas de façon suspecte. Si quelqu'un avait accès aux registres de cette chambre depuis l'intérieur, ce serait elle. Il n'a jamais pensé à le vérifier.` },
      { personnage_id: 13, nom: 'Nyreth', type: 'contact_externe', texte: `Un individu sous identité changeante qu'il a croisé une fois lors d'une mission externe. Cette personne lui avait posé une question sur les rotations de garde de la Citadelle d'une façon qui semblait anodine mais ne l'était pas. Il avait répondu sans information sensible. Il y repense parfois.` },
    ],
    lore_long: `LES TROIS TRANSFERTS
Un soir de la vie de Varek, garde d'élite de la Citadelle

—

I.

Varek avait commencé à compter sans décider de compter.

C'est arrivé pendant son quart du soir, en regardant la porte de l'aile restreinte. Il avait fait ça sans s'en rendre compte — regardé la porte, regardé le registre de passage vide, regardé l'heure, et commencé à calculer.

Dix-huit mois depuis Sorkan. Onze mois depuis Melen. Huit mois depuis Praxa.

Trois collègues. Trois transferts. Un intervalle qui diminuait entre chaque.

—

II.

Sorkan avait posé la question en réunion de brigade — pas une grande réunion, juste l'équipe de l'aile administrative, sept personnes autour d'une table. Il avait dit : "La chambre restreinte n'a pas de registre de planification externe. Pour les rotations de garde adjacentes, c'est compliqué à coordonner."

C'était une observation logistique. Légitime. Varek avait pensé la même chose et ne l'avait pas posée.

Trois jours plus tard, Sorkan était muté en zone nord de Varkhôl. Haute priorité de garde, bon poste, aucune explication spécifique. Il avait envoyé trois messages. Pas de réponse.

—

III.

Melen était plus prudent que Sorkan. Il n'avait pas posé de question en réunion. Il avait parlé à un technicien de maintenance, en aparté, pendant une pause. Il avait demandé des spécifications techniques — le genre de question fonctionnelle qu'un garde pose pour comprendre son environnement de travail.

Le lendemain matin, son nom n'était plus dans les rotations. Transfert vers Thalassyr. Deux messages. Pas de réponse.

—

IV.

Praxa n'avait rien dit.

Elle avait prolongé sa pause dans le couloir adjacent lors d'un changement de garde. Peut-être dix minutes de plus que d'habitude. Varek l'avait remarqué. Personne d'autre, en apparence, ne l'avait remarqué.

Une semaine plus tard, Asterciel.

—

V.

Il y avait une façon de lire les trois transferts qui ne les reliait pas. Sorkan avait de la famille à Varkhôl — il avait mentionné vouloir se rapprocher. Melen avait demandé une mutation quelques mois avant l'incident. Praxa était moins engagée dans l'équipe, peut-être à la recherche de quelque chose d'autre.

Varek avait construit cette lecture en détail, dans sa tête, pendant les huit mois qui avaient suivi le départ de Praxa.

Il savait que c'était une lecture. Il n'en avait pas de meilleure.

—

VI.

Ce soir, en finissant son quart, il était resté une minute de plus devant la porte de l'aile restreinte.

La chambre à l'intérieur régulait les équilibres saisonniers élémentaires. C'est ce qu'on lui avait dit. Il ne connaissait pas la régulation élémentaire suffisamment pour confirmer ou infirmer.

Ce qu'il avait : trois observations. Trois collègues. Un intervalle.

Ce qu'il n'avait pas : une question à poser sans que ça ressemble à la question que Sorkan avait posée.

—

VII.

Il avait passé son rapport de quart au garde suivant — tout normal, rien à signaler — et il était allé au mess.

La question s'était reformulée dans sa tête pendant le trajet. Pas la même que Sorkan, pas la même que Melen. Quelque chose de plus indirect, quelque chose qui n'impliquait pas directement la chambre restreinte.

Il l'avait reformulée trois fois. Chaque version ressemblait un peu moins à une question directe. La cinquième version ressemblait à une conversation anodine sur les procédures administratives.

Il avait mangé son dîner sans poser la question.

Demain, il aurait peut-être une sixième version.`,
  },

  // ── 248 · EIRAVEL ─────────────────────────────────────────────
  248: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      {
        titre: "Neuf Ans à L'Intérieur",
        texte: `Eiravel a rejoint les Dissidentes à vingt-deux ans, deux ans après être entrée à la Citadelle du Voile comme stagiaire administrative. Elle avait été recrutée par un réseau Dissident via sa cousine — pas dramatiquement, pas après un événement déclencheur. Elle avait simplement été approchée, elle avait dit oui après réflexion, et elle avait commencé à transmettre des informations.

En neuf ans, elle n'avait jamais eu de contact direct avec un autre agent. Ses rapports passaient par un réseau de courriers Vent — des messages portés dans les flux d'air, relayés vers les Dissidentes via Vel'Nox. Son contact s'appelait "Canal Gris."`,
      },
      {
        titre: "La Valeur de L'Accès",
        texte: `Ses deux premières années, elle avait transmis des informations de niveau modeste — rotations d'Élus, décisions de redistribution, nominations administratives.

À vingt-cinq ans, elle avait été promue administratrice de niveau 3 du Calendrier — un poste qui lui donnait accès aux registres de modification des lignes élémentaires. Ses rapports avaient changé de qualité. Les Dissidentes avaient commencé à lui envoyer des demandes spécifiques.

Elle n'avait jamais répondu à une demande qu'elle estimait trop risquée. Elle en avait refusé quatre en neuf ans. Chaque refus avait été accepté sans pression.`,
      },
      {
        titre: "Ce Qu'Elle N'A Pas Encore Cherché",
        texte: `Ce soir, en composant son rapport bi-mensuel, une collègue avait mentionné en passant que le comité de direction discutait des "préoccupations de Crysalme" — des anomalies dans la situation climatique du nord qui semblaient connectées aux modifications récentes du Calendrier.

Elle avait noté ça pour son rapport. Puis, en le rédigeant, elle avait pensé : les modifications récentes du Calendrier. Elle avait accès aux logs de modification.

Elle avait ouvert l'interface pendant deux secondes. Puis une collègue était entrée dans le bureau pour une signature administrative, et le moment était passé.`,
      },
      {
        titre: 'Le Rapport Habituel',
        texte: `Son rapport contenait les informations habituelles : trois décisions de redistribution d'Élus, deux nominations administratives, les modifications de rotation de garde de la semaine.

La mention des "préoccupations de Crysalme" et des modifications du Calendrier était dans le rapport, comme observation sans analyse.

Ce qu'elle n'avait pas fait : ouvrir les logs de modification du Calendrier avec le terme "Crysalme" ou "Champ Gelé" comme filtre. Ce qu'elle aurait trouvé : les entrées du Drain Préparatoire que Isvara avait identifiées depuis l'extérieur, trois ans plus tôt. Elle ne savait pas qu'Isvara existait. Elle ne savait pas qu'elle avait les données.`,
      },
      {
        titre: 'Le Prochain Rapport',
        texte: `Elle va continuer à travailler. Son rapport part toutes les six à huit semaines. Le prochain sera dans six semaines.

Dans six semaines, peut-être que les "préoccupations de Crysalme" seront encore dans l'actualité de la Citadelle. Peut-être qu'elle ouvrira les logs de modification avec un peu plus de curiosité.

Peut-être pas. Elle n'a pas de raison particulière de penser que ces logs contiennent quelque chose qu'elle n'a pas déjà vu.`,
      },
    ],
    sorts: [
      { nom: 'Rapport de Vent', description_lore: `Ce qu'elle fait depuis neuf ans — collecter et transmettre l'information. En combat, le vecteur est le même. L'urgence est différente.` },
      { nom: 'Couverture de Vent', description_lore: `Neuf ans à utiliser le Vent pour qu'aucun de ses messages ne laisse de trace. Appliqué en protection physique, c'est le même réflexe dans une direction différente.` },
      { nom: 'Déplacement Silencieux', description_lore: `Neuf ans à se déplacer dans la Citadelle sans attirer l'attention. Ça laisse des réflexes.` },
      { nom: 'Probabilité Favorable', description_lore: `L'élément Fée à pleine expression — pas changer les règles, légèrement incliner le monde dans une direction. Ce qu'elle fait depuis neuf ans, sans que personne s'en rende compte.` },
      { nom: 'Présence Discrète', description_lore: `Neuf ans à être la personne que personne ne remarque en premier. Ce n'est pas de l'invisibilité — c'est de la neutralité active, cultivée jusqu'à devenir réflexe.` },
    ],
    relations: [
      { personnage_id: 246, nom: 'Sylviel', type: 'collègue_respectée', texte: `Sylviel est précise, honnête, et profondément loyale à l'Empire dans un sens qui n'est pas de la déférence mais d'une conviction réfléchie. Eiravel la respecte et la surveille avec une attention particulière — si quelqu'un dans l'aile pouvait détecter quelque chose d'inhabituel chez elle, ce serait Sylviel. Elle a été très prudente pendant neuf ans. Elle continue.` },
      { personnage_id: 56, nom: 'Isvara', type: 'contact_inexistant', texte: `Elle n'existe pas dans la réalité d'Eiravel. Mais Isvara est archiviste Fée à Iskral avec accès partiel aux données du Calendrier Principal depuis l'extérieur — et Eiravel a accès aux logs complets depuis l'intérieur. Elles ont les deux moitiés d'une image complète. Personne ne le sait. La connexion n'a pas encore été faite.` },
      { personnage_id: 49, nom: 'Velath', type: 'relais_de_réseau', texte: `Elle ne connaît pas le nom de Velath. Elle connaît "Canal Gris" — le point de relais de son réseau Dissident, quelque part à Vel'Nox. Chaque rapport qu'elle envoie par Vent passe par ce relais. Elle ne sait pas qui maintient ce canal. Elle l'a supposé fiable pendant neuf ans.` },
    ],
    lore_long: `LA QUESTION QUI N'A PAS ÉTÉ POSÉE
Un soir de la vie d'Eiravel, administratrice Calendrier

—

I.

La journée avait été ordinaire.

Eiravel aimait les journées ordinaires. Elles signifiaient que personne n'avait remarqué quelque chose qu'elle n'aurait pas voulu qu'on remarque, que les flux d'information avaient circulé normalement, que son rapport pouvait contenir ce qu'elle avait collecté sans nécessiter de décision difficile sur ce qu'elle incluait.

Ce soir, en finissant ses notes, elle composait le rapport habituel. Trois décisions de redistribution d'Élus. Deux nominations administratives. Modifications de rotation de garde de l'aile Ouest. Une mention des "préoccupations de Crysalme" entendues en réunion de direction — pas de détails, juste la référence et le fait que les modifications du Calendrier étaient liées.

—

II.

Elle avait rejoint les Dissidentes à vingt-deux ans.

La décision n'avait pas été dramatique. Sa cousine l'avait contactée. Elle avait réfléchi pendant six semaines. Elle avait dit oui.

Ce qui l'avait convaincue n'était pas un événement. C'était une accumulation d'observations — la façon dont les Élus de certaines régions disparaissaient dans les registres de redistribution et n'apparaissaient plus dans aucun registre après. La façon dont les décisions du Calendrier qui touchaient les populations les plus vulnérables étaient présentées comme des décisions techniques plutôt que politiques. La façon dont certaines informations circulaient à la Citadelle dans une seule direction.

Elle pouvait corriger ça, légèrement, régulièrement. Elle l'avait fait pendant neuf ans.

—

III.

"Crysalme fait des vagues au comité de direction," avait dit Lyriel — une collègue de l'aile Nord — en venant chercher une signature. "Apparemment les anomalies climatiques là-bas sont connectées à des ajustements du Calendrier. Elles cherchent quelqu'un à interroger sur les modifications récentes."

Eiravel avait signé le formulaire. "Je n'étais pas dans cette section de modification. Tu as un nom ?"

"Non. C'est flou encore. Peut-être que ça ira nulle part."

Lyriel était repartie. Eiravel avait repris ses notes.

—

IV.

Les modifications récentes du Calendrier.

Elle avait accès aux logs de modification depuis sa promotion de niveau 3 — pas les décisions politiques, les logs techniques. Les entrées horodatées avec les paramètres de chaque ajustement des lignes élémentaires.

Elle avait ouvert l'interface pendant deux secondes.

Puis Varek avait passé sa ronde dans le couloir — elle l'entendait à travers la cloison, pas de façon menaçante, juste la routine de son quart — et elle avait refermé l'interface par réflexe.

—

V.

Ce n'était pas une décision. C'était un réflexe.

Elle avait neuf ans de réflexes calibrés pour la survie dans un espace où une requête inhabituelle pouvait être notée. Les logs de modification du Calendrier n'étaient pas interdits à son niveau d'accès — elle les consultait régulièrement pour son travail ordinaire. Mais une requête filtrée sur "Crysalme" ou "Champ Gelé" dans les logs serait une requête non-standard. Les requêtes non-standard laissaient des traces.

Elle avait refermé l'interface. Elle avait continué à composer son rapport.

—

VI.

Le rapport était parti via Vent à vingt heures trente-deux.

Il contenait la mention des préoccupations de Crysalme, comme observation sans analyse. Canal Gris en ferait ce qu'il pouvait. Les Dissidentes avaient peut-être des sources sur la question climatique du nord qui ne venaient pas des logs du Calendrier.

Peut-être qu'ils savaient déjà. Peut-être que la connexion entre les modifications du Calendrier et les anomalies de Crysalme était déjà documentée quelque part dans leur réseau.

Peut-être pas.

—

VII.

Elle avait rangé ses affaires. Elle avait vérifié que l'interface du Calendrier était fermée — elle l'était. Elle avait regardé une dernière fois la liste des requêtes de la journée dans le registre de l'aile.

Rien d'anormal.

En sortant de l'aile, elle avait croisé Sylviel qui finissait une session tardive. Elles s'étaient saluées. Sylviel avait ce regard particulier — l'attention légèrement trop précise de quelqu'un qui perçoit plus que ce qui est visible. Eiravel avait appris à ne pas y répondre de façon inhabituellement neutre, parce que l'inhabituellement neutre était lui-même une réponse.

"Bonne fin de semaine," avait dit Sylviel.

"Toi aussi."

Eiravel était sortie. Dans six semaines, elle enverrait un autre rapport. Peut-être que d'ici là, les préoccupations de Crysalme seraient plus claires. Peut-être qu'elle aurait une raison ordinaire de regarder les logs de modification.

Peut-être que quelqu'un d'autre ferait la connexion avant elle.

Elle espérait que quelqu'un le fasse. Elle ne savait pas qui.`,
  },

  // ── 234 · VASHMAEL ────────────────────────────────────────
  234: {
    timeline_position: { an: -1, lieu: 'Déserts / terrain', arc: "L'Avatar" },
    histoire: [
      { titre: 'Douze ans sur les routes', texte: `Vashmael a grandi à Keth-Alvar, à la lisière d'une zone de désertification — il a appris à lire le sol avant les éléments. La Convergence l'a recruté à trente-deux ans pour identifier les Élus prometteurs et les terres à potentiel dans les zones sous-développées. Deux sections dans son carnet : les terres et les Élus.` },
      { titre: 'La sincérité comme mécanisme', texte: `Il ne pose pas de questions sur ce qu'il ne voit pas — pas par naïveté, par division du travail. Il fait le terrain. D'autres font les opérations. Il a vu assez de résultats positifs (terres revitalisées, familles qui ont pu planter) pour faire confiance à la chaîne sans superviser chaque maillon. Cette logique est honnête dans beaucoup de contextes. Dans ce contexte précis, elle est mortelle.` },
      { titre: 'Lysael et la gêne', texte: `Il y a deux mois, il a croisé Lysael à Virex. Elle cherchait des "profils de saturation élémentaire maximale" avec une précision qui dépassait le besoin d'une formation ordinaire. Il a voulu demander. Il a posé une question sur la sécurité de zone à la place. La gêne n'a pas encore de nom mais elle est là.` },
      { titre: 'Ferrak et la prochaine visite', texte: `Dans trois semaines il retourne dans un village. Un jeune Élu Sol qu'il avait recommandé — Ferrak, dix-neuf ans — n'a pas donné de nouvelles directes depuis six mois. Il va demander à la famille. Cette fois, il a décidé d'écouter la réponse différemment qu'avant.` },
      { titre: 'Arev comme modèle impossible', texte: `Son modèle depuis quinze ans — sans jamais l'avoir rencontré. Il a calqué ses méthodes sur la réputation d'Arev. Ce qu'il ne sait pas : Arev a fui la Convergence précisément à cause de ce que Vashmael fait encore en confiance. Il suit le modèle de quelqu'un qui a fui en horreur ce qu'il fait.` },
    ],
    sorts: ['Lecture de Terrain', 'Ancrage Communal', 'Adaptabilité de Terrain', 'Stabilisation de Zone', 'Revitalisation'],
    relations: [
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'Reçoit ses rapports et filtre ce qui lui revient — la confiance est réelle et la condition de tout le reste' },
      { id: 67, nom: 'Arev', type: 'inconnue_qui_change_tout', note: 'Son modèle depuis 15 ans — a fui la Convergence précisément à cause de ce que Vashmael fait encore en confiance' },
      { id: 235, nom: 'Khorath', type: 'allié', note: 'L\'exécuteur qui le protège de la vérité consciemment depuis des années' },
    ],
    lore_long: `Vashmael croit dans la redistribution avec la conviction de quelqu'un qui en a vu les preuves. Les terres de Keth-Alvar, les familles qui ont planté là où il y avait du sable — les preuves existent. Il les a vues. La section Élus dans son carnet alimente depuis 12 ans quelque chose qu'il n'a jamais vu. Dans trois semaines il va demander des nouvelles de Ferrak à sa famille. Il a décidé d'écouter différemment qu'avant.`,
  },

  // ── 235 · KHORATH ─────────────────────────────────────────
  235: {
    timeline_position: { an: -1, lieu: 'Déserts / opérations extraction', arc: "L'Avatar" },
    histoire: [
      { titre: 'La semaine à quarante-quatre ans', texte: `Khorath a compris à 44 ans ce que "extraction" signifiait dans le contexte des opérations de Razhal. Il a pris une semaine à peser ses options. Partir : les deux personnes qu'il avait vues essayer avaient disparu. Alerter : pas de réseau de confiance. Continuer : l'option par défaut — pas parce que c'était juste, parce que c'était l'option qui ne demandait pas de reconstruire quelque chose à 44 ans.` },
      { titre: 'Vashmael et la protection active', texte: `Il protège Vashmael de la vérité — consciemment, depuis plusieurs années. Un mélange de respect pour la sincérité de Vashmael et d'impossibilité de trouver une façon de lui dire qui ne détruise pas quelque chose d'irremplaçable. La protection est active : il filtre ce que Vashmael voit des opérations.` },
      { titre: 'Drevorn et la reconnaissance mutuelle', texte: `Une opération conjointe, quatre jours, il y a deux ans. Il a lu Drevorn le premier jour : quelqu'un en train de comprendre. Ils ont ajusté ce qu'ils montraient. Ils se sont séparés sans avoir échangé un seul mot sur ce qu'ils savaient. C'était suffisant.` },
      { titre: 'La surveillance et ce qui commence à lâcher', texte: `Il sait qu'il est sur une liste de surveillance. Pendant 7 ans, le mécanisme tenait. Ces derniers mois, les silences d'après-opération durent plus longtemps, et il pense à des choses qu'il ne pensait pas avant. Il fait son travail. Il protège Vashmael. Il attend de voir ce qui change.` },
    ],
    sorts: ['Analyse de Position', 'Frappe de Terrain', 'Ancrage Tactique', 'Économie de Force', 'Zone Contrôlée'],
    relations: [
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'Accord implicite de ne pas nommer ce que chacun sait que l\'autre sait' },
      { id: 234, nom: 'Vashmael', type: 'allié', note: 'Le protège de la vérité — la seule chose propre dans son environnement direct' },
      { id: 233, nom: 'Drevorn', type: 'contact_nécessaire', note: 'Reconnaissance mutuelle sans mots lors d\'une opération — ni l\'un ni l\'autre n\'a confirmé verbalement' },
      { id: 240, nom: 'Zyress', type: 'ennemi', note: 'Quelqu\'un le surveille — les signes sont subtils, exactement au niveau de quelqu\'un qui fait ce travail sérieusement' },
    ],
    lore_long: `Khorath sait depuis 7 ans. Il a pris une semaine à quarante-quatre ans pour peser ses options et a choisi de continuer — pas parce qu'il approuve, parce que les alternatives étaient pires. Il protège Vashmael. Il a reconnu Drevorn sans un mot. Quelqu'un le surveille maintenant et son mécanisme de compartimentalisation commence à lâcher. Il fait son travail et attend de voir ce qui change.`,
  },

  // ── 236 · TALUYA ──────────────────────────────────────────
  236: {
    timeline_position: { an: -1, lieu: 'Déserts / protocole médical', arc: "L'Avatar" },
    histoire: [
      { titre: 'Le protocole comme vocation', texte: `Taluya est médecin de terrain. En 4 ans elle a porté son protocole de préparation "sans souffrance" à sa sixième version — 68% de réduction de la détresse mesurable. Son élément Eau lit les flux corporels avec une précision que les instruments n'atteignent pas. Son élément Fée apaise les états émotionnels aigus. C'est du bon travail médical.` },
      { titre: 'Le document de Drevorn', texte: `Il y a 6 mois Drevorn lui a envoyé un document intitulé "Note sur le consentement — cadre éthique préparatoire". Elle l'a ouvert, vu la section sur les sujets informés vs non-informés, et refermé. Elle ne lui a pas répondu. Le document est dans ses archives dans un dossier sans nom.` },
      { titre: 'Ce que son élément Eau lit', texte: `Un corps qui comprend ce qui va se passer présente une signature différente de la peur ordinaire — quelque chose avec une qualité de certitude physiologique. Elle lit ça. Elle l'a toujours lu. La version 7 cherche à neutraliser cette signature dans les 6 à 10 dernières minutes via une composante Fée plus intensive.` },
      { titre: 'Shiveth et la question non posée', texte: `Shiveth, son ancienne collègue, lui avait demandé : "Est-ce que tu lis ça sur eux ?" Elle avait répondu qu'elle ne lisait pas psychologiquement. C'était honnête d'une façon. Shiveth est partie. La conversation revient maintenant.` },
    ],
    sorts: ['Flux de Calme', 'Rééquilibrage Hydrique', 'Saturation Cognitive', 'Protocole d\'Urgence', 'Zone de Préparation'],
    relations: [
      { id: 232, nom: 'Shiveth', type: 'fantôme', note: 'A posé la question qu\'elle n\'a pas voulu entendre avant de partir' },
      { id: 233, nom: 'Drevorn', type: 'contact_nécessaire', note: 'Son document sur le consentement est dans un dossier sans nom — pas rouvert depuis 6 mois' },
      { id: 65, nom: 'Saeved', type: 'fantôme', note: 'Son modèle de sacrifice volontaire — elle ne sait pas que Drevorn passe sa vie à vérifier si ce consentement était réel' },
    ],
    lore_long: `Taluya est une bonne médecin. Son protocole fonctionne. 68% de réduction de la détresse. Elle lit les flux corporels avec une précision que les instruments n'atteignent pas — et un corps qui comprend ce qui va se passer présente une signature qu'elle reconnaît mais qu'elle ne regarde pas en face. Le dossier de Drevorn est dans ses archives. La version 7 cherche à neutraliser cette signature. Elle y pense entre deux améliorations.`,
  },

  // ── 237 · ORVETH ──────────────────────────────────────────
  237: {
    timeline_position: { an: -1, lieu: 'Déserts / Virex', arc: "L'Avatar" },
    histoire: [
      { titre: 'La semaine à 26 ans', texte: `Orveth a rejoint la Convergence à 19 ans parce que son père non-enregistré était mort à 52 ans d'une instabilité élémentaire chronique faute de formation. Il croyait que la Convergence aidait les Élus à ne pas souffrir comme son père. À 26 ans, lors d'une opération à Virex, un jeune Élu Sol avait "disparu" dans une formation à une adresse qui n'existait pas dans les registres officiels. Il avait eu les morceaux pendant une semaine.` },
      { titre: 'La décision de ne pas assembler', texte: `Il n'est plus naïf — il a les morceaux et a choisi de ne pas les assembler. À chaque briefing, à chaque opération, il y a un point où une question pourrait changer tout. Il ne la pose pas. Ce n'est plus de l'ignorance : c'est une décision active et répétée.` },
      { titre: 'Lysael et la méthode visible', texte: `Il travaille avec Lysael à Virex depuis 6 semaines. Elle cherche des profils avec une précision que lui n'a plus le courage de questionner. Il a commencé une question, l'a terminée sur un sujet adjacent. Lysael a répondu à sa vraie question sans l'avoir entendue. Elle a fait le même choix, plus consciemment, sans le malaise visible.` },
      { titre: 'Phyrana comme miroir', texte: `Sa collègue depuis 6 mois — encore dans la foi intacte, qui pose des vraies questions. Il l'observe comme un miroir de lui-même à 22 ans. Il ne sait pas s'il devrait l'avertir, ou si l'avertir signifierait aussi s'avertir lui-même.` },
    ],
    sorts: ['Flux de Détection', 'Perturbation de Courant', 'Adaptabilité de Combat', 'Signature Masquée', 'Tempête de Données'],
    relations: [
      { id: 234, nom: 'Vashmael', type: 'mentor', note: 'Celui qui croit encore — rappel douloureux de ce qu\'Orveth était à 19 ans' },
      { id: 63, nom: 'Lysael', type: 'allié', note: 'A fait le même choix plus consciemment et sans le malaise visible' },
      { id: 244, nom: 'Phyrana', type: 'rival', note: 'Son miroir à 22 ans — il ne sait pas encore s\'il va l\'avertir ou non' },
    ],
    lore_long: `Orveth a les morceaux depuis 3 ans et a décidé de ne pas les assembler. Ce n'est pas de la naïveté — c'est un choix actif répété à chaque opération. Son père est mort d'une instabilité non-gérée ; il a rejoint la Convergence pour empêcher ça. La Convergence fait autre chose. Il regarde Phyrana poser les vraies questions et se demande combien de temps ça prend avant qu'on apprenne à ne plus les poser.`,
  },

  // ── 238 · SETHARA ─────────────────────────────────────────
  238: {
    timeline_position: { an: -1, lieu: 'Déserts / analyse', arc: "L'Avatar" },
    histoire: [
      { titre: 'Sept profils en huit ans', texte: `Sethara est fascinée par la pureté élémentaire. À 15 ans elle a identifié sa première signature pure dans son carnet rouge. La Convergence l'a recrutée à 26 ans pour ce qu'elle savait déjà faire — identifier des profils de saturation maximale. Razhal lui a expliqué la finalité quand elle a demandé. Elle a intégré l'information et accepté le poste.` },
      { titre: 'L\'envie non nommée', texte: `Elle porte deux éléments — Feu et Psy — ce qui la rend fonctionnellement puissante mais "impure" selon ses propres critères. Elle mesure de l'extérieur quelque chose qu'elle ne peut pas être de l'intérieur. Elle ne fait pas explicitement le lien entre cette envie et ses choix de carrière.` },
      { titre: 'Vrash et la même compétence différemment utilisée', texte: `Elle a rencontré Vrash il y a deux ans — même capacité de lecture des tensions élémentaires, utilisée pour protéger plutôt qu'identifier pour le Protocole. Vrash avait la tristesse de quelqu'un qui comprenait comment Sethara était arrivée là. Sethara a noté : "reconnaissance + tristesse, Vrash, données sur les choix d\'application." Elle n'a pas noté ce qu'elle avait ressenti face à la tristesse.` },
      { titre: 'Le huitième profil', texte: `Elle analyse des données qui correspondent au huitième profil — Sol, la pureté la plus complète qu'elle ait jamais documentée. Elle a envoyé une note préliminaire à Razhal. Ce qu'elle ressent est différent des 7 fois précédentes — une qualité dans l'espace qui va bientôt exister là où le profil est maintenant. Elle finalise dans deux jours.` },
    ],
    sorts: ['Cartographie Temps Réel', 'Point Chaud', 'Interférence Cognitive', 'Lecture de Saturation', 'Décharge d\'Archive'],
    relations: [
      { id: 226, nom: 'Vrash', type: 'rival', note: 'Même compétence, direction opposée — Vrash a eu la tristesse de quelqu\'un qui comprend' },
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'Lui a expliqué la finalité quand elle a demandé — elle a intégré et accepté' },
      { id: 232, nom: 'Shiveth', type: 'fantôme', note: 'Avait presque la recruter, posait des questions différentes, est partie' },
    ],
    lore_long: `Sethara documente les purs élémentaires depuis ses 15 ans. La Convergence lui a fourni les sujets et les instruments. En 8 ans, 7 profils identifiés et transmis — elle savait la finalité quand elle a demandé. Elle porte deux éléments et mesure de l'extérieur quelque chose qu'elle ne peut pas être. Le huitième profil Sol est le plus complet qu'elle ait jamais vu. Elle finalise son rapport dans deux jours.`,
  },

  // ── 241 · RHAVEL ──────────────────────────────────────────
  241: {
    timeline_position: { an: -1, lieu: 'Déserts / logistique', arc: "L'Avatar" },
    histoire: [
      { titre: 'L\'importance trouvée', texte: `Avant la Convergence, Rhavel était quelqu'un que personne ne regardait vraiment — coordinateur dans une chaîne d'approvisionnement locale, compétent mais remplaçable. La Convergence lui a donné un rôle indispensable. "Ce travail nécessite quelqu'un dont la précision est totale, parce que les marges d'erreur sont nulles." Il a trouvé ça. L'importance. Il a arrêté de regarder trop attentivement ce qu'il transportait.` },
      { titre: 'La question d\'une passagère', texte: `Il y a 4 ans, une jeune femme Fée, 22 ans, lui avait dit pendant le transport : "Tu sais où tu m'emmènes ?" Il avait répondu avec les informations vraies qu'il avait — soins spécialisés, équipe médicale, procédure standard. Il n'avait pas menti. Après le transfert il avait posé la question logistique à Razhal. Pas la vraie question.` },
      { titre: 'La pensée entière', texte: `Il y a 6 mois, pendant un moment de calme, il a eu la pensée entière et clairement formulée : les sujets qu'il transporte ne reviennent jamais, les soins médicaux prolongés produisent des retours, l'absence totale de retours suggère une finalité différente. Il l'a eue. Complète. Puis il a réorganisé le système de classement par onglets de son carnet. Il a mangé.` },
      { titre: 'Le prochain transfert', texte: `Il a un transfert dans 10 jours. La coordination est bonne. La route est sécurisée. Ce qu'il a prévu de demander : conditions météorologiques sur la route. Pas : est-ce que les sujets transportés sont encore vivants quelque part. Il est indispensable. C'est ce qui compte. C'est ce qu'il se dit.` },
    ],
    sorts: ['Route Fluide', 'Pont de Glace', 'Courant de Repli', 'Verrouillage de Zone', 'Couloir Sécurisé'],
    relations: [
      { id: 234, nom: 'Vashmael', type: 'allié', note: 'Lui dit qu\'il est indispensable — Rhavel n\'y croit plus tout à fait mais en a encore besoin' },
      { id: 236, nom: 'Taluya', type: 'allié', note: 'Reçoit les arrivées — ses confirmations de qualité valent plus que celles de Razhal' },
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'Lui fournit les mandats et les faux papiers — gère l\'information pour éviter une crise de conscience' },
    ],
    lore_long: `Rhavel a trouvé l'importance dans la Convergence après des années d'invisibilité. Il transporte des "patients en soins médicaux" depuis 5 ans — il a eu la pensée complète il y a 6 mois et a décidé de ne pas la regarder en face. Il range le système de classement de son carnet. L'importance vaut le coût de ne pas regarder certaines pensées en face. Pour l'instant, encore.`,
  },

  // ── 243 · KAEVORN ─────────────────────────────────────────
  243: {
    timeline_position: { an: -1, lieu: 'Déserts / sites géologiques', arc: "L'Avatar" },
    histoire: [
      { titre: 'La question posée une fois', texte: `Kaevorn est géologue depuis 20 ans. Il identifie les sites de Drain selon les critères fournis par la Convergence. Il y a 7 ans il a demandé ce qui arrivait après sa sélection du site. On lui a répondu "redistribution — réactivation des terres mortes dans un rayon de 20 km". C'était plausible. C'était cohérent avec ce qu'il voulait croire.` },
      { titre: 'Apprendre à ne pas reposer', texte: `Il n'a pas reposé la question. Non pas parce qu'il était satisfait, mais parce que reposer la question risquait de produire une réponse différente. Ce mécanisme est différent d'Orveth (qui voit et décide de ne pas assembler) — Kaevorn a décidé de ne pas chercher au-delà de son périmètre. Son expertise est dans les roches. Les systèmes humains sont trop difficiles à lire.` },
      { titre: 'Le site repassé', texte: `Il y a 5 ans, il est repassé par un site identifié 3 ans avant. Pas de redistribution visible. Signature élémentaire changée — une absence là où il y avait une présence. Il a classé ça comme une variation naturelle des flux. Il n'a pas apporté les instruments pour vérifier. Ce n'était pas dans son périmètre de mission.` },
      { titre: 'Sykavel et la question de vérification', texte: `Depuis quelques mois, les questions de Sykavel ont changé de qualité — de complétion opérationnelle à vérification. Elle cherche à vérifier quelque chose. Il n'a pas demandé quoi. Les roches ne mentent pas. Les systèmes humains sont trop difficiles.` },
    ],
    sorts: ['Lecture Géologique', 'Projection de Roche', 'Carapace Minérale', 'Extraction de Formation', 'Effondrement Contrôlé'],
    relations: [
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'A répondu à la question une fois — Kaevorn a accepté et ne repose plus' },
      { id: 235, nom: 'Khorath', type: 'allié', note: 'Partenaire terrain qui pose des vraies questions sur les conditions géologiques — une rareté appréciée' },
      { id: 242, nom: 'Sykavel', type: 'contact_nécessaire', note: 'Ses questions ont changé de qualité récemment — Kaevorn l\'a noté sans demander quoi' },
    ],
    lore_long: `La roche ne ment pas — c'est la conviction de Kaevorn. Il a posé la question sur la finalité une fois il y a 7 ans, accepté "redistribution" et appris à ne pas la reposer. Son périmètre est la géologie. Il est repassé par un ancien site — pas de redistribution visible, signature élémentaire changée. Il a classé ça comme variation naturelle. Il n'a pas apporté les bons instruments pour vérifier.`,
  },

  // ── 244 · PHYRANA ─────────────────────────────────────────
  244: {
    timeline_position: { an: -1, lieu: 'Déserts / terrain', arc: "L'Avatar" },
    histoire: [
      { titre: 'La foi basée sur des preuves', texte: `Phyrana a vu les terres de sa région se revitaliser à 19 ans après une intervention Convergence. Ce n'était pas spectaculaire — quelques parcelles, de petites cultures. Mais c'était réel. Elle a rejoint la Convergence à 29 ans en sachant que ce qu'elle avait vu était possible. Sa foi est basée sur des observations, pas sur un discours.` },
      { titre: 'Les trois sujets sans nouvelles', texte: `Depuis 6 mois, elle compte. Trois personnes rencontrées dont elle a facilité l'orientation, qui n'ont pas donné de nouvelles à leurs familles. Elle a répondu aux familles avec les informations officielles. Elle a vu dans leurs visages qu'elles ne croyaient pas tout à fait non plus.` },
      { titre: 'Orveth qui répond à côté', texte: `Son collègue depuis 6 mois répond parfois à des questions adjacentes plutôt qu'aux vraies questions. Elle interprète ça comme de la réserve professionnelle. Elle a noté l'écart. Elle n'a pas encore décidé quoi en faire.` },
      { titre: 'L\'attention de Taluya qui s\'arrête', texte: `Deux semaines d'observation lors d'une formation. L'attention de Taluya s'arrête nettement après le protocole. Note dans son carnet sans système : "Taluya : attention qui s'arrête nettement après le protocole." Sans conclusion. Juste l'observation. Elle n'est pas encore au stade où elle sait ce qu'elle va décider.` },
    ],
    sorts: ['Présence Rassurante', 'Élan Normal', 'Éclat de Confiance', 'Adaptation d\'Urgence', 'Champ de Foi'],
    relations: [
      { id: 234, nom: 'Vashmael', type: 'mentor', note: 'Son modèle — lui a transmis sa sincérité intacte. Sa confiance est réelle. Ce sera difficile quand elle comprendra qu\'il ne savait pas non plus.' },
      { id: 237, nom: 'Orveth', type: 'rival', note: 'Elle lit ses ambiguïtés comme de la réserve — il la regarde comme un miroir de lui-même à 22 ans' },
      { id: 236, nom: 'Taluya', type: 'contact_nécessaire', note: 'Son modèle professionnel — elle a noté l\'attention qui s\'arrête après le protocole' },
    ],
    lore_long: `Phyrana a vu la redistribution fonctionner. Sa foi est basée sur des preuves réelles. Depuis 6 mois, trois sujets sans nouvelles, un collègue qui répond à côté, une médecin dont l'attention s'arrête nettement après le protocole. Elle n'est pas encore dans la résignation ni dans la paralysie. Elle est dans le moment d'avant — où les questions s'accumulent plus vite que les réponses satisfaisantes. Elle ne sait pas encore si elle va chercher les vraies réponses ou apprendre à ne plus chercher.`,
  },

  // ── 239 · AMHAVEL ─────────────────────────────────────────
  239: {
    timeline_position: { an: -1, lieu: 'Déserts / Archives Convergence', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Les archives et la première décennie',
        texte: `À trente-sept ans, après dix ans dans les archives régionales des Déserts, Amhavel avait rejoint la Convergence pour garder ses archives internes. Pas par idéologie — par correspondance de profil. Il avait la discrétion, la mémoire, la capacité à voir les connexions sans les nommer. Ils cherchaient exactement ça.

La première décennie avait passé sans révélation brutale. Les pièces s'étaient assemblées lentement, sur plusieurs années, comme une image qui se révèle dans le brouillard. À la dixième année il avait la vue complète : ce que le Protocole faisait aux purs élémentaires, où ça menait, ce qu'était l'Avatar.

Il avait décidé d'attendre de comprendre exactement vers quoi ça menait avant d'agir. C'était une raison valide.`,
      },
      {
        titre: 'Vingt ans de bonnes raisons',
        texte: `La deuxième décennie avait été différente. Il savait maintenant. La question était ce qu'on fait quand on sait.

Il avait cartographié ses options. Fuir avec les documents — risqué. Contacter les Dissidentes ou l'Empire — il ne savait pas à qui faire confiance. Agir de l'intérieur — il n'avait pas les alliés. Attendre une opportunité naturelle — raisonnable si une opportunité allait se présenter.

Il avait choisi l'attente. La logique était solide. On peut toujours décider d'agir plus tard. On ne peut pas défaire une action mal calculée.

Le problème : cette logique est toujours solide. Il y a toujours une raison de ne pas encore agir.`,
      },
      {
        titre: 'La question de Drevorn',
        texte: `Six mois avant l'état actuel, Drevorn était entré dans les archives avec l'air de quelqu'un qui cherchait à nommer quelque chose sans avoir les mots. Il avait parlé des sujets qui partent en traitement et ne reviennent pas, des formulaires qui pointent vers des projets fantômes.

Amhavel l'avait écouté. À la fin il avait dit quelque chose qu'il n'avait dit à personne depuis dix ans : qu'il savait. Qu'il avait les archives. Qu'il n'avait pas encore trouvé le bon moment.

Drevorn l'avait regardé. "Tu attends quoi exactement ?"

Amhavel avait répondu quelque chose sur les conditions. Drevorn n'avait pas poussé.

Il a pensé à cette question tous les jours depuis.`,
      },
      {
        titre: 'Ce qu\'il fait quand même',
        texte: `Il a classé le dossier d'Arev en accès restreint il y a huit mois quand il a vu que Razhal commençait à s'y intéresser. C'était une protection — Arev travaille contre la Convergence, si Razhal met la main sur son réseau complet, les conséquences seront mauvaises.

Amhavel ne connaît pas Arev. Mais Arev ne méritait pas d'avoir son réseau exposé.

C'est peut-être la meilleure chose qu'il ait faite en vingt ans avec ce qu'il sait. Il n'est pas sûr que ce soit suffisant.`,
      },
      {
        titre: 'Ce que l\'attente est devenue',
        texte: `Il sait des choses qui pourraient changer les équilibres. Les archives contiennent la documentation complète du Protocole. Arev cherche exactement ces preuves. Si quelqu'un mettait ces deux choses ensemble, les possibilités changeraient de façon radicale.

Il ne l'a pas encore fait.

Ce qu'il s'est dit pendant vingt ans : le moment parfait existe. Il viendra. Ce qu'il commence à penser depuis six mois : le moment parfait n'existe pas. Il a été une excuse si longtemps qu'il ne sait plus si c'est une conviction ou un mécanisme de protection.

Drevorn lui a demandé ce qu'il attendait. Il n'a toujours pas de réponse. Il commence à penser que l'absence de réponse est elle-même une réponse.`,
      },
    ],
    sorts: ['Mémoire du Sol', 'Enracinement', "Voile d'Ombre", 'Lecture de Sous-courant', 'Effondrement de Mémoire'],
    relations: [
      { id: 233, nom: 'Drevorn', type: 'allié', note: 'Le seul à qui il a vraiment parlé — et qui a posé la question impossible' },
      { id: 49, nom: 'Velath', type: 'contact_nécessaire', note: 'A utilisé ses routes sans savoir qui les avait cartographiées' },
      { id: 67, nom: 'Arev', type: 'inconnue_qui_change_tout', note: 'Ne l\'a jamais rencontré — connaît son dossier entier, a protégé son réseau' },
      { id: 240, nom: 'Zyress', type: 'fantôme', note: 'Ne la connaît pas mais comprend que quelqu\'un maintient sa paralysie activement' },
    ],
    lore_long: `Amhavel sait depuis quinze ans. Ce n'est pas une révélation qui est venue d'un coup — c'est une accumulation. Le premier document qui l'avait arrêté : un formulaire de transfert avec la mention "ressource consommée". Il avait classé le document. Il était passé au suivant.

Le problème avec les archives, c'est qu'on finit par tout voir. À la dixième année il avait la vue complète — les formulaires de transfert, les rapports de terrain, les documents de planification. Dix-huit purs élémentaires. La liste des éléments. Le calendrier. L'Avatar.

Il avait classé ses notes dans un dossier crypté dans sa tête. Il avait continué à classer les documents.

La première raison de ne pas agir était honnête. La deuxième était valide. La troisième était prudente. La quatrième — agir signifiait prendre une responsabilité qu'il ne savait pas s'il était prêt à porter — est celle qu'il n'a pas encore réussi à classer dans la même catégorie que les trois premières.

Il a protégé le dossier d'Arev. C'est peut-être la meilleure chose qu'il ait faite. Drevorn lui a demandé ce qu'il attendait. Il attend toujours de trouver la réponse.`,
  },

  // ── 240 · ZYRESS ──────────────────────────────────────────
  240: {
    timeline_position: { an: -1, lieu: 'Déserts / Convergence mobile', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Virex et la découverte de l\'utilité',
        texte: `Zyress a grandi à Virex, une ville marchande des Déserts connue pour ses flux discrets de personnes et d'informations. Elle n'a pas choisi son élément : Spectre lui est venu à dix-neuf ans avec la qualité d'une évidence — la capacité à percevoir les résidus de présences disparues, à se déplacer dans les zones d'ombre de la perception collective.

Combat est venu plus tard, développé délibérément. Elle voulait être efficace, pas seulement discrète.

La Convergence l'avait trouvée à vingt-deux ans. Ils n'avaient pas commencé par un discours idéologique. Ils avaient dit : "Nous avons un travail qui correspond exactement à ce que tu fais déjà. On te paie mieux, on te couvre mieux, et le travail est plus propre." C'était honnête. Elle avait apprécié l'honnêteté.`,
      },
      {
        titre: 'Les six premières éliminations',
        texte: `Les six premières éliminations avaient été des variations sur un même profil : des anciens membres Convergence qui avaient trop vu, qui commençaient à parler à des personnes qu'ils n'auraient pas dû approcher, ou qui avaient simplement un accès documentaire qu'on aurait dû leur retirer mais qu'on avait négligé de retirer.

Elle ne les aimait pas particulièrement. Elle ne les détestait pas. Ils représentaient des problèmes de sécurité opérationnelle, et elle résolvait les problèmes de sécurité opérationnelle. C'était son travail. Elle le faisait bien.

Ce qui la rendait bonne : elle préparait. Elle lisait les dossiers, comprenait les sujets, trouvait l'approche qui créait le moins de bruit. L'élégance n'était pas une coquetterie. C'était de la précision.`,
      },
      {
        titre: 'Le septième et les quarante pages',
        texte: `Le septième était différent. Le dossier faisait cent vingt pages — un archiviste externe qui avait rédigé une critique interne de quarante pages sur les méthodes de classification des archives Convergence, avec des observations précises sur des incohérences qu'il avait détectées.

Elle avait lu les quarante pages avant d'agir. Ce n'était pas dans sa procédure habituelle. Mais les quarante pages étaient bien écrites.

Il avait tort sur certains points techniques. Il avait raison sur d'autres. Ses conclusions restaient incomplètes — il voyait les incohérences sans en comprendre la cause. Mais la qualité de l'analyse était réelle.

Elle avait terminé l'opération comme prévu. Les quarante pages restaient dans sa mémoire. Elle n'avait pas commencé à questionner la nécessité de ce qu'elle faisait. Elle avait commencé à questionner si ses critères de nécessité étaient les bons.`,
      },
      {
        titre: 'Khorath et la surveillance active',
        texte: `Khorath (235) est sur sa liste de surveillance depuis quatre mois. Pas encore une cible — quelqu'un qui pose les mauvaises questions dans les mauvais contextes depuis assez longtemps pour que la direction l'ait noté. Elle a reçu la demande de surveillance il y a trois mois. Elle observe.

Ce qu'elle a trouvé : Khorath est sincère. Il ne cherche pas à trahir la Convergence — il cherche à comprendre ce qu'il fait. Ces deux choses ne seront peut-être pas distinguables dans quelques mois.

Elle gère ce qu'il va faire, pas ce qu'il est. Elle a appris à faire ça.`,
      },
      {
        titre: 'Les compartiments qui tiennent',
        texte: `Elle maintient des compartiments. La conviction que son travail est nécessaire dans un compartiment. Les questions sur les critères de nécessité dans un autre. Les quarante pages du septième dans un troisième.

Les compartiments tiennent parce qu'elle ne les ouvre pas simultanément. Elle est bonne pour ne pas ouvrir les mauvaises portes en même temps.

Velath — elle l'a croisée deux fois dans les Trois Couches, à des années d'intervalle, sans se reconnaître. Elles ne savaient pas alors qu'elles travaillaient dans le même espace de problèmes depuis des années, de directions opposées. Zyress ne sait pas encore que cette non-rencontre était une rencontre.

Elle ne savait pas encore si ça méritait d'être dit.`,
      },
    ],
    sorts: ['Lecture de Résidu', 'Estompe', 'Point de Rupture', 'Corridor Mort'],
    relations: [
      { id: 235, nom: 'Khorath', type: 'contact_nécessaire', note: 'En surveillance active — pas encore une cible' },
      { id: 239, nom: 'Amhavel', type: 'allié', note: 'Le protège via sa paralysie gérée — plus sûr en place qu\'en dehors' },
      { id: 49, nom: 'Velath', type: 'inconnue_qui_change_tout', note: 'Croisée deux fois dans les Trois Couches sans reconnaissance mutuelle' },
    ],
    lore_long: `Zyress croit dans la nécessité de ce qu'elle fait avec la clarté tranquille de quelqu'un qui a eu le temps de réfléchir à la question. Ce qui la distingue : elle n'a pas besoin de se convaincre. La conviction est structurelle, pas performative.

Les six premières éliminations avaient été propres. Le septième avait laissé quelque chose — quarante pages d'analyse bien écrite d'un homme qui voyait les incohérences sans en comprendre la cause. Elle avait terminé l'opération. Les quarante pages restaient.

Elle maintient des compartiments. La conviction que son travail est nécessaire dans un compartiment. Les questions sur les critères de nécessité dans un autre. Elle est bonne pour ne pas ouvrir les mauvaises portes en même temps.

Khorath pose des questions depuis quatre mois. Il est sincère — il cherche à comprendre, pas à trahir. Ces deux choses ne seront peut-être pas distinguables dans quelques mois. Elle gère ce qu'il va faire, pas ce qu'il est.

Velath — croisée deux fois dans les Trois Couches, non reconnues. Deux femmes travaillant dans le même espace de problèmes depuis des années, de directions opposées, sans jamais se voir vraiment. Zyress ne savait pas encore si ça méritait d'être dit.`,
  },

  // ── 242 · SYKAVEL ─────────────────────────────────────────
  242: {
    timeline_position: { an: -1, lieu: 'Déserts / Laboratoire Convergence', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'La Convergence et la promesse des ressources',
        texte: `À trente-huit ans, Sykavel était connue dans les cercles spécialisés des Déserts pour ses travaux en modélisation gravitationnelle. La Convergence ne l'avait pas approchée avec une idéologie. Elle avait approché avec un problème : "Comment stabiliser un champ d'extraction élémentaire à haute densité sans perte catastrophique ?"

Elle avait répondu en quatre-vingt-dix minutes avec un schéma et sept questions de suivi. Ils avaient répondu à six. La septième — sur la nature exacte du "référentiel naturel saturé" — était restée sans réponse précise. Elle avait accepté "des localisations à haute concentration élémentaire" comme définition de travail.

C'est le premier endroit, quand elle relit maintenant, où elle aurait pu poser une question différente.`,
      },
      {
        titre: 'Le Drain Préparatoire — douze ans plus tôt',
        texte: `Les dix-huit mois du Drain Préparatoire avaient été parmi les plus intenses de sa carrière. Le problème était réellement difficile — la modélisation gravitationnelle d'un champ d'extraction nécessitait de tenir compte de variables que personne n'avait encore quantifiées simultanément.

Elle avait inventé le terme "sujet-porteur" parce qu'elle avait besoin d'un terme neutre pour désigner le référentiel d'où l'énergie était extraite. C'était un bon terme technique. Elle l'avait utilisé deux cent dix-sept fois dans les cent quarante-deux pages.

Elle les compte maintenant, la nuit, en relisant.`,
      },
      {
        titre: 'La question de Drevorn',
        texte: `Il y a environ huit mois, Drevorn était venu la voir avec une question formulée en termes techniques : "Dans ton protocole de stabilisation, à quel stade le consentement actif du sujet-porteur cesse-t-il d'être une condition opérationnelle ?"

Elle avait répondu dans les mêmes termes : le consentement actif n'était pas une variable dans le protocole. Si on voulait l'intégrer, il faudrait définir un indicateur mesurable. Ça n'avait jamais été demandé.

Drevorn avait dit "merci" et était parti.

Elle n'avait pas pensé à cette conversation pendant sept mois.`,
      },
      {
        titre: 'Les trois semaines',
        texte: `Il y a trois semaines, pour une raison qu'elle ne s'explique pas encore, elle avait sorti le dossier du Drain Préparatoire. Elle relit vingt à trente pages par nuit. Elle marque les passages en rouge.

Ce qu'elle trouve : pas une erreur. C'est pire qu'une erreur. Cent quarante-deux pages parfaitement cohérentes qui décrivent avec précision et bienveillance la façon de faire quelque chose qu'elle n'avait pas nommé.

"Consentement procédural" — défini à la page soixante-sept comme "l'absence de résistance de champ significative au-delà du seuil adaptatif nominal". En d'autres termes : si le référentiel ne résiste pas assez fort, le protocole considère le processus comme consenti.

Elle avait écrit ça. Elle reconnaît son style.`,
      },
      {
        titre: 'Saeved et Isvara',
        texte: `"Saeved, sujet de référence, extraction An -34." C'était dans ses propres archives. Elle avait construit son meilleur travail sur les données de ce qu'il avait vécu. Elle ne s'était pas demandé ce que ça avait été de le vivre.

Elle continue de travailler. Kaevorn lui envoie des données géologiques, elle lui renvoie des paramètres de site. Elle ne peut pas s'arrêter sans expliquer, et elle n'a pas encore décidé ce qu'elle veut expliquer.

Isvara — une Fée qui a cherché les mêmes paramètres il y a trois ans. La demande d'accès est dans les archives, classée "priorité différée", jamais traitée. Quelqu'un cherchait avant qu'elle commence à chercher.

Elle ne sait pas encore quoi faire de ça.`,
      },
    ],
    sorts: ['Ancrage de Champ', 'Compression Structurée', 'Dérive de Masse', 'Point de Cisaillement', 'Effondrement de Référentiel'],
    relations: [
      { id: 233, nom: 'Drevorn', type: 'inconnue_qui_change_tout', note: 'Sa question sur le consentement a planté quelque chose — ni l\'un ni l\'autre ne le sait' },
      { id: 65, nom: 'Saeved', type: 'fantôme', note: '"Sujet de référence, extraction An -34" — elle a construit son travail sur ses données' },
      { id: 56, nom: 'Isvara', type: 'contact_nécessaire', note: 'A cherché les mêmes paramètres avant elle — demande classée sans suite' },
      { id: 243, nom: 'Kaevorn', type: 'allié', note: 'Envoie les données de site — elle traite automatiquement, ne peut pas s\'arrêter sans expliquer' },
    ],
    lore_long: `Sykavel n'a pas commencé par l'éthique. Elle a commencé par la physique.

La Convergence avait approché avec un problème réel, difficile, intéressant. Elle avait accepté "référentiel naturel saturé" comme définition de travail. Dix-huit mois plus tard, elle avait livré cent quarante-deux pages de son meilleur travail.

"Sujet-porteur" — elle avait inventé ce terme parce qu'elle avait besoin de désigner le référentiel d'extraction de façon neutre. C'était un bon terme technique. Elle l'avait utilisé deux cent dix-sept fois.

Drevorn lui a posé une question sur le consentement en termes techniques. Elle y a répondu en termes techniques. Ni l'un ni l'autre n'a nommé ce dont ils parlaient vraiment.

Trois semaines plus tard, elle a sorti le dossier. Ce qu'elle trouve nuit après nuit : pas une erreur. La cohérence parfaite d'un travail qui décrit avec précision et bienveillance quelque chose qu'elle n'avait pas nommé.

Elle attend de trouver le point exact où elle aurait pu poser la question différente. Elle pense que ce sera à la page neuf, dans la définition initiale du problème, dans la phrase qu'elle avait lue en quatre-vingt-dix minutes.

"Référentiel naturel saturé."

Elle aurait pu demander.`,
  },

  // ── 245 · DRETHVEN ────────────────────────────────────────
  245: {
    timeline_position: { an: -1, lieu: 'Déserts / Camp Convergence', arc: "L'Avatar" },
    histoire: [
      {
        titre: 'Enfance à la lisière de la zone morte',
        texte: `Drethven a grandi à Keth-Alvar, un poste avancé des Déserts à trois kilomètres de ce qu'on appelait localement "la zone morte" — une étendue de sable stérile où rien ne pousse depuis plusieurs générations. Personne n'avait d'explication satisfaisante. Il avait grandi en sachant que certaines choses ne se réparent pas.

Son sol à lui était fertile. Il l'avait compris à neuf ans quand il avait posé la paume sur la terre sèche et que quelque chose avait répondu — une présence stable, ancienne, patiente. Pas une voix. Juste la certitude que le sol était là et qu'il se rappelait.

Il n'avait jamais pensé que ça pourrait être exceptionnel. Le sol avait toujours répondu. Il avait supposé que c'était comme ça pour tout le monde qui faisait attention.`,
      },
      {
        titre: 'Huit ans à la Convergence',
        texte: `La Convergence l'avait recruté à trente-six ans pour ses capacités de stabilisation de terrain — il pouvait évaluer la qualité et la santé d'un sol plus précisément que n'importe quel instrument technique. Les équipes de redistribution des déserts avaient besoin de ça.

Il avait cru en la redistribution. Il y croyait encore, d'une certaine façon. Pas à la version officielle de l'Empire, pas aux promesses des factions — à la possibilité réelle de rendre les terres arables à des communautés qui mouraient de soif dans leurs propres territoires.

Huit ans à creuser, à évaluer, à recommander. Des dizaines de sites. Des familles qui avaient pu planter là où il n'y avait eu que du sable.`,
      },
      {
        titre: 'Le document d\'il y a trois semaines',
        texte: `Il y a trois semaines, lors d'une opération de routine, un courrier interne avait circulé par erreur dans sa zone de travail avant d'être rappelé. Il l'avait vu pendant vingt secondes — assez pour lire son propre code opérationnel, "DV-418", dans un paragraphe qu'il n'avait pas eu le temps de lire complètement.

Le courrier avait été récupéré par un agent avant qu'il puisse demander à le voir en entier.

Il avait noté ce qu'il avait vu. Il n'avait pas cherché à enquêter directement — pas encore. Mais quelque chose avait changé dans la façon dont il percevait son environnement. Il regardait maintenant les choses qu'il ne regardait pas avant.`,
      },
      {
        titre: 'Arev et la stabilité anormale',
        texte: `Il y a six mois, il avait rencontré Arev pour la première fois lors d'une évaluation de site conjointe — Arev travaillait sur quelque chose adjacent à la redistribution, jamais clairement défini. Ils avaient passé deux jours ensemble sur un terrain difficile.

Ce qu'Arev lui avait dit en partant, de façon apparemment désinvolte : "Tu as un rapport avec le sol que je n'ai pas vu souvent. Pas une technique. Quelque chose d'autre."

Drethven avait pris ça comme un compliment professionnel.

Arev n'avait pas précisé ce qu'il avait senti. Drethven n'avait pas demandé.`,
      },
      {
        titre: 'Razhal dans le camp',
        texte: `Razhal est dans son camp depuis dix jours. Chef d'opération — ça arrive, les chefs d'opération font des tournées de supervision. Drethven a collaboré avec Razhal sur deux précédentes missions. Le travail ensemble s'était bien passé.

Ce qui est différent cette fois : Razhal observe. Drethven le voit — la façon dont Razhal note les choses, la précision des questions posées sur des routines qui ne méritent normalement pas cette attention. Ça ressemble à une évaluation. Ça ressemble à quelque chose qu'il ne sait pas encore nommer.

Le code "DV-418" dans le document qu'il n'a pas eu le temps de lire. Razhal qui observe. Ces deux choses ne sont peut-être pas séparées.

Il continue de travailler. Il fait ce qu'il fait — évaluer, stabiliser, recommander. Il est bon dans ce qu'il fait. Il ne sait pas encore que c'est peut-être pour ça qu'il est une cible.`,
      },
    ],
    sorts: ['Ancrage de Strate', 'Lecture de Zone', 'Prise de Sol', 'Muraille Basse', 'Stabilisation d\'Urgence'],
    relations: [
      { id: 231, nom: 'Razhal', type: 'contact_nécessaire', note: 'Dans son camp depuis 10 jours — l\'observe, attend l\'ordre de le déclarer' },
      { id: 67, nom: 'Arev', type: 'allié', note: 'A senti "quelque chose d\'anormalement stable" — ni l\'un ni l\'autre ne comprend ce que ça signifie encore' },
      { id: 65, nom: 'Saeved', type: 'fantôme', note: 'L\'ombre du premier Drain se projette vers lui — le prochain' },
    ],
    lore_long: `Drethven n'a jamais pensé que son rapport au sol était exceptionnel. Le sol avait toujours répondu quand il faisait attention. Il avait supposé que c'était comme ça pour tout le monde.

Huit ans à travailler pour la Convergence — des dizaines de sites évalués, des familles qui avaient pu planter là où il n'y avait eu que du sable. Il croyait en ça. Il y croyait encore. Pas aux factions, pas aux promesses — à la possibilité réelle de rendre les terres arables à des gens qui mouraient de soif dans leurs propres territoires.

Il y a trois semaines, un courrier interne avait circulé par erreur dans sa zone de travail. Il l'avait vu pendant vingt secondes — son code opérationnel, "DV-418", dans un paragraphe qu'il n'avait pas eu le temps de lire en entier. Le courrier avait été récupéré avant qu'il puisse demander à le voir.

Razhal est dans son camp depuis dix jours. La façon dont Razhal observe — précise, systématique, sur des routines qui ne méritent normalement pas cette attention. Ça ressemble à une évaluation. Ça ressemble à quelque chose qu'il ne sait pas encore nommer.

Le code "DV-418". Razhal qui observe. Il continue de travailler. Il ne sait pas encore que son rapport au sol — cette chose qu'il n'a jamais trouvée exceptionnelle — est peut-être exactement pour ça qu'il est la cible de tout ce à quoi il a consacré sa vie.`,
  },

  // ── 249 · TELVARA ─────────────────────────────────────────────
  249: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'La fée qui classe', texte: 'Telvara est classificatrice des Élus à la Citadelle depuis 18 ans. Son élément Électrique lui donne une capacité de perception des fréquences élémentaires subtiles — elle lit les signatures avant de les catégoriser.' },
      { titre: 'Le carnet des patterns', texte: 'Depuis 6 ans elle tient un carnet séparé de ses rapports officiels — des patterns récurrents qu\'elle n\'arrivait pas à classer dans les catégories existantes. Le carnet n\'a pas de titre. Elle n\'a jamais décidé d\'en tenir un.' },
      { titre: 'Les 3 anomalies en attente', texte: 'Ce mois-ci, 3 anomalies ont été classées "en attente d\'interprétation" au lieu d\'être transmises. L\'impulsion vient avant la conscience — elle ne sait pas encore pourquoi elle fait ça.' },
      { titre: 'La requête de données d\'Isvara', texte: 'Elle a trouvé dans les archives une requête de données envoyée par Isvara (56) il y a 6 ans, jamais traitée. La requête cherchait exactement les mêmes patterns que son carnet. Quelqu\'un d\'autre a cherché ça.' },
      { titre: 'L\'hum-freudon qui s\'intensifie', texte: 'Elle hum-freudon plus qu\'avant. Ce n\'est pas une habitude consciente — c\'est une régulation nerveuse. Elle a commencé à remarquer la fréquence il y a 3 mois. Ce n\'est pas une bonne information.' },
    ],
    sorts: ['Classification Électrique', 'Lecture de Fréquence', 'Transmission calibrée', 'Détection d\'anomalie'],
    relations: [
      { id: 246, nom: 'Sylviel', type: 'mentor', note: 'Supérieure directe — même hésitation, ignorée de l\'autre côté' },
      { id: 248, nom: 'Eiravel', type: 'allié', note: 'Utilise ses classifications pour calibrer ses rapports' },
      { id: 56, nom: 'Isvara', type: 'inconnue_qui_change_tout', note: 'A envoyé une requête de données il y a 6 ans cherchant les mêmes patterns — jamais traitée, retrouvée maintenant' },
    ],
    lore_long: `Telvara ne sait pas encore pourquoi elle retient les 3 anomalies. L'impulsion précède la décision. Elle a 18 ans de transmission automatique derrière elle — et quelque chose dans son élément Électrique résiste avant que son intelligence ait formulé une raison. La requête d'Isvara, 6 ans dans les archives, cherchait exactement ce qu'elle documente dans son carnet séparé. Quelqu'un d'autre l'avait vu avant elle. Ce n'est pas réconfortant. C'est important.`,
  },

  // ── 250 · ORVAEL ──────────────────────────────────────────────
  250: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'Commandant depuis 22 ans', texte: 'Orvael commande la garde de la Chambre Interdite du Calendrier depuis 22 ans. Il y avait arrêté de questionner à 30 ans — épuisement, pas conviction.' },
      { titre: 'Les trois transferts', texte: 'Il y a 6 mois, 3 collègues de Varek (247) ont été transférés sans explication standard. Ce n\'est pas la première fois qu\'un transfert s\'est passé anormalement — mais c\'est la première fois depuis que Varek observe aussi.' },
      { titre: 'Le flash récurrent', texte: 'Ses éclairs Stellaires prémonitoires lui ont montré deux fois la même image en 6 mois : une porte ouverte dans la Chambre Interdite — ouverte de l\'intérieur.' },
      { titre: 'Nyreth', texte: 'Il a travaillé avec Nyreth (13) il y a 15 ans, avant sa "mort" officielle. Il n\'a jamais cru entièrement à la mort. Il n\'avait pas cherché à vérifier. Il commence à chercher.' },
      { titre: 'Les logs d\'accès', texte: 'Il lit les logs d\'accès à la Chambre Interdite sur les 22 dernières années. Il cherche les anomalies. Il en a trouvé 7 qui ne correspondent à aucune rotation de garde qu\'il se rappelle.' },
    ],
    sorts: ['Flash Stellaire', 'Frappe de Vanguard', 'Perception prémonitoire', 'Coordination de garde'],
    relations: [
      { id: 247, nom: 'Varek', type: 'allié', note: 'Subordonné direct — observent tous les deux, mais ne comparent pas encore directement' },
      { id: 246, nom: 'Sylviel', type: 'contact_nécessaire', note: 'La voit deux fois par semaine — ne lui a pas dit ce qu\'il cherche' },
      { id: 13, nom: 'Nyreth', type: 'fantôme', note: 'A travaillé avec lui avant sa "mort" — commence à chercher à vérifier' },
    ],
    lore_long: `Orvael a arrêté de questionner à 30 ans parce que les questions ne produisaient rien et que la fatigue avait gagné. À 52 ans, il recommence. Pas par courage — par accumulation. Les transferts des collègues de Varek. La porte ouverte de l\'intérieur, deux fois dans ses flashes Stellaires. 7 anomalies dans les logs sur 22 ans qu\'il ne s\'explique pas. Et Nyreth, que tout le monde considère mort, dont il n'a jamais vraiment cru à la mort. Il lit les archives une nuit sur deux depuis 2 mois. Il n'a pas encore dit à Varek ce qu'il cherche.`,
  },

  // ── 251 · CAESYL ──────────────────────────────────────────────
  251: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'Archiviste depuis 40 ans', texte: 'Caesyl est archiviste de la Citadelle depuis 40 ans. Elle est la meilleure experte vivante en détection d\'altérations documentaires — et en modifications rétroactives des Calendriers.' },
      { titre: 'La première modification', texte: 'À 34 ans, elle a identifié sa première modification rétroactive d\'un Calendrier d\'Élus. Elle a créé une sous-catégorie, l\'a classée, et est passée au suivant. Ce n\'était pas une décision.' },
      { titre: '847 modifications', texte: 'Elle tient un décompte exact sans y penser — 847 modifications rétroactives en 33 ans. Elle n\'a pas fait de geste vers les 847.' },
      { titre: 'Le dossier de Keldris', texte: 'Il y a 6 ans, Keldris (57) lui a transmis un document demandant une vérification croisée sur les anomalies de transfert. Elle l\'a reçu, lui a assigné un numéro, l\'a placé dans la file "à traiter". Elle n\'y est jamais revenue.' },
      { titre: 'Eiravel dans les logs', texte: 'Eiravel (248) accède aux archives de modification depuis 2 ans. Caesyl a vu son nom dans les logs d\'accès une fois. A classé comme "consultation archivistique normale".' },
    ],
    sorts: ['Sceau de préservation', 'Lecture d\'intégrité', 'Voile d\'effacement'],
    relations: [
      { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'Accède aux mêmes archives depuis 2 ans — Caesyl a vu son nom et n\'a pas cherché à savoir pourquoi' },
      { id: 55, nom: 'Thyval', type: 'allié', note: 'Correspondant professionnel depuis 20 ans — relation construite sur le non-questionnement mutuel' },
      { id: 57, nom: 'Keldris', type: 'contact_nécessaire', note: 'A transmis un dossier critique il y a 6 ans — non traité, localisable en 40 secondes' },
    ],
    lore_long: `Caesyl ne ment pas. Elle ne cache rien — elle classe. 847 modifications rétroactives en 33 ans, chacune référencée avec précision. Si on lui demandait, elle trouverait le dossier de Keldris en 40 secondes. Elle répondrait que l'accès d'Eiravel figure dans les logs. Elle ne fait rien pour que ces questions ne soient pas posées. Elle ne fait rien du tout. C'est la forme la plus discrète de complicité — celle qui ne ressemble à rien d'autre que du travail accompli avec soin.`,
  },

  // ── 252 · VETHARA ─────────────────────────────────────────────
  252: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'L\'interrogatrice', texte: 'Vethara teste la loyauté des Élus enregistrés à la Citadelle depuis 17 ans. Son élément Psy combiné à sa nature Fée lui permet de lire ce que les protections ordinaires masquent.' },
      { titre: 'Les questions qui cherchent les purs', texte: 'Il y a 3 mois, elle a noté que les questions du protocole cherchaient à identifier des profils "mono-élémentaires haute cohérence". Elle a su ce que ça impliquait. Elle a affiné ses méthodes.' },
      { titre: 'La fascination', texte: 'Elle ne peut pas être un pur élémentaire — elle a deux éléments, rare et valorisé, mais pas la même chose. Devant un pur, elle mesure quelque chose qu\'elle ne peut pas avoir. La mesure est une forme de possession temporaire.' },
      { titre: 'La minutie croissante', texte: 'Ses sessions sur les profils à haute cohérence durent deux fois plus longtemps. Ses rapports sont 4 fois plus détaillés. Elle ne s\'explique pas l\'augmentation. Ce serait trop facile.' },
      { titre: 'Les cas anomalie de Telvara', texte: 'Telvara (249) lui envoie les cas classés "anomalie" depuis 14 mois. Vethara les traite en priorité. L\'information circule dans une direction et ne revient pas.' },
    ],
    sorts: ['Lecture empathique', 'Résonance fée', 'Voile d\'attention'],
    relations: [
      { id: 246, nom: 'Sylviel', type: 'mentor', note: 'L\'a formée — même technique de lecture, contexte différent' },
      { id: 249, nom: 'Telvara', type: 'allié', note: 'Lui envoie les cas anomalie — circuit unidirectionnel' },
      { id: 238, nom: 'Sethara', type: 'rival', note: 'Même travail côté Convergence — même fascination, honnêteté différente sur ses propres motivations' },
    ],
    lore_long: `Vethara sait ce que les purs deviennent. Elle l'a compris il y a 3 mois. Elle a affiné ses méthodes pour les identifier avec une précision accrue. Ce n'est pas de l'indifférence — l'indifférence ne prend pas de notes personnelles sur un sujet Sol après une session de 4 heures. Ce qu'elle fait relève de quelque chose qu'elle ne nomme pas : la proximité avec ce qu'elle ne peut pas être. Elle mesure ce qu'elle ne possède pas. Les sujets disparaissent des registres. Elle ne examine pas ce qu'elle ressent à ce sujet non plus.`,
  },

  // ── 253 · KAERYN ──────────────────────────────────────────────
  253: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'Gardien depuis 11 ans', texte: 'Kaeryn protège les "Élus retenus" à la Citadelle depuis 11 ans — une section présentée comme de l\'accompagnement intensif pour les Élus à hauts besoins.' },
      { titre: 'Les 5 reformulations', texte: 'Depuis 6 mois il comprend que "retenus" ne signifie pas "protégés". Les Élus qu\'il voit entrer ne ressortent pas. Il a reformulé ça mentalement de 5 manières différentes pour que ce soit acceptable.' },
      { titre: 'Varek et les doutes', texte: 'Il y a 3 mois il a transmis ses observations à Varek (247) — collègue aux observations convergentes. Varek a formulé plus prudemment. Ça l\'a légèrement soulagé et troublé en même temps.' },
      { titre: 'Le bonsoir à Eiravel', texte: 'Il y a 2 mois, dans un couloir, il a croisé Eiravel (248). Il avait une question. Il a dit bonsoir. Il pense encore à ce couloir.' },
      { titre: 'La sixième reformulation', texte: 'Il cherche la sixième version acceptable. Il sait déjà qu\'elle ne tiendra pas non plus. Ce constat est peut-être lui-même une information.' },
    ],
    sorts: ['Rafale de contention', 'Frappe de neutralisation', 'Lecture de terrain'],
    relations: [
      { id: 247, nom: 'Varek', type: 'allié', note: 'A transmis ses doutes — Varek observe les mêmes choses, formule plus prudemment' },
      { id: 250, nom: 'Orvael', type: 'mentor', note: 'Commandant — ne sait pas qu\'Orvael recommence lui aussi à questionner' },
      { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'Question non posée dans un couloir — son expression était celle de quelqu\'un qui sait' },
      { id: 257, nom: 'Velthys', type: 'contact_nécessaire', note: 'Soigneuse qui traite ses patients avant la section — croit faire de la médecine' },
    ],
    lore_long: `Kaeryn a 34 ans et cherche la sixième reformulation. Les cinq premières ont toutes cédé en moins de 3 semaines. La sixième ne tiendra pas non plus — il le sait d'avance. Ce constat est peut-être la vraie information : il ne cherche plus une version acceptable, il découpe le temps avant de prendre une décision. Velthys soigne ses patients avec une sincérité complète avant qu'ils entrent dans sa section. Il la regarde travailler sans pouvoir lui dire pourquoi son honnêteté opère dans un contexte qui ne l'est pas.`,
  },

  // ── 254 · SYRAVEL ─────────────────────────────────────────────
  254: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'Onze ans d\'infiltration', texte: 'Syravel est infiltrée Dissidentes dans la section nord-ouest de la Citadelle depuis 11 ans. Elle est plus ancienne qu\'Eiravel, plus prudente, moins exposée.' },
      { titre: 'L\'ignorance mutuelle', texte: 'Ni Syravel ni Eiravel ne savent que l\'autre existe. Elles travaillent à 400 mètres de distance depuis 9 ans. Leurs travaux sont complémentaires.' },
      { titre: 'La troisième année', texte: 'En troisième année d\'infiltration, un contact Dissident a été arrêté. Elle avait 2 heures pour décider. Elle a calculé l\'absence de lien en 20 minutes. Elle est restée.' },
      { titre: 'Syrethia', texte: 'Elle a comblé un trou opérationnel 3 ans après l\'extraction de Syrethia (259) — sans savoir qu\'il existait ni qui l\'avait laissé. Elle occupe un rôle qu\'une autre tenait.' },
      { titre: 'Les quatre extractions', texte: 'Quatre extractions en 11 ans. Elle n\'a pas rencontré les quatre. Elle connaît les chiffres et le fait qu\'ils sont vivants. Elle trouve que c\'est suffisant pour continuer.' },
    ],
    sorts: ['Pas de Ténèbres', 'Voile fée', 'Lecture Ténèbres'],
    relations: [
      { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'À 400 mètres depuis 9 ans. Ignorance mutuelle. Efficacité combinée qui ne s\'est pas produite.' },
      { id: 49, nom: 'Velath', type: 'allié', note: 'Même réseau Canal Gris, secteur différent — ne se connaissent pas directement' },
      { id: 46, nom: 'Vethis', type: 'mentor', note: 'Contact Dissident depuis l\'extraction initiale — confirme les résultats' },
      { id: 259, nom: 'Syrethia', type: 'fantôme', note: 'Sa prédécesseure qu\'elle ne connaît pas — occupe un poste qu\'une autre a laissé' },
    ],
    lore_long: `Syravel calcule son risque chaque mois depuis 11 ans. Le chiffre reste dans la zone acceptable. Elle continue. Ce n'est pas du courage — c'est de la rigueur. Eiravel est à 400 mètres depuis 9 ans et elles s'ignorent mutuellement. Cette ignorance les protège toutes les deux tout en réduisant l'impact de chacune. Si elles se trouvaient, leur efficacité combinée changerait quelque chose. Elles ne se trouvent pas parce que la compartimentation est une rigueur, pas un échec. Quatre confirmations en 11 ans. Quatre personnes vivantes. C'est une mesure suffisante pour continuer.`,
  },

  // ── 255 · THAEVAL ─────────────────────────────────────────────
  255: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'Botaniste depuis 30 ans', texte: 'Thaeval entretient les arbres fées vieux de 400 ans dans les jardins de la Citadelle depuis 30 ans. Il leur parle depuis l\'enfance. Pendant 30 ans aucun n\'avait répondu.' },
      { titre: 'La résonance', texte: 'Il y a 3 semaines, un vendredi matin, l\'arbre de 412 ans lui a répondu. Pas une voix — une pression dans la poitrine, une qualité d\'attention. Ça a duré 4 secondes. Il s\'est assis par terre 20 minutes. N\'a rien dit à personne.' },
      { titre: 'Les 4 autres jardiniers', texte: 'Les 4 autres jardiniers qui travaillent sur le même arbre — deux d\'entre eux Fée — ne perçoivent rien. La différence n\'est pas l\'élément.' },
      { titre: 'Six fois en 3 semaines', texte: 'La résonance s\'est reproduite 6 fois. Jamais quand un autre jardinier est présent. Il revient chaque jour.' },
      { titre: 'Comment dire ça', texte: '"L\'arbre m\'a répondu" est vrai et complètement inadéquat comme formulation. Il attend de comprendre ce qu\'il entend avant de tenter de le nommer.' },
    ],
    sorts: ['Croissance dirigée', 'Résonance fée-végétale', 'Filet de racines'],
    relations: [
      { id: 34, nom: 'Leth', type: 'inconnue_qui_change_tout', note: 'Ressent la même résonance à 2000 km via le réseau d\'arbres anciens — ils ne se connaissent pas' },
      { id: 33, nom: 'Thalorn', type: 'fantôme', note: 'Entretient le réseau auquel l\'arbre de 412 ans est peut-être connecté — Thaeval ne connaît pas son existence' },
      { id: 246, nom: 'Sylviel', type: 'mentor', note: 'Employeur indirect — ne sait pas ce qu\'il perçoit dans les jardins' },
    ],
    lore_long: `L'arbre a répondu il y a 3 semaines. Thaeval n'a pas encore dit à qui que ce soit. Pas par secret — par nécessité de comprendre avant de parler. "L'arbre m'a répondu" est vrai mais inadéquat. Ce qu'il reçoit est une réception réelle — 40 ans de pratique lui permettent de distinguer la projection de la réception. Les 4 autres jardiniers ne perçoivent rien, même les deux Fée. Si la cohérence élémentaire est ce qui permet la réception, Thaeval est peut-être ce que l'arbre de 412 ans attendait de trouver. Et si c'est le cas, il est visible d'une façon que ni la Convergence ni l'Empire ne connaissent encore.`,
  },

  // ── 256 · ORMAVEL ─────────────────────────────────────────────
  256: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'L\'administrateur précis', texte: 'Ormavel gère les budgets de la Citadelle depuis 22 ans. Ses comptes sont toujours équilibrés — exactement. Il a une réputation de précision rare.' },
      { titre: 'La première anomalie', texte: 'Il y a 3 ans, les coûts de "relocalisation d\'Élus" dépassaient les catégories standards de 340%. Il a demandé une clarification, reçu un refus, créé une sous-catégorie "préparations spécialisées" et équilibré le budget.' },
      { titre: 'La technique des dépenses de représentation', texte: 'Il a utilisé une technique apprise pour les dépenses de représentation — catégories vagues, inauditables sans être fausses. Il l\'a appliquée à des lignes qui concernent des personnes sans noter la différence.' },
      { titre: 'L\'auditeur redirigé', texte: 'Il y a 8 mois, un auditeur externe a demandé l\'accès aux budgets. Sa demande a été redirigée. Ormavel a noté "accès restreint" et continué.' },
      { titre: 'Les irrégularités de Telvara', texte: 'Quand Telvara (249) retarde ses classifications, ça crée des écarts dans ses budgets. Il les absorbe automatiquement dans une ligne "ajustements de transition". Il obscurcit sans le savoir les traces de la résistance de Telvara.' },
    ],
    sorts: ['Stabilisation rocheuse', 'Résistance normale'],
    relations: [
      { id: 241, nom: 'Rhavel', type: 'contact_nécessaire', note: 'Finance les flux logistiques qu\'il coordonne — noms dans les mêmes documents, colonnes différentes' },
      { id: 249, nom: 'Telvara', type: 'contact_nécessaire', note: 'Ses classifications retardées créent des irrégularités qu\'Ormavel absorbe automatiquement' },
    ],
    lore_long: `Ormavel n'a jamais décidé de dissimuler quoi que ce soit. Chaque ajustement était une extension technique d'une compétence légitime. La technique des dépenses de représentation est honnête dans son contexte d'origine — il l'a appliquée à autre chose sans noter la différence. Ses budgets sont équilibrés. C'est son identité professionnelle. Ce qu'ils financent n'apparaît nulle part. Quand Telvara crée des irrégularités par sa résistance, il les compense automatiquement — effaçant sans le savoir les traces de ce qu'elle fait. La rigueur comptable comme effacement.`,
  },

  // ── 257 · VELTHYS ─────────────────────────────────────────────
  257: {
    timeline_position: { an: -1, lieu: 'Citadelle du Voile', arc: "L'Avatar" },
    histoire: [
      { titre: 'La soigneuse recrutée', texte: 'Velthys a été recrutée à 24 ans pour "stabiliser les Élus fragiles" avant leur relocalisation. Le poste lui a été présenté comme médical. Elle a accepté sans hésitation.' },
      { titre: 'Le soin authentique', texte: 'Ses patients arrivent anxieux et repartent calmes, élémentairement équilibrés. C\'est ce qu\'elle produit. Les résultats confirment son travail.' },
      { titre: 'Méthodes identiques à Taluya', texte: 'Ses méthodes sont identiques à celles que Taluya (236) a développées côté Convergence. Les deux systèmes ont convergé indépendamment vers la même solution pour le même problème.' },
      { titre: 'Le regard de Kaeryn', texte: 'Kaeryn (253) la regarde différemment depuis 3 mois. Elle l\'a remarqué. Elle suppose que c\'est sa charge de travail. Elle pourrait lui demander. Elle ne l\'a pas fait.' },
      { titre: 'La question qu\'elle n\'a pas', texte: 'Il y a une question qu\'elle n\'a pas encore. Quand elle l\'aura, elle sera détruite par sa propre honnêteté.' },
    ],
    sorts: ['Apaisant de Glace', 'Harmonie fée', 'Stabilisation cristalline'],
    relations: [
      { id: 253, nom: 'Kaeryn', type: 'contact_nécessaire', note: 'Voit ses patients après elle — regarde différemment depuis 3 mois, ne lui dit pas ce qu\'il sait' },
      { id: 236, nom: 'Taluya', type: 'rival', note: 'Miroir non rencontré — mêmes méthodes, même sincérité, même utilisation par le système' },
    ],
    lore_long: `Velthys aime ses patients. Ce n'est pas un détail — c'est ce que le système utilise. Son soin est réel. Il permet aussi au processus qui suit d'être plus propre. Elle crée, sans le savoir, les conditions optimales pour ce qu'elle ignore. Kaeryn sait ce qui arrive après elle. Il ne lui dit pas. Il y a entre eux un silence sur ce sujet pour des raisons complètement différentes : elle n'a pas encore la question, il n'a pas encore le courage de la poser.`,
  },

  // ── 258 · CAREVORN ────────────────────────────────────────────
  258: {
    timeline_position: { an: -1, lieu: 'Virex / Citadelle', arc: "L'Avatar" },
    histoire: [
      { titre: 'Officier de sécurité Virex', texte: 'Carevorn est officier de sécurité à Virex depuis 6 mois. Son élément Stellaire lui donne une capacité d\'analyse de patterns dans des ensembles de données complexes.' },
      { titre: 'Les 39 enfants', texte: 'En croisant des registres lors d\'une vérification de routine, il a identifié 39 noms d\'enfants Élus "haute cohérence élémentaire" qui disparaissaient des registres courants un par un sur 3 ans. Il les a mémorisés.' },
      { titre: 'La première vérification classée', texte: 'Il a commandé une vérification officielle. Classée en 4 jours — vitesse proportionnelle à la proximité du vrai problème. Il a noté le délai.' },
      { titre: 'La deuxième vérification classée', texte: 'Deuxième vérification par un canal différent. Classée en 6 jours. Il a noté les deux refus et les délais. Il prépare la troisième.' },
      { titre: 'L\'enquête parallèle d\'Avel', texte: 'Avel (64) cherche sur un aspect différent du même problème. Ils ne coordonnent pas explicitement — deux enquêtes séparées sont moins vulnérables à un classement unique.' },
    ],
    sorts: ['Analyse Stellaire', 'Frappe de feu contrôlée', 'Marquage thermique'],
    relations: [
      { id: 64, nom: 'Avel', type: 'allié', note: 'Enquête parallèle non coordonnée — cherchent la même chose par des chemins différents' },
      { id: 62, nom: 'Thyven', type: 'rival', note: 'Résistance passive aux demandes documentaires — pattern noté sur 8 semaines' },
      { id: 63, nom: 'Lysael', type: 'inconnue_qui_change_tout', note: 'Quelque part dans les chaînes logistiques qu\'il trace — ne l\'a pas encore identifiée' },
    ],
    lore_long: `Carevorn a 39 noms mémorisés. Si ses notes sont saisies, il garde les noms. La première vérification classée en 4 jours — quelqu'un savait immédiatement ce qu'il regardait. La deuxième en 6 jours par un canal différent. Il prépare la troisième par un canal encore plus indirect. Il ajuste sa méthode à la résistance du système. Thyven ralentit les transmissions — pattern identifié sur 8 semaines, pas encore une preuve, un indicateur. 39 enfants, haute cohérence élémentaire, disparus un par un sur 3 ans des registres courants. Il cherche où ils sont allés.`,
  },

  // ── 259 · SYRETHIA ────────────────────────────────────────────
  259: {
    timeline_position: { an: -1, lieu: 'Thalassyr / Port côtier', arc: "L'Avatar" },
    histoire: [
      { titre: 'Extraite il y a 14 ans', texte: 'Syrethia était infiltrée Dissidentes à la Citadelle pendant 9 ans. Il y a 14 ans, Velath (49) l\'a prévenue 36 heures avant une vérification qui aurait abouti à son arrestation. Elle est partie.' },
      { titre: 'Les 36 heures', texte: 'Elle se souvient de chacune. La première : évaluation. Les suivantes : destruction de documents, déplacement via Vel\'Nox. 11 jours pour arriver à Thalassyr. À l\'arrivée, 14 heures de sommeil consécutives pour la première fois en des mois.' },
      { titre: 'Shiveth', texte: '6 mois dans la même maison sécurisée que Shiveth (232). Ils ne se racontaient pas tout. Elle sait qu\'il boit son café noir sans sucre. Il sait qu\'elle ne parle pas le matin.' },
      { titre: 'La remplaçante qu\'elle ne connaît pas', texte: 'Syravel (254) a comblé le trou opérationnel laissé par son extraction 3 ans après, sans savoir qu\'il existait ni qui l\'avait laissé. Syrethia vit libre pendant que Syravel continue.' },
      { titre: 'Le port de Thalassyr', texte: 'Comptable de coopérative de pêche depuis 14 ans. Transmet encore des informations aux Dissidentes quand elle en a. Elle marche encore le long des murs dans les rues du port.' },
    ],
    sorts: ['Courant de fuite', 'Voile fée', 'Adaptation de marée'],
    relations: [
      { id: 49, nom: 'Velath', type: 'mentor', note: '36 heures d\'avance. Elle lui doit sa vie extérieure.' },
      { id: 254, nom: 'Syravel', type: 'fantôme', note: 'Sa remplaçante qu\'elle ne connaît pas — occupe ce qu\'elle a laissé' },
      { id: 232, nom: 'Shiveth', type: 'allié', note: '6 mois dans la même maison sécurisée — connaissance latérale sans récit complet' },
    ],
    lore_long: `Syrethia marche encore le long des murs. 14 ans. Elle a cessé d'essayer de s'en empêcher il y a 8 ans — ça s'intègre, ça ne disparaît pas. Elle vit, elle travaille, elle contribue encore depuis Thalassyr. Et elle vit avec la conscience que Syravel est à l'intérieur depuis 11 ans, dans un poste qu'elle a laissé, sans savoir que ce poste existait avant elle. Ce n'est pas de la culpabilité précisément. C'est quelque chose entre le soulagement et la honte dans des proportions qu'elle ne peut pas démêler. Elle ouvre les registres de la coopérative chaque matin. C'est une journée complète en elle-même.`,
  },

  // ── 260 · VAEL ────────────────────────────────────────────────
  260: {
    timeline_position: { an: -1, lieu: 'Frontière d\'Asterciel', arc: "L'Avatar" },
    histoire: [
      { titre: '"J\'entends trop bien"', texte: 'Vael a quitté la Citadelle il y a 30 ans après avoir dit à sa supérieure : "j\'entends trop bien." C\'était tout. Ça a inquiété des gens qui n\'auraient pas dû s\'inquiéter d\'un départ ordinaire.' },
      { titre: 'Ce qu\'elle entendait', texte: 'Son élément Spectre lui permet de percevoir les résonances résiduelles dans les espaces. Dans certains endroits de la Citadelle, les résonances ne décroissaient pas progressivement — elles cessaient net. L\'interruption. Une fréquence coupée. Elle en avait compté 34 sur les 3 dernières années.' },
      { titre: 'Les gens qui s\'inquiètent', texte: 'Les gens qui se sont inquiétés de son départ savaient pourquoi elle entendait. Ils ne pouvaient pas lui demander ce qu\'elle avait entendu sans confirmer qu\'ils savaient ce qu\'il y avait à entendre.' },
      { titre: 'Osara à Vel\'Nox', texte: 'Il y a 15 ans, elle a croisé Osara (51) dans une maison Vel\'Nox. Elles ont parlé d\'herbes et de routes. Elles n\'ont pas parlé de ce qu\'elles savaient. La reconnaissance avait été immédiate.' },
      { titre: 'Sylviel et Eiravel', texte: 'Sylviel lui envoie des messages depuis 4 ans — questions indirectes, réponses ambiguës. Eiravel a lu son rapport de démission : 3 lignes, motif "inadaptation acoustique". Eiravel a noté le motif inhabituel et cherché les autres — elle en a trouvé 2 sur 40 ans.' },
    ],
    sorts: ['Écoute spectrelle', 'Voile de silence', 'Résonance fée-spectre'],
    relations: [
      { id: 246, nom: 'Sylviel', type: 'contact_nécessaire', note: 'Essaie de la contacter depuis 4 ans — questions indirectes, réponses ambiguës. Vael n\'est pas encore décidée.' },
      { id: 51, nom: 'Osara', type: 'allié', note: 'Croisée à Vel\'Nox il y a 15 ans — reconnaissance mutuelle sans échange direct' },
      { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'A lu son rapport de démission — a noté le motif, cherche le fil' },
    ],
    lore_long: `"J'entends trop bien." C'est tout ce qu'elle a dit — et ça contenait tout ce qu'elle voulait transmettre sans rien révéler de ce qu'elle ne voulait pas dire. 34 résonances interrompues net dans les 3 dernières années à la Citadelle. Pas des décroissances progressives — des coupures. L'interruption d'une fréquence élémentaire qui existait et n'existe plus. Elle est partie pour se protéger de ce qu'elle entendait. Elle se demande encore parfois si c'était le bon choix. Les gens qui savaient ce qu'elle entendait ne pouvaient pas lui poser la question directe sans se dénoncer. Eiravel a 3 lignes dans un rapport de démission et un fil qui mène quelque part. Vael pense que si quelqu'un lui posait la bonne question d'une façon qui n'obligeait pas à se dénoncer pour la poser, elle répondrait peut-être.`,
  },

  // ── 261 · SAREVORN ────────────────────────────────────────────
  261: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Douze ans de confiance', texte: 'Sarevorn a aidé à cacher le Second Avatar pendant 2 ans avec Sarath — pas parce qu\'on lui avait tout expliqué, mais parce qu\'il connaissait Sarath depuis 12 ans et que ça suffisait.' },
      { titre: 'L\'abri en 14 maisons', texte: 'Deux ans, 14 maisons différentes, 9 fausses identités. Il avait su qui était l\'Avatar au bout d\'une semaine — pas parce qu\'on lui avait dit, parce qu\'il avait vu comment l\'Empire cherchait.' },
      { titre: 'La mort de Sarath', texte: 'Sarath est mort. Sarevorn n\'était pas là. Il a appris le résultat, pas le processus. Le seul autre à savoir ce qu\'ils avaient fait ensemble.' },
      { titre: 'L\'ignorance délibérée', texte: 'Il ne sait pas où est l\'Avatar maintenant. C\'est un choix. Un réseau où trop de gens savent où est la cible la plus recherchée de l\'Empire est un réseau vulnérable.' },
      { titre: 'Ce qui reste', texte: 'Il vit avec quelque chose qui ne nécessite pas de confirmation extérieure — une grandeur silencieuse. Il referait.' },
    ],
    sorts: ['Frappe de terrain', 'Camouflage itinérant', 'Orientation tactique'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'Caché 2 ans. Ne sait pas où il est maintenant. Ne cherche pas à savoir.' },
      { id: 61, nom: 'Sarath', type: 'fantôme', note: 'Seul autre témoin. Mort. Perte de la mémoire partagée.' },
      { id: 1, nom: 'Brasia', type: 'allié', note: 'Contact réseau de longue date — ne sait pas ce qu\'il a fait pendant les 2 ans.' },
    ],
    lore_long: `Sarevorn a caché le Second Avatar pendant 2 ans. Il ne peut pas le dire. La grandeur de ce qu'il a fait est réelle et inexprimable. Sarath est mort. L'Avatar est parti. Il n'a pas cherché à savoir où — c'est une protection. Il vit avec ça. Il n'a pas besoin que ça soit confirmé.`,
  },

  // ── 262 · THYSKARA ────────────────────────────────────────────
  262: {
    timeline_position: { an: -1, lieu: 'Isthme / en route', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Une des 39 de Virex', texte: 'Thyskara a été enregistrée comme "Élu haute cohérence" à 12 ans. À 20 ans une convocation est arrivée pour un "programme de développement intensif". Thyven l\'avait prévenue indirectement. Elle était partie à la nuit.' },
      { titre: 'Trois ans seule', texte: 'Elle avait supposé que la fuite serait courte. Elle a duré 3 ans. Elle a appris à utiliser l\'Eau pour l\'eau potable, le Vent pour sentir les présences avant qu\'elles arrivent.' },
      { titre: 'La nuit avec Sylvethys', texte: 'Sylvethys lui a partagé un abri sans questions. A mentionné un patient à "résonance anormalement dense". Thyskara a suivi cette piste depuis 4 mois.' },
      { titre: 'La trace dans l\'eau', texte: 'Un Élu intense laisse une perturbation dans les cours d\'eau pendant des semaines. Elle a appris à lire ça pendant 3 ans. Elle est à 3 semaines de retard sur lui.' },
      { titre: 'Deux solitudes parallèles', texte: 'Elle cherche quelqu\'un qui comprenne ce qu\'elle est. Il cherche la même chose. Ils ne savent pas que l\'autre existe.' },
    ],
    sorts: ['Courant rapide', 'Rafale d\'esquive', 'Brouillard de trace'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Cherche la même chose pour les mêmes raisons. Suit sa trace résiduelle dans l\'eau. À 3 semaines.' },
      { id: 62, nom: 'Thyven', type: 'mentor', note: 'L\'a prévenue indirectement avant la convocation.' },
      { id: 272, nom: 'Sylvethys', type: 'allié', note: 'Abri d\'une nuit — a mentionné le patient à résonance dense.' },
      { id: 63, nom: 'Lysael', type: 'ennemi', note: 'A sa famille dans un fichier Convergence comme levier de récupération.' },
    ],
    lore_long: `Thyskara a 23 ans et 3 ans de fuite. Elle cherche maintenant au lieu de fuir. Elle suit la trace du Second Avatar dans les perturbations hydriques — son élément Eau est particulièrement sensible. Elle est à 3 semaines. Elle se rapproche. Deux personnes qui cherchent la même chose pour les mêmes raisons, sans savoir que l'autre existe.`,
  },

  // ── 263 · ORVEN II ────────────────────────────────────────────
  263: {
    timeline_position: { an: -1, lieu: 'En route / port de l\'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Sans élément propre', texte: 'Orven II est Normal — sans signature élémentaire. Dans une famille d\'Élus, ça ressemblait à une erreur de naissance. Il a décidé à 14 ans de comprendre ce qu\'il ne pouvait pas être.' },
      { titre: 'La précision sans bruit', texte: 'Ses lectures de signatures élémentaires sont plus claires que celles de n\'importe quel Élu — pas de signature personnelle à neutraliser. L\'Empire a trouvé un outil rare.' },
      { titre: 'Cinq ans et 340 pages', texte: 'Dossier sur le Second Avatar : 340 pages. Relu 7 fois. Portrait construit depuis des traces indirectes, des anomalies d\'archives, des patterns de déplacement.' },
      { titre: 'L\'inverse exact de lui-même', texte: 'La présence du Second Avatar est l\'inverse exact de son absence. Il reconnaîtrait la cible immédiatement dans n\'importe quelle pièce.' },
      { titre: 'À deux semaines', texte: 'Il est à 2 semaines du Second Avatar — plus proche que n\'importe qui sauf peut-être Rhethora. Thyskara est à 3 semaines.' },
    ],
    sorts: ['Lecture de trace', 'Neutralisation de présence', 'Frappe de précision'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'ennemi', note: '5 ans de portrait. 340 pages. L\'envie transformée en outil de traque. À 2 semaines.' },
      { id: 64, nom: 'Avel', type: 'contact_nécessaire', note: 'Partenaire indirect — analyses croisées dans des rapports communs.' },
      { id: 2, nom: 'Cendrix', type: 'mentor', note: 'Modèle dépassé en précision. La différence est l\'obsession.' },
    ],
    lore_long: `Orven II n'a pas d'élément. Dans une famille d'Élus, ça ressemblait à une erreur. Il a transformé l'envie en méthode — cartographier avec une minutie obsessionnelle ce qu'il ne peut pas être. 340 pages. 5 ans. La présence du Second Avatar est l'inverse exact de son absence. Il est à 2 semaines. Ce qu'il fera au contact, il n'a pas encore entièrement répondu à cette question.`,
  },

  // ── 264 · SYLKAVEL ────────────────────────────────────────────
  264: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'L\'identité parfaite', texte: 'Il y a 4 ans, Sylkavel a créé une fausse identité pour le Second Avatar — corroborée par 4 registres, cohérente sur 12 ans. Elle en était fière.' },
      { titre: 'Le vieillissement mal', texte: 'Il y a 18 mois, les premières failles : formats de signature anachroniques. Elle a commencé à corriger à distance. Une faille nouvelle par mois en moyenne.' },
      { titre: 'La course silencieuse', texte: 'Elle surveille l\'identité via 3 contacts dans des cités-relais. La dernière vérification : il y a 11 jours, un port de l\'Isthme. Le document a résisté. Elle a dormi 4 heures cette nuit-là.' },
      { titre: 'Nyreth sans contact', texte: 'Elle a appris la méthode de Nyreth par analyse comparative de ses œuvres. Transmission sans rencontre.' },
      { titre: 'La prochaine faille', texte: 'Identifiée ce matin : un registre militaire réindexé. 2 jours pour corriger avant qu\'un vérificateur attentif remarque le décalage.' },
    ],
    sorts: ['Croissance documentaire', 'Enchantement fée', 'Trace végétale'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'Identité créée il y a 4 ans, surveillée à distance, corrigée en continu.' },
      { id: 13, nom: 'Nyreth', type: 'mentor', note: 'Transmission sans contact — a appris sa technique par ses œuvres.' },
      { id: 248, nom: 'Eiravel', type: 'allié', note: 'Source indirecte — ses rapports ont amélioré les méthodes de Sylkavel sans que ni l\'une ni l\'autre le sache.' },
      { id: 61, nom: 'Sarath', type: 'fantôme', note: 'L\'a mandatée — mort. Elle continue pour honorer la commande.' },
    ],
    lore_long: `Sylkavel a créé une identité parfaite il y a 4 ans. Elle ne l'est plus. Pas par mauvais travail — les standards changent. Elle corrige à distance depuis 18 mois. Une faille nouvelle par mois. La vérification au port il y a 11 jours : résistée. 4 heures de sommeil. Elle travaille seule depuis la mort de Sarath. La prochaine faille est identifiée ce matin. Elle a 2 jours.`,
  },

  // ── 265 · THAREVEN ────────────────────────────────────────────
  265: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Le premier enfant oublié', texte: 'Il y a 7 ans, le premier formulaire de transfert pour un enfant de 8 ans. Thareven l\'a mis dans son tiroir. Il a dit à son assistant que l\'enfant était "momentanément absent".' },
      { titre: 'Trente-neuf oublis', texte: 'Pendant 7 ans, 38 autres formulaires. Les catégories de non-existence se sont multipliées et affinées. Certains transferts passaient quand même — il faisait des choix.' },
      { titre: 'Thyven, la conversation indirecte', texte: 'Il y a 4 ans, Thyven l\'a questionné sur les "procédures de mise à jour des registres de transferts non-confirmés". La vraie question : est-ce que tu fais la même chose que moi ? La vraie réponse : oui.' },
      { titre: 'Les vérificateurs', texte: 'Il a appris il y a 3 semaines que des vérificateurs impériaux arrivent dans 4 à 6 semaines — réponse aux demandes répétées de Carevorn. Un audit approfondi trouvera les coutures.' },
      { titre: '4 à 6 semaines', texte: 'Il a la pierre lisse dans la poche. Il doit décider.' },
    ],
    sorts: ['Ancrage de Sol', 'Mur de Roche', 'Lecture géologique'],
    relations: [
      { id: 62, nom: 'Thyven', type: 'allié', note: 'Même stratégie d\'oubli délibéré — reconnus mutuellement, sans coordination depuis.' },
      { id: 258, nom: 'Carevorn', type: 'ennemi', note: 'Son adversaire direct sans visage — les vérifications qu\'il a commandées déclenchent l\'audit.' },
      { id: 63, nom: 'Lysael', type: 'inconnue_qui_change_tout', note: 'Approche les familles des 39 — aide ou danger, Thareven ne sait pas.' },
    ],
    lore_long: `Thareven n'a pas décidé d'être courageux. Il a décidé de ne pas faire quelque chose, puis l'a redécidé 84 fois sur 7 ans. Les vérificateurs arrivent dans 4 à 6 semaines. Un audit standard résiste. Un audit approfondi trouvera les coutures. Il a la pierre lisse dans la poche. 4 à 6 semaines. Il doit décider.`,
  },

  // ── 266 · VASHERA ─────────────────────────────────────────────
  266: {
    timeline_position: { an: -1, lieu: 'Isthme / Virex', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Le Second Avatar sans le savoir', texte: 'Vashera a travaillé avec le Second Avatar pendant 6 mois sans savoir qui il était. Elle a développé des techniques de régulation pour une saturation élémentaire qu\'elle n\'avait jamais vue.' },
      { titre: 'Thyrekavel disparue', texte: 'La semaine dernière, une patiente — Thyrekavel (275) — a été "extraite". "Extraction réussie, elle est en sécurité." Vashera a posé des questions. Les réponses étaient vagues.' },
      { titre: 'Elle n\'y croit pas', texte: 'Sarath lui avait dit : une bonne organisation peut expliquer quand c\'est vraiment important. Les raisons de sécurité cachent parfois de la sécurité. Parfois autre chose.' },
      { titre: 'L\'enquête parallèle', texte: 'Elle cherche via des canaux que ses contacts Dissidentes ne savent pas qu\'elle utilise. Elle n\'a pas encore dit à Thyven qu\'elle cherche.' },
      { titre: 'L\'expérience unique', texte: 'Si quelqu\'un lui demandait si elle pourrait re-stabiliser une résonance du type du Second Avatar, elle dirait qu\'elle aurait besoin de revoir ses notes. Elle a ces notes.' },
    ],
    sorts: ['Lecture empathique', 'Régulation de saturation', 'Barrière intérieure'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'disciple', note: '6 mois de travail sans savoir qui il était. Expérience unique sur sa résonance.' },
      { id: 275, nom: 'Thyrekavel', type: 'disciple', note: 'Patiente disparue. "Extraction réussie" — elle n\'y croit pas.' },
      { id: 61, nom: 'Sarath', type: 'fantôme', note: 'L\'a recrutée. Sa mort a laissé une absence de référence.' },
      { id: 62, nom: 'Thyven', type: 'contact_nécessaire', note: 'L\'a orientée vers Virex — sait peut-être ce qu\'est devenu Thyrekavel.' },
    ],
    lore_long: `"Extraction réussie, elle est en sécurité." Vashera a posé des questions. Les réponses étaient vagues. Les raisons de sécurité cachent parfois de la sécurité — parfois autre chose. Elle cherche via des canaux parallèles. Elle a travaillé 6 mois avec le Second Avatar sans le savoir et développé des techniques uniques pour sa résonance. Ces deux fils peuvent se rejoindre.`,
  },

  // ── 267 · KESHAVEL ────────────────────────────────────────────
  267: {
    timeline_position: { an: -1, lieu: 'Citadelle / Virex', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Les spécifications lues', texte: 'Les conteneurs de puissance suppriment les capacités élémentaires des Élus qui les portent. C\'est dans les spécifications. Keshavel l\'a lu. Il a forgé. Il a livré.' },
      { titre: 'Kethval a refusé', texte: 'Kethval (206) — homologue Dissident — a refusé ce travail il y a 6 ans. Keshavel a noté le refus. Il a continué à prendre ses commandes. Il n\'a pas trouvé que ça demandait une décision.' },
      { titre: 'Les spécifications de Sykavel', texte: 'La source des spécifications est anonyme mais identifiable comme un forgeur par leur précision. Il ne l\'a pas cherché à identifier.' },
      { titre: 'Les commandes urgentes', texte: 'Depuis 3 mois, Carevorn commande des conteneurs de puissance en quantités et urgence inhabituelles. Keshavel les produit avec la même précision.' },
      { titre: 'La qualité différente', texte: 'Certaines nuits, les spécifications qu\'il relit lui semblent avoir une qualité différente de la première fois. Il relit. Il forge. Il livre.' },
    ],
    sorts: ['Fusion élémentaire', 'Armure de forge', 'Frappe de métal liquide'],
    relations: [
      { id: 206, nom: 'Kethval', type: 'rival', note: 'A refusé ce travail. Keshavel ne se juge pas. Les choix étaient différents.' },
      { id: 258, nom: 'Carevorn', type: 'contact_nécessaire', note: 'Source des commandes urgentes depuis 3 mois.' },
      { id: 242, nom: 'Sykavel', type: 'contact_nécessaire', note: 'Source anonyme des spécifications — précision de forgeur, jamais identifié directement.' },
    ],
    lore_long: `Keshavel sait ce que les conteneurs font. Il a lu les spécifications. Il a forgé. Il a livré. Kethval a refusé — ils ont fait des choix différents. Il ne se juge pas. Certaines nuits les spécifications lui semblent avoir une qualité différente. Il relit. Il forge. Il livre. La séparation entre fabrication et usage est totale et délibérée.`,
  },

  // ── 268 · AELTHYS ─────────────────────────────────────────────
  268: {
    timeline_position: { an: -1, lieu: 'Isthme / routes Dissidentes', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Quatre ans de règle', texte: 'Velath lui a enseigné : ne lis pas ce que tu transportes. Il a respecté ça pendant 4 ans. C\'était une identité.' },
      { titre: 'L\'accident', texte: 'Il y a 4 semaines, un message à Eiravel ouvert par mauvaise manipulation du sceau. Deux lignes visibles. "Second Avatar" et des coordonnées. Il a refermé. Il a relu ces deux lignes pendant 8 heures.' },
      { titre: 'La lecture qui continue', texte: 'Depuis il lit les messages en clair. Il ne peut plus s\'arrêter. Il sait maintenant des fragments de ce que les deux côtés font.' },
      { titre: 'Ce qu\'il porte', texte: 'Deux côtés cherchent la même personne pour des raisons opposées. Il a transporté des messages des deux sans le savoir. Il ne sait pas quoi faire de ça.' },
      { titre: 'Velath ne sait pas', texte: 'Si Velath lui demandait s\'il respectait la règle, il devrait mentir ou avouer. Il ne veut pas que cette conversation ait lieu.' },
    ],
    sorts: ['Vent de fuite', 'Mémoire stellaire', 'Perception préventive'],
    relations: [
      { id: 49, nom: 'Velath', type: 'mentor', note: 'A enseigné la règle qu\'il transgresse. Ne sait pas.' },
      { id: 248, nom: 'Eiravel', type: 'contact_nécessaire', note: 'Destinataire du message accidentellement lu.' },
      { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Transporte des messages le concernant. Sait maintenant ce qu\'il est.' },
      { id: 274, nom: 'Vethyskel', type: 'allié', note: 'Utilise ses cartes via le réseau sans le savoir.' },
    ],
    lore_long: `Il a respecté la règle pendant 4 ans. Un accident a ouvert une porte qu'il ne peut plus refermer. Il lit maintenant. Il sait des fragments — deux côtés, une cible, des raisons opposées. L'information change celui qui la porte même quand le porteur n'a pas demandé à être changé. Si Velath posait la question, il ne saurait pas encore quoi répondre.`,
  },

  // ── 269 · SYTHAVEL ────────────────────────────────────────────
  269: {
    timeline_position: { an: -1, lieu: 'Déserts / port de l\'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'La distinction cruciale', texte: 'Sythavel a été la première à identifier que le Second Avatar cherche à comprendre plutôt qu\'à fuir. Cette distinction lui permet de prédire ses déplacements avec 80% de précision.' },
      { titre: 'L\'empathie non nommée', texte: 'Elle a déduit cette distinction en se mettant à sa place pendant 6 mois. Ce n\'est pas une analyse statistique. Elle ne nomme pas ça de l\'empathie.' },
      { titre: 'Les 20% d\'erreur', texte: 'Les 20% d\'erreur sont liés aux rencontres aléatoires — une guérisseuse, une conversation. Les relations humaines imprévisibles.' },
      { titre: 'Les coordonnées transmises', texte: 'Elle a transmis les coordonnées du port de l\'Isthme à Rhethora. Rhethora a des ordres ambigus. Sythavel n\'a pas demandé ce qu\'elle fera.' },
      { titre: 'La question non posée', texte: 'Elle a une décision de 3 secondes de ne pas demander à quoi les coordonnées servent. Elle ne l\'a pas ré-examinée.' },
    ],
    sorts: ['Analyse de Ténèbres', 'Ralentissement de Glace', 'Présence effacée'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'ennemi', note: '3 ans d\'analyse. 80% de précision de prédiction. L\'a compris sans le rencontrer.' },
      { id: 231, nom: 'Razhal', type: 'mentor', note: 'Destinataire de ses analyses.' },
      { id: 63, nom: 'Lysael', type: 'allié', note: 'Reçoit ses prédictions.' },
      { id: 270, nom: 'Rhethora', type: 'contact_nécessaire', note: 'A reçu les coordonnées. Sythavel n\'a pas demandé ce qu\'elle fera.' },
    ],
    lore_long: `Sythavel comprend le Second Avatar mieux que n'importe qui dans la Convergence. Elle l'a compris en se mettant à sa place — elle ne nomme pas ça de l'empathie. Elle a transmis les coordonnées du port à Rhethora. Elle n'a pas demandé ce que "empêcher" signifie dans ses ordres. C'est une décision de 3 secondes qu'elle n'a pas ré-examinée. Son taux de compréhension de la cible est 80%. Son taux de compréhension de ce qu'elle fait de cette compréhension est 0%.`,
  },

  // ── 270 · RHETHORA ────────────────────────────────────────────
  270: {
    timeline_position: { an: -1, lieu: 'Port de l\'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'L\'ordre ambigu', texte: '"Empêchez la récupération impériale." Elle a demandé une précision. Ses supérieurs ont répété l\'ordre original. Elle a conclu à une latitude délibérée.' },
      { titre: 'L\'interprétation choisie', texte: 'Elle interprète ses ordres à sa façon jusqu\'à ce qu\'on lui précise. L\'interprétation qui lui convient ne tue pas quelqu\'un avant qu\'elle comprenne ce qu\'on lui demande d\'empêcher.' },
      { titre: 'Dans le port depuis 4 jours', texte: 'Elle observe. Elle a identifié 3 agents impériaux et une présence non catégorisée — peut-être Orven II.' },
      { titre: 'Khorath ne sait pas', texte: 'Son partenaire terrain Khorath (235) est efficace et ne pose pas de questions. Elle ne lui a pas dit que ses ordres sont ambigus.' },
      { titre: 'Deux semaines', texte: 'Le Second Avatar devrait arriver dans 2 semaines selon Sythavel. Elle a 2 semaines pour décider ce que "empêcher" signifiera.' },
    ],
    sorts: ['Venin de précision', 'Neutralisation ciblée', 'Frappe d\'interception'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Cible ou sujet à protéger selon l\'interprétation. Pas encore décidé.' },
      { id: 269, nom: 'Sythavel', type: 'allié', note: 'Lui a transmis les coordonnées — ne se sont jamais rencontrées.' },
      { id: 235, nom: 'Khorath', type: 'allié', note: 'Partenaire terrain efficace — ne sait pas que ses ordres sont ambigus.' },
      { id: 263, nom: 'Orven II', type: 'ennemi', note: 'Présence possible dans le port — "empêcher la récupération" signifie l\'arrêter.' },
    ],
    lore_long: `"Empêchez la récupération impériale." Elle a demandé une précision. Ils ont répété l'ordre. Elle a choisi l'interprétation qui ne tue pas avant de comprendre. Elle est dans le port depuis 4 jours. Une présence non catégorisée qui pourrait être Orven II. Le Second Avatar dans 2 semaines. Elle a rarement autant réfléchi avant d'agir. Elle n'est pas sûre de savoir pourquoi cette mission est différente.`,
  },

  // ── 271 · THARAEVORN ──────────────────────────────────────────
  271: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'La phrase', texte: '"Je ne signerai jamais une loi qui traite les gens comme des ressources à cataloguer." Le Premier Avatar avait dit ça 3 mois avant de signer. Tharaevorn l\'avait entendu dire des versions de ça pendant 15 ans.' },
      { titre: 'Le lendemain de la signature', texte: 'Il a lu la loi dans les annonces officielles. N\'a pas écrit au Premier. A rendu son insigne par les procédures normales. Est parti.' },
      { titre: 'Sarath et les Dissidentes', texte: 'Sarath (61) était son ancrage — le seul qui comprenait le contexte sans explication. Sa mort a laissé une absence de mémoire partagée.' },
      { titre: 'Le Second Avatar', texte: 'Il l\'a vu une fois brièvement. Représente ce que le Premier aurait pu rester. Il sait que c\'est une projection. La projection a une utilité.' },
      { titre: 'Le prénom', texte: 'Il parle du Premier par son prénom. Personne dans les Dissidentes ne fait ça. Ça les met légèrement mal à l\'aise.' },
    ],
    sorts: ['Arc Électrique', 'Résistance normale', 'Intuition de terrain'],
    relations: [
      { id: 60, nom: 'Premier Avatar', type: 'fantôme', note: '15 ans d\'amitié. "Je ne signerai jamais." Il a signé. Tharaevorn est parti le lendemain.' },
      { id: 59, nom: 'Second Avatar', type: 'disciple', note: 'Vu une fois. Représente ce que le Premier aurait pu être — projection utile malgré son injustice.' },
      { id: 61, nom: 'Sarath', type: 'fantôme', note: 'Ancrage mort — seul qui comprenait le contexte.' },
    ],
    lore_long: `Tharaevorn utilise le prénom du Premier Avatar. 20 ans après la signature, il n'a toujours pas compris la trajectoire entre la phrase et la loi. Comprendre impliquerait de plaindre, et plaindre quelqu'un qui t'a menti ressemble à lui offrir une sortie qu'il n'a pas demandée. Le Second Avatar est ce que le Premier aurait pu rester. C'est une projection. Ça lui donne une direction.`,
  },

  // ── 272 · SYLVETHYS ───────────────────────────────────────────
  272: {
    timeline_position: { an: -1, lieu: 'Thalassyr / routes côtières', arc: 'Second Avatar' },
    histoire: [
      { titre: 'La guérisseuse itinérante', texte: 'Sylvethys soigne ce qui est devant elle sans appartenir à un camp. Elle ne reste jamais assez longtemps pour être recrutée.' },
      { titre: 'Les 3 heures de travail', texte: 'Il y a 6 mois, un patient à résonance "anormalement dense". Elle a travaillé 3 heures sur une surcharge qu\'elle ne comprenait pas entièrement. Elle a réussi. Il est reparti sans donner son nom.' },
      { titre: 'La mention à Thyskara', texte: '4 mois plus tard, Thyskara a demandé si elle avait rencontré quelqu\'un avec une résonance extraordinaire. Sylvethys a répondu honnêtement.' },
      { titre: 'Les notes de session', texte: 'Elle a des notes techniques sur ce qu\'elle a fait pendant ces 3 heures. Les méthodes qui ont fonctionné, celles qui n\'ont pas fonctionné.' },
      { titre: 'Shiveth', texte: 'Shiveth (232) est dans le même réseau de guérisseurs itinérants. Confiance immédiate quand ils se croisent.' },
    ],
    sorts: ['Soin de Fée', 'Purification d\'Eau', 'Lecture de résonance'],
    relations: [
      { id: 59, nom: 'Second Avatar', type: 'contact_nécessaire', note: 'Soigné il y a 6 mois. Résonance documentée dans ses carnets.' },
      { id: 262, nom: 'Thyskara', type: 'allié', note: 'A mentionné le patient — informée en bonne foi sans calculer les conséquences.' },
      { id: 232, nom: 'Shiveth', type: 'allié', note: 'Même réseau de guérisseurs itinérants — confiance immédiate.' },
    ],
    lore_long: `Sylvethys ne sait pas qui elle a soigné. 3 heures sur une résonance trop dense pour ses repères habituels. Elle a réussi. Elle a des notes. Elle a répondu honnêtement à Thyskara — et cette réponse honnête est maintenant en mouvement dans le monde. Sa neutralité ne la protège pas contre les conséquences d'une information transmise.`,
  },

  // ── 273 · KAELORVETH ──────────────────────────────────────────
  273: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'L\'abri de Sarath', texte: 'Il y a 3 semaines, Kaelorveth a trouvé l\'abri où Sarath cachait le Second Avatar. Les traces étaient claires. Il a reconnu le mode opératoire de Sarath. Il a perçu la résonance élémentaire de l\'autre personne — dense, chaud, fort.' },
      { titre: 'Le rapport rédigé', texte: 'Il l\'a rédigé le soir même. Procédure standard : transmettre à Avel. Il l\'a mis dans sa poche pour le lendemain.' },
      { titre: 'Trois semaines', texte: 'Le rapport est dans sa poche depuis 3 semaines. Il a dit à Avel qu\'il viendrait dans les prochains jours. Il n\'est pas venu. Avel ne l\'a pas relancé.' },
      { titre: 'Les raisons valides et insuffisantes', texte: 'Vérifier une dernière fois. Confirmer. Attendre un meilleur moment. Ces raisons sont techniquement vraies et insuffisantes.' },
      { titre: 'La vraie question', texte: 'Il s\'approche de la formuler : si je transmets ça, qu\'est-ce que ça fait à la personne qui était dans cet abri ?' },
    ],
    sorts: ['Frappe d\'investigation', 'Ancrage de Sol', 'Lecture de trace'],
    relations: [
      { id: 61, nom: 'Sarath', type: 'fantôme', note: 'Reconstitué son mode opératoire depuis les traces. Respect pour quelqu\'un qu\'il n\'a pas connu.' },
      { id: 59, nom: 'Second Avatar', type: 'inconnue_qui_change_tout', note: 'Ses traces dans l\'abri. Le rapport dans la poche. Kaelorveth pèse une question nouvelle.' },
      { id: 64, nom: 'Avel', type: 'mentor', note: 'Supérieur indirect — annoncé, pas transmis. L\'intervalle de silence est la décision.' },
    ],
    lore_long: `Le rapport est dans la poche depuis 3 semaines. Les traces étaient claires — il est bon dans son travail. Il a dit à Avel qu'il viendrait. Il n'est pas venu. Les raisons de délai sont techniquement valides et insuffisantes. La vraie question qu'il s'approche de formuler : si je transmets ça, qu'est-ce que ça fait à la personne qui était dans cet abri ? C'est une question qu'il ne s'était pas posée pendant 11 ans.`,
  },

  // ── 274 · VETHYSKEL ───────────────────────────────────────────
  274: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Sept corridors', texte: 'Vethyskel a tracé 7 corridors depuis Virex sur 17 ans. Chacun a été utilisé au moins une fois. Il tient un registre des réussites et des échecs, avec les raisons.' },
      { titre: 'Velath en parallèle', texte: 'Il y a 3 semaines, il a appris que Velath (49) travaille sur le même corridor sud indépendamment. Ils ont failli se croiser physiquement deux fois.' },
      { titre: 'La coordination à établir', texte: 'Le corridor serait plus robuste s\'ils se coordonnaient. La coordination directe demande un protocole soigneux. Il prépare l\'approche. Il ne l\'a pas encore exécutée.' },
      { titre: 'Le Second Avatar sur une route', texte: 'Un flux inhabituel il y a 8 mois sur un de ses corridors. Résonance élémentaire notable. Il ne sait pas que c\'était le Second Avatar.' },
      { titre: 'Aelthys', texte: 'Aelthys (268) utilise ses cartes anonymisées sans savoir qu\'elles viennent de lui.' },
    ],
    sorts: ['Lecture de mémoire de lieu', 'Vent de couverture', 'Navigation Spectre'],
    relations: [
      { id: 49, nom: 'Velath', type: 'allié', note: 'Travail parallèle sur le même corridor — contact à établir via protocole soigneux.' },
      { id: 59, nom: 'Second Avatar', type: 'contact_nécessaire', note: 'A utilisé une route il y a 8 mois — non identifié, présence documentée.' },
      { id: 268, nom: 'Aelthys', type: 'allié', note: 'Utilise ses cartes anonymisées via le réseau sans le savoir.' },
    ],
    lore_long: `7 corridors. 17 ans. Des routes pour des gens qui n'en avaient pas d'autres. Velath travaille sur le même corridor south — travail de qualité comparable, non coordinné. Si ils se coordonnaient, le corridor serait plus robuste. Il prépare un protocole soigneux. Le Second Avatar a marché sur un de ses corridors il y a 8 mois. Il ne le sait pas. Une route bien tracée existe dans l'espace entre ce que les registres décrivent et ce que le terrain contient.`,
  },

  // ── 275 · THYREKAVEL ──────────────────────────────────────────
  275: {
    timeline_position: { an: -1, lieu: 'Maison sûre / Isthme', arc: 'Second Avatar' },
    histoire: [
      { titre: 'Le signal vivant', texte: 'Thyrekavel est une des 39 de Virex. Multi-résonance faible — Eau, Feu, Sol, traces de Plante et de Vent, aucun dominant. Enregistrée comme anormale depuis la naissance.' },
      { titre: 'La conversation à 10 ans', texte: 'Elle avait 10 ans, le Second Avatar en avait 15. Une conversation sur les éléments multiples. Elle l\'a à moitié oubliée. Lui s\'en souvient mieux — il se convainquait lui-même en lui parlant.' },
      { titre: 'Vashera', texte: 'Vashera était sa psychologue depuis 2 ans — quelqu\'un qui essayait sincèrement de comprendre ce qu\'elle était.' },
      { titre: '"Extraction réussie"', texte: 'Il y a 11 jours. Elle est dans une maison sûre. On lui dit de ne pas sortir. Les questions directes obtiennent des réponses vagues.' },
      { titre: 'Ce qu\'elle prouve', texte: 'Son existence avec une multi-résonance stable sur 22 ans prouve que le phénomène de Virex est systémique, pas individuel. Elle ne sait pas encore entièrement ce que ça signifie.' },
    ],
    sorts: ['Éclat multi-élémentaire', 'Équilibre transparent', 'Résistance diffuse'],
    relations: [
      { id: 62, nom: 'Thyven', type: 'mentor', note: 'La surveille depuis sa naissance — a expliqué les précautions à 14 ans.' },
      { id: 63, nom: 'Lysael', type: 'ennemi', note: 'La Convergence veut la tester — elle ne sait pas que Lysael a son dossier.' },
      { id: 59, nom: 'Second Avatar', type: 'allié', note: 'Conversation à 10 ans — souvenir flou pour elle, important pour lui.' },
      { id: 266, nom: 'Vashera', type: 'mentor', note: 'Psychologue de 2 ans — cherche à la retrouver sans qu\'elle le sache.' },
    ],
    lore_long: `Thyrekavel a 22 ans et elle attend dans une maison sûre. "Extraction réussie" — les questions directes obtiennent des réponses vagues. Elle peut atteindre un état de transparence élémentaire — quelques secondes où ses éléments s'équilibrent et elle devient invisible aux capteurs standard. Elle a découvert ça il y a 4 mois. Elle ne sait pas encore ce qu'elle pourrait en faire. Son existence prouve que le phénomène de Virex est systémique. Vashera cherche à la retrouver. Elle suppose que Vashera a été informée que tout allait bien. Ces deux suppositions fausses se maintiennent l'une l'autre.`,
  },

  // ── 276 · GAELRYN ──────────────────────────────────────────
  276: {
    timeline_position: { an: -1, lieu: 'Entre Asterciel et Thalassyr', arc: 'Silence des Vents' },
    histoire: [
      { titre: 'La strate basse', texte: 'Née dans les strates basses d\'Asterciel, fille d\'un père navigateur et d\'une mère Néréide. Le double élément Electrique/Vent lui a donné une façon de penser l\'espace que ni les Aérides ni les Néréides ne partageaient.' },
      { titre: 'Le couloir dangereux', texte: 'À 24 ans, elle découvre un couloir de vent entre Asterciel et Thalassyr traversant des zones de courants électriques que les autres navigateurs évitent. Pour elle, ces courants sont des rails.' },
      { titre: 'La cargaison sans question', texte: 'Son premier voyage pour Caeryn : une caisse qui pèse le double de ce que le manifeste indique. Elle livre. Pas de question. Caeryn paie le double du tarif.' },
      { titre: 'Taelvorn en vol', texte: 'Elle croise Taelvorn en inspection — lui observe ses jonctions, elle utilise ses corridors. Ils parlent 20 minutes de courants. Leur dépendance mutuelle est non consciente.' },
      { titre: 'Trois routes exclusives', texte: 'Elle vole Asterciel-Thalassyr 3-4 fois par semaine. Ses 3 routes électriques sont 40% plus rapides que les routes officielles. Personne d\'autre ne peut les voler.' },
    ],
    sorts: ['Arc conducteur', 'Rafale de cap', 'Navigation électrique'],
    relations: [
      { id: 101, nom: 'Caeryn', type: 'allié', note: 'Échange de savoir-faire. Clientèle principale.' },
      { id: 82, nom: 'Sorthel', type: 'allié', note: 'Connecte les routes maritimes aux routes aériennes.' },
      { id: 277, nom: 'Taelvorn', type: 'contact_nécessaire', note: 'Dépendance mutuelle non consciente — ses routes utilisent ses jonctions.' },
    ],
    lore_long: `Gaelryn connaît 3 routes entre Asterciel et Thalassyr que personne d'autre ne peut voler. Les couloirs traversent des zones de courants électriques que les navigateurs standard évitent — pour elle, ces courants sont des guides. 40% plus rapide que les routes officielles. Elle ne pose pas de questions sur les cargaisons de Caeryn. Entre les deux régions, 340 kilomètres de ciel que personne ne contrôle vraiment.`,
  },

  // ── 277 · TAELVORN ──────────────────────────────────────────
  277: {
    timeline_position: { an: -1, lieu: 'Jonction Thalassyr/Asterciel', arc: 'Silence des Vents' },
    histoire: [
      { titre: 'Thalassyr et les fils', texte: 'Né à Thalassyr d\'une famille de techniciens du réseau portuaire. L\'Electrique du père, le Vent d\'une lignée lointaine Aéride.' },
      { titre: 'La jonction à 30% de perte', texte: 'Recruté par la Confédération à 28 ans. La jonction entre le réseau artificiel d\'Orven et les courants naturels d\'Asterciel perdait 30% de puissance. Il l\'a réduit à 4% en 6 mois.' },
      { titre: 'La section retirée', texte: 'Son premier rapport notait que le réseau artificiel supprime les courants naturels plutôt que de les utiliser. La section a été retirée avant publication.' },
      { titre: 'Gaelryn dans les courants', texte: 'Il voit une navigatrice utiliser ses jonctions d\'une façon qu\'il n\'avait pas calculée. Un mois à comprendre comment. La réponse : son élément électrique lui permet de lire les flux en temps réel sans délai.' },
      { titre: 'Le document non demandé', texte: 'Il rédige une étude sur la faisabilité d\'une interface entre réseau artificiel et courants naturels. Personne ne l\'a commandé. Il ne sait pas encore à qui il le donnera.' },
    ],
    sorts: ['Surcharge de réseau', 'Courant directif', 'Court-circuit'],
    relations: [
      { id: 15, nom: 'Orven', type: 'mentor', note: 'A étudié son réseau depuis l\'intérieur. Respecte l\'oeuvre sans approuver toutes les implications.' },
      { id: 23, nom: 'Talvyn', type: 'allié', note: 'Contact technique à Asterciel. Échanges purement professionnels.' },
      { id: 276, nom: 'Gaelryn', type: 'contact_nécessaire', note: 'A montré ce qu\'aucun instrument ne peut mesurer.' },
    ],
    lore_long: `Taelvorn maintient le réseau artificiel d'Orven depuis 9 ans. Son premier rapport notait que le réseau supprime des courants naturels plutôt que de les utiliser — la section a été retirée. Il rédige maintenant un document non demandé : comment interfacer le réseau avec ce qu'il a remplacé. Si quelqu'un le lisait, ce serait une carte de comment transformer le réseau sans le démanteler.`,
  },

  // ── 278 · VELRYNTH ──────────────────────────────────────────
  278: {
    timeline_position: { an: -1, lieu: 'Citadelle', arc: 'Rupture Thermique' },
    histoire: [
      { titre: 'Asterciel et les métaux', texte: 'Né dans les strates moyennes d\'Asterciel. Père forgeron Aéride spécialisé dans les alliages. L\'Electrique est apparu à 16 ans en travaillant sur une jonction — ce que ça signifiait pour les alliages conducteurs.' },
      { titre: 'Le recrutement militaire', texte: 'L\'Empire l\'a recruté à 30 ans après avoir vu ses prototypes d\'alliages légers. Pas pour les plateformes — pour les armures. Un an à accepter la transition.' },
      { titre: 'La première armure testée', texte: 'Son prototype a absorbé une attaque électrique qui aurait tué le régulateur qui le portait. Il a lu le rapport. Il a noté que l\'armure avait fonctionné. Il n\'a pas demandé ce que le régulateur faisait à Varkhôl.' },
      { titre: 'La variante souterraine', texte: 'Commande de Thyss pour Ormn-Dur : armures pour vapeurs fongiques et pression variable. Problème techniquement différent. 4 mois de travail. Des incertitudes sur les propriétés à long terme — documentées dans ses notes, pas dans le rapport de livraison.' },
      { titre: 'L\'adaptation automatique', texte: 'Il travaille sur une armure qui lit l\'élément d\'une attaque et ajuste sa conductivité avant l\'impact. Si ça fonctionne, c\'est le projet le plus élégant qu\'il ait réalisé.' },
    ],
    sorts: ['Armure conductrice', 'Arc de renvoi', 'Frappe structurelle'],
    relations: [
      { id: 9, nom: 'Skarith', type: 'contact_nécessaire', note: 'Client indirect. Source de premières commandes.' },
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Commande la plus techniquement intéressante — conditions souterraines.' },
    ],
    lore_long: `Velrynth fabrique des armures pour les régulateurs impériaux. Son premier prototype a absorbé une attaque qui aurait tué son porteur. Il a noté que l'armure avait fonctionné. Il n'a pas demandé ce que le régulateur faisait. La variante pour les conditions souterraines d'Ormn-Dur a des incertitudes documentées dans ses notes privées — pas dans le rapport de livraison.`,
  },

  // ── 279 · KYRAETH ──────────────────────────────────────────
  279: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La frontière', texte: 'Née dans un port côtier face à la frontière d\'Ormn-Dur. Père marin Néréide, mère artisane avec du sang Chthonien — ce qui a donné l\'Acier. Grandie entre deux mondes.' },
      { titre: 'Le premier outil', texte: 'À 26 ans, elle crée son premier outil électrique fonctionnant dans les conditions de mine — la combinaison Electrique/Acier permet de calibrer le champ selon la composition minérale locale, automatiquement.' },
      { titre: 'La semaine sans eau', texte: 'Fermeture des canaux de maintenance. Elle réalise à quel point elle dépend physiquement de l\'eau — pas professionnellement, physiquement. Elle est Néréide.' },
      { titre: 'La galerie non officielle', texte: 'Drekvar lui demande des outils calibrés pour une galerie sans coordonnées dans les plans officiels. Elle calibre. Elle ne demande pas. Elle garde trace dans un carnet personnel.' },
      { titre: 'L\'atelier qui tourne', texte: 'Son atelier produit des outils pour une dizaine de clients réguliers. Seule artisane de la région à maîtriser la calibration électrique pour les environnements souterrains. Kaeleth lui envoie des commandes depuis Thalassyr.' },
    ],
    sorts: ['Surcharge d\'outil', 'Armature de forge', 'Calibration de terrain'],
    relations: [
      { id: 131, nom: 'Drekvar', type: 'allié', note: 'Client principal. Confiance fondée sur la compétence, pas la connaissance.' },
      { id: 86, nom: 'Kaeleth', type: 'allié', note: 'Contact à Thalassyr. Seul lien maintenu avec son espèce.' },
    ],
    lore_long: `Kyraeth fabrique des outils que les mineurs d'Ormn-Dur ne trouveraient pas ailleurs. La combinaison Electrique/Acier lui permet de calibrer le champ selon la composition minérale locale — automatiquement. Elle est Néréide dans une mine souterraine, ce qui est techniquement absurde. La semaine sans eau lui a rappelé qu'il y a des limites à l'adaptation. Drekvar lui a demandé des outils pour une galerie non répertoriée. Elle garde trace dans un carnet.`,
  },

  // ── 280 · THALVELYN ──────────────────────────────────────────
  280: {
    timeline_position: { an: -1, lieu: 'Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'L\'enfant qui entendait', texte: 'À 9 ans, elle commence à entendre les plantes — pas comme des voix, comme des états. Une plante en stress, une plante en paix, une plante qui porte quelque chose.' },
      { titre: 'Le premier jardin', texte: 'À 20 ans, Thalorn lui confie son premier jardin-mémoire. Trois mois à comprendre ce qu\'il contient : émotions de la génération de la Faim des Racines — peur, perte, défiance.' },
      { titre: 'Les visiteurs non informés', texte: 'Elle réalise que ses jardins enregistrent les émotions des visiteurs — y compris un Conservateur de rang dont les émotions contredisent son image publique. Elle garde ça.' },
      { titre: 'La plante centenaire', texte: 'Leth vient lui demander ce que porte la plante centenaire — 100 ans d\'émotions Conservatrices. Elle lui donne une version choisie, pas mensongère. Accord implicite sur les limites.' },
      { titre: 'L\'archive traduite', texte: 'Elle rédige une traduction des émotions les plus importantes — un document pour ceux qui viendraient après. Elle ne l\'a montré à personne.' },
    ],
    sorts: ['Enracinement émotionnel', 'Brume de Fée', 'Croissance rapide'],
    relations: [
      { id: 33, nom: 'Thalorn', type: 'mentor', note: 'L\'a formée. Lui a confié son premier jardin.' },
      { id: 34, nom: 'Leth', type: 'allié', note: 'Vient lire les jardins via elle. Accord implicite sur les limites.' },
    ],
    lore_long: `Ses jardins enregistrent les émotions des visiteurs. Thalvelyn est la seule à pouvoir les lire. Elle ne l'a pas dit à tous ses visiteurs. Un Conservateur de rang laisse des émotions qui contredisent son image publique — elle les garde. 7 jardins, des siècles de mémoire émotionnelle, une seule gardienne.`,
  },

  // ── 281 · AELKAETH ──────────────────────────────────────────
  281: {
    timeline_position: { an: -1, lieu: 'Sylvera (identité masquée)', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'La Fée sans territoire', texte: 'Née à la frontière entre Sylvera et l\'Isthme. Son élément Plante secondaire lui donne une connexion naturelle avec Sylvera que les Fées pures n\'ont pas.' },
      { titre: 'Le masque végétal', texte: 'Deux ans à perfectionner le masquage de sa bioluminescence. Elle se présente comme herboriste Sylvan d\'ascendance mixte. Les Conservateurs l\'ont acceptée — ils avaient besoin de jardiniers.' },
      { titre: 'La reconnaissance de Thyrvae', texte: 'Thyrvae traverse son jardin. Leurs regards se croisent. Thyrvae reconnaît l\'élément Fée. Aucune des deux ne dit rien. Elles continuent.' },
      { titre: 'Le texte de Sylvae', texte: 'Sylvae lui demande d\'aider à restaurer un document sur les arbres-mémoire perdus. Première fois qu\'on la traite comme experte plutôt qu\'aide. Trois semaines de travail.' },
      { titre: 'Le double service', texte: 'Elle aide les Conservateurs et transmet parfois des informations aux Dissidentes. Ces deux activités ne se croisent jamais — délibérément.' },
    ],
    sorts: ['Lumière fée ciblée', 'Croissance entrelacée', 'Voile végétal'],
    relations: [
      { id: 31, nom: 'Sylvae', type: 'mentor', note: 'La traite comme experte. Premier travail sérieux.' },
      { id: 120, nom: 'Thyrvae', type: 'allié', note: 'L\'a reconnue comme Fée. Pacte implicite de silence.' },
    ],
    lore_long: `Aelkaeth est Fée. À Sylvera depuis 6 ans, personne ne le sait — sauf Thyrvae, qui l'a reconnu et n'en a rien dit. Elle aide les Conservateurs en jardinière compétente et transmet parfois des informations aux Dissidentes. Ces deux services ne se connaissent pas. Ce cloisonnement la protège et l'épuise.`,
  },

  // ── 282 · SYLVRATH ──────────────────────────────────────────
  282: {
    timeline_position: { an: -1, lieu: 'Clairière isolée de Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'Le premier cycle', texte: '500 ans. Né avant la première destruction forestière. Il avait 60 ans quand les arbres ont commencé à mourir. 140 ans quand la forêt a recommencé à pousser.' },
      { titre: 'Le deuxième cycle', texte: 'La deuxième destruction : causée par une intervention humaine sur les réseaux racinaires. Il était dans la forêt. Il y est resté. Il a appris ce que la mort d\'une forêt sentait de l\'intérieur.' },
      { titre: 'Les factions et leurs certitudes', texte: 'Après le deuxième cycle, deux factions avaient émergé. Il avait vu laquelle avait raison. Il n\'avait pas dit laquelle — personne ne le lui avait demandé.' },
      { titre: 'La Faim des Racines', texte: 'Il reconnaît le pattern dans les 15 premiers jours. Il n\'en parle qu\'à Thalorn, 4 mois plus tard, quand Thalorn vient le chercher. Pas tout ce qu\'il dit se retrouve dans les décisions Conservatrices.' },
      { titre: 'L\'attente du chercheur', texte: 'Il vit dans une clairière. Il ne cherche personne. Il répond aux questions posées — pas aux questions non posées, même si elles sont plus importantes.' },
    ],
    sorts: ['Enracinement millénaire', 'Mémoire de forêt', 'Croissance défensive'],
    relations: [
      { id: 33, nom: 'Thalorn', type: 'allié', note: 'A cherché et écouté — pas tout utilisé. Premier contact sérieux.' },
      { id: 34, nom: 'Leth', type: 'allié', note: 'A posé les meilleures questions. 4 visites en 30 ans — fréquence la plus haute.' },
    ],
    lore_long: `Sylvrath a 500 ans. Trois cycles de destruction forestière. Il sait que la Faim des Racines actuelle a un mécanisme de récupération similaire au premier cycle — si certaines conditions sont réunies. Ces conditions sont techniquement réalisables. Personne ne lui a posé la question dans ces termes. Il attend.`,
  },

  // ── 283 · THAELKORN ──────────────────────────────────────────
  283: {
    timeline_position: { an: -1, lieu: 'Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'L\'enfant qui entendait creux', texte: 'À 12 ans — pendant la Faim des Racines — il frappe les troncs et certains sonnent différemment. Il ne sait pas ce que ça signifie. Sa mère meurt avant de répondre.' },
      { titre: 'La question à Thalorn', texte: 'À 19 ans, Thalorn lui répond : ce qu\'il entend est la différence entre un arbre qui porte sa mémoire et un arbre dont la mémoire s\'est effacée. L\'effacement peut précéder la mort de plusieurs années.' },
      { titre: 'L\'arbre qu\'il n\'a pas pu soigner', texte: 'Son premier arbre vide — 8 mois de traitement. L\'arbre survit physiquement 3 ans de plus. Succès de survie, échec de restauration mémorielle. Il documente les deux séparément.' },
      { titre: 'Le pattern du vide', texte: 'Après 10 ans, il cartographie les arbres vides. Leurs positions dessinent des lignes qui ressemblent aux anciens réseaux racinaires de Thalindre — en négatif.' },
      { titre: 'La carte de 12 ans', texte: 'Il montre la carte à Thalorn qui a l\'air surpris. Il ne l\'a montrée à personne d\'autre. Sylindra pourrait peut-être interpréter les lignes.' },
    ],
    sorts: ['Diagnostic végétal', 'Résonance Fée', 'Soin racinaire'],
    relations: [
      { id: 33, nom: 'Thalorn', type: 'mentor', note: 'A nommé ce qu\'il entendait. A vu la carte. A eu l\'air surpris.' },
      { id: 116, nom: 'Sylketh', type: 'allié', note: 'Signale des arbres malades sur ses routes — étend involontairement la carte.' },
      { id: 37, nom: 'Sylindra', type: 'contact_nécessaire', note: 'Pourrait interpréter les lignes de la carte. Ne se connaissent pas.' },
    ],
    lore_long: `Thaelkorn entend le vide. Les arbres dont la mémoire s'est effacée sonnent différemment à ses mains. Sa carte de 12 ans dessine des lignes qui ressemblent aux anciens réseaux racinaires de Thalindre — en négatif. L'effacement suit les mêmes routes que le réseau perdu, dans l'ordre inverse. Sylindra pourrait interpréter. Ils ne se connaissent pas.`,
  },

  // ── 284 · ORVKAEL ──────────────────────────────────────────
  284: {
    timeline_position: { an: -1, lieu: 'Sylvera (zone 12 km²)', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'Les premières Fées', texte: 'À 8 ans, deux Fées-plantes se posent sur ses épaules et n\'en repartent plus. Sa famille pense que c\'est une anomalie. Elles sont toujours là à 40 ans.' },
      { titre: 'Le système de surveillance', texte: 'À 24 ans, il passe 3 ans à comprendre systématiquement le fonctionnement des Fées-plantes comme sentinelles — portée, type d\'informations, distinction des menaces.' },
      { titre: 'Krath dans la zone', texte: 'Les Fées l\'alertent du passage de Krath avant que Krath n\'entre dans la zone. Il prévient les Gardiens voisins. Krath ne brûle pas cette section.' },
      { titre: 'L\'enseignement d\'Orvketh', texte: 'Orvketh lui apprend les nuances — états émotionnels des végétaux, persistances de présence. Son système passe de binaire à nuancé. Moins de fausses alertes.' },
      { titre: 'Le dossier Krath', texte: 'Il documente les passages de Krath dans sa zone depuis 4 ans. Pas encore une plainte formelle. Une accumulation.' },
    ],
    sorts: ['Sentinelles végétales', 'Barrière forestière', 'Lecture de zone'],
    relations: [
      { id: 36, nom: 'Krath', type: 'rival', note: 'Surveille ses passages depuis 4 ans. Documentation non encore utilisée.' },
      { id: 129, nom: 'Orvketh', type: 'mentor', note: 'A enseigné les nuances des Fées-plantes. Échange compétences/informations.' },
      { id: 121, nom: 'Sylborn', type: 'allié', note: 'Gardien voisin. Reçoit parfois les alertes précoces.' },
    ],
    lore_long: `Orvkael n'est jamais seul dans la forêt — 3 à 7 Fées-plantes sur lui ou à portée. Ce sont des sentinelles. Il couvre 12 km² de forêt. Il sait qui entre, ce qu'ils font, dans quel état les plantes restent après leur passage. Krath entre régulièrement. Il documente depuis 4 ans.`,
  },

  // ── 285 · VELTHKAE ──────────────────────────────────────────
  285: {
    timeline_position: { an: -1, lieu: 'Sylvera (laboratoire impérial)', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'La botaniste fée', texte: 'Elle commence ses recherches en botanique fée à 15 ans — une discipline qui existe à peine. Elle contribue à la définir.' },
      { titre: 'La réquisition', texte: 'À 32 ans, l\'Empire l\'invite à intégrer un programme botanique impérial. L\'invitation n\'est pas refusable. Elle dit oui.' },
      { titre: 'Le premier rapport détourné', texte: 'Son rapport sur les propriétés régénératives fées est classifié et détourné vers une division militaire. Elle comprend que ses recherches serviront des usages qu\'elle n\'approuve pas. Elle continue.' },
      { titre: 'La surveillance allégée', texte: 'Deux ans après, la surveillance directe s\'allège — elle est devenue fiable selon les critères impériaux. Elle utilise cet espace pour des notes personnelles que l\'Empire n\'a pas.' },
      { titre: 'Le double corpus', texte: 'Elle produit deux corpus de recherche. L\'un pour l\'Empire. L\'autre pour elle — la partie de la botanique fée que l\'Empire n\'a pas pensé à demander.' },
    ],
    sorts: ['Floraison forcée', 'Lumière de Fée concentrée', 'Croissance parasitaire'],
    relations: [
      { id: 35, nom: 'Aeris', type: 'contact_nécessaire', note: 'Ses données remontent vers elle via une chaîne administrative. Aucun contact direct.' },
      { id: 126, nom: 'Aelkorn', type: 'allié', note: 'Situation similaire — recherche réquisitionnée. Ne se sont jamais parlé.' },
    ],
    lore_long: `Velthkae produit deux corpus de recherche — un pour l'Empire, un dans un petit carnet qu'elle ne remet à personne. La surveillance s'est allégée après 2 ans. Dans cet espace de confiance acquise, elle écrit ses notes personnelles. Ce n'est pas de la résistance. C'est juste qu'il y a une partie de la botanique fée qui lui appartient encore.`,
  },

  // ── 286 · SYLKRAETH ──────────────────────────────────────────
  286: {
    timeline_position: { an: -1, lieu: 'Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'La plante et son usage', texte: 'Elle apprend la botanique sylvane avant de découvrir que certaines plantes ont des usages que ses professeurs n\'enseignent pas. L\'élément Poison à 18 ans change sa relation au végétal toxique.' },
      { titre: 'L\'incident et la règle', texte: 'À 22 ans, un empoisonnement involontaire. Elle passe 6 mois à reformuler ses critères de ciblage. Les règles qu\'elle applique depuis ont une origine précise.' },
      { titre: 'La première mission Dissidente', texte: 'Un agent impérial actif dans des opérations d\'extraction. Trois semaines à vérifier l\'identification. L\'opération dure 4 minutes.' },
      { titre: 'La liste refusée', texte: 'Il y a 2 ans, une liste Dissidente inclut un nom hors-critères. Elle refuse. Friction. Friction passée. Elle sait que la prochaine liste pourra contenir un nom similaire.' },
      { titre: 'La règle maintenue', texte: 'Elle continue avec sa règle : cibles actives dans des opérations directes uniquement. Elle peut expliquer pourquoi chaque personne sur sa liste correspondait.' },
    ],
    sorts: ['Extrait ciblé', 'Brume végétale', 'Empoisonnement à distance'],
    relations: [
      { id: 156, nom: 'Velshyr', type: 'allié', note: 'Travail similaire à Vel\'Nox. Échange éthique une fois. Respect professionnel à distance.' },
      { id: 44, nom: 'Ossira', type: 'allié', note: 'Point de contact commun. Source de mandats et soutien logistique.' },
    ],
    lore_long: `Sylkraeth empoisonne les agents impériaux qui extraient des Élus à Sylvera. Règle : uniquement les actifs dans des opérations directes. L'incident à 22 ans a défini cette règle. Il y a 2 ans, elle a refusé un mandat hors-critères. La friction est passée. Elle circule comme Conservatrice.`,
  },

  // ── 287 · THALVREK ──────────────────────────────────────────
  287: {
    timeline_position: { an: -1, lieu: 'Zone de transition Sylvera/Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La frontière comme foyer', texte: 'Né d\'un père Chthonien et d\'une mère Sylvan dans la zone de transition. Deux éléments qui ne se combinent pas souvent — Poison Chthonien et Plante Sylvan.' },
      { titre: 'La première guérison fongique', texte: 'À 26 ans, il traite son premier cas de maladie fongique avancée avec une combinaison de plantes sylvanes et d\'extraits calibrés par son Poison. Ça marche.' },
      { titre: 'La méfiance croisée', texte: 'Les Chthoniens se méfient de son côté Sylvan. Les Sylvans se méfient de son côté Chthonien. Il travaille dans leurs interstices.' },
      { titre: 'Le champignon inconnu', texte: 'Drevaya lui envoie un patient avec une exposition à une espèce de la Fosse profonde. 4 jours de travail. La solution implique des plantes sylvanes dont l\'ignorance des toxines est leur efficacité.' },
      { titre: 'Le registre de 47 traitements', texte: 'Sa pharmacopée de 47 traitements n\'existe nulle part ailleurs. Elle a besoin d\'un héritier. Le profil requis est rare.' },
    ],
    sorts: ['Extraction toxinique', 'Enveloppement végétal', 'Brume neutralisante'],
    relations: [
      { id: 39, nom: 'Drevaya', type: 'allié', note: 'Envoie des cas Chthoniens non traitables. Source d\'informations sur la zone fongique.' },
      { id: 122, nom: 'Kraethyn', type: 'allié', note: 'Envoie des cas Sylvans exposés. Complémentarité médicale.' },
    ],
    lore_long: `Thalvrek habite la frontière entre Sylvera et Ormn-Dur parce que c'est là que son travail est possible. 47 traitements pour les maladies fongiques des zones de transition. Nulle part ailleurs. Le champignon inconnu de Drevaya vient de plus profond que les zones connues de la Fosse. Il a documenté et traité. Son registre a besoin d'un héritier.`,
  },

  // ── 288 · KESSRAVEL ──────────────────────────────────────────
  288: {
    timeline_position: { an: -1, lieu: 'Zones de transition Sylvera/Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'enfant de la lisière', texte: 'Né à la lisière de Sylvera. Les premières plantes qu\'il étudie poussent dans les deux milieux.' },
      { titre: 'Le financement Convergence', texte: 'À 30 ans, Graveth lui propose ressources et accès contre des rapports réguliers. Il accepte parce que sa recherche en a besoin. Il sait que la friction sur les usages viendra.' },
      { titre: 'Le rapport qui manquait', texte: 'Il retient une découverte 4 mois pour comprendre le mécanisme avant de transmettre. Graveth demande si quelque chose manque. Il dit que c\'est en cours.' },
      { titre: 'L\'adaptation racinaire', texte: 'Certaines espèces sylvanes des zones de transition ont développé une adaptation partielle à l\'exposition fongique prolongée. Il la transmet à Graveth. Il attend de voir ce qu\'il en fait.' },
      { titre: 'Aelvyn en parallèle', texte: 'Aelvyn travaille sur la reconstruction du réseau racinaire perdu — angle complémentaire au sien. Collaboration impossible à cause des affiliations.' },
    ],
    sorts: ['Spores toxiques', 'Racines défensives', 'Analyse de terrain'],
    relations: [
      { id: 43, nom: 'Graveth', type: 'allié', note: 'Financeur et destinataire des rapports. Relation fonctionnelle sous surveillance éthique.' },
      { id: 119, nom: 'Aelvyn', type: 'contact_nécessaire', note: 'Recherches complémentaires. Collaboration impossible à cause des affiliations.' },
    ],
    lore_long: `Kessravel a découvert que certaines espèces sylvanes développent une adaptation partielle à l'exposition fongique prolongée. Il a transmis à Graveth. Il attend de voir ce qu'il en fait. Aelvyn travaille sur un angle complémentaire. Ils ne peuvent pas collaborer à cause des affiliations contradictoires.`,
  },

  // ── 289 · DREVKETH ──────────────────────────────────────────
  289: {
    timeline_position: { an: -1, lieu: 'Zones de frontière Sylvera/Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La frontière comme terrain', texte: 'Né à Ormn-Dur. Il passe son enfance dans les zones de transition plutôt que dans les mines. À 16 ans, il commence à cataloguer les espèces hybrides sans nom.' },
      { titre: 'Le rejet institutionnel', texte: 'À 24 ans, refus de la Technocratie — hors-catégorie. À 26 ans, refus des Conservateurs — pas entièrement sylvanes. Il continue de lui-même.' },
      { titre: 'La Fosse et ses espèces', texte: 'Il documente une espèce végétale qui pousse dans les vapeurs fongiques sans être affectée négativement. La Technocratie met 8 mois à répondre que ses méthodes ne sont pas standardisées.' },
      { titre: 'Drekkel', texte: 'Drekkel demande l\'accès à ses archives via les institutions — refus institutionnel. Le contacte directement 3 ans plus tard. Ils échangent pendant 6 mois.' },
      { titre: 'L\'archive invisible', texte: '12 ans d\'observations sur des espèces qui n\'existent dans aucun catalogue. Accessibles uniquement si on connaît son existence et qu\'on le trouve.' },
    ],
    sorts: ['Toxine naturelle', 'Réseau racinaire', 'Brume de transition'],
    relations: [
      { id: 145, nom: 'Drekkel', type: 'allié', note: 'Seul contact scientifique sérieux. Connaît l\'étendue de ses archives.' },
    ],
    lore_long: `Drevketh documente des espèces que personne d'autre ne catalogue depuis 12 ans. Refusé par la Technocratie et les Conservateurs. Ses carnets couvrent des espèces de frontière potentiellement importantes pour comprendre la zone fongique — accessibles uniquement si on sait qu'il existe. Drekkel est le seul à en connaître l'étendue.`,
  },

  // ── 290 · SYLVETHRAK ──────────────────────────────────────────
  290: {
    timeline_position: { an: -1, lieu: 'Frontière Sylvera/Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La forêt sous la forêt', texte: 'À 14 ans, il découvre que certains réseaux de mycéliums de Sylvera s\'étendent jusqu\'aux zones chthoniennes — invisiblement, sous le sol.' },
      { titre: 'Le premier client chthonien', texte: 'À 22 ans, il vend ses champignons médicinaux à un mineur Chthonien. La réputation s\'étend. Il couvre les deux communautés.' },
      { titre: 'La commande inhabituellement grande', texte: 'Thyrum commande 10 fois le volume habituel. Il livre. Deux mois plus tard, il comprend que cette commande a rendu acceptable une réduction des mesures préventives autour de la Fosse.' },
      { titre: 'La limite non tracée', texte: 'Il ne refuse pas la commande suivante. Il demande à Thyrum pourquoi le volume a changé. La réponse est vague. Il la note.' },
      { titre: 'Les deux registres', texte: 'Il vend à Thyrum (implications problématiques) et à Kraethyn (ce qu\'il approuve). La ligne entre les deux types de transactions reste non tracée.' },
    ],
    sorts: ['Spores enchevêtrantes', 'Croissance fongique', 'Toxine dosée'],
    relations: [
      { id: 132, nom: 'Thyrum', type: 'allié', note: 'Client principal. Les implications de ses commandes sont devenues problématiques.' },
      { id: 122, nom: 'Kraethyn', type: 'allié', note: 'Client côté Sylvan. Ses commandes soutiennent ce qu\'il approuve.' },
    ],
    lore_long: `Sylvethrak vend des champignons aux Sylvans et aux Chthoniens. La commande anormalement grande de Thyrum il y a 3 ans a contribué à rendre viable une réduction des mesures préventives autour de la Fosse. Il le sait maintenant. La ligne entre les transactions qu'il est prêt à faire et celles qu'il ne l'est pas reste non tracée.`,
  },

  // ── 291 · THALVETH ──────────────────────────────────────────
  291: {
    timeline_position: { an: -1, lieu: 'Côtes de Thalassyr', arc: 'Silence des Vents' },
    histoire: [
      { titre: 'Sylvan côtière', texte: 'Née à la frontière de Sylvera proche de Thalassyr. Apprend à nager avant de grimper aux arbres. L\'Eau aussi naturel que la Plante.' },
      { titre: 'La question des algues', texte: 'À 23 ans, elle remarque que certaines algues marines ont des propriétés cellulaires similaires aux arbres-mémoire sylvans. Elle se demande si les algues peuvent enregistrer quelque chose.' },
      { titre: 'La réaction des Conservateurs', texte: 'Sa proposition à Sylvae crée une tension — certains Conservateurs y voient une désertion. Elle maintient : comprendre une alternative n\'est pas abandonner l\'original. Sylvae finance, avec réserves.' },
      { titre: 'Le courant de Lysara', texte: 'Ses algues les plus denses poussent dans les zones des anciens courants naturels — ceux d\'avant le Silence des Vents. Elle cherche le mécanisme physique sans savoir que la réponse implique Lysara.' },
      { titre: 'La lacune', texte: 'Elle a des données prometteuses. Elle a une lacune : pourquoi les algues sont si denses dans les anciens courants. La réponse implique un contexte historique qu\'elle n\'a pas.' },
    ],
    sorts: ['Filet d\'algues', 'Courant mémoriel', 'Racines marines'],
    relations: [
      { id: 31, nom: 'Sylvae', type: 'mentor', note: 'Finance avec réserves. Tension éthique maintenue — alternative vs restauration.' },
      { id: 14, nom: 'Lysara', type: 'contact_nécessaire', note: 'La réponse à sa lacune principale. Ne sait pas que Lysara est impliquée.' },
    ],
    lore_long: `Thalveth cherche une alternative aux arbres-mémoire dans les algues marines de Thalassyr. Les zones les plus riches en algues-mémoire correspondent aux anciens courants naturels d'avant le Silence des Vents. Elle cherche le mécanisme physique. Elle ne sait pas que la réponse implique Lysara.`,
  },

  // ── 292 · AELVETHRIS ──────────────────────────────────────────
  292: {
    timeline_position: { an: -1, lieu: 'Routes côtières Thalassyr/Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'Thalassyr et les voyages', texte: 'Née à Thalassyr d\'une famille de marins. L\'élément Plante d\'une grand-mère Sylvan lui donne une sensibilité aux espèces végétales rare chez les Néréides.' },
      { titre: 'La première semence', texte: 'À 27 ans, Thalvae lui confie un paquet de semences dans un contenant camouflé. Elle comprend sans qu\'on le lui dise. Elle accepte.' },
      { titre: 'L\'inspection de port', texte: 'Ses caches passent une inspection. Elle améliore ses compartiments. Même après une réussite.' },
      { titre: 'La liste des espèces interdites', texte: 'Thalvae lui montre la liste officielle — les espèces "à effacer" par l\'Empire. Elles correspondent exactement à ce qu\'elle transporte depuis 5 ans.' },
      { titre: 'Les 7 destinations', texte: 'Elle livre à 7 destinations régulières où des Dissidentes et des Indépendants stockent et cultivent. Elle ne connaît pas la plupart des noms des destinataires — par conception.' },
    ],
    sorts: ['Courant d\'échappée', 'Filet de semences', 'Navigation instinctive'],
    relations: [
      { id: 117, nom: 'Thalvae', type: 'allié', note: 'Source des semences et des destinations. Relation initiale claire et professionnelle.' },
      { id: 82, nom: 'Sorthel', type: 'allié', note: 'Partage de routes maritimes alternatives. Complémentarité de compétences.' },
    ],
    lore_long: `Aelvethris transporte des semences que l'Empire veut effacer. Elle a vu la liste officielle — les espèces classées "nuisibles" ou "non-stratégiques" qu'elle transporte depuis 5 ans. Ses caches dans la cale ont passé 3 inspections de port. Elle les améliore après chaque inspection, même celles réussies.`,
  },

  // ── 293 · SYLKRAVEL ──────────────────────────────────────────
  293: {
    timeline_position: { an: -1, lieu: 'Entre Sylvera et Thalassyr', arc: 'Silence des Vents' },
    histoire: [
      { titre: 'La côte et la forêt', texte: 'Née dans un village côtier proche de Sylvera. Alternait entre les deux biomes depuis l\'enfance. L\'Eau vient naturellement avec l\'environnement.' },
      { titre: 'La découverte accidentelle', texte: 'À 28 ans, elle improvise avec des espèces marines pour un marin Néréide infecté. La combinaison fonctionne mieux que prévu. Elle commence à expérimenter.' },
      { titre: 'Le choix de mobilité', texte: 'Les Conservateurs et les médecins portuaires lui proposent des postes fixes. Elle refuse les deux — un poste fixe la rend utile à une faction et inutile à l\'autre.' },
      { titre: 'Les contenants d\'eau salée', texte: 'Ses plantes sylvanes médicinales survivent indéfiniment dans des contenants d\'eau salée. Contre-intuitif, reproductible. Ça change ses routes de soin.' },
      { titre: 'Sylvethys', texte: 'Deux croisements avec Sylvethys — guérisseuse itinérante neutre avec la même éthique. Pas de secrets échangés. Des techniques échangées.' },
    ],
    sorts: ['Soin végétal accéléré', 'Courant protecteur', 'Mélange d\'urgence'],
    relations: [
      { id: 122, nom: 'Kraethyn', type: 'mentor', note: 'A transmis des savoirs sylvans de soin.' },
      { id: 272, nom: 'Sylvethys', type: 'allié', note: 'Deux croisements. Échange de techniques. Confiance immédiate.' },
    ],
    lore_long: `Sylkravel soigne des gens entre les deux biomes. Ses plantes sylvanes médicinales survivent dans des contenants d'eau salée — contre-intuitif, reproductible, documenté, non partagé avec une institution. Elle a refusé des postes fixes dans les deux régions. Elle est dans les deux milieux assez régulièrement pour que la transition soit continue.`,
  },

  // ── 294 · VORNKETH ──────────────────────────────────────────
  294: {
    timeline_position: { an: -1, lieu: 'Thalassyr/Sylvera (route diplomatique)', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'Le port et la forêt', texte: 'Né à Thalassyr d\'une mère diplomate qui négociait avec des marchands sylvans. Grandit dans les allers-retours entre les deux cultures.' },
      { titre: 'L\'accord de 47', texte: 'Son premier grand accord : 8 mois de négociation. Il comprend que son travail consiste à trouver une solution que les deux parties peuvent présenter à leurs constituants comme une victoire.' },
      { titre: 'La tension de factions', texte: 'Les tensions Conservateurs/Gardiens affectent les exportations de bois. Il maintient les échanges en reformulant les clauses de force majeure sans nommer la cause politique.' },
      { titre: 'La limite du rôle', texte: 'Un négociateur Conservateur lui dit que les accords commerciaux ne règlent pas le problème de fond. Il répond : sans les accords, il n\'y a plus de canal pour parler du problème de fond non plus.' },
      { titre: 'Les deux accords fragiles', texte: 'Deux des 4 accords actuels sont sous pression. Il prépare des révisions préventives avec des clauses de flexibilité qui n\'existent pas encore.' },
    ],
    sorts: ['Flux de négociation', 'Réseau racinaire', 'Lecture de courant'],
    relations: [
      { id: 178, nom: 'Velok', type: 'allié', note: 'Coordination sur les accords terrestres dans l\'Isthme. Monitoring des tensions.' },
      { id: 83, nom: 'Tyraneth', type: 'allié', note: 'Même réseau Confédération, angles différents.' },
    ],
    lore_long: `Vornketh maintient 4 accords commerciaux entre Thalassyr et Sylvera. Deux sont sous pression à cause des tensions entre Conservateurs et Gardiens. Il prépare des révisions préventives. Sans ces accords, il n'y a plus de canal pour parler du problème de fond.`,
  },

  // ── 295 · THALVAEL ──────────────────────────────────────────
  295: {
    timeline_position: { an: -1, lieu: 'Thalassyr (missions impériales)', arc: 'Silence des Vents' },
    histoire: [
      { titre: 'Sylvera et son opposé', texte: 'Né à Sylvera dans une famille non-affiliée. Rejoint l\'Empire à 25 ans pour des raisons pratiques : financement, équipement, protection.' },
      { titre: 'La première cartographie', texte: 'Sa première mission : 6 mois, 340 pages. L\'Empire utilise ses conclusions pour planifier 3 sites d\'extraction. Il voit les sites. Il reprend ses cartographies.' },
      { titre: 'Solvara et les zones', texte: 'Solvara utilise ses chiffres dans une procédure légale. Il témoigne — confirme ses données. La procédure est perdue. L\'extraction a lieu.' },
      { titre: 'Les projections classifiées', texte: 'Il calcule : 23 ans pour les zones les plus fragiles avant épuisement. Il inclut ces projections dans ses rapports internes. Ils sont classifiés.' },
      { titre: 'Les données et leur usage', texte: 'Il continue à inclure les projections parce qu\'une carte sans projections est incomplète. C\'est sa limite actuelle de résistance.' },
    ],
    sorts: ['Croissance défensive', 'Flux évasif', 'Analyse de zone'],
    relations: [
      { id: 35, nom: 'Aeris', type: 'mentor', note: 'Supérieure indirecte. Ses rapports remontent vers elle.' },
      { id: 91, nom: 'Solvara', type: 'rival', note: 'A utilisé ses données pour une procédure légale. Il a témoigné. Elle a perdu.' },
    ],
    lore_long: `Thalvael sait que les zones qu'il cartographie seront épuisées dans 23 à 45 ans. Il a calculé ces projections, les inclut dans ses rapports internes classifiés. Si elles étaient publiques, Solvara pourrait les utiliser. Elles ne sont pas publiques. Il se dit que si ce n'était pas lui, ce serait quelqu'un de moins compétent.`,
  },

  // ── 296 · KAESYLVAE ──────────────────────────────────────────
  296: {
    timeline_position: { an: -1, lieu: 'Sylvera (exil)', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'L\'écoute des arbres', texte: 'À 50 ans, elle perçoit clairement le réseau que les arbres forment entre eux — connexions longue distance entre des arbres séparés par des centaines de kilomètres. Elle suppose que tous les Sylvans l\'entendent.' },
      { titre: 'La découverte de l\'exception', texte: 'À 80 ans, elle réalise que sa perception longue distance est exceptionnelle. Les autres perçoivent les réseaux locaux. Elle perçoit quelque chose de plus vaste.' },
      { titre: 'Le deuxième cycle', texte: 'Elle avait 120 ans lors de la première destruction. Elle a senti le réseau se fracturer. Après : des zones de silence, des connexions manquantes, des connexions nouvelles.' },
      { titre: 'L\'exil', texte: 'Exilée il y a 30 ans — pas par contrainte. Les deux factions voulaient utiliser ce qu\'elle savait pour leurs objectifs opposés. Elle choisit de n\'appartenir à aucune.' },
      { titre: 'Sylindra et le nœud', texte: 'Le fragment de réseau que Sylindra étudie est dans une zone que le réseau longue distance montre comme un nœud important. Première opportunité de transmission complète depuis 40 ans.' },
    ],
    sorts: ['Connexion réseau', 'Perception fée étendue', 'Appel de forêt'],
    relations: [
      { id: 33, nom: 'Thalorn', type: 'allié', note: 'Venu il y a 40 ans. A pris des notes. N\'a pas entièrement compris.' },
      { id: 37, nom: 'Sylindra', type: 'contact_nécessaire', note: 'Étudie un fragment du réseau — premier depuis 40 ans à pouvoir entendre ce qu\'elle dit.' },
    ],
    lore_long: `Kaesylvae a 220 ans. Elle perçoit le réseau longue distance que les arbres forment entre les régions. Elle s'est exilée il y a 30 ans parce que les deux factions voulaient utiliser ça pour leurs objectifs opposés. Sylindra étudie un fragment que le réseau montre comme un nœud important. Première conversation potentiellement complète depuis 40 ans.`,
  },

  // ── 297 · THALVRIS ──────────────────────────────────────────
  297: {
    timeline_position: { an: -1, lieu: 'Routes entre Sylvera et Thalassyr', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'La frontière comme école', texte: 'Né à la frontière Sylvera/Thalassyr. Il connaît les routes informelles depuis l\'enfance — 12 ans de connaissance avant que les Dissidentes ne l\'approchent.' },
      { titre: 'La première semence', texte: 'À 29 ans, Sylketh lui confie des semences d\'une espèce rare proche d\'une zone d\'extraction. Il comprend l\'enjeu en touchant le paquet — des siècles d\'évolution dans des graines minuscules.' },
      { titre: 'Le contrôle de route', texte: 'Il y a 2 ans, un contrôle impérial l\'intercepte. Ses caches fonctionnent. Il met 3 semaines à rerouter avant de reprendre.' },
      { titre: 'Les documents de Narevael', texte: 'Il accepte un transport non-semencier sans examiner le contenu. Il réalise que les documents concernent des opérations qu\'il n\'aurait peut-être pas voulu faciliter. Il décide d\'examiner avant d\'accepter.' },
      { titre: 'La séparation', texte: 'Il sépare maintenant : semences (conviction claire, pas de conditions) et autres transports (examen au cas par cas). Cette séparation crée des frictions dans le réseau.' },
    ],
    sorts: ['Semences de barrière', 'Désengagement aquatique', 'Camouflage végétal'],
    relations: [
      { id: 116, nom: 'Sylketh', type: 'allié', note: 'Source des espèces à transporter et de leur priorité.' },
      { id: 84, nom: 'Narevael', type: 'allié', note: 'Contact maritime. Transport non-semencier a créé une tension sur les conditions.' },
    ],
    lore_long: `Thalvris transporte des semences avec des caches réparties sur lui. Il y a 2 ans, un contrôle impérial — ses caches ont fonctionné. L'incident avec les documents de Narevael l'a amené à exiger un examen préalable pour les transports non-semenciers. Semences : pas de conditions. Reste : cas par cas. Ça crée des frictions.`,
  },

  // ── 298 · ORVKETHYN ──────────────────────────────────────────
  298: {
    timeline_position: { an: -1, lieu: 'Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'L\'absorption accidentelle', texte: 'À 30 ans — jeune pour une Fée — il touche un arbre-mémoire mourant pendant la Faim des Racines. L\'arbre lui transfère 300 ans de mémoire émotionnelle. Il reste inconscient 3 jours.' },
      { titre: 'L\'apprentissage avec Orvketh', texte: 'Orvketh lui apprend une technique de séparation — comment distinguer ses souvenirs des souvenirs de l\'arbre. Il y travaille depuis 50 ans.' },
      { titre: 'La première visite de Thalorn', texte: 'Thalorn vient avec curiosité scientifique. Orvkethyn décrit une interaction que l\'arbre avait eue avec Thalorn il y a 60 ans — depuis la perspective de l\'arbre. Thalorn s\'arrête.' },
      { titre: 'La deuxième visite de Thalorn', texte: 'Cette fois, Thalorn veut savoir ce que l\'arbre a enregistré sur des événements spécifiques. La conversation dure 4 heures. Thalorn prend des notes.' },
      { titre: 'Thalvelyn et la vérification', texte: 'Thalvelyn lui demande si les souvenirs de l\'arbre correspondent à ce que ses jardins enregistrent actuellement. Première utilisation concrète de ce qu\'il porte.' },
    ],
    sorts: ['Mémoire émotionnelle', 'Croissance ancienne', 'Absorption mémorielle'],
    relations: [
      { id: 33, nom: 'Thalorn', type: 'allié', note: 'Deux visites. A une perspective sur lui-même qu\'il ne peut obtenir nulle part ailleurs.' },
      { id: 129, nom: 'Orvketh', type: 'mentor', note: 'A appris la technique de séparation.' },
      { id: 280, nom: 'Thalvelyn', type: 'allié', note: 'A posé la bonne question sur la correspondance. Première collaboration concrète.' },
    ],
    lore_long: `Orvkethyn a absorbé 300 ans de mémoire émotionnelle d'un arbre mourant. Il avait 30 ans — jeune pour une Fée. Thalorn est venu deux fois : curiosité scientifique, puis quand il a compris que les souvenirs de l'arbre incluent des interactions avec lui il y a 60 ans. Cette perspective sur lui-même n'existe nulle part ailleurs. À qui appartient la mémoire d'un mort ?`,
  },

  // ── 299 · SYLVETHKAEL ──────────────────────────────────────────
  299: {
    timeline_position: { an: -1, lieu: 'Sylvera', arc: 'Faim des Racines' },
    histoire: [
      { titre: 'Les chants de la famille', texte: 'Née dans une famille avec une tradition de chant sylvan. La Fée secondaire lui donne une résonance dans le chant que les autres n\'ont pas. À 15 ans, les arbres autour de chez elle commencent à répondre.' },
      { titre: 'La théorie de Sylvae', texte: 'Sylvae lui expose la théorie : les chants-mémoire anciens avaient une fonction active dans l\'entretien de la mémoire des arbres. Elle commence à tester si l\'inverse est possible.' },
      { titre: 'Le premier arbre', texte: 'Elle chante 2 heures par jour pendant 3 semaines à un arbre-mémoire centenaire. Les feuilles répondent. La mémoire est-elle restaurée ? Elle n\'a pas de moyen de vérifier. Elle continue.' },
      { titre: 'Sylketh et les fragments', texte: 'Sylketh lui apporte des fragments de chants anciens — variantes régionales avec des strates chronologiques. En les combinant, elle reconstitue des versions plus anciennes.' },
      { titre: 'Les 12 arbres', texte: '3 répondent clairement. 5 modérément. 4 ne répondent pas de façon perceptible. Elle documente et cherche le pattern.' },
    ],
    sorts: ['Chant de croissance', 'Résonance fée', 'Voix de forêt'],
    relations: [
      { id: 31, nom: 'Sylvae', type: 'mentor', note: 'A transmis la théorie. Soutien prudent — ne valide pas encore les résultats.' },
      { id: 116, nom: 'Sylketh', type: 'allié', note: 'Source de fragments de chants anciens. Améliore la qualité des chants transmis.' },
      { id: 298, nom: 'Orvkethyn', type: 'contact_nécessaire', note: 'Pourrait vérifier sa méthode via les souvenirs de l\'arbre. Conversation non encore eue.' },
    ],
    lore_long: `Sylvethkael enseigne les chants perdus aux arbres-mémoire de Sylvera. Les feuilles bougent quand elle chante — même sans vent. Est-ce une réponse ? 12 arbres de travail, 3 répondent clairement, 4 ne répondent pas. La distinction entre "ça fonctionne" et "je veux que ça fonctionne" lui résiste. Elle continue de chanter.`,
  },

  // ── 300 · DREKROVAL ──────────────────────────────────────────
  300: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les piliers comme famille', texte: 'Né dans un quartier de techniciens. À 12 ans, il connaissait les noms des piliers principaux avant ceux de ses cousins. Son père l\'a emmené en tournée de surveillance pendant 3 ans.' },
      { titre: 'L\'intégration à la Technocratie', texte: 'À 28 ans, il détecte une micro-fissure dans le Pilier 7 avant qu\'elle devienne visible. Promu. Il comprend ce que la Technocratie valorise.' },
      { titre: 'Le rapport classifié', texte: 'À 41 ans, un rapport sur les tensions anomales autour de la Fosse est classifié le lendemain de sa remise. Ni explication ni retour. Il continue de collecter les mêmes données.' },
      { titre: 'Les anomalies récurrentes', texte: 'Sur 4 ans supplémentaires, les anomalies autour de la Fosse suivent un cycle. Pas catastrophique, mais régulier. Ce pattern n\'existait pas avant l\'ouverture de la Fosse.' },
      { titre: 'La surveillance continue', texte: 'Il surveille 47 piliers principaux. Ses données sur la Fosse sont dans ses archives personnelles — pas illégalement, mais pas dans les remontées officielles non plus.' },
    ],
    sorts: ['Lecture sismique', 'Ancrage de roche', 'Onde de fond'],
    relations: [
      { id: 131, nom: 'Drekvar', type: 'allié', note: 'Pose des questions précises sur des zones sensibles. Drekroval répond partiellement.' },
    ],
    lore_long: `Drekroval surveille 47 piliers d'Ormn-Dur. Son rapport sur la Fosse a été classifié. Il continue de collecter les données. Les anomalies suivent un cycle de 8-12 ans — le prochain pic approche selon ses projections. Drekvar (131) lui a posé des questions trop précises sur le Pilier 12. Il a répondu sur la structure. Il n'a pas mentionné les passages que ses capteurs détectent dans les galeries adjacentes.`,
  },

  // ── 301 · THYRVAKH ──────────────────────────────────────────
  301: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'apprentissage double', texte: 'Né dans une famille de mineurs, apprentissage de la roche puis de l\'architecture de sol. La combinaison était sa propre idée, à 15 ans.' },
      { titre: 'Le premier tunnel mixte', texte: 'À 32 ans, un tunnel roche/sol pour traverser une zone que les architectes standards refusaient. La Confédération accepte faute d\'alternative. Le tunnel tient 8 ans plus tard.' },
      { titre: 'La demande de Draven II', texte: 'Draven II (40) lui demande une expertise sur des tunnels dans une zone classifiée comme inaccessible. Draven II avait l\'accès. Thyrvakh a fourni l\'expertise sans poser de questions.' },
      { titre: 'Les fondations qui bougent', texte: 'Sur 3 projets récents en zone est, ses joints montrent des micro-déformations. Le sol se compresse lentement depuis le bas — probablement la Fosse. Il fait les calculs de compensation.' },
      { titre: 'Les trois projets en cours', texte: 'Un pour la Confédération, un pour Vorath (134), un dont le commanditaire a demandé l\'anonymat. Il sait probablement qui c\'est. Il n\'a pas posé la question.' },
    ],
    sorts: ['Joint de roche', 'Compression du sol', 'Fracture contrôlée'],
    relations: [
      { id: 134, nom: 'Vorath', type: 'allié', note: 'Mandataire principal. Confiance établie sur 12 ans.' },
      { id: 40, nom: 'Draven II', type: 'allié', note: 'Demandes dans des zones qu\'il connaît mieux qu\'il ne devrait. Thyrvakh répond sans poser de questions.' },
    ],
    lore_long: `Thyrvakh combine roche et sol stabilisé. Ses tunnels tiennent là où les méthodes standards refusent. Ses données récentes montrent une compression du sol venant du bas en zone est — compatible avec la Fosse Interdite. Un de ses trois projets en cours a un commanditaire anonyme. Il a construit selon les spécifications.`,
  },

  // ── 302 · KARGOVAL ──────────────────────────────────────────
  302: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Le quartier de transit', texte: 'Né dans un quartier d\'Ormn-Dur de passage. À 16 ans, il construisait des aménagements temporaires pour des familles qui ne pouvaient pas payer les artisans standards.' },
      { titre: 'Le premier Élu sans enregistrement', texte: 'À 27 ans, Ossira (44) lui signale une famille avec un enfant Élu Sol non-enregistré. Il construit un espace de vie dans une galerie désaffectée. Introuvable.' },
      { titre: 'La demande des Dissidentes', texte: 'Les Dissidentes lui demandent des refuges. Il accepte. La deuxième demande concerne du stockage d\'équipement. On lui dit que c\'est pour la défense. Il construit.' },
      { titre: 'Les usages détournés', texte: 'Deux de ses refuges Élus ont été utilisés comme points de transit Dissidents sans prévenir les résidents. Il confronte le contact. Il change les accès sans informer les Dissidentes.' },
      { titre: 'Les deux réseaux séparés', texte: 'Refuges pour Élus avec accès séparé que les Dissidentes n\'ont pas. Espaces Dissidents que les Élus ne connaissent pas. Cette séparation crée des frictions. Il maintient.' },
    ],
    sorts: ['Mur de sol', 'Scellement de roche', 'Réseau racinaire'],
    relations: [
      { id: 136, nom: 'Thyrvum', type: 'allié', note: 'Fournisseur de matériel. Sait qu\'il y a deux réseaux. Ne sait pas où est la frontière.' },
      { id: 44, nom: 'Ossira', type: 'allié', note: 'A fourni le premier contact avec des Élus non-enregistrés. Origine du réseau Élus.' },
      { id: 316, nom: 'Thyrveln', type: 'allié', note: 'Fournit des matériaux détournés. Ne demande pas les emplacements.' },
    ],
    lore_long: `Kargoval construit des refuges pour les Élus que la Technocratie voudrait recenser. Deux réseaux séparés — refuges pour Élus et espaces Dissidents — avec des accès différents. Personne d'autre que lui ne connaît les deux. Si quelque chose lui arrive, les deux réseaux perdent leur gardien simultanément. Il n'a pas encore résolu ce problème.`,
  },

  // ── 303 · VORDREKH ──────────────────────────────────────────
  303: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les carrières de la famille', texte: 'Né dans une famille de carriers depuis quatre générations. À 10 ans, il distingue les types de roche par leur son. À 30 ans, il a agrandi à trois carrières.' },
      { titre: 'La première vente à l\'Empire', texte: 'À 34 ans, contrat impérial pour de la roche. Six mois plus tard, un contact Dissident veut la même chose. Il accepte les deux. La politique n\'est pas son problème.' },
      { titre: 'La zone contestée', texte: 'La Technocratie et les Dissidentes lui envoient des injonctions contradictoires sur ses carrières nord. Il n\'a répondu à aucune des deux. Il a doublé sa sécurité.' },
      { titre: 'L\'accès à la périphérie de la Fosse', texte: 'Ses carrières profondes atteignent la zone périphérique. Il négocie : il n\'extrait pas dans les 200 mètres. En échange, les techniciens lui signalent les zones d\'instabilité.' },
      { titre: 'L\'équilibre des ventes', texte: 'Ventes en volume presque égal à l\'Empire, à la Technocratie et via intermédiaires à des parties non identifiées. Son comptable maintient l\'équilibre.' },
    ],
    sorts: ['Projection de roche', 'Stabilisation de terrain', 'Avalanche contrôlée'],
    relations: [
      { id: 74, nom: 'Dravel', type: 'allié', note: 'Client non-officiel le plus régulier. Ne précise jamais l\'usage. Vordrekh ne pose pas de questions.' },
    ],
    lore_long: `Vordrekh vend de la roche à toutes les factions. Ses carrières sont sur des zones contestées — il n'a répondu à aucune injonction. Il a doublé sa sécurité. Son accord avec les techniciens de la Fosse lui donne accès à des données de stabilité géologique que personne d'autre n'a. Il les a vendues une fois à un acheteur anonyme. La roche n'a pas de politique.`,
  },

  // ── 304 · DRAVKHOR ──────────────────────────────────────────
  304: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les niveaux inférieurs', texte: 'Né dans une famille de techniciens de fond. À 14 ans, il accompagne son père en maintenance. À 20 ans, ses propres circuits.' },
      { titre: 'La première affectation Fosse', texte: 'À 29 ans, affecté à la maintenance des couches géologiques autour de la Fosse. Peu demandent ce poste. Il accepte parce que c\'est la maintenance la plus complexe disponible.' },
      { titre: 'Le rapport non lu', texte: 'À 34 ans, rapport détaillé sur des modifications dans la zone frontière. Karm (41) dit "reçu et traité" après 6 semaines. Aucune modification des protocoles.' },
      { titre: 'L\'évolution non documentée', texte: 'La zone fongique a changé de composition sur 5 ans. Ses filtres standard s\'usent plus vite. Il commande des filtres renforcés sur budget personnel sans expliquer pourquoi.' },
      { titre: 'La maintenance continuée', texte: 'Rapports officiels selon les formulaires standard. Un second journal personnel documente ce que les formulaires ne permettent pas de décrire. Ni secret ni officiel.' },
    ],
    sorts: ['Compression géologique', 'Barrière de roche', 'Émanation contrôlée'],
    relations: [
      { id: 41, nom: 'Karm', type: 'allié', note: 'Supérieur direct qui ne lit pas les rapports en détail. Dravkhor envoie des rapports complets quand même.' },
    ],
    lore_long: `Dravkhor maintient les couches géologiques autour de la Fosse depuis vingt ans. Ses protocoles ont été écrits avant que la zone fongique évolue. Il les applique parce qu'il n'en a pas de nouveaux. Son journal personnel existe depuis 8 ans. Il n'est dans aucun système Technocratie. Personne n'a demandé à le voir.`,
  },

  // ── 305 · THYRKARGAL ──────────────────────────────────────────
  305: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La formation impériale', texte: 'Né à Ormn-Dur dans une famille dont le père travaillait pour les structures impériales. À 18 ans, intégré au programme de superviseurs — sélection basée sur résultats scolaires et loyauté familiale documentée.' },
      { titre: 'La première supervision', texte: 'À 40 ans, superviseur en chef des mines impériales. Il a augmenté les quotas de 23% depuis sa nomination. L\'Empire a noté l\'augmentation.' },
      { titre: 'La confrontation avec Draven II', texte: 'Draven II (40) dépose une objection formelle sur les quotas. Thyrkargal le rencontre. 4 heures de réunion. Draven II retire l\'objection. Thyrkargal réduit discrètement un quota secondaire de 8%.' },
      { titre: 'L\'accord non écrit', texte: 'Sur 5 ans, Draven II lui fournit des informations sur des sabotages planifiés. En échange, Thyrkargal maintient des conditions moins agressives dans certaines zones. Aucun de ces échanges n\'est documenté.' },
      { titre: 'La supervision stable', texte: 'Ses quotas sont atteints. Ses mines fonctionnent sans perturbations depuis 3 ans. L\'accord avec Draven II est la raison principale. Il ne peut pas le mentionner dans ses rapports.' },
    ],
    sorts: ['Autorité de roche', 'Sol d\'autorité', 'Extraction forcée'],
    relations: [
      { id: 40, nom: 'Draven II', type: 'rival', note: 'Adversaire officiel, partenaire non officiel. Deux échanges mutuellement utiles qui ne peuvent pas être documentés.' },
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Contact impérial pour ressources rares. Relation hiérarchique fonctionnelle.' },
    ],
    lore_long: `Thyrkargal supervise les mines impériales d'Ormn-Dur. La stabilité de ses quotas repose sur un accord non documenté avec Draven II (40) — son adversaire officiel. Draven II fournit des informations sur des sabotages. Thyrkargal maintient des conditions moins agressives dans certaines zones. Il documente chaque information reçue même si l'accord lui-même ne peut pas être écrit.`,
  },

  // ── 306 · KARVDREKH ──────────────────────────────────────────
  306: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La découverte de l\'immunité', texte: 'À 19 ans, elle oublie son masque dans une zone fongique légère. Aucun symptôme. Le médecin teste et reteste. L\'immunité est réelle.' },
      { titre: 'Les niveaux interdits', texte: 'À 25 ans, elle commence à travailler dans des zones que personne d\'autre ne peut atteindre sans équipement complet. Sa précision de travail dépasse celle de l\'équipement.' },
      { titre: 'L\'examen de la Convergence', texte: 'Graveth (43) envoie un chercheur sous couverture. Elle identifie la couverture au deuxième entretien. Elle coopère partiellement — assez pour qu\'ils sachent qu\'elle existe, pas assez pour qu\'ils aient tout.' },
      { titre: 'La question des enfants', texte: 'Un médecin mentionne que son immunité est probablement transmissible. Elle pose des questions sur les implications légales. Ses enfants seraient automatiquement enregistrés et évalués dès la naissance. Elle arrête de poser des questions.' },
      { titre: 'Le travail dans les zones profondes', texte: 'La Convergence continue d\'observer à distance. Elle continue de faire semblant de ne pas le voir. Kharven (140) lui a posé des questions sur son équipement de filtration. Elle répond qu\'elle a une technique qui compense.' },
    ],
    sorts: ['Vapeur souterraine', 'Ancrage de sol', 'Absorption fongique'],
    relations: [
      { id: 43, nom: 'Graveth', type: 'ennemi', note: 'La Convergence l\'observe. Elle coopère partiellement pour ne pas déclencher une action directe.' },
      { id: 140, nom: 'Kharven', type: 'allié', note: 'Travaille dans les mêmes zones. A posé des questions sur l\'équipement. Répond partiellement.' },
    ],
    lore_long: `Karvdrekh est immunisée aux vapeurs fongiques. Elle travaille sans équipement où les autres meurent. La Convergence le sait. Elle le sait. Aucun des deux n'a formalisé. Elle n'a pas eu d'enfants parce que son immunité est probablement transmissible. Ce calcul n'a été expliqué à personne.`,
  },

  // ── 307 · VORVAKH ──────────────────────────────────────────
  307: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les deux héritages', texte: 'Né d\'un père Chthonien et d\'une mère Umbrienne. À 15 ans, il réalise qu\'il supporte les vapeurs fongiques légères sans symptômes — une immunité partielle probablement liée au mélange.' },
      { titre: 'La première route', texte: 'À 23 ans, il cartographie les zones fongiques accessibles sans équipement. Les Dissidentes le trouvent 2 ans plus tard. Thyrvum (136) lui fait l\'offre : ses routes contre protection et information.' },
      { titre: 'Le passage qui a mal tourné', texte: 'Une zone fongique légère a changé de composition depuis sa dernière visite. La personne qu\'il fait passer a une réaction sévère. Il l\'extrait en urgence via une route non signalée. Elle survit.' },
      { titre: 'Les variations saisonnières', texte: 'La composition des vapeurs varie selon les saisons. Certaines zones sûres en hiver sont létales en été. Ses routes changent selon la saison. Il refuse les demandes qui ne correspondent pas aux conditions actuelles.' },
      { titre: 'Les routes saisonnières', texte: '6 routes actives selon les conditions. Deux fermées pour la saison. Une nouvelle zone en reconnaissance — elle pourrait être traversable maintenant. Il y va seul.' },
    ],
    sorts: ['Brume de sol', 'Vapeur fongique', 'Passage souterrain'],
    relations: [
      { id: 136, nom: 'Thyrvum', type: 'allié', note: 'Fournit les informations sur les checkpoints. Intermédiaire initial avec les Dissidentes.' },
      { id: 39, nom: 'Drevaya', type: 'allié', note: 'Fournit les noms des personnes à passer. Contact opérationnel direct.' },
    ],
    lore_long: `Vorvakh connaît les routes à travers les zones fongiques. Ses routes changent selon les saisons. Une zone en reconnaissance — si la composition est traversable, c'est une route de 3 heures de moins. S'il se trompe, c'est sa dernière reconnaissance. Il y va seul. Drevaya (39) a 4 passages en attente. Il peut en faire 2 cette saison.`,
  },

  // ── 308 · DREKPHAL ──────────────────────────────────────────
  308: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'apprentissage de la méthode', texte: 'Fils d\'un géologue de terrain. Formé à la collecte rigoureuse depuis l\'adolescence — étiquetage, conditionnement, chaîne de conservation. À 18 ans, autonome en zones standard.' },
      { titre: 'Le recrutement de la Convergence', texte: 'À 26 ans, la Convergence le recrute via intermédiaire pour de la recherche en environnement spécialisé. La zone fongique est plus complexe que les capteurs à distance le montrent. Il accepte.' },
      { titre: 'La question de l\'usage', texte: 'Après sa dixième mission, il demande à Graveth (43) ce que ses échantillons servent. La réponse mentionne de la recherche toxicologique comparative. Vrai, probablement — mais pas complet. Il ne pose pas de seconde question.' },
      { titre: 'L\'échantillon avec provenance particulière', texte: 'Un prélèvement dans une zone normalement interdite révèle une composition que les rapports officiels ne mentionnent pas. Une évolution de la zone fongique. Il transmet l\'échantillon. Pas la conclusion.' },
      { titre: 'Les missions en cours', texte: '3 à 4 missions par mois. Kharven (140) lui a posé des questions sur une zone couverte. Il partage des données de terrain — pas les données complètes envoyées à Graveth.' },
    ],
    sorts: ['Prélèvement offensif', 'Compaction de terrain', 'Nuage de spores'],
    relations: [
      { id: 43, nom: 'Graveth', type: 'allié', note: 'Contact de direction. Reçoit les zones, fournit les échantillons, ne questionne pas les usages officiellement.' },
      { id: 140, nom: 'Kharven', type: 'allié', note: 'Chercheure de terrain adjacente. Partage partiel de données.' },
    ],
    lore_long: `Drekphal prélève des échantillons fongiques pour la Convergence. Un de ses prélèvements a révélé une évolution de la zone fongique que les rapports officiels ne mentionnent pas. Il a envoyé l'échantillon. Il n'a pas envoyé la conclusion. Elle est dans ses notes personnelles.`,
  },

  // ── 309 · THYRKAVEL ──────────────────────────────────────────
  309: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La frontière comme terrain de jeu', texte: 'À 12 ans, il observe des champignons et des racines sylvanes dans le même espace sans que les deux se détruisent. Il note ça dans un carnet.' },
      { titre: 'Le terrain de recherche', texte: 'À 24 ans, il formalise ses observations en projet naturaliste. Aucune institution ne le finance. Il continue sur budget propre.' },
      { titre: 'Les archives de Valyx', texte: 'Les archives partielles de Valyx (38) suggèrent que la Convergence sait depuis longtemps que cette coexistence est possible. Ses découvertes confirment peut-être quelque chose qu\'on lui cache.' },
      { titre: 'La zone de Drevaya', texte: 'Drevaya (39) lui signale trois zones de coexistence anormalement stable. Ces zones correspondent à des configurations racinaires denses — probablement des réseaux anciens.' },
      { titre: 'Le pattern des zones stables', texte: '7 zones de coexistence stable cartographiées. Toutes correspondent à des configurations racinaires denses. Il n\'a pas encore décidé à qui transmettre cette conclusion.' },
    ],
    sorts: ['Réseau racinaire', 'Toxine ciblée', 'Croissance de frontière'],
    relations: [
      { id: 38, nom: 'Valyx', type: 'allié', note: 'Source dans les archives. Ses données suggèrent que la Convergence sait des choses que Thyrkavel redécouvre.' },
      { id: 39, nom: 'Drevaya', type: 'allié', note: 'A signalé des zones de coexistence stable. Connait ces zones pour d\'autres raisons non précisées.' },
    ],
    lore_long: `Thyrkavel étudie la coexistence entre les champignons de la Fosse et les réseaux racinaires sylvans. 7 zones de coexistence stable cartographiées — toutes avec des configurations racinaires denses. Les archives de Valyx (38) suggèrent que la Convergence le sait déjà. Il a décidé de ne pas leur transmettre ses données en priorité. Il n'a pas encore décidé à qui.`,
  },

  // ── 310 · KARGETHYN ──────────────────────────────────────────
  310: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La formation aux barrières', texte: '8 recrues au départ pour un programme de confinement spécialisé. Il en reste 3 actives. Les 5 autres ont quitté pour des raisons de santé ou ont eu des accidents. Il est le plus ancien.' },
      { titre: 'La première barrière autonome', texte: 'À 31 ans, première gestion autonome d\'une barrière de confinement. Deux incidents mineurs en 18 mois — brèches détectées et colmatées avant propagation. Il analyse les causes dans son registre personnel.' },
      { titre: 'La pression croissante', texte: 'À 38 ans, rapport documentant l\'augmentation lente de la pression fongique sur ses barrières. La Technocratie répond que les barrières sont adéquates et la pression dans les marges. Il continue de documenter.' },
      { titre: 'Le calcul de saturation', texte: 'Horizon de saturation de 12-18 ans au rythme actuel — 8-10 ans si la pression continue d\'accélérer comme depuis 2 ans. La Technocratie a un horizon différent dans ses modèles.' },
      { titre: 'Les barrières à double rythme', texte: 'Il vérifie deux fois par cycle. Les protocoles en exigent une. Il a constitué un stock tampon de 2 cycles non déclaré — si Thyss (42) ne peut plus fournir, les barrières tiennent pendant qu\'il cherche une solution.' },
    ],
    sorts: ['Barrière chimique', 'Ancrage de confinement', 'Détection de saturation'],
    relations: [
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Fournisseur de matériaux critiques. Chaîne identifiée comme fragilité. Stock tampon constitué en réponse.' },
    ],
    lore_long: `Kargethyn maintient les barrières entre la zone fongique et les zones habitées d'Ormn-Dur. La pression derrière elles augmente lentement. Ses calculs donnent 8-18 ans selon l'accélération. La Technocratie a un horizon plus long. Il a constitué un stock tampon de 2 cycles sans le déclarer — la Technocratie l'aurait redistribué.`,
  },

  // ── 311 · DRAVTHYR ──────────────────────────────────────────
  311: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'apprentissage de l\'apothicaire', texte: 'Apprenti d\'un apothicaire souterrain à 14 ans, spécialisé en toxicologie minière. À 22 ans, il reprend la boutique à la retraite de son maître.' },
      { titre: 'La Fosse comme nouveau terrain', texte: 'Après l\'ouverture de la Fosse, ses antidotes standards ne couvrent pas les nouvelles vapeurs. Il passe 2 ans à développer les premières formules. Il documente les échecs.' },
      { titre: 'La rupture de composition', texte: 'À 40 ans, ses antidotes pour une zone ne fonctionnent plus — la composition a changé. Drevaya (39) lui fournit des données d\'urgence. Il reformule en 3 semaines. Il n\'a pas encore demandé comment Drevaya a eu les données en 3 jours.' },
      { titre: 'La dépendance aux données de Drevaya', texte: 'Ses reformulations réussies sur 8 ans correspondent toutes à des périodes où Drevaya lui fournit des données. Sans ces données, ses formules évoluent plus lentement avec plus d\'échecs intermédiaires.' },
      { titre: 'Les formules actuelles', texte: '12 formules actives. Une en cours de révision — Drevaya l\'a alerté d\'une modification de composition. Il attend les données précises. Dans l\'intervalle, l\'ancienne formule est partiellement efficace.' },
    ],
    sorts: ['Antidote en combat', 'Sol protecteur', 'Extraction de poison'],
    relations: [
      { id: 39, nom: 'Drevaya', type: 'allié', note: 'Source de données de composition fongique. Essentielle aux reformulations. Il n\'a pas posé la question sur comment elle les obtient.' },
      { id: 145, nom: 'Drekkel', type: 'allié', note: 'Distributeur dans les zones non couvertes directement.' },
    ],
    lore_long: `Dravthyr fabrique des antidotes pour les vapeurs fongiques. Drevaya (39) lui fournit des données de composition qui arrivent vite, sans explication. Il n'a pas posé la question — il préfère ne pas savoir ce qui pourrait mettre fin à ce qu'il reçoit. Une formule en attente de révision. Dans l'intervalle, protection partielle pour les travailleurs concernés.`,
  },

  // ── 312 · VORKHETH ──────────────────────────────────────────
  312: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La formation impériale spécialisée', texte: 'Sélectionné à 20 ans dans un programme de recherche toxicologique avancée dans des installations de la Citadelle dont il ne peut pas mentionner le nom. À 25 ans, affecté à Ormn-Dur.' },
      { titre: 'Les premiers tests', texte: 'À 26 ans, premiers tests sur des travailleurs dans des zones à concentrations légèrement supérieures aux seuils annoncés. Rapports présentés à Thyss (42) comme "observations de terrain". Validés sans commentaire.' },
      { titre: 'Le sujet qui a posé des questions', texte: 'À 31 ans, un travailleur réalise que ses symptômes ne correspondent pas aux rapports de sécurité. Il pose des questions. Vorkheth prépare une réponse alternative. Le travailleur arrête de poser des questions.' },
      { titre: 'Les données sur les Élus', texte: 'Directive de Thyss (42) : priorité aux Élus non-enregistrés — leur réponse physiologique intéresse spécifiquement la Citadelle. Il reçoit une liste de sujets potentiels dans les zones de la Fosse.' },
      { titre: 'Les tests en cours', texte: '3 tests en parallèle. Les sujets ne savent pas. Ses rapports utilisent un vocabulaire de santé occupationnelle. Les données réelles sont dans une archive à accès Citadelle uniquement. Il y pense de moins en moins en termes éthiques.' },
    ],
    sorts: ['Vapeur ciblée', 'Ancrage', 'Dissipation chimique'],
    relations: [
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Contact impérial direct. Valide les rapports. Ne connaît pas tous les détails des tests sur Élus.' },
    ],
    lore_long: `Vorkheth teste les effets des vapeurs fongiques sur des travailleurs de la Fosse sans leur consentement. Ses données vont à la Citadelle. La directive de Thyss (42) priorise les Élus non-enregistrés. Il y pense de moins en moins en termes éthiques depuis 3 ans. Ce n'est pas qu'il a conclu que c'est acceptable. C'est qu'il a arrêté de poser la question.`,
  },

  // ── 313 · THYRVRAL ──────────────────────────────────────────
  313: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'ingénierie comme vocation', texte: 'Fils d\'un ingénieur structural. À 20 ans, il identifie les limites des méthodes standards pour les profondeurs extrêmes. À 25 ans, premiers prototypes de joints roche/acier.' },
      { titre: 'Le premier tunnel profond', texte: 'À 30 ans, premier tunnel profond avec ses structures mixtes. La structure tient. La Technocratie lui ouvre les projets que les autres ingénieurs ne peuvent pas couvrir.' },
      { titre: 'La commande de Thyss', texte: 'À 38 ans, Thyss (42) lui commande des structures pour une zone décrite comme "secteur de maintenance avancée". Les dimensions correspondent à un accès à la Fosse profonde. Il pose des questions. La réponse est vague. Il construit.' },
      { titre: 'Les structures qu\'il reconnaît', texte: 'Sur un plan de la Fosse, il reconnaît ses propres structures dans des zones qu\'on lui avait décrites autrement lors des commandes. Ses tunnels ont étendu l\'accès à des parties de la Fosse qu\'il n\'avait pas l\'intention de rendre accessibles.' },
      { titre: 'La commande en cours', texte: 'Nouvelle commande de Thyss pour les niveaux les plus profonds de la Fosse. Il reconnaît les spécifications. Il n\'a pas encore répondu. C\'est la première fois en 15 ans.' },
    ],
    sorts: ['Tunnel instantané', 'Armure d\'acier', 'Effritement contrôlé'],
    relations: [
      { id: 134, nom: 'Vorath', type: 'allié', note: 'Mandataire pour tunnels profonds critiques. Confiance technique longue durée.' },
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Commanditaire de structures pour emplacements partiellement déclarés. Commande en cours non encore acceptée.' },
    ],
    lore_long: `Thyrvral construit des tunnels profonds avec des joints roche/acier. Il a reconnu ses propres structures dans des zones de la Fosse qu'on lui avait décrites autrement lors des commandes. Ses tunnels ont étendu l'accès à des parties de la Fosse qu'il ne savait pas être la destination. Une nouvelle commande est sur son bureau. Il n'a pas encore répondu. C'est la première fois en 15 ans.`,
  },

  // ── 314 · KARGVORN ──────────────────────────────────────────
  314: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les deux apprentissages', texte: 'Né d\'un père Chthonien et d\'une mère Pyrienne. Apprentissage de mineur avec le père, forgeron l\'été chez un oncle à Varkhôl. Il revient avec les deux disciplines.' },
      { titre: 'Le premier séisme et la première fondation', texte: 'À 27 ans, un séisme endommage le quartier. La seule fondation intacte combine de la roche et des ancrages acier improvisés. Il passe 6 mois à comprendre pourquoi.' },
      { titre: 'La doctrine du Parti', texte: 'Le Parti de l\'Acier lui reproche de diluer l\'acier avec de la roche. Il apporte des données de tests sismiques. La conversation dure 3 heures. Le Parti accepte ses fondations "à titre expérimental".' },
      { titre: 'La technique de Thryss', texte: 'Thryss (4) lui transmet une technique de trempe Pyrienne ancienne pour les alliages métal-silice. Appliquée à ses joints, la performance sismique augmente de 40%. Il reconnaît la contribution dans son manuel.' },
      { titre: 'Les fondations du Parti', texte: 'Ses fondations roche/acier avec trempe spéciale sont maintenant la méthode recommandée pour les zones sismiques à Ormn-Dur. Le Parti les présente comme une innovation du Parti.' },
    ],
    sorts: ['Ancrage de fondation', 'Lame d\'acier', 'Résistance sismique'],
    relations: [
      { id: 4, nom: 'Thryss', type: 'allié', note: 'A transmis la technique de trempe fondamentale. Contribution reconnue publiquement dans le manuel.' },
      { id: 142, nom: 'Vordrak', type: 'allié', note: 'Commanditaire régulier. Construit dans des zones adjacentes à la Fosse sans finalités précisées.' },
    ],
    lore_long: `Kargvorn forge des fondations roche/acier qui résistent aux séismes d'Ormn-Dur. Il est au Parti de l'Acier mais en désaccord avec la moitié de leur doctrine. Thryss (4) lui a transmis une technique de trempe Pyrienne — 40% de performance sismique en plus. Vordrak (142) lui commande pour des zones adjacentes à la Fosse. Il n'a pas demandé pour quoi.`,
  },

  // ── 315 · DREKVELTH ──────────────────────────────────────────
  315: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Le marché comme éducation', texte: 'Né dans une famille de commerçants d\'équipement minier depuis trois générations. À 12 ans, il gère les stocks. À 25 ans, il rachète la boutique.' },
      { titre: 'La règle de la boutique', texte: 'À 28 ans, deux clients adverses se retrouvent dans sa boutique. Il invente une règle sur le moment : pas de politique dans l\'espace de vente. Les deux acceptent. Depuis, tout le monde à Ormn-Dur la connaît.' },
      { titre: 'La commande de Korraven', texte: 'Korraven (212) commande des capteurs de pression aux spécifications inhabituelles. Drekvelth fournit sans questions. Il note les spécifications dans son registre personnel.' },
      { titre: 'Ce qu\'il entend', texte: 'Sa boutique est un espace de rencontre non officiel. Des conversations s\'y tiennent. Il entend des choses sur les projets de toutes les factions. Il ne les a jamais vendues à personne.' },
      { titre: 'La boutique comme archive', texte: '12 ans de conversations dans sa mémoire. Des informations qui ne sont dans aucun registre officiel. Drekvar (131) passe parfois juste pour parler. Drekvelth écoute.' },
    ],
    sorts: ['Lame d\'acier', 'Bouclier de roche', 'Fusion d\'équipement'],
    relations: [
      { id: 212, nom: 'Korraven', type: 'allié', note: 'Client avec commandes aux spécifications inhabituelles. Usage non déclaré. Drekvelth a noté sans questionner.' },
      { id: 131, nom: 'Drekvar', type: 'allié', note: 'Passage régulier — pas toujours pour acheter. Conversations. Drekvelth écoute.' },
    ],
    lore_long: `Drekvelth tient une boutique d'équipement minier neutre à Ormn-Dur. Toutes les factions peuvent venir sans risquer leurs adversaires. 12 ans de conversations dans sa mémoire. Il n'a jamais vendu d'informations. Il n'a pas décidé de ne pas le faire non plus. Il attend de savoir ce que ça vaut et à qui.`,
  },

  // ── 316 · THYRVELN ──────────────────────────────────────────
  316: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La formation impériale', texte: 'Formé à 18 ans dans la gestion des matériaux de construction — une filière administrative. À 22 ans, affecté à la supervision des stocks à Ormn-Dur.' },
      { titre: 'Le premier détournement', texte: 'À 26 ans, Brysketh (211) le contacte via intermédiaire. La demande : des matériaux pour un projet non officiel. Quantité d\'une erreur de comptage plausible. Il détourne. Il attend que quelqu\'un s\'en aperçoive. Personne ne le fait.' },
      { titre: 'Le volume croissant', texte: 'Sur 3 ans, les demandes augmentent. Les justifications deviennent plus complexes. Il signale à Brysketh (211) qu\'il faut réduire pendant 6 mois. Brysketh accepte.' },
      { titre: 'La nature des refuges', texte: 'Brysketh lui montre un des refuges construits avec ses matériaux — des familles avec des Élus non-enregistrés. Il décide que le risque est proportionnel à ce qu\'il voit.' },
      { titre: 'Le cycle de 6 mois', texte: '6-8 mois de détournement, puis 4-6 mois de réduction pour que les chiffres se normalisent. Ce rythme lui a permis de fonctionner 8 ans. L\'inspection annuelle arrive dans 3 mois.' },
    ],
    sorts: ['Éclat de roche', 'Lame improvisée', 'Mur de décombres'],
    relations: [
      { id: 302, nom: 'Kargoval', type: 'allié', note: 'Principal bénéficiaire des matériaux. Construit les refuges pour Élus.' },
      { id: 211, nom: 'Brysketh', type: 'allié', note: 'Contact Dissident direct. Gère les priorités. A montré les refuges pour valider l\'engagement.' },
    ],
    lore_long: `Thyrveln détourne des matériaux de construction impériaux pour les refuges des Dissidentes. Il opère en cycles de 6-8 mois puis 4-6 mois de réduction. 8 ans sans vérification formelle. L'inspection annuelle arrive dans 3 mois. Ses justifications administratives tiennent sur chaque détournement individuel. Il n'est pas certain qu'elles tiennent sur l'analyse du pattern global.`,
  },

  // ── 317 · KARVREKH ──────────────────────────────────────────
  317: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'L\'apprentissage de la maintenance', texte: 'Formé à 18 ans dans les corps de maintenance de la Confédération. 4 ans d\'apprentissage dans les tunnels. À 22 ans, il inspecte seul.' },
      { titre: 'Les premiers retards', texte: 'À 26 ans, il signale un tunnel en danger — maintenance prévue à 6 mois. Son évaluation disait 3. Il escalade. Thyrum (132) dit que la planification est fixée. Le tunnel tient, mais dans le mauvais sens.' },
      { titre: 'Le tunnel qui ne tenait pas', texte: 'À 33 ans, un tunnel secondaire s\'effondre. Son rapport de 4 mois plus tôt l\'avait prédit. Le rapport a mis 2 mois à entrer dans le système — délai inexpliqué. Aucune réponse formelle à sa demande d\'explication.' },
      { titre: 'Le pattern des délais', texte: 'Sur 5 ans de documentation, les délais de ses rapports sont variables selon les zones. Les tunnels dans les zones de trafic impérial ou technocratique ont des délais courts. Les zones à faible trafic attendent plus longtemps. Quelqu\'un réordonne.' },
      { titre: 'Les 4 rapports en attente', texte: '4 rapports soumis il y a 2 à 6 semaines sans planification. Deux sont classés urgents. Escalade soumise. Thyrum (132) a accusé réception. Il attend.' },
    ],
    sorts: ['Fracture d\'acier', 'Roc de protection', 'Analyse structurelle'],
    relations: [
      { id: 132, nom: 'Thyrum', type: 'allié', note: 'Supérieur direct. Reçoit les rapports. Les fait avancer avec des délais variables non expliqués.' },
      { id: 40, nom: 'Draven II', type: 'allié', note: 'A posé une question directe hors canaux officiels sur un tunnel spécifique. Karvrekh a répondu sans poser de question en retour.' },
    ],
    lore_long: `Karvrekh produit des rapports sur l'état des tunnels d'Ormn-Dur. Ses rapports arrivent systématiquement trop tard — quelqu'un dans la Confédération réordonne les priorités. Deux urgences en attente depuis 4-6 semaines. L'un des tunnels atteindra un seuil critique dans 3 mois si non traité. Il porte son rapport en version papier. Les systèmes tombent. Les papiers restent.`,
  },

  // ── 318 · VORVDREKH ──────────────────────────────────────────
  318: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'La première mort', texte: 'À 14 ans, le père d\'un ami meurt dans un effondrement de tunnel. Aucun monument. Il sculpte un nom dans une paroi proche de l\'effondrement. C\'était grossier. C\'était là.' },
      { titre: 'La première commission', texte: 'À 22 ans, une famille lui demande un monument pour un frère mort dans la Fosse. Il demande des détails — comment, quoi, où exactement. Il sculpte tout. La famille pleure.' },
      { titre: 'La tolérance de la Technocratie', texte: 'À 30 ans, la Technocratie veut retirer des monuments dans une zone de maintenance active. Il négocie : il les déplace dans une zone adjacente autorisée. L\'officiel accepte. Il comprend les limites de la tolérance.' },
      { titre: 'Les symboles qui parlent', texte: 'Une femme lit un symbole d\'accident d\'équipement défectueux sur un de ses monuments et réalise que c\'est le même type que celui qui a tué son propre père. Elle part chercher d\'autres monuments.' },
      { titre: 'Les 87 monuments', texte: '87 monuments actifs dans différentes zones. Certains simples — un nom et une date. D\'autres complexes — des récits entiers en symboles. Draven II (40) les utilise parfois comme points de rencontre discrets. Il n\'a pas objecté.' },
    ],
    sorts: ['Roche vivante', 'Tranchant d\'acier', 'Érection de monument'],
    relations: [
      { id: 40, nom: 'Draven II', type: 'allié', note: 'A demandé un symbole spécifique. Utilise les monuments comme points de rencontre. Vorvdrekh observe sans intervenir.' },
    ],
    lore_long: `Vorvdrekh sculpte des monuments aux mineurs morts à Ormn-Dur. 87 monuments actifs. Les plus complexes contiennent des informations sur les circonstances réelles des décès — informations que les rapports officiels ont minorées. Des personnes qui savent lire les symboles peuvent reconstituer des accidents que la Technocratie a préféré classer. La Technocratie tolère ses monuments. Il touche la roche avant de sculpter.`,
  },

  // ── 319 · DREKTHARV ──────────────────────────────────────────
  319: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Le laboratoire familial', texte: 'Né dans une famille de chimistes. À 12 ans, il mélange des compositions hors protocole dans le labo familial pour comprendre ce qui se passe à la frontière des propriétés connues. Son père le laisse faire si les résultats sont documentés.' },
      { titre: 'Le premier alliage sol/acier', texte: 'À 27 ans, un alliage sol/acier avec résistance chimique supérieure aux standards — réponse à la corrosion par les émanations fongiques. La Technocratie intègre l\'alliage dans ses équipements de la Fosse.' },
      { titre: 'L\'application inconnue', texte: 'À 36 ans, un rapport technique cite une de ses compositions dans une application qu\'il ne savait pas avoir aidé à créer. La Technocratie réutilise ses travaux sans l\'informer.' },
      { titre: 'Les questions de Kaevorn', texte: 'Kaevorn (243) le contacte pour des questions sur ses alliages depuis la perspective d\'une autre région. Les questions sont précises et pertinentes. La conversation ouvre des pistes que ses mandats Technocratie ne couvrent pas.' },
      { titre: 'Les trois projets en cours', texte: 'Trois projets d\'alliage en cours. Il a commencé à ajouter des mentions sur les usages recommandés et déconseillés dans ses soumissions. La Technocratie n\'a pas commenté ces ajouts.' },
    ],
    sorts: ['Corrosion d\'acier', 'Sol traité', 'Alliage de protection'],
    relations: [
      { id: 42, nom: 'Thyss', type: 'allié', note: 'Superviseur technique. Ses compositions lui appartiennent dès validation — il continue de documenter les usages recommandés quand même.' },
      { id: 243, nom: 'Kaevorn', type: 'allié', note: 'Spécialiste extérieur avec questions pertinentes. A ouvert des pistes de recherche non couvertes par les mandats.' },
    ],
    lore_long: `Drektharv développe des alliages sol/acier pour les équipements de la Fosse. Trois de ses compositions ont été réutilisées sans notification dans des applications qu'il ne savait pas avoir aidé à créer. La Technocratie lui a confirmé que ses compositions lui appartiennent dès validation. Il ajoute maintenant des usages recommandés et déconseillés dans ses soumissions. Il décrit les alliages comme des personnalités — c'est sa façon de comprendre rapidement ce qu'il a devant lui.`,
  },

  // ── 320 · SHYRETHVON ──────────────────────────────────────────
  320: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La lecture qui s\'installe seule', texte: 'À 16 ans, il commence à percevoir les états émotionnels des personnes autour de lui. Pas comme une intrusion — comme une information qui arrive. Il apprend à la filtrer. Il n\'y parvient jamais entièrement.' },
      { titre: 'L\'offre de la Convergence', texte: 'À 24 ans, Shael lui propose : ses lectures peuvent alimenter un protocole de cartographie psychique de Vel\'Nox. Il accepte. La Convergence lui fournit des sujets, il livre des profils.' },
      { titre: 'La règle sur les connaissances', texte: 'À 30 ans, il instaure une règle : il ne catalogue pas des personnes qu\'il connaît. Deux exceptions depuis — des personnes dont il n\'avait pas su qu\'il les connaissait avant de commencer la lecture.' },
      { titre: 'L\'utilisation par Velthyr', texte: 'Velthyr lui pose des questions sur des cas spécifiques. Ces questions correspondent parfois à des sujets qu\'il a catalogués. Il répond. Il ne demande pas le contexte d\'usage.' },
      { titre: 'Le catalogue actuel', texte: '340 profils dans le catalogue Convergence. Il ne sait pas ce que la Convergence en fait au-delà de la cartographie. Il n\'a pas demandé.' },
    ],
    sorts: ['Lecture psychique', 'Voile des ombres', 'Projection d\'ombre'],
    relations: [
      { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit le catalogue et coordonne les demandes de profils spécifiques. N\'explique pas les usages.' },
      { id: 148, nom: 'Velthyr', type: 'allié', note: 'Pose des questions sur des cas spécifiques. Ses questions correspondent parfois à des sujets catalogués.' },
    ],
    lore_long: `Shyrethvon lit les états psychiques des personnes et les catalogue pour la Convergence. 340 profils. Il a une règle sur les connaissances — deux exceptions malgré lui. Il ne sait pas ce que la Convergence fait des profils. Il n'a pas demandé à Shael.`,
  },

  // ── 321 · NYRVETH ──────────────────────────────────────────
  321: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La pression qui vient de nulle part', texte: 'À 18 ans, il commence à percevoir une pression psychique dans certaines zones de Vel\'Nox. Pas une présence — une structure. Il apprend à distinguer les pressions naturelles des pressions induites.' },
      { titre: 'Le recrutement Dissident', texte: 'À 23 ans, Vethis lui explique ce que la Convergence fait à Vel\'Nox. Il peut détecter leurs surveillances psychiques. Elle lui propose de travailler contre elles. Il accepte.' },
      { titre: 'La contre-signature', texte: 'À 29 ans, il développe une méthode pour masquer les signatures psychiques des personnes surveillées par la Convergence. La contre-signature dure 4 à 6 heures — temporaire.' },
      { titre: 'Les 12 personnes couvertes', texte: 'Il couvre actuellement 12 personnes dont les profils sont dans le catalogue Convergence selon Vethis. Velthyn est prioritaire — son profil est le plus complet et donc le plus vulnérable.' },
      { titre: 'La durée insuffisante', texte: 'Ses contre-signatures durent 4 à 6 heures. Les personnes couvertes ont besoin de lui tous les jours. Cette dépendance est un risque — si quelque chose lui arrive, 12 personnes perdent leur protection.' },
    ],
    sorts: ['Contre-signature psychique', 'Ombre mentale', 'Brouillard psy'],
    relations: [
      { id: 46, nom: 'Vethis', type: 'allié', note: 'A expliqué les surveillances Convergence. Coordonne les personnes à couvrir. Priorité Velthyn.' },
      { id: 160, nom: 'Velthyn', type: 'allié', note: 'Profil le plus complet dans le catalogue Convergence. Priorité de couverture.' },
    ],
    lore_long: `Nyrveth détecte les surveillances psychiques de la Convergence et développe des contre-signatures pour masquer des personnes ciblées. 12 personnes couvertes. Les contre-signatures durent 4 à 6 heures — dépendance quotidienne. Si quelque chose lui arrive, 12 personnes perdent leur protection immédiatement.`,
  },

  // ── 322 · THYRVEX ──────────────────────────────────────────
  322: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'Le double élément comme obstacle', texte: 'À 15 ans, sa combinaison Ténèbres/Psy produit des expériences que ni les thérapeutes Psy ordinaires ni les praticiens Ténèbres ne savent traiter. Il commence à apprendre à gérer seul.' },
      { titre: 'La méthode développée', texte: 'À 25 ans, il ouvre un atelier informel pour d\'autres Umbriens avec des combinaisons élémentaires difficiles. Sa méthode est empirique — développée à partir de ce qui a fonctionné pour lui.' },
      { titre: 'La copie par la Convergence', texte: 'À 31 ans, il reconnaît des éléments de sa méthode dans un programme de la Convergence. La copie est partielle et mal adaptée. Il ne sait pas s\'il doit être inquiet ou irrité.' },
      { titre: 'Les clients réguliers', texte: '8 clients réguliers, dont 3 avec des profils dans le catalogue Convergence selon Nyrreth. Ces clients viennent le voir pour gérer des effets liés à la surveillance — stress, pertes de concentration, perturbations psychiques.' },
      { titre: 'La demande de Nyrreth', texte: 'Nyrreth lui a demandé de suivre des clients qui ont eu des expériences involontaires dans des zones spectrales. Sa méthode peut s\'adapter — la frontière entre aide psychique et aide spectrale est floue dans ces cas.' },
    ],
    sorts: ['Équilibre dual', 'Ombre stabilisante', 'Résonance psy-ténèbres'],
    relations: [
      { id: 181, nom: 'Orathyn', type: 'allié', note: 'A documenté des expériences proches. Contact pour développer la méthode thérapeutique.' },
      { id: 47, nom: 'Nyrreth', type: 'allié', note: 'Oriente des clients avec expériences spectrales involontaires. Demande une adaptation de la méthode.' },
    ],
    lore_long: `Thyrvex aide les Umbriens avec des combinaisons élémentaires difficiles à gérer. Sa méthode — développée à partir de sa propre expérience — a été partiellement copiée par la Convergence. 8 clients réguliers dont 3 surveillés par la Convergence. Il aide des personnes à gérer les effets de la surveillance sur leur état psychique.`,
  },

  // ── 323 · SYRETHVON ──────────────────────────────────────────
  323: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La lecture comme outil', texte: 'À 18 ans, sa capacité Psy permet des lectures psychiques précises. Il apprend rapidement que les institutions valorisent ceux qui peuvent lire sans qu\'on le sache. L\'Empire l\'approche à 22 ans.' },
      { titre: 'Les protocoles d\'interrogation', texte: 'À 26 ans, il est formé aux protocoles impériaux d\'interrogation psychique. Ces protocoles sont efficaces. Il ne demande pas à quoi servent les informations extraites.' },
      { titre: 'La question arrêtée', texte: 'À 31 ans, il arrête de se demander ce qui arrive aux sujets après ses interrogations. La question produit des réponses qu\'il ne veut pas avoir. L\'arrêt est délibéré.' },
      { titre: 'Le troisième dossier', texte: 'Le troisième dossier actif concerne un Umbrien dont la connexion à un réseau Dissident est présumée — pas confirmée. Il prend plus de temps que les deux autres. Ce n\'est pas technique.' },
      { titre: 'La connexion présumée', texte: 'La connexion présumée du troisième sujet est basée sur une association de lieu et non sur des données psychiques directes. Il aurait pu produire un rapport rapide. Il ne l\'a pas fait. Il n\'a pas d\'explication.' },
    ],
    sorts: ['Extraction psychique', 'Voile d\'ombre', 'Lecture des profondeurs'],
    relations: [
      { id: 89, nom: 'Oraveth', type: 'supérieur', note: 'Reçoit les rapports et transmet les dossiers. Ne pose pas de questions sur les délais habituels.' },
      { id: 153, nom: 'Syreth', type: 'allié', note: 'Contact de coordination. Fournit le contexte opérationnel des dossiers.' },
    ],
    lore_long: `Syrethvon interroge des sujets psychiquement pour le compte de l'Empire. Il a arrêté de se demander ce qui arrive aux sujets après. C'est délibéré. Le troisième dossier actif — connexion Dissidente présumée, non confirmée — prend plus de temps. Ce n'est pas technique. Il n'a pas d'explication.`,
  },

  // ── 324 · VELTHYREX ──────────────────────────────────────────
  324: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La lecture du passé', texte: 'À 14 ans, il comprend qu\'il peut lire les états psychiques anciens dans des espaces — les émotions laissées dans des lieux par des événements passés. Ce n\'est pas courant même chez les Psy.' },
      { titre: 'L\'atelier de Vel\'Nox', texte: 'À 25 ans, il s\'établit comme détective privé indépendant à Vel\'Nox. Il travaille sur des affaires de disparitions, de fraudes, de situations où les méthodes standard ne suffisent pas.' },
      { titre: 'La méthode sur papier', texte: 'Toutes ses notes sont sur papier — jamais stockées dans des systèmes accessibles. Il a eu un dossier compromis à 29 ans. Il n\'a pas refait la même erreur.' },
      { titre: 'Le mandat de Nyrath', texte: 'Nyrath lui a confié un mandat partiellement précisé — elle cherche quelque chose dans un réseau de Vel\'Nox mais n\'a pas voulu donner les détails complets. Il a accepté avec des conditions sur les informations minimales nécessaires. Ces conditions n\'ont été que partiellement satisfaites.' },
      { titre: 'Le réseau de Tharyn', texte: 'Tharyn lui achète des informations régulièrement — des observations qui ont de la valeur commerciale mais pas assez pour justifier un dossier complet. Ces ventes lui donnent un revenu stable que ses mandats privés ne garantissent pas.' },
    ],
    sorts: ['Lecture d\'empreinte psychique', 'Ombre détective', 'Voile d\'effacement'],
    relations: [
      { id: 50, nom: 'Tharyn', type: 'client', note: 'Achète des informations à valeur commerciale. Revenu stable. Contact neutre fiable.' },
      { id: 147, nom: 'Nyrath', type: 'client', note: 'Mandat partiellement précisé. Conditions d\'information minimales partiellement satisfaites. Mandat en cours.' },
    ],
    lore_long: `Velthyrex est détective privé indépendant à Vel'Nox. Il lit les empreintes psychiques laissées dans les espaces — une capacité rare même chez les Psy. Toutes ses notes sont sur papier. Un dossier compromis à 29 ans — il n'a pas refait la même erreur. Le mandat de Nyrath (147) est partiellement précisé. Il avance avec des informations insuffisantes.`,
  },

  // ── 325 · NYRETHREX ──────────────────────────────────────────
  325: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La double couche', texte: 'À 11 ans, une crise de Ténèbres le pousse dans une zone de frontière spectrale. Il traverse partiellement. Il n\'est pas mort. Il apprend ce que ça signifie d\'exister dans les deux espaces à la fois.' },
      { titre: 'Le premier passage', texte: 'À 20 ans, il porte une personne à travers une zone de surveillance impériale via la couche spectrale. 40 minutes. La personne passe. Elle a des symptômes légers pendant 3 jours. Il note les symptômes.' },
      { titre: 'Les 47 passages', texte: 'Sur 8 ans, 47 passages. Certains portés ont des symptômes — désorientation, sensations de présences, difficultés à dormir. Ces symptômes disparaissent. Il ne savait pas si c\'était tout.' },
      { titre: 'La sensibilité résiduelle', texte: 'Syravel (254) lui signale que quelques anciens portés ont développé une sensibilité accrue aux zones spectrales. Pas nocif selon les observations. Pas neutre non plus.' },
      { titre: 'Le suivi initié', texte: 'Il demande aux portés d\'envoyer des rapports de santé à Syravel après le passage. Ce n\'est pas exhaustif. Le 48e passage est prévu — le premier avec protocole de suivi intégré.' },
    ],
    sorts: ['Passage partiel', 'Portage spectral', 'Présence double'],
    relations: [
      { id: 49, nom: 'Velath', type: 'allié', note: 'Confie les passages que les méthodes standards ne couvrent pas. A accepté la demande de suivi post-passage.' },
      { id: 254, nom: 'Syravel', type: 'allié', note: 'Fournit des informations sur les zones de surveillance spectrale. A signalé les effets persistants sur d\'anciens portés.' },
    ],
    lore_long: `Nyrethrex porte des personnes à travers des zones interdites via la couche spectrale. 47 passages. Des symptômes légers disparaissaient — il ne savait pas si c'était tout. Syravel (254) a signalé une sensibilité résiduelle sur quelques anciens portés. Il a initié un suivi. Le 48e passage est le premier avec protocole intégré.`,
  },

  // ── 326 · VELSHYREX ──────────────────────────────────────────
  326: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'L\'accident de frontière', texte: 'À 8 ans, une crise de Spectre le pousse de l\'autre côté de la frontière pendant 3 heures. Un vide dans sa mémoire. Une façon différente de voir ensuite. Velsa (58) le trouve errant dans un marché à son retour.' },
      { titre: 'L\'apprentissage par cohabitation', texte: 'Velsa (58) le prend avec elle pendant 5 ans. Pas une formation — une cohabitation. À 18 ans, il a développé sa propre méthode de navigation des deux couches, différente de la sienne.' },
      { titre: 'La zone interdite', texte: 'À 24 ans, il traverse une zone physiquement inaccessible — un espace de mort ancienne. Il y trouve des informations, des objets, des présences. Il revient avec des informations qu\'il ne sait pas à qui donner.' },
      { titre: 'La cartographie', texte: 'Il décide de cartographier les zones spectrales hors plans officiels de Vel\'Nox. Il n\'est pas sûr que c\'est son rôle. C\'est son travail.' },
      { titre: 'Les 14 zones et la co-navigation', texte: '14 zones spectrales cartographiées. Nyrreth (47) l\'a accompagné dans une zone pour une consultation. Première fois qu\'il amenait quelqu\'un dans ses espaces. Ça a fonctionné.' },
    ],
    sorts: ['Traversée spectrale', 'Présence instable', 'Ancrage d\'ombre'],
    relations: [
      { id: 58, nom: 'Velsa', type: 'mentor', note: 'Formé par cohabitation. Sa maîtrise du Spectre dépasse la sienne. Référence ancienne.' },
      { id: 47, nom: 'Nyrreth', type: 'allié', note: 'Le consulte sur des cas d\'exposition spectrale involontaire. A co-navigué une zone.' },
    ],
    lore_long: `Velshyrex navigue les zones de Vel'Nox interdites aux vivants ordinaires. 14 zones spectrales cartographiées hors plans officiels. Ces zones contiennent des informations sur des personnes mortes qui n'existent nulle part ailleurs. Il n'a pas décidé quoi en faire. Nyrreth (47) a co-navigué une zone avec lui — première fois qu'il amenait quelqu'un dans ses espaces.`,
  },

  // ── 327 · THYRVESH ──────────────────────────────────────────
  327: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'Le contact précoce avec les défunts', texte: 'À 16 ans, il commence à percevoir les résidus spectraux laissés par les morts dans les zones de Vel\'Nox — les couches les plus vieilles, où les morts anciens s\'accumulent. Ces résidus sont différents des présences vivantes. Plus calmes. Plus fixes.' },
      { titre: 'Le recrutement de la Convergence', texte: 'À 25 ans, Shael l\'approche. La Convergence a besoin de quelqu\'un capable d\'extraire des signatures spectrales. Il demande à quoi ça sert. La réponse est incomplète. Il accepte quand même.' },
      { titre: 'La zone des morts récents', texte: 'À 31 ans, il est envoyé sur des morts récents — décédés dans les 6 mois. Leurs signatures sont plus fortes, plus reconnaissables. Il collecte. Il met plus de temps que d\'habitude.' },
      { titre: 'Les reconstructions psychiques', texte: 'Zyress (240) lui dit en passant que des signatures collectées ont été utilisées pour des reconstructions psychiques des mémoires des défunts. Ce n\'est pas ce qu\'il avait imaginé. Il ne pose pas de questions supplémentaires à Shael.' },
      { titre: 'Le délai non expliqué', texte: 'La deuxième zone active — des morts récents désignés par Shael — lui prend plus de temps. Ce n\'est pas technique. Il ne l\'a pas expliqué à Shael. Shael n\'a pas demandé encore.' },
    ],
    sorts: ['Extraction spectrale', 'Ombre de mort', 'Ancrage aux défunts'],
    relations: [
      { id: 240, nom: 'Zyress', type: 'allié', note: 'Fournit des informations sur les zones spectrales actives. A mentionné les reconstitutions psychiques en passant.' },
      { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit les collections pour le Protocole. N\'explique pas les usages. Thyrvesh ne demande pas formellement.' },
    ],
    lore_long: `Thyrvesh collecte des signatures spectrales de défunts pour le Protocole de la Convergence. Zyress (240) lui a dit que des signatures ont été utilisées pour des reconstructions psychiques des mémoires des défunts. Il n'a pas posé de questions à Shael. La deuxième zone active lui prend plus de temps. Ce n'est pas technique. Il n'a pas expliqué le délai.`,
  },

  // ── 328 · NYRVAX ──────────────────────────────────────────
  328: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La première rencontre', texte: 'À 14 ans, il rencontre un mort-errant pour la première fois — un vieil Umbrien qui errait dans son quartier sans savoir qu\'il était mort depuis 3 semaines. Il lui parle. Le vieux regarde avec étonnement — personne ne lui avait parlé depuis sa mort. Nyrvax le guide. Le vieux part.' },
      { titre: 'L\'apprentissage avec Velsa', texte: 'Velsa (58) le trouve errant lui-même dans les niveaux spectraux. Elle le ramène et lui apprend à distinguer les morts des vivants, les zones stables des zones instables. Elle lui donne les outils — pas les instructions.' },
      { titre: 'Le mort qui refuse', texte: 'À 26 ans, un mort-errant refuse de traverser — il veut que les circonstances de sa mort soient résolues avant. 3 semaines de négociation. Nyrvax ne peut pas résoudre ça. Il le guide quand même en expliquant qu\'attendre ne changera pas ce qui s\'est passé. Le mort traverse à contrecœur.' },
      { titre: 'Les informations des morts', texte: 'Vethis (46) lui pose la question : les morts-errants savent-ils des choses sur des disparitions ? Oui — certains morts savent pourquoi ils sont morts et par qui. Il commence à écouter plus attentivement avant de guider.' },
      { titre: 'Les 7 morts en cours', texte: 'Il suit 7 morts-errants actuellement — plus que d\'habitude. Un est lié à une disparition que Vethis cherche. Il attend d\'avoir transmis les informations à Vethis avant de le guider.' },
    ],
    sorts: ['Présence spectrale', 'Ombre de passage', 'Voix des défunts'],
    relations: [
      { id: 46, nom: 'Vethis', type: 'allié', note: 'Le consulte sur ce que les morts savent. A posé la question de la disparition récente. Commence à utiliser sa connexion aux morts comme source.' },
      { id: 58, nom: 'Velsa', type: 'mentor', note: 'L\'a formé à naviguer les zones spectrales. Sa compréhension de ces espaces dépasse la sienne. Référence.' },
    ],
    lore_long: `Nyrvax guide les morts-errants vers leur passage dans les Trois Couches de Vel'Nox. 7 morts actuellement en suivi — plus que d'habitude. Un mort connaît des noms liés à une disparition que Vethis (46) cherche. Il attend d'avoir transmis les informations avant de guider ce mort. La ville produit plus de morts-errants. Il documente.`,
  },

  // ── 329 · SYRVELTH ──────────────────────────────────────────
  329: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La double discrétion', texte: 'Née à Vel\'Nox dans une famille qui avait appris la discrétion comme survie. À 15 ans, elle s\'infiltre via Ténèbres/Spectre pour des raisons personnelles — voir des personnes qu\'elle n\'était pas censée voir.' },
      { titre: 'Le recrutement', texte: 'À 21 ans, Syravel (254) l\'approche. Elle a observé une de ses infiltrations et compris le potentiel opérationnel. L\'offre est directe. Syrvelth demande des règles claires. Syravel définit des limites.' },
      { titre: 'La limite franchie', texte: 'À 27 ans, une mission implique l\'infiltration de l\'espace d\'un civil non impliqué. Elle refuse. Syravel modifie les termes. La mission est réalisée différemment. Syravel ne reproche pas la modification.' },
      { titre: 'La trace spectrale', texte: 'Eiravel (248) lui signale que la Convergence travaille sur des méthodes de détection spectrale avancées — qui pourraient détecter les résidus de ses projections. Elle n\'a pas de contre-mesure actuelle.' },
      { titre: 'La mission hésitante', texte: 'Deux missions actives. La deuxième est proche d\'une zone de collecte spectrale Convergence. Elle hésite. Syravel dit que c\'est urgent. Elle calcule si l\'urgence justifie le risque.' },
    ],
    sorts: ['Projection spectrale', 'Manteau d\'ombre', 'Effacement de trace'],
    relations: [
      { id: 254, nom: 'Syravel', type: 'allié', note: 'Coordonne ses missions. A accepté des limites opérationnelles. A une fois modifié une mission refusée.' },
      { id: 248, nom: 'Eiravel', type: 'allié', note: 'Contact pour les zones non familières. A signalé la vulnérabilité spectrale.' },
    ],
    lore_long: `Syrvelth s'infiltre via ombres et projections spectrales. Elle n'est pas traçable par les méthodes physiques ou psychiques standard. Eiravel (248) lui a signalé que la Convergence travaille sur des détections spectrales avancées. Elle n'a pas de contre-mesure. Mission hésitante dans une zone à risque spectral. Syravel dit urgent. Elle n'a pas encore décidé.`,
  },

  // ── 330 · VELNYRATH ──────────────────────────────────────────
  330: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'Le premier élevage', texte: 'À 13 ans, il trouve une colonie de phortènes des ombres dans les niveaux inférieurs de son quartier. Il observe leurs déplacements 3 jours et comprend qu\'ils suivent un chemin constant qui ne correspond à aucune voie physique visible. Il suit le chemin jusqu\'à une salle inconnue.' },
      { titre: 'La première carte', texte: 'À 19 ans, il produit sa première carte d\'une section des Trois Couches basée sur les trajectoires de 3 espèces d\'insectes nocturnes. La carte montre des espaces hors plans officiels. Il la garde un an avant de la partager avec Thyrav (150).' },
      { titre: 'La zone morte', texte: 'À 25 ans, ses insectes refusent tous de traverser une zone. Il peut y entrer lui-même. La zone est froide d\'une façon non thermique. Il la cartographie depuis le bord. Il n\'a pas d\'explication pour le comportement des insectes.' },
      { titre: 'La valeur opérationnelle', texte: 'Vethis (46) lui explique que les zones où les insectes refusent correspondent souvent à des zones de collecte spectrale active. Ses cartes sont un renseignement indirect sur les opérations de la Convergence.' },
      { titre: 'La zone demandée', texte: 'Vethis lui demande de cartographier une zone proche d\'une collecte spectrale identifiée. Il a préparé 4 espèces adaptées. Il ne sait pas si elles traverseront. Il y va dans 3 jours.' },
    ],
    sorts: ['Essaim des ombres', 'Manteau nocturne', 'Trajectoire parasite'],
    relations: [
      { id: 150, nom: 'Thyrav', type: 'client', note: 'Commande des cartographies de zones spécifiques sans expliquer les raisons. Premier contact régulier.' },
      { id: 46, nom: 'Vethis', type: 'allié', note: 'A expliqué la valeur opérationnelle de ses cartographies. Demande une zone proche d\'une collecte spectrale active.' },
    ],
    lore_long: `Velnyrath cartographie les Trois Couches de Vel'Nox via les trajectoires d'insectes nocturnes. Les zones où ses insectes refusent de traverser correspondent à des zones de collecte spectrale active — ses cartes sont un renseignement indirect sur la Convergence. Il y va dans 3 jours sur une zone à risque. Ses données ont de la valeur. Il n'a pas décidé quoi en faire si la Convergence le lui proposait.`,
  },

  // ── 331 · THYRVIX ──────────────────────────────────────────
  331: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'L\'essaim du couloir', texte: 'À 12 ans, il observe un essaim de noctèmes dans un couloir de son quartier et comprend qu\'ils réagissent à chaque passage. Il passe 2 semaines à apprendre à lire leurs réactions.' },
      { titre: 'Le recrutement par Shael', texte: 'À 22 ans, Shael (48) lui propose de placer des essaims aux endroits désignés par la Convergence pour observer des espaces sans envoyer d\'agents physiques. Il accepte.' },
      { titre: 'Le sujet reconnaissable', texte: 'À 27 ans, il observe un Élu via essaim — quelqu\'un qu\'il connaissait de vue. Les observations sont transmises à Shael. Deux semaines plus tard, l\'homme disparaît de son quartier. Il ne pose pas de question.' },
      { titre: 'Les ventes parallèles', texte: 'Tharyn (50) lui propose d\'acheter des observations qui n\'entrent pas dans ses rapports Convergence — des informations à valeur commerciale. Il commence à vendre en parallèle.' },
      { titre: 'Les 8 essaims actifs', texte: '6 essaims sur des cibles Convergence, 2 sur des zones commerciales pour Tharyn. La limite entre les deux catégories est moins nette qu\'au début. Il lui arrive d\'observer une cible Convergence à valeur commerciale.' },
    ],
    sorts: ['Essaim observateur', 'Nuage de nuit', 'Signal de rappel'],
    relations: [
      { id: 50, nom: 'Tharyn', type: 'client', note: 'Achète des observations commerciales parallèles. Première source de revenus non-Convergence.' },
      { id: 48, nom: 'Shael', type: 'allié', note: 'Reçoit les rapports formels. Ne donne pas les suites. Thyrvix ne demande pas.' },
    ],
    lore_long: `Thyrvix place des essaims de noctèmes dans des espaces désignés pour surveiller les Élus de Vel'Nox pour la Convergence. Il vend en parallèle des observations à valeur commerciale à Tharyn (50). 8 essaims actifs. La limite entre rapport officiel et vente parallèle dépend de son jugement. Il n'a pas demandé à Shael ce qui arrive aux Élus après.`,
  },

  // ── 332 · NYRSHYX ──────────────────────────────────────────
  332: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'La découverte des phagotes', texte: 'À 14 ans, il trouve une colonie de phagotes dans les niveaux inférieurs de Vel\'Nox. Il étudie leurs sécrétions et découvre que différentes espèces produisent des acides aux compositions différentes, utiles pour des matériaux différents.' },
      { titre: 'Le premier sabotage', texte: 'À 20 ans, Vethis (46) le contacte pour neutraliser un relais de communication impérial. Il réussit en 4 heures. Le relais est remplacé 3 semaines plus tard. Il note le délai de remplacement.' },
      { titre: 'La règle des équipements', texte: 'À 25 ans, Vethis lui demande de neutraliser un poste de premiers soins impérial. Il refuse. Elle reformule — uniquement la communication. Il accepte la reformulation et neutralise uniquement ce qui était demandé.' },
      { titre: 'La composition spécifique', texte: 'Talevyn (112) lui demande un acide spécifique à un nouvel alliage impérial. Il étudie l\'alliage, croise des espèces de phagotes, développe la composition en 4 mois.' },
      { titre: 'Les 3 opérations en cours', texte: 'La deuxième opération cible un équipement Convergence avec protection anti-acide standard. Il cherche la composition adaptée depuis 2 semaines. Vethis a dit prioritaire. La troisième cible est encore inconnue.' },
    ],
    sorts: ['Nuée corrosive', 'Manteau d\'ombre', 'Acide ciblé'],
    relations: [
      { id: 46, nom: 'Vethis', type: 'allié', note: 'Désigne les cibles et coordonne les opérations. A reformulé une demande refusée. Pression continue sur le périmètre.' },
      { id: 112, nom: 'Talevyn', type: 'allié', note: 'Fournit matériaux d\'entretien et échantillons pour développement d\'acides spécifiques.' },
    ],
    lore_long: `Nyrshyx utilise des phagotes — insectes à sécrétions acides — pour neutraliser des équipements impériaux dans Vel'Nox. Règle maintenue : pas d'équipements de sécurité, pas d'équipements médicaux. Elle a été testée une fois. Elle a tenu. La deuxième opération cible un équipement Convergence avec protection avancée. Il cherche la composition depuis 2 semaines.`,
  },

  // ── 333 · VELTHRIX ──────────────────────────────────────────
  333: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'Les lumivornes', texte: 'À 10 ans, sa famille élève des lumivornes pour leur soie. Il remarque que les éleveurs développent une sensibilité aux zones peu éclairées. À 16 ans, il a sa première préparation fonctionnelle à partir de leurs sécrétions.' },
      { titre: 'L\'atelier', texte: 'À 23 ans, il ouvre un atelier sur recommandation à Vel\'Nox. Ses premières préparations sont pour des travailleurs des niveaux inférieurs qui ont besoin de rester conscients dans des environnements à très faible lumière.' },
      { titre: 'L\'incident de dosage', texte: 'À 28 ans, un client mal suivi développe un effet 3 fois plus intense que prévu — incapable de distinguer les deux couches pendant 2 jours. Il modifie ses indications et exige des recommandations pour les nouveaux clients.' },
      { titre: 'Les usages opérationnels', texte: 'Dravthyr (311) lui confirme que ses sécrétions sont utilisées dans des formules pour des opérations Dissidentes. Il le savait intuitivement. La confirmation explicite est différente.' },
      { titre: 'Les nouvelles espèces', texte: 'Velnyrath (330) lui apporte 2 espèces inconnues des zones spectrales profondes. Les premières analyses suggèrent des propriétés anti-spectrales nouvelles — résistance passive aux détections de la Convergence.' },
    ],
    sorts: ['Brume sensorielle', 'Voile des ombres', 'Préparation d\'urgence'],
    relations: [
      { id: 311, nom: 'Dravthyr', type: 'client', note: 'Achète des sécrétions brutes pour ses formules apothicaires. A confirmé les usages opérationnels. Client principal.' },
      { id: 50, nom: 'Tharyn', type: 'client', note: 'Achète des préparations finies pour distribution commerciale. Réseau large.' },
    ],
    lore_long: `Velthrix produit des préparations apothicaires à partir de sécrétions d'insectes nocturnes Umbriens — effets sur la perception spectrale et la résistance aux ombres. Il fournit des matières premières à Dravthyr (311) pour des opérations Dissidentes. Velnyrath (330) lui a apporté 2 espèces inconnues dont les sécrétions pourraient offrir une résistance passive aux détections de la Convergence. Il documente tout.`,
  },

  // ── 334 · SYRETHRIX ──────────────────────────────────────────
  334: {
    timeline_position: { an: -1, lieu: 'Vel\'Nox', arc: 'Vol de la Lumière' },
    histoire: [
      { titre: 'L\'éleveur impérial', texte: 'À 15 ans, son quartier a un éleveur d\'insectes sous contrat impérial. Il aide cet éleveur 3 ans. À 18 ans, il comprend à quoi servent les insectes. Il demande à rejoindre l\'opération directement.' },
      { titre: 'Le recrutement impérial', texte: 'Syreth (153) l\'accepte après une période de test. Son premier déploiement opérationnel couvre 3 zones simultanément.' },
      { titre: 'La personne connue', texte: 'À 26 ans, une zone désignée par Thyrvel correspond à un espace associé à quelqu\'un qu\'il a connu dans son quartier. Il couvre une zone adjacente et rapporte que la zone désignée n\'a pas de signal significatif. Il n\'explique pas.' },
      { titre: 'L\'efficacité des essaims', texte: 'Syreth lui montre des données comparées — ses essaims couvrent 40% plus de surface avec 80% moins de risque de détection que les méthodes standard. Ces chiffres lui sont présentés comme une réussite. Il les note.' },
      { titre: 'Les 5 zones prioritaires', texte: 'Syreth lui désigne 5 zones prioritaires — un élargissement significatif. 2 zones sont dans des quartiers qu\'il connaît bien. Il vérifiera qui y opère avant de déployer. Il n\'a pas de plan si sa règle entre en conflit avec les ordres.' },
    ],
    sorts: ['Essaim de surveillance', 'Manteau d\'ombre opérationnel', 'Convergence d\'essaims'],
    relations: [
      { id: 153, nom: 'Syreth', type: 'supérieur', note: 'Reçoit les rapports et désigne les zones prioritaires. N\'a pas posé de questions sur la zone non couverte.' },
      { id: 158, nom: 'Thyrvel', type: 'allié', note: 'Fournit les informations de contexte sur les opérations actives et les personnes présentes dans les zones.' },
    ],
    lore_long: `Syrethrix déploie des essaims d'insectes dans Vel'Nox pour compte impérial — 40% plus de couverture que les méthodes standard. Il a une règle non déclarée : il ne surveille pas des personnes qu'il connaît personnellement. Il l'a appliquée une fois sans explication. 5 nouvelles zones prioritaires incluent 2 quartiers qu'il connaît. Il n'a pas de plan si sa règle entre en conflit avec les ordres.`,
  },

  // ── 335 · VELSKRAETH ──────────────────────────────────────────
  335: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La première stase', texte: 'À 17 ans, son frère est blessé dans une zone de glace vive. Elle applique instinctivement une stase glacée sur la blessure. La blessure cesse de saigner. Un médecin Givrin confirme qu\'elle a fait exactement ce qu\'il fallait.' },
      { titre: 'L\'intégration royale', texte: 'À 25 ans, Sylkra (53) la recrute pour les services médicaux royaux. Leth (34) lui est assigné comme référence Fée. Les deux développent ensemble la technique combinée stase-cohésion.' },
      { titre: 'La stase politique', texte: 'À 34 ans, elle apprend que sa technique a été adaptée pour la préservation de prisonniers politiques. Elle demande à Sylkra. Il répond que les usages appartiennent à la Monarchie. Elle n\'a pas trouvé la réponse satisfaisante.' },
      { titre: 'La durée irréversible', texte: 'Leth (34) calcule la limite de 18 jours au-delà de laquelle la stase devient irréversible. La Monarchie utilise des durées de 40 à 60 jours. Elle n\'a pas fourni la méthode pour ces durées — elle a été extrapolée.' },
      { titre: 'Les 3 patients sans dossier', texte: '12 patients en stase actuellement. 3 sans dossier médical, assignés par ordre royal. Elle a demandé à Sylkra. Pas de réponse encore. Elle maintient la stase.' },
    ],
    sorts: ['Stase de préservation', 'Cohésion féerique', 'Barrière de glace médicale'],
    relations: [
      { id: 53, nom: 'Sylkra', type: 'supérieur', note: 'Coordonne les ressources médicales royales. A refusé de répondre sur les patients sans dossier.' },
      { id: 34, nom: 'Leth', type: 'allié', note: 'Référence Fée pour la magie de cohésion. A calculé les durées maximales sûres.' },
    ],
    lore_long: `Velskraeth combine stase glacée et magie Fée pour préserver des blessés graves à Crysalme. Ses techniques ont été extrapolées pour des stases de 40 à 60 jours — au-delà de la limite de 18 jours calculée avec Leth (34). 3 patients en stase sans dossier médical. Sylkra (53) n'a pas encore répondu à sa demande.`,
  },

  // ── 336 · THYVALVAE ──────────────────────────────────────────
  336: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La frontière vue de l\'autre côté', texte: 'Née à la frontière de Crysalme. Après le Gel Éternel, la frontière devient une zone de gel empêchant les passages normaux. À 16 ans, elle traverse seule pour la première fois. Il y a des gens qui ne peuvent pas revenir.' },
      { titre: 'Le premier passage guidé', texte: 'À 22 ans, elle guide son premier passage — un Givrin dont la famille est de l\'autre côté depuis le Gel. 3 heures dans des zones de gel vif. La personne arrive avec des engelures légères. Elle note les points difficiles.' },
      { titre: 'Le réfugié politique', texte: 'À 27 ans, Aethren (54) lui demande de faire passer un Dissident recherché par l\'Empire. Elle demande pourquoi. Réponse partielle. Elle fait passer sans insister pour les détails.' },
      { titre: 'Les routes cartographiées', texte: 'Après 6 ans, elle a cartographié mentalement 8 routes à travers les zones glacées de la frontière. Routes inconnues des patrouilles impériales. Thyrkra (168) lui demande de les partager avec les Dissidents.' },
      { titre: 'Les 3 passages prévus', texte: 'Aethren (54) demande 3 passages pour le mois — un groupe de 4, une personne seule urgente, et un troisième dont les détails ne lui ont pas encore été donnés. Elle attend les détails avant d\'accepter le troisième.' },
    ],
    sorts: ['Voie de glace', 'Cocon féerique', 'Brume frontière'],
    relations: [
      { id: 54, nom: 'Aethren', type: 'allié', note: 'Coordonne les passages côté Crysalme. Donne les priorités et profils — parfois partiellement.' },
      { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Réceptionne les arrivants côté opposé. A reçu les routes cartographiées.' },
    ],
    lore_long: `Thyvalvae guide des réfugiés à travers les zones glacées de la frontière de Crysalme. 8 routes cartographiées mentalement sur 6 ans — inconnues des patrouilles impériales, maintenant partagées avec le réseau Dissident. Passage urgent demandé par Aethren (54) avec informations minimales. Elle attend les détails du troisième passage prévu.`,
  },

  // ── 337 · ISKRAETH ──────────────────────────────────────────
  337: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'Le premier dégel', texte: 'À 30 ans, il voit son premier dégel partiel — 8 ans où la glace se réduit d\'un tiers. Les gens de l\'époque pensaient que c\'était permanent. Il avait 30 ans — trop jeune pour savoir que c\'était un cycle. Il apprend ce fait 80 ans plus tard.' },
      { titre: 'Les deux autres cycles', texte: 'Le deuxième cycle à ses 120 ans — 60 ans de gel intense suivi d\'un dégel partiel. Le troisième à 210 ans — 30 ans de gel puis dégel 20 ans. À 280 ans, le Gel Éternel commence. Plus intense. Les gens l\'appellent Éternel dès la 5ème année.' },
      { titre: 'La dissonance institutionnelle', texte: 'La Monarchie veut utiliser ses récits pour normaliser le Gel Éternel. Il refuse — ce cycle a des caractéristiques qu\'il n\'a pas vues dans les précédents. Il ne va pas dire l\'inverse pour rassurer une institution.' },
      { titre: 'La fenêtre de Velskrevyn', texte: 'Velskrevyn (342) lui présente ses calculs sur la fenêtre de 18 mois. Iskraeth écoute. Les calculs correspondent à des alignements qu\'il a observés avant le dégel du deuxième cycle. Il dit que ça correspond à quelque chose. Pas à une confirmation.' },
      { titre: 'Les récits et les lacunes', texte: 'Il donne des récits réguliers à Karath (52) pour archivage. Sa mémoire des premières décennies présente des lacunes. Karath aide à les combler via des archives de l\'époque — elles-mêmes incomplètes.' },
    ],
    sorts: ['Gel de cycle', 'Mémoire féerique', 'Stase ancienne'],
    relations: [
      { id: 52, nom: 'Karath', type: 'allié', note: 'Archive ses récits. Aide à combler les lacunes mémorielles avec des sources écrites.' },
      { id: 164, nom: 'Syraris', type: 'allié', note: 'Contemporain avec perspective à long terme naissante. Conversations personnelles sur les cycles.' },
    ],
    lore_long: `Iskraeth a 300 ans et a vu 3 cycles de gel et dégel à Crysalme. Le Gel Éternel actuel a des caractéristiques qu'il n'a pas vues dans les précédents. La correspondance entre les calculs de Velskrevyn (342) et ses observations du deuxième cycle existe. Ce n'est pas une confirmation. Sa mémoire des premières décennies présente des lacunes croissantes.`,
  },

  // ── 338 · VELKRAETH ──────────────────────────────────────────
  338: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La première gravure', texte: 'À 14 ans, elle grave un souvenir dans un bloc de glace pour une voisine âgée qui craint de perdre la mémoire de son mari. La gravure dure 20 ans. L\'apprentissage commence.' },
      { titre: 'L\'intégration royale', texte: 'À 30 ans, Thyval (55) l\'approche pour archiver des souvenirs dynastiques. Sa technique combinée Glace/Fée produit des archives de qualité supérieure. Elle accepte sans comprendre entièrement ce qu\'implique travailler pour une institution.' },
      { titre: 'Le souvenir compromettant', texte: 'À 45 ans, Thyval lui confie le souvenir d\'une décision royale qui a causé des morts. Elle le grave avec la même précision que les autres. Velkren (162) lui pose la question de la responsabilité de l\'archiviste.' },
      { titre: 'Les souvenirs sélectifs', texte: 'Elle réalise que Thyval sélectionne ce qu\'il lui confie. Il y a des événements dont aucun souvenir ne lui a été soumis. Ses archives sont complètes sur les souvenirs reçus. Incomplètes sur l\'histoire.' },
      { titre: 'Les 12 blocs pour Keldris', texte: 'Thyval demande que 12 blocs récents soient accessibles à Keldris (57), agent impérial. Elle exécute. Elle a demandé pourquoi. Thyval a dit "nécessité politique". Pas de détails supplémentaires.' },
    ],
    sorts: ['Gravure de gel', 'Mémoire féerique', 'Bloc de glace stable'],
    relations: [
      { id: 55, nom: 'Thyval', type: 'supérieur', note: 'Source principale de souvenirs royaux. Sélectionne ce qui est archivé. A demandé l\'accès de Keldris sans explication suffisante.' },
      { id: 162, nom: 'Velkren', type: 'allié', note: 'Archiviste indépendant. Partage de techniques. Pose des questions sur les limites de la neutralité archivistique.' },
    ],
    lore_long: `Velkraeth grave des souvenirs dans la glace — ses archives durent des siècles. 340 blocs. Les souvenirs sont choisis par Thyval (55). Il y a des événements dont aucun souvenir ne lui a été confié. Thyval a demandé que 12 blocs récents soient ouverts à Keldris (57). "Nécessité politique." Elle n'a pas obtenu d'explication suffisante.`,
  },

  // ── 339 · SYLKRITHVAE ──────────────────────────────────────────
  339: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La première sculpture', texte: 'À 12 ans, elle sculpte une figure dans la glace qui se dégrade en 3 ans. À 15 ans, la refait avec magie Fée intégrée. La figure tient 10 ans. Elle comprend la différence.' },
      { titre: 'La commande de Karath', texte: 'À 28 ans, Karath (52) lui commande une sculpture mémorielle d\'un événement de 80 ans passé. Elle travaille 3 mois. La sculpture est intégrée à l\'archive de Crysalme.' },
      { titre: 'La sculpture politique', texte: 'À 40 ans, la sculpture mémorielle d\'une décision monarchique controversée est créée avec précision. La Monarchie demande qu\'elle ne soit pas mise en circulation. Karath la garde en archives internes. Elle existe.' },
      { titre: 'Les récits d\'Iskraeth', texte: 'Iskraeth (337) lui donne accès à ses récits sur les cycles précédents. Elle entame une série de sculptures sur ces cycles. Ils donnent une perspective sur le Gel Éternel actuel — il s\'inscrit dans une série.' },
      { titre: 'La 5ème sculpture', texte: 'Série de 7 en cours. 4 terminées. La 5ème doit représenter le Gel Éternel actuel. Elle ne sait pas comment représenter un événement sans connaître son dénouement. Elle recommence ses esquisses.' },
    ],
    sorts: ['Éclat de sculpture', 'Cohésion féerique', 'Forme figée'],
    relations: [
      { id: 52, nom: 'Karath', type: 'client', note: 'Commanditaire principal. A gardé une sculpture controversée en archives internes à demande de la Monarchie.' },
      { id: 337, nom: 'Iskraeth', type: 'allié', note: 'Fournit des récits de premier plan sur les cycles précédents. Source narrative pour la série.' },
    ],
    lore_long: `Sylkrithvae crée des sculptures de glace-mémoire qui durent 100 ans sans fondre. Série de 7 sur les cycles de Crysalme — 4 terminées. La 5ème doit représenter le Gel Éternel actuel. Elle ne sait pas comment représenter ce qui n'est pas terminé. Une sculpture controversée existe dans les archives de Karath (52) — non visible à demande de la Monarchie.`,
  },

  // ── 340 · THYVALSKREN ──────────────────────────────────────────
  340: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La glace comme miroir', texte: 'À 14 ans, elle découvre que le Lac Krael gelé réfléchit les étoiles avec une précision supérieure à un miroir poli. 3 nuits d\'observation et de notes. Première prédiction de trajectoire confirmée 6 mois plus tard.' },
      { titre: 'L\'astronome royale', texte: 'À 27 ans, Thyval (55) l\'intègre à la cour. Sa méthode utilisant la glace comme instrument est plus précise que les instruments standard dans les conditions de Crysalme.' },
      { titre: 'La décision avant la lecture', texte: 'À 35 ans, Thyval prend une décision politique et lui demande une lecture après coup — pas avant. Elle le signale. Il écoute. Ça recommence deux fois depuis.' },
      { titre: 'La fenêtre de 18 mois', texte: 'Ses observations des alignements sur 6 mois correspondent exactement aux calculs de Velskrevyn (342). Elle présente la concordance à Thyval. Il dit "je le sais". Il savait déjà. Il ne lui avait pas dit d\'où.' },
      { titre: 'Le suivi mensuel', texte: 'Elle observe la progression vers la fenêtre mensuellement. Elle rapporte à Thyval et partage avec Velkris (166) indépendamment — non demandé par la Monarchie, non interdit.' },
    ],
    sorts: ['Réfraction de glace', 'Éclat stellaire', 'Carte de glace'],
    relations: [
      { id: 55, nom: 'Thyval', type: 'supérieur', note: 'Reçoit les lectures. Savait déjà la concordance avec Velskrevyn avant qu\'elle le rapporte.' },
      { id: 166, nom: 'Velkris', type: 'allié', note: 'Astronome indépendant. Partage de données comparatives. Non autorisé par la Monarchie, non interdit.' },
    ],
    lore_long: `Thyvalskren lit les trajectoires stellaires dans les surfaces glacées réfléchissantes de Crysalme. Ses observations confirment la fenêtre de 18 mois de Velskrevyn (342). Thyval (55) savait déjà avant qu'elle le rapporte — source inconnue d'elle. Elle partage ses données avec Velkris (166) indépendamment de la Monarchie.`,
  },

  // ── 341 · ISKRAVEN ──────────────────────────────────────────
  341: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'Le premier calcul', texte: 'À 19 ans, il calcule qu\'un cycle de gel correspond à un alignement stellaire sur 200 ans de données archivées. La correspondance est presque parfaite. Ses professeurs disent "intéressant" et n\'en reparlent plus.' },
      { titre: 'La cour astronomique', texte: 'À 28 ans, Thyval (55) l\'inclut dans la cour pour sa méthode de calcul des cycles longs. Il calcule que l\'alignement du Gel Éternel n\'est pas à son point de retournement avant 80 à 120 ans. Ce n\'est pas le résultat attendu.' },
      { titre: 'La marginalisation', texte: 'À 42 ans, la cour choisit la méthode de Velskrevyn (342) sur la fenêtre de 18 mois. Il présente ses contre-calculs. Il n\'est pas exclu formellement — les commandes se tarissent.' },
      { titre: 'Les données d\'Iskraeth', texte: 'Iskraeth (337) lui partage 300 ans d\'observations directes. Il intègre ces données dans ses modèles sur 4 mois. Sa prédiction est ajustée à 60 à 90 ans. Pas une capitulation — une correction.' },
      { titre: 'La prédiction révisée', texte: 'Sa prédiction actuelle : dégel dans 60 à 90 ans. Karath (52) l\'a archivée comme perspective minoritaire. Velkris (166) continue de débattre. Personne d\'autre ne l\'écoute.' },
    ],
    sorts: ['Rayon stellaire', 'Tempête de glace', 'Alignement stellaire'],
    relations: [
      { id: 52, nom: 'Karath', type: 'allié', note: 'A archivé sa prédiction comme perspective minoritaire sans la valider ni l\'invalider.' },
      { id: 166, nom: 'Velkris', type: 'contact', note: 'Seul astronome qui débat avec ses calculs sérieusement. Confrontations répétées, aucune résolution.' },
    ],
    lore_long: `Iskraven calcule que le dégel de Crysalme n'aura lieu que dans 60 à 90 ans — pas 18 mois. Sa prédiction contredit Velskrevyn (342). La cour a choisi Velskrevyn. Il a ajusté ses calculs avec les données d'Iskraeth (337) — correction, pas capitulation. Karath (52) l'a archivé comme perspective minoritaire.`,
  },

  // ── 342 · VELSKREVYN ──────────────────────────────────────────
  342: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'Le cycle dans les données', texte: 'À 16 ans, elle accède à 400 ans de relevés astronomiques de Crysalme. À 18 ans, elle identifie un cycle de 280 ans dans les alignements. Elle n\'a pas encore compris ce que ça signifie pour le gel.' },
      { titre: 'Le calcul de la fenêtre', texte: 'À 30 ans, en croisant ses données avec les archives climatiques de Karath (52), elle identifie la corrélation entre le cycle de 280 ans et les dégels historiques. La fenêtre de 18 mois émerge du calcul.' },
      { titre: 'La présentation à la cour', texte: 'À 33 ans, la cour accueille favorablement ses calculs. Cette utilité politique l\'inquiète. Elle précise que ses calculs donnent des conditions propices, pas une garantie. La précision est ignorée dans les communications royales.' },
      { titre: 'L\'usage Dissident', texte: 'Velkren (162) l\'approche 6 mois après. Les Dissidents veulent utiliser la fenêtre pour planifier des opérations. Elle fournit les calculs détaillés. La frontière entre astronome et stratège est franchie sans qu\'elle l\'ait décidé.' },
      { titre: 'Les 14 mois restants', texte: 'La fenêtre commence dans 14 mois. Thyvalskren (340) confirme indépendamment. Iskraven (341) conteste. Elle a répondu à ses contre-calculs une fois. Elle a décidé de ne pas continuer à répondre.' },
    ],
    sorts: ['Champ de glace', 'Projection stellaire', 'Convergence d\'alignement'],
    relations: [
      { id: 162, nom: 'Velkren', type: 'allié', note: 'Contact Dissident. Intègre ses calculs dans la planification opérationnelle du réseau.' },
      { id: 54, nom: 'Aethren', type: 'allié', note: 'Reçoit les implications pratiques de la fenêtre pour les opérations de passage.' },
    ],
    lore_long: `Velskrevyn a calculé la fenêtre de 18 mois — une convergence d'alignements stellaires propice à un dégel à Crysalme, débutant dans 14 mois. Méthode reproductible. Thyvalskren (340) confirme indépendamment. Les Dissidents utilisent ses calculs pour planifier des opérations. La frontière entre astronome et stratège a été franchie sans qu'elle le décide.`,
  },

  // ── 343 · THYRKRAVEL ──────────────────────────────────────────
  343: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'Le Givrin impérial', texte: 'À 15 ans, il est recruté comme informateur pour un réseau impérial. Il est Givrin — accès naturel à des espaces que les agents non-Givrins ne peuvent pas atteindre facilement. Il accepte sans comprendre entièrement dans quoi il entre.' },
      { titre: 'L\'affectation à Crysalme', texte: 'À 29 ans, Keldris (57) l\'affecte à la surveillance des calculs astronomiques givrins. Il construit son identité d\'astronome indépendant sur 2 ans avant d\'approcher les milieux scientifiques locaux.' },
      { titre: 'Les calculs de Velskrevyn', texte: 'À 35 ans, il a accès aux travaux de Velskrevyn (342) avant leur présentation à la cour. Il les transmet à Keldris avant la présentation officielle. L\'Empire a l\'information en avance.' },
      { titre: 'La concurrence avec la Monarchie', texte: 'Keldris lui précise que la Monarchie cherche à établir des accords préférentiels avant le dégel pour sécuriser des positions économiques. Sa surveillance des plans de Thyval (55) est liée à ces accords.' },
      { titre: 'Les archives ouvertes', texte: 'Thyval (55) demande que des archives de Velkraeth (338) soient ouvertes à Keldris. Thyrkravel ne sait pas si c\'est une concession, un test, ou une manœuvre. Il attend l\'analyse de Keldris.' },
    ],
    sorts: ['Éclat stellaire', 'Gel tactique', 'Camouflage stellaire'],
    relations: [
      { id: 57, nom: 'Keldris', type: 'supérieur', note: 'Reçoit les rapports sur les calculs astronomiques et les plans de la Monarchie.' },
      { id: 55, nom: 'Thyval', type: 'adversaire', note: 'Cible principale de surveillance. Ses décisions sur la fenêtre sont l\'information prioritaire.' },
    ],
    lore_long: `Thyrkravel est un agent impérial infiltré dans les milieux astronomiques de Crysalme sous couverture d'astronome indépendant. Il a transmis les calculs de Velskrevyn (342) à Keldris (57) avant leur présentation officielle. Thyval (55) a ouvert des archives à Keldris — raison inconnue. Sa couverture tient depuis 8 ans avec un risque de compromission.`,
  },

  // ── 344 · SYLKRAVEN ──────────────────────────────────────────
  344: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La lecture familiale', texte: 'À 12 ans, son père — conseiller de la génération précédente — lui explique la tradition de lecture stellaire Givrin. Pas comme une mystique mais comme une méthode : positions stellaires, conditions climatiques, ressources, décisions. La chaîne existe.' },
      { titre: 'Le conseil royal', texte: 'À 32 ans, Thyval (55) le nomme conseiller pour les affaires célestes. Sa méthode plus rigoureuse est bien reçue. Il demande immédiatement l\'accès aux archives de Karath (52) pour affiner ses corrélations.' },
      { titre: 'La décision avant la lecture', texte: 'À 40 ans, Thyval prend une décision diplomatique et lui demande une lecture pour la valider après coup. Il le signale. Thyval écoute. Ça recommence deux fois depuis.' },
      { titre: 'Les questions de Keldris', texte: 'Keldris (57) lui pose des questions précises sur les corrélations stellaires — questions qui montrent que l\'Empire a déjà des informations substantielles sur la fenêtre. Il répond prudemment.' },
      { titre: 'La lecture de la fenêtre', texte: 'Il prépare une lecture de la fenêtre de 18 mois pour la cour. Elle doit être astronomiquement précise et politiquement lisible. Ces deux exigences créent une tension que sa méthode conditionnelle ne résout pas entièrement.' },
    ],
    sorts: ['Lance de glace', 'Lumière stellaire', 'Prédiction de gel'],
    relations: [
      { id: 57, nom: 'Keldris', type: 'contact', note: 'Pose des questions montrant une connaissance préalable. Contact diplomatique de surface.' },
      { id: 29, nom: 'Telos', type: 'allié', note: 'Partage intellectuel sur les traditions de lecture stellaire d\'autres régions.' },
    ],
    lore_long: `Sylkraven lit les étoiles pour valider les décisions politiques de la Monarchie Givrin. Il prépare la lecture officielle de la fenêtre de 18 mois. Keldris (57) a posé des questions montrant que l'Empire a des informations préalables sur la fenêtre — source inconnue. Thyval (55) a pris des décisions avant les lectures deux fois depuis le signalement.`,
  },

  // ── 345 · VELTHKRA ──────────────────────────────────────────
  345: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'Le premier contact', texte: 'À 16 ans, elle s\'approche du Champ Gelé pour la première fois. Elle entend quelque chose — pas un son physique, une présence dans sa perception spectrale naissante. Elle ne sait quoi en faire pendant 3 ans.' },
      { titre: 'L\'apprentissage avec Velsa', texte: 'Velsa (58) la trouve à 19 ans errant à la frontière du Champ en état de semi-présence spectrale. Elle la ramène et lui apprend à gérer le contact avec des présences spectrales fortes.' },
      { titre: 'Les fragments entendus', texte: 'À 24 ans, elle transmet à un historien des noms et unités militaires. Certains éléments correspondent aux archives. D\'autres ne correspondent à rien. L\'historien conclut à des coïncidences.' },
      { titre: 'La vérification de Velskra', texte: 'Velskra (169) la teste avec des éléments qu\'il connaît indépendamment. Certaines réponses sont exactes au-delà de la probabilité. Il documente une anomalie statistique — pas une confirmation d\'authenticité.' },
      { titre: 'Les sessions régulières', texte: '3 sessions par semaine dans le Champ, 2 à 3 heures. Velskra continue de collecter des données. Thyvalskra (347) sait qu\'elle entre. Il n\'a pas demandé qu\'elle arrête.' },
    ],
    sorts: ['Voix du Champ', 'Gel spectral', 'Barrière de glace'],
    relations: [
      { id: 58, nom: 'Velsa', type: 'mentor', note: 'L\'a formée à gérer le contact spectral fort. Référence pour les questions sur la nature de ses perceptions.' },
      { id: 169, nom: 'Velskra', type: 'allié', note: 'Vérifie ses affirmations indépendamment. A documenté une anomalie statistique. Continue de collecter.' },
    ],
    lore_long: `Velthkra entre dans le Champ Gelé de Crysalme et affirme entendre les présences des soldats gelés. Velskra (169) vérifie ses affirmations — anomalie statistique documentée, pas de conclusion sur l'authenticité. Elle ne peut pas trancher elle-même entre perception authentique et construction perceptive. Thyvalskra (347) tolère ses présences.`,
  },

  // ── 346 · ISKRAVEL ──────────────────────────────────────────
  346: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La traversée de la glace', texte: 'À 17 ans, il découvre que ses projections spectrales traversent les murs de glace. Il teste les limites pendant un an avant de comprendre les implications pratiques.' },
      { titre: 'Le réseau Dissident', texte: 'À 24 ans, Thyrkra (168) le contacte via un intermédiaire. Le réseau a un problème de communication entre zones séparées par la glace. Sa capacité est la solution. Il transmet, ils payent en ressources.' },
      { titre: 'L\'utilisation du Champ', texte: 'À 29 ans, il comprend que le Champ Gelé amplifie ses projections. Il commence à l\'utiliser comme relais. Thyvalskra (347) le voit entrer. Il ne lui demande pas d\'arrêter. Il ne lui donne pas d\'autorisation non plus.' },
      { titre: 'Les leçons de Velsa', texte: 'Velsa (58) lui apprend que le Champ enregistre les présences qui y passent. Ses transmissions laissent des traces spectrales qu\'un opérateur avancé pourrait détecter et retracer. Il ajuste sa méthode.' },
      { titre: 'Le volume actuel', texte: '8 à 12 messages par semaine. 3 à 4 via le Champ. Thyvalskra entre parfois dans le Champ pendant ses sessions. Ils ne se sont jamais croisés directement. Ça ne peut pas durer.' },
    ],
    sorts: ['Transmission spectrale', 'Présence fantôme', 'Gel de projection'],
    relations: [
      { id: 58, nom: 'Velsa', type: 'mentor', note: 'A appris à naviguer les zones spectrales glacées. A signalé les traces spectrales laissées dans le Champ.' },
      { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Contact Dissident principal. Reçoit et distribue les transmissions dans le réseau.' },
    ],
    lore_long: `Iskravel transmet des messages via projections spectrales à travers la glace de Crysalme. Il utilise le Champ Gelé comme relais d'amplification. Thyvalskra (347) le sait — tolérance silencieuse instable. Velsa (58) a signalé que ses transmissions laissent des traces spectrales dans le Champ. Velthkra (345) entre aussi. Il ne sait pas ce qu'elle perçoit.`,
  },

  // ── 347 · THYVALSKRA ──────────────────────────────────────────
  347: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La première entrée dans le Champ', texte: 'À 20 ans, il accompagne un gardien senior dans le Champ pour la première fois. La pression des milliers de présences en suspension est physique — pas douloureuse, mais présente. Il comprend que ce lieu nécessite une attention particulière.' },
      { titre: 'La nomination royale', texte: 'À 31 ans, Thyval (55) le nomme gardien du Champ après le départ du gardien précédent. Sa combinaison Glace/Spectre est adaptée à la navigation dans les deux couches du Champ.' },
      { titre: 'La demande impériale refusée', texte: 'À 35 ans, Keldris (57) fait sa première demande d\'accès impérial au Champ. Il refuse. Keldris escalade vers Thyval. Thyval soutient le refus sans hésiter. Il note que Thyval a soutenu sans hésiter.' },
      { titre: 'Les présences qui s\'organisent', texte: 'À 43 ans, il observe que certaines présences spectrales du Champ se déplacent de façon coordonnée. Velsa (58) dit que c\'est cohérent avec des processus spectraux anciens.' },
      { titre: 'La surveillance actuelle', texte: 'Il surveille le Champ 4 jours par semaine. Il sait que Velthkra (345) et Iskravel (346) y entrent. Il n\'est pas intervenu. Velskra (169) a accès formel. Huitième demande de Keldris ce mois — refusée.' },
    ],
    sorts: ['Mur de glace', 'Répulsion spectrale', 'Ancrage au Champ'],
    relations: [
      { id: 57, nom: 'Keldris', type: 'adversaire', note: 'Fait des demandes d\'accès impérial au Champ — toutes refusées. Huitième demande ce mois.' },
      { id: 169, nom: 'Velskra', type: 'allié', note: 'Seul chercheur avec accès formel au Champ. Documente les présences spectrales.' },
    ],
    lore_long: `Thyvalskra garde le Champ Gelé de Crysalme. 8 demandes d'accès de Keldris (57) — toutes refusées. Velthkra (345) et Iskravel (346) entrent régulièrement — il le sait, il ne les a pas confrontés. Les présences du Champ montrent des signes de coordination. Sa tolérance silencieuse repose sur une définition étroite de son mandat qui pourrait être une erreur.`,
  },

  // ── 348 · VELSKRAVEL ──────────────────────────────────────────
  348: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La question initiale', texte: 'À 18 ans, lors d\'une visite du Champ avec son père, il pose à voix haute : "Est-ce qu\'ils ressentent quelque chose ?" Son père répond non. Il décide de vérifier.' },
      { titre: 'L\'accès formel', texte: 'À 28 ans, Thyvalskra (347) lui accorde un accès formel pour une "étude non invasive". Les méthodes présentées étaient non invasives. Celles utilisées dans la pratique le sont moins. Il n\'a pas mentionné l\'écart.' },
      { titre: 'L\'anomalie avec Velthkra', texte: 'À 34 ans, il commence à vérifier les affirmations de Velthkra (345). Les premiers tests produisent des résultats au-delà de la probabilité de coïncidence. Il documente une anomalie.' },
      { titre: 'La question d\'Aethren', texte: 'Aethren (54) lui demande si ses résultats sur le Champ s\'appliqueraient aussi aux prisonniers en stase de la Monarchie. Il n\'avait pas anticipé cette connexion. Sa réponse a été prudente.' },
      { titre: 'La 4ème catégorie', texte: '3 ans de données. 4 catégories de présences, dont une 4ème récente — des présences qui perturbent activement ses instruments. Thyvalskra (347) observe aussi une coordination entre présences. Ces deux observations pourraient être liées.' },
    ],
    sorts: ['Sonde spectrale', 'Barrière de glace analytique', 'Perturbation de zone'],
    relations: [
      { id: 345, nom: 'Velthkra', type: 'allié', note: 'Source de données qualitatives. Ses affirmations produisent des anomalies statistiques dans ses vérifications.' },
      { id: 54, nom: 'Aethren', type: 'contact', note: 'A posé la connexion entre les résultats du Champ et les prisonniers politiques en stase.' },
    ],
    lore_long: `Velskravel cherche à prouver que les soldats gelés dans le Champ de Crysalme ont une conscience résiduelle. 3 ans de données — 4 catégories de présences dont une 4ème qui perturbe ses instruments. Aethren (54) a posé la connexion entre le Champ et les prisonniers en stase de la Monarchie. Ses méthodes dépassent les termes de son accès formel.`,
  },

  // ── 349 · ISKRAVELIS ──────────────────────────────────────────
  349: {
    timeline_position: { an: -1, lieu: 'Crysalme', arc: 'Gel Éternel' },
    histoire: [
      { titre: 'La première traversée spectrale', texte: 'À 15 ans, elle découvre accidentellement qu\'elle peut naviguer la couche spectrale de la glace. Elle y reste 20 minutes avant de comprendre comment en sortir. Elle y retourne le lendemain.' },
      { titre: 'Le réseau Dissident', texte: 'À 22 ans, Thyrkra (168) la contacte via des intermédiaires. Le réseau a besoin d\'un passeur pour les zones de gel vif inaccessibles physiquement. Elle pose des conditions sur les passages. Thyrkra accepte.' },
      { titre: 'Le passage refusé', texte: 'À 27 ans, Thyrkra lui propose un profil de passage dont les antécédents sont vagues de façon suspecte. Elle refuse. Thyrkra refuse à son tour. Elle note que Thyrkra a soutenu son refus sans pression.' },
      { titre: 'La comparaison avec Velath', texte: 'Velath (49) lui partage ses méthodes de passage physiques d\'une autre région. La comparaison est instructive. Il note l\'avantage de sa méthode spectrale : les traces se dissipent plus vite que les traces physiques.' },
      { titre: 'Les routes instables', texte: '6 routes actives, 2 avec sections instables. Thyrkra lui dit que la "fenêtre de 18 mois" va augmenter la demande. Besoin de reconsolidation avant l\'augmentation.' },
    ],
    sorts: ['Traversée de glace', 'Gel spectral', 'Projection fantôme'],
    relations: [
      { id: 168, nom: 'Thyrkra', type: 'allié', note: 'Contact Dissident. Valide les passages et profils. A soutenu son refus sans pression. Signale l\'augmentation de demande.' },
      { id: 49, nom: 'Velath', type: 'allié', note: 'Passeur d\'une autre région. Partage de méthodes. A noté l\'avantage des traces spectrales sur les traces physiques.' },
    ],
    lore_long: `Iskravelis passe des personnes et messages à travers les zones glacées de Crysalme via des routes dans la couche spectrale de la glace — inconnues de l'Empire. 6 routes actives, 2 instables à reconsolider. Thyrkra (168) annonce que la fenêtre de 18 mois va augmenter la demande. Elle ne sait pas toujours ce que les portés transportent — Thyrkra vérifie les profils, elle fait confiance à cette vérification.`,
  },

  // ── 350 · SAREVOLT ───────────────────────────────────────────
  350: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Le réseau de protection', texte: 'À 18 ans, il découvre que les Élus de son quartier de l\'Isthme s\'entraident discrètement. Il commence à coordonner ces échanges informels.' },
      { titre: 'L\'intégration Dissidente', texte: 'À 25 ans, les Dissidents lui proposent un soutien structuré pour un réseau de protection qu\'il gère seul depuis 3 ans. Il accepte la logistique, pas les objectifs politiques.' },
      { titre: 'Les 39 enfants de Virex', texte: 'À 31 ans, 39 enfants Élus à Virex se retrouvent sans famille — extractions impériales, disparitions. Il prend la coordination de leur protection. La décision n\'a pas été débattue. Elle s\'est imposée.' },
      { titre: 'Les 4 checkpoints', texte: 'Thyrkael (351) installe 4 checkpoints autour de Virex. 3 de ses routes de ravitaillement sont coupées. Il recalcule les approvisionnements avec 60% de capacité.' },
      { titre: 'Les plans d\'extraction individuels', texte: '39 plans d\'extraction individuels pour les enfants. Aucun plan pour une urgence chaotique — extraction de masse sans délai de préparation. C\'est le scénario le plus probable si la démonstration de Kasevolt identifie des signatures.' },
    ],
    sorts: ['Protection de zone', 'Frappe de défense', 'Résistance collective'],
    relations: [
      { id: 261, nom: 'Sarevorn', type: 'allié', note: 'Contact Dissident pour les ressources logistiques. Fournit les routes de ravitaillement.' },
      { id: 179, nom: 'Kareth', type: 'allié', note: 'Contact local pour les informations sur les déplacements impériaux à Virex.' },
    ],
    lore_long: `Sarevolt coordonne la protection de 39 enfants Élus à Virex. 4 checkpoints de Thyrkael (351) ont réduit ses routes de ravitaillement à 60%. Il a 39 plans d'extraction individuels — pas de plan pour une urgence chaotique. La démonstration du prototype de Kasevolt (360) dans 2 semaines est son scénario de rupture : des identifications simultanées déclencheraient des urgences multiples qu'il n'a pas planifiées.`,
  },

  // ── 351 · THYRKAEL ───────────────────────────────────────────
  351: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La formation tactique', texte: 'À 20 ans, il intègre les unités tactiques impériales spécialisées dans les zones de saturation. Sa capacité Combat et sa résistance aux anomalies électriques le distinguent.' },
      { titre: 'La mission de Virex', texte: 'À 31 ans, Avel (64) lui confie la sécurisation progressive de Virex — installation de checkpoints, cartographie des flux de population, identification des points de présence Dissidente.' },
      { titre: 'Les 4 checkpoints', texte: 'Il installe 4 checkpoints dans les 3 premières semaines — des positions qui couvrent les routes principales sans déclencher immédiatement les accords Confédération. Vashkael (352) ouvre des négociations. Il continue les opérations pendant les négociations.' },
      { titre: 'La triangulation du refuge', texte: 'Les patterns de déplacement autour des checkpoints lui donnent une triangulation approximative du refuge des 39 enfants Élus. Dans 2 à 4 semaines, la précision sera suffisante pour une opération.' },
      { titre: 'L\'absence de protocole enfants', texte: 'Il n\'a pas de protocole d\'Avel pour les enfants Élus. L\'absence n\'est pas une autorisation tacite — c\'est une lacune. Il a demandé des instructions. Il attend.' },
    ],
    sorts: ['Frappe tactique', 'Verrouillage de zone', 'Résistance de saturation'],
    relations: [
      { id: 64, nom: 'Avel', type: 'supérieur', note: 'A confié la mission de Virex. N\'a pas fourni de protocole pour les enfants Élus.' },
      { id: 258, nom: 'Carevorn', type: 'allié', note: 'Coordination des unités de terrain pour les opérations des checkpoints.' },
    ],
    lore_long: `Thyrkael installe les checkpoints impériaux autour de Virex et triangule la position du refuge de Sarevolt (350). Dans 2 à 4 semaines, la précision sera suffisante. Il n'a pas de protocole d'Avel (64) pour les 39 enfants Élus — il attend des instructions. Les négociations de Vashkael (352) sur la juridiction des checkpoints n'ont pas modifié ses opérations.`,
  },

  // ── 352 · VASHKAEL ───────────────────────────────────────────
  352: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La formation de négociateur', texte: 'À 23 ans, il intègre le corps diplomatique de la Confédération spécialisé dans les zones disputées. L\'Isthme est son premier poste long.' },
      { titre: 'Le mandat de Virex', texte: 'À 29 ans, Thyven (62) lui confie les négociations sur les checkpoints de Thyrkael (351). Il reçoit un dossier de 47 écarts documentés par Thyrkrael (364) comme base de négociation.' },
      { titre: 'La position impériale', texte: 'L\'Empire interprète les accords de façon extensive — les zones ambiguës sont impériales par défaut. Chaque tentative de précision textuelle est acceptée en réunion et ignorée en opération.' },
      { titre: 'L\'escalade de Thyven', texte: 'Thyven a fixé une limite de 3 semaines avant d\'escalader le dossier à un niveau supérieur. Cette escalade signifie une modification des accords de coopération — potentiellement un retrait de données partagées sur les zones de saturation.' },
      { titre: 'Le levier des données', texte: 'Si Thyven retire les données de Karevolt (356) du partage avec l\'Empire, les détecteurs de Kasevolt (360) perdent une partie de leur précision. C\'est le seul levier réel dans les 3 semaines. Il n\'a pas encore eu l\'autorisation de le mentionner en négociation.' },
    ],
    sorts: ['Persuasion de terrain', 'Résistance de position', 'Analyse protocolaire'],
    relations: [
      { id: 62, nom: 'Thyven', type: 'supérieur', note: 'A fixé la limite de 3 semaines. Détient l\'autorisation du levier des données.' },
      { id: 178, nom: 'Velok', type: 'allié', note: 'Homologue impérial dans les négociations. Interprète les accords de façon extensive.' },
    ],
    lore_long: `Vashkael négocie la juridiction des checkpoints de Thyrkael (351) avec l'Empire. Base : 47 écarts documentés par Thyrkrael (364). Thyven (62) a fixé 3 semaines avant escalade. Le seul levier réel est le retrait des données de Karevolt (356) du partage — ce qui dégraderait la précision des détecteurs de Kasevolt (360). Il n'a pas encore l'autorisation de le mentionner.`,
  },

  // ── 353 · KAEROLT ────────────────────────────────────────────
  353: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'L\'instruction sans questions', texte: 'À 22 ans, il ouvre son premier espace d\'entraînement à Virex avec une règle : il enseigne à ceux qui viennent apprendre, sans demander pourquoi. Cette règle est devenue sa réputation.' },
      { titre: 'Les élèves de Kareth', texte: 'À 28 ans, Kareth (179) lui envoie des élèves avec un message indirect : ce sont des priorités. Il comprend ce que ça signifie sans que Kareth l\'explique.' },
      { titre: 'Le programme accéléré', texte: 'Les élèves prioritaires reçoivent un programme réduit à l\'essentiel — ce dont on a besoin pour survivre 30 jours dans une zone hostile, pas pour maîtriser une discipline. Il adapte sans modifier sa règle.' },
      { titre: 'L\'élève qui a disparu', texte: 'Un élève qu\'il avait formé il y a 6 mois a disparu — sans trace. Il ne sait pas si c\'est une extraction réussie, une capture, ou une fuite volontaire. Il n\'a pas demandé à Kareth.' },
      { titre: 'La demande de formation de groupe', texte: 'Sarevolt (350) a contacté Kareth pour une formation de groupe — les 39 enfants Élus de Virex. Kareth lui a transmis. Le format est nouveau pour lui. Il réfléchit à comment adapter son programme.' },
    ],
    sorts: ['Frappe d\'urgence', 'Survie de terrain', 'Résistance physique'],
    relations: [
      { id: 179, nom: 'Kareth', type: 'allié', note: 'Envoie des élèves prioritaires. Communication indirecte sur leur nature.' },
      { id: 195, nom: 'Vasketh', type: 'allié', note: 'Contact pour les ressources de formation dans les zones de saturation.' },
    ],
    lore_long: `Kaerolt enseigne la survie à Virex sans demander les affiliations de ses élèves. Kareth (179) lui envoie des priorités — il comprend sans qu'on lui explique. Programme accéléré : 30 jours de survie en zone hostile. Sarevolt (350) a demandé une formation de groupe pour les 39 enfants Élus. Le format est nouveau. Un élève formé il y a 6 mois a disparu — il n'a pas demandé à Kareth ce qui s'est passé.`,
  },

  // ── 354 · THYRKORN ───────────────────────────────────────────
  354: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La logistique comme vocation', texte: 'À 20 ans, il coordonne les approvisionnements d\'un réseau communautaire dans l\'Isthme. C\'est de la logistique civile. Ça lui enseigne les principes.' },
      { titre: 'L\'intégration Dissidente', texte: 'À 26 ans, Vethyskel (274) lui propose une coordination plus complexe — les extractions Dissidentes dans l\'Isthme. Les principes sont les mêmes. Les enjeux sont différents.' },
      { titre: 'Le risque de centralisation', texte: 'À 30 ans, il réalise que toutes les connaissances logistiques des extractions actives sont dans sa tête — routes, contacts, fenêtres temporelles. Il sait que c\'est un risque opérationnel. Il n\'a pas encore développé de système de documentation sécurisé.' },
      { titre: 'Les checkpoints de Thyrkael', texte: 'Thyrkael (351) installe 4 checkpoints. 3 de ses 4 extractions actives utilisent des routes qui passent près de ces checkpoints. Il recalcule chaque route individuellement. La charge cognitive augmente.' },
      { titre: 'Le dossier Sarevolt', texte: 'Sarevolt (350) coordonne 39 enfants Élus à Virex. Si une extraction d\'urgence est déclenchée par la démonstration de Kasevolt (360), Thyrkorn devra gérer un volume d\'extractions simultanées sans précédent. Avec tout dans sa tête.' },
    ],
    sorts: ['Coordination de terrain', 'Résistance de pression', 'Neutralisation discrète'],
    relations: [
      { id: 274, nom: 'Vethyskel', type: 'supérieur', note: 'Responsable Dissident des extractions dans l\'Isthme. Fixe les priorités.' },
      { id: 268, nom: 'Aelthys', type: 'allié', note: 'Contact pour les ressources d\'extraction dans les zones difficiles.' },
    ],
    lore_long: `Thyrkorn gère la logistique des extractions Dissidentes dans l'Isthme. Toutes les connaissances — routes, contacts, fenêtres — sont dans sa tête. Risque opérationnel identifié, non résolu. Les checkpoints de Thyrkael (351) ont modifié 3 de ses 4 extractions actives. Si la démonstration de Kasevolt (360) déclenche des urgences multiples simultanées pour les 39 enfants de Sarevolt (350), sa mémoire seule ne suffira pas.`,
  },

  // ── 355 · SAELTHYR ───────────────────────────────────────────
  355: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Le contrat de sécurité', texte: 'À 22 ans, il commence des contrats de sécurité privée dans l\'Isthme. Pas d\'affiliation — celui qui paie commande. C\'est une position commerciale.' },
      { titre: 'L\'extraction observée', texte: 'À 27 ans, il assiste à une extraction impériale forcée dans une ville voisine de Virex. Il ne travaillait pas pour l\'Empire ce jour-là. Ce qu\'il a vu a modifié sa règle de clients acceptables.' },
      { titre: 'Le refus de contrat impérial', texte: 'À 28 ans, il refuse son premier contrat impérial — une mission de sécurité pour une opération dans une zone de saturation. Il ne donne pas de raison. Il rend les arrhes.' },
      { titre: 'L\'affiliation de fait', texte: 'Il ne travaille pas pour les Dissidents. Il refuse les contrats impériaux. La logique de ce positionnement l\'a amené à accepter des missions qui protègent des Élus sans affiliation formelle. Il n\'a pas rejoint les Dissidents. Il fait des choses que les Dissidents payent.' },
      { titre: 'Le mandat actif', texte: 'Il a un mandat de protection actif à proximité des checkpoints de Thyrkael (351) — une famille d\'Élus dont un membre a été identifié par Thyvsaevyn (357). Thyrkorn (354) lui a transmis la mission. Les checkpoints sont à 300 mètres.' },
    ],
    sorts: ['Frappe mercenaire', 'Protection mobile', 'Neutralisation de terrain'],
    relations: [
      { id: 351, nom: 'Thyrkael', type: 'adversaire', note: 'Officier impérial dont les checkpoints sont à proximité de son mandat actif.' },
      { id: 354, nom: 'Thyrkorn', type: 'contact', note: 'Transmet les missions Dissidentes sans affiliation formelle.' },
    ],
    lore_long: `Saelthyr refuse les contrats impériaux depuis qu'il a observé une extraction forcée. Il accepte des missions Dissidentes sans affiliation formelle — la logique de son positionnement l'y a amené. Mandat actif : protection d'une famille d'Élus identifiée par Thyvsaevyn (357), à 300 mètres des checkpoints de Thyrkael (351). Il n'est pas Dissident. Il fait ce que les Dissidents ne peuvent pas faire officiellement.`,
  },

  // ── 356 · KAREVOLT ───────────────────────────────────────────
  356: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les anomalies du quartier', texte: 'À 15 ans, elle cartographie les anomalies électriques de son quartier avant les techniciens officiels. Sa méthode est plus efficace que les méthodes standard.' },
      { titre: 'L\'intégration Confédération', texte: 'À 24 ans, Karesyl (180) la recrute pour le réseau technique de la Confédération. Instruments de qualité. Elle améliore sa méthode.' },
      { titre: 'La donnée partagée', texte: 'À 30 ans, une de ses mesures est utilisée par la Convergence pour localiser un Élu. Elle ne savait pas que cet usage était prévu. Elle demande à Karesyl comment les données sont partagées. La réponse est incomplète.' },
      { titre: 'Les détecteurs de Kasevolt', texte: 'Elle découvre que ses mesures croisées avec les détecteurs de Kasevolt (360) créent un système de localisation d\'Élus qu\'elle n\'a pas conçu. Ce n\'est pas son intention. C\'est le résultat du partage de données.' },
      { titre: 'La réunion sur le partage', texte: 'Elle a demandé une clarification du protocole de partage. Karesyl a accepté une réunion dans 7 jours. Elle veut savoir où ses mesures vont et si des protections existent contre les usages de localisation.' },
    ],
    sorts: ['Décharge de terrain', 'Résistance d\'induction', 'Cartographie électrique'],
    relations: [
      { id: 180, nom: 'Karesyl', type: 'supérieur', note: 'Reçoit ses rapports. A accepté une réunion sur le protocole de partage dans 7 jours.' },
      { id: 360, nom: 'Kasevolt', type: 'adversaire', note: 'Technicien Convergence dont les détecteurs se recoupent avec ses mesures de façon non intentionnelle.' },
    ],
    lore_long: `Karevolt surveille les anomalies électriques dans les zones de saturation de l'Isthme pour la Confédération. Elle a découvert que ses données, croisées avec les détecteurs de Kasevolt (360) de la Convergence, créent un système de localisation d'Élus qu'elle n'a pas conçu. Ce n'est pas son intention — c'est le résultat du partage de données. Réunion avec Karesyl (180) dans 7 jours pour clarifier le protocole.`,
  },

  // ── 357 · THYVSAEVYN ─────────────────────────────────────────
  357: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les signatures comme langage', texte: 'À 17 ans, sa capacité Electrique lui donne une perception naturelle des champs électriques — il entend des signatures que les autres ne perçoivent pas. Cette capacité lui semble naturelle jusqu\'à ce qu\'il réalise qu\'elle ne l\'est pas.' },
      { titre: 'L\'intégration impériale', texte: 'À 25 ans, Lysael (63) le recrute pour le service analytique impérial. Sa perception naturelle combinée à des instruments donne une précision que les instruments seuls ne peuvent atteindre.' },
      { titre: 'La signature de l\'enfant', texte: 'À 29 ans, il identifie une signature électrique plus petite et moins développée — un enfant Élu. Il rapporte à Lysael. Il ne demande pas ce qui s\'est passé ensuite.' },
      { titre: 'Les données de Karesyl', texte: 'Karesyl (180) lui partage des données Confédération sur les anomalies électriques. Il les croise avec ses analyses. L\'image combinée est plus précise. Il remercie Karesyl. Il ne précise pas l\'usage.' },
      { titre: 'Les signatures qui évitent', texte: '8 signatures actives en suivi. 3 évitent ses capteurs — elles savent qu\'elles sont surveillées. Un canal d\'information entre Élus est actif. Il a rapporté ce comportement à Lysael.' },
    ],
    sorts: ['Signature électrique', 'Décharge d\'analyse', 'Résistance de champ'],
    relations: [
      { id: 63, nom: 'Lysael', type: 'supérieur', note: 'Reçoit les analyses et décide des transmissions aux unités opérationnelles.' },
      { id: 180, nom: 'Karesyl', type: 'allié', note: 'Contact Confédération. Ses données sur les anomalies sont croisées sans précision de l\'usage.' },
    ],
    lore_long: `Thyvsaevyn analyse les signatures électriques des Élus de Virex pour le compte impérial. 8 signatures actives en suivi. 3 évitent ses capteurs — un canal d'information entre Élus est actif. Il croise ses données avec celles de Karesyl (180) sans que celle-ci sache l'usage. Il sait ce qui arrive à certains Élus après identification. Il ne demande pas pour les autres.`,
  },

  // ── 358 · VELKRAEL ───────────────────────────────────────────
  358: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les systèmes de quartier', texte: 'À 16 ans, le quartier installe un système de surveillance impérial. Elle passe 6 mois à l\'étudier. À 17 ans, elle le modifie pour la première fois sans comprendre toutes les implications.' },
      { titre: 'L\'intégration Dissidente', texte: 'À 23 ans, Tharvyn (190) la contacte après avoir entendu parler de ses modifications locales. Il lui demande si elle peut entrer dans les systèmes d\'enregistrement et en sortir.' },
      { titre: 'La détection', texte: 'À 27 ans, une de ses intrusions est détectée comme modification suspecte. L\'Empire renforce. Elle développe une nouvelle méthode avec un outil de Sylkavel (264). La course commence.' },
      { titre: 'Les données de Karesyl', texte: 'Tharvyn lui signale que des données Confédération sur les anomalies électriques circulent dans des systèmes impériaux — données qui améliorent la précision de localisation des Élus. Nouvelle cible.' },
      { titre: 'Les systèmes de Thyvsaevyn', texte: 'Elle cible les bases de données de signatures de Thyvsaevyn (357). Les protections sont nouvelles. Ses premières tentatives sont bloquées. Elle attend un outil de Sylkavel (264). Pendant qu\'elle attend, Thyvsaevyn continue d\'analyser.' },
    ],
    sorts: ['Surge d\'intrusion', 'Effacement de trace', 'Lecture de système'],
    relations: [
      { id: 190, nom: 'Tharvyn', type: 'allié', note: 'Identifie les systèmes prioritaires à cibler. Source des priorités d\'intrusion.' },
      { id: 264, nom: 'Sylkavel', type: 'allié', note: 'Développe des outils d\'intrusion spécialisés. Outil en attente pour les protections de Thyvsaevyn.' },
    ],
    lore_long: `Velkrael efface les traces d'Élus dans les systèmes d'enregistrement impériaux de l'Isthme. Chaque intrusion réussie est détectée comme modification — l'Empire renforce, elle améliore. Course continue. Elle cible maintenant les systèmes analytiques de Thyvsaevyn (357). Les protections sont nouvelles. Elle attend un outil de Sylkavel (264). Pendant qu'elle attend, Thyvsaevyn continue d'analyser.`,
  },

  // ── 359 · THYRSAEVYN ─────────────────────────────────────────
  359: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les champs de saturation', texte: 'À 14 ans, il apprend que les zones de saturation électrique créent un bruit de fond qui masque naturellement certaines signatures. Il commence à étudier comment amplifier ce masquage.' },
      { titre: 'Le premier Élu aidé', texte: 'À 24 ans, un Élu lui demande de l\'aide — ses déplacements sont devenus dangereux. Il installe un masquage autour de son appartement. Le masquage tient 3 semaines.' },
      { titre: 'L\'adaptation de la signature', texte: 'À 29 ans, il réalise que les signatures électriques des Élus s\'adaptent progressivement au masquage et finissent par s\'en distinguer. Ce n\'est pas un défaut. C\'est la nature des signatures. Maintenance continue requise.' },
      { titre: 'La connexion avec Velkrael', texte: 'Velkrael (358) le contacte via un intermédiaire Dissident. Elle efface les traces. Il masque les nouvelles signatures. Les deux méthodes se complètent. Il accepte la coordination.' },
      { titre: 'Les 7 masquages actifs', texte: '7 masquages actifs. 3 en expiration dans les prochains jours. 2 nouvelles demandes d\'Élus identifiés par Thyvsaevyn (357). Sa capacité individuelle est atteinte. Il envisage d\'enseigner sa méthode à Thyrekavel (275).' },
    ],
    sorts: ['Brouillage de signature', 'Surcharge localisée', 'Résistance d\'induction'],
    relations: [
      { id: 358, nom: 'Velkrael', type: 'allié', note: 'Contact Dissident. Leurs méthodes se complètent — elle efface, il masque. Coordination des interventions.' },
      { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Ingénieur d\'une autre région. Partage de méthodes de masquage. Candidat à la transmission.' },
    ],
    lore_long: `Thyrsaevyn masque les signatures électriques des Élus de Virex pour les rendre indiscernables du bruit de fond des zones de saturation. 7 masquages actifs. 3 en expiration. 2 nouvelles demandes d'Élus identifiés par Thyvsaevyn (357). Capacité individuelle atteinte. Les masquages durent 2 à 4 semaines — maintenance continue. Il envisage d'enseigner sa méthode à Thyrekavel (275).`,
  },

  // ── 360 · KASEVOLT ───────────────────────────────────────────
  360: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les instruments du père', texte: 'À 16 ans, il démonte et remonte les instruments de mesure électrique de son père. À 17 ans, il en améliore un avec des modifications que son père n\'avait pas pensées.' },
      { titre: 'Le recrutement par la Convergence', texte: 'À 26 ans, Sykavel (242) lui propose une mission directe : développer des instruments de détection précis pour les zones de saturation de l\'Isthme. Il pose des questions techniques. Il accepte.' },
      { titre: 'L\'usage de la précision', texte: 'À 31 ans, ses instruments atteignent une précision suffisante pour distinguer des signatures d\'Élus. Sykavel utilise les premières données pour localiser un Élu. Kasevolt voit les résultats. Il comprend. Il continue.' },
      { titre: 'Les données de Karevolt', texte: 'Sykavel lui présente des données Confédération sur les anomalies électriques. Ces données améliorent significativement la précision de détection. Il n\'a pas posé de question sur l\'origine ou le consentement des sources.' },
      { titre: 'Le prototype avancé', texte: 'Son dernier prototype distingue des signatures d\'Élus dans des zones de saturation de niveau 4. Sykavel lui demande une démonstration terrain à Virex dans 2 semaines. C\'est la première démonstration dans une zone avec des Élus actifs connus.' },
    ],
    sorts: ['Détection de signature', 'Surcharge d\'instrument', 'Analyse de saturation'],
    relations: [
      { id: 242, nom: 'Sykavel', type: 'supérieur', note: 'Reçoit les instruments et intègre les données dans les opérations. A demandé une démonstration terrain.' },
      { id: 356, nom: 'Karevolt', type: 'adversaire', note: 'Données Confédération intégrées sans clarification de l\'usage. Karevolt questionne le protocole de partage.' },
    ],
    lore_long: `Kasevolt développe des détecteurs d'éléments purs basés sur les signatures électriques pour la Convergence. Son dernier prototype distingue des signatures d'Élus dans les zones de saturation les plus denses. Démonstration terrain à Virex dans 2 semaines — sur des Élus réels dans une zone de saturation active. Ses instruments intègrent les données de Karevolt (356). Si elle découvre l'usage de ses données, la source pourrait être coupée avant la démonstration.`,
  },

  // ── 361 · SAELKRAEL ──────────────────────────────────────────
  361: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les bâtiments du quartier', texte: 'À 13 ans, elle explore chaque bâtiment abandonné de son quartier — curiosité structurelle, pas vandalisme. Comment les bâtiments sont construits, où les accès sont, comment les systèmes fonctionnent. Du jeu qui enseigne.' },
      { titre: 'Le premier contact Dissident', texte: 'À 22 ans, Vashera (266) l\'aborde après qu\'elle a signalé une faille dans un bâtiment impérial. Il lui demande si elle peut utiliser cette faille elle-même. Elle dit oui.' },
      { titre: 'La signature électrique', texte: 'À 26 ans, son élément Electrique déclenche une alarme qu\'elle était venue neutraliser. 4 secondes pour sortir. Elle sort avec 3 de marge. Elle passe 2 semaines à comprendre comment masquer sa propre signature pendant une infiltration.' },
      { titre: 'La demande de Sarevolt', texte: 'Sarevolt (350) demande une extraction d\'urgence en 48 heures — au lieu de ses 3 jours habituels de préparation. L\'extraction réussit. Elle comprend que ses standards ne sont pas toujours compatibles avec les urgences de Sarevolt.' },
      { titre: 'Le protocole d\'urgence', texte: 'Elle développe un protocole d\'infiltration d\'urgence applicable en moins de 2 heures. Elle ne l\'aime pas — plus de marge d\'imprévus. La démonstration de Kasevolt (360) dans 2 semaines signifie que les extractions d\'urgence vont augmenter.' },
    ],
    sorts: ['Frappe désactivante', 'Surcharge de signature', 'Réflexe d\'extraction'],
    relations: [
      { id: 266, nom: 'Vashera', type: 'allié', note: 'Fournit les informations de terrain pour les infiltrations — plans, rotations, accès.' },
      { id: 350, nom: 'Sarevolt', type: 'allié', note: 'Demande des extractions d\'urgence qui court-circuitent sa préparation habituelle.' },
    ],
    lore_long: `Saelkrael s'infiltre dans des installations impériales pour extraire des Élus. Sa propre signature électrique a déclenché des alarmes 3 fois — elle a développé des méthodes de masquage. Les détecteurs de Kasevolt (360) sont plus précis que les systèmes standard. La démonstration terrain dans 2 semaines va générer des identifications à Virex — Sarevolt (350) va demander des extractions d'urgence. Elle prépare un protocole réduit qu'elle n'aime pas.`,
  },

  // ── 362 · THYVSRAEL ──────────────────────────────────────────
  362: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'L\'incident du quartier', texte: 'À 18 ans, un Élu de son quartier perd le contrôle de ses capacités pendant une période de saturation intense. 3 personnes blessées. Il voit l\'intervention impériale. Il comprend que les capacités non maîtrisées sont dangereuses.' },
      { titre: 'L\'intégration aux unités de régulation', texte: 'À 24 ans, sa capacité Electrique lui vaut un recrutement dans les unités de régulation impériales. La logique initiale : protection des populations face aux décharges incontrôlées. Il accepte.' },
      { titre: 'L\'élargissement des critères', texte: 'À 29 ans, il reçoit un dossier classant instable un Élu dont le dernier incident date de 4 ans. Les critères ont dû s\'élargir depuis son recrutement. Il exécute le mandat.' },
      { titre: 'Les données de Thyvsaevyn', texte: 'Thyvsaevyn (357) lui fournit des données de signature sur des Élus de Virex. Ces données permettent d\'identifier des Élus avant toute manifestation d\'instabilité, sur la base de leur signature seule.' },
      { titre: 'Les 3 mandats sans incident', texte: '3 mandats actifs sur des Élus classés instables sur la base de signatures uniquement — aucun incident documenté. Son exposition cumulée aux zones de saturation de niveau 4 dégrade sa propre résistance. Orven II (263) recommande un repos qu\'il ne prend pas.' },
    ],
    sorts: ['Décharge de suppression', 'Impact de régulation', 'Résistance d\'induction renforcée'],
    relations: [
      { id: 64, nom: 'Avel', type: 'supérieur', note: 'Définit les critères d\'instabilité et fournit les mandats. Critères progressivement élargis.' },
      { id: 263, nom: 'Orven II', type: 'supérieur', note: 'Commande les opérations de terrain. A recommandé un repos opérationnel non suivi.' },
    ],
    lore_long: `Thyvsrael neutralise des Élus classés instables dans les zones de saturation de l'Isthme. Justification initiale : protection des populations. Ses critères viennent d'Avel (64) — et ces critères se sont élargis progressivement. Ses 3 mandats actifs sont basés sur des signatures de Thyvsaevyn (357), pas sur des incidents documentés. Son exposition cumulée aux zones de niveau 4 dégrade sa propre résistance électrique.`,
  },

  // ── 363 · VELKAEVYN ──────────────────────────────────────────
  363: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les tournois de quartier', texte: 'À 15 ans, il commence les tournois de boxe de son quartier. À 18 ans, il voyage vers d\'autres villes. À 20 ans, il ne rentre plus vraiment — l\'itinérance est devenue son mode de vie naturel.' },
      { titre: 'La première remise', texte: 'À 25 ans, Karevyn (197) l\'aborde après un tournoi à Virex. Il lui demande de porter un pli d\'une ville à une autre. Le prétexte est naturel. Il accepte. Le pli passe sans incident.' },
      { titre: 'La fouille au checkpoint', texte: 'À 28 ans, un checkpoint impérial fouille son sac systématiquement. Il transporte des documents dans une poche intérieure de son équipement de boxe. Les soldats inspectent l\'équipement mais ne démontent pas la poche. Il note que la prochaine fouille pourrait être plus approfondie.' },
      { titre: 'Le contenu inconnu', texte: 'Après une remise à Sarevolt (350), celui-ci le remercie avec une intensité inhabituelle. Velkaevyn comprend que ce qu\'il transportait était critique. Il ne sait pas ce que c\'était. Il décide de faire confiance au jugement de Karevyn.' },
      { titre: 'Les checkpoints de Thyrkael', texte: 'Les 4 nouveaux checkpoints de Thyrkael (351) compliquent 2 de ses 3 routes habituelles vers Virex. Karevyn lui demande d\'augmenter la fréquence des passages avant la démonstration de Kasevolt (360).' },
    ],
    sorts: ['Frappe de neutralisation', 'Résistance de terrain', 'Feinte de passage'],
    relations: [
      { id: 197, nom: 'Karevyn', type: 'allié', note: 'Contact Dissident pour les remises et réceptions. Décide du contenu transporté sans l\'informer.' },
      { id: 350, nom: 'Sarevolt', type: 'allié', note: 'Destinataire récurrent à Virex. A réagi avec intensité inhabituelle à certaines remises.' },
    ],
    lore_long: `Velkaevyn transporte des informations Dissidentes à travers les checkpoints de l'Isthme. Sa couverture est réelle — il est boxeur itinérant. Il ne sait pas ce qu'il transporte. C'est sa protection et sa limite. Les 4 checkpoints de Thyrkael (351) ont modifié ses routes. Karevyn (197) demande une fréquence de passages augmentée avant la démonstration de Kasevolt (360). Plus de passages, avec plus de risque par passage.`,
  },

  // ── 364 · THYRKRAEL ──────────────────────────────────────────
  364: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les zones disputées', texte: 'À 16 ans, il grandit dans une zone de l\'Isthme disputée entre administrations civiles. Il observe comment les différences de juridiction créent des espaces où rien ne s\'applique vraiment. Il comprend que les accords clairs valent mieux que les zones grises.' },
      { titre: 'L\'intégration Confédération', texte: 'À 27 ans, Thyven (62) le recrute pour le service de sécurité Confédération dans l\'Isthme. Sa connaissance des dynamiques locales et sa lecture des textes d\'accord en termes pratiques sont utiles.' },
      { titre: 'Le premier écart documenté', texte: 'À 31 ans, il documente un écart entre une unité impériale et les termes d\'un accord de coopération. Il transmet à Thyven. L\'Empire fournit une interprétation alternative du texte. L\'écart reste non résolu.' },
      { titre: 'Les checkpoints de Thyrkael', texte: 'Thyrkael (351) installe 4 checkpoints dans une zone ambiguë des accords. Sans notification préalable à la Confédération. Vashkael (352) ouvre des négociations. Thyrkrael documente les opérations en attendant.' },
      { titre: 'Les 47 écarts et la démonstration', texte: '47 écarts documentés dans les opérations des checkpoints. Transmis à Thyven. Les négociations ont 3 semaines. La démonstration de Kasevolt (360) n\'est couverte par aucun accord existant — zone grise sans leviers clairs.' },
    ],
    sorts: ['Frappe d\'autorité', 'Résistance de position', 'Intervention encadrée'],
    relations: [
      { id: 62, nom: 'Thyven', type: 'supérieur', note: 'Reçoit les rapports d\'écarts et définit les priorités de surveillance. Utilise le dossier dans les négociations.' },
      { id: 193, nom: 'Thalven', type: 'allié', note: 'Contact pour les informations sur les opérations impériales dans les zones sans accès direct.' },
    ],
    lore_long: `Thyrkrael surveille les accords entre Empire et Confédération dans l'Isthme. 47 écarts documentés dans les opérations des checkpoints de Thyrkael (351). Les négociations de Vashkael (352) ont 3 semaines. La démonstration terrain de Kasevolt (360) est hors accord — ni impériale, ni clairement Confédération. Thyrkrael n'a pas de mandat pour intervenir. Il a informé Thyven (62). La réponse n'est pas encore définie.`,
  },

  // ── 365 · THYVSAEL ───────────────────────────────────────────
  365: {
    timeline_position: { an: -1, lieu: 'Déserts', arc: 'Confluence Psy-Stellaire' },
    histoire: [
      { titre: 'La première lecture involontaire', texte: 'À 14 ans, il dit à son père ce qu\'il va décider avant que son père décide. Son père décide exactement ça. Il réalise que ce qu\'il perçoit est de la lecture, pas de l\'intuition.' },
      { titre: 'Le contact avec Syvara', texte: 'À 23 ans, Syvara (30) le contacte pour une lecture. Il voit ce qu\'elle ne veut pas savoir. Il le lui dit. Elle revient.' },
      { titre: 'La tentative de Kasyr', texte: 'Kasyr (192) conteste publiquement 4 de ses prédictions. 3 s\'avèrent exactes dans les 6 mois. La 4ème est encore en attente.' },
      { titre: 'La limite du délai', texte: 'À 30 ans, une extraction impériale qu\'il avait prédite se réalise 4 jours après l\'annonce. 4 jours insuffisants pour agir. L\'exactitude sans délai utilisable est une forme d\'inutilité.' },
      { titre: 'Les lectures en cours', texte: '3 lectures actives. L\'une concerne une convergence dans les zones de saturation de l\'Isthme dans les 3 semaines. Il en a informé Syvara (30). Ce qu\'elle en fait ne lui appartient pas.' },
    ],
    sorts: ['Lecture psychique', 'Alignement stellaire', 'Projection de trajectoire'],
    relations: [
      { id: 30, nom: 'Syvara', type: 'allié', note: 'Le consulte discrètement. Seul canal de transmission vers des personnes qui peuvent agir.' },
      { id: 192, nom: 'Kasyr', type: 'adversaire', note: 'A tenté une décrédibilisation. A eu tort sur 3 points sur 4.' },
    ],
    lore_long: `Thyvsael combine lecture psychique et alignements stellaires pour des prédictions exactes — et structurellement sous-utilisées. Kasyr (192) a tenté la décrédibilisation. A eu tort sur 3 points sur 4. 3 lectures actives dont une convergence dans l'Isthme dans 3 semaines. Syvara (30) est informée.`,
  },

  // ── 366 · SHYRVAEL ───────────────────────────────────────────
  366: {
    timeline_position: { an: -1, lieu: 'Thalassyr', arc: 'Confluence Psy-Stellaire' },
    histoire: [
      { titre: 'Les trajectoires de Thalassyr', texte: 'À 16 ans, dans les eaux de Thalassyr, il perçoit les signatures stellaires des Néréides autour de lui. Il émerge pour cartographier les correspondances avec les configurations célestes.' },
      { titre: 'Le recrutement impérial', texte: 'À 27 ans, Serathis (24) lui propose de prédire les comportements des Élus pour l\'Empire. Il pose des questions techniques. La réponse est satisfaisante.' },
      { titre: 'La première capture', texte: 'À 31 ans, sa prédiction comportementale permet la capture d\'un Élu. Il reçoit un compte-rendu comme validation de méthode. Il ne demande pas ce qui est arrivé ensuite.' },
      { titre: 'Le contact avec Telos', texte: 'Telos (29) lui partage des travaux théoriques sur la lecture stellaire. Ceux-ci améliorent sa précision. Il se demande si Telos sait l\'usage qu\'il en fait. Il ne pose pas la question.' },
      { titre: 'Les prédictions actives', texte: '5 prédictions comportementales actives sur des Élus de l\'Isthme. L\'une concerne une convergence que Thyvsael (365) a aussi identifiée indépendamment. Il ne sait pas que Thyvsael existe.' },
    ],
    sorts: ['Trajectoire stellaire', 'Influence psychique', 'Verrouillage de trajectoire'],
    relations: [
      { id: 29, nom: 'Telos', type: 'allié', note: 'Source de travaux théoriques. Potentiellement non informé de l\'usage opérationnel.' },
      { id: 24, nom: 'Serathis', type: 'supérieur', note: 'Contact impérial direct pour les prédictions opérationnelles.' },
    ],
    lore_long: `Shyrvael prédit les comportements des Élus pour l'Empire via signatures psycho-stellaires. 5 prédictions actives sur l'Isthme — l'une converge avec une lecture indépendante de Thyvsael (365) qu'il ne connaît pas. Les travaux de Telos (29) améliorent sa précision. Telos ne sait peut-être pas l'usage qui en est fait.`,
  },

  // ── 367 · THYRSAEL ───────────────────────────────────────────
  367: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Confluence Psy-Stellaire' },
    histoire: [
      { titre: 'La résonance différente', texte: 'À 19 ans, il rencontre un pur élémentaire sans le savoir. Il perçoit une signature psychique d\'une qualité différente — plus stable et plus intense. Il commence à documenter cette différence.' },
      { titre: 'L\'intégration Convergence', texte: 'À 27 ans, Sykavel (242) le recrute. La Convergence a besoin d\'analystes psycho-stellaires pour les résonances élémentaires. Les réponses sont partielles mais suffisamment intéressantes.' },
      { titre: 'Les données de Sethara', texte: 'Sethara (238) lui fournit des données sur les purs élémentaires Feu. Une signature reconnaissable mais pas encore distincte d\'un Élu à très haute résonance.' },
      { titre: 'La convergence partielle', texte: 'Les données de Shyrethvon (225) sur les purs élémentaires Eau montrent un pattern commun avec les données Feu. Première piste vers une signature universelle. 4 types élémentaires supplémentaires manquants.' },
      { titre: 'La signature incomplète', texte: 'Pattern Feu/Eau identifié. 4 types élémentaires manquants. La Convergence attend une présentation dans 6 semaines. Il n\'est pas sûr que ce soit réaliste.' },
    ],
    sorts: ['Lecture de résonance', 'Alignement d\'analyse', 'Projection d\'identification'],
    relations: [
      { id: 238, nom: 'Sethara', type: 'allié', note: 'A fourni les données Feu. Première confirmation du pattern.' },
      { id: 225, nom: 'Shyrethvon', type: 'allié', note: 'A fourni les données Eau. Convergence partielle avec les données Feu.' },
    ],
    lore_long: `Thyrsael cherche la signature psycho-stellaire universelle des purs élémentaires pour la Convergence. Pattern Feu/Eau identifié — première confirmation. 4 types élémentaires manquants. 6 semaines annoncées. Il sait pour quoi la Convergence collecte les purs élémentaires. Il continue sa recherche.`,
  },

  // ── 368 · VELTHSAEL ──────────────────────────────────────────
  368: {
    timeline_position: { an: -1, lieu: 'Asterciel', arc: 'Confluence Psy-Stellaire' },
    histoire: [
      { titre: 'Les lectures d\'Asterciel', texte: 'À 15 ans, elle réalise qu\'elle peut percevoir et altérer légèrement les signatures psycho-stellaires. Elle commence par brouiller la sienne pour les autres Aérides.' },
      { titre: 'Le contact Dissident', texte: 'À 24 ans, Velthyn (160) la contacte. Les Dissidents ont des Élus dont les signatures sont lues par des analystes impériaux. Elle demande combien. La réponse : plus que ce qu\'elle peut couvrir seule.' },
      { titre: 'Le brouillage insuffisant', texte: 'À 29 ans, un Élu qu\'elle protège est capturé. Un analyste a utilisé la distorsion elle-même comme marqueur de présence. Elle modifie sa méthode.' },
      { titre: 'Le brouillage adaptatif', texte: 'Nouveau brouillage qui mime le bruit ambiant plutôt que de le surcharger. Plus difficile à distinguer. Plus coûteux en énergie. 4 brouillages simultanés maximum.' },
      { titre: 'Les 4 protections actives', texte: '4 brouillages adaptatifs actifs. Thyrsael (367) cherche la signature universelle des purs élémentaires. Si trouvée, ses méthodes actuelles seront insuffisantes pour des purs élémentaires.' },
    ],
    sorts: ['Brouillage de signature', 'Bruit psychique', 'Distorsion adaptative'],
    relations: [
      { id: 160, nom: 'Velthyn', type: 'allié', note: 'Contact Dissident pour les priorités d\'intervention. Source des alertes sur les analystes actifs.' },
      { id: 30, nom: 'Syvara', type: 'allié', note: 'Source d\'informations sur les Élus en déplacement. A du mal à la localiser — brouillage permanent.' },
    ],
    lore_long: `Velthsael brouille les signatures psycho-stellaires des Élus. 4 brouillages adaptatifs actifs. Thyrsael (367) cherche la signature universelle des purs élémentaires — si trouvée, ses méthodes actuelles ne suffiront plus. Son brouillage permanent la coupe des réseaux de connexion — même ses alliés ont du mal à la localiser.`,
  },

  // ── 369 · KAERVAEL ───────────────────────────────────────────
  369: {
    timeline_position: { an: -1, lieu: 'Déserts', arc: 'Confluence Psy-Stellaire' },
    histoire: [
      { titre: 'Le premier ciel des Déserts', texte: 'À 12 ans, la clarté du ciel nocturne des Déserts lui révèle des patterns stellaires. Il commence à se demander si le cosmos regarde en retour.' },
      { titre: 'La rencontre avec Telos', texte: 'À 25 ans, Telos (29) répond à un de ses travaux publiés. Une correspondance commence. Elle dure jusqu\'aux premières rencontres directes.' },
      { titre: 'La circulation non souhaitée', texte: 'À 31 ans, Telos lui signale que ses travaux circulent dans des cercles de recherche Convergence dans un contexte non académique. Il considère d\'arrêter de publier. Il n\'arrête pas.' },
      { titre: 'La perspective de Drevorn', texte: 'Drevorn (233) lui propose une perspective tellurique — la conscience des purs élémentaires descend dans la matière, pas vers les étoiles. Les deux visions ne s\'excluent pas. La question centrale se reformule.' },
      { titre: 'La question reformulée', texte: 'Sa question : le pur élémentaire comme pont entre matière et cosmos. Cette reformulation a des implications pour ce que la Convergence fait avec eux. Il n\'a pas encore publié. Il ne sait pas encore s\'il va publier.' },
    ],
    sorts: ['Résonance contemplative', 'Trajectoire de sens', 'Pont de conscience'],
    relations: [
      { id: 29, nom: 'Telos', type: 'allié', note: 'Interlocuteur intellectuel principal. A alerté sur la circulation des travaux dans les cercles Convergence.' },
      { id: 233, nom: 'Drevorn', type: 'allié', note: 'Philosophe Chthonien. Sa perspective tellurique a conduit à la reformulation centrale.' },
    ],
    lore_long: `Kaervael cherche le lien entre conscience élémentaire et cosmos. Sa question reformulée : le pur élémentaire comme pont entre matière et cosmos. Implications directes pour ce que la Convergence fait avec les purs élémentaires. Ses travaux précédents circulent déjà dans ces cercles. Il n'a pas encore décidé du canal de publication.`,
  },

  // ── 370 · DRETHVAEL ──────────────────────────────────────────
  370: {
    timeline_position: { an: -1, lieu: 'Déserts', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les tunnels d\'Ormn-Dur', texte: 'À 14 ans, dans les zones frontalières Déserts/Ormn-Dur, il perçoit une anomalie gravitationnelle dans un tunnel — une résistance anormale. Il passe 3 jours à cartographier la zone.' },
      { titre: 'La première mission Fosse', texte: 'À 26 ans, Narev (21) lui propose un accès aux zones proches de la Fosse contre des données de mesure. Il accepte sans demander pourquoi Narev veut ces données.' },
      { titre: 'L\'évolution des anomalies', texte: 'À 30 ans, en comparant ses mesures sur 4 ans, il réalise que les anomalies évoluent en patterns cycliques. Quelque chose sous la Fosse a un cycle. Il rapporte à Narev. Narev ne paraît pas surpris.' },
      { titre: 'La question de Narev', texte: 'Narev lui pose une question trop précise sur les variations locales du cycle. Cette précision révèle une connaissance préalable. Narev sait quelque chose qu\'il ne lui a pas dit.' },
      { titre: 'Les mesures du cycle', texte: '3 cycles documentés d\'environ 18 mois. Le 4ème cycle est au pic avec une amplitude 23% supérieure aux précédents. La progression s\'intensifie à chaque cycle.' },
    ],
    sorts: ['Compression gravitationnelle', 'Sonde de strate', 'Anomalie de champ'],
    relations: [
      { id: 21, nom: 'Narev', type: 'allié', note: 'Fournit l\'accès contre les données. Sait plus que ce qu\'il partage.' },
      { id: 183, nom: 'Kareol', type: 'allié', note: 'Géologue impérial. Données complémentaires sur les strates.' },
    ],
    lore_long: `Drethvael mesure les anomalies gravitationnelles proches de la Fosse Interdite. 4 cycles documentés d'environ 18 mois — chaque cycle plus intense. Le 4ème dépasse les précédents de 23%. Narev (21) pose des questions trop précises pour quelqu'un qui ne saurait pas déjà. Ce que Narev sait reste non partagé.`,
  },

  // ── 371 · THYRVGRAV ──────────────────────────────────────────
  371: {
    timeline_position: { an: -1, lieu: 'Thalassyr', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les courants de Thalassyr', texte: 'À 12 ans, il développe une façon intuitive de sentir les courants profonds via sa capacité Gravité. Il cartographie ce que ses parents Néréides ne peuvent pas percevoir aussi profondément.' },
      { titre: 'L\'intégration Confédération', texte: 'À 24 ans, Shyrael (90) le recrute pour le programme hydrologique Confédération. Sa capacité Gravité/Eau est précisément ce que le programme cherche.' },
      { titre: 'Les convergences vers la Fosse', texte: 'À 29 ans, sa cartographie révèle des courants profonds convergeant vers des zones sous les coordonnées de la Fosse Interdite. Quelque chose sous la Fosse influence les courants marins profonds.' },
      { titre: 'La question de Narev', texte: 'Narev (21) lui demande si les convergences sont cycliques — question trop précise. Drethvael (370) lui a posé une question similaire. Narev a les deux informations.' },
      { titre: 'Le cycle aquatique', texte: 'Ses mesures confirment un cycle aquatique de 18 mois — synchrone avec le cycle gravitationnel de Drethvael (370). Partagé avec Narev. Rapport Confédération en préparation pour Shyrael.' },
    ],
    sorts: ['Pression de profondeur', 'Champ gravitationnel subaquatique', 'Flux de cartographie'],
    relations: [
      { id: 21, nom: 'Narev', type: 'allié', note: 'Contact pour les zones de convergence. Ses questions révèlent une connaissance préalable.' },
      { id: 90, nom: 'Shyrael', type: 'supérieur', note: 'Supérieur technique Confédération. A demandé un rapport formel.' },
    ],
    lore_long: `Thyrvgrav cartographie les courants sous-marins de Thalassyr et a découvert qu'ils convergent vers des zones sous la Fosse selon un cycle de 18 mois — synchrone avec le cycle gravitationnel de Drethvael (370). Narev (21) a les deux informations. Rapport Confédération en préparation.`,
  },

  // ── 372 · VELGRAEVYN ─────────────────────────────────────────
  372: {
    timeline_position: { an: -1, lieu: 'Déserts', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les mines des Déserts', texte: 'À 17 ans, il utilise sa capacité Gravité pour accélérer l\'extraction minière — une compression qui brise les roches plus efficacement. Il est engagé immédiatement.' },
      { titre: 'Le recrutement Convergence', texte: 'À 25 ans, Kaevorn (243) lui propose d\'appliquer la même logique à des zones élémentaires. Principe identique. Matière différente. Rémunération bien plus élevée.' },
      { titre: 'Les signatures résiduelles', texte: 'À 29 ans, Kaevorn lui signale que ses Drains laissent des anomalies gravitationnelles détectables. Il ralentit les méthodes pour réduire les signatures.' },
      { titre: 'La zone critique', texte: 'Sykavel (242) lui assigne une zone proche de la Fosse. Les anomalies ambiantes interagissent avec ses compressions de façon imprévisible. Premier Drain : décharge gravitationnelle non planifiée.' },
      { titre: 'Les contraintes de la Fosse', texte: '3 Drains actifs proches de la Fosse. Les anomalies du 4ème cycle de Drethvael (370) s\'intensifient. Ses signatures résiduelles se confondent involontairement avec les phénomènes naturels — avantage à systématiser.' },
    ],
    sorts: ['Compression gravitationnelle', 'Masse de sol', 'Champ de Drain'],
    relations: [
      { id: 242, nom: 'Sykavel', type: 'supérieur', note: 'Définit les zones prioritaires. A assigné les zones proches de la Fosse.' },
      { id: 243, nom: 'Kaevorn', type: 'allié', note: 'Coordinateur de terrain. A signalé les problèmes de signatures résiduelles.' },
    ],
    lore_long: `Velgraevyn accélère les Drains de la Convergence via compression gravitationnelle. Dans les zones proches de la Fosse, les anomalies ambiantes du 4ème cycle de Drethvael (370) interfèrent avec son contrôle. Ses signatures résiduelles se confondent involontairement avec les phénomènes naturels de la Fosse — avantage à systématiser.`,
  },

  // ── 373 · THYRKGRAL ──────────────────────────────────────────
  373: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Le premier effondrement', texte: 'À 15 ans, un tunnel minier s\'effondre partiellement — 3 blessés. Il analyse les fractures et réalise qu\'un champ gravitationnel minimal aurait suffi à prévenir. Il commence à étudier la relation gravité/stabilité structurelle.' },
      { titre: 'L\'intégration Technocratie', texte: 'À 24 ans, Drekvar (131) le recrute. Sa méthode gravitationnelle est plus efficace que les structures physiques standard dans les zones à roches friables.' },
      { titre: 'L\'extraction de Kargesh', texte: 'À 29 ans, Kargesh (133) crée des vibrations excessives dans une zone stabilisée. Intervention d\'urgence requise. Accord de coordination formel obtenu, partiel dans la pratique.' },
      { titre: 'Les anomalies croissantes', texte: 'Depuis 6 mois, les zones proches de la Fosse montrent des anomalies gravitationnelles croissantes qui interfèrent avec ses stabilisations. Rapporté à Drekvar. Drekvar : continuer et documenter.' },
      { titre: 'Les 5 zones critiques', texte: '5 zones de stabilisation actives. 2 nécessitent une maintenance plus fréquente. Il demande un arrêt temporaire de l\'extraction dans ces 2 zones. Drekvar refuse. Dossier technique constitué.' },
    ],
    sorts: ['Ancrage de sol', 'Champ de contre-pression', 'Fracture contrôlée'],
    relations: [
      { id: 131, nom: 'Drekvar', type: 'supérieur', note: 'A refusé l\'arrêt des extractions dans les zones critiques. Informé des risques par écrit.' },
      { id: 133, nom: 'Kargesh', type: 'allié', note: 'Ingénieur d\'extraction. Coordination partielle malgré accord formel.' },
    ],
    lore_long: `Thyrkgral stabilise les tunnels d'Ormn-Dur proches de la Fosse via manipulation gravitationnelle. Les anomalies du 4ème cycle s'intensifient — 2 tunnels en risque d'effondrement. Drekvar (131) a refusé les arrêts demandés. Dossier de responsabilité constitué — traçabilité de la chaîne de décision.`,
  },

  // ── 374 · NAREVETH ───────────────────────────────────────────
  374: {
    timeline_position: { an: -1, lieu: 'Déserts', arc: 'Fosse Interdite' },
    histoire: [
      { titre: 'Les eaux de la Fosse', texte: 'À 14 ans, elle passe du temps dans les courants sous-marins convergeant vers la Fosse. Les anomalies gravitationnelles lui semblent fascinantes, pas dangereuses. Elle apprend à naviguer dans ces anomalies.' },
      { titre: 'Le premier régulateur', texte: 'À 22 ans, Velrynth (278) mène une opération dans une zone des Déserts. Elle est présente. Elle dévie la trajectoire de l\'unité, permettant à 4 personnes d\'échapper. Elle devient une cible.' },
      { titre: 'Le piège de Velrynth', texte: 'À 25 ans, Velrynth monte un piège dans une zone de la Fosse qu\'il sait qu\'elle fréquente. Elle sent l\'anomalie des équipements d\'embuscade. Elle évite et utilise les anomalies de la Fosse contre l\'unité.' },
      { titre: 'Les connaissances de Narev', texte: 'Narev (21) lui fournit des informations sur les cycles gravitationnels. Elle demande comment il sait. Il dit "mesures". Elle ne croit pas que c\'est toute la réponse.' },
      { titre: 'Le pic du 4ème cycle', texte: 'Les anomalies du pic du 4ème cycle amplifient ses capacités dans les zones de la Fosse. Velrynth (278) évite maintenant ces zones. Elle l\'y cherche.' },
    ],
    sorts: ['Déviation gravitationnelle', 'Décharge de choc', 'Zone d\'anomalie'],
    relations: [
      { id: 21, nom: 'Narev', type: 'allié', note: 'Contact Dissident. Confiance opérationnelle, réserve sur ses informations non expliquées.' },
      { id: 278, nom: 'Velrynth', type: 'adversaire', note: 'Officier impérial de régulation. La cible depuis 3 ans. Maintenant évite les zones de la Fosse.' },
    ],
    lore_long: `Nareveth combat les unités impériales dans les Déserts en utilisant les anomalies gravitationnelles de la Fosse Interdite. Le pic du 4ème cycle amplifies ses capacités. Velrynth (278) évite maintenant les zones de la Fosse. Elle l'y cherche. Narev (21) fournit des informations précises sans en expliquer la source.`,
  },

  // ── 375 · THYRVINSEK ─────────────────────────────────────────
  375: {
    timeline_position: { an: -1, lieu: 'Ormn-Dur', arc: 'Zones de Transition' },
    histoire: [
      { titre: 'La colonie des tunnels', texte: 'À 13 ans, il trouve une colonie d\'insectes dans une zone de toxines fongiques normalement létale. Il passe 6 mois à comprendre leur mécanisme de résistance.' },
      { titre: 'La zone de transition', texte: 'À 23 ans, il suit les colonies résistantes vers les zones de transition Ormn-Dur/Noctéa. Il y trouve des formes de vie qu\'il n\'a vues nulle part ailleurs.' },
      { titre: 'Les spécimens de Karvinsek', texte: 'À 29 ans, Karvinsek (376) lui demande des spécimens d\'insectes résistants pour la "recherche biologique". Il fournit. Drekkel (145) lui révèle que Karvinsek travaille pour la Convergence.' },
      { titre: 'Les colonies modifiées', texte: 'Drekkel (145) signale une anomalie — des comportements non naturels dans une colonie frontalière, caractéristiques des spécimens fournis à Karvinsek mais modifiés. La Convergence a relâché des insectes modifiés.' },
      { titre: 'Le suivi des colonies', texte: '3 colonies potentiellement modifiées en suivi. Il documente les différences comportementales. Il n\'a pas encore contacté Karvinsek. Il ne sait pas ce qu\'il va faire de ces données.' },
    ],
    sorts: ['Essaim de terrain', 'Toxine de résistance', 'Colonie défensive'],
    relations: [
      { id: 145, nom: 'Drekkel', type: 'allié', note: 'Signale les anomalies dans les colonies. A révélé l\'affiliation Convergence de Karvinsek.' },
      { id: 159, nom: 'Nyrsh', type: 'allié', note: 'Spécialiste des toxines fongiques de Noctéa. Données complémentaires sur les mécanismes de résistance.' },
    ],
    lore_long: `Thyrvinsek étudie les insectes résistants aux toxines dans les zones de transition Ormn-Dur/Noctéa. Des spécimens fournis à Karvinsek (376) ont été modifiés par la Convergence et relâchés — 3 colonies montrent des comportements anormaux. Il prépare un partage de données avec Nyrsh (159).`,
  },

  // ── 376 · KARVINSEK ──────────────────────────────────────────
  376: {
    timeline_position: { an: -1, lieu: 'Noctéa', arc: 'Zones de Transition' },
    histoire: [
      { titre: 'Les champignons de Noctéa', texte: 'À 15 ans, il développe une résistance naturelle aux toxines fongiques de Noctéa. Il commence à explorer des zones inaccessibles aux autres grâce à cette résistance.' },
      { titre: 'Le recrutement Convergence', texte: 'À 25 ans, Kharven (140) lui passe une commande spécifique — des insectes résistants des zones de transition. Il paie le prix demandé sans négocier. Le modèle commercial est établi.' },
      { titre: 'La description de Kharven', texte: 'À 29 ans, Kharven lui décrit en détail l\'application prévue — des insectes modifiés pour améliorer l\'extraction d\'énergie pure de leurs hôtes biologiques. Il pose des questions sur les hôtes. Réponse générale. Il livre.' },
      { titre: 'Les spécimens de Thyrvinsek', texte: 'Thyrvinsek (375) lui fournit des spécimens présentés comme données de recherche naturelle. Il les utilise pour une commande de Kharven. Les insectes modifiés ont été relâchés dans les zones de transition.' },
      { titre: 'La commande en cours', texte: 'Kharven spécifie des champignons à pénétration organique des profondeurs de Noctéa. Drekphal (308) peut les collecter. Il attend sa livraison.' },
    ],
    sorts: ['Toxine de contact', 'Nuée de spécimens', 'Résistance organique'],
    relations: [
      { id: 140, nom: 'Kharven', type: 'supérieur', note: 'Contact Convergence. A décrit les usages avec une précision qui exclut l\'ignorance.' },
      { id: 308, nom: 'Drekphal', type: 'allié', note: 'Collecteur Umbrien dans les profondeurs de Noctéa. Livraison en attente.' },
    ],
    lore_long: `Karvinsek collecte des spécimens biologiques dans les zones de transition Ormn-Dur/Noctéa pour la Convergence. Il sait que ces spécimens servent au projet Avatar Total. Les insectes fournis ont été modifiés et relâchés — Thyrvinsek (375) les observe sans en connaître l'origine. Commande en cours : champignons à pénétration organique des profondeurs.`,
  },

  // ── 377 · VELTHINSEK ─────────────────────────────────────────
  377: {
    timeline_position: { an: -1, lieu: 'Noctéa', arc: 'Zones de Transition' },
    histoire: [
      { titre: 'Les noctèmes du quartier', texte: 'À 11 ans, il apprend à communiquer avec les noctèmes par des patterns de lumière et de mouvement. Il est le seul de son quartier à les approcher sans peur.' },
      { titre: 'La première diversion', texte: 'À 21 ans, il libère un essaim lors d\'une opération impériale menaçant un réseau Dissident. 4 minutes de confusion — suffisantes pour évacuer. Thyrkra (168) le contacte 3 jours plus tard.' },
      { titre: 'L\'essaim de trop', texte: 'À 26 ans, une installation avec des écrans anti-luminescence lui coûte 70% d\'un essaim. Il refuse désormais les missions à écrans sans reconnaissance préalable.' },
      { titre: 'L\'information de Nyrshyx', texte: 'Nyrshyx (332) signale des essaims modifiés dans les zones de transition — luminescence à fréquence différente des noctèmes naturels. Risque de signature identifiable si ces fréquences se répandent.' },
      { titre: 'La commande prioritaire', texte: 'Thyrkra (168) demande une diversion prioritaire dans 5 jours sur une installation à écrans anti-luminescence. 2 jours de reconnaissance requis. Mission conditionnelle à l\'évaluation des écrans.' },
    ],
    sorts: ['Nuée lumineuse', 'Manteau d\'ombre', 'Invasion bioluminescente'],
    relations: [
      { id: 332, nom: 'Nyrshyx', type: 'allié', note: 'Contact Dissident sur les espèces de Noctéa. A signalé les essaims modifiés à luminescence différente.' },
      { id: 168, nom: 'Thyrkra', type: 'supérieur', note: 'Contact Dissident pour les priorités d\'opération. Demande la diversion dans 5 jours.' },
    ],
    lore_long: `Velthinsek sabote les installations impériales de Noctéa via des essaims de noctèmes luminescents. Opération prioritaire dans 5 jours sur une installation à écrans anti-luminescence — reconnaissance critique dans les 2 premiers jours. Les essaims modifiés de la Convergence signalés par Nyrshyx (332) risquent de compromettre sa signature naturelle.`,
  },

  // ── 378 · THYRVACIER ─────────────────────────────────────────
  378: {
    timeline_position: { an: -1, lieu: 'Varkhôl', arc: 'Parti de l\'Acier' },
    histoire: [
      { titre: 'L\'acier des volcans', texte: 'À 16 ans, dans les zones volcaniques de Varkhôl, il découvre qu\'il peut sentir et manipuler les structures métalliques — capacité Acier s\'associant naturellement à son entraînement Combat Pyrien.' },
      { titre: 'La recommandation de Thryss', texte: 'À 24 ans, Thryss (4) le recommande au Parti de l\'Acier — une faction qui valorise précisément les combinaisons élémentaires rares. 3 mois de tests avant les premières missions.' },
      { titre: 'Le Chthonien de la frontière', texte: 'À 28 ans, une mission le met contre un guerrier Chthonien des zones frontalières qu\'il connaît des entraînements communs. Il exécute. Le Chthonien survit. Ils ne se reparleront pas.' },
      { titre: 'Les deux régions', texte: 'Le Parti l\'utilise dans les zones frontalières où sa maîtrise des deux environnements est un avantage. Il opère contre des personnes des deux côtés. Il commence à tenir un compte informel.' },
      { titre: 'La mission de la frontière', texte: 'Sa mission actuelle : zone frontalière contestée entre Varkhôl et Ormn-Dur. Skarith (9) opère dans la même zone pour une faction différente. Ils vont se retrouver.' },
    ],
    sorts: ['Armure d\'acier', 'Frappe de percée', 'Lame de terrain'],
    relations: [
      { id: 4, nom: 'Thryss', type: 'allié', note: 'L\'a recommandé au Parti. Respect mutuel ancien.' },
      { id: 9, nom: 'Skarith', type: 'adversaire', note: 'Plusieurs mesures sans résultat définitif. Opère actuellement dans la même zone frontalière.' },
    ],
    lore_long: `Thyrvacier est redouté dans les deux régions — Varkhôl et Ormn-Dur — pour sa maîtrise unique Combat/Acier. Le Parti de l'Acier l'utilise dans les zones frontalières. Il tient un compte informel des personnes des deux côtés contre qui il a opéré. Skarith (9) est dans la même zone. Une rencontre est probable.`,
  },

  // ── 379 · KRESSOMBAL ─────────────────────────────────────────
  379: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'L\'extraction', texte: 'À 12 ans, il voit une extraction impériale dans son quartier — des enfants emmenés. Il essaie d\'intervenir et est repoussé. Il décide qu\'il ne sera plus jamais physiquement incapable d\'intervenir.' },
      { titre: 'Le premier contrat', texte: 'À 22 ans, son premier contrat de garde du corps lui donne une réputation et une règle.' },
      { titre: 'Le contrat rompu', texte: 'À 27 ans, un client lui demande de participer au transport forcé d\'enfants Élus. Il rompt le contrat immédiatement, rembourse les arrhes et rappelle la règle acceptée au départ.' },
      { titre: 'La confiance de Thyrekavel', texte: 'Thyrekavel (275) lui confie une protection dans une zone de saturation électrique. Il accepte. Ce n\'est pas une mission Dissidente officiellement — c\'est une mission qui répond à sa règle.' },
      { titre: 'La mission de Virex', texte: 'Vashera (266) lui transmet la protection des 39 enfants Élus de Sarevolt (350) pendant la période de risque. Sa règle qui était une limite est devenue une raison d\'être. Il ne demande pas de rémunération au-dessus des frais.' },
    ],
    sorts: ['Interposition physique', 'Stabilisation de zone', 'Neutralisation directe'],
    relations: [
      { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Contact pour les missions impliquant des Élus. Lui fait confiance pour les situations de protection.' },
      { id: 266, nom: 'Vashera', type: 'allié', note: 'A transmis la mission des 39 enfants Élus de Virex.' },
    ],
    lore_long: `Kressombal est garde du corps avec une règle unique : ne jamais travailler pour ceux qui font du mal aux enfants. À Virex, cette règle devient une raison d'être — protection des 39 enfants Élus de Sarevolt (350) pendant la démonstration de Kasevolt (360). Il ne demande pas de rémunération au-dessus des frais.`,
  },

  // ── 380 · THYRVNORM ──────────────────────────────────────────
  380: {
    timeline_position: { an: -1, lieu: 'Isthme', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les marchands de passage', texte: 'À 14 ans, il aide les marchands transitant entre l\'Isthme et Varkhôl à trouver des contacts locaux. Il comprend que l\'information sur l\'autre a de la valeur pour chaque côté.' },
      { titre: 'Le premier transit', texte: 'À 21 ans, il transmet un message entre un commerçant Isthme et un artisan Varkhôl. La commission sur la transaction résultante établit le modèle.' },
      { titre: 'L\'information arrangée', texte: 'À 27 ans, Thyrath (187) découvre qu\'une information transmise était partiellement arrangée. Il continue quand même de l\'utiliser — les informations partiellement exactes restent utiles.' },
      { titre: 'La confiance de Sarevyn', texte: 'Sarevyn (176) lui fait confiance sans vérifier. Cette confiance est sa ressource la plus précieuse et sa responsabilité la plus inconfortable.' },
      { titre: 'Le transit actuel', texte: 'Il transporte des informations commerciales incluant des données sur les zones de saturation de l\'Isthme dont la valeur dépasse son mandat actuel. Il n\'a pas encore décidé à qui d\'autre les vendre.' },
    ],
    sorts: ['Distraction de terrain', 'Flambée de couverture', 'Transit accéléré'],
    relations: [
      { id: 176, nom: 'Sarevyn', type: 'allié', note: 'Contact Isthme qui lui fait confiance. Cette confiance est sa ressource la plus précieuse.' },
      { id: 187, nom: 'Thyrath', type: 'allié', note: 'Contact Varkhôl. A découvert un arrangement — continue quand même.' },
    ],
    lore_long: `Thyrvnorm se présente comme ambassadeur itinérant entre l'Isthme et Varkhôl — il est plus exactement un courtier d'information. Sarevyn (176) lui fait confiance sans vérifier. Il transporte des données sur les zones de saturation dont la valeur dépasse son mandat commercial. Décision sur l'usage non mandaté en suspens.`,
  },

  // ── 381 · VELKRYNORM ─────────────────────────────────────────
  381: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La mémoire', texte: 'À 12 ans, elle réalise qu\'elle peut mémoriser des textes longs mot pour mot après une seule lecture. Elle gagne des paris jusqu\'à ce qu\'on arrête de parier contre elle.' },
      { titre: 'Le premier message', texte: 'À 20 ans, Aelthys (268) teste sa mémoire : mémoriser et transmettre exactement 200 mots. Elle réussit. Elle travaille pour les Dissidents depuis.' },
      { titre: 'Le message inconnu', texte: 'À 25 ans, elle transmet un message en code dont elle ne comprend pas le contenu. La réception entraîne des actions non anticipées par l\'expéditeur. Erreur d\'interprétation en réception selon Aelthys.' },
      { titre: 'La limite de la mémoire', texte: 'À 28 ans, elle commence à mémoriser en code Dissident de crise. Elle ne comprend pas ce code. Elle le transmet avec la même fidélité. C\'est la limite de sa méthode.' },
      { titre: 'Le circuit de l\'Isthme', texte: '3 messages critiques liés à la démonstration de Kasevolt (360) à transmettre en 72 heures. Routes modifiées autour des checkpoints de Thyrkael (351).' },
    ],
    sorts: ['Sprint de transit', 'Dissimulation de mouvement', 'Rafale d\'obstacle'],
    relations: [
      { id: 268, nom: 'Aelthys', type: 'supérieur', note: 'Contact pour les messages prioritaires Dissidents. A dit que les messages actuels sont critiques.' },
      { id: 101, nom: 'Caeryn', type: 'allié', note: 'Contact dans d\'autres régions pour la réception des messages à longue distance.' },
    ],
    lore_long: `Velkrynorm mémorise et transmet des messages Dissidents sans rien écrire — ce qu'elle porte est inviolable sans violer sa personne. 3 messages critiques liés à la démonstration de Kasevolt (360) à transmettre en 72 heures. Contenu inconnu — code Dissident de crise. Routes modifiées autour des checkpoints de Thyrkael (351).`,
  },

  // ── 382 · THYRSKNORM ─────────────────────────────────────────
  382: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Les témoignages du quartier', texte: 'À 14 ans, après un incident, elle interroge les présents et note leurs témoignages. Aucun n\'est identique. Elle comprend que les événements n\'existent pas — seuls les témoignages existent.' },
      { titre: 'L\'intégration Confédération', texte: 'À 23 ans, Thariel (18) la recrute pour le programme d\'archivage itinérant. Sa méthode d\'interrogation obtient des témoignages que les archivistes institutionnels n\'obtiennent pas.' },
      { titre: 'Le témoignage sensible', texte: 'À 28 ans, des témoignages sur des extractions impériales sont utilisés dans un dossier de négociation avec l\'Empire. Elle n\'a pas été informée de cet usage avant la collecte.' },
      { titre: 'La chaîne d\'usage', texte: 'Thariel lui explique : les archives alimentent les analyses, les analyses alimentent les négociations. Sa neutralité ne supprime pas les effets de ce qu\'elle collecte.' },
      { titre: 'Les témoignages de Virex', texte: 'Thariel lui demande de documenter les témoignages des habitants de Virex sur les checkpoints de Thyrkael (351). Ces témoignages alimenteront le dossier de Thyrkrael (364). La question du consentement éclairé des témoins non posée.' },
    ],
    sorts: ['Adaptation de terrain', 'Flux de neutralisation', 'Archive vivante'],
    relations: [
      { id: 18, nom: 'Thariel', type: 'supérieur', note: 'Supérieur archiviste Confédération. A été transparent sur l\'usage des archives dans les négociations.' },
      { id: 100, nom: 'Varaveth', type: 'allié', note: 'Contact dans d\'autres régions. Signale les événements à documenter.' },
    ],
    lore_long: `Thyrsknorm collecte des témoignages à Virex sur les checkpoints de Thyrkael (351) — archives qui alimentent le dossier de Thyrkrael (364) et les négociations de Vashkael (352). Sa neutralité dans la collecte ne supprime pas les effets. Les témoins savent-ils que leurs mots alimentent des négociations ? La question n'a pas été posée.`,
  },

  // ── 383 · KAELVENORM ─────────────────────────────────────────
  383: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La double voix', texte: 'À 16 ans, un ami développe une double résonance élémentaire et vit dans une tension constante. Kaelvenorm l\'accompagne 2 ans à trouver une coexistence. Il sait ce qu\'il veut faire.' },
      { titre: 'Les premiers clients', texte: 'À 24 ans, sa réputation informelle lui amène des Élus à double résonance dont les médecins classiques ne savent pas quoi faire.' },
      { titre: 'La maîtrise dangereuse', texte: 'À 29 ans, un client dont il a aidé la maîtrise devient identifiable par les analystes impériaux — sa signature combinée est plus distinctive. La maîtrise réussie augmente le risque d\'identification.' },
      { titre: 'Les clients de Vashera', texte: 'Vashera (266) lui envoie des Élus Dissidents. La thérapie les stabilise et les rend potentiellement plus efficaces. Il ne demande pas la nature de leurs activités.' },
      { titre: 'Les 5 clients actifs', texte: '5 clients actifs. Un client de Vashera montre des oscillations aggravées par le stress de la situation à Virex. Risque de décharge involontaire détectable avant la démonstration de Kasevolt (360).' },
    ],
    sorts: ['Ancrage de résonance', 'Présence apaisante', 'Barrière psychique'],
    relations: [
      { id: 181, nom: 'Orathyn', type: 'allié', note: 'Médecin des Élus. Partage des cas pour compléter les dimensions physique et psychologique.' },
      { id: 266, nom: 'Vashera', type: 'allié', note: 'Envoie des Élus Dissidents en thérapie. Nature des activités non demandée.' },
    ],
    lore_long: `Kaelvenorm aide les Élus à double résonance de Virex. Un client de Vashera (266) montre des oscillations aggravées par le stress — risque de décharge détectable avant la démonstration de Kasevolt (360). Paradoxe documenté : la maîtrise thérapeutique rend les signatures plus distinctives. Pas de solution actuelle.`,
  },

  // ── 384 · THYRVKAELT ─────────────────────────────────────────
  384: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'La course des quartiers', texte: 'À 13 ans, le plus rapide de son quartier. À 15 ans, entre plusieurs quartiers. À 17 ans, des courses de livraison lui apprennent les routes, les raccourcis, les zones de surveillance.' },
      { titre: 'Le premier transit Dissident', texte: 'À 22 ans, Caeryn (101) lui fixe un délai qu\'un messager normal ne pourrait pas tenir. Il le tient. Autres missions proposées.' },
      { titre: 'L\'erreur d\'observation', texte: 'À 26 ans, il transmet une observation inexacte sur une position impériale — vue à trop haute vitesse. Depuis, il ralentit pour les observations critiques.' },
      { titre: 'La demande de Sarevolt', texte: 'Sarevolt (350) lui demande la liaison en temps réel entre les positions autour de Virex pendant la démonstration de Kasevolt (360). Plusieurs liaisons par jour. Plus que ses missions habituelles.' },
      { titre: 'La liaison de Virex', texte: '8 à 12 transits par jour dans les zones autour de Virex. Fréquence élevée créant une signature comportementale identifiable malgré la variation des routes. Velthkaelt (385) le voit depuis les airs.' },
    ],
    sorts: ['Frappe de passage', 'Rafale de vitesse', 'Coup de vent ciblé'],
    relations: [
      { id: 101, nom: 'Caeryn', type: 'allié', note: 'Contact principal pour les transmissions à longue distance.' },
      { id: 350, nom: 'Sarevolt', type: 'allié', note: 'A demandé la liaison de Virex. Coordonne les réactions sur la base de ses transmissions.' },
    ],
    lore_long: `Thyrvkaelt assure la liaison en temps réel entre les positions Dissidentes autour de Virex. 8 à 12 transits par jour — fréquence créant une signature comportementale identifiable malgré la variation des routes. Velthkaelt (385) a identifié son pattern depuis les airs. Rapport à Avel (64) en préparation.`,
  },

  // ── 385 · VELTHKAELT ─────────────────────────────────────────
  385: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Le vol naturel', texte: 'À 10 ans, un contrôle de vol exceptionnel — une précision de manœuvre dans l\'air que ses parents attribuent à une intuition naturelle.' },
      { titre: 'Le recrutement impérial', texte: 'À 22 ans, Avel (64) la recrute pour les unités de surveillance aérienne. Sa capacité Electrique secondaire lui permet de détecter les signatures électriques depuis l\'air.' },
      { titre: 'Le déplacement identifié', texte: 'À 27 ans, elle identifie un pattern de déplacement récurrent — un réseau de transit. Transmis à Avel. Une opération terrestre s\'ensuit dont elle n\'a pas su les détails.' },
      { titre: 'La vitesse de Thyrvkaelt', texte: 'Elle observe des déplacements à vitesse non humaine standard. Elle ajuste ses paramètres de détection pour identifier ces vitesses.' },
      { titre: 'Les patrouilles de Virex', texte: '4 patrouilles par jour. Elle a identifié l\'éclaireur Thyrvkaelt (384) sur 3 patrouilles successives — routes variables, fréquence constante. Rapport en préparation.' },
    ],
    sorts: ['Rafale tactique', 'Décharge aérienne', 'Manœuvre d\'évitement'],
    relations: [
      { id: 64, nom: 'Avel', type: 'supérieur', note: 'Reçoit les rapports et décide des transmissions aux unités terrestres.' },
      { id: 278, nom: 'Velrynth', type: 'allié', note: 'Demande des informations spécifiques sur des zones de déplacement dans les Déserts.' },
    ],
    lore_long: `Velthkaelt patrouille les zones aériennes de Virex pour l'Empire. 4 patrouilles par jour. Elle a identifié le pattern de Thyrvkaelt (384) sur 3 patrouilles — routes variables, fréquence constante. Rapport en préparation pour Avel (64). Si transmis dans les 48 heures, l'éclaireur Dissident sera ciblé.`,
  },

  // ── 386 · THYRVKAELTH ────────────────────────────────────────
  386: {
    timeline_position: { an: -1, lieu: 'Thalassyr', arc: 'Zones de Transition' },
    histoire: [
      { titre: 'Les vents de Thalassyr', texte: 'À 12 ans, elle apprend que les vents marins et les courants aquatiques créent des zones de transition que les navigateurs habituels évitent — difficiles mais traversables pour quelqu\'un qui comprend les deux éléments.' },
      { titre: 'La première route inconnue', texte: 'À 22 ans, elle découvre un passage non cartographié entre deux régions côtières — un couloir combinant les deux éléments de façon non standard. Elle le navigue seule d\'abord.' },
      { titre: 'La cargaison inconnue', texte: 'À 27 ans, elle transporte une cargaison de Sylvael (104) dont les caractéristiques ne correspondent pas aux descriptions. Elle livre. Semaines plus tard, des matériaux similaires apparaissent dans les nouvelles Confédération.' },
      { titre: 'L\'exclusivité comme responsabilité', texte: 'Elvryn (185) lui pose une question directe sur les transits de matériaux biologiques dans sa zone. Ce n\'était pas elle. Mais c\'était dans sa zone — quelqu\'un d\'autre utilise ses passages.' },
      { titre: 'La demande de Sylvael', texte: 'Sylvael (104) demande un transit urgent atypique. Elle prend 48 heures pour évaluer la route et le profil.' },
    ],
    sorts: ['Tempête côtière', 'Courant de manœuvre', 'Vague de pression'],
    relations: [
      { id: 185, nom: 'Elvryn', type: 'allié', note: 'A identifié un transit non autorisé dans sa zone. Cherche la source.' },
      { id: 104, nom: 'Sylvael', type: 'allié', note: 'Transmet des demandes de transport. Demande urgente atypique — 48 heures d\'évaluation accordées.' },
    ],
    lore_long: `Thyrvkaelth connaît des passages non cartographiés entre régions côtières et zones aériennes. Son exclusivité est sa position. Un transit de matériaux biologiques a utilisé sa zone sans qu'elle en soit l'auteure — Elvryn (185) cherche la source. Sylvael (104) demande un transit urgent et atypique. Évaluation en cours.`,
  },

  // ── 387 · SAELRETHKAEL ───────────────────────────────────────
  387: {
    timeline_position: { an: -1, lieu: 'Virex', arc: 'Saturation de l\'Isthme' },
    histoire: [
      { titre: 'Le premier changement', texte: 'À 7 ans, pendant une dispute, ses yeux changent de couleur et elle sent quelque chose de chaud dans ses mains. Son ami a peur et part. Elle passe la journée à comprendre ce qui s\'est passé.' },
      { titre: 'L\'arrivée chez Sarevolt', texte: 'À 9 ans, sa famille est désintégrée dans des extractions impériales. Sarevolt (350) l\'intègre aux 39. Elle passe de "enfant dont la famille gère ses oscillations" à "enfant seule dont personne ne comprend encore les oscillations".' },
      { titre: 'L\'oscillation à l\'école', texte: 'À 10 ans, une dispute déclenche une oscillation forte — son élément change 3 fois en 2 minutes. Kaelvenorm (383) est appelé. Première rencontre.' },
      { titre: 'La stabilisation de Thyrekavel', texte: 'Thyrekavel (275) partage ses techniques de stabilisation depuis sa propre expérience de multi-résonance. Ses méthodes ne sont pas parfaites pour elle. Elles lui donnent des outils qu\'elle n\'avait pas.' },
      { titre: 'La démonstration approchante', texte: 'Les adultes autour d\'elle sont plus tendus. Cette tension génère des oscillations chez elle. Son brouillage de Thyrsaevyn (359) est l\'un des 3 en expiration imminente. Sa signature oscillante est exactement ce que le prototype de Kasevolt (360) cherche.' },
    ],
    sorts: ['Stabilisation de résonance', 'Décharge d\'oscillation', 'Multi-signature'],
    relations: [
      { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Lui a transmis des techniques de stabilisation depuis sa propre expérience de multi-résonance.' },
      { id: 62, nom: 'Thyven', type: 'contact', note: 'Figure de référence lointaine mentionnée par les adultes. Elle ne sait pas qui c\'est exactement.' },
    ],
    lore_long: `Saelrethkael, 11 ans, vit parmi les 39 enfants Élus de Virex. Sa multi-résonance est plus instable que Thyrekavel (275) — son élément change avec son état émotionnel. Le brouillage de Thyrsaevyn (359) qui la protège est l'un des 3 en expiration imminente. Sa signature oscillante est exactement ce que le prototype de Kasevolt (360) cherche à détecter. Kaelvenorm (383) l'aide à se stabiliser — insuffisant pour la crise imminente.`,
  },

};

