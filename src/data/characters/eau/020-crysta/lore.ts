import type { PersonnageLoreComplet } from '../../../lore-types';

const crysta: PersonnageLoreComplet = {
  id: 20,
  nom: 'Crysta',
  element: 'Eau',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Néréide de 44 ans — une présence qui occupe plus d\'espace que son corps physique. Elle entre dans une pièce et les conversations s\'orientent vers elle sans qu\'elle le demande. Ce n\'est pas de la magie — c\'est 8 ans d\'apprentissage de la présence sociale.',
    peau: 'Bleutée claire Néréide avec une luminescence aquatique marquée — elle ne la dissimule pas comme d\'autres le font. La luminescence signale sa puissance élémentaire. Les personnes qui savent lire ces signaux comprennent qu\'elle est exceptionnellement développée.',
    yeux: 'Bleu profond avec une qualité de perception totale — elle voit les flux d\'eau dans un rayon étendu, les courants sous les surfaces, les mouvements que personne d\'autre ne perçoit. En conversation, elle regarde les personnes comme des points dans un système fluide.',
    vetements: 'Tenue de Confédération — parfaitement réelle, parfaitement légitime. Elle est officiellement analyste de liaison de la Confédération. Sa tenue signale ça. La Convergence derrière n\'est pas visible dans sa tenue.',
    signes_particuliers: 'Elle n\'est jamais pressée. Quelle que soit l\'urgence qu\'elle ressent, ses gestes et ses mots restent au même rythme. Les personnes la trouvent calmantes. Elle a appris ça délibérément.',
  },

  psychologie: {
    dominante: 'Infiltrée dans la Confédération de Thalassyr depuis 8 ans pour la Convergence — collecte des données sur les Élus, les flux d\'information, les dynamiques de pouvoir. Elle a commencé en pensant que Thalassyr serait un allié naturel contre l\'Empire. Elle a compris que Thalassyr ne prend parti pour personne.',
    mecanisme_de_defense: 'L\'analyse comme anesthésie. Elle transforme toutes ses émotions en données. Sa frustration de trouver Thalassyr aussi neutralisée que l\'Empire le prétend est devenue une analyse de la neutralité comme système. C\'est utile. Ce n\'est pas une guérison.',
    contradiction_interne: 'Elle croit que la neutralité de Thalassyr est de la complicité — choisir de ne pas choisir pendant que des personnes meurent des conséquences de ce non-choix. Mais son accord avec Aeronn (19) est lui-même une forme de neutralité instrumentalisée. Elle sait ça.',
    rapport_aux_autres: 'Naeleth (93) est son contact de recrutement dans le réseau Psy de Thalassyr — Naeleth recrute pour la Convergence sans que les recrues sachent exactement pour qui elles recrutent. Shyvel (154) collecte des données sur les profils d\'Élus qu\'elle utilise. Aeronn (19) est son accord de non-interférence.',
    vision_du_monde: 'La neutralité en présence d\'une injustice systémique est un choix politique. Thalassyr a fait ce choix depuis 64 ans. La Convergence, quelque soit ses méthodes, au moins fait un choix. Elle préfère un mauvais choix à l\'absence de choix.',
  },

  histoire: {
    enfance: {
      titre: 'La formation de la Convergence',
      contenu: 'À 20 ans, à Thalassyr, elle avait été approchée par un recruteur de la Convergence qui avait reconnu sa puissance élémentaire Eau exceptionnelle. La Convergence cherchait des Élus purs dont la puissance dépassait les standards normaux. Elle correspondait. Elle avait accepté après 6 mois de réflexion.',
    },
    arrivee: {
      titre: 'L\'infiltration',
      contenu: 'À 36 ans, après 16 ans de formation et de missions mineures, elle avait reçu sa première mission d\'infiltration longue durée : s\'intégrer dans la structure administrative de la Confédération de Thalassyr et collecter des données sur ses opérations, ses contacts et ses décisions de filtrage. Elle était là depuis 8 ans.',
    },
    premier_conflit: {
      titre: 'La neutralité de Thalassyr',
      contenu: 'À 38 ans, après 2 ans d\'infiltration, elle avait réalisé que Thalassyr ne choisirait jamais un camp — pas parce qu\'elle n\'avait pas de position, mais parce que sa position était la neutralité instrumentalisée. Ni l\'Empire ni les Dissidentes ne pouvaient la convaincre. Elle avait révisé ses attentes et son rapport à la Convergence.',
    },
    revelation: {
      titre: 'La rencontre avec Aeronn',
      contenu: 'À 40 ans, elle avait approché Aeronn (19) directement après avoir identifié sa couverture. L\'accord de non-interférence qu\'ils avaient établi était rationnel : deux agents de factions opposées dans un territoire neutre, dont les missions respectives ne se chevauchaient pas directement. L\'accord tenait depuis 4 ans.',
    },
    etat_actuel: {
      titre: 'Les 8 ans de données',
      contenu: 'Ses 8 ans d\'infiltration ont produit des données substantielles sur les filtres de Shaleth (16), les connexions impériales dans la Confédération, et les profils d\'Élus dans la région. Elle transmet ces données à la Convergence par canaux indirects. Ce qu\'elle ne transmet pas toujours : ses propres doutes sur ce que la Convergence fait de ces données.',
    },
  },

  evenements_narratifs: [
    {
      id: 'crysta_donnees_elus',
      titre: 'Ce que la Convergence cherche',
      description: 'Les données sur les profils d\'Élus qu\'elle collecte via Naeleth (93) et Shyvel (154) servent à identifier les Élus purs pour le Protocole de la Convergence. Elle sait ça maintenant — au début, c\'était moins clair. Elle continue parce qu\'elle pense que ce que la Convergence fait avec ces Élus vaut mieux que ce que l\'Empire ferait. Elle n\'en est plus certaine à 100%.',
      personnages_impliques: [93, 154],
      declencheur: 'Compréhension croissante de l\'usage des données qu\'elle collecte',
      consequence: 'Tension entre mission et doutes — collecte continue mais questionnement actif',
    },
    {
      id: 'crysta_shaleth',
      titre: 'L\'exposition de Shaleth',
      description: 'L\'exposition imminente du système de filtrage de Shaleth (16) via le journal de Lyseth (88) est une opportunité pour la Convergence — et potentiellement pour elle. Si Shaleth tombe, le système de filtrage de Thalassyr sera réorganisé. Elle doit décider si la Convergence intervient dans cette réorganisation ou observe.',
      personnages_impliques: [16, 88],
      declencheur: 'Risque d\'exposition du système de filtrage de Shaleth',
      consequence: 'Opportunité de repositionnement pour la Convergence dans la structure de Thalassyr',
    },
  ],

  arcs: ['arc_silence_des_vents'],
  position_dans_arc: 'Infiltrée de la Convergence dans la Confédération de Thalassyr depuis 8 ans. Collecte des données sur les profils d\'Élus pour le Protocole. Accord de non-interférence avec Aeronn (19). Surveille l\'exposition imminente de Shaleth (16).',

  relations: [
    { id: 19, nom: 'Aeronn', type: 'allié', note: 'Accord de non-interférence depuis 4 ans. Non rapporté à leurs hiérarchies respectives. Vulnérabilité mutuelle.' },
    { id: 93, nom: 'Naeleth', type: 'allié', note: 'Contact de recrutement Convergence à Thalassyr. Recrute des profils d\'Élus.' },
    { id: 16, nom: 'Shaleth', type: 'cible', note: 'Son système de filtrage est documenté dans ses rapports. Surveille son exposition imminente.' },
  ],

  combat: {
    sorts: [
      'Vague de pression (Eau) — onde de choc aquatique à partir d\'un point d\'origine — déstabilisation de zone',
      'Piège de courant (Eau) — création d\'un flux rotatif — immobilisation d\'une cible dans un milieu aquatique ou humide',
      'Projection de flux (Eau) — impact à distance via un courant concentré — précision à longue portée',
    ],
  },

  image_prompts: [
    {
      id: 'crysta_infiltree',
      description: 'Crysta dans un couloir de la Confédération à Néris — une Néréide de 44 ans en tenue officielle, tenant un dossier, croisant un collègue avec un signe de tête courtois. Sa luminescence aquatique est visible mais dans les normes pour une Néréide à ce niveau. Son expression est ouverte et professionnelle. Ce qu\'elle pense n\'est pas lisible.',
      style: 'réaliste agent infiltrée Néréide, Confédération Thalassyr, tenue officielle, maîtrise de la présence sociale',
    },
  ],

  lore_long: `Crysta est infiltrée dans la Confédération de Thalassyr depuis 8 ans pour la Convergence. Elle collecte des données sur les profils d'Élus pour le Protocole et sur les systèmes de filtrage de Shaleth (16).

Elle pensait que Thalassyr serait un allié naturel contre l'Empire. Elle a compris que Thalassyr ne choisit pas. La neutralité instrumentalisée est aussi une position politique.

Son accord de non-interférence avec Aeronn (19), agent impérial, n'est rapporté ni à l'Empire ni à la Convergence. Deux agents de factions opposées dans un territoire neutre, dont les missions ne se chevauchent pas directement.`,
};

export default crysta;
