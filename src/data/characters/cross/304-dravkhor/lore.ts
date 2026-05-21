import type { PersonnageLoreComplet } from '../../../lore-types';

const dravkhor: PersonnageLoreComplet = {
  id: 304,
  nom: 'Dravkhor',
  element: 'Sol',
  element2: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Petit pour un Chthonien, avec une économie de mouvement qui vient de travailler dans des espaces confinés depuis des décennies. Il se déplace latéralement dans les tunnels étroits sans y penser.',
    peau: 'Gris verdâtre — une teinte inhabituelle chez les Chthoniens que les médecins de la Technocratie attribuent à une exposition prolongée aux émanations de la Fosse. Il n\'en parle pas.',
    yeux: 'Gris très clair, presque blancs dans certaines lumières. La Fosse affecte les tissus à long terme.',
    vetements: 'Tenue de technicien de fond avec un équipement de filtration intégré dans le col. Il ne sort pas sans son équipement. Même dans les zones où l\'air est "sûr".',
    signes_particuliers: 'Il parle peu et lentement. Pas par timidité — par économie de l\'air qu\'il respire. Une habitude des zones à filtration réduite.',
  },

  psychologie: {
    dominante: 'Maintien de la frontière géologique comme dernier rempart. Les couches autour de la Fosse sont ce qui empêche la zone fongique de se propager. S\'il arrête de les maintenir, personne ne sait ce qui se passe ensuite.',
    mecanisme_de_defense: 'La routine. Chaque jour, le même circuit. Chaque semaine, le même rapport. Si la routine tient, la frontière tient.',
    contradiction_interne: 'Ses protocoles de maintenance ont été écrits avant que la zone fongique ait évolué. Il applique des protocoles qui ne correspondent plus exactement à ce qu\'il maintient. La Technocratie ne lui a pas fourni de protocoles mis à jour parce qu\'officiellement, la zone n\'a pas évolué.',
    rapport_aux_autres: 'Karm (41) est son supérieur direct. Karm ne descend pas au fond. Il reçoit les rapports et les valide sans les lire en détail. Dravkhor l\'a su après 3 ans. Il a continué d\'envoyer des rapports complets.',
    vision_du_monde: 'La Fosse est là. Elle a toujours été là, à cette profondeur. Le travail consiste à s\'assurer qu\'elle reste là et ne monte pas. C\'est tout.',
  },

  histoire: {
    enfance: {
      titre: 'Les niveaux inférieurs',
      contenu: 'Né dans une famille de techniciens de fond — les Chthoniens qui travaillent aux niveaux les plus profonds d\'Ormn-Dur où peu d\'autres vont. À 14 ans, il accompagnait son père en maintenance. À 20 ans, il avait ses propres circuits.',
    },
    arrivee: {
      titre: 'La première affectation Fosse',
      contenu: 'À 29 ans, la Technocratie l\'avait affecté à la maintenance des couches géologiques autour de la Fosse Interdite — un poste que peu demandaient parce que les conditions étaient difficiles et l\'exposition longue aux émanations était documentée. Il avait accepté parce que c\'était la maintenance la plus complexe disponible.',
    },
    premier_conflit: {
      titre: 'Le rapport non lu',
      contenu: 'À 34 ans, il avait produit un rapport détaillé sur des modifications observées dans la zone de frontière géologique — des zones où la roche montrait des propriétés différentes de ce que les protocoles décrivaient. Il avait attendu un retour pendant 6 semaines. Karm (41) l\'avait finalement appelé pour lui dire que le rapport était "reçu et traité". Aucune modification des protocoles. Il avait compris.',
    },
    revelation: {
      titre: 'L\'évolution non documentée',
      contenu: 'Ses observations sur 5 ans indiquaient que la zone fongique avait changé de nature — pas de taille, mais de composition. Les émanations étaient différentes. Ses équipements de filtration standard commençaient à montrer des signes d\'usure accélérée. Il avait commandé des filtres renforcés sur budget personnel. Il n\'avait pas mentionné pourquoi dans sa demande.',
    },
    etat_actuel: {
      titre: 'La maintenance continuée',
      contenu: 'Il maintient ses circuits quotidiennement. Ses rapports officiels suivent les formulaires standard. Il tient un second journal personnel qui documente ce que les formulaires standard ne permettent pas de décrire. Ce journal n\'est ni secret ni officiel — personne ne lui a demandé de le tenir, personne ne lui a dit d\'arrêter.',
    },
  },

  evenements_narratifs: [
    {
      id: 'dravkhor_protocoles_obsoletes',
      titre: 'Les protocoles qui ne correspondent plus',
      description: 'Les protocoles de maintenance ont été écrits il y a 20 ans. La zone fongique a évolué depuis. Il applique des procédures qui ne correspondent plus exactement à la réalité de ce qu\'il gère. La Technocratie ne lui a pas fourni de mise à jour. Officiellement, la zone est stable. Ses filtres personnels renforcés racontent une autre histoire.',
      personnages_impliques: [41],
      declencheur: 'Observation sur 5 ans de modifications de la zone fongique',
      consequence: 'Maintenance effectuée avec des protocoles partiellement inadaptés — frontière géologique maintenue mais avec des marges inconnues',
    },
    {
      id: 'dravkhor_journal_personnel',
      titre: 'Le journal non demandé',
      description: 'Son journal personnel documente ce que les formulaires standard ne permettent pas de capturer — des observations précises sur la composition des émanations, l\'état des interfaces géologiques, les variations saisonnières de la pression fongique. Ce journal existe depuis 8 ans. Il n\'est dans aucun système Technocratie. Personne ne sait qu\'il existe.',
      personnages_impliques: [],
      declencheur: 'Inadéquation des formulaires officiels avec la réalité observée',
      consequence: 'Archive de données uniques sur l\'évolution de la Fosse — non accessible à la Technocratie',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Technicien qui maintient physiquement la frontière entre la Fosse et le reste d\'Ormn-Dur. Son journal personnel est probablement la documentation la plus précise sur l\'état réel de la Fosse.',

  relations: [
    { id: 41, nom: 'Karm', type: 'allié', note: 'Supérieur direct qui ne lit pas les rapports en détail. Dravkhor envoie des rapports complets quand même. Arrangement accepté.' },
  ],

  combat: {
    sorts: [
      'Compression géologique (Sol) — densification des couches de sol environnantes — ralentissement ou immobilisation',
      'Barrière de roche (Roche) — élévation d\'une paroi rocheuse entre lui et une menace — défense immédiate',
      'Émanation contrôlée (Sol) — relâchement de pression géologique concentrée — zone d\'effet étourdissant',
    ],
  },

  image_prompts: [
    {
      id: 'dravkhor_circuit',
      description: 'Dravkhor dans un tunnel profond, prenant des mesures avec un instrument de précision contre une paroi rocheuse dont la couleur est légèrement dorée-verdâtre — la teinte de la frontière Fosse. Son équipement de filtration est visible. Il travaille avec la précision de quelqu\'un qui fait la même chose depuis vingt ans.',
      style: 'réaliste chthonien technique, lumière souterraine profonde, teinte de la Fosse visible, précision de routine',
    },
  ],

  lore_long: `Dravkhor maintient les couches géologiques autour de la Fosse Interdite depuis vingt ans.

Ses protocoles ont été écrits avant que la zone fongique ait évolué. Il les applique parce qu'il n'en a pas de nouveaux. Officiellement, la zone est stable.

Ses filtres personnels renforcés — achetés sur budget personnel, raison non précisée dans la demande — suggèrent autre chose.

Karm (41) ne lit pas les rapports en détail. Dravkhor envoie des rapports complets quand même. Il a décidé que c'était son rôle même si personne ne regarde.

Son journal personnel documente ce que les formulaires ne permettent pas de capturer. Il existe depuis 8 ans. Il n'est dans aucun système Technocratie. Il n'est pas secret — personne n'a demandé à le voir.`,
};

export default dravkhor;
