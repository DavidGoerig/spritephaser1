import type { PersonnageLoreComplet } from '../../../lore-types';

const drevketh: PersonnageLoreComplet = {
  id: 289,
  nom: 'Drevketh',
  element: 'Poison',
  element2: 'Plante',
  espece: 'Chthoniens',
  region: 'Ormn-Dur',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Grand, os larges — physique Chthonien standard, mais ses habits sont toujours tachés de végétaux — vert, brun, parfois des traces lilas de plantes toxiques.',
    peau: 'Gris sombre avec des stries brunes aux bras — le Plante qui monte depuis les zones sylvanes qu\'il fréquente.',
    yeux: 'Marron Chthonien avec un regard de quelqu\'un habitué à ne pas être écouté. Pas amer — habitué.',
    vetements: 'Tenue de terrain chargée — carnets, contenants d\'échantillons, outils de prélèvement. Il porte tout ce dont il a besoin parce qu\'on ne lui offre pas de laboratoire.',
    signes_particuliers: 'Parle aux plantes qu\'il examine — pas pour communiquer, pour documenter à voix haute. C\'est sa façon de prendre des notes en temps réel.',
  },

  psychologie: {
    dominante: 'Curiosité de naturaliste que personne n\'a voulu financer ou soutenir. Il documente parce que quelqu\'un doit le faire, même sans audience.',
    mecanisme_de_defense: 'L\'évidence de la pertinence. Ses données sont correctes. Qu\'on les lise ou non ne change pas leur validité.',
    contradiction_interne: 'Il documente des espèces à la frontière entre deux biomes depuis 12 ans. Ses écrits sont ignorés. Il continue. Il n\'est pas certain que continuer soit de la persistance ou de l\'entêtement.',
    rapport_aux_autres: 'Drekkel (145) lui a envoyé une demande d\'accès à ses archives il y a 4 ans — le seul contact académique qu\'il ait eu. Drekkel n\'avait pas le statut pour l\'accès. La demande avait été refusée par les institutions — pas par lui.',
    vision_du_monde: 'Les espèces qui vivent à la frontière entre Sylvera et Ormn-Dur sont les plus adaptables du monde. Personne ne les étudie parce qu\'elles ne sont entièrement ni sylvanes ni chthoniennes. Cette absence d\'étude est une erreur.',
  },

  histoire: {
    enfance: {
      titre: 'La frontière comme terrain',
      contenu: 'Né à Ormn-Dur, il passait ses journées d\'enfance dans les zones de transition plutôt que dans les mines ou les tunnels. Les plantes qui poussaient là — toxiques Chthoniennes, végétaux Sylvans, hybrides sans nom — l\'avaient fasciné avant qu\'il sache pourquoi. À 16 ans, il avait commencé à les cataloguer.',
    },
    arrivee: {
      titre: 'Le rejet institutionnel',
      contenu: 'À 24 ans, il avait soumis ses premières observations à l\'académie de la Technocratie pour financement. Refus : ses espèces étudiées n\'entraient dans aucune catégorie de recherche standard. À 26 ans, il avait essayé auprès des Conservateurs Sylvans. Refus : ses espèces n\'étaient pas entièrement sylvanes. Il avait continué de lui-même.',
    },
    premier_conflit: {
      titre: 'La Fosse et ses espèces',
      contenu: 'Il avait documenté une espèce végétale qui poussait dans les zones de vapeurs fongiques de la Fosse — pas affectée négativement, adaptée à ces conditions. Il avait soumis cette observation à la Technocratie comme élément pertinent pour la compréhension de la zone fongique. La réponse avait mis 8 mois, puis avait dit que ses méthodes n\'étaient pas standardisées.',
    },
    revelation: {
      titre: 'Drekkel',
      contenu: 'Drekkel (145) avait demandé accès à ses archives 4 ans avant — par curiosité académique sur la zone fongique. La demande avait été refusée par les institutions académiques qui contrôlaient l\'accès, pas par lui. Il ignorait que cette demande était arrivée jusqu\'à ce que Drekkel le contacte personnellement 3 ans plus tard pour expliquer. Ils avaient échangé des informations directement, sans institution.',
    },
    etat_actuel: {
      titre: 'L\'archive qui attend',
      contenu: 'Il a 12 ans d\'observations sur des espèces qui n\'existent dans aucun catalogue institutionnel. Ses écrits sont sur des carnets personnels, pas dans des systèmes accessibles. Si quelqu\'un cherchait ces informations sans savoir où chercher, il ne les trouverait pas.',
    },
  },

  evenements_narratifs: [
    {
      id: 'drevketh_archive_invisible',
      titre: 'Les 12 ans de carnets',
      description: 'Ses observations couvrent des espèces qui sont peut-être centrales dans la compréhension de la zone fongique et des zones de transition. Elles ne sont accessibles que si on connaît son existence et qu\'on le trouve. Sans institution pour le relayer, ses carnets sont une archive invisible.',
      personnages_impliques: [145],
      declencheur: 'Rejection systématique par les institutions académiques',
      consequence: 'Données potentiellement cruciales sans canal de diffusion',
    },
    {
      id: 'drevketh_drekkel_contact',
      titre: 'L\'échange direct',
      description: 'Après que la demande institutionnelle de Drekkel a été refusée, Drekkel l\'avait contacté directement. Ils ont échangé des informations pendant 6 mois via correspondance personnelle. C\'est le seul échange scientifique sérieux qu\'il a eu. Drekkel est le seul à connaître l\'étendue de ses archives.',
      personnages_impliques: [145],
      declencheur: 'Contact direct initié par Drekkel après le refus institutionnel',
      consequence: 'Seul relais connu de ses archives — Drekkel sait ce qu\'il possède',
    },
  ],

  arcs: ['arc_fosse_interdite'],
  position_dans_arc: 'Naturaliste invisible. Ses archives sur les espèces de frontière sont peut-être importantes pour comprendre la zone fongique — sans canal institutionnel pour être trouvées.',

  relations: [
    { id: 145, nom: 'Drekkel', type: 'allié', note: 'Seul contact scientifique sérieux. A demandé l\'accès via institutions, refusé — a contacté directement. L\'unique personne qui connaît l\'étendue de ses archives.' },
  ],

  combat: {
    sorts: [
      'Toxine naturelle (Poison) — application d\'un extrait de plante frontière aux propriétés toxiques spécifiques',
      'Réseau racinaire (Plante) — activation des systèmes racinaires des espèces de frontière — plus dense que standard',
      'Brume de transition (combiné) — nuage de vapeurs végétales/fongiques qui désoriente les personnes non adaptées à la zone',
    ],
  },

  image_prompts: [
    {
      id: 'drevketh_zone',
      description: 'Drevketh dans une zone de transition, parlant à voix basse à une plante qu\'il examine en prenant des notes. Autour de lui, la végétation hybride de la frontière entre Sylvera et Ormn-Dur. Personne d\'autre dans le cadre. Il est habitué à travailler seul.',
      style: 'réaliste de frontière, lumière ambiguë entre deux biomes, solitude non dramatique, concentration naturaliste',
    },
  ],

  lore_long: `Drevketh documente des espèces que personne d'autre ne catalogue depuis 12 ans.

Ses premières soumissions à l'académie de la Technocratie : refusées (espèces hors-catégorie). Ses soumissions aux Conservateurs : refusées (espèces pas entièrement sylvanes). Il a continué sans financement, sans institution, sans audience.

Ses carnets couvrent des espèces de frontière — certaines qui poussent dans les vapeurs fongiques de la Fosse sans être affectées, des hybrides végétaux sans nom dans aucun catalogue. Ces données sont potentiellement importantes pour comprendre la zone fongique. Elles ne sont accessibles que si on sait qu'il existe et qu'on le trouve.

Drekkel avait essayé de demander l'accès via les institutions académiques il y a 4 ans. Refusé. Drekkel l'avait contacté directement 3 ans après. Ils ont échangé pendant 6 mois. C'est la seule conversation scientifique sérieuse qu'il ait eue.

Il parle aux plantes qu'il examine — pour documenter à voix haute. C'est sa méthode de prise de notes en temps réel. Dans les zones de transition, c'est lui qui parle le plus.`,
};

export default drevketh;
