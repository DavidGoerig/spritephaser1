"""Écrit les personnages Électrique (091-103) et Vent (211-223) avec ancrage LORE_CANON."""
import os

BASE = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main/src/data/characters"

def char_file(id, nom, element, classe, espece, region, faction, phys, perso, lore, combat, modifs=""):
    modifs_str = "\n" + modifs if modifs else ""
    return f"""import {{ ELEMENT_KITS }} from '../../../character-kits';
import {{ Personnage }} from '../../../types';

const modifs = ELEMENT_KITS['{element}']['{classe}'];{modifs_str}

export const personnage: Personnage = {{
  id: {id},
  nom: '{nom}',
  element: '{element}',
  classe: '{classe}',
  espece: '{espece}',
  region: '{region}',
  faction: '{faction}',
  niveau: 1,
  xp: 0,
  stats: {{
    hp: modifs.hp,
    atk: modifs.atk,
    def: modifs.def,
    spe_atk: modifs.spe_atk,
    spe_def: modifs.spe_def,
    vit: modifs.vit,
  }},
  description: {{
    physique: `{phys}`,
    personnalite: `{perso}`,
    lore: `{lore}`,
    combat: `{combat}`,
  }},
}};
"""

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK: {path}")

# ─────────────────────────────────────────────────────────────
# ÉLECTRIQUE (091–103) — Aérides · Asterciel · Heliora
# Événement : La Chute des Nuages
# Politique : Aristocratie verticale (altitude = hiérarchie)
# ─────────────────────────────────────────────────────────────
elec_folders = [
    "091-volta","092-arkyn","093-thormass","094-spark","095-fulgur",
    "096-elexyn","097-bolte","098-zelyne","099-electra","100-chayn",
    "101-korryn","102-egide-foudre","103-le-conducteur"
]

elec_chars = [
    # 091 Volta — Soutien — Dissidentes
    dict(id=91, nom="Volta", element="electrique", classe="Soutien", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride de taille moyenne, peau légèrement phosphorescente sous l'effet de ses propres décharges. Cheveux dressés en permanence par le champ électrique interne. Yeux bleu électrique.",
         perso="Soigneuse qui refuse que ses soins servent à remettre en état des soldats impériaux envoyés réprimer les Aérides des quartiers bas d'Heliora. Sa limite est claire et elle la tient.",
         lore="Volta soignait dans les quartiers inférieurs d'Heliora — l'altitude basse qui correspond au rang bas dans l'aristocratie verticale d'Asterciel. Depuis la Chute des Nuages, où plusieurs quartiers ont décroché et que seul un Élu Stellar rare a pu sauver, les inégalités de reconstruction ont été criantes. L'Empire a priorisé les quartiers hauts. Volta soigne les quartiers bas, hors-registre.",
         combat="Décharges de soin ciblées qui stabilisent sans laisser de signature traçable. Boucliers ionisés qui absorbent les attaques électriques adverses. Si poussée à l'offensive, des arcs électriques de défense."),

    # 092 Arkyn — Capteur — Empire
    dict(id=92, nom="Arkyn", element="electrique", classe="Capteur", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride élancé en uniforme de la caste sacerdotale d'Heliora, anneaux de cuivre conducteur aux doigts, yeux qui détectent les champs électriques ambiants.",
         perso="Croit sincèrement que les Élus Electric non-enregistrés représentent un risque : une autre Chute des Nuages est possible si les flux sont mal gérés. Sa vigilance est réelle, pas idéologique.",
         lore="Arkyn utilise sa capacité à lire les champs électriques ambiants pour détecter les signatures d'Élus non-enregistrés. Après la Chute des Nuages et la reconstruction par l'Élu Stellar, Heliora a été re-sacralisée — la caste des lecteurs de destin a pris le pouvoir politique. Arkyn opère dans ce nouveau cadre : traquer les Élus Electric qui pourraient déstabiliser les flux reconstruits.",
         combat="Filets de courant qui paralysent sans brûler. Localisation par triangulation électromagnétique. Cage électrique portable pour capturer les cibles sans les abîmer."),

    # 093 Thormass — Juggernaut — Convergence
    dict(id=93, nom="Thormass", element="electrique", classe="Juggernaut", espece="Aéride",
         region="Asterciel", faction="Convergence",
         phys="Aéride colossal, musculature surdéveloppée traversée de cicatrices de Drain électrique — lignes bleues brûlées dans la peau. Ses mains font disjoncter les équipements électroniques au contact.",
         perso="Pense que sa capacité à encaisser des Drains à répétition fait de lui un actif collectif, pas un individu. La douleur des Drains, dit-il, est la sensation d'être utile.",
         lore="Thormass est devenu le Juggernaut de référence de la Convergence à Asterciel après avoir survécu à un Drain de signature électrique qui aurait tué trois Aérides ordinaires. Son énergie partiellement extraite alimente des infrastructures à Ash'Rael. La caste sacerdotale d'Heliora le considère comme un hérétique qui donne la légitimité céleste à des étrangers.",
         combat="Résistance aux décharges électriques par accoutumance — absorbe et retourne partiellement. Charge dévastatrice qui libère une surcharge électrique de contact. Ses frappes court-circuitent les équipements adverses."),

    # 094 Spark — Plongeur — Dissidentes
    dict(id=94, nom="Spark", element="electrique", classe="Plongeur", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride agile aux réflexes sur-développés, cheveux courts brûlés par ses propres surcharges. Marques d'arc électrique sur les avant-bras — traces d'infiltrations serrées.",
         perso="Impulsif mais précis. Son moteur est la colère contre la Chute des Nuages mal gérée et les inégalités de reconstruction qui ont suivi. Il agit vite et juste.",
         lore="Spark extrait des Élus Electric que le Calendrier a identifiés dans les quartiers bas d'Heliora avant que les agents impériaux n'arrivent. Depuis la Chute des Nuages, la caste sacerdotale a renforcé la surveillance des naissances — les Élus Electric sont considérés comme stratégiques pour la stabilité d'Asterciel. Spark en a sauvé neuf cette saison.",
         combat="Vitesse d'infiltration maximale, déplacement par bonds électriques. Neutralisation des systèmes de détection par court-circuit. Combat de précision électrique — frappe et disparaît."),

    # 095 Fulgur — Mage-Burst — Indépendant
    dict(id=95, nom="Fulgur", element="electrique", classe="Mage-Burst", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride dont la peau émet des éclairs en continu au repos. Ses yeux sont devenus blancs de surcharge chronique. Autour de lui, les équipements électroniques surchauffent.",
         perso="Cherche à comprendre les limites de la puissance électrique — pas comme arme, comme phénomène. Désintéressé des conflits de faction. Fasciné par la Chute des Nuages comme événement physique.",
         lore="Fulgur a reproduit en laboratoire privé les conditions de la Chute des Nuages — la surcharge électrique qui a fait décrocher les quartiers d'Heliora. Il a compris le mécanisme avant la caste sacerdotale. Ni l'Empire ni les Dissidentes n'ont pu le recruter : sa puissance est trop instable pour être utilisée de façon prévisible.",
         combat="Décharge totale en zone — dangereuse pour les alliés autant que les ennemis. Supernova électrique centrée sur lui. Puissance brute sans contrôle tactique apparent, mais d'une densité que rien n'arrête."),

    # 096 Elexyn — Battlemage — Empire
    dict(id=96, nom="Elexyn", element="electrique", classe="Battlemage", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride en armure conductrice impériale, anneaux supraconducteurs aux poignets, sceau du Voile d'Équité incrusté en platine sur le casque.",
         perso="Discipline militaire pure. Pense que la caste sacerdotale d'Heliora et l'Empire sont des alliés naturels — tous deux croient en l'ordre hiérarchique. La légitimité céleste et le Calendrier se renforcent.",
         lore="Elexyn applique la loi du Calendrier à Asterciel, opérant dans la tension entre la caste sacerdotale d'Heliora et l'Empire féerique. Les deux veulent contrôler les Élus Electric — pour des raisons différentes. Elexyn navigue entre les deux, loyal à l'Empire mais respectueux de la hiérarchie verticale d'Asterciel.",
         combat="Combat de mêlée électrique, boucliers de champ magnétique actifs. Frappe combinée électrique-physique qui court-circuite les défenses élémentaires. Utilise l'architecture conductrice d'Heliora comme extension de son champ."),

    # 097 Bolte — Artillerie — Dissidentes
    dict(id=97, nom="Bolte", element="electrique", classe="Artillerie", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride trapue, canon électromagnétique improvisé vissé à l'épaule, cheveux roussis de façon permanente. Des étincelles crépitent sur sa peau quand elle se concentre.",
         perso="Directe et brutale dans ses opinions : les infrastructures de contrôle sont des ennemis physiques, pas des abstractions. Elle les traite en conséquence.",
         lore="Bolte a cartographié les relais de surveillance de la caste sacerdotale d'Heliora — des tours de lecture de destin qui servent aussi à capter les signatures élémentaires pour le Calendrier. Elle en détruit systématiquement depuis la Chute des Nuages. Chaque destruction est une perte de données pour l'Empire et un gain de liberté pour les Élus des quartiers bas.",
         combat="Canon électromagnétique à longue portée — ses tirs traversent la plupart des boucliers. Bombardement de zone qui crée des champs d'arc persistants. Détruit les équipements de surveillance de loin."),

    # 098 Zelyne — Tireur — Indépendant
    dict(id=98, nom="Zelyne", element="electrique", classe="Tireur", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride fine aux yeux qui luisent légèrement dans l'obscurité, équipement de tir électrique modulaire récupéré de plusieurs sources. Jamais identifiable à une faction.",
         perso="Mercenaire honnête : elle dit exactement ce qu'elle fait pour de l'argent et ce qu'elle ne fera pas pour aucune somme. Sa ligne est nette.",
         lore="Zelyne loue ses services dans Asterciel depuis la Chute des Nuages, qui a créé un marché de l'action militaire privée — reconstruction, protection, extraction. Elle n'a jamais travaillé deux fois pour le même camp. La caste sacerdotale la surveille comme une anomalie non-classée.",
         combat="Tirs électriques de précision à longue portée qui ciblisent les signatures élémentaires adverses. Repositionnement par bond électrique. Sniper capable d'opérer dans les courants électriques d'Heliora."),

    # 099 Electra — Assassin — Dissidentes
    dict(id=99, nom="Electra", element="electrique", classe="Assassin", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride à la peau bleutée de décharge chronique, quasi-invisible dans les zones d'arc électrique. Laisse une marque d'ozone sur ses cibles — odeur caractéristique de foudre.",
         perso="Idéaliste mais froide dans l'exécution. Voit les agents de la caste sacerdotale corrompus par l'Empire comme des nœuds à neutraliser dans un réseau de contrôle.",
         lore="Electra élimine les agents qui servent à la fois la caste sacerdotale d'Heliora et l'Empire féerique — les intermédiaires qui rendent le système de surveillance double possible. Depuis la Chute des Nuages, ces agents sont présentés comme des 'stabilisateurs d'Asterciel'. Electra sait ce qu'ils stabilisent réellement.",
         combat="Invisibilité dans les champs électriques ambiants. Frappe mortelle par décharge ciblée — arrêt cardiaque contrôlé. Sans bruit, sans flamme, sans signature traçable."),

    # 100 Chayn — Escrimeur — Empire
    dict(id=100, nom="Chayn", element="electrique", classe="Escrimeur", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride élégant en tenue de duel de la caste haute d'Heliora, lame électromagnétique forgée en altitude, mouvements qui combinent tradition du duel asterciel et discipline impériale.",
         perso="Représente le Voile à Heliora avec une grâce qui masque la dureté de sa fonction. Croit que la force légitime est celle qui respecte les formes.",
         lore="Chayn est le duelliste officiel de l'Empire à Heliora — il règle les contentieux entre la caste sacerdotale et les représentants féeriques par duel codifié. Depuis la Chute des Nuages et la re-sacralisation d'Asterciel, ces contentieux sont fréquents et politiquement chargés. Sa réputation de victoire est sa valeur politique.",
         combat="Escrime électromagnétique à grande vitesse. Sa lame peut court-circuiter les protections élémentaires d'un seul échange bien placé. L'altitude d'Heliora amplifie ses capacités."),

    # 101 Korryn — Vanguard — Convergence
    dict(id=101, nom="Korryn", element="electrique", classe="Vanguard", espece="Aéride",
         region="Asterciel", faction="Convergence",
         phys="Aéride aux yeux brûlés par plusieurs Drains partiels. Armure de la Convergence chargée d'accumulateurs de signature électrique. Mouvements mécaniques, calibrés.",
         perso="Évangéliste de la redistribution dans un milieu où l'aristocratie verticale d'Asterciel est l'argument de légitimité. Son contre-argument : la hauteur ne justifie pas l'accumulation.",
         lore="Korryn opère dans les quartiers bas d'Heliora, recrutant des Aérides résidus de la Chute des Nuages — ceux dont les quartiers n'ont pas été reconstruits. Il leur propose la doctrine de la Convergence comme alternative à l'attente d'une aide impériale qui ne vient pas. Ses résultats sont mitigés mais réels.",
         combat="Avant-garde doctrinale, absorbe les décharges électriques adverses pour les redistribuer à ses alliés. Sa présence frontale crée un champ de redistribution d'énergie qui renforce toute la formation."),

    # 102 Egide-Foudre — Gardien — Indépendant
    dict(id=102, nom="Egide-Foudre", element="electrique", classe="Gardien", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride colossal, armure composite de matériaux conducteurs et isolants en alternance. Génère un champ électrique stable à deux mètres de lui — les projectiles dévient.",
         perso="Protège ce qu'il a décidé de protéger, sans mandat ni doctrine. Sa décision est claire et il n'en change pas.",
         lore="Egide-Foudre garde les entrées des quartiers bas d'Heliora depuis la Chute des Nuages — zone de reconstruction lente, régulièrement visitée par des agents de toutes factions. Il ne travaille pour personne. Il a décidé que ces quartiers méritaient une protection. Les trois factions ont toutes essayé de le retourner. Il leur a répondu non.",
         combat="Bouclier électromagnétique actif qui dévie projectiles et décharges. Contre-attaque électrique proportionnelle aux attaques reçues. Sa défense est presque impénétrable dans un rayon de deux mètres."),

    # 103 Le Conducteur — Spécialiste — Indépendant
    dict(id=103, nom="Le Conducteur", element="electrique", classe="Spécialiste", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride dont la forme est instable — les champs électriques extrêmes qu'il génère déforment légèrement sa silhouette. Ses cheveux sont devenus de la lumière.",
         perso="Entité de connexion. Pense en réseaux, pas en individus. Les doctrines lui semblent des courts-circuits dans des systèmes plus larges.",
         lore="Le Conducteur est né dans le sillage immédiat de la Chute des Nuages — peut-être une conséquence directe de la surcharge électrique qui a causé l'événement, peut-être une réponse du monde à un besoin de reconstruction. Il comprend le réseau électrique d'Heliora comme un organisme vivant dont il est une partie. L'Empire ne peut l'enregistrer dans le Calendrier : sa naissance n'a pas de date.",
         combat="Connexion et déconnexion de tous les réseaux électriques dans une large zone. Redirection des courants adverses. Surcharge de systèmes entiers. Sa puissance dépend de la densité électrique du terrain."),
]

# ─────────────────────────────────────────────────────────────
# VENT (211–223) — Aérides/Néréides · Asterciel/Thalassyr
# Événements : Chute des Nuages + Silence des Vents
# ─────────────────────────────────────────────────────────────
vent_folders = [
    "211-brise-ame","212-tempestine","213-vortex-massif","214-rafale","215-tornade",
    "216-cyclonyx","217-ouragan","218-zephyr","219-vent-fantome","220-tourbillon",
    "221-typhon","222-rempart-aerien","223-l-inconstant"
]

vent_chars = [
    # 211 Brise-Âme — Soutien — Dissidentes
    dict(id=211, nom="Brise-Âme", element="vent", classe="Soutien", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride légère aux vêtements perpétuellement soulevés par son propre courant. Mains translucides qui canalisent le vent cicatrisant. Yeux gris clair comme ciel de tempête.",
         perso="Douce mais pas naïve. Elle pense que les soins appartiennent à ceux qui en ont besoin, pas à ceux que le Calendrier juge méritants.",
         lore="Brise-Âme soignait à Heliora dans les jours qui ont suivi la Chute des Nuages — quand les quartiers décrochés saignaient et que l'Empire traitait d'abord les niveaux supérieurs. Elle a soigné sans distinction. Les Dissidentes l'ont repérée et recrutée. Elle soigne maintenant les Élus Vent hors-Calendrier, spécialité : blessures d'extraction et de fuite.",
         combat="Courants cicatrisants qui enveloppent les alliés blessés. Barrières de vent qui dévient les attaques physiques. Si nécessaire, tourbillon défensif qui repousse les assaillants."),

    # 212 Tempestine — Capteur — Empire
    dict(id=212, nom="Tempestine", element="vent", classe="Capteur", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride élancée en tenue de la caste sacerdotale haute d'Heliora, voile de soie qui ondule à contre-sens du vent ambiant — signe d'un champ de détection actif.",
         perso="Convaincue que les Élus Vent non-enregistrés sont une menace structurelle — l'Élu Flying assassiné qui avait causé le Silence des Vents à Thalassyr en est la preuve. Elle prévient.",
         lore="Tempestine traque les Élus Vent qui ont quitté le registre du Calendrier depuis la Chute des Nuages. Elle opère à la fois à Heliora et parfois dans les couloirs commerciaux de Néris, car les flux de vent et les flux d'information se recoupent. Son réseau couvre les deux régions.",
         combat="Détection par lecture des courants d'air perturbés par les signatures élémentaires. Filets de vent paralysants. Extraction rapide par capsule aérienne."),

    # 213 Vortex Massif — Juggernaut — Convergence
    dict(id=213, nom="Vortex Massif", element="vent", classe="Juggernaut", espece="Aéride",
         region="Asterciel", faction="Convergence",
         phys="Aéride colossal dont le corps génère un vortex permanent d'un mètre de rayon — les objets légers orbitent autour de lui. Cicatrices de Drain en spirale sur le torse.",
         perso="Pense que son pouvoir de vent concentré est une ressource collective — un moulin de guerre qui doit tourner pour tous, pas pour lui seul.",
         lore="Vortex Massif est le Juggernaut de la Convergence à Asterciel. Son énergie de vortex partiellement extraite alimente des systèmes de ventilation dans les mines de Kar-Dum. La caste sacerdotale d'Heliora l'a banni des quartiers supérieurs — ce qu'il ressent comme une validation.",
         combat="Vortex de corps qui absorbe et redistribue l'énergie des coups reçus. Charge frontale qui emporte tout dans son souffle. Résistance aux attaques de vent adverse."),

    # 214 Rafale — Plongeur — Dissidentes
    dict(id=214, nom="Rafale", element="vent", classe="Plongeur", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride fine et agile, équipement minimal, se déplace par bonds de vent. Marques de turbulence sur les bras — traces d'infiltrations dans les zones de surveillance.",
         perso="Rapide dans l'action et la réflexion. Croit que la vitesse est une forme de justice — être plus rapide que le Calendrier.",
         lore="Rafale extrait des Élus Vent de Heliora avant les agents impériaux. Depuis la Chute des Nuages, la caste sacerdotale et l'Empire ont accéléré les enregistrements préventifs — Rafale contre-accélère. Elle connaît chaque courant d'air d'Heliora comme ses propres veines.",
         combat="Vitesse maximale par propulsion de vent. Extraction sous couverture de turbulence. Combat de précision aérienne — frappe et disparaît dans les courants."),

    # 215 Tornade — Mage-Burst — Indépendant
    dict(id=215, nom="Tornade", element="vent", classe="Mage-Burst", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride dont la présence crée des bourrasques spontanées à plusieurs mètres. Ses yeux sont le gris-vert des nuages d'avant la tempête.",
         perso="Fasciné par les systèmes climatiques comme phénomènes complexes. Les humains lui semblent petits face aux forces qu'il comprend.",
         lore="Tornade a reproduit en puissance réduite les conditions qui avaient causé la Chute des Nuages d'Heliora. Il comprend le désastre comme un événement naturellement prévisible que personne n'a voulu voir. L'Empire ne peut pas l'enregistrer : sa signature change selon les conditions météorologiques.",
         combat="Tornade dévastatrice en zone large. Imprévisible dans sa direction — épouse les systèmes climatiques réels. Puissance brute qui n'a pas de plafond connu."),

    # 216 Cyclonyx — Battlemage — Empire
    dict(id=216, nom="Cyclonyx", element="vent", classe="Battlemage", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride grand en armure de la caste militaire haute d'Heliora, sceau du Voile gravé dans l'épaule d'une armure qui intègre les courants de vent dans sa protection.",
         perso="Militariste convaincu. Pense que le vent sans discipline crée des catastrophes — la Chute des Nuages en est la preuve. L'ordre est protecteur.",
         lore="Cyclonyx applique la loi du Calendrier à Heliora et aux routes aériennes d'Asterciel. Il a arrêté plusieurs Élus Vent depuis la Chute des Nuages. Il collabore avec Tempestine pour couvrir les routes entre Heliora et Néris.",
         combat="Mêlée aérienne, armure activée par les courants de vent. Bourrasques de combat qui créent l'instabilité chez l'adversaire. Utilise l'architecture de Heliora — ses couloirs de vent — comme extension de son champ."),

    # 217 Ouragan — Artillerie — Dissidentes
    dict(id=217, nom="Ouragan", element="vent", classe="Artillerie", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride massif, canon à vent improvisé sur l'épaule, permanentement entouré d'une mini-tornade qui soulève tout ce qui l'approche.",
         perso="Bruyant et enthousiaste. Pense que les structures de surveillance peuvent être littéralement soufflées si on y met assez de vent.",
         lore="Ouragan cible les tours de surveillance de la caste sacerdotale d'Heliora — les mêmes structures qui servent à lire les destins et à alimenter le Calendrier. Chaque tour détruite prive l'Empire d'une antenne de prédiction. Il en a abattu sept depuis la Chute des Nuages.",
         combat="Canon à vent à longue portée — ses rafales traversent les fortifications légères. Tempête de débris dans une zone. Destruction d'infrastructures par pression d'air concentrée."),

    # 218 Zéphyr — Tireur — Indépendant
    dict(id=218, nom="Zéphyr", element="vent", classe="Tireur", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride fine aux cheveux soulevés en permanence, arbalète chargée de flèches guidées par les courants. Se positionne toujours en hauteur, jamais là où on l'attend.",
         perso="Mercenaire discret qui travaille pour la précision, pas pour l'idéologie. Ses tarifs sont proportionnels à l'altitude de la cible — ironie délibérée dans Heliora.",
         lore="Zéphyr loue ses services dans Asterciel depuis la Chute des Nuages. Ses clients incluent la caste sacerdotale, des factions commerciales de Néris, et occasionnellement les Dissidentes. Elle n'a jamais pris deux contrats contre le même camp consécutivement.",
         combat="Tirs guidés par les courants d'air — ses flèches font des courbes impossibles. Repositionnement aérien entre chaque tir. Précision à très longue portée en altitude."),

    # 219 Vent-Fantôme — Assassin — Dissidentes
    dict(id=219, nom="Vent-Fantôme", element="vent", classe="Assassin", espece="Aéride",
         region="Asterciel", faction="Dissidentes",
         phys="Aéride presque invisible en mouvement — son corps se fond dans les courants d'air. Laisse une marque de souffle froid sur les surfaces après son passage.",
         perso="Silencieux et précis. Il perçoit les agents du Calendrier comme des parasites dans les courants d'air naturels d'Asterciel.",
         lore="Vent-Fantôme élimine les agents qui servent à la fois la caste sacerdotale et l'Empire à Heliora. Depuis la Chute des Nuages, ces agents sont présentés comme des 'gardiens de la stabilité aérienne'. Vent-Fantôme sait qu'ils stabilisent surtout le flux d'information vers le Calendrier.",
         combat="Invisibilité dans les courants d'air. Frappe mortelle de vent concentré — hémorragie interne par pression. Sans bruit, sans trace physique."),

    # 220 Tourbillon — Escrimeur — Empire
    dict(id=220, nom="Tourbillon", element="vent", classe="Escrimeur", espece="Aéride",
         region="Asterciel", faction="Empire",
         phys="Aéride élégant, lame forgée à partir d'un cristal de vortex d'altitude, mouvements de duel qui épousent les courants naturels d'Heliora.",
         perso="Duelliste de la légitimité impériale à Heliora. Pense que la force bien exercée est une grâce, pas une violence.",
         lore="Tourbillon règle les conflits de juridiction entre la caste sacerdotale d'Heliora et les représentants impériaux par duel codifié — une forme de résolution politique que les deux parties respectent. Il est l'interface humaine entre deux systèmes de légitimité qui se superposent.",
         combat="Escrime de vent, sa lame amplifie et redirige les courants adverses. Vitesse extraordinaire par propulsion de vent. Sa garde est quasi-impénétrable dans un environnement aérien."),

    # 221 Typhon — Vanguard — Convergence
    dict(id=221, nom="Typhon", element="vent", classe="Vanguard", espece="Aéride",
         region="Asterciel", faction="Convergence",
         phys="Aéride aux yeux brûlés d'un Drain de vortex, armure de la Convergence adaptée aux conditions aériennes extrêmes. Sa présence crée des mini-tempêtes.",
         perso="Argumentateur en colère. Sa thèse : l'aristocratie verticale d'Heliora est l'accumulation d'altitude transformée en accumulation de pouvoir — exactement ce que la Convergence combat.",
         lore="Typhon recrute dans les quartiers bas d'Heliora — ceux qui ne se sont pas reconstruits après la Chute des Nuages. Son discours sur la redistribution de l'énergie des Élus trouve audience chez ceux qui attendent encore l'aide impériale. La caste sacerdotale le surveille comme menace.",
         combat="Avant-garde de vortex — sa présence frontale génère une turbulence qui désorganise les formations adverses. Absorbe l'énergie de vent adverse et la redistribue à ses alliés."),

    # 222 Rempart Aérien — Gardien — Indépendant
    dict(id=222, nom="Rempart Aérien", element="vent", classe="Gardien", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride massif qui génère un mur de vent stable à sa périphérie. Sa présence calme les turbulences locales — effet paradoxal pour quelqu'un de cette taille.",
         perso="Protecteur sans mandat. Il a décidé de ce qu'il défendait et ne l'explique pas.",
         lore="Rempart Aérien garde les routes d'accès aux quartiers de reconstruction après la Chute des Nuages. Il n'appartient à aucune faction et en a refusé trois. Les habitants des quartiers bas le respectent. L'Empire le tolère car il maintient un ordre local que les agents impériaux ne peuvent pas assurer seuls.",
         combat="Mur de vent stable qui bloque tout projectile et toute charge. Contre-attaque de rafale proportionnelle. Sa résistance est quasi-totale dans son zone d'ancrage."),

    # 223 L'Inconstant — Spécialiste — Indépendant
    dict(id=223, nom="L'Inconstant", element="vent", classe="Spécialiste", espece="Aéride",
         region="Asterciel", faction="Indépendant",
         phys="Aéride dont la forme change selon les vents locaux — parfois dense et solide, parfois presque éthéré. Ses traits varient selon les conditions météorologiques.",
         perso="Entité climatique autant qu'être vivant. Pense en systèmes, pas en individus. Imprévisible par nature.",
         lore="L'Inconstant est né dans les turbulences de la Chute des Nuages — une conscience émergente des vents déstabilisés d'Heliora qui n'a jamais pris forme stable depuis. Il comprend tous les courants d'Asterciel comme un seul système respiratoire. L'Empire ne peut l'enregistrer : sa signature change à chaque souffle.",
         combat="Manipulation de tous les courants de vent dans une région. Tempêtes localisées ou calmes stricts selon sa volonté. Sa puissance dépend des conditions météorologiques réelles — imprévisible par définition."),
]

# Écriture
total = 0
for folder, c in zip(elec_folders, elec_chars):
    path = f"{BASE}/electrique/{folder}/index.ts"
    write(path, char_file(**c))
    total += 1
print(f"Électrique: {total} personnages réécrits")

total2 = 0
for folder, c in zip(vent_folders, vent_chars):
    path = f"{BASE}/vent/{folder}/index.ts"
    write(path, char_file(**c))
    total2 += 1
print(f"Vent: {total2} personnages réécrits")
print(f"Total: {total + total2} personnages")
