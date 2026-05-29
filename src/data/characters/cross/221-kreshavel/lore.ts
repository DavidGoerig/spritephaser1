import type { PersonnageLoreComplet } from '../../../lore-types';

const kreshavel: PersonnageLoreComplet = {
  id: 221,
  nom: 'Kreshavel',
  element: 'Combat',
  element2: 'Feu',
  espece: 'Homme-Lien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 37 ans, protectrice — corpulence de quelqu\'un dont le corps a été mis au service de la protection d\'autres depuis longtemps.',
    peau: 'Ton chaud avec des marques de combat civil — des protections qui ont absoré des coups à la place d\'enfants.',
    yeux: 'Bruns avec une qualité de vigilance maternelle — elle surveille constamment les enfants proches d\'elle.',
    vetements: 'Tenue de protection pratique — adaptée au mouvement rapide et à la protection physique.',
    signes_particuliers: 'Elle protège des enfants Pyriens non-enregistrés dans les quartiers détruits par la Rupture Thermique. Elle les cache, les nourrit et les guide vers des réseaux Dissidents quand une extraction est possible.',
  },

  psychologie: {
    dominante: 'Protectrice Dissident des enfants Pyriens non-enregistrés dans les quartiers détruits de Varkhôl. Son double élément Combat/Feu lui donne les compétences physiques pour protéger et la capacité d\'opérer dans des environnements thermiques endommagés. Elle fonctionne dans les ruines de la Rupture Thermique.',
    mecanisme_de_defense: 'La discrétion dans les ruines. Les quartiers détruits ne sont pas sous surveillance régulière — l\'Empire ne surveille pas ce qu\'il considère comme des zones perdues. C\'est précisément là qu\'elle opère.',
    contradiction_interne: 'Elle protège des enfants dans des conditions difficiles — mais les quartiers détruits ne sont pas une solution durable. Sa protection est temporaire. Les enfants ont besoin d\'une extraction vers quelque chose de plus stable. Cette extraction dépend de réseaux qu\'elle ne contrôle pas.',
    rapport_aux_autres: 'Brasia (1) est dans son réseau — la cheffe Dissidente qui l\'a mise en contact avec les réseaux d\'extraction. Bressyn (76) est dans son réseau — une praticienne médicale qui opère dans les mêmes quartiers détruits.',
    vision_du_monde: 'Les enfants ne choisissent pas leur élément et ne choisissent pas les situations dans lesquelles ils naissent. Ils méritent une protection indépendante de leur enregistrement ou non-enregistrement.',
  },

  histoire: {
    enfance: {
      titre: 'Les quartiers de la Rupture',
      contenu: 'Elle avait vécu dans un quartier de Varkhôl affecté par la Rupture Thermique. Elle avait vu des familles Pyrien perdre leur domicile et chercher à se reconstruire dans des zones non-surveillées. Elle avait commencé à aider naturellement.',
    },
    arrivee: {
      titre: 'Les enfants non-enregistrés',
      contenu: 'Les Dissidentes l\'avaient trouvée alors qu\'elle s\'occupait déjà de plusieurs enfants Pyriens non-enregistrés. Ils avaient formalisé son rôle et lui avaient fourni des ressources. Elle avait continué ce qu\'elle faisait déjà.',
    },
    premier_conflit: {
      titre: 'Le Régulateur dans les ruines',
      contenu: 'Un Régulateur avait pénétré dans les quartiers détruits pour une inspection — inhabituel. Elle avait déplacé les enfants dans des zones plus profondément dans les ruines. Le Régulateur n\'avait pas cherché plus loin.',
    },
    revelation: {
      titre: 'La limite de la protection',
      contenu: 'Elle avait compris que sa protection était temporaire — les quartiers détruits n\'étaient pas un endroit où des enfants pouvaient grandir sainement. Les extractions vers quelque chose de mieux dépendaient de réseaux dont elle n\'était qu\'une partie.',
    },
    etat_actuel: {
      titre: 'La protectrice',
      contenu: 'Elle protège. Les enfants sont en sécurité provisoire. Les extractions suivent quand les réseaux permettent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kreshavel_enfants',
      titre: 'La surveillance des ruines',
      description: 'Kreshavel protège des enfants non-enregistrés dans les quartiers détruits de Varkhôl. Si l\'Empire décide d\'inspecter systématiquement ces zones — peut-être en réponse à une information sur des activités Dissidentes dans les ruines — elle aura besoin d\'extraire plusieurs enfants simultanément, sollicitant les réseaux Dissidents au-delà de leur capacité actuelle.',
      personnages_impliques: [1, 76],
      declencheur: 'L\'Empire annonçant une inspection systématique des quartiers détruits',
      consequence: 'Kreshavel organisant une extraction multiple urgente — et sollicitant les réseaux Dissidents au-delà de leur capacité habituelle',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Protectrice Dissident des enfants Pyriens non-enregistrés dans les quartiers détruits de Varkhôl. Opère dans les zones non-surveillées de la Rupture. Protection temporaire en attente d\'extractions.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'contact', note: 'Cheffe Dissidente fournissant des ressources et des connexions aux réseaux d\'extraction.' },
    { id: 76, nom: 'Bressyn', type: 'contact', note: 'Praticienne médicale opérant dans les mêmes quartiers détruits.' },
  ],

  combat: {
    sorts: [
      'Bouclier de protection (Combat) — interposition physique entre menace et enfants — protection de groupe',
      'Frappe de repoussement (Feu/Combat) — attaque pour créer un espace de fuite — ouverture de route d\'extraction',
    ],
  },

  image_prompts: [
    {
      id: 'kreshavel_ruines',
      description: 'Kreshavel dans les ruines d\'un quartier détruit de Varkhôl — une Homme-Lien de 37 ans avec plusieurs enfants Pyriens regroupés autour d\'elle. Ils sont dans un espace structurellement stable au milieu de décombres thermiques. Elle regarde vers une sortie possible. Son expression est de quelqu\'un qui calcule des options de fuite en permanence.',
      style: 'réaliste Homme-Lien protectrice Dissidente, Varkhôl quartiers détruits, enfants non-enregistrés, Rupture Thermique, protection maternelle combattante',
    },
  ],

  lore_long: `Kreshavel protège des enfants Pyriens non-enregistrés dans les quartiers détruits de Varkhôl. Les zones de la Rupture Thermique non-surveillées par l'Empire sont son terrain d'opération.

Elle faisait ça avant que les Dissidentes la trouvent. Ils ont formalisé et équipé quelque chose qui existait déjà.

Sa protection est temporaire. Les extractions dépendent de réseaux qu'elle ne contrôle pas.`,
};

export default kreshavel;
