import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvgrav: PersonnageLoreComplet = {
  id: 371,
  nom: 'Thyrvgrav',
  element: 'Gravité',
  element2: 'Eau',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Néréide hydrologue — une forme adaptée aux profondeurs, avec une capacité à rester immobile dans des courants forts. Ses mouvements en surface sont lents et délibérés — il économise l\'énergie pour les plongées.',
    peau: 'Bleu-vert profond Néréide avec des bandes plus claires aux flancs — marqueurs d\'espèce pour les profondeurs abyssales où la visibilité est réduite. Des zones de pression légèrement marquées aux tempes — l\'effet à long terme des plongées à haute pression gravitationnelle.',
    yeux: 'Bleu-noir avec une capacité de vision basse lumière — adaptés aux profondeurs où il travaille.',
    vetements: 'Tenue d\'hydrologue de terrain — réduite au minimum pour les plongées profondes, avec des instruments de mesure fixés au corps.',
    signes_particuliers: 'Il parle avec des silences longs — une habitude des profondeurs où la communication acoustique demande de la patience.',
  },

  psychologie: {
    dominante: 'Cartographie des courants sous-marins profonds de Thalassyr via l\'utilisation de la gravité — la manipulation des champs gravitationnels lui permet de tracer les flux à des profondeurs où les instruments standard ne fonctionnent pas.',
    mecanisme_de_defense: 'La profondeur comme clarté. Dans les profondeurs, les complexités de surface disparaissent. Les courants sont ce qu\'ils sont. Il y a une honnêteté dans les forces physiques.',
    contradiction_interne: 'Ses cartographies des courants profonds révèlent des flux qui convergent vers des zones sous les coordonnées de la Fosse Interdite — des connexions hydrographiques que la Confédération n\'a pas encore analysées. Narev (21) lui a demandé si ces convergences étaient documentées. Il a dit oui.',
    rapport_aux_autres: 'Narev (21) est un contact pour les données sur les zones profondes qui touchent aux Déserts et à la Fosse — Narev partage des informations sur les anomalies de la Fosse en échange des cartographies hydrologiques. Shyrael (90) est son supérieur technique à la Confédération.',
    vision_du_monde: 'Les courants sous-marins sont la mémoire des mouvements de l\'eau depuis des millénaires. Cartographier ces courants est lire cette mémoire. Ce qu\'il trouve dans les profondeurs est réel quelle que soit son interprétation.',
  },

  histoire: {
    enfance: {
      titre: 'Les courants de Thalassyr',
      contenu: 'À 12 ans, dans les eaux de Thalassyr, il avait développé une façon intuitive de sentir les courants profonds via sa capacité Gravité — la gravité guidait les flux d\'eau comme elle guidait tout le reste. Il avait commencé à cartographier ce que ses parents Néréides ne pouvaient pas percevoir aussi profondément.',
    },
    arrivee: {
      titre: 'L\'intégration Confédération',
      contenu: 'À 24 ans, Shyrael (90) l\'avait recruté pour le programme hydrologique de la Confédération — cartographier les courants profonds pour comprendre les effets des zones élémentaires actives sur les circulations sous-marines. Sa capacité unique Gravité/Eau était précisément ce que le programme cherchait.',
    },
    premier_conflit: {
      titre: 'Les convergences vers la Fosse',
      contenu: 'À 29 ans, sa cartographie avait révélé des courants profonds qui convergeaient vers des zones sous-marines correspondant aux coordonnées de la Fosse Interdite. La Fosse était terrestre — mais quelque chose sous la Fosse influençait les courants marins profonds. Il avait rapporté à Shyrael.',
    },
    revelation: {
      titre: 'La question de Narev',
      contenu: 'Narev (21) l\'avait contacté via des canaux Confédération après avoir eu accès à son rapport sur les convergences. Narev voulait savoir si les courants convergeaient en cycles — si les flux variaient dans le temps de façon périodique. Cette question était trop précise. Drethvael (370) lui avait posé une question similaire.',
    },
    etat_actuel: {
      titre: 'Le cycle aquatique',
      contenu: 'Ses mesures confirmaient un cycle aquatique — les convergences vers les zones de la Fosse s\'intensifiaient sur un rythme d\'environ 18 mois. Le cycle aquatique et le cycle gravitationnel de Drethvael (370) semblaient correspondre. Il avait partagé cette observation avec Narev. Il n\'avait pas encore contacté Drethvael directement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvgrav_cycle_aquatique',
      titre: 'La synchronisation des cycles',
      description: 'Le cycle aquatique qu\'il a documenté (18 mois) correspond au cycle gravitationnel de Drethvael (370). Deux phénomènes distincts — courants marins et anomalies gravitationnelles terrestres — avec le même rythme de cycle. Narev (21) a les deux informations. Il ne sait pas encore si Narev a fait le lien.',
      personnages_impliques: [21, 90],
      declencheur: 'Identification d\'une synchronisation entre le cycle aquatique et le cycle gravitationnel de Drethvael',
      consequence: 'Information partagée avec Narev — implications de la synchronisation non encore interprétées',
    },
    {
      id: 'thyrvgrav_profondeur_fosse',
      titre: 'Ce qu\'il y a sous la Fosse',
      description: 'Les courants convergent vers des zones sous la Fosse avec une régularité qui n\'est pas aléatoire. Quelque chose sous la Fosse attire ces courants. Ce quelque chose a un cycle de 18 mois et s\'intensifie à chaque cycle. Shyrael (90) lui a demandé de préparer un rapport pour la Confédération.',
      personnages_impliques: [90, 21],
      declencheur: 'Demande de rapport Confédération sur les courants convergeant vers la Fosse',
      consequence: 'Rapport qui va formaliser des informations que Narev a déjà — impact sur les accords de partage',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Hydrologue Néréide Confédération cartographiant les courants marins convergeant vers la Fosse Interdite. Cycle aquatique de 18 mois synchrone avec le cycle gravitationnel de Drethvael (370). Rapport Confédération en préparation.',

  relations: [
    { id: 21, nom: 'Narev', type: 'allié', note: 'Contact pour les zones de convergence vers la Fosse. Ses questions révèlent une connaissance préalable.' },
    { id: 90, nom: 'Shyrael', type: 'supérieur', note: 'Supérieur technique Confédération. A demandé un rapport formel sur les convergences.' },
  ],

  combat: {
    sorts: [
      'Pression de profondeur (Eau) — concentration d\'une pression hydraulique — force de choc aquatique',
      'Champ de gravité subaquatique (Gravité) — création d\'un champ gravitationnel sous l\'eau — déviation des courants ou des trajectoires',
      'Flux de cartographie (Eau + Gravité) — émission d\'un courant guidé par gravité — lecture des structures sous-marines dans une zone',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvgrav_profondeur',
      description: 'Thyrvgrav dans les eaux profondes de Thalassyr — immobile dans un courant fort, ses instruments fixés au corps. Des tracés lumineux autour de lui montrent les flux qu\'il perçoit. Son regard est orienté vers le bas — vers des profondeurs encore plus grandes. L\'espace autour de lui est sombre et vaste.',
      style: 'réaliste hydrologue Néréide, profondeurs abyssales de Thalassyr, courants visualisés, instruments de mesure corporels',
    },
  ],

  lore_long: `Thyrvgrav cartographie les courants sous-marins profonds de Thalassyr et a découvert qu'ils convergent vers des zones sous la Fosse Interdite selon un cycle de 18 mois.

Ce cycle aquatique est synchrone avec le cycle gravitationnel documenté par Drethvael (370) — deux phénomènes distincts, même rythme.

Narev (21) a les deux informations. Shyrael (90) a demandé un rapport Confédération. Le rapport va formaliser quelque chose que Narev comprend peut-être mieux qu'eux.`,
};

export default thyrvgrav;
