import type { PersonnageLoreComplet } from '../../../lore-types';

const shyvel: PersonnageLoreComplet = {
  id: 154,
  nom: 'Shyvel',
  element: 'Psy',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire avec l\'apparence de quelqu\'un qui négocie — il évalue toujours la valeur de ce qu\'il voit.',
    peau: 'Gris-bleu Umbrien avec des pulsations psychiques légères — son élément est actif mais contrôlé.',
    yeux: 'Blancs avec une qualité d\'inventaire permanent. Il évalue des profils comme d\'autres évaluent des marchandises.',
    vetements: 'Tenue de marchand aisé des marchés nocturnes — il achète et vend des informations dans un marché où tout a un prix.',
    signes_particuliers: 'Collecteur de données pour la Convergence. Il achète des profils d\'Élus dans les marchés nocturnes de Vel\'Nox. Tharyn (50) est sa source principale.',
  },

  psychologie: {
    dominante: 'Collecteur de données Convergence dans les marchés nocturnes de Vel\'Nox. Son travail est d\'acheter des informations sur les Élus — profils, localisations, puissances élémentaires — et de les transmettre à Shael (48). Son outil est financier plus que psychique.',
    mecanisme_de_defense: 'La transaction comme distance. Il achète des données — il ne cherche pas lui-même. Cette intermédiation le sépare des conséquences directes.',
    contradiction_interne: 'Il achète des profils d\'individus pour la Convergence. Ces individus vont être recrutés — ou autre chose. Il ne demande pas ce que "autre chose" signifie.',
    rapport_aux_autres: 'Shael (48) est son destinataire. Tharyn (50) est sa source principale — quelqu\'un dont le réseau dans les marchés nocturnes donne accès à des profils de qualité.',
    vision_du_monde: 'L\'information sur les Élus a une valeur marchande à Vel\'Nox. Il est sur ce marché. Ses transactions sont propres — argent contre données. La suite n\'est pas son département.',
  },

  histoire: {
    enfance: {
      titre: 'Les marchés',
      contenu: 'Né dans les marchés nocturnes de Vel\'Nox. Formation en commerce — il avait appris à évaluer et négocier avant de comprendre que les données sur les personnes étaient une marchandise.',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'Shael (48) l\'avait contacté avec une proposition simple : acheter des profils d\'Élus dans les marchés nocturnes. Rémunération correcte, risque modéré. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'La source',
      contenu: 'Tharyn (50) était devenu sa meilleure source — quelqu\'un dont le réseau couvrait une large partie des marchés nocturnes. Cette dépendance à une seule source était une vulnérabilité qu\'il gérait en diversifiant partiellement.',
    },
    revelation: {
      titre: 'Ce que Shael fait des profils',
      contenu: 'Il n\'avait jamais demandé directement. Les indices dans les comportements de Shael suggéraient que les profils servaient un projet plus large. Il n\'avait pas creusé.',
    },
    etat_actuel: {
      titre: 'Les achats',
      contenu: 'Il achète. Les profils partent vers Shael. Les marchés nocturnes continuent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'shyvel_profil',
      titre: 'La source tarie',
      description: 'Shyvel dépend de Tharyn (50) comme source principale de profils. Si Tharyn est compromis — identifié comme source de la Convergence, ou décidant d\'arrêter — le réseau de collecte de Shyvel se réduira significativement. Shael (48) lui demandera de compenser. Cette pression pourrait l\'amener à des méthodes moins propres.',
      personnages_impliques: [48, 50],
      declencheur: 'Tharyn compromis ou cessant de fournir des profils',
      consequence: 'Shyvel sous pression pour compenser — et les méthodes de collecte devenant moins propres',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Collecteur de données Convergence à Vel\'Nox. Achète des profils d\'Élus. Source principale : Tharyn (50).',

  relations: [
    { id: 48, nom: 'Shael', type: 'contact', note: 'Destinataire des profils collectés.' },
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Source principale de profils d\'Élus.' },
  ],

  combat: {
    sorts: [
      'Sonde psychique (Psy) — lecture de profil élémentaire — évaluation rapide',
      'Pression de transaction (Psy) — influence sur la décision — négociation forcée',
    ],
  },

  image_prompts: [
    {
      id: 'shyvel_achat',
      description: 'Shyvel dans un marché nocturne de Vel\'Nox — un Umbrien qui négocie un profil avec une source. Son expression est évaluative — il calcule la valeur de ce qu\'on lui offre. Il ne pense pas à ce que la Convergence en fera.',
      style: 'réaliste Umbrien collecteur Convergence, marchés nocturnes de Vel\'Nox, achat de profils, distance transactionnelle',
    },
  ],

  lore_long: `Shyvel achète des profils d'Élus dans les marchés nocturnes de Vel'Nox pour la Convergence. Sa source principale est Tharyn (50).

Il ne demande pas ce que Shael (48) fait de ces profils. La transaction est propre — argent contre données. La suite n'est pas son département.

Si Tharyn est compromis, le réseau de collecte de Shyvel s'effondre.`,
};

export default shyvel;
