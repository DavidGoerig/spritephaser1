import type { PersonnageLoreComplet } from '../../../lore-types';

const syrethrix: PersonnageLoreComplet = {
  id: 334,
  nom: 'Syrethrix',
  element: 'Ténèbres',
  element2: 'Insecte',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Légèrement au-dessus de la moyenne Umbrien, avec une posture qui indique quelqu\'un qui occupe les espaces délibérément — pas d\'effacement, même en position d\'observation.',
    peau: 'Gris-ardoise Umbrien avec une texture légèrement plus rugueuse aux mains — le contact fréquent avec les carcasses d\'insectes morts après déploiement.',
    yeux: 'Gris pâle avec une qualité de calcul visible. Il évalue les espaces en termes de couverture — où les essaims peuvent aller, où ils ne peuvent pas.',
    vetements: 'Tenue impériale discrète — sans marqueur de faction visible, adaptée aux opérations en zone civile. Des conteneurs d\'essaims intégrés dans la doublure, invisibles à l\'extérieur.',
    signes_particuliers: 'Il a une façon d\'observer les angles d\'une pièce avant d\'entrer — il évalue la couverture potentielle de ses essaims avant de décider où se placer. Ce comportement est devenu automatique.',
  },

  psychologie: {
    dominante: 'Surveillance via essaims d\'insectes dans Vel\'Nox pour compte impérial. Ses essaims couvrent des zones où les agents physiques ne peuvent pas opérer sans être détectés — les réseaux Dissidents ont appris à repérer les présences humaines mais pas les insectes.',
    mecanisme_de_defense: 'Le renseignement comme service. Il fournit des informations. Ce que l\'Empire en fait est une décision au-dessus de son niveau opérationnel. Cette séparation lui permet de traiter son travail comme une compétence technique.',
    contradiction_interne: 'Vel\'Nox est sa ville. Il y est né. Les réseaux qu\'il surveille sont Umbriens — des personnes de son espèce, de sa ville. Il a une règle non déclarée : il ne surveille pas des personnes qu\'il connaît personnellement. Cette règle n\'a pas encore été testée frontalement.',
    rapport_aux_autres: 'Syreth (153) est son supérieur pour les opérations impériales dans Vel\'Nox — il reçoit ses rapports et désigne les zones prioritaires. Thyrvel (158) est un contact pour les informations de contexte — qui se trouve où, quelles opérations sont actives.',
    vision_du_monde: 'Vel\'Nox a besoin de stabilité. Les réseaux Dissidents perturbent cette stabilité. La surveillance est une méthode de maintien de l\'ordre. Il s\'est convaincu que c\'est vrai. Il n\'est pas entièrement convaincu.',
  },

  histoire: {
    enfance: {
      titre: 'L\'éleveur impérial',
      contenu: 'À 15 ans, son quartier avait un éleveur d\'insectes sous contrat impérial — il fournissait des insectes pour des usages non précisés. Syrethrix avait aidé cet éleveur pendant 3 ans. À 18 ans, il avait compris à quoi servaient les insectes. Il avait demandé à rejoindre l\'opération directement.',
    },
    arrivee: {
      titre: 'Le recrutement impérial',
      contenu: 'Syreth (153) l\'avait accepté après une période de test — des déploiements d\'essaims dans des zones contrôlées pour vérifier sa capacité à gérer des essaims dans des environnements urbains complexes. Il avait passé la période de test. Son premier déploiement opérationnel avait couvert 3 zones simultanément.',
    },
    premier_conflit: {
      titre: 'La personne connue',
      contenu: 'À 26 ans, Thyrvel (158) lui avait fourni une liste de zones à couvrir. Une des zones correspondait à un espace qu\'il associait à une personne de son quartier — quelqu\'un qu\'il n\'avait pas vu depuis 5 ans mais qu\'il avait connu. Il avait couvert une zone adjacente et rapporté que la zone désignée n\'avait pas de signal significatif. Il n\'avait pas expliqué pourquoi.',
    },
    revelation: {
      titre: 'L\'efficacité des essaims',
      contenu: 'Syreth (153) lui avait montré des données sur l\'efficacité comparée des méthodes de surveillance à Vel\'Nox — ses essaims couvraient 40% plus de surface par heure que les méthodes standard avec 80% moins de risque de détection. Ces chiffres lui avaient été présentés comme une réussite. Il les avait notés.',
    },
    etat_actuel: {
      titre: 'Les zones prioritaires actuelles',
      contenu: 'Syreth (153) lui a désigné 5 zones prioritaires pour le cycle suivant — un élargissement significatif de sa couverture habituelle. Deux de ces zones sont dans des quartiers qu\'il connaît bien. Il n\'a pas encore vérifié si des personnes qu\'il connaît y opèrent. Il vérifiera avant de déployer.',
    },
  },

  evenements_narratifs: [
    {
      id: 'syrethrix_expansion_couverture',
      titre: 'Les 5 zones prioritaires',
      description: 'Syreth (153) a élargi le périmètre de couverture à 5 zones prioritaires — 2 dans des quartiers que Syrethrix connaît personnellement. Il vérifiera qui y opère avant de déployer. Sa règle non déclarée sur les personnes connues sera probablement testée sur au moins une de ces zones. Il n\'a pas de plan pour ce cas.',
      personnages_impliques: [153, 158],
      declencheur: 'Expansion du périmètre de surveillance ordonné par Syreth',
      consequence: 'Règle personnelle en risque d\'être testée — absence de plan de gestion',
    },
    {
      id: 'syrethrix_regle_personnelle',
      titre: 'La règle non déclarée',
      description: 'Il ne surveille pas des personnes qu\'il connaît personnellement. Cette règle n\'est pas dans ses instructions impériales. Elle n\'est pas connue de Syreth ou Thyrvel. Une fois, il a couvert une zone adjacente plutôt que la zone désignée. Il n\'a pas expliqué. Syreth n\'a pas demandé. Cette règle tient par chance autant que par volonté.',
      personnages_impliques: [],
      declencheur: 'Zone désignée associée à une personne connue',
      consequence: 'Règle maintenue — exposition possible si Syreth demande des explications sur les zones non couvertes',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Agent impérial de surveillance via essaims d\'insectes dans Vel\'Nox. Sa couverture est la plus efficace disponible pour l\'Empire dans la ville. Il a une règle personnelle non déclarée qui limite son périmètre.',

  relations: [
    { id: 153, nom: 'Syreth', type: 'supérieur', note: 'Reçoit les rapports et désigne les zones prioritaires. A montré les données d\'efficacité. N\'a pas posé de questions sur la zone non couverte.' },
    { id: 158, nom: 'Thyrvel', type: 'allié', note: 'Fournit les informations de contexte sur les opérations actives et les personnes présentes dans les zones.' },
  ],

  combat: {
    sorts: [
      'Essaim de surveillance (Insecte) — déploiement d\'un essaim de couverture sur une zone — observation passive persistante',
      'Manteau d\'ombre opérationnel (Ténèbres) — absorption de la lumière autour de lui et de ses conteneurs — déploiement non détectable',
      'Convergence d\'essaims (Insecte + Ténèbres) — fusion de plusieurs essaims sous couverture ténèbres — saturation d\'une zone cible',
    ],
  },

  image_prompts: [
    {
      id: 'syrethrix_deploiement',
      description: 'Syrethrix dans un passage de Vel\'Nox, en train de libérer un essaim depuis un conteneur dissimulé. Les insectes se dispersent silencieusement dans les ombres du couloir. Il est immobile pendant la dispersion — il attend que l\'essaim se stabilise avant de repartir. Sa tenue ne porte aucun marqueur visible.',
      style: 'réaliste surveillance impériale, essaim se dispersant dans les ombres, Vel\'Nox couloir, discrétion totale',
    },
  ],

  lore_long: `Syrethrix déploie des essaims d'insectes dans Vel'Nox pour compte impérial. Sa méthode couvre 40% plus de surface que les méthodes standard avec 80% moins de risque de détection.

Syreth (153) désigne les zones. Thyrvel (158) fournit le contexte. Il déploie et rapporte.

Il a une règle non déclarée : il ne surveille pas des personnes qu'il connaît personnellement. Il l'a appliquée une fois — couverture d'une zone adjacente sans explication. Syreth n'a pas demandé.

Les 5 nouvelles zones prioritaires incluent 2 quartiers qu'il connaît. Il vérifiera avant de déployer. Il n'a pas de plan si sa règle entre en conflit avec les ordres.

Vel'Nox est sa ville. Il n'est pas entièrement convaincu que ce qu'il fait aide la ville à être stable.`,
};

export default syrethrix;
