// ============================================================
//  VELATH — Lore complet (Ténèbres · Arc Vel'Nox Double Jeu)
//  id: 49 | Ténèbres | Umbriens | Dissidentes | Assassin
//  Arc : Vel'Nox Double Jeu
//  Événements : Vol de la Lumière [H] — guide dans les Trois Couches
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 49,
  nom: 'Velath',
  element: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Un mètre soixante-sept — dans la moyenne Umbrienne. La description s'arrête là, et c'est délibéré. Velath est quelqu'un que les témoins décrivent différemment selon leur angle de vue et la lumière. Ce n'est pas de la magie — c'est la maîtrise de la réflectivité cutanée Umbrienne poussée à son maximum, combinée à une technique de déplacement qui minimise les angles fixes. Elle a travaillé pour être difficile à retranscrire.`,
    peau: `Gris-bleuté foncé, presque noir-bleu dans les endroits sans lumière directe. La translucidité Umbrienne est extrême chez elle — les veines des avant-bras sont visibles avec détail, ce qui dans d'autres contextes serait de la vulnérabilité. Elle porte des vêtements avec des manches longues sauf quand elle veut que l'interlocuteur regarde ses veines et pense "elle est seule et sans défense". Elle ne l'est jamais.`,
    yeux: `Noirs, presque sans iris distinguable à basse lumière. En pleine lumière, on voit un cercle d'iris gris très sombre autour d'une pupille large. Elle ne maintient jamais le regard. Non par timidité — par habitude de ne jamais se laisser ancrer dans une position observable fixe.`,
    vetements: `Couches légères en tissus qui absorbent la lumière. Pas de métal, pas de métal, pas de métal — rien qui réfléchisse ou fasse du bruit. Les seules exceptions sont deux lames fixes dans ses avant-bras, gainées dans du cuir traité silencieux. Elle les porte depuis seize ans. Elle pense à elles comme à des outils de précision, pas des armes.`,
    signes_particuliers: `Elle connaît Vel'Nox d'une façon que personne d'autre ne connaît. Pas la géographie officielle — les routes secondaires, les connexions entre les niveaux de la ville, les passages qui n'ont jamais été documentés parce que ceux qui les utilisent ne documentent rien. Cette connaissance est son principal atout et sa principale protection.`,
  },

  psychologie: {
    dominante: `Velath est une guide. Pas au sens touristique — au sens de quelqu'un qui fait passer des gens d'un endroit à un autre quand l'endroit officiel est fermé pour eux. Élus non-enregistrés. Dissidentes en fuite. Informateurs qui ont besoin d'une porte de sortie. Elle est la dernière option avant qu'il n'y en ait plus.`,
    contradictions: `Elle ne croit pas au sens profond de ce qu'elle fait. Elle ne pense pas sauver le monde, changer le système, protéger quoi que ce soit d'abstrait. Elle fait passer des gens d'un endroit dangereux à un endroit moins dangereux. C'est concret, c'est faisable, c'est ce qu'elle sait faire. Que ça soutienne indirectement les Dissidentes, elle s'en accommode.`,
    peur: `Qu'une de ses routes soit découverte. Pas elle — une route. Elle peut disparaître. Une route, une fois cartographiée, ne peut pas disparaître.`,
    desir: `Que Vel'Nox reste ce qu'il est — un espace où disparaître est une option. Si l'Empire administrait directement, ou si la Convergence utilisait la ville comme base d'opérations, les routes que personne ne cartographie finiraient par être cartographiées. L'obscurité que Vel'Nox a cultivée depuis le Vol de la Lumière est son utilité propre.`,
    rapport_au_pouvoir: `Elle a des relations fonctionnelles avec la Couche Grise, la Couche Noire, et quelques contacts dans la Couche Blanche. Aucune allégeance. Les Dissidentes lui paient ses passages ; elle livre les passages. Elle aurait livré ces mêmes passages à quelqu'un d'autre pour le bon prix, si elle faisait confiance à cet autre. Elle ne fait confiance qu'aux Dissidentes, pas par idéologie mais parce qu'ils ont prouvé depuis dix ans qu'ils ne donnaient pas ses routes à l'Empire.`,
  },

  histoire: {
    origine: {
      titre: 'Née dans le Noir',
      texte: `Velath est née dans Vel'Nox dix-neuf ans après le Vol de la Lumière, dans un quartier qui n'avait jamais vu la lumière directe du soleil depuis l'événement. Sa génération avait grandi avec les miroirs comme source de lumière — une lumière indirecte, fragmentée, qui ne venait jamais d'où on l'attendait.

Sa famille fabriquait des miroirs. Pas pour l'exportation — pour la ville. Les surfaces réfléchissantes de Vel'Nox se remplaçaient et se perfectionnaient constamment, et sa famille était dans ce commerce depuis deux générations. Elle avait grandi en comprenant la lumière comme quelque chose qu'on redirige, pas quelque chose qu'on crée.

À quatorze ans, elle avait découvert que la ville avait des passages qui ne dépendaient pas des surfaces réfléchissantes. Des routes dans l'obscurité complète où même les miroirs ne servaient à rien. Ces routes-là étaient navigables seulement pour quelqu'un dont l'élément Ténèbres était suffisamment développé pour percevoir l'espace sans lumière.

Elle avait un élément Ténèbres suffisamment développé pour ça.`,
    },
    eveil: {
      titre: 'La Première Traversée',
      texte: `À dix-sept ans, elle avait guidé quelqu'un pour la première fois.

Pas pour l'argent — par accident, presque. Un Élu Spéctre non-enregistré qui se cachait des Capteurs impériaux dans un sous-sol qu'elle traversait régulièrement. Il ne savait pas comment sortir de la ville sans être capturé. Elle connaissait une route.

Elle l'avait guidé de Vel'Nox jusqu'à un point de transfert Dissident à quatre kilomètres à l'est. Elle n'avait pas demandé pourquoi il était non-enregistré. Elle ne lui avait pas demandé son nom. Elle l'avait fait sortir et était rentrée.

Deux semaines plus tard, un contact Dissident l'avait trouvée. Ils avaient entendu parler de la traversée. Ils voulaient savoir si elle pouvait en faire d'autres.

Elle avait dit : ça dépend de la route et du passager.

Ce qui était une façon de dire oui.`,
    },
    rupture: {
      titre: 'La Route du Nord-Est',
      texte: `Il y avait six ans, la route du nord-est avait failli être découverte.

Un capitaine impérial avait détecté une anomalie dans les flux de Ténèbres — une signature récurrente qui ne correspondait à aucune source connue. Il avait commencé une enquête, méticuleuse. Velath avait su en deux jours que l'enquête existait. En quatre jours, elle avait arrêté d'utiliser la route du nord-est.

L'enquête avait duré trois mois. Elle n'avait rien trouvé — parce qu'il n'y avait rien à trouver. Une route inactive ne laisse pas de trace.

Ce qu'elle avait compris : le système de détection impérial fonctionnait sur les signatures récurrentes. Un seul passage ne déclenchait rien. Un schéma régulier déclenchait quelque chose. Elle avait réorganisé ses routes depuis — plus jamais deux passages identiques consécutifs. Chaque traversée empruntait un chemin légèrement différent.

Ça ralentissait les traversées. Ça les rendait sûres.`,
    },
    maintenant: {
      titre: 'Ce que Vethis lui a dit',
      texte: `Vethis lui avait parlé des flux. De la modification depuis huit mois. De Tharyn et des nouvelles marchandises. De la Convergence qui achetait des profils d'Élus purs.

Elle avait écouté sans commenter, comme toujours, en calculant.

Ce que ça impliquait pour ses routes : rien, immédiatement. La Convergence ne cherchait pas des routes à travers Vel'Nox — elle cherchait de l'information. Ces deux choses ne se croisaient pas.

Ce que ça impliquait à plus long terme : si la Convergence progressait dans sa préparation, si An 0 approchait, il y aurait des Élus en fuite. Des Élus qui correspondaient aux dix-huit profils et qui auraient appris qu'ils correspondaient. Ces Élus auraient besoin de routes.

Elle préparait déjà les extensions de ses routes vers le sud — vers les frontières des déserts, vers les zones qui séparaient Vel'Nox d'Ash'Rael. Pas encore — mais préparait. Les routes prennent du temps à reconnaître et à sécuriser.

Mieux vaut avoir des routes qu'on n'utilise pas que d'avoir besoin de routes qui n'existent pas.`,
    },
    objectif: {
      titre: 'Les Routes Qui N'Existent Pas',
      texte: `Son objectif est de maintenir des routes qui n'existent pas vers des endroits qui ne sont pas cartographiés, pour des gens que personne ne cherche encore.

C'est de la préparation à l'invisible — préparer des solutions à des problèmes qui n'ont pas encore eu lieu. Elle ne sait pas exactement ce qui va se passer. Elle sait que dans les périodes de crise, les gens ont besoin de sortir de là où ils sont, et que si les routes n'existent pas quand le besoin arrive, il est trop tard.

Elle continue à guider des passages réguliers pour les Dissidentes — c'est son travail quotidien. En parallèle, elle explore.`,
    },
    evenements_narratifs: ['Vol_de_la_Lumiere'],
    arcs: ['Velnox_Double_Jeu'],
    position_dans_arc: `Guide clandestine des Trois Couches de Vel'Nox. Connaissance unique des routes non-cartographiées. Travaille avec les Dissidentes depuis 10 ans. Prépare des extensions de routes vers le sud en anticipation d'une crise liée à la Convergence et à An 0. Associée de Vethis pour la surveillance des flux de Ténèbres.`,
  },

  relations: [
    {
      personnage_id: 46,
      nom: 'Vethis',
      type: 'associé_de_longue_date',
      depuis_ici: `Vethis est la seule personne à Vel'Nox à qui elle a dit combien de routes elle connaît réellement. Elle ne lui a pas dit où elles vont — mais il sait qu'elles existent et que leur nombre dépasse de loin ce qu'elle utilise régulièrement. C'est une confiance partielle : suffisante pour travailler ensemble, insuffisante pour être vulnérable. Ce qu'il lui a dit sur les flux et la Convergence l'a prise au sérieux. Elle commence rarement à préparer des routes par précaution — elle a commencé.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'actif',
    },
    {
      personnage_id: 47,
      nom: 'Nyrreth',
      type: 'passager_récent',
      depuis_ici: `Nyrreth est arrivé à Vel'Nox il y a quatre mois. Umbrien, élément Spectre, cherche quelque chose dans les archives censurées. Il a utilisé une de ses routes pour entrer dans la ville par un point qui n'est pas officiellement un point d'entrée. Elle ne sait pas ce qu'il cherche exactement — il n'a pas été bavard. Ce qu'elle sait : il est habile à se déplacer dans Vel'Nox, plus habile que quelqu'un qui y est pour la première fois. Il connaît certains des espaces qu'elle utilise.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'latent',
    },
    {
      personnage_id: 45,
      nom: 'Ael',
      type: 'mission_inconnue',
      depuis_ici: `L'Élu Electrique/Stellaire dont l'énergie a été volée pendant le Vol de la Lumière. Mort selon les archives officielles. Elle a entendu trois versions différentes de son possible statut actuel depuis dix ans — une par décennie, à peu près. La version la plus récente, il y a six mois : peut-être encore vivant dans les ruines de sa tour, à la frontière ouest de Vel'Nox. Elle n'est pas allée vérifier. Elle ne sait pas pourquoi elle n'est pas allée vérifier.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Velath évite le combat. Quand elle ne peut pas l'éviter, elle le termine le plus rapidement possible. Elle n'a aucun intérêt pour l'élégance ou la démonstration. Elle a deux lames et un élément Ténèbres et la certitude que si quelqu'un doit mourir, ce n'est pas elle.`,
    sorts: [
      {
        nom: 'Route Secondaire',
        type: 'sort_de_base',
        elements: ['Ténèbres'],
        description_gameplay: `Velath identifie une route non-cartographiée sur le terrain. Elle peut se déplacer jusqu'à 4 cases en passant à travers des zones d'ombre ou d'obscurité sans déclencher d'attaque d'opportunité. Si la zone de déplacement est en obscurité totale, elle devient indétectable pour ce déplacement.`,
        description_lore: `Ce qu'elle fait dans Vel'Nox. Chaque terrain a des angles morts, des zones que les gardes ne regardent pas, des passages qu'on ne voit pas parce qu'on ne les cherche pas.`,
      },
      {
        nom: 'Lame Discrète',
        type: 'sort_de_base',
        elements: ['Ténèbres'],
        description_gameplay: `Velath frappe avec précision depuis une position non-détectée. Si elle est indétectable au moment de l'attaque, les dégâts sont doublés et la cible ne peut pas contre-attaquer ce tour. Si elle est détectée, dégâts normaux.`,
        description_lore: `Elle n'utilise ses lames que quand c'est la seule option. Quand c'est la seule option, elle s'assure d'être dans la bonne position.`,
      },
      {
        nom: 'Disparaître',
        type: 'sort_situationnel',
        elements: ['Ténèbres'],
        description_gameplay: `Velath modifie sa réflectivité cutanée à l'extrême. Pour 2 tours, elle est considérée comme non-détectable par les ennemis à plus de 2 cases, et les ennemis à moins de 2 cases ont 40% de chances de rater leurs attaques ciblées. Elle ne peut pas attaquer pendant cette durée sans briser l'effet.`,
        description_lore: `La compétence Umbrienne que dix ans d'entraînement ont rendue automatique. Quand le danger augmente, la présence visuelle diminue.`,
      },
      {
        nom: 'Les Routes Qui N'Existent Pas',
        type: 'ultimate',
        elements: ['Ténèbres'],
        description_gameplay: `Velath active une route clandestine à travers le terrain. Elle et jusqu'à 2 alliés adjacents peuvent se téléporter vers n'importe quelle zone d'ombre à portée de 8 cases. Les ennemis doivent faire un test de détection (50% de chances d'échouer) pour remarquer le déplacement. Temps de recharge : 5 tours.`,
        description_lore: `Ce qu'elle fait pour les passagers Dissidents — les sortir d'endroits où ils ne peuvent pas rester, les amener à des endroits que personne ne surveille. Appliqué à un combat, c'est la même chose.`,
      },
      {
        nom: 'Présence Réduite',
        type: 'passif',
        elements: ['Ténèbres'],
        description_gameplay: `Passif permanent. Les attaques de zone ennemies ont 20% de chances de ne pas inclure Velath dans leur calcul de cible, même si elle est dans la zone. En zones d'ombre ou d'obscurité, cette chance passe à 40%.`,
        description_lore: `Une vie entière à être difficile à retranscrire et à cibler. Son corps a intégré l'effacement comme posture par défaut.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Velath',
      description: `Umbrienne féminine, 33 ans, 1m67, silhouette délibérément difficile à décrire — légèrement différente selon l'angle. Peau gris-bleuté très foncé, quasi-noire dans l'ombre. Veines visibles aux avant-bras (visible car manches roulées dans ce portrait). Yeux noirs sans iris distinguable. Expression neutre et légèrement absente — ne fixe jamais directement. Vêtements noirs en couches légères, sans métal. Fond : passage dans les Trois Couches de Vel'Nox, miroirs en arrière-plan qui distribuent une lumière indirecte, ombres profondes. Style concept art Riot Games, tons noir-bleu très sombres.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1200,

  lore_long: `LA ROUTE DU SUD
Un chapitre de la vie de Velath, guide des Trois Couches de Vel'Nox

—

I.

Elle reconnaissait une route à sa stabilité.

Une route stable était une route que personne n'avait remarquée depuis longtemps — les gardes ne la regardaient pas, les systèmes de détection élémentaire avaient ignoré ses traversées précédentes, les témoins potentiels dans les zones adjacentes avaient leurs propres habitudes qui ne se croisaient pas avec les siennes à des heures critiques.

La route du nord-est avait été stable pendant trois ans avant que le capitaine impérial commence son enquête. Elle avait été mal jugée — un passage trop fréquent, un schéma trop régulier. Depuis cette erreur, elle ne faisait plus rien deux fois de la même façon consécutive.

Ce soir, elle reconnaissait quelque chose d'inhabituel dans la zone sud de Vel'Nox.

—

II.

Vethis lui avait dit que la Convergence achetait des profils d'Élus. Purs élémentaires. Dix-huit éléments.

Elle n'avait pas de sentiment particulier sur la Convergence. Elle avait des routes et des passagers. Si la Convergence cherchait à trouver des gens, certains de ces gens auraient besoin de ne pas être trouvés. Et si ces gens étaient les dix-huit purs élémentaires — une catégorie rare, documentée, dont certains ne savaient pas eux-mêmes ce qu'ils étaient — alors il y aurait des passages à effectuer.

Elle avait commencé à explorer la zone sud il y a trois semaines. Pas pour une traversée immédiate — pour évaluer.

La zone sud de Vel'Nox donnait sur des routes terrestres vers Ash'Rael. Pas de routes officielles — des pistes, des passages naturels entre les plateaux, des zones que les caravanes d'épices utilisaient sans déclarer leurs itinéraires. Elle avait parlé à deux marchands de ce type.

Ce qu'elle avait appris : il existait un couloir naturel de soixante-dix kilomètres entre Vel'Nox et la frontière des déserts d'Ash'Rael qui n'était cartographié par personne. Trop sec, trop difficile d'accès, pas assez de valeur commerciale pour justifier la cartographie. Pour quelqu'un avec l'élément Ténèbres et une bonne mémoire de terrain, c'était une route.

Elle l'avait traversée deux fois. Elle connaissait maintenant ses angles morts, ses points d'eau cachés, ses zones où la chaleur du désert créait des mirages utilisables comme couverture visuelle.

—

III.

Elle n'avait jamais été dans les déserts d'Ash'Rael.

La doctrine du Drain venait de là — le Premier Drain volontaire, le saint Saeved, les cercles concentriques du lieu de pèlerinage. Ce n'était pas son monde. Les Umbriens n'allaient pas dans les déserts par choix. Trop exposés. Pas assez d'ombres naturelles.

Mais les Élus purs élémentaires qui auraient besoin de disparaître ne choisiraient pas leur destination — ils choisiraient d'abord de ne pas être là où ils étaient. C'était son travail de prévoir les endroits possibles pour "pas là où ils étaient".

Ash'Rael lui semblait contre-intuitif, ce qui en faisait une option crédible. La Convergence cherchait des Élus purs dans les régions connues. Quelqu'un qui savait traverser le désert disparaissait de toutes leurs cartes.

Elle n'avait pas encore proposé cette route à Vethis. Il lui demanderait pourquoi elle préparait des routes pour des passagers qui n'existaient pas encore. Ce n'était pas une question à laquelle elle avait une réponse satisfaisante, sauf la vraie : elle sentait que la fenêtre pour préparer se fermait, et elle préférait les routes qui n'existent pas à l'absence de route au moment où la route devient nécessaire.

—

IV.

Ce soir, en traversant la zone sud, elle avait vu quelque chose dans les flux de Ténèbres.

Une signature. Pas une signature qu'elle reconnaissait — trop lointaine, trop fragmentée. Quelque chose en dehors de Vel'Nox qui utilisait les Ténèbres sur les distances. La Convergence, probablement. Lisant les archives de la Couche Noire depuis Ash'Rael, comme Vethis l'avait dit.

Elle était restée immobile pendant deux minutes dans la zone sud, son propre élément effacé au maximum, et elle avait observé la signature.

Elle cherchait quelque chose de spécifique : si la signature cherchait des routes ou de l'information. Si elle cherchait des routes, ses routes à elle étaient un problème immédiat. Si elle cherchait de l'information, elle avait du temps.

Elle cherchait de l'information. Des profils, des localisations, des capacités. Pas des routes.

Pour l'instant.

Elle avait noté mentalement d'observer à nouveau dans quatre semaines et avait continué vers le point de rencontre où elle devait guider un Élu Spéctre hors de Vel'Nox par une route qui n'existait pas, vers un endroit que personne ne savait cartographier.

Son travail ordinaire. Pour l'instant, encore ordinaire.`.trim(),
};

export default lore;
