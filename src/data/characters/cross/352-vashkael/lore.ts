import type { PersonnageLoreComplet } from '../../../lore-types';

const vashkael: PersonnageLoreComplet = {
  id: 352,
  nom: 'Vashkael',
  element: 'Normal',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Négociateur — une façon de se tenir qui communique l\'ouverture sans vulnérabilité. Il a travaillé sur cette posture pendant des années.',
    peau: 'Brun clair Homme-Lien avec une apparence soignée sans paraître impériale — la nuance est délicate et délibérée dans l\'Isthme.',
    yeux: 'Noisette avec un focus social visible — il lit les personnes avant les espaces. Ce talent est la base de son efficacité.',
    vetements: 'Tenue de Confédération sobre — identifiable pour ceux qui connaissent les codes, neutre pour ceux qui ne les connaissent pas. Dans l\'Isthme, cette ambiguïté a de la valeur.',
    signes_particuliers: 'Il laisse des silences. Dans une négociation, le silence appartient à celui qui l\'occupe le dernier. Il laisse les autres l\'occuper.',
  },

  psychologie: {
    dominante: 'Navigation entre les positions de l\'Empire et de la Confédération dans les zones de saturation de l\'Isthme. Ces positions divergent sur la gestion des Élus — l\'Empire veut contrôler, la Confédération veut encadrer. Il négocie les espaces entre les deux.',
    mecanisme_de_defense: 'La position médiane comme vertu. Il peut toujours présenter la position de l\'Empire à la Confédération et la position de la Confédération à l\'Empire de façon convaincante. Cette capacité lui permet de ne jamais choisir entre les deux.',
    contradiction_interne: 'Sa neutralité est utile à la Confédération — elle lui permet d\'accéder à des informations que la Confédération ne pourrait pas obtenir autrement. Mais cette utilité pour la Confédération signifie qu\'il n\'est pas vraiment neutre. Il le sait. Il maintient la fiction de neutralité parce qu\'elle est fonctionnelle.',
    rapport_aux_autres: 'Thyven (62) est son supérieur Confédération — il reçoit les rapports et définit les positions à négocier. Velok (178) est un contact dans les zones de saturation qui lui fournit des informations sur les dynamiques locales avant les négociations.',
    vision_du_monde: 'L\'Isthme est une zone de friction entre deux logiques d\'organisation. Ces logiques ne sont pas réconciliables dans leurs formes pures. Elles peuvent coexister dans des espaces négociés. Il crée ces espaces.',
  },

  histoire: {
    enfance: {
      titre: 'Le médiateur de quartier',
      contenu: 'À 14 ans, il avait commencé à résoudre des conflits entre voisins dans son quartier de l\'Isthme — des conflits sur des ressources, des territoires, des perceptions. Il n\'avait pas de méthode formelle. Il avait une capacité naturelle à trouver ce que les deux parties voulaient réellement, au-delà de ce qu\'elles demandaient.',
    },
    arrivee: {
      titre: 'L\'intégration à la Confédération',
      contenu: 'À 26 ans, Thyven (62) l\'avait recruté pour la Confédération après une médiation locale que la Confédération avait observée. La médiation avait produit un accord entre deux groupes dont les intérêts semblaient incompatibles. Thyven avait compris que cette capacité était rare et utile à une échelle plus grande.',
    },
    premier_conflit: {
      titre: 'La première négociation Empire',
      contenu: 'À 30 ans, sa première négociation directe avec des représentants impériaux sur les zones de saturation. Il avait présenté les positions de la Confédération et entendu celles de l\'Empire. L\'accord obtenu avait donné à la Confédération plus qu\'elle n\'espérait et à l\'Empire moins qu\'il voulait. Thyven avait été satisfait. Les représentants impériaux avaient demandé qui il était.',
    },
    revelation: {
      titre: 'L\'information comme monnaie',
      contenu: 'Velok (178) lui avait expliqué que les dynamiques locales de l\'Isthme — les alliances, les tensions, les besoins — étaient des informations que ni l\'Empire ni la Confédération ne possédaient complètement. Lui-même, comme négociateur, les accumulait sans le réaliser. Ces informations avaient une valeur qui dépassait leur utilité immédiate pour les négociations.',
    },
    etat_actuel: {
      titre: 'La négociation des checkpoints',
      contenu: 'Thyrkael (351) a installé des checkpoints qui affectent des zones de coopération Empire/Confédération. Thyven lui a demandé de négocier une clarification des juridictions. Il a commencé la négociation avec Carevorn (258) et Thyrkael. Les positions sont éloignées. Il a 3 semaines avant que la Confédération escalade.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vashkael_negociation_checkpoints',
      titre: 'La négociation de juridiction',
      description: 'Les checkpoints de Thyrkael (351) incluent des zones sous juridiction mixte Empire/Confédération. La Confédération considère certains de ces checkpoints comme une violation des accords de coopération. Il négocie avec Carevorn (258) et Thyrkael. Les positions sont éloignées. Délai de 3 semaines avant escalade par Thyven (62).',
      personnages_impliques: [62, 178],
      declencheur: 'Checkpoints impériaux dans des zones de juridiction mixte',
      consequence: 'Négociation en cours — délai de 3 semaines avant escalade, positions éloignées',
    },
    {
      id: 'vashkael_informations_accumulees',
      titre: 'Les dynamiques locales',
      description: 'Ses années de négociation dans l\'Isthme lui ont donné une cartographie des dynamiques locales — alliances, tensions, besoins — que ni l\'Empire ni la Confédération ne possèdent complètement. Velok (178) lui a signalé que des tiers commencent à reconnaître cette valeur. Des demandes d\'information informelles arrivent.',
      personnages_impliques: [178, 62],
      declencheur: 'Accumulation de dynamiques locales uniquement connues du négociateur',
      consequence: 'Position d\'information unique — demandes informelles de tiers commençant',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Négociateur Confédération entre l\'Empire et la Confédération dans les zones de saturation de l\'Isthme. Négocie actuellement la juridiction des checkpoints de Thyrkael. Sa cartographie des dynamiques locales a une valeur que des tiers reconnaissent.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'supérieur', note: 'Reçoit les rapports et définit les positions Confédération. Escalade dans 3 semaines si pas d\'accord sur les checkpoints.' },
    { id: 178, nom: 'Velok', type: 'allié', note: 'Fournit des informations sur les dynamiques locales avant les négociations. A signalé des demandes d\'information de tiers.' },
  ],

  combat: {
    sorts: [
      'Désarmement (Combat) — neutralisation d\'un opposant sans blessure grave — contrôle non létal',
      'Stabilité de terrain (Normal) — maintien de sa position sous pression physique — résistance au déplacement',
      'Interposition (Normal + Combat) — placement entre deux parties en conflit — arrêt d\'une confrontation',
    ],
  },

  image_prompts: [
    {
      id: 'vashkael_negociation',
      description: 'Vashkael dans un espace de réunion de l\'Isthme — une salle neutre entre les zones de contrôle. Il est assis entre deux groupes. Il parle lentement. Ses mains sont ouvertes sur la table. Il laisse un silence s\'installer. Les deux groupes regardent leurs propres représentants, pas lui.',
      style: 'réaliste négociateur Homme-Lien, espace neutre de l\'Isthme, posture ouverte, silence tactique',
    },
  ],

  lore_long: `Vashkael négocie entre l'Empire et la Confédération dans les zones de saturation de l'Isthme. Sa méthode consiste à trouver ce que les deux parties veulent réellement au-delà de ce qu'elles demandent.

Les checkpoints de Thyrkael (351) affectent des zones de juridiction mixte. Il négocie une clarification. Les positions sont éloignées. Délai de 3 semaines avant que Thyven (62) escalade.

Ses années de négociation lui ont donné une cartographie des dynamiques locales que ni l'Empire ni la Confédération ne possèdent complètement. Des tiers commencent à reconnaître cette valeur.

Sa neutralité est fonctionnelle. Elle n'est pas entièrement réelle.`,
};

export default vashkael;
