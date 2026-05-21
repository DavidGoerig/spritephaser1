// ============================================================
//  SYLVIEL — Lore complet (D18 · Empire · Arc L'Avatar)
//  id: 246 | Fée/Psy | Fées | Empire | Spécialiste
//  Arc : L'Avatar (Citadelle du Voile — intérieur Empire)
//  Rôle : Liseuse de vérité du Calendrier — perçoit les vérités partielles
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 246,
  nom: 'Sylviel',
  element: 'Fée',
  element2: 'Psy',
  espece: 'Fées',
  region: 'Citadelle du Voile',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Un mètre cinquante-neuf, la stature habituelle des Fées de la Citadelle. Sylviel a les ailes vestigiales complètes — deux appendices de soixante-cinq centimètres qui restent pliés contre son dos en permanence, canalisent les flux élémentaires et sont exactement à la limite de ce que permet l'uniforme administratif sans modification. Elle ne les déploie jamais en public.`,
    peau: `Blanc-doré translucide, la teinte standard des Fées de vieilles lignées. Une luminescence interne douce, plus perceptible dans l'obscurité que dans la lumière du jour. Les veines sous sa peau suivent des tracés plus complexes que l'anatomie normale — caractéristique des Fées dont l'élément est particulièrement actif.`,
    yeux: `Ce qui la distingue : ses yeux changent de teinte selon ce qu'elle perçoit — vert pâle en état neutre, bleu-gris quand elle lit des lignes du Calendrier, un éclat or fugace quand elle détecte un écart entre ce qu'une personne dit et ce qu'elle ressent. Elle a appris à contrôler sa propre réaction faciale pour que personne ne sache précisément quand cet éclat se produit.`,
    vetements: `Uniforme administratif de la Citadelle — plusieurs couches de tissu fonctionnel, sans ornementation, conçu pour ne pas interférer avec la lecture des lignes. Une broche en cristal au col, standard pour les spécialistes du Calendrier. Ses cheveux, blanc-or très pâle et fins comme tous les Fées, sont relevés et tenus par des épingles pratiques, pas décoratives.`,
    signes_particuliers: `Elle ne touche pas les personnes qu'elle doit lire officiellement. Cette règle est connue et respectée dans son département. Ce que personne ne sait : elle se force à ne pas lire les personnes qu'elle côtoie régulièrement — ses collègues, les gardes, ses supérieures. Ce n'est pas de la règle professionnelle. C'est de la protection psychologique. Savoir trop serait difficile à dénouer.`,
  },

  psychologie: {
    dominante: `Sylviel croit dans le Voile d'Équité. Pas naïvement — elle connaît les compromis de l'administration impériale, les décisions difficiles, les arbitrages entre stabilité et justice individuelle. Elle croit que ces compromis sont faits par des personnes qui cherchent l'équilibre, même quand elles le manquent. Elle travaille dans ce cadre depuis vingt-six ans et elle y trouve du sens.`,
    contradictions: `Son travail consiste à détecter les écarts entre ce que les gens disent et ce qu'ils ressentent. Elle fait ça avec des supplicants, des pétitionnaires, des Élus qui contestent leur redistribution. Elle ne l'a jamais fait avec une supérieure Fée. Cette asymétrie lui semble normale — une question de hiérarchie et de confiance institutionnelle. Quand elle se l'explique à elle-même, c'est la formulation qu'elle utilise.`,
    peur: `Sentir quelque chose qu'elle ne peut pas cadrer dans la confiance institutionnelle et ne pas savoir quoi en faire. Elle a cette sensation depuis trois mois. Elle l'a classifiée comme "anomalie administrative en cours d'interprétation."`,
    desir: `Faire son travail bien. Elle y trouve une satisfaction réelle — aider les pétitionnaires à s'exprimer clairement, faciliter les décisions du Calendrier avec des informations précises sur les états réels des personnes concernées.`,
    rapport_au_pouvoir: `Loyale à l'institution. Pas aveuglément — elle a refusé deux demandes de lecture qui lui semblaient déborder de son mandat légal. Elle a documenté ces refus. Les refus ont été acceptés. Ça lui donne confiance dans le système.`,
  },

  histoire: {
    origine: {
      titre: 'La Spécialiste du Calendrier',
      texte: `Sylviel est entrée à la Citadelle du Voile à dix-huit ans, après que ses éléments combinés Fée/Psy avaient été identifiés comme particulièrement utiles pour le travail de lecture des lignes. La combinaison était rare — le Fée pour lire les flux élémentaires probabilistes, le Psy pour lire les états émotionnels. Ensemble : une capacité à évaluer si ce qu'une personne dit de son état élémentaire correspond à ce que son corps et son état émotionnel confirment.

La Citadelle en avait besoin pour les sessions d'arbitrage du Calendrier — les moments où des Élus contestent leur redistribution, des régions demandent des exceptions, des familles plaident pour que leurs enfants Élus ne soient pas déplacés. Ces demandes nécessitaient quelqu'un capable de dire si la personne devant le comité était honnête sur son état.

Sylviel était douée. Elle l'est restée pendant vingt-six ans.`,
    },
    eveil: {
      titre: 'La Valeur de Ce Qu\'Elle Perçoit',
      texte: `À vingt-quatre ans, elle avait compris la valeur réelle de son travail lors d'une session d'arbitrage concernant un Élu Feu de Varkhôl qui prétendait que sa redistribution vers l'est était médicalement contre-indiquée. Sa lecture avait montré que l'Élu disait vrai — pas l'état médical qu'il décrivait, mais la peur réelle sous-jacente que Sylviel avait perçue ne correspondait pas à ce qu'un simulateur aurait produit. Elle avait recommandé un ajournement pour évaluation médicale indépendante. L'évaluation avait confirmé sa lecture.

L'Élu avait pu rester. Elle avait compris ce que ça voulait dire — que sa précision avait un impact réel sur des vies réelles.

Elle travaillait avec cette conscience depuis lors.`,
    },
    rupture: {
      titre: 'L\'Anomalie de Trois Mois',
      texte: `Il y avait trois mois, elle se trouvait dans un couloir annexe de l'aile administrative quand elle avait croisé, sans le prévoir, la session de travail du comité de modification du Calendrier. Elle n'était pas censée être là — elle avait pris un raccourci pour éviter un couloir en rénovation.

Les portes du comité étaient entrouvertes de quelques centimètres. Elle avait perçu — pas entendu, perçu — l'état émotionnel d'une présentation en cours. Ce qu'elle avait capté : une administratrice Fée de haut rang, dans un état de sélection active. Pas de mensonge — Sylviel ne percevait pas les mensonges directement, mais les émotion associées à la malhonnêteté. Ce qu'elle avait perçu était plus précis et plus inconfortable : une personne qui choisissait délibérément quelles vérités présenter et dans quel ordre, de façon à créer une conclusion dans l'esprit des auditeurs qu'une présentation complète n'aurait pas produite.

Ce n'était pas illégal. Ce n'était pas du mensonge. C'était de la gestion de l'information.

Elle avait classifié ça comme "anomalie administrative en cours d'interprétation" et avait continué à marcher.`,
    },
    maintenant: {
      titre: 'Ce Qu\'Elle Ne Lit Pas',
      texte: `Elle côtoie Varek tous les jours — le garde à l'entrée de l'aile où elle travaille. Elle côtoie Eiravel — une administratrice Calendrier dans son département. Elle ne les lit pas. Elle s'est imposé cette règle depuis le début.

Certains jours, la règle est facile à tenir. D'autres jours, son Psy capte quelque chose dans les périphéries de sa perception — une tension dans la posture d'Eiravel, une qualité d'attention dans le regard de Varek — et elle doit activement détourner sa perception.

L'anomalie de trois mois est toujours classifiée comme "en cours d'interprétation." Elle n'a pas encore décidé ce que ça signifiait.`,
    },
    objectif: {
      titre: 'La Session De Demain',
      texte: `Demain, elle a une session d'arbitrage avec un Élu Eau de Thalassyr qui conteste sa redistribution vers les zones intérieures d'Ash'Rael. Elle a lu son dossier. L'Élu semble avoir des raisons médicales légitimes.

Elle se prépare à cette session avec la même rigueur qu'elle prépare toutes les autres. L'anomalie du couloir est dans un compartiment mental à part. Elle l'y a mise il y a trois mois et elle n'a pas encore trouvé de raison de l'en sortir.`,
    },
    evenements_narratifs: ['Saturation_des_Elus'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Spécialiste Fée/Psy de la Citadelle du Voile. Liseuse de vérité pour les arbitrages du Calendrier. Croit dans le Voile d'Équité. A perçu il y a 3 mois une anomalie — sélection délibérée d'information par une administratrice Fée en comité Calendrier. N'a pas investigué. N'a pas signalé.`,
  },

  relations: [
    {
      personnage_id: 247,
      nom: 'Varek',
      type: 'collègue_quotidien',
      depuis_ici: `Le garde qu'elle voit chaque matin à l'entrée de l'aile. Professionnel, discret, efficace. Elle ne l'a jamais lu délibérément. Quelquefois, dans ses périphéries de perception, elle capte une qualité d'attention chez lui qui est différente de l'habituel. Elle ne suit pas cette perception. Elle ne sait pas ce qu'elle trouverait.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 248,
      nom: 'Eiravel',
      type: 'collègue_administrative',
      depuis_ici: `Une administratrice Calendrier dans son aile. Précise, soigneuse, agréable à travailler avec. Elle ne l'a jamais lue délibérément. Elle a remarqué que quand leur travail se croise, Eiravel a une qualité d'attention similaire à ce qu'elle-même ressent devant les dossiers difficiles. Probablement de la rigueur professionnelle.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 55,
      nom: 'Thyval',
      type: 'contact_externe_respecté',
      depuis_ici: `L'archiviste Givrin d'Iskral avec qui elle correspond sur des questions d'archives Calendrier. Elle aime ses formulations — précises, honnêtes sur les limites de ce qu'il sait. C'est rare. Elle lui fait confiance dans ses correspondances d'une façon qu'elle n'accorde pas facilement.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Sylviel ne combat presque jamais. Quand c'est nécessaire, elle utilise sa perception pour anticiper les mouvements ennemis et ses éléments Fée/Psy pour brouiller les intentions. Elle ne cherche pas à blesser — elle cherche à créer des conditions où le combat peut s'arrêter.`,
    sorts: [
      {
        nom: 'Lecture d\'État',
        type: 'sort_situationnel',
        elements: ['Psy', 'Fée'],
        description_gameplay: `Scan d'un ennemi dans un rayon de 5 cases : révèle ses PV exacts, son élément, et ses 2 prochaines actions. Dure 2 tours. Peut cibler un allié pour révéler ses effets de statut cachés et supprimer un effet négatif.`,
        description_lore: `Ce qu'elle fait dans les sessions d'arbitrage, appliqué à un contexte de combat. Elle lit ce qui est là avant de décider quoi faire.`,
      },
      {
        nom: 'Probabilité Fée',
        type: 'sort_de_base',
        elements: ['Fée'],
        description_gameplay: `Modifie la probabilité d'un événement immédiat. Peut être utilisé pour : augmenter les chances de toucher d'un allié de 30% pour son prochain attaque, ou réduire les chances de toucher d'un ennemi de 30% pour sa prochaine action.`,
        description_lore: `L'élément Fée ne change pas les règles — il incline légèrement les probabilités dans une direction. C'est subtil. C'est exactement assez.`,
      },
      {
        nom: 'Dissonance Cognitive',
        type: 'sort_situationnel',
        elements: ['Psy'],
        description_gameplay: `La cible subit un effet de confusion pendant 2 tours — elle ne peut pas utiliser ses capacités actives, seulement attaquer normalement. Si la cible avait un état émotionnel "fort" (rage, peur, désespoir), la durée augmente à 3 tours.`,
        description_lore: `Créer un écart entre ce que quelqu'un veut faire et ce que sa perception lui permet de formuler. Elle ne l'utilise pas souvent. L'idée lui est inconfortable même quand c'est nécessaire.`,
      },
      {
        nom: 'Vérité Totale',
        type: 'ultimate',
        elements: ['Fée', 'Psy'],
        description_gameplay: `Sylviel révèle l'état complet de tous les combattants dans un rayon de 6 cases — PV, effets de statut, éléments, intentions des 2 prochains tours. Pendant 3 tours, ses alliés gagnent +20% d'esquive et +15% de précision en utilisant ces informations.`,
        description_lore: `Tout ce qu'elle perçoit en permanence, rendu visible à tous en même temps. Elle n'aime pas utiliser ça — ça expose des choses que les gens n'ont pas décidé de partager.`,
      },
      {
        nom: 'Perception Périphérique',
        type: 'passif',
        elements: ['Psy'],
        description_gameplay: `Passif. Sylviel ne peut pas être surprise par des attaques de dos ou invisibles — elle perçoit les intentions avant les actes. Les ennemis invisibles dans son rayon de vision (4 cases) sont détectés comme "présence détectée" sans révéler leur position exacte.`,
        description_lore: `Vingt-six ans à lire les états émotionnels sans que les gens le sachent. Elle a développé une perception des environs qui lui manquerait si elle disparaissait.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Sylviel',
      description: `Fée femme, 52 ans, 1m59, peau blanc-doré translucide avec luminescence interne douce. Yeux changeants (vert pâle en état neutre). Ailes vestigiales pliées contre le dos. Uniforme administratif Citadelle, broche cristal au col. Cheveux blanc-or très pâle, relevés. Expression de concentration calme, regard légèrement trop attentif pour être entièrement confortable. Fond : couloir administratif de la Citadelle du Voile, architecture organique et lumière tamisée. Style concept art Riot Games, palette de blanc, or et bleu-gris.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 900,

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

Elle n'avait pas voulu lire. Elle s'était imposé cette règle depuis le début : ne pas lire les personnes qu'elle côtoie régulièrement. La règle existait pour des raisons pratiques — savoir trop déstabilisait les relations de travail.

Mais son Psy n'avait pas attendu qu'elle décide.

Ce qu'elle avait capté en passant : une administratrice Fée de haut rang en état de sélection active. Pas de mensonge — elle aurait reconnu ça facilement. Quelque chose de plus précis et de moins simple : une personne qui choisissait l'ordre de présentation de vérités exactes de façon à produire une conclusion dans l'esprit de ses auditeurs qu'une présentation différente n'aurait pas produite.

Ce n'était pas illégal. C'était de la gestion de l'information.

Elle avait continué à marcher.

—

III.

La session avec Merven avait duré quarante minutes.

En le raccompagnant à la sortie, elle avait croisé Varek dans le couloir — le garde de l'entrée, régulier depuis quatre ans, toujours là où il était censé être. Il lui avait hoché la tête. Elle lui avait hoché la tête.

Dans ses périphéries de perception — ce qu'elle percevait sans vouloir le percevoir — il y avait quelque chose dans sa qualité d'attention ce soir qui n'était pas habituel. Une vigilance qui regardait vers l'intérieur plutôt que vers l'extérieur.

Elle avait détourné sa perception avant d'aller plus loin.

—

IV.

L'anomalie du couloir était dans un compartiment mental à part.

Elle l'y avait mise parce qu'elle n'avait pas de cadre pour l'interpréter. Ce qu'elle avait perçu était réel — elle ne doutait pas de ses perceptions. Mais "une Fée choisit l'ordre de présentation de ses informations en comité" n'était pas une violation. C'était de la politique administrative ordinaire. Elle en était presque certaine.

Ce qui la gênait : elle avait passé vingt-six ans à aider le comité du Calendrier à prendre des décisions. Si les informations présentées au comité étaient organisées de façon à orienter des conclusions — ça n'était pas de la malhonnêteté, mais ça posait une question sur la qualité de la décision finale.

Elle n'avait pas signalé l'anomalie. Il n'y avait rien à signaler. Une perception dans un couloir, un état émotionnel interprété à distance, une conclusion hypothétique.

Elle avait relu sa classification — "anomalie administrative en cours d'interprétation" — et l'avait laissée là.

—

V.

Ce soir, en finissant son rapport sur la pétition de Merven, elle avait pensé à la session du comité de modification du Calendrier qui avait lieu la semaine suivante.

Elle n'y participait pas — son rôle était les arbitrages individuels, pas les décisions collectives. Elle n'avait aucune raison d'être présente.

Elle avait pensé, brièvement, qu'elle pourrait demander à assister en tant qu'observatrice. C'était dans les procédures — les spécialistes pouvaient demander à observer des sessions connexes à leur travail.

Elle avait refermé son dossier sans écrire la demande.

L'anomalie de trois mois attendrait encore. Peut-être qu'elle trouverait une explication qui la rende non-pertinente. Peut-être que la treizième semaine, ou la vingtième, elle comprendrait ce qu'elle avait perçu dans ce couloir sans avoir à aller chercher plus loin.

Elle espérait que ce soit la bonne décision.`.trim(),
};

export default lore;
