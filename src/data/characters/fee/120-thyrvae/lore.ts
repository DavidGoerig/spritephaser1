import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrvae: PersonnageLoreComplet = {
  id: 120,
  nom: 'Thyrvae',
  element: 'Fée',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Sylvan-Fée — une combinaison rare. Taille petite avec une présence qui déborde son corps physique. Elle se déplace comme si l\'espace autour d\'elle participait à son mouvement.',
    peau: 'Écorce argentée avec des luminescences féeriques — son double élément est visible simultanément. Les Sylvan-Fées sont si rares qu\'on les confond parfois avec des esprits forestiers.',
    yeux: 'Verts-or avec une qualité de communication directe — elle voit ce que les arbres montrent sans médiation.',
    vetements: 'Aucune tenue de faction — elle n\'a jamais appartenu à aucune et les deux factions le savent.',
    signes_particuliers: 'Elle communique avec les arbres-mémoire de Sylvera. Les deux factions voudraient la récupérer. Elle les évite toutes les deux.',
  },

  psychologie: {
    dominante: 'Fée Sylvan (une combinaison rarissime) qui communique directement avec les arbres-mémoire de Sylvera. Les arbres-mémoire sont des archives vivantes de la Faim des Racines. Les deux factions voudraient accéder à cette communication — elle évite les deux.',
    mecanisme_de_defense: 'La mobilité et la rareté comme protection. Une Sylvan-Fée peut se déplacer dans les forêts d\'une façon que ni les Conservateurs ni les Gardiens ne peuvent suivre facilement.',
    contradiction_interne: 'Elle communique avec les arbres-mémoire — des archives de ce qui s\'est passé. Cette information pourrait résoudre des conflits ou les exacerber. Elle ne la partage pas parce qu\'elle ne sait pas laquelle ce serait.',
    rapport_aux_autres: 'Leth (34) est dans son réseau — une autre Fée qui comprend sa position. Thalorn (33) est aussi dans son réseau — une figure de Sylvera qui ne cherche pas à la récupérer.',
    vision_du_monde: 'Les arbres-mémoire ne parlent pas en mots. Ils montrent des séquences — des relations entre événements. Elle est la traductrice. La traduction est déjà une interprétation.',
  },

  histoire: {
    enfance: {
      titre: 'La rareté',
      contenu: 'Née avec les deux éléments — Plante et Fée — une combinaison si rare qu\'elle n\'avait pas de précédent dans la mémoire récente de Sylvera. Personne ne savait quoi faire d\'elle. Elle avait appris seule.',
    },
    arrivee: {
      titre: 'Les arbres-mémoire',
      contenu: 'À 20 ans, elle avait fait le premier contact avec un arbre-mémoire. Les images qu\'elle avait reçues l\'avaient perturbée profondément — des séquences de la Faim des Racines, non-médiatisées par aucune faction.',
    },
    premier_conflit: {
      titre: 'Les factions',
      contenu: 'Les deux factions avaient appris qu\'elle communiquait avec les arbres-mémoire. Les Conservateurs voulaient un accès "pour la préservation". Les Gardiens voulaient un accès "pour la gestion". Elle avait refusé les deux.',
    },
    revelation: {
      titre: 'Ce que les arbres disent',
      contenu: 'Les arbres-mémoire ne confirmaient ni la version Conservatrice ni la version Gardienne de la Faim des Racines. Ils montraient quelque chose de plus complexe — et de moins utilisable comme argument de faction.',
    },
    etat_actuel: {
      titre: 'L\'évitement',
      contenu: 'Elle se déplace dans les forêts de Sylvera. Elle communique avec les arbres-mémoire. Elle n\'en parle à personne.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrvae_memoire',
      titre: 'Ce que les arbres ont vu',
      description: 'Thyrvae est la seule à communiquer avec les arbres-mémoire de Sylvera — les seuls témoins directs de la Faim des Racines. Si quelqu\'un (Leth, Thalorn, ou un personnage principal) lui donne une raison suffisante pour partager ce qu\'elle a vu, les deux factions auront accès à une version de la Faim qui ne confirme ni l\'une ni l\'autre.',
      personnages_impliques: [34, 33],
      declencheur: 'Quelqu\'un lui donnant une raison de partager ce que les arbres lui ont montré',
      consequence: 'La version des arbres-mémoire révélée — plus complexe et moins factionnelle que les deux versions officielles',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Sylvan-Fée rare communiquant avec les arbres-mémoire. Les deux factions la veulent. Elle les évite. Détient la version la plus directe de la Faim.',

  relations: [
    { id: 34, nom: 'Leth', type: 'contact', note: 'Autre Fée qui comprend sa position.' },
    { id: 33, nom: 'Thalorn', type: 'contact', note: 'Ne cherche pas à la récupérer.' },
  ],

  combat: {
    sorts: [
      'Voix des arbres (Fée) — communication avec la végétation — perception et perturbation de terrain',
      'Lumière féerique (Fée) — manifestation lumineuse — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'thyrvae_arbre',
      description: 'Thyrvae en contact avec un arbre-mémoire de Sylvera — une Sylvan-Fée avec des luminescences Fée et Plante simultanées, main posée sur une écorce ancienne. Les images que l\'arbre lui montre sont visibles dans son expression. Aucune faction ne la regarde.',
      style: 'réaliste Sylvan-Fée rare, arbre-mémoire de Sylvera, communication directe, double élément, indépendance farouche',
    },
  ],

  lore_long: `Thyrvae communique avec les arbres-mémoire de Sylvera — les seuls témoins directs de la Faim des Racines.

Les deux factions la veulent. Elle les évite toutes les deux.

Ce que les arbres lui ont montré ne confirme ni la version Conservatrice ni la version Gardienne. C'est pourquoi elle n'en parle pas.`,
};

export default thyrvae;
