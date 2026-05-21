import type { PersonnageLoreComplet } from '../../../lore-types';

const kargvorn: PersonnageLoreComplet = {
  id: 314,
  nom: 'Kargvorn',
  element: 'Roche',
  element2: 'Acier',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: 'Massif dans les deux héritages — la solidité Chthonienne amplifiée par une constitution Pyrienne qui a ajouté de la densité musculaire. Il occupe le double de l\'espace qu\'on attendrait.',
    peau: 'Gris-brun Chthonien avec des zones cuivrées aux bras et à la nuque — l\'héritage Pyrien qui ne disparaît pas dans les générations mixtes. La chaleur résiduelle Pyrienne est perceptible au toucher.',
    yeux: 'Ambré-gris — les deux héritages dans la même couleur, ni l\'un ni l\'autre clairement dominant.',
    vetements: 'Tablier de forgeron renforcé aux épaules. Il forge lui-même ses outils depuis 20 ans — le tablier a des marques d\'impact qui témoignent d\'un travail direct, pas de supervision.',
    signes_particuliers: 'Il teste chaque pièce qu\'il sort avec une pression directe — ses mains, pas un instrument. Si ça résiste à ses mains, ça résistera à ce que les mines lui font subir.',
  },

  psychologie: {
    dominante: 'La fondation comme seule réponse crédible aux séismes. Les tremblements de terre à Ormn-Dur sont réguliers depuis la Fosse Interdite. Les fondations standards tiennent ou ne tiennent pas selon leur qualité. Il construit ce qui tient.',
    mecanisme_de_defense: 'La conviction matérielle. Si sa fondation tient, l\'argument est dans la roche. Personne ne discute avec une fondation qui n\'a pas bougé depuis 20 ans.',
    contradiction_interne: 'Le Parti de l\'Acier croit que l\'acier seul est la réponse. Il croit que la combinaison roche/acier est la réponse. Il est membre du Parti de l\'Acier parce que c\'est le seul groupe qui comprend l\'importance de l\'acier. Mais il n\'est pas d\'accord avec la moitié de leur doctrine.',
    rapport_aux_autres: 'Thryss (4) — Pyrien forgeron — lui a fourni des techniques de trempe spécifiques aux alliages mixtes. Il lui doit le cœur de sa méthode. Vordrak (142) distribue ses fondations dans des projets que le Parti de l\'Acier finance.',
    vision_du_monde: 'Un séisme est une question posée à une fondation. Si la fondation répond correctement, les gens au-dessus survivent. Il construit des réponses correctes.',
  },

  histoire: {
    enfance: {
      titre: 'Les deux apprentissages',
      contenu: 'Né d\'un père Chthonien et d\'une mère Pyrienne. À 13 ans, il avait commencé un apprentissage de mineur-carrier avec son père. À 16 ans, sa mère l\'avait envoyé passer un été à Varkhôl avec un oncle forgeron. Il avait appris à travailler l\'acier là-bas. Il était revenu avec les deux disciplines.',
    },
    arrivee: {
      titre: 'Le premier séisme et la première fondation',
      contenu: 'À 27 ans, un séisme modéré à Ormn-Dur avait endommagé plusieurs structures dans son quartier. Il avait inspecté les dégâts. Les fondations en roche pure avaient fissuré. Les fondations en acier pur avaient plié. Une seule fondation — dans une vieille construction dont l\'ingénieur avait utilisé des ancrages acier dans de la roche naturelle sans savoir ce qu\'il faisait — était intacte. Il avait passé 6 mois à comprendre pourquoi.',
    },
    premier_conflit: {
      titre: 'La doctrine du Parti',
      contenu: 'Quand il avait présenté ses premières fondations roche/acier, le Parti de l\'Acier lui avait reproché de diluer l\'acier avec de la roche. La doctrine du Parti favorisait l\'acier pur comme matériau de fondation — plus noble, plus résistant. Il avait apporté des données de tests sismiques comparatifs. La conversation avait duré 3 heures. Le Parti avait accepté ses fondations "à titre expérimental".',
    },
    revelation: {
      titre: 'La technique de Thryss',
      contenu: 'Thryss (4) lui avait transmis des techniques de trempe pour des alliages métal-silice — une méthode Pyrienne ancienne qui donnait à l\'acier une résilience différente de la trempe standard. Appliquée aux joints roche/acier, cette trempe améliorait la performance sismique de 40% selon ses tests. Il avait intégré la technique. Il avait reconnu publiquement la contribution de Thryss dans son manuel de méthode.',
    },
    etat_actuel: {
      titre: 'Les fondations du Parti',
      contenu: 'Ses fondations roche/acier avec trempe spéciale sont maintenant la méthode recommandée pour les nouvelles constructions en zone sismique à Ormn-Dur. Le Parti de l\'Acier les présente comme une innovation du Parti, en passant sur le fait qu\'il a dû se battre pour les faire accepter. Vordrak (142) lui commande régulièrement pour des projets dont il ne précise pas toujours la nature.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kargvorn_fondations_zone_fosse',
      titre: 'Les fondations dans les zones adjacentes à la Fosse',
      description: 'Vordrak (142) lui commande des fondations pour des constructions dans des zones adjacentes à la Fosse Interdite. Ces zones sont soumises à des variations sismiques plus complexes que les zones standard. Kargvorn a adapté ses méthodes pour ces contraintes spécifiques. Il ne sait pas ce que Vordrak construit là-bas.',
      personnages_impliques: [142, 4],
      declencheur: 'Commandes de Vordrak pour des zones adjacentes à la Fosse',
      consequence: 'Infrastructure de fondation dans des zones sensibles — usage final non connu',
    },
    {
      id: 'kargvorn_manuel_methode',
      titre: 'Le manuel de fondation',
      description: 'Il a écrit un manuel de méthode pour ses fondations roche/acier — un document qu\'il a reconnu la contribution de Thryss (4) et qui décrit les techniques en détail suffisant pour être reproduit par quelqu\'un avec les deux disciplines. Le Parti de l\'Acier l\'utilise en formation. La question de qui possède intellectuellement la méthode n\'a pas été formalisée.',
      personnages_impliques: [4],
      declencheur: 'Volonté de documenter et transmettre la méthode',
      consequence: 'Manuel de méthode en circulation au Parti de l\'Acier — question de propriété intellectuelle non résolue',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Forgeron de fondation qui résout les problèmes sismiques d\'Ormn-Dur avec une méthode hybride. Ses fondations dans les zones adjacentes à la Fosse permettent des constructions que sans lui personne ne pourrait stabiliser.',

  relations: [
    { id: 4, nom: 'Thryss', type: 'allié', note: 'A transmis la technique de trempe fondamentale. Contribution reconnue publiquement dans le manuel de méthode.' },
    { id: 142, nom: 'Vordrak', type: 'allié', note: 'Commanditaire régulier. Construit dans des zones adjacentes à la Fosse avec des finalités non précisées.' },
  ],

  combat: {
    sorts: [
      'Ancrage de fondation (Roche) — plaquage d\'une cible au sol avec des extensions rocheuses — immobilisation',
      'Lame d\'acier (Acier) — projection d\'un fragment d\'acier forgé — attaque directe de précision',
      'Résistance sismique (Roche) — stabilisation du terrain sous une zone en cas de vibration ou d\'impact — protection de zone',
    ],
  },

  image_prompts: [
    {
      id: 'kargvorn_forge',
      description: 'Kargvorn dans une forge souterraine, en train de tester une pièce d\'acier avec ses mains à mains nues avant de la valider. La pièce est encore chaude — des reflets rouges sur son visage. Il ne regarde pas la pièce — il écoute et sent la résistance sous ses paumes.',
      style: 'réaliste forgeron chthonien-pyrien, forge souterraine, test manuel direct, chaleur et roche combinées',
    },
  ],

  lore_long: `Kargvorn forge des fondations roche/acier qui résistent aux séismes d'Ormn-Dur.

Il est membre du Parti de l'Acier mais en désaccord avec la moitié de leur doctrine. C'est le seul groupe qui comprend l'importance de l'acier. Il a dû se battre pour faire accepter ses fondations mixtes — le Parti préférait l'acier pur. Il a apporté des données. Le Parti a accepté.

Thryss (4) lui a transmis une technique de trempe Pyrienne ancienne. Appliquée à ses joints, la performance sismique augmente de 40%. Il a reconnu la contribution dans son manuel de méthode.

Vordrak (142) lui commande des fondations pour des zones adjacentes à la Fosse. Il a adapté ses méthodes pour les contraintes sismiques spécifiques de ces zones. Il ne sait pas ce que Vordrak construit là-bas.

Il teste chaque pièce avec ses mains. Si ça résiste à ses mains, ça résistera au reste.`,
};

export default kargvorn;
