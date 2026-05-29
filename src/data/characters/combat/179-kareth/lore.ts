import type { PersonnageLoreComplet } from '../../../lore-types';

const kareth: PersonnageLoreComplet = {
  id: 179,
  nom: 'Kareth',
  element: 'Combat',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 52 ans, instructeur de combat — corpulence d\'un combattant vétéran. Économie de mouvement, posture de quelqu\'un qui a arrêté de prouver quelque chose depuis longtemps.',
    peau: 'Ton méditerranéen avec des cicatrices d\'entraînement et de combat réel — une carte de 30 ans de pratique.',
    yeux: 'Gris avec une qualité de quelqu\'un qui évalue les aptitudes sans jugement personnel.',
    vetements: 'Tenue d\'entraînement pratique — rien qui identifie une faction. Il enseigne à des personnes de factions diverses.',
    signes_particuliers: 'Il enseigne aux jeunes Élus sans mentor — ceux qui ont découvert leurs pouvoirs sans encadrement et qui n\'ont personne pour leur apprendre à les utiliser sans se blesser ou blesser les autres. Il enseigne la survie, pas la politique.',
  },

  psychologie: {
    dominante: 'Instructeur de combat Dissident dans l\'Isthme. Il forme des Élus qui n\'ont pas de mentor — des jeunes qui ont découvert leurs pouvoirs sans encadrement. Son enseignement est pratique : survivre, contrôler, ne pas se faire identifier. Il ne leur enseigne pas à se battre pour une cause.',
    mecanisme_de_defense: 'La compétence comme protection. Il ne prêche pas la politique — il enseigne la survie. Ses élèves peuvent aller où ils veulent après. Il ne leur impose aucune allégeance.',
    contradiction_interne: 'Enseigner la survie aux Élus non-encadrés est une aide réelle — mais c\'est aussi donner à des personnes sans contexte politique la capacité de s\'en sortir dans n\'importe quelle situation, y compris des situations que les Dissidentes ne contrôlent pas.',
    rapport_aux_autres: 'Thyrekavel (275) est dans son réseau — un instructeur plus avancé vers qui il oriente ses meilleurs élèves. Le Second Avatar (59) est un contact indirect — des élèves qui gravitent vers son influence après l\'enseignement de base.',
    vision_du_monde: 'Un Élu sans contrôle de son élément est dangereux pour lui-même et pour les autres. La politique vient après. La survie d\'abord.',
  },

  histoire: {
    enfance: {
      titre: 'Le combat',
      contenu: 'Formé dans l\'Isthme, il avait développé un élément Combat rare — la capacité à synthétiser les techniques élémentaires des adversaires. Il avait cherché un mentor à 18 ans. Il n\'en avait pas trouvé dans l\'Isthme.',
    },
    arrivee: {
      titre: 'Les sans-mentor',
      contenu: 'À 35 ans, il avait commencé à rencontrer des jeunes Élus dans la même situation qu\'il avait connue — des pouvoirs sans encadrement. Il avait commencé à enseigner informellement. Les Dissidentes avaient formalisé son rôle.',
    },
    premier_conflit: {
      titre: 'L\'élève incontrôlable',
      contenu: 'Un de ses élèves avait utilisé son enseignement pour une attaque non-provoquée contre un fonctionnaire impérial. L\'attaque avait exposé le réseau de Kareth. Il avait dû déplacer ses sessions d\'entraînement.',
    },
    revelation: {
      titre: 'La responsabilité de l\'enseignant',
      contenu: 'Il avait compris que enseigner la survie sans contexte éthique créait des compétences sans direction. Il n\'avait pas changé son enseignement — il avait ajouté une conversation sur les conséquences, sans imposer de politique.',
    },
    etat_actuel: {
      titre: 'L\'instructeur',
      contenu: 'Il enseigne. Ses élèves apprennent à survivre. Certains choisissent ensuite.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kareth_sans_mentor',
      titre: 'L\'élève sans contexte',
      description: 'Kareth forme des Élus sans mentor dans l\'Isthme. Si un de ses élèves est recruté par l\'Empire — ou par la Convergence pour le Protocole — son enseignement de survie aura donné à une faction hostile un Élu capable de fonctionner de façon autonome.',
      personnages_impliques: [275, 59],
      declencheur: 'Un élève de Kareth recruté par une faction adverse après sa formation',
      consequence: 'Un Élu formé à la survie autonome agissant pour une faction que Kareth n\'a pas pu orienter',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Instructeur des Élus sans mentor dans l\'Isthme. Enseigne la survie, pas la politique. Ses élèves choisissent leur voie après sa formation de base.',

  relations: [
    { id: 275, nom: 'Thyrekavel', type: 'contact', note: 'Instructeur avancé vers qui il oriente ses meilleurs élèves.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Des élèves gravitent vers son influence après la formation de base.' },
  ],

  combat: {
    sorts: [
      'Synthèse de combat (Combat) — absorption et retournement de technique élémentaire adverse — contre-attaque',
      'Frappe de précision (Combat) — coup ciblé sur point faible — dommage maximal',
    ],
  },

  image_prompts: [
    {
      id: 'kareth_entrainement',
      description: 'Kareth entraînant un groupe de jeunes Élus dans un espace retiré de l\'Isthme — un Homme-Lien de 52 ans démontrant un mouvement de contrôle élémentaire. Ses élèves sont d\'éléments variés — feu, eau, plante. Il leur montre comment contenir, pas comment attaquer. Son expression est de quelqu\'un qui transmet quelque chose qu\'il aurait voulu recevoir à 18 ans.',
      style: 'réaliste Homme-Lien instructeur de combat, Isthme, Élus sans mentor, enseignement de survie, entraînement secret',
    },
  ],

  lore_long: `Kareth forme des jeunes Élus sans mentor dans l'Isthme. Il enseigne la survie et le contrôle — pas la politique.

Ses élèves apprennent à utiliser leurs éléments sans se blesser et sans se faire identifier. Ce qu'ils font après est leur choix.

Il a appris à la dure qu'enseigner la compétence sans direction crée des responsabilités qu'il ne peut pas toujours assumer.`,
};

export default kareth;
