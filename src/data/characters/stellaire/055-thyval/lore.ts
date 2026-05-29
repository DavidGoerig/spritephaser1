import type { PersonnageLoreComplet } from '../../../lore-types';

const thyval: PersonnageLoreComplet = {
  id: 55,
  nom: 'Thyval',
  element: 'Stellaire',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Monarchie',

  apparence: {
    taille_corpulence: 'Givrin de 72 ans — un archiviste des serments dont la silhouette dit les archives plutôt que le froid. Il passe la majorité de son temps dans les salles d\'archives intérieures d\'Iskral. Sa peau est plus pâle que celle d\'autres Givrins de son âge — moins exposée aux températures du Champ Gelé.',
    peau: 'Blanc Givrin avec une luminescence stellaire très faible aux épaules et au cou — discrète pour un Élu Stellaire, comme si son élément ne cherchait pas à se montrer. Cette discrétion est réelle : il a travaillé toute sa vie pour des institutions qui utilisaient la luminescence stellaire comme insigne de statut. Il a choisi de ne pas participer à cette hiérarchie visuelle.',
    yeux: 'Argent pâle avec une qualité de lecture — ses yeux voient les structures sous-textuelles des documents, les inscriptions à l\'encre sympathique, les sceaux effacés. C\'est son élément Stellaire appliqué à la lecture plutôt qu\'à la navigation stellaire.',
    vetements: 'Tenue d\'archiviste de la Monarchie — grise avec des insignes de fonction minimaux. Il porte des gants de lecture qui protègent les documents autant que ses mains. Ces gants ne quittent jamais son bureau.',
    signes_particuliers: 'Il date tout. Chaque note, chaque observation, chaque découverte. Cette habitude lui vient de 40 ans passés à reconstituer des chronologies dans des archives incomplètes. La date est la première chose qu\'un archiviste perd et la première chose dont il a besoin.',
  },

  psychologie: {
    dominante: 'Archiviste des serments d\'Iskral depuis 40 ans — il archive et préserve les documents qui fondent la légitimité de la Monarchie de Crysalme. Dans ces archives, il y a 3 semaines, il a trouvé une instruction laissée par Karath (52) pour le dégel du Champ Gelé. Personne ne l\'a encore lue entièrement.',
    mecanisme_de_defense: 'La procédure comme protection. Il ne peut pas agir sur une découverte avant de l\'avoir authentifiée selon les procédures archivistiques complètes. Cette procédure est réelle et utile. Elle lui permet aussi de retarder une décision qu\'il ne sait pas encore comment prendre.',
    contradiction_interne: 'Il travaille pour la Monarchie. Ce qu\'il a trouvé dit que la Monarchie a fondé sa légitimité sur quelque chose que Karath n\'avait pas conçu comme permanent. Si le dégel du Champ arrive — et les micro-fractures de Sylkra (53) suggèrent que ça arrive — la Monarchie perd son argument géopolitique principal. Il est l\'archiviste qui a trouvé la preuve que cet argument était temporaire. Sa loyauté à la Monarchie et sa loyauté aux archives sont en conflit direct.',
    rapport_aux_autres: 'Keldris (57) est le représentant de la Monarchie qui a ordonné le silence sur les micro-fractures — Thyval sait qu\'il l\'a fait. Si Thyval lui montrait l\'instruction de Karath, Keldris ferait en sorte que l\'instruction disparaisse. Sylkra (53) a été réduite au silence — Thyval a vu son rapport dans les archives. Il a noté qu\'il avait été classé "données préliminaires". Il a accès aux données que le classement a cachées. Aethren (54) veut dégeler le Champ — l\'instruction de Karath dit comment. Thyval n\'a pas encore contacté Aethren.',
    vision_du_monde: 'Une archive qui cache ce qu\'elle est censée préserver n\'est plus une archive — c\'est un outil politique. Il a passé 40 ans à préserver des documents pour la Monarchie. Il commence à comprendre que préserver des documents et préserver ce que ces documents disent sont deux choses différentes.',
  },

  histoire: {
    enfance: {
      titre: 'Les serments',
      contenu: 'Né dans une famille d\'archivistes de la Monarchie depuis deux générations. Les archives d\'Iskral n\'étaient pas un mystère pour lui — c\'était une vocation héritée. À 18 ans, il avait intégré les archives comme apprenti. À 32 ans, il était archiviste des serments — responsable des documents qui fondaient les engagements politiques de la Monarchie.',
    },
    arrivee: {
      titre: 'L\'inventaire des archives profondes',
      contenu: 'À 68 ans, lors d\'un inventaire quinquennal des archives les plus anciennes d\'Iskral — des archives que personne n\'avait ouvertes depuis 40 ans — il avait trouvé une section scellée marquée "documents personnels, An -312". Il avait suivi la procédure d\'ouverture. Ce qu\'il avait trouvé l\'avait arrêté.',
    },
    premier_conflit: {
      titre: 'L\'instruction de Karath',
      contenu: 'Dans la section scellée : un document manuscrit en Givrin ancien, partiellement dégradé, écrit par quelqu\'un dont la main tremblait. L\'écriture de quelqu\'un qui était en train de mourir ou qui venait de faire quelque chose d\'épuisant. L\'entête : "Conditions du dégel. À lire quand les cristaux commenceront à fléchir." Il avait photocopié le document selon les procédures et commencé l\'authentification.',
    },
    revelation: {
      titre: 'Ce que le document dit',
      contenu: 'L\'authentification était en cours. Il avait lu les parties lisibles. Le document définissait des conditions pour le dégel — pas physiques, politiques. Des conditions qui correspondaient à quelque chose que la coalition de l\'époque avait ou n\'avait plus. Il n\'avait pas encore traduit entièrement les sections en Givrin archaïque — ses connaissances de cette variante étaient limitées. Il cherchait un traducteur de confiance.',
    },
    etat_actuel: {
      titre: 'La traduction',
      contenu: 'Il a le document. L\'authentification est à 80% — suffisante pour le considérer comme authentique. Il cherche quelqu\'un pour traduire les sections en Givrin archaïque. Il n\'a pas dit à Keldris (57) ce qu\'il avait trouvé. Il a lu le rapport de Sylkra (53) dans les archives — il sait qu\'on l\'a réduite au silence. Ces deux faits convergent vers quelque chose qu\'il n\'a pas encore formulé.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyval_document',
      titre: 'La traduction des conditions',
      description: 'Thyval a le document de Karath (52). Il manque une traduction des sections en Givrin archaïque pour comprendre entièrement les conditions du dégel. Si ces conditions correspondent à ce que Sylkra (53) observe dans les micro-fractures, le dégel n\'est peut-être pas à des années — il est à des semaines.',
      personnages_impliques: [53, 57],
      declencheur: 'Thyval trouvant un traducteur pour les sections archaïques',
      consequence: 'Compréhension complète des conditions du dégel — et décision sur qui informer en premier',
    },
    {
      id: 'thyval_loyaute',
      titre: 'La loyauté à l\'archive',
      description: 'Thyval travaille pour la Monarchie. Ce qu\'il a trouvé dit que la légitimité de la Monarchie repose sur quelque chose de temporaire. S\'il transmet le document à Keldris (57), il disparaît. S\'il le transmet à Aethren (54) ou à quelqu\'un en dehors de la Monarchie, il trahit son employeur. Sa loyauté à l\'archive dit que le document doit être préservé et lu. Sa loyauté à la Monarchie dit l\'inverse.',
      personnages_impliques: [57, 54],
      declencheur: 'Thyval décidant à qui transmettre le document',
      consequence: 'Soit le document survit et change la situation du Champ, soit il disparaît dans les archives de Keldris',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Archiviste des serments d\'Iskral qui a trouvé l\'instruction de Karath (52) pour le dégel il y a 3 semaines. L\'authentification est à 80%. Les sections en Givrin archaïque ne sont pas encore traduites. N\'a pas dit à Keldris (57) ce qu\'il a trouvé. Sa loyauté à l\'archive et sa loyauté à la Monarchie sont en conflit.',

  relations: [
    { id: 52, nom: 'Karath', type: 'contact', note: 'Mort il y a 312 ans. A trouvé son instruction pour le dégel. L\'authentifie et la traduit.' },
    { id: 57, nom: 'Keldris', type: 'adversaire', note: 'Représentant de la Monarchie. A ordonné le silence sur les micro-fractures. Ne lui a pas dit ce qu\'il a trouvé.' },
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'A vu son rapport classé. Sait qu\'elle a été réduite au silence. Leurs informations se complètent.' },
  ],

  combat: {
    sorts: [
      'Cartographie céleste (Stellaire) — projection de la position des corps célestes — navigation et localisation précise',
      'Lumière d\'archive (Stellaire) — éclairage concentré qui révèle les encres et sceaux effacés — lecture d\'informations cachées',
      'Bouclier de lumière stellaire (Stellaire) — barrière lumineuse — protection partielle contre les impacts',
    ],
  },

  image_prompts: [
    {
      id: 'thyval_document',
      description: 'Thyval dans les archives profondes d\'Iskral — un Givrin de 72 ans penché sur un document ancien sous une lumière stellaire qu\'il projette lui-même. Le document a une écriture qui tremble. Ses gants de lecture sont posés à côté. Il lit quelque chose qu\'il ne s\'attendait pas à trouver. Derrière lui : des étagères d\'archives qui datent de plusieurs siècles.',
      style: 'réaliste Givrin archiviste, archives profondes d\'Iskral, document ancien de Karath, lumière stellaire d\'archiviste, découverte avec conséquences, loyauté en conflit',
    },
  ],

  lore_long: `Thyval a trouvé l'instruction de Karath (52) pour le dégel il y a 3 semaines dans des archives scellées depuis 40 ans. L'entête dit : "À lire quand les cristaux commenceront à fléchir."

Les cristaux fléchissent — Sylkra (53) l'a documenté. Thyval a vu son rapport classé "données préliminaires".

Il n'a pas dit à Keldris (57) ce qu'il a trouvé. Les sections en Givrin archaïque ne sont pas encore traduites. Le dégel n'est peut-être pas à des années.`,
};

export default thyval;
