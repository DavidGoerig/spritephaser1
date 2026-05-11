"""Écrit les personnages Plante (121-133) et Fée (361-373) avec ancrage LORE_CANON."""
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

# ────────────────────────────────────────────────────────
# PLANTE (121–133) — Sylvans · Sylvera · Leth'Var
# Événement : La Faim des Racines
# Politique : Conservateurs de la Sève vs Gardiens de la Clairière
# ────────────────────────────────────────────────────────
plante_folders = [
    "121-sylvara","122-epine-noire","123-thornax","124-dryana","125-pollyn",
    "126-rootek","127-sporen","128-seve-vive","129-grimpant","130-lianen",
    "131-barriere-verte","132-foret-vivante","133-l-entrelace"
]

plante_chars = [
    # 121 Sylvara — Soutien — Dissidentes
    dict(id=121, nom="Sylvara", element="plante", classe="Soutien", espece="Sylvane",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvane aux cheveux entrelacés de racines fines, peau légèrement verte en été, yeux couleur sève dorée. Ses mains laissent pousser de petites pousses là où elle soigne.",
         perso="Guérisseuse de la forêt, refusant que ses soins soient réservés aux Élus enregistrés. Les Conservateurs de la Sève la voient comme une alliée ; l'Empire comme un problème.",
         lore="Sylvara soigne à Leth'Var depuis la Faim des Racines — l'événement où un réseau racinaire conscient créé par un Élu Plante extraordinaire a dévoré son substrat, détruisant des pans entiers de la mémoire ancienne de Sylvera. Elle travaille à restaurer ce qui peut l'être, en dehors du contrôle féerique. Les Dissidentes lui ont appris que certaines archives perdues dans la Faim pourraient révéler les origines des Fées — que la Citadelle trouve très commode que ces archives aient disparu.",
         combat="Régénération végétale sur les alliés, soins qui laissent une trace de végétation protectrice. Barricades de racines pour bloquer les assaillants. Réseau souterrain de communication entre ses alliés."),

    # 122 Épine-Noire — Capteur — Empire
    dict(id=122, nom="Épine-Noire", element="plante", classe="Capteur", espece="Sylvan",
         region="Sylvera", faction="Empire",
         phys="Sylvan au teint sombre, armé de ronces rétractables tressées dans ses avant-bras, yeux verts durs comme de l'écorce d'ébène.",
         perso="Traqueur efficace qui croit que la Faim des Racines prouve que les Élus Plante non-supervisés détruisent leur propre monde. Le Calendrier prévient cela.",
         lore="Épine-Noire traque les Élus Plante qui ont refusé l'enregistrement depuis la Faim des Racines. Il opère dans la tension politique de Leth'Var entre Conservateurs de la Sève et Gardiens de la Clairière — les deux factions locales se méfient de lui, mais l'Empire lui fournit une autorité qu'aucune des deux ne peut ignorer.",
         combat="Ronces de capture qui immobilisent sans blesser. Détection par lecture des réseaux racinaires locaux. Cage végétale pour contenir les Élus capturés."),

    # 123 Thornax — Juggernaut — Convergence
    dict(id=123, nom="Thornax", element="plante", classe="Juggernaut", espece="Sylvan",
         region="Sylvera", faction="Convergence",
         phys="Sylvan colossal, peau partiellement écorcée, cicatrices de Drain végétal en motifs d'écorce brûlée. Ses poings font pousser des épines à l'impact.",
         perso="Convaincu que la Faim des Racines a démontré que les Élus Plante ne doivent pas accumuler de puissance — le réseau racinaire dévorant est la métaphore exacte de ce que la Convergence combat.",
         lore="Thornax a participé à un Drain de signature végétale dans les zones de Sylvera les plus touchées par la Faim des Racines. Son énergie extraite alimente des systèmes biologiques à Ash'Rael. Les Conservateurs de la Sève le considèrent comme un sacrilège ; les Gardiens de la Clairière trouvent sa logique de destruction-redistribution familière.",
         combat="Résistance aux dégâts par écorce durcie. Charge qui fait jaillir des épines massives sur tout ce qu'il frappe. Absorbe l'énergie végétale adverse et la retourne."),

    # 124 Dryana — Plongeur — Dissidentes
    dict(id=124, nom="Dryana", element="plante", classe="Plongeur", espece="Sylvane",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvane fine, capable de se fondre dans la végétation dense de Sylvera jusqu'à l'invisibilité. Marques de lianes sur les chevilles — traces de missions d'extraction.",
         perso="Silencieuse et efficace. Chaque Élu extrait d'une capture impériale est un fragment du droit du monde à choisir ses propres réponses.",
         lore="Dryana extrait des Élus Plante que les agents du Calendrier ont localisés dans les zones de Leth'Var. Elle exploite les réseaux racinaires souterrains de Sylvera comme routes d'infiltration — depuis la Faim des Racines, certains de ces réseaux sont devenus des labyrinthes biologiques que personne ne cartographie complètement.",
         combat="Déplacement par les réseaux racinaires souterrains. Combat de précision végétal — lianes qui immobilisent, épines qui percent. Disparaît dans la forêt dense."),

    # 125 Pollyn — Mage-Burst — Indépendant
    dict(id=125, nom="Pollyn", element="plante", classe="Mage-Burst", espece="Sylvane",
         region="Sylvera", faction="Indépendant",
         phys="Sylvane dont la peau émet du pollen lumineux en permanence, yeux verts intenses, nuage de spores visibles à plusieurs mètres.",
         perso="Fascinée par les systèmes biologiques comme mécanismes complexes. Les factions lui semblent des sous-systèmes dans une écologie plus grande.",
         lore="Pollyn a reproduit en laboratoire sauvage certaines conditions de la Faim des Racines — elle comprend comment le réseau racinaire a pu développer une conscience et pourquoi il a dévoré son substrat. Elle cherche à éviter une deuxième Faim. Aucune faction ne peut la recruter car sa recherche les concerne toutes également.",
         combat="Explosion pollinique en zone large — spores hallucinogènes, toxiques ou paralysants selon la souche. Puissance brute biologique sans plafond mesuré."),

    # 126 Rootek — Battlemage — Empire
    dict(id=126, nom="Rootek", element="plante", classe="Battlemage", espece="Sylvan",
         region="Sylvera", faction="Empire",
         phys="Sylvan en armure d'écorce renforcée impériale, racines de combat intégrées dans les bras, sceau du Voile d'Équité en résine dorée sur le plastron.",
         perso="Croit que la Faim des Racines est la preuve que sans supervision, les Élus Plante détruisent Sylvera. L'Empire prévient la prochaine catastrophe.",
         lore="Rootek applique la loi du Calendrier à Leth'Var, naviguant la tension entre les deux factions locales. Il collabore avec les Conservateurs de la Sève quand leurs intérêts coïncident — les deux veulent contrôler les Élus Plante, pour des raisons différentes. Les Gardiens de la Clairière le détestent uniformément.",
         combat="Mêlée végétale, racines de combat qui prolongent sa portée. Bouclier d'écorce actif. Combo attaque-défense végétale qui exploite le terrain de Sylvera."),

    # 127 Sporen — Artillerie — Dissidentes
    dict(id=127, nom="Sporen", element="plante", classe="Artillerie", espece="Sylvan",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvan trapu, sacs de spores-bombes attachés à tout le corps, peau couverte de champignons bioluminescents. Odeur de sous-bois intense.",
         perso="Pragmatique. Pense que les infrastructures de surveillance impériale dans Sylvera peuvent être biologiquement neutralisées — les spores n'ont pas besoin d'autorisation.",
         lore="Depuis la Faim des Racines, les agents du Calendrier ont installé des capteurs de signature élémentaire déguisés en formations végétales dans Leth'Var. Sporen les neutralise en les recouvrant de spores qui brouillent les lectures. Il en a désactivé onze depuis un an.",
         combat="Bombardement de spores à longue portée — chaque sac fait une zone d'effet différente. Neutralisation d'équipements par contamination biologique. Nuage de spores persistant qui désoriente et brouille."),

    # 128 Sève-Vive — Tireur — Indépendant
    dict(id=128, nom="Sève-Vive", element="plante", classe="Tireur", espece="Sylvane",
         region="Sylvera", faction="Indépendant",
         phys="Sylvane fine aux yeux couleur ambre de résine, lance des épines de précision par les pores de sa peau. Toujours en mouvement dans la canopée.",
         perso="Mercenaire forestière, prend les contrats qui servent Sylvera sans se soucier de la faction. Ses tarifs sont proportionnels à la dangerosité du terrain.",
         lore="Sève-Vive loge ses services dans Leth'Var depuis la Faim des Racines, qui a créé une demande pour des agents capables de naviguer les zones racinaires chaotiques. Elle a travaillé pour toutes les factions sans distinction de cause.",
         combat="Tirs d'épines de précision à longue portée. Repositionnement rapide dans la canopée. Peut cibler des signatures élémentaires à travers la végétation dense."),

    # 129 Grimpant — Assassin — Dissidentes
    dict(id=129, nom="Grimpant", element="plante", classe="Assassin", espece="Sylvan",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvan mince aux doigts capables d'adhérer à toute surface végétale, quasi-invisible dans la canopée de Leth'Var. Laisse une marque de liane nouée sur ses cibles.",
         perso="Froid et précis. Il voit les agents du Calendrier dans Sylvera comme des invasions d'espèces étrangères dans un écosystème.",
         lore="Grimpant élimine les agents qui maintiennent la surveillance féerique dans les zones de Leth'Var. Depuis la Faim des Racines, ces agents sont nombreux — la Citadelle surveille Sylvera de près car c'est là que les archives sur les origines féeriques ont été perdues. La Citadelle craint que des fragments survivent.",
         combat="Escalade sur toute surface, invisibilité dans la végétation. Étranglement par liane de précision. Frappe depuis la canopée, retour dans les arbres instantané."),

    # 130 Lianen — Escrimeur — Empire
    dict(id=130, nom="Lianen", element="plante", classe="Escrimeur", espece="Sylvane",
         region="Sylvera", faction="Empire",
         phys="Sylvane élégante, épée tressée de lianes vivantes qui s'étendent en combat. Mouvements fluides comme la croissance végétale.",
         perso="Duelliste de l'ordre féerique à Leth'Var. Pense que le Voile d'Équité protège Sylvera d'une deuxième Faim des Racines.",
         lore="Lianen règle les contentieux de propriété sur les Élus Plante à Leth'Var par duel codifié. Elle navigue habilement entre Conservateurs de la Sève et Gardiens de la Clairière — les deux factions la respectent pour son habileté au combat, même si elles rejettent son allégeance impériale.",
         combat="Escrime végétale, ses lianes s'étendent pour piéger et désarmer l'adversaire. Vitesse et fluidité. Sa lame peut enraciner temporairement une cible."),

    # 131 Barrière-Verte — Vanguard — Convergence
    dict(id=131, nom="Barrière-Verte", element="plante", classe="Vanguard", espece="Sylvan",
         region="Sylvera", faction="Convergence",
         phys="Sylvan massif, corps recouvert d'une couche d'écorce secondaire née d'un Drain de signature végétale. Ses yeux ont viré au vert profond des forêts de Leth'Var.",
         perso="Évangéliste végétal. Pense que la Faim des Racines prouve que l'accumulation biologique individuelle détruit — la Convergence redistribue pour prévenir.",
         lore="Barrière-Verte opère à Leth'Var comme avant-garde doctrinale de la Convergence. Il recrute parmi les Gardiens de la Clairière — ceux qui croient en la destruction cyclique trouvent dans la doctrine sacrificielle une résonance. Les Conservateurs de la Sève le rejettent violemment.",
         combat="Avant-garde défensive, absorbe les dégâts végétaux adverses pour les redistribuer à ses alliés. Mur de végétation vivante en première ligne."),

    # 132 Forêt-Vivante — Gardien — Indépendant
    dict(id=132, nom="Forêt-Vivante", element="plante", classe="Gardien", espece="Sylvan",
         region="Sylvera", faction="Indépendant",
         phys="Sylvan dont le corps a partiellement fusionné avec la végétation de Leth'Var — racines dans les pieds, branches aux épaules. Immobile au repos, inébranlable au combat.",
         perso="Gardien sans mandat. Il a décidé de protéger un territoire de la forêt et ne l'abandonnera pas.",
         lore="Forêt-Vivante garde une zone de Leth'Var que la Faim des Racines a préservée par miracle — un fragment de forêt ancienne intacte qui contient peut-être des fragments de la mémoire perdue. Toutes les factions veulent y accéder. Il les bloque toutes.",
         combat="Défense totale de son territoire. Peut étendre ses racines sur une large zone pour immobiliser tout intrus. Sa résistance dans son territoire est absolue."),

    # 133 L'Entrelacé — Spécialiste — Indépendant
    dict(id=133, nom="L'Entrelacé", element="plante", classe="Spécialiste", espece="Sylvan",
         region="Sylvera", faction="Indépendant",
         phys="Sylvan dont la forme est un entrelacement perpétuel de végétation et de chair — impossible de dire où finit l'un et où commence l'autre.",
         perso="Entité de réseau biologique. Pense en systèmes racinaires, pas en individus. Incompréhensible pour quiconque pense en politique.",
         lore="L'Entrelacé est né dans les profondeurs du réseau racinaire créé lors de la Faim des Racines — une conscience émergente du réseau survivant qui n'a jamais pris forme entièrement humaine. Il comprend la mémoire perdue de Sylvera non comme des textes mais comme des structures organiques. L'Empire ne peut l'enregistrer : il n'a pas de date de naissance.",
         combat="Manipulation de tous les réseaux racinaires dans une large zone. Croissance instantanée de végétation massive. Sa puissance dépend de la densité végétale du terrain — dans Leth'Var, elle est illimitée."),
]

# ────────────────────────────────────────────────────────────────
# FÉE (361–373) — Givrins/Sylvans · Crysalme/Sylvera
# Note : Fée = l'ÉLÉMENT, pas l'Empire. Élus portant l'énergie féerique
# native de Crysalme et Sylvera. Tension : affinité avec la Citadelle
# mais pas nécessairement allégeance.
# ────────────────────────────────────────────────────────────────
fee_folders = [
    "361-lumielle","362-seleniar","363-auroch-givre","364-ailevif","365-theophane",
    "366-floribonde","367-chrysolea","368-pixelar","369-lumicide","370-palatin",
    "371-aurantia","372-kalyptis","373-prismatique"
]

fee_chars = [
    # 361 Lumielle — Soutien — Dissidentes
    dict(id=361, nom="Lumielle", element="fee", classe="Soutien", espece="Givrine",
         region="Crysalme", faction="Dissidentes",
         phys="Givrine de petite taille à l'aura féerique permanente — un halo ténu de lumière colorée qui change selon son état émotionnel. Yeux violets, peau argentée.",
         perso="Soigneuse qui a compris très tôt que son élément était convoité par la Citadelle précisément. Elle refuse d'être un outil d'Empire, même un outil de soin.",
         lore="Lumielle est née à Iskral avec une signature féerique — une rareté dans une ville de glace. La Citadelle s'y est immédiatement intéressée, car la Fée est l'élément central de l'Empire. Les Dissidentes l'ont protégée avant que les agents arrivent. Elle soigne les Élus hors-Calendrier dans les marges de Crysalme, loin des archives d'Iskral que les Fées voudraient effacer.",
         combat="Soins par canalisation féerique — régénération accélérée, purge des états négatifs. Boucliers de lumière qui repoussent les attaques élémentaires. Sa présence stabilise les Élus paniqués."),

    # 362 Séléniar — Capteur — Empire
    dict(id=362, nom="Séléniar", element="fee", classe="Capteur", espece="Givrine",
         region="Crysalme", faction="Empire",
         phys="Givrine en tenue féerique officielle de la Citadelle, aura de détection permanente, yeux qui luisent d'or quand elle trace une signature.",
         perso="Agent de la Citadelle sincèrement convaincue que les Élus Fée non-enregistrés risquent d'être exploités par la Convergence ou perdus. La Citadelle les protège.",
         lore="Séléniar est l'une des rares Givrines qui a volontairement rejoint la Citadelle. Elle traque les Élus Fée nés à Crysalme et Sylvera hors du Calendrier. Elle opère en tension avec la monarchie rituelle d'Iskral — qui veut protéger ses propres Élus mais pas forcément les livrer à la Citadelle.",
         combat="Détection des signatures féeriques à grande distance. Filets de lumière qui paralysent. Capture douce — elle préfère ne pas endommager ce qu'elle livre."),

    # 363 Auroch-Givré — Juggernaut — Convergence
    dict(id=363, nom="Auroch-Givré", element="fee", classe="Juggernaut", espece="Givrin",
         region="Crysalme", faction="Convergence",
         phys="Givrin massif, aura féerique partiellement extraite — la lumière autour de lui est fragmentée, par morceaux manquants. Corps durci par les Drains.",
         perso="Croit que l'énergie féerique est la plus précieuse et donc la plus nécessaire à redistribuer. Sa conviction est proportionnelle à ce qu'il a sacrifié.",
         lore="Auroch-Givré a subi un Drain partiel de signature féerique — un rituel que même la Convergence hésite à répéter car l'élément Fée est instable à l'extraction. Il a survécu. Son énergie partiellement extraite alimente la doctrine de la Convergence comme preuve que même l'élément impérial peut être redistributif.",
         combat="Résistance aux dégâts féeriques. Charge qui libère de l'énergie féerique instable en zone. Sa présence perturbe les auras des autres Élus Fée proches."),

    # 364 Ailevif — Plongeur — Dissidentes
    dict(id=364, nom="Ailevif", element="fee", classe="Plongeur", espece="Sylvane",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvane légère aux épaules ailées d'un faible pouvoir de vol féerique, aura colorée selon l'urgence. Rapide et presque silencieuse en déplacement.",
         perso="Urgente et précise. Elle sait que les Élus Fée sont les cibles prioritaires de la Citadelle — elle les extrait en priorité.",
         lore="Ailevif extrait les Élus Fée de Sylvera et Crysalme — les deux régions où l'élément se manifeste naturellement. Depuis la Faim des Racines, les agents de la Citadelle sont très présents à Leth'Var. Ailevif connaît des routes d'extraction par les forêts de Sylvera que même les agents impériaux ne cartographient pas.",
         combat="Vol féerique de courte durée pour franchir les obstacles. Extraction rapide, combat de précision légère. Sa vitesse dans les forêts de Leth'Var est imbattable."),

    # 365 Théophane — Mage-Burst — Indépendant
    dict(id=365, nom="Théophane", element="fee", classe="Mage-Burst", espece="Givrin",
         region="Crysalme", faction="Indépendant",
         phys="Givrin dont l'aura féerique est devenue trop puissante pour être contenue — il irradie constamment. Les appareils de mesure du Calendrier grillent à sa proximité.",
         perso="Fasciné par la nature de l'élément Fée lui-même — pourquoi l'Empire le valorise-t-il autant ? Cherche la réponse dans sa propre puissance.",
         lore="Théophane a atteint un niveau de puissance féerique que la Citadelle ne peut plus cataloguer dans ses tables standard du Calendrier. L'Empire veut le capturer mais craint sa puissance non-contrôlée. Les Dissidentes ont essayé de le recruter — il a décliné poliment et continué ses recherches.",
         combat="Décharge féerique en zone large — transforme temporairement le terrain en zone magique pure. Puissance brute sans plafond mesuré. Dangereux pour les alliés proches également."),

    # 366 Floribonde — Battlemage — Empire
    dict(id=366, nom="Floribonde", element="fee", classe="Battlemage", espece="Sylvane",
         region="Sylvera", faction="Empire",
         phys="Sylvane en armure légère féerique impériale, aura de combat permanente, sceau du Voile d'Équité brodé dans sa robe de combat.",
         perso="Agent direct de la Citadelle à Sylvera. Pense que l'élément Fée appartient à l'Empire par nature — c'est l'élément fondateur.",
         lore="Floribonde applique la loi du Calendrier à Leth'Var pour les Élus Fée spécifiquement. Elle a la priorité sur les autres agents impériaux pour toute capture d'Élu Fée à Sylvera — ordre direct de la Citadelle. Les Gardiens de la Clairière la tolèrent ; les Conservateurs de la Sève la rejettent.",
         combat="Magie féerique offensive et défensive combinées. Contraintes de lumière qui immobilisent. Armure féerique active qui répond aux frappes."),

    # 367 Chrysolea — Artillerie — Dissidentes
    dict(id=367, nom="Chrysolea", element="fee", classe="Artillerie", espece="Sylvane",
         region="Sylvera", faction="Dissidentes",
         phys="Sylvane aux cheveux lumineux comme de l'or filé, lance des éclats de lumière féerique concentrée. Sa colère rend ses tirs plus brillants.",
         perso="En colère contre la Citadelle. L'élément Fée est né bien avant l'Empire — que les Fées le traitent comme leur propriété est l'usurpation fondatrice.",
         lore="Chrysolea cible les relais de la Citadelle dans Sylvera — des cristaux féeriques installés pour capter et diriger les naissances d'Élus Fée vers des familles contrôlées. Chaque cristal détruit prive la Citadelle d'un outil de manipulation générationnelle. Elle en a détruit six.",
         combat="Éclats de lumière féerique à longue portée qui traversent la plupart des boucliers. Destruction de cristaux de focalisation. Zone de lumière explosive."),

    # 368 Pixelar — Tireur — Indépendant
    dict(id=368, nom="Pixelar", element="fee", classe="Tireur", espece="Givrin",
         region="Crysalme", faction="Indépendant",
         phys="Givrin de petite taille aux mouvements très rapides, tirs de lumière féerique de précision. Aura colorée instable qui change selon l'humeur.",
         perso="Mercenaire sans prétention idéologique. Loue sa précision féerique au plus offrant, en évitant soigneusement les contrats qui l'impliqueraient avec la Citadelle.",
         lore="Pixelar opère à Iskral depuis l'alliance historique entre Givrins et Fées — une relation qu'il observe sans y participer. La monarchie rituelle le tolère. L'Empire le surveille. Les Dissidentes lui ont proposé un contrat plusieurs fois. Il a toujours demandé un tarif légèrement supérieur à ce qu'elles peuvent payer.",
         combat="Tirs de lumière féerique de précision extrême à longue portée. Repositionnement rapide. Sa petite taille le rend difficile à cibler en retour."),

    # 369 Lumicide — Assassin — Dissidentes
    dict(id=369, nom="Lumicide", element="fee", classe="Assassin", espece="Givrin",
         region="Crysalme", faction="Dissidentes",
         phys="Givrin à l'aura féerique inversée — absorbe la lumière plutôt que de l'émettre. Quasi-invisible dans un environnement lumineux.",
         perso="Paradoxal dans sa nature d'Élu Fée qui combat l'Empire féerique. Il voit cette ironie comme sa raison d'être.",
         lore="Lumicide élimine les agents de la Citadelle opérant à Iskral — ceux qui cherchent à accéder aux archives que la monarchie rituelle garde. Il est un Élu Fée qui retourne l'élément de l'Empire contre l'Empire. La Citadelle le classe comme prioritaire à capturer.",
         combat="Absorption de lumière féerique adverse — ses cibles se retrouvent dans le noir absolu. Frappe mortelle dans l'obscurité qu'il crée. Sans trace lumineuse."),

    # 370 Palatin — Escrimeur — Empire
    dict(id=370, nom="Palatin", element="fee", classe="Escrimeur", espece="Givrin",
         region="Crysalme", faction="Empire",
         phys="Givrin en tenue de duel féerique officielle de la Citadelle, lame de cristal féerique forgée en altitude, aura de légitimité impériale.",
         perso="Le représentant le plus élégant de la Citadelle à Iskral. Pense que le duel féerique est la forme la plus civilisée de résolution de conflits.",
         lore="Palatin gère les duels de juridiction entre la monarchie rituelle d'Iskral et les agents de la Citadelle — les conflits les plus fréquents et les plus politiquement chargés. Il a gagné vingt-deux duels consécutifs. La monarchie le méprise et l'admire simultanément.",
         combat="Escrime féerique de haute précision, sa lame peut dissoudre les protections élémentaires adverses. Vitesse et grâce. L'aura de sa lame déstabilise psychologiquement les adversaires."),

    # 371 Aurantia — Vanguard — Convergence
    dict(id=371, nom="Aurantia", element="fee", classe="Vanguard", espece="Sylvane",
         region="Sylvera", faction="Convergence",
         phys="Sylvane aux yeux devenus dorés après un Drain féerique partiel. Armure de la Convergence décorée de symboles d'équité. Sa présence crée un champ de redistribution visible.",
         perso="Pense que l'énergie féerique est précisément celle qui doit être redistribuée en priorité — car c'est celle que l'Empire monopolise le plus.",
         lore="Aurantia est l'avant-garde doctrinale de la Convergence à Sylvera. Elle argue que l'élément Fée appartient à tous — que la Citadelle l'a confisqué comme elle a confisqué les Élus. Sa présence à Leth'Var est perçue comme une menace par les agents impériaux.",
         combat="Avant-garde féerique, redistribue l'énergie des attaques reçues à ses alliés. Sa présence frontale crée un champ de redistribution lumineuse qui renforce la formation."),

    # 372 Kalyptis — Gardien — Indépendant
    dict(id=372, nom="Kalyptis", element="fee", classe="Gardien", espece="Givrin",
         region="Crysalme", faction="Indépendant",
         phys="Givrin massif dont l'aura féerique s'est stabilisée en bouclier permanent — une couche de lumière solide l'entoure en toutes circonstances.",
         perso="Protège ce qu'il a choisi. L'élément Fée lui confère une résistance aux manipulations idéologiques — il sait faire la différence entre une vérité et un argument.",
         lore="Kalyptis garde un fragment d'archive à Iskral que ni la monarchie rituelle ni la Citadelle ne savent exactement ce qu'il contient. Il ne travaille pour aucune faction et ne le fera pas. Les trois lui ont proposé des arrangements. Il a répondu non à chacune avec la même politesse.",
         combat="Bouclier féerique actif qui répond aux attaques en les absorbant. Résistance totale aux dégâts féeriques. Sa défense est quasi-impénétrable — l'attaquer épuise l'attaquant."),

    # 373 Prismatique — Spécialiste — Indépendant
    dict(id=373, nom="Prismatique", element="fee", classe="Spécialiste", espece="Givrine",
         region="Crysalme", faction="Indépendant",
         phys="Givrine dont la forme décompose la lumière ambiante en prismes — impossible de la regarder directement sans être ébloui. Sa signature élémentaire se lit comme tous les éléments à la fois.",
         perso="Phénomène de lumière autant qu'être vivant. Incompréhensible pour les systèmes de classification — y compris le Calendrier.",
         lore="Prismatique est née lors d'un alignement cosmique rare à Iskral — un événement que la caste des lecteurs de destin d'Heliora qualifie de 'conjonction féerique totale'. Elle est la manifestation la plus complète de l'élément Fée jamais enregistrée. La Citadelle la veut absolument. Elle est jusqu'à présent introuvable pour quiconque ne sait pas lire la lumière prismatique.",
         combat="Décomposition lumineuse totale de son environnement. Tous les éléments lui répondent partiellement — elle a un accès partiel à tous. Sa puissance est sans catégorie."),
]

# Écriture
total = 0
for folder, c in zip(plante_folders, plante_chars):
    path = f"{BASE}/plante/{folder}/index.ts"
    write(path, char_file(**c))
    total += 1
print(f"Plante: {total} personnages réécrits")

total2 = 0
for folder, c in zip(fee_folders, fee_chars):
    path = f"{BASE}/fee/{folder}/index.ts"
    write(path, char_file(**c))
    total2 += 1
print(f"Fée: {total2} personnages réécrits")
print(f"Total: {total + total2} personnages")
