import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvelt: PersonnageLoreComplet = {
  id: 222,
  nom: 'Thyrvelt',
  element: 'Feu',
  element2: 'Combat',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 33 ans, mercenaire — corpulence de quelqu\'un constamment préparé à combattre. Pas d\'idéologie visible dans le corps. Seulement la préparation.',
    peau: 'Rouge-ardente avec des marques de mercenariat — des cicatrices utilitaires, pas symboliques.',
    yeux: 'Orangés avec une qualité de quelqu\'un qui évalue constamment le risque et la rémunération.',
    vetements: 'Tenue de mercenaire sans identification — adaptée à une extraction Dissidente ou à une mission impériale selon le contrat.',
    signes_particuliers: 'Il est actuellement sous contrat pour une extraction Dissidente — mais il a travaillé pour des factions diverses dans le passé. Le contrat actuel est son affiliation actuelle.',
  },

  psychologie: {
    dominante: 'Mercenaire Pyrien sans faction fixe. Il accepte des contrats selon des critères de rémunération, de risque acceptable, et d\'une liste personnelle de clients qu\'il refuse (l\'Empire en fait partie — pas pour des raisons idéologiques, mais parce que les contrats impériaux ont des clauses de non-sortie qu\'il ne veut pas). Actuellement sous contrat pour une extraction Dissidente.',
    mecanisme_de_defense: 'La réputation de fiabilité contractuelle. Il fait ce que le contrat dit. Toujours. Cette fiabilité est sa valeur commerciale. Des clients de toutes factions savent qu\'il honore ses contrats.',
    contradiction_interne: 'Sa réputation de fiabilité s\'est construite à travers des contrats pour des factions opposées. Des clients qui connaissent son historique savent qu\'il a travaillé pour leurs adversaires. Cette transparence est acceptable parce qu\'elle est symétrique.',
    rapport_aux_autres: 'Velath (49) est dans son réseau — le contact actuel pour l\'extraction Dissidente en cours. Sarevorn (261) est dans son réseau — un coordinateur Dissident avec qui il a travaillé sur des missions précédentes.',
    vision_du_monde: 'Le combat est une compétence. Les compétences ont un prix. Les prix ont des conditions. Il négocie les conditions. Il honore le résultat.',
  },

  histoire: {
    enfance: {
      titre: 'Le mercenariat',
      contenu: 'Il avait commencé le mercenariat à 20 ans — pas par idéologie, mais parce que ses compétences se vendaient mieux sans affiliation que dans une structure hiérarchique. Il avait développé une clientèle diverse.',
    },
    arrivee: {
      titre: 'La liste noire',
      contenu: 'Il avait refusé l\'Empire à 26 ans — pas pour des raisons idéologiques, mais après avoir analysé les clauses de contrat impérial. Les clauses de non-sortie et les pénalités étaient incompatibles avec son mode de fonctionnement. Il avait classé l\'Empire comme client inacceptable.',
    },
    premier_conflit: {
      titre: 'Le client adverse',
      contenu: 'Un client lui avait demandé d\'agir contre un de ses anciens clients. Il avait évalué le contrat — pas de clause de non-concurrence dans l\'ancien contrat. Il avait accepté. L\'ancien client n\'avait pas été content. Il avait expliqué sa position.',
    },
    revelation: {
      titre: 'La réputation symétrique',
      contenu: 'Il avait compris que sa réputation fonctionnait parce qu\'elle était symétrique — tout le monde savait qu\'il pouvait travailler contre eux s\'ils ne le contractaient pas. Cette symétrie était ce qui rendait ses contrats précieux.',
    },
    etat_actuel: {
      titre: 'Le mercenaire',
      contenu: 'Il est sous contrat Dissident. L\'extraction est en cours. Le prochain contrat sera ce qu\'il sera.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvelt_contrat',
      titre: 'Le contrat et ses complications',
      description: 'Thyrvelt est sous contrat pour une extraction Dissidente. Si l\'extraction se complique d\'une façon que le contrat n\'anticipait pas — une complication qui nécessite un effort supérieur à ce qui était prévu — il devra décider si la fidélité contractuelle va jusqu\'à absorber des risques non-compensés.',
      personnages_impliques: [49, 261],
      declencheur: 'L\'extraction en cours se compliquant significativement au-delà des termes initiaux du contrat',
      consequence: 'Thyrvelt renégociant les termes ou absorbant le risque — et les Dissidentes apprenant jusqu\'où va sa fiabilité contractuelle',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Mercenaire Pyrien actuellement sous contrat pour une extraction Dissidente. Refuse l\'Empire pour des raisons contractuelles non-idéologiques. Fiabilité contractuelle comme identité professionnelle.',

  relations: [
    { id: 49, nom: 'Velath', type: 'contact', note: 'Contact actuel pour l\'extraction Dissidente en cours.' },
    { id: 261, nom: 'Sarevorn', type: 'contact', note: 'Coordinateur Dissident avec qui il a travaillé sur des missions précédentes.' },
  ],

  combat: {
    sorts: [
      'Exécution de contrat (Feu/Combat) — attaque optimisée pour la mission assignée — efficacité contractuelle',
      'Retrait opérationnel (Combat) — décrochage tactique quand les conditions dépassent le contrat — survie professionnelle',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvelt_mission',
      description: 'Thyrvelt en préparation d\'une extraction Dissidente dans un quartier de Varkhôl — un Pyrien de 33 ans qui vérifie son équipement avec la précision de quelqu\'un qui fait ça pour la 50ème fois. Il porte les éléments nécessaires à l\'extraction, pas plus. Il honore le contrat.',
      style: 'réaliste Pyrien mercenaire, Varkhôl, mission d\'extraction Dissidente, professionnalisme sans idéologie, double élément Feu/Combat',
    },
  ],

  lore_long: `Thyrvelt est mercenaire sans faction fixe à Varkhôl. Il accepte des contrats selon ses critères — rémunération, risque acceptable, et une liste de clients inacceptables dont l'Empire.

L'Empire est refusé pour des raisons contractuelles, pas idéologiques. Les clauses impériales sont incompatibles avec son mode de fonctionnement.

Il est actuellement sous contrat Dissident. Il honore ses contrats. Ce qui suit dépendra du prochain contrat.`,
};

export default thyrvelt;
