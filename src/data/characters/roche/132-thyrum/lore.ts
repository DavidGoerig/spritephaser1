import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrum: PersonnageLoreComplet = {
  id: 132,
  nom: 'Thyrum',
  element: 'Roche',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Confédération Ormn-Dur',

  apparence: {
    taille_corpulence: 'Chthonien de 54 ans, corpulence de superviseur — solide, habitué à être écouté sur les chantiers.',
    peau: 'Pierre grise avec des inclusions de granite — les marques d\'un Chthonien de gestion, pas de front de taille.',
    yeux: 'Gris avec une qualité de quelqu\'un qui sait exactement ce qu\'il a fait et essaie de ne pas y penser.',
    vetements: 'Tenue de superviseur de la Confédération — plus formelle que les tenues de front.',
    signes_particuliers: 'Il a réduit les mesures de sécurité autour de la Fosse Interdite sous pression de Thyss (42). Il continue à superviser les chantiers avec ces mesures réduites.',
  },

  psychologie: {
    dominante: 'Superviseur de chantier de la Confédération d\'Ormn-Dur. Sous la pression de Thyss (42), il a réduit les mesures de sécurité autour de la Fosse Interdite. Il sait que c\'était une erreur. Il continue quand même — revenir en arrière impliquerait d\'expliquer pourquoi il avait cédé.',
    mecanisme_de_defense: 'La minimisation du risque. Les mesures réduites fonctionnent depuis X mois. Statistiquement, ça tient. Cette logique est fragile.',
    contradiction_interne: 'Il sait que les mesures de sécurité réduites sont insuffisantes. Il les maintient parce que les corriger révélerait sa faiblesse face à Thyss. La peur de l\'humiliation est plus forte que la peur du danger.',
    rapport_aux_autres: 'Thyss (42) est dans son réseau — la pression qui l\'a poussé à réduire les mesures. Drevaya (39) est l\'adversaire indirect — quelqu\'un dont les intérêts incluent des mesures de sécurité réelles.',
    vision_du_monde: 'Les chantiers fonctionnent sous pression budgétaire. Réduire les mesures de sécurité est un compromis que tout le monde fait. Cette normalisation est ce qui lui permet de dormir.',
  },

  histoire: {
    enfance: {
      titre: 'La supervision',
      contenu: 'Carrière de superviseur dans les mines de la Confédération d\'Ormn-Dur. Il avait progressé régulièrement — un travailleur compétent qui gérait bien les conflits de chantier.',
    },
    arrivee: {
      titre: 'La pression de Thyss',
      contenu: 'Il y a 2 ans, Thyss (42) avait exercé une pression pour réduire les coûts de sécurité autour de la Fosse. La pression était venue par des voies hiérarchiques qui rendaient le refus difficile. Il avait cédé.',
    },
    premier_conflit: {
      titre: 'L\'incident mineur',
      contenu: 'Un incident de sécurité mineur s\'était produit 6 mois après la réduction des mesures. Rien de grave — mais suffisant pour qu\'il sache que sa décision avait eu des conséquences. Il avait rédigé un rapport minimisant le lien entre les deux.',
    },
    revelation: {
      titre: 'L\'irréversibilité',
      contenu: 'Il avait compris qu\'il ne pouvait plus corriger sa décision sans révéler ce qui s\'était passé. L\'erreur était maintenant structurelle — changer les mesures maintenant impliquait d\'expliquer pourquoi elles avaient été réduites.',
    },
    etat_actuel: {
      titre: 'La supervision compromise',
      contenu: 'Il supervise avec des mesures réduites. Il surveille les signes d\'incident. Il attend que ça tienne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrum_fosse',
      titre: 'L\'incident qui révèle',
      description: 'Thyrum supervise des chantiers avec des mesures de sécurité réduites autour de la Fosse Interdite. Si un incident grave se produit — une brèche, une contamination, une blessure grave — les mesures réduites deviendront la cause évidente. Thyrum devra expliquer pourquoi il a cédé à Thyss (42). Sa complicité sera exposée.',
      personnages_impliques: [42, 39],
      declencheur: 'Incident grave lié aux mesures de sécurité réduites autour de la Fosse Interdite',
      consequence: 'Thyrum exposé — et Thyss confronté à sa responsabilité dans la décision',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Superviseur ayant réduit les mesures de sécurité sous pression de Thyss. Sait que c\'est une erreur. Continue pour éviter de l\'exposer.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'contact', note: 'A exercé la pression pour réduire les mesures de sécurité.' },
    { id: 39, nom: 'Drevaya', type: 'adversaire', note: 'Adversaire indirect — intérêts incluant des mesures de sécurité réelles.' },
  ],

  combat: {
    sorts: [
      'Bouclier de roche (Roche) — formation défensive — protection de zone',
      'Projection de débris (Roche) — fragmentation — attaque de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'thyrum_chantier',
      description: 'Thyrum supervisant un chantier autour de la Fosse Interdite d\'Ormn-Dur — un Chthonien de 54 ans qui examine des relevés de sécurité. Les chiffres montrent des marges insuffisantes. Son expression est de quelqu\'un qui sait ce que ces chiffres signifient et qui continue quand même.',
      style: 'réaliste Chthonien superviseur, Fosse Interdite d\'Ormn-Dur, mesures de sécurité réduites, complicité under pression',
    },
  ],

  lore_long: `Thyrum a réduit les mesures de sécurité autour de la Fosse Interdite sous pression de Thyss (42). Il sait que c'était une erreur.

Il ne peut pas corriger sa décision sans révéler pourquoi il avait cédé. Il continue et surveille les signes d'incident.

Si un incident grave se produit, sa complicité sera exposée.`,
};

export default thyrum;
