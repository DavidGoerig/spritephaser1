// ============================================================
//  ISVARA — Lore complet (Fées · Arc Les Archives Gelées)
//  id: 56 | Fée | Fées | Empire | Spécialiste
//  Arc : Les Archives Gelées
//  Événements : Gel Éternel [P→C] — sait pourquoi le Champ dégèle, n'a pas informé l'Empire
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 56,
  nom: 'Isvara',
  element: 'Fée',
  espece: 'Fées',
  region: 'Crysalme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Un mètre cinquante-huit — taille médiane pour une Fée. Ni les ailes vestigiales de certaines lignées, ni la fragilité de façade des Fées de Citadelle qui n'ont jamais travaillé hors des murs. Elle est à Iskral depuis neuf ans ; le froid l'a rendue économe dans ses gestes, plus dense dans ses silences. On ne remarque pas immédiatement que c'est une Fée — la luminosité interne que la plupart ont en permanence, elle la supprime depuis qu'elle est dans le Nord.`,
    peau: `Blanc-ivoire avec la translucidité habituelle des Fées — les veines courant en tracés complexes sous la surface. À Iskral, après neuf années de contact avec le froid, la peau a pris une nuance légèrement bleutée aux extrémités, comme si le Crysalme avait commencé à la revendiquer. Elle ne considère pas ça comme un problème. Elle considère ça comme une adaptation nécessaire.`,
    yeux: `La qualité des yeux Fée — changeant légèrement selon ce qu'ils perçoivent — est plus marquée chez Isvara que la moyenne. Quand elle lit les lignes du Calendrier, ses yeux deviennent d'un doré presque lumineux. Quand elle observe le Champ Gelé et ses micro-fractures, ils virent au gris froid. Elle a appris à regarder ailleurs quand elle fait des calculs qu'elle ne veut pas que d'autres voient.`,
    cheveux: `Blancs, très fins, très légers — l'esthétique Fée standard. Elle les attache dans les normes de l'Empire pour son travail d'archiviste officielle. En dehors du service, elle les laisse libres, ce qui dans le froid d'Iskral crée un effet légèrement étrange : ils ne flottent pas, ils restent immobiles comme gelés.`,
    vetements: `Uniforme Empire : couches fonctionnelles grises et blanches, insignes d'archiviste sur l'épaule gauche. Par-dessus, en extérieur, des fourrures Givrines qu'elle a acquises localement. La Citadelle lui a offert des manteaux de Citadelle. Elle préfère les fourrures — elles ne signalent pas son origine à distance.`,
    signes_particuliers: `Elle est la seule Fée à Iskral. Ce fait est plus visible qu'elle ne le voudrait. Les Givrins ont envers elle un mélange de déférence (les Fées représentent l'Empire) et de méfiance (les Fées représentent l'Empire). Elle a appris à ne déclencher aucun des deux. Neuf ans de pratique.`,
  },

  psychologie: {
    dominante: `Isvara est venue à Iskral pour cataloguer et surveiller les Archives Gelées. Elle est restée parce qu'elle avait trouvé quelque chose qu'elle ne pouvait pas ignorer et ne savait pas comment rapporter. Le résultat est une personne en équilibre sur un fil depuis neuf ans, maintenant cet équilibre par un travail méticuleux et une sociabilité maîtrisée.`,
    contradictions: `Elle sert l'Empire sincèrement — ce n'est pas une Dissidente cachée. Elle croit au Calendrier, elle croit au Voile d'Équité. Ce qu'elle a découvert ne remet pas en cause sa foi dans le système. Elle remet en cause sa foi dans ce que le système fait réellement. Ce n'est pas la même chose, mais la distinction est difficile à maintenir proprement depuis neuf ans.`,
    peur: `Que ce qu'elle a découvert soit exactement ce que ça a l'air d'être. Elle a passé neuf ans à espérer une autre explication. Elle n'en a pas trouvé.`,
    desir: `Que quelqu'un d'autre fasse le choix de rapporter. Qu'elle ne soit pas la seule à savoir. La solitude de ce savoir est plus lourde que le savoir lui-même.`,
    rapport_au_pouvoir: `Elle a accès aux archives les plus sensibles d'Iskral. Elle a accès au Calendrier des Fées, aux lignes secondaires, aux flux de régulation qui ne sont pas publiés. Elle est précisément la personne que l'Empire a envoyée pour surveiller les Archives Gelées. Et c'est précisément grâce à ça qu'elle sait ce qu'elle sait.`,
  },

  histoire: {
    origine: {
      titre: 'Formation à la Citadelle',
      texte: `Isvara a grandi à la Citadelle du Voile. Née dans une famille d'archivistes — des Fées dont la fonction génération après génération est de lire le Calendrier, d'en documenter les lignes, d'en noter les variations. Son éducation était celle de quelqu'un destiné à un rôle de surveillance et de documentation dans l'administration impériale.

Elle excellait en lecture de lignes secondaires — les flux du Calendrier qui ne sont pas publiés dans les registres officiels mais qui soutiennent les flux principaux comme des racines soutiennent un arbre. C'est une compétence rare. La plupart des archivistes Fée maîtrisent les lignes primaires ; les secondaires requièrent une sensibilité plus fine et une tolérance plus haute à l'ambiguïté.

À vingt-huit ans, on lui a proposé un poste à Iskral. L'Empire avait besoin d'une Fée compétente en lecture de lignes secondaires dans les Archives Gelées du Nord. Le Gel Éternel montrait des anomalies instrumentales depuis six mois. C'était un poste d'importance : les Archives Givrin contiennent des documents pré-Calendrier que la Citadelle surveille attentivement.

Elle avait accepté pour trois ans. Elle en est à neuf.`,
    },
    eveil: {
      titre: 'Les Lignes du Champ',
      texte: `Le premier hiver à Iskral, elle avait effectué son travail standard : cataloguer les archives accessibles, noter les variations dans les lignes du Calendrier locales, rédiger des rapports trimestriels. Normal.

Le deuxième hiver, elle avait commencé à remarquer quelque chose dans les lignes secondaires autour du Champ Gelé. Une perturbation qui ne correspondait à rien dans ses formations. Elle avait cherché des précédents dans les archives — il n'y en avait pas.

Le troisième hiver, elle avait identifié la source de la perturbation.

Les lignes secondaires du Calendrier autour du Champ Gelé étaient en train de se désynchroniser d'un flux central. Ce flux central, elle l'avait remonté dans les données archivées de la Citadelle. Il provenait des ajustements récents du Calendrier Principal — des modifications effectuées à la Citadelle elle-même, dans le cadre d'un programme dont elle n'avait pas connaissance précise mais dont les signatures dans les lignes correspondaient à ce qu'on appelait Drain Préparatoire.

Le Drain Préparatoire était un protocole théorique. Il n'était supposé qu'exister dans des textes de doctrine. Or les lignes montraient quelque chose en cours.`,
    },
    rupture: {
      titre: 'Ce qu'elle n'a pas rapporté',
      texte: `Elle avait rédigé le rapport. Il était dans ses archives personnelles chiffrées, en troisième version maintenant, chacune plus précise que la précédente.

Ce que le rapport disait, dans sa version actuelle : les modifications du Calendrier Principal opérées à la Citadelle depuis cinq ans ont créé une désynchronisation progressive des lignes secondaires dans les zones périphériques. Dans la région de Crysalme, cette désynchronisation affecte le système de maintien thermique du Champ Gelé — un système qui, comme elle l'avait appris dans les archives Givrin pré-Calendrier, n'avait pas été créé par des Fées mais existait avant le Calendrier et avait été intégré à lui. La désynchronisation est en train de dégrader ce système de maintien. D'ici dix à quinze ans au rythme actuel, le Champ commencera à dégeler de façon visible.

Ce qu'elle n'avait pas mis dans le rapport mais savait : si le Champ dégèle, les soldats gelés à l'intérieur pourraient survivre. Et parmi eux se trouvent des témoins d'événements que les Givrins et l'Empire préféraient garder gelés.

Elle n'avait pas rapporté parce qu'elle n'était pas sûre de ce que l'Empire ferait de cette information. Et parce que "pas sûre" était insuffisant pour agir, elle avait attendu d'être sûre. Elle attendait toujours.`,
    },
    maintenant: {
      titre: 'Les Micro-fractures',
      texte: `La gardienne Sylkra (id:53) avait signalé des micro-fractures dans le Champ il y a huit mois. Elle avait été réduite au silence par Keldris (id:57), représentant de la Monarchie. Isvara était au courant des deux faits. Elle n'était pas intervenue.

Ce n'était pas de la lâcheté — c'était un calcul. Si elle intervenait pour soutenir Sylkra, elle révélait son propre accès aux données sur les micro-fractures, et par extension son rapport non transmis. Elle avait fait taire sa propre voix pour protéger une information qu'elle n'avait pas encore décidé de transmettre.

L'archiviste Givrin Thyval (id:55) avait trouvé dans les archives une instruction du défunt Élu Karath sur le dégel. Isvara avait lu ce document — elle avait accès à tout dans ces archives. L'instruction était précise, technique, et entrait exactement en contradiction avec ce que la Monarchie soutenait publiquement : que le Champ n'était pas supposé dégeler.

Elle avait maintenant trois données simultanées qui pointaient vers la même conclusion : quelque chose de majeur allait arriver au Champ Gelé, et plusieurs personnes avaient des pièces partielles du puzzle qu'elles ne partageaient pas entre elles.`,
    },
    objectif: {
      titre: 'La Décision qui approche',
      texte: `Isvara sait que sa fenêtre de décision se referme. Les micro-fractures s'élargissent. Dans deux hivers au plus, elles seront visibles à l'œil nu, et l'Empire enverra une équipe d'inspection. Cette équipe aura les outils pour lire les lignes secondaires. Ils trouveront ce qu'elle a trouvé. Et ils découvriront qu'elle le savait depuis six ans.

Il lui reste deux options propres : rapporter maintenant, avec tout ce que ça implique pour elle et pour la Citadelle. Ou ne pas rapporter et gérer les conséquences quand l'inspection arrivera.

Elle cherche une troisième option. Elle ne l'a pas encore trouvée.

Ce qu'elle ne s'est pas encore dit clairement : la troisième option qu'elle cherche ressemblerait à contacter Aethren (id:54), qu'elle a vu dans les rues d'Iskral à deux reprises et dont elle sait qu'il est Dissident. Il veut dégeler le Champ. Elle a les données pour lui dire comment ça va arriver de toute façon. Les deux informations ensemble changeraient quelque chose.

Elle n'a pas encore franchi cette ligne. Elle y pense.`,
    },
    evenements_narratifs: ['Gel_Eternel'],
    arcs: ['Les_Archives_Gelees'],
    position_dans_arc: `Archiviste impériale Fée à Iskral. Sait depuis six ans que les modifications du Calendrier Principal causent le dégel du Champ Gelé. N'a pas rapporté. A connaissance du document Thyval (instruction de dégel de Karath) et des micro-fractures signalées par Sylkra. Cherche une façon de gérer cette information sans déclencher de crise institutionnelle pour l'Empire.`,
  },

  relations: [
    {
      personnage_id: 53,
      nom: 'Sylkra',
      type: 'non_protégée',
      depuis_ici: `Sylkra avait raison. Isvara le sait. Elle n'a pas défendu Sylkra quand Keldris l'a réduite au silence, et elle vit avec ça. Ce n'est pas de la culpabilité simple — c'est plus compliqué. Si elle avait défendu Sylkra, elle aurait exposé ses propres données. Le calcul était rationnel. Elle ne sait pas si rationnel et juste sont la même chose ici.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'latent',
    },
    {
      personnage_id: 55,
      nom: 'Thyval',
      type: 'porteur_d_information',
      depuis_ici: `Thyval a trouvé quelque chose qu'il ne comprend pas entièrement. L'instruction de Karath pour le dégel est technique — elle requiert une lecture des lignes secondaires pour en saisir les implications. Thyval est archiviste des serments, pas des flux. Isvara est la seule personne à Iskral qui peut comprendre ce document dans sa totalité. Elle ne lui a pas dit qu'elle l'avait lu. Elle attend de savoir ce qu'il va en faire.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'latent',
    },
    {
      personnage_id: 54,
      nom: 'Aethren',
      type: 'contact_potentiel',
      depuis_ici: `Elle l'a croisé deux fois dans les marchés du nord d'Iskral. Un Givrin avec une signature Fée — rare. Elle a vérifié dans les registres de la Citadelle : pas d'enregistrement comme Élu Fée, ce qui signifie qu'il est soit non-déclaré, soit Dissident, soit les deux. Il est d'une famille dont un ancêtre est dans le Champ. Elle sait ce qu'il cherche. Il a besoin d'elle sans le savoir. Elle n'a pas encore décidé si elle a besoin de lui.`,
      arc_commun: 'Les_Archives_Gelees',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Isvara est Spécialiste — son rôle de combat n'est pas offensif. Elle est une lectrice de flux, et en situation de combat, elle utilise sa lecture des probabilités et des lignes élémentaires pour désorganiser l'adversaire et soutenir les alliés. Elle ne choisit pas le combat. Mais si le combat vient, elle a neuf ans d'Iskral dans les bras — des années passées à se préparer à devoir partir vite.`,
    sorts: [
      {
        nom: 'Lecture de Lignes',
        type: 'sort_de_base',
        elements: ['Fée'],
        description_gameplay: `Isvara analyse le flux élémentaire d'une cible ennemie. Pendant 2 tours, elle révèle ses prochaines actions à ses alliés (l'ennemi ciblé ne peut pas feinter ou surprendre). Si la cible utilise un sort, Isvara peut contre-réagir avec un délai de 0 au lieu de 1 tour.`,
        description_lore: `Elle fait ça sur les lignes secondaires depuis neuf ans. Lire un sort ennemi n'est pas fondamentalement différent de lire une anomalie dans les archives — c'est une désynchronisation dans un flux qui devrait être stable.`,
      },
      {
        nom: 'Désynchronisation',
        type: 'sort_situationnel',
        elements: ['Fée'],
        description_gameplay: `Isvara applique une perturbation féerique sur une zone de 3 cases. Les Élus ennemis dans la zone voient leurs cooldowns augmenter de 1 et leurs buffs réduits de 50% pendant 3 tours. Ne fait aucun dégât direct.`,
        description_lore: `Le même mécanisme que ce qu'elle observe se produire dans le Champ Gelé — des lignes secondaires qui se désynchronisent jusqu'à ne plus soutenir correctement les flux principaux. Appliqué à un adversaire, ça ressemble à de la fatigue soudaine.`,
      },
      {
        nom: 'Archive Vivante',
        type: 'sort_situationnel',
        elements: ['Fée'],
        description_gameplay: `Isvara partage un schéma mémorisé avec ses alliés. Tous les alliés dans un rayon de 3 cases gagnent une résistance aux effets de contrôle pour ce tour et le suivant. Si un allié subit un effet de contrôle malgré la résistance, il le subit avec 50% de durée.`,
        description_lore: `Neuf ans d'archives donnent des réponses à des situations qu'on n'a jamais vécues personnellement. Elle n'a pas appris à combattre — elle a appris à reconnaître des patterns.`,
      },
      {
        nom: 'Ligne Secondaire',
        type: 'ultimate',
        elements: ['Fée'],
        description_gameplay: `Isvara révèle les lignes secondaires du terrain. Pendant 3 tours, toutes les interactions élémentaires sur le champ de bataille sont visibles — elle et ses alliés voient les cooldowns ennemis, les buffs cachés, les interactions entre éléments avant qu'elles se déclenchent. Une fois par activation, elle peut interrompre une interaction élémentaire avant qu'elle se produise.`,
        description_lore: `C'est ce qu'elle fait dans les archives. Voir ce que les registres officiels ne montrent pas. Voir le flux sous le flux.`,
      },
      {
        nom: 'Froid du Nord',
        type: 'passif',
        elements: ['Fée', 'Glace'],
        description_gameplay: `Passif acquis. Neuf ans à Iskral ont adapté Isvara au froid. Elle est immunisée aux effets de ralentissement (Glace) et gagne 20% de résistance aux dégâts élémentaires de Glace. En retour, elle perd 10% de résistance aux dégâts de Feu.`,
        description_lore: `Elle n'avait pas prévu de rester neuf ans. Le Corps s'adapte à ce que la volonté n'a pas planifié.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Isvara',
      description: `Fée féminine, 37 ans, 1m58, expression concentrée et légèrement lointaine. Peau blanc-ivoire avec nuance bleutée aux extrémités (adaptation au froid du Nord). Yeux changeants — au moment du portrait : gris froid, comme si elle observait quelque chose d'invisible. Cheveux blancs très fins, légèrement gelés. Uniforme Empire gris-blanc d'archiviste, par-dessus une fourrure Givrine. Fond : extérieur d'Iskral avec le Champ Gelé visible à distance — une plaine blanche avec des silhouettes à l'intérieur. Style concept art Riot Games, tons bleu-blanc-gris.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1400,

  lore_long: `LES MICRO-FRACTURES
Un chapitre de la vie d'Isvara, archiviste impériale à Iskral

—

I.

Isvara avait regardé les micro-fractures toute la matinée.

Elles étaient à soixante mètres du bord du Champ, là où la glace montrait ses premières lignes de tension. Pas visibles à l'œil non formé — il fallait savoir chercher, et savoir ce que ça voulait dire une fois trouvé. Sylkra l'avait signalé il y a huit mois. Keldris l'avait réduite au silence, officiellement parce qu'une gardienne sans formation en lectures de lignes ne pouvait pas interpréter correctement des anomalies thermiques.

Keldris avait raison sur la formation de Sylkra. Sylkra avait raison sur ce qu'elle avait vu.

Isvara avait ses propres instruments — plus précis que ceux de Sylkra, parce qu'elle avait accès aux archives d'équipement de la Citadelle. Les lignes secondaires autour du Champ montraient une désynchronisation qui avait progressé de trois pour cent en huit mois. À ce rythme, dans dix-huit mois les fractures seraient visibles sans instruments.

Elle avait noté cela dans son rapport en version quatre. Version cinq était en cours.

—

II.

Il y avait cent quatre-vingt-sept personnes dans le Champ Gelé. Elle les avait comptées depuis les archives — des listes partielles, des noms récupérés dans des registres donnés que personne n'avait vraiment lus depuis des siècles. La Monarchie Givrine connaissait certains noms. Les familles en connaissaient d'autres. Isvara connaissait le total parce qu'elle avait le temps et les archives.

Cent quatre-vingt-sept Élus. Figés il y a trois cent douze ans. Peut-être vivants à l'intérieur — la doctrine Givrine disait que l'Élu Karath avait utilisé un gel de stase, pas un gel de mort. Les archives ne confirmaient pas avec certitude. Les instructions de Karath pour le dégel — que Thyval avait trouvées dans les serments il y a deux semaines — semblaient indiquer qu'il avait prévu qu'ils survivraient.

Cent quatre-vingt-sept témoins de la guerre de -312.

Cent quatre-vingt-sept personnes qui avaient vu des choses que personne d'autre en vie n'avait vues.

Si le Champ dégelait et qu'ils survivaient, les récits se répandraient avant que l'Empire puisse les cadrer.

—

III.

Elle avait essayé de comprendre pourquoi la Citadelle avait modifié les lignes secondaires d'une façon qui perturbait le maintien thermique du Champ.

La réponse la plus probable qu'elle avait trouvée dans les archives de doctrine : Drain Préparatoire. C'était un protocole théorique — des modifications du Calendrier qui optimisaient les flux pour ce que la doctrine appelait une "redistribution maximale". Elle n'avait jamais vu Drain Préparatoire dans les documents opérationnels. La Citadelle ne l'avait jamais déclaré actif.

Mais les lignes secondaires ne mentaient pas. Les ajustements effectués à la Citadelle correspondaient aux signatures théoriques du Drain Préparatoire. Soit quelqu'un à la Citadelle avait activé ce protocole sans le déclarer, soit les ajustements avaient des effets secondaires que personne n'avait anticipés.

Les deux explications étaient mauvaises. Pour des raisons différentes.

—

IV.

L'homme Givrin qu'elle avait remarqué dans les marchés du nord avait une signature Fée faible mais réelle.

Elle n'avait pas suivi ses déplacements — ce n'était pas son mandat. Mais elle avait consulté les registres de la Citadelle sur les Élus Fée à Crysalme : il n'y figurait pas. Non-déclaré. Soit il évitait le Calendrier, soit il ne savait pas encore ce qu'il était, soit il était Dissident.

Elle avait demandé discrètement à un gardien de confiance de la Monarchie. L'homme s'appelait Aethren. Famille connue d'Iskral — son arrière-grand-père était dans le Champ.

Elle avait fermé ce dossier et n'y avait pas repensé pendant six semaines.

—

V.

Ce matin, après deux heures devant les micro-fractures, elle avait rouvert le dossier.

Pas par sentimentalisme. Par calcul : elle avait des données que personne d'autre ne possédait en totalité. Aethren avait une motivation que personne d'autre ne possédait aussi clairement. Si elle lui disait que le Champ allait dégeler de toute façon — pas dans cent ans, mais dans dix-huit mois au plus — il pourrait décider ce qu'il ferait de cette information. Et ses décisions auraient des conséquences qui se produiraient indépendamment de son rapport à elle.

Ce n'était pas contourner son rapport. C'était créer une dynamique parallèle.

Elle savait que c'était exactement le genre de raisonnement qu'elle avait évité pendant six ans.

Elle rentra vers les archives. Le froid d'Iskral était à moins vingt ce matin. Les micro-fractures avaient progressé de zéro virgule deux pour cent depuis son dernier relevé mensuel.

Elle avait de la place pour une version cinq du rapport. Elle avait aussi le nom d'un homme dans les marchés du nord.

Pour l'instant, elle allait rédiger la version cinq.`.trim(),
};

export default lore;
