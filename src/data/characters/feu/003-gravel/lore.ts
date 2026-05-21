// ============================================================
//  GRAVEL — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 3 | Feu | Pyriens | Parti du Feu | Battlemage
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [V] père mort Quatrième District
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 3,
  nom: 'Gravel',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: `Grand pour un Pyrien — un mètre quatre-vingt-deux, épaules de forgeron. Il n'est pas bâti pour la guerre mais pour le travail : muscles longs, résistance chronique, mains qui ont tenu des marteaux pendant vingt ans avant de tenir autre chose.`,
    peau: `Rouge-brique sous les scories. Les Pyriens de Varkhôl développent cette teinte sombre avec les années de travail aux forges — absorption thermique, adaptation cutanée. Gravel a des brûlures superficielles aux avant-bras qui n'ont jamais été soignées correctement : des cicatrices blanches en étoile sur fond rouge.`,
    yeux: `Ambre foncé avec des éclats orangés quand il est en colère, ce qui est souvent. Il ne cache pas ce qu'il pense — ses yeux arrivent avant ses mots.`,
    cheveux: `Noirs, court taillés, toujours couverts de cendre fine qui s'accumule dans les quartiers proches des forges. Il ne s'en préoccupe pas.`,
    vetements: `Veste de cuir épais aux couleurs du Parti du Feu — rouge sang avec les coutures en orange. Par-dessus : un tablier de forge repliable qu'il porte même aux assemblées politiques. C'est délibéré. Il veut qu'on sache d'où il vient.`,
    signes_particuliers: `Le marteau de son père, porté à la ceinture. Pas comme arme — comme preuve. Son père s'appelait Drevahn. Il est mort dans le Quatrième District pendant la Rupture Thermique, à deux rues de chez eux, en essayant de fermer une vanne de géothermie mal calibrée. Le marteau a été retrouvé dans les décombres. Gravel a vingt-deux ans de colère autour de ce manche en bois brûlé.`,
  },

  psychologie: {
    dominante: `Gravel n'est pas idéologue. Il est en deuil. Le Parti du Feu lui offre un endroit où mettre sa colère, des gens qui comprennent cette colère, et une explication à la mort de son père — l'Empire a négligé les systèmes thermiques du Quatrième District parce que le Quatrième District n'était pas stratégique. Ce n'est pas faux. Ce n'est pas toute la vérité non plus, mais Gravel n'a pas cherché toute la vérité.`,
    contradictions: `Il sait que le Parti du Feu exploite les morts du Quatrième District. Il le sait clairement. Il continue quand même — parce que l'alternative est de ne rien faire avec sa colère, et il ne peut pas faire ça. La colère doit aller quelque part.`,
    peur: `Que la mort de son père soit une erreur administrative, pas un crime. Une erreur ne mérite pas de vengeance. Et si ce n'est que ça, qu'est-ce qu'il fait de vingt-deux ans de rage ?`,
    desir: `Un compte à rendre. Pas nécéssairement une tête — il ne s'est jamais demandé clairement ce qu'il voulait que "justice" signifie. Mais quelqu'un devrait regarder ce qui s'est passé dans le Quatrième District et dire : c'était évitable.`,
    rapport_au_pouvoir: `Son Feu est offensif et direct — des rafales thermiques courtes mais denses, des murs de chaleur. Il ne fait pas dans la précision. Il fait dans la masse. Ses sorts ressemblent à un forgeron qui frappe : pas d'élégance, efficacité brute.`,
  },

  histoire: {
    origine: {
      titre: 'Le Quatrième District',
      texte: `Gravel a grandi dans le Quatrième District de Forge — le plus chaud, le plus bas, le plus oublié des districts de Khar-Vurn. Les conduits géothermiques y passaient à découvert, les maisons s'appuyaient contre eux pour se chauffer gratuitement, et tout le monde savait que c'était dangereux et continuait pareil parce que la chaleur gratuite ça ne se refuse pas dans un district où le charbon coûte.

Son père Drevahn était calibreur thermal de maintenance — un de ceux qui vérifient les pressions dans les conduits, ferment les vannes, signalent les anomalies. Un travail essentiel et invisible, payé au minimum du Parti de l'Acier, jamais mentionné dans les rapports annuels.

Gravel aidait son père les week-ends depuis ses dix ans. Il connaissait le sous-sol du Quatrième District comme d'autres connaissent leur propre cuisine.`,
    },
    eveil: {
      titre: 'La Rupture',
      texte: `Il avait dix-neuf ans le jour de la Rupture Thermique. Il était dans les étages hauts du bâtiment familial en train de réparer une gouttière. Son père était en bas, dans les conduits, avec un ordre de vérification d'urgence envoyé trente minutes avant l'incident — une anomalie de pression qui, rétrospectivement, était le début de la surtension.

Il a entendu le bruit. Il a vu la couleur que prenait le ciel au-dessus du Quatrième District — une teinte orange qui n'était pas normale même pour Khar-Vurn. Il est descendu.

Son père était dans la zone de rupture. Gravel n'a pas retrouvé le corps pendant trois jours. Il a retrouvé le marteau le premier jour.`,
    },
    rupture: {
      titre: 'Le Parti du Feu',
      texte: `Le Parti du Feu est arrivé dans le Quatrième District huit jours après la Rupture, avec des vivres, des équipes de nettoyage, et des orateurs. Les orateurs étaient bons. Ils parlaient de négligence impériale, de travailleurs sacrifiés, de systèmes maintenus par des hommes comme Drevahn dont les signalements d'anomalie avaient été classés "non-prioritaires" pendant trois mois avant la Rupture.

Ce dernier point était vrai. Gravel l'avait appris deux semaines après. Les rapports de son père, conservés dans ses propres archives parce que le système officiel ne les gardait pas, montraient quatre signalements entre mars et juin. Quatre réponses "en attente d'examen". La surtension avait eu lieu en juillet.

Il a rejoint le Parti du Feu ce soir-là.`,
    },
    maintenant: {
      titre: 'Orateur et battlemage',
      texte: `Gravel est depuis quatre ans l'un des représentants du Quatrième District dans les assemblées du Parti du Feu. Il parle bien — pas avec éloquence, avec poids. Les gens l'écoutent parce qu'il n'invente rien, qu'il cite des faits précis et qu'il porte littéralement le marteau de son père à la ceinture.

En combat, il est le premier dans la brèche et le dernier à sortir. Son Feu n'est pas tactique — c'est de la force brute calibrée pour tenir une ligne.

Ce qu'il ne dit pas aux assemblées : il a rencontré Kael (id:7), le forgeron du Quatrième qui a survécu à la Rupture dans la même zone que son père. Kael lui a dit des choses sur la nuit de la Rupture que Gravel n'a pas encore décidé quoi faire. Des choses qui compliquent le récit propre que le Parti du Feu lui avait donné.`,
    },
    objectif: {
      titre: 'Justice ou compte rendu',
      texte: `Gravel veut que quelqu'un dise que la mort de son père était évitable et qu'on aurait dû l'empêcher. Il n'a pas de plan plus précis que ça. Le Parti du Feu lui en a donné un — des réformes de maintenance, des inspections indépendantes, une révision des systèmes de signalement. Ce sont de bonnes politiques. Gravel les soutient.

Ce qu'il ne formule pas : aucune politique ne rend Drevahn à son marteau.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Représentant du Quatrième District, Parti du Feu. Fils de Drevahn, calibreur thermal mort dans la Rupture. Porte le marteau de son père. A entendu de Kael quelque chose qui complique le récit simple — n'a pas encore décidé quoi en faire.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'soignée_par_elle',
      depuis_ici: `Brasia l'a soigné une fois, deux ans après la Rupture, lors d'une manifestation qui avait mal tourné. Il ne sait pas qu'elle est Dissidente — il ne sait que ses mains. Elle l'a soigné sans demander sa faction. Il s'en souvient parce que c'est la première fois depuis la mort de son père que quelqu'un l'a touché sans attendre quelque chose en retour.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 7,
      nom: 'Kael',
      type: 'témoin_de_son_père',
      depuis_ici: `Kael était dans le Quatrième District la nuit de la Rupture. Il connaissait Drevahn — ils travaillaient dans la même zone, pas ensemble mais proches. Ce que Kael lui a dit : son père avait demandé une évacuation du secteur D-7 deux heures avant la surtension. La demande avait été refusée par un superviseur du Parti de l'Acier, pas par l'Empire. Gravel tient cette information et ne sait pas encore si elle change tout ou rien.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 4,
      nom: 'Thryss',
      type: 'adversaire_politique',
      depuis_ici: `Thryss représente le Parti de l'Acier dans les mêmes assemblées. Ils ne se détestent pas — ils comprennent que l'autre a des raisons. Mais Gravel pense que la structure que Thryss défend est exactement la structure qui a tué son père, et Thryss pense que la colère de Gravel est une arme politique, pas une analyse.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
  ],

  combat: {
    philosophie: `Gravel combat comme il forge : avec la masse, la chaleur et la régularité. Pas de feintes, pas d'élégance. Il crée une pression et il la maintient jusqu'à ce que quelque chose cède. En combat d'équipe, il est le mur thermique derrière lequel les autres opèrent.`,
    sorts: [
      {
        nom: 'Frappe du Forgeron',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Gravel concentre la chaleur dans ses poings et frappe le sol, libérant une onde thermique conique de 3 cases. Les ennemis touchés sont repoussés d'une case et subissent une brûlure légère (2 tours). Dégâts accrus (+30%) si Gravel n'a pas bougé ce tour.`,
        description_lore: `Il a développé ça en regardant son père travailler — la façon dont le coup de marteau sur une enclume chaude libère une onde de chaleur dans toutes les directions. Pas un geste appris. Un geste hérité.`,
      },
      {
        nom: 'Mur Thermique',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Gravel érige un mur de chaleur intense sur 3 cases adjacentes. Le mur est traversable mais inflige une brûlure à chaque franchissement. Durée : 3 tours. Les alliés derrière le mur gagnent une résistance thermique.`,
        description_lore: `Sa tactique de base dans les manifestations devenues violentes — créer une ligne que les Capteurs hésitent à franchir. Il ne l'utilise pas pour bloquer. Il l'utilise pour forcer une décision.`,
      },
      {
        nom: 'Braise Persistante',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Gravel marque une zone de 2×2 cases d'une braise lente. Pendant 4 tours, toute unité sur cette zone subit des dégâts de brûlure mineurs à chaque début de tour. Les dégâts s'accumulent si l'unité ne se déplace pas.`,
        description_lore: `La chaleur de forge ne disparaît pas. Elle s'accumule dans le métal, dans la pierre, dans la peau. Gravel a appris ça à dix ans dans les conduits du Quatrième District.`,
      },
      {
        nom: 'Souffle du Creuset',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Gravel canalise toute sa chaleur en une rafale thermique sur 5 cases en ligne droite. Les unités touchées sont renversées. Si une unité est déjà en état de brûlure, elle subit des dégâts critiques. Temps de recharge : 4 tours.`,
        description_lore: `Il l'a utilisé pour la première fois lors d'une action du Parti du Feu qui avait dégénéré. Il n'était pas prêt à ce que ça fasse autant de dégâts. Il l'utilise maintenant avec la même conscience — pas légèrement.`,
      },
      {
        nom: 'Résistance du Quatrième',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura passive. Gravel ignore les 15% de dégâts thermiques entrants. Quand ses PV tombent sous 40%, sa résistance monte à 30% et ses dégâts augmentent de 20%. L'effet d'endurance se réinitialise si ses PV remontent au-dessus de 60%.`,
        description_lore: `Il a grandi dans les conduits géothermiques du Quatrième District. La chaleur, pour lui, n'est pas une menace. C'est un rappel de là où il vient.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Gravel',
      description: `Homme Pyrien, 41 ans, grand, épaules larges, peau rouge-brique avec cicatrices blanches aux avant-bras. Yeux ambre foncé avec éclats orangés. Cheveux noirs couverts de cendre. Veste de cuir rouge sang du Parti du Feu. Marteau usé à la ceinture. Expression tendue, concentrée — quelqu'un qui porte quelque chose de lourd depuis longtemps. Fond : arrière-plan de Khar-Vurn avec conduits géothermiques à découvert. Style concept art Riot Games, éclairage chaud orange-rouge.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1200,

  lore_long: `LE MARTEAU DE DREVAHN
Un chapitre de la vie de Gravel, représentant du Quatrième District (Parti du Feu)

—

I.

Kael avait dit : "Ton père a demandé l'évacuation du secteur D-7. Deux heures avant. Le superviseur de zone a refusé."

Gravel avait entendu ça il y a trois semaines. Il l'entendait encore maintenant, à table dans la salle d'assemblée du Parti du Feu, pendant que Orkhael parlait de négligence impériale et que les autres hochaient la tête.

Le superviseur de zone n'était pas de l'Empire. C'était Herrath, du Parti de l'Acier. Herrath était mort dans la Rupture aussi, ce qui rendait la chose compliquée sur le plan politique. Mais Herrath avait refusé l'évacuation de D-7 et son père était mort dans D-7 deux heures plus tard.

Gravel posa sa main sur le marteau à sa ceinture. Bois brûlé, métal déformé par la chaleur extrême. Retrouvé dans les décombres le premier jour, à trente mètres de là où son père aurait dû être si l'évacuation avait eu lieu.

"— les responsables impériaux qui ont sous-équipé les systèmes de maintenance—"

Il écouta Orkhael. Il connaissait le discours par cœur. Il l'avait lui-même prononcé, en des versions légèrement différentes, dans sept assemblées de district depuis quatre ans.

Ce que le discours ne disait pas : que l'Empire avait effectivement sous-équipé les systèmes. Et que Herrath, du Parti de l'Acier, avait refusé d'évacuer le secteur quand un calibreur thermal lui avait dit que la pression était anormale. Les deux choses étaient vraies simultanément. L'assemblée n'était pas faite pour les simultanément.

—

II.

Après l'assemblée, il avait marché jusqu'au Quatrième District.

Ce n'était pas officiel, cette visite. Il ne venait pas en représentant. Il venait comme quelqu'un qui avait grandi ici et qui revenait parfois chercher quelque chose qu'il ne trouvait jamais.

Le secteur D-7 avait été reconstruit — maisons neuves sur la même implantation, conduits géothermiques réencaissés cette fois, deux mètres de béton entre eux et les habitations. Le Parti de l'Acier avait supervisé la reconstruction. Techniquement, c'était mieux qu'avant. Techniquement, ça aurait dû exister vingt ans plus tôt.

Il s'arrêta devant l'espace vide où était le bâtiment familial. Rien n'avait été reconstruit exactement à l'identique — les nouvelles constructions respectaient un nouveau plan de masse. L'espace vide était maintenant une rue secondaire avec des bacs à plantes que quelqu'un arrosait.

Il avait sortit le marteau de sa ceinture. Le regarda.

Son père n'était pas mort parce que l'Empire était cruel. Son père était mort parce que plusieurs systèmes avaient failli simultanément — la sous-maintenance, l'organisation de signal du Parti de l'Acier, la réponse tardive. Aucune de ces défaillances n'était simple. Aucune n'avait un seul responsable.

Ce que Gravel ne savait pas faire, c'était être en colère contre un système. La colère a besoin d'un visage, d'une adresse, d'un moment précis. La colère contre un système c'est de la fumée — ça monte, ça chauffe, ça ne touche rien.

—

III.

Il resta vingt minutes dans la rue D-7. Personne ne le reconnut ou ne fit semblant de ne pas le reconnaître — dans le Quatrième District, les représentants n'étaient pas des célébrités. Ils étaient des gens qui avaient survécu et avaient trouvé un endroit où mettre ça.

Quand il repartit, il avait pris une décision qui n'était pas une décision — plutôt une acceptation. Il continuerait à parler de négligence impériale parce que la négligence impériale était réelle. Il continuerait à ne pas parler de Herrath parce que Herrath était mort et que sa mémoire n'aidait personne. Et il garderait ce que Kael lui avait dit dans l'endroit où il gardait les choses pour lesquelles il n'avait pas encore de mot.

Le marteau de son père était lourd à la ceinture. Il l'avait toujours été.

Ce soir, il avait une deuxième assemblée dans le District Deux. Il parlerait de systèmes de signalement thermal et de responsabilité de maintenance. Les gens l'écouteraient parce qu'il était crédible et parce qu'il portait le marteau de son père à la ceinture et que ça se voyait.

Ce n'était pas faux. Ce n'était pas toute la vérité. Pour l'instant, il n'avait pas de meilleur outil que ça.`.trim(),
};

export default lore;
