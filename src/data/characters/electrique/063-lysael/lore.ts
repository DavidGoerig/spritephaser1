import type { PersonnageLoreComplet } from '../../../lore-types';

const lysael: PersonnageLoreComplet = {
  id: 63,
  nom: 'Lysael',
  element: 'Electrique',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Convergence',

  apparence: {
    taille_corpulence: 'Homme-Lien de 34 ans — une recruteuse dont la présence dit exactement ce qu\'elle veut qu\'elle dise : accessible, directe, convaincue. Elle est de taille moyenne avec des mouvements qui ne s\'arrêtent jamais complètement — une énergie physique qui correspond à son élément.',
    peau: 'Brune Homme-Lien avec une luminescence électrique bleue aux mains — visible en permanence à faible intensité. Elle ne la contrôle pas — ou elle choisit de ne pas la contrôler, dans un poste de recrutement où montrer son élément établit la confiance.',
    yeux: 'Bleus électriques — la couleur la plus intense de l\'élément Electrique sur un visage Homme-Lien. Ses yeux sont sa première impression. Elle le sait.',
    vetements: 'Tenue de terrain de la Convergence — pratique avec des insignes visibles. À Virex, elle ne se cache pas. Sa présence est officiellement celle d\'une représentante de la Convergence qui offre des ressources aux familles des enfants double-puissance. La Convergence a le droit d\'opérer à Virex. Ce qu\'elle fait dans le cadre de ce droit est une autre question.',
    signes_particuliers: 'Elle commence chaque conversation par ce que la Convergence peut faire pour la famille — pas ce qu\'elle veut d\'elle. Cette approche est sincère et calculée à la fois. Elle croit à ce qu\'elle dit. Elle dit aussi ce qui crée la confiance.',
  },

  psychologie: {
    dominante: 'Recruteuse de la Convergence à Virex depuis 3 ans — elle approche les familles des 39 enfants double-puissance pour les connecter à la doctrine de la Convergence. Elle croit sincèrement que la Convergence offre quelque chose de réel aux enfants qui n\'auraient pas d\'autre structure. Elle ne sait pas entièrement ce que la Convergence fera avec les familles qu\'elle recrute.',
    mecanisme_de_defense: 'La conviction sincère comme protection. Elle ne recrute pas des gens — elle leur offre une communauté. Cette distinction est réelle pour elle. Elle lui permet de ne pas examiner ce que la Convergence fait après.',
    contradiction_interne: 'Elle approche des familles d\'enfants double-puissance pour la Convergence. Shael (48) à Vel\'Nox fait quelque chose de similaire — identifier des Élus pour la Convergence. La doctrine dit "redistribution volontaire". Les pratiques de Shael suggèrent autre chose. Lysael ne connaît pas Shael. Elle ne connaît pas ce qui se passe ailleurs dans la Convergence.',
    rapport_aux_autres: 'Thyven (62) sait qu\'elle opère à Virex depuis 3 ans. Il ne l\'a pas arrêtée. Elle sait qu\'il la surveille. Ils ont une sorte d\'équilibre implicite qui ne tiendra pas si la situation des 39 enfants change. Le Second Avatar (59) est à Virex — elle ne le sait pas encore. Si elle le savait, elle ne saurait pas quoi faire de cette information.',
    vision_du_monde: 'Les enfants double-puissance de Virex sont dans une position qu\'aucune institution n\'est conçue pour gérer — trop puissants pour les structures ordinaires, pas assez pour être autonomes. La Convergence a des structures pour eux. Elle leur offre ces structures. Ce que la Convergence en fera ensuite n\'est pas dans ses attributions.',
  },

  histoire: {
    enfance: {
      titre: 'La doctrine',
      contenu: 'Née dans une famille de la Convergence — pas fanatiques, convaincus. Elle avait grandi avec la doctrine de la redistribution comme une évidence : les éléments devraient être accessibles à tous, le Drain volontaire est une forme de don. À 20 ans, elle avait décidé de travailler pour la Convergence activement.',
    },
    arrivee: {
      titre: 'Virex',
      contenu: 'À 31 ans, elle avait demandé le poste de recrutement à Virex — une ville connue pour ses anomalies élémentaires. Elle avait été affectée à Virex en comprenant qu\'elle y trouverait des cas particuliers. Les 39 enfants étaient au-delà de ce qu\'elle avait anticipé.',
    },
    premier_conflit: {
      titre: 'Les familles',
      contenu: 'Dans ses premiers mois à Virex, elle avait identifié que les familles des 39 enfants n\'avaient aucune structure de soutien adaptée — l\'Empire les ignorait, la Confédération les cataloguait, et les enfants grandissaient dans une situation que personne ne comprenait. Elle avait commencé à approcher les familles avec des ressources concrètes : médecins, formateurs, communauté. Les familles avaient accepté.',
    },
    revelation: {
      titre: 'Ce que la Convergence veut',
      contenu: 'Il y a 6 mois, un contact à la Convergence lui avait dit que les enfants de Virex n\'étaient pas la priorité — les parents étaient la priorité. Identifier les familles, comprendre leurs réseaux, déterminer si les parents pourraient être convaincus de contribuer volontairement. Elle avait dit qu\'elle faisait son travail. Il avait dit que son travail changeait légèrement. Elle n\'avait pas posé les questions qu\'elle aurait dû poser.',
    },
    etat_actuel: {
      titre: 'Le moment',
      contenu: 'Elle a 3 ans de relations avec 24 des 39 familles. Elle connaît leur confiance. Avel (64) arrive dans 48h — elle ne le sait pas encore. Si la situation des 39 enfants devient une crise, les familles qu\'elle a approchées seront les premières affectées. Elle ne le sait pas encore.',
    },
  },

  evenements_narratifs: [
    {
      id: 'lysael_familles',
      titre: 'La Convergence et les 39',
      description: 'Lysael a 24 familles en confiance. La Convergence veut maintenant quelque chose de plus spécifique sur ces familles — pas les enfants, les parents. Ce qu\'elle a bâti en 3 ans devient un outil pour quelque chose qu\'elle n\'avait pas prévu. Si elle refuse de continuer dans cette direction, elle trahit la Convergence. Si elle continue, elle trahit les familles.',
      personnages_impliques: [62, 59],
      declencheur: 'Contact de la Convergence lui demandant une information précise sur les parents des 39',
      consequence: 'Lysael devant choisir entre la doctrine et les personnes qu\'elle a approchées',
    },
    {
      id: 'lysael_avel',
      titre: 'Le Capteur et les familles',
      description: 'Avel (64) arrive dans 48h pour les 39 enfants. Si Avel et Lysael opèrent simultanément à Virex, leurs objectifs se chevauchent d\'une façon qui n\'avantage ni l\'un ni l\'autre — et qui met en danger les familles des 39 qui lui font confiance.',
      personnages_impliques: [64, 62],
      declencheur: 'Arrivée d\'Avel à Virex pendant que Lysael opère',
      consequence: 'Conflit indirect entre la Convergence et l\'Empire pour le contrôle des familles des 39',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Recruteuse de la Convergence à Virex depuis 3 ans. A 24 familles des 39 enfants en confiance. Ne sait pas qu\'Avel (64) arrive ni que le Second Avatar (59) est à Virex. Son travail commence à être redirigé par la Convergence vers quelque chose qu\'elle n\'avait pas prévu.',

  relations: [
    { id: 62, nom: 'Thyven', type: 'contact', note: 'L\'administrateur qui la surveille sans l\'arrêter. Équilibre implicite depuis 3 ans.' },
    { id: 59, nom: 'Second Avatar', type: 'contact', note: 'Ne sait pas qu\'il est à Virex. Si elle le savait, la situation changerait.' },
    { id: 64, nom: 'Avel', type: 'adversaire', note: 'Empire. Arrive dans 48h. Elle ne le sait pas.' },
  ],

  combat: {
    sorts: [
      'Choc électrique (Electrique) — décharge directe — paralysie temporaire d\'une cible',
      'Réseau conducteur (Electrique) — connexion à l\'infrastructure électrique d\'une zone — information sur les présences et les mouvements',
      'Impulsion de persuasion (Electrique) — stimulation neurologique légère — amplification de la réceptivité d\'une cible à un argument',
    ],
  },

  image_prompts: [
    {
      id: 'lysael_famille',
      description: 'Lysael devant une maison de Virex — une Homme-Lien de 34 ans en conversation avec une famille, ses mains légèrement lumineuses. Elle écoute. Elle offre quelque chose de concret. Les parents la regardent avec confiance. Elle croit à ce qu\'elle fait. Ce que la Convergence fait avec cette confiance est hors champ.',
      style: 'réaliste Homme-Lien recruteuse, Virex, famille des 39 enfants, confiance en construction, conviction sincère et usage douteux, lumière électrique aux mains',
    },
  ],

  lore_long: `Lysael recrute pour la Convergence à Virex depuis 3 ans. Elle a 24 familles des 39 enfants en confiance. Elle croit sincèrement offrir une communauté à des familles sans soutien.

Il y a 6 mois, un contact à la Convergence lui a dit que le travail changeait. Les parents maintenant, pas les enfants. Elle n'a pas posé les questions qu'elle aurait dû.

Avel (64) arrive dans 48h. Le Second Avatar (59) est à Virex. Elle ne sait pas encore.`,
};

export default lysael;
