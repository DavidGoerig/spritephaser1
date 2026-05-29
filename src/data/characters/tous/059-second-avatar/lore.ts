import type { PersonnageLoreComplet } from '../../../lore-types';

const secondAvatar: PersonnageLoreComplet = {
  id: 59,
  nom: 'Second Avatar',
  element: 'Feu',
  espece: 'Hommes-Liens',
  region: 'Isthme',
  faction: 'Dissidentes',

  apparence: {
    taille_corpulence: 'Homme-Lien de 28 ans — une apparence qui déçoit ceux qui s\'attendent à un symbole. Il est de taille ordinaire, de corpulence ordinaire. Ce qui n\'est pas ordinaire : quand il utilise son accès aux différents éléments, chaque transition visible dit quelque chose sur ce qu\'il ressent à ce moment. Il ne le contrôle pas entièrement.',
    peau: 'Brune Homme-Lien avec des variations selon l\'élément actif — une légère teinte rouge pour le Feu, bleue pour l\'Eau, etc. Cette variation est involontaire et trahit son état émotionnel autant que son élément. Il a appris à s\'en accommoder sans la contrôler.',
    yeux: 'Changeants — bruns en repos, mais ils adoptent la couleur de l\'élément qu\'il utilise. En repos, ils ont une qualité d\'observation qu\'on décrit souvent comme "trop vieille pour son âge". Il a vu beaucoup de choses pour 28 ans. Il a aussi été caché pour beaucoup d\'entre eux.',
    vetements: 'Tenue des Dissidentes — fonctionnelle, discrète, sans insigne visible. Il n\'aime pas les insignes des Dissidentes non plus. Il porte ses vêtements comme quelqu\'un qui ne veut pas être reconnu, pas comme quelqu\'un qui se cache.',
    signes_particuliers: 'Il pose des questions avant de répondre — une habitude de quelqu\'un qui a appris que les gens lui posent des questions avec une réponse déjà décidée. Il cherche à comprendre la question réelle avant de répondre à la question posée.',
  },

  psychologie: {
    dominante: '28 ans, porte tous les éléments, refuse d\'être un symbole — les Dissidentes le veulent comme étendard de la révolution, l\'Empire veut le capturer, la Convergence veut extraire son énergie. Lui veut comprendre les 9 événements fondateurs avant de décider quoi que ce soit. Il ne se croit pas obligé d\'être ce que les autres décident qu\'il est.',
    mecanisme_de_defense: 'La compréhension comme condition de l\'action. Il ne fait rien d\'irréversible avant de comprendre les conséquences. Cette discipline l\'a sauvé plusieurs fois. Elle frustre les Dissidentes qui l\'ont protégé pendant 28 ans.',
    contradiction_interne: 'Il refuse d\'être un symbole mais il sait qu\'il en est un. Son refus est lui-même symbolique. Les Dissidentes l\'utilisent comme symbole de quelqu\'un qui refuse d\'être utilisé. Il le sait et ne sait pas comment y répondre sans valider le mécanisme.',
    rapport_aux_autres: 'Sarath (61) est mort — il l\'a caché pendant 3 ans. Le Second Avatar lui devait sa survie et ne lui a jamais remboursé cette dette. Ce fantôme est présent dans chaque décision. Thyven (62) est l\'administrateur de Virex qui voit les 39 enfants grandir — une personne qui fait son travail avec honnêteté dans une situation où l\'honnêteté est rare. Le Second Avatar l\'a rencontré une fois. Il veut le revoir. Avel (64) est le Capteur imperial en route — il a 48h. Le Second Avatar ne sait pas encore.',
    vision_du_monde: 'Une seule personne ne peut pas résoudre ce que 9 événements fondateurs ont créé. Mais une seule personne peut poser les bonnes questions aux bonnes personnes. C\'est ce qu\'il essaie de faire.',
  },

  histoire: {
    enfance: {
      titre: 'La naissance',
      contenu: 'Né à An 0 — ou peu avant — avec accès à tous les éléments, une capacité que les théoriciens n\'avaient pas anticipée et que l\'Empire ne pouvait pas tolérer. Sa naissance avait déclenché une réponse immédiate des services de l\'Empire. Les Dissidentes l\'avaient pris avant que l\'Empire arrive. Sarath (61) avait été celui qui l\'avait caché les 3 premières années.',
    },
    arrivee: {
      titre: 'La vie en transit',
      contenu: 'Jusqu\'à 12 ans, il avait changé de lieu de vie tous les 3 à 9 mois — une série de familles Dissidentes, d\'espaces entre deux cités, de routes que l\'Empire ne cartographiait pas. Il avait grandi en sachant que sa présence mettait en danger ceux qui l\'accueillaient. Il avait appris à ne pas s\'attacher.',
    },
    premier_conflit: {
      titre: 'Le symbole',
      contenu: 'À 23 ans, les Dissidentes avaient commencé à utiliser son nom — pas son identité, son nom — dans des communications publiques comme preuve que le Second Avatar existait et n\'était pas contrôlé par l\'Empire. Il avait dit qu\'il ne voulait pas être utilisé de cette façon. Les Dissidentes lui avaient expliqué que ce n\'était pas lui qui était utilisé mais l\'idée de lui. Il avait dit que c\'était la même chose.',
    },
    revelation: {
      titre: 'Les 9 blessures',
      contenu: 'À 26 ans, il avait décidé de comprendre les 9 événements fondateurs — pas en lisant des archives, en allant voir les personnes qui avaient vécu leurs conséquences. Varkhôl, Thalassyr, Asterciel, Sylvera, Ormn-Dur, Vel\'Nox, Crysalme, Virex. Il en avait visité 6. Il n\'avait pas encore été à Vel\'Nox ni à Crysalme. Avel (64) était en route.',
    },
    etat_actuel: {
      titre: 'Les 48 heures',
      contenu: 'Il est à Virex. Avel (64) est à 48h. Thyven (62) l\'a rencontré une fois et ne l\'a pas dénoncé. Les 39 enfants grandissent dans Virex sous la surveillance de Thyven et la pression de Lysael (63). Il ne sait pas encore ce qu\'Avel sait de sa position.',
    },
  },

  evenements_narratifs: [
    {
      id: 'second_avatar_avel',
      titre: 'Les 48 heures',
      description: 'Avel (64) est à 48h d\'arriver dans la zone du Second Avatar. Si le Second Avatar reste à Virex, la confrontation est inévitable. S\'il part, les 39 enfants de Virex perdent la présence de quelqu\'un qui pourrait les protéger de Lysael (63). Les deux options ont des conséquences.',
      personnages_impliques: [64, 62],
      declencheur: 'Arrivée imminente d\'Avel à Virex',
      consequence: 'Confrontation entre le Second Avatar et le Capteur impérial — ou fuite qui abandonne les 39 enfants',
    },
    {
      id: 'second_avatar_thyven',
      titre: 'L\'administrateur honnête',
      description: 'Thyven (62) voit les 39 enfants grandir et comprend le risque. Il ne l\'a pas dénoncé à l\'Empire quand il l\'a rencontré. Le Second Avatar veut le revoir. Si Thyven choisissait d\'aider plutôt que de surveiller, la situation des 39 enfants changerait — et la confrontation avec Avel aussi.',
      personnages_impliques: [62, 63],
      declencheur: 'Second rencontre entre le Second Avatar et Thyven',
      consequence: 'Alliance possible entre le Second Avatar et l\'administrateur confédéral — changement de la situation des 39 enfants',
    },
  ],

  arcs: ['arc_saturation_de_listhme'],
  position_dans_arc: '28 ans, porte tous les éléments, refuse d\'être un symbole. A visité 6 des 9 régions des événements fondateurs. Actuellement à Virex. Avel (64) est à 48h. Thyven (62) ne l\'a pas dénoncé. Les Dissidentes attendent qu\'il décide d\'agir.',

  relations: [
    { id: 61, nom: 'Sarath', type: 'contact', note: 'Mort — l\'a caché pendant 3 ans. Une dette non remboursée. Présent comme fantôme dans chaque décision.' },
    { id: 62, nom: 'Thyven', type: 'allié', note: 'Administrateur de Virex qui ne l\'a pas dénoncé. Il veut le revoir.' },
    { id: 64, nom: 'Avel', type: 'adversaire', note: 'Capteur impérial à 48h d\'arriver. Il ne sait pas encore.' },
  ],

  combat: {
    sorts: [
      'Adaptation élémentaire (Tous) — accès à n\'importe quel élément selon le contexte — polyvalence totale mais sans maîtrise parfaite de chacun',
      'Résonance multiple (Tous) — activation simultanée de deux éléments — effet amplifié mais épuisant',
      'Lecture des éléments (Tous) — perception de l\'élément dominant d\'une zone — navigation et compréhension de l\'environnement',
    ],
  },

  image_prompts: [
    {
      id: 'second_avatar_virex',
      description: 'Le Second Avatar dans Virex — un Homme-Lien de 28 ans debout dans une rue, regardant quelque chose dans la direction d\'où vient Avel. Il ne sait pas encore que quelqu\'un arrive. Ses yeux sont bruns en repos. Il a l\'air d\'une personne ordinaire. Les gens autour de lui ne savent pas ce qu\'il est.',
      style: 'réaliste Homme-Lien, Virex, apparence ordinaire, regard vers un danger invisible, 28 ans de fuite et de compréhension, refus du symbole',
    },
  ],

  lore_long: `Le Second Avatar a 28 ans et porte tous les éléments. Il refuse d'être un symbole. Il veut comprendre les 9 événements fondateurs avant de décider quoi que ce soit.

Il est à Virex. Avel (64) est à 48h. Thyven (62) ne l'a pas dénoncé quand ils se sont rencontrés.

Sarath (61) est mort. Il l'a caché pendant 3 ans. Le Second Avatar lui devait sa survie. Cette dette est présente dans chaque décision.`,
};

export default secondAvatar;
