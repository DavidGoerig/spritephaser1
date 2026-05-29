import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrsh: PersonnageLoreComplet = {
  id: 159,
  nom: 'Nyrsh',
  element: 'Insecte',
  espece: 'Umbrien',
  region: 'Vel\'Nox',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de 22 ans — jeune, avec une vitalité des marchés nocturnes. Il ne connaît que Vel\'Nox.',
    peau: 'Gris Umbrien jeune avec des reflets chitineux d\'Insecte — son élément est vivace et pas encore pleinement contrôlé.',
    yeux: 'Bruns-noirs avec une qualité de quelqu\'un qui voit tout comme normal parce qu\'il ne connaît pas autre chose.',
    vetements: 'Tenue des marchés nocturnes — pratique, adaptée aux Trois Couches où il a grandi.',
    signes_particuliers: 'Il a grandi dans les marchés nocturnes. Il ne connaît pas le monde au-dessus de Vel\'Nox. Pour lui, l\'obscurité n\'est pas un manque — c\'est le monde.',
  },

  psychologie: {
    dominante: 'Jeune Umbrien de 22 ans né et élevé dans les marchés nocturnes de Vel\'Nox après le Vol de la Lumière. Il ne connaît pas de lumière naturelle — les insectes bioluminescents de Thyrav (150) et les luminescences élémentaires sont son seul référentiel lumineux. Le "monde d\'en haut" est une abstraction.',
    mecanisme_de_defense: 'L\'absence de référence alternative comme paix. Il n\'a pas de monde perdu à regretter. Vel\'Nox est simplement le monde.',
    contradiction_interne: 'Sa génération est la première à n\'avoir aucun souvenir direct ni indirect de la lumière naturelle. Ce qu\'ils construisent est différent de ce que les anciens souhaitent restaurer. Leur relation au Vol de la Lumière est fondamentalement différente.',
    rapport_aux_autres: 'Tharyn (50) est dans son réseau — une figure des marchés nocturnes que tout le monde connaît. Il est né après le Vol — sa perspective sur l\'histoire de Vel\'Nox est celle de quelqu\'un qui n\'en est pas traumatisé.',
    vision_du_monde: 'Vel\'Nox est une cité qui fonctionne. Les marchés nocturnes ont leurs règles, leurs factions, leur économie. Il ne comprend pas le désir de "restaurer" quelque chose qu\'il n\'a jamais connu.',
  },

  histoire: {
    enfance: {
      titre: 'Les marchés nocturnes',
      contenu: 'Né dans les marchés nocturnes de Vel\'Nox. Ses parents étaient des commerçants des Trois Couches. Son enfance était les marchés, les insectes bioluminescents, les luminescences élémentaires.',
    },
    arrivee: {
      titre: 'Le monde au-dessus',
      contenu: 'À 18 ans, quelqu\'un lui avait décrit le monde au-dessus — des cités avec lumière naturelle, espaces ouverts, végétation visible. Il avait écouté avec l\'attention de quelqu\'un qui entend une description d\'un pays étranger.',
    },
    premier_conflit: {
      titre: 'La nostalgie des anciens',
      contenu: 'Les anciens de Vel\'Nox parlaient de "restaurer la lumière" avec une intensité qu\'il ne comprenait pas entièrement. Pour lui, la lumière était une question technique, pas nostalgique.',
    },
    revelation: {
      titre: 'La différence de génération',
      contenu: 'Il avait compris qu\'il était la première génération pour qui le Vol de la Lumière était de l\'histoire, pas du traumatisme. Cet écart de perception entre sa génération et les anciens était fondamental.',
    },
    etat_actuel: {
      titre: 'Les marchés',
      contenu: 'Il vit dans les marchés nocturnes. Il apprend les règles. Il ne ressent pas le manque que les anciens ressentent.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrsh_generation',
      titre: 'La génération sans mémoire',
      description: 'Nyrsh représente la première génération d\'Umbriens pour qui le Vol de la Lumière est de l\'histoire pure. Si un événement à Vel\'Nox confronte directement les anciens et les jeunes — sur la question de restaurer la lumière ou de construire une cité différente — Nyrsh pourrait être l\'expression d\'une position générationnelle que personne n\'a encore articulée.',
      personnages_impliques: [50],
      declencheur: 'Débat ou crise sur la "restauration" de Vel\'Nox qui confronte anciens et jeunes',
      consequence: 'Nyrsh articulant une position générationnelle — une relation au Vol différente de celle des anciens',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Jeune Umbrien né après le Vol de la Lumière. Ne connaît pas d\'autre monde. Sa perspective sur le Vol est historique, pas traumatique.',

  relations: [
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Figure des marchés nocturnes connue de tous.' },
  ],

  combat: {
    sorts: [
      'Nuée d\'insectes (Insecte) — nuée défensive — perturbation d\'adversaire',
      'Bioluminescence (Insecte) — éclat d\'insectes lumineux — éblouissement momentané',
    ],
  },

  image_prompts: [
    {
      id: 'nyrsh_marches',
      description: 'Nyrsh dans les marchés nocturnes de Vel\'Nox — un jeune Umbrien de 22 ans qui navigue les Trois Couches avec l\'aisance de quelqu\'un qui n\'a connu que ça. Autour de lui, les insectes bioluminescents de Thyrav éclairent les étals. Pour lui, c\'est simplement la lumière. Il n\'a pas de référence pour autre chose.',
      style: 'réaliste Umbrien jeune, marchés nocturnes de Vel\'Nox après le Vol, génération sans mémoire de la lumière naturelle, vie ordinaire dans l\'obscurité',
    },
  ],

  lore_long: `Nyrsh a 22 ans. Il est né dans les marchés nocturnes de Vel'Nox après le Vol de la Lumière. Il ne connaît pas d'autre monde.

Pour les anciens, le Vol est un traumatisme. Pour lui, c'est de l'histoire.

Sa génération est la première pour qui Vel'Nox dans l'obscurité est simplement le monde — pas une perte.`,
};

export default nyrsh;
