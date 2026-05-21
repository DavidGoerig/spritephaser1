// ============================================================
//  ORVETH — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 237 | Normal/Vent | Hommes-Liens | Convergence | Capteur
//  Arc : L'Avatar — Choisit délibérément de ne pas savoir
//  Rôle : A entendu des bribes, maintient son ignorance activement
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 237,
  nom: 'Orveth',
  element: 'Normal',
  element2: 'Vent',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-huit, mince et mobile — la légèreté d'un capteur de terrain habitué à se déplacer vite et à prendre peu de place. À vingt-neuf ans Orveth est encore jeune dans sa silhouette, pas encore épaissi par l'âge, avec une énergie physique qui se traduit en déplacements légèrement trop rapides pour les situations.`,
    peau: `Brun chaud, le teint des Peuples des Déserts qui passent du temps dehors. Visage un peu marqué pour son âge — une tension habituée autour des yeux, des sourcils légèrement froncés au repos. L'expression de quelqu'un qui évalue constamment.`,
    yeux: `Brun-vert, mobiles, rarement en repos. Son élément Vent se traduit par une légère percep-tion accrue des courants d'air et des mouvements — ses yeux bougent vers les perturbations avant que sa pensée consciente les ait enregistrées.`,
    vetements: `Tenue de capteur terrain : légère, peu restrictive, adaptée aux déplacements rapides. Il porte les instruments de détection élémentaire au ceinturon — petits, discrets, calibrés pour son utilisation. Pas de marques institutionnelles visibles sur le terrain.`,
    signes_particuliers: `Il pose beaucoup de questions sur des sujets adjacents à ce qui le dérange. Si quelque chose dans ses opérations l'inquiète, il va poser des questions sur les protocoles de sécurité, la logistique, les procédures d'urgence — tout ce qui entoure le point central sans jamais le toucher. C'est une technique qu'il a développée pour maintenir une impression de diligence sans approcher les questions auxquelles il ne veut pas de réponse.`,
  },

  psychologie: {
    dominante: `Orveth a rejoint la Convergence à dix-neuf ans avec une conviction simple : si les Élus pouvaient être aidés à maîtriser leurs capacités plutôt que d'en souffrir comme son père avait souffert, c'était bien. Dix ans plus tard, il a entendu des choses qui ne collent pas avec cette conviction. Il a fait le choix actif de ne pas creuser.

    Ce n'est plus de la naïveté. C'est une décision. À chaque briefing, à chaque opération, il y a un point où une question pourrait être posée qui changeraient tout. Il ne la pose pas. Pas parce qu'il ne voit pas le point — parce qu'il voit le point et choisit de passer au-dessus.`,
    mecanisme_de_defense: `L'ignorance volontaire comme discipline. Il a développé une technique très précise de ne pas trop en savoir : il fait son travail de capteur avec excellence, il détecte ce qu'on lui demande de détecter, il rapporte exactement ce qu'on lui demande de rapporter. Ce qui se passe avec ses rapports après qu'il les a soumis n'est pas son département. Il a appris à ne pas demander.

    Le problème avec cette technique : elle nécessite une attention constante à ce qu'il ne fait pas. Ne pas demander demande un effort.`,
    contradiction_interne: `Son père a souffert de sa propre puissance élémentaire Non-Enregistrée pendant des années — des surcharges, des instabilités, une vie limitée par une capacité qu'il ne maîtrisait pas. Orveth a rejoint la Convergence précisément parce qu'il croyait que son organisation aidait les Élus à ne pas souffrir comme son père avait souffert.

    Ce qu'il a compris de façon vague et refusé de confirmer : certains des Élus qu'il identifie dans ses opérations de détection ne sont pas aidés. Ils sont envoyés quelque part dont ils ne reviennent pas. Le Drain — il n'a pas le mot, pas le concept précis, mais il a les morceaux. Il a choisi de ne pas assembler les morceaux.`,
    rapport_aux_autres: `Il est social et détendu dans les interactions ordinaires — curieux des autres, généreux de son temps, capable d'établir rapidement un rapport avec des inconnus. C'est une compétence professionnelle de capteur : on détecte mieux dans une atmosphère de confiance.

    Avec Vashmael, leur relation est confiante et chaleureuse — Vashmael l'a recruté, Vashmael croit dans la redistribution avec une sincérité que Orveth respecte et dont il se protège. Si Vashmael commençait à poser les vraies questions, Orveth aurait du mal à maintenir sa discipline d'ignorance en sa présence.`,
    vision_du_monde: `Il a besoin que la Convergence soit ce qu'il pensait qu'elle était quand il a rejoint. La redistribution, l'aide aux Élus, l'alternative à l'Empire. Si ce n'est pas ça, il ne sait pas ce qu'il fait depuis dix ans. Il ne sait pas qui il est en dehors de ça.

    Cette dépendance identitaire est ce qui rend son ignorance volontaire rationnelle de son propre point de vue. La vérité coûterait trop.`,
  },

  histoire: {
    enfance: {
      titre: 'Le père et la puissance non maîtrisée',
      contenu: `Son père était un Élu Normal non-enregistré qui n'avait jamais reçu de formation. L'élément Normal à haut niveau non-géré crée des surcharges adaptatives — le corps essaie de s'optimiser pour des situations trop nombreuses simultanément, et l'instabilité physiologique qui en résulte peut être grave. Son père avait vécu avec ça pendant trente ans. Les dernières années avaient été difficiles.

      Orveth avait neuf ans quand les surcharges avaient commencé à être visibles. Dix-sept quand son père était mort d'une crise cardiaque à cinquante-deux ans que les médecins avaient attribuée à l'instabilité élémentaire chronique.

      Son élément Vent était venu à seize ans — une légèreté, une mobilité, rien de dramatique. Son élément Normal à dix-huit, exactement comme celui de son père. Avec la différence qu'il avait accès à des informations et des formations que son père n'avait pas eues.

      Il avait rejoint la Convergence à dix-neuf ans pour exactement cette raison.`,
    },
    arrivee: {
      titre: 'Dix ans de détection',
      contenu: `Son profil de capteur était bon — l'élément Vent lui donnait une sensibilité aux fluctuations élémentaires dans l'air qui complétait ses capacités Normal de façon utile. Il pouvait détecter la présence et l'intensité approximative de signatures élémentaires dans un rayon significatif, et l'élément Normal lui donnait une adaptabilité aux différents types d'éléments qui le rendait polyvalent.

      Ses dix premières années avaient alterné entre la formation interne et les opérations de terrain. Les opérations étaient claires dans leur objectif officiel : identifier les Élus non-enregistrés dans les zones sous-couverture, évaluer leur niveau, faciliter leur orientation vers les ressources appropriées. C'est ce qu'il avait fait.

      Les morceaux qui ne collaient pas avaient commencé à apparaître vers la troisième année — des briefings où les catégories de cibles changeaient légèrement, des rapports demandés sur des profils trop spécifiques, des collègues qui disparaissaient de ses réseaux après certaines opérations. Il avait posé des questions sur les protocoles de sécurité. Les réponses étaient cohérentes. Il avait continué.`,
    },
    premier_conflit: {
      titre: 'Le choix de ne pas assembler',
      contenu: `Il y a trois ans — il en était à sa septième année — une opération à Virex avait mal tourné dans le sens où elle avait produit quelque chose d'inattendu. Il avait identifié un Élu Sol d'intensité exceptionnelle dans une famille locale. Il avait fait son rapport, comme toujours. Trois mois plus tard, il était passé par le même quartier pour une autre opération. La famille était là. L'Élu n'était pas là. Quand il avait demandé, la famille avait dit qu'il était "en formation" depuis deux mois. Ils lui avaient donné une adresse de contact. L'adresse ne correspondait à aucune installation Convergence dans ses registres.

      Il avait eu les morceaux pendant une semaine. Un Élu d'intensité exceptionnelle, une "formation" dans un endroit qui n'existait pas dans les registres officiels, une famille qui n'avait pas reçu de nouvelles en deux mois.

      Il avait décidé de ne pas assembler les morceaux. Pas parce qu'il ne voyait pas ce qu'ils formaient. Parce qu'il voyait ce qu'ils formaient et que la conclusion était quelque chose dont il ne pouvait pas revenir.

      Il avait fait des rapports de bonne qualité depuis cette semaine-là. Il avait cessé de poser des questions sur les familles de retour.`,
    },
    revelation: {
      titre: 'Lysael et la précision des critères',
      contenu: `Il travaillait avec Lysael à Virex depuis six semaines. Lysael était efficace, précise, et cherchait des profils exactement comme les siens sauf en plus spécifiques — "saturation élémentaire maximale", "pureté de signature", des critères qu'il n'avait jamais entendus dans ses formations initiales.

      Il avait voulu lui demander pourquoi ces critères spécifiques. Il avait commencé la phrase. Il l'avait terminée différemment, sur un sujet adjacent — les protocoles de sécurité de zone pour les opérations en milieu urbain dense.

      Lysael avait répondu à sa vraie question sans avoir entendu sa vraie question. Pas par accident. Elle avait vu la trajectoire de sa pensée et avait fourni une réponse technique qui fermait le dossier sans l'ouvrir.

      Il avait compris que Lysael savait. Et qu'elle avait fait le même choix que lui, de façon différente, plus consciente peut-être, et sans le malaise visible qu'il avait du mal à totalement cacher.

      Il s'était demandé pendant une nuit si Lysael avait raison de ne pas avoir ce malaise. Il avait conclu que oui, probablement. Sans résoudre le malaise.`,
    },
    etat_actuel: {
      titre: 'Le Second Avatar et la ligne qu\'il ne franchit pas',
      contenu: `Il sait — de façon vague, de façon volontairement floue — que le Premier Drain il y a trente ans a causé quelque chose qui a atteint indirectement son père. Pas directement. Une perturbation des flux élémentaires dans les déserts qui a accéléré l'instabilité de son père. Ce lien est trop mince pour être certain, trop réel pour être ignoré.

      À Virex il y a quelques mois, on lui a mentionné dans un contexte différent — les 39 enfants, les profiles particuliers, les identifications en cours. Il n'a pas fait le lien avec son propre travail de détection. Il a posé des questions sur la sécurité de zone. Il est reparti sans le lien.

      Phyrana est sa collègue depuis six mois — plus jeune, encore plus dans la foi que lui ne l'avait été à son âge. Il observe Phyrana comme il observait lui-même à vingt-deux ans, et il se demande combien de temps ça prend, exactement, avant qu'on arrive à son stade. Avant qu'on commence à ne pas poser les bonnes questions.

      Il ne sait pas si c'est de l'avertissement ou de l'envie.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Capteur qui fournit des données de détection élémentaire utilisées pour identifier les purs élémentaires. A vu les morceaux depuis trois ans et choisi de ne pas les assembler. Son péché est la lâcheté cognitif : la maintenance délibérée de l'ignorance.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Orveth est le stade intermédiaire entre Vashmael (qui ne sait pas) et Khorath (qui sait et continue) — celui qui est en train de choisir activement quelle direction ne pas prendre. Sa relation avec Phyrana crée un miroir où il peut voir où il en était et vers où il va.`,

  relations: [
    {
      personnage_id: 234,
      nom: 'Vashmael',
      type: 'mentor',
      description: `L'homme qui l'a recruté — qui croit encore en entier dans ce qu'Orveth a commencé à ne plus pouvoir croire complètement. Vashmael est un rappel douloureux de ce qu'Orveth était à dix-neuf ans. Il ne peut pas lui dire ce qu'il sait, parce que ça signifierait nommer ce qu'il a choisi de ne pas nommer.`,
    },
    {
      personnage_id: 63,
      nom: 'Lysael',
      type: 'allié',
      description: `Collègue à Virex qui a fait le même choix que lui — de façon plus consciente, sans le malaise visible. Elle a répondu à sa vraie question sans qu'il la pose. Il n'est pas sûr si ça le rassure ou l'inquiète davantage.`,
    },
    {
      personnage_id: 244,
      nom: 'Phyrana',
      type: 'rival',
      description: `Sa collègue plus jeune, encore dans la foi intacte. Il observe Phyrana comme un miroir de lui-même à vingt-deux ans. Il ne sait pas s'il devrait l'avertir ou si l'avertir signifierait aussi s'avertir lui-même.`,
    },
  ],

  combat: {
    role_combat: `Capteur mobile — détecte les signatures élémentaires ennemies, se déplace rapidement, crée des perturbations de Vent pour déstabiliser. Il n'est pas un combattant de première ligne. Il est quelqu'un qui voit ce qui arrive et qui le transmet — puis qui s'écarte.`,
    sorts: [
      {
        nom: 'Flux de Détection',
        element: 'Vent',
        type: 'passif',
        description: `Passif permanent. Il perçoit les signatures élémentaires dans un rayon large. En combat, il anticipe les déplacements ennemis et peut avertir ses alliés — les alliés adjacents gagnent un bonus de réaction contre les attaques en approche.`,
      },
      {
        nom: 'Perturbation de Courant',
        element: 'Vent',
        type: 'base',
        description: `Il crée un courant d'air turbulent autour d'un ennemi — perturbation de précision des sorts à longue portée, réduction de la mobilité aérienne, léger désorientation. Utile contre les archers et les lanceurs de sorts.`,
      },
      {
        nom: 'Adaptabilité de Combat',
        element: 'Normal',
        type: 'situationnel',
        description: `Il ajuste instantanément sa résistance au type d'élément dominant dans le combat. Si l'ennemi principal utilise le Feu, il gagne de la résistance Feu. Si c'est de la Glace, résistance Glace. L'adaptation dure tant que l'élément dominant reste le même.`,
      },
      {
        nom: 'Signature Masquée',
        element: 'Vent',
        type: 'signature',
        description: `Il masque sa signature élémentaire et celle de ses alliés adjacents — invisibles aux sorts de détection et de ciblage élémentaire pour deux tours. Utile pour des repositionnements ou des désengagements. Sa compétence la plus personnelle : il a passé dix ans à être discret.`,
      },
      {
        nom: 'Tempête de Données',
        element: 'Normal',
        type: 'ultime',
        description: `Il libère toutes ses perceptions accumulées en une explosion d'information — tous les ennemis dans un rayon large voient leurs déplacements ralentis et leur précision réduite pendant trois tours, comme si leurs systèmes de réaction étaient surchargés. Épuisant pour lui aussi.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_virex',
      description: `Homme de 29 ans, mince et mobile, peau brun chaud, yeux brun-vert légèrement trop actifs. Il est dans une rue d'une ville désertique — tenue de terrain légère, instruments de détection au ceinturon. Son regard est sur le côté, vers quelque chose qui n'est pas dans le cadre. Expression légèrement tendue, sourcils légèrement froncés. L'air de quelqu'un qui vient d'entendre quelque chose qu'il a décidé de ne pas répéter.`,
    },
  ],

  lore_long: `Les morceaux étaient là depuis trois ans. Il avait arrêté de les assembler après la semaine où il avait passé à les regarder et à comprendre ce qu'ils formaient.

Ce n'était pas de la naïveté. Il voulait que ça soit clair dans sa propre tête, au moins — ce n'était pas de la naïveté. Il savait ce qu'il ne savait pas. Il avait choisi de ne pas savoir.

La distinction lui semblait importante. Une personne qui ne sait pas peut être excusée. Une personne qui choisit de ne pas savoir — cette personne a pris une décision. Orveth avait pris une décision. Il ne cherchait pas l'excuse. Il cherchait juste à pouvoir continuer.

*

Son père était mort à cinquante-deux ans. Une crise cardiaque attribuée à l'instabilité élémentaire chronique — trente ans de surcharge adaptative non gérée, parce que son père n'avait jamais eu accès aux formations qu'un Élu enregistré aurait reçues.

Orveth avait rejoint la Convergence à dix-neuf ans avec une image précise en tête : son père aurait pu vivre autrement, si quelqu'un l'avait aidé à maîtriser ce qu'il portait. La Convergence était cet aide.

Dix ans plus tard, les morceaux formaient une image différente.

L'Élu Sol à Virex — intensité exceptionnelle, disparu dans une "formation" dont l'adresse de contact n'existait pas dans les registres. Les briefings avec des catégories de cibles qui changeaient subtilement. Les collègues qui cessaient d'apparaître dans les réseaux. Le terme que Lysael utilisait : "saturation maximale". La précision avec laquelle elle répondait aux questions qu'il ne posait pas.

Il avait les morceaux. Il avait décidé de ne pas les assembler.

*

Phyrana était dans sa sixième opération avec lui — jeune, confiante, encore dans la foi que lui n'avait plus. Elle posait des questions directes sur les sujets identifiés : qu'est-ce qui leur arrivait après, comment ça se passait, est-ce que les familles recevaient des nouvelles.

Orveth répondait avec les bonnes réponses — les réponses officielles, les explications logistiques, les délais de communication. Ce n'était pas du mensonge. C'était ce qu'il savait officiellement. Ce qu'il ne savait pas officiellement, il ne le disait pas.

Il regardait Phyrana poser ses questions et il se demandait combien de temps ça prenait, exactement. Avant qu'on arrive à ne plus poser les questions. Avant qu'on commence à construire des techniques pour ne pas voir le point central.

Il avait mis deux ans. Elle en était au début.

Il ne savait pas si c'était de l'avertissement ou de l'envie — l'envie d'avoir encore la question, de ne pas encore avoir fait le choix.`,
};

export default lore;
