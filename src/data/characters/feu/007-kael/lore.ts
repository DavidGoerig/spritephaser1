// ============================================================
//  KAEL — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 7 | Feu | Pyriens | Indépendant | Escrimeur
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [T] forgeron Quatrième, survivant
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 7,
  nom: 'Kael',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: `Mètre soixante-quinze, corps de forgeron vieilli — il a soixante-deux ans et a passé quarante ans debout devant une forge. Il a perdu de la masse musculaire depuis la Rupture mais gardé la densité osseuse et les mains larges qui ne partent jamais. Il boite légèrement du pied gauche depuis vingt-deux ans.`,
    peau: `Rouge-brun profond avec des callosités aux paumes et aux doigts qui sont devenus une texture permanente. Des brûlures anciennes sur le côté droit du cou — de la Rupture. Il porte parfois le col relevé, pas pour les cacher, par habitude de la chaleur des forges.`,
    yeux: `Brun-orange, fatigués et précis. Le regard de quelqu'un qui a vu beaucoup de choses se passer et a arrêté d'être surpris.`,
    cheveux: `Blanc depuis ses cinquante ans, coupés courts. Barbe de trois jours permanente, blanche aussi.`,
    vetements: `Vêtements de travail — tablier de forge, chemise épaisse, pantalon de cuir tanné. Il n'a pas de tenue de représentation. Quand il va à des réunions, il y va dans ses vêtements de forge. C'est délibéré depuis vingt ans.`,
    signes_particuliers: `Sa forge, dans le Quatrième District reconstruit. La même adresse depuis trente-cinq ans — il a refait le bâtiment après la Rupture, dans le même emplacement, avec les mêmes dimensions. Il l'a fait lui-même. C'était important que ce soit lui.`,
  },

  psychologie: {
    dominante: `Kael ne croit plus aux factions. Il a vu le Parti du Feu utiliser la Rupture comme argument politique. Il a vu le Parti de l'Acier protéger ses propres bâtiments pendant que le Quatrième District brûlait. Il a vu l'Empire envoyer des administrateurs seize ans trop tard. Il a vu les Dissidentes recruter des orphelins de la Rupture avec la même habileté que les autres. Toutes ces organisations ont leurs raisons. Kael a arrêté d'évaluer les raisons.`,
    contradictions: `Il aide quand même. Brasia (id:1) lui a demandé de l'héberger pendant cinq jours — il l'a fait. Des Dissidentes lui ont demandé des informations sur les corridors thermiques — il les a données. Des gens du Parti du Feu lui ont demandé de témoigner — il a témoigné de ce qu'il savait exactement, ni plus ni moins. Il ne prend pas parti. Il répond aux demandes directes quand la demande lui semble honnête.`,
    peur: `Que ce qu'il a dit à Gravel sur la nuit de la Rupture lui cause des ennuis. Pas pour lui — pour Gravel. La vérité complète sur qui a refusé l'évacuation du secteur D-7 est plus compliquée que ce que le Parti du Feu peut utiliser confortablement.`,
    desir: `Continuer à forger. Il fait des pièces mécaniques pour des ateliers du district depuis quarante ans. Le travail est le même, les clients ont changé, le Quatrième District a été reconstruit. Il préfère travailler à gérer les conséquences du fait qu'il a parlé à Gravel.`,
    rapport_au_pouvoir: `Son Feu est de l'artisanat — précis, contrôlé, appliqué à des fins spécifiques. Il forge avec son élément depuis l'enfance. Son Feu de combat n'est pas spectaculaire mais il est exceptionnellement fiable sous pression.`,
  },

  histoire: {
    origine: {
      titre: 'Forgeron de naissance',
      texte: `Kael est né dans le Quatrième District de Khar-Vurn, fils de forgeron, petit-fils de forgeron. Il n'a jamais eu l'ambition d'être autre chose. À vingt-deux ans il avait sa propre forge, au même endroit que celle de son père. Il fabriquait des pièces mécaniques — des composants d'engrenage, des joints d'étanchéité, des pièces de maintenance pour les conduits géothermiques. Un travail technique et anonyme qu'il aimait.`,
    },
    eveil: {
      titre: 'La nuit de la Rupture',
      texte: `Il avait quarante ans le soir de la Rupture Thermique. Il travaillait dans sa forge quand les premières anomalies de pression ont rendu ses instruments fous. Il a compris ce qui allait se passer — il connaissait les conduits de maintenance du Quatrième District mieux que n'importe quel superviseur officiel. Il a eu le temps d'évacuer sa forge et d'aller chercher trois voisins.

Il a aussi vu Drevahn dans les conduits ce soir-là. Il l'a vu entrer dans le secteur D-7 avec son kit de maintenance. Il n'a pas pu le rejoindre — la surtension avait déjà commencé dans cette section.

Ce qu'il n'a dit à personne pendant vingt-deux ans : il avait entendu Drevahn appeler à l'évacuation par radio. Il avait entendu la réponse de supervision. "En attente." "Non-prioritaire." Le superviseur parlait avec l'accent du Parti de l'Acier.`,
    },
    rupture: {
      titre: 'Reconstruction',
      texte: `Après la Rupture, Kael avait consacré un an à reconstruire sa forge. Exactement au même endroit. Exactement avec les mêmes dimensions. Il avait aidé aux reconstructions du district pendant la même période, à ses heures.

Il n'avait rejoint aucun parti politique. Le Parti du Feu était venu le recruter avec son histoire de survivant. Le Parti de l'Acier lui avait offert une certification qui lui aurait donné accès aux gros contrats. Il avait refusé les deux avec la même politesse laconique.

Vingt-deux ans plus tard, il forgait toujours. Sa forge avait de bons clients. Il n'avait pas besoin d'autre chose.`,
    },
    maintenant: {
      titre: 'Ce qu\'il a dit à Gravel',
      texte: `Gravel était venu à sa forge il y a trois mois. Il cherchait des témoins de la nuit de la Rupture dans le secteur D-7 — des gens qui avaient été là, qui avaient peut-être connu son père.

Kael l'avait regardé et avait décidé de lui dire une partie de ce qu'il savait. Pas tout — la totalité aurait été une bombe dans les mains d'un homme aussi en colère que Gravel. Mais assez pour que Gravel sache que la vérité était plus compliquée que le récit du Parti du Feu.

Il avait dit : "Ton père a demandé l'évacuation du secteur D-7. Deux heures avant. Le superviseur a refusé." Il n'avait pas dit le nom du superviseur ni l'appartenance de sa voix. Gravel avait ces informations maintenant. Ce qu'il en ferait, Kael l'ignorait et préférait l'ignorer.

Brasia lui avait rendu visite la semaine suivante. Elle n'avait pas mentionné Gravel.`,
    },
    objectif: {
      titre: 'Continuer',
      texte: `Kael veut continuer à forger. C'est sa réponse à tout — pas par désintérêt ou lâcheté, mais parce que sa forge est au Quatrième District et que le Quatrième District a besoin de gens qui restent et qui travaillent. La reconstruction n'est pas que politique. Elle est aussi dans les pièces mécaniques que des gens fabriquent chaque matin dans des ateliers qui sentent le métal chaud.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Forgeron survivant du Quatrième District. Témoin direct de la nuit de la Rupture. A dit à Gravel que son père avait demandé l'évacuation — sans mentionner à qui. Hébergé Brasia cinq jours sans condition. N'appartient à rien.`,
  },

  relations: [
    {
      personnage_id: 1,
      nom: 'Brasia',
      type: 'hébergé_chez_lui',
      depuis_ici: `Elle lui avait demandé un endroit pour cinq jours. Il avait dit oui sans poser de questions. Elle était médecin. Il ne posait pas de questions sur les médecins qui avaient besoin de cinq jours. Elle était repartie sans explication et sans dette explicite entre eux. Ce genre de relation, il connaît — des gens qui se tiennent par l'absence de demandes.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
    {
      personnage_id: 3,
      nom: 'Gravel',
      type: 'lui_a_dit_la_vérité_partielle',
      depuis_ici: `Il lui a dit ce qu'il savait, partiellement. Il ne regrette pas. Il surveille de loin ce que Gravel fait avec cette information — pas pour intervenir, pour savoir si sa décision était bonne ou mauvaise.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 6,
      nom: 'Pyrion',
      type: 'connu_des_archives',
      depuis_ici: `L'administrateur impérial. Il est passé à la forge deux fois en seize ans pour des questions de zone — recenser les survivants, vérifier les reconstructions. Kael l'a trouvé compétent et froid. Ce n'est pas une insulte. Compétent et froid en administration, dans une zone de deuil, c'est une qualité.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Kael ne cherche pas le combat. Quand il y est, c'est parce qu'on lui a laissé le choix entre ça et quelque chose de pire. Son Feu de forge est précis et économique — des lames thermiques courtes, des barrages qui n'ont pas besoin d'être impressionnants pour être efficaces.`,
    sorts: [
      {
        nom: 'Lame du Forgeron',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Kael matérialise une lame thermique courte et dense dans son poing — contact au corps à corps, dégâts tranchants-thermiques. La lame dure 3 tours. Ses attaques au corps à corps pendant ce temps ignorent 15% d'armure.`,
        description_lore: `Quarante ans à forger avec son Feu. La lame thermique, c'est ce que sa forge ressemble quand il en a besoin.`,
      },
      {
        nom: 'Trempe',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Kael endurcit sa propre structure thermique. Résistance aux dégâts physiques +25% pendant 3 tours. S'il reçoit une attaque en état de Trempe, il riposte automatiquement avec une brûlure de contact.`,
        description_lore: `La trempe du métal — chauffer pour renforcer. Il fait la même chose avec son propre corps.`,
      },
      {
        nom: 'Chaleur de Forge',
        type: 'sort_situationnel',
        elements: ['Feu'],
        description_gameplay: `Kael crée une zone de chaleur intense dans un rayon de 2 cases autour de lui. Les ennemis dans la zone voient leur résistance thermique réduite de 20%. Les alliés dans la zone régénèrent légèrement. Durée : 3 tours.`,
        description_lore: `Sa forge rayonne. Il fait la même chose.`,
      },
      {
        nom: 'Coulée',
        type: 'ultimate',
        elements: ['Feu'],
        description_gameplay: `Kael libère toute sa chaleur accumulée en une vague courte et dense (4 cases de cône). Dégâts élevés. Les ennemis touchés ont leur armure temporairement fondue — résistance réduite de 40% pendant 2 tours.`,
        description_lore: `Il l'a utilisé une fois en vingt-deux ans. Lors d'une nuit où des agents impériaux sont venus récupérer quelqu'un qui était dans sa forge. Il n'en parle pas.`,
      },
      {
        nom: 'Vieux Feu',
        type: 'passif',
        elements: ['Feu'],
        description_gameplay: `Aura passive. Kael gagne de la stabilité thermique au fil du combat — après chaque tour, il accumule un bonus de résistance de 3% (max 30%). Les effets de débuff de durée courte (étourdissement, brûlure légère) ont leur durée réduite de moitié sur lui.`,
        description_lore: `Soixante-deux ans. Il en a vu d'autres. Son Feu ne panique pas.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Kael',
      description: `Homme Pyrien, 62 ans, large, corps de forgeron vieilli. Peau rouge-brun foncé avec callosités. Cheveux et barbe blancs courts. Cicatrices sur le côté droit du cou. Tablier de forge, chemise épaisse. Regard brun-orange fatigué mais précis. Expression neutre, sans hostilité ni chaleur particulière — quelqu'un qui observe. Fond : forge du Quatrième District, chaleur ambiante. Style concept art Riot Games, éclairage orange-rouge de forge.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

  lore_long: `LE QUATRIÈME DISTRICT
Un chapitre de la vie de Kael, forgeron (Indépendant)

—

I.

Gravel était revenu.

Pas pour la forge — Kael le vit dans la façon dont il était entré, sans regarder les métaux en attente, sans le saluer comme un client. Pour une conversation. La deuxième en trois mois.

"J'ai besoin de savoir son nom. Le superviseur."

Kael posa son marteau. Il s'essuya les mains sur son tablier.

"Pourquoi ?"

"Parce que je veux savoir qui."

"Et après tu sais qui, tu fais quoi ?"

Gravel ne répondit pas immédiatement. C'était une bonne chose — ça signifiait qu'il n'avait pas de réponse préfabriquée. Kael lui accordait ça.

—

II.

Le superviseur s'appelait Herrath. Du Parti de l'Acier, division maintenance. Mort dans la Rupture, secteur D-4, deux heures après avoir refusé l'évacuation de D-7.

Kael connaissait ce nom depuis vingt-deux ans. Il l'avait gardé parce que les informations utiles se gardaient et qu'on ne savait jamais quand elles devenaient nécessaires.

Il regarda Gravel. Un homme de quarante-et-un ans avec le marteau de son père à la ceinture et vingt-deux ans de deuil dans les yeux. Quelqu'un qui portait cette colère dans des assemblées du Parti du Feu et qui en faisait quelque chose de politiquement utilisable, ce qui n'était pas la même chose que quelque chose de vrai.

Le nom de Herrath dans la bouche de Gravel allait finir dans un discours du Parti du Feu. Kael le savait avant que Gravel le sache.

"Herrath," dit-il.

Il vit quelque chose changer dans le visage de Gravel.

"Du Parti de l'Acier," continua Kael. "Mort dans la Rupture. Dans le secteur D-4."

Silence.

"Il était sous les ordres de qui ?"

"Je sais pas."

Ce n'était pas entièrement vrai. Il avait des hypothèses. Mais les hypothèses n'étaient pas des faits, et donner des hypothèses à quelqu'un d'aussi en colère que Gravel c'était lui donner du bois pour un feu qui brûlait déjà sans contrôle.

—

III.

Gravel repartit sans dire autre chose.

Kael reprit son marteau. Le métal dans la forge attendait — un joint d'étanchéité pour un conduit du Huitième District, commande standard, délai d'une semaine.

Il frappa. La cadence du travail.

Herrath était mort. Ses supérieurs étaient peut-être encore vivants quelque part dans les structures du Parti de l'Acier ou de l'administration impériale. La chaîne de commandement de 34 était enfouie dans des archives que Pyrion essayait de reconstituer — Kael avait noté que l'administrateur posait des questions discrètes depuis plusieurs années.

Ce n'était pas à lui de démêler ça. Il avait sa forge. Le Quatrième District avait besoin de gens qui restaient et qui travaillaient. Il avait fait les deux depuis vingt-deux ans.

Ce qu'il avait donné à Gravel était ce qu'il pouvait donner sans mentir et sans tout dire. C'était l'équilibre qu'il cherchait depuis vingt-deux ans. Il n'était pas sûr d'avoir bien choisi. Il n'était pas sûr d'avoir mal choisi non plus.

La forge chauffait. Le métal attendait.`.trim(),
};

export default lore;
