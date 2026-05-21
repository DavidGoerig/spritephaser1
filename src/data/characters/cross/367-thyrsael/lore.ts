import type { PersonnageLoreComplet } from '../../../lore-types';

const thyrsael: PersonnageLoreComplet = {
  id: 367,
  nom: 'Thyrsael',
  element: 'Psy',
  element2: 'Stellaire',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Analyste — corpulence adaptée au travail de lecture et d\'instrument. Ses mains sont précises pour les manipulations de capteurs psychiques.',
    peau: 'Brun Homme-Lien avec des lignes légères aux tempes — les zones de contact lors des lectures psychiques intenses à long terme.',
    yeux: 'Gris-bleu avec une qualité de lecture des profondeurs — il cherche quelque chose de spécifique dans chaque signature qu\'il analyse.',
    vetements: 'Tenue de laboratoire Convergence — fonctionnelle, sans marqueur de terrain. Il travaille principalement sur des données, pas dans des zones actives.',
    signes_particuliers: 'Il demande à rencontrer des purs élémentaires pour des lectures directes. La plupart refusent. Il note les refus comme des données.',
  },

  psychologie: {
    dominante: 'Analyse de la signature psycho-stellaire spécifique aux purs élémentaires — identification d\'une signature distinctive qui permettrait de distinguer un pur élémentaire d\'un Élu ordinaire à haute résonance par leurs patterns psychiques et stellaires.',
    mecanisme_de_defense: 'La question comme position. Il cherche une réponse — il n\'en a pas encore. Tant qu\'il cherche, il n\'est pas responsable de ce que la Convergence fera de sa réponse quand il l\'aura.',
    contradiction_interne: 'Si sa recherche aboutit, la Convergence aura un outil pour identifier les purs élémentaires à distance. Il sait pour quoi la Convergence collecte des purs élémentaires — l\'Avatar Total. Il continue sa recherche.',
    rapport_aux_autres: 'Sethara (238) lui a fourni des données sur les purs élémentaires Feu qu\'il a analysées. Shyrethvon (225) lui a fourni des données sur les purs élémentaires eau — les deux ensembles montrent des convergences partielles mais pas de signature universelle encore.',
    vision_du_monde: 'Les purs élémentaires ont quelque chose de distinctif dans leur résonance psycho-stellaire. Trouver ce distinctif est un problème analytique. Les problèmes analytiques ont des solutions.',
  },

  histoire: {
    enfance: {
      titre: 'La résonance différente',
      contenu: 'À 19 ans, il avait rencontré pour la première fois un pur élémentaire sans savoir ce qu\'il était. Il avait perçu une signature psychique d\'une qualité différente — plus stable et plus intense à la fois. Il avait commencé à documenter cette différence.',
    },
    arrivee: {
      titre: 'L\'intégration à la Convergence',
      contenu: 'À 27 ans, Sykavel (242) l\'avait recruté. La Convergence avait besoin d\'analystes psycho-stellaires pour des recherches sur les résonances élémentaires. Il avait posé des questions sur la nature de ces recherches. Les réponses avaient été partielles mais suffisamment intéressantes.',
    },
    premier_conflit: {
      titre: 'Les données de Sethara',
      contenu: 'Sethara (238) lui avait fourni des données sur des purs élémentaires Feu. Ces données montraient une stabilité psychique particulière — une signature reconnaissable mais pas encore distincte d\'un Élu à très haute résonance. Il avait besoin d\'autres éléments pour trouver le facteur universel.',
    },
    revelation: {
      titre: 'La convergence partielle',
      contenu: 'Les données de Shyrethvon (225) sur les purs élémentaires eau montraient des convergences avec les données Feu de Sethara — un pattern commun malgré la différence élémentaire. Ce pattern était sa première piste vers une signature universelle. Il avait 3 éléments supplémentaires à analyser pour confirmer.',
    },
    etat_actuel: {
      titre: 'La signature incomplète',
      contenu: 'Il a identifié un pattern commun dans les signatures psycho-stellaires de purs élémentaires Feu et Eau. Il lui manque les données pour 4 autres types élémentaires. La Convergence lui a demandé un délai pour sa première présentation de résultats. Il a dit 6 semaines. Il n\'est pas sûr que ce soit réaliste.',
    },
  },

  evenements_narratifs: [
    {
      id: 'thyrsael_pattern_commun',
      titre: 'La piste de la signature universelle',
      description: 'Le pattern commun aux données Feu (Sethara) et Eau (Shyrethvon) est la première confirmation qu\'une signature universelle existe. Il lui faut 4 types élémentaires supplémentaires. Sa demande à la Convergence pour accéder à des purs élémentaires de ces types va augmenter l\'exposition de ces individus.',
      personnages_impliques: [238, 225],
      declencheur: 'Identification d\'un pattern commun dans deux types élémentaires différents',
      consequence: 'Demande d\'accès à 4 types élémentaires supplémentaires — exposition accrue',
    },
    {
      id: 'thyrsael_usage_convergence',
      titre: 'Ce que la Convergence fera',
      description: 'Si sa recherche aboutit à une signature universelle identifiable, la Convergence aura un outil de détection des purs élémentaires à distance — plus précis que n\'importe quel instrument physique. Il connaît la destination des purs élémentaires collectés par la Convergence. Sa recherche accélère cette collecte.',
      personnages_impliques: [242, 225],
      declencheur: 'Proximité de la finalisation de la signature universelle',
      consequence: 'Outil de détection à distance des purs élémentaires opérationnel pour la Convergence',
    },
  ],

  arcs: ['arc_confluence_psy_stellaire'],
  position_dans_arc: 'Analyste Convergence cherchant la signature psycho-stellaire universelle des purs élémentaires. Pattern Feu/Eau identifié. 4 types élémentaires manquants. 6 semaines annoncées pour la présentation des résultats.',

  relations: [
    { id: 238, nom: 'Sethara', type: 'allié', note: 'A fourni les données sur les purs élémentaires Feu. Première confirmation du pattern.' },
    { id: 225, nom: 'Shyrethvon', type: 'allié', note: 'A fourni les données sur les purs élémentaires Eau. Convergence partielle avec les données Feu.' },
  ],

  combat: {
    sorts: [
      'Lecture de résonance (Psy) — analyse de la signature psychique d\'un Élu ou pur élémentaire — identification du type et de la force',
      'Alignement d\'analyse (Stellaire) — croisement de la signature stellaire avec la signature psychique — identification du pattern commun',
      'Projection d\'identification (Psy + Stellaire) — émission d\'un champ d\'analyse psycho-stellaire — détection des signatures spécifiques dans une zone',
    ],
  },

  image_prompts: [
    {
      id: 'thyrsael_analyse',
      description: 'Thyrsael dans un espace de laboratoire Convergence — des projections de signatures psychiques et stellaires superposées devant lui. Il compare deux patterns (Feu et Eau) cherchant le point commun. Son expression est concentrée et proche de la découverte — il voit quelque chose mais pas encore clairement.',
      style: 'réaliste analyste Homme-Lien Convergence, laboratoire psycho-stellaire, projections de signatures, comparaison analytique',
    },
  ],

  lore_long: `Thyrsael cherche la signature psycho-stellaire universelle des purs élémentaires pour la Convergence. Données Feu (Sethara) et Eau (Shyrethvon) montrent un pattern commun — première confirmation qu'une signature universelle existe.

Il lui manque 4 types élémentaires. 6 semaines annoncées pour la présentation. Il sait pour quoi la Convergence collecte les purs élémentaires. Il continue sa recherche.`,
};

export default thyrsael;
