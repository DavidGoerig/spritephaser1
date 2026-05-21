import type { PersonnageLoreComplet } from '../../../lore-types';

const velnyrath: PersonnageLoreComplet = {
  id: 330,
  nom: 'Velnyrath',
  element: 'Ténèbres',
  element2: 'Insecte',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyenne, avec une façon de se tenir qui évoque quelqu\'un qui écoute en permanence — une légère inclinaison vers ce que les autres ne perçoivent pas.',
    peau: 'Gris Umbrien standard avec des marques fines aux avant-bras — anciennes morsures cicatrisées de ses premiers élevages. Elles sont régulières, presque décoratives maintenant.',
    yeux: 'Gris-brun. Dans l\'obscurité, ils captent un peu plus de lumière que la normale — une adaptation progressive à travailler dans les zones peu éclairées des Trois Couches.',
    vetements: 'Tissu sombre épais, traité contre les acides faibles. Des compartiments latéraux pour les boîtes d\'élevage transportables. Il a toujours au moins un compartiment actif sur lui.',
    signes_particuliers: 'Il peut rester complètement immobile pendant de longues périodes. Ce n\'est pas de la méditation — c\'est de l\'observation. Il regarde les trajectoires de déplacement de ses insectes.',
  },

  psychologie: {
    dominante: 'Cartographie des Trois Couches de Vel\'Nox via les déplacements d\'insectes nocturnes. Les insectes suivent des gradients que les vivants ne perçoivent pas — chaleur, humidité, champs spectraux. Leurs trajectoires révèlent la structure des espaces.',
    mecanisme_de_defense: 'Les insectes comme filtre. Ce qu\'il observe, il l\'observe à travers leurs déplacements. Cette médiation lui permet de rester clinique sur des informations qui devraient être troublantes.',
    contradiction_interne: 'Sa cartographie des Trois Couches produit des données sur les zones spectrales, les accumulations de morts-errants, les gradients d\'énergie. Ces données ont une valeur opérationnelle pour la Convergence. Il le sait. Il n\'a pas décidé ce qu\'il ferait si on lui proposait de les acheter.',
    rapport_aux_autres: 'Thyrav (150) lui a commandé plusieurs cartographies de zones spécifiques — sans expliquer pourquoi. Il a cartographié. Vethis (46) lui a demandé si ses insectes pouvaient couvrir une zone qu\'il n\'avait pas encore explorée. Il a dit qu\'il vérifierait.',
    vision_du_monde: 'Vel\'Nox a une structure que ses habitants ne connaissent pas entièrement. Les plans officiels montrent la surface. Il cartographie ce qui est en dessous, au-dessus, et entre.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier élevage',
      contenu: 'À 13 ans, il avait trouvé une colonie de phortènes des ombres — des insectes nocturnes Umbriens — dans les niveaux inférieurs de son quartier. Il avait observé leurs déplacements pendant 3 jours avant de comprendre qu\'ils suivaient un chemin constant. Ce chemin ne correspondait à aucune voie physique visible. Il avait suivi le chemin jusqu\'à une salle qu\'il ne connaissait pas.',
    },
    arrivee: {
      titre: 'La première carte',
      contenu: 'À 19 ans, il avait produit sa première carte d\'une section des Trois Couches basée uniquement sur les trajectoires de déplacement de 3 espèces différentes d\'insectes nocturnes. La carte montrait des espaces qui n\'étaient dans aucun plan officiel. Il l\'avait gardée pour lui pendant un an avant de la partager avec Thyrav (150).',
    },
    premier_conflit: {
      titre: 'La zone morte',
      contenu: 'À 25 ans, ses insectes avaient refusé de traverser une zone — tous les spécimens de toutes les espèces, convergence rare. Il avait essayé de traverser lui-même. Il avait pu. Mais ses insectes, non. La zone était froide d\'une façon non thermique. Il l\'avait cartographiée depuis le bord et était reparti. Il n\'avait pas d\'explication pour le comportement des insectes.',
    },
    revelation: {
      titre: 'La valeur opérationnelle',
      contenu: 'Vethis (46) lui avait expliqué pourquoi ses cartographies étaient utiles — les zones où les insectes refusent de traverser correspondent souvent à des zones de collecte spectrale active. Ses insectes détectent des champs que ni les vivants ni les instruments standard ne perçoivent. Ses cartes sont une forme de renseignement sur les opérations de la Convergence.',
    },
    etat_actuel: {
      titre: 'La zone demandée par Vethis',
      contenu: 'Vethis (46) lui a demandé de cartographier une zone qu\'il n\'a pas encore explorée — proche d\'une zone de collecte spectrale identifiée. Il a préparé 4 espèces adaptées aux environnements spectraux actifs. Il n\'est pas sûr que ses insectes traverseront. Il a prévu d\'y aller dans 3 jours.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velnyrath_zone_collecte',
      titre: 'La cartographie demandée',
      description: 'Vethis (46) a demandé une cartographie d\'une zone proche d\'une zone de collecte spectrale Convergence. Les insectes de Velnyrath détectent les champs spectraux actifs — ses cartes sont un renseignement indirect sur les opérations de la Convergence. Il a préparé 4 espèces adaptées. Il ne sait pas si elles traverseront. L\'opération est dans 3 jours.',
      personnages_impliques: [46, 150],
      declencheur: 'Demande de cartographie de Vethis dans une zone spectrale active',
      consequence: 'Première cartographie dans une zone de collecte Convergence active — données opérationnelles potentielles',
    },
    {
      id: 'velnyrath_valeur_donnees',
      titre: 'Les données et leur valeur',
      description: 'Ses cartographies des Trois Couches ont une valeur opérationnelle pour la Convergence — elles révèlent les zones de collecte spectrale. Il n\'a pas encore été approché par la Convergence. Il ne sait pas s\'ils connaissent son existence. Si on lui proposait d\'acheter ses données, il n\'a pas de réponse prête.',
      personnages_impliques: [],
      declencheur: 'Prise de conscience de la valeur de ses cartographies',
      consequence: 'Position ambiguë — données indépendantes avec valeur opérationnelle non décidée',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Cartographe indépendant des Trois Couches via les trajectoires d\'insectes nocturnes. Ses cartes révèlent les zones spectrales actives — une ressource que les Dissidentes commencent à utiliser.',

  relations: [
    { id: 150, nom: 'Thyrav', type: 'client', note: 'Commande des cartographies de zones spécifiques sans expliquer les raisons. Premier contact régulier.' },
    { id: 46, nom: 'Vethis', type: 'allié', note: 'A expliqué la valeur opérationnelle de ses cartographies. Demande une zone proche d\'une collecte spectrale active.' },
  ],

  combat: {
    sorts: [
      'Essaim des ombres (Insecte) — déploiement d\'un essaim de phortènes dans un espace — désorientation et reconnaissance',
      'Manteau nocturne (Ténèbres) — absorption de la lumière autour de lui — invisibilité dans les zones peu éclairées',
      'Trajectoire parasite (Insecte + Ténèbres) — guidage d\'un essaim via des gradients ténèbres — ciblage précis en obscurité',
    ],
  },

  image_prompts: [
    {
      id: 'velnyrath_cartographie',
      description: 'Velnyrath debout dans un couloir sombre des Trois Couches, entouré de dizaines de petits insectes en mouvement. Il observe leurs trajectoires sans intervenir. Dans une main, un journal où il note des coordonnées. Son expression est concentrée — il traduit des déplacements en carte.',
      style: 'réaliste umbrien, insectes nocturnes nombreux, observation méthodique, Vel\'Nox profond',
    },
  ],

  lore_long: `Velnyrath élève des insectes nocturnes et cartographie les Trois Couches de Vel'Nox via leurs déplacements. Les insectes suivent des gradients invisibles — chaleur spectrale, humidité, champs énergétiques.

Ses cartes montrent des espaces qui ne sont dans aucun plan officiel.

Vethis (46) lui a expliqué que ses insectes détectent les zones de collecte spectrale active — ses cartes sont un renseignement indirect sur les opérations de la Convergence. Il le savait intuitivement. Il ne savait pas que ça portait ce nom.

Il est dans 3 jours d'une cartographie demandée par Vethis dans une zone proche d'une collecte Convergence active. Il ne sait pas si ses insectes traverseront. Il a préparé 4 espèces.

Ses données ont de la valeur. Il n'a pas décidé ce qu'il ferait si la Convergence le lui proposait.`,
};

export default velnyrath;
