// ============================================================
//  INTERACTIONS DE BLOCS
//  A) Stack : Block A + Block B posé dessus → résultat
//  B) Adjacence : Block A à côté de Block B → effet de bordure
// ============================================================

export type BlockType =
  | 'Acier' | 'Dragon' | 'Electrique' | 'Feu' | 'Insecte' | 'Plante'
  | 'Psy' | 'Sol' | 'Ténèbres' | 'Combat' | 'Eau' | 'Fée'
  | 'Glace' | 'Normal' | 'Poison' | 'Roche' | 'Spectre' | 'Vent'
  | 'Gravité' | 'Stellaire';

export type BlockState = 'Solide' | 'Liquide' | 'Air' | 'Portail' | 'Solide (gravité)';

// ── A. INTERACTIONS PAR EMPILEMENT ───────────────────────────
// Règle : le type posé sur la case est dominant sur celui déjà présent.
// Résultat = le nouveau type de case après remplacement.

export interface StackInteraction {
  base: BlockType;
  posed: BlockType;
  result: BlockType;
  etat: BlockState;
  conducteur: boolean;
  description: string;
  effetCombat: string;
}

export const STACK_INTERACTIONS: StackInteraction[] = [
  // ── ACIER comme base ──────────────────────────────────────
  { base: 'Acier', posed: 'Dragon',      result: 'Dragon',     etat: 'Solide', conducteur: false, description: "Écailles de dragon couvrent l'acier. Résiste à tout sauf Dragon, Glace et Fée.",                        effetCombat: "Unités Dragon dessus : +PV, +dégâts selon sous-type." },
  { base: 'Acier', posed: 'Electrique',  result: 'Electrique', etat: 'Solide', conducteur: true,  description: "Batterie : stocke et transmet l'énergie électrique.",                                                   effetCombat: "Unités Electrique consomment les charges pour amplifier leurs sorts." },
  { base: 'Acier', posed: 'Feu',         result: 'Feu',        etat: 'Solide', conducteur: false, description: "Forge ardente : source de lumière donnant la vision sur X cases.",                                      effetCombat: "Inflige des dégâts aux unités qui traversent. Se propage aux cases végétales adjacentes." },
  { base: 'Acier', posed: 'Insecte',     result: 'Insecte',    etat: 'Solide', conducteur: false, description: "Nid d'insectes arrimé à l'acier. Invoque périodiquement des insectes.",                                 effetCombat: "Comportement des insectes dépend du type du bloc en dessous." },
  { base: 'Acier', posed: 'Plante',      result: 'Plante',     etat: 'Solide', conducteur: false, description: "Végétation sur acier. Porte en bois — peut bloquer chemin au nexus.",                                   effetCombat: "Culture, camouflage, palissades naturelles. Seule case qui peut bloquer le nexus." },
  { base: 'Acier', posed: 'Psy',         result: 'Psy',        etat: 'Air',    conducteur: false, description: "Glyphe Psy au-dessus de l'acier. Portail de TP, piège mental, modification de PM.",                     effetCombat: "Effet selon le sort utilisé : portail / piège / drain PM." },
  { base: 'Acier', posed: 'Sol',         result: 'Sol',        etat: 'Solide (gravité)', conducteur: false, description: "Sol compacté sur acier. Accessible uniquement aux unités Sol via le sous-sol.",             effetCombat: "Connexion au réseau souterrain Sol." },
  { base: 'Acier', posed: 'Ténèbres',    result: 'Ténèbres',   etat: 'Air',    conducteur: false, description: "Zone d'ombre sur acier. Réduit vision et portée pour tous.",                                            effetCombat: "Augmente vision et portée des unités Ténèbres." },
  { base: 'Acier', posed: 'Combat',      result: 'Combat',     etat: 'Solide', conducteur: false, description: "Tatami de Combat. Bonus de mêlée, parade et contre-attaques.",                                          effetCombat: "Buff aux unités Combat dans la zone." },
  { base: 'Acier', posed: 'Eau',         result: 'Eau',        etat: 'Liquide',conducteur: true,  description: "Case d'Eau sur acier. Unités capables de nager s'y déplacent, les autres risquent de se noyer.",       effetCombat: "Après plusieurs tours sur l'eau sans capacité de nage : noyade." },
  { base: 'Acier', posed: 'Fée',         result: 'Fée',        etat: 'Air',    conducteur: false, description: "Poudre de Fée dans les airs. Unités Fée ne dépensent pas de PM dessus.",                               effetCombat: "Débloque des effets supplémentaires pour les sorts Fée." },
  { base: 'Acier', posed: 'Glace',       result: 'Glace',      etat: 'Solide', conducteur: false, description: "Surface gelée. Les unités glissent jusqu'à la fin de la zone.",                                         effetCombat: "Unités Glace contrôlent leurs mouvements et ne dépensent pas de PM dessus." },
  { base: 'Acier', posed: 'Normal',      result: 'Normal',     etat: 'Solide', conducteur: false, description: "Mur d'acier neutre. Réfléchit les projectiles.",                                                        effetCombat: "Pas de propriété élémentaire. Support pour autres constructions." },
  { base: 'Acier', posed: 'Poison',      result: 'Poison',     etat: 'Liquide',conducteur: false, description: "Liquide toxique sur acier. Dégâts sur la durée aux unités non-Poison.",                               effetCombat: "Buffs cumulables aux unités Poison." },
  { base: 'Acier', posed: 'Roche',       result: 'Roche',      etat: 'Solide', conducteur: false, description: "Couche rocheuse sur acier. Barricade — hauteur et solidité augmentées.",                               effetCombat: "Peut faire partie de montagnes ou tunnels réservés aux unités Roche." },
  { base: 'Acier', posed: 'Spectre',     result: 'Spectre',    etat: 'Portail',conducteur: false, description: "Barricade spectrale. Portail vers dimension spectrale.",                                                 effetCombat: "Seules certaines actions possibles dans la dimension spectrale." },
  { base: 'Acier', posed: 'Vent',        result: 'Vent',        etat: 'Air',    conducteur: false, description: "Courant de Vent stable. Case aérienne permettant d'ignorer certaines contraintes de hauteur.",         effetCombat: "Unités volantes ou agiles ignorent les contraintes de hauteur sur cette case." },

  // ── DRAGON comme base ─────────────────────────────────────
  { base: 'Dragon', posed: 'Acier',      result: 'Acier',      etat: 'Solide', conducteur: true,  description: "Acier draconique. Solide, constructible, conducteur.",                                                   effetCombat: "Base pour barricades, bâtiments ou tourelles selon les sorts." },
  { base: 'Dragon', posed: 'Dragon',     result: 'Dragon',     etat: 'Solide', conducteur: false, description: "Case Dragon pur. Ne subit que Dragon, Glace et Fée.",                                                   effetCombat: "Unités Dragon : +PV, +dégâts, +taille selon leur sous-type." },
  { base: 'Dragon', posed: 'Electrique', result: 'Electrique', etat: 'Solide', conducteur: true,  description: "Dragon électrifié. Stocke et amplifie l'énergie.",                                                      effetCombat: "Les dégâts de tous les Dragons dans le rayon augmentent." },
  { base: 'Dragon', posed: 'Feu',        result: 'Feu',        etat: 'Solide', conducteur: false, description: "Dragon de feu. Flamme plus chaude — personne n'applique de résistance.",                               effetCombat: "Spread sur les autres cases Dragon. Blesse tous types sauf Dragon." },
  { base: 'Dragon', posed: 'Glace',      result: 'Glace',      etat: 'Solide', conducteur: false, description: "Surface glacée sur Dragon. Glissement, contrôle différencié.",                                          effetCombat: "Unités Glace contrôlent leurs mouvements. Autres glissent." },
  { base: 'Dragon', posed: 'Eau',        result: 'Eau',        etat: 'Liquide',conducteur: true,  description: "Dragon inondé. Crée une case d'Eau navigable.",                                                         effetCombat: "Noyade possible pour unités ne sachant pas nager." },
  { base: 'Dragon', posed: 'Spectre',    result: 'Spectre',    etat: 'Portail',conducteur: false, description: "Portail spectral sur Dragon. Accès à la dimension spectrale.",                                          effetCombat: "Seules certaines actions possibles dans la dimension spectrale." },

  // ── ELECTRIQUE comme base ─────────────────────────────────
  { base: 'Electrique', posed: 'Electrique', result: 'Electrique', etat: 'Solide', conducteur: true,  description: "Batterie de charge. Relie et transmet les charges. Multiplicateur de puissance.",                  effetCombat: "Unités Electrique boostent leurs sorts en consommant les charges." },
  { base: 'Electrique', posed: 'Eau',         result: 'Eau',        etat: 'Liquide',conducteur: true,  description: "Électricité + Eau. Extrêmement dangereux pour les non-Electrique.",                               effetCombat: "Choc électrique automatique pour toute unité non-Electrique entrant dans l'eau." },
  { base: 'Electrique', posed: 'Dragon',      result: 'Dragon',     etat: 'Solide', conducteur: true,  description: "Écailles électrifiées. Dragon et Electrique se renforcent mutuellement.",                          effetCombat: "Les Élus Dragon et Electrique gagnent des synergies défensives." },

  // ── FEU comme base ────────────────────────────────────────
  { base: 'Feu', posed: 'Feu',     result: 'Feu',    etat: 'Solide', conducteur: false, description: "Feu concentré. Se propage naturellement aux cases voisines.",                                                   effetCombat: "Seule case qui spread naturellement. Dégâts à toute unité marchant dessus." },
  { base: 'Feu', posed: 'Eau',     result: 'Eau',    etat: 'Liquide',conducteur: true,  description: "Eau éteint le Feu. Crée une case d'Eau temporaire.",                                                             effetCombat: "Vapeur pendant 1 tour si les deux éléments sont actifs simultanément." },
  { base: 'Feu', posed: 'Glace',   result: 'Eau',    etat: 'Liquide',conducteur: false, description: "Feu + Glace = Eau (fonte).",                                                                                     effetCombat: "La Glace fond et laisse une case d'Eau. Puis le Feu s'éteint." },
  { base: 'Feu', posed: 'Roche',   result: 'Feu',    etat: 'Solide', conducteur: false, description: "Feu sur Roche. Peut créer une case de Magma si suffisamment intense.",                                           effetCombat: "Magma : dégâts x2, ralentit, ne s'éteint pas naturellement." },
  { base: 'Feu', posed: 'Plante',  result: 'Feu',    etat: 'Solide', conducteur: false, description: "Plante brûlée. La Plante est détruite et devient case Feu.",                                                     effetCombat: "La Plante est l'aliment du Feu — accélère sa propagation." },
  { base: 'Feu', posed: 'Dragon',  result: 'Dragon', etat: 'Solide', conducteur: false, description: "Dragon de feu restant. Case Dragon qui ignore toutes les résistances sauf Dragon/Glace/Fée.",                   effetCombat: "Flamme draconique : aucune résistance élémentaire ne s'applique." },
  { base: 'Feu', posed: 'Electrique', result: 'Electrique', etat: 'Solide', conducteur: true, description: "Feu chauffe le métal conducteur. Crée une batterie thermique.",                                            effetCombat: "La case Electrique gagne des charges supplémentaires si du Feu est adjacent." },
  { base: 'Feu', posed: 'Normal',  result: 'Normal', etat: 'Solide', conducteur: false, description: "Feu éteint. Case redevient Normal neutre.",                                                                       effetCombat: "Aucune propriété élémentaire." },

  // ── EAU comme base ────────────────────────────────────────
  { base: 'Eau', posed: 'Glace',   result: 'Glace',  etat: 'Solide', conducteur: false, description: "Eau gelée. Surface glissante.",                                                                                   effetCombat: "Non-Glace glissent. Glace se contrôle normalement." },
  { base: 'Eau', posed: 'Poison',  result: 'Poison', etat: 'Liquide',conducteur: false, description: "Eau contaminée. Poison se propage dans toute l'eau connectée.",                                                  effetCombat: "Chaque tour dans l'eau empoisonnée : +1 stack Poison." },
  { base: 'Eau', posed: 'Electrique', result: 'Electrique', etat: 'Liquide', conducteur: true, description: "Eau conductrice. Danger maximum pour les non-Electrique.",                                                 effetCombat: "Propagation automatique des effets Electrique à toutes les cases Eau connectées." },
  { base: 'Eau', posed: 'Fée',     result: 'Fée',    etat: 'Liquide',conducteur: false, description: "Eau bénite. Propriétés de soin amplifiées.",                                                                      effetCombat: "Les unités alliées dans cette eau régénèrent des PV chaque tour." },
  { base: 'Eau', posed: 'Plante',  result: 'Plante', etat: 'Liquide',conducteur: false, description: "Plante irrigée. Croissance et prolifération accélérées.",                                                        effetCombat: "La Plante se propage 2× plus vite sur les cases adjacentes à l'eau." },
  { base: 'Eau', posed: 'Feu',     result: 'Vent',   etat: 'Air',    conducteur: false, description: "Eau + Feu = Vapeur. Case Vent temporaire.",                                                                        effetCombat: "La vapeur donne un bonus de mobilité verticale pendant 2 tours." },
  { base: 'Eau', posed: 'Sol',     result: 'Sol',    etat: 'Solide (gravité)', conducteur: false, description: "Boue. Eau + Sol = terrain vaseux.",                                                                   effetCombat: "Ralentit tous les déplacements de 1 PM. Unités Sol ignorent le malus." },

  // ── GLACE comme base ──────────────────────────────────────
  { base: 'Glace', posed: 'Feu',   result: 'Eau',    etat: 'Liquide',conducteur: false, description: "Fonte. La Glace se transforme en Eau.",                                                                           effetCombat: "Le Feu s'éteint dans le processus de fonte." },
  { base: 'Glace', posed: 'Eau',   result: 'Glace',  etat: 'Solide', conducteur: false, description: "L'eau se gèle sur la Glace. Extension de la zone glacée.",                                                       effetCombat: "La zone gelée s'étend d'1 case." },
  { base: 'Glace', posed: 'Roche', result: 'Glace',  etat: 'Solide', conducteur: false, description: "Roche préservée dans la Glace. Structure très stable.",                                                           effetCombat: "La case Glace/Roche a des PV doublés et ne fond pas naturellement." },
  { base: 'Glace', posed: 'Electrique', result: 'Glace', etat: 'Solide', conducteur: false, description: "Cristaux électrifiés. La décharge libérée lors de la brisure est massive.",                                 effetCombat: "Quand cette case est détruite : explosion Electrique de zone." },
  { base: 'Glace', posed: 'Poison', result: 'Glace', etat: 'Solide', conducteur: false, description: "Poison piégé dans la Glace. Libéré lors de la fonte.",                                                           effetCombat: "Quand cette case fond : libère des stacks de Poison en zone." },
  { base: 'Glace', posed: 'Vent',   result: 'Vent',   etat: 'Air',    conducteur: false, description: "Blizzard. Glace + Vent = tempête de neige.",                                                                     effetCombat: "Zone de blizzard pendant 3 tours : -2 PM et 1 stack Hypothermie par tour." },

  // ── PLANTE comme base ─────────────────────────────────────
  { base: 'Plante', posed: 'Feu',   result: 'Feu',    etat: 'Solide', conducteur: false, description: "Plante brûlée. Devient case Feu.",                                                                               effetCombat: "Le Feu se nourrit de la Plante et s'amplifie." },
  { base: 'Plante', posed: 'Eau',   result: 'Plante', etat: 'Solide', conducteur: false, description: "Plante irriguée. Régénération et propagation boostées.",                                                        effetCombat: "Prolifération à 100% ce tour. Soin augmenté." },
  { base: 'Plante', posed: 'Poison', result: 'Plante', etat: 'Solide', conducteur: false, description: "Plante Corrompue. Blesse les non-Poison, soigne les Poison.",                                                  effetCombat: "Unités Plante touchant cette case gagnent 3 stacks Poison." },
  { base: 'Plante', posed: 'Fée',   result: 'Plante', etat: 'Solide', conducteur: false, description: "Plante enchantée. Croissance magique — double tous les effets Plante.",                                         effetCombat: "La prolifération passe à 100%. Le soin passe à 10% PV max par tour." },
  { base: 'Plante', posed: 'Ténèbres', result: 'Plante', etat: 'Solide', conducteur: false, description: "Plante sombre. Ronces tordues qui cachent les unités.",                                                     effetCombat: "Unités Ténèbres y sont invisibles. Ronces blessent les intrus." },
  { base: 'Plante', posed: 'Sol',   result: 'Plante', etat: 'Solide', conducteur: false, description: "Racines profondes. Plante ancrée qui ne peut pas être déplacée.",                                               effetCombat: "La case ne peut pas être déplacée par des effets de terrain. Soin +50%." },

  // ── SOL comme base ────────────────────────────────────────
  { base: 'Sol', posed: 'Eau',     result: 'Sol',    etat: 'Solide (gravité)', conducteur: false, description: "Boue. Sol + Eau = terrain vaseux.",                                                                   effetCombat: "Ralentit tous les déplacements. Unités Sol ignorent le malus." },
  { base: 'Sol', posed: 'Feu',     result: 'Roche',  etat: 'Solide', conducteur: false, description: "Sol brûlé et durci. Devient une case de Roche sèche.",                                                          effetCombat: "Durable mais fragile — casse facilement sous des dégâts lourds." },
  { base: 'Sol', posed: 'Glace',   result: 'Sol',    etat: 'Solide', conducteur: false, description: "Sol gelé. Très stable, glissant pour les non-Sol.",                                                              effetCombat: "Unités Sol ancrent plus fort. Les autres glissent d'1 case." },
  { base: 'Sol', posed: 'Plante',  result: 'Plante', etat: 'Solide', conducteur: false, description: "Sol fertile. Plante bénéficiant d'un ancrage maximal.",                                                         effetCombat: "Prolifération double. La case ne peut pas être Affaissée." },
  { base: 'Sol', posed: 'Roche',   result: 'Roche',  etat: 'Solide', conducteur: false, description: "Forteresse naturelle. Sol + Roche = terrain le plus stable du jeu.",                                            effetCombat: "PV x4. Impossible à faire monter ou descendre par des effets de terrain." },

  // ── ROCHE comme base ──────────────────────────────────────
  { base: 'Roche', posed: 'Feu',   result: 'Feu',    etat: 'Solide', conducteur: false, description: "Roche en fusion. Magma potentiel.",                                                                              effetCombat: "Si suffisamment de Feu adjacent : devient Magma (dégâts continus x2)." },
  { base: 'Roche', posed: 'Sol',   result: 'Roche',  etat: 'Solide', conducteur: false, description: "Roche et Sol combinés. Forteresse naturelle maximale.",                                                         effetCombat: "PV x4. Cases adjacentes gagnent +20% d'armure." },
  { base: 'Roche', posed: 'Glace', result: 'Roche',  etat: 'Solide', conducteur: false, description: "Roche préservée dans la glace. Inaltérable.",                                                                   effetCombat: "Résiste à tous les effets de destruction de terrain." },
  { base: 'Roche', posed: 'Vent',  result: 'Roche',  etat: 'Solide', conducteur: false, description: "Roche érodée. Légèrement fragilisée par le vent.",                                                              effetCombat: "PV réduites de 25%. Peut s'effriter sous des dégâts normaux." },
  { base: 'Roche', posed: 'Plante',result: 'Roche',  etat: 'Solide', conducteur: false, description: "Plante érode la Roche lentement. Après 3 tours sans entretien : -1 solidité.",                                  effetCombat: "Roche → Sol après 3 tours si une Plante est adjacente." },
  { base: 'Roche', posed: 'Electrique', result: 'Electrique', etat: 'Solide', conducteur: true, description: "Roche conductrice. Stocke une charge électrique.",                                                      effetCombat: "La case Roche devient une batterie passive d'1 charge." },
];

// ── B. INTERACTIONS PAR ADJACENCE ────────────────────────────
// Quand un block A est posé à côté d'un block B existant,
// un effet de bordure se produit sur la case B ou sur les unités
// qui franchissent la frontière.

export type AdjacencyEffect = 'Bordure' | 'Propagation' | 'Neutralisation' | 'Amplification' | 'Création' | 'Danger';

export interface AdjacencyInteraction {
  a: BlockType;
  b: BlockType;
  effet: AdjacencyEffect;
  description: string;
  impact_combat: string;
  duree_tours?: number;
}

export const ADJACENCY_INTERACTIONS: AdjacencyInteraction[] = [

  // ── FEU ──────────────────────────────────────────────────
  { a: 'Feu', b: 'Eau',       effet: 'Création',      description: "La bordure Feu/Eau produit de la Vapeur.", impact_combat: "Les unités franchissant la frontière entrent dans un nuage de vapeur : vision réduite à 1 case, +1 PM (légèreté).", duree_tours: 2 },
  { a: 'Feu', b: 'Glace',     effet: 'Propagation',   description: "Le Feu fait fondre la Glace adjacente progressivement.", impact_combat: "La case Glace adjacente perd 25% de ses PV par tour et se transforme en Eau quand ses PV tombent à 0." },
  { a: 'Feu', b: 'Plante',    effet: 'Propagation',   description: "Le Feu se propage vers la Plante : celle-ci s'enflamme en priorité.", impact_combat: "La case Plante a 75% de chance de devenir Feu à la fin de chaque tour." },
  { a: 'Feu', b: 'Vent',      effet: 'Amplification', description: "Le Vent souffle le Feu — accélère sa propagation dans la direction du vent.", impact_combat: "La portée de propagation du Feu double dans la direction du Vent adjacent." },
  { a: 'Feu', b: 'Roche',     effet: 'Création',      description: "Chaleur extrême sur la Roche : formation de Magma à la bordure.", impact_combat: "Après 3 tours consécutifs de contact : la case Roche se transforme en Magma (dégâts continus, ne s'éteint pas naturellement)." },
  { a: 'Feu', b: 'Ténèbres',  effet: 'Neutralisation',description: "Le Feu illumine et révèle les Ténèbres adjacentes.", impact_combat: "Les unités cachées dans la case Ténèbres adjacente sont révélées au joueur Feu. La case Ténèbres perd ses effets de camouflage sur sa bordure." },
  { a: 'Feu', b: 'Fée',       effet: 'Neutralisation',description: "La Fée bénit le Feu, réduisant ses dégâts mais purifiant ses effets négatifs.", impact_combat: "Dégâts du Feu réduits de 30% sur la bordure, mais les unités alliées ne subissent aucun dégât en franchissant la frontière." },
  { a: 'Feu', b: 'Dragon',    effet: 'Amplification', description: "Feu et Dragon se renforcent mutuellement.", impact_combat: "Chaque case Dragon adjacente à du Feu donne +15% de dégâts aux sorts Feu du lanceur." },
  { a: 'Feu', b: 'Electrique', effet: 'Danger',       description: "Feu + Electrique : risque de court-circuit explosif.", impact_combat: "20% de chance par tour que la bordure produise une explosion électrothermique (dégâts de zone aux unités adjacentes)." },
  { a: 'Feu', b: 'Sol',        effet: 'Création',     description: "Le Feu dessèche et durcit le Sol adjacent.", impact_combat: "Après 2 tours : le Sol adjacent devient Roche sèche (plus solide, plus stable)." },
  { a: 'Feu', b: 'Spectre',    effet: 'Neutralisation',description: "La lumière du Feu révèle et affaiblit les Spectres.", impact_combat: "Les Spectres dans la case adjacente perdent leur invisibilité et leur résistance physique est réduite de 20%." },

  // ── EAU ──────────────────────────────────────────────────
  { a: 'Eau', b: 'Electrique', effet: 'Danger',       description: "L'eau conduit l'électricité.", impact_combat: "Toute unité non-Electrique dans une case Eau connectée à une case Electrique reçoit des dégâts électriques chaque tour." },
  { a: 'Eau', b: 'Glace',      effet: 'Propagation',  description: "L'Eau gèle lentement au contact de la Glace.", impact_combat: "La case Eau adjacente à Glace applique 1 stack Hypothermie par tour aux unités dedans. Après 4 tours : devient Glace." },
  { a: 'Eau', b: 'Poison',     effet: 'Propagation',  description: "Le Poison se propage dans l'Eau.", impact_combat: "L'eau adjacente à une case Poison applique 1 stack Poison par tour aux unités non-Poison. Après 3 tours : toute l'eau contiguë est contaminée." },
  { a: 'Eau', b: 'Sol',        effet: 'Création',     description: "Eau + Sol = Boue.", impact_combat: "La case Sol adjacente devient Boue (Sol modifié) : -1 PM pour tout le monde sauf Sol/Eau." },
  { a: 'Eau', b: 'Plante',     effet: 'Amplification',description: "L'eau irrigue la Plante.", impact_combat: "La case Plante adjacente à l'Eau fait passer sa Prolifération à 100% et son soin à 10% PV max par tour." },
  { a: 'Eau', b: 'Fée',        effet: 'Création',     description: "L'Eau est bénite par la Fée adjacente.", impact_combat: "La case Eau adjacente à Fée devient Eau Bénite : soigne les alliés de 5% PV max par tour au lieu d'être neutre." },
  { a: 'Eau', b: 'Ténèbres',   effet: 'Neutralisation',description: "L'eau claire révèle les ombres.", impact_combat: "L'unité dans la case Eau voisine d'une Ténèbres voit à travers l'ombre (vision normale malgré la case sombre adjacente)." },

  // ── GLACE ─────────────────────────────────────────────────
  { a: 'Glace', b: 'Feu',      effet: 'Neutralisation',description: "Glace et Feu s'opposent — la Glace ralentit la propagation du Feu.", impact_combat: "La propagation du Feu est bloquée dans la direction de la Glace. Dégâts du Feu réduits de 40% sur les unités qui franchissent la frontière." },
  { a: 'Glace', b: 'Vent',     effet: 'Création',     description: "Glace + Vent = Blizzard localisé.", impact_combat: "Les 2 cases de la frontière deviennent une zone de blizzard pendant 3 tours : -2 PM et 1 stack Hypothermie par tour." },
  { a: 'Glace', b: 'Sol',      effet: 'Bordure',      description: "Sol gelé à la bordure.", impact_combat: "La frontière Sol/Glace est glissante : les unités traversant perdent leur prochain PM de déplacement." },
  { a: 'Glace', b: 'Roche',    effet: 'Amplification',description: "Roche préservée dans la Glace. Très stable.", impact_combat: "La case Roche adjacente à la Glace gagne +50% de PV et résiste aux sorts de terrain." },
  { a: 'Glace', b: 'Poison',   effet: 'Bordure',      description: "Poison piégé par la Glace. Contenu — mais libéré si la Glace fond.", impact_combat: "La case Glace avec Poison adjacent libère des stacks Poison en zone si elle est détruite." },
  { a: 'Glace', b: 'Electrique', effet: 'Danger',    description: "Électricité dans la Glace : accumulation cristalline explosive.", impact_combat: "La Glace stocke 1 charge Electrique par tour adjacente. Si la Glace est brisée avec ≥3 charges : explosion Electrique de zone 2×2." },

  // ── ELECTRIQUE ────────────────────────────────────────────
  { a: 'Electrique', b: 'Eau',     effet: 'Danger',      description: "L'Electrique se propage dans l'Eau adjacente.", impact_combat: "Toute l'eau contigüe devient conductrice. Les unités non-Electrique dans l'eau reçoivent des dégâts continus." },
  { a: 'Electrique', b: 'Roche',   effet: 'Création',    description: "La Roche absorbe et stocke l'électricité.", impact_combat: "La case Roche adjacente devient une batterie passive (1 charge/tour, max 3). Utilisable par les unités Electrique." },
  { a: 'Electrique', b: 'Acier',   effet: 'Amplification',description: "L'Acier conduit et amplifie l'électricité.", impact_combat: "Toute la chaîne d'Acier adjacent est conductrice. Les charges se propagent à toute la chaîne." },
  { a: 'Electrique', b: 'Plante',  effet: 'Danger',      description: "L'électricité brûle la Plante.", impact_combat: "La Plante adjacente à une case Electrique prend des dégâts chaque tour et perd sa régénération." },
  { a: 'Electrique', b: 'Vent',    effet: 'Création',    description: "Electrique + Vent = air ionisé.", impact_combat: "L'air ionisé à la frontière donne +1 portée aux sorts Electrique pour les unités dans le rayon de 2 cases." },
  { a: 'Electrique', b: 'Spectre', effet: 'Neutralisation',description: "L'électricité perturbe les spectres.", impact_combat: "Les spectres dans la case adjacente à une Electrique perdent leur passif d'Incorporéité pendant 2 tours." },

  // ── PLANTE ────────────────────────────────────────────────
  { a: 'Plante', b: 'Sol',         effet: 'Amplification',description: "Racines dans le Sol. La Plante est ancrée et nourrie.", impact_combat: "La Plante adjacente à Sol a sa Prolifération à 100% et son soin à 10% PV max par tour." },
  { a: 'Plante', b: 'Eau',         effet: 'Amplification',description: "Plante irriguée.", impact_combat: "Prolifération doublée, soin doublé." },
  { a: 'Plante', b: 'Feu',         effet: 'Danger',       description: "La Plante s'enflamme au contact du Feu.", impact_combat: "75% de chance que la case Plante devienne Feu à la fin de chaque tour." },
  { a: 'Plante', b: 'Poison',      effet: 'Propagation',  description: "La Plante absorbe le Poison et mute.", impact_combat: "La Plante adjacente au Poison devient Plante Corrompue (soigne Poison, blesse les autres). Après 5 tours : tout le réseau Plante contigu est corrompu." },
  { a: 'Plante', b: 'Roche',       effet: 'Propagation',  description: "La Plante érode la Roche au fil du temps.", impact_combat: "Après 5 tours : la case Roche perd -1 solidité (Roche → Sol)." },
  { a: 'Plante', b: 'Fée',         effet: 'Amplification',description: "Magie de la Fée accélère la croissance.", impact_combat: "Prolifération à 100%. Soin à 15% PV max par tour. Les effets de camouflage de la Plante durent le double." },
  { a: 'Plante', b: 'Insecte',     effet: 'Propagation',  description: "L'Insecte infeste la Plante.", impact_combat: "La Plante adjacente à un Nid d'Insectes est infestée : -50% de soin, mais invoque 1 drone par tour supplémentaire." },
  { a: 'Plante', b: 'Vent',        effet: 'Propagation',  description: "Le Vent disperse les graines.", impact_combat: "La Prolifération de la Plante s'étend dans la direction du Vent. Portée : 2 cases au lieu de 1." },

  // ── SOL ───────────────────────────────────────────────────
  { a: 'Sol', b: 'Eau',            effet: 'Création',    description: "Sol + Eau = Boue.", impact_combat: "-1 PM pour tout le monde sauf Sol et Eau." },
  { a: 'Sol', b: 'Roche',          effet: 'Amplification',description: "Sol + Roche = Forteresse naturelle. Très solide.", impact_combat: "+100% de PV sur la case Roche adjacente. Les unités Sol dessus gagnent +20% d'armure." },
  { a: 'Sol', b: 'Glace',          effet: 'Bordure',     description: "Sol gelé à la frontière.", impact_combat: "Les unités traversant la bordure Sol/Glace sont ralenties (-1 PM) pour 1 tour." },
  { a: 'Sol', b: 'Plante',         effet: 'Amplification',description: "Racines profondes. Sol + Plante = synergie maximale.", impact_combat: "La Plante ne peut pas être déplacée. Prolifération à 100%." },
  { a: 'Sol', b: 'Vent',           effet: 'Création',    description: "Vent + Sol = poussière et brouillard.", impact_combat: "Vision réduite à 3 cases dans la zone de bordure pendant 2 tours." },

  // ── ROCHE ─────────────────────────────────────────────────
  { a: 'Roche', b: 'Feu',          effet: 'Danger',      description: "Roche chauffée par le Feu. Risque de Magma.", impact_combat: "Après 3 tours : la Roche devient Magma (dégâts x2 continus)." },
  { a: 'Roche', b: 'Electrique',   effet: 'Amplification',description: "Roche conductrice emmagasine des charges.", impact_combat: "Gagne 1 charge Electrique passive par tour (max 3)." },
  { a: 'Roche', b: 'Sol',          effet: 'Amplification',description: "Sol + Roche = Forteresse naturelle.", impact_combat: "PV x4. Impossible de modifier la hauteur de cette case." },
  { a: 'Roche', b: 'Glace',        effet: 'Amplification',description: "Glace préserve la Roche. Inaltérable.", impact_combat: "Résiste à tous les sorts de terrain. PV x3." },
  { a: 'Roche', b: 'Plante',       effet: 'Propagation', description: "La Plante érode la Roche.", impact_combat: "Après 5 tours : -1 solidité (Roche → Sol)." },
  { a: 'Roche', b: 'Eau',          effet: 'Bordure',     description: "Roche ralentit le flux d'Eau.", impact_combat: "La cascade passive de l'Eau est bloquée par la Roche adjacente." },

  // ── VENT ──────────────────────────────────────────────────
  { a: 'Vent', b: 'Feu',           effet: 'Amplification',description: "Le Vent souffle le Feu, accélérant sa propagation.", impact_combat: "Portée de propagation du Feu doublée dans la direction du Vent." },
  { a: 'Vent', b: 'Eau',           effet: 'Création',    description: "Vent + Eau = embruns et brume.", impact_combat: "Zone de brume à la frontière : vision -2 cases pendant 2 tours." },
  { a: 'Vent', b: 'Glace',         effet: 'Création',    description: "Vent + Glace = Blizzard localisé.", impact_combat: "-2 PM et 1 stack Hypothermie par tour à la frontière. Durée 3 tours." },
  { a: 'Vent', b: 'Plante',        effet: 'Propagation', description: "Le Vent disperse les graines de la Plante.", impact_combat: "Prolifération s'étend dans la direction du Vent sur 2 cases." },
  { a: 'Vent', b: 'Sol',           effet: 'Création',    description: "Vent + Sol = tempête de poussière.", impact_combat: "Vision réduite à 3 cases dans la zone pendant 2 tours." },
  { a: 'Vent', b: 'Electrique',    effet: 'Création',    description: "Air ionisé. Electrique + Vent = orage statique.", impact_combat: "+1 portée aux sorts Electrique dans le rayon de 3 cases." },

  // ── TÉNÈBRES ──────────────────────────────────────────────
  { a: 'Ténèbres', b: 'Fée',       effet: 'Neutralisation',description: "Ténèbres et Fée s'opposent. Les deux s'affaiblissent mutuellement à la frontière.", impact_combat: "Les deux cases perdent 50% de leurs effets sur leur bordure commune. Les unités sur ces cases ont 0 bonus élémentaire." },
  { a: 'Ténèbres', b: 'Feu',       effet: 'Neutralisation',description: "Le Feu révèle et affaiblit les Ténèbres.", impact_combat: "La case Ténèbres perd son effet de camouflage sur la bordure. Les unités dedans sont révélées." },
  { a: 'Ténèbres', b: 'Poison',    effet: 'Amplification',description: "Ténèbres amplifient le Poison.", impact_combat: "Les stacks Poison font +50% de dégâts sur une unité dans la case Ténèbres adjacente." },
  { a: 'Ténèbres', b: 'Spectre',   effet: 'Amplification',description: "Ténèbres et Spectre : synergie parfaite.", impact_combat: "Les unités Spectre dans les Ténèbres adjacentes sont doublement invisibles (portée de vision ennemie à 1 case)." },
  { a: 'Ténèbres', b: 'Psy',       effet: 'Amplification',description: "Ténèbres amplifient les pouvoirs mentaux.", impact_combat: "Les sorts Psy coûtent -1 PM si le lanceur est dans la case Ténèbres. Portée +1." },
  { a: 'Ténèbres', b: 'Eau',       effet: 'Neutralisation',description: "L'eau claire reflète et disperse l'ombre.", impact_combat: "La case Ténèbres adjacente à l'Eau perd son camouflage côté eau." },

  // ── FÉE ───────────────────────────────────────────────────
  { a: 'Fée', b: 'Ténèbres',       effet: 'Neutralisation',description: "Opposition totale. Les deux éléments s'affaiblissent.", impact_combat: "Bordure instable : 30% de chance d'une explosion lumière/ombre (dégâts de zone aux unités à la frontière)." },
  { a: 'Fée', b: 'Plante',         effet: 'Amplification',description: "Magie de la Fée accélère la croissance.", impact_combat: "Prolifération 100%, soin 15% PV max par tour, les effets de camouflage durent le double." },
  { a: 'Fée', b: 'Eau',            effet: 'Création',    description: "Eau bénite par la Fée.", impact_combat: "La case Eau soigne 5% PV max par tour les alliés qui y restent." },
  { a: 'Fée', b: 'Feu',            effet: 'Neutralisation',description: "La Fée bénit la frontière — réduit les dégâts du Feu pour les alliés.", impact_combat: "Dégâts du Feu -30% pour les alliés franchissant la frontière. Aucun effet pour les ennemis." },
  { a: 'Fée', b: 'Poison',         effet: 'Neutralisation',description: "La Fée neutralise le Poison à la frontière.", impact_combat: "Les stacks Poison ne se propagent pas à travers cette frontière. Les unités la franchissant perdent 1 stack Poison." },
  { a: 'Fée', b: 'Spectre',        effet: 'Neutralisation',description: "La lumière de la Fée révèle les spectres.", impact_combat: "Les spectres adjacents à une case Fée perdent leur invisibilité." },

  // ── POISON ────────────────────────────────────────────────
  { a: 'Poison', b: 'Eau',         effet: 'Propagation',  description: "Le Poison se propage dans l'Eau.", impact_combat: "L'eau connectée est contaminée. Après 3 tours continus : toute l'eau contigüe devient Poison." },
  { a: 'Poison', b: 'Sol',         effet: 'Propagation',  description: "Le Sol absorbe le Poison. Terrain contaminé.", impact_combat: "Le Sol adjacent au Poison inflige 1 stack par tour aux unités non-Poison." },
  { a: 'Poison', b: 'Plante',      effet: 'Propagation',  description: "La Plante absorbe le Poison — mutation.", impact_combat: "La Plante devient Plante Corrompue après 3 tours." },
  { a: 'Poison', b: 'Ténèbres',    effet: 'Amplification',description: "Ténèbres amplifient la puissance du Poison.", impact_combat: "Stacks Poison font +50% de dégâts dans la zone sombre." },
  { a: 'Poison', b: 'Fée',         effet: 'Neutralisation',description: "La Fée neutralise le Poison à la frontière.", impact_combat: "Les unités traversant la frontière Fée/Poison perdent 1 stack Poison." },
  { a: 'Poison', b: 'Insecte',     effet: 'Amplification',description: "Insecte + Poison : les insectes deviennent venimeux.", impact_combat: "Chaque drone d'Insecte adjacent à une case Poison applique 1 stack Poison à ses cibles au lieu de dégâts normaux." },
  { a: 'Poison', b: 'Eau',         effet: 'Propagation',  description: "Eau empoisonnée.", impact_combat: "Toute l'eau connectée est contaminée après 3 tours." },

  // ── SPECTRE ───────────────────────────────────────────────
  { a: 'Spectre', b: 'Ténèbres',   effet: 'Amplification',description: "Spectre et Ténèbres : synergie maximale.", impact_combat: "Unités Spectre dans les Ténèbres adjacentes : invisibles à distance de 5 cases (au lieu de 3)." },
  { a: 'Spectre', b: 'Feu',        effet: 'Neutralisation',description: "La lumière du Feu révèle les Spectres.", impact_combat: "Spectres dans la case adjacente au Feu perdent leur invisibilité." },
  { a: 'Spectre', b: 'Electrique', effet: 'Neutralisation',description: "L'électricité perturbe les Spectres.", impact_combat: "Spectres adjacents à l'Electrique perdent l'Incorporéité Partielle pendant 2 tours." },
  { a: 'Spectre', b: 'Fée',        effet: 'Neutralisation',description: "La lumière Fée révèle les Spectres.", impact_combat: "Spectres adjacents à la Fée sont visibles pour tous." },
  { a: 'Spectre', b: 'Psy',        effet: 'Amplification',description: "Psy amplifie la conscience spectrale.", impact_combat: "+2 cases de portée pour les sorts Spectre lancés depuis la case Psy adjacente." },

  // ── GRAVITÉ ───────────────────────────────────────────────
  { a: 'Gravité', b: 'Roche',      effet: 'Amplification',description: "Gravité amplifie les dégâts de chute liés à la Roche.", impact_combat: "Les cubes Roche qui tombent dans la zone Gravité infligent le double de dégâts." },
  { a: 'Gravité', b: 'Vent',       effet: 'Création',     description: "Gravité + Vent = vortex localisé.", impact_combat: "À la frontière : les unités volantes sont attirées vers la zone Gravité (-1 PM dans la direction opposée)." },
  { a: 'Gravité', b: 'Sol',        effet: 'Amplification',description: "Gravité + Sol = compression du terrain.", impact_combat: "Les unités Sol dans la zone gagnent +20% d'armure mais perdent -1 PM." },
  { a: 'Gravité', b: 'Electrique', effet: 'Danger',       description: "Distorsion gravitationnelle + charge électrique = anomalie.", impact_combat: "20% de chance par tour que les unités à la frontière soient déplacées aléatoirement de 1 case." },

  // ── DRAGON ────────────────────────────────────────────────
  { a: 'Dragon', b: 'Feu',         effet: 'Amplification',description: "Feu draconique amplifié.", impact_combat: "Le Feu adjacent à Dragon fait +20% de dégâts. Les sorts Feu des unités Dragon dessus coûtent -1 PM." },
  { a: 'Dragon', b: 'Electrique',  effet: 'Amplification',description: "Dragon électrifié. Les deux s'amplifient.", impact_combat: "Les dégâts d'arc Electrique sont amplifiés pour les unités Dragon." },
  { a: 'Dragon', b: 'Roche',       effet: 'Amplification',description: "Dragon + Roche = forteresse indestructible.", impact_combat: "La case Roche adjacente à Dragon a ses PV triplés." },
  { a: 'Dragon', b: 'Combat',      effet: 'Amplification',description: "Dragon inspire les combattants.", impact_combat: "Unités Combat sur une case Dragon adjacente gagnent +15% de dégâts en mêlée." },
  { a: 'Dragon', b: 'Fée',         effet: 'Neutralisation',description: "Fée et Dragon s'opposent — le Dragon est la puissance brute, la Fée est l'ordre sacré.", impact_combat: "Les effets de la case Dragon sont réduits de 50% si une case Fée est adjacente, et vice versa." },

  // ── PSY ───────────────────────────────────────────────────
  { a: 'Psy', b: 'Spectre',        effet: 'Amplification',description: "Psy amplifie la perception spectrale.", impact_combat: "+2 cases de portée pour tous les sorts Psy et Spectre dans la zone." },
  { a: 'Psy', b: 'Ténèbres',       effet: 'Amplification',description: "Ténèbres amplifient la perception mentale.", impact_combat: "Sorts Psy coûtent -1 PM dans la zone Ténèbres adjacente." },
  { a: 'Psy', b: 'Fée',            effet: 'Création',     description: "Psy + Fée = barrière mentale protectrice.", impact_combat: "Les unités alliées à la frontière sont immunisées aux effets de contrôle mental ennemis." },
  { a: 'Psy', b: 'Electrique',     effet: 'Amplification',description: "Réseaux nerveux amplifiés.", impact_combat: "+1 case de portée aux sorts Psy pour chaque case Electrique adjacente." },

  // ── INSECTE ───────────────────────────────────────────────
  { a: 'Insecte', b: 'Plante',     effet: 'Propagation',  description: "Insectes infestent la Plante.", impact_combat: "La Plante perd son soin. Invoque +1 drone par tour depuis le Nid adjacent." },
  { a: 'Insecte', b: 'Poison',     effet: 'Amplification',description: "Insectes venimeux.", impact_combat: "Chaque drone inflige 1 stack Poison à ses cibles (au lieu de dégâts normaux)." },
  { a: 'Insecte', b: 'Sol',        effet: 'Amplification',description: "Les insectes creusent dans le Sol.", impact_combat: "Les tunnels Sol créés dans cette zone coûtent -1 PM à créer." },
  { a: 'Insecte', b: 'Eau',        effet: 'Danger',       description: "L'eau noie les essaims.", impact_combat: "Les drones dans une case Eau adjacente perdent 20% de leurs PV par tour." },
  { a: 'Insecte', b: 'Feu',        effet: 'Danger',       description: "Le feu brûle l'essaim.", impact_combat: "Les drones Insecte adjacents au Feu perdent 30% de leurs PV par tour. Le Nid ne peut pas être créé sur une case adjacente au Feu." },

  // ── NORMAL ────────────────────────────────────────────────
  { a: 'Normal', b: 'Feu',         effet: 'Bordure',      description: "Normal absorbe les effets du Feu à la frontière.", impact_combat: "Dégâts du Feu réduits de 10% pour les unités Normal franchissant la frontière." },
  { a: 'Normal', b: 'Electrique',  effet: 'Neutralisation',description: "Normal ne conduit pas l'électricité.", impact_combat: "La propagation de l'Electrique est bloquée par la case Normal." },
  { a: 'Normal', b: 'Poison',      effet: 'Neutralisation',description: "Normal résiste partiellement au Poison.", impact_combat: "Stacks Poison acquis -50% sur les unités Normal traversant la frontière Normal/Poison." },
];

// ── HELPERS ──────────────────────────────────────────────────

export function getStackResult(base: BlockType, posed: BlockType): StackInteraction | undefined {
  return STACK_INTERACTIONS.find(i => i.base === base && i.posed === posed);
}

export function getAdjacencyEffects(a: BlockType, b: BlockType): AdjacencyInteraction[] {
  return ADJACENCY_INTERACTIONS.filter(
    i => (i.a === a && i.b === b) || (i.a === b && i.b === a)
  );
}
