"""Écrit les personnages Eau (031-043) et Glace (061-073) avec ancrage LORE_CANON."""
import os, textwrap

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

# ─────────────────────────────────────────────
# EAU (031–043) — Néréides · Thalassyr · Néris
# ─────────────────────────────────────────────
eau_folders = [
    "031-lyss","032-tyde","033-drunas","034-sylne","035-maris",
    "036-coraen","037-torryn","038-nalys","039-reef","040-aquen",
    "041-veran","042-bassal","043-la-maree"
]

eau_chars = [
    # 031 Lyss — Soutien — Dissidentes
    dict(id=31, nom="Lyss", element="eau", classe="Soutien", espece="Néréide",
         region="Thalassyr", faction="Dissidentes",
         phys="Petite Néréide aux écailles iridescentes bleu-vert, mains qui s'illuminent d'un halo aqueux quand elle canalise ses soins. Yeux profonds couleur fond marin, ouïes à peine visibles sous les oreilles.",
         perso="Douce en apparence, acier en dessous. Elle ne supporte pas que l'Empire décide qui mérite de guérir selon le registre du Calendrier. Sa gentillesse est réelle ; son refus de l'ordre féerique l'est tout autant.",
         lore="Lyss soignait dans les quartiers portuaires de Néris jusqu'au Silence des Vents — l'événement où l'assassinat d'un Élu Flying coupa les flux d'information qui organisaient la ville. L'Empire en a profité pour cataloguer tous les soigneurs. Lyss a refusé l'enregistrement trois fois. La quatrième convocation n'est jamais arrivée — interceptée par les Dissidentes du Voile, qui l'avaient déjà recrutée. Elle opère maintenant dans les abysses de Thalassyr, loin du Voile d'Équité.",
         combat="Soins d'urgence par canalisation de courants aquatiques. Barrières d'eau sous pression pour bloquer les attaques. Si ses alliés sont menacés, elle peut noyer localement un espace de combat — noyade sèche par saturation de l'air ambiant."),

    # 032 Tyde — Capteur — Empire
    dict(id=32, nom="Tyde", element="eau", classe="Capteur", espece="Néréide",
         region="Thalassyr", faction="Empire",
         phys="Néréide élancée en tenue de soie maritime impériale, perle-traqueur vissée à l'oreille droite qui vibre à proximité des signatures élémentaires. Regard froid comme les grands fonds.",
         perso="Sincèrement convaincue que le Voile d'Équité protège les Élus d'une exploitation pire. Elle traite ses cibles avec courtoisie avant de les livrer à la Citadelle. Ce n'est pas du cynisme — c'est de la foi.",
         lore="Tyde utilise la mémoire des courants de Thalassyr — les chants-courants néréides et les perles-mémoire échangées entre familles — pour retracer les Élus nés hors-Calendrier. Depuis le Silence des Vents, elle sait que les flux d'information ont été manipulés. Sa conclusion : sans l'Empire pour maintenir l'ordre, la manipulation serait pire.",
         combat="Filets d'eau qui paralysent les cibles sans les blesser. Sonar de localisation élémentaire sur un rayon de cent mètres. Extraction rapide par capsule liquide pressurisée."),

    # 033 Drunas — Juggernaut — Convergence
    dict(id=33, nom="Drunas", element="eau", classe="Juggernaut", espece="Néréide",
         region="Thalassyr", faction="Convergence",
         phys="Néréide colossale, peau marquée de cicatrices bleutées de Drain partiel, yeux qui ont brûlé de l'intérieur et gardé une lueur ambrée. Ses mains laissent une trace de sel sur tout ce qu'il touche.",
         perso="Convaincu que sa force n'est pas à lui — que l'Élu est une dette du monde envers lui-même, et qu'un Juggernaut qui garde sa puissance est un voleur. Serein dans cette conviction.",
         lore="Drunas a participé au premier Drain local dans les cavernes profondes de Thalassyr — une version régionale du rituel fondateur du Premier Drain d'Ash'Rael. Il a survécu en cédant la moitié de sa signature élémentaire. Ce qu'il a perdu coule maintenant dans l'eau de Néris, dit-il : la Confédération marchande boit sans le savoir le sacrifice de ceux qui ont compris.",
         combat="Masse corporelle brute, résistance aux drains adverses par accoutumance. Charge qui libère l'énergie accumulée en vague déferlante. Ses défenses absorbent les dégâts élémentaires pour les redistribuer."),

    # 034 Sylne — Plongeur — Dissidentes
    dict(id=34, nom="Sylne", element="eau", classe="Plongeur", espece="Néréide",
         region="Thalassyr", faction="Dissidentes",
         phys="Néréide fine, peau grise des grandes profondeurs, cicatrice en spirale à l'épaule gauche — marque d'un filet féerique qui a failli la capturer. Aucun équipement superflu.",
         perso="Silencieuse, efficace. Elle n'explique jamais ses missions, ne cherche pas de validation, n'attend pas de gratitude. Chaque Élu extrait est une victoire contre le Calendrier.",
         lore="Sylne plonge dans les zones d'ombre de Thalassyr — passages sous-marins que le service de renseignement de la Citadelle ne cartographie pas — pour extraire des Élus que le Calendrier a localisés avant leur capture. Depuis le Silence des Vents et la reconstruction artificielle des courants par l'Élu Électrique, elle navigue dans une infrastructure partiellement surveillée. Elle a sauvé quatorze Élus cette année seule.",
         combat="Vitesse d'infiltration sous-marine maximale, dissimulation dans les courants troubles. Combat de précision en eaux obscures. Peut entraîner une cible dans les profondeurs pour créer un avantage fatal."),

    # 035 Maris — Mage-Burst — Indépendant
    dict(id=35, nom="Maris", element="eau", classe="Mage-Burst", espece="Néréide",
         region="Thalassyr", faction="Indépendant",
         phys="Néréide aux cheveux d'algues dorées, irisation nacrée sur la peau lors de ses décharges. Ses yeux changent de couleur selon la puissance qu'elle canalise — bleu calme, vert instable, blanc aveuglant.",
         perso="Fascinée par les structures invisibles du monde : courants magiques, réseaux de surveillance, architectures du Calendrier. Déteste les contraintes idéologiques qui l'empêchent de chercher.",
         lore="Maris a cartographié les courants magiques reconstruits après le Silence des Vents. Elle a découvert que l'Élu Électrique qui a reconstruit les flux a inséré des nœuds de surveillance dans la trame aquatique de Néris. La Confédération marchande neutre ne sait pas que son neutralité est lue en temps réel par la Citadelle. Maris n'a informé personne. Elle archive d'abord.",
         combat="Vagues d'énergie aqueuse à grande échelle. Manipulation des courants magiques sous-jacents. Imprévisible — ses décharges s'adaptent à la structure du terrain, exploitant chaque flux existant."),

    # 036 Coraen — Battlemage — Empire
    dict(id=36, nom="Coraen", element="eau", classe="Battlemage", espece="Néréide",
         region="Thalassyr", faction="Empire",
         phys="Néréide grand et formel, armure de corail renforcé aux articulations d'argent, sceau du Voile d'Équité incrusté dans le plastron. Maintien impeccable en toutes circonstances.",
         perso="Bureaucratiquement brutal. Voit la force comme l'extension naturelle du droit et répugne à l'illégalité élémentaire autant qu'à l'illégalité civile. Sa politesse est réelle, sa dureté aussi.",
         lore="Coraen applique le droit maritime féerique dans les zones commerciales de Néris — la Confédération marchande neutre qui, depuis le Silence des Vents, est sous surveillance constante. Il a arrêté 47 Élus non-enregistrés l'année précédente. La Confédération proteste formellement ; l'Empire répond par des décrets. Coraen patrouille les routes sensibles.",
         combat="Combat de mêlée dans l'eau, boucliers liquides en armure active. Utilise les articles du droit féerique pour justifier chaque acte de force — parfois littéralement en les récitant pendant le combat."),

    # 037 Torryn — Artillerie — Dissidentes
    dict(id=37, nom="Torryn", element="eau", classe="Artillerie", espece="Néréide",
         region="Thalassyr", faction="Dissidentes",
         phys="Néréide trapue aux bras musculeux habitués à manipuler des canons sous-marins improvisés. Cicatrice de greffe élémentaire à l'épaule droite. Toujours légèrement mouillé.",
         perso="Bruyant, direct, impatient avec les subtilités. Croit que la politique la plus honnête est un nœud de contrôle détruit : concret, vérifiable, irréversible.",
         lore="Après le Silence des Vents, un Élu Électrique a reconstruit les courants de Néris en y intégrant des nœuds de surveillance pour la Citadelle. Torryn a localisé dix-neuf de ces nœuds. Il en a neutralisé cinq. Chaque destruction prive l'Empire d'un canal de lecture en temps réel sur la Confédération marchande. Il en reste quatorze.",
         combat="Projectiles aquatiques à haute pression — l'équivalent de grenades sous-marines. Bombes de courant qui perturbent la navigation élémentaire. Destruction d'infrastructures aquatiques à distance."),

    # 038 Nalys — Tireur — Indépendant
    dict(id=38, nom="Nalys", element="eau", classe="Tireur", espece="Néréide",
         region="Thalassyr", faction="Indépendant",
         phys="Néréide aux yeux d'argent, équipement de précision récupéré sur plusieurs camps différents — jamais totalement dans une esthétique. Pragmatiquement assemblée.",
         perso="Mercenaire sans illusions sur sa nature. Ne ment jamais sur ce qu'elle fait pour de l'argent. Ne prend pas non plus de contrats qui heurteraient certaines lignes. Lesquelles ? Elle ne le dit pas.",
         lore="Nalys a travaillé pour l'Empire, la Convergence, les Dissidentes — jamais deux fois de suite pour le même camp, jamais deux contrats qui se recoupent. Depuis le Silence des Vents, l'information a une valeur marchande à Néris. Nalys archive discrètement ce qu'elle observe entre deux missions.",
         combat="Précision à longue portée avec des projectiles aquatiques pénétrants. Repositionnement rapide entre chaque tir. Peut cibler les signatures élémentaires à travers les obstacles aquatiques."),

    # 039 Reef — Assassin — Dissidentes
    dict(id=39, nom="Reef", element="eau", classe="Assassin", espece="Néréide",
         region="Thalassyr", faction="Dissidentes",
         phys="Néréide aux écailles noires des grandes profondeurs, quasi-invisible dans les eaux sombres. Laisse toujours une petite coquille-scarabée nacrée sur ses cibles après l'élimination.",
         perso="Froid et méthodique. Il voit les agents du Voile non comme des ennemis personnels mais comme des infrastructures humaines de contrôle — et les traite en conséquence.",
         lore="Reef travaille depuis le Silence des Vents sur une liste : les nœuds humains du réseau de surveillance féerique à Néris. Pas les soldats — les agents dont la mort crée une lacune irréparable dans la capacité de traçage. Six éliminés depuis l'événement. La Citadelle a envoyé des renforts. Reef attend.",
         combat="Invisibilité totale dans les eaux sombres. Courant électrisé localisé qui paralyse sans trace. Frappe mortelle sous-marine depuis l'angle mort de la cible."),

    # 040 Aquen — Escrimeur — Empire
    dict(id=40, nom="Aquen", element="eau", classe="Escrimeur", espece="Néréide",
         region="Thalassyr", faction="Empire",
         phys="Néréide élégante, lame de cristal aqueux forgée dans les ateliers impériaux de Néris, mouvements qui ressemblent à une danse de fond marin. Économe de chaque geste.",
         perso="Défend l'honneur du code de duel féerique avec une conviction sincère. Pense que la force doit être belle et légitime pour être juste. Les combats sales lui répugnent moralement.",
         lore="Aquen est l'escrimeure officielle du droit féerique maritime à Néris — elle règle les contentieux de propriété sur les Élus par duel codifié, reconnu par la Confédération comme juridiction parallèle. Depuis le Silence des Vents, les contentieux ont triplé. Elle travaille sans interruption.",
         combat="Escrime aquatique de haute précision — sa lame de cristal peut trancher les courants élémentaires adverses, neutralisant les pouvoirs à mi-trajectoire. Vitesse extrême, économie absolue de mouvement."),

    # 041 Veran — Vanguard — Convergence
    dict(id=41, nom="Veran", element="eau", classe="Vanguard", espece="Néréide",
         region="Thalassyr", faction="Convergence",
         phys="Néréide aux yeux dorés brûlés par un Drain partiel — la couleur originelle a fondu. Mouvements mécaniquement précis, comme si chaque geste avait été calibré par doctrine.",
         perso="Prêcheur convaincu, cite le Premier Drain d'Ash'Rael comme révélation fondatrice. Ne cherche plus à convaincre — il démontre. Sa certitude est calme, sans fanatisme apparent.",
         lore="Veran est l'avant-garde doctrinal de la Convergence dans la Confédération marchande de Néris. Il argue depuis le Silence des Vents que la privatisation de l'information commerciale — ce que l'Élu Électrique fait techniquement pour l'Empire — est exactement la forme de propriété individuelle que le Premier Drain visait à détruire. Certains marchands l'écoutent.",
         combat="Avant-garde de choc, absorbe une partie de l'énergie adverse pour la redistribuer à ses alliés en doctrine vivante. Sa présence en première ligne inspire ses partisans et démoralise les ennemis qui savent ce qu'il fait de son propre corps."),

    # 042 Bassal — Gardien — Indépendant
    dict(id=42, nom="Bassal", element="eau", classe="Gardien", espece="Néréide",
         region="Thalassyr", faction="Indépendant",
         phys="Néréide massive des abysses, corps adapté à la pression extrême. Peau de pierre-corail, regard d'une patience géologique. Quasi-impassible en toutes circonstances.",
         perso="Philosophe de la profondeur. Parle peu — les abysses enseignent l'économie de mots. Agit quand nécessaire, autrement il observe.",
         lore="Depuis le Silence des Vents, un réseau de cavernes abyssales de Thalassyr sert de refuge aux Élus hors-Voile. Bassal en garde l'entrée. Il n'appartient à aucune faction et a refusé les trois. Il protège un espace où ni l'Empire ni la Convergence ne peuvent descendre — la pression les écrase avant.",
         combat="Résistance absolue aux dommages par adaptation abyssale. Pression extrême concentrée en onde de choc défensive. Mur de chair et d'eau dense qui ne recule pas."),

    # 043 La Marée — Spécialiste — Indépendant
    dict(id=43, nom="La Marée", element="eau", classe="Spécialiste", espece="Néréide",
         region="Thalassyr", faction="Indépendant",
         phys="Néréide dont la forme physique oscille avec les cycles lunaires — certains jours presque entièrement humanoïde, d'autres à peine distincte de l'eau environnante. Aucune morphologie fixe.",
         perso="Entité plus qu'individu. Pense à l'échelle des cycles de marée, pas des saisons politiques. Les factions lui paraissent de courte durée.",
         lore="La Marée est née lors de la reconstruction des courants après le Silence des Vents — une conséquence possible de l'intervention de l'Élu Électrique sur la trame aquatique de Néris. Elle comprend la structure artificielle des courants actuels comme un mécanisme, pas comme un fait naturel : elle peut le lire, le modifier, le renverser. L'Empire ne sait pas l'enregistrer dans le Calendrier.",
         combat="Manipulation de tous les courants aquatiques dans une zone large. Transformation partielle en eau — rend les attaques physiques inopérantes. Ses cycles de puissance épousent les marées réelles : imprévisible pour qui ne connaît pas les tables lunaires."),
]

# ─────────────────────────────────────────────────────
# GLACE (061–073) — Givrins · Crysalme · Iskral
# ─────────────────────────────────────────────────────
glace_folders = [
    "061-crystyne","062-verglass","063-glacurhn","064-frosta","065-cryal",
    "066-kryss","067-hiver-blanc","068-shiryn","069-nevex","070-glacen",
    "071-boryn","072-tundra","073-la-tempete-blanche"
]

glace_chars = [
    # 061 Crystyne — Soutien — Dissidentes
    dict(id=61, nom="Crystyne", element="glace", classe="Soutien", espece="Givrine",
         region="Crysalme", faction="Dissidentes",
         phys="Givrine petite et fine, mains qui luisent d'un blanc bleuté quand elle canalise le gel cicatrisant. Yeux argentés, peau légèrement translucide aux poignets.",
         perso="Pragmatique et résolue. Elle a soigné sans discrimination jusqu'au jour où l'Empire a commencé à enregistrer ses patients pour le Calendrier. Elle a tiré sa conclusion sans état d'âme.",
         lore="Crystyne soignait les blessés du champ du Gel Éternel à l'extérieur d'Iskral — ce champ de bataille figé par un Élu Ice ancestral, argument politique permanent de la monarchie rituelle. L'Empire a envoyé des agents recenser ses patients. Elle a rejoint les Dissidentes du Voile le lendemain. Elle soigne maintenant les Élus hors-Calendrier dans les marges de Crysalme.",
         combat="Gel cicatrisant qui régénère sans laisser de trace de signature élémentaire — invisible aux traqueurs impériaux. Barricades de glace protectrices. Ralentissement des agresseurs par gel des articulations."),

    # 062 Verglass — Capteur — Empire
    dict(id=62, nom="Verglass", element="glace", classe="Capteur", espece="Givrin",
         region="Crysalme", faction="Empire",
         phys="Givrin grand et mince en armure de glace impériale, yeux de cristal parfaitement transparents — on ne sait jamais exactement ce qu'il regarde. Présence froide et précise.",
         perso="Loyal, froid au sens propre et figuré. Pense que la stase d'Iskral est naturellement compatible avec l'ordre féerique : les deux conservent.",
         lore="Verglass exploite les reflets du champ du Gel Éternel comme un miroir de détection — les surfaces gelées du champ reflètent les signatures élémentaires à distance, lui permettant d'identifier des Élus non-enregistrés sans les approcher. Il en a identifié huit cette saison, tous livrés à la Citadelle. La monarchie rituelle d'Iskral proteste discrètement.",
         combat="Miroirs de glace qui révèlent les signatures cachées et dévient les attaques. Capture par congélation progressive — lente mais totale. Localisation élémentaire à distance."),

    # 063 Glacurhn — Juggernaut — Convergence
    dict(id=63, nom="Glacurhn", element="glace", classe="Juggernaut", espece="Givrin",
         region="Crysalme", faction="Convergence",
         phys="Givrin massif, corps partiellement cristallisé par des Drains successifs — ses jointures sont devenues de l'ambre gelé. Yeux opaques, chaleur interne quasi nulle.",
         perso="Endurant et silencieux. Voit son propre gel progressif comme un don naturel au collectif — ce qu'il perd, d'autres le gagnent.",
         lore="Glacurhn s'est soumis à trois Drains partiels pour la Convergence. Sa signature glaciale est partiellement extraite et stockée dans les infrastructures thermiques de Kar-Dum — une ville chthonienne qui utilise le froid des Givrins pour ses systèmes de refroidissement industriel. La monarchie d'Iskral le considère comme un traitre à la stase.",
         combat="Résistance aux dégâts par cristallisation corporelle — les coups physiques s'y brisent. Charge dévastatrice qui libère du froid concentré. Absorbe la chaleur adverse et l'annule."),

    # 064 Frosta — Plongeur — Dissidentes
    dict(id=64, nom="Frosta", element="glace", classe="Plongeur", espece="Givrine",
         region="Crysalme", faction="Dissidentes",
         phys="Givrine agile aux marques de gel sur les tempes — signe de contrôle du froid interne extrême. Équipement de survie minimal, conçu pour la vitesse dans les milieux glacés.",
         perso="Rapide, pragmatique, jamais de sentiment pour les missions d'extraction. La sentimentalité ralentit, et dans la glace, ralentir tue.",
         lore="Frosta infiltre les archives d'Iskral pour en extraire des documents que les Fées cherchent à effacer : les origines de l'alliance fée-givrin, les compromis passés entre la monarchie rituelle et la Citadelle, et surtout — ce que le Gel Éternel a réellement figé et pourquoi l'Empire y tient si peu de monde depuis dix ans.",
         combat="Vitesse maximale sur glace, gel instantané localisé pour bloquer les poursuivants. Combat d'infiltration en milieu froid — exploite les surfaces gelées comme voies d'accès."),

    # 065 Cryal — Mage-Burst — Indépendant
    dict(id=65, nom="Cryal", element="glace", classe="Mage-Burst", espece="Givrin",
         region="Crysalme", faction="Indépendant",
         phys="Givrin dont les mains sont perpétuellement givrées, aura de froid intense qui fait craquer le verre à proximité. Des cristaux se forment spontanément dans son souffle.",
         perso="Cherche la limite de sa propre puissance sans agenda politique. Le monde l'intéresse comme terrain d'expérience. Les doctrines l'ennuient.",
         lore="Cryal a dépassé tous les Élus Glace de sa génération à Iskral. La monarchie rituelle voulait le lier au protocole de stase — qu'il devienne gardien du Gel Éternel. Il a refusé et est parti. Il revient parfois à Crysalme, teste sa puissance contre le champ du Gel Éternel lui-même, repart. L'Empire ne peut pas non plus l'enregistrer : sa signature est trop instable pour le Calendrier.",
         combat="Explosion de gel absolu en zone large. Cristallisation totale de l'air ambiant. Avalanche contrôlée déclenchée à distance. Puissance brute sans sophistication tactique nécessaire."),

    # 066 Kryss — Battlemage — Empire
    dict(id=66, nom="Kryss", element="glace", classe="Battlemage", espece="Givrine",
         region="Crysalme", faction="Empire",
         phys="Givrine en armure de glace forgée impérialement, sceau du Voile d'Équité en cristal incrusté à l'épaule gauche. Mouvements disciplinés, posture toujours en garde.",
         perso="Disciplinée, intransigeante. Pense que le Calendrier préserve Iskral autant que la monarchie rituelle — peut-être davantage. Ne comprend pas la résistance d'une culture qui valorise la conservation.",
         lore="Kryss applique la loi du Calendrier à Iskral, terrain difficile : la monarchie rituelle maintient des archives non-autorisées contenant des informations que les Fées veulent effacer. Elle a confisqué plusieurs registres anciens et exige l'accès aux archives gelées. La monarchie a protesté formellement. La Citadelle a soutenu Kryss. La tension monte.",
         combat="Armure de glace active qui répond aux frappes en se renforçant. Épée de cristal pur qui tranche les protections élémentaires. Immobilisation progressive des cibles par gel des membres."),

    # 067 Hiver Blanc — Artillerie — Dissidentes
    dict(id=67, nom="Hiver Blanc", element="glace", classe="Artillerie", espece="Givrin",
         region="Crysalme", faction="Dissidentes",
         phys="Givrin massif, blanc comme neige fraîche, canon improvisé sur l'épaule droite qui projette des blizzards ciblés. Cicatrices thermiques sur le bras gauche d'un accident de surcharge.",
         perso="Bruyant, enthousiaste pour la destruction d'infrastructures de contrôle. Voit le cycle de destruction-reconstruction comme une victoire d'usure.",
         lore="Hiver Blanc a localisé les nœuds de surveillance féerique dans les montagnes de Crysalme — des tours de cristal déguisées en formation naturelle qui captent les signatures élémentaires de la région. Il en a détruit deux. Les Fées les ont reconstruits en six semaines. Il les a détruits à nouveau. Un troisième cycle est en cours. Il estime que l'Empire finira par manquer d'ingénieurs de reconstruction.",
         combat="Blizzards ciblés à longue portée. Avalanches provoquées sur des angles calculés. Disruption thermique qui désactive les équipements de surveillance féeriques."),

    # 068 Shiryn — Tireur — Indépendant
    dict(id=68, nom="Shiryn", element="glace", classe="Tireur", espece="Givrine",
         region="Crysalme", faction="Indépendant",
         phys="Givrine élancée aux reflets irisés bleus, arbalète chargée de cristaux de glace forgés sur place. Toujours positionnée à distance, rarement visible.",
         perso="Solitaire, précise. Les Élus Glace aux abords du Gel Éternel la comprennent sans mots — elle leur parle peu et n'en a pas besoin.",
         lore="Shiryn chasse les anomalies élémentaires nées du champ du Gel Éternel — des entités partiellement figées qui se réveillent parfois et menacent les routes d'Iskral. Elle ne prend pas de mission politique et refuse les trois factions. Elle protège les abords de Crysalme parce que c'est nécessaire, pas par loyauté.",
         combat="Tirs de cristaux de glace à précision extrême, même dans un blizzard. Création de pièges glacés à distance. Ralentissement ciblé sans mise hors de combat — elle choisit ses cibles avec chirurgie."),

    # 069 Nevex — Assassin — Dissidentes
    dict(id=69, nom="Nevex", element="glace", classe="Assassin", espece="Givrin",
         region="Crysalme", faction="Dissidentes",
         phys="Givrin à la peau translucide, quasi-invisible dans les milieux enneigés. Laisse toujours une fleur de gel cristallisée sur ses cibles après l'élimination.",
         perso="Idéaliste malgré lui. Il voit les agents de la Citadelle qui fouillent les archives d'Iskral comme une violation de la stase qu'il respecte — ce n'est pas de la politique, c'est du sacrilège.",
         lore="Nevex ne travaille pas pour les Dissidentes au sens doctrinal. Il travaille pour la monarchie rituelle d'Iskral, qui protège les archives. Les Dissidentes et la monarchie partagent le même ennemi : les agents féeriques qui confisquent la mémoire. Cette convergence d'intérêts suffit à Nevex.",
         combat="Invisibilité totale en milieu glacé. Frappe silencieuse depuis l'angle mort. Gel instantané localisé sur la cible — mort propre, sans signal élémentaire détectable."),

    # 070 Glacen — Escrimeur — Empire
    dict(id=70, nom="Glacen", element="glace", classe="Escrimeur", espece="Givrin",
         region="Crysalme", faction="Empire",
         phys="Givrin élégant, lame de glace impériale forgée à Heliora. Mouvements de duel ritualisé, économiques et mortels.",
         perso="Formaliste. Représente le Voile à Iskral dans ses aspects les plus civilisés — le duel comme résolution de conflit, la force comme argument de dernier recours.",
         lore="Glacen gère les duels de juridiction entre la monarchie rituelle d'Iskral et les représentants féeriques — conflits sur l'accès aux archives, la propriété des Élus non-enregistrés, les droits de surveillance. Il a gagné 31 duels consécutifs. L'Empire le tient précieux. La monarchie le surveille et l'admire à contrecœur.",
         combat="Escrime de glace cristalline à vitesse extrême. Parades et contreparades élaborées qui exploitent l'inertie adverse. Sa lame peut briser la concentration d'un Élu en un seul échange bien placé."),

    # 071 Boryn — Vanguard — Convergence
    dict(id=71, nom="Boryn", element="glace", classe="Vanguard", espece="Givrin",
         region="Crysalme", faction="Convergence",
         phys="Givrin aux yeux dorés-ambre brûlés par un premier Drain. Armure de la Convergence adaptée au froid extrême de Crysalme. Mâchoire serrée, conviction permanente.",
         perso="Évangéliste du sacrifice dans un milieu hostile. Son argument central : la monarchie rituelle d'Iskral conserve tout dans un gel stérile qui exclut la redistribution — une forme d'accumulation déguisée en tradition.",
         lore="Boryn tente de convertir les Givrins d'Iskral à la doctrine sacrificielle de la Convergence. Sa thèse : le Gel Éternel est la preuve que la puissance accumulée sans redistribution finit par figer le monde. Il a recruté trois Givrins cette saison. La monarchie l'a officiellement interdit d'Iskral. Il opère depuis les marges.",
         combat="Avant-garde de choc en milieu froid, utilise le froid environnant comme ressource doctrinale — son corps en absorbe et en redistribue aux alliés. Sa présence frontale désorganise les formations adverses."),

    # 072 Tundra — Gardien — Indépendant
    dict(id=72, nom="Tundra", element="glace", classe="Gardien", espece="Givrin",
         region="Crysalme", faction="Indépendant",
         phys="Givrin colossal, corps qui irradie un froid absolument stable. Regard vide et patient comme un glacier. Sa peau est devenue indiscernable de la pierre gelée.",
         perso="Entité de permanence. Garde le champ du Gel Éternel depuis si longtemps qu'il en est devenu presque une partie. Le temps politique des factions lui paraît anecdotique.",
         lore="Tundra garde le champ du Gel Éternel à l'extérieur d'Iskral. Personne ne lui a assigné ce rôle — il y est simplement depuis que le champ existe. Toutes les factions ont tenté de le recruter : l'Empire pour ses capacités, la Convergence pour son énergie, les Dissidentes pour le symbole. Il les observe et ne répond pas.",
         combat="Imperturbabilité totale face aux attaques. Le froid absolu de sa zone d'action ralentit tout agresseur. Sa résistance aux dommages élémentaires est totale — il a absorbé trop de froid pour que quoi que ce soit lui fasse froid."),

    # 073 La Tempête Blanche — Spécialiste — Indépendant
    dict(id=73, nom="La Tempête Blanche", element="glace", classe="Spécialiste", espece="Givrine",
         region="Crysalme", faction="Indépendant",
         phys="Givrine dont les cheveux sont un blizzard perpétuel en miniature. Son corps est partiellement éthéré par un froid extrême — elle laisse une traînée de givre là où elle passe.",
         perso="Phénomène météorologique autant qu'être vivant. Incompréhensible pour les factions. Les cycles du temps la concernent davantage que les doctrines des vivants.",
         lore="La Tempête Blanche s'est formée lors d'un hiver exceptionnel consécutif au Gel Éternel — certains à Iskral pensent qu'elle est une émanation vivante du champ lui-même, une conscience née de la collision entre la puissance de l'Élu ancestral et le temps. L'Empire ne peut pas l'enregistrer dans le Calendrier : sa signature ne correspond à aucun profil standardisé.",
         combat="Manipulation météorologique à grande échelle — blizzards, tempêtes de neige, vents de glace. État de tempête persistant dans sa zone d'action. Ses pouvoirs n'ont pas de plafond mesurable."),
]

# ─────────────────────────────────────────────
# Écriture des fichiers
# ─────────────────────────────────────────────
total = 0

for folder, c in zip(eau_folders, eau_chars):
    path = f"{BASE}/eau/{folder}/index.ts"
    write(path, char_file(**c))
    total += 1
print(f"Eau: {total} personnages réécrits")

total2 = 0
for folder, c in zip(glace_folders, glace_chars):
    path = f"{BASE}/glace/{folder}/index.ts"
    write(path, char_file(**c))
    total2 += 1
print(f"Glace: {total2} personnages réécrits")
print(f"Total: {total + total2} personnages")
