import type { PersonnageLoreComplet } from '../../../lore-types';

const graveth: PersonnageLoreComplet = {
  id: 43,
  nom: 'Graveth',
  element: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Chthonien de 48 ans — une présence qui dit le chercheur autant que le pratiquant. Il est de corpulence moyenne pour un Chthonien, avec des gestes précis dans les mains qui disent qu\'il manipule des substances régulièrement. Pas de blessures visibles — son élément Poison lui donne une immunité pratique.',
    peau: 'Gris avec des nuances violacées autour des mains — une coloration d\'Élu Poison qui manipule des substances concentrées depuis des années. Cette coloration est le signe de quelqu\'un qui utilise son élément à une intensité que la plupart évitent.',
    yeux: 'Violets foncés — l\'expression la plus évidente de son élément. Ses yeux ne clignotent pas souvent. Il a développé une façon de regarder qui rend les gens mal à l\'aise sans qu\'ils sachent pourquoi.',
    vetements: 'Tenue de recherche de la Convergence — sombre avec des fermetures étanches pour les substances. Des vials dans les poches extérieures dont il ne dit jamais les contenus. Il porte l\'équipement de quelqu\'un qui travaille avec des choses dangereuses et sait comment.',
    signes_particuliers: 'Il parle de la zone fongique de la Fosse avec une précision qui trahit une connaissance de terrain — pas d\'archives. Drevaya (39) l\'a remarqué lors de leurs conversations. Elle n\'a pas encore dit à quel point ça l\'inquiète.',
  },

  psychologie: {
    dominante: 'Agent de la Convergence qui veut accéder à la Fosse Interdite — sa conviction que l\'énergie fongique de la Fosse pourrait être redistribuée autrement que par Drain est sincère. Il croit à la doctrine de la Convergence. Son moyen pour y arriver est problématique.',
    mecanisme_de_defense: 'La légitimité intellectuelle comme couverture. Il n\'infiltre pas — il cherche. Il n\'essaie pas d\'accéder illégalement — il pose des questions légitimes de recherche. La distinction lui semble réelle. Pour ceux qui voient ce qu\'il cherche à faire, elle ne l\'est pas.',
    contradiction_interne: 'Son intérêt pour la Fosse est théoriquement motivé par la redistribution — donner l\'énergie fongique à ceux qui n\'ont pas d\'élément. En pratique, il cherche accès au niveau 9 sans comprendre ce qui vit là. Ce qu\'il fera s\'il y accède pourrait être précisément le type d\'intervention qui déclenche ce que Valyx (38) avait voulu empêcher.',
    rapport_aux_autres: 'Drevaya (39) est son contact principal avec les gardiens de zone — il lui a posé des questions trop précises et elle le sait. Il doit la convaincre de lui faciliter l\'accès ou trouver un autre moyen. Ossira (44) est dans la même ville et travaille pour les Dissidentes — leurs objectifs sur la Fosse ne sont pas compatibles. Il l\'évite.',
    vision_du_monde: 'L\'énergie fongique de la Fosse est peut-être la preuve vivante que la puissance élémentaire n\'a pas besoin d\'être héritée — qu\'elle peut être cultivée, redistribuée, accessibilisée. Si la Convergence peut démontrer ça depuis Ormn-Dur, la doctrine du Drain volontaire devient moins nécessaire.',
  },

  histoire: {
    enfance: {
      titre: 'La doctrine du redistribution',
      contenu: 'À 19 ans, il avait rejoint la Convergence non pas comme croyant au Drain volontaire mais comme croyant à la redistribution de la puissance élémentaire. Il avait distingué les deux dès le début : le Drain était un moyen possible, pas la seule voie. La Convergence avait des débats internes sur ce distinguo. Il se positionnait du côté des alternatives.',
    },
    arrivee: {
      titre: 'La théorie fongique',
      contenu: 'À 35 ans, lors d\'une conférence sur les énergies non-élémentaires, il avait entendu parler pour la première fois de la zone fongique de la Fosse Interdite — une énergie organique qui existait en dehors des éléments classiques. Il avait passé les 13 années suivantes à documenter tout ce qui était accessible sur ce sujet. La plupart de ce qui était accessible ne disait pas grand-chose. Il était allé chercher plus loin.',
    },
    premier_conflit: {
      titre: 'Le premier accès refusé',
      contenu: 'À 41 ans, il avait demandé formellement un accès de recherche aux niveaux 5-6 de la Fosse. Refus de la Technocratie de Kar-Dum — les niveaux 5-6 étaient réservés aux gardiens de zone certifiés. Il avait obtenu une certification partielle de gardien de zone en 2 ans. Le niveau 7 restait interdit. Il avait continué à chercher des accès alternatifs.',
    },
    revelation: {
      titre: 'La conversation avec Drevaya',
      contenu: 'À 47 ans, lors d\'une conférence de gardiens de zone à Kar-Dum, il avait rencontré Drevaya (39). Il lui avait posé des questions sur les observations directes des niveaux 7-9. Les questions étaient trop précises. Drevaya l\'avait regardé différemment. Il avait changé de sujet. Il n\'était pas sûr de l\'avoir convaincue que c\'était de la curiosité scientifique.',
    },
    etat_actuel: {
      titre: 'Le plan d\'accès',
      contenu: 'Il cherche un accès au niveau 9 — pas en forçant l\'entrée, mais en trouvant quelqu\'un qui a l\'autorisation et qui peut être convaincu de lui faciliter l\'accès. Drevaya est la personne la mieux placée. Elle n\'est pas convaincue. Il cherche une autre approche. La situation de la Fosse qu\'il ne connaît pas entièrement est peut-être en train de changer de façon à rendre son accès plus urgent — ou impossible.',
    },
  },

  evenements_narratifs: [
    {
      id: 'graveth_fosse',
      titre: 'L\'accès au niveau 9',
      description: 'Graveth cherche à accéder au niveau 9 de la Fosse pour y observer et potentiellement interagir avec la zone fongique. Si les micro-fractures de Drevaya (39) indiquent une instabilité en cours dans la Fosse, son accès au moment actuel pourrait déclencher exactement ce que l\'accord de Valyx (38) était conçu pour empêcher.',
      personnages_impliques: [39, 44],
      declencheur: 'Graveth trouvant un accès au niveau 9 de la Fosse',
      consequence: 'Interaction avec une zone fongique dont l\'accord de confinement est peut-être en train d\'expirer — conséquences imprévisibles',
    },
    {
      id: 'graveth_drevaya',
      titre: 'La gardienne méfiante',
      description: 'Drevaya (39) pense que Graveth cherche accès au niveau 9. Elle n\'a pas rapporté sa méfiance à Thyss (42). Si elle le fait, Graveth est expulsé de Kar-Dum. Si elle ne le fait pas, il continue à chercher un accès. Dans l\'état actuel de la Fosse, les deux options ont des conséquences.',
      personnages_impliques: [39, 41],
      declencheur: 'Drevaya décidant de rapporter la méfiance envers Graveth',
      consequence: 'Soit Graveth est arrêté, soit la situation de la Fosse révèle pourquoi son accès est particulièrement dangereux maintenant',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Agent de la Convergence cherchant à accéder au niveau 9 de la Fosse Interdite pour étudier l\'énergie fongique. Croit qu\'elle peut être redistribuée. Drevaya (39) est méfiante à son égard. Ne sait pas que la Fosse est peut-être en train de changer.',

  relations: [
    { id: 39, nom: 'Drevaya', type: 'contact', note: 'Son meilleur contact pour l\'accès. Elle est méfiante depuis leur conversation. Il cherche une autre approche.' },
    { id: 44, nom: 'Ossira', type: 'adversaire', note: 'Dissidentes dans la même ville. Objectifs incompatibles sur la Fosse. Il l\'évite.' },
    { id: 41, nom: 'Karm', type: 'contact', note: 'L\'archiviste qui sait des choses sur la Fosse. Il ne sait pas encore à quel point.' },
  ],

  combat: {
    sorts: [
      'Nuage toxique (Poison) — diffusion de spores concentrées — désorientation et affaiblissement dans une zone',
      'Injection ciblée (Poison) — contact physique qui injecte une toxine — effets variés selon la substance',
      'Immunité de terrain (Poison) — adaptation aux environnements toxiques — survie dans des zones inhospitalières',
    ],
  },

  image_prompts: [
    {
      id: 'graveth_recherche',
      description: 'Graveth dans une salle de recherche de Kar-Dum — un Chthonien de 48 ans examinant des cartes des niveaux de la Fosse Interdite. Des vials sont posés sur la table à côté de lui. Ses yeux violets sont concentrés sur les niveaux 7-9 de la carte. Son expression est de chercheur convaincu — mais aussi de quelqu\'un qui planifie quelque chose.',
      style: 'réaliste Chthonien chercheur de la Convergence, cartes de la Fosse Interdite, vials de substances, yeux violets, Kar-Dum, planification',
    },
  ],

  lore_long: `Graveth croit que l'énergie fongique de la Fosse Interdite peut être redistribuée — une alternative au Drain volontaire de la Convergence. Sa théorie est sincère. Son moyen pour l'atteindre est dangereux.

Il cherche à accéder au niveau 9. Drevaya (39) est méfiante à son égard depuis leur conversation. Il cherche une autre approche.

Ce qu'il ne sait pas : la Fosse est peut-être en train de changer. Un accès au niveau 9 maintenant pourrait déclencher exactement ce que l'accord de Valyx (38) était conçu pour empêcher.`,
};

export default graveth;
