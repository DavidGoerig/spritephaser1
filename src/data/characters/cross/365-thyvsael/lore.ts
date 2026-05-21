import type { PersonnageLoreComplet } from '../../../lore-types';

const thyvsael: PersonnageLoreComplet = {
  id: 365,
  nom: 'Thyvsael',
  element: 'Psy',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Déserts',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Fine et légèrement voûtée — quelqu\'un qui passe beaucoup de temps à regarder vers le bas (lectures) ou vers le haut (ciel). Ses mains bougent parfois sans raison visible — il perçoit des résonances que les autres ne voient pas.',
    peau: 'Brun sable Homme-Lien avec des cercles légèrement plus sombres sous les yeux — il dort mal les nuits de conjonction stellaire, quand les lectures s\'intensifient.',
    yeux: 'Gris avec une légère phosphorescence dans les pupilles — l\'élément Stellaire qui affleure quand il est en état de lecture active. Déroutant pour ceux qui ne savent pas ce que c\'est.',
    vetements: 'Tenue sobre et non marquée, adaptée aux déplacements. Il se déplace beaucoup — les configurations stellaires optimales ne sont pas toutes accessibles depuis le même endroit.',
    signes_particuliers: 'Il dit ce qu\'il voit, pas ce que les gens veulent entendre. Cette habitude lui a coûté plus de contacts qu\'elle ne lui en a apporté.',
  },

  psychologie: {
    dominante: 'Voyance combinant lecture psychique directe (état émotionnel et intentionnel d\'une personne) et alignements stellaires (patterns cycliques à long terme) — ses prédictions combinent le présent intérieur et la trajectoire cosmique.',
    mecanisme_de_defense: 'L\'exactitude comme position. Ses prédictions sont vérifiables. Ceux qui les ignorent ont tort ensuite. Il attend que l\'événement valide et ne commente pas au-delà.',
    contradiction_interne: 'Ses prédictions sont exactes mais structurellement incomprises — elles arrivent trop tôt pour être comprises comme pertinentes et trop tard pour être préventives dans la plupart des cas. L\'utilité de l\'exactitude dépend du délai entre la prédiction et l\'événement.',
    rapport_aux_autres: 'Syvara (30) le consulte discrètement — elle prend ses lectures au sérieux sans le dire à ses contacts habituels. Kasyr (192) a essayé de le décrédibiliser publiquement et a eu tort sur 3 des 4 points. Il n\'a pas commenté l\'échec de Kasyr.',
    vision_du_monde: 'La conscience élémentaire d\'un individu et sa trajectoire stellaire convergent en patterns prévisibles. La plupart des personnes ne veulent pas voir ces patterns — ils rendent les choix moins libres en apparence.',
  },

  histoire: {
    enfance: {
      titre: 'La première lecture involontaire',
      contenu: 'À 14 ans, il avait dit à son père ce qu\'il allait décider avant que son père décide. Son père avait décidé exactement ça. Il avait réalisé que ce qu\'il percevait n\'était pas de l\'intuition — c\'était de la lecture. Il avait commencé à cartographier ce qu\'il pouvait voir.',
    },
    arrivee: {
      titre: 'Le contact avec Syvara',
      contenu: 'À 23 ans, Syvara (30) avait entendu parler de ses prédictions via un intermédiaire des Déserts. Elle l\'avait contacté pour une lecture. Il avait vu ce qu\'elle ne voulait pas savoir. Il le lui avait dit. Elle était revenue.',
    },
    premier_conflit: {
      titre: 'La tentative de Kasyr',
      contenu: 'Kasyr (192) avait contesté publiquement 4 de ses prédictions passées — tentative de décrédibilisation méthodique. 3 des 4 prédictions s\'étaient avérées exactes dans les 6 mois suivants. La 4ème était encore en attente de réalisation. Il n\'avait pas commenté.',
    },
    revelation: {
      titre: 'La limite du délai',
      contenu: 'À 30 ans, une de ses prédictions les plus précises — une extraction impériale dans un village des Déserts — s\'était réalisée 4 jours après qu\'il l\'avait annoncée. Il avait su que 4 jours de délai était insuffisant pour que quiconque agisse. L\'exactitude sans délai utilisable était une forme d\'inutilité.',
    },
    etat_actuel: {
      titre: 'Les lectures en cours',
      contenu: 'Il a 3 lectures actives — des trajectoires qu\'il surveille parce que les patterns psycho-stellaires sont en convergence. L\'une concerne des événements dans les zones de saturation de l\'Isthme dans les 3 semaines à venir. Il en a informé Syvara. Ce qu\'elle en fera ne lui appartient pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyvsael_lecture_isthme',
      titre: 'La convergence de l\'Isthme',
      description: 'Ses lectures indiquent une convergence psycho-stellaire majeure dans les zones de saturation de l\'Isthme dans les 3 semaines — plusieurs trajectoires individuelles qui se croisent de façon non aléatoire. Il l\'a transmis à Syvara (30). Il ne sait pas si cette information atteindra ceux qui peuvent en faire quelque chose.',
      personnages_impliques: [30, 192],
      declencheur: 'Pattern de convergence psycho-stellaire détecté dans la région de l\'Isthme',
      consequence: 'Information transmise à Syvara — utilité dépendante du délai et des canaux de transmission',
    },
    {
      id: 'thyvsael_limite_credibilite',
      titre: 'L\'exactitude sans audience',
      description: 'Kasyr (192) continue de douter malgré 3 validations sur 4. Son audience est limitée — les personnes qui prennent ses lectures au sérieux le font discrètement. Si ses prédictions sur l\'Isthme sont exactes et qu\'aucun canal de transmission ne fonctionne, l\'exactitude ne servira à rien.',
      personnages_impliques: [192, 30],
      declencheur: 'Limite structurelle entre exactitude et utilité opérationnelle',
      consequence: 'Questionnement sur comment rendre ses lectures accessibles sans les décrédibiliser',
    },
  ],

  arcs: ['arc_confluence_psy_stellaire'],
  position_dans_arc: 'Voyant indépendant dont les prédictions psycho-stellaires sont exactes et structurellement sous-utilisées. Lectures actives sur une convergence dans l\'Isthme dans 3 semaines. Syvara est son seul canal de diffusion.',

  relations: [
    { id: 30, nom: 'Syvara', type: 'allié', note: 'Le consulte discrètement. Seul canal de transmission de ses lectures vers des personnes qui peuvent agir.' },
    { id: 192, nom: 'Kasyr', type: 'adversaire', note: 'A tenté une décrédibilisation publique. A eu tort sur 3 points sur 4. La 4ème prédiction est en attente.' },
  ],

  combat: {
    sorts: [
      'Lecture psychique (Psy) — perception de l\'état émotionnel et intentionnel d\'une cible — anticipation des actions',
      'Alignement stellaire (Stellaire) — concentration des trajectoires cosmiques d\'une zone — amplification de la précision des lectures',
      'Projection de trajectoire (Psy + Stellaire) — projection de la convergence probable des trajectoires individuelles — prédiction à court terme',
    ],
  },

  image_prompts: [
    {
      id: 'thyvsael_lecture',
      description: 'Thyvsael dans un espace ouvert des Déserts sous un ciel étoilé — il regarde vers le haut et vers une personne en alternance, ses yeux légèrement phosphorescents. Une main est tendue vers la personne (lecture psychique), l\'autre vers le ciel (lecture stellaire). Son expression est concentrée et neutre — il voit, il ne juge pas.',
      style: 'réaliste voyant Homme-Lien, ciel étoilé des Déserts, lecture psycho-stellaire, phosphorescence oculaire',
    },
  ],

  lore_long: `Thyvsael combine lecture psychique directe et alignements stellaires pour des prédictions exactes. Exact et incompris : ses prédictions arrivent trop tôt ou trop tard pour être utilisables dans la plupart des cas.

Kasyr (192) a tenté de le décrédibiliser. A eu tort sur 3 points sur 4.

3 lectures actives. L'une concerne une convergence dans les zones de saturation de l'Isthme dans les 3 semaines. Syvara (30) est informée.`,
};

export default thyvsael;
