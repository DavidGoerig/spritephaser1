import type { PersonnageLoreComplet } from '../../../lore-types';

const vrasketh: PersonnageLoreComplet = {
  id: 220,
  nom: 'Vrasketh',
  element: 'Feu',
  element2: 'Combat',
  espece: 'Pyrien',
  region: 'Varkhôl',
  faction: 'Parti du Feu',

  apparence: {
    taille_corpulence: 'Pyrien de 29 ans, garde du corps — corpulence d\'un combattant dont la loyauté est inscrite dans chaque mouvement.',
    peau: 'Rouge-ardente avec des marques d\'entraînement intense — il s\'est préparé pour ce rôle depuis l\'adolescence.',
    yeux: 'Orangés avec une qualité de dévotion absolue. Il ne questionne pas. Il protège.',
    vetements: 'Tenue du Parti du Feu avec des éléments de protection personnelle — il représente Orkhael et se protège simultanément.',
    signes_particuliers: 'Il est le garde du corps d\'Orkhael (11) depuis 4 ans. Sa loyauté est absolue et non-questionnée. Il ne demande pas pourquoi Orkhael fait ce qu\'il fait — il s\'assure qu\'Orkhael peut le faire.',
  },

  psychologie: {
    dominante: 'Garde du corps d\'Orkhael (11) pour le Parti du Feu à Varkhôl. Son double élément Feu/Combat en fait un protecteur exceptionnellement efficace. Sa loyauté à Orkhael est totale — pas parce qu\'il a évalué les positions d\'Orkhael et les a trouvées justes, mais parce que c\'est son rôle et qu\'il l\'a pleinement adopté.',
    mecanisme_de_defense: 'La loyauté absolue comme simplification. Il n\'a pas à décider quoi faire — il protège Orkhael. Cette clarté lui permet d\'agir sans hésitation.',
    contradiction_interne: 'Sa loyauté absolue signifie qu\'il protégera Orkhael même si les décisions d\'Orkhael sont erronées ou nuisibles. Sa dévotion l\'empêche d\'être le type de garde du corps qui aurait averti Orkhael d\'un problème avant qu\'il devienne une crise.',
    rapport_aux_autres: 'Orkhael (11) est son protégé absolu. Gravel (3) est dans son réseau — un autre Pyrien important de l\'entourage d\'Orkhael avec qui il coordonne la sécurité.',
    vision_du_monde: 'Orkhael est important pour Varkhôl. Les personnes importantes ont besoin de protection. Il fournit cette protection. Cette chaîne est complète pour lui.',
  },

  histoire: {
    enfance: {
      titre: 'Le Parti du Feu',
      contenu: 'Né dans une famille Pyrien du Parti du Feu. Il avait grandi avec Orkhael (11) comme figure de référence — un leader dont les positions représentaient ce que le Feu devait être. Son entraînement physique avait été orienté vers la protection de cette figure.',
    },
    arrivee: {
      titre: 'La protection',
      contenu: 'Il avait commencé à escorter Orkhael à 22 ans — d\'abord informellement, puis formellement comme garde du corps principal à 25 ans. Quatre ans de protection sans incident grave.',
    },
    premier_conflit: {
      titre: 'La menace',
      contenu: 'Une tentative d\'intimidation contre Orkhael — pas une agression physique, mais une présence menaçante lors d\'une réunion. Vrasketh avait répondu avec une présence physique qui avait clos la situation. Orkhael lui avait fait confiance pour l\'escalade.',
    },
    revelation: {
      titre: 'La loyauté comme aveuglement',
      contenu: 'Il avait protégé Orkhael lors d\'une décision qui avait eu des conséquences négatives pour des tiers. Il n\'avait pas eu l\'impression que sa loyauté était en cause — il protégeait, pas il conseillait. La distinction lui paraissait claire.',
    },
    etat_actuel: {
      titre: 'Le garde',
      contenu: 'Il protège. Orkhael opère. La loyauté ne questionne pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vrasketh_protection',
      titre: 'La protection sans conseil',
      description: 'Vrasketh protège Orkhael (11) sans questionner ses décisions. Si Orkhael prend une décision qui met en danger des personnes que Vrasketh connaît — ou qui expose Orkhael à une menace que Vrasketh voit venir mais qu\'Orkhael n\'a pas demandé son avis — la limite entre protection et loyauté aveugle sera exposée.',
      personnages_impliques: [11, 3],
      declencheur: 'Orkhael prenant une décision visible comme dangereuse que Vrasketh ne lui a pas signalée',
      consequence: 'Orkhael exposé à des conséquences qu\'une protection plus complète aurait pu prévenir — et Vrasketh confronté à la limite de sa définition du rôle de garde du corps',
    },
  ],

  arcs: ['arc_rupture_thermique'],
  position_dans_arc: 'Garde du corps d\'Orkhael (11) pour le Parti du Feu à Varkhôl. Loyauté absolue et non-questionnée. Double élément Feu/Combat.',

  relations: [
    { id: 11, nom: 'Orkhael', type: 'hierarchie', note: 'Protégé absolu — loyauté totale depuis 4 ans.' },
    { id: 3, nom: 'Gravel', type: 'contact', note: 'Autre Pyrien de l\'entourage d\'Orkhael avec qui il coordonne la sécurité.' },
  ],

  combat: {
    sorts: [
      'Interposition de feu (Feu/Combat) — s\'interposer entre une menace et le protégé avec barrière thermique — protection maximale',
      'Neutralisation de menace (Combat) — élimination rapide d\'une menace identifiée — efficacité de protection',
    ],
  },

  image_prompts: [
    {
      id: 'vrasketh_protection',
      description: 'Vrasketh debout derrière Orkhael (11) lors d\'une réunion à Varkhôl — un Pyrien de 29 ans dont la posture indique une vigilance totale. Il évalue chaque personne dans la pièce. Orkhael parle. Vrasketh n\'écoute pas le contenu — il surveille les réactions à ce contenu.',
      style: 'réaliste Pyrien garde du corps, Varkhôl, Parti du Feu, protection d\'Orkhael, loyauté absolue, double élément Feu/Combat',
    },
  ],

  lore_long: `Vrasketh est le garde du corps d'Orkhael (11) pour le Parti du Feu à Varkhôl depuis 4 ans. Sa loyauté est absolue et non-questionnée.

Son rôle est de protéger, pas de conseiller. Cette distinction est claire pour lui. Elle a des limites qu'il n'a pas encore rencontrées.

Il est d'une efficacité exceptionnelle dans sa définition de son rôle.`,
};

export default vrasketh;
