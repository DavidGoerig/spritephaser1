import type { PersonnageLoreComplet } from '../../../lore-types';

const velthkra: PersonnageLoreComplet = {
  id: 345,
  nom: 'Velthkra',
  element: 'Glace',
  element2: 'Spectre',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Petite pour un Givrin, avec des mouvements qui s\'arrêtent parfois au milieu d\'un geste — elle écoute quelque chose. Cette pause est caractéristique.',
    peau: 'Blanc-gris Givrin avec une translucidité partielle aux mains — l\'élément Spectre qui rend les zones de contact avec les présences spectrales légèrement transparentes.',
    yeux: 'Blanc avec des pupilles très claires. Elle voit dans les deux couches — le Champ Gelé et le monde physique — simultanément dans certaines conditions.',
    vetements: 'Tenue lourde adaptée aux longues périodes dans le Champ Gelé — les températures dans les zones spectrales du Champ sont inférieures de plusieurs degrés aux températures ambiantes déjà basses.',
    signes_particuliers: 'Elle répète parfois à voix basse des fragments de phrases qui ne lui appartiennent pas — des bribes de ce qu\'elle entend dans le Champ Gelé. Ce n\'est pas intentionnel.',
  },

  psychologie: {
    dominante: 'Écoute des soldats gelés dans le Champ — une zone de Crysalme où des milliers de soldats ont été gelés pendant un ancien conflit et dont les présences spectrales persistent. Elle affirme entendre ces présences. Elle ne peut pas le prouver à des tiers.',
    mecanisme_de_defense: 'La distinction entre entendre et transmettre fidèlement. Elle peut entendre les présences. Elle ne peut pas garantir que ce qu\'elle transmet est exact — la traduction depuis une présence spectrale a des marges d\'erreur qu\'elle signale systématiquement.',
    contradiction_interne: 'Ce qu\'elle entend dans le Champ — des fragments de mémoire, des noms, des ordres anciens — a une valeur historique réelle si c\'est authentique. Et une valeur zéro si c\'est une construction de sa perception. Elle ne peut pas trancher elle-même entre les deux. Velskra (169) lui a posé cette question. Elle n\'avait pas de réponse satisfaisante.',
    rapport_aux_autres: 'Velsa (58) est la référence qu\'elle consulte pour des questions sur la nature de ce qu\'elle perçoit — Velsa a une expérience spectrale ancienne qui dépasse la sienne. Velskra (169) est un chercheur qui essaie de vérifier ses affirmations de façon indépendante.',
    vision_du_monde: 'Les soldats gelés dans le Champ ne sont pas des morts — ils sont des présences en suspension. Si quelqu\'un peut les entendre, il faut que quelqu\'un les écoute.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier contact',
      contenu: 'À 16 ans, elle s\'était approchée du Champ Gelé pour la première fois — une zone interdite aux enfants non accompagnés. Elle avait entendu quelque chose. Pas un son physique — une présence dans sa perception spectrale naissante. Elle n\'avait pas su quoi en faire pendant 3 ans.',
    },
    arrivee: {
      titre: 'L\'apprentissage avec Velsa',
      contenu: 'Velsa (58) l\'avait trouvée en train d\'errer à la frontière du Champ Gelé à 19 ans, dans un état de semi-présence spectrale. Elle l\'avait ramenée et lui avait appris à gérer le contact avec des présences spectrales fortes sans y perdre son ancrage physique.',
    },
    premier_conflit: {
      titre: 'Les fragments entendus',
      contenu: 'À 24 ans, elle avait transmis à un historien local des fragments de ce qu\'elle entendait dans le Champ — des noms, des unités militaires, des ordres. L\'historien avait croisé avec des archives. Certains éléments correspondaient. D\'autres ne correspondaient à rien dans les archives. L\'historien avait conclu que les correspondances étaient des coïncidences.',
    },
    revelation: {
      titre: 'La vérification de Velskra',
      contenu: 'Velskra (169) avait proposé une méthode de vérification — il testerait ses affirmations en lui posant des questions sur des éléments qu\'il connaissait de façon indépendante via des archives. Certaines de ses réponses avaient été exactes au-delà de ce que la probabilité permettait d\'expliquer. Velskra n\'avait pas conclu à l\'authenticité — il avait conclu à "une anomalie statistique qui nécessite plus de données".',
    },
    etat_actuel: {
      titre: 'Les sessions régulières',
      contenu: 'Elle a des sessions régulières dans le Champ Gelé — 3 fois par semaine, 2 à 3 heures par session. Velskra (169) continue de collecter des données sur ses transmissions. Thyvalskra (347) — gardien officiel du Champ — est au courant de ses présences. Il n\'a pas demandé qu\'elle arrête.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velthkra_anomalie_statistique',
      titre: 'L\'anomalie non résolue',
      description: 'Les vérifications de Velskra (169) ont produit des résultats qui ne peuvent pas être expliqués par la coïncidence selon ses calculs. Il ne conclut pas à l\'authenticité. Il documente l\'anomalie. Cette anomalie est la chose la plus proche d\'une validation externe que Velthkra a obtenue.',
      personnages_impliques: [169, 58],
      declencheur: 'Tests de vérification de Velskra sur des éléments connus indépendamment',
      consequence: 'Anomalie statistique documentée — pas de conclusion sur l\'authenticité',
    },
    {
      id: 'velthkra_session_champ',
      titre: 'Les sessions au Champ',
      description: 'Thyvalskra (347), gardien officiel du Champ Gelé, sait que Velthkra y entre régulièrement. Il n\'a pas demandé qu\'elle arrête. Il ne l\'accompagne pas non plus. Cette tolérance silencieuse est différente d\'une autorisation. Elle ne sait pas ce qu\'elle implique.',
      personnages_impliques: [347, 169],
      declencheur: 'Présences régulières dans le Champ tolérées par le gardien',
      consequence: 'Accès maintenu — statut ambigu entre tolérance et autorisation',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Médium glacial qui entre dans le Champ Gelé et affirme entendre les présences des soldats gelés. Les vérifications de Velskra (169) produisent une anomalie statistique non expliquée. Thyvalskra (347) tolère ses présences.',

  relations: [
    { id: 58, nom: 'Velsa', type: 'mentor', note: 'L\'a formée à gérer le contact spectral fort sans perdre l\'ancrage physique. Référence pour les questions sur la nature de ses perceptions.' },
    { id: 169, nom: 'Velskra', type: 'allié', note: 'Chercheur qui vérifie ses affirmations indépendamment. A documenté une anomalie statistique. Continue de collecter des données.' },
  ],

  combat: {
    sorts: [
      'Voix du Champ (Spectre) — invocation d\'une présence spectrale du Champ Gelé — perturbation psychique par présence ancienne',
      'Gel spectral (Glace + Spectre) — combinaison de froid physique et de présence spectrale — immobilisation et désorientation',
      'Barrière de glace (Glace) — mur de glace solide — protection physique',
    ],
  },

  image_prompts: [
    {
      id: 'velthkra_champ',
      description: 'Velthkra debout dans le Champ Gelé — une zone de Crysalme où la glace est plus épaisse et plus ancienne. Elle est immobile, légèrement penchée vers l\'avant, comme en train d\'écouter. Des formes floues sont à peine visibles dans la glace à ses pieds — les présences des soldats. Sa main droite est levée, pas dans un geste — dans une pause.',
      style: 'réaliste médium givrin, Champ Gelé, présences floues dans la glace, écoute suspendue',
    },
  ],

  lore_long: `Velthkra entre dans le Champ Gelé de Crysalme et affirme entendre les présences des soldats gelés depuis des siècles.

Velsa (58) lui a appris à gérer le contact spectral fort. Velskra (169) vérifie ses affirmations indépendamment — certaines de ses réponses sont exactes au-delà de ce que la probabilité permet. Pas de conclusion sur l'authenticité. Une anomalie statistique documentée.

Elle ne peut pas trancher elle-même entre perception authentique et construction perceptive. Elle le signale systématiquement.

Thyvalskra (347) tolère ses présences dans le Champ. Elle ne sait pas ce que ça implique.`,
};

export default velthkra;
