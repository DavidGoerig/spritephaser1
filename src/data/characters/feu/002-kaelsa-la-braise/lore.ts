// ============================================================
//  CENDRIX — Lore complet (étalon de qualité C2)
//  id: 2 | Feu | Pyriens | Empire | Enchanteur-Capteur
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique (témoin enfant), Purge des Ordres Soigneurs (agent)
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 2,
  nom: 'Cendrix',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',

  // ── APPARENCE ─────────────────────────────────────────────
  apparence: {
    taille_corpulence: `Grande pour une Pyrienne — un mètre soixante-dix-huit, épaules larges, posture droite de quelqu'un formé à maintenir une présence sans occuper trop d'espace. Sa masse est difficile à lire : elle porte ses vêtements d'une façon qui dissimule à la fois son gabarit et son statut. Quand elle entre dans une pièce, les gens remarquent rarement à quel point elle est grande avant qu'elle se soit rapprochée.`,

    peau: `Gris ardoise — légèrement plus clair que la plupart des Pyriens de Khar-Vurn, teinte des familles qui vivaient dans les districts supérieurs de la cité, moins exposées à la chaleur géothermique brute. Les fissures élémentaires sont fines, rougeâtres, quasi-invisibles à distance : elle les a appris à contrôler assez tôt pour qu'elles ne s'expriment qu'en effort maximal. Elle les veille. Une signature visible est une information donnée gratuitement.`,

    yeux: `Ambre foncé avec une qualité qui met mal à l'aise — pas de froideur évidente, mais une attention constante, calibrée. Les gens qui parlent à Cendrix ont souvent l'impression d'être lus plutôt qu'écoutés. Sous effort de canalisation intense, ses pupilles se dilatent jusqu'à occuper presque tout l'iris, un phénomène Pyrien ordinaire qui sur elle prend une dimension d'autre chose — comme si la personne en face s'agrandissait aussi, temporairement, dans son champ de vision.`,

    cheveux: `Brun-charbon, épais, légèrement plus courts que la mode de Khar-Vurn pour les femmes. Noués bas avec une cordelette de tissu ignifuge gris — fonctionnel, sans ornement. Elle n'a pas de perles, pas de marqueurs de faction, pas de signes d'appartenance visible. C'est un choix. Les Capteurs qui s'affichent sont des Capteurs moins efficaces.`,

    vetements: `Tenue civile de bonne qualité — cuir brun-sombre sur tissu beige-gris, coupe neutre, ni ouvrière ni administrative. En dessous, une armure thermique légère (plaquettes de métal minces intégrées dans le tissu), standard de l'équipement impérial de terrain mais invisible à l'œil. Son insigne de Capteur est dans sa poche intérieure, pas au col. Elle le sort quand c'est nécessaire. Dans les quartiers qui ne l'aiment pas, ce n'est presque jamais nécessaire.`,

    signes_particuliers: `Un médaillon du Calendrier des Fées porté contre la peau, jamais visible. Pas par discrétion tactique — par conviction. Elle croit au Voile d'Équité depuis suffisamment longtemps pour que le geste soit sincère plutôt qu'ostentatoire. Dans son sac, un carnet de taille paume recouvert de cuir noir, aux pages couvertes d'une écriture serrée dans un code qu'elle a développé seule à dix-sept ans. Personne d'autre ne l'a jamais lu.`,
  },

  // ── PSYCHOLOGIE ───────────────────────────────────────────
  psychologie: {
    dominante: `Cendrix lit les gens. C'est son outil principal et son mode naturel de présence au monde. Dans une conversation, elle recueille simultanément le contenu dit et les dizaines d'informations que la personne ne dit pas — tension dans les épaules, micro-décalage entre ce qu'on affirme et le moment où on le formule, les sujets qu'on évite avec juste un peu trop de naturel. Elle n'est pas empathique dans le sens courant du terme : elle ne ressent pas ce que l'autre ressent. Elle le modélise. La différence est fine mais réelle.`,

    contradictions: `Elle croit sincèrement au Voile d'Équité. Et dans son carnet chiffré, elle a écrit trois fois, sous différentes formulations, la même phrase : "Si le Voile est juste, le décret de la Purge des Soigneurs est une erreur d'application, pas un symptôme de structure." Elle l'a écrit comme une conclusion. Mais elle continue de l'écrire, ce qui signifie que la conclusion ne tient pas encore assez pour qu'elle cesse de l'argumenter.`,

    peur: `Que sa conviction soit un don, pas une découverte. Qu'elle croie au Voile d'Équité parce qu'on lui en a fourni les preuves sélectives à l'âge où les convictions se forment sans résistance — et que les preuves à l'encontre lui soient simplement moins accessibles, non parce qu'elles n'existent pas, mais parce qu'on l'a placée dans un environnement où elles n'arrivent pas.`,

    desir: `Trouver Brasia. Pas juste l'arrêter — lui parler. Elle sait que ça ne devrait pas être une priorité différente de ses autres missions. Elle sait que ça l'est quand même. Si elle pouvait montrer à Brasia les données sur les zones sans Élus stabilisateurs, les statistiques de mortalité régionale avant et après le Voile, la façon dont le chaos non régulé tue plus que le décret qu'elle a refusé — si elle pouvait faire ça, et si Brasia maintenait quand même sa position, alors Cendrix saurait avec certitude que l'une d'elles a accès à des informations que l'autre n'a pas. Et elle voudrait savoir lesquelles.`,

    rapport_au_pouvoir: `Son Feu n'est pas de la force — c'est de la détection. Elle peut sentir les signatures élémentaires d'autres Élus : une aptitude que le Calendrier des Fées a qualifiée d'anomalie utile lors de son enregistrement à quinze ans. La Citadelle en a fait son outil principal. Elle localise, elle identifie, elle signale. Elle ne brûle pas. Le fait que ses collègues Capteurs soient souvent des Élus Feu offensifs n'est pas un hasard — la chaleur comme arme est plus simple à comprendre que la chaleur comme instrument de mesure. Cendrix préfère la mesure.`,
  },

  // ── HISTOIRE ──────────────────────────────────────────────
  histoire: {
    origine: {
      titre: `Ce que le conduit a protégé`,
      texte: `Cendrix avait huit ans le jour de la Rupture Thermique. Elle vivait avec sa mère dans le Septième District de Forge — ni le quartier ouvrier bruyant du Parti du Feu, ni le district administratif du Parti de l'Acier, mais la zone des artisans de précision : horlogers thermiques, calibreurs, fabricants d'instruments de mesure. Sa mère faisait des membranes de détection pour les forges — des feuilles de métal si minces qu'elles changent de couleur selon la température exacte. Un travail de précision totale.

Elle était dans l'atelier de sa mère quand la surtension a commencé. Le bruit avait précédé la chaleur — un son comme un métal qui se brise de l'intérieur, amplifié par tous les conduits de géothermie de la ville simultanément. Sa mère avait eu un réflexe de calibreuse : elle avait regardé les membranes de détection accrochées aux murs, vu la couleur impossible qu'elles prenaient, et avait dit : "Sous le conduit d'acier. Maintenant."

Le conduit d'acier était la structure de transport de chaleur qui traversait l'atelier — trop épaisse pour que la surtension la traverse, à condition d'être dessous et non dedans. Sa mère le savait parce qu'elle avait passé sa vie à mesurer la conductivité thermique des métaux.

Sa mère était allée chercher d'autres personnes dans le couloir.

Cendrix était restée sous le conduit.

Elle avait entendu tout ce qui s'était passé ensuite sans en voir la couleur. Le silence qui avait suivi durait encore dans certaines parties d'elle, vingt-neuf ans plus tard.

Ce qu'elle avait appris de ce jour : la structure protège ceux qui la comprennent. L'absence de structure tue ceux qui ne comprennent pas qu'elle leur manque.`,
    },

    eveil: {
      titre: `L'anomalie du Calendrier`,
      texte: `L'aptitude s'était manifestée avant qu'elle comprenne ce qu'elle avait. À treize ans, elle savait déjà où se trouvaient les autres Élus dans un rayon de sa rue — pas visuellement, pas par un sens identifiable, mais avec la certitude du corps qui reconnaît une température familière. Elle avait cru d'abord que tout le monde avait ça.

À quinze ans, lors d'un marché de quartier, elle avait senti une signature qu'elle ne reconnaissait pas et qu'elle ne pouvait pas placer parmi les Élus enregistrés du district. L'incongruité l'avait intriguée. Elle avait suivi la sensation jusqu'à un entrepôt secondaire. À l'intérieur : une femme d'une quarantaine d'années, Élue Eau, non enregistrée, qui soignait deux Pyriens blessés dans une semi-obscurité.

Elle n'avait rien dit. Elle était repartie. Pendant trois jours, elle avait essayé de décider ce que ça signifiait.

Le quatrième jour, elle s'était rendue à l'administration du Calendrier local pour signaler une signature non enregistrée, catégorie "autre élément". Elle avait fourni la localisation et la description de l'aptitude. L'officier l'avait regardée avec une attention différente de celle que les adultes accordaient habituellement aux adolescentes. Il avait pris des notes sur sa propre aptitude — pas juste sur le signalement.

Le Calendrier des Fées avait envoyé une évaluatrice six semaines plus tard. Pas pour la femme Eau, qui avait disparu entre-temps. Pour Cendrix.

L'évaluatrice avait dit : "Vous sentez les Élus. Pas juste les Feu — tous les éléments, dans un rayon variable selon votre niveau d'attention et votre état de fatigue. C'est rare. L'Empire peut l'utiliser."

L'Empire avait besoin d'elle plus qu'elle n'avait besoin d'eux. C'était une position de force. Elle l'avait appris à quinze ans.`,
    },

    rupture: {
      titre: `La Citadelle et ce qu'elle enseigne`,
      texte: `La formation des Capteurs à la Citadelle du Voile prenait cinq ans. Cendrix en avait fait sept — deux ans supplémentaires de spécialisation en cartographie des signatures et en protocoles d'identification à distance. Elle y était arrivée à seize ans. Elle en était repartie à vingt-trois avec le grade de Capteur de terrain et une conviction qu'elle avait construite pièce par pièce.

Ce n'était pas une conviction imposée. Elle insistait là-dessus dans son carnet, parfois — comme si quelqu'un d'autre lisait et qu'elle voulait être comprise correctement. Elle avait rencontré à la Citadelle des gens qui avaient essayé de lui vendre le Voile d'Équité comme idéologie pure, et elle leur avait résisté exactement parce que l'idéologie pure ne convainc que les gens qui ont déjà décidé. Ce qui l'avait convaincue, c'étaient les données.

Le Commandant Varak — son superviseur de troisième année, un Pyrien de Khar-Vurn lui-même, fils du Sixième District — lui avait montré les cartes de mortalité régionale sur cent ans. Avant le Voile d'Équité : des zones entières sans Élus Soigneurs pendant des décennies, des épidémies non traitées, des régions qui mouraient lentement parce qu'aucune économie de marché libre n'avait jamais eu de raison d'y envoyer des guérisseurs. Après le Voile : redistribution forcée, résistance locale, mais baisse effective de la mortalité évitable dans soixante-douze pour cent des zones concernées.

"L'Empire n'est pas juste," avait dit Varak. "Il est moins mauvais que l'alternative non organisée. C'est différent, mais c'est suffisant pour justifier de travailler dedans."

C'était une formulation honnête. Elle l'avait adoptée parce qu'elle était honnête, pas parce qu'elle était satisfaisante.

L'endroit où ça avait craqué, pour la première fois : à vingt et un ans, lors d'une mission de cartographie à Thalassyr, elle avait croisé une archive de la Confédération qui contenait des données sur les zones avec Élus non enregistrés — des données que l'Empire n'avait pas. Ces zones avaient des taux de mortalité comparables, parfois légèrement inférieurs, aux zones avec Élus enregistrés impériaux. Elle avait mis ça dans un rapport. Le rapport avait été requalifié "données incomplètes, sources non validées."

Elle avait gardé une copie dans son carnet.`,
    },

    maintenant: {
      titre: `District Quatorze, archives de l'Ordre`,
      texte: `Les archives des Ordres Soigneurs de Khar-Vurn avaient été transférées à l'administration impériale lors de la Purge. En théorie, elles étaient accessibles. En pratique, elles étaient indexées d'une façon qui rendait la recherche par praticien presque impossible — les dossiers étaient classés par patient, pas par soignant. Quelqu'un avait fait ça délibérément. Cendrix ne savait pas si c'était pour protéger les praticiens ou pour que les recherches soient complexes à mener. Les deux n'étaient pas mutuellement exclusifs.

Elle avait trouvé quand même. Elle cherchait des schémas de traitement — des techniques spécifiques documentées dans les dossiers patients, des formulations qui ressemblaient à quelqu'un en particulier. La "technique thermique de consolidation tissulaire" apparaissait dans quarante-trois dossiers entre les années quarante-sept et cinquante-deux, toujours avec les mêmes caractéristiques : "chaleur précise non brûlante, application directe par contact palmaire, durée brève, résultats disproportionnés au protocole standard." Le document de classification impérial appelait ça le protocole BRS-7. Elle savait pour qui le B, le R et le S correspondaient.

Ce soir, un contact dans les réseaux du Parti du Feu — un Pyrien qui acceptait de l'argent sans poser de questions sur la source — lui avait transmis une description. Une femme avec des perles de pierre cendrée dans les cheveux, vue dans le sous-sol du Dix-Septième Bloc du District Quatorze, il y a trois jours. Le Parti du Feu avait des raisons de surveiller ce bloc — c'était une zone de travail informel, en dehors des quotas officiels. Nessyr, son contact, l'avait mentionné en passant, pas comme une information stratégique.

Elle avait regardé la description longtemps.

Perles de pierre cendrée. Elle avait vu ça une fois — dans un rapport d'identification de Dissidente du Voile, cinq ans auparavant, lors d'une arrestation à Thalassyr. Chaque perle représentait un lieu traversé. Si Brasia avait encore ces perles après onze ans de fuite, c'était soit de la sentimentalité, soit une façon de ne pas perdre sa propre cartographie. Les deux étaient possibles.

Elle avait décidé de vérifier l'adresse elle-même. Pas avec l'unité — seule, en civil, la nuit suivante. Elle avait dit à l'unité qu'elle avait une autre source à contacter. Ce n'était pas entièrement faux.`,
    },

    objectif: {
      titre: `La conversation qu'elle n'a pas encore eue`,
      texte: `Ce que Cendrix veut de Brasia n'est pas une arrestation. Ce qu'elle veut est plus précis et moins avouable : elle veut que Brasia lui montre son erreur ou confirme la sienne.

Elle a les données qui valident le Voile d'Équité dans soixante-douze pour cent des zones. Elle a les données de Thalassyr qui posent une question sur les vingt-huit pour cent restants. Elle n'a pas encore décidé ce que ces vingt-huit pour cent signifient — si c'est une erreur d'application corrigeable ou un symptôme de structure fondamentale. Brasia a travaillé onze ans dans les zones sans couverture impériale. Elle a des données que Cendrix n'a pas.

Ce n'est pas une pensée qu'elle peut formuler dans un rapport. Elle le sait. Elle le formule dans son carnet, en code, puis referme le carnet.

L'arrestation serait plus simple. Elle aurait aussi moins de valeur. Brasia en prison est une variable neutralisée. Brasia avec qui elle aurait pu parler est une variable qui aurait peut-être changé quelque chose — chez l'une d'elles. Elle ne sait pas encore laquelle.

En attendant : les archives, le contact, l'adresse du District Quatorze. Elle travaille avec ce qu'elle a.`,
    },

    evenements_narratifs: ['Rupture_Thermique', 'Saturation_des_Elus'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Agent impérial actif à Khar-Vurn. Témoin direct de la Rupture Thermique (survie dans l'atelier de sa mère). Profiteuse indirecte de la Purge des Ordres Soigneurs (le décret qu'elle a appliqué). Actuellement : responsable d'une unité de Capteurs chargée des Élus non enregistrés de Khar-Vurn. Cherche Brasia — officiellement comme cible, officieusement comme interlocutrice.`,
  },

  // ── RELATIONS ─────────────────────────────────────────────
  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'ennemi',
      depuis_ici: `Elle ne veut pas juste arrêter Brasia. Elle sait que c'est ça qui devrait se passer — c'est la procédure, c'est logique, c'est efficace. Mais depuis que les dossiers des Ordres Soigneurs ont commencé à dessiner le contour de qui Brasia est vraiment — pas juste une fugitive, mais quelqu'un qui a construit quelque chose de fonctionnel dans les marges — une question s'est posée qu'elle ne peut pas effacer. Brasia a des données. Des données sur les zones sans couverture impériale. Si ces données contredisent ce que Cendrix a dans ses propres rapports, elle veut savoir.`,
      depuis_la: `Cendrix vérifie deux fois les adresses secondaires avant d'envoyer ses agents. Elle dit que c'est du professionnalisme. C'est peut-être vrai.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 66,
      nom: 'Varak',
      type: 'mentor',
      depuis_ici: `Son superviseur à la Citadelle et maintenant son commandant sur la mission Khar-Vurn. Il a été le premier adulte de la Citadelle à lui parler honnêtement — "l'Empire est moins mauvais que l'alternative non organisée." Elle lui fait confiance précisément parce qu'il n'a jamais prétendu que c'était plus que ça. Ce qu'elle ne lui dit pas : les données de Thalassyr. Le rapport requalifié. Il n'était pas responsable de la requalification, mais il n'a pas dit non plus que le rapport aurait dû être maintenu. Elle n'a jamais demandé pourquoi.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 70,
      nom: 'Nessyr',
      type: 'contact_nécessaire',
      depuis_ici: `Un informateur dans les réseaux du Parti du Feu qui vend des informations pour de l'argent, sans idéologie apparente. Cendrix le paye correctement et ne lui pose pas de questions sur ses autres clients. Il lui fournit des observations de terrain que ses propres agents ne pourraient pas obtenir sans se signaler. Il ne sait pas qu'elle est une Capteur — elle s'est présentée comme une administratrice impériale intéressée par la gestion des ressources humaines non déclarées. C'est suffisamment proche de la vérité pour tenir.`,
      statut: 'actif',
    },
  ],

  // ── COMBAT ────────────────────────────────────────────────
  combat: {
    philosophie: `Cendrix ne combat pas comme une Élue Feu. Elle combine l'information, la détection et une chaleur ciblée pour contrôler l'espace et réduire les options de sa cible sans destruction directe. Elle préfère la neutralisation à l'élimination — une cible neutralisée peut parler. Elle n'est pas non-violente : elle sait que certaines situations nécessitent plus que de la précision. Mais elle aborde ça comme elle aborde les données : avec méthode, sans enthousiasme.`,

    sorts: [
      {
        nom: 'Tison Traceur',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Lance une flamme-sonde sur une cible. Révèle son élément et sa signature précise. Pendant 4 tours, Cendrix peut sentir la position de cette cible même hors de ligne de vue, à travers les murs. Si la cible est un Élu Feu non enregistré, la durée est doublée et une alerte visuelle est envoyée à ses alliés proches.`,
        description_lore: `La formalisation tactique de l'aptitude qu'elle a depuis l'enfance — sentir les signatures élémentaires. La technique oblige l'aptitude passive à devenir active et précise, en ciblant une signature spécifique pour en extraire les détails. Elle l'a développée pendant sa formation, avec l'aide d'un instructeur de détection qui ne comprenait pas tout à fait ce qu'il lui enseignait mais lui a fourni le cadre technique pour l'articuler.`,
      },
      {
        nom: 'Réseau de Cendres',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Tisse un filet thermique invisible sur une zone de 4×4. Tout Élu qui entre dans la zone active un signal discret que seule Cendrix perçoit, révélant son élément et sa position exacte. Dure 3 tours. Les ennemis peuvent traverser la zone sans effet mécanique — ils ne savent pas qu'ils ont été détectés.`,
        description_lore: `Conçue pour des opérations en milieu urbain dense — les couloirs thermiques de Khar-Vurn, les marchés couverts, les zones où la signature d'un Élu se noie dans la chaleur ambiante. Le réseau de cendres est imperceptible, non parce que la chaleur n'est pas réelle, mais parce qu'elle est calibrée exactement à la température ambiante. Elle a mis dix-huit mois à trouver ce calibrage précis. Elle recommence à chaque cité où elle opère.`,
      },
      {
        nom: 'Marque du Voile',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Marque un Élu cible avec la signature du Calendrier impérial. Pendant le combat, cette cible est "connue" : Cendrix la voit à travers les obstacles et peut la cibler indirectement. Si la cible essaie de fuir hors de la zone de combat, la marque lui inflige des dégâts de brûlure et signale sa direction de fuite.`,
        description_lore: `Le geste que la Citadelle considère comme son outil principal — identifier et marquer les non-enregistrés pour le Registre du Calendrier. Pour Cendrix, c'est plus complexe : marquer quelqu'un avec la signature du Voile, c'est le rendre visible au système qui décide de son sort. Elle le fait. Elle fait attention à qui elle marque en premier.`,
      },
      {
        nom: 'Éclat d'Interrogatoire',
        type: 'sort_actif',
        elements: ['Feu'],
        description_gameplay: `Onde de chaleur psychologique concentrée sur une cible unique. Aucun dommage physique. La cible est désorientée pendant 2 tours (précision réduite, capacité de fuite diminuée). Si la cible est déjà marquée par Marque du Voile, elle est également contrainte de révéler ses alliés proches — leurs positions s'affichent sur la grille pour Cendrix.`,
        description_lore: `Elle ne l'utilise pas souvent. Ce n'est pas de la compassion — c'est de l'efficacité. La chaleur déstabilisante est moins précise que la conversation pour extraire de l'information, et moins permanente. Elle préfère que les gens parlent parce qu'ils ont conclu que parler était leur meilleure option. Ce n'est pas toujours possible. Quand ce n'est pas possible, l'Éclat est là.`,
      },
      {
        nom: 'Instinct du Calendrier',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura permanente. Cendrix perçoit automatiquement la présence des Élus Feu non enregistrés dans un rayon de 4 cases — ils apparaissent en surbrillance sur sa grille de vision. Les Élus Feu enregistrés sont visibles comme des points de chaleur ordinaires. Les Élus d'autres éléments non enregistrés apparaissent comme une perturbation thermique légère — localisable mais pas identifiable sans Tison Traceur.`,
        description_lore: `L'aptitude qu'elle a depuis l'enfance, formalisée par la Citadelle. Elle ne peut pas la désactiver. Dans une ville comme Khar-Vurn, où les Élus Feu non enregistrés se cachent dans la chaleur ambiante des forges et des conduits géothermiques, l'aptitude devient un bruit constant — des perturbations partout, des signatures qui se fondent et se distinguent selon la distance et l'attention. Elle a appris à gérer ça comme on apprend à dormir à côté d'un fleuve. Le silence, maintenant, l'inquiéterait plus que le bruit.`,
        image_prompt: `Cendrix, Pyrienne grande et silencieuse, en civil brun-gris, cheveux brun-charbon noués bas, yeux ambre avec pupilles légèrement dilatées. Debout dans une ruelle de Khar-Vurn, basalte noir, tuyaux de chaleur en arrière-plan. Autour d'elle, une fine carte thermique visible — des fils d'une chaleur orangée très discrète qui irradient vers plusieurs directions, chacun représentant une signature élémentaire qu'elle perçoit. Elle regarde dans une direction précise. Concentration absolue, aucune tension apparente. Nuit. Éclairage orange depuis les conduits géothermiques. Style concept art Riot Games, palette sombre avec accents chauds discrets, rendu détaillé des textures urbaines de Khar-Vurn.`,
      },
    ],
  },

  // ── PROMPTS IMAGES ─────────────────────────────────────────
  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Cendrix',
      description: `Cendrix, femme Pyrienne, grande (1m78), 37 ans, peau gris ardoise lisse avec de fines fissures rougeâtres presque invisibles sur les mains, cheveux brun-charbon épais noués bas avec une cordelette grise, yeux ambre foncé à l'attention froide et précise. Expression neutre, posture droite sans rigidité. Vêtement civil brun-sombre de bonne qualité, discret. Autour du cou, rien de visible — le médaillon est contre la peau. La poche intérieure gauche a un léger renflement. Fond flou — architecture de Khar-Vurn, tuyaux et basalte. Style Riot Games concept art, éclairage directionnel orange-froid, palette sombre et neutre avec accents chauds très discrets.`,
      generated_path: undefined,
    },
    {
      type: 'lore_scene',
      titre: 'Les archives des Ordres — dossiers de la Purge',
      description: `Cendrix seule dans une salle d'archives faiblement éclairée — rayons de métal couverts de dossiers, lumière orange du géothermique de Khar-Vurn filtrant par une grille haute. Elle est debout devant une table, penchée vers un dossier ouvert. Sa main droite tient une page, sa main gauche est posée à plat sur la table. Légère distorsion thermique visible dans l'air autour de sa main droite — la chaleur de détection, presque imperceptible. Son expression est concentrée, pas froide. Style concept art Riot Games, palette sombre avec éclairage orange dirigé sur les documents, atmosphère d'une bibliothèque souterraine de pierre noire.`,
      generated_path: undefined,
    },
    {
      type: 'action_signature',
      titre: 'Réseau de Cendres — la ville lisible',
      description: `Cendrix debout au centre d'une intersection de Khar-Vurn la nuit. Ses deux mains légèrement écartées, paumes vers le bas. Depuis ses paumes, des fils de chaleur très fins — presque des fils de lumière orange-rougeâtre — se déploient dans plusieurs directions, invisibles aux passants mais clairement visibles pour le spectateur. Ces fils forment un réseau de détection sur le sol et les murs environnants. Au loin dans la ruelle, une silhouette — une source de chaleur distincte que le réseau a déjà localisée. Elle la voit. La silhouette ne sait pas. Style concept art intense, Riot Games, palette nocturne de Khar-Vurn avec filets de lumière orange fine sur fond noir.`,
      generated_path: undefined,
    },
  ],

  // ── LORE LONG — CHAPITRE DE ROMAN ─────────────────────────
  // ~2100 mots
  mot_count_cible: 2000,

  lore_long: `
CE QUE LE CONDUIT A PROTÉGÉ
Un chapitre de la vie de Cendrix, Capteur impérial (en mission à Khar-Vurn)

—

I.

Les dossiers des Ordres Soigneurs de Khar-Vurn avaient été indexés par patient.

Cendrix avait mis deux heures à comprendre pourquoi ça rendait la recherche difficile — non par accident, mais parce que quelqu'un avait décidé que ce serait l'ordre logique. Elle avait noté ça dans son carnet, pas encore en code, juste comme observation : *indexation par patient. Empêche la reconstitution d'un profil de praticien. Décision délibérée ou standard administratif ?* Elle avait laissé la question ouverte. Les deux hypothèses avaient des implications différentes sur qui méritait d'être tenu responsable de la décision.

La salle d'archives était froide pour Khar-Vurn — les dossiers papier se dégradaient à chaleur trop élevée, alors on avait isolé thermiquement cette aile de l'administration. Un silence insolite, dans une cité dont les murs ronflaient en permanence avec le géothermique. Elle avait posé sa veste sur le dossier de la chaise et travaillé en manches longues, ce qui lui était arrivé rarement depuis son départ de la Citadelle.

Elle cherchait un schéma. Pas un nom — le nom était dans le registre des fugitives depuis onze ans, ça ne l'avancerait pas. Elle cherchait une empreinte clinique : des formulations répétées, des techniques documentées d'une façon trop précise pour être anonymes. Elle avait trouvé le premier dossier correspondant après quarante minutes. "Chaleur précise non brûlante, application directe par contact palmaire, durée brève, résultats disproportionnés au protocole standard." Elle avait posé le dossier et n'y avait pas immédiatement repensé — elle l'avait laissé de côté pour continuer le tri, vérifier si la formulation était isolée ou répétée.

Elle était répétée. Quarante-trois fois sur les années concernées, dans des dossiers de patients différents, dans des quartiers différents.

Elle avait reposé le dernier dossier et regardé l'ensemble.

Le protocole BRS-7. Elle connaissait le titre — la classification impériale l'avait rendu accessible à son niveau dans les archives médicales de la Citadelle, comme référence technique, sans praticien assigné. Maintenant elle avait le praticien. Maintenant elle avait aussi l'étendue : quarante-trois cas, dont plusieurs dans des circonstances qui auraient dû être impossibles selon les protocoles de l'Ordre. Des soins en urgence absolue. Des patients non enregistrés auxquels l'Ordre n'aurait pas dû accorder de ressources prioritaires selon le décret de la Purge.

Elle avait regardé les dates. La plupart des dossiers d'urgence sur non-enregistrés dataient d'avant le décret — c'était normal, attendu. Mais sept d'entre eux venaient des jours immédiatement après l'entrée en vigueur du décret. Sept cas de soins sur non-enregistrés après que c'était devenu une infraction.

Elle avait fermé le dossier.

Dehors, dans les couloirs de l'administration, les Capteurs de son unité attendaient ses instructions. Elle leur avait dit qu'elle avait besoin d'une heure de plus. Elle en était à trois.

—

II.

Elle avait huit ans le jour de la Rupture Thermique.

Le bruit avait précédé la chaleur. Elle se souvenait de ça avec une précision qui l'avait surprise, des années plus tard, quand elle avait lu des récits de survivants et constaté qu'eux aussi décrivaient le son en premier — un métal qui cède de l'intérieur, amplifié par les conduits, répercuté dans tous les bâtiments simultanément. Une façon de savoir, avant de voir, que quelque chose de fondamental avait changé dans l'infrastructure de la ville.

Sa mère avait regardé les membranes de détection accrochées aux murs de l'atelier. Elle en fabriquait depuis vingt ans — des feuilles de métal si fines qu'elles changeaient de couleur à chaque variation de un degré. Cendrix la regardait les fabriquer depuis qu'elle était assez grande pour rester debout sans aide. Elle comprenait ce qu'elles disaient, les couleurs. Elle avait vu la couleur impossible qu'elles prenaient ce matin-là.

"Sous le conduit d'acier. Maintenant."

Elle n'avait pas demandé pourquoi. La façon dont sa mère avait dit ça ne laissait pas de place pour une question. Elle était allée sous le conduit d'acier — la grosse artère de transport de chaleur géothermique qui traversait l'atelier en hauteur, reliée aux murs par des brides de métal épais. Elle s'était assise avec le dos contre la paroi froide du mur et les brides au-dessus de la tête et elle avait attendu.

Sa mère était sortie dans le couloir pour trouver d'autres personnes.

Ce qui s'était passé ensuite, Cendrix ne le savait que par reconstruction : la surtension avait duré environ quarante secondes. Pendant ces quarante secondes, la chaleur interne des conduits mal régulés avait atteint des températures auxquelles le basalte ordinaire vitrifiait. Le Quatrième District avait reçu le choc thermique le plus fort parce que c'était là que se trouvait le nœud de distribution principal. Le Septième District où elle vivait avait reçu un choc secondaire — moins fort, mais suffisant pour détruire tout ce qui n'était pas protégé par une masse thermique importante.

Le conduit d'acier était une masse thermique importante. Sa mère l'avait su parce qu'elle avait passé sa vie à mesurer la conductivité des métaux.

Elle avait attendu sous le conduit pendant ce qui lui avait semblé une heure. C'était peut-être vingt minutes. Quand elle était sortie, l'atelier n'existait plus exactement — les murs tenaient encore mais les membranes de détection avaient fondu en filaments brillants sur les crochets, et la porte était coincée dans son cadre légèrement tordu. Elle avait entendu des gens dans le couloir. Pas sa mère.

Elle avait mis trois jours pour retrouver sa mère — dans un camp médical d'urgence au-delà du Dixième District, vivante, avec des brûlures sur les avant-bras qu'elle avait gardées toute sa vie. Elle avait été en train d'aider quelqu'un à se relever dans le couloir quand la deuxième vague avait traversé l'immeuble. Quelqu'un avait survécu à cause d'elle. Sa mère avait survécu aussi. C'était déjà une structure qui avait fonctionné.

Ce qu'elle avait compris ce jour-là, et qu'elle avait reformulé différemment à chaque âge depuis : si tu comprends la structure, tu peux trouver ce qu'elle protège. Si tu ne la comprends pas, tu ne peux pas savoir ce qui te manque.

—

III.

Elle avait rencontré Brasia à l'Académie, lors de sa deuxième année de formation. Pas à la formation des Capteurs — à la cantine, un soir. Une femme avec un rapport de taux de guérison comparés et une façon de lire les documents comme si elle cherchait à attraper quelque chose qui s'y cachait.

Elle se souvenait bien de cette conversation. Plus précisément qu'elle ne se souvenait de la plupart des conversations de cette période. Elle ne s'était jamais demandé pourquoi — c'était simple, elle s'en rendait compte maintenant : Brasia était la première personne à qui elle avait parlé de politique comme si les deux s'intéressaient aux mêmes faits et arrivaient à des conclusions différentes, pas comme si l'une avait des faits et l'autre des sentiments.

"Et si la cartographie révèle que certains besoins ne sont pas stratégiquement rentables à satisfaire ?"

Elle avait répondu que la politique devait alors décider si elle acceptait cette conséquence. C'était la réponse juste selon le cadre analytique qu'on lui enseignait. Brasia avait dit que c'était une réponse d'analyste. Cendrix avait dit qu'elle était analyste. Brasia avait répondu qu'elle, elle était praticienne. La différence : toi tu identifies les problèmes au niveau du système, moi je les gère au niveau de la personne en face de moi. Nos métiers ne sont pas en désaccord. Sauf le jour où le système décide que la personne en face de moi n'a pas droit aux soins.

Elle n'avait pas eu de réponse à ça ce soir-là.

Elle n'avait toujours pas de réponse complète. Elle avait des arguments — les soixante-douze pour cent de zones avec amélioration mesurable, la mortalité évitable réduite, la stabilisation des régions sans accès historique. Ce n'étaient pas des mensonges. Mais une fois qu'on posait la question de Brasia — comment le système gère-t-il la personne spécifique en face de moi — les données agrégées devenaient une réponse à une autre question.

Elle avait gardé ça dans son carnet.

—

IV.

Le contact était arrivé en fin de journée, par le réseau habituel — un message laissé dans un endroit convenu, via Nessyr, l'informateur du Parti du Feu qui vendait des informations sans demander pourquoi on les voulait. Brève. "Femme, perles de pierre cendrée, cheveux gris-fumée, petite, porte une trousse de soin. Vue dans les sous-sols du Dix-Septième Bloc, District Quatorze. Il y a trois jours."

Trois jours. C'était récent — suffisamment pour que l'information soit encore valide, si le schéma de déplacement était régulier. Et les déplacements des Élus médicaux qui maintiennent un réseau de soins clandestin avaient tendance à être réguliers, parce que les patients étaient réguliers. On ne changeait pas d'adresse tous les deux jours quand on avait des fractures ouvertes à surveiller.

Elle avait regardé l'information longtemps.

Elle aurait dû envoyer deux membres de l'unité avec ordre d'identification et arrestation provisoire si confirmation. C'était le protocole. C'était efficace. C'était ce que Varak aurait approuvé.

Elle avait dit à l'unité qu'elle avait une autre source à contacter dans le District Onze. Elle irait seule, en civil, la nuit suivante. Ce n'était pas entièrement faux — elle avait effectivement une source à contacter dans le District Onze, qu'elle pouvait contacter la nuit d'après sans impact opérationnel.

Elle avait rangé l'information dans sa poche et repris les dossiers.

Pourquoi seule. Elle l'avait noté dans son carnet ce soir, en code : *Pourquoi seule.* Trois mots, sans réponse après. Elle avait des hypothèses — elle voulait évaluer la situation elle-même avant d'engager l'unité, réduire le risque d'escalade inutile, confirmer l'identification avant une arrestation qui serait difficile à annuler. Toutes des raisons valables.

Elle avait refermé le carnet. La nuit de Khar-Vurn ronflait dans les conduits.

—

V.

Ce qu'elle avait écrit dans le carnet, ensuite — après les archives, après le message, après avoir soufflé les bougies de sa chambre dans le relais de l'administration impériale où son unité logeait :

*BRS-7. 43 cas. 7 après le décret. Elle savait ce qu'elle faisait.*

Pause. Elle avait réécrit la ligne suivante deux fois.

*Si Brasia a tort, je peux lui montrer les données. Elle est assez rigoureuse pour changer d'avis si les données sont meilleures que les siennes. C'est ce que j'aurais fait à sa place.*

Nouvelle pause.

*Si Brasia a raison—*

Elle n'avait pas fini la phrase.

Elle ne finissait jamais ces phrases-là dans son carnet. Pas par peur de les écrire — par quelque chose de plus proche de l'exactitude. Une phrase non terminée représentait honnêtement l'état de sa réflexion sur le sujet. La terminer aurait été une fiction.

Elle avait refermé le carnet. Posé la main dessus une seconde — geste sans sens apparent, sauf que la chaleur de sa main à travers le cuir était mesurable à qui aurait eu les instruments de sa mère.

Demain, le District Onze, la source habituelle.

Après-demain, la nuit, le District Quatorze.

Elle savait exactement comment trouver les sous-sols d'un bloc d'habitation de cette zone — elle avait cartographié la distribution thermique de ce district depuis son arrivée à Khar-Vurn, comme elle cartographiait tous les districts, comme elle l'avait fait dans chaque ville depuis quinze ans. Les signatures s'y lisaient comme du texte maintenant. Elle saurait, à l'entrée du bâtiment, si quelqu'un correspondant à Brasia était présent dans les étages inférieurs.

Et si c'était le cas.

Elle avait retourné le carnet dans ses mains. Un geste inutile. Elle l'avait posé.

Le lendemain matin, elle dirait à son unité que les recherches en archives avaient produit des pistes supplémentaires dans le District Quatorze. Elle demanderait deux agents disponibles pour une vérification d'adresse le surlendemain. Procédure standard. Elle irait seule d'abord pour confirmer.

C'était professionnel.

C'était aussi vrai que la plupart des choses qu'elle se disait.
`.trim(),
};

export default lore;
