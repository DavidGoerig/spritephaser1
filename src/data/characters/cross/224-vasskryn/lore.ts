import type { PersonnageLoreComplet } from '../../../lore-types';

const vasskryn: PersonnageLoreComplet = {
  id: 224,
  nom: 'Vasskryn',
  element: 'Feu',
  element2: 'Combat',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 45 ans, entraîneur de combat libre — corpulence de quelqu\'un qui a enseigné pendant 15 ans. Solide sans être ostentatoire.',
    peau: 'Rouge-ardente avec des marques d\'entraînement quotidien — les traces d\'un praticien actif.',
    yeux: 'Orangés avec une qualité pédagogique — il voit les erreurs techniques instinctivement.',
    vetements: 'Tenue d\'entraînement simple — fonctionnelle, sans affiliation.',
    signes_particuliers: 'Il enseigne aux Élus non-enregistrés à se défendre sans attirer l\'attention. Son objectif est la survie, pas la victoire — des techniques qui permettent de fuir efficacement, pas de combattre jusqu\'à la victoire.',
  },

  psychologie: {
    dominante: 'Entraîneur de combat libre indépendant à Varkhôl. Il enseigne aux Élus non-enregistrés des techniques de survie et de défense adaptées à leur situation — fuir plutôt que combattre, dissimuler l\'usage de l\'élément, absorber des coups sans tomber. Son enseignement est calibré pour des personnes dont l\'objectif est de survivre, pas de gagner.',
    mecanisme_de_defense: 'Le combat libre comme couverture. Il enseigne le combat libre — un sport. L\'enseignement de techniques de survie à des Élus non-enregistrés se fait dans le cadre d\'une activité légalement neutre.',
    contradiction_interne: 'Son enseignement aide des Élus à éviter l\'enregistrement plus efficacement. Il n\'est pas un Dissident — il ne s\'oppose pas politiquement à l\'Empire. Il aide des personnes à survivre à une pression qu\'il n\'a pas créée et ne peut pas résoudre.',
    rapport_aux_autres: 'Kareth (179) est dans son réseau — un autre instructeur dont les méthodes complémentent les siennes pour des Élus plus avancés. Ossira (44) est dans son réseau — une coordinatrice Dissident d\'Ormn-Dur dont certains contacts utilisent ses services.',
    vision_du_monde: 'Savoir se défendre est une compétence de survie, pas un acte politique. Enseigner à des personnes vulnérables à survivre n\'est pas différent d\'enseigner à n\'importe qui à se protéger.',
  },

  histoire: {
    enfance: {
      titre: 'Le combat libre',
      contenu: 'Il avait pratiqué le combat libre depuis l\'adolescence à Varkhôl — un sport qui lui avait permis de développer des techniques adaptées à son double élément. Il avait commencé à enseigner à 28 ans.',
    },
    arrivee: {
      titre: 'Les Élus non-enregistrés',
      contenu: 'Des Élus non-enregistrés l\'avaient approché après la Rupture — des personnes qui avaient besoin de compétences de survie mais pas d\'entraînement au combat offensif. Il avait développé un curriculum spécifique.',
    },
    premier_conflit: {
      titre: 'Le Régulateur instructeur',
      contenu: 'Un Régulateur avait assisté à une de ses sessions — pas pour un contrôle, mais parce qu\'il cherchait un entraîneur pour ses unités. Vasskryn avait refusé — ses méthodes n\'étaient pas adaptées aux besoins offensifs des Régulateurs. Le Régulateur n\'avait pas insisté.',
    },
    revelation: {
      titre: 'La neutralité de l\'enseignement',
      contenu: 'Il avait compris que son enseignement était utile précisément parce qu\'il n\'était pas offensif — il ne formait pas des combattants, il formait des survivants. Cette distinction le maintenait dans une zone de légitimité que les Régulateurs ne remettaient pas en question.',
    },
    etat_actuel: {
      titre: 'L\'entraîneur',
      contenu: 'Il enseigne. Les Élus apprennent à survivre. Les Régulateurs ne voient pas ce qu\'il fait comme une menace.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vasskryn_eleves',
      titre: 'L\'élève qui combat',
      description: 'Vasskryn enseigne la survie, pas la victoire au combat. Si un de ses élèves utilise ses techniques dans une confrontation offensive — contre un Régulateur, dans une opération Dissidente — les techniques de "fuite efficace" seront visibles dans une autre fonction, exposant Vasskryn à une investigation sur ce qu\'il enseigne réellement.',
      personnages_impliques: [179, 44],
      declencheur: 'Un ancien élève de Vasskryn utilisant ses techniques dans un contexte offensif visible',
      consequence: 'Vasskryn investigué sur ses méthodes d\'enseignement — et la neutralité de son curriculum remise en question',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Entraîneur de combat libre enseignant aux Élus non-enregistrés des techniques de survie plutôt que de combat offensif. Indépendant. Neutralité par définition pédagogique.',

  relations: [
    { id: 179, nom: 'Kareth', type: 'contact', note: 'Autre instructeur dont les méthodes complémentent les siennes pour des Élus avancés.' },
    { id: 44, nom: 'Ossira', type: 'contact', note: 'Coordinatrice Dissident dont certains contacts utilisent ses services.' },
  ],

  combat: {
    sorts: [
      'Frappe de survie (Feu/Combat) — attaque minimale créant une ouverture de fuite — efficacité défensive',
      'Décrochage rapide (Combat) — repositionnement pour désengagement — technique de fuite enseignée',
    ],
  },

  image_prompts: [
    {
      id: 'vasskryn_entrainement',
      description: 'Vasskryn dans une salle d\'entraînement discrète à Varkhôl — un Pyrien de 45 ans montrant à un groupe d\'Élus non-enregistrés comment absorber un coup et créer un espace de fuite. Il démonte le mouvement étape par étape. L\'objectif n\'est pas de gagner le combat. C\'est de sortir de la situation.',
      style: 'réaliste Pyrien entraîneur de combat libre, Varkhôl, Élus non-enregistrés, techniques de survie non-offensives, double élément Feu/Combat',
    },
  ],

  lore_long: `Vasskryn enseigne aux Élus non-enregistrés à Varkhôl des techniques de survie — fuir efficacement, dissimuler l'usage de l'élément, absorber des coups sans tomber.

Il n'est pas un Dissident. Il aide des personnes à survivre à une pression qu'il n'a pas créée. La distinction lui paraît importante.

Son enseignement est neutre par définition pédagogique. Cette neutralité tient tant que ses élèves n'utilisent ses techniques qu'en défense.`,
};

export default vasskryn;
