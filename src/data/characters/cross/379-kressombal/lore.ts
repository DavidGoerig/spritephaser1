import type { PersonnageLoreComplet } from '../../../lore-types';

const kressombal: PersonnageLoreComplet = {
  id: 379,
  nom: 'Kressombal',
  element: 'Combat',
  element2: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Garde du corps — une stature immédiatement lisible comme protection physique. Pas d\'ostentation de la force — une présence stable et dissuasive.',
    peau: 'Brun Homme-Lien avec des cicatrices de protection — des blessures reçues en se mettant entre une menace et un client. Il porte ces marques sans les dissimuler.',
    yeux: 'Brun avec une habitude de lecture des environnements — il voit les sorties, les angles, les menaces potentielles dans chaque espace.',
    vetements: 'Tenue fonctionnelle sans marqueur d\'affiliation. Il a refusé des uniformes proposés par plusieurs clients — un principe.',
    signes_particuliers: 'Il a une règle unique et non négociable. Ceux qui l\'ont fait travailler pour eux la connaissent avant de signer. Ceux qui l\'ont violée l\'ont perdu immédiatement.',
  },

  psychologie: {
    dominante: 'Protection physique de clients variés sans affiliation — il prend des contrats de garde du corps pour des personnes qui peuvent payer, indépendamment de leur faction, avec une exception absolue.',
    mecanisme_de_defense: 'La règle comme ligne. Il ne justifie pas sa règle. Il ne la négocie pas. Elle est le seul point où il n\'est pas professionnel — il est absolu.',
    contradiction_interne: 'Sa règle l\'a amené à travailler pour des personnes dont les activités sont contraires à ses valeurs personnelles — tant qu\'aucune de ces activités ne visait des enfants. Il a protégé des personnes qu\'il n\'estimait pas. Il le referait.',
    rapport_aux_autres: 'Thyrekavel (275) est un contact pour des missions où ses capacités de protection sont nécessaires dans des zones de saturation électrique — Thyrekavel lui fait confiance pour des situations impliquant des Élus. Vashera (266) lui transmet des missions Dissidentes sans affiliation formelle.',
    vision_du_monde: 'Le monde est dangereux. Les personnes qui peuvent se payer une protection ont accès à une sécurité que d\'autres n\'ont pas. Il fournit cette protection sans jugement politique — avec une exception.',
  },

  histoire: {
    enfance: {
      titre: 'L\'extraction',
      contenu: 'À 12 ans, il avait vu une extraction impériale dans son quartier — des enfants emmenés, des familles séparées. Il avait essayé d\'intervenir et avait été repoussé physiquement. Il avait décidé qu\'il ne serait plus jamais physiquement incapable d\'intervenir.',
    },
    arrivee: {
      titre: 'Le premier contrat',
      contenu: 'À 22 ans, son premier contrat de garde du corps avait été pour un marchand qui avait entendu parler de ses capacités. Il avait protégé ce marchand pendant 3 mois. À la fin du contrat, il avait une réputation et une règle.',
    },
    premier_conflit: {
      titre: 'Le contrat rompu',
      contenu: 'À 27 ans, un client lui avait demandé de participer à une opération qui impliquait le transport forcé d\'enfants Élus. Il avait rompu le contrat immédiatement, remboursé les arrhes et mis son client face à la règle qu\'il avait acceptée au départ. Il n\'avait pas raisonné. Il avait agi.',
    },
    revelation: {
      titre: 'La confiance de Thyrekavel',
      contenu: 'Thyrekavel (275) lui avait confié une mission de protection dans une zone de saturation électrique de l\'Isthme — des Élus en danger d\'identification. Il avait accepté. Ce n\'était pas une mission Dissidente officiellement. C\'était une mission qui répondait à sa règle.',
    },
    etat_actuel: {
      titre: 'La mission de Virex',
      contenu: 'Il est à Virex. Vashera (266) lui a transmis une mission — protection des déplacements des 39 enfants Élus de Sarevolt (350) pendant une période de risque élevé. C\'est la mission la plus directement alignée avec sa règle qu\'il ait jamais eue. Il ne demande pas de rémunération au-dessus des frais.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kressombal_39_enfants',
      titre: 'La mission des 39',
      description: 'Vashera (266) lui a transmis une protection pour les 39 enfants Élus de Sarevolt (350) pendant la période de risque liée à la démonstration de Kasevolt (360). C\'est la mission la plus alignée avec sa règle. Sa règle qui était une limite est devenue une orientation. Il est à Virex pour ça.',
      personnages_impliques: [275, 266],
      declencheur: 'Mission de protection pour les 39 enfants Élus de Virex transmise par Vashera',
      consequence: 'Présence à Virex pendant la période de démonstration de Kasevolt — protection physique directe',
    },
    {
      id: 'kressombal_regle',
      titre: 'La règle comme boussole',
      description: 'Sa règle unique — ne jamais travailler pour ceux qui font du mal aux enfants — a toujours été une limite négative. À Virex, avec les 39 enfants Élus, elle devient une direction positive. Il n\'a pas changé. Les circonstances ont convergé vers le seul endroit où sa règle est une raison d\'être plutôt qu\'une contrainte.',
      personnages_impliques: [350, 266],
      declencheur: 'Convergence entre sa règle de vie et la situation des 39 enfants Élus',
      consequence: 'Engagement qui dépasse le contrat — investissement personnel dans la protection des 39',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Garde du corps sans affiliation à Virex pour la protection des 39 enfants Élus de Sarevolt (350). Sa règle unique — ne pas travailler pour ceux qui font du mal aux enfants — est ici une orientation, pas une contrainte. Présence pendant la période de démonstration de Kasevolt.',

  relations: [
    { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Contact pour les missions impliquant des Élus. Lui fait confiance pour les situations de protection.' },
    { id: 266, nom: 'Vashera', type: 'allié', note: 'Transmet des missions Dissidentes sans affiliation formelle. A transmis la mission des 39 enfants.' },
  ],

  combat: {
    sorts: [
      'Interposition physique (Combat) — placement du corps entre la menace et le protégé — absorption d\'impact',
      'Stabilisation de zone (Normal) — évaluation et contrôle d\'un espace pour la sécurité du protégé — surveillance active',
      'Neutralisation directe (Combat + Normal) — frappe combinée avec adaptation à l\'environnement — incapacitation de la menace',
    ],
  },

  image_prompts: [
    {
      id: 'kressombal_protection',
      description: 'Kressombal à Virex — debout entre un groupe d\'enfants Élus et une menace hors cadre. Ses cicatrices visibles aux bras, sa posture de protection absolue. Son expression est de calme concentré — il est exactement là où il veut être.',
      style: 'réaliste garde du corps Homme-Lien, protection d\'enfants Élus à Virex, cicatrices visibles, calme concentré',
    },
  ],

  lore_long: `Kressombal est garde du corps sans affiliation avec une règle unique : ne jamais travailler pour ceux qui font du mal aux enfants. Il a rompu des contrats pour cette règle. Il le referait.

À Virex, Vashera (266) lui a transmis la protection des 39 enfants Élus de Sarevolt (350) pendant la période de risque liée à la démonstration de Kasevolt (360).

Sa règle qui était une limite est devenue une raison d'être. Il ne demande pas de rémunération au-dessus des frais.`,
};

export default kressombal;
