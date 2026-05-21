// ============================================================
//  VRASH — Lore complet (D3 · Cross Feu/Psy · Arc La Forge Confisquée)
//  id: 226 | Feu + Psy | Pyriens | Indépendant | Spécialiste
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [T] — avait senti la pression sociale avant qu'elle explose
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 226,
  nom: 'Vrash',
  element: 'Feu',
  element2: 'Psy',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: `Un mètre soixante-neuf, mince pour un Pyrien — le travail de Vrash est sédentaire, analytique, pas physique. Il a l'air légèrement absent même en présence directe, comme si une partie de lui écoute quelque chose que les autres n'entendent pas.`,
    peau: `Gris-basalte avec les fissures légères propres aux Pyriens non-forgerons. La luminescence orangée des fissures est faible — son élément Feu est moins expressif physiquement que chez les forgerons. En revanche, quand son élément Psy est actif, la peau autour de ses tempes montre une légère discoloration — pas des fissures, une tension visible dans les vaisseaux sous-cutanés.`,
    yeux: `Ambre pâle, presque jaune. Regardent les interlocuteurs de façon légèrement décalée — il perçoit les états émotionnels des gens autour de lui en même temps qu'il les écoute, ce qui donne l'impression qu'il regarde quelque chose d'invisible.`,
    vetements: `Tenues neutres, sans marqueurs de faction. Plusieurs couches légères. L'esthétique de quelqu'un qui veut pouvoir passer dans n'importe quel district sans déclencher d'association immédiate.`,
    signes_particuliers: `Il souffre de ce que les Élus Psy appellent "saturation" dans les grands rassemblements — trop d'états émotionnels simultanés à percevoir. Il limite son exposition aux grandes assemblées politiques, ce qui paradoxalement en fait quelqu'un que tous les partis veulent y voir.`,
  },

  psychologie: {
    dominante: `Vrash lit les tensions. Pas les opinions — les tensions. La différence entre ce que les gens disent et ce qu'ils ressentent, entre ce qu'ils croient vouloir et ce qu'ils s'apprêtent à faire. C'est une compétence que son double élément Feu/Psy lui a rendue naturelle : le Feu perçoit les variations thermiques ; le Psy perçoit les variations émotionnelles. Les deux convergent vers la même lecture : quelque chose s'apprête à chauffer.`,
    contradictions: `Il est Indépendant parce qu'appartenir à une faction lui interdirait de lire les tensions entre factions. Mais l'indépendance l'a rendu inutile à lui-même — il lit ce qui se passe et n'a pas de structure pour agir dessus. Depuis la Rupture, cette inutilité lui pèse.`,
    peur: `Qu'il soit précis mais sans conséquence. Avant la Rupture, il avait dit à plusieurs interlocuteurs que le Quatrième District était une bombe sociale. Personne n'avait agi. Il ne sait pas si c'est parce qu'il s'était mal exprimé ou parce que les gens avaient décidé de ne pas entendre.`,
    desir: `Trouver quelqu'un qui écoute avant que ça explose plutôt qu'après. Pas qu'on lui obéisse — qu'on entende ce qu'il dit et qu'on décide ensuite en connaissance de cause.`,
    rapport_au_pouvoir: `Toutes les factions lui ont demandé ses services à un moment ou un autre. Il travaille avec chacune ponctuellement, sur des questions spécifiques, sans exclusive. C'est son modèle depuis dix ans. La Rupture l'a rendu plus demandé et moins certain de l'utilité de l'être.`,
  },

  histoire: {
    origine: {
      titre: 'Le Lecteur de Tensions',
      texte: `Vrash a grandi dans la zone neutre de Khar-Vurn — la zone tampon entre le Parti du Feu et le Parti de l'Acier où habitaient ceux qui appartenaient aux deux ou à aucun. Son père travaillait pour les deux partis simultanément comme médiateur commercial. Vrash avait hérité de la méthode sans choisir le métier.

Son double élément Feu/Psy s'était révélé à dix-huit ans, dans une assemblée politique qui avait dégénéré. Il avait senti la dégénération deux heures avant qu'elle ne se produise — une combinaison de chaleur émotionnelle et de signaux psychiques qui convergeait vers une pointe. Il était sorti avant que ça arrive. Ses voisins qui étaient restés s'en souvenaient encore comme d'un "accident imprévisible".

Il avait commencé à offrir ses services comme lecteur de tensions aux marchands qui avaient besoin de savoir si une négociation allait bien se passer.`,
    },
    eveil: {
      titre: 'La Rupture Annoncée',
      texte: `Deux ans avant la Rupture Thermique, Vrash avait commencé à percevoir quelque chose de nouveau dans le Quatrième District.

Pas une menace physique — il n'avait pas d'élément thermique assez précis pour détecter des pressions dans des conduits géothermiques. Ce qu'il percevait était plus diffus : une saturation de frustration dans la zone. Des travailleurs qui ne signalaient plus les problèmes parce qu'ils avaient appris que les signalements ne servaient à rien. Un fatalisme cumulé, une désinvolture forcée, une résignation collective qui ressemblait à quelque chose qui s'apprête à ne plus retenir quoi que ce soit.

Il en avait parlé à deux contacts dans les partis respectifs. Il avait dit : le Quatrième District va exploser, pas nécessairement dans le sens thermique, mais il y a là-dedans une pression sociale qui dépasse la normale et qui cherche une sortie. Si on ne crée pas de sortie, elle en trouvera une seule.

Les deux contacts avaient dit merci. Aucun n'avait agi.`,
    },
    rupture: {
      titre: 'Après',
      texte: `Il avait regardé les colonnes de fumée du Quatrième District depuis sa fenêtre en sachant exactement ce que c'était et en sachant qu'il l'avait dit. Ce sentiment-là n'avait pas de nom satisfaisant dans aucune des langues qu'il connaissait.

Pendant les semaines suivantes, il avait refusé toutes les demandes de service des partis. Il avait passé ce temps à reconstituer la chronologie — pas pour les tribunaux ou pour un rapport, mais pour lui-même. Où la pression avait commencé. Ce qui aurait pu l'interrompre. Pourquoi ça ne l'avait pas été.

Ce qu'il avait trouvé : il avait perçu correctement. Il s'était exprimé de façon trop abstraite. "Pression sociale" n'avait pas le même poids que "le conduit de géothermie va lâcher". Les gens répondent aux menaces concrètes, pas aux saturations émotionnelles.

Depuis la Rupture, il travaillait sur sa façon de traduire ce qu'il perçoit en termes que les gens peuvent agir dessus.`,
    },
    maintenant: {
      titre: 'Le Problème de Traduction',
      texte: `Il travaille maintenant avec Brasia (id:1) ponctuellement — pas comme allié idéologique, mais parce qu'elle est la seule personne qu'il ait rencontrée qui écoute ses lectures sans les reformuler immédiatement dans le cadre de sa propre agenda. Elle utilise ses informations pour décider où déployer ses Dissidentes. Il lui fournit des lectures de tensions dans des zones qu'elle ne peut pas accéder directement.

En parallèle, il travaille sur sa propre méthode. Comment dire "ce quartier est à saturation" de façon que quelqu'un agisse, pas seulement qu'il acquiesce. Il n'a pas encore résolu le problème.`,
    },
    objectif: {
      titre: 'La Saturation Suivante',
      texte: `Il y a une saturation qui se construit en ce moment dans le quartier impérial de Khar-Vurn. Pas de même nature que le Quatrième District — pas thermique, pas sociale. Quelque chose de politique, de plus concentré. Des agents qui reçoivent des ordres contradictoires depuis six mois et qui commencent à résoudre la contradiction d'une façon qui n'a pas été autorisée.

Il a dit ça à Brasia il y a deux semaines. Elle a dit qu'elle prenait note.

Il surveille.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Lecteur de tensions indépendant, double élément Feu/Psy. Avait signalé la saturation sociale du Quatrième District deux ans avant la Rupture. Travaille ponctuellement avec Brasia depuis la Rupture. Identifie actuellement une saturation dans le quartier impérial de Khar-Vurn. Cherche à améliorer sa façon de traduire ses lectures en termes actionnables.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'partenaire_fonctionnelle',
      depuis_ici: `La seule personne qui utilise ses lectures sans les reformuler dans son propre cadre. Il lui fait confiance dans la limite de ce qu'il peut vérifier. Elle ne lui dit pas tout de ce qu'elle fait de ses informations — il ne le lui demande pas. Leur collaboration est strictement fonctionnelle et c'est pourquoi elle dure.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'sujet_d_observation',
      depuis_ici: `Il l'a lue deux fois lors d'assemblées — une fois avant qu'il sache qui elle était, une fois après. Ce qu'il a perçu était identique les deux fois : une conviction sincère et une sélection rigoureuse de ce qu'elle exprime versus ce qu'elle ressent. Ce n'est pas de la duplicité — c'est de la discipline. Ce n'est pas la même chose. Il n'a pas communiqué cette lecture à Brasia.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 11,
      nom: 'Orkhael',
      type: 'exemple_négatif',
      depuis_ici: `Orkhael utilise la blessure du Quatrième District comme outil politique. Vrash peut percevoir la différence entre quelqu'un qui souffre et quelqu'un qui utilise la souffrance des autres — la signature émotionnelle est très différente. Il n'a rien dit de cela publiquement. Il n'est pas sûr que ce soit son rôle de le dire.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Vrash combat avec une asymétrie d'information : il sait ce que l'adversaire va faire avant qu'il le fasse. Son élément Psy lui donne une lecture des intentions en combat, et son élément Feu lui fournit une réponse thermique calibrée. Il n'est pas le combattant le plus puissant. Il est le combattant le plus difficile à surprendre.`,
    sorts: [
      {
        nom: 'Lecture d'Intention',
        type: 'sort_de_base',
        elements: ['Psy'],
        description_gameplay: `Vrash lit les intentions de combat d'une cible ennemie. Pendant 2 tours, il connaît la prochaine action de la cible avant qu'elle ne se produise. S'il agit avant la cible ce tour-là, ses dégâts contre elle sont augmentés de 40%.`,
        description_lore: `Ce qu'il fait dans les assemblées politiques. Savoir ce qui va venir avant que ça arrive.`,
      },
      {
        nom: 'Chaleur Prémonitoire',
        type: 'sort_situationnel',
        elements: ['Feu', 'Psy'],
        description_gameplay: `Vrash perçoit le flux de chaleur émotionnelle dans une zone de 3×3 cases et libère une vague thermique précise. Les ennemis qui s'apprêtaient à utiliser un sort ce tour subissent des dégâts doublés (leurs intentions de canalisation les rendent plus vulnérables).`,
        description_lore: `La canalisation élémentaire crée une signature thermique et psychique avant de se produire. Il la lit et frappe à ce moment précis.`,
      },
      {
        nom: 'Saturation',
        type: 'sort_situationnel',
        elements: ['Psy'],
        description_gameplay: `Vrash amplifie la saturation émotionnelle dans une zone de 2×2 cases. Les ennemis dans la zone ont 35% de chances de rater leurs attaques pendant 2 tours — trop de signaux contradictoires pour agir avec précision.`,
        description_lore: `Ce qu'il a observé dans le Quatrième District avant la Rupture. Trop de pression, trop de signaux contradictoires — les gens cessent d'agir de façon cohérente.`,
      },
      {
        nom: 'Moment de Rupture',
        type: 'ultimate',
        elements: ['Feu', 'Psy'],
        description_gameplay: `Vrash identifie le point de rupture de la situation de combat. Pendant 1 tour, tous ses alliés ont leurs actions prioritaires — ils agissent avant tous les ennemis ce tour. En retour, Vrash est immobile pendant ce tour. Temps de recharge : 5 tours.`,
        description_lore: `Il y a un moment dans chaque situation de tension où tout peut basculer d'un côté ou de l'autre. Il le voit. Il donne à ses alliés ce moment.`,
      },
      {
        nom: 'Pas de Surprise',
        type: 'passif',
        elements: ['Psy'],
        description_gameplay: `Passif. Vrash ne peut pas être surpris — immunité à l'effet Surprise et aux embuscades. De plus, une fois par combat, quand un ennemi déclencherait une attaque critique contre lui, il peut la lire à l'avance et la réduire à des dégâts normaux.`,
        description_lore: `Après avoir prédit la Rupture sans être entendu, il a appris à surveiller aussi ce qui le menace directement.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Vrash',
      description: `Pyrien masculin, 35 ans, 1m69, mince, légèrement absent dans l'expression. Peau gris-basalte avec fissures Feu faibles et légère tension visible aux tempes (élément Psy). Yeux ambre pâle presque jaunes, regardent légèrement décalés. Tenue neutre sans marqueur de faction. Fond : zone neutre de Khar-Vurn, architecture entre les deux districts. Style concept art Riot Games, tons orange pâle et gris.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 900,

  lore_long: `LA TRADUCTION
Un chapitre de la vie de Vrash, lecteur de tensions indépendant

—

I.

Il avait dit "pression sociale".

C'était le problème. Deux ans avant la Rupture, il avait dit à son contact du Parti du Feu : "Il y a une pression sociale dans le Quatrième District qui dépasse la normale et qui cherche une sortie." Son contact avait hoché la tête. Vrash avait attendu une action. Il n'y avait pas eu d'action.

Depuis la Rupture, il travaillait sur la traduction.

La question n'était pas "qu'avais-je perçu". C'était "comment l'exprimer pour que quelqu'un agisse". "Pression sociale" était trop abstrait. "Quelque chose va exploser" était trop vague. Il lui fallait une formulation qui transformait une perception élémentaire en instruction concrète.

—

II.

Brasia avait demandé à le voir il y a trois jours.

Il l'avait retrouvée dans un café du district neutre, discrète comme toujours. Elle avait dit : — Tu as mentionné une saturation dans le quartier impérial.

— Oui.

— Précise.

— Des agents qui reçoivent des ordres contradictoires depuis six mois. La contradiction porte sur les limites d'autorisation en matière de détention d'Élus non-enregistrés. Certains ordres disent "détenir". D'autres disent "signaler seulement". Les agents du terrain résolvent l'ambiguïté.

— Comment ?

— La saturation émotionnelle que je lis chez eux ressemble à de la résolution de friction cognitive. Quand on donne à quelqu'un des ordres contradictoires assez longtemps, il choisit l'interprétation qui lui demande le moins d'effort. L'interprétation la moins coûteuse ici est "détenir d'abord, clarifier ensuite".

Brasia avait dit : — C'est actionnable.

Ce mot. C'était le mot qu'il cherchait depuis dix-sept mois.

—

III.

Ce soir, il observait une assemblée du Parti du Feu depuis le fond de la salle.

Orkhael parlait de la négligence impériale. Il parlait bien — le rythme, les images, la façon de faire monter la colère avant de la diriger vers la conclusion voulue. Vrash percevait la saturation émotionnelle dans la salle comme une chaleur homogène. Tous les gens dans cette salle voulaient que quelque chose soit à blâmer. Orkhael leur fournissait ce quelque chose.

Ce qu'il percevait chez Orkhael lui-même : pas de la même texture. De la concentration, de l'intention, de la satisfaction de contrôle. Ce n'était pas la colère de Gravel — qui brûlait à la même température avant et après les assemblées. C'était autre chose.

Ce n'était pas son rôle de le dire. Pas maintenant.

Il sortit avant la fin de l'assemblée. La saturation dans le quartier impérial avait progressé depuis sa lecture de la semaine dernière. Il avait une rencontre avec Brasia dans deux jours.

Cette fois, il avait une traduction.`.trim(),
};

export default lore;
