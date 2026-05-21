import type { PersonnageLoreComplet } from '../../../lore-types';

const thalveth: PersonnageLoreComplet = {
  id: 291,
  nom: 'Thalveth',
  element: 'Plante',
  element2: 'Eau',
  espece: 'Sylvans',
  region: 'Thalassyr',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Fine avec des reflets aquatiques inhabituels pour un Sylvan — le double élément Eau qui change la texture de la peau.',
    peau: 'Brun-vert avec des reflets bleus aux bras et aux épaules — l\'eau qui remonte depuis les années de plongée.',
    yeux: 'Vert-bleu changeant selon la lumière ambiante. Dans les zones côtières, ses yeux virent au bleu. Dans les forêts, au vert.',
    vetements: 'Tenue amphibie — ni pleinement terrestre ni pleinement aquatique, faite de matériaux qui sèchent rapidement. Elle passe d\'un milieu à l\'autre plusieurs fois par jour.',
    signes_particuliers: 'Ses cheveux sont toujours humides d\'une façon ou d\'une autre — elle entre et sort des zones aquatiques sans prévenir.',
  },

  psychologie: {
    dominante: 'Recherche d\'alternative. Les arbres-mémoire sylvans sont perdus ou abîmés. Les algues-mémoire marines pourraient préserver quelque chose d\'équivalent — si quelqu\'un comprend comment.',
    mecanisme_de_defense: 'L\'enthousiasme scientifique. Quand la situation générale est accablante, elle revient à la question concrète : est-ce que les algues enregistrent ? Comment ?',
    contradiction_interne: 'Elle est Sylvan étudiante d\'un phénomène aquatique. Ses pairs conservateurs trouvent que son axe de recherche est une forme d\'abandon de Sylvera — chercher un substitut plutôt que de restaurer l\'original.',
    rapport_aux_autres: 'Sylvae (31) a financé ses recherches initiales avec une méfiance douce — une alternative au lieu de la restauration, c\'est difficile à soutenir entièrement. Lysara (14) est l\'origine du phénomène qu\'elle étudie — le Silence des Vents a changé les courants marins qui alimentent ses algues-mémoire. Sans Lysara comprendre ce lien, ses recherches ont une lacune.',
    vision_du_monde: 'Si les arbres ne peuvent pas être restaurés dans les 50 prochaines années, il faudra quelque chose qui fait ce que faisaient les arbres. Les algues-mémoire marines sont une piste. Pas une résignation — une pragmatique.',
  },

  histoire: {
    enfance: {
      titre: 'Sylvan côtière',
      contenu: 'Née à la frontière de Sylvera proche de la côte de Thalassyr — assez proche pour que l\'Eau soit aussi naturel que la Plante dans son environnement. Elle avait appris à nager dans les eaux côtières avant d\'apprendre à grimper aux arbres de Sylvera. Les deux lui étaient venuss naturellement.',
    },
    arrivee: {
      titre: 'La question des algues',
      contenu: 'À 23 ans, en plongeant dans les zones marines proches de Thalassyr, elle avait remarqué que certaines algues avaient des propriétés visuelles similaires aux arbres-mémoire sylvans — une densité lumineuse dans les cellules, une persistance de certaines structures. Elle avait commencé à se demander si les algues pouvaient enregistrer quelque chose.',
    },
    premier_conflit: {
      titre: 'La réaction des Conservateurs',
      contenu: 'Sa proposition à Sylvae d\'étudier les algues-mémoire marines avait créé une tension : certains Conservateurs y voyaient une désertion de la cause de restauration sylvane. Elle avait maintenu sa position — comprendre une alternative n\'était pas abandonner l\'original. Sylvae avait fini par financer, avec réserves.',
    },
    revelation: {
      titre: 'Le courant de Lysara',
      contenu: 'En analysant les zones où ses algues-mémoire étaient les plus denses, elle avait réalisé que ces zones correspondaient aux anciens courants marins naturels — ceux d\'avant le Silence des Vents. Les algues les plus riches en enregistrements potentiels poussaient dans les courants que Lysara (14) avait perturbés. Sa recherche dépendait de quelque chose qu\'elle ne comprenait pas entièrement.',
    },
    etat_actuel: {
      titre: 'La lacune et la piste',
      contenu: 'Elle a des données prometteuses sur les algues-mémoire. Elle a une lacune : comprendre pourquoi elles sont si denses dans les anciens courants naturels. Elle ne sait pas que cette réponse implique Lysara. Elle cherche le mécanisme physique sans avoir le contexte de ce qui a changé les courants.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalveth_algues_anciens_courants',
      titre: 'La densité dans les courants perdus',
      description: 'Les zones les plus riches en algues-mémoire correspondent aux anciens courants marins naturels — ceux avant le Silence des Vents de Lysara. Elle cherche le mécanisme physique. Elle ne sait pas encore que la réponse implique une modification élémentaire des courants il y a 80 ans. Cette lacune est la clé de ses recherches.',
      personnages_impliques: [14, 31],
      declencheur: 'Analyse de la distribution des algues-mémoire',
      consequence: 'Découverte partielle dépendant d\'un contexte historique qu\'elle n\'a pas',
    },
    {
      id: 'thalveth_sylvae_tension',
      titre: 'Le soutien avec réserves',
      description: 'Sylvae finance ses recherches avec une ambivalence maintenue. L\'idée d\'une alternative aux arbres-mémoire est difficile à soutenir pleinement pour un Conservateur — ça implique d\'accepter que la restauration complète est peut-être impossible à court terme. Thalveth et Sylvae coexistent dans un accord pratique sans résoudre la tension de fond.',
      personnages_impliques: [31],
      declencheur: 'Financement de recherche sur une alternative aux arbres-mémoire',
      consequence: 'Relation de soutien avec une tension éthique non résolue',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Chercheure d\'alternative. Ses algues-mémoire pourraient préserver ce que les arbres ne peuvent plus — mais sa lacune la connecte au Silence des Vents sans qu\'elle le sache.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'mentor', note: 'Financement avec réserves. Tension éthique maintenue. Support pratique sans accord total sur la direction.' },
    { id: 14, nom: 'Lysara', type: 'contact_nécessaire', note: 'La réponse à sa lacune principale. Ne sait pas que Lysara est impliquée dans ce qu\'elle étudie.' },
  ],

  combat: {
    sorts: [
      'Filet d\'algues (Eau/Plante) — projection et expansion rapide d\'algues marines — immobilisation en milieu aquatique ou humide',
      'Courant mémoriel (Eau) — manipulation des courants pour désorienter dans les zones côtières',
      'Racines marines (Plante) — ancrage d\'espèces végétales marines comme barrière — efficace en zone côtière',
    ],
  },

  image_prompts: [
    {
      id: 'thalveth_plongee',
      description: 'Thalveth sous l\'eau dans une zone côtière de Thalassyr, examinant une touffe d\'algues à forte densité lumineuse. Ses yeux ont viré au bleu. Elle tient un instrument de mesure. Elle est dans son milieu de recherche.',
      style: 'réaliste aquatique, lumière de sous-eau, densité végétale marine, curiosité scientifique',
    },
  ],

  lore_long: `Thalveth cherche une alternative aux arbres-mémoire sylvans dans les algues marines de Thalassyr.

Ce n'est pas une résignation — c'est une pragmatique. Si les arbres ne peuvent pas être restaurés dans les 50 prochaines années, il faut quelque chose qui préserve ce qu'ils préservaient. Les algues-mémoire marines ont des propriétés cellulaires similaires aux arbres-mémoire. Elle étudie si elles enregistrent.

Sylvae a financé ses recherches avec des réserves. Certains Conservateurs y voient une forme d'abandon. Elle maintient sa position : une alternative n'est pas un abandon.

Les zones les plus riches en algues-mémoire correspondent aux anciens courants naturels — ceux d'avant le Silence des Vents. Elle cherche le mécanisme physique qui explique cette corrélation. Elle ne sait pas encore que ces courants ont été modifiés par Lysara il y a 80 ans. Cette lacune est la clé.

Ses yeux changent de couleur selon le milieu. Dans l'eau, bleu. En forêt, vert. Elle est dans les deux milieux assez régulièrement pour que la transition soit continue.`,
};

export default thalveth;
