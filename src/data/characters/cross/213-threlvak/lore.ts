import type { PersonnageLoreComplet } from '../../../lore-types';

const threlvak: PersonnageLoreComplet = {
  id: 213,
  nom: 'Threlvak',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti de l\'Acier',

  apparence: {
    taille_corpulence: 'Pyrien de 55 ans, stratège — corpulence d\'un combattant devenu penseur. Il évalue avant d\'agir.',
    peau: 'Rouge-ardente avec des intégrations acier stratégiquement réparties — ils font partie de ses défenses naturelles.',
    yeux: 'Orangés avec des éclats argentés qui s\'intensifient quand il planifie.',
    vetements: 'Tenue stratégique sobre — il n\'affiche pas son rang, il le démontre par ses décisions.',
    signes_particuliers: 'Il prépare Varkhôl à une éventuelle rupture avec l\'Empire — une rupture totale, pas une résistance incrémentale. Ses plans incluent des scénarios de survie économique, militaire et élémentaire pour Varkhôl en autonomie complète.',
  },

  psychologie: {
    dominante: 'Stratège du Parti de l\'Acier à Varkhôl. Son double élément Feu/Acier lui permet de penser en termes de ressources thermiques et métalliques simultanément. Il planifie une rupture possible avec l\'Empire — une sortie complète qui nécessite une autonomie que Varkhôl n\'a pas encore. Il travaille à créer cette autonomie.',
    mecanisme_de_defense: 'La planification à long terme comme protection. Il ne prépare pas une rupture imminente — il prépare une rupture quand les conditions seront optimales. Cette temporalité lui donne de la marge.',
    contradiction_interne: 'Sa planification d\'une rupture avec l\'Empire suppose que Varkhôl peut exister sans les ressources impériales. Cette supposition est optimiste sur certains points. Il le sait. Il continue à planifier parce qu\'il croit que la planification peut corriger les lacunes.',
    rapport_aux_autres: 'Thryss (4) est dans son réseau — le leader Pyrien dont le soutien est nécessaire pour que ses plans aient une base politique. Skarith (9) est dans son réseau — le chef militaire dont la coopération est nécessaire pour la composante sécurité de ses plans.',
    vision_du_monde: 'La dépendance à l\'Empire est une vulnérabilité. La rupture est risquée mais la dépendance est plus risquée à long terme. Son travail est de rendre la rupture moins risquée que la dépendance.',
  },

  histoire: {
    enfance: {
      titre: 'La stratégie',
      contenu: 'Formation militaire à Varkhôl dès 20 ans. Il avait développé une expertise en planification stratégique que son double élément alimentait — penser en ressources thermiques et métalliques simultanément lui donnait des angles que ses collègues mono-élémentaires ne voyaient pas.',
    },
    arrivee: {
      titre: 'Le plan de rupture',
      contenu: 'À 40 ans, il avait commencé à développer des scénarios de rupture avec l\'Empire — non pas parce qu\'une rupture était imminente, mais parce qu\'il estimait qu\'elle devenait probable. Avoir un plan était meilleur que ne pas en avoir.',
    },
    premier_conflit: {
      titre: 'L\'optimisme requis',
      contenu: 'Ses premiers scénarios montraient que Varkhôl ne pouvait pas survivre à une rupture complète sans des ressources qu\'il n\'avait pas. Il avait révisé les scénarios pour identifier ce qui manquait. La révision était aussi un plan pour acquérir ces ressources.',
    },
    revelation: {
      titre: 'La planification comme politique',
      contenu: 'Il avait compris que ses plans de rupture étaient aussi une politique — en planifiant pour la rupture, il préparait mentalement et matériellement Varkhôl à une indépendance qu\'il n\'avait pas encore. La planification était déjà un début de rupture.',
    },
    etat_actuel: {
      titre: 'Le stratège',
      contenu: 'Il planifie. Varkhôl accumule des autonomies. La rupture n\'est pas encore.',
    },
  },

  evenements_narratifs: [
    {
      id: 'threlvak_plan',
      titre: 'Le plan révélé',
      description: 'Threlvak prépare une rupture de Varkhôl avec l\'Empire. Si l\'Empire découvre l\'existence de ses plans — via un informateur, via une interception — il sera confronté à un choix entre accélérer la rupture avant d\'être prêt ou nier les plans et perdre des années de préparation.',
      personnages_impliques: [4, 9],
      declencheur: 'L\'Empire découvrant l\'existence des plans de rupture de Threlvak',
      consequence: 'Threlvak contraint d\'accélérer ou de nier — aucune option n\'est celle pour laquelle il avait planifié',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Stratège du Parti de l\'Acier préparant Varkhôl à une rupture avec l\'Empire. Plans incluant l\'autonomie économique, militaire et élémentaire. Travail à long terme.',

  relations: [
    { id: 4, nom: 'Thryss', type: 'contact', note: 'Leader Pyrien dont le soutien est nécessaire pour la base politique des plans.' },
    { id: 9, nom: 'Skarith', type: 'contact', note: 'Chef militaire nécessaire pour la composante sécurité des plans.' },
  ],

  combat: {
    sorts: [
      'Tactique de feu et d\'acier (Feu/Acier) — attaque coordinée combinant les deux éléments — complexité maximale',
      'Barrière stratégique (Acier) — formation défensive planifiée — protection optimisée',
    ],
  },

  image_prompts: [
    {
      id: 'threlvak_plan',
      description: 'Threlvak dans une salle de stratégie à Varkhôl — un Pyrien de 55 ans devant une carte de Varkhôl et de ses ressources. Des plans de rupture avec l\'Empire sont annotés dessus — des points de vulnérabilité, des ressources à acquérir, des délais. Il n\'a pas encore l\'air satisfait. Il manque quelque chose sur la carte.',
      style: 'réaliste Pyrien stratège double élément, Varkhôl, plans de rupture avec l\'Empire, Parti de l\'Acier, préparation à long terme',
    },
  ],

  lore_long: `Threlvak prépare Varkhôl à une rupture avec l'Empire. Ses plans incluent des scénarios d'autonomie économique, militaire et élémentaire.

Il ne prépare pas une rupture imminente — il prépare une rupture quand les conditions seront optimales. La préparation est déjà un début d'indépendance.

Ses plans ont des lacunes qu'il connaît. Il planifie pour les corriger avant que la rupture soit nécessaire.`,
};

export default threlvak;
