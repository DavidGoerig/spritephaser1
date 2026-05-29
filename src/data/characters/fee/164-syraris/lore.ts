import type { PersonnageLoreComplet } from '../../../lore-types';

const syraris: PersonnageLoreComplet = {
  id: 164,
  nom: 'Syraris',
  element: 'Fée',
  espece: 'Givrin',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrine-Fée de 400 ans — une combinaison rare chez les Givrin. Elle a l\'apparence d\'une Givrine adulte mais avec une légèreté féerique qui contredit l\'aspect cristallin.',
    peau: 'Blanche-argentée avec des luminescences Fée et Glace simultanées — les deux éléments sont visibles dans sa présence.',
    yeux: 'Bleu-or avec une profondeur de 400 ans. Elle a vu la gelée de Karath se produire.',
    vetements: 'Tenue intemporelle — elle habite des vêtements comme on habite une peau, sans les changer avec les modes.',
    signes_particuliers: 'Elle a vu le gel de Karath (52) en direct. 400 ans après, elle ne parle plus que par métaphores. Ce n\'est pas seulement de l\'âge — c\'est une réponse à quelque chose qu\'elle a vu.',
  },

  psychologie: {
    dominante: 'Givrine-Fée de 400 ans qui a assisté directement au gel de Karath. Ce qu\'elle a vu l\'a changée — elle ne parle plus directement depuis des siècles, seulement par métaphores et images. Cette transformation linguistique est une réponse à quelque chose que le langage direct ne peut pas exprimer.',
    mecanisme_de_defense: 'Les métaphores comme protection contre la précision. Ce qu\'elle a vu au moment du gel de Karath ne peut pas être dit directement — ou ne devrait pas l\'être. Les métaphores permettent de le communiquer à ceux qui peuvent l\'entendre.',
    contradiction_interne: 'Ses métaphores sont sa façon de parler — pas une incapacité. Elle pourrait parler directement. Elle choisit de ne pas le faire. La raison de ce choix n\'est pas claire même pour elle.',
    rapport_aux_autres: 'Le Gel Éternel est son contexte direct — elle était là. Karath (52) est la figure centrale de sa mémoire de 400 ans.',
    vision_du_monde: 'Le gel de Karath n\'était pas ce que la Monarchie dit. Ses métaphores décrivent ce qu\'elle a vu — pour ceux qui savent les lire. Elle ne sait pas si quelqu\'un les a lues correctement.',
  },

  histoire: {
    enfance: {
      titre: 'Avant le gel',
      contenu: 'Elle existait avant Karath. Elle se souvient de Crysalme avant le Gel Éternel — une réalité différente de la stase actuelle.',
    },
    arrivee: {
      titre: 'Le gel de Karath',
      contenu: 'Elle avait vu le moment du gel de Karath — ce que les archives de la Monarchie décrivent comme "l\'acte fondateur du Gel Éternel". Ce qu\'elle a vu ne correspondait pas entièrement à cette description. Après le gel, elle avait cessé de parler directement.',
    },
    premier_conflit: {
      titre: 'Les métaphores',
      contenu: 'Les premières années, des Givrins lui avaient demandé de témoigner sur le gel. Ses métaphores les avaient dérangés — ils voulaient des faits, pas des images. Elle avait continué à répondre en métaphores.',
    },
    revelation: {
      titre: '400 ans',
      contenu: 'Après 400 ans, sa façon de parler était connue et acceptée comme une particularité. Les Givrins qui la consultaient savaient qu\'ils recevraient des métaphores. Certains savaient les lire.',
    },
    etat_actuel: {
      titre: 'Les métaphores',
      contenu: 'Elle parle par métaphores. Quelques Givrins — Thyval (55), parfois — comprennent ce qu\'elle dit.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syraris_gel',
      titre: 'Quelqu\'un qui lit les métaphores',
      description: 'Syraris a vu le gel de Karath en direct. Elle ne parle que par métaphores depuis 400 ans. Si quelqu\'un arrive à Crysalme avec la capacité de lire ses métaphores — Thyval (55), Velsa (58), ou un personnage principal — elle pourra transmettre ce qu\'elle a vu. Cette transmission changera la compréhension du Gel Éternel.',
      personnages_impliques: [52],
      declencheur: 'Quelqu\'un capable de lire ses métaphores et lui posant les bonnes questions',
      consequence: 'Ce qu\'elle a vu lors du gel de Karath révélé — et sa version contradictoire avec la version officielle exposée',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Givrine-Fée de 400 ans. Témoin direct du gel de Karath. Parle uniquement par métaphores depuis 400 ans. Sa mémoire contredit la version officielle.',

  relations: [
    { id: 52, nom: 'Karath', type: 'contact', note: 'Figure centrale de sa mémoire de 400 ans. L\'a vue se geler.' },
  ],

  combat: {
    sorts: [
      'Cristallisation féerique (Fée/Glace) — gel enchanté — contrôle de zone',
      'Voile de glace (Glace) — illusion crystalline — désorientation',
    ],
  },

  image_prompts: [
    {
      id: 'syraris_memoire',
      description: 'Syraris dans un espace de Crysalme — une Givrine-Fée de 400 ans répondant à une question par une métaphore. Son interlocuteur ne comprend pas. Dans ses yeux, 400 ans d\'une mémoire que le langage direct ne peut pas exprimer.',
      style: 'réaliste Givrine-Fée ancienne, Crysalme, témoin du gel de Karath, langage métaphorique, mémoire de 400 ans',
    },
  ],

  lore_long: `Syraris a 400 ans. Elle a vu le gel de Karath (52) en direct. Après le gel, elle a cessé de parler directement.

Depuis 400 ans, elle ne parle que par métaphores. Ses métaphores décrivent ce qu'elle a vu — pour ceux qui savent les lire.

Sa version du gel de Karath contredit la version officielle sur 3 points critiques. Personne n'a encore réussi à tout lire.`,
};

export default syraris;
