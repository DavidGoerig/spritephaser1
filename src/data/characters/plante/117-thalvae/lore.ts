import type { PersonnageLoreComplet } from '../../../lore-types';

const thalvae: PersonnageLoreComplet = {
  id: 117,
  nom: 'Thalvae',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Sylvan de taille moyenne, avec la posture de quelqu\'un qui a appris à ne pas appartenir — ni droite d\'autorité, ni basse de soumission. Elle tient.',
    peau: 'Écorce sombre avec des racines fines qui courent le long de ses bras — les marques d\'une Sylvan qui vit près du sol, pas dans les canopées.',
    yeux: 'Verts-gris avec une qualité de quelqu\'un qui a vu les deux côtés et a choisi de ne choisir aucun.',
    vetements: 'Tenue de forêt de transition — ni la tenue des Conservateurs, ni celle des Gardiens. Elle habite entre.',
    signes_particuliers: 'Elle vit dans la forêt de transition — une zone entre territoires de factions. Elle a refusé de choisir. Cet exil est volontaire.',
  },

  psychologie: {
    dominante: 'Exilée Sylvan qui a refusé de choisir entre les factions de Sylvera — ni Conservateurs, ni Gardiens. Elle vit dans la forêt de transition, un espace que les deux factions revendiquent sans contrôler. Son refus de choisir est politique, pas neutre.',
    mecanisme_de_defense: 'La forêt de transition comme protection physique. Ce qu\'aucune faction ne contrôle entièrement ne peut pas être utilisé entièrement contre elle.',
    contradiction_interne: 'Elle a refusé de choisir mais elle n\'est pas neutre. Elle aide ceux que les factions excluent. Cette aide la positionne malgré elle.',
    rapport_aux_autres: 'Sylvae (31) est dans son réseau — une figure qui comprend son refus. Kessyn (32) est dans son réseau aussi — une autre perspective sur Sylvera.',
    vision_du_monde: 'Sylvera a des factions parce que des gens ont décidé que la forêt devait être gérée d\'une seule façon. Elle croit qu\'aucune gestion unique ne peut s\'appliquer à une forêt entière.',
  },

  histoire: {
    enfance: {
      titre: 'Le choix imposé',
      contenu: 'Née dans une communauté mixte à la frontière de deux territoires. Elle avait grandi avec les deux cultures — Conservateurs et Gardiens. À 40 ans, on lui avait demandé de choisir. Elle avait refusé.',
    },
    arrivee: {
      titre: 'L\'exil',
      contenu: 'Le refus de choisir avait eu des conséquences. Sa communauté ne pouvait pas la garder sans frictions. Elle avait choisi de partir vers la forêt de transition plutôt que de rester à imposer une tension.',
    },
    premier_conflit: {
      titre: 'La forêt de transition',
      contenu: 'La forêt de transition n\'était pas neutre — elle était contestée. Les deux factions la revendiquaient. Elle y vivait quand même. Sa présence était devenue un argument dans leur dispute.',
    },
    revelation: {
      titre: 'L\'aide',
      contenu: 'Elle avait commencé à aider des Sylvan qui refusaient aussi de choisir — des exilés comme elle, ou des jeunes qui cherchaient une troisième voie. Cette aide n\'était pas organisée. Elle était simplement là.',
    },
    etat_actuel: {
      titre: 'La transition',
      contenu: 'Elle vit dans la forêt de transition. Elle aide. Elle refuse de se nommer comme faction. Elle sait que ça ne durera peut-être pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalvae_territoire',
      titre: 'La forêt de transition revendiquée',
      description: 'La forêt de transition où vit Thalvae est revendiquée par les deux factions. Si l\'une d\'elles décide de l\'occuper — pour une raison stratégique ou lors d\'une crise — Thalvae n\'aura plus de territoire neutre. Elle devra choisir : partir, se ranger d\'un côté, ou résister.',
      personnages_impliques: [31, 32],
      declencheur: 'Une faction décidant d\'occuper la forêt de transition',
      consequence: 'Thalvae forcée de choisir — ou de créer une troisième position explicite',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Exilée Sylvan vivant dans la forêt de transition. A refusé de choisir entre les factions. Aide les Sylvans sans faction.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'contact', note: 'Comprend son refus de choisir.' },
    { id: 32, nom: 'Kessyn', type: 'contact', note: 'Autre perspective sur Sylvera.' },
  ],

  combat: {
    sorts: [
      'Racines de transition (Plante) — appel aux racines de la forêt intermédiaire — terrain instable pour l\'adversaire',
      'Enveloppement forestier (Plante) — camouflage dans la végétation — disparition',
    ],
  },

  image_prompts: [
    {
      id: 'thalvae_foret',
      description: 'Thalvae dans la forêt de transition de Sylvera — une Sylvan seule entre deux types de végétation, ni les arbres-mémoire des Conservateurs ni les zones brûlées des Gardiens. Son expression est de quelqu\'un qui a choisi de ne pas choisir et qui vit avec les conséquences.',
      style: 'réaliste Sylvan exilée, forêt de transition Sylvera, refus de faction, territoire contesté',
    },
  ],

  lore_long: `Thalvae a refusé de choisir entre Conservateurs et Gardiens à Sylvera. Elle vit dans la forêt de transition — un espace entre territoires.

Elle aide les Sylvan sans faction. Cette aide la positionne malgré son refus de se nommer.

Si une faction occupe la forêt de transition, elle n'aura plus de territoire neutre.`,
};

export default thalvae;
