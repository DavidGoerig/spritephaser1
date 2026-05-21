import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkgral: PersonnageLoreComplet = {
  id: 373,
  nom: 'Thyrkgral',
  element: 'Sol',
  element2: 'Gravité',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien technicien — robuste avec des mains larges et précises. Il combine la force physique nécessaire aux travaux souterrains et la précision requise pour les manipulations de stabilisation délicates.',
    peau: 'Gris ardoise Chthonien avec des marques de compression aux épaules — zones de contact lors des stabilisations qui nécessitent une pression prolongée. De la poussière de roche dans les plis des mains qui ne part jamais complètement.',
    yeux: 'Brun foncé avec une habitude de lecture des roches — il voit les fractures avant qu\'elles se forment.',
    vetements: 'Tenue de technicien souterrain Technocratie — renforcée aux points de pression, avec des outils de mesure des tensions structurelles. Une tenue fonctionnelle qui a survécu à plusieurs effondrements partiels.',
    signes_particuliers: 'Il vérifie la stabilité des structures avant d\'y entrer — une main sur la paroi, quelques secondes de lecture gravitationnelle. Une habitude qui l\'a sauvé deux fois.',
  },

  psychologie: {
    dominante: 'Stabilisation des tunnels d\'Ormn-Dur via manipulation gravitationnelle combinée à la compréhension des structures rocheuses — il crée des champs gravitationnels qui compensent les pressions naturelles tendant à affaisser les tunnels dans les zones instables.',
    mecanisme_de_defense: 'La structure qui tient. Si le tunnel ne s\'est pas effondré, il a fait son travail. La Technocratie peut critiquer ses méthodes — les tunnels ne s\'effondrent pas.',
    contradiction_interne: 'Les tunnels qu\'il stabilise sont utilisés pour des extractions minières que la Technocratie vend à des acheteurs dont il ne contrôle pas les usages. Certains de ces acheteurs sont la Convergence. Ce que la Convergence fait des minerais extraits via ses tunnels stabilisés n\'est pas sa responsabilité.',
    rapport_aux_autres: 'Drekvar (131) est son supérieur Technocratie pour les missions de stabilisation — il reçoit les zones prioritaires et les délais. Kargesh (133) est un ingénieur Technocratie dont les méthodes d\'extraction interagissent avec les zones qu\'il stabilise.',
    vision_du_monde: 'Les tunnels d\'Ormn-Dur sont une infrastructure critique. Les stabiliser est un travail technique nécessaire. Les discussions politiques sur ce qu\'on extrait dans ces tunnels appartiennent à d\'autres niveaux de la Technocratie.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier effondrement',
      contenu: 'À 15 ans, un tunnel minier près de son quartier s\'était effondré partiellement — 3 Chthoniens blessés. Il avait analysé les fractures après l\'effondrement et réalisé qu\'un champ gravitationnel minimal aurait suffi à prévenir la fracture principale. Il avait commencé à étudier la relation entre gravité et stabilité structurelle.',
    },
    arrivee: {
      titre: 'L\'intégration Technocratie',
      contenu: 'À 24 ans, Drekvar (131) l\'avait recruté pour les équipes de stabilisation. Sa méthode gravitationnelle était plus efficace que les structures physiques standard dans les zones où les roches étaient trop friables pour des supports mécaniques.',
    },
    premier_conflit: {
      titre: 'L\'extraction de Kargesh',
      contenu: 'À 29 ans, Kargesh (133) avait utilisé une méthode d\'extraction qui créait des vibrations excessives dans une zone qu\'il venait de stabiliser. Les vibrations avaient mis en danger la stabilisation — il avait dû intervenir en urgence. Il avait demandé une coordination préalable. Kargesh avait accepté formellement. La coordination était partielle dans la pratique.',
    },
    revelation: {
      titre: 'Les anomalies gravitationnelles croissantes',
      contenu: 'Depuis 6 mois, les zones proches de la Fosse Interdite montrent des anomalies gravitationnelles croissantes qui interfèrent avec ses stabilisations — les champs qu\'il crée réagissent aux anomalies ambiantes de façon imprévisible. Il a rapporté à Drekvar. Drekvar lui a dit de continuer et de documenter.',
    },
    etat_actuel: {
      titre: 'Les 5 zones critiques',
      contenu: 'Il a 5 zones de stabilisation actives dans des tunnels proches de la Fosse. 2 de ces zones nécessitent des interventions de maintenance plus fréquentes que les 6 premiers mois — les anomalies ambiantes s\'intensifient. Il a demandé un arrêt temporaire de l\'extraction dans ces 2 zones. Drekvar a refusé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkgral_zones_critiques',
      titre: 'L\'intensification des anomalies',
      description: 'Les anomalies gravitationnelles proches de la Fosse s\'intensifient — le 4ème cycle documenté par Drethvael (370) se ressent dans les structures d\'Ormn-Dur. Les 2 zones de stabilisation les plus proches de la Fosse sont maintenant des risques d\'effondrement si les anomalies continuent de croître. Drekvar (131) a refusé l\'arrêt d\'extraction.',
      personnages_impliques: [131, 133],
      declencheur: 'Intensification des anomalies gravitationnelles proches de la Fosse dans les zones de stabilisation actives',
      consequence: 'Risque d\'effondrement dans 2 tunnels si l\'extraction continue et les anomalies croissent',
    },
    {
      id: 'thyrkgral_documentation',
      titre: 'Le dossier technique',
      description: 'Il a constitué un dossier technique documentant les anomalies gravitationnelles et leurs effets sur ses stabilisations — une trace qui établit que les risques ont été signalés et que Drekvar (131) a refusé les arrêts demandés. Si un effondrement se produit, ce dossier définit la chaîne de responsabilité.',
      personnages_impliques: [131, 133],
      declencheur: 'Refus de Drekvar face aux demandes d\'arrêt — nécessité de traçabilité',
      consequence: 'Dossier de responsabilité constitué — protection technique face au refus hiérarchique',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Technicien Technocratie stabilisant les tunnels d\'Ormn-Dur proches de la Fosse. Les anomalies gravitationnelles du 4ème cycle s\'intensifient dans ses zones. Drekvar (131) a refusé les arrêts demandés. Dossier technique de responsabilité constitué.',

  relations: [
    { id: 131, nom: 'Drekvar', type: 'supérieur', note: 'Supérieur Technocratie. A refusé l\'arrêt des extractions dans les zones critiques. Informé des risques par écrit.' },
    { id: 133, nom: 'Kargesh', type: 'allié', note: 'Ingénieur d\'extraction. Coordination partielle dans la pratique malgré accord formel.' },
  ],

  combat: {
    sorts: [
      'Ancrage de sol (Sol) — fixation d\'une structure rocheuse en place via cohésion élémentaire — stabilisation d\'urgence',
      'Champ de contre-pression (Gravité) — création d\'un champ gravitationnel compensant les pressions naturelles — stabilisation structurelle',
      'Fracture contrôlée (Sol + Gravité) — direction d\'une fracture vers une zone prédéterminée — effondrement dirigé loin des personnes',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkgral_stabilisation',
      description: 'Thyrkgral dans un tunnel d\'Ormn-Dur — ses deux mains posées sur les parois rocheuses, un champ gravitationnel visible entre ses paumes et la roche. Des lignes de fracture sont visibles au plafond du tunnel. Son expression est concentrée et tendue — il retient quelque chose.',
      style: 'réaliste technicien Chthonien Technocratie, stabilisation de tunnel, champ gravitationnel visible, fractures au plafond',
    },
  ],

  lore_long: `Thyrkgral stabilise les tunnels d'Ormn-Dur proches de la Fosse Interdite via manipulation gravitationnelle. Les anomalies ambiantes du 4ème cycle documenté par Drethvael (370) s'intensifient dans ses zones — 2 tunnels sont maintenant en risque d'effondrement.

Drekvar (131) a refusé les arrêts d'extraction demandés. Thyrkgral a constitué un dossier documentant les risques signalés et les refus — traçabilité de la chaîne de responsabilité.`,
};

export default thyrkgral;
