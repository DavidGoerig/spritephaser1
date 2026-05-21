import type { PersonnageLoreComplet } from '../../../lore-types';

const kaerolt: PersonnageLoreComplet = {
  id: 353,
  nom: 'Kaerolt',
  element: 'Combat',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Trapu, avec une densité physique qui vient de décennies de terrain — pas de l\'entraînement en salle. Ses mouvements sont économes et pratiques.',
    peau: 'Brun foncé Homme-Lien avec des marques de terrain nombreuses — brûlures légères, cicatrices d\'accrochages, traces d\'exposition prolongée aux zones de saturation.',
    yeux: 'Brun-noir. Ils évaluent en permanence ce qui est utile et ce qui ne l\'est pas. Cette évaluation est appliquée aux personnes autant qu\'aux situations.',
    vetements: 'Tenue de terrain sans marqueur — délibérément sans appartenance visible. Il enseigne à des personnes de toutes les factions. Les marqueurs divisent.',
    signes_particuliers: 'Il montre toujours avant d\'expliquer. La démonstration physique vient avant les mots. Pour certains élèves, c\'est déconcertant. Pour ceux qui apprennent mieux par l\'observation, c\'est la méthode idéale.',
  },

  psychologie: {
    dominante: 'Enseignement de techniques de survie dans l\'Isthme sans demander les affiliations de ses élèves. Les techniques de survie — navigation dans les zones de saturation, premier secours en terrain hostile, extraction d\'urgence — sont utiles à toute personne dans cette région, quelle que soit sa faction.',
    mecanisme_de_defense: 'La compétence comme seul critère. Il enseigne à ceux qui veulent apprendre et qui peuvent absorber l\'apprentissage. L\'affiliation ne détermine pas la capacité d\'apprentissage.',
    contradiction_interne: 'Ses élèves utilisent ses techniques pour des objectifs dont certains sont opposés. Un élève Dissident utilise ses techniques d\'extraction pour faire sortir des Élus. Un élève impérial les utilise pour contrôler des zones. La même technique sert les deux. Il ne peut pas contrôler l\'usage après l\'enseignement.',
    rapport_aux_autres: 'Kareth (179) lui envoie des élèves en priorité — des personnes qui ont besoin de techniques de terrain rapidement. Vasketh (195) est un ancien élève qui lui envoie maintenant des contacts utiles dans différentes régions de l\'Isthme.',
    vision_du_monde: 'L\'Isthme est dangereux pour tout le monde. Les techniques qui permettent de survivre à ces dangers ont plus de valeur que n\'importe quelle affiliation politique. Il enseigne ces techniques.',
  },

  histoire: {
    enfance: {
      titre: 'Le terrain comme premier enseignant',
      contenu: 'À 12 ans, il avait appris à naviguer les zones de saturation de l\'Isthme par nécessité — sa famille vivait dans une zone qui avait été progressive ment saturée et les routes habituelles n\'étaient plus praticables. Il avait appris à lire les zones de saturation avant même d\'avoir un nom pour ce qu\'il observait.',
    },
    arrivee: {
      titre: 'Le premier groupe',
      contenu: 'À 25 ans, il avait commencé à enseigner à des groupes de 3 à 5 personnes — des habitants de l\'Isthme qui avaient entendu parler de ses connaissances du terrain. Les premières sessions étaient informelles. Il n\'avait pas de programme. Il avait une méthode qui fonctionnait.',
    },
    premier_conflit: {
      titre: 'L\'élève de l\'Empire',
      contenu: 'À 33 ans, un élève qu\'il avait formé était réapparu comme membre d\'une unité impériale — les techniques d\'extraction qu\'il lui avait enseignées avaient été utilisées pour des opérations qu\'il n\'aurait pas soutenues. Il avait décidé de continuer à enseigner. Refuser des élèves selon leur affiliation future était une décision impossible à prendre.',
    },
    revelation: {
      titre: 'La liste de Kareth',
      contenu: 'Kareth (179) lui avait expliqué pourquoi il lui envoyait des élèves en priorité — certains de ces élèves avaient besoin de techniques spécifiques pour des situations spécifiques, rapidement. Il ne lui disait pas lesquelles. Kaerolt avait demandé le niveau d\'urgence et avait adapté le programme. Il n\'avait pas demandé plus de détails.',
    },
    etat_actuel: {
      titre: 'Le groupe actuel',
      contenu: 'Il enseigne à un groupe de 8 personnes actuellement. 3 ont été envoyées par Kareth (179). Il ne sait pas les affiliations de toutes. Il sait que 2 sont Dissidentes — elles n\'ont pas caché leurs questions sur les techniques d\'extraction clandestine. Il enseigne le même programme à tout le groupe.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kaerolt_techniques_opposees',
      titre: 'Les mêmes techniques, les usages opposés',
      description: 'Son programme actuel inclut 2 élèves dont les questions suggèrent un usage Dissident et potentiellement 1 dont les questions suggèrent un profil impérial. Il enseigne le même programme à tous. Les techniques d\'extraction, de navigation dans les zones de saturation, de premier secours servent les deux usages. Il ne peut pas contrôler l\'usage après l\'enseignement.',
      personnages_impliques: [179, 195],
      declencheur: 'Composition mixte probable du groupe actuel',
      consequence: 'Techniques potentiellement utilisées des deux côtés d\'un même conflit',
    },
    {
      id: 'kaerolt_urgence_kareth',
      titre: 'Les élèves prioritaires',
      description: 'Kareth (179) lui envoie des élèves "en priorité" — un code pour des besoins urgents qu\'il ne précise pas. Kaerolt adapte le programme à l\'urgence sans demander les détails. Cette adaptation produit des techniques plus rapidement mais avec moins de consolidation. Il assume que les élèves de Kareth savent ce qu\'ils font avec.',
      personnages_impliques: [179],
      declencheur: 'Envoi d\'élèves prioritaires par Kareth',
      consequence: 'Programme accéléré pour des besoins urgents non précisés',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Instructeur de survie indépendant dans l\'Isthme. Il enseigne à toutes les factions sans demander les affiliations. Ses techniques servent des usages opposés selon les élèves.',

  relations: [
    { id: 179, nom: 'Kareth', type: 'allié', note: 'Envoie des élèves prioritaires avec des besoins urgents non précisés. Kaerolt adapte sans demander de détails.' },
    { id: 195, nom: 'Vasketh', type: 'allié', note: 'Ancien élève qui envoie maintenant des contacts utiles dans différentes régions de l\'Isthme.' },
  ],

  combat: {
    sorts: [
      'Frappe de survie (Combat) — technique d\'engagement rapide optimisée pour la fuite plutôt que l\'engagement prolongé — neutralisation d\'urgence',
      'Résistance de saturation (Normal) — maintien des fonctions physiques dans des zones de saturation élémentaire — endurance en terrain hostile',
      'Extraction physique (Combat + Normal) — technique de dégagement d\'une zone hostile en portant un blessé — évacuation de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'kaerolt_enseignement',
      description: 'Kaerolt dans un espace de terrain de l\'Isthme, montrant une technique d\'extraction à un groupe de 8 élèves de tenues différentes. Il démontre sans parler. Les élèves observent. Il n\'y a pas de marqueurs visibles d\'affiliation — ni sur lui ni sur la plupart des élèves.',
      style: 'réaliste instructeur Homme-Lien, démonstration de terrain, groupe mixte, Isthme extérieur',
    },
  ],

  lore_long: `Kaerolt enseigne des techniques de survie dans l'Isthme sans demander les affiliations de ses élèves. Navigation en zones de saturation, extraction d'urgence, premier secours — techniques utiles à toute faction.

Groupe actuel de 8 personnes — 3 envoyées par Kareth (179), affiliations mixtes probables. Il enseigne le même programme à tous. Les mêmes techniques servent des usages opposés selon qui les utilise.

Il ne peut pas contrôler l'usage après l'enseignement. Il a décidé que c'est le prix de la neutralité.`,
};

export default kaerolt;
