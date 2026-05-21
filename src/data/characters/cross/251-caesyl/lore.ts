import type { PersonnageLoreComplet } from '../../../lore-types';

const caesyl: PersonnageLoreComplet = {
  id: 251,
  nom: 'Caesyl',
  element: 'Fée',
  element2: 'Eau',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Petite, voûtée par des décennies passées au-dessus de tables de consultation — non par âge mais par posture devenue permanente.',
    peau: 'Fée pâle, presque laiteuse, avec des reflets légèrement bleutés aux tempes et aux poignets — marque de l\'élément Eau secondaire.',
    yeux: 'Gris clair, légèrement humides en permanence, comme si elle regardait toujours à travers une vitre embuée.',
    vetements: 'Robe d\'archiviste de la Citadelle, bordeaux sombre réglementaire, toujours propre mais toujours légèrement froissée aux coudes. Porte des gants fins pour manipuler les documents.',
    signes_particuliers: 'Ses mains se déplacent avec une précision automatique — 40 ans de manipulation de parchemins ont créé une mémoire musculaire parfaite pour plier, classer, sceller. Elle peut reconnaître un document falsifié au toucher avant de le lire.',
  },

  psychologie: {
    dominante: 'Neutralité confortable. Tout ce qu\'elle fait est accompagné d\'un léger état de non-présence — comme si ses mains travaillaient et que le reste d\'elle attendait ailleurs.',
    mecanisme_de_defense: 'La procédure. Chaque acte est protégé par sa propre catégorie. Classer n\'est pas juger. Archiver n\'est pas valider. Signaler n\'était pas son rôle au début — maintenant c\'est simplement ce qu\'elle ne fait pas.',
    contradiction_interne: 'Elle reconnaît les modifications rétroactives des Calendriers parce qu\'elle en est la meilleure experte vivante. Ce talent est son identité professionnelle. Elle l\'utilise pour classer avec précision ce qu\'elle ne signale jamais.',
    rapport_aux_autres: 'Cordiale à distance. Ses échanges avec Thyval durent depuis 20 ans et restent strictement professionnels — une relation construite sur le fait que ni l\'un ni l\'autre ne pose de questions sur le fond.',
    vision_du_monde: 'Le monde se gère en maintenant les systèmes fonctionnels. Elle est un rouage qui tourne bien. La question de ce que le mécanisme produit n\'est plus une question qu\'elle se pose.',
  },

  histoire: {
    enfance: {
      titre: 'La fille des archives',
      contenu: 'Née à la Citadelle d\'une famille de fonctionnaires fées de second rang. Elle a grandi dans l\'odeur du parchemin et de l\'encre de scellement — son père était lui-même classificateur, sa mère notaire. L\'Empire était un fait de nature, pas un choix.',
    },
    arrivee: {
      titre: 'Quarante ans à la même table',
      contenu: 'Recrutée à 27 ans comme archiviste junior après des études exemplaires. Elle n\'a jamais cherché d\'avancement particulier — le travail était intéressant, la position sûre, et elle avait un talent réel pour la détection des altérations documentaires. C\'est devenu sa spécialité.',
    },
    premier_conflit: {
      titre: 'La première modification',
      contenu: 'À 34 ans — 7 ans après son arrivée — elle a identifié sa première modification rétroactive d\'un Calendrier d\'Élus. Un nom avait été retiré d\'une liste de "présents" et inscrit dans la catégorie "transférés — destination confidentielle". La calligraphie du transfert avait 3 jours alors que le document avait 6 mois. Elle a classé le dossier sous "anomalie administrative — à surveiller" et est passée au suivant.',
    },
    revelation: {
      titre: 'Le document de Keldris',
      contenu: 'Il y a 6 ans, Keldris (57) lui a transmis un document au sujet des "anomalies de transfert" dans plusieurs régions. Il demandait une vérification croisée avec les archives de la Citadelle. Elle l\'a reçu, lui a assigné un numéro de référence, l\'a placé dans la file "à traiter", et n\'y est jamais revenue. Ce n\'était pas une décision. C\'était simplement ce qui s\'est passé.',
    },
    etat_actuel: {
      titre: 'La 847e modification',
      contenu: 'Elle tient un décompte exact sans y penser — chaque modification rétroactive est référencée dans sa mémoire comme dans une base de données. 847 en 33 ans. Elle n\'a pas fait de geste vers les 847. Eiravel accède aux mêmes logs depuis 2 ans — Caesyl ne le sait pas mais, si elle le savait, classerait ça également.',
    },
  },

  evenements_narratifs: [
    {
      id: 'caesyl_thyval_correspondance',
      titre: 'Échange sans fond',
      description: 'Caesyl et Thyval (55) correspondent depuis 20 ans — homologues Fée et Givrin, mêmes responsabilités archivistiques dans leurs systèmes respectifs. Leurs échanges sont devenus un rituel professionnel. Ni l\'un ni l\'autre ne soulève jamais les questions que leurs archives contiennent. Chacun suppose que l\'autre a ses raisons.',
      personnages_impliques: [55],
      declencheur: 'Demande de vérification croisée il y a 20 ans',
      consequence: 'Relation fonctionnelle qui préserve les deux dans le non-questionnement',
    },
    {
      id: 'caesyl_keldris_dossier',
      titre: 'La file à traiter',
      description: 'Le dossier de Keldris (57) est toujours dans la file. Pas perdu — localisable en 40 secondes si quelqu\'un le demandait. Simplement jamais traité. Il y a 847 autres choses dans la même file depuis plus longtemps. Caesyl ne ment pas sur son existence si on lui pose la question directe. Personne ne lui a posé la question directe en 6 ans.',
      personnages_impliques: [57],
      declencheur: 'Transmission du document de vérification',
      consequence: 'Dossier gelé dans la file — ni perdu ni traité',
    },
    {
      id: 'caesyl_eiravel_logs',
      titre: 'L\'inconnue dans les logs',
      description: 'Eiravel (248) accède aux archives de modification depuis 2 ans via un protocole de consultation standard. Elle n\'a pas demandé d\'autorisation à Caesyl directement — elle a utilisé les accès de son grade. Caesyl a vu son nom dans les logs d\'accès une fois, a noté que c\'était un accès régulier, a classé comme "consultation archivistique normale".',
      personnages_impliques: [248],
      declencheur: 'Accès d\'Eiravel aux archives de modification rétroactive',
      consequence: 'Caesyl ne sait pas ce qu\'Eiravel cherche — et n\'a pas cherché à le savoir',
    },
  ],

  arcs: ['arc_convergence_drain', 'arc_citadelle_empire'],
  position_dans_arc: 'Rouage silencieux. Sa compétence fait partie du système — elle est l\'une des raisons pour lesquelles les modifications rétroactives restent invisibles sur le long terme. Si elle signalait, le système serait visible depuis 33 ans.',

  relations: [
    { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'Accède aux mêmes archives depuis 2 ans — Caesyl ne sait pas ce qu\'elle cherche, et n\'a pas cherché à savoir.' },
    { id: 55, nom: 'Thyval', type: 'allié', note: 'Correspondant professionnel depuis 20 ans — relation construite sur le fait que ni l\'un ni l\'autre ne pose de questions sur le fond.' },
    { id: 57, nom: 'Keldris', type: 'contact_nécessaire', note: 'A transmis un dossier critique il y a 6 ans. Caesyl l\'a classé sans lire. Elle pourrait le retrouver en 40 secondes.' },
  ],

  combat: {
    sorts: [
      'Sceau de préservation (Fée) — protège un document ou objet contre l\'altération pendant 72h',
      'Lecture d\'intégrité (Eau) — détecte les modifications dans un texte au contact',
      'Voile d\'effacement (Fée) — rend un document invisible à la consultation ordinaire sans le détruire',
    ],
  },

  image_prompts: [
    {
      id: 'caesyl_archives',
      description: 'Caesyl à sa table de travail, entourée de colonnes de registres. Ses mains tiennent un document, ses yeux le lisent avec la précision automatique de 40 ans de pratique. L\'expression est neutre — ni satisfaction ni malaise. Elle voit la modification. Elle va classer.',
      style: 'réaliste fée, lumière de chandelle, archives de pierre, tons bordeaux et gris',
    },
  ],

  lore_long: `Caesyl n'a pas décidé de devenir ce qu'elle est. Elle a simplement continué.

À 34 ans, la première modification rétroactive qu'elle a identifiée l'a légèrement troublée — pendant peut-être une heure. Le nom avait été retiré d'une liste de présents et placé dans une catégorie administrative qui n'existait pas 6 mois plus tôt. La calligraphie était fraîche sur un parchemin ancien. Elle a créé une sous-catégorie pour ce type d'anomalie, l'a classée, et est passée au suivant.

La deuxième fois, une semaine plus tard, elle a utilisé la même sous-catégorie.

À 40 ans, elle avait 200 modifications classées et avait arrêté de compter — sauf qu'elle compte toujours, automatiquement, comme un bruit de fond. À 50 ans, elle était la meilleure experte vivante en détection d'altérations documentaires à la Citadelle, et les modifications rétroactives des Calendriers représentaient 90% de sa charge de travail réelle.

Le document de Keldris est dans la file. C'est vrai. Si quelqu'un lui demandait "avez-vous reçu un document de Keldris il y a 6 ans concernant des anomalies de transfert?", elle dirait "oui, il est en attente de traitement". Ce serait vrai. Elle ne mentirait pas. Elle ne fait rien pour qu'on ne pose pas la question — elle ne fait rien du tout.

Ce que Caesyl a perfectionné sur 40 ans, c'est l'espace entre voir et agir. Elle voit avec une précision exceptionnelle. Elle n'agit pas. L'espace entre les deux est devenu si large qu'il ressemble à de la neutralité, à du professionnalisme, à de la compétence.

847 modifications rétroactives. Chacune référencée. Aucune signalée.

Eiravel est dans les logs depuis 2 ans. Caesyl a vu son nom. Elle n'a pas cherché à savoir pourquoi. Si quelqu'un lui demandait si elle savait qu'Eiravel consultait les archives de modification, elle dirait "oui, c'est dans les logs d'accès". Ce serait vrai.

Elle ne ment pas. Elle n'obstrue pas. Elle ne fait rien.

C'est la forme la plus discrète de complicité — celle qui ne ressemble à rien d'autre que du travail accompli avec soin.`,
};

export default caesyl;
