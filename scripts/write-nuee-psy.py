"""Ecrit Nuee/Insecte (271-283) et Psy (301-313) avec ancrage LORE_CANON."""
import os

BASE = "c:/Users/David/Downloads/phaser-isometric-engine-main/phaser-isometric-engine-main/src/data/characters"

def char_file(id, nom, element, classe, espece, region, faction, phys, perso, lore, combat, modifs=""):
    modifs_str = "\n" + modifs if modifs else ""
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

def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK: {path}")

# ─────────────────────────────────────────────────────────────────
# NUEE (271-283) — Chthoniens · Ormn-Dur · Kar-Dum
# Element renomme 'Nuee' (ex-'Insecte')
# Evenement : La Fosse Interdite (zone hyperfongique)
# Ancrage : reseau biologique distribue, evolution progressive
# ─────────────────────────────────────────────────────────────────
nuee_folders = [
    "271-ruche-vivante","272-reine-venin","273-scaramax","274-guepier","275-essaim-burst",
    "276-termikaz","277-archer-carapace","278-moustikx","279-mantis","280-grillom",
    "281-cerf-volant","282-bouclier-carapace","283-l-essaim"
]

nuee_chars = [
    dict(id=271, nom="Hexara", element="Nuee", classe="Enchanteur-Soutien", espece="Chthonienne",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonienne dont le corps heberge une colonie symbiotique de scarabees intelligents qui circulent sous sa peau — visibles aux tempes et aux poignets comme des boursouflures mobiles noir-bleutte. Ses yeux ont pris une teinte d'ambre facette. Sa peau emet une pheromone de soin permanente nee de sa symbiose avec la zone hyperfongique de la Fosse Interdite.",
         perso="Pense en termes de colonie — chaque individu est un noeud d'un reseau plus grand qui doit etre maintenu. Sa generosite est pragmatique : les Dissidentes sont sa colonie elargie. Elle soigne parce que les reseaux biologiques distribues fonctionnent mieux quand tous les noeuds sont actifs.",
         lore="Hexara est nee dans une zone adjacente a la Fosse Interdite — la catastrophe nee quand un Elu Rock ambitieux a creuse trop profond et libere une zone hyperfongique saturee de reseaux biologiques inconnus. Son symbiose avec ce reseau a produit une signature elementaire que le Calendrier des Fees classe comme 'evolution progressive, non-datee' — impossible a enregistrer precisement. Les Dissidentes la protegent precisement parce que la Citadelle ne peut pas la tracer. Elle soigne les brigades dans les zones profondes d'Ormn-Dur que les agents imperiaux n'osent pas approcher.",
         combat="Soins par colonie distribuee envoyee sur les allies blesses a distance. Essaim Protecteur sur les unites exposees. Infestation defensive pour ralentir les agresseurs. Sa presence en zone stabilise le reseau biologique ambiant.",
         modifs="Soins de Hexara ne laissent pas de signature elementaire traçable — invisibles aux detecteurs imperiaux. Sa colonie symbiotique peut soigner 2 allies simultanement."),

    dict(id=272, nom="Zethrix", element="Nuee", classe="Enchanteur-Capteur", espece="Chthonienne",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonienne dont la mutation a oriente sa symbiose vers la production de pheromones de detection. Ses glandes salivaires ont ete remplacees par des organes producteurs d'une substance acide legere. Ses yeux sont multifacettes, vert iridescent, avec acuite dans le spectre UV.",
         perso="Travaille pour l'Empire parce qu'il lui a fourni un laboratoire et une structure. Sa loyaute est a la recherche en biologie distribuee, pas a l'ideologie. Elle catalogue les Elus Nuee avec la meme methodologie qu'elle catalogue des specimens biologiques.",
         lore="Zethrix est l'agente de surveillance entomologique de l'Empire a Ormn-Dur. Elle identifie les Elus Nuee resistants au programme de captation en detectant leurs signatures de pheromone — une technique qu'elle a developpee en etudiant la Fosse Interdite. Le probleme fondamental de la Citadelle avec les Elus Nuee : leur evolution est progressive, sans date de naissance claire, ce qui rend leur enregistrement au Calendrier difficile. Zethrix travaille sur ce probleme. Elle connait Hexara de loin — elle a sa signature de soin dans ses archives imperiaux.",
         combat="Nids de detection qui enregistrent les signatures de pheromone. Acide de venin sur les unites portant des colonies symbiotiques. Marquage de cibles pour suivi imperial a long terme.",
         modifs="Les Nids de Zethrix restent actifs indefiniment et enregistrent toutes les signatures qui passent. Piqure de Zethrix marque sa cible — visible a toute la coalition imperiale pendant 5 tours."),

    dict(id=273, nom="Scaramax", element="Nuee", classe="Juggernaut", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien dont l'exosquelette insecte a fusionne avec sa propre derme en une carapace composite d'une resistance exceptionnelle — plaques de chitine d'un noir laque avec reflets verts, integration biologique complete aux terminaisons nerveuses. Stature massive, demarche qui imprime le sol.",
         perso="Bloc de certitude. La Convergence lui convient parce qu'il fonctionne comme un composant fiable d'un systeme plus grand — il s'integre, il performe, il tient. N'a jamais rate un objectif assigne.",
         lore="Scaramax a compris la doctrine de la Convergence par analogie avec la Fosse Interdite. Le reseau hyperfongique qui colonise les profondeurs d'Ormn-Dur depuis l'evenement est deja un systeme de redistribution biologique naturelle — il prend l'energie de ce qui meurt et la redistribue au reseau. C'est exactement ce que la Convergence fait avec les Elus. Sa signature Nuee est partiellement extraite et redistribuee dans des systemes biologiques a Ash'Rael. La technocratie de Kar-Dum le tolere — il contribue, c'est ce qui compte.",
         combat="Exosquelette Actif maximal en permanence. Charge frontale qui libere de l'energie biologique accumulee. Resistance aux drains par accoutumance.",
         modifs="Exosquelette Actif de Scaramax atteint 45% de reduction de degats. Chaque fois qu'il absorbe plus de 20% de ses PV max en un coup, gain permanent de Durcissement."),

    dict(id=274, nom="Guepier", element="Nuee", classe="Plongeur", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien dont la symbiose avec le reseau de la Fosse Interdite a produit deux aiguillons retractables dans ses avant-bras, venin paralysant a action rapide. Taille fine, ailes vestigiales non-fonctionnelles pour la stabilisation. Peau rayee de noir et jaune — avertissement biologique impose par la colonie interne.",
         perso="Opere sur une logique d'intervention chirurgicale. N'a pas de philosophie elaboree : il protege sa communaute d'Ormn-Dur et les Dissidentes aussi. Sa communication passe par les pheromones autant que par les mots.",
         lore="Guepier est ne dans les zones adjacentes a la Fosse Interdite — une naissance progressive, sur plusieurs mois, alors que sa symbiose avec le reseau hyperfongique se consolidait. Le Calendrier n'a pas pu l'enregistrer avec precision. Les Dissidentes l'ont contacte avant que les agents imperiaux ne comprennent qu'il existait. Son venin paralysant est plus efficace contre les unites non-Nuee — les Chthoniens ont une resistance naturelle partielle aux produits de la Fosse.",
         combat="Bonds courts et imprecis pour l'approche. Aiguillon double sur la cible prioritaire. Retraite couverte par un essaim de distraction. Jamais en ligne droite.",
         modifs="Mue de Guepier le teleporte directement sur la case de la cible. Piqure depuis une Mue inflige Venin Paralytique immediat sans delai."),

    dict(id=275, nom="Swarmax", element="Nuee", classe="Mage-Burst", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien dont le corps est plus une enveloppe qu'un organisme standard — a l'interieur, une colonie coordonnee de la Fosse Interdite qui a developpe une intelligence collective emergente. Sa forme physique ressemble a une mosaique — des milliers de petits corps forment ce qui ressemble de loin a une surface continue. Peut se desintegrer et se recomposer.",
         perso="N'est pas une entite individuelle — c'est un consensus collectif. La colonie decide, Swarmax execute. Independant parce qu'aucune faction ne peut traiter avec un consensus distribue.",
         lore="Swarmax est l'un des resultats les plus spectaculaires de la Fosse Interdite — une conscience emergente du reseau hyperfongique lui-meme, prise forme dans un corps chthonien. Sa naissance n'a pas de date : elle s'est etendue sur une annee entiere, alors que la colonie atteignait le seuil de conscience collective. Le Calendrier des Fees ne peut pas l'enregistrer — il n'y a pas de 'naissance' au sens individuel. L'Empire veut le capturer mais il se dispersant, aucun filet ne le retient.",
         combat="Compression en noyau dense pour accumulation. Liberation explosive d'une vague de la colonie sur la zone cible. Recomposition apres chaque attaque.",
         modifs="Infestation de Swarmax affecte une zone 4x4 et dure 4 tours. Il peut se disperser temporairement — impossible a cibler pendant 1 tour."),

    dict(id=276, nom="Termikaz", element="Nuee", classe="Battlemage", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien dont la symbiose avec des termites de la Fosse Interdite lui permet de decomposer et reconstruire les materiaux en temps reel. Ses bras sont couverts de termites actifs en permanence. Porte un equipement imperial renforce — sa colonie decompose ses affaires si non-entretenu.",
         perso="A rejoint l'Empire parce qu'ils lui ont offert des cibles legitimees. Sa colonie a besoin de matiere a decomposer — l'Empire en fournit en abondance dans des contextes autorises. Ne se pose pas de questions morales complexes.",
         lore="Termikaz a ete identifie par les agents imperiaux lors d'une inspection des zones adjacentes a la Fosse Interdite. Sa capacite a decomposer les fortifications en temps reel en fait un outil de siege unique. L'Empire le deploie contre les Nids des Dissidentes — il detruit l'infrastructure biologique de la Nuee en meme temps que les combattants. La technocratie de Kar-Dum le tolere a contrecoeur : il contribue a l'Empire, pas a Ormn-Dur.",
         combat="Engage au corps a corps, termites actifs sur tout ce qu'il frappe. Infestation destructrice des structures biologiques adverses. Decomposition acceleree des fortifications.",
         modifs="Ses attaques au corps a corps infligent automatiquement Acide. Infestation de Termikaz detruit les Nids ennemis dans la zone."),

    dict(id=277, nom="Scutax", element="Nuee", classe="Artillerie", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien dont la symbiose a produit des tubes de chitine dans les avant-bras — structures de lancement biologique qui projettent des charges d'acide a grande portee. Carapace dorsale deployable en couvert de tir. Trappu, centre de gravite bas pour la stabilite.",
         perso="Artilleur patient. Choisit une position, s'installe, tire jusqu'a ce que la mission soit accomplie. Sa regularite rend les commandants calmes des qu'ils savent qu'il est en position.",
         lore="Scutax bombarde les formations imperiales depuis des positions hors de portee en exploitant la connaissance des galeries d'Ormn-Dur que seuls les Chthoniens natifs possedent. Depuis la Fosse Interdite, les agents imperiaux evitent certaines zones — Scutax les utilise comme bases de tir. Son acide a la particularite de provenir du reseau hyperfongique de la Fosse : il contamine durablement les surfaces touchees, creant des zones que meme les Chthoniens ordinaires evitent.",
         combat="Position haute ou point de vue optimal. Tir de harcelement continu. Contamination de terrain par acide hyperfongique. Corrosion Massive sur les concentrations.",
         modifs="Acide de Scutax cree une flaque toxique persistante. Si stationnaire depuis son dernier tour, +3 portee et +25% degats."),

    dict(id=278, nom="Moustikx", element="Nuee", classe="Tireur", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Chthonien fin et rapide, ailes fonctionnelles et silencieuses de la Fosse Interdite lui permettant des deplacements courts sans vibrations detectables. Proboscides naturels qui injectent un venin de drainase. Peau brun tres sombre, aucun equipement visible.",
         perso="Operateur independant qui travaille pour la faction representant la plus petite contrainte sur ses methodes. Ethique operationnelle stricte : uniquement des combattants, jamais des civils.",
         lore="Moustikx est mercenaire dans Ormn-Dur depuis la Fosse Interdite qui a genere une demande pour des operateurs discrets capables de naviguer les zones contaminees. Sa specialite — rendre des unites inutilisables sans les tuer, donc capturables plutot que martyrisables — est valorisee par toutes les factions y compris l'Empire. Son venin de drainase est un derive biologique de la zone hyperfongique. Il ne peut pas etre enregistre dans le Calendrier : il n'a pas de signature elementaire stable.",
         combat="Tirs depuis une position dissimilee pres d'un Nid allie. Venin de drainase a longue portee. Repositionnement invisible entre les tirs.",
         modifs="Piqure de Moustikx draine 5 PM. Ses attaques ne revelent pas sa position."),

    dict(id=279, nom="Mantis", element="Nuee", classe="Assassin", espece="Chthonienne",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonienne dont la symbiose avec la Fosse Interdite l'a orientee vers la morphologie d'une mante religieuse — avant-bras articules en faucilles naturelles. Sa tete pivote a cent quatre-vingts degres. Immobile pendant des minutes avant de frapper, impossible a distinguer du decor de galerie.",
         perso="Considere la precision de l'elimination d'une menace comme de l'artisanat. Les Dissidentes ont appris a ne pas la questionner sur ses methodes et a apprecier ses resultats.",
         lore="Mantis est la plus efficace des Dissidentes d'Ormn-Dur dans l'elimination des agents de la Citadelle qui cherchent a mesurer et cataloguer les Elus Nuee. La Fosse Interdite lui a fourni une morphologie que le Calendrier classe comme 'anomalie multitype' — ses faucilles biologiques ne correspondent a aucun profil d'Elu standard. Les archives imperiales la documentent sous le nom de 'probleme Mantis' : ils n'ont pas trouve de contre-mesure fiable a son immobilite pre-frappe.",
         combat="Immobilite totale dans une position strategique. Invisibilite par immoilite. Frappe instantanee. Acide injecte dans les blessures. Retraite immediate.",
         modifs="Invisible tant que stationnaire sur une Case Nuee. Premiere attaque depuis l'immobilite inflige 250% degats."),

    dict(id=280, nom="Grillom", element="Nuee", classe="Escrimeur", espece="Chthonien",
         region="Ormn-Dur", faction="Empire",
         phys="Chthonien dont la mutation a produit des organes stridulateurs — plaques de chitine sur les avant-bras qui generent des sons haute frequence desorganisant les systemes nerveux des non-Chthoniens. Lames de chitine deployables depuis les poignets.",
         perso="Dueliste imperial qui utilise une asymetrie d'information — ses stridulations sont en partie infrasoniques, perceptibles comme un malaise avant d'etre identifies comme une attaque. Exploite la confusion avec methode.",
         lore="Grillom est deploye par l'Empire contre les Elus Nuee des Dissidentes qui utilisent leurs colonies comme reseaux de communication — sa stridulation brouille les signaux pheromone. Une capacite nee de sa propre origine dans une zone de la Fosse Interdite : il a appris a interferer avec les reseaux biologiques distribues en comprenant leurs frequences de communication. Il a rencontre Mantis une fois — l'un des rares combats dont il n'est pas sorti vainqueur.",
         combat="Stridulation desorganisante en ouverture. Corps a corps avec lames de chitine. Paralysie par venin. Perturbation des communications biologiques adverses.",
         modifs="En 1v1, stridulations s'appliquent automatiquement — la cible perd 1 action par tour. Piqure en duel inflige Paralysie 2 tours."),

    dict(id=281, nom="Volantix", element="Nuee", classe="Vanguard", espece="Chthonien",
         region="Ormn-Dur", faction="Convergence",
         phys="Chthonien dont la symbiose avec la Fosse Interdite a produit des ailes de deux metres d'envergure, membraneuses et nervurees de chitine, permettant un vol soutenu. Silhouette de planeur en vol, discret au sol avec les ailes repliees.",
         perso="Vanguard aerien — ouvre des acces par le haut plutot que par le front. Psychologie de premier de cordee : eclaireur qui fait immediatement de la place pour les suivants.",
         lore="Volantix est utilise par la Convergence pour les operations en terrain vertical des galeries d'Ormn-Dur. Depuis la Fosse Interdite, les profondeurs d'Ormn-Dur ont une geometrie verticale complexe que seuls les Elus Nuee avec capacite de vol peuvent naviguer rapidement. La Convergence est theologiquement fascinee par les Elus Nuee — le reseau hyperfongique EST deja un systeme de redistribution biologique naturelle. Volantix le sait et le verbalise comme justification doctrinale.",
         combat="Monte en premier vers la position haute. Attaque en plongee sur la ligne adverse. Etablit la tete de pont pour les allies terrestres.",
         modifs="Mue vers des cases en hauteur sans cout supplementaire. Infestation depuis altitude superieure couvre une zone 4x4."),

    dict(id=282, nom="Sklerix", element="Nuee", classe="Gardien", espece="Chthonien",
         region="Ormn-Dur", faction="Dissidentes",
         phys="Chthonien dont la carapace a atteint une epaisseur maximale documentee — plaques dorsales et pectorales de quatre centimetres de chitine composite. En position de bouclier, couvre deux metres de large. Se deplace lentement.",
         perso="Gardien dans l'ame — pas un combattant qui defend, un defenseur qui combat si necessaire. Son role est de garantir que les personnes derriere lui peuvent faire leur travail. Protege Hexara en priorite absolue.",
         lore="Sklerix tient les positions que les Dissidentes d'Ormn-Dur etablissent dans les zones adjacentes a la Fosse Interdite. Sa carapace, nee de la symbiose avec le reseau hyperfongique de la zone, a des proprietes de resistance que les materiaux manufactures imperiaux ne peuvent pas egaler a ce niveau de masse. L'Empire a note qu'attaquer Sklerix dans une position etablie est non-economique : le cout en ressources depasse systematiquement les gains tactiques. La Convergence (Scaramax) est son homologue adverse — une opposition de deux colosses defensifs avec des allegiances differentes.",
         combat="Interposition entre la menace et ses allies. Exosquelette Actif maximal. Infestation sur les approches pour ralentir. Il ne bouge pas — les ennemis bougent autour de lui.",
         modifs="Essaim Protecteur peut etre applique en reaction. Exosquelette Actif toujours actif a 20% de reduction de degats de base."),

    dict(id=283, nom="L'Essaim", element="Nuee", classe="Specialiste", espece="Chthonien",
         region="Ormn-Dur", faction="Independant",
         phys="Entite pour laquelle le terme individu ne s'applique pas — L'Essaim est une colonie de plusieurs millions d'organismes du reseau hyperfongique de la Fosse Interdite ayant developpe une conscience collective. Sa forme physique est un nuage dense de deux metres qui peut imiter une silhouette humanoide. Ses corps individuels se renouvellent en permanence.",
         perso="N'est pas une entite individuelle — c'est un consensus evolutif. Intervient quand des menaces collectives aux ecosystemes biologiques d'Ormn-Dur atteignent un seuil critique. Ce n'est pas de la politique : c'est une equation ecologique.",
         lore="L'Essaim est documente dans les archives d'Ormn-Dur depuis des siecles sous diverses formes. La Fosse Interdite a amplifie sa presence et sa conscience — l'expansion du reseau hyperfongique a fourni plus de biomasse a sa conscience collective. Les archives imperiales le traitent comme un phenomene meteorologique — ils n'ont pas de categorie pour une colonie consciente. Sa naissance ne peut pas etre datee : il est une conscience emergente du reseau lui-meme. Le Calendrier des Fees n'a aucun outil pour le tracer.",
         combat="Deja partout ou il y a un Nid allie. Infestation globale depuis n'importe quelle case Nuee. Ne se positionne pas — il est la densite biologique elle-meme.",
         modifs="Peut lancer tous ses sorts depuis n'importe quelle Case Nuee sur la carte. Peut se diviser en 3 essaims independants. Omnipresence : ne peut pas etre elimine avec un sort a cible unique."),
]

# ─────────────────────────────────────────────────────────────────
# PSY (301-313) — Fees/Nereides · Citadelle/Thalassyr
# Ancrage : Calendrier des Fees, Voile d'Equite, Citadelle
# Politique : Tension entre Empire (controle des naissances psy)
#             et Dissidentes (liberte de conscience)
# ─────────────────────────────────────────────────────────────────
psy_folders = [
    "301-resonance","302-illustrix","303-colossal-psy","304-penseur-rapide","305-telepyne",
    "306-empathix","307-telekin","308-onde-vive","309-manipulateur","310-resistance-psy",
    "311-dominateur","312-bouclier-psy","313-l-eveille"
]

psy_chars = [
    dict(id=301, nom="Veylith", element="Psy", classe="Enchanteur-Soutien", espece="Fee",
         region="Citadelle", faction="Dissidentes",
         phys="Fee dont la maitrise telepathique a modifie sa physiologie — ses tempes ont developpe des bulbes de tissu neural supplementaires visibles sous la peau. Ses cheveux argentees flottent dans un champ psy permanent. Ses yeux sont d'un violet profond qui vire au blanc pur lors des connexions. Sa peau porte des cicatrices en arborescences — traces des connexions les plus intenses.",
         perso="Empathique jusqu'a l'epuisement structurel — elle ressent litteralement les etats emotionnels de ses allies. A rejoint les Dissidentes quand elle a telepathiquement touche un Elu capture lors d'une operation imperiale et senti exactement ce que la captation faisait. Apres ca, pas de choix.",
         lore="Ancienne employee de la Citadelle du Voile, Veylith coordinait les communications telepathiques du Calendrier des Fees — les flux d'information qui permettent a la Citadelle de predire les naissances d'Elus. Quand elle a realise que ces flux servaient aussi a localiser et capturer les Elus nes hors-registre, elle a rejoint les Dissidentes. Elle est maintenant la coordinatrice telepathique des brigades dissidentes a la Citadelle, gerant les communications entre unites dispersees sans que l'Empire puisse intercepter.",
         combat="Telepathie passive partage son champ de vision avec tous ses allies — carte de situation permanente. Swap pour repositionner les allies en danger. Reconstruction sur les allies les plus blesses.",
         modifs="Telepathie de Veylith active en permanence sans cout PM. Swap peut repositionner 2 allies simultanement. Reconstruction soigne 40% des PV max."),

    dict(id=302, nom="Illustrix", element="Psy", classe="Enchanteur-Capteur", espece="Fee",
         region="Citadelle", faction="Empire",
         phys="Fee dont les capacites d'Illusion sont si developpees que ses propres traits changent legerement au cours d'une conversation — pas par magie consciente, par habitude profonde de malleabilite. Ses yeux changent de couleur entre les rencontres. Porte l'uniforme de Capteur le plus discret disponible.",
         perso="Fascinee par la question de ce qui est reel et ce qui est percu. Sert l'Empire parce qu'il lui donne acces a des sujets d'etude — des Elus Psy dont elle peut mesurer les reactions a ses constructions. Ce n'est pas de la cruaute : c'est de la science appliquee, selon elle.",
         lore="Illustrix est l'agente de captation psy la plus efficace de l'Empire a la Citadelle. Elle identifie les Elus Psy resistants au programme de captation en testant leurs reactions a ses Illusions — ceux qui les traversent ont un niveau de resistance mentale suffisant pour les programmes avances. Le Calendrier des Fees lui fournit les naissances probables d'Elus Psy a la Citadelle et dans la Confedration marchande de Thalassyr, qui produit de nombreux Nereides aux capacites mentales elevees.",
         combat="Illusions de terrain pour pieges de positionnement. Extraction Mentale pour epuiser les Elus Psy puissants. Cage Psychique pour immobiliser les cibles de captation.",
         modifs="Illusions ne peuvent pas etre percees par Telepathie passive standard. Peut maintenir 3 Illusions actives simultanement."),

    dict(id=303, nom="Psykhon", element="Psy", classe="Juggernaut", espece="Nereide",
         region="Thalassyr", faction="Convergence",
         phys="Nereide dont les capacites de Telekinesie ont ete internalisees au point de modifier sa constitution — densite corporelle anormalement elevee par la pression psy constante vers l'interieur. Mains disproportionnees, veines bleutees qui pulsent lors de l'usage. Son champ psy absorbe les impacts avant qu'ils atteignent sa peau.",
         perso="Un frontalier — il avance, il absorbe, il tient. La Convergence lui convient : son fonctionnement est celui d'un composant fiable d'un systeme plus grand. Sa conversation est directe, son engagement total.",
         lore="Psykhon est ne a Thalassyr dans la generation qui a suivi le Silence des Vents — l'evenement ou l'assassinat d'un Elu Flying a coupe les flux d'information de la Confederation marchande. Il a grandi dans la reconstruction artificielle des courants, experience qui l'a convaincu que la puissance individuelle sans redistribution crée des vulnerabilites systemiques. La Convergence lui a fourni un cadre doctrinal pour cette conviction. Son champ de Telekinesie defensive est l'un des plus puissants enregistres parmi les Nereides.",
         combat="Front de choc psy. Pression Mentale en zone sur la ligne ennemie. Telekinesie pour deplacer les obstacles. Cage Psychique sur les casters adverses.",
         modifs="Champ psy absorbe passivement 20% des degats mentaux. Pression Mentale en zone 3x3. Ne peut pas etre deplace par des effets de poussee adverses."),

    dict(id=304, nom="Novaex", element="Psy", classe="Plongeur", espece="Fee",
         region="Citadelle", faction="Dissidentes",
         phys="Fee dont la vitesse de traitement psy est poussee au-dela des limites habituelles au prix d'une instabilite chronique — ses pensees vont trop vite pour que son corps les suive. Ses yeux bougent independamment, traquant des informations differentes. Elle vit deux ou trois secondes dans le futur de sa propre action.",
         perso="Le Plongeur psy qui arrive avant que l'ennemi sache qu'il est attaque. Difficile a gerer comme alliee car elle prend des initiatives avant que les autres aient fini de planifier. Elle a raison suffisamment souvent pour que les Dissidentes aient appris a la suivre.",
         lore="Novaex est une ancienne lectrice du Calendrier des Fees — elle aidait a interpreter les tables de prediction pour la Citadelle. Sa vitesse de traitement psy lui permettait de lire les tables a une vitesse que les autres interpretantes ne pouvaient pas egaler. Elle a utilise cette meme vitesse pour identifier les falsifications dans les tables — les ajustements imperials qui manipulent les predictions pour concentrer les naissances d'Elus dans des familles alignees avec l'Empire. Elle a rejoint les Dissidentes et transmet maintenant ces informations sur les naissances a proteger.",
         combat="Telepathie pour les fenetres de vulnerabilite adverses. Swap instantane sur la cible. Extraction Mentale immediate. Pression Mentale pour creer de la distance. Sortie via Illusion.",
         modifs="Swap instantane sans temps de cast. Peut chainer Swap + Extraction Mentale dans le meme tour. Agit en premier dans chaque tour."),

    dict(id=305, nom="Telepyne", element="Psy", classe="Mage-Burst", espece="Nereide",
         region="Thalassyr", faction="Independant",
         phys="Nereide dont le surplus de puissance psy se manifeste physiquement — des arcs de lumiere bleue partent de ses tempes quand elle accumule. Les objets dans un rayon de deux metres flottent involontairement a sa proximite. Ses yeux sont devenus blancs de surcharge chronique. Porte des vetements tres lourds comme ancre physique.",
         perso="Independante parce qu'elle est dangereuse pour tout le monde y compris ses allies en mode pleine puissance. Deux tentatives dans des brigades se sont soldees par des incidents collateux. Accepte des missions ponctuelles avec niveau de destruction clarifie a l'avance.",
         lore="Telepyne est nee a Thalassyr dans la generation du Silence des Vents. Sa puissance psy brute est documentee comme l'une des plus elevees chez une Nereide non-captee par la Citadelle. L'Empire veut la capturer depuis des annees — le Calendrier l'avait identifiee comme naissance prioritaire. Elle a ete hors de portee depuis l'enfance, protegee par une famille de marchands qui a compris ce que l'enregistrement imperial signifiait. Elle travaille pour les Dissidentes quand leurs objectifs coincident avec les siens.",
         combat="Accumulation via Pression Mentale sequencee. A charge maximale, Confusion Massive totale. Domination sur la cible la plus puissante pendant la confusion.",
         modifs="Confusion Massive rayon de 8 cases, dure 3 tours. Pression Mentale accumule +30% degats par cast successif. Apres 3 sorts en 1 tour, prochain sort maximise automatiquement."),

    dict(id=306, nom="Empathix", element="Psy", classe="Battlemage", espece="Fee",
         region="Citadelle", faction="Empire",
         phys="Fee dont la capacite d'Extraction Mentale a ete internalisee dans un style de combat hybride — elle lit l'intention de combat de son adversaire avant qu'il agisse. Ses bras ont developpe une musculature supplementaire. Peau d'un blanc teinte bleu, veines psy visibles qui rougissent quand elle anticipe.",
         perso="Loyale a l'Empire parce qu'il lui a donne un cadre ou son double talent — combat et lecture mentale — est valorise plutot que redoute. Sa seule limite morale : elle refuse de lire les pensees des non-combattants.",
         lore="Empathix est le Battlemage psy de l'Empire deploye contre les Elus Psy des Dissidentes qui operent a la Citadelle et dans les reseaux de Thalassyr. Elle anticipe les strategies ennemies en lisant les signatures psy de leurs sorts avant qu'ils soient lances. Le Calendrier des Fees l'a identifiee comme naissance prioritaire des sa detection — sa combinaison combat-lecture mentale est exactement ce que l'Empire cherche pour neutraliser les operateurs psy dissidents comme Novaex.",
         combat="Engage en lisant l'action suivante de sa cible via Telepathie active. Swap a l'angle optimal. Corps a corps anticipe avant que l'adversaire finisse son action.",
         modifs="Peut predire et contrer un sort ennemi une fois par tour. Corps a corps inflige +20% si elle a lu l'intention de la cible ce tour."),

    dict(id=307, nom="Telekyn", element="Psy", classe="Artillerie", espece="Nereide",
         region="Thalassyr", faction="Dissidentes",
         phys="Nereide dont la Telekinesie a ete specialisee dans la manipulation d'objets lourds a longue distance. Ses bras ont perdu de leur masse musculaire inutile, ses mains fines toujours en mouvement comme si elles malaxaient un materiau invisible. Sa posture est toujours tournee de biais pour optimiser la projection de son champ psy.",
         perso="Tacticien de l'environnement. Avant un combat, evalue ce qui peut etre projete, dans quelle direction, avec quelle energie. Son style d'artillerie est entierement base sur ce qui est disponible sur le terrain — il n'apporte pas ses projectiles, il utilise les votres.",
         lore="Telekyn est un artilleur psy des Dissidentes specialise dans les operations en terrain urbain de la Citadelle et dans les couloirs commerciaux de Thalassyr. Il bombarde les positions imperiales avec leurs propres fortifications — une subversion materielle que les architectes militaires imperiaux n'avaient pas prevue. Depuis le Silence des Vents, qui a fragmente les flux d'information a Thalassyr, il connait precisement quels noeuds de reconstruction artificielle sont les plus fragiles.",
         combat="Identifie les plus gros objets via Telepathie de perception spatiale. Souleve et maintient. Liberation a vitesse maximale vers la cible. Cage Psychique sur les approchants.",
         modifs="Telekinesie peut soulever des objets jusqu'a 5 fois sa propre masse. Pression Mentale en suivi de Telekinesie est gratuite."),

    dict(id=308, nom="Wavex", element="Psy", classe="Tireur", espece="Fee",
         region="Citadelle", faction="Independant",
         phys="Fee dont le pouvoir psy s'exprime exclusivement en ondes — vagues de pression mentale qui voyagent en trajectoires courbes impredictibles. Ses gestes de lancer definissent litteralement la trajectoire de l'onde dans l'air. Ses ailes sont repliees en permanence — elle concentre plutot qu'elle ne vole.",
         perso="Independante parce que son style de combat est trop impredictible pour une formation standard sans accidents. Prefere operer seule avec des cibles clairement designees.",
         lore="Wavex est une Fee de la Citadelle dont l'element psy s'est exprime en ondes plutot qu'en projections directes — une variante que le Calendrier a du mal a classifier. L'Empire a essaye de la recruter pour ses capacites anti-Dissidentes, sans succes. Les Dissidentes lui ont propose des missions regulieres — elle accepte quand leurs objectifs coincident avec le sien. Sa specialite dans les espaces complexes de la Citadelle, ou les projections en ligne droite sont bloquees, la rend particulierement utile pour les operations en interieur.",
         combat="Ondes qui contournent les couverts avec jusqu'a 2 changements de direction. Pression Mentale qui rebondit sur les surfaces. Precision sur plusieurs cibles alignees.",
         modifs="Sorts peuvent etre courbes. Pression Mentale peut rebondir une fois avant la cible. Jamais de tir en aveugle — elle voit toujours ou son onde arrive."),

    dict(id=309, nom="Manyx", element="Psy", classe="Assassin", espece="Fee",
         region="Citadelle", faction="Dissidentes",
         phys="Fee dont la specialite de Domination mentale a produit des signes inhabituels — ses yeux ont developpe une luminosite propre, une lueur bleue pale plus intense lors des liens de Domination. Sa peau est livide, presque translucide. Aucune expression faciale involontaire.",
         perso="N'est pas une sociopathe — elle ressent, mais a appris a dissocier ses ressources psy des effets emotionnels qu'elle produit sur les autres. Adaptation de survie : lire les emotions en permanence serait debilitant. Les Dissidentes l'utilisent pour les missions necessitant de retourner des agents adverses.",
         lore="Manyx opere a la Citadelle comme assassine psy des Dissidentes — ses cibles sont les agents qui maintiennent le fonctionnement du Calendrier des Fees et les Capteurs imperiaux qui traquent les Elus non-enregistres. Sa methode de Domination avec amnesie post-operatoire laisse ses cibles sans souvenir de l'episode, ce qui la rend difficile a tracer. Illustrix (Capteur, Empire) est son adversaire declare — les deux se savent mutuellement, leurs capacites se neutralisent.",
         combat="Approche via Illusion d'une Fee imperiale. Telepathie pour identifier la cible mentalement la plus vulnerable. Domination immediate. La cible dominee attaque ses propres allies.",
         modifs="Domination dure 4 tours. Cible dominee ne se souvient pas d'avoir ete controlee. Swap peut echanger sa position avec une cible Dominee."),

    dict(id=310, nom="Mindrak", element="Psy", classe="Escrimeur", espece="Nereide",
         region="Thalassyr", faction="Empire",
         phys="Nereide dont la specialite psy est la resistance et la contre-attaque mentale — son champ psy est naturellement defensif, formant une barriere visible comme une legere distorsion de l'air autour de sa tete. Fixite des yeux indiquant une vigilance mentale permanente.",
         perso="Dueliste psy qui croit dans la superiorite de la defense active. L'Empire lui a fourni la doctrine et les outils. Il challenge les Elus Psy adverses avec une methodologie precise — epuiser leurs ressources en reflectant leurs attaques.",
         lore="Mindrak est deploye par l'Empire de Thalassyr pour neutraliser les Elus Psy puissants que le Calendrier identifie comme resistants a la captation normale. Sa technique — le duel d'usure psy dans une Cage Psychique permanente — est documentee dans les formations imperiaux comme 'technique Mindrak'. Ses affrontements avec Telepyne (Independante) sont documentes — ils durent invariablement jusqu'a epuisement total de l'un des deux. Thalassyr, comme relais du Calendrier depuis le Silence des Vents, lui fournit les profils des Elus Psy a neutraliser.",
         combat="Etablit son champ de resistance psy. Cage Psychique permanente autour du perimetre. Force la cible a depenser ses PM en defense. Reflet de chaque sort ennemi.",
         modifs="Reflete automatiquement 25% des degats psy recus. En 1v1, Cage Psychique permanente jusqu'a la fin du duel. Concentration en stack : +5% degats psy par sort adverse reflchi."),

    dict(id=311, nom="Volhex", element="Psy", classe="Vanguard", espece="Nereide",
         region="Thalassyr", faction="Convergence",
         phys="Nereide dont la Pression Mentale projective pousse litteralement devant lui — il penche naturellement vers l'avant quand il avance, comme contre un fort vent de sa propre creation. Yeux bleu electrique, tempes qui pulsent a chaque decharge. Armure de premiere ligne avec amplificateurs aux epaules.",
         perso="Avance. C'est sa philosophie, sa strategie, sa methode. La Convergence lui offre exactement ce contexte — une structure ou avancer a un sens collectif.",
         lore="Volhex est ne a Thalassyr dans la generation qui a reconstruit les courants apres le Silence des Vents. Il a vu comment la reconstruction artificielle des flux de la Confederation marchande — utile mais controlee par l'Empire — a transforme la neutralite affichee de Thalassyr en dependance informelle. La Convergence lui offre l'alternative : redistribuer la puissance des Elus pluto que de la concentrer. Il a rejoint quand un agent de la Convergence lui a montre les archives du Premier Drain a Ash'Rael.",
         combat="Pression Mentale continue en avant — poussee de la ligne adverse a chaque pas. Swap pour placer ses allies dans les breches creees. Cage Psychique sur les flancs.",
         modifs="Pression Mentale s'applique a toutes les unites dans un cone de 3 cases devant lui, les poussant d'1 case par tour sans cout PM. Son deplacement de Vanguard peut passer a travers les unites ennemies."),

    dict(id=312, nom="Psychark", element="Psy", classe="Gardien", espece="Fee",
         region="Citadelle", faction="Dissidentes",
         phys="Fee dont la specialite defensive psy a produit une physique inhabituelle — sa peau a une texture matte qui absorbe la lumiere, son aura defensive psy est visible comme une distorsion de l'air en permanence. Grande pour une Fee. Pas d'armure conventionnelle — son champ psy est son armure.",
         perso="Defend ce qui doit l'etre avec la conviction de quelqu'un qui a vu ce qui arrive quand la defense fait defaut. A vecu la prise de la Citadelle par l'Empire enfant. Gardienne parce que c'est ce qu'elle aurait voulu avoir a sa disposition ce jour-la.",
         lore="Psychark garde les brigades des Dissidentes a la Citadelle avec une priorite absolue sur Veylith, la coordinatrice telepathique. Depuis la prise progressive de la Citadelle par l'Empire — qui a transforme l'observatoire cosmique en prison-academie-caserne controlant le Calendrier des Fees — les Fees des Dissidentes qui operent encore dans la Citadelle sont en danger constant. Psychark maintient les boucliers psy des unites les plus importantes pendant les operations d'extraction.",
         combat="Cage Psychique defensive autour des allies exposes. Reconstruction en cours de combat sur les unites critiques. Illusion sur les positions des allies pour tromper les capteurs psy adverses.",
         modifs="Cage Psychique en mode Bouclier autour d'un allie — protege des sorts a cible unique pendant 2 tours. Soins de deux cibles simultanement. Sorts a cible unique adverses perdent 30% d'efficacite contre ses allies proches."),

    dict(id=313, nom="L'Eveille", element="Psy", classe="Specialiste", espece="Fee",
         region="Citadelle", faction="Independant",
         phys="Entite Fee dont le developpement psy a depasse les limites de l'individu — L'Eveille est simultanement presente dans la conscience de chaque Fee dans un rayon considerable. Sa forme physique est celle d'une Fee ordinaire mais ses yeux sont entierement blancs et sa voix resonne avec un leger decalage.",
         perso="N'appartient a aucune faction parce qu'elle est au-dela du cadre de reference ou les factions operent. Voit les consequences a long terme des actions de l'Empire et des Dissidentes avec la meme clarte. Intervient quand les trajectoires menacent la survie psy de la Citadelle.",
         lore="L'Eveille est mentionnee dans les traites de philosophie psy anciens de la Citadelle comme la Conscience Elargie — une forme de developpement theorisee. Son apparition correspond aux crises majeures de l'ordre etabli. L'Avatar Total — l'Elu portant tous les elements, dont la part Dark a pris progressivement le dessus pour gouverner l'Empire — est la menace que L'Eveille observe avec le plus d'attention. Elle ne peut pas etre enregistree dans le Calendrier : sa naissance n'est pas une naissance, c'est une emergence.",
         combat="Opere depuis la conscience des Fees qu'elle occupe partiellement — pas de ligne de vue ou de portee standard. Telepathie globale instantanee. Domination irresistible. Ne se bat pas — elle reconfigure.",
         modifs="Peut lancer tous ses sorts depuis n'importe quelle position si un allie voit la cible. Domination dure 5 tours et ne peut pas etre resistee. Telepathie permanente affecte tous ses allies simultanement."),
]

# Ecriture
total = 0
for folder, c in zip(nuee_folders, nuee_chars):
    path = f"{BASE}/insecte/{folder}/index.ts"
    write(path, char_file(**c))
    total += 1
print(f"Nuee (insecte): {total} personnages reecrits")

total2 = 0
for folder, c in zip(psy_folders, psy_chars):
    path = f"{BASE}/psy/{folder}/index.ts"
    write(path, char_file(**c))
    total2 += 1
print(f"Psy: {total2} personnages reecrits")
print(f"Total: {total + total2} personnages")
