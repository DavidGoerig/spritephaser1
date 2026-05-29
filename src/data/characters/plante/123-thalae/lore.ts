import type { PersonnageLoreComplet } from '../../../lore-types';

const thalae: PersonnageLoreComplet = {
  id: 123,
  nom: 'Thalae',
  element: 'Plante',
  espece: 'Sylvan',
  region: 'Sylvera',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Sylvan de 300 ans — une des plus vieilles de Sylvera. Elle a la corpulence d\'un très vieil arbre : dense, stable, avec la présence de quelque chose qui a duré.',
    peau: 'Écorce presque grise avec des racines visibles qui courent le long de sa colonne — l\'âge extrême chez les Sylvans rapproche leur corps du bois.',
    yeux: 'Verts anciens avec une qualité de mémoire immédiate. Elle ne se souvient pas de la Faim des Racines. Elle l\'a vécue.',
    vetements: 'Rien d\'une faction — elle est antérieure à leur existence actuelle.',
    signes_particuliers: 'Elle se souvient directement de la Faim des Racines. Elle a 300 ans. Presque personne ne lui demande.',
  },

  psychologie: {
    dominante: 'Sylvan de 300 ans qui a vécu la Faim des Racines directement — elle n\'est pas une mémoire héritée, elle est un témoin vivant. Les deux factions débattent de ce qui s\'est passé. Elle était là. Presque personne ne lui demande.',
    mecanisme_de_defense: 'La patience extrême comme protection. Elle a vécu plus longtemps que les factions actuelles n\'existent. Leurs disputes ne sont pas nouvelles pour elle.',
    contradiction_interne: 'Elle a un témoignage direct de la Faim. Personne ne lui demande — les factions préfèrent leurs versions. Et elle ne se propose pas. Il y a une raison à ça qu\'elle n\'a jamais formulée.',
    rapport_aux_autres: 'Leth (34) est dans son réseau — un contact contemporain qui comprend la valeur de sa mémoire. Thyrvae (120) est une Fée-Sylvan qui communique avec les arbres-mémoire — des archives que Thalae a alimentées.',
    vision_du_monde: 'La Faim des Racines n\'était pas ce que les Conservateurs disent ni ce que les Gardiens disent. C\'était plus compliqué et moins héroïque pour toutes les parties. Cette complexité est ce que les factions ne veulent pas entendre.',
  },

  histoire: {
    enfance: {
      titre: 'Avant la Faim',
      contenu: 'Elle est née il y a 300 ans — avant la Faim des Racines. Elle se souvient de Sylvera avant : le réseau racinaire actif, les forêts communicantes, la façon dont les décisions se prenaient sans factions.',
    },
    arrivee: {
      titre: 'La Faim',
      contenu: 'Elle avait 50 ans pendant la Faim des Racines. Elle avait vu les deux camps — ceux qui voulaient brûler et ceux qui voulaient préserver. Elle avait vu aussi ceux qui n\'étaient ni l\'un ni l\'autre et qui avaient disparu de l\'histoire officielle.',
    },
    premier_conflit: {
      titre: 'L\'oubli',
      contenu: 'Les premières fois que des Sylvans lui avaient demandé de raconter la Faim, ils n\'avaient retenu que les parties qui confirmaient leur version. Elle avait cessé de témoigner spontanément.',
    },
    revelation: {
      titre: 'Presque personne ne demande',
      contenu: '200 ans après la Faim, les factions débattent de ce qui s\'est passé sans lui demander. Elle a compris que cette absence de demande était un choix — pas un oubli.',
    },
    etat_actuel: {
      titre: 'La mémoire silencieuse',
      contenu: 'Elle vit. Elle se souvient. Elle attend qu\'on lui pose la bonne question — ou quelqu\'un capable d\'entendre la réponse.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalae_temoignage',
      titre: 'La question que personne ne pose',
      description: 'Thalae est le seul témoin vivant de la Faim des Racines. Les deux factions débattent de ce qui s\'est passé — elle était là. Si quelqu\'un lui pose la question de la bonne façon (pas pour confirmer une version, mais pour comprendre ce qui s\'est passé), son témoignage changera les termes du débat.',
      personnages_impliques: [34, 120],
      declencheur: 'Quelqu\'un capable d\'entendre un témoignage complexe lui posant la question directement',
      consequence: 'La version de la Faim selon un témoin direct — plus complexe et moins utilisable par les factions',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Témoin direct de la Faim des Racines. 300 ans. Presque personne ne lui demande. Sa mémoire est la version la plus précise disponible.',

  relations: [
    { id: 34, nom: 'Leth', type: 'contact', note: 'Comprend la valeur de sa mémoire.' },
    { id: 120, nom: 'Thyrvae', type: 'contact', note: 'Communique avec les arbres-mémoire que Thalae a alimentés.' },
  ],

  combat: {
    sorts: [
      'Ancienneté (Plante) — connexion avec les racines profondes de Sylvera — contrôle de terrain massif',
      'Voix ancienne (Plante) — résonance qui affecte la végétation sur une grande zone — perturbation durable',
    ],
  },

  image_prompts: [
    {
      id: 'thalae_memoire',
      description: 'Thalae dans une forêt ancienne de Sylvera — une Sylvan de 300 ans dont le corps ressemble à un arbre très vieux. Elle regarde quelque chose de lointain. Autour d\'elle, les forêts portent les traces de la Faim des Racines. Elle était là quand ça s\'est passé.',
      style: 'réaliste Sylvan très ancienne, Sylvera, témoin vivant de la Faim des Racines, mémoire directe, corps arbrifié',
    },
  ],

  lore_long: `Thalae a 300 ans. Elle était là pendant la Faim des Racines. Elle se souvient directement de ce qui s'est passé.

Presque personne ne lui demande. Les factions préfèrent leurs versions.

Sa mémoire est plus complexe et moins héroïque pour toutes les parties. C'est pourquoi on ne lui demande pas.`,
};

export default thalae;
