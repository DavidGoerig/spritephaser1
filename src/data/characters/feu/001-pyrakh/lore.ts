// ============================================================
//  BRASIA — Lore complet (étalon de qualité C1)
//  id: 1 | Feu | Pyriens | Dissidentes | Enchanteur-Soutien
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique (héritage), Purge des Ordres Soigneurs
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 1,
  nom: 'Brasia',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  // ── APPARENCE ─────────────────────────────────────────────
  apparence: {
    taille_corpulence: `Petite pour une Pyrienne — un mètre soixante-deux, là où la moyenne de son espèce dépasse largement les mètres soixante-dix. Corps compact et dense, les épaules légèrement plus larges que les hanches. Elle ne compense pas sa stature par l'attitude : elle occupe l'espace strictement selon ses besoins, jamais plus.`,

    peau: `Gris basalte refroidi — la teinte des Pyriens des quartiers profonds de Khar-Vurn, ceux qui vivent sous la chaleur permanente mais sans exposition directe au soleil. Les fissures élémentaires courent le long de ses avant-bras et de ses mains : lignes fines, légèrement orangées, plus visibles en fin de journée quand elle a beaucoup soigné. Sur son poignet gauche, une cicatrice plus large et plus blanche que les autres — pas une blessure de combat, mais la trace de la première fois où elle a canalisé trop de chaleur trop vite, à douze ans, avant de comprendre ce qu'elle faisait.`,

    yeux: `Ambre foncé, presque brun-cuivré en lumière normale. Sous effort de canalisation, ils passent au blanc chaud — pas éblouissant, plutôt comparable à regarder une forge à travers un verre épais. Elle ne le contrôle pas entièrement. Ceux qui l'ont vue soigner une blessure grave disent que ce moment-là est le seul où elle semble quelque chose d'autre qu'efficace.`,

    cheveux: `Gris-fumée permanents — non pas de vieillesse, elle a quarante-six ans, mais d'exposition longue aux hautes températures lors de ses formations aux Ordres Soigneurs. Tressés serré, maintenus par des perles de pierre cendrée venues des sanctuaires souterrains des Dissidentes. Chaque perle représente un lieu qu'elle a traversé. Il y en a dix-neuf.`,

    vetements: `Cuir épais brun-sombre sur une base de tissu ignifuge gris. Fonctionnel, réparé plusieurs fois, jamais propre tout à fait — la poussière de Khar-Vurn s'incruste dans le cuir. Dans ses poches cousues à l'intérieur : instruments de soin miniaturisés, fragments d'urgence, et un registre de noms en code qu'elle est la seule à pouvoir déchiffrer. Pas de signe distinctif de faction visible — c'est calculé.`,

    signes_particuliers: `Un fragment de la Forge Silencieuse autour du cou, enchâssé dans du métal brut. La roche vitrifiée est encore légèrement chaude au toucher — des Élus Feu ayant passé du temps à Khar-Vurn rapportent que tous les fragments de la Forge conservent quelque chose de la chaleur du jour de la Rupture. Elle ne le porte pas par sentiment. Elle le porte comme question permanente : qui décide qui mérite de survivre à une catastrophe.`,
  },

  // ── PSYCHOLOGIE ───────────────────────────────────────────
  psychologie: {
    dominante: `La générosité de Brasia est clinique. Elle soigne parce que laisser mourir quelqu'un qu'elle pourrait sauver serait un gaspillage de ressources — les siennes, celles de la personne, celles du réseau qu'elle représente. Ce n'est pas de la froideur : c'est une façon de fonctionner sous pression permanente sans s'effondrer dans la compassion.`,

    contradictions: `Elle prend soin des autres avec une précision quasi-chirurgicale et une distance absolue, mais elle a mémorisé les noms complets, les factions, les éléments et les histoires des treize Élus qu'elle a sortis de Khar-Vurn il y a onze ans. Elle ne les cherche pas. Elle ne veut pas savoir ce qu'ils sont devenus. Mais elle sait leurs noms comme on sait le nombre de battements de son propre cœur.`,

    peur: `Que l'Empire finisse par avoir raison. Pas sur le fond — sur la conclusion. Que le chaos produit par la Sélection du Besoin non contrôlée soit effectivement pire que le contrôle impérial. Elle a vu des régions sans Élus stabilisateurs mourir lentement. L'Empire n'a pas tort que l'équilibre nécessite de la gestion. La question est : à qui appartient ce droit de gérer.`,

    desir: `Restaurer les Ordres Soigneurs comme institutions indépendantes — ni impériales, ni dissidentes, ni d'aucune faction. Des structures qui soignent parce que soigner est la seule réponse à certaines questions, pas parce qu'une autorité l'autorise. Elle sait que c'est utopique dans le monde actuel. Elle le veut quand même.`,

    rapport_au_pouvoir: `Son Feu ne sert pas à brûler. C'est son anomalie fondamentale et l'origine de toute sa trajectoire. La chaleur est un vecteur de soin si on la cible précisément — cautériser, réchauffer les tissus en hypothermie, accélérer la circulation dans un membre comprimé, dégager les voies respiratoires par expansion thermique contrôlée. Elle a passé quinze ans à développer des techniques que les Ordres Soigneurs n'avaient pas documentées. Ce sont ces techniques que l'Empire a officiellement classifiées après sa fuite — ce qui signifie que ses méthodes existent maintenant dans des archives impériales sous un autre nom.`,
  },

  // ── HISTOIRE ──────────────────────────────────────────────
  histoire: {
    origine: {
      titre: `Les deux partis et la troisième option`,
      texte: `Brasia est née à Khar-Vurn, dans le Dixième District de Forge — ni le quartier ouvrier bruyant du Parti du Feu, ni le district régulé du Parti de l'Acier, mais la zone tampon entre les deux, là où les ingénieurs de maintenance vivaient sans appartenir entièrement à aucun camp.

Son père, Harrak, était calibreur thermique au service des deux factions simultanément — sa neutralité était professionnelle et lui coûtait socialement chacun des jours où il maintenait. Sa mère était morte en couches, d'une complication que les Soigneurs des Ordres auraient pu traiter si les délais d'enregistrement impérial n'avaient pas retardé leur accès. Harrak ne l'avait jamais dit directement à Brasia, mais elle avait lu les documents à quinze ans. Elle n'en avait pas parlé non plus.

Ce qu'elle avait appris des deux partis, enfant : le Feu valorisait l'innovation et produisait des gens qui pensaient en termes de transformation. L'Acier valorisait la structure et produisait des gens qui pensaient en termes de maintenance. Ce qu'aucun des deux ne lui avait appris, et qu'elle avait découverte seule : que les corps blessés ont besoin des deux simultanément. Transformer les tissus abîmés. Maintenir ce qui reste intact. Elle s'était orientée vers la médecine avec l'impression de résoudre un problème politique par voie clinique.

Elle avait eu partiellement raison. La médecine n'était pas apolitique. Mais elle posait les questions différemment.`,
    },

    eveil: {
      titre: `La chaleur qui répare`,
      texte: `Le Feu de Brasia s'est manifesté à douze ans, dans les circonstances les plus banales possibles : son voisin, un enfant de huit ans nommé Thrash, s'était brûlé la main sur un conduit de chaleur mal isolé. Brasia avait posé sa paume sur la blessure pour évaluer l'étendue des dégâts — réflexe de la fille du calibreur thermique, qui mesurait la chaleur depuis qu'elle savait marcher. La chaleur qu'elle avait sentie n'était pas celle de la brûlure. C'était la sienne, qui sortait de sa main vers celle de Thrash, différemment de tous les flux qu'elle connaissait. Propre. Directe. Précise.

La brûlure n'avait pas complètement disparu. Mais elle avait réduit. La peau avait récupéré une qualité que les brûlures de second degré n'ont normalement pas — une continuité de texture, sans la déchirure caractéristique des cellules mortes. Thrash avait regardé sa main. Brasia avait regardé la sienne.

L'Ordre des Soigneurs avait été contacté le lendemain. L'enregistrement impérial avait suivi — obligatoire pour tout Élu identifié avant seize ans. Elle avait été assignée à la formation des Soigneurs, ce qui avait semblé logique à tous le monde, y compris à elle. Ce qu'elle avait retenu de cette journée n'était pas sa nature d'Élue, mais la précision : la chaleur pouvait réparer si elle était exactement à la bonne intensité, au bon endroit, pendant le bon temps. Trop peu, rien ne se passe. Trop, tu aggraves. C'est une description de la médecine en général. C'est aussi une description de la politique. Elle y penserait longtemps après.`,
    },

    rupture: {
      titre: `Le décret et les treize`,
      texte: `Le décret est arrivé lors d'une réunion ordinaire de l'Ordre des Soigneurs de Khar-Vurn, un mardi, par courrier officiel de la Citadelle du Voile. Brasia avait trente-cinq ans et était praticienne senior depuis sept ans. Elle avait lu le texte deux fois parce qu'elle était certaine d'avoir mal compris la première.

Le décret était clair. Les Élus non enregistrés au Registre du Calendrier impérial ne pouvaient plus recevoir de soins prioritaires dans les structures des Ordres Soigneurs. Ils pouvaient être mis en liste d'attente standard, sans garantie de délai. La justification administrative : garantir que les ressources médicales aillent en priorité aux Élus dont la contribution au Voile d'Équité était documentée.

La praticienne assise à sa gauche avait demandé si cela incluait les urgences. La réponse écrite : oui. Les urgences pouvaient être prises en charge si et seulement si la situation mettait en danger des Élus enregistrés à proximité.

Brasia avait posé le document sur la table. Elle n'avait pas dit immédiatement non. Elle avait calculé. Elle avait trois Élus non enregistrés en soins actifs dans les salles de l'Ordre ce jour-là : un homme Pyrien avec une compression thoracique causée par un effondrement de conduit thermique, une femme Nérinde avec une brûlure chimique de l'explosion d'une cuve industrielle, et un enfant de onze ans dont l'élément venait de se manifester de façon violente et qui présentait des signes de choc élémentaire. Le choc élémentaire non traité chez un enfant de cet âge avait un taux de mortalité de quarante-trois pour cent dans les premières douze heures.

Elle avait dit non.

Pas théoriquement. Pas comme principe. Elle avait refusé le décret en acte, ce soir-là, en terminant de soigner les trois patients. Puis elle avait passé les jours suivants à identifier les autres non-enregistrés en danger dans le réseau de contacts qu'elle avait construit pendant sept ans — des Soigneurs dans d'autres quartiers, des ingénieurs de maintenance qui connaissaient les évents thermiques souterrains, des contacts dans le Parti du Feu qui savaient où les travailleurs non enregistrés se cachaient quand ils étaient blessés.

Les treize qu'elle a sortis n'étaient pas tous dans le même endroit. Elle a mis huit jours. La couverture venait d'une combinaison de mensonges administratifs plausibles, de corridors thermiques connus des seuls calibreurs comme son père, et d'une Élue Glace — Velindra, affectée au poste de Régulateur thermique de la Grande Forge — qui lui a accordé une heure de déviation des détecteurs thermiques en échange d'un traitement médical qu'elle ne pouvait demander officiellement. Velindra avait regardé partir les treize depuis un couloir. Elle avait dit : "Je n'ai rien vu." Brasia avait dit : "Je sais."

Les Capteurs impériaux avaient commencé à la chercher quarante-huit heures plus tard. Les Dissidentes du Voile l'avaient contactée avant eux.`,
    },

    maintenant: {
      titre: `Infrastructure`,
      texte: `Brasia n'est pas une fugitive au sens romantique du terme. Elle ne court pas — elle se déplace selon un calendrier précis, avec des points de contact planifiés, des protocoles de sécurité qui ont évolué onze fois depuis la première année. Elle n'a pas de base fixe. Elle a des caches dans sept districts différents de Varkhôl et quatre points de contact hors de la région, dont deux à Thalassyr et un à l'entrée souterraine d'Ormn-Dur.

Thessandra — son ancienne élève, formée pendant les deux années précédant la Purge — maintient le réseau de soigneurs clandestins que Brasia a construit. Brasia forme. Thessandra gère. La division est fonctionnelle et les deux femmes s'entendent exactement autant qu'elles en ont besoin, c'est-à-dire assez.

Ce qu'elle ne dit pas aux Dissidentes qui l'utilisent comme ressource médicale : elle ne travaille pas pour les Dissidentes. Elle travaille pour les blessés. La distinction est subtile et, dans les faits quotidiens, presque invisible. Mais elle existe et elle la maintient. Si l'Empire venait à proposer une restauration des Ordres Soigneurs indépendants comme condition de paix, elle considèrerait la proposition sérieusement. Les Dissidentes l'ont compris. Elles ne lui demandent pas sa loyauté, seulement ses compétences.

Ce matin, elle a reçu un message via le réseau du Parti du Feu — en qui elle n'a pas confiance mais avec qui elle coexiste depuis toujours. Cendrix est à Khar-Vurn. Elle dirige une unité de Capteurs. Elle cherche officiellement des Élus Feu non enregistrés dans le District Quatorze. Officieusement, le message dit qu'elle a demandé des dossiers médicaux de l'époque des Ordres Soigneurs — les années 47 à 52 du calendrier impérial. Les années où Brasia était praticienne senior.

Elle soigne le blessé devant elle — un forgeron du Parti du Feu avec une fracture ouverte du radius et une infection secondaire — avec la même attention que si cette information n'existait pas. C'est la seule façon de fonctionner. Après, elle va réfléchir.`,
    },

    objectif: {
      titre: `La question du guichet`,
      texte: `Brasia ne veut pas renverser l'Empire. Elle ne pense pas que les Dissidentes peuvent le faire sans un coût qui ressemblerait trop à celui qu'elles dénoncent. Ce qu'elle veut est plus petit et plus difficile : qu'il existe, quelque part dans le monde, des structures de soin qui ne répondent à aucune autorité de redistribution — ni féerique, ni convergente, ni dissidente.

Des Ordres Soigneurs comme ceux qui ont existé avant le Voile d'Équité, selon les récits des Néréides qui ont une longue mémoire. Des institutions dont la seule doctrine est de soigner ceux qui arrivent, dans l'ordre où ils arrivent, avec ce qu'ils ont. Sans vérifier leur enregistrement. Sans valider leur utilité politique. Sans calculer le retour sur investissement de leur survie.

Elle sait exactement ce que l'Empire dirait : que ce système a produit des déséquilibres régionaux massifs, des monopoles de soin, des zones entières abandonnées parce qu'aucun Soigneur n'y naissait et que personne n'avait de raison économique d'y aller. Elle sait que c'est vrai. Elle sait aussi que le système qu'il a substitué a produit le décret qu'elle a refusé.

Ce qu'elle cherche n'est pas une solution théorique. C'est un prototype — une structure qui fonctionne réellement, assez longtemps, assez bien, pour prouver que c'est possible. Elle a quarante-six ans. Elle a peut-être vingt ans devant elle si elle fait attention, moins si les Capteurs font bien leur travail. Ce qu'elle peut faire dans ce temps dépend de si Cendrix la trouve avant qu'elle trouve Cendrix.`,
    },

    evenements_narratifs: ['Rupture_Thermique', 'Saturation_des_Elus'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Agent principal de la résistance médicale à Khar-Vurn. Témoin héréditaire de la Rupture Thermique (née après, mais son père y a survécu). Victime directe de la Purge des Ordres Soigneurs. Héros de la sortie des treize Élus. Actuellement : infrastructure mobile du réseau Dissidente à Varkhôl.`,
  },

  // ── RELATIONS ─────────────────────────────────────────────
  relations: [
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'ennemi',
      depuis_ici: `Brasia ne déteste pas Cendrix. C'est la chose la plus compliquée de sa vie. Cendrix croit sincèrement au Voile d'Équité — Brasia l'a vue construire cette conviction pas à pas, avec une rigueur analytique qui forçait le respect. Ce n'est pas une fanatique aveugle. C'est quelqu'un qui a regardé les preuves disponibles et tiré des conclusions différentes. Le problème est que ces conclusions mènent à des actions que Brasia ne peut pas laisser se réaliser. Si Cendrix la trouve, elle sera arrêtée. Si Brasia disparaît à temps, Cendrix continuera de chercher les Élus non enregistrés de Khar-Vurn. Les deux options ont des coûts que Brasia préférerait ne pas calculer.`,
      depuis_la: `Cendrix a demandé des dossiers médicaux de l'époque de Brasia. Elle sait qu'elle cherche son ancienne collègue. Elle dirait, si on lui demandait, qu'elle suit les protocoles. Ce serait vrai. Elle ne dirait pas qu'elle vérifie deux fois les adresses secondaires avant d'envoyer ses agents.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 10,
      nom: 'Thessandra',
      type: 'disciple',
      depuis_ici: `Thessandra était la meilleure recrue que Brasia ait formée — précise, rapide, capable de prendre des décisions sous pression sans perdre la rigueur clinique. Ce que Brasia ne lui avait pas dit et n'a toujours pas dit : elle avait hésité à la former autant, précisément parce qu'elle était trop bonne. Une praticienne trop visible attire les Capteurs. Thessandra a résolu ce problème seule en devenant invisible d'une façon que Brasia n'aurait pas conçue — en se fragmentant dans le réseau au lieu de le diriger. Brasia considère cela comme une amélioration de son propre modèle.`,
      statut: 'actif',
    },
    {
      personnage_id: 8,
      nom: 'Velindra',
      type: 'contact_nécessaire',
      depuis_ici: `Velindra lui a accordé une heure de couverture thermique il y a onze ans, au prix de sa propre sécurité. Brasia ne sait pas si c'était de la conviction ou de la dette médicale (elle avait traité une affection pulmonaire de Velindra six mois avant). Elle n'a pas cherché à savoir. Velindra est encore en poste comme Régulateur — ce qui signifie qu'elle vit sous la peur de disparaître comme Veldris. Ce que Brasia pense de ça, elle ne le formule pas à voix haute.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 7,
      nom: 'Kael',
      type: 'contact_nécessaire',
      depuis_ici: `Un des survivants du Quatrième District. Il n'a plus de faction — après la Rupture, il a vu suffisamment des deux camps pour refuser les deux. Il connaît les corridors thermiques de Khar-Vurn mieux que quiconque et il lui a donné des informations trois fois depuis sa fuite. Il ne lui a jamais demandé ce qu'elle allait en faire. C'est la forme de confiance la plus propre qu'elle connaisse.`,
      statut: 'actif',
    },
  ],

  // ── COMBAT ────────────────────────────────────────────────
  combat: {
    philosophie: `Brasia ne combat pas au sens traditionnel du terme. Elle optimise les conditions de survie de ceux qui combattent avec elle, et elle neutralise les conditions de survie de ceux qui la menacent. La différence entre soigner et combattre, dit-elle, c'est seulement la direction de la chaleur. Elle maintient ses alliés en état de fonctionner le plus longtemps possible, avec le minimum de ressources. Si ça ressemble à un soutien, c'est parce que ça l'est. Elle ne prétend pas que c'est autre chose.`,

    sorts: [
      {
        nom: 'Flux Thermique',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Canal de chaleur ciblée vers un allié adjacent. Régénère des PV à chaque début de tour pendant 3 tours. Plus efficace sur les Élus Feu, Acier et Roche. Inefficace sur les Glace.`,
        description_lore: `Ce que les Ordres Soigneurs appelaient la "technique Brasia" avant qu'elle soit officiellement classifiée. Une chaleur précise, jamais excessive, qui accélère la régénération naturelle des tissus sans brûler. Elle l'a développée en quinze ans de pratique médicale. Le document de classification impérial s'intitule "Méthode thermique de consolidation tissulaire, protocole BRS-7". Elle a trouvé ça à la fois ironique et satisfaisant.`,
      },
      {
        nom: 'Cage Braisée',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Anneau de chaleur intense autour d'une zone de 3×3. Les ennemis qui franchissent la frontière subissent des dégâts de brûlure. Les alliés à l'intérieur régénèrent des PV. Dure 2 tours.`,
        description_lore: `Elle a mis au point cette technique lors des huit jours de la sortie des treize Élus — une façon de créer une zone temporairement défendable dans un couloir thermique sans attirer l'attention visuelle. La chaleur rayonnante suffisait à dissuader sans flamme visible. Elle ne l'avait jamais utilisé en combat direct avant de rejoindre les Dissidentes. Elle avait sous-estimé l'efficacité défensive.`,
      },
      {
        nom: 'Résurrection Incandescente',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Libération totale de la chaleur accumulée sur une cible alliée. Soin massif instantané. Brasia ne peut plus lancer de sorts pendant 2 tours après activation. Réinitialise le statut "à terre" si déclenché dans les 2 tours suivant le passage à 0 PV.`,
        description_lore: `Elle ne l'a utilisé que deux fois en onze ans de résistance. La première fois, c'était pour un Dissident qu'elle ne connaissait pas, père de trois enfants, qui avait pris un sort de glace dans le thorax. La deuxième, c'était pour Thessandra, dans une cache de Khar-Vurn, après une embuscade. Dans les deux cas, elle a passé les deux tours d'incapacité à regarder si ça avait fonctionné. Dans les deux cas, ça avait fonctionné.`,
      },
      {
        nom: 'Cautérisation de Terrain',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Braise une case adjacente. Les ennemis qui y entrent perdent des PV chaque tour. Les alliés blessés qui s'y arrêtent régénèrent légèrement (la chaleur compresse et dégrippe les blessures mineures). Dure jusqu'à la fin du combat ou jusqu'à ce qu'un Élu Glace ou Eau annule la case.`,
        description_lore: `Dérivée de la technique de traitement des gelures — chaleur modérée appliquée progressivement pour recirculer le sang. En inversion : la même chaleur appliquée à un adversaire ralentit les systèmes locomoteurs. Elle ne théorise pas le combat. Elle applique la biologie dans les deux sens.`,
      },
      {
        nom: 'Chaleur Cicatrisante',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura permanente. Tous les alliés dans un rayon de 2 cases régénèrent 1 PV en début de tour. En cas de canalisation active (un sort lancé dans le même tour), la régénération passe à 3 PV pour ce tour uniquement.`,
        description_lore: `Elle ne s'en rend pas compte la plupart du temps. La chaleur qu'elle dégage naturellement est légèrement supérieure à la normale pour son espèce — effet secondaire d'une vie entière de canalisation continue. Les Dissidentes qui ont passé des nuits en cache avec elle rapportent que dormir à côté de Brasia est plus chaud qu'à côté d'un feu de camp ordinaire. Elle trouve ça anecdotique. Ses alliés, moins.`,
        image_prompt: `Brasia, Pyrienne, petite et compacte, vêtements de cuir sombre, cheveux gris-fumée tressés, veines orangées visibles sur les avant-bras, debout immobile au centre d'un groupe de quatre personnes blessées allongées. Une chaleur diffuse rayonne d'elle, visible comme une distorsion de l'air autour d'elle. Style concept art Riot Games, palette sombre et chaude, fond de sous-sol de Khar-Vurn, basalte noir et conduits en métal.`,
      },
    ],
  },

  // ── PROMPTS IMAGES ─────────────────────────────────────────
  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Brasia',
      description: `Brasia, femme Pyrienne, petite et compacte, 46 ans, peau gris basalte avec de fines fissures orangées sur les mains et les avant-bras, cheveux gris-fumée tressés avec des perles de pierre sombre, yeux ambre foncé. Expression neutre, légèrement fatiguée mais concentrée. Vêtement de cuir épais brun-sombre. Autour du cou, un fragment de roche vitrifiée grise dans un cadre de métal brut. Fond flou — basalte noir de Khar-Vurn. Style Riot Games League of Legends concept art, éclairage chaud directionnel, rendu semi-réaliste, haute qualité.`,
      generated_path: undefined,
    },
    {
      type: 'lore_scene',
      titre: 'La nuit des treize — devant la Forge Silencieuse',
      description: `Brasia, femme Pyrienne compacte en cuir sombre, cheveux gris-fumée, veines orangées lumineuses sur les bras, guidant en silence un groupe de silhouettes blessées (13 personnes) à travers un couloir de pierre noire. En arrière-plan visible : la Forge Silencieuse de Khar-Vurn — silhouettes vitrifiées dans la roche, marteaux suspendus dans leur élan, lumière orange figée dans le verre basaltique. Atmosphère de tension et de détermination. Nuit. Éclairage orange-rougeâtre de la Forge figée. Style concept art Riot Games, palette sombre avec accents orange et gris. Aucun sentiment héroïque — juste une logistique précise dans l'obscurité.`,
      generated_path: undefined,
    },
    {
      type: 'action_signature',
      titre: 'Résurrection Incandescente — le moment de tout donner',
      description: `Brasia agenouillée sur le sol de pierre noire, les deux mains à plat sur la poitrine d'un allié à terre. Son corps entier émet une lumière blanche-orange intense — la chaleur totale libérée visible comme une explosion de lumière chaude vers la cible. Ses yeux sont entièrement blancs-lumineux. Ses veines sont comme des filaments de feu. Autour d'elle, ombres et éclats de chaleur. Style concept art intense, Riot Games qualité, palette de blancs chauds et d'oranges profonds sur fond noir.`,
      generated_path: undefined,
    },
  ],

  // ── LORE LONG — CHAPITRE DE ROMAN ─────────────────────────
  // 2847 mots
  mot_count_cible: 2800,

  lore_long: `
DE LA FORGE AU SILENCE
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

Elle nettoya la plaie, évalua l'étendue de l'infection, calcula mentalement le temps de traitement, la quantité de ressources, la durée de convalescence minimale pour que Drehn puisse reprendre une fonction dans les réseaux du Parti du Feu. Ce n'était pas de la froideur. C'était du respect pour sa réalité — il avait besoin de savoir combien de temps il serait hors de combat, pas combien de temps elle allait passer à s'inquiéter pour lui.

Quand elle posa la main sur la fracture et commença à canaliser la chaleur, Drehn retint son souffle. Elle avait vu cette réaction des centaines de fois. Les gens s'attendaient soit à la brûlure soit au froid. Ce qu'ils recevaient était ni l'un ni l'autre — une chaleur précise, au degré près, qui pénétrait dans les tissus sans les dévorer. La première fois, c'était toujours déstabilisant.

"Ça fait pas mal," dit Drehn, avec le ton de quelqu'un qui venait de trouver une erreur de calcul dans un document officiel.

"Non."

"Pourquoi ?"

"Parce que la douleur thermique nécessite un gradient rapide. Tu la brûles ou tu la glaces. Je fais ni l'un ni l'autre."

Drehn digéra ça. "C'est dans les manuels ?"

"C'était dans mes manuels. Le Voile d'Équité les a classifiés il y a neuf ans." Elle sentit quelque chose changer dans la pièce — la façon dont il avait retenu sa respiration. "Continue à respirer normalement."

"Désolé."

"Non. C'est juste utile pour que la circulation se rétablisse correctement."

—

II.

Brasia avait connu l'Académie des Ordres Soigneurs à vingt ans, après quatre ans de formation préliminaire dans le district de maintenance thermique où elle avait grandi. Elle était arrivée avec un dossier impeccable et une façon de poser des questions qui mettait certains professeurs mal à l'aise — pas parce qu'elle était arrogante, mais parce qu'elle cherchait la logique précise derrière chaque procédure et ne s'arrêtait pas quand la réponse était "parce que c'est le protocole."

Cendrix était là la même année. Pas dans la même formation — Cendrix rejoignait l'Académie d'Intelligence, pas les Ordres Soigneurs. Mais les deux institutions partageaient une aile résidentielle, une bibliothèque et une cantine. Les soirées, Brasia avait vite compris, étaient le lieu réel de formation.

Elle se souvenait précisément de la première conversation politique. Elle était à une table avec une assiette de nourriture quelconque et un rapport sur les taux de guérison comparés entre districts. Cendrix s'était assise en face avec un dossier de cartographie des signatures élémentaires régionales et avait regardé le rapport de Brasia avec une attention que les inconnus n'accordent normalement pas aux documents des autres.

"Les taux sont faussés," avait dit Cendrix.

"Je sais." Brasia avait continué à lire. "Pour quelle raison, selon toi ?"

"Les districts à forte présence impériale ont de meilleurs taux parce qu'ils reçoivent plus d'Élus Soigneurs enregistrés. L'affectation crée l'inégalité qu'elle prétend corriger."

Brasia avait levé les yeux. "Tu travailles pour l'Intelligence."

"Oui."

"Et tu me dis que le Voile d'Équité produit de l'inégalité."

Cendrix avait légèrement souri. "Non. Je te dis que le Voile d'Équité produit de l'inégalité dans la distribution médicale parce que les Élus Soigneurs sont attribués selon l'utilité stratégique des districts, pas selon le besoin médical réel. Ce qui n'invalide pas le Voile d'Équité en général. Ça identifie une faille spécifique dans son application."

"Et ta solution est ?"

"Meilleure cartographie des besoins réels. Algorithmes d'affectation corrigés."

Brasia avait regardé son assiette un moment. "Et si la cartographie révèle que certains besoins ne sont pas stratégiquement rentables à satisfaire ?"

Le silence qui avait suivi avait duré trois secondes. "Alors la politique doit décider si elle accepte cette conséquence."

"Et si elle l'accepte ?"

"Alors les Ordres Soigneurs document le coût et maintiennent la pression pour une révision."

Brasia avait repris son rapport. "C'est une réponse d'analyste."

"Je suis une analyste."

"Je sais." Elle avait tourné une page. "Moi je suis une praticienne. La différence est que toi tu identifies les problèmes au niveau du système, et moi je les gère au niveau de la personne en face de moi. Nos métiers ne sont pas en désaccord. Sauf le jour où le système décide que la personne en face de moi n'a pas droit aux soins."

Cendrix n'avait pas répondu à ça ce soir-là. Elles avaient mangé en silence et échangé leurs documents à la fin. Brasia avait pensé que la conversation était terminée.

Elle avait duré en réalité trois ans.

—

III.

Le décret était arrivé un mardi. Brasia avait lu le texte deux fois.

Elle avait les trois patients non-enregistrés dans les salles de l'Ordre ce jour-là. L'homme au thorax comprimé, la femme aux brûlures chimiques, l'enfant de onze ans en choc élémentaire. Quarante-trois pour cent de mortalité en douze heures sans intervention pour ce dernier. Elle avait vérifié le chiffre parce qu'elle le connaissait mais le voulait confirmé. Il était confirmé.

Elle avait posé le décret sur la table. La praticienne à sa gauche avait demandé si ça incluait les urgences. La réponse était dans le document — oui, sauf si la situation mettait en danger des Élus enregistrés à proximité. Brasia avait regardé les salles. Il n'y avait pas d'Élus enregistrés à proximité des trois non-enregistrés.

"Non," dit-elle.

La réunion avait continué un moment après ça. Les autres praticiens avaient regardé dans des directions différentes. Le directeur de l'Ordre avait noté sa déclaration avec le soin particulier de quelqu'un qui veut que la trace soit précise.

Elle était retournée aux salles.

Les huit jours qui avaient suivi avaient la texture des choses faites sans avoir décidé de les faire — elle avait agi selon la logique de chaque heure, et c'était seulement rétrospectivement que ça formait un plan. Identifier les treize non-enregistrés à risque dans le réseau. Cartographier les corridors thermiques que son père lui avait appris à l'âge de huit ans. Contacter Velindra, l'Élue Glace au poste de Régulateur thermique, avec une précision calculée — elle savait ce que Velindra lui devait et ce que Velindra pourrait accepter de risquer.

Velindra avait regardé les treize partir dans l'obscurité du corridor. Elle avait dit : "Je n'ai rien vu." Une façon de confirmer et d'établir sa position officielle simultanément. Brasia avait répondu : "Je sais." Ce que les Capteurs ne comprendraient peut-être jamais — que les pactes les plus solides de la résistance n'étaient pas des idéologies. C'étaient des échanges précis entre personnes qui savaient exactement ce qu'ils faisaient.

Les Capteurs avaient commencé à chercher Brasia quarante-huit heures après la sortie des treize.

Les Dissidentes du Voile l'avaient contactée en vingt-quatre heures.

—

IV.

Elle n'avait pas immédiatement accepté. Elle avait pris cinq jours — cachée chez Kael, le forgeron du Quatrième District qui n'appartenait à plus rien depuis la Rupture Thermique et qui lui avait loué une chambre au sous-sol en échange d'un traitement pour ses poumons. Cinq jours à réfléchir à ce que signifiait rejoindre un réseau dont l'objectif était de renverser un système et non simplement de soigner malgré lui.

La distinction lui importait. Elle importait encore maintenant.

Ce qu'elle avait dit aux Dissidentes lors du premier contact : "Je soigne. Si ce que vous faites crée des blessés que vous voulez que je traite, je peux faire ça. Si vous attendez que je croie que votre cause est juste, vous attendez une chose que je ne suis pas en position de vous accorder — je ne sais pas encore si vous avez raison."

La réponse avait été : "Nous ne demandons pas votre conviction. Nous demandons vos mains."

C'était une réponse honnête. Elle avait accepté.

Onze ans plus tard, elle était toujours là. Ses mains étaient toujours les mêmes — un peu plus marquées de fissures élémentaires, un peu plus précises. Sa conviction n'avait pas fondamentalement évolué : elle ne savait pas encore si les Dissidentes avaient raison au sens absolu. Elle savait qu'elles avaient besoin de soins et qu'elle pouvait les fournir.

—

V.

Drehn respira régulièrement pendant les vingt minutes que dura le traitement. Les fractures ouvertes avec infection nécessitent une combinaison de stabilisation thermique et d'intervention directe — elle avait appris à faire les deux simultanément, une chaleur dans les tissus pendant que ses mains travaillaient mécaniquement à l'alignement osseux. Ce n'était pas élégant. Elle ne s'était jamais souciée de l'élégance.

Quand elle retira les mains, la fracture était stabilisée — pas guérie, mais alignée et sans propagation de l'infection. La chaleur avait fait sa part.

"Tu peux bouger les doigts," dit-elle.

Drehn bougea les doigts. Avec soin, avec la lenteur de quelqu'un qui vérifie l'information avant de la valider. "Oui."

"Immobiliser le bras pendant six jours. Pas de charge. Si l'infection revient — chaleur, pas fièvre, tu comprends la différence ?"

"La chaleur c'est la blessure. La fièvre c'est le corps."

"Correcte distinction. Viens me trouver si tu sens la chaleur progresser au-delà de l'avant-bras."

Elle remballa sa trousse. Dehors dans le corridor, elle entendit le bruit caractéristique des tuyaux de géothermique sous pression — Khar-Vurn, partout, à toutes heures. La ville respirait par ses conduits de chaleur.

Elle pensa à Cendrix.

Pas pour la première fois de la journée. Depuis le message du matin, la question revenait entre deux gestes, entre deux décisions, comme un corps étranger que l'organisme reconnaît sans savoir comment le traiter.

Cendrix était venue à Khar-Vurn avec une unité. Elle demandait des dossiers médicaux des années 47 à 52. Elle était efficace, précise, analytique — les mêmes qualités qu'à vingt ans dans la cantine de l'Académie. Elle croyait encore au Voile d'Équité. Brasia ne doutait pas de ça.

Ce que Brasia ne pouvait pas résoudre proprement : elle comprenait pourquoi Cendrix y croyait. Le Voile d'Équité avait fait des choses réelles. Il y avait des régions qui avaient reçu des Soigneurs pour la première fois grâce à la redistribution. Des famines arrêtées. Des guerres frontalières stabilisées. Ce n'était pas un mensonge. C'était une vérité incomplète utilisée pour justifier des pouvoirs qu'elle ne devrait pas avoir — et Cendrix distinguait peut-être cette différence, ou peut-être pas encore.

Ce n'était pas à Brasia de le lui apprendre. Elle n'était pas là pour convertir. Elle était là pour soigner ceux que le décret avait exclus.

—

VI.

Elle rangea les derniers instruments. Drehn regardait son bras avec l'expression d'un homme qui recalcule ses prochains sept jours.

"Tu pars quand ?" demanda-t-il.

"Ce soir."

"La ville est plus surveillée que d'habitude."

"Je sais."

Elle prit sa trousse. À la porte du sous-sol, elle s'arrêta une seconde — vieille habitude, vérifier le couloir avant de bouger. Le couloir était vide. Les tuyaux ronflaient doucement. Khar-Vurn, à trente mètres au-dessus, continuait de fonctionner comme elle avait toujours fonctionné — avec la précision lente d'une machine conçue pour durer.

Le fragment de la Forge Silencieuse était froid contre sa poitrine, comme toujours. Les gens qui ne venaient pas de Khar-Vurn s'attendaient à ce qu'il soit chaud — logique, un souvenir de chaleur devrait être chaud. Mais la Forge Silencieuse n'était pas un souvenir de chaleur. C'était un souvenir d'arrêt. Le moment où quelqu'un avait décidé que certaines personnes pouvaient mourir dans l'équilibre qu'on leur imposait.

Elle n'avait jamais su si Veldris avait été extrait délibérément ou s'il était simplement parti. Elle ne le saurait peut-être jamais. Ce qu'elle savait : l'Empire n'avait pas répondu à la question. Et l'absence de réponse était une réponse.

Elle souffla doucement — pas un soupir, juste une régulation de la pression dans les poumons, comme elle l'enseignait à ses patients. Puis elle entra dans le couloir.

Drehn soignerait correctement. Elle reviendrait dans six jours pour vérifier la fracture. D'ici là, elle aurait décidé quoi faire au sujet de Cendrix, ou la décision aurait été prise sans elle — ce qui arrivait aussi parfois. On ne contrôlait pas tous les calendriers.

Elle monta les marches vers la rue et sentit la chaleur de Khar-Vurn l'envelopper : la chaleur de la roche, des forges, des tuyaux mal isolés, des corps au travail, de la vie ordinaire d'une ville qui ne savait pas encore ce qui allait se passer dans les prochaines quarante-huit heures.

Personne à Khar-Vurn ne savait jamais vraiment ce qui allait se passer. On apprenait à fonctionner avec ça. C'était peut-être, pensa-t-elle en traversant la rue sans se presser, la seule vraie leçon que Khar-Vurn avait à donner.
`.trim(),
};

export default lore;
