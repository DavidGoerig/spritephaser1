import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkael: PersonnageLoreComplet = {
  id: 351,
  nom: 'Thyrkael',
  element: 'Combat',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Officier — une taille et une posture qui communiquent l\'autorité sans avoir besoin de l\'exiger. Dans l\'Isthme, l\'autorité doit être visible pour fonctionner.',
    peau: 'Brun moyen Homme-Lien avec une régularité physique — pas de cicatrices visibles, une apparence soignée qui est une forme de discipline.',
    yeux: 'Gris-brun. Professionnels — ils regardent les espaces pour évaluer les points de contrôle, pas les personnes.',
    vetements: 'Uniforme impérial de grade officier, adapté aux conditions de terrain de l\'Isthme. Il porte les marqueurs de grade visibles — une décision délibérée dans une zone où l\'autorité se dispute.',
    signes_particuliers: 'Il donne des ordres en une phrase. Cette économie de langage est une méthode — dans des situations confuses, les ordres courts sont mieux suivis que les ordres détaillés.',
  },

  psychologie: {
    dominante: 'Établissement d\'un réseau de checkpoints autour de Virex pour identifier et contrôler les flux de personnes et de ressources. Les checkpoints ne sont pas une méthode de force — ils sont une méthode de données. Chaque checkpoint produit des informations sur ce qui entre et sort de Virex.',
    mecanisme_de_defense: 'L\'application méthodique comme protection contre les décisions personnelles. Il suit un protocole. Le protocole décide, pas lui. Cette séparation lui permet de traiter des situations difficiles sans les traiter comme des situations personnelles.',
    contradiction_interne: 'Ses checkpoints visent à identifier des Élus — des enfants dans certains cas. Il n\'a pas de protocole spécifique pour les enfants Élus. Il attend des instructions de la hiérarchie. Les instructions n\'ont pas encore précisé ce cas. Il continue d\'installer des checkpoints.',
    rapport_aux_autres: 'Avel (64) est son supérieur hiérarchique — il reçoit les rapports et décide des escalades. Carevorn (258) est un contact Confédération avec qui il coordonne les checkpoints aux zones de frontière entre les deux juridictions.',
    vision_du_monde: 'L\'Isthme est une zone de saturation où les capacités élémentaires non contrôlées créent des risques. Le contrôle de ces capacités est une nécessité de sécurité. Ses checkpoints sont un outil de ce contrôle.',
  },

  histoire: {
    enfance: {
      titre: 'L\'officier de formation',
      contenu: 'À 20 ans, il avait choisi l\'armée impériale — pas par idéologie, par structure. L\'armée offrait un cadre clair pour des décisions claires. Il avait progressé dans la hiérarchie en appliquant les protocoles avec une précision qui avait été remarquée par ses supérieurs.',
    },
    arrivee: {
      titre: 'L\'affectation à Virex',
      contenu: 'À 35 ans, Avel (64) l\'avait affecté à Virex avec un mandat simple : établir un réseau de surveillance des flux de population autour de la ville. La saturation de l\'Isthme avait augmenté la présence d\'Élus dans la zone. L\'Empire voulait cartographier cette présence.',
    },
    premier_conflit: {
      titre: 'Le premier checkpoint',
      contenu: 'Le premier checkpoint avait produit des données utiles et des résistances locales. Les résistances n\'avaient pas été violentes — des habitants qui prenaient des routes alternatives. Il avait installé un deuxième checkpoint pour couvrir les routes alternatives. La méthode était itérative.',
    },
    revelation: {
      titre: 'Les données sur les enfants',
      contenu: 'Les données de ses checkpoints montraient des patterns inhabituels — des adultes qui passaient les checkpoints de façon régulière mais dont les destinations ne correspondaient pas à des activités économiques normales. Ces patterns suggéraient un point de rassemblement non identifié. Il avait rapporté à Avel (64). Avel lui avait dit de continuer à collecter.',
    },
    etat_actuel: {
      titre: 'Le quatrième checkpoint',
      contenu: 'Il a installé un quatrième checkpoint cette semaine. Les données montrent que les patterns inhabituels ont diminué — les personnes associées ont changé leurs routes. Ce changement de comportement confirme qu\'elles réagissent à ses checkpoints. Le point de rassemblement existe. Il n\'est pas encore localisé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkael_point_rassemblement',
      titre: 'Le point non localisé',
      description: 'Ses données confirment l\'existence d\'un point de rassemblement non identifié dans Virex ou à sa périphérie — probablement lié à des Élus. Les patterns de déplacement qui l\'entourent ont changé après chaque nouveau checkpoint. Il est en train de trianguler. Il estime une localisation dans 2 à 4 semaines si les patterns continuent.',
      personnages_impliques: [64, 258],
      declencheur: 'Patterns inhabituels dans les données de checkpoints confirmant un point de rassemblement',
      consequence: 'Localisation du refuge en cours — délai estimé 2 à 4 semaines',
    },
    {
      id: 'thyrkael_enfants_elus',
      titre: 'L\'absence de protocole enfants',
      description: 'Ses checkpoints collectent des données sur tous les flux — y compris des enfants. Les protocoles impériaux sur les Élus adultes sont clairs. Les protocoles sur les enfants Élus ne lui ont pas été communiqués. Il a posé la question à Avel (64). Avel a dit que les instructions suivraient. Elles n\'ont pas encore suivi.',
      personnages_impliques: [64],
      declencheur: 'Collecte de données sur des enfants dans les flux sans protocole spécifique',
      consequence: 'Lacune de protocole — action sur les enfants Élus en attente d\'instruction',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Officier impérial établissant un réseau de checkpoints autour de Virex. Ses données triangulent progressivement le refuge des 39 enfants de Sarevolt. Il attend des instructions sur les enfants Élus.',

  relations: [
    { id: 64, nom: 'Avel', type: 'supérieur', note: 'Reçoit les rapports et décide des escalades. A dit que les instructions sur les enfants Élus suivraient. Elles n\'ont pas encore suivi.' },
    { id: 258, nom: 'Carevorn', type: 'allié', note: 'Contact Confédération pour la coordination des checkpoints aux zones de frontière entre juridictions.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'officier (Combat) — technique de neutralisation rapide adaptée aux zones de checkpoint — contrôle immédiat',
      'Résistance de terrain (Normal) — endurance physique supérieure en conditions prolongées — maintien de position',
      'Verrou de zone (Combat + Normal) — blocage d\'un espace de passage avec une présence physique dominante — checkpoint humain',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkael_checkpoint',
      description: 'Thyrkael debout à un checkpoint de Virex — un point de passage avec des éléments de contrôle simples mais visibles. Il observe les données de passage notées par ses subordonnés. Son uniforme impérial est net. Il regarde une carte de Virex avec 4 points marqués. Il en considère un 5ème.',
      style: 'réaliste officier impérial, checkpoint de Virex, carte avec points de contrôle, Isthme extérieur',
    },
  ],

  lore_long: `Thyrkael installe des checkpoints autour de Virex pour cartographier la présence d'Élus dans la zone de saturation.

Quatre checkpoints. Les données montrent un point de rassemblement non identifié. Les patterns de déplacement ont changé après chaque nouveau checkpoint — les personnes associées réagissent. Il triangule. Délai estimé 2 à 4 semaines.

Il n'a pas de protocole sur les enfants Élus. Il a posé la question à Avel (64). Les instructions n'ont pas encore suivi.

Il applique un protocole. Le protocole ne lui dit pas encore quoi faire si le point de rassemblement est un refuge d'enfants.`,
};

export default thyrkael;
