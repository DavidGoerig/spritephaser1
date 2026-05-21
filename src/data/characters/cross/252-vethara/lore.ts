import type { PersonnageLoreComplet } from '../../../lore-types';

const vethara: PersonnageLoreComplet = {
  id: 252,
  nom: 'Vethara',
  element: 'Fée',
  element2: 'Psy',
  espece: 'Fées',
  region: 'Citadelle',
  faction: 'Empire',

  apparence: {
    taille_corpulence: 'Moyenne, athlétique avec une immobilité professionnelle — elle peut rester parfaitement statique pendant des heures quand elle travaille, ce qui ses sujets trouvent plus déstabilisant que l\'agitation.',
    peau: 'Fée mordorée, reflets cuivrés aux épaules. L\'élément Psy secondaire se manifeste parfois par une légère phosphorescence autour des tempes quand elle se concentre.',
    yeux: 'Ambre profond, avec une fixité qui n\'est pas de la froideur mais de l\'attention totale. Les sujets ont l\'impression qu\'elle lit quelque chose derrière leurs mots.',
    vetements: 'Tunique d\'interrogatrice Empire, grise et sans ornement — neutre par protocole. Elle y a ajouté un seul élément personnel : un bracelet de métal tressé à la cheville gauche, invisible sous la tenue.',
    signes_particuliers: 'Sa voix reste dans une plage de fréquence délibérément étroite quand elle interroge — ni basse ni haute, conçue pour ne pas signaler d\'état émotionnel. Elle l\'a travaillé pendant 2 ans.',
  },

  psychologie: {
    dominante: 'Précision insatiable. Elle mesure ce qu\'elle ne peut pas être et la mesure exacte lui donne quelque chose de la chose même — pas la possession, mais la proximité.',
    mecanisme_de_defense: 'La catégorie professionnelle. Ce qu\'elle fait est de l\'évaluation. Ce qu\'elle ressent devant un pur élémentaire est de la curiosité scientifique. Ces deux affirmations sont vraies et lui permettent de ne pas examiner ce qui se passe entre elles.',
    contradiction_interne: 'Elle sait exactement ce que ces profils impliquent depuis 3 mois. Elle continue avec une minutie croissante. Elle ne s\'explique pas l\'augmentation de la minutie — ce qui est remarquable pour quelqu\'un dont le travail est de comprendre les non-dits des autres.',
    rapport_aux_autres: 'Ses sujets d\'interrogation ne sont pas des personnes pendant la session — ce sont des profils à cartographier. Après la session, ils redeviennent des personnes, mais elle n\'a pas de contact avec eux après.',
    vision_du_monde: 'La pureté élémentaire est une forme de complétude qu\'elle ne possède pas. Elle a deux éléments, ce qui est rare et valorisé. Ce n\'est pas suffisant. Elle ne sait pas suffisant pour quoi.',
  },

  histoire: {
    enfance: {
      titre: 'La Fée à deux éléments',
      contenu: 'Née dans une famille fée de la Citadelle, découverte biélémentaire à 8 ans — Fée et Psy simultanément actifs, chose suffisamment rare pour attirer l\'attention des évaluateurs. On lui a dit que c\'était exceptionnel. Elle a grandi avec l\'idée qu\'exceptionnel signifiait complet. Ce n\'était pas la même chose.',
    },
    arrivee: {
      titre: 'Le don de lecture',
      contenu: 'Recrutée à 22 ans pour ses capacités Psy combinées à sa nature Fée — idéal pour l\'évaluation des Élus, dont la résistance à la lecture mentale ordinaire est déjouée par l\'approche fée. Elle y a vu une valorisation de ce qu\'elle était. C\'était une utilisation de ce qu\'elle pouvait faire.',
    },
    premier_conflit: {
      titre: 'La première pure',
      contenu: 'Sa troisième session d\'évaluation, à 24 ans — une Fée pure, élément unique parfaitement cohérent, sans aucune fracture entre ce qu\'elle était et ce qu\'elle émettait. Vethara avait terminé l\'évaluation en 20 minutes au lieu de 45. Elle avait demandé à refaire la session pour "confirmation de résultats". C\'était la première fois qu\'elle demandait une re-session. Elle ne s\'est pas demandé pourquoi à l\'époque.',
    },
    revelation: {
      titre: 'Les questions changent de forme',
      contenu: 'Il y a 3 mois, elle a noté que les questions du protocole d\'évaluation avaient évolué pour identifier systématiquement des profils "mono-élémentaires haute cohérence". Le formulaire n\'utilisait pas le mot "purs". Elle a su ce que le formulaire cherchait. Elle a affiné ses méthodes pour les trouver avec une précision accrue.',
    },
    etat_actuel: {
      titre: 'La minutie qui s\'explique pas',
      contenu: 'Elle finit ses évaluations plus lentement depuis 3 mois — non par hésitation mais par approfondissement. Elle passe deux fois plus de temps sur les profils à haute cohérence. Elle produit des rapports plus détaillés que le protocole n\'en demande. Elle n\'examine pas pourquoi. Si elle examinait, elle trouverait que c\'est une forme de possession temporaire — être aussi proche que possible de ce qu\'elle ne peut pas être.',
    },
  },

  evenements_narratifs: [
    {
      id: 'vethara_sethara_miroir',
      titre: 'Le même travail, l\'autre côté',
      description: 'Vethara et Sethara (238) font exactement le même travail — identifier les purs élémentaires dans leurs populations respectives. Elles ne se connaissent pas. Si elles comparaient leurs méthodes, elles trouveraient une convergence troublante. Leurs motivations divergent légèrement : Sethara d\'une fascination intellectuelle honnête, Vethara de quelque chose de plus proche de l\'envie. La frontière est mince.',
      personnages_impliques: [238],
      declencheur: 'Développement parallèle de techniques d\'identification',
      consequence: 'Miroir non rencontré — mêmes méthodes, motivations divergentes',
    },
    {
      id: 'vethara_telvara_cas_anomalie',
      titre: 'Les cas envoyés',
      description: 'Telvara (249) lui envoie les cas classés "anomalie" depuis 14 mois — profils dont les relevés élémentaires sortent du spectre standard. Vethara les traite en priorité. Elle ne demande jamais ce que Telvara observe de son côté. Telvara ne demande pas ce que Vethara fait des résultats. L\'information circule dans une direction et ne revient pas.',
      personnages_impliques: [249],
      declencheur: 'Protocole de transmission des cas anomalie',
      consequence: 'Circuit d\'information unidirectionnel — chacune voit une partie du processus',
    },
    {
      id: 'vethara_sujet_pure',
      titre: 'La session prolongée',
      description: 'Il y a 2 semaines, elle a eu un sujet Sol pur — cohérence élémentaire parfaite, profil comparable à ce que ses instruments avaient capté sur Drethven (245) à distance. Elle a prolongé la session de 2 heures. Le rapport produit était 4 fois plus long que le standard. Elle a transmis le dossier. Elle a gardé ses notes personnelles.',
      personnages_impliques: [245],
      declencheur: 'Évaluation d\'un sujet Sol à haute cohérence',
      consequence: 'Notes personnelles conservées — limite entre travail et fascination franchie',
    },
  ],

  arcs: ['arc_convergence_drain', 'arc_citadelle_empire'],
  position_dans_arc: 'Outil et sujet à la fois. Elle identifie les purs pour un système dont elle ne comprend pas la finalité ultime — ou plutôt, qu\'elle comprend et dont elle a décidé que comprendre n\'exigeait pas d\'agir. Son problème n\'est pas l\'ignorance mais quelque chose de plus difficile.',

  relations: [
    { id: 246, nom: 'Sylviel', type: 'mentor', note: 'Même technique de lecture, contexte différent. Sylviel l\'a formée — elle n\'a jamais su ce que Sylviel faisait avec les mêmes outils.' },
    { id: 249, nom: 'Telvara', type: 'allié', note: 'Lui envoie les cas anomalie depuis 14 mois. Circuit d\'information unidirectionnel — Vethara reçoit, ne renvoie pas.' },
    { id: 238, nom: 'Sethara', type: 'rival', note: 'Miroir non rencontré. Même travail, motivations différentes. Sethara a une honnêteté sur sa fascination que Vethara n\'a pas encore.' },
  ],

  combat: {
    sorts: [
      'Lecture empathique (Psy) — cartographie l\'état émotionnel et les associations mentales de surface d\'un sujet consentant',
      'Résonance fée (Fée) — amplifie la signature élémentaire d\'un sujet pour en mesurer la cohérence',
      'Voile d\'attention (Psy) — maintient la concentration du sujet sur un stimulus pendant l\'évaluation',
    ],
  },

  image_prompts: [
    {
      id: 'vethara_session',
      description: 'Vethara en face d\'un sujet, immobile, ses yeux ambre fixés avec une attention totale. Une légère phosphorescence aux tempes. Le sujet est mal à l\'aise. Elle ne l\'est pas — elle est ailleurs, dans quelque chose qui ressemble à de l\'absorption.',
      style: 'réaliste fée, lumière froide, salle d\'évaluation neutre, tons gris et cuivré',
    },
  ],

  lore_long: `Vethara sait ce que les purs élémentaires deviennent. Elle l'a compris il y a 3 mois, quand le protocole d'évaluation a changé de forme pour la cinquième fois depuis son recrutement — cette fois vers l'identification systématique des profils "mono-élémentaires haute cohérence".

Elle a su. Elle a affiné ses méthodes.

Ce n'est pas de l'indifférence. Si c'était de l'indifférence, elle n'aurait pas prolongé la session de 2 heures sur le sujet Sol. Si c'était de l'indifférence, elle n'aurait pas gardé ses notes personnelles. L'indifférence ne prend pas de notes personnelles.

Ce que Vethara ressent devant un pur élémentaire est quelque chose qu'elle ne nomme pas. C'est une forme d'attraction — pas romantique, pas territoriale, quelque chose de plus fondamental. Ils sont complets d'une façon qu'elle ne peut pas être. Elle a deux éléments, ce qui est rare et valorisé, et ce n'est pas la même chose. Deux éléments signifie deux natures à réconcilier. Un seul élément pur signifie une cohérence absolue entre ce qu'on est et ce qu'on émet — aucune friction interne, aucune traduction nécessaire.

Elle ne peut pas avoir ça. Elle peut le mesurer.

Mesurer est une forme de possession temporaire. Pendant la session, elle est aussi proche que possible de ce qu'elle ne peut pas être. Les rapports détaillés qu'elle produit sont une façon de prolonger ce moment.

Elle ne s'explique pas la minutie croissante. Ce serait trop facile. Si elle s'expliquait la minutie croissante, elle devrait aussi expliquer ce qu'elle fait après, et ce n'est pas une question qu'elle a commencé à poser.

Telvara lui envoie les cas anomalie. Elle les traite en priorité. Sethara fait le même travail côté Convergence — Vethara ne le sait pas, mais si elle le savait, elle reconnaîtrait quelque chose dans leurs méthodes qui ressemble à de la parenté. Sethara a peut-être une honnêteté sur sa fascination que Vethara n'a pas encore atteinte. Ou peut-être que Sethara a simplement choisi un mot différent pour la même chose.

Les sujets qu'elle évalue disparaissent des registres. Elle le sait. Elle n'examine pas ce qu'elle ressent à ce sujet non plus.`,
};

export default vethara;
