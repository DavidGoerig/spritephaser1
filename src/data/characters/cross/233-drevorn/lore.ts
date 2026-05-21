// ============================================================
//  DREVORN — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 233 | Ténèbres/Sol | Peuples des Sables | Convergence | Spécialiste
//  Arc : L'Avatar (Convergence) — théologien, auteur du Témoignage de Saeved
//  Événements : Premier Drain [T direct, an -41] — Saturation des Élus [C doctrinal]
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 233,
  nom: 'Drevorn',
  element: 'Ténèbres',
  element2: 'Sol',
  espece: 'Peuples des Sables',
  region: "Ash'Rael",
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-dix, sec. Les soixante et un ans de Drevorn ne l'ont pas affaissé — ils l'ont condensé. Il y a peu de gestes inutiles chez lui, peu de mots de remplissage. Sa corpulence est celle d'un homme qui vit dans les livres mais qui a passé des décennies sur le terrain avant d'y arriver.`,
    peau: `Brun-ocre profond, crevassé par les décennies de désert. Les rides de Drevorn sont celles de la concentration plutôt que de la tristesse — des sillons aux coins des yeux et aux commissures des lèvres qui vont dans la direction de quelqu'un qui a passé sa vie à lire et à formuler. Ses mains ont des taches d'encre permanentes que l'eau n'enlève plus.`,
    yeux: `Noir profond avec une qualité d'absorption — ses yeux semblent prendre la lumière sans la rendre. Ce n'est pas de la menace : c'est l'élément Ténèbres qui se manifeste physiquement dans son regard. Les gens qui lui parlent ont l'impression d'être entendus avec une attention totale. Ils ont raison.`,
    vetements: `Robe de travail sombre, plusieurs couches, adaptée à la température du désert nocturne. Pas d'ornements. Les textes qu'il porte sur lui sont ses ornements — des cahiers, des feuillets, des rouleaux de papier-désert qui remplissent ses poches de façon asymétrique.`,
    signes_particuliers: `Son élément Ténèbres lui permet de percevoir les couches non-dites de ce que les gens expriment — pas de lire les pensées, mais de sentir l'écart entre la formulation choisie et ce qui n'a pas été dit. En quarante ans d'entretiens avec des candidats à la Convergence, des Élus volontaires et des autorités diverses, il a développé une précision dans cette perception qui le rend difficile à manipuler et difficile à mentir.`,
  },

  psychologie: {
    dominante: `Drevorn a passé quarante ans à construire la doctrine de la Convergence en partant d'un acte : Saeved, qui a choisi de donner toute son énergie élémentaire pour stabiliser une zone qui allait mourir sans lui. Tout ce que Drevorn a écrit découle de cet acte. La doctrine est solide. Le monde qu'elle décrit est réel. Et le Grand Rééquilibrage qu'il est en train de théoriser — la Convergence l'appelle "l'Avatar Total" dans ses cercles internes — est la conclusion logique de quarante ans de travail.`,
    contradictions: `Saeved a choisi pour lui-même. Drevorn le sait. La doctrine est fondée sur le consentement volontaire parce que c'est ce que Saeved a fait. Les dix-huit purs élémentaires qu'il est en train de théoriser pour le Grand Rééquilibrage — ils n'ont pas encore été informés. La théologie qu'il écrit en ce moment justifie cette séquence : les informer avant que la nécessité soit établie créerait une résistance qui nuirait à l'acte lui-même. Il a rédigé cinq versions de cet argument. Chacune est moins convaincante que la précédente.`,
    peur: `Que la version de Saeved qu'il a construite dans ses textes — l'acte volontaire parfait, la décision libre et claire — soit une reconstruction. Il était présent. Il avait vingt ans. Il se souvient d'un homme épuisé qui avait dit oui parce que la situation ne laissait pas de place au non. Il a passé quarante ans à appeler ça un choix.`,
    desir: `Que le monde soit différent après le Grand Rééquilibrage. Pas de façon abstraite — concretement : que les zones en déficit élémentaire reçoivent ce dont elles ont besoin sans que ça dépende de la disponibilité et de la bonne volonté d'Élus individuels. Un système qui fonctionne de façon structurelle, pas caritative.`,
    rapport_au_pouvoir: `Son Ténèbres perçoit les non-dits, son Sol l'ancre dans le monde matériel. En combat — qu'il évite — il utilise les deux de façon défensive : créer des zones obscures pour brouiller la perception ennemie, stabiliser le terrain pour les alliés.`,
  },

  histoire: {
    origine: {
      titre: 'L\'An -41',
      texte: `Drevorn avait vingt ans quand Saeved est mort.

Il était dans la zone — pas au premier rang, mais il voyait. Ce qu'il avait vu : un homme de trente-deux ans, Élu Sol d'une puissance ordinaire, qui avait posé les deux mains sur le sol d'un plateau en train de mourir et qui avait donné tout ce qu'il avait. La zone avait répondu. Deux cents familles avaient eu de la terre vivante. Saeved n'était plus là quand c'était fini.

Il y avait dans cet acte quelque chose de si propre — si complètement ce qu'il disait être — que Drevorn avait compris instantanément qu'il allait passer le reste de sa vie à en écrire les implications.

Il avait commencé à écrire la nuit suivante.`,
    },
    eveil: {
      titre: 'Le Témoignage',
      texte: `Son premier texte — "Le Témoignage de Saeved", version finale rédigée à vingt-trois ans — est devenu le document fondateur de la Convergence. Il décrivait l'acte, les conditions, la décision de Saeved, et posait la question centrale : si une seule personne avec l'énergie nécessaire peut sauver une zone entière, quelle est la responsabilité de cette personne envers la zone ? Quelle est la responsabilité de la zone envers cette personne ?

Il n'avait pas répondu à la question dans ce texte. Il avait dit que la réponse devrait être trouvée ensemble.

La Convergence avait construit une institution sur la question. Drevorn avait passé trente-huit ans à construire les réponses.`,
    },
    rupture: {
      titre: 'Le Grand Rééquilibrage',
      texte: `Il y avait trois ans, le cercle intérieur de la Convergence lui avait présenté la théorie de l'Avatar Total — un être qui contiendrait tous les éléments simultanément, capable de redistribuer l'énergie élémentaire à une échelle que les Drains individuels ne pourraient jamais atteindre. Pour le créer : dix-huit Drains de purs élémentaires simultanés. Dix-huit actes de don.

Il avait posé la question du consentement immédiatement. La réponse avait été : "Nous développons les protocoles de sélection et de préparation. C'est pour ça que nous avons besoin de ta théologie."

Il avait accepté. La doctrine du Drain était fondée sur le don volontaire. Il pouvait construire la théologie du don cosmique — le don d'une ampleur telle que le consentement individuel s'inscrivait dans un contexte de nécessité collective plus large.

Il écrivait ce texte depuis trois ans. Il en était à sa douzième version.`,
    },
    maintenant: {
      titre: 'La Douzième Version',
      texte: `Ce soir, il avait ouvert la douzième version du chapitre sur le consentement.

Il avait lu le passage où il écrivait que "l'acte cosmique transcende le consentement individuel parce qu'il représente la volonté collective de corriger une injustice fondamentale."

Il avait posé le stylo.

Razhal lui avait envoyé un message ce soir : il avait des questions sur le Protocole d'Identification. Il voulait comprendre la finalité des dix-huit profils.

Drevorn allait répondre demain. Il cherchait encore comment formuler la réponse.`,
    },
    objectif: {
      titre: 'La Réponse À Razhal',
      texte: `Il va répondre à Razhal. La réponse vraie est : les dix-huit profils servent à identifier les Élus qui seront les donateurs du Grand Rééquilibrage. Ils ne le savent pas encore. Ils le sauront au moment où la nécessité sera suffisamment établie pour que leur refus ne soit plus une option réelle.

La réponse qu'il va donner est peut-être différente. Il cherche encore quelle version de la vérité il est capable de prononcer à voix haute.`,
    },
    evenements_narratifs: ['Premier_Drain', 'Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Théologien central de la Convergence. Auteur du Témoignage de Saeved. Connaît l'Avatar Total — appelle ça "le Grand Rééquilibrage." Rédige la justification doctrinale depuis 3 ans, douzième version. A reçu la demande de questions de Razhal ce soir. Cherche comment répondre.`,
  },

  relations: [
    {
      personnage_id: 65,
      nom: 'Saeved',
      type: 'fondateur_fantôme',
      depuis_ici: `Il était là. Il avait vingt ans. Il a construit toute sa vie intellectuelle autour de ce qu'il a vu ce jour-là. Ce qu'il a vu exactement — pas ce qu'il a écrit — c'est quelque chose qu'il garde pour lui. Les deux ne sont pas identiques. Ça l'occupe, certaines nuits.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'agent_de_confiance',
      depuis_ici: `Razhal est le meilleur opérateur de terrain de la Convergence. Méthodique, honnête, fidèle à la doctrine. C'est aussi pour ça que sa demande de questions est difficile — Razhal pose des questions quand il a une raison de les poser, pas par curiosité. Si Razhal voit la forme de ce qu'il construit, la réponse qu'il exige sera la réponse vraie.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 67,
      nom: 'Arev',
      type: 'voix_inconfortable',
      depuis_ici: `Il a lu les propositions de réforme d'Arev — les protocoles de volontariat plus rigoureux, la séparation des décisions d'aide sociale des décisions de Drain. Elles ont été rejetées. C'est lui qui les a rejetées, techniquement, en recommandant au coordinateur régional qu'elles n'étaient "pas compatibles avec les besoins opérationnels actuels." Il ne l'a pas fait par malveillance. Il l'a fait parce que ses protocoles rendraient le Grand Rééquilibrage impossible. Il pense à Arev certains soirs.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Drevorn ne combat que contraint. Son Ténèbres crée des zones d'obscurité et de confusion. Son Sol ancre ses alliés. Il préfère que les combats se terminent avant qu'ils commencent.`,
    sorts: [
      {
        nom: 'Zone d\'Ombre',
        type: 'sort_de_base',
        elements: ['Ténèbres'],
        description_gameplay: `Crée une zone d'obscurité sur 2×2 cases pendant 3 tours. Les ennemis dans la zone ont leur précision réduite de 40%. Les alliés Ténèbres ne sont pas affectés.`,
        description_lore: `Quarante ans à travailler dans les couches non-dites des conversations et des textes. L'ombre n'est pas l'absence de lumière — c'est l'espace où ce qu'on ne voit pas devient aussi réel que ce qu'on voit.`,
      },
      {
        nom: 'Ancrage Doctrinal',
        type: 'sort_situationnel',
        elements: ['Sol'],
        description_gameplay: `Stabilise la position d'un allié. Pendant 2 tours, il ne peut pas être déplacé et ses résistances augmentent de 25%. Peut être lancé à distance de 3 cases.`,
        description_lore: `Le Sol comme fondation — il l'a appris dans le désert, enfant, avant de comprendre que c'était un élément. Donner quelque chose de stable à s'accrocher.`,
      },
      {
        nom: 'Lecture des Non-Dits',
        type: 'sort_situationnel',
        elements: ['Ténèbres'],
        description_gameplay: `Révèle les intentions de la cible — ses prochains 2 tours d'actions sont visibles pour Drevorn et ses alliés adjacents. Les alliés qui voient cette révélation peuvent réagir avant que ces actions se produisent (+15% d'esquive contre les actions révélées).`,
        description_lore: `Quarante ans à entendre ce que les gens ne disent pas. En combat, ça se traduit par une lecture des intentions avant l'acte.`,
      },
      {
        nom: 'Le Témoignage',
        type: 'ultimate',
        elements: ['Ténèbres', 'Sol'],
        description_gameplay: `Drevorn parle. Tous les ennemis dans un rayon de 4 cases sont touchés par un effet de confusion pendant 2 tours — leurs actions coûtent 50% de points d'action supplémentaires. Tous les alliés dans le même rayon reçoivent un bonus de résistance de 20% et sont immunisés aux effets de peur pendant 3 tours.`,
        description_lore: `Le Témoignage de Saeved, dit à voix haute. Ce n'est pas de la magie — c'est quarante ans de mots construits avec précision pour toucher ce qui est profond dans ceux qui entendent. Ça fonctionne sur les ennemis autant que sur les alliés, mais différemment.`,
      },
      {
        nom: 'Poids de l\'Acte',
        type: 'passif',
        elements: ['Ténèbres', 'Sol'],
        description_gameplay: `Passif. Quand un allié utilise un sort qui coûte des PV propres (sacrifice), Drevorn amplifie automatiquement l'effet de 25%. Ce passif ne s'active qu'une fois par tour.`,
        description_lore: `Ce qu'il a vu à vingt ans : l'acte de don total a une ampleur que les actes ordinaires n'ont pas. Il a passé quarante ans à théoriser ça. En combat, il le reconnaît quand il le voit.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Drevorn',
      description: `Homme des Peuples des Sables, 61 ans, 1m70, sec et concentré. Peau brun-ocre crevassée, taches d'encre permanentes aux mains. Yeux noir profond absorbant. Robe de travail sombre multicouche, poches asymétriques gonflées de cahiers et feuillets. Expression de quelqu'un en train de formuler quelque chose. Fond : bureau de travail nocturne dans un bâtiment de la Convergence, manuscrits empilés, lampe à huile. Style concept art Riot Games, palette de nuit désertique, ombre et lumière chaude.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1100,

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

Ce qu'il se rappelait vraiment : une zone qui mourait depuis trois ans. Deux cents familles. Des récoltes qui diminuaient. Des enfants qui commençaient à avoir les symptômes de la malnutrition des sols pauvres. Et Saeved, le seul Élu Sol présent dans un rayon de deux jours de marche, qui avait regardé la situation et dit quelque chose.

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

Dans cette version : Saeved choisissait librement. Il y avait personne pour le forcer. La situation créait une opportunité, pas une contrainte. Et l'acte était d'autant plus grand qu'il était libre.

Il avait écrit ça à vingt-trois ans en croyant que c'était vrai.

À soixante et un ans, assis dans son bureau de la Convergence avec la douzième version du chapitre sur le consentement ouverte devant lui et le message de Razhal sur la table — il cherchait la différence entre ce qu'il avait cru à vingt-trois ans et ce qu'il savait maintenant, et ce qu'il allait dire demain matin.

—

V.

Il y avait une façon de répondre à Razhal qui était vraie sans être complète.

Il pouvait dire : "Les dix-huit profils correspondent à une initiative de redistribution à grande échelle que la Convergence prépare depuis plusieurs années. Les détails opérationnels seront partagés avec les équipes concernées au moment approprié."

C'était vrai. Ce n'était pas complet.

Il pouvait dire : "Les dix-huit profils vont servir à une redistribution d'une ampleur sans précédent — le plus grand rééquilibrage élémentaire jamais effectué. Les dix-huit donateurs feront un don dont les implications sont plus grandes que ce qu'un Drain individuel peut accomplir."

C'était plus complet. Mais ça omettait la partie où les dix-huit donateurs ne savaient pas encore qu'ils allaient donner, et ne seraient informés qu'au moment où refuser serait difficile.

Il pouvait dire la vérité entière.

—

VI.

Il avait regardé la douzième version du chapitre sur le consentement.

Il avait pris le stylo. Il avait écrit, à la suite du dernier paragraphe :

"Note personnelle pour la treizième version : la formulation actuelle contourne la question de l'information préalable. Il est possible que la question ne puisse pas être contournée. Il est possible que la doctrine telle qu'elle est construite actuellement ne puisse pas justifier l'absence d'information préalable sans se contredire dans ses fondements. Cette question doit être résolue avant que le texte soit utilisé pour préparer l'acte."

Il avait regardé ce qu'il venait d'écrire.

Puis il avait fermé le manuscrit — pas la treizième version, pas encore, il en avait besoin pour la réunion avec Razhal — et il avait sorti une feuille vierge.

Il allait répondre à Razhal. Pas ce soir. Demain, après une nuit à chercher comment formuler quelque chose qu'il n'avait pas encore trouvé comment dire.

Dehors, le désert d'Ash'Rael était noir et étoilé. Quelque part dans ce désert, deux cents familles vivaient sur une terre vivante que Saeved avait reconstituée à vingt-sept ans.

Il avait choisi. Drevorn en était presque sûr.

Presque.`.trim(),
};

export default lore;
