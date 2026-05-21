// ============================================================
//  KETHVAL — Lore complet (D3 · Cross Feu/Acier · Arc La Forge Confisquée)
//  id: 206 | Feu + Acier | Pyriens | Parti de l'Acier | Battlemage
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [P] — survit grâce aux structures Acier qu'il a forgées
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 206,
  nom: 'Kethval',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: `Un mètre quatre-vingt, large. Les mains d'un forgeron — trop grandes pour le reste du corps, calleuses sur l'intégralité de la paume. Sa masse est fonctionnelle et ancienne : il a commencé à forger à quatorze ans et son corps a grandi autour de ce travail.`,
    peau: `Rouge-brique Pyrien, avec des additifs Acier rares mais visibles : les fissures dans la peau qui luisent normalement orange chez les Élus Feu luisent chez lui d'une teinte argent-orange à certains endroits — le Feu et l'Acier se superposant dans les zones de forte canalisation. Ses mains sont couvertes de petites marques métalliques où l'Acier fondu a parfois jailli dans les mauvaises directions.`,
    yeux: `Ambre-cuivre, le regard d'un homme qui évalue constamment les contraintes structurelles de ce qu'il regarde. Dans les assemblées du Parti de l'Acier, on dit qu'il regarde les orateurs comme s'il cherchait des points de rupture.`,
    vetements: `Tablier de forge en cuir renforcé d'acier, en dehors du travail plié en bandoulière. Il ne retire pas le tablier entre les assemblées. Ce n'est pas de la distraction — c'est de l'identité.`,
    signes_particuliers: `Il peut percevoir la fatigue structurelle dans les métaux avant qu'elle soit visible à l'œil. Quand il marche dans les quartiers de Khar-Vurn post-Rupture, il sait lesquels des bâtiments reconstruits ont des problèmes dans leurs armatures.`,
  },

  psychologie: {
    dominante: `Kethval est du Parti de l'Acier parce que la structure protège. Ce n'est pas une idéologie abstraite — ses propres structures ont survécu à la Rupture Thermique alors que les bâtiments adjacents non. Il a forgé certaines des armatures des abris du Parti de l'Acier. Ces abris ont tenu. Il croit dans ce qu'il a prouvé.`,
    contradictions: `Son élément Feu le fait percevoir la chaleur différemment des autres Pyriens — il sent le feu comme une force vivante, imprévisible, qui résiste à toute structure si elle devient assez intense. Il sait que ses structures ne tiennent pas contre n'importe quelle intensité thermique. Il n'en parle pas lors des assemblées.`,
    peur: `Qu'une structure qu'il a forgée cède. Il a une liste mentale de tout ce qu'il a construit depuis vingt ans. Il vérifie régulièrement.`,
    desir: `Forger une armature qui tienne contre une Rupture de niveau maximal. Ce problème d'ingénierie l'occupe depuis la Rupture. Il a des idées. Il manque des matériaux.`,
    rapport_au_pouvoir: `Il soutient le Parti de l'Acier sans en approuver toutes les décisions. Herrath — le superviseur qui a refusé l'évacuation du D-7 — travaillait avec des armatures de sa conception. Cette coïncidence le pèse.`,
  },

  histoire: {
    origine: {
      titre: 'Forgeron du Parti',
      texte: `Kethval est né dans le quartier du Parti de l'Acier, fils d'un forgeron dont le père était forgeron. Sa double nature Feu/Acier s'est révélée à seize ans quand il a commencé à travailler l'acier à haute température — son élément Feu contrôlait la chaleur, son élément Acier percevait la structure du métal en temps réel. Les forgerons du Parti l'avaient vu travailler et avaient immédiatement compris la valeur.

Il était devenu leur forgeron principal à vingt ans. À trente-cinq, la Rupture Thermique avait eu lieu.`,
    },
    eveil: {
      titre: 'Ce Qui a Tenu',
      texte: `Pendant la Rupture, il était dans son atelier en train de travailler sur une commande d'armatures pour les abris du secteur B. Son atelier était dans le quartier Acier — les structures y étaient conçues pour résister aux chocs thermiques. Il avait survécu sans blessure.

Le secteur D-7 était à deux kilomètres. Il avait vu la fumée depuis la fenêtre de son atelier.

Les armatures qu'il avait forgées pour les abris du secteur B avaient tenu. Celles du secteur D-7 n'étaient pas de lui — un contrat qu'il avait refusé deux ans plus tôt parce que les spécifications thermiques lui avaient semblé insuffisantes. Il avait soumis un contre-devis. Il avait été ignoré.`,
    },
    rupture: {
      titre: 'La Liste',
      texte: `Après la Rupture, il avait fait deux choses. D'abord, il avait aidé à déblayer les décombres du secteur D-7 avec ses bras et son élément Acier pour détecter les structures encore stables. Il avait trouvé vingt-trois survivants dans cette opération.

Ensuite, il avait dressé une liste de tout ce qu'il avait construit ou refusé de construire dans les six ans précédant la Rupture. Cette liste incluait les armatures qu'il avait refusées pour le secteur D-7, la date du refus, et la raison invoquée dans son contre-devis.

Il avait transmis cette liste au Parti de l'Acier. Il n't avait pas eu de réponse pendant trois semaines. Quand la réponse était arrivée, elle disait que ces informations n'étaient pas pertinentes pour la reconstruction.

Il avait gardé la liste.`,
    },
    maintenant: {
      titre: 'Le Problème d'Ingénierie',
      texte: `Il travaille maintenant sur le problème d'armatures anti-Rupture. Ce n'est pas un mandat du Parti — il le fait sur son propre temps, dans son propre atelier, en utilisant ses propres matériaux. Il a développé une théorie : une armature combinant des alliages classiques avec des structures élémentaires Acier permanentes résisterait à des intensités thermiques de classe Rupture. Il n'a pas encore résolu le problème du coût de production.

En parallèle, il assiste aux assemblées du Parti. Il vote régulièrement contre des décisions qui lui semblent techniquement insuffisantes. Il perd régulièrement. Il continue.`,
    },
    objectif: {
      titre: 'La Structure Qui Tient',
      texte: `Il veut que ce qui s'est passé au D-7 ne puisse plus se passer. Pas "moins probable" — impossible. Pour ça, il a besoin de résoudre le problème d'ingénierie. Pour résoudre le problème d'ingénierie, il a besoin de matériaux que le Parti de l'Acier ne lui donnera pas tant qu'il n'aura pas une preuve conceptuelle. Pour une preuve conceptuelle, il a besoin de tester sur des structures existantes.

Le cercle continuera jusqu'à ce qu'il trouve une façon de le briser.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Forgeron militaire du Parti de l'Acier, double élément Feu/Acier. A survécu à la Rupture grâce à ses propres structures. Détient une liste des armatures insuffisantes du D-7 qu'il avait refusées deux ans avant la Rupture. Travaille sur un problème d'ingénierie anti-Rupture en dehors de son mandat officiel.`,
  },

  relations: [
    {
      personnage_id: 9,
      nom: 'Skarith',
      type: 'collègue_du_Parti',
      depuis_ici: `Skarith et lui représentent deux visions différentes du Parti de l'Acier — Skarith la discipline militaire, Kethval l'ingénierie structurelle. Ils se respectent. Skarith lui a dit une fois : "Ce que tu construis dure après que les ordres changent." Kethval n'a pas trouvé de meilleur compliment.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 4,
      nom: 'Thryss',
      type: 'supérieur_politique',
      depuis_ici: `Thryss est la voix du Parti de l'Acier dans les assemblées politiques. Kethval est la voix dans les assemblées techniques. Ils s'évitent poliment dans les espaces qui mélangent les deux. Thryss approuve ses travaux d'armature sans comprendre ses travaux d'armature. Kethval accepte ce compromis.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 3,
      nom: 'Gravel',
      type: 'adversaire_raisonnable',
      depuis_ici: `Gravel porte le marteau de son père et attribue la mort de Drevahn à la négligence systémique. Kethval sait que certaines armatures insuffisantes du D-7 étaient d'entreprises du Parti de l'Acier, pas de l'Empire. Ces deux vérités coexistent. Il ne dit pas ça à Gravel. Il n'a pas encore décidé s'il le devrait.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Kethval combat avec la même logique qu'il forge : structure d'abord, chaleur ensuite. Il crée des positions solides avant d'attaquer, et ses attaques ont la durabilité d'un métal bien trempé — pas spectaculaires, mais persistantes.`,
    sorts: [
      {
        nom: 'Armature Thermique',
        type: 'sort_de_base',
        elements: ['Feu', 'Acier'],
        description_gameplay: `Kethval solidifie sa position. Pendant 2 tours, ses dégâts reçus sont réduits de 25% et ses attaques infligent un effet de brûlure persistant. Si un allié est adjacent, la réduction s'applique à lui aussi.`,
        description_lore: `La combinaison de ses deux éléments — la chaleur qui durcit, la structure qui tient. En combat, ça ressemble à une résistance qui ne fléchit pas.`,
      },
      {
        nom: 'Frappe Structurelle',
        type: 'sort_situationnel',
        elements: ['Acier', 'Feu'],
        description_gameplay: `Kethval frappe avec précision les points de faiblesse d'une structure ennemie (armure, bouclier, effet de protection). Annule les effets de protection de la cible pour 2 tours et inflige des dégâts basés sur l'armure annulée.`,
        description_lore: `Son élément Acier lui permet de percevoir les points de rupture dans n'importe quelle structure. En combat, ça s'applique aux défenses ennemies.`,
      },
      {
        nom: 'Forge de Combat',
        type: 'sort_situationnel',
        elements: ['Feu', 'Acier'],
        description_gameplay: `Kethval forge une structure temporaire sur le terrain — un mur de métal fondu (2 cases de long) qui bloque le passage et inflige des dégâts de brûlure à tout contact. Durée : 3 tours. Peut être utilisé offensivement ou défensivement.`,
        description_lore: `Ce qu'il fait dans son atelier, appliqué au temps réel d'un combat. Les armatures qu'il construit en secondes ne durent pas des siècles, mais elles durent assez.`,
      },
      {
        nom: 'Structure Maximale',
        type: 'ultimate',
        elements: ['Acier', 'Feu'],
        description_gameplay: `Kethval ancre sa position. Pendant 3 tours, il est immunisé aux effets de déplacement forcé et son élément Acier renforce toutes ses armures temporaires et celles des alliés dans un rayon de 3 cases (+40% de durabilité). En retour, il ne peut pas se déplacer de plus de 1 case par tour.`,
        description_lore: `La structure maximale ne se déplace pas. Elle tient. C'est son principe de forge, appliqué à son propre corps.`,
      },
      {
        nom: 'Perception de Rupture',
        type: 'passif',
        elements: ['Acier'],
        description_gameplay: `Passif. Kethval perçoit quand les défenses ennemies sont à moins de 30% de leur valeur maximale — ces cibles sont marquées, et ses attaques contre elles ignorent 20% de leur armure restante.`,
        description_lore: `Vingt ans à évaluer les points de fatigue structurelle dans les métaux. Les défenses d'un ennemi épuisé se lisent de la même façon.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Kethval',
      description: `Pyrien masculin, 39 ans, 1m80, masse de forgeron. Peau rouge-brique avec fissures luisant argent-orange aux jointures. Mains disproportionnées avec marques métalliques. Tablier de forge en cuir renforcé. Expression évaluatrice, calme. Fond : atelier de forge à Khar-Vurn, métal en travail, chaleur visible. Style concept art Riot Games, tons rouge-orange-argent.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 900,

  lore_long: `LA LISTE
Un chapitre de la vie de Kethval, forgeron du Parti de l'Acier

—

I.

La liste faisait trois pages.

Vingt-trois contrats acceptés, dont les armatures avaient survécu à la Rupture. Quatre contrats refusés, dont les spécifications thermiques étaient insuffisantes. Dont deux dans le secteur D-7.

Il avait transmis la liste au Parti de l'Acier dix jours après la Rupture. La réponse était arrivée avec trois semaines de retard : ces informations n'étaient pas pertinentes pour la reconstruction.

Il avait gardé la liste. Elle était maintenant encadrée dans son atelier, entre deux schémas d'armature et un calendrier de maintenance.

—

II.

Il travaillait sur le problème depuis dix-sept mois.

Le problème : une armature anti-Rupture maximale. Pas résistante à une Rupture normale — résistante à une Rupture de classe maximale, l'intensité thermique qui avait vitrifié la Forge Silencieuse et solidifié en verre des corps entiers. Cette intensité-là, rien ne tenait.

Son hypothèse : une armature avec une structure Acier élémentaire permanente — pas forgée, cultivée — résisterait en distribuant la chaleur dans le réseau métallique plutôt qu'en la bloquant. Le métal absorberait, redistribuerait, survivrait.

Il avait des prototypes. Ils tenaient à soixante-dix pour cent de l'intensité maximale théorique. Il cherchait les trente pour cent restants.

—

III.

Gravel avait dit à l'assemblée de la semaine passée que la mort de son père était le résultat de la négligence systémique de l'Empire.

Kethval était dans la salle. Il avait écouté. Gravel n'avait pas tort — l'Empire avait sous-financé la maintenance. Mais Gravel ne savait pas que les armatures du secteur D-7 avaient été produites par des entreprises du Parti de l'Acier selon des spécifications que lui, Kethval, avait refusé de signer. Ces entreprises avaient pris le contrat après son refus.

Il avait gardé le silence pendant l'assemblée.

Ce n'était pas de la complicité — du moins, c'est ce qu'il se disait. C'était de la complexité. L'Empire avait sous-financé. Le Parti de l'Acier avait produit insuffisamment. Les deux étaient vrais. Gravel avait besoin d'une cible. Kethval ne savait pas si introduire une deuxième cible l'aidait ou le paralysait.

Il avait voté pour les nouvelles normes de spécification thermique à la fin de l'assemblée. Unanimement.

Ce soir, il retournait à son atelier. Les trente pour cent restants ne se résoudraient pas seuls.`.trim(),
};

export default lore;
