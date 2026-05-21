import type { PersonnageLoreComplet } from '../../../lore-types';

const velskrevyn: PersonnageLoreComplet = {
  id: 342,
  nom: 'Velskrevyn',
  element: 'Glace',
  element2: 'Stellaire',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyenne, avec une précision de mouvement qui vient d\'années de travail sur des instruments délicats. Ses gestes sont économes et exacts.',
    peau: 'Blanc-bleu Givrin avec des reflets argentés discrets aux avant-bras — le Stellaire secondaire qui donne une légère luminosité à sa peau dans l\'obscurité.',
    yeux: 'Bleu-gris avec une acuité qui a été remarquée par ceux qui travaillent avec elle — elle voit des patterns dans des données où les autres voient du bruit.',
    vetements: 'Tenue fonctionnelle d\'astronome indépendante — sans marqueur de faction, adaptée à l\'observation nocturne. Elle a délibérément retiré tout ce qui pouvait l\'identifier comme affiliée.',
    signes_particuliers: 'Elle ne donne jamais de résultats arrondis. Si ses calculs donnent 17,3 mois, elle dit 17,3 mois. Cette précision est parfois perçue comme obstination. Pour elle, c\'est de la précision.',
  },

  psychologie: {
    dominante: 'Calcul de la "fenêtre de 18 mois" — une convergence d\'alignements stellaires qui crée des conditions propices à un dégel à Crysalme. La fenêtre a été calculée sur 8 ans de données. Elle commence dans 14 mois. Elle dure 18 mois. Après, l\'alignement ne sera plus favorable pour 40 ans.',
    mecanisme_de_defense: 'La méthode comme garant. Ses calculs sont reproductibles — n\'importe qui avec les données peut refaire le calcul et obtenir le même résultat. Si quelqu\'un veut la contredire, il doit contredire la méthode, pas elle.',
    contradiction_interne: 'Les Dissidents utilisent sa prédiction de la fenêtre pour justifier une action dans les 14 mois — si le dégel est possible, c\'est le moment d\'agir. Elle a fourni les calculs. Elle n\'a pas dit quoi faire avec. La frontière entre astronome et stratège a été franchie sans qu\'elle l\'ait décidé.',
    rapport_aux_autres: 'Velkren (162) est son contact Dissident principal — il intègre ses calculs dans la planification opérationnelle du réseau. Aethren (54) reçoit les implications pratiques de la fenêtre pour les opérations de passage de réfugiés.',
    vision_du_monde: 'Les conditions astronomiques créent des possibilités. Les possibilités ne deviennent des réalités que si quelqu\'un agit dessus. Elle a calculé les possibilités. Ce n\'est pas à elle de décider si quelqu\'un agit.',
  },

  histoire: {
    enfance: {
      titre: 'Le cycle dans les données',
      contenu: 'À 16 ans, elle avait accédé à des archives astronomiques anciennes de Crysalme — 400 ans de relevés d\'alignements stellaires. Elle avait passé 2 ans à les analyser. À 18 ans, elle avait identifié un cycle de 280 ans dans les alignements. Elle n\'avait pas encore compris ce que ce cycle signifiait pour le gel.',
    },
    arrivee: {
      titre: 'Le calcul de la fenêtre',
      contenu: 'À 30 ans, en croisant ses données astronomiques avec les archives climatiques de Karath (52), elle avait identifié la corrélation entre les alignements du cycle de 280 ans et les dégels historiques. Elle avait calculé la prochaine convergence. La fenêtre de 18 mois avait émergé de ce calcul.',
    },
    premier_conflit: {
      titre: 'La présentation à la cour',
      contenu: 'À 33 ans, elle avait présenté ses calculs à la cour astronomique royale. La cour avait accueilli favorablement — la fenêtre était politiquement utile à la Monarchie. Cette utilité politique l\'avait inquiétée. Elle avait précisé que ses calculs donnaient des conditions propices, pas une garantie. La précision avait été ignorée dans les communications royales.',
    },
    revelation: {
      titre: 'L\'usage Dissident',
      contenu: 'Velkren (162) l\'avait approchée 6 mois après la présentation. Les Dissidents voulaient utiliser la fenêtre comme cadre temporel pour des opérations de résistance. Elle avait demandé ce que ça impliquait concrètement. La réponse avait été suffisamment vague pour qu\'elle comprenne qu\'elle ne saurait pas tout. Elle avait fourni les calculs détaillés.',
    },
    etat_actuel: {
      titre: 'Les 14 mois restants',
      contenu: 'La fenêtre commence dans 14 mois. Ses observations mensuelles confirment la progression des alignements comme prévu. Thyvalskren (340) lui a confirmé que ses propres observations correspondent à ses calculs — une validation indépendante. Iskraven (341) continue de contester les méthodes. Elle a répondu à ses contre-calculs une fois. Elle a décidé de ne pas continuer à répondre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velskrevyn_validation_thyvalskren',
      titre: 'La validation indépendante',
      description: 'Thyvalskren (340) a confirmé indépendamment que ses observations mensuelles correspondent aux calculs de Velskrevyn sur la fenêtre de 18 mois. Cette validation par une astronome royale donne un poids supplémentaire à la prédiction — et renforce l\'urgence pour les Dissidents si Thyval (55) a accès aux mêmes données.',
      personnages_impliques: [340, 162],
      declencheur: 'Confirmation indépendante de Thyvalskren sur les alignements',
      consequence: 'Prédiction doublement validée — urgence accrue pour les Dissidents et la Monarchie',
    },
    {
      id: 'velskrevyn_frontiere_astronome',
      titre: 'Le stratège involontaire',
      description: 'Les Dissidents utilisent sa prédiction pour planifier des opérations dans les 14 mois. Elle a fourni les calculs. Elle n\'a pas dit quoi en faire. Mais la frontière entre astronome et stratège a été franchie. Si les opérations Dissidentes échouent dans le cadre de sa fenêtre, sa prédiction sera associée à cet échec.',
      personnages_impliques: [162, 54],
      declencheur: 'Usage opérationnel de ses calculs par les Dissidents',
      consequence: 'Calculs devenus actif opérationnel — association entre la prédiction et les actions Dissidentes',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Calculatrice de la "fenêtre de 18 mois" à Crysalme. Ses calculs sont utilisés par les Dissidents pour planifier des opérations dans ce délai. La validation de Thyvalskren a augmenté le poids de sa prédiction.',

  relations: [
    { id: 162, nom: 'Velkren', type: 'allié', note: 'Contact Dissident. Intègre ses calculs dans la planification opérationnelle du réseau.' },
    { id: 54, nom: 'Aethren', type: 'allié', note: 'Reçoit les implications pratiques de la fenêtre pour les opérations de passage.' },
  ],

  combat: {
    sorts: [
      'Champ de glace (Glace) — création d\'une zone de gel au sol — ralentissement et immobilisation',
      'Projection stellaire (Stellaire) — envoi d\'un faisceau d\'énergie céleste — impact précis à distance',
      'Convergence d\'alignement (Glace + Stellaire) — synchronisation des deux éléments en un point — dommage concentré maximal',
    ],
  },

  image_prompts: [
    {
      id: 'velskrevyn_calcul',
      description: 'Velskrevyn dans son espace de travail indépendant — pas un bureau royal, une salle simple avec des instruments et des relevés étalés. Elle pointe une trajectoire sur une carte stellaire posée sur la glace du sol, qui réfléchit les données en double. Son expression est précise et concentrée.',
      style: 'réaliste astronome indépendante, instruments et relevés, glace réfléchissante au sol, Crysalme intérieur',
    },
  ],

  lore_long: `Velskrevyn a calculé la "fenêtre de 18 mois" — une convergence d'alignements stellaires créant des conditions propices à un dégel à Crysalme. La fenêtre commence dans 14 mois.

8 ans de données. Méthode reproductible. Thyvalskren (340) a confirmé indépendamment.

Les Dissidents utilisent ses calculs pour planifier des opérations dans ce délai. Elle a fourni les calculs. Elle n'a pas dit quoi en faire. La frontière entre astronome et stratège a été franchie sans qu'elle le décide.

Iskraven (341) conteste. Elle a répondu une fois. Elle a décidé de ne pas continuer à répondre.`,
};

export default velskrevyn;
