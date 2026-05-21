// ============================================================
//  RHAVEL — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 241 | Eau/Glace | Hommes-Liens | Convergence | Vanguard
//  Arc : L'Avatar — Logisticien du transport des sujets identifiés
//  Rôle : Complice inconscient par vanité — l'importance compte plus que la vérité
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 241,
  nom: 'Rhavel',
  element: 'Eau',
  element2: 'Glace',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-dix-neuf, athlétique sans en faire un élément de personnalité. À trente-six ans Rhavel est bien portant, énergique, avec une façon d'occuper l'espace qui suggère quelqu'un qui pense que les autres devraient remarquer qu'il est là. Ce n'est pas de l'arrogance au sens visible — il n'est pas hautain. C'est de l'attention au fait d'être vu.`,
    peau: `Brun-roux, teint des Déserts qui passe du temps au soleil. Une petite cicatrice au menton d'un incident de jeunesse dont il raconte l'histoire différemment selon le contexte — en mission, c'était un combat ; dans les situations sociales, c'était une chute. La vraie raison est quelque part entre les deux.`,
    yeux: `Bleu-gris clair, la teinte des Élus Eau/Glace combinés — une couleur qui change légèrement avec la lumière, ce qu'il a découvert jeune et utilisé à son avantage dans les interactions sociales. Il fait des contacts visuels directs et prolongés, et il a appris que ça crée de la confiance chez les gens.`,
    vetements: `Équipement de coordinateur logistique — robuste, organisé, nombreuses poches identifiées. Il a des systèmes pour tout. Son carnet de coordination a des onglets codés par couleur. Il est fier de ce système et l'explique volontiers si on lui demande.`,
    signes_particuliers: `Il répète les informations importantes deux fois, légèrement reformulées, pour confirmer qu'il a été compris. Cette habitude vient d'une erreur logistique grave dans ses premières années où une information mal comprise avait causé un délai de trois jours. Il ne refait jamais la même erreur deux fois. Ce trait est professionnellement solide et personnellement épuisant pour les gens qui travaillent avec lui longtemps.`,
  },

  psychologie: {
    dominante: `Rhavel avait été, avant la Convergence, quelqu'un que personne ne regardait vraiment. Coordinateur dans une chaîne d'approvisionnement locale, compétent mais remplaçable, sans particularité qui le distinguait.

    La Convergence lui avait offert un rôle indispensable. Coordinateur logistique des transferts — la personne sans qui les sujets identifiés ne pouvaient pas être déplacés de A à B. Pas une décision politique, pas une expertise technique — mais nécessaire. Sans lui, la chaîne s'arrêtait.

    Il avait trouvé ça. L'importance. Et il avait arrêté de regarder trop attentivement ce qu'il transportait.`,
    mecanisme_de_defense: `La doctrine de la nécessité. Il se dit que son rôle est logistique, pas décisionnel. Il ne choisit pas qui est transporté ni pourquoi — il coordonne comment. La distinction est réelle dans n'importe quelle organisation complexe. Elle lui donne aussi une excuse parfaite pour ne jamais interroger le "pourquoi".

    Quand quelque chose l'a dérangé — un sujet qui semblait effrayé, un formulaire avec des cases qu'il n'avait pas l'autorisation de lire — il avait posé une question opérationnelle (délai acceptable ? précautions de transport ?) plutôt qu'une question fondamentale. Les réponses opérationnelles lui suffisaient.`,
    contradiction_interne: `Il croit que les "déplacements médicaux" qu'il coordonne aident les sujets. Il a construit cette croyance sur des indices suffisamment vagues pour tenir — les sujets sont escortés avec soin, les formulaires mentionnent des "soins spécialisés", les équipes médicales sont impliquées dans la préparation. Ça ressemble à du médical.

    Ce qu'il ne fait pas : demander pourquoi les sujets ne reviennent jamais. Pas "ne reviennent pas encore" — jamais. C'est une observation qui mérite une question. Il n'a pas encore posé cette question, parce que poser cette question risquerait de changer ce qu'il est dans cette organisation.`,
    rapport_aux_autres: `Il est généreux avec les gens qui lui donnent de l'importance. Vashmael, qui l'appelle parfois pour des questions de coordination et qui lui dit "sans toi ça ne pourrait pas se faire" — il l'adore. Razhal, qui lui donne des mandats clairs et le remercie de les accomplir — il le respecte. Taluya, qui reçoit ses transferts avec une efficacité qui valide la qualité de son travail logistique — il est soulagé chaque fois que la transition est propre.

    Les gens qui le traitent comme un prestataire ordinaire, il les oublie.`,
    vision_du_monde: `Il croit que le monde a besoin de gens qui font les choses fonctionner. Pas les décideurs, pas les théoriciens — les coordinateurs, les logisticiens, les personnes qui transforment les décisions en réalité opérationnelle. Il est l'un de ces gens. C'est sa valeur. Il la maintient.`,
  },

  histoire: {
    enfance: {
      titre: 'Invisible dans la chaîne',
      contenu: `Rhavel avait grandi dans une famille de commerçants itinérants — des gens qui transportaient des marchandises entre les cités des Déserts et les zones de production. Il avait appris à organiser, à anticiper les délais, à gérer les incidents de transport avant de comprendre l'économie qui les motivait. La logistique était son premier langage.

      Son élément Eau était venu à quatorze ans — une fluidité, une adaptation aux environnements changeants, une capacité à trouver le chemin de moindre résistance dans n'importe quel système. La Glace à dix-huit, plus délibérée — la capacité à figer temporairement des systèmes mouvants, à créer des structures stables dans des contextes qui changeaient trop vite.

      Ensemble, Eau et Glace faisaient de lui quelqu'un qui pouvait trouver des routes et les sécuriser. Utile en transport. Utile en coordination logistique de tout ce qui devait aller de A à B sans incident.

      Il avait passé dix ans dans la chaîne d'approvisionnement locale. Compétent. Remplaçable. Personne ne lui avait dit qu'il était indispensable avant la Convergence.`,
    },
    arrivee: {
      titre: 'La personne sans qui ça ne fonctionne pas',
      contenu: `Le recrutement de la Convergence avait été direct : ils avaient besoin d'un coordinateur logistique pour des transferts sensibles dans les Déserts. Ses compétences correspondaient exactement. La compensation était bonne. La confidentialité était un pré-requis.

      Ce qui lui avait décidé, au-delà de la compensation : la façon dont Razhal avait formulé son importance. "Ce travail nécessite quelqu'un dont la précision est totale, parce que les marges d'erreur sont nulles." Pas "vous serez bien payé pour faire ceci." Mais "vous êtes la personne dont ce travail a besoin."

      Il avait accepté en deux jours.

      Les premières missions avaient confirmé ce positionnement — les sujets arrivaient à destination selon ses calendriers, sans délai, sans incident. Taluya lui disait que ses transferts étaient les mieux coordonnés qu'elle avait reçus. Razhal lui envoyait des confirmations avec des formulations spécifiques sur la qualité de son travail. Il avait trouvé son endroit.`,
    },
    premier_conflit: {
      titre: 'La question qu\'il a posée autrement',
      contenu: `Il y a quatre ans, lors d'un transfert, le sujet — une jeune femme Fée, vingt-deux ans — lui avait dit quelque chose pendant le transport. Pas en pleurant, pas en criant. Juste en le regardant : "Tu sais où tu m'emmènes ?"

      Il avait répondu que c'était un déplacement pour soins spécialisés, que l'équipe médicale l'attendait à l'arrivée, que tout s'était bien passé pour les précédents. Il l'avait dit avec la précision de quelqu'un qui récite des informations vraies.

      Après le transfert, il avait posé une question à Razhal sur les protocoles de communication avec les sujets pendant le transport — est-ce qu'il devait maintenir un contact minimal ou réduire les interactions pour les confort opérationnel ? Razhal lui avait dit que les interactions minimales étaient préférables. Il avait pris note.

      Il n'avait pas posé la vraie question. La vraie question était : est-ce que cette femme de vingt-deux ans sait ce qui l'attend. Il avait posé la question logistique à la place.`,
    },
    revelation: {
      titre: 'Les sujets qui ne reviennent jamais',
      contenu: `Il transporte depuis cinq ans. Il a coordonné des dizaines de transferts. Dans sa tête, si on lui avait demandé, ces sujets étaient dans des installations de soins quelque part. Des gens qui avaient des problèmes élémentaires complexes, qui nécessitaient des traitements prolongés.

      Ce qu'il n'avait pas calculé — délibérément, pas par erreur — c'est le taux de retour. Des gens envoyés en soins pour des problèmes élémentaires reviennent. Parfois longtemps après, parfois avec des séquelles, mais ils reviennent. Les siens ne revenaient pas.

      Il avait eu cette pensée une fois, il y a six mois, lors d'un moment inhabituel de calme administratif. Il l'avait eue clairement et complètement — la pensée entière, avec ses implications.

      Il avait ensuite pensé à autre chose. Il avait réorganisé son système de classement par onglets. Il avait envoyé une note à Razhal sur une optimisation du délai de transfert. Il avait mangé.

      La pensée était toujours là. Il savait qu'elle était là. Il ne la regardait pas en face.`,
    },
    etat_actuel: {
      titre: 'Le prochain transfert et ce qu\'il ne demandera pas',
      contenu: `Il a un transfert dans dix jours. Le sujet est "en préparation" — chez Taluya, probablement, le formulaire indique une localisation qu'il reconnaît comme l'une des siennes. Il reçoit ses informations de Vashmael, qui les reçoit de quelqu'un d'autre dans la chaîne. Il n'a pas le nom du sujet — il a un code opérationnel et des paramètres de transport.

      La coordination est bonne. La route est sécurisée. Le timing est optimal.

      Ce qu'il a prévu de demander avant le transfert : est-ce que les conditions météorologiques sur la route pourraient affecter le calendrier. Pas : est-ce que le sujet sait ce qui l'attend. Pas : est-ce que les sujets qu'il a transportés pendant cinq ans sont encore vivants quelque part.

      Il est indispensable à cette organisation. Cette organisation le sait. Il le sait. C'est ce qui compte.

      C'est ce qu'il se dit.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Coordinateur logistique des transferts de sujets identifiés depuis 5 ans. Croit transporter des patients pour soins médicaux. A eu la pensée complète sur les non-retours une fois, ne la regarde pas en face. Son péché est la gourmandise d'être nécessaire, qui vaut plus pour lui que la vérité.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Rhavel est le maillon fonctionnel entre l'identification (Sethara, Vashmael) et la préparation (Taluya) — celui qui rend le mouvement possible. Sa complicité est la moins sophistiquée du groupe : pas de fascination intellectuelle, pas de calcul de survie, pas d'ambivalence en réveil. Juste le besoin d'être nécessaire, qui prime sur tout le reste.`,

  relations: [
    {
      personnage_id: 234,
      nom: 'Vashmael',
      type: 'allié',
      description: `Lui envoie les informations de sujets pour les transferts. Vashmael lui dit parfois qu'il est indispensable — ce que Rhavel apprécie d'une façon qu'il ne peut pas tout à fait cacher. Vashmael ne sait pas ce que Rhavel transporte vraiment. Rhavel commence à ne pas tout à fait croire à ce qu'il dit à Vashmael sur ce qu'il transporte.`,
    },
    {
      personnage_id: 236,
      nom: 'Taluya',
      type: 'allié',
      description: `Reçoit les arrivées et confirme la qualité de la coordination. Ses confirmations ont une valeur particulière pour Rhavel — médicale, professionnelle, extérieure à la hiérarchie directe. Quand Taluya dit que son travail est bien fait, il le croit différemment que quand Razhal le dit.`,
    },
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'mentor',
      description: `Lui envoie les mandats et les faux papiers. Relation de confiance hiérarchique. Razhal sait ce que Rhavel ne sait pas — ou ce que Rhavel choisit de ne pas voir. Razhal le gère en conséquence : assez d'information pour fonctionner, pas assez pour avoir à gérer une crise de conscience.`,
    },
  ],

  combat: {
    role_combat: `Coordinateur de terrain en combat — il utilise l'Eau pour la fluidité de mouvement et la Glace pour créer des structures temporaires (ponts, barrières, points d'ancrage). Son rôle naturel est de maintenir la cohésion de groupe et les lignes de repli plutôt que de mener l'assaut.`,
    sorts: [
      {
        nom: 'Route Fluide',
        element: 'Eau',
        type: 'passif',
        description: `Passif permanent. Il trouve instinctivement les chemins de déplacement optimaux. Ses déplacements et ceux de ses alliés adjacents coûtent moins d'énergie et déclenchent moins d'attaques d'opportunité.`,
      },
      {
        nom: 'Pont de Glace',
        element: 'Glace',
        type: 'base',
        description: `Il crée une structure de glace temporaire — pont, escalier, plateforme — utilisable par ses alliés. Dure trois tours. Ne fait pas de dégâts mais change la géographie accessible du combat.`,
      },
      {
        nom: 'Courant de Repli',
        element: 'Eau',
        type: 'situationnel',
        description: `Il crée un courant directif dans l'eau ambiante ou son propre élément pour propulser un allié hors d'une position dangereuse. Déplacement forcé d'un allié de deux cases, hors d'un danger immédiat. Utile pour extraire un allié tombé.`,
      },
      {
        nom: 'Verrouillage de Zone',
        element: 'Glace',
        type: 'signature',
        description: `Il fige le sol dans un rayon autour de lui — les ennemis dans la zone sont ralentis, les mouvements coûtent deux fois plus d'énergie, les sorts de déplacement ennemi sont partiellement bloqués. Il peut maintenir ça pendant deux tours. Utile pour tenir une position pendant que ses alliés se repositionnent.`,
      },
      {
        nom: 'Couloir Sécurisé',
        element: 'Eau',
        type: 'ultime',
        description: `Il crée un corridor de mouvement pour ses alliés — une zone libre de toute obstruction et d'attaques d'opportunité, large d'une case, longue de cinq. Dure deux tours. Tous les alliés qui se déplacent dans ce corridor ce tour-ci ne déclenchent aucun effet de terrain et aucune attaque ennemie de passage. Sa compétence professionnelle élémentaire appliquée au combat : créer des routes que les autres peuvent utiliser.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_coordination',
      description: `Homme de 36 ans, athlétique, peau brun-roux, yeux bleu-gris clairs. Il est debout devant une table de coordination — carnet ouvert avec des onglets colorés, petites figurines ou marqueurs de position sur une carte de zone. Il parle en expliquant quelque chose, les mains qui appuient son discours. L'expression de quelqu'un qui est dans son élément — confiant, organisé, attentif au fait d'être regardé.`,
    },
  ],

  lore_long: `Avant la Convergence, il avait été le genre de personne qu'on remerciait quand le travail était fait et qu'on oubliait quand le travail n'était pas urgent. Compétent mais remplaçable. Présent mais pas remarquable. Il connaissait la sensation de finir une journée de travail sans que personne l'ait cherché pour lui dire que c'était bien.

La Convergence avait changé ça.

Razhal lui avait dit : "Ce travail nécessite quelqu'un dont la précision est totale, parce que les marges d'erreur sont nulles." Il avait compris immédiatement que ce n'était pas une formule de recrutement. C'était une évaluation. Il correspondait à cette évaluation. Et si les marges d'erreur étaient nulles, alors lui — précis, organisé, capable d'anticiper les problèmes avant qu'ils arrivent — était exactement ce qu'on ne pouvait pas remplacer facilement.

Il avait trouvé ça. L'importance. La place où sans lui les choses s'arrêtaient.

*

La jeune femme Fée avait vingt-deux ans. Elle avait dit : "Tu sais où tu m'emmènes ?" sans agressivité, juste avec la qualité d'une question réelle.

Il avait répondu avec les informations vraies qu'il avait. Soins spécialisés. Équipe médicale à l'arrivée. Procédure standard.

Il n'avait pas menti. Il lui avait dit ce qu'on lui avait dit. La différence entre les deux — entre ne pas mentir et dire la vérité — était quelque chose qu'il avait rangé rapidement dans un compartiment qu'il n'avait pas rouvert.

Après le transfert, il avait posé la question logistique à Razhal. Razhal avait répondu avec précision. Il avait noté la réponse dans son carnet codé par couleur.

*

Il y a six mois, pendant un moment de calme inhabituel, il avait eu la pensée entière. Pas en fragments, pas avec des angles morts — la pensée complète, clairement formulée, avec ses implications dans le bon ordre : les sujets qu'il transporte ne reviennent jamais, les soins médicaux prolongés produisent des retours même tardifs, l'absence totale de retours suggère une finalité différente des soins.

Il l'avait eue. Clairement.

Puis il avait réorganisé le système de classement par onglets de son carnet. Il avait envoyé une note à Razhal sur une optimisation de délai. Il avait mangé.

Il savait que la pensée était toujours là. Il ne la regardait pas en face.

Il avait trouvé l'importance. L'importance valait le coût de ne pas regarder certaines pensées en face. Il se disait ça, et c'était vrai, et ça lui suffisait pour continuer.

Pour l'instant, encore.`,
};

export default lore;
