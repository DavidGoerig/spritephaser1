// ============================================================
//  PYRION — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 6 | Feu | Pyriens | Empire | Tireur
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [P] muté à Khar-Vurn après
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 6,
  nom: 'Pyrion',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Mètre quatre-vingts, allure administrative — un corps qui n'a pas été entraîné pour le combat mais pour les longues heures derrière un bureau. Il est en forme correcte parce que les mandats impériaux exigent une présentation correcte, pas par conviction personnelle.`,
    peau: `Rouge clair avec une teinte légèrement grisée — l'effet de vingt ans sous les éclairages artificiels des bureaux impériaux. Les Pyriens qui vivent dans la chaleur naturelle des forges ont une peau plus riche. Pyrion a passé vingt ans à compenser.`,
    yeux: `Ambre pâle, presque dorés. Regard d'analyste — il regarde les documents avec la même attention qu'il regarde les gens, ce qui fait qu'avec lui on n'est jamais sûr d'être vu.`,
    cheveux: `Brun-roux, soigneusement peignés. L'uniforme impérial inclut des standards de présentation. Pyrion les applique avec la même régularité qu'il applique tout le reste.`,
    vetements: `Uniforme impérial d'administrateur de zone — gris argenté avec les bordures bleu impérial, les insignes de son rang de Tier 3 sur l'épaule droite. Il ne porte pas d'arme de façon visible mais il est certifié Tireur et son holster de maintien de l'ordre est sous la veste.`,
    signes_particuliers: `Un registre de zone qu'il tient depuis seize ans — des carnets successifs, reliés de la même façon, rangés dans l'ordre chronologique dans son appartement de fonction. Ce n'est pas obligatoire ; il le fait parce que les données brutes dans les systèmes impériaux sont trop filtrées.`,
  },

  psychologie: {
    dominante: `Pyrion est pragmatique dans le sens le plus neutre du terme. Il a regardé les options disponibles dans sa vie et il a pris les meilleures en termes de sécurité, de stabilité et d'utilité. L'Empire lui offrait les trois. Il travaille bien dans ce cadre et il est honnête sur le fait que ce cadre le sert.`,
    contradictions: `Son travail consiste à administrer la zone de deuil de la Rupture Thermique — recenser les morts, gérer les indemnités, coordonner les reconstructions. Il voit les données réelles tous les jours. Il sait exactement combien de gens sont morts dans le Quatrième District et il sait que les délais de maintenance précédant la Rupture étaient documentés et ignorés. Il ne peut pas ne pas savoir ça. Il continue son travail avec cette information.`,
    peur: `Être muté hors de Khar-Vurn avant d'avoir terminé quelque chose qu'il n'a pas encore nommé. Une mutation serait une promotion. Il la reporte depuis deux ans.`,
    desir: `Comprendre exactement ce qui s'est passé dans la chaîne de commandement les trois mois précédant la Rupture. Pas pour faire quelque chose avec — il est réaliste sur ses capacités d'action. Mais il veut savoir.`,
    rapport_au_pouvoir: `Son Feu est longue portée et précis — un tireur d'élite thermal. Il ne fait pas de dégâts de zone. Il choisit des cibles et il les atteint avec une précision chirurgicale depuis des positions éloignées.`,
  },

  histoire: {
    origine: {
      titre: 'Fonctionnaire impérial',
      texte: `Pyrion est né à Néris dans une famille de fonctionnaires impériaux de troisième génération. Il n'a pas choisi l'Empire — il a grandi dedans, ses parents y étaient, le système lui semblait aussi naturel que la gravité. Il a suivi la formation standard, intégré l'administration régionale à vingt-deux ans, gravit les échelons avec régularité sans éclat particulier.

À trente-deux ans, il était administrateur de zone intermédiaire à la Citadelle du Voile quand la Rupture Thermique a eu lieu à Khar-Vurn. Khar-Vurn avait besoin d'administrateurs de crise. On l'y avait envoyé trois semaines après.`,
    },
    eveil: {
      titre: 'Seize ans dans la zone de deuil',
      texte: `Il était arrivé à Khar-Vurn pour une mission de trois mois. Il y était encore seize ans plus tard.

Les premiers mois, il avait géré les urgences : recenser les morts, coordonner les indemnités, superviser les premières reconstructions. Travail administratif de crise, intense mais défini. Après la crise, il avait été nommé administrateur de zone permanente — Khar-Vurn continuait à avoir besoin de coordination, et il était déjà en place.

Au fil des années, quelque chose s'était passé qu'il n'avait pas prévu : il était devenu la mémoire institutionnelle de la Rupture. Le seul fonctionnaire impérial qui avait les données de l'époque et les données actuelles et qui savait comment les deux se reliaient.`,
    },
    rupture: {
      titre: 'Les rapports de maintenance',
      texte: `Six ans après son arrivée à Khar-Vurn, Pyrion avait reconstitué un fait que les archives impérielles avaient mal classé : les quatre rapports d'anomalie de pression dans les conduits du Quatrième District, envoyés par des calibreurs thermiques dans les trois mois précédant la Rupture. Classés "en attente" par le superviseur de maintenance de l'époque — un poste financé par le Parti de l'Acier en sous-traitance impériale.

Le superviseur était mort dans la Rupture. La chaîne de responsabilité s'était arrêtée là.

Pyrion avait noté cette reconstitution dans son registre personnel. Pas dans les rapports officiels. Pas parce qu'on le lui avait demandé de ne pas le faire — simplement parce qu'il savait exactement à quel niveau de l'administration cette information aurait atterri et ce qu'on en aurait fait.`,
    },
    maintenant: {
      titre: 'Administrateur en suspens',
      texte: `Pyrion administre la zone de Khar-Vurn avec une efficacité que ses supérieurs trouvent satisfaisante. Il coordonne les inspections de maintenance post-reconstruction, il traite les demandes d'indemnité des familles encore en attente, il rédige les rapports de zone mensuels.

Ce qu'il ne dit pas dans ses rapports : les nouvelles constructions du Septième District ont été approuvées avec d'anciens standards. Il a vu les plans. Il a noté la discordance. Il n'a pas encore décidé ce qu'il allait faire de cette information.

Il a aussi noté que Cendrix (id:2) était en mission active à Khar-Vurn. Il la connaît de réputation — une Capteur sérieuse. Il se demande pourquoi la Citadelle envoie une Capteur dans une ville déjà sous sa propre administration.`,
    },
    objectif: {
      titre: 'Le compte qu\'il ne rend pas',
      texte: `Pyrion veut finir de reconstituer la chaîne de commandement précédant la Rupture. Il a quatre-vingt-sept pour cent de l'image. Les treize pour cent manquants sont dans des archives impériales qu'il n'a pas l'autorisation de consulter à son niveau. Il cherche un moyen d'y accéder légitimement — une demande de révision historique, peut-être, ou une connexion avec quelqu'un qui a accès. Il ne sait pas encore ce qu'il ferait de l'image complète.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Administrateur impérial de zone, seize ans à Khar-Vurn. A reconstitué la chaîne de maintenance précédant la Rupture. Garde cette information dans un registre personnel. Observe Cendrix avec une méfiance discrète.`,
  },

  relations: [
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'collègue_méfiant',
      depuis_ici: `Elle est venue dans ses locaux une fois pour un "accès aux archives de zone" — demande standard, traitement standard. Elle posait des questions légèrement au-delà du standard. Il a noté ça. Il ne sait pas si elle sait qu'il a noté ça. Il pense qu'elle le sait probablement.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 7,
      nom: 'Kael',
      type: 'source_indirecte',
      depuis_ici: `Kael est dans ses registres depuis seize ans — un forgeron du Quatrième District, survivant, témoin direct. Pyrion n'a jamais eu besoin de lui parler officiellement. Il sait où il est. Il garde ça comme information disponible si nécessaire.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 3,
      nom: 'Gravel',
      type: 'administré',
      depuis_ici: `Le fils de Drevahn, calibreur thermal du Quatrième District. Il est dans les archives — Drevahn est dans les archives, avec ses quatre rapports d'anomalie. Pyrion a vu Gravel parler dans des assemblées. Il comprend la colère de Gravel mieux que Gravel ne pense.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Pyrion combat depuis des positions élevées et distantes. Il est certifié Tireur thermal mais il n'aime pas les confrontations directes — pas par lâcheté, par calcul. Un tireur en position haute vaut trois combattants au sol.`,
    sorts: [
      {
        nom: 'Trait Thermique',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Pyrion projette un trait de chaleur concentré sur une cible à portée de 7 cases. Dégâts moyens, brûlure légère 2 tours. Dégâts augmentés de 25% si Pyrion est en position surélevée.`,
        description_lore: `Formation standard des Tireurs impériaux — précis, sans signature thermique visible à distance standard. Discret par design.`,
      },
      {
        nom: 'Calibrage de Zone',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Pyrion analyse le terrain dans un rayon de 5 cases. Il identifie les couvertures ennemies, les points de sortie et les cases de terrain instable. Pendant 3 tours, ses traits ignorent les bonus de couverture ennemie.`,
        description_lore: `Seize ans à analyser les systèmes de maintenance thermique lui ont donné un œil pour les structures — il voit les faiblesses avant de viser.`,
      },
      {
        nom: 'Suppression Thermique',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Pyrion inonde une zone de 2×2 cases de chaleur diffuse. Les ennemis dans la zone voient leur précision réduite de 30% et ne peuvent pas utiliser de sorts de longue portée pendant 2 tours.`,
        description_lore: `Développé pour les missions de maintien de l'ordre — neutraliser sans détruire.`,
      },
      {
        nom: 'Tir de Dossier',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Pyrion prépare un tir sur une cible marquée pendant un tour (elle doit rester en ligne de vue). Au second tour, il libère une frappe thermique qui ignore les boucliers et résistances. Si la cible est en état de brûlure, les dégâts sont doublés.`,
        description_lore: `Il l'a utilisé trois fois en seize ans de service. Chaque fois, il avait rédigé un rapport complet avant et après. Les rapports sont dans ses archives personnelles, pas dans les systèmes officiels.`,
      },
      {
        nom: 'Mémoire Institutionnelle',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura passive. Pyrion retient les patterns thermiques de chaque ennemi qu'il observe. Après 2 tours d'observation d'une unité, ses attaques contre elle gagnent +20% de précision et il prédit ses déplacements (voit ses 2 prochaines cases de mouvement). Cette mémoire se maintient jusqu'à la fin du combat.`,
        description_lore: `Seize ans de registres. Il ne perd pas les informations qu'il accumule.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Pyrion',
      description: `Homme Pyrien, 48 ans, allure administrative, peau rouge clair légèrement grisée. Yeux ambre pâle analytiques. Uniforme impérial gris-argenté avec bordures bleues. Expression neutre, concentrée — quelqu'un qui pense plus vite qu'il ne parle. Il tient son registre personnel sous le bras. Fond : bureau administratif avec vue sur Khar-Vurn. Style concept art Riot Games, éclairage artificiel froid.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

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

Peut-être.`.trim(),
};

export default lore;
