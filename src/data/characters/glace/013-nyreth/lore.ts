import type { PersonnageLoreComplet } from '../../../lore-types';

const nyreth: PersonnageLoreComplet = {
  id: 13,
  nom: 'Nyreth',
  element: 'Glace',
  espece: 'Givrins',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Givrin de taille moyenne — mais son apparence change. C\'est la première chose à savoir sur lui. Il ne ressemble pas à ce qu\'il était. Actuellement : cheveux courts noirs, cicatrice sur le sourcil gauche qu\'il n\'avait pas avant, port légèrement courbé qu\'il simule.',
    peau: 'Pâle Givrin mais exposé à Varkhôl depuis des années — légèrement plus chaud que la normale pour un Givrin. Ses mains gardent une froideur résiduelle perceptible au contact, qu\'il ne peut pas tout à fait dissimuler.',
    yeux: 'Gris très pâle avec une qualité de surveillance permanente — il enregistre les sorties, les personnes, les routes de fuite. Il ne s\'assoit jamais le dos à une porte.',
    vetements: 'Tenue ordinaire — délibérément quelconque. Ni trop pauvre ni trop aisée. Rien qui permette de le mémoriser. Il change régulièrement.',
    signes_particuliers: 'Il ne répond jamais à une question sans une légère pause — un réflexe de vérification de ce qu\'il est censé être. Les personnes qui le connaissent depuis longtemps interprètent ça comme de la réflexion. C\'est de la prudence.',
  },

  psychologie: {
    dominante: 'Survie sous une identité changeante après avoir refusé un ordre impérial et été supposé mort. Il aide les Dissidentes depuis 11 ans sous des noms et des visages différents. Sa vraie question : est-ce qu\'une identité qu\'on porte assez longtemps devient réelle?',
    mecanisme_de_defense: 'L\'effacement. Il a effacé systématiquement toute trace de ce qu\'il était. Il n\'a plus de contacts avec quiconque de son ancienne vie. Ce n\'est pas seulement de la prudence — c\'est devenu une façon d\'être.',
    contradiction_interne: 'Il aide les Dissidentes parce qu\'il croit à leur cause — mais il aide aussi parce qu\'ils lui fournissent la structure d\'une identité sans qu\'il ait à en construire une. Sans mission, il ne sait pas qui il est. La mission est devenue sa personnalité.',
    rapport_aux_autres: 'Brasia (1) sait qui il est — elle l\'a recruté. Personne d\'autre parmi les Dissidentes ne connaît son identité précédente. Il opère en cellule isolée. Thessandra (10) lui a prodigué des soins une fois sans savoir qui il était.',
    vision_du_monde: 'L\'Empire crée des instruments et détruit les instruments qui refusent d\'exécuter. Il a refusé et a choisi de ne pas être détruit. Ce choix l\'a obligé à devenir quelqu\'un d\'autre. Il pense parfois que quelqu\'un d\'autre aurait dû faire ce choix à sa place.',
  },

  histoire: {
    enfance: {
      titre: 'Le recrutement de Crysalme',
      contenu: 'À 19 ans, à Crysalme, il avait été recruté par l\'Empire pour devenir Régulateur — un Élu Glace capable de neutraliser des Élus "déstabilisateurs". Son élément Glace était parfait pour le rôle : neutraliser sans tuer. Il avait accepté. Il croyait alors que l\'Empire faisait quelque chose d\'utile.',
    },
    arrivee: {
      titre: 'Les 8 ans de service',
      contenu: 'Pendant 8 ans, il avait exécuté des missions de régulation — neutraliser des Élus non enregistrés, sécuriser des zones de tension, protéger des installations. Il avait rarement posé de questions. Ses supérieurs l\'avaient bien noté.',
    },
    premier_conflit: {
      titre: 'L\'ordre refusé',
      contenu: 'À 27 ans, il avait reçu un ordre : neutraliser une guérisseuse clandestine Pyrienne dans les ruines de Khar-Vurn. Il avait vu la liste de ses patients — des enfants brûlés qui n\'avaient pas accès aux soins officiels. Il avait transmis à ses supérieurs que la cible était introuvable. C\'était son premier mensonge à l\'Empire.',
    },
    revelation: {
      titre: 'La mort simulée',
      contenu: 'Son supérieur avait soupçonné le mensonge. Un autre Régulateur avait été envoyé pour "l\'assister" — ce qui signifiait surveiller. Nyreth avait simulé sa mort dans un incident de saturation thermique, laissé suffisamment de preuves pour que l\'enquête soit convaincue, et disparu. Il avait 27 ans. Il avait recommencé.',
    },
    etat_actuel: {
      titre: 'La cellule de Khar-Vurn',
      contenu: 'Il opère depuis 11 ans dans et autour de Khar-Vurn sous diverses identités. Sa mission actuelle : repérage et extraction d\'Élus non enregistrés identifiés par les agents de Cendrix (2). Il sait que Cendrix cherche une "anomalie de signature Glace" dans la zone — lui. La signature ne change pas même quand l\'identité change.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyreth_signature',
      titre: 'La signature indissimulable',
      description: 'Une signature élémentaire Glace dans une ville de Pyriens est détectable — Cendrix (2) a des capteurs actifs dans la zone de Khar-Vurn. Nyreth peut changer d\'identité mais pas d\'élément. Il espace ses utilisations de Glace, mais l\'extraction en cours requiert une neutralisation — et neutraliser laisse une trace.',
      personnages_impliques: [2, 1],
      declencheur: 'Besoin d\'utiliser son élément pour une extraction critique',
      consequence: 'Risque d\'identification par la signature Glace — conflit entre mission et survie',
    },
    {
      id: 'nyreth_identite',
      titre: 'L\'identité trop longue',
      description: 'Son identité actuelle dure depuis 14 mois — trop longtemps selon ses propres règles. Il a commencé à développer des relations dans son quartier, à avoir des habitudes reconnaissables. Brasia (1) lui a signalé que des témoins de son ancienne vie pourraient circuler dans la zone. L\'extraction force un changement d\'identité qu\'il n\'a pas encore préparé.',
      personnages_impliques: [1, 10],
      declencheur: 'Durée excessive d\'une identité et risque de reconnaissance',
      consequence: 'Nécessité de disparaître avant que les connexions créées depuis 14 mois ne deviennent des vulnérabilités',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Régulateur impérial supposé mort depuis 11 ans. Aide les Dissidentes sous identités changeantes depuis Khar-Vurn. Sa signature Glace est son seul trait stable — et Cendrix (2) cherche précisément une anomalie Glace dans la zone.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'allié', note: 'Sait qui il est. L\'a recruté. Le seul contact Dissident qui connaît son identité précédente.' },
    { id: 2, nom: 'Cendrix', type: 'adversaire', note: 'Cherche une anomalie de signature Glace dans Khar-Vurn sans savoir qu\'il cherche Nyreth.' },
    { id: 10, nom: 'Thessandra', type: 'contact', note: 'L\'a soigné une fois sans savoir qui il était. Contact médical en cas d\'urgence.' },
  ],

  combat: {
    sorts: [
      'Neutralisation par gel (Glace) — ralentissement puis immobilisation d\'une cible — non létal si contrôlé',
      'Barrière de glace (Glace) — mur de glace instantané — couverture ou cloisonnement',
      'Frappe cryogénique (Glace) — impact localisé à température extrême — incapacitation rapide',
    ],
  },

  image_prompts: [
    {
      id: 'nyreth_extraction',
      description: 'Nyreth dans une ruelle de Khar-Vurn — une silhouette quelconque avec un manteau ordinaire, debout contre un mur, regardant un coin de rue. Ses mains légèrement sorties de ses poches laissent une trace de givre très légère sur la brique. Son expression est neutre. Aucun signe qu\'il est là pour quelque chose.',
      style: 'réaliste Givrin infiltré, anonyme, Khar-Vurn chaleureux, trace de givre discrète, surveillance',
    },
  ],

  lore_long: `Nyreth a refusé un ordre impérial à 27 ans et simulé sa mort. Il aide les Dissidentes depuis 11 ans sous des identités changeantes à Khar-Vurn.

Sa signature Glace ne change pas. Dans une ville de Pyriens, toute manifestation de Glace est détectable — Cendrix (2) cherche précisément cette anomalie sans savoir ce qu'il cherche.

Son identité actuelle dure depuis 14 mois. Trop longtemps. Les connexions formées dans sa couverture sont devenues des vulnérabilités qu'il n'a pas encore abandonnées.`,
};

export default nyreth;
