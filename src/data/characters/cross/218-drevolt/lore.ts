import type { PersonnageLoreComplet } from '../../../lore-types';

const drevolt: PersonnageLoreComplet = {
  id: 218,
  nom: 'Drevolt',
  element: 'Feu',
  element2: 'Combat',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Pyrien de 39 ans, ancien combattant — corpulence de quelqu\'un dont le corps a été outil pendant 15 ans et s\'est reconverti graduellement.',
    peau: 'Rouge-ardente avec des marques de combat professionnel.',
    yeux: 'Orangés avec une qualité de quelqu\'un qui évalue des situations de protection rapidement.',
    vetements: 'Tenue pratique adaptable — il change selon les clients. Pas d\'affiliation visible.',
    signes_particuliers: 'Ses loyautés varient selon ses clients actuels. Il protège ce pour quoi il est payé et rien de plus. Cette neutralité contractuelle est sa marque professionnelle.',
  },

  psychologie: {
    dominante: 'Ancien combattant reconverti en garde du corps privé dans Varkhôl. Il protège ses clients actuels — sans loyauté au-delà du contrat. Sa neutralité est contractuelle : quand le contrat se termine, sa loyauté se termine. Il a protégé des personnes de toutes factions selon ses engagements.',
    mecanisme_de_defense: 'Le contrat comme délimitation. Il fait ce que le contrat dit. Ce que ses clients font en dehors de sa protection est hors de sa responsabilité. La délimitation est précise.',
    contradiction_interne: 'Sa neutralité contractuelle signifie qu\'il a potentiellement protégé des clients qui ont ensuite été en conflit avec d\'autres de ses anciens clients. Il n\'est pas responsable des relations entre ses clients. Mais il a contribué à la capacité de chacun à opérer — ce qui a des effets dans les conflits.',
    rapport_aux_autres: 'Kael (7) est dans son réseau — un ancien associé avec qui il maintient des contacts professionnels. Thyrsavel (217) est son ex-collègue de formation militaire.',
    vision_du_monde: 'La protection est un service. Le service a un prix. Les clients paient le prix pour la protection. Ce qu\'ils font de leur sécurité est leur affaire.',
  },

  histoire: {
    enfance: {
      titre: 'Le combat professionnel',
      contenu: 'Carrière militaire à Varkhôl pendant 15 ans. Il avait développé son double élément en conditions opérationnelles — pas en formation, en terrain réel. Il avait arrêté le militaire à 35 ans.',
    },
    arrivee: {
      titre: 'La reconversion',
      contenu: 'La reconversion en garde du corps avait été naturelle — les compétences étaient les mêmes, les clients différents. Il avait commencé par des clients commerciaux avant de recevoir des demandes de personnes de toutes factions.',
    },
    premier_conflit: {
      titre: 'Le client qui change de camp',
      contenu: 'Un de ses clients avait changé d\'affiliation politique au milieu de son contrat. Sa protection s\'était trouvée en tension avec sa loyauté de contrat. Il avait terminé le contrat — protection jusqu\'à la fin prévue — et refusé le renouvellement.',
    },
    revelation: {
      titre: 'La neutralité maintenue',
      contenu: 'Il avait compris que maintenir une neutralité contractuelle stricte était plus difficile que ça paraissait — des clients qui changeaient, des situations qui évoluaient. Il avait développé des clauses de terminaison plus précises.',
    },
    etat_actuel: {
      titre: 'Le garde du corps',
      contenu: 'Il protège. Le contrat actuel est en cours. La loyauté suivra le prochain contrat.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drevolt_contrat',
      titre: 'Le conflit de loyautés',
      description: 'Drevolt protège ses clients actuels selon les termes du contrat. Si deux de ses anciens clients — l\'un Dissident, l\'autre Empire — entrent en conflit direct, sa neutralité passée aura contribué à la capacité des deux à opérer. Il n\'est pas responsable du conflit, mais il l\'a rendu plus équilibré.',
      personnages_impliques: [7, 217],
      declencheur: 'Deux anciens clients de Drevolt entrant en conflit direct',
      consequence: 'Drevolt confronté à la réalité que sa neutralité contractuelle a des effets sur l\'équilibre des conflits entre ses anciens clients',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Garde du corps privé indépendant à Varkhôl. Loyauté contractuelle — pas d\'affiliation au-delà du contrat. A protégé des clients de toutes factions.',

  relations: [
    { id: 7, nom: 'Kael', type: 'contact', note: 'Ancien associé avec qui il maintient des contacts professionnels.' },
    { id: 217, nom: 'Thyrsavel', type: 'contact', note: 'Ex-collègue de formation militaire.' },
  ],

  combat: {
    sorts: [
      'Protection de corps (Combat) — interposition défensive entre client et menace — défense absolue',
      'Neutralisation rapide (Feu/Combat) — attaque combinée pour neutraliser une menace sans temps mort — efficacité contractuelle',
    ],
  },

  image_prompts: [
    {
      id: 'drevolt_protection',
      description: 'Drevolt accompagnant un client anonyme dans un marché de Varkhôl — un Pyrien de 39 ans dont la présence physique dégage une menace passive. Il n\'identifie pas son client. Il évalue constamment les menaces dans son environnement. Son contrat est clair. Il le respecte.',
      style: 'réaliste Pyrien garde du corps, Varkhôl, neutralité contractuelle, protection professionnelle, double élément Feu/Combat',
    },
  ],

  lore_long: `Drevolt est garde du corps privé indépendant à Varkhôl. Il a protégé des clients de toutes factions selon des contrats précis.

Sa loyauté suit le contrat — rien de plus, rien de moins. Quand le contrat se termine, la loyauté se termine.

Il a contribué à la capacité de clients opposés à opérer. Les conflits entre eux ont été légèrement plus équilibrés grâce à sa neutralité.`,
};

export default drevolt;
