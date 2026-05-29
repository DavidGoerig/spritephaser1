import type { PersonnageLoreComplet } from '../../../lore-types';

const velrask: PersonnageLoreComplet = {
  id: 204,
  nom: 'Velrask',
  element: 'Feu',
  element2: 'Ténèbres',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Pyrien de 36 ans, saboteur — corpulence de quelqu\'un qui frappe vite et disparaît.',
    peau: 'Rouge-ardente avec des zones d\'obscurité qui lui permettent de se fondre dans les ombres malgré sa chaleur naturelle.',
    yeux: 'Orangés avec des pupilles sombres qui s\'élargissent quand il utilise l\'obscurité.',
    vetements: 'Tenue de sabotage pratique — ignifugée pour son propre élément, sombre pour la discrétion.',
    signes_particuliers: 'Il combine chaleur et ombre pour saboteur des infrastructures impériales. Sa méthode : créer l\'obscurité pour s\'approcher, utiliser la chaleur pour les dommages. Les deux éléments rendent son sabotage difficile à attribuer clairement à un Pyrien standard.',
  },

  psychologie: {
    dominante: 'Saboteur Dissident avec un double élément Feu/Ténèbres. Il cible les infrastructures impériales dans Varkhôl. Son double élément lui permet un type de sabotage que les Pyriens standard ne peuvent pas accomplir — l\'approche invisible suivie de la frappe thermique.',
    mecanisme_de_defense: 'L\'ambiguïté élémentaire. Ses sabotages laissent des signatures mixtes qui ne correspondent pas clairement à un Pyrien ou un Umbrien. L\'Empire doit considérer les deux populations dans ses enquêtes — ce qui dilue les ressources de recherche.',
    contradiction_interne: 'Ses sabotages sont efficaces — mais la chaleur est toujours une signature thermique, même dissimulée dans l\'obscurité. Un analyste expérimenté comme Nyrevax (203) pourrait identifier sa signature combinée.',
    rapport_aux_autres: 'Brasia (1) est dans son réseau — la cheffe Dissidente qui lui assigne des cibles. Syrvel (149) est dans son réseau — une passeur Dissidente de Vel\'Nox qui l\'aide à se déplacer entre les deux régions pour des missions.',
    vision_du_monde: 'L\'infrastructure impériale est ce qui maintient le contrôle de l\'Empire. Fragiliser cette infrastructure, c\'est fragiliser le contrôle. Son double élément lui donne des outils que les Pyriens purs n\'ont pas.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Né à Varkhôl avec un double élément Feu/Ténèbres — inhabituel pour un Pyrien. Il avait été repéré par les Dissidentes à 22 ans pour sa capacité unique.',
    },
    arrivee: {
      titre: 'Le sabotage',
      contenu: 'Il avait commencé par des sabotages mineurs — des équipements endommagés, des systèmes de communication interrompus. Sa technique avait évolué avec l\'expérience et la connaissance plus précise de ses limites.',
    },
    premier_conflit: {
      titre: 'La signature thermique',
      contenu: 'Une enquête impériale avait révélé une signature thermique résiduelle sur un de ses sabotages — trop intense pour être accidentelle. Il avait compris qu\'il laissait une trace. Il avait développé des techniques pour réduire la signature thermique résiduelle.',
    },
    revelation: {
      titre: 'L\'ambiguïté comme outil',
      contenu: 'Il avait compris que ses sabotages laissant une signature mixte Feu/Ténèbres étaient plus difficiles à attribuer qu\'une signature purement thermique. Cette ambiguïté n\'était pas un défaut de sa technique — c\'était une fonctionnalité.',
    },
    etat_actuel: {
      titre: 'Le saboteur mixte',
      contenu: 'Il sabote. L\'Empire cherche un Pyrien ou un Umbrien. Il est les deux.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velrask_sabotage',
      titre: 'La signature identifiée',
      description: 'Velrask laisse une signature mixte Feu/Ténèbres sur ses sabotages. Si la Convergence — notamment Nyrevax (203) — est consultée sur les signatures élémentaires des sabotages, sa double nature pourrait être identifiée. Un analyste spécialisé dans les doubles éléments pourrait là où les Régulateurs standards échouent.',
      personnages_impliques: [1, 149],
      declencheur: 'La Convergence consultée sur les signatures élémentaires des sabotages de Velrask',
      consequence: 'Velrask identifié comme double élément — et ses mouvements entre Varkhôl et Vel\'Nox devenus une cible de surveillance',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Saboteur Dissident à Varkhôl avec double élément Feu/Ténèbres. Signature mixte rendant l\'attribution difficile. Cible des infrastructures impériales.',

  relations: [
    { id: 1, nom: 'Brasia', type: 'contact', note: 'Cheffe Dissidente assignant les cibles de sabotage.' },
    { id: 149, nom: 'Syrvel', type: 'contact', note: 'Passeure Dissidente facilitant ses déplacements entre Varkhôl et Vel\'Nox.' },
  ],

  combat: {
    sorts: [
      'Frappe d\'ombre incendiaire (Feu/Ténèbres) — attaque depuis l\'obscurité avec impact thermique — dommages de sabotage',
      'Disparition dans l\'ombre (Ténèbres) — repositionnement après frappe — survie opérationnelle',
    ],
  },

  image_prompts: [
    {
      id: 'velrask_sabotage',
      description: 'Velrask préparant un sabotage dans une zone industrielle de Varkhôl — un Pyrien de 36 ans dans l\'obscurité qu\'il crée lui-même autour d\'une cible thermique. Ses mains combinent les deux éléments — chaleur et ombre en même temps. La signature sur l\'équipement endommagé sera ambiguë.',
      style: 'réaliste Pyrien saboteur double élément, Varkhôl, sabotage d\'infrastructure impériale, signature mixte Feu/Ténèbres, Dissidentes',
    },
  ],

  lore_long: `Velrask sabote des infrastructures impériales à Varkhôl pour les Dissidentes. Son double élément Feu/Ténèbres lui permet une approche invisible et une frappe thermique.

Ses sabotages laissent une signature mixte difficile à attribuer. L'Empire cherche un Pyrien ou un Umbrien. Il est les deux.

Un analyste spécialisé dans les doubles éléments pourrait l'identifier là où les Régulateurs standards échouent.`,
};

export default velrask;
