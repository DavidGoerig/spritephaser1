import type { PersonnageLoreComplet } from '../../../lore-types';

const keshavel: PersonnageLoreComplet = {
  id: 267,
  nom: 'Keshavel',
  element: 'Feu',
  element2: 'Acier',
  espece: 'Hommes-Liens',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Grand, massif — mains larges d\'un forgeur, corps habitué à des travaux lourds. Un peu trop propre pour un forgeur en activité, ce qui signifie qu\'il travaille dans des ateliers de haute précision.',
    peau: 'Mate, rougeâtre aux avant-bras et au cou — marques de Feu. Quelques cicatrices de forge anciennes, bien guéries.',
    yeux: 'Gris métallique, calmes. Pas de profondeur particulière — des yeux qui regardent la surface des choses parce que la surface suffit à ses besoins professionnels.',
    vetements: 'Tenue de forgeur impérial certifié, propre et bien entretenue. Il y a un insigne de rang sur l\'épaule — il y tient, pas par vanité, par exactitude.',
    signes_particuliers: 'Ses mains ne tremblent jamais — 25 ans de forge à haute précision. Il peut tenir un métal fondu dans sa paume élémentaire pendant 40 secondes sans mouvement.',
  },

  psychologie: {
    dominante: 'Détachement professionnel total. Il fait ce qu\'on lui demande de faire, il le fait bien, il repart. Ce qu\'il produit est livré et cesse d\'être son problème.',
    mecanisme_de_defense: 'La séparation absolue entre la fabrication et l\'usage. Il forge des outils. Les outils peuvent être utilisés de multiples façons. L\'usage ne le regarde pas.',
    contradiction_interne: 'Il sait que les conteneurs de puissance suppriment les capacités élémentaires des Élus qui les portent. Il a vu les spécifications. Il n\'a pas demandé ce qu\'ils préparaient. La question ne s\'est pas posée à lui parce qu\'il a cultivé la capacité de ne pas la poser.',
    rapport_aux_autres: 'Kethval (206) est un homologue Dissident qui a refusé ce travail. Keshavel le sait — leur réseau est petit. Il ne juge pas le refus de Kethval. Il ne se juge pas lui-même. Il y a des gens qui font des choix différents.',
    vision_du_monde: 'La forge est neutre. Le métal n\'a pas de morale. Le forgeur qui interprète les usages de ses commandes est un forgeur qui cessera rapidement d\'avoir des commandes.',
  },

  histoire: {
    enfance: {
      titre: 'Le métal et le feu',
      contenu: 'Né dans une famille de forgerons à Khar-Vurn. Feu et Acier simultanément — combinaison rare qui en faisait un forgeur élémentaire exceptionnel dès l\'adolescence. À 14 ans il travaillait dans l\'atelier paternel. À 20 ans il l\'avait dépassé en précision.',
    },
    arrivee: {
      titre: 'L\'atelier impérial',
      contenu: 'Recruté à 28 ans par les forges impériales de la Citadelle — l\'atelier de haute précision pour les commandes à spécifications confidentielles. Il avait accepté parce que le salaire était 3 fois supérieur et les défis techniques 10 fois plus intéressants.',
    },
    premier_conflit: {
      titre: 'Les premières spécifications',
      contenu: 'La première commande de conteneurs de puissance : 8 ans plus tôt. Les spécifications décrivaient un objet qui, porté par un Élu, créait une boucle de rétroaction qui limitait progressivement l\'accès à ses capacités élémentaires. Il avait lu ça. Il avait forgé. Il avait livré.',
    },
    revelation: {
      titre: 'Le refus de Kethval',
      contenu: 'Kethval (206) — homologue Dissident, forgeur de talent comparable — avait refusé une commande similaire 6 ans plus tôt. L\'information avait circulé discrètement dans leur réseau professionnel. Keshavel avait noté le refus. Il avait continué à prendre ses commandes. Il n\'avait pas trouvé que ça demandait une décision — Kethval avait fait un choix, lui aussi avait fait un choix. Leurs choix étaient différents.',
    },
    etat_actuel: {
      titre: 'Les commandes urgentes',
      contenu: 'Depuis 3 mois, des commandes urgentes arrivent de Carevorn (258) — un officier de sécurité de Virex qui a visiblement un besoin important et pressing de conteneurs de puissance. Keshavel les produit avec la même précision qu\'il applique à tout. Les spécifications viennent d\'une source centrale dont il n\'identifie pas le nom — il sait que c\'est Sykavel (242) qui coordonne les spécifications techniques, même s\'il n\'a jamais eu de contact direct.',
    },
  },

  evenements_narratifs: [
    {
      id: 'keshavel_kethval_refus',
      titre: 'L\'autre choix',
      description: 'Kethval (206) est son miroir dans un autre système. Mêmes capacités, même origine, même type de commande — et un choix différent. Keshavel n\'a pas discuté ce choix avec Kethval. Il ne cherche pas à le faire. Si quelqu\'un lui demandait ce qu\'il pense du refus de Kethval, il dirait qu\'il respecte le choix. Ce serait vrai. Il ne peut pas dire pourquoi il a fait le sien.',
      personnages_impliques: [206],
      declencheur: 'Refus de commande similaire par un homologue',
      consequence: 'Miroir moral non confronté — les deux hommes savent que l\'autre existe et ont fait le choix opposé',
    },
    {
      id: 'keshavel_sykavel_specs',
      titre: 'Les spécifications de Sykavel',
      description: 'Les spécifications des conteneurs de puissance qu\'il reçoit depuis 8 ans viennent d\'une source dont le nom n\'apparaît pas dans les transmissions. Il sait que c\'est quelqu\'un qui comprend la métallurgie élémentaire de façon exceptionnelle — les spécifications sont précises comme celles d\'un forgeur, pas d\'un administrateur. Il n\'a pas cherché à identifier la source. Les spécifications lui sont utiles. C\'est suffisant.',
      personnages_impliques: [242],
      declencheur: 'Réception de spécifications techniques de haute précision',
      consequence: 'Lien anonyme avec Sykavel — deux techniciens du même système sans contact direct',
    },
    {
      id: 'keshavel_carevorn_commandes',
      titre: 'Les commandes urgentes',
      description: 'Carevorn (258) commande depuis 3 mois des conteneurs de puissance en quantités et avec une urgence inhabituelles. Keshavel a noté l\'urgence comme une variation dans le pattern de commande habituel. Il n\'a pas cherché à savoir pourquoi. L\'urgence des clients n\'est pas son problème — sa livraison dans les délais l\'est.',
      personnages_impliques: [258],
      declencheur: 'Augmentation soudaine des commandes urgentes',
      consequence: 'Signal de montée en charge opérationnelle — non interprété par Keshavel',
    },
  ],

  arcs: ['arc_second_avatar', 'arc_convergence_drain'],
  position_dans_arc: 'Rouage technique. Il fabrique ce qui rend les opérations possibles sans jamais voir leurs résultats. Son détachement est complet et délibéré.',

  relations: [
    { id: 206, nom: 'Kethval', type: 'rival', note: 'Homologue Dissident qui a refusé ce travail. Keshavel ne se juge pas. Il ne juge pas Kethval. Les choix étaient différents.' },
    { id: 258, nom: 'Carevorn', type: 'contact_nécessaire', note: 'Source des commandes urgentes depuis 3 mois — urgence notée, raison non cherchée.' },
    { id: 242, nom: 'Sykavel', type: 'contact_nécessaire', note: 'Source anonyme des spécifications techniques — identifiée comme un forgeur par la précision des specs. Jamais contacté directement.' },
  ],

  combat: {
    sorts: [
      'Fusion élémentaire (Feu/Acier) — fusion instantanée de métaux dans sa main — température précisément contrôlable',
      'Armure de forge (Acier) — renforcement temporaire des surfaces métalliques d\'un espace ou d\'une personne par imprégnation élémentaire',
      'Frappe de métal liquide (Feu) — projection d\'une coulée de métal fondu à courte portée',
    ],
  },

  image_prompts: [
    {
      id: 'keshavel_forge',
      description: 'Keshavel à l\'atelier, en train de finaliser un conteneur de puissance — un objet métallique d\'une précision délicate, presque belle. Ses mains sont parfaitement stables. Son expression est celle de quelqu\'un qui fait quelque chose qu\'il fait bien. Ce qu\'il forge n\'est pas dans le cadre.',
      style: 'réaliste humain, lumière de forge, atelier de haute précision, tons métal et rouge-feu',
    },
  ],

  lore_long: `Keshavel sait ce que les conteneurs de puissance font.

Il a lu les spécifications. L'objet, porté par un Élu, crée une boucle de rétroaction qui réduit progressivement l'accès aux capacités élémentaires. C'est dans les spécifications techniques, pas caché — les spécifications décrivent l'effet pour qu'il comprenne quelles tolérances sont nécessaires dans la fabrication.

Il a lu ça. Il a forgé. Il a livré.

Kethval a refusé. Keshavel le sait. Ils se connaissent de réputation — leur réseau professionnel est petit, les forgeurs élémentaires certifiés sont rares. Kethval a fait un choix. Keshavel a fait un choix. Ces deux affirmations sont vraies simultanément. Il n'a pas besoin de les réconcilier.

Ce qu'il ne fait pas : demander ce que les conteneurs préparent. Les spécifications lui disent l'effet physiologique. Elles ne lui disent pas pourquoi quelqu'un voudrait produire cet effet sur un Élu. Cette question ne lui est pas venue naturellement pendant 8 ans.

Les commandes urgentes de Carevorn depuis 3 mois. Il les traite dans les délais. L'urgence des clients n'est pas son problème.

Si quelqu'un lui demandait ce qu'il pense de ce qu'il fabrique, il dirait qu'il forge des objets de précision selon des spécifications techniques. Ce serait vrai. Il ne mentirait pas. Il dirait que l'usage ne lui appartient pas — ce serait aussi vrai.

Ce qu'il ne dirait pas, parce que ce n'est pas une pensée qu'il a souvent : que certaines nuits, les spécifications qu'il relit pour vérification lui semblent avoir une qualité différente de ce qu'elles avaient la première fois. Pas plus mauvaises — juste différentes, comme si l'objet qu'il fabriquait avait changé de catégorie dans sa tête sans qu'il le décide.

Il relit les spécifications. Il forge. Il livre.`,
};

export default keshavel;
