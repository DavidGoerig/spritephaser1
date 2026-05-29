import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrash: PersonnageLoreComplet = {
  id: 143,
  nom: 'Thyrash',
  element: 'Sol',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Chthonien de 84 ans, vieux mineur — corps compact et solide comme une roche ancienne. L\'âge chez les Chthoniens alourdit et densifie.',
    peau: 'Pierre gris foncé avec des veines de minéral sombre — les marques d\'un Chthonien qui a travaillé profondément toute sa vie.',
    yeux: 'Gris-noir avec une qualité de mémoire directe. Il se souvient de Valyx. Pas comme d\'une histoire — comme d\'une personne.',
    vetements: 'Tenue de mineur usée, portée parce qu\'il n\'en a plus besoin d\'autre. Il ne travaille plus depuis des années.',
    signes_particuliers: 'Il connaît l\'histoire de la zone fongique depuis Valyx (38). Il était là quand l\'accord a été signé. Personne ne lui demande.',
  },

  psychologie: {
    dominante: 'Vieux mineur de 84 ans qui a travaillé dans la zone fongique depuis l\'époque de Valyx (38). Il a vu l\'accord de Valyx être signé. Il sait ce que la zone était avant, pendant et après l\'accord. Personne ne lui demande — il est vieux et n\'est plus dans aucun réseau institutionnel.',
    mecanisme_de_defense: 'L\'âge comme protection involontaire. Les vieux mineurs ne sont pas des menaces — ils sont de la décoration. Cette invisibilité lui convient.',
    contradiction_interne: 'Il sait des choses sur l\'accord de Valyx que Dravek (135) cherche à comprendre — que Karm (41) voudrait peut-être savoir. Il attend qu\'on lui demande. Personne ne lui demande parce que personne ne sait qu\'il était là.',
    rapport_aux_autres: 'Karm (41) est dans son réseau — quelqu\'un qui travaille encore dans les zones où il a travaillé. Valyx (38) est le personnage central de sa mémoire directe.',
    vision_du_monde: 'L\'accord de Valyx a été présenté d\'une façon dans les documents officiels. Il était là. Ce qu\'il a vu pendant la signature n\'était pas exactement ça. Cette divergence ne dérange personne parce que personne ne lui a demandé.',
  },

  histoire: {
    enfance: {
      titre: 'La zone fongique',
      contenu: 'Commencé à travailler dans la zone fongique à 18 ans — quand la Fosse Interdite s\'appelait encore autrement. Il avait vu la zone évoluer au fil des décennies.',
    },
    arrivee: {
      titre: 'L\'accord de Valyx',
      contenu: 'Il avait 42 ans quand l\'accord de Valyx avait été signé. Il était présent dans la zone — pas comme signataire, mais comme travailleur. Il avait entendu des conversations qui n\'étaient pas destinées aux mineurs.',
    },
    premier_conflit: {
      titre: 'L\'histoire officielle',
      contenu: 'Quand les documents officiels sur l\'accord de Valyx avaient commencé à circuler, il avait remarqué des divergences avec ce qu\'il avait vu et entendu. Il n\'avait rien dit — qui écoutait un vieux mineur sur des accords institutionnels ?',
    },
    revelation: {
      titre: 'Personne ne demande',
      contenu: 'Il avait attendu que quelqu\'un vienne lui demander son témoignage. En 42 ans, personne n\'était venu. Il avait arrêté d\'attendre — mais il se souvient encore.',
    },
    etat_actuel: {
      titre: 'La retraite',
      contenu: 'Il vit dans sa retraite à Ormn-Dur. Il se souvient. Personne ne lui demande.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrash_accord',
      titre: 'Le témoin de l\'accord',
      description: 'Thyrash était présent lors de la signature de l\'accord de Valyx. Il a vu et entendu des choses qui ne correspondent pas aux documents officiels. Dravek (135) cherche à comprendre l\'accord. Si quelqu\'un — Karm (41), Dravek — apprend que Thyrash était là, son témoignage direct deviendra une ressource critique.',
      personnages_impliques: [38, 41],
      declencheur: 'Quelqu\'un apprenant que Thyrash était présent lors de la signature de l\'accord de Valyx',
      consequence: 'Thyrash interrogé — et son témoignage révélant des divergences avec les documents officiels',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Vieux mineur de 84 ans. Témoin direct de la signature de l\'accord de Valyx. Mémoire non-sollicitée depuis 42 ans.',

  relations: [
    { id: 38, nom: 'Valyx', type: 'contact', note: 'Témoin direct de son accord. Se souvient de lui comme personne.' },
    { id: 41, nom: 'Karm', type: 'contact', note: 'Travaille encore dans les zones où il a travaillé.' },
  ],

  combat: {
    sorts: [
      'Frappe de sol (Sol) — impact tellurique — attaque directe',
      'Stabilisation (Sol) — ancrage au sol — défense inamovible',
    ],
  },

  image_prompts: [
    {
      id: 'thyrash_retraite',
      description: 'Thyrash dans sa retraite à Ormn-Dur — un Chthonien de 84 ans assis, regardant dans le vide. Il se souvient de l\'accord de Valyx. Dans ses yeux, une mémoire directe de quelque chose que personne ne lui a demandé depuis 42 ans.',
      style: 'réaliste Chthonien très vieux mineur, Ormn-Dur, témoin silencieux de l\'accord de Valyx, mémoire non-sollicitée',
    },
  ],

  lore_long: `Thyrash a 84 ans. Il était présent lors de la signature de l'accord de Valyx (38). Il a entendu des conversations qui ne correspondaient pas aux documents officiels.

Personne ne lui a demandé son témoignage depuis 42 ans. Il attend.

Dravek (135) cherche à comprendre l'accord. Il ne sait pas que Thyrash était là.`,
};

export default thyrash;
