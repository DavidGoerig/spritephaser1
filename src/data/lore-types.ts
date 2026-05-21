// ============================================================
//  LORE-TYPES.TS — Schéma narratif complet (niveau roman)
//  Chaque personnage "possède" des morceaux de l'histoire globale.
//  Lire tous les personnages révèle l'intégralité du lore.
// ============================================================

import type { ElementLore, EspeceLore, RegionLore, FactionLore } from './lore';

// ── ÉVÉNEMENTS FONDATEURS ────────────────────────────────────
// 9 événements qui ont sculpté le monde. Chaque personnage en
// porte les cicatrices — certains en sont la cause, d'autres
// les victimes, d'autres encore les seuls témoins restants.

export const EVENEMENTS_FONDATEURS = [
  'Rupture_Thermique',      // Varkhôl — l'Élu Glace disparaît, la Forge explose
  'Silence_des_Vents',      // Thalassyr — assassinat de l'Élu Vent, vents artificiels
  'Chute_des_Nuages',       // Asterciel — ville partiellement effondrée
  'Faim_des_Racines',       // Sylvera — réseau racinaire dévore les sols
  'Fosse_Interdite',        // Ormn-Dur — zone hyperfongique libérée
  'Vol_de_la_Lumiere',      // Noctéa — énergie lumineuse volée, nuit permanente
  'Gel_Eternel',            // Crysalme — armée figée par un Élu Glace surpuissant
  'Saturation_des_Elus',    // Isthme — surnombre d'Élus, anomalies élémentaires
  'Premier_Drain',          // Citadelle — premier sacrifice d'Élu par la Convergence
] as const;

export type EvenementFondateur = typeof EVENEMENTS_FONDATEURS[number];

// ── ARCS NARRATIFS ───────────────────────────────────────────
// 8 fils conducteurs de l'histoire. Un personnage peut appartenir
// à plusieurs arcs. L'ensemble des arcs couvre le conflit global.

export const ARCS_NARRATIFS = [
  'La_Forge_Confisquee',    // Varkhôl — contrôle des Élus industriels
  'Le_Neutre_Qui_Ment',     // Thalassyr — neutralité corrompue par l'info
  'Le_Ciel_Vendu',          // Asterciel — aristocratie vs compétence
  "L_Heritage_Brule",       // Sylvera — mémoire vs nécessité du feu
  'La_Fosse_Ouverte',       // Ormn-Dur — extraction vs dignité
  'Vel_Nox_Double_Jeu',     // Noctéa — ombre comme liberté vs prédation
  'Les_Archives_Gelees',    // Crysalme — conservation vs gel de l'histoire
  "L_Avatar",               // Global — Second Avatar, chute de l'Empire
] as const;

export type ArcNarratif = typeof ARCS_NARRATIFS[number];

// ── APPARENCE ────────────────────────────────────────────────
// Description physique canonique — espèce + variations individuelles.
// Toujours assez précise pour générer une image IA fidèle.

export interface Apparence {
  taille_corpulence: string;     // ex: "Petite pour une Pyrienne, corps compact, épaules larges"
  peau: string;                  // couleur + manifestations élémentaires
  yeux: string;                  // couleur, forme, particularités élémentaires
  cheveux: string;               // texture, couleur, coupe, détails
  vetements: string;             // tenue canonique (région + faction + rôle)
  signes_particuliers: string;   // cicatrices, bijoux, marques élémentaires uniques
}

// ── PSYCHOLOGIE ──────────────────────────────────────────────
// Ce qui fait le personnage : forces, contradictions, peurs, moteurs.

export interface Psychologie {
  dominante: string;             // trait principal (pas un adjectif seul — une tension)
  contradictions: string;        // ce qui le rend humain et imparfait
  peur: string;                  // peur profonde qui oriente ses décisions
  desir: string;                 // ce qu'il veut réellement (pas son objectif déclaré)
  rapport_au_pouvoir: string;    // sa relation à son élément et à ce qu'il permet de faire
}

// ── HISTOIRE ─────────────────────────────────────────────────
// Structure en 5 moments narratifs.
// Chaque moment est un morceau du global story.

export interface MomentNarratif {
  titre: string;                 // nom du moment (ex: "La Nuit de la Forge")
  texte: string;                 // 100-400 mots — narratif, pas descriptif
}

export interface Histoire {
  origine: MomentNarratif;       // famille, enfance, monde dans lequel il est né
  eveil: MomentNarratif;         // comment son pouvoir s'est manifesté + impact
  rupture: MomentNarratif;       // l'événement qui a tout changé
  maintenant: MomentNarratif;    // sa situation actuelle et ses tensions
  objectif: MomentNarratif;      // ce qu'il cherche à faire — et ce que ça coûtera

  evenements_narratifs: EvenementFondateur[];  // événements fondateurs auxquels il participe
  arcs: ArcNarratif[];                         // arcs dont il est acteur
  position_dans_arc: string;     // son rôle précis dans ces arcs (cause/victime/agent/témoin)
}

// ── RELATIONS ────────────────────────────────────────────────
// Chaque lien définit un fil narratif entre personnages.
// L'ensemble des relations forme le réseau de l'histoire.

export type TypeRelation =
  | 'allié'
  | 'ennemi'
  | 'mentor'
  | 'disciple'
  | 'rival'
  | 'amour'
  | 'famille'
  | 'contact_nécessaire'    // travaillent ensemble sans se faire confiance
  | 'fantôme'              // un mort qui pèse encore sur ce personnage
  | 'inconnue_qui_change_tout';  // ne se connaissent pas encore, mais vont se rencontrer

export interface Relation {
  personnage_id: number;
  nom: string;                    // pour la lisibilité
  type: TypeRelation;
  depuis_ici: string;             // comment CE personnage perçoit l'autre (1-3 phrases)
  depuis_la?: string;             // comment L'AUTRE perçoit ce personnage (optionnel)
  arc_commun?: ArcNarratif;       // arc qui les lie
  statut: 'actif' | 'latent' | 'rompu' | 'mort';
}

// ── COMBAT LORE ──────────────────────────────────────────────
// Les sorts ne sont pas des mécaniques — ce sont des actes dans le monde.

export type TypeSort =
  | 'sort_de_base'
  | 'sort_signature'
  | 'sort_situationnel'
  | 'ultimate'
  | 'passif';

export interface Sort {
  nom: string;                    // nom canonique du sort dans le monde
  type: TypeSort;
  elements: ElementLore[];        // éléments utilisés (peut être hybride)
  description_gameplay: string;   // mécanique en 1-2 phrases
  description_lore: string;       // comment ce sort existe dans le monde — son histoire
  image_prompt?: string;          // description IA pour illustrer le sort en action
}

export interface CombatLore {
  philosophie: string;            // ce que le combat signifie pour ce personnage
  sorts: Sort[];                  // 4-6 sorts nommés avec contexte lore
}

// ── PROMPTS IMAGES ───────────────────────────────────────────
// Descriptions précises pour génération IA (Midjourney, ComfyUI…)
// Format: [sujet canonique] + [lieu précis] + [action] + [mood] + [style]

export type TypeImage =
  | 'portrait'            // buste face/3/4, fond neutre de la région
  | 'lore_scene'          // moment clé de son histoire
  | 'action_signature'    // en plein combat, sort signature actif
  | 'relation_scene';     // avec un autre personnage du réseau

export interface ImagePrompt {
  type: TypeImage;
  titre: string;
  description: string;    // prompt complet, prêt à coller
  generated_path?: string; // rempli quand l'image est produite
}

// ── PERSONNAGE LORE COMPLET ───────────────────────────────────
// Extension du Personnage existant avec le couche narrative complète.
// Stockée séparément dans src/data/characters/[element]/[id-nom]/lore.ts
// pour ne pas alourdir les fichiers de données de jeu.

export interface PersonnageLoreComplet {
  id: number;
  nom: string;
  element: ElementLore;
  element2?: ElementLore;
  espece: EspeceLore;
  region: RegionLore;
  faction: FactionLore;

  apparence: Apparence;
  psychologie: Psychologie;
  histoire: Histoire;
  relations: Relation[];
  combat: CombatLore;
  image_prompts: ImagePrompt[];

  lore_long: string;              // chapitre de roman — 1500 à 5000 mots
  mot_count_cible: number;        // objectif en mots selon l'importance du personnage
}

// ── ÉVÉNEMENT FONDATEUR (données structurées) ─────────────────
// Utilisé par la frise temporelle interactive.

export interface EvenementData {
  id: EvenementFondateur;
  titre: string;
  annee_relative: number;         // -100 = 100 ans avant maintenant, 0 = maintenant
  region: RegionLore;
  description_courte: string;     // 2-3 phrases
  description_longue: string;     // 1-3 paragraphes narratifs
  personnages: Array<{
    id: number;
    nom: string;
    role: 'cause' | 'victime' | 'héros' | 'témoin' | 'profiteur';
  }>;
  consequence_visible: string;    // ce qu'on voit encore aujourd'hui dans le monde
  lien_arc: ArcNarratif[];
}

// ── DONNÉES CHRONOLOGIQUES DES 9 ÉVÉNEMENTS ──────────────────
export const EVENEMENTS: Record<EvenementFondateur, EvenementData> = {
  Rupture_Thermique: {
    id: 'Rupture_Thermique',
    titre: "La Rupture Thermique",
    annee_relative: -87,
    region: 'Varkhôl',
    description_courte: "L'Élu Glace qui tempérait les forges de Khar-Vurn disparut sans explication. Le bassin volcanique entra en surpression. Une partie de la ville industrielle explosa. La Forge Silencieuse — quartiers figés dans leur dernière seconde — est désormais un sanctuaire de cendres.",
    description_longue: `Il y avait, à Khar-Vurn, un pacte vieux comme la ville elle-même : les Élus Glace tempèrent ce que les Élus Feu dévorent. Sans l'un, l'autre consume tout. Pendant des générations, cet équilibre avait tenu. Puis Veldris, l'Élu Glace de la Grande Forge, disparut en une nuit — pas mort, pas capturé : simplement absent, comme retiré du monde. En trois jours, la surpression dans les bassins volcaniques atteignit le seuil critique. Le Quatrième District de Forge éclata au lever du soleil. Quatorze cents personnes périrent dans les premières heures. Trois mille autres portent encore sur le corps les marques du feu libéré.

La Forge Silencieuse — nom donné aux quartiers vitrifiés qui ont survécu figés dans leur dernière seconde — est devenue le symbole de ce que le contrôle impérial des Élus peut faire quand il faillit. L'Empire affirme que la disparition de Veldris était une défaillance personnelle. Les Dissidentes disent qu'il a été extrait par la Citadelle pour une mission secrète et que son absence était planifiée — un test des limites industrielles de Varkhôl. Ni les uns ni les autres n'ont de preuve absolue. Mais le feu, lui, a laissé ses preuves dans la pierre.`,
    personnages: [],
    consequence_visible: "La Forge Silencieuse existe toujours au cœur de Khar-Vurn — silhouettes vitrifiées, marteaux suspendus dans leur élan. Le Parti du Feu l'utilise comme monument de la faillite impériale. L'Empire la classe comme zone de deuil et interdit toute enquête.",
    lien_arc: ['La_Forge_Confisquee'],
  },

  Silence_des_Vents: {
    id: 'Silence_des_Vents',
    titre: "Le Silence des Vents",
    annee_relative: -64,
    region: 'Thalassyr',
    description_courte: "Un Élu Vent central de Thalassyr fut assassiné pour couper les circuits d'information que les Fées utilisaient. Un Élu Electrique recréa artificiellement les courants. Les vents naturels furent remplacés par des réseaux commandés.",
    description_longue: `Thalassyr vivait de ses vents — pas comme un détail poétique, mais comme une infrastructure vitale. Les Élus Vent y assuraient la circulation des informations, des marchandises et des personnes entre les archipels. Sans vents, pas de commerce. Sans commerce, pas de neutralité. L'assassinat de Lyraen, l'Élu Vent qui maintenait le réseau central, prit l'apparence d'un accident de mer. Mais Lyraen était aussi le principal transmetteur des données que la Citadelle des Fées utilisait pour anticiper les naissances d'Élus dans toute la région.

Quelqu'un — une faction, un État, une organisation — voulait couper ce lien. Les vents cessèrent de souffler sur les canaux intérieurs de Néris pendant sept jours. Le port s'immobilisa. La Confédération, en état de panique économique, accepta l'offre d'un jeune Élu Electrique, Orven, de recréer les courants par induction artificielle. C'est ainsi que les vents de Thalassyr devinrent commandés — et que quelqu'un, quelque part, apprit à lire leurs commandes.`,
    personnages: [],
    consequence_visible: "Les vents de Néris sont artificiels depuis soixante-quatre ans. Leur fréquence et direction révèlent aux initiés qui contrôle l'information ce jour-là. Les archivistes de la Confédération le savent. Ils n'en parlent pas.",
    lien_arc: ['Le_Neutre_Qui_Ment'],
  },

  Chute_des_Nuages: {
    id: 'Chute_des_Nuages',
    titre: "La Chute des Nuages",
    annee_relative: -52,
    region: 'Asterciel',
    description_courte: "Un Élu Electrique majeur perdit le contrôle de ses champs magnétiques. Une plateforme habitée d'Heliora s'effondra dans les brumes. Un Élu Stellaire stabilisa les masses d'air et sauva le reste de la ville.",
    description_longue: `Dans une ville suspendue dans les nuages, une seule règle : l'incompétence tue. Pendant vingt ans, Garev avait maintenu les champs magnétiques qui stabilisaient la plateforme Ouest d'Heliora — la plus densément peuplée, celle des artisans et des familles d'ingénieurs du vent. Puis quelque chose se brisa en lui. Pas physiquement — psychiquement. Certains disent qu'il avait reçu un message de la Citadelle lui ordonnant de préparer une extraction d'Élus locaux et que ce qu'il avait découvert avait brisé sa capacité à se concentrer. D'autres disent simplement qu'il était épuisé depuis vingt ans.

La plateforme Ouest tomba en douze minutes. Trois mille personnes. Dans les six minutes qui suivirent, une Élue Stellaire — Veralith, dont personne ne connaissait l'existence — étendit sa perception gravitationnelle sur le reste de la ville et la maintint seule pendant quatre heures, jusqu'à ce que les ingénieurs du vent reconstruisent les champs. Elle sauva onze mille vies. Elle mourut d'épuisement dix-huit jours plus tard. Son nom est gravé au sommet de la tour la plus haute d'Heliora. L'aristocratie qui l'avait ignorée sa vie entière la vénère maintenant.`,
    personnages: [],
    consequence_visible: "La plateforme Ouest n'a jamais été reconstruite. Ses ruines tombent encore dans les brumes en fragments que les pêcheurs des régions basses retrouvent dans leurs filets. L'aristocratie stellaire d'Asterciel date son hégémonie de ce jour.",
    lien_arc: ['Le_Ciel_Vendu'],
  },

  Faim_des_Racines: {
    id: 'Faim_des_Racines',
    titre: "La Faim des Racines",
    annee_relative: -143,
    region: 'Sylvera',
    description_courte: "Un Élu Plante créa un réseau racinaire conscient comme bibliothèque vivante. Le système dévora les sols. Un Élu Feu brûla une partie de la forêt pour sauver le reste.",
    description_longue: `Thalindre voulait sauver la mémoire de Sylvera — toute la mémoire, pas seulement les chants conservés dans les arbres-mémoire des grandes familles. Il passa vingt ans à connecter les racines des forêts de Leth'Var en un réseau nerveux géant, alimenté par sa propre énergie Plante. Le réseau apprit. Il commença à stocker les souvenirs des Sylvans qui s'approchaient de lui. Puis il commença à en avoir besoin — et à prendre ce qu'on ne lui donnait pas.

Les sols autour de Leth'Var s'épuisèrent en sept saisons. Les arbres-mémoire moururent les premiers — absorbés par le réseau qui avait faim. Un Élu Feu nommé Kessaer, que personne n'avait demandé et dont personne ne voulait, entra dans la forêt et brûla le nœud central du réseau. Il perdit ses mains dans le processus. Le réseau mourut. La moitié de la forêt avec lui. Thalindre disparut dans les cendres — certains disent qu'il est mort avec son œuvre, d'autres qu'il a survécu quelque part dans les racines périphériques.

Sylvera est fracturée depuis. Les Conservateurs de la Sève veulent reconstruire les archives. Les Gardiens de la Clairière disent que Kessaer avait raison et qu'un souvenir qui dévore ses porteurs ne mérite pas d'être sauvé.`,
    personnages: [],
    consequence_visible: "La moitié orientale de la forêt de Leth'Var est désormais une zone de cendres régénérées — brûlée mais vivante. Les Sylvans de la tradition orale évitent d'y entrer. Ceux qui y entrent disent entendre parfois des fragments de chants qu'ils ne reconnaissent pas.",
    lien_arc: ["L_Heritage_Brule"],
  },

  Fosse_Interdite: {
    id: 'Fosse_Interdite',
    titre: "La Fosse Interdite",
    annee_relative: -108,
    region: 'Ormn-Dur',
    description_courte: "Un Élu Roche creusa trop profond et libéra une zone hyperfongique — un poison vivant massif. Un Élu Poison apprit à contrôler cet environnement. Devenu source d'énergie — avec une dépendance toxique.",
    description_longue: `Kar-Dum avait toujours cru que la profondeur était une ressource inépuisable. Draven était le meilleur Élu Roche de sa génération — le seul à pouvoir forer au-delà du troisième niveau thermique sans que les galeries s'effondrent. Quand la commission extractive lui demanda d'atteindre la veine de cristaux de chaleur du niveau neuf, il accepta. Il prit trois semaines à descendre. Il perça la veine au troisième jour de la quatrième semaine.

Ce qui remonta n'était pas du cristal. C'était une zone fongique hyperdéveloppée, vieille de millions d'années, qui avait grandi dans le vide géologique. En six heures, le niveau cinq était contamiané. En trois jours, un millier de travailleurs étaient morts. Kar-Dum ferma la fosse et la classe Interdite. Mais une Élue Poison nommée Valyx descendit seule, et revint dix-sept jours plus tard avec un accord : la zone pouvait être utilisée, si on lui donnait ce dont elle avait besoin pour la contrôler. Kar-Dum accepta sans demander ce que c'était.

La Fosse Interdite est maintenant la principale source énergétique souterraine de Ormn-Dur. Valyx est morte depuis quarante ans. Ses successeurs maintiennent l'accord avec la zone fongique — mais certains archivistes souterrains pensent que la zone a évolué et que l'accord initial est désormais dépassé. Personne ne veut vérifier.`,
    personnages: [],
    consequence_visible: "Les niveaux sept à neuf de Kar-Dum sont la seule zone interzone autorisée pour les Élus Poison avec certification spéciale. Les autres y meurent en heures. La couleur des murs y est dorée-verdâtre — la teinte de la zone fongique qui respire.",
    lien_arc: ['La_Fosse_Ouverte'],
  },

  Vol_de_la_Lumiere: {
    id: 'Vol_de_la_Lumiere',
    titre: "Le Vol de la Lumière",
    annee_relative: -71,
    region: 'Noctéa',
    description_courte: "Une figure proto-Convergente vola l'énergie lumineuse d'un Élu Stellaire/Electrique pour démontrer que 'aucune lumière n'est universelle'. La ville bascula dans la nuit. Le réseau de l'ombre naquit.",
    description_longue: `Vel'Nox s'appelait autrefois Luméra — une ville de lumière artificielle maintenue par un Élu Electrique/Stellaire nommé Ael. Pendant quarante ans, Ael avait éclairé la ville pour ceux qui n'avaient pas d'Élus locaux capables de le faire. C'était un don, disait-il. Pas un service. La différence importait.

Un théologien du désert, dont le nom n'a jamais été retrouvé dans les archives, arriva à Luméra avec une doctrine simple : "Une lumière donnée par un seul crée une dépendance. La justice veut que la lumière soit redistribuée — et qu'Ael rende ce qu'il a accumulé." Ses partisans capturèrent Ael et extrayèrent une partie de son énergie élémentaire. Pas sa vie — juste son surplus. Ael survécut. Mais la ville s'éteignit. Et Ael ne put jamais plus l'allumer entièrement.

Luméra bascula dans une pénombre permanente. Certains habitants partirent. D'autres s'adaptèrent — et découvrirent que dans l'obscurité, certaines choses devenaient possibles. Les proscrits de toutes les régions commencèrent à affluer vers ce qui devint Vel'Nox. Le réseau d'ombre — routes, passages, marchés nocturnes — se construisit dans l'absence de lumière. Le théologien du désert avait voulu démontrer que la lumière n'était pas un bien personnel. Il avait inadvertamment fondé la capitale des réfugiés.`,
    personnages: [],
    consequence_visible: "Vel'Nox est la seule grande ville du monde sans éclairage officiel. Ses habitants savent se déplacer dans le noir. Les rares lampes qu'on y trouve sont personnelles, jamais publiques. Ael, ou ce qu'il en reste, vit dit-on dans les ruines de la tour où on lui a pris sa lumière.",
    lien_arc: ['Vel_Nox_Double_Jeu'],
  },

  Gel_Eternel: {
    id: 'Gel_Eternel',
    titre: "Le Gel Éternel",
    annee_relative: -312,
    region: 'Crysalme',
    description_courte: "Lors d'une guerre ancienne, un Élu Glace d'une puissance exceptionnelle stoppa le conflit non par victoire mais par suspension totale. Une armée entière est figée dans le froid absolu — argument politique permanent.",
    description_longue: `La guerre de Crysalme contre la coalition des plaines dura neuf ans. Les Givrins perdirent quatre cités, cent mille civils et trois générations d'Élus Glace avant que Karath — un enfant de seize ans dont la puissance Glace dépassait tout ce que les archives Givrin avaient enregistré — entre sur le champ de bataille.

Il ne combattit pas. Il tendit les bras. En quatre minutes, il gela l'armée adverse — quarante mille soldats — dans leur dernière fraction de seconde de mouvement. Certains en plein bond. D'autres en train de crier. Le gel n'était pas mortel au sens habituel : il ne détruisait pas, il suspendait. Les soldats gelés étaient techniquement vivants — métabolisme au minimum absolu, à la limite du détectable.

Karath mourut d'épuisement le lendemain matin. Mais ce qu'il avait fait existait encore. La coalition signe l'armistice deux jours plus tard. Personne n'ose recommencer la guerre avec quarante mille otages gelés comme argument permanent.

Le Champ Gelé existe toujours à quinze kilomètres au nord d'Iskral. Des équipes de conservation Givrin le maintiennent en état chaque hiver. Les ambassadeurs reçus à Iskral sont systématiquement conduits au Champ Gelé lors de leurs premières heures de négociation. Le message est implicite mais parfaitement compris.`,
    personnages: [],
    consequence_visible: "Le Champ Gelé est le seul monument militaire au monde qui contient encore ses combattants. Trois cent douze ans. La coalition d'origine n'existe plus, mais le gel demeure. Ses descendants réclament périodiquement le dégel. Iskral refuse systématiquement — un Champ gelé est un Champ utile.",
    lien_arc: ['Les_Archives_Gelees'],
  },

  Saturation_des_Elus: {
    id: 'Saturation_des_Elus',
    titre: "La Saturation des Élus",
    annee_relative: -23,
    region: 'Isthme',
    description_courte: "Trop d'Élus à la fois créèrent des interférences élémentaires à Virex. Des zones se comportent anormalement : feu et eau coexistent, plantes poussent dans la pierre. Naissances instables — des pré-avatars émergent.",
    description_longue: `L'Isthme avait toujours absorbé plus d'Élus que les autres régions — sa position géographique centrale et son absence de doctrine élémentaire exclusive en faisaient un point de convergence naturel. Mais il y a vingt-trois ans, quelque chose brisa l'équilibre. En dix-huit mois, trois fois plus d'Élus naquirent à Virex qu'au cours des dix années précédentes. Le Calendrier des Fées n'avait pas prévu ce surplus. Ou il l'avait prévu et avait choisi de ne rien faire.

Les interférences élémentaires commencèrent comme curiosités : une rue où il pleuvait dans une bulle de trente mètres carrés. Un parc où les flammes et les fontaines coexistaient sans se neutraliser. Puis les anomalies se stabilisèrent en zones permanentes. Virex cartographia ses propres impossibilités et créa des administrations pour les gérer. C'est tout à fait Virex.

Ce qui préoccupe vraiment les archivistes : parmi les naissances du surplus, plusieurs enfants manifestèrent deux éléments complets dès la naissance — pas une faiblesse de l'un et une force de l'autre, mais les deux à plein puissance. Les dossiers de ces enfants ont été classifiés. La Citadelle s'y intéresse particulièrement. Les Dissidentes aussi. Les enfants eux-mêmes — maintenant âgés de vingt-trois ans — ne savent pas encore qu'ils sont au cœur d'une guerre de possession.`,
    personnages: [],
    consequence_visible: "Virex a sept zones d'anomalie permanentes cartographiées, soixante-deux zones temporaires surveillées et un registre de trente-neuf naissances double-puissance. La Citadelle a demandé l'accès aux dossiers. Virex répond 'en traitement' depuis trois ans.",
    lien_arc: ["L_Avatar"],
  },

  Premier_Drain: {
    id: 'Premier_Drain',
    titre: "Le Premier Drain",
    annee_relative: -41,
    region: 'Déserts',
    description_courte: "La Convergence réalisa son premier sacrifice officiel d'Élu — extraction totale de l'énergie élémentaire d'un porteur volontaire pour redistribution collective. Le porteur mourut. L'énergie alimenta mille foyers pendant un hiver.",
    description_longue: `La doctrine de la Convergence avait toujours été théorique — juste et logique sur le papier, difficile à appliquer dans les faits. Puis Saeved se présenta volontairement. Élu Sol de troisième génération, né dans les sables où rien ne pousse, il avait regardé son village mourir de soif pendant trente ans malgré sa puissance. Les autres vivaient mieux grâce à leurs Élus. Pourquoi pas eux ?

Le Premier Drain dura neuf heures. Quarante-sept théologiens de la Convergence et trois Élus assistants canalisèrent l'énergie de Saeved vers un réseau de distribution construit pour l'occasion. Saeved était conscient pendant tout le processus. Il mourut au septième acte de drainage, quand son énergie résiduelle atteignit le seuil non viable. Ses derniers mots, selon les archives de la Convergence : "Ça coule bien."

L'énergie redistribuée alimenta mille foyers des sables pendant tout un hiver. C'était réel. C'était mesurable. C'était la preuve que la doctrine fonctionnait. La Convergence publia le résultat sans mentionner le nom de Saeved pendant les dix premières années — elle ne voulait pas créer un martyr personnel, juste une méthode. Quand son nom fut révélé, il était déjà un saint dans les sables. Et la Convergence avait déjà réalisé quarante-deux Drains. Pas tous volontaires.`,
    personnages: [],
    consequence_visible: "Le Premier Drain est la date fondatrice de la Convergence comme organisation active. Avant : une doctrine. Après : une institution. La chambre où Saeved est mort à Ash'Rael est aujourd'hui un sanctuaire. Le texte gravé à l'entrée : 'Il a rendu ce qu'il avait reçu.'",
    lien_arc: ["L_Avatar", 'La_Forge_Confisquee'],
  },
};
