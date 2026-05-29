import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrevax: PersonnageLoreComplet = {
  id: 203,
  nom: 'Nyrevax',
  element: 'Ténèbres',
  element2: 'Feu',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Umbrien de 38 ans, analyste — corpulence discrète, habituée à observer sans être observée.',
    peau: 'Grise profonde avec des points lumineux thermiques — son double élément produit une signature distinctive que ses collègues Umbriens peuvent percevoir.',
    yeux: 'Noirs avec des éclats orangés très discrets — son Feu est secondaire mais perceptible.',
    vetements: 'Tenue d\'analyste Convergence — neutre, sans identification visible.',
    signes_particuliers: 'Il surveille les interactions Feu/Ténèbres pour identifier les purs élémentaires. Sa propre double nature lui donne une compréhension intuitive de ces interactions que ses collègues mono-élémentaires n\'ont pas.',
  },

  psychologie: {
    dominante: 'Analyste de la Convergence spécialisé dans la surveillance des interactions entre éléments Feu et Ténèbres. Son double élément lui donne une capacité d\'analyse intuitive — il perçoit les signatures combinées d\'une façon que ses collègues ne peuvent pas. Il utilise cette capacité pour identifier les Élus purs pour le Protocole d\'Identification.',
    mecanisme_de_defense: 'La précision analytique. Ses analyses sont correctes parce qu\'il comprend les éléments qu\'il analyse de l\'intérieur. Sa valeur est dans la précision de ses identifications.',
    contradiction_interne: 'Il identifie des Élus purs pour la Convergence — ce qui les expose au Protocole de Drain. Sa propre double nature l\'a rendu utile à la Convergence plutôt que cible. Il n\'ignore pas que sa position est contingente à son utilité.',
    rapport_aux_autres: 'Sethara (238) est dans son réseau — un autre analyste de la Convergence avec qui il partage des méthodes. Shael (48) est dans son réseau — le directeur de la Convergence dans Vel\'Nox qui utilise ses analyses.',
    vision_du_monde: 'Les patterns élémentaires sont lisibles si on sait où chercher. Son double élément lui apprend où chercher. La Convergence utilise ces lectures. Il trouve son rôle significatif.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément dans Vel\'Nox',
      contenu: 'Né à Vel\'Nox avec un double élément Ténèbres/Feu — inhabituel dans une population majoritairement Ténèbres. Il avait été identifié par la Convergence à 16 ans et recruté à 20 ans pour ses capacités analytiques sur les interactions élémentaires.',
    },
    arrivee: {
      titre: 'L\'analyse des purs',
      contenu: 'Il avait développé sa méthode d\'identification des purs élémentaires sur 10 ans — une combinaison de perception directe et de patterns observés. Ses taux d\'identification correcte étaient supérieurs à ceux de ses collègues.',
    },
    premier_conflit: {
      titre: 'Le faux positif',
      contenu: 'Il avait identifié un Élu comme "pur Feu" — une identification qui avait mené à une extraction. L\'Élu s\'était révélé être un double élément comme lui. Ses analyses avaient été révisées pour mieux distinguer les purs des doubles.',
    },
    revelation: {
      titre: 'La contingence de sa position',
      contenu: 'Il avait compris que son utilité à la Convergence était sa protection. Si ses analyses devenaient moins précises, ou si un analyste plus capable était disponible, sa position changerait. Il maintient ses analyses avec rigueur.',
    },
    etat_actuel: {
      titre: 'L\'analyste',
      contenu: 'Il analyse. Il identifie. Les Élus purs vont au Protocole.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrevax_identification',
      titre: 'L\'analyste identifié',
      description: 'Nyrevax identifie des Élus purs pour la Convergence. Si Vethis (46) ou des Dissidentes comprennent comment ses analyses fonctionnent — comment il perçoit les signatures élémentaires — ils pourraient développer des contre-mesures qui rendraient ses identifications moins précises, protégeant des Élus du Protocole.',
      personnages_impliques: [238, 48],
      declencheur: 'Les Dissidentes comprenant la méthode d\'analyse de Nyrevax et développant des contre-mesures',
      consequence: 'Précision des identifications réduite — des Élus purs passant sous le radar du Protocole',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Analyste Convergence dans Vel\'Nox. Identifie les Élus purs Feu/Ténèbres pour le Protocole. Son double élément lui donne une compréhension intuitive des interactions élémentaires.',

  relations: [
    { id: 238, nom: 'Sethara', type: 'contact', note: 'Autre analyste Convergence avec qui il partage des méthodes.' },
    { id: 48, nom: 'Shael', type: 'hierarchie', note: 'Directeur Convergence dans Vel\'Nox utilisant ses analyses.' },
  ],

  combat: {
    sorts: [
      'Lecture d\'élément (Ténèbres/Feu) — analyse de signature élémentaire — avantage informationnel',
      'Frappe analytique (Ténèbres) — attaque depuis l\'obscurité — surprise',
    ],
  },

  image_prompts: [
    {
      id: 'nyrevax_analyse',
      description: 'Nyrevax observant un Élu à distance dans Vel\'Nox — un Umbrien de 38 ans dont les points lumineux thermiques sont légèrement actifs. Il perçoit la signature élémentaire de l\'Élu observé avec une précision que ses collègues ne pourraient pas atteindre. Il note quelque chose sur un rapport.',
      style: 'réaliste Umbrien/Pyrien analyste Convergence, Vel\'Nox, identification d\'Élus purs, double élément, perception intuitive',
    },
  ],

  lore_long: `Nyrevax est analyste de la Convergence dans Vel'Nox. Il identifie les Élus purs Feu et Ténèbres pour le Protocole d'Identification.

Son double élément Ténèbres/Feu lui donne une compréhension intuitive des interactions élémentaires que ses collègues mono-élémentaires n'ont pas.

Son utilité à la Convergence est sa protection. Il maintient ses analyses avec rigueur.`,
};

export default nyrevax;
