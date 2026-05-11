#!/usr/bin/env python3
"""Rewrite Combat (481-493) + Normal (511-523) with PDF lore."""
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
# COMBAT (481-493) — Hommes-Liens/Isthme + Pyriens/Varkhol
# Ancrage : La Saturation des Elus, anomalies de Virex,
#           bureaucratie adaptative, Ash'Rael doctrine opposee,
#           Les Hommes-Liens comme pont entre tous les elements
# ============================================================

write('combat', '481-pacificatrice', char_file(
    481, "Pacificatrice", "Combat", "Enchanteur-Soutien", "Homme-Lien", "Isthme", "Dissidentes",
    "Femme de stature moyenne, musculature definie par des annees de discipline physique, peau marquee de cicatrices de formation dans plusieurs arts martiaux de Virex. Ses mains sont ses armes et ses soins : calleuses, precisses, capables autant de stabiliser une fracture que de mettre fin a un assaut.",
    "Pragmatique et humaine, croit que le combat peut etre un outil de paix si on sait l'utiliser avec mesure. Refuse l'ideologie du sacrifice de la Convergence et les mensonges du Voile d'Equite avec la meme serenite. Les Dissidentes lui semblent les seuls a traiter le combat comme ce qu'il est : un cout, pas une gloire.",
    "Nee a Virex dans les zones d'anomalie elementaire de la Saturation des Elus, ou le temps ralentit par endroits et ou des plantes poussent sans sol. Sa signature Combat s'est manifestee non pas comme un element mais comme une capacite de resonance avec toutes les forces physiques en presence. Soigne les combattants des Dissidentes apres les operations en utilisant des techniques developpees dans les ecoles martiales de Virex qui integrent la Saturation comme contexte d'entrainement.",
    "Restaure les capacites physiques de ses allies en canalisant l'energie Combat de facon redistributive. Ses soins sont des ajustements de posture, de tension musculaire, de rythme respiratoire qui permettent a un combattant epuise de retrouver immediatement sa pleine efficacite."
))

write('combat', '482-protocole', char_file(
    482, "Protocole", "Combat", "Enchanteur-Capteur", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien d'une ordonnance physique presque artificielle : chaque geste suit un protocole etabli, chaque position correspond a une procedure. Porte l'uniforme imperial avec des annotations manuscrites en marge, notant en permanence les signatures de combat des individus qu'il observe.",
    "Bureaucrate du combat. Croit que l'enregistrement est la forme la plus avancee de la civilisation. Les Elus non enregistres ne sont pas libres : ils sont des variables non controolees dans un systeme qui a besoin de toutes ses variables pour fonctionner. L'Empire leur offre une forme.",
    "Technicien de la surveillance de Virex forme par l'administration imperiale massive qui a une presence administrative dense dans cette ville de passage. Son don Combat lui permet de lire les signatures physiques des combattants comme des textes : il detecte l'element d'un Elu a la facon dont son corps se deplace, avant meme qu'il utilise ses capacites. Recense les Elus de Virex pour le Calendrier, profitant du flux de passage de la ville.",
    "Identifie les Elus par leur signature de mouvement avant qu'ils ne se revelent elementairement. Ses rapports de capture sont les plus precis du Bureau d'Application dans la region d'Isthme, car il lit le corps avant l'element."
))

write('combat', '483-marteau-fer', char_file(
    483, "Marteau de Fer", "Combat", "Juggernaut", "Pyrien", "Varkhol", "Convergence",
    "Pyrien massif dont les epaules semblent porter plus que son propre poids : la doctrine de la Convergence y est inscrite en cicatrices rituelles. Ses poings sont les armes d'un homme qui a appris a frapper avant de savoir quoi proteger, et qui a ensuite decide que frapper pour le collectif etait la seule justification valable.",
    "Croit que le combat est une ressource collective comme n'importe quelle autre : sa puissance de frappe appartient a ceux qui en ont besoin, pas a lui seul. La Convergence lui a donne un cadre pour une conviction qu'il avait avant de les rejoindre : personne ne devrait accumuler une force que d'autres n'ont pas.",
    "Ne a Khar-Vurn dans le quartier ouvrier du Parti du Feu, enfant de forgerons qui ont vu leurs lignees d'Elus confisquees par le Calendrier pour les redistribuer vers d'autres regions. A rejoint la Convergence non par ideologie abstraite mais par reaction directe : si les Fees peuvent prendre les Elus de Varkhol pour les donner ailleurs, il peut prendre sa puissance de combat et la donner a la doctrine qui reequilibre le monde.",
    "Juggernaut de corps-a-corps qui utilise chaque impact comme amplificateur du suivant. Sa doctrine de combat reflette la Convergence : il absorbe les coups adverses et les transforme en puissance, redistribuant l'energie recue sous forme de frappe devastatrice."
))

write('combat', '484-percuteur', char_file(
    484, "Percuteur", "Combat", "Plongeur", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien d'une rapidite desorientante, corps adapte au deplacement en milieu dense : les zones d'anomalie elementaire de Virex, ou les lois physiques normales ne s'appliquent pas toujours, lui ont appris a se mouvoir dans des conditions changeantes. Ses cicatrices viennent de traversees de zones ou le temps ralentissait assez pour laisser des marques.",
    "Impulsif et loyal, specialise dans l'extraction rapide de situations impossibles. N'est pas un theoricien : il est celui qui arrive quand tout le monde est convaincu qu'il n'y a plus de sortie. Son don Combat lui permet de trouver les angles de deplacement que personne d'autre ne voit.",
    "Ancien coursier des reseaux clandestins de Virex, la ville ou tous les flux se croisent et ou les Dissidentes ont des reseaux profonds malgre la presence administrative massive de l'Empire. Son don s'est manifeste dans les zones d'anomalie temporelle de la Saturation des Elus, ou son sens du deplacement s'est affine dans des conditions physiques impossibles. Extrait les Elus des zones de surveillance en exploitant les memes anomalies que les Fées n'ont pas encore cartographiees.",
    "Plonge dans les zones les plus denses de surveillance en utilisant les angles de deplacement que les corps normaux ne peuvent pas suivre. Emerge de points improbables, depositant ses proteges avant que les Capteurs aient localise son point d'entree."
))

write('combat', '485-berserkat', char_file(
    485, "Berserkat", "Combat", "Mage-Burst", "Pyrien", "Varkhol", "Independent",
    "Pyrien dont la signature Combat en eruption laisse des traces visibles sur son propre corps : brulures legeres, micro-fractures qui se cicatrisent immediatement, veines saillantes d'une intensite hors norme. Ses yeux passent du marron ordinaire a un dorado intense lors des eruptions les plus violentes.",
    "Explosif et instable, refuse toute domestication. A ete recrute par le Parti du Feu, par la Convergence, par les Dissidentes. A refuse les trois parce qu'il ne veut pas que sa puissance soit un argument dans une guerre qui n'est pas la sienne, mais ne peut pas s'empecher d'intervenir quand quelque chose lui semble injuste.",
    "Ne dans les forges de Khar-Vurn, son eveil a l'element Combat s'est produit lors d'un accident industriel qui a detruit une section entiere d'une forge. Les Fees l'ont classe 'anomalie de puissance classe A' : priorite de capture maximale. Il vit depuis en evitant simultanement les Capteurs imperiaux et la Convergence qui voudrait utiliser ses eruptions comme rituel de drain. Sa puissance combat est authentiquement la sienne.",
    "Libere des eruptions de puissance combat brute qui n'obeissent a aucune technique formelle. Devastatrices en zone rapprochee, elles rendent ses alliees aussi vulnerables que ses ennemis si mal controlees."
))

write('combat', '486-disciplinaire', char_file(
    486, "Disciplinaire", "Combat", "Battlemage", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien a la posture d'un officier forme dans les ecoles militaires de Virex que l'Empire a converties en academies d'application du Voile. Cicatrices de formation propres et symetriques, temoignant d'un entrainement methodique plutot que de combats improvises. Porte l'uniforme imperial avec une precision qui est elle-meme un message.",
    "Disciplinaire dans le sens literal : il croit que la discipline est la seule reponse au chaos de la Saturation des Elus. Virex sans le Calendrier serait uninhabitablle. Les anomalies elementaires de la ville le confirment chaque jour. L'Empire maintient ce qui rend Virex vivable.",
    "Forme dans les academies militaires de Virex que l'Empire a etablies apres la Saturation des Elus, specifiquement pour gerer les crises elementaires locales. Son element Combat lui permet d'adapter sa technique de combat a l'element adverse en temps reel : il a appris a combattre dans toutes les zones d'anomalie de Virex, ou les regles changent selon l'endroit ou on se trouve. Applique la loi feerique avec une efficacite adaptative rare.",
    "Combat avec une technique qui s'adapte automatiquement a l'element et aux conditions du terrain. Dans les zones d'anomalie de Virex, sa flexibilite tactique le rend redoutable la ou les combattants specialises perdent leurs reperes."
))

write('combat', '487-bastion', char_file(
    487, "Bastion", "Combat", "Artillerie", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien dont le corps est une architecture de resistance : large, stable, chaque position qu'il prend semble impossible a deloger. Ses bras fonctionnent comme des catapultes naturelles, propulsant des charges de puissance combat avec une force et une precision acquises dans les zones les plus denses des anomalies de Virex.",
    "Defenseur avant tout, mais compris que la meilleure defense est parfois de detruire les infrastructures qui permettent a l'Empire de controler les flux de Virex. Tire avec methode, en ciblant les noeuds d'information plutot que les individus. Des gens dirigent des systemes. Detruire les systemes sauve plus de gens que d'en eliminer quelques-uns.",
    "Ancien ingenieur des infrastructures de Virex, specialise dans les zones d'anomalie elementaire de la Saturation des Elus. Son don Combat lui a permis de comprendre les points de faiblesse structurelle de n'importe quel systeme physique : il voit les fractures avant qu'elles n'existent. Utilise cette connaissance pour cibler precisement les relais d'information du Calendrier dans Virex, la ville ou l'Empire a sa plus grande presence administrative.",
    "Propulse des charges de puissance combat sur des cibles structurelles a distance, chaque impact calcule pour creer une reaction en chaine dans le systeme cible. Ses bombardements semblent aleatoires mais suivent une logique d'ingenierie inverse que les adversaires dechiffrent trop tard."
))

write('combat', '488-precision', char_file(
    488, "Precision", "Combat", "Tireur", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien d'une economie corporelle absolue : pas un gramme de masse superflu, pas un mouvement inutile. Ses tirs n'ont pas besoin d'arme : son element Combat lui permet de projeter des impulsions de puissance pure avec une precision chirurgicale. Porte un equipement minimal, sa precision venant entierement de son entrainement.",
    "Mercenaire d'une ethique personnelle stricte qui refuse les contrats de capture d'Elus et ceux qui impliquent des dommages collecteraux. Tire pour resoudre des problemes precis, pas pour faire de la rhetorique par les armes. Sa reputation est basee sur le fait qu'il ne rate jamais sa cible intentionnelle et n'en touche jamais d'autre.",
    "Ancien formateur des academies militaires de Virex devenu independant quand l'Empire a commence a utiliser ces academies pour former des Capteurs plutot que des defenseurs. Son element Combat lui permet de concentrer des impulsions de puissance en projectiles de precision absolue. La Saturation des Elus de Virex lui a appris que dans un environnement ou toutes les forces physiques sont perturbees, la precision est la seule constante fiable.",
    "Projette des impulsions de puissance combat avec une precision qui ne laisse aucune marge d'erreur. Ses tirs traversent les barrieres elementaires en ciblant uniquement le point de vulnerabilite physique de la cible, independamment de ses protections elementaires."
))

write('combat', '489-ombre-de-poing', char_file(
    489, "Ombre de Poing", "Combat", "Assassin", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien dont la signature physique au combat est presque imperceptible jusqu'a l'impact : il se deplace comme une non-presence jusqu'au moment ou le coup arrive. Ses mains portent des cicatrices de discipline de plusieurs arts martiaux de Virex, etudes aupres de maitres de differentes ecoles que la Saturation des Elus a concentrees dans la ville.",
    "Operationnel et non-ideologique. Elimine les agents de controle du Calendrier qui operent dans les reseaux clandestins de Virex, ceux qui se font passer pour des marchands ou des fonctionnaires. Ne croit pas au grand recit des Dissidentes mais fait confiance aux individus qui le dirigent. Sa loyaute est personnelle, pas doctrinale.",
    "Forme dans les quartiers les plus denses de Virex, ou la Saturation des Elus a cree des zones ou la detection elementaire standard ne fonctionne pas. Son element Combat lui permet de se deplacer de facon a minimiser sa signature physique, rendant sa presence imperceptible jusqu'au contact. Les Dissidentes l'utilisent pour des operations de precision contre le reseau d'information imperial de Virex.",
    "S'approche de sa cible sans signature perceptible, frappe depuis une distance de contact avec une puissance concentree qui ne laisse pas de survivant non intentionnel. Dans les zones d'anomalie de Virex, son absence de signature elementaire le rend invisible a tous les systemes de detection standards."
))

write('combat', '490-championnat', char_file(
    490, "Championnat", "Combat", "Escrimeur", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien dont la stature est celle d'un champion de competittion : presentable, impressionnant, chaque geste portant le poids de la representation institutionnelle. Porte l'uniforme des Escrimeurs imperiaux avec les insignes du Championnat de Virex, competition officielle sponsorisee par l'Empire pour legitimiser sa presence a Isthme.",
    "Croit que la loi feerique est la meilleure regle du jeu disponible et que les competitions officielles imperial sont une forme de justice meritocratique. Le Voile d'Equite distribue les Elus equitablement : le Championnat de Virex prouve que l'Empire recompense la competence. Son cynisme s'exprime dans l'espace entre ce qu'il dit en public et ce qu'il pense en prive.",
    "Champion des tournois officiels de Virex organises par l'Empire pour maintenir son emprise culturelle sur la ville de toutes les confluences. Sa victoire dans ces competitions lui a valu un recrutement dans les Escrimeurs imperiaux avec des avantages considerat : un enregistrement favorablle au Calendrier, une position sociale enviable. Il sait ce qu'il a accepte. Il a decide que ca valait le cout.",
    "Dueliste de representation qui utilise la legitimite du Championnat comme arme sociale autant que physique. Au combat, son element Combat lui permet d'anticiper les styles de n'importe quel adversaire : il a combattu tous les arts martiaux de Virex en competition."
))

write('combat', '491-avant-poste', char_file(
    491, "Avant-Poste", "Combat", "Vanguard", "Pyrien", "Varkhol", "Convergence",
    "Pyrien de la frontiere entre Varkhol et Isthme, corps forme par le double heritage martial des forges pyriens et des ecoles de Virex. Porte les marques des rituels de la Convergence superposes aux tatouages traditionnels de Khar-Vurn, comme deux langues ecrites sur la meme peau.",
    "Avant-garde doctrinale de la Convergence dans les zones ou Varkhol rencontre Isthme. Le combat, dit-il, est la forme la plus honnete de contribution collective : chaque coup donne est une ressource offerte au systeme. La Convergence a simplement formalise ce que les forges de Khar-Vurn faisaient deja.",
    "Ne a la frontiere de Varkhol et d'Isthme, dans une lignee qui a participe au mouvement de radicalisation de la doctrine feerique en theologie sacrificielle, ce que les Peuples des Sables ont appele le Premier Drain. Pour lui, les forges de Khar-Vurn et les rituels de drain de la Convergence sont deux expressions du meme principe : transformer ce qu'on a en quelque chose d'utile pour le collectif. Precede les equipes de drain dans les zones de la Saturation des Elus.",
    "Ouvre la voie dans les zones denses d'anomalie elementaire de Virex et de Varkhol, absorbant les premiers chocs et convertissant l'energie des impacts en impulsions redistributives pour ses allies de la Convergence."
))

write('combat', '492-bouclier-vivant', char_file(
    492, "Bouclier Vivant", "Combat", "Gardien", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien dont le corps entier est une surface de protection : large, dense, capable d'interposer sa masse entre n'importe quelle force et ce qu'il protege. Ses bras sont des paravents naturels. Ses cicatrices sont la carte de toutes les choses qu'il a protegees.",
    "Protecteur pur sans agenda politique. Son element Combat lui permet de reagir a toutes les forces physiques en presence, qu'elles soient elementaires ou purement physiques. Protege pour qui il choisit, avec les memes conditions : pas de capture d'Elus, pas de collaboration avec les drains de la Convergence.",
    "Veteran de plusieurs conflits dans les zones d'anomalie de Virex, ou les lois physiques changeantes l'ont force a developper une protection adaptative. Son element Combat lui permet d'interposer sa masse dans les trajectoires les plus improbables, reagissant aux forces physiques avant meme de les avoir consciemment percues. Travaille pour des clients independants qui ont besoin d'une protection sans allogance.",
    "Interpose son corps entre la source d'attaque et ses allies avec une anticipation qui semble surnaturelle. Son element Combat lui permet de traiter toute force physique comme une trajectoire lisible : aucune attaque ne passe sans que son corps ait eu l'option de l'intercepter."
))

write('combat', '493-supreme', char_file(
    493, "Supreme", "Combat", "Specialiste", "Inconnu", "Multi-region", "Independent",
    "Corps qui semble avoir integre les techniques de combat de toutes les regions du monde : posture de Khar-Vurn, agilite de Virex, solidite de Kar-Dum, fluidite de Neris. Son element Combat est d'une purete et d'une polyvalence que les theoriciens des academies de Virex utilisent comme reference theorique.",
    "Ancien combattant devenu theorie vivante du combat. Ne cherche plus a gagner des batailles mais a comprendre ce que le combat revele du monde. A combattu pour l'Empire, contre l'Empire, avec la Convergence, contre la Convergence. L'unique conclusion qu'il en a tiree : personne n'a raison pour les bonnes raisons.",
    "Anomalie du Calendrier que les Fees classent comme 'entite de puissance Combat indeterminee, allégeance inconnue'. A ete recrute par toutes les factions et a servi chacune le temps de comprendre ses failles. Vit maintenant dans les zones d'anomalie de Virex, que la Saturation des Elus a rendu impraticables pour la surveillance standard, enseignant discretement les combattants qui ne savent pas encore quelle faction ils vont rejoindre.",
    "Maitrise toutes les techniques de combat elementaire et physique avec une aisance qui desorganise les adversaires formes dans un seul style. Ses interventions reconfigurent le terrain tactique de facon que personne n'avait anticipee."
))

print(f"Combat: 13 personnages reecrits")

# ============================================================
# NORMAL (511-523) — Hommes-Liens/Isthme
# L'element Normal = Hommes-Liens adaptes a la coexistence avec tous les elements
# Ancrage : Saturation des Elus, anomalies de Virex, bureaucratie instable,
#           pré-avatars, integration comme philosophie politique
# ============================================================

write('normal', '511-mediane', char_file(
    511, "Mediane", "Normal", "Enchanteur-Soutien", "Homme-Lien", "Isthme", "Dissidentes",
    "Femme aux traits exactement ordinaires en surface, mais dont la presence stabilise les zones d'anomalie elementaire autour d'elle : les plantes qui poussaient sans sol se posent quand elle s'approche, le temps qui ralentissait reprend son rythme normal. Son element Normal est une sorte d'ancrage physique du monde.",
    "Soigneuse qui utilise sa capacite de normalisation elementaire pour proteger les Elus dans les zones de Saturation de Virex, ou les anomalies peuvent etre dangereuses pour les Elus jeunes. Croit que le monde n'a pas besoin d'etre plus element que necessaire : un espace normal permet a tout le monde de respirer.",
    "Nee dans une zone d'anomalie de la Saturation des Elus de Virex, dans un quartier ou le feu et l'eau coexistaient et ou des naissances anormales etaient regulieres. Son element Normal s'est manifeste comme une capacite de normalisation qui a calme les anomalies autour d'elle depuis l'enfance. Les Fees ont decide de ne pas l'enregistrer, considerant son element comme trop peu strategique. Les Dissidentes l'ont recrutee precisement pour cette raison : elle protege les zones de refuge en les rendant elementairement invisibles.",
    "Cree des zones de stabilite elementaire autour de ses allies qui neutralisent les effets d'anomalie ambiante. Dans les zones de Saturation, sa presence est un refuge : les elements perturbateurs se calment, les signatures elementaires se normalisent, rendant ses proteges invisibles aux capteurs qui cherchent des anomalies."
))

write('normal', '512-normativus', char_file(
    512, "Normativus", "Normal", "Enchanteur-Capteur", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien dont l'apparence est tellement dans la norme qu'on l'oublie immediatement apres l'avoir vu. C'est un avantage operationnel qu'il exploite : il passe dans n'importe quel contexte social sans declencher de reaction. Ses instruments de detection sont aussi ordinaires en apparence que lui.",
    "Croit sincereement que la normalisation que l'Empire impose via le Calendrier est une forme de soin collectif. Sans le Voile d'Equite, Virex serait uninhabitable : les anomalies de la Saturation en sont la preuve. L'Empire maintient le cadre qui permet a tout le reste d'exister.",
    "Agent de la surveillance ordinaire de Virex, specialise dans la detection des Elus dont la signature elementaire est masquee par les anomalies de la Saturation. Son element Normal lui permet de percevoir par soustraction : il detecte les Elus en identifiant ce qui ne se normalise pas, ce qui reste anormal meme dans les zones d'anomalie. Un paradoxe operationnel que peu d'agents imperiaux maitrisent.",
    "Detecte les Elus en identifiant les anomalies dans les anomalies : ce qui reste elementairement actif dans les zones ou tout devrait etre normalise. Sa detection est la plus efficace precisement dans les zones de Saturation que les autres Capteurs trouvent illisibles."
))

write('normal', '513-roc-d-isthme', char_file(
    513, "Roc d'Isthme", "Normal", "Juggernaut", "Homme-Lien", "Isthme", "Convergence",
    "Homme-Lien d'une solidite monolithique, corps comme taille dans la pierre de Virex, dont les fondations integrent des materiaux de toutes les regions du monde confluentes en Isthme. Sa peau porte des tatouages de la doctrine de la Convergence superposes aux motifs de plusieurs cultures de passage.",
    "Croit que l'element Normal de Virex est la preuve que la redistribution est une loi naturelle : quand tous les elements se concentrent, ils finissent par se niveler. La Convergence accelere simplement ce processus. Personne n'accumule indefiniment ce que le monde a besoin de repartir.",
    "Ne dans les quartiers de confluence de Virex, la ou les flux marchands de toutes les regions se croisent et ou la Saturation des Elus a produit des naissances que personne ne comprend entierement. Recrute par la Convergence qui lui a presente la saturation de Virex comme une demonstration naturelle de leur doctrine : trop d'accumulation produit le chaos. Sert comme Juggernaut dans les operations de drain a Virex, dont la complexite elementaire necessite quelqu'un d'immovable.",
    "Absorbe toutes les energies elementaires adverses avec une equivalence parfaite : son element Normal lui permet de les traiter comme equivalentes, les accumulant sans preference avant de les liberer en force brute de percussion."
))

write('normal', '514-coureur', char_file(
    514, "Coureur", "Normal", "Plongeur", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien d'une rapidite desarmante, capable de traverser les zones d'anomalie temporelle de Virex sans ralentissement apparent. Son corps s'est adapte aux conditions physiques variables de la Saturation : les zones ou le temps ralentit ne le ralentissent pas, les zones d'accelération ne l'accelerent pas.",
    "Coureur de reseaux clandestins, specialise dans le transport d'information et de personnes a travers les zones d'anomalie de Virex que la surveillance imperiale ne sait pas lire. Ne theorise pas sur la politique : court. La politique, c'est ce qu'il transporte. Lui, il court.",
    "Messenger des reseaux des Dissidentes a Virex, exploitant les zones d'anomalie temporelle de la Saturation des Elus pour traverser des espaces surveilles sans etre detecte. Son element Normal lui a permis de developper une resistance aux effets des anomalies qui lui permet de courir la ou d'autres se figent ou s'accelerent involontairement. Connait chaque couloir, chaque anomalie, chaque zone aveugle de Virex.",
    "Plonge dans les zones d'anomalie elementaire de Virex a une vitesse que son element Normal lui permet de maintenir constante malgre les conditions physiques variables. Ses proteges traversent avec lui, proteges de l'anomalie ambiante par sa normalisation en deplacement."
))

write('normal', '515-absolu', char_file(
    515, "Absolu", "Normal", "Mage-Burst", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien dont les eruptions d'element Normal paradoxalement devastatrices : il normalise la zone au-dela de ce que les structures physiques peuvent supporter. Les materiaux enchantes se defont. Les barrières elementaires s'effondrent. Les signatures qui se cachaient se revelent. Son element est une violence de la norme.",
    "Philosophiquement trouble par sa propre puissance. L'element Normal est suppose etre l'element le moins puissant. Il a prouve que c'est faux : la normalisation forcee d'une zone elementairement saturee cree une explosion. Les Fees ne l'ont pas prevu. Personne ne l'avait prevu.",
    "Ne dans la zone la plus dense de la Saturation des Elus de Virex, dans un quartier ou la coexistence de tous les elements avait cree une pression elementaire extreme. Son eveil a l'element Normal s'est produit comme une decompression : tout ce qui s'etait accumule autour de lui s'est normalise instantanement, creant une vague de destruction equivalente a une explosion elementaire majeure. Les Fees l'ont classe 'anomalie critique, risque de saturation inverse'. Il vit dans les zones les plus denses de Virex, les seules ou sa puissance ne peut pas se declencher accidentellement.",
    "Libere des ondes de normalisation forcee qui devastent les zones de haute saturation elementaire. Dans les zones ordinaires, son element semble peu dangereux. Dans les zones d'anomalie comme Virex, il est l'arme la plus destructrice disponible."
))

write('normal', '516-standard', char_file(
    516, "Standard", "Normal", "Battlemage", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien dont la posture au combat est la reference pedagogique de toutes les academies militaires de Virex : les manuels l'utilisent comme illustration du positionnement correct. Son uniforme imperial est d'une conformite absolue. Il est litteralement le standard.",
    "Croit que la standardisation est la forme la plus elevee de la civilisation. Le Calendrier des Fees, les uniformes imperiaux, les protocoles de combat : autant de normes qui permettent a des milliers de personnes de cooperer sans se detruire. Les Dissidentes voient de la liberte dans le chaos. Lui voit de la souffrance.",
    "Instructeur senior des academies militaires de Virex converti en officier operationnel de l'Empire. Son element Normal lui permet d'adapter parfaitement sa technique a n'importe quel contexte elementaire, ce qui en fait un agent extraordinairement efficace dans les zones d'anomalie de la Saturation. Applique la loi feerique en utilisant sa connaissance intime de Virex et de ses anomalies.",
    "Combat avec une technique qui est la reference de son element : parfaitement adapte a toutes les conditions elementaires, maximalement efficace dans toutes les zones de Virex. Son element Normal lui permet de contre-combattre n'importe quel element adverse avec la technique optimale."
))

write('normal', '517-catapulte-d-isthme', char_file(
    517, "Catapulte d'Isthme", "Normal", "Artillerie", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien dont les bras sont des architectures d'ingenierie martiale : chaque muscle, chaque tendon, chaque os a ete developpe avec une intention precise de propulsion maximale. Son element Normal lui permet de concentrer et de lancer des charges de puissance elementaire normalisee avec une force qu'aucun element unique n'atteint.",
    "Ingenieur du combat a distance qui croit que la meilleure facon de liberer Virex de la presence administrative imperiale est de demanteler systematiquement ses infrastructures de controle. Tire avec patience et methode, une infrastructure a la fois.",
    "Ancien ingenieur de construction de Virex qui a compris que ses competences de calcul structurel s'appliquaient aussi a la destruction. Son element Normal lui permet de concentrer toutes les forces elementaires presentes dans une zone en une charge unique normalisee, la projetant avec une puissance que chaque element pris separement ne produirait pas. A rejoint les Dissidentes apres avoir realise que la plupart des infrastructures qu'il construisait servaient la surveillance imperiale.",
    "Propulse des charges de puissance normalisee qui ne peuvent pas etre contrees par des protections elementaires specifiques : son element traite toutes les barrieres comme equivalentes et les traverse avec la meme facilite."
))

write('normal', '518-fade', char_file(
    518, "Fade", "Normal", "Tireur", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien dont la signature elementaire est tellement ordinaire qu'elle disparait dans le bruit de fond. Les instruments de detection ne le capte pas. Les memoires ne le retiennent pas. Il existe, mais son existence n'enregistre pas dans les systemes construits pour percevoir les Elus.",
    "Mercenaire dont la valeur repose entierement sur son invisibilite systemique. Ne cherche pas la gloire, ni meme la reconnaissance. Travaille pour qui a un probleme precis a resoudre et qui ne peut pas se permettre de laisser de trace. Il tire. Le tir n'est relie a rien dans aucun registre.",
    "Anomalie du Calendrier des Fees qui a ete enregistree comme 'normal' et classee non-prioritaire, ce qui lui a donne une liberte que les autres Elus n'ont pas. Son element Normal, associe a une personnalite naturellement effacee, l'a rendu objectivement invisible aux systemes de surveillance. Vend ses services de precision a Virex et dans toute la region, dans une complète indetermination politique.",
    "Tire depuis des positions que les systemes de detection ne considerent pas comme des postes potentiels parce que sa signature elementaire n'y est pas perceptible. Sa presence est deniable meme apres le tir."
))

write('normal', '519-ordinaire', char_file(
    519, "Ordinaire", "Normal", "Assassin", "Homme-Lien", "Isthme", "Dissidentes",
    "Homme-Lien dont le nom est une strategie operationnelle : il est objectivement ordinaire en apparence, en signature elementaire, en comportement mesurable. Les agents imperiaux qui l'ont croise dans les rues de Virex n'ont pas de description utilisable a lui donner.",
    "Accepte que sa force soit son insignifiance apparente. N'elimine pas les individus importants mais les petits engrenages que personne ne surveille et sans lesquels les grandes machines s'arretent. Les Dissidentes lui ont appris que les vraies vulnerabilites d'un systeme sont toujours dans les gens ordinaires qui font le travail invisible.",
    "Ancien fonctionnaire de la bureaucratie de Virex qui a compris, en tenant les registres depuis l'interieur, comment le systeme imperial de surveillance reposait sur des dizaines de collaborateurs ordinaires qui ne savaient pas exactement ce qu'ils faisaient collectivement. A rejoint les Dissidentes pour retirer ces engrenages un par un. Son element Normal lui permet de se deplacer dans n'importe quelle structure administrative ou militaire sans declencher d'alerte.",
    "Opere dans les systemes fermés de Virex en passant pour un employe ordinaire. Ses eliminations visent les fonctions plutot que les personnes, et prennent du temps plutot que de la vitesse. Ses actions ne sont reliees a un Elu qu'en cherchant tres longtemps."
))

write('normal', '520-cadence', char_file(
    520, "Cadence", "Normal", "Escrimeur", "Homme-Lien", "Isthme", "Empire",
    "Homme-Lien au rythme de combat hypnotique : ses attaques suivent une cadence qui semble previsible jusqu'a ce qu'elle ne le soit plus. Ses cicatrices de formation viennent des competitions de Virex ou il a appris a combattre tous les styles elementaires.",
    "Dueliste academique qui croit que la regularite du Voile d'Equite est une forme de cadence sociale : previsible, rassurant, et fondamentalement necessaire pour eviter le chaos de la Saturation non reglee. A vu ce que Virex est sans administration. Ne veut pas le revoir.",
    "Champion de plusieurs ecoles de duel de Virex, recrute par les Escrimeurs imperiaux pour sa capacite a combattre des adversaires de tous les elements elementaires avec la meme efficacite. Son element Normal lui permet de s'adapter au rythme de combat de n'importe quel adversaire en quelques echanges, puis de le decaler de sa cadence optimale pour creer des ouvertures. Participe aux Duels du Voile de Virex, la forme la plus visible de la presence imperiale dans la ville.",
    "Dueliste qui apprend le rythme de l'adversaire en quelques echanges, puis l'altere progressivement jusqu'a ce que l'adversaire commette une erreur de cadence. Efficace contre tous les elements elementaires car son adaptation ne depende pas d'une contre-strategie elementaire fixe."
))

write('normal', '521-cohesion', char_file(
    521, "Cohesion", "Normal", "Vanguard", "Homme-Lien", "Isthme", "Convergence",
    "Homme-Lien dont la presence semble federatrice : les individus autour d'elle ont tendance a se synchroniser malgre eux. Son element Normal s'exprime comme une force de cohesion collective. Porte les marques de la Convergence mais aussi celles de plusieurs cultures de passage a Virex, comme une carte de toutes ses conversions.",
    "Avant-garde de la Convergence dans la ville de toutes les confluences. Virex prouve que tous les elements peuvent coexister, dit-elle. La Convergence enseigne que coexister ne suffit pas : il faut redistribuer. Elle est la transition entre la coexistence passive de Virex et la redistribution active de la doctrine.",
    "Nee dans les quartiers de confluence de Virex, convertie a la Convergence par la logique simple suivante : si Virex demontre que tous les elements peuvent coexister, elle demontre aussi que ceux qui en accumulent plus que d'autres creent les anomalies de la Saturation. Son element Normal lui permet de lire les tensions collectives et d'orienter les groupes vers une coherence qui sert la doctrine de la Convergence.",
    "Coordonne les equipes de la Convergence en utilisant son element Normal pour synchroniser leurs actions. Sa presence sur le front transforme un groupe d'individus en un systeme coherent dont l'efficacite collective depasse la somme de ses parties."
))

write('normal', '522-fondation', char_file(
    522, "Fondation", "Normal", "Gardien", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien dont la presence physique est une architecture de protection : il ne s'interpose pas entre la force et la cible, il redefinie l'espace autour de lui pour que la force n'arrive pas a destination. Son element Normal lui permet de traiter toutes les forces elementaires comme equivalentes et de les redistribuer de facon inoffensive.",
    "Gardien des structures qui permettent aux gens de vivre ensemble dans les zones d'anomalie de Virex : les reseaux d'eau, les passerelles au-dessus des zones de temps ralenti, les refuges pour les Elus nés hors du Calendrier. Travaille pour qui protege ces structures, independamment de leur faction.",
    "Ingenieur des infrastructures de Virex specialise dans les zones d'anomalie elementaire de la Saturation des Elus. Son element Normal lui permet de maintenir la coherence structurelle des batiments et des reseaux dans des zones ou les elements interferent avec les materiaux de construction normaux. Travaille en independant, refusant toute allegiance qui l'obligerait a abandonner les infrastructures qu'il considere comme des biens communs.",
    "Genere un champ de normalisation autour de lui et de ses allies qui neutralise les forces elementaires hostiles en les redistribuant de facon inoffensive. Sa protection fonctionne contre tous les elements sans distinction, rendant ses allies temporairement immunises aux dommages elementaires directs."
))

write('normal', '523-synthese', char_file(
    523, "Synthese", "Normal", "Specialiste", "Homme-Lien", "Isthme", "Independent",
    "Homme-Lien dont le corps semble avoir integre des traces de tous les elements au fil d'une vie passee dans les zones de Saturation de Virex. Pas de signature elementaire dominante, pas de caracteristique physique specifique a une region. Il est la somme de tous les passages par Virex, la ville qui integre tout.",
    "Philosophe du monde qui a tire de la Saturation des Elus une conclusion que les trois factions evitent toutes : le monde n'a pas besoin d'un element dominant, il a besoin d'une synthese. L'Empire veut contoler. La Convergence veut redistribuer. Les Dissidentes veulent liberer. Lui veut integrer.",
    "Anomalie du Calendrier des Fees que la bureaucratie de Virex classe comme 'Homme-Lien sans element dominant, non-strategique'. Ce classement l'a protege de la capture pendant des decades. Il a utilise ce temps pour etudier les zones d'anomalie de la Saturation, les systemes de toutes les factions, et les conclusions que chacun tire du monde. Son element Normal est en realite une synthese : il peut temporairement manifester n'importe quel element a un niveau modere, ce que le Calendrier a classe comme 'absence d'element' faute de categorie adequate.",
    "Peut temporairement manifester l'element le plus adapte a la situation pendant de courtes periodes, rendant ses strategies impredictibles. Son element Normal est la seule reponse que le monde ait produite a la question que personne ne pose : et si on n'avait pas a choisir?"
))

print(f"Normal: 13 personnages reecrits")
print(f"Total: 26 personnages")
print(f"\nTous les 234 personnages ont ete reecrits.")
