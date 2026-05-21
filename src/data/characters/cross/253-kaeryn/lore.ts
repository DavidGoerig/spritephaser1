import type { PersonnageLoreComplet } from '../../../lore-types';

const kaeryn: PersonnageLoreComplet = {
  id: 253,
  nom: 'Kaeryn',
  element: 'Vent',
  element2: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand, solidement bâti — profil standard de gardien impérial, physique entretenu par les rondes et les protocoles d\'entraînement biquotidiens.',
    peau: 'Hâlée, légèrement cuivrée. Des années de service en extérieur avant la mutation à l\'intérieur de la Citadelle.',
    yeux: 'Noisette, avec une expression qui depuis 6 mois ne se ferme plus complètement même au repos — il y a quelque chose dedans qui attend.',
    vetements: 'Uniforme de gardien de rang intermédiaire, gris anthracite avec bandes vertes de sa section. Il le porte depuis 11 ans et a cessé de le voir. Depuis 6 mois il le voit à nouveau.',
    signes_particuliers: 'Ses rondes le conduisent deux fois par jour devant les portes des cellules de rétention. Il a commencé à compter les entrées et les sorties sans s\'en rendre compte — maintenant il le fait consciemment.',
  },

  psychologie: {
    dominante: 'Loyauté envers ce qu\'il pensait faire. Protéger. Il continue le même geste physique — les rondes, les vérifications, la présence — mais le geste protège quelque chose qu\'il n\'arrive plus à définir clairement.',
    mecanisme_de_defense: 'La reformulation. Il a trouvé 5 versions acceptables pour expliquer ce qu\'il voit. "Traitement spécialisé." "Protocole de stabilisation." "Phase de préparation au transfert." Chaque reformulation a tenu moins longtemps que la précédente.',
    contradiction_interne: 'Il a rejoint les gardiens pour protéger des gens. Ce qu\'il fait correspond encore au mot "protéger" dans son uniforme. Ce ne sont pas les mêmes gens qui en bénéficient.',
    rapport_aux_autres: 'A transmis ses doutes à Varek (247) il y a 3 mois — l\'autre gardien qui semblait observer les mêmes choses. Varek a formulé ça différemment, moins directement. Ça l\'a légèrement soulagé et troublé en même temps.',
    vision_du_monde: 'Les institutions fonctionnent parce que les gens à l\'intérieur font leur travail honnêtement. C\'est ce qu\'il a toujours cru. Il cherche encore la version du monde où c\'est vrai ici.',
  },

  histoire: {
    enfance: {
      titre: 'Fils de gardien',
      contenu: 'Né dans une ville de garnison à la périphérie de l\'Empire. Son père était gardien, sa mère logisticienne militaire. Il avait une image précise et positive de ce que signifiait servir avant de pouvoir le nommer. À 16 ans il savait ce qu\'il ferait.',
    },
    arrivee: {
      titre: 'La mutation intérieure',
      contenu: 'Huit ans de service extérieur avant d\'être muté à la Citadelle à 26 ans. Affecté à la section des "Élus retenus" — une désignation qu\'on lui a présentée comme une section de soutien intensif pour les Élus dont les capacités dépassaient les ressources locales. C\'était cohérent avec l\'image qu\'il avait du service.',
    },
    premier_conflit: {
      titre: 'L\'entrée sans sortie',
      contenu: 'À 33 ans — 7 ans après la mutation — il a commencé à tenir un décompte non officiel. Les Élus entrent dans sa section en état d\'alerte consciente. Ils en sortent dans un état différent, ou pas du tout. En 6 mois il avait suffisamment de données pour être sûr que "transfert" et "retour" n\'étaient pas synonymes.',
    },
    revelation: {
      titre: 'La question à Eiravel',
      contenu: 'Il y a 2 mois, dans un couloir, il a croisé Eiravel (248) — une analyste Empire qu\'il ne connaissait pas mais dont l\'expression lui a semblé familière. Il a failli lui poser une question. Il a dit bonsoir à la place. Depuis il pense à ce qu\'il aurait demandé et à ce qu\'elle aurait répondu.',
    },
    etat_actuel: {
      titre: 'La sixième reformulation',
      contenu: 'Les 5 versions acceptables ont toutes cédé. Il en cherche une sixième et sait déjà qu\'elle ne tiendra pas non plus. Varek a dit quelque chose la semaine dernière qui ressemblait moins à une question qu\'à une décision en train de se former. Kaeryn ne sait pas si lui-même est en train de prendre une décision ou d\'attendre que quelqu\'un d\'autre la prenne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaeryn_varek_doutes',
      titre: 'La transmission des doutes',
      description: 'Il y a 3 mois, Kaeryn a formulé ses observations à Varek (247) — collègue gardien dont il avait perçu l\'attention similaire. Varek a écouté, a reformulé plus prudemment, et a dit qu\'il "notait". Kaeryn ne sait pas si Varek est en train de faire quelque chose de ses notes ou si "noter" était la même reformulation que les siennes.',
      personnages_impliques: [247],
      declencheur: 'Observation convergente des entrées/sorties de la section',
      consequence: 'Doutes partagés mais action encore indéfinie',
    },
    {
      id: 'kaeryn_eiravel_couloir',
      titre: 'Le bonsoir',
      description: 'Deux mois plus tôt. Eiravel et lui dans le même couloir pendant 15 secondes. Il avait une question. Il a dit bonsoir. Elle a répondu bonsoir et a continué. Il pense régulièrement à ce couloir — non pas avec regret mais avec quelque chose de voisin. Ce n\'était pas la bonne question à poser, pas là. Il ne sait pas quelle aurait été la bonne question.',
      personnages_impliques: [248],
      declencheur: 'Croisement dans un couloir de service',
      consequence: 'Question non posée — mais la reconnaissance mutuelle a eu lieu',
    },
    {
      id: 'kaeryn_velthys_patients',
      titre: 'Les mêmes patients',
      description: 'Velthys (257) traite les Élus avant leur "relocalisation" — stabilisation, dit-on. Kaeryn voit passer les mêmes sujets : d\'abord vers Velthys, ensuite vers l\'intérieur de la section. Il a remarqué que Velthys semble convaincue que son travail est médical. Il n\'arrive pas à décider si c\'est réconfortant ou plus troublant encore.',
      personnages_impliques: [257],
      declencheur: 'Séquence logistique récurrente : soigneuse puis section',
      consequence: 'Témoin de la bonne foi d\'une complicité involontaire',
    },
  ],

  arcs: ['arc_citadelle_empire'],
  position_dans_arc: 'En réveil. Il a les pièces depuis 6 mois. Il les assemble consciemment depuis 2. La décision de ce qu\'il fait avec cette assemblée est devant lui.',

  relations: [
    { id: 247, nom: 'Varek', type: 'allié', note: 'Collègue qui observe les mêmes choses. A transmis ses doutes il y a 3 mois — Varek formule plus prudemment mais semble en mouvement.' },
    { id: 250, nom: 'Orvael', type: 'mentor', note: 'Commandant. Kaeryn ne sait pas qu\'Orvael recommence lui aussi à poser des questions depuis peu.' },
    { id: 248, nom: 'Eiravel', type: 'inconnue_qui_change_tout', note: 'Croisée dans un couloir il y a 2 mois. Question non posée. L\'expression d\'Eiravel était celle de quelqu\'un qui sait.' },
    { id: 257, nom: 'Velthys', type: 'contact_nécessaire', note: 'Soigneuse qui traite ses patients avant la section. Croit faire de la médecine. Kaeryn est son témoin malgré lui.' },
  ],

  combat: {
    sorts: [
      'Rafale de contention (Vent) — courant d\'air dirigé capable d\'immobiliser un sujet sans contact physique',
      'Frappe de neutralisation (Combat) — technique de mise hors combat à dommages minimes, optimisée pour les sujets élémentaires',
      'Lecture de terrain (Vent) — perception fine des déplacements dans un espace fermé via les variations de pression',
    ],
  },

  image_prompts: [
    {
      id: 'kaeryn_ronde',
      description: 'Kaeryn en ronde dans un couloir de la section de rétention. Il marche comme d\'habitude mais ses yeux comptent les portes. L\'expression est celle de quelqu\'un en train de finir de comprendre quelque chose qu\'il n\'est pas sûr de vouloir avoir compris.',
      style: 'réaliste humain, lumière artificielle froide, couloir de pierre impérial, tons gris et vert',
    },
  ],

  lore_long: `Kaeryn a 5 versions acceptables de ce qu'il voit. Il en cherche une sixième.

La première a tenu 3 semaines : traitement spécialisé pour les Élus à haute instabilité. Elle a cédé quand il a remarqué que l'instabilité n'était pas corrélée aux entrées — des sujets parfaitement stables entraient aussi. La deuxième a tenu 2 semaines : protocole de confinement préventif. Elle a cédé quand les délais de "confinement préventif" ont dépassé 6 mois systématiquement. La troisième, la quatrième, la cinquième ont tenu de moins en moins longtemps.

Il a 34 ans. Il est gardien depuis 11 ans. Il a fait ça parce que son père l'avait fait et que l'idée de protéger des gens lui semblait être une façon honnête de passer sa vie. Cette idée est encore là. Elle est juste en train de se coincer dans quelque chose.

Varek observe les mêmes choses et formule plus prudemment. Kaeryn trouve ça légitime et légèrement frustrant. La prudence a une utilité — elle préserve la capacité d'agir — mais elle ressemble parfois à la même reformulation que lui pratique, juste avec un vocabulaire plus soigné.

Eiravel dans le couloir, il y a 2 mois. Il avait une question. Il a dit bonsoir. Il n'était pas lâche — il calculait, sans le formuler, que poser une question à quelqu'un qu'il ne connaissait pas dans un couloir de service n'était pas le bon endroit. Il pense encore à ce couloir. Pas à ce qu'il aurait dû faire différemment. À ce qu'il ferait si ça se reproduisait.

Velthys traite les sujets avant qu'ils entrent. Elle leur explique ce qu'elle fait — stabilisation, équilibre élémentaire, préparation. Elle croit ce qu'elle dit. Kaeryn la regarde travailler avec la conscience aiguë qu'elle est honnête et qu'il ne peut pas lui dire pourquoi son honnêteté se déroule dans un contexte qui ne l'est pas.

La sixième version acceptable : il ne la trouve pas. Il commence à penser que c'est une information.`,
};

export default kaeryn;
