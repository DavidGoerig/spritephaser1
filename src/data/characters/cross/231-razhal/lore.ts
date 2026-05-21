// ============================================================
//  RAZHAL — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 231 | Sol/Combat | Peuples des Sables | Convergence | Vanguard
//  Arc : L'Avatar (Convergence) — Protocole d'Identification des 18 purs
//  Événements : Premier Drain [T enfant] — Saturation des Élus [T]
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 231,
  nom: 'Razhal',
  element: 'Sol',
  element2: 'Combat',
  espece: 'Peuples des Sables',
  region: "Ash'Rael",
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt-deux pour les Peuples des Sables — trop grand selon les standards du désert, ce qui lui a valu toute sa vie une attention qu'il n'a jamais cherchée. Sa masse est celle d'un combattant qui n'a pas arrêté de s'entraîner depuis l'âge de dix-huit ans : large, stable, économique dans chaque geste. À quarante-sept ans, sa stature est celle d'un homme qui a passé trente ans à se déplacer entre les zones de crise avec du matériel sur le dos.`,
    peau: `Brun-ocre profond, durci par les décennies de désert. Des cicatrices linéaires aux avant-bras — pas des blessures de combat, mais les traces d'un Drain qu'il a lui-même donné à vingt-trois ans. Il ne les couvre pas. Il s'en sert comme point de référence quand il parle aux candidats au volontariat.`,
    yeux: `Brun foncé, évaluateurs. Il regarde les personnes comme il regarde les terrains — en cherchant les points d'appui et les risques. Dans les assemblées de la Convergence, les gens qu'il regarde ont tendance à parler plus directement qu'ils ne l'auraient fait autrement.`,
    vetements: `Tenue de terrain standard Convergence, blanc et sable, avec les marques de contribution — dix-neuf triangles en argile cuite cousus aux coutures. Il porte son équipement de mesure élémentaire en bandoulière : des appareils de détection que la Convergence appelle "outils de cartographie" et qu'il utilise depuis dix-huit mois pour identifier des Élus dans les zones rurales.`,
    signes_particuliers: `Son élément Combat lui donne une qualité de présence dans l'espace que les autres perçoivent sans le formuler — une façon d'occuper exactement la place dont il a besoin, pas plus, et de savoir instinctivement où se placer dans n'importe quel contexte. Il ne l'utilise pas agressivement. C'est une économie de mouvement devenue réflexe.`,
  },

  psychologie: {
    dominante: `Razhal est le type de croyant que la Convergence produit à son meilleur : quelqu'un qui a vu le problème de près, a choisi une réponse active, et s'y tient depuis vingt-cinq ans sans romantisme excessif. Il croit dans la redistribution comme il croit dans la géologie — comme un fait du monde qui a des conséquences pratiques, pas comme une idéologie qui a besoin d'être défendue.`,
    contradictions: `Il a donné au Drain lui-même, trois sessions à vingt-trois ans, récupération complète. Cette expérience lui donne une légitimité qu'il utilise dans ses recrutements. Ce qu'il ne dit pas : ses trois sessions, il les a données dans des conditions de plein choix, sans famille à charge, sans pression externe identifiable. Il sait que ce n'est pas le contexte habituel des volontaires qu'il rencontre sur le terrain. Il ne sait pas encore comment réconcilier ça.`,
    peur: `Que ce qu'il construit — le réseau d'identification, les profils d'Élus, les protocoles — serve à quelque chose qu'il n'a pas approuvé. Il n'a pas de raison de croire ça. Mais depuis six mois, la quantité de demandes de profils "purs élémentaires" a augmenté d'une façon qui n'est pas proportionnelle aux besoins de redistribution ordinaires.`,
    desir: `Une zone de désert où aucun enfant ne meurt d'un déficit qu'on aurait pu prévenir. Il a vu ça arriver trop souvent. Il a consacré sa vie à en réduire la fréquence.`,
    rapport_au_pouvoir: `Solide. Il respecte les hiérarchies qui fonctionnent et les remet en question quand elles ne fonctionnent pas. Il a refusé trois demandes de Drain qu'il estimait ne pas avoir été formulées dans des conditions de choix réel. Il a écrit des rapports à chaque fois. Les rapports ont été reçus. Il n'a pas de retour sur leur impact.`,
  },

  histoire: {
    origine: {
      titre: 'Le Troisième Fils',
      texte: `Razhal est né dans un campement nomade à deux jours au nord des zones de Drain permanentes d'Ash'Rael, troisième fils d'une famille qui gérait les routes caravanières. Son enfance avait eu tout ce que ces enfants avaient — le mouvement constant, la mémoire géographique, la capacité à lire le sol comme un texte.

Quand il avait sept ans, une zone de déficit Sol avait progressivement englouti les pâturages de leur route habituelle. Sa famille avait mis trois ans à trouver une alternative. Pendant ces trois ans : deux morts dans les troupeaux, une saison de disette, une réorientation forcée de leur économie entière. La Convergence avait envoyé des Élus Sol deux fois — trop peu, trop tard.

Il n'avait pas rejoint la Convergence par gratitude. Il l'avait rejointe parce qu'il voulait que la prochaine famille qui perdait ses pâturages n'attende pas trois ans.`,
    },
    eveil: {
      titre: 'Ce Que Coûte le Don',
      texte: `Son élément Sol s'était révélé à dix-neuf ans, son élément Combat à vingt-et-un lors d'une confrontation avec des agents impériaux dans une zone de transit. La Convergence l'avait contacté avant l'Empire.

Il avait demandé à donner au Drain à vingt-trois ans. Pas sous pression — il avait voulu comprendre ce qu'il demandait aux autres de faire. Trois sessions sur six semaines, espacées de quinze jours chacune. Récupération : trois mois.

Ce qu'il avait retenu : ce n'est pas douloureux. C'est une diminution. Une réduction de quelque chose qu'on ne peut pas nommer mais dont on connaît la valeur quand elle manque. Et ça revient, si on attend assez longtemps.

Il avait décidé que c'était un coût acceptable dans les bonnes conditions. Il avait commencé à travailler sur ce que "les bonnes conditions" voulait dire. Il en était encore là, vingt-quatre ans plus tard.`,
    },
    rupture: {
      titre: 'Le Protocole d\'Identification',
      texte: `Le mandat lui avait été présenté dix-huit mois plus tôt comme une optimisation logistique : identifier les Élus "purs élémentaires" — ceux dont l'élément est non-hybride, à pleine capacité — pour calibrer plus précisément les besoins de redistribution par région.

Il avait accepté sans question. Le travail était précis, il était bon pour ça, et les zones en déficit avaient toujours besoin de meilleures données.

Six mois plus tard, il avait transmis un premier lot de profils. On lui avait répondu en lui demandant d'étendre la recherche à dix-sept éléments différents — tous les éléments principaux, un profil pur par élément. La demande était arrivée formulée comme une "couverture maximale."

Il avait commencé à compter. Dix-sept éléments. Dix-sept profils. La liste avait une forme. Et Razhal lisait les formes depuis toujours.`,
    },
    maintenant: {
      titre: 'Le Dix-Huitième Profil',
      texte: `Ce matin, il avait reçu une nouvelle demande : un dix-huitième profil. Élément Normal. Rare — les Élus Normal manifestent principalement à Isthme/Virex. Délai : six semaines.

Il n'avait pas répondu immédiatement. Il avait posé la demande sur la table et regardé sa liste des dix-sept profils déjà soumis.

Dix-huit éléments. Dix-huit Élus purs. Un de chaque élément du monde.

Il ne savait pas encore ce que c'était. Mais les données avaient une forme. Et la forme de cette liste ne ressemblait pas à de la logistique de redistribution.`,
    },
    objectif: {
      titre: 'La Question Qui N\'a Pas Encore de Réponse',
      texte: `Il va continuer à travailler. Pas par aveuglement — par méthode. Avant de tirer une conclusion, il vérifie. Avant de refuser, il comprend. C'est comme ça qu'il fonctionne depuis vingt-cinq ans.

La question qu'il n'a pas encore posée à voix haute : à quoi sert exactement un pur élémentaire de chacun des dix-huit éléments du monde, localisé et profilé ?

Il va poser cette question à Drevorn. Et selon la réponse — il décidera.`,
    },
    evenements_narratifs: ['Premier_Drain', 'Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Vanguard de terrain Convergence, Ash'Rael. Exécute le Protocole d'Identification — localisation et profilage des 18 purs élémentaires pour l'Avatar Total. Ne connaît pas l'objectif final. A reçu le 18e profil ce matin. La question se forme.`,
  },

  relations: [
    {
      personnage_id: 67,
      nom: 'Arev',
      type: 'collègue_de_réseau',
      depuis_ici: `Arev coordonne les zones pendant que lui identifie les profils. Ils travaillent dans des branches différentes du même réseau. Il lui fait confiance — ses registres sont les meilleurs qu'il ait vus. Il ne lui a pas parlé du Protocole d'Identification. Si quelqu'un devait regarder sa liste de dix-huit et lui dire ce qu'elle voit, ce serait elle.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 232,
      nom: 'Shiveth',
      type: 'partenaire_de_terrain',
      depuis_ici: `Shiveth l'accompagne sur les missions d'identification depuis neuf mois. Elle est efficace, discrète. Ses éléments Feu/Poison lui permettent de vérifier des signatures élémentaires que son propre Sol/Combat ne lit pas. Il lui fait confiance sur le terrain. Il ne lui a pas dit ce qui le trouble depuis six mois. Il ne sait pas encore si ça mérite d'être dit.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 233,
      nom: 'Drevorn',
      type: 'supérieur_doctrinal',
      depuis_ici: `Drevorn est celui qui lui a transmis la demande des dix-huit profils, formulée comme une "logistique de couverture maximale." Razhal respecte Drevorn — son histoire avec Saeved, sa constance sur quarante ans. Si quelqu'un dans la structure a les réponses à ses questions, c'est lui. Il n'est pas sûr de vouloir les réponses.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Razhal combat pour protéger les zones, pas pour gagner des confrontations. Son Sol crée des positions défensives, son Combat optimise l'occupation de ces positions. Il ne cherche pas à détruire — il cherche à stabiliser jusqu'à ce que la situation ne nécessite plus de violence.`,
    sorts: [
      {
        nom: 'Position Défensive',
        type: 'sort_de_base',
        elements: ['Sol', 'Combat'],
        description_gameplay: `Razhal ancre sa position. Pendant 2 tours, il ne peut pas être déplacé et les alliés adjacents reçoivent un bonus de résistance de 20%. Ses attaques infligent un malus de mouvement aux cibles pendant 1 tour.`,
        description_lore: `Vingt-cinq ans à sécuriser des zones de crise dans le désert. La position défensive n'est pas une tactique — c'est un réflexe. Il trouve toujours le point d'appui avant de penser à frapper.`,
      },
      {
        nom: 'Détection Élémentaire',
        type: 'sort_situationnel',
        elements: ['Sol'],
        description_gameplay: `Révèle les éléments de tous les ennemis dans un rayon de 4 cases. Les cibles dont l'élément est "pur" sont marquées — Razhal inflige +30% de dégâts contre elles pendant 2 tours.`,
        description_lore: `Le même sens qu'il utilise pour identifier les purs élémentaires dans le désert. En combat, ça lui montre les concentrations d'énergie brute — les points de fragilité des adversaires surentraînés dans un seul élément.`,
      },
      {
        nom: 'Frappe Fondatrice',
        type: 'sort_situationnel',
        elements: ['Combat', 'Sol'],
        description_gameplay: `Attaque lourde qui renverse la cible et crée un terrain stabilisé sur sa case. Les alliés qui occupent ce terrain récupèrent des PV à la fin de leur tour pendant 2 tours.`,
        description_lore: `Combat et Sol combinés — l'impact crée une zone stable, comme si le sol répondait à sa prise et consolidait autour d'elle.`,
      },
      {
        nom: 'Zone de Sécurité',
        type: 'ultimate',
        elements: ['Sol', 'Combat'],
        description_gameplay: `Razhal crée une zone de 3×3 cases de terrain fortifié pendant 4 tours. À l'intérieur : alliés avec vitesse doublée et soins +25%, ennemis avec mouvement -50%. Razhal ne peut pas sortir de la zone pendant la durée.`,
        description_lore: `Ce qu'il a appris à construire dans les zones de crise du désert : un périmètre où les gens peuvent souffler. Il construit ça en combat comme il le construisait dans les camps de coordination.`,
      },
      {
        nom: 'Lecture du Terrain',
        type: 'passif',
        elements: ['Sol'],
        description_gameplay: `Passif. Razhal anticipe les mouvements ennemis dans son rayon de vision — il les détecte 1 tour avant qu'ils agissent. Les effets de téléportation et déplacement forcé dans les 2 premières cases de son périmètre échouent automatiquement.`,
        description_lore: `Vingt-cinq ans à lire le désert. La façon dont le sol se compresse sous un poids avant qu'il arrive. Il n'a jamais été surpris sur son propre terrain.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Razhal',
      description: `Homme des Peuples des Sables, 47 ans, 1m82, large et stable. Peau brun-ocre durcie, cicatrices linéaires visibles aux avant-bras. Yeux brun foncé évaluateurs. Tenue de terrain blanche Convergence avec dix-neuf triangles de contribution en argile. Équipement de détection élémentaire en bandoulière. Expression calme, profesionnelle. Fond : camp de coordination au désert, architecture géométrique d'Ash'Rael. Style concept art Riot Games, lumière rasante de fin de journée.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

  lore_long: `LA LISTE DES DIX-HUIT
Un moment de la vie de Razhal, agent de terrain Convergence

—

I.

La demande était arrivée au matin, avant que Razhal ait eu le temps de faire du thé.

Profil 18. Élément : Normal. Région prioritaire : Isthme / Virex. Délai de transmission : six semaines.

Il l'avait lue deux fois. Puis il avait fait son thé.

—

II.

Le camp de coordination du plateau Sûk était debout depuis deux semaines — tentes blanches disposées en grille, lignes de communication tendues, réserves d'eau calculées pour quarante personnes sur trente jours. Razhal l'avait installé lui-même avec son équipe de six. C'était le quatrième camp de ce type qu'il montait en dix-huit mois de mission d'Identification.

Les camps avaient une logique. On arrivait dans une zone, on évaluait les Élus locaux, on transmettait les profils, on démontait. Propre. Efficace. Cohérent avec ce qu'il avait fait toute sa vie — identifier ce qui existait pour calibrer la redistribution.

Ce matin, il avait dix-sept profils transmis. Dix-sept éléments différents, un pur chacun.

Il avait sorti la liste de son registre et l'avait étalée sur la table.

Sol. Roche. Feu. Glace. Eau. Plante. Ténèbres. Électrique. Vent. Psy. Poison. Spectre. Combat. Gravité. Nuée. Dragon. Stellaire.

Et maintenant Normal, pour compléter.

Il n'avait pas besoin de compter. Dix-sept éléments principaux dans le monde, plus Normal pour les Hommes-Liens capables de le manifester. Dix-huit au total.

—

III.

Il avait donné au Drain à vingt-trois ans. Trois sessions, six semaines, récupération complète.

Ce dont il se souvenait le mieux : pas la diminution elle-même, mais le fait d'avoir choisi. Il avait marché jusqu'au centre de coordination avec ses propres jambes, il s'était assis de son propre gré, il avait signé le formulaire sans pression identifiable. Aucun membre de sa famille dans un programme d'aide alimentaire. Aucune dette sociale. Juste une décision qu'il avait prise.

Il avait trouvé ça important. Il l'avait ensuite cherché chez les autres — cette qualité spécifique de choix libre qui transforme un Drain en quelque chose d'autre qu'une extraction.

Chez certains, il l'avait trouvé. Chez d'autres, la question était plus compliquée. Il continuait à noter la différence, dans un registre qu'il gardait pour lui.

—

IV.

"La demande de ce matin," dit-il à Shiveth quand elle arriva dans la tente de coordination, "c'est le dix-huitième profil."

Shiveth était en tenue de terrain, les cheveux relevés contre la chaleur. Elle s'était assise en face de lui et avait regardé la liste étalée sur la table.

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

Ce dont il se souvenait : l'atmosphère dans le camp de sa famille, le soir où la nouvelle était arrivée. Sa mère qui ne disait rien. Son père qui avait sorti une bouteille de quelque chose de fort et en avait bu un verre en silence. Les adultes qui parlaient à voix basse d'une façon qui indiquait que quelque chose de grand s'était passé — quelque chose qui avait un nom, quelque chose qui avait des conséquences.

Il avait appris le nom plus tard. Premier Drain. Volontaire. Saeved avait choisi.

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

Il avait juste besoin de savoir si ce qu'il pensait qu'elle signifiait était vrai.`.trim(),
};

export default lore;
