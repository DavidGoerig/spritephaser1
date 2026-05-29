import type { PersonnageLoreComplet } from '../../../lore-types';

const tyranel: PersonnageLoreComplet = {
  id: 92,
  nom: 'Tyranel',
  element: 'Eau',
  espece: 'Néréide',
  region: 'Thalassyr',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Néréide de 47 ans, robuste avec les mains d\'un constructeur naval. Il sent le bois mouillé et le sel. Ses épaules portent des décennies de travail manuel.',
    peau: 'Bleutée Néréide avec une luminescence aqueuse aux paumes — l\'élément Eau d\'un homme dont le travail est indissociable de la mer.',
    yeux: 'Bleus avec une qualité pragmatique. Il ne cherche pas à comprendre pourquoi les gens veulent des compartiments supplémentaires dans leurs bateaux. Il les construit.',
    vetements: 'Tenue de chantier naval — résistante, tachée de bois et de poix. Il n\'a pas l\'air d\'un réseau d\'opération clandestine.',
    signes_particuliers: 'Ses plans de bateaux incluent des caches Dissidentes sans qu\'il pose de questions. C\'est une règle professionnelle qu\'il a établie avec lui-même.',
  },

  psychologie: {
    dominante: 'Constructeur de bateaux dont les plans incluent des compartiments de cache pour les Dissidents. Il ne pose pas de questions sur l\'usage. C\'est un service professionnel comme un autre — avec des spécifications particulières.',
    mecanisme_de_defense: 'La compétence professionnelle comme immunité. Il construit selon les spécifications fournies. L\'usage n\'est pas de son ressort.',
    contradiction_interne: 'Il sait ce que les caches servent — il n\'est pas naïf. Sa règle de non-questionnement est une décision de ne pas formaliser cette connaissance.',
    rapport_aux_autres: 'Vel (17) est un client régulier pour les modifications de bateaux. Brasia (1) est dans le réseau — certaines de ses commandes viennent indirectement de là.',
    vision_du_monde: 'Un bateau bien construit dure des décennies. Ce qu\'il transporte pendant ces décennies n\'est pas sa responsabilité.',
  },

  histoire: {
    enfance: {
      titre: 'La construction navale',
      contenu: 'Formé dans la construction navale à Thalassyr depuis l\'enfance. Troisième génération dans les mêmes chantiers. L\'eau et le bois sont ses matériaux naturels.',
    },
    arrivee: {
      titre: 'La première demande',
      contenu: 'Il y a 15 ans, un client lui avait demandé des "compartiments étanches supplémentaires" avec des spécifications inhabituelles. Il avait construit selon les plans fournis et posé une seule question : "ces compartiments sont-ils légaux en tant que structures ?" On lui avait répondu oui. Il avait arrêté là.',
    },
    premier_conflit: {
      titre: 'La règle',
      contenu: 'Après plusieurs demandes similaires, il avait formalisé sa règle : questions structurelles uniquement, pas d\'usage. Cette règle lui permettait de travailler sans fardeau éthique immédiat.',
    },
    revelation: {
      titre: 'Les bateaux',
      contenu: 'Il avait construit peut-être 30 bateaux avec des compartiments de cache en 15 ans. Aucun n\'avait été saisi ou incriminé. Sa règle avait résisté au temps.',
    },
    etat_actuel: {
      titre: 'La commande continue',
      contenu: 'Les commandes arrivent. Il construit. Les bateaux partent dans la mer de Thalassyr avec des compartiments dont il connaît l\'usage sans l\'avoir demandé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'tyranel_bateaux',
      titre: 'Les bateaux comme preuve',
      description: 'Les bateaux de Tyranel avec leurs caches Dissidentes naviguent à Thalassyr. Si l\'Empire commence à saisir des bateaux et à trouver les compartiments, ils remonteront jusqu\'au constructeur. Sa règle de non-questionnement ne le protège pas légalement.',
      personnages_impliques: [17, 1],
      declencheur: 'Saisie d\'un bateau de Tyranel révélant un compartiment de cache',
      consequence: 'Tyranel devenant un lien identifié dans le réseau Dissident maritime',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Constructeur de bateaux dont les plans incluent des caches Dissidentes. Ne pose pas de questions sur l\'usage.',

  relations: [
    { id: 17, nom: 'Vel', type: 'contact', note: 'Client régulier pour les modifications.' },
    { id: 1, nom: 'Brasia', type: 'contact', note: 'Réseau indirect. Certaines commandes viennent de là.' },
  ],

  combat: {
    sorts: [
      'Construction de barrière (Eau) — manipulation d\'eau pour créer une structure — usage défensif',
      'Résistance aux courants (Eau) — navigation dans des conditions difficiles — mobilité maritime',
    ],
  },

  image_prompts: [
    {
      id: 'tyranel_chantier',
      description: 'Tyranel dans son chantier naval à Thalassyr — un Néréide de 47 ans construisant un bateau avec des compartiments particuliers. Il suit des plans spécifiques. Il ne pose pas de questions.',
      style: 'réaliste Néréide constructeur naval, chantier Thalassyr, compartiments de cache, non-questionnement professionnel',
    },
  ],

  lore_long: `Tyranel construit des bateaux à Thalassyr avec des compartiments de cache Dissidents depuis 15 ans. Il ne pose pas de questions sur l'usage.

Sa règle : questions structurelles uniquement. Cette règle lui permet de travailler sans fardeau éthique immédiat.

30 bateaux avec des caches en 15 ans. Aucun saisi jusqu'ici.`,
};

export default tyranel;
