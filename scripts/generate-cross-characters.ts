/**
 * Génère les 150 personnages cross-élément manquants.
 * Run: npx tsx scripts/generate-cross-characters.ts
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const CROSS_SRC = path.join(ROOT, 'src/data/characters/cross');

// ── Element metadata ───────────────────────────────────────────

const ELEMENTS = [
  'Feu','Eau','Glace','Electrique','Plante','Sol','Roche','Vent',
  'Dragon','Insecte','Psy','Ténèbres','Fée','Poison','Spectre','Gravité','Combat','Normal',
] as const;
type El = typeof ELEMENTS[number];

const SPECIES: Record<El, string> = {
  'Feu':        'Pyriens',    'Dragon':    'Pyriens',    'Combat':  'Hommes-Liens',
  'Eau':        'Néréides',   'Psy':       'Néréides',   'Gravité': 'Néréides',
  'Glace':      'Givrins',    'Fée':       'Fées',       'Spectre': 'Givrins',
  'Electrique': 'Aérides',    'Vent':      'Aérides',
  'Plante':     'Sylvans',    'Poison':    'Chthoniens',
  'Sol':        'Chthoniens', 'Roche':     'Chthoniens', 'Insecte': 'Chthoniens',
  'Ténèbres':   'Umbriens',   'Normal':    'Hommes-Liens',
};
const REGIONS: Record<string, string> = {
  'Pyriens': 'Varkhôl', 'Néréides': 'Thalassyr', 'Givrins': 'Crysalme',
  'Aérides': 'Asterciel', 'Sylvans': 'Sylvera', 'Chthoniens': 'Ormn-Dur',
  'Umbriens': 'Noctéa', 'Fées': 'Citadelle', 'Hommes-Liens': 'Isthme',
};

const CLASSES = [
  'Enchanteur-Soutien','Enchanteur-Capteur','Juggernaut','Plongeur','Mage-Burst',
  'Battlemage','Artillerie','Tireur','Assassin','Escrimeur','Vanguard','Gardien','Spécialiste',
] as const;
const FACTION_BY_CLASS: Record<string,string> = {
  'Enchanteur-Soutien': 'Dissidentes', 'Enchanteur-Capteur': 'Empire',
  'Juggernaut': 'Convergence', 'Plongeur': 'Dissidentes', 'Mage-Burst': 'Indépendant',
  'Battlemage': 'Empire', 'Artillerie': 'Dissidentes', 'Tireur': 'Indépendant',
  'Assassin': 'Dissidentes', 'Escrimeur': 'Empire', 'Vanguard': 'Convergence',
  'Gardien': 'Dissidentes', 'Spécialiste': 'Indépendant',
};

// ── Name syllables per element ─────────────────────────────────

const NAME_PARTS: Record<El, [string[], string[]]> = {
  'Feu':        [['Pyr','Ign','Braz','Kael','Flam','Cin','Volk','Embr'],['ax','is','ara','or','iel','on','us','yx']],
  'Eau':        [['Mar','Thal','Nér','Aqua','Flu','Cér','Undh','Sal'],['is','ine','ia','ys','on','el','ara','yx']],
  'Glace':      [['Cryo','Giv','Frost','Alb','Niph','Krist','Heid','Glac'],['ys','an','ora','in','el','ar','ia','on']],
  'Electrique': [['Ful','Volt','Spar','Arc','Zer','Kad','Elek','Bolt'],['ia','ax','on','is','ira','ur','el','yn']],
  'Plante':     [['Sylv','Verd','Fron','Flor','Bosk','Thyl','Fernn','Lyss'],['is','ora','ia','ax','an','el','yn','ys']],
  'Sol':        [['Geo','Terr','Lim','Erg','Keth','Sism','Gund','Alg'],['os','on','ax','ia','ur','an','el','yx']],
  'Roche':      [['Pet','Krag','Lith','Borg','Gran','Skal','Roc','Brec'],['os','an','ur','ax','on','ys','ia','el']],
  'Vent':        [['Aer','Vent','Zeph','Austr','Nim','Cycl','Bor','Gal'],['is','ax','or','ia','yn','el','us','on']],
  'Dragon':     [['Drak','Ryuk','Vreth','Gorn','Khael','Syrr','Azur','Drex'],['ax','is','on','ur','yx','el','ar','in']],
  'Insecte':    [['Chit','Hex','Scar','Acr','Enth','Larv','Myri','Acar'],['ax','is','on','ia','yx','el','ur','an']],
  'Psy':        [['Men','Tel','Phren','Nous','Anth','Psych','Keph','Eid'],['os','is','ax','ia','on','el','yr','an']],
  'Ténèbres':   [['Umbr','Nyct','Nox','Scot','Kal','Mrak','Skia','Hav'],['ax','is','on','ia','yx','ur','el','an']],
  'Fée':        [['Lum','Aur','Fael','Bril','Sél','Chal','Iris','Élar'],['iel','ia','in','on','is','yn','el','ax']],
  'Poison':     [['Tox','Ven','Alcal','Morb','Cor','Mala','Seph','Viryl'],['ax','is','ia','on','ur','yx','el','an']],
  'Spectre':    [['Phan','Ect','Nex','Spect','Lar','Umbr','Eido','Skel'],['os','is','ax','on','ia','ur','el','yn']],
  'Gravité':    [['Grav','Mass','Sing','Dens','Cent','Pesant','Baric','Vect'],['ax','is','on','ia','ur','yx','el','or']],
  'Combat':     [['Bel','Pugl','Mars','Agon','Krat','Buff','Nikh','Strat'],['ax','is','on','ia','ur','el','an','yx']],
  'Normal':     [['Méd','Stand','Ord','Com','Reg','Norm','Plat','Arch'],['is','ian','an','ax','on','el','ur','yx']],
};

function makeName(a: El, b: El, seed: number): string {
  const [preA, sufA] = NAME_PARTS[a];
  const [preB] = NAME_PARTS[b];
  const pre1 = preA[seed % preA.length];
  const pre2 = preB[(seed + 3) % preB.length];
  const suf  = sufA[(seed + 7) % sufA.length];
  // Alternate between combined styles
  if (seed % 3 === 0) return pre1 + pre2.toLowerCase().slice(0,3) + suf;
  if (seed % 3 === 1) return pre1 + suf;
  return pre2 + pre1.toLowerCase().slice(0,2) + suf;
}

// ── Combat style descriptions per element pair ─────────────────

const SYNERGY: Record<string, { combat: string; mod: string }> = {
  'Feu+Eau':        { combat: 'Génère des geysers de vapeur brûlante — les cases Eau chauffées infligent des dégâts élémentaires mixtes. Pression de vapeur pour projeter les ennemis hors des zones sécurisées.', mod: 'Peut surchauffer les cases Eau alliées pour créer des zones de vapeur. Ses sorts Feu dans les cases Eau ont une portée doublée.' },
  'Feu+Glace':      { combat: 'Maîtrise le choc thermique — alterne Feu et Glace pour fracturer les armures. Ses cases de choc thermique infligent des dégâts continus aux deux types de résistance.', mod: 'Peut créer des cases Choc Thermique hybrides. Les ennemis en choc thermique reçoivent +30% de dégâts de tout type.' },
  'Feu+Electrique': { combat: 'Génère des arcs électriques à travers les zones de feu. Le plasma qu\'il crée est le terrain le plus hostile du jeu — brûlure et électrocution simultanées.', mod: 'Les cases Feu qu\'il crée propagent l\'électricité. Ses sorts Electrique dans les zones de Feu infligent Brûlure en plus.' },
  'Feu+Plante':     { combat: 'Incendie contrôlé — brûle ses propres ronces pour créer des explosions de bois enflammé. Ses lianes se transforment en fouets de feu au combat rapproché.', mod: 'Ses ronces peuvent s\'enflammer sur commande (zone de feu instantanée). Les cases Plante qu\'il traverse s\'embrasent derrière lui.' },
  'Feu+Sol':        { combat: 'Crée des geysers de magma depuis les cases Sol. Ses Soulèvements lancent des roches en fusion. Le terrain sous lui devient instable et dangereux après son passage.', mod: 'Soulèvement de sol projecte des cubes enflammés. Ses zones Sol chauffées infligent des dégâts Feu passifs aux ennemis statiques.' },
  'Feu+Roche':      { combat: 'Forge du basalte en combat — ses Cases Roche prennent feu et deviennent des briques de lave. La chaleur de ses sorts fait fondre les défenses de pierre adverses.', mod: 'Ses cases Roche peuvent être activées comme pièges de lave. Ses sorts Feu ignorent 30% de la résistance des Juggernauts Roche.' },
  'Feu+Vent':       { combat: 'Crée des tempêtes de feu — le Vent amplifie ses flammes en tornades élémentaires. Ses Cyclones de feu traversent plusieurs cases en infligeant des dégâts massifs.', mod: 'Ses sorts Feu lancés avec le Vent comme vecteur ont portée doublée. Ses vortex de flammes persistent 2 tours.' },
  'Feu+Insecte':    { combat: 'Essaim de scarabées de feu — ses insectes sont ignifugés et portent des charges de feu sur les cibles. L\'infestation de feu est impossible à éteindre normalement.', mod: 'Son Essaim transporte l\'état Brûlure sur chaque cible touchée. Les cases Insecte qu\'il contrôle émettent une chaleur passive.' },
  'Feu+Psy':        { combat: 'Brûle les pensées directement. Ses Pressions Mentales sont accompagnées d\'une chaleur psychique qui provoque des hallucinations thermiques. Les cibles voient tout s\'enflammer.', mod: 'Pression Mentale inflige également des dégâts Feu. Ses illusions se manifestent physiquement comme des flammes pendant 1 tour.' },
  'Feu+Fée':        { combat: 'Lumière solaire incarnée — ses sorts Fée brûlent d\'une intensité divine. Le Rayon de Lumière devient un Rayon Solaire qui carbonise. Ses Bénédictions réchauffent et renforcent.', mod: 'Rayon de Lumière devient Rayon Solaire (dégâts Feu + Fée). Ses zones Fée émettent une chaleur qui dissuade l\'approche ennemie.' },
  'Feu+Spectre':    { combat: 'Feu spectral qui traverse les résistances physiques. Ses flammes fantômes brûlent l\'énergie vitale directement, ignorant les armures. Seule la lumière Fée peut les éteindre.', mod: 'Ses sorts Feu ignorent 50% de l\'armure physique (dégâts spectraux). Peut traverser les murs via Passe-Muraille en laissant un sillage de feu spectral.' },
  'Feu+Gravité':    { combat: 'Crée des étoiles miniatures — concentre le feu sous pression gravitationnelle jusqu\'à la fusion nucléaire. Son Collapse Gravitationnel libère une explosion thermique dévastatrice.', mod: 'Ses Singularités attirent et concentrent le feu en leur centre. Collapse Gravitationnel déclenche une explosion thermique en plus des dégâts gravitationnels.' },
  'Feu+Combat':     { combat: 'Arts martiaux enflammés — chaque coup de poing libère une onde de choc thermique. Sa Tempête de Coups est une tempête de feu littérale. Le corps-à-corps avec lui est suicidaire.', mod: 'Ses attaques physiques infligent des dégâts Feu supplémentaires. Berserker en mode Feu double ses dégâts élémentaires au lieu de ses dégâts physiques.' },
  'Feu+Normal':     { combat: 'La braise ordinaire — utilise le feu de manière parfaitement calibrée, sans excès. Sa Frappe Brute enflammée est précise là où les autres brûlent aveuglément. Jamais de collatéral.', mod: 'Frappe Brute inflige des dégâts Feu calibrés (ni trop, ni pas assez). Ses sorts Feu ne créent pas de zones persistantes — efficacité pure, pas de décor.' },
  'Eau+Glace':      { combat: 'Maître de l\'eau sous toutes ses formes. Crée des ponts de glace sur ses canaux d\'eau, piège les ennemis entre état liquide et solide. La température de son terrain est une arme.', mod: 'Peut geler instantanément ses propres cases Eau en cases Glace. Ses sorts Eau dans les zones Glace ont des effets de ralentissement doublés.' },
  'Eau+Electrique': { combat: 'Génère des zones d\'électrocution massive. Chaque case Eau qu\'il crée devient un conducteur potentiel. Une seule décharge peut électrocuter toute une formation ennemie connectée par l\'eau.', mod: 'Ses cases Eau propagent automatiquement ses sorts Electrique à toutes les cases Eau connectées. Arc Électrique à portée infinie dans les zones d\'eau.' },
  'Eau+Plante':     { combat: 'Fait pousser des créatures aquatiques-végétales. Ses Murs de Ronces poussent depuis le fond des canaux. La zone qu\'il contrôle devient une jungle aquatique impénétrable.', mod: 'Ses cases Eau font pousser des Ronces gratuitement. Ses sorts Plante ont des effets doublés dans les zones inondées.' },
  'Eau+Sol':        { combat: 'Crée de la boue comme terrain de contrôle. Les cases boueux ralentissent et piègent. Ses Fossés se remplissent d\'eau. La carte devient un marécage dont lui seul profite.', mod: 'Ses cases Sol inondées créent des zones de boue (ralentissement 50%). Ses sorts Eau dans les zones Sol ont des effets de zone doublés.' },
  'Eau+Roche':      { combat: 'Érosion accélérée — son eau dissout la roche ennemie. Ses Colonnes Rocheuses s\'effondrent quand il les inonde. Crée des formations sous-marines comme positions défensives.', mod: 'Peut inonder les cases Roche pour les fragiliser (résistance -30%). Ses sorts Eau ignorent les Fortifications ennemies.' },
  'Eau+Vent':       { combat: 'Tempête marine. Ses Rafales propulsent de l\'eau à haute vélocité. Le terrain devient une zone de vent et de marée impossible à traverser en ligne droite.', mod: 'Ses sorts Vent dans les zones d\'eau créent des vagues de knockback. Vortex combiné Eau/Vent a une portée de zone doublée.' },
  'Eau+Dragon':     { combat: 'Dragon aquatique primordial. Son Souffle Élémentaire est un jet d\'eau à pression létale. Dans ses zones d\'eau, ses capacités draconiennes sont augmentées d\'un tier.', mod: 'Souffle Élémentaire dans les zones Eau a portée et dégâts doublés. Ses Écailles absorbent les dégâts Eau et Feu simultanément.' },
  'Eau+Insecte':    { combat: 'Dirige des colonies de scarabées aquatiques. Son Essaim nage dans ses canaux et attaque depuis sous l\'eau. L\'infestation de ses zones est aussi sous-marine.', mod: 'Son Essaim peut se déplacer dans les cases Eau à vitesse doublée. Infestation dans les zones d\'eau se propage automatiquement.' },
  'Eau+Psy':        { combat: 'Maîtrise les courants de pensée comme des courants d\'eau. Ses illusions semblent noyées, flottantes. Ses Swaps télékinétiques s\'effectuent via des jets d\'eau dirigés mentalement.', mod: 'Swap peut s\'effectuer à travers les cases Eau sans ligne de vue directe. Ses illusions durent plus longtemps dans les zones d\'eau.' },
  'Eau+Ténèbres':   { combat: 'Eau noire et profonde — ses zones aquatiques sont enveloppées d\'obscurité. Personne ne peut voir sous la surface de ses Inondations. Il combat depuis les profondeurs obscures.', mod: 'Les zones Eau qu\'il contrôle sont considérées comme zones Ténèbres pour ses sorts. Voile d\'Ombre peut être déployé sous la surface de ses canaux.' },
  'Eau+Fée':        { combat: 'Eau bénite aux propriétés de guérison amplifiées. Ses zones d\'eau soignent passivement les alliés qui les traversent. Vague Sacrée lancée depuis ses canaux a une portée doublée.', mod: 'Les alliés dans ses zones d\'eau reçoivent un Aura de Soin passif. Ses sorts Eau alliés ont des effets de régénération supplémentaires.' },
  'Eau+Poison':     { combat: 'Empoisonne les nappes phréatiques. Son eau est toxique pour les ennemis, thérapeutique pour lui. La zone inondée devient un marécage pestilentiel ingérable.', mod: 'Ses cases Eau infligent passivement Venin Paralytique aux ennemis stationnaires. Nécrose se propage automatiquement dans ses zones d\'eau.' },
  'Eau+Spectre':    { combat: 'Noyade spectrale — ses eaux sont hantées. Les ennemis dans ses zones aquatiques entendent des voix et voient des apparitions. Ses fantômes nagent dans ses Inondations.', mod: 'Ses cases Eau sont également des zones Spectre. Passe-Muraille peut traverser les surfaces d\'eau sans déclencher ses propres effets.' },
  'Eau+Gravité':    { combat: 'Maîtrise la pression aquatique. Ses zones d\'eau sous haute pression gravitationnelle écrasent les ennemis au fond. Singularité en zone d\'eau crée un tourbillon centrifuge.', mod: 'Haute Gravité dans ses zones d\'eau crée une pression d\'écrasement doublée. Attraction et Répulsion opèrent avec une portée doublée dans ses zones aquatiques.' },
  'Eau+Combat':     { combat: 'Arts martiaux aquatiques — nage et frappe en un seul mouvement fluide. Ses Charges traversent ses propres zones d\'eau sans ralentissement. Submission depuis l\'eau est inescapable.', mod: 'Ses techniques de Combat peuvent être lancées depuis les zones d\'eau sans pénalité. Course dans l\'eau est aussi rapide que sur terre.' },
  'Eau+Normal':     { combat: 'Maîtrise pratique de l\'eau — pas de spectacle, juste de l\'efficacité. Utilise l\'eau comme outil tactique : bloquer, canaliser, inonder. Aucun gaspillage d\'énergie élémentaire.', mod: 'Ses sorts Eau consomment 30% moins de ressources. Canal d\'eau peut être créé en forme libre (pas seulement en ligne droite).' },
  'Glace+Electrique':{ combat: 'Crée des supraconducteurs de glace. La glace à -270°C conduit l\'électricité à l\'infini. Une seule décharge dans ses zones gelées touche tout ce qui est sur la glace simultanément.', mod: 'Ses cases Glace conduisent automatiquement ses sorts Electrique sans perte. Arc Électrique dans les zones Glace frappe tous les ennemis sur la glace.' },
  'Glace+Plante':   { combat: 'Fige les plantes comme des sculptures de cristal. Ses ronces gelées sont plus tranchantes que l\'acier. Le terrain qu\'il crée est une tundra de lames de glace végétale.', mod: 'Ses cases Plante peuvent être gelées instantanément (ronces de glace — dégâts Glace+Plante). Les ronces gelées sont permanentes.' },
  'Glace+Sol':      { combat: 'Crée du permafrost — gèle le sol à des profondeurs impossibles. Ses cases Sol gelées empêchent tout creusement ou tunnel. Séisme dans ses zones gelées crée une fracture de glace.', mod: 'Ses cases Sol sont automatiquement gelées en surface (ralentissement +30%). Soulèvement propulse des stalagmites de glace.' },
  'Glace+Roche':    { combat: 'Crée de la glace rocheuse — des formations cristallines à mi-chemin entre la pierre et la glace. Ses Colonnes Rocheuses sont des stalactites de glace indestructibles.', mod: 'Ses Boucliers de Pierre sont faits de glace renforcée (résistance doublée). Ses cases Roche gelées ne peuvent pas être détruites par les sorts de chaleur.' },
  'Glace+Vent':     { combat: 'Blizzard permanent — son Vent est un vent du nord glacial. Ses Rafales portent des projectiles de glace. La température de ses zones de Vent baisse progressivement au fil des tours.', mod: 'Ses sorts Vent dans les zones de Glace infligent des dégâts Glace supplémentaires. Cyclone de glace ralentit les ennemis à 20% de vitesse.' },
  'Glace+Dragon':   { combat: 'Dragon des glaces ancestral. Son Souffle est une tornade givrante qui cristallise instantanément. Sur ses cases de glace, ses griffes se transforment en lames de cristal.', mod: 'Souffle Élémentaire gèle les cases touchées. Ses Écailles de glace réfléchissent 20% des sorts de projectile.' },
  'Glace+Insecte':  { combat: 'Réserve ses insectes dans la glace entre les assauts — libérés, ils surgissent déjà en position. Ses colonies hibernantes peuvent être lancées comme projectiles de glace biologique.', mod: 'Peut geler son Essaim pour le stocker (invulnérable) et le libérer au moment optimal. Les insectes gelés-libérés ont des dégâts doublés au premier tour.' },
  'Glace+Psy':      { combat: 'Gèle les pensées. Ses Cages Psychiques sont des cristaux de glace mentale. Les ennemis gelés psychiquement ne peuvent pas lancer de sorts. La confusion devient un froid intérieur.', mod: 'Cage Psychique gèle également physiquement la cible pendant 1 tour. Confusion Massive génère un froid psychique — cibles immobiles pendant 2 tours.' },
  'Glace+Ténèbres': { combat: 'Froid des ombres. Ses ténèbres ont une température en dessous du zéro absolu. Les ennemis dans ses zones obscures se refroidissent progressivement jusqu\'à la paralysie.', mod: 'Ses zones Ténèbres infligent des dégâts Glace passifs. Nuit Absolue avec composante Glace gèle tous les ennemis visibles 1 tour.' },
  'Glace+Fée':      { combat: 'Lumière arctique — ses sorts de lumière Fée refractent la glace en prismes d\'énergie. Ses Barrières de Lumière sont des murs de cristal translucide indestructibles.', mod: 'Ses Barrières de Lumière sont en cristal de glace (résistance doublée). Rayon de Lumière dans les zones de glace se réfracte en plusieurs angles.' },
  'Glace+Poison':   { combat: 'Conserve ses toxines dans la glace pour les libérer à température contrôlée. Ses zones gelées empoisonnées libèrent les toxines quand elles fondent sous l\'effet de la chaleur ennemie.', mod: 'Ses cases Glace contiennent du Venin en réserve — libéré si la glace fond. Brouillard Corrosif peut être gelé pour créer des nuages de glace toxique.' },
  'Glace+Spectre':  { combat: 'Fantômes du Grand Hiver. Ses spectres sont liés à ses cases de glace et surgissent du sol gelé. La glace spectrale est permanente et traversable uniquement par lui.', mod: 'Son Armée des Morts surgit depuis ses cases de glace. Passe-Muraille ne peut traverser que les cases de glace — vitesse de traversée instantanée.' },
  'Glace+Gravité':  { combat: 'Crée des astéroïdes de glace et les fait tomber via gravité. Collapse Gravitationnel dans une zone gelée crée une compression de glace explosive.', mod: 'Ses Singularités créent des sphères de glace orbitales. Collapse Gravitationnel dans ses zones de glace inflige des dégâts Glace×2.' },
  'Glace+Combat':   { combat: 'Frappe avec des poings de glace. Ses techniques martiales refroidissent les points d\'impact. La Tempête de Coups avec ses gants de glace fige progressivement la cible.', mod: 'Ses attaques physiques infligent Ralentissement progressif. Après 3 frappes consécutives, la cible est gelée 1 tour.' },
  'Glace+Normal':   { combat: 'Utilise la glace avec une économie parfaite. Chaque case créée a un but précis — pas de décor, pas de gaspillage. La toundra qu\'il crée est fonctionnelle et létale.', mod: 'Ses cases de glace durent 50% plus longtemps. Ses sorts Glace consomment 25% moins de ressources (efficacité normale).' },
  'Electrique+Plante':{ combat: 'Végétaux bioélectriques. Ses plantes conduisent l\'électricité naturellement. Mur de Ronces électrifié. Ses lianes servent de câbles conducteurs entre ses générateurs naturels.', mod: 'Ses cases Plante conduisent ses sorts Electrique. Jungle Primordiale génère de l\'électricité statique — cases Electrique gratuites autour des plantes.' },
  'Electrique+Sol':  { combat: 'Injecte de l\'électricité dans le sol. Ses décharges se propagent dans la terre et surgissent sous les pieds des ennemis dans un rayon de 3 cases. Le sol conducteur devient un piège.', mod: 'Ses sorts Electrique lancés dans les cases Sol se propagent à toutes les cases Sol adjacentes. Secousse génère une décharge électrique simultanée.' },
  'Electrique+Roche':{ combat: 'Crée des cristaux de quartz piézoélectriques. Ses Colonnes Rocheuses génèrent de l\'électricité sous pression. Plus ses rochers sont frappés, plus ils déchargent.', mod: 'Ses cases Roche stockent de l\'énergie électrique — libérée quand détruites. Ses sorts Electrique renforcent ses structures rocheuses au lieu de les endommager.' },
  'Electrique+Vent': { combat: 'Tempête d\'éclairs. Ses Vortex aspirent les éclairs. Le Cyclone électrique qu\'il crée est le sort de zone le plus dévastateur du game. Courant Dirigé amplifié devient inarrêtable.', mod: 'Ses sorts Electrique lancés dans ses zones Vent ont portée doublée. Cyclone Électrique : Vortex+Tempête de Foudre combinés.' },
  'Electrique+Dragon':{ combat: 'Dragon foudre — l\'élément du Dieu Dragon du Tonnerre. Son Souffle est une tempête d\'éclairs. Sur ses cases Electrique, ses capacités draconiennes s\'électrifient entièrement.', mod: 'Souffle Élémentaire déclenche une Tempête Statique sur les cases touchées. Ses Écailles conduisent l\'électricité — immunisé aux sorts Electrique, décharge à l\'impact.' },
  'Electrique+Insecte':{ combat: 'Ses insectes transportent des charges électrostatiques. Chaque piqûre décharge. Essaim Électrique : les insectes forment un nuage conducteur qui électrocute tout ce qu\'il touche.', mod: 'Chaque piqûre de son Essaim inflige des dégâts Electrique supplémentaires. Infestation dans les zones Electrique propage les décharges entre cibles infectées.' },
  'Electrique+Psy':  { combat: 'Hacking mental via les synapses. Ses décharges psycho-électriques court-circuitent littéralement les cerveaux. Domination via l\'électricité neuronale — inarrêtable et précise.', mod: 'Court-Circuit peut s\'appliquer aux capacités mentales (neutralise les sorts Psy). Domination via impulsion électroneurale dure 1 tour supplémentaire.' },
  'Electrique+Ténèbres':{ combat: 'Éclairs sombres — son électricité est noire et absorbe la lumière. Ses décharges de ténèbres drainent l\'énergie plutôt que de brûler. Le Drain électrique épuise instantanément.', mod: 'Ses sorts Electrique draient également des ressources en plus des dégâts. Nuit Absolue + Tempête de Foudre : combo dévastateur qui combine les deux ultimes.' },
  'Electrique+Fée':  { combat: 'Lumière-éclair — ses sorts de lumière Fée sont des éclairs concentrés de photons. Rayon de Lumière à la vitesse de l\'éclair, avec les dégâts d\'un éclair.', mod: 'Rayon de Lumière inflige également des dégâts Electrique. Ses Bénédictions transmettent une immunité temporaire aux dégâts Electrique.' },
  'Electrique+Poison':{ combat: 'Électrophorèse toxique — l\'électricité accélère la propagation du poison dans l\'organisme. Une seule décharge charge le système nerveux de toxines. Épidémie électrisée est instoppable.', mod: 'Ses sorts Electrique infligent également Venin. EMP dans les zones empoisonnées accélère la progression de toutes les toxines actives.' },
  'Electrique+Spectre':{ combat: 'Éclairs spectraux — son électricité traverse les corps physiques pour frapper l\'énergie vitale directement. Les morts ne résistent pas à l\'électricité spectrale.', mod: 'Ses sorts Electrique ignorent 40% de l\'armure physique (composante spectrale). Ses zombies de l\'Armée des Morts reçoivent des buffs électriques et dégâts +50%.' },
  'Electrique+Gravité':{ combat: 'Crée un champ électromagnétique gravitationnel. Ses Singularités génèrent des éclairs centripètes. Les ennemis attirés sont électrocutés à l\'impact.', mod: 'Singularité déclenche un arc électrique sur chaque ennemi attiré. Ses champs gravitationnels et électriques s\'amplifient mutuellement — dégâts exponentiels.' },
  'Electrique+Combat':{ combat: 'Poings d\'éclairs. Chaque frappe martiale libère une décharge. Tempête de Coups électrisée frappe 2× — une fois physiquement, une fois électriquement. Berserker Électrique est cataclysmique.', mod: 'Ses attaques physiques libèrent des arcs électriques sur les cibles adjacentes. En mode Berserker, ses décharges touchent toutes les cibles dans un rayon de 2.' },
  'Electrique+Normal':{ combat: 'Utilise l\'électricité avec une précision chirurgicale. Chaque joule a un but. Sa Frappe Brute est suivie d\'une décharge calibrée. Jamais de gaspillage d\'énergie.', mod: 'Ses sorts Electrique consomment 25% moins de ressources. Neutralisation peut court-circuiter temporairement les capacités élémentaires d\'une cible.' },
  'Plante+Sol':     { combat: 'Contrôle les racines souterraines. Ses Vrilles surgissent depuis les cases Sol sans prévenir. Le terrain qu\'il contrôle a des racines partout — s\'arrêter 1 tour = être piégé.', mod: 'Ses sorts Plante opèrent depuis les cases Sol adjacentes (racines souterraines). Ses cases Sol se couvrent de Vrilles après 2 tours.' },
  'Plante+Roche':   { combat: 'Crée des formations lithophytes — plantes qui poussent dans la roche et la disloquent. Ses Colonnes Rocheuses sont recouvertes de ronces. La défense végétale-minérale est impénétrable.', mod: 'Ses Murs de Ronces sont en ronces-roche (résistance doublée). Ses cases Plante sur Roche sont permanentes et indestructibles sauf par le Feu.' },
  'Plante+Vent':    { combat: 'Pollen de combat — son Vent disperse des spores paralysantes dans toute la carte. Le vent dans ses zones de plantes devient un vecteur de contamination biologique.', mod: 'Ses Spores sont dispersées à portée doublée par son Vent. Ses sorts Vent dans les zones Plante génèrent automatiquement un nuage de Spores.' },
  'Plante+Dragon':  { combat: 'Dragon de la Jungle — les forêts primordiales l\'obéissent. Son Vol Draconique au-dessus de ses zones végétales réveille les plantes dormantes. La Jungle Primordiale abrite son dragon.', mod: 'Vol Draconique fait pousser instantanément des Plantes sous son passage. Rugissement fait pousser une Forêt Instantanée dans la zone d\'effet.' },
  'Plante+Insecte': { combat: 'Jardinier de la mort — plantes et insectes cohabitent en symbiose mortelle. Ses plantes sont infestées de ses insectes. L\'infestation de terrain est quasi-impossible à nettoyer.', mod: 'Chaque case Plante est automatiquement infestée par son Essaim. Ses insectes fertilisent ses plantes — les Forêts Instantanées poussent en 1 tour.' },
  'Plante+Psy':     { combat: 'Neurologie végétale — ses plantes sont conscientes et répondent à ses intentions mentales. Il les guide télékinétiquement. Ses lianes attaquent avec l\'intelligence d\'un combattant.', mod: 'Peut contrôler ses Plantes télékinétiquement à distance. Domination peut s\'appliquer aux adversaires dans ses zones végétales (terreur sylvestre).' },
  'Plante+Ténèbres':{ combat: 'Végétation de l\'ombre — ses plantes poussent sans lumière dans les ténèbres. La jungle sombre qu\'il crée est impénétrable et son intérieur est toujours en Nuit Absolue.', mod: 'Ses zones Plante comptent comme zones Ténèbres pour ses sorts. Forêt Instantanée génère automatiquement Voile d\'Ombre à l\'intérieur.' },
  'Plante+Fée':     { combat: 'Jardin enchanté — ses plantes portent des propriétés magiques Fée. Ses fleurs guérissent. Ses ronces bénissent autant qu\'elles blessent. La Jungle Primordiale est un sanctuaire.', mod: 'Ses cases Plante diffusent Aura de Soin aux alliés. Forêt Instantanée crée automatiquement un Sanctuaire à son centre.' },
  'Plante+Poison':  { combat: 'Végétaux vénéneux — chaque plante qu\'il crée est naturellement toxique. Ses ronces empoisonnent au contact. La Jungle Primordiale est une zone de mort biologique totale.', mod: 'Toutes ses cases Plante infligent Venin Paralytique aux ennemis qui s\'y arrêtent. Forêt Instantanée déclenche Épidémie automatiquement à la pousse.' },
  'Plante+Spectre': { combat: 'Arbres hantés — ses plantes sont habitées par des esprits. Ses lianes sont des bras de fantômes. La Jungle Primordiale est une forêt de spectres végétaux.', mod: 'Ses cases Plante abritent des spectres qui attaquent les ennemis. Passe-Muraille opère uniquement à travers ses cases Plante (racines comme portails).' },
  'Plante+Gravité': { combat: 'Racines gravitationnelles — ses plantes poussent vers le bas, vers le haut, partout où la gravité le dirige. Ses lianes servent d\'Attraction gravitationnelle. Jungle en apesanteur.', mod: 'Ses Vrilles peuvent Attirer les ennemis. Ses plantes poussent dans n\'importe quelle direction gravitationnelle — y compris au plafond.' },
  'Plante+Combat':  { combat: 'Karaté de la forêt — ses bras sont des ronces, ses coups sont des fouets de lianes. Corps-à-corps avec lui dans sa jungle est un suicide assisté par la végétation.', mod: 'Ses attaques physiques utilisent ses lianes comme extensions — portée de mêlée +2 cases. Tempête de Coups dans ses zones Plante déclenche Mur de Ronces autour des cibles.' },
  'Plante+Normal':  { combat: 'Agriculture de combat — utilise les plantes avec la rationalité d\'un fermier et l\'efficacité d\'un soldat. Chaque plante créée a une fonction défensive ou offensive précise.', mod: 'Ses cases Plante persistent sans coût de maintenance. Ses sorts Plante consomment 20% moins de ressources.' },
  'Sol+Roche':      { combat: 'Géologie vivante — contrôle le sous-sol complet. Ses Soulèvements propulsent des Colonnes Rocheuses. Le terrain est un instrument entre ses mains — montagnes sur demande.', mod: 'Soulèvement peut créer directement des Colonnes Rocheuses. Séisme dans ses zones Roche détruit les défenses ennemies instantanément.' },
  'Sol+Vent':       { combat: 'Tempête de sable. Son Vent dans les zones Sol crée des nuées abrasives. Le visibility est nulle dans sa tempête de terre. Ses ennemis combattent à l\'aveugle dans sa tornage.', mod: 'Ses sorts Vent dans les zones Sol créent des tempêtes de sable (vision ennemie -50%). Ses cases Sol sont mobiles — portées par son Vent.' },
  'Sol+Dragon':     { combat: 'Dragon des profondeurs — vit sous terre. Son Souffle creuse des tunnels. Sur ses cases Sol, il peut surgir de n\'importe où comme du sol lui-même. Le sol est son ocean.', mod: 'Tunnel peut être activé instantanément depuis n\'importe quelle case Sol. Vol Draconique peut être remplacé par Plongée Souterraine à la même vitesse.' },
  'Sol+Insecte':    { combat: 'Maître des fourmilières de combat. Ses insectes creusent et surgissent de ses cases Sol. Chaque case Sol est une entrée potentielle de colonie. Le sol bouge sous les pieds ennemis.', mod: 'Ses insectes peuvent Tunneler gratuitement. Ses cases Sol cachent des colonies — une fois par tour, surgissent des insectes d\'une case Sol aléatoire.' },
  'Sol+Psy':        { combat: 'Psychokinésie de la terre — déplace mentalement des masses géologiques. Ses Soulèvements sont silencieux (pas d\'avertissement). Le sol répond à ses pensées avant ses gestes.', mod: 'Ses sorts Sol peuvent être lancés sans ligne de vue (perception souterraine). Soulèvement ne déclenche aucun avertissement sonore ou visuel.' },
  'Sol+Ténèbres':   { combat: 'Terrain souterrain obscur. Ses tunnels sont dans des ténèbres totales. Il combat depuis sous terre en attaquant vers le haut. Ses zones Sol sont des zones de ténèbres naturelles.', mod: 'Ses Tunnels créent des zones Ténèbres permanentes. Peut attaquer depuis le sous-sol vers le haut (portée +1 case vers le haut).' },
  'Sol+Fée':        { combat: 'Cristaux de lumière souterrains — ses cases Sol cachent des gemmes qui illuminent. Ses Soulèvements propulsent des cristaux de Fée. Le sol est une mine de lumière enchantée.', mod: 'Ses cases Sol libèrent des éclats de Lumière Fée quand creusées. Soulèvement propulse un Rayon de Lumière en plus des rochers.' },
  'Sol+Poison':     { combat: 'Contamination du sous-sol. Ses tunnels transportent des gaz toxiques. Ses cases Sol libèrent du Brouillard Corrosif à chaque Soulèvement. Le terrain lui-même empoisonne.', mod: 'Ses cases Sol libèrent Brouillard Corrosif quand piétinées par des ennemis. Tunnel dépose un Terrain Contaminé à chaque extrémité.' },
  'Sol+Spectre':    { combat: 'Fantômes souterrains — ses spectres habitent le sous-sol et surgissent depuis ses cases Sol. Passe-Muraille opère via le sol plutôt que les murs. Il hante la géologie.', mod: 'Passe-Muraille peut traverser les cases Sol (sous terre). Ses Spectres surgissent depuis ses Tunnels — positionnement parfait garanti.' },
  'Sol+Gravité':    { combat: 'Augmente la gravité du sol pour créer des zones d\'effondrement. Ses Soulèvements profitent de la gravité augmentée pour des impacts dévastateurs. Le sol s\'effondre sous les ennemis.', mod: 'Haute Gravité dans ses zones Sol crée des Affaissements automatiques. Ses Soulèvements sous haute gravité ont des dégâts doublés.' },
  'Sol+Combat':     { combat: 'Boxeur de la terre — frappe depuis le sol, envoie des uppercuts géologiques. Ses Charges passent sous terre et surgissent sous les pieds de la cible. Combat en deux dimensions.', mod: 'Charge peut passer sous terre (non-stoppable par les obstacles). Ses frappes depuis le sous-sol infligent des dégâts de Soulèvement en plus.' },
  'Sol+Normal':     { combat: 'Ingénieur du terrain. Modifie le sol avec une précision architecturale — fossés défensifs, murs, élévations stratégiques. Pas de magie superflue, juste du génie civil de combat.', mod: 'Ses modifications de terrain durent 50% plus longtemps. Ses cases Sol peuvent être configurées en avance et activées à distance.' },
  'Roche+Vent':     { combat: 'Balliste naturelle — utilise le Vent pour propulser ses rochers à des vitesses de projectile. Ses Cyclones transportent des débris rocheux. La tempête de pierre qu\'il déclenche est une pluie de météores.', mod: 'Projection Rocheuse a portée doublée avec le Vent comme vecteur. Cyclone de rochers frappe toutes les cibles dans son rayon.' },
  'Roche+Dragon':   { combat: 'Dragon de basalte — son Souffle génère de la lave solidifiée instantanément. Ses formations rocheuses sont d\'origine volcanique. Sur ses cases Roche, il est aussi indestructible que la montagne.', mod: 'Souffle Élémentaire crée des cases Roche/lave sur son trajet. Ses Écailles sont de basalte — résistance aux dégâts physiques doublée.' },
  'Roche+Insecte':  { combat: 'Insectes lithophages — ses scarabées mangent la roche et la remodèlent. Ses formations rocheuses sont percées de tunnels d\'insectes. Le rocher vivant est sa forteresse bio-minérale.', mod: 'Son Essaim peut détruire des cases Roche ennemies. Ses insectes construisent ses Colonnes Rocheuses en 1 tour (sans coût de sort).' },
  'Roche+Psy':      { combat: 'Télékinésie géologique — déplace des masses rocheuses mentalement. Ses Colonnes surgissent de nulle part sous commande mentale. La montagne obéit à sa pensée.', mod: 'Ses sorts Roche peuvent être lancés silencieusement (sans animation). Peut contrôler les Colonnes de loin via télékinésie (portée +5 cases).' },
  'Roche+Ténèbres': { combat: 'Pierre des ombres — ses formations rocheuses sont noires et absorbent la lumière. Ses cases Roche sont des zones de ténèbres. Son Labyrinthe Noir est impossible à cartographier pour les ennemis.', mod: 'Ses cases Roche génèrent des zones Ténèbres. Labyrinthe de Pierre Noire : les ennemis à l\'intérieur perdent le sens de l\'orientation.' },
  'Roche+Fée':      { combat: 'Pierre enchantée — ses formations rocheuses brillent de magie Fée. Ses Colonnes émettent de la lumière. Sa Fortification est bénite — les alliés derrière elle régénèrent.', mod: 'Ses cases Roche diffusent Aura de Soin léger. Fortification enchatée : les alliés à l\'intérieur régénèrent 5% de PV par tour.' },
  'Roche+Poison':   { combat: 'Minéraux toxiques — ses formations rocheuses libèrent des gaz soufrés. Ses Colonnes empoisonnent l\'atmosphère autour d\'elles. Son Labyrinthe est une chambre à gaz naturelle.', mod: 'Ses cases Roche libèrent Brouillard Corrosif en zone. Son Labyrinthe génère Épidémie passive pour tous les ennemis à l\'intérieur.' },
  'Roche+Spectre':  { combat: 'Pierre hantée — ses formations rocheuses abritent des spectres. Ses Colonnes sont des portails emprisonnés. Le Labyrinthe de Pierre cache une Dimension Spectrale complète.', mod: 'Ses cases Roche permettent l\'émergence de Spectres alliés. Son Labyrinthe est simultanément une Dimension Spectrale.' },
  'Roche+Gravité':  { combat: 'Géologie gravitationnelle — ses rochers obéissent à sa maîtrise de la masse. Ses Colonnes s\'effondrent sur commande en Écrasements. Ses Formations Rocheuses créent des anomalies de gravité.', mod: 'Ses Colonnes peuvent être activées en Écrasement gravitationnel. Formation Rocheuse crée une zone de Haute Gravité permanente.' },
  'Roche+Combat':   { combat: 'Pugilat de granit — ses coups intègrent des impacts rocheux. La Tempête de Coups avec ses poings de pierre fracture armures et os. Brise-Bouclier brise littéralement le bouclier.', mod: 'Ses attaques physiques génèrent des fragments rocheux (dégâts de zone). Brise-Bouclier détruit définitivement l\'armure de la cible.' },
  'Roche+Normal':   { combat: 'Construction militaire — édifie des fortifications précises et durables. Ses Murs de Pierre sont des constructions architecturales réelles. Le terrain qu\'il crée dure au-delà du combat.', mod: 'Ses formations rocheuses sont permanentes (ne disparaissent pas en fin de combat). Fortification peut être posée en dehors du combat pour préparer un champ de bataille.' },
  'Vent+Dragon':    { combat: 'Dragon du Ciel — vole en permanence. Son Souffle est une tornade d\'énergie draconique. Dans ses zones de Vent, il est inarrêtable et inaccessible depuis le sol.', mod: 'Vol Draconique est permanent — ne coûte pas d\'action. Son Souffle déclenche un Cyclone sur le trajet.' },
  'Vent+Insecte':   { combat: 'Nuage de vent et d\'insectes — son Essaim est porté par ses Rafales sur toute la carte. Les insectes en vol sont aussi rapides que son Vent. Impossible à localiser.', mod: 'Son Essaim se déplace via ses cases Vent sans coût de mouvement. Rafale propulse les insectes vers la cible (portée doublée).' },
  'Vent+Psy':       { combat: 'Voix dans le vent — ses Pressions Mentales arrivent de toutes les directions via le vent. Les ennemis ne savent pas d\'où vient la confusion. Les sons dans ses zones de vent sont ses armes.', mod: 'Ses sorts Psy s\'appliquent à toutes les cibles dans ses zones de Vent. Hantise Mentale : la confusion se propage d\'une cible à l\'autre via le vent.' },
  'Vent+Ténèbres':  { combat: 'Vent des ombres — invisible même au mouvement. Ses Rafales ne font aucun son. Son Cyclone obscur aspire la lumière autour de lui. Se déplace à la vitesse du vent dans les ténèbres.', mod: 'Ses zones Vent génèrent des zones Ténèbres. Se déplacer dans ses zones de Vent/Ténèbres le rend invisible.' },
  'Vent+Fée':       { combat: 'Vents bénis — ses Rafales transportent Bénédictions et soins. Ses alliés dans ses zones de Vent reçoivent des buffs à chaque déplacement. Le souffle divin de ses zones est thérapeutique.', mod: 'Ses zones Vent diffusent Bénédiction passive aux alliés en mouvement. Vague Sacrée lancée depuis ses zones de Vent a portée triplée.' },
  'Vent+Poison':    { combat: 'Vent toxique — disperse le Brouillard Corrosif sur toute la carte via ses courants d\'air. Son Cyclone de poison envahit toutes les zones adjacentes. Le vent lui-même empoisonne.', mod: 'Brouillard Corrosif se propage automatiquement dans ses zones de Vent. Son Cyclone distribue le Venin Paralytique à portée maximale.' },
  'Vent+Spectre':   { combat: 'Fantômes du vent — ses spectres voyagent dans ses courants aériens. Passe-Muraille via le vent à la vitesse du vent. Les zones Vent abritent des spectres invisibles.', mod: 'Passe-Muraille dans ses zones de Vent coûte 0 action. Ses Spectres se déplacent à vitesse de vent (double les déplacements normaux).' },
  'Vent+Gravité':   { combat: 'Contra-gravité — son Vent et sa Gravité s\'opposent pour créer des zones de lévitation. Les ennemis dans ses zones sont désaxés — ni le sol ni l\'air ne les supportent normalement.', mod: 'Peut créer des zones de lévitation forcée (ennemis en apesanteur = faciles à cibler). Ses sorts Vent et Gravité se combinent en effets hybrides imprévisibles.' },
  'Vent+Combat':    { combat: 'Arts martiaux aériens — frappe depuis les airs, toujours en mouvement. Ses Charges sont des plongées depuis les airs. Tempête de Coups en vol frappe en cercle complet.', mod: 'Peut attaquer depuis les zones aériennes (cases Vent de niveau supérieur). Charge depuis les airs inflige des dégâts doublés (vélocité).' },
  'Vent+Normal':    { combat: 'Vent fonctionnel — utilise les courants aériens pour des effets pratiques. Course assistée par le vent. Ses Rafales sont précises et chirurgicales, jamais catastrophiques.', mod: 'Course dans ses zones de Vent est gratuite (porté par les courants). Ses sorts Vent consomment 30% moins d\'énergie.' },
  'Dragon+Insecte': { combat: 'Dragon des Fourmilières — commande des légions d\'insectes géants. Son Essaim est constitué d\'insectes draconiques. Son Rugissement lance une charge d\'insectes géants.', mod: 'Son Essaim est constitué d\'insectes draconiques (résistants et puissants). Rugissement libère une Reine des Essaims draconique supplémentaire.' },
  'Dragon+Psy':     { combat: 'Dragon omniscient — sa conscience draconique et sa télékinésie couvrent tout le champ de bataille. Ses Rugissements sont des attaques psychiques autant que physiques.', mod: 'Rugissement applique Confusion Massive en plus des dégâts. Sa Fureur Ancienne a une composante psychique — tous les ennemis en vue sont affectés.' },
  'Dragon+Ténèbres':{ combat: 'Dragon des abysses — vit dans les ténèbres les plus profondes. Son Souffle éteint la lumière au lieu d\'en créer. Sur ses cases Ténèbres, il est invisible même à taille draconique.', mod: 'Ses cases Ténèbres amplifient ses sorts Dragon. Vol Draconique dans les zones Ténèbres est silencieux et invisible.' },
  'Dragon+Fée':     { combat: 'Dragon de lumière — son Souffle Élémentaire est un rayon de lumière pure. Ses Écailles réfléchissent les sorts. La lumière de sa présence guérit ses alliés alentour.', mod: 'Souffle Élémentaire inflige des dégâts Fée (lumière). Ses Écailles Partagées transmettent également l\'Aura de Soin de ses alliés Fée.' },
  'Dragon+Poison':  { combat: 'Dragon vénéneux — ses griffes sont baignées de venin draconique. Son Souffle empoisonne les cases touchées. La morsure draconique empoisonnée est létale en deux tours.', mod: 'Morsure applique Venin Paralytique draconique (résistance à l\'antidote). Souffle Élémentaire dépose Terrain Contaminé sur son trajet.' },
  'Dragon+Spectre': { combat: 'Dragon fantôme — partiellement incorporel. Ses Griffes traversent les armures. Son Vol Draconique le rend inciblable pendant le déplacement. Meurt-il vraiment ?', mod: 'Ses sorts Dragon peuvent être lancés depuis la forme spectrale (immunisé aux dégâts en transit). Vol Draconique active Passe-Muraille temporairement.' },
  'Dragon+Gravité': { combat: 'Dragon gravitationnel — son Vol courbe la réalité. Ses Rugissements créent des ondes gravitationnelles. Éveil du Prédateur dans une zone de Haute Gravité est inévitable.', mod: 'Vol Draconique crée des zones de Haute Gravité dans son sillage. Rugissement génère une onde de choc gravitationnelle.' },
  'Dragon+Combat':  { combat: 'Dragon guerrier — maîtrise le combat à mains nues à l\'échelle draconique. Ses Frappes des Griffes sont des techniques martiales codifiées. La Tempête de Coups et la Tempête de Griffes se confondent.', mod: 'Ses techniques martiales Combat s\'appliquent avec la puissance draconique (dégâts ×2). Frappe des Griffes est traitée comme Tempête de Coups.' },
  'Dragon+Normal':  { combat: 'Dragon pratique — utilise ses capacités draconiennes avec une économie remarquable. Pas de pyrotechnie superflue. Son Souffle est chirurgical. Son Vol est fonctionnel. Dévastateur.', mod: 'Ses sorts Dragon consomment 25% moins de ressources. Éveil du Prédateur dure 2 tours supplémentaires grâce à une gestion normale des ressources.' },
  'Insecte+Psy':    { combat: 'Ruche consciente — ses insectes ont une intelligence collective telepathique. Il dirige ses colonies mentalement sans effort. La Reine des Essaims partage sa conscience.', mod: 'Peut contrôler ses insectes télékinétiquement à portée infinie. Reine des Essaims partage ses sorts Psy sur ses cibles.' },
  'Insecte+Ténèbres':{ combat: 'Colonie de la nuit — ses insectes vivent dans les ténèbres et surgissent de l\'obscurité. Ses zones de ténèbres grouillent d\'insectes invisibles. L\'obscurité bouge et mord.', mod: 'Son Essaim est invisible dans les zones Ténèbres. Ses insectes dans les zones Ténèbres ont des dégâts doublés (surprise garantie).' },
  'Insecte+Fée':    { combat: 'Pollinisateurs enchantés — ses insectes transportent des bénédictions. Chaque piqûre peut guérir un allié ou blesser un ennemi selon son intention. L\'essaim bienveillant est redouté.', mod: 'Son Essaim peut être configuré en mode Soin (bénédictions) ou mode Attaque. Piqûre en mode Soin régénère les alliés au lieu de blesser.' },
  'Insecte+Poison': { combat: 'Maître de l\'infestation toxique. Ses insectes transportent des toxines mortelles. Chaque piqûre empoisonne. L\'Essaim de Mort — insectes+venin — est le sort de zone le plus dangereux.', mod: 'Chaque piqûre applique automatiquement Venin Paralytique maximal. Reine des Essaims libère une Pandémie à chaque invocation.' },
  'Insecte+Spectre':{ combat: 'Insectes morts — ses colonies sont spectrale, mortes mais actives. Ses insectes fantômes traversent les armures physiques. On ne peut pas écraser un insecte qui n\'est plus vivant.', mod: 'Son Essaim spectral ignore toutes les armures physiques. Ses insectes peuvent traverser les murs (Passe-Muraille d\'insecte).' },
  'Insecte+Gravité':{ combat: 'Essaim gravitationnel — ses insectes manipulent leur masse pour des impacts cataclysmiques. Mille insectes à masse doublée forment une frappe aussi lourde qu\'un Juggernaut.', mod: 'Son Essaim peut augmenter ou diminuer sa masse (impacts variables). Haute Gravité sur l\'Essaim crée un projectile de densité létale.' },
  'Insecte+Combat': { combat: 'Chorégraphie homme-insecte — ses coups de poing sont complétés par des piqûres d\'insectes. Il frappe, ses insectes concluent. La Tempête de Coups envoie simultanément ses insectes sur chaque cible.', mod: 'Chaque attaque physique libère un insecte sur la cible (piqûre garantie). Tempête de Coups libère l\'Essaim complet sur toutes les cibles frappées.' },
  'Insecte+Normal': { combat: 'Entomologiste pragmatique. Utilise ses insectes avec la précision d\'un scientifique. Chaque insecte a un rôle. Aucun gaspillage de colonie. Redoutable par la maîtrise, pas par la puissance.', mod: 'Ses insectes peuvent être rappelés et recyclés (0 coût de reproduction). Son Essaim ne diminue jamais — chaque insecte tué est remplacé instantanément.' },
  'Psy+Ténèbres':   { combat: 'Terreur psychique absolue. Ses ténèbres sont mentalement amplifiées — ceux qui les voient les ressentent comme infinies. Ses illusions dans les ténèbres deviennent réelles pour les cibles.', mod: 'Ses sorts Psy dans les zones Ténèbres ont des effets doublés. Terreur combinée Psy+Ténèbres est permanente jusqu\'à sa mort.' },
  'Psy+Fée':        { combat: 'Lumière mentale — ses sorts Fée guérissent les traumas psychiques. Ses sorts Psy peuvent être bienveillants ou malveillants. La frontière entre soin et manipulation est floue dans ses mains.', mod: 'Peut utiliser ses sorts Psy pour soigner les effets de statut mentaux. Bénédiction Fée double la durée de ses buffs psychiques.' },
  'Psy+Poison':     { combat: 'Empoisonnement psychosomatique — convainc les ennemis qu\'ils sont empoisonnés. Ses illusions toxiques ont des effets réels. La Pandémie psychique est pire que la Pandémie biologique.', mod: 'Ses illusions Psy génèrent les effets physiques correspondants. Hallucination de Venin = vrai venin pendant la durée de l\'illusion.' },
  'Psy+Spectre':    { combat: 'Frontière dissolution — entre le monde des vivants et des morts. Ses Portails sont mentaux. Ses Possessions sont psychiques — totales et permanentes. La mort est une perspective.', mod: 'Possession dure indéfiniment (jusqu\'à sa mort). Peut ouvrir des Portails mentaux sans ligne de vue directe (perception psychique).' },
  'Psy+Gravité':    { combat: 'Masse de la pensée — ses idées ont un poids gravitationnel. Ses Pressions Mentales créent de vraies Pressions physiques. Ses concepts télékinétiques sont des forces gravitationnelles.', mod: 'Pression Mentale génère une vraie Pression Gravitationnelle sur la cible. Ses sorts Psy et Gravité sont interchangeables dans leur effet.' },
  'Psy+Combat':     { combat: 'Anticipe chaque coup avant qu\'il parte. Ses arts martiaux sont guidés par la précognition. Il frappe où la cible sera dans 0.3 secondes. Impossible à toucher sans qu\'il le permette.', mod: 'Parade est automatique (précognition — ne coûte pas d\'action). Ses attaques physiques sont guidées psychiquement — ne ratent jamais.' },
  'Psy+Normal':     { combat: 'Maîtrise mentale sans drama — utilise sa télékinésie pour une efficacité maximale, sans spectacle. Ses influences psychiques sont subtiles et inarrêtables.', mod: 'Ses sorts Psy consomment 30% moins de ressources. Analyse est permanente — il connaît en permanence les intentions de tous les ennemis visibles.' },
  'Ténèbres+Fée':   { combat: 'Dualité absolue — lumière et ombre simultanées. Ses sorts Fée éclairent ses propres ténèbres créant des effets paradoxaux. Les ennemis dans ses zones ne savent pas s\'ils voient ou sont aveugles.', mod: 'Peut alterner lumière et ténèbres chaque tour dans la même zone. Les ennemis dans ses zones paradoxales ont leurs capacités aléatoirement actives ou désactivées.' },
  'Ténèbres+Poison':{ combat: 'La Corruption — l\'alliance la plus sombre du lore. Ses ténèbres transportent un poison qui ronge l\'âme autant que le corps. L\'empoisonnement dans ses zones ne se soigne pas normalement.', mod: 'Ses toxines dans les zones Ténèbres sont résistantes à tous les antidotes. Nuit Absolue + Pandémie = combo apocalyptique impossible à contrer.' },
  'Ténèbres+Spectre':{ combat: 'Néant absolu — combine l\'obscurité et le vide spectral. Ses zones sont à mi-chemin entre l\'existence et la non-existence. Les ennemis dans ses zones ne peuvent pas être soignés.', mod: 'Ses zones combinent Ténèbres et Spectre — seuls les sorts Fée peuvent les pénétrer. Les ennemis dans ses zones ne peuvent pas régénérer de ressources.' },
  'Ténèbres+Gravité':{ combat: 'Trou noir de ténèbres. Ses Singularités sont obscures — aspirent lumière et matière. Collapse Gravitationnel dans ses zones de ténèbres est une mort certaine pour qui y est pris.', mod: 'Ses Singularités dans les zones Ténèbres sont invisibles jusqu\'au déclenchement. Collapse Gravitationnel dans ses zones Ténèbres double les dégâts.' },
  'Ténèbres+Combat':{ combat: 'Combattant de l\'ombre — ses arts martiaux sont exécutés dans une invisibilité totale. Les ennemis reçoivent des coups de nulle part. Berserker Ombre = chaos total.', mod: 'Ses attaques physiques sont invisibles jusqu\'à l\'impact (0 anticipation possible). Berserker dans les zones Ténèbres rend ses mouvements intraçables.' },
  'Ténèbres+Normal':{ combat: 'L\'Ordinaire des Ombres — utilise les ténèbres pour une discrétion parfaite sans jamais dépasser ce qui est nécessaire. Sa présence obscure est mesurée, jamais catastrophique.', mod: 'Ses zones de Ténèbres ne révèlent jamais sa position. Ses sorts Ténèbres consomment 25% moins — efficacité dans l\'obscurité.' },
  'Fée+Poison':     { combat: 'Paradoxe bénédicton — sa lumière guérit ses alliés et empoisonne ses ennemis simultanément. La même Aura de Soin est un Aura de Venin pour ses ennemis dans la même zone.', mod: 'Ses sorts Fée ont un double effet : soin pour alliés, poison pour ennemis dans la même zone. Purification peut être inversée pour empoisonner.' },
  'Fée+Spectre':    { combat: 'Frontière de l\'Au-delà — ses sorts Fée guérissent les morts, ses sorts Spectre invoquent les vivants perdus. La résurrection est son domaine naturel. Miracle ramène les alliés depuis les Limbes.', mod: 'Résurrection Partielle ramène des alliés à 100% PV (au lieu de 50%). Armée des Morts peut invoquer des alliés tombés depuis le début du combat.' },
  'Fée+Gravité':    { combat: 'Lévitation sacrée — ses alliés dans ses zones de lumière et faible gravité flottent. Ses Rayons de Lumière créent des faisceaux antigravité. Les ennemis sont écrasés par la gravité dans ses zones obscures.', mod: 'Ses zones Fée génèrent Basse Gravité pour les alliés. Ses zones non-Fée génèrent Haute Gravité pour les ennemis. Différentiel permanent.' },
  'Fée+Combat':     { combat: 'Paladin de lumière — frappe avec une lumière bénie qui purge. Ses coups de poing libèrent des éclairs de Fée. Tempête de Coups bénite purge les altérations de statut des cibles amies frappées.', mod: 'Ses attaques physiques purifient les alliés adjacents (effet Purification). Brise-Bouclier brisé par lumière bénie — la cible perd également ses buffs.' },
  'Fée+Normal':     { combat: 'Lumière pratique — utilise la magie Fée avec une économie parfaite. Pas de miracles superflus. Chaque Rayon de Lumière a une cible précise. Chaque Bénédiction une durée calculée.', mod: 'Ses sorts Fée consomment 30% moins. Miracle peut être utilisé deux fois par combat (gestion normale des ressources divines).' },
  'Poison+Spectre': { combat: 'Fantômes empoisonneurs — ses spectres transportent des toxines spectrales impossibles à purger. Toucher Spectral empoisonné ronge l\'âme et le corps. On ne soigne pas ce qu\'il inflige.', mod: 'Toucher Spectral inflige également Nécrose (poison spectral). Ses Armées des Morts sont des zombies empoisonnés — piqûres à chaque contact.' },
  'Poison+Gravité': { combat: 'Dissout sous pression. Sa Haute Gravité accélère l\'absorption des toxines. Ses toxines dans les zones de haute gravité pénètrent les armures comme si elles n\'existaient pas.', mod: 'Ses toxines dans les zones Haute Gravité ignorent toutes les résistances. Collapse Gravitationnel libère une Pandémie dans la zone d\'effondrement.' },
  'Poison+Combat':  { combat: 'Empoisonneur martial — arme chaque technique de combat d\'une toxine différente. La Tempête de Coups est une Tempête d\'Injections. Chaque garde est brisé puis empoisonné.', mod: 'Chaque technique Combat applique une toxine différente (rotation). Brise-Bouclier dépose du Venin Paralytique directement dans le système circulatoire.' },
  'Poison+Normal':  { combat: 'Empoisonneur professionnel — calibre chaque toxine à la dose minimale efficace. Pas de gaspillage. Sa Pandémie ciblée n\'affecte que sa cible désignée. Science, pas chaos.', mod: 'Ses toxines consomment 25% moins. Pandémie peut être ciblée sur un individu (ne se propage pas aux non-ciblés).' },
  'Spectre+Gravité':{ combat: 'Effacement de l\'existence — combine le vide spectral et l\'effacement gravitationnel. Ses cibles dans ses zones combinées n\'existent plus vraiment. Collapse Spectro-Gravitationnel.', mod: 'Ses zones Spectre génèrent de l\'anomalie gravitationnelle. Dimension Spectrale sous Haute Gravité compresse l\'espace — les cibles sont inévitablement attirées.' },
  'Spectre+Combat': { combat: 'Fantôme combattant — frappe avec des poings incorporels qui traversent les parades. Impossible de parer un coup spectral. Ses arts martiaux opèrent sur un plan différent de la réalité.', mod: 'Ses attaques physiques ignorent la Parade et le Bouclier (composante spectrale). Tempête de Coups spectrale frappe l\'énergie vitale directement.' },
  'Spectre+Normal': { combat: 'Fantôme ordinaire — utilise ses capacités spectrales avec une retenue remarquable. Ses hantises sont mesurées. Ses Portails sont précis. La terreur qu\'il inspire est proportionnelle.', mod: 'Ses sorts Spectre consomment 30% moins. Passe-Muraille peut être utilisé sans limite de distance (efficacité naturelle des spectres).' },
  'Gravité+Combat': { combat: 'Poing gravitationnel — concentre toute la force de la gravité dans ses frappes martiales. Sa Tempête de Coups sous Haute Gravité crée des ondes de choc sismiques. Tout ce qu\'il touche est aplati.', mod: 'Ses attaques physiques sous Haute Gravité infligent Écrasement en plus. Tempête de Coups crée des zones de Haute Gravité sur chaque point d\'impact.' },
  'Gravité+Normal': { combat: 'Ingénieur de la masse — utilise la gravité avec une précision d\'horloger. Ses Singularités ont une taille exactement calculée. Jamais de Collapse Gravitationnel non planifié.', mod: 'Ses sorts Gravité consomment 25% moins. Ses champs gravitationnels peuvent être annulés sans résidu (contrôle parfait).' },
  'Combat+Normal':  { combat: 'Combattant fondamental — arts martiaux purs sans apport élémentaire externe. Maîtrise absolue de la forme physique. Sa Suprématie Tactique est basée sur la technique, pas la magie.', mod: 'Toutes ses techniques consomment 20% moins. Suprématie Tactique activée double la durée de toutes ses techniques actives simultanément.' },
};

// ── Existing cross pairs to skip ───────────────────────────────

const EXISTING = new Set([
  'Feu+Ténèbres', 'Ténèbres+Feu',
  'Electrique+Eau', 'Eau+Electrique',
  'Dragon+Feu', 'Feu+Dragon',
]);

// ── Class rotation ─────────────────────────────────────────────

let classIdx = 0;
function nextClass(): string {
  const c = CLASSES[classIdx % CLASSES.length];
  classIdx++;
  return c;
}

// ── Helpers ────────────────────────────────────────────────────

function slug(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function esc(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function write(filePath: string, content: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

// ── Generate pairs ─────────────────────────────────────────────

const newChars: Array<{
  id: number; nom: string; element: El; element2: El;
  classe: string; espece: string; region: string; faction: string;
  desc_physique: string; desc_perso: string; pos_lore: string;
  style_combat: string; modifications_classe: string;
  folderName: string;
}> = [];

let currentId = 203; // 200-202 already exist
let seed = 0;

for (let i = 0; i < ELEMENTS.length; i++) {
  for (let j = i + 1; j < ELEMENTS.length; j++) {
    const a = ELEMENTS[i];
    const b = ELEMENTS[j];
    const key = `${a}+${b}`;
    if (EXISTING.has(key)) { seed++; continue; }

    const nom = makeName(a, b, seed++);
    const classe = nextClass();
    const espece = SPECIES[a];
    const region = REGIONS[espece];
    const faction = FACTION_BY_CLASS[classe];
    const syn = SYNERGY[key] ?? { combat: `Combat alliant ${a} et ${b} en synergie.`, mod: `Peut emprunter 3 sorts de ${b}.` };

    // Physical description based on species + element combo
    const descPhysique = `${espece} dont la nature ${a} s'exprime par [à définir] et dont la double affinité ${b} se manifeste par [à définir]. Peut être précisé lors de la création du modèle 3D.`;
    const descPerso = `Personnalité façonnée par la dualité ${a}/${b}. La tension entre ces deux éléments définit son rapport au monde et au combat.`;
    const posLore = `Élu né à la convergence de deux flux élémentaires — ${a} et ${b} — une rareté documentée dans les registres du Calendrier des Fées. Sa faction (${faction}) l'a recruté pour exploiter cette dualité.`;

    const folderName = `${String(currentId).padStart(3,'0')}-${slug(nom)}`;

    newChars.push({
      id: currentId++, nom, element: a, element2: b,
      classe, espece, region, faction,
      desc_physique: descPhysique, desc_perso: descPerso, pos_lore: posLore,
      style_combat: syn.combat, modifications_classe: syn.mod,
      folderName,
    });
  }
}

// ── Write individual files ─────────────────────────────────────

console.log(`Generating ${newChars.length} cross characters…`);

for (const c of newChars) {
  const dir = path.join(CROSS_SRC, c.folderName);
  const content = `import { ELEMENT_KITS } from '../../../character-kits';
import type { Personnage } from '../../../character-types';

const character: Personnage = {
  id: ${c.id},
  nom: \`${esc(c.nom)}\`,
  element: '${c.element}',
  element2: '${c.element2}',
  classe: '${c.classe}',
  espece: '${c.espece}',
  region: '${c.region}',
  faction: '${c.faction}',
  description_physique: \`${esc(c.desc_physique)}\`,
  description_personnalite: \`${esc(c.desc_perso)}\`,
  position_lore: \`${esc(c.pos_lore)}\`,
  style_combat: \`${esc(c.style_combat)}\`,
  kit: ELEMENT_KITS['${c.element}'],
  modifications_classe: \`${esc(c.modifications_classe)}\`,
};

export default character;
`;
  write(path.join(dir, 'index.ts'), content);
}

// ── Rewrite cross/index.ts ─────────────────────────────────────

// Include existing 3 + new 150
const existingEntries = [
  { varName: 'c200', folder: '200-ashva' },
  { varName: 'c201', folder: '201-orvyn' },
  { varName: 'c202', folder: '202-vrath' },
];
const newEntries = newChars.map(c => ({ varName: `c${c.id}`, folder: c.folderName }));
const allEntries = [...existingEntries, ...newEntries];

const imports = allEntries.map(e => `import ${e.varName} from './${e.folder}';`).join('\n');
const arr = allEntries.map(e => `  ${e.varName},`).join('\n');

const crossIndex = `import type { Personnage } from '../../character-types';

${imports}

export const PERSONNAGES_CROSS: Personnage[] = [
${arr}
];
`;
write(path.join(CROSS_SRC, 'index.ts'), crossIndex);

// ── Update main characters/index.ts to include CROSS ──────────

const mainIndex = path.join(ROOT, 'src/data/characters/index.ts');
let indexContent = fs.readFileSync(mainIndex, 'utf8');

if (!indexContent.includes('PERSONNAGES_CROSS')) {
  indexContent = indexContent
    .replace(
      "export { PERSONNAGES_NORMAL } from './normal';",
      "export { PERSONNAGES_NORMAL } from './normal';\nexport { PERSONNAGES_CROSS } from './cross';"
    )
    .replace(
      "import { PERSONNAGES_NORMAL } from './normal';",
      "import { PERSONNAGES_NORMAL } from './normal';\nimport { PERSONNAGES_CROSS } from './cross';"
    )
    .replace(
      '  ...PERSONNAGES_NORMAL,\n];',
      '  ...PERSONNAGES_NORMAL,\n  ...PERSONNAGES_CROSS,\n];'
    );
  fs.writeFileSync(mainIndex, indexContent, 'utf8');
}

console.log(`✓ ${newChars.length} cross characters created`);
console.log(`✓ cross/index.ts updated (${allEntries.length} total cross)`);
console.log(`✓ characters/index.ts updated`);
