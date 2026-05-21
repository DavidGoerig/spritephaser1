import type { PersonnageLoreComplet } from '../../../lore-types';

const velthsael: PersonnageLoreComplet = {
  id: 368,
  nom: 'Velthsael',
  element: 'Stellaire',
  element2: 'Psy',
  espece: 'Aérides',
  region: 'Asterciel',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Aéride légère avec des mouvements qui paraissent flottants — une façon d\'occuper l\'espace qui rend difficile de savoir exactement où elle est. Pas de la dissimulation délibérée — c\'est sa façon naturelle d\'être présente.',
    peau: 'Pâle Aéride avec des reflets légèrement irisés au niveau des épaules — la zone de contact avec les courants aériens. Des marques de navigation stellaire aux mains.',
    yeux: 'Bleu très clair avec une capacité de diffraction de la lumière — l\'élément Stellaire qui lui permet de percevoir les signatures dans le spectre lumineux.',
    vetements: 'Tenue légère et non marquée — elle ne veut pas qu\'on se souvienne d\'elle spécifiquement après une interaction.',
    signes_particuliers: 'Elle brouille sa propre signature psycho-stellaire en permanence — une légère distorsion qui rend ses intentions difficiles à lire. Elle le fait par réflexe depuis des années.',
  },

  psychologie: {
    dominante: 'Brouillage des signatures psycho-stellaires des Élus pour les rendre indétectables par les analystes impériaux — création de bruit psychique et de distorsion stellaire qui masquent la signature spécifique d\'un Élu dans le spectre d\'analyse.',
    mecanisme_de_defense: 'Le brouillage permanent. Elle protège par le bruit. Elle vit dans le bruit. Il lui est devenu difficile de ne pas brouiller — même quand ce serait préférable de ne pas le faire.',
    contradiction_interne: 'Son brouillage permanent de sa propre signature a un effet secondaire : les personnes qui ont des capacités Psy ou Stellaire authentiques trouvent difficile de se connecter à elle. Elle isole ceux qu\'elle veut protéger contre les mécanismes de connexion qui les maintiendraient en réseau.',
    rapport_aux_autres: 'Velthyn (160) est son contact Dissident pour les priorités d\'intervention — quels Élus sont sous analyse et ont besoin d\'un brouillage urgent. Syvara (30) est une source d\'information sur les Élus qui traversent les Déserts et nécessitent une protection lors de leurs déplacements.',
    vision_du_monde: 'Si les analystes ne peuvent pas lire une signature, ils ne peuvent pas prédire un comportement. Si ils ne peuvent pas prédire, ils ne peuvent pas anticiper. Si ils ne peuvent pas anticiper, l\'Élu a de l\'espace.',
  },

  histoire: {
    enfance: {
      titre: 'Les lectures d\'Asterciel',
      contenu: 'À 15 ans, elle avait réalisé qu\'elle pouvait percevoir les signatures psycho-stellaires des personnes autour d\'elle — et qu\'elle pouvait les altérer légèrement. Elle avait commencé par s\'amuser à brouiller sa propre signature pour que les autres Aérides ne la trouvent pas facilement.',
    },
    arrivee: {
      titre: 'Le contact Dissident',
      contenu: 'À 24 ans, Velthyn (160) l\'avait contactée après avoir entendu qu\'elle pouvait brouiller des signatures psycho-stellaires. Les Dissidents avaient des Élus dont les signatures étaient lues par des analystes impériaux. Elle avait demandé combien. La réponse : plus que ce qu\'elle pouvait couvrir seule.',
    },
    premier_conflit: {
      titre: 'Le brouillage insuffisant',
      contenu: 'À 29 ans, un Élu qu\'elle avait protégé pendant 3 semaines avait été capturé — son brouillage avait été détecté comme distorsion anormale par un analyste de Shyrvael (366). L\'analyste avait utilisé la distorsion comme marqueur de présence d\'Élu. Elle avait dû modifier sa méthode.',
    },
    revelation: {
      titre: 'Le brouillage adaptatif',
      contenu: 'Elle avait développé un brouillage adaptatif — une distorsion qui mimait le bruit ambiant psycho-stellaire plutôt que de le surcharger. Plus difficile à distinguer d\'une anomalie naturelle. Plus coûteuse en énergie. Elle pouvait maintenir 4 brouillages simultanés de cette qualité.',
    },
    etat_actuel: {
      titre: 'Les 4 protections actives',
      contenu: 'Elle maintient 4 brouillages adaptatifs sur des Élus de zones différentes. Velthyn lui a signalé que Thyrsael (367) de la Convergence cherche la signature universelle des purs élémentaires — si Thyrsael la trouve, ses brouillages actuels seront insuffisants pour des purs élémentaires. Elle doit anticiper une méthode améliorée.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthsael_menace_thyrsael',
      titre: 'La signature universelle',
      description: 'Thyrsael (367) cherche la signature psycho-stellaire universelle des purs élémentaires pour la Convergence. Si cette signature est identifiée, ses brouillages actuels ne seront pas suffisants pour protéger les purs élémentaires — le brouillage doit masquer quelque chose de connu pour être efficace. Elle doit développer un contre-brouillage pour une signature qu\'elle ne connaît pas encore.',
      personnages_impliques: [160, 30],
      declencheur: 'Information sur la recherche de Thyrsael sur la signature universelle des purs élémentaires',
      consequence: 'Nécessité d\'anticiper un contre-brouillage pour une signature non encore identifiée',
    },
    {
      id: 'velthsael_isolation',
      titre: 'Le coût du brouillage permanent',
      description: 'Son brouillage permanent de sa propre signature la coupe des réseaux de connexion psycho-stellaire naturels. Syvara (30) a du mal à la localiser en urgence. Elle est difficile à trouver — même pour ses alliés. L\'isolation est une protection et un obstacle à la coordination.',
      personnages_impliques: [30, 160],
      declencheur: 'Effet secondaire du brouillage permanent sur la coordination avec les alliés',
      consequence: 'Difficultés de localisation d\'urgence — coût opérationnel de la discrétion',
    },
  ],

  arcs: ['arc_confluence_psy_stellaire'],
  position_dans_arc: 'Contre-analyste Dissidente Aéride brouillant les signatures des Élus. 4 brouillages adaptatifs actifs. La recherche de Thyrsael (367) sur la signature universelle des purs élémentaires rend ses méthodes actuelles insuffisantes à terme.',

  relations: [
    { id: 160, nom: 'Velthyn', type: 'allié', note: 'Contact Dissident pour les priorités d\'intervention. Source des alertes sur les analystes actifs.' },
    { id: 30, nom: 'Syvara', type: 'allié', note: 'Source d\'information sur les Élus en déplacement. A du mal à la localiser en urgence à cause du brouillage permanent.' },
  ],

  combat: {
    sorts: [
      'Brouillage de signature (Stellaire) — distorsion du pattern stellaire d\'une cible — masquage de signature',
      'Bruit psychique (Psy) — émission de résonance psychique non ciblée — saturation des capacités de lecture adverses',
      'Distorsion adaptative (Stellaire + Psy) — brouillage qui mime le bruit ambiant — indiscernable d\'une anomalie naturelle',
    ],
  },

  image_prompts: [
    {
      id: 'velthsael_brouillage',
      description: 'Velthsael dans un espace ouvert d\'Asterciel — ses mains émettent une légère distorsion lumineuse qui entoure une personne à côté d\'elle. La distorsion est subtile — difficile à distinguer d\'un effet de lumière naturel. Son expression est concentrée mais détendue — c\'est une compétence maîtrisée.',
      style: 'réaliste Aéride Dissidente, brouillage psycho-stellaire, distorsion lumineuse subtile, Asterciel',
    },
  ],

  lore_long: `Velthsael brouille les signatures psycho-stellaires des Élus pour les cacher des analystes impériaux. 4 brouillages adaptatifs actifs — distorsions qui miment le bruit ambiant.

Thyrsael (367) de la Convergence cherche la signature universelle des purs élémentaires. Si cette signature est identifiée, ses méthodes actuelles ne seront plus suffisantes pour les purs élémentaires.

Son brouillage permanent la coupe des réseaux de connexion psycho-stellaire — même ses alliés ont du mal à la localiser.`,
};

export default velthsael;
