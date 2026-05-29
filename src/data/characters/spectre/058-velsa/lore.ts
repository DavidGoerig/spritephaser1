import type { PersonnageLoreComplet } from '../../../lore-types';

const velsa: PersonnageLoreComplet = {
  id: 58,
  nom: 'Velsa',
  element: 'Spectre',
  espece: 'Givrins',
  region: 'Crysalme',
  faction: 'Indépendant',

  apparence: {
    taille_corpulence: 'Givrine de 44 ans — une présence qui combine le blanc Givrin et la translucidité Spectre d\'une façon qui rend ses contours légèrement flous dans une pièce faiblement éclairée. Elle n\'amplifie pas cet effet — elle n\'a pas besoin. À Iskral, on la reconnaît à cette qualité avant de reconnaître son visage.',
    peau: 'Blanc Givrin avec une translucidité partielle aux avant-bras — l\'expression de l\'élément Spectre sur une Givrine. Cette translucidité est plus marquée quand elle est près du Champ Gelé. Elle en est consciente et ne comprend pas encore pourquoi le Champ amplifie son élément.',
    yeux: 'Gris très pâle, presque blancs — les yeux d\'une Élue Spectre dans un corps Givrin. Ses yeux voient ce qui est partiellement présent — des présences à l\'état limite, des imprimes d\'actes dans des structures physiques. Ce qu\'elle "entend" depuis le Champ depuis 3 mois passe par ces yeux autant que par ses oreilles.',
    vetements: 'Tenue simple d\'indépendante dans Iskral — ni l\'uniforme des gardiens du Champ, ni les insignes de la Monarchie. Elle a été contactée par Keldris (57) une fois — il voulait comprendre ce qu\'elle entendait. Elle a répondu. Il a dit que c\'était de la superstition. Elle a cessé de lui parler.',
    signes_particuliers: 'Elle s\'arrête parfois en marchant et incline la tête légèrement. Elle écoute quelque chose que les autres n\'entendent pas. Depuis 3 mois, ça arrive de plus en plus souvent — et uniquement dans la direction du Champ Gelé.',
  },

  psychologie: {
    dominante: 'Élue Spectre qui "entend" quelque chose depuis le Champ Gelé depuis 3 mois — une présence persistante dans une structure physique, ce que son élément lui permet de percevoir. Elle ne sait pas si c\'est une empreinte de l\'acte de Karath (52) ou quelque chose d\'autre. Elle cherche à comprendre avant de dire quoi que ce soit de définitif.',
    mecanisme_de_defense: 'La rigueur comme protection contre la démesure. Elle sait que les Élus Spectre ont tendance à interpréter leurs perceptions en termes dramatiques. Elle s\'impose de ne rien conclure avant d\'avoir trois observations indépendantes du même phénomène. Elle en est à deux.',
    contradiction_interne: 'Ce qu\'elle entend depuis le Champ ressemble à quelque chose de vivant — pas une présence humaine, pas une conscience. Quelque chose de plus diffus. Si elle dit ça à Keldris (57), il la traite de superstitieuse. Si elle dit ça à Sylkra (53), la gardienne pourrait comprendre mieux qu\'elle ne le fait elle-même. Elle ne sait pas encore que Sylkra a été réduite au silence.',
    rapport_aux_autres: 'Sylkra (53) est la gardienne du Champ dont elle a entendu parler par des marchands d\'Iskral — une femme qui voyait des anomalies dans les cristaux avant d\'être réduite au silence. Ces deux fonctions — les perceptions de Velsa et les observations de Sylkra — se complètent. Thyval (55) est l\'archiviste qui a quelque chose dans les archives sur le Champ. Elle ne le connaît pas personnellement mais a entendu son nom dans des conversations à Iskral. Keldris (57) lui a dit que ses perceptions n\'avaient pas de valeur officielle. Elle n\'a pas besoin de lui pour continuer à observer.',
    vision_du_monde: 'Les structures physiques portent les empreintes des actes qui les ont créées ou transformées. Le Champ Gelé a été créé par un acte d\'une puissance extraordinaire en An -312. Si cette empreinte persiste, ce n\'est pas de la superstition — c\'est de la physique Spectre. Keldris ne comprend pas la physique Spectre.',
  },

  histoire: {
    enfance: {
      titre: 'La double nature',
      contenu: 'Née Givrine avec un élément Spectre — une combinaison rare, les deux éléments se renforçant mutuellement dans certaines conditions. Sa famille avait eu du mal à savoir comment la former : les Givrins n\'avaient pas de tradition d\'éducation Spectre, et les formateurs Spectre n\'étaient pas habitués au contexte froid de Crysalme. Elle s\'était formée seule en partie.',
    },
    arrivee: {
      titre: 'Iskral',
      contenu: 'À 25 ans, elle s\'était installée à Iskral pour être proche du Champ Gelé — une curiosité professionnelle autant que personnelle. L\'empreinte de l\'acte de Karath dans le gel était l\'exemple le plus grand et le plus ancien d\'une empreinte dans une structure physique qu\'elle pouvait trouver dans le monde. Elle avait passé 19 ans à l\'étudier de loin.',
    },
    premier_conflit: {
      titre: 'La conversation avec Keldris',
      contenu: 'Il y a 2 ans, Keldris (57) l\'avait contactée après avoir entendu parler de ses observations du Champ. Il voulait comprendre ce qu\'elle voyait. Elle lui avait expliqué — les empreintes, les structures persistantes, la physique Spectre appliquée aux grands actes. Il avait dit que tout ça n\'avait pas de valeur dans une décision politique. Elle avait arrêté de lui parler.',
    },
    revelation: {
      titre: 'Ce qu\'elle entend depuis 3 mois',
      contenu: 'Il y a 3 mois, quelque chose avait changé dans ce qu\'elle percevait depuis le Champ. Pas l\'empreinte de Karath — elle connaissait ça depuis 19 ans. Quelque chose de différent, plus proche de la surface du Champ, plus récent. Une présence dans les cristaux périphériques qui n\'était pas là avant. Elle avait commencé à noter ses observations.',
    },
    etat_actuel: {
      titre: 'La troisième observation',
      contenu: 'Elle a deux observations indépendantes de la même présence dans les cristaux périphériques. Elle attend la troisième avant de conclure — sa règle personnelle. La troisième observation, si elle arrive, lui donnera une base suffisante pour dire quelque chose de définitif. Elle cherche quelqu\'un qui comprendrait ce qu\'elle dirait. Elle pense à Sylkra.',
    },
  },

  evenements_narratifs: [
    {
      id: 'velsa_sylkra',
      titre: 'Les deux observatrices',
      description: 'Velsa entend quelque chose dans les cristaux périphériques depuis 3 mois. Sylkra (53) voit des micro-fractures dans ces mêmes cristaux depuis 18 mois. Leurs observations sont complémentaires — l\'une physique, l\'autre Spectre. Si elles se parlaient, la corrélation serait évidente. Ni l\'une ni l\'autre ne sait encore que l\'autre observe la même zone.',
      personnages_impliques: [53, 55],
      declencheur: 'Contact entre Velsa et Sylkra',
      consequence: 'Triangulation physique-Spectre sur l\'état des cristaux périphériques — image plus complète qu\'aucune des deux ne peut avoir seule',
    },
    {
      id: 'velsa_thyval',
      titre: 'L\'archiviste et la perception',
      description: 'Thyval (55) a l\'instruction de Karath (52) pour le dégel. Cette instruction définit des conditions qui correspondent peut-être à ce que Velsa perçoit dans les cristaux. Si Velsa et Thyval partageaient leurs informations, la compréhension de l\'état du Champ serait suffisante pour agir — même sans l\'accord de Keldris (57).',
      personnages_impliques: [55, 53],
      declencheur: 'Velsa et Thyval partageant leurs informations indépendamment de la Monarchie',
      consequence: 'Action possible sans passer par Keldris — et décision sur ce qui est fait du document de Karath',
    },
  ],

  arcs: ['arc_gel_eternel'],
  position_dans_arc: 'Élue Spectre/Givrine qui "entend" quelque chose dans les cristaux périphériques du Champ Gelé depuis 3 mois. Deux observations indépendantes, attend la troisième pour conclure. Ne sait pas encore que Sylkra (53) voit des micro-fractures dans la même zone depuis 18 mois.',

  relations: [
    { id: 53, nom: 'Sylkra', type: 'contact', note: 'A entendu parler d\'elle via des marchands. Leurs observations se complètent. Elles ne se sont pas encore parlé.' },
    { id: 55, nom: 'Thyval', type: 'contact', note: 'Archiviste dont elle a entendu le nom. Son document de Karath et ses perceptions sont liés.' },
    { id: 57, nom: 'Keldris', type: 'adversaire', note: 'Lui a dit que ses perceptions n\'avaient pas de valeur officielle. Elle n\'a pas besoin de lui.' },
  ],

  combat: {
    sorts: [
      'Passage Spectre (Spectre) — traversée temporaire de surfaces cristallines légères — accès à des zones confinées',
      'Perception d\'empreinte (Spectre) — lecture des actes passés dans des structures physiques — information sur l\'histoire d\'un lieu',
      'Dissolution givrine (Spectre+Glace) — réduction de la signature physique dans un environnement froid — quasi-invisibilité dans la neige ou le gel',
    ],
  },

  image_prompts: [
    {
      id: 'velsa_champ',
      description: 'Velsa devant le Champ Gelé de Crysalme — une Givrine de 44 ans debout dans la neige, inclinant légèrement la tête. Elle écoute. Sa translucidité aux avant-bras est amplifiée par la proximité du Champ. En arrière-plan : la surface cristalline du Champ dans lequel 40 000 soldats attendent depuis 312 ans. Elle perçoit quelque chose dans ces cristaux.',
      style: 'réaliste Givrine Spectre, Champ Gelé de Crysalme, écoute d\'une empreinte ancienne, translucidité amplifiée, neige, 312 ans d\'acte persistant',
    },
  ],

  lore_long: `Velsa entend quelque chose dans les cristaux périphériques du Champ Gelé depuis 3 mois. Pas l'empreinte de Karath (52) qu'elle connaît depuis 19 ans — quelque chose de différent, plus proche de la surface.

Elle a deux observations indépendantes. Elle attend la troisième avant de conclure. Elle cherche quelqu'un qui comprendrait ce qu'elle dirait.

Sylkra (53) voit des micro-fractures dans la même zone depuis 18 mois. Elles ne se sont pas encore parlé.`,
};

export default velsa;
