import type { PersonnageLoreComplet } from '../../../lore-types';

const sorvael: PersonnageLoreComplet = {
  id: 188,
  nom: 'Sorvael',
  element: 'Eau',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Homme-Lien de 44 ans, hydrologiste — corpulence de terrain, habituée aux mesures en milieu aquatique.',
    peau: 'Ton humide avec des marques de travail en eau courante. Il passe du temps dans les rivières et les sources.',
    yeux: 'Bleus avec une qualité de quelqu\'un qui lit les courants.',
    vetements: 'Équipement hydrologiste — tenue résistante à l\'eau, outils de mesure spécifiques.',
    signes_particuliers: 'Il surveille les sources d\'eau de l\'Isthme depuis 12 ans. Depuis 6 mois, il voit des anomalies — des fluctuations de flux qui ne correspondent pas aux saisons ou aux précipitations.',
  },

  psychologie: {
    dominante: 'Hydrologiste indépendant dans l\'Isthme. Il surveille les sources d\'eau — leur débit, leur composition, leurs variations saisonnières. Depuis 6 mois, il observe des anomalies qu\'il ne peut pas expliquer par des facteurs hydrologiques standard. Les anomalies correspondent géographiquement à des zones de saturation élémentaire.',
    mecanisme_de_defense: 'La rigueur scientifique. Il documente. Il ne conclut pas avant d\'avoir des données suffisantes. Sa position est dans la description des anomalies, pas dans leur explication politique.',
    contradiction_interne: 'Ses données montrent une corrélation entre les zones de saturation élémentaire et les anomalies hydrologiques. Cette corrélation a des implications sur l\'ampleur de la saturation — plus grande que ce que les données officielles indiquent. Publier cette corrélation aurait des conséquences politiques qu\'il ne recherche pas.',
    rapport_aux_autres: 'La Saturation de l\'Isthme est la force qui perturbe ses mesures. Thyven (62) est dans son réseau — l\'administration impériale qu\'il a contacté pour signaler les anomalies, sans réponse.',
    vision_du_monde: 'Les sources d\'eau sont un indicateur de l\'état d\'un territoire. Si elles montrent des anomalies, quelque chose dans le territoire change. Son travail est de documenter ce changement.',
  },

  histoire: {
    enfance: {
      titre: 'L\'eau de l\'Isthme',
      contenu: 'Né dans l\'Isthme dans une famille qui dépendait des sources locales. Il avait commencé à surveiller les niveaux d\'eau à 20 ans — par nécessité pratique, puis par fascination scientifique.',
    },
    arrivee: {
      titre: 'L\'hydrologiste',
      contenu: 'Il avait développé une expertise en hydrologie indépendante à 30 ans. Ses relevés covraient toutes les sources principales de l\'Isthme — un réseau de mesure qu\'il avait construit seul.',
    },
    premier_conflit: {
      titre: 'Les anomalies',
      contenu: 'Il y a 6 mois, ses mesures avaient commencé à montrer des fluctuations qui ne correspondaient pas aux modèles saisonniers. Il avait vérifié ses équipements. Ils étaient corrects. Les anomalies étaient réelles.',
    },
    revelation: {
      titre: 'La corrélation géographique',
      contenu: 'En cartographiant les zones d\'anomalies avec les cartes de saturation disponibles, il avait trouvé une corrélation géographique forte. La saturation élémentaire affectait les sources d\'eau. L\'ampleur de cette affectation impliquait une saturation plus importante que les estimations officielles.',
    },
    etat_actuel: {
      titre: 'L\'hydrologiste inquiet',
      contenu: 'Il mesure. Les anomalies continuent. L\'administration impériale n\'a pas répondu à son signalement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sorvael_anomalies',
      titre: 'L\'eau qui change',
      description: 'Sorvael a documenté des anomalies hydrologiques dans les sources de l\'Isthme qui correspondent géographiquement à des zones de saturation élémentaire. Si quelqu\'un — Kareol (183), un Dissident — compare ses données avec d\'autres indicateurs de saturation, l\'image combinée révèle une saturation plus grave que ce que les données officielles indiquent.',
      personnages_impliques: [62],
      declencheur: 'Quelqu\'un croisant ses données hydrologiques avec d\'autres indicateurs de saturation',
      consequence: 'Image combinée de la saturation de l\'Isthme révélant une ampleur supérieure aux estimations officielles',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Hydrologiste surveillant les sources de l\'Isthme. Anomalies depuis 6 mois correspondant aux zones de saturation élémentaire. Données impliquant une saturation plus grave que les estimations officielles.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Administration impériale contactée pour les anomalies — sans réponse.' },
  ],

  combat: {
    sorts: [
      'Flux d\'eau (Eau) — courant concentré — attaque directe',
      'Tourbillon défensif (Eau) — rotation d\'eau — protection et désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'sorvael_mesures',
      description: 'Sorvael mesurant le débit d\'une source dans l\'Isthme — un Homme-Lien de 44 ans avec ses instruments, relevant des données qui ne correspondent pas à ce qu\'elles devraient être. Sa carte montre les sources avec des annotations rouges là où les anomalies sont les plus fortes. Les zones rouges correspondent aux zones de saturation élémentaire sur une autre carte posée à côté.',
      style: 'réaliste Homme-Lien hydrologiste, Isthme, anomalies hydrologiques, saturation élémentaire, données inquiétantes',
    },
  ],

  lore_long: `Sorvael surveille les sources d'eau de l'Isthme depuis 12 ans. Depuis 6 mois, il observe des anomalies qui ne correspondent pas aux modèles saisonniers.

Les zones d'anomalies correspondent géographiquement aux zones de saturation élémentaire. L'ampleur de la corrélation implique une saturation plus grave que les données officielles.

Il a signalé à l'administration impériale. Pas de réponse. Il continue à mesurer.`,
};

export default sorvael;
