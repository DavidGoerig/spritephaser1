import type { PersonnageLoreComplet } from '../../../lore-types';

const vorvakh: PersonnageLoreComplet = {
  id: 307,
  nom: 'Vorvakh',
  element: 'Sol',
  element2: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Mince pour un Chthonien, avec la silhouette d\'un passeur qui se glisse là où les corpulences plus massives ne passent pas. Pas frêle — économe.',
    peau: 'Gris-brun Chthonien avec des teintes violacées aux doigts et aux pieds — l\'héritage Umbrien qui apparaît dans les zones de contact prolongé avec les champignons et l\'ombre. Son espèce mixte s\'exprime dans l\'environnement de la Fosse.',
    yeux: 'Violets foncés plutôt que gris — l\'Umbrien dominant dans les traits du visage même si le Chthonien domine dans le reste du corps.',
    vetements: 'Tenue de passage minimaliste — rien qui accroche, rien qui brille, rien qui retient. Des poches secrètes dans des emplacements inhabituels. Il sait où tout est sans chercher.',
    signes_particuliers: 'Il ne prend pas de notes. Il ne garde rien d\'écrit. Les routes sont dans sa tête. Si on le force à les noter, ce qu\'il note n\'est pas exact.',
  },

  psychologie: {
    dominante: 'Navigation dans des espaces que les autres ne peuvent pas traverser. Les zones fongiques sont ses routes parce qu\'elles excluent automatiquement les poursuivants sans équipement. Il les connaît mieux que les ingénieurs de la Fosse.',
    mecanisme_de_defense: 'L\'absence de traces. Pas de documents, pas de correspondances, pas d\'habitudes fixes. Si on ne peut pas le trouver, on ne peut pas le stopper.',
    contradiction_interne: 'Il travaille pour les Dissidentes mais il connaît des routes que les Dissidentes ne connaissent pas. Cette asymétrie d\'information est sa protection. C\'est aussi sa solitude — il ne peut pas partager tout ce qu\'il sait sans perdre ce qui le rend irremplaçable.',
    rapport_aux_autres: 'Thyrvum (136) lui fournit des informations sur les checkpoints impériaux. Drevaya (39) est son contact pour les personnes à faire passer — elle connaît les noms, lui connaît les routes. Ils ne se croisent pas plus que nécessaire.',
    vision_du_monde: 'Les zones interdites ne sont interdites que pour ceux qui n\'ont pas les outils pour y vivre. Les zones fongiques sont interdites pour les personnes sans immunité partielle ou équipement. Il a une immunité partielle. C\'est suffisant.',
  },

  histoire: {
    enfance: {
      titre: 'Les deux héritages',
      contenu: 'Né d\'un père Chthonien et d\'une mère Umbrienne — un mélange rare à Ormn-Dur. Les deux héritages lui avaient donné une constitution différente : la solidité Chthonienne sans la masse, la sensibilité à l\'ombre Umbrienne sans la fragilité à la lumière. À 15 ans, il s\'était rendu compte qu\'il supportait les vapeurs fongiques légères sans symptômes — une immunité partielle probablement liée au mélange.',
    },
    arrivee: {
      titre: 'La première route',
      contenu: 'À 23 ans, il avait commencé à cartographier les zones fongiques accessibles sans équipement complet — des routes que personne d\'autre n\'utilisait. Les Dissidentes l\'avaient trouvé 2 ans plus tard. Pas directement — Thyrvum (136) l\'avait approché dans un marché secondaire. L\'offre était claire : ses routes, contre leur protection et leur information.',
    },
    premier_conflit: {
      titre: 'Le passage qui a mal tourné',
      contenu: 'Un passage dans une zone fongique légère avait mal tourné — la composition des vapeurs avait changé depuis sa dernière visite. La personne qu\'il faisait passer avait eu une réaction sévère. Il l\'avait extraite en urgence via une route de repli qu\'il n\'avait pas signalée aux Dissidentes. La personne avait survécu. Lui avait appris que ses données de routes devaient être vérifiées plus régulièrement.',
    },
    revelation: {
      titre: 'Les variations saisonnières',
      contenu: 'La composition des vapeurs dans les zones fongiques variait selon les saisons — des cycles qu\'il avait documentés mentalement sur 3 ans. Certaines zones sûres en hiver étaient létales en été. Ses routes changeaient donc selon la saison. C\'était une complexité que les Dissidentes ne comprenaient pas quand elles lui demandaient des passages. Il expliquait rarement. Il refusait les demandes qui ne correspondaient pas aux conditions actuelles.',
    },
    etat_actuel: {
      titre: 'Les routes saisonnières',
      contenu: 'Il maintient actuellement 6 routes actives selon les conditions. Deux sont fermées pour la saison. Une nouvelle route potentielle est en reconnaissance — une zone dont la composition a changé récemment et qui pourrait être traversable maintenant. Drevaya (39) a une liste de 4 passages en attente. Il a dit qu\'il pouvait en faire 2 cette saison.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vorvakh_routes_saisonnieres',
      titre: 'Les deux passages en attente',
      description: 'Drevaya (39) a 4 passages en attente. Il a accepté 2 pour cette saison — les conditions permettent 2, pas 4. Les 2 autres devront attendre. Il a donné des délais approximatifs. Les personnes en attente ne savent pas combien de temps elles attendront. Cette incertitude est la contrainte du système.',
      personnages_impliques: [39, 136],
      declencheur: 'Conditions saisonnières limitant le nombre de passages possibles',
      consequence: 'Personnes en attente de passage sans horizon temporaire précis',
    },
    {
      id: 'vorvakh_nouvelle_route',
      titre: 'La zone en reconnaissance',
      description: 'Une zone dont la composition fongique a changé récemment est en cours de reconnaissance. Si elle est traversable, c\'est une nouvelle route qui raccourcit un passage de 3 heures. S\'il se trompe sur la composition, la reconnaissance peut être son dernier voyage. Il y va seul. Il l\'a calculé.',
      personnages_impliques: [],
      declencheur: 'Changement observé de composition dans une zone précédemment inaccessible',
      consequence: 'Nouvelle route potentielle — reconnaissance en solo à risque calculé',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Passeur unique dans les zones fongiques. Ses routes permettent des mouvements qu\'aucun autre réseau Dissident ne peut assurer. Sa mort ou sa capture fermerait ces routes sans remplacement immédiat.',

  relations: [
    { id: 136, nom: 'Thyrvum', type: 'allié', note: 'Fournit les informations sur les checkpoints. Intermédiaire initial avec les Dissidentes.' },
    { id: 39, nom: 'Drevaya', type: 'allié', note: 'Fournit les noms des personnes à passer. Contact opérationnel direct.' },
  ],

  combat: {
    sorts: [
      'Brume de sol (Sol) — génération d\'un écran de poussière de terre dense — dissimulation et couverture',
      'Vapeur fongique (Poison) — concentration et direction de vapeurs existantes — zone de toxicité guidée',
      'Passage souterrain (Sol) — glissement dans des fissures du sol impraticables pour un gabarit normal — évasion',
    ],
  },

  image_prompts: [
    {
      id: 'vorvakh_passage',
      description: 'Vorvakh dans un couloir dont les murs sont couverts de champignons dorés — la zone fongique légère. Il se déplace sans masque, guidant quelqu\'un derrière lui qui porte un équipement complet de filtration. La différence de leur rapport à l\'espace est visible dans chaque posture.',
      style: 'réaliste passage souterrain fongique, teintes dorées et violacées, guide et guidé, furtivité fonctionnelle',
    },
  ],

  lore_long: `Vorvakh connaît les routes à travers les zones fongiques d'Ormn-Dur. Les zones que les autres ne peuvent pas traverser sans mourir.

Il a une immunité partielle — héritage de son mélange Chthonien/Umbrien. Il n'a jamais su exactement pourquoi ça fonctionnait. Il a arrêté de chercher à savoir.

Ses routes changent selon les saisons. La composition des vapeurs varie. Une zone sûre en hiver peut être létale en été. Il refait sa carte mentale régulièrement.

Drevaya (39) lui donne les noms. Il donne les passages. Ils ne se croisent pas plus que nécessaire.

Une nouvelle zone est en reconnaissance. Si la composition est traversable, c'est une route de 3 heures de moins. S'il se trompe, c'est sa dernière reconnaissance. Il y va seul.`,
};

export default vorvakh;
