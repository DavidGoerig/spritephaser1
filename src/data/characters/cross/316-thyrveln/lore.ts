import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrveln: PersonnageLoreComplet = {
  id: 316,
  nom: 'Thyrveln',
  element: 'Roche',
  element2: 'Acier',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Moyen avec une précision dans les mouvements — quelqu\'un qui travaille dans des marges où les erreurs ont des conséquences. Il mesure avant de poser.',
    peau: 'Gris Chthonien avec des stries noires aux mains — l\'Acier secondaire qui s\'exprime dans des zones de contact avec des matériaux très denses. Les stries ressemblent à des fractures dans la surface.',
    yeux: 'Gris-brun, avec une habitude d\'évaluer si quelqu\'un est seul ou accompagné avant de parler.',
    vetements: 'Tenue de chantier impérial pendant les heures de travail — uniforme complet avec badge d\'accès. Tenue neutre sans marqueur le reste du temps. Il ne mélange pas les deux.',
    signes_particuliers: 'Il note mentalement les numéros de référence des matériaux — il peut identifier la provenance d\'une pièce de construction par son marquage. Cette compétence administrative lui permet de savoir ce qui est traçable et ce qui ne l\'est pas.',
  },

  psychologie: {
    dominante: 'Détournement de ressources comme acte de redistribution. Les matériaux impériaux construisent des infrastructures que l\'Empire utilise pour contrôler Ormn-Dur. Ces mêmes matériaux peuvent construire des refuges pour ceux que l\'Empire cherche à contrôler.',
    mecanisme_de_defense: 'La documentation de justification. Chaque détournement a une justification administrative dans ses registres — des erreurs de comptage, des rebuts, des excédents de commande. Si quelqu\'un vérifie, les chiffres correspondent.',
    contradiction_interne: 'Il détourne des matériaux pour les Dissidentes. Il travaille pour les projets impériaux qui financent son accès à ces matériaux. Sans l\'accès impérial, pas de détournement. Il a besoin de l\'Empire pour travailler contre l\'Empire.',
    rapport_aux_autres: 'Kargoval (302) est son principal bénéficiaire — les refuges pour Élus non-enregistrés. Brysketh (211) est son contact Dissident direct pour les demandes et les instructions.',
    vision_du_monde: 'La roche et l\'acier sont neutres. Ce qu\'on en fait ne l\'est pas. Il choisit ce qu\'on en fait quand il le peut.',
  },

  histoire: {
    enfance: {
      titre: 'La formation impériale',
      contenu: 'Formé à 18 ans dans un programme impérial de gestion des matériaux de construction — une filière administrative, pas technique. Il savait commander, inventorier, justifier. À 22 ans, affecté à la supervision des stocks de construction à Ormn-Dur.',
    },
    arrivee: {
      titre: 'Le premier détournement',
      contenu: 'À 26 ans, Brysketh (211) l\'avait contacté — pas directement, via un intermédiaire qui savait qu\'il gérait les stocks. La demande : des matériaux de construction pour un projet non officiel. La quantité était petite — une erreur de comptage plausible. Il avait détourné. Il avait attendu que quelqu\'un s\'en aperçoive. Personne ne l\'avait fait.',
    },
    premier_conflit: {
      titre: 'Le volume croissant',
      contenu: 'Sur 3 ans, les demandes avaient augmenté en volume et en fréquence. Les justifications administratives devenaient plus complexes — plus d\'erreurs de comptage, plus de rebuts. Il avait atteint un niveau où une vérification approfondie pourrait identifier le pattern. Il avait signalé à Brysketh (211) qu\'il devait réduire le volume pendant 6 mois. Brysketh avait accepté.',
    },
    revelation: {
      titre: 'La nature des refuges',
      contenu: 'Brysketh lui avait montré un des refuges construits avec ses matériaux — pas pour le remercier, pour lui montrer ce que son travail produisait concrètement. Des familles avec des Élus non-enregistrés. Des gens qui n\'avaient pas d\'autre espace. Il avait décidé que le risque était proportionnel à ce qu\'il voyait.',
    },
    etat_actuel: {
      titre: 'Le cycle de 6 mois',
      contenu: 'Il opère en cycles de 6 à 8 mois de détournement, puis 4 à 6 mois de volume réduit pour que les chiffres se normalisent. Ce rythme lui a permis de fonctionner 8 ans sans vérification formelle. Kargoval (302) est le bénéficiaire principal. Brysketh (211) gère les priorités. Il exécute.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrveln_cycle_actuel',
      titre: 'Le moment de réduction',
      description: 'Il est actuellement dans une phase de réduction de volume — les 4 mois suivant un cycle de détournement intense. Les demandes de Brysketh (211) et Kargoval (302) attendent. Il a dit que ça reprendrait dans 6 semaines. En attendant, il regarde ses registres pour s\'assurer que les chiffres se normalisent correctement.',
      personnages_impliques: [302, 211],
      declencheur: 'Volume de détournement ayant atteint le seuil de risque',
      consequence: 'Pause dans l\'approvisionnement — demandes en attente pour 6 semaines',
    },
    {
      id: 'thyrveln_verificateur',
      titre: 'L\'inspection annuelle',
      description: 'L\'inspection annuelle des stocks impériaux aura lieu dans 3 mois. C\'est l\'inspection la plus complète de l\'année — celle qui pourrait identifier un pattern sur plusieurs années. Il a préparé ses registres. Ses justifications administratives tiennent sur chaque détournement individuel. Il n\'est pas certain qu\'elles tiennent sur l\'analyse du pattern global.',
      personnages_impliques: [],
      declencheur: 'Calendrier d\'inspection annuelle impériale',
      consequence: 'Risque d\'identification du pattern lors de l\'inspection — incertitude sur la résistance de la couverture',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Canal d\'approvisionnement en matériaux pour le réseau de refuges Dissident à Ormn-Dur. Son accès aux ressources impériales est le seul qui permette des constructions en volume suffisant. Ses cycles de détournement sont la contrainte principale du réseau.',

  relations: [
    { id: 302, nom: 'Kargoval', type: 'allié', note: 'Principal bénéficiaire des matériaux. Construit les refuges pour Élus. Collaboration directe.' },
    { id: 211, nom: 'Brysketh', type: 'allié', note: 'Contact Dissident direct. Gère les priorités et les instructions. A montré les refuges pour valider l\'engagement.' },
  ],

  combat: {
    sorts: [
      'Éclat de roche (Roche) — fragmentation d\'une surface rocheuse en projectiles — attaque de zone',
      'Lame improvisée (Acier) — durcissement d\'un objet métallique en arme — armement d\'urgence',
      'Mur de décombres (Roche) — déplacement rapide de matériaux de construction en barrière — obstacle immédiat',
    ],
  },

  image_prompts: [
    {
      id: 'thyrveln_registre',
      description: 'Thyrveln dans un bureau de gestion de stocks, en train de vérifier un registre. Sur son bureau, deux registres — l\'officiel et son propre carnet. Il compare les deux. Son expression est concentrée, sans anxiété visible. C\'est du travail de routine pour lui.',
      style: 'réaliste administratif souterrain, double documentation, concentration de vérification, routine de dissimulation',
    },
  ],

  lore_long: `Thyrveln gère les stocks de matériaux de construction impériaux à Ormn-Dur. Il en détourne une partie pour les refuges des Dissidentes.

Il opère en cycles — 6 à 8 mois de détournement, puis 4 à 6 mois de volume réduit. Ce rythme lui a permis de fonctionner 8 ans sans vérification formelle.

Brysketh (211) lui a montré un refuge construit avec ses matériaux — des familles avec des Élus non-enregistrés. Il a décidé que le risque était proportionnel à ce qu'il voyait.

Il est actuellement dans une phase de réduction. Les demandes attendent. L'inspection annuelle arrive dans 3 mois.

Sans l'accès impérial, pas de détournement. Il a besoin de l'Empire pour travailler contre l'Empire.`,
};

export default thyrveln;
