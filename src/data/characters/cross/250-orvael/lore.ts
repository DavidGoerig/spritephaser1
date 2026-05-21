// ============================================================
//  ORVAEL — Lore complet (D18 · Empire · Arc L'Avatar)
//  id: 250 | Combat/Stellaire | Hommes-Liens | Empire | Vanguard
//  Arc : L'Avatar — Commandant de la garde de la Chambre Interdite
//  Rôle : Réveil tardif — a arrêté de questionner à 30 ans, recommence
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 250,
  nom: 'Orvael',
  element: 'Combat',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt-trois, solide — la carrure d'un combattant expérimenté qui a continué à s'entraîner après avoir cessé de combattre. À cinquante-deux ans Orvael a perdu la rapidité de ses vingt ans mais rien de la densité physique. Il se déplace lentement dans les couloirs de la Citadelle, pas parce qu'il est vieux — parce qu'il regarde.`,
    peau: `Brun olive, bronzé inégalement par des décennies dehors et à l'intérieur alternativement. Des cicatrices sur les avant-bras, visibles quand ses manches sont courtes — des cicatrices de garde, pas de combat. Des années à s'appuyer sur des encadrements de portes avec les mêmes angles.`,
    yeux: `Brun foncé avec des reflets dorés — la manifestation Stellaire dans les yeux des Hommes-Liens qui développent cet élément secondaire est parfois une légère phosphorescence nocturne, parfois une teinte métallique dans la lumière directe. Chez Orvael c'est la teinte — ses yeux ont l'air différents selon l'angle, plus vivants qu'on ne l'attendrait d'un homme aussi peu expressif en général.`,
    vetements: `Uniforme de commandant de garde de la Citadelle, porté avec l'automatisme de vingt-deux ans. Il ne le remarque plus. Ce qu'il remarque : quand il n'est pas à son poste, l'absence de l'uniforme lui semble une information — comme si son corps savait que sans l'uniforme, il redevient quelqu'un qui doit décider quoi penser.`,
    signes_particuliers: `Ses flashes prémonitoires Stellaires. Il les a depuis ses trente ans — des images brèves, involontaires, pas toujours compréhensibles. Pendant vingt ans, il les a intégrés dans sa routine de commandant : voir quelque chose d'inhabituel, noter mentalement, continuer. Depuis six mois, la même image revient deux fois. C'est la première fois en vingt ans que le même flash se répète.`,
  },

  psychologie: {
    dominante: `Orvael a arrêté de questionner à trente ans. Pas par conviction — par épuisement. Il avait posé des questions sur des choses qu'il voyait dans la Chambre Interdite, sur des transferts qui lui semblaient inhabituels, sur des procédures dont le justificatif officiel lui paraissait insuffisant. Les réponses avaient été cohérentes et fermées. Il avait arrêté.

    Vingt-deux ans plus tard, trois collègues de Varek avaient été transférés en deux mois pour des raisons non expliquées. Et le même flash revenait depuis six mois. Orvael recommence à questionner. Il n'est pas sûr d'avoir encore l'énergie pour ça. Il n'est pas sûr qu'il puisse ne pas le faire.`,
    mecanisme_de_defense: `L'épuisement comme politique. Il avait appris à vingt ans que certaines questions coûtaient et ne produisaient pas de réponses utiles. La Citadelle était un système qui tournait mieux si les gardiens gardaient plutôt que questionnaient. Il s'était adapté à ce système. C'était une décision raisonnable à l'époque.

    Ce qu'il ne savait pas à trente ans : que vingt-deux ans plus tard, quelque chose verrait toujours ces questions-là.`,
    contradiction_interne: `Il a travaillé avec Nyreth avant la "mort" de celui-ci. Nyreth — qui s'appelait autrement alors, qui travaillait dans la section des archives Stellaires, qui posait des questions sur les connexions entre les mouvements des Élus et certaines périodes du Calendrier. Nyreth avait disparu il y a quinze ans, officiellement mort, et Orvael avait lu la notice officielle avec le sentiment d'une information qu'il n'avait pas la clé pour interpréter.

    Depuis six mois, son flash lui montre une porte ouverte dans la Chambre Interdite. Pas une porte forcée. Ouverte de l'intérieur.`,
    rapport_aux_autres: `Varek est son subordonné direct depuis cinq ans — quelqu'un qui fait son travail sérieusement et qui lui a transmis ses doutes sur les trois transferts sans savoir exactement quoi en faire. Orvael avait reçu ces doutes avec la neutralité d'un commandant et l'attention d'un homme qui avait commencé à remarquer les mêmes choses.

    Sylviel — il la voit deux fois par semaine dans le cadre des réunions de coordination. Elle lui semble avoir quelque chose sur l'esprit depuis quelques mois. Il ne lui a pas demandé. Elle ne lui a pas demandé non plus.`,
    vision_du_monde: `Il croit dans le service. Pas l'Empire en abstrait — le service concret, la garde, être présent à l'endroit où être présent compte. Il a fait ça pendant vingt-deux ans sans questionner ce qu'il gardait vraiment. Il commence à questionner.`,
  },

  histoire: {
    enfance: {
      titre: 'La Chambre Interdite depuis trente ans',
      contenu: `Orvael avait rejoint la garde de la Citadelle à vingt ans après une formation militaire standard. Son élément Combat lui donnait une compétence naturelle pour le poste. Son élément Stellaire — développé plus tard, vers vingt-cinq ans — lui avait donné quelque chose de différent : des flashes prémonitoires brefs, involontaires, inutilisables comme prédictions mais utiles comme alertes de vigilance. Il les avait intégrés à son travail de garde progressivement.

      À trente ans, il avait été nommé commandant adjoint de la garde de la Chambre Interdite. C'était une promotion. C'était aussi le moment où il avait commencé à poser des questions sur ce que la Chambre contenait et ce qui s'y passait. Les réponses avaient été cohérentes, officielles, et complètement fermées sur les points qui l'intéressaient vraiment. Il avait arrêté de demander.

      Il était devenu commandant plein à trente-huit ans, quand son prédécesseur avait pris sa retraite. Il n'avait pas posé de question sur les circonstances de cette retraite.`,
    },
    arrivee: {
      titre: 'Nyreth et la disparition qui avait un sens différent',
      contenu: `Nyreth avait travaillé dans les archives Stellaires adjacentes à la Chambre Interdite — pas sous le commandement d'Orvael, dans une section parallèle, mais ils avaient partagé les mêmes couloirs et les mêmes pauses de fin de service pendant trois ans.

      Ce qu'Orvael avait retenu de Nyreth : quelqu'un qui posait des questions avec une précision inhabituelle. Pas des questions agressives — des questions techniques, sur les connexions entre les données du Calendrier des Élus et certains événements dans les registres Stellaires. Des questions qui avaient l'air académiques et qui étaient manifestement autre chose.

      Nyreth avait disparu il y a quinze ans. La notice officielle disait "décès accidentel lors d'une mission de terrain". Orvael avait lu ça avec la sensation nette que ce n'était pas exact, et avec la décision de ne pas approfondir parce qu'approfondir semblait précisément le type de chose que Nyreth avait fait et qui n'avait pas bien terminé.

      Quinze ans plus tard, son flash lui montrait une porte ouverte de l'intérieur.`,
    },
    premier_conflit: {
      titre: 'Les trois transferts de Varek',
      contenu: `Varek lui avait signalé les trois transferts de façon officielle — protocole correct, rapport de commandant à commandant. Trois gardes de la section adjacente, transférés en deux mois vers des postes non spécifiés dans "les opérations extérieures". Varek avait formulé sa préoccupation en termes opérationnels : réduction de l'effectif, difficultés de couverture pendant la période de transition.

      Orvael avait entendu autre chose. Trois transferts sans explication satisfaisante, en deux mois, vers des destinations non identifiées. Ce schéma lui était familier — pas précisément, mais il avait la qualité d'une chose déjà connue dans sa texture.

      Il avait fait ce qu'il faisait depuis vingt-deux ans : noter, maintenir l'efficacité opérationnelle, attendre. Il n'avait pas encore posé de question officielle.`,
    },
    revelation: {
      titre: 'Le flash récurrent',
      contenu: `Il avait eu des milliers de flashes en vingt-deux ans. Des images brèves — une porte, une couleur, une position dans l'espace — qui se produisaient sans préavis et disparaissaient en quelques secondes. Il avait appris à les traiter comme des données périphériques, utiles parfois, pas fiables comme prédictions.

      Depuis six mois, deux fois, le même flash : la grande porte de la Chambre Interdite, ouverte. Pas de violence. Pas de forçage. La porte ouverte de l'intérieur, la façon dont elle s'ouvre quand quelqu'un sort.

      Ce flash s'était produit d'abord en janvier — une nuit de garde ordinaire, pendant qu'il vérifiait les relevés de son équipe. Et une deuxième fois trois mois plus tard, pendant une réunion de coordination avec Sylviel.

      En vingt-deux ans, aucun flash ne s'était répété. Le Stellaire ne fonctionnait pas comme ça — il montrait, il passait, il ne revenait pas. Quand quelque chose revenait, ça signifiait quelque chose. Il ne savait pas encore quoi.`,
    },
    etat_actuel: {
      titre: 'Ce qu\'il commence à faire',
      contenu: `Il a accès aux archives de la Chambre Interdite — pas au contenu, mais aux journaux d'accès des dix dernières années. Qui est entré, à quelle heure, pour quelle durée. C'est de l'information administrative, pas classifiée.

      Il a commencé à les lire systématiquement il y a deux mois. Il cherche quelque chose qu'il ne sait pas encore nommer — un schéma dans les accès qui corresponde à quelque chose qu'il a vu sans comprendre pendant vingt-deux ans.

      Nyreth. Les trois transferts de Varek. Le flash récurrent. Ces trois choses sont peut-être sans rapport. Il a passé vingt-deux ans à traiter les choses comme sans rapport quand elles méritaient peut-être d'être connectées.

      Il recommence à questionner. À cinquante-deux ans, avec l'épuisement de quelqu'un qui sait ce que ça a coûté la première fois. Et avec le sentiment — qu'il ne nomme pas encore comme un sentiment — que cette fois, il ne peut pas ne pas le faire.`,
    },
  },

  evenements_narratifs: [
    {
      evenement: 'L_Avatar',
      role: `Commandant de la garde de la Chambre Interdite du Calendrier depuis 22 ans. A arrêté de questionner à 30 ans, recommence depuis les transferts de collègues et le flash récurrent. Sa connaissance des journaux d'accès de la Chambre peut devenir une pièce décisive.`,
    },
  ],

  arcs: ['L_Avatar'],

  position_dans_arc: `Orvael représente le réveil tardif — celui qui avait choisi l'épuisement comme politique et qui voit maintenant que l'épuisement ne dure pas toujours. Sa position à la garde de la Chambre Interdite lui donne un accès administratif unique. Son flash récurrent est le signal Stellaire que quelque chose va changer dans la Chambre.`,

  relations: [
    {
      personnage_id: 247,
      nom: 'Varek',
      type: 'disciple',
      description: `Subordonné direct qui lui a transmis ses doutes sur les trois transferts. Orvael l'a écouté avec plus d'attention qu'il n'en a montré. Varek ne sait pas que son commandant recommence à questionner.`,
    },
    {
      personnage_id: 246,
      nom: 'Sylviel',
      type: 'allié',
      description: `Il la voit deux fois par semaine. Elle lui semble avoir quelque chose sur l'esprit. Ni l'un ni l'autre n'a posé la question. Ils travaillent dans le même système depuis suffisamment longtemps pour savoir que certaines questions se posent une fois qu'on est prêt à entendre la réponse.`,
    },
    {
      personnage_id: 13,
      nom: 'Nyreth',
      type: 'fantôme',
      description: `A travaillé avec lui avant sa "mort" il y a 15 ans. Posait les mêmes questions qu'Orvael commence à reposer. Orvael a lu la notice officielle de son décès avec la certitude que c'était autre chose. Il commence à se demander si Nyreth avait trouvé quelque chose et si ce quelque chose a encore une trace dans les journaux d'accès.`,
    },
  ],

  combat: {
    role_combat: `Commandant de première ligne — Combat lui donne l'efficacité physique d'un vétéran, Stellaire lui donne une perception prémonitoire qui lui permet d'anticiper les tactiques adverses. Il n'attaque pas le premier mais une fois engagé, il est très difficile à déstabiliser.`,
    sorts: [
      {
        nom: 'Vigilance de Garde',
        element: 'Stellaire',
        type: 'passif',
        description: `Passif permanent. Ses flashes prémonitoires s'appliquent en combat — il anticipe les attaques surprise avec une précision qui lui donne un tour de réaction supplémentaire. Les embuscades et les attaques dans le dos ont une chance réduite de le prendre au dépourvu.`,
      },
      {
        nom: 'Frappe de Commandant',
        element: 'Combat',
        type: 'base',
        description: `Attaque directe et précise — vingt-deux ans de technique condensée. Dégâts solides, chance élevée de déséquilibrer l'adversaire. Sa maîtrise Combat lui permet de frapper exactement là où il veut dans les conditions de stress.`,
      },
      {
        nom: 'Lecture de Position',
        element: 'Stellaire',
        type: 'situationnel',
        description: `Il évalue l'ensemble du champ de bataille en un flash Stellaire — identifie les positions des ennemis cachés et les intentions tactiques des adversaires proches. Pendant un tour, ses alliés gagnent une visibilité totale sur le terrain et ne peuvent pas être surpris.`,
      },
      {
        nom: 'Autorité de Garde',
        element: 'Combat',
        type: 'signature',
        description: `Son aura de commandant de la garde — les ennemis qui approchent sa zone dans un rayon de deux cases subissent un effet de ralentissement et doivent passer un test de résistance pour maintenir leurs positions d'assaut. Vingt-deux ans de présence dans les couloirs de la Chambre Interdite ont ancré quelque chose d'irréfutable dans sa façon d'occuper l'espace.`,
      },
      {
        nom: 'Vision Stellaire',
        element: 'Stellaire',
        type: 'ultime',
        description: `Il entre dans un flash Stellaire prolongé pendant deux tours — il voit les mouvements ennemis avant qu'ils se produisent avec une précision qui lui permet de bloquer ou d'éviter toute attaque ciblée. Pendant ces deux tours, il est quasi-intouchable. Après : épuisement de deux tours, pendant lesquels il ne peut pas utiliser de sorts.`,
      },
    ],
  },

  image_prompts: [
    {
      id: 'portrait_garde',
      description: `Homme de 52 ans, grand et solide, peau brun olive avec des cicatrices d'avant-bras, yeux brun foncé à reflets dorés. Il se tient dans un couloir de la Citadelle — uniforme de commandant, posture de garde automatique, mains dans le dos. Mais son regard est dirigé vers quelque chose hors-cadre plutôt que vers l'objectif — l'expression d'un homme qui est en train de voir quelque chose que les autres ne voient pas. Légèrement tendu. Légèrement ailleurs.`,
    },
  ],

  lore_long: `Il avait arrêté à trente ans. C'était la décision raisonnable.

Il avait posé les questions. Il avait reçu les réponses cohérentes et fermées. Il avait calculé le coût de continuer à poser des questions dont les réponses ne seraient pas différentes, et décidé que le coût dépassait le bénéfice. Il était resté commandant. Il avait fait son travail. Il avait gardé.

C'était une vie professionnelle correcte et fonctionnelle. Il n'en était pas heureux mais il n'en était pas malheureux non plus — il était dans l'endroit entre les deux où on passe la plupart du temps quand on a fait les compromis nécessaires.

*

Nyreth. Ils avaient partagé les mêmes couloirs pendant trois ans. Des pauses de fin de service, parfois — pas des conversations profondes, juste la proximité de gens qui travaillaient dans le même espace.

Ce que Nyreth faisait : poser des questions sur les connexions entre des données qui ne semblaient pas devoir être connectées. Pas agressivement. Avec la précision et la patience de quelqu'un qui avait l'habitude que les connexions prennent du temps à apparaître.

La notice officielle avait dit "décès accidentel lors d'une mission de terrain". Orvael avait lu ça avec le sentiment net que c'était autre chose, et avec la décision de ne pas approfondir.

Quinze ans plus tard, son flash lui montrait une porte ouverte de l'intérieur.

*

Deux fois. En vingt-deux ans, jamais le même flash deux fois. Le Stellaire montrait, passait, n'y revenait pas. C'était la règle, le schéma qu'il avait appris à lire — les flashs étaient des observations, pas des avertissements, pas des instructions. Ils montraient ce qui était, pas ce qui allait être.

Deux fois la même image : la porte de la Chambre Interdite, ouverte de l'intérieur.

Il lisait les journaux d'accès depuis deux mois. Vingt-deux ans de données. Il cherchait le schéma — les entrées qui ne correspondaient pas aux protocoles standards, les durées inhabituelles, les accès à des heures où les raisons légitimes étaient moins nombreuses. Il cherchait Nyreth, d'une façon. Les traces de ce que Nyreth avait trouvé avant de disparaître.

Il ne savait pas encore si ce qu'il cherchait était dans les données.

Il recommençait à questionner. À cinquante-deux ans, avec tout ce que ça avait coûté la première fois. Il n'était pas sûr que l'énergie soit là. Il n'était pas non plus capable de s'arrêter.`,
};

export default lore;
