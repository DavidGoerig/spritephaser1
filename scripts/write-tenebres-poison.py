#!/usr/bin/env python3
"""Rewrite Tenebres (331-343) + Poison (391-403) with PDF lore."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'characters')

def char_file(id, nom, element, classe, espece, region, faction, phys, perso, lore, combat, modifs=""):
    return f"""import {{ ELEMENT_KITS }} from '../../../character-kits';
import type {{ Personnage }} from '../../../character-types';

const character: Personnage = {{
  id: {id},
  nom: `{nom}`,
  element: '{element}',
  classe: '{classe}',
  espece: '{espece}',
  region: '{region}',
  faction: '{faction}',
  description_physique: `{phys}`,
  description_personnalite: `{perso}`,
  position_lore: `{lore}`,
  style_combat: `{combat}`,
  kit: ELEMENT_KITS['{element}'],
  modifications_classe: `{modifs}`,
}};

export default character;
"""

def write(folder, subfolder, content):
    path = os.path.join(BASE, folder, subfolder, 'index.ts')
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK: {path}")

# ============================================================
# TENEBRES (331-343) — Umbriens/Noctea + Peuples des Sables
# Ancrage : Le Vol de la Lumiere, Vel'Nox ville-miroir,
#           guildes clandestines, archives noires, nuit fondatrice
# ============================================================

write('tenebres', '331-sylvara', char_file(
    331, "Sylvara", "Tenebres", "Enchanteur-Soutien", "Umbrien", "Noctea", "Dissidentes",
    "Silhouette mince aux cheveux noir de jais stries de fils argentes. Sa peau capte la lumiere comme un prisme inverse, absorbant la clarte, diffusant l'ombre. Ses vetements sont tisses d'un materiau issu des archives textiles de la vieille republique lumineuse de Vel'Nox, avant le Vol.",
    "Douce et methodique, portee par une conviction tranquille. Elle n'impose jamais ses convictions par la violence, elle les insuffle par la persistance. Croit que la nuit peut soigner autant que la lumiere, si on sait l'utiliser.",
    "Nee dans les decombres de l'ancien quartier marchand de Vel'Nox, district Lumiel, detruit lors du Vol de la Lumiere. Guerisseuse de guilde clandestine, elle soigne les Elus non enregistres que les Fees traquent, les cachant dans les recoins ombreux que les capteurs feeriques ne savent plus lire depuis la nuit fondatrice.",
    "Utilise les zones d'ombre comme tissu de soin : ses allies plonges dans l'obscurite se regenerent plus vite. Dissimule les blessures dans le noir, reduisant les signatures elementaires detectables par les Capteurs adverses."
))

write('tenebres', '332-onyx', char_file(
    332, "Onyx", "Tenebres", "Enchanteur-Capteur", "Umbrien", "Noctea", "Empire",
    "Corps taille dans la nuit, regard d'un gris acier sans fond. Ses iris ont une luminosite propre, artificielle : implants optiques acquis a la pharmacie noire de Vel'Nox pour ameliorer sa vision dans l'obscurite totale. Uniforme imperial discret, sans insigne apparent.",
    "Professionnel jusqu'a la froideur. N'est pas cruel, simplement efficace. Croit sincerement que les Elus non enregistres sont plus en danger hors du Voile qu'a l'interieur. A personnellement escorte quatorze Elus vers la Citadelle en les convainquant que c'etait leur interet.",
    "Agent imperial ne a Vel'Nox apres le Vol de la Lumiere, forme dans les methodes d'infiltration de la Guilde Grise avant que l'Empire ne retourne cette guilde a son service. Specialiste de la traque dans le noir : il utilise les memes techniques d'ombre que les Dissidentes pour les retrouver. Ses rapports au Calendrier sont precis et exhaustifs.",
    "Capte les signatures elementaires en mobilisant l'obscurite ambiante comme resonateur. Ses sorts de detection traversent les ecrans visuels : il voit ce que les yeux ne peuvent pas, localisant les Elus dissimules dans les recoins de Vel'Nox."
))

write('tenebres', '333-kraath', char_file(
    333, "Kraath", "Tenebres", "Juggernaut", "Peuple des Sables", "Deserts", "Convergence",
    "Masse imposante aux muscles noircis par des scarifications rituelles du Premier Drain. Sa peau a la texture d'un basalte nocturne, dense, rugueuse, presque insensible. Porte des plaques de pierre-ombre soudees a son torse lors d'un rite d'initiation de la Convergence a Ash'Rael.",
    "Fanatique tranquille. Ne hurle pas, ne menace pas. Explique. Croit que l'energie des Elus appartient au monde, et que refuser de la restituer est un acte d'egoisme existentiel. N'a aucune pitie pour ceux qui gardent leur don comme une propriete privee.",
    "Ne a Ash'Rael dans une lignee ayant participe au Premier Drain. Pour lui, le Vol de la Lumiere de Vel'Nox n'etait pas un crime mais un precedent : la preuve que l'energie peut etre reaffectee depuis ceux qui l'accumulent vers ceux qui en ont besoin. Sert la Convergence comme chair sacrificielle volontaire, convaincu que son corps est un vecteur de redistribution.",
    "Absorbe l'energie tenebreuse des adversaires pour s'en nourrir, comme un drain vivant. Sa presence siphonne les reserves elementaires des ennemis proches, qu'il reverse sous forme de puissance brute lors des assauts."
))

write('tenebres', '334-evanyx', char_file(
    334, "Evanyx", "Tenebres", "Plongeur", "Umbrien", "Noctea", "Dissidentes",
    "Svelte et rapide, capable de se fondre dans une ombre portee de quelques centimetres. Ses vetements absorbent la lumiere a un niveau presque pathologique. Des cicatrices en spirale marquent ses avant-bras, souvenir d'une extraction sous garde imperiale dans les couloirs de Vel'Nox.",
    "Pragmatique et tenace, allergique aux ideologies. Se mefie des grandes causes, y compris celle des Dissidentes, mais reste fidele aux individus qu'il a choisi de proteger. Il n'extrait pas des symboles : il extrait des personnes.",
    "Ancienne recrue des guildes marchandes de Vel'Nox devenu extracteur pour les Dissidentes apres avoir vu sa famille dispersee par une operation de capture imperiale. Specialiste des zones d'ombre totale, il guide les Elus non enregistres hors des couloirs surveilles en utilisant le reseau de passages souterrains creuses avant le Vol de la Lumiere, quand Vel'Nox etait encore une ville a ciel ouvert.",
    "Plonge dans les angles morts et en ressort avec une vitesse desorientante. Ses attaques surgissent toujours depuis une zone que l'adversaire ne peut pas surveiller, exploitant l'obscurite de Vel'Nox comme terrain nativement hostile a l'ennemi."
))

write('tenebres', '335-sepia', char_file(
    335, "Sepia", "Tenebres", "Mage-Burst", "Umbrien", "Noctea", "Independent",
    "Jeune femme a la peau couleur d'encre de seiche, yeux d'un brun dore presque lumineux, heredite rare liee a l'exposition prolongee de ses aieux a l'obscurite post-Vol de la Lumiere. Ses mains sont tatouees de circuits d'ombre en encre photosensible : visibles seulement dans le noir complet.",
    "Impulsive et brillante, peu interessee par les consequences a long terme. A ete reclamee par l'Empire, la Convergence et les Dissidentes. A refuse les trois fois, par principe autant que par instinct de survie. Tire. Ce qui se passe apres, c'est de la physique, pas de la politique.",
    "Nee d'une explosion de naissance exceptionnelle dans les sous-sols de Vel'Nox : sa signature elementaire a grille deux capteurs imperiaux a distance le jour de son eveil. Les Fees ont mis son nom sur la liste noire du Calendrier sous la mention 'anomalie de puissance, capture prioritaire'. Vit depuis dans l'illegalite totale, utilisant les archives des guildes d'ombre pour eviter les patrouilles.",
    "Libere des salves d'obscurite compressee avec une puissance brute qui depasse la norme de sa categorie. Ses explosions d'ombre ont une zone d'effet large et partiellement aleatoire : dangereuse pour ses allies si mal dirigee, devastatrice si canalisee."
))

write('tenebres', '336-kaemis', char_file(
    336, "Kaemis", "Tenebres", "Battlemage", "Umbrien", "Noctea", "Empire",
    "Bati en largeur, regard froid et methodique. Porte l'uniforme gris fer des Battlemages imperiaux avec une cape courte aux reflets d'ebene, signe de sa specialisation en combat nocturne. Cicatrice ancienne sur la joue gauche, souvenir d'une confrontation avec une guilde clandestine de Vel'Nox.",
    "Loyal, rigide, croyant sincere au Voile d'Equite. Ne doute pas, ou refuse de douter. A vu Vel'Nox avant l'Empire, dans le chaos de la nuit fondatrice, et ne veut pas que cela recommence. Philosophie simple : l'ordre imperial imparfait vaut mieux que la liberte destructrice de la Nuit.",
    "Ne apres le Vol de la Lumiere dans une Vel'Nox en reconstruction. A grandi en voyant l'Empire restaurer les infrastructures lumiineuses de la ville. Recrute par le Bureau d'Application du Voile a dix-sept ans. Aujourd'hui, il patrouille les districts ou les archives noires circulent encore, appliquant la loi feerique avec une competence redoutable et un doute inexistant.",
    "Manie la loi feerique comme une arme : ses sorts d'ombre sont encadres de runes imperiales qui les rendent precis et mesures. Combat en corps-a-corps, absorbant les attaques adverses avec des barrieres d'obscurite codifiee avant de contre-attaquer."
))

write('tenebres', '337-zorvan', char_file(
    337, "Zorvan", "Tenebres", "Artillerie", "Umbrien", "Noctea", "Dissidentes",
    "Grand et maigre, les doigts toujours legerement noircis par l'artisanat de ses projectiles d'ombre. Lunettes a double verre pour la vision nocturne perfectionnee. Porte des sangles d'equipement faites de cuir vieilli recupere dans les archives des guildes marchandes de l'ancienne Vel'Nox.",
    "Calme au tir, passionne en debat. Croit que les infrastructures de controle feerique sont des cibles legitimes avant d'etre des edifices. Ne detruit pas de la pierre : il demantele un systeme.",
    "Ancien technicien des reseaux d'information de Vel'Nox, recrute par les Dissidentes apres avoir decouvert que la neutralite de la ville servait en realite a transmettre les positions des Elus non enregistres a l'Empire. Utilise ses connaissances des systemes d'information de Vel'Nox pour cibler precisement les relais du Calendrier des Fees.",
    "Tire des projectiles d'ombre concentree depuis une distance maximale, ciblant les infrastructures et les postes de commandement adverses. Ses obus d'obscurite perdurent et s'etendent apres l'impact, rendant la zone instable pour les Capteurs qui y opereraient."
))

write('tenebres', '338-morisk', char_file(
    338, "Morisk", "Tenebres", "Tireur", "Peuple des Sables", "Deserts", "Independent",
    "Silhouette seche, peau brulee par les soleils croises du desert. Ses yeux ont une adaptation naturelle a la vision en lumiere nulle, heritage de ses ancetres qui vivaient dans les nuits profondes d'Ash'Rael. Porte des voiles legers adaptes a l'obscurite et a la chaleur simultanement.",
    "Mercenaire pur, sans allegeance doctrinale. Vient du desert mais refuse la Convergence : il a vu ce qu'ils font aux Elus qu'ils capturent lors des drains rituels, et ne servira pas un systeme qui traite les personnes comme des batteries. Paie pour tirer, pas pour croire.",
    "Ne a Ash'Rael dans une famille a la marge de la theocratie de la Convergence. Son eveil a l'element Tenebres a failli l'amener au Premier Drain rituel, mais il a fui avant la ceremonie. Depuis, il vend ses services dans toute la region, avec une preference pour les missions qui ne l'obligent pas a extraire des Elus au profit d'une faction.",
    "Tire dans l'obscurite avec une precision deconcertante, ses fleches d'ombre se courbant legerement vers les sources de chaleur pour compenser les longues distances. Peut maintenir une position invisible indefiniment dans le noir."
))

write('tenebres', '339-sphynne', char_file(
    339, "Sphynne", "Tenebres", "Assassin", "Umbrien", "Noctea", "Dissidentes",
    "Taille moyenne, corps d'une fluidite deconcertante : elle n'occupe jamais le meme espace deux fois. Ses vetements semblent faits d'ombre tissee, s'epaississant ou s'eclaircissant selon la lumiere ambiante. Les guildes imperiales de Vel'Nox ont trois silhouettes differentes dans leurs registres, toutes attribuees a la meme personne.",
    "Froide en mission, chaleureuse en dehors. Croit que certaines personnes doivent mourir pour que d'autres vivent librement, et assume ce choix sans romantisme ni culpabilite excessive. N'elimine pas par ideologie : elimine parce que quelqu'un de pire prendrait la place si elle ne le faisait pas.",
    "Ancienne archiviste des guildes noires de Vel'Nox, devenue assassin des Dissidentes apres qu'un agent imperial a liquide son reseau de protection d'Elus non enregistres. Cible en priorite les Capteurs et les agents du Bureau d'Application du Voile. Son nom n'apparait dans aucun registre du Calendrier des Fees, ce qui la rend invisible aux systemes de traque standard.",
    "Surgit d'une ombre, frappe, disparait. Ses attaques laissent une marque d'obscurite qui s'etend apres le coup, aveuglant temporairement la cible et isolant ses appels a l'aide dans un cone de silence elementaire."
))

write('tenebres', '340-vektor', char_file(
    340, "Vektor", "Tenebres", "Escrimeur", "Umbrien", "Noctea", "Empire",
    "Silhouette elegante et precise, comme taillee pour le duel. Ses mouvements sont d'une economie absolue. Porte une rapiere fine dont la lame est incrustee de fragments de verre noir recuperes dans les decombres du quartier Lumiel, detruit lors du Vol de la Lumiere.",
    "Dueliste philosophe qui croit que la loi feerique est la seule structure capable de prevenir le chaos de la nuit fondatrice. Pas cruel, ritualiste. Chaque duel est pour lui une ceremonie de l'ordre contre l'entropie. Il ne se bat pas contre une personne : il se bat contre ce qu'elle represente.",
    "Issu d'une famille de juristes de Vel'Nox qui ont survecu au Vol de la Lumiere grace a l'intervention imperiale. Forme dans l'ecole des duelistes imperiaux de Noctea, dont la methode mele loi feerique et technique de combat nocturne. Participe regulierement aux Duels du Voile, joutes codifiees qui resolvent les differends juridiques entre maisons de Vel'Nox.",
    "Dueliste de precision qui manie la lame et l'ombre avec une maitrise egale. Ses feintes sont impossibles a distinguer de ses attaques reelles, et sa lame porte une charge d'obscurite qui perturbe la concentration adverse."
))

write('tenebres', '341-draveth', char_file(
    341, "Draveth", "Tenebres", "Vanguard", "Peuple des Sables", "Deserts", "Convergence",
    "Imposant, la peau marquee de rituels de la Convergence : cicatrices geometriques en spirale sur tout le torse et les bras, chaque cicatrice representant un drain auquel il a participe. Ses yeux ont une teinte doree particuliere, effet secondaire de l'exposition prolongee a l'energie extraite lors des rituels d'Ash'Rael.",
    "Predicateur zele de la doctrine sacrificielle, convaincu que l'energie des Elus est une ressource collective que l'Empire vole autant que les individus. Preche avant le combat, combat avec la meme ferveur qu'il preche. Se voit comme la pointe de la doctrine qui penetre dans les zones de resistance.",
    "Ne a Ash'Rael, a participe a son premier Drain rituel a seize ans. Pour lui, le Vol de la Lumiere de Vel'Nox etait un acte cosmique de reequilibrage : la lumiere accumulee par une caste marchande illegitimement rendue a ceux qui en etaient prives. Aujourd'hui avant-garde doctrinale en territoire nocteen, tentant de convaincre les guildes d'ombre que leur double jeu est une forme degradee de la redistribution qu'il preeche.",
    "Ouvre la voie pour les unites de drain en absorbant les premiers chocs. Sa presence sur le front aspire l'energie adverse et la reverse immediatement a ses allies sous forme d'impulsion tenebreuse."
))

write('tenebres', '342-umbrak', char_file(
    342, "Umbrak", "Tenebres", "Gardien", "Umbrien", "Noctea", "Independent",
    "Massif et calme, peau noire profonde dont les reflets changent selon l'angle de la lumiere ou de l'ombre. Sa carapace naturelle d'ombre condensee s'est developpee autour de ses epaules et de son torse au fil des annees, rendant certains projectiles physiquement inefficaces.",
    "Protecteur instinctif sans ideologie tranchee. Protege les gens qu'il a choisi de proteger, point. N'a pas d'opinion sur la politique des Fees. A une opinion sur qui se trouve derriere lui.",
    "Ancien garde du corps prive des maisons marchandes de Vel'Nox, devenu independant apres que toutes les maisons qu'il servait ont soit ete absorbees par l'Empire, soit detruites par les guildes clandestines. Propose maintenant ses services a des tarifs exorbitants, avec une liste de clients selectionnes sur un critere simple : pas lies a la Convergence ni a la capture d'Elus.",
    "Genere des zones d'ombre impenetrables autour de lui et de ses allies. Les projectiles entrant dans sa zone d'obscurite perdent leur trajectoire et s'eteignent, et les capteurs elementaires adverses ne percoivent plus rien a l'interieur de son bouclier."
))

write('tenebres', '343-l-abyssal', char_file(
    343, "L'Abyssal", "Tenebres", "Specialiste", "Umbrien", "Noctea", "Independent",
    "Entite dont la forme humaine est incertaine : on voit un contour, une silhouette, mais les details se derobent. Certains temoins rapportent des yeux comme des trous dans la nuit. D'autres un sourire froid dans une obscurite totale. Il semble avoir ete present dans les archives de Vel'Nox bien avant le Vol de la Lumiere.",
    "Observateur millenaire qui a vu passer les regimes, les guerres, les empires de la lumiere et de l'ombre. Pas cynique : lucide. A vu le monde avant le Calendrier, dit-il. Il etait plus honnete. Pas meilleur. Plus honnete.",
    "Anomalie du Calendrier des Fees : sa date de naissance est inscrite dans les archives de la vieille republique lumineuse de Vel'Nox, mais le registre indique egalement qu'il etait deja present lors de la fondation de cette meme republique. Les Fees le classent comme 'entite temporelle instable'. Il vend des informations aux trois factions selon des criteres que personne n'a encore dechiffres completement.",
    "Manipule l'obscurite absolue de maniere incomprehensible pour les observateurs. Ses interventions sur le champ de bataille sont rares mais decisives, et toujours dans une direction que ses propres allies n'avaient pas prevue."
))

print(f"Tenebres: 13 personnages reecrits")

# ============================================================
# POISON (391-403) — Chthoniens/Ormn-Dur + Sylvans/Sylvera + Umbriens/Noctea
# Ancrage : Fosse Interdite, reseau hyperfongique, Elu Poison fondateur,
#           Faim des Racines (Sylvera), guildes noires (Noctea)
# ============================================================

write('poison', '391-venefica', char_file(
    391, "Venefica", "Poison", "Enchanteur-Soutien", "Chthonien", "Ormn-Dur", "Dissidentes",
    "Peau legerement verdatre, veines apparentes d'un violet sombre le long des avant-bras, marque de son travail prolonge avec les toxines de la Fosse Interdite. Ses cheveux sont stries de vert-gris, ses doigts toujours humides d'une secretion apaisante. Porte des contenants hermetiques remplis de son propre plasma regenerateur.",
    "Soigneuse devouee qui a accepte de contaminer son propre corps pour mieux soigner les autres. Douce mais intransigeante sur un point : elle refuse de donner ses antidotes a quiconque collabore avec l'Empire ou la Convergence. La guerison n'est pas neutre. Savoir qui on soigne, c'est un choix politique.",
    "Nee dans les quartiers profonds de Kar-Dum, dans une zone contaminee par les emanations de la Fosse Interdite. Son eveil a l'element Poison a coincide avec la decouverte qu'elle pouvait neutraliser les toxines que d'autres subissaient. Aide les Dissidentes a soigner les Elus qui ont subi des tentatives de drain par la Convergence, car les toxines de la Fosse peuvent contrer certains effets de l'extraction.",
    "Inocule des antidotes aux allies qui regenerent leurs capacites sous l'effet des poisons adverses, transformant la contamination en ressource. Ses soins fonctionnent mieux en zone toxique, ou la richesse chimique de la Fosse amplifie ses effets."
))

write('poison', '392-corruktor', char_file(
    392, "Corruktor", "Poison", "Enchanteur-Capteur", "Chthonien", "Ormn-Dur", "Empire",
    "Corps sec et efficace, regard analytique. Porte des gants hermetiques et un masque filtrant de conception imperiale. Une serie de capteurs chimiques fixes a sa ceinture analysent en permanence l'air ambiant, cartographiant les signatures elementaires Poison dans un rayon de cent metres.",
    "Scientifique applique au service de l'Empire, convaincu que la toxicologie est une science exacte qui ne devrait pas etre laissee aux bricoleurs des guildes clandestines. Trouve les Dissidentes imprudentes dans leur usage des toxines. Des gens innocents meurent quand on empoisonne sans protocole.",
    "Chimiste de Kar-Dum forme par l'Institut d'Application Elementaire de l'Empire. Specialise dans la detection et la neutralisation des Elus Poison non enregistres, ainsi que dans leur localisation par leur signature chimique distinctive. Collabore avec la technocratie de contribution de Kar-Dum, qui trouve cet arrangement pragmatiquement acceptable.",
    "Libere des nuages traceurs qui revelent les signatures elementaires cachees dans les zones de la Fosse Interdite. Ses capteurs localisent les Elus a travers les ecrans standards, rendant les refuges chimiques des Dissidentes vulnerables a ses analyses."
))

write('poison', '393-sclerotis', char_file(
    393, "Sclerotis", "Poison", "Juggernaut", "Chthonien", "Ormn-Dur", "Convergence",
    "Corps massif dont la peau a durci en plaques squameuses resistantes sous l'exposition prolongee aux toxines de la Fosse Interdite. Il ne ressent plus la douleur depuis des annees. Ses cicatrices forment des reliefs geographiques sur son torse, carte tactile de ses participations aux rituels de drain.",
    "Croit avec une conviction absolue que son corps est un vecteur de redistribution collective. A absorbe ce que la Fosse a produit, et renvoie ce qu'elle lui a donne. La philosophie de la Convergence lui semble une evidence biologique : tout systeme vivant fonctionne sur le principe de redistribution.",
    "Ne dans les zones les plus profondes de Kar-Dum, directement expose aux emanations de la Fosse Interdite depuis l'enfance. Sa tolerance aux toxines en fait un candidat ideal pour la Convergence, qui l'utilise comme vecteur dans les zones ou les rituels de drain habituels seraient interrompus par l'environnement chimique hostile. A accepte de participer a trois drains rituels, perdant a chaque fois une part de sa sensibilite.",
    "Absorbe les poisons adverses et les accumule jusqu'a les liberer en flux de drain sur les ennemis proches. Plus il absorbe, plus sa contre-attaque est violente. Sa carapace le rend presque impermeaable aux stratégies d'empoisonnement directes."
))

write('poison', '394-serphyle', char_file(
    394, "Serphyle", "Poison", "Plongeur", "Sylvan", "Sylvera", "Dissidentes",
    "Souple comme une liane, couverte d'un reseau de marques vegeto-toxiques, des motifs naturels qui rappellent les dessins des plantes urticantes de Sylvera. Ses secretions cutanees sont legerement toxiques, propriete defensive developpee apres la Faim des Racines pour dissuader les predateurs.",
    "Sauvage, impulsive, attachee aux personnes plutot qu'aux principes. Extrait les Elus pieges dans les zones de capture avec une efficacite biologique redoutable. Ne comprend pas vraiment la politique imperiale. Elle comprend les systemes naturels, et pour elle, l'Empire ressemble a une infestation.",
    "Nee a Leth'Var, dans une zone ou la Faim des Racines a laisse des terres appauvries qui ont developpe une chimie defensive particulierement agressive. Son lien a l'element Poison vient de cette chimie vegetale : elle communique avec les plantes toxiques de Sylvera comme d'autres avec des animaux. Aide les Dissidentes a extraire les Elus des zones de capture vegetale dont l'Empire a utilise les lianes memorielles pour pieger des fugitifs.",
    "Plonge dans les zones de couvert vegetal avec une agilite naturelle, empoisonnant les poursuivants via des secretions de contact. Ses toxines laissent des traces sur les ennemis qui permettent de les pister a travers n'importe quelle vegetation."
))

write('poison', '395-morbiax', char_file(
    395, "Morbiax", "Poison", "Mage-Burst", "Umbrien", "Noctea", "Independent",
    "Silhouette asymetrique, un bras plus developpe que l'autre, celui qui canalise les eruptions de poison. Sa peau est marbree de vert-noir autour de la main dominante, comme si l'element tentait de s'echapper en permanence. Ses vetements sont brules aux emplacements de ses precedentes eruptions incontrooees.",
    "Anarchique et auto-centre. La violence de ses explosions de poison lui vaut une reputation qui lui ouvre les portes et qui les ferme aussi. A refuse des contrats imperiaux, de la Convergence et des Dissidentes. Sa puissance n'est pas une ressource collective. Elle est la sienne.",
    "Ne a Vel'Nox d'une lignee qui mele heritage ombrien et contamination chimique des guildes noires de la ville. Son eveil a l'element Poison a ete si violent qu'il a detruit le laboratoire clandestin ou il se cachait des Capteurs imperiaux. Les Fees ont signale son nom comme 'anomalie de puissance classe A, capture prioritaire'. Vit depuis dans les bas-fonds entre Noctea et Ormn-Dur.",
    "Libere des eruptions de poison concentre de portee courte mais d'une puissance devastatrice. Zone d'effet large, collateral inevitable : ses allies se mefient autant que ses ennemis, et cette reputation lui convient parfaitement."
))

write('poison', '396-alcalix', char_file(
    396, "Alcalix", "Poison", "Battlemage", "Chthonien", "Ormn-Dur", "Empire",
    "Stature solide, regard d'un analyste plutot que d'un soldat. Porte une combinaison de protection chimique integree a l'uniforme imperial, innovation des ingenieurs de Kar-Dum specialises dans les missions en zone Fosse. Ses avant-bras sont equipes de diffuseurs d'antidote imperiaux.",
    "Pragmatique et loyal, croit que la technocratie de contribution de Kar-Dum et l'Empire ont des interets convergents : les deux maintiennent des systemes qui fonctionnent. Il n'est pas l'Empire. Il est la loi. La loi existe pour que les choses tiennent.",
    "Forme dans les unites chimiques de l'armee imperiale stationne a Ormn-Dur. Applique la loi feerique dans les zones profondes de Kar-Dum, notamment en pourchassant les Elus Poison non enregistres qui utilisent la complexite chimique de la Fosse Interdite comme couverture. Collabore etroitement avec les ingenieurs chthoniens de la technocratie, echangeant discretement des informations contre une protection des infrastructures.",
    "Combat en zone chimique avec une egale efficacite offensive et defensive. Ses sorts de Poison obeissent a une logique de controle imperial : precis, documentes, tracables. Peut neutraliser les toxines adverses aussi facilement qu'il en projette."
))

write('poison', '397-plagios', char_file(
    397, "Plagios", "Poison", "Artillerie", "Sylvan", "Sylvera", "Dissidentes",
    "Long et effile, les cheveux tresses dans des lianes seches de Sylvera, hommage aux arbres memoriaux devores lors de la Faim des Racines. Ses fleches sont taillees dans des bois naturellement toxiques de la foret de Leth'Var, leur poison renforce par l'energie elementaire qu'il y insuffle.",
    "Idealiste radical qui croit que la foret de Sylvera devait etre liberee du controle imperial, et que ses toxines naturelles sont un argument que les Fees ne savent pas contrer. Les plantes empoisonnent pour se defendre. C'est ce qu'il fait.",
    "Ne a Leth'Var dans une lignee de Conservateurs de la Seve qui ont documente les arbres memoriaux perdus lors de la Faim des Racines. Convaincu que les Fees ont deliberement laisse se produire la catastrophe pour effacer les archives forestieres qui documentaient leurs origines. Utilise des toxines vegetales extraites des zones les plus anciennes de Sylvera pour cibler les relais du Calendrier imperial.",
    "Tire des projectiles de seve toxique a longue portee, chaque impact contaminant la zone et reduisant la visibilite de l'adversaire. Ses fleches empoisonnees laissent des marques durables sur les infrastructures ennemies, les rendant inutilisables."
))

write('poison', '398-sylvacide', char_file(
    398, "Sylvacide", "Poison", "Tireur", "Sylvan", "Sylvera", "Independent",
    "Peau couverte de motifs vegetaux naturels rappelant les plantes carnivores de la foret devastee de Sylvera. Ses fleches sont stockees dans un carquois fabrique d'un bois vivant qui continue de secreter des toxines, qu'il renouvelle regulierement depuis les reserves de Leth'Var.",
    "Mercenaire cynique avec une sensibilite secrete aux questions de memoire forestiere. Tire pour qui le paie, mais refuse certains contrats : ceux qui impliquent de detruire ce qui reste de la foret ancienne de Sylvera, ou d'extraire des Elus pour les rituels de drain.",
    "Ne a la lisiere de Sylvera dans une zone mi-intacte mi-devastee par la Faim des Racines. Son element s'est manifeste sous forme de Poison plutot que de Plante, une divergence dans la lignee qui l'a rendu inclassable pour les Fees et donc utile comme freelance. Vend ses services dans toute la region.",
    "Tire des fleches empoisonnees depuis des positions dissimulees, changeant de position apres chaque tir. Ses poisons ralentissent progressivement les mouvements adverses, transformant chaque engagement en course d'usure qu'il est positionne pour gagner."
))

write('poison', '399-umbralix', char_file(
    399, "Umbralix", "Poison", "Assassin", "Umbrien", "Noctea", "Dissidentes",
    "Silhouette fine, peau d'un brun-noir profond qui se fond dans les ombres de Vel'Nox. Ses lames sont enduites d'un venin extrait des laboratoires clandestins de la ville, une formulation qui laisse une signature chimique indectable par les analyseurs imperiaux standard.",
    "Chirurgical. N'elimine pas par vengeance mais par necessite tactique. Ne hait pas les agents du Voile : il les retire de l'equation. Maintient une distance emotionnelle totale avec ses cibles, ce qui lui permet de fonctionner sous couverture pendant des mois avant de frapper.",
    "Forme dans les guildes d'ombre de Vel'Nox qui vendent des informations aux deux camps. A retourne sa formation au profit des Dissidentes apres avoir decouvert que les guildes transmettaient egalement les positions de ses propres contacts a l'Empire. Specialiste des operations longue duree : il s'infiltre dans les structures imperiales de Noctea, attend, apprend, puis frappe les noeuds les plus critiques du reseau.",
    "Attaque avec des lames empoisonnees dont le venin s'active a retardement, permettant a la cible de s'eloigner avant que l'effet soit perceptible. Difficile a relier a l'attaque apres le fait, caracteristique precieuse dans les guildes d'ombre de Vel'Nox."
))

write('poison', '400-caustius', char_file(
    400, "Caustius", "Poison", "Escrimeur", "Chthonien", "Ormn-Dur", "Empire",
    "Dueliste elance dont la lame est gravee de formules chimiques en guise d'ornementation, hommage a l'esthetique technocratique de Kar-Dum. Ses gants sont traites pour resister aux acides et aux toxines de contact. Sa posture de garde est d'ecole, formee dans la tradition des duelistes imperiaux du Bureau d'Application.",
    "Methodiste. Respecte les regles du duel comme une forme de loi vivante. Croit que l'Empire a raison parce que l'Empire a de l'ordre, et que l'ordre vaut mieux que n'importe quelle liberte chaotique. La Fosse Interdite existe parce que quelqu'un a refuse les regles. Il ne fera pas la meme erreur.",
    "Ne a Kar-Dum dans une famille de juristes technocratiques. Forme a la fois dans la tradition chimique des ingenieurs chthoniens et dans les arts martiaux de l'Empire. Patrouille les zones profondes d'Ormn-Dur pour identifier les Elus Poison non enregistres qui utilisent la Fosse comme base d'operation. Sa lame peut etre enduiite d'acide chimique reglementaire, documente, dose, legal.",
    "Dueliste precis qui utilise son acide de lame pour corroder les defenses adverses progressivement. Chaque echange reduit la resistance de l'adversaire, rendant les affrontements prolonges inevitablement a son avantage."
))

write('poison', '401-gorgatix', char_file(
    401, "Gorgatix", "Poison", "Vanguard", "Peuple des Sables", "Deserts", "Convergence",
    "Corps monumental marque des cicatrices du Premier Drain d'Ash'Rael. Ses yeux ont une teinte verdatre anormale, effet secondaire de son exposition prolongee aux toxines qu'il absorbe pour la Convergence. Ses veines sont proeminentes, violettes, pulsant sous une peau translucide.",
    "Avant-garde ideologique de la Convergence dans les zones toxiques. Le poison que votre corps produit appartient au monde, dit-il. Croit sincerement que les Elus Poison sont des systemes de distribution naturels qui ont simplement besoin d'etre reorientes vers le collectif.",
    "Ne a Ash'Rael, forme dans la doctrine du manque transfigure. La Convergence l'utilise comme avant-garde dans les zones chimiquement hostiles : son exposition aux toxines rituelles le rend partiellement immunise aux poisons naturels. Il precede les equipes de drain dans la Fosse Interdite et dans les forets de Sylvera pour neutraliser les defenses chimiques naturelles des Elus en fuite.",
    "Penetre dans les zones toxiques sans ralentissement, absorbant les poisons ambiants pour les retourner contre les ennemis. Sa presence en premiere ligne permet aux unites de drain de la Convergence de travailler en securite relative derriere lui."
))

write('poison', '402-antidotrix', char_file(
    402, "Antidotrix", "Poison", "Gardien", "Chthonien", "Ormn-Dur", "Independent",
    "Robuste et calme, peau de la meme couleur terreuse des profondeurs de Kar-Dum. Ses bras portent des bracelets d'antidote qu'elle peut activer d'une pression, systeme artisanal developpe apres des annees de travail dans les zones de la Fosse Interdite. Elle degage une legere odeur d'herbe amere.",
    "Protectrice pragmatique, garante de la sante des equipes qui travaillent dans les zones toxiques de Kar-Dum. N'est pas la pour l'ideologie. Est la pour que les gens qui entrent en sortent. Travaille pour quiconque requiert une protection contre les toxines, a condition que le contrat ne l'implique pas dans un raid contre des Elus.",
    "Ingenieure chimiste de la technocratie de contribution de Kar-Dum, specialisee dans les operations de la Fosse Interdite depuis que l'Elu Poison fondateur a apprivoise la zone apres le desastre. A developpe des protocoles de protection que l'Empire a tente de lui acheter. Elle a refuse, preferant rester independante. Ses antidotes sont les meilleurs disponibles dans toute la region d'Ormn-Dur.",
    "Genere des zones de neutralisation chimique qui protegent ses allies des poisons adverses. Sa presence sur le champ de bataille rend les strategies toxiques ennemies considerablement moins efficaces, protegeant meme les Elus vulnerables contre les tentatives de drain par toxine."
))

write('poison', '403-chimere-toxique', char_file(
    403, "La Chimere Toxique", "Poison", "Specialiste", "Inconnu", "Multi-region", "Independent",
    "Corps qui semble avoir absorbe des proprietes biologiques de plusieurs especes : peau sylvane, pigmentation chthonienne, resistance ombrienne. Personne ne sait avec certitude son espece d'origine. Ses formes varient legerement selon les temoins, comme si elle s'adaptait a l'observateur.",
    "Entite qui a transcende les allegances regionales au profit d'une comprehension systemique du poison comme force de transformation. N'est pas un danger, dit-elle. Est un processus. Le poison transforme. C'est sa nature.",
    "Anomalie du Calendrier des Fees sans region d'origine identifiable. Les archives imperiales la classent comme 'entite multi-elementaire Poison, origine inconnue, allegeance inconnue, dangerosite extreme'. Les Dissidentes pensent qu'elle s'est formee spontanement dans la Fosse Interdite lors de l'apprivoisement par l'Elu Poison fondateur : une conscience nee de la catastrophe elle-meme, temoignant que le monde peut encore produire des Elus que le Calendrier ne prevoit pas.",
    "Manipule les toxines avec une sophistication que les analyseurs standards ne peuvent pas predire. Ses strategies toxiques semblent s'adapter en temps reel a mesure qu'elles rencontrent des resistances, rendant toute contre-mesure obsolete au moment ou elle est deployee."
))

print(f"Poison: 13 personnages reecrits")
print(f"Total: 26 personnages")
