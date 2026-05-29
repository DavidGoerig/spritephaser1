import type { PersonnageLoreComplet } from '../../../lore-types';

const thyven: PersonnageLoreComplet = {
  id: 62,
  nom: 'Thyven',
  element: 'Combat',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Homme-Lien de 47 ans — un administrateur confédéral dont la corpulence dit autant la formation de combat que le bureau. Il est large, avec des mains qui ont connu l\'entraînement avant les stylos. Cette combinaison — corps de combattant, travail d\'administrateur — le rend difficile à catégoriser.',
    peau: 'Brune Homme-Lien avec une teinte légèrement dorée aux avant-bras — l\'expression de l\'élément Combat sur une peau ordinaire. Ses avant-bras ont des callus d\'arme et des taches d\'encre. Il n\'essaie pas de séparer les deux.',
    yeux: 'Bruns avec une qualité d\'évaluation de risque — il regarde les situations comme quelqu\'un qui a appris à estimer les angles de combat avant d\'estimer les angles politiques. Ces deux habitudes se combinent dans son poste actuel.',
    vetements: 'Tenue d\'administrateur confédéral — grise avec des insignes de fonction lisibles. Pas de tenue de combat en service. Il n\'en a pas besoin à Virex — il comprend les situations avant qu\'elles nécessitent un autre type de réponse.',
    signes_particuliers: 'Il connaît le nom de chacun des 39 enfants de Virex, leur élément, leur famille, leurs progrès. Ce n\'est pas dans ses attributions formelles — c\'est quelque chose qu\'il a commencé à faire seul quand il a compris ce qu\'il regardait.',
  },

  psychologie: {
    dominante: 'Administrateur confédéral de Virex qui voit les 39 enfants double-puissance grandir depuis 7 ans — et qui a compris progressivement ce qu\'ils sont et ce qu\'ils risquent. Il fait son travail honnêtement. Ça signifie qu\'il ne peut pas ne pas voir ce qu\'il voit.',
    mecanisme_de_defense: 'La procédure comme armure. Il peut transmettre ce qu\'il observe dans les cadres légaux et administratifs de la Confédération. Tant qu\'il utilise ces cadres, il fait son travail. Ce que les cadres ne permettent pas de faire — protéger les enfants de quelque chose que la Confédération ne reconnaît pas encore comme une menace — reste en dehors.',
    contradiction_interne: 'Il a rencontré le Second Avatar (59) une fois. Il ne l\'a pas dénoncé à l\'Empire. Cette décision — minime dans ses conséquences immédiates — est la plus significative de ses 7 ans à Virex. Il ne l\'a pas analysée. Il l\'a faite.',
    rapport_aux_autres: 'Le Second Avatar (59) veut le revoir — Thyven le sait parce qu\'il l\'a deviné à la façon dont le Second Avatar l\'avait regardé lors de leur rencontre. Lysael (63) opère dans Virex pour la Convergence — Thyven le sait depuis 3 ans et n\'a pas encore décidé quoi faire de cette information. Avel (64) arrive dans 48h — Thyven ne sait pas encore.',
    vision_du_monde: 'Un administrateur honnête fait son travail et rapporte ce qu\'il voit. La Confédération traite ces rapports comme elle le fait. Les limites de ce qu\'un administrateur peut faire sont les limites de la Confédération. Ces limites existent. Il les accepte. Elles ne le rendent pas moins observateur.',
  },

  histoire: {
    enfance: {
      titre: 'La formation',
      contenu: 'Formé à la fois comme combattant et comme administrateur — une combinaison rare dans la Confédération, valorisée dans les postes frontaliers et dans les zones à risque. Il avait demandé Virex lui-même — pas pour les 39 enfants, à l\'époque il ne savait pas encore ce qu\'il y trouverait. Pour la complexité du poste.',
    },
    arrivee: {
      titre: 'Virex',
      contenu: 'À 40 ans, il avait pris le poste d\'administrateur de Virex — une cité de l\'Isthme connue pour ses anomalies élémentaires. Il avait pensé que les anomalies seraient le défi. Les anomalies étaient les enfants.',
    },
    premier_conflit: {
      titre: 'Les 39',
      contenu: 'Dans ses premiers mois à Virex, il avait identifié 39 enfants Hommes-Liens avec accès à deux éléments distincts — une fréquence statistiquement impossible selon tous les modèles disponibles. Il avait soumis un rapport. La Confédération avait classé "anomalie en cours d\'étude". Il avait continué à observer.',
    },
    revelation: {
      titre: 'Le Second Avatar',
      contenu: 'À 44 ans, le Second Avatar (59) était passé par Virex — pas officiellement, en transit. Thyven l\'avait rencontré par hasard dans une conversation sur les 39 enfants. Il avait compris qui il était. Il avait continué la conversation normalement et ne l\'avait pas dénoncé. Il n\'avait pas regardé cette décision de trop près.',
    },
    etat_actuel: {
      titre: 'Lysael et Avel',
      contenu: 'Lysael (63) approche les familles des 39 enfants depuis 3 ans. Thyven le sait. Avel (64) arrive dans 48h. Il ne le sait pas encore. Le Second Avatar est à Virex. Il le sait. Ces trois faits, ensemble, dans les 48 prochaines heures, vont créer une situation qu\'aucun cadre administratif confédéral ne couvre.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyven_avel',
      titre: 'L\'arrivée du Capteur',
      description: 'Avel (64) arrive dans 48h. Thyven ne le sait pas encore. Quand il le saura — et il le saura parce qu\'il est l\'administrateur de Virex — il devra décider ce qu\'il fait de l\'information. Il sait que le Second Avatar (59) est à Virex. Il ne l\'a pas dénoncé une fois. Le fait deux fois est une décision différente.',
      personnages_impliques: [64, 59],
      declencheur: 'Thyven apprenant qu\'Avel est en route pour Virex',
      consequence: 'Décision de prévenir le Second Avatar ou de laisser la confrontation se produire',
    },
    {
      id: 'thyven_lysael',
      titre: 'Lysael et les 39',
      description: 'Lysael (63) approche les familles des 39 enfants pour la Convergence depuis 3 ans. Thyven sait ce qu\'elle fait et n\'a pas encore agi. Si Avel arrive en même temps que la situation des 39 enfants devient critique, Thyven se retrouve au centre d\'une convergence de crises qu\'il a observées séparément.',
      personnages_impliques: [63, 59],
      declencheur: 'Convergence entre l\'arrivée d\'Avel, la présence du Second Avatar et les activités de Lysael',
      consequence: 'Thyven forcé de décider ce qu\'un administrateur honnête fait quand les cadres ne couvrent pas la situation',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Administrateur confédéral de Virex. Voit les 39 enfants grandir depuis 7 ans. A rencontré le Second Avatar (59) et ne l\'a pas dénoncé. Sait que Lysael (63) approche les familles des 39. Ne sait pas encore qu\'Avel (64) arrive dans 48h.',

  relations: [
    { id: 59, nom: 'Second Avatar', type: 'allié', note: 'L\'a rencontré et ne l\'a pas dénoncé. Le Second Avatar veut le revoir. Thyven le sait.' },
    { id: 63, nom: 'Lysael', type: 'contact', note: 'Approche les familles des 39 enfants pour la Convergence. Thyven le sait depuis 3 ans.' },
    { id: 64, nom: 'Avel', type: 'contact', note: 'Arrive dans 48h. Thyven ne le sait pas encore.' },
  ],

  combat: {
    sorts: [
      'Frappe de précision (Combat) — impact physique amplifié par l\'élément — dommage concentré sur un point',
      'Défense active (Combat) — posture de combat qui réduit les impacts — protection par la technique',
      'Désarmement (Combat) — manipulation de l\'arme adverse — neutralisation sans destruction',
    ],
  },

  image_prompts: [
    {
      id: 'thyven_virex',
      description: 'Thyven dans son bureau administratif de Virex — un Homme-Lien de 47 ans devant un mur de dossiers sur les 39 enfants. Des noms, des éléments, des progrès. Il connaît chacun. Son expression est de quelqu\'un qui fait son travail et qui sait que son travail ne suffit pas. En dehors de sa fenêtre : Virex, où les 39 enfants grandissent.',
      style: 'réaliste Homme-Lien administrateur-combattant, bureau de Virex, dossiers des 39 enfants, travail honnête face à une situation qui le dépasse, décision imminente',
    },
  ],

  lore_long: `Thyven administre Virex depuis 7 ans. Il a vu les 39 enfants double-puissance grandir et a compris progressivement ce qu'ils représentent.

Il a rencontré le Second Avatar (59) et ne l'a pas dénoncé. Cette décision est la plus significative de ses 7 ans à Virex. Il ne l'a pas analysée. Il l'a faite.

Avel (64) arrive dans 48h. Thyven ne le sait pas encore. Lysael (63) approche les familles des 39 depuis 3 ans. Thyven le sait.`,
};

export default thyven;
