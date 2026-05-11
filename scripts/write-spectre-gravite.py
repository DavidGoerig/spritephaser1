#!/usr/bin/env python3
"""Rewrite Spectre (421-433) + Gravite (451-463) with PDF lore."""
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
# SPECTRE (421-433) — Givrins/Crysalme + Aerides/Asterciel + Umbriens/Noctea
# Spectre = memoire elementaire persistante des Elus morts
# Ancrage : Gel Eternel (Crysalme), Chute des Nuages (Asterciel), archives des morts
# ============================================================

write('spectre', '421-resonance', char_file(
    421, "Resonance", "Spectre", "Enchanteur-Soutien", "Givrin", "Crysalme", "Dissidentes",
    "Silhouette translucide aux contours tremblants, comme un reflet dans la glace profonde. Sa peau a la couleur des glaciers d'Iskral, traversee par des filaments lumineux qui bougent selon ses emotions. Elle porte des cristaux de glace-memoire issus du champ gele du Gel Eternel, chacun contenant une signature d'Elu mort.",
    "Douce et melancolique, portee par la conviction que les morts meritent d'etre entendus autant que les vivants. Recueille les fragments de memoire des Elus captures par la Convergence lors des drains, les preservant dans ses cristaux. Croit que les Dissidentes se battent aussi pour les morts.",
    "Nee a Iskral dans une lignee de conservateurs de memoire qui maintiennent les registres des Elus depuis le Gel Eternel. Son don Spectre lui permet de percevoir les signatures elementaires residuelles des Elus morts, en particulier ceux qui ont ete extraits lors des drains rituels de la Convergence. Aide les Dissidentes en localisant les zones ou des extractions illegales ont eu lieu, revelant des crimes que l'Empire prefererait effacer.",
    "Invoque les resonances elementaires des Elus morts pour soutenir ses allies. Ses soins prennent la forme de fragments de memoire spectrale qui renforcent les capacites des allies vivants en leur pretant la force de ceux qui ne peuvent plus combattre."
))

write('spectre', '422-phantomeon', char_file(
    422, "Phantomeon", "Spectre", "Enchanteur-Capteur", "Aeride", "Asterciel", "Empire",
    "Corps qui projette sa propre ombre de facon incorrecte, decalee de quelques degres par rapport a la source lumineuse reelle. Ses yeux captent des frequences au-dela du visible. Porte l'uniforme des lecteurs de destin d'Heliora, caste sacerdotale nee apres la Chute des Nuages.",
    "Mystique rationnel qui croit que les signatures elementaires des Elus morts constituent une carte du destin accessible uniquement aux agents de l'Empire. Interprete les spectres elementaires comme des confirmations de l'ordre feerique. Sa devotion a la Citadelle est sincere et philosophiquement elaboree.",
    "Forme dans la caste sacerdotale des lecteurs de destin d'Heliora apres la Chute des Nuages, quand l'aristocratie verticale a integre la lecture spectrale comme outil de gouvernance. Son don lui permet de lire les dernieres empreintes elementaires des Elus avant leur mort ou leur capture. Utilise ces lectures pour traquer les lignees cachees que le Calendrier des Fees n'a pas encore enregistrees.",
    "Localise les Elus vivants par resonance avec les signatures elementaires de leurs ancetres morts. Sa detection traverse les ecrans standards et les masquages elementaires, rendant les refuges des Dissidentes vulnerables a son analyse."
))

write('spectre', '423-sarcome', char_file(
    423, "Sarcome", "Spectre", "Juggernaut", "Givrin", "Crysalme", "Convergence",
    "Masse imposante dont le corps semble avoir integre des fragments de signatures elementaires d'Elus extraits : des eclats de lumiere spectrale visible sous sa peau, comme des braises refroidies. Sa chair est plus dense que la normale, compactee par les drains auxquels il a participe comme vecteur.",
    "Croit que les signatures elementaires des morts sont des ressources non exploitees que la Convergence a le devoir de recuperer. Les Elus morts ont deja paye le prix de leur don. Il s'assure que leur sacrifice n'est pas gaspille.",
    "Ne a Iskral dans une periode d'alliance diplomatique entre Crysalme et les Fees. Initie a la doctrine de la Convergence par des agents venus d'Ash'Rael qui lui ont montre que le Gel Eternel etait un exemple de puissance accumulee non redistribuee. Sert comme Juggernaut dans les zones ou la Convergence cherche a drainer des Elus dont les predecesseurs sont morts sans extraction.",
    "Absorbe les residus spectraux des Elus morts qui flottent dans les zones de drain anterieur, les convertissant en puissance brute. Sa presence dans un lieu ou un drain a eu lieu amplifie considerablement ses capacites offensives."
))

write('spectre', '424-effroi', char_file(
    424, "Effroi", "Spectre", "Plongeur", "Umbrien", "Noctea", "Dissidentes",
    "Silhouette qui genere autour d'elle un halo d'ombre spectrale : on la voit, mais quelque chose dans le cerveau refuse d'enregistrer sa presence completement. Mince et rapide, les vetements superposant des couches de tissu sombre issus des archives textiles des guildes noires de Vel'Nox.",
    "Pragmatique et efficace, specialisee dans l'extraction des Elus de zones hautement surveillees. Utilise l'effet de dissonance perceptive que son element Spectre genere pour passer inaperue dans les patrouilles imperiales. Ne theorise pas : extrait.",
    "Ancienne agente double des guildes d'ombre de Vel'Nox, recrutee par les Dissidentes apres le Vol de la Lumiere quand elle a vu combien de signatures elementaires d'Elus morts flottaient dans les archives noires de la ville, temoignant de drains non documentes. Son don lui permet de masquer les signatures elementaires des Elus qu'elle extrait, les rendant invisibles aux capteurs imperiaux.",
    "Plonge dans les zones de forte surveillance en emportant ses proteges dans un cone de silence spectral qui masque leurs signatures elementaires. Sa vitesse d'extraction est inversement proportionnelle au nombre de residus spectraux dans la zone, qu'elle absorbe pour s'alimenter."
))

write('spectre', '425-nullistia', char_file(
    425, "Nullistia", "Spectre", "Mage-Burst", "Aeride", "Asterciel", "Independent",
    "Aeride aux contours flous, comme si le monde avait du mal a decider de son epaisseur exacte. Sa signature elementaire spectrale est si intense qu'elle brouille les instruments de mesure a proximite. Porte des vetements qui semblent transparents par endroits, revelant une luminosite interne changeante.",
    "Puissance brute que ni l'Empire ni la Convergence ni les Dissidentes n'ont reussi a integrer. La Chute des Nuages l'a convaincue que les grandes structures institutionnelles s'effondrent au mauvais moment. Elle prefere agir seule, quand elle le decide.",
    "Nee lors de la reconstruction d'Heliora apres la Chute des Nuages, dans un quartier qui avait partiellement touche le sol. La confusion elementaire de cet evenement a marque sa naissance d'une signature spectrale exceptionnelle. Les Fees l'ont classee comme 'anomalie de puissance Spectre, risque de contagion elementaire'. Vit librement dans les hauteurs d'Asterciel, refusant l'aristocratie verticale comme les trois factions.",
    "Libere des eclats de neant spectral qui traversent les barrieres elementaires standards. Ses explosions effacent temporairement les signatures elementaires de tout ce qu'elles touchent, rendant les cibles momentanement invisibles aux systemes de detection allie et ennemi."
))

write('spectre', '426-thanatoss', char_file(
    426, "Thanatoss", "Spectre", "Battlemage", "Givrin", "Crysalme", "Empire",
    "Grand et pale, comme fige dans sa propre version du Gel Eternel. Ses mouvements sont d'une lenteur deliberee qui contraste avec leur efficacite absolue. Porte l'uniforme des Battlemages imperiaux avec des incrustations de glace-spectre chargees de signatures elementaires d'Elus morts au service de l'Empire.",
    "Loyal a la Citadelle avec la rigidite des glaciers d'Iskral. Croit que le Voile d'Equite protege reellement les Elus enregistres mieux que la clandestinite ne le ferait jamais. La difference entre protection et prison depend du point de vue de celui qui n'a jamais vu les deux.",
    "Forme dans la tradition militaire de Crysalme, qui maintient une alliance diplomatique historique avec les Fees depuis le Gel Eternel. Son don Spectre lui permet de canaliser les signatures residuelles des Elus morts au service de l'Empire comme armement. Patrouille les zones frontieres entre Crysalme et les regions rebelles, traquant les Dissidentes qui utilisent les archives d'Iskral.",
    "Combat en mobilisant les signatures elementaires des Elus morts comme boucliers et projectiles. Sa presence ralentit les adversaires en les enveloppant de residus spectraux qui perturbent leur coordination elementaire."
))

write('spectre', '427-banshira', char_file(
    427, "Banshira", "Spectre", "Artillerie", "Umbrien", "Noctea", "Dissidentes",
    "Silhouette longiligne dont la voix peut porter des resonances spectrales capables de traverser les murs. Ses cheveux flottent independamment de tout courant d'air, animes par les signatures elementaires qui la traversent. Porte des amplificateurs de resonance artisanaux fabriques dans les laboratoires des guildes noires de Vel'Nox.",
    "Convaincue que les signatures elementaires des Elus morts ont le droit d'etre entendues, pas seulement exploitees. Canalise leur memoire comme projectiles ciblant precisement les infrastructures du Calendrier. Toute archive brulee par l'Empire est une voix qu'elle restitue.",
    "Nee a Vel'Nox dans une famille qui tenait les archives des morts pour les guildes clandestines. La destruction de ces archives par le Bureau d'Application lors d'une operation imperiale l'a poussee vers les Dissidentes. Son don lui permet de lancer des cris spectraux qui portent les dernieres empreintes elementaires des Elus morts comme obus acoustiques, desintegrant les surfaces de stockage d'information ennemies.",
    "Tire des salves de resonance spectrale a longue portee depuis les zones riches en residus. Ses cris paralysent temporairement les Capteurs en surchargeant leurs instruments de detection avec les signatures des morts."
))

write('spectre', '428-eclipse-morte', char_file(
    428, "Eclipse Morte", "Spectre", "Tireur", "Aeride", "Asterciel", "Independent",
    "Corps d'une maigreur extreme, peau d'un blanc presque lumineux. Ses yeux captent les residus spectraux comme des objectifs photographiques. Porte des lunettes a verres sombres qui filtrent les signatures elementaires excessives, lui permettant de viser dans des environnements riches en residus.",
    "Mercenaire specialisee dans les zones a haute densite spectrale : les champs de bataille apres un drain, les archives brulees, les quartiers devastees par des crises elementaires. Tire ou les autres ne peuvent pas voir, dans des environnements que son element lui rend parfaitement lisibles.",
    "Ancienne ingenieure des systemes optiques d'Heliora, devenue mercenaire apres la Chute des Nuages qui a detruit ses laboratoires. Decouvrit lors de cet evenement que son don Spectre lui permettait de voir les trajectoires des signatures elementaires residuelles comme des lignes de tir naturelles. Vend maintenant ses services sans allegiance doctrinale.",
    "Tire depuis des positions ou les residus spectraux masquent sa propre signature elementaire. Ses fleches portent des charges de vide spectral qui effacent temporairement les capacites elementaires de la cible, comme un mini-drain non letal."
))

write('spectre', '429-lethalis', char_file(
    429, "Lethalis", "Spectre", "Assassin", "Givrin", "Crysalme", "Dissidentes",
    "Quasi-invisible au repos : son element lui permet de se fondre dans les signatures elementaires ambiantes comme un bruit dans du bruit. Quand elle se materialise, sa silhouette semble sortir d'un reve dont personne ne se souvient completement.",
    "Clinique et methodique. N'eprouve pas de satisfaction dans l'elimination mais la considere comme un outil necessaire. Cible en priorite les agents imperiaux qui detruisent les archives d'Iskral, les seuls qui documentent les origines des Fees que la Citadelle voudrait effacer.",
    "Formee dans les traditions militaires de Crysalme mais recrutee par les Dissidentes apres avoir decouvert que l'Empire tentait de faire main basse sur les archives royales d'Iskral qui documentaient la relation pre-Voile entre les Fees et les Givrins. Son don Spectre lui permet de passer totalement inaperue dans les zones riches en signatures elementaires residuelles.",
    "Frappe depuis l'interieur du champ de signatures spectrales ambiantes, invisible jusqu'au moment du coup. Ses attaques laissent une marque qui desactive temporairement les capacites elementaires de la cible, comme si elle avait subi un mini-drain."
))

write('spectre', '430-exorciss', char_file(
    430, "Exorciss", "Spectre", "Escrimeur", "Aeride", "Asterciel", "Empire",
    "Dueliste a la posture rigoureuse dont la lame semble partiellement translucide, traversee par des eclats de signatures elementaires spectrales. Son uniforme porte les insignes de la caste sacerdotale des lecteurs de destin d'Heliora, combinees aux marques des Escrimeurs imperiaux.",
    "Croit que les signatures des Elus morts sont des temoignages en faveur du systeme imperial : ils ont vecu proteges par le Voile, et leur memoire le confirme. L'Empire n'efface pas les morts. Il les integre a l'ordre cosmique.",
    "Forme a la fois dans l'ecole des duelistes imperiaux et dans la tradition sacerdotale des lecteurs de destin d'Heliora. La Chute des Nuages lui a appris que seul un systeme centralise peut gerer les crises elementaires. Son don Spectre lui permet de lire les dernieres intentions de combat de ses adversaires dans leurs signatures residuelles, anticipant leurs mouvements.",
    "Dueliste qui prevoit les attaques de l'adversaire en lisant ses intentions elementaires residuelles avant qu'elles ne se manifestent. Sa lame spectrale traverse les barrieres ordinaires et touche directement la signature elementaire de la cible."
))

write('spectre', '431-vangueria', char_file(
    431, "Vangueria", "Spectre", "Vanguard", "Givrin", "Crysalme", "Convergence",
    "Silhouette imposante parcourue de lignes lumineuses correspondant aux signatures elementaires qu'elle a integrees lors des drains. Chaque drain la rend legerement differente : sa forme evolue selon ce qu'elle absorbe. L'image qu'on retient d'elle depend de quand on l'a vue.",
    "Avant-garde doctrinale de la Convergence dans les zones ou les residus spectraux sont abondants : apres un drain, apres une crise, apres une destruction. Les signatures des morts demontrent la justesse de la redistribution. Ils sont partis. Leur puissance reste. Elle la gere.",
    "Nee a Iskral dans une periode ou l'alliance diplomatique de Crysalme avec les Fees etait encore solide, mais recrutee par la Convergence apres avoir vu comment l'Empire utilisait les archives royales pour controler les lignees givrines. Son don Spectre lui permet de guider les equipes de drain vers les zones a haute concentration de signatures residuelles, optimisant les recoltes.",
    "Ouvre la voie dans les zones post-drain en absorbant les residus spectraux ambiants qui ralentiraient ses allies. Sa presence transforme les champs de bataille riches en signatures en ressources directement utilisables pour la Convergence."
))

write('spectre', '432-memorial', char_file(
    432, "Memorial", "Spectre", "Gardien", "Givrin", "Crysalme", "Independent",
    "Corps solide dont la peau est couverte de motifs spectraux ressemblant a des textes anciens : ce sont les signatures elementaires des Elus dont elle preserve la memoire, imprimees sur elle par des annees de contact. Elle porte physiquement le poids des archives d'Iskral qu'elle protege.",
    "Gardienne des archives, pas d'une ideologie. Protege ce qui peut encore etre preserve des tentatives d'effacement de l'Empire et des drains de la Convergence. N'a pas d'opinion sur qui a raison politique. A une opinion sur ce qui doit survivre.",
    "Ancienne gardienne des archives royales d'Iskral, devenue independante apres que l'Empire a tente de saisir les registres pre-Voile documentant les origines des Fees. Son don Spectre lui permet d'incorporer litteralement des signatures elementaires dans sa propre structure corporelle, les preservant de toute extraction ou effacement. Elle est devenue une archive vivante.",
    "Genere un champ de protection spectrale autour d'elle et de ses allies qui neutralise les tentatives d'extraction et de drain. Ses barrieres incorporent les signatures des Elus proteges, les rendant indiscernables des residus ambiants aux yeux des systemes de detection."
))

write('spectre', '433-nexumorph', char_file(
    433, "Nexumorph", "Spectre", "Specialiste", "Inconnu", "Multi-region", "Independent",
    "Entite dont la forme physique semble agreger temporairement les signatures elementaires des zones qu'elle traverse. A Crysalme, elle ressemble a un Givrin. A Asterciel, a un Aeride. A Vel'Nox, a un Umbrien. Personne n'a jamais vu sa forme de base, si tant est qu'elle en ait une.",
    "Conscience collective des signatures des morts, ou anomalie unique qui a transcende son substrat physique au contact de trop de residus spectraux. N'est pas sure elle-meme de ce qu'elle est. Observe. Archive. Parfois intervient, selon des criteres que personne n'a dechiffres.",
    "Anomalie que le Calendrier des Fees classe comme 'entite spectrale non-incarnee, origine indeterminee'. Les archives d'Iskral contiennent une reference a une entite correspondant a sa description depuis au moins deux siecles avant le Gel Eternel. La Convergence souhaite l'etudier. L'Empire souhaite la cataloguer. Les Dissidentes pensent qu'elle est la preuve vivante que les Elus peuvent survivre au-dela de la mort physique.",
    "Manipule les signatures spectrales de zones entieres, reorganisant les residus elementaires en motifs qui desorganisent les systemes de detection adverses. Ses interventions transforment le champ de bataille en un environnement que seuls les porteurs de l'element Spectre peuvent lire clairement."
))

print(f"Spectre: 13 personnages reecrits")

# ============================================================
# GRAVITE (451-463) — Nereides/Thalassyr abysses + Chthoniens/Ormn-Dur profondeurs
# Ancrage : Silence des Vents (Thalassyr), abysses, neutralite marchande,
#           Fosse Interdite (Ormn-Dur), pression extremale
# ============================================================

write('gravite', '451-equilibre', char_file(
    451, "Equilibre", "Gravite", "Enchanteur-Soutien", "Nereide", "Thalassyr", "Dissidentes",
    "Nereide aux traits fins, peau de la couleur des grandes profondeurs de Thalassyr. Ses mouvements semblent toujours calibres par une force invisible, jamais trop vifs ni trop lents. Porte des prismes de pression artisanaux qui lui permettent de redistribuer la force gravitationnelle entre ses allies.",
    "Pragmatique et sereine, convaincue que les Dissidentes ne peuvent gagner qu'en maintenant leur propre equilibre : trop de violence les corrompt comme l'Empire, trop de passivite les laisse ecraser. Distribue les charges gravitationnelles comme elle distribue les ressources : equitablement, selon le besoin.",
    "Nee dans les profondeurs de Thalassyr, dans les quartiers sous-marins de Neris ou la pression de l'eau calibre les corps differemment des habitants de surface. Le Silence des Vents lui a appris que la neutralite de Neris etait une fiction que l'Empire exploitait : les courants d'information de la confederation marchande alimentaient le Calendrier. Elle aide maintenant les Dissidentes a perturber ces flux en alterant la pression locale autour des relais d'information.",
    "Redistribue la charge gravitationnelle entre ses allies, allegiant ceux qui portent trop et chargeant de poids les adversaires qui avancent trop vite. Ses soins prennent la forme d'une reequilibration des forces physiques qui restaure l'endurance de ceux qui l'ont perdue."
))

write('gravite', '452-vecteur', char_file(
    452, "Vecteur", "Gravite", "Enchanteur-Capteur", "Nereide", "Thalassyr", "Empire",
    "Nereide d'une precision geometrique, chaque geste calculant le vecteur optimal. Ses instruments de mesure gravitationnelle sont integres a ses avant-bras sous forme d'implants technologiques nes de la collaboration entre Neris et l'Empire. Son regard analyse constamment les trajectoires et les forces ambiantes.",
    "Scientifique de l'Empire convaincu que la mesure precise est la meilleure forme de justice. Les Elus Gravite non enregistres representent des forces non mesurees : dangereuses, imprecises, inutiles a la societe. L'enregistrement leur donne une forme gerable.",
    "Technicien de la confederation marchande de Neris recrute par l'Empire apres que le Silence des Vents a revele la dependance de Thalassyr aux flux d'information feeriques. Son don Gravite lui permet de localiser les Elus par leur signature de distorsion gravitationnelle : chaque Elu deforme legerement l'espace autour de lui, et Vecteur peut lire ces deformations comme une carte.",
    "Detecte les Elus non enregistres par les micro-distorsions gravitationnelles qu'ils emettent en permanence. Ses sorts de capture utilisent la gravite locale pour immobiliser les cibles sans violence directe, preservant l'Elu intact pour l'enregistrement au Calendrier."
))

write('gravite', '453-colossus', char_file(
    453, "Colossus", "Gravite", "Juggernaut", "Chthonien", "Ormn-Dur", "Convergence",
    "Masse physique exceptionnelle, comme si la gravite le comprimait vers le sol plus que les autres. Ses pas laissent des empreintes visibles dans le sol le plus dur. La pression de sa simple presence est physiquement perceptible dans un rayon de plusieurs metres.",
    "Croit que la gravite est la plus honnete des forces : elle prend proportionnellement a la masse, elle ne ment pas. La Convergence, dit-il, fonctionne sur le meme principe. Ce qu'on a en surplus est attire vers ceux qui en manquent. C'est physique, pas politique.",
    "Ne dans les zones profondes de Kar-Dum ou la pression tellurique est plus forte qu'en surface. Son don Gravite s'est manifeste sous une forme qui l'a rendu physiquement exceptionnel : chaque cellule de son corps est comprimee par une densite gravitationnelle interne. La Convergence l'utilise comme vehicule de pression physique dans les rituels de drain qui necessitent de maintenir les Elus immobiles.",
    "Genere un champ de haute gravite autour de lui qui immobilise les adversaires et empeche toute fuite. Plus ils resistent, plus la pression augmente. Sa presence garantit aux equipes de drain de la Convergence un environnement de travail stable et incontestable."
))

write('gravite', '454-apogee', char_file(
    454, "Apogee", "Gravite", "Plongeur", "Nereide", "Thalassyr", "Dissidentes",
    "Nereide dotee d'une mobilite exceptionnelle : son element lui permet de modifier localement la gravite pour se mouvoir a des vitesses et dans des directions impossibles. Ses vetements sont adaptes aux changements brusques d'orientation, et ses pieds ne touchent le sol que lorsqu'elle le decide.",
    "Rapide, joyeuse dans l'action, serieuse dans ses convictions. Extrait les Elus des zones de capture en leur faisant traverser des corridors de gravite alteree que les capteurs imperiaux ne peuvent pas anticiper. Refuse de rester immobile plus de quelques secondes.",
    "Nee dans les courants thermiques des abysses de Thalassyr, dans une zone ou les pressions contradictoires creent des bulles de gravite alteree naturelles. Son eveil elementaire lui a permis de maitriser ces bulles. Depuis le Silence des Vents, elle aide les Dissidentes a sortir les Elus de Neris par les routes sous-marines que les agents du Calendrier ne surveillent pas.",
    "Se deplace par bonds gravitationnels courts dont la trajectoire est impredictible pour un observateur exterieur. Plonge dans les zones de capture en emportant ses proteges dans un corridor de gravite alteree qui les propulse hors de portee des Capteurs."
))

write('gravite', '455-collapseur', char_file(
    455, "Collapseur", "Gravite", "Mage-Burst", "Chthonien", "Ormn-Dur", "Independent",
    "Corps massif marque de fissures naturelles dans la peau, comme si la pression gravitationnelle interne cherchait a s'echapper par la surface. Ses eruptions de gravite laissent des impacts visibles longtemps apres l'evenement : le sol s'affaisse, les structures se compriment.",
    "Puissance brute sans doctrine. A teste ses limites jusqu'a detruire un pan entier de la Fosse Interdite lors d'une eruption non controlee, creant une nouvelle chambre vide dans les profondeurs. L'Empire l'a classe 'anomalie destructrice'. La Convergence veut le drainer. Les Dissidentes ne savent pas quoi faire de lui.",
    "Ne dans les zones les plus profondes de Kar-Dum, dans un secteur directement adjacent a la Fosse Interdite. Son don Gravite s'est manifeste lors d'un tremblement de terre mineur qu'il a amplifie involontairement en un effondrement majeur. La technocratie de contribution de Kar-Dum l'a expulse pour risque infrastructurel. Vit dans les zones peripheriques, refusant toute supervision.",
    "Libere des collapses gravitationnels localises qui compriment violemment tout ce qui se trouve dans leur rayon. Les structures adverses s'effondrent, les projectiles sont deviees, et les zones de combat sont rendues intraversables pendant plusieurs minutes."
))

write('gravite', '456-densite', char_file(
    456, "Densite", "Gravite", "Battlemage", "Nereide", "Thalassyr", "Empire",
    "Nereide d'une compacite physique surprenante : plus dense que son volume ne le laisserait supposer, propriete de son element qui lui donne une resistance aux impacts exceptionnelle. Porte l'uniforme imperial adapte aux operations sous haute pression, concu par les ingenieurs de Neris en collaboration avec l'Empire.",
    "Militant de la loi feerique qui croit que la gravite est un modele de gouvernance : elle s'applique uniformement, sans exception, a tout ce qui a une masse. Le Voile d'Equite aspire a la meme constance. Les Elus non enregistres sont des masses non comptabilisees dans le systeme.",
    "Formee dans les unites marines de l'Empire stationnees a Neris depuis le Silence des Vents. Son element Gravite lui permet de modifier sa propre densite pendant le combat, alternant entre une mobilite accrue et une resistance maximale. Applique la loi feerique dans les abysses de Thalassyr, zones que la confederation marchande considerait hors juridiction jusqu'a ce que l'Empire y installe des relais du Calendrier.",
    "Alterne entre une phase mobile de densite reduite et une phase defensive de densite maximale. Ses coups en haute densite laissent des impacts disproportionnes par rapport a leur vitesse apparente, brisant les defenses les plus solides."
))

write('gravite', '457-catapulsis', char_file(
    457, "Catapulsis", "Gravite", "Artillerie", "Chthonien", "Ormn-Dur", "Dissidentes",
    "Long et sec, les bras disproportionnellement forts pour son gabarit : il les utilise comme vecteurs de propulsion gravitationnelle. Ses projectiles ne sont pas des objets physiques mais des compressions de gravite qu'il genere et lance avec une precision acquise dans les zones profondes d'Ormn-Dur.",
    "Ingenieur de la destruction des infrastructures imperiales de controle. Cible precisement les relais du Calendrier des Fees et les tours de surveillance en utilisant des projectiles gravitationnels qui n'ont pas de signature elementaire standard, rendant leur detection preventive impossible.",
    "Ancien ingenieur minier de Kar-Dum qui utilisait son element Gravite pour creuser des puits de forage avec une precision chirurgicale. Apres avoir decouvert que les chantiers qu'il dirigeait creaient les tunnels servant a l'infrastructure de surveillance imperiale dans Ormn-Dur, il a rejoint les Dissidentes et retourne ses competences de forage en technique de bombardement de precision.",
    "Lance des obus de gravite compressee qui s'effondrent sur impact, creant des zones de haute pression persistante. Ses bombardements sont particulierement efficaces contre les structures enterrees que l'Empire utilise comme relais du Calendrier dans les profondeurs d'Ormn-Dur."
))

write('gravite', '458-trajectoire', char_file(
    458, "Trajectoire", "Gravite", "Tireur", "Nereide", "Thalassyr", "Independent",
    "Nereide aux yeux qui calculent instinctivement toutes les courbes dans son champ de vision. Ses projectiles suivent des paraboles complexes qui contournent les obstacles en exploitant les micro-variations gravitationnelles locales. Porte un equipement minimal : son don fait le reste.",
    "Mercenaire des trajectoires improbables. Tire des angles que les autres considerent impossibles, exploitant les variations gravitationnelles que lui seul percoit. Accepte des contrats specifiques, refuse les allegiances permanentes : la liberte de trajectoire est sa philosophie de vie.",
    "Ancien navigateur de la confederation marchande de Neris, specialise dans les routes abyssales que les courants du Silence des Vents ont rendues impredictibles. Son element lui a permis de developper une intuition des gradients gravitationnels qui s'est traduite dans son combat : il tire en calculant la courbure de la gravite locale pour inflechir ses projectiles apres leur depart.",
    "Tire des projectiles qui suivent des trajectoires non-lineaires exploitant les variations gravitationnelles naturelles. Ses tirs arrivent toujours sous un angle que l'adversaire n'a pas prevu, contournant boucliers et couverts physiques."
))

write('gravite', '459-horizonte', char_file(
    459, "Horizonte", "Gravite", "Assassin", "Nereide", "Thalassyr", "Dissidentes",
    "Nereide dont la presence est difficile a localiser avec precision : son element altere la perception de sa distance reelle. Elle est toujours soit plus proche soit plus loin que ce que les sens indiquent. Sa silhouette semble se deplacer sur un plan different de celui ou elle se trouve reellement.",
    "Precise et silencieuse. Cible les agents du Calendrier qui operent dans les zones de surveillance sous-marine de Neris, ceux que la confederation marchande a accepte d'heberger pour maintenir son acces aux flux d'information feeriques. La neutralite de Neris, dit-elle, est une trahison avec des sourires.",
    "Nee dans les abysses de Thalassyr, dans les zones les plus profondes ou la gravite interagit avec les courants thermiques pour creer des environnements de pression variable. Son don lui permet de manipuler la courbure gravitationnelle locale pour faire apparaitre sa position comme differente de ce qu'elle est. Agit pour les Dissidentes contre les infrastructures du Calendrier installes dans Neris depuis le Silence des Vents.",
    "Frappe depuis une position dont la distance et l'angle reels sont impossibles a determiner pour l'adversaire. Ses attaques semblent venir de plusieurs directions simultanement grace aux distorsions gravitationnelles qu'elle maintient autour d'elle en permanence."
))

write('gravite', '460-pesanteur', char_file(
    460, "Pesanteur", "Gravite", "Escrimeur", "Chthonien", "Ormn-Dur", "Empire",
    "Chthonien massif dont les duels se pratiquent a une vitesse deliberement lente : chaque mouvement porte un surplus de masse gravitationnelle qui le rend irresistible. Son arme est une lame dont le poids peut etre multiplie par son element pendant l'impact.",
    "Dueliste qui croit que la force la plus lourde gagne toujours, et que l'ordre imperial est la force la plus lourde qui soit. La resistance est aussi futile que resister a la gravite. Le Voile d'Equite, dit-il, est simplement la force qui s'applique a tous sans exception.",
    "Forme dans la tradition dueliste des technocrates de Kar-Dum, qui resolvent les conflits par des joutes codifiees selon les lois de contribution. Son element lui permet d'amplifier le poids de ses coups de maniere variable. Patrouille les zones frontaleres d'Ormn-Dur pour le Bureau d'Application de l'Empire, avec une autorite particuliere dans les zones profondes.",
    "Dueliste de l'usure : chaque impact multiplie progressivement sa masse gravitationnelle, rendant ses attaques subsequentes de plus en plus lourdes. Les adversaires qui encaissent plusieurs coups sont progressivement immobilises par le surplus gravitationnel accumule."
))

write('gravite', '461-avant-garde-gravite', char_file(
    461, "L'Avant-Garde Gravitationnelle", "Gravite", "Vanguard", "Nereide", "Thalassyr", "Convergence",
    "Nereide dont le corps semble en constant desequilibre controle : toujours penchee vers l'avant, comme aspiree par sa propre doctrine de l'aspiration collective. Sa silhouette est traversee de lignes de force gravitationnelle visibles, qui rayonnent vers l'exterieur.",
    "Avant-garde de la Convergence dans les zones de haute pression de Thalassyr. La gravite aspire tout vers le centre, dit-elle. La Convergence fait de meme avec l'energie des Elus. Ce n'est pas de la violence, c'est de la physique appliquee a la justice sociale.",
    "Nee dans les courants profonds de Thalassyr, convertie a la doctrine de la Convergence par des agents qui lui ont montre comment les abysses fonctionnent naturellement comme systemes de redistribution. Precede les equipes de drain dans les zones sous-marines de Neris, utilisant son element pour comprimer l'espace autour des Elus cibles et empecher leur fuite.",
    "Ouvre la voie en creant des corridors gravitationnels qui aspirent les ennemis vers elle et repoussent ses allies derriere. Sa presence redefinit la geographie du combat, forcant les adversaires a lutter contre la gravite elle-meme pour se positionner."
))

write('gravite', '462-ancre', char_file(
    462, "Ancre", "Gravite", "Gardien", "Chthonien", "Ormn-Dur", "Independent",
    "Chthonien d'une stabilite physique absolue : son element l'ancre au sol d'une facon que rien ne peut contrecarrer volontairement. Il ne tombe pas, ne recule pas, n'est pas projete. Il reste. Sa peau a la texture de la pierre profonde de Kar-Dum.",
    "Gardien sans ideologie, protecteur par nature plutot que par conviction politique. Ce qui lui tient lieu de philosophie : rien de ce qu'il couvre ne bougera. Travaille pour quiconque a besoin de quelque chose de fixe dans un monde qui change trop vite.",
    "Ingenieur des fondations de Kar-Dum, specialiste des structures en zone de haute pression tellurique. Son element s'est manifeste dans sa capacite a ancrer n'importe quelle structure au substrat rocheux de facon quasi-permanente. Apres la decouverte que ses fondations servaient aussi a installer les infrastructures de surveillance imperiale, il a refuse de continuer pour les deux parties.",
    "Genere un ancrage gravitationnel autour de lui et de ses allies qui les rend immovables aux projections et aux forces de deplacement adverses. Ses allies peuvent attaquer depuis une position fixe sans risque d'etre repousses ou desequilibres."
))

write('gravite', '463-singulier', char_file(
    463, "Singulier", "Gravite", "Specialiste", "Inconnu", "Abysses", "Independent",
    "Entite dont la forme physique semble organisee autour d'un point central invisible de densite gravitationnelle extreme. Les objets proches devient tres legerement vers elle. Ses traits sont difficiles a memoriser : le regard revient toujours au centre plutot qu'a la peripherie de son visage.",
    "Conscience gravitationnelle qui a transcende son substrat physique par accumulation de pression. Observe les trois factions avec une equanimite que certains prennent pour de la sagesse et d'autres pour de l'indifference. Elle est simplement devenue trop dense pour que les ideologies la traversent.",
    "Anomalie des abysses de Thalassyr ou des profondeurs d'Ormn-Dur, sur ce point les temoignages divergent. Le Calendrier des Fees ne contient aucun enregistrement la concernant, ce qui la classe comme 'entite pre-calendrier ou non-naissance'. Les Dissidentes y voient la preuve que le monde peut encore produire des Elus que le systeme imperial ne peut pas cataloguer.",
    "Manipule la gravite de facon globale sur le champ de bataille, alterant les trajectoires de tout projectile et les positions relatives des combattants. Ses interventions sont rares mais reconfigurent completement la geometrie du combat."
))

print(f"Gravite: 13 personnages reecrits")
print(f"Total: 26 personnages")
