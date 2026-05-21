import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrkavel: PersonnageLoreComplet = {
  id: 309,
  nom: 'Thyrkavel',
  element: 'Sol',
  element2: 'Poison',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Moyen, avec des mains d\'observateur — légères, habituées à tenir des instruments d\'enregistrement plutôt que des outils d\'extraction. La différence est dans le contact avec les surfaces.',
    peau: 'Gris-brun Chthonien avec une légère teinte verte aux coudes — la Poison secondaire qui s\'exprime en zones de contact prolongé avec les champignons. L\'exposition est ancienne mais modérée.',
    yeux: 'Brun-vert, avec une habitude d\'observer latéralement — il regarde les bords des zones, pas les centres.',
    vetements: 'Tenue de naturaliste avec des poches pour des carnets et des outils de mesure. Pas d\'équipement de filtration lourd — ses niveaux d\'exposition sont calculés pour rester sous le seuil de dommage avec sa résistance partielle.',
    signes_particuliers: 'Il parle des champignons et des racines comme de communautés — avec des termes de relation, pas de biologie. Cette anthropomorphisation est méthodologique, pas sentimentale.',
  },

  psychologie: {
    dominante: 'Compréhension de la coexistence comme fait observé. La zone fongique et les réseaux racinaires sylvans coexistent à la frontière d\'Ormn-Dur. Cette coexistence a une logique. Il cherche la logique.',
    mecanisme_de_defense: 'La distinction entre observation et intervention. Il observe. Il ne recommande pas. Si les données mènent à des conclusions utiles, quelqu\'un d\'autre les utilisera.',
    contradiction_interne: 'Il documente une coexistence que la Technocratie voudrait simplifier — soit les champignons, soit les racines. Si ses données prouvent que les deux peuvent coexister, c\'est une remise en question de la politique d\'exclusion de la Fosse. Il n\'est pas sûr de vouloir être la source de cette remise en question.',
    rapport_aux_autres: 'Valyx (38) — spécialiste Poison de référence — est dans ses archives comme source. Il ne l\'a pas rencontrée. Drevaya (39) lui a signalé des zones où la coexistence semblait anormalement stable. Ces zones correspondent à ses propres observations.',
    vision_du_monde: 'La Fosse Interdite n\'est pas un espace de mort. C\'est un espace différemment vivant. La distinction semble petite. Elle change tout à la façon dont on devrait aborder la gestion de cet espace.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière comme terrain de jeu',
      contenu: 'Né dans un quartier d\'Ormn-Dur proche des zones de frontière entre les niveaux miniers et les zones racinaires qui remontaient de Sylvera via des fissures géologiques. À 12 ans, il avait observé des champignons et des racines sylvanes dans le même espace sans que les deux se détruisent. Il avait noté ça dans un carnet. Il cherchait encore la logique de cette coexistence.',
    },
    arrivee: {
      titre: 'Le terrain de recherche',
      contenu: 'À 24 ans, il avait formalisé ses observations en un projet de naturaliste — une cartographie des zones de coexistence champignons/racines à la frontière d\'Ormn-Dur et des fissures géologiques vers Sylvera. Aucune institution ne l\'avait financé. Il avait continué sur budget propre et temps libre.',
    },
    premier_conflit: {
      titre: 'Les archives de Valyx',
      contenu: 'Il avait trouvé des références à des observations similaires dans des archives anciennes — des données de Valyx (38) sur la relation entre éléments Poison et systèmes racinaires. Ces archives étaient partiellement classifiées. Il avait accédé aux parties non classifiées. La partie non classifiée suggérait que ce qu\'il observait avait déjà été documenté et était connu de la Convergence.',
    },
    revelation: {
      titre: 'La zone de Drevaya',
      contenu: 'Drevaya (39) lui avait signalé trois zones spécifiques où la coexistence était anormalement stable — des zones qu\'elle connaissait pour d\'autres raisons. En comparant ses observations sur ces trois zones, il avait trouvé un pattern : les zones de coexistence stable correspondaient à des endroits où le réseau racinaire avait une configuration particulière. Un réseau plus ancien, plus dense. La configuration de la mémoire, peut-être.',
    },
    etat_actuel: {
      titre: 'Le pattern des zones stables',
      contenu: 'Il a cartographié 7 zones de coexistence stable. Toutes correspondent à des configurations racinaires denses. Si son hypothèse est correcte, la gestion de la Fosse devrait tenir compte de ces zones — les préserver permet de maintenir une frontière naturelle plus stable. Il n\'a pas encore décidé à qui transmettre cette conclusion.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrkavel_zones_stables',
      titre: 'Les 7 zones de coexistence',
      description: 'Ses 7 zones de coexistence stable cartographiées correspondent à des configurations racinaires denses — potentiellement des réseaux anciens. Si les racines denses maintiennent une frontière naturelle avec les champignons, la gestion de la Fosse devrait préserver ces zones. Il n\'a pas encore décidé à qui transmettre cette conclusion — Technocratie, Convergence ou archives académiques.',
      personnages_impliques: [38, 39],
      declencheur: 'Pattern identifié entre configuration racinaire et stabilité de coexistence',
      consequence: 'Données potentiellement utiles pour la gestion de la Fosse — non encore transmises',
    },
    {
      id: 'thyrkavel_convergence_connue',
      titre: 'Ce que la Convergence sait déjà',
      description: 'Les archives partielles de Valyx (38) suggèrent que la Convergence sait depuis longtemps que la coexistence champignons/racines est possible. Si c\'est vrai, ses propres découvertes ne sont pas nouvelles — elles confirment quelque chose que la Convergence garde pour elle. Pourquoi ? Il n\'a pas la réponse. Il a décidé de ne pas transmettre ses données à la Convergence en priorité.',
      personnages_impliques: [38],
      declencheur: 'Archives partielles de Valyx suggérant une connaissance préexistante',
      consequence: 'Décision de ne pas transmettre à la Convergence en priorité — choix du canal de transmission non encore fait',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Observateur de la frontière champignons/racines. Ses données suggèrent une gestion possible de la Fosse différente de la politique actuelle. Il n\'est pas encore sûr de vouloir être celui qui la propose.',

  relations: [
    { id: 38, nom: 'Valyx', type: 'allié', note: 'Source dans les archives. Pas de contact direct. Ses données suggèrent que la Convergence sait des choses que Thyrkavel redécouvre.' },
    { id: 39, nom: 'Drevaya', type: 'allié', note: 'A signalé des zones de coexistence stable. Connait ces zones pour d\'autres raisons non précisées.' },
  ],

  combat: {
    sorts: [
      'Réseau racinaire (Sol) — extension de perception dans les racines souterraines — détection et cartographie',
      'Toxine ciblée (Poison) — concentration d\'une substance fongique sur une cible spécifique — dommage de précision',
      'Croissance de frontière (Sol) — stimulation de la croissance végétale en zone de contact — barrière organique naturelle',
    ],
  },

  image_prompts: [
    {
      id: 'thyrkavel_observation',
      description: 'Thyrkavel à la frontière d\'une zone où des champignons dorés et des racines sylvanes coexistent dans le même espace de roche. Il est agenouillé, en train de noter des observations dans un carnet. Il regarde les bords — là où les deux systèmes se touchent sans se détruire.',
      style: 'réaliste naturaliste souterrain, frontière champignons-racines visible, posture d\'observation, carnet de terrain',
    },
  ],

  lore_long: `Thyrkavel étudie la coexistence entre les champignons de la Fosse et les réseaux racinaires sylvans dans les fissures géologiques d'Ormn-Dur.

Il a cartographié 7 zones de coexistence stable. Toutes correspondent à des configurations racinaires denses — des réseaux anciens.

Les archives partielles de Valyx (38) suggèrent que la Convergence sait depuis longtemps que cette coexistence est possible. Si c'est vrai, ses découvertes confirment quelque chose qu'on lui cache. Il a décidé de ne pas transmettre ses données à la Convergence en priorité.

Drevaya (39) lui a signalé trois zones spécifiques. Ces zones confirment son pattern. Il n'a pas demandé pourquoi Drevaya connaissait ces zones.

S'il a raison, la gestion de la Fosse devrait préserver ces zones — elles maintiennent une frontière naturelle plus stable. Il n'a pas encore décidé à qui dire ça.`,
};

export default thyrkavel;
