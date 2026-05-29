import type { PersonnageLoreComplet } from '../../../lore-types';

const orkhael: PersonnageLoreComplet = {
  id: 11,
  nom: 'Orkhael',
  element: 'Feu',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: 'Grand Pyrien de 54 ans avec une carrure d\'orateur — ni forgeron ni soldat, mais une présence qui remplit les espaces. Sa voix porte sans effort. Son corps est celui d\'un homme qui n\'a jamais eu besoin de frapper pour dominer.',
    peau: 'Brun chaud Pyrien avec des cicatrices très légères au cou — des éclats de la Rupture Thermique qu\'il a survécu enfant. Il les garde visibles. Stratégie, pas accident.',
    yeux: 'Orangé vif avec une qualité d\'évaluation permanente — il regarde les personnes comme des positions sur un échiquier. Chaleureux en surface, calcul en dessous.',
    vetements: 'Vêtements du Parti du Feu — mais de qualité supérieure aux autres membres. Rouge profond avec des broderies en orange. Le message : je suis des vôtres, mais je suis davantage.',
    signes_particuliers: 'Il répète les derniers mots de son interlocuteur avant de répondre — une technique pour paraître attentif. Les personnes qui l\'ont fréquenté assez longtemps reconnaissent le mécanisme.',
  },

  psychologie: {
    dominante: 'Instrumentalisation de la Rupture Thermique comme outil politique — il a transformé la blessure collective de Varkhôl en levier de pouvoir. Ce qu\'il présente comme de la colère légitime est une construction délibérée. La différence entre lui et Gravel (3) : Gravel croit à sa colère.',
    mecanisme_de_defense: 'La sincérité performative. Il est tellement convaincant dans l\'expression de la douleur partagée que même ceux qui le soupçonnent finissent par douter de leurs soupçons.',
    contradiction_interne: 'Il a commencé avec une vraie colère — il avait 11 ans pendant la Rupture, son quartier a brûlé. Mais quelque part dans les 43 ans qui ont suivi, la vraie colère a été remplacée par sa représentation. Il ne sait plus exactement où s\'est produit ce glissement.',
    rapport_aux_autres: 'Brasia (1) est son adversaire le plus dangereux — elle incarne ce qu\'il prétend être. Gravel (3) est son instrument le plus utile — sincère et manipulable. Vrasketh (220) est sa protection corporelle, loyale sans questionnement.',
    vision_du_monde: 'Le monde est divisé en ceux qui comprennent que le pouvoir s\'acquiert en nommant les blessures des autres, et ceux qui vivent leurs blessures sans comprendre qu\'elles pourraient devenir de la puissance politique.',
  },

  histoire: {
    enfance: {
      titre: 'La Rupture comme fondation',
      contenu: 'À 11 ans pendant la Rupture Thermique, il avait vu le Quatrième District brûler. Sa colère était alors réelle. Il avait passé les semaines suivantes à essayer de comprendre pourquoi ça s\'était passé — et qui en profitait. C\'était la première fois qu\'il pensait politiquement.',
    },
    arrivee: {
      titre: 'La formation du Parti',
      contenu: 'À 22 ans, il avait fondé avec d\'autres le Parti du Feu à Varkhôl — pas le premier mouvement du genre, mais le premier à comprendre que la commémoration de la Rupture était plus puissante que les programmes politiques. Il avait compris que les anniversaires de catastrophe créent de l\'unité là où les arguments créent de la division.',
    },
    premier_conflit: {
      titre: 'La rencontre avec Brasia',
      contenu: 'À 31 ans, il avait rencontré Brasia (1) lors d\'une évacuation clandestine d\'Élus blessés. Il avait proposé son aide. Elle avait refusé. Elle avait dit qu\'elle ne travaillait pas avec des personnes qui "commercialisaient la douleur". C\'était la première fois que quelqu\'un avait nommé exactement ce qu\'il faisait.',
    },
    revelation: {
      titre: 'La découverte de la Forge Silencieuse',
      contenu: 'À 45 ans, ses contacts à Khar-Vurn l\'avaient informé de l\'existence de la Forge Silencieuse — les ateliers d\'armement clandestins. Il avait choisi de ne pas les dénoncer à l\'Empire et de ne pas les utiliser lui-même. Les garder comme option est plus précieux que les utiliser.',
    },
    etat_actuel: {
      titre: 'La pression de la crise',
      contenu: 'La démonstration de Kasevolt (360) dans l\'Isthme pourrait changer l\'équilibre des factions. Si le prototype de détection fonctionne, les Élus non-enregistrés partout vont fuir vers Varkhôl, ce qui augmentera la base du Parti du Feu. Il surveille.',
    },
  },

  evenements_narratifs: [
    {
      id: 'orkhael_commemoration',
      titre: 'Le discours de l\'anniversaire',
      description: 'Chaque an -1, il organise la commémoration de la Rupture Thermique dans le Quatrième District. Son discours de cette année est différent — il ne parle plus seulement de blessure, il parle de vengeance préventive. Cendrix (2) a transmis un rapport à l\'Empire sur ce changement de ton.',
      personnages_impliques: [3, 2],
      declencheur: 'Changement de discours vers une rhétorique d\'action directe',
      consequence: 'Surveillance impériale accrue — et possiblement ce qu\'Orkhael cherche à provoquer',
    },
    {
      id: 'orkhael_gravel',
      titre: 'L\'instrument trop sincère',
      description: 'Gravel (3) commence à prendre ses propres initiatives dans les quartiers dévastés — des actions qui ne sont pas coordonnées avec le Parti. Sa sincérité devient un problème : Gravel agit pour les personnes, pas pour le Parti. Orkhael doit décider s\'il recadre ou s\'il laisse Gravel partir.',
      personnages_impliques: [3, 220],
      declencheur: 'Autonomisation croissante de Gravel hors du contrôle du Parti',
      consequence: 'Tension interne — Gravel comme actif ou comme menace à l\'unité du Parti',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Fondateur et chef du Parti du Feu à Varkhôl. A instrumentalisé la Rupture Thermique depuis 43 ans. Surveille l\'évolution de la crise de l\'Isthme comme opportunité d\'expansion. Adversaire indirect de Brasia (1), supérieur politique de Gravel (3).',

  relations: [
    { id: 1, nom: 'Brasia', type: 'adversaire', note: 'Lui a nommé exactement sa méthode à 31 ans. Son adversaire le plus lucide.' },
    { id: 3, nom: 'Gravel', type: 'allié', note: 'Instrument sincère du Parti — sa sincérité est son utilité mais aussi son risque.' },
    { id: 2, nom: 'Cendrix', type: 'adversaire', note: 'Capteur impérial qui surveille le Parti du Feu. Surveillance mutuelle.' },
  ],

  combat: {
    sorts: [
      'Colonne de feu (Feu) — projection verticale concentrée — impact de zone dans un espace fermé',
      'Mur thermique (Feu) — barrière de chaleur radiale — interdit l\'approche dans un rayon de 4 mètres',
      'Éclat de Rupture (Feu) — décharge explosive à courte portée — rappel délibéré de la Rupture Thermique dans ses effets visuels',
    ],
  },

  image_prompts: [
    {
      id: 'orkhael_discours',
      description: 'Orkhael sur une estrade dans les ruines du Quatrième District de Varkhôl — un homme de 54 ans en rouge profond, bras levés, une foule derrière lui. Ses cicatrices au cou sont visibles. Son expression est de conviction absolue — vraie ou jouée, impossible à distinguer.',
      style: 'réaliste politique Pyrien, orateur populaire, ruines de la Rupture, discours, foule Pyrienne',
    },
  ],

  lore_long: `Orkhael a fondé le Parti du Feu à 22 ans avec une vraie colère. À 54 ans, il ne sait plus exactement où la vraie colère s'est arrêtée et où la construction politique a commencé.

Sa méthode est simple : la commémoration de la Rupture Thermique crée l'unité là où les arguments créent la division. Il a utilisé cette méthode pendant 32 ans.

Brasia (1) l'a nommé exactement à 31 ans : "quelqu'un qui commercialise la douleur". Il n'a jamais répondu à cette définition. La réfuter l'oblige à y répondre.

Gravel (3) est son instrument le plus utile — sincère là où Orkhael est stratège. Et donc incontrôlable.`,
};

export default orkhael;
