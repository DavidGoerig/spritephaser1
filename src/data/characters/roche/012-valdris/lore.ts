import type { PersonnageLoreComplet } from '../../../lore-types';

const valdris: PersonnageLoreComplet = {
  id: 12,
  nom: 'Valdris',
  element: 'Roche',
  espece: 'Pyriens',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien trapu de 58 ans — le corps d\'un architecte qui a aussi posé des pierres. Ses mains sont plus larges que celles de la plupart des forgerons. Il porte toujours un crayon et un carnet sur lui.',
    peau: 'Brun sombre Pyrien avec de la poussière de roche permanente dans les lignes des mains — même après lavage. Ses avant-bras portent des marques de chute de matériaux de construction sur 30 ans.',
    yeux: 'Gris-brun avec une habitude de calcul structurel — il regarde les bâtiments comme d\'autres regardent les visages. Évalue les charges, les failles, les points de rupture.',
    vetements: 'Tenue de travail pratique — pas de symboles de faction, pas d\'insignes. Des poches partout. Il porte des plans roulés dans une pochette en cuir en permanence.',
    signes_particuliers: 'Il touche les murs en passant — une habitude de vérification structurelle devenue involontaire. Dans un bâtiment qu\'il a conçu, ce geste est de la fierté. Dans un bâtiment qu\'il n\'a pas conçu, c\'est de l\'inquiétude.',
  },

  psychologie: {
    dominante: 'Obsession de la structure comme protection — la Rupture Thermique a tué des personnes qui auraient survécu dans des abris correctement conçus. Il a conçu les abris du Quatrième District. Certains ont tenu. Il sait lesquels n\'ont pas tenu, et pourquoi.',
    mecanisme_de_defense: 'Le calcul comme distance émotionnelle. Quand une situation le dépasse émotionnellement, il la convertit en problème structurel. La Rupture Thermique n\'est pas une tragédie — c\'est un problème d\'ingénierie dont il a tiré les leçons.',
    contradiction_interne: 'Ses abris ont sauvé des centaines de personnes. Ses abris défectueux dans le district Nord en ont laissé mourir des dizaines. Il connaît le chiffre exact : 34. Il les compte dans sa tête régulièrement. Kelveth (71) sait pour les plans défectueux et n\'a jamais parlé.',
    rapport_aux_autres: 'Kelveth (71) est son architecte junior — il sait ce que Valdris porte. Il n\'en a jamais parlé par loyauté ou par peur de ce que ça révèlerait sur lui-même. Dravel (74) est un forgeron qui répare ce que Valdris conçoit — une collaboration involontaire.',
    vision_du_monde: 'La structure protège. Un bâtiment bien conçu peut sauver une vie dans une catastrophe qu\'aucun politique n\'a su prévenir. Son travail est plus honnête que le travail de toute faction.',
  },

  histoire: {
    enfance: {
      titre: 'Les fondations de Khar-Vurn',
      contenu: 'À 14 ans, il avait appris l\'architecture avec un maître chthonien de passage à Varkhôl — une rencontre rare. Le Chthonien lui avait enseigné que la roche n\'est pas passive : elle répond aux charges, elle se fatigue, elle cède selon des patterns prévisibles. Cette leçon l\'avait occupé pendant 44 ans.',
    },
    arrivee: {
      titre: 'Les abris pré-Rupture',
      contenu: 'À 27 ans, il avait proposé à la Municipalité de Khar-Vurn un plan d\'abris résistants aux surtensions thermiques. La Municipalité avait accepté avec un budget réduit de 40%. Il avait fait ce qu\'il pouvait avec ce qu\'il avait. Ce qu\'il avait n\'était pas suffisant.',
    },
    premier_conflit: {
      titre: 'La nuit de la Rupture',
      contenu: 'Pendant la Rupture Thermique, il avait passé 14 heures à aller d\'abri en abri pour évaluer les dégâts. Ceux du district Nord s\'étaient effondrés. Il savait exactement pourquoi — les fondations n\'avaient pas eu le budget pour les ancrages thermiques. 34 morts dans ses abris défectueux.',
    },
    revelation: {
      titre: 'Le plan complet',
      contenu: 'À 40 ans, il avait conçu un plan d\'abris complets pour toute la zone de Khar-Vurn — des structures qui auraient résisté à une Rupture deux fois plus intense. Le plan existait. Il l\'avait présenté à la Municipalité, à l\'Empire, au Parti du Feu, au Parti de l\'Acier. Personne n\'avait financé. Le plan était dans sa bibliothèque.',
    },
    etat_actuel: {
      titre: 'La reconstruction en cours',
      contenu: 'Il travaille actuellement sur une série de nouvelles structures dans les quartiers reconstruits de Khar-Vurn. Chaque bâtiment est conçu pour résister à une Rupture. Il ne le dit pas dans ses plans officiels — il l\'inclut dans les spécifications techniques que peu de gens lisent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'valdris_plan_defectueux',
      titre: 'Le secret des 34',
      description: 'Kelveth (71) sait que les plans du district Nord étaient défectueux par manque de budget. Il n\'en a jamais parlé. Si cette information sortait, Valdris perdrait sa réputation et son travail actuel serait remis en cause. Kelveth garde ce secret — mais pourquoi, exactement?',
      personnages_impliques: [71, 74],
      declencheur: 'Connaissance partagée d\'un défaut structurel dissimulé',
      consequence: 'Loyauté de Kelveth non encore testée — et fragilité de la réputation de Valdris',
    },
    {
      id: 'valdris_plan_complet',
      titre: 'Le plan qui attend',
      description: 'Le plan complet d\'abris résistants existe dans sa bibliothèque depuis 18 ans. Skarith (9) lui a posé des questions à ce sujet — il cherche des solutions structurelles pour les quartiers sous sa garde. Valdris hésite à partager un plan qui implique de reconnaître que les structures actuelles sont insuffisantes.',
      personnages_impliques: [9, 71],
      declencheur: 'Demande de Skarith pour des solutions structurelles',
      consequence: 'Opportunité de déployer le plan complet — mais aveu implicite des défauts passés',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Architecte indépendant de Khar-Vurn. A conçu les abris qui ont sauvé des centaines de personnes — et les abris défectueux qui en ont laissé mourir 34. Son plan complet existe depuis 18 ans. Kelveth (71) garde son secret.',

  relations: [
    { id: 71, nom: 'Kelveth', type: 'allié', note: 'Architecte junior qui sait pour les plans défectueux du district Nord. N\'a jamais parlé.' },
    { id: 9, nom: 'Skarith', type: 'contact', note: 'A posé des questions sur ses plans structurels. Cherche des solutions pour ses quartiers.' },
    { id: 74, nom: 'Dravel', type: 'contact', note: 'Forgeron qui répare ses structures. Connaît leurs défauts mieux que leurs concepteurs.' },
  ],

  combat: {
    sorts: [
      'Rempart de roche (Roche) — élévation d\'une paroi de pierre — protection ou obstacle',
      'Frappe structurelle (Roche) — impact concentré sur un point de faiblesse — effondrement ciblé',
      'Bouclier de calcaire (Roche) — couche de roche autour du corps — absorption de choc thermique',
    ],
  },

  image_prompts: [
    {
      id: 'valdris_plans',
      description: 'Valdris dans son bureau à Khar-Vurn — un homme de 58 ans penché sur des plans étalés, un crayon entre les dents, ses mains larges traçant des lignes de fondation. Derrière lui, des rangées de plans roulés dans des tubes. L\'un d\'eux, plus épais et plus ancien, est marqué d\'une bande rouge.',
      style: 'réaliste architecte Pyrien, bureau de plans, Khar-Vurn, obsession structurelle, plans anciens',
    },
  ],

  lore_long: `Valdris a conçu les abris de la Rupture Thermique avec 40% du budget nécessaire. Ceux du district Nord ont tenu. Ceux du district Nord défectueux ont tué 34 personnes. Il compte ces 34 régulièrement.

Son plan complet — des abris résistants à une Rupture deux fois plus intense — existe dans sa bibliothèque depuis 18 ans. Présenté à chaque faction. Jamais financé.

Kelveth (71) sait pour les plans défectueux. Il n\'a jamais parlé. Cette loyauté silencieuse pèse sur les deux.`,
};

export default valdris;
