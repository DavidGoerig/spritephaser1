import os

BASE = "src/data/characters"
ROOT = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main"

def char_file(id, nom, element, classe, espece, region, faction, phys, perso, lore, combat, modifs=""):
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
# Pyriens · Varkhôl · Khar-Vurn (Cité des Forges)
# Événement fondateur : La Rupture Thermique — l'Élu Ice a disparu, une partie de la ville a explosé.
# La Forge Silencieuse = quartier figé dans sa dernière seconde.
# Politique : Parti du Feu (innovation) vs Parti de l'Acier (structure).
# Religion civique : Le culte de l'Équilibre.

feu = [

 (1, "Brasia", "feu", "Enchanteur-Soutien", "Pyrien", "Varkhôl", "Dissidentes",
  "Pyrienne petite pour son espèce, avec une peau couleur basalte refroidi et des veines qui pulsent orange quand elle canalise la chaleur. Ses cheveux sont gris-fumée en permanence, tressés avec des perles de pierre cendrée venues des sanctuaires cachés des Dissidentes. Elle porte en pendentif un fragment calciné de la Forge Silencieuse — mémorial personnel de la catastrophe que l'Empire refuse d'avoir causée. Ses yeux oscillent entre l'ambre et le blanc quasi-pur lorsque sa puissance atteint son pic.",
  "Patiente, méthodique, protectrice sans sentimentalisme. Sa générosité est clinique : elle maintient ses alliés en vie parce que les perdre serait un gaspillage tactique. Porte une culpabilité profonde depuis la Purge des Ordres Soigneurs ordonnée par l'Empire pour concentrer tous les soins sous contrôle du Voile d'Équité.",
  "Ancienne médecin licenciée des Temples-Forges de Khar-Vurn, Brasia travaillait dans le district ouvrier du Parti du Feu avant la Rupture Thermique. Quand l'Empire a ordonné de refuser les soins aux Élus non enregistrés captureés par les Capteurs impériaux, elle a refusé. Elle a fait sortir treize Élus blessés par des évents thermiques souterrains que seuls les soigneurs de la Forge connaissaient. Les Capteurs la chassent depuis. Les Dissidentes du Voile l'ont trouvée avant eux.",
  "Flux de Feu (soin continu sur les alliés adjacents par chaleur canalée), Cage Braiée (anneau brulant retenant les ennemis), Résurrection Incandescente (burst de soin massif en dépensant toute la chaleur stockée). Passif Chaleur Cicatrisante : les alliés régénèrent des PV en début de tour.",
  ""),

 (2, "Cendrix", "feu", "Enchanteur-Capteur", "Pyrien", "Varkhôl", "Empire",
  "Grande et élancée, peau gris-acier profond de forge, pupilles remplacées par des noyaux de flamme vacillants — modification réalisée lors de son initiation comme Capteur impériale pour lire les signatures élémentaires à distance. Ses mains portent des gants de liaison-silk qui enregistrent chaque Élu touché dans les registres de la Citadelle du Voile. Son collier marqué ne quitte jamais son cou.",
  "Croit au Voile d'Équité par conviction analytique, pas par naïveté — elle a vu des régions prospérer sous la redistribution féerique et d'autres s'effondrer en son absence. Utilise le charme comme outil professionnel. Copie les techniques des Élus qu'elle capture dans des journaux chiffrés qu'elle nierait posséder.",
  "Formée à l'Académie d'Intelligence de la Citadelle du Voile après avoir identifié, à quinze ans, une naissance d'Élu non enregistrée dans le Troisième District de Forge de Khar-Vurn — une enfant née lors d'une conjonction solaire que le Calendrier avait détectée des années à l'avance. Elle dirige maintenant une unité qui lit les anomalies thermiques pour anticiper les naissances avant que les Dissidentes ne puissent intervenir.",
  "Tison Traceur (marque un ennemi, révèle sa position + dégâts continus), Réseau de Cendres (grille de surveillance révélant les unités cachées), Extraction Pycho-Thermique (capture la signature élémentaire d'une cible, la debuffant). Passif Instinct du Traqueur : vision à travers les murs sur les cibles marquées pendant 2 tours.",
  ""),

 (3, "Cindrak", "feu", "Juggernaut", "Pyrien", "Varkhôl", "Convergence",
  "Presque trois mètres de pierre volcanique et de muscle. Son bras gauche est enkysté dans de la lave durcie — blessure qu'il a refusé de faire soigner parce que, dit-il, restituer sa douleur au collectif commence par sa propre chair. La marque de la Convergence est brulée profond dans son torse calcifié. Il transpire de la vapeur en permanence.",
  "Sincèrement converti à la doctrine de la Convergence — croit que sa puissance lui a été donnée par le monde et doit lui être rendue. Sa philosophie n'est pas la violence pour la violence mais une logique sacrificielle profonde. Joie authentique dans le combat parce que le combat est l'acte de restitution le plus pur qu'il connaisse.",
  "Né dans les champs de magma de la caldeira extérieure de Varkhôl, enfant de la Scorie — le district de déchets où naissent ceux que l'Empire juge non-prioritaires pour le Calendrier des Fées. Quand les Fées ont enfin envoyé des Élus stabilisateurs dans la région, Cindrak avait déjà développé sa puissance seul, en survivant à trois éruptions en une nuit. La Convergence l'a recruté avec un argument qu'il a trouvé juste : son énergie n'appartient ni à lui ni à l'Empire, mais au flux.",
  "Peau de Lave (absorbe une fraction des dégâts de feu comme armure), Charge Volcanique (rush renversant en ligne), Éruption Localisée (zone de lave temporaire), Noyau Incandescent (mode survie qui pulse de la chaleur à tout ce qui est adjacent).",
  ""),

 (4, "Sirayx", "feu", "Plongeur", "Pyrien", "Varkhôl", "Dissidentes",
  "Corps compact à twitch rapide sous une peau d'obsidienne fissurée sombre. Maintient sa température corporelle artificiellement élevée via des stimulants alchimiques de la Scorie, laissant une distorsion de chaleur permanente autour de sa silhouette. Foulard Dissident teint rouge-flamme toujours sur le visage. Ses pieds ne restent jamais immobiles.",
  "Imprudent par philosophie — l'hésitation est le premier outil des Fées pour contrôler les gens. Parle trop en combat, silencieux dehors. Humour noir à contretemps. Engagé dans la protection des Élus nés hors du Calendrier parce qu'il en est un.",
  "Né dans la Scorie de Khar-Vurn, hors des dates prévues par le Calendrier des Fées — invisible à l'Empire pendant son enfance, très visible quand sa puissance a émergé. Les Dissidentes du Voile l'ont extrait de Khar-Vurn une semaine avant que les Capteurs ne l'identifient. Il court depuis, très vite, dans la même direction.",
  "Lame de Braise (dash laissant un sillage de feu), Bombes Thermiques (grenades à retardement), Surchauffe Totale (état où toutes ses capacités se déclenchent deux fois pendant 1 tour).",
  ""),

 (5, "Pyronax", "feu", "Mage-Burst", "Pyrien", "Varkhôl", "Independant",
  "Gaunt, yeux entièrement brulés blanc — signe d'une communion au feu trop profonde pour que le Calendrier puisse le dater correctement. Sa température corporelle dépasse le vivable en permanence. Gants résistants à la chaleur changés chaque semaine car ils carbonisent. Il n'a pas de cicatrices — ses blessures brûlent avant de se former.",
  "Sa signature dans le Calendrier est incompréhensible — ni Feu pur, ni Dragon, quelque chose entre les deux que les Fées ne savent pas classifier. Obsessionnel, précis, uniquement focalisé sur la perfection destructrice. Indépendant des trois factions par principe.",
  "Freelance incendiaire. Les Fées l'ont classé 'anomalie instable' et ont essayé de le capturer trois fois. Il a calciné leurs agents à chaque fois. La Convergence lui a proposé un contrat — il a refusé, jugeant la doctrine du drain rituellement bizàrre. Les Dissidentes l'utilisent ponctuellement pour détruire des infrastructures de surveillance impériale et le paient en information, pas en argent.",
  "Fissure Pyroclastique (explosion de sol retardée 2 tours, imparable), Orbes Enflammées (projectiles multiples), Consumation Finale (combustion localisée parfaite ne laissant que des cendres). Passif Surcharge d'Entropie : dégâts burst croissants par tour sans mouvement.",
  ""),

 (6, "Vaelith", "feu", "Battlemage", "Pyrien", "Varkhôl", "Empire",
  "Armure en alliage volcanique ajusté à sa forme, gravée de la liturgie du Feu de l'Empire. Cheveux auburn courts, mâchoire précise, port militairement parfait. Son gantelet droit contient un cristal de focalisation intégré par la forge de la Citadelle, amplifiant la puissance à portée de mélée. Ses cicatrices sont toutes sur le bras gauche — parades, jamais coups reçus.",
  "Croit au Voile d'Équité sans ironie — a vu des villages entiers survivre à des famines grâce aux Élus Water envoyés par la Citadelle. C'est pour ça qu'elle combat. Précise, composée, incapable de désobéir à un ordre — mais réfléchit profondément à comment l'exécuter.",
  "Première de sa promotion à l'Académie Battlemage de Khar-Vurn, sélectionnée pour la garde impériale avant de demander du terrain. Elle a travaillé sur la Forge Silencieuse — le quartier figé de Khar-Vurn après la Rupture Thermique — pour y traquer des Dissidentes utilisant les tunnels thermiques sous le désastre pétrifié. Les Dissidentes qui ont survécu disent qu'elle a montré de la clémence. Elle dénie.",
  "Lame de Feu (frappe de mélée amplifiée thermiquement), Tempête d'Acier-Flamme (dash-slash hybride), Détonation Liée (explosion qui monte en puissance avec la chaleur absorbée). Passif Synergie Lame-Flamme : bonus de dégâts en alternant attaques physiques et sorts de feu.",
  ""),

 (7, "Volcanis", "feu", "Artillerie", "Pyrien", "Varkhôl", "Dissidentes",
  "Large de carrure, plus âgé, mains de forge calleuses travaillant encore avec précision parfaite. Son canon impérial modifié porte des marques Dissidentes gravées par-dessus le logo de l'Empire. Son ouïie gauche est partiellement détruite. Il porte une loupe optique soudée à l'orbite droite qu'il n'enlève pas à l'intérieur.",
  "Gruff, expérimenté, profondément méfiant de quiconque n'a pas été sur le terrain. Compte les installations impériales détruites comme d'autres comptent leurs victoires : quarante-sept. Ce qui l'anime n'est pas la haine mais un sens de la justice comptable.",
  "Ancien ingénieur d'artillerie de Khar-Vurn. Il était présent lors de la Rupture Thermique — ordonné en position avancée par un commandant qui battait en retraite avec ses officiers. Quand il a compris que c'était une position de sacrifice, il a tué l'officier, récupéré le canon, et marché jusqu'au premier contact Dissident qu'il a pu trouver. Il y est depuis.",
  "Bombes Laviques (arc, explosion de zone retardée), Pluie de Fragments (zone de déni continue), Obus de la Caldera (tir unique dévastateur laissant un champ de feu 3 tours). Passif Calcul Balistique : précision croissante par tour stationnaire.",
  ""),

 (8, "Pyrossa", "feu", "Tireur", "Pyrien", "Varkhôl", "Independant",
  "Taille moyenne, yeux perçants, peau forge-trempe qui ressemble à un hâle mais est une trempe de forge. Deux canons à mains tirant des balles de magma cristallisé. Holsters en peau de drake achetés à un artisan de la Scorie payé au juste prix alors que l'Empire sous-payait les mêmes pour son armement.",
  "Exécute exactement ce pour quoi elle est payée, ni plus ni moins. Son code professionnel est rigide : pas d'enfants, pas de soigneurs, pas de destruction de mémoire collective. Refuse systématiquement la Convergence depuis qu'elle a compris ce qu'ils font aux Élus qu'ils 'convertissent'.",
  "Opère de part et d'autre des lignes impériales et dissidentes. Enregistre ses contrats auprès des Guildes de Virex (Isthme) — environ la moitié d'entre eux. Cette position lui a valu d'être sur la liste des cibles de la Convergence, ce qu'elle juge raisonnable. Elle charge le double pour tout contrat venant de l'Empire (majoration de principe) et travaille pour les Dissidentes au prix coûtant.",
  "Salves Ignifuges (volée rapide à 2 coups), Mines Thermoactives (déclenchées au passage), Tir Croisé (deux coups synchronisés des deux canons garantissant un critique sur la même cible au même tour).",
  ""),

 (9, "Ashvrak", "feu", "Assassin", "Pyrien", "Varkhôl", "Dissidentes",
  "Peau d'obsidienne fissurée presque noire, avec seulement la lueur du feu supprimé visible à travers des microfissures le long de la colonne vertébrale. Il manque l'extrémité de l'index gauche depuis une opération sur la Forge Silencieuse. Se déplace sans bruit malgré une carrure solide.",
  "Émotionnellement contrôlé à un degré qui déconcerte ceux qui l'approchent. N'a pas d'idéologie formelle — combat pour les Dissidentes parce que leurs cibles coïncident avec ses objectifs personnels. N'a jamais prétendu croire à la Naissance du Besoin. Il croit à la liste.",
  "L'Empire a décidé que son village au bord de la Forge Silencieuse occupait un emplacement stratégique pour une infrastructure de surveillance du Calendrier. Le commandant régional a ordonné l'évacuation forcée — ce qui, dans ce district, signifiait un déplacement violent. Ashvrak était à Khar-Vurn ce jour-là. Il a passé cinq ans à perfectionner les techniques impériales d'élimination, puis est revenu régler les comptes. Les Dissidentes l'ont trouvé après.",
  "Voile de Cendres (dissimulation fumigène), Frappe de l'Obsidienne (dégâts garantis depuis la furtivité adjacente), Brasier Intérieur (brulüure qui monte en puissance avec les PV restants de la cible). Passif Éclat Noir : les attaques depuis la furtivité ignorent les boucliers élémentaires.",
  ""),

 (10, "Forgelix", "feu", "Escrimeur", "Pyrien", "Varkhôl", "Empire",
  "Carrure classique de duelliste — élancé, posture puissante, toujours en position d'avant. Sa lame est forgée dans les feux des chambres profondes de Khar-Vurn, tient la chaleur comme un condensateur. L'Empire l'utilise aussi comme symbole public de compétence impulsant ordre — il n'est pas inconscient de cette fonction et la joue.",
  "Compétitif, formel, constitutionnellement incapable d'ignorer un défi à son honneur. N'a jamais refusé un duel en vingt ans. Croit sincèrement au Voile d'Équité : 'un monde sans règles produit des combattants sans discipline, et des combattants sans discipline massacrent.'",
  "Maître de l'école Lame-Flamme impériale de Khar-Vurn, qui traite le feu comme instrument de précision plutôt que de destruction brute — technique précisément cultivée par les Fées pour produire des gardiens de l'ordre qui ne laissent pas de dégâts collataux générant de la sympathie pour les Dissidentes. Il a formé dix-sept élèves. Trois ont rejoint les Dissidentes. Une statistique qu'il médite chaque année.",
  "Estocade Flamboyante (botte perçante à dégâts de chaleur), Riposte Ardente (contre qui accumule de la chaleur), Lame de Juge (frappe imparable à dégâts vrais quand la charge est pleine). Passif Maîtrise du Fil : taux critique croissant pour chaque coup consécutif sur la même cible.",
  ""),

 (11, "Kharak", "feu", "Vanguard", "Pyrien", "Varkhôl", "Convergence",
  "Dépôts calcifiés en plaques sur le dos et les épaules. Brulüures sur la gauche de son visage — absorbées délibérément lors d'une bataille pour protéger une unité en retraite. La marque de la Convergence est appliquée rituellement dans sa chair — pas une simple marque, un acte de foi.",
  "Conviction absolue dans la Convergence. Pas fanatique — lucide. Croit que les Élus accumulent de la puissance que le monde a besoin, et que la garder pour soi est égoïste. Ne se sacrifie pas par désespoir mais par logique de restitution.",
  "Né dans un village désertique qui n'avait jamais reçu d'Élu de la Citadelle jusqu'à ce qu'un accord avec la Convergence — et non avec les Fées — leur apporte leur premier Élu Ground en quarante ans. Kharak a vu la différence entre recevoir un Élu parce qu'une puissance centrale le décide et en avoir un parce qu'on a accepté un contrat de restitution. Il a choisi le contrat comme modèle de société.",
  "Mur de Lave (barrière brulante temporaire), Avancée Incandescente (poussée frontale forçant les ennemis en positions défavorables), Percée du Noyau (explosion frontale dégeant des passages à travers les formations défensives).",
  ""),

 (12, "Tarrath", "feu", "Gardien", "Pyrien", "Varkhôl", "Dissidentes",
  "Large comme une porte. Bouclier de basalte volcanique fusionné directement à son bras gauche via un rituel de modification Dissident — il est désormais physiquement lié à leur cause par modification irréversible. Voix inhabituellement douce pour sa taille.",
  "Ne combat pas pour la Naissance du Besoin en tant que concept. Combat parce que des individus spécifiques — Brasia, Sirayx, Ashvrak — ont besoin qu'une chose ne les atteigne pas. Il est la chose qui ne les atteint pas.",
  "A passé douze ans à garder des planques Dissidentes dans les districts les plus surveillés de Khar-Vurn, sous les regards des Capteurs impériaux. L'Empire a envoyé des unités d'élite à sept reprises. Aucune n'a pénétré les positions qu'il tenait. Il n'explique jamais comment — la réponse serait de la philosophie, et il n'a pas de temps pour ça quand il doit tenir une porte.",
  "Ancrage Volcanique (immobilité bonus 2 tours), Endurcissement Magmatique (convertit un pourcentage des dégâts en armure), Contrechoc Brulant (redirige les dégâts absorbés sur l'attaquant).",
  ""),

 (13, "L'Embrase", "feu", "Specialiste", "Pyrien", "Varkhôl", "Independant",
  "Impossible à décrire avec précision. Sa forme fluctue avec l'intensité de la chaleur environnante. Au repos : Pyrien de taille moyenne, peau rouge-braise, yeux de flamme constante. En combat : le contour se floute et s'étend. Les Fées l'ont classé une douzaine de fois dans leur Calendrier sous des noms différents. Chaque fois, son comportement a contredit la prédiction.",
  "Parle en énigmes qui s'avèrent systématiquement exactes. Trouve les trois factions également limi tées dans leur ambition. Chaleur profonde et genuine pour tout être essayant de survivre contre toute attente. Irréductible à toute classification.",
  "La Citadelle du Voile possède trois dossiers sur lui, chacun concluant que la capture est impossible pour des raisons différentes. La Convergence a envoyé des ritualistes pour le drainer. Ils sont revenus calcinés mais en vie — il avait pris soin de ne pas les tuer, juste de rendre la tentative instructive. Les Dissidentes le consultent parfois. Il répond rarement directement mais ses réponses se révèlent utiles des semaines plus tard.",
  "Singularité Thermique (redirige tous les dégâts de feu du champ vers des cibles choisies), Naissance de Lave (soulève du terrain volcanique temporaire modifiant le champ), L'Éveil (une fois par partie : événement de feu global forçant chaque unité à battre en retraite ou bruler).",
  ""),

]

# ── DRAGON ────────────────────────────────────────────────────────────────────
# Pyriens · Varkhôl · nés sur des "dates perdues" du Calendrier des Fées
# Anomalies pré-civilisationnelles : mémoire géologique de Varkhôl avant la forge-culture
# La Forge Silencieuse contient des formations pierre-dragon des premiers Élus pré-Calendrier
# La Citadelle les classifie "anomalies multitypes" — impossible à prédire

dragon = [

 (241, "Dragoryn", "dragon", "Enchanteur-Soutien", "Pyrien", "Varkhôl", "Dissidentes",
  "Pyrien dont la lignée porte une mutation draconique ancienne — des écailles dures couvrent ses épaules, son dos et l'arrière de ses bras, en plaques bordeaux sombre qui captent la chaleur ambiante et la redistribuent comme armure thermique. Ses yeux sont verticaux, pupilles de reptile en ambre doré. Il porte des robes avec des encoches sur les épaules pour exposer les plaques dont la chaleur soigne les alliés proches. Il a trouvé des empreintes de ses écailles dans des parois de la Forge Silencieuse — des formations de pierre-dragon d'avant l'Empire.",
  "Gardien de mémoire autant que combattant. Porte les codes ancestraux des premiers Élus Dragon de Varkhôl — ceux que le Calendrier des Fées n'a jamais pu dater parce qu'ils préexistaient à la méthode. Sa colère contre l'Empire est froide et documentée : ils ont remplacé les sites draconiques par des infrastructures de surveillance.",
  "Dissident depuis la découverte que la Citadelle du Voile possède des dossiers sur chaque site draconique de Varkhôl, classés comme 'anomalies pré-calendrier à neutraliser' — des zones de naissance potentielle d'Élus Dragon que les Fées veulent éliminer ou contrôler avant qu'elles ne produisent des Élus imprévisibles. Dragoryn opère dans ces sites, les cartographie, les protège. Il est en contact régulier avec Khossaëre (Capteur, Empire) qui tente de cataloguer ces mêmes sites pour les Fées.",
  "Résonnance des Écailles (soutien de zone : les alliés dans le rayon résistent mieux aux dégâts élémentaires), Écailles Partagées (transfert de protection draconique à un allié ciblé), Rugissement de Soutien (amplifie la résistance de toute la brigade), Vol Draconique (repositionnement aérien pour coordination). Passif Mémoire des Écailles : les alliés sur des cases Dragon réduisent les dégâts reçus.",
  ""),

 (242, "Khossaëre", "dragon", "Enchanteur-Capteur", "Pyrien", "Varkhôl", "Empire",
  "Écailles d'un vert-acier sombre qui réfléchissent la lumière comme du métal poli — un Dragon Élu qui a accepté les modifications de liaison impériales, ce qui a légèrement altré la coloration naturelle de sa mutation. Sa pupille verticale est encadrée par un dispositif optique impérial qui lit les signatures élémentaires. Il porte le sceau de la Citadelle gravé dans l'écaille sur sa gorge.",
  "Croit que seule la Citadelle a les ressources pour étudier et contenir les anomalies Dragon de manière sûre. Voit son travail comme une protection autant qu'un contrôle — les Élus Dragon laissés libres sont vulnérables à la Convergence, qui cherche activement à les drainer. Autres Élus Dragon le considèrent comme une trahison absolue.",
  "Unique Capteur impérial qui est lui-même un Élu Dragon — ce qui lui donne un avantage considérable pour suivre les autres anomalies pré-calendrier. La Citadelle du Voile a investi massivement dans sa formation parce qu'il peut lire les sites draconiques de Varkhôl d'une façon qu'aucun Capteur humain ne peut reproduire. Il est conscient d'être utilisé comme outil et choisit de l'être, estimant que c'est le prix de la sécurité collective.",
  "Marquage Draconique (révèle la position des Élus Dragon cachés dans la zone), Filet d'Écailles (capture à distance, immobilise temporairement), Extraction Ancestrale (lit la signature élémentaire complète d'un Dragon Élu, debuffant ses capacités). Passif Instinct du Prédateur Dragon : révèle automatiquement les Élus Dragon furtifs dans un rayon étendu.",
  ""),

 (243, "Gorrath", "dragon", "Juggernaut", "Pyrien", "Varkhôl", "Convergence",
  "Massif, avec des écailles noircies par douze extractions rituelles partielles que la Convergence appelle 'restitutions'. Ses écailles ont des fractures visibles aux jointures — chaque extraction en a laissé une nouvelle. Sa puissance brute est préservée, mais ses collègues de la Convergence savent que sa signature élémentaire est partiellement creuse.",
  "Volontaire pour les extractions. Croit que la puissance d'un Élu Dragon appartient au monde qui l'a produite, non à l'individu. Ne souffre pas en présence des ritualistes de la Convergence — ou affirme ne pas souffrir, ce qui n'est pas tout à fait la même chose.",
  "La Convergence le présente comme la preuve que les extractions peuvent être menées sur un Élu Dragon sans le tuer — douze fois, argument irréfutable. Ce qu'ils ne présentent pas, c'est le coût sur sa capacité à penser à long terme, ni le fait qu'il n'a pas demandé de médecin lors des trois dernières extractions. Pour la Convergence, il est un investissement. Pour lui, il est l'argument vivant d'une théologie qu'il choisit de croire.",
  "Pression Draconique (aura de force physique qui repousse tout ce qui est adjacent), Charge de Pierre-Dragon (rush lourd qui détruit les obstacles), Corps Primordial (mode de survie où toutes les sources de dégâts sont absorbées et restituées en éclat de zone). Passif Endurance Ancestrale : réduction massive des dégâts quand les PV passent sous 30%.",
  ""),

 (244, "Skarath", "dragon", "Plongeur", "Pyrien", "Varkhôl", "Dissidentes",
  "Élancé pour un Dragon Élu, avec des écailles légères d'un rouge-ambré qui absorbent la lumière plutôt qu'elles ne la réfléchissent. Sa mutation draconique a produit des écailles pectorales qui fonctionnent comme des ailerons — en position de sprint, il plane sur de courtes distances. Né au bord de la Forge Silencieuse, dans une formation de pierre-dragon que personne n'avait identifiée comme site de naissance potentiel.",
  "Rapide, instinctif, dépend de ses réflexes plutôt que de la planification. Parle peu. A une loyauté absolue envers les Dissidentes parce qu'ils l'ont trouvé une semaine avant les Capteurs impériaux. Cette semaine représente, pour lui, ce que valent les Dissidentes.",
  "Né sur une 'date perdue' du Calendrier des Fées — la Citadelle savait qu'une naissance devait se produire dans la zone de Khar-Vurn mais ne pouvait pas prédire laquelle. Les Capteurs ont été déployés avec une semaine de retard sur la naissance effective. Dragoryn a amené Skarath aux Dissidentes avant l'arrivée des Capteurs. Il court depuis, dans l'espace entre les lignes de surveillance impériales.",
  "Aile Draconique (court sprint aérien traversant les cases occupées), Coup de Queue (écaille-whip qui déséquilibre), Plongeon de Pierre (frappe de descente avec knockback en zone). Passif Vélocité Ancestrale : chaque mouvement augmente les dégâts du prochain sort.",
  ""),

 (245, "Pyraxis", "dragon", "Mage-Burst", "Pyrien", "Varkhôl", "Independant",
  "Dragon Élu d'une magnitude que les Fées ont classé 'anomalie de niveau II' — une catégorie qu'elles n'utilisent que pour les Élus dont la capture directe est jugée trop coûteuse. Ses écailles sont d'un rouge-noir profond et irradient une chaleur perceptible à distance. Sa respiration laisse de la fumée dans l'air froid. Sa stature dépasse celle de la plupart des Pyriens de plus d'une tête.",
  "Les Fées et la Convergence ont convenu informellement de ne pas le confronter directement. Cette information lui est parvenue un jour sous forme de courrier diplomatique qui ne s'adressait pas à lui mais à un intermédiaire — il l'a intercepté. Il trouve ça drôle. Opère seul, suit les anomalies géologiques de Varkhôl que seuls les Dragon Élus peuvent percevoir.",
  "La Citadelle l'a tenté de capturer deux fois. La Convergence a envoyé des ritualistes une fois. Il n'a tué aucun des agents envoyés — il les a laissés revenir, épargnés, ce qui a été interprété par toutes les parties comme un avertissement. Les Dissidentes le consultent occasionnellement sur les sites draconiques. Il répond quand la question lui paraît mériter une réponse.",
  "Souffre Primordial (explosion de feu-dragon à longue portée, dégâts de zone massifs), Fracture Géologique (déstabilise le sol sous les ennemis via vibration draconique), Déflagration de l'Ancêtre (burst total librée énergie ancestrale, immense rayon). Passif Ancestral : ses sorts ignorent les résistances élémentaires standards.",
  ""),

 (246, "Pyraskale", "dragon", "Battlemage", "Pyrien", "Varkhôl", "Empire",
  "Écailles d'un bleu-acier que les forges impériales ont partiellement fixées et renforcées via des procédés que la Citadelle ne rend pas publics. Il combat avec une épée intégrée entre deux rangd'es d'écailles au bras droit — une arme qui n'est pas portillée mais crue. L'Empire le présente comme la preuve que les Dragon Élus peuvent être utilisés, pas seulement contenus.",
  "Croit que l'Empire peut domestiquer les anomalies Dragon comme les Pyriens ont domestiqué le feu volcanique. Cette analogie lui semble évidente. Les Dissidentes la trouvent deeply fausse — domestiquer une anomalie du Calendrier, c'est précisément ce contre quoi ils se battent.",
  "Sert l'Empire comme démonstration vivante de ce qu'un Dragon Élu encadré peut accomplir — et comme argument contre la doctrine Dissidente selon laquelle les Dragon Élus doivent rester libres pour être utiles. Il a affronté Dragoryn une fois lors d'une mission. Le combat n'a pas eu de vainqueur clair. Les deux hommes se respectent et se combattent.",
  "Lame d'Écaille (frappe de mélée avec dégâts draconiques), Barrière de Carnage (bouclier d'écailles temporaire qui inflige des dégâts à toute attaque de mélée), Déflagration de Contact (explosion à courte portée liée au bras-lame). Passif Intégration Draconique : les dégâts reçus renforcent temporairement la prochaine attaque.",
  ""),

 (247, "Vrathax", "dragon", "Artillerie", "Pyrien", "Varkhôl", "Dissidentes",
  "Grand, ailes vestigiales qui ne lui permettent pas le vol mais augmentent considérablement sa portée de projection via un mécanisme d'écaille-sail. Ses écailles sont d'un orange tereux — la couleur des formations draconiques les plus anciennes de Varkhôl, pré-forge. Combat depuis les hauteurs des arêtes volcaniques, hors de portée des Capteurs impériaux.",
  "Méthodique, patient, comporte une profonde satisfaction à proteger les Dissidentes depuis des positions que personne d'autre ne peut tenir. N'a pas besoin d'être sur la ligne de front pour être décisif. Ses positions sur les arêtes sont marquées sur les cartes internes de la Citadelle comme 'zones d'interdiction non-résolues'.",
  "A grandi sur les arêtes volcaniques de Varkhôl, dans des sites draconiques que l'Empire cartographiait mais n'habitait pas. Sa position actuelle dans les Dissidentes est née d'un pragmatisme : les Filles de la Forge impériales n'attaquent pas des positions où elles ne peuvent pas observer leurs pertes. Il observe les leurs depuis les hauteurs. Et tire.",
  "Souffre Lointain (boule de feu draconique à très longue portée, arc haut), Pluie d'Écailles (projectiles multiples sur zone), Inferno à Distance (brulüure persistante sur une zone choisie pendant 3 tours). Passif Angle Draconique : dégâts bonus depuis les cases surlevées.",
  ""),

 (248, "Dragun", "dragon", "Tireur", "Pyrien", "Varkhôl", "Independant",
  "Silhouette secè pour un Dragon Élu, avec des écailles fines d'un brun-doré qui captent la chaleur ambiante plutôt que de la produire. Ses projectiles sont des concentrations de feu draconique formées entre ses paumes — pas d'arme conventionnelle. Il porte des gants thermoactifs de régulation pour contrôler la décharge.",
  "Métier clair et éthique personnel simple : fonctionne pour quiconque paye le juste prix, jamais pour la Convergence (qu'il considère moralement répugnante depuis qu'il a vu ce qui reste de Gorrath après douze extractions), et à tarif symboli que pour les Dissidentes. Travaille pour l'Empire au double du tarif standard. Ils paient.",
  "Opère dans la zone grise entre les trois factions, enregistrant ses contrats à Virex (Isthme) comme la loi l'exige — théoriquement. La Citadelle le suit mais ne le confronte pas directement : il leur a été utile plusieurs fois dans des situations où un Élu Dragon indépendant était plus discret qu'un agent officiel.",
  "Tir Draconique (projectile ciblé à haute vélocité perçant les boucliers), Double Charge (deux tirs simultanés sur deux cibles différentes), Exécution Ancestrale (tir chargé à délai garanti critique si la cible est sous 50% PV). Passif Sang de Dragon : ses tirs ignorent un pourcentage de la résistance élémentaire de la cible.",
  ""),

 (249, "Scalek", "dragon", "Assassin", "Pyrien", "Varkhôl", "Dissidentes",
  "Écailles d'un noir-mineral qui absorbent la lumière — dans la pénombre ou contre des parois de pierre, Scalek devient visuellement absent. C'est une propriété passive de sa mutation draconique, pas une technique apprise. Fin et silencieux pour sa taille. Il manque deux écailles sur la joue gauche — artefact d'une tentative de capture impériale.",
  "Calibre moral singulier : élimine les agents impériaux qui traquent les Dragon Élus hors-Calendrier. C'est sa fonction, pas son identité. En dehors des missions, il est réservé, précis dans ses paroles, et possède une collection de fragments de pierre-dragon récupérés dans la Forge Silencieuse qu'il considère comme des reliques.",
  "La Citadelle a tenté de le capturer quatre fois. À chaque fois, les agents revenaient sans lui et avec des informations incomplètes sur ce qui s'était passé. Il ne tue pas les Capteurs — il les laisse revenir, parce qu'un Capteur qui revient raconte une histoire démoralisant pour l'Empire. Khossaëre (Capteur Dragon, Empire) est la seule personne qu'il considère comme un ennemi personnel plutôt qu'une fonction à contrer.",
  "Camouflage Draconique (invisibilité passive contre les surfaces de pierre), Frappe d'Écaille-Noire (dégâts garantis depuis la furtivité, ignore les boucliers), Enveloppement de Pierre (entoure la cible de débris draconiques, l'isolant de ses alliés). Passif Prédateur Ancestral : les attaques depuis l'invisibilité infligent des dégâts d'armure permanents.",
  ""),

 (250, "Lancerak", "dragon", "Escrimeur", "Pyrien", "Varkhôl", "Empire",
  "Dragon Élu dont la mutation a produit des excroissances d'écailles acrées sur les avant-bras — des lames naturelles que l'Empire a affinées et tempérées pour les convertir en armes de duel précises. Il est le duelliste préféré des Fées pour résoudre les conflits politiques qui ne peuvent pas être traités ouvertement.",
  "Pragmatique, formel, profondément indépendant dans ses jugements même en servant l'Empire. Il n'exécute que les duels qu'il juge légitimes selon son propre code — ce qui a créé plusieurs fois des situations diplomatiques délicates avec la Citadelle quand il a refusé une mission.",
  "L'Empire l'utilise parce qu'un Dragon Élu défiant quelqu'un en duel officiel est politiquement puissant — cela implique que la cause impériale est assez légitime pour que même une anomalie pré-Calendrier la serve. Cette instrumentalisation, il la connaît et l'accepte à condition de garder son droit de refus. Il a refusé trois fois. Chaque fois, les Fées ont trouvé un autre arrangement plus coûteux.",
  "Lame d'Écaille (attaque rapide des avant-bras), Para de Draconique (contre-attaque avec les écailles qui inflige en retour), Tranche Ancestrale (frappe précise ignorant la parade normale). Passif Code du Duel : en défi officiel, les dégâts sont augmentés de 25%.",
  ""),

 (251, "Kharrath", "dragon", "Vanguard", "Pyrien", "Varkhôl", "Convergence",
  "Écailles massives et partiellement creusées — chaque extraction rituelle de la Convergence a laissé une marque visible. Ses écailles ont des fr actures aux jointures. Sa stature est impressionnante mais ses mouvements ont un léger tremblement que ceux qui le connaissent reconnaissent comme le coût cumulé des extractions. Il ne le mentionne pas.",
  "Volontaire pour les extractions depuis le début. Croit que la puissance d'un Dragon Élu est une dette cosmique. Marge doctrine de la Convergence avec une profondeur religieuse que même les ritualistes trouvent parfois déstabilisante — il croit plus profondément en leurs textes qu'eux.",
  "La Convergence le présente comme leur argument le plus puissant : un Dragon Élu qui choisit librement la restitution. Douze extractions, toujours en vie, toujours fonctionnel. Ce qu'ils ne présentent pas, c'est qu'il n'a pas demandé de médecin lors des trois dernières. Pour la Convergence, il est un investissement. Pour lui, il est la preuve vivante que leur théologie est viable.",
  "Front Draconique (charge avant qui crée une zone de pression élémentaire), Aura de Restitution (aura qui convertit les dégâts reçus en énergie de zone pour les alliés), Sacrifice Contrôlé (se vide de son énergie draconique pour un burst massif sur toute la ligne). Passif Vase du Flux : absorbe les dégâts subis par les alliés adjacents.",
  ""),

 (252, "Fortrakken", "dragon", "Gardien", "Pyrien", "Varkhôl", "Dissidentes",
  "Écailles calcifiées en couches si épaisses qu'elles ne sont plus des écailles mais une armure organique continue. Il ne peut pas faire de mouvements amples — sa mobilité est extrêmement limitée — mais ce qu'il protège ne peut pas être atteint à travers lui. Il garde des sanctuaires Dissidents sous la Forge Silencieuse, dans des tunnels que seuls les Dragon Élus peuvent naviguer.",
  "Immobilité comme doctrine. Ne parle pas en combat. Hors combat, parle peu mais avec une précision absolue. Sa présence est perceptible physiquement — la chaleur irradie de ses écailles comme d'un mur de basalte chaud.",
  "Protecteur des sanctuaires Dissidents enfouis dans les tunnels thermiques sous la Forge Silencieuse — des espaces que l'Empire ne cartographie pas parce que les formations draconiques perturbent leurs instruments de mesure. Fortrakken est la raison pour laquelle personne de l'Empire n'a jamais atteint ces tunnels. Il n'a pas besoin de bouger pour être la raison.",
  "Rempart d'Écaille (zone d'interdiction de passage impassable pendant 2 tours), Absorption Draconique (prend les dégâts d'un allié adjacent), Réponse Ancestrale (décharge la chaleur absorbée en une onde de zone). Passif Forteresse Organique : réduction des dégâts de 35% tant qu'il reste immobile.",
  ""),

 (253, "L'Ancien", "dragon", "Specialiste", "Pyrien", "Varkhôl", "Independant",
  "Le plus vieux Dragon Élu connu. Ses écailles ont la couleur et la texture de la pierre-dragon des formations les plus anciennes de Varkhôl — des teintes bordeaux presque noires à la surface, révélant en profondeur des strates orange et or. Sa taille dépasse les deux mètres. Ses mouvements sont délibérément lents mais jamais incertains.",
  "Sa naissance prédate le Calendrier des Fées lui-même — aucun dossier à la Citadelle du Voile ne le mentionne, ce que les Fées trouvent profondément inquiétant. Il intervient occasionnellement dans des événements historiques, produit une action décisive, et retourne dans les profondeurs volcaniques. Personne ne sait pourquoi il agit quand il agit.",
  "Il a été présent lors de la catastrophe fondatrice qui a créé la Forge Silencieuse — certains temoignages indirects le placent sur les lieux avant la Rupture Thermique, comme s'il l'avait prévue. La Citadelle du Voile a lancé une enquête. L'enquête a été classée. L'Ancien est plus vieux que le Calendrier lui-même et répond à une logique que personne n'a encore formulée.",
  "Mémoire des Profondeurs (rappelle toutes les naissances Dragon survenues dans la zone depuis des siècles, révélant les sites et les lignes de vulnérabilité), Volcan Décision (déstabilise tout le terrain de jeu via une réponse tectonique), Éveil Primordial (une fois par partie : activation de tous les sites draconiques de la carte, transformant le terrain). Passif Avant le Calendrier : ses capacités ne peuvent pas être prédites ni contraren par des effets de détection.",
  ""),

]

feu_folders = [
    "001-pyrakh", "002-kaelsa-la-braise", "003-durhn", "004-sira",
    "005-auren", "006-vaela", "007-rekkar", "008-pyrssa",
    "009-ashva", "010-forun", "011-kharuna", "012-tarakh", "013-l-embrase"
]

dragon_folders = [
    "241-dragoryn", "242-khossaere", "243-gorrath", "244-drake-rapide",
    "245-dracomax", "246-pyraskale", "247-souffre-loin", "248-dragun",
    "249-scalek", "250-lanset-ecaille", "251-rage-drake", "252-fortrakken",
    "253-l-ancien"
]

for i, char in enumerate(feu):
    folder = feu_folders[i]
    path = f"{ROOT}/{BASE}/feu/{folder}/index.ts"
    write(path, char_file(*char))
print(f"Feu: {len(feu)} personnages réécrits")

for i, char in enumerate(dragon):
    folder = dragon_folders[i]
    path = f"{ROOT}/{BASE}/dragon/{folder}/index.ts"
    write(path, char_file(*char))
print(f"Dragon: {len(dragon)} personnages réécrits")
print(f"Total: {len(feu)+len(dragon)} personnages")
