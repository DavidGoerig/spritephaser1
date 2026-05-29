import type { PersonnageLoreComplet } from '../../../lore-types';

const thyskeln: PersonnageLoreComplet = {
  id: 198,
  nom: 'Thyskeln',
  element: 'Spectre',
  espece: 'Homme-Lien',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 35 ans, passeur spectral — corpulence légère, habitué à occuper le moins d\'espace possible.',
    peau: 'Ton variable selon l\'état spectral — il peut devenir partiellement translucide. En état normal, ton ordinaire.',
    yeux: 'Gris avec une qualité de quelqu\'un qui voit simultanément le plan physique et quelque chose d\'adjacent.',
    vetements: 'Tenue pratique qui ne créera pas de son en se froissant. Il travaille dans le silence.',
    signes_particuliers: 'Il guide les Élus non-enregistrés hors de Virex via des routes spectrales — des passages à travers des zones inaccessibles physiquement. Son élément Spectre lui permet de traverser des surfaces et de guider des personnes en contact avec lui.',
  },

  psychologie: {
    dominante: 'Passeur spectral Dissident dans l\'Isthme. Son élément Spectre lui permet de traverser certaines surfaces solides et de guider des personnes en contact physique avec lui. Il utilise cette capacité pour faire passer des Élus non-enregistrés à travers des points de contrôle qui seraient infranchissables par les routes normales.',
    mecanisme_de_defense: 'L\'invisibilité fonctionnelle. Son élément lui permet de passer là où les autres ne peuvent pas. Cette capacité est sa protection autant que son outil.',
    contradiction_interne: 'Son élément Spectre lui permet de traverser certaines surfaces — pas toutes. Il a des limites qu\'il connaît par expérience. Guider une personne en contact nécessite une concentration que des situations stressantes peuvent perturber. Il n\'a jamais échoué en guidan. Il a peur de savoir ce qui se passe si ça arrive.',
    rapport_aux_autres: 'Vethyskel (274) est dans son réseau — un autre utilisateur Spectre dont la connaissance des passages complémente les siens. Le Second Avatar (59) est dans son réseau indirect — des décisions sur les zones de contrôle qui affectent les routes qu\'il utilise.',
    vision_du_monde: 'Les murs sont des obstacles administratifs, pas des réalités absolues. Son élément lui a appris ça physiquement. Il applique ce principe à sa façon de naviguer dans les systèmes politiques.',
  },

  histoire: {
    enfance: {
      titre: 'L\'élément Spectre',
      contenu: 'Son élément Spectre s\'était manifesté à 12 ans — il avait passé sa main à travers un mur pendant son sommeil. Il avait fallu 3 ans pour apprendre à le contrôler. La peur de passer involontairement à travers le sol l\'avait accompagné jusqu\'à 20 ans.',
    },
    arrivee: {
      titre: 'Le passage',
      contenu: 'Les Dissidentes l\'avaient approché à 28 ans quand l\'enregistrement obligatoire avait commencé dans l\'Isthme. Sa capacité à guider des personnes à travers des points de contrôle était exactement ce dont ils avaient besoin. Il avait développé ses techniques en conditions réelles.',
    },
    premier_conflit: {
      titre: 'La limite',
      contenu: 'Il avait essayé de guider une personne à travers une surface plus dense qu\'il n\'avait l\'habitude. Sa concentration avait vacillé à mi-passage. Ils avaient réussi — de justesse. Il avait cherché à comprendre ses limites précises avant de les repousser à nouveau.',
    },
    revelation: {
      titre: 'La responsabilité du guidage',
      contenu: 'Il avait compris que guider une personne dans un passage spectral lui donnait une responsabilité totale pour cette personne pendant le transit. Si quelque chose se passait à mi-passage, la personne guidée n\'avait aucune autonomie. Cette responsabilité était réelle d\'une façon que le danger personnel n\'était pas.',
    },
    etat_actuel: {
      titre: 'Le passeur',
      contenu: 'Il guide. Les Élus passent les points de contrôle. Il prépare la prochaine route.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyskeln_passage',
      titre: 'Le passage sous tension',
      description: 'Thyskeln guide des Élus via des routes spectrales à travers des points de contrôle. Si un passage est perturbé — par une interférence élémentaire liée à la saturation de l\'Isthme, par une concentration inhabituellement dense — il risque une perte de contrôle avec une personne guidée à mi-passage.',
      personnages_impliques: [274, 59],
      declencheur: 'Une interférence élémentaire perturbant un passage spectral avec une personne guidée',
      consequence: 'Thyskeln et la personne guidée bloqués dans un état de passage partiel — et nécessité d\'une extraction d\'urgence',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Passeur spectral guidant les Élus non-enregistrés hors de Virex via des routes spectrales. Élément Spectre permettant le passage à travers des zones infranchissables par les routes normales.',

  relations: [
    { id: 274, nom: 'Vethyskel', type: 'contact', note: 'Autre utilisateur Spectre dont la connaissance des passages complémente les siens.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Décisions sur les zones de contrôle affectant les routes spectrales utilisées.' },
  ],

  combat: {
    sorts: [
      'Passage spectral (Spectre) — traversée de surface — mobilité extrême',
      'Toucher fantôme (Spectre) — frappe depuis un état de semi-présence — attaque surprise',
    ],
  },

  image_prompts: [
    {
      id: 'thyskeln_guidage',
      description: 'Thyskeln guidant un Élu à travers un mur de point de contrôle dans l\'Isthme — un Homme-Lien de 35 ans en état de semi-translucidité, tenant la main d\'un Élu de 14 ans qui traverse la surface avec lui. Les deux sont partiellement visibles, partiellement spectraux. L\'expression de Thyskeln est de concentration absolue.',
      style: 'réaliste Homme-Lien passeur spectral, Isthme, passage à travers surface, guidage spectral, Élus non-enregistrés, point de contrôle',
    },
  ],

  lore_long: `Thyskeln guide les Élus non-enregistrés hors de Virex via des routes spectrales dans l'Isthme. Son élément Spectre lui permet de traverser des surfaces et de guider des personnes en contact.

Il a des limites qu'il connaît par expérience. Guider une personne à travers un passage lui donne une responsabilité totale pour elle pendant le transit.

La saturation élémentaire de l'Isthme crée des interférences sur les routes spectrales. Il prépare des alternatives.`,
};

export default thyskeln;
