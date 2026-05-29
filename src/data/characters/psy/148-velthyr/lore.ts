import type { PersonnageLoreComplet } from '../../../lore-types';

const velthyr: PersonnageLoreComplet = {
  id: 148,
  nom: 'Velthyr',
  element: 'Psy',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Umbrien de taille ordinaire avec une présence qui déborde son corps — les Umbriens Psy projettent légèrement en permanence.',
    peau: 'Gris-bleu Umbrien avec des pulsations psychiques subtiles — visible pour les sensibles aux champs élémentaires.',
    yeux: 'Noirs avec une qualité d\'analyse constante. Il lit les gens comme des données.',
    vetements: 'Tenue de marchand ordinaire des marchés nocturnes — sa couverture est l\'anonymat.',
    signes_particuliers: 'Analyste des patterns psychiques dans les marchés nocturnes. Il identifie les profils d\'"Élus purs" pour Shael (48). Ses rapports sont la base du recrutement Convergence à Vel\'Nox.',
  },

  psychologie: {
    dominante: 'Analyste psychique travaillant pour la Convergence dans les marchés nocturnes de Vel\'Nox. Son travail est d\'identifier les profils d\'Élus dont la puissance élémentaire est "pure" — non-diluée par des mélanges ou des blocages. Ces profils sont transmis à Shael (48) pour recrutement.',
    mecanisme_de_defense: 'L\'analyse comme distanciation. Il étudie les gens comme des phénomènes. Cette distanciation lui permet de les identifier sans les considérer comme des individus.',
    contradiction_interne: 'Il identifie des personnes pour un recrutement dont il ne connaît pas l\'objectif final entièrement. La Convergence compartimente. Ce qu\'il fait avec ses analyses est peut-être différent de ce qu\'il imagine.',
    rapport_aux_autres: 'Shael (48) est son client principal. Tharyn (50) est une source — un point d\'accès aux marchés nocturnes où il opère.',
    vision_du_monde: 'Les profils psychiques des Élus suivent des patterns reconnaissables. Sa valeur est de reconnaître ces patterns dans un bruit de fond élevé — les marchés nocturnes sont riches en Élus de toutes qualités.',
  },

  histoire: {
    enfance: {
      titre: 'L\'analyse',
      contenu: 'Né avec une sensibilité psychique élevée à Vel\'Nox. Il avait commencé à lire les champs élémentaires des autres à 15 ans — d\'abord involontairement, puis de façon contrôlée.',
    },
    arrivee: {
      titre: 'La Convergence',
      contenu: 'Shael (48) l\'avait contacté à 25 ans avec une proposition : analyser les profils psychiques dans les marchés nocturnes en échange d\'une rémunération. La demande était précise. Il avait accepté.',
    },
    premier_conflit: {
      titre: 'Ce qu\'il identifie',
      contenu: 'Il avait commencé à remarquer que certains profils qu\'il identifiait disparaissaient de Vel\'Nox quelques semaines après ses rapports. Il n\'avait pas posé de questions à Shael.',
    },
    revelation: {
      titre: 'Le compartimentage',
      contenu: 'Il avait compris que la Convergence compartimentait sa mission — il savait ce qu\'il faisait, pas où ça menait. Cette ignorance partielle était peut-être intentionnelle.',
    },
    etat_actuel: {
      titre: 'L\'analyse',
      contenu: 'Il analyse dans les marchés nocturnes. Ses rapports vont à Shael. Les profils qu\'il identifie disparaissent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthyr_profil',
      titre: 'Le profil qui disparaît',
      description: 'Velthyr identifie des profils d\'Élus purs pour Shael (48). Ces profils disparaissent de Vel\'Nox après ses rapports. Si Velthyr identifie quelqu\'un qu\'il connaît personnellement — ou si quelqu\'un qu\'il a identifié revient chercher qui les avait signalés — sa distanciation analytique sera confrontée à la réalité de ce que ses rapports causent.',
      personnages_impliques: [48, 50],
      declencheur: 'Velthyr identifiant quelqu\'un qu\'il connaît, ou quelqu\'un cherchant qui les avait signalés',
      consequence: 'Velthyr confronté aux conséquences réelles de ses analyses',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Analyste psychique Convergence dans les marchés nocturnes de Vel\'Nox. Identifie les Élus purs pour Shael (48). Ignore l\'usage final.',

  relations: [
    { id: 48, nom: 'Shael', type: 'contact', note: 'Client principal. Destinataire de ses analyses.' },
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Source de données des marchés nocturnes.' },
  ],

  combat: {
    sorts: [
      'Lecture psychique (Psy) — analyse de champ élémentaire — identification de profil',
      'Pression mentale (Psy) — attaque psychique directe — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'velthyr_marche',
      description: 'Velthyr dans un marché nocturne de Vel\'Nox — un Umbrien qui observe un groupe de personnes avec des yeux qui lisent leurs champs psychiques. Des données invisibles lui parviennent. Son expression est analytique. Il ne regarde pas les gens — il regarde leurs profils.',
      style: 'réaliste Umbrien analyste psychique, Vel\'Nox, marchés nocturnes, Convergence, lecture de champ élémentaire',
    },
  ],

  lore_long: `Velthyr analyse les profils psychiques des Élus dans les marchés nocturnes de Vel'Nox pour la Convergence. Il identifie les "purs" pour Shael (48).

Les profils qu'il identifie disparaissent de Vel'Nox quelques semaines après ses rapports. Il n'a pas posé de questions.

Si quelqu'un qu'il a identifié revient chercher qui les avait signalés, sa distanciation analytique prendra fin.`,
};

export default velthyr;
