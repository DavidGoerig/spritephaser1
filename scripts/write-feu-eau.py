import os

BASE = "src/data/characters"

def char_file(id, nom, element, classe, espece, region, faction, phys, perso, lore, combat, modifs):
    return (
        f"import {{ ELEMENT_KITS }} from '../../../character-kits';\n"
        f"import type {{ Personnage }} from '../../../character-types';\n\n"
        f"const character: Personnage = {{\n"
        f"  id: {id},\n"
        f"  nom: `{nom}`,\n"
        f"  element: '{element}',\n"
        f"  classe: '{classe}',\n"
        f"  espece: '{espece}',\n"
        f"  region: '{region}',\n"
        f"  faction: '{faction}',\n"
        f"  description: {{\n"
        f"    physique: `{phys}`,\n"
        f"    personnalite: `{perso}`,\n"
        f"    lore: `{lore}`,\n"
        f"    combat: `{combat}`,\n"
        f"  }},\n"
        f"  stats: ELEMENT_KITS['{element}']['{classe}'],\n"
        f"  modificateurs: [{modifs}],\n"
        f"}};\n\nexport default character;\n"
    )

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK: {path}")

# ── FEU ──────────────────────────────────────────────────────────────────────

feu = [

 (1, "Brasia", "feu", "Enchanteur-Soutien", "Pyrien", "Varkhol", "Dissidentes",
  "Petite pour une Pyrienne, avec une peau couleur basalte refroidi et des veines qui pulsent orange faiblement quand elle canalise la chaleur. Ses cheveux sont perpétuellement gris-fumée, tressés avec des perles de pierre cendrée venant des sanctuaires cachés des Dissidentes. Ses yeux oscillent entre l'ambre et le blanc quasi-pur quand ses pouvoirs atteignent leur pic. Elle ne transpire jamais, même dans la chaleur la plus extrême — son corps convertit tout excès thermique en énergie de soin.",
  "Patiente, méthodique, protectrice — mais pas chaleureuse au sens traditionnel. Son soin pour ses alliés se manifeste comme une précision clinique : elle les maintient en vie parce que les perdre serait un gaspillage, non par sentimentalité. Sous cette surface, elle porte une culpabilité de survivante depuis la Purge des Ordres de Soigneurs de Varkhôl, et se méfie de quiconque lui exprime de la gratitude trop explicitement.",
  "Ancienne médecin licenciée des Temples-Forges de l'Empire, Brasia a rompu les rangs quand l'Empire lui a ordonné de refuser les soins à des prisonniers Dissidents blessés. Elle a fait sortir treize rebelles par des évents volcaniques et est chassée depuis par les Cendremasters de l'Empire. Les Dissidentes la vénèrent ; elle trouve cette vénération inconfortable et contre-productive.",
  "Canalise la chaleur dans ses coéquipiers via Flux de Feu (soin continu sur zone adjacente), enferme les ennemis dans Cage Braisée (anneau brûlant qui inflige des dégâts à la sortie), et quand plusieurs alliés sont en état critique, déclenche Résurrection Incandescente — une détonation de toute sa chaleur stockée pour un soin de zone massif. Son passif Chaleur Cicatrisante accorde de petits ticks de régénération aux alliés adjacents chaque début de tour.",
  ""),

 (2, "Cendrix", "feu", "Enchanteur-Capteur", "Pyrien", "Varkhol", "Empire",
  "Grande et élancée, avec une peau gris-acier profond de forge et des pupilles remplacées par des noyaux de flamme vacillants. Ses mains sont enveloppées de soie de liaison émise par l'Empire pour supprimer les débordements incontrôlés. Elle porte le collier de Cendremaître — marque à la fois de rang et de contrôle. Ses mouvements sont délibérément économes, calculés pour ne révéler que le strict nécessaire.",
  "Ambitieuse, loyale à la structure de l'Empire plutôt qu'à son idéologie. Elle collecte les informations comme d'autres collectent des trophées, et traite la connaissance comme une monnaie d'échange. Secrètement fascinée par les Dissidents qu'elle capture, elle copie leurs techniques dans des journaux chiffrés qu'elle nierait posséder si on les découvrait.",
  "Cendrix a obtenu son rang à quinze ans en dénonçant une cellule Dissidente cachée dans le Troisième District de Forge de Varkhôl. L'Empire l'a récompensée d'une formation de Capteur anticipée. Elle dirige maintenant une unité spécialisée de collecte de renseignements qui traque les enchanteurs rebelles le long de la ceinture volcanique.",
  "Marque les ennemis avec Tison Traceur (révèle + dégâts sur la durée), déploie Réseau de Cendres (filet de fumée qui ralentit et révèle les unités cachées), et déclenche Extraction Pycho-Thermique quand plusieurs cibles marquées sont adjacentes — extraisant des debuffs et des informations en simultané. Son passif Instinct du Traqueur accorde de la vision à travers les murs sur les ennemis marqués pendant 2 tours.",
  ""),

 (3, "Cindrak", "feu", "Juggernaut", "Pyrien", "Varkhol", "Convergence",
  "Un mur de pierre volcanique et de muscle brut, Cindrak approche les trois mètres avec un corps partiellement calcifié par des décennies d'absorption de dégâts de feu. Son bras gauche est enkysté dans de la lave durcie — une blessure de bataille qu'il a refusé de faire traiter parce qu'elle l'a rendu plus fort. Sa poitrine porte la marque de la Convergence brûlée profond dans le tissu calcifié. Une barbe de lave solidifiée orne son menton.",
  "Joie simple dans le combat, loyauté à la philosophie de force-par-unité de la Convergence. Pas stupide — il est tactiquement affûté — mais désintéressé de la politique. Il suit celui qui combat le mieux et l'appelle commandant. A une tendresse surprenante pour cuisiner pour la troupe de guerre.",
  "Cindrak est né dans les champs de magma de la caldeira extérieure de Varkhôl, où les enfants sont laissés seuls pour survivre à la première éruption comme rite de passage. Il en a survécu trois en une nuit. La Convergence l'a recruté avant que l'Empire ne puisse le faire, et il ne l'a jamais regretté.",
  "Absorbe les dégâts de feu entrants avec Peau de Lave (réduction de dégâts passive), charge à travers les lignes avec Charge Volcanique (renversement en ligne droite), cloue les ennemis sous Éruption Localisée (zone de lave temporaire), et quand il est acculé devient Noyau Incandescent — un cœur superdense pulsant de chaleur vers tout ce qui est adjacent pendant 3 tours.",
  ""),

 (4, "Sirayx", "feu", "Plongeur", "Pyrien", "Varkhol", "Dissidentes",
  "Muscles compacts à twitch rapide sous une peau d'obsidienne fissurée sombre. Sirayx maintient sa température corporelle artificiellement élevée via de l'alchimie-stimulante, ce qui laisse une distorsion permanente de chaleur autour de sa silhouette. Son visage est masqué d'un foulard Dissident teint rouge flamme. Ses pieds ne restent jamais immobiles plus de quelques secondes.",
  "Imprudent par philosophie — il croit que l'hésitation est la vraie cause de l'échec. Parle trop en combat, devient silencieux en dehors. A un sens de l'humour noir qui tend à surgir aux moments les plus inopportuns. Profondément engagé dans la cause des Dissidentes.",
  "Sirayx a grandi dans le quartier-bidonville de Varkhôl appelé la Scorie — là où les déchets de forge sont déversés. Les enfants de la Scorie développent une immunité au feu environnemental mais une espérance de vie réduite par la contamination aux métaux lourds. Sirayx a décidé tôt qu'une vie courte à pleine vitesse valait mieux qu'une vie lente dans une cage impériale.",
  "Fonce à travers les ennemis avec Lame de Braise (dash en laissant un sillage de feu), embrase les zones d'atterrissage avec Bombes Thermiques (grenades à retardement), et quand il atteint la pleine accélération, entre en Surchauffe Totale — un bref état où toutes ses capacités se déclenchent deux fois pendant 1 tour.",
  ""),

 (5, "Pyronax", "feu", "Mage-Burst", "Pyrien", "Varkhol", "Independant",
  "Maigre, presque ascétiquement mince, avec des yeux qui ont entièrement brûlé et sont devenus blanc pur — signe d'une communion au feu trop profonde. Sa température corporelle reste à des niveaux dangereux en permanence ; tout ce qu'il touche plus de quelques secondes est carbonisé. Il porte des gants résistants à la chaleur qu'il change chaque semaine car ils se calcinent. Il n'a pas de cicatrices parce que ses blessures brûlent avant de se former.",
  "Obsessionnel, précis et entièrement focalisé sur la perfection de la destruction. Pas cruel — la destruction est simplement la forme la plus pure de puissance qu'il comprend. Déteste les alliances, préfère les contrats. N'est jamais resté dans une ville assez longtemps pour en apprendre le nom.",
  "Un incendiaire freelance embauché par quiconque paie le mieux — Empire, Dissidentes, selon les jours. Il figure sur les listes des individus les plus dangereux des deux factions pour des raisons différentes : l'Empire veut sa technique ; les Dissidentes veulent sa mort avant qu'il brûle une autre de leurs planques. Il est entièrement indifférent aux deux.",
  "Canalise l'énergie dans Fissure Pyroclastique (explosion de sol retardée de 2 tours, imparable), détone des Orbes Enflammées depuis la distance, et quand les cibles atteignent un seuil critique de vie, Consumation Finale se déclenche — une combustion localisée parfaite ne laissant que des cendres. Son passif Surcharge d'Entropie augmente ses dégâts burst pour chaque tour consécutif passé sans se déplacer.",
  ""),

 (6, "Vaelith", "feu", "Battlemage", "Pyrien", "Varkhol", "Empire",
  "Élégante selon les standards impériaux — son armure est en alliage volcanique ajusté à sa forme, gravée de la liturgie du feu de l'Empire. Cheveux auburn coupés courts, mâchoire précise, port militairement parfait. Son gantelet droit contient un cristal de focalisation de flamme intégré qui amplifie la puissance à portée de mêlée. Ses cicatrices sont toutes sur le bras gauche — parées, jamais reçues.",
  "Croit en l'Empire entièrement et sans ironie, ce qui la rend plus dangereuse que les loyalistes cyniques. Elle est le genre de personne qui trouve les règles élégantes. Précise, composée, mortelle. N'a jamais une fois remis en question un ordre — mais réfléchit profondément à la façon de l'exécuter.",
  "Première de sa promotion à l'Académie Battlemage de Varkhôl, elle a été sélectionnée pour la garde du feu personnelle de l'Empereur avant de demander un déploiement sur le terrain. Elle a combattu lors de la Purge du réseau Dissident de l'Ouest et en est revenue décorée. Plusieurs enchanteurs rebelles qui ont survécu à cette campagne affirment qu'elle a montré de la clémence quand elle n'y était pas obligée ; elle le nie.",
  "Engage à distance intermédiaire avec Lame de Feu (frappe de mêlée amplifiée), comble les brèches avec Tempête d'Acier-Flamme (dash-slash hybride), et charge son cristal de focalisation en combat pour libérer Détonation Liée — une explosion à courte portée qui monte en puissance avec la chaleur absorbée. Son passif Synergie Lame-Flamme accorde des dégâts bonus en alternant capacités physiques et de feu.",
  ""),

 (7, "Volcanis", "feu", "Artillerie", "Pyrien", "Varkhol", "Dissidentes",
  "Large de carrure, plus âgé, avec des mains de forge-scarifiées qui travaillent encore avec une précision parfaite. Il porte un canon d'artillerie impérial modifié avec des améliorations d'ingénierie Dissidente — il tire des projectiles surchauffés qui explosent à l'impact. Son ouïe gauche est partiellement détruite par des années d'opération sans protection auriculaire. Il ne semble pas s'en soucier.",
  "Brusque, expérimenté, profondément méfiant envers quiconque n'a pas été sur le terrain. A vu trop de commandants Dissidents sacrifier les troupes de terrain pour la stratégie. Respecte les résultats et rien d'autre. Maintient un décompte des installations impériales confirmées détruites — actuellement à quarante-sept.",
  "Ancien ingénieur d'artillerie impérial qui a changé de camp après que toute son unité a été envoyée dans une position suicide pour couvrir la retraite d'un officier. Il a détruit l'officier, est sorti avec le canon, et n'a pas regardé en arrière. Les Dissidentes lui ont fourni des ressources ; il leur donne des résultats.",
  "Lance des Bombes Laviques en arc (explosion de zone retardée), maintient la suppression avec Pluie de Fragments (zone de déni continue), et quand il a le temps de viser, tire Obus de la Caldera — un tir unique dévastateur qui laisse un champ de feu persistant pendant 3 tours. Son passif Calcul Balistique améliore la précision pour chaque tour passé immobile.",
  ""),

 (8, "Pyrossa", "feu", "Tireur", "Pyrien", "Varkhol", "Independant",
  "De taille moyenne, aux yeux perçants, avec une peau trempée à la chaleur qui ressemble à un hâle mais est en réalité une trempe de forge. Porte deux canons à mains qui tirent des balles de magma cristallisé. Ses holsters sont en peau de drake sur mesure — autant une déclaration de mode qu'un choix fonctionnel. Elle vérifie toujours ses armes avant et après chaque conversation importante.",
  "Mercurielle, charmante, et entièrement non fiable en dehors d'un contrat payé. Elle fera exactement ce qu'elle a accepté de faire et rien de plus. A un sens étonnamment fort de l'éthique professionnelle — elle ne trahira pas un client en milieu de contrat quelles que soient les offres. Quand le contrat se termine, c'est une autre histoire.",
  "Pyrossa mène des contrats de part et d'autre des lignes impériales et Dissidentes, ce qui l'a rendue précieuse et définitivement indésirable dans les deux territoires. Elle a un accord de zone neutre avec les Guildes de Contrats de l'Isthme qui la protège légalement tant qu'elle enregistre chaque travail. Elle en enregistre environ la moitié.",
  "Tire des Salves Ignifuges rapides (volée à 2 coups), pose des Mines Thermoactives (se déclenchent au passage), et quand les deux cibles sont en ligne, tire Tir Croisé — deux coups synchronisés des deux canons garantissant un critique s'ils touchent la même cible au même tour.",
  ""),

 (9, "Ashvrak", "feu", "Assassin", "Pyrien", "Varkhol", "Dissidentes",
  "À peine visible dans une lumière faible — Ashvrak possède la peau la plus sombre parmi les Pyriens, presque du verre volcanique noir pur, avec seulement la lueur faible du feu supprimé visible à travers des microfissures le long de la colonne vertébrale. Se déplace sans bruit malgré une carrure solide. Il manque l'extrémité de l'index gauche depuis une mission ratée.",
  "Un outil qui s'est choisi lui-même. Émotionnellement contrôlé au point que sa présence affecte les autres comme quelque chose d'étrange. N'a aucune idéologie au-delà de l'élimination de cibles spécifiques — il s'aligne avec les Dissidentes parce que l'Empire possède plus de cibles qu'il juge dignes d'être supprimées.",
  "Ashvrak était l'assassin de l'Empire avant qu'ils brûlent son village parce que le commandant régional voulait la terre. Il a passé cinq ans à devenir meilleur que les formateurs de l'Empire dans leurs propres techniques, puis est revenu régler les comptes. Les Dissidentes l'ont trouvé après, debout dans les cendres. Il est avec eux depuis, à sa façon.",
  "Approche via Voile de Cendres (dissimulation dans la fumée), frappe depuis les cases adjacentes avec Frappe de l'Obsidienne (dégâts garantis de dos depuis la furtivité), et si la cible survit, active Brasier Intérieur — une brûlure qui monte en puissance avec les PV restants de la cible, la tuant d'autant plus vite qu'elle est forte.",
  ""),

 (10, "Forgelix", "feu", "Escrimeur", "Pyrien", "Varkhol", "Empire",
  "La carrure classique du duelliste — torse supérieur élancé, posture puissante, toujours positionné avec un pied en avant. Sa lame est forgée dans les feux les plus profonds de Varkhôl et retient la chaleur comme un condensateur, brillant orange au tranchant en combat. Il entretient son apparence avec une précision presque agressive.",
  "Compétitif, formel, et constitutionnellement incapable de supporter une atteinte à son honneur sans y répondre. Il se bat en duel au moindre défi formel et n'en a jamais décliné un en vingt ans. Cela le rend prévisible ; il le sait et s'en moque.",
  "Maître de l'école Lame-Flamme de l'Empire, qui traite le feu comme un instrument de précision plutôt qu'une force brute. Il a formé dix-sept élèves, dont trois ont depuis rejoint les Dissidentes — une statistique qu'il trouve humiliante et motivante en égale mesure.",
  "Ouvre avec Estocade Flamboyante (botte perçante à dégâts de chaleur), lit les patterns adverses avec Riposte Ardente (contre qui accumule de la chaleur), et quand la charge est pleine, libère Lame de Juge — une frappe imparable infligeant des dégâts vrais. Son passif Maîtrise du Fil augmente le taux critique pour chaque coup consécutif sur la même cible.",
  ""),

 (11, "Kharak", "feu", "Vanguard", "Pyrien", "Varkhol", "Convergence",
  "Là où Cindrak est un mur, Kharak est une fortification mobile. Des dépôts calcifiés en plaques couvrent son dos et ses épaules suite à une exposition chronique à la chaleur. Des brûlures sont visibles sur la gauche de son visage — absorbées lors d'une bataille où il a délibérément intercepté le tir pour protéger une unité en retraite.",
  "Conviction absolue dans l'objectif de la Convergence. Le type de leader qui gagne la loyauté en étant visiblement prêt à absorber tout ce qu'on lui envoie. Lent à la colère, dévastateur quand elle arrive. Aucune patience pour la cruauté, mais une patience infinie pour l'endurance.",
  "Kharak était présent au pacte fondateur de la Convergence entre les Pyriens volcaniques et les Chthoniens montagnards — une réunion historique que l'Empire tente encore d'effacer des archives. Il a aidé à négocier les termes. Sa cicatrice de ce jour-là ne vient pas du feu — elle vient d'un assassin impérial qu'il a arrêté avec son visage.",
  "Crée une zone de pression avant avec Mur de Lave (barrière brûlante temporaire), force les ennemis dans des positions défavorables avec Avancée Incandescente (poussée en avant), et quand l'unité a besoin d'un moment décisif, déclenche Percée du Noyau — une explosion frontale qui dégage des chemins à travers les formations défensives.",
  ""),

 (12, "Tarrath", "feu", "Gardien", "Pyrien", "Varkhol", "Dissidentes",
  "Large comme une porte, avec un bouclier de basalte volcanique fusionné directement à son bras gauche par un ancien rituel de modification Dissident. Son corps lit comme inamovible — même au repos il a l'air de se préparer à un impact. Sa voix est inhabituellement douce pour quelqu'un de sa taille.",
  "Mesuré, protecteur, profondément investi dans les personnes spécifiques qu'il garde plutôt que dans les causes abstraites. Il combat pour les Dissidentes parce que des Dissidents spécifiques ont besoin de protection, non parce qu'il a des opinions fortes sur la gouvernance. Il en a des très fortes sur ce qu'il laisse ou non passer devant lui.",
  "Tarrath a passé douze ans à garder des planques Dissidentes dans les districts les plus surveillés de l'Empire — un travail qui a requis une patience absolue et une violence absolue en mesures alternées. Il n'a laissé passer personne qu'il n'avait pas l'intention de laisser passer.",
  "Ancre sa position avec Ancrage Volcanique (bonus d'immobilité pendant 2 tours), absorbe le feu entrant avec Endurcissement Magmatique (convertit un pourcentage des dégâts en armure), et quand son bouclier est pleinement chargé, libère Contrechoc Brûlant — redirigeant les dégâts absorbés sur l'attaquant.",
  ""),

 (13, "L'Embrase", "feu", "Specialiste", "Pyrien", "Varkhol", "Independant",
  "Impossible à décrire avec précision — la forme de L'Embrase fluctue avec l'intensité de la chaleur environnante. Au repos, il apparaît comme un Pyrien de taille moyenne avec une peau rouge-braise profonde et des yeux de flamme constante. En combat, le contour se floute et s'étend. S'il s'agit d'un pouvoir ou d'une condition, même lui l'ignore.",
  "Parle en énigmes qui s'avèrent systématiquement exactes. Trouve la plupart des conversations tactiques en dessous de son niveau d'intérêt. A une chaleur profonde et genuine — littérale et figurée — pour toute entité qui tente de survivre contre toute attente. Entièrement indifférent aux factions.",
  "L'Embrase est assez vieux pour précéder les conventions de nommage actuelles de l'Empire. On lui a donné de nombreux noms — l'Éruption Vivante, le Feu Sans Nom, la Complication — et il répond à chacun avec un égal amusement. De multiples factions ont tenté de le recruter, le classifier, ou le contenir. Aucune n'y est parvenue.",
  "Réécrit la physique du feu dans la zone avec Singularité Thermique (redirige tous les dégâts de feu vers des cibles choisies), crée de nouveaux terrains avec Naissance de Lave (soulève du terrain volcanique temporaire modifiant le champ), et une fois par partie déclenche L'Éveil — un événement de feu sur toute la carte forçant chaque unité à choisir entre battre en retraite ou brûler.",
  ""),

]

# ── EAU ──────────────────────────────────────────────────────────────────────

eau = [

 (31, "Lysinath", "eau", "Enchanteur-Soutien", "Nereide", "Thalassyr", "Dissidentes",
  "Pâle comme l'écume de mer, avec des cheveux qui bougent constamment comme sous l'eau et des marques bioluminescentes le long du cou et des bras supérieurs. Lysinath a des doigts légèrement palmés et des sections translucides de peau le long des avant-bras. Elle se déplace avec une grâce fluide sur terre, et est spectaculairement rapide dans l'eau. Même à l'arrêt, elle donne l'impression d'être emportée par un courant invisible.",
  "Instinctivement attentive aux besoins des autres, ce qu'elle ressent parfois comme un fardeau — elle n'a pas choisi de se soucier du bien-être de tout le monde mais ne peut pas l'éteindre. Humour acéré sur le sujet. Profondément politique sur l'indépendance de Thalassyr et travaillera avec quiconque soutient la souveraineté des océans.",
  "Les Néréides de Thalassyr ont longtemps résisté aux tentatives de l'Empire de contrôler les routes commerciales sous-marines. Lysinath opère comme soigneure itinérante pour les cellules Dissidentes côtières, se déplaçant entre les îles sur des courants qu'elle est la seule à connaître. Elle a soigné des blessures causées par des soldats impériaux et par les créatures qu'ils envoient chasser les Néréides.",
  "Soutient les alliés via Flux Vital (soin par canal d'eau par tour), crée des zones sûres avec Bulle de Protection (bouclier à bulles absorbant les dégâts), et quand plusieurs alliés sont en état critique, canalise Marée Restauratrice — un puissant soin de vague qui repousse également les ennemis de 2 cases. Son passif Courant Nourricier accorde une petite régénération aux alliés qui finissent leur tour dans une case d'eau.",
  ""),

 (32, "Tyde", "eau", "Enchanteur-Capteur", "Nereide", "Thalassyr", "Empire",
  "Belle d'une façon tranchante et géométrique propre aux officiers impériaux de haut rang. Pommettes saillantes, yeux bleu abyssal profond, cheveux lisses en arrière avec précision. La marque impériale est tatouée en argent sur sa clavicule. Ses mains sont toujours sèches, ce qui déconcerte les autres Néréides qui le remarquent.",
  "Utilise le charme comme un outil si habituellement qu'elle n'est plus certaine de ce que sa vraie personnalité est en dessous. Analytique, patiente. Trouve que la plupart des gens révèlent tout éventuellement si on attend assez longtemps et si on pose les bonnes questions. A une affection genuine pour le café fort.",
  "Tyde a grandi à Thalassyr mais a été formée à l'Académie du Renseignement de l'Empire dans la capitale continentale. Elle est revenue sur la côte comme les yeux de l'Empire dans les réseaux commerciaux des eaux profondes. Les autres Néréides sentent que quelque chose ne va pas chez elle ; ils ne peuvent pas identifier quoi. Elle considère cela comme un succès.",
  "Marque les ennemis avec Marquage de Profondeur (signature d'eau qui révèle + dégâts sur la durée), déploie Réseau de Courants (grille de ralentissement), et déclenche Tempête d'Interrogatoire quand plusieurs cibles marquées sont adjacentes — extrayant des debuffs et des informations simultanément. Son passif Lecture des Marées montre les intentions de déplacement ennemi 1 tour en avance sur les cibles marquées.",
  ""),

 (33, "Drunas", "eau", "Juggernaut", "Nereide", "Thalassyr", "Convergence",
  "Un Néréide qui a choisi la surface, Drunas possède le corps trapu et renforcé de quelqu'un qui a passé des décennies à combattre dans des environnements de pression. Ses marques bioluminescentes sont fanées par l'exposition au soleil. Porte une armure conçue pour les opérations sous-marines mais combat sur terre sans modification — elle le limite simplement moins que les autres.",
  "Intransigeant sur la mission de la Convergence de force-par-unité. Croit en la vertu de la pression — que la difficulté rend les communautés plus fortes. Impatient face à la faiblesse mais jamais punitif à ce sujet. Pousse ses alliés fort parce qu'il croit en ce qu'ils peuvent devenir.",
  "Drunas est venu à la Convergence après que la propre hiérarchie militaire de Thalassyr a échoué à stopper une incursion impériale dans les eaux profondes. L'échec était politique — les officiers ont protégé leur rang plutôt que leur peuple. Drunas a quitté la structure de commandement, a rejoint le chapitre côtier de la Convergence, et en est depuis l'instrument contondant dans la région.",
  "Perce les lignes défensives avec Vague d'Assaut (charge frontale avec recul), presse avec Pression Abyssale (ralentit et réduit l'armure dans la zone), et quand il est pleinement mis sous pression, déclenche Rupture de Profondeur — une onde de choc réduisant tous les ennemis à portée à un déplacement réduit pendant 2 tours.",
  ""),

 (34, "Sylne", "eau", "Plongeur", "Nereide", "Thalassyr", "Dissidentes",
  "La plus petite et la plus rapide de cette liste. Le corps de Sylne est conçu pour l'hydrodynamique — étroit, flexible, avec le visage à angle plat d'une plongeuse optimisée pour la pression. Dans l'eau elle se déplace comme de la lumière ; sur terre elle est encore plus rapide qu'elle n'y paraît.",
  "Hyperactive, idées d'abord, toujours trois décisions en avance sur la conversation en cours. A du mal à ralentir. Adore les cartes, les relevés océaniques, et les problèmes nécessitant de l'improvisation. Totalement incapable d'arriver quelque part calmement.",
  "Sylne opère des routes de courrier pour les Dissidentes via les réseaux de grottes sous-marines de Thalassyr — des routes que les navires de surface de l'Empire ne peuvent pas suivre. Elle connaît chaque courant, chaque entrée de grotte, et chaque schéma de patrouille impériale à une journée de nage.",
  "Fonce à travers les ennemis avec Courant Rapide (dash haute-mobilité), laisse des Tourbillons Perturbateurs derrière elle (courants désorientants), et quand elle est à pleine vitesse, déclenche Nage Fantôme — traversant les cases occupées sans déclencher de réactions pendant un tour complet.",
  ""),

 (35, "Maris", "eau", "Mage-Burst", "Nereide", "Thalassyr", "Independant",
  "Néréide des grands fonds avec une bioluminescence qui pulse en patterns mathématiques complexes corrélés à son état émotionnel. Pâle jusqu'à la translucidité, avec des pupilles dilatées quasi-entièrement dans un éclairage standard (adaptées aux profondeurs). Sa voix a une qualité résonante sous-marine même en plein air.",
  "Détachée des préoccupations de surface, absorbée dans la compréhension de la physique de pression, de vague et de courant des profondeurs appliquée au combat. Pas froide — elle pense juste à des choses que vous ne voyez pas. Répond lentement mais avec précision aux interactions sociales.",
  "Maris était une chercheuse océanique de Thalassyr qui a découvert que la force hydraulique suffisamment concentrée pouvait reproduire la puissance destructrice des armes conventionnelles. Elle n'a rien publié, n'a rien dit à personne, et est partie développer la théorie de manière indépendante. Elle le fait depuis six ans.",
  "Concentre l'énergie hydraulique dans Orbe Abyssal (projectile d'eau compressée à dégâts uniques élevés), libère Pression Critique (éclatement de décompression en zone), et quand elle est pleinement chargée, tire Lance des Profondeurs — un jet d'eau qui perfore plusieurs cibles en ligne.",
  ""),

 (36, "Coraen", "eau", "Battlemage", "Nereide", "Thalassyr", "Empire",
  "Un Battlemage impérial qui a adapté les techniques de combat océanique à la mêlée. Élancé et dangereux, avec des armes infusées d'eau qui génèrent une pression de marée à l'impact. Son uniforme impérial est modifié pour les opérations de natation mais il l'utilise rarement à cet effet maintenant. Il sent toujours légèrement le sel.",
  "Dévoué à l'expansion de l'Empire dans le territoire océanique — croit sincèrement que l'administration impériale améliorerait le désordre de Thalassyr. N'a aucune capacité à reconnaître que les autres Néréides vivent l'Empire comme une invasion plutôt qu'une administration.",
  "Coraen est l'architecte de la doctrine actuelle de combat océanique de l'Empire, qu'il a rédigée après avoir survécu à une embuscade d'opératives Néréides Dissidentes. Il n'a pas perdu à cause d'un échec tactique — il a perdu parce qu'il ne comprenait pas leur environnement. Il a passé deux ans à tout apprendre à ce sujet et a produit un manuel.",
  "Frappe à courte portée avec Frappe de Marée (coup amplifié par l'eau), crée des gradients de pression avec Courants Contradictoires (ralentissement et déstabilisation de zone), et quand il est en mêlée serrée, déclenche Détonation Hydraulique — un éclatement d'eau à bout portant infligeant des dégâts en cône.",
  ""),

 (37, "Torryn", "eau", "Artillerie", "Nereide", "Thalassyr", "Dissidentes",
  "Usé par des décennies en mer, Torryn a l'aspect vent-constant de quelqu'un qui a passé plus de temps au-dessus de l'eau qu'en dessous. Ses munitions sont des capsules d'eau pressurisée — chacune tirée depuis son lance-grenades anti-navire modifié peut fissurer des murs de pierre. Son œil gauche est remplacé par un viseur optique qu'il oublie d'enlever à l'intérieur.",
  "L'opérateur d'artillerie le plus fiable des Dissidentes, ce qu'il décrirait comme le département de réclamations le plus fiable — parce que tout le monde l'appelle quand quelque chose doit être détruit à distance, et personne ne le remercie correctement après. Très bien avec ça. N'a besoin que d'une ligne de visée dégagée.",
  "Torryn était l'officier principal des armes de la Flotte de Défense de Thalassyr jusqu'à ce que le traité naval de l'Empire démantèle légalement la flotte pour la paix. Il a gardé l'arme. Il a gardé plusieurs armes. Il a rejoint les Dissidentes le matin suivant la signature du traité.",
  "Lance des Tirs Aquatiques en arc (éclatement de zone en eau à arc élevé), pose des Champs de Pression (champ de refus de zone), et quand il est pleinement à portée, tire Barrage de l'Abyme — une volée soutenue qui bombarde une zone de 3 cases pendant 2 tours.",
  ""),

 (38, "Nalys", "eau", "Tireur", "Nereide", "Thalassyr", "Independant",
  "Une éclaireuse Néréide aux articulations hyper-mobiles et aux yeux adaptés pour suivre les mouvements à la fois au-dessus et en dessous de la ligne de flottaison simultanément. Porte une arbalète personnalisée qui tire des carreaux de glace cristallisée — une invention personnelle. Esthétique sèche et efficace.",
  "Une chasseuse de primes opérant sous un code moral personnel qu'elle expliquera en détail si on lui demande et probablement si on ne lui demande pas. Le code est : pas d'enfants, pas de personnel médical, pas de dégâts environnementaux. Tout le reste est négociable avec le bon contrat.",
  "Nalys a bâti sa réputation en traquant des percepteurs impériaux qui prenaient l'excédent des communautés Néréides côtières. Elle facture aux communautés le prix coûtant et à tout le monde d'autre le tarif du marché. Elle n'appelle pas ça de l'activisme ; elle appelle ça tarifer correctement.",
  "Tire des Carreaux Glacés (carreaux ralentissants), pose des Balises de Traçage (révèle les unités cachées), et quand une cible est en dessous de 40% de PV, déclenche Tir de Grâce — un critique garanti utilisable une seule fois par cible par match.",
  ""),

 (39, "Reef", "eau", "Assassin", "Nereide", "Thalassyr", "Dissidentes",
  "Reef n'a pas de marques distinctives parce que Reef s'en assure. Les marques bioluminescentes communes aux Néréides sont supprimées via une technique biologique qui a pris des années à développer. Au repos dans l'eau, invisible. Sur terre, simplement quelconque. Ce n'est pas un accident.",
  "Reef a décidé que moins de mots signifie moins de compromis possibles. Bref, fiable, et entièrement clair sur la disposition à compléter un contrat donné. A une affection pour la pluie parce que tout le monde rentre à l'intérieur.",
  "Les éliminations de Reef sont caractérisées par les enquêteurs comme des événements aquatiques — les victimes sont retrouvées noyées dans des endroits où la noyade ne devrait pas être possible. Les Dissidentes utilisent Reef pour les cibles impériales hautement prioritaires spécifiquement parce qu'aucune méthode n'est traçable à une faction. Même les Dissidentes ne connaissent pas le vrai nom de Reef.",
  "Approche via Camouflage Aquatique (dissimulé dans les cases d'eau), frappe avec Lame de Courant (coup de mêlée indétectable depuis une case adjacente), et une fois par match déclenche Noyade Sèche — asphyxiant une cible à distance sans laisser de preuve physique.",
  ""),

 (40, "Aquen", "eau", "Escrimeur", "Nereide", "Thalassyr", "Empire",
  "Duelliste formé par l'Empire avec la combinaison rare de rapidité Néréide et de discipline impériale. Élancé, posture de ressort enroulé. Utilise une rapière à canal d'eau qui peut faire varier sa consistance entre rigide et fluide au milieu d'une frappe, rendant les parades presque impossibles à bien doser.",
  "Le genre de personne qui gagne les débats en étant impossible à coincer — non par malhonnêteté mais par flexibilité genuine. Adapte sa position en milieu de conversation quand de nouvelles informations arrivent. Rend la négociation face à eux exaspérante.",
  "Aquen a remporté le Championnat de Lame Toutes-Factions de l'Empire trois années consécutives — le seul Néréide à l'avoir fait. Cela les a rendus utiles à l'Empire comme représentant symbolique et fonctionnellement un trophée. Ils ont accepté le poste parce qu'il leur donnait accès aux coffres les plus profonds des archives de l'Empire. Ce qu'ils en font est flou.",
  "Ouvre avec Touche Liquide (botte rapide et flexible), contrôle l'espacement avec Flux Défensif (parade-contre de danse aquatique), et quand en plein flux, exécute Spirale Abyssale — une combinaison multi-coups qui augmente les dégâts pour chaque coup consécutif.",
  ""),

 (41, "Veran", "eau", "Vanguard", "Nereide", "Thalassyr", "Convergence",
  "Large d'épaules et se portant comme une proue contre le courant. Ses marques bioluminescentes brillent d'un bleu stable — signe d'une puissance contrôlée. La marque de la Convergence est sur son omoplate gauche, toujours partiellement visible. Elle traverse les foules comme l'eau traverse la roche — autour ou à travers, selon ce qui est plus rapide.",
  "Comprend que la force multipliée par la direction donne le résultat. Positionnelle, stratégique, pensant toujours trois pas dans l'engagement. Aucun intérêt pour la gloire — seulement pour le succès de l'unité de la Convergence. Si elle ne reçoit pas le crédit, tant pis. Si l'unité échoue, pas tant pis.",
  "Veran a été la première Néréide à proposer un chapitre de la Convergence à Thalassyr même — un mouvement politiquement risqué étant donné la surveillance de l'Empire dans la région. Elle a plaidé que l'indépendance de Thalassyr ne pouvait être préservée que par la force, et que la force nécessitait les ressources de la Convergence. Elle avait raison ; le chapitre contrôle maintenant deux voies océaniques clés.",
  "Avance avec Poussée de Marée (pression frontale repoussant les ennemis), ancre la ligne avec Mur d'Eau (barrière fluide temporaire), et quand l'unité a besoin d'une percée, déclenche Torrent Dirigé — une force d'eau concentrée qui dégage un passage pour l'avancée alliée.",
  ""),

 (42, "Bassal", "eau", "Gardien", "Nereide", "Thalassyr", "Dissidentes",
  "Les marques des grandes profondeurs sur Bassal — la peau bleu-noire des Néréides adaptés aux abysses, des yeux sans pupille visible, des poumons légèrement élargis qui produisent un son rythmique lors de la respiration au-dessus de l'eau. Leur présence est à la fois lourde et apaisante. Ne porte aucune arme visible — utilise la pression de l'eau concentrée.",
  "Inamovible ne commence pas à le décrire. Tout le sens du moi de Bassal est construit autour de la présence — le refus de céder du terrain. Parle rarement. Quand ils le font, les autres arrêtent ce qu'ils font. Non pas à cause du volume — à cause du poids.",
  "Bassal garde l'entrée du sanctuaire principal Dissident de Thalassyr depuis neuf ans. L'Empire a envoyé sept unités d'assaut pendant cette période. Aucune n'est entrée. Bassal n'a jamais expliqué comment ; les Dissidentes ont arrêté de demander et ont commencé à compter dessus.",
  "Crée une zone impassable avec Pression Abyssale (zone d'interdiction pendant 2 tours), protège les alliés via Cocon Aquatique (bouclier d'eau absorbant les dégâts entrants), et quand déclenché, libère Vague Protectrice — une vague d'eau balayante qui repousse tous les ennemis de 3 cases depuis la position de Bassal.",
  ""),

 (43, "La Maree", "eau", "Specialiste", "Nereide", "Thalassyr", "Independant",
  "La Marée apparaît comme une ancienne Néréide d'âge indéterminé, avec une peau qui oscille subtilement entre bleu profond et translucide selon l'angle de la lumière. Ses cheveux bougent comme s'ils étaient perpétuellement dans un courant même dans un air immobile. Elle laisse des empreintes mouillées dans des pièces complètement sèches. Personne n'a confirmé si elle est une personne ou un phénomène récurrent.",
  "Tidale — il y a des périodes où elle est distante et repliée, et des périodes où elle arrive avec une force subite et écrasante. Aucun schéma que quiconque a réussi à prédire. Parle avec l'autorité de quelqu'un qui a regardé les mêmes erreurs se répéter pendant très longtemps et a cessé de tenter de les corriger verbalement.",
  "La Marée est aussi vieille que les archives de tempêtes de Thalassyr, ou plus. Elle apparaît lors de crises majeures, contribue une action décisive, et retourne dans les profondeurs. L'Empire l'a déclarée un mythe trois fois et une classification de menace deux fois. Les deux peuvent être vrais.",
  "Manipule le champ entier via Contrôle des Marées (repositionne toutes les cases d'eau), crée des effets en cascade avec Raz-de-Marée (vague qui traverse tous les obstacles), et une fois par partie déclenche L'Inondation — remplissant toute la carte d'eau peu profonde, accordant des bonus massifs aux alliés Néréides et des pénalités sévères aux ennemis non-amphibies.",
  ""),

]

base = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main"

feu_folders = [
    "001-pyrakh", "002-kaelsa-la-braise", "003-durhn", "004-sira",
    "005-auren", "006-vaela", "007-rekkar", "008-pyrssa",
    "009-ashva", "010-forun", "011-kharuna", "012-tarakh", "013-l-embrase"
]

eau_folders = [
    "031-lyss", "032-tyde", "033-drunas", "034-sylne",
    "035-maris", "036-coraen", "037-torryn", "038-nalys",
    "039-reef", "040-aquen", "041-veran", "042-bassal", "043-la-maree"
]

for i, char in enumerate(feu):
    folder = feu_folders[i]
    path = f"{base}/{BASE}/feu/{folder}/index.ts"
    write(path, char_file(*char))

print(f"Feu: {len(feu)} characters written")

for i, char in enumerate(eau):
    folder = eau_folders[i]
    path = f"{base}/{BASE}/eau/{folder}/index.ts"
    write(path, char_file(*char))

print(f"Eau: {len(eau)} characters written")
print(f"All done! Feu ({len(feu)}) + Eau ({len(eau)}) = {len(feu)+len(eau)} characters written")
