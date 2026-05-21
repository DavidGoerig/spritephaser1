import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrekavel: PersonnageLoreComplet = {
  id: 275,
  nom: 'Thyrekavel',
  element: 'Normal',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Petite, légère — paraît plus jeune que ses 22 ans, trait commun chez les 39 de Virex.',
    peau: 'Légèrement miel, avec des reflets changeants selon les moments — Eau aux matins, Feu aux émotions fortes, Sol par temps de stress. Aucune dominante stable.',
    yeux: 'Gris changeant, avec des éclats de couleurs différentes selon son état. Aucune cohérence élémentaire visible — ce qui les rend difficiles à lire pour quelqu\'un habitué aux signatures élémentaires stables.',
    vetements: 'Simple, pratique, sans couleur identifiable. Elle a appris à ne pas attirer le regard.',
    signes_particuliers: 'Quand elle est très calme, ses éléments s\'équilibrent et sa peau devient presque translucide pendant quelques secondes — un état qu\'elle peut atteindre délibérément depuis quelques mois.',
  },

  psychologie: {
    dominante: 'Curiosité désarmée. Elle ne sait pas ce qu\'elle est — plusieurs éléments faibles, aucun fort, aucun précédent dans les registres. Elle est une question à laquelle personne n\'a encore répondu.',
    mecanisme_de_defense: 'L\'humour sur elle-même. Elle plaisante sur le fait qu\'elle est "un brouillon d\'Avatar" — ça l\'aide à porter quelque chose qu\'elle ne peut pas changer.',
    contradiction_interne: 'Elle est un signal vivant qui prouve que le phénomène de Virex est systémique — une donnée importante pour comprendre ce qui s\'est passé. Et elle est aussi une personne de 22 ans qui aimerait juste savoir ce qu\'elle va faire de sa vie.',
    rapport_aux_autres: 'Le Second Avatar lui a parlé une fois quand elle était enfant — elle avait 10 ans, lui avait 15 ou 16 peut-être, une conversation sur les éléments multiples. Elle l\'a oublié sauf comme une impression. Le Second Avatar se souvient mieux qu\'elle d\'une conversation qui était importante pour lui.',
    vision_du_monde: 'Elle existe d\'une façon que les systèmes ne savent pas cataloguer. C\'est à la fois une protection et une source d\'incertitude constante.',
  },

  histoire: {
    enfance: {
      titre: 'L\'enfant de la liste',
      contenu: 'Née à Virex dans une famille ouvrière. Enregistrée sur la liste des 39 dès la naissance — son profil élémentaire était anormal depuis les premiers relevés, multiple et faible, sans catégorie standard. Elle avait grandi sans que personne ne sache exactement comment la traiter.',
    },
    arrivee: {
      titre: 'Thyven et la protection',
      contenu: 'Thyven (62) la surveillait depuis sa naissance — discrètement, sans lien officiel. Quand elle avait 14 ans, il lui avait expliqué en termes vagues pourquoi elle devait éviter certaines convocations. Elle avait compris l\'essentiel. Elle avait suivi les conseils.',
    },
    premier_conflit: {
      titre: 'Vashera',
      contenu: 'Vashera (266) était sa psychologue depuis 2 ans. Ce n\'était pas une relation standard thérapeute-patient — c\'était quelqu\'un qui essayait sincèrement de comprendre ce qu\'elle était et comment l\'aider à vivre avec. Les séances lui apprenaient des choses sur elle-même qu\'elle n\'avait pas les outils de découvrir seule.',
    },
    revelation: {
      titre: 'L\'extraction',
      contenu: '"Extraction réussie." Elle ne sait pas ce que ça veut dire depuis sa perspective. Elle est dans un endroit différent. Elle n\'est pas en danger immédiat. Mais les Dissidentes qui l\'ont "extraite" ont arrêté de répondre à ses questions avec des réponses directes il y a 4 jours. Elle ne sait pas si elle est en sécurité ou si elle est simplement dans un endroit moins visible.',
    },
    etat_actuel: {
      titre: 'L\'attente sans information',
      contenu: 'Elle est dans une maison sûre depuis 11 jours. On lui dit que c\'est temporaire. On lui dit de ne pas sortir. On ne lui dit pas pourquoi elle a été extraite maintenant — après 22 ans de vie à Virex sans problème apparent. Elle a commencé à se demander si "extraction réussie" pour les Dissidentes et "extraction réussie" pour elle signifient la même chose.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrekavel_signal_systemique',
      titre: 'Ce qu\'elle prouve',
      description: 'Son existence — multi-résonance faible, stable, sur 22 ans — prouve que le phénomène élémentaire de Virex ne s\'est pas limité à la production d\'un Avatar. D\'autres enfants ont été affectés d\'une façon différente. Elle en est la preuve vivante. Cette signification, elle ne la connaît pas entièrement. Si quelqu\'un la lui expliquait, elle ne serait pas sûre de trouver ça réconfortant.',
      personnages_impliques: [59],
      declencheur: 'Existence en tant qu\'une des 39 de Virex avec un profil différent du Second Avatar',
      consequence: 'Donnée scientifique vivante — ce qu\'on peut apprendre d\'elle est différent de ce qu\'on peut apprendre de l\'Avatar',
    },
    {
      id: 'thyrekavel_second_avatar_souvenir',
      titre: 'La conversation oubliée',
      description: 'Elle avait 10 ans, lui en avait 15 ou 16. Une conversation sur les éléments multiples dans une cour de Virex. Elle avait oublié les détails — le souvenir est flou, une impression de quelqu\'un qui la comprenait avant qu\'elle se comprenne elle-même. Le Second Avatar se souvient de cette conversation comme d\'une des rares où quelqu\'un lui avait dit qu\'avoir plusieurs éléments faibles n\'était pas une insuffisance. Il était en train de se convaincre lui-même en lui parlant.',
      personnages_impliques: [59],
      declencheur: 'Rencontre enfantine à Virex',
      consequence: 'Connexion ancienne non reconnue de son côté — important pour lui, impression floue pour elle',
    },
    {
      id: 'thyrekavel_vashera_rupture',
      titre: 'L\'absence de Vashera',
      description: 'Vashera ne sait pas où elle est. Vashera a demandé des informations sur l\'extraction et n\'a pas eu de réponse satisfaisante. Thyrekavel, dans la maison sûre, ne sait pas que Vashera cherche — elle suppose que Vashera a été informée que tout allait bien. Ces deux suppositions fausses se maintiennent l\'une l\'autre.',
      personnages_impliques: [266],
      declencheur: 'Extraction sans information transmise à Vashera',
      consequence: 'Deux personnes cherchant une connexion qui n\'a pas d\'information à leur transmettre',
    },
  ],

  arcs: ['arc_second_avatar'],
  position_dans_arc: 'Signal vivant et personne entière. Elle prouve quelque chose que les analystes trouveraient précieux — et elle a 22 ans dans une maison sûre dont elle ne comprend pas entièrement les règles.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'mentor', note: 'La surveille depuis sa naissance — discrètement. A expliqué les précautions à 14 ans.' },
    { id: 63, nom: 'Lysael', type: 'ennemi', note: 'La Convergence veut la tester — elle ne sait pas que Lysael a son dossier.' },
    { id: 59, nom: 'Second Avatar', type: 'allié', note: 'Lui a parlé quand elle avait 10 ans — souvenir flou pour elle, important pour lui. Deux personnes du même phénomène.' },
    { id: 266, nom: 'Vashera', type: 'mentor', note: 'Sa psychologue de 2 ans. L\'aidait à se comprendre. Cherche à la retrouver sans qu\'elle le sache.' },
  ],

  combat: {
    sorts: [
      'Éclat multi-élémentaire (Normal) — libération d\'une brève saturation de plusieurs éléments faibles simultanément — désorientation des capteurs élémentaires qui ne peuvent pas lire une signature stable',
      'Équilibre transparent (Normal) — état de neutralité élémentaire totale — pendant quelques secondes, elle est indétectable par les relevés standard',
      'Résistance diffuse (Normal) — absorption partielle des effets élémentaires entrants — ni protégée ni vulnérable sur un spectre large',
    ],
  },

  image_prompts: [
    {
      id: 'thyrekavel_translucide',
      description: 'Thyrekavel assise dans la maison sûre, les mains dans les genoux, dans un moment de calme total. Sa peau est légèrement translucide — l\'état d\'équilibre élémentaire qu\'elle peut atteindre délibérément. Elle ne regarde rien de particulier. Elle attend.',
      style: 'réaliste humain, lumière intérieure douce, maison simple, tons neutres et légèrement lumineux',
    },
  ],

  lore_long: `Thyrekavel a 22 ans et elle attend dans une maison sûre sans savoir exactement pourquoi elle y est.

"Extraction réussie" — les Dissidentes l'ont dit à Vashera. Thyrekavel est dans la maison sûre depuis 11 jours. On lui dit de ne pas sortir. Les questions directes obtiennent des réponses vagues. Elle commence à se demander si "réussie" était le bon adjectif.

Elle est une des 39 de Virex. Multi-résonance faible — Eau, Feu, Sol, traces de Plante et de Vent, aucun dominant, aucun fort. Les relevés impériaux ne savent pas quoi faire d'elle. Les analystes Convergence non plus. Lysael a son dossier mais les instructions sont "tester" plutôt que "utiliser" — elle est une curiosité avant d'être une ressource.

Ce qu'elle prouve : le phénomène de Virex n'a pas produit seulement un Avatar exceptionnel. Il a modifié la biologie élémentaire d'au moins 39 enfants d'une façon moins spectaculaire mais plus diffuse. Elle en est la preuve vivante. Elle ne trouverait pas ça réconfortant si quelqu'un le lui expliquait franchement.

Le Second Avatar lui a parlé à 10 ans. Elle l'a à moitié oublié — une impression de quelqu'un qui comprenait quelque chose. Il se souvient de la conversation mieux qu'elle : il était en train de se convaincre lui-même que plusieurs éléments faibles n'étaient pas une insuffisance, et lui dire ça lui avait semblé le bon usage de ce qu'il pensait. C'est une connexion asymétrique — plus forte de son côté.

Vashera cherche à la retrouver. Thyrekavel suppose que Vashera a été informée que tout allait bien.

Ces deux suppositions fausses se maintiennent l'une l'autre.

Elle peut atteindre délibérément un état de transparence élémentaire — quelques secondes où ses éléments s'équilibrent et où elle devient invisible aux capteurs standard. Elle a découvert ça il y a 4 mois. Elle ne sait pas encore ce qu'elle pourrait en faire.`,
};

export default thyrekavel;
