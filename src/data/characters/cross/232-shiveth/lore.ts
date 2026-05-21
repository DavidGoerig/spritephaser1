// ============================================================
//  SHIVETH — Lore complet (D17 · Convergence · Arc L'Avatar)
//  id: 232 | Feu/Poison | Hommes-Liens | Convergence (ex-Dissidentes) | Spécialiste
//  Arc : L'Avatar (Convergence) — agent de terrain médical
//  Événements : Purge des Ordres Soigneurs [V indirect]
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 232,
  nom: 'Shiveth',
  element: 'Feu',
  element2: 'Poison',
  espece: 'Hommes-Liens',
  region: "Ash'Rael",
  faction: 'Convergence',

  apparence: {
    taille_corpulence: `Un mètre soixante-huit, nerveuse et rapide. Les Hommes-Liens de longue résidence dans le désert développent la même économie de mouvement que les Peuples des Sables — petites surfaces exposées, gestes précis, rien de gaspillé. Shiveth a grandi près de Noctéa, dans les zones de transit, et son corps a la silhouette composite de quelqu'un qui a vécu dans plusieurs cultures sans s'établir dans aucune.`,
    peau: `Brun chaud, métissé. Les Hommes-Liens de sa lignée mélangent des traces de Pyriens du nord et des Peuples des Sables du sud — une teinte qui change légèrement selon la lumière, plus ambre en plein soleil du désert, plus sombre dans les zones intérieures. Ses mains ont la qualité spécifique des médecins de terrain : des petites coupures cicatrisées aux jointures, des taches d'agents chimiques que les gants n'arrêtent pas toujours.`,
    yeux: `Brun-noisette, rapides. Ils bougent en permanence — une habitude de terrain, l'évaluation constante des sorties et des risques. Quand elle est concentrée sur une tâche médicale, ils s'arrêtent complètement, comme si elle éteignait le reste du monde.`,
    vetements: `Tenue médicale de terrain Convergence, blanc modifié avec des empiècements imperméables aux zones de contact. Elle porte des gants fins permanents — pas par précaution chimique mais parce qu'elle a appris à ne pas toucher les surfaces de travail à mains nues dans des zones de crise. Un sac de matériel médical qui pèse toujours plus que ce qu'on lui demande de porter.`,
    signes_particuliers: `Son élément Poison lui permet de détecter les composants chimiques dans son environnement immédiat — utile en médecine de terrain pour identifier les toxines locales, les infections bactériennes, les déficits nutritionnels. Elle fait ça en permanence, sans effort. Les gens qui travaillent avec elle trouvent parfois son diagnostic de leur état un peu trop précis pour être confortable.`,
  },

  psychologie: {
    dominante: `Shiveth fait du travail réel. Ce n'est pas une idéologie — c'est une observation. Dans les camps de crise d'Ash'Rael, elle a vu des enfants survivre parce qu'elle était là avec les bons outils. Elle a vu des adultes mourir quand ces outils n'étaient pas disponibles. La Convergence lui fournit les outils. Elle fait le travail.`,
    contradictions: `Elle sait que la Convergence n'est pas uniquement humanitaire. Elle a compris ça il y a dix ans. Elle a choisi de rester en se concentrant sur sa partie — les camps médicaux, les distributions d'antidotes, les soins aux Élus épuisés après les Drains. Elle essaie de ne pas regarder trop loin au-delà de sa partie. Certains soirs, ne pas regarder demande un effort qu'elle ne nomme pas.`,
    peur: `Que ce qu'elle fait en croyant aider soit utilisé comme couverture pour quelque chose qu'elle ne pourrait pas approuver si elle le savait. Elle n'a pas de raison précise de penser ça. Elle a une sensation persistante qui n'a pas encore de nom.`,
    desir: `Soigner les gens qui ont besoin d'être soignés. Elle l'a dit à vingt et un ans quand elle avait rejoint les Dissidentes, et elle le pense encore. Le seul point de désaccord entre elle d'alors et elle de maintenant : la question de qui fournit les ressources pour soigner.`,
    rapport_au_pouvoir: `Méfiante des structures, fidèle aux personnes. Elle respecte Razhal parce qu'il fait ce qu'il dit. Elle respectait ses superviseurs Dissidentes de la même façon avant que ça devienne compliqué. Elle a appris à ne pas confondre l'institution avec les individus qui la composent.`,
  },

  histoire: {
    origine: {
      titre: 'Les Zones de Transit',
      texte: `Shiveth a grandi dans les zones de transit qui bordent Noctéa — ces espaces entre les cités où les règles officielles s'appliquent de façon intermittente et où les gens développent une expertise particulière dans la débrouillardise. Sa famille gérait un poste d'échange de marchandises. Elle avait appris très tôt que la valeur d'une ressource dépend de qui en a besoin et de qui la contrôle, pas de ce qu'elle est.

Son élément Feu s'était révélé à seize ans, son élément Poison à dix-neuf lors d'un travail de terrain médical. Elle avait rejoint une cellule médicale des Dissidentes à vingt-et-un ans parce qu'ils avaient besoin d'un médecin de terrain dans les zones de transit et qu'elle avait les compétences.`,
    },
    eveil: {
      titre: 'Onze Ans',
      texte: `Elle avait travaillé avec les Dissidentes pendant sept ans quand une opération dans une zone frontière entre Varkhôl et Ash'Rael avait mal tourné. Des agents impériaux avaient localisé le camp. Elle n'avait pas été capturée — "capturée" n'était pas le bon mot — mais les routes de sortie habituelles étaient bloquées et elle avait trois blessés à transporter.

Le contact qui l'avait extraite n'était pas un contact Dissident. C'était quelqu'un de la Convergence, via un réseau de transit qu'elle n'avait pas connu avant. Le passage avait traversé Vel'Nox par une couche qu'elle n'aurait pas su nommer.

Elle avait passé trois mois dans les camps de crise d'Ash'Rael pendant sa sortie de zone. Trois mois à voir ce que les déficits élémentaires faisaient dans des zones que les Dissidentes n'atteignaient pas. Quand elle avait choisi de ne pas revenir dans la cellule, c'était moins un choix idéologique qu'une décision logistique : les gens qu'elle soignait ici mouraient d'une façon qu'elle pouvait prévenir avec les bons outils. Et la Convergence avait les outils.`,
    },
    rupture: {
      titre: 'Ce Qu\'Elle Ne Regarde Pas',
      texte: `Elle avait compris très vite que la Convergence n'était pas ce qu'elle présentait. La doctrine de redistribution était réelle — elle avait vu le travail de terrain, les zones stabilisées, les Élus qui donnaient volontairement. Elle avait aussi vu des dossiers administratifs qui ne correspondaient pas à ce qu'on lui avait dit que la Convergence faisait.

Elle avait choisi de rester dans sa partie. Sa partie était réelle. Les enfants qu'elle soignait étaient réels. Elle continuait.

Depuis neuf mois, elle accompagnait Razhal sur des missions d'identification d'Élus. Il lui avait dit que c'était de la cartographie de redistribution. Elle avait remarqué la précision des profils demandés — pas des Élus quelconques, des Élus "purs élémentaires" spécifiques. Elle n'avait pas posé de question. Elle n'était pas sûre de vouloir la réponse.`,
    },
    maintenant: {
      titre: 'Le Travail Réel',
      texte: `Ce matin, Razhal lui avait montré la liste. Dix-huit éléments. Un pur chacun. Il avait dit qu'il allait poser la question à Drevorn.

Elle avait hoché la tête d'une façon qui signifiait "bonne idée" et qui signifiait aussi "je ne suis pas sûre de vouloir être là quand la réponse arrive."

Cet après-midi, elle avait trois consultations dans le camp médical. Un Élu Sol en post-Drain, récupération lente. Une famille en déficit nutritionnel depuis la saison sèche. Un enfant avec une infection que son élément Poison lui avait permis d'identifier avant les symptômes visibles.

Elle avait commencé par l'enfant.`,
    },
    objectif: {
      titre: 'La Ligne Qu\'Elle N\'A Pas Encore Définie',
      texte: `Shiveth n'a pas de plan. Elle a des principes — soigner, ne pas nuire, ne pas participer à quelque chose qu'elle ne peut pas approuver — et elle navigue entre eux au quotidien.

Ce qu'elle n'a pas encore fait : définir précisément ce qui l'amènerait à partir. La réponse abstraite est "quelque chose que je ne peux pas approuver." La réponse pratique, elle ne l'a pas. Parce que définir la ligne, c'est commencer à regarder si elle est déjà franchie.`,
    },
    evenements_narratifs: ['Purge_des_Ordres_Soigneurs'],
    arcs: ['L_Avatar'],
    position_dans_arc: `Spécialiste médicale Convergence, terrain Ash'Rael. Ex-Dissidentes — a quitté après une extraction via réseau de transit Vel'Nox. Accompagne Razhal sur le Protocole d'Identification. Ne connaît pas l'objectif du projet. A remarqué la précision des profils sans poser de question. En attente de la réponse de Razhal à Drevorn.`,
  },

  relations: [
    {
      personnage_id: 231,
      nom: 'Razhal',
      type: 'partenaire_de_terrain',
      depuis_ici: `Razhal est méthodique, honnête sur ce qu'il sait et ce qu'il ne sait pas. Elle lui fait confiance d'une façon qu'elle n'a pas accordée facilement depuis onze ans. Il vient de lui montrer la liste des dix-huit. Il va poser la question à Drevorn. Elle attend la réponse avec une anxiété qu'elle n'a pas encore nommée.`,
      arc_commun: 'L_Avatar',
      statut: 'actif',
    },
    {
      personnage_id: 67,
      nom: 'Arev',
      type: 'pair_de_réseau',
      depuis_ici: `Elles se sont rencontrées deux fois lors de réunions de coordination régionale. Arev tient des registres impeccables sur le volontariat — une rigueur que Shiveth reconnaît. Elles n'ont pas parlé des zones grises. Elles n'ont pas eu besoin de le faire pour se comprendre.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
    {
      personnage_id: 49,
      nom: 'Velath',
      type: 'contact_sans_nom',
      depuis_ici: `Elle ne connaît pas le nom de la personne dont le réseau l'a extraite il y a onze ans. Elle sait seulement que la route passait par Vel'Nox et qu'elle était parfaitement préparée. Si elle savait que cette personne existe encore, qu'elle opère encore des routes d'évacuation, que les Dissidentes utilisent encore ce réseau — elle ne sait pas ce qu'elle en penserait.`,
      arc_commun: 'L_Avatar',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Shiveth ne combat pas souvent. Quand elle le fait, c'est parce que ses patients sont en danger. Sa priorité est toujours la zone médicale — créer un espace sûr pour soigner, pas de participer à l'attaque. Son Feu lui permet de cauteriser à distance, son Poison de neutraliser les agents chimiques et d'affaiblir les ennemis sans les tuer.`,
    sorts: [
      {
        nom: 'Cauterisation de Zone',
        type: 'sort_de_base',
        elements: ['Feu'],
        description_gameplay: `Soin immédiat à un allié adjacent — arrête les hémorragies, neutralise les effets de brûlure et de saignement. Si utilisé sur une blessure "critique" (allié à moins de 20% PV), récupère +50% de l'effet.`,
        description_lore: `La première utilisation médicale qu'elle a trouvée à son élément Feu. La précision nécessaire pour cautériser sans brûler le tissu sain a pris deux ans à apprendre.`,
      },
      {
        nom: 'Analyse Toxique',
        type: 'sort_situationnel',
        elements: ['Poison'],
        description_gameplay: `Shiveth identifie tous les effets de statut actifs sur une cible (allié ou ennemi). Sur un allié : purge un effet négatif. Sur un ennemi : amplifie ses effets de statut actuels de 30% pour 2 tours.`,
        description_lore: `Son élément Poison détecte les composants chimiques en temps réel. Ce qui lui permet de soigner les intoxications lui permet aussi, dans les situations qui l'imposent, de les aggraver.`,
      },
      {
        nom: 'Triage de Combat',
        type: 'sort_situationnel',
        elements: ['Feu', 'Poison'],
        description_gameplay: `Évalue tous les alliés dans un rayon de 3 cases. Prioritise automatiquement les soins — l'allié le plus critique reçoit une régénération pendant 2 tours. Shiveth gagne un bonus d'action (peut utiliser un autre sort ce tour).`,
        description_lore: `Onze ans de médecine de terrain. Le triage n'est pas une décision — c'est une perception. Elle voit l'état de tout le monde avant d'avoir eu le temps de le formuler.`,
      },
      {
        nom: 'Zone Médicale',
        type: 'ultimate',
        elements: ['Feu', 'Poison'],
        description_gameplay: `Crée une zone de 3×3 cases pendant 4 tours. À l'intérieur : alliés récupèrent 10% PV max par tour, les effets de poison et brûlure sont neutralisés. Les ennemis qui entrent reçoivent des dégâts de poison légers. Shiveth peut agir normalement depuis la zone.`,
        description_lore: `Ce qu'elle construit dans chaque camp de crise — un espace où les blessés sont protégés. Elle l'a appris à faire en quinze minutes avec des matériaux de fortune. En combat, ça prend une seconde.`,
      },
      {
        nom: 'Diagnostic Permanent',
        type: 'passif',
        elements: ['Poison'],
        description_gameplay: `Passif. Shiveth voit les PV exacts de tous les alliés. Quand un allié passe sous 30% PV, elle en est immédiatement informée et son prochain soin sur cette cible est doublé.`,
        description_lore: `Son élément Poison détecte la défaillance biologique avant les symptômes visibles. En combat, ça se traduit par une connaissance précise de l'état de ceux qu'elle protège.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Shiveth',
      description: `Femme Hommes-Liens, 36 ans, 1m68, nerveuse et rapide. Peau brun chaud, yeux brun-noisette mobiles. Tenue médicale de terrain blanche Convergence, gants fins permanents, sac de matériel médical. Expression concentrée. Fond : camp médical de crise dans le désert d'Ash'Rael, tentes blanches, lumière de fin d'après-midi. Style concept art Riot Games, palette désertique avec accents de blanc médical.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 900,

  lore_long: `LE TRAVAIL RÉEL
Un moment de la vie de Shiveth, médecin de terrain Convergence

—

I.

L'enfant avait neuf ans et une infection que sa mère n'avait pas encore vue parce qu'elle ne se montrait pas encore sur la peau.

Shiveth l'avait senti en s'approchant du lit de camp — une qualité particulière dans l'air autour du garçon, une signature chimique que son élément Poison reconnaissait avant que son cerveau ait le temps de formuler le diagnostic. Bactérie des sols chauds, variante résistante, traitement disponible mais spécifique.

"Il toussera demain," dit-elle à la mère. "Je vais lui donner quelque chose ce soir pour que demain se passe mieux."

La mère avait regardé son fils, puis elle. "Est-ce qu'il va bien ?"

"Il va aller bien."

C'était vrai. Grâce aux stocks de la Convergence, aux routes de ravitaillement, aux Élus qui avaient contribué à des Drains pour financer ces stocks. La chaîne de causalité était longue et pas entièrement propre. Le garçon allait être soigné.

—

II.

Elle travaillait dans les camps médicaux depuis onze ans.

Onze ans plus tôt, elle avait été extraite d'une zone frontière par un réseau qu'elle n'avait pas connu avant — des routes de transit qui passaient par Vel'Nox, propres, rapides, préparées pour quelqu'un qui avait besoin de passer sans laisser de trace. Elle n'avait jamais su qui l'avait organisé. Elle avait demandé une fois, au début. On lui avait répondu que les réseaux de transit fonctionnaient mieux quand les participants ne se connaissaient pas.

Elle avait accepté ça parce qu'elle était épuisée et que trois mois de camps de crise dans le désert lui avaient montré des choses que sept ans avec les Dissidentes ne lui avaient pas montrées. Les Dissidentes combattaient l'Empire. C'était juste. Mais les enfants des zones de déficit mouraient d'infections traitables pendant que le combat continuait.

Elle avait choisi les enfants traitables.

—

III.

Le deuxième patient était un Élu Sol en récupération post-Drain — troisième session, quarante-deux ans, retour lent. Il s'appelait Shan et il travaillait pour Razhal sur les missions d'identification.

Elle avait mesuré sa saturation élémentaire, noté les paramètres dans son registre, et lui avait donné la dose habituelle de soutien minéral.

"Comment tu vas ?" avait-elle demandé. Pas en tant que médecin — en tant que personne.

"Bien," dit-il. Puis, après un moment : "Ce qu'on fait. Les profils qu'on identifie. Tu sais à quoi ça sert ?"

Shiveth avait regardé son registre. "Cartographie de redistribution. Planification de couverture."

"Razhal dit pareil." Il avait regardé le plafond de la tente. "Je me demande juste."

"Tu devrais lui poser la question."

"Il dit qu'il la pose à Drevorn."

Elle avait hoché la tête et était passée à ses paramètres de récupération. La liste des dix-huit que Razhal lui avait montrée ce matin avait une forme qu'elle reconnaissait — des données trop précises pour un usage ordinaire. Elle n'avait pas posé la question. Pas encore.

—

IV.

Le soir, elle avait préparé les fiches des trois consultations du jour.

Enfant, neuf ans, infection bactérienne, traitement commencé, pronostic bon.
Élu Sol, quarante-deux ans, post-Drain session 3, récupération lente, surveillance deux semaines.
Famille, quatre personnes, déficit nutritionnel chronique, programme de soutien enclenché.

Elle avait posé le stylo.

Il y avait onze ans, dans un camp Dissident, elle avait rédigé des fiches similaires. Les patients étaient les mêmes — des gens qui avaient besoin de soins, qui les recevaient ou ne les recevaient pas selon la disponibilité des ressources. Les ressources avaient changé de provenance. Le reste était pareil.

Elle croyait ça. La plupart du temps, elle croyait ça.

—

V.

La nuit avait commencé à tomber quand elle était sortie de la tente médicale.

Razhal était assis à l'extérieur de la tente de coordination, son registre ouvert. Il l'avait regardée arriver.

"Drevorn répond demain," dit-il.

"D'accord."

"Si la réponse est ce que je pense — je vais avoir une décision à prendre."

Shiveth s'était assise à côté de lui. Le désert prenait ses couleurs de soir — le sable qui devenait rouge, le ciel qui bleuissait vite. Les étoiles commençaient.

"Je sais," dit-elle.

"Toi aussi."

Elle avait regardé les étoiles un moment. "Je sais."

Elle n'avait pas dit autre chose. Razhal n'avait pas dit autre chose. Ils étaient restés assis ensemble jusqu'à ce que le désert soit entièrement noir, chacun avec ses calculs, dans le silence commun des gens qui vont devoir décider quelque chose qu'ils auraient préféré ne pas avoir à décider.`.trim(),
};

export default lore;
