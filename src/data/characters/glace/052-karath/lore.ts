import type { PersonnageLoreComplet } from '../../../lore-types';

const karath: PersonnageLoreComplet = {
  id: 52,
  nom: 'Karath',
  element: 'Glace',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Mort — ou présent dans le gel — depuis 312 ans. Dans les archives et les représentations : un enfant Givrin de 16 ans au moment de l\'acte fondateur. Les représentations officielles l\'agrandissent, lui donnent une stature d\'adulte. Les archives privées gardées par Thyval (55) décrivent un adolescent de taille ordinaire avec des mains trop grandes pour son corps — les mains d\'un Élu qui grandissait encore.',
    peau: 'Dans les représentations officielles : blanc Givrin parfait, presque translucide, une beauté canonisée. Dans les archives : "une peau qui avait commencé à cristalliser aux paumes avant la fin de l\'acte — signe que ce qu\'il faisait dépassait ce qu\'un Élu de 16 ans pouvait faire sans se consumer".',
    yeux: 'Dans les témoignages survivants : "bleus si profonds qu\'ils semblaient vides — comme regarder dans le gel lui-même". Ce détail est repris dans toutes les représentations. C\'est peut-être le seul détail authentique qui a survécu au processus de mythification.',
    vetements: 'Dans les archives : tenue ordinaire de combat Givrin. Pas d\'armure spéciale — il n\'avait pas eu le temps d\'en obtenir une. La mythologie officielle lui attribue une armure cristalline qui n\'existait pas.',
    signes_particuliers: 'Peut-être encore présent dans le gel du Champ Gelé. Velsa (58) dit entendre quelque chose depuis le Champ depuis 3 mois. Thyval (55) a trouvé une instruction que Karath aurait laissée pour le dégel. Ces deux faits sont peut-être liés.',
  },

  psychologie: {
    dominante: 'Mort à 16 ans après avoir figé 40 000 soldats en An -312 pour défendre Crysalme. Ce n\'est pas un héros qui a choisi de sacrifier sa vie — c\'est un enfant qui a fait quelque chose d\'impossible dans une situation où personne d\'autre ne pouvait le faire. La mythologie a pris le reste.',
    mecanisme_de_defense: 'Pas applicable — il n\'a pas survécu à l\'acte. Ce qu\'il "pense" n\'est connu que par les fragments de récits et l\'instruction qu\'il aurait laissée pour le dégel.',
    contradiction_interne: 'L\'instruction pour le dégel — si elle est authentique — dit que le gel n\'était pas conçu comme permanent. Karath savait que les soldats gelés reviendraient à la vie à un moment donné. Il a prévu les conditions. La Monarchie a utilisé le gel comme argument géopolitique permanent. Ce n\'est pas ce que Karath avait prévu.',
    rapport_aux_autres: 'Thyval (55) a trouvé son instruction pour le dégel dans des archives privées. Personne ne l\'a encore lue entièrement. Velsa (58) "entend" quelque chose depuis le Champ depuis 3 mois. Sylkra (53) voit les micro-fractures — les premières fractures dans quelque chose que Karath a créé il y a 312 ans.',
    vision_du_monde: 'Ce que l\'instruction pour le dégel dit — selon les fragments que Thyval n\'a pas encore lus entièrement : "Le gel tient tant que la condition est respectée. Quand la condition changera, le gel changera. Ce n\'est pas une décision de qui que ce soit — c\'est la logique du gel."',
  },

  histoire: {
    enfance: {
      titre: 'L\'An -312',
      contenu: 'En An -312, une armée de coalition menaçait Crysalme. Karath avait 16 ans. Il était le seul Élu Glace présent à Crysalme à ce moment qui avait la puissance nécessaire pour faire quelque chose à l\'échelle de ce qui était nécessaire. Il n\'avait pas été formé pour ça. Il avait fait ce qu\'il pouvait faire.',
    },
    arrivee: {
      titre: 'Le gel',
      contenu: 'En 4 heures, il avait figé 40 000 soldats dans un champ cristallin à l\'extérieur de Crysalme. L\'acte avait demandé plus d\'énergie qu\'un Élu de 16 ans ne pouvait en fournir sans conséquences. Il était mort pendant ou juste après le gel. Ce que les témoins disent sur les dernières minutes est contradictoire.',
    },
    premier_conflit: {
      titre: 'L\'instruction',
      contenu: 'Selon les fragments retrouvés par Thyval (55) : dans les heures avant ou pendant le gel, Karath avait laissé une instruction — des conditions pour le dégel. Cette instruction n\'avait pas été rendue publique. Elle était dans des archives privées que la Monarchie avait ensuite contrôlées. Sa condition pour le dégel est peut-être ce qui se modifie actuellement — ce que Sylkra (53) voit dans les micro-fractures.',
    },
    revelation: {
      titre: 'Ce qui reste dans le gel',
      contenu: 'Velsa (58) dit entendre quelque chose depuis le Champ depuis 3 mois. Les Élus Spectre ont une sensibilité aux présences qui persistent dans des états limites. Si quelque chose de Karath persiste dans le gel après 312 ans — pas sa conscience, peut-être une empreinte de l\'acte lui-même — Velsa pourrait l\'entendre avant que les micro-fractures rendent le Champ accessible.',
    },
    etat_actuel: {
      titre: 'Le monument',
      contenu: 'Karath est un monument depuis 312 ans. La Monarchie de Crysalme gouverne en partie au nom de son sacrifice. Ses représentations décorent les bâtiments officiels. Les archives qui le montrent tel qu\'il était — un adolescent de 16 ans avec des mains trop grandes — sont dans les collections de Thyval et ne sont pas rendues publiques.',
    },
  },

  evenements_narratifs: [
    {
      id: 'karath_instruction',
      titre: 'L\'instruction pour le dégel',
      description: 'Thyval (55) a trouvé l\'instruction de Karath pour le dégel. Si cette instruction définit les conditions du dégel, et si Sylkra (53) observe que ces conditions sont en train de changer, le dégel n\'est pas une décision — c\'est une conséquence. La Monarchie n\'a pas le pouvoir d\'arrêter ce que Karath a initié en An -312.',
      personnages_impliques: [55, 53],
      declencheur: 'Thyval lisant entièrement l\'instruction de Karath',
      consequence: 'Compréhension des conditions réelles du dégel — et réalisation que la Monarchie ne peut pas les contrôler',
    },
    {
      id: 'karath_velsa',
      titre: 'Ce que Velsa entend',
      description: 'Velsa (58) dit entendre quelque chose depuis le Champ depuis 3 mois. Si c\'est une empreinte de l\'acte de Karath dans le gel, les informations qu\'elle peut obtenir sur les conditions du dégel sont différentes de celles que Thyval lit dans des archives. Les deux sources ensemble pourraient donner une image plus complète.',
      personnages_impliques: [58, 55],
      declencheur: 'Velsa et Thyval partageant leurs informations sur le Champ',
      consequence: 'Triangulation entre ce que Velsa entend et ce que Thyval a lu — image plus complète de l\'état réel du Champ',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Mort à 16 ans en An -312 après avoir figé 40 000 soldats dans le Champ Gelé. Monument et mythe de Crysalme depuis 312 ans. A peut-être laissé une instruction pour le dégel que Thyval (55) a trouvée mais pas entièrement lue. Velsa (58) entend quelque chose depuis le Champ.',

  relations: [
    { id: 55, nom: 'Thyval', type: 'contact', note: 'A trouvé son instruction pour le dégel dans des archives privées. Ne l\'a pas encore entièrement lue.' },
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'Voit les micro-fractures dans le Champ qu\'il a créé. Peut-être les premières fractures dans les conditions du gel.' },
    { id: 58, nom: 'Velsa', type: 'contact', note: 'Entend quelque chose depuis le Champ depuis 3 mois. Peut-être une empreinte de l\'acte de gel.' },
  ],

  combat: {
    sorts: [
      'Gel de masse (Glace) — cristallisation d\'une zone étendue — capacité unique qui a nécessité sa mort',
      'Champ cristallin (Glace) — création d\'une structure de cristaux portants — confinement de zone permanente',
      'Stase partielle (Glace) — ralentissement d\'une cible sans gel complet — préservation',
    ],
  },

  image_prompts: [
    {
      id: 'karath_champ',
      description: 'Les représentations officielles montrent un guerrier adulte glorieux. Les archives privées montrent autre chose : un adolescent Givrin de 16 ans debout dans la neige avec des mains trop grandes pour son corps, regardant vers les soldats qui approchent. Il n\'a pas l\'air d\'un héros. Il a l\'air de quelqu\'un qui fait ce qu\'il peut faire.',
      style: 'réaliste Givrin adolescent, An -312, champ de bataille enneigé, avant le gel de masse, mains trop grandes, absence de pose héroïque, vérité contre mythe',
    },
  ],

  lore_long: `Karath avait 16 ans quand il a figé 40 000 soldats en An -312. Il est mort pendant ou juste après l'acte. La Monarchie de Crysalme gouverne en partie au nom de ce sacrifice depuis 312 ans.

Thyval (55) a trouvé une instruction que Karath aurait laissée pour le dégel — des conditions qu'il avait lui-même définies. Personne ne l'a encore lue entièrement.

Velsa (58) entend quelque chose depuis le Champ depuis 3 mois. Sylkra (53) voit les micro-fractures. Si les conditions du gel changent, le dégel n'est pas une décision — c'est une conséquence.`,
};

export default karath;
