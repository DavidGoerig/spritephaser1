import type { PersonnageLoreComplet } from '../../../lore-types';

const kaeleth: PersonnageLoreComplet = {
  id: 86,
  nom: 'Kaeleth',
  element: 'Electrique',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide de 35 ans, de taille moyenne avec les mains d\'un technicien — précises, souvent occupées. Il se déplace dans les structures du réseau artificiel comme dans sa propre maison.',
    peau: 'Bleutée Néréide avec des éclairs électriques bleus aux doigts — l\'élément Electrique d\'un technicien dont le corps et l\'élément se sont synchronisés avec le réseau qu\'il entretient.',
    yeux: 'Bleu électrique, avec une qualité d\'attention aux détails techniques.',
    vetements: 'Tenue de technicien confédéral — isolants aux poignets, outils attachés à la ceinture. Fonctionnel.',
    signes_particuliers: 'Il a été apprenti d\'Orven (15) — le concepteur du réseau artificiel. Il entretient ce qu\'Orven a construit. Il n\'a pas entièrement compris les intentions de conception.',
  },

  psychologie: {
    dominante: 'Technicien de maintenance du réseau artificiel de vent à Thalassyr. Ancien apprenti d\'Orven (15). Il entretient le réseau sans nécessairement en comprendre la conception globale — il connaît les parties, pas le tout.',
    mecanisme_de_defense: 'La compétence technique comme autorité. Il sait comment les systèmes fonctionnent. Cette connaissance lui donne une légitimité.',
    contradiction_interne: 'Il entretient un réseau qui a remplacé les vents naturels. Les défaillances qu\'il répare sont des symptômes d\'un système qui ne répond pas à la même logique que ce qu\'il a remplacé. Il répare sans questionner le système.',
    rapport_aux_autres: 'Orven (15) est sa référence professionnelle — il ne l\'a pas revu depuis la fin de son apprentissage. Shaleth (16) est son supérieur hiérarchique dans la Confédération.',
    vision_du_monde: 'Les systèmes techniques ont des logiques. Il comprend la logique du réseau artificiel. La question de si cette logique est meilleure que ce qu\'elle a remplacé n\'est pas son domaine.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage',
      contenu: 'Identifié jeune comme Élu Electrique avec une aptitude pour les systèmes techniques. Orven (15) l\'avait recruté comme apprenti à 20 ans — une occasion rare. L\'apprentissage avait duré 5 ans.',
    },
    arrivee: {
      titre: 'La maintenance',
      contenu: 'Quand Orven avait quitté ou réduit son activité directe, Kaeleth était devenu le technicien principal de maintenance. Il avait pris en charge des systèmes qu\'il avait aidé à construire mais dont Orven avait gardé la compréhension globale.',
    },
    premier_conflit: {
      titre: 'Les défaillances',
      contenu: 'Les premières défaillances importantes avaient révélé des limites dans sa compréhension. Il réparait les symptômes mais les causes systémiques restaient floues. Il n\'avait pas dit à ses supérieurs que sa compréhension était partielle.',
    },
    revelation: {
      titre: 'Le Silence',
      contenu: 'Le Silence des Vents avait changé le contexte du réseau artificiel. Les paramètres qu\'Orven avait calculés pour des vents naturels présents n\'étaient plus les mêmes. Kaeleth adaptait en permanence sans documentation de base.',
    },
    etat_actuel: {
      titre: 'La maintenance continue',
      contenu: 'Le réseau fonctionne. Ses réparations tiennent. Sa compréhension partielle n\'a pas encore créé de défaillance catastrophique. Mais le système vieillit.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaeleth_reseau',
      titre: 'Le technicien sans documentation',
      description: 'Kaeleth entretient le réseau artificiel de Thalassyr avec une compréhension partielle de sa conception. Si une défaillance systémique se produit — pas une panne locale mais une défaillance de conception — ses réparations ponctuelles ne suffiront pas. Il aura besoin d\'Orven (15) ou de ses archives.',
      personnages_impliques: [15, 16],
      declencheur: 'Défaillance systémique du réseau artificiel nécessitant une compréhension de la conception globale',
      consequence: 'Kaeleth admettant la limite de sa compréhension — ou cherchant Orven ou ses archives',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Technicien de maintenance du réseau artificiel. Ancien apprenti d\'Orven. Compréhension partielle. Le réseau vieillit.',

  relations: [
    { id: 15, nom: 'Orven', type: 'contact', note: 'Mentor dont il a perdu le contact. Sa compréhension du réseau est incomplète sans lui.' },
    { id: 16, nom: 'Shaleth', type: 'contact', note: 'Supérieur hiérarchique confédéral.' },
  ],

  combat: {
    sorts: [
      'Surcharge électrique (Electrique) — décharge concentrée — neutralisation d\'équipement ou de personne',
      'Réseau conducteur (Electrique) — utilisation du réseau artificiel comme amplificateur — portée étendue dans les zones d\'infrastructure',
    ],
  },

  image_prompts: [
    {
      id: 'kaeleth_maintenance',
      description: 'Kaeleth dans les structures du réseau artificiel de Thalassyr — un Néréide de 35 ans avec des outils, réparant une jonction électrique. Ses doigts luisent bleus. Il comprend la pièce qu\'il répare. Il ne comprend pas entièrement le système dont elle fait partie.',
      style: 'réaliste Néréide technicien, réseau artificiel de Thalassyr, maintenance, compréhension partielle, Silence des Vents',
    },
  ],

  lore_long: `Kaeleth entretient le réseau artificiel de vent de Thalassyr. Ancien apprenti d'Orven (15), il a hérité de la maintenance sans avoir entièrement hérité de la compréhension globale.

Il répare les symptômes. Les causes systémiques restent floues.

Le réseau vieillit dans un contexte que ses paramètres originaux ne couvraient pas.`,
};

export default kaeleth;
