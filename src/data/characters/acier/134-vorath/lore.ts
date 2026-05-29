import type { PersonnageLoreComplet } from '../../../lore-types';

const vorath: PersonnageLoreComplet = {
  id: 134,
  nom: 'Vorath',
  element: 'Acier',
  espece: 'Chthonien',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Chthonien de 62 ans, ingénieur structurel — regard qui évalue les structures avant les personnes.',
    peau: 'Pierre grise avec des inclusions métalliques — l\'élément Acier chez un Chthonien produit cette texture particulière.',
    yeux: 'Gris-argent avec une qualité de calcul permanent. Il mesure les tolérances.',
    vetements: 'Tenue d\'ingénieur de la Technocratie avec les outils de mesure attachés à la ceinture.',
    signes_particuliers: 'Il a conçu les grilles de sécurité de la Fosse Interdite. Ces grilles n\'ont pas été inspectées depuis 8 ans. Il ne sait pas si elles tiennent encore.',
  },

  psychologie: {
    dominante: 'Ingénieur de tunnels de la Technocratie. Il a conçu les grilles de sécurité de la Fosse Interdite. Ces grilles n\'ont pas été inspectées depuis 8 ans — il le sait, et personne d\'autre ne semble s\'en préoccuper. Son travail était bon. Ce qu\'il est devenu sans maintenance est une autre question.',
    mecanisme_de_defense: 'La confiance dans la qualité initiale. Il a bien conçu les grilles — les tolérances étaient larges. Il espère que ça compense le manque de maintenance.',
    contradiction_interne: 'Il connaît la durée de vie prévue de ses grilles. Sans inspection en 8 ans, cette durée est dépassée. Ses calculs initiaux supposaient une maintenance régulière. Cette maintenance n\'a pas eu lieu.',
    rapport_aux_autres: 'Draven II (40) est dans son réseau — quelqu\'un qui a une position institutionnelle sur la Fosse. La Fosse Interdite est son sujet principal.',
    vision_du_monde: 'Une structure bien conçue peut tolérer un manque de maintenance sur une période limitée. 8 ans dépasse cette période. Il attend qu\'on lui demande d\'inspecter — personne ne lui a demandé.',
  },

  histoire: {
    enfance: {
      titre: 'L\'ingénierie',
      contenu: 'Formation d\'ingénieur structurel à la Technocratie d\'Ormn-Dur. Spécialisation dans les structures de confinement — tunnels, grilles, parois.',
    },
    arrivee: {
      titre: 'Les grilles de la Fosse',
      contenu: 'Il avait conçu les grilles de sécurité de la Fosse Interdite il y a 12 ans. Un travail solide — des tolérances larges, des matériaux de qualité. Il était satisfait du résultat.',
    },
    premier_conflit: {
      titre: 'L\'absence d\'inspection',
      contenu: 'Après 4 ans sans inspection programmée, il avait demandé un ordre de maintenance. On lui avait dit que le budget était alloué à d\'autres priorités. Il avait relancé 2 ans plus tard. Même réponse.',
    },
    revelation: {
      titre: '8 ans',
      contenu: 'Il y avait maintenant 8 ans sans inspection. Ses calculs de durée de vie supposaient une inspection tous les 3 ans. Il était 2,5 cycles au-delà. Il ne savait pas si les grilles tenaient encore.',
    },
    etat_actuel: {
      titre: 'L\'ingénieur sans information',
      contenu: 'Il attend qu\'on lui demande d\'inspecter. Personne ne lui demande. Il n\'a pas poussé la demande plus fort parce qu\'il ne veut pas connaître la réponse.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vorath_grilles',
      titre: 'Les grilles que personne n\'a inspectées',
      description: 'Vorath a conçu les grilles de sécurité de la Fosse Interdite il y a 12 ans. Elles n\'ont pas été inspectées depuis 8 ans. Si un incident se produit — une rupture, une brèche — et que les grilles cèdent, Vorath sera le concepteur d\'une structure défaillante. Il aura ses notes de maintenance refusées comme preuve que ce n\'était pas sa faute.',
      personnages_impliques: [40],
      declencheur: 'Incident à la Fosse Interdite impliquant les grilles de sécurité',
      consequence: 'Vorath confronté à l\'état de ses grilles — et à qui a refusé les inspections',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Concepteur des grilles de sécurité de la Fosse. Non inspectées depuis 8 ans. Attend qu\'on lui demande — personne ne lui demande.',

  relations: [
    { id: 40, nom: 'Draven II', type: 'contact', note: 'Position institutionnelle sur la Fosse.' },
  ],

  combat: {
    sorts: [
      'Armure d\'acier (Acier) — renforcement structurel — défense renforcée',
      'Grille de confinement (Acier) — création de barrière métallique — contrôle de zone',
    ],
  },

  image_prompts: [
    {
      id: 'vorath_fosse',
      description: 'Vorath regardant les grilles de sécurité de la Fosse Interdite à Ormn-Dur — un Chthonien de 62 ans qui examine de loin des structures qu\'il a conçues et qui n\'ont pas été inspectées depuis 8 ans. Son expression est de quelqu\'un qui calcule une probabilité qu\'il ne veut pas formuler.',
      style: 'réaliste Chthonien ingénieur, Fosse Interdite d\'Ormn-Dur, grilles non-inspectées, incertitude structurelle',
    },
  ],

  lore_long: `Vorath a conçu les grilles de sécurité de la Fosse Interdite. Elles n'ont pas été inspectées depuis 8 ans.

Ses calculs supposaient une inspection tous les 3 ans. Il est 2,5 cycles au-delà. Il ne sait pas si elles tiennent encore.

Il attend qu'on lui demande d'inspecter. Personne ne lui demande.`,
};

export default vorath;
