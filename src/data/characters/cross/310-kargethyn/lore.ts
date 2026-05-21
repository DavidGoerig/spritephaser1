import type { PersonnageLoreComplet } from '../../../lore-types';

const kargethyn: PersonnageLoreComplet = {
  id: 310,
  nom: 'Kargethyn',
  element: 'Poison',
  element2: 'Sol',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Technocratie',

  apparence: {
    taille_corpulence: 'Grand, avec la posture de quelqu\'un qui maintient des barrières — les épaules légèrement en avant, comme si elles absorbaient quelque chose en permanence.',
    peau: 'Gris-jaune Chthonien avec des marques de brûlures chimiques légères sur les avant-bras — des contacts anciens avec des concentrations fongiques dépassant ses tolérances. Il en a des nouvelles régulièrement.',
    yeux: 'Jaune-gris, avec une photosensibilité légère — effet des expositions accumulées. Il plisse les yeux en lumière directe.',
    vetements: 'Tenue de confinement Technocratie renforcée avec des indicateurs de saturation chimique sur les manches — des bandes colorées qui changent de teinte selon le niveau d\'exposition. Il les vérifie régulièrement.',
    signes_particuliers: 'Il peut sentir les variations de concentration fongique dans l\'air. Pas à distance — dans un rayon de 5 mètres environ. Il utilise ça pour son travail et ça lui a sauvé la vie deux fois.',
  },

  psychologie: {
    dominante: 'Maintien des barrières comme protection de ce qui existe derrière elles. Si la zone fongique passe les barrières, les zones habitées deviennent inhabitables. C\'est sa seule certitude.',
    mecanisme_de_defense: 'La vérification constante. Il teste ses barrières plus souvent que les protocoles ne l\'exigent. Deux fois par cycle au lieu d\'une.',
    contradiction_interne: 'Ses barrières sont efficaces. La zone fongique est stable depuis 7 ans sous sa gestion. Mais ses données montrent que la zone fongique pousse — lentement, régulièrement. Les barrières sont stables. Le contenu derrière elles grossit. À un moment, soit les barrières s\'agrandissent, soit la pression dépasse leur capacité.',
    rapport_aux_autres: 'Thyss (42) lui fournit les matériaux pour les barrières — certains matériaux sont spécifiques et ne viennent pas de sources locales. La chaîne d\'approvisionnement est fragile. Une rupture de 3 mois mettrait ses barrières en dessous du seuil de maintenance.',
    vision_du_monde: 'Les barrières fonctionnent jusqu\'à ce qu\'elles ne fonctionnent plus. Son travail est de repousser ce moment le plus loin possible. Pas de l\'éliminer — il sait que ce n\'est pas possible. De le repousser.',
  },

  histoire: {
    enfance: {
      titre: 'La formation aux barrières',
      contenu: 'Formé directement par la Technocratie dans un programme de confinement spécialisé — il y avait 8 recrues au départ. Il en reste 3 actives. Les 5 autres ont quitté pour des raisons de santé ou ont subi des accidents. Il est le plus ancien des 3.',
    },
    arrivee: {
      titre: 'La première barrière autonome',
      contenu: 'À 31 ans, première gestion autonome d\'une barrière de confinement dans la zone est de la Fosse. Deux incidents mineurs en 18 mois — des brèches détectées et colmatées avant propagation. La Technocratie avait noté l\'efficacité. Il avait noté les deux incidents dans son registre personnel avec une analyse des causes.',
    },
    premier_conflit: {
      titre: 'La pression croissante',
      contenu: 'À 38 ans, il avait transmis un rapport documentant l\'augmentation lente mais régulière de la pression fongique sur ses barrières. La Technocratie avait répondu que les barrières étaient adéquates et que la pression restait dans les marges. Il n\'avait pas contesté officiellement. Il avait continué de documenter.',
    },
    revelation: {
      titre: 'Le calcul de saturation',
      contenu: 'Il avait fait le calcul de saturation — à quelle pression les barrières actuelles atteignent leur limite. Selon ses données, à 12 à 18 ans au rythme actuel. Si la pression s\'accélère — et ses données montrent une accélération légère depuis 2 ans — c\'est potentiellement 8 à 10 ans. Il avait mis ce calcul dans son rapport annuel. La Technocratie avait répondu que les modèles officiels donnaient un horizon différent.',
    },
    etat_actuel: {
      titre: 'Les barrières à double rythme',
      contenu: 'Il vérifie ses barrières deux fois par cycle. Les protocoles en exigent une. Il commande des matériaux de remplacement un cycle avant la date recommandée. La chaîne d\'approvisionnement de Thyss (42) est son inquiétude principale — une rupture à ce stade serait critique. Il a commencé à constituer un stock tampon sans en informer la Technocratie.',
    },
  },

  evenements_narratifs: [
    {
      id: 'kargethyn_saturation_calcul',
      titre: 'L\'horizon de 8 à 10 ans',
      description: 'Ses calculs donnent un horizon de saturation des barrières de 8 à 18 ans selon le rythme d\'augmentation de la pression. Les modèles officiels de la Technocratie donnent un horizon plus long. Il ne sait pas si les modèles officiels utilisent les mêmes données que lui ou des données différentes. La différence est significative pour la planification.',
      personnages_impliques: [42],
      declencheur: 'Données de pression croissante sur 7 ans de gestion',
      consequence: 'Horizon de saturation potentiellement plus court que la Technocratie ne l\'estime — non résolu',
    },
    {
      id: 'kargethyn_stock_tampon',
      titre: 'Le stock non déclaré',
      description: 'Il a constitué un stock tampon de matériaux de barrière sans en informer la Technocratie — une réserve de 2 cycles. Si la chaîne d\'approvisionnement de Thyss (42) rompt, ce stock permet de maintenir les barrières en attendant. Techniquement, ce stock appartient à la Technocratie. Il ne l\'a pas déclaré parce que la Technocratie aurait pu le redistribuer.',
      personnages_impliques: [42],
      declencheur: 'Fragilité identifiée dans la chaîne d\'approvisionnement',
      consequence: 'Réserve de 2 cycles non déclarée — protection de la continuité des barrières',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Gardien des barrières entre la zone fongique et les zones habitées d\'Ormn-Dur. Ses calculs donnent un horizon de saturation que la Technocratie refuse d\'adopter. Il prépare en conséquence.',

  relations: [
    { id: 42, nom: 'Thyss', type: 'allié', note: 'Fournisseur de matériaux critiques. Chaîne d\'approvisionnement identifiée comme fragilité. Stock tampon constitué en réponse.' },
  ],

  combat: {
    sorts: [
      'Barrière chimique (Poison) — projection d\'une zone de toxines concentrées formant une frontière — confinement offensif',
      'Ancrage de confinement (Sol) — fixation d\'une barrière au sol environnant — renforcement structural',
      'Détection de saturation (Poison) — perception de la concentration fongique environnante — diagnostic de terrain',
    ],
  },

  image_prompts: [
    {
      id: 'kargethyn_verification',
      description: 'Kargethyn inspectant une barrière de confinement — une surface translucide légèrement verdâtre entre deux zones. Il vérifie les indicateurs sur ses manches. Les bandes colorées montrent une exposition modérée. Il note quelque chose. Derrière la barrière, la teinte dorée-verdâtre de la zone fongique.',
      style: 'réaliste ingénieur de confinement, barrière entre deux zones, indicateurs d\'exposition visibles, travail de vérification',
    },
  ],

  lore_long: `Kargethyn maintient les barrières entre la zone fongique de la Fosse et les zones habitées d'Ormn-Dur.

Ses barrières sont stables depuis 7 ans. La pression derrière elles augmente lentement.

Ses calculs donnent un horizon de saturation de 8 à 18 ans. Les modèles officiels de la Technocratie donnent plus long. Il ne sait pas si c'est parce qu'ils ont de meilleures données ou de meilleures hypothèses.

Il vérifie ses barrières deux fois par cycle. Les protocoles en exigent une.

Il a constitué un stock tampon de matériaux non déclaré — 2 cycles de réserve. Si Thyss (42) ne peut plus fournir, ce stock maintient les barrières pendant qu'il cherche une solution. Il n'a pas déclaré ce stock parce que la Technocratie aurait pu le redistribuer.`,
};

export default kargethyn;
