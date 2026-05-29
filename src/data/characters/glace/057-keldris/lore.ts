import type { PersonnageLoreComplet } from '../../../lore-types';

const keldris: PersonnageLoreComplet = {
  id: 57,
  nom: 'Keldris',
  element: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 68 ans — un représentant de la Monarchie dont la stature dit l\'autorité institutionnelle. Il est grand pour un Givrin, avec une posture qui ne plie jamais en réunion. Cette rigidité physique est devenue sa signature — les personnes qui le connaissent depuis 20 ans notent qu\'il s\'est raidi progressivement.',
    peau: 'Blanc glacial Givrin avec une luminescence bleue aux épaules — l\'expression la plus formelle de l\'élément Glace. Sa peau reflète froidement la lumière artificielle des salles d\'audience d\'Iskral. Il n\'essaie pas de réchauffer cette impression.',
    yeux: 'Bleu foncé avec une qualité de fermeture — ses yeux ne disent pas ce qu\'il pense. Il a développé cette capacité en 30 ans de représentation. Les gens qui le regardent ont l\'impression de regarder de la glace.',
    vetements: 'Tenue représentative de la Monarchie — blanche et bleue avec les insignes de son rang. Aucune dérogation aux codes vestimentaires. Il est l\'incarnation visuelle de la stabilité institutionnelle qu\'il représente.',
    signes_particuliers: 'Il ne répond jamais immédiatement. Quelle que soit la question, il y a un silence de 3 à 5 secondes avant qu\'il parle. Ce n\'est pas de la lenteur — c\'est une discipline. Il ne parle que quand il sait exactement ce qu\'il va dire.',
  },

  psychologie: {
    dominante: 'Représentant de la Monarchie de Crysalme depuis 30 ans — sa fonction est de maintenir la stabilité politique que le Champ Gelé garantit. Il a ordonné le silence sur les micro-fractures quand Sylkra (53) a soumis son rapport : sa conviction était que publier des données d\'anomalie sans solution aurait créé une instabilité politique que le Champ Gelé garantissait justement d\'éviter. Il avait raison sur le risque politique. Il avait tort sur la solution.',
    mecanisme_de_defense: 'La gestion du risque perçu plutôt que du risque réel. Il gère des risques politiques — instabilité sociale, panique, fragilisation de la légitimité de la Monarchie. Les risques physiques du Champ, il les délègue. Quand les données sur ces risques physiques lui parviennent, il les traite comme des risques politiques. Cette confusion est son angle mort.',
    contradiction_interne: 'Il a ordonné le silence sur les fractures pour préserver la stabilité. Si le Champ dégèle — et les données suggèrent que ça arrive — la déstabilisation sera infiniment plus grave que si les données avaient été publiées à temps. Il a transformé un problème gérable en une crise en tentant de l\'éviter.',
    rapport_aux_autres: 'Sylkra (53) est la gardienne qu\'il a réduite au silence — il la considère comme une technicienne qui a outrepassé son rôle en soumettant un rapport avec des implications politiques. Elle ne lui a pas dit qu\'elle continue à documenter. Thyval (55) est l\'archiviste des serments — Keldris lui fait confiance pour la gestion des documents, pas pour les décisions politiques. Il ne sait pas ce que Thyval a trouvé. Velsa (58) est connue dans les milieux d\'Iskral pour ses "perceptions" du Champ — Keldris les traite comme de la superstition.',
    vision_du_monde: 'La stabilité politique n\'est pas une condition souhaitable — c\'est la condition de survie de Crysalme. 40 000 soldats gelés dans le Champ sont un argument géopolitique qui a protégé Crysalme depuis 312 ans. Fragiliser cet argument pour des données d\'anomalie est une erreur de priorité. Il croit ça sincèrement. Il ne peut pas encore envisager que l\'argument géopolitique puisse disparaître indépendamment de sa volonté.',
  },

  histoire: {
    enfance: {
      titre: 'La Monarchie',
      contenu: 'Né dans une famille de fonctionnaires de la Monarchie, il avait intégré les structures de représentation à 22 ans. Il avait appris la gestion politique dans un système qui valorisait la stabilité sur l\'innovation. Il avait adapté sa pensée à ce système. Il était devenu excellent dans ce cadre.',
    },
    arrivee: {
      titre: 'La représentation du Champ',
      contenu: 'À 38 ans, il avait été nommé représentant de la Monarchie pour les questions liées au Champ Gelé — une position nouvelle créée à ce moment, signe que la Monarchie prenait le Champ plus au sérieux comme question politique. Il avait passé les 30 années suivantes à gérer les demandes de dégel de la coalition descendante, les requêtes impériales d\'accès, et les questions scientifiques sur l\'état du Champ.',
    },
    premier_conflit: {
      titre: 'Le rapport de Sylkra',
      contenu: 'À 66 ans, le rapport de Sylkra (53) avait atterri sur son bureau. Il l\'avait lu. Les données étaient troublantes. Il avait demandé à Sylkra si elle avait des solutions à proposer. Elle avait dit que non — elle documentait, elle ne proposait pas de solutions. Il lui avait dit que publier des données d\'anomalie sans solution créerait une panique sans bénéfice. Il avait classé le rapport "données préliminaires" et convoqué Sylkra pour lui demander de retenir toute communication externe jusqu\'à confirmation.',
    },
    revelation: {
      titre: 'Ce qu\'il ne voit pas',
      contenu: 'Il ne sait pas que Sylkra continue à documenter secrètement. Il ne sait pas que Thyval a trouvé l\'instruction de Karath pour le dégel. Il ne sait pas que Velsa "entend" quelque chose depuis le Champ depuis 3 mois. Il gère une situation dont il ne reçoit plus les données depuis 18 mois.',
    },
    etat_actuel: {
      titre: 'La stabilité maintenue',
      contenu: 'Du point de vue de Keldris, la situation est stable. Le rapport de Sylkra est classé. Les communications externes sont contrôlées. La coalition descendante n\'a pas d\'informations nouvelles. Les demandes d\'accès impérial sont rejetées. La Monarchie maintient sa position. Ce qu\'il ne voit pas : la situation réelle du Champ continue à évoluer sans lui.',
    },
  },

  evenements_narratifs: [
    {
      id: 'keldris_decouverte',
      titre: 'Ce qu\'il n\'a pas vu venir',
      description: 'Keldris a ordonné le silence sur les fractures. Sylkra (53) documente secrètement. Thyval (55) a trouvé l\'instruction de Karath. Velsa (58) entend quelque chose. Quand toutes ces informations convergent — et elles convergent — Keldris se trouvera dans une position où il a empêché la gestion d\'une crise qu\'il aurait pu prévenir.',
      personnages_impliques: [53, 55],
      declencheur: 'Les informations de Sylkra, Thyval et Velsa atteignant Keldris ou atteignant quelqu\'un avant lui',
      consequence: 'Keldris découvrant que sa gestion du risque politique a aggravé le risque réel — et que la crise arrivait de toute façon',
    },
    {
      id: 'keldris_thyval',
      titre: 'L\'archiviste et le représentant',
      description: 'Thyval (55) a le document de Karath. S\'il va le voir, Keldris le fera disparaître. Si Thyval l\'apprend — et il peut le comprendre — il doit décider de transmettre le document ailleurs avant d\'aller voir Keldris. Cette décision détermine si le document survit.',
      personnages_impliques: [55, 53],
      declencheur: 'Thyval décidant de révéler ou non l\'existence du document à Keldris',
      consequence: 'Soit le document survit et atteint quelqu\'un capable d\'agir, soit Keldris le contrôle et la Monarchie perd son dernier avertissement',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Représentant de la Monarchie de Crysalme. A ordonné le silence sur les micro-fractures du Champ Gelé quand Sylkra (53) a rapporté. Gère la stabilité politique sans recevoir les données réelles depuis 18 mois. Ne sait pas ce que Thyval (55) a trouvé ni ce que Velsa (58) entend.',

  relations: [
    { id: 53, nom: 'Sylkra', type: 'adversaire', note: 'A réduite au silence. Pense qu\'elle a arrêté de documenter. Ne sait pas qu\'elle continue.' },
    { id: 55, nom: 'Thyval', type: 'allié', note: 'Archiviste de confiance. Ne sait pas ce qu\'il a trouvé dans les archives profondes.' },
    { id: 58, nom: 'Velsa', type: 'contact', note: 'Traite ses "perceptions" du Champ comme de la superstition.' },
  ],

  combat: {
    sorts: [
      'Barrière de glace (Glace) — mur cristallin instantané — protection ou division d\'espace',
      'Tempête givrante (Glace) — projection de particules glaciales dans une zone — ralentissement et désorientation',
      'Cristallisation forcée (Glace) — gel rapide d\'une surface de contact — immobilisation temporaire',
    ],
  },

  image_prompts: [
    {
      id: 'keldris_salle',
      description: 'Keldris dans une salle d\'audience d\'Iskral — un Givrin de 68 ans debout devant une fenêtre avec vue sur le Champ Gelé. Il tient le rapport de Sylkra dans une main — classé, clos. Son expression est de quelqu\'un certain de sa décision. Derrière lui, dans le Champ au loin, une micro-fracture imperceptible depuis la salle d\'audience.',
      style: 'réaliste Givrin représentant, salle d\'audience Iskral, vue sur le Champ Gelé, rapport classé, certitude politique, fracture invisible au fond',
    },
  ],

  lore_long: `Keldris a ordonné le silence sur les micro-fractures du Champ Gelé quand Sylkra (53) a soumis son rapport. Sa conviction : publier des données d'anomalie sans solution aurait créé une panique sans bénéfice.

Il a transformé un problème gérable en une crise potentielle. Il ne le sait pas encore.

Sylkra continue à documenter secrètement. Thyval (55) a trouvé l'instruction de Karath pour le dégel. Velsa (58) entend quelque chose. Keldris ne reçoit aucune de ces informations.`,
};

export default keldris;
