// timeline-data.js — données de la frise lore
// Source de vérité dérivée de lore-types.ts (format ES module pur, pas de bundler)

export const ERAS = [
  { label: "Ère Ancienne", start: -350, end: -200, color: "#2a1f14" },
  { label: "Ère de Transition", start: -200, end: -100, color: "#1f2a1f" },
  { label: "Ère Impériale", start: -100, end: -40, color: "#1a1f2a" },
  { label: "Ère de Fracture", start: -40, end: 0, color: "#2a1a1a" },
];

export const REGION_COLORS = {
  "Varkhôl":   "#e85c20",
  "Thalassyr": "#2080e8",
  "Asterciel": "#c0c020",
  "Sylvera":   "#20b040",
  "Ormn-Dur":  "#806040",
  "Noctéa":    "#6020a0",
  "Crysalme":  "#80d0ff",
  "Isthme":    "#c0a040",
  "Déserts":   "#d08020",
  "Citadelle": "#e040e0",
};

export const EVENTS = [
  {
    id: "Gel_Eternel",
    titre: "Le Gel Éternel",
    annee: -312,
    region: "Crysalme",
    emoji: "❄️",
    court: "Karath fige une armée entière pour arrêter une guerre. Il meurt à 16 ans. Le Champ Gelé existe encore.",
    long: `Il y avait, à Crysalme, une guerre de neuf ans. Karath — 16 ans, Élu Glace d'une puissance sans précédent — tendit les bras et figea quarante mille soldats en quatre minutes. Pas pour les tuer : pour les suspendre. Il mourut d'épuisement le lendemain matin. L'armistice fut signé deux jours après.

Le Champ Gelé existe toujours, à quinze kilomètres d'Iskral. Trois cent douze ans. Les soldats ont les yeux ouverts.`,
    consequence: "Le Champ Gelé — monument politique permanent d'Iskral. Les micro-fractures récentes signalent peut-être le réveil de Karath.",
    arc: "Les_Archives_Gelées",
    personnages: [
      { id: 52, nom: "Karath", role: "héros/mort", faction: "—" },
      { id: 53, nom: "Sylkra", role: "témoin/gardienne", faction: "Monarchie" },
      { id: 54, nom: "Aethren", role: "descendant/veut dégeler", faction: "Dissidentes" },
      { id: 55, nom: "Thyval", role: "archiviste des serments", faction: "Monarchie" },
    ],
  },
  {
    id: "Faim_des_Racines",
    titre: "La Faim des Racines",
    annee: -143,
    region: "Sylvera",
    emoji: "🌿",
    court: "Thalindre crée un réseau racinaire conscient qui dévore les sols. Un Élu Feu brûle tout pour sauver le reste.",
    long: `Thalindre voulait sauver la mémoire de Sylvera. Il connecta les racines de toute la forêt en un réseau nerveux géant, alimenté par sa propre énergie Plante. Le réseau apprit. Il commença à vouloir. Il commença à prendre.

En sept saisons, les sols s'épuisèrent. Les arbres-mémoire moururent les premiers. Un Élu Feu nommé Kessaer entra dans la forêt et brûla le nœud central — au prix de ses mains. Le réseau mourut. La moitié de la forêt avec lui. Sylvera n'a jamais pardonné et ne sait pas à qui.`,
    consequence: "La moitié est de Leth'Var est zone de cendres régénérées. La fracture Conservateurs vs Gardiens dure depuis 143 ans.",
    arc: "L_Heritage_Brule",
    personnages: [
      { id: 31, nom: "Sylvae", role: "héritière de la blessure", faction: "Conservateurs" },
      { id: 32, nom: "Kessyn", role: "descendant du brûleur", faction: "Gardiens" },
      { id: 33, nom: "Thalorn", role: "arbre-mémoire vivant", faction: "Conservateurs" },
      { id: 37, nom: "Sylindra", role: "porteuse d'un fragment", faction: "Indépendant" },
    ],
  },
  {
    id: "Fosse_Interdite",
    titre: "La Fosse Interdite",
    annee: -108,
    region: "Ormn-Dur",
    emoji: "☣️",
    court: "Draven perce trop profond. Un poison vivant envahit Kar-Dum. L'Élue Poison Valyx négocie un accord dont les termes meurent avec elle.",
    long: `Draven était le meilleur Élu Roche de sa génération. La commission extractive lui demanda d'atteindre le niveau neuf. Il perça la veine au bout de la quatrième semaine.

Ce qui remonta : une zone fongique hyperdéveloppée, vieille de millions d'années. En trois jours, un millier de morts. Kar-Dum ferma la Fosse. L'Élue Poison Valyx descendit seule et revint dix-sept jours plus tard avec un accord. Elle n'en dit jamais les termes. Elle est morte il y a quarante ans. La zone fongique a peut-être évolué depuis.`,
    consequence: "La Fosse Interdite alimente Kar-Dum depuis 108 ans. Les micro-fractures des parois signalent que quelque chose a changé en bas.",
    arc: "La_Fosse_Ouverte",
    personnages: [
      { id: 38, nom: "Valyx", role: "héros/morte", faction: "—" },
      { id: 39, nom: "Drevaya", role: "gardienne actuelle", faction: "Indépendant" },
      { id: 41, nom: "Karm", role: "archiviste qui sait", faction: "Technocratie" },
      { id: 43, nom: "Graveth", role: "Convergence — veut y accéder", faction: "Convergence" },
    ],
  },
  {
    id: "Rupture_Thermique",
    titre: "La Rupture Thermique",
    annee: -87,
    region: "Varkhôl",
    emoji: "🔥",
    court: "L'Élu Glace Veldris disparaît. Le bassin volcanique explose. 1400 morts. La Forge Silencieuse naît.",
    long: `Veldris régulait les forges de Khar-Vurn depuis vingt ans. En une nuit, il disparut — pas mort, pas capturé. Absent. En trois jours, la surpression dans les bassins atteignit le seuil critique. Le Quatrième District éclata au lever du soleil.

Quatorze cents morts. La Forge Silencieuse : des silhouettes de travailleurs vitrifiées dans la roche, marteaux suspendus, bouches ouvertes. L'Empire dit que Veldris a eu une défaillance personnelle. Les Dissidentes disent que son retrait était planifié.`,
    consequence: "La Forge Silencieuse existe toujours. Les enquêtes sont interdites. La vérité sur Veldris n'a jamais été établie.",
    arc: "La_Forge_Confisquee",
    personnages: [
      { id: 1,  nom: "Brasia", role: "victime/résistante", faction: "Dissidentes" },
      { id: 2,  nom: "Cendrix", role: "enfant/deviendra traqueur", faction: "Empire" },
      { id: 5,  nom: "Yssara", role: "survivante (7 ans)", faction: "Dissidentes" },
      { id: 7,  nom: "Kael", role: "forgeron survivant", faction: "Indépendant" },
      { id: 8,  nom: "Velindra", role: "Régulateur actuel (sous peur)", faction: "Empire" },
    ],
  },
  {
    id: "Vol_de_la_Lumiere",
    titre: "Le Vol de la Lumière",
    annee: -71,
    region: "Noctéa",
    emoji: "🌑",
    court: "Un théologien extrait l'énergie d'Ael, Élu qui éclairait la ville. Luméra s'éteint. Vel'Nox naît dans le noir.",
    long: `Ael éclairait Luméra depuis quarante ans. Un théologien du désert arriva avec une doctrine simple : "Une lumière donnée par un seul crée une dépendance." Ses partisans extrayèrent partiellement l'énergie d'Ael. La ville s'éteignit.

Ceux qui restèrent apprirent à vivre dans le noir. Les proscrits de toutes les régions commencèrent à affluer vers ce qui deviendrait Vel'Nox — le seul refuge que l'Empire ne peut pas cartographier.`,
    consequence: "Vel'Nox n'a pas d'éclairage public depuis 71 ans. Ael, ou ce qu'il en reste, vit dans les ruines de sa tour. Les Trois Couches protègent tous ceux que l'Empire exclut.",
    arc: "Vel_Nox_Double_Jeu",
    personnages: [
      { id: 45, nom: "Ael", role: "victime/peut-être vivant", faction: "—" },
      { id: 46, nom: "Vethis", role: "gardien des Trois Couches", faction: "Dissidentes" },
      { id: 51, nom: "Osara", role: "témoin (enfant) — 71 ans depuis", faction: "Indépendant" },
      { id: 48, nom: "Shael", role: "acheteur de données", faction: "Convergence" },
    ],
  },
  {
    id: "Silence_des_Vents",
    titre: "Le Silence des Vents",
    annee: -64,
    region: "Thalassyr",
    emoji: "💨",
    court: "Lyraen, Élu Vent central, assassiné. Les vents naturels s'arrêtent. Un Élu Electric les remplace par des vents artificiels commandés.",
    long: `Thalassyr vivait de ses vents. Lyraen en maintenait le réseau central. Il était aussi le principal transmetteur des données que la Citadelle utilisait pour anticiper les naissances d'Élus.

Son assassinat ressembla à un accident de mer. Les vents s'arrêtèrent sept jours. La Confédération accepta n'importe quoi pour que ça recommence — y compris l'offre d'Orven de recréer les courants par induction artificielle. Depuis, quelqu'un lit les vents de Thalassyr comme une carte de l'information mondiale.`,
    consequence: "Les vents de Néris sont artificiels depuis 64 ans. Leur fréquence révèle aux initiés qui contrôle l'information ce jour-là.",
    arc: "Le_Neutre_Qui_Ment",
    personnages: [
      { id: 14, nom: "Lysara", role: "ancienne apprentie de Lyraen", faction: "Indépendant" },
      { id: 15, nom: "Orven", role: "créateur des vents artificiels", faction: "Confédération" },
      { id: 17, nom: "Vel", role: "enquêteur depuis 64 ans", faction: "Dissidentes" },
      { id: 22, nom: "Ishal", role: "fils d'Orven (ne sait pas)", faction: "Indépendant" },
    ],
  },
  {
    id: "Chute_des_Nuages",
    titre: "La Chute des Nuages",
    annee: -52,
    region: "Asterciel",
    emoji: "⚡",
    court: "L'Élu Electrique Garev perd le contrôle. Une plateforme habitée s'effondre. 3000 morts. L'Élue Stellaire Veralith sauve 11 000 personnes — et meurt 18 jours après.",
    long: `Garev maintint les champs magnétiques d'Heliora pendant vingt ans. Puis quelque chose se brisa en lui — un message de la Citadelle, ou simplement l'épuisement. La plateforme Ouest tomba en douze minutes. Trois mille personnes.

Veralith — dont personne ne connaissait l'existence — étendit sa perception gravitationnelle sur le reste de la ville et la maintint seule quatre heures. Elle sauva 11 000 vies. Elle mourut dix-huit jours plus tard. L'aristocratie stellaire qui l'avait ignorée toute sa vie la vénère maintenant.`,
    consequence: "La plateforme Ouest n'a jamais été reconstruite. L'aristocratie Stellaire gouverne Heliora au nom de Veralith. Les ingénieurs qui maintiennent tout sont invisibles.",
    arc: "Le_Ciel_Vendu",
    personnages: [
      { id: 26, nom: "Garev", role: "cause/disparu", faction: "—" },
      { id: 27, nom: "Veralith", role: "héros/morte", faction: "—" },
      { id: 23, nom: "Talvyn", role: "ingénieur invisible", faction: "Indépendant" },
      { id: 24, nom: "Serathis", role: "héritier du mythe", faction: "Empire" },
      { id: 28, nom: "Caerra", role: "veut reconstruire", faction: "—" },
    ],
  },
  {
    id: "Premier_Drain",
    titre: "Le Premier Drain",
    annee: -41,
    region: "Déserts",
    emoji: "💀",
    court: "Saeved se sacrifie volontairement. Son énergie Sol alimente mille foyers un hiver. La Convergence devient une institution.",
    long: `Saeved était Élu Sol dans un désert où rien ne poussait. Il avait regardé son village mourir de soif pendant trente ans. Il se présenta volontairement.

Le Drain dura neuf heures. Quarante-sept théologiens canalisèrent son énergie. Il mourut au septième acte de drainage. Ses derniers mots : "Ça coule bien." L'énergie redistribuée alimenta mille foyers pendant un hiver entier. C'était réel. C'était mesurable. C'était la preuve. La Convergence réalisa quarante-deux Drains supplémentaires dans les dix-huit mois suivants. Pas tous volontaires.`,
    consequence: "Le Premier Drain est la date fondatrice de la Convergence active. Saeved est un saint dans les sables. La chambre de sa mort est un sanctuaire.",
    arc: "L_Avatar",
    personnages: [
      { id: 65, nom: "Saeved", role: "héros/saint/mort", faction: "—" },
      { id: 63, nom: "Lysael", role: "recruteuse Convergence actuelle", faction: "Convergence" },
      { id: 43, nom: "Graveth", role: "doctrine du Drain à Ormn-Dur", faction: "Convergence" },
    ],
  },
  {
    id: "Saturation_des_Elus",
    titre: "La Saturation des Élus",
    annee: -23,
    region: "Isthme",
    emoji: "🌀",
    court: "Trois fois plus d'Élus naissent à Virex en 18 mois. Anomalies permanentes. 39 naissances double-puissance classifiées.",
    long: `En dix-huit mois, trois fois plus d'Élus naquirent à Virex qu'au cours des dix années précédentes. Le Calendrier n'avait pas prévu ce surplus — ou avait choisi de ne rien faire.

Les interférences élémentaires créèrent des zones d'anomalie permanentes : des rues où feu et eau coexistent, des parcs où les plantes poussent dans la pierre. Virex cartographia ses propres impossibilités. Parmi les naissances du surplus : 39 enfants portant deux éléments complets, à pleine puissance. Leurs dossiers sont classifiés. Ils ont 23 ans aujourd'hui.`,
    consequence: "Les 39 enfants double-puissance ont 23 ans. L'Empire veut leurs dossiers. Les Dissidentes aussi. Virex dit 'en traitement' depuis trois ans.",
    arc: "L_Avatar",
    personnages: [
      { id: 62, nom: "Thyven", role: "administrateur de Virex", faction: "Confédération" },
      { id: 63, nom: "Lysael", role: "approche les 39 pour la Convergence", faction: "Convergence" },
      { id: 59, nom: "Second Avatar", role: "lié aux anomalies de Virex", faction: "Dissidentes" },
    ],
  },
  {
    id: "Protocole_Identification",
    titre: "Le Protocole d'Identification",
    annee: -2,
    region: "Déserts",
    emoji: "🎯",
    court: "La Convergence lance en secret la recherche de 18 'purs élémentaires' — un par élément — pour forger l'Avatar Total. Razhal reçoit le 18e profil.",
    long: `La doctrine officielle de la Convergence parle de redistribution. La doctrine secrète, connue de moins d'une dizaine de personnes, parle d'Avatar Total — un être forgé par drainage des 18 élémentaires les plus purs, un par élément.

Razhal, chargé du Protocole d'Identification, reçoit le 18e profil dans les déserts d'Ash'Rael. Il note dans son registre privé : "une liste de dix-huit n'est pas de la logistique de redistribution ordinaire." Il ne reçoit pas de réponse. Le Protocole continue.

Pendant ce temps, Drevorn réécrit pour la douzième fois le chapitre sur le consentement de Saeved. Il était à 20 mètres quand Saeved a dit "je choisis ça" — avec le vent dans cette direction. Drethven, Vanguard loyal de la Convergence depuis 8 ans, est le 18e pur. Il ne le sait pas.`,
    consequence: "18 profils. 18 éléments. La date est fixée à An 0. L'Empire, les Dissidentes, et la plupart de la Convergence ne savent pas.",
    arc: "L_Avatar",
    personnages: [
      { id: 231, nom: "Razhal", role: "exécutant du Protocole", faction: "Convergence" },
      { id: 233, nom: "Drevorn", role: "théologien — doute sur le consentement de Saeved", faction: "Convergence" },
      { id: 232, nom: "Shiveth", role: "médecin de terrain — ignore la finalité", faction: "Convergence" },
      { id: 245, nom: "Drethven", role: "18e pur élémentaire — ne sait pas", faction: "Convergence" },
      { id: 242, nom: "Sykavel", role: "a conçu le Drain Préparatoire — commence à voir", faction: "Convergence" },
      { id: 67,  nom: "Arev", role: "terrain — croit à la redistribution", faction: "Convergence" },
      { id: 239, nom: "Amhavel", role: "garde les archives — sait tout, n'agit pas", faction: "Convergence" },
      { id: 240, nom: "Zyress", role: "élimine ceux qui savent trop", faction: "Convergence" },
    ],
  },
  {
    id: "Fissures_Citadelle",
    titre: "Les Fissures de la Citadelle",
    annee: -1,
    region: "Citadelle",
    emoji: "👁",
    court: "La Citadelle du Voile commence à percevoir ce qu'elle ne devrait pas. Trois gardes mutés. Un Calendrier modifié. Des Dissidentes dans les couloirs depuis 11 ans.",
    long: `La Citadelle du Voile est le cœur de l'Empire des Fées — le lieu où le Calendrier est lu, interprété, appliqué. Depuis 9 ans, Eiravel y envoie des rapports discrets via le Canal Gris. Depuis 11 ans, Syravel fait de même de l'autre aile, et elles ne savent pas que l'autre existe.

Sylviel, lectrice de vérité, a perçu il y a trois mois un administrateur Fée sélectionnant délibérément les vérités à transmettre. Elle a classé l'incident "anomalie administrative en cours d'interprétation." Varek a vu trois collègues transférés après des questions sur la chambre interdite du Calendrier.

Isvara sait depuis 6 ans que les modifications du Calendrier Principal portent la signature d'un Drain Préparatoire qui cause le dégel du Champ Gelé. Son rapport est en archive chiffrée personnelle. Elle ne l'a jamais transmis.`,
    consequence: "La Citadelle voit les fissures mais les classe. Les infiltrées Dissidentes ont accès aux logs. L'Empire ne sait pas qu'il dégèle Crysalme.",
    arc: "L_Avatar",
    personnages: [
      { id: 246, nom: "Sylviel", role: "lectrice de vérité — perçoit une anomalie", faction: "Empire" },
      { id: 247, nom: "Varek", role: "garde — trois collègues mutés", faction: "Empire" },
      { id: 248, nom: "Eiravel", role: "infiltrée Dissidentes — accès aux logs", faction: "Dissidentes" },
      { id: 254, nom: "Syravel", role: "infiltrée Dissidentes — ignore qu'Eiravel existe", faction: "Dissidentes" },
      { id: 56,  nom: "Isvara", role: "sait pour le Drain Préparatoire — n'a rien dit", faction: "Empire" },
      { id: 250, nom: "Orvael", role: "commandant de garde — recommence à questionner", faction: "Empire" },
      { id: 249, nom: "Telvara", role: "classe des anomalies sans les signaler", faction: "Empire" },
      { id: 260, nom: "Vael", role: "ancienne Fée — a fui il y a 30 ans, sait quelque chose", faction: "Indépendant" },
    ],
  },
  {
    id: "Traque_Second_Avatar",
    titre: "La Traque du Second Avatar",
    annee: 0,
    region: "Isthme",
    emoji: "🌀",
    court: "L'Empire envoie des Capteurs à Virex. La Convergence déploie analystes et assassins. Le Second Avatar refuse d'être un symbole. Tous convergent.",
    long: `Le Second Avatar a 28 ans. Sarath, qui l'a caché pendant 3 ans, est mort sans lui dire pourquoi lui spécifiquement. Il cherche à comprendre sa propre nature avant que les autres décident ce qu'il est pour eux.

L'Empire envoie Avel — 48h avant Virex. La Convergence positionne Sythavel pour l'analyser et Rhethora pour "empêcher sa récupération impériale." Orven II le traque depuis 5 ans avec l'obsession de quelqu'un qui cartographie ce qu'il ne peut pas être lui-même.

Les Dissidentes maintiennent des routes de fuite : Velath prépare un corridor de 70km vers Ash'Rael. Vethyskel cartographie des corridors depuis Virex. Ils travaillent en parallèle sans se connaître. Thyskara, une des 39 de Virex, cherche le Second Avatar sans savoir qu'il cherche la même chose.`,
    consequence: "An 0 approche. L'Empire, la Convergence et les Dissidentes cherchent le même homme. Aucun pour les mêmes raisons.",
    arc: "L_Avatar",
    personnages: [
      { id: 59,  nom: "Second Avatar", role: "fuyard — cherche à comprendre avant d'agir", faction: "Dissidentes" },
      { id: 64,  nom: "Avel", role: "Capteur impérial — 48h avant Virex", faction: "Empire" },
      { id: 263, nom: "Orven II", role: "traqueur impérial — envie des Élus", faction: "Empire" },
      { id: 269, nom: "Sythavel", role: "analyste Convergence — le comprend mieux que quiconque", faction: "Convergence" },
      { id: 270, nom: "Rhethora", role: "assassin / protectrice ambiguë", faction: "Convergence" },
      { id: 262, nom: "Thyskara", role: "des 39 de Virex — cherche la même chose", faction: "Indépendant" },
      { id: 49,  nom: "Velath", role: "prépare les routes de fuite", faction: "Dissidentes" },
      { id: 274, nom: "Vethyskel", role: "cartographe des corridors", faction: "Dissidentes" },
    ],
  },
];

// Personnages référencés dans la timeline (pour navigation)
// Ces IDs correspondent aux entrées dans characters.json
export const CHARACTERS_INDEX = {
  1: { nom: "Brasia", element: "Feu", faction: "Dissidentes" },
  2: { nom: "Cendrix", element: "Feu", faction: "Empire" },
  5: { nom: "Yssara", element: "Feu", faction: "Dissidentes" },
  7: { nom: "Kael", element: "Feu", faction: "Indépendant" },
  8: { nom: "Velindra", element: "Glace", faction: "Empire" },
  14: { nom: "Lysara", element: "Eau", faction: "Indépendant" },
  15: { nom: "Orven", element: "Electrique", faction: "Confédération" },
  17: { nom: "Vel", element: "Eau", faction: "Dissidentes" },
  22: { nom: "Ishal", element: "Eau", faction: "Indépendant" },
  23: { nom: "Talvyn", element: "Electrique", faction: "Indépendant" },
  24: { nom: "Serathis", element: "Stellaire", faction: "Empire" },
  26: { nom: "Garev", element: "Electrique", faction: "—" },
  27: { nom: "Veralith", element: "Stellaire", faction: "—" },
  28: { nom: "Caerra", element: "Vent", faction: "—" },
  31: { nom: "Sylvae", element: "Plante", faction: "Conservateurs" },
  32: { nom: "Kessyn", element: "Feu", faction: "Gardiens" },
  33: { nom: "Thalorn", element: "Plante", faction: "Conservateurs" },
  37: { nom: "Sylindra", element: "Plante", faction: "Indépendant" },
  38: { nom: "Valyx", element: "Poison", faction: "—" },
  39: { nom: "Drevaya", element: "Poison", faction: "Indépendant" },
  41: { nom: "Karm", element: "Sol", faction: "Technocratie" },
  43: { nom: "Graveth", element: "Poison", faction: "Convergence" },
  45: { nom: "Ael", element: "Electrique/Stellaire", faction: "—" },
  46: { nom: "Vethis", element: "Ténèbres", faction: "Dissidentes" },
  48: { nom: "Shael", element: "Psy", faction: "Convergence" },
  51: { nom: "Osara", element: "Poison", faction: "Indépendant" },
  52: { nom: "Karath", element: "Glace", faction: "—" },
  53: { nom: "Sylkra", element: "Glace", faction: "Monarchie" },
  54: { nom: "Aethren", element: "Fée", faction: "Dissidentes" },
  55: { nom: "Thyval", element: "Stellaire", faction: "Monarchie" },
  59: { nom: "Second Avatar", element: "Tous", faction: "Dissidentes" },
  62: { nom: "Thyven", element: "Combat", faction: "Confédération" },
  63: { nom: "Lysael", element: "Electrique", faction: "Convergence" },
  65: { nom: "Saeved", element: "Sol", faction: "—" },

  // Arc 1 suite
  11: { nom: "Orkhael", element: "Feu", faction: "Parti du Feu" },
  12: { nom: "Valdris", element: "Roche", faction: "Indépendant" },
  13: { nom: "Nyreth", element: "Glace", faction: "Dissidentes" },

  // Arc 2 suite
  16: { nom: "Shaleth", element: "Psy", faction: "Confédération" },
  18: { nom: "Thariel", element: "Psy", faction: "Indépendant" },
  19: { nom: "Aeronn", element: "Vent", faction: "Empire" },
  20: { nom: "Crysta", element: "Eau", faction: "Convergence" },
  21: { nom: "Narev", element: "Gravité", faction: "Confédération" },

  // Arc 3 suite
  25: { nom: "Yrith", element: "Vent", faction: "Indépendant" },
  29: { nom: "Telos", element: "Electrique", faction: "Empire" },
  30: { nom: "Syvara", element: "Stellaire", faction: "Indépendant" },

  // Arc 4 suite
  35: { nom: "Aeris", element: "Plante/Eau", faction: "Empire" },
  36: { nom: "Krath", element: "Feu", faction: "Gardiens" },

  // Arc 5 suite
  40: { nom: "Draven II", element: "Roche", faction: "Confédération" },
  42: { nom: "Thyss", element: "Acier", faction: "Technocratie" },
  44: { nom: "Ossira", element: "Sol", faction: "Dissidentes" },

  // Arc 6 suite
  47: { nom: "Nyrreth", element: "Spectre", faction: "Indépendant" },
  50: { nom: "Tharyn", element: "Insecte", faction: "Indépendant" },

  // Arc 7 suite
  57: { nom: "Keldris", element: "Glace", faction: "Monarchie" },
  58: { nom: "Velsa", element: "Spectre", faction: "Indépendant" },

  // Arc 8 suite
  60: { nom: "Premier Avatar", element: "Tous", faction: "Empire" },
  61: { nom: "Sarath", element: "Normal", faction: "Dissidentes" },
  64: { nom: "Avel", element: "Feu", faction: "Empire" },

  // Arc 6-7 écrits (absents de l'index original)
  49: { nom: "Velath", element: "Ténèbres", faction: "Dissidentes" },
  56: { nom: "Isvara", element: "Fée", faction: "Empire" },

  // Cross écrits
  67:  { nom: "Arev", element: "Sol", faction: "Convergence" },
  206: { nom: "Kethval", element: "Feu/Acier", faction: "Parti de l'Acier" },
  226: { nom: "Vrash", element: "Feu/Psy", faction: "Indépendant" },
  229: { nom: "Harryn", element: "Feu/Spectre", faction: "Dissidentes" },
  231: { nom: "Razhal", element: "Sol/Combat", faction: "Convergence" },
  232: { nom: "Shiveth", element: "Feu/Poison", faction: "Convergence" },
  233: { nom: "Drevorn", element: "Ténèbres/Sol", faction: "Convergence" },
  246: { nom: "Sylviel", element: "Fée/Psy", faction: "Empire" },
  247: { nom: "Varek", element: "Combat/Stellaire", faction: "Empire" },
  248: { nom: "Eiravel", element: "Fée/Vent", faction: "Dissidentes" },

  // D17 — Convergence
  234: { nom: "Vashmael", element: "Sol/Normal", faction: "Convergence" },
  235: { nom: "Khorath", element: "Combat/Sol", faction: "Convergence" },
  236: { nom: "Taluya", element: "Eau/Fée", faction: "Convergence" },
  237: { nom: "Orveth", element: "Normal/Vent", faction: "Convergence" },
  238: { nom: "Sethara", element: "Feu/Psy", faction: "Convergence" },
  239: { nom: "Amhavel", element: "Sol/Ténèbres", faction: "Convergence" },
  240: { nom: "Zyress", element: "Spectre/Combat", faction: "Convergence" },
  241: { nom: "Rhavel", element: "Eau/Glace", faction: "Convergence" },
  242: { nom: "Sykavel", element: "Gravité/Acier", faction: "Convergence" },
  243: { nom: "Kaevorn", element: "Roche/Sol", faction: "Convergence" },
  244: { nom: "Phyrana", element: "Normal/Fée", faction: "Convergence" },
  245: { nom: "Drethven", element: "Sol/Combat", faction: "Convergence" },

  // D18 — Citadelle/Empire
  249: { nom: "Telvara", element: "Fée/Electrique", faction: "Empire" },
  250: { nom: "Orvael", element: "Combat/Stellaire", faction: "Empire" },
  251: { nom: "Caesyl", element: "Fée/Eau", faction: "Empire" },
  252: { nom: "Vethara", element: "Fée/Psy", faction: "Empire" },
  253: { nom: "Kaeryn", element: "Vent/Combat", faction: "Empire" },
  254: { nom: "Syravel", element: "Fée/Ténèbres", faction: "Dissidentes" },
  255: { nom: "Thaeval", element: "Fée/Plante", faction: "Empire" },
  256: { nom: "Ormavel", element: "Normal/Roche", faction: "Empire" },
  257: { nom: "Velthys", element: "Fée/Glace", faction: "Empire" },
  258: { nom: "Carevorn", element: "Feu/Stellaire", faction: "Empire" },
  259: { nom: "Syrethia", element: "Fée/Eau", faction: "Dissidentes" },
  260: { nom: "Vael", element: "Fée/Spectre", faction: "Indépendant" },

  // D19 — Second Avatar
  261: { nom: "Sarevorn", element: "Normal/Combat", faction: "Dissidentes" },
  262: { nom: "Thyskara", element: "Eau/Vent", faction: "Indépendant" },
  263: { nom: "Orven II", element: "Electrique/Combat", faction: "Empire" },
  264: { nom: "Sylkavel", element: "Plante/Fée", faction: "Dissidentes" },
  265: { nom: "Thareven", element: "Sol/Roche", faction: "Confédération" },
  266: { nom: "Vashera", element: "Normal/Psy", faction: "Dissidentes" },
  267: { nom: "Keshavel", element: "Feu/Acier", faction: "Empire" },
  268: { nom: "Aelthys", element: "Vent/Stellaire", faction: "Indépendant" },
  269: { nom: "Sythavel", element: "Glace/Ténèbres", faction: "Convergence" },
  270: { nom: "Rhethora", element: "Poison/Combat", faction: "Convergence" },
  271: { nom: "Tharaevorn", element: "Normal/Electrique", faction: "Dissidentes" },
  272: { nom: "Sylvethys", element: "Fée/Eau", faction: "Indépendant" },
  273: { nom: "Kaelorveth", element: "Combat/Sol", faction: "Empire" },
  274: { nom: "Vethyskel", element: "Spectre/Vent", faction: "Dissidentes" },
  275: { nom: "Thyrekavel", element: "Multi-résonance", faction: "Indépendant" },
};

export const FACTION_COLORS = {
  "Empire": "#4060c0",
  "Convergence": "#c04020",
  "Dissidentes": "#60a020",
  "Indépendant": "#808080",
  "Monarchie": "#8060a0",
  "Confédération": "#208080",
  "Technocratie": "#a08020",
  "Conservateurs": "#408040",
  "Gardiens": "#c06020",
  "—": "#404040",
};
