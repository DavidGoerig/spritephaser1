// ============================================================
//  TALUYA — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 236 | Eau/Fée | Hommes-Liens | Convergence | Spécialiste
//  Arc : L'Avatar — Médecin de terrain qui prépare les sujets
//  Rôle : Ambivalente dangereuse — son protocole parfait l'exempte de regarder sa finalité
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 236,
  nom: 'Taluya',
  element: 'Eau',
  element2: 'Fée',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-quatre, mince et précise dans ses mouvements. À trente-trois ans Taluya a la silhouette d'une praticienne médicale — ni l'épuisement des soigneurs de terrain débordés ni la santé de ceux qui n'ont jamais touché à quelque chose de difficile, mais quelque chose entre les deux : une personne attentive à son propre corps parce qu'elle croit que l'état du soignant affecte l'état du soin.`,
    peau: `Brun moyen, soignée — elle se lave les mains souvent, une habitude médicale. Pas de bijoux sur les doigts, rien qui pourrait interférer avec un examen. Elle porte toujours ses cheveux attachés, aussi, pour les mêmes raisons. La précision est une esthétique autant qu'une nécessité.`,
    yeux: `Bleu-vert, la couleur caractéristique des Élus Eau à haut niveau de maîtrise — une teinte qui varie légèrement avec son état émotionnel, plus vive quand elle est concentrée sur un problème médical. Elle l'utilise parfois comme indicateur de sa propre concentration : si la couleur est claire et intense, elle travaille bien.`,
    vetements: `Tenue médicale de terrain : blanc cassé, poches multiples pour les instruments, tissu traité pour résister aux conditions du désert. Elle porte une broche Convergence au col — non par fierté institutionnelle, mais parce que dans les zones de terrain, les signes d'appartenance facilitent l'accès aux ressources. C'est fonctionnel.`,
    signes_particuliers: `Elle parle aux patients pendant les procédures. Pas de bavardage — une explication continue de ce qu'elle fait et pourquoi. "Je vais toucher ici, vous allez sentir une légère pression." "L'effet que vous ressentez va durer environ deux minutes, c'est normal." Elle a développé ça comme technique de réduction du stress — les sujets qui comprennent ce qui se passe résistent moins, et un sujet qui résiste moins est plus facile à préparer correctement. C'est médical. C'est aussi ce qui lui permet de travailler sans regarder le visage de ses patients comme des individus.`,
  },

  psychologie: {
    dominante: `Taluya croit dans son protocole. C'est sa conviction centrale et son mécanisme de protection simultanément — chaque amélioration du protocole est une preuve qu'elle fait quelque chose bien, que son travail a de la valeur, que la précision avec laquelle elle prépare les sujets signifie quelque chose.

    Son protocole de préparation "sans souffrance" est un travail de trois ans. Elle l'a affiné à chaque opération. Il fonctionne — les sujets préparés selon son protocole souffrent moins pendant l'extraction. C'est vrai. C'est mesurable. Et cette vérité lui donne quelque chose à tenir pendant et après chaque opération.`,
    mecanisme_de_defense: `Elle ne regarde pas ce qui arrive après le protocole. Cette limite est active, consciente à un niveau profond et automatique à un niveau opérationnel. Son rôle finit quand la préparation finit. Ce qui se passe ensuite n'est pas son département. Elle n'a pas les données sur ce qui se passe ensuite. Elle ne demande pas les données.

    Drevorn lui a envoyé il y a quelques mois un document intitulé "Note sur le consentement — cadre éthique préparatoire". Elle l'a reçu, l'a ouvert, a vu la section sur les "sujets informés vs sujets non-informés", l'a refermé. Elle ne lui a pas répondu. Le document est dans ses archives électroniques dans un dossier qu'elle n'a pas rouvert.`,
    contradiction_interne: `Elle est une bonne médecin. Objectivement, techniquement, sans qualificatif idéologique — les sujets qu'elle prend en charge souffrent moins que ceux préparés selon les anciens protocoles. Elle a les données. Elle pourrait les montrer à n'importe quel comité d'éthique médicale et ils seraient impressionnés par la rigueur.

    Ce qu'elle ne peut pas montrer à un comité d'éthique médicale : à quoi sert la préparation. À quoi ses améliorations rendent plus facile. Son protocole parfait est une belle voiture sur une route qu'elle n'a jamais regardée.`,
    rapport_aux_autres: `Elle travaille bien avec les équipes de terrain — professionnelle, claire sur ses besoins, respectueuse des contraintes opérationnelles. Shiveth, son ancienne collègue, était la personne avec qui elle débattait de technique médicale dans les premières années. Shiveth est partie. Taluya s'est rappelé pendant quelques mois de ces conversations, puis les a rangées.

    Elle ne cherche pas de relation personnelle dans son travail. Ce n'est pas de la froideur — elle est attentive, réactive, compétente dans les interactions. Mais elle maintient une frontière précise entre le professionnel et le reste.`,
    vision_du_monde: `Elle croit dans la médecine comme pratique — dans la possibilité de réduire la souffrance par la technique et l'attention. C'est une conviction simple et stable. Elle l'avait avant la Convergence et elle l'a toujours.

    Ce que la Convergence a fait à cette conviction : l'a détournée vers un usage dont Taluya ne peut pas parler à voix haute. Elle sait que quelque chose ne va pas dans la logique de son travail. Elle ne sait pas encore si ce qu'elle ressent est du malaise éthique ou simplement la fatigue normale de quelqu'un qui fait un travail difficile.`,
  },

  histoire: {
    enfance: {
      titre: 'La médecine avant les éléments',
      contenu: `Taluya venait d'une famille de soigneurs traditionnels dans une communauté des Déserts — des gens qui pratiquaient la médecine herbale et manuelle sans accès aux ressources médicales institutionnelles. Elle avait commencé à apprendre à soigner à sept ans, par observation et par pratique directe.

      Son élément Eau était venu à treize ans avec une qualité naturelle — une extension de ce qu'elle faisait déjà avec ses mains, mais qui lui permettait de percevoir les déséquilibres des flux internes du corps. L'Eau dans le corps humain, dans les organes, dans les cellules — elle pouvait le sentir. C'était un diagnostic infiniment précis par rapport à tout ce qu'elle avait appris avant.

      La Fée était arrivée à seize ans, plus discrète, plus subtile — une capacité à apaiser les états émotionnels aigus, à réduire l'anxiété et la résistance des patients, à créer une ambiance de calme dans une pièce. Elle n'avait pas compris immédiatement que c'était de la Fée. Elle pensait que c'était de la bedside manner, une compétence apprise. Quand on lui avait expliqué que c'était élémentaire, elle avait d'abord eu du mal à croire que quelque chose d'aussi subtil était de la magie.

      La Convergence l'avait recrutée à vingt-neuf ans pour ses capacités de préparation médicale terrain.`,
    },
    arrivee: {
      titre: 'Le protocole comme vocation',
      contenu: `Ses quatre premières années à la Convergence avaient été consacrées au développement du protocole de préparation. On lui avait donné un objectif technique — réduire la détresse des "sujets en préparation d'extraction élémentaire" — et les ressources pour y travailler. Elle avait travaillé.

      Les premiers sujets avaient reçu des préparations selon des protocoles existants qui lui avaient paru insuffisants — mal calibrés pour le stress spécifique de l'extraction, avec des angles morts importants dans la gestion de la douleur anticipée. Elle avait réécrit le protocole depuis la base.

      Sa version avait réduit la détresse mesurable de quarante-deux pour cent. Ce n'était pas un chiffre abstrait pour elle — c'était quarante-deux pour cent de souffrance évitée, mesurable, documentée. Ça lui avait donné de la satisfaction. Pas de la fierté au sens de l'ego — de la satisfaction au sens d'un travail bien fait.

      Elle avait continué à améliorer. Elle en était maintenant à sa sixième version. Soixante-huit pour cent de réduction de la détresse par rapport aux protocoles antérieurs.`,
    },
    premier_conflit: {
      titre: 'Le document de Drevorn',
      contenu: `Il y a six mois, Drevorn lui avait envoyé un document. Elle avait lu le titre : "Note sur le consentement — cadre éthique préparatoire". Elle avait ouvert, vu la section sur les "sujets informés vs sujets non-informés dans les protocoles d'extraction", et refermé.

      Elle n'avait pas répondu. Le document était dans ses archives dans un dossier qui n'avait pas de nom.

      Ce qu'elle avait pensé dans les heures suivantes : que Drevorn avait probablement de bonnes raisons d'écrire ce document, que ces raisons ne la concernaient pas directement, que son rôle était la préparation et non ce qui venait avant ou après. Que les questions éthiques sur le consentement étaient des questions de politique institutionnelle, pas de pratique médicale.

      Ce qu'elle pense maintenant, en y repensant : qu'elle n'a pas répondu parce qu'elle savait que répondre honnêtement nécessiterait de nommer quelque chose qu'elle n'a pas envie de nommer.

      Elle n'a pas encore rouvert le dossier.`,
    },
    revelation: {
      titre: 'Shiveth et la mémoire d\'une conversation',
      contenu: `Shiveth avait été sa collègue dans les deux premières années. Une Néréide qui travaillait sur les aspects psychologiques des opérations — différente de Taluya dans ses méthodes, mais avec suffisamment d'overlap technique pour avoir des conversations utiles.

      Shiveth était partie. Les détails de son départ n'avaient jamais été expliqués clairement à Taluya. Elle n'avait pas demandé.

      Mais elle se rappelait une conversation — six mois avant que Shiveth parte. Shiveth avait posé une question sur les sujets en préparation : "Est-ce que tu as l'impression que certains d'entre eux comprennent ce qui va se passer ?" Taluya avait répondu que ça n'était pas son département. Shiveth avait dit "non, je veux dire — est-ce que tu lis ça sur eux ?" Taluya avait répondu qu'elle ne lisait pas ses patients psychologiquement pendant les procédures, qu'elle se concentrait sur les paramètres physiques.

      Shiveth n'avait pas insisté.

      Taluya n'avait pas pensé à cette conversation pendant deux ans. Ces dernières semaines, elle y pense.`,
    },
    etat_actuel: {
      titre: 'La version sept et ce qu\'elle cherche à perfectionner',
      contenu: `Elle travaille sur la version sept du protocole. La cible : réduire la fenêtre de détresse au moment de la transition — la période entre la préparation complète et l'extraction active, qui dure entre six et dix minutes selon les sujets et dans laquelle certains manifestent une augmentation brusque de la détresse malgré une préparation réussie.

      Elle a une hypothèse technique : l'augmentation vient d'une anticipation cognitive que la préparation physique ne neutralise pas complètement. La solution serait d'intégrer une composante Fée plus intensive dans les vingt dernières minutes de préparation — un effet d'apaisement cognitif plus profond que ce qu'elle fait actuellement.

      C'est un problème intéressant. Elle y pense souvent.

      Ce qu'elle ne pense pas : à ce que "l'anticipation cognitive" signifie en termes de conscience de ce qui va se passer. À ce que ses sujets savent pendant cette fenêtre de six à dix minutes. Elle ne pense pas à ça. Elle pense à la solution technique.

      Le dossier sans nom dans ses archives est toujours là. Elle ne l'a pas rouvert.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Médecin de terrain qui prépare les sujets avant le Drain. Son protocole améliore objectivement les conditions de l'extraction tout en rendant le Protocole plus efficace. Représente l'orgueil du bien technique qui efface la question du bien moral.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Taluya est le contrepoint de Sykavel — toutes deux des spécialistes techniques dont le travail de qualité rend le Protocole possible, mais avec des mécanismes différents. Sykavel commence à voir. Taluya a le document de Drevorn depuis six mois et ne l'a pas rouvert. Elle est plus près de rester aveugle que de voir — mais ce n'est pas encore certain.`,

  relations: [
    {
      personnage_id: 232,
      nom: 'Shiveth',
      type: 'fantôme',
      description: `Ancienne collègue partie il y a deux ans dans des circonstances non expliquées. Avait posé une question sur les patients que Taluya n'avait pas voulu entendre. La conversation revient maintenant.`,
    },
    {
      personnage_id: 233,
      nom: 'Drevorn',
      type: 'contact_nécessaire',
      description: `Lui a envoyé un document sur le consentement il y a six mois. Elle l'a refermé sans répondre. Le document est dans un dossier sans nom dans ses archives. Elle ne l'a pas rouvert. La relation est techniquement active — elle reçoit ses documents, ne répond pas.`,
    },
    {
      personnage_id: 65,
      nom: 'Saeved',
      type: 'fantôme',
      description: `Son modèle de sacrifice volontaire — l'image qu'on lui a donnée pour contextualiser son travail dans les premières années. Elle croit encore dans cette image. Ce qu'elle ne sait pas : Drevorn passe sa vie à chercher si le consentement de Saeved était réel.`,
    },
  ],

  combat: {
    role_combat: `Soigneuse et contrôleuse Fée. En combat, elle réduit la capacité de fonctionnement des adversaires par des effets psychologiques et Eau, et maintient les alliés en état de combattre plus longtemps. Elle n'attaque pas en premier. Son rôle naturel est le soutien et la neutralisation non-létale.`,
    sorts: [
      {
        nom: 'Flux de Calme',
        element: 'Fée',
        type: 'passif',
        description: `Passif permanent. Son champ Fée réduit légèrement le stress physiologique de ses alliés proches — moins de tremblements, meilleure précision, réduction de la panique. En combat prolongé, cet effet accumule un avantage mesurable.`,
      },
      {
        nom: 'Rééquilibrage Hydrique',
        element: 'Eau',
        type: 'base',
        description: `Elle restaure la circulation des fluides dans un allié — soigne des dommages, réduit les effets d'empoisonnement et d'épuisement. Précision médicale : elle peut cibler un système spécifique pour un effet localisé.`,
      },
      {
        nom: 'Saturation Cognitive',
        element: 'Fée',
        type: 'situationnel',
        description: `Elle inonde un ennemi d'impressions sensorielles Fée — pas de douleur, mais une désorientaiton qui rend les actions complexes impossibles pendant deux à trois tours. L'ennemi reste debout et fonctionnel pour les actions simples. C'est la technique qu'elle utilise dans son protocole médical à usage non-militaire.`,
      },
      {
        nom: 'Protocole d\'Urgence',
        element: 'Eau',
        type: 'signature',
        description: `Sa technique personnelle développée pour les soins de terrain intensifs — elle accélère les processus de récupération naturels d'un allié en danger critique. Dégâts entrants réduits de moitié pendant deux tours, récupération accélérée. Le sujet reste conscient et fonctionnel. Elle peut faire ça les yeux fermés, en terrain difficile, sous pression. Elle l'a fait des dizaines de fois.`,
      },
      {
        nom: 'Zone de Préparation',
        element: 'Fée',
        type: 'ultime',
        description: `Elle étend son champ Fée en zone — tous les alliés dans le rayon entrent dans un état de calme physiologique profond. Douleur réduite, réflexes maintenus, panique nulle. Dure trois tours. Pendant ces trois tours, les alliés dans la zone peuvent continuer à combattre malgré des blessures qui les auraient normalement mis hors combat. Elle ne sait pas encore ce qu'elle pense du fait que cette technique, développée pour soigner, peut aussi rendre des gens capables de continuer à faire des choses qu'ils auraient autrement arrêtées.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_medical',
      description: `Femme de 33 ans, mince et précise, peau brun moyen, yeux bleu-vert vivaces, cheveux attachés strictement. Elle est dans un espace médical de terrain — simple, propre, fonctionnel. Elle tient un instrument médical avec la précision de quelqu'un qui a répété ce geste des centaines de fois. Son expression est concentrée, attentive, professionnelle. Le visage d'une praticienne absorbée par un problème technique. Derrière elle, dans un coin de l'image, un document posé sur une surface — pas lisible, mais présent.`,
    },
  ],

  lore_long: `Son protocole de préparation en était à sa sixième version. Soixante-huit pour cent de réduction de la détresse mesurable par rapport aux protocoles antérieurs.

Ce n'était pas un chiffre abstrait. C'était du travail concret — trois ans d'observations, d'ajustements, de tests sur des paramètres qui avaient au début semblé impossibles à quantifier. La détresse physiologique d'un sujet en préparation d'extraction élémentaire était mesurable si on savait ce qu'on cherchait : variation du rythme cardiaque, conductivité cutanée, signature des fluides corporels que son élément Eau lui permettait de lire avec une précision qu'aucun instrument standard n'atteignait.

Elle avait commencé par observer, dans les premiers mois, les écarts entre ce que les sujets disaient (rien de particulier — ils disaient peu, en général) et ce que leur corps disait. Le corps disait beaucoup. Le corps disait toujours la vérité. Elle avait conçu son protocole pour répondre à ce que le corps disait.

La Fée aidait. L'Eau détectait. La Fée apaisait. Ensemble, elles lui permettaient de préparer des sujets dans un état physiologique optimal — calmes, stables, douleur minimisée. C'était bon médecin. C'était techniquement impeccable.

*

Drevorn avait envoyé le document en milieu de semaine.

Elle avait ouvert, vu "consentement" dans le titre, fait défiler jusqu'à la section qui décrivait les "sujets informés vs sujets non-informés dans les protocoles d'extraction", et refermé.

Elle avait eu deux réflexions dans les trente secondes qui avaient suivi. La première : Drevorn avait probablement de bonnes raisons d'écrire ça, mais ces raisons ne la regardaient pas directement parce que son rôle était la préparation médicale, pas la décision de soumettre quelqu'un à la préparation. La deuxième : si elle avait répondu honnêtement à ce document, elle aurait dû reconnaître quelque chose qu'elle préférait ne pas reconnaître.

Elle n'avait pas répondu. Le document était dans un dossier sans nom.

*

Shiveth avait posé une question, deux ans avant de partir.

"Est-ce que tu as l'impression que certains d'entre eux comprennent ce qui va se passer ?"

Taluya avait répondu que ça n'était pas son département. Ce qui était honnête — ça n'était pas son département. Elle se concentrait sur les paramètres physiques pendant les préparations. Les paramètres psychologiques, les niveaux de compréhension, c'était le département de Shiveth.

Mais Shiveth avait dit : "non, je veux dire — est-ce que tu lis ça sur eux ?"

Et là, Taluya avait dit qu'elle ne lisait pas ses patients psychologiquement pendant les procédures.

Ce qui était aussi honnête, d'une certaine façon. Elle ne lisait pas psychologiquement. Son élément Eau lisait physiologiquement. Ces deux choses sont différentes en termes de méthode et identiques en termes de résultat.

La conductivité cutanée. Le rythme cardiaque. La signature des fluides. Un corps qui comprend ce qui va se passer présente une signature particulière — pas la même que la peur ordinaire, pas la même que la résistance non-informée. Quelque chose entre les deux, avec une qualité de certitude physiologique que la peur ordinaire n'a pas.

Elle lit ça. Elle l'a toujours lu.

La version sept du protocole cherche à neutraliser cette signature dans les six à dix dernières minutes. Une composante Fée plus intensive. Un apaisement cognitif plus profond.

Ce que ça implique sur la conscience des sujets pendant ces six à dix minutes — c'est dans le dossier sans nom. Drevorn l'a écrit. Elle ne l'a pas rouvert.

Elle y pense, parfois, entre deux améliorations.`,
};

export default lore;
