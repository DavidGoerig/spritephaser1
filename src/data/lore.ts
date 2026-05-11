// ============================================================
//  LORE CANONIQUE — "Les Élus, le Voile et l'Empire des Fées"
//  Source : Lore Worldbuilding Spec.pdf
// ============================================================

// ── ÉLÉMENTS ─────────────────────────────────────────────────

export type ElementLore =
  | 'Feu' | 'Eau' | 'Electrique' | 'Psy' | 'Sol' | 'Plante'
  | 'Combat' | 'Roche' | 'Ténèbres' | 'Stellaire' | 'Glace'
  | 'Poison' | 'Acier' | 'Fée' | 'Vent' | 'Dragon'
  | 'Insecte' | 'Spectre' | 'Gravité' | 'Normal';

export interface ElementDescription {
  nom: ElementLore;
  nomPDF: string;
  principe: string;
  symbolique: string;
  especes: EspeceLore[];
  affinity_regions: RegionLore[];
}

export const ELEMENTS: Record<ElementLore, ElementDescription> = {
  Feu: {
    nom: 'Feu', nomPDF: 'Fire',
    principe: "Transformation, énergie déliée, passion, destruction féconde, forge, cuisson, sacrifice et renaissance.",
    symbolique: "Les Élus du Feu réchauffent, purifient, consument, inspirent — mais peuvent aussi dévorer ce qu'ils cherchent à sauver.",
    especes: ['Pyriens'],
    affinity_regions: ['Varkhôl'],
  },
  Eau: {
    nom: 'Eau', nomPDF: 'Water',
    principe: "Mémoire, souplesse, circulation, soin, adaptation, route et transmission.",
    symbolique: "Elle coule, contourne, relie. Un Élu de l'Eau peut être guérisseur, diplomate, navigateur, gardien des souvenirs ou maître des flux invisibles.",
    especes: ['Néréides', 'Sylvans'],
    affinity_regions: ['Thalassyr', 'Sylvera'],
  },
  Electrique: {
    nom: 'Electrique', nomPDF: 'Electric',
    principe: "Impulsion, innovation, nervosité du monde, réseaux, accélération, éveil brutal, connexion instantanée.",
    symbolique: "L'élément des inventions, des orages, des systèmes nerveux, des métropoles et des civilisations qui refusent l'inertie.",
    especes: ['Aérides'],
    affinity_regions: ['Asterciel', 'Thalassyr'],
  },
  Psy: {
    nom: 'Psy', nomPDF: 'Psychic',
    principe: "Pensée, perception, anticipation, mémoire profonde, contrôle et rêve.",
    symbolique: "Faculté de lire au-delà des apparences, plier le réel par l'esprit, voir des futurs possibles ou manipuler les consciences.",
    especes: ['Néréides', 'Umbriens'],
    affinity_regions: ['Thalassyr', 'Noctéa'],
  },
  Sol: {
    nom: 'Sol', nomPDF: 'Ground',
    principe: "Lien à la terre vivante, au territoire, aux fondations, aux cycles profonds, à la dette ancestrale.",
    symbolique: "Ce qui porte, encaisse, enfouit et rend. Les Élus Sol sont stabilisateurs, bâtisseurs, gardiens de seuils ou juges de la mémoire des sols.",
    especes: ['Chthoniens'],
    affinity_regions: ['Ormn-Dur'],
  },
  Plante: {
    nom: 'Plante', nomPDF: 'Grass',
    principe: "Croissance, fertilité, symbiose, guérison lente, propagation, patience et résilience organique.",
    symbolique: "Tout ce qui pousse, relie, cicatrise, envahit et transforme la mort en matière vivante. Pas seulement végétal.",
    especes: ['Sylvans'],
    affinity_regions: ['Sylvera'],
  },
  Combat: {
    nom: 'Combat', nomPDF: 'Fighting',
    principe: "Discipline, corps, honneur, dépassement, guerre organisée, rituel du duel et affirmation de soi par l'effort.",
    symbolique: "Élément profondément politique — il structure les sociétés martiales et les hiérarchies du mérite.",
    especes: ['Pyriens', 'Hommes-Liens'],
    affinity_regions: ['Varkhôl', 'Isthme'],
  },
  Roche: {
    nom: 'Roche', nomPDF: 'Rock',
    principe: "Permanence, résistance, architecture, inertie, monument, masse et mémoire matérielle.",
    symbolique: "Protège autant qu'il immobilise. L'élément des forteresses, des falaises, des bastions et des peuples qui survivent parce qu'ils ne cèdent pas.",
    especes: ['Pyriens', 'Chthoniens'],
    affinity_regions: ['Varkhôl', 'Ormn-Dur'],
  },
  Ténèbres: {
    nom: 'Ténèbres', nomPDF: 'Dark',
    principe: "Ce qui vit hors du regard, dans le secret, la survie, la ruse, la peur, la transgression et les zones interdites.",
    symbolique: "Protège les proscrits mais peut engendrer domination, manipulation et prédation. L'élément du dessous des choses. Pas le mal — le caché.",
    especes: ['Umbriens'],
    affinity_regions: ['Noctéa', 'Déserts'],
  },
  Stellaire: {
    nom: 'Stellaire', nomPDF: 'Stellar',
    principe: "Astral, destin, légitimité cosmique, anomalies célestes, conjonctions rares et fractures entre le temps humain et le temps du monde.",
    symbolique: "Les Élus Stellaires sont perçus comme sacrés, instables ou prophétiques. Proches du Calendrier des Fées.",
    especes: ['Aérides', 'Givrins', 'Néréides'],
    affinity_regions: ['Asterciel', 'Crysalme'],
  },
  Glace: {
    nom: 'Glace', nomPDF: 'Ice',
    principe: "Stase, conservation, pureté, silence, distance, élégance rigide, lenteur stratégique et mémoire figée.",
    symbolique: "Préserve autant qu'il isole. Convient aux civilisations du serment, des reliques et de l'attente.",
    especes: ['Givrins', 'Néréides'],
    affinity_regions: ['Crysalme', 'Asterciel'],
  },
  Poison: {
    nom: 'Poison', nomPDF: 'Poison',
    principe: "Corruption, mutation, toxine, contamination — mais aussi remède, adaptation biologique, résistance, sélection.",
    symbolique: "Les Élus Poison sont souvent mal compris, car leur pouvoir révèle que le monde se défend parfois par l'altération.",
    especes: ['Chthoniens', 'Umbriens'],
    affinity_regions: ['Ormn-Dur', 'Noctéa'],
  },
  Acier: {
    nom: 'Acier', nomPDF: 'Steel',
    principe: "Industrie, ordre, outil, arme, armure, contrainte, structure et progrès dirigé.",
    symbolique: "Protège et enferme. Symbolise les civilisations qui cherchent à remplacer l'imprévisible par le fabriqué.",
    especes: ['Pyriens', 'Chthoniens'],
    affinity_regions: ['Varkhôl', 'Ormn-Dur'],
  },
  Fée: {
    nom: 'Fée', nomPDF: 'Fairy',
    principe: "Pacte, miracle, arbitraire sacré, beauté dangereuse, règle cachée, enchantement, dette symbolique.",
    symbolique: "L'élément le plus proche des Fées — sans pour autant leur appartenir. Une Fée n'est pas automatiquement une Élue Fairy.",
    especes: ['Sylvans', 'Givrins', 'Fées'],
    affinity_regions: ['Sylvera', 'Crysalme', 'Citadelle'],
  },
  Vent: {
    nom: 'Vent', nomPDF: 'Flying',
    principe: "Liberté, mobilité, altitude, fuite, perspective, voyage, messagerie, souffle et refus de l'enracinement forcé.",
    symbolique: "Les Élus Vent voient les frontières comme des accidents historiques plus que comme des lois naturelles.",
    especes: ['Aérides'],
    affinity_regions: ['Asterciel', 'Thalassyr'],
  },
  Dragon: {
    nom: 'Dragon', nomPDF: 'Dragon',
    principe: "Puissance primordiale, héritage draconique, énergie ancienne antérieure aux Élus eux-mêmes.",
    symbolique: "Les Élus Dragon portent un fragment de conscience draconique — une puissance qui précède la Sélection du Besoin et ne dépend pas du Calendrier des Fées.",
    especes: ['Pyriens'],
    affinity_regions: ['Varkhôl', 'Déserts'],
  },
  Insecte: {
    nom: 'Insecte', nomPDF: 'Insect',
    principe: "Essaim, hive mind, adaptation rapide, corrosion organique, survie par le nombre.",
    symbolique: "Élément de la marge et du dessous — prospère dans les failles de tous les systèmes. Ni l'Empire ni la Convergence ne le comprend entièrement.",
    especes: ['Chthoniens', 'Umbriens'],
    affinity_regions: ['Ormn-Dur', 'Noctéa'],
  },
  Spectre: {
    nom: 'Spectre', nomPDF: 'Specter',
    principe: "Ce qui persiste après la mort, mémoire résiduelle, énergie d'Élus consumés, fissures entre dimensions.",
    symbolique: "Certains théologiens de la Convergence suggèrent que les Spectres sont les traces des Élus sacrifiés — leur énergie extraite refusant de disparaître.",
    especes: ['Umbriens', 'Givrins'],
    affinity_regions: ['Noctéa', 'Déserts'],
  },
  Gravité: {
    nom: 'Gravité', nomPDF: 'Gravity',
    principe: "Attraction cosmique, poids du destin, ancrage et libération. Voisin du Stellaire mais physique plutôt que prophétique.",
    symbolique: "Parfois appelé 'Stellar terrestre' par les archivistes de Thalassyr — là où le Stellaire lit le destin, la Gravité le pèse.",
    especes: ['Néréides', 'Chthoniens'],
    affinity_regions: ['Thalassyr', 'Ormn-Dur'],
  },
  Normal: {
    nom: 'Normal', nomPDF: 'Normal',
    principe: "Polyvalence, fiabilité, adaptation, absence de dette élémentaire.",
    symbolique: "Les Hommes-Liens produisent le plus d'Élus Normal — ceux qui fonctionnent dans tous les systèmes sans être liés à aucun. Leur force est leur absence de faiblesse.",
    especes: ['Hommes-Liens'],
    affinity_regions: ['Isthme'],
  },
};

// ── ESPÈCES ──────────────────────────────────────────────────

export type EspeceLore =
  | 'Sylvans' | 'Pyriens' | 'Néréides' | 'Aérides'
  | 'Chthoniens' | 'Umbriens' | 'Givrins' | 'Hommes-Liens' | 'Fées';

export interface Espece {
  nom: EspeceLore;
  description: string;
  affinites: ElementLore[];
  region: RegionLore;
  esthetique: string;
  rapport_aux_elus: string;
}

export const ESPECES: Record<EspeceLore, Espece> = {
  Sylvans: {
    nom: 'Sylvans',
    description: "Peuples des forêts anciennes, des vallées humides, des canopées profondes et des mémoires organiques. Ils vivent selon des cycles lents, accordent une importance majeure à la transmission orale, à la parenté élargie, au soin des sols et à la diplomatie rituelle.",
    affinites: ['Plante', 'Fée', 'Eau', 'Feu'],
    region: 'Sylvera',
    esthetique: "Bois pâle, tissus végétaux, pigments naturels, os polis et artisanat vivant. La notion de personne déborde l'individu : un Sylvan appartient à une lignée, une clairière, une saison, un serment.",
    rapport_aux_elus: "Les considèrent comme des relais de santé du monde, pas comme des instruments de prestige. Archives des premiers temps conservées dans des arbres-mémoire, des chants et des greffes lignagères.",
  },
  Pyriens: {
    nom: 'Pyriens',
    description: "Nés dans les régions de cendres, les hauts plateaux volcaniques et les bassins minéraux. Peuple de transformation, de forge et de hiérarchie assumée. Valorisent le travail visible, la capacité à résister à la chaleur, la maîtrise artisanale et le mérite éprouvé.",
    affinites: ['Feu', 'Acier', 'Roche', 'Combat', 'Dragon'],
    region: 'Varkhôl',
    esthetique: "Architectures massives, nerveuses, conçues pour durer malgré la violence tellurique. Forges rituelles, symboles de métal fondu, tatouages de cendres.",
    rapport_aux_elus: "Un Élu n'est pas un saint, mais une puissance qu'il faut apprendre à canaliser pour servir le collectif. Les a parfois rapprochés du pouvoir féerique, parfois opposés à lui.",
  },
  Néréides: {
    nom: 'Néréides',
    description: "Vivent sur les côtes, les deltas, les archipels, les lagunes et certaines profondeurs semi-immergées. Leur monde est celui des courants, des marées, des migrations et de la mémoire liquide. Pensent en flux, en correspondances, en récits répétés et transformés.",
    affinites: ['Eau', 'Psy', 'Glace', 'Stellaire', 'Gravité'],
    region: 'Thalassyr',
    esthetique: "Maisons lignagères conservant les histoires sous forme de chants-courants, de cartes vivantes ou de perles-mémoire. Tissus fluides, nacres, pierreries marines.",
    rapport_aux_elus: "D'excellents médiateurs mais aussi des gardiens redoutables de secrets très anciens. Leurs archives sont chantées, non écrites.",
  },
  Aérides: {
    nom: 'Aérides',
    description: "Peuples des falaises, des cimes, des ponts suspendus, des courants d'altitude et des observatoires. Rapport au monde vertical. Pensent le territoire depuis le ciel, le temps depuis les étoiles.",
    affinites: ['Vent', 'Stellaire', 'Electrique', 'Glace'],
    region: 'Asterciel',
    esthetique: "Structures légères, réseaux de messagers, guildes de navigateurs aériens, ordres astronomiques. Vêtements aériens, soieries conductrices, lunettes cosmiques.",
    rapport_aux_elus: "Relation complexe avec les Fées — à la fois parentes symboliques et rivales politiques dans la lecture du ciel.",
  },
  Chthoniens: {
    nom: 'Chthoniens',
    description: "Vivent dans les profondeurs, les cavernes-réseaux, les failles, les zones minérales lourdes, les cités souterraines et les corridors thermiques. Rapport au temps géologique. Patients, méticuleux, marqués par une culture de l'endurance, de l'archive gravée et de l'architecture fonctionnelle.",
    affinites: ['Sol', 'Roche', 'Poison', 'Acier', 'Gravité', 'Insecte'],
    region: 'Ormn-Dur',
    esthetique: "Cités minérales, bioluminescence, architecture fonctionnelle gravée. Vêtements résistants, casques sculptés, outils doubles (arme et outil).",
    rapport_aux_elus: "Parmi les premiers à avoir compris qu'un pouvoir mal régulé devient extractif. Plusieurs lignées ont collaboré à l'industrialisation du monde.",
  },
  Umbriens: {
    nom: 'Umbriens',
    description: "Peuples des marges, des villes de transit, des lisières, des marchés denses, des ports nocturnes et des zones grises entre royaumes. Ont longtemps survécu là où les autres voyaient de la menace, du brouillard ou de la souillure.",
    affinites: ['Ténèbres', 'Psy', 'Poison', 'Electrique', 'Spectre', 'Insecte'],
    region: 'Noctéa',
    esthetique: "Textile sombre, verre fumé, miroirs, encres minérales et biomécaniques fines. Réputation ambiguë — excellence dans l'information, le masque social, la négociation.",
    rapport_aux_elus: "Rôle majeur dans la naissance des oppositions clandestines mais aussi dans la circulation des premières doctrines sacrificielles.",
  },
  Givrins: {
    nom: 'Givrins',
    description: "Peuples des terres froides, des vallées glacées, des palais de givre, des lacs immobiles et des hautes solitudes. Accordent une immense valeur à la conservation, aux reliques, aux lignées longues, aux serments et à la parole rare.",
    affinites: ['Glace', 'Fée', 'Stellaire', 'Spectre'],
    region: 'Crysalme',
    esthetique: "Armures de cristal, robes à reflets glaciaux, bijoux-reliques. Rites de transmission sur plusieurs générations. Tout change très lentement — c'est un choix philosophique.",
    rapport_aux_elus: "Relation diplomatique privilégiée avec l'ordre féerique, du moins jusqu'à un certain point. Les Élus y sont presque royaux.",
  },
  'Hommes-Liens': {
    nom: 'Hommes-Liens',
    description: "Terme apparu tardivement désignant moins une espèce unique qu'un ensemble de populations hautement adaptatives. Très présents dans les zones métissées, les carrefours politiques, les cités administratives et les routes marchandes.",
    affinites: ['Normal', 'Combat', 'Acier'],
    region: 'Isthme',
    esthetique: "N'ont pas d'esthétique collective fixe — s'adaptent au contexte. Leur identité est dans leur réseau, pas dans leurs marqueurs.",
    rapport_aux_elus: "Pas d'affinité élémentaire stable à l'échelle collective. Leur souplesse démographique en a fait des médiateurs, des colons, des administrateurs, des scribes, des marchands.",
  },
  Fées: {
    nom: 'Fées',
    description: "Longtemps opprimées, chassées, craintes ou réduites à de petits rôles rituels. Peuple fragile à l'origine, fragmenté et souvent dépendant de la protection d'autres civilisations. Leur particularité : lire certaines trames invisibles du monde.",
    affinites: ['Fée', 'Stellaire', 'Psy'],
    region: 'Citadelle',
    esthetique: "Robes du Calendrier — tissus portant des motifs de conjonctions célestes. Toujours en mouvement. Présence impalpable mais souveraine.",
    rapport_aux_elus: "Les Fées ne produisent pas la magie — elles lisent quand et où les Élus naîtront. Ont fondé leur empire sur ce savoir. Leur rapport aux Élus est celui d'un maître à des outils.",
  },
};

// ── RÉGIONS ──────────────────────────────────────────────────

export type RegionLore =
  | 'Sylvera' | 'Varkhôl' | 'Thalassyr' | 'Asterciel'
  | 'Ormn-Dur' | 'Noctéa' | 'Crysalme' | 'Isthme'
  | 'Déserts' | 'Citadelle';

export interface Region {
  nom: RegionLore;
  espece: EspeceLore;
  elements: ElementLore[];
  organisation: string;
  evenement_fondateur: string;
  tension: string;
  ville_principale: string;
  ville_description: string;
  bien: string;
  mal: string;
}

export const REGIONS: Record<RegionLore, Region> = {
  Sylvera: {
    nom: 'Sylvera',
    espece: 'Sylvans',
    elements: ['Plante', 'Fée', 'Eau', 'Feu'],
    organisation: "Écocratie fracturée — gouvernance par cercles. Division idéologique depuis l'événement fondateur.",
    evenement_fondateur: "La Faim des Racines : un Élu Plante obsédé par la préservation créa un réseau racinaire conscient (bibliothèque vivante). Le système dévora les sols. Un Élu Feu brûla une partie de la forêt pour sauver le reste. Dogme actuel : 'La destruction est nécessaire à la vie'.",
    tension: "Conservateurs de la Sève (restaurer les archives) vs Gardiens de la Clairière (accepter le cycle de perte).",
    ville_principale: "Leth'Var",
    ville_description: "Structure organique semi-disséminée : plateformes tressées dans des arbres géants, chambres creusées dans des troncs vivants, passages suspendus, jardins-mémoire. Le savoir à Leth'Var est vivant — mais appauvrit le sol qui le porte.",
    bien: "Profondeur morale. Sait que le savoir a un coût, que la mémoire n'est pas neutre, que la politique doit intégrer le rythme du vivant.",
    mal: "Tentation toujours renaissante de confondre mémoire et salut. Un monde trop conservé finit par mourir de faim.",
  },
  Varkhôl: {
    nom: 'Varkhôl',
    espece: 'Pyriens',
    elements: ['Feu', 'Acier', 'Roche', 'Glace'],
    organisation: "Monarchie thermodynamique — le pouvoir dépend du contrôle de la chaleur. Caste des 'Régulateurs' (Élus Glace).",
    evenement_fondateur: "La Rupture Thermique : l'Élu Glace chargé de tempérer les excès disparut. Le bassin entra en surpression. Une partie de la ville industrielle éclata. La Forge Silencieuse — quartiers figés dans une éternité minérale — est désormais un sanctuaire de cendres.",
    tension: "Parti du Feu (innovation, expansion, gauche thermique) vs Parti de l'Acier (régulation, structure, droite de la stabilité).",
    ville_principale: "Khar-Vurn",
    ville_description: "Construite autour d'un bassin volcanique domestiqué. Forges rituelles, canalisation thermique, ateliers à pression. La Forge Silencieuse en son cœur : une ville arrêtée dans sa dernière seconde, silhouettes vitrifiées et marteaux suspendus.",
    bien: "Ville de compétence, de mérite technique, de solidarité ouvrière réelle. Sait qu'aucune civilisation ne tient sans infrastructure.",
    mal: "Pense le vivant comme un système à canaliser. Évalue toute existence selon sa place dans un équilibre de production.",
  },
  Thalassyr: {
    nom: 'Thalassyr',
    espece: 'Néréides',
    elements: ['Eau', 'Psy', 'Vent', 'Electrique'],
    organisation: "Confédération marchande neutre — maisons commerciales, neutralité stratégique (type Suisse).",
    evenement_fondateur: "Le Silence des Vents : un Élu Vent central fut assassiné pour couper la circulation d'informations que les Fées utilisaient. Un Élu Electrique recréa artificiellement les courants. Les vents naturels furent remplacés par des réseaux commandés.",
    tension: "Neutralité affichée vs contrôle caché de l'information. La Convergence exploite les failles de ce réseau filtré.",
    ville_principale: "Néris",
    ville_description: "Grande place portuaire et marchande. Eau, verre, quais profonds, canaux intérieurs, tours-lanternes, archives flottantes. Sa puissance vient de rendre les autres interdépendants plutôt que de dominer militairement.",
    bien: "Capacité à empêcher les guerres totales par l'interdépendance. Le système nerveux du monde civilisé.",
    mal: "Cette médiation se transforme facilement en pouvoir occulte. Un monde modulé par ceux qui tiennent les flux n'est jamais aussi libre qu'il le croit.",
  },
  Asterciel: {
    nom: 'Asterciel',
    espece: 'Aérides',
    elements: ['Vent', 'Electrique', 'Stellaire', 'Glace'],
    organisation: "Aristocratie verticale — l'altitude est la forme visible de la hiérarchie.",
    evenement_fondateur: "La Chute des Nuages : un Élu Electrique majeur perdit le contrôle. Une ville s'effondra partiellement. Un Élu Stellaire (rare) intervint et stabilisa les masses d'air, recréant un ancrage cosmique. Conséquence : les élites Stellaires devinrent dominantes.",
    tension: "Compétence technique (les Élus Vent/Electric maintiennent tout) vs prestige héréditaire (les hautes strates sont 'plus proches du ciel').",
    ville_principale: "Heliora",
    ville_description: "Suspendue au-dessus des brumes. Arches aériennes, tours d'ancrage, plateformes de voile, ponts gravitiques. Dans les strates supérieures : les grands observatoires. Dans les basses plateformes : les artisans du vent et les personnels de stabilisation.",
    bien: "Dans une ville suspendue, l'incompétence tue. Le pouvoir y est théoriquement lié à la capacité à maintenir l'ensemble.",
    mal: "Naturalise l'inégalité en la confondant avec l'élévation. Ceux en haut 'méritent' d'être en haut.",
  },
  'Ormn-Dur': {
    nom: 'Ormn-Dur',
    espece: 'Chthoniens',
    elements: ['Sol', 'Roche', 'Poison', 'Acier', 'Eau'],
    organisation: "Extractivisme scientifique — technocratie de contribution. Chacun 'rend' quelque chose à la cité.",
    evenement_fondateur: "La Fosse Interdite : un Élu Roche creusa trop profond et libéra une zone hyperfongique, un poison vivant massif. Un Élu Poison apprit à contrôler cet environnement. Devenu source d'énergie — avec une dépendance toxique.",
    tension: "La logique de contribution peut réduire très vite la valeur d'un être à sa fonction dans un appareil.",
    ville_principale: "Kar-Dum",
    ville_description: "Cité minérale sans ciel, dans les failles stabilisées. Chambres extractives, lacs thermiques, réseaux fongiques artificiels. Tout stratifié selon la profondeur, la pression et la fonction. Vit entouré de pierre, de métal, d'humidité, d'échos et de dette.",
    bien: "Redoutable force organisationnelle. Produit des gens qui ne rêvent pas le monde : ils le soutiennent.",
    mal: "Réduit vite la valeur d'un être à sa fonction dans un appareil.",
  },
  Noctéa: {
    nom: 'Noctéa',
    espece: 'Umbriens',
    elements: ['Ténèbres', 'Psy', 'Poison', 'Electrique'],
    organisation: "Réseau d'ombres — ancienne ville de lumière transformée après un traumatisme.",
    evenement_fondateur: "Le Vol de la Lumière : une figure proto-Convergente vola l'énergie lumineuse d'un Élu Stellaire/Electrique pour démontrer que 'aucune lumière n'est universelle'. La ville bascula dans la nuit. Le réseau de l'ombre naquit. Nom actuel : Vel'Nox.",
    tension: "L'ombre comme outil de liberté (proscrits, dissidentes) vs l'ombre comme outil de pouvoir (réseaux criminels, Convergence).",
    ville_principale: "Vel'Nox",
    ville_description: "Ville fondée dans les rues-miroirs, les marchés mouvants et les bibliothèques censurées. Réseau de rétention et de filtrage de l'information. Ni capitale ni ruine — un entre-deux permanent.",
    bien: "Protège ceux que les systèmes officiels excluent. Espace de liberté réelle pour les proscrits.",
    mal: "Ce réseau d'ombres est facilement capturé par des intérêts prédateurs. La discrétion peut devenir prédation.",
  },
  Crysalme: {
    nom: 'Crysalme',
    espece: 'Givrins',
    elements: ['Glace', 'Fée', 'Stellaire', 'Feu'],
    organisation: "Monarchie de stase — changement très lent. Décisions sur plusieurs générations.",
    evenement_fondateur: "Le Gel Éternel : lors d'une guerre ancienne, un Élu Glace d'une puissance inouïe stoppa le conflit non par victoire mais par suspension. Une armée entière fut figée dans le froid absolu. Ce champ gelé (à l'extérieur d'Iskral) existe toujours comme argument politique permanent.",
    tension: "Préserver vs vivre. Le Feu est nécessaire à Iskral mais honteux — on le cache, le ritualise, le sous-traite.",
    ville_principale: "Iskral",
    ville_description: "Palais de givre, lacs immobiles. Décisions prises sur des générations. Le Champ Gelé en périphérie : l'armée suspendue dans sa dernière seconde de guerre.",
    bien: "Protège ce qui mérite parfois d'être sauvé de la vitesse du monde. Stabilité millénaire.",
    mal: "Confond la vie avec la conservation. Les erreurs, les lignées usées, les serments morts durent trop longtemps.",
  },
  Isthme: {
    nom: 'Isthme',
    espece: 'Hommes-Liens',
    elements: ['Normal', 'Combat', 'Acier', 'Electrique', 'Feu', 'Eau', 'Plante'],
    organisation: "Bureaucratie instable — tous les éléments coexistent.",
    evenement_fondateur: "La Saturation des Élus : trop d'Élus à la fois créèrent des interférences élémentaires. Des zones commencèrent à se comporter anormalement. Feu et eau coexistent sans se neutraliser. Plantes poussent dans la pierre. Naissances instables, doubles — des 'pré-avatars'. Virex a choisi d'intégrer les anomalies dans son système bureaucratique.",
    tension: "Le mélange comme force (adaptabilité) vs le mélange comme risque (anomalies permanentes).",
    ville_principale: "Virex",
    ville_description: "Administrations spécialisées, zones réglementées, districts de compensation, académies de surveillance, tribunaux d'interférence, permis de circulation énergétique. La ville la plus souple — et la plus risquée.",
    bien: "Capacité à faire du mélange une structure. Empêche les monopoles élémentaires.",
    mal: "Produit des phénomènes qu'aucune institution ne maîtrise plus vraiment.",
  },
  Déserts: {
    nom: 'Déserts',
    espece: 'Hommes-Liens',
    elements: ['Ténèbres', 'Poison', 'Sol', 'Combat'],
    organisation: "Théocratie du manque — pas d'Élus structurellement. Le désert prend au lieu de recevoir. Centre doctrinal de la Convergence.",
    evenement_fondateur: "Le Vol de la Lumière (voir Noctéa) eut pour auteur une figure du désert. Les peuples des sables, longtemps sous-dotés par le monde naturel, bénéficièrent du Voile d'Équité des Fées, développèrent une théologie de la restitution, puis du sacrifice.",
    tension: "Gratitude sincère envers l'ordre féerique transformée en doctrine radicale : si les Élus reçoivent plus, ils doivent rendre plus. C'est de là qu'est née la Convergence.",
    ville_principale: "Ash'Rael",
    ville_description: "Grande ville sacrée des peuples des sables. Théocratie absolue du manque transfiguré. Pouvoir descendant d'un centre charismatique, religieux et doctrinal. A donné au désert ce qu'il n'avait jamais eu : continuité, mission, infrastructure, horizon collectif.",
    bien: "Puissance d'unification. Infrastructure collective. Mission partagée.",
    mal: "Totalitaire. Transforme une blessure réelle en devoir d'expansion. L'égalité prêchée débouche sur la centralisation absolue.",
  },
  Citadelle: {
    nom: 'Citadelle',
    espece: 'Fées',
    elements: ['Fée', 'Stellaire', 'Psy', 'Ténèbres'],
    organisation: "Empire féerique — contrôle centralisé des naissances d'Élus via le Calendrier des Fées.",
    evenement_fondateur: "Au cœur d'un point de convergence cosmique, là où plusieurs lignes du Calendrier se croisent de manière stable, les Fées élevèrent la Citadelle du Voile. Observatoire, académie, prison sacrée, centre administratif, archive du destin, caserne et sanctuaire politique.",
    tension: "Le Premier Avatar (Avatar total, Dark dominant) dirige l'Empire. Le Second Avatar (né hors contrôle féerique) s'est échappé. Les Dissidentes du Voile veulent restaurer la Sélection du Besoin.",
    ville_principale: "La Citadelle du Voile",
    ville_description: "N'est pas seulement une capitale. Des Élus y sont formés, d'autres y sont retenus, d'autres encore y servent comme moteurs énergétiques sous prétexte de protection ou d'étude.",
    bien: "A effectivement stabilisé le monde. Empêché des catastrophes. Brisé des monopoles régionaux. Redistribué des ressources.",
    mal: "Ce n'est pas l'égalité qu'elle protège — c'est la dépendance. A remplacé la brutalité du besoin par la brutalité du guichet cosmique.",
  },
};

// ── FACTIONS ─────────────────────────────────────────────────

export type FactionLore = 'Empire' | 'Convergence' | 'Dissidentes' | 'Indépendant';

export interface Faction {
  nom: FactionLore;
  titre: string;
  position: string;
  promesse: string;
  realite: string;
  peur_fondatrice: string;
}

export const FACTIONS: Record<FactionLore, Faction> = {
  Empire: {
    nom: 'Empire',
    titre: "L'Empire des Fées",
    position: "Le monde est trop dangereux pour être laissé à sa propre logique. Les Élus doivent être identifiés, encadrés, répartis et, si nécessaire, retenus.",
    promesse: "Égalité, stabilité, prévention des catastrophes, fin des monopoles régionaux.",
    realite: "Contrôle centralisé, monopole sur les naissances stratégiques, dépendance généralisée des peuples, falsification progressive du principe d'équilibre.",
    peur_fondatrice: "Peur du chaos — que le monde non administré produise des déséquilibres incontrôlables.",
  },
  Convergence: {
    nom: 'Convergence',
    titre: "La Convergence",
    position: "Les Fées ont raison de domestiquer le destin, mais tort de garder la puissance pour elles. Les Élus doivent être reversés au collectif, même au prix du sacrifice.",
    promesse: "Justice énergétique, redistribution absolue, fin des privilèges personnels des Élus, abondance collective.",
    realite: "Extraction vitale, religion sacrificielle, déshumanisation des Élus, industrialisation du sacré. Se pense comme rationnelle, pieuse et nécessaire — ce qui la rend plus dangereuse qu'un simple régime tyrannique.",
    peur_fondatrice: "Peur du manque — née dans les peuples du désert qui ont souffert de l'absence historique de ressources élémentaires.",
  },
  Dissidentes: {
    nom: 'Dissidentes',
    titre: "Les Dissidentes du Voile",
    position: "Ni l'Empire ni la Convergence n'ont de légitimité à posséder la source du vivant. Les Élus doivent renaître selon la logique du besoin du monde.",
    promesse: "Retour à l'équilibre organique, fin du monopole, liberté du destin, rupture avec les systèmes extractifs.",
    realite: "Imprévisibilité, déstabilisation des régions dépendant du système actuel, retour d'inégalités naturelles, nécessité de repenser entièrement l'ordre politique.",
    peur_fondatrice: "Peur de la capture — que toute puissance finisse par être confisquée au nom d'un bien supérieur.",
  },
  Indépendant: {
    nom: 'Indépendant',
    titre: "Sans allégeance",
    position: "Personnage non affilié aux grandes factions — agit selon ses propres motivations.",
    promesse: "Liberté d'action.",
    realite: "Vulnérabilité face aux trois grandes puissances. Ne peut compter que sur lui-même.",
    peur_fondatrice: "Variable selon l'individu.",
  },
};

// ── PERSONNAGES CLÉS DU LORE ─────────────────────────────────

export interface PersonnageLore {
  nom: string;
  titre: string;
  elements: ElementLore[];
  espece: EspeceLore;
  faction: FactionLore;
  role: string;
  histoire: string;
}

export const PERSONNAGES_LORE: PersonnageLore[] = [
  {
    nom: "Le Premier Avatar",
    titre: "Maître de la Citadelle / Tête de l'Empire des Fées",
    elements: ['Feu', 'Eau', 'Electrique', 'Psy', 'Sol', 'Plante', 'Combat', 'Roche', 'Ténèbres', 'Stellaire', 'Glace', 'Poison', 'Acier', 'Fée', 'Vent'],
    espece: 'Hommes-Liens',
    faction: 'Empire',
    role: "Avatar total — porteur de tous les éléments. Capturé enfant par les Fées, élevé dans la Citadelle, corrompu par la part Ténèbres qui prit progressivement le dessus. Dirige désormais l'Empire non comme une administration équitable mais comme un système impérial de monopole absolu.",
    histoire: "Sa puissance est totale mais son équilibre intérieur rompu. Il peut soigner, brûler, bénir, geler, voir, soulever, fendre le ciel, contaminer, forger, faire pousser, déplacer les mers ou lire les lignes du destin. Mais son interprétation du monde est devenue sombre : 'si tout peut basculer, alors tout doit être tenu.'",
  },
  {
    nom: "Le Second Avatar",
    titre: "Le Fugitif / Fondateur des Dissidentes",
    elements: ['Feu', 'Eau', 'Electrique', 'Psy', 'Sol', 'Plante', 'Combat', 'Roche', 'Ténèbres', 'Stellaire', 'Glace', 'Poison', 'Acier', 'Fée', 'Vent'],
    espece: 'Hommes-Liens',
    faction: 'Dissidentes',
    role: "Née hors du contrôle féerique — soit par sabotage du Calendrier, soit par contre-résonance du Premier Avatar. S'est échappé de la Citadelle. Son refus de la capture est devenu l'acte fondateur de la dernière grande dissidence.",
    histoire: "Pour les Fées : une catastrophe à reprendre. Pour la Convergence : une promesse à convertir. Pour le Premier Avatar : un héritier, une menace et une possibilité de se compléter. Pour les peuples : une rumeur qui fissure l'idée même de fatalité.",
  },
];

// ── FORMULE CANONIQUE ─────────────────────────────────────────

export const FORMULE_CANONIQUE =
  "Le monde engendrait autrefois ses Élus là où il souffrait. Les Fées ont appris à prévoir ces naissances, puis à les confisquer au nom de l'égalité. De cette promesse est né un empire. De cet empire est née une religion du sacrifice. Et de cette corruption naît enfin une dernière révolte : rendre à la terre le droit de choisir.";
