import type { PersonnageLoreComplet } from '../../../lore-types';

const ael: PersonnageLoreComplet = {
  id: 45,
  nom: 'Ael',
  element: 'Electrique',
  element2: 'Stellaire',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Si encore en vie : un Umbrien d\'environ 95 ans — un âge qui devrait être impossible pour quelqu\'un dont l\'énergie a été volée il y a 71 ans. Les témoins de l\'époque décrivent un homme de grande taille avec une bioluminescence double — l\'éclat électrique et la lumière stellaire visibles simultanément, une combinaison si rare qu\'on la prenait pour un symbole avant de comprendre que c\'était simplement lui.',
    peau: 'Dans les témoignages : gris pâle Umbrien avec des veines lumineuses — bleu électrique sur les bras, blanc stellaire au visage. La double luminescence rendait son visage difficile à regarder directement sous un éclairage faible. Il était conscient de cet effet et l\'utilisait rarement.',
    yeux: 'Dans les récits : argent profond avec un mouvement interne — comme si les deux éléments circulaient simultanément dans ses iris. Osara (51), qui l\'a rencontré enfant, dit que ses yeux "changeaient" quand il regardait le ciel plutôt que les gens.',
    vetements: 'Dans les archives : simple, presque sans distinction. Il n\'avait pas besoin d\'insignes — son double élément était visible. Il habillait son absence de pouvoir ostensible comme une opinion.',
    signes_particuliers: 'Si encore en vie dans les ruines de sa tour : 71 ans sans énergie élémentaire, sans accès aux soins, dans un bâtiment qui s\'effondre. Osara (51) pense qu\'il a trouvé un moyen de subsister à travers le réseau des Trois Couches — que sa conscience est peut-être connectée à des structures de Vel\'Nox qu\'il avait lui-même conçues.',
  },

  psychologie: {
    dominante: 'L\'Élu dont l\'énergie a été volée lors du Vol de la Lumière — pas tué, drainé. Il a vécu 71 ans dans un état que personne d\'autre n\'a vécu. Si sa conscience persiste quelque part dans les structures de Vel\'Nox qu\'il a contribué à construire, il est peut-être la mémoire vivante la plus complète du réseau des Trois Couches.',
    mecanisme_de_defense: 'L\'obscurité comme protection. Dans les récits fragmentaires sur ce qui s\'est passé après le Vol : il ne s\'est pas battu pour retrouver son énergie, il s\'est retiré dans sa tour. Cette retraite était peut-être la seule façon de survivre à quelque chose que personne d\'autre n\'avait survécu.',
    contradiction_interne: 'Il connaît des choses sur le réseau des Trois Couches que personne d\'autre ne sait — il a participé à sa construction. Ces informations pourraient permettre à Vethis (46) de comprendre pourquoi les flux ont changé. Mais s\'il existe encore, il n\'a pas contacté les gardiens du réseau depuis 71 ans. La question est pourquoi.',
    rapport_aux_autres: 'Osara (51) le connaissait enfant et pense qu\'il est peut-être encore en vie dans les ruines de sa tour. Elle n\'est pas allée vérifier. Nyrreth (47) cherche quelque chose dans les archives censurées — peut-être des informations sur le Vol de la Lumière qui concernent Ael. Vethis (46) maintient le réseau sans savoir qu\'Ael en avait une connaissance qu\'aucun archive n\'a.',
    vision_du_monde: 'Ce qu\'il savait — et peut-être sait encore — : la lumière qu\'on vole ne disparaît pas. Elle va quelque part.',
  },

  histoire: {
    enfance: {
      titre: 'Le double élément',
      contenu: 'Né à Vel\'Nox avec le double élément Electrique/Stellaire — une combinaison documentée comme "impossible" par les théoriciens de l\'Empire pendant un siècle. Son existence était une preuve empirique que "impossible" était un mot que les théoriciens utilisaient pour les choses qu\'ils n\'avaient pas encore vues. Il avait contribué à construire plusieurs nœuds du réseau des Trois Couches à 30 ans.',
    },
    arrivee: {
      titre: 'La tour',
      contenu: 'Il avait construit sa tour à Vel\'Nox à 45 ans — pas pour s\'isoler, mais pour disposer d\'un espace de travail adapté à la manipulation simultanée de deux éléments sans interférence avec les structures environnantes. La tour était au centre d\'un nœud du réseau des Trois Couches qu\'il avait conçu.',
    },
    premier_conflit: {
      titre: 'Le Vol de la Lumière',
      contenu: 'À 71 ans dans sa tour, lors du Vol de la Lumière : son énergie a été volée en moins de 4 heures. Pas tuée — extraite. Le processus avait laissé un Élu vivant mais vide. Osara (51), enfant dans une rue adjacente, avait vu la tour s\'obscurcir progressivement pendant ces 4 heures. Elle avait entendu quelque chose — pas un cri, quelque chose de différent.',
    },
    revelation: {
      titre: 'Ce qui reste',
      contenu: 'Dans les 10 années après le Vol, des rapports fragmentaires dans les marchés nocturnes de Vel\'Nox : des témoins qui disaient avoir "entendu" quelque chose dans certains couloirs des Trois Couches qui ressemblait à une présence électrique. Ces rapports avaient été mis de côté comme superstition. Vethis (46), en maintenant le réseau depuis 20 ans, a parfois senti quelque chose dans les nœuds centraux qu\'il ne pouvait pas expliquer.',
    },
    etat_actuel: {
      titre: 'La tour en ruines',
      contenu: 'La tour est debout — partiellement. Personne n\'y est entré depuis 60 ans officiellement. Osara y pense depuis 71 ans. Elle n\'est pas allée. Nyrreth (47), en cherchant dans les archives censurées, a trouvé une référence à "la tour d\'Ael" dans un document sur le réseau des Trois Couches. Il commence à comprendre que la tour et les archives sont liées.',
    },
  },

  evenements_narratifs: [
    {
      id: 'ael_osara',
      titre: 'La visite d\'Osara',
      description: 'Osara (51) pense qu\'Ael est peut-être encore en vie dans les ruines de sa tour — 71 ans après le Vol. Elle n\'est pas allée vérifier. Si elle y allait, elle trouverait soit des ruines vides, soit quelque chose qui répondrait à une question de 71 ans. Elle a retardé cette visite depuis assez longtemps.',
      personnages_impliques: [51, 47],
      declencheur: 'Osara décidant finalement d\'entrer dans la tour d\'Ael',
      consequence: 'Confirmation ou infirmation de la survie d\'Ael — et accès à sa connaissance du réseau des Trois Couches',
    },
    {
      id: 'ael_nyrreth',
      titre: 'Les archives et la tour',
      description: 'Nyrreth (47) cherche dans les archives censurées de Vel\'Nox quelque chose que quelqu\'un veut garder caché. La référence à "la tour d\'Ael" dans un document sur les Trois Couches suggère que ce qu\'il cherche et ce qu\'Ael savait sont liés. S\'il entre dans la tour avant Osara, il trouvera peut-être ce que quelqu\'un a voulu cacher depuis 71 ans.',
      personnages_impliques: [47, 46],
      declencheur: 'Nyrreth trouvant le lien entre les archives censurées et la tour d\'Ael',
      consequence: 'Accès à une connaissance sur le Vol de la Lumière que les archives officielles ne contiennent pas',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'L\'Élu dont l\'énergie a été volée lors du Vol de la Lumière il y a 71 ans. Peut-être encore en vie dans les ruines de sa tour. Osara (51) le connaissait enfant et pense qu\'il est encore là. Nyrreth (47) a trouvé une référence à sa tour dans des archives censurées.',

  relations: [
    { id: 51, nom: 'Osara', type: 'contact', note: 'Le connaissait enfant. Pense qu\'il est peut-être encore en vie. N\'est pas encore allée vérifier.' },
    { id: 47, nom: 'Nyrreth', type: 'contact', note: 'A trouvé une référence à sa tour dans des archives censurées. Commence à comprendre le lien.' },
    { id: 46, nom: 'Vethis', type: 'contact', note: 'Maintient le réseau qu\'Ael a contribué à construire. A parfois senti quelque chose dans les nœuds centraux.' },
  ],

  combat: {
    sorts: [
      'Arc double (Electrique+Stellaire) — décharge électrique chargée de lumière stellaire — impact qui désactive les éléments de l\'adversaire',
      'Réseau vivant (Electrique) — connexion aux structures électriques d\'un bâtiment — contrôle de l\'infrastructure',
      'Cartographie stellaire (Stellaire) — projection de la position des corps célestes dans un espace — navigation précise dans l\'obscurité',
    ],
  },

  image_prompts: [
    {
      id: 'ael_tour',
      description: 'La tour d\'Ael à Vel\'Nox — une structure partiellement effondrée dans l\'obscurité de Noctéa. Une fenêtre de l\'étage supérieur émet une lumière très faible — pas d\'éclairage artificiel, quelque chose d\'autre. En dessous, dans la rue : Osara, 71 ans plus tard, regardant la fenêtre. Elle n\'entre pas encore.',
      style: 'réaliste urbain Noctéa, tour en ruines, lumière faible et inexpliquée, Osara devant, attente de 71 ans, noir de Vel\'Nox, mystère persistant',
    },
  ],

  lore_long: `Ael était l'Élu à double élément Electrique/Stellaire dont l'énergie a été volée lors du Vol de la Lumière il y a 71 ans. Il n'a pas été tué — il a été drainé.

Sa tour est debout. Une fenêtre émet parfois une lumière que personne n'explique. Osara (51), qui le connaissait enfant, pense qu'il est peut-être encore là — sous une forme que personne n'a encore vue.

Nyrreth (47) a trouvé une référence à sa tour dans des archives censurées. Ce qu'Ael savait sur le réseau des Trois Couches est peut-être ce que quelqu'un a voulu cacher.`,
};

export default ael;
