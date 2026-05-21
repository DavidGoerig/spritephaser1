// ============================================================
//  SKARITH — Lore complet (D1 · Arc La Forge Confisquée)
//  id: 9 | Combat | Pyriens | Parti de l'Acier | Vanguard
//  Arc : La Forge Confisquée
//  Événements : Rupture Thermique [T] commandant garde civile
// ============================================================

import type { PersonnageLoreComplet } from '../../../lore-types';

const lore: PersonnageLoreComplet = {
  id: 9,
  nom: 'Skarith',
  element: 'Combat',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: "Parti de l'Acier",

  apparence: {
    taille_corpulence: `Mètre quatre-vingt-cinq, construit comme une chose qui ne cède pas. Soixante-trois ans de discipline physique sans relâche. Sa masse musculaire n'a pas diminué avec l'âge — elle s'est simplement compactée. Il se déplace sans bruit pour quelqu'un de sa taille.`,
    peau: `Rouge-brun foncé avec des cicatrices linéaires sur les avant-bras — pas des brûlures, des coupures de formation, des entailles de protocole d'entraînement. Les cicatrices de Skarith sont propres et parallèles. Même ses blessures sont ordonnées.`,
    yeux: `Brun très foncé, presque noirs. Ils ne bougent pas de façon inutile. Quand il regarde quelqu'un, il le regarde complètement.`,
    cheveux: `Noir de jais autrefois, gris-noir maintenant. Rasés courts sur les côtés, légèrement plus longs sur le dessus, toujours parfaitement alignés.`,
    vetements: `Uniforme de commandant de la garde civile — gris foncé avec les bandes argentées du Parti de l'Acier, insigne de commandant de rang 2. Il le porte en dehors des heures de service aussi bien qu'en service. La différence entre son uniforme de travail et celui du dimanche est imperceptible.`,
    signes_particuliers: `Son carnet de protocoles. Il en a dix-neuf carnets depuis ses débuts à la garde civile — des protocoles de maintien de l'ordre, de gestion de crise, de coordination de district. Rédigés à la main, référencés par date et situation, rangés dans l'ordre sur une étagère de son bureau. Il les consulte encore. Certains remontent à la nuit de la Rupture.`,
  },

  psychologie: {
    dominante: `Skarith croit en la discipline comme forme de respect envers les autres. Une unité indisciplinée est dangereuse pour elle-même et pour ceux qu'elle protège. Ses hommes pendant la Rupture ont tenu leurs positions et maintenu l'ordre parce qu'il les avait entraînés à tenir leurs positions. Des gens sont vivants grâce à ça. Ce n'est pas de la fierté — c'est une observation factuelle qu'il garde pour calibrer ses standards.`,
    contradictions: `Il sait que maintenir l'ordre pendant la Rupture a aussi signifié empêcher des gens de retourner dans les zones de surtension pour chercher des membres de leur famille. Il a donné cet ordre. Il sait que certains de ces gens sont morts. Il sait aussi que ses hommes auraient suivi ceux qui seraient entrés dans la zone, et qu'il y aurait eu plus de morts. La logique est irréfutable. La logique irréfutable n'empêche pas les nuits difficiles.`,
    peur: `Qu'une situation future exige un ordre qu'il donne et qu'il sait irréfutable, et dont les conséquences soient pires que la Rupture.`,
    desir: `Des protocoles qui fonctionnent. Des procédures claires. Des hommes formés. Si les systèmes sont bons, les situations de crise peuvent être gérées. Il travaille à ça depuis vingt-deux ans.`,
    rapport_au_pouvoir: `Son Combat est d'un type particulier — pas de l'élémentaire pur, mais une maîtrise totale du corps qui lui permet d'augmenter ses capacités physiques et d'imposer des conditions de combat à l'adversaire. Il se bat comme il commande : avec une économie absolue et une certitude totale sur ce qu'il va faire et pourquoi.`,
  },

  histoire: {
    origine: {
      titre: 'La garde civile',
      texte: `Skarith est entré dans la garde civile de Khar-Vurn à dix-huit ans, formé par le Parti de l'Acier dans les protocoles de maintien de l'ordre. Il y était depuis quarante-cinq ans. Commandant depuis vingt-huit ans. Il avait vu quatre directeurs se succéder au Parti de l'Acier, trois crises de zone, un incendie majeur dans les forges du Deuxième District, et la Rupture Thermique.`,
    },
    eveil: {
      titre: 'La nuit de la Rupture',
      texte: `Il avait quarante et un ans le soir de la Rupture. Il commandait deux cent quarante hommes répartis sur huit postes de zone. Quand les premiers signaux d'anomalie sont apparus, il avait activé le protocole de crise de niveau 3 — le plus élevé — et déployé ses unités aux points de contrôle des districts à risque.

Pendant six heures, ses hommes avaient tenu leurs positions. Ils avaient évacué des rues, guidé des populations vers des zones de sécurité, empêché les paniques qui auraient ajouté des morts aux morts. Ils avaient aussi bloqué les accès aux zones de surtension active.

Il avait donné cet ordre à 23h12. Il l'avait noté dans son carnet de protocoles à 23h14.`,
    },
    rupture: {
      titre: 'Ce que l\'ordre a coûté',
      texte: `Dans les jours suivant la Rupture, treize familles avaient déposé des plaintes contre la garde civile pour obstruction pendant l'évacuation. Treize membres de familles qui avaient voulu entrer dans les zones de surtension et que ses hommes avaient empêchés d'y aller. Sept des treize personnes qu'ils voulaient rejoindre avaient été retrouvées mortes dans les décombres.

Six avaient été retrouvées vivantes.

Skarith avait lu chaque plainte. Il avait rédigé des réponses personnelles à chacune — pas des réponses standardisées, des réponses précises qui expliquaient la logique de l'ordre, les risques calculés, pourquoi ses hommes avaient maintenu la position.

Ces réponses étaient dans ses archives. Il ne sait pas si elles ont aidé qui que ce soit.`,
    },
    maintenant: {
      titre: 'Commandant en service',
      texte: `Skarith commande encore la garde civile de Khar-Vurn. Il est passé commandant de rang 2 il y a six ans — la promotion aurait dû l'éloigner du terrain. Il a négocié pour garder la responsabilité opérationnelle directe. Le Parti de l'Acier avait accepté parce que Khar-Vurn était complexe et qu'il était le meilleur.

Il a noté à Thryss (id:4) que les nouvelles constructions du Septième District avaient des normes insuffisantes. Il dit ce qu'il observe. Ce que les autres en font n'est pas son département.

Il sait que Cendrix (id:2) est en mission active dans sa ville. Il sait ce que font les Capteurs. Il a une unité en surveillance passive — rien d'officiel, juste des yeux qui savent ce qu'ils regardent. Si Cendrix opère dans sa ville, il veut savoir ce qu'elle fait.`,
    },
    objectif: {
      titre: 'Les protocoles de la prochaine',
      texte: `Skarith prépare les protocoles de la prochaine crise. Il ne sait pas ce que ce sera — une Rupture, quelque chose de différent, une escalade politique. Mais les crises arrivent et il vaut mieux avoir des procédures claires avant. Il travaille sur un nouveau manuel de gestion de crise depuis dix-huit mois. Il est sur le dixième draf.`,
    },
    evenements_narratifs: ['Rupture_Thermique'],
    arcs: ['La_Forge_Confisquee'],
    position_dans_arc: `Commandant de la garde civile, Parti de l'Acier. A maintenu l'ordre pendant la Rupture avec toutes les conséquences que ça impliquait. Observe Cendrix. Travaille avec Thryss sur les normes. Prépare la prochaine crise.`,
  },

  relations: [
    {
      personnage_id: 4,
      nom: 'Thryss',
      type: 'allié_Acier',
      depuis_ici: `Ils se respectent mutuellement parce qu'ils appliquent la même rigueur à des domaines différents. Skarith lui signale les problèmes opérationnels qu'il observe. Thryss lui transmet les implications techniques. Ni l'un ni l'autre n'exagère ni ne minimise.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 2,
      nom: 'Cendrix',
      type: 'surveillance_passive',
      depuis_ici: `Une Capteur impériale dans sa ville est dans sa zone de responsabilité. Il ne lui a rien dit de sa surveillance. Elle est compétente et il respecte ça. Il ne lui fait pas confiance parce qu'il ne fait confiance à personne dont il ne connaît pas les objectifs précis.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'actif',
    },
    {
      personnage_id: 3,
      nom: 'Gravel',
      type: 'administré_politique',
      depuis_ici: `Gravel représente des gens que Skarith a bloqués pendant la Rupture. Skarith ne le sait pas précisément — la connexion n'est pas documentée. Mais il connaît Gravel des assemblées et il reconnaît le type de colère. Ce n'est pas de la méfiance. C'est de la compréhension.`,
      arc_commun: 'La_Forge_Confisquee',
      statut: 'latent',
    },
  ],

  combat: {
    philosophie: `Skarith combat avec une économie absolue. Chaque geste a une intention, chaque intention est testée et validée. Il n'improvise pas — il exécute des protocoles qu'il a répétés jusqu'à ce qu'ils deviennent du réflexe. Il est difficile à surprendre parce qu'il a préparé des réponses à tout ce qu'il peut concevoir. Ce qu'il ne peut pas concevoir le surprend.`,
    sorts: [
      {
        nom: 'Posture de Commandement',
        type: 'sort_de_base',
        elements: ['Combat'],
        description_gameplay: `Skarith adopte une position de défense active — les attaques ennemies directes sur lui sont réduites de 20% et chaque attaque encaissée génère une réplique automatique de dégâts physiques mineurs. Dure 3 tours.`,
        description_lore: `La première technique enseignée à la garde civile. Il la fait depuis quarante-cinq ans. Elle est devenue un réflexe avant d'être un sort.`,
      },
      {
        nom: 'Ordre de Dispersion',
        type: 'sort_situationnel',
        elements: ['Combat'],
        description_gameplay: `Skarith impose une zone de contrôle dans un rayon de 3 cases. Les ennemis dans la zone sont repoussés d'une case s'ils avancent vers lui. Les alliés dans la zone gagnent +15% en esquive pendant 2 tours.`,
        description_lore: `Le protocole de maintien de l'ordre — créer un périmètre sans confrontation directe. Ses hommes savent ce que ce geste signifie.`,
      },
      {
        nom: 'Frappe Disciplinée',
        type: 'sort_situationnel',
        elements: ['Combat'],
        description_gameplay: `Une attaque physique ciblée qui ignore 30% d'armure. Si l'ennemi est en train d'exécuter un sort, la frappe l'interrompt et inflige des dégâts supplémentaires.`,
        description_lore: `Quarante-cinq ans de formation. Il frappe où ça fait le plus d'effet au bon moment.`,
      },
      {
        nom: 'Protocole d\'Urgence',
        type: 'ultimate',
        elements: ['Combat'],
        description_gameplay: `Skarith active un mode de commandement d'urgence. Pendant 3 tours, tous ses alliés dans un rayon de 4 cases gagnent +25% en défense et leurs sorts de déplacement ont leur coût réduit de moitié. Skarith lui-même est immobile mais inflige des dégâts de représaille à chaque attaque reçue.`,
        description_lore: `Le protocole de niveau 3, activé le soir de la Rupture. Il l'a déclenché une deuxième fois depuis — lors d'une émeute au Troisième District il y a huit ans. Les deux fois, les pertes dans ses rangs ont été nulles.`,
      },
      {
        nom: 'Expérience du Commandant',
        type: 'passif',
        elements: ['Combat'],
        description_gameplay: `Aura passive. Skarith évalue en permanence la situation tactique. Après 1 tour en combat, il identifie la menace prioritaire (l'ennemi qui fera le plus de dégâts dans les 2 prochains tours). Ses attaques contre cette menace gagnent +20% de dégâts. L'identification se met à jour chaque tour.`,
        description_lore: `Quarante-cinq ans à lire des situations d'urgence. Il sait ce qui va exploser avant que ça explose.`,
      },
    ],
  },

  image_prompts: [
    {
      type: 'portrait',
      titre: 'Portrait canonique — Skarith',
      description: `Homme Pyrien, 63 ans, grand et massif, peau rouge-brun foncé avec cicatrices linéaires aux avant-bras. Yeux brun-noir immobiles et complets. Cheveux gris-noir courts. Uniforme gris-foncé de commandant de garde civile avec bandes argentées. Expression sérieuse mais sans hostilité — quelqu'un qui calcule en permanence. Son carnet de protocoles dans la poche de poitrine. Style concept art Riot Games, éclairage neutre-sombre, atmosphère de service.`,
      generated_path: undefined,
    },
  ],

  mot_count_cible: 1000,

  lore_long: `PROTOCOLE DE NIVEAU 3
Un chapitre de la vie de Skarith, commandant de la garde civile (Khar-Vurn)

—

I.

Le rapport de surveillance était sur son bureau depuis ce matin.

Deux de ses hommes en civil avaient suivi Cendrix pendant soixante-douze heures. Résultat : elle visitait les archives administratives de zone, elle avait eu un échange avec l'administrateur Pyrion, elle se déplaçait dans le District Quatorze le soir. Elle était seule dans ses déplacements nocturnes.

Skarith nota dans son carnet de protocoles : "Capteur impérial Cendrix. Mission active non déclarée à la garde civile. Déplacements nocturnes solo. Zone d'intérêt : District 14."

Il ne nota pas ses conclusions sur ce que ça signifiait. Les conclusions allaient dans sa tête, pas sur le papier. Le papier était pour les faits.

—

II.

Il avait quarante et un ans le soir de la Rupture.

Le souvenir qu'il avait de cette nuit était singulièrement propre — pas fragmenté comme les souvenirs de crise l'étaient pour la plupart des gens. Il se rappelait chaque décision, dans l'ordre, avec les raisons. Il les avait notées dans son carnet le lendemain matin, pendant que le Quatrième District fumait encore.

"23h12 — Activation protocole crise niveau 3. Fermeture des accès aux zones de surtension. Raison : risque d'extension des dégâts thermiques à personnel non équipé. Décision confirmée par estimation des pertes probables si entrée non contrôlée."

Treize familles avaient déposé des plaintes. Treize membres de familles bloqués. Sept morts. Six vivants.

La logique de sa décision restait la même vingt-deux ans après. Et les nuits difficiles restaient les nuits difficiles.

Il n'avait jamais prétendu que ces deux choses se résolvaient l'une l'autre.

—

III.

Ce matin, il avait reçu un billet de Thryss sur les constructions du Septième District.

Il était allé vérifier sur les plans disponibles en mairie. Normes type B, règlement de 34. Thryss avait raison — une erreur d'archivage, apparemment. Il avait appelé le bureau des normes pour signaler la discordance. On lui avait dit que Thryss avait déjà appelé et que le dossier était traité.

Bien. C'était la façon dont les systèmes devaient fonctionner — plusieurs nœuds qui détectent la même anomalie de façon indépendante. Le Parti de l'Acier avait des ingénieurs compétents.

Il espérait que les archives d'anomalie de maintenance du Quatrième District, celles de 34, avaient été traitées avec la même rigueur. Il savait qu'elles ne l'avaient pas été.

—

IV.

Il referma le rapport de surveillance sur Cendrix.

Elle n'avait rien fait d'illégal sous sa juridiction. Elle était à Khar-Vurn en mission impériale autorisée. Il n'avait pas le droit de l'interpeller, de restreindre ses mouvements, de lui demander ses objectifs. Il avait le droit de surveiller et de noter.

Ce qu'il notait : une Capteur impériale cherchait quelqu'un dans sa ville. Sa ville avait des gens dont il ne connaissait pas précisément les activités mais dont il suspectait qu'elles n'étaient pas toutes dans les registres officiels. L'intersection de ces deux faits était potentiellement une situation de crise.

Il ouvrit le dossier de protocoles de gestion de crise sur lequel il travaillait depuis dix-huit mois. Section 7 : interventions en présence d'agents impériaux dans la zone de responsabilité.

Il en était au dixième draf.

Il continua à écrire.`.trim(),
};

export default lore;
