import type { PersonnageLoreComplet } from '../../../lore-types';

const aelvethris: PersonnageLoreComplet = {
  id: 292,
  nom: 'Aelvethris',
  element: 'Eau',
  element2: 'Plante',
  espece: 'Néréides',
  region: 'Thalassyr',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Fine et rapide — physique de contrebandière qui charge et décharge rapidement. Musclée là où ça sert, économe partout ailleurs.',
    peau: 'Bleu-marine Néréide avec des stries brunes aux mains et aux avant-bras — l\'élément Plante qui monte au contact quotidien des semences.',
    yeux: 'Bleu foncé, avec un regard d\'évaluation rapide des risques — elle scanne les environnements avant d\'y entrer.',
    vetements: 'Vêtements imperméables et rapides à sécher. Elle a des compartiments cachés dans tous ses habits — pour les semences, les documents, les petits objets à transporter.',
    signes_particuliers: 'Elle parle vite et peu — économie de mots qui vient de métier où trop parler est un risque.',
  },

  psychologie: {
    dominante: 'Efficacité de transport au service de quelque chose qui en vaut la peine. Les semences qu\'elle déplace sont des espèces que l\'Empire cherche à effacer. Le risque est proportionné à l\'enjeu.',
    mecanisme_de_defense: 'La professionnalisation du risque. Elle a des procédures pour presque chaque situation. Ce qui n\'est pas dans les procédures est ce qu\'elle improvise vite.',
    contradiction_interne: 'Elle transporte des semences interdites parce qu\'elle croit que l\'Empire n\'a pas le droit d\'effacer des espèces. Elle ne sait pas ce que les Dissidentes font exactement de ces semences — elle transporte, elle ne gère pas l\'aval.',
    rapport_aux_autres: 'Thalvae (117) lui fournit les semences et les destinations — quelqu\'un qui vit dans la forêt de transition et sait quelles espèces sont en danger. Sorthel (82) est son contact maritime pour les routes longues distances — quelqu\'un qui connaît les routes illégales par mer.',
    vision_du_monde: 'Les plantes ne choisissent pas d\'être interdites. Les effacer, c\'est effacer quelque chose qui a mis des siècles à exister. Ça mérite de prendre des risques pour ça.',
  },

  histoire: {
    enfance: {
      titre: 'Thalassyr et les voyages',
      contenu: 'Née à Thalassyr d\'une famille de marins. Les routes maritimes étaient naturelles pour elle avant que les routes terrestres le soient. L\'élément Plante — rare chez les Néréides — venait d\'une grand-mère Sylvan de passage. Il lui avait donné une sensibilité aux espèces végétales que les marins autour d\'elle n\'avaient pas.',
    },
    arrivee: {
      titre: 'La première semence',
      contenu: 'À 27 ans, elle avait rencontré Thalvae qui cherchait quelqu\'un pour transporter des semences d\'espèces forestières sylvanes vers la côte — sans en expliquer pourquoi ces semences étaient dans un contenant camouflé. Elle avait compris sans qu\'on le lui dise. Elle avait accepté parce que la demande était claire et le risque calculable.',
    },
    premier_conflit: {
      titre: 'L\'inspection de port',
      contenu: 'Il y a 3 ans, une inspection de port avait fouillé son bateau. Les semences étaient dans des compartiments qu\'elle avait construits elle-même dans les cales — des espaces que les inspections standard ne trouvaient pas. Elle était repartie sans incident. Elle avait passé 2 semaines à améliorer ses compartiments.',
    },
    revelation: {
      titre: 'La liste des espèces interdites',
      contenu: 'Thalvae lui avait montré la liste officielle des espèces que l\'Empire cherchait à effacer — pas à protéger, à effacer, en les classifiant comme "nuisibles" ou "non-stratégiques". Cette liste correspondait exactement aux espèces qu\'elle avait transportées. La coïncidence n\'en était pas une.',
    },
    etat_actuel: {
      titre: 'Les routes et leurs destinations',
      contenu: 'Elle transporte maintenant des semences vers 7 destinations côtières régulières où des Dissidentes et des Indépendants les stockent et les cultivent loin des zones de surveillance impériale. Elle ne connaît pas les noms de la plupart des gens qui reçoivent ses livraisons — par conception.',
    },
  },

  evenements_narratifs: [
    {
      id: 'aelvethris_especes_effacees',
      titre: 'La liste et ses espèces',
      description: 'Elle a vu la liste officielle des espèces "à effacer" par l\'Empire. Ces espèces sont exactement celles qu\'elle transporte. Si cette liste est mise en oeuvre complètement, ses routes de transport deviennent la seule façon dont ces espèces survivent en dehors de Sylvera. La pression sur ses routes augmente avec chaque espèce ajoutée à la liste.',
      personnages_impliques: [117],
      declencheur: 'Connaissance de la liste officielle impériale des espèces interdites',
      consequence: 'Conscience de l\'importance croissante de son travail et du risque proportionnel',
    },
    {
      id: 'aelvethris_sorthel_routes',
      titre: 'Les routes de Sorthel',
      description: 'Sorthel connaît des routes maritimes pré-Silence des Vents que les navigateurs actuels ignorent — routes qui évitent les zones de patrouille impériale. Ils se partagent ces routes selon les besoins : elle lui passe des informations sur les patrouilles terrestres, il lui passe les alternatives maritimes. C\'est une collaboration d\'efficacité mutuelle.',
      personnages_impliques: [82],
      declencheur: 'Complémentarité des connaissances maritimes',
      consequence: 'Réseau de routes alternatives mutuellement amélioré',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Contrebandière de survie végétale. Ses routes sont peut-être la seule façon dont certaines espèces continuent d\'exister.',

  relations: [
    { id: 117, nom: 'Thalvae', type: 'allié', note: 'Source des semences et des destinations. La relation initiale — claire et professionnelle.' },
    { id: 82, nom: 'Sorthel', type: 'allié', note: 'Partage de routes maritimes alternatives. Collaboration de compétences complémentaires.' },
  ],

  combat: {
    sorts: [
      'Courant d\'échappée (Eau) — création d\'un fort courant directionnel pour se désengager rapidement',
      'Filet de semences (Plante) — projection de semences qui germent en contact — obstacle végétal rapide',
      'Navigation instinctive (Eau) — lecture des courants marins pour déplacement optimal — avantage de terrain en mer',
    ],
  },

  image_prompts: [
    {
      id: 'aelvethris_cale',
      description: 'Aelvethris dans la cale de son bateau, chargeant un compartiment caché avec des semences dans leurs contenants camouflés. Elle est rapide, précise, silencieuse. C\'est du travail professionnel.',
      style: 'réaliste maritime, lumière de cale, travail rapide et précis, discrétion professionnelle',
    },
  ],

  lore_long: `Aelvethris transporte des semences que l'Empire veut effacer.

Elle a vu la liste officielle — les espèces classées "nuisibles" ou "non-stratégiques" qui correspondent exactement à ce qu'elle transporte depuis 5 ans. Cette liste est mise en oeuvre progressivement. Chaque espèce ajoutée augmente la pression sur ses routes.

Elle travaille avec Thalvae pour les semences et les destinations, avec Sorthel pour les routes maritimes alternatives. Ils ne se connaissent pas — elle est l'interface.

Ses compartiments cachés dans la cale de son bateau ont passé 3 inspections de port. Elle les a améliorés après chaque inspection — même celles qu'elle réussit.

Elle ne sait pas exactement ce que les Dissidentes font de ses livraisons à l'aval. Elle transporte, elle ne gère pas l'aval. Si ses semences sont stockées, cultivées, redistribuées — tant que les espèces survivent, c'est suffisant.

Les plantes ne choisissent pas d'être interdites.`,
};

export default aelvethris;
