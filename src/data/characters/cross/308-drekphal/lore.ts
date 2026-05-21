import type { PersonnageLoreComplet } from '../../../lore-types';

const drekphal: PersonnageLoreComplet = {
  id: 308,
  nom: 'Drekphal',
  element: 'Poison',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Moyen, avec une légèreté dans les mouvements qu\'on n\'attend pas d\'un Chthonien. Moins massif que la moyenne, plus mobile. L\'adaptation au travail de terrain.',
    peau: 'Gris Chthonien standard avec des taches verdâtres aux mains et aux avant-bras — exposition répétée aux spores lors des prélèvements. Les taches ne disparaissent pas entre les missions.',
    yeux: 'Vert-gris, habituellement protégés par des lunettes de terrain. Sans les lunettes, une légère irritation permanente de la conjonctive.',
    vetements: 'Tenue de terrain Convergence avec des compartiments de stockage d\'échantillons intégrés. Tout est étiqueté et scellé. Il ne mélange jamais.',
    signes_particuliers: 'Il étiquette tout — ses affaires personnelles, ses outils, les compartiments de ses poches. Une habitude de terrain qui s\'est infiltrée dans sa vie quotidienne.',
  },

  psychologie: {
    dominante: 'Collecte fiable de données primaires. Graveth (43) a besoin d\'échantillons que les instruments à distance ne peuvent pas capturer. Il est l\'instrument humain de cette collecte.',
    mecanisme_de_defense: 'La procédure. Chaque prélèvement a un protocole. Le protocole existe parce que des erreurs ont eu des conséquences. Il suit le protocole.',
    contradiction_interne: 'Il prélève des échantillons pour une organisation dont il ne connaît pas tous les usages. Graveth (43) ne lui dit pas ce qu\'il fait des résultats. Il a demandé une fois. La réponse était suffisamment vague pour qu\'il n\'insiste pas. Il continue de prélever.',
    rapport_aux_autres: 'Graveth (43) est son contact de direction — il reçoit les zones de prélèvement, fournit les échantillons, reçoit des compensations. Kharven (140) travaille dans des zones adjacentes. Ils se partagent parfois des informations de terrain — zones d\'accès, compositions détectées. Pas de coordination formelle.',
    vision_du_monde: 'La Fosse Interdite est une ressource que personne n\'a encore entièrement cartographiée. Chaque prélèvement contribue à cette cartographie. Qu\'est-ce qu\'on fait de la cartographie ensuite n\'est pas sa responsabilité.',
  },

  histoire: {
    enfance: {
      titre: 'L\'apprentissage de la méthode',
      contenu: 'Fils d\'un géologue de terrain à Ormn-Dur. Formé à la méthode de collecte rigoureuse depuis l\'adolescence — étiquetage, conditionnement, chaîne de conservation. À 18 ans, il travaillait en autonomie dans des zones de collecte minières standards.',
    },
    arrivee: {
      titre: 'Le recrutement de la Convergence',
      contenu: 'À 26 ans, la Convergence l\'avait contacté via un intermédiaire — pas Graveth directement, un recruteur qui lui avait présenté la mission comme de la recherche en environnement spécialisé. La zone fongique était plus complexe que ce que les capteurs à distance donnaient. Il avait accepté. La première mission avait confirmé que c\'était vrai.',
    },
    premier_conflit: {
      titre: 'La question de l\'usage',
      contenu: 'Après sa dixième mission, il avait demandé à Graveth (43) ce que ses échantillons servaient à faire. La réponse avait mentionné de la recherche en toxicologie comparative, des études de compositions inédites, des publications académiques potentielles. Tout vrai, probablement — mais pas complet. Il n\'avait pas posé de seconde question.',
    },
    revelation: {
      titre: 'L\'échantillon avec provenance particulière',
      contenu: 'Une de ses missions avait impliqué un prélèvement dans une zone habituellement interdite même pour les techniciens certifiés — une zone de frontière Fosse que Dravkhor (304) maintenait. Il avait prélevé et transmis. En relisant ses notes, il avait réalisé que la composition de l\'échantillon correspondait à une évolution de la zone fongique que les rapports officiels de la Technocratie ne mentionnaient pas. Il n\'avait rien dit à Graveth sur cette conclusion.',
    },
    etat_actuel: {
      titre: 'Les missions en cours',
      contenu: 'Il effectue 3 à 4 missions de prélèvement par mois. Ses données sont cohérentes sur 5 ans de collecte. Kharven (140) lui a posé des questions sur une zone spécifique qu\'il avait couverte. Il lui avait partagé les données de terrain — pas les données complètes envoyées à Graveth, mais suffisamment pour répondre à sa question.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drekphal_evolution_fosse',
      titre: 'La composition que les rapports ne mentionnent pas',
      description: 'Un de ses prélèvements correspondait à une composition fongique que les rapports officiels de la Technocratie ne documentaient pas. Cette composition suggère une évolution de la zone. Il n\'a pas transmis cette conclusion à Graveth — seulement l\'échantillon. La conclusion est dans ses notes personnelles.',
      personnages_impliques: [43, 304],
      declencheur: 'Prélèvement dans une zone de frontière Fosse normalement interdite',
      consequence: 'Information sur évolution non documentée de la Fosse — retenue, dans les notes personnelles',
    },
    {
      id: 'drekphal_kharven_partage',
      titre: 'Les données partagées avec Kharven',
      description: 'Kharven (140) lui a posé des questions précises sur une zone qu\'il a couverte. Il a partagé des données de terrain — pas l\'intégralité de ce qu\'il envoie à Graveth. Ce partage partiel crée une asymétrie : Kharven a des données de terrain mais pas les données complètes de la Convergence. Elle le sait-elle ?',
      personnages_impliques: [140],
      declencheur: 'Question de terrain de Kharven sur une zone spécifique',
      consequence: 'Partage partiel de données avec une chercheure dont les objectifs peuvent différer de la Convergence',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Instrument de collecte de la Convergence dans la Fosse. Ses données alimentent des recherches dont il ne connaît pas la finalité. Sa note sur l\'évolution non documentée est un point de bifurcation potentiel.',

  relations: [
    { id: 43, nom: 'Graveth', type: 'allié', note: 'Contact de direction. Reçoit les zones, fournit les échantillons, ne questionne pas les usages officiellement.' },
    { id: 140, nom: 'Kharven', type: 'allié', note: 'Chercheure de terrain adjacente. Partage partiel de données — fonctionnel mais asymétrique.' },
  ],

  combat: {
    sorts: [
      'Prélèvement offensif (Poison) — extraction forcée de spores concentrées et projection — toxicité directe',
      'Compaction de terrain (Sol) — densification d\'une zone de sol pour immobiliser une cible — contrôle de terrain',
      'Nuage de spores (Poison) — dispersion d\'une concentration de spores fongiques — zone de désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'drekphal_prelevement',
      description: 'Drekphal dans une zone fongique dorée-verdâtre, en train d\'effectuer un prélèvement avec un instrument de précision dans un contenant étiqueté. Il porte des lunettes de protection. Sa tenue a des marques de taches anciennes. Il travaille avec une méthode visible dans chaque geste.',
      style: 'réaliste chercheur de terrain, environnement fongique, méthode visible, équipement de collecte',
    },
  ],

  lore_long: `Drekphal prélève des échantillons fongiques pour la Convergence. Ses données sont cohérentes sur 5 ans.

Il a demandé une fois à Graveth (43) à quoi servaient ses échantillons. La réponse était incomplète. Il n'a pas posé de seconde question.

Un de ses prélèvements a révélé une composition que les rapports officiels de la Technocratie ne mentionnent pas — une évolution de la zone fongique. Il a envoyé l'échantillon. Il n'a pas envoyé la conclusion. Elle est dans ses notes personnelles.

Kharven (140) lui a posé des questions sur une zone spécifique. Il a partagé des données de terrain — pas les données complètes. Elle ne sait peut-être pas qu'elles sont incomplètes.

Il étiquette tout. Ses affaires personnelles, ses outils, ses poches. La méthode de terrain a infiltré le reste.`,
};

export default drekphal;
