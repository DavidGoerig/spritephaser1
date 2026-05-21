import type { PersonnageLoreComplet } from '../../../lore-types';

const saelrethkael: PersonnageLoreComplet = {
  id: 387,
  nom: 'Saelrethkael',
  element: 'Normal',
  element2: 'Feu',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Enfant de 11 ans — une corpulence d\'enfant avec une tension permanente dans les mains et les épaules. Elle est en état d\'alerte constante, même quand la situation ne le demande pas.',
    peau: 'Brun clair Homme-Lien avec des marques d\'induction légères aux doigts et aux paumes — les traces de décharges élémentaires involontaires qui se produisent quand sa résonance oscille sans contrôle.',
    yeux: 'Bruns avec une luminosité variable — parfois ordinaires, parfois avec des éclats de couleur qui changent selon son état émotionnel. Quand elle est calme : brun ordinaire. Quand elle est en colère : rouge orangé. Quand elle a peur : bleu-blanc.',
    vetements: 'Tenue simple d\'enfant — mais choisie pour ne pas avoir de parties qui pourraient s\'enflammer facilement lors des oscillations de résonance. Un compromis entre vie normale et prudence.',
    signes_particuliers: 'Elle s\'arrête au milieu des phrases quand elle sent une oscillation venir — une façon d\'essayer de la contrôler en se concentrant. Les personnes qui ne savent pas ce que c\'est croient qu\'elle hésite.',
  },

  psychologie: {
    dominante: 'Survie à Virex avec une multi-résonance élémentaire instable — son élément change selon son état émotionnel, ce qui la rend à la fois unique parmi les 39 enfants Élus de Sarevolt et la plus difficile à cacher. Chaque état émotionnel intense déclenche une oscillation qui produit une signature différente.',
    mecanisme_de_defense: 'Le calme comme contrôle. Elle a appris à essayer de rester calme — pas pour se sentir bien, mais parce que le calme maintient son élément au neutre. Le calme est un outil de survie.',
    contradiction_interne: 'Essayer d\'être calme en permanence dans une situation objectivement stressante est épuisant. L\'épuisement produit des oscillations. Les oscillations produisent des signatures détectables. C\'est un cycle qu\'elle ne peut pas briser seule.',
    rapport_aux_autres: 'Thyrekavel (275) lui a appris des techniques de stabilisation — une aide qui l\'a aidée plus que n\'importe quel autre adulte dans sa situation. Thyven (62) est une figure de référence lointaine que les adultes autour d\'elle mentionnent comme quelqu\'un qui pourrait l\'aider — elle ne sait pas qui c\'est exactement.',
    vision_du_monde: 'Le monde est dangereux quand ton corps fait des choses que tu ne contrôles pas. Les personnes autour d\'elle essaient de la protéger. Elle essaie de ne pas les mettre en danger.',
  },

  histoire: {
    enfance: {
      titre: 'Le premier changement',
      contenu: 'À 7 ans, pendant une dispute avec un ami, ses yeux avaient changé de couleur et elle avait senti quelque chose de chaud dans ses mains. Son ami avait eu peur et était parti. Elle avait passé le reste de la journée à essayer de comprendre ce qui s\'était passé. C\'était la première fois.',
    },
    arrivee: {
      titre: 'L\'arrivée chez Sarevolt',
      contenu: 'À 9 ans, sa famille avait été désintégrée dans une série d\'extractions impériales. Sarevolt (350) l\'avait trouvée dans la zone et intégrée aux 39. Elle était passée de "enfant dont la famille essaie de gérer ses oscillations" à "enfant seule dont personne ne comprend encore les oscillations".',
    },
    premier_conflit: {
      titre: 'L\'oscillation à l\'école',
      contenu: 'À 10 ans, lors d\'un apprentissage collectif organisé par Sarevolt, une dispute avec un autre enfant des 39 avait déclenché une oscillation forte — son élément avait changé 3 fois en 2 minutes, produisant des signatures électriques, de feu et normales en alternance rapide. Kaelvenorm (383) avait été appelé. C\'était leur première rencontre.',
    },
    revelation: {
      titre: 'La stabilisation de Thyrekavel',
      contenu: 'Thyrekavel (275) avait partagé ses propres techniques de stabilisation — il avait vécu avec une multi-résonance depuis l\'enfance. Ses techniques n\'étaient pas parfaites pour elle — sa multi-résonance était plus instable que la sienne — mais elles lui avaient donné des outils qu\'elle n\'avait pas. Elle avait progressé.',
    },
    etat_actuel: {
      titre: 'La démonstration approchante',
      contenu: 'Elle sait que quelque chose de dangereux approche — les adultes autour d\'elle sont plus tendus. La tension des adultes génère de la tension en elle. La tension génère des oscillations. Kaelvenorm (383) la voit plus fréquemment. Sarevolt (350) a commencé à parler avec elle de "si jamais on doit partir vite".',
    },
  },

  evenements_narratifs: [
    {
      id: 'saelrethkael_demonstration_kasevolt',
      titre: 'La signature détectable',
      description: 'Sa multi-résonance produit des signatures multiples en alternance rapide — ce que le prototype de Kasevolt (360) est spécifiquement conçu pour détecter dans les zones de saturation. Thyrsaevyn (359) maintient un brouillage sur elle mais ce brouillage est l\'un des 3 en expiration. Si le brouillage expire avant la démonstration et qu\'elle oscille pendant la démonstration terrain, elle sera identifiée.',
      personnages_impliques: [350, 383],
      declencheur: 'Convergence entre l\'expiration du brouillage de Thyrsaevyn et la démonstration terrain de Kasevolt',
      consequence: 'Risque d\'identification maximale — sa signature oscillante est exactement ce que le prototype cherche à détecter',
    },
    {
      id: 'saelrethkael_stabilisation',
      titre: 'Le travail de Kaelvenorm',
      description: 'Kaelvenorm (383) l\'aide à stabiliser ses oscillations depuis l\'incident à l\'école. Ses progrès sont réels mais insuffisants pour une période de stress aigu comme celle qui approche. La stabilisation thérapeutique prend du temps — elle n\'a peut-être pas le temps nécessaire avant la démonstration de Kasevolt (360).',
      personnages_impliques: [383, 275],
      declencheur: 'Inadéquation entre le rythme de stabilisation thérapeutique et la rapidité de l\'escalade de situation',
      consequence: 'Insuffisance de la stabilisation pour la période de crise imminente — urgence thérapeutique identifiée',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: 'Une des 39 enfants Élus de Virex. Multi-résonance plus instable que Thyrekavel — son élément change avec l\'état émotionnel. Brouillage de Thyrsaevyn (359) en expiration. Sa signature oscillante est exactement ce que le prototype de Kasevolt (360) cherche à détecter.',

  relations: [
    { id: 275, nom: 'Thyrekavel', type: 'allié', note: 'Lui a transmis des techniques de stabilisation depuis sa propre expérience de multi-résonance.' },
    { id: 62, nom: 'Thyven', type: 'contact', note: 'Figure de référence lointaine mentionnée par les adultes autour d\'elle. Elle ne sait pas qui c\'est exactement.' },
  ],

  combat: {
    sorts: [
      'Stabilisation de résonance (Normal) — tentative de maintien de la résonance neutre — prévention des oscillations involontaires',
      'Décharge d\'oscillation (Feu) — décharge thermique produite lors d\'une oscillation vers l\'élément Feu — incontrôlée mais intense',
      'Multi-signature (Normal + Feu) — lors d\'une oscillation rapide entre éléments — plusieurs signatures simultanées qui désorientation les détecteurs',
    ],
  },

  image_prompts: [
    {
      id: 'saelrethkael_oscillation',
      description: 'Saelrethkael à Virex — une enfant de 11 ans debout dans un couloir, ses yeux changeant de couleur entre brun ordinaire et orangé. Ses mains ouvertes, les doigts légèrement écartés — elle essaie de contrôler quelque chose. Son expression est de concentration intense et d\'inquiétude mêlées. Kaelvenorm est à côté d\'elle, calme.',
      style: 'réaliste enfant Élue multi-résonance, oscillation élémentaire, yeux changeant de couleur, Virex, Kaelvenorm présent',
    },
  ],

  lore_long: `Saelrethkael a 11 ans et vit parmi les 39 enfants Élus de Virex protégés par Sarevolt (350). Sa multi-résonance est plus instable que Thyrekavel (275) — son élément change avec son état émotionnel.

Le brouillage de Thyrsaevyn (359) qui la protège est l'un des 3 en expiration imminente. Sa signature oscillante est exactement ce que le prototype de Kasevolt (360) cherche à détecter dans les zones de saturation.

Kaelvenorm (383) l'aide à se stabiliser. Ses progrès sont réels. Insuffisants pour la crise qui approche.`,
};

export default saelrethkael;
