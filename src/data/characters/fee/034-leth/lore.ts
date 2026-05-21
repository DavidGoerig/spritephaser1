// ============================================================
//  LETH — Lore complet (Fées · Arc L'Héritage Brûlé)
//  id: 34 | Fée | Sylvans | Gardiens | Gardien
//  Arc : L'Héritage Brûlé
//  Événements : Faim des Racines [T] — 400 ans vieille selon les chants
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 34,
  nom: 'Leth',
  element: 'Fée',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Gardiens',

  apparence: {
    taille_corpulence: `Grand même pour un Sylvan — deux mètres dix, mais courbé par l'âge au point d'approcher deux mètres. La courbure n'est pas de faiblesse mais d'enracinement : chaque décennie a ajouté une légère flexion à sa colonne, comme un arbre qui pousse vers la lumière depuis plusieurs siècles. Son poids est anormalement faible pour sa taille — les Sylvans deviennent légers avec l'âge, comme si les os se substituaient progressivement au bois.`,
    peau: `Acajou profond avec des sous-tons dorés — la teinte d'un bois de cœur ancien. Les plaques d'écorce couvrent maintenant les deux tiers de ses avant-bras, la totalité de sa colonne dorsale et une bonne partie de ses épaules. Ces plaques ne sont pas uniformes : elles portent des motifs qui, à distance, ressemblent à des inscriptions. De près, on voit que ce sont les traces de sa propre vie — des chemins créés par les flux féeriques qui ont traversé son corps pendant quatre siècles.`,
    yeux: `Vert forêt profond avec une luminescence biologique faible — les yeux d'un Sylvan ancien brillent d'un vert pâle dans l'obscurité. Dans son cas, la luminescence est constante même en plein jour : une clarté tranquille qui fait que les autres évitent parfois de croiser son regard. Pas parce qu'il est menaçant. Parce qu'ils sentent qu'ils regardent quelque chose de très vieux.`,
    cheveux: `Blancs depuis deux siècles — non pas la blancheur des vieux non-Élus mais le blanc-vert pâle d'un lichen ancien. Très longs, attachés en arrière. Les fils végétaux qui y poussent naturellement sont désormais devenus eux-mêmes vieux : certains ont des bifurcations, des nœuds. Il ne les coupe jamais.`,
    vetements: `Des couches de tissu végétal usées mais intactes — la même esthétique Gardien que tout le monde, mais les siennes ont des décennies de brûlis contrôlés incrustés dans les fibres. Les couleurs ont convergé vers un brun-gris uniforme que le lavage n'affecte plus.`,
    signes_particuliers: `Son élément Fée se manifeste différemment que chez la plupart : autour de lui, les coïncidences cessent. Rien ne tombe pile, rien n'arrive par hasard. Les événements ont l'air de se placer soigneusement, comme si le monde faisait attention en sa présence. Les Gardiens qui travaillent avec lui depuis longtemps appellent ça "l'œil de Leth" — la sensation que les brûlis contrôlés qu'il supervise ne produisent jamais d'accident.`,
  },

  psychologie: {
    dominante: `Leth a eu quatre cents ans pour apprendre la différence entre ce qu'il vaut la peine de dire et ce qu'il vaut la peine de garder. Le résultat est un silence qui dérange — pas parce qu'il refuse de parler, mais parce que quand il parle, il a manifestement déjà pesé dix versions de ce qu'il aurait pu dire et a choisi la plus précise.`,
    contradictions: `Il croit profondément au renouvellement par le feu. Il a rejoint les Gardiens parce qu'il avait vu ce qui arrive quand rien ne brûle et que tout pousse — la Faim des Racines. Et pourtant, il est aussi la mémoire vivante de ce que la forêt était avant. Il sait ce que les brûlis détruisent. Il le sait mieux que quiconque.`,
    peur: `Que sa mémoire soit la seule version qui reste. Il a vu des arbres-mémoire détruits par la Faim. Certains contenaient des chants que personne ne chante plus. Si lui disparaît, personne ne saura ce qu'il sait. Et il ne peut pas tout transmettre — certaines choses ne se transmettent pas, elles se vivent.`,
    desir: `Voir la forêt retrouver ce qu'elle était. Pas identique — il sait que c'est impossible. Mais fonctionnelle : les réseaux de racines conscients qui parlaient entre eux, la mémoire distribuée qui permettait à un arbre de l'est de connaître une sécheresse à l'ouest. Cela n'existe plus, ou presque. Il veut que ça revienne.`,
    rapport_au_pouvoir: `Il perçoit les lignes du Calendrier des Fées depuis qu'elles ont été imposées, il y a plus de deux siècles. Il n'en a pas besoin pour naviguer l'élément Fée — il l'avait avant. Cette précédence lui confère une indépendance que la Citadelle n'a jamais su comment gérer : ils ont besoin de ce qu'il sait, ils ne peuvent pas le forcer à le partager.`,
  },

  histoire: {
    origine: {
      titre: 'Avant le Calendrier',
      texte: `Leth est né dans une forêt qui n'existe plus telle qu'elle était. La Sylvera d'il y a quatre cents ans avait un réseau de racines conscientes si dense qu'on pouvait, avec un peu de sensibilité élémentaire, entendre la forêt entière respirer. Pas métaphoriquement — les Élus Plante de l'époque percevaient les transmissions racinaires comme des sons bas, des vibrations continues, un chant sans début ni fin.

Il est né dans une famille de Gardiens — à l'époque le terme n'existait pas, mais le rôle oui : des Sylvans qui géraient les espaces de renouvellement, les clairières brûlées pour permettre la repousse des espèces lumineuses, les zones de transition entre forêt ancienne et forêt jeune. Ce n'était pas une faction politique. C'était un métier.

Son élément Fée s'est manifesté à vingt ans, dans une clairière après un brûlis contrôlé. Ce n'était pas attendu — les Sylvans ont surtout des éléments Plante. Mais le Fée existait dans certaines lignées, porteur d'une façon différente de percevoir les liens. Où la Plante sent les racines, la Fée sent les probabilités.`,
    },
    eveil: {
      titre: 'La Faim',
      texte: `Il avait quarante ans quand la Faim des Racines a commencé. Il l'a vu arriver — c'est ce qui lui a pris le plus longtemps à accepter. Son élément Fée lui montrait les déséquilibres dans les flux, les endroits où la croissance s'emballait sans régulation naturelle. Il avait vu des zones de forêt commencer à consommer leurs propres ressources racinaires, les réseaux de communication racinaire court-circuitant et se mangeant eux-mêmes.

Il avait parlé. Les Gardiens de l'époque l'avaient écouté sans le comprendre entièrement. Les Conservateurs — qui existaient déjà, sous d'autres noms — l'avaient ignoré. Personne ne coupe des arbres qui sont vivants. Personne ne brûle de la forêt consciente par précaution.

Quand la Faim a commencé à détruire les arbres-mémoire, Leth était dans la zone nord-est. Il a mémorisé ce qu'il pouvait des chants qui s'y trouvaient. Certains les racines transmettaient encore pendant les premières heures de la destruction. Il les a absorbés directement, son élément Fée les stockant quelque part dans sa propre structure. Il ne sait pas exactement ce qu'il a gardé. Il n'a jamais pu le retrouver complètement.`,
    },
    rupture: {
      titre: 'Les cents premières années',
      texte: `Les cent ans après la Faim ont été les plus difficiles. Pas à cause du deuil — il a fait son deuil. À cause de la reconstruction narrative. Tout le monde avait une explication de la Faim, et la plupart de ces explications effaçaient des causes réelles au profit de causes acceptables.

Les Conservateurs ont conclu que c'était le résultat de trop de brûlis. Les Gardiens ont conclu que c'était le résultat de pas assez. L'Empire — qui commençait à s'établir pendant cette période — a conclu que c'était la preuve que la forêt ne pouvait pas se gérer seule et que le Calendrier des Fées était nécessaire.

Leth savait que les trois versions contenaient quelque chose de vrai et aucune n'était complète. Il a commencé à garder ses propres archives — pas dans des arbres, dans lui-même. Son élément Fée lui permettait de stocker des probabilités observées, des schémas répétés, des connexions entre événements distants. Il est devenu archive vivante malgré lui.`,
    },
    maintenant: {
      titre: 'Ce que Leth'Var ne sait pas',
      texte: `Quatre cents ans plus tard, il supervise les brûlis contrôlés dans le secteur est de Leth'Var. Les Gardiens le considèrent comme fondateur de leur doctrine — il leur rappelle poliment que la doctrine existait avant lui sous un autre nom. Les Conservateurs le considèrent comme un adversaire. Il leur dit qu'ils préservent des choses qui méritent d'être préservées et qu'il ferait pareil s'il n'avait pas vu ce qui arrive quand rien ne brûle.

L'Agente impériale Aeris (id:35) vient le voir tous les trois mois, régulière comme les saisons. Elle veut des informations sur les arbres-mémoire qui contiennent des archives pré-Calendrier. Il lui donne assez pour qu'elle revienne. Pas assez pour qu'elle n'ait plus besoin de lui.

Ce qu'il n'a dit à personne : il sait, depuis cinquante ans, que quelque chose dans la Citadelle du Voile est instable. Il l'a perçu à travers les lignes du Calendrier — une dissonance dans les flux, petite mais persistante. Il ne sait pas si c'est lié au Champ Gelé du nord, à la Fosse du sud, ou à quelque chose d'entièrement différent. Il continue à observer.`,
    },
    objectif: {
      titre: 'Transmettre sans trahir',
      texte: `Leth ne cherche pas la postérité. Il cherche à transmettre ce qu'il sait à quelqu'un qui saura quoi en faire — pas simplement le stocker, mais l'utiliser pour comprendre ce qui arrive maintenant.

Le problème est qu'il n'a pas encore trouvé cette personne. Les Gardiens veulent ses connaissances pour justifier leur doctrine. Les Conservateurs veulent ses souvenirs pour enrichir leurs archives. L'Empire veut son accès aux lignes pré-Calendrier. Personne ne lui a demandé ce qu'il pense que ça veut dire, ce qu'il a vu.

Il attend. Quatre cents ans lui ont appris que les bonnes personnes arrivent. En général après que tout le monde d'autre a échoué.`,
    },
    evenements_narratifs: ['Faim_des_Racines'],
    arcs: ['L_Heritage_Brule'],
    position_dans_arc: `Témoin vivant de la Faim des Racines. Archive vivante du monde pré-Calendrier. Supervise les brûlis contrôlés dans le secteur est de Leth'Var. Connaît des informations que ni les Conservateurs, ni les Gardiens, ni l'Empire ne possèdent entièrement. Observe une dissonance dans les lignes du Calendrier depuis cinquante ans.`,
  },

  relations: [
    {
      personnage_id: 31,
      nom: 'Sylvae',
      type: 'adversaire_respectée',
      depuis_ici: `Sylvae est Conservatrice. Elle préserve des arbres-mémoire que Leth a regardé pousser. Il comprend pourquoi elle préserve — il a regardé d'autres de ces arbres être détruits. Ce qu'il ne lui a pas dit : certaines des archives qu'elle protège contiennent des informations que la Citadelle cherche depuis des décennies. Il surveille pour savoir quand elle en prendra conscience. Quand ce sera le cas, elle aura besoin d'aide pour décider quoi en faire.`,
      arc_commun: 'L_Heritage_Brule',
      statut: 'latent',
    },
    {
      personnage_id: 36,
      nom: 'Krath',
      type: 'membre_difficile',
      depuis_ici: `Krath brûle ses propres archives pour "rester libre". Leth ne l'en empêche pas — c'est son droit, et la doctrine des Gardiens inclut la liberté de choisir ce qui mérite de survivre. Ce qui le préoccupe : Krath ne comprend pas encore que certaines choses ne se retrouvent pas une fois perdues. Il n'a pas vu la Faim. Il brûle comme si brûler était gratuit.`,
      arc_commun: 'L_Heritage_Brule',
      statut: 'actif',
    },
    {
      personnage_id: 35,
      nom: 'Aeris',
      type: 'interlocutrice_régulière',
      depuis_ici: `Aeris est l'agente que l'Empire envoie à Leth'Var depuis vingt ans. Elle est compétente, discrète, et elle a renoncé depuis longtemps à le manipuler directement. Leurs réunions sont presque cordiales. Elle lui pose des questions précises. Il répond à côté — assez pour qu'elle ait quelque chose à rapporter, pas assez pour qu'elle ait ce qu'elle cherche vraiment. Elle le sait. Il le sait. C'est leur équilibre depuis deux décennies.`,
      arc_commun: 'L_Heritage_Brule',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Leth ne combat pas — il reconfigure l'espace du combat. Son élément Fée lui donne une perception des probabilités que quatre siècles d'expérience ont transformée en précision chirurgicale. Il n'empêche pas les choses d'arriver. Il tilt légèrement ce qui va arriver. Dans une bataille, ça ressemble à des coïncidences qui bénéficient systématiquement aux siens.`,
    sorts: [
      {
        nom: 'Ligne de Probabilité',
        type: 'sort_de_base',
        elements: ['Fée'],
        description_gameplay: `Leth perçoit le flux du combat et trace une ligne de probable sur le terrain. Une zone de 3 cases voit ses probabilités d'événement altérées : les coups critiques ennemis y deviennent normaux, les esquives alliées y deviennent critiques. Durée : 2 tours. Passif : chaque fois que la probabilité favorise un allié dans la zone, Leth récupère 5% de ses ressources.`,
        description_lore: `Pendant la Faim des Racines, il avait utilisé ça pour guider les équipes de sauvetage vers les arbres-mémoire encore récupérables. Pas en cherchant — en regardant où les probabilités de trouver quelque chose de vivant étaient les moins mauvaises.`,
      },
      {
        nom: 'Brûlis Contrôlé',
        type: 'sort_situationnel',
        elements: ['Fée', 'Plante'],
        description_gameplay: `Leth initie un feu de probabilité sur une zone de 2×2 cases — une énergie féerique qui consume les connexions défavorables. Les ennemis dans la zone perdent leurs bonus passifs pour 3 tours. Les alliés dans la zone voient leurs cooldowns réduits de 1. Le feu ne se propage pas.`,
        description_lore: `La métaphore du brûlis contrôlé traduite en élément. Détruire les connexions qui étouffent pour permettre aux bonnes de croître. Il l'utilise rarement — seulement quand la situation est vraiment bloquée.`,
      },
      {
        nom: 'Mémoire Racinaire',
        type: 'sort_situationnel',
        elements: ['Fée'],
        description_gameplay: `Leth accède à un schéma mémorisé et l'applique au terrain. Les alliés dans un rayon de 4 cases voient leurs déplacements de ce tour guider par les probabilités optimales — ils évitent automatiquement le premier dégât qu'ils auraient subi ce tour. Temps de recharge : 3 tours.`,
        description_lore: `Il a stocké des milliers de schémas de combat dans sa mémoire féerique au fil des siècles. Un incident de 200 ans correspond souvent à quelque chose qui se passe maintenant. La forêt répète ses motifs.`,
      },
      {
        nom: 'Le Témoin',
        type: 'ultimate',
        elements: ['Fée'],
        description_gameplay: `Leth s'immobilise et "voit" l'ensemble du combat. Pendant 2 tours, tous les dés sont consultés par lui avant de tomber — il peut annuler un dégât critique par tour, rediriger une cible d'attaque ennemie une fois, et garantir un coup allié. Pendant ces 2 tours, il ne peut ni se déplacer ni attaquer.`,
        description_lore: `Ce n'est pas une technique apprise. C'est quatre siècles d'observation compressés dans deux tours de combat. Il ne l'utilise que quand il juge que la situation en vaut le coût de son immobilité.`,
      },
      {
        nom: 'Longévité',
        type: 'passif',
        elements: ['Fée'],
        description_gameplay: `Passif permanent. Leth est immunisé aux effets de peur et de confusion — il a vu trop de choses pour être surpris efficacement. Quand un allié adjacent tombe sous 30% de PV, Leth lui transfère 15% de sa propre défense pour 2 tours.`,
        description_lore: `Quatre cents ans. On ne panique plus après quatre cents ans. Ce n'est pas de la sagesse — c'est juste que les menaces ont une taille relative que l'âge calibre correctement.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Leth',
      description: `Sylvan masculin, 400 ans, deux mètres courbé à environ deux mètres. Peau acajou profond avec plaques d'écorce aux avant-bras et épaules portant des motifs anciens. Yeux vert forêt avec luminescence biologique visible. Cheveux blanc-vert pâle très longs, attachés, avec des fils végétaux et de petites feuilles anciennes intégrés. Vêtements Gardien brun-gris portés pendant des décennies. Expression tranquille et très vieille — quelqu'un qui attend que les autres rattrapent leur retard. Fond : clairière de Leth'Var après un brûlis contrôlé, repousse verte commençant dans les cendres. Style concept art Riot Games, tons verts et brun-acajou.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1500,

  lore_long: `L'ŒIL DU BRÛLIS
Un chapitre de la vie de Leth, Gardien de Leth'Var (400 ans)

—

I.

Le feu avait pris trop à l'est.

Leth le vit dans les probabilités avant de le voir dans la fumée — une tension dans les flux, comme un fil tiré trop fort. Krath avait déclenché le brûlis du secteur sept en même temps que celui du secteur cinq, contrairement au protocole qui demandait trois jours de décalage. Krath pensait que l'efficacité primait. Krath avait trente ans.

Leth n'était pas en colère. La colère était une dépense qu'il avait appris à budgéter soigneusement.

Il s'appuya sur son bâton et observa les deux colonnes de fumée qui montaient vers un ciel sans vent. Les Gardiens du secteur sept attendaient ses ordres. Il leur dit : — Ouvrez le couloir nord entre les deux feux. Pas de coupe — juste l'accès.

Ils le regardèrent sans comprendre. Le couloir nord était de la forêt ancienne. Personne n'y entrait pendant un brûlis.

— Si vous n'ouvrez pas le couloir, dit-il, le vent du sud-est se lèvera dans deux heures et les deux feux fusionneront. Alors ce ne sera plus un brûlis contrôlé.

Ils ouvrirent le couloir.

—

II.

Krath arriva en fin d'après-midi, la mâchoire tendue.

— Tu as sabordé mon calendrier de brûlis.

— J'ai évité une fusion de feux.

— Il n'y aurait pas eu de fusion. Les conditions météo étaient—

— Le vent du sud-est s'est levé à la deuxième heure, dit Leth. Comme prévu.

Krath se tut. La fumée du secteur sept s'était effectivement redirigée dans le couloir et s'était dissipée sans incident. Les deux brûlis avaient consumé ce qu'ils devaient consumer et s'étaient éteints dans les délais prévus.

— Comment tu savais ?

Leth réfléchit à comment répondre à ça. Il y avait des dizaines de façons vraies. La plupart n'apprenaient rien à Krath.

— J'ai vu ce schéma, dit-il finalement. Pas ce mois-ci.

—

III.

Il avait vu ce schéma la première fois pendant la Faim des Racines. Pas la même configuration exactement — la Faim était d'une autre nature que des feux de brûlis — mais la même logique. Des processus lancés trop proches les uns des autres, qui n'auraient posé aucun problème séparément, et dont la combinaison créait une dynamique que personne n'avait anticipée.

Il avait alors quarante ans. Il était déjà Gardien mais pas encore ce que les gens appelaient maintenant "Leth". Il était juste quelqu'un qui voyait les probabilités et les trouvait inquiétantes.

Il avait dit à son supérieur de l'époque : les zones nord-est et sud-ouest consomment leurs propres nutriments racinaires plus vite qu'ils ne les régénèrent. Si on ne crée pas des coupes de régulation dans les six mois, le réseau va s'emballer.

Son supérieur avait dit : les Conservateurs s'y opposeront.

Il avait dit : les Conservateurs n'ont pas à approuver la physique des racines.

Les coupes n'avaient pas été faites. Six mois plus tard, la Faim avait commencé. Elle avait duré dix-sept ans.

Leth avait mémorisé les chants que les arbres-mémoire transmettaient dans leurs dernières heures. Des milliers de chants. Il ne savait pas ce qu'il en avait réellement retenu — certains se manifestaient parfois quand il observait quelque chose de similaire, des fragments de pattern, des écos d'un monde antérieur.

Il n'en parlait pas. La plupart des gens n'avaient pas les outils pour comprendre ce qu'il avait stocké. Et ceux qui avaient ces outils travaillaient pour la Citadelle.

—

IV.

Le soir, Aeris passa comme elle passait tous les trois mois.

Elle s'assit sans cérémonie de l'autre côté de son feu de camp. Elle était la meilleure agente que la Citadelle avait envoyée — la troisième en vingt ans, et la seule qui avait renoncé à la manipulation directe au profit de quelque chose ressemblant à de la conversation réelle.

— Les archives du secteur dix-neuf, dit-elle. Tu les as consultées ce mois-ci.

— J'y ai passé une matinée.

— Les archives de la période pré-Calendrier de ce secteur contiennent des fragments de chants de la Faim.

— Plusieurs secteurs en contiennent. C'est documenté.

— Ces fragments mentionnent des interventions Fée pendant la Faim. Des interventions que les archives officielles ne tracent pas.

Leth regarda le feu. Il avait une douzaine de réponses vraies disponibles. Il en choisit une.

— Les Fées avaient des Élus à Sylvera pendant la Faim. C'est documenté aussi.

— Leur rôle n'est pas documenté.

— Non.

Le silence s'installa. Aeris attendait. Elle était bonne à attendre.

— Je peux te dire que j'étais présent pendant une de ces interventions, dit Leth. Et que ce que j'ai observé ne correspond pas à la version que la Citadelle archiverait.

— C'est précisément ce que je cherche.

— Je sais.

Il prit une branche et alimenta le feu. Aeris le regardait faire.

— Tu ne me le diras pas ce soir.

— Non.

— Pourquoi ?

Il réfléchit à la vérité complète de cette question, puis choisit la partie qu'elle pourrait utiliser.

— Parce que la prochaine fois que tu viendras, la situation aura changé. Et ce que je te dirai sera plus utile dans ce contexte-là que dans celui-ci.

Aeris regarda le feu un moment, puis se leva.

— Dans trois mois, dit-elle.

— Dans trois mois.

Il l'entendit partir dans la forêt. Il resta assis devant son feu et sentit, dans les lignes du Calendrier, la dissonance qu'il observait depuis cinquante ans. Elle s'était légèrement intensifiée ce mois-ci. Quelque chose dans le nord gelé avait bougé.

Il nota mentalement de surveiller les rapports d'Iskral. La forêt répétait ses motifs. Et les motifs qu'il reconnaissait dans ce nord-là, il les avait déjà vus.

Il les avait vus commencer trois ans avant la Faim des Racines.`.trim(),
};

export default lore;
