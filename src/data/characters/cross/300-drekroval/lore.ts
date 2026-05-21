import type { PersonnageLoreComplet } from '../../../lore-types';

const drekroval: PersonnageLoreComplet = {
  id: 300,
  nom: 'Drekroval',
  element: 'Sol',
  element2: 'Roche',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Solide, trapu, avec des mains disproportionnées pour la précision des instruments qu\'il manie. Les mains d\'un géologue qui a travaillé longtemps.',
    peau: 'Gris terreux Chthonien avec des veines de quartz visibles aux avant-bras — l\'élément Roche secondaire qui s\'est cristallisé sous la peau après des décennies de travail dans les piliers.',
    yeux: 'Brun sombre avec une habitude de scruter les murs plutôt que les gens. Il évalue les surfaces.',
    vetements: 'Tenue de terrain Technocratie avec des capteurs de vibration cousus dans les manches. Il porte toujours un carnet étanche — les données de tension structurelle ne se prennent pas de mémoire.',
    signes_particuliers: 'Il pose sa main sur les murs avant d\'entrer dans une salle. Pas par superstition — il sent si le mur est sous tension. Il l\'a toujours fait.',
  },

  psychologie: {
    dominante: 'Lecture préventive des contraintes. Les piliers d\'Ormn-Dur tiennent depuis des siècles parce que quelqu\'un surveille. Si la surveillance s\'arrête, les piliers tombent. Il est la surveillance.',
    mecanisme_de_defense: 'La mesure. Si ça ne peut pas être mesuré, ça ne peut pas être géré. Il ramène tout à des données.',
    contradiction_interne: 'Ses données montrent des tensions autour de la Fosse Interdite qui devraient préoccuper la Technocratie. Il a remonté ces données. Elles ont été classifiées. Il continue de collecter des données sur quelque chose que personne n\'est autorisé à voir.',
    rapport_aux_autres: 'Drekvar (131) utilise son réseau de surveillance pour des routes que la Technocratie ne connaît pas. Drekroval sait que certaines anomalies dans ses données correspondent à ces passages. Il n\'a pas fait le lien officiellement.',
    vision_du_monde: 'Ormn-Dur est une ville construite dans de la roche. La roche peut tenir des millénaires si on l\'entretient. Elle peut s\'effondrer en heures si on l\'ignore. Il entretient.',
  },

  histoire: {
    enfance: {
      titre: 'Les piliers comme famille',
      contenu: 'Né dans un quartier de techniciens de maintenance d\'Ormn-Dur. À 12 ans, il avait appris les noms des piliers principaux avant les noms de ses cousins. Son père l\'avait emmené en tournée de surveillance pendant 3 ans. C\'était l\'apprentissage.',
    },
    arrivee: {
      titre: 'L\'intégration à la Technocratie',
      contenu: 'À 28 ans, intégré comme géologue junior avec une spécialisation en tensions structurelles dynamiques. Son premier rapport indépendant avait détecté une micro-fissure dans le Pilier 7 avant qu\'elle devienne visible. On l\'avait promu. Il avait compris ce que la Technocratie valorisait.',
    },
    premier_conflit: {
      titre: 'Le rapport classifié',
      contenu: 'À 41 ans, il avait produit un rapport sur les tensions anomales autour de la Fosse Interdite — un gradient de stress géologique qui ne correspondait pas aux modèles standards. Le rapport avait été classifié le lendemain de sa remise. Il n\'avait reçu ni explication ni retour. Il avait continué à collecter les mêmes données.',
    },
    revelation: {
      titre: 'Les anomalies récurrentes',
      contenu: 'Sur 4 ans de collecte supplémentaire, les anomalies autour de la Fosse avaient suivi un pattern — elles augmentaient par cycles. Pas de façon catastrophique, mais régulièrement. Il avait comparé avec les archives de 60 ans. Le pattern n\'existait pas avant l\'ouverture de la Fosse. Il avait écrit un second rapport. Il était encore en attente de classification.',
    },
    etat_actuel: {
      titre: 'La surveillance continue',
      contenu: 'Il surveille 47 piliers principaux et 200 piliers secondaires. Il remet des rapports hebdomadaires. Les données sur la Fosse sont dans ses archives personnelles — pas illégalement, mais pas dans les remontées officielles non plus. Drekvar (131) lui a posé des questions sur les passages sous le Pilier 12. Il n\'a pas répondu directement.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekroval_fosse_pattern',
      titre: 'Le cycle des tensions',
      description: 'Les anomalies géologiques autour de la Fosse Interdite suivent un cycle de 8 à 12 ans dans ses données. Le dernier pic était il y a 9 ans. Le prochain approche selon ses projections. Un second rapport attend classification depuis 2 ans. Si le cycle est réel, quelqu\'un devrait préparer des renforts structurels.',
      personnages_impliques: [131],
      declencheur: 'Analyse comparative des données sur 60 ans d\'archives',
      consequence: 'Prochain pic de tension prévisible — préparation structurelle non encore autorisée',
    },
    {
      id: 'drekroval_pilier12',
      titre: 'Les questions de Drekvar',
      description: 'Drekvar (131) lui a demandé l\'état structural du Pilier 12 et des galeries adjacentes. La question était trop précise pour être aléatoire. Le Pilier 12 est dans une zone où ses capteurs détectent des passages non cartographiés. Il a répondu sur l\'état structural. Il n\'a pas mentionné les passages.',
      personnages_impliques: [131],
      declencheur: 'Question de Drekvar sur le Pilier 12',
      consequence: 'Information structurelle donnée ; information sur les passages retenue',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Capteur passif des anomalies structurelles. Il accumule des données que la Technocratie refuse de lire. Si les piliers cèdent, ses archives seront la seule trace préventive.',

  relations: [
    { id: 131, nom: 'Drekvar', type: 'allié', note: 'Pose des questions précises sur des zones sensibles. Drekroval répond partiellement. Arrangement implicite non formalisé.' },
  ],

  combat: {
    sorts: [
      'Lecture sismique (Sol) — perception des tensions géologiques dans une zone — diagnostic de terrain',
      'Ancrage de roche (Roche) — stabilisation d\'une structure sous contrainte — maintien d\'urgence',
      'Onde de fond (Sol) — propagation de vibration contrôlée dans la roche — désorientation sans destruction',
    ],
  },

  image_prompts: [
    {
      id: 'drekroval_surveillance',
      description: 'Drekroval avec la main posée sur un grand pilier de pierre, les yeux fermés, écoutant les tensions internes. Dans l\'autre main, un carnet de données. La lumière est souterraine, légèrement ambrée. Il a l\'air de quelqu\'un qui écoute quelque chose que les autres ne peuvent pas entendre.',
      style: 'réaliste chthonien technique, éclairage souterrain, contact direct avec la roche, précision géologique',
    },
  ],

  lore_long: `Drekroval surveille 47 piliers principaux d'Ormn-Dur. Il a posé la main sur chacun d'entre eux des milliers de fois.

Ses données sur la Fosse Interdite ont été classifiées la première fois qu'il les a remontées. Il n'a pas arrêté de les collecter.

Les anomalies géologiques autour de la Fosse suivent un cycle de 8 à 12 ans. Le dernier pic était il y a 9 ans. Ses projections indiquent que le prochain est imminent. Un second rapport attend classification depuis 2 ans.

Drekvar (131) lui a posé des questions précises sur le Pilier 12. Trop précises pour être aléatoires. Drekroval a répondu sur la structure. Il n'a pas mentionné ce que ses capteurs detectent dans les galeries adjacentes.

Il continue de surveiller. Les données existent. Si les piliers cèdent, ses archives seront la seule trace de ce qui était prévisible.`,
};

export default drekroval;
