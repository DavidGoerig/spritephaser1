import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrath: PersonnageLoreComplet = {
  id: 147,
  nom: 'Nyrath',
  element: 'Spectre',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien mince avec des mouvements de guide — il connaît chaque passage des Trois Couches de Vel\'Nox et son corps le reflète.',
    peau: 'Gris translucide Umbrien avec un aspect spectral accentué — son élément Spectre est visible dans sa semi-transparence.',
    yeux: 'Blancs avec une qualité de quelqu\'un qui voit les passages que les autres ne voient pas.',
    vetements: 'Tenue de guide minimale — il n\'emporte que ce qui sert à se déplacer.',
    signes_particuliers: 'Guide dans les passages des Trois Couches de Vel\'Nox. Il est en compétition avec Velath (49) sur un corridor spécifique — le seul point de friction entre eux.',
  },

  psychologie: {
    dominante: 'Guide dans les passages des Trois Couches de Vel\'Nox — les niveaux inférieurs de la cité nocturne. Son expertise est les passages physiques : corridors, raccourcis, routes d\'évitement. Il est en compétition avec Velath (49) sur un corridor précis qui leur est mutuellement précieux.',
    mecanisme_de_defense: 'La connaissance des passages comme monopole naturel. Personne ne peut le guider mieux qu\'il ne se guide lui-même.',
    contradiction_interne: 'Sa compétition avec Velath porte sur un corridor. Cette compétition est précisément localisée — tout le reste de leurs territoires ne se chevauche pas. Ils pourraient collaborer sur tout sauf ce corridor. Ils ne le font pas.',
    rapport_aux_autres: 'Velath (49) est son compétiteur sur le corridor disputé. Vethis (46) est dans son réseau — quelqu\'un qui utilise ses guides pour des mouvements dans les Trois Couches.',
    vision_du_monde: 'Les Trois Couches de Vel\'Nox ont une logique que seuls ceux qui les vivent comprennent. Son service est de rendre cette logique navigable pour ceux qui viennent de l\'extérieur.',
  },

  histoire: {
    enfance: {
      titre: 'Les Trois Couches',
      contenu: 'Né dans les Trois Couches de Vel\'Nox — les niveaux inférieurs où la lumière ne pénètre jamais. Il avait appris les passages avant de comprendre qu\'ils avaient de la valeur.',
    },
    arrivee: {
      titre: 'Le guide',
      contenu: 'Il avait commencé à guider des visiteurs des Trois Couches à 20 ans — des gens qui avaient besoin de se déplacer discrètement à Vel\'Nox. Sa connaissance des passages était sa compétence.',
    },
    premier_conflit: {
      titre: 'Velath',
      contenu: 'Velath (49) utilisait le même corridor central pour ses propres déplacements. La compétition était précisément localisée — un corridor, deux guides avec des intérêts différents sur ce corridor spécifique.',
    },
    revelation: {
      titre: 'La friction localisée',
      contenu: 'Il avait réalisé que sa relation avec Velath était caractérisée par cette unique friction. Sur tout le reste de Vel\'Nox, ils n\'étaient pas en compétition. Cette spécificité rendait la résolution possible — s\'ils la cherchaient.',
    },
    etat_actuel: {
      titre: 'Le guide',
      contenu: 'Il guide. La compétition avec Velath continue sur le corridor. Le reste de Vel\'Nox leur est mutuellement disponible.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrath_corridor',
      titre: 'Le corridor disputé',
      description: 'Nyrath et Velath (49) sont en compétition sur un corridor des Trois Couches. Si une crise nécessite ce corridor pour une opération — et que les deux guides y ont des intérêts — ils devront soit collaborer, soit décider qui a priorité. Cette décision pourrait résoudre ou exacerber leur compétition.',
      personnages_impliques: [49, 46],
      declencheur: 'Crise nécessitant le corridor disputé pour une opération critique',
      consequence: 'Nyrath et Velath forcés de collaborer ou de se confronter directement',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Guide des Trois Couches de Vel\'Nox. Compétition avec Velath (49) sur un corridor spécifique. Indépendant.',

  relations: [
    { id: 49, nom: 'Velath', type: 'adversaire', note: 'Compétition sur un corridor des Trois Couches.' },
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Utilise ses guides pour des mouvements dans les Trois Couches.' },
  ],

  combat: {
    sorts: [
      'Passage spectral (Spectre) — traversée de surfaces — mobilité en terrain difficile',
      'Voile de passage (Spectre) — invisibilité partielle dans les corridors — fuite',
    ],
  },

  image_prompts: [
    {
      id: 'nyrath_passage',
      description: 'Nyrath dans un corridor des Trois Couches de Vel\'Nox — un Umbrien semi-translucide guidant quelqu\'un dans l\'obscurité. Il connaît chaque pierre du passage. Son expression est alerte — il sait que Velath utilise parfois ce même corridor.',
      style: 'réaliste Umbrien guide spectral, Trois Couches de Vel\'Nox, passages nocturnes, compétition de territoire',
    },
  ],

  lore_long: `Nyrath guide dans les passages des Trois Couches de Vel'Nox. Il est en compétition avec Velath (49) sur un seul corridor — le reste de leurs territoires ne se chevauche pas.

Cette compétition précisément localisée pourrait être résolue par un accord. Ils ne l'ont pas cherché.

Vethis (46) utilise ses services régulièrement.`,
};

export default nyrath;
