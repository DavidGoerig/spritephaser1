// ============================================================
//  PHYRANA — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 244 | Normal/Fée | Peuple des Sables | Convergence | Soutien
//  Arc : L'Avatar — Jeune recrue idéaliste dont la foi commence à être testée
//  Rôle : Future victime ou future ennemie — au choix de ce qu'elle découvrira
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 244,
  nom: 'Phyrana',
  element: 'Normal',
  element2: 'Fée',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-deux, légère — la silhouette de quelqu'un qui n'est pas encore tout à fait dans son corps d'adulte, à trente et un ans. Il y a une impression de jeunesse dans sa façon de se tenir et de se déplacer qui n'est pas de l'immaturité — c'est de l'absence de calcination par le monde. Elle n'a pas encore les épaules qui portent des choses lourdes depuis longtemps.`,
    peau: `Brun doré, claire pour les Peuples des Sables — sa région d'origine est dans les zones moins arides, avec plus de végétation et moins d'exposition directe. Une peau lumineuse qui rougit légèrement quand elle est émue, ce qu'elle est souvent.`,
    yeux: `Ambre chaud, lumineux — la qualité des Élus Fée expérimentés, une légère lumière propre qui n'est pas de la phosphorescence mais qui donne à ses yeux une vivacité particulière. Elle est expressive dans le regard d'une façon qu'elle n'a pas encore appris à contrôler pour les situations où le contrôle serait utile.`,
    vetements: `Tenue Convergence standard du personnel de soutien — propre, bien ajustée, portée avec le soin de quelqu'un qui trouve de l'importance dans l'appartenance visible. Elle porte les marques de contribution avec un léger plaisir visible. Ce n'est pas de la vanité — c'est de la fierté dans quelque chose qu'elle croit mériter.`,
    signes_particuliers: `Elle pose des questions à tout le monde. Pas de façon envahissante — avec la curiosité réelle de quelqu'un qui pense que les gens savent des choses importantes et qui veut apprendre. Elle prend des notes dans un carnet sans système particulier, juste ce qu'elle trouve intéressant. Les gens qui reçoivent ses questions finissent souvent par lui répondre plus complètement qu'ils ne l'avaient prévu.`,
  },

  psychologie: {
    dominante: `Phyrana croit dans la redistribution avec la foi intacte de quelqu'un qui n'a pas encore rencontré de preuve directe contre. Vashmael lui a appris ce travail — il lui a montré les résultats, les terres revitalisées, les communautés qui avaient planté là où il y avait du sable. Elle l'a vu. La foi est basée sur des observations réelles.

    Ce qui commence à être testé : des questions auxquelles elle n'a pas encore de réponses satisfaisantes. Des sujets qui partent et ne donnent plus de nouvelles. Des formulaires qui utilisent des termes qu'elle n'a pas appris. Des moments où Orveth répond à côté de ce qu'elle demandait.`,
    mecanisme_de_defense: `Elle croit encore les réponses qu'on lui donne. Quand on lui explique qu'un sujet est "en traitement prolongé" ou "dans une zone de communication difficile", elle accepte l'explication. Pas parce qu'elle est naïve au sens de stupide — elle est intelligente, curieuse, attentive. Parce qu'elle n'a pas encore développé la méfiance envers les sources d'autorité auxquelles elle fait confiance.

    Elle est au stade où la foi protège. Elle n'est pas encore au stade où elle commence à coûter.`,
    contradiction_interne: `Sa foi dans la redistribution est liée à sa foi dans Vashmael — et Vashmael, qui ne sait pas lui-même, lui a transmis sa propre sincérité intacte. Le paradoxe : les mensonges qu'on lui dit ne viennent pas de gens qui lui veulent du mal. Ils viennent de gens qui croient (Vashmael) ou qui se protègent (Orveth) ou qui filtrent pour maintenir le système (Razhal).

    Quand la désillusion viendra — et elle viendra — elle ne sera pas simple. Elle touchera des gens auxquels elle tient vraiment.`,
    rapport_aux_autres: `Elle traite les gens avec une générosité naturelle et sans calcul. Taluya lui a montré des techniques de soutien élémentaire qu'elle n'aurait pas apprises seule — Phyrana a dit merci en en disant vraiment merci, ce qui a légèrement surpris Taluya. Orveth est son collègue depuis six mois — elle lit ses ambiguïtés comme de la réserve professionnelle plutôt que comme de l'évitement conscient.

    Vashmael est son modèle. Elle le suit avec confiance.`,
    vision_du_monde: `Le monde peut être meilleur. C'est sa conviction centrale — pas abstraite, pas politique, mais pratique. Elle a vu des terres revitalisées. Elle sait que c'est possible. Ce qui est possible devrait être fait. Elle est là pour contribuer à ce qui est possible.

    Cette conviction n'est pas naïve en elle-même. Elle sera testée par les méthodes utilisées pour atteindre ce qu'elle pense être un objectif partagé.`,
  },

  histoire: {
    enfance: {
      titre: 'Une région qui avait vu la différence',
      contenu: `Phyrana venait d'une communauté des Déserts qui avait bénéficié d'une opération de revitalisation de la Convergence il y a douze ans — elle avait dix-neuf ans. Elle se rappelait l'avant et l'après : une terre sèche qui avait commencé à porter de petites cultures l'année d'après l'intervention. Ce n'était pas spectaculaire. C'était réel.

      Elle avait grandi en sachant que la redistribution élémentaire n'était pas une théorie. Elle l'avait vue.

      Son élément Normal était venu à quinze ans — l'adaptabilité, la polyvalence, la capacité à fonctionner dans des contextes divers. La Fée à dix-huit ans, plus surprenante — une légèreté émotionnelle, une sensibilité aux états des personnes autour d'elle, une capacité à créer de la confiance dans des situations tendues. Les deux éléments ensemble faisaient d'elle quelqu'un d'utile dans des contextes humains complexes — pas la force d'un combattant, pas la précision d'un analyste, mais la capacité à tenir ensemble des situations qui auraient tendance à se décomposer.

      Vashmael l'avait recrutée à vingt-neuf ans. Il lui avait dit que son profil correspondait exactement à ce dont les équipes de terrain avaient besoin. Elle avait accepté sans hésiter.`,
    },
    arrivee: {
      titre: 'Deux ans de terrain et de résultats',
      contenu: `Ses deux premières années avaient confirmé ce qu'elle pensait. Elle travaillait avec les équipes de soutien des opérations de redistribution — facilitation des communautés locales, explication des processus, gestion des inquiétudes. Son élément Fée l'aidait à créer rapidement des contextes de confiance dans des situations où les communautés étaient méfiantes.

      Les résultats existaient. Elle les avait vus de ses propres yeux — des terres qui commençaient à répondre, des familles qui avaient commencé à planter. Ce n'était pas une illusion.

      Elle avait aussi vu des choses qu'elle n'avait pas encore classées. Des formulaires avec des cases qu'elle n'avait pas l'autorisation de compléter. Des sujets identifiés comme "prioritaires" selon des critères qu'on ne lui avait pas expliqués. Des départs de personnes dont elle n'avait pas eu de nouvelles.

      Pour l'instant, elle acceptait les explications. Elles étaient plausibles.`,
    },
    premier_conflit: {
      titre: 'Trois sujets sans nouvelles',
      contenu: `Depuis six mois, elle a compté. Trois personnes qu'elle a rencontrées et dont elle a facilité le "processus d'orientation" n'ont pas donné de nouvelles à leurs familles. Dans les trois cas, on lui a dit "formations intensives, communication limitée". Dans les trois cas, les familles lui ont posé des questions auxquelles elle a répondu avec les informations officielles, et elle a vu dans leurs visages qu'elles ne croyaient pas tout à fait non plus.

      Ce n'était pas encore de la certitude. Mais c'était une accumulation.

      Elle avait posé la question à Vashmael. Il lui avait répondu avec sa sincérité habituelle — il avait les mêmes explications, et elle voyait qu'il y croyait vraiment. Elle lui faisait confiance. Elle avait accepté sa réponse.

      Elle avait aussi posé la question à Orveth, différemment. Orveth avait répondu à une question adjacente. Elle avait remarqué l'écart. Elle n'avait pas encore décidé quoi en faire.`,
    },
    revelation: {
      titre: 'Ce que Taluya ne dit pas',
      contenu: `Elle avait passé deux semaines à observer Taluya dans son travail — une formation de terrain sur les techniques de soutien élémentaire. Taluya était une excellente formatrice : précise, patiente, capable d'expliquer des concepts complexes avec clarté.

      Ce que Phyrana avait observé, et qu'elle n'avait pas encore nommé : Taluya ne demandait jamais comment les sujets allaient après ses préparations. Elle avait toute l'attention du monde pendant la préparation. Après, cette attention s'arrêtait nettement.

      Ce n'était peut-être pas significatif. Certains professionnels maintiennent une frontière stricte entre le travail et son suivi. C'était professionnel. C'était peut-être juste ça.

      Phyrana avait noté dans son carnet sans système : "Taluya : attention qui s'arrête nettement après le protocole." Sans conclusion. Juste l'observation.`,
    },
    etat_actuel: {
      titre: 'La question qu\'elle ne sait pas encore comment poser',
      contenu: `Elle continue son travail avec la même énergie. Elle est bonne dans ce qu'elle fait — les communautés lui font confiance rapidement, les sujets en préparation sont moins anxieux quand elle est présente, les équipes apprécient sa capacité à gérer les tensions.

      Ce qu'elle commence à accumuler sans le formuler encore clairement : des observations qui ne rentrent pas bien dans les explications officielles. Pas assez pour une confrontation. Trop pour être ignorées indéfiniment.

      Elle a le profil de quelqu'un qui, quand elle comprendra vraiment, ne pourra pas faire semblant de ne pas avoir compris. Elle n'a pas développé les mécanismes d'Orveth ou de Rhavel — ne pas regarder, ne pas assembler, ne pas demander. Elle pose des questions. Elle prend des notes. Elle observe les écarts.

      La question est ce qui arrive quand elle en a assez pour que les explications officielles ne tiennent plus. Ce jour n'est pas encore arrivé.

      Vashmael pense à elle comme à une recrue prometteuse. Orveth la regarde comme un miroir de lui-même à vingt-deux ans. Ni l'un ni l'autre ne sait encore si elle sera une future victime ou une future ennemie — et elle non plus.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Jeune recrue de soutien dont la foi est encore intacte. Observe les premiers signes contradictoires depuis 6 mois. Sa trajectoire — victime ou ennemie — dépend de ce qu'elle découvrira et de comment elle le découvrira.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Phyrana représente le potentiel de rupture morale — le personnage dont la foi non-compromise, quand elle sera confrontée à la vérité, pourra produire soit la paralysie (comme Amhavel), soit la rébellion active. Sa position sur l'arc n'est pas encore déterminée. C'est narrativement sa valeur : elle est encore ouverte.`,

  relations: [
    {
      personnage_id: 234,
      nom: 'Vashmael',
      type: 'mentor',
      description: `Son modèle et son recruteur. Il lui a transmis sa sincérité intacte. Quand elle lui a posé des questions sur les sujets sans nouvelles, il a répondu honnêtement avec ce qu'il savait — et elle l'a vu y croire vraiment. Sa confiance en lui est réelle. Ce sera difficile quand elle comprendra qu'il ne savait pas non plus.`,
    },
    {
      personnage_id: 237,
      nom: 'Orveth',
      type: 'rival',
      description: `Son collègue depuis six mois — elle lui fait confiance professionnellement mais a remarqué qu'il répond parfois à côté de ce qu'elle demande. Elle l'interprète comme de la réserve. Il la regarde comme un miroir de lui-même à vingt-deux ans. Ils ne se sont pas encore dit ce qu'ils pensent vraiment.`,
    },
    {
      personnage_id: 236,
      nom: 'Taluya',
      type: 'contact_nécessaire',
      description: `Son modèle professionnel de soutien médical. Elle a observé l'attention de Taluya qui s'arrête nettement après le protocole. Elle n'a pas encore de conclusion. Taluya, de son côté, n'a pas demandé ce que Phyrana notait dans son carnet.`,
    },
  ],

  combat: {
    role_combat: `Soutien et stabilisation. Normal lui donne l'adaptabilité et la résistance aux effets de contrôle ; Fée lui donne la capacité d'apaiser, de soutenir et de protéger ses alliés contre les effets psychologiques. Elle n'est pas conçue pour l'assaut. Elle est conçue pour que les autres puissent continuer à se battre.`,
    sorts: [
      {
        nom: 'Présence Rassurante',
        element: 'Fée',
        type: 'passif',
        description: `Passif permanent. Ses alliés dans un rayon proche sont partiellement immunisés aux effets de peur et de désorientation. Sa présence Fée crée un champ de confiance qui est difficile à perturber.`,
      },
      {
        nom: 'Élan Normal',
        element: 'Normal',
        type: 'base',
        description: `Elle canalise de l'énergie normale dans un allié — restauration d'endurance, réduction des effets d'épuisement, légère accélération des réflexes pendant deux tours. Pas spectaculaire. Efficace.`,
      },
      {
        nom: 'Éclat de Confiance',
        element: 'Fée',
        type: 'situationnel',
        description: `Elle libère une impulsion Fée vers un ennemi — pas de dommages physiques, mais une déstabilisation émotionnelle temporaire. L'ennemi perd confiance dans ses propres perceptions pendant un tour : précision réduite, décisions erratiques, sorts complexes ratés.`,
      },
      {
        nom: 'Adaptation d\'Urgence',
        element: 'Normal',
        type: 'signature',
        description: `Sa compétence personnelle — elle adapte instantanément ses capacités de soutien au besoin immédiat le plus urgent. Si un allié est en danger critique, elle renforce sa résistance. Si un allié est désorienté, elle stabilise ses perceptions. Si le groupe est dispersé, elle crée une connexion de soutien. L'adaptabilité comme instinct de survie.`,
      },
      {
        nom: 'Champ de Foi',
        element: 'Fée',
        type: 'ultime',
        description: `Elle étend son champ Fée en zone — tous les alliés dans le rayon gagnent pendant deux tours une résistance à tous les effets de contrôle mental, de désorientation et de peur. En parallèle, leurs sorts et actions ont une légère chance de réussir même dans des conditions d'échec normal. La foi comme protection élémentaire — pas irrationnelle, pas naïve, mais réelle. Pour l'instant.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_terrain',
      description: `Femme de 31 ans, légère, peau brun doré claire, yeux ambre chauds et expressifs. Elle est dans un espace communautaire — une place d'un village désertique, des gens autour d'elle. Elle parle à quelqu'un avec une attention complète, carnet ouvert dans la main mais pas regardé. Son expression est ouverte, sincère, légèrement concentrée. La lumière de ses yeux Fée est douce et visible. En arrière-plan, légèrement flous, des formules signées et des formulaires sur une table qu'elle n'est pas en train de regarder.`,
    },
  ],

  lore_long: `Elle avait vu les terres de sa région d'origine se revitaliser quand elle avait dix-neuf ans. Ce n'était pas spectaculaire — quelques parcelles, de petites cultures, une saison où il avait été possible de planter là où on n'avait pas pu planter depuis longtemps. Mais c'était réel. Elle l'avait vu.

C'est cette image qu'elle portait dans son travail — pas un discours, pas une idéologie, juste la certitude que quelque chose de concret était possible parce qu'elle l'avait vu de ses propres yeux.

*

Trois sujets en six mois. Elle comptait sans l'avoir décidé — une habitude de quelqu'un qui observe, note, compare.

Les familles avaient posé des questions. Elle avait répondu avec les informations officielles. Elle avait vu dans leurs visages qu'elles n'y croyaient pas tout à fait. Elle avait continué à répondre avec les informations officielles parce que c'était ce qu'elle savait, parce que Vashmael y croyait, parce que les explications étaient plausibles.

Elle avait aussi noté, sans le formuler encore complètement : les explications étaient plausibles, pas prouvées.

*

Orveth avait répondu à une question adjacente. Elle avait remarqué l'écart entre la question posée et la réponse fournie. Elle avait cherché une explication innocente — réserve professionnelle, distraction, malentendu. Elle en avait trouvé plusieurs. Aucune ne la satisfaisait complètement.

Ce qui la dérangeait dans Orveth n'était pas ce qu'il disait. C'était la façon dont il regardait certains sujets — avec une légère tension qu'elle n'avait pas vue chez Vashmael. Comme quelqu'un qui choisissait ses mots. Comme quelqu'un qui avait déjà posé la question et qui connaissait la valeur de ne pas la reposer.

Elle ne savait pas encore quoi faire de ça.

*

Taluya lui avait dit quelque chose, sans le dire — dans la façon dont son attention s'arrêtait après le protocole. L'arrêt net. Comme une frontière qu'elle avait tracée et qu'elle ne traversait pas.

Phyrana n'avait pas encore la structure conceptuelle pour nommer ce qu'elle observait. Elle avait juste les notes dans son carnet sans système, et la conscience que quelque chose ne rentrait pas bien.

Elle n'avait pas encore peur. Elle n'était pas encore dans la résignation d'Orveth ni dans la paralysie d'Amhavel ni dans le calcul de Khorath.

Elle était dans le moment d'avant — le moment où les questions commencent à s'accumuler plus vite que les réponses satisfaisantes, et où on doit décider si on commence à chercher les vraies réponses ou si on apprend à ne plus chercher.

Elle ne savait pas encore ce qu'elle allait décider. Elle ne savait peut-être pas encore qu'elle avait une décision à prendre.`,
};

export default lore;
