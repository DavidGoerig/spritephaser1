// ============================================================
//  VASHMAEL — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 234 | Sol/Normal | Peuple des Sables | Convergence | Recruteur
//  Arc : L'Avatar — Recruteur de terrain depuis 12 ans
//  Rôle : Gentil manipulé — sa foi dans la redistribution est sincère
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 234,
  nom: 'Vashmael',
  element: 'Sol',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-dix, trapu et robuste — la corpulence de quelqu'un qui parcourt des terrains difficiles depuis plus d'une décennie. À quarante-quatre ans Vashmael a les mains larges d'un homme qui ne refuse pas le travail physique, les jambes d'un marcheur, les épaules d'un porteur. Il n'est pas massif mais il donne l'impression d'être solide dans un sens plus profond que physique — quelqu'un qu'on ne renverse pas facilement.`,
    peau: `Brun cuivré intense, le teint profond des Peuples des Sables qui passent leur vie sur le terrain. Des rides précoces autour des yeux de quelqu'un qui plisse souvent sous le soleil. Un sourire facile et genuine — les muscles du sourire ont travaillé souvent.`,
    yeux: `Brun chaud, clairs dans la lumière du désert. Les Élus Sol expérimentés ont souvent un rapport particulier au sol qu'ils habitent — une présence légèrement ancrée, les pieds dans la terre même quand ils ne la touchent pas. Vashmael a ça. Les gens qui lui parlent ont l'impression d'avoir une conversation avec quelqu'un qui ne va nulle part.`,
    vetements: `Tenue de terrain des Déserts : tissu léger et résistant en plusieurs couches, couleurs neutres, couvre-chef large. Il porte toujours sur lui une gourde et un carnet — le carnet pour noter les noms, les situations, les demandes des gens qu'il rencontre. Il en est à son quatorzième carnet en douze ans. Les anciens sont rangés dans sa base de Keth-Alvar.`,
    signes_particuliers: `Il connaît les noms de tout le monde. Pas seulement les Élus qu'il recrute — les familles, les anciens du village, les enfants qu'il a vus grandir sur trois ou quatre visites espacées de quelques années. Il ne fait pas ça pour les informations. C'est simplement comment il fonctionne — les gens comptent, les noms comptent, et retenir les deux est une façon de le prouver.`,
  },

  psychologie: {
    dominante: `Vashmael croit dans la redistribution avec la conviction de quelqu'un qui a vu la différence que ça fait. Il n'a pas construit sa foi sur des discours — il l'a construite sur des villages où il y avait de l'eau l'année d'après sa visite, sur des familles qui avaient planté là où il y avait du sable. Les preuves existent. Il les a vues.

    Ce que la Convergence fait de certaines informations qu'il fournit — les profils d'Élus, les localisations des "ressources prioritaires" — ne traverse jamais son champ de vision directement. Razhal filtre ce qui lui arrive. Il reçoit les bonnes nouvelles. Il recrute en bonne conscience.`,
    mecanisme_de_defense: `Il ne pose pas de questions sur ce qu'il ne voit pas. Pas par naïveté — par division du travail. Il fait le terrain. D'autres font les opérations. Il a vu assez de résultats positifs pour faire confiance à la chaîne sans avoir besoin de superviser chaque maillon. C'est ce qu'on fait dans une organisation qui fonctionne.

    Cette logique est honnête dans beaucoup de contextes. Dans ce contexte précis, elle est mortelle.`,
    contradiction_interne: `Arev est son modèle depuis quinze ans. Il n'a jamais rencontré Arev directement — il connaît sa réputation, ses méthodes de terrain, la façon dont il approche les communautés sans promettre l'impossible. Vashmael a calqué son approche sur cette image d'Arev.

    Ce qu'il ne sait pas : Arev a quitté la Convergence précisément parce qu'il a découvert ce que la Convergence faisait des informations que des gens comme Vashmael fournissaient. Vashmael suit le modèle de quelqu'un qui a fui en horreur ce que Vashmael fait encore en confiance.`,
    rapport_aux_autres: `Il traite les gens avec une considération réelle. Quand il identifie un Élu prometteur dans une communauté, il passe du temps avec la famille, explique, répond aux questions, adapte sa présentation selon les peurs et les espoirs de chaque personne. Il ne ment pas sur ce qu'il sait — il présente ce qu'il sait honnêtement.

    Le problème est dans ce qu'il ne sait pas. Les informations qu'il transmet de bonne foi alimentent quelque chose qu'il n'a jamais vu.`,
    vision_du_monde: `Il croit que les Déserts méritent mieux que ce que l'Empire leur a donné. Pas une conviction abstraite — il a vu les zones mortes, les terres stérilisées par des décennies de sur-extraction, les communautés qui subsistent là où il devrait y avoir de la vie. La redistribution élémentaire comme idée — rééquilibrer ce que l'Empire a déséquilibré — lui semble une réponse juste à une injustice réelle.

    Il n'a pas tort sur le diagnostic. Il ne voit pas encore le traitement.`,
  },

  histoire: {
    enfance: {
      titre: 'Keth-Alvar et les terres qui se souviennent',
      contenu: `Vashmael a grandi à Keth-Alvar, à la lisière d'une zone de désertification avancée — une bande de terre qui avait été fertile deux générations avant sa naissance et qui était devenue stérile progressivement, sans catastrophe visible, simplement par épuisement. Sa grand-mère lui décrivait ce que ça avait été : des cultures jusqu'à l'horizon, des greniers pleins, des pluies qui tombaient en saison.

      Son élément Sol lui était venu à dix ans avec la qualité d'une mémoire — comme si la terre lui montrait ce qu'elle avait été, la vitalité qu'elle portait encore en fond, l'épuisement accumulé à la surface. Il avait passé son adolescence à apprendre ce que le sol savait, à distinguer la stérilité temporaire de la stérilité profonde, à sentir où la vie avait des chances de revenir si on l'aidait.

      Son élément Normal était la chose qui équilibrait tout ça — l'adaptabilité, la capacité à fonctionner dans des contextes divers sans se perdre, la solidité ordinaire qui permet de continuer quand les choses ne sont pas spectaculaires. Pas d'élément glamour. Deux éléments utiles.

      La Convergence l'avait trouvé à trente-deux ans.`,
    },
    arrivee: {
      titre: 'Douze ans sur les routes',
      contenu: `Le recruteur qui l'avait approché avait présenté les choses sans ambiguïté : la Convergence cherchait quelqu'un avec ses compétences Sol pour évaluer les terres et les communautés dans les zones sous-développées des Déserts. Il lirait le sol, identifierait les sites de potentiel, rencontrerait les populations locales. Ses rapports permettraient de cibler les interventions de redistribution.

      Il avait accepté parce que c'était exactement ce qu'il voulait faire. Pas pour une faction. Pour les terres.

      Les deux premières années avaient confirmé tout ce qu'on lui avait promis — il allait dans les villages, il évaluait, il signalait, et quelques mois plus tard des équipes arrivaient avec des techniques de revitalisation. Il voyait les résultats. Les résultats étaient réels.

      Son carnet avait deux sections : les terres et les Élus. La section Élus était apparue dans sa deuxième année, quand on lui avait demandé d'identifier aussi les potentiels élémentaires dans les communautés visitées. "Pour les orienter vers des formations adaptées à leurs capacités." Il l'avait fait de bon cœur. Il connaissait bien les gens. Il savait voir les Élus.`,
    },
    premier_conflit: {
      titre: 'Le suivi qui n\'arrivait pas',
      contenu: `Il y avait eu des moments, au fil des années, où des personnes qu'il avait recommandées pour une "formation élémentaire Convergence" n'avaient pas donné de nouvelles. Pas une, pas deux — une dizaine sur douze ans. Des jeunes Élus prometteurs, des gens qu'il avait rencontrés, avec qui il avait parlé, dont il se rappelait les noms.

      Chaque fois, quand il avait demandé, Razhal lui avait répondu avec des explications cohérentes. Formations intensives, isolement temporaire, problèmes de communication dans les zones reculées. Les explications changeaient légèrement selon les cas mais restaient dans le domaine du plausible.

      Vashmael les avait acceptées. Il avait continué à demander de temps en temps — pas de façon insistante, juste un suivi normal pour quelqu'un qui avait du lien avec les personnes recommandées. Les réponses avaient continué à être cohérentes.

      Ce qu'il ressentait sans l'articuler : une légère gêne, dans le silence de ces absences. Pas du soupçon. Quelque chose de moins précis. La sensation que le sol sous une communauté est différent de ce qu'il était à la visite précédente — pas d'explication visible, mais quelque chose de changé.`,
    },
    revelation: {
      titre: 'Lysael et le parallèle qui dérange',
      contenu: `Il y a deux mois, il avait croisé Lysael à Virex — une collègue qu'il ne connaissait pas directement, dont il savait seulement qu'elle faisait "le même travail" dans une zone différente. Ils avaient partagé un repas, échangé des méthodes.

      Lysael avait une précision dans ses critères d'identification qui l'avait légèrement dérangé. Elle ne cherchait pas les Élus prometteurs au sens large — elle cherchait des profils très spécifiques. Elle avait utilisé un terme qu'il n'avait pas entendu avant : "profil de saturation élémentaire maximale". Et quand il lui avait demandé ce que ça voulait dire exactement, elle avait répondu avec une facilité qui suggérait que la question lui semblait évidente.

      Il n'avait pas demandé plus loin. Mais quelque chose s'était installé — pas encore une question nette, pas encore un soupçon. Plutôt une légère différence de densité dans le sol, du genre qu'il ne pouvait pas encore expliquer.

      Il a continué son travail. Il a soumis ses rapports. Il n'a pas encore décidé si c'est la gêne d'un professionnel scrupuleux ou quelque chose de plus sérieux.`,
    },
    etat_actuel: {
      titre: 'La prochaine visite et ce qu\'il ne pose pas encore',
      contenu: `Dans trois semaines il retourne à deux villages qu'il avait visités l'année dernière. L'un d'eux avait un jeune Élu Sol qu'il avait recommandé — Ferrak, dix-neuf ans, une sensibilité au sol remarquable. Il avait reçu il y a six mois une confirmation de "bonne intégration à la formation". Pas de lettres, pas de nouvelles directes. Ce n'est pas inhabituel.

      Il va demander à la famille. Il le fait toujours. Cette fois, pour une raison qu'il ne s'explique pas encore clairement, il a décidé d'écouter la réponse différemment qu'il ne l'a fait jusqu'ici.

      Arev — il n'a jamais rencontré Arev, mais il suit à distance ce qu'il entend sur lui. Depuis quelques années, ce qu'il entend suggère qu'Arev est devenu plus prudent vis-à-vis de la Convergence, moins directement associé, plus difficile à localiser. Vashmael avait attribué ça à des raisons opérationnelles. Peut-être. Il n'en est plus tout à fait sûr.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Fournit les profils d'Élus purs depuis 12 ans en croyant contribuer à leur formation. Ses informations alimentent directement le Protocole sans qu'il le sache.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Vashmael est la face humaine de la machine — celui dont la bonne foi rend le système possible. Il traite les gens avec soin, écoute, adapte. Son recrutement est efficace précisément parce qu'il est sincère. Narrativement : un personnage dont la révélation sera d'autant plus destructrice que sa foi était réelle.`,

  relations: [
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'mentor',
      description: `Chef d'opération qui reçoit ses rapports et filtre ce qui lui revient. Vashmael lui fait confiance — Razhal a toujours eu des explications cohérentes pour les absences. C'est une relation fonctionnelle et professionnellement respectueuse. La confiance est réelle. Elle est aussi la condition de tout le reste.`,
    },
    {
      personnage_id: 67,
      nom: 'Arev',
      type: 'inconnue_qui_change_tout',
      description: `Son modèle depuis quinze ans — sans jamais l'avoir rencontré. Il a calqué ses méthodes sur la réputation d'Arev. Ce qu'il ne sait pas : Arev a fui la Convergence en horreur précisément à cause de ce que Vashmael fait encore en confiance. Si ces deux-là se rencontraient, la dissonance serait dévastatrice.`,
    },
    {
      personnage_id: 63,
      nom: 'Lysael',
      type: 'rival',
      description: `Collègue à Virex dont les critères d'identification l'ont légèrement dérangé. Elle cherche des profils trop spécifiques avec trop de précision. La gêne n'a pas encore de nom mais elle est là.`,
    },
    {
      personnage_id: 235,
      nom: 'Khorath',
      type: 'allié',
      description: `L'exécuteur des opérations d'extraction dans sa zone. Vashmael le connaît comme un collègue compétent et peu bavard. Il ne sait pas ce que Khorath exécute exactement. Khorath sait tout ce que Vashmael ne sait pas. Khorath le protège de cette vérité — consciemment, par un mélange de respect et d'impossibilité de trouver les mots.`,
    },
  ],

  combat: {
    role_combat: `Combattant de terrain polyvalent — Sol lui donne la solidité et la lecture de l'environnement physique, Normal lui donne l'adaptabilité. Il n'est pas un spécialiste du combat et ne cherche pas à l'être. Sur le terrain, son instinct est de stabiliser plutôt que d'attaquer.`,
    sorts: [
      {
        nom: 'Lecture de Terrain',
        element: 'Sol',
        type: 'passif',
        description: `Il sent les vibrations et la qualité du sol sous lui. Passif permanent. En combat, il perçoit les mouvements à travers le sol avant de les voir. Dans les terrains meubles ou instables, cet avantage est décisif.`,
      },
      {
        nom: 'Ancrage Communal',
        element: 'Sol',
        type: 'base',
        description: `Il ancre sa position et renforce la stabilité de ses alliés adjacents. Pas du bouclier — de la solidité. Les alliés dans sa zone gagnent de la résistance au déplacement forcé et aux effets de destabilisation.`,
      },
      {
        nom: 'Adaptabilité de Terrain',
        element: 'Normal',
        type: 'situationnel',
        description: `Il tire parti des caractéristiques du terrain actuel mieux que n'importe qui d'autre. Dans un terrain qu'il a étudié (sol meuble, rocaille, sable), ses actions coûtent moins d'énergie et ses sortes Sol ont des effets bonus spécifiques au type de sol.`,
      },
      {
        nom: 'Stabilisation de Zone',
        element: 'Sol',
        type: 'signature',
        description: `Il stabilise une zone de terrain — neutralise les effets d'instabilité (tremblement, affaissement, boue, sable mouvant), crée un sol solide utilisable par ses alliés. Outil de réponse aux sorts de contrôle du terrain. Sa maîtrise Sol lui permet de faire ça dans des conditions où personne d'autre ne le pourrait.`,
      },
      {
        nom: 'Revitalisation',
        element: 'Normal',
        type: 'ultime',
        description: `Il libère une impulsion d'énergie élémentaire Sol dans le sol de toute la zone de combat — les alliés récupèrent de l'endurance, les effets d'épuisement sont réduits. Pas d'attaque. C'est ce qu'il fait depuis douze ans : rendre le terrain vivable pour les autres.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_terrain',
      description: `Homme de 44 ans, trapu et solide, peau brun cuivré intense, mains larges, rides précoces autour des yeux. Il est en terrain désertique — couvre-chef large, tissu léger en plusieurs couches, carnet ouvert dans la main. Son expression est ouverte, attentive, le sourire facile de quelqu'un qui passe sa vie à parler aux gens et à leur faire confiance. Il tient son carnet mais regarde au loin, vers un village visible à l'horizon.`,
    },
  ],

  lore_long: `Vashmael a touché son premier sol mort à onze ans.

Ce n'était pas spectaculaire — une bande de terrain à la sortie de Keth-Alvar, entre la route et le début du désert ouvert. De l'extérieur, du sable. Au toucher, quelque chose de différent : une absence. Pas le silence d'un sol qui dort — le silence d'un sol qui a fini de se souvenir.

Sa grand-mère lui avait dit que cette bande était des cultures il y a quarante ans. Il avait onze ans et il avait posé la paume à plat dans le sable et il avait cherché la mémoire. Il y en avait une — très loin en dessous, très ancienne, la trace de quelque chose qui avait poussé. Mais rien au-dessus. L'épuisement avait été complet.

Il avait passé sa vie à apprendre la différence entre la stérilité temporaire et la stérilité profonde.

*

Douze ans sur les routes lui avaient appris que la redistribution élémentaire faisait une différence réelle. Il n'avait pas besoin de discours pour le savoir — il avait les carnets. Quatorze carnets avec les noms des villages, les évaluations de sol avant et après, les cultures plantées l'année suivant une intervention de revitalisation. Les preuves étaient là, en chiffres et en noms.

C'est pour ça qu'il avait continué. Pas pour Razhal, pas pour la Convergence comme institution — pour Keth-Alvar et ses centaines d'équivalents dans les Déserts. Pour les gens qui avaient droit à une terre vivante.

Il recrutait de la même façon qu'il évangélisait sur le sol : avec précision et honnêteté sur ce qu'il savait. Il n'exagérait pas les promesses. Il montrait ce qu'il avait vu. Il répondait aux questions. Quand une famille hésitait, il attendait.

Ce qu'il ne savait pas : les informations qu'il transmettait sur les Élus prometteurs — leurs profils, leurs localisations, l'intensité de leur élément — prenaient deux chemins différents dans les bureaux de Razhal. Le chemin des formations existait vraiment. L'autre chemin, il ne l'avait jamais vu.

*

Lysael l'avait légèrement dérangé. Il ne savait pas encore comment nommer ça. Elle cherchait des "profils de saturation élémentaire maximale" avec une précision qui semblait dépasser le besoin d'une formation ordinaire. Quand il lui avait posé une question sur ces critères, elle avait répondu avec la facilité de quelqu'un pour qui la question est déjà résolue.

Il avait laissé passer.

Dans trois semaines il retourne à un village où il avait recommandé Ferrak, dix-neuf ans, pour une formation Sol. Six mois sans nouvelles directes. Il va demander à la famille. Cette fois, il a décidé d'écouter différemment qu'avant.

Il ne sait pas encore ce qu'il cherche. Il sait que quelque chose dans le sol a changé de densité depuis quelques mois, et qu'il ne sait pas encore l'expliquer.`,
};

export default lore;
