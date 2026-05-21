import type { PersonnageLoreComplet } from '../../../lore-types';

const sylvethrak: PersonnageLoreComplet = {
  id: 290,
  nom: 'Sylvethrak',
  element: 'Plante',
  element2: 'Poison',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyen avec des mains larges de cultivateur — pas grandes pour un Sylvan, mais plus épaisses que la normale à cause du travail avec des champignons.',
    peau: 'Brun doré Sylvan avec des stries grises aux paumes — l\'exposition prolongée aux environnements fongiques qui laisse une trace.',
    yeux: 'Vert clair, habitués à regarder sous les surfaces — il cherche les mycéliums, pas les champignons visibles.',
    vetements: 'Tenue pratique de cultivateur avec des tabliers et gants adaptés à chaque type de champignon. Il a des tenues différentes pour les champignons médicinaux et pour les toxiques.',
    signes_particuliers: 'Il humidifie les champignons qu\'il porte avec son élément Plante en marchant — ils poussent légèrement pendant le transport, ce qui maintient leur fraîcheur mieux que n\'importe quel contenant.',
  },

  psychologie: {
    dominante: 'Commerce équitable comme principe de vie. Il vend aux deux communautés parce que les deux ont besoin de ses champignons. La neutralité est aussi une logique de marché.',
    mecanisme_de_defense: 'L\'utilité universelle. S\'il est utile aux deux, les deux le protègent. Ce n\'est pas du cynisme — c\'est de l\'expérience.',
    contradiction_interne: 'Sa neutralité commerciale l\'a rendu utile à des factions dont il désapprouve certains objectifs. Il vend à Thyrum (132) dont il sait qu\'il coupe dans les mesures de sécurité de la Fosse. Il vend à Kraethyn (122) dont il sait qu\'elle répare ce que Krath brûle. Ces deux transactions ne lui posent pas le même type de problème.',
    rapport_aux_autres: 'Thyrum lui achète ses champignons pour les utilisations alimentaires et médicales dans les mines. Kraethyn lui achète les espèces utilisées dans les soins des arbres blessés. Ces deux clients coexistent dans son registre de commandes sans se savoir clients l\'un de l\'autre.',
    vision_du_monde: 'Les champignons poussent dans les deux mondes. Quelqu\'un doit les cultiver dans les deux. C\'est lui.',
  },

  histoire: {
    enfance: {
      titre: 'La forêt sous la forêt',
      contenu: 'Né à Sylvera avec un intérêt pour ce qui pousse sous les arbres plutôt que dans les arbres. À 10 ans, il avait commencé à cartographier les réseaux de mycéliums dans les zones sylvanes. À 14 ans, il avait découvert que certains de ces réseaux s\'étendaient jusqu\'aux zones chthoniennes — invisiblement, sous le sol.',
    },
    arrivee: {
      titre: 'Le premier client chthonien',
      contenu: 'À 22 ans, il avait commencé à vendre ses champignons médicinaux à un mineur Chthonien qui ne pouvait pas trouver les mêmes qualités dans les zones d\'Ormn-Dur. Ça avait été naturel — son stock excédait la demande sylvane et le client avait payé le prix juste. La réputation s\'était étendue.',
    },
    premier_conflit: {
      titre: 'La commande inhabituellement grande',
      contenu: 'Il y a 3 ans, Thyrum lui avait passé une commande inhabituelle en volume — 10 fois sa commande habituelle pour un type de champignon aux propriétés médicinales. Il avait livré. Deux mois plus tard, il avait entendu dire que les mesures de sécurité autour de la Fosse avaient été réduites, les traitements préventifs remplacés par des traitements curatifs. Sa commande servait de stock de traitement curatif moins cher.',
    },
    revelation: {
      titre: 'La limite qu\'il n\'a pas tracée',
      contenu: 'Il avait réalisé que sa commande avait contribué à rendre la réduction des mesures préventives acceptable pour Thyrum. Pas par intention, par conséquence. Il n\'a pas refusé la commande suivante. Il a demandé à Thyrum pourquoi le volume avait changé. La réponse était vague. Il l\'avait notée.',
    },
    etat_actuel: {
      titre: 'Les deux registres',
      contenu: 'Il vend à Thyrum et à Kraethyn. Les commandes de Thyrum sont plus grandes mais potentiellement problématiques dans leurs implications. Les commandes de Kraethyn soutiennent directement ce qu\'il approuve. Il n\'a pas encore décidé où se situe la ligne entre les deux types de transactions.',
    },
  },

  evenements_narratifs: [
    {
      id: 'sylvethrak_thyrum_commande',
      titre: 'La commande et ses conséquences',
      description: 'La commande anormalement grande de Thyrum il y a 3 ans a contribué à rendre économiquement viable une réduction des mesures préventives dans les zones proches de la Fosse. Sylvethrak le sait maintenant. Il continue à vendre à Thyrum parce qu\'il n\'a pas encore identifié une ligne claire à tracer.',
      personnages_impliques: [132],
      declencheur: 'Commande volumineuse avec implications de sécurité',
      consequence: 'Complicité involontaire dans une décision de sécurité dangereuse',
    },
    {
      id: 'sylvethrak_kraethyn_complementarite',
      titre: 'Les soins des arbres',
      description: 'Kraethyn utilise ses champignons pour soigner les arbres blessés par le passage de Krath. Ces deux transactions — vendre à Thyrum, vendre à Kraethyn — dans son registre de commandes illustrent le paradoxe de sa neutralité. Il n\'est pas neutre sur les valeurs. Il est neutre sur les clients.',
      personnages_impliques: [122],
      declencheur: 'Commandes de soins forestiers',
      consequence: 'Contribution à la restauration forestière — contraste direct avec la contribution involontaire à Thyrum',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Commerce de frontière. Ses champignons servent les deux mondes — avec des implications qu\'il commence à peser.',

  relations: [
    { id: 132, nom: 'Thyrum', type: 'allié', note: 'Client principal côté Chthonien. Les implications de ses commandes sont devenues problématiques.' },
    { id: 122, nom: 'Kraethyn', type: 'allié', note: 'Client côté Sylvan. Ses commandes soutiennent directement ce qu\'il approuve — la restauration forestière.' },
  ],

  combat: {
    sorts: [
      'Spores enchevêtrantes (Plante/Poison) — libération de spores de champignons qui s\'accrochent et ralentissent les mouvements',
      'Croissance fongique (Plante) — accélération rapide de la croissance d\'un réseau mycélien — obstacle ou immobilisation',
      'Toxine dosée (Poison) — administration d\'un extrait fongique calibré — efficacité contrôlable selon la dose',
    ],
  },

  image_prompts: [
    {
      id: 'sylvethrak_transport',
      description: 'Sylvethrak en route entre Sylvera et Ormn-Dur, un panier de champignons médicinaux qui poussent légèrement pendant le transport. Il marche sans urgence. Il connaît cette route.',
      style: 'réaliste de frontière, lumière de chemin de transition, champignons vivants pendant le transport, neutralité tranquille',
    },
  ],

  lore_long: `Sylvethrak vend des champignons aux Sylvans et aux Chthoniens. Ce n'est pas une position politique — c'est du commerce.

Les champignons qu'il cultive poussent dans les zones de frontière entre les deux biomes. Personne d'autre ne les cultive avec la même qualité parce que personne d'autre ne connaît les deux milieux aussi bien. Sa clientèle est une conséquence de sa géographie.

Il y a 3 ans, une commande anormalement grande de Thyrum pour un champignon médicinal spécifique l'a surpris. Il a livré. Deux mois après, il a compris que cette commande avait rendu économiquement viable une réduction des mesures de sécurité préventives autour de la Fosse. Ses champignons remplaçaient les préventions.

Il n'a pas refusé la commande suivante. Il a posé une question à Thyrum sur le changement de volume. La réponse était vague.

Kraethyn achète les mêmes espèces pour soigner les arbres que Krath a brûlés. Ces deux lignes dans son registre coexistent.

Il n'a pas encore tracé la limite entre les transactions qu'il est prêt à faire et celles qu'il ne l'est pas.`,
};

export default sylvethrak;
