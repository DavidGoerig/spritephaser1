// ============================================================
//  CHARACTER KITS — 18 éléments × (2 passifs + 10 sorts)
//  Chaque élément a une identité de gameplay unique liée
//  aux interactions avec le système de blocs isométrique.
// ============================================================

export type SortType =
  | 'Dégâts'
  | 'Contrôle'
  | 'Terrain'
  | 'Buff'
  | 'Soin'
  | 'Invocation'
  | 'Utilitaire'
  | 'Déplacement'
  | 'Dégâts/Contrôle'
  | 'Dégâts/Terrain'
  | 'Terrain/Contrôle'
  | 'Terrain/Buff'
  | 'Dégâts/Soin'
  | 'Buff/Contrôle'
  | 'Buff/Utilitaire'
  | 'Déplacement/Dégâts'
  | 'Déplacement/Buff'
  | 'Déplacement/Utilitaire'
  | 'Contrôle/Utilitaire'
  | 'Contrôle/Terrain'
  | 'Terrain/Utilitaire'
  | 'Terrain/Dégâts'
  | 'Invocation/Déplacement'
  | 'Buff/Dégâts'
  | 'Soin/Utilitaire'
  | 'Buff/Terrain'
  | 'Dégâts/Buff'
  | 'Déplacement/Terrain'
  | 'Terrain/Invocation'
  | 'Soin/Buff/Terrain'
  | 'Dégâts/Utilitaire';

export type Element =
  | 'Feu'
  | 'Eau'
  | 'Glace'
  | 'Electrique'
  | 'Plante'
  | 'Sol'
  | 'Roche'
  | 'Vent'
  | 'Dragon'
  | 'Insecte'
  | 'Psy'
  | 'Ténèbres'
  | 'Fée'
  | 'Poison'
  | 'Spectre'
  | 'Gravité'
  | 'Combat'
  | 'Normal';

export interface Passif {
  nom: string;
  description: string;
}

export interface Sort {
  num: number;
  nom: string;
  type: SortType;
  portee: number;
  coutPM: number;
  cooldown: number;
  description: string;
  interaction?: string;
}

export interface ElementKit {
  element: Element;
  motCle: string;
  identiteGameplay: string;
  passifs: [Passif, Passif];
  sorts: [Sort, Sort, Sort, Sort, Sort, Sort, Sort, Sort, Sort, Sort];
}

// ============================================================
//  1. FEU
// ============================================================
const FEU: ElementKit = {
  element: 'Feu',
  motCle: 'Propagation · Pression · Espace brûlant',
  identiteGameplay:
    "Le joueur Feu contrôle la carte via la menace permanente de propagation. Il ne chase pas l'ennemi — il force l'ennemi à venir ou à fuir dans des cases non-brûlées. Chaque case Feu est une bombe à retardement. Plus l'ennemi se serre, plus le Feu est puissant.",
  passifs: [
    {
      nom: 'Embrasement',
      description:
        'Chaque case Feu active dans un rayon de 5 donne +3% de dégâts Feu. Max 15 stacks (+45%).',
    },
    {
      nom: 'Cendre Persistante',
      description:
        "Quand une case Feu s'éteint naturellement, elle devient Cendre (dégâts 50%, dure 3 tours). Toute Cendre peut être réactivée par n'importe quel sort Feu.",
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Boule de Feu', type: 'Dégâts', portee: 6, coutPM: 2, cooldown: 1,
      description: 'Projectile linéaire. Enflamme la case d\'impact en case Feu pour 2 tours.',
    },
    {
      num: 2, nom: 'Embrasement Forcé', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Enflamme une case adjacente à une case Feu existante, ou toute case d\'un Z inférieur dans le rayon.',
    },
    {
      num: 3, nom: 'Traînée Ignée', type: 'Déplacement/Terrain', portee: 3, coutPM: 2, cooldown: 2,
      description: 'Le lanceur se déplace de 3 cases et enflamme chaque case traversée.',
    },
    {
      num: 4, nom: 'Mur de Flammes', type: 'Terrain/Contrôle', portee: 4, coutPM: 5, cooldown: 3,
      description: 'Crée une ligne de 4 cases Feu adjacentes. Durée 3 tours.',
    },
    {
      num: 5, nom: 'Combustion', type: 'Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Cible une unité sur case Feu : double les dégâts de la case Feu sur cette unité pendant 3 tours.',
    },
    {
      num: 6, nom: 'Aspiration', type: 'Soin/Utilitaire', portee: 1, coutPM: 3, cooldown: 3,
      description: 'Absorbe une case Feu adjacente : soigne 20% des PV max et reset le CD d\'un sort au hasard.',
    },
    {
      num: 7, nom: 'Forja Volcanique', type: 'Terrain', portee: 4, coutPM: 6, cooldown: 4,
      description: 'Fusionne une case Feu + Roche adjacente en Magma : dégâts doublés, ralentit, ne s\'éteint pas naturellement.',
    },
    {
      num: 8, nom: 'Inferno', type: 'Terrain/Dégâts', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Transforme toutes les cases Eau, Glace et Vent dans le rayon en Vapeur et inflige des dégâts à toutes les unités dans ces cases.',
    },
    {
      num: 9, nom: 'Météore', type: 'Dégâts/Terrain', portee: 8, coutPM: 8, cooldown: 6,
      description: 'Frappe une zone 2×2 depuis le dessus. Détruit le cube Z le plus haut de chaque case. Enflamme la zone pendant 3 tours.',
    },
    {
      num: 10, nom: 'ULTIME — Apocalypse de Feu', type: 'Terrain/Dégâts', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 4 tours : chaque case adjacente à une case Feu a 50% de chance de s\'enflammer à la fin de chaque tour. Toutes les cases Cendre s\'embrasent immédiatement.',
    },
  ],
};

// ============================================================
//  2. EAU
// ============================================================
const EAU: ElementKit = {
  element: 'Eau',
  motCle: 'Flux · Réseau · Gravité hydraulique',
  identiteGameplay:
    "L'Eau suit la gravité — elle inonde les cases basses automatiquement. Le joueur Eau pense en relief : il crée des réservoirs en hauteur pour faire cascader l'eau vers des zones stratégiques. Il s'associe à Electrique (conducteur) et Glace (gel) pour des combos redoutables.",
  passifs: [
    {
      nom: 'Gravité Hydraulique',
      description:
        "Quand une case Eau est créée à hauteur Z, toutes les cases Z-1 directement en dessous deviennent également Eau (cascade). Maximum 3 niveaux.",
    },
    {
      nom: 'Pression Montante',
      description: '+5% de dégâts par case Eau dans un rayon de 4. Max 8 cases (+40%).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Jet d\'Eau', type: 'Dégâts/Contrôle', portee: 6, coutPM: 2, cooldown: 1,
      description: 'Projectile linéaire. Pousse la cible d\'1 case dans la direction du jet.',
    },
    {
      num: 2, nom: 'Inondation', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Crée une case Eau à l\'emplacement ciblé. Si en Z>0, déclenche la cascade passive.',
    },
    {
      num: 3, nom: 'Brume', type: 'Utilitaire', portee: 3, coutPM: 3, cooldown: 3,
      description: 'Zone 3×3 de brume pendant 3 tours. Vision réduite à 2 cases pour tout le monde dans la zone.',
    },
    {
      num: 4, nom: 'Vague', type: 'Dégâts/Contrôle', portee: 7, coutPM: 4, cooldown: 3,
      description: 'Vague linéaire sur 7 cases. Pousse toutes les unités touchées d\'1 case perpendiculairement.',
    },
    {
      num: 5, nom: 'Canal', type: 'Terrain/Buff', portee: 6, coutPM: 4, cooldown: 4,
      description: 'Trace un chemin d\'Eau entre 2 points (max 6 cases). Les alliés Electrique et Eau glissent dessus sans coût PM.',
    },
    {
      num: 6, nom: 'Maelstrom', type: 'Contrôle', portee: 5, coutPM: 6, cooldown: 4,
      description: 'Tourbillon sur une case Eau. Pendant 2 tours, les unités à portée 2 sont attirées d\'1 case par tour vers le centre.',
    },
    {
      num: 7, nom: 'Transmutation', type: 'Terrain/Utilitaire', portee: 4, coutPM: 5, cooldown: 4,
      description: 'Transforme Glace→Eau, Vapeur→Eau, ou Poison→Eau (neutralise).',
    },
    {
      num: 8, nom: 'Prison d\'Eau', type: 'Contrôle', portee: 5, coutPM: 8, cooldown: 5,
      description: 'Entoure une unité de 4 cases Eau. Immobilise les unités ne pouvant pas nager pendant 3 tours.',
    },
    {
      num: 9, nom: 'Déluge', type: 'Terrain/Dégâts', portee: 6, coutPM: 8, cooldown: 6,
      description: 'Pluie pendant 3 tours. Chaque tour, 1 case aléatoire proche de chaque unité ennemie devient Eau.',
    },
    {
      num: 10, nom: 'ULTIME — Raz-de-Marée', type: 'Dégâts/Contrôle', portee: 10, coutPM: 15, cooldown: 10,
      description: 'Vague massive 6 cases de large, 10 cases de profondeur. Inonde toutes les cases touchées et pousse toutes les unités de 4 cases dans la direction de la vague.',
    },
  ],
};

// ============================================================
//  3. GLACE
// ============================================================
const GLACE: ElementKit = {
  element: 'Glace',
  motCle: 'Immobilité · Glissement · Fragmentation',
  identiteGameplay:
    "La Glace arrête le temps. Elle fige les unités, crée des surfaces glissantes incontrôlables, et se brise en dégâts massifs. Le joueur Glace jongle entre figer le terrain pour ses alliés (immunisés aux glissades) et le transformer en piège mortel pour les ennemis.",
  passifs: [
    {
      nom: 'Fragilité Cristalline',
      description:
        'Les cases Glace ont des PV. Quand elles reçoivent des dégâts non-Glace/non-Eau, elles explosent et infligent des dégâts de zone à toutes les unités adjacentes.',
    },
    {
      nom: 'Hypothermie',
      description:
        'Chaque tour passé sur une case Glace applique 1 stack. À 3 stacks : ralenti. À 6 stacks : gel partiel (attaque 1 tour sur 2). Immunité pour les unités Glace.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Souffle Glacial', type: 'Dégâts/Contrôle', portee: 4, coutPM: 2, cooldown: 1,
      description: 'Cône de 3 cases de large. Applique 2 stacks Hypothermie.',
    },
    {
      num: 2, nom: 'Congélation', type: 'Terrain/Contrôle', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Transforme une case Eau en Glace. Ou : gèle une unité sur place 1 tour si elle a ≥3 stacks Hypothermie.',
    },
    {
      num: 3, nom: 'Patinoire', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 3,
      description: 'Crée une zone 3×3 de cases Glace glissantes. Durée 4 tours.',
    },
    {
      num: 4, nom: 'Éclat de Glace', type: 'Dégâts', portee: 7, coutPM: 4, cooldown: 2,
      description: 'Projectile. Si la case cible est Glace, explose et inflige des dégâts de zone aux 4 cases adjacentes.',
    },
    {
      num: 5, nom: 'Pont Glacé', type: 'Terrain/Utilitaire', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Crée un pont de Glace entre deux cases à différents Z. Praticable par tous, mais glissant pour les non-Glace.',
    },
    {
      num: 6, nom: 'Avalanche', type: 'Dégâts/Terrain', portee: 5, coutPM: 6, cooldown: 4,
      description: 'Fait tomber tous les cubes du Z le plus haut des 3 cases ciblées en ligne. Les cubes tombants infligent des dégâts aux unités en dessous.',
    },
    {
      num: 7, nom: 'Tempête de Grêle', type: 'Dégâts', portee: 6, coutPM: 7, cooldown: 5,
      description: 'Zone 4×4 pendant 2 tours. Inflige des dégâts et applique 1 stack Hypothermie par tour à chaque unité dans la zone.',
    },
    {
      num: 8, nom: 'Mur de Glace', type: 'Terrain/Contrôle', portee: 5, coutPM: 6, cooldown: 5,
      description: 'Fait pousser une colonne de Glace Z+2 sur une case. Bloque la ligne de vue et le passage.',
    },
    {
      num: 9, nom: 'Fracturation', type: 'Dégâts', portee: 8, coutPM: 8, cooldown: 6,
      description: 'Fait exploser simultanément toutes les cases Glace dans un rayon de 6. Chaque explosion inflige des dégâts de zone.',
    },
    {
      num: 10, nom: 'ULTIME — Âge de Glace', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Toutes les cases Eau sur la carte deviennent Glace. Toutes les unités ennemies reçoivent 3 stacks Hypothermie. Dure 5 tours.',
    },
  ],
};

// ============================================================
//  4. ELECTRIQUE
// ============================================================
const ELECTRIQUE: ElementKit = {
  element: 'Electrique',
  motCle: 'Réseau · Chaîne · Amplification',
  identiteGameplay:
    "L'Electrique est un multiplicateur — seul il est faible, en réseau il est dévastateur. Le joueur crée un réseau de cases conductrices et de batteries. Plus le réseau est dense, plus chaque décharge est amplifiée. Un seul sort peut chaîner sur 10 unités avec le bon positionnement.",
  passifs: [
    {
      nom: 'Conductivité',
      description:
        'Les sorts Electrique se propagent automatiquement aux unités adjacentes à la cible si elles se trouvent sur une case conductrice (Acier, Eau, Electrique). Propagation max 3 sauts.',
    },
    {
      nom: 'Surcharge',
      description:
        'Après avoir activé 3 cases Electrique dans un même tour, le prochain sort Electrique inflige 100% de dégâts bonus (reset après utilisation).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Arc Électrique', type: 'Dégâts', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Frappe une cible. Se propage aux conducteurs adjacents via la Conductivité passive.',
    },
    {
      num: 2, nom: 'Charge', type: 'Terrain', portee: 4, coutPM: 2, cooldown: 2,
      description: 'Charge une case conductrice voisine en case Electrique (batterie). Utilisable 3 fois avant CD.',
    },
    {
      num: 3, nom: 'Éclair', type: 'Dégâts/Contrôle', portee: 7, coutPM: 3, cooldown: 2,
      description: 'Frappe la cible et l\'étourdit 1 tour si elle est sur une case conductrice.',
    },
    {
      num: 4, nom: 'Court-Circuit', type: 'Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Relie deux cases Electrique adjacentes. Toutes les unités entre elles reçoivent des dégâts et sont étourdies 1 tour.',
    },
    {
      num: 5, nom: 'EMP', type: 'Utilitaire', portee: 4, coutPM: 5, cooldown: 4,
      description: 'Zone 3×3. Désactive tous les mécanismes actifs (cases Steel spéciales) pendant 3 tours. Dégâts aux unités Electrique ennemies.',
    },
    {
      num: 6, nom: 'Batterie Géante', type: 'Terrain/Buff', portee: 3, coutPM: 5, cooldown: 4,
      description: 'Crée une super-batterie (3 charges) sur une case Steel. Les alliés peuvent consommer une charge pour booster leur prochain sort.',
    },
    {
      num: 7, nom: 'Tempête Statique', type: 'Dégâts/Terrain', portee: 6, coutPM: 7, cooldown: 5,
      description: 'Zone 4×4 de champs statiques pendant 3 tours. Chaque unité entrant dans la zone reçoit des dégâts.',
    },
    {
      num: 8, nom: 'Transfert', type: 'Déplacement/Utilitaire', portee: 8, coutPM: 6, cooldown: 5,
      description: 'Téléporte le lanceur le long d\'un réseau de cases conductrices consécutives (max 8 cases de distance).',
    },
    {
      num: 9, nom: 'Surcharge Totale', type: 'Dégâts', portee: -1, coutPM: 10, cooldown: 7,
      description: 'Fait exploser toutes les batteries (cases Electrique) sur la carte simultanément. Dégâts de zone autour de chaque case.',
    },
    {
      num: 10, nom: 'ULTIME — Tempête de Foudre', type: 'Dégâts/Terrain', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 4 tours, la foudre frappe au début de chaque tour toutes les cases Electrique de la carte. Les unités dessus reçoivent des dégâts massifs. Les alliés Electrique sont immunisés.',
    },
  ],
};

// ============================================================
//  5. PLANTE
// ============================================================
const PLANTE: ElementKit = {
  element: 'Plante',
  motCle: 'Construction · Obstruction · Camouflage',
  identiteGameplay:
    "La Plante construit. Elle redessine la carte tour après tour : murs de ronces, ponts de lianes, zones de régénération, labyrinthes vivants. Elle n'attaque pas directement — elle crée un environnement qui avantage ses alliés et piège ses ennemis.",
  passifs: [
    {
      nom: 'Régénération Naturelle',
      description:
        'Les cases Plante soignent toutes les unités alliées qui y restent stationnaires de 5% PV max par tour.',
    },
    {
      nom: 'Prolifération',
      description:
        'À la fin de chaque tour, chaque case Plante a 20% de chance de se propager à une case adjacente vide (sol uniquement, pas les murs).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Vrille', type: 'Contrôle', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Lance une liane sur une unité. L\'immobilise pendant 1 tour.',
    },
    {
      num: 2, nom: 'Croissance', type: 'Terrain', portee: 3, coutPM: 2, cooldown: 2,
      description: 'Fait pousser une case Plante sur une case de sol adjacente, ou monte une case Plante existante d\'un niveau Z.',
    },
    {
      num: 3, nom: 'Camouflage', type: 'Buff/Utilitaire', portee: 3, coutPM: 3, cooldown: 3,
      description: 'L\'unité ciblée devient invisible pendant 2 tours si elle reste sur une case Plante.',
    },
    {
      num: 4, nom: 'Mur de Ronces', type: 'Terrain/Contrôle', portee: 4, coutPM: 4, cooldown: 3,
      description: 'Crée un mur de 3 cases Plante à Z+1. Toute unité tentant de traverser reçoit des dégâts.',
    },
    {
      num: 5, nom: 'Pont de Lianes', type: 'Terrain/Utilitaire', portee: 6, coutPM: 4, cooldown: 3,
      description: 'Crée 4 cases Plante aériennes entre deux points de hauteurs différentes. Seuls les alliés peuvent les traverser librement.',
    },
    {
      num: 6, nom: 'Spores', type: 'Dégâts/Contrôle', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Spores hallucinogènes dans un rayon de 3. Les unités ennemies dans la zone sont confuses 2 tours (déplacement aléatoire).',
    },
    {
      num: 7, nom: 'Parasitage', type: 'Terrain', portee: 4, coutPM: 6, cooldown: 4,
      description: 'Transforme une case ennemie (quelle que soit sa nature) en case Plante. Neutralise l\'effet précédent.',
    },
    {
      num: 8, nom: 'Forêt Instantanée', type: 'Terrain', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Crée une zone 3×3 de cases Plante à Z+1. Les unités en dessous sont à couvert (ne peuvent pas être ciblées à distance).',
    },
    {
      num: 9, nom: 'Plante Carnivore', type: 'Dégâts/Soin', portee: 4, coutPM: 8, cooldown: 6,
      description: 'Pose une plante carnivore sur une case Plante. Toute unité ennemie qui passe dessus est immobilisée 2 tours, prend des dégâts progressifs. Les dégâts soignent le lanceur.',
    },
    {
      num: 10, nom: 'ULTIME — Jungle Primordiale', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Toutes les cases vides dans un rayon de 8 deviennent Plante. Pendant 4 tours, la Prolifération passe à 100% (chaque case Plante se propage systématiquement chaque tour).',
    },
  ],
};

// ============================================================
//  6. SOL
// ============================================================
const SOL: ElementKit = {
  element: 'Sol',
  motCle: 'Géomorphisme · Hauteur · Tunnels',
  identiteGameplay:
    "Le Sol est un ingénieur du terrain. Il monte et descend des cases pour créer des avantages tactiques — une hauteur de +2Z donne un énorme bonus de portée. Il creuse des tunnels sous le champ de bataille pour des déplacements invisibles. Il contrôle la verticalité comme personne d'autre.",
  passifs: [
    {
      nom: 'Sismique',
      description:
        "Quand le Sol modifie la hauteur d'une case (monte ou descend), toutes les unités sur les cases adjacentes sont projetées d'1 case aléatoirement.",
    },
    {
      nom: 'Ancrage Tellurique',
      description:
        "Les unités alliées Sol ne peuvent pas être poussées ou tirées. Elles gagnent +10% de défense par case Sol adjacente (max 40%).",
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Secousse', type: 'Dégâts/Contrôle', portee: 4, coutPM: 2, cooldown: 1,
      description: 'Fait vibrer une case cible. L\'unité dessus perd sa prochaine action de mouvement (renversée).',
    },
    {
      num: 2, nom: 'Soulèvement', type: 'Terrain', portee: 3, coutPM: 3, cooldown: 2,
      description: 'Monte une case d\'un niveau Z. Les unités dessus montent avec elle.',
    },
    {
      num: 3, nom: 'Affaissement', type: 'Terrain', portee: 3, coutPM: 3, cooldown: 2,
      description: 'Descend une case d\'un niveau Z. Les unités dessus prennent des dégâts de chute.',
    },
    {
      num: 4, nom: 'Fossé', type: 'Terrain/Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Creuse une case en dessous du sol (Z-1), créant un piège. Toute unité marchant dessus tombe et prend des dégâts.',
    },
    {
      num: 5, nom: 'Mur de Terre', type: 'Terrain', portee: 4, coutPM: 4, cooldown: 3,
      description: 'Fait monter une colonne de Sol à hauteur Z+3 instantanément.',
    },
    {
      num: 6, nom: 'Tunnel', type: 'Déplacement/Utilitaire', portee: 6, coutPM: 5, cooldown: 4,
      description: 'Crée un tunnel entre deux cases à la même hauteur. Le lanceur et ses alliés peuvent le traverser invisiblement.',
    },
    {
      num: 7, nom: 'Sismographe', type: 'Utilitaire', portee: 8, coutPM: 4, cooldown: 4,
      description: 'Révèle la position de toutes les unités sur cases Sol dans un rayon de 8, même invisibles ou dans des tunnels ennemis.',
    },
    {
      num: 8, nom: 'Plateau', type: 'Terrain/Buff', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Monte une zone 3×3 d\'un niveau Z simultanément. Crée une plateforme surélevée avec toutes les unités dessus.',
    },
    {
      num: 9, nom: 'Avalanche de Terre', type: 'Dégâts/Terrain', portee: 6, coutPM: 8, cooldown: 6,
      description: 'Descend d\'un niveau Z toutes les cases dans une ligne de 6. Les unités et cubes tombants infligent des dégâts en chaîne.',
    },
    {
      num: 10, nom: 'ULTIME — Séisme', type: 'Terrain/Dégâts', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Toute la carte subit une secousse : chaque case a 50% de chance de monter ou descendre d\'1 Z aléatoirement. Toutes les unités ennemies sont renversées et prennent des dégâts.',
    },
  ],
};

// ============================================================
//  7. ROCHE
// ============================================================
const ROCHE: ElementKit = {
  element: 'Roche',
  motCle: 'Fortification · Colonnes · Projectiles lourds',
  identiteGameplay:
    "La Roche bâtit des forteresses permanentes et lance des projectiles massifs. Ses structures sont les plus durables du jeu. Ses colonnes bloquent des lignes de tir entières ou servent de couverture. Son ultime modifie définitivement la topographie de la carte.",
  passifs: [
    {
      nom: 'Armure Minérale',
      description:
        'Les cases Roche créées par le lanceur ont des PV doubles et donnent +15% d\'armure aux unités alliées dessus.',
    },
    {
      nom: 'Instabilité',
      description:
        'Chaque fois qu\'une case Roche (alliée ou ennemie) est détruite dans un rayon de 5, le lanceur gagne 1 stack (max 5, +8% dégâts par stack).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Projection Rocheuse', type: 'Dégâts', portee: 7, coutPM: 2, cooldown: 1,
      description: 'Lance un rocher sur une cible. Inflige des dégâts et recule la cible d\'1 case.',
    },
    {
      num: 2, nom: 'Colonne', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Fait monter une case Roche de Z+2 instantanément (une colonne).',
    },
    {
      num: 3, nom: 'Bouclier de Pierre', type: 'Buff', portee: 2, coutPM: 3, cooldown: 3,
      description: 'Donne à une unité alliée un bouclier absorbant des dégâts = 2× le nombre de stacks Instabilité actuels.',
    },
    {
      num: 4, nom: 'Éboulis', type: 'Dégâts/Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Fait tomber le cube Z le plus haut d\'une colonne Roche existante, infligeant des dégâts de zone à la case en dessous.',
    },
    {
      num: 5, nom: 'Fortification', type: 'Terrain/Buff', portee: 3, coutPM: 5, cooldown: 4,
      description: 'Renforce une case existante (quelle que soit sa nature) en case Roche blindée : PV×3, inamovible.',
    },
    {
      num: 6, nom: 'Catapulte', type: 'Dégâts', portee: 8, coutPM: 5, cooldown: 4,
      description: 'Lance un cube Roche existant (en le détruisant) sur une case cible. Dégâts massifs + effet splash sur 1 case.',
    },
    {
      num: 7, nom: 'Labyrinthe', type: 'Terrain', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Crée un mur de Roche en L sur 5 cases, formant un couloir de piège.',
    },
    {
      num: 8, nom: 'Tremblement Localisé', type: 'Dégâts/Terrain', portee: 4, coutPM: 7, cooldown: 5,
      description: 'Détruit tous les cubes Roche dans un rayon de 3 simultanément. Chaque destruction inflige des dégâts de zone aux unités adjacentes.',
    },
    {
      num: 9, nom: 'Carrière', type: 'Terrain/Invocation', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Transforme une zone 2×2 en carrière : chaque tour, 1 case Roche gratuite est créée dans la zone.',
    },
    {
      num: 10, nom: 'ULTIME — Formation Rocheuse', type: 'Terrain', portee: 10, coutPM: 15, cooldown: 10,
      description: 'Zone 5×5 : toutes les cases deviennent Roche à leur hauteur actuelle +2. Les unités coincées reçoivent des dégâts massifs. Cette modification est PERMANENTE (ne disparaît pas).',
    },
  ],
};

// ============================================================
//  8. VENT
// ============================================================
const VENT: ElementKit = {
  element: 'Vent',
  motCle: 'Mobilité · Pression · Verticalité',
  identiteGameplay:
    "Le Vent maîtrise la dimension verticale et la mobilité. Il propulse des alliés vers des hauteurs inatteignables, crée des courants qui transportent les unités malgré elles, et utilise les différences de Z comme une arme. Chaque écart de hauteur est une opportunité.",
  passifs: [
    {
      nom: 'Légèreté',
      description:
        'Les alliés Vent ignorent les coûts PM supplémentaires liés aux déplacements verticaux (monter/descendre d\'un Z ne coûte pas de PM supplémentaire).',
    },
    {
      nom: 'Courant Ascendant',
      description:
        'Après chaque sort de déplacement ou de poussée, le lanceur gagne +1 PM pour ce tour (max 1 fois par tour).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Rafale', type: 'Dégâts/Contrôle', portee: 6, coutPM: 2, cooldown: 1,
      description: 'Souffle linéaire sur 6 cases. Pousse toutes les unités touchées d\'1 case dans la direction.',
    },
    {
      num: 2, nom: 'Propulsion', type: 'Déplacement/Buff', portee: 4, coutPM: 2, cooldown: 2,
      description: 'Propulse une unité alliée de 3 cases dans la direction choisie, ignorant les obstacles de faible hauteur (Z+1).',
    },
    {
      num: 3, nom: 'Vortex', type: 'Contrôle', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Mini-tourbillon pendant 2 tours. Tire toutes les unités adjacentes d\'1 case vers le centre chaque tour.',
    },
    {
      num: 4, nom: 'Case Aérienne', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 3,
      description: 'Crée une case Vent flottante à Z+1 d\'une case existante. Praticable uniquement par les unités volantes ou Vent.',
    },
    {
      num: 5, nom: 'Ascension', type: 'Déplacement/Utilitaire', portee: 3, coutPM: 4, cooldown: 3,
      description: 'Téléporte le lanceur à la case Z+2 au-dessus de sa position actuelle (crée une case Vent si nécessaire).',
    },
    {
      num: 6, nom: 'Cyclone', type: 'Dégâts/Contrôle', portee: 5, coutPM: 6, cooldown: 4,
      description: 'Cyclone de 3 cases de diamètre. Toutes les unités dans la zone sont projetées vers le bord extérieur (push de 2 cases).',
    },
    {
      num: 7, nom: 'Courant Dirigé', type: 'Terrain/Buff', portee: 7, coutPM: 5, cooldown: 4,
      description: 'Crée une ligne de 6 cases Vent. Les unités alliées dessus sont transportées automatiquement dans la direction du courant sans coût PM.',
    },
    {
      num: 8, nom: 'Bourrasque Verticale', type: 'Dégâts/Terrain', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Pousse toutes les unités dans un rayon de 3 vers le haut (Z+2). Si elles ne peuvent pas monter, elles tombent et prennent des dégâts de chute.',
    },
    {
      num: 9, nom: 'Couloir de Vent', type: 'Contrôle', portee: 8, coutPM: 8, cooldown: 6,
      description: 'Crée un couloir de vent de 8 cases. Toute unité entrant dans le couloir est automatiquement transportée jusqu\'au bout (alliés et ennemis).',
    },
    {
      num: 10, nom: 'ULTIME — Tempête Continentale', type: 'Dégâts/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 3 tours, chaque unité est déplacée d\'1 case dans une direction aléatoire à la fin de chaque tour. Les unités Vent choisissent leur direction au lieu d\'être aléatoires.',
    },
  ],
};

// ============================================================
//  9. DRAGON
// ============================================================
const DRAGON: ElementKit = {
  element: 'Dragon',
  motCle: 'Puissance brute · Zone massive · Amplification draconique',
  identiteGameplay:
    "Le Dragon est le grand destructeur. Ses sorts couvrent les plus grandes zones du jeu et ses dégâts bruts sont les plus élevés. En contrepartie : coûts PM élevés, cooldowns longs. Il amplifie exponentiellement sur les cases Dragon — y rester est une nécessité stratégique.",
  passifs: [
    {
      nom: 'Présence Draconique',
      description:
        'Toutes les unités ennemies dans un rayon de 3 subissent -10% d\'armure. Les cases Dragon dans ce rayon portent ce malus à -20%.',
    },
    {
      nom: 'Résonance des Écailles',
      description:
        'Chaque case Dragon dans un rayon de 4 augmente les dégâts du lanceur de +10% (max 5 cases = +50%).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Morsure', type: 'Dégâts', portee: 2, coutPM: 3, cooldown: 1,
      description: 'Attaque de mêlée puissante. Dégâts doublés si le lanceur est sur une case Dragon.',
    },
    {
      num: 2, nom: 'Souffle Élémentaire', type: 'Dégâts', portee: 6, coutPM: 4, cooldown: 2,
      description: 'Cône de 3 cases de large sur 6 de long. Type élémentaire selon le sous-type du Dragon (Feu, Glace, Electrique…)',
    },
    {
      num: 3, nom: 'Écailles', type: 'Buff', portee: 1, coutPM: 3, cooldown: 3,
      description: 'Le lanceur gagne un bouclier d\'écailles pendant 3 tours (absorbe des dégâts selon la Résonance des Écailles actuelle).',
    },
    {
      num: 4, nom: 'Frappe des Griffes', type: 'Dégâts/Contrôle', portee: 3, coutPM: 5, cooldown: 3,
      description: 'Frappe massive qui détruit le cube Z+1 de la case cible et projette l\'unité de 2 cases.',
    },
    {
      num: 5, nom: 'Rugissement', type: 'Contrôle', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Zone rayon 4 : toutes les unités ennemies reculent d\'1 case (peur) et perdent leur prochain sort.',
    },
    {
      num: 6, nom: 'Vol Draconique', type: 'Déplacement/Dégâts', portee: 8, coutPM: 5, cooldown: 4,
      description: 'Le lanceur vole jusqu\'à une case distante (ignore la topographie). L\'atterrissage inflige des dégâts de zone sur les 4 cases adjacentes.',
    },
    {
      num: 7, nom: 'Écailles Partagées', type: 'Buff/Terrain', portee: 4, coutPM: 6, cooldown: 5,
      description: 'Transforme 3 cases adjacentes en cases Dragon. Les unités alliées dessus rendent 30% des dégâts reçus en retour.',
    },
    {
      num: 8, nom: 'Destruction Massive', type: 'Dégâts/Terrain', portee: 6, coutPM: 8, cooldown: 6,
      description: 'Frappe une zone 3×3 depuis le dessus. Détruit tous les cubes Z+1 et Z+2 de chaque case. Dégâts massifs sur toutes les unités.',
    },
    {
      num: 9, nom: 'Fureur Ancienne', type: 'Buff/Dégâts', portee: 1, coutPM: 10, cooldown: 7,
      description: 'Pendant 3 tours : dégâts ×2, immunité aux contrôles, zone de Résonance portée à 8 cases. À la fin des 3 tours : explosion de zone autour du lanceur.',
    },
    {
      num: 10, nom: 'ULTIME — Éveil du Prédateur', type: 'Terrain/Dégâts', portee: 10, coutPM: 15, cooldown: 10,
      description: 'Toutes les cases dans un rayon de 6 deviennent Dragon. Pendant 5 tours, les sorts coûtent 0 PM si le lanceur est sur une case Dragon. À la fin de chaque tour, explosions draconiques sur toutes les cases Dragon.',
    },
  ],
};

// ============================================================
//  10. INSECTE
// ============================================================
const INSECTE: ElementKit = {
  element: 'Insecte',
  motCle: 'Essaim · Escalade · Corrosion',
  identiteGameplay:
    "L'Insecte est partout à la fois. Il invoque des essaims qui subissent les effets de terrain à sa place, grimpe n'importe quelle hauteur sans coût, et ronge les cubes ennemis progressivement. Il ne confronte jamais directement — il submerge et contourne.",
  passifs: [
    {
      nom: 'Escalade Naturelle',
      description:
        'Le lanceur et ses alliés Insecte ignorent les coûts PM liés aux différences de hauteur. Monter ou descendre des cubes ne coûte pas de PM supplémentaire.',
    },
    {
      nom: 'Exosquelette Actif',
      description:
        'Chaque sort Insecte lancé crée un drone-essaim invisible sur une case aléatoire dans un rayon de 3. Les drones révèlent leur zone et peuvent détoner pour des dégâts mineurs.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Piqûre', type: 'Dégâts', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Attaque rapide. Si la cible est sur une case Insecte, elle est empoisonnée (dégâts progressifs pendant 3 tours).',
    },
    {
      num: 2, nom: 'Nid', type: 'Terrain/Invocation', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Crée une case Nid. Chaque tour, invoque 1 drone-essaim sur la case. Les drones gênent les ennemis (portée de vision réduite de 1).',
    },
    {
      num: 3, nom: 'Acide', type: 'Terrain/Dégâts', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Sécrète de l\'acide sur une case. Le type de la case descend d\'1 solidité (Roche→Terre→Vide). Prend 1 tour pour chaque couche.',
    },
    {
      num: 4, nom: 'Essaim Protecteur', type: 'Buff', portee: 3, coutPM: 4, cooldown: 3,
      description: 'Entoure une unité alliée d\'un essaim pendant 3 tours. Toute unité attaquant au corps à corps reçoit des dégâts de riposte.',
    },
    {
      num: 5, nom: 'Infestation', type: 'Contrôle/Terrain', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Infeste une case ennemie. Toute unité ennemie restant dessus plus de 2 tours consécutifs est immobilisée 2 tours par les parasites.',
    },
    {
      num: 6, nom: 'Colonie Mobile', type: 'Invocation/Déplacement', portee: 3, coutPM: 5, cooldown: 4,
      description: 'Crée une colonie de 3 unités-insectes basiques qui déferlent dans une direction et attaquent toutes les unités sur leur chemin.',
    },
    {
      num: 7, nom: 'Mue', type: 'Buff/Utilitaire', portee: 1, coutPM: 6, cooldown: 5,
      description: 'Pendant 2 tours : invisible, ignore tous les effets de terrain, vitesse de déplacement doublée.',
    },
    {
      num: 8, nom: 'Reine des Essaims', type: 'Invocation', portee: 4, coutPM: 8, cooldown: 6,
      description: 'Invoque une Reine sur une case Nid. Unité autonome (PV moyens) qui crée 1 drone par tour et attaque les ennemis proches.',
    },
    {
      num: 9, nom: 'Corrosion Massive', type: 'Terrain/Dégâts', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Zone 3×3 : toutes les cases descendent d\'1 solidité. Toutes les unités ennemies prennent des dégâts et sont ralenties.',
    },
    {
      num: 10, nom: 'ULTIME — Apocalypse des Nuées', type: 'Invocation', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 4 tours, au début de chaque tour, un essaim massif déferle depuis un bord aléatoire de la carte sur 4 cases de large. Les unités touchées perdent 20% de leurs PV max et sont ralenties.',
    },
  ],
};

// ============================================================
//  11. PSY
// ============================================================
const PSY: ElementKit = {
  element: 'Psy',
  motCle: 'Télékinésie · Illusion · Manipulation spatiale',
  identiteGameplay:
    "Le Psy ne combat pas le terrain — il le plie à sa volonté. Il déplace des cubes entiers pour remodeler le champ de bataille en temps réel, swap les unités, crée de faux cubes pour tromper les ennemis. C'est l'élément le plus complexe à maîtriser et le plus imprévisible à affronter.",
  passifs: [
    {
      nom: 'Télépathie',
      description:
        'Le lanceur voit à travers les murs et cases opaques dans un rayon de 5. Il connaît aussi les PV et PM actuels de toutes les unités dans ce rayon.',
    },
    {
      nom: 'Résonance Mentale',
      description:
        '30% de chance que chaque sort Psy affecte aussi une unité aléatoire dans un rayon de 3 de la cible principale (effets réduits de 50%).',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Pression Mentale', type: 'Dégâts', portee: 6, coutPM: 2, cooldown: 1,
      description: 'Attaque psychique pure (ignore l\'armure physique). Dégâts modérés.',
    },
    {
      num: 2, nom: 'Télékinésie', type: 'Terrain/Contrôle', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Déplace un cube d\'1 case dans n\'importe quelle direction. Les unités dessus se déplacent avec.',
    },
    {
      num: 3, nom: 'Swap', type: 'Contrôle/Utilitaire', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Échange la position de deux unités, ou d\'une unité et d\'une case vide.',
    },
    {
      num: 4, nom: 'Illusion', type: 'Terrain/Utilitaire', portee: 5, coutPM: 3, cooldown: 3,
      description: 'Crée un faux cube qui apparaît réel. Disparaît quand une unité ennemie marche dessus — et celle-ci tombe dans le vide en dessous.',
    },
    {
      num: 5, nom: 'Cage Psychique', type: 'Contrôle', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Crée une cage invisible autour d\'une unité. Elle peut se déplacer mais ne peut pas dépasser un rayon de 3 cases. Dure 3 tours.',
    },
    {
      num: 6, nom: 'Extraction Mentale', type: 'Contrôle/Utilitaire', portee: 6, coutPM: 6, cooldown: 4,
      description: 'Vole le sort le plus récemment utilisé par une unité ennemie. Le lanceur peut l\'utiliser une fois (adapté à son élément).',
    },
    {
      num: 7, nom: 'Domination', type: 'Contrôle', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Prend le contrôle d\'une unité ennemie pendant 2 tours. Elle agit selon les ordres du lanceur.',
    },
    {
      num: 8, nom: 'Reconstruction', type: 'Terrain', portee: 5, coutPM: 7, cooldown: 5,
      description: 'Téléporte jusqu\'à 4 cubes d\'un endroit à un autre simultanément. Permet de créer des structures complexes en un seul tour.',
    },
    {
      num: 9, nom: 'Confusion Massive', type: 'Contrôle', portee: 6, coutPM: 8, cooldown: 6,
      description: 'Toutes les unités ennemies dans un rayon de 4 voient leur boussole inversée pendant 3 tours (gauche=droite, avant=arrière).',
    },
    {
      num: 10, nom: 'ULTIME — Réalité Alternative', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 3 tours : le lanceur peut déplacer 2 cubes par tour gratuitement, toutes les illusions durent le double. À la fin des 3 tours : toutes les unités ennemies dans un rayon de 6 sont téléportées aléatoirement dans cette zone.',
    },
  ],
};

// ============================================================
//  12. TÉNÈBRES
// ============================================================
const TENEBRES: ElementKit = {
  element: 'Ténèbres',
  motCle: 'Dissimulation · Drain · Peur',
  identiteGameplay:
    "Les Ténèbres jouent sur l'information — ce que les ennemis ne voient pas les tue. Le joueur crée des zones d'ombre qui donnent l'avantage à ses alliés et drainent les ressources ennemies (PM, PV, sorts). L'invisibilité est un outil tactique central, pas un gadget.",
  passifs: [
    {
      nom: 'Maître des Ombres',
      description:
        'Dans les cases Ténèbres, le lanceur et ses alliés gagnent +2 PM et sont invisibles pour les ennemis à plus de 3 cases de distance.',
    },
    {
      nom: 'Drain Naturel',
      description:
        'Chaque fois que le lanceur inflige des dégâts à une unité dans une zone d\'ombre, il récupère 30% de ces dégâts en PM.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Frappe des Ombres', type: 'Dégâts', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Dégâts doublés si le lanceur est invisible ou dans une zone d\'ombre.',
    },
    {
      num: 2, nom: 'Voile d\'Ombre', type: 'Terrain', portee: 4, coutPM: 2, cooldown: 2,
      description: 'Crée une zone 3×3 de cases Ténèbres pendant 4 tours. Réduit la vision à 2 cases pour les non-Ténèbres.',
    },
    {
      num: 3, nom: 'Pas dans l\'Ombre', type: 'Déplacement', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Téléporte le lanceur dans n\'importe quelle case Ténèbres dans le rayon. Arrive invisible pendant 1 tour.',
    },
    {
      num: 4, nom: 'Drain de Mana', type: 'Contrôle/Utilitaire', portee: 5, coutPM: 3, cooldown: 3,
      description: 'Vole 3 PM à la cible. Ces PM sont transférés au lanceur.',
    },
    {
      num: 5, nom: 'Terreur', type: 'Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'La cible fuit de 3 cases dans la direction opposée au lanceur. Pendant 2 tours, les unités apeurées ne peuvent pas attaquer.',
    },
    {
      num: 6, nom: 'Corruption', type: 'Terrain/Contrôle', portee: 4, coutPM: 5, cooldown: 4,
      description: 'Corrompt une case ennemie en case Ténèbres. Toute unité ennemie qui y entre perd 2 PM par tour.',
    },
    {
      num: 7, nom: 'Absorption', type: 'Dégâts/Soin', portee: 3, coutPM: 6, cooldown: 5,
      description: 'Absorbe l\'énergie vitale d\'une unité ennemie : soigne le lanceur pour 40% des PV max de la cible, qui perd ces PV.',
    },
    {
      num: 8, nom: 'Armée Fantôme', type: 'Invocation', portee: 4, coutPM: 7, cooldown: 5,
      description: 'Invoque 2 ombres-clones du lanceur dans des cases Ténèbres adjacentes. Les clones imitent le prochain sort du lanceur.',
    },
    {
      num: 9, nom: 'Nuit Absolue', type: 'Terrain', portee: 6, coutPM: 8, cooldown: 6,
      description: 'Zone 5×5 de Ténèbres profondes pendant 4 tours. Dans cette zone : aucune unité non-Ténèbres ne peut lancer de sorts Lumière, Fée ou Electrique.',
    },
    {
      num: 10, nom: 'ULTIME — Éclipse', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 4 tours, toutes les cases non-Feu/Electrique/Fée deviennent Ténèbres. Toutes les unités non-Ténèbres perdent 3 PM par tour. Le lanceur regagne 2 PM par tour.',
    },
  ],
};

// ============================================================
//  13. FÉE
// ============================================================
const FEE: ElementKit = {
  element: 'Fée',
  motCle: 'Enchantements · Protection · Lumière sacrée',
  identiteGameplay:
    "La Fée est le pilier de son équipe. Elle ne détruit pas le terrain — elle le bénit. Ses cases offrent des bonus puissants à ses alliés et pénalisent les ennemis des ténèbres. Elle est la seule à créer de vraies zones de régénération en combat actif.",
  passifs: [
    {
      nom: 'Bénédiction Persistante',
      description:
        'Les cases Fée créées par le lanceur persistent 2 tours de plus que la normale. Les alliés dessus régénèrent 3% PV max par tour.',
    },
    {
      nom: 'Lumière Protectrice',
      description:
        'Les alliés dans un rayon de 3 du lanceur gagnent +10% de résistance à Ténèbres, Poison et Spectre.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Rayon de Lumière', type: 'Dégâts', portee: 6, coutPM: 2, cooldown: 1,
      description: 'Projectile lumineux. Inflige des dégâts doublés aux unités dans des cases Ténèbres.',
    },
    {
      num: 2, nom: 'Bénédiction', type: 'Terrain/Buff', portee: 4, coutPM: 2, cooldown: 2,
      description: 'Transforme une case en case Fée. Les alliés dessus gagnent +15% de dégâts pendant 3 tours.',
    },
    {
      num: 3, nom: 'Barrière de Lumière', type: 'Buff/Contrôle', portee: 4, coutPM: 3, cooldown: 3,
      description: 'Mur de lumière de 3 cases qui bloque les projectiles et sorts à distance ennemis. Ne bloque pas le déplacement.',
    },
    {
      num: 4, nom: 'Aura de Soin', type: 'Soin', portee: 3, coutPM: 4, cooldown: 3,
      description: 'Zone de rayon 2 pendant 2 tours. Toutes les unités alliées régénèrent 10% PV max par tour.',
    },
    {
      num: 5, nom: 'Enchantement de Case', type: 'Terrain/Buff', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Surcharge une case alliée existante. Les unités dessus gagnent l\'effet de la case ×2 et ne dépensent pas de PM pour y rester.',
    },
    {
      num: 6, nom: 'Vague Sacrée', type: 'Dégâts/Contrôle', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Onde de choc lumineuse de rayon 3 : toutes les unités ennemies sont repoussées d\'1 case et aveuglées 1 tour.',
    },
    {
      num: 7, nom: 'Sanctuaire', type: 'Terrain/Buff', portee: 3, coutPM: 6, cooldown: 5,
      description: 'Zone 3×3 de cases Fée pendant 4 tours. Dans cette zone, les unités alliées ne peuvent pas être ciblées par des sorts de contrôle.',
    },
    {
      num: 8, nom: 'Résurrection Partielle', type: 'Soin/Utilitaire', portee: 4, coutPM: 8, cooldown: 6,
      description: 'Ramène une unité alliée tombée à 30% de ses PV max. Une seule fois par unité par partie.',
    },
    {
      num: 9, nom: 'Purification', type: 'Utilitaire', portee: 6, coutPM: 6, cooldown: 5,
      description: 'Zone 4×4 : neutralise toutes les cases Ténèbres, Poison et Spectre (les transforme en cases Fée).',
    },
    {
      num: 10, nom: 'ULTIME — Miracle', type: 'Soin/Buff/Terrain', portee: 8, coutPM: 15, cooldown: 10,
      description: 'Toutes les cases Fée dans un rayon de 8 explosent en lumière : soignent tous les alliés de 40% PV max, +30% de stats pendant 3 tours. Les unités ennemies dans des cases Fée sont aveuglées 2 tours.',
    },
  ],
};

// ============================================================
//  14. POISON
// ============================================================
const POISON: ElementKit = {
  element: 'Poison',
  motCle: 'Contamination · Accumulation · Persistance',
  identiteGameplay:
    "Le Poison est patient. Il gagne par attrition — ses cases contaminent progressivement tout le terrain, les stacks s'accumulent jusqu'à un seuil critique, ses effets persistent longtemps après les sorts. Un joueur Poison bien joué rend le terrain entier hostile aux ennemis après 10 tours.",
  passifs: [
    {
      nom: 'Adaptation',
      description:
        'Le lanceur et ses alliés Poison sont immunisés aux dégâts des cases Poison. De plus, rester sur une case Poison leur donne +5% de dégâts (max 30%).',
    },
    {
      nom: 'Accumulation Toxique',
      description:
        'Les stacks de Poison sur un ennemi ne disparaissent jamais naturellement — ils ne peuvent être soignés que par des sorts de Purification.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Crachat Toxique', type: 'Dégâts', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Inflige des dégâts et applique 1 stack de Poison (dégâts progressifs par tour par stack).',
    },
    {
      num: 2, nom: 'Flaques Toxiques', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Crée une case Poison. Toute unité non-Poison la traversant gagne 1 stack.',
    },
    {
      num: 3, nom: 'Brouillard Corrosif', type: 'Terrain/Contrôle', portee: 5, coutPM: 3, cooldown: 3,
      description: 'Zone 3×3 de brume toxique pendant 3 tours. Réduit la vision et inflige 1 stack Poison par tour à toute unité dedans.',
    },
    {
      num: 4, nom: 'Injection', type: 'Contrôle', portee: 4, coutPM: 4, cooldown: 3,
      description: 'Cible une unité avec ≥3 stacks Poison. Chaque stack se convertit en 1 tour d\'immobilisation.',
    },
    {
      num: 5, nom: 'Épidémie', type: 'Contrôle', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Transfère 2 stacks Poison de la cible vers chaque unité ennemie adjacente à elle.',
    },
    {
      num: 6, nom: 'Terrain Contaminé', type: 'Terrain', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Transforme 4 cases adjacentes en cases Poison d\'un coup. Si déjà Poison : deviennent "Poison Concentré" (2 stacks par contact).',
    },
    {
      num: 7, nom: 'Venin Paralytique', type: 'Dégâts/Contrôle', portee: 4, coutPM: 6, cooldown: 5,
      description: 'Si la cible a ≥5 stacks Poison : paralysie totale pendant 2 tours (ni déplacement ni attaque).',
    },
    {
      num: 8, nom: 'Corruption Organique', type: 'Terrain', portee: 4, coutPM: 7, cooldown: 5,
      description: 'Transforme une case Plante en Plante Corrompue : soigne les unités Poison et blesse les autres. Toute unité Plante la touchant gagne 3 stacks.',
    },
    {
      num: 9, nom: 'Nécrose', type: 'Dégâts', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Inflige des dégâts = 5× le nombre de stacks de Poison sur la cible. Les stacks restent intacts après.',
    },
    {
      num: 10, nom: 'ULTIME — Pandémie', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Toutes les cases non-Poison dans un rayon de 8 deviennent Poison. Toutes les unités ennemies gagnent 3 stacks immédiatement. Pendant 4 tours, +2 stacks Poison par tour sur chaque unité ennemie dans une case Poison.',
    },
  ],
};

// ============================================================
//  15. SPECTRE
// ============================================================
const SPECTRE: ElementKit = {
  element: 'Spectre',
  motCle: 'Dimension fantôme · Portails · Traversée',
  identiteGameplay:
    "Le Spectre n'est pas limité par la physique. Il traverse les murs, accède à une dimension fantôme parallèle, et réapparaît là où ses portails sont placés. Il remodèle la connectivité de la carte — une case 'bloquée' pour les autres est une autoroute pour lui.",
  passifs: [
    {
      nom: 'Incorporéité Partielle',
      description:
        'Le lanceur peut traverser les cubes d\'1 case d\'épaisseur (passer de l\'autre côté d\'un mur d\'1 cube) sans PM supplémentaire.',
    },
    {
      nom: 'Résidu Spectral',
      description:
        'Chaque case traversée via sorts ou traversée laisse une marque spectrale pendant 3 tours. Ces marques peuvent être activées comme portails d\'urgence.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Toucher Spectral', type: 'Dégâts', portee: 4, coutPM: 2, cooldown: 1,
      description: 'Attaque qui ignore les barrières physiques et l\'armure physique. Frappe directement les PV.',
    },
    {
      num: 2, nom: 'Passe-Muraille', type: 'Déplacement/Utilitaire', portee: 3, coutPM: 2, cooldown: 2,
      description: 'Le lanceur traverse jusqu\'à 3 cubes en ligne droite et réapparaît de l\'autre côté.',
    },
    {
      num: 3, nom: 'Portail', type: 'Terrain/Utilitaire', portee: 6, coutPM: 3, cooldown: 3,
      description: 'Crée 2 portails Spectre liés. Toute unité alliée entrant dans l\'un ressort de l\'autre instantanément.',
    },
    {
      num: 4, nom: 'Hantise', type: 'Contrôle', portee: 5, coutPM: 4, cooldown: 3,
      description: 'Hante une unité ennemie. Pendant 3 tours, le lanceur peut voir et attaquer cette unité peu importe sa position (portée illimitée sur elle uniquement).',
    },
    {
      num: 5, nom: 'Dimension Spectrale', type: 'Déplacement/Utilitaire', portee: 1, coutPM: 4, cooldown: 4,
      description: 'Le lanceur entre dans la dimension spectrale pendant 2 tours. Déplacement libre (ignore cubes et obstacles), mais ne peut pas attaquer ni être attaqué.',
    },
    {
      num: 6, nom: 'Armée des Morts', type: 'Invocation', portee: 4, coutPM: 6, cooldown: 5,
      description: 'Invoque 2 spectres basiques qui peuvent traverser les murs et attaquent les unités ennemies proches.',
    },
    {
      num: 7, nom: 'Fissure', type: 'Terrain/Contrôle', portee: 5, coutPM: 6, cooldown: 5,
      description: 'Crée une fissure spectrale de 5 cases. Toute unité ennemie traversant la fissure est téléportée dans la dimension spectrale pendant 1 tour.',
    },
    {
      num: 8, nom: 'Possession', type: 'Contrôle', portee: 4, coutPM: 8, cooldown: 6,
      description: 'Prend le contrôle d\'une unité ennemie pendant 1 tour complet (déplacement ET sorts sous contrôle du lanceur).',
    },
    {
      num: 9, nom: 'Nexus Spectral', type: 'Terrain/Utilitaire', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Crée 1 portail central + 3 portails satellites dans un rayon de 4. Les alliés téléportent entre les satellites via le hub central.',
    },
    {
      num: 10, nom: 'ULTIME — Voile de la Mort', type: 'Terrain/Contrôle', portee: -1, coutPM: 15, cooldown: 10,
      description: 'Pendant 4 tours : toutes les unités peuvent traverser les cubes d\'1 case. Les unités Spectre traversent jusqu\'à 3 cases d\'épaisseur. Les unités ennemies dans des cases Spectre sont entraînées dans la dimension fantôme 1 tour sur 2.',
    },
  ],
};

// ============================================================
//  16. GRAVITÉ
// ============================================================
const GRAVITE: ElementKit = {
  element: 'Gravité',
  motCle: 'Poids · Chute · Déformation physique',
  identiteGameplay:
    "La Gravité transforme la verticalité en arme létale. Des zones de haute gravité ralentissent et écrasent, des zones de basse gravité permettent des sauts impossibles. Chaque différence de Z devient un risque de mort. Le joueur Gravité force les ennemis à combattre là où la physique elle-même est contre eux.",
  passifs: [
    {
      nom: 'Calcul des Trajectoires',
      description:
        'Le lanceur voit automatiquement les dégâts de chute potentiels de toutes les unités (surbrillance). Il peut déclencher des chutes depuis 2 cases de plus que la normale.',
    },
    {
      nom: 'Masse Gravitationnelle',
      description:
        'Chaque fois qu\'une unité prend des dégâts de chute dans un rayon de 5 du lanceur, il récupère 10% de ces dégâts en PM.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Pression', type: 'Dégâts/Contrôle', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Applique une gravité intense sur une unité. Elle perd 1 PM (minimum 0) ce tour.',
    },
    {
      num: 2, nom: 'Attraction', type: 'Contrôle', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Tire une unité d\'1 case vers le lanceur. Si elle atterrit dans le vide, elle chute.',
    },
    {
      num: 3, nom: 'Répulsion', type: 'Contrôle', portee: 5, coutPM: 3, cooldown: 2,
      description: 'Pousse une unité de 2 cases dans la direction opposée. Si elle passe par-dessus un bord, elle chute.',
    },
    {
      num: 4, nom: 'Haute Gravité', type: 'Terrain/Contrôle', portee: 4, coutPM: 4, cooldown: 3,
      description: 'Case avec gravité ×3 pendant 4 tours. Toute unité dedans ne peut se déplacer que d\'1 case par tour.',
    },
    {
      num: 5, nom: 'Basse Gravité', type: 'Terrain/Buff', portee: 4, coutPM: 4, cooldown: 3,
      description: 'Case avec gravité ×0.3 pendant 4 tours. Les unités alliées dedans peuvent sauter jusqu\'à Z+3 en une seule action.',
    },
    {
      num: 6, nom: 'Écrasement', type: 'Dégâts', portee: 6, coutPM: 6, cooldown: 4,
      description: 'Frappe une unité depuis au-dessus. Dégâts × (Z lanceur − Z cible + 1). Minimum ×1, maximum ×5.',
    },
    {
      num: 7, nom: 'Distorsion', type: 'Terrain', portee: 5, coutPM: 6, cooldown: 5,
      description: 'Zone de gravité aléatoire 3×3. Chaque tour, la direction de gravité change aléatoirement (peut pousser latéralement ou vers le haut).',
    },
    {
      num: 8, nom: 'Singularité', type: 'Contrôle', portee: 5, coutPM: 8, cooldown: 5,
      description: 'Mini trou noir pendant 2 tours. Toutes les unités dans un rayon de 3 sont attirées d\'1 case par tour. Si 2 unités se retrouvent sur la même case : dégâts massifs de collision.',
    },
    {
      num: 9, nom: 'Inversion', type: 'Terrain/Contrôle', portee: 4, coutPM: 8, cooldown: 6,
      description: 'Inverse la gravité dans une zone 3×3 pendant 3 tours. Les cubes "tombent" vers le haut, les unités au sol montent vers le "plafond".',
    },
    {
      num: 10, nom: 'ULTIME — Collapse Gravitationnel', type: 'Dégâts/Terrain', portee: 8, coutPM: 15, cooldown: 10,
      description: 'Zone rayon 5 : toutes les unités ennemies sont attirées vers le centre (même case si possible) → dégâts de collision massifs. Tous les cubes descendent d\'1 Z. Puis onde de choc qui repousse tout vers les bords → dégâts de chute supplémentaires.',
    },
  ],
};

// ============================================================
//  17. COMBAT
// ============================================================
const COMBAT: ElementKit = {
  element: 'Combat',
  motCle: 'Maîtrise martiale · Corps à corps · Cubes comme armes',
  identiteGameplay:
    "Le Combat est l'art de se battre avec tout ce qui est à portée — y compris les cubes eux-mêmes. C'est le seul élément qui peut utiliser les cubes comme armes de corps à corps. Ses contre-attaques sont les plus puissantes du jeu. Il est dangereux partout mais léthal dans les espaces confinés.",
  passifs: [
    {
      nom: 'Maître de la Guerre',
      description:
        'Chaque kill effectué par le lanceur ou ses alliés Combat dans un rayon de 3 donne 1 stack (max 10 : +3% dégâts mêlée et -1 PM de coût par stack, min 0).',
    },
    {
      nom: 'Lecture de l\'Adversaire',
      description:
        'Le lanceur voit toujours les sorts en préparation des unités ennemies dans un rayon de 4, même si elles sont invisibles.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Frappe Directe', type: 'Dégâts', portee: 1, coutPM: 1, cooldown: 0,
      description: 'Attaque de mêlée basique. Peut être utilisée chaque tour sans CD.',
    },
    {
      num: 2, nom: 'Brise-Bouclier', type: 'Dégâts/Utilitaire', portee: 1, coutPM: 2, cooldown: 2,
      description: 'Frappe qui détruit boucliers et barrières de l\'ennemi. Si aucun bouclier : dégâts doublés.',
    },
    {
      num: 3, nom: 'Parade', type: 'Buff/Contrôle', portee: 1, coutPM: 2, cooldown: 2,
      description: 'Se prépare à contrer. Si attaqué ce tour : contreattaque automatiquement avec 150% des dégâts reçus.',
    },
    {
      num: 4, nom: 'Lancer de Cube', type: 'Dégâts/Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Arrache le cube Z le plus haut de la case cible et le lance sur une unité distante de 3 cases. Dégâts selon le type du cube.',
    },
    {
      num: 5, nom: 'Charge', type: 'Déplacement/Dégâts', portee: 5, coutPM: 3, cooldown: 3,
      description: 'Fonce en ligne droite sur 5 cases jusqu\'à la première unité ennemie. Impact : projette l\'unité d\'1 case et la renverse 1 tour.',
    },
    {
      num: 6, nom: 'Tempête de Coups', type: 'Dégâts', portee: 1, coutPM: 5, cooldown: 4,
      description: '4 attaques rapides sur 1 unité cible ou 4 unités adjacentes différentes. Chaque attaque inflige 70% des dégâts normaux.',
    },
    {
      num: 7, nom: 'Submission', type: 'Contrôle', portee: 1, coutPM: 5, cooldown: 4,
      description: 'Saisit une unité ennemie adjacente. Pendant 2 tours : immobilisée, et le lanceur redirige 50% des dégâts reçus vers elle.',
    },
    {
      num: 8, nom: 'Destruction de Terrain', type: 'Terrain/Dégâts', portee: 2, coutPM: 6, cooldown: 4,
      description: 'Détruit jusqu\'à 3 cubes adjacents d\'un seul coup de poing. Chaque cube détruit inflige des dégâts de zone sur sa case.',
    },
    {
      num: 9, nom: 'Coup de Grâce', type: 'Dégâts', portee: 1, coutPM: 8, cooldown: 6,
      description: 'Dégâts ×3 si la cible est en dessous de 30% de PV. Sinon, dégâts ×1.5.',
    },
    {
      num: 10, nom: 'ULTIME — Berserker', type: 'Buff', portee: 1, coutPM: 12, cooldown: 10,
      description: 'Pendant 4 tours : immunité aux contrôles, +100% dégâts mêlée, +3 PM, et chaque attaque de mêlée déclenche automatiquement un Lancer de Cube sur la cible.',
    },
  ],
};

// ============================================================
//  18. NORMAL
// ============================================================
const NORMAL: ElementKit = {
  element: 'Normal',
  motCle: 'Fiabilité · Polyvalence · Aucune faiblesse',
  identiteGameplay:
    "Le Normal n'a pas de gimmick — c'est sa force. Ses sorts fonctionnent sur TOUT type de terrain sans malus, ses stats sont supérieures à coût PM équivalent, et il n'a aucune faiblesse élémentaire. Le joueur Normal gagne par une exécution parfaite et une lecture du jeu supérieure.",
  passifs: [
    {
      nom: 'Terrain Neutre',
      description:
        'Le lanceur et ses alliés Normal ne subissent aucun malus lié au type de case (pas de coût PM supplémentaire, pas de dégâts des cases hostiles).',
    },
    {
      nom: 'Adaptabilité',
      description:
        'Au début de chaque tour, si le lanceur est sur une case élémentaire, il copie la résistance de cet élément (30%) pendant ce tour.',
    },
  ],
  sorts: [
    {
      num: 1, nom: 'Frappe Brute', type: 'Dégâts', portee: 5, coutPM: 2, cooldown: 1,
      description: 'Dégâts physiques purs (ne peuvent pas être réduits par des résistances élémentaires).',
    },
    {
      num: 2, nom: 'Mur Neutre', type: 'Terrain', portee: 4, coutPM: 3, cooldown: 2,
      description: 'Crée un mur de 3 cases de type Normal (solide, sans effet élémentaire). Très résistant.',
    },
    {
      num: 3, nom: 'Course', type: 'Déplacement', portee: 5, coutPM: 2, cooldown: 2,
      description: 'Le lanceur gagne +3 PM ce tour uniquement.',
    },
    {
      num: 4, nom: 'Analyse', type: 'Utilitaire', portee: 6, coutPM: 2, cooldown: 3,
      description: 'Révèle les stats, sorts et cooldowns actuels d\'une unité ennemie pendant 4 tours.',
    },
    {
      num: 5, nom: 'Frappe de Précision', type: 'Dégâts', portee: 7, coutPM: 4, cooldown: 3,
      description: 'Projectile qui ignore toutes les barrières physiques et sorts de protection. Dégâts garantis.',
    },
    {
      num: 6, nom: 'Stabilité', type: 'Buff', portee: 3, coutPM: 4, cooldown: 4,
      description: 'L\'unité alliée ciblée devient immunisée aux déplacements forcés et aux effets de terrain pendant 3 tours.',
    },
    {
      num: 7, nom: 'Neutralisation', type: 'Terrain/Utilitaire', portee: 5, coutPM: 5, cooldown: 4,
      description: 'Transforme une case élémentaire ennemie en case Normal (neutre). Annule tous les effets de la case.',
    },
    {
      num: 8, nom: 'Assaut Coordonné', type: 'Buff/Utilitaire', portee: 5, coutPM: 5, cooldown: 5,
      description: 'Toutes les unités alliées dans un rayon de 4 peuvent effectuer une action de sort supplémentaire ce tour (1 fois par tour).',
    },
    {
      num: 9, nom: 'Frappe Définitive', type: 'Dégâts', portee: 5, coutPM: 8, cooldown: 6,
      description: 'Dégâts massifs. Les effets d\'Adaptabilité et résistances copiées sont doublés ce tour.',
    },
    {
      num: 10, nom: 'ULTIME — Suprématie Tactique', type: 'Buff', portee: -1, coutPM: 12, cooldown: 10,
      description: 'Pendant 4 tours : tous les alliés gagnent Terrain Neutre + Adaptabilité. Tous les sorts coûtent -3 PM. Les unités ennemies ne bénéficient d\'aucun bonus de type de case.',
    },
  ],
};

// ============================================================
//  EXPORT — Registre complet de tous les kits
// ============================================================
export const ELEMENT_KITS: Record<Element, ElementKit> = {
  Feu:       FEU,
  Eau:       EAU,
  Glace:     GLACE,
  Electrique: ELECTRIQUE,
  Plante:    PLANTE,
  Sol:       SOL,
  Roche:     ROCHE,
  Vent:      VENT,
  Dragon:    DRAGON,
  Insecte:   INSECTE,
  Psy:       PSY,
  Ténèbres:  TENEBRES,
  Fée:       FEE,
  Poison:    POISON,
  Spectre:   SPECTRE,
  Gravité:   GRAVITE,
  Combat:    COMBAT,
  Normal:    NORMAL,
};

export const ALL_KITS: ElementKit[] = (Object.keys(ELEMENT_KITS) as Element[]).map(k => ELEMENT_KITS[k]);
