import type { PersonnageLoreComplet } from '../../../lore-types';

const premierAvatar: PersonnageLoreComplet = {
  id: 60,
  nom: 'Premier Avatar',
  element: 'Feu',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Homme-Lien de 43 ans — une présence qui a été construite pour représenter le pouvoir total. Il est grand, stable dans ses mouvements, avec une économie gestuelle que les 15 ans de gouvernance ont développée. Il n\'a plus de gestes inutiles. Les gestes inutiles trahissent.',
    peau: 'Brune Homme-Lien avec une luminescence multiélémentaire en repos — discrète, contrôlée, présente seulement si on cherche à la voir. Il a appris à contrôler cette luminescence entièrement. C\'est l\'une des premières choses qu\'il a maîtrisées.',
    yeux: 'Noirs profonds avec une qualité de calcul — ses yeux évaluent les personnes comme des équations politiques. Les gens qui l\'ont vu dans des réunions disent qu\'il ne regarde pas les personnes, il regarde leurs positions. Ce n\'est pas de la froideur — c\'est une discipline. La froideur intérieure est autre chose.',
    vetements: 'Tenue de gouvernance de l\'Empire — noire et dorée, sans ostentation superflue. Il porte le pouvoir visiblement mais sobrement. Ceux qui connaissent l\'Empire depuis longtemps disent qu\'il s\'habille comme quelqu\'un qui n\'a pas besoin de le démontrer.',
    signes_particuliers: 'Il ne parle jamais de lui-même en premier dans une conversation. Il pose des questions, il écoute, il comprend — puis il parle. Cette méthode lui a valu une réputation d\'efficacité. Elle lui coûte quelque chose qu\'il ne peut pas mesurer.',
  },

  psychologie: {
    dominante: 'Gouverne depuis 15 ans avec une efficacité que personne dans l\'Empire n\'a égalée — mais avec une fissure intérieure que personne n\'a encore vue. Il a peur de lui-même. Pas de ce qu\'il pourrait faire — de ce qu\'il est. Un Homme-Lien avec tous les éléments qui gouverne au nom de structures qui ne savent pas ce qu\'il est vraiment.',
    mecanisme_de_defense: 'L\'efficacité comme démonstration qu\'il n\'est pas ce qu\'il craint d\'être. Tant qu\'il gouverne bien — pas juste, bien — il prouve que sa nature n\'est pas une menace. Cette preuve doit être renouvelée tous les jours.',
    contradiction_interne: 'Il gouverne l\'Empire qui a traqué le Second Avatar (59) depuis 28 ans. Il est lui-même un Avatar — il sait ce que c\'est d\'être chassé avant d\'être capturé. Il est du côté de la chasse maintenant. Il ne s\'interroge pas sur ce que ça dit de lui. Il ne peut pas s\'interroger sur ça.',
    rapport_aux_autres: 'Le Second Avatar (59) est un problème politique qu\'il doit résoudre — pas comme une personne, comme une variable. Avel (64) est le Capteur qu\'il a envoyé — efficace, loyal, dangereux dans les mauvais scénarios. Lysael (63) opère à Virex pour la Convergence — il le sait, il surveille, il laisse faire pour l\'instant parce que la Convergence à Virex lui donne des informations sur les 39 enfants que ses propres agents n\'ont pas.',
    vision_du_monde: 'L\'Empire est le seul mécanisme existant capable de maintenir une stabilité à l\'échelle du monde. Ses défauts sont réels. Ses alternatives sont pires. Il le croit sincèrement. Il ne sait pas entièrement pourquoi il le croit — si c\'est de la conviction ou si c\'est de la peur que l\'alternative soit lui-même.',
  },

  histoire: {
    enfance: {
      titre: 'La formation',
      contenu: 'Né environ 15 ans avant la naissance du Second Avatar, il avait été identifié comme Homme-Lien multi-élémentaire à 8 ans. L\'Empire avait choisi d\'intégrer plutôt qu\'éliminer — une décision calculée. Il avait été formé dans les structures de l\'Empire depuis l\'âge de 9 ans. La Citadelle avait été son éducation, son milieu, son foyer.',
    },
    arrivee: {
      titre: 'La gouvernance',
      contenu: 'À 28 ans, il avait pris la gouvernance de l\'Empire — un processus qui avait duré 3 ans de transition formelle. Il avait reçu les clés de la Citadelle et des structures qu\'il avait appris à connaître depuis 19 ans. Il avait dit lors de son premier discours qu\'il gouvernerait avec méthode. 15 ans plus tard, c\'est ce qu\'il fait.',
    },
    premier_conflit: {
      titre: 'La peur',
      contenu: 'À 35 ans, lors d\'une crise politique à Varkhôl, il avait utilisé ses éléments sans contrôle pendant 4 secondes — une perte de contrôle dans une chambre de réunion à huis clos que seuls 3 témoins avaient vue. Aucun des 3 ne pouvait parler. Il avait géré la situation. Il avait ensuite compris ce qui s\'était passé : sa peur de ne pas être légitime avait déclenché quelque chose. Il avait redoublé de discipline depuis.',
    },
    revelation: {
      titre: 'Le Second Avatar',
      contenu: 'À 38 ans, il avait reçu les premiers rapports confirmés sur le Second Avatar — pas des rumeurs, des preuves. Un autre Homme-Lien multi-élémentaire, 15 ans plus jeune, vivant parmi les Dissidentes. Il avait pris la décision d\'envoyer des Capteurs. Il n\'avait pas regardé en face ce que cette décision disait de lui.',
    },
    etat_actuel: {
      titre: 'Avel à 48h',
      contenu: 'Avel (64) est à 48h d\'arriver à Virex. Le Premier Avatar attend les résultats. Il pense à la fissure intérieure qu\'il ne nomme pas. Si deux Avatars se confrontent, ce qui se passe n\'est pas dans aucun des scénarios qu\'il a modélisés. Il ne s\'est pas demandé pourquoi il n\'a pas modélisé ce scénario.',
    },
  },

  evenements_narratifs: [
    {
      id: 'premier_avatar_avel',
      titre: 'Ce qu\'il a envoyé',
      description: 'Avel (64) est son Capteur. Il l\'a envoyé avec des instructions claires sur la capture du Second Avatar (59). Il n\'a pas prévu le scénario où les deux se rencontrent et où l\'un d\'eux découvre quelque chose sur l\'autre qui change la nature de la confrontation.',
      personnages_impliques: [64, 59],
      declencheur: 'Avel atteignant Virex et rencontrant le Second Avatar',
      consequence: 'Confrontation dont le résultat dépend de ce qu\'Avel choisit de faire — suivre les instructions ou répondre à ce qu\'il voit',
    },
    {
      id: 'premier_avatar_fissure',
      titre: 'La fissure',
      description: 'La fissure intérieure du Premier Avatar est réelle. Il l\'a cachée pendant 15 ans. Si quelqu\'un — le Second Avatar, Avel, n\'importe qui — voyait ce qu\'il est quand le contrôle lâche, la légitimité de 15 ans de gouvernance serait remise en question. Il gouverne en partie pour que ça n\'arrive pas.',
      personnages_impliques: [59, 64],
      declencheur: 'Situation de crise qui dépasse le contrôle du Premier Avatar',
      consequence: 'Révélation de la fissure — et question sur ce que ça signifie pour l\'Empire et pour lui-même',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Gouverne l\'Empire depuis 15 ans. A peur de lui-même. A envoyé Avel (64) capturer le Second Avatar (59). La fissure intérieure qu\'il cache depuis 15 ans est le vrai risque de cet arc. Il ne le sait pas encore.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'adversaire', note: 'Un problème politique. Un autre lui-même. Il ne s\'est pas demandé ce que ça voulait dire.' },
    { id: 64, nom: 'Avel', type: 'allié', note: 'Son Capteur. Loyal et efficace. Envoyé à Virex. Le Premier Avatar attend.' },
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Convergence à Virex. Il la surveille. Elle lui fournit des informations sans le savoir.' },
  ],

  combat: {
    sorts: [
      'Maîtrise multiélémentaire (Tous) — accès contrôlé à tous les éléments — précision maximale mais rigidité émotionnelle requise',
      'Gouvernance élémentaire (Tous) — suppression de l\'élément dominant d\'une zone — contrôle de l\'environnement',
      'Fissure (Tous) — perte de contrôle involontaire — libération totale et non dirigée de l\'énergie élémentaire',
    ],
  },

  image_prompts: [
    {
      id: 'premier_avatar_citadelle',
      description: 'Le Premier Avatar dans une salle de la Citadelle — un Homme-Lien de 43 ans assis à une table avec des rapports devant lui, regardant le vide devant lui plutôt que les documents. Son expression est de quelqu\'un qui maintient quelque chose qui coûte. Derrière lui : les fenêtres de la Citadelle avec vue sur l\'Isthme. Il n\'y a personne d\'autre dans la pièce.',
      style: 'réaliste Homme-Lien gouvernant, Citadelle, rapports de Virex, maintien d\'un contrôle coûteux, fissure invisible, solitude politique',
    },
  ],

  lore_long: `Le Premier Avatar gouverne l'Empire depuis 15 ans avec une efficacité parfaite et une fissure intérieure que personne n'a encore vue. Il a peur de lui-même — pas de ce qu'il pourrait faire, de ce qu'il est.

Il a envoyé Avel (64) capturer le Second Avatar (59). Il attend les résultats.

À 35 ans, une perte de contrôle pendant 4 secondes dans une chambre à huis clos. Trois témoins. Aucun ne peut parler. Il a redoublé de discipline depuis. La fissure est là.`,
};

export default premierAvatar;
