import type { PersonnageLoreComplet } from '../../../lore-types';

const nyrreth: PersonnageLoreComplet = {
  id: 47,
  nom: 'Nyrreth',
  element: 'Spectre',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrien de 43 ans — une présence qui ne remplit pas les espaces. Il est de taille moyenne mais avec une façon de se tenir qui réduit la surface qu\'il occupe : épaules légèrement rentrées, pas qui évitent le bruit, yeux qui ne se fixent jamais sur un point trop longtemps. Arrivé à Vel\'Nox après une purge. Il n\'a pas désappris les habitudes de la survie.',
    peau: 'Gris profond Umbrien avec une légère translucidité aux tempes — une caractéristique de l\'élément Spectre prononcé. Cette translucidité est plus visible quand il utilise son élément. En repos, il semble aussi opaque que n\'importe qui d\'autre.',
    yeux: 'Blancs avec des pupilles grises — l\'expression la plus évidente de son élément. Ses yeux voient à travers les surfaces légères et dans l\'ultraviolet faible. Cette perception rend les bibliothèques censurées particulièrement utiles : il peut lire des documents dont l\'encre a été effacée chimiquement si la surface reste.',
    vetements: 'Tenue neutre — pas les insignes des Dissidentes, pas les couleurs de la Convergence. Rien qui le rattache à une faction. À Vel\'Nox, cette neutralité dit plus que n\'importe quel insigne.',
    signes_particuliers: 'Il lit les documents par couches — d\'abord ce qui est visible, puis ce qui a été effacé, puis les traces dans le support. Cette méthode prend trois fois plus de temps que la lecture normale. Il ne la considère pas comme lente.',
  },

  psychologie: {
    dominante: 'Arrivé à Vel\'Nox après une purge dans sa région — une purge dont il ne donne pas les détails, dont il n\'a jamais dit où elle a eu lieu. Il cherche quelque chose dans les archives censurées de Vel\'Nox. Ce qu\'il cherche n\'est pas ce qu\'il dit chercher quand on lui demande.',
    mecanisme_de_defense: 'La vérité partielle. Il ne ment pas — il dit des portions de ce qui est vrai. Cette habitude est tellement ancrée qu\'il ne sait plus toujours quelle portion il dit.',
    contradiction_interne: 'Ce qu\'il cherche dans les archives censurées est quelque chose sur la purge qui l\'a fait fuir. Il pense que les archives de Vel\'Nox contiennent des informations sur les opérations impériales de purge — des informations que les Dissidentes ont collectées depuis des décennies. Ce qu\'il a commencé à trouver lui dit que la purge qu\'il a fuit n\'était pas aléatoire. Elle ciblait quelque chose de spécifique. Quelque chose qu\'il avait ou savait.',
    rapport_aux_autres: 'Shael (48) achète des données de l\'ombre — il s\'est approché de Nyrreth il y a 2 mois avec une proposition. Nyrreth a refusé sans dire pourquoi. Il sait que quelqu\'un qui achète des données de l\'ombre pour la Convergence est dangereux pour lui si ce qu\'il cherche est lié à quelque chose que la Convergence voudrait avoir. Vethis (46) maintient le réseau des Trois Couches — Nyrreth a besoin d\'accès à une section de ce réseau pour atteindre une archive spécifique. Vethis ne lui a pas encore accordé cet accès.',
    vision_du_monde: 'Les archives censurées existent parce que quelqu\'un a décidé que certaines informations valaient plus cachées que perdues. Ce quelqu\'un avait raison — mais pour les mauvaises raisons. Ces informations valent plus retrouvées que perdues.',
  },

  histoire: {
    enfance: {
      titre: 'La région purge',
      contenu: 'Ce qu\'il dit : il est arrivé à Vel\'Nox il y a 8 ans, après une purge dans une région qu\'il ne nomme pas. Ce qu\'il ne dit pas : la purge avait ciblé des Élus Spectre spécifiquement — pas des factions, pas des opposants politiques. Des Élus Spectre avec une capacité de lecture à travers les surfaces. Comme lui.',
    },
    arrivee: {
      titre: 'Les archives de Vel\'Nox',
      contenu: 'À Vel\'Nox depuis 8 ans, il avait mis 2 ans à localiser les bibliothèques censurées des Trois Couches — des archives que Vethis (46) maintient et qui contiennent des informations que les factions ne veulent pas perdre mais ne veulent pas non plus voir circuler. Il avait commencé à y accéder progressivement, toujours avec une raison légitime de surface.',
    },
    premier_conflit: {
      titre: 'La référence à la tour d\'Ael',
      contenu: 'Il y a 3 mois, dans une section d\'archive censurée sur le réseau des Trois Couches, il avait trouvé une référence à "la tour d\'Ael" — liée à une section du réseau que les archives officielles décrivent comme "inactive". La section inactive correspondait à un nœud construit à l\'époque du Vol de la Lumière. Il avait commencé à comprendre que ce qu\'il cherchait sur la purge et ce que les archives cachaient sur la tour d\'Ael étaient liés.',
    },
    revelation: {
      titre: 'Ce que la purge ciblait',
      contenu: 'En reconstitutant depuis des archives fragmentaires : la purge qui l\'avait forcé à fuir ciblait des Élus Spectre qui pouvaient lire des surfaces effacées — la capacité de retrouver ce qui a été caché. L\'Empire purgeait des personnes qui pouvaient voir ce que les archives censurées contenaient. Nyrreth pouvait voir ce que les archives censurées contenaient. La connexion était évidente. Ce qu\'il cherchait maintenant : pourquoi les archives censurées de Vel\'Nox contenaient des informations assez importantes pour justifier une purge.',
    },
    etat_actuel: {
      titre: 'La tour et la section inactive',
      contenu: 'Il a trouvé le lien entre la tour d\'Ael (45) et la section "inactive" du réseau des Trois Couches. Si la section est inactive officiellement mais réellement active sous une autre forme, elle contient peut-être des informations sur ce que quelqu\'un a voulu cacher depuis le Vol de la Lumière. Shael (48) s\'est approché de lui il y a 2 mois. Il n\'a pas dit ce qu\'il avait trouvé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'nyrreth_archives',
      titre: 'Ce que les archives cachent',
      description: 'Nyrreth a besoin d\'accéder à une section spécifique du réseau des Trois Couches pour atteindre une archive liée à la tour d\'Ael (45). Vethis (46) contrôle cet accès. Si Vethis lui accorde l\'accès, Nyrreth trouvera peut-être ce que quelqu\'un a voulu cacher depuis 71 ans — et ce qui justifiait la purge des Élus Spectre dans sa région.',
      personnages_impliques: [46, 45],
      declencheur: 'Vethis accordant ou refusant l\'accès à la section du réseau',
      consequence: 'Accès à des informations sur le Vol de la Lumière que les archives officielles ne contiennent pas — et compréhension de pourquoi la purge l\'a ciblé',
    },
    {
      id: 'nyrreth_shael',
      titre: 'L\'offre de Shael',
      description: 'Shael (48) lui a proposé de l\'argent pour des données de l\'ombre. Nyrreth a refusé. Si Shael comprend ce que Nyrreth cherche, il a un moyen de pression — il peut vendre l\'information sur la présence de Nyrreth à quelqu\'un qui voudrait savoir où il est. Nyrreth ne sait pas encore à quel point Shael est dangereux.',
      personnages_impliques: [48, 46],
      declencheur: 'Shael identifiant ce que Nyrreth cherche vraiment',
      consequence: 'Nyrreth en danger si Shael vend l\'information sur sa localisation à ses commanditaires',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Proscrit Spectre arrivé à Vel\'Nox après une purge. Cherche dans les archives censurées des Trois Couches des informations sur la purge et sur la tour d\'Ael (45). A refusé la proposition de Shael (48). A besoin d\'accès à une section du réseau que Vethis (46) contrôle.',

  relations: [
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Maintient le réseau des Trois Couches. Nyrreth a besoin d\'un accès qu\'il contrôle.' },
    { id: 45, nom: 'Ael', type: 'contact', note: 'Sa tour est liée à ce qu\'il cherche. Ne sait pas encore s\'il est encore en vie.' },
    { id: 48, nom: 'Shael', type: 'adversaire', note: 'Acheteur de données de l\'ombre. A fait une proposition que Nyrreth a refusée. Potentiellement dangereux.' },
  ],

  combat: {
    sorts: [
      'Passage spectre (Spectre) — traversée temporaire de surfaces légères — infiltration sans destruction',
      'Lecture à travers (Spectre) — vision à travers les surfaces solides légères — information sur ce qui est caché',
      'Dissolution partielle (Spectre) — réduction de la signature physique — passage discret dans des espaces surveillés',
    ],
  },

  image_prompts: [
    {
      id: 'nyrreth_archives',
      description: 'Nyrreth dans une bibliothèque censurée des Trois Couches à Vel\'Nox — un Umbrien de 43 ans penché sur un document, ses yeux blancs visibles dans la lumière faible. Il lit quelque chose que d\'autres ne pourraient pas voir — des traces dans un support dont l\'encre a été effacée. Son expression est de quelqu\'un qui commence à comprendre quelque chose de plus grand que ce qu\'il cherchait.',
      style: 'réaliste Umbrien Spectre, bibliothèque censurée Vel\'Nox, document effacé lisible, yeux blancs, lecture multiple, compréhension progressive, danger',
    },
  ],

  lore_long: `Nyrreth est arrivé à Vel'Nox après une purge qui ciblait les Élus Spectre capables de lire des surfaces effacées — des Élus qui pouvaient voir ce que les archives censurées contenaient. Il est exactement ce type d'Élu.

Dans les bibliothèques censurées des Trois Couches, il a trouvé un lien entre la tour d'Ael (45) et une section du réseau officiellement "inactive". Ce qu'il cherche sur sa purge et ce que les archives cachent sur la tour sont liés.

Shael (48) lui a proposé de l'argent pour des données de l'ombre. Il a refusé. Shael est dangereux.`,
};

export default nyrreth;
