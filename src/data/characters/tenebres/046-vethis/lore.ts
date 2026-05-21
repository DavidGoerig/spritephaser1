// ============================================================
//  VETHIS — Lore complet (Ténèbres · Arc Vel'Nox Double Jeu)
//  id: 46 | Ténèbres | Umbriens | Dissidentes | Gardien
//  Arc : Vel'Nox Double Jeu
//  Événements : Vol de la Lumière [H] — maintient les Trois Couches depuis 20 ans
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 46,
  nom: 'Vethis',
  element: 'Ténèbres',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: `Un mètre soixante-douze — moyen pour un Umbrien, économe comme tous les Umbriens dans ses gestes. La silhouette d'un homme qui a appris à ne pas attirer l'attention : ni trop grand, ni trop visible, ni trop immobile. Les gens qui cherchent Vethis dans une salle le trouvent en général près d'une sortie, debout mais pas raide, les bras légèrement écartés du corps.`,
    peau: `Gris-bleuté foncé, presque gris-ardoise dans les zones bien éclairées. La translucidité Umbrienne est prononcée — les veines visibles aux tempes, au cou, au poignet. Quand il utilise son élément Ténèbres, la réflectivité cutanée se modifie légèrement : il devient moins "là", pas invisible mais difficile à focaliser.`,
    yeux: `Quasi-noirs, la qualité réfléchissante Umbrienne standard. Le contact visuel est inconfortable pour la plupart des gens qui ne le connaissent pas — l'impression de regarder dans quelque chose qui regarde ailleurs en même temps. Il en est conscient et l'utilise stratégiquement : il maintient un contact visuel légèrement décalé dans les négociations. Ça donne à l'interlocuteur l'impression de ne jamais avoir entièrement son attention, ce qui est parfois vrai.`,
    vetements: `Couches Umbriens standard — sombres, adaptatives, plusieurs registres possibles selon ce qu'on retire ou ajoute. Pas de marque visible d'une quelconque affiliation. Ses vêtements sont toujours dans des couleurs qui disparaissent bien dans les Trois Couches de Vel'Nox.`,
    signes_particuliers: `Vingt ans à maintenir l'équilibre des Trois Couches de Vel'Nox ont laissé une marque psychologique plus que physique. Il perçoit les flux des Ténèbres à Vel'Nox avec une précision quasi-instinctive — comme si la ville avait développé un sens supplémentaire en lui. Il sent quand quelque chose change dans les Couches avant d'en avoir la confirmation concrète.`,
  },

  psychologie: {
    dominante: `Vethis est un équilibriste. Il maintient depuis vingt ans un système de trois couches de légitimité à Vel'Nox — les marchés officiels, les réseaux d'information, les archives véritables — et cet équilibre a été son travail, son identité, et son sens de l'utilité. Il n'est pas Dissident par idéologie pure. Il est Dissident parce que les Dissidentes sont la seule faction qui comprend que Vel'Nox doit rester hors du contrôle direct de l'Empire pour fonctionner.`,
    contradictions: `Il maintient un équilibre qui bénéficie à des acteurs dont il n'approuve pas toutes les activités. La Couche Noire de Vel'Nox contient des archives sur des crimes impériaux — mais aussi sur des crimes de la Couche Grise elle-même. Il a choisi de maintenir l'équilibre du système plutôt que d'en purger les éléments corrompus. Il ne sait pas si c'est de la pragmatique ou de la lâcheté.`,
    peur: `Que ce qui a changé dans les flux soit le signal qu'il attendait sans savoir qu'il l'attendait : l'effondrement des Trois Couches. Vel'Nox sans les Trois Couches redeviendrait une ville de transit banale, ou pire, une ville impériale directement administrée. Ce serait la fin de tout ce qu'il a maintenu.`,
    desir: `Comprendre ce qu'il sent. La modification dans les flux de Ténèbres qui a commencé il y a environ huit mois est subtile mais réelle. Il a besoin de savoir si c'est une cause locale ou quelque chose de plus grand. Tout ce qu'il fait dans ce but repose sur cette connaissance manquante.`,
    rapport_au_pouvoir: `Il a une relation de travail avec les Fées — elles ont un accès négocié à la Couche Grise de Vel'Nox. Cet accès est leur garantie de ne pas tenter une administration directe. Il les considère comme un partenaire qui ne doit jamais se sentir trop en sécurité ou trop en danger. Les Dissidentes entretiennent des contacts dans la Couche Noire. Lui-même est dans les deux — il est la charnière.`,
  },

  histoire: {
    origine: {
      titre: 'Le Vol de la Lumière',
      texte: `Vethis est né à Vel'Nox l'année du Vol de la Lumière. Il ne s'en souvient pas — il avait deux ans. Ce dont il se souvient, c'est d'une ville qui grandissait dans l'obscurité avec une certaine fierté pour cette obscurité.

Le Vol de la Lumière avait plongé Vel'Nox dans un noir permanent qui aurait dû la tuer en tant que ville marchande. À la place, les Umbriens l'avaient reconstruite autour de ce noir — les surfaces réfléchissantes, les miroirs distribués, les rues qui ne montraient rien directement. La ville avait développé une culture de l'opacité délibérée.

Sa famille était marchande de la Couche Grise — pas des criminels, des intermédiaires. Ceux qui savaient poser les bonnes questions et connaissaient les bonnes personnes. À quinze ans, Vethis travaillait déjà pour eux. À vingt, il avait des contacts dans la Couche Noire.

À vingt-deux, quelqu'un lui avait expliqué la structure des Trois Couches comme un système à maintenir plutôt qu'un marché à exploiter. Que si personne ne surveillait l'équilibre entre les Couches, Vel'Nox dégénérerait en quelque chose d'ingérable. Cette explication venait d'un vieux Dissident qui mourait. Il lui avait proposé sa place.`,
    },
    eveil: {
      titre: 'Vingt Ans d'Équilibre',
      texte: `Il avait accepté. Il n'avait pas compris entièrement ce que ça voulait dire, alors. Il avait compris progressivement, pendant les vingt années suivantes.

Maintenir les Trois Couches signifiait garantir que la Couche Blanche restait fonctionnelle et visible pour que personne n'ait de raisons de s'y substituer. Que la Couche Grise restait utile pour que les acteurs qui en avaient besoin — dont les Fées — ne cherchent pas à créer leur propre réseau parallèle. Que la Couche Noire restait discrète pour que son existence reste niable.

En pratique : des dizaines de conversations dans des endroits sans témoins, des dizaines d'équilibres rendus invisibles, des dizaines de tensions résolues avant de devenir publiques. Un travail que personne ne voyait parce que le succès de ce travail était l'absence d'événement.

Il s'en était satisfait. Pendant vingt ans.`,
    },
    rupture: {
      titre: 'La Modification dans les Flux',
      texte: `Il y avait huit mois, quelque chose avait changé dans les flux de Ténèbres de Vel'Nox.

Il était difficile de décrire ce que "quelque chose avait changé" voulait dire en termes de flux élémentaires à des non-Élus. La meilleure métaphore qu'il avait trouvée : c'était comme si la rivière qu'il connaissait depuis vingt ans avait légèrement changé de courant — pas de direction, juste d'intensité. Un canal qui coulait un peu plus vite qu'avant. Un autre qui semblait attiré vers quelque chose en dehors de la ville.

Il avait observé sans intervenir — c'était sa méthode. Observer jusqu'à comprendre. Il n'avait pas encore compris.

Ce qu'il avait identifié : les flux qui avaient changé correspondaient à des zones spécifiques de la Couche Noire de Vel'Nox. Des archives particulières. Des dossiers que peu de gens savaient exister — des documents sur des événements de la période -100 à -50, quand le Premier Drain avait commencé à circuler comme doctrine dans les cercles fermés de la Convergence.

Quelque chose d'extérieur à Vel'Nox tirait sur ces archives. Pas une consultation — une attraction.`,
    },
    maintenant: {
      titre: 'Le Marchand Tharyn et les Nouvelles Marchandises',
      texte: `Tharyn (id:50), marchand des marchés nocturnes, avait remarqué quelque chose il y a quatre mois. Il le lui avait dit dans une conversation apparemment anodine à la Couche Blanche : de nouvelles marchandises circulaient dans Vel'Nox. Pas des marchandises physiques — des informations. Des informations sur des Élus spécifiques, leurs puissances exactes, leurs localisations.

La Convergence achetait ces informations.

Vethis avait passé les quatre mois suivants à recouper. Ce qu'il avait trouvé : les données sur les Élus qui circulaient correspondaient à un profil spécifique — les Élus dont les éléments correspondaient aux dix-huit élémentaires requis par la doctrine du Premier Drain. La doctrine qu'Arev (id:67) connaissait. La doctrine qui culminerait à An 0.

Quelqu'un préparait quelque chose. Et les archives de Vel'Nox, dans la Couche Noire, contenaient les préparatifs.`,
    },
    objectif: {
      titre: 'Garder les Couches Intactes',
      texte: `Son objectif immédiat est simple : comprendre ce qui attire les flux vers les archives de la Couche Noire et s'assurer que ça ne déstabilise pas l'équilibre des Trois Couches.

Son objectif réel, qu'il formule moins clairement : si ce qu'il voit est la préparation du Premier Drain — l'événement cosmique que la Convergence appelle An 0 — alors Vel'Nox va devenir un nœud d'information critique dans ce processus. Et si Vel'Nox devient un nœud, les Trois Couches vont être sollicitées d'une façon qu'il n'a pas prévue.

Il a besoin de savoir avant que ça arrive. Velath (id:49) a des contacts dans des zones de Vel'Nox où lui ne va pas. Il va lui demander de chercher.`,
    },
    evenements_narratifs: ['Vol_de_la_Lumiere'],
    arcs: ['Velnox_Double_Jeu'],
    position_dans_arc: `Gardien des Trois Couches de Vel'Nox depuis 20 ans. Dissident qui maintient l'équilibre entre Couche Blanche (marchés officiels), Couche Grise (réseaux d'information, accès Fée négocié) et Couche Noire (archives véritables). Perçoit depuis 8 mois une modification dans les flux de Ténèbres. A identifié que la Convergence collecte des données sur des Élus correspondant aux profils du Premier Drain.`,
  },

  relations: [
    {
      personnage_id: 49,
      nom: 'Velath',
      type: 'associée_de_confiance',
      depuis_ici: `Velath connaît les routes que Vethis ne connaît pas — les passages de la Couche Noire qui ne sont pas dans ses archives parce qu'ils n'ont jamais été documentés. Elle est Assassin, il est Gardien ; leurs fonctions sont différentes mais complémentaires. Il lui fait confiance autant qu'on peut faire confiance à quelqu'un à Vel'Nox. Ce qui signifie : il vérifie toujours, mais il fait confiance quand même.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'actif',
    },
    {
      personnage_id: 50,
      nom: 'Tharyn',
      type: 'source_marchande',
      depuis_ici: `Tharyn voit tout dans les marchés nocturnes et dit peu. Leur relation dure depuis quinze ans — Tharyn fournit des observations, Vethis les contextualise. Tharyn est officiellement neutre ; Vethis respecte cette neutralité en ne lui demandant jamais d'agir, seulement d'observer. L'information sur les nouvelles marchandises venait de lui. C'était la première fois en quinze ans que Tharyn avait eu l'air inquiet.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'actif',
    },
    {
      personnage_id: 48,
      nom: 'Shael',
      type: 'acteur_problématique',
      depuis_ici: `Shael achète des données dans la Couche Grise et dit faire de la justice redistributive. Vethis le surveille depuis six ans. Shael est probablement Convergence — les données qu'il achète et revend correspondent au profil de collecte que Vethis observe dans les flux. Il ne l'a pas confronté directement. À Vel'Nox, confronter quelqu'un directement est rarement la meilleure option. Il surveille.`,
      arc_commun: 'Velnox_Double_Jeu',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Vethis ne combat pas — il crée des conditions où le combat n'est pas nécessaire, et si c'est nécessaire, des conditions où il se termine rapidement. Son élément Ténèbres n'est pas utilisé pour la destruction mais pour la manipulation de l'espace et de la perception. Vingt ans à Vel'Nox lui ont appris que le combat qui a lieu est le combat qu'on n'a pas empêché.`,
    sorts: [
      {
        nom: 'Couche Grise',
        type: 'sort_de_base',
        elements: ['Ténèbres'],
        description_gameplay: `Vethis réduit sa "présence visuelle" dans un rayon de 2 cases. Les ennemis dans ce rayon ont 30% de chances de rater leur ciblage la prochaine fois qu'ils l'incluent dans une attaque de zone. Si Vethis est dans l'obscurité ou une zone d'ombre, la chance passe à 50%.`,
        description_lore: `La manipulation Umbrienne de la réflectivité cutanée, amplifiée par l'élément Ténèbres. Pas l'invisibilité — la présence réduite. La différence importe.`,
      },
      {
        nom: 'Réseau de Vel'Nox',
        type: 'sort_situationnel',
        elements: ['Ténèbres'],
        description_gameplay: `Vethis active ses contacts dans les Trois Couches. Pendant 2 tours, il reçoit une notification avant chaque action ennemie (un tour d'avance), ce qui lui permet d'éviter la première attaque ciblée sur lui. Si un allié est adjacent, il peut transférer cet avantage à l'allié à la place.`,
        description_lore: `Vingt ans de contacts à Vel'Nox. L'information circule vite dans les Trois Couches. Quelqu'un est toujours en train de voir quelque chose d'utile.`,
      },
      {
        nom: 'Équilibre des Couches',
        type: 'sort_situationnel',
        elements: ['Ténèbres'],
        description_gameplay: `Vethis rétablit l'équilibre élémentaire d'une zone de 3×3 cases. Les effets de Ténèbres ennemis actifs dans la zone sont réduits de 1 tour. Les alliés dans la zone gagnent une résistance aux effets de Ténèbres pour 2 tours.`,
        description_lore: `Ce qu'il fait dans les Couches de Vel'Nox depuis vingt ans — empêcher qu'un acteur prenne trop de place. Appliqué à un champ de bataille, c'est la même logique.`,
      },
      {
        nom: 'Couche Noire',
        type: 'ultimate',
        elements: ['Ténèbres'],
        description_gameplay: `Vethis révèle la Couche Noire du terrain de combat. Pendant 3 tours, il peut voir et utiliser des passages cachés ignorés par les autres unités — il se déplace à travers toute case d'ombre ou de basse lumière sans restriction. Une fois par activation, il peut placer une unité alliée dans un espace "non-visible" pendant 1 tour (immunisée aux attaques ciblées).`,
        description_lore: `L'accès aux routes que personne ne cartographie. Vingt ans à Vel'Nox, et il en connaît des passages que les cartes officielles de la ville ne montrent pas.`,
      },
      {
        nom: 'Présence Stable',
        type: 'passif',
        elements: ['Ténèbres'],
        description_gameplay: `Passif permanent. Vethis perçoit les changements dans les flux élémentaires avant qu'ils se manifestent — il ne peut pas être surpris par des embuscades (immunité à l'effet Surprise). Si un ennemi se prépare à déclencher un effet de zone, Vethis le perçoit un tour avant et peut se déplacer d'une case hors de la zone sans dépenser son action de déplacement.`,
        description_lore: `Vingt ans à sentir quand les Couches de Vel'Nox changeaient. Ça développe une perception qui ressemble parfois à de la précognition.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Vethis',
      description: `Umbrien masculin, 42 ans, 1m72, silhouette économe et discrète. Peau gris-ardoise translucide avec veines visibles aux tempes. Yeux quasi-noirs avec qualité réfléchissante Umbrienne. Expression calme et légèrement décalée — regarde toujours légèrement ailleurs que ce qu'il semble regarder. Vêtements sombres en couches multiples, aucun insigne. Fond : rue de Vel'Nox avec surfaces réfléchissantes et miroirs distribués, lumière indirecte. Style concept art Riot Games, tons gris-bleu foncé.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1200,

  lore_long: `LES TROIS COUCHES
Un chapitre de la vie de Vethis, Gardien des flux de Vel'Nox

—

I.

La Couche Blanche de Vel'Nox fonctionnait normalement.

Vethis traversait les marchés du soir, observant les échanges habituels — produits de transit, marchandises de luxe venant d'Asterciel via des routes qu'officiellement personne n'utilisait mais que tout le monde empruntait, épices d'Ash'Rael qui n'apparaissaient dans aucun manifeste douanier. Normal. Vel'Nox était une ville de transit et les transits non-déclarés étaient une fonction normale de son économie.

Ce qui n'était pas normal était dans les flux.

Il les percevait dans les marges de sa conscience élémentaire — des Ténèbres légèrement déplacées dans la zone est, là où les archives de la Couche Noire étaient physiquement stockées. Pas une perturbation violente. Une attraction lente, régulière, comme un courant d'eau qu'on remarque seulement après avoir traversé la rivière plusieurs fois.

Cela durait depuis huit mois.

—

II.

Tharyn était à sa table habituelle dans le marché couvert du carrefour nord.

Il vendait des objets de transit — la façade. Ce qu'il vendait réellement était de l'information contextuelle : qui venait d'arriver, qui cherchait quoi, qui avait quelque chose d'intéressant à dire. Vethis le connaissait depuis quinze ans.

— Les nouvelles marchandises, dit Vethis sans s'asseoir.

— Informations sur des Élus, dit Tharyn sans regarder vers lui. Profils détaillés. Puissances spécifiques, localisations, stabilité élémentaire.

— Acheteurs ?

— Un seul acheteur régulier. Discret. Couche Grise. Mais l'argent vient de plus loin.

— La Convergence.

Tharyn ne répondit pas. Ce qui était une réponse.

— Quels Élus ?

— Tous les éléments. Mais seulement les purs — ceux dont l'élément est dominant sans dilution.

Dix-huit éléments. Dix-huit purs. La doctrine du Drain.

Vethis avait dit : — Tu as l'air inquiet.

Tharyn avait dit : — Je suis marchand. Je n'ai pas de jugements moraux sur les marchandises.

Ce qui n'était pas ce qu'il avait dit. Ce qui était ce qu'il avait dit dans le seul langage que Vel'Nox utilisait honnêtement.

—

III.

Dans la Couche Noire, il avait des archives sur la doctrine du Drain depuis trente ans.

Des documents sur ce que la Convergence appelait An 0 — non pas l'année en cours mais un point de référence cosmologique. L'Avatar Total, créé par drainage de dix-huit Élus purs élémentaires. La redistribution de toute puissance élémentaire en un seul être.

Les archives de Vel'Nox sur ce sujet dataient d'une époque où la Convergence était encore une faction marginale dans les déserts d'Ash'Rael. Maintenant elle achetait des données à travers les marchés nocturnes de Vel'Nox. Ce n'était plus marginal.

Ce qui avait changé dans les flux de Ténèbres autour des archives : quelque chose d'extérieur les consultait. Pas physiquement — via les lignes élémentaires. Quelqu'un avec un accès à la magie de Ténèbres à distance lisait les archives de la Couche Noire de Vel'Nox sans y être physiquement présent.

Ash'Rael était à six cents kilomètres. Les Élus Ténèbres de la Convergence pouvaient atteindre beaucoup plus loin dans leur élément que la plupart des gens ne le savaient.

—

IV.

Velath lui avait dit de ne pas s'inquiéter de la Convergence.

— La Convergence fait toujours ça, avait-elle dit. Elle collecte. Elle prépare. Elle attendit.

— Cette fois, la préparation correspond aux dix-huit profils, dit-il.

Silence.

— Tu crois que ça va arriver ? demanda-t-elle.

— Je crois que ça a déjà commencé. Les flux ont changé il y a huit mois. An 0, selon les calendriers que j'ai dans les archives, est prévu comme "le moment où les conditions seront réunies". Je ne sais pas ce que "conditions réunies" signifie exactement.

— Mais tu as une idée.

— Dix-huit Élus purs identifiés. Des données de localisation sur chacun. Un acheteur qui paye bien et ne négocie pas.

Velath avait regardé le plafond de l'endroit où ils se parlaient — une cave de la Couche Grise, une des dizaines qu'elle connaissait et lui connaissait aussi. Les surfaces réfléchissantes de Vel'Nox distribuaient la lumière même ici : un miroir à l'entrée renvoyait la lumière de la rue vers un autre miroir au fond, et ainsi de suite jusqu'à ce que la cave soit à peu près éclairée.

— Les Trois Couches vont prendre du plomb, dit-elle.

— Elles tiendront.

— Parce que tu vas les tenir.

Ce n'était pas une question. Il n'y avait pas répondu.`.trim(),
};

export default lore;
