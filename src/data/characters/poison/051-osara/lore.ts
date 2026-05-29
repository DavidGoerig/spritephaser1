import type { PersonnageLoreComplet } from '../../../lore-types';

const osara: PersonnageLoreComplet = {
  id: 51,
  nom: 'Osara',
  element: 'Poison',
  espece: 'Umbriens',
  region: 'Noctéa',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Umbrienne de 84 ans — une présence qui dit l\'âge sans le porter comme un poids. Elle s\'est adaptée à 71 ans dans les rues de Vel\'Nox. Elle se déplace plus lentement qu\'elle ne l\'a jamais fait, mais elle n\'hésite jamais sur ses destinations.',
    peau: 'Gris profond Umbrienne avec des stries violacées qui courent des mains aux épaules — une adaptation de l\'élément Poison sur un corps de 84 ans. Ces stries sont plus apparentes qu\'elles ne l\'étaient dans sa jeunesse. Elle dit qu\'elles ont poussé pendant les 71 ans.',
    yeux: 'Noirs avec une profondeur qui dit les décennies passées dans Vel\'Nox. Elle a vu le Vol de la Lumière à 13 ans. Elle a vu tout ce qui a suivi. Ses yeux l\'indiquent.',
    vetements: 'Tenue simple des habitants anciens de Vel\'Nox — confortable, sans ostentation, avec des marques de temps bien entretenues. Elle connaît les marchés nocturnes mieux que leurs marchands actuels. Ses vêtements disent qu\'elle n\'a rien à prouver.',
    signes_particuliers: 'Elle connaît chaque recoin de Vel\'Nox où quelqu\'un pourrait se cacher — depuis 71 ans qu\'elle y cherche Ael (45). Elle ne dit pas que c\'est ce qu\'elle fait. Elle dit qu\'elle marche.',
  },

  psychologie: {
    dominante: 'Témoin du Vol de la Lumière à 13 ans — elle était dans la rue adjacente à la tour d\'Ael quand l\'énergie de l\'Élu a été volée. Elle a entendu quelque chose. Pas un cri. Quelque chose de différent. Elle vit à Vel\'Nox depuis 71 ans. Elle croit que cela et la présence d\'Ael sont liés.',
    mecanisme_de_defense: 'La patience comme identité. Elle attend depuis 71 ans. Elle ne dit pas que c\'est de l\'attente. Elle dit que c\'est une façon de vivre.',
    contradiction_interne: 'Elle croit qu\'Ael est encore en vie dans sa tour. Elle n\'y est pas allée. Elle connaît chaque rue de Vel\'Nox et a évité cette tour pendant 71 ans. La raison qu\'elle ne s\'est pas formulée : si elle va et qu\'il n\'est pas là, ce qu\'elle attendait depuis 71 ans n\'existe pas. Si elle va et qu\'il est là, quelque chose change. Les deux lui font peur de façon différente.',
    rapport_aux_autres: 'Tharyn (50) est un marchand qu\'elle connaît depuis 25 ans — elle lui fait confiance dans la limite de ce que la neutralité de Tharyn permet. Elle passe dans ses marchés régulièrement. Elle sait que quelque chose a changé dans les marchés depuis 4 mois. Elle n\'a pas demandé à Tharyn ce qu\'il observait — peut-être parce qu\'elle ne veut pas que sa préoccupation pour la tour d\'Ael soit reliée à autre chose. Nyrreth (47) est arrivé à Vel\'Nox il y a 8 ans — elle l\'a remarqué parce que sa façon d\'entrer dans un espace ressemblait à quelqu\'un qui cherchait quelque chose de précis. Elle ne lui a pas encore parlé.',
    vision_du_monde: 'Le Vol de la Lumière n\'est pas une histoire. C\'est quelque chose qu\'elle a vu à 13 ans. Ce que la mémoire collective de Vel\'Nox en a fait — une fondation mythique, un argument politique — est une autre chose. Elle distingue les deux. La distinction lui a coûté 71 ans de solitude.',
  },

  histoire: {
    enfance: {
      titre: 'La rue adjacente',
      contenu: 'À 13 ans, dans la rue adjacente à la tour d\'Ael (45), elle avait vu la tour s\'obscurcir progressivement pendant 4 heures. Elle avait entendu quelque chose — pas un cri, une vibration dans les murs de la rue, comme si quelque chose de très grand s\'arrêtait. Les adultes autour d\'elle avaient couru vers la tour ou s\'en étaient éloignés. Elle était restée immobile et avait regardé jusqu\'à la fin.',
    },
    arrivee: {
      titre: 'La décision de rester',
      contenu: 'À 16 ans, 3 ans après le Vol, sa famille l\'avait incitée à quitter Vel\'Nox — la cité était marquée par ce qui s\'était passé, moins sûre que les autres. Elle avait dit qu\'elle restait. Elle ne leur avait pas dit pourquoi. Elle ne s\'était pas encore dit pourquoi à elle-même.',
    },
    premier_conflit: {
      titre: 'Les 71 ans',
      contenu: 'À 84 ans, elle vit à Vel\'Nox depuis qu\'elle a décidé de rester à 13 ans. Elle a vu la cité changer autour d\'elle. Elle a vu les marchés nocturnes se former, les Trois Couches se construire, les Dissidentes s\'installer. Elle n\'a pas quitté Vel\'Nox depuis 71 ans. La tour d\'Ael est toujours là. Elle ne s\'y est jamais approchée de moins de 200 mètres.',
    },
    revelation: {
      titre: 'La fenêtre',
      contenu: 'Il y a 3 mois, à 2h du matin, en passant dans une rue à 150 mètres de la tour : une lumière à la fenêtre de l\'étage supérieur. Pas d\'éclairage artificiel — quelque chose d\'autre. Elle s\'était arrêtée. La lumière avait duré 4 minutes puis disparu. Elle n\'était pas allée vérifier. Elle avait changé de direction et n\'était pas repassée par là depuis.',
    },
    etat_actuel: {
      titre: 'La décision imminente',
      contenu: 'Nyrreth (47) cherche quelque chose dans les archives censurées qui semble lié à la tour d\'Ael. Tharyn (50) observe des nouvelles marchandises dans les marchés qui ressemblent à quelque chose qu\'elle a vu lors du Vol. Ces deux faits, joints à la lumière de 3 mois plus tôt, commencent à lui ressembler à une convergence. Elle commence à penser qu\'elle va devoir aller voir la tour.',
    },
  },

  evenements_narratifs: [
    {
      id: 'osara_tour',
      titre: 'La visite',
      description: 'Osara a vu une lumière dans la tour d\'Ael (45) il y a 3 mois. Elle n\'y est pas allée. Nyrreth (47) cherche quelque chose lié à cette tour dans les archives censurées. Si Osara allait voir la tour avant Nyrreth, ce qu\'elle trouverait serait différent — elle a une relation avec Ael que Nyrreth n\'a pas. Si Nyrreth y va avant elle, ce qu\'il cherche prime sur ce qu\'elle cherche depuis 71 ans.',
      personnages_impliques: [47, 46],
      declencheur: 'Osara décidant d\'approcher la tour après 71 ans',
      consequence: 'Rencontre possible avec ce qu\'Ael est devenu — ou confirmation que la tour est vide',
    },
    {
      id: 'osara_tharyn',
      titre: 'Les nouvelles marchandises',
      description: 'Tharyn (50) voit des patterns dans les marchés nocturnes qui ressemblent à ce qu\'il y avait au moment du Vol de la Lumière. Osara a été là lors du Vol. Si Tharyn lui montrait ce qu\'il voit, elle pourrait reconnaître le pattern. Mais Tharyn ne lui a pas encore dit entièrement ce qu\'il observe.',
      personnages_impliques: [50, 47],
      declencheur: 'Tharyn décidant de montrer à Osara ce qu\'il observe dans les marchés',
      consequence: 'Osara reconnaissant le pattern et connectant les marchés actuels avec le Vol de la Lumière',
    },
  ],

  arcs: ['arc_vol_de_la_lumiere'],
  position_dans_arc: 'Témoin du Vol de la Lumière à 13 ans. Vit à Vel\'Nox depuis 71 ans. A vu une lumière dans la tour d\'Ael (45) il y a 3 mois et n\'y est pas allée. Nyrreth (47) cherche quelque chose lié à cette tour. Tharyn (50) voit des patterns dans les marchés qui ressemblent au Vol.',

  relations: [
    { id: 45, nom: 'Ael', type: 'contact', note: 'Le connaissait à 13 ans. Pense qu\'il est peut-être encore en vie. N\'est pas allée vérifier depuis 71 ans.' },
    { id: 50, nom: 'Tharyn', type: 'contact', note: 'Marchand de confiance depuis 25 ans. Observe quelque chose qu\'elle pourrait reconnaître.' },
    { id: 47, nom: 'Nyrreth', type: 'contact', note: 'A remarqué son arrivée il y a 8 ans. Cherche quelque chose lié à la tour d\'Ael. Elle ne lui a pas encore parlé.' },
  ],

  combat: {
    sorts: [
      'Brume toxique (Poison) — diffusion lente d\'une substance de contact — affaiblissement de zone',
      'Résistance ancienne (Poison) — immunité aux toxines accumulée en 84 ans — survie dans des environnements hostiles',
      'Toucher corrosif (Poison) — contact direct qui injecte une toxine — effet immédiat sur une cible',
    ],
  },

  image_prompts: [
    {
      id: 'osara_rue',
      description: 'Osara dans une rue de Vel\'Nox la nuit — une Umbrienne de 84 ans arrêtée dans sa marche, regardant quelque chose dans une direction que le spectateur ne voit pas. En arrière-plan : les silhouettes des bâtiments de Noctéa. Son expression est de quelqu\'un qui a attendu 71 ans pour regarder quelque chose et qui hésite encore.',
      style: 'réaliste Umbrienne ancienne, nuit de Vel\'Nox, arrêt dans la marche, 71 ans d\'attente, lumière invisible au spectateur, décision imminente',
    },
  ],

  lore_long: `Osara a 84 ans. Elle était dans la rue adjacente à la tour d'Ael (45) quand le Vol de la Lumière s'est produit. Elle a entendu quelque chose — pas un cri. Quelque chose de différent. Elle vit à Vel'Nox depuis 71 ans.

Il y a 3 mois, une lumière à la fenêtre de la tour d'Ael. Elle n'y est pas allée.

Nyrreth (47) cherche quelque chose lié à cette tour. Tharyn (50) voit des patterns dans les marchés qui ressemblent au Vol. Elle commence à penser qu'elle va devoir y aller.`,
};

export default osara;
