import type { PersonnageLoreComplet } from '../../../lore-types';

const vornketh: PersonnageLoreComplet = {
  id: 294,
  nom: 'Vornketh',
  element: 'Eau',
  element2: 'Plante',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Confédération',

  apparence: {
    taille_corpulence: 'Moyen, avec une posture qui dit "je suis là pour représenter" — ni imposant ni effacé. Il prend l\'espace juste qu\'il faut pour être pris au sérieux.',
    peau: 'Bleu-gris Néréide avec des reflets verts aux mains — l\'élément Plante qui monte dans les zones où il négocie avec des Sylvans.',
    yeux: 'Bleu profond, habitués à maintenir le contact visuel lors des négociations. Regard stable.',
    vetements: 'Tenue de diplomate Confédération — formelle mais pas rigide. Il a appris à adapter sa tenue selon la région : plus souple côté sylvan, plus structurée côté thalassyrienne.',
    signes_particuliers: 'Prend des notes sur tout avec un stylet en os — un objet qui ne vient ni de Thalassyr ni de Sylvera, qu\'il garde depuis 15 ans.',
  },

  psychologie: {
    dominante: 'Maintien d\'équilibres fragiles par le dialogue continu. Les accords commerciaux entre Thalassyr et Sylvera tiennent parce que quelqu\'un maintient le dialogue — c\'est lui.',
    mecanisme_de_defense: 'Le texte des accords. Quand une situation devient émotionnelle, il ramène la conversation aux termes écrits.',
    contradiction_interne: 'Il maintient des accords commerciaux entre des factions dont les tensions sous-jacentes — Conservateurs versus Gardiens, contrôle de l\'accès à la forêt — ne sont pas résolues. Il gère les symptômes commerciaux d\'une tension politique qu\'il ne peut pas résoudre.',
    rapport_aux_autres: 'Velok (178) est son contact dans l\'Isthme pour les accords qui impliquent des routes commerciales terrestres. Tyraneth (83) surveille les communications officielles — ils travaillent dans le même réseau de Confédération sans se connaître.',
    vision_du_monde: 'Un accord commercial qui tient, c\'est moins de conflits. Les relations entre Thalassyr et Sylvera ont des siècles d\'histoire commune. Ces siècles méritent d\'être préservés par du travail quotidien ennuyeux.',
  },

  histoire: {
    enfance: {
      titre: 'Le port et la forêt',
      contenu: 'Né à Thalassyr d\'une mère diplomate qui négociait des accords avec des marchands de la région sylvane. Il avait grandi dans les allers-retours entre les deux cultures — les repas de port et les repas de forêt, les règles de politesse des deux mondes. L\'élément Plante était venu d\'un grand-père Sylvan.',
    },
    arrivee: {
      titre: 'L\'accord de 47',
      contenu: 'Son premier grand accord — l\'accord commercial de 47 régulant l\'exportation de bois sylvan et l\'importation de sel de Thalassyr — avait pris 8 mois à négocier. Il avait compris pendant ce processus ce que le travail de diplomate impliquait : non pas trouver la bonne solution, mais trouver une solution que les deux parties pouvaient présenter à leurs constituants comme une victoire.',
    },
    premier_conflit: {
      titre: 'La tension de factions',
      contenu: 'Quand les tensions entre Conservateurs et Gardiens à Sylvera avaient affecté les exportations de bois, il avait dû naviguer un accord commercial sans pouvoir nommer la cause politique de la disruption. Les accords commerciaux ne parlent pas de qui a le droit de brûler quoi dans la forêt. Il avait maintenu les échanges en reformulant les clauses de force majeure.',
    },
    revelation: {
      titre: 'La limite de son rôle',
      contenu: 'Un négociateur Conservateur lui avait dit directement, après 3 ans de travail ensemble, que les accords commerciaux ne réglaient pas le problème de fond. Il le savait. Il lui avait répondu que sans les accords commerciaux, il n\'y aurait plus de canal pour parler du problème de fond non plus. Le négociateur avait accepté le point.',
    },
    etat_actuel: {
      titre: 'Les accords actuels',
      contenu: 'Il maintient 4 accords commerciaux actifs entre Thalassyr et Sylvera, dont deux sont actuellement sous pression à cause des tensions des factions. Il prépare des révisions qui pourraient absorber les tensions sans les nommer explicitement. C\'est son travail : rendre les tensions gérables en termes contractuels.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vornketh_accords_sous_pression',
      titre: 'Les deux accords fragiles',
      description: 'Deux des 4 accords actuels sont sous pression à cause des activités des Gardiens et des Conservateurs. Les disruptions commerciales sont réelles. Il prépare des révisions avec des clauses de flexibilité qui n\'existent pas encore dans les textes actuels. Si les tensions augmentent, ces clauses permettront de maintenir les échanges sans renégociation complète.',
      personnages_impliques: [178],
      declencheur: 'Tensions entre factions sylvanes affectant les échanges commerciaux',
      consequence: 'Révisions préventives pour absorber les tensions futures',
    },
    {
      id: 'vornketh_velok_coordination',
      titre: 'La chaîne des accords',
      description: 'Ses accords Thalassyr-Sylvera sont liés aux accords terrestres que Velok maintient dans l\'Isthme. Une rupture dans un des deux systèmes affecte l\'autre. Ils se coordonnent sur les signaux d\'alerte précoce — quand est-ce qu\'une tension dans une zone risque de se propager.',
      personnages_impliques: [178],
      declencheur: 'Interdépendance des accords commerciaux régionaux',
      consequence: 'Réseau de monitoring des tensions commerciales entre régions',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Infrastructure diplomatique des échanges Thalassyr-Sylvera. Il maintient ce qui permet aux deux régions de continuer à se parler.',

  relations: [
    { id: 178, nom: 'Velok', type: 'allié', note: 'Coordination sur les accords terrestres dans l\'Isthme. Réseau de monitoring des tensions.' },
    { id: 83, nom: 'Tyraneth', type: 'allié', note: 'Même réseau Confédération, angles différents. Surveillance des communications officielles.' },
  ],

  combat: {
    sorts: [
      'Flux de négociation (Eau) — redirection d\'une attaque ou d\'une impulsion — élément utilisé en défense et en désengagement',
      'Réseau racinaire (Plante) — activation d\'un réseau de végétaux comme barrière ou piège',
      'Lecture de courant (Eau) — perception des flux et tensions dans un environnement — information tactique',
    ],
  },

  image_prompts: [
    {
      id: 'vornketh_negociation',
      description: 'Vornketh assis à une table entre un représentant Sylvan et un représentant néréide, son stylet en os à la main, en train de noter quelque chose. Il n\'est pas le centre de la table — il est le lien entre les deux côtés.',
      style: 'réaliste diplomatique, lumière neutre de salle de négociation, présence équilibrée, professionnalisme calme',
    },
  ],

  lore_long: `Vornketh maintient 4 accords commerciaux entre Thalassyr et Sylvera. Deux d'entre eux sont sous pression.

Les tensions entre Conservateurs et Gardiens à Sylvera affectent les exportations de bois. Les disruptions commerciales sont réelles. Il prépare des révisions avec des clauses de flexibilité — des formulations qui permettront de maintenir les échanges sans renégociation complète si les tensions augmentent.

Un négociateur Conservateur lui a dit que les accords commerciaux ne règlent pas le problème de fond. Il sait. Il lui a répondu : sans les accords, il n'y a plus de canal pour parler du problème de fond non plus.

Il se coordonne avec Velok dans l'Isthme sur les signaux d'alerte précoce — quand une tension dans une zone risque de se propager à l'autre. C'est du monitoring préventif. C'est aussi la limite de ce qu'ils peuvent faire.

Son stylet en os vient ni de Thalassyr ni de Sylvera. Il ne sait plus exactement d'où il vient. Il l'a depuis 15 ans. C'est peut-être l'objet le plus neutre qu'il possède.`,
};

export default vornketh;
