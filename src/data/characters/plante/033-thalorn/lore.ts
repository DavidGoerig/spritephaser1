import type { PersonnageLoreComplet } from '../../../lore-types';

const thalorn: PersonnageLoreComplet = {
  id: 33,
  nom: 'Thalorn',
  element: 'Plante',
  espece: 'Sylvans',
  region: 'Sylvera',
  faction: 'Conservateurs',

  apparence: {
    taille_corpulence: 'Sylvan de 127 ans — ancien au point où la distinction entre lui et un arbre est parfois floue. Il ne marche pas vite. Il ne bouge que quand il a décidé de bouger. Sa présence dans une forêt est indiscernable d\'une vieille souche jusqu\'à ce qu\'il parle.',
    peau: 'Verte avec une texture d\'écorce aux avant-bras et aux épaules — une adaptation de l\'âge pour un Sylvan très ancien. Ses veines de sève sont visibles à travers la peau comme des racines sous la terre.',
    yeux: 'Verts très pâles — presque translucides. Il voit des images qui ne sont pas présentes dans la réalité immédiate. Ce ne sont pas des hallucinations : ce sont des mémoires qui ne lui appartiennent pas.',
    vetements: 'Tenue ancienne des Conservateurs — des verts si foncés qu\'ils semblent noirs. Pas de poches, pas d\'outils. Il n\'a besoin de rien de ce genre. Ce qu\'il porte, il le porte en lui.',
    signes_particuliers: 'Il chante parfois des chants qu\'il dit ne pas avoir appris — des mélodies qui viennent des arbres-mémoire absorbés dans sa conscience. Les Sylvans qui les entendent reconnaissent parfois des fragments de chants perdus lors de la Faim des Racines.',
  },

  psychologie: {
    dominante: 'Arbre-mémoire vivant — il a absorbé les souvenirs de plusieurs arbres-mémoire de Sylvera qui allaient mourir lors de la Faim des Racines. Ces mémoires vivent en lui. Il est à la fois lui-même et le dépôt de ce qui aurait été perdu. Il gère ça depuis 84 ans.',
    mecanisme_de_defense: 'La séparation entre ses mémoires et celles des arbres. Il sait distinguer ce qu\'il a vécu de ce qu\'il porte. Cette séparation demande un effort continu — et se fragilise quand il dort.',
    contradiction_interne: 'Il porte les mémoires d\'arbres-mémoire dont certains contenaient des informations sur Kessaer, le brûleur. Ces mémoires ont une perspective sur les événements de la Faim des Racines que Kessyn (32) ne connaît pas. Il n\'a pas décidé si Kessyn mérite de les connaître.',
    rapport_aux_autres: 'Sylvae (31) le consulte sur les mémoires des arbres-mémoire — elle cherche des informations sur les fragments survivants. Il lui a donné une partie de ce qu\'il sait. Kessyn (32) est la ligne qu\'il ne franchira pas : les mémoires qu\'il porte contiennent des récits sur ce que le feu a fait. Aelvyn (119) veut reconstruire le réseau racinaire — Thalorn possède des informations sur l\'architecture originale du réseau.',
    vision_du_monde: 'La mémoire n\'est pas du passé — elle est du présent vivant dans une autre forme. Ce qu\'il porte n\'est pas une archive. C\'est une continuation. Les arbres-mémoire qu\'il a absorbés ne sont pas morts — ils existent à travers lui.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier arbre',
      contenu: 'À 43 ans, il avait absorbé son premier arbre-mémoire — un vieux chêne de sève qui mourait de la contamination de la Faim des Racines. L\'absorption avait été douloureuse. Les mémoires de l\'arbre s\'étaient déversées en lui pendant 3 jours. Il avait survécu. Il avait aussi compris ce que ça voulait dire de porter des siècles de mémoire en plus de ses propres souvenirs.',
    },
    arrivee: {
      titre: 'La décision de la Faim',
      contenu: 'À 43 ans, pendant la Faim des Racines, il avait absorbé 4 arbres-mémoire en 6 ans — les plus anciens, ceux qui ne pouvaient pas survivre à la contamination. C\'était une décision des Conservateurs : plutôt que de perdre leurs mémoires, les transférer dans un Sylvan qui pourrait les porter. Il avait été choisi parce qu\'il avait survécu au premier.',
    },
    premier_conflit: {
      titre: 'La mémoire de Kessaer',
      contenu: 'À 65 ans, lors d\'une période de fièvre, les mémoires des arbres-mémoire avaient commencé à se mélanger aux siennes. Il avait vécu des séquences de la Faim des Racines depuis la perspective des arbres brûlés par Kessaer — y compris les arbres qui n\'étaient pas corrompus. Il avait émergé de la fièvre avec une compréhension de Kessaer qu\'aucun témoignage humain ne lui aurait donnée.',
    },
    revelation: {
      titre: 'L\'architecture du réseau de Thalindre',
      contenu: 'À 95 ans, en explorant ses propres mémoires absorbées, il avait trouvé dans l\'un des arbres une carte du réseau racinaire de Thalindre avant la Faim des Racines — pas une carte physique, mais une mémoire de l\'architecture. Il pouvait la reconstruire depuis sa conscience. Il ne l\'avait pas encore partagée entièrement — pas par rétention, mais parce qu\'il cherchait à comprendre ce que cette information changerait.',
    },
    etat_actuel: {
      titre: 'Le fragment de Sylindra',
      contenu: 'Sylvae (31) lui a décrit son pressentiment d\'un fragment actif. Dans ses mémoires absorbées, il reconnaît la zone qu\'elle décrit — une section du réseau racinaire de Thalindre qui avait des propriétés que les autres sections n\'avaient pas. Si Sylindra (37) a trouvé ce fragment, Thalorn a des informations sur ce qu\'elle a trouvé. Il doit décider quoi faire de cette connaissance.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thalorn_sylvae',
      titre: 'L\'architecture du réseau',
      description: 'Thalorn possède dans ses mémoires absorbées la carte de l\'architecture du réseau racinaire de Thalindre avant la Faim des Racines. Sylvae (31) cherche ce réseau depuis 24 ans. Si Thalorn partageait ce qu\'il porte, la recherche de Sylvae aurait une direction précise — et le pressentiment de fragment actif serait confirmé ou infirmé par des données réelles.',
      personnages_impliques: [31, 37],
      declencheur: 'Décision de partager ou non les mémoires du réseau avec Sylvae',
      consequence: 'Si partagé : direction précise pour Sylvae et connexion avec Sylindra. Si non partagé : la recherche continue sans cette information',
    },
    {
      id: 'thalorn_kessyn',
      titre: 'Les mémoires de Kessaer',
      description: 'Il porte des mémoires d\'arbres qui ont vécu les brûlages de Kessaer — y compris les arbres non corrompus brûlés par erreur. Kessyn (32) ne connaît pas cette perspective. Thalorn n\'a pas décidé si Kessyn mérite de la connaître — et si cette connaissance changerait ou renforcerait sa conviction que Kessaer avait raison malgré les erreurs.',
      personnages_impliques: [32, 31],
      declencheur: 'Confrontation entre Kessyn et Sylvae qui dépasse leur désaccord habituel',
      consequence: 'Révélation ou non de la perspective des arbres sur Kessaer — et impact sur la conviction de Kessyn',
    },
  ],

  arcs: ['arc_faim_des_racines'],
  position_dans_arc: 'Arbre-mémoire vivant — porte les mémoires de 4 arbres-mémoire de Sylvera absorbés pendant la Faim des Racines. Possède l\'architecture du réseau racinaire de Thalindre dans ses mémoires. N\'a pas encore décidé de partager.',

  relations: [
    { id: 31, nom: 'Sylvae', type: 'allié', note: 'Lui a donné une partie de ses mémoires des arbres. Possède des informations plus précises sur ce qu\'elle cherche.' },
    { id: 32, nom: 'Kessyn', type: 'contact', note: 'Porte des mémoires des brûlages de Kessaer. La ligne qu\'il ne franchira pas dans les brûlages.' },
    { id: 119, nom: 'Aelvyn', type: 'allié', note: 'Veut reconstruire le réseau racinaire. Thalorn possède l\'architecture originale.' },
  ],

  combat: {
    sorts: [
      'Mémoire végétale (Plante) — connexion à un arbre et accès à ses mémoires — information ou désorientation',
      'Enracinement ancien (Plante) — racines massives issues d\'un réseau racinaire étendu — immobilisation de zone',
      'Chant des arbres (Plante) — résonance végétale qui rappelle les forêts avant la Faim — affaiblissement des éléments de feu à courte distance',
    ],
  },

  image_prompts: [
    {
      id: 'thalorn_foret',
      description: 'Thalorn dans une clairière de Sylvera — un Sylvan de 127 ans assis au pied d\'un vieil arbre, indiscernable d\'une vieille souche jusqu\'à ce que ses yeux verts pâles s\'ouvrent. Ses avant-bras ont une texture d\'écorce. Il chante quelque chose à voix basse — un chant qui ne lui appartient pas. Autour de lui : des arbres qui semblent pencher légèrement vers lui.',
      style: 'réaliste Sylvan ancien arbre-mémoire, forêt de Sylvera, chant perdu, mémoires portées, texture d\'écorce, très ancien',
    },
  ],

  lore_long: `Thalorn a absorbé 4 arbres-mémoire pendant la Faim des Racines. Il porte leurs mémoires depuis 84 ans. Ce n'est pas une archive — c'est une continuation.

Dans ses mémoires, il a l'architecture du réseau racinaire de Thalindre avant la Faim. Sylvae (31) cherche ce réseau depuis 24 ans. Il n'a pas encore décidé de partager.

Il porte aussi des mémoires des brûlages de Kessaer — y compris les arbres non corrompus brûlés par erreur. Kessyn (32) ne connaît pas cette perspective.`,
};

export default thalorn;
