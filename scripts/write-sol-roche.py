"""Ecrit Sol (151-163) et Roche (181-193) avec ancrage LORE_CANON."""
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

# ─────────────────────────────────────────────────────────────────
# SOL (151-163) — Chthoniens · Ormn-Dur · Kar-Dum
# Evenement : La Fosse Interdite
# ─────────────────────────────────────────────────────────────────
sol_folders = [
    "151-sedivyne","152-crevass","153-gorn","154-sismur","155-loessa",
    "156-terrak","157-cratere","158-poussiere-vive","159-tunnelax","160-fondation",
    "161-seis","162-muraile","163-la-faille"
]

sol_chars = [
    dict(id=151, nom="Sedivyne", element="sol", classe="Soutien", espece="Chthonienne",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonienne compacte a la peau gris-ocre des strates sedimentaires, mains qui canalisent la guerison par remise en place minerale. Yeux couleur argile.",
         perso="Guerisseuse de fond qui soigne sans poser de questions sur la faction. La technocratie de contribution de Kar-Dum lui semble juste jusqu'a ce que l'Empire en prenne le controle.",
         lore="Sedivyne soignait les ouvriers des mines de Kar-Dum jusqu'a ce que l'Empire exige l'enregistrement des Elus Sol soignants. Elle a refuse et rejoint les Dissidentes. Elle soigne maintenant dans les zones profondes d'Ormn-Dur, parfois a proximite de la Fosse Interdite — la catastrophe nee quand un Elu Rock a creuse trop profond et libere une zone hyperfongique saturee d'emanations toxiques.",
         combat="Guerison minerale — regeneration des os et structures profondes. Barricade de sol leve pour proteger ses allies. Tremblements localises si poussee a l'offensive."),
    dict(id=152, nom="Crevass", element="sol", classe="Capteur", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien mince aux mouvements souterrains, capable de se deplacer a travers le sol meuble. Peau qui change de texture selon le substrat traverse.",
         perso="Traqueur technique qui utilise les vibrations sismiques pour detecter les signatures elementaires. Croit que la Fosse Interdite justifie la supervision imperiale.",
         lore="Crevass traque les Elus Sol non-enregistres dans Ormn-Dur par vibration sismique — chaque Elu deplace le sol d'une facon unique, lisible pour lui. Depuis la Fosse Interdite, la technocratie de Kar-Dum collabore partiellement avec l'Empire car la surveillance des zones profondes depasse leurs capacites locales.",
         combat="Deplacement a travers le sol, attaque depuis le dessous. Detection sismique dans un rayon de cinquante metres. Capture par engloutissement partiel du sol."),
    dict(id=153, nom="Gorn", element="sol", classe="Juggernaut", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien colossal, corps partiellement petrifie par des Drains de signature tellurique successifs. Ses poings brisent la roche a mains nues.",
         perso="Pense que sa force vient de la terre et doit y retourner. La doctrine de la Convergence lui semble naturelle — la terre prend et la terre donne.",
         lore="Gorn a participe a plusieurs Drains de signature Sol dans les mines profondes de Kar-Dum. Son energie extraite alimente des systemes de stabilisation de galeries souterraines a Ash'Rael. La technocratie de Kar-Dum le voit d'un oeil mitige : il contribue, mais a une entite externe.",
         combat="Resistance aux dommages par petrification partielle. Charge qui fend la roche. Absorbe l'energie tellurique adverse et la retourne."),
    dict(id=154, nom="Sismur", element="sol", classe="Plongeur", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien agile specialise dans le deplacement rapide en galerie. Marques de pression sur les cotes — traces d'infiltrations dans des tunnels trop etroits.",
         perso="Rapide et precis dans les souterrains. Croit que les Elus nes en profondeur appartiennent aux profondeurs, pas au Calendrier des Fees.",
         lore="Sismur extrait des Elus Sol que le Calendrier a localises avant les agents de la Citadelle. Il exploite les reseaux de galeries de Kar-Dum — et les zones chaotiques de la Fosse Interdite que meme les agents imperiaux refusent d'approcher — comme routes d'infiltration et de fuite.",
         combat="Deplacement rapide en galerie, attaque sismique de precision. Disparait dans le sol apres chaque frappe. Cree des tunnels d'acces et d'evasion en combat."),
    dict(id=155, nom="Loessa", element="sol", classe="Mage-Burst", espece="Chthonienne",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonienne aux bras capables de lever des masses de roche enormes. Peau qui irradie une chaleur geothermique lors de ses decharges.",
         perso="Fascinee par la mecanique profonde de la terre — plaques, pressions, tensions. Les factions lui semblent des epiphenomenes de surface.",
         lore="Loessa a cartographie les structures tectoniques sous Ormn-Dur et comprend la Fosse Interdite comme un evenement geologique previsible — une consequence de l'extraction excessive. Elle cherche d'autres zones de risque similaire. Personne ne peut la recruter car ses priorites sont geologiques.",
         combat="Soulevements de masse tellurique a grande echelle. Seisme controle en zone. Puissance brute geologique sans plafond connu."),
    dict(id=156, nom="Terrak", element="sol", classe="Battlemage", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien en armure de roche compressee imperiale, sceau du Voile d'Equite taille dans la pierre. Chaque pas fait vibrer le sol.",
         perso="Pense que sans l'Empire pour reguler les Elus Sol, une nouvelle Fosse Interdite est inevitable. La supervision protege.",
         lore="Terrak applique la loi du Calendrier a Kar-Dum en collaboration pragmatique avec la technocratie de contribution. La Fosse Interdite est son argument permanent : voila ce qui arrive sans supervision.",
         combat="Combat de melee tellurique, armure de roche active. Tremblements de combat qui destabilisent les formations adverses. Combo attaque-defense geologique."),
    dict(id=157, nom="Cratere", element="sol", classe="Artillerie", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien massif, lance des projectiles de roche a haute velocite. Bras renforces par des annees de manipulation minerale. Toujours couvert de poussiere.",
         perso="Pense que les infrastructures de controle imperiales peuvent etre litteralement enterrees. Il le fait.",
         lore="Cratere cible les postes de surveillance imperiaux installes aux entrees des galeries de Kar-Dum depuis la Fosse Interdite. Il les enterre sous des eboulis controles. L'Empire les reconstruit. Il les enterre a nouveau. Il compte ses cycles d'usure avec satisfaction.",
         combat="Projectiles de roche massive a longue portee. Eboulements controles sur des zones ciblees. Destruction d'infrastructures souterraines."),
    dict(id=158, nom="Poussiere-Vive", element="sol", classe="Tireur", espece="Chthonienne",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonienne fine aux mouvements silencieux, lance des projectiles de sable et roche fine a vitesse extreme. Toujours entouree d'un nuage de poussiere.",
         perso="Mercenaire precise loyale a Ormn-Dur en tant que region, sans allegiance ideologique.",
         lore="Poussiere-Vive loue ses services dans Kar-Dum depuis la Fosse Interdite, qui a cree des zones de territoire conteste dans Ormn-Dur. Elle a travaille pour la technocratie et des proprietaires de galeries, jamais pour l'Empire.",
         combat="Projectiles de sable et roche fine de precision extreme. Nuage de poussiere abrasive pour reduire la visibilite adverse. Repositionnement silencieux."),
    dict(id=159, nom="Tunnelax", element="sol", classe="Assassin", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien mince capable de traverser la roche meuble sans laisser de trace. Laisse une marque de main en argile sur ses cibles.",
         perso="Froid et methodique. Voit les agents de l'Empire dans les mines de Kar-Dum comme des corps etrangers dans un systeme vivant.",
         lore="Tunnelax elimine les agents imperiaux qui cataloguent les Elus Sol dans les zones profondes de Kar-Dum. Il utilise les tunnels instables de la Fosse Interdite comme routes d'acces et d'evasion que personne d'autre n'ose emprunter.",
         combat="Deplacement a travers le sol, attaque depuis le dessous sans avertissement. Engloutissement de la cible pour l'isoler. Disparait instantanement dans la roche."),
    dict(id=160, nom="Fondation", element="sol", classe="Escrimeur", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien elegant, lame de roche polie taillee dans les strates les plus dures d'Ormn-Dur. Mouvements lents mais totalement irreversibles.",
         perso="Duelliste imperial qui pense que la force geologique est la plus fondamentale — et donc la plus legitime. Sa patience est infinie.",
         lore="Fondation regle les contentieux de propriete sur les Elus Sol a Kar-Dum — conflits nombreux depuis la Fosse Interdite qui a redistribue les zones d'extraction. Il gere aussi les tensions entre la technocratie locale et les representants feeriques.",
         combat="Escrime geologique lente mais imparable — chaque coup brise les defenses les plus solides. Sa lame peut couper l'energie elementaire adverse."),
    dict(id=161, nom="Seis", element="sol", classe="Vanguard", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien aux yeux devenus obsidienne apres un Drain profond. Armure de la Convergence renforcee de couches de roche. Tremblements mineurs a chaque pas.",
         perso="Evangeliste souterrain. Pense que la Fosse Interdite prouve que la terre elle-meme redistribue quand les humains n'osent pas.",
         lore="Seis recrute dans les galeries de Kar-Dum parmi les ouvriers qui ont perdu leurs zones d'extraction a la Fosse Interdite. Sa these : la doctrine sacrificielle de la Convergence est simplement la technocratie de contribution poussee a sa logique complete.",
         combat="Avant-garde sismique, genere des tremblements qui destabilisent les formations adverses. Absorbe l'energie tellurique adverse pour la redistribuer."),
    dict(id=162, nom="Muraille", element="sol", classe="Gardien", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien colossal dont la peau est devenue indiscernable de la roche compressee. Immobile au repos — on le prend parfois pour une formation naturelle.",
         perso="Protege un territoire souterrain qu'il a decide de garder. Personne ne l'a mandate. Sa decision est definitive.",
         lore="Muraille garde l'entree d'une galerie profonde de Kar-Dum donnant sur les zones les moins instables de la Fosse Interdite. Des Elus hors-Voile s'y sont refugies. Il bloque toutes les factions sans distinction.",
         combat="Resistance absolue dans sa zone d'ancrage. Mur de roche leve instantanement. Defense structurelle — impossible a penetrer de front."),
    dict(id=163, nom="La Faille", element="sol", classe="Specialiste", espece="Chthonienne",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonienne dont la forme physique est traversee de fissures lumineuses — le sol se fracture dans son sillage. Signature elementaire instable.",
         perso="Entite de fracture geologique. Pense en temps geologique. Les factions humaines lui semblent instantanees.",
         lore="La Faille est nee dans les profondeurs de la Fosse Interdite — une consequence directe de l'ouverture de la zone hyperfongique. Elle represente la conscience de la rupture geologique elle-meme. L'Empire ne peut l'enregistrer : sa naissance n'est pas datee.",
         combat="Manipulation des lignes de fracture dans une large zone. Failles instantanees sous les cibles. Puissance dependant de la fragilite structurelle du terrain."),
]

# ─────────────────────────────────────────────────────────────────
# ROCHE (181-193) — Chthoniens/Pyriens · Ormn-Dur/Varkhol
# ─────────────────────────────────────────────────────────────────
roche_folders = [
    "181-geolithe","182-piege-roche","183-koloss","184-granyte","185-eclator",
    "186-avalanche","187-obus-pierre","188-gravas","189-silice","190-roc-vif",
    "191-bloc-percutant","192-forteresse","193-le-monolithe"
]

roche_chars = [
    dict(id=181, nom="Geolithe", element="roche", classe="Soutien", espece="Pyrien",
         region="Varkhol", faction="Dissidentes",
         phys="Pyrien montagnard aux epaules larges comme un affleurement rocheux, mains qui creent des cristaux de guerison minerale. Peau striee de couches sedimentaires visibles.",
         perso="Soignant des hauteurs qui refuse que ses cristaux soient enregistres comme ressource imperiale. Les montagnes de Varkhol soignent sans permis.",
         lore="Geolithe soignait dans les zones montagneuses de Varkhol jusqu'a la Rupture Thermique — l'explosion qui a fige la Forge Silencieuse de Khar-Vurn. Il soigne maintenant les Pyriens des hauteurs qui refusent le Voile d'Equite et les Elus Roche nes en dehors des enregistrements feeriques.",
         combat="Cristaux de guerison minerale deposes sur les allies blesses. Barricade de roche pour proteger les positions. Eclats de pierre defensifs si necessaire."),
    dict(id=182, nom="Piege-Roche", element="roche", classe="Capteur", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien trapu aux doigts qui creent des pieges de roche qui se referment sur les cibles. Yeux gris adaptes a voir dans les galeries sombres.",
         perso="Traqueur pragmatique. Pense que les Elus Roche non-enregistres representent un risque structurel — voir la Fosse Interdite.",
         lore="Piege-Roche traque les Elus Roche dans les zones intermediaires entre Ormn-Dur et Varkhol — region disputee depuis la Rupture Thermique et la Fosse Interdite. Il collabore avec la technocratie de Kar-Dum quand leurs interets coincident.",
         combat="Pieges de roche declenches a distance. Detection sismique des signatures rocheuses. Cage de roche pour capturer sans blesser."),
    dict(id=183, nom="Koloss", element="roche", classe="Juggernaut", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien de taille anormale — deux metres dix. Corps partiellement integre a une armure de roche naturelle nee de Drains de signature minerale. Ses pas laissent des empreintes dans la roche solide.",
         perso="Pense que sa masse est une ressource collective. Il la met a disposition sans hesiter.",
         lore="Koloss a subi cinq Drains de signature Roche pour la Convergence. Son energie extraite stabilise des structures architecturales a Ash'Rael et Kar-Dum. La technocratie de Kar-Dum voit dans cette double contribution un modele.",
         combat="Masse corporelle absolue — les attaques physiques rebondissent. Charge qui brise toute formation. Absorbe l'energie de roche adverse."),
    dict(id=184, nom="Granyte", element="roche", classe="Plongeur", espece="Pyrien",
         region="Varkhol", faction="Dissidentes",
         phys="Pyrien montagnard agile malgre sa densite — ses os sont partiellement granitiques. Capable de se glisser dans des fissures rocheuses imperceptibles.",
         perso="Silencieux et efficace dans les zones de roche. Extrait les Elus avant que les agents arrivent.",
         lore="Granyte extrait des Elus Roche des zones montagneuses de Varkhol — nes dans les hauteurs, loin de Khar-Vurn et de ses enregistrements. Depuis la Rupture Thermique, la Forge Silencieuse attire beaucoup d'attention feerique. Granyte y opere malgre le danger.",
         combat="Deplacement dans les fissures rocheuses, attaque sismique de precision. Cree des acces et des sorties dans la roche. Combat d'infiltration minerale."),
    dict(id=185, nom="Eclator", element="roche", classe="Mage-Burst", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien dont les bras generent une pression interne extreme — ses poings creent des explosions rocheuses a l'impact. Peau fissuree de chaleur interne.",
         perso="Fascine par la physique des ruptures rocheuses. Les doctrines lui semblent molles comparees a la geologie.",
         lore="Eclator a reproduit en experimentation privee les conditions de la Fosse Interdite — la pression et le type de forage qui ont cree l'explosion. Il comprend le mecanisme et cherche d'autres applications.",
         combat="Explosion rocheuse en zone large depuis les poings. Pression interne concentree en onde de choc. Puissance brute geologique."),
    dict(id=186, nom="Avalanche", element="roche", classe="Battlemage", espece="Pyrien",
         region="Varkhol", faction="Empire",
         phys="Pyrienne montagneuse en armure de roche imperiale renforcee, sceau du Voile d'Equite taille dans du granit. Ses mouvements font tomber de la poussiere des murs.",
         perso="Croit que sans regulation, une nouvelle Rupture Thermique ou une nouvelle Fosse Interdite est inevitable. L'Empire regule pour prevenir.",
         lore="Avalanche applique la loi du Calendrier dans les zones montagneuses de Varkhol — territoire difficile car les Pyriens montagnards rejettent traditionnellement la supervision feerique. Elle opere depuis la Rupture Thermique qui a fragile la confiance en l'independance locale.",
         combat="Melee de roche, armure active qui absorbe les coups et les retourne. Avalanche de blocs controlee en combat. Combo attaque-defense geologique."),
    dict(id=187, nom="Obus-Pierre", element="roche", classe="Artillerie", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien trapu, bras capables de lancer des blocs de roche de quarante kilos avec precision. Toujours couvert de debris de pierres eclatees.",
         perso="Direct et concret. La politique se compte en blocs de roche deplaces. Il en deplace.",
         lore="Obus-Pierre cible les postes de surveillance imperiaux aux entrees de Kar-Dum et les equipements de forage que la Convergence installe dans les zones de la Fosse Interdite pour en extraire les Elus Nuee. Il ne fait pas de distinction doctrinale : les deux nuisent a Ormn-Dur.",
         combat="Projectiles de roche massive a longue portee. Destruction d'infrastructures par impact direct. Zone de debris persistante qui entrave le mouvement adverse."),
    dict(id=188, nom="Gravas", element="roche", classe="Tireur", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien mince qui propulse du gravier et des eclats de roche a vitesse de balle. Yeux proteges par une membrane rocheuse naturelle.",
         perso="Mercenaire loyal a Ormn-Dur comme territoire, pas a une faction.",
         lore="Gravas a travaille pour la technocratie, des proprietaires de galeries, et une fois pour les Dissidentes lors d'une extraction dans la zone de la Fosse Interdite. Il refuse systematiquement les contrats imperiaux — ils paient en retard.",
         combat="Tirs d'eclats de roche de precision extreme. Nuage d'impact de gravier en zone. Repositionnement rapide et silencieux."),
    dict(id=189, nom="Silice", element="roche", classe="Assassin", espece="Pyrien",
         region="Varkhol", faction="Dissidentes",
         phys="Pyrienne montagnarde a la peau presque translucide par finesse siliceuse. Quasi-invisible sur fond de roche claire. Laisse un eclat de quartz sur ses cibles.",
         perso="Precise et sans illusions. Les agents imperiaux dans les montagnes de Varkhol sont des corps etrangers dans un ecosysteme geologique qu'elle connait intimement.",
         lore="Silice elimine les agents du Calendrier qui operent dans les zones montagneuses de Varkhol — notamment ceux qui cherchent les Elus Dragon nes sur des 'dates perdues' dans les formations de pierre-dragon de la Forge Silencieuse.",
         combat="Invisibilite sur fond rocheux. Frappe silencieuse par tranchant de silice. Laisse ses cibles sans trace visible de la cause."),
    dict(id=190, nom="Roc-Vif", element="roche", classe="Escrimeur", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien elegant, lame de roche poli-miroir forgee dans les couches les plus dures de Kar-Dum. Mouvements lents et inexorables.",
         perso="Duelliste imperial dans une ville qui respecte la contribution — il contribue par ses victoires en duel.",
         lore="Roc-Vif regle les contentieux de propriete sur les Elus Roche a Kar-Dum et dans les zones montagneuses intermediaires. Depuis la Fosse Interdite, les conflits sur les zones d'extraction se sont multiplies.",
         combat="Escrime geologique a vitesse moderee mais totalement imparable. Sa lame de roche concentre la puissance geologique. Un seul coup bien place suffit."),
    dict(id=191, nom="Bloc-Percutant", element="roche", classe="Vanguard", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien dont le corps ressemble a un bloc de roche en mouvement. Cicatrices de Drain en couches geologiques visibles sur le torse.",
         perso="Evangeliste de la redistribution geologique. Sa these : la roche qu'on extrait appartient a la terre, comme l'energie des Elus Roche appartient au collectif.",
         lore="Bloc-Percutant opere a Kar-Dum comme avant-garde doctrinale de la Convergence. Il recrute parmi les ouvriers de galerie qui ont vu la Fosse Interdite de pres — la catastrophe comme preuve que l'accumulation individuelle detruit.",
         combat="Avant-garde de choc — sa presence frontale brise les formations avant meme le contact. Absorbe les degats rocheux et les redistribue."),
    dict(id=192, nom="Forteresse", element="roche", classe="Gardien", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien dont la peau est devenue de la roche compressee pure. Immobile au repos. Sa presence stabilise geologiquement la zone autour de lui.",
         perso="Garde sans mandat. Sa decision est ancienne et definitive.",
         lore="Forteresse garde l'entree nord de Kar-Dum depuis avant la Fosse Interdite. Il existait deja quand l'Elu Rock ambitieux a creuse trop profond. Il a regarde la catastrophe sans bouger. Il regarde maintenant les factions se disputer avec la meme absence de reaction.",
         combat="Defense absolue dans sa zone. Aucune attaque ne le deplace. Attaquer Forteresse epuise l'attaquant sans resultat."),
    dict(id=193, nom="Le Monolithe", element="roche", classe="Specialiste", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien dont la forme est desormais un monolithe ambulant — impossible de distinguer l'etre vivant de la structure geologique. Des strates de millions d'annees visibles dans sa peau.",
         perso="Entite geologique ancienne. Pense en eres geologiques. Les evenements humains sont des poussieres.",
         lore="Le Monolithe est peut-etre ne avant Kar-Dum — certaines strates de sa peau preexistent a la fondation de la ville. Il n'a pas de date dans le Calendrier. L'Empire a cesse d'essayer de le classer.",
         combat="Manipulation des masses rocheuses dans une large zone. Soulevements de formations geologiques entieres. Puissance geologique sans limite connue."),
]

total = 0
for folder, c in zip(sol_folders, sol_chars):
    path = f"{BASE}/sol/{folder}/index.ts"
    write(path, char_file(**c))
    total += 1
print(f"Sol: {total} personnages reecrits")

total2 = 0
for folder, c in zip(roche_folders, roche_chars):
    path = f"{BASE}/roche/{folder}/index.ts"
    write(path, char_file(**c))
    total2 += 1
print(f"Roche: {total2} personnages reecrits")
print(f"Total: {total + total2} personnages")
